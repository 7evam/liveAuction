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
eval("Object.defineProperty(exports,\"__esModule\",{value:true});exports.default=void 0;var _axios=_interopRequireDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var _default=function _default(baseURL){var instance=_axios.default.create({baseURL:baseURL,timeout:1000,headers:{'Content-Type':'application/json'}});return{read:function read(){return instance.get('/').then(function(_ref){var items=_ref.data.items;return items;}).catch(function(e){throw e;});},update:function update(id,price){return instance.put(\"/\".concat(id),{item:price}).catch(function(e){throw e;});},updateAfter:function updateAfter(id,price){return instance.put(\"/\".concat(id,\"/\").concat(price),{item:price}).catch(function(e){throw e;});},resetItems:function resetItems(){return instance.put('/reset').catch(function(e){throw e;});}// addToAuction(id){\n//   return instance.put(`/${id}`, { item.upForAuction: true })\n//   .catch((e) => { throw e; });\n// }\n};};exports.default=_default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQWpheEFkYXB0ZXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQWpheEFkYXB0ZXIuanM/NzM3MiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBheGlvcyBmcm9tICAnYXhpb3MnO1xuXG5leHBvcnQgZGVmYXVsdCAoYmFzZVVSTCkgPT4ge1xuICBjb25zdCBpbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSh7XG4gICAgYmFzZVVSTCxcbiAgICB0aW1lb3V0OiAxMDAwLFxuICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICB9KTtcblxuICByZXR1cm4ge1xuXG4gICAgcmVhZCgpIHtcbiAgICAgIHJldHVybiBpbnN0YW5jZS5nZXQoJy8nKVxuICAgICAgICAudGhlbigoeyBkYXRhOiB7IGl0ZW1zIH0gfSkgPT4gaXRlbXMpXG4gICAgICAgIC5jYXRjaCgoZSkgPT4geyB0aHJvdyBlOyB9KTtcbiAgICB9LFxuICAgIHVwZGF0ZShpZCwgcHJpY2UpIHtcbiAgICAgIHJldHVybiBpbnN0YW5jZS5wdXQoYC8ke2lkfWAsIHsgaXRlbTogcHJpY2UgfSlcbiAgICAgICAgLmNhdGNoKChlKSA9PiB7IHRocm93IGU7IH0pO1xuICAgIH0sXG4gICAgIHVwZGF0ZUFmdGVyKGlkLCBwcmljZSkge1xuICAgICAgcmV0dXJuIGluc3RhbmNlLnB1dChgLyR7aWR9LyR7cHJpY2V9YCwgeyBpdGVtOiBwcmljZSB9KVxuICAgICAgICAuY2F0Y2goKGUpID0+IHsgdGhyb3cgZTsgfSk7XG4gICAgfSxcbiAgICAgIHJlc2V0SXRlbXMoKSB7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZS5wdXQoJy9yZXNldCcpXG4gICAgICAgICAgLmNhdGNoKChlKSA9PiB7dGhyb3cgZTsgfSk7XG4gICAgICB9XG4gICAgLy8gYWRkVG9BdWN0aW9uKGlkKXtcbiAgICAvLyAgIHJldHVybiBpbnN0YW5jZS5wdXQoYC8ke2lkfWAsIHsgaXRlbS51cEZvckF1Y3Rpb246IHRydWUgfSlcbiAgICAvLyAgIC5jYXRjaCgoZSkgPT4geyB0aHJvdyBlOyB9KTtcbiAgICAvLyB9XG5cbiAgfTtcbn07XG5cbiJdLCJtYXBwaW5ncyI6IkFBQ0E7QUE2QkE7QUFDQTtBQUNBO0FBdEJBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/AjaxAdapter.js\n");

/***/ }),

/***/ "./src/App/index.js":
/*!**************************!*\
  !*** ./src/App/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});exports.default=void 0;var _react=_interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));__webpack_require__(/*! ./styles.css */ \"./src/App/styles.css\");var _AjaxAdapter=_interopRequireDefault(__webpack_require__(/*! ../AjaxAdapter */ \"./src/AjaxAdapter.js\"));var _UserAjaxAdapter=_interopRequireDefault(__webpack_require__(/*! ../UserAjaxAdapter */ \"./src/UserAjaxAdapter.js\"));var _BidDashboard=_interopRequireDefault(__webpack_require__(/*! ../BidDashboard */ \"./src/BidDashboard/index.js\"));var _UserDashboard=_interopRequireDefault(__webpack_require__(/*! ../UserDashboard */ \"./src/UserDashboard/index.js\"));var _AvailableItems=_interopRequireDefault(__webpack_require__(/*! ../AvailableItems */ \"./src/AvailableItems/index.js\"));var _Header=_interopRequireDefault(__webpack_require__(/*! ../Header */ \"./src/Header/index.js\"));var _PickUser=_interopRequireDefault(__webpack_require__(/*! ../PickUser */ \"./src/PickUser/index.js\"));var _socket=_interopRequireDefault(__webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/lib/index.js\"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):{};if(desc.get||desc.set){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}}newObj.default=obj;return newObj;}}function _typeof(obj){if(typeof Symbol===\"function\"&&typeof Symbol.iterator===\"symbol\"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol===\"function\"&&obj.constructor===Symbol&&obj!==Symbol.prototype?\"symbol\":typeof obj;};}return _typeof(obj);}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,\"next\",value);}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,\"throw\",err);}_next(undefined);});};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)===\"object\"||typeof call===\"function\")){return call;}return _assertThisInitialized(self);}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass,superClass){if(typeof superClass!==\"function\"&&superClass!==null){throw new TypeError(\"Super expression must either be null or a function\");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return self;}var ItemDataModel=(0,_AjaxAdapter.default)('/api/items');var upForAuctionRoute=(0,_AjaxAdapter.default)('/api/items/upForAuction');var completedBidRoute=(0,_AjaxAdapter.default)('/api/items/completedBid');var UserDataModel=(0,_UserAjaxAdapter.default)('/api/users/');var App=/*#__PURE__*/function(_Component){_inherits(App,_Component);function App(props){var _this;_classCallCheck(this,App);_this=_possibleConstructorReturn(this,_getPrototypeOf(App).call(this,props));_this.state={items:[],price:0,userID:undefined,user:{},allUsers:[]};_this.addToAuction=_this.addToAuction.bind(_assertThisInitialized(_assertThisInitialized(_this)));_this.completedBidFn=_this.completedBidFn.bind(_assertThisInitialized(_assertThisInitialized(_this)));_this.getData=_this.getData.bind(_assertThisInitialized(_assertThisInitialized(_this)));_this.updateUserBalance=_this.updateUserBalance.bind(_assertThisInitialized(_assertThisInitialized(_this)));_this.resetPrice=_this.resetPrice.bind(_assertThisInitialized(_assertThisInitialized(_this)));_this.resetAuction=_this.resetAuction.bind(_assertThisInitialized(_assertThisInitialized(_this)));_this.getAllUsers=_this.getAllUsers.bind(_assertThisInitialized(_assertThisInitialized(_this)));_this.pickUser=_this.pickUser.bind(_assertThisInitialized(_assertThisInitialized(_this)));return _this;}_createClass(App,[{key:\"componentDidMount\",value:function componentDidMount(){var _this2=this;this.getData();this.getAllUsers();//all network events should go in componentDidMount\nthis.socket=_socket.default.connect('/');this.socket.emit('newConnection');this.socket.on('latestBid',function(latestBid){_this2.setState({price:latestBid});});this.socket.on('update',function(){console.log('we got an update');_this2.getData();});}},{key:\"componentDidUpdate\",value:function componentDidUpdate(){}},{key:\"getUserData\",value:function(){var _getUserData=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee(){var userID;return regeneratorRuntime.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:userID=this.state.userID;console.log('getting user data');_context.t0=this;_context.next=5;return UserDataModel.read(userID);case 5:_context.t1=_context.sent;_context.t2={user:_context.t1};_context.t0.setState.call(_context.t0,_context.t2);case 8:case\"end\":return _context.stop();}}},_callee,this);}));function getUserData(){return _getUserData.apply(this,arguments);}return getUserData;}()},{key:\"getData\",value:function(){var _getData=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee2(){return regeneratorRuntime.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:console.log('getting data');_context2.t0=this;_context2.next=4;return ItemDataModel.read();case 4:_context2.t1=_context2.sent;_context2.t2={items:_context2.t1};_context2.t0.setState.call(_context2.t0,_context2.t2);case 7:case\"end\":return _context2.stop();}}},_callee2,this);}));function getData(){return _getData.apply(this,arguments);}return getData;}()},{key:\"getAllUsers\",value:function(){var _getAllUsers=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee3(){return regeneratorRuntime.wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:console.log('getting all the users!');_context3.t0=this;_context3.next=4;return UserDataModel.index();case 4:_context3.t1=_context3.sent;_context3.t2={allUsers:_context3.t1};_context3.t0.setState.call(_context3.t0,_context3.t2);case 7:case\"end\":return _context3.stop();}}},_callee3,this);}));function getAllUsers(){return _getAllUsers.apply(this,arguments);}return getAllUsers;}()},{key:\"addToAuction\",value:function(){var _addToAuction=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee4(e){var valid,id;return regeneratorRuntime.wrap(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:valid=true;this.state.items.forEach(function(el){if(el.upForAuction===true){valid=false;}});// update database\nif(!valid){_context4.next=9;break;}id=e.target.id;_context4.next=6;return upForAuctionRoute.update(id);case 6:// this.socket = io.connect('/');\nthis.socket.emit('update');this.socket.emit('bid',{body:1,from:this.state.user.username});this.socket.emit('load');case 9:case\"end\":return _context4.stop();}}},_callee4,this);}));function addToAuction(_x){return _addToAuction.apply(this,arguments);}return addToAuction;}()},{key:\"completedBidFn\",value:function(){var _completedBidFn=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee5(id){return regeneratorRuntime.wrap(function _callee5$(_context5){while(1){switch(_context5.prev=_context5.next){case 0:console.log(this.state.price);_context5.next=3;return completedBidRoute.updateAfter(id,this.state.price);case 3:case\"end\":return _context5.stop();}}},_callee5,this);}));function completedBidFn(_x2){return _completedBidFn.apply(this,arguments);}return completedBidFn;}()},{key:\"updateUserBalance\",value:function(){var _updateUserBalance=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee6(){var newBalance;return regeneratorRuntime.wrap(function _callee6$(_context6){while(1){switch(_context6.prev=_context6.next){case 0:newBalance=this.state.user.balance-this.state.price;_context6.next=3;return UserDataModel.update(this.state.userID,newBalance).then(this.getData()).then(this.getUserData());case 3:case\"end\":return _context6.stop();}}},_callee6,this);}));function updateUserBalance(){return _updateUserBalance.apply(this,arguments);}return updateUserBalance;}()},{key:\"resetPrice\",value:function(){var _resetPrice=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee7(){return regeneratorRuntime.wrap(function _callee7$(_context7){while(1){switch(_context7.prev=_context7.next){case 0:_context7.next=2;return this.setState({price:0});case 2:case\"end\":return _context7.stop();}}},_callee7,this);}));function resetPrice(){return _resetPrice.apply(this,arguments);}return resetPrice;}()},{key:\"resetAuction\",value:function(){var _resetAuction=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee8(){return regeneratorRuntime.wrap(function _callee8$(_context8){while(1){switch(_context8.prev=_context8.next){case 0:console.log('lets reset');_context8.next=3;return ItemDataModel.resetItems();case 3:this.socket.emit('reset');case 4:case\"end\":return _context8.stop();}}},_callee8,this);}));function resetAuction(){return _resetAuction.apply(this,arguments);}return resetAuction;}()},{key:\"pickUser\",value:function(){var _pickUser=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee9(e){var id;return regeneratorRuntime.wrap(function _callee9$(_context9){while(1){switch(_context9.prev=_context9.next){case 0:id=parseInt(e.target.id,10);_context9.next=3;return this.setState({userID:id});case 3:this.getUserData();case 4:case\"end\":return _context9.stop();}}},_callee9,this);}));function pickUser(_x3){return _pickUser.apply(this,arguments);}return pickUser;}()},{key:\"render\",value:function render(){var _this$state=this.state,items=_this$state.items,price=_this$state.price,user=_this$state.user,allUsers=_this$state.allUsers,userID=_this$state.userID;//console.log(items)\n// const { items } = this.props;\nreturn _react.default.createElement(\"div\",null,_react.default.createElement(_Header.default,null),userID?_react.default.createElement(\"div\",null,_react.default.createElement(_BidDashboard.default,{items:items,completedBidFn:this.completedBidFn,filterFn:function filterFn(item){return item.upForAuction&&!item.completedBid;},price:price,updateUserBalance:this.updateUserBalance,resetPrice:this.resetPrice,user:user}),_react.default.createElement(_UserDashboard.default,{items:items,filterFn:function filterFn(item){return!item.upForAuction&&item.completedBid;},price:price,user:user,resetAuction:this.resetAuction}),_react.default.createElement(_AvailableItems.default,{items:items,addToAuction:this.addToAuction,filterFn:function filterFn(item){return!item.upForAuction&&!item.completedBid;}})):_react.default.createElement(_PickUser.default,{pickUser:this.pickUser,allUsers:allUsers}));}}]);return App;}(_react.Component);var _default=App;exports.default=_default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXBwL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC9pbmRleC5qcz9iM2E3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuXG4vLyBpbXBvcnQgXCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zb2NrZXQuaW8vMi4xLjEvc29ja2V0LmlvLmpzXCJcbi8vIGltcG9ydCAnLi9zb2NrZXRpb1NjcmlwdC5qcydcbi8vIGltcG9ydCAnLi9zY3JpcHQuanMnO1xuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IEFqYXhBZGFwdGVyIGZyb20gJy4uL0FqYXhBZGFwdGVyJztcbmltcG9ydCBVc2VyQWpheEFkYXB0ZXIgZnJvbSAnLi4vVXNlckFqYXhBZGFwdGVyJztcblxuaW1wb3J0IEJpZERhc2hib2FyZCBmcm9tICcuLi9CaWREYXNoYm9hcmQnO1xuaW1wb3J0IFVzZXJEYXNoYm9hcmQgZnJvbSAnLi4vVXNlckRhc2hib2FyZCc7XG5pbXBvcnQgQXZhaWxhYmxlSXRlbXMgZnJvbSAnLi4vQXZhaWxhYmxlSXRlbXMnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9IZWFkZXInO1xuaW1wb3J0IFBpY2tVc2VyIGZyb20gJy4uL1BpY2tVc2VyJztcbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50J1xuXG5jb25zdCBJdGVtRGF0YU1vZGVsID0gQWpheEFkYXB0ZXIoJy9hcGkvaXRlbXMnKTtcbmNvbnN0IHVwRm9yQXVjdGlvblJvdXRlID0gQWpheEFkYXB0ZXIoJy9hcGkvaXRlbXMvdXBGb3JBdWN0aW9uJyk7XG5jb25zdCBjb21wbGV0ZWRCaWRSb3V0ZSA9IEFqYXhBZGFwdGVyKCcvYXBpL2l0ZW1zL2NvbXBsZXRlZEJpZCcpO1xuXG5jb25zdCBVc2VyRGF0YU1vZGVsID0gVXNlckFqYXhBZGFwdGVyKCcvYXBpL3VzZXJzLycpO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpdGVtczogW10sXG4gICAgICBwcmljZTogMCxcbiAgICAgIHVzZXJJRDogdW5kZWZpbmVkLFxuICAgICAgdXNlcjoge30sXG4gICAgICBhbGxVc2VyczogW10sXG4gICAgfVxuICAgIHRoaXMuYWRkVG9BdWN0aW9uID0gdGhpcy5hZGRUb0F1Y3Rpb24uYmluZCh0aGlzKTtcbiAgICB0aGlzLmNvbXBsZXRlZEJpZEZuID0gdGhpcy5jb21wbGV0ZWRCaWRGbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2V0RGF0YSA9IHRoaXMuZ2V0RGF0YS5iaW5kKHRoaXMpO1xuICAgIHRoaXMudXBkYXRlVXNlckJhbGFuY2UgPSB0aGlzLnVwZGF0ZVVzZXJCYWxhbmNlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZXNldFByaWNlID0gdGhpcy5yZXNldFByaWNlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZXNldEF1Y3Rpb24gPSB0aGlzLnJlc2V0QXVjdGlvbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2V0QWxsVXNlcnMgPSB0aGlzLmdldEFsbFVzZXJzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5waWNrVXNlciA9IHRoaXMucGlja1VzZXIuYmluZCh0aGlzKTtcbiAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB0aGlzLmdldERhdGEoKTtcbiAgICAgIHRoaXMuZ2V0QWxsVXNlcnMoKTtcblxuICAgICAgLy9hbGwgbmV0d29yayBldmVudHMgc2hvdWxkIGdvIGluIGNvbXBvbmVudERpZE1vdW50XG4gICAgICB0aGlzLnNvY2tldCA9IGlvLmNvbm5lY3QoJy8nKTtcblxuICAgICAgdGhpcy5zb2NrZXQuZW1pdCgnbmV3Q29ubmVjdGlvbicpXG5cbiAgICAgIHRoaXMuc29ja2V0Lm9uKCdsYXRlc3RCaWQnLCBsYXRlc3RCaWQgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJpY2U6IGxhdGVzdEJpZCB9KVxuICAgICAgfSlcblxuICAgICAgdGhpcy5zb2NrZXQub24oJ3VwZGF0ZScsICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3dlIGdvdCBhbiB1cGRhdGUnKVxuICAgICAgICB0aGlzLmdldERhdGEoKTtcbiAgICAgIH0pXG4gICAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgfVxuXG4gICBhc3luYyBnZXRVc2VyRGF0YSgpIHtcbiAgICBsZXQgdXNlcklEID0gdGhpcy5zdGF0ZS51c2VySURcbiAgICBjb25zb2xlLmxvZygnZ2V0dGluZyB1c2VyIGRhdGEnKVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdXNlcjogYXdhaXQgVXNlckRhdGFNb2RlbC5yZWFkKHVzZXJJRCksXG4gICAgfSk7XG4gIH1cblxuXG4gYXN5bmMgZ2V0RGF0YSgpIHtcbiAgICBjb25zb2xlLmxvZygnZ2V0dGluZyBkYXRhJylcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGl0ZW1zOiBhd2FpdCBJdGVtRGF0YU1vZGVsLnJlYWQoKSxcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIGdldEFsbFVzZXJzKCkge1xuICAgIGNvbnNvbGUubG9nKCdnZXR0aW5nIGFsbCB0aGUgdXNlcnMhJylcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGFsbFVzZXJzOiBhd2FpdCBVc2VyRGF0YU1vZGVsLmluZGV4KCksXG4gICAgfSk7XG4gIH1cblxuICAgIGFzeW5jIGFkZFRvQXVjdGlvbihlKXtcbiAgICBsZXQgdmFsaWQgPSB0cnVlXG4gICAgdGhpcy5zdGF0ZS5pdGVtcy5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG4gICAgICBpZihlbC51cEZvckF1Y3Rpb24gPT09IHRydWUpe1xuICAgICAgICB2YWxpZCA9IGZhbHNlXG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gdXBkYXRlIGRhdGFiYXNlXG4gICAgaWYodmFsaWQpe1xuICAgICAgbGV0IGlkID0gZS50YXJnZXQuaWRcbiAgICAgIGF3YWl0IHVwRm9yQXVjdGlvblJvdXRlLnVwZGF0ZShpZClcbiAgICAgIC8vIHRoaXMuc29ja2V0ID0gaW8uY29ubmVjdCgnLycpO1xuICAgICAgdGhpcy5zb2NrZXQuZW1pdCgndXBkYXRlJylcbiAgICAgIHRoaXMuc29ja2V0LmVtaXQoJ2JpZCcsIHtib2R5OjEsZnJvbTp0aGlzLnN0YXRlLnVzZXIudXNlcm5hbWV9KVxuICAgICAgdGhpcy5zb2NrZXQuZW1pdCgnbG9hZCcpXG4gICAgfVxuICAgIH1cblxuICAgYXN5bmMgY29tcGxldGVkQmlkRm4oaWQpe1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUucHJpY2UpXG4gICAgYXdhaXQgY29tcGxldGVkQmlkUm91dGUudXBkYXRlQWZ0ZXIoaWQsdGhpcy5zdGF0ZS5wcmljZSlcbiAgfVxuXG4gIGFzeW5jIHVwZGF0ZVVzZXJCYWxhbmNlKCl7XG4gICAgbGV0IG5ld0JhbGFuY2UgPSB0aGlzLnN0YXRlLnVzZXIuYmFsYW5jZSAtIHRoaXMuc3RhdGUucHJpY2VcbiAgICBhd2FpdCBVc2VyRGF0YU1vZGVsLnVwZGF0ZSh0aGlzLnN0YXRlLnVzZXJJRCxuZXdCYWxhbmNlKVxuICAgIC50aGVuKHRoaXMuZ2V0RGF0YSgpKVxuICAgIC50aGVuKHRoaXMuZ2V0VXNlckRhdGEoKSlcbiAgfVxuXG4gIGFzeW5jIHJlc2V0UHJpY2UoKXtcbiAgICBhd2FpdCB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHByaWNlOiAwXG4gICAgfSlcbiAgfVxuXG4gIGFzeW5jIHJlc2V0QXVjdGlvbigpe1xuICAgIGNvbnNvbGUubG9nKCdsZXRzIHJlc2V0JylcbiAgICBhd2FpdCBJdGVtRGF0YU1vZGVsLnJlc2V0SXRlbXMoKVxuICAgIHRoaXMuc29ja2V0LmVtaXQoJ3Jlc2V0JylcbiAgfVxuXG4gIGFzeW5jIHBpY2tVc2VyKGUpe1xuICAgIGxldCBpZCA9IHBhcnNlSW50KGUudGFyZ2V0LmlkLCAxMClcbiAgICBhd2FpdCB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHVzZXJJRDogaWRcbiAgICB9KVxuICAgIHRoaXMuZ2V0VXNlckRhdGEoKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IGl0ZW1zLCBwcmljZSwgdXNlciwgYWxsVXNlcnMsIHVzZXJJRCB9ID0gdGhpcy5zdGF0ZVxuXG5cbiAgICAvL2NvbnNvbGUubG9nKGl0ZW1zKVxuICAgIC8vIGNvbnN0IHsgaXRlbXMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICB7dXNlcklEID8gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICA8QmlkRGFzaGJvYXJkIGl0ZW1zID0ge2l0ZW1zfSBjb21wbGV0ZWRCaWRGbiA9IHt0aGlzLmNvbXBsZXRlZEJpZEZufSBmaWx0ZXJGbj17aXRlbSA9PiBpdGVtLnVwRm9yQXVjdGlvbiAmJiAhaXRlbS5jb21wbGV0ZWRCaWR9IHByaWNlPXtwcmljZX0gdXBkYXRlVXNlckJhbGFuY2U9e3RoaXMudXBkYXRlVXNlckJhbGFuY2V9IHJlc2V0UHJpY2U9e3RoaXMucmVzZXRQcmljZX0gdXNlcj17dXNlcn0vPlxuICAgICAgICA8VXNlckRhc2hib2FyZCBpdGVtcyA9IHtpdGVtc30gZmlsdGVyRm49e2l0ZW0gPT4gIWl0ZW0udXBGb3JBdWN0aW9uICYmIGl0ZW0uY29tcGxldGVkQmlkfSBwcmljZT17cHJpY2V9IHVzZXI9e3VzZXJ9IHJlc2V0QXVjdGlvbiA9IHt0aGlzLnJlc2V0QXVjdGlvbn0vPlxuICAgICAgICA8QXZhaWxhYmxlSXRlbXMgaXRlbXMgPSB7aXRlbXN9IGFkZFRvQXVjdGlvbj17dGhpcy5hZGRUb0F1Y3Rpb259IGZpbHRlckZuPXtpdGVtID0+ICFpdGVtLnVwRm9yQXVjdGlvbiAmJiAhaXRlbS5jb21wbGV0ZWRCaWR9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgPFBpY2tVc2VyIHBpY2tVc2VyPXt0aGlzLnBpY2tVc2VyfSBhbGxVc2Vycz17YWxsVXNlcnN9Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQStDQTtBQWdEQTtBQUlBO0FBMkNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/App/index.js\n");

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
eval("Object.defineProperty(exports,\"__esModule\",{value:true});exports.default=void 0;var _react=_interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));var _socket=_interopRequireDefault(__webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/lib/index.js\"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):{};if(desc.get||desc.set){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}}newObj.default=obj;return newObj;}}function _typeof(obj){if(typeof Symbol===\"function\"&&typeof Symbol.iterator===\"symbol\"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol===\"function\"&&obj.constructor===Symbol&&obj!==Symbol.prototype?\"symbol\":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)===\"object\"||typeof call===\"function\")){return call;}return _assertThisInitialized(self);}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass,superClass){if(typeof superClass!==\"function\"&&superClass!==null){throw new TypeError(\"Super expression must either be null or a function\");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return self;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}// shoutout to Fabian Schultz on stackoverflow for helping with the timer\n// https://stackoverflow.com/questions/40885923/countdown-timer-in-react\nvar BidDashboard=/*#__PURE__*/function(_Component){_inherits(BidDashboard,_Component);function BidDashboard(props){var _this;_classCallCheck(this,BidDashboard);_this=_possibleConstructorReturn(this,_getPrototypeOf(BidDashboard).call(this,props));_defineProperty(_assertThisInitialized(_assertThisInitialized(_this)),\"handleSubmit\",function(event){var body=parseInt(event.target.value);var bids=_this.state.bids;if(event.keyCode===13&&!(body<bids[0].body)){var bid={body:body,from:_this.props.user.username};_this.socket.emit('bid',bid);_this.startTimer();}});_this.state={bids:[],seconds:6,value:0};_this.startTimer=_this.startTimer.bind(_assertThisInitialized(_assertThisInitialized(_this)));_this.bidPlusOne=_this.bidPlusOne.bind(_assertThisInitialized(_assertThisInitialized(_this)));_this.handleChange=_this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));return _this;}_createClass(BidDashboard,[{key:\"componentDidMount\",value:function componentDidMount(){var _this2=this;console.log('yes comp did mount on dashboard');this.socket=_socket.default.connect('/');// tell server component has mounted\nthis.socket.emit('load');// get bid ledger from server on load\nthis.socket.on('load',function(bidLedger){_this2.setState({bids:bidLedger});});// get bid ledger from server after a new bid\nthis.socket.on('bidLedger',function(bidLedger){_this2.setState({bids:bidLedger,value:bidLedger[0].body+1});_this2.startTimer();});// when timer changes on server, update on client\nthis.socket.on('timer',function(seconds){_this2.setState({seconds:seconds});});}},{key:\"componentDidUpdate\",value:function componentDidUpdate(){var bidID=this.props.items.filter(function(item){return item.upForAuction&&!item.completedBid;}).map(function(item,index){return item.id;});bidID=bidID[0];if(this.state.seconds=='Time is up!'){this.props.completedBidFn(bidID).then(this.props.updateUserBalance()).then(this.setState({bids:[],seconds:6,value:0})).then(this.props.resetPrice());}}},{key:\"startTimer\",value:function startTimer(){this.setState({seconds:6});this.socket.emit('timer',6);}},{key:\"bidPlusOne\",value:function bidPlusOne(){var bids=this.state.bids;var bid={body:bids[0].body+1,from:this.props.user.username};this.socket.emit('bid',bid);this.startTimer();}},{key:\"handleChange\",value:function handleChange(event){this.setState({value:event.target.value});}},{key:\"render\",value:function render(){var _this$props=this.props,items=_this$props.items,completedBidFn=_this$props.completedBidFn,filterFn=_this$props.filterFn,updateUserBalance=_this$props.updateUserBalance;var _this$state=this.state,bids=_this$state.bids,seconds=_this$state.seconds;var ledger=bids.map(function(bid,index){return _react.default.createElement(\"li\",{key:index},\" \",bid.from,\" - $\",bid.body);});var bidItem=items.filter(filterFn).map(function(item,index){return _react.default.createElement(\"h3\",{key:index},\" \",item.name,\" \");});return _react.default.createElement(\"div\",{id:\"funChat\"},_react.default.createElement(\"div\",null),_react.default.createElement(\"div\",{id:\"chat-window\"},_react.default.createElement(\"div\",null,\"For Auction:\",bidItem),_react.default.createElement(\"div\",{id:\"countdown\"},\"Time left: \",seconds),_react.default.createElement(\"div\",{className:\"bidInfo\"},\"Bid here:\",_react.default.createElement(\"button\",{onClick:this.bidPlusOne},\"Bid +1\"),_react.default.createElement(\"input\",{type:\"number\",value:this.state.value,onChange:this.handleChange,onKeyUp:bidItem.length>0?this.handleSubmit:undefined}),ledger),_react.default.createElement(\"div\",{id:\"output\"})));}}]);return BidDashboard;}(_react.Component);var _default=BidDashboard;exports.default=_default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQmlkRGFzaGJvYXJkL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL0JpZERhc2hib2FyZC9pbmRleC5qcz81MjNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgaW8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCdcblxuLy8gc2hvdXRvdXQgdG8gRmFiaWFuIFNjaHVsdHogb24gc3RhY2tvdmVyZmxvdyBmb3IgaGVscGluZyB3aXRoIHRoZSB0aW1lclxuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDA4ODU5MjMvY291bnRkb3duLXRpbWVyLWluLXJlYWN0XG5cbmNsYXNzIEJpZERhc2hib2FyZCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYmlkczogW10sXG4gICAgICBzZWNvbmRzOiA2LFxuICAgICAgdmFsdWU6IDAsXG4gICAgfVxuICAgIHRoaXMuc3RhcnRUaW1lciA9IHRoaXMuc3RhcnRUaW1lci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYmlkUGx1c09uZSA9IHRoaXMuYmlkUGx1c09uZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnNvbGUubG9nKCd5ZXMgY29tcCBkaWQgbW91bnQgb24gZGFzaGJvYXJkJylcbiAgICB0aGlzLnNvY2tldCA9IGlvLmNvbm5lY3QoJy8nKTtcblxuICAgIC8vIHRlbGwgc2VydmVyIGNvbXBvbmVudCBoYXMgbW91bnRlZFxuICAgIHRoaXMuc29ja2V0LmVtaXQoJ2xvYWQnKVxuXG4gICAgLy8gZ2V0IGJpZCBsZWRnZXIgZnJvbSBzZXJ2ZXIgb24gbG9hZFxuICAgIHRoaXMuc29ja2V0Lm9uKCdsb2FkJywgYmlkTGVkZ2VyID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBiaWRzOiBiaWRMZWRnZXJcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIC8vIGdldCBiaWQgbGVkZ2VyIGZyb20gc2VydmVyIGFmdGVyIGEgbmV3IGJpZFxuICAgIHRoaXMuc29ja2V0Lm9uKCdiaWRMZWRnZXInLCBiaWRMZWRnZXIgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGJpZHM6IGJpZExlZGdlcixcbiAgICAgICAgdmFsdWU6IGJpZExlZGdlclswXS5ib2R5KzFcbiAgICAgIH0pXG4gICAgICB0aGlzLnN0YXJ0VGltZXIoKTtcbiAgICB9KVxuXG4gICAgLy8gd2hlbiB0aW1lciBjaGFuZ2VzIG9uIHNlcnZlciwgdXBkYXRlIG9uIGNsaWVudFxuICAgIHRoaXMuc29ja2V0Lm9uKCd0aW1lcicsIHNlY29uZHMgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlY29uZHM6IHNlY29uZHMgfSk7XG4gICAgfSlcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICBsZXQgYmlkSUQgPSB0aGlzLnByb3BzLml0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0udXBGb3JBdWN0aW9uICYmICFpdGVtLmNvbXBsZXRlZEJpZCkubWFwKChpdGVtLGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4gaXRlbS5pZFxuICAgIH0pXG4gICAgYmlkSUQgPSBiaWRJRFswXVxuICAgIGlmKHRoaXMuc3RhdGUuc2Vjb25kcyA9PSAnVGltZSBpcyB1cCEnKXtcbiAgICAgIHRoaXMucHJvcHMuY29tcGxldGVkQmlkRm4oYmlkSUQpXG4gICAgICAudGhlbih0aGlzLnByb3BzLnVwZGF0ZVVzZXJCYWxhbmNlKCkpXG4gICAgICAudGhlbih0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYmlkczogW10sXG4gICAgICAgIHNlY29uZHM6IDYsXG4gICAgICAgIHZhbHVlOiAwLFxuICAgICAgfSkpXG4gICAgICAudGhlbih0aGlzLnByb3BzLnJlc2V0UHJpY2UoKSlcbiAgICB9XG4gIH1cblxuICBzdGFydFRpbWVyKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWNvbmRzOiA2IH0pXG4gICAgdGhpcy5zb2NrZXQuZW1pdCgndGltZXInLCA2KVxuICB9XG5cbmhhbmRsZVN1Ym1pdCA9IGV2ZW50ID0+IHtcbmxldCBib2R5ID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LnZhbHVlKVxubGV0IGJpZHMgPSB0aGlzLnN0YXRlLmJpZHNcbmlmIChldmVudC5rZXlDb2RlID09PSAxMyAmJiAhKGJvZHkgPCBiaWRzWzBdLmJvZHkpICl7XG4gIGxldCBiaWQgPSB7XG4gICAgYm9keTogYm9keSxcbiAgICBmcm9tOiB0aGlzLnByb3BzLnVzZXIudXNlcm5hbWVcbiAgfVxuICB0aGlzLnNvY2tldC5lbWl0KCdiaWQnLCBiaWQpXG4gIHRoaXMuc3RhcnRUaW1lcigpXG4gICAgfVxuIH1cblxuIGJpZFBsdXNPbmUoKXtcbiAgbGV0IGJpZHMgPSB0aGlzLnN0YXRlLmJpZHNcbiAgbGV0IGJpZCA9IHtcbiAgICBib2R5OiBiaWRzWzBdLmJvZHkgKyAxLFxuICAgIGZyb206IHRoaXMucHJvcHMudXNlci51c2VybmFtZVxuICB9XG4gIHRoaXMuc29ja2V0LmVtaXQoJ2JpZCcsIGJpZCk7XG4gIHRoaXMuc3RhcnRUaW1lcigpO1xuIH1cblxuICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XG4gIH1cblxucmVuZGVyKCkge1xuXG5sZXQge1xuaXRlbXMsXG5jb21wbGV0ZWRCaWRGbixcbmZpbHRlckZuLFxudXBkYXRlVXNlckJhbGFuY2Vcbn0gPSB0aGlzLnByb3BzXG5cbmxldCB7XG4gIGJpZHMsXG4gIHNlY29uZHNcbn0gPSB0aGlzLnN0YXRlXG5cblxuXG4gIGxldCBsZWRnZXIgPSBiaWRzLm1hcCgoYmlkLGluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiA8bGkga2V5PXtpbmRleH0+IHtiaWQuZnJvbX0gLSAke2JpZC5ib2R5fTwvbGk+XG4gIH0pXG5cblxubGV0IGJpZEl0ZW0gPSBpdGVtcy5maWx0ZXIoZmlsdGVyRm4pLm1hcCgoaXRlbSxpbmRleCkgPT4ge1xuICAgIHJldHVybiA8aDMga2V5PXtpbmRleH0+IHtpdGVtLm5hbWV9IDwvaDM+XG4gIH0pXG5cbiAgcmV0dXJuKFxuICA8ZGl2IGlkPVwiZnVuQ2hhdFwiPlxuICA8ZGl2PlxuICA8L2Rpdj5cbiAgIDxkaXYgaWQ9XCJjaGF0LXdpbmRvd1wiPlxuICAgICA8ZGl2PkZvciBBdWN0aW9uOntiaWRJdGVtfTwvZGl2PlxuICAgICAgPGRpdiBpZD1cImNvdW50ZG93blwiPlxuICAgICAgICBUaW1lIGxlZnQ6IHtzZWNvbmRzfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lID0gJ2JpZEluZm8nPlxuICAgICAgQmlkIGhlcmU6XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuYmlkUGx1c09uZX0+QmlkICsxPC9idXR0b24+XG4gICAgICAgIDxpbnB1dCB0eXBlPSdudW1iZXInIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IG9uS2V5VXA9e1xuICAgICAgICAgIGJpZEl0ZW0ubGVuZ3RoID4gMCA/XG4gICAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQgOlxuICAgICAgICAgIHVuZGVmaW5lZFxuICAgICAgICB9IC8+XG4gICAgICAgIHtsZWRnZXJ9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBpZD1cIm91dHB1dFwiPlxuICAgICAgPC9kaXY+XG4gICA8L2Rpdj5cbiAgPC9kaXY+XG4gIClcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQmlkRGFzaGJvYXJkO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUlBO0FBRUE7QUFtQkE7QUFHQTtBQU9BO0FBU0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/BidDashboard/index.js\n");

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
eval("Object.defineProperty(exports,\"__esModule\",{value:true});exports.default=void 0;var _axios=_interopRequireDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var _default=function _default(baseURL){var instance=_axios.default.create({baseURL:baseURL,timeout:1000,headers:{'Content-Type':'application/json'}});return{index:function index(){return instance.get('/').then(function(_ref){var users=_ref.data.users;return users;}).catch(function(e){throw e;});},read:function read(id){return instance.get(\"/\".concat(id)).then(function(_ref2){var users=_ref2.data.users;return users;}).catch(function(e){throw e;});},update:function update(id,newBalance){return instance.put(\"/\".concat(id,\"/\").concat(newBalance)).catch(function(e){throw e;});}};};exports.default=_default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvVXNlckFqYXhBZGFwdGVyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL1VzZXJBamF4QWRhcHRlci5qcz9lZjJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICAnYXhpb3MnO1xuXG5leHBvcnQgZGVmYXVsdCAoYmFzZVVSTCkgPT4ge1xuICBjb25zdCBpbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSh7XG4gICAgYmFzZVVSTCxcbiAgICB0aW1lb3V0OiAxMDAwLFxuICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICB9KTtcblxuICByZXR1cm4ge1xuICAgIGluZGV4KCkge1xuICAgICAgcmV0dXJuIGluc3RhbmNlLmdldCgnLycpXG4gICAgICAgIC50aGVuKCh7IGRhdGE6IHsgdXNlcnMgfSB9KSA9PiB1c2VycylcbiAgICAgICAgLmNhdGNoKChlKSA9PiB7IHRocm93IGU7IH0pO1xuICAgIH0sXG4gICAgcmVhZChpZCkge1xuICAgICAgcmV0dXJuIGluc3RhbmNlLmdldChgLyR7aWR9YClcbiAgICAgICAgLnRoZW4oKHsgZGF0YTogeyB1c2VycyB9IH0pID0+IHVzZXJzKVxuICAgICAgICAuY2F0Y2goKGUpID0+IHsgdGhyb3cgZTsgfSk7XG4gICAgfSxcbiAgICB1cGRhdGUoaWQsIG5ld0JhbGFuY2UpIHtcbiAgICAgIHJldHVybiBpbnN0YW5jZS5wdXQoYC8ke2lkfS8ke25ld0JhbGFuY2V9YClcbiAgICAgICAgLmNhdGNoKChlKSA9PiB7IHRocm93IGU7IH0pO1xuICAgIH0sXG4gIH07XG59O1xuIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/UserAjaxAdapter.js\n");

/***/ }),

/***/ "./src/UserDashboard/index.js":
/*!************************************!*\
  !*** ./src/UserDashboard/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});exports.default=void 0;var _react=_interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));var _socket=_interopRequireDefault(__webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/lib/index.js\"));var _ResetButton=_interopRequireDefault(__webpack_require__(/*! ../ResetButton */ \"./src/ResetButton/index.js\"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):{};if(desc.get||desc.set){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}}newObj.default=obj;return newObj;}}function _typeof(obj){if(typeof Symbol===\"function\"&&typeof Symbol.iterator===\"symbol\"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol===\"function\"&&obj.constructor===Symbol&&obj!==Symbol.prototype?\"symbol\":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)===\"object\"||typeof call===\"function\")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return self;}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass,superClass){if(typeof superClass!==\"function\"&&superClass!==null){throw new TypeError(\"Super expression must either be null or a function\");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}var UserDashboard=/*#__PURE__*/function(_Component){_inherits(UserDashboard,_Component);function UserDashboard(){_classCallCheck(this,UserDashboard);return _possibleConstructorReturn(this,_getPrototypeOf(UserDashboard).apply(this,arguments));}_createClass(UserDashboard,[{key:\"componentWillReceiveProps\",value:function componentWillReceiveProps(){// let availableBalance = this.props.user.balance - this.props.price\n}},{key:\"render\",value:function render(){var items=this.props.items;var filterFn=this.props.filterFn;var user=this.props.user;var availableBalance=this.props.user.balance-this.props.price;var resetAuction=this.props.resetAuction;return _react.default.createElement(\"div\",{id:\"userDashboard\"},_react.default.createElement(\"div\",null,\"Welcome \",user.username),_react.default.createElement(\"div\",null,\"Available balance: $\",availableBalance),_react.default.createElement(_ResetButton.default,{resetAuction:resetAuction}),_react.default.createElement(\"h3\",null,\"Items won\"),_react.default.createElement(\"ul\",null,items.filter(filterFn).map(function(item,index){return _react.default.createElement(\"li\",{key:index},item.name,\" - $\",item.price);})));}}]);return UserDashboard;}(_react.Component);var _default=UserDashboard;exports.default=_default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvVXNlckRhc2hib2FyZC9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9Vc2VyRGFzaGJvYXJkL2luZGV4LmpzPzViM2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50J1xuaW1wb3J0IFJlc2V0QnV0dG9uIGZyb20gJy4uL1Jlc2V0QnV0dG9uJztcblxuXG5cblxuY2xhc3MgVXNlckRhc2hib2FyZCBleHRlbmRzIENvbXBvbmVudHtcblxuXG5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKCkge1xuICAvLyBsZXQgYXZhaWxhYmxlQmFsYW5jZSA9IHRoaXMucHJvcHMudXNlci5iYWxhbmNlIC0gdGhpcy5wcm9wcy5wcmljZVxufVxuXG5cbnJlbmRlcigpIHtcblxuXG5sZXQgaXRlbXMgPSB0aGlzLnByb3BzLml0ZW1zXG5sZXQgZmlsdGVyRm4gPSB0aGlzLnByb3BzLmZpbHRlckZuXG5sZXQgdXNlciA9IHRoaXMucHJvcHMudXNlclxubGV0IGF2YWlsYWJsZUJhbGFuY2UgPSB0aGlzLnByb3BzLnVzZXIuYmFsYW5jZSAtIHRoaXMucHJvcHMucHJpY2VcbmxldCByZXNldEF1Y3Rpb24gPSB0aGlzLnByb3BzLnJlc2V0QXVjdGlvblxuXG4gIHJldHVybihcbiAgPGRpdiBpZD0ndXNlckRhc2hib2FyZCc+XG4gIDxkaXY+V2VsY29tZSB7dXNlci51c2VybmFtZX08L2Rpdj5cbiAgPGRpdj5BdmFpbGFibGUgYmFsYW5jZTogJHthdmFpbGFibGVCYWxhbmNlfTwvZGl2PlxuICA8UmVzZXRCdXR0b24gcmVzZXRBdWN0aW9uID0ge3Jlc2V0QXVjdGlvbn0gLz5cbiAgICA8aDM+SXRlbXMgd29uPC9oMz5cbiAgICA8dWw+XG4gICAgICB7XG4gICAgICBpdGVtcy5maWx0ZXIoZmlsdGVyRm4pXG4gICAgICAgIC5tYXAoKGl0ZW0saW5kZXgpID0+IChcbiAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgICB7aXRlbS5uYW1lfSAtICR7aXRlbS5wcmljZX1cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKVxuICAgIH1cbiAgICA8L3VsPlxuXG4gIDwvZGl2PlxuICApXG59XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJEYXNoYm9hcmQ7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBWUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/UserDashboard/index.js\n");

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