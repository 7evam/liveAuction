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
eval("Object.defineProperty(exports,\"__esModule\",{value:true});exports.default=void 0;var _axios=_interopRequireDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var _default=function _default(baseURL){var instance=_axios.default.create({baseURL:baseURL,timeout:1000,headers:{'Content-Type':'application/json'}});return{read:function read(){return instance.get('/').then(function(_ref){var items=_ref.data.items;return items;}).catch(function(e){throw e;});},update:function update(id,price){return instance.put(\"/\".concat(id),{item:price}).catch(function(e){throw e;});},updateAfter:function updateAfter(id,price){return instance.put(\"/\".concat(id,\"/\").concat(price),{item:price}).catch(function(e){throw e;});}};};exports.default=_default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQWpheEFkYXB0ZXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQWpheEFkYXB0ZXIuanM/NzM3MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAgJ2F4aW9zJztcblxuZXhwb3J0IGRlZmF1bHQgKGJhc2VVUkwpID0+IHtcbiAgY29uc3QgaW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xuICAgIGJhc2VVUkwsXG4gICAgdGltZW91dDogMTAwMCxcbiAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgfSk7XG5cbiAgcmV0dXJuIHtcblxuICAgIHJlYWQoKSB7XG4gICAgICByZXR1cm4gaW5zdGFuY2UuZ2V0KCcvJylcbiAgICAgICAgLnRoZW4oKHsgZGF0YTogeyBpdGVtcyB9IH0pID0+IGl0ZW1zKVxuICAgICAgICAuY2F0Y2goKGUpID0+IHsgdGhyb3cgZTsgfSk7XG4gICAgfSxcbiAgICB1cGRhdGUoaWQsIHByaWNlKSB7XG4gICAgICByZXR1cm4gaW5zdGFuY2UucHV0KGAvJHtpZH1gLCB7IGl0ZW06IHByaWNlIH0pXG4gICAgICAgIC5jYXRjaCgoZSkgPT4geyB0aHJvdyBlOyB9KTtcbiAgICB9LFxuICAgICB1cGRhdGVBZnRlcihpZCwgcHJpY2UpIHtcbiAgICAgIHJldHVybiBpbnN0YW5jZS5wdXQoYC8ke2lkfS8ke3ByaWNlfWAsIHsgaXRlbTogcHJpY2UgfSlcbiAgICAgICAgLmNhdGNoKChlKSA9PiB7IHRocm93IGU7IH0pO1xuICAgIH0sXG4gICAgLy8gYWRkVG9BdWN0aW9uKGlkKXtcbiAgICAvLyAgIHJldHVybiBpbnN0YW5jZS5wdXQoYC8ke2lkfWAsIHsgaXRlbS51cEZvckF1Y3Rpb246IHRydWUgfSlcbiAgICAvLyAgIC5jYXRjaCgoZSkgPT4geyB0aHJvdyBlOyB9KTtcbiAgICAvLyB9XG5cbiAgfTtcbn07XG5cbiJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/AjaxAdapter.js\n");

/***/ }),

/***/ "./src/App/index.js":
/*!**************************!*\
  !*** ./src/App/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});exports.default=void 0;var _react=_interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));__webpack_require__(/*! ./styles.css */ \"./src/App/styles.css\");var _AjaxAdapter=_interopRequireDefault(__webpack_require__(/*! ../AjaxAdapter */ \"./src/AjaxAdapter.js\"));var _BidDashboard=_interopRequireDefault(__webpack_require__(/*! ../BidDashboard */ \"./src/BidDashboard/index.js\"));var _UserDashboard=_interopRequireDefault(__webpack_require__(/*! ../UserDashboard */ \"./src/UserDashboard/index.js\"));var _AvailableItems=_interopRequireDefault(__webpack_require__(/*! ../AvailableItems */ \"./src/AvailableItems/index.js\"));var _Header=_interopRequireDefault(__webpack_require__(/*! ../Header */ \"./src/Header/index.js\"));var _socket=_interopRequireDefault(__webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/lib/index.js\"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):{};if(desc.get||desc.set){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}}newObj.default=obj;return newObj;}}function _typeof(obj){if(typeof Symbol===\"function\"&&typeof Symbol.iterator===\"symbol\"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol===\"function\"&&obj.constructor===Symbol&&obj!==Symbol.prototype?\"symbol\":typeof obj;};}return _typeof(obj);}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,\"next\",value);}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,\"throw\",err);}_next(undefined);});};}function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError(\"Invalid attempt to spread non-iterable instance\");}function _iterableToArray(iter){if(Symbol.iterator in Object(iter)||Object.prototype.toString.call(iter)===\"[object Arguments]\")return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)===\"object\"||typeof call===\"function\")){return call;}return _assertThisInitialized(self);}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass,superClass){if(typeof superClass!==\"function\"&&superClass!==null){throw new TypeError(\"Super expression must either be null or a function\");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return self;}var ItemDataModel=(0,_AjaxAdapter.default)('/api/items');var upForAuctionRoute=(0,_AjaxAdapter.default)('/api/items/upForAuction');var completedBidRoute=(0,_AjaxAdapter.default)('/api/items/completedBid');var App=/*#__PURE__*/function(_Component){_inherits(App,_Component);function App(props){var _this;_classCallCheck(this,App);_this=_possibleConstructorReturn(this,_getPrototypeOf(App).call(this,props));_this.state={items:[],messages:[],price:0};_this.addToAuction=_this.addToAuction.bind(_assertThisInitialized(_assertThisInitialized(_this)));_this.completedBidFn=_this.completedBidFn.bind(_assertThisInitialized(_assertThisInitialized(_this)));_this.getData=_this.getData.bind(_assertThisInitialized(_assertThisInitialized(_this)));_this.updateBalance=_this.updateBalance.bind(_assertThisInitialized(_assertThisInitialized(_this)));return _this;}_createClass(App,[{key:\"componentDidMount\",value:function componentDidMount(){var _this2=this;this.getData();this.socket=_socket.default.connect('/');this.socket.on('message',function(message){_this2.setState({messages:[message].concat(_toConsumableArray(_this2.state.messages))});});}},{key:\"getData\",value:function(){var _getData=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee(){return regeneratorRuntime.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.t0=this;_context.next=3;return ItemDataModel.read();case 3:_context.t1=_context.sent;_context.t2={items:_context.t1};_context.t0.setState.call(_context.t0,_context.t2);case 6:case\"end\":return _context.stop();}}},_callee,this);}));return function getData(){return _getData.apply(this,arguments);};}()},{key:\"addToAuction\",value:function(){var _addToAuction=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee2(e){var id;return regeneratorRuntime.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:id=e.target.id;_context2.next=3;return upForAuctionRoute.update(id);case 3:_context2.t0=this;_context2.next=6;return ItemDataModel.read();case 6:_context2.t1=_context2.sent;_context2.t2={items:_context2.t1};_context2.t0.setState.call(_context2.t0,_context2.t2);case 9:case\"end\":return _context2.stop();}}},_callee2,this);}));return function addToAuction(_x){return _addToAuction.apply(this,arguments);};}()},{key:\"completedBidFn\",value:function(){var _completedBidFn=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee3(id,price){return regeneratorRuntime.wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:_context3.next=2;return completedBidRoute.updateAfter(id,price);case 2:_context3.t0=this;_context3.next=5;return ItemDataModel.read();case 5:_context3.t1=_context3.sent;_context3.t2={items:_context3.t1};_context3.t0.setState.call(_context3.t0,_context3.t2);case 8:case\"end\":return _context3.stop();}}},_callee3,this);}));return function completedBidFn(_x2,_x3){return _completedBidFn.apply(this,arguments);};}()},{key:\"updateBalance\",value:function(){var _updateBalance=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee4(price){return regeneratorRuntime.wrap(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:_context4.next=2;return this.setState({price:price});case 2:case\"end\":return _context4.stop();}}},_callee4,this);}));return function updateBalance(_x4){return _updateBalance.apply(this,arguments);};}()},{key:\"render\",value:function render(){var _this$state=this.state,items=_this$state.items,addToAuction=_this$state.addToAuction,availableBalance=_this$state.availableBalance,price=_this$state.price;//console.log(items)\n// const { items } = this.props;\nreturn _react.default.createElement(\"div\",null,_react.default.createElement(_Header.default,null),_react.default.createElement(_BidDashboard.default,{items:items,completedBidFn:this.completedBidFn,filterFn:function filterFn(item){return item.upForAuction&&!item.completedBid;},updateBalance:this.updateBalance}),_react.default.createElement(_UserDashboard.default,{items:items,filterFn:function filterFn(item){return!item.upForAuction&&item.completedBid;},price:price}),_react.default.createElement(_AvailableItems.default,{items:items,addToAuction:this.addToAuction,filterFn:function filterFn(item){return!item.upForAuction&&!item.completedBid;}}));}}]);return App;}(_react.Component);var _default=App;exports.default=_default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXBwL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC9pbmRleC5qcz9iM2E3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbi8vIGltcG9ydCBcImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NvY2tldC5pby8yLjEuMS9zb2NrZXQuaW8uanNcIlxuLy8gaW1wb3J0ICcuL3NvY2tldGlvU2NyaXB0LmpzJ1xuLy8gaW1wb3J0ICcuL3NjcmlwdC5qcyc7XG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQgQWpheEFkYXB0ZXIgZnJvbSAnLi4vQWpheEFkYXB0ZXInO1xuXG5pbXBvcnQgQmlkRGFzaGJvYXJkIGZyb20gJy4uL0JpZERhc2hib2FyZCc7XG5pbXBvcnQgVXNlckRhc2hib2FyZCBmcm9tICcuLi9Vc2VyRGFzaGJvYXJkJztcbmltcG9ydCBBdmFpbGFibGVJdGVtcyBmcm9tICcuLi9BdmFpbGFibGVJdGVtcyc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL0hlYWRlcic7XG5pbXBvcnQgaW8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCdcblxuY29uc3QgSXRlbURhdGFNb2RlbCA9IEFqYXhBZGFwdGVyKCcvYXBpL2l0ZW1zJyk7XG5jb25zdCB1cEZvckF1Y3Rpb25Sb3V0ZSA9IEFqYXhBZGFwdGVyKCcvYXBpL2l0ZW1zL3VwRm9yQXVjdGlvbicpO1xuY29uc3QgY29tcGxldGVkQmlkUm91dGUgPSBBamF4QWRhcHRlcignL2FwaS9pdGVtcy9jb21wbGV0ZWRCaWQnKTtcblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXRlbXM6IFtdLFxuICAgICAgbWVzc2FnZXM6IFtdLFxuICAgICAgcHJpY2U6IDAsXG4gICAgfVxuICAgIHRoaXMuYWRkVG9BdWN0aW9uID0gdGhpcy5hZGRUb0F1Y3Rpb24uYmluZCh0aGlzKTtcbiAgICB0aGlzLmNvbXBsZXRlZEJpZEZuID0gdGhpcy5jb21wbGV0ZWRCaWRGbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2V0RGF0YSA9IHRoaXMuZ2V0RGF0YS5iaW5kKHRoaXMpO1xuICAgIHRoaXMudXBkYXRlQmFsYW5jZSA9IHRoaXMudXBkYXRlQmFsYW5jZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMuZ2V0RGF0YSgpO1xuICAgICAgdGhpcy5zb2NrZXQgPSBpby5jb25uZWN0KCcvJyk7XG4gICAgICB0aGlzLnNvY2tldC5vbignbWVzc2FnZScsIG1lc3NhZ2UgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZXM6IFttZXNzYWdlLCAuLi50aGlzLnN0YXRlLm1lc3NhZ2VzXSB9KVxuICAgICAgfSlcbiAgICB9XG5cbiAgYXN5bmMgZ2V0RGF0YSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGl0ZW1zOiBhd2FpdCBJdGVtRGF0YU1vZGVsLnJlYWQoKSxcbiAgICB9KTtcbiAgfVxuXG4gICAgYXN5bmMgYWRkVG9BdWN0aW9uKGUpe1xuICAgIGxldCBpZCA9IGUudGFyZ2V0LmlkXG4gICAgYXdhaXQgdXBGb3JBdWN0aW9uUm91dGUudXBkYXRlKGlkKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGl0ZW1zOiBhd2FpdCBJdGVtRGF0YU1vZGVsLnJlYWQoKSxcbiAgICB9KTtcbiAgfVxuXG4gICBhc3luYyBjb21wbGV0ZWRCaWRGbihpZCxwcmljZSl7XG4gICAgYXdhaXQgY29tcGxldGVkQmlkUm91dGUudXBkYXRlQWZ0ZXIoaWQscHJpY2UpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXRlbXM6IGF3YWl0IEl0ZW1EYXRhTW9kZWwucmVhZCgpLFxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgdXBkYXRlQmFsYW5jZShwcmljZSl7XG4gICBhd2FpdCB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHByaWNlOiBwcmljZVxuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgaXRlbXMsIGFkZFRvQXVjdGlvbiwgYXZhaWxhYmxlQmFsYW5jZSwgcHJpY2UgfSA9IHRoaXMuc3RhdGVcbiAgICAvL2NvbnNvbGUubG9nKGl0ZW1zKVxuICAgIC8vIGNvbnN0IHsgaXRlbXMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICA8QmlkRGFzaGJvYXJkIGl0ZW1zID0ge2l0ZW1zfSBjb21wbGV0ZWRCaWRGbiA9IHt0aGlzLmNvbXBsZXRlZEJpZEZufSBmaWx0ZXJGbj17aXRlbSA9PiBpdGVtLnVwRm9yQXVjdGlvbiAmJiAhaXRlbS5jb21wbGV0ZWRCaWR9IHVwZGF0ZUJhbGFuY2U9e3RoaXMudXBkYXRlQmFsYW5jZX0vPlxuICAgICAgICA8VXNlckRhc2hib2FyZCBpdGVtcyA9IHtpdGVtc30gZmlsdGVyRm49e2l0ZW0gPT4gIWl0ZW0udXBGb3JBdWN0aW9uICYmIGl0ZW0uY29tcGxldGVkQmlkfSBwcmljZT17cHJpY2V9Lz5cbiAgICAgICAgPEF2YWlsYWJsZUl0ZW1zIGl0ZW1zID0ge2l0ZW1zfSBhZGRUb0F1Y3Rpb249e3RoaXMuYWRkVG9BdWN0aW9ufSBmaWx0ZXJGbj17aXRlbSA9PiAhaXRlbS51cEZvckF1Y3Rpb24gJiYgIWl0ZW0uY29tcGxldGVkQmlkfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBc0VBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/App/index.js\n");

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
eval("Object.defineProperty(exports,\"__esModule\",{value:true});exports.default=void 0;var _react=_interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):{};if(desc.get||desc.set){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}}newObj.default=obj;return newObj;}}//when user clicks on button next to available item,\n//the item changes its upForAuction value to true\nvar AvailableItems=function AvailableItems(_ref){var items=_ref.items,filterFn=_ref.filterFn,addToAuction=_ref.addToAuction;function nominateItem(){}// onClick={() => this.handleClick(obj.id)}\nreturn _react.default.createElement(\"div\",{id:\"availableItems\"},_react.default.createElement(\"h3\",null,\"Items available for bidding:\"),items.filter(filterFn).map(function(item,index){return _react.default.createElement(\"div\",{key:index},_react.default.createElement(\"p\",null,_react.default.createElement(\"span\",{className:\"availableItem\"},item.name),\" \",_react.default.createElement(\"button\",{onClick:addToAuction,id:item.id},\"Add to auction\")));}));};var _default=AvailableItems;exports.default=_default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXZhaWxhYmxlSXRlbXMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQXZhaWxhYmxlSXRlbXMvaW5kZXguanM/OTkwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG4vL3doZW4gdXNlciBjbGlja3Mgb24gYnV0dG9uIG5leHQgdG8gYXZhaWxhYmxlIGl0ZW0sXG4vL3RoZSBpdGVtIGNoYW5nZXMgaXRzIHVwRm9yQXVjdGlvbiB2YWx1ZSB0byB0cnVlXG5cblxuY29uc3QgQXZhaWxhYmxlSXRlbXMgPSAoeyBpdGVtcywgZmlsdGVyRm4sIGFkZFRvQXVjdGlvbiB9KSA9PiB7XG5cbmZ1bmN0aW9uIG5vbWluYXRlSXRlbSgpIHtcblxufVxuXG4vLyBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNsaWNrKG9iai5pZCl9XG5cbiAgcmV0dXJuKFxuPGRpdiBpZCA9J2F2YWlsYWJsZUl0ZW1zJz5cbjxoMz5JdGVtcyBhdmFpbGFibGUgZm9yIGJpZGRpbmc6PC9oMz5cbntcbiAgICAgIGl0ZW1zLmZpbHRlcihmaWx0ZXJGbilcbiAgICAgICAgLm1hcCgoaXRlbSxpbmRleCkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XG4gICAgICAgICAgICA8cD48c3BhbiBjbGFzc05hbWU9J2F2YWlsYWJsZUl0ZW0nPntpdGVtLm5hbWV9PC9zcGFuPiA8YnV0dG9uIG9uQ2xpY2s9e2FkZFRvQXVjdGlvbn0gaWQ9e2l0ZW0uaWR9PkFkZCB0byBhdWN0aW9uPC9idXR0b24+PC9wPlxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpXG4gICAgfVxuXG5cbjwvZGl2PlxuKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBdmFpbGFibGVJdGVtcztcblxuXG5cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFHQTtBQUdBO0FBUUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/AvailableItems/index.js\n");

/***/ }),

/***/ "./src/BidDashboard/index.js":
/*!***********************************!*\
  !*** ./src/BidDashboard/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});exports.default=void 0;var _react=_interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));var _socket=_interopRequireDefault(__webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/lib/index.js\"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):{};if(desc.get||desc.set){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}}newObj.default=obj;return newObj;}}function _typeof(obj){if(typeof Symbol===\"function\"&&typeof Symbol.iterator===\"symbol\"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol===\"function\"&&obj.constructor===Symbol&&obj!==Symbol.prototype?\"symbol\":typeof obj;};}return _typeof(obj);}function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError(\"Invalid attempt to spread non-iterable instance\");}function _iterableToArray(iter){if(Symbol.iterator in Object(iter)||Object.prototype.toString.call(iter)===\"[object Arguments]\")return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)===\"object\"||typeof call===\"function\")){return call;}return _assertThisInitialized(self);}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass,superClass){if(typeof superClass!==\"function\"&&superClass!==null){throw new TypeError(\"Super expression must either be null or a function\");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return self;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}// shoutout to Fabian Schultz on stackoverflow for helping with the timer\n// https://stackoverflow.com/questions/40885923/countdown-timer-in-react\nvar BidDashboard=/*#__PURE__*/function(_Component){_inherits(BidDashboard,_Component);function BidDashboard(props){var _this;_classCallCheck(this,BidDashboard);_this=_possibleConstructorReturn(this,_getPrototypeOf(BidDashboard).call(this,props));_defineProperty(_assertThisInitialized(_assertThisInitialized(_this)),\"handleSubmit\",function(event){var body=event.target.value;if(event.keyCode===13&&body){var message={body:parseInt(body),from:'eyy'};_this.socket.emit('message',message);event.target.value=message.body+1;_this.startTimer();}});_this.state={items:[],messages:[{body:0,from:'bid'}],seconds:6};_this.startTimer=_this.startTimer.bind(_assertThisInitialized(_assertThisInitialized(_this)));return _this;}_createClass(BidDashboard,[{key:\"componentDidMount\",value:function componentDidMount(){var _this2=this;console.log('yes comp did mount on dashboard');this.socket=_socket.default.connect('/');this.socket.on('message',function(message){_this2.setState({messages:[message].concat(_toConsumableArray(_this2.state.messages))});});this.socket.on('timer',function(seconds){_this2.setState({seconds:seconds});});}},{key:\"componentDidUpdate\",value:function componentDidUpdate(){if(this.state.seconds=='Time is up!'){var price=this.state.messages[0].body;console.log(price);this.props.updateBalance(price);this.setState({messages:[{body:0,from:'bid'}],seconds:6});}}},{key:\"startTimer\",value:function startTimer(){this.setState({seconds:6});this.socket.emit('timer',6);}},{key:\"render\",value:function render(){var completedBidFn=this.props.completedBidFn;// console.log(props)\n// const { items } = this.props;\nvar ledger=this.state.messages.map(function(message,index){return _react.default.createElement(\"li\",{key:index},\" \",message.from,\" - $\",message.body);});var bidItem=this.props.items.filter(function(item){return item.upForAuction&&!item.completedBid;}).map(function(item,index){return _react.default.createElement(\"h3\",{key:index},\" \",item.name,\" \");});var bidID=this.props.items.filter(function(item){return item.upForAuction&&!item.completedBid;}).map(function(item,index){return item.id;});var price=this.state.messages[0].body;bidID=bidID[0];// console.log(bidID)\nvar counter=0;if(this.state.seconds=='Time is up!'){completedBidFn(bidID,price);if(counter>1){updateBalance(price);counter+=1;}}return _react.default.createElement(\"div\",{id:\"funChat\"},_react.default.createElement(\"div\",null),_react.default.createElement(\"div\",{id:\"chat-window\"},_react.default.createElement(\"div\",null,\"For Auction:\",bidItem),_react.default.createElement(\"div\",{id:\"countdown\"},\"Time left: \",this.state.seconds),_react.default.createElement(\"div\",{className:\"bidInfo\"},\"Bid here:\",_react.default.createElement(\"input\",{type:\"number\",onKeyUp:bidItem.length>0?this.handleSubmit:undefined}),ledger),_react.default.createElement(\"div\",{id:\"output\"})));}}]);return BidDashboard;}(_react.Component);var _default=BidDashboard;//<button onClick={this.startTimer}>Start</button>\nexports.default=_default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQmlkRGFzaGJvYXJkL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL0JpZERhc2hib2FyZC9pbmRleC5qcz81MjNhIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50J1xuXG4vLyBzaG91dG91dCB0byBGYWJpYW4gU2NodWx0eiBvbiBzdGFja292ZXJmbG93IGZvciBoZWxwaW5nIHdpdGggdGhlIHRpbWVyXG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80MDg4NTkyMy9jb3VudGRvd24tdGltZXItaW4tcmVhY3RcblxuY2xhc3MgQmlkRGFzaGJvYXJkIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGl0ZW1zOiBbXSxcbiAgICAgIG1lc3NhZ2VzOiBbe2JvZHk6MCwgZnJvbTonYmlkJ31dLFxuICAgICAgc2Vjb25kczogNixcbiAgICAgICAgICB9XG4gICAgdGhpcy5zdGFydFRpbWVyID0gdGhpcy5zdGFydFRpbWVyLmJpbmQodGhpcyk7XG4gIH1cblxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgY29uc29sZS5sb2coJ3llcyBjb21wIGRpZCBtb3VudCBvbiBkYXNoYm9hcmQnKVxuICAgICAgdGhpcy5zb2NrZXQgPSBpby5jb25uZWN0KCcvJyk7XG4gICAgICB0aGlzLnNvY2tldC5vbignbWVzc2FnZScsIG1lc3NhZ2UgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZXM6IFttZXNzYWdlLCAuLi50aGlzLnN0YXRlLm1lc3NhZ2VzXSB9KVxuICAgICAgfSlcbiAgICAgIHRoaXMuc29ja2V0Lm9uKCd0aW1lcicsIHNlY29uZHMgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2Vjb25kczogc2Vjb25kcyB9KTtcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgaWYodGhpcy5zdGF0ZS5zZWNvbmRzID09ICdUaW1lIGlzIHVwIScpe1xuICAgICAgICBsZXQgcHJpY2UgPSB0aGlzLnN0YXRlLm1lc3NhZ2VzWzBdLmJvZHlcbiAgICAgICAgY29uc29sZS5sb2cocHJpY2UpXG4gICAgICAgIHRoaXMucHJvcHMudXBkYXRlQmFsYW5jZShwcmljZSlcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbWVzc2FnZXM6IFt7Ym9keTowLCBmcm9tOidiaWQnfV0sXG4gICAgICAgICAgc2Vjb25kczogNlxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHN0YXJ0VGltZXIoKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2Vjb25kczogNiB9KVxuICAgICAgdGhpcy5zb2NrZXQuZW1pdCgndGltZXInLCA2KVxuICB9XG5cbiAgaGFuZGxlU3VibWl0ID0gZXZlbnQgPT4ge1xuICAgICAgbGV0IGJvZHkgPSBldmVudC50YXJnZXQudmFsdWVcbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMyAmJiBib2R5KXtcbiAgICAgICAgICBsZXQgbWVzc2FnZSA9IHtcbiAgICAgICAgICBib2R5OiBwYXJzZUludChib2R5KSxcbiAgICAgICAgICBmcm9tOiAnZXl5J1xuICAgICAgICAgIH1cbiAgICAgICAgdGhpcy5zb2NrZXQuZW1pdCgnbWVzc2FnZScsIG1lc3NhZ2UpXG4gICAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9IG1lc3NhZ2UuYm9keSArMVxuICAgICAgICB0aGlzLnN0YXJ0VGltZXIoKVxuICAgICAgfVxuICAgfVxuXG5cblxucmVuZGVyKCkge1xuY29uc3QgY29tcGxldGVkQmlkRm4gPSB0aGlzLnByb3BzLmNvbXBsZXRlZEJpZEZuXG5cbiAgLy8gY29uc29sZS5sb2cocHJvcHMpXG4gIC8vIGNvbnN0IHsgaXRlbXMgfSA9IHRoaXMucHJvcHM7XG5sZXQgbGVkZ2VyID0gdGhpcy5zdGF0ZS5tZXNzYWdlcy5tYXAoKG1lc3NhZ2UsaW5kZXgpID0+IHtcbiAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2luZGV4fT4ge21lc3NhZ2UuZnJvbX0gLSAke21lc3NhZ2UuYm9keX08L2xpPlxuICAgICAgfSlcblxubGV0IGJpZEl0ZW0gPSB0aGlzLnByb3BzLml0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0udXBGb3JBdWN0aW9uICYmICFpdGVtLmNvbXBsZXRlZEJpZCkubWFwKChpdGVtLGluZGV4KSA9PiB7XG4gICAgcmV0dXJuIDxoMyBrZXk9e2luZGV4fT4ge2l0ZW0ubmFtZX0gPC9oMz5cbiAgfSlcblxubGV0IGJpZElEID0gdGhpcy5wcm9wcy5pdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLnVwRm9yQXVjdGlvbiAmJiAhaXRlbS5jb21wbGV0ZWRCaWQpLm1hcCgoaXRlbSxpbmRleCkgPT4ge1xuICAgIHJldHVybiBpdGVtLmlkXG4gIH0pXG5cblxuXG5cbmxldCBwcmljZSA9IHRoaXMuc3RhdGUubWVzc2FnZXNbMF0uYm9keVxuYmlkSUQgPSBiaWRJRFswXVxuXG4vLyBjb25zb2xlLmxvZyhiaWRJRClcblxubGV0IGNvdW50ZXIgPSAwXG5cbmlmKHRoaXMuc3RhdGUuc2Vjb25kcyA9PSAnVGltZSBpcyB1cCEnKSB7XG4gICAgY29tcGxldGVkQmlkRm4oYmlkSUQscHJpY2UpXG4gICAgaWYoY291bnRlciA+IDEpe1xuICAgICAgdXBkYXRlQmFsYW5jZShwcmljZSlcbiAgICAgIGNvdW50ZXIgKz0gMVxuICAgIH1cbn1cblxuXG5cbiAgcmV0dXJuKFxuICA8ZGl2IGlkPVwiZnVuQ2hhdFwiPlxuXG4gIDxkaXY+XG5cblxuICAgICAgPC9kaXY+XG4gICA8ZGl2IGlkPVwiY2hhdC13aW5kb3dcIj5cbiAgICAgPGRpdj5Gb3IgQXVjdGlvbjp7YmlkSXRlbX08L2Rpdj5cbiAgICA8ZGl2IGlkPVwiY291bnRkb3duXCI+XG4gICAgVGltZSBsZWZ0OiB7dGhpcy5zdGF0ZS5zZWNvbmRzfVxuPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZSA9ICdiaWRJbmZvJz5cbiAgICAgIEJpZCBoZXJlOlxuICAgICAgICA8aW5wdXQgdHlwZT0nbnVtYmVyJyBvbktleVVwPXtcbiAgICAgICAgICBiaWRJdGVtLmxlbmd0aCA+IDAgP1xuICAgICAgICAgIHRoaXMuaGFuZGxlU3VibWl0IDpcbiAgICAgICAgICB1bmRlZmluZWRcbiAgICAgICAgfSAvPlxuICAgICAgICB7bGVkZ2VyfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGlkPVwib3V0cHV0XCI+PC9kaXY+XG4gICA8L2Rpdj5cbiAgPC9kaXY+XG4gIClcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQmlkRGFzaGJvYXJkO1xuLy88YnV0dG9uIG9uQ2xpY2s9e3RoaXMuc3RhcnRUaW1lcn0+U3RhcnQ8L2J1dHRvbj5cbiJdLCJtYXBwaW5ncyI6IkFBQ0E7QUFJQTtBQUVBO0FBNERBO0FBQ0E7QUFvQkE7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/BidDashboard/index.js\n");

/***/ }),

/***/ "./src/Header/index.js":
/*!*****************************!*\
  !*** ./src/Header/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});exports.default=void 0;var _react=_interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):{};if(desc.get||desc.set){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}}newObj.default=obj;return newObj;}}var Header=function Header(){return _react.default.createElement(\"div\",{id:\"header\"},_react.default.createElement(\"h1\",null,\"Live Auction\"));};var _default=Header;exports.default=_default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvSGVhZGVyL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL0hlYWRlci9pbmRleC5qcz9kY2ViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbnJldHVybihcbiAgPGRpdiBpZD0naGVhZGVyJz5cbiAgPGgxPkxpdmUgQXVjdGlvbjwvaDE+XG4gIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Header/index.js\n");

/***/ }),

/***/ "./src/UserDashboard/index.js":
/*!************************************!*\
  !*** ./src/UserDashboard/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});exports.default=void 0;var _react=_interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));var _socket=_interopRequireDefault(__webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/lib/index.js\"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):{};if(desc.get||desc.set){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}}newObj.default=obj;return newObj;}}function _typeof(obj){if(typeof Symbol===\"function\"&&typeof Symbol.iterator===\"symbol\"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol===\"function\"&&obj.constructor===Symbol&&obj!==Symbol.prototype?\"symbol\":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)===\"object\"||typeof call===\"function\")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return self;}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass,superClass){if(typeof superClass!==\"function\"&&superClass!==null){throw new TypeError(\"Super expression must either be null or a function\");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}var UserDashboard=/*#__PURE__*/function(_Component){_inherits(UserDashboard,_Component);function UserDashboard(props){var _this;_classCallCheck(this,UserDashboard);_this=_possibleConstructorReturn(this,_getPrototypeOf(UserDashboard).call(this,props));_this.state={availableBalance:150};return _this;}// componentDidMount() {\n// }\n_createClass(UserDashboard,[{key:\"componentWillReceiveProps\",value:function componentWillReceiveProps(){var price=this.props.price;var availableBalance=this.state.availableBalance-price;this.setState({availableBalance:availableBalance});}},{key:\"render\",value:function render(){var items=this.props.items;var filterFn=this.props.filterFn;var availableBalance=this.state.availableBalance;// async updateBalance(price){\n//   let newBalance = this.state.availableBalance - price\n//   console.log(newBalance)\n//     await this.setState({\n//     availableBalance: newBalance\n//     })\n//   }\nreturn _react.default.createElement(\"div\",{id:\"userDashboard\"},_react.default.createElement(\"div\",null,\"Available balance: $\",availableBalance),_react.default.createElement(\"h3\",null,\"Items won\"),_react.default.createElement(\"ul\",null,items.filter(filterFn).map(function(item,index){return _react.default.createElement(\"li\",{key:index},item.name,\" - $\",item.price);})));}}]);return UserDashboard;}(_react.Component);var _default=UserDashboard;exports.default=_default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvVXNlckRhc2hib2FyZC9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9Vc2VyRGFzaGJvYXJkL2luZGV4LmpzPzViM2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50J1xuXG5jbGFzcyBVc2VyRGFzaGJvYXJkIGV4dGVuZHMgQ29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGF2YWlsYWJsZUJhbGFuY2U6IDE1MCxcbiAgICB9XG4gIH1cblxuLy8gY29tcG9uZW50RGlkTW91bnQoKSB7XG5cbi8vIH1cblxuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcygpIHtcbiAgbGV0IHByaWNlID0gdGhpcy5wcm9wcy5wcmljZVxuICBsZXQgYXZhaWxhYmxlQmFsYW5jZSA9IHRoaXMuc3RhdGUuYXZhaWxhYmxlQmFsYW5jZSAtIHByaWNlXG4gIHRoaXMuc2V0U3RhdGUoe1xuICAgIGF2YWlsYWJsZUJhbGFuY2U6YXZhaWxhYmxlQmFsYW5jZVxuICB9KVxufVxuXG5yZW5kZXIoKSB7XG5cblxubGV0IGl0ZW1zID0gdGhpcy5wcm9wcy5pdGVtc1xubGV0IGZpbHRlckZuID0gdGhpcy5wcm9wcy5maWx0ZXJGblxubGV0IGF2YWlsYWJsZUJhbGFuY2UgPSB0aGlzLnN0YXRlLmF2YWlsYWJsZUJhbGFuY2VcblxuICAvLyBhc3luYyB1cGRhdGVCYWxhbmNlKHByaWNlKXtcbiAgLy8gICBsZXQgbmV3QmFsYW5jZSA9IHRoaXMuc3RhdGUuYXZhaWxhYmxlQmFsYW5jZSAtIHByaWNlXG4gIC8vICAgY29uc29sZS5sb2cobmV3QmFsYW5jZSlcbiAgLy8gICAgIGF3YWl0IHRoaXMuc2V0U3RhdGUoe1xuICAvLyAgICAgYXZhaWxhYmxlQmFsYW5jZTogbmV3QmFsYW5jZVxuICAvLyAgICAgfSlcbiAgLy8gICB9XG5cbiAgcmV0dXJuKFxuICA8ZGl2IGlkPSd1c2VyRGFzaGJvYXJkJz5cbiAgPGRpdj5BdmFpbGFibGUgYmFsYW5jZTogJHthdmFpbGFibGVCYWxhbmNlfTwvZGl2PlxuICAgIDxoMz5JdGVtcyB3b248L2gzPlxuICAgIDx1bD5cbiAgICAgIHtcbiAgICAgIGl0ZW1zLmZpbHRlcihmaWx0ZXJGbilcbiAgICAgICAgLm1hcCgoaXRlbSxpbmRleCkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIHtpdGVtLm5hbWV9IC0gJHtpdGVtLnByaWNlfVxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpXG4gICAgfVxuICAgIDwvdWw+XG5cbiAgPC9kaXY+XG4gIClcbn1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlckRhc2hib2FyZDtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFhQTtBQUVBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/UserDashboard/index.js\n");

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