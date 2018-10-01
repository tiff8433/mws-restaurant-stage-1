// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"images/1-1600_large_2x.jpg":[function(require,module,exports) {
module.exports = "/1-1600_large_2x.d05fc441.jpg";
},{}],"images/1-320x240.jpg":[function(require,module,exports) {
module.exports = "/1-320x240.ac2c399b.jpg";
},{}],"images/1-large.jpg":[function(require,module,exports) {
module.exports = "/1-large.f1ee474a.jpg";
},{}],"images/10-1600_large_2x.jpg":[function(require,module,exports) {
module.exports = "/10-1600_large_2x.51c9173c.jpg";
},{}],"images/10-320x240.jpg":[function(require,module,exports) {
module.exports = "/10-320x240.0ce635cb.jpg";
},{}],"images/10-large.jpg":[function(require,module,exports) {
module.exports = "/10-large.e91f85de.jpg";
},{}],"images/2-1600_large_2x.jpg":[function(require,module,exports) {
module.exports = "/2-1600_large_2x.f8b402b5.jpg";
},{}],"images/2-320x240.jpg":[function(require,module,exports) {
module.exports = "/2-320x240.e32ed6bd.jpg";
},{}],"images/2-large.jpg":[function(require,module,exports) {
module.exports = "/2-large.e17080a5.jpg";
},{}],"images/3-1600_large_2x.jpg":[function(require,module,exports) {
module.exports = "/3-1600_large_2x.4f2bc39c.jpg";
},{}],"images/3-320x240.jpg":[function(require,module,exports) {
module.exports = "/3-320x240.797fa24f.jpg";
},{}],"images/3-large.jpg":[function(require,module,exports) {
module.exports = "/3-large.7626b161.jpg";
},{}],"images/4-1600_large_2x.jpg":[function(require,module,exports) {
module.exports = "/4-1600_large_2x.6740797f.jpg";
},{}],"images/4-320x240.jpg":[function(require,module,exports) {
module.exports = "/4-320x240.3b870ee7.jpg";
},{}],"images/4-large.jpg":[function(require,module,exports) {
module.exports = "/4-large.420d230a.jpg";
},{}],"images/5-1600_large_2x.jpg":[function(require,module,exports) {
module.exports = "/5-1600_large_2x.ab7b4a9d.jpg";
},{}],"images/5-320x240.jpg":[function(require,module,exports) {
module.exports = "/5-320x240.3a1b3100.jpg";
},{}],"images/5-large.jpg":[function(require,module,exports) {
module.exports = "/5-large.d852df1a.jpg";
},{}],"images/6-1600_large_2x.jpg":[function(require,module,exports) {
module.exports = "/6-1600_large_2x.de1af0ea.jpg";
},{}],"images/6-320x240.jpg":[function(require,module,exports) {
module.exports = "/6-320x240.5d16a4ad.jpg";
},{}],"images/6-large.jpg":[function(require,module,exports) {
module.exports = "/6-large.9e5e7b56.jpg";
},{}],"images/7-1600_large_2x.jpg":[function(require,module,exports) {
module.exports = "/7-1600_large_2x.0a819945.jpg";
},{}],"images/7-320x240.jpg":[function(require,module,exports) {
module.exports = "/7-320x240.c358d0db.jpg";
},{}],"images/7-large.jpg":[function(require,module,exports) {
module.exports = "/7-large.7ccb68b4.jpg";
},{}],"images/8-1600_large_2x.jpg":[function(require,module,exports) {
module.exports = "/8-1600_large_2x.01cb6af0.jpg";
},{}],"images/8-320x240.jpg":[function(require,module,exports) {
module.exports = "/8-320x240.936b49a1.jpg";
},{}],"images/8-large.jpg":[function(require,module,exports) {
module.exports = "/8-large.c19f41fb.jpg";
},{}],"images/9-1600_large_2x.jpg":[function(require,module,exports) {
module.exports = "/9-1600_large_2x.b94fd055.jpg";
},{}],"images/9-320x240.jpg":[function(require,module,exports) {
module.exports = "/9-320x240.0e2ee617.jpg";
},{}],"images/9-large.jpg":[function(require,module,exports) {
module.exports = "/9-large.62a30f40.jpg";
},{}],"images/*.jpg":[function(require,module,exports) {
module.exports = {
  "1-1600_large_2x": require("./1-1600_large_2x.jpg"),
  "1-320x240": require("./1-320x240.jpg"),
  "1-large": require("./1-large.jpg"),
  "10-1600_large_2x": require("./10-1600_large_2x.jpg"),
  "10-320x240": require("./10-320x240.jpg"),
  "10-large": require("./10-large.jpg"),
  "2-1600_large_2x": require("./2-1600_large_2x.jpg"),
  "2-320x240": require("./2-320x240.jpg"),
  "2-large": require("./2-large.jpg"),
  "3-1600_large_2x": require("./3-1600_large_2x.jpg"),
  "3-320x240": require("./3-320x240.jpg"),
  "3-large": require("./3-large.jpg"),
  "4-1600_large_2x": require("./4-1600_large_2x.jpg"),
  "4-320x240": require("./4-320x240.jpg"),
  "4-large": require("./4-large.jpg"),
  "5-1600_large_2x": require("./5-1600_large_2x.jpg"),
  "5-320x240": require("./5-320x240.jpg"),
  "5-large": require("./5-large.jpg"),
  "6-1600_large_2x": require("./6-1600_large_2x.jpg"),
  "6-320x240": require("./6-320x240.jpg"),
  "6-large": require("./6-large.jpg"),
  "7-1600_large_2x": require("./7-1600_large_2x.jpg"),
  "7-320x240": require("./7-320x240.jpg"),
  "7-large": require("./7-large.jpg"),
  "8-1600_large_2x": require("./8-1600_large_2x.jpg"),
  "8-320x240": require("./8-320x240.jpg"),
  "8-large": require("./8-large.jpg"),
  "9-1600_large_2x": require("./9-1600_large_2x.jpg"),
  "9-320x240": require("./9-320x240.jpg"),
  "9-large": require("./9-large.jpg")
};
},{"./1-1600_large_2x.jpg":"images/1-1600_large_2x.jpg","./1-320x240.jpg":"images/1-320x240.jpg","./1-large.jpg":"images/1-large.jpg","./10-1600_large_2x.jpg":"images/10-1600_large_2x.jpg","./10-320x240.jpg":"images/10-320x240.jpg","./10-large.jpg":"images/10-large.jpg","./2-1600_large_2x.jpg":"images/2-1600_large_2x.jpg","./2-320x240.jpg":"images/2-320x240.jpg","./2-large.jpg":"images/2-large.jpg","./3-1600_large_2x.jpg":"images/3-1600_large_2x.jpg","./3-320x240.jpg":"images/3-320x240.jpg","./3-large.jpg":"images/3-large.jpg","./4-1600_large_2x.jpg":"images/4-1600_large_2x.jpg","./4-320x240.jpg":"images/4-320x240.jpg","./4-large.jpg":"images/4-large.jpg","./5-1600_large_2x.jpg":"images/5-1600_large_2x.jpg","./5-320x240.jpg":"images/5-320x240.jpg","./5-large.jpg":"images/5-large.jpg","./6-1600_large_2x.jpg":"images/6-1600_large_2x.jpg","./6-320x240.jpg":"images/6-320x240.jpg","./6-large.jpg":"images/6-large.jpg","./7-1600_large_2x.jpg":"images/7-1600_large_2x.jpg","./7-320x240.jpg":"images/7-320x240.jpg","./7-large.jpg":"images/7-large.jpg","./8-1600_large_2x.jpg":"images/8-1600_large_2x.jpg","./8-320x240.jpg":"images/8-320x240.jpg","./8-large.jpg":"images/8-large.jpg","./9-1600_large_2x.jpg":"images/9-1600_large_2x.jpg","./9-320x240.jpg":"images/9-320x240.jpg","./9-large.jpg":"images/9-large.jpg"}],"js/idb/index.js":[function(require,module,exports) {
"use strict";

var _ = _interopRequireDefault(require("../../images/*.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// set up db store
var dbPromise = idb.open('db', 1, function (upgradeDb) {
  console.log('creating dbPromise');

  switch (upgradeDb.oldVersion) {
    case 1:
      var restaurantStore = upgradeDb.createObjectStore('restaurant');
      restaurantStore.createIndex('name');
  }
});
var idbHelper = {
  get: function get(dbName, key) {
    return dbPromise.then(function (db) {
      db.transaction(dbName).objectStore(dbName).get(key);
    });
  },
  set: function set(dbName, key, val) {
    console.log('SETTING', key, val, 'on', dbName);
    return dbPromise.then(function (db) {
      var tx = db.transaction(dbName, 'readwrite');
      tx.objectStore(dbName).put(val, key);
      return tx.complete;
    });
  },
  delete: function _delete(dbName, key) {
    return dbPromise.then(function (db) {
      var tx = db.transaction(dbName, 'readwrite');
      tx.objectStore(dbName).delete(key);
      return tx.complete;
    });
  },
  clear: function clear() {
    return dbPromise.then(function (db) {
      var tx = db.transaction(dbName, 'readwrite');
      tx.objectStore(dbName).clear();
      return tx.complete;
    });
  },
  keys: function keys() {
    return dbPromise.then(function (db) {
      var tx = db.transaction(dbName);
      var keys = [];
      var store = tx.objectStore(dbName);
      (store.iterateKeyCursor || store.iterateCursor).call(store, function (cursor) {
        if (!cursor) return;
        keys.push(cursor.key);
        cursor.continue();
      });
      return tx.complete.then(function () {
        return keys;
      });
    });
  }
}; // get a value
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
},{"../../images/*.jpg":"images/*.jpg"}],"../../../../../usr/local/lib/node_modules/parcel-bundler/lib/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55019" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../../../../usr/local/lib/node_modules/parcel-bundler/lib/builtins/hmr-runtime.js","js/idb/index.js"], null)
//# sourceMappingURL=/idb.e5ef8821.map