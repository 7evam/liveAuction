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
eval("Object.defineProperty(exports,\"__esModule\",{value:true});exports.default=void 0;var _react=_interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));__webpack_require__(/*! ./styles.css */ \"./src/App/styles.css\");var _AjaxAdapter=_interopRequireDefault(__webpack_require__(/*! ../AjaxAdapter */ \"./src/AjaxAdapter.js\"));var _UserAjaxAdapter=_interopRequireDefault(__webpack_require__(/*! ../UserAjaxAdapter */ \"./src/UserAjaxAdapter.js\"));var _BidDashboard=_interopRequireDefault(__webpack_require__(/*! ../BidDashboard */ \"./src/BidDashboard/index.js\"));var _UserDashboard=_interopRequireDefault(__webpack_require__(/*! ../UserDashboard */ \"./src/UserDashboard/index.js\"));var _AvailableItems=_interopRequireDefault(__webpack_require__(/*! ../AvailableItems */ \"./src/AvailableItems/index.js\"));var _Header=_interopRequireDefault(__webpack_require__(/*! ../Header */ \"./src/Header/index.js\"));var _ResetButton=_interopRequireDefault(__webpack_require__(/*! ../ResetButton */ \"./src/ResetButton/index.js\"));var _socket=_interopRequireDefault(__webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/lib/index.js\"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):{};if(desc.get||desc.set){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}}newObj.default=obj;return newObj;}}function _typeof(obj){if(typeof Symbol===\"function\"&&typeof Symbol.iterator===\"symbol\"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol===\"function\"&&obj.constructor===Symbol&&obj!==Symbol.prototype?\"symbol\":typeof obj;};}return _typeof(obj);}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,\"next\",value);}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,\"throw\",err);}_next(undefined);});};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)===\"object\"||typeof call===\"function\")){return call;}return _assertThisInitialized(self);}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass,superClass){if(typeof superClass!==\"function\"&&superClass!==null){throw new TypeError(\"Super expression must either be null or a function\");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return self;}var ItemDataModel=(0,_AjaxAdapter.default)('/api/items');var upForAuctionRoute=(0,_AjaxAdapter.default)('/api/items/upForAuction');var completedBidRoute=(0,_AjaxAdapter.default)('/api/items/completedBid');var UserDataModel=(0,_UserAjaxAdapter.default)('/api/users/');var App=/*#__PURE__*/function(_Component){_inherits(App,_Component);function App(props){var _this;_classCallCheck(this,App);_this=_possibleConstructorReturn(this,_getPrototypeOf(App).call(this,props));_this.state={items:[],price:0,userID:2,user:{}};_this.addToAuction=_this.addToAuction.bind(_assertThisInitialized(_assertThisInitialized(_this)));_this.completedBidFn=_this.completedBidFn.bind(_assertThisInitialized(_assertThisInitialized(_this)));_this.getData=_this.getData.bind(_assertThisInitialized(_assertThisInitialized(_this)));_this.updateUserBalance=_this.updateUserBalance.bind(_assertThisInitialized(_assertThisInitialized(_this)));_this.resetPrice=_this.resetPrice.bind(_assertThisInitialized(_assertThisInitialized(_this)));_this.resetAuction=_this.resetAuction.bind(_assertThisInitialized(_assertThisInitialized(_this)));return _this;}_createClass(App,[{key:\"componentDidMount\",value:function componentDidMount(){var _this2=this;this.getUserData();this.getData();//all network events should go in componentDidMount\nthis.socket=_socket.default.connect('/');this.socket.emit('newConnection');this.socket.on('latestBid',function(latestBid){_this2.setState({price:latestBid});});this.socket.on('update',function(){console.log('we got an update');_this2.getData();});}},{key:\"componentDidUpdate\",value:function componentDidUpdate(){if(this.state.seconds=='Time is up!'){this.updateBalance();this.setState({seconds:6});this.resetPrice();}}},{key:\"getUserData\",value:function(){var _getUserData=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee(){var userID;return regeneratorRuntime.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:userID=this.state.userID;console.log('getting user data');_context.t0=this;_context.next=5;return UserDataModel.read(userID);case 5:_context.t1=_context.sent;_context.t2={user:_context.t1};_context.t0.setState.call(_context.t0,_context.t2);case 8:case\"end\":return _context.stop();}}},_callee,this);}));function getUserData(){return _getUserData.apply(this,arguments);}return getUserData;}()},{key:\"getData\",value:function(){var _getData=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee2(){return regeneratorRuntime.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:console.log('getting data');_context2.t0=this;_context2.next=4;return ItemDataModel.read();case 4:_context2.t1=_context2.sent;_context2.t2={items:_context2.t1};_context2.t0.setState.call(_context2.t0,_context2.t2);case 7:case\"end\":return _context2.stop();}}},_callee2,this);}));function getData(){return _getData.apply(this,arguments);}return getData;}()},{key:\"addToAuction\",value:function(){var _addToAuction=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee3(e){var valid,id;return regeneratorRuntime.wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:valid=true;this.state.items.forEach(function(el){if(el.upForAuction===true){valid=false;}});// update database\nif(!valid){_context3.next=9;break;}id=e.target.id;_context3.next=6;return upForAuctionRoute.update(id);case 6:// this.socket = io.connect('/');\nthis.socket.emit('update');this.socket.emit('message',{body:1,from:'firstBid'});this.socket.emit('load');case 9:case\"end\":return _context3.stop();}}},_callee3,this);}));function addToAuction(_x){return _addToAuction.apply(this,arguments);}return addToAuction;}()},{key:\"completedBidFn\",value:function(){var _completedBidFn=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee4(id){return regeneratorRuntime.wrap(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:console.log(this.state.price);_context4.next=3;return completedBidRoute.updateAfter(id,this.state.price);case 3:case\"end\":return _context4.stop();}}},_callee4,this);}));function completedBidFn(_x2){return _completedBidFn.apply(this,arguments);}return completedBidFn;}()},{key:\"updateUserBalance\",value:function(){var _updateUserBalance=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee5(){var newBalance;return regeneratorRuntime.wrap(function _callee5$(_context5){while(1){switch(_context5.prev=_context5.next){case 0:newBalance=this.state.user.balance-this.state.price;_context5.next=3;return UserDataModel.update(this.state.userID,newBalance).then(this.getData()).then(this.getUserData());case 3:case\"end\":return _context5.stop();}}},_callee5,this);}));function updateUserBalance(){return _updateUserBalance.apply(this,arguments);}return updateUserBalance;}()},{key:\"resetPrice\",value:function(){var _resetPrice=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee6(){return regeneratorRuntime.wrap(function _callee6$(_context6){while(1){switch(_context6.prev=_context6.next){case 0:_context6.next=2;return this.setState({price:0});case 2:case\"end\":return _context6.stop();}}},_callee6,this);}));function resetPrice(){return _resetPrice.apply(this,arguments);}return resetPrice;}()},{key:\"resetAuction\",value:function(){var _resetAuction=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee7(){return regeneratorRuntime.wrap(function _callee7$(_context7){while(1){switch(_context7.prev=_context7.next){case 0:console.log('lets reset');_context7.next=3;return ItemDataModel.resetItems();case 3:this.socket.emit('reset');case 4:case\"end\":return _context7.stop();}}},_callee7,this);}));function resetAuction(){return _resetAuction.apply(this,arguments);}return resetAuction;}()},{key:\"render\",value:function render(){var _this$state=this.state,items=_this$state.items,price=_this$state.price,user=_this$state.user;//console.log(items)\n// const { items } = this.props;\nreturn _react.default.createElement(\"div\",null,_react.default.createElement(_Header.default,null),_react.default.createElement(_BidDashboard.default,{items:items,completedBidFn:this.completedBidFn,filterFn:function filterFn(item){return item.upForAuction&&!item.completedBid;},price:price,updateUserBalance:this.updateUserBalance,resetPrice:this.resetPrice}),_react.default.createElement(_ResetButton.default,{resetAuction:this.resetAuction}),_react.default.createElement(_UserDashboard.default,{items:items,filterFn:function filterFn(item){return!item.upForAuction&&item.completedBid;},price:price,user:user}),_react.default.createElement(_AvailableItems.default,{items:items,addToAuction:this.addToAuction,filterFn:function filterFn(item){return!item.upForAuction&&!item.completedBid;}}));}}]);return App;}(_react.Component);var _default=App;exports.default=_default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXBwL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC9pbmRleC5qcz9iM2E3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbi8vIGltcG9ydCBcImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NvY2tldC5pby8yLjEuMS9zb2NrZXQuaW8uanNcIlxuLy8gaW1wb3J0ICcuL3NvY2tldGlvU2NyaXB0LmpzJ1xuLy8gaW1wb3J0ICcuL3NjcmlwdC5qcyc7XG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQgQWpheEFkYXB0ZXIgZnJvbSAnLi4vQWpheEFkYXB0ZXInO1xuaW1wb3J0IFVzZXJBamF4QWRhcHRlciBmcm9tICcuLi9Vc2VyQWpheEFkYXB0ZXInO1xuXG5pbXBvcnQgQmlkRGFzaGJvYXJkIGZyb20gJy4uL0JpZERhc2hib2FyZCc7XG5pbXBvcnQgVXNlckRhc2hib2FyZCBmcm9tICcuLi9Vc2VyRGFzaGJvYXJkJztcbmltcG9ydCBBdmFpbGFibGVJdGVtcyBmcm9tICcuLi9BdmFpbGFibGVJdGVtcyc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL0hlYWRlcic7XG5pbXBvcnQgUmVzZXRCdXR0b24gZnJvbSAnLi4vUmVzZXRCdXR0b24nO1xuaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnXG5cbmNvbnN0IEl0ZW1EYXRhTW9kZWwgPSBBamF4QWRhcHRlcignL2FwaS9pdGVtcycpO1xuY29uc3QgdXBGb3JBdWN0aW9uUm91dGUgPSBBamF4QWRhcHRlcignL2FwaS9pdGVtcy91cEZvckF1Y3Rpb24nKTtcbmNvbnN0IGNvbXBsZXRlZEJpZFJvdXRlID0gQWpheEFkYXB0ZXIoJy9hcGkvaXRlbXMvY29tcGxldGVkQmlkJyk7XG5cbmNvbnN0IFVzZXJEYXRhTW9kZWwgPSBVc2VyQWpheEFkYXB0ZXIoJy9hcGkvdXNlcnMvJyk7XG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGl0ZW1zOiBbXSxcbiAgICAgIHByaWNlOiAwLFxuICAgICAgdXNlcklEOiAyLFxuICAgICAgdXNlcjoge30sXG4gICAgfVxuICAgIHRoaXMuYWRkVG9BdWN0aW9uID0gdGhpcy5hZGRUb0F1Y3Rpb24uYmluZCh0aGlzKTtcbiAgICB0aGlzLmNvbXBsZXRlZEJpZEZuID0gdGhpcy5jb21wbGV0ZWRCaWRGbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2V0RGF0YSA9IHRoaXMuZ2V0RGF0YS5iaW5kKHRoaXMpO1xuICAgIHRoaXMudXBkYXRlVXNlckJhbGFuY2UgPSB0aGlzLnVwZGF0ZVVzZXJCYWxhbmNlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZXNldFByaWNlID0gdGhpcy5yZXNldFByaWNlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZXNldEF1Y3Rpb24gPSB0aGlzLnJlc2V0QXVjdGlvbi5iaW5kKHRoaXMpO1xuICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMuZ2V0VXNlckRhdGEoKTtcbiAgICAgIHRoaXMuZ2V0RGF0YSgpO1xuXG4gICAgICAvL2FsbCBuZXR3b3JrIGV2ZW50cyBzaG91bGQgZ28gaW4gY29tcG9uZW50RGlkTW91bnRcbiAgICAgIHRoaXMuc29ja2V0ID0gaW8uY29ubmVjdCgnLycpO1xuXG4gICAgICB0aGlzLnNvY2tldC5lbWl0KCduZXdDb25uZWN0aW9uJylcblxuICAgICAgdGhpcy5zb2NrZXQub24oJ2xhdGVzdEJpZCcsIGxhdGVzdEJpZCA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcmljZTogbGF0ZXN0QmlkIH0pXG4gICAgICB9KVxuXG4gICAgICB0aGlzLnNvY2tldC5vbigndXBkYXRlJywgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnd2UgZ290IGFuIHVwZGF0ZScpXG4gICAgICAgIHRoaXMuZ2V0RGF0YSgpO1xuICAgICAgfSlcbiAgICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgaWYodGhpcy5zdGF0ZS5zZWNvbmRzID09ICdUaW1lIGlzIHVwIScpe1xuICAgICAgdGhpcy51cGRhdGVCYWxhbmNlKClcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzZWNvbmRzOiA2XG4gICAgICB9KVxuICAgICAgdGhpcy5yZXNldFByaWNlKClcbiAgICB9XG4gIH1cblxuICAgYXN5bmMgZ2V0VXNlckRhdGEoKSB7XG4gICAgbGV0IHVzZXJJRCA9IHRoaXMuc3RhdGUudXNlcklEXG4gICAgY29uc29sZS5sb2coJ2dldHRpbmcgdXNlciBkYXRhJylcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHVzZXI6IGF3YWl0IFVzZXJEYXRhTW9kZWwucmVhZCh1c2VySUQpLFxuICAgIH0pO1xuICB9XG5cblxuIGFzeW5jIGdldERhdGEoKSB7XG4gICAgY29uc29sZS5sb2coJ2dldHRpbmcgZGF0YScpXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpdGVtczogYXdhaXQgSXRlbURhdGFNb2RlbC5yZWFkKCksXG4gICAgfSk7XG5cbiAgfVxuXG4gICAgYXN5bmMgYWRkVG9BdWN0aW9uKGUpe1xuICAgIGxldCB2YWxpZCA9IHRydWVcbiAgICB0aGlzLnN0YXRlLml0ZW1zLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbiAgICAgIGlmKGVsLnVwRm9yQXVjdGlvbiA9PT0gdHJ1ZSl7XG4gICAgICAgIHZhbGlkID0gZmFsc2VcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyB1cGRhdGUgZGF0YWJhc2VcbiAgICBpZih2YWxpZCl7XG4gICAgICBsZXQgaWQgPSBlLnRhcmdldC5pZFxuICAgICAgYXdhaXQgdXBGb3JBdWN0aW9uUm91dGUudXBkYXRlKGlkKVxuICAgICAgLy8gdGhpcy5zb2NrZXQgPSBpby5jb25uZWN0KCcvJyk7XG4gICAgICB0aGlzLnNvY2tldC5lbWl0KCd1cGRhdGUnKVxuICAgICAgdGhpcy5zb2NrZXQuZW1pdCgnbWVzc2FnZScsIHtib2R5OjEsZnJvbTonZmlyc3RCaWQnfSlcbiAgICAgIHRoaXMuc29ja2V0LmVtaXQoJ2xvYWQnKVxuICAgIH1cbiAgICB9XG5cbiAgIGFzeW5jIGNvbXBsZXRlZEJpZEZuKGlkKXtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnByaWNlKVxuICAgIGF3YWl0IGNvbXBsZXRlZEJpZFJvdXRlLnVwZGF0ZUFmdGVyKGlkLHRoaXMuc3RhdGUucHJpY2UpXG4gIH1cblxuICBhc3luYyB1cGRhdGVVc2VyQmFsYW5jZSgpe1xuICAgIGxldCBuZXdCYWxhbmNlID0gdGhpcy5zdGF0ZS51c2VyLmJhbGFuY2UgLSB0aGlzLnN0YXRlLnByaWNlXG4gICAgYXdhaXQgVXNlckRhdGFNb2RlbC51cGRhdGUodGhpcy5zdGF0ZS51c2VySUQsbmV3QmFsYW5jZSlcbiAgICAudGhlbih0aGlzLmdldERhdGEoKSlcbiAgICAudGhlbih0aGlzLmdldFVzZXJEYXRhKCkpXG4gIH1cblxuICBhc3luYyByZXNldFByaWNlKCl7XG4gICAgYXdhaXQgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBwcmljZTogMFxuICAgIH0pXG4gIH1cblxuICBhc3luYyByZXNldEF1Y3Rpb24oKXtcbiAgICBjb25zb2xlLmxvZygnbGV0cyByZXNldCcpXG4gICAgYXdhaXQgSXRlbURhdGFNb2RlbC5yZXNldEl0ZW1zKClcbiAgICB0aGlzLnNvY2tldC5lbWl0KCdyZXNldCcpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgaXRlbXMsIHByaWNlLCB1c2VyIH0gPSB0aGlzLnN0YXRlXG5cblxuICAgIC8vY29uc29sZS5sb2coaXRlbXMpXG4gICAgLy8gY29uc3QgeyBpdGVtcyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIDxCaWREYXNoYm9hcmQgaXRlbXMgPSB7aXRlbXN9IGNvbXBsZXRlZEJpZEZuID0ge3RoaXMuY29tcGxldGVkQmlkRm59IGZpbHRlckZuPXtpdGVtID0+IGl0ZW0udXBGb3JBdWN0aW9uICYmICFpdGVtLmNvbXBsZXRlZEJpZH0gcHJpY2U9e3ByaWNlfSB1cGRhdGVVc2VyQmFsYW5jZT17dGhpcy51cGRhdGVVc2VyQmFsYW5jZX0gcmVzZXRQcmljZT17dGhpcy5yZXNldFByaWNlfS8+XG4gICAgICAgIDxSZXNldEJ1dHRvbiByZXNldEF1Y3Rpb24gPSB7dGhpcy5yZXNldEF1Y3Rpb259Lz5cbiAgICAgICAgPFVzZXJEYXNoYm9hcmQgaXRlbXMgPSB7aXRlbXN9IGZpbHRlckZuPXtpdGVtID0+ICFpdGVtLnVwRm9yQXVjdGlvbiAmJiBpdGVtLmNvbXBsZXRlZEJpZH0gcHJpY2U9e3ByaWNlfSB1c2VyPXt1c2VyfSAvPlxuICAgICAgICA8QXZhaWxhYmxlSXRlbXMgaXRlbXMgPSB7aXRlbXN9IGFkZFRvQXVjdGlvbj17dGhpcy5hZGRUb0F1Y3Rpb259IGZpbHRlckZuPXtpdGVtID0+ICFpdGVtLnVwRm9yQXVjdGlvbiAmJiAhaXRlbS5jb21wbGV0ZWRCaWR9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUE0Q0E7QUFpREE7QUFJQTtBQW1DQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/App/index.js\n");

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
eval("Object.defineProperty(exports,\"__esModule\",{value:true});exports.default=void 0;var _react=_interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):{};if(desc.get||desc.set){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}}newObj.default=obj;return newObj;}}//when user clicks on button next to available item,\n//the item changes its upForAuction value to true\nvar AvailableItems=function AvailableItems(_ref){var items=_ref.items,filterFn=_ref.filterFn,addToAuction=_ref.addToAuction;// onClick={() => this.handleClick(obj.id)}\nreturn _react.default.createElement(\"div\",{id:\"availableItems\"},_react.default.createElement(\"h3\",null,\"Items available for bidding:\"),items.filter(filterFn).map(function(item,index){return _react.default.createElement(\"div\",{key:index},_react.default.createElement(\"p\",null,_react.default.createElement(\"span\",{className:\"availableItem\"},item.name),_react.default.createElement(\"button\",{onClick:addToAuction,id:item.id},\"Add to auction\")));}));};var _default=AvailableItems;exports.default=_default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXZhaWxhYmxlSXRlbXMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQXZhaWxhYmxlSXRlbXMvaW5kZXguanM/OTkwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG4vL3doZW4gdXNlciBjbGlja3Mgb24gYnV0dG9uIG5leHQgdG8gYXZhaWxhYmxlIGl0ZW0sXG4vL3RoZSBpdGVtIGNoYW5nZXMgaXRzIHVwRm9yQXVjdGlvbiB2YWx1ZSB0byB0cnVlXG5cblxuY29uc3QgQXZhaWxhYmxlSXRlbXMgPSAoeyBpdGVtcywgZmlsdGVyRm4sIGFkZFRvQXVjdGlvbiB9KSA9PiB7XG5cbi8vIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQ2xpY2sob2JqLmlkKX1cblxuICByZXR1cm4oXG48ZGl2IGlkID0nYXZhaWxhYmxlSXRlbXMnPlxuPGgzPkl0ZW1zIGF2YWlsYWJsZSBmb3IgYmlkZGluZzo8L2gzPlxuICB7XG4gICAgaXRlbXMuZmlsdGVyKGZpbHRlckZuKVxuICAgIC5tYXAoKGl0ZW0saW5kZXgpID0+IChcbiAgICAgIDxkaXYga2V5PXtpbmRleH0+XG4gICAgICA8cD5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdhdmFpbGFibGVJdGVtJz57aXRlbS5uYW1lfTwvc3Bhbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXthZGRUb0F1Y3Rpb259IGlkPXtpdGVtLmlkfT5BZGQgdG8gYXVjdGlvbjwvYnV0dG9uPlxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuICAgICkpXG4gIH1cbjwvZGl2PlxuKX1cblxuZXhwb3J0IGRlZmF1bHQgQXZhaWxhYmxlSXRlbXM7XG5cblxuXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBR0E7QUFHQTtBQUlBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/AvailableItems/index.js\n");

/***/ }),

/***/ "./src/BidDashboard/index.js":
/*!***********************************!*\
  !*** ./src/BidDashboard/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});exports.default=void 0;var _react=_interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));var _socket=_interopRequireDefault(__webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/lib/index.js\"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):{};if(desc.get||desc.set){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}}newObj.default=obj;return newObj;}}function _typeof(obj){if(typeof Symbol===\"function\"&&typeof Symbol.iterator===\"symbol\"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol===\"function\"&&obj.constructor===Symbol&&obj!==Symbol.prototype?\"symbol\":typeof obj;};}return _typeof(obj);}function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError(\"Invalid attempt to spread non-iterable instance\");}function _iterableToArray(iter){if(Symbol.iterator in Object(iter)||Object.prototype.toString.call(iter)===\"[object Arguments]\")return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)===\"object\"||typeof call===\"function\")){return call;}return _assertThisInitialized(self);}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass,superClass){if(typeof superClass!==\"function\"&&superClass!==null){throw new TypeError(\"Super expression must either be null or a function\");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return self;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}// shoutout to Fabian Schultz on stackoverflow for helping with the timer\n// https://stackoverflow.com/questions/40885923/countdown-timer-in-react\nvar BidDashboard=/*#__PURE__*/function(_Component){_inherits(BidDashboard,_Component);function BidDashboard(props){var _this;_classCallCheck(this,BidDashboard);_this=_possibleConstructorReturn(this,_getPrototypeOf(BidDashboard).call(this,props));_defineProperty(_assertThisInitialized(_assertThisInitialized(_this)),\"handleSubmit\",function(event){var body=parseInt(event.target.value);if(event.keyCode===13&&!(body<_this.state.messages[0].body)){console.log(\"new bid: \"+body);console.log(\"old bid: \"+_this.state.messages[0].body);console.log(\"all the bids:\"+_this.state.messages);var message={body:body,from:'eyy'};_this.socket.emit('message',message);event.target.value=message.body+1;_this.startTimer();}});_this.state={messages:[{from:\"bids will go here\",body:\"\"}],seconds:6};_this.startTimer=_this.startTimer.bind(_assertThisInitialized(_assertThisInitialized(_this)));return _this;}_createClass(BidDashboard,[{key:\"componentDidMount\",value:function componentDidMount(){var _this2=this;console.log('yes comp did mount on dashboard');this.socket=_socket.default.connect('/');this.socket.emit('load');this.socket.on('load',function(bidLedger){console.log('page loaded boiiiii');console.log(bidLedger);_this2.setState({messages:bidLedger});});this.socket.on('bidLedger',function(bidLedger){console.log('here is da bid ledger');console.log(bidLedger);_this2.setState({messages:bidLedger});});this.socket.on('message',function(message){_this2.setState({messages:[message].concat(_toConsumableArray(_this2.state.messages))});});this.socket.on('timer',function(seconds){_this2.setState({seconds:seconds});});}},{key:\"componentDidUpdate\",value:function componentDidUpdate(){var bidID=this.props.items.filter(function(item){return item.upForAuction&&!item.completedBid;}).map(function(item,index){return item.id;});bidID=bidID[0];if(this.state.seconds=='Time is up!'){this.props.completedBidFn(bidID).then(this.props.updateUserBalance()).then(this.setState({messages:[],seconds:6})).then(this.props.resetPrice());}}},{key:\"startTimer\",value:function startTimer(){this.setState({seconds:6});this.socket.emit('timer',6);}},{key:\"render\",value:function render(){var _this$props=this.props,items=_this$props.items,completedBidFn=_this$props.completedBidFn,filterFn=_this$props.filterFn,updateUserBalance=_this$props.updateUserBalance;var _this$state=this.state,messages=_this$state.messages,seconds=_this$state.seconds;var ledger=messages.map(function(message,index){return _react.default.createElement(\"li\",{key:index},\" \",message.from,\" - $\",message.body);});var bidItem=items.filter(filterFn).map(function(item,index){return _react.default.createElement(\"h3\",{key:index},\" \",item.name,\" \");});return _react.default.createElement(\"div\",{id:\"funChat\"},_react.default.createElement(\"div\",null),_react.default.createElement(\"div\",{id:\"chat-window\"},_react.default.createElement(\"div\",null,\"For Auction:\",bidItem),_react.default.createElement(\"div\",{id:\"countdown\"},\"Time left: \",seconds),_react.default.createElement(\"div\",{className:\"bidInfo\"},\"Bid here:\",_react.default.createElement(\"input\",{type:\"number\",onKeyUp:bidItem.length>0?this.handleSubmit:undefined}),ledger),_react.default.createElement(\"div\",{id:\"output\"})));}}]);return BidDashboard;}(_react.Component);var _default=BidDashboard;exports.default=_default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQmlkRGFzaGJvYXJkL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL0JpZERhc2hib2FyZC9pbmRleC5qcz81MjNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgaW8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCdcblxuLy8gc2hvdXRvdXQgdG8gRmFiaWFuIFNjaHVsdHogb24gc3RhY2tvdmVyZmxvdyBmb3IgaGVscGluZyB3aXRoIHRoZSB0aW1lclxuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDA4ODU5MjMvY291bnRkb3duLXRpbWVyLWluLXJlYWN0XG5cbmNsYXNzIEJpZERhc2hib2FyZCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbWVzc2FnZXM6IFt7ZnJvbTpcImJpZHMgd2lsbCBnbyBoZXJlXCIsYm9keTpcIlwifV0sXG4gICAgICBzZWNvbmRzOiA2LFxuICAgIH1cbiAgICB0aGlzLnN0YXJ0VGltZXIgPSB0aGlzLnN0YXJ0VGltZXIuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnNvbGUubG9nKCd5ZXMgY29tcCBkaWQgbW91bnQgb24gZGFzaGJvYXJkJylcbiAgICB0aGlzLnNvY2tldCA9IGlvLmNvbm5lY3QoJy8nKTtcblxuICAgIHRoaXMuc29ja2V0LmVtaXQoJ2xvYWQnKVxuXG4gICAgdGhpcy5zb2NrZXQub24oJ2xvYWQnLCBiaWRMZWRnZXIgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ3BhZ2UgbG9hZGVkIGJvaWlpaWknKVxuICAgICAgY29uc29sZS5sb2coYmlkTGVkZ2VyKVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG1lc3NhZ2VzOiBiaWRMZWRnZXJcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIHRoaXMuc29ja2V0Lm9uKCdiaWRMZWRnZXInLCBiaWRMZWRnZXIgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2hlcmUgaXMgZGEgYmlkIGxlZGdlcicpXG4gICAgICBjb25zb2xlLmxvZyhiaWRMZWRnZXIpXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbWVzc2FnZXM6IGJpZExlZGdlclxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgdGhpcy5zb2NrZXQub24oJ21lc3NhZ2UnLCBtZXNzYWdlID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1lc3NhZ2VzOiBbbWVzc2FnZSwgLi4udGhpcy5zdGF0ZS5tZXNzYWdlc10gfSlcbiAgICB9KVxuXG4gICAgdGhpcy5zb2NrZXQub24oJ3RpbWVyJywgc2Vjb25kcyA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2Vjb25kczogc2Vjb25kcyB9KTtcbiAgICB9KVxuXG5cblxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIGxldCBiaWRJRCA9IHRoaXMucHJvcHMuaXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS51cEZvckF1Y3Rpb24gJiYgIWl0ZW0uY29tcGxldGVkQmlkKS5tYXAoKGl0ZW0saW5kZXgpID0+IHtcbiAgICAgIHJldHVybiBpdGVtLmlkXG4gICAgfSlcbiAgICBiaWRJRCA9IGJpZElEWzBdXG4gICAgaWYodGhpcy5zdGF0ZS5zZWNvbmRzID09ICdUaW1lIGlzIHVwIScpe1xuICAgICAgdGhpcy5wcm9wcy5jb21wbGV0ZWRCaWRGbihiaWRJRClcbiAgICAgIC50aGVuKHRoaXMucHJvcHMudXBkYXRlVXNlckJhbGFuY2UoKSlcbiAgICAgIC50aGVuKHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBtZXNzYWdlczogW10sXG4gICAgICAgIHNlY29uZHM6IDZcbiAgICAgIH0pKVxuICAgICAgLnRoZW4odGhpcy5wcm9wcy5yZXNldFByaWNlKCkpXG4gICAgfVxuICB9XG5cbiAgc3RhcnRUaW1lcigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2Vjb25kczogNiB9KVxuICAgIHRoaXMuc29ja2V0LmVtaXQoJ3RpbWVyJywgNilcbiAgfVxuXG5oYW5kbGVTdWJtaXQgPSBldmVudCA9PiB7XG5sZXQgYm9keSA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC52YWx1ZSlcbmlmIChldmVudC5rZXlDb2RlID09PSAxMyAmJiAhKGJvZHkgPCB0aGlzLnN0YXRlLm1lc3NhZ2VzWzBdLmJvZHkpICl7XG4gIGNvbnNvbGUubG9nKFwibmV3IGJpZDogXCIrYm9keSlcbiAgY29uc29sZS5sb2coXCJvbGQgYmlkOiBcIit0aGlzLnN0YXRlLm1lc3NhZ2VzWzBdLmJvZHkpXG4gIGNvbnNvbGUubG9nKFwiYWxsIHRoZSBiaWRzOlwiK3RoaXMuc3RhdGUubWVzc2FnZXMpXG4gIGxldCBtZXNzYWdlID0ge1xuICAgIGJvZHk6IGJvZHksXG4gICAgZnJvbTogJ2V5eSdcbiAgfVxuICB0aGlzLnNvY2tldC5lbWl0KCdtZXNzYWdlJywgbWVzc2FnZSlcbiAgZXZlbnQudGFyZ2V0LnZhbHVlID0gbWVzc2FnZS5ib2R5ICsxXG4gIHRoaXMuc3RhcnRUaW1lcigpXG4gICAgfVxuIH1cblxucmVuZGVyKCkge1xuXG5sZXQge1xuaXRlbXMsXG5jb21wbGV0ZWRCaWRGbixcbmZpbHRlckZuLFxudXBkYXRlVXNlckJhbGFuY2Vcbn0gPSB0aGlzLnByb3BzXG5cbmxldCB7XG4gIG1lc3NhZ2VzLFxuICBzZWNvbmRzXG59ID0gdGhpcy5zdGF0ZVxuXG5cblxuICBsZXQgbGVkZ2VyID0gbWVzc2FnZXMubWFwKChtZXNzYWdlLGluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiA8bGkga2V5PXtpbmRleH0+IHttZXNzYWdlLmZyb219IC0gJHttZXNzYWdlLmJvZHl9PC9saT5cbiAgfSlcblxuXG5sZXQgYmlkSXRlbSA9IGl0ZW1zLmZpbHRlcihmaWx0ZXJGbikubWFwKChpdGVtLGluZGV4KSA9PiB7XG4gICAgcmV0dXJuIDxoMyBrZXk9e2luZGV4fT4ge2l0ZW0ubmFtZX0gPC9oMz5cbiAgfSlcblxuICByZXR1cm4oXG4gIDxkaXYgaWQ9XCJmdW5DaGF0XCI+XG4gIDxkaXY+XG4gIDwvZGl2PlxuICAgPGRpdiBpZD1cImNoYXQtd2luZG93XCI+XG4gICAgIDxkaXY+Rm9yIEF1Y3Rpb246e2JpZEl0ZW19PC9kaXY+XG4gICAgICA8ZGl2IGlkPVwiY291bnRkb3duXCI+XG4gICAgICAgIFRpbWUgbGVmdDoge3NlY29uZHN9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWUgPSAnYmlkSW5mbyc+XG4gICAgICBCaWQgaGVyZTpcbiAgICAgICAgPGlucHV0IHR5cGU9J251bWJlcicgb25LZXlVcD17XG4gICAgICAgICAgYmlkSXRlbS5sZW5ndGggPiAwID9cbiAgICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdCA6XG4gICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgIH0gLz5cbiAgICAgICAge2xlZGdlcn1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGlkPVwib3V0cHV0XCI+XG4gICAgICA8L2Rpdj5cbiAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgKVxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBCaWREYXNoYm9hcmQ7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBSUE7QUFFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/BidDashboard/index.js\n");

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
eval("Object.defineProperty(exports,\"__esModule\",{value:true});exports.default=void 0;var _axios=_interopRequireDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var _default=function _default(baseURL){var instance=_axios.default.create({baseURL:baseURL,timeout:1000,headers:{'Content-Type':'application/json'}});return{read:function read(id){return instance.get(\"/\".concat(id)).then(function(_ref){var users=_ref.data.users;return users;}).catch(function(e){throw e;});},update:function update(id,newBalance){return instance.put(\"/\".concat(id,\"/\").concat(newBalance)).catch(function(e){throw e;});}};};exports.default=_default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvVXNlckFqYXhBZGFwdGVyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL1VzZXJBamF4QWRhcHRlci5qcz9lZjJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICAnYXhpb3MnO1xuXG5leHBvcnQgZGVmYXVsdCAoYmFzZVVSTCkgPT4ge1xuICBjb25zdCBpbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSh7XG4gICAgYmFzZVVSTCxcbiAgICB0aW1lb3V0OiAxMDAwLFxuICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICB9KTtcblxuICByZXR1cm4ge1xuICAgIHJlYWQoaWQpIHtcbiAgICAgIHJldHVybiBpbnN0YW5jZS5nZXQoYC8ke2lkfWApXG4gICAgICAgIC50aGVuKCh7IGRhdGE6IHsgdXNlcnMgfSB9KSA9PiB1c2VycylcbiAgICAgICAgLmNhdGNoKChlKSA9PiB7IHRocm93IGU7IH0pO1xuICAgIH0sXG4gICAgdXBkYXRlKGlkLCBuZXdCYWxhbmNlKSB7XG4gICAgICByZXR1cm4gaW5zdGFuY2UucHV0KGAvJHtpZH0vJHtuZXdCYWxhbmNlfWApXG4gICAgICAgIC5jYXRjaCgoZSkgPT4geyB0aHJvdyBlOyB9KTtcbiAgICB9LFxuICB9O1xufTtcbiJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/UserAjaxAdapter.js\n");

/***/ }),

/***/ "./src/UserDashboard/index.js":
/*!************************************!*\
  !*** ./src/UserDashboard/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});exports.default=void 0;var _react=_interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));var _socket=_interopRequireDefault(__webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/lib/index.js\"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):{};if(desc.get||desc.set){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}}newObj.default=obj;return newObj;}}function _typeof(obj){if(typeof Symbol===\"function\"&&typeof Symbol.iterator===\"symbol\"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol===\"function\"&&obj.constructor===Symbol&&obj!==Symbol.prototype?\"symbol\":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)===\"object\"||typeof call===\"function\")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return self;}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass,superClass){if(typeof superClass!==\"function\"&&superClass!==null){throw new TypeError(\"Super expression must either be null or a function\");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}var UserDashboard=/*#__PURE__*/function(_Component){_inherits(UserDashboard,_Component);function UserDashboard(){_classCallCheck(this,UserDashboard);return _possibleConstructorReturn(this,_getPrototypeOf(UserDashboard).apply(this,arguments));}_createClass(UserDashboard,[{key:\"componentWillReceiveProps\",value:function componentWillReceiveProps(){// let availableBalance = this.props.user.balance - this.props.price\n}},{key:\"render\",value:function render(){var items=this.props.items;var filterFn=this.props.filterFn;var user=this.props.user;var availableBalance=this.props.user.balance-this.props.price;return _react.default.createElement(\"div\",{id:\"userDashboard\"},_react.default.createElement(\"div\",null,\"Welcome \",user.username),_react.default.createElement(\"div\",null,\"Available balance: $\",availableBalance),_react.default.createElement(\"h3\",null,\"Items won\"),_react.default.createElement(\"ul\",null,items.filter(filterFn).map(function(item,index){return _react.default.createElement(\"li\",{key:index},item.name,\" - $\",item.price);})));}}]);return UserDashboard;}(_react.Component);var _default=UserDashboard;exports.default=_default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvVXNlckRhc2hib2FyZC9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9Vc2VyRGFzaGJvYXJkL2luZGV4LmpzPzViM2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50J1xuXG5cblxuXG5jbGFzcyBVc2VyRGFzaGJvYXJkIGV4dGVuZHMgQ29tcG9uZW50e1xuXG5cbmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoKSB7XG4gIC8vIGxldCBhdmFpbGFibGVCYWxhbmNlID0gdGhpcy5wcm9wcy51c2VyLmJhbGFuY2UgLSB0aGlzLnByb3BzLnByaWNlXG59XG5cblxucmVuZGVyKCkge1xuXG5cbmxldCBpdGVtcyA9IHRoaXMucHJvcHMuaXRlbXNcbmxldCBmaWx0ZXJGbiA9IHRoaXMucHJvcHMuZmlsdGVyRm5cbmxldCB1c2VyID0gdGhpcy5wcm9wcy51c2VyXG5sZXQgYXZhaWxhYmxlQmFsYW5jZSA9IHRoaXMucHJvcHMudXNlci5iYWxhbmNlIC0gdGhpcy5wcm9wcy5wcmljZVxuXG4gIHJldHVybihcbiAgPGRpdiBpZD0ndXNlckRhc2hib2FyZCc+XG4gIDxkaXY+V2VsY29tZSB7dXNlci51c2VybmFtZX08L2Rpdj5cbiAgPGRpdj5BdmFpbGFibGUgYmFsYW5jZTogJHthdmFpbGFibGVCYWxhbmNlfTwvZGl2PlxuICAgIDxoMz5JdGVtcyB3b248L2gzPlxuICAgIDx1bD5cbiAgICAgIHtcbiAgICAgIGl0ZW1zLmZpbHRlcihmaWx0ZXJGbilcbiAgICAgICAgLm1hcCgoaXRlbSxpbmRleCkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIHtpdGVtLm5hbWV9IC0gJHtpdGVtLnByaWNlfVxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpXG4gICAgfVxuICAgIDwvdWw+XG5cbiAgPC9kaXY+XG4gIClcbn1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlckRhc2hib2FyZDtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFXQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/UserDashboard/index.js\n");

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