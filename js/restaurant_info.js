let restaurant;
var newMap;

/**
 * Initialize map as soon as the page is loaded.
 */
document.addEventListener('DOMContentLoaded', (event) => {  
  initMap();
  submitOfflineReviews();
});


/**
 * Initialize leaflet map
 */
initMap = () => {
  fetchRestaurantFromURL((error, restaurant) => {
    if (error) { // Got an error!
      console.error(error);
    } else {      
      self.newMap = L.map('map', {
        center: [restaurant.latlng.lat, restaurant.latlng.lng],
        zoom: 16,
        scrollWheelZoom: false
      });
      L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.jpg70?access_token={mapboxToken}', {
        mapboxToken: 'pk.eyJ1IjoidGlmZmFueWgxMDEiLCJhIjoiY2ppcTltYWdjMDB4dTNsbzF2MTBrd3U5NyJ9.p99H31XzJEgUSu1jJYRZDg',
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
          '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
          'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox.streets'    
      }).addTo(newMap);
      fillBreadcrumb();
      DBHelper.mapMarkerForRestaurant(self.restaurant, self.newMap);
    }
  });
}


/**
 * Get current restaurant from page URL.
 */
fetchRestaurantFromURL = (callback) => {
  if (self.restaurant) { // restaurant already fetched!
    callback(null, self.restaurant)
    return;
  }
  const id = getParameterByName('id');
  if (!id) { // no id found in URL
    error = 'No restaurant id in URL'
    callback(error, null);
  } else {
    DBHelper.fetchRestaurantById(id, (error, restaurant) => {
      self.restaurant = restaurant;
      if (!restaurant) {
        console.error(error);
        return;
      }
      fillRestaurantHTML(restaurant);
      callback(null, restaurant)
    });
  }
}

/**
 * Create restaurant HTML and add it to the webpage
 */
fillRestaurantHTML = (restaurant = self.restaurant) => {
  const name = document.getElementById('restaurant-name');
  name.innerHTML = restaurant.name;
  const fave = document.getElementById('favorite-icon');
  if (restaurant.is_favorite === "true") {
    fave.innerHTML = "&#9829";
    fave.classList.add("is_fave", restaurant.is_favorite);
  } else {
    fave.innerHTML = "&#9825"
    fave.classList.add("is_not_fave");
  }

  const address = document.getElementById('restaurant-address');
  address.innerHTML = restaurant.address;

  const picture = document.getElementById('restaurant-img');
   
  const image = document.createElement('img');
  image.className = 'restaurant-img';
  pathPrefix = DBHelper.imageUrlForRestaurant(restaurant);
  image.src = `${pathPrefix}-large.jpg`;
  
  const smSrc = document.createElement('source');
  smSrc.media = '(max-width: 450px)';
  smSrc.srcset = `${pathPrefix}-320x240.jpg`;
  
  
  const lgSrc = document.createElement('source');
  lgSrc.media = '(min-width: 750px)';
  lgSrc.srcset = `${pathPrefix}-large.jpg, ${pathPrefix}-1600_large_2x.jpg 2x`;
  
  image.alt = smSrc.alt = lgSrc.alt = restaurant.name;
  picture.appendChild(smSrc);
  picture.appendChild(lgSrc);
  picture.appendChild(image);
  // name.appendChild(picture);

  const cuisine = document.getElementById('restaurant-cuisine');
  cuisine.innerHTML = restaurant.cuisine_type;

  // set restaurant id on form
  const restaurantIdElem = document.getElementById('restaurant-id-input');
  restaurantIdElem.value = restaurant.id;

  // fill operating hours
  if (restaurant.operating_hours) {
    fillRestaurantHoursHTML();
  }

  DBHelper.fetchReviewsForRestaurant(restaurant.id, (err, resp) => {
    if (err) {
      console.log('error fetching reviews', err);
    } else {
      console.log('got reviews for rest id', restaurant.id, '-->', resp);
      fillReviewsHTML(resp);
    }
  });
}

/**
 * Create restaurant operating hours HTML table and add it to the webpage.
 */
fillRestaurantHoursHTML = (operatingHours = self.restaurant.operating_hours) => {
  const hours = document.getElementById('restaurant-hours');
  for (let key in operatingHours) {
    const row = document.createElement('tr');

    const day = document.createElement('td');
    day.innerHTML = key;
    row.appendChild(day);

    const time = document.createElement('td');
    time.innerHTML = operatingHours[key];
    row.appendChild(time);

    hours.appendChild(row);
  }
}

/**
 * Create all reviews HTML and add them to the webpage.
 */
fillReviewsHTML = (reviews = self.restaurant.reviews) => {
  const container = document.getElementById('reviews-container');
  const title = document.createElement('h3');
  title.innerHTML = 'Reviews';
  container.appendChild(title);

  if (!reviews) {
    const noReviews = document.createElement('p');
    noReviews.innerHTML = 'No reviews yet!';
    container.appendChild(noReviews);
    return;
  }
  const ul = document.getElementById('reviews-list');
  reviews.forEach(review => {
    ul.appendChild(createReviewHTML(review));
  });
  container.appendChild(ul);
}

/**
 * Create review HTML and add it to the webpage.
 */
createReviewHTML = (review) => {
  const li = document.createElement('li');
  const name = document.createElement('p');
  name.innerHTML = review.name;
  li.appendChild(name);

  // const date = document.createElement('p');
  // date.innerHTML = review.date;
  // li.appendChild(date);

  const rating = document.createElement('p');
  rating.innerHTML = `Rating: ${review.rating}`;
  li.appendChild(rating);

  const comments = document.createElement('p');
  comments.innerHTML = review.comments;
  li.appendChild(comments);

  return li;
}

/**
 * Add restaurant name to the breadcrumb navigation menu
 */
fillBreadcrumb = (restaurant=self.restaurant) => {
  const breadcrumb = document.getElementById('breadcrumb');
  const li = document.createElement('li');
  li.innerHTML = restaurant.name;
  breadcrumb.appendChild(li);
}

/**
 * Get a parameter by name from page URL.
 */
getParameterByName = (name, url) => {
  if (!url)
    url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`),
    results = regex.exec(url);
  if (!results)
    return null;
  if (!results[2])
    return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

submitReview = () => {
  const restaurantId = self.restaurant.id;
  const name = document.getElementById('name').value;
  const rating = document.getElementById('rating').value;
  const comments = document.getElementById('comments').value;
  const payload = {
    restaurant_id: restaurantId,
    name,
    rating,
    comments
  };
  DBHelper.submitReview(payload, (err, resp) => {
    if (err) {
      console.log('send review to idb', err);
      idbHelper.set('offline', Date.now(), payload);
    } else {
      console.log('review sent!!', resp);
      const ul = document.getElementById('reviews-list');
      ul.appendChild(createReviewHTML(resp));
    }

    // clear inputs
    document.getElementById('name').value = "";
    document.getElementById('rating').value = 0;
    document.getElementById('comments').value = "";
  });

};

toggleFave = () => {
  self.restaurant.is_favorite = self.restaurant.is_favorite === "true" ? "false" : "true";
  DBHelper.toggleFavorite(self.restaurant.id, self.restaurant.is_favorite, (err, resp) => {
    if (err) {
      console.log('error favoriting restaurant', err);
    } else {
      const fave = document.getElementById('favorite-icon');
      if (self.restaurant.is_favorite === "true") {
        fave.innerHTML = "&#9829";
        fave.classList.add("is_fave");
        fave.classList.remove("is_not_fave");
      } else {
        fave.innerHTML = "&#9825"
        fave.classList.add("is_not_fave");
        fave.classList.remove("is_fave");
      }
    }
  });
}

submitOfflineReviews = () => {
  idbHelper.keys('offline').then((keys) => {
    console.log({keys});
    keys.forEach((key) => {
      dbPromise.then(db => {
        return db.transaction('offline')
          .objectStore('offline').get(key);
      }).then(obj => {
        console.log('success saving offline review', obj);
        DBHelper.submitReview(obj, () => {

          idbHelper.delete('offline', key).then(() => {
            console.log('key deleted');
          });
        })
      }).catch(err => {
        console.log('error submitting offline review', err);
      });
    })
  })
}
