// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
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

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
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
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"Dataa.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// import React from "react";
// import { Table } from "./Table";

// export const App = () => {
//     const username = 'monika@optimizory.com';
//     const password = "ATATT3xFfGF08OsYUDHlnPuJArXKeiG8uYA1AhIiHtBElWjiyx-dgScflDLcbaFTGikADiX9OPI1EHKv72m565Xp8faNvagDO6CsksaYtnJFyD0le6z9w4pgZsx7ZhbXdgVtnGGKzCgH62hVcCbQ_YeFdwnX8PhGtLEvG-14I36D9w1sO6GRXqo=C52C5027";
//         // const url = "https://monikavalecha.atlassian.net/rest/api/3/search";
//         // const searchQuery = 'project=P2%20AND%20priority=High'; 

//         fetch('https://monikavalecha.atlassian.net/rest/api/3/search?jql=project=P2%20AND%20priority=High', {
//         method: 'GET',
//         headers: {
//           'Authorization': `Basic ${Buffer.from(
//             username + ':' + password
//           ).toString('base64')}`,
//           'Accept': 'application/json'
//         }
//       })
//         .then(response => {
//           console.log(
//             `Response: ${response.status} ${response.statusText}`
//           );
//           return response.json();
//         })
//         .then(jsonData => {
//             //responseData = jsonData;
//             console.log(jsonData)
//         })
//         .catch(err => console.error(err));

//         return(
//             <div>
//                 <Table
//                 data={jsonData}
//                 />
//             </div>
//         )
//     }

//import Table from './Table';

const App = () => {
  // a variable that stroes json data

  const username = 'monika@optimizory.com';
  const password = "ATATT3xFfGF08OsYUDHlnPuJArXKeiG8uYA1AhIiHtBElWjiyx-dgScflDLcbaFTGikADiX9OPI1EHKv72m565Xp8faNvagDO6CsksaYtnJFyD0le6z9w4pgZsx7ZhbXdgVtnGGKzCgH62hVcCbQ_YeFdwnX8PhGtLEvG-14I36D9w1sO6GRXqo=C52C5027";
  const url = "https://monikavalecha.atlassian.net/rest/api/3/search";
  const searchQuery = 'project=P2%20AND%20priority=High';

  //   AP.request('/rest/api/3/search?jql=project=P2%20AND%20priority=High&fields=*all', {
  //     success: function(responseText){
  //       alert(responseText);
  //     }
  //   });

  fetch('https://monikavalecha.atlassian.net/rest/api/3/search?jql=project=P2%20AND%20priority=High&fields=*all', {
    method: 'GET',
    headers: {
      'Authorization': `Basic ${Buffer.from(username + ':' + password).toString('base64')}`,
      'Accept': 'application/json'
    }
  }).then(response => response.json()).then(data => {
    result = data;
    console.log(data);
  }).catch(err => console.error(err));
  const jsonData = [{
    expand: 'operations,versionedRepresentations,editmeta,changelog,customfield_10010.requestTypePractice,renderedFields',
    id: '10008',
    self: 'https://monikavalecha.atlassian.net/rest/api/3/issue/10008',
    key: 'P2-7',
    fields: [Object]
  }, {
    expand: 'operations,versionedRepresentations,editmeta,changelog,customfield_10010.requestTypePractice,renderedFields',
    id: '10006',
    self: 'https://monikavalecha.atlassian.net/rest/api/3/issue/10006',
    key: 'P2-5',
    fields: [Object]
  }, {
    expand: 'operations,versionedRepresentations,editmeta,changelog,customfield_10010.requestTypePractice,renderedFields',
    id: '10003',
    self: 'https://monikavalecha.atlassian.net/rest/api/3/issue/10003',
    key: 'P2-2',
    fields: [Object]
  }, {
    expand: 'operations,versionedRepresentations,editmeta,changelog,customfield_10010.requestTypePractice,renderedFields',
    id: '10002',
    self: 'https://monikavalecha.atlassian.net/rest/api/3/issue/10002',
    key: 'P2-1',
    fields: [Object]
  }];
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(Table, {
    data: jsonData
  }));
};
var _default = App;
exports.default = _default;
},{}]},{},["Dataa.jsx"], null)
//# sourceMappingURL=/Dataa.js.map