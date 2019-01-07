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
eval("Object.defineProperty(exports,\"__esModule\",{value:true});exports.default=void 0;var _axios=_interopRequireDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var _default=function _default(baseURL){var instance=_axios.default.create({baseURL:baseURL,timeout:1000,headers:{'Content-Type':'application/json'}});return{read:function read(){return instance.get('/').then(function(_ref){var items=_ref.data.items;return items;}).catch(function(e){throw e;});},update:function update(id,price){return instance.put(\"/\".concat(id),{item:price}).catch(function(e){throw e;});},updateAfter:function updateAfter(id,price,user){return instance.put(\"/\".concat(id,\"/\").concat(price,\"/\").concat(user),{item:price}).catch(function(e){throw e;});},resetItems:function resetItems(){return instance.put('/reset').catch(function(e){throw e;});}// addToAuction(id){\n//   return instance.put(`/${id}`, { item.upForAuction: true })\n//   .catch((e) => { throw e; });\n// }\n};};exports.default=_default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQWpheEFkYXB0ZXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQWpheEFkYXB0ZXIuanM/NzM3MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAgJ2F4aW9zJztcblxuZXhwb3J0IGRlZmF1bHQgKGJhc2VVUkwpID0+IHtcbiAgY29uc3QgaW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xuICAgIGJhc2VVUkwsXG4gICAgdGltZW91dDogMTAwMCxcbiAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgfSk7XG5cbiAgcmV0dXJuIHtcblxuICAgIHJlYWQoKSB7XG4gICAgICByZXR1cm4gaW5zdGFuY2UuZ2V0KCcvJylcbiAgICAgICAgLnRoZW4oKHsgZGF0YTogeyBpdGVtcyB9IH0pID0+IGl0ZW1zKVxuICAgICAgICAuY2F0Y2goKGUpID0+IHsgdGhyb3cgZTsgfSk7XG4gICAgfSxcbiAgICB1cGRhdGUoaWQsIHByaWNlKSB7XG4gICAgICByZXR1cm4gaW5zdGFuY2UucHV0KGAvJHtpZH1gLCB7IGl0ZW06IHByaWNlIH0pXG4gICAgICAgIC5jYXRjaCgoZSkgPT4geyB0aHJvdyBlOyB9KTtcbiAgICB9LFxuICAgICB1cGRhdGVBZnRlcihpZCwgcHJpY2UsIHVzZXIpIHtcbiAgICAgIHJldHVybiBpbnN0YW5jZS5wdXQoYC8ke2lkfS8ke3ByaWNlfS8ke3VzZXJ9YCwgeyBpdGVtOiBwcmljZSB9KVxuICAgICAgICAuY2F0Y2goKGUpID0+IHsgdGhyb3cgZTsgfSk7XG4gICAgfSxcbiAgICAgIHJlc2V0SXRlbXMoKSB7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZS5wdXQoJy9yZXNldCcpXG4gICAgICAgICAgLmNhdGNoKChlKSA9PiB7dGhyb3cgZTsgfSk7XG4gICAgICB9XG4gICAgLy8gYWRkVG9BdWN0aW9uKGlkKXtcbiAgICAvLyAgIHJldHVybiBpbnN0YW5jZS5wdXQoYC8ke2lkfWAsIHsgaXRlbS51cEZvckF1Y3Rpb246IHRydWUgfSlcbiAgICAvLyAgIC5jYXRjaCgoZSkgPT4geyB0aHJvdyBlOyB9KTtcbiAgICAvLyB9XG5cbiAgfTtcbn07XG5cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUE2QkE7QUFDQTtBQUNBO0FBdEJBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/AjaxAdapter.js\n");

/***/ }),

/***/ "./src/App/index.js":
/*!**************************!*\
  !*** ./src/App/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});exports.default=void 0;var _react=_interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));__webpack_require__(/*! ./styles.css */ \"./src/App/styles.css\");var _AjaxAdapter=_interopRequireDefault(__webpack_require__(/*! ../AjaxAdapter */ \"./src/AjaxAdapter.js\"));var _UserAjaxAdapter=_interopRequireDefault(__webpack_require__(/*! ../UserAjaxAdapter */ \"./src/UserAjaxAdapter.js\"));var _BidDashboard=_interopRequireDefault(__webpack_require__(/*! ../BidDashboard */ \"./src/BidDashboard/index.js\"));var _UserDashboard=_interopRequireDefault(__webpack_require__(/*! ../UserDashboard */ \"./src/UserDashboard/index.js\"));var _AvailableItems=_interopRequireDefault(__webpack_require__(/*! ../AvailableItems */ \"./src/AvailableItems/index.js\"));var _Header=_interopRequireDefault(__webpack_require__(/*! ../Header */ \"./src/Header/index.js\"));var _PickUser=_interopRequireDefault(__webpack_require__(/*! ../PickUser */ \"./src/PickUser/index.js\"));var _socket=_interopRequireDefault(__webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/lib/index.js\"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):{};if(desc.get||desc.set){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}}newObj.default=obj;return newObj;}}function _typeof(obj){if(typeof Symbol===\"function\"&&typeof Symbol.iterator===\"symbol\"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol===\"function\"&&obj.constructor===Symbol&&obj!==Symbol.prototype?\"symbol\":typeof obj;};}return _typeof(obj);}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,\"next\",value);}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,\"throw\",err);}_next(undefined);});};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)===\"object\"||typeof call===\"function\")){return call;}return _assertThisInitialized(self);}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass,superClass){if(typeof superClass!==\"function\"&&superClass!==null){throw new TypeError(\"Super expression must either be null or a function\");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return self;}var ItemDataModel=(0,_AjaxAdapter.default)('/api/items');var upForAuctionRoute=(0,_AjaxAdapter.default)('/api/items/upForAuction');var completedBidRoute=(0,_AjaxAdapter.default)('/api/items/completedBid');var UserDataModel=(0,_UserAjaxAdapter.default)('/api/users/');var App=/*#__PURE__*/function(_Component){_inherits(App,_Component);function App(props){var _this;_classCallCheck(this,App);_this=_possibleConstructorReturn(this,_getPrototypeOf(App).call(this,props));_this.state={items:[],latestBid:{body:0,from:undefined},userID:undefined,user:{},allUsers:[]};_this.addToAuction=_this.addToAuction.bind(_assertThisInitialized(_assertThisInitialized(_this)));_this.completedBidFn=_this.completedBidFn.bind(_assertThisInitialized(_assertThisInitialized(_this)));_this.getData=_this.getData.bind(_assertThisInitialized(_assertThisInitialized(_this)));_this.updateUserBalanceDb=_this.updateUserBalanceDb.bind(_assertThisInitialized(_assertThisInitialized(_this)));_this.resetPrice=_this.resetPrice.bind(_assertThisInitialized(_assertThisInitialized(_this)));_this.resetAuction=_this.resetAuction.bind(_assertThisInitialized(_assertThisInitialized(_this)));_this.getAllUsers=_this.getAllUsers.bind(_assertThisInitialized(_assertThisInitialized(_this)));_this.pickUser=_this.pickUser.bind(_assertThisInitialized(_assertThisInitialized(_this)));_this.updateItem=_this.updateItem.bind(_assertThisInitialized(_assertThisInitialized(_this)));_this.getThisUser=_this.getThisUser.bind(_assertThisInitialized(_assertThisInitialized(_this)));return _this;}_createClass(App,[{key:\"componentDidMount\",value:function componentDidMount(){var _this2=this;this.getData();this.getAllUsers();//all network events should go in componentDidMount\nthis.socket=_socket.default.connect('/');this.socket.on('latestBid',function(latestBid){_this2.setState({latestBid:latestBid});});this.socket.on('update',function(){_this2.getData();_this2.getAllUsers();_this2.getThisUser();});}},{key:\"getThisUser\",value:function(){var _getThisUser=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee(){var userID;return regeneratorRuntime.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:userID=this.state.userID;console.log('getting user data');_context.t0=this;_context.next=5;return UserDataModel.read(userID);case 5:_context.t1=_context.sent;_context.t2={user:_context.t1};_context.t0.setState.call(_context.t0,_context.t2);case 8:case\"end\":return _context.stop();}}},_callee,this);}));function getThisUser(){return _getThisUser.apply(this,arguments);}return getThisUser;}()},{key:\"getData\",value:function(){var _getData=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee2(){return regeneratorRuntime.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:console.log('getting data');_context2.t0=this;_context2.next=4;return ItemDataModel.read();case 4:_context2.t1=_context2.sent;_context2.t2={items:_context2.t1};_context2.t0.setState.call(_context2.t0,_context2.t2);case 7:case\"end\":return _context2.stop();}}},_callee2,this);}));function getData(){return _getData.apply(this,arguments);}return getData;}()},{key:\"getAllUsers\",value:function(){var _getAllUsers=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee3(){return regeneratorRuntime.wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:console.log('getting all the users!');_context3.t0=this;_context3.next=4;return UserDataModel.index();case 4:_context3.t1=_context3.sent;_context3.t2={allUsers:_context3.t1};_context3.t0.setState.call(_context3.t0,_context3.t2);case 7:case\"end\":return _context3.stop();}}},_callee3,this);}));function getAllUsers(){return _getAllUsers.apply(this,arguments);}return getAllUsers;}()},{key:\"addToAuction\",value:function(){var _addToAuction=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee4(e){var valid,id;return regeneratorRuntime.wrap(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:valid=true;this.state.items.forEach(function(el){if(el.upForAuction===true){valid=false;}});// update database\nif(!valid){_context4.next=9;break;}id=e.target.id;_context4.next=6;return upForAuctionRoute.update(id);case 6:// this.socket = io.connect('/');\nthis.socket.emit('update');this.socket.emit('bid',{body:1,from:this.state.user.username});this.socket.emit('load');case 9:case\"end\":return _context4.stop();}}},_callee4,this);}));function addToAuction(_x){return _addToAuction.apply(this,arguments);}return addToAuction;}()},{key:\"updateItem\",value:function(){var _updateItem=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee5(id){return regeneratorRuntime.wrap(function _callee5$(_context5){while(1){switch(_context5.prev=_context5.next){case 0:if(!(this.state.user.username===this.state.latestBid.from)){_context5.next=3;break;}_context5.next=3;return completedBidRoute.updateAfter(id,this.state.latestBid.body,this.state.user.id);case 3:case\"end\":return _context5.stop();}}},_callee5,this);}));function updateItem(_x2){return _updateItem.apply(this,arguments);}return updateItem;}()},{key:\"completedBidFn\",value:function(){var _completedBidFn=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee6(id){return regeneratorRuntime.wrap(function _callee6$(_context6){while(1){switch(_context6.prev=_context6.next){case 0:_context6.next=2;return this.updateItem(id);case 2:_context6.next=4;return this.updateUserBalanceDb();case 4:_context6.next=6;return this.resetPrice();case 6:_context6.next=8;return this.socket.emit('update');case 8:case\"end\":return _context6.stop();}}},_callee6,this);}));function completedBidFn(_x3){return _completedBidFn.apply(this,arguments);}return completedBidFn;}()},{key:\"updateUserBalanceDb\",value:function(){var _updateUserBalanceDb=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee7(){var newBalance;return regeneratorRuntime.wrap(function _callee7$(_context7){while(1){switch(_context7.prev=_context7.next){case 0:if(!(this.state.user.username===this.state.latestBid.from)){_context7.next=4;break;}newBalance=this.state.user.balance-this.state.latestBid.body;_context7.next=4;return UserDataModel.update(this.state.userID,newBalance).then(this.getData()).then(this.getThisUser());case 4:case\"end\":return _context7.stop();}}},_callee7,this);}));function updateUserBalanceDb(){return _updateUserBalanceDb.apply(this,arguments);}return updateUserBalanceDb;}()},{key:\"resetPrice\",value:function(){var _resetPrice=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee8(){return regeneratorRuntime.wrap(function _callee8$(_context8){while(1){switch(_context8.prev=_context8.next){case 0:_context8.next=2;return this.setState({latestBid:{}});case 2:case\"end\":return _context8.stop();}}},_callee8,this);}));function resetPrice(){return _resetPrice.apply(this,arguments);}return resetPrice;}()},{key:\"resetAuction\",value:function(){var _resetAuction=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee9(){return regeneratorRuntime.wrap(function _callee9$(_context9){while(1){switch(_context9.prev=_context9.next){case 0:console.log('lets reset');_context9.next=3;return ItemDataModel.resetItems();case 3:_context9.next=5;return UserDataModel.resetUsers();case 5:_context9.next=7;return this.socket.emit('update');case 7:case\"end\":return _context9.stop();}}},_callee9,this);}));function resetAuction(){return _resetAuction.apply(this,arguments);}return resetAuction;}()},{key:\"pickUser\",value:function(){var _pickUser=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee10(e){var id;return regeneratorRuntime.wrap(function _callee10$(_context10){while(1){switch(_context10.prev=_context10.next){case 0:id=parseInt(e.target.id,10);_context10.next=3;return this.setState({userID:id});case 3:this.getThisUser();case 4:case\"end\":return _context10.stop();}}},_callee10,this);}));function pickUser(_x4){return _pickUser.apply(this,arguments);}return pickUser;}()},{key:\"render\",value:function render(){var _this$state=this.state,items=_this$state.items,latestBid=_this$state.latestBid,user=_this$state.user,allUsers=_this$state.allUsers,userID=_this$state.userID;return _react.default.createElement(\"div\",null,_react.default.createElement(_Header.default,null),userID?_react.default.createElement(\"div\",null,_react.default.createElement(_BidDashboard.default,{items:items,completedBidFn:this.completedBidFn,filterFn:function filterFn(item){return item.upForAuction&&!item.completedBid;},user:user}),_react.default.createElement(_UserDashboard.default,{items:items,filterFn:function filterFn(item){return!item.upForAuction&&item.completedBid;},latestBid:latestBid,user:user,resetAuction:this.resetAuction}),_react.default.createElement(_AvailableItems.default,{items:items,addToAuction:this.addToAuction,filterFn:function filterFn(item){return!item.upForAuction&&!item.completedBid;}})):_react.default.createElement(_PickUser.default,{pickUser:this.pickUser,allUsers:allUsers}));}}]);return App;}(_react.Component);var _default=App;exports.default=_default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXBwL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC9pbmRleC5qcz9iM2E3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQgQWpheEFkYXB0ZXIgZnJvbSAnLi4vQWpheEFkYXB0ZXInO1xuaW1wb3J0IFVzZXJBamF4QWRhcHRlciBmcm9tICcuLi9Vc2VyQWpheEFkYXB0ZXInO1xuXG5pbXBvcnQgQmlkRGFzaGJvYXJkIGZyb20gJy4uL0JpZERhc2hib2FyZCc7XG5pbXBvcnQgVXNlckRhc2hib2FyZCBmcm9tICcuLi9Vc2VyRGFzaGJvYXJkJztcbmltcG9ydCBBdmFpbGFibGVJdGVtcyBmcm9tICcuLi9BdmFpbGFibGVJdGVtcyc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL0hlYWRlcic7XG5pbXBvcnQgUGlja1VzZXIgZnJvbSAnLi4vUGlja1VzZXInO1xuaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnXG5cbmNvbnN0IEl0ZW1EYXRhTW9kZWwgPSBBamF4QWRhcHRlcignL2FwaS9pdGVtcycpO1xuY29uc3QgdXBGb3JBdWN0aW9uUm91dGUgPSBBamF4QWRhcHRlcignL2FwaS9pdGVtcy91cEZvckF1Y3Rpb24nKTtcbmNvbnN0IGNvbXBsZXRlZEJpZFJvdXRlID0gQWpheEFkYXB0ZXIoJy9hcGkvaXRlbXMvY29tcGxldGVkQmlkJyk7XG5cbmNvbnN0IFVzZXJEYXRhTW9kZWwgPSBVc2VyQWpheEFkYXB0ZXIoJy9hcGkvdXNlcnMvJyk7XG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGl0ZW1zOiBbXSxcbiAgICAgIGxhdGVzdEJpZDoge2JvZHk6IDAsIGZyb206IHVuZGVmaW5lZH0sXG4gICAgICB1c2VySUQ6IHVuZGVmaW5lZCxcbiAgICAgIHVzZXI6IHt9LFxuICAgICAgYWxsVXNlcnM6IFtdLFxuICAgIH1cbiAgICB0aGlzLmFkZFRvQXVjdGlvbiA9IHRoaXMuYWRkVG9BdWN0aW9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jb21wbGV0ZWRCaWRGbiA9IHRoaXMuY29tcGxldGVkQmlkRm4uYmluZCh0aGlzKTtcbiAgICB0aGlzLmdldERhdGEgPSB0aGlzLmdldERhdGEuYmluZCh0aGlzKTtcbiAgICB0aGlzLnVwZGF0ZVVzZXJCYWxhbmNlRGIgPSB0aGlzLnVwZGF0ZVVzZXJCYWxhbmNlRGIuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlc2V0UHJpY2UgPSB0aGlzLnJlc2V0UHJpY2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlc2V0QXVjdGlvbiA9IHRoaXMucmVzZXRBdWN0aW9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5nZXRBbGxVc2VycyA9IHRoaXMuZ2V0QWxsVXNlcnMuYmluZCh0aGlzKTtcbiAgICB0aGlzLnBpY2tVc2VyID0gdGhpcy5waWNrVXNlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMudXBkYXRlSXRlbSA9IHRoaXMudXBkYXRlSXRlbS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2V0VGhpc1VzZXIgPSB0aGlzLmdldFRoaXNVc2VyLmJpbmQodGhpcyk7XG4gIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5nZXREYXRhKCk7XG4gICAgICB0aGlzLmdldEFsbFVzZXJzKCk7XG4gICAgICAvL2FsbCBuZXR3b3JrIGV2ZW50cyBzaG91bGQgZ28gaW4gY29tcG9uZW50RGlkTW91bnRcbiAgICAgIHRoaXMuc29ja2V0ID0gaW8uY29ubmVjdCgnLycpO1xuXG4gICAgICB0aGlzLnNvY2tldC5vbignbGF0ZXN0QmlkJywgbGF0ZXN0QmlkID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bGF0ZXN0QmlkOiBsYXRlc3RCaWQsfSlcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuc29ja2V0Lm9uKCd1cGRhdGUnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuZ2V0RGF0YSgpO1xuICAgICAgICB0aGlzLmdldEFsbFVzZXJzKCk7XG4gICAgICAgIHRoaXMuZ2V0VGhpc1VzZXIoKTtcbiAgICAgIH0pXG4gICAgfVxuXG4gICBhc3luYyBnZXRUaGlzVXNlcigpIHtcbiAgICBsZXQgdXNlcklEID0gdGhpcy5zdGF0ZS51c2VySURcbiAgICBjb25zb2xlLmxvZygnZ2V0dGluZyB1c2VyIGRhdGEnKVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdXNlcjogYXdhaXQgVXNlckRhdGFNb2RlbC5yZWFkKHVzZXJJRCksXG4gICAgfSk7XG4gIH1cblxuXG4gYXN5bmMgZ2V0RGF0YSgpIHtcbiAgICBjb25zb2xlLmxvZygnZ2V0dGluZyBkYXRhJylcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGl0ZW1zOiBhd2FpdCBJdGVtRGF0YU1vZGVsLnJlYWQoKSxcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIGdldEFsbFVzZXJzKCkge1xuICAgIGNvbnNvbGUubG9nKCdnZXR0aW5nIGFsbCB0aGUgdXNlcnMhJylcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGFsbFVzZXJzOiBhd2FpdCBVc2VyRGF0YU1vZGVsLmluZGV4KCksXG4gICAgfSk7XG4gIH1cblxuICAgIGFzeW5jIGFkZFRvQXVjdGlvbihlKXtcbiAgICBsZXQgdmFsaWQgPSB0cnVlXG4gICAgdGhpcy5zdGF0ZS5pdGVtcy5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG4gICAgICBpZihlbC51cEZvckF1Y3Rpb24gPT09IHRydWUpe1xuICAgICAgICB2YWxpZCA9IGZhbHNlXG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gdXBkYXRlIGRhdGFiYXNlXG4gICAgaWYodmFsaWQpe1xuICAgICAgbGV0IGlkID0gZS50YXJnZXQuaWRcbiAgICAgIGF3YWl0IHVwRm9yQXVjdGlvblJvdXRlLnVwZGF0ZShpZClcbiAgICAgIC8vIHRoaXMuc29ja2V0ID0gaW8uY29ubmVjdCgnLycpO1xuICAgICAgdGhpcy5zb2NrZXQuZW1pdCgndXBkYXRlJylcbiAgICAgIHRoaXMuc29ja2V0LmVtaXQoJ2JpZCcsIHtib2R5OjEsZnJvbTp0aGlzLnN0YXRlLnVzZXIudXNlcm5hbWV9KVxuICAgICAgdGhpcy5zb2NrZXQuZW1pdCgnbG9hZCcpXG4gICAgfVxuICAgIH1cblxuICAgIGFzeW5jIHVwZGF0ZUl0ZW0oaWQpe1xuICAgIGlmKHRoaXMuc3RhdGUudXNlci51c2VybmFtZSA9PT0gdGhpcy5zdGF0ZS5sYXRlc3RCaWQuZnJvbSl7XG4gICAgICBhd2FpdCBjb21wbGV0ZWRCaWRSb3V0ZS51cGRhdGVBZnRlcihpZCx0aGlzLnN0YXRlLmxhdGVzdEJpZC5ib2R5LHRoaXMuc3RhdGUudXNlci5pZClcbiAgICB9XG4gIH1cblxuICAgYXN5bmMgY29tcGxldGVkQmlkRm4oaWQpe1xuICAgIGF3YWl0IHRoaXMudXBkYXRlSXRlbShpZClcbiAgICBhd2FpdCB0aGlzLnVwZGF0ZVVzZXJCYWxhbmNlRGIoKVxuICAgIGF3YWl0IHRoaXMucmVzZXRQcmljZSgpXG4gICAgYXdhaXQgdGhpcy5zb2NrZXQuZW1pdCgndXBkYXRlJylcbiAgfVxuXG4gICAgYXN5bmMgdXBkYXRlVXNlckJhbGFuY2VEYigpe1xuICAgIGlmKHRoaXMuc3RhdGUudXNlci51c2VybmFtZSA9PT0gdGhpcy5zdGF0ZS5sYXRlc3RCaWQuZnJvbSl7XG4gICAgICBsZXQgbmV3QmFsYW5jZSA9IHRoaXMuc3RhdGUudXNlci5iYWxhbmNlIC0gdGhpcy5zdGF0ZS5sYXRlc3RCaWQuYm9keVxuICAgICAgYXdhaXQgVXNlckRhdGFNb2RlbC51cGRhdGUodGhpcy5zdGF0ZS51c2VySUQsbmV3QmFsYW5jZSlcbiAgICAgIC50aGVuKHRoaXMuZ2V0RGF0YSgpKVxuICAgICAgLnRoZW4odGhpcy5nZXRUaGlzVXNlcigpKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHJlc2V0UHJpY2UoKXtcbiAgICBhd2FpdCB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGxhdGVzdEJpZDoge31cbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgcmVzZXRBdWN0aW9uKCl7XG4gICAgY29uc29sZS5sb2coJ2xldHMgcmVzZXQnKVxuICAgIGF3YWl0IEl0ZW1EYXRhTW9kZWwucmVzZXRJdGVtcygpXG4gICAgYXdhaXQgVXNlckRhdGFNb2RlbC5yZXNldFVzZXJzKClcbiAgICBhd2FpdCB0aGlzLnNvY2tldC5lbWl0KCd1cGRhdGUnKVxuICB9XG5cbiAgYXN5bmMgcGlja1VzZXIoZSl7XG4gICAgbGV0IGlkID0gcGFyc2VJbnQoZS50YXJnZXQuaWQsIDEwKVxuICAgIGF3YWl0IHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdXNlcklEOiBpZFxuICAgIH0pXG4gICAgdGhpcy5nZXRUaGlzVXNlcigpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IGl0ZW1zLCBsYXRlc3RCaWQsIHVzZXIsIGFsbFVzZXJzLCB1c2VySUQgfSA9IHRoaXMuc3RhdGVcblxuICAgIHJldHVybihcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAge3VzZXJJRCA/IChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgPEJpZERhc2hib2FyZCBpdGVtcyA9IHtpdGVtc30gY29tcGxldGVkQmlkRm4gPSB7dGhpcy5jb21wbGV0ZWRCaWRGbn0gZmlsdGVyRm49e2l0ZW0gPT4gaXRlbS51cEZvckF1Y3Rpb24gJiYgIWl0ZW0uY29tcGxldGVkQmlkfSB1c2VyPXt1c2VyfS8+XG4gICAgICAgIDxVc2VyRGFzaGJvYXJkIGl0ZW1zID0ge2l0ZW1zfSBmaWx0ZXJGbj17aXRlbSA9PiAhaXRlbS51cEZvckF1Y3Rpb24gJiYgaXRlbS5jb21wbGV0ZWRCaWR9IGxhdGVzdEJpZD17bGF0ZXN0QmlkfSB1c2VyPXt1c2VyfSByZXNldEF1Y3Rpb249e3RoaXMucmVzZXRBdWN0aW9ufS8+XG4gICAgICAgIDxBdmFpbGFibGVJdGVtcyBpdGVtcyA9IHtpdGVtc30gYWRkVG9BdWN0aW9uPXt0aGlzLmFkZFRvQXVjdGlvbn0gZmlsdGVyRm49e2l0ZW0gPT4gIWl0ZW0udXBGb3JBdWN0aW9uICYmICFpdGVtLmNvbXBsZXRlZEJpZH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICA8UGlja1VzZXIgcGlja1VzZXI9e3RoaXMucGlja1VzZXJ9IGFsbFVzZXJzPXthbGxVc2Vyc30vPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBNkNBO0FBNENBO0FBSUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/App/index.js\n");

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
eval("Object.defineProperty(exports,\"__esModule\",{value:true});exports.default=void 0;var _react=_interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):{};if(desc.get||desc.set){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}}newObj.default=obj;return newObj;}}//when user clicks on button next to available item,\n//the item changes its upForAuction value to true\nvar AvailableItems=function AvailableItems(_ref){var items=_ref.items,filterFn=_ref.filterFn,addToAuction=_ref.addToAuction;return _react.default.createElement(\"div\",{id:\"availableItems\"},_react.default.createElement(\"h3\",null,\"Items available for bidding:\"),items.filter(filterFn).map(function(item,index){return _react.default.createElement(\"div\",{key:index},_react.default.createElement(\"p\",null,_react.default.createElement(\"span\",{className:\"availableItem\"},item.name),_react.default.createElement(\"button\",{onClick:addToAuction,id:item.id},\"Add to auction\")));}));};var _default=AvailableItems;exports.default=_default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXZhaWxhYmxlSXRlbXMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQXZhaWxhYmxlSXRlbXMvaW5kZXguanM/OTkwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG4vL3doZW4gdXNlciBjbGlja3Mgb24gYnV0dG9uIG5leHQgdG8gYXZhaWxhYmxlIGl0ZW0sXG4vL3RoZSBpdGVtIGNoYW5nZXMgaXRzIHVwRm9yQXVjdGlvbiB2YWx1ZSB0byB0cnVlXG5cblxuY29uc3QgQXZhaWxhYmxlSXRlbXMgPSAoeyBpdGVtcywgZmlsdGVyRm4sIGFkZFRvQXVjdGlvbiB9KSA9PiB7XG5cbiAgcmV0dXJuKFxuPGRpdiBpZCA9J2F2YWlsYWJsZUl0ZW1zJz5cbjxoMz5JdGVtcyBhdmFpbGFibGUgZm9yIGJpZGRpbmc6PC9oMz5cbiAge1xuICAgIGl0ZW1zLmZpbHRlcihmaWx0ZXJGbilcbiAgICAubWFwKChpdGVtLGluZGV4KSA9PiAoXG4gICAgICA8ZGl2IGtleT17aW5kZXh9PlxuICAgICAgPHA+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nYXZhaWxhYmxlSXRlbSc+e2l0ZW0ubmFtZX08L3NwYW4+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17YWRkVG9BdWN0aW9ufSBpZD17aXRlbS5pZH0+QWRkIHRvIGF1Y3Rpb248L2J1dHRvbj5cbiAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbiAgICApKVxuICB9XG48L2Rpdj5cbil9XG5cbmV4cG9ydCBkZWZhdWx0IEF2YWlsYWJsZUl0ZW1zO1xuXG5cblxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUdBO0FBR0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/AvailableItems/index.js\n");

/***/ }),

/***/ "./src/BidDashboard/index.js":
/*!***********************************!*\
  !*** ./src/BidDashboard/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});exports.default=void 0;var _react=_interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));var _socket=_interopRequireDefault(__webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/lib/index.js\"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):{};if(desc.get||desc.set){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}}newObj.default=obj;return newObj;}}function _typeof(obj){if(typeof Symbol===\"function\"&&typeof Symbol.iterator===\"symbol\"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol===\"function\"&&obj.constructor===Symbol&&obj!==Symbol.prototype?\"symbol\":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)===\"object\"||typeof call===\"function\")){return call;}return _assertThisInitialized(self);}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass,superClass){if(typeof superClass!==\"function\"&&superClass!==null){throw new TypeError(\"Super expression must either be null or a function\");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return self;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}// shoutout to Fabian Schultz on stackoverflow for helping with the timer\n// https://stackoverflow.com/questions/40885923/countdown-timer-in-react\nvar BidDashboard=/*#__PURE__*/function(_Component){_inherits(BidDashboard,_Component);function BidDashboard(props){var _this;_classCallCheck(this,BidDashboard);_this=_possibleConstructorReturn(this,_getPrototypeOf(BidDashboard).call(this,props));_defineProperty(_assertThisInitialized(_assertThisInitialized(_this)),\"handleSubmit\",function(event){var body=parseInt(event.target.value);var bids=_this.state.bids;if(event.keyCode===13&&!(body<bids[0].body)){var bid={body:body,from:_this.props.user.username};_this.socket.emit('bid',bid);_this.startTimer();}});_this.state={bids:[],seconds:6,value:0};_this.startTimer=_this.startTimer.bind(_assertThisInitialized(_assertThisInitialized(_this)));_this.bidPlusOne=_this.bidPlusOne.bind(_assertThisInitialized(_assertThisInitialized(_this)));_this.handleChange=_this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));return _this;}_createClass(BidDashboard,[{key:\"componentDidMount\",value:function componentDidMount(){var _this2=this;console.log('yes comp did mount on dashboard');this.socket=_socket.default.connect('/');// tell server component has mounted\nthis.socket.emit('load');// get bid ledger from server on load\nthis.socket.on('load',function(bidLedger){_this2.setState({bids:bidLedger});});// get bid ledger from server after a new bid\nthis.socket.on('bidLedger',function(bidLedger){_this2.setState({bids:bidLedger,value:bidLedger[0].body+1});_this2.startTimer();});// when timer changes on server, update on client\nthis.socket.on('timer',function(seconds){_this2.setState({seconds:seconds});});}},{key:\"componentDidUpdate\",value:function componentDidUpdate(){var bidID=this.props.items.filter(function(item){return item.upForAuction&&!item.completedBid;}).map(function(item,index){return item.id;});bidID=bidID[0];if(this.state.seconds=='Time is up!'){this.props.completedBidFn(bidID).then(this.setState({bids:[],seconds:6,value:0}));}}},{key:\"startTimer\",value:function startTimer(){this.setState({seconds:6});this.socket.emit('timer',6);}},{key:\"bidPlusOne\",value:function bidPlusOne(){var bids=this.state.bids;var bid={body:bids[0].body+1,from:this.props.user.username};this.socket.emit('bid',bid);this.startTimer();}},{key:\"handleChange\",value:function handleChange(event){this.setState({value:event.target.value});}},{key:\"render\",value:function render(){var _this$props=this.props,items=_this$props.items,completedBidFn=_this$props.completedBidFn,filterFn=_this$props.filterFn;var _this$state=this.state,bids=_this$state.bids,seconds=_this$state.seconds;var ledger=bids.map(function(bid,index){return _react.default.createElement(\"li\",{key:index},\" \",bid.from,\" - $\",bid.body);});var bidItem=items.filter(filterFn).map(function(item,index){return _react.default.createElement(\"h3\",{key:index},\" \",item.name,\" \");});return _react.default.createElement(\"div\",{id:\"funChat\"},_react.default.createElement(\"div\",null),_react.default.createElement(\"div\",{id:\"chat-window\"},_react.default.createElement(\"div\",null,\"For Auction:\",bidItem),_react.default.createElement(\"div\",{id:\"countdown\"},\"Time left: \",seconds),_react.default.createElement(\"div\",{className:\"bidInfo\"},\"Bid here:\",_react.default.createElement(\"button\",{onClick:this.bidPlusOne},\"Bid +1\"),_react.default.createElement(\"input\",{type:\"number\",value:this.state.value,onChange:this.handleChange,onKeyUp:bidItem.length>0?this.handleSubmit:undefined}),ledger),_react.default.createElement(\"div\",{id:\"output\"})));}}]);return BidDashboard;}(_react.Component);var _default=BidDashboard;exports.default=_default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQmlkRGFzaGJvYXJkL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL0JpZERhc2hib2FyZC9pbmRleC5qcz81MjNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgaW8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCdcblxuLy8gc2hvdXRvdXQgdG8gRmFiaWFuIFNjaHVsdHogb24gc3RhY2tvdmVyZmxvdyBmb3IgaGVscGluZyB3aXRoIHRoZSB0aW1lclxuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDA4ODU5MjMvY291bnRkb3duLXRpbWVyLWluLXJlYWN0XG5cbmNsYXNzIEJpZERhc2hib2FyZCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYmlkczogW10sXG4gICAgICBzZWNvbmRzOiA2LFxuICAgICAgdmFsdWU6IDAsXG4gICAgfVxuICAgIHRoaXMuc3RhcnRUaW1lciA9IHRoaXMuc3RhcnRUaW1lci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYmlkUGx1c09uZSA9IHRoaXMuYmlkUGx1c09uZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnNvbGUubG9nKCd5ZXMgY29tcCBkaWQgbW91bnQgb24gZGFzaGJvYXJkJylcbiAgICB0aGlzLnNvY2tldCA9IGlvLmNvbm5lY3QoJy8nKTtcblxuICAgIC8vIHRlbGwgc2VydmVyIGNvbXBvbmVudCBoYXMgbW91bnRlZFxuICAgIHRoaXMuc29ja2V0LmVtaXQoJ2xvYWQnKVxuXG4gICAgLy8gZ2V0IGJpZCBsZWRnZXIgZnJvbSBzZXJ2ZXIgb24gbG9hZFxuICAgIHRoaXMuc29ja2V0Lm9uKCdsb2FkJywgYmlkTGVkZ2VyID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBiaWRzOiBiaWRMZWRnZXJcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIC8vIGdldCBiaWQgbGVkZ2VyIGZyb20gc2VydmVyIGFmdGVyIGEgbmV3IGJpZFxuICAgIHRoaXMuc29ja2V0Lm9uKCdiaWRMZWRnZXInLCBiaWRMZWRnZXIgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGJpZHM6IGJpZExlZGdlcixcbiAgICAgICAgdmFsdWU6IGJpZExlZGdlclswXS5ib2R5KzFcbiAgICAgIH0pXG4gICAgICB0aGlzLnN0YXJ0VGltZXIoKTtcbiAgICB9KVxuXG4gICAgLy8gd2hlbiB0aW1lciBjaGFuZ2VzIG9uIHNlcnZlciwgdXBkYXRlIG9uIGNsaWVudFxuICAgIHRoaXMuc29ja2V0Lm9uKCd0aW1lcicsIHNlY29uZHMgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlY29uZHM6IHNlY29uZHMgfSk7XG4gICAgfSlcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICBsZXQgYmlkSUQgPSB0aGlzLnByb3BzLml0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0udXBGb3JBdWN0aW9uICYmICFpdGVtLmNvbXBsZXRlZEJpZCkubWFwKChpdGVtLGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4gaXRlbS5pZFxuICAgIH0pXG4gICAgYmlkSUQgPSBiaWRJRFswXVxuICAgIGlmKHRoaXMuc3RhdGUuc2Vjb25kcyA9PSAnVGltZSBpcyB1cCEnKXtcbiAgICAgIHRoaXMucHJvcHMuY29tcGxldGVkQmlkRm4oYmlkSUQpXG4gICAgICAudGhlbih0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYmlkczogW10sXG4gICAgICAgIHNlY29uZHM6IDYsXG4gICAgICAgIHZhbHVlOiAwLFxuICAgICAgfSkpXG4gICAgfVxuICB9XG5cbiAgc3RhcnRUaW1lcigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2Vjb25kczogNiB9KVxuICAgIHRoaXMuc29ja2V0LmVtaXQoJ3RpbWVyJywgNilcbiAgfVxuXG5oYW5kbGVTdWJtaXQgPSBldmVudCA9PiB7XG5sZXQgYm9keSA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC52YWx1ZSlcbmxldCBiaWRzID0gdGhpcy5zdGF0ZS5iaWRzXG5pZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMgJiYgIShib2R5IDwgYmlkc1swXS5ib2R5KSApe1xuICBsZXQgYmlkID0ge1xuICAgIGJvZHk6IGJvZHksXG4gICAgZnJvbTogdGhpcy5wcm9wcy51c2VyLnVzZXJuYW1lXG4gIH1cbiAgdGhpcy5zb2NrZXQuZW1pdCgnYmlkJywgYmlkKVxuICB0aGlzLnN0YXJ0VGltZXIoKVxuICAgIH1cbiB9XG5cbiBiaWRQbHVzT25lKCl7XG4gIGxldCBiaWRzID0gdGhpcy5zdGF0ZS5iaWRzXG4gIGxldCBiaWQgPSB7XG4gICAgYm9keTogYmlkc1swXS5ib2R5ICsgMSxcbiAgICBmcm9tOiB0aGlzLnByb3BzLnVzZXIudXNlcm5hbWVcbiAgfVxuICB0aGlzLnNvY2tldC5lbWl0KCdiaWQnLCBiaWQpO1xuICB0aGlzLnN0YXJ0VGltZXIoKTtcbiB9XG5cbiAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7dmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xuICB9XG5cbnJlbmRlcigpIHtcblxubGV0IHtcbml0ZW1zLFxuY29tcGxldGVkQmlkRm4sXG5maWx0ZXJGbixcbn0gPSB0aGlzLnByb3BzXG5cbmxldCB7XG4gIGJpZHMsXG4gIHNlY29uZHNcbn0gPSB0aGlzLnN0YXRlXG5cblxuXG4gIGxldCBsZWRnZXIgPSBiaWRzLm1hcCgoYmlkLGluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiA8bGkga2V5PXtpbmRleH0+IHtiaWQuZnJvbX0gLSAke2JpZC5ib2R5fTwvbGk+XG4gIH0pXG5cblxubGV0IGJpZEl0ZW0gPSBpdGVtcy5maWx0ZXIoZmlsdGVyRm4pLm1hcCgoaXRlbSxpbmRleCkgPT4ge1xuICAgIHJldHVybiA8aDMga2V5PXtpbmRleH0+IHtpdGVtLm5hbWV9IDwvaDM+XG4gIH0pXG5cbiAgcmV0dXJuKFxuICA8ZGl2IGlkPVwiZnVuQ2hhdFwiPlxuICA8ZGl2PlxuICA8L2Rpdj5cbiAgIDxkaXYgaWQ9XCJjaGF0LXdpbmRvd1wiPlxuICAgICA8ZGl2PkZvciBBdWN0aW9uOntiaWRJdGVtfTwvZGl2PlxuICAgICAgPGRpdiBpZD1cImNvdW50ZG93blwiPlxuICAgICAgICBUaW1lIGxlZnQ6IHtzZWNvbmRzfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lID0gJ2JpZEluZm8nPlxuICAgICAgQmlkIGhlcmU6XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuYmlkUGx1c09uZX0+QmlkICsxPC9idXR0b24+XG4gICAgICAgIDxpbnB1dCB0eXBlPSdudW1iZXInIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IG9uS2V5VXA9e1xuICAgICAgICAgIGJpZEl0ZW0ubGVuZ3RoID4gMCA/XG4gICAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQgOlxuICAgICAgICAgIHVuZGVmaW5lZFxuICAgICAgICB9IC8+XG4gICAgICAgIHtsZWRnZXJ9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBpZD1cIm91dHB1dFwiPlxuICAgICAgPC9kaXY+XG4gICA8L2Rpdj5cbiAgPC9kaXY+XG4gIClcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQmlkRGFzaGJvYXJkO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUlBO0FBRUE7QUFtQkE7QUFHQTtBQU9BO0FBU0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/BidDashboard/index.js\n");

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

/***/ "./src/PickUser/index.js":
/*!*******************************!*\
  !*** ./src/PickUser/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});exports.default=void 0;var _react=_interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):{};if(desc.get||desc.set){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}}newObj.default=obj;return newObj;}}var PickUser=function PickUser(_ref){var pickUser=_ref.pickUser,allUsers=_ref.allUsers;return _react.default.createElement(\"div\",{id:\"pickUser\"},_react.default.createElement(\"h1\",null,\"Pick a user!\"),_react.default.createElement(\"div\",{id:\"userButtons\"},allUsers.map(function(user,index){return _react.default.createElement(\"div\",{key:index},_react.default.createElement(\"button\",{onClick:pickUser,id:user.id},user.username));})));};var _default=PickUser;exports.default=_default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvUGlja1VzZXIvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvUGlja1VzZXIvaW5kZXguanM/NTU2NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBQaWNrVXNlciA9ICh7cGlja1VzZXIsIGFsbFVzZXJzfSkgPT4ge1xuXG5yZXR1cm4oXG4gIDxkaXYgaWQ9J3BpY2tVc2VyJz5cblxuICA8aDE+UGljayBhIHVzZXIhPC9oMT5cbjxkaXYgaWQ9J3VzZXJCdXR0b25zJz5cbiAgICB7XG5cbiAgICAgIGFsbFVzZXJzLm1hcCgodXNlcixpbmRleCkgPT4gKFxuICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17cGlja1VzZXJ9IGlkPXt1c2VyLmlkfT57dXNlci51c2VybmFtZX08L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgKSlcbiAgfVxuPC9kaXY+XG4gIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBpY2tVc2VyO1xuXG5cblxuIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/PickUser/index.js\n");

/***/ }),

/***/ "./src/ResetButton/index.js":
/*!**********************************!*\
  !*** ./src/ResetButton/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});exports.default=void 0;var _react=_interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):{};if(desc.get||desc.set){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}}newObj.default=obj;return newObj;}}var ResetButton=function ResetButton(_ref){var resetAuction=_ref.resetAuction;return _react.default.createElement(\"div\",{id:\"resetButton\"},_react.default.createElement(\"button\",{onClick:resetAuction},\"Reset Auction\"));};var _default=ResetButton;exports.default=_default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvUmVzZXRCdXR0b24vaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvUmVzZXRCdXR0b24vaW5kZXguanM/ODQxYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBSZXNldEJ1dHRvbiA9ICh7cmVzZXRBdWN0aW9ufSkgPT4ge1xuXG5yZXR1cm4oXG4gIDxkaXYgaWQ9J3Jlc2V0QnV0dG9uJz5cbiAgPGJ1dHRvbiBvbkNsaWNrPXtyZXNldEF1Y3Rpb259PlJlc2V0IEF1Y3Rpb248L2J1dHRvbj5cbiAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVzZXRCdXR0b247XG4iXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ResetButton/index.js\n");

/***/ }),

/***/ "./src/UserAjaxAdapter.js":
/*!********************************!*\
  !*** ./src/UserAjaxAdapter.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});exports.default=void 0;var _axios=_interopRequireDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var _default=function _default(baseURL){var instance=_axios.default.create({baseURL:baseURL,timeout:1000,headers:{'Content-Type':'application/json'}});return{index:function index(){return instance.get('/').then(function(_ref){var users=_ref.data.users;return users;}).catch(function(e){throw e;});},read:function read(id){return instance.get(\"/\".concat(id)).then(function(_ref2){var users=_ref2.data.users;return users;}).catch(function(e){throw e;});},update:function update(id,newBalance){return instance.put(\"/\".concat(id,\"/\").concat(newBalance)).catch(function(e){throw e;});},resetUsers:function resetUsers(){return instance.put(\"/reset\").catch(function(e){throw e;});}};};exports.default=_default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvVXNlckFqYXhBZGFwdGVyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL1VzZXJBamF4QWRhcHRlci5qcz9lZjJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICAnYXhpb3MnO1xuXG5leHBvcnQgZGVmYXVsdCAoYmFzZVVSTCkgPT4ge1xuICBjb25zdCBpbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSh7XG4gICAgYmFzZVVSTCxcbiAgICB0aW1lb3V0OiAxMDAwLFxuICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICB9KTtcblxuICByZXR1cm4ge1xuICAgIGluZGV4KCkge1xuICAgICAgcmV0dXJuIGluc3RhbmNlLmdldCgnLycpXG4gICAgICAgIC50aGVuKCh7IGRhdGE6IHsgdXNlcnMgfSB9KSA9PiB1c2VycylcbiAgICAgICAgLmNhdGNoKChlKSA9PiB7IHRocm93IGU7IH0pO1xuICAgIH0sXG4gICAgcmVhZChpZCkge1xuICAgICAgcmV0dXJuIGluc3RhbmNlLmdldChgLyR7aWR9YClcbiAgICAgICAgLnRoZW4oKHsgZGF0YTogeyB1c2VycyB9IH0pID0+IHVzZXJzKVxuICAgICAgICAuY2F0Y2goKGUpID0+IHsgdGhyb3cgZTsgfSk7XG4gICAgfSxcbiAgICB1cGRhdGUoaWQsIG5ld0JhbGFuY2UpIHtcbiAgICAgIHJldHVybiBpbnN0YW5jZS5wdXQoYC8ke2lkfS8ke25ld0JhbGFuY2V9YClcbiAgICAgICAgLmNhdGNoKChlKSA9PiB7IHRocm93IGU7IH0pO1xuICAgIH0sXG4gICAgcmVzZXRVc2VycygpIHtcbiAgICAgIHJldHVybiBpbnN0YW5jZS5wdXQoYC9yZXNldGApXG4gICAgICAgIC5jYXRjaCgoZSkgPT4geyB0aHJvdyBlOyB9KTtcbiAgICB9LFxuICB9O1xufTtcbiJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/UserAjaxAdapter.js\n");

/***/ }),

/***/ "./src/UserDashboard/index.js":
/*!************************************!*\
  !*** ./src/UserDashboard/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});exports.default=void 0;var _react=_interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));var _socket=_interopRequireDefault(__webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/lib/index.js\"));var _ResetButton=_interopRequireDefault(__webpack_require__(/*! ../ResetButton */ \"./src/ResetButton/index.js\"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):{};if(desc.get||desc.set){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}}newObj.default=obj;return newObj;}}function _typeof(obj){if(typeof Symbol===\"function\"&&typeof Symbol.iterator===\"symbol\"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol===\"function\"&&obj.constructor===Symbol&&obj!==Symbol.prototype?\"symbol\":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)===\"object\"||typeof call===\"function\")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return self;}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass,superClass){if(typeof superClass!==\"function\"&&superClass!==null){throw new TypeError(\"Super expression must either be null or a function\");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}var UserDashboard=/*#__PURE__*/function(_Component){_inherits(UserDashboard,_Component);function UserDashboard(){_classCallCheck(this,UserDashboard);return _possibleConstructorReturn(this,_getPrototypeOf(UserDashboard).apply(this,arguments));}_createClass(UserDashboard,[{key:\"componentWillReceiveProps\",value:function componentWillReceiveProps(){// let availableBalance = this.props.user.balance - this.props.price\n}},{key:\"render\",value:function render(){var items=this.props.items;var filterFn=this.props.filterFn;var user=this.props.user;var availableBalance=this.props.user.balance;var resetAuction=this.props.resetAuction;var latestBid=this.props.latestBid;if(latestBid.from===user.username){availableBalance=availableBalance-latestBid.body;}return _react.default.createElement(\"div\",{id:\"userDashboard\"},_react.default.createElement(\"div\",null,\"Welcome \",user.username),_react.default.createElement(\"div\",null,\"Available balance: $\",availableBalance),_react.default.createElement(_ResetButton.default,{resetAuction:resetAuction}),_react.default.createElement(\"h3\",null,\"Items won\"),_react.default.createElement(\"ul\",null,items.filter(filterFn).map(function(item,index){return _react.default.createElement(\"li\",{key:index},item.name,\" - $\",item.price,\" won by \",item.user.username);})));}}]);return UserDashboard;}(_react.Component);var _default=UserDashboard;exports.default=_default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvVXNlckRhc2hib2FyZC9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9Vc2VyRGFzaGJvYXJkL2luZGV4LmpzPzViM2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50J1xuaW1wb3J0IFJlc2V0QnV0dG9uIGZyb20gJy4uL1Jlc2V0QnV0dG9uJztcblxuXG5cblxuY2xhc3MgVXNlckRhc2hib2FyZCBleHRlbmRzIENvbXBvbmVudHtcblxuXG5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKCkge1xuICAvLyBsZXQgYXZhaWxhYmxlQmFsYW5jZSA9IHRoaXMucHJvcHMudXNlci5iYWxhbmNlIC0gdGhpcy5wcm9wcy5wcmljZVxufVxuXG5cbnJlbmRlcigpIHtcblxuXG5sZXQgaXRlbXMgPSB0aGlzLnByb3BzLml0ZW1zXG5sZXQgZmlsdGVyRm4gPSB0aGlzLnByb3BzLmZpbHRlckZuXG5sZXQgdXNlciA9IHRoaXMucHJvcHMudXNlclxubGV0IGF2YWlsYWJsZUJhbGFuY2UgPSB0aGlzLnByb3BzLnVzZXIuYmFsYW5jZVxubGV0IHJlc2V0QXVjdGlvbiA9IHRoaXMucHJvcHMucmVzZXRBdWN0aW9uXG5sZXQgbGF0ZXN0QmlkID0gdGhpcy5wcm9wcy5sYXRlc3RCaWRcbmlmKGxhdGVzdEJpZC5mcm9tID09PSB1c2VyLnVzZXJuYW1lKXtcbiAgICBhdmFpbGFibGVCYWxhbmNlID0gYXZhaWxhYmxlQmFsYW5jZSAtIGxhdGVzdEJpZC5ib2R5XG4gIH1cblxuXG4gIHJldHVybihcbiAgPGRpdiBpZD0ndXNlckRhc2hib2FyZCc+XG4gIDxkaXY+V2VsY29tZSB7dXNlci51c2VybmFtZX08L2Rpdj5cbiAgPGRpdj5BdmFpbGFibGUgYmFsYW5jZTogJHthdmFpbGFibGVCYWxhbmNlfTwvZGl2PlxuICA8UmVzZXRCdXR0b24gcmVzZXRBdWN0aW9uPXtyZXNldEF1Y3Rpb259IC8+XG4gICAgPGgzPkl0ZW1zIHdvbjwvaDM+XG4gICAgPHVsPlxuICAgICAge1xuICAgICAgaXRlbXMuZmlsdGVyKGZpbHRlckZuKVxuICAgICAgICAubWFwKChpdGVtLGluZGV4KSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxuICAgICAgICAgICAge2l0ZW0ubmFtZX0gLSAke2l0ZW0ucHJpY2V9IHdvbiBieSB7aXRlbS51c2VyLnVzZXJuYW1lfVxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpXG4gICAgfVxuICAgIDwvdWw+XG5cbiAgPC9kaXY+XG4gIClcbn1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlckRhc2hib2FyZDtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFZQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/UserDashboard/index.js\n");

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