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

	__webpack_require__(1);

	__webpack_require__(2);

	__webpack_require__(3);

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = traverse;
	function traverse(obj, keys) {
	    if (keys.length) {
	        var currentKey = keys.shift();
	        obj = obj[currentKey];

	        if (obj == undefined) {
	            // coercive equality used to test for null as well.
	            throw new ReferenceError(currentKey);
	        }

	        return traverse(obj, keys);
	    }

	    return obj;
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (state, componentProps) {
	    return Object.assign({}, populateStateData(componentProps.getFromState, state), populateCurryData(componentProps.getFromActions && componentProps.getFromActions.CURRY, state));
	};

	var _traverse = __webpack_require__(1);

	var _traverse2 = _interopRequireDefault(_traverse);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function populateCurryData(curryPaths, state) {
	    return curryPaths && { CURRY: curryPaths.map(function (path) {
	            try {
	                return (0, _traverse2.default)(state, path.split('.'));
	            } catch (e) {
	                console.warn('WARNING: "' + path + '" does not exist. null will be assigned in place of the desired value');
	                return null;
	            }
	        }) };
	}

	function populateStateData(paths, state) {
	    return paths && paths.reduce(function (previous, current) {
	        var props = current.split('.');
	        try {
	            previous[props.pop()] = (0, _traverse2.default)(state, current.split('.'));
	        } catch (e) {
	            if (~props.indexOf(e.message)) {
	                console.error('value "' + current + '" is inaccessible: ' + props.slice(0, props.indexOf(e.message) + 1).join('.') + ' cannot be resolved');
	            } else {
	                previous[e.message] = null;
	            }
	        }
	        return previous;
	    }, {});
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (dispatch, componentProps) {
	    var ret = {},
	        actions = componentProps.getFromActions;

	    if (actions != undefined) {
	        actions.CURRY && delete actions.CURRY;

	        Object.keys(actions).forEach(function (action) {
	            ret[action] = function () {
	                return dispatch(actions[action].apply(actions, arguments));
	            };
	        });
	    }
	    return ret;
	};

	;

/***/ }
/******/ ]);