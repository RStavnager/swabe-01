(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.ifrauclient = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports=require("../src/client");
},{"../src/client":6}],2:[function(require,module,exports){
"function"==typeof Object.create?module.exports=function(t,e){e&&(t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}))}:module.exports=function(t,e){if(e){t.super_=e;var o=function(){};o.prototype=e.prototype,t.prototype=new o,t.prototype.constructor=t}};

},{}],3:[function(require,module,exports){
function bytesToUuid(e,o){var t=o||0,i=byteToHex;return[i[e[t++]],i[e[t++]],i[e[t++]],i[e[t++]],"-",i[e[t++]],i[e[t++]],"-",i[e[t++]],i[e[t++]],"-",i[e[t++]],i[e[t++]],"-",i[e[t++]],i[e[t++]],i[e[t++]],i[e[t++]],i[e[t++]],i[e[t++]]].join("")}for(var byteToHex=[],i=0;i<256;++i)byteToHex[i]=(i+256).toString(16).substr(1);module.exports=bytesToUuid;

},{}],4:[function(require,module,exports){
var getRandomValues="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(getRandomValues){var rnds8=new Uint8Array(16);module.exports=function(){return getRandomValues(rnds8),rnds8}}else{var rnds=new Array(16);module.exports=function(){for(var n,e=0;e<16;e++)0==(3&e)&&(n=4294967296*Math.random()),rnds[e]=n>>>((3&e)<<3)&255;return rnds}}
},{}],5:[function(require,module,exports){
function v4(r,n,e){var i=n&&e||0;"string"==typeof r&&(n="binary"===r?new Array(16):null,r=null),r=r||{};var u=r.random||(r.rng||rng)();if(u[6]=15&u[6]|64,u[8]=63&u[8]|128,n)for(var o=0;o<16;++o)n[i+o]=u[o];return n||bytesToUuid(u)}var rng=require("./lib/rng"),bytesToUuid=require("./lib/bytesToUuid");module.exports=v4;
},{"./lib/bytesToUuid":3,"./lib/rng":4}],6:[function(require,module,exports){
function Client(e){if(!(this instanceof Client))return new Client(e);e=e||{},SlimClient.call(this,e),!1!==e.syncLang&&(this.use(syncLang),this.use(syncIntl),this.use(syncTimezone),this.use(syncOslo)),e.syncFont&&this.use(syncFont),!1!==e.resizeFrame&&this.use(resizer(e.resizerOptions)),e.syncCssVariable&&this.use(syncCssVariable),this.use(userActivityEvents),this.use(syncTitle(e.syncTitle))}var inherits=require("inherits"),SlimClient=require("./slim"),resizer=require("../plugins/iframe-resizer/client"),syncLang=require("../plugins/sync-lang/client"),syncIntl=require("../plugins/sync-intl/client"),syncTimezone=require("../plugins/sync-timezone/client"),syncTitle=require("../plugins/sync-title/client"),syncFont=require("../plugins/sync-font/client"),syncCssVariable=require("../plugins/sync-css-variable/client"),userActivityEvents=require("../plugins/user-activity-events/client"),syncOslo=require("../plugins/sync-oslo/client");inherits(Client,SlimClient),module.exports=Client;
},{"../plugins/iframe-resizer/client":8,"../plugins/sync-css-variable/client":9,"../plugins/sync-font/client":10,"../plugins/sync-intl/client":11,"../plugins/sync-lang/client":12,"../plugins/sync-oslo/client":13,"../plugins/sync-timezone/client":14,"../plugins/sync-title/client":15,"../plugins/user-activity-events/client":16,"./slim":7,"inherits":2}],7:[function(require,module,exports){
function SlimClient(e){if(!(this instanceof SlimClient))return new SlimClient(e);e=e||{},Port.call(this,window.parent,"*",e)}var inherits=require("inherits"),Port=require("../port");inherits(SlimClient,Port),SlimClient.prototype.connect=function(){var e=this;return new Promise(function(t){e.open(),e._sendMessage("evt","ready"),t(Port.prototype.connect.call(e))})},module.exports=SlimClient;
},{"../port":18,"inherits":2}],8:[function(require,module,exports){
module.exports=function(e){function r(r){if(window.iFrameResizer={targetOrigin:r._targetOrigin},e)for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(window.iFrameResizer[i]=e[i]);var t=document.createElement("script");t.src="https://s.brightspace.com/lib/iframe-resizer/3.6.5/iframeResizer.contentWindow.js",document.head.appendChild(t)}return r};

},{}],9:[function(require,module,exports){
module.exports=function(e){return e.request("css-variable").then(function(e){var t=document.getElementsByTagName("html");t&&1===t.length&&Object.keys(e).forEach(function(n){t[0].style.setProperty(n,e[n])})})};

},{}],10:[function(require,module,exports){
module.exports=function(e){return e.request("font").then(function(e){document.documentElement.style.fontSize=e.size})};

},{}],11:[function(require,module,exports){
module.exports=function(t){return t.request("intl").then(function(t){var e=document.getElementsByTagName("html");1===e.length&&e[0].setAttribute("data-intl-overrides",JSON.stringify(t))})};

},{}],12:[function(require,module,exports){
module.exports=function(t){return t.request("lang").then(function(t){var e=document.getElementsByTagName("html")[0];e.setAttribute("lang",t.lang),t.fallback&&e.setAttribute("data-lang-default",t.fallback),t.isRtl&&(e.setAttribute("dir","rtl"),document.dir="rtl")})};

},{}],13:[function(require,module,exports){
module.exports=function(t){return t.request("oslo").then(function(t){var e=document.getElementsByTagName("html");1===e.length&&t&&e[0].setAttribute("data-oslo",JSON.stringify(t))})};

},{}],14:[function(require,module,exports){
module.exports=function(t){return t.request("timezone").then(function(t){var e=document.getElementsByTagName("html");1===e.length&&e[0].setAttribute("data-timezone",JSON.stringify(t))})};

},{}],15:[function(require,module,exports){
function installClientPolling(t){var e="";setInterval(function(){var n=document.title;n!==e&&(e=n,t(e))},100)}function installClientMutation(t){var e=document.querySelector("title");null===e&&(e=document.createElement("title"),document.getElementsByTagName("head")[0].appendChild(e)),t(document.title),new window.MutationObserver(function(e){t(e[0].target.textContent)}).observe(e,{subtree:!0,characterData:!0,childList:!0})}module.exports=function(t){function e(e){function n(n){t?e.sendEvent("title",n):e.sendEvent("title",n,!0)}"MutationObserver"in window?installClientMutation(n):installClientPolling(n)}return e};

},{}],16:[function(require,module,exports){
function throttle(e){function t(){i=!1,n()}function n(){o&&!i&&(o=!1,i=!0,setTimeout(t,r),e())}var o=!1,i=!1,r=1e4;return function(){o=!0,n()}}var getPassive=function(){var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{document.addEventListener("test",null,t)}catch(e){}return(getPassive=e?function(){return{passive:!0}}:function(){return!1})()};module.exports=function(e){var t=throttle(function(){e.sendEvent("userIsActive")}),n=getPassive();document.addEventListener("click",t,n),document.addEventListener("keydown",t,n),e.onClose(function(){document.removeEventListener("click",t,n),document.removeEventListener("keydown",t,n)})};

},{}],17:[function(require,module,exports){
function Port(e,t,n){if(!(this instanceof Port))return new Port(e,t,n);n=n||{},this._connectQueue=[],this._pluginStartupValues=[],this._debugEnabled=n.debug||!1,this._endpoint=e,this._eventHandlers={},this._isConnected=!1,this._isOpen=!1,this._messageHandlers={},this._onCloseCallbacks=[],this._targetOrigin=t,this._id=uuid();var s=this;this._onMessage("evt",function(){s._receiveEvent.apply(s,arguments)})}var uuid=require("uuid/v4"),validateEvent=require("./validate-event");Port.prototype.close=function(){if(!this._isOpen)throw new Error("Port cannot be closed, call open() first");this._isOpen=!1,this._isConnected=!1,window.removeEventListener("message",this._receiveMessage),this._onCloseCallbacks.forEach(function(e){e()}),this.debug("closed")},Port.prototype.connect=function(){var e=this;return this._isConnected=!0,this.debug("connected"),this._connectQueue.forEach(function(e){e()}),this._connectQueue=[],Promise.all(this._pluginStartupValues).then(function(){return e._pluginStartupValues=null,e})},Port.prototype.debug=function(e){this._debugEnabled&&console.log(e)},Port.prototype._initHashArrAndPush=function(e,t,n){void 0===e[t]&&(e[t]=[]),e[t].push(n)},Port.prototype.onClose=function(e){this._onCloseCallbacks.push(e)},Port.prototype.onEvent=function(e,t){return this.debug('onEvent handler added for "'+e+'"'),this._isConnected&&this.debug("You've attached event handlers after connecting, you may have missed some events"),this._initHashArrAndPush(this._eventHandlers,e,t),this},Port.prototype.open=function(){if(this._isOpen)throw new Error("Port is already open.");return this._isOpen=!0,window.addEventListener("message",this._receiveMessage.bind(this),!1),this.debug("opened"),this},Port.prototype._receiveMessage=function(e){if(validateEvent(this._targetOrigin,this._endpoint,e)){var t=e.data.key.substr(5,3),n=e.data.key.substr(9);this.debug("received "+t+"."+n);var s=this._messageHandlers[t];s&&s.call(this,n,e.data.payload)}},Port.prototype._onMessage=function(e,t){if(3!==e.length)throw new Error("message class name must be 3 characters");this._messageHandlers[e]=t},Port.prototype._receiveEvent=function(e,t){void 0!==this._eventHandlers[e]&&this._eventHandlers[e].forEach(function(e){e.apply(e,t)})},Port.prototype._sendMessage=function(e,t,n){var s={key:"frau."+e+"."+t,payload:n};return this.debug("sending key: "+s.key),this._endpoint.postMessage(s,this._targetOrigin),this},Port.prototype.sendEvent=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);if(!this._isConnected){var s=this;return this._connectQueue.push(function(){s._sendMessage("evt",e,t)}),this}return this._sendMessage("evt",e,t)},Port.prototype.use=function(e){return this._pluginStartupValues.push(e(this)),this},module.exports=Port;

},{"./validate-event":23,"uuid/v4":5}],18:[function(require,module,exports){
module.exports=require("./services");
},{"./services":21}],19:[function(require,module,exports){
function RequestTypeError(e){this.name="RequestTypeError",this.message=e?'No onRequest handler for type "'+e+'"':"No handler defined for request"}var inherits=require("inherits");inherits(RequestTypeError,Error),module.exports=RequestTypeError;
},{"inherits":2}],20:[function(require,module,exports){
function PortWithRequests(){if(!(this instanceof PortWithRequests))return new PortWithRequests.apply(this,arguments);Port.apply(this,arguments),this._pendingRequests={},this._requestHandlers={},this._requestCounter=0,this._waitingRequests=[];var e=this;this._onMessage("req",function(){e._receiveRequest.apply(e,arguments)}),this._onMessage("res",function(){e._receiveRequestResponse.apply(e,arguments)})}var inherits=require("inherits"),Port=require("./base"),RequestTypeError=require("./request-type-error"),fromError=require("./transform-error").fromError,toError=require("./transform-error").toError;inherits(PortWithRequests,Port),PortWithRequests.prototype.request=function(e){for(var r=new Array(arguments.length-1),t=1;t<arguments.length;++t)r[t-1]=arguments[t];var s=this;return new Promise(function(t,i){function n(){s._sendMessage("req",e,{id:u,args:r})}var o=++s._requestCounter,u=s._id+"_"+o;s._initHashArrAndPush(s._pendingRequests,e,{id:u,resolve:t,reject:i}),s._isConnected?n():s._connectQueue.push(n)})},PortWithRequests.prototype.onRequest=function(e,r){if(this._isConnected)throw new Error("Add request handlers before connecting");if(void 0!==this._requestHandlers[e])throw new Error('Duplicate onRequest handler for type "'+e+'"');return this.debug('onRequest handler added for "'+e+'"'),this._requestHandlers[e]=r,this._sendRequestResponse(e),this},PortWithRequests.prototype._receiveRequest=function(e,r){this._initHashArrAndPush(this._waitingRequests,e,r),this._sendRequestResponse(e)},PortWithRequests.prototype._sendRequestResponse=function(e){var r=this._requestHandlers[e],t=this._waitingRequests[e];if(delete this._waitingRequests[e],void 0!==t&&0!==t.length){var s=this;if(void 0===r){var i=fromError(new RequestTypeError(e));return void t.forEach(function(r){s._sendMessage("res",e,{id:r.id,err:i})})}t.forEach(function(t){Promise.resolve().then(function(){return"function"==typeof r?r.apply(r,t.args):r}).then(function(r){s._sendMessage("res",e,{id:t.id,val:r})}).catch(function(r){var i=fromError(r);s._sendMessage("res",e,{id:t.id,err:i})})})}},PortWithRequests.prototype._receiveRequestResponse=function(e,r){var t=this._pendingRequests[e];if(void 0!==t)for(var s=0;s<t.length;++s){var i=t[s];if(i.id===r.id){if(r.hasOwnProperty("err")){var n=toError(r.err);i.reject(n)}else i.resolve(r.val);return void t.splice(s,1)}}},module.exports=PortWithRequests;
},{"./base":17,"./request-type-error":19,"./transform-error":22,"inherits":2}],21:[function(require,module,exports){
function PortWithServices(){if(!(this instanceof PortWithServices))return new PortWithServices.apply(this,arguments);PortWithRequests.apply(this,arguments)}var inherits=require("inherits"),PortWithRequests=require("./requests"),typeNameValidator=/^[a-zA-Z]+[a-zA-Z-]*$/;inherits(PortWithServices,PortWithRequests),PortWithServices.prototype.getService=function(e,t){function r(e){function t(e){return function(){var t=new Array(arguments.length+1);t[0]=i+":"+e;for(var r=0;r<arguments.length;++r)t[r+1]=arguments[r];return n.request.apply(n,t)}}var r={};return e.forEach(function(e){r[e]=t(e)}),r}if(!this._isConnected)throw new Error("Cannot getService() before connect() has completed");var i="service:"+e+":"+t,n=this;return n.request(i).then(r)},PortWithServices.prototype.registerService=function(e,t,r){if(this._isConnected)throw new Error("Register services before connecting");if(!typeNameValidator.test(e))throw new Error('Invalid service type "'+e+'"');var i="service:"+e+":"+t,n=Object.keys(r).filter(function(e){return"function"==typeof r[e]});this.onRequest(i,n);var o=this;return n.forEach(function(e){o.onRequest(i+":"+e,r[e])}),this},module.exports=PortWithServices;
},{"./requests":20,"inherits":2}],22:[function(require,module,exports){
function deErrorifyArray(r){return r.map(deErrorify)}function errorifyArray(r){return r.map(errorify)}function deErrorifyObject(r){var e=r instanceof Error,o=e?{props:{}}:{};e&&(o.message=r.message,o.name=r.name,o[ERROR_OBJECT_SENTINEL]=!0);var n=e?o.props:o;return Object.keys(r).forEach(function(e){var o=deErrorify(r[e]);n[e]=o}),o}function errorifyObject(r){var e=!0===r[ERROR_OBJECT_SENTINEL],o=e?new Error(r.message):{};e&&(o.name=r.name);var n=e?r.props:r;return Object.keys(n).forEach(function(r){var e=errorify(n[r]);o[r]=e}),o}function deErrorify(r){return null!==r&&"object"==typeof r?Array.isArray(r)?deErrorifyArray(r):deErrorifyObject(r):"function"==typeof r?null:r}function errorify(r){return null!==r&&"object"==typeof r?Array.isArray(r)?errorifyArray(r):errorifyObject(r):r}var ERROR_OBJECT_SENTINEL="_ifrau-error-object";module.exports.ERROR_OBJECT_SENTINEL=ERROR_OBJECT_SENTINEL,module.exports.fromError=deErrorify,module.exports.toError=errorify;

},{}],23:[function(require,module,exports){
function isStringEmpty(t){return!t||0===t.length}function validateEvent(t,e,i){return i.source===e&&("*"===t||!isStringEmpty(t)&&!isStringEmpty(i.origin)&&t.toUpperCase()===i.origin.toUpperCase())&&void 0!==i.data.key&&null!==i.data.key&&0===i.data.key.indexOf("frau.")}module.exports=validateEvent;
},{}]},{},[1])(1)
});