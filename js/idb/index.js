// set up db store
const dbPromise = idb.open('db', 3, (upgradeDb) => {
    console.log('creating dbPromise', upgradeDb);
    switch(upgradeDb.oldVersion) {
        case 0:
            const restaurantStore = upgradeDb.createObjectStore('restaurant', {
                keyPath: "id"
            });
            restaurantStore.createIndex('name', 'name');
        case 1:
            const reviewStore = upgradeDb.createObjectStore('reviews');
        case 2:
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
            const tx = db.transaction(dbName, 'readwrite');
            if (dbName !== "restaurant") {
                tx.objectStore(dbName).put(val, key);
            }
            else {
                tx.objectStore(dbName).put(val);
            }
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
    clear(dbName) {
        return dbPromise.then(db => {
            const tx = db.transaction(dbName, 'readwrite');
            tx.objectStore(dbName).clear();
            return tx.complete;
        });
    },
    keys(dbName) {
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
