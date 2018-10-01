// set up db store
const dbPromise = idb.open('db', 1, (upgradeDb) => {
    console.log('creating dbPromise');
    switch(upgradeDb.oldVersion) {
        case 1:
            const restaurantStore = upgradeDb.createObjectStore('restaurant');
            restaurantStore.createIndex('name');

    }
});

const idbHelper = {
    get(dbName, key) {
        return dbPromise.then(db => {
            db.transaction(dbName)
                .objectStore(dbName).get(key)
        });
    },
    set(dbName, key, val) {
        return dbPromise.then(db => {
            console.log('SETTING', key, val.name, 'on', db);
            const tx = db.transaction(dbName, 'readwrite');
            tx.objectStore(dbName).put(val, key);
            return tx.complete;
        });
    },
    delete(dbName, key) {
        return dbPromise.then(db => {
            const tx = db.transaction(dbName, 'readwrite');
            tx.objectStore(dbName).delete(key);
            return tx.complete;
        });
    },
    clear() {
        return dbPromise.then(db => {
            const tx = db.transaction(dbName, 'readwrite');
            tx.objectStore(dbName).clear();
            return tx.complete;
        });
    },
    keys() {
        return dbPromise.then(db => {
            const tx = db.transaction(dbName);
            const keys = [];
            const store = tx.objectStore(dbName);

            (store.iterateKeyCursor || store.iterateCursor).call(store, cursor => {
                if (!cursor) return;
                keys.push(cursor.key);
                cursor.continue();
            });
            return tx.complete.then(() => keys);
        })
    }
};


// get a value
// dbPromise.then((db) => {
//     const tx = db.transaction('restaurant');
//     const restaurantStore = tx.objectStore('restaurant');
//     return restaurantStore.get('rest');
// }).then((val) => {
//     console.log('The value of "rest" is", val');
// });

// set a value
// dbPromise.then((db) => {
//     const tx = db.transaction('restaurant', 'readwrite');
//     const restaurantStore = tx.objectStore('restaurant');
//     restaurantStore.put('restaurant_id', 'restaurant_obj');
//     return tx.complete;
// }).then((val) => {
//     console.log('Added restaurant_obj to restaurant_id');
// });

// return all
// dbPromise.then((db) => {
//     const tx = db.transaaction('restaurant');
//     const restStore = tx.objectStore('restaurant');
//     const neighborhoodIdx = restStore.index('neighborhood');
//     return neighborhoodIdx.getAll();
// }).then((restaurants) => {
//     console.log('indexed by neighborhood', restaurants);
// });


// // iterate through list
// dbPromise.then((db) => {
//     const tx = db.transaaction('restaurant');
//     const restStore = tx.objectStore('restaurant');
//     const neighborhoodIdx = restStore.index('neighborhood');
//     return neighborhoodIdx.openCursor();
// }).then(function logRestaurant(cursor) {
//     if (!cursor) return;
//     console.log('cursored at:', cursor.value.name);

//     // update: cursor.update
//     // delete: cursor.delete
//     // skip: cursor.advance(numtoAdvance)
//     return cursor.continue().then(logRestaurant);
// }).then(() => {
//     console.log('done cursoring');
// });
