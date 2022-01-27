!function(){"use strict";var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function t(e,t){return e(t={exports:{}},t.exports),t.exports}function n(e){try{return!!e()}catch(e){return!0}}function r(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}function o(e){if(null==e)throw F("Can't call method on "+e);return e}function c(e){return D(o(e))}function i(e,t){return arguments.length<2?(n=g[e],R(n)?n:void 0):g[e]&&g[e][t];var n}function a(e){if(R(e))return e;throw q(function(e){try{return _(e)}catch(e){return"Object"}}(e)+" is not a function")}function d(t,n){try{U(g,t,{value:n,configurable:!0,writable:!0})}catch(e){g[t]=n}return n}function u(e){return"Symbol("+(void 0===e?"":e)+")_"+Q(++$+J,36)}function f(e){return e=function(e,t){if(!W(e)||A(e))return e;var n=z(e,oe);if(n){if(n=v(n,e,t=void 0===t?"default":t),!W(n)||A(n))return n;throw re("Can't convert object to primitive value")}return G(e,t=void 0===t?"number":t)}(e,"string"),A(e)?e:e+""}function s(e){if(W(e))return e;throw de(se(e)+" is not an object")}var l,p,m=function(e){return e&&e.Math==Math&&e},g=m("object"==typeof globalThis&&globalThis)||m("object"==typeof window&&window)||m("object"==typeof self&&self)||m("object"==typeof e&&e)||function(){return this}()||Function("return this")(),y=!n(function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}),b=Function.prototype.call,v=b.bind?b.bind(b):function(){return b.apply(b,arguments)},h={}.propertyIsEnumerable,w=Object.getOwnPropertyDescriptor,S={f:w&&!h.call({1:2},1)?function(e){e=w(this,e);return!!e&&e.enumerable}:h},O=Function.prototype,m=O.bind,C=O.call,E=m&&m.bind(C),e=m?function(e){return e&&E(C,e)}:function(e){return e&&function(){return C.apply(e,arguments)}},j=e({}.toString),L=e("".slice),T=g.Object,P=e("".split),D=n(function(){return!T("z").propertyIsEnumerable(0)})?function(e){return"String"==L(j(e),8,-1)?P(e,""):T(e)}:T,F=g.TypeError,R=function(e){return"function"==typeof e},W=function(e){return"object"==typeof e?null!==e:R(e)},I=e({}.isPrototypeOf),h=i("navigator","userAgent")||"",O=g.process,m=g.Deno,m=O&&O.versions||m&&m.version,m=m&&m.v8,M=Te=!(Te=m?0<(K=m.split("."))[0]&&K[0]<4?1:+(K[0]+K[1]):Te)&&h&&(!(K=h.match(/Edge\/(\d+)/))||74<=K[1])&&(K=h.match(/Chrome\/(\d+)/))?+K[1]:Te,x=!!Object.getOwnPropertySymbols&&!n(function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&M&&M<41}),k=x&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,N=g.Object,A=k?function(e){return"symbol"==typeof e}:function(e){var t=i("Symbol");return R(t)&&I(t.prototype,N(e))},_=g.String,q=g.TypeError,z=function(e,t){t=e[t];return null==t?void 0:a(t)},B=g.TypeError,G=function(e,t){var n,r;if("string"===t&&R(n=e.toString)&&!W(r=v(n,e)))return r;if(R(n=e.valueOf)&&!W(r=v(n,e)))return r;if("string"!==t&&R(n=e.toString)&&!W(r=v(n,e)))return r;throw B("Can't convert object to primitive value")},U=Object.defineProperty,h="__core-js_shared__",H=g[h]||d(h,{}),K=t(function(e){(e.exports=function(e,t){return H[e]||(H[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.19.1",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})}),V=g.Object,X=e({}.hasOwnProperty),Y=Object.hasOwn||function(e,t){return X(V(o(e)),t)},$=0,J=Math.random(),Q=e(1..toString),Z=K("wks"),ee=g.Symbol,te=ee&&ee.for,ne=k?ee:ee&&ee.withoutSetter||u,re=g.TypeError,oe=(Y(Z,l="toPrimitive")&&(x||"string"==typeof Z[l])||(p="Symbol."+l,x&&Y(ee,l)?Z[l]=ee[l]:Z[l]=(k&&te?te:ne)(p)),Z[l]),ie=g.document,ae=W(ie)&&W(ie.createElement),ue=!y&&!n(function(){return 7!=Object.defineProperty(ae?ie.createElement("div"):{},"a",{get:function(){return 7}}).a}),ce=Object.getOwnPropertyDescriptor,fe={f:y?ce:function(e,t){if(e=c(e),t=f(t),ue)try{return ce(e,t)}catch(e){}if(Y(e,t))return r(!v(S.f,e,t),e[t])}},se=g.String,de=g.TypeError,le=g.TypeError,pe=Object.defineProperty,me={f:y?pe:function(e,t,n){if(s(e),t=f(t),s(n),ue)try{return pe(e,t,n)}catch(e){}if("get"in n||"set"in n)throw le("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},ge=y?function(e,t,n){return me.f(e,t,r(1,n))}:function(e,t,n){return e[t]=n,e},ye=e(Function.toString);R(H.inspectSource)||(H.inspectSource=function(e){return ye(e)});var be,ve,he,we,Se,Oe,Ce,Ee,je,Le=H.inspectSource,Te=g.WeakMap,h=R(Te)&&/native code/.test(Le(Te)),Pe=K("keys"),De={},Fe="Object already initialized",Re=g.TypeError,Te=g.WeakMap;Ce=h||H.state?(be=H.state||(H.state=new Te),ve=e(be.get),he=e(be.has),we=e(be.set),Se=function(e,t){if(he(be,e))throw new Re(Fe);return t.facade=e,we(be,e,t),t},Oe=function(e){return ve(be,e)||{}},function(e){return he(be,e)}):(Ee=Pe[je="state"]||(Pe[je]=u(je)),De[Ee]=!0,Se=function(e,t){if(Y(e,Ee))throw new Re(Fe);return t.facade=e,ge(e,Ee,t),t},Oe=function(e){return Y(e,Ee)?e[Ee]:{}},function(e){return Y(e,Ee)});function We(e,t){var n,r=c(e),o=0,i=[];for(n in r)!Y(De,n)&&Y(r,n)&&Ue(i,n);for(;t.length>o;)Y(r,n=t[o++])&&(~Ge(i,n)||Ue(i,n));return i}var Ie={set:Se,get:Oe,has:Ce,enforce:function(e){return Ce(e)?Oe(e):Se(e,{})},getterFor:function(n){return function(e){var t;if(!W(e)||(t=Oe(e)).type!==n)throw Re("Incompatible receiver, "+n+" required");return t}}},K=Function.prototype,h=y&&Object.getOwnPropertyDescriptor,Te=Y(K,"name"),Me={EXISTS:Te,PROPER:Te&&"something"===function(){}.name,CONFIGURABLE:Te&&(!y||h(K,"name").configurable)},xe=t(function(e){var c=Me.CONFIGURABLE,t=Ie.get,f=Ie.enforce,s=String(String).split("String");(e.exports=function(e,t,n,r){var o=!!r&&!!r.unsafe,i=!!r&&!!r.enumerable,a=!!r&&!!r.noTargetGet,u=r&&void 0!==r.name?r.name:t;R(n)&&("Symbol("===String(u).slice(0,7)&&(u="["+String(u).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!Y(n,"name")||c&&n.name!==u)&&ge(n,"name",u),(r=f(n)).source||(r.source=s.join("string"==typeof u?u:""))),e!==g?(o?!a&&e[t]&&(i=!0):delete e[t],i?e[t]=n:ge(e,t,n)):i?e[t]=n:d(t,n)})(Function.prototype,"toString",function(){return R(this)&&t(this).source||Le(this)})}),ke=Math.ceil,Ne=Math.floor,Ae=function(e){e=+e;return e!=e||0==e?0:(0<e?Ne:ke)(e)},_e=Math.max,qe=Math.min,ze=Math.min,Be=function(e){return 0<e?ze(Ae(e),9007199254740991):0},h=function(u){return function(e,t,n){var r,o=c(e),i=Be(o.length),a=function(e,t){e=Ae(e);return e<0?_e(e+t,0):qe(e,t)}(n,i);if(u&&t!=t){for(;a<i;)if((r=o[a++])!=r)return!0}else for(;a<i;a++)if((u||a in o)&&o[a]===t)return u||a||0;return!u&&-1}},Ge={includes:h(!0),indexOf:h(!1)}.indexOf,Ue=e([].push),He=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Ke=He.concat("length","prototype"),Ve={f:Object.getOwnPropertyNames||function(e){return We(e,Ke)}},Xe={f:Object.getOwnPropertySymbols},Ye=e([].concat),$e=i("Reflect","ownKeys")||function(e){var t=Ve.f(s(e)),n=Xe.f;return n?Ye(t,n(e)):t},Je=/#|\.prototype\./,K=function(e,t){e=Ze[Qe(e)];return e==tt||e!=et&&(R(t)?n(t):!!t)},Qe=K.normalize=function(e){return String(e).replace(Je,".").toLowerCase()},Ze=K.data={},et=K.NATIVE="N",tt=K.POLYFILL="P",nt=K,rt=fe.f,h=function(e,t){var n,r,o,i=e.target,a=e.global,u=e.stat,c=a?g:u?g[i]||d(i,{}):(g[i]||{}).prototype;if(c)for(n in t){if(r=t[n],o=e.noTargetGet?(o=rt(c,n))&&o.value:c[n],!nt(a?n:i+(u?".":"#")+n,e.forced)&&void 0!==o){if(typeof r==typeof o)continue;!function(e,t){for(var n=$e(t),r=me.f,o=fe.f,i=0;i<n.length;i++){var a=n[i];Y(e,a)||r(e,a,o(t,a))}}(r,o)}(e.sham||o&&o.sham)&&ge(r,"sham",!0),xe(c,n,r,e)}},ot=Object.keys||function(e){return We(e,He)},it=e(S.f),at=e([].push),K=function(u){return function(e){for(var t,n=c(e),r=ot(n),o=r.length,i=0,a=[];i<o;)t=r[i++],y&&!it(n,t)||at(a,u?[t,n[t]]:n[t]);return a}},e={entries:K(!0),values:K(!1)},ut=e.entries;h({target:"Object",stat:!0},{entries:function(e){return ut(e)}});K=g;K.Object.entries;var ct,ft=e.values;h({target:"Object",stat:!0},{values:function(e){return ft(e)}}),K.Object.values;var st=!1,dt=!1,lt=!1;function pt(){st&&dt&&lt&&ct()}var mt={FontsLoaded:function(){lt=!0,pt()},WebComponentsLoaded:function(){st=!0,pt()},WCRDispatched:function(){dt=!0,pt()},WebComponentsReady:new Promise(function(e){ct=e}),reset:function(){dt=lt=st=!1,this.WebComponentsReady=new Promise(function(e){ct=e})}};window.addEventListener("d2l-performance-measure",function(n){var e=/(\?|&)timingdebug=(1|0)/gi.exec(location.search);if(null!==e&&3===e.length){var t="0"!==e[2];try{t?window.sessionStorage.setItem("TimingDebug","1"):window.sessionStorage.removeItem("TimingDebug")}catch(n){}}t=!1;try{t=null!==window.sessionStorage.getItem("TimingDebug")}catch(n){}t&&requestAnimationFrame(function(){var e=document.createElement("div"),t="paint"===n.detail.value.entryType?n.detail.value.startTime:n.detail.value.duration;e.appendChild(document.createTextNode(n.detail.value.name+": "+Math.floor(t)));t=document.querySelector(".d2l-page-timing");null===t?((t=document.createElement("div")).className="d2l-page-timing",t.appendChild(e),document.body.appendChild(t)):t.appendChild(e)})}),function(){if(window.performance&&window.performance.mark&&window.performance.measure&&window.performance.getEntriesByName){var e=!1,t=!1,n=!1;if("complete"===document.readyState?u():addEventListener("load",u),mt.WebComponentsReady.then(a),"PerformanceObserver"in window){var r=new PerformanceObserver(function(e){e=e.getEntries();void 0!==e&&0<e.length&&e.forEach(function(e){o("d2l.page."+e.name,e)})});try{r.observe({entryTypes:["paint"]})}catch(e){}}setTimeout(a,1e4)}function o(e,t){document.dispatchEvent(new CustomEvent("d2l-performance-measure",{bubbles:!0,detail:{name:e,value:t}}))}function i(e,t,n,r){window.performance.measure(e,t,n);n=window.performance.getEntriesByName(e,"measure");1===n.length&&r&&o(e,n[0])}function a(){e||(e=!0,window.performance.mark("webComponentsReady"),c())}function u(){t=!0,c()}function c(){e&&t&&!n&&(n=!0,i("d2l.page.preFetch","navigationStart","fetchStart",!1),i("d2l.page.domInteractive","fetchStart","domInteractive",!1),i("d2l.page.domContentLoadedHandlers","domContentLoadedEventStart","domContentLoadedEventEnd",!1),i("d2l.page.load","fetchStart","loadEventStart",!1),i("d2l.page.server","requestStart","responseStart",!1),i("d2l.page.download","responseStart","responseEnd",!1),i("d2l.page.timeToClient","navigationStart","responseEnd",!0),i("d2l.page.webComponentsReady","navigationStart","webComponentsReady",!0))}}(),window.D2L=window.D2L||{},window.D2L.FontsLoaded=mt.FontsLoaded,window.D2L.WebComponentsLoaded=mt.WebComponentsLoaded,window.D2L.WCRDispatched=mt.WCRDispatched,window.D2L.WebComponentsReady=mt.WebComponentsReady,window.d2lWCLoaded&&mt.WebComponentsLoaded(),window.d2lWCRDispatched&&mt.WCRDispatched(),window.d2lFontsLoaded?mt.FontsLoaded():setTimeout(function(){mt.FontsLoaded()},2e3)}();