/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/AjaxAdapter.js":
/*!****************************!*\
  !*** ./src/AjaxAdapter.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});exports.default=void 0;var _axios=_interopRequireDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var _default=function _default(baseURL){var instance=_axios.default.create({baseURL:baseURL,timeout:1000,headers:{'Content-Type':'application/json'}});return{read:function read(){return instance.get('/').then(function(_ref){var items=_ref.data.items;return items;}).catch(function(e){throw e;});},update:function update(id,data){return instance.put(\"/\".concat(id),{task:item}).catch(function(e){throw e;});}};};exports.default=_default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQWpheEFkYXB0ZXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQWpheEFkYXB0ZXIuanM/NzM3MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAgJ2F4aW9zJztcblxuZXhwb3J0IGRlZmF1bHQgKGJhc2VVUkwpID0+IHtcbiAgY29uc3QgaW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xuICAgIGJhc2VVUkwsXG4gICAgdGltZW91dDogMTAwMCxcbiAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgfSk7XG5cbiAgcmV0dXJuIHtcblxuICAgIHJlYWQoKSB7XG4gICAgICByZXR1cm4gaW5zdGFuY2UuZ2V0KCcvJylcbiAgICAgICAgLnRoZW4oKHsgZGF0YTogeyBpdGVtcyB9IH0pID0+IGl0ZW1zKVxuICAgICAgICAuY2F0Y2goKGUpID0+IHsgdGhyb3cgZTsgfSk7XG4gICAgfSxcblxuICAgIHVwZGF0ZShpZCwgZGF0YSkge1xuICAgICAgcmV0dXJuIGluc3RhbmNlLnB1dChgLyR7aWR9YCwgeyB0YXNrOiBpdGVtIH0pXG4gICAgICAgIC5jYXRjaCgoZSkgPT4geyB0aHJvdyBlOyB9KTtcbiAgICB9LFxuICB9O1xufTtcblxuIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/AjaxAdapter.js\n");

/***/ }),

/***/ "./src/App/index.js":
/*!**************************!*\
  !*** ./src/App/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});exports.default=void 0;var _react=_interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));__webpack_require__(/*! ./styles.css */ \"./src/App/styles.css\");var _AjaxAdapter=_interopRequireDefault(__webpack_require__(/*! ../AjaxAdapter */ \"./src/AjaxAdapter.js\"));var _BidDashboard=_interopRequireDefault(__webpack_require__(/*! ../BidDashboard */ \"./src/BidDashboard/index.js\"));var _AvailableItems=_interopRequireDefault(__webpack_require__(/*! ../AvailableItems */ \"./src/AvailableItems/index.js\"));var _socket=_interopRequireDefault(__webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/lib/index.js\"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):{};if(desc.get||desc.set){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}}newObj.default=obj;return newObj;}}function _typeof(obj){if(typeof Symbol===\"function\"&&typeof Symbol.iterator===\"symbol\"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol===\"function\"&&obj.constructor===Symbol&&obj!==Symbol.prototype?\"symbol\":typeof obj;};}return _typeof(obj);}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,\"next\",value);}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,\"throw\",err);}_next(undefined);});};}function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError(\"Invalid attempt to spread non-iterable instance\");}function _iterableToArray(iter){if(Symbol.iterator in Object(iter)||Object.prototype.toString.call(iter)===\"[object Arguments]\")return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)===\"object\"||typeof call===\"function\")){return call;}return _assertThisInitialized(self);}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass,superClass){if(typeof superClass!==\"function\"&&superClass!==null){throw new TypeError(\"Super expression must either be null or a function\");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return self;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}var ItemDataModel=(0,_AjaxAdapter.default)('/api/items');var App=/*#__PURE__*/function(_Component){_inherits(App,_Component);function App(props){var _this;_classCallCheck(this,App);_this=_possibleConstructorReturn(this,_getPrototypeOf(App).call(this,props));_defineProperty(_assertThisInitialized(_assertThisInitialized(_this)),\"handleSubmit\",function(event){var body=event.target.value;if(event.keyCode===13&&body){var message={body:body,from:\"me\"};_this.setState({messages:[message].concat(_toConsumableArray(_this.state.messages))});_this.socket.emit('message',body);event.target.value='';}});_this.state={items:[],messages:[]};return _this;}_createClass(App,[{key:\"componentDidMount\",value:function componentDidMount(){var _this2=this;console.log('yes comp did mount');this.getData();this.socket=_socket.default.connect('/');this.socket.on('message',function(message){_this2.setState({messages:[message].concat(_toConsumableArray(_this2.state.messages))});});}},{key:\"getData\",value:function(){var _getData=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee(){return regeneratorRuntime.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.t0=this;_context.next=3;return ItemDataModel.read();case 3:_context.t1=_context.sent;_context.t2={items:_context.t1};_context.t0.setState.call(_context.t0,_context.t2);case 6:case\"end\":return _context.stop();}}},_callee,this);}));return function getData(){return _getData.apply(this,arguments);};}()},{key:\"render\",value:function render(){var items=this.state.items;var messages=this.state.messages.map(function(message,index){return _react.default.createElement(\"li\",{key:index},\" \",message.from,\": \",message.body);});//console.log(items)\n// const { items } = this.props;\nreturn _react.default.createElement(\"div\",null,_react.default.createElement(_BidDashboard.default,null),_react.default.createElement(_AvailableItems.default,{items:items}),_react.default.createElement(\"div\",null,_react.default.createElement(\"h1\",null,\"Hello World\"),_react.default.createElement(\"input\",{type:\"number\",placeholder:\"enter a bid\",onKeyUp:this.handleSubmit}),messages));}}]);return App;}(_react.Component);var _default=App;exports.default=_default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXBwL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC9pbmRleC5qcz9iM2E3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbi8vIGltcG9ydCBcImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NvY2tldC5pby8yLjEuMS9zb2NrZXQuaW8uanNcIlxuLy8gaW1wb3J0ICcuL3NvY2tldGlvU2NyaXB0LmpzJ1xuLy8gaW1wb3J0ICcuL3NjcmlwdC5qcyc7XG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQgQWpheEFkYXB0ZXIgZnJvbSAnLi4vQWpheEFkYXB0ZXInO1xuXG5pbXBvcnQgQmlkRGFzaGJvYXJkIGZyb20gJy4uL0JpZERhc2hib2FyZCc7XG5pbXBvcnQgQXZhaWxhYmxlSXRlbXMgZnJvbSAnLi4vQXZhaWxhYmxlSXRlbXMnO1xuaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnXG5cblxuY29uc3QgSXRlbURhdGFNb2RlbCA9IEFqYXhBZGFwdGVyKCcvYXBpL2l0ZW1zJyk7XG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGl0ZW1zOiBbXSxcbiAgICAgIG1lc3NhZ2VzOiBbXSxcbiAgICB9XG4gIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgY29uc29sZS5sb2coJ3llcyBjb21wIGRpZCBtb3VudCcpXG4gICAgICB0aGlzLmdldERhdGEoKTtcbiAgICAgIHRoaXMuc29ja2V0ID0gaW8uY29ubmVjdCgnLycpO1xuICAgICAgdGhpcy5zb2NrZXQub24oJ21lc3NhZ2UnLCBtZXNzYWdlID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1lc3NhZ2VzOiBbbWVzc2FnZSwgLi4udGhpcy5zdGF0ZS5tZXNzYWdlc10gfSlcbiAgICAgIH0pXG4gICAgfVxuXG4gIGFzeW5jIGdldERhdGEoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpdGVtczogYXdhaXQgSXRlbURhdGFNb2RlbC5yZWFkKCksXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVTdWJtaXQgPSBldmVudCA9PiB7XG4gICAgbGV0IGJvZHkgPSBldmVudC50YXJnZXQudmFsdWVcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMgJiYgYm9keSl7XG4gICAgIGxldCBtZXNzYWdlID0ge1xuICAgICAgIGJvZHk6IGJvZHksXG4gICAgICAgZnJvbTogXCJtZVwiXG4gICAgfVxuICAgICB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZXM6IFttZXNzYWdlLCAuLi50aGlzLnN0YXRlLm1lc3NhZ2VzXSB9KVxuICAgICB0aGlzLnNvY2tldC5lbWl0KCdtZXNzYWdlJywgYm9keSlcbiAgICAgZXZlbnQudGFyZ2V0LnZhbHVlID0gJydcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgaXRlbXMgfSA9IHRoaXMuc3RhdGVcbiAgICBsZXQgbWVzc2FnZXMgPSB0aGlzLnN0YXRlLm1lc3NhZ2VzLm1hcCgobWVzc2FnZSxpbmRleCkgPT4ge1xuICAgICAgICByZXR1cm4gPGxpIGtleT17aW5kZXh9PiB7bWVzc2FnZS5mcm9tfToge21lc3NhZ2UuYm9keX08L2xpPlxuICAgICAgfSlcbiAgICAvL2NvbnNvbGUubG9nKGl0ZW1zKVxuICAgIC8vIGNvbnN0IHsgaXRlbXMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEJpZERhc2hib2FyZCAvPlxuICAgICAgICA8QXZhaWxhYmxlSXRlbXMgaXRlbXMgPSB7aXRlbXN9IC8+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgxPkhlbGxvIFdvcmxkPC9oMT5cbiAgICAgICAgICA8aW5wdXQgdHlwZT0nbnVtYmVyJyBwbGFjZWhvbGRlcj0nZW50ZXIgYSBiaWQnIG9uS2V5VXA9e3RoaXMuaGFuZGxlU3VibWl0fSAvPlxuICAgICAgICAgIHttZXNzYWdlc31cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUEwREE7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/App/index.js\n");

/***/ }),

/***/ "./src/App/styles.css":
/*!****************************!*\
  !*** ./src/App/styles.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXBwL3N0eWxlcy5jc3MuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQXBwL3N0eWxlcy5jc3M/MTRjMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/App/styles.css\n");

/***/ }),

/***/ "./src/AvailableItems/index.js":
/*!*************************************!*\
  !*** ./src/AvailableItems/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});exports.default=void 0;var _react=_interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):{};if(desc.get||desc.set){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}}newObj.default=obj;return newObj;}}var AvailableItems=function AvailableItems(_ref){var items=_ref.items;return _react.default.createElement(\"div\",{className:\"availableItems\"},_react.default.createElement(\"h3\",null,\"these are the available items\"),items.map(function(item){return _react.default.createElement(\"p\",null,item.name);}));};var _default=AvailableItems;exports.default=_default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXZhaWxhYmxlSXRlbXMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQXZhaWxhYmxlSXRlbXMvaW5kZXguanM/OTkwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBBdmFpbGFibGVJdGVtcyA9ICh7IGl0ZW1zIH0pID0+IHtcbiAgcmV0dXJuKFxuXG5cbjxkaXYgY2xhc3NOYW1lID0nYXZhaWxhYmxlSXRlbXMnPlxuPGgzPnRoZXNlIGFyZSB0aGUgYXZhaWxhYmxlIGl0ZW1zPC9oMz5cbntpdGVtcy5tYXAoKGl0ZW0pPT5cbiAgICAgIDxwPntpdGVtLm5hbWV9PC9wPlxuICAgICAgKX1cbjwvZGl2PlxuKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBdmFpbGFibGVJdGVtcztcblxuXG5cbiJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/AvailableItems/index.js\n");

/***/ }),

/***/ "./src/BidDashboard/index.js":
/*!***********************************!*\
  !*** ./src/BidDashboard/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});exports.default=void 0;var _react=_interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):{};if(desc.get||desc.set){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}}newObj.default=obj;return newObj;}}function _typeof(obj){if(typeof Symbol===\"function\"&&typeof Symbol.iterator===\"symbol\"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol===\"function\"&&obj.constructor===Symbol&&obj!==Symbol.prototype?\"symbol\":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)===\"object\"||typeof call===\"function\")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return self;}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass,superClass){if(typeof superClass!==\"function\"&&superClass!==null){throw new TypeError(\"Super expression must either be null or a function\");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}var BidDashboard=/*#__PURE__*/function(_Component){_inherits(BidDashboard,_Component);function BidDashboard(){_classCallCheck(this,BidDashboard);return _possibleConstructorReturn(this,_getPrototypeOf(BidDashboard).apply(this,arguments));}_createClass(BidDashboard,[{key:\"render\",value:function render(){// console.log(props)\n// const { items } = this.props;\nfunction bidUp(){console.log('this works');socket.emit('chat',{bid:'bidup',handle:socket.id});}return _react.default.createElement(\"div\",{id:\"fun-chat\"},_react.default.createElement(\"div\",{id:\"chat-window\"},_react.default.createElement(\"div\",{className:\"bidInfo\"},\"Current Item: \",_react.default.createElement(\"span\",{id:\"currentItem\"}),_react.default.createElement(\"br\",null),\"Current Bid: \",_react.default.createElement(\"span\",{id:\"highBid\"}),_react.default.createElement(\"br\",null),\"Highest Bidder: \",_react.default.createElement(\"span\",{id:\"highBidder\"}),_react.default.createElement(\"button\",{id:\"bidup\",onClick:bidUp},\"Bid up 1\")),_react.default.createElement(\"div\",{id:\"output\"})),_react.default.createElement(\"form\",{method:\"POST\",action:\"/1/edit?_method=PUT\",onSubmit:function onSubmit(e){return e.preventDefault();}},_react.default.createElement(\"input\",{id:\"bid\",name:\"bid\",type:\"number\",placeholder:\"manual bid\"}),_react.default.createElement(\"button\",{id:\"send\"},\"Manual bid\")));}}]);return BidDashboard;}(_react.Component);var _default=BidDashboard;exports.default=_default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQmlkRGFzaGJvYXJkL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL0JpZERhc2hib2FyZC9pbmRleC5qcz81MjNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIEJpZERhc2hib2FyZCBleHRlbmRzIENvbXBvbmVudCB7XG5yZW5kZXIoKSB7XG4gIC8vIGNvbnNvbGUubG9nKHByb3BzKVxuICAvLyBjb25zdCB7IGl0ZW1zIH0gPSB0aGlzLnByb3BzO1xuZnVuY3Rpb24gYmlkVXAoKXtcbiAgY29uc29sZS5sb2coJ3RoaXMgd29ya3MnKVxuICAgICAgc29ja2V0LmVtaXQoJ2NoYXQnLHtcbiAgICAgICAgYmlkOiAnYmlkdXAnLFxuICAgICAgICBoYW5kbGU6IHNvY2tldC5pZFxuICAgICAgfSlcbiAgICB9XG5cblxuICByZXR1cm4oXG4gIDxkaXYgaWQ9XCJmdW4tY2hhdFwiPlxuICAgPGRpdiBpZD1cImNoYXQtd2luZG93XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZSA9ICdiaWRJbmZvJz5cbiAgICAgICBDdXJyZW50IEl0ZW06IDxzcGFuIGlkPSdjdXJyZW50SXRlbSc+PC9zcGFuPjxiciAvPlxuICAgICAgIEN1cnJlbnQgQmlkOiA8c3BhbiBpZD0naGlnaEJpZCc+PC9zcGFuPjxiciAvPlxuICAgICAgIEhpZ2hlc3QgQmlkZGVyOiA8c3BhbiBpZD0naGlnaEJpZGRlcic+PC9zcGFuPlxuICAgICAgIDxidXR0b24gaWQ9J2JpZHVwJyBvbkNsaWNrPXtiaWRVcH0+QmlkIHVwIDE8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBpZD1cIm91dHB1dFwiPjwvZGl2PlxuICAgPC9kaXY+XG4gICA8Zm9ybSBtZXRob2Q9XCJQT1NUXCIgYWN0aW9uPScvMS9lZGl0P19tZXRob2Q9UFVUJyBvblN1Ym1pdD17IGUgPT4gZS5wcmV2ZW50RGVmYXVsdCgpIH0+XG4gICAgICA8aW5wdXQgaWQ9XCJiaWRcIiBuYW1lPVwiYmlkXCIgdHlwZSA9ICdudW1iZXInIHBsYWNlaG9sZGVyPVwibWFudWFsIGJpZFwiLz5cbiAgICAgIDxidXR0b24gaWQ9J3NlbmQnPk1hbnVhbCBiaWQ8L2J1dHRvbj5cbiAgIDwvZm9ybT5cbiAgPC9kaXY+XG4gIClcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQmlkRGFzaGJvYXJkO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUtBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/BidDashboard/index.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("__webpack_require__(/*! @babel/polyfill */ \"./node_modules/@babel/polyfill/lib/index.js\");var _react=_interopRequireDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));var _reactDom=_interopRequireDefault(__webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\"));var _App=_interopRequireDefault(__webpack_require__(/*! ./App */ \"./src/App/index.js\"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}_reactDom.default.render(_react.default.createElement(_App.default,null),document.getElementById(\"root\"));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJAYmFiZWwvcG9seWZpbGxcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5cblxuaW1wb3J0IEFwcCBmcm9tIFwiLi9BcHBcIjtcblxuUmVhY3RET00ucmVuZGVyKFxuICA8QXBwIC8+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIiksXG4pO1xuIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ 0:
/*!********************************************!*\
  !*** multi @babel/polyfill ./src/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @babel/polyfill */"./node_modules/@babel/polyfill/lib/index.js");
module.exports = __webpack_require__(/*! /Users/evanlane/Desktop/generalAssembly/code/unit4/finalProject/liveAuction/src/index.js */"./src/index.js");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93cyAoaWdub3JlZCk/ODgwNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiAoaWdub3JlZCkgKi8iXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ })

/******/ });