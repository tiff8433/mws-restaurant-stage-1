// set up db store
const dbPromise = idb.open('db', 1, (upgradeDb) => {
    console.log('creating dbPromise');
    switch(upgradeDb.oldVersion) {
        case 1:
            const restaurantStore = upgradeDb.createObjectStore('restaurant');
            restaurantStore.createIndex('name');
        case 2:
            const reviewStore = ugradeDb.createObjectStore('reviews');
            reviewStore.createIndex("restaurant_id");
        case 3:
            const offlineStore = upgradeDb.createObjectStore('offline');

    }
});

// from https://github.com/jakearchibald/idb
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
