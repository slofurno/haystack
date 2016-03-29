/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _domToggle = __webpack_require__(1);

	var _domToggle2 = _interopRequireDefault(_domToggle);

	var _request = __webpack_require__(2);

	var _request2 = _interopRequireDefault(_request);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	document.getElementById("get").onclick = function (e) {
	  return (0, _request2.default)({
	    method: "GET",
	    url: "/api/profile",
	    headers: { Authorization: "asdf-asdf-asdf-asdf" }
	  }).then(function (x) {
	    document.getElementById("display").innerHTML = x;
	  }).catch(function (x) {
	    return console.error(x);
	  });
	};

	var slice = function slice(n) {
	  return [].slice.call(n);
	};

	var collect = function collect(name, value) {
	  return (0, _request2.default)({
	    method: "PUT",
	    url: "/api/profile",
	    body: JSON.stringify({
	      name: name,
	      value: value
	    }),
	    headers: { Authorization: "asdf-asdf-asdf-asdf" }
	  }).catch(function (x) {
	    return console.error(x);
	  });
	};

	var root = document.getElementById("root");
	slice(root.children).map(function (x) {
	  return (0, _domToggle2.default)(x, collect);
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	function button(text) {
	  var el = document.createElement("input");
	  el.type = "button";
	  el.value = text;
	  return el;
	}

	function Toggle(node, onChange) {
	  var parent = node.parentNode;
	  var name = node.name;
	  var placeholder = node.placeholder || node.name;
	  var value = node.value;

	  var container = document.createElement("div");
	  container.className = "js-toggle-container";
	  parent.replaceChild(container, node);

	  var ok = button(" ok ");
	  ok.className = "accept";
	  var cancel = button(" x ");
	  cancel.className = "cancel";
	  var textel = document.createElement("a");

	  ok.onclick = function (e) {
	    e.preventDefault();
	    if (node.value !== value) {
	      value = node.value;
	      onChange(name, value);
	    }
	    showText();
	  };

	  cancel.onclick = function (e) {
	    e.preventDefault();
	    node.value = value;
	    showText();
	  };

	  function showText() {
	    container.innerHTML = "";
	    textel.innerHTML = value || placeholder;
	    container.appendChild(textel);
	  }

	  function showInput() {
	    container.innerHTML = "";
	    container.appendChild(node);
	    container.appendChild(ok);
	    container.appendChild(cancel);
	  }

	  textel.onclick = showInput;
	  showText();
	}

	if (typeof module !== 'undefined' && module.exports) {
	  module.exports = Toggle;
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	function request(options) {
	  if (!options) return;
	  var body = options.body || "";
	  var headers = options.headers || {};

	  return new Promise(function (resolve, reject) {
	    var client = new XMLHttpRequest();
	    client.onload = function (e) {
	      if (client.status >= 300) {
	        reject(client.statusText);
	      } else {
	        resolve(client.response);
	      }
	    };
	    client.open(options.method, options.url);

	    Object.keys(headers).forEach(function (x) {
	      client.setRequestHeader(x, headers[x]);
	    });

	    client.send(body);
	  });
	}

	module.exports = request;

/***/ }
/******/ ]);