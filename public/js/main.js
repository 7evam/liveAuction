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
eval("Object.defineProperty(exports,\"__esModule\",{value:true});exports.default=void 0;var _react=_interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));__webpack_require__(/*! ./styles.css */ \"./src/App/styles.css\");var _AjaxAdapter=_interopRequireDefault(__webpack_require__(/*! ../AjaxAdapter */ \"./src/AjaxAdapter.js\"));var _BidDashboard=_interopRequireDefault(__webpack_require__(/*! ../BidDashboard */ \"./src/BidDashboard/index.js\"));var _UserDashboard=_interopRequireDefault(__webpack_require__(/*! ../UserDashboard */ \"./src/UserDashboard/index.js\"));var _AvailableItems=_interopRequireDefault(__webpack_require__(/*! ../AvailableItems */ \"./src/AvailableItems/index.js\"));var _socket=_interopRequireDefault(__webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/lib/index.js\"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):{};if(desc.get||desc.set){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}}newObj.default=obj;return newObj;}}function _typeof(obj){if(typeof Symbol===\"function\"&&typeof Symbol.iterator===\"symbol\"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol===\"function\"&&obj.constructor===Symbol&&obj!==Symbol.prototype?\"symbol\":typeof obj;};}return _typeof(obj);}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,\"next\",value);}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,\"throw\",err);}_next(undefined);});};}function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError(\"Invalid attempt to spread non-iterable instance\");}function _iterableToArray(iter){if(Symbol.iterator in Object(iter)||Object.prototype.toString.call(iter)===\"[object Arguments]\")return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)===\"object\"||typeof call===\"function\")){return call;}return _assertThisInitialized(self);}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass,superClass){if(typeof superClass!==\"function\"&&superClass!==null){throw new TypeError(\"Super expression must either be null or a function\");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return self;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}var ItemDataModel=(0,_AjaxAdapter.default)('/api/items');var App=/*#__PURE__*/function(_Component){_inherits(App,_Component);function App(props){var _this;_classCallCheck(this,App);_this=_possibleConstructorReturn(this,_getPrototypeOf(App).call(this,props));_defineProperty(_assertThisInitialized(_assertThisInitialized(_this)),\"handleSubmit\",function(event){var body=event.target.value;if(event.keyCode===13&&body){var message={body:parseInt(body),from:'eyy'//console.log(`HERES WHATS COMING IN ${message.body}`)\n//console.log(`HERES WHAT ITS COMPARED TO ${this.state.messages[0].body}`)\n//this.setState({ messages: [message, ...this.state.messages] })\n};_this.socket.emit('message',message);event.target.value='';}});_this.state={items:[],messages:[]};return _this;}_createClass(App,[{key:\"componentDidMount\",value:function componentDidMount(){var _this2=this;console.log('yes comp did mount');this.getData();this.socket=_socket.default.connect('/');this.socket.on('message',function(message){_this2.setState({messages:[message].concat(_toConsumableArray(_this2.state.messages))});});}},{key:\"getData\",value:function(){var _getData=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee(){return regeneratorRuntime.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.t0=this;_context.next=3;return ItemDataModel.read();case 3:_context.t1=_context.sent;_context.t2={items:_context.t1};_context.t0.setState.call(_context.t0,_context.t2);case 6:case\"end\":return _context.stop();}}},_callee,this);}));return function getData(){return _getData.apply(this,arguments);};}()},{key:\"render\",value:function render(){var items=this.state.items;//console.log(items)\n// const { items } = this.props;\nreturn _react.default.createElement(\"div\",null,_react.default.createElement(_BidDashboard.default,{items:items,filterFn:function filterFn(item){return item.upForAuction&&!item.completedBid;}}),_react.default.createElement(_UserDashboard.default,{items:items,filterFn:function filterFn(item){return!item.upForAuction&&item.completedBid;}}),_react.default.createElement(_AvailableItems.default,{items:items,filterFn:function filterFn(item){return!item.upForAuction&&!item.completedBid;}}),_react.default.createElement(\"div\",null));}}]);return App;}(_react.Component);var _default=App;exports.default=_default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXBwL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC9pbmRleC5qcz9iM2E3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbi8vIGltcG9ydCBcImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NvY2tldC5pby8yLjEuMS9zb2NrZXQuaW8uanNcIlxuLy8gaW1wb3J0ICcuL3NvY2tldGlvU2NyaXB0LmpzJ1xuLy8gaW1wb3J0ICcuL3NjcmlwdC5qcyc7XG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQgQWpheEFkYXB0ZXIgZnJvbSAnLi4vQWpheEFkYXB0ZXInO1xuXG5pbXBvcnQgQmlkRGFzaGJvYXJkIGZyb20gJy4uL0JpZERhc2hib2FyZCc7XG5pbXBvcnQgVXNlckRhc2hib2FyZCBmcm9tICcuLi9Vc2VyRGFzaGJvYXJkJztcbmltcG9ydCBBdmFpbGFibGVJdGVtcyBmcm9tICcuLi9BdmFpbGFibGVJdGVtcyc7XG5pbXBvcnQgaW8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCdcblxuXG5jb25zdCBJdGVtRGF0YU1vZGVsID0gQWpheEFkYXB0ZXIoJy9hcGkvaXRlbXMnKTtcblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXRlbXM6IFtdLFxuICAgICAgbWVzc2FnZXM6IFtdLFxuICAgIH1cbiAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICBjb25zb2xlLmxvZygneWVzIGNvbXAgZGlkIG1vdW50JylcbiAgICAgIHRoaXMuZ2V0RGF0YSgpO1xuICAgICAgdGhpcy5zb2NrZXQgPSBpby5jb25uZWN0KCcvJyk7XG4gICAgICB0aGlzLnNvY2tldC5vbignbWVzc2FnZScsIG1lc3NhZ2UgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZXM6IFttZXNzYWdlLCAuLi50aGlzLnN0YXRlLm1lc3NhZ2VzXSB9KVxuICAgICAgfSlcbiAgICB9XG5cbiAgYXN5bmMgZ2V0RGF0YSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGl0ZW1zOiBhd2FpdCBJdGVtRGF0YU1vZGVsLnJlYWQoKSxcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZVN1Ym1pdCA9IGV2ZW50ID0+IHtcbiAgICBsZXQgYm9keSA9IGV2ZW50LnRhcmdldC52YWx1ZVxuXG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzICYmIGJvZHkpe1xuICAgICBsZXQgbWVzc2FnZSA9IHtcbiAgICAgICBib2R5OiBwYXJzZUludChib2R5KSxcbiAgICAgICBmcm9tOiAnZXl5J1xuICAgIH1cbiAgICAvL2NvbnNvbGUubG9nKGBIRVJFUyBXSEFUUyBDT01JTkcgSU4gJHttZXNzYWdlLmJvZHl9YClcbiAgICAvL2NvbnNvbGUubG9nKGBIRVJFUyBXSEFUIElUUyBDT01QQVJFRCBUTyAke3RoaXMuc3RhdGUubWVzc2FnZXNbMF0uYm9keX1gKVxuICAgIC8vdGhpcy5zZXRTdGF0ZSh7IG1lc3NhZ2VzOiBbbWVzc2FnZSwgLi4udGhpcy5zdGF0ZS5tZXNzYWdlc10gfSlcbiAgICAgdGhpcy5zb2NrZXQuZW1pdCgnbWVzc2FnZScsIG1lc3NhZ2UpXG4gICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9ICcnXG5cbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgaXRlbXMgfSA9IHRoaXMuc3RhdGVcbiAgICAvL2NvbnNvbGUubG9nKGl0ZW1zKVxuICAgIC8vIGNvbnN0IHsgaXRlbXMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEJpZERhc2hib2FyZCBpdGVtcyA9IHtpdGVtc30gZmlsdGVyRm49e2l0ZW0gPT4gaXRlbS51cEZvckF1Y3Rpb24gJiYgIWl0ZW0uY29tcGxldGVkQmlkfS8+XG4gICAgICAgIDxVc2VyRGFzaGJvYXJkIGl0ZW1zID0ge2l0ZW1zfSBmaWx0ZXJGbj17aXRlbSA9PiAhaXRlbS51cEZvckF1Y3Rpb24gJiYgaXRlbS5jb21wbGV0ZWRCaWR9Lz5cbiAgICAgICAgPEF2YWlsYWJsZUl0ZW1zIGl0ZW1zID0ge2l0ZW1zfSBmaWx0ZXJGbj17aXRlbSA9PiAhaXRlbS51cEZvckF1Y3Rpb24gJiYgIWl0ZW0uY29tcGxldGVkQmlkfSAvPlxuICAgICAgICA8ZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBaURBO0FBQ0E7QUFOQTtBQWdCQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/App/index.js\n");

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
eval("Object.defineProperty(exports,\"__esModule\",{value:true});exports.default=void 0;var _react=_interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):{};if(desc.get||desc.set){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}}newObj.default=obj;return newObj;}}var AvailableItems=function AvailableItems(_ref){var items=_ref.items,filterFn=_ref.filterFn;function nominateItem(){console.log('it poops');}return _react.default.createElement(\"div\",{id:\"availableItems\"},items.filter(filterFn).map(function(item,index){return _react.default.createElement(\"div\",{key:index},_react.default.createElement(\"p\",null,item.name));}),_react.default.createElement(\"h3\",null,\"these are the available items\"));};var _default=AvailableItems;exports.default=_default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXZhaWxhYmxlSXRlbXMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQXZhaWxhYmxlSXRlbXMvaW5kZXguanM/OTkwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5cblxuXG5jb25zdCBBdmFpbGFibGVJdGVtcyA9ICh7IGl0ZW1zLCBmaWx0ZXJGbiB9KSA9PiB7XG5cbmZ1bmN0aW9uIG5vbWluYXRlSXRlbSgpIHtcbiAgY29uc29sZS5sb2coJ2l0IHBvb3BzJylcbn1cblxuXG4gIHJldHVybihcbjxkaXYgaWQgPSdhdmFpbGFibGVJdGVtcyc+XG57XG4gICAgICBpdGVtcy5maWx0ZXIoZmlsdGVyRm4pXG4gICAgICAgIC5tYXAoKGl0ZW0saW5kZXgpID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgPHA+e2l0ZW0ubmFtZX08L3A+XG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSlcbiAgICB9XG48aDM+dGhlc2UgYXJlIHRoZSBhdmFpbGFibGUgaXRlbXM8L2gzPlxuXG48L2Rpdj5cbilcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXZhaWxhYmxlSXRlbXM7XG5cblxuXG4iXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/AvailableItems/index.js\n");

/***/ }),

/***/ "./src/BidDashboard/index.js":
/*!***********************************!*\
  !*** ./src/BidDashboard/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});exports.default=void 0;var _react=_interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));var _socket=_interopRequireDefault(__webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/lib/index.js\"));__webpack_require__(/*! ./styles.css */ \"./src/BidDashboard/styles.css\");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):{};if(desc.get||desc.set){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}}newObj.default=obj;return newObj;}}function _typeof(obj){if(typeof Symbol===\"function\"&&typeof Symbol.iterator===\"symbol\"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol===\"function\"&&obj.constructor===Symbol&&obj!==Symbol.prototype?\"symbol\":typeof obj;};}return _typeof(obj);}function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError(\"Invalid attempt to spread non-iterable instance\");}function _iterableToArray(iter){if(Symbol.iterator in Object(iter)||Object.prototype.toString.call(iter)===\"[object Arguments]\")return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)===\"object\"||typeof call===\"function\")){return call;}return _assertThisInitialized(self);}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass,superClass){if(typeof superClass!==\"function\"&&superClass!==null){throw new TypeError(\"Super expression must either be null or a function\");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return self;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}// shoutout to Fabian Schultz on stackoverflow for helping with the timer\n// https://stackoverflow.com/questions/40885923/countdown-timer-in-react\nvar BidDashboard=/*#__PURE__*/function(_Component){_inherits(BidDashboard,_Component);function BidDashboard(props){var _this;_classCallCheck(this,BidDashboard);_this=_possibleConstructorReturn(this,_getPrototypeOf(BidDashboard).call(this,props));_defineProperty(_assertThisInitialized(_assertThisInitialized(_this)),\"handleSubmit\",function(event){var body=event.target.value;if(event.keyCode===13&&body){var message={body:parseInt(body),from:'eyy'//console.log(`HERES WHATS COMING IN ${message.body}`)\n//console.log(`HERES WHAT ITS COMPARED TO ${this.state.messages[0].body}`)\n//this.setState({ messages: [message, ...this.state.messages] })\n};_this.socket.emit('message',message);event.target.value=message.body+1;_this.startTimer();}});_this.state={items:[],messages:[{body:0}],seconds:6};_this.startTimer=_this.startTimer.bind(_assertThisInitialized(_assertThisInitialized(_this)));//this.countDown = this.countDown.bind(this)\nreturn _this;}// secondsToTime(secs){\n//    let hours = Math.floor(secs / (60 * 60));\n//    let divisor_for_minutes = secs % (60 * 60);\n//    let minutes = Math.floor(divisor_for_minutes / 60);\n//    let divisor_for_seconds = divisor_for_minutes % 60;\n//    let seconds = Math.ceil(divisor_for_seconds);\n//    let obj = {\n//      \"h\": hours,\n//      \"m\": minutes,\n//      \"s\": seconds\n//    };\n//    return obj;\n//  }\n_createClass(BidDashboard,[{key:\"componentDidMount\",value:function componentDidMount(){var _this2=this;console.log('yes comp did mount on dashboard');this.socket=_socket.default.connect('/');this.socket.on('message',function(message){_this2.setState({messages:[message].concat(_toConsumableArray(_this2.state.messages))});});this.socket.on('timer',function(seconds){_this2.setState({seconds:seconds});});}},{key:\"startTimer\",value:function startTimer(){this.setState({seconds:6});this.socket.emit('timer',6);}//  countDown() {\n//   // Remove one second, set state so a re-render happens.\n//   let seconds = this.state.seconds - 1;\n//   this.setState({\n//     seconds: seconds,\n//   });\n//   // Check if we're at zero.\n//   if (seconds == 0) {\n//     clearInterval(this.timer);\n//   }\n// }\n},{key:\"render\",// function bidUp(){\n//   console.log('this works')\n//       socket.emit('message',{\n//         body: 'bidup',\n//         from: 'OMG',\n//       })\n//     }\nvalue:function render(){//      items.filter(filterFn)\n//      .map(item => (\n//      <div>\n//      <p>{item.name}</p>\n//\n//        </div>\n//    ))\n// console.log(props)\n// const { items } = this.props;\nvar messages=this.state.messages.map(function(message,index){return _react.default.createElement(\"li\",{key:index},\" \",message.from,\": \",message.body);});var bidItem=this.props.items.filter(function(item){return item.upForAuction&&!item.completedBid;}).map(function(item,index){return _react.default.createElement(\"h3\",{key:index},\" \",item.name,\" \");});return _react.default.createElement(\"div\",{id:\"funChat\"},_react.default.createElement(\"div\",null,bidItem),_react.default.createElement(\"div\",null,_react.default.createElement(\"button\",{onClick:this.startTimer},\"Start\"),\"s: \",this.state.seconds),_react.default.createElement(\"div\",{id:\"chat-window\"},_react.default.createElement(\"div\",{id:\"countdown\"},_react.default.createElement(\"div\",{id:\"countdown-number\"}),_react.default.createElement(\"svg\",null,_react.default.createElement(\"circle\",{r:\"18\",cx:\"20\",cy:\"20\"}))),_react.default.createElement(\"div\",{className:\"bidInfo\"},_react.default.createElement(\"input\",{type:\"number\",onKeyUp:this.handleSubmit}),messages,\"Current Item: \",_react.default.createElement(\"span\",{id:\"currentItem\"}),_react.default.createElement(\"br\",null),\"Current Bid: \",_react.default.createElement(\"span\",{id:\"highBid\"}),_react.default.createElement(\"br\",null),\"Highest Bidder: \",_react.default.createElement(\"span\",{id:\"highBidder\"})),_react.default.createElement(\"div\",{id:\"output\"})));}}]);return BidDashboard;}(_react.Component);var _default=BidDashboard;//<button onClick={this.startTimer}>Start</button>\nexports.default=_default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQmlkRGFzaGJvYXJkL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL0JpZERhc2hib2FyZC9pbmRleC5qcz81MjNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgaW8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCdcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcblxuLy8gc2hvdXRvdXQgdG8gRmFiaWFuIFNjaHVsdHogb24gc3RhY2tvdmVyZmxvdyBmb3IgaGVscGluZyB3aXRoIHRoZSB0aW1lclxuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDA4ODU5MjMvY291bnRkb3duLXRpbWVyLWluLXJlYWN0XG5cbmNsYXNzIEJpZERhc2hib2FyZCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpdGVtczogW10sXG4gICAgICBtZXNzYWdlczogW3tib2R5OjB9XSxcbiAgICAgIHNlY29uZHM6IDYsXG4gICAgfVxuICAgIHRoaXMuc3RhcnRUaW1lciA9IHRoaXMuc3RhcnRUaW1lci5iaW5kKHRoaXMpO1xuICAgIC8vdGhpcy5jb3VudERvd24gPSB0aGlzLmNvdW50RG93bi5iaW5kKHRoaXMpXG4gIH1cblxuIC8vIHNlY29uZHNUb1RpbWUoc2Vjcyl7XG4gLy8gICAgbGV0IGhvdXJzID0gTWF0aC5mbG9vcihzZWNzIC8gKDYwICogNjApKTtcblxuIC8vICAgIGxldCBkaXZpc29yX2Zvcl9taW51dGVzID0gc2VjcyAlICg2MCAqIDYwKTtcbiAvLyAgICBsZXQgbWludXRlcyA9IE1hdGguZmxvb3IoZGl2aXNvcl9mb3JfbWludXRlcyAvIDYwKTtcblxuIC8vICAgIGxldCBkaXZpc29yX2Zvcl9zZWNvbmRzID0gZGl2aXNvcl9mb3JfbWludXRlcyAlIDYwO1xuIC8vICAgIGxldCBzZWNvbmRzID0gTWF0aC5jZWlsKGRpdmlzb3JfZm9yX3NlY29uZHMpO1xuXG4gLy8gICAgbGV0IG9iaiA9IHtcbiAvLyAgICAgIFwiaFwiOiBob3VycyxcbiAvLyAgICAgIFwibVwiOiBtaW51dGVzLFxuIC8vICAgICAgXCJzXCI6IHNlY29uZHNcbiAvLyAgICB9O1xuIC8vICAgIHJldHVybiBvYmo7XG4gLy8gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCd5ZXMgY29tcCBkaWQgbW91bnQgb24gZGFzaGJvYXJkJylcbiAgICAgIHRoaXMuc29ja2V0ID0gaW8uY29ubmVjdCgnLycpO1xuICAgICAgdGhpcy5zb2NrZXQub24oJ21lc3NhZ2UnLCBtZXNzYWdlID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1lc3NhZ2VzOiBbbWVzc2FnZSwgLi4udGhpcy5zdGF0ZS5tZXNzYWdlc10gfSlcbiAgICAgIH0pXG4gICAgICB0aGlzLnNvY2tldC5vbigndGltZXInLCBzZWNvbmRzID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlY29uZHM6IHNlY29uZHMgfSk7XG4gICAgICB9KVxuXG4gICAgfVxuXG4gICAgc3RhcnRUaW1lcigpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWNvbmRzOiA2IH0pXG4gICAgICB0aGlzLnNvY2tldC5lbWl0KCd0aW1lcicsIDYpXG4gIH1cblxuICAvLyAgY291bnREb3duKCkge1xuICAvLyAgIC8vIFJlbW92ZSBvbmUgc2Vjb25kLCBzZXQgc3RhdGUgc28gYSByZS1yZW5kZXIgaGFwcGVucy5cbiAgLy8gICBsZXQgc2Vjb25kcyA9IHRoaXMuc3RhdGUuc2Vjb25kcyAtIDE7XG4gIC8vICAgdGhpcy5zZXRTdGF0ZSh7XG4gIC8vICAgICBzZWNvbmRzOiBzZWNvbmRzLFxuICAvLyAgIH0pO1xuXG4gIC8vICAgLy8gQ2hlY2sgaWYgd2UncmUgYXQgemVyby5cbiAgLy8gICBpZiAoc2Vjb25kcyA9PSAwKSB7XG4gIC8vICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xuICAvLyAgIH1cbiAgLy8gfVxuXG4gICAgaGFuZGxlU3VibWl0ID0gZXZlbnQgPT4ge1xuICAgIGxldCBib2R5ID0gZXZlbnQudGFyZ2V0LnZhbHVlXG5cbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMgJiYgYm9keSl7XG4gICAgIGxldCBtZXNzYWdlID0ge1xuICAgICAgIGJvZHk6IHBhcnNlSW50KGJvZHkpLFxuICAgICAgIGZyb206ICdleXknXG4gICAgfVxuICAgIC8vY29uc29sZS5sb2coYEhFUkVTIFdIQVRTIENPTUlORyBJTiAke21lc3NhZ2UuYm9keX1gKVxuICAgIC8vY29uc29sZS5sb2coYEhFUkVTIFdIQVQgSVRTIENPTVBBUkVEIFRPICR7dGhpcy5zdGF0ZS5tZXNzYWdlc1swXS5ib2R5fWApXG4gICAgLy90aGlzLnNldFN0YXRlKHsgbWVzc2FnZXM6IFttZXNzYWdlLCAuLi50aGlzLnN0YXRlLm1lc3NhZ2VzXSB9KVxuICAgICB0aGlzLnNvY2tldC5lbWl0KCdtZXNzYWdlJywgbWVzc2FnZSlcbiAgICAgZXZlbnQudGFyZ2V0LnZhbHVlID0gbWVzc2FnZS5ib2R5ICsxXG4gICAgdGhpcy5zdGFydFRpbWVyKClcbiAgICB9XG4gIH1cblxuXG5cbi8vIGZ1bmN0aW9uIGJpZFVwKCl7XG4vLyAgIGNvbnNvbGUubG9nKCd0aGlzIHdvcmtzJylcbi8vICAgICAgIHNvY2tldC5lbWl0KCdtZXNzYWdlJyx7XG4vLyAgICAgICAgIGJvZHk6ICdiaWR1cCcsXG4vLyAgICAgICAgIGZyb206ICdPTUcnLFxuLy8gICAgICAgfSlcbi8vICAgICB9XG5cbnJlbmRlcigpIHtcblxuXG4vLyAgICAgIGl0ZW1zLmZpbHRlcihmaWx0ZXJGbilcbiAgLy8gICAgICAubWFwKGl0ZW0gPT4gKFxuICAgIC8vICAgICAgPGRpdj5cbiAgICAgIC8vICAgICAgPHA+e2l0ZW0ubmFtZX08L3A+XG4vL1xuICAvLyAgICAgICAgPC9kaXY+XG4gICAgLy8gICAgKSlcblxuXG4gIC8vIGNvbnNvbGUubG9nKHByb3BzKVxuICAvLyBjb25zdCB7IGl0ZW1zIH0gPSB0aGlzLnByb3BzO1xubGV0IG1lc3NhZ2VzID0gdGhpcy5zdGF0ZS5tZXNzYWdlcy5tYXAoKG1lc3NhZ2UsaW5kZXgpID0+IHtcbiAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2luZGV4fT4ge21lc3NhZ2UuZnJvbX06IHttZXNzYWdlLmJvZHl9PC9saT5cbiAgICAgIH0pXG5cbmxldCBiaWRJdGVtID0gdGhpcy5wcm9wcy5pdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLnVwRm9yQXVjdGlvbiAmJiAhaXRlbS5jb21wbGV0ZWRCaWQpLm1hcCgoaXRlbSxpbmRleCkgPT4ge1xuICAgIHJldHVybiA8aDMga2V5PXtpbmRleH0+IHtpdGVtLm5hbWV9IDwvaDM+XG4gIH0pXG5cbiAgcmV0dXJuKFxuICA8ZGl2IGlkPVwiZnVuQ2hhdFwiPlxuICA8ZGl2PntiaWRJdGVtfTwvZGl2PlxuICA8ZGl2PlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5zdGFydFRpbWVyfT5TdGFydDwvYnV0dG9uPlxuICAgICAgICBzOiB7dGhpcy5zdGF0ZS5zZWNvbmRzfVxuICAgICAgPC9kaXY+XG4gICA8ZGl2IGlkPVwiY2hhdC13aW5kb3dcIj5cbiAgICA8ZGl2IGlkPVwiY291bnRkb3duXCI+XG4gIDxkaXYgaWQ9XCJjb3VudGRvd24tbnVtYmVyXCI+PC9kaXY+XG4gIDxzdmc+XG4gICAgPGNpcmNsZSByPVwiMThcIiBjeD1cIjIwXCIgY3k9XCIyMFwiPjwvY2lyY2xlPlxuICA8L3N2Zz5cbjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWUgPSAnYmlkSW5mbyc+XG4gICAgICAgIDxpbnB1dCB0eXBlPSdudW1iZXInIG9uS2V5VXA9e3RoaXMuaGFuZGxlU3VibWl0fSAvPlxuICAgICAgICAgIHttZXNzYWdlc31cbiAgICAgICBDdXJyZW50IEl0ZW06IDxzcGFuIGlkPSdjdXJyZW50SXRlbSc+PC9zcGFuPjxiciAvPlxuICAgICAgIEN1cnJlbnQgQmlkOiA8c3BhbiBpZD0naGlnaEJpZCc+PC9zcGFuPjxiciAvPlxuICAgICAgIEhpZ2hlc3QgQmlkZGVyOiA8c3BhbiBpZD0naGlnaEJpZGRlcic+PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGlkPVwib3V0cHV0XCI+PC9kaXY+XG4gICA8L2Rpdj5cbiAgPC9kaXY+XG4gIClcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQmlkRGFzaGJvYXJkO1xuXG4vLzxidXR0b24gb25DbGljaz17dGhpcy5zdGFydFRpbWVyfT5TdGFydDwvYnV0dG9uPlxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUtBO0FBRUE7QUFxRUE7QUFDQTtBQU5BO0FBOURBO0FBWUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/BidDashboard/index.js\n");

/***/ }),

/***/ "./src/BidDashboard/styles.css":
/*!*************************************!*\
  !*** ./src/BidDashboard/styles.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQmlkRGFzaGJvYXJkL3N0eWxlcy5jc3MuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQmlkRGFzaGJvYXJkL3N0eWxlcy5jc3M/NjY1YSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/BidDashboard/styles.css\n");

/***/ }),

/***/ "./src/UserDashboard/index.js":
/*!************************************!*\
  !*** ./src/UserDashboard/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});exports.default=void 0;var _react=_interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));var _socket=_interopRequireDefault(__webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/lib/index.js\"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):{};if(desc.get||desc.set){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}}newObj.default=obj;return newObj;}}var UserDashboard=function UserDashboard(_ref){var items=_ref.items,filterFn=_ref.filterFn;// console.log(props)\n// const { items } = this.props;\nreturn _react.default.createElement(\"div\",{id:\"userDashboard\"},_react.default.createElement(\"h3\",null,\"Items won\"),_react.default.createElement(\"ul\",null,items.filter(filterFn).map(function(item,index){return _react.default.createElement(\"li\",{key:index},item.name);})));};var _default=UserDashboard;exports.default=_default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvVXNlckRhc2hib2FyZC9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9Vc2VyRGFzaGJvYXJkL2luZGV4LmpzPzViM2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50J1xuXG5cblxuY29uc3QgVXNlckRhc2hib2FyZCA9ICh7IGl0ZW1zLCBmaWx0ZXJGbiB9KSA9PiB7XG5cblxuICAvLyBjb25zb2xlLmxvZyhwcm9wcylcbiAgLy8gY29uc3QgeyBpdGVtcyB9ID0gdGhpcy5wcm9wcztcbiAgcmV0dXJuKFxuICA8ZGl2IGlkPSd1c2VyRGFzaGJvYXJkJz5cbiAgICA8aDM+SXRlbXMgd29uPC9oMz5cbiAgICA8dWw+XG4gICAgICB7XG4gICAgICBpdGVtcy5maWx0ZXIoZmlsdGVyRm4pXG4gICAgICAgIC5tYXAoKGl0ZW0saW5kZXgpID0+IChcbiAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgICB7aXRlbS5uYW1lfVxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpXG4gICAgfVxuICAgIDwvdWw+XG5cbiAgPC9kaXY+XG5cbiAgKVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJEYXNoYm9hcmQ7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBU0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/UserDashboard/index.js\n");

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