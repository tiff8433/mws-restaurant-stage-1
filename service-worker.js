const CACHE_VERSION = "mws-apps-v2";
let CACHE_FILES = [
    "/",
    "/index.html",
    "/restaurant.html",
    "/register.js",
    "/css/styles.css",
    "/js/dbhelper.js",
    "/js/main.js",
    "/js/restaurant_info.js"
];

// add images to files to cache
for (let i = 1; i < 11; i++) {
    const prefix = `/images/${i}`;
    CACHE_FILES.push(`${prefix}-320x240.jpg`);
    CACHE_FILES.push(`${prefix}-1600_large_2x.jpg`);
    CACHE_FILES.push(`${prefix}-large.jpg`);
};

// Listen for install event, set callback
self.addEventListener('install', (event) => {
    console.log(`Attempting to install service worker and cache static assets ${CACHE_VERSION}`);
    event.waitUntil(
        caches.open(CACHE_VERSION)
            .then((cache) => {
                console.log('Opened cache');
                return cache.addAll(CACHE_FILES);
            })
    );
});


self.addEventListener('activate', (event) => {
    // Perform some task
    console.log('Activating new service worker...');

    const cacheWhitelist = [CACHE_VERSION];

    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

self.addEventListener('fetch', (event) => {
    console.log('Fetch event for ', event.request.url);
    let req = event.request;
    if (event.request.url.includes("restaurant.html")) {
        const url = "restaurant.html";
        req = new Request(url);
    }
    event.respondWith(
      caches.match(event.request).then((response) => {
        if (response) {
          console.log('Found ', event.request.url, ' in cache');
          return response;
        }
        console.log('Network request for ', event.request.url);
        return fetch(event.request).then((response) => {
          
            return caches.open(CACHE_VERSION).then((cache) => {
              if (event.request.url.indexOf('test') < 0) {
                cache.put(event.request.url, response.clone());
              }
              return response;
            });
          });
  
      }).catch((error) => {
        return new Response("Error page not found", {status: 404, statusText: "Error page not found"});
      })
    );
});