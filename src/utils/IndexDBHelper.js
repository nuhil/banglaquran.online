import idb from 'idb';
export const openDatabase = () => {
  // If the browser doesn't support service worker,
  // we don't care about having a database
  if (!navigator.serviceWorker) {
    return Promise.resolve();
  }

  return idb.open('banglaquran', 1, function(upgradeDb) {
    var store = upgradeDb.createObjectStore('banglaquran', {
      keyPath: 'id'
    });
    store.createIndex('by-id', 'id');
  });
}

export const showCachedMessages = (dbPromise) => {
  return dbPromise.then( (db) => {

    // get all of the banglaquran message objects from indexeddb,

    let index = db.transaction('banglaquran')
      .objectStore('banglaquran').index('by-id');
    return index.getAll().then( (data) => data );
  });
}
