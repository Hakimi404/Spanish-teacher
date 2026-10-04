var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},c=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},l=(n,r,o)=>(o=n==null?{}:e(i(n)),c(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var u=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.for(`react.view_transition`),m=Symbol.iterator;function h(e){return typeof e!=`object`||!e?null:(e=m&&e[m]||e[`@@iterator`],typeof e==`function`?e:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,v={};function y(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function b(){}b.prototype=y.prototype;function x(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}var S=x.prototype=new b;S.constructor=x,_(S,y.prototype),S.isPureReactComponent=!0;var C=Array.isArray;function ee(){}var w={H:null,A:null,T:null,S:null},te=Object.prototype.hasOwnProperty;function T(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function E(e,t){return T(e.type,t,e.props)}function ne(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function re(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ie=/\/+/g;function ae(e,t){return typeof e==`object`&&e&&e.key!=null?re(``+e.key):t.toString(36)}function D(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(ee,ee):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function oe(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,oe(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ae(e,0):a,C(o)?(i=``,c!=null&&(i=c.replace(ie,`$&/`)+`/`),oe(o,r,i,``,function(e){return e})):o!=null&&(ne(o)&&(o=E(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ie,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(C(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ae(a,u),c+=oe(a,r,i,s,o);else if(u=h(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ae(a,u++),c+=oe(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return oe(D(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function se(e,t,n){if(e==null)return e;var r=[],i=0;return oe(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ce(e){if(e._status===-1){var t=e._result,n=t();n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t,n.status===void 0&&(n.status=`fulfilled`,n.value=t))},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t,n.status===void 0&&(n.status=`rejected`,n.reason=t))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var le=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)};function ue(e){var t=w.T,n={};n.types=t===null?null:t.types,w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(ee,le)}catch(e){le(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}}function de(e){var t=w.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else ue(de.bind(null,e))}var fe={map:se,forEach:function(e,t,n){se(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return se(e,function(){t++}),t},toArray:function(e){return se(e,function(e){return e})||[]},only:function(e){if(!ne(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=fe,e.Component=y,e.Fragment=r,e.Profiler=a,e.PureComponent=x,e.StrictMode=i,e.Suspense=l,e.ViewTransition=p,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.addTransitionType=de,e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=_({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!te.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return T(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)te.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return T(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=ne,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ce}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=ue,e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.3.0`})),d=o(((e,t)=>{t.exports=u()})),f=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,S||(S=!0,E());else{var t=n(l);t!==null&&ie(x,t.startTime-e)}}}var S=!1,C=-1,ee=5,w=-1;function te(){return g?!0:!(e.unstable_now()-w<ee)}function T(){if(g=!1,S){var t=e.unstable_now();w=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&te());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ie(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?E():S=!1}}}var E;if(typeof y==`function`)E=function(){y(T)};else if(typeof MessageChannel<`u`){var ne=new MessageChannel,re=ne.port2;ne.port1.onmessage=T,E=function(){re.postMessage(null)}}else E=function(){_(T,0)};function ie(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):ee=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,ie(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,E()))),r},e.unstable_shouldYield=te,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),p=o(((e,t)=>{t.exports=f()})),m=o((e=>{var t=d();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`),o=Symbol.for(`react.recoverable`),s=Symbol.for(`react.optimistic_key`);function c(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:r===s?s:``+r,children:e,containerInfo:t,implementation:n}}var l=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function u(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.browser=function(e){return{$$typeof:o,_reason:e}},e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return c(e,t,null,r)},e.flushSync=function(e){var t=l.T,n=i.p;try{if(l.T=null,i.p=2,e)return e()}finally{l.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=u(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=u(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=u(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=u(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return l.H.useFormState(e,t,n)},e.useFormStatus=function(){return l.H.useHostTransitionStatus()},e.version=`19.3.0`})),h=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=m()})),g=o((e=>{var t=p(),n=d(),r=h();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){for(var t=e,n=t;n&&!n.alternate;)t=n,t.flags&4098&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function u(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function f(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=f(e),t!==null)return t;e=e.sibling}return null}function m(e,t,n,r,i,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,r,i,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&m(e.child,t,n,r,i,a))return!0;e=e.sibling}return!1}function g(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function _(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),e.tag!==3&&e.tag!==5&&e.tag!==27);)e=e.return;return t}function v(e){var t=[null,null],n=g(e);return n===null||y(t,e,n.child,{foundSelf:!1}),t}function y(e,t,n,r){for(;n!==null;){if(n===t)r.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(r.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&y(e,t,n.child,r))return!0;n=n.sibling}return!1}function b(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(i(559))}}var x=null,S=null;function C(e,t,n){return e===n||e===t&&(x=e,!0)}function ee(e,t,n){return e===n?(S=e,!1):e===t&&(S!==null&&(x=e),!0)}function w(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function te(e,t,n){for(var r=0,i=e;i;i=n(i))r++;i=0;for(var a=t;a;a=n(a))i++;for(;0<r-i;)e=n(e),r--;for(;0<i-r;)t=n(t),i--;for(;r--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var T=Object.assign,E=Symbol.for(`react.element`),ne=Symbol.for(`react.transitional.element`),re=Symbol.for(`react.portal`),ie=Symbol.for(`react.fragment`),ae=Symbol.for(`react.strict_mode`),D=Symbol.for(`react.profiler`),oe=Symbol.for(`react.consumer`),se=Symbol.for(`react.context`),ce=Symbol.for(`react.forward_ref`),le=Symbol.for(`react.suspense`),ue=Symbol.for(`react.suspense_list`),de=Symbol.for(`react.memo`),fe=Symbol.for(`react.lazy`),pe=Symbol.for(`react.activity`),me=Symbol.for(`react.legacy_hidden`),he=Symbol.for(`react.memo_cache_sentinel`),ge=Symbol.for(`react.view_transition`),_e=Symbol.for(`react.recoverable`),ve=Symbol.iterator;function ye(e){return typeof e!=`object`||!e?null:(e=ve&&e[ve]||e[`@@iterator`],typeof e==`function`?e:null)}var be=Symbol.for(`react.client.reference`);function xe(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===be?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case ie:return`Fragment`;case D:return`Profiler`;case ae:return`StrictMode`;case le:return`Suspense`;case ue:return`SuspenseList`;case pe:return`Activity`;case ge:return`ViewTransition`}if(typeof e==`object`)switch(e.$$typeof){case re:return`Portal`;case se:return e.displayName||`Context`;case oe:return(e._context.displayName||`Context`)+`.Consumer`;case ce:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case de:return t=e.displayName||null,t===null?xe(e.type)||`Memo`:t;case fe:t=e._payload,e=e._init;try{return xe(e(t))}catch{}}return null}var Se=Array.isArray,O=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ce={pending:!1,data:null,method:null,action:null},we=[],Te=-1;function Ee(e){return{current:e}}function De(e){0>Te||(e.current=we[Te],we[Te]=null,Te--)}function Oe(e,t){Te++,we[Te]=e.current,e.current=t}var ke=Ee(null),Ae=Ee(null),je=Ee(null),Me=Ee(null);function Ne(e,t){switch(Oe(je,t),Oe(Ae,e),Oe(ke,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?up(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=up(t),e=dp(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}De(ke),Oe(ke,e)}function Pe(){De(ke),De(Ae),De(je)}function Fe(e){var t=e.memoizedState;t!==null&&(sh._currentValue=t.memoizedState,Oe(Me,e)),t=ke.current;var n=dp(t,e.type);t!==n&&(Oe(Ae,e),Oe(ke,n))}function Ie(e){Ae.current===e&&(De(ke),De(Ae)),Me.current===e&&(De(Me),sh._currentValue=Ce)}var Le,Re;function ze(e){if(Le===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Le=t&&t[1]||``,Re=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Le+e+Re}var Be=!1;function Ve(e,t){if(!e||Be)return``;Be=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}n=!1;try{var i=Object.getOwnPropertyDescriptor(e.prototype,`props`);Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),n=!0,new e}finally{n&&(i===void 0?delete e.prototype.props:Object.defineProperty(e.prototype,"props",i))}}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Be=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?ze(n):``}function He(e,t){switch(e.tag){case 26:case 27:case 5:return ze(e.type);case 16:return ze(`Lazy`);case 13:return e.child!==t&&t!==null?ze(`Suspense Fallback`):ze(`Suspense`);case 19:return ze(`SuspenseList`);case 0:case 15:return Ve(e.type,!1);case 11:return Ve(e.type.render,!1);case 1:return Ve(e.type,!0);case 31:return ze(`Activity`);case 30:return ze(`ViewTransition`);default:return``}}function Ue(e){try{var t=``,n=null;do t+=He(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var We=Object.prototype.hasOwnProperty,Ge=t.unstable_scheduleCallback,Ke=t.unstable_cancelCallback,qe=t.unstable_shouldYield,Je=t.unstable_requestPaint,Ye=t.unstable_now,Xe=t.unstable_getCurrentPriorityLevel,Ze=t.unstable_ImmediatePriority,Qe=t.unstable_UserBlockingPriority,$e=t.unstable_NormalPriority,et=t.unstable_LowPriority,tt=t.unstable_IdlePriority,nt=t.log,rt=t.unstable_setDisableYieldValue,it=null,at=null;function ot(e){if(typeof nt==`function`&&rt(e),at&&typeof at.setStrictMode==`function`)try{at.setStrictMode(it,e)}catch{}}var st=Math.clz32?Math.clz32:ut,ct=Math.log,lt=Math.LN2;function ut(e){return e>>>=0,e===0?32:31-(ct(e)/lt|0)|0}var dt=256,ft=262144,pt=4194304;function mt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ht(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=mt(n))):i=mt(o):i=mt(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=mt(n))):i=mt(o)):i=mt(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function gt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function _t(e,t){t&8&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var r=31-st(n),i=1<<r;t|=e[r],n&=~i}return t}function vt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yt(){var e=pt;return pt<<=1,!(pt&62914560)&&(pt=4194304),e}function bt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function xt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function St(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-st(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&Ct(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function Ct(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-st(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function wt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-st(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function Tt(e,t){var n=t&-t;return n=n&42?1:Et(n),(n&(e.suspendedLanes|t))===0?n:0}function Et(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Dt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function Ot(){var e=k.p;return e===0?(e=window.event,e===void 0?32:Ch(e.type)):e}function kt(e,t){var n=k.p;try{return k.p=e,t()}finally{k.p=n}}var At=Math.random().toString(36).slice(2),jt=`__reactFiber$`+At,Mt=`__reactProps$`+At,Nt=`__reactContainer$`+At,Pt=`__reactEvents$`+At,Ft=`__reactListeners$`+At,It=`__reactHandles$`+At,Lt=`__reactResources$`+At,Rt=`__reactMarker$`+At,zt=`__reactLoad$`+At;function Bt(e){delete e[jt],delete e[Mt],delete e[Ft],delete e[It]}function Vt(e){var t;if(t=e[jt])return t;for(var n=e.parentNode;n;){if(t=n[Nt]||n[jt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=fm(e);e!==null;){if(n=e[jt])return n;e=fm(e)}return t}e=n,n=e.parentNode}return null}function Ht(e){if(e=e[jt]||e[Nt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ut(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Wt(e){var t=e[Lt];return t||=e[Lt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Gt(e){e[Rt]=!0}function Kt(e){e[zt]=void 0}var qt=new Set,Jt={};function Yt(e,t){Xt(e,t),Xt(e+`Capture`,t)}function Xt(e,t){for(Jt[e]=t,e=0;e<t.length;e++)qt.add(t[e])}var Zt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Qt={},$t={};function en(e){return We.call($t,e)?!0:We.call(Qt,e)?!1:Zt.test(e)?$t[e]=!0:(Qt[e]=!0,!1)}var A=!1;function tn(){var e=A;return A=!1,e}function nn(e,t,n){if(en(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,n)}}}function rn(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,n)}}function an(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,r)}}function on(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function sn(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function cn(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ln(e){if(!e._valueTracker){var t=sn(e)?`checked`:`value`;e._valueTracker=cn(e,t,``+e[t])}}function un(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=sn(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}var dn=/[\n"\\]/g;function fn(e){return e.replace(dn,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function pn(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+on(t)):e.value!==``+on(t)&&(e.value=``+on(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):hn(e,on(n)):o===`number`&&e.value==t?hn(e,on(e.value)):hn(e,on(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+on(s):e.removeAttribute(`name`)}function mn(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){ln(e);return}n=n==null?``:``+on(n),t=t==null?n:``+on(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),ln(e)}function hn(e,t){e.defaultValue!==``+t&&(e.defaultValue=``+t)}function gn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+on(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function _n(e,t,n){if(t!=null&&(t=``+on(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+on(n)}function vn(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(Se(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=on(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),ln(e)}function yn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var bn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function xn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||bn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function Sn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``,A=!0);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&(xn(e,a,r),A=!0)}else for(var o in t)t.hasOwnProperty(o)&&xn(e,o,t[o])}function Cn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var wn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`maskType`,`mask-type`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),Tn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function En(e){return Tn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function Dn(){}var On=null;function kn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var An=null,jn=null;function Mn(e){var t=Ht(e);if(t&&(e=t.stateNode)){var n=e[Mt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(pn(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+fn(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[Mt]||null;if(!a)throw Error(i(90));pn(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&un(r)}break a;case`textarea`:_n(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&gn(e,!!n.multiple,t,!1)}}}var Nn=!1;function Pn(e,t,n){if(Nn)return e(t,n);Nn=!0;try{return e(t)}finally{if(Nn=!1,(An!==null||jn!==null)&&(zd(),An&&(t=An,e=jn,jn=An=null,Mn(t),e)))for(t=0;t<e.length;t++)Mn(e[t])}}function Fn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[Mt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var In=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,Ln=!1;if(In)try{var Rn={};Object.defineProperty(Rn,"passive",{get:function(){Ln=!0}}),window.addEventListener(`test`,Rn,Rn),window.removeEventListener(`test`,Rn,Rn)}catch{Ln=!1}var zn=null,Bn=null,Vn=null;function Hn(){if(Vn)return Vn;var e,t=Bn,n=t.length,r,i=`value`in zn?zn.value:zn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Vn=i.slice(e,1<r?1-r:void 0)}function Un(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Wn(){return!0}function Gn(){return!1}function j(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Wn:Gn,this.isPropagationStopped=Gn,this}return T(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Wn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Wn)},persist:function(){},isPersistent:Wn}),t}var Kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qn=j(Kn),Jn=T({},Kn,{view:0,detail:0}),Yn=j(Jn),Xn,Zn,Qn,$n=T({},Jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ur,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Qn&&(Qn&&e.type===`mousemove`?(Xn=e.screenX-Qn.screenX,Zn=e.screenY-Qn.screenY):Zn=Xn=0,Qn=e),Xn)},movementY:function(e){return`movementY`in e?e.movementY:Zn}}),er=j($n),tr=j(T({},$n,{dataTransfer:0})),nr=j(T({},Jn,{relatedTarget:0})),rr=j(T({},Kn,{animationName:0,elapsedTime:0,pseudoElement:0})),ir=j(T({},Kn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),ar=j(T({},Kn,{data:0})),or={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},sr={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},cr={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function lr(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=cr[e])?!!t[e]:!1}function ur(){return lr}var dr=j(T({},Jn,{key:function(e){if(e.key){var t=or[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Un(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?sr[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ur,charCode:function(e){return e.type===`keypress`?Un(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Un(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),fr=j(T({},$n,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),pr=j(T({},Kn,{submitter:0})),mr=j(T({},Jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ur})),hr=j(T({},Kn,{propertyName:0,elapsedTime:0,pseudoElement:0})),gr=j(T({},$n,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),_r=j(T({},Kn,{newState:0,oldState:0,source:0})),vr=[9,13,27,32],yr=In&&`CompositionEvent`in window,br=null;In&&`documentMode`in document&&(br=document.documentMode);var xr=In&&`TextEvent`in window&&!br,Sr=In&&(!yr||br&&8<br&&11>=br),Cr=` `,wr=!1;function Tr(e,t){switch(e){case`keyup`:return vr.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function Er(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var Dr=!1;function Or(e,t){switch(e){case`compositionend`:return Er(t);case`keypress`:return t.which===32?(wr=!0,Cr):null;case`textInput`:return e=t.data,e===Cr&&wr?null:e;default:return null}}function kr(e,t){if(Dr)return e===`compositionend`||!yr&&Tr(e,t)?(e=Hn(),Vn=Bn=zn=null,Dr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return Sr&&t.locale!==`ko`?null:t.data;default:return null}}var Ar={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!Ar[e.type]:t===`textarea`}function Mr(e,t,n,r){An?jn?jn.push(r):jn=[r]:An=r,t=Jf(t,`onChange`),0<t.length&&(n=new qn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var Nr=null,Pr=null;function Fr(e){Vf(e,0)}function Ir(e){if(un(Ut(e)))return e}function Lr(e,t){if(e===`change`)return t}var Rr=!1;if(In){var zr;if(In){var Br=`oninput`in document;if(!Br){var Vr=document.createElement(`div`);Vr.setAttribute(`oninput`,`return;`),Br=typeof Vr.oninput==`function`}zr=Br}else zr=!1;Rr=zr&&(!document.documentMode||9<document.documentMode)}function Hr(){Nr&&(Nr.detachEvent(`onpropertychange`,Ur),Pr=Nr=null)}function Ur(e){if(e.propertyName===`value`&&Ir(Pr)){var t=[];Mr(t,Pr,e,kn(e)),Pn(Fr,t)}}function Wr(e,t,n){e===`focusin`?(Hr(),Nr=t,Pr=n,Nr.attachEvent(`onpropertychange`,Ur)):e===`focusout`&&Hr()}function Gr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return Ir(Pr)}function Kr(e,t){if(e===`click`)return Ir(t)}function qr(e,t){if(e===`input`||e===`change`)return Ir(t)}function Jr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Yr=typeof Object.is==`function`?Object.is:Jr;function Xr(e,t){if(Yr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!We.call(t,i)||!Yr(e[i],t[i]))return!1}return!0}function Zr(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function Qr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $r(e,t){var n=Qr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Qr(n)}}function ei(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ei(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ti(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Zr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Zr(e.document)}return t}function ni(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var ri=In&&`documentMode`in document&&11>=document.documentMode,ii=null,ai=null,oi=null,si=!1;function ci(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;si||ii==null||ii!==Zr(r)||(r=ii,`selectionStart`in r&&ni(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),oi&&Xr(oi,r)||(oi=r,r=Jf(ai,`onSelect`),0<r.length&&(t=new qn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=ii)))}function li(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var ui={animationend:li(`Animation`,`AnimationEnd`),animationiteration:li(`Animation`,`AnimationIteration`),animationstart:li(`Animation`,`AnimationStart`),transitionrun:li(`Transition`,`TransitionRun`),transitionstart:li(`Transition`,`TransitionStart`),transitioncancel:li(`Transition`,`TransitionCancel`),transitionend:li(`Transition`,`TransitionEnd`)},di={},fi={};In&&(fi=document.createElement(`div`).style,`AnimationEvent`in window||(delete ui.animationend.animation,delete ui.animationiteration.animation,delete ui.animationstart.animation),`TransitionEvent`in window||delete ui.transitionend.transition);function pi(e){if(di[e])return di[e];if(!ui[e])return e;var t=ui[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in fi)return di[e]=t[n];return e}var mi=pi(`animationend`),hi=pi(`animationiteration`),gi=pi(`animationstart`),_i=pi(`transitionrun`),vi=pi(`transitionstart`),yi=pi(`transitioncancel`),bi=pi(`transitionend`),xi=new Map,Si=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Si.push(`scrollEnd`);function Ci(e,t){xi.set(e,t),Yt(t,[e])}var wi=0;function Ti(e,t){if(e.name!=null&&e.name!==`auto`)return e.name;if(t.autoName!==null)return t.autoName;e=bd.identifierPrefix;var n=wi++;return e=`_`+e+`t_`+n.toString(32)+`_`,t.autoName=e}function Ei(e){if(e==null||typeof e==`string`)return e;var t=null,n=Od;if(n!==null)for(var r=0;r<n.length;r++){var i=e[n[r]];if(i!=null){if(i===`none`)return`none`;t=t==null?i:t+(` `+i)}}return t??e.default}function Di(e,t){return e=Ei(e),t=Ei(t),t==null?e===`auto`?null:e:t===`auto`?null:t}var Oi=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ki=[],Ai=0,ji=0;function Mi(){for(var e=Ai,t=ji=Ai=0;t<e;){var n=ki[t];ki[t++]=null;var r=ki[t];ki[t++]=null;var i=ki[t];ki[t++]=null;var a=ki[t];if(ki[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&M(n,i,a)}}function Ni(e,t,n,r){ki[Ai++]=e,ki[Ai++]=t,ki[Ai++]=n,ki[Ai++]=r,ji|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Pi(e,t,n,r){return Ni(e,t,n,r),Ii(e)}function Fi(e,t){return Ni(e,null,null,t),Ii(e)}function M(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-st(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function Ii(e){if(50<kd)throw kd=0,Ad=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Li={};function Ri(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zi(e,t,n,r){return new Ri(e,t,n,r)}function Bi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Vi(e,t){var n=e.alternate;return n===null?(n=zi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Hi(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ui(e,t,n,r,a,o){var s=0;if(r=e,typeof r==`function`)Bi(r)&&(s=1);else if(typeof r==`string`)s=qm(e,n,ke.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(r){case pe:return e=zi(31,n,t,a),e.elementType=pe,e.lanes=o,e;case ie:return Wi(n.children,a,o,t);case ae:s=8,a|=24;break;case D:return e=zi(12,n,t,a|2),e.elementType=D,e.lanes=o,e;case le:return e=zi(13,n,t,a),e.elementType=le,e.lanes=o,e;case ue:return e=zi(19,n,t,a),e.elementType=ue,e.lanes=o,e;case me:case ge:return e=a|32,e=zi(30,n,t,e),e.elementType=ge,e.lanes=o,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r==`object`&&r)switch(r.$$typeof){case se:s=10;break a;case oe:s=9;break a;case ce:s=11;break a;case de:s=14;break a;case fe:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=zi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function Wi(e,t,n,r){return e=zi(7,e,r,t),e.lanes=n,e}function Gi(e,t,n){return e=zi(6,e,null,t),e.lanes=n,e}function Ki(e){var t=zi(18,null,null,0);return t.stateNode=e,t}function qi(e,t,n){return t=zi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ji=new WeakMap;function Yi(e,t){if(typeof e==`object`&&e){var n=Ji.get(e);return n===void 0?(t={value:e,source:t,stack:Ue(t)},Ji.set(e,t),t):n}return{value:e,source:t,stack:Ue(t)}}var Xi=[],Zi=0,Qi=null,$i=0,ea=[],ta=0,na=null,ra=1,ia=``;function aa(e,t){Xi[Zi++]=$i,Xi[Zi++]=Qi,Qi=e,$i=t}function oa(e,t,n){ea[ta++]=ra,ea[ta++]=ia,ea[ta++]=na,na=e;var r=ra;e=ia;var i=32-st(r)-1;r&=~(1<<i),n+=1;var a=32-st(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ra=1<<32-st(t)+i|n<<i|r,ia=a+e}else ra=1<<a|n<<i|r,ia=e}function sa(e){e.return!==null&&(aa(e,1),oa(e,1,0))}function ca(e){for(;e===Qi;)Qi=Xi[--Zi],Xi[Zi]=null,$i=Xi[--Zi],Xi[Zi]=null;for(;e===na;)na=ea[--ta],ea[ta]=null,ia=ea[--ta],ea[ta]=null,ra=ea[--ta],ea[ta]=null}function la(e,t){ea[ta++]=ra,ea[ta++]=ia,ea[ta++]=na,ra=t.id,ia=t.overflow,na=e}var ua=null,da=null,N=!1,fa=null,pa=!1,ma=Error(i(519));function ha(e){throw xa(Yi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),ma}function ga(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[jt]=e,t[Mt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<zf.length;n++)Q(zf[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),mn(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),vn(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||ep(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=Dn),t=!0):t=!1,t||ha(e,!0)}function _a(e){for(ua=e.return;ua;)switch(ua.tag){case 5:case 31:case 13:pa=!1;return;case 27:case 3:pa=!0;return;default:ua=ua.return}}function va(e){if(e!==ua)return!1;if(!N)return _a(e),N=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||pp(e.type,e.memoizedProps)),n=!n),n&&da&&ha(e),_a(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));da=dm(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));da=dm(e)}else t===27?(t=da,Sp(e.type)?(e=um,um=null,da=e):da=t):da=ua?lm(e.stateNode.nextSibling):null;return!0}function ya(){da=ua=null,N=!1}function ba(){var e=fa;return e!==null&&(fd===null?fd=e:fd.push.apply(fd,e),fa=null),e}function xa(e){fa===null?fa=[e]:fa.push(e)}var Sa=Ee(null),Ca=null,wa=null;function Ta(e,t,n){Oe(Sa,t._currentValue),t._currentValue=n}function Ea(e){e._currentValue=Sa.current,De(Sa)}function Da(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Oa(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Da(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Da(s,n,e),s=null}else a.tag===13&&a.memoizedState!==null&&a.memoizedState.dehydrated===null?(a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Da(a.return,n,e),s=a.child,s=s===null?null:s.sibling):s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function ka(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Yr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===Me.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[sh]:e.push(sh))}a=a.return}return e!==null&&Oa(t,e,n,r),t.flags|=262144,e!==null}function Aa(e){for(e=e.firstContext;e!==null;){if(!Yr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ja(e){Ca=e,wa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ma(e){return Pa(Ca,e)}function Na(e,t){return Ca===null&&ja(e),Pa(e,t)}function Pa(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},wa===null){if(e===null)throw Error(i(308));wa=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else wa=wa.next=t;return n}var Fa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},Ia=t.unstable_scheduleCallback,La=t.unstable_NormalPriority,Ra={$$typeof:se,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function za(){return{controller:new Fa,data:new Map,refCount:0}}function Ba(e){e.refCount--,e.refCount===0&&Ia(La,function(){e.controller.abort()})}function Va(e,t){if(e.pendingLanes&4194048){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var r=t[e];n.indexOf(r)===-1&&n.push(r)}}}var Ha=null;function Ua(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var Wa=null,Ga=0,Ka=0,qa=null;function Ja(e,t){if(Wa===null){var n=Wa=[];Ga=0,Ka=Pf(),qa={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return Ga++,t.then(Ya,Ya),t}function Ya(){if(--Ga===0&&(Ha=null,Wa!==null)){qa!==null&&(qa.status=`fulfilled`);var e=Wa;Wa=null,Ka=0,qa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Xa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Za=O.S;O.S=function(e,t){if(hd=Ye(),typeof t==`object`&&t&&typeof t.then==`function`&&Ja(e,t),Ha!==null)for(var n=bf;n!==null;)Va(n,Ha),n=n.next;if(n=e.types,n!==null){for(var r=bf;r!==null;)Va(r,n),r=r.next;if(Ka!==0){r=Ha,r===null&&(r=Ha=[]);for(var i=0;i<n.length;i++){var a=n[i];r.indexOf(a)===-1&&r.push(a)}}}Za!==null&&Za(e,t)};var Qa=Ee(null);function $a(){var e=Qa.current;return e===null?q.pooledCache:e}function eo(e,t){t===null?Oe(Qa,Qa.current):Oe(Qa,t.pool)}function to(){var e=$a();return e===null?null:{parent:Ra._currentValue,pool:e}}var no=Error(i(460)),ro=Error(i(474)),io=Error(i(542)),ao={then:function(){}};function oo(e){return e=e.status,e===`fulfilled`||e===`rejected`}function so(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Dn,Dn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,fo(e),e===void 0&&!(`reason`in t)?Error(i(600)):e;default:if(typeof t.status==`string`)t.then(Dn,Dn);else{if(e=q,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,fo(e),e}throw lo=t,no}}function co(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(lo=e,no):e}}var lo=null;function uo(){if(lo===null)throw Error(i(459));var e=lo;return lo=null,e}function fo(e){if(e===no||e===io)throw Error(i(483))}var po=null,mo=0;function ho(e){var t=mo;return mo+=1,po===null&&(po=[]),so(po,e,t)}function go(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function _o(e,t){throw t.$$typeof===E?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function vo(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=Vi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=134217730,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=134217730),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Gi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===ie?(e=d(e,t,n.props.children,r,n.key),go(e,n),e):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===fe&&co(i)===t.type)?(t=a(t,n.props),go(t,n),t.return=e,t):(t=Ui(n.type,n.key,n.props,null,e.mode,r),go(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=qi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=Wi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Gi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case ne:return n=Ui(t.type,t.key,t.props,null,e.mode,n),go(n,t),n.return=e,n;case re:return t=qi(t,e.mode,n),t.return=e,t;case fe:return t=co(t),f(e,t,n)}if(Se(t)||ye(t))return t=Wi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,ho(t),n);if(t.$$typeof===se)return f(e,Na(e,t),n);_o(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case ne:return n.key===i?l(e,t,n,r):null;case re:return n.key===i?u(e,t,n,r):null;case fe:return n=co(n),p(e,t,n,r)}if(Se(n)||ye(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,ho(n),r);if(n.$$typeof===se)return p(e,t,Na(e,n),r);_o(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case ne:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case re:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case fe:return r=co(r),m(e,t,n,r,i)}if(Se(r)||ye(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,ho(r),i);if(r.$$typeof===se)return m(e,t,n,Na(t,r),i);_o(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),N&&aa(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return N&&aa(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&(_=g.alternate,_!==null&&d.delete(_.key===null?h:_.key)),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),N&&aa(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),N&&aa(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return N&&aa(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&(_=v.alternate,_!==null&&h.delete(_.key===null?g:_.key)),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),N&&aa(a,g),u}function _(e,r,o,c){if(typeof o==`object`&&o&&o.type===ie&&o.key===null&&o.props.ref===void 0&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case ne:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===ie){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),go(c,o),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===fe&&co(l)===r.type){n(e,r.sibling),c=a(r,o.props),go(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===ie?(c=Wi(o.props.children,e.mode,c,o.key),go(c,o),c.return=e,e=c):(c=Ui(o.type,o.key,o.props,null,e.mode,c),go(c,o),c.return=e,e=c)}return s(e);case re:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=qi(o,e.mode,c),c.return=e,e=c}return s(e);case fe:return o=co(o),_(e,r,o,c)}if(Se(o))return h(e,r,o,c);if(ye(o)){if(l=ye(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return _(e,r,ho(o),c);if(o.$$typeof===se)return _(e,r,Na(e,o),c);_o(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=Gi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{mo=0;var i=_(e,t,n,r);return po=null,i}catch(t){if(t===no||t===io)throw t;var a=zi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var yo=vo(!0),bo=vo(!1),xo=!1;function So(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Co(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function wo(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function To(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=Ii(e),M(e,null,n),t}return Ni(e,r,t,n),Ii(e)}function Eo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,wt(e,n)}}function Do(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var P=!1;function F(){if(P){var e=qa;if(e!==null)throw e}}function Oo(e,t,n,r){P=!1;var i=e.updateQueue;xo=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Y&f)===f:(r&f)===f){f!==0&&f===Ka&&(P=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,h=s;f=t;var g=n;switch(h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(g,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(g,d,f):m,f==null)break a;d=T({},d,f);break a;case 2:xo=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),od|=o,e.lanes=o,e.memoizedState=d}}function ko(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function Ao(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)ko(n[e],t)}var jo=Ee(null),Mo=Ee(0);function No(e,t){e=id,Oe(Mo,e),Oe(jo,t),id=e|t.baseLanes}function Po(){Oe(Mo,id),Oe(jo,jo.current)}function Fo(){id=Mo.current,De(jo),De(Mo)}var I=Ee(null),L=null;function Io(e){var t=e.alternate;Oe(Vo,Vo.current&1),Oe(I,e),L===null&&(t===null||jo.current!==null||t.memoizedState!==null)&&(L=e)}function Lo(e){Oe(Vo,Vo.current),Oe(I,e),L===null&&(L=e)}function Ro(e){e.tag===22?(Oe(Vo,Vo.current),Oe(I,e),L===null&&(L=e)):zo()}function zo(){Oe(Vo,Vo.current),Oe(I,I.current)}function Bo(e){De(I),L===e&&(L=null),De(Vo)}var Vo=Ee(0);function Ho(e,t){Oe(I,I.current),Oe(Vo,t)}function Uo(e){De(Vo),De(I),L===e&&(L=null)}function Wo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||om(n)||sm(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==`independent`){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Go=0,R=null,z=null,Ko=null,qo=!1,Jo=!1,Yo=!1,Xo=0,Zo=0,Qo=null,$o=0;function es(){throw Error(i(321))}function ts(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Yr(e[n],t[n]))return!1;return!0}function ns(e,t,n,r,i,a){return Go=a,R=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,O.H=e===null||e.memoizedState===null?yc:bc,Yo=!1,a=n(r,i),Yo=!1,Jo&&(a=is(t,n,r,i)),rs(e),a}function rs(e){O.H=vc;var t=z!==null&&z.next!==null;if(Go=0,Ko=z=R=null,qo=!1,Zo=0,Qo=null,t)throw Error(i(300));e===null||Ic||(e=e.dependencies,e!==null&&Aa(e)&&(Ic=!0))}function is(e,t,n,r){R=e;var a=0;do{if(Jo&&(Qo=null),Zo=0,Jo=!1,25<=a)throw Error(i(301));if(a+=1,Ko=z=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}O.H=xc,o=t(n,r)}while(Jo);return o}function as(){var e=O.H,t=e.useState()[0];return t=typeof t.then==`function`?fs(t):t,e=e.useState()[0],(z===null?null:z.memoizedState)!==e&&(R.flags|=1024),t}function os(){var e=Xo!==0;return Xo=0,e}function ss(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function cs(e){if(qo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}qo=!1}Go=0,Ko=z=R=null,Jo=!1,Zo=Xo=0,Qo=null}function ls(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ko===null?R.memoizedState=Ko=e:Ko=Ko.next=e,Ko}function us(){if(z===null){var e=R.alternate;e=e===null?null:e.memoizedState}else e=z.next;var t=Ko===null?R.memoizedState:Ko.next;if(t!==null)Ko=t,z=e;else{if(e===null)throw R.alternate===null?Error(i(467)):Error(i(310));z=e,e={memoizedState:z.memoizedState,baseState:z.baseState,baseQueue:z.baseQueue,queue:z.queue,next:null},Ko===null?R.memoizedState=Ko=e:Ko=Ko.next=e}return Ko}function ds(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function fs(e){var t=Zo;return Zo+=1,Qo===null&&(Qo=[]),e=so(Qo,e,t),t=R,(Ko===null?t.memoizedState:Ko.next)===null&&(t=t.alternate,O.H=t===null||t.memoizedState===null?yc:bc),e}function ps(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return fs(e);if(e.$$typeof===_e)return;if(e.$$typeof===se)return Ma(e)}throw Error(i(438,String(e)))}function ms(e){var t=null,n=R.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=R.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=ds(),R.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=he;return t.index++,n}function hs(e,t){return typeof t==`function`?t(e):t}function gs(e){return _s(us(),z,e)}function _s(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(Go&f)===f:(Y&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===Ka&&(d=!0);else if((Go&p)===p){u=u.next,p===Ka&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,R.lanes|=p,od|=p;f=u.action,Yo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,R.lanes|=f,od|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Yr(o,e.memoizedState)&&(Ic=!0,d&&(n=qa,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function vs(e){var t=us(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Yr(o,t.memoizedState)||(Ic=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function ys(e,t,n){var r=R,a=us(),o=N;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Yr((z||a).memoizedState,n);if(s&&(a.memoizedState=n,Ic=!0),a=a.queue,Ws(Ss.bind(null,r,a,e),[e]),e=a.getSnapshot!==t||s||Ko!==null&&!!(Ko.memoizedState.tag&1),zs(e?9:8,{destroy:void 0},xs.bind(null,r,a,n,t),null),e){if(r.flags|=2048,q===null)throw Error(i(349));o||Go&127||bs(r,t,n)}return n}function bs(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=R.updateQueue,t===null?(t=ds(),R.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function xs(e,t,n,r){t.value=n,t.getSnapshot=r,Cs(t)&&ws(e)}function Ss(e,t,n){return n(function(){Cs(t)&&ws(e)})}function Cs(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Yr(e,n)}catch{return!0}}function ws(e){var t=Fi(e,2);t!==null&&Pd(t,e,2)}function Ts(e){var t=ls();if(typeof e==`function`){var n=e;if(e=n(),Yo){ot(!0);try{n()}finally{ot(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:hs,lastRenderedState:e},t}function Es(e,t,n,r){return e.baseState=n,_s(e,z,typeof r==`function`?r:hs)}function Ds(e,t,n,r,a){if(hc(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};O.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Os(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Os(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=O.T,o={};o.types=a===null?null:a.types,O.T=o;try{var s=n(i,r),c=O.S;c!==null&&c(o,s),ks(e,t,s)}catch(n){js(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),O.T=a}}else try{a=n(i,r),ks(e,t,a)}catch(n){js(e,t,n)}}function ks(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){As(e,t,n)},function(n){return js(e,t,n)}):As(e,t,n)}function As(e,t,n){t.status=`fulfilled`,t.value=n,Ms(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Os(e,n)))}function js(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Ms(t),t=t.next;while(t!==r)}e.action=null}function Ms(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ns(e,t){return t}function Ps(e,t){if(N){var n=q.formState;if(n!==null){a:{var r=R;if(N){if(da){b:{for(var i=da,a=pa;i.nodeType!==8;){if(!a){i=null;break b}if(i=lm(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){da=lm(i.nextSibling),r=i.data===`F!`;break a}}ha(r)}r=!1}r&&(t=n[0])}}return n=ls(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ns,lastRenderedState:t},n.queue=r,n=fc.bind(null,R,r),r.dispatch=n,r=Ts(!1),a=mc.bind(null,R,!1,r.queue),r=ls(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Ds.bind(null,R,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function Fs(e){return Is(us(),z,e)}function Is(e,t,n){if(t=_s(e,t,Ns)[0],e=gs(hs)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=fs(t)}catch(e){throw e===no?io:e}else r=t;t=us();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(R.flags|=2048,zs(9,{destroy:void 0},Ls.bind(null,i,n),null)),[r,a,e]}function Ls(e,t){e.action=t}function Rs(e){var t=us(),n=z;if(n!==null)return Is(t,n,e);us(),t=t.memoizedState,n=us();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function zs(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=R.updateQueue,t===null&&(t=ds(),R.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Bs(){return us().memoizedState}function Vs(e,t,n,r){var i=ls();R.flags|=e,i.memoizedState=zs(1|t,{destroy:void 0},n,r===void 0?null:r)}function Hs(e,t,n,r){var i=us();r=r===void 0?null:r;var a=i.memoizedState.inst;z!==null&&r!==null&&ts(r,z.memoizedState.deps)?i.memoizedState=zs(t,a,n,r):(R.flags|=e,i.memoizedState=zs(1|t,a,n,r))}function Us(e,t){Vs(8390656,8,e,t)}function Ws(e,t){Hs(2048,8,e,t)}function Gs(e){R.flags|=4;var t=R.updateQueue;if(t===null)t=ds(),R.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Ks(e){var t=us().memoizedState;return Gs({ref:t,nextImpl:e}),function(){if(K&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function qs(e,t){return Hs(4,2,e,t)}function Js(e,t){return Hs(4,4,e,t)}function Ys(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Xs(e,t,n){n=n==null?null:n.concat([e]),Hs(4,4,Ys.bind(null,t,e),n)}function Zs(){}function Qs(e,t){var n=us();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&ts(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function $s(e,t){var n=us();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&ts(t,r[1]))return r[0];if(r=e(),Yo){ot(!0);try{e()}finally{ot(!1)}}return n.memoizedState=[r,t],r}function ec(e,t,n){return n===void 0||Go&1073741824&&!(Y&261930)?e.memoizedState=t:(e.memoizedState=n,e=Md(),R.lanes|=e,od|=e,n)}function tc(e,t,n,r){return Yr(n,t)?n:jo.current===null?!(Go&106)||Go&1073741824&&!(Y&261930)?(Ic=!0,e.memoizedState=n):(e=Md(),R.lanes|=e,od|=e,t):(e=ec(e,n,r),Yr(e,t)||(Ic=!0),e)}function nc(e,t,n,r,i){var a=k.p;k.p=a!==0&&8>a?a:8;var o=O.T,s={};s.types=o===null?null:o.types,O.T=s,mc(e,!1,t,n);try{var c=i(),l=O.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?pc(e,t,Xa(c,r),jd(e)):pc(e,t,r,jd(e))}catch(n){pc(e,t,{then:function(){},status:`rejected`,reason:n},jd())}finally{k.p=a,o!==null&&s.types!==null&&(o.types=s.types),O.T=o}}function rc(){}function ic(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=ac(e).queue;nc(e,a,t,Ce,n===null?rc:function(){return oc(e),n(r)})}function ac(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Ce,baseState:Ce,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:hs,lastRenderedState:Ce},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:hs,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function oc(e){var t=ac(e);t.next===null&&(t=e.alternate.memoizedState),pc(e,t.next.queue,{},jd())}function sc(){return Ma(sh)}function cc(){return us().memoizedState}function lc(){return us().memoizedState}function uc(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=jd();e=wo(n);var r=To(t,e,n);r!==null&&(Pd(r,t,n),Eo(r,t,n)),t={cache:za()},e.payload=t;return}t=t.return}}function dc(e,t,n){var r=jd();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},hc(e)?gc(t,n):(n=Pi(e,t,n,r),n!==null&&(Pd(n,e,r),_c(n,t,r)))}function fc(e,t,n){pc(e,t,n,jd())}function pc(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(hc(e))gc(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Yr(s,o))return Ni(e,t,i,0),q===null&&Mi(),!1}catch{}if(n=Pi(e,t,i,r),n!==null)return Pd(n,e,r),_c(n,t,r),!0}return!1}function mc(e,t,n,r){if(r={lane:2,revertLane:Pf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},hc(e)){if(t)throw Error(i(479))}else t=Pi(e,n,r,2),t!==null&&Pd(t,e,2)}function hc(e){var t=e.alternate;return e===R||t!==null&&t===R}function gc(e,t){Jo=qo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function _c(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,wt(e,n)}}var vc={readContext:Ma,use:ps,useCallback:es,useContext:es,useEffect:es,useImperativeHandle:es,useLayoutEffect:es,useInsertionEffect:es,useMemo:es,useReducer:es,useRef:es,useState:es,useDebugValue:es,useDeferredValue:es,useTransition:es,useSyncExternalStore:es,useId:es,useHostTransitionStatus:es,useFormState:es,useActionState:es,useOptimistic:es,useMemoCache:es,useCacheRefresh:es,useEffectEvent:es},yc={readContext:Ma,use:ps,useCallback:function(e,t){return ls().memoizedState=[e,t===void 0?null:t],e},useContext:Ma,useEffect:Us,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),Vs(4194308,4,Ys.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Vs(4194308,4,e,t)},useInsertionEffect:function(e,t){Vs(4,2,e,t)},useMemo:function(e,t){var n=ls();t=t===void 0?null:t;var r=e();if(Yo){ot(!0);try{e()}finally{ot(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=ls();if(n!==void 0){var i=n(t);if(Yo){ot(!0);try{n(t)}finally{ot(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=dc.bind(null,R,e),[r.memoizedState,e]},useRef:function(e){var t=ls();return e={current:e},t.memoizedState=e},useState:function(e){e=Ts(e);var t=e.queue,n=fc.bind(null,R,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Zs,useDeferredValue:function(e,t){return ec(ls(),e,t)},useTransition:function(){var e=Ts(!1);return e=nc.bind(null,R,e.queue,!0,!1),ls().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=R,a=ls();if(N){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),q===null)throw Error(i(349));Y&127||bs(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Us(Ss.bind(null,r,o,e),[e]),r.flags|=2048,zs(9,{destroy:void 0},xs.bind(null,r,o,n,t),null),n},useId:function(){var e=ls(),t=q.identifierPrefix;if(N){var n=ia,r=ra;n=(r&~(1<<32-st(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=Xo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=$o++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:sc,useFormState:Ps,useActionState:Ps,useOptimistic:function(e){var t=ls();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=mc.bind(null,R,!0,n),n.dispatch=t,[e,t]},useMemoCache:ms,useCacheRefresh:function(){return ls().memoizedState=uc.bind(null,R)},useEffectEvent:function(e){var t=ls(),n={impl:e};return t.memoizedState=n,function(){if(K&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},bc={readContext:Ma,use:ps,useCallback:Qs,useContext:Ma,useEffect:Ws,useImperativeHandle:Xs,useInsertionEffect:qs,useLayoutEffect:Js,useMemo:$s,useReducer:gs,useRef:Bs,useState:function(){return gs(hs)},useDebugValue:Zs,useDeferredValue:function(e,t){return tc(us(),z.memoizedState,e,t)},useTransition:function(){var e=gs(hs)[0],t=us().memoizedState;return[typeof e==`boolean`?e:fs(e),t]},useSyncExternalStore:ys,useId:cc,useHostTransitionStatus:sc,useFormState:Fs,useActionState:Fs,useOptimistic:function(e,t){return Es(us(),z,e,t)},useMemoCache:ms,useCacheRefresh:lc,useEffectEvent:Ks},xc={readContext:Ma,use:ps,useCallback:Qs,useContext:Ma,useEffect:Ws,useImperativeHandle:Xs,useInsertionEffect:qs,useLayoutEffect:Js,useMemo:$s,useReducer:vs,useRef:Bs,useState:function(){return vs(hs)},useDebugValue:Zs,useDeferredValue:function(e,t){var n=us();return z===null?ec(n,e,t):tc(n,z.memoizedState,e,t)},useTransition:function(){var e=vs(hs)[0],t=us().memoizedState;return[typeof e==`boolean`?e:fs(e),t]},useSyncExternalStore:ys,useId:cc,useHostTransitionStatus:sc,useFormState:Rs,useActionState:Rs,useOptimistic:function(e,t){var n=us();return z===null?(n.baseState=e,[e,n.queue.dispatch]):Es(n,z,e,t)},useMemoCache:ms,useCacheRefresh:lc,useEffectEvent:Ks};function Sc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:T({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Cc={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=jd(),i=wo(r);i.payload=t,n!=null&&(i.callback=n),t=To(e,i,r),t!==null&&(Pd(t,e,r),Eo(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=jd(),i=wo(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=To(e,i,r),t!==null&&(Pd(t,e,r),Eo(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=jd(),r=wo(n);r.tag=2,t!=null&&(r.callback=t),t=To(e,r,n),t!==null&&(Pd(t,e,n),Eo(t,e,n))}};function wc(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Xr(n,r)||!Xr(i,a):!0}function Tc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Cc.enqueueReplaceState(t,t.state,null)}function Ec(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=T({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Dc(e){Oi(e)}function Oc(e){console.error(e)}function kc(e){Oi(e)}function Ac(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function jc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Mc(e,t,n){return n=wo(n),n.tag=3,n.payload={element:null},n.callback=function(){Ac(e,t)},n}function Nc(e){return e=wo(e),e.tag=3,e}function Pc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){jc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){jc(t,n,r),typeof i!=`function`&&(vd===null?vd=new Set([this]):vd.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function B(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ka(t,n,a,!0),n=I.current,n!==null){switch(n.tag){case 31:case 13:case 19:return L===null?Kd():n.alternate===null&&ad===0&&(ad=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===ao?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),mf(e,r,a)),!1;case 22:return n.flags|=65536,r===ao?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),mf(e,r,a)),!1}throw Error(i(435,n.tag))}return mf(e,r,a),Kd(),!1}if(N)return t=I.current,t===null?(r!==ma&&(t=Error(i(423),{cause:r}),xa(Yi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Yi(r,n),a=Mc(e.stateNode,r,a),Do(e,a),ad!==4&&(ad=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==ma&&(e=Error(i(422),{cause:r}),xa(Yi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Yi(o,n),dd===null?dd=[o]:dd.push(o),ad!==4&&(ad=2),t===null)return!0;r=Yi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Mc(n.stateNode,r,e),Do(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(vd===null||!vd.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Nc(a),Pc(a,e,n,r),Do(n,a),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var Fc=Error(i(461)),Ic=!1;function Lc(e,t,n,r){t.child=e===null?bo(t,null,n,r):yo(t,e.child,n,r)}function Rc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return ja(t),r=ns(e,t,n,o,a,i),s=os(),e!==null&&!Ic?(ss(e,t,i),fl(e,t,i)):(N&&s&&sa(t),t.flags|=1,Lc(e,t,r,i),t.child)}function zc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!Bi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,Bc(e,t,a,r,i)):(e=Ui(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!pl(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Xr:n,n(o,r)&&e.ref===t.ref)return fl(e,t,i)}return t.flags|=1,e=Vi(a,r),e.ref=t.ref,e.return=t,t.child=e}function Bc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Xr(a,r)&&e.ref===t.ref){if(Ic=!1,t.pendingProps=r=a,pl(e,i))e.flags&131072&&(Ic=!0);else return t.lanes=e.lanes,fl(e,t,i)}}return Jc(e,t,n,r,i)}function Vc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return Uc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&eo(t,a===null?null:a.cachePool),a===null?Po():No(t,a),Ro(t);else return r=t.lanes=536870912,Uc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&eo(t,null),Po(),zo()):(eo(t,a.cachePool),No(t,a),zo(),t.memoizedState=null);return Lc(e,t,i,n),t.child}function Hc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Uc(e,t,n,r,i){var a=$a();return a=a===null?null:{parent:Ra._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&eo(t,null),Po(),Ro(t),e!==null&&ka(e,t,r,!0),t.childLanes=i,null}function Wc(e,t){return t=rl({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Gc(e,t,n){return yo(t,e.child,null,n),e=Wc(t,t.pendingProps),e.flags|=2,Bo(t),t.memoizedState=null,e}function Kc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(N){if(r.mode===`hidden`)return e=Wc(t,r),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Hc(null,e);if(Lo(t),(e=da)?(e=am(e,pa),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:na===null?null:{id:ra,overflow:ia},retryLane:536870912,hydrationErrors:null},n=Ki(e),n.return=t,t.child=n,ua=t,da=null)):e=null,e===null)throw ha(t);return t.lanes=536870912,null}return Wc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(Lo(t),a){if(t.flags&256)t.flags&=-257,t=Gc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(Ic||ka(e,t,n,!1),a=(n&e.childLanes)!==0,Ic||a){if(jo.current===null){if(r=q,r!==null&&(s=Tt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,Fi(e,s),Pd(r,e,s),Fc;Kd()}t=Gc(e,t,n)}else e=o.treeContext,da=lm(s.nextSibling),ua=t,N=!0,fa=null,pa=!1,e!==null&&la(t,e),t=Wc(t,r),t.flags|=134221824;return t}return e=Vi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function qc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Jc(e,t,n,r,i){return ja(t),n=ns(e,t,n,r,void 0,i),r=os(),e!==null&&!Ic?(ss(e,t,i),fl(e,t,i)):(N&&r&&sa(t),t.flags|=1,Lc(e,t,n,i),t.child)}function Yc(e,t,n,r,i,a){return ja(t),t.updateQueue=null,n=is(t,r,n,i),rs(e),r=os(),e!==null&&!Ic?(ss(e,t,a),fl(e,t,a)):(N&&r&&sa(t),t.flags|=1,Lc(e,t,n,a),t.child)}function Xc(e,t,n,r,i){if(ja(t),t.stateNode===null){var a=Li,o=n.contextType;typeof o==`object`&&o&&(a=Ma(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Cc,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},So(t),o=n.contextType,a.context=typeof o==`object`&&o?Ma(o):Li,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Sc(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Cc.enqueueReplaceState(a,a.state,null),Oo(t,r,a,i),F(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Ec(n,s);a.props=c;var l=a.context,u=n.contextType;o=Li,typeof u==`object`&&u&&(o=Ma(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Tc(t,a,r,o),xo=!1;var f=t.memoizedState;a.state=f,Oo(t,r,a,i),F(),l=t.memoizedState,s||f!==l||xo?(typeof d==`function`&&(Sc(t,n,d,r),l=t.memoizedState),(c=xo||wc(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Co(e,t),o=t.memoizedProps,u=Ec(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=Li,typeof l==`object`&&l&&(c=Ma(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Tc(t,a,r,c),xo=!1,f=t.memoizedState,a.state=f,Oo(t,r,a,i),F();var p=t.memoizedState;o!==d||f!==p||xo||e!==null&&e.dependencies!==null&&Aa(e.dependencies)?(typeof s==`function`&&(Sc(t,n,s,r),p=t.memoizedState),(u=xo||wc(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&Aa(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,qc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=yo(t,e.child,null,i),t.child=yo(t,null,n,i)):Lc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=fl(e,t,i),e}function Zc(e,t,n,r){return ya(),t.flags|=256,Lc(e,t,n,r),t.child}var Qc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function $c(e){return{baseLanes:e,cachePool:to()}}function el(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=ld),e}function tl(e,t,n){var r=t.pendingProps,i=!1,a=!!(t.flags&128),o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:!!(Vo.current&2)),o&&(i=!0,t.flags&=-129),o=!!(t.flags&32),t.flags&=-33,e===null){if(N){if(i?Io(t):zo(),(e=da)?(e=am(e,pa),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:na===null?null:{id:ra,overflow:ia},retryLane:536870912,hydrationErrors:null},n=Ki(e),n.return=t,t.child=n,ua=t,da=null)):e=null,e===null)throw ha(t);return t.lanes=sm(e)?32:536870912,null}return a=r.children,r=r.fallback,i?(zo(),i=t.mode,a=rl({mode:`hidden`,children:a},i),r=Wi(r,i,n,null),a.return=t,r.return=t,a.sibling=r,t.child=a,r=t.child,r.memoizedState=$c(n),r.childLanes=el(e,o,n),t.memoizedState=Qc,Hc(null,r)):(Io(t),nl(t,a))}var s=e.memoizedState;if(s!==null){var c=s.dehydrated;if(c!==null)return al(e,t,a,o,r,c,s,n)}return i?(zo(),i=r.fallback,a=t.mode,s=e.child,c=s.sibling,r=Vi(s,{mode:`hidden`,children:r.children}),r.subtreeFlags=s.subtreeFlags&1206910976,c===null?(i=Wi(i,a,n,null),i.flags|=2):i=Vi(c,i),i.return=t,r.return=t,r.sibling=i,t.child=r,Hc(null,r),r=t.child,i=e.child.memoizedState,i===null?i=$c(n):(a=i.cachePool,a===null?a=to():(s=Ra._currentValue,a=a.parent===s?a:{parent:s,pool:s}),i={baseLanes:i.baseLanes|n,cachePool:a}),r.memoizedState=i,r.childLanes=el(e,o,n),t.memoizedState=Qc,Hc(e.child,r)):(Io(t),n=e.child,e=n.sibling,n=Vi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function nl(e,t){return t=rl({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function rl(e,t){return e=zi(22,e,null,t),e.lanes=0,e}function il(e,t,n){return yo(t,e.child,null,n),e=nl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function al(e,t,n,r,a,o,s,c){if(n)return t.flags&256?(Io(t),t.flags&=-257,il(e,t,c)):t.memoizedState===null?(zo(),o=a.fallback,s=t.mode,a=rl({mode:`visible`,children:a.children},s),o=Wi(o,s,c,null),o.flags|=2,a.return=t,o.return=t,a.sibling=o,t.child=a,yo(t,e.child,null,c),a=t.child,a.memoizedState=$c(c),a.childLanes=el(e,r,c),t.memoizedState=Qc,Hc(null,a)):(zo(),t.child=e.child,t.flags|=128,null);if(Io(t),sm(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,r!==``&&(a=Error(i(419)),a.stack=``,a.digest=r,xa({value:a,source:null,stack:null})),il(e,t,c)}if(Ic||ka(e,t,c,!1),r=(c&e.childLanes)!==0,Ic||r){if(jo.current!==null)return il(e,t,c);if(r=q,r!==null&&(a=Tt(r,c),a!==0&&a!==s.retryLane))throw s.retryLane=a,Fi(e,a),Pd(r,e,a),Fc;return om(o)||Kd(),il(e,t,c)}return om(o)?(t.flags|=192,t.child=e.child,null):(e=s.treeContext,da=lm(o.nextSibling),ua=t,N=!0,fa=null,pa=!1,e!==null&&la(t,e),t=nl(t,a.children),t.flags|=134221824,t)}function ol(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Da(e.return,t,n)}function sl(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Wo(n)===null&&(t=e),e=e.sibling}return t}function cl(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function ll(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function ul(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=Vo.current;if(t.flags&128)return Ho(t,o),null;var s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,Ho(t,o),i===`backwards`&&e!==null?(ll(e),Lc(e,t,r,n),ll(e)):Lc(e,t,r,n),r=N?$i:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ol(e,n,t);else if(e.tag===19)ol(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`backwards`:n=sl(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null,ll(t)),cl(t,!0,i,null,a,r);break;case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Wo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}cl(t,!0,n,null,a,r);break;case`together`:cl(t,!1,null,null,void 0,r);break;case`independent`:t.memoizedState=null;break;default:n=sl(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),cl(t,!1,i,n,a,r)}return t.child}function dl(e,t,n){var r=t.pendingProps;return Ta(t,t.type,r.value),Lc(e,t,r.children,n),t.child}function fl(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),od|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(ka(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=Vi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Vi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function pl(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&Aa(e)))}function ml(e,t,n){switch(t.tag){case 3:Ne(t,t.stateNode.containerInfo),Ta(t,Ra,e.memoizedState.cache),ya();break;case 27:case 5:Fe(t);break;case 4:Ne(t,t.stateNode.containerInfo);break;case 10:Ta(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Lo(t),null;break;case 13:var r=t.memoizedState;if(r!==null){if(r.dehydrated!==null)return Io(t),t.flags|=128,null;r=ka(e,t,n,!1);var i=t.child.childLanes;return r||(n&i)!==0?tl(e,t,n):(Io(t),e=fl(e,t,n),e===null?null:e.sibling)}Io(t);break;case 19:if(t.flags&128)return ul(e,t,n);if(i=!!(e.flags&128),r=(n&t.childLanes)!==0,r||=(ka(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return ul(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ho(t,Vo.current),r)break;return null;case 22:return t.lanes=0,Vc(e,t,n,t.pendingProps);case 24:Ta(t,Ra,e.memoizedState.cache)}return fl(e,t,n)}function hl(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)Ic=!0;else{if(!pl(e,n)&&!(t.flags&128))return Ic=!1,ml(e,t,n);Ic=!!(e.flags&131072)}}else Ic=!1,N&&t.flags&1048576&&oa(t,$i,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=co(t.elementType),t.type=e,typeof e==`function`)Bi(e)?(r=Ec(e,r),t.tag=1,t=Xc(null,t,e,r,n)):(t.tag=0,t=Jc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===ce){t.tag=11,t=Rc(null,t,e,r,n);break a}if(a===de){t.tag=14,t=zc(null,t,e,r,n);break a}if(a===se){t.tag=10,t.type=e,t=dl(null,t,n);break a}}throw t=xe(e)||e,Error(i(306,t,``))}}return t;case 0:return Jc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Ec(r,t.pendingProps),Xc(e,t,r,a,n);case 3:a:{if(Ne(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Co(e,t),Oo(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Ta(t,Ra,r),r!==o.cache&&Oa(t,[Ra],n,!0),F(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Zc(e,t,r,n);break a}if(r!==a){a=Yi(Error(i(424)),t),xa(a),t=Zc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(da=lm(e.firstChild),ua=t,N=!0,fa=null,pa=!0,n=bo(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(ya(),r===a){t=fl(e,t,n);break a}Lc(e,t,r,n)}t=t.child}return t;case 26:return qc(e,t),e===null?(n=Nm(t.type,null,t.pendingProps,null))?t.memoizedState=n:N||(t.stateNode=fp(t.type,t.pendingProps,je.current,t)):t.memoizedState=Nm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Fe(t),e===null&&N&&(r=t.stateNode=hm(t.type,t.pendingProps,je.current),ua=t,pa=!0,a=da,Sp(t.type)?(um=a,da=lm(r.firstChild)):da=a),Lc(e,t,t.pendingProps.children,n),qc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&N&&((a=r=da)&&(r=rm(r,t.type,t.pendingProps,pa),r===null?a=!1:(t.stateNode=r,ua=t,da=lm(r.firstChild),pa=!1,a=!0)),a||ha(t)),Fe(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,pp(a,o)?r=null:s!==null&&pp(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=ns(e,t,as,null,null,n),sh._currentValue=a),qc(e,t),Lc(e,t,r,n),t.child;case 6:return e===null&&N&&((e=n=da)&&(n=im(n,t.pendingProps,pa),n===null?e=!1:(t.stateNode=n,ua=t,da=null,e=!0)),e||ha(t)),null;case 13:return tl(e,t,n);case 4:return Ne(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=yo(t,null,r,n):Lc(e,t,r,n),t.child;case 11:return Rc(e,t,t.type,t.pendingProps,n);case 7:return r=t.pendingProps,qc(e,t),Lc(e,t,r,n),t.child;case 8:return Lc(e,t,t.pendingProps.children,n),t.child;case 12:return Lc(e,t,t.pendingProps.children,n),t.child;case 10:return dl(e,t,n);case 9:return a=t.type._context,r=t.pendingProps.children,ja(t),a=Ma(a),r=r(a),t.flags|=1,Lc(e,t,r,n),t.child;case 14:return zc(e,t,t.type,t.pendingProps,n);case 15:return Bc(e,t,t.type,t.pendingProps,n);case 19:return ul(e,t,n);case 31:return Kc(e,t,n);case 22:return Vc(e,t,n,t.pendingProps);case 24:return ja(t),r=Ma(Ra),e===null?(a=$a(),a===null&&(a=q,o=za(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},So(t),Ta(t,Ra,a)):((e.lanes&n)!==0&&(Co(e,t),Oo(t,null,null,n),F()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Ta(t,Ra,r),r!==a.cache&&Oa(t,[Ra],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Ta(t,Ra,r))),Lc(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=t.pendingProps,r.name!=null&&r.name!==`auto`?t.flags|=e===null?18882560:18874368:N&&sa(t),e!==null&&e.memoizedProps.name!==r.name?t.flags|=4194816:qc(e,t),Lc(e,t,r.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function gl(e){e.flags|=4}function _l(e,t,n,r,i){var a;if((a=!!(e.mode&32))&&(a=n===null?Jm(t,r):Jm(t,r)&&(r.src!==n.src||r.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(Ud())e.flags|=8192;else throw lo=ao,ro}}else e.flags&=-16777217}function V(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Ym(t)){if(Ud())e.flags|=8192;else throw lo=ao,ro}}function vl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:yt(),e.lanes|=t,ud|=t)}function yl(e,t){if(!N)switch(e.tailMode){case`visible`:break;case`collapsed`:for(var n=e.tail,r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function bl(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&1206910976,r|=i.flags&1206910976,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function xl(e,t,n){var r=t.pendingProps;switch(ca(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bl(t),null;case 1:return bl(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Ea(Ra),Pe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(va(t)?gl(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ba())),bl(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(gl(t),o===null?(bl(t),_l(t,a,null,r,n)):(bl(t),V(t,o))):o?o===e.memoizedState?(bl(t),t.flags&=-16777217):(gl(t),bl(t),V(t,o)):(e=e.memoizedProps,e!==r&&gl(t),bl(t),_l(t,a,e,r,n)),null;case 27:if(Ie(t),n=je.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&gl(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return bl(t),t.subtreeFlags&=-33554433,null}e=ke.current,va(t)?ga(t,e):(e=hm(a,r,n),t.stateNode=e,gl(t))}return bl(t),t.subtreeFlags&=-33554433,null;case 5:if(Ie(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&gl(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return bl(t),t.subtreeFlags&=-33554433,null}if(o=ke.current,va(t))ga(t,o);else{var s=lp(je.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[jt]=t,o[Mt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(np(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&gl(t)}}return bl(t),t.subtreeFlags&=-33554433,_l(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&gl(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=je.current,va(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=ua,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[jt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||ep(e.nodeValue,n)),e||ha(t,!0)}else e=lp(e).createTextNode(r),e[jt]=t,t.stateNode=e}return bl(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=va(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[jt]=t}else ya(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;bl(t),e=!1}else n=ba(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Bo(t),t):(Bo(t),null);if(t.flags&128)throw Error(i(558))}return bl(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=va(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[jt]=t}else ya(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;bl(t),a=!1}else a=ba(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Bo(t),t):(Bo(t),null)}return Bo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),vl(t,t.updateQueue),bl(t),null);case 4:return Pe(),e===null&&Wf(t.stateNode.containerInfo),t.flags|=67108864,bl(t),null;case 10:return Ea(t.type),bl(t),null;case 19:if(Uo(t),r=t.memoizedState,r===null)return bl(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)yl(r,!1);else{if(ad!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Wo(e),o!==null){for(t.flags|=128,yl(r,!1),e=o.updateQueue,t.updateQueue=e,vl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Hi(n,e),n=n.sibling;return Ho(t,Vo.current&1|2),N&&aa(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Ye()>gd&&(t.flags|=128,a=!0,yl(r,!1),t.lanes=4194304)}}else{if(!a){if(e=Wo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,vl(t,e),yl(r,!0),r.tail===null&&r.tailMode!==`collapsed`&&r.tailMode!==`visible`&&!o.alternate&&!N)return bl(t),null}else 2*Ye()-r.renderingStartTime>gd&&n!==536870912&&(t.flags|=128,a=!0,yl(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}if(r.tail!==null){e=r.tail;a:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break a}n=n.sibling}n=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ye(),e.sibling=null,o=Vo.current,o=a?o&1|2:o&1,r.tailMode===`visible`||r.tailMode===`collapsed`||!n||N?Ho(t,o):(n=o,Oe(I,t),Oe(Vo,n),L===null&&(L=t)),N&&aa(t,r.treeForkCount),e}return bl(t),null;case 22:case 23:return Bo(t),Fo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(bl(t),t.subtreeFlags&6&&(t.flags|=8192)):bl(t),n=t.updateQueue,n!==null&&vl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&De(Qa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ea(Ra),bl(t),null;case 25:return null;case 30:return t.flags|=33554432,bl(t),null}throw Error(i(156,t.tag))}function H(e,t){switch(ca(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ea(Ra),Pe(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ie(t),null;case 31:if(t.memoizedState!==null){if(Bo(t),t.alternate===null)throw Error(i(340));ya()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Bo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));ya()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Uo(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return Pe(),null;case 10:return Ea(t.type),null;case 22:case 23:return Bo(t),Fo(),e!==null&&De(Qa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ea(Ra),null;case 25:return null;default:return null}}function Sl(e,t){switch(ca(t),t.tag){case 3:Ea(Ra),Pe();break;case 26:case 27:case 5:Ie(t);break;case 4:Pe();break;case 31:t.memoizedState!==null&&Bo(t);break;case 13:Bo(t);break;case 19:Uo(t);break;case 10:Ea(t.type);break;case 22:case 23:Bo(t),Fo(),e!==null&&De(Qa);break;case 24:Ea(Ra)}}function Cl(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function wl(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Tl(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Ao(t,n)}catch(t){Z(e,e.return,t)}}}function El(e,t,n){n.props=Ec(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Dl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var i=e.stateNode,a=Ti(e.memoizedProps,i);(i.ref===null||i.ref.name!==a)&&(i.ref=Pp(a)),r=i.ref;break;case 7:if(e.stateNode===null){var o=new Fp(e);m(e.child,!1,Qp,o,void 0,void 0),e.stateNode=o}r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Ol(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}}function kl(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)em(e.stateNode,t[n])}function Al(e){for(var t=e.return;t!==null&&(Nl(t)&&em(e.stateNode,t.stateNode),!Ml(t));)t=t.return}function jl(e){for(var t=e.return;t!==null&&(Nl(t)&&tm(e.stateNode,t.stateNode),!Ml(t));)t=t.return}function Ml(e){return e.tag===5||e.tag===3||e.tag===27}function Nl(e){return e&&e.tag===7&&e.stateNode!==null}function Pl(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Fl(e,t,n){try{var r=e.stateNode;ip(r,e.type,n,t),r[Mt]=t}catch(t){Z(e,e.return,t)}}function Il(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Sp(e.type)||e.tag===4}function Ll(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Il(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Sp(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Rl(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(i,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(i),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Dn)),kl(e,r),A=!0;else if(i!==4&&(i===27&&(kl(e,r),r=null,Sp(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(Rl(e,t,n,r),e=e.sibling;e!==null;)Rl(e,t,n,r),e=e.sibling}function zl(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?n.insertBefore(i,t):n.appendChild(i),kl(e,r),A=!0;else if(i!==4&&(i===27&&(kl(e,r),r=null,Sp(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(zl(e,t,n,r),e=e.sibling;e!==null;)zl(e,t,n,r),e=e.sibling}function Bl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);np(t,r,n),t[jt]=e,t[Mt]=n}catch(t){Z(e,e.return,t)}}var Vl=!1,Hl=null;function Ul(e){(e.tag===30||e.subtreeFlags&33554432)&&(Vl=!0)}var Wl=null;function Gl(){var e=Wl;return Wl=null,e}var Kl=0;function ql(e,t,n,r,i){return Kl=0,Jl(e.child,t,n,r,i)}function Jl(e,t,n,r,i){for(var a=!1;e!==null;){if(e.tag===5){var o=e.stateNode;if(r!==null){var s=Op(o);r.push(s),s.view&&(a=!0)}else a||Op(o).view&&(a=!0);Vl=!0,Tp(o,Kl===0?t:t+`_`+Kl,n),Kl++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&i||Jl(e.child,t,n,r,i)&&(a=!0));e=e.sibling}return a}function Yl(e,t){for(;e!==null;)e.tag===5?Ep(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||Yl(e.child,t)),e=e.sibling}function Xl(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Xl(e),e.tag===30&&e.flags&18874368&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name===`auto`)throw Error(i(544));var n=t.name;t=Di(t.default,t.share),t!==`none`&&(ql(e,n,t,null,!1)||Yl(e.child,!1))}e=e.sibling}}function Zl(e,t){if(e.tag===30){var n=e.stateNode,r=e.memoizedProps,i=Ti(r,n),a=Di(r.default,n.paired?r.share:r.enter);a===`none`?Xl(e):ql(e,i,a,null,!1)?(Xl(e),n.paired||t||Nd(e,r.onEnter)):Yl(e.child,!1)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Zl(e,t),e=e.sibling;else Xl(e)}function Ql(e){if(Hl!==null&&Hl.size!==0){var t=Hl;if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var n=e.memoizedProps,r=n.name;if(r!=null&&r!==`auto`){var i=t.get(r);if(i!==void 0){var a=Di(n.default,n.share);if(a!==`none`&&(ql(e,r,a,null,!1)?(a=e.stateNode,i.paired=a,a.paired=i,Nd(e,n.onShare)):Yl(e.child,!1)),t.delete(r),t.size===0)break}}}Ql(e)}e=e.sibling}}}function $l(e){if(e.tag===30){var t=e.memoizedProps,n=Ti(t,e.stateNode),r=Hl===null?void 0:Hl.get(n),i=Di(t.default,r===void 0?t.exit:t.share);i!==`none`&&(ql(e,n,i,null,!1)?r===void 0?Nd(e,t.onExit):(i=e.stateNode,r.paired=i,i.paired=r,Hl.delete(n),Nd(e,t.onShare)):Yl(e.child,!1)),Hl!==null&&Ql(e)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)$l(e),e=e.sibling;else Hl!==null&&Ql(e)}function eu(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=Ti(t,e.stateNode);t=Di(t.default,t.update),e.flags&=-5,t!==`none`&&ql(e,n,t,e.memoizedState=[],!1)}else e.subtreeFlags&33554432&&eu(e);e=e.sibling}}function tu(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var t=e.stateNode;t.paired!==null&&(t.paired=null,Yl(e.child,!1))}tu(e)}e=e.sibling}}function nu(e){if(e.tag===30)e.stateNode.paired=null,Yl(e.child,!1),tu(e);else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)nu(e),e=e.sibling;else tu(e)}function ru(e){for(e=e.child;e!==null;)e.tag===30?Yl(e.child,!1):e.subtreeFlags&33554432&&ru(e),e=e.sibling}function iu(e,t,n,r,i,a,o){for(var s=!1;t!==null;){if(t.tag===5){var c=t.stateNode;if(a!==null&&Kl<a.length){var l=a[Kl],u=Op(c);(l.view||u.view)&&(s=!0);var d;if(d=!(e.flags&4)){if(u.clip)d=!0;else{d=l.rect;var f=u.rect;d=d.y!==f.y||d.x!==f.x||d.height!==f.height||d.width!==f.width}}d&&(e.flags|=4),u.abs?u=!l.abs:(l=l.rect,u=u.rect,u=l.height!==u.height||l.width!==u.width),u&&(e.flags|=32)}else e.flags|=32;e.flags&4&&Tp(c,Kl===0?n:n+`_`+Kl,i),s&&e.flags&4||(Wl===null&&(Wl=[]),Wl.push(c,Kl===0?r:r+`_`+Kl,t.memoizedProps)),Kl++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&o?e.flags|=t.flags&32:iu(e,t.child,n,r,i,a,o)&&(s=!0));t=t.sibling}return s}function au(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,r=e.stateNode,i=Ti(n,r),a=Di(n.default,n.update);if(t){r=r.clones;var o=r===null?null:r.map(kp)}else o=e.memoizedState,e.memoizedState=null;r=e;var s=e.child;Kl=0,i=iu(r,s,i,i,a,o,!1),e.flags&4&&i&&(t||Nd(e,n.onUpdate))}else e.subtreeFlags&33554432&&au(e,t);e=e.sibling}}var U=!1,W=!1,ou=!1,su=!1,cu=typeof WeakSet==`function`?WeakSet:Set,lu=null,uu=!1,du=!1,fu=!1,pu=!1;function mu(e,t,n){if(e=e.containerInfo,sp=gh,e=ti(e),ni(e)){if(`selectionStart`in e)var r={start:e.selectionStart,end:e.selectionEnd};else a:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==r||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===r&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}r=c===-1||l===-1?null:{start:c,end:l}}else r=null}r||={start:0,end:0}}else r=null;for(cp={focusedElem:e,selectionRange:r},gh=!1,n=(n&335544064)===n,lu=t,t=n?9270:1024;lu!==null;){if(e=lu,n&&(r=e.deletions,r!==null))for(a=0;a<r.length;a++)n&&$l(r[a]);if(e.alternate===null&&e.flags&2)n&&Ul(e),hu(n);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&n&&$l(r),hu(n);continue}if(r!==null&&r.memoizedState!==null){n&&Ul(e),hu(n);continue}}r=e.child,(e.subtreeFlags&t)!==0&&r!==null?(r.return=e,lu=r):(n&&eu(e),hu(n))}}Hl=null}function hu(e){for(;lu!==null;){var t=lu,n=e,r=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if(a&1024&&r!==null){n=void 0,a=r.memoizedProps,r=r.memoizedState;var o=t.stateNode;try{var s=Ec(t.type,a);n=o.getSnapshotBeforeUpdate(s,r),o.__reactInternalSnapshotBeforeUpdate=n}catch(e){Z(t,t.return,e)}}break;case 3:if(a&1024){if(r=t.stateNode.containerInfo,n=r.nodeType,n===9)nm(r);else if(n===1)switch(r.nodeName){case`HEAD`:case`HTML`:case`BODY`:nm(r);break;default:r.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&r!==null&&(n=Ti(r.memoizedProps,r.stateNode),a=t.memoizedProps,a=Di(a.default,a.update),a!==`none`&&ql(r,n,a,r.memoizedState=[],!0));break;default:if(a&1024)throw Error(i(163))}if(r=t.sibling,r!==null){r.return=t.return,lu=r;break}lu=t.return}}function gu(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Fu(e,n),r&4&&Cl(5,n);break;case 1:if(Fu(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Ec(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}}r&64&&Tl(n),r&512&&Dl(n,n.return);break;case 3:if(Fu(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Ao(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&Bl(n);case 26:case 5:Fu(e,n),t===null&&r&4&&Pl(n),r&512&&Dl(n,n.return);break;case 12:Fu(e,n);break;case 31:Fu(e,n),r&4&&wu(e,n);break;case 13:Fu(e,n),r&4&&Tu(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=_f.bind(null,n),cm(e,n))));break;case 22:if(r=n.memoizedState!==null||U,!r){var a=t!==null&&t.memoizedState!==null||W;t=U,i=W,U=r,(W=a)&&!i?(r=2,n.subtreeFlags&8772&&(r|=1),Lu(e,n,r)):Fu(e,n),U=t,W=i}break;case 30:Fu(e,n),r&512&&Dl(n,n.return);break;case 7:r&512&&Dl(n,n.return);default:Fu(e,n)}}function _u(e,t){for(e=e.child;e!==null;)vu(e,t),e=e.sibling}function vu(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var r=n.style;typeof r.setProperty==`function`?r.setProperty(`display`,`none`,`important`):r.display=`none`}else{var i=e.stateNode,a=e.memoizedProps.style,o=a!=null&&a.hasOwnProperty(`display`)?a.display:null;i.style.display=o==null||typeof o==`boolean`?``:(``+o).trim()}}catch(t){Z(e,e.return,t)}yu(e,t);break;case 6:try{e.stateNode.nodeValue=t?``:e.memoizedProps,A=!0}catch(t){Z(e,e.return,t)}break;case 18:try{var s=e.stateNode;t?wp(s,!0):wp(e.stateNode,!1)}catch(t){Z(e,e.return,t)}break;case 22:case 23:e.memoizedState===null&&_u(e,t);break;default:_u(e,t)}}function yu(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){a:{var n=e,r=t;switch(n.tag){case 4:vu(n,r);break a;case 22:n.memoizedState===null&&yu(n,r);break a;default:yu(n,r)}}e=e.sibling}}function bu(e){var t=e.alternate;t!==null&&(e.alternate=null,bu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Bt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var xu=null,G=!1;function Su(e,t,n){for(n=n.child;n!==null;)Cu(e,t,n),n=n.sibling}function Cu(e,t,n){if(at&&typeof at.onCommitFiberUnmount==`function`)try{at.onCommitFiberUnmount(it,n)}catch{}switch(n.tag){case 26:W||Ol(n,t),Su(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!W&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:W||Ol(n,t),jl(n);var r=xu,i=G;Sp(n.type)&&(xu=n.stateNode,G=!1),Su(e,t,n),gm(n.stateNode,n.type,n.memoizedProps),xu=r,G=i;break;case 5:W||Ol(n,t),jl(n);case 6:if(n.tag===6&&jl(n),r=xu,i=G,xu=null,Su(e,t,n),xu=r,G=i,xu!==null){if(G)try{(xu.nodeType===9?xu.body:xu.nodeName===`HTML`?xu.ownerDocument.body:xu).removeChild(n.stateNode),A=!0}catch(e){Z(n,t,e)}else try{xu.removeChild(n.stateNode),A=!0}catch(e){Z(n,t,e)}}break;case 18:xu!==null&&(G?(e=xu,Cp(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Hh(e)):Cp(xu,n.stateNode));break;case 4:r=xu,i=G,xu=n.stateNode.containerInfo,G=!0,Su(e,t,n),xu=r,G=i;break;case 0:case 11:case 14:case 15:wl(2,n,t),W||wl(4,n,t),Su(e,t,n);break;case 1:W||(Ol(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&El(n,t,r)),Su(e,t,n);break;case 21:Su(e,t,n);break;case 22:W=(r=W)||n.memoizedState!==null,Su(e,t,n),W=r;break;case 30:Ol(n,t),Su(e,t,n);break;case 7:W||Ol(n,t),Su(e,t,n);break;default:Su(e,t,n)}}function wu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Hh(e)}catch(e){Z(t,t.return,e)}}}function Tu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Hh(e)}catch(e){Z(t,t.return,e)}}function Eu(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new cu),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new cu),t;default:throw Error(i(435,e.tag))}}function Du(e,t){var n=Eu(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=vf.bind(null,e,t);t.then(r,r)}})}function Ou(e,t,n){var r=t.deletions;if(r!==null)for(var a=0;a<r.length;a++){var o=r[a],s=e,c=t,l=c;a:for(;l!==null;){switch(l.tag){case 27:if(Sp(l.type)){xu=l.stateNode,G=!1;break a}break;case 5:xu=l.stateNode,G=!1;break a;case 3:case 4:xu=l.stateNode.containerInfo,G=!0;break a}l=l.return}if(xu===null)throw Error(i(160));Cu(s,c,o),xu=null,G=!1,s=o.alternate,s!==null&&(s.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Au(t,e,n),t=t.sibling}var ku=null;function Au(e,t,n){var r=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(a&4&&(r=e.updateQueue,r=r===null?null:r.events,r!==null))for(var o=0;o<r.length;o++){var s=r[o];s.ref.impl=s.nextImpl}Ou(t,e,n),ju(e),a&4&&(wl(3,e,e.return),Cl(3,e),wl(5,e,e.return));break;case 1:Ou(t,e,n),ju(e),a&512&&(W||r===null||Ol(r,r.return)),a&64&&U&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(o=ku,Ou(t,e,n),ju(e),a&512&&(W||r===null||Ol(r,r.return)),a&4){if(a=r===null?null:r.memoizedState,n=e.memoizedState,r===null){if(n===null){if(e.stateNode===null){if(U)e.stateNode=fp(e.type,e.memoizedProps,t.containerInfo,e);else{a:{t=e.type,n=e.memoizedProps,a=o.ownerDocument||o;b:switch(t){case`title`:r=a.getElementsByTagName(`title`)[0],(!r||r[Rt]||r[jt]||r.namespaceURI===`http://www.w3.org/2000/svg`||r.hasAttribute(`itemprop`))&&(r=a.createElement(t),a.head.insertBefore(r,a.querySelector(`head > title`))),np(r,t,n),r[jt]=e,Gt(r),t=r;break a;case`link`:if(o=Gm(`link`,`href`,a).get(t+(n.href||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&r.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&r.getAttribute(`title`)===(n.title==null?null:n.title)&&r.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(s,1);break b}}r=a.createElement(t),np(r,t,n),a.head.appendChild(r);break;case`meta`:if(o=Gm(`meta`,`content`,a).get(t+(n.content||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`content`)===(n.content==null?null:``+n.content)&&r.getAttribute(`name`)===(n.name==null?null:n.name)&&r.getAttribute(`property`)===(n.property==null?null:n.property)&&r.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){o.splice(s,1);break b}}r=a.createElement(t),np(r,t,n),a.head.appendChild(r);break;default:throw Error(i(468,t))}r[jt]=e,Gt(r),t=r}e.stateNode=t}}else U||Km(o,e.type,e.stateNode)}else e.stateNode=Bm(o,n,e.memoizedProps)}else a===n?n===null&&e.stateNode!==null&&Fl(e,e.memoizedProps,r.memoizedProps):(a===null?(t=r.stateNode,t===null||W||t.parentNode.removeChild(t)):a.count--,n===null?U||Km(o,e.type,e.stateNode):Bm(o,n,e.memoizedProps))}break;case 27:Ou(t,e,n),ju(e),a&512&&(W||r===null||Ol(r,r.return)),r!==null&&a&4&&Fl(e,e.memoizedProps,r.memoizedProps);break;case 5:if(o=ou,ou=!1,Ou(t,e,n),ou=o,ju(e),a&512&&(W||r===null||Ol(r,r.return)),e.flags&32){t=e.stateNode;try{yn(t,``),A=!0}catch(t){Z(e,e.return,t)}}a&4&&e.stateNode!=null&&(t=e.memoizedProps,Fl(e,t,r===null?t:r.memoizedProps)),a&1024&&(su=!0);break;case 6:if(Ou(t,e,n),ju(e),a&4){if(e.stateNode===null)throw Error(i(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,A=!0}catch(t){Z(e,e.return,t)}}break;case 3:if(A=!1,Wm=null,o=ku,ku=bm(t.containerInfo),Ou(t,e,n),ku=o,ju(e),a&4&&r!==null&&r.memoizedState.isDehydrated)try{Hh(t.containerInfo)}catch(t){Z(e,e.return,t)}su&&(su=!1,Mu(e)),A=!1;break;case 4:a=ou,ou=U,r=tn(),o=ku,ku=bm(e.stateNode.containerInfo),Ou(t,e,n),ju(e),ku=o,A&&du&&(fu=!0),A=r,ou=a;break;case 12:Ou(t,e,n),ju(e);break;case 31:Ou(t,e,n),ju(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Du(e,t)));break;case 13:Ou(t,e,n),ju(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(md=Ye()),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Du(e,t)));break;case 22:o=e.memoizedState!==null,s=r!==null&&r.memoizedState!==null;var c=U,l=W,u=ou;U=c||o,ou=u||o,W=l||s,Ou(t,e,n),W=l,ou=u,U=c,ju(e),a&8192&&(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,!o||r===null||s||U||W||(t=s||W,n=U,r=W,U=o||U,W=t,Iu(e,2),U=n,W=r),!o&&ou||_u(e,o)),a&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,Du(e,n))));break;case 19:Ou(t,e,n),ju(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Du(e,t)));break;case 30:a&512&&(W||r===null||Ol(r,r.return)),a=tn(),o=du,s=(n&335544064)===n,c=e.memoizedProps,du=s&&Di(c.default,c.update)!==`none`,Ou(t,e,n),ju(e),s&&r!==null&&A&&(e.flags|=4),du=o,A=a;break;case 21:break;case 7:a&512&&(W||r===null||Ol(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:Ou(t,e,n),ju(e)}}function ju(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Il(r)){n=r;break}r=r.return}r=null;for(var a=e.return;a!==null;){if(Nl(a)){var o=a.stateNode;r===null?r=[o]:r.push(o)}if(Ml(a))break;a=a.return}var s=r;if(n==null)throw Error(i(160));switch(n.tag){case 27:var c=n.stateNode;zl(e,Ll(e),c,s);break;case 5:var l=n.stateNode;n.flags&32&&(yn(l,``),n.flags&=-33),zl(e,Ll(e),l,s);break;case 3:case 4:var u=n.stateNode.containerInfo;Rl(e,Ll(e),u,s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Mu(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Mu(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,gh=!0,t.reset(),gh=!1),e=e.sibling}}function Nu(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)Pu(t,e),t=t.sibling;else au(t,!1)}function Pu(e,t){var n=e.alternate;if(n===null)Zl(e,!1);else switch(e.tag){case 3:if(pu=uu=!1,Gl(),Nu(t,e),!uu&&!fu){if(e=Wl,e!==null)for(var r=0;r<e.length;r+=3){n=e[r];var i=e[r+1];Ep(n,e[r+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(`+i+`)`})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===``&&(e.style.viewTransitionName=`none`,e.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(root)`}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition`})),pu=!0}Wl=null;break;case 5:Nu(t,e);break;case 4:r=uu,uu=!1,Nu(t,e),uu&&(fu=!0),uu=r;break;case 22:e.memoizedState===null&&(n.memoizedState===null?Nu(t,e):Zl(e,!1));break;case 30:r=uu,i=Gl(),uu=!1,Nu(t,e),uu&&(e.flags|=4);var a=e.memoizedProps,o=e.stateNode;t=Ti(a,o),o=Ti(n.memoizedProps,o);var s=Di(a.default,a.update);s===`none`?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,Kl=0,t=iu(e,n,t,o,s,a,!0),Kl!==(a===null?0:a.length)&&(e.flags|=32)),e.flags&4&&t?(Nd(e,e.memoizedProps.onUpdate),Wl=i):i!==null&&(i.push.apply(i,Wl),Wl=i),uu=e.flags&32?!0:r;break;default:Nu(t,e)}}function Fu(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)gu(e,t.alternate,t),t=t.sibling}function Iu(e,t){for(e=e.child;e!==null;){var n=e,r=t;switch(n.tag){case 0:case 11:case 14:case 15:wl(4,n,n.return),Iu(n,r);break;case 1:Ol(n,n.return);var i=n.stateNode;typeof i.componentWillUnmount==`function`&&El(n,n.return,i),Iu(n,r);break;case 27:r&2&&gm(n.stateNode,n.type,n.memoizedProps);case 5:Ol(n,n.return),n.tag!==5&&n.tag!==27||jl(n),Iu(n,r);break;case 6:jl(n);break;case 26:Ol(n,n.return),i=n.stateNode,n.memoizedState!==null||i===null||W||i.parentNode.removeChild(i),Iu(n,r);break;case 22:n.memoizedState===null&&Iu(n,r);break;case 30:Ol(n,n.return),Iu(n,r);break;case 7:Ol(n,n.return);default:Iu(n,r)}e=e.sibling}}function Lu(e,t,n){for(n=t.subtreeFlags&8772?n:n&-2,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags,s=!!(n&1);switch(a.tag){case 0:case 11:case 15:Lu(i,a,n),Cl(4,a);break;case 1:if(Lu(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var c=r.stateNode;try{var l=i.shared.hiddenCallbacks;if(l!==null)for(i.shared.hiddenCallbacks=null,i=0;i<l.length;i++)ko(l[i],c)}catch(e){Z(r,r.return,e)}}s&&o&64&&Tl(a),Dl(a,a.return);break;case 27:n&2&&Bl(a);case 5:a.tag!==5&&a.tag!==27||Al(a),Lu(i,a,n),s&&r===null&&o&4&&Pl(a),Dl(a,a.return);break;case 6:Al(a);break;case 26:c=a.stateNode,a.memoizedState!==null||c===null||U||Km(bm(c.ownerDocument),a.type,c),Lu(i,a,n),s&&r===null&&o&4&&Pl(a),Dl(a,a.return);break;case 12:Lu(i,a,n);break;case 31:Lu(i,a,n),s&&o&4&&wu(i,a);break;case 13:Lu(i,a,n),s&&o&4&&Tu(i,a);break;case 22:a.memoizedState===null&&Lu(i,a,n),Dl(a,a.return);break;case 30:Lu(i,a,n),Dl(a,a.return);break;case 7:Dl(a,a.return);default:Lu(i,a,n)}t=t.sibling}}function Ru(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Ba(n))}function zu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ba(e))}function Bu(e,t,n,r){var i=(n&335544064)===n;if(t.subtreeFlags&(i?10262:10256))for(t=t.child;t!==null;)Vu(e,t,n,r),t=t.sibling;else i&&ru(t)}function Vu(e,t,n,r){var i=(n&335544064)===n;i&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&nu(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:Bu(e,t,n,r),a&2048&&Cl(9,t);break;case 1:Bu(e,t,n,r);break;case 3:Bu(e,t,n,r),i&&pu&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,e.style.viewTransitionName===`root`&&(e.style.viewTransitionName=``),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===`none`&&(e.style.viewTransitionName=``)),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&Ba(a)));break;case 12:if(a&2048){Bu(e,t,n,r),a=t.stateNode;try{var o=t.memoizedProps,s=o.id,c=o.onPostCommit;typeof c==`function`&&c(s,t.alternate===null?`mount`:`update`,a.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Bu(e,t,n,r);break;case 31:Bu(e,t,n,r);break;case 13:Bu(e,t,n,r);break;case 23:break;case 22:o=t.stateNode,s=t.alternate,t.memoizedState===null?(i&&s!==null&&s.memoizedState!==null&&nu(t),o._visibility&2?Bu(e,t,n,r):(o._visibility|=2,Hu(e,t,n,r,!!(t.subtreeFlags&10256)||!1))):(i&&s!==null&&s.memoizedState===null&&nu(s),o._visibility&2?Bu(e,t,n,r):Uu(e,t)),a&2048&&Ru(s,t);break;case 24:Bu(e,t,n,r),a&2048&&zu(t.alternate,t);break;case 30:i&&(a=t.alternate,a!==null&&(Yl(a.child,!0),Yl(t.child,!0))),Bu(e,t,n,r);break;default:Bu(e,t,n,r)}}function Hu(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Hu(a,o,s,c,i),Cl(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Hu(a,o,s,c,i)):u._visibility&2?Hu(a,o,s,c,i):Uu(a,o),i&&l&2048&&Ru(o.alternate,o);break;case 24:Hu(a,o,s,c,i),i&&l&2048&&zu(o.alternate,o);break;default:Hu(a,o,s,c,i)}t=t.sibling}}function Uu(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Uu(n,r),i&2048&&Ru(r.alternate,r);break;case 24:Uu(n,r),i&2048&&zu(r.alternate,r);break;default:Uu(n,r)}t=t.sibling}}var Wu=8192;function Gu(e,t,n){if(e.subtreeFlags&Wu)for(e=e.child;e!==null;)Ku(e,t,n),e=e.sibling}function Ku(e,t,n){switch(e.tag){case 26:Gu(e,t,n),e.flags&Wu&&(e.memoizedState===null?(e=e.stateNode,(t&335544128)===t&&Zm(n,e)):Qm(n,ku,e.memoizedState,e.memoizedProps));break;case 5:Gu(e,t,n),e.flags&Wu&&(e=e.stateNode,(t&335544128)===t&&Zm(n,e));break;case 3:case 4:var r=ku;ku=bm(e.stateNode.containerInfo),Gu(e,t,n),ku=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Wu,Wu=16777216,Gu(e,t,n),Wu=r):Gu(e,t,n));break;case 30:if((e.flags&Wu)!==0&&(r=e.memoizedProps.name,r!=null&&r!==`auto`)){var i=e.stateNode;i.paired=null,Hl===null&&(Hl=new Map),Hl.set(r,i)}Gu(e,t,n);break;default:Gu(e,t,n)}}function qu(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ju(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];lu=r,Zu(r,e)}qu(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Yu(e),e=e.sibling}function Yu(e){switch(e.tag){case 0:case 11:case 15:Ju(e),e.flags&2048&&wl(9,e,e.return);break;case 3:Ju(e);break;case 12:Ju(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Xu(e)):Ju(e);break;default:Ju(e)}}function Xu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];lu=r,Zu(r,e)}qu(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:wl(8,t,t.return),Xu(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Xu(t));break;default:Xu(t)}e=e.sibling}}function Zu(e,t){for(;lu!==null;){var n=lu;switch(n.tag){case 0:case 11:case 15:wl(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Ba(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,lu=r;else a:for(n=e;lu!==null;){r=lu;var i=r.sibling,a=r.return;if(bu(r),r===n){lu=null;break a}if(i!==null){i.return=a,lu=i;break a}lu=a}}}var Qu={getCacheForType:function(e){var t=Ma(Ra),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Ma(Ra).controller.signal}},$u=typeof WeakMap==`function`?WeakMap:Map,K=0,q=null,J=null,Y=0,X=0,ed=null,td=!1,nd=!1,rd=!1,id=0,ad=0,od=0,sd=0,cd=0,ld=0,ud=0,dd=null,fd=null,pd=!1,md=0,hd=0,gd=1/0,_d=null,vd=null,yd=0,bd=null,xd=null,Sd=0,Cd=0,wd=null,Td=null,Ed=null,Dd=null,Od=null,kd=0,Ad=null;function jd(){return K&2&&Y!==0?Y&-Y:O.T===null?Ot():Pf()}function Md(){if(ld===0){if(!(Y&536870912)||N){var e=ft;ft<<=1,!(ft&3932160)&&(ft=262144),ld=e}else ld=536870912}return e=I.current,e!==null&&(e.flags|=32),ld}function Nd(e,t){if(t!=null){var n=e.stateNode,r=n.ref;r===null&&(r=n.ref=Pp(Ti(e.memoizedProps,n))),Dd===null&&(Dd=[]),Dd.push(t.bind(null,r))}}function Pd(e,t,n){(e===q&&(X===2||X===9)||e.cancelPendingCommit!==null)&&(Vd(e,0),Rd(e,Y,ld,!1)),xt(e,n),(!(K&2)||e!==q)&&(e===q&&(!(K&2)&&(sd|=n),ad===4&&Rd(e,Y,ld,!1)),Ef(e))}function Fd(e,t,n){if(K&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||gt(e,t),a=r?Yd(e,t):qd(e,t,!0),o=r;do{if(a===0){nd&&!r&&Rd(e,t,0,!1);break}if(n=e.current.alternate,o&&!Ld(n)){a=qd(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=dd;var l=c.current.memoizedState.isDehydrated;if(l&&(Vd(c,s).flags|=256),s=qd(c,s,!1),s!==2&&s!==6){if(rd&&!l){c.errorRecoveryDisabledLanes|=o,sd|=o,a=4;break a}o=fd,fd=a,o!==null&&(fd===null?fd=o:fd.push.apply(fd,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Vd(e,0),Rd(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:Rd(r,t,ld,!td);break a;case 2:fd=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=md+300-Ye(),10<a)){if(Rd(r,t,ld,!td),ht(r,0,!0)!==0)break a;Sd=t,r.timeoutHandle=gp(Id.bind(null,r,n,fd,_d,pd,t,ld,sd,ud,td,o,`Throttled`,-0,0),a);break a}Id(r,n,fd,_d,pd,t,ld,sd,ud,td,o,null,-0,0)}break}while(1);Ef(e)}function Id(e,t,n,r,i,a,o,s,c,l,u,d,f,p){e.timeoutHandle=-1;var m=t.subtreeFlags,h=(a&335544064)===a;if(d=null,(h||m&8192||(m&16785408)==16785408)&&(d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Dn},Hl=null,Ku(t,a,d),h&&(m=d,h=e.containerInfo,h=(h.nodeType===9?h:h.ownerDocument).__reactViewTransition,h!=null&&(m.count++,m.waitingForViewTransition=!0,m=nh.bind(m),h.finished.then(m,m))),m=(a&62914560)===a?md-Ye():(a&4194048)===a?hd-Ye():0,m=eh(d,m),m!==null)){Sd=a,e.cancelPendingCommit=m(nf.bind(null,e,t,a,n,r,i,o,s,c,l,u,d,null,f,p)),Rd(e,a,o,!l);return}nf(e,t,a,n,r,i,o,s,c,l,u,d)}function Ld(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Yr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Rd(e,t,n,r){t=_t(e,t),t&=~cd,t&=~sd,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-st(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&Ct(e,n,t)}function zd(){return K&6?!0:(Df(0,!1),!1)}function Bd(){if(J!==null){if(X===0)var e=J.return;else e=J,wa=Ca=null,cs(e),po=null,mo=0,e=J;for(;e!==null;)Sl(e.alternate,e),e=e.return;J=null}}function Vd(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,_p(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Sd=0,Bd(),q=e,J=n=Vi(e.current,null),Y=t,X=0,ed=null,td=!1,nd=gt(e,t),rd=!1,ud=ld=cd=sd=od=ad=0,fd=dd=null,pd=!1,id=_t(e,t),Mi(),n}function Hd(e,t){R=null,O.H=vc,t===no||t===io?(t=uo(),X=3):t===ro?(t=uo(),X=4):X=t===Fc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,ed=t,J===null&&(ad=1,Ac(e,Yi(t,e.current)))}function Ud(){var e=I.current;return e===null?!0:(Y&4194048)===Y?L===null:(Y&62914560)===Y||Y&536870912?e===L:!1}function Wd(){var e=O.H;return O.H=vc,e===null?vc:e}function Gd(){var e=O.A;return O.A=Qu,e}function Kd(){ad=4,td||(Y&4194048)!==Y&&I.current!==null||(nd=!0),!(od&134217727)&&!(sd&134217727)||q===null||Rd(q,Y,ld,!1)}function qd(e,t,n){var r=K;K|=2;var i=Wd(),a=Gd();(q!==e||Y!==t)&&(_d=null,Vd(e,t)),t=!1;var o=ad;a:do try{if(X!==0&&J!==null){var s=J,c=ed;switch(X){case 8:Bd(),o=6;break a;case 3:case 2:case 9:case 6:I.current===null&&(t=!0);var l=X;if(X=0,ed=null,$d(e,s,c,l),n&&nd){o=0;break a}break;default:l=X,X=0,ed=null,$d(e,s,c,l)}}Jd(),o=ad;break}catch(t){Hd(e,t)}while(1);return t&&e.shellSuspendCounter++,wa=Ca=null,K=r,O.H=i,O.A=a,J===null&&(q=null,Y=0,Mi()),o}function Jd(){for(;J!==null;)Zd(J)}function Yd(e,t){var n=K;K|=2;var r=Wd(),a=Gd();q!==e||Y!==t?(_d=null,gd=Ye()+500,Vd(e,t)):nd=gt(e,t);a:do try{if(X!==0&&J!==null){t=J;var o=ed;b:switch(X){case 1:X=0,ed=null,$d(e,t,o,1);break;case 2:case 9:if(oo(o)){X=0,ed=null,Qd(t);break}t=function(){X!==2&&X!==9||q!==e||(X=7),Ef(e)},o.then(t,t);break a;case 3:X=7;break a;case 4:X=5;break a;case 7:oo(o)?(X=0,ed=null,Qd(t)):(X=0,ed=null,$d(e,t,o,7));break;case 5:var s=null;switch(J.tag){case 26:s=J.memoizedState;case 5:case 27:var c=J;if(s?Ym(s):c.stateNode.complete){X=0,ed=null;var l=c.sibling;if(l!==null)J=l;else{var u=c.return;u===null?J=null:(J=u,ef(u))}break b}}X=0,ed=null,$d(e,t,o,5);break;case 6:X=0,ed=null,$d(e,t,o,6);break;case 8:Bd(),ad=6;break a;default:throw Error(i(462))}}Xd();break}catch(t){Hd(e,t)}while(1);return wa=Ca=null,O.H=r,O.A=a,K=n,J===null?(q=null,Y=0,Mi(),ad):0}function Xd(){for(;J!==null&&!qe();)Zd(J)}function Zd(e){var t=hl(e.alternate,e,id);e.memoizedProps=e.pendingProps,t===null?ef(e):J=t}function Qd(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Yc(n,t,t.pendingProps,t.type,void 0,Y);break;case 11:t=Yc(n,t,t.pendingProps,t.type.render,t.ref,Y);break;case 5:cs(t);var r=t;r===ua&&(N?(_a(r),r.tag===5&&r.stateNode!=null&&(da=r.stateNode)):(_a(r),N=!0));default:Sl(n,t),t=J=Hi(t,id),t=hl(n,t,id)}e.memoizedProps=e.pendingProps,t===null?ef(e):J=t}function $d(e,t,n,r){wa=Ca=null,cs(t),po=null,mo=0;var i=t.return;try{if(B(e,i,t,n,Y)){ad=1,Ac(e,Yi(n,e.current)),J=null;return}}catch(t){if(i!==null)throw J=i,t;ad=1,Ac(e,Yi(n,e.current)),J=null;return}t.flags&32768?(N||r===1?e=!0:nd||Y&536870912?e=!1:(td=e=!0,(r===2||r===9||r===3||r===6)&&(r=I.current,r!==null&&r.tag===13&&(r.flags|=16384))),tf(t,e)):ef(t)}function ef(e){var t=e;do{if(t.flags&32768){tf(t,td);return}e=t.return;var n=xl(t.alternate,t,id);if(n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);ad===0&&(ad=5)}function tf(e,t){do{var n=H(e.alternate,e);if(n!==null){n.flags&=32767,J=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){J=e;return}J=e=n}while(e!==null);ad=6,J=null}function nf(e,t,n,r,a,o,s,c,l,u,d,f){e.cancelPendingCommit=null;do df();while(yd!==0);if(K&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));e===q&&(J=q=null,Y=0),xd=t,bd=e,Sd=n,wd=a,Td=r,rf(e,t,n,s,c,l,f)}}function rf(e,t,n,r,i,a,o){var s=t.lanes|t.childLanes;if(Cd=s,s|=ji,St(e,n,s,r,i,a),Dd=null,(n&335544064)===n?(Od=Ua(e),r=10262):(Od=null,r=10256),(t.subtreeFlags&r)!==0||(t.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,yf($e,function(){return ff(),null})):(e.callbackNode=null,e.callbackPriority=0),Vl=!1,r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=O.T,O.T=null,i=k.p,k.p=2,a=K,K|=4;try{mu(e,t,n)}finally{K=a,k.p=i,O.T=r}}yd=1,Vl?Ed=Mp(o,e.containerInfo,Od,sf,cf,of,lf,ff,af,null,null):(sf(),cf(),lf())}function af(e){if(yd!==0){var t=bd.onRecoverableError;t(e,{componentStack:null})}}function of(){yd===3&&(yd=0,Pu(xd,bd),yd=4)}function sf(){if(yd===1){yd=0;var e=bd,t=xd,n=Sd,r=!!(t.flags&13878);if(t.subtreeFlags&13878||r){r=O.T,O.T=null;var i=k.p;k.p=2;var a=K;K|=4;try{du=fu=!1,Au(t,e,n),n=cp;var o=ti(e.containerInfo),s=n.focusedElem,c=n.selectionRange;if(o!==s&&s&&s.ownerDocument&&ei(s.ownerDocument.documentElement,s)){if(c!==null&&ni(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=$r(s,h),v=$r(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}gh=!!sp,cp=sp=null}finally{K=a,k.p=i,O.T=r}}e.current=t,yd=2}}function cf(){if(yd===2){yd=0;var e=bd,t=xd,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=O.T,O.T=null;var r=k.p;k.p=2;var i=K;K|=4;try{gu(e,t.alternate,t)}finally{K=i,k.p=r,O.T=n}}yd=3}}function lf(){if(yd===4||yd===3){yd=0;var e=Ed;Ed=null,Je();var t=bd,n=xd,r=Sd,i=Td,a=(r&335544064)===r?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?yd=5:(yd=0,xd=bd=null,uf(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(vd=null),Dt(r),n=n.stateNode,at&&typeof at.onCommitFiberRoot==`function`)try{at.onCommitFiberRoot(it,n,void 0,(n.current.flags&128)==128)}catch{}if(i!==null){n=O.T,a=k.p,k.p=2,O.T=null;try{for(var o=t.onRecoverableError,s=0;s<i.length;s++){var c=i[s];o(c.value,{componentStack:c.stack})}}finally{O.T=n,k.p=a}}if(i=Dd,o=Od,Od=null,i!==null&&(Dd=null,o===null&&(o=[]),e!==null))for(c=0;c<i.length;c++)n=(0,i[c])(o),n!==void 0&&e.finished.finally(n);Sd&3&&df(),Ef(t),a=t.pendingLanes,r&261930&&a&42?t===Ad?kd++:(kd=0,Ad=t):(kd=0,Ad=null),Df(0,!1)}}function uf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ba(t)))}function df(){return Ed!==null&&(Ed.skipTransition(),Ed=null),sf(),cf(),lf(),ff()}function ff(){if(yd!==5)return!1;var e=bd,t=Cd;Cd=0;var n=Dt(Sd),r=O.T,a=k.p;try{k.p=32>n?32:n,O.T=null,n=wd,wd=null;var o=bd,s=Sd;if(yd=0,xd=bd=null,Sd=0,K&6)throw Error(i(331));var c=K;if(K|=4,Yu(o.current),Vu(o,o.current,s,n),K=c,Df(0,!1),at&&typeof at.onPostCommitFiberRoot==`function`)try{at.onPostCommitFiberRoot(it,o)}catch{}return!0}finally{k.p=a,O.T=r,uf(e,t)}}function pf(e,t,n){t=Yi(n,t),t=Mc(e.stateNode,t,2),e=To(e,t,2),e!==null&&(xt(e,2),Ef(e))}function Z(e,t,n){if(e.tag===3)pf(e,e,n);else for(;t!==null;){if(t.tag===3){pf(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(vd===null||!vd.has(r))){e=Yi(n,e),n=Nc(2),r=To(t,n,2),r!==null&&(Pc(n,r,t,e),xt(r,2),Ef(r));break}}t=t.return}}function mf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new $u;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(rd=!0,i.add(n),e=hf.bind(null,e,t,n),t.then(e,e))}function hf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,q===e&&(Y&n)===n&&(ad===4||ad===3&&(Y&62914560)===Y&&300>Ye()-md?K&2?cd|=n:Vd(e,0):cd|=n,ud===Y&&(ud=0)),Ef(e)}function gf(e,t){t===0&&(t=yt()),e=Fi(e,t),e!==null&&(xt(e,t),Ef(e))}function _f(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),gf(e,n)}function vf(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),gf(e,n)}function yf(e,t){return Ge(e,t)}var bf=null,xf=null,Sf=!1,Cf=!1,wf=!1,Tf=0;function Ef(e){e!==xf&&e.next===null&&(xf===null?bf=xf=e:xf=xf.next=e),Cf=!0,Sf||(Sf=!0,Nf())}function Df(e,t){if(!wf&&Cf){wf=!0;do for(var n=!1,r=bf;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-st(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,Mf(r,a))}else a=Y,a=ht(r,r===q?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||gt(r,a)||(n=!0,Mf(r,a))}r=r.next}while(n);wf=!1}}function Of(){kf()}function kf(){Cf=Sf=!1;var e=0;Tf!==0&&hp()&&(e=Tf);for(var t=Ye(),n=null,r=bf;r!==null;){var i=r.next,a=Af(r,t);a===0?(r.next=null,n===null?bf=i:n.next=i,i===null&&(xf=n)):(n=r,(e!==0||a&3)&&(Cf=!0)),r=i}yd!==0&&yd!==5||Df(e,!1),Tf!==0&&(Tf=0)}function Af(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-st(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=vt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=q,n=Y,n=ht(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(X===2||X===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ke(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||gt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Ke(r),Dt(n)){case 2:case 8:n=Qe;break;case 32:n=$e;break;case 268435456:n=tt;break;default:n=$e}return r=jf.bind(null,e),n=Ge(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Ke(r),e.callbackPriority=2,e.callbackNode=null,2}function jf(e,t){if(yd!==0&&yd!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(df()&&e.callbackNode!==n)return null;var r=Y;return r=ht(e,e===q?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Fd(e,r,t),Af(e,Ye()),e.callbackNode!=null&&e.callbackNode===n?jf.bind(null,e):null)}function Mf(e,t){if(df())return null;Fd(e,t,!0)}function Nf(){bp(function(){K&6?Ge(Ze,Of):kf()})}function Pf(){if(Tf===0){var e=Ka;e===0&&(e=dt,dt<<=1,!(dt&261888)&&(dt=256)),Tf=e}return Tf}function Ff(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:En(e)}function If(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=Ff((i[Mt]||null).action),o=r.submitter;o&&(t=(t=o[Mt]||null)?Ff(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new qn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Tf!==0){var e=new FormData(i,o);ic(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=new FormData(i,o),ic(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var Lf=0;Lf<Si.length;Lf++){var Rf=Si[Lf];Ci(Rf.toLowerCase(),`on`+(Rf[0].toUpperCase()+Rf.slice(1)))}Ci(mi,`onAnimationEnd`),Ci(hi,`onAnimationIteration`),Ci(gi,`onAnimationStart`),Ci(`dblclick`,`onDoubleClick`),Ci(`focusin`,`onFocus`),Ci(`focusout`,`onBlur`),Ci(_i,`onTransitionRun`),Ci(vi,`onTransitionStart`),Ci(yi,`onTransitionCancel`),Ci(bi,`onTransitionEnd`),Xt(`onMouseEnter`,[`mouseout`,`mouseover`]),Xt(`onMouseLeave`,[`mouseout`,`mouseover`]),Xt(`onPointerEnter`,[`pointerout`,`pointerover`]),Xt(`onPointerLeave`,[`pointerout`,`pointerover`]),Yt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Yt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Yt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Yt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Yt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Yt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var zf=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),Bf=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(zf));function Vf(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Oi(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Oi(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[Pt];n===void 0&&(n=t[Pt]=new Set);var r=e+`__bubble`;n.has(r)||(Gf(t,e,2,!1),n.add(r))}function Hf(e,t,n){var r=0;t&&(r|=4),Gf(n,e,r,t)}var Uf=`_reactListening`+Math.random().toString(36).slice(2);function Wf(e){if(!e[Uf]){e[Uf]=!0,qt.forEach(function(t){t!==`selectionchange`&&(Bf.has(t)||Hf(t,!1,e),Hf(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Uf]||(t[Uf]=!0,Hf(`selectionchange`,!1,t))}}function Gf(e,t,n,r){switch(Ch(t)){case 2:var i=_h;break;case 8:i=vh;break;default:i=yh}n=i.bind(null,t,n,e),i=void 0,!Ln||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Kf(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Vt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}Pn(function(){var r=a,i=kn(n),s=[];a:{var c=xi.get(e);if(c!==void 0){var l=qn,u=e;switch(e){case`keypress`:if(Un(n)===0)break a;case`keydown`:case`keyup`:l=dr;break;case`focusin`:u=`focus`,l=nr;break;case`focusout`:u=`blur`,l=nr;break;case`beforeblur`:case`afterblur`:l=nr;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=er;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=tr;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=mr;break;case mi:case hi:case gi:l=rr;break;case bi:l=hr;break;case`scroll`:case`scrollend`:l=Yn;break;case`wheel`:l=gr;break;case`copy`:case`cut`:case`paste`:l=ir;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=fr;break;case`submit`:l=pr;break;case`toggle`:case`beforetoggle`:l=_r}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=Fn(m,p),g!=null&&d.push(qf(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(l=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,l&&n!==On&&(u=n.relatedTarget||n.fromElement)&&(Vt(u)||u[Nt]))break a;(c||l)&&(u=i.window===i?i:(l=i.ownerDocument)?l.defaultView||l.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?Vt(l):null,l!==null&&(f=o(l),d=l.tag,l!==f||d!==5&&d!==27&&d!==6)&&(l=null)):(c=null,l=r),c!==l&&(d=er,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=fr,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?u:Ut(c),h=l==null?u:Ut(l),u=new d(g,m+`leave`,c,n,i),u.target=f,u.relatedTarget=h,g=null,Vt(i)===r&&(d=new d(p,m+`enter`,l,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,d=c&&l?te(c,l,Yf):null,c!==null&&Xf(s,u,c,d,!1),l!==null&&f!==null&&Xf(s,f,l,d,!0)))}a:{if(c=r?Ut(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var _=Lr;else if(jr(c)){if(Rr)_=qr;else{_=Gr;var v=Wr}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&Cn(r.elementType)&&(_=Lr):_=Kr;if(_&&=_(e,r)){Mr(s,_,n,i);break a}v&&v(e,c,r)}switch(v=r?Ut(r):window,e){case`focusin`:(jr(v)||v.contentEditable===`true`)&&(ii=v,ai=r,oi=null);break;case`focusout`:oi=ai=ii=null;break;case`mousedown`:si=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:si=!1,ci(s,n,i);break;case`selectionchange`:if(ri)break;case`keydown`:case`keyup`:ci(s,n,i)}var y;if(yr)b:{switch(e){case`compositionstart`:var b=`onCompositionStart`;break b;case`compositionend`:b=`onCompositionEnd`;break b;case`compositionupdate`:b=`onCompositionUpdate`;break b}b=void 0}else Dr?Tr(e,n)&&(b=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(b=`onCompositionStart`);b&&(Sr&&n.locale!==`ko`&&(Dr||b!==`onCompositionStart`?b===`onCompositionEnd`&&Dr&&(y=Hn()):(zn=i,Bn=`value`in zn?zn.value:zn.textContent,Dr=!0)),v=Jf(r,b),0<v.length&&(b=new ar(b,e,null,n,i),s.push({event:b,listeners:v}),y?b.data=y:(y=Er(n),y!==null&&(b.data=y)))),(y=xr?Or(e,n):kr(e,n))&&(b=Jf(r,`onBeforeInput`),0<b.length&&(v=new ar(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:v,listeners:b}),v.data=y)),If(s,e,r,n,i)}Vf(s,t)})}function qf(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Jf(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=Fn(e,n),i!=null&&r.unshift(qf(e,i,a)),i=Fn(e,t),i!=null&&r.push(qf(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Yf(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Xf(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=Fn(n,a),l!=null&&o.unshift(qf(n,l,c))):i||(l=Fn(n,a),l!=null&&o.push(qf(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Zf=/\r\n?/g,Qf=/\u0000|\uFFFD/g;function $f(e){return(typeof e==`string`?e:``+e).replace(Zf,`
`).replace(Qf,``)}function ep(e,t){return t=$f(t),$f(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:if(typeof r==`string`)t===`body`||t===`textarea`&&r===``||yn(e,r);else if(typeof r==`number`||typeof r==`bigint`)t!==`body`&&yn(e,``+r);else return;break;case`className`:rn(e,`class`,r);break;case`tabIndex`:rn(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:rn(e,n,r);break;case`style`:Sn(e,r,o);return;case`data`:if(t!==`object`){rn(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=En(r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=En(r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=Dn);return;case`onScroll`:r!=null&&Q(`scroll`,e);return;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=En(r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`credentialless`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),nn(e,`popover`,r);break;case`xlinkActuate`:an(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:an(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:an(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:an(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:an(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:an(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:an(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:an(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:an(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:nn(e,`is`,r);break;case`innerText`:case`textContent`:return;default:if(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)n=wn.get(n)||n,nn(e,n,r);else return}A=!0}function tp(e,t,n,r,a,o){switch(n){case`style`:Sn(e,r,o);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`children`:if(typeof r==`string`)yn(e,r);else if(typeof r==`number`||typeof r==`bigint`)yn(e,``+r);else return;break;case`onScroll`:r!=null&&Q(`scroll`,e);return;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);return;case`onClick`:r!=null&&(e.onclick=Dn);return;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:return;case`innerText`:case`textContent`:return;default:if(!Jt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),o=n.slice(2,a?n.length-7:void 0),t=e[Mt]||null,t=t==null?null:t[n],typeof t==`function`&&e.removeEventListener(o,t,a),typeof r==`function`)){typeof t!=`function`&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(o,r,a);break a}A=!0,n in e?e[n]=r:!0===r?e.setAttribute(n,``):nn(e,n,r)}return}A=!0}function np(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}mn(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&gn(e,!!r,n,!0):gn(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}vn(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<zf.length;r++)Q(zf[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(Cn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&tp(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}var rp={};function ip(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:m!==f&&(A=!0),o=m;break;case`name`:m!==f&&(A=!0),a=m;break;case`checked`:m!==f&&(A=!0),u=m;break;case`defaultChecked`:m!==f&&(A=!0),d=m;break;case`value`:m!==f&&(A=!0),s=m;break;case`defaultValue`:m!==f&&(A=!0),c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}pn(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:o!==l&&(A=!0),p=o;break;case`defaultValue`:o!==l&&(A=!0),c=o;break;case`multiple`:o!==l&&(A=!0),s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?gn(e,!!n,n?[]:``,!1):gn(e,!!n,t,!0)):gn(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:a!==o&&(A=!0),p=a;break;case`defaultValue`:a!==o&&(A=!0),m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}_n(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:p!==m&&(A=!0),e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(Cn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&tp(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||tp(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function ap(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function op(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&ap(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&ap(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var sp=null,cp=null;function lp(e){return e.nodeType===9?e:e.ownerDocument}function up(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function dp(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function fp(e,t,n,r){return n=lp(n).createElement(e),n[jt]=r,n[Mt]=t,np(n,e,t),Gt(n),n}function pp(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var mp=null;function hp(){var e=window.event;return e&&e.type===`popstate`?e!==mp&&(mp=e,!0):(mp=null,!1)}var gp=typeof setTimeout==`function`?setTimeout:void 0,_p=typeof clearTimeout==`function`?clearTimeout:void 0,vp=typeof Promise==`function`?Promise:void 0,yp=typeof requestAnimationFrame==`function`?requestAnimationFrame:gp,bp=typeof queueMicrotask==`function`?queueMicrotask:vp===void 0?gp:function(e){return vp.resolve(null).then(e).catch(xp)};function xp(e){setTimeout(function(){throw e})}function Sp(e){return e===`head`}function Cp(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Hh(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)_m(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,_m(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[Rt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&_m(e.ownerDocument.body)}n=i}while(n);Hh(t)}function wp(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function Tp(e,t,n){if(t=CSS.escape(t)===t?t:`r-`+btoa(t).replace(/=/g,``),e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display===`inline`){if(t=e.getClientRects(),t.length===1)var r=1;else for(var i=r=0;i<t.length;i++){var a=t[i];0<a.width&&0<a.height&&r++}r===1&&(e=e.style,e.display=t.length===1?`inline-block`:`block`,e.marginTop=`-`+n.paddingTop,e.marginBottom=`-`+n.paddingBottom)}}function Ep(e,t){e=e.style,t=t.style;var n=t==null?null:t.hasOwnProperty(`viewTransitionName`)?t.viewTransitionName:t.hasOwnProperty(`view-transition-name`)?t[`view-transition-name`]:null;e.viewTransitionName=n==null||typeof n==`boolean`?``:(``+n).trim(),n=t==null?null:t.hasOwnProperty(`viewTransitionClass`)?t.viewTransitionClass:t.hasOwnProperty(`view-transition-class`)?t[`view-transition-class`]:null,e.viewTransitionClass=n==null||typeof n==`boolean`?``:(``+n).trim(),e.display===`inline-block`&&(t==null?e.display=e.margin=``:(n=t.display,e.display=n==null||typeof n==`boolean`?``:n,n=t.margin,n==null?(n=t.hasOwnProperty(`marginTop`)?t.marginTop:t[`margin-top`],e.marginTop=n==null||typeof n==`boolean`?``:n,t=t.hasOwnProperty(`marginBottom`)?t.marginBottom:t[`margin-bottom`],e.marginBottom=t==null||typeof t==`boolean`?``:t):e.margin=n))}function Dp(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position===`absolute`||t.position===`fixed`,clip:t.clipPath!==`none`||t.overflow!==`visible`||t.filter!==`none`||t.mask!==`none`||t.mask!==`none`||t.borderRadius!==`0px`,view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function Op(e){return Dp(e.getBoundingClientRect(),getComputedStyle(e),e)}function kp(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return Dp(t,n,e)}function Ap(e){return e.documentElement.clientHeight}function jp(e){this.addEventListener(`load`,e),this.addEventListener(`error`,e)}function Mp(e,t,n,r,i,a,o,s,c){var l=t.nodeType===9?t:t.ownerDocument;try{var u=l.startViewTransition({update:function(){var t=l.defaultView,n=t.navigation&&t.navigation.transition,o=l.fonts.status;r();var s=[];if(o===`loaded`&&(Ap(l),l.fonts.status===`loading`&&s.push(l.fonts.ready)),o=s.length,e!==null)for(var c=e.suspenseyImages,u=0,d=0;d<c.length;d++){var f=c[d];if(!f.complete){var p=f.getBoundingClientRect();if(0<p.bottom&&0<p.right&&p.top<t.innerHeight&&p.left<t.innerWidth){if(u+=Xm(f),u>$m){s.length=o;break}f=new Promise(jp.bind(f)),s.push(f)}}}if(0<s.length)return t=Promise.race([Promise.all(s),new Promise(function(e){return setTimeout(e,500)})]).then(i,i),(n?Promise.allSettled([n.finished,t]):t).then(a,a);if(i(),n)return n.finished.then(a,a);a()},types:n});l.__reactViewTransition=u;var d=[];return u.ready.then(function(){for(var e=l.documentElement.getAnimations({subtree:!0}),t=0;t<e.length;t++){var n=e[t],r=n.effect,i=r.pseudoElement;if(i!=null&&i.startsWith(`::view-transition`)){d.push(n),n=r.getKeyframes();for(var a=i=void 0,s=!0,c=0;c<n.length;c++){var u=n[c],f=u.width;if(i===void 0)i=f;else if(i!==f){s=!1;break}if(f=u.height,a===void 0)a=f;else if(a!==f){s=!1;break}delete u.width,delete u.height,u.transform===`none`&&delete u.transform}s&&i!==void 0&&a!==void 0&&(r.setKeyframes(n),s=getComputedStyle(r.target,r.pseudoElement),s.width!==i||s.height!==a)&&(s=n[0],s.width=i,s.height=a,s=n[n.length-1],s.width=i,s.height=a,r.setKeyframes(n))}}o()},function(e){l.__reactViewTransition===u&&(l.__reactViewTransition=null);try{if(typeof e==`object`&&e)switch(e.name){case`InvalidStateError`:(e.message===`View transition was skipped because document visibility state is hidden.`||e.message===`Skipping view transition because document visibility state has become hidden.`||e.message===`Skipping view transition because viewport size changed.`||e.message===`Transition was aborted because of invalid state`)&&(e=null)}e!==null&&c(e)}finally{r(),i(),o()}}),u.finished.finally(function(){for(var e=0;e<d.length;e++)d[e].cancel();l.__reactViewTransition===u&&(l.__reactViewTransition=null),s()}),u}catch{return r(),i(),o(),null}}function Np(e,t){this._scope=document.documentElement,this._selector=`::view-transition-`+e+`(`+t+`)`}Np.prototype.animate=function(e,t){return t=typeof t==`number`?{duration:t}:T({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},Np.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),r=[],i=0;i<n.length;i++){var a=n[i].effect;a!==null&&a.target===e&&a.pseudoElement===t&&r.push(n[i])}return r},Np.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Pp(e){return{name:e,group:new Np(`group`,e),imagePair:new Np(`image-pair`,e),old:new Np(`old`,e),new:new Np(`new`,e)}}function Fp(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Fp.prototype.addEventListener=function(e,t,n){var r=null,i=null;if(!(n!=null&&typeof n!=`boolean`&&(r=n.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(Bp(a,e,t,n)===-1){var o=this,s=t;n!=null&&typeof n!=`boolean`&&!0===n.once&&(s=function(r){o.removeEventListener(e,t,n),typeof t==`function`?t.call(this,r):t.handleEvent(r)}),r!==null&&(i=o.removeEventListener.bind(o,e,t,n),r.addEventListener(`abort`,i,{once:!0}),i=r.removeEventListener.bind(r,`abort`,i)),r=Rp(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:s,cleanup:i}),m(this._fragmentFiber.child,!1,Ip,e,s,r)}this._eventListeners=a}};function Ip(e,t,n,r){return b(e).addEventListener(t,n,r),!1}Fp.prototype.removeEventListener=function(e,t,n){var r=this._eventListeners;if(r!==null&&(t=Bp(r,e,t,n),t!==-1)){var i=r[t];n=i.attachedListener;var a=i.cleanup;i=Rp(i.optionsOrUseCapture),m(this._fragmentFiber.child,!1,Lp,e,n,i),r.splice(t,1),a!==null&&a()}};function Lp(e,t,n,r){return b(e).removeEventListener(t,n,r),!1}function Rp(e){return e!=null&&typeof e!=`boolean`&&(!0===e.once||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function zp(e){return e==null?`c=0`:typeof e==`boolean`?`c=`+(e?`1`:`0`):`c=`+(e.capture?`1`:`0`)}function Bp(e,t,n,r){if(e.length===0)return-1;r=zp(r);for(var i=0;i<e.length;i++){var a=e[i];if(a.type===t&&a.listener===n&&zp(a.optionsOrUseCapture)===r)return i}return-1}Fp.prototype.dispatchEvent=function(e){var t=g(this._fragmentFiber);if(t===null)return!0;t=b(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var r=t.nodeType===9?t.createComment(``):document.createTextNode(``);if(n)for(var i=0;i<n.length;i++){var a=n[i];r.addEventListener(a.type,a.attachedListener,Rp(a.optionsOrUseCapture))}if(t.appendChild(r),e=r.dispatchEvent(e),n)for(i=0;i<n.length;i++)a=n[i],r.removeEventListener(a.type,a.attachedListener,Rp(a.optionsOrUseCapture));return t.removeChild(r),e}return t.dispatchEvent(e)},Fp.prototype.focus=function(e){m(this._fragmentFiber.child,!0,Vp,e,void 0,void 0)};function Vp(e,t){return e.tag!==6&&(e=b(e),pm(e,t))}Fp.prototype.focusLast=function(e){var t=[];m(this._fragmentFiber.child,!0,Hp,t,void 0,void 0);for(var n=t.length-1;0<=n&&!Vp(t[n],e);n--);};function Hp(e,t){return t.push(e),!1}Fp.prototype.blur=function(){var e=g(this._fragmentFiber);e!==null&&(e=b(e),e=lp(e).activeElement,e!==null&&m(this._fragmentFiber.child,!1,Up,e,void 0,void 0))};function Up(e,t){return e.tag!==6&&(e=b(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Fp.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),m(this._fragmentFiber.child,!1,Wp,e,void 0,void 0)};function Wp(e,t){return e.tag!==6&&(e=b(e),t.observe(e),!1)}Fp.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),m(this._fragmentFiber.child,!1,Gp,e,void 0,void 0);for(var n=t=0;n<Kp.length;n++){var r=Kp[n];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):Kp[t++]=r}Kp.length=t}};function Gp(e,t){return e.tag!==6&&(e=b(e),t.unobserve(e),!1)}var Kp=[],qp=!1;function Jp(e,t,n){Kp.push({fragmentInstance:e,observer:t,instance:n}),qp||(qp=!0,mm(function(){qp=!1;var e=Kp;Kp=[];for(var t=0;t<e.length;t++){var n=e[t];n.observer.unobserve(n.instance)}}))}Fp.prototype.getClientRects=function(){var e=[];return m(this._fragmentFiber.child,!1,Yp,e,void 0,void 0),e};function Yp(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=b(e),t.push.apply(t,e.getClientRects());return!1}Fp.prototype.getRootNode=function(e){var t=g(this._fragmentFiber);return t===null?this:b(t).getRootNode(e)},Fp.prototype.compareDocumentPosition=function(e){var t=g(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];m(this._fragmentFiber.child,!1,Hp,n,void 0,void 0);var r=b(t);if(n.length===0){if(n=r,_(this._fragmentFiber)){a:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break a}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var i=r=n.compareDocumentPosition(e);return n===e?i=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=v(t)[1],n===null?i=Node.DOCUMENT_POSITION_PRECEDING:(e=b(n).compareDocumentPosition(e),i=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),i|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=b(n[0]),i=b(n[n.length-1]);var a=_(this._fragmentFiber)?t.parentElement:r;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY;var o=t.compareDocumentPosition(e),s=i.compareDocumentPosition(e),c=o&Node.DOCUMENT_POSITION_CONTAINED_BY||s&Node.DOCUMENT_POSITION_CONTAINED_BY;return s=r&&a&&o&Node.DOCUMENT_POSITION_FOLLOWING&&s&Node.DOCUMENT_POSITION_PRECEDING,t=r&&t===e||a&&i===e||c||s?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&t===e||!a&&i===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:o,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Xp(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Xp(e,t,n,r,i){var a=Vt(i);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)a:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break a}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=i.ownerDocument,i===a||i===a.documentElement||i===a.body;a:{for(a=t,t=g(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break a}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=te(n,a,w),t===null?t=!1:(m(t,!0,C,a,n),a=x,x=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===r)&&(t=te(r,a,w),t===null?t=!1:(m(t,!0,ee,a,r),a=x,S=x=null,t=a!==null)),t):!1}function Zp(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Fp.prototype.scrollIntoView=function(e){if(typeof e==`object`)throw Error(i(566));var t=[];m(this._fragmentFiber.child,!1,Hp,t,void 0,void 0);var n=!1!==e;if(t.length===0){var r=v(this._fragmentFiber);if(r=n?r[1]||r[0]||g(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=b(r),Zp(e,n);return}if(r=b(r),r.nodeType!==9){if(r.nodeType===11){n=`host`in r?r.host:null,n!==null&&n.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=n?t.length-1:0;r!==(n?-1:t.length);){var a=t[r];a.tag===6?(a=b(a),Zp(a,n)):b(a).scrollIntoView(e),r+=n?-1:1}};function Qp(e,t){return e=b(e),$p(e,t),!1}function $p(e,t){e.reactFragments??=new Set,e.reactFragments.add(t)}function em(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.addEventListener(i.type,i.attachedListener,Rp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){for(var r=0,i=0;i<Kp.length;i++){var a=Kp[i];(a.fragmentInstance!==t||a.observer!==n||a.instance!==e)&&(Kp[r++]=a)}Kp.length=r,n.observe(e)}),$p(e,t))}function tm(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.removeEventListener(i.type,i.attachedListener,Rp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){typeof n.rootMargin==`string`?Jp(t,n,e):n.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function nm(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:nm(n),Bt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function rm(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[Rt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=lm(e.nextSibling),e===null)break}return null}function im(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=lm(e.nextSibling),e===null))return null;return e}function am(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=lm(e.nextSibling),e===null))return null;return e}function om(e){return e.data===`$?`||e.data===`$~`}function sm(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function cm(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function lm(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var um=null;function dm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return lm(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function fm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function pm(e,t){function n(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener(`focus`,n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener(`focus`,n,!0)}return r}function mm(e){yp(function(){yp(function(t){return e(t)})})}function hm(e,t,n){switch(t=lp(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function gm(e,t,n){for(var r in n){var i=n[r];n.hasOwnProperty(r)&&i!=null&&$(e,t,r,null,rp,i)}n.dangerouslySetInnerHTML!=null&&(e.textContent=``),e.onclick===Dn&&(e.onclick=null),Bt(e)}function _m(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Bt(e)}var vm=new Map,ym=new Set;function bm(e){if(typeof e.getRootNode==`function`){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var xm=k.d;k.d={f:Sm,r:Cm,D:Em,C:Dm,L:Om,m:km,X:jm,S:Am,M:Mm};function Sm(){var e=xm.f(),t=zd();return e||t}function Cm(e){var t=Ht(e);t!==null&&t.tag===5&&t.type===`form`?oc(t):xm.r(e)}var wm=typeof document>`u`?null:document;function Tm(e,t,n){var r=wm;if(r&&typeof t==`string`&&t){var i=fn(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),ym.has(i)||(ym.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),np(t,`link`,e),Gt(t),r.head.appendChild(t)))}}function Em(e){xm.D(e),Tm(`dns-prefetch`,e,null)}function Dm(e,t){xm.C(e,t),Tm(`preconnect`,e,t)}function Om(e,t,n){xm.L(e,t,n);var r=wm;if(r&&e&&t){var i=`link[rel="preload"][as="`+fn(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+fn(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+fn(n.imageSizes)+`"]`)):i+=`[href="`+fn(e)+`"]`;var a=i;switch(t){case`style`:a=Pm(e);break;case`script`:a=Rm(e)}if(!(vm.has(a)||(e=T({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),vm.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Fm(a))||t===`script`&&r.querySelector(zm(a))))){var o=r.createElement(`link`);np(o,`link`,e),t===`style`&&(o[zt]=!0,o.onload=o.onerror=function(){Kt(o)}),Gt(o),r.head.appendChild(o)}}}function km(e,t){xm.m(e,t);var n=wm;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+fn(r)+`"][href="`+fn(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Rm(e)}if(!vm.has(a)&&(e=T({rel:`modulepreload`,href:e},t),vm.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(zm(a)))return}r=n.createElement(`link`),np(r,`link`,e),Gt(r),n.head.appendChild(r)}}}function Am(e,t,n){xm.S(e,t,n);var r=wm;if(r&&e){var i=Wt(r).hoistableStyles,a=Pm(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Fm(a)))s.loading=5;else{e=T({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=vm.get(a))&&Hm(e,n);var c=o=r.createElement(`link`);Gt(c),np(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Vm(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function jm(e,t){xm.X(e,t);var n=wm;if(n&&e){var r=Wt(n).hoistableScripts,i=Rm(e),a=r.get(i);a||(a=n.querySelector(zm(i)),a||(e=T({src:e,async:!0},t),(t=vm.get(i))&&Um(e,t),a=n.createElement(`script`),Gt(a),np(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Mm(e,t){xm.M(e,t);var n=wm;if(n&&e){var r=Wt(n).hoistableScripts,i=Rm(e),a=r.get(i);a||(a=n.querySelector(zm(i)),a||(e=T({src:e,async:!0,type:`module`},t),(t=vm.get(i))&&Um(e,t),a=n.createElement(`script`),Gt(a),np(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Nm(e,t,n,r){var a=(a=je.current)?bm(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(n=Pm(n.href),t=Wt(a).hoistableStyles,r=t.get(n),r||(r={type:`style`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Pm(n.href);var o=Wt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(Fm(e)))?o._p||(s.instance=o,s.state.loading=5):(o=vm.get(e),o||(o={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},vm.set(e,o)),Lm(a,e,o,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(n=Rm(n),t=Wt(a).hoistableScripts,r=t.get(n),r||(r={type:`script`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Pm(e){return`href="`+fn(e)+`"`}function Fm(e){return`link[rel="stylesheet"][`+e+`]`}function Im(e){return T({},e,{"data-precedence":e.precedence,precedence:null})}function Lm(e,t,n,r){if(t=e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)){if(!0!==t[zt]){r.loading=1;return}}else t=e.createElement(`link`),t[zt]=!0,t.onload=t.onerror=Kt.bind(null,t),np(t,`link`,n),Gt(t),e.head.appendChild(t);r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2})}function Rm(e){return`[src="`+fn(e)+`"]`}function zm(e){return`script[async]`+e}function Bm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+fn(n.href)+`"]`);if(r)return t.instance=r,Gt(r),r;var a=T({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Gt(r),np(r,`style`,a),Vm(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Pm(n.href);var o=e.querySelector(Fm(a));if(o)return t.state.loading|=4,t.instance=o,Gt(o),o;r=Im(n),(a=vm.get(a))&&Hm(r,a),o=(e.ownerDocument||e).createElement(`link`),Gt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),np(o,`link`,r),t.state.loading|=4,Vm(o,n.precedence,e),t.instance=o;case`script`:return o=Rm(n.src),(a=e.querySelector(zm(o)))?(t.instance=a,Gt(a),a):(r=n,(a=vm.get(o))&&(r=T({},n),Um(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Gt(a),np(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Vm(r,n.precedence,e));return t.instance}function Vm(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Hm(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Um(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Wm=null;function Gm(e,t,n){if(Wm===null){var r=new Map,i=Wm=new Map;i.set(n,r)}else i=Wm,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[Rt]||a[jt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Km(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function qm(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Jm(e,t){return e===`img`&&t.src!=null&&t.src!==``&&t.onLoad==null&&t.loading!==`lazy`}function Ym(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Xm(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio==`number`?devicePixelRatio:1)*.25}function Zm(e,t){typeof t.decode==`function`&&(e.imgCount++,t.complete||(e.imgBytes+=Xm(t),e.suspenseyImages.push(t)),e=rh.bind(e),t.decode().then(e,e))}function Qm(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Pm(r.href),a=t.querySelector(Fm(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=nh.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Gt(a);return}a=t.ownerDocument||t,r=Im(r),(i=vm.get(i))&&Hm(r,i),a=a.createElement(`link`),Gt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),np(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=nh.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var $m=0;function eh(e,t){return e.stylesheets&&e.count===0&&ah(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&$m===0&&($m=62500*op());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>$m?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function th(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)ah(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function nh(){this.count--,th(this)}function rh(){this.imgCount--,th(this)}var ih=null;function ah(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ih=new Map,t.forEach(oh,e),ih=null,nh.call(e))}function oh(e,t){if(!(t.state.loading&4)){var n=ih.get(e);if(n)var r=n.get(null);else{n=new Map,ih.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=nh.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var sh={$$typeof:se,Provider:null,Consumer:null,_currentValue:Ce,_currentValue2:Ce,_threadCount:0};function ch(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=bt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bt(0),this.hiddenUpdates=bt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.transitionTypes=null,this.incompleteTransitions=new Map}function lh(e,t,n,r,i,a,o,s,c,l,u,d){return e=new ch(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=zi(3,null,null,t),e.current=a,a.stateNode=e,t=za(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},So(a),e}function uh(e){return e?(e=Li,e):Li}function dh(e,t,n,r,i,a){i=uh(i),r.context===null?r.context=i:r.pendingContext=i,r=wo(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=To(e,r,t),n!==null&&(Pd(n,e,t),Eo(n,e,t))}function fh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ph(e,t){fh(e,t),(e=e.alternate)&&fh(e,t)}function mh(e){if(e.tag===13||e.tag===31){var t=Fi(e,67108864);t!==null&&Pd(t,e,67108864),ph(e,67108864)}}function hh(e){if(e.tag===13||e.tag===31){var t=jd();t=Et(t);var n=Fi(e,t);n!==null&&Pd(n,e,t),ph(e,t)}}var gh=!0;function _h(e,t,n,r){var i=O.T;O.T=null;var a=k.p;try{k.p=2,yh(e,t,n,r)}finally{k.p=a,O.T=i}}function vh(e,t,n,r){var i=O.T;O.T=null;var a=k.p;try{k.p=8,yh(e,t,n,r)}finally{k.p=a,O.T=i}}function yh(e,t,n,r){if(gh){var i=bh(r);if(i===null)Kf(e,t,r,xh,n),Mh(e,r);else if(Ph(i,e,t,n,r))r.stopPropagation();else if(Mh(e,r),t&4&&-1<jh.indexOf(e)){for(;i!==null;){var a=Ht(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=mt(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-st(o);s.entanglements[1]|=c,o&=~c}Ef(a),!(K&6)&&(gd=Ye()+500,Df(0,!1))}}break;case 31:case 13:s=Fi(a,2),s!==null&&Pd(s,a,2),zd(),ph(a,2)}if(a=bh(r),a===null&&Kf(e,t,r,xh,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Kf(e,t,r,null,n)}}function bh(e){return e=kn(e),Sh(e)}var xh=null;function Sh(e){if(xh=null,e=Vt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return xh=e,null}function Ch(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`fullscreenerror`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`resize`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Xe()){case Ze:return 2;case Qe:return 8;case $e:case et:return 32;case tt:return 268435456;default:return 32}default:return 32}}var wh=!1,Th=null,Eh=null,Dh=null,Oh=new Map,kh=new Map,Ah=[],jh=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Mh(e,t){switch(e){case`focusin`:case`focusout`:Th=null;break;case`dragenter`:case`dragleave`:Eh=null;break;case`mouseover`:case`mouseout`:Dh=null;break;case`pointerover`:case`pointerout`:Oh.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:kh.delete(t.pointerId)}}function Nh(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Ht(t),t!==null&&mh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ph(e,t,n,r,i){switch(t){case`focusin`:return Th=Nh(Th,e,t,n,r,i),!0;case`dragenter`:return Eh=Nh(Eh,e,t,n,r,i),!0;case`mouseover`:return Dh=Nh(Dh,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return Oh.set(a,Nh(Oh.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,kh.set(a,Nh(kh.get(a)||null,e,t,n,r,i)),!0}return!1}function Fh(e){var t=Vt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,kt(e.priority,function(){hh(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,kt(e.priority,function(){hh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ih(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=bh(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);On=r,n.target.dispatchEvent(r),On=null}else return t=Ht(n),t!==null&&mh(t),e.blockedOn=n,!1;t.shift()}return!0}function Lh(e,t,n){Ih(e)&&n.delete(t)}function Rh(){wh=!1,Th!==null&&Ih(Th)&&(Th=null),Eh!==null&&Ih(Eh)&&(Eh=null),Dh!==null&&Ih(Dh)&&(Dh=null),Oh.forEach(Lh),kh.forEach(Lh)}function zh(e,n){e.blockedOn===n&&(e.blockedOn=null,wh||(wh=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Rh)))}var Bh=null;function Vh(e){Bh!==e&&(Bh=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Bh===e&&(Bh=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(Sh(r||n)===null)continue;break}var a=Ht(n);a!==null&&(e.splice(t,3),t-=3,ic(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Hh(e){function t(t){return zh(t,e)}Th!==null&&zh(Th,e),Eh!==null&&zh(Eh,e),Dh!==null&&zh(Dh,e),Oh.forEach(t),kh.forEach(t);for(var n=0;n<Ah.length;n++){var r=Ah[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Ah.length&&(n=Ah[0],n.blockedOn===null);)Fh(n),n.blockedOn===null&&Ah.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[Mt]||null;if(typeof a==`function`)o||Vh(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[Mt]||null)s=o.formAction;else if(Sh(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Vh(n)}}}function Uh(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Wh(e){this._internalRoot=e}Gh.prototype.render=Wh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;dh(n,jd(),e,t,null,null)},Gh.prototype.unmount=Wh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dh(e.current,2,null,e,null,null),zd(),t[Nt]=null}};function Gh(e){this._internalRoot=e}Gh.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ot();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ah.length&&t!==0&&t<Ah[n].priority;n++);Ah.splice(n,0,e),n===0&&Fh(e)}};var Kh=n.version;if(Kh!==`19.3.0`)throw Error(i(527,Kh,`19.3.0`));k.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=u(t),e=e===null?null:f(e),e=e===null?null:e.stateNode,e};var qh={bundleType:0,version:`19.3.0`,rendererPackageName:`react-dom`,currentDispatcherRef:O,reconcilerVersion:`19.3.0`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Jh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jh.isDisabled&&Jh.supportsFiber)try{it=Jh.inject(qh),at=Jh}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Dc,s=Oc,c=kc;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=lh(e,1,!1,null,null,n,r,null,o,s,c,Uh),e[Nt]=t.current,Wf(e),new Wh(t)}})),_=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=g()})),v=l(d(),1),y=_(),b=`modulepreload`,x=function(e){return`/Spanish-teacher/`+e},S={},C=function(e){return e.pathname.endsWith(`.css`)},ee=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=x(t,n);let r=s(t);if(r.href in S)return;S[r.href]=!0;let i=C(r);if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let o=document.createElement(`link`);if(o.rel=i?`stylesheet`:b,i||(o.as=`script`),o.crossOrigin=``,o.href=r.href,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),i)return new Promise((e,t)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>t(Error(`Unable to preload CSS for ${r}`)))})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},w=`true`,te=`false`,T=w===`true`,E=te===`true`;function ne(e={}){let{immediate:t=!1,onNeedReload:n,onNeedRefresh:r,onOfflineReady:i,onRegistered:a,onRegisteredSW:o,onRegisterError:s}=e,c,l,u,d=async(e=!0)=>{await l,T||u?.()};async function f(){if(`serviceWorker`in navigator){if(c=await ee(async()=>{let{Workbox:e}=await import(`./workbox-window.prod.es5-Bd17z0YL.js`);return{Workbox:e}},[]).then(({Workbox:e})=>new e(`/Spanish-teacher/sw.js`,{scope:`/Spanish-teacher/`,type:`classic`})).catch(e=>{s?.(e)}),!c)return;if(u=()=>{c?.messageSkipWaiting()},!E){if(T)c.addEventListener(`activated`,e=>{(e.isUpdate||e.isExternal)&&(n?n():window.location.reload())}),c.addEventListener(`installed`,e=>{e.isUpdate||i?.()});else{let e=!1,t=()=>{e=!0,c?.addEventListener(`controlling`,e=>{e.isUpdate&&(n?n():window.location.reload())}),r?.()};c.addEventListener(`installed`,n=>{n.isUpdate===void 0?n.isExternal===void 0?!e&&i?.():n.isExternal?t():!e&&i?.():n.isUpdate||i?.()}),c.addEventListener(`waiting`,t)}}c.register({immediate:t}).then(e=>{o?o(`/Spanish-teacher/sw.js`,e):a?.(e)}).catch(e=>{s?.(e)})}}return l=f(),d}var re=/[¿?¡!.,;:"“”'‘’«»()[\]…–—]/g,ie=/[\p{L}\p{M}\p{N}]+/gu;function ae(e){return e.toLowerCase().replace(re,` `).replace(/\s+/g,` `).trim()}function D(e){return ae(e).normalize(`NFD`).replace(/[̀-ͯ]/g,``)}function oe(e){let t=[],n=0;for(let r of e.matchAll(ie)){let i=r.index??0;i>n&&t.push({text:e.slice(n,i),word:!1,start:n}),t.push({text:r[0],word:!0,start:i}),n=i+r[0].length}return n<e.length&&t.push({text:e.slice(n),word:!1,start:n}),t}function se(e){return[...e.matchAll(ie)].map(e=>e[0])}var ce=new Set([`a`,`e`,`i`,`o`,`u`,`á`,`é`,`í`,`ó`,`ú`,`ü`]),le=new Set([`a`,`e`,`o`,`á`,`é`,`ó`]),ue=new Set([`pl`,`pr`,`bl`,`br`,`fl`,`fr`,`cl`,`cr`,`gl`,`gr`,`tr`,`dr`,`kl`,`kr`]),de={a:`á`,e:`é`,i:`í`,o:`ó`,u:`ú`},fe={á:`a`,é:`e`,í:`i`,ó:`o`,ú:`u`};function pe(e){let t=[],n=0;for(;n<e.length;){let r=e[n],i=e[n+1]??``,a=e[n+2]??``;if(r===`c`&&i===`h`||r===`l`&&i===`l`||r===`r`&&i===`r`){t.push({s:r+i,v:!1,start:n}),n+=2;continue}if((r===`q`||r===`g`)&&i===`u`&&a!==``&&`eiéí`.includes(a)){t.push({s:r+i,v:!1,start:n}),n+=2;continue}if(r===`y`){t.push({s:r,v:!ce.has(i),start:n}),n++;continue}t.push({s:r,v:ce.has(r),start:n}),n++}return t}function me(e,t){let n=le.has(e),r=le.has(t);return!!(n&&r||(e===`í`||e===`ú`)&&r||n&&(t===`í`||t===`ú`))}function he(e){let t=pe(e.toLowerCase()),n=[];for(let e=0;e<t.length;e++){if(!t[e].v)continue;let r=n[n.length-1];r&&r[1]===e-1&&!me(t[e-1].s,t[e].s)?r[1]=e:n.push([e,e])}if(n.length<=1)return{syl:[e],unitRanges:[[0,t.length]],us:t};let r=[];for(let e=0;e<n.length-1;e++){let i=n[e][1],a=n[e+1][0],o=t.slice(i+1,a),s=o.length,c;c=s===0?a:s===1?i+1:s===2?ue.has(o[0].s+o[1].s)?i+1:i+2:s===3?ue.has(o[1].s+o[2].s)?i+2:i+3:ue.has(o[s-2].s+o[s-1].s)?a-2:a-1,r.push(c)}let i=[],a=[],o=0;for(let n of r)i.push(e.slice(t[o].start,t[n].start)),a.push([o,n]),o=n;return i.push(e.slice(t[o].start)),a.push([o,t.length]),{syl:i,unitRanges:a,us:t}}function ge(e){return he(e).syl}function _e(e){let t=ge(e);for(let e=0;e<t.length;e++)if(/[áéíóú]/i.test(t[e]))return e;if(t.length===1)return 0;let n=e.toLowerCase().slice(-1);return`aeiouns`.includes(n)?t.length-2:t.length-1}function ve(e,t){let{unitRanges:n,us:r}=he(e),[i,a]=n[t]??[0,0],o=r.slice(i,a).filter(e=>e.v);if(!o.length)return e;let s=o.find(e=>le.has(e.s))??o[o.length-1],c=e[s.start],l=c.toLowerCase(),u=de[l];if(!u)return e;let d=c===l?u:u.toUpperCase();return e.slice(0,s.start)+d+e.slice(s.start+1)}function ye(e){let t=``;for(let n=0;n<e.length;n++){let r=e[n],i=fe[r];if(!i){t+=r;continue}if(r===`í`||r===`ú`){let i=e[n-1]??``,a=e[n+1]??``;if(le.has(i)||le.has(a)){t+=r;continue}}t+=i}return t}function be(e,t){let n=_e(e),r=ye(e)+t;return _e(r)===n?r:ve(r,n)}function xe(e){let t=ge(e).length;return _e(e)===t-1?e:ve(ye(e),t-1)}var Se=`cero.uno.dos.tres.cuatro.cinco.seis.siete.ocho.nueve.diez.once.doce.trece.catorce.quince.dieciséis.diecisiete.dieciocho.diecinueve.veinte.veintiuno.veintidós.veintitrés.veinticuatro.veinticinco.veintiséis.veintisiete.veintiocho.veintinueve`.split(`.`),O=[``,``,`veinte`,`treinta`,`cuarenta`,`cincuenta`,`sesenta`,`setenta`,`ochenta`,`noventa`],k=[``,`ciento`,`doscientos`,`trescientos`,`cuatrocientos`,`quinientos`,`seiscientos`,`setecientos`,`ochocientos`,`novecientos`];function Ce(e){if(e<30)return Se[e];if(e<100){let t=Math.floor(e/10),n=e%10;return n?`${O[t]} y ${Se[n]}`:O[t]}if(e===100)return`cien`;let t=Math.floor(e/100),n=e%100;return n?`${k[t]} ${Ce(n)}`:k[t]}function we(e){if(e=Math.floor(Math.abs(e)),e<1e3)return Ce(e);if(e<1e6){let t=Math.floor(e/1e3),n=e%1e3,r=t===1?`mil`:`${Te(Ce(t))} mil`;return n?`${r} ${Ce(n)}`:r}let t=Math.floor(e/1e6),n=e%1e6,r=t===1?`un millón`:`${Te(we(t))} millones`;return n?`${r} ${we(n)}`:r}function Te(e){return e.replace(/veintiuno$/,`veintiún`).replace(/uno$/,`un`)}function Ee(e){return e.replace(/\d+/g,e=>we(Number(e)))}function De(e,t){if(e===t)return 0;if(!e.length)return t.length;if(!t.length)return e.length;let n=[],r=Array.from({length:t.length+1},(e,t)=>t);for(let i=1;i<=e.length;i++){let a=[i];for(let o=1;o<=t.length;o++)a[o]=Math.min(r[o]+1,a[o-1]+1,r[o-1]+(e[i-1]===t[o-1]?0:1)),i>1&&o>1&&e[i-1]===t[o-2]&&e[i-2]===t[o-1]&&(a[o]=Math.min(a[o],n[o-2]+1));n=r,r=a}return r[t.length]}function Oe(e,t){let n=D(e),r=D(t);return!n&&!r?1:1-De(n,r)/Math.max(n.length,r.length)}function ke(e,t){let n=ae(e),r=ae(t);if(!n)return`wrong`;if(n===r)return`exact`;if(D(n)===D(r))return`accent`;let i=D(n),a=D(r),o=De(i,a);return a.length>=5&&o===1||a.length>=12&&o===2?`typo`:`wrong`}function Ae(e,t){let n=[`exact`,`accent`,`typo`,`wrong`],r={verdict:`wrong`,match:t[0]??``};for(let i of t){let t=ke(e,i);n.indexOf(t)<n.indexOf(r.verdict)&&(r={verdict:t,match:i})}return r}function je(e){return e.replace(/^(el|la|los|las|un|una|unos|unas|lo)\s+/i,``)}function Me(e){let t=/^(el|la|los|las)\s+/i.exec(e);return t?t[1].toLowerCase():null}var Ne=[`yo`,`tú`,`él / ella / usted`,`nosotros`,`vosotros`,`ellos / ustedes`],Pe=[`yo`,`tú`,`él`,`nosotros`,`vosotros`,`ellos`],Fe=[``,`tú`,`usted`,`nosotros`,`vosotros`,`ustedes`],Ie=[{id:`pres`,es:`Presente`,en:`Present`,level:`A1`,mood:`ind`,example:`hablo — I speak`},{id:`perf`,es:`Pretérito perfecto`,en:`Present perfect`,level:`A2`,mood:`ind`,example:`he hablado — I have spoken`},{id:`pret`,es:`Pretérito indefinido`,en:`Preterite (simple past)`,level:`A2`,mood:`ind`,example:`hablé — I spoke`},{id:`impf`,es:`Pretérito imperfecto`,en:`Imperfect`,level:`A2`,mood:`ind`,example:`hablaba — I used to speak`},{id:`fut`,es:`Futuro simple`,en:`Future`,level:`A2`,mood:`ind`,example:`hablaré — I will speak`},{id:`imp`,es:`Imperativo afirmativo`,en:`Commands`,level:`A2`,mood:`imp`,example:`¡habla! — speak!`},{id:`cond`,es:`Condicional simple`,en:`Conditional`,level:`B1`,mood:`ind`,example:`hablaría — I would speak`},{id:`plus`,es:`Pluscuamperfecto`,en:`Past perfect`,level:`B1`,mood:`ind`,example:`había hablado — I had spoken`},{id:`subj`,es:`Presente de subjuntivo`,en:`Present subjunctive`,level:`B1`,mood:`subj`,example:`que hable`},{id:`impneg`,es:`Imperativo negativo`,en:`Negative commands`,level:`B1`,mood:`imp`,example:`¡no hables! — don’t speak!`},{id:`subjp`,es:`Pretérito perfecto de subjuntivo`,en:`Perfect subjunctive`,level:`B1`,mood:`subj`,example:`que haya hablado`},{id:`impsubj`,es:`Pretérito imperfecto de subjuntivo`,en:`Imperfect subjunctive`,level:`B1`,mood:`subj`,example:`si hablara…`},{id:`futp`,es:`Futuro perfecto`,en:`Future perfect`,level:`B1`,mood:`ind`,example:`habré hablado — I will have spoken`},{id:`condp`,es:`Condicional compuesto`,en:`Conditional perfect`,level:`B2`,mood:`ind`,example:`habría hablado — I would have spoken`},{id:`plussubj`,es:`Pluscuamperfecto de subjuntivo`,en:`Pluperfect subjunctive`,level:`B2`,mood:`subj`,example:`si hubiera hablado…`}],Le=Object.fromEntries(Ie.map(e=>[e.id,e])),Re={ar:{pres:[`o`,`as`,`a`,`amos`,`áis`,`an`],pret:[`é`,`aste`,`ó`,`amos`,`asteis`,`aron`],impf:[`aba`,`abas`,`aba`,`ábamos`,`abais`,`aban`],subj:[`e`,`es`,`e`,`emos`,`éis`,`en`]},er:{pres:[`o`,`es`,`e`,`emos`,`éis`,`en`],pret:[`í`,`iste`,`ió`,`imos`,`isteis`,`ieron`],impf:[`ía`,`ías`,`ía`,`íamos`,`íais`,`ían`],subj:[`a`,`as`,`a`,`amos`,`áis`,`an`]},ir:{pres:[`o`,`es`,`e`,`imos`,`ís`,`en`],pret:[`í`,`iste`,`ió`,`imos`,`isteis`,`ieron`],impf:[`ía`,`ías`,`ía`,`íamos`,`íais`,`ían`],subj:[`a`,`as`,`a`,`amos`,`áis`,`an`]}},ze=[`é`,`ás`,`á`,`emos`,`éis`,`án`],Be=[`ía`,`ías`,`ía`,`íamos`,`íais`,`ían`],Ve=[`e`,`iste`,`o`,`imos`,`isteis`,`ieron`],He=[!0,!0,!0,!1,!1,!0],Ue=[`me`,`te`,`se`,`nos`,`os`,`se`],We={ser:{pres:[`soy`,`eres`,`es`,`somos`,`sois`,`son`],pret:[`fui`,`fuiste`,`fue`,`fuimos`,`fuisteis`,`fueron`],impf:[`era`,`eras`,`era`,`éramos`,`erais`,`eran`],subj:[`sea`,`seas`,`sea`,`seamos`,`seáis`,`sean`],impTu:`sé`,ger:`siendo`,part:`sido`},estar:{pres:[`estoy`,`estás`,`está`,`estamos`,`estáis`,`están`],pretStem:`estuv`,subj:[`esté`,`estés`,`esté`,`estemos`,`estéis`,`estén`],impTu:`está`},ir:{pres:[`voy`,`vas`,`va`,`vamos`,`vais`,`van`],pret:[`fui`,`fuiste`,`fue`,`fuimos`,`fuisteis`,`fueron`],impf:[`iba`,`ibas`,`iba`,`íbamos`,`ibais`,`iban`],subj:[`vaya`,`vayas`,`vaya`,`vayamos`,`vayáis`,`vayan`],impTu:`ve`,ger:`yendo`,part:`ido`},haber:{pres:[`he`,`has`,`ha`,`hemos`,`habéis`,`han`],pretStem:`hub`,fut:`habr`,subj:[`haya`,`hayas`,`haya`,`hayamos`,`hayáis`,`hayan`],impTu:`he`},tener:{pres:[`tengo`,`tienes`,`tiene`,`tenemos`,`tenéis`,`tienen`],pretStem:`tuv`,fut:`tendr`,impTu:`ten`,subjStem:`teng`},venir:{pres:[`vengo`,`vienes`,`viene`,`venimos`,`venís`,`vienen`],pretStem:`vin`,fut:`vendr`,impTu:`ven`,subjStem:`veng`,ger:`viniendo`},poner:{yo:`pongo`,pretStem:`pus`,fut:`pondr`,impTu:`pon`,part:`puesto`},salir:{yo:`salgo`,fut:`saldr`,impTu:`sal`},hacer:{yo:`hago`,pretStem:`hic`,fut:`har`,impTu:`haz`,part:`hecho`},decir:{pres:[`digo`,`dices`,`dice`,`decimos`,`decís`,`dicen`],pretStem:`dij`,fut:`dir`,impTu:`di`,part:`dicho`,ger:`diciendo`,subjStem:`dig`},traer:{yo:`traigo`,pretStem:`traj`},caer:{yo:`caigo`},oír:{pres:[`oigo`,`oyes`,`oye`,`oímos`,`oís`,`oyen`],subjStem:`oig`},ver:{pres:[`veo`,`ves`,`ve`,`vemos`,`veis`,`ven`],pret:[`vi`,`viste`,`vio`,`vimos`,`visteis`,`vieron`],impf:[`veía`,`veías`,`veía`,`veíamos`,`veíais`,`veían`],part:`visto`,subjStem:`ve`},dar:{pres:[`doy`,`das`,`da`,`damos`,`dais`,`dan`],pret:[`di`,`diste`,`dio`,`dimos`,`disteis`,`dieron`],subj:[`dé`,`des`,`dé`,`demos`,`deis`,`den`]},saber:{yo:`sé`,pretStem:`sup`,fut:`sabr`,subjStem:`sep`},caber:{yo:`quepo`,pretStem:`cup`,fut:`cabr`},poder:{stem:`ue`,pretStem:`pud`,fut:`podr`,ger:`pudiendo`},querer:{stem:`ie`,pretStem:`quis`,fut:`querr`},andar:{pretStem:`anduv`},valer:{yo:`valgo`,fut:`valdr`},reír:{pres:[`río`,`ríes`,`ríe`,`reímos`,`reís`,`ríen`],pret:[`reí`,`reíste`,`rio`,`reímos`,`reísteis`,`rieron`],subj:[`ría`,`rías`,`ría`,`riamos`,`riais`,`rían`],impTu:`ríe`,ger:`riendo`,part:`reído`},morir:{stem:`ue`,part:`muerto`},volver:{stem:`ue`,part:`vuelto`},resolver:{stem:`ue`,part:`resuelto`},abrir:{part:`abierto`},cubrir:{part:`cubierto`},escribir:{part:`escrito`},describir:{part:`descrito`},romper:{part:`roto`},imprimir:{part:`impreso`}};function Ge(e){let t={};for(let n of e.split(/[\s,]+/).filter(Boolean))n===`ie`||n===`ue`||n===`i`||n===`u>ue`?t.stem=n:n===`í`||n===`ú`?t.accent=n:n.startsWith(`=`)&&(t.base=n.slice(1));return t}var Ke=e=>e.slice(-2).replace(`í`,`i`);function qe(e,t,n){let r=e.lastIndexOf(t);return r<0?e:e.slice(0,r)+n+e.slice(r+t.length)}function Je(e,t){switch(t.stem){case`ie`:return qe(e,`e`,`ie`);case`ue`:return qe(e,`o`,`ue`);case`i`:return qe(e,`e`,`i`);case`u>ue`:return qe(e,`u`,`ue`)}return t.accent===`í`?qe(e,`i`,`í`):t.accent===`ú`?qe(e,`u`,`ú`):e}function Ye(e,t,n){return n===`ir`?t.stem===`ie`||t.stem===`i`?qe(e,`e`,`i`):t.stem===`ue`?qe(e,`o`,`u`):e:e}function Xe(e,t,n){let r=t[0]??``;if(n===`ar`&&(r===`e`||r===`é`)){if(e.endsWith(`gu`))return e.slice(0,-2)+`gü`;if(e.endsWith(`c`))return e.slice(0,-1)+`qu`;if(e.endsWith(`g`))return e.slice(0,-1)+`gu`;if(e.endsWith(`z`))return e.slice(0,-1)+`c`}if(n!==`ar`&&`aoáó`.includes(r)&&r!==``){if(e.endsWith(`zc`))return e;if(e.endsWith(`gu`))return e.slice(0,-2)+`g`;if(e.endsWith(`qu`))return e.slice(0,-2)+`c`;if(e.endsWith(`g`))return e.slice(0,-1)+`j`;if(e.endsWith(`c`))return e.slice(0,-1)+`z`}return e}var Ze=(e,t,n)=>Xe(e,t,n)+t;function Qe(e){let t={a:`á`,e:`é`,i:`í`,o:`ó`,u:`ú`};for(let n=e.length-1;n>=0;n--)if(t[e[n]])return e.slice(0,n)+t[e[n]]+e.slice(n+1);return e}function $e(e){return e.replace(/[áéíóú]/g,e=>({á:`a`,é:`e`,í:`i`,ó:`o`,ú:`u`})[e])}function et(e,t){let n=We[e]??{},r={...t,...n.stem?{stem:n.stem}:{}},i=Ke(e),a=e.slice(0,-2),o=Re[i],s=i===`ir`&&/[^gq]uir$/.test(e),c=i!==`ar`&&/[aeo]$/.test(a)&&!s,l=i!==`ar`&&/[aeiou]c[eií]r$/.test(e)&&!n.yo&&!n.pres,u=/ducir$/.test(e),d;n.pres?d=n.pres.slice():(d=o.pres.map((e,t)=>s&&t!==3&&t!==4?a+`y`+e:Ze(He[t]?Je(a,r):a,e,i)),n.yo?d[0]=n.yo:l&&(d[0]=a.slice(0,-1)+`zco`));let f;if(n.subj)f=n.subj.slice();else{let e=n.subjStem??(n.yo?n.yo.replace(/o$/,``):l?a.slice(0,-1)+`zc`:null);f=o.subj.map((t,n)=>e?e+t:s?a+`y`+t:Ze(He[n]?Je(a,r):Ye(a,r,i),t,i))}let p,m=n.pretStem??(u?a.slice(0,-1)+`j`:null);p=n.pret?n.pret.slice():m?Ve.map((e,t)=>t===5&&m.endsWith(`j`)?m+`eron`:t===2&&m===`hic`?`hizo`:m+e):s?[`í`,`iste`,`yó`,`imos`,`isteis`,`yeron`].map(e=>a+e):c?[`í`,`íste`,`yó`,`ímos`,`ísteis`,`yeron`].map(e=>a+e):o.pret.map((e,t)=>Ze(t===2||t===5?Ye(a,r,i):a,e,i));let h=n.impf?n.impf.slice():o.impf.map(e=>a+e),g=n.fut??$e(e),_=ze.map(e=>g+e),v=Be.map(e=>g+e),y=p[5].replace(/ron$/,``),b=[`ra`,`ras`,`ra`,`ramos`,`rais`,`ran`].map((e,t)=>(t===3?Qe(y):y)+e),x;x=n.ger?n.ger:i===`ar`?a+`ando`:s||c?a+`yendo`:Ye(a,r,i)+`iendo`;let S;S=n.part?n.part:i===`ar`?a+`ado`:c?a+`ído`:a+`ido`;let C=n.impTu??d[2],ee=e.slice(0,-1)+`d`;return{pres:d,pret:p,impf:h,fut:_,cond:v,subj:f,impsubj:b,impTu:C,impVos:ee,impNos:e===`ir`?`vamos`:null,ger:x,part:S}}function tt(e,t){if(!t)return t;let n=e+t;return ge(t).length===1?xe(n):n}function nt(e,t){let n=e=>tt(t,e);return{pres:e.pres.map(n),pret:e.pret.map(n),impf:e.impf.map(n),fut:e.fut.map(n),cond:e.cond.map(n),subj:e.subj.map(n),impsubj:e.impsubj.map(n),impTu:n(e.impTu),impVos:n(e.impVos),impNos:e.impNos?n(e.impNos):null,ger:n(e.ger),part:n(e.part)}}var rt=()=>``;function it(e){rt=e,ot.clear()}function at(e){let t=Ge(rt(e));if(t.base&&e.endsWith(t.base)&&e!==t.base){let n=e.slice(0,e.length-t.base.length);return nt(at(t.base),n)}return et(e,t)}var ot=new Map;function st(e){let t=ot.get(e);if(t)return t;let n=/[aeií]rse$/.test(e),r=n?e.slice(0,-2):e,i=n&&rt(e)?ct(e):at(r),a=at(`haber`),o=e=>e.map(e=>`${e} ${i.part}`),s=e=>e.slice(0,6),c=i.subj,l=[``,i.impTu,c[2],i.impNos??c[3],i.impVos,c[5]],u=[``,`no ${c[1]}`,`no ${c[2]}`,`no ${c[3]}`,`no ${c[4]}`,`no ${c[5]}`],d={pres:s(i.pres),pret:s(i.pret),impf:s(i.impf),fut:s(i.fut),cond:s(i.cond),subj:s(i.subj),impsubj:s(i.impsubj),perf:o(a.pres),plus:o(a.impf),futp:o(a.fut),condp:o(a.cond),subjp:o(a.subj),plussubj:o(a.impsubj),imp:l,impneg:u},f=i.ger;if(n){for(let e of Object.keys(d))e!==`imp`&&e!==`impneg`&&(d[e]=d[e].map((e,t)=>`${Ue[t]} ${e}`));let e=/[ií]r$/.test(r);d.imp=[``,be(i.impTu,`te`),be(c[2],`se`),lt(i.impNos??c[3]),r===`ir`?`idos`:ut(i.impVos,e),be(c[5],`se`)],d.impneg=[``,`no te ${c[1]}`,`no se ${c[2]}`,`no nos ${c[3]}`,`no os ${c[4]}`,`no se ${c[5]}`],f=be(i.ger,`se`)}let p={inf:e,reflexive:n,ger:f,part:i.part,forms:d};return ot.set(e,p),p}function ct(e){let t=e.slice(0,-2),n=Ge(rt(e));if(n.base){let e=n.base.replace(/se$/,``);if(t.endsWith(e)&&t!==e)return nt(at(e),t.slice(0,t.length-e.length))}return et(t,n)}function lt(e){let t=_e(e),n=e.slice(0,-1)+`nos`;return _e(n)===t?n:ve(n,t)}function ut(e,t){return t?e.slice(0,-2)+`íos`:e.slice(0,-1)+`os`}function dt(e){let t=/[aeií]rse$/.test(e)?e.slice(0,-2):e,n=Ke(t),r=$e(t).slice(0,-2),i=Re[n],a=e=>e.map(e=>r+e),o=a(i.pres),s=a(i.pret),c=a(i.subj),l=$e(t),u=s[5].replace(/ron$/,``);return{pres:o,pret:s,impf:a(i.impf),fut:ze.map(e=>l+e),cond:Be.map(e=>l+e),subj:c,impsubj:[`ra`,`ras`,`ra`,`ramos`,`rais`,`ran`].map((e,t)=>(t===3?Qe(u):u)+e),imp:[``,o[2],c[2],c[3],t.slice(0,-1)+`d`,c[5]],impneg:[``,c[1],c[2],c[3],c[4],c[5]].map((e,t)=>t?`no ${e}`:``)}}function ft(e){let t=dt(e.inf),n=e=>e.replace(/^(me|te|se|nos|os) /,``).replace(/^no (me |te |se |nos |os )?/,``),r={};for(let i of[`pres`,`pret`,`impf`,`fut`,`cond`,`subj`,`impsubj`,`imp`,`impneg`]){let a=t[i];a&&(r[i]=e.forms[i].map((t,r)=>!t||e.reflexive&&i===`imp`?!1:n(t)!==n(a[r])))}return r}function pt(e){let t=[],n=e=>e.split(` `).pop()??e;for(let r of[`pres`,`pret`,`impf`,`fut`,`cond`,`subj`,`impsubj`,`imp`])e.forms[r].forEach((e,i)=>{e&&t.push({form:n(e).toLowerCase(),tense:r,p:i})});t.push({form:e.ger.toLowerCase(),tense:`ger`,p:-1});let r=e.part.toLowerCase();if(t.push({form:r,tense:`part`,p:-1}),/o$/.test(r))for(let e of[`a`,`os`,`as`])t.push({form:r.slice(0,-1)+e,tense:`part`,p:-1});return t}var mt=`
ser|to be (identity, origin, time)||A1
estar|to be (location, condition)||A1
tener|to have||A1
haber|to have (auxiliary) · hay = there is/are||A1
hacer|to do, to make||A1
ir|to go||A1
venir|to come||A1
poder|can, to be able to||A1
querer|to want; to love (a person)||A1
decir|to say, to tell||A1
ver|to see, to watch||A1
dar|to give||A1
saber|to know (facts), to know how to||A1
conocer|to know (people, places), to meet||A1
hablar|to speak, to talk||A1
llamarse|to be called (name)||A1
llamar|to call||A1
vivir|to live||A1
trabajar|to work||A1
estudiar|to study||A1
comer|to eat; to have lunch||A1
beber|to drink||A1
leer|to read||A1
escribir|to write||A1
escuchar|to listen (to)||A1
mirar|to look (at), to watch||A1
aprender|to learn||A1
comprender|to understand||A1
entender|to understand|ie|A1
abrir|to open||A1
cerrar|to close|ie|A1
comprar|to buy||A1
pagar|to pay||A1
tomar|to take; to have (food/drink)||A1
necesitar|to need||A1
gustar|to like (lit. to please)||A1
encantar|to love (things), to delight||A1
preferir|to prefer|ie|A1
pensar|to think|ie|A1
empezar|to start, to begin|ie|A1
jugar|to play (games, sports)|u>ue|A1
dormir|to sleep|ue|A1
volver|to return, to come back|ue|A1
salir|to go out, to leave||A1
llegar|to arrive||A1
poner|to put||A1
traer|to bring||A1
pedir|to ask for, to order|i|A1
repetir|to repeat|i|A1
servir|to serve|i|A1
costar|to cost|ue|A1
levantarse|to get up||A1
ducharse|to have a shower||A1
acostarse|to go to bed|ue|A1
despertarse|to wake up|ie|A1
vestirse|to get dressed|i|A1
lavarse|to wash (oneself)||A1
peinarse|to comb one's hair||A1
afeitarse|to shave||A1
desayunar|to have breakfast||A1
almorzar|to have lunch / a mid-morning snack|ue|A1
cenar|to have dinner||A1
cocinar|to cook||A1
limpiar|to clean||A1
lavar|to wash||A1
viajar|to travel||A1
caminar|to walk||A1
pasear|to go for a walk||A1
correr|to run||A1
nadar|to swim||A1
bailar|to dance||A1
cantar|to sing||A1
tocar|to touch; to play (an instrument)||A1
llevar|to carry, to take; to wear||A1
buscar|to look for||A1
encontrar|to find|ue|A1
esperar|to wait; to hope||A1
ayudar|to help||A1
usar|to use||A1
preguntar|to ask (a question)||A1
contestar|to answer||A1
responder|to answer, to reply||A1
vender|to sell||A1
recibir|to receive||A1
subir|to go up; to upload||A1
bajar|to go down; to download||A1
entrar|to enter, to go in||A1
descansar|to rest||A1
practicar|to practise||A1
llover|to rain|ue|A1
nevar|to snow|ie|A1
doler|to hurt, to ache|ue|A1
visitar|to visit||A1
terminar|to finish||A1
deber|must, should; to owe||A1
creer|to believe, to think||A1
coger|to take, to catch (Spain)||A1
conducir|to drive (Spain)||A1
saludar|to greet||A1
presentar|to introduce, to present||A1
girar|to turn||A1
cruzar|to cross||A1
celebrar|to celebrate||A1
cumplir|to turn (age), to fulfil||A1
quedar|to meet up; to be left; to be located||A1
apetecer|to fancy, to feel like (Spain)||A2
recordar|to remember|ue|A2
olvidar|to forget||A2
perder|to lose; to miss (a bus)|ie|A2
ganar|to win; to earn||A2
cambiar|to change||A2
mandar|to send; to order||A2
enviar|to send|í|A2
contar|to count; to tell (a story)|ue|A2
mostrar|to show|ue|A2
enseñar|to teach; to show||A2
explicar|to explain||A2
alquilar|to rent||A2
reservar|to book, to reserve||A2
mudarse|to move (house)||A2
nacer|to be born||A2
morir|to die|ue|A2
casarse|to get married||A2
crecer|to grow (up)||A2
parecer|to seem, to look like||A2
ofrecer|to offer||A2
seguir|to follow; to continue|i|A2
conseguir|to get, to manage to|i|A2
elegir|to choose|i|A2
escoger|to choose||A2
sentir|to feel; to be sorry|ie|A2
sentirse|to feel (well, sad…)|ie|A2
divertirse|to have fun|ie|A2
quedarse|to stay||A2
dejar|to leave (something); to let||A2
pasar|to pass; to happen; to spend (time)||A2
romper|to break||A2
caer|to fall||A2
caerse|to fall over||A2
oír|to hear||A2
reír|to laugh||A2
reírse|to laugh (at)||A2
sonreír|to smile|=reír|A2
construir|to build||A2
traducir|to translate||A2
andar|to walk||A2
devolver|to give back, to return|=volver|A2
describir|to describe||A2
ponerse|to put on (clothes); to become||A2
irse|to leave, to go away||A2
dormirse|to fall asleep|ue|A2
sentarse|to sit down|ie|A2
preocuparse|to worry||A2
enfadarse|to get angry (Spain)||A2
aburrirse|to get bored||A2
equivocarse|to make a mistake||A2
acordarse|to remember|ue|A2
maquillarse|to put on make-up||A2
quitarse|to take off (clothes)||A2
probar|to try, to taste|ue|A2
probarse|to try on|ue|A2
planchar|to iron||A2
fregar|to wash up, to mop|ie|A2
barrer|to sweep||A2
ordenar|to tidy (up)||A2
sacar|to take out||A2
arreglar|to fix; to tidy||A2
cortar|to cut||A2
calentar|to heat (up)|ie|A2
mezclar|to mix||A2
añadir|to add||A2
pesar|to weigh||A2
medir|to measure|i|A2
despedirse|to say goodbye|i|A2
ahorrar|to save (money)||A2
gastar|to spend (money)||A2
cobrar|to charge; to get paid||A2
soler|to usually (do)|ue|A2
acabar|to finish; acabar de = to have just||A2
intentar|to try||A2
esquiar|to ski|í|A2
guardar|to keep, to save||A2
odiar|to hate||A2
invitar|to invite||A2
importar|to matter, to mind||A2
interesar|to interest||A2
cuidar|to look after||A2
apagar|to turn off||A2
encender|to turn on, to light|ie|A2
funcionar|to work (machines)||A2
compartir|to share||A2
tirar|to throw (away); to pull||A2
recoger|to pick up, to collect||A2
fumar|to smoke||A2
toser|to cough||A2
romperse|to break (a bone…)||A2
aparcar|to park (Spain)||A2
parar|to stop||A2
tardar|to take (time)||A2
volar|to fly|ue|A2
facturar|to check in (luggage)||A2
alojarse|to stay (hotel)||A2
disfrutar|to enjoy||A2
relajarse|to relax||A2
cansarse|to get tired||A2
montar|to ride||A2
pintar|to paint||A2
dibujar|to draw||A2
entrenar|to train||A2
organizar|to organise||A2
preparar|to prepare||A2
decidir|to decide||A2
mover|to move|ue|A2
comenzar|to begin|ie|A2
meter|to put in||A2
prestar|to lend||A2
regalar|to give (as a present)||A2
llenar|to fill||A2
secar|to dry||A2
quitar|to remove, to take away||A2
llorar|to cry||A2
charlar|to chat||A2
perdonar|to forgive||A2
cambiarse|to get changed||A2
enfermar|to get ill||A2
nacer|to be born||A2
resolver|to solve, to resolve|ue|B1
destruir|to destroy||B1
incluir|to include||B1
huir|to flee||B1
disminuir|to decrease||B1
contribuir|to contribute||B1
producir|to produce||B1
reducir|to reduce||B1
caber|to fit||B1
valer|to be worth; ¡vale! = OK||B1
cubrir|to cover||B1
descubrir|to discover|=cubrir|B1
mantener|to maintain, to keep|=tener|B1
obtener|to obtain|=tener|B1
detener|to stop, to arrest|=tener|B1
contener|to contain|=tener|B1
sostener|to hold, to support|=tener|B1
componer|to compose|=poner|B1
proponer|to propose|=poner|B1
suponer|to suppose|=poner|B1
deshacer|to undo; to unpack|=hacer|B1
prever|to foresee|=ver|B1
convenir|to suit; to agree|=venir|B1
atraer|to attract|=traer|B1
distraer|to distract|=traer|B1
envolver|to wrap|=volver|B1
quejarse|to complain||B1
reparar|to repair||B1
hervir|to boil|ie|B1
contratar|to hire||B1
despedir|to dismiss, to fire; to see off|i|B1
jubilarse|to retire||B1
invertir|to invest|ie|B1
tratar|to treat; tratar de = to try to||B1
lograr|to achieve||B1
evitar|to avoid||B1
permitir|to allow||B1
prohibir|to forbid|í|B1
reunirse|to meet, to get together|ú|B1
continuar|to continue|ú|B1
actuar|to act||B1
graduarse|to graduate|ú|B1
confiar|to trust|í|B1
amar|to love||B1
besar|to kiss||B1
abrazar|to hug||B1
aceptar|to accept||B1
rechazar|to reject||B1
discutir|to argue; to discuss||B1
opinar|to think, to have an opinion||B1
dudar|to doubt||B1
negar|to deny|ie|B1
afirmar|to state, to claim||B1
sugerir|to suggest|ie|B1
recomendar|to recommend|ie|B1
aconsejar|to advise||B1
exigir|to demand||B1
alegrarse|to be glad||B1
molestar|to bother||B1
preocupar|to worry (someone)||B1
faltar|to be missing, to lack||B1
sobrar|to be left over||B1
ocurrir|to happen, to occur||B1
suceder|to happen||B1
envejecer|to grow old||B1
mejorar|to improve||B1
empeorar|to get worse||B1
aumentar|to increase||B1
reciclar|to recycle||B1
contaminar|to pollute||B1
proteger|to protect||B1
salvar|to save, to rescue||B1
navegar|to sail; to browse (the web)||B1
descargar|to download||B1
grabar|to record||B1
publicar|to publish, to post||B1
informar|to inform||B1
anunciar|to announce; to advertise||B1
comunicar|to communicate||B1
imaginar|to imagine||B1
soñar|to dream|ue|B1
desear|to wish||B1
lamentar|to regret, to be sorry||B1
echar|to throw; to pour; echar de menos = to miss||B1
empujar|to push||B1
dirigir|to direct, to manage||B1
corregir|to correct|i|B1
convertirse|to become (turn into)|ie|B1
hacerse|to become (by effort)||B1
volverse|to become (sudden change)|ue|B1
llevarse|to get on (bien/mal)||B1
enamorarse|to fall in love||B1
separarse|to separate||B1
divorciarse|to get divorced||B1
pelearse|to fight, to fall out||B1
acostumbrarse|to get used to||B1
atreverse|to dare||B1
arrepentirse|to regret|ie|B1
sufrir|to suffer||B1
curar|to cure, to heal||B1
respirar|to breathe||B1
aterrizar|to land||B1
despegar|to take off||B1
competir|to compete|i|B1
participar|to take part||B1
apoyar|to support||B1
votar|to vote||B1
luchar|to fight, to struggle||B1
defender|to defend|ie|B1
gobernar|to govern|ie|B1
consumir|to consume||B1
desarrollar|to develop||B1
investigar|to research, to investigate||B1
inventar|to invent||B1
crear|to create||B1
diseñar|to design||B1
solucionar|to solve||B1
existir|to exist||B1
depender|to depend||B1
pertenecer|to belong||B1
merecer|to deserve||B1
agradecer|to thank, to be grateful for||B1
obedecer|to obey||B1
aparecer|to appear||B1
desaparecer|to disappear||B1
establecer|to establish||B1
reconocer|to recognise; to admit||B1
convencer|to convince||B1
mentir|to lie|ie|B1
advertir|to warn|ie|B1
colgar|to hang (up)|ue|B1
temer|to fear||B1
callarse|to keep quiet||B1
gritar|to shout||B1
prometer|to promise||B1
disculparse|to apologise||B1
extrañar|to miss (someone); to surprise||B1
vaciar|to empty|í|B1
brillar|to shine||B1
fascinar|to fascinate||B1
comprometerse|to commit (oneself)||B1
imprimir|to print||B1
`,ht=[],gt=new Map;for(let e of mt.split(`
`)){let t=e.trim();if(!t)continue;let[n,r,i,a]=t.split(`|`);if(gt.has(n))continue;let o={inf:n,en:r,flags:i??``,level:a||`B1`};ht.push(o),gt.set(n,o)}it(e=>gt.get(e)?.flags??``);function _t(e){return gt.get(e)}function vt(e){let t=[],n=e.flags;n.includes(`u>ue`)?t.push(`u → ue`):/(^|,)ie($|,)/.test(n)?t.push(/[ií]r(se)?$/.test(e.inf)?`e → ie / i`:`e → ie`):/(^|,)ue($|,)/.test(n)?t.push(/[ií]r(se)?$/.test(e.inf)?`o → ue / u`:`o → ue`):/(^|,)i($|,)/.test(n)&&t.push(`e → i`),(n.includes(`í`)||n.includes(`ú`))&&t.push(`written accent`);let r=/=(\S+)/.exec(n)?.[1];r&&t.push(`like ${r}`);let i=e.inf.replace(/se$/,``);return yt.has(i)?t.push(`irregular`):/[aeiou]c[eií]r$/.test(i)&&i!==`hacer`&&i!==`decir`&&t.push(`-zc-`),/ducir$/.test(i)&&t.push(`-uj- past`),/[^gq]uir$/.test(i)&&t.push(`-y-`),/(car|gar|zar)$/.test(i)&&t.push(`spelling change`),/(ger|gir)$/.test(i)&&t.push(`g → j`),/se$/.test(e.inf)&&t.push(`reflexive`),t}var yt=new Set(`ser.estar.ir.haber.tener.venir.poner.salir.hacer.decir.traer.caer.oír.ver.dar.saber.caber.poder.querer.andar.valer.reír.morir.volver.resolver.abrir.cubrir.escribir.describir.romper.imprimir`.split(`.`)),bt=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,xt=/^[\\/]{2}/;function St(e,t){return t+e.replace(/\\/g,`/`)}var Ct=`popstate`;function wt(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function Tt(e={}){function t(e,t){let{pathname:n=`/`,search:r=``,hash:i=``}=Mt(e.location.hash.substring(1));return!n.startsWith(`/`)&&!n.startsWith(`.`)&&(n=`/`+n),At(``,{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||`default`)}function n(e,t){let n=e.document.querySelector(`base`),r=``;if(n&&n.getAttribute(`href`)){let t=e.location.href,n=t.indexOf(`#`);r=n===-1?t:t.slice(0,n)}return r+`#`+(typeof t==`string`?t:jt(t))}function r(e,t){Dt(e.pathname.charAt(0)===`/`,`relative pathnames are not supported in hash history.push(${JSON.stringify(t)})`)}return Nt(t,n,r,e)}function Et(e,t){if(e===!1||e==null)throw Error(t)}function Dt(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function Ot(){return Math.random().toString(36).substring(2,10)}function kt(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function At(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?Mt(t):t,state:n,key:t&&t.key||r||Ot(),mask:i}}function jt({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function Mt(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function Nt(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=wt(e)?e:At(h.location,e,t);n&&n(r,e),l=u()+1;let d=kt(r,l),f=h.createHref(r.mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=wt(e)?e:At(h.location,e,t);n&&n(r,e),l=u();let i=kt(r,l),d=h.createHref(r.mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return Pt(i,e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(Ct,d),c=e,()=>{i.removeEventListener(Ct,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function Pt(e,t,n=!1){let r=`http://localhost`;e&&(r=e.location.origin===`null`?e.location.href:e.location.origin),Et(r,`No window.location.(origin|href) available to create URL`);let i=typeof t==`string`?t:jt(t);return i=i.replace(/ $/,`%20`),!n&&xt.test(i)&&(i=r+i),new URL(i,r)}function Ft(e,t,n=`/`){return It(e,t,n,!1)}function It(e,t,n,r,i){let a=A((typeof t==`string`?Mt(t):t).pathname||`/`,n);if(a==null)return null;let o=i??Lt(e),s=null,c=en(a);for(let e=0;s==null&&e<o.length;++e)s=Xt(o[e],c,r);return s}function Lt(e){let t=Rt(e);return Bt(t),t}function Rt(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;Et(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=ln([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(Et(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),Rt(e.children,t,u,l,o)),(e.path!=null||e.index)&&t.push({path:l,score:Jt(l,e.index),routesMeta:u.map((e,t)=>{let[n,r]=$t(e.relativePath,e.caseSensitive,t===u.length-1);return{...e,matcher:n,compiledParams:r}})})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of zt(e.path))a(e,t,!0,n)}),t}function zt(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=zt(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function Bt(e){e.sort((e,t)=>e.score===t.score?Yt(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var Vt=/^:[\w-]+$/,Ht=3,Ut=2,Wt=1,Gt=10,Kt=-2,qt=e=>e===`*`;function Jt(e,t){let n=e.split(`/`),r=n.length;return n.some(qt)&&(r+=Kt),t&&(r+=Ut),n.filter(e=>!qt(e)).reduce((e,t)=>e+(Vt.test(t)?Ht:t===``?Wt:Gt),r)}function Yt(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function Xt(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u={path:s.relativePath,caseSensitive:s.caseSensitive,end:c},d=s.matcher&&s.compiledParams?Qt(u,l,s.matcher,s.compiledParams):Zt(u,l),f=s.route;if(!d&&c&&n&&!r[r.length-1].route.index&&(d=Zt({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:ln([a,d.pathname]),pathnameBase:dn(ln([a,d.pathnameBase])),route:f}),d.pathnameBase!==`/`&&(a=ln([a,d.pathnameBase]))}return o}function Zt(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=$t(e.path,e.caseSensitive,e.end);return Qt(e,t,n,r)}function Qt(e,t,n,r){let i=t.match(n);if(!i)return null;let a=i[0],o=un(a,1),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=un(a.slice(0,a.length-e.length),1)}let i=s[r];return e[t]=n&&!i?void 0:(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function $t(e,t=!1,n=!0){Dt(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function en(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return Dt(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function A(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}function tn(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?Mt(e):e,a;return n?(n=cn(n),a=n.startsWith(`/`)||n.startsWith(`\\`)?nn(n.substring(1),`/`):nn(n,t)):a=t,{pathname:a,search:fn(r),hash:pn(i)}}function nn(e,t){let n=un(t).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function rn(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function an(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function on(e){let t=an(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function sn(e,t,n,r=!1){let i;typeof e==`string`?i=Mt(e):(i={...e},Et(!i.pathname||!i.pathname.includes(`?`),rn(`?`,`pathname`,`search`,i)),Et(!i.pathname||!i.pathname.includes(`#`),rn(`#`,`pathname`,`hash`,i)),Et(!i.search||!i.search.includes(`#`),rn(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=tn(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var cn=e=>e.replace(/[\\/]{2,}/g,`/`),ln=e=>cn(e.join(`/`));function un(e,t=0){let n=e.length;for(;n>t&&e.charCodeAt(n-1)===47;)n--;return n===e.length?e:e.slice(0,n)}var dn=e=>un(e).replace(/^\/*/,`/`),fn=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,pn=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,mn=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function hn(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function gn(e){return ln(e.map(e=>e.route.path).filter(Boolean))||`/`}var _n=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function vn(e,t){let n=e;if(typeof n!=`string`||!bt.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(_n)try{let e=new URL(window.location.href),r=xt.test(n)?new URL(St(n,e.protocol)):new URL(n),a=A(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{Dt(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var yn=new URL(`http://localhost`);function bn(e){if(e.createURL)return e.createURL(`/`);try{return new URL(e.createHref(`/`),yn)}catch{return yn}}function xn(e,t){return e.origin===t.origin&&(e.origin!==`null`||e.protocol===t.protocol&&e.host===t.host)}function Sn(e,t){if(e.startsWith(`//`))return!0;let n=t.protocol.toLowerCase();return e.toLowerCase().startsWith(n)?t.host===``||e.slice(n.length).startsWith(`//`):!1}function Cn(e,t,n,r){let i=null;try{i=e==null?null:new URL(e,n)}catch{}let a=new URL(t,n),o=i!=null&&!xn(i,n),s=!xn(a,n);if(r===`reject`){if(o||s)throw Error(`External navigation is not allowed`)}else if(s&&(i==null||!Sn(e,i)||!xn(i,a)))throw Error(`External navigation is not allowed`)}var wn=[`POST`,`PUT`,`PATCH`,`DELETE`];new Set(wn);var Tn=[`GET`,...wn];new Set(Tn);var En=[`about:`,`blob:`,`chrome:`,`chrome-untrusted:`,`content:`,`data:`,`devtools:`,`file:`,`filesystem:`,`javascript:`];function Dn(e){try{return En.includes(new URL(e).protocol)}catch{return!1}}var On=v.createContext(null);On.displayName=`DataRouter`;var kn=v.createContext(null);kn.displayName=`DataRouterState`;var An=v.createContext(!1);function jn(){return v.useContext(An)}var Mn=v.createContext({isTransitioning:!1});Mn.displayName=`ViewTransition`;var Nn=v.createContext(new Map);Nn.displayName=`Fetchers`;var Pn=v.createContext(null);Pn.displayName=`Await`;var Fn=v.createContext(null);Fn.displayName=`Navigation`;var In=v.createContext(null);In.displayName=`Location`;var Ln=v.createContext({outlet:null,matches:[],isDataRoute:!1});Ln.displayName=`Route`;var Rn=v.createContext(null);Rn.displayName=`RouteError`;var zn=`REACT_ROUTER_ERROR`,Bn=`REDIRECT`,Vn=`ROUTE_ERROR_RESPONSE`;function Hn(e){if(e.startsWith(`${zn}:${Bn}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function Un(e){if(e.startsWith(`${zn}:${Vn}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new mn(t.status,t.statusText,t.data)}catch{}}function Wn(e,{relative:t}={}){Et(Gn(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=v.useContext(Fn),{hash:i,pathname:a,search:o}=$n(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:ln([n,a])),r.createHref({pathname:s,search:o,hash:i})}function Gn(){return v.useContext(In)!=null}function j(){return Et(Gn(),`useLocation() may be used only in the context of a <Router> component.`),v.useContext(In).location}var Kn=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function qn(e){v.useContext(Fn).static||v.useLayoutEffect(e)}function Jn(){let{isDataRoute:e}=v.useContext(Ln);return e?gr():Yn()}function Yn(){Et(Gn(),`useNavigate() may be used only in the context of a <Router> component.`);let e=v.useContext(On),{basename:t,navigator:n}=v.useContext(Fn),{matches:r}=v.useContext(Ln),{pathname:i}=j(),a=JSON.stringify(on(r)),o=v.useRef(!1);return qn(()=>{o.current=!0}),v.useCallback((r,s={})=>{if(Dt(o.current,Kn),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=sn(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:ln([t,c.pathname])),Cn(typeof r==`string`?r:jt(r),n.createHref(c),bn(n),`reject`),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}var Xn=v.createContext(null);function Zn(e){let t=v.useContext(Ln).outlet;return v.useMemo(()=>t&&v.createElement(Xn.Provider,{value:e},t),[t,e])}function Qn(){let{matches:e}=v.useContext(Ln);return e[e.length-1]?.params??{}}function $n(e,{relative:t}={}){let{matches:n}=v.useContext(Ln),{pathname:r}=j(),i=JSON.stringify(on(n));return v.useMemo(()=>sn(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function er(e,t){return tr(e,t)}function tr(e,t,n){Et(Gn(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=v.useContext(Fn),{matches:i}=v.useContext(Ln),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;vr(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let u=j(),d;if(t){let e=typeof t==`string`?Mt(t):t;Et(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=u;let f=d.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=n&&n.state.matches.length?n.state.matches.map(e=>Object.assign(e,{route:n.manifest[e.route.id]||e.route})):Ft(e,{pathname:p});Dt(l||m!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),Dt(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=cr(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:ln([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:ln([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&h?v.createElement(In.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,mask:void 0,...d},navigationType:`POP`}},h):h}function nr(){let e=hr(),t=hn(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=v.createElement(v.Fragment,null,v.createElement(`p`,null,`💿 Hey developer 👋`),v.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,v.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,v.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),v.createElement(v.Fragment,null,v.createElement(`h2`,null,`Unexpected Application Error!`),v.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?v.createElement(`pre`,{style:i},n):null,o)}var rr=v.createElement(nr,null),ir=class extends v.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=Un(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:v.createElement(Ln.Provider,{value:this.props.routeContext},v.createElement(Rn.Provider,{value:e,children:this.props.component}));return this.context?v.createElement(or,{error:e},t):t}};ir.contextType=An;var ar=new WeakMap;function or({children:e,error:t}){let{basename:n,navigator:r}=v.useContext(Fn);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=Hn(t.digest);if(e){let i=ar.get(t);if(i)throw i;let a=vn(e.location,n),o=a.absoluteURL||a.to;if(Cn(e.location,o,bn(r),`allow-explicit`),Dn(o))throw Error(`Invalid redirect location`);if(_n&&!ar.get(t)){if(a.isExternal||e.reloadDocument)window.location.href=o;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(a.to,{replace:e.replace}));throw ar.set(t,n),n}}return v.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${o}`})}}return e}function sr({routeContext:e,match:t,children:n}){let r=v.useContext(On);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),v.createElement(Ln.Provider,{value:e},n)}function cr(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);Et(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},pattern:gn(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||rr,o&&(s<0&&c===0?(vr(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?v.createElement(n.route.Component,null):n.route.element?n.route.element:e,v.createElement(sr,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?v.createElement(ir,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function lr(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ur(e){let t=v.useContext(On);return Et(t,lr(e)),t}function dr(e){let t=v.useContext(kn);return Et(t,lr(e)),t}function fr(e){let t=v.useContext(Ln);return Et(t,lr(e)),t}function pr(e){let t=fr(e),n=t.matches[t.matches.length-1];return Et(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function mr(){return pr(`useRouteId`)}function hr(){let e=v.useContext(Rn),t=dr(`useRouteError`),n=pr(`useRouteError`);return e===void 0?t.errors?.[n]:e}function gr(){let{router:e}=ur(`useNavigate`),t=pr(`useNavigate`),n=v.useRef(!1);return qn(()=>{n.current=!0}),v.useCallback(async(r,i={})=>{Dt(n.current,Kn),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var _r={};function vr(e,t,n){!t&&!_r[e]&&(_r[e]=!0,Dt(!1,n))}v.memo(yr);function yr({routes:e,manifest:t,future:n,state:r,isStatic:i,onError:a}){return tr(e,void 0,{manifest:t,state:r,isStatic:i,onError:a,future:n})}function br({to:e,replace:t,state:n,relative:r}){Et(Gn(),`<Navigate> may be used only in the context of a <Router> component.`);let{static:i,navigator:a}=v.useContext(Fn);Dt(!i,`<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.`);let{matches:o}=v.useContext(Ln),{pathname:s}=j(),c=Jn(),l=sn(e,on(o),s,r===`path`);Cn(typeof e==`string`?e:jt(e),a.createHref(l),bn(a),`reject`);let u=JSON.stringify(l);return v.useEffect(()=>{c(JSON.parse(u),{replace:t,state:n,relative:r})},[c,u,r,t,n]),null}function xr(e){return Zn(e.context)}function Sr(e){Et(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function Cr({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,useTransitions:o}){Et(!Gn(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=v.useMemo(()=>({basename:s,navigator:i,static:a,useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=Mt(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,mask:m}=n,h=v.useMemo(()=>{let e=A(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return Dt(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:v.createElement(Fn.Provider,{value:c},v.createElement(In.Provider,{children:t,value:h}))}function wr({children:e,location:t}){return er(Tr(e),t)}v.Component;function Tr(e,t=[]){let n=[];return v.Children.forEach(e,(e,r)=>{if(!v.isValidElement(e))return;let i=[...t,r];if(e.type===v.Fragment){n.push.apply(n,Tr(e.props.children,i));return}Et(e.type===Sr,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Et(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=Tr(e.props.children,i)),n.push(a)}),n}var Er=`get`,Dr=`application/x-www-form-urlencoded`;function Or(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function kr(e){return Or(e)&&e.tagName.toLowerCase()===`button`}function Ar(e){return Or(e)&&e.tagName.toLowerCase()===`form`}function jr(e){return Or(e)&&e.tagName.toLowerCase()===`input`}function Mr(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Nr(e,t){return e.button===0&&(!t||t===`_self`)&&!Mr(e)}function Pr(e=``){return new URLSearchParams(typeof e==`string`||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(e=>[n,e]):[[n,r]])},[]))}function Fr(e,t){let n=Pr(e);return t&&t.forEach((e,r)=>{n.has(r)||t.getAll(r).forEach(e=>{n.append(r,e)})}),n}var Ir=null;function Lr(){if(Ir===null)try{new FormData(document.createElement(`form`),0),Ir=!1}catch{Ir=!0}return Ir}var Rr=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function zr(e){return e!=null&&!Rr.has(e)?(Dt(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Dr}"`),null):e}function Br(e,t){let n,r,i,a,o;if(Ar(e)){let o=e.getAttribute(`action`);r=o?A(o,t):null,n=e.getAttribute(`method`)||Er,i=zr(e.getAttribute(`enctype`))||Dr,a=new FormData(e)}else if(kr(e)||jr(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?A(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||Er,i=zr(e.getAttribute(`formenctype`))||zr(o.getAttribute(`enctype`))||Dr,a=new FormData(o,e),!Lr()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(Or(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=Er,r=null,i=Dr,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);function Vr(e,t){if(e===!1||e==null)throw Error(t)}function Hr(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return i.pathname=n?i.pathname.endsWith(`/`)?`${i.pathname}_.${r}`:`${i.pathname}.${r}`:i.pathname===`/`?`_root.${r}`:t&&A(i.pathname,t)===`/`?`${un(t)}/_root.${r}`:`${un(i.pathname)}.${r}`,i}async function Ur(e,t){if(e.id in t)return t[e.id];try{let n=await ee(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Wr(e){return e!=null&&typeof e.page==`string`}function Gr(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function Kr(e,t,n){return Zr((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await Ur(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(Gr).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function qr(e,t,n,r,i,a){let o=(e,t)=>!n[t]||e.route.id!==n[t].route.id,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function Jr(e,t,{includeHydrateFallback:n}={}){return Yr(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function Yr(e){return[...new Set(e)]}function Xr(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function Zr(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!Wr(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(Xr(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function Qr(){let e=v.useContext(On);return Vr(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function $r(){let e=v.useContext(kn);return Vr(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var ei=v.createContext(void 0);ei.displayName=`FrameworkContext`;function ti(){let e=v.useContext(ei);return Vr(e,`You must render this element inside a <HydratedRouter> element`),e}function ni(e,t){let n=v.useContext(ei),[r,i]=v.useState(!1),[a,o]=v.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=v.useRef(null);v.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),v.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:ri(s,p),onBlur:ri(c,m),onMouseEnter:ri(l,p),onMouseLeave:ri(u,m),onTouchStart:ri(d,p)}]:[a,f,{}]:[!1,f,{}]}function ri(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function ii({page:e,...t}){let n=jn(),{nonce:r}=ti(),{router:i}=Qr(),a=v.useMemo(()=>Ft(i.routes,e,i.basename),[i.routes,e,i.basename]);return a?(t.nonce==null&&r&&(t={...t,nonce:r}),n?v.createElement(oi,{page:e,matches:a,...t}):v.createElement(si,{page:e,matches:a,...t})):null}function ai(e){let{manifest:t,routeModules:n}=ti(),[r,i]=v.useState([]);return v.useEffect(()=>{let r=!1;return Kr(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function oi({page:e,matches:t,...n}){let r=j(),{future:i}=ti(),{basename:a}=Qr(),o=v.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=Hr(e,a,i.v8_trailingSlashAwareDataRequests,`rsc`),o=!1,s=[];for(let e of t)typeof e.route.shouldRevalidate==`function`?o=!0:s.push(e.route.id);return o&&s.length>0&&n.searchParams.set(`_routes`,s.join(`,`)),[n.pathname+n.search]},[a,i.v8_trailingSlashAwareDataRequests,e,r,t]);return v.createElement(v.Fragment,null,o.map(e=>v.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})))}function si({page:e,matches:t,...n}){let r=j(),{future:i,manifest:a,routeModules:o}=ti(),{basename:s}=Qr(),{loaderData:c,matches:l}=$r(),u=v.useMemo(()=>qr(e,t,l,a,r,`data`),[e,t,l,a,r]),d=v.useMemo(()=>qr(e,t,l,a,r,`assets`),[e,t,l,a,r]),f=v.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];t&&t.hasLoader&&(!u.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let d=Hr(e,s,i.v8_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&d.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[d.pathname+d.search]},[s,i.v8_trailingSlashAwareDataRequests,c,r,a,u,t,e,o]),p=v.useMemo(()=>Jr(d,a),[d,a]),m=ai(d);return v.createElement(v.Fragment,null,f.map(e=>v.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),p.map(e=>v.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),m.map(({key:e,link:t})=>v.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function ci(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}v.Component;var li=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{li&&(window.__reactRouterVersion=`7.18.4`)}catch{}function ui({basename:e,children:t,useTransitions:n,window:r}){let i=v.useRef();i.current??=Tt({window:r,v5Compat:!0});let a=i.current,[o,s]=v.useState({action:a.action,location:a.location}),c=v.useCallback(e=>{n===!1?s(e):v.startTransition(()=>s(e))},[n]);return v.useLayoutEffect(()=>a.listen(c),[a,c]),v.createElement(Cr,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,useTransitions:n})}var di=v.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,useTransitions:_}=v.useContext(Fn),y=typeof l==`string`&&bt.test(l),b=vn(l,h);l=b.to;let x=Wn(l,{relative:r}),S=j(),C=null;if(o){let e=sn(o,[],S.mask?S.mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:ln([h,e.pathname])),C=g.createHref(e)}let[ee,w,te]=ni(n,p),T=gi(l,{replace:a,mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,defaultShouldRevalidate:f,useTransitions:_});function E(t){e&&e(t),t.defaultPrevented||T(t)}let ne=!(b.isExternal||i),re=v.createElement(`a`,{...p,...te,href:(ne?C:void 0)||b.absoluteURL||x,onClick:ne?E:e,ref:ci(m,w),target:c,"data-discover":!y&&t===`render`?`true`:void 0});return ee&&!y?v.createElement(v.Fragment,null,re,v.createElement(ii,{page:x})):re});di.displayName=`Link`;var fi=v.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=$n(a,{relative:c.relative}),d=j(),f=v.useContext(kn),{navigator:p,basename:m}=v.useContext(Fn),h=f!=null&&Si(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,_=d.pathname,y=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(_=_.toLowerCase(),y=y?y.toLowerCase():null,g=g.toLowerCase()),y&&m&&(y=A(y,m)||y);let b=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,x=_===g||!r&&_.startsWith(g)&&_.charAt(b)===`/`,S=y!=null&&(y===g||!r&&y.startsWith(g)&&y.charAt(g.length)===`/`),C={isActive:x,isPending:S,isTransitioning:h},ee=x?e:void 0,w;w=typeof n==`function`?n(C):[n,x?`active`:null,S?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let te=typeof i==`function`?i(C):i;return v.createElement(di,{...c,"aria-current":ee,className:w,ref:l,style:te,to:a,viewTransition:o},typeof s==`function`?s(C):s)});fi.displayName=`NavLink`;var pi=v.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=Er,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m)=>{let{useTransitions:h}=v.useContext(Fn),g=bi(),_=xi(s,{relative:l}),y=o.toLowerCase()===`get`?`get`:`post`,b=typeof s==`string`&&bt.test(s);return v.createElement(`form`,{ref:m,method:y,action:_,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f});h&&n!==!1?v.startTransition(()=>p()):p()},...p,"data-discover":!b&&e===`render`?`true`:void 0})});pi.displayName=`Form`;function mi(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function hi(e){let t=v.useContext(On);return Et(t,mi(e)),t}function gi(e,{target:t,replace:n,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c,useTransitions:l}={}){let u=Jn(),d=j(),f=$n(e,{relative:o});return v.useCallback(p=>{if(Nr(p,t)){p.preventDefault();let t=n===void 0?jt(d)===jt(f):n,m=()=>u(e,{replace:t,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c});l?v.startTransition(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}function _i(e){Dt(typeof URLSearchParams<`u`,"You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let t=v.useRef(Pr(e)),n=v.useRef(!1),r=j(),i=v.useMemo(()=>Fr(r.search,n.current?null:t.current),[r.search]),a=Jn();return[i,v.useCallback((e,t)=>{let r=Pr(typeof e==`function`?e(new URLSearchParams(i)):e);n.current=!0,a(`?`+r,t)},[a,i])]}var vi=0,yi=()=>`__${String(++vi)}__`;function bi(){let{router:e}=hi(`useSubmit`),{basename:t}=v.useContext(Fn),n=mr(),r=e.fetch,i=e.navigate;return v.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=Br(e,t);if(a.navigate===!1){let e=a.fetcherKey||yi();await r(e,n,a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync})}else await i(a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function xi(e,{relative:t}={}){let{basename:n}=v.useContext(Fn),r=v.useContext(Ln);Et(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...$n(e||`.`,{relative:t})},o=j();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:ln([n,a.pathname])),jt(a)}function Si(e,{relative:t}={}){let n=v.useContext(Mn);Et(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=hi(`useViewTransitionState`),i=$n(e,{relative:t});if(!n.isTransitioning)return!1;let a=A(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=A(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Zt(i.pathname,o)!=null||Zt(i.pathname,a)!=null}var Ci=e=>e?.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase();function wi(e,t,n=[]){if(t==null)throw Error(`[lucide]: iconNode is required when icon name is used`);return{name:Ci(e),size:24,node:t,...n.length>0?{aliases:n}:{}}}var Ti=e=>{let t=``,n=!1;for(let r of e){if(r===`-`||r===`_`||r<=` `){n=t.length>0;continue}t.length===0?t+=r.toLowerCase():t+=n?r.toUpperCase():r,n=!1}return t},Ei=e=>{let t=Ti(e);return t.charAt(0).toUpperCase()+t.slice(1)},Di=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),Oi={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":2,"stroke-linecap":`round`,"stroke-linejoin":`round`};function ki(e){return e!=null}function Ai(e,t={}){let n=t.attributeNames??{},r=e=>n[e]??e,i=e.size??e.width??Oi.width,a=e.size??e.height??Oi.height,o=e.aliases?.filter(e=>typeof e==`string`&&e.trim()!==``).map(e=>`lucide-${e}`)??[],s=[...e.name?[`lucide-${e.name}`]:[],...o],c=t.className?.split(` `).filter(Boolean)??[],l=t.includeDefaultClasses===!1?Di(...c):Di(`lucide`,...s,...c),u=t.absoluteStrokeWidth?Number(t.strokeWidth??Oi[`stroke-width`])*Number(e.size??e.width??Oi.width)/Number(t.size??t.width??Oi.width):t.strokeWidth??Oi[`stroke-width`];return[`svg`,{...Object.entries(Oi).reduce((e,[t,n])=>(e[r(t)]=n,e),{}),...`color`in t&&t.color&&{[r(`stroke`)]:t.color},...`size`in t&&ki(t.size)&&{[r(`width`)]:t.size,[r(`height`)]:t.size},...`width`in t&&ki(t.width)&&{[r(`width`)]:t.width},...`height`in t&&ki(t.height)&&{[r(`height`)]:t.height},[r(`stroke-width`)]:u,...l&&{[r(`class`)]:l},[r(`viewBox`)]:`0 0 ${i} ${a}`,...t.hasA11yProp===!1?{[r(`aria-hidden`)]:`true`}:{},...`attributes`in t&&t.attributes},e.node.map(e=>{let[n,i,a]=e,o=t.nonScalingStroke?{[r(`vector-effect`)]:`non-scaling-stroke`,...i}:i;return a?[n,o,a]:[n,o]})]}function ji(e,t={}){return Ai(e,{...t,attributeNames:{...t.attributeNames,class:`className`,"stroke-width":`strokeWidth`,"stroke-linecap":`strokeLinecap`,"stroke-linejoin":`strokeLinejoin`,"vector-effect":`vectorEffect`}})}var Mi=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},Ni=(0,v.createContext)({}),Pi=()=>(0,v.useContext)(Ni),Fi=(0,v.forwardRef)(({color:e,size:t,width:n,height:r,strokeWidth:i,absoluteStrokeWidth:a,nonScalingStroke:o,className:s=``,children:c,iconNode:l=[],icon:u={node:l,aliases:[],size:24},...d},f)=>{let{size:p=24,strokeWidth:m=2,absoluteStrokeWidth:h=!1,nonScalingStroke:g=!1,color:_=`currentColor`,className:y=``}=Pi()??{},b=!!c||Mi(d),[x,S,C=[]]=ji(u,{color:e??_,width:n??t??p,height:r??t??p,strokeWidth:i??m,absoluteStrokeWidth:a??h,nonScalingStroke:o??g,className:Di(y,s),hasA11yProp:b,attributes:d});return(0,v.createElement)(x,{ref:f,...S},[...C.map(([e,t])=>(0,v.createElement)(e,t)),...Array.isArray(c)?c:[c]])});function M(e,t=[],n=[]){let r=typeof e==`string`?wi(e,t,n):e,i=(0,v.forwardRef)(({className:e,...t},n)=>(0,v.createElement)(Fi,{ref:n,icon:r,className:e,...t}));return r.name&&(i.displayName=Ei(r.name)),i}var Ii={name:`arrow-left`,size:24,node:[[`path`,{d:`m12 19-7-7 7-7`,key:`1l729n`}],[`path`,{d:`M19 12H5`,key:`x3x0zl`}]]};Ii.node;var Li=M(Ii),Ri={name:`audio-lines`,size:24,node:[[`path`,{d:`M2 10v3`,key:`1fnikh`}],[`path`,{d:`M6 6v11`,key:`11sgs0`}],[`path`,{d:`M10 3v18`,key:`yhl04a`}],[`path`,{d:`M14 8v7`,key:`3a1oy3`}],[`path`,{d:`M18 5v13`,key:`123xd1`}],[`path`,{d:`M22 10v3`,key:`154ddg`}]]};Ri.node;var zi=M(Ri),Bi={name:`book-open`,size:24,node:[[`path`,{d:`M12 5v16`,key:`1f6ucr`}],[`path`,{d:`M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z`,key:`1fyvmf`}]]};Bi.node;var Vi=M(Bi),Hi={name:`calendar-plus`,size:24,node:[[`path`,{d:`M16 18h6`,key:`987eiv`}],[`path`,{d:`M16 2v3`,key:`otl347`}],[`path`,{d:`M19 15v6`,key:`10aioa`}],[`path`,{d:`M21 11.5V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h8.3`,key:`jgwkxf`}],[`path`,{d:`M3 9h18`,key:`1pudct`}],[`path`,{d:`M8 2v3`,key:`1ioesn`}]]};Hi.node;var Ui=M(Hi),Wi={name:`check`,size:24,node:[[`path`,{d:`M20 6 9 17l-5-5`,key:`1gmf2c`}]]};Wi.node;var Gi=M(Wi),Ki={name:`chevron-down`,size:24,node:[[`path`,{d:`m6 9 6 6 6-6`,key:`qrunsl`}]]};Ki.node;var qi=M(Ki),Ji={name:`chevron-right`,size:24,node:[[`path`,{d:`m9 18 6-6-6-6`,key:`mthhwq`}]]};Ji.node;var Yi=M(Ji),Xi={name:`circle`,size:24,node:[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}]]};Xi.node;var Zi=M(Xi),Qi={name:`clock`,size:24,node:[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 6v6l4 2`,key:`mmk7yg`}]]};Qi.node;var $i=M(Qi),ea={name:`crown`,size:24,node:[[`path`,{d:`M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z`,key:`1vdc57`}],[`path`,{d:`M5 21h14`,key:`11awu3`}]]};ea.node;var ta=M(ea),na={name:`download`,size:24,node:[[`path`,{d:`M12 15V3`,key:`m9g1x1`}],[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}],[`path`,{d:`m7 10 5 5 5-5`,key:`brsn70`}]]};na.node;var ra=M(na),ia={name:`dumbbell`,size:24,node:[[`path`,{d:`M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z`,key:`9m4mmf`}],[`path`,{d:`m2.5 21.5 1.4-1.4`,key:`17g3f0`}],[`path`,{d:`m20.1 3.9 1.4-1.4`,key:`1qn309`}],[`path`,{d:`M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z`,key:`1t2c92`}],[`path`,{d:`m9.6 14.4 4.8-4.8`,key:`6umqxw`}]]};ia.node;var aa=M(ia),oa={name:`ear`,size:24,node:[[`path`,{d:`M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0`,key:`1dfaln`}],[`path`,{d:`M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4`,key:`1qnva7`}]]};oa.node;var sa=M(oa),ca={name:`external-link`,size:24,node:[[`path`,{d:`M15 3h6v6`,key:`1q9fwt`}],[`path`,{d:`M10 14 21 3`,key:`gplh6r`}],[`path`,{d:`M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6`,key:`a6xqqp`}]]};ca.node;var la=M(ca),ua={name:`eye-off`,size:24,node:[[`path`,{d:`M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49`,key:`ct8e1f`}],[`path`,{d:`M14.084 14.158a3 3 0 0 1-4.242-4.242`,key:`151rxh`}],[`path`,{d:`M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143`,key:`13bj9a`}],[`path`,{d:`m2 2 20 20`,key:`1ooewy`}]]};ua.node;var da=M(ua),N={name:`eye`,size:24,node:[[`path`,{d:`M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0`,key:`1nclc0`}],[`circle`,{cx:`12`,cy:`12`,r:`3`,key:`1v7zrd`}]]};N.node;var fa=M(N),pa={name:`flame`,size:24,node:[[`path`,{d:`M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4`,key:`1slcih`}]]};pa.node;var ma=M(pa),ha={name:`globe`,size:24,node:[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20`,key:`13o1zl`}],[`path`,{d:`M2 12h20`,key:`9i4pu4`}]]};ha.node;var ga=M(ha),_a={name:`hash`,size:24,node:[[`line`,{x1:`4`,x2:`20`,y1:`9`,y2:`9`,key:`4lhtct`}],[`line`,{x1:`4`,x2:`20`,y1:`15`,y2:`15`,key:`vyu0kd`}],[`line`,{x1:`10`,x2:`8`,y1:`3`,y2:`21`,key:`1ggp8o`}],[`line`,{x1:`16`,x2:`14`,y1:`3`,y2:`21`,key:`weycgp`}]]};_a.node;var va=M(_a),ya={name:`house`,size:24,node:[[`path`,{d:`M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8`,key:`5wwlr5`}],[`path`,{d:`M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z`,key:`r6nss1`}]],aliases:[`home`]};ya.node;var ba=M(ya),xa={name:`languages`,size:24,node:[[`path`,{d:`m5 8 6 6`,key:`1wu5hv`}],[`path`,{d:`m4 14 6-6 2-3`,key:`1k1g8d`}],[`path`,{d:`M2 5h12`,key:`or177f`}],[`path`,{d:`M7 2h1`,key:`1t2jsx`}],[`path`,{d:`m22 22-5-10-5 10`,key:`don7ne`}],[`path`,{d:`M14 18h6`,key:`1m8k6r`}]]};xa.node;var Sa=M(xa),Ca={name:`layers`,size:24,node:[[`path`,{d:`M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z`,key:`zw3jo`}],[`path`,{d:`M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12`,key:`1wduqc`}],[`path`,{d:`M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17`,key:`kqbvx6`}]],aliases:[`layers-3`]};Ca.node;var wa=M(Ca),Ta={name:`lightbulb`,size:24,node:[[`path`,{d:`M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5`,key:`1gvzjb`}],[`path`,{d:`M9 18h6`,key:`x1upvd`}],[`path`,{d:`M10 22h4`,key:`ceow96`}]]};Ta.node;var Ea=M(Ta),Da={name:`list-checks`,size:24,node:[[`path`,{d:`M13 5h8`,key:`a7qcls`}],[`path`,{d:`M13 12h8`,key:`h98zly`}],[`path`,{d:`M13 19h8`,key:`c3s6r1`}],[`path`,{d:`m3 17 2 2 4-4`,key:`1jhpwq`}],[`path`,{d:`m3 7 2 2 4-4`,key:`1obspn`}]]};Da.node;var Oa=M(Da),ka={name:`lock`,size:24,node:[[`rect`,{width:`18`,height:`11`,x:`3`,y:`11`,rx:`2`,ry:`2`,key:`1w4ew1`}],[`path`,{d:`M7 11V7a5 5 0 0 1 10 0v4`,key:`fwvmzm`}]]};ka.node;var Aa=M(ka),ja={name:`map`,size:24,node:[[`path`,{d:`M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z`,key:`169xi5`}],[`path`,{d:`M15 5.764v15`,key:`1pn4in`}],[`path`,{d:`M9 3.236v15`,key:`1uimfh`}]]};ja.node;var Ma=M(ja),Na={name:`message-circle`,size:24,node:[[`path`,{d:`M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719`,key:`1sd12s`}]]};Na.node;var Pa=M(Na),Fa={name:`mic`,size:24,node:[[`path`,{d:`M12 19v3`,key:`npa21l`}],[`path`,{d:`M19 10v2a7 7 0 0 1-14 0v-2`,key:`1vc78b`}],[`rect`,{x:`9`,y:`2`,width:`6`,height:`13`,rx:`3`,key:`s6n7sd`}]]};Fa.node;var Ia=M(Fa),La={name:`pause`,size:24,node:[[`rect`,{x:`14`,y:`3`,width:`5`,height:`18`,rx:`1`,key:`kaeet6`}],[`rect`,{x:`5`,y:`3`,width:`5`,height:`18`,rx:`1`,key:`1wsw3u`}]]};La.node;var Ra=M(La),za={name:`play`,size:24,node:[[`path`,{d:`M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z`,key:`10ikf1`}]]};za.node;var Ba=M(za),Va={name:`puzzle`,size:24,node:[[`path`,{d:`M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z`,key:`w46dr5`}]]};Va.node;var Ha=M(Va),Ua={name:`repeat`,size:24,node:[[`path`,{d:`m17 2 4 4-4 4`,key:`nntrym`}],[`path`,{d:`M3 11v-1a4 4 0 0 1 4-4h14`,key:`84bu3i`}],[`path`,{d:`m7 22-4-4 4-4`,key:`1wqhfi`}],[`path`,{d:`M21 13v1a4 4 0 0 1-4 4H3`,key:`1rx37r`}]]};Ua.node;var Wa=M(Ua),Ga={name:`rotate-ccw`,size:24,node:[[`path`,{d:`M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`,key:`1357e3`}],[`path`,{d:`M3 3v5h5`,key:`1xhq8a`}]]};Ga.node;var Ka=M(Ga),qa={name:`search`,size:24,node:[[`path`,{d:`m21 21-4.34-4.34`,key:`14j7rj`}],[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}]]};qa.node;var Ja=M(qa),Ya={name:`settings`,size:24,node:[[`path`,{d:`M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915`,key:`1i5ecw`}],[`circle`,{cx:`12`,cy:`12`,r:`3`,key:`1v7zrd`}]]};Ya.node;var Xa=M(Ya),Za={name:`smartphone`,size:24,node:[[`rect`,{width:`14`,height:`20`,x:`5`,y:`2`,rx:`2`,ry:`2`,key:`1yt0o3`}],[`path`,{d:`M12 18h.01`,key:`mhygvu`}]]};Za.node;var Qa=M(Za),$a={name:`snowflake`,size:24,node:[[`path`,{d:`m10 20-1.25-2.5L6 18`,key:`18frcb`}],[`path`,{d:`M10 4 8.75 6.5 6 6`,key:`7mghy3`}],[`path`,{d:`m14 20 1.25-2.5L18 18`,key:`1chtki`}],[`path`,{d:`m14 4 1.25 2.5L18 6`,key:`1b4wsy`}],[`path`,{d:`m17 21-3-6h-4`,key:`15hhxa`}],[`path`,{d:`m17 3-3 6 1.5 3`,key:`11697g`}],[`path`,{d:`M2 12h6.5L10 9`,key:`kv9z4n`}],[`path`,{d:`m20 10-1.5 2 1.5 2`,key:`1swlpi`}],[`path`,{d:`M22 12h-6.5L14 15`,key:`1mxi28`}],[`path`,{d:`m4 10 1.5 2L4 14`,key:`k9enpj`}],[`path`,{d:`m7 21 3-6-1.5-3`,key:`j8hb9u`}],[`path`,{d:`m7 3 3 6h4`,key:`1otusx`}]]};$a.node;var eo=M($a),to={name:`square`,size:24,node:[[`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`,key:`afitv7`}]]};to.node;var no=M(to),ro={name:`star`,size:24,node:[[`path`,{d:`M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z`,key:`r04s7s`}]]};ro.node;var io=M(ro),ao={name:`table-2`,size:24,node:[[`path`,{d:`M3 9h18`,key:`1pudct`}],[`path`,{d:`M9 3v18`,key:`fh3hqa`}],[`rect`,{x:`3`,y:`3`,width:`18`,height:`18`,rx:`2`,key:`h1oib`}]]};ao.node;var oo=M(ao),so={name:`target`,size:24,node:[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`circle`,{cx:`12`,cy:`12`,r:`6`,key:`1vlfrh`}],[`circle`,{cx:`12`,cy:`12`,r:`2`,key:`1c9p78`}]]};so.node;var co=M(so),lo={name:`trash`,size:24,node:[[`path`,{d:`M10 11v6`,key:`nco0om`}],[`path`,{d:`M14 11v6`,key:`outv1u`}],[`path`,{d:`M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6`,key:`miytrc`}],[`path`,{d:`M3 6h18`,key:`d0wm0j`}],[`path`,{d:`M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`,key:`e791ji`}]],aliases:[`trash-2`]};lo.node;var uo=M(lo),fo={name:`triangle-alert`,size:24,node:[[`path`,{d:`m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3`,key:`wmoenq`}],[`path`,{d:`M12 9v4`,key:`juzpu7`}],[`path`,{d:`M12 17h.01`,key:`p32p05`}]],aliases:[`alert-triangle`]};fo.node;var po=M(fo),mo={name:`trophy`,size:24,node:[[`path`,{d:`M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2`,key:`pwuv1l`}],[`path`,{d:`M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2`,key:`1y54w1`}],[`path`,{d:`M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3`,key:`e30mpu`}],[`path`,{d:`M4 22h16`,key:`57wxv0`}],[`path`,{d:`M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z`,key:`1mhfuq`}],[`path`,{d:`M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3`,key:`i0yafy`}]]};mo.node;var ho=M(mo),go={name:`turtle`,size:24,node:[[`path`,{d:`m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z`,key:`1lbbv7`}],[`path`,{d:`M4.82 7.9 8 10`,key:`m9wose`}],[`path`,{d:`M15.18 7.9 12 10`,key:`p8dp2u`}],[`path`,{d:`M16.93 10H20a2 2 0 0 1 0 4H2`,key:`12nsm7`}]]};go.node;var _o=M(go),vo={name:`upload`,size:24,node:[[`path`,{d:`M12 3v12`,key:`1x0j5s`}],[`path`,{d:`m17 8-5-5-5 5`,key:`7q97r8`}],[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}]]};vo.node;var yo=M(vo),bo={name:`user`,size:24,node:[[`path`,{d:`M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2`,key:`975kel`}],[`circle`,{cx:`12`,cy:`7`,r:`4`,key:`17ys0d`}]]};bo.node;var xo=M(bo),So={name:`volume-2`,size:24,node:[[`path`,{d:`M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z`,key:`uqj9uw`}],[`path`,{d:`M16 9a5 5 0 0 1 0 6`,key:`1q6k2b`}],[`path`,{d:`M19.364 18.364a9 9 0 0 0 0-12.728`,key:`ijwkga`}]]};So.node;var Co=M(So),wo={name:`x`,size:24,node:[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]};wo.node;var To=M(wo),Eo={name:`zap`,size:24,node:[[`path`,{d:`M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z`,key:`1v7up4`}]]};Eo.node;var Do=M(Eo),P=(...e)=>e.filter(Boolean).join(` `);function F(e){let t=e.slice();for(let e=t.length-1;e>0;e--){let n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}function Oo(e,t){return F(e).slice(0,Math.max(0,t))}function ko(e){return e[Math.floor(Math.random()*e.length)]}var Ao=(e,t,n)=>Math.max(t,Math.min(n,e));function jo(e,t){let n=new Set,r=[];for(let i of e){let e=t(i);n.has(e)||(n.add(e),r.push(i))}return r}var Mo=e=>String(e).padStart(2,`0`);function No(e,t,n=`application/json`){let r=new Blob([t],{type:n}),i=URL.createObjectURL(r),a=document.createElement(`a`);a.href=i,a.download=e,document.body.appendChild(a),a.click(),a.remove(),setTimeout(()=>URL.revokeObjectURL(i),1e3)}function Po(e){try{navigator.vibrate?.(e)}catch{}}var Fo=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),I=o(((e,t)=>{t.exports=Fo()}))(),L=`#3A2A00`,Io=`#FF7A59`;function Lo({mood:e}){let t=(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`ellipse`,{cx:`40`,cy:`69`,rx:`6.5`,ry:`3.8`,fill:Io,opacity:`.55`}),(0,I.jsx)(`ellipse`,{cx:`80`,cy:`69`,rx:`6.5`,ry:`3.8`,fill:Io,opacity:`.55`})]}),n=(e=0,t=!1)=>(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`ellipse`,{cx:`47`,cy:56+e,rx:t?5.4:4.4,ry:t?7:5.8,fill:L}),(0,I.jsx)(`ellipse`,{cx:`73`,cy:56+e,rx:t?5.4:4.4,ry:t?7:5.8,fill:L}),(0,I.jsx)(`circle`,{cx:48.6,cy:53.6+e,r:`1.7`,fill:`#fff`}),(0,I.jsx)(`circle`,{cx:74.6,cy:53.6+e,r:`1.7`,fill:`#fff`})]}),r={fill:`none`,stroke:L,strokeWidth:4,strokeLinecap:`round`};switch(e){case`cheer`:return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`path`,{d:`M41 58 Q47 50 53 58`,...r}),(0,I.jsx)(`path`,{d:`M67 58 Q73 50 79 58`,...r}),t,(0,I.jsx)(`path`,{d:`M45 66 Q60 88 75 66 Z`,fill:L}),(0,I.jsx)(`ellipse`,{cx:`60`,cy:`77`,rx:`7`,ry:`4`,fill:Io})]});case`sad`:return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`path`,{d:`M40 47 L52 51`,...r,strokeWidth:3}),(0,I.jsx)(`path`,{d:`M80 47 L68 51`,...r,strokeWidth:3}),n(2),t,(0,I.jsx)(`path`,{d:`M49 78 Q60 69 71 78`,...r})]});case`think`:return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`ellipse`,{cx:`49`,cy:`54`,rx:`4.4`,ry:`5.8`,fill:L}),(0,I.jsx)(`ellipse`,{cx:`75`,cy:`54`,rx:`4.4`,ry:`5.8`,fill:L}),(0,I.jsx)(`circle`,{cx:`50.5`,cy:`51.5`,r:`1.7`,fill:`#fff`}),(0,I.jsx)(`circle`,{cx:`76.5`,cy:`51.5`,r:`1.7`,fill:`#fff`}),t,(0,I.jsx)(`path`,{d:`M53 75 Q60 72 68 73`,...r})]});case`wow`:return(0,I.jsxs)(I.Fragment,{children:[n(-1,!0),t,(0,I.jsx)(`ellipse`,{cx:`60`,cy:`75`,rx:`5.5`,ry:`6.5`,fill:L})]});case`cool`:return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`path`,{d:`M36 52 H84`,stroke:L,strokeWidth:`3.5`,strokeLinecap:`round`}),(0,I.jsx)(`rect`,{x:`37`,y:`50`,width:`20`,height:`13`,rx:`5`,fill:L}),(0,I.jsx)(`rect`,{x:`63`,y:`50`,width:`20`,height:`13`,rx:`5`,fill:L}),(0,I.jsx)(`path`,{d:`M41 54 L46 54`,stroke:`#fff`,strokeWidth:`2`,strokeLinecap:`round`,opacity:`.7`}),(0,I.jsx)(`path`,{d:`M67 54 L72 54`,stroke:`#fff`,strokeWidth:`2`,strokeLinecap:`round`,opacity:`.7`}),t,(0,I.jsx)(`path`,{d:`M48 71 Q60 82 72 71`,...r})]});case`sleep`:return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`path`,{d:`M41 57 Q47 62 53 57`,...r}),(0,I.jsx)(`path`,{d:`M67 57 Q73 62 79 57`,...r}),t,(0,I.jsx)(`ellipse`,{cx:`60`,cy:`74`,rx:`4`,ry:`3`,fill:L}),(0,I.jsx)(`text`,{x:`84`,y:`40`,fontSize:`14`,fontWeight:`900`,fill:L,fontFamily:`sans-serif`,children:`z`}),(0,I.jsx)(`text`,{x:`93`,y:`30`,fontSize:`10`,fontWeight:`900`,fill:L,fontFamily:`sans-serif`,children:`z`})]});default:return(0,I.jsxs)(I.Fragment,{children:[n(),t,(0,I.jsx)(`path`,{d:`M48 69 Q60 81 72 69`,...r})]})}}function Ro({mood:e=`happy`,size:t=96,className:n,still:r}){return(0,I.jsxs)(`svg`,{viewBox:`0 0 120 120`,width:t,height:t,className:P(`flex-none`,n),"aria-hidden":`true`,children:[(0,I.jsx)(`g`,{className:r?void 0:`anim-spin-slow`,children:Array.from({length:12},(e,t)=>(0,I.jsx)(`rect`,{x:`56`,y:`3`,width:`8`,height:`16`,rx:`4`,fill:`#FFB300`,transform:`rotate(${t*30} 60 60)`},t))}),(0,I.jsx)(`circle`,{cx:`60`,cy:`60`,r:`37`,fill:`#FFC21A`}),(0,I.jsx)(`path`,{d:`M33 47 A30 30 0 0 1 60 27`,fill:`none`,stroke:`#FFE07A`,strokeWidth:`5`,strokeLinecap:`round`,opacity:`.9`}),(0,I.jsx)(Lo,{mood:e})]})}var zo=e=>{let t,n=new Set,r=(e,r)=>{let i=typeof e==`function`?e(t):e;if(!Object.is(i,t)){let e=t;t=r??(typeof i!=`object`||!i)?i:Object.assign({},t,i),n.forEach(n=>n(t,e))}},i=()=>t,a={setState:r,getState:i,getInitialState:()=>o,subscribe:e=>(n.add(e),()=>n.delete(e))},o=t=e(r,i,a);return a},Bo=(e=>e?zo(e):zo),Vo=e=>e;function Ho(e,t=Vo){let n=v.useSyncExternalStore(e.subscribe,v.useCallback(()=>t(e.getState()),[e,t]),v.useCallback(()=>t(e.getInitialState()),[e,t]));return v.useDebugValue(n),n}var Uo=e=>{let t=Bo(e),n=e=>Ho(t,e);return Object.assign(n,t),n},Wo=(e=>e?Uo(e):Uo);function Go(e,t){let n;try{n=e()}catch{return}return{getItem:e=>{let r=e=>e===null?null:JSON.parse(e,t?.reviver),i=n.getItem(e)??null;return i instanceof Promise?i.then(r):r(i)},setItem:(e,r)=>n.setItem(e,JSON.stringify(r,t?.replacer)),removeItem:e=>n.removeItem(e)}}var R=e=>t=>{try{let n=e(t);return n instanceof Promise?n:{then(e){return R(e)(n)},catch(e){return this}}}catch(e){return{then(e){return this},catch(t){return R(t)(e)}}}},z=(e,t)=>(n,r,i)=>{let a={storage:Go(()=>window.localStorage),partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},o=!1,s=0,c=new Set,l=new Set,u=a.storage;if(!u)return e((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`),n(...e)},r,i);let d=()=>{let e=a.partialize({...r()});return u.setItem(a.name,{state:e,version:a.version})},f=i.setState;i.setState=(e,t)=>(f(e,t),d());let p=e((...e)=>(n(...e),d()),r,i);i.getInitialState=()=>p;let m,h=()=>{if(!u)return;let e=++s;o=!1,c.forEach(e=>e(r()??p));let t=a.onRehydrateStorage?.call(a,r()??p)||void 0;return R(u.getItem.bind(u))(a.name).then(e=>{if(e){if(typeof e.version==`number`&&e.version!==a.version){if(a.migrate){let t=a.migrate(e.state,e.version);return t instanceof Promise?t.then(e=>[!0,e]):[!0,t]}console.error(`State loaded from storage couldn't be migrated since no migrate function was provided`)}else return[!1,e.state]}return[!1,void 0]}).then(t=>{if(e!==s)return;let[i,o]=t;if(m=a.merge(o,r()??p),n(m,!0),i)return d()}).then(()=>{e===s&&(t?.(r(),void 0),m=r(),o=!0,l.forEach(e=>e(m)))}).catch(n=>{e===s&&t?.(void 0,n)})};return i.persist={setOptions:e=>{a={...a,...e},e.storage&&(u=e.storage)},clearStorage:()=>{++s,u?.removeItem(a.name)},getOptions:()=>a,rehydrate:()=>h(),hasHydrated:()=>o,onHydrate:e=>(c.add(e),()=>{c.delete(e)}),onFinishHydration:e=>(l.add(e),()=>{l.delete(e)})},a.skipHydration||h(),m||p};function Ko(e=new Date){return`${e.getFullYear()}-${Mo(e.getMonth()+1)}-${Mo(e.getDate())}`}var qo=()=>Ko(new Date);function Jo(e){let[t,n,r]=e.split(`-`).map(Number);return new Date(t,n-1,r)}function Yo(e,t){let n=Jo(e);return n.setDate(n.getDate()+t),Ko(n)}function Xo(e,t){return Math.round((Jo(t).getTime()-Jo(e).getTime())/864e5)}function Zo(e){return(Jo(e).getDay()+6)%7}function Qo(e,t={day:`numeric`,month:`short`}){return Jo(e).toLocaleDateString(`en-GB`,t)}var $o=[`L`,`M`,`X`,`J`,`V`,`S`,`D`],es=[`lunes`,`martes`,`miércoles`,`jueves`,`viernes`,`sábado`,`domingo`],ts=[`enero`,`febrero`,`marzo`,`abril`,`mayo`,`junio`,`julio`,`agosto`,`septiembre`,`octubre`,`noviembre`,`diciembre`];function ns(e=new Date){let t=e.getHours();return t>=5&&t<14?{es:`¡Buenos días!`,en:`Good morning!`}:t>=14&&t<21?{es:`¡Buenas tardes!`,en:`Good afternoon!`}:{es:`¡Buenas noches!`,en:`Good evening!`}}function rs(e=new Date){return`${es[(e.getDay()+6)%7]}, ${e.getDate()} de ${ts[e.getMonth()]}`}var is=6e4;function as(e,t){let n=new Date(e);return n.getHours()<4&&n.setDate(n.getDate()-1),n.setHours(4,0,0,0),n.setDate(n.getDate()+t),n.getTime()}function os(e){return e<4?e:e+Math.round(e*.05*(Math.random()*2-1))}function ss(e,t,n=Date.now()){let r={...e,last:n};if(r.reps===0||r.interval===0)return t===0?(r.interval=0,r.due=n+is,r.reps>0&&(r.ease=Math.max(1.3,r.ease-.1)),r):(r.reps+=1,t===1?(r.interval=1,r.ease=Math.max(1.3,r.ease-.15)):t===2?r.interval=r.lapses>0?1:r.reps>1?2:1:(r.interval=4,r.ease+=.15),r.due=as(n,r.interval),r);if(t===0)return r.lapses+=1,r.ease=Math.max(1.3,r.ease-.2),r.interval=0,r.due=n+5*is,r;r.reps+=1;let i;return t===1?(i=Math.max(r.interval+1,Math.round(r.interval*1.2)),r.ease=Math.max(1.3,r.ease-.15)):t===2?i=Math.max(r.interval+1,Math.round(r.interval*r.ease)):(i=Math.max(r.interval+2,Math.round(r.interval*r.ease*1.3)),r.ease+=.15),r.interval=Math.min(365,os(i)),r.due=as(n,r.interval),r}function cs(e,t,n=Date.now()){let r=ss(e,t,n);if(r.interval===0)return r.due-n<=is*1.5?`1 min`:`5 min`;let i=r.interval;return i<30?`${i}d`:i<365?`${Math.round(i/30)}mo`:`1y`}function ls(e){return e.reps===0?0:Math.min(1,e.interval/21)}var us=s({default:()=>ds}),ds={n:1,title:`Sounds & first words`,es:`¡Hola!`,cando:[`I can pronounce the 5 Spanish vowels clearly`,`I can greet people and say goodbye at any time of day`,`I can say my name and ask someone theirs`,`I can count from 0 to 20`,`I can read any word aloud using the stress rules`,`I can ask someone to repeat or speak more slowly`],lessons:[{t:`The 5 vowels & ¡Hola!`,k:`pron`,goal:`Pronounce the five Spanish vowels and say hello, goodbye and thank you`,body:`
## Welcome! 👋
Spanish is one of the most **phonetic** languages in the world: you say what you see. Learn the sounds once and you can read any word aloud. **Tap any Spanish word** in this app to hear it — tap it again on the word card to hear it slowly.

## Five pure vowels
Spanish has only **5 vowel sounds** and they never change. Keep them short and pure — no gliding like English "go" (go-u) or "day" (de-i).

| Vowel | Sounds like | Examples |
|---|---|---|
| {a} | a in "father", but short | {casa}, {mapa}, {hola} |
| {e} | e in "pet" | {mesa}, {leche}, {tres} |
| {i} | ee in "see", but short | {sí}, {vino}, {libro} |
| {o} | o in "for" — no "u" at the end | {no}, {foto}, {todo} |
| {u} | oo in "food" | {uno}, {mucho}, {luna} |

!de: Great news: Spanish vowels are almost exactly German short vowels — {a} as in "Mann", {e} as in "Bett", {i} as in "Kind", {o} as in "Sonne", {u} as in "Mutter". Just never make them long like "See" or "Boot".
!ar: Arabic has three vowels (a, i, u). Spanish adds **e** and **o** as separate sounds that change meaning: {mesa} (table) ≠ {misa} (mass), {oso} (bear) ≠ {uso} (use). Keep e/i and o/u apart!
!tip: Unstressed vowels keep their full sound. English turns them into "uh" (b**a**n**a**na → buh-NAN-uh); Spanish never does: {banana} is ba-na-na.

## Your first words
> ¡Hola! = Hi! / Hello!
> ¡Adiós! = Goodbye!
> Sí. = Yes.
> No. = No.
> Gracias. = Thank you.
> De nada. = You're welcome.
> Por favor. = Please.

!es: Spanish opens exclamations with **¡** and questions with **¿**: {¡Hola!} {¿Qué tal?} You will see them everywhere.
`,words:`
hola = hello, hi
adiós = goodbye
sí = yes
no = no
gracias = thank you
de nada = you're welcome
por favor = please
la casa = house, home
el mapa = map
la mesa = table
el vino = wine
la luna = moon
uno = one
`,phrases:`
¡Hola! ¿Qué tal? = Hi! How's it going?
Sí, gracias. = Yes, thank you.
No, gracias. = No, thank you.
¡Adiós! = Goodbye!
Gracias. — De nada. = Thank you. — You're welcome.
Un vino, por favor. = A wine, please.
`,drills:`
¡___! ¿Qué tal? => Hola | Adiós | Gracias | Sí # Hi! How's it going?
Gracias. — De ___. => nada | favor | hola | adiós # Thank you. — You're welcome.
Por ___. => favor | nada | gracias | sí # Please.
___, gracias. => No | Hola | Adiós | Nada # No, thank you.
Un vino, por ___. => favor | nada | gracias | hola # A wine, please.
`},{t:`Buenos días! Greetings`,k:`talk`,goal:`Greet people at any time of day and ask how they are`,body:`
## Greetings in Spain
> Buenos días. = Good morning. (until lunch, about 2 pm)
> Buenas tardes. = Good afternoon / evening. (until about 9 pm)
> Buenas noches. = Good evening / good night.
> ¿Qué tal? = How are you? / How's it going?
> ¿Cómo estás? = How are you? (informal)
> ¿Cómo está usted? = How are you? (formal)
> Bien, gracias. ¿Y tú? = Fine, thanks. And you?
> Muy bien. = Very well.
> Regular. = So-so.
> Hasta luego. = See you later. / Bye.
> Hasta mañana. = See you tomorrow.

!es: In Spain friends — and often new acquaintances — greet with **dos besos**, two kisses on the cheeks (right, then left). Men usually shake hands with each other. People say {¡Hasta luego!} even when leaving a shop they'll never see again.

## New sounds
- **H** is always silent: {hola} sounds like "ola", {hasta} like "asta".
- **J** (and **G** before e/i) is a strong throaty sound: {Juan}, {jamón}, {gente}.
- **LL** and **Y** sound like the "y" in "yes": {llamo}, {calle}, {yo}.
- **Ñ** sounds like "ny" in "canyon": {España}, {mañana}, {niño}.
- **CH** sounds like in "church": {noche}, {mucho}.

!ar: Spanish **j** = Arabic **خ**: {Juan} ≈ خوان. Spanish **ll** / **y** = Arabic **ي**: {yo} ≈ يو. And **ñ** ≈ نْي.
!de: Spanish **j** = German **ch** in "Bach": {Juan}, {jamón}. Spanish **ch** = German **tsch** (Deutsch). The Spanish **h** is always silent — never like in "Haus"!
`,words:`
buenos días = good morning
buenas tardes = good afternoon, good evening
buenas noches = good evening, good night
¿qué tal? = how are you? how's it going?
bien = well, fine
muy bien = very well
regular = so-so
mal = badly, bad
hasta luego = see you later, bye
hasta mañana = see you tomorrow
mañana = tomorrow; morning
y = and
¿y tú? = and you?
`,phrases:`
Buenos días, ¿qué tal? = Good morning, how are you?
Muy bien, gracias. ¿Y tú? = Very well, thanks. And you?
Bien, gracias. = Fine, thanks.
¿Cómo estás? = How are you?
Hasta mañana. = See you tomorrow.
Buenas noches. = Good night.
`,drills:`
Buenos ___. (morning) => días | tardes | noches | luego # Good morning.
Buenas ___. (afternoon) => tardes | días | luego | bien # Good afternoon.
Hasta ___. (tomorrow) => mañana | luego | noches | tal # See you tomorrow.
Muy ___, gracias. => bien | mal | tal | luego # Very well, thanks.
Bien, gracias. ¿Y ___? => tú | yo | hola | bien # Fine, thanks. And you?
¿Qué ___? => tal | bien | días | luego # How are you?
`},{t:`Me llamo… & the rolled R`,k:`talk`,goal:`Say your name, ask someone’s name and react politely`,body:`
## Introducing yourself
> ¿Cómo te llamas? = What's your name? (informal)
> Me llamo Omar. = My name is Omar. (literally: I call myself Omar)
> Soy Ana. = I'm Ana.
> ¿Y tú? = And you?
> Encantado. = Nice to meet you. (a man speaking)
> Encantada. = Nice to meet you. (a woman speaking)
> Mucho gusto. = Nice to meet you. (anyone)
> ¿Cómo se llama usted? = What's your name? (formal)

!tip: **Encantado / encantada** matches the speaker: a man says {encantado}, a woman says {encantada}. Your first taste of Spanish gender!

## R and RR
- One **r** between vowels is one quick tap of the tongue, like the "tt" in American "better": {pero} (but), {caro} (expensive), {para} (for).
- **rr**, and **r** at the start of a word, is a rolled trill: {perro} (dog), {Roma}, {rojo} (red).
- They change meaning: {pero} – {perro}, {caro} – {carro}, {para} – {parra}.

!ar: The Spanish tap **r** is exactly Arabic **ر**: {pero} ≈ بيرو. For **rr**, roll the ر for longer: {perro}.
!de: Don't use the German throat-r of "rot"! Spanish r is made with the tip of the tongue — like a Bavarian or Swiss rolled r.
`,words:`
¿cómo te llamas? = what's your name? (informal)
me llamo… = my name is…
soy… = I am…
encantado = nice to meet you (said by a man)
encantada = nice to meet you (said by a woman)
mucho gusto = nice to meet you
el nombre = name, first name
el apellido = surname
pero = but
el perro = dog
caro = expensive
rojo = red
`,phrases:`
¡Hola! ¿Cómo te llamas? = Hi! What's your name?
Me llamo Omar. ¿Y tú? = My name is Omar. And you?
Soy Laura. Encantada. = I'm Laura. Nice to meet you.
Mucho gusto. = Nice to meet you.
¿Cómo se llama usted? = What's your name? (formal)
Me llamo Carlos García. = My name is Carlos García.
`,drills:`
¿Cómo te ___? => llamas | llamo | llama | soy # What's your name?
Me ___ Omar. => llamo | llamas | soy | es # My name is Omar.
___ Laura. => Soy | Llamo | Eres | Encantado # I'm Laura.
(Laura says:) Encantad___. => a | o | e | os # Nice to meet you.
Mucho ___. => gusto | gracias | bien | nombre # Nice to meet you.
`},{t:`Numbers 0–20 · C, Z, S, B, V`,k:`vocab`,goal:`Count from 0 to 20 and pronounce c/z/s and b/v the Spanish way`,body:`
## Counting 0–20
| | | | |
|---|---|---|---|
| 0 {cero} | 1 {uno} | 2 {dos} | 3 {tres} |
| 4 {cuatro} | 5 {cinco} | 6 {seis} | 7 {siete} |
| 8 {ocho} | 9 {nueve} | 10 {diez} | 11 {once} |
| 12 {doce} | 13 {trece} | 14 {catorce} | 15 {quince} |
| 16 {dieciséis} | 17 {diecisiete} | 18 {dieciocho} | 19 {diecinueve} |
| 20 {veinte} | | | |

!tip: 16–19 are "ten and six" etc. written as one word: {dieciséis}, {diecisiete}.

## C, Z and S (Spain)
- **z**, and **c** before **e / i**, sound like English **th** in "think": {cero}, {cinco}, {once}, {doce}, {gracias}, {zapato}.
- **c** before a / o / u, and **qu**, sound like **k**: {casa}, {cuatro}, {qué}, {quince}.
- **s** is always a soft, hissing **s** — never a buzzing "z": {seis}, {siete}, {casa}.

!ar: Spain's **z / ce / ci** is Arabic **ث**: {cero} ≈ ثيرو, {gracias} ≈ غراثياس.
!de: Spanish **z** is never "ts" as in "Zeit", and **s** is never voiced as in "Sonne": {seis} sounds like "ßeiß".
!es: In Latin America and the Canary Islands, z / ce / ci are pronounced like **s** ("seseo"). Both are correct — this course uses Spain's pronunciation.

## B and V
**B** and **V** are the same sound in Spanish: {vino} and {bien} start alike. Between vowels it's softer, the lips almost touching: {nueve}, {Cuba}.

!de: Spanish **v** is never "f" (Vater) or "w": {vino} sounds like "bino".
!ar: Spanish **p** and **b** are different sounds: {peso} (weight) ≠ {beso} (kiss). Arabic has no native "p" — practise {papá}, {pan}, {perro}.
`,words:`
cero = zero
uno = one
dos = two
tres = three
cuatro = four
cinco = five
seis = six
siete = seven
ocho = eight
nueve = nine
diez = ten
once = eleven
doce = twelve
trece = thirteen
catorce = fourteen
quince = fifteen
dieciséis = sixteen
diecisiete = seventeen
dieciocho = eighteen
diecinueve = nineteen
veinte = twenty
`,phrases:`
Uno, dos, tres. = One, two, three.
Dos más dos son cuatro. = Two plus two is four.
Cinco más cinco son diez. = Five plus five is ten.
¿Qué número? = Which number?
Mi número es el siete. = My number is seven.
Diez menos tres son siete. = Ten minus three is seven.
`,drills:`
Dos más dos son ___. => cuatro | tres | cinco | seis # Two plus two is four.
Cinco más cinco son ___. => diez | doce | quince | nueve # Five plus five is ten.
Diez más ___ son quince. => cinco | seis | cuatro | tres # Ten plus five is fifteen.
Diez más diez son ___. => veinte | doce | diecinueve | dos # Ten plus ten is twenty.
Seis más ___ son trece. => siete | ocho | seis | nueve # Six plus seven is thirteen.
Diez menos tres son ___. => siete | seis | ocho | trece # Ten minus three is seven.
`},{t:`Word stress & ¿De dónde eres?`,k:`pron`,goal:`Find the stressed syllable of any word and say where you are from`,body:`
## Which syllable is stressed?
Three simple rules let you pronounce any Spanish word:
1. Word ends in a **vowel**, **n** or **s** → stress the **second-to-last** syllable: {casa} (**CA**-sa), {hablan} (**HA**-blan), {lunes} (**LU**-nes).
2. Word ends in any **other consonant** → stress the **last** syllable: {hablar} (ha-**BLAR**), {ciudad} (ciu-**DAD**), {español} (es-pa-**ÑOL**).
3. A written **accent** (á é í ó ú) overrides the rules: {café}, {teléfono}, {árbol}, {inglés}.

!tip: Tap any word in the app: the word card shows its syllables with the stressed one highlighted.

Accents also tell words apart: {esta} (this) – {está} (is); {si} (if) – {sí} (yes); {tu} (your) – {tú} (you); {hablo} (I speak) – {habló} (he spoke).

## Where are you from?
> ¿De dónde eres? = Where are you from? (informal)
> Soy de Marruecos. = I'm from Morocco.
> Soy de Alemania, de Berlín. = I'm from Germany, from Berlin.
> ¿De dónde es usted? = Where are you from? (formal)
> Vivo en Madrid. = I live in Madrid.

!ar: Thousands of Spanish words come from Arabic, thanks to 800 years of al-Andalus: {el aceite} (الزيت, oil), {el azúcar} (السكر, sugar), {el arroz} (الرز, rice), {ojalá} (لو شاء الله, "hopefully"). Watch for words starting with **al-** or **a-**: {la almohada} (pillow), {el alcalde} (mayor), {la aldea} (village).
`,words:`
¿de dónde eres? = where are you from?
soy de… = I'm from…
vivo en… = I live in…
España = Spain
Alemania = Germany
Marruecos = Morocco
Egipto = Egypt
Inglaterra = England
el café = coffee, café
el teléfono = telephone
el aceite = oil
el azúcar = sugar
el arroz = rice
ojalá = hopefully, I wish
`,phrases:`
¿De dónde eres? = Where are you from?
Soy de Egipto. = I'm from Egypt.
Soy de Alemania. = I'm from Germany.
Vivo en España. = I live in Spain.
¿De dónde es usted? = Where are you from? (formal)
Un café con azúcar, por favor. = A coffee with sugar, please.
`,drills:`
¿De ___ eres? => dónde | cómo | qué | cuál # Where are you from?
Soy ___ Marruecos. => de | en | y | a # I'm from Morocco.
Vivo ___ Madrid. => en | de | y | a # I live in Madrid.
Soy de ___. (Germany) => Alemania | España | Egipto | Marruecos # I'm from Germany.
Un café con ___, por favor. => azúcar | arroz | aceite | mesa # A coffee with sugar, please.
`},{t:`Survival phrases & the alphabet`,k:`talk`,goal:`Ask for help in class, spell words and say you speak a little Spanish`,body:`
## Your survival kit
> No entiendo. = I don't understand.
> ¿Puedes repetir, por favor? = Can you repeat, please?
> Más despacio, por favor. = More slowly, please.
> ¿Cómo se dice "apple" en español? = How do you say "apple" in Spanish?
> ¿Qué significa "perro"? = What does "perro" mean?
> ¿Cómo se escribe? = How do you spell it?
> Hablo un poco de español. = I speak a little Spanish.
> Perdón. / Lo siento. = Excuse me. / I'm sorry.

## The alphabet — el abecedario
| Letter | Name | Letter | Name |
|---|---|---|---|
| A | {a} | N | {ene} |
| B | {be} | Ñ | {eñe} |
| C | {ce} | O | {o} |
| D | {de} | P | {pe} |
| E | {e} | Q | {cu} |
| F | {efe} | R | {erre} |
| G | {ge} | S | {ese} |
| H | {hache} | T | {te} |
| I | {i} | U | {u} |
| J | {jota} | V | {uve} |
| K | {ka} | W | {uve doble} |
| L | {ele} | X | {equis} |
| M | {eme} | Y | {i griega} |
| | | Z | {zeta} |

!tip: Spell your name: Omar = {o, eme, a, erre}. On the phone, Spaniards say {be de Barcelona} or {uve de Valencia} to make b/v clear.
`,words:`
no entiendo = I don't understand
¿puedes repetir? = can you repeat?
más despacio = more slowly
¿cómo se dice…? = how do you say…?
¿qué significa…? = what does … mean?
¿cómo se escribe? = how do you spell it?
un poco = a little
el español = Spanish (language)
perdón = sorry, excuse me
lo siento = I'm sorry
la palabra = word
la letra = letter
`,phrases:`
No entiendo. ¿Puedes repetir, por favor? = I don't understand. Can you repeat, please?
Más despacio, por favor. = More slowly, please.
¿Cómo se dice "thank you" en español? = How do you say "thank you" in Spanish?
¿Qué significa "perro"? = What does "perro" mean?
Hablo un poco de español. = I speak a little Spanish.
Lo siento, no entiendo. = I'm sorry, I don't understand.
`,drills:`
No ___. => entiendo | entiendes | repetir | despacio # I don't understand.
Más ___, por favor. => despacio | poco | gracias | bien # More slowly, please.
¿Cómo se ___ "dog" en español? => dice | llama | escribe | significa # How do you say "dog" in Spanish?
¿Qué ___ "gato"? => significa | dice | escribe | entiendo # What does "gato" mean?
Hablo un ___ de español. => poco | mucho | bien | más # I speak a little Spanish.
`}],story:{title:`Un café en Madrid`,text:`
¡Hola! Me llamo Laura. Soy de Sevilla, en España, pero vivo en Madrid.
= Hi! My name is Laura. I'm from Seville, in Spain, but I live in Madrid.

En un café, un chico dice: —¡Hola! ¿Qué tal?
= In a café, a young man says: "Hi! How's it going?"

—Muy bien, gracias. ¿Y tú? ¿Cómo te llamas?
= "Very well, thanks. And you? What's your name?"

—Me llamo Omar. Soy de Marruecos, de Tánger.
= "My name is Omar. I'm from Morocco, from Tangier."

—¡Encantada, Omar! —Mucho gusto, Laura.
= "Nice to meet you, Omar!" "Nice to meet you, Laura."

Omar habla un poco de español. —Más despacio, por favor —dice Omar. Laura habla más despacio.
= Omar speaks a little Spanish. "More slowly, please," says Omar. Laura speaks more slowly.

—¿Un café? —Sí, por favor. —¡Dos cafés, por favor! —Gracias. —De nada.
= "A coffee?" "Yes, please." "Two coffees, please!" "Thank you." "You're welcome."

—¡Adiós, Laura! ¡Hasta mañana! —¡Hasta mañana, Omar!
= "Bye, Laura! See you tomorrow!" "See you tomorrow, Omar!"
`,questions:`
¿De dónde es Laura? => De Sevilla | De Madrid | De Tánger # Where is Laura from?
¿Dónde vive Laura? => En Madrid | En Sevilla | En Tánger # Where does Laura live?
¿De dónde es Omar? => De Marruecos | De España | De Alemania # Where is Omar from?
¿Qué toman Laura y Omar? => Dos cafés | Dos vinos | Un café # What do Laura and Omar have?
`}},fs=s({default:()=>ps}),ps={n:2,title:`Who are you? — ser & gender`,es:`¿Quién eres?`,cando:[`I can use subject pronouns and choose between tú, usted and vosotros`,`I can say who I am, where I am from and what I do with ser`,`I can say my nationality and which languages I speak`,`I can talk about jobs in the masculine and feminine`,`I can use el / la / un / una and make nouns plural`],lessons:[{t:`I, you, he, she… pronouns`,k:`grammar`,goal:`Use the subject pronouns and know when to use tú, usted and vosotros`,body:`
## Subject pronouns
| | Singular | Plural |
|---|---|---|
| 1st | {yo} — I | {nosotros} / {nosotras} — we |
| 2nd informal | {tú} — you | {vosotros} / {vosotras} — you all |
| 2nd formal | {usted} — you | {ustedes} — you all |
| 3rd | {él} — he · {ella} — she | {ellos} / {ellas} — they |

- The **-as** forms are for all-female groups: {nosotras}, {vosotras}, {ellas}. Mixed groups use the masculine form.
- {usted} (formal "you") takes the same verb form as {él} / {ella}. It's often written **Ud.**
- {vosotros} is the friendly "you all" used in **Spain**. {ustedes} is the polite plural — and the only plural "you" in Latin America.

!de: {tú} ≈ du, {usted} ≈ Sie (singular), {vosotros} ≈ ihr, {ustedes} ≈ Sie (plural). Spain uses {tú} far more than Germany uses "du" — with shop staff, colleagues and people your age.
!ar: Like Arabic, Spanish separates masculine and feminine "they": {ellos} / {ellas} ≈ هم / هنّ. But there is no dual, and "you" singular has no gender: {tú} = أنتَ and أنتِ.

## Spanish drops the pronoun
The verb ending already shows who is acting, so pronouns are usually left out: {Hablo español} = I speak Spanish. Use the pronoun only for emphasis or contrast: {Yo soy de Rabat y él es de Berlín.}

!ar: Exactly like Arabic: {Hablo español} ≈ أتكلّم الإسبانية — no separate "I" needed.
!de: In German "ich" is obligatory; in Spanish {Hablo español} is a complete sentence.
`,words:`
yo = I
tú = you (informal)
él = he
ella = she
usted = you (formal)
nosotros = we (masc. / mixed)
nosotras = we (fem.)
vosotros = you all (informal, masc. / mixed)
vosotras = you all (informal, fem.)
ellos = they (masc. / mixed)
ellas = they (fem.)
ustedes = you all (formal)
`,phrases:`
Yo soy Omar y él es Carlos. = I'm Omar and he's Carlos.
Ella es Ana. = She is Ana.
¿Y usted? = And you? (formal)
Nosotros somos de Marruecos. = We're from Morocco.
¿Vosotros sois de Madrid? = Are you (all) from Madrid?
Ellas son de Alemania. = They (f.) are from Germany.
`,drills:`
(To a friend:) ¿Y ___? => tú | usted | él | yo # And you?
(To an older stranger:) ¿Y ___? => usted | tú | vosotros | ella # And you? (formal)
(Ana and María:) ___ son de Sevilla. => Ellas | Ellos | Nosotras | Vosotras # They are from Seville.
(To your friends, in Spain:) ¿___ sois de aquí? => Vosotros | Ustedes | Ellos | Nosotros # Are you all from here?
(Me and my brother:) ___ somos de Egipto. => Nosotros | Nosotras | Ellos | Vosotros # We're from Egypt.
`},{t:`Ser — to be (who & what)`,k:`grammar`,goal:`Conjugate ser and use it for identity, origin and profession`,body:`
## The verb ser
| Person | ser | |
|---|---|---|
| {yo} | {soy} | I am |
| {tú} | {eres} | you are |
| {él / ella / usted} | {es} | he / she is, you are |
| {nosotros} | {somos} | we are |
| {vosotros} | {sois} | you all are |
| {ellos / ellas / ustedes} | {son} | they are, you all are |

Use **ser** for what something **is** — its identity:
- name & identity: {Soy Omar.}
- origin: {Soy de Marruecos.}
- nationality: {Soy marroquí.}
- profession: {Soy ingeniero.}
- description & character: {Es simpática.}
- time & dates: {Hoy es lunes.}

!tip: Spanish has a **second** verb for "to be": **estar** (where something is, how someone feels). You'll meet it in week 5. For now: who / what / where from → **ser**.
!de: No article with professions: {Soy profesor} = "Ich bin Lehrer" — just like German (English needs "a teacher").
!ar: Arabic usually has no verb "to be" in the present (أنا طالب). Spanish always needs it: {Soy estudiante}.

## Negatives & questions
Put **no** before the verb: {No soy de Madrid.} Questions just change the intonation (and add ¿?):
> ¿Eres de Madrid? = Are you from Madrid?
> Sí, soy de Madrid. = Yes, I'm from Madrid.
> No, no soy de Madrid. = No, I'm not from Madrid.
`,words:`
ser = to be (identity, origin)
soy = I am
eres = you are
es = he / she is, you (formal) are
somos = we are
sois = you all are
son = they are, you all are
el estudiante, la estudiante = student
el amigo, la amiga = friend
aquí = here
`,phrases:`
¿Eres de aquí? = Are you from here?
No, no soy de aquí. Soy de Egipto. = No, I'm not from here. I'm from Egypt.
Somos estudiantes. = We're students.
¿Sois amigos? = Are you friends?
Ellos son de Berlín. = They're from Berlin.
Usted es el profesor, ¿no? = You're the teacher, aren't you?
`,drills:`
Yo ___ de Marruecos. => soy | es | eres | somos # I'm from Morocco.
¿Tú ___ estudiante? => eres | es | soy | sois # Are you a student?
Ella ___ mi amiga. => es | eres | son | soy # She is my friend.
Nosotros ___ de Alemania. => somos | sois | son | es # We are from Germany.
¿Vosotros ___ de Madrid? => sois | somos | son | eres # Are you all from Madrid?
Ellos no ___ profesores. => son | es | somos | sois # They aren't teachers.
`},{t:`Nationalities & languages`,k:`vocab`,goal:`Say your nationality and the languages you speak`,body:`
## Nationalities have gender
Most change **-o → -a** for women, and add **-a** after a consonant:
| Country | Man | Woman | Language |
|---|---|---|---|
| {España} | {español} | {española} | {el español} |
| {Alemania} | {alemán} | {alemana} | {el alemán} |
| {Marruecos} | {marroquí} | {marroquí} | {el árabe} |
| {Egipto} | {egipcio} | {egipcia} | {el árabe} |
| {Inglaterra} | {inglés} | {inglesa} | {el inglés} |
| {Francia} | {francés} | {francesa} | {el francés} |
| {Italia} | {italiano} | {italiana} | {el italiano} |
| {Estados Unidos} | {estadounidense} | {estadounidense} | {el inglés} |

- Endings in **-í** or **-e** don't change: {marroquí}, {estadounidense}.
- The accent disappears in the feminine: {alemán} → {alemana}, {inglés} → {inglesa} — the stress rules do the job.
- Nationalities and languages are written in **lowercase**: {español}, {alemán}.

> Hablo árabe, inglés y alemán. = I speak Arabic, English and German.
> ¿Hablas español? = Do you speak Spanish?
> ¿Qué idiomas hablas? = What languages do you speak?

!tip: **y → e** before a word starting with an "i" sound: {español e inglés}.
!de: German capitalises "Deutsch" as a noun, but Spanish always writes {alemán} in lowercase — even the language.
`,words:`
español, española = Spanish
alemán, alemana = German
marroquí = Moroccan
egipcio, egipcia = Egyptian
inglés, inglesa = English
francés, francesa = French
italiano, italiana = Italian
árabe = Arabic, Arab
el idioma = language
hablar = to speak
Francia = France
Italia = Italy
`,phrases:`
Soy alemán, pero vivo en España. = I'm German, but I live in Spain.
Ella es egipcia. = She's Egyptian.
Hablo árabe, inglés y alemán. = I speak Arabic, English and German.
¿Hablas francés? = Do you speak French?
Laura es española e Ian es inglés. = Laura is Spanish and Ian is English.
¿Qué idiomas hablas? = What languages do you speak?
`,drills:`
Ana es de Italia. Es ___. => italiana | italiano | Italia | italianas # Ana is from Italy. She's Italian.
Peter es de Alemania. Es ___. => alemán | alemana | alemanes | Alemania # Peter is from Germany. He's German.
Sara es de Inglaterra. Es ___. => inglesa | inglés | ingleses | Inglaterra # Sara is from England. She's English.
Youssef es de Marruecos. Es ___. => marroquí | marroquía | marroquino | Marruecos # Youssef is from Morocco. He's Moroccan.
Hablo español ___ inglés. => e | y | o | de # I speak Spanish and English.
`},{t:`What do you do? Jobs`,k:`vocab`,goal:`Ask and say what people do for a living`,body:`
## ¿A qué te dedicas?
> ¿A qué te dedicas? = What do you do (for a living)?
> ¿En qué trabajas? = What's your job?
> Soy ingeniero. = I'm an engineer.
> Trabajo en un hospital. = I work in a hospital.
> Estudio informática. = I study computer science.

Most jobs have a masculine and a feminine form:
| Man | Woman | |
|---|---|---|
| {el médico} | {la médica} | doctor |
| {el profesor} | {la profesora} | teacher |
| {el ingeniero} | {la ingeniera} | engineer |
| {el camarero} | {la camarera} | waiter / waitress |
| {el abogado} | {la abogada} | lawyer |
| {el enfermero} | {la enfermera} | nurse |
| {el estudiante} | {la estudiante} | student |
| {el periodista} | {la periodista} | journalist |

- **-o → -a**: {médico} → {médica}
- **consonant + a**: {profesor} → {profesora}
- **-e** and **-ista** usually stay the same: {el / la estudiante}, {el / la periodista}.

!tip: No "a / an" before jobs after ser: {Soy médica} = I'm a doctor.
`,words:`
el médico, la médica = doctor
el profesor, la profesora = teacher
el ingeniero, la ingeniera = engineer
el camarero, la camarera = waiter, waitress
el abogado, la abogada = lawyer
el enfermero, la enfermera = nurse
el periodista, la periodista = journalist
el trabajo = job, work
trabajar = to work
el hospital = hospital
la empresa = company
¿a qué te dedicas? = what do you do (for a living)?
`,phrases:`
¿A qué te dedicas? = What do you do?
Soy enfermera y trabajo en un hospital. = I'm a nurse and I work in a hospital.
Mi amigo es camarero. = My friend is a waiter.
Ella es abogada. = She's a lawyer.
No soy médico, soy estudiante. = I'm not a doctor, I'm a student.
Trabajo en una empresa alemana. = I work for a German company.
`,drills:`
María es ___. (teacher) => profesora | profesor | profesores | profesión # María is a teacher.
Pedro es ___. (doctor) => médico | médica | médicos | medicina # Pedro is a doctor.
Lucía es ___. (engineer) => ingeniera | ingeniero | ingenieras | ingeniería # Lucía is an engineer.
Trabajo ___ un hospital. => en | de | a | y # I work in a hospital.
¿A qué te ___? => dedicas | llamas | eres | trabajas # What do you do?
`},{t:`Nouns: gender & plural`,k:`grammar`,goal:`Guess the gender of a noun and make it plural`,body:`
## Every noun has a gender
| Usually masculine | Usually feminine |
|---|---|
| ends in **-o**: {el libro}, {el vaso} | ends in **-a**: {la casa}, {la mesa} |
| ends in **-or**: {el ordenador} | ends in **-ción / -sión**: {la canción}, {la televisión} |
| ends in **-aje**: {el viaje} | ends in **-dad / -tad**: {la ciudad}, {la libertad} |

**Learn every noun with its article!** Common exceptions: {el día} (day), {el mapa}, {el problema}, {el idioma} are masculine; {la mano} (hand), {la foto}, {la radio} are feminine.

!de: Good news: only 2 genders — no neuter! But they often differ from German: {la leche} (die Milch) matches, but {el sol} (die Sonne) and {la luna} (der Mond) are swapped.
!ar: Like Arabic, -a is often feminine, a bit like **ة**: {la casa}, {la mesa}. But genders don't always match: {el sol} is masculine while الشمس is feminine.

## Plural
- After a vowel add **-s**: {libro} → {libros}, {casa} → {casas}
- After a consonant add **-es**: {ciudad} → {ciudades}, {profesor} → {profesores}
- **-z** becomes **-ces**: {lápiz} → {lápices}, {luz} → {luces}
- Accents may come or go: {canción} → {canciones}, {joven} → {jóvenes}
`,words:`
el libro = book
el vaso = glass (for drinking)
el ordenador = computer (Spain)
la canción = song
la ciudad = city
el día = day
el problema = problem
la mano = hand
la foto = photo
el lápiz = pencil
la luz = light
el sol = sun
la leche = milk
`,phrases:`
Los libros y las mesas. = The books and the tables.
Es un problema. = It's a problem.
Las ciudades de España. = The cities of Spain.
Tengo dos lápices. = I have two pencils.
Buenos días a todos. = Good morning, everyone.
Una foto, por favor. = A photo, please.
`,drills:`
___ problema => el | la | los | las # the problem
___ mano => la | el | los | las # the hand
___ ciudad => la | el | los | un # the city
dos ___ (pencil) => lápices | lápizs | lápiz | lápizes # two pencils
tres ___ (song) => canciones | canciónes | cancions | canción # three songs
cuatro ___ (city) => ciudades | ciudads | ciudadas | ciudad # four cities
`},{t:`Articles: el, la, un, una`,k:`grammar`,goal:`Use definite and indefinite articles, plus al and del`,body:`
## "The" — definite articles
| | Singular | Plural |
|---|---|---|
| masculine | {el libro} | {los libros} |
| feminine | {la casa} | {las casas} |

## "A / some" — indefinite articles
| | Singular | Plural |
|---|---|---|
| masculine | {un libro} | {unos libros} |
| feminine | {una casa} | {unas casas} |

- {el} (the) has no accent; {él} (he) has one.
- **a + el = al** and **de + el = del**: {Voy al banco.} (I'm going to the bank.) {La casa del profesor.} (The teacher's house.)
- Feminine nouns that start with a stressed **a-** take {el} in the singular: {el agua} (water), {el aula} (classroom) — but {las aguas}.

!de: Easier than German: no cases! {el} is always {el} — no der / den / dem.
!ar: {el} / {la} work like الـ: {el libro} = الكتاب. Spanish also has "a / an" — {un} / {una} — where Arabic uses tanwīn (كتابٌ).

> Es un libro de español. = It's a Spanish book.
> El libro es de Ana. = The book is Ana's.
> Son unas fotos de Sevilla. = They're some photos of Seville.
`,words:`
el = the (masc.)
la = the (fem.)
los = the (masc. plural)
las = the (fem. plural)
un = a, an (masc.)
una = a, an (fem.)
unos = some (masc.)
unas = some (fem.)
al = to the (a + el)
del = of the, from the (de + el)
el agua = water // feminine, but takes "el"
el aula = classroom // feminine, but takes "el"
el banco = bank; bench
`,phrases:`
Es un libro de español. = It's a Spanish book.
La casa del profesor. = The teacher's house.
Un vaso de agua, por favor. = A glass of water, please.
Son unas fotos de Sevilla. = They're some photos of Seville.
El ordenador es de Omar. = The computer is Omar's.
Las amigas de Laura son de Cádiz. = Laura's friends are from Cádiz.
`,drills:`
___ casa => una | un | unos | uno # a house
___ libros => los | las | el | la # the books
___ fotos => unas | unos | una | un # some photos
Un vaso ___ agua. => de | del | al | el # A glass of water.
La casa ___ profesor. => del | de el | al | de la # The teacher's house.
___ agua => el | la | los | lo # the water
`}],story:{title:`La clase de español`,text:`
Es lunes. Es la primera clase de español en una escuela de Madrid.
= It's Monday. It's the first Spanish class at a school in Madrid.

El profesor se llama Javier. Es de Salamanca y es muy simpático.
= The teacher is called Javier. He's from Salamanca and he's very nice.

—¡Buenos días a todos! Yo soy Javier, vuestro profesor. ¿Y vosotros?
= "Good morning, everyone! I'm Javier, your teacher. And you?"

—Hola, me llamo Anna. Soy alemana, de Hamburgo. Soy estudiante de medicina.
= "Hi, my name is Anna. I'm German, from Hamburg. I'm a medical student."

—Yo soy Omar. Soy marroquí, de Rabat. Soy ingeniero y trabajo en una empresa española.
= "I'm Omar. I'm Moroccan, from Rabat. I'm an engineer and I work for a Spanish company."

—Y nosotras somos Kate y Emma. Somos inglesas, de Londres. Somos camareras en un hotel.
= "And we're Kate and Emma. We're English, from London. We're waitresses in a hotel."

—¡Muy bien! Sois de cuatro ciudades diferentes. ¡Bienvenidos a la clase!
= "Very good! You're from four different cities. Welcome to the class!"
`,questions:`
¿Cómo se llama el profesor? => Javier | Omar | Anna # What is the teacher called?
¿De dónde es Anna? => De Alemania | De Inglaterra | De Marruecos # Where is Anna from?
¿Qué es Omar? => Ingeniero | Médico | Camarero # What is Omar's job?
¿De dónde son Kate y Emma? => De Londres | De Madrid | De Hamburgo # Where are Kate and Emma from?
`}},ms=s({default:()=>hs}),hs={n:3,title:`Family & descriptions`,es:`Mi familia`,cando:[`I can say my age and count to 100`,`I can talk about the members of my family`,`I can use possessives: mi, tu, su, nuestro…`,`I can describe what people look like and what they are like`,`I can ask questions with qué, quién, cómo, dónde, cuántos…`],lessons:[{t:`Tener & numbers 21–100`,k:`grammar`,goal:`Use tener to say what you have and how old you are; count to 100`,body:`
## The verb tener (to have)
| | tener |
|---|---|
| {yo} | {tengo} |
| {tú} | {tienes} |
| {él / ella / usted} | {tiene} |
| {nosotros} | {tenemos} |
| {vosotros} | {tenéis} |
| {ellos / ellas / ustedes} | {tienen} |

Notice the irregular {tengo} and the **e → ie** change in {tienes}, {tiene}, {tienen}.

## Age: tener + años
In Spanish you *have* years — you don't *be* them:
> ¿Cuántos años tienes? = How old are you?
> Tengo veinticinco años. = I'm 25 (years old).
> Mi abuela tiene ochenta años. = My grandmother is 80.

!de: German says "Ich bin 25", Spanish says "I have 25 years": {Tengo 25 años}. Never "soy 25".
!ar: Arabic says عمري ٢٥ سنة ("my age is 25"); Spanish uses tener: {Tengo 25 años}.

## Numbers 21–100
| | | |
|---|---|---|
| 21 {veintiuno} | 22 {veintidós} | 23 {veintitrés} |
| 30 {treinta} | 31 {treinta y uno} | 40 {cuarenta} |
| 50 {cincuenta} | 60 {sesenta} | 70 {setenta} |
| 80 {ochenta} | 90 {noventa} | 100 {cien} |

- 21–29 are one word: {veinticuatro}, {veintinueve}.
- From 31: tens **y** units: {treinta y dos}, {cuarenta y cinco}, {noventa y nueve}.
- **uno → un** before a masculine noun: {veintiún años}, {treinta y un libros}; and **una** before a feminine one: {veintiuna personas}.

!de: Spanish says the tens first, like English: {treinta y cinco} = 30 + 5 — not "fünfunddreißig"!
!ar: Arabic says the units first (خمسة وثلاثون); Spanish says the tens first: {treinta y cinco}.
`,words:`
tener = to have
el año = year
¿cuántos años tienes? = how old are you?
veintiuno = twenty-one
treinta = thirty
cuarenta = forty
cincuenta = fifty
sesenta = sixty
setenta = seventy
ochenta = eighty
noventa = ninety
cien = one hundred
`,phrases:`
¿Cuántos años tienes? = How old are you?
Tengo treinta y dos años. = I'm thirty-two.
Mi hermano tiene veintiún años. = My brother is twenty-one.
¿Tienes hermanos? = Do you have any brothers or sisters?
Tenemos un perro y dos gatos. = We have a dog and two cats.
Mi abuelo tiene noventa años. = My grandfather is ninety.
`,drills:`
Yo ___ veinte años. => tengo | tiene | tienes | soy # I'm twenty.
¿Cuántos años ___ (tú)? => tienes | tiene | tengo | tenéis # How old are you?
Nosotros ___ un perro. => tenemos | tienen | tenéis | tengo # We have a dog.
Ellos ___ tres hijos. => tienen | tiene | tenemos | tienes # They have three children.
Tengo ___ años. (21) => veintiún | veintiuno | veinte y uno | veintiuna # I'm twenty-one.
Mi abuela tiene ___ años. (80) => ochenta | ocho | dieciocho | setenta # My grandmother is eighty.
`},{t:`Family — la familia`,k:`vocab`,goal:`Talk about the people in your family`,body:`
## Mi familia
| Male | Female | |
|---|---|---|
| {el padre} | {la madre} | father / mother |
| {el hermano} | {la hermana} | brother / sister |
| {el hijo} | {la hija} | son / daughter |
| {el abuelo} | {la abuela} | grandfather / grandmother |
| {el tío} | {la tía} | uncle / aunt |
| {el primo} | {la prima} | cousin |
| {el marido} | {la mujer} | husband / wife |
| {el novio} | {la novia} | boyfriend / girlfriend |

!tip: The masculine plural covers both sexes: {los padres} = parents, {los hermanos} = brothers and sisters, {los hijos} = children, {los abuelos} = grandparents.
!de: {los padres} = die Eltern, {los hermanos} = die Geschwister — Spanish uses the masculine plural for mixed groups.
!ar: Spanish has one word for uncle: {tío} = عم and خال; {tía} = عمة and خالة. And {primo} covers every cousin: ابن العم، ابن الخال…

> Tengo dos hermanos y una hermana. = I have two brothers and a sister.
> Soy hijo único. = I'm an only child (said by a man).
> Mi hermana mayor se llama Salma. = My older sister is called Salma.

!es: You call your parents {papá} and {mamá}; you talk *about* them as {mi padre} and {mi madre}. Spaniards have two surnames — the father's first surname, then the mother's: {Pedro García López}.
`,words:`
la familia = family
el padre = father
la madre = mother
los padres = parents
el hermano = brother
la hermana = sister
el hijo = son
la hija = daughter
los hijos = children (sons and daughters)
el abuelo = grandfather
la abuela = grandmother
el tío = uncle
la tía = aunt
el primo, la prima = cousin
el marido = husband
la mujer = wife; woman
`,phrases:`
¿Tienes hermanos? = Do you have brothers or sisters?
Tengo una hermana mayor. = I have an older sister.
Mis padres viven en Rabat. = My parents live in Rabat.
Soy hijo único. = I'm an only child.
Mi tía tiene tres hijos. = My aunt has three children.
Esta es mi familia. = This is my family.
`,drills:`
El padre de mi padre es mi ___. => abuelo | tío | primo | hermano # My father's father is my grandfather.
La hermana de mi madre es mi ___. => tía | prima | abuela | hija # My mother's sister is my aunt.
El hijo de mi tío es mi ___. => primo | hermano | sobrino | abuelo # My uncle's son is my cousin.
Mis ___ se llaman Ana y Pedro: mi madre y mi padre. => padres | parientes | hijos | abuelos # My parents are called Ana and Pedro.
Tengo un ___ y una hermana. => hermano | hermana | hermanos | hermanas # I have a brother and a sister.
`},{t:`My, your, his… possessives`,k:`grammar`,goal:`Say whose something is with mi, tu, su, nuestro and de`,body:`
## Possessive adjectives
| | one thing | several things |
|---|---|---|
| my | {mi casa} | {mis casas} |
| your (tú) | {tu casa} | {tus casas} |
| his / her / your (usted) | {su casa} | {sus casas} |
| our | {nuestro piso} · {nuestra casa} | {nuestros} · {nuestras} |
| your (vosotros) | {vuestro piso} · {vuestra casa} | {vuestros} · {vuestras} |
| their / your (ustedes) | {su casa} | {sus casas} |

- They agree with the **thing owned**, not with the owner: {mis padres}, {nuestra madre}.
- Only {nuestro} and {vuestro} have a feminine form.
- {tu} (your) has no accent; {tú} (you) does.
- {su} can mean his, her, its, their or your. Use **de** to be clear: {la casa de Ana}, {el coche de ellos}.

!de: Like German "sein / ihr" — but Spanish {su} doesn't care whether the owner is male or female: {su padre} = sein Vater *or* ihr Vater.
!ar: Arabic adds a suffix (بيتي، بيتك، بيته); Spanish puts a word in front: {mi casa}, {tu casa}, {su casa}.

## Whose? — ¿De quién?
> ¿De quién es este libro? = Whose book is this?
> Es de mi hermano. = It's my brother's.
> Es el coche de Laura. = It's Laura's car.

!tip: Spanish has no **'s**. "Laura's car" = {el coche de Laura} — literally "the car of Laura".
`,words:`
mi, mis = my
tu, tus = your (informal)
su, sus = his, her, their, your (formal)
nuestro, nuestra = our
vuestro, vuestra = your (you all, informal)
¿de quién? = whose?
el coche = car (Spain)
el piso = flat, apartment; floor (Spain)
la llave = key
el móvil = mobile phone (Spain)
`,phrases:`
¿De quién es este móvil? = Whose mobile is this?
Es de mi hermana. = It's my sister's.
Nuestra casa es pequeña. = Our house is small.
¿Dónde están tus llaves? = Where are your keys?
Su padre es médico. = His / her father is a doctor.
Vuestro piso es muy bonito. = Your flat is very nice.
`,drills:`
(yo) ___ padres son de Egipto. => Mis | Mi | Tus | Sus # My parents are from Egypt.
(tú) ¿Es ___ coche? => tu | tú | tus | su # Is it your car?
(nosotros) ___ casa es grande. => Nuestra | Nuestro | Nuestras | Vuestra # Our house is big.
(ella) ___ hermanos viven en Madrid. => Sus | Su | Mis | Tus # Her brothers live in Madrid.
(vosotros) ¿Dónde está ___ piso? => vuestro | vuestra | nuestro | vuestros # Where is your flat?
Es el libro ___ Ana. => de | del | a | su # It's Ana's book.
`},{t:`Describing people`,k:`grammar`,goal:`Describe what people look like and what they are like`,body:`
## Adjectives agree
Adjectives match the noun in **gender** and **number**, and usually come **after** it:
| | masculine | feminine |
|---|---|---|
| singular | {un chico alto} | {una chica alta} |
| plural | {unos chicos altos} | {unas chicas altas} |

- Adjectives in **-o** have four forms: {alto, alta, altos, altas}.
- Adjectives in **-e** and most in a consonant have two: {inteligente / inteligentes}, {joven / jóvenes}.
- {ser} + adjective describes what someone **is like**: {Mi madre es simpática.}

!de: In German the ending depends on the article (ein großer Mann / der große Mann). In Spanish it only depends on gender and number: {alto, alta, altos, altas}.
!ar: Like Arabic, the adjective follows the noun and agrees with it: {una casa grande} ≈ بيت كبير.

## Appearance
> Es alto y delgado. = He's tall and slim.
> Tiene el pelo largo y los ojos verdes. = She has long hair and green eyes.
> Es morena y lleva gafas. = She's dark-haired and wears glasses.

## Character
> Es muy simpático. = He's very nice.
> Mi hermano es un poco tímido. = My brother is a bit shy.
> Mi amiga es muy divertida. = My friend is really fun.

!warn: {simpático} = nice, friendly — not "sympathetic". And {sensible} = sensitive, not "sensible" (that's {sensato}).
!tip: For hair and eyes use **tener**: {Tengo el pelo corto}, {Tiene los ojos marrones}.
`,words:`
alto, alta = tall
bajo, baja = short (height)
delgado, delgada = slim
guapo, guapa = good-looking
joven = young
mayor = older; elderly
simpático, simpática = nice, friendly
antipático, antipática = unfriendly
inteligente = intelligent
tímido, tímida = shy
divertido, divertida = fun, funny
el pelo = hair
los ojos = eyes
las gafas = glasses (Spain)
`,phrases:`
Mi hermana es alta y morena. = My sister is tall and dark-haired.
Tiene el pelo largo y los ojos azules. = She has long hair and blue eyes.
Mis primos son muy simpáticos. = My cousins are very nice.
Mi padre lleva gafas. = My father wears glasses.
¿Cómo es tu novia? = What's your girlfriend like?
Es inteligente y un poco tímida. = She's intelligent and a little shy.
`,drills:`
Mi madre es muy ___. => simpática | simpático | simpáticas | simpáticos # My mother is very nice.
Mis hermanos son ___. => altos | alto | altas | alta # My brothers are tall.
Las chicas son muy ___. => inteligentes | inteligente | inteligentas | inteligentos # The girls are very intelligent.
Pedro ___ los ojos verdes. => tiene | es | está | son # Pedro has green eyes.
¿Cómo ___ tu profesor? => es | tiene | está | son # What is your teacher like?
Ana es ___ y simpática. => guapa | guapo | guapas | guapos # Ana is pretty and nice.
`},{t:`Colours & clothes`,k:`vocab`,goal:`Name colours and clothes, and say what you are wearing`,body:`
## Los colores
| | | |
|---|---|---|
| {rojo} red | {azul} blue | {verde} green |
| {amarillo} yellow | {negro} black | {blanco} white |
| {gris} grey | {marrón} brown | {naranja} orange |
| {rosa} pink | {morado} purple | |

- Colours in **-o** agree: {una camisa roja}, {unos zapatos negros}.
- Colours in **-e** or a consonant only add a plural: {verde / verdes}, {azul / azules}, {gris / grises}, {marrón / marrones}.
- {naranja} and {rosa} usually don't change at all.
- The colour comes **after** the noun: {el coche blanco}.

!de: The opposite order to German: "ein rotes Auto" = {un coche rojo}.
!ar: Same order as Arabic: {un coche rojo} ≈ سيارة حمراء.

> ¿De qué color es? = What colour is it?
> Mi color favorito es el verde. = My favourite colour is green.

## Clothes — la ropa
{la camisa} (shirt), {la camiseta} (T-shirt), {los pantalones} (trousers), {los vaqueros} (jeans), {la falda} (skirt), {el vestido} (dress), {los zapatos} (shoes), {el abrigo} (coat), {el jersey} (jumper).

> Llevo una camiseta blanca y unos vaqueros. = I'm wearing a white T-shirt and jeans.

!tip: **llevar** = to wear (and to carry): {¿Qué llevas hoy?}
`,words:`
el color = colour
rojo, roja = red
azul = blue
verde = green
amarillo, amarilla = yellow
negro, negra = black
blanco, blanca = white
gris = grey
marrón = brown
la ropa = clothes
la camiseta = T-shirt
los pantalones = trousers
los zapatos = shoes
llevar = to wear; to carry
`,phrases:`
¿De qué color es tu coche? = What colour is your car?
Mi coche es gris. = My car is grey.
Llevo una camiseta azul. = I'm wearing a blue T-shirt.
Tiene los ojos marrones. = He has brown eyes.
Los zapatos negros son de Pedro. = The black shoes are Pedro's.
Mi color favorito es el verde. = My favourite colour is green.
`,drills:`
una camisa ___ (white) => blanca | blanco | blancas | blancos # a white shirt
unos zapatos ___ (black) => negros | negro | negras | negra # some black shoes
dos coches ___ (grey) => grises | gris | grisas | grisos # two grey cars
la falda ___ (red) => roja | rojo | rojas | rojos # the red skirt
Hoy ___ una camiseta verde. => llevo | tengo | soy | es # Today I'm wearing a green T-shirt.
`},{t:`Asking questions`,k:`grammar`,goal:`Ask questions with qué, quién, cómo, dónde, cuándo, cuánto, cuál and por qué`,body:`
## Question words
| | |
|---|---|
| {¿Qué?} | What? — {¿Qué es esto?} |
| {¿Quién? / ¿Quiénes?} | Who? — {¿Quién es ella?} |
| {¿Cómo?} | How? / What … like? — {¿Cómo es tu casa?} |
| {¿Dónde?} | Where? — {¿Dónde vives?} |
| {¿De dónde?} | Where from? — {¿De dónde eres?} |
| {¿Cuándo?} | When? — {¿Cuándo es tu cumpleaños?} |
| {¿Cuánto? / ¿Cuánta?} | How much? — {¿Cuánto cuesta?} |
| {¿Cuántos? / ¿Cuántas?} | How many? — {¿Cuántos hermanos tienes?} |
| {¿Cuál? / ¿Cuáles?} | Which (one)? — {¿Cuál es tu número?} |
| {¿Por qué?} | Why? — {¿Por qué estudias español?} |

- Question words **always** carry an accent: {¿dónde?}, {¿cómo?}, {¿qué?}.
- The answer to {¿por qué?} is {porque} (because) — one word, no accent.
- {¿Cuántos?} agrees with the noun: {¿Cuántas hermanas tienes?}
- The subject often goes **after** the verb: {¿Dónde vive tu hermano?}

!tip: "What is…?" asking for one item of a set = {¿Cuál es…?}: {¿Cuál es tu nombre?}, {¿Cuál es tu teléfono?}. Asking for a definition = {¿Qué es…?}: {¿Qué es un piso?}
!de: {¿qué?} = was, {¿quién?} = wer, {¿dónde?} = wo, {¿cuándo?} = wann, {¿por qué?} = warum, {¿cuánto?} = wie viel.
!ar: {¿qué?} ≈ ماذا / ما، {¿quién?} ≈ مَن، {¿dónde?} ≈ أين، {¿cuándo?} ≈ متى، {¿cómo?} ≈ كيف، {¿cuánto?} ≈ كم، {¿por qué?} ≈ لماذا.
`,words:`
¿qué? = what?
¿quién? = who?
¿cómo? = how?
¿dónde? = where?
¿cuándo? = when?
¿cuánto? = how much?
¿cuántos? = how many?
¿cuál? = which? what?
¿por qué? = why?
porque = because
el cumpleaños = birthday
el número = number
`,phrases:`
¿Quién es esa chica? = Who's that girl?
¿Cuándo es tu cumpleaños? = When is your birthday?
¿Cuántos hermanos tienes? = How many brothers and sisters do you have?
¿Por qué estudias español? = Why are you studying Spanish?
Porque me gusta mucho. = Because I like it a lot.
¿Cuál es tu número de teléfono? = What's your phone number?
`,drills:`
¿___ te llamas? => Cómo | Qué | Cuál | Quién # What's your name?
¿___ vives? — En Madrid. => Dónde | Cuándo | Cómo | Qué # Where do you live? — In Madrid.
¿___ hermanos tienes? => Cuántos | Cuántas | Cuánto | Qué # How many brothers and sisters do you have?
¿___ es ese chico? — Es mi primo. => Quién | Qué | Cuál | Dónde # Who is that boy? — He's my cousin.
¿___ estudias español? — Porque vivo en España. => Por qué | Porque | Qué | Cuándo # Why are you studying Spanish?
¿___ es tu cumpleaños? — El 3 de mayo. => Cuándo | Dónde | Cuánto | Quién # When is your birthday? — On 3 May.
`}],story:{title:`La familia de Omar`,text:`
Omar enseña unas fotos a Laura. —Mira, esta es mi familia.
= Omar shows Laura some photos. "Look, this is my family."

—Este es mi padre. Se llama Ahmed y tiene cincuenta y ocho años. Es profesor de matemáticas.
= "This is my father. His name is Ahmed and he's fifty-eight. He's a maths teacher."

—¿Y esta mujer tan guapa? —Es mi madre, Fátima. Es muy simpática y divertida.
= "And this beautiful woman?" "She's my mother, Fátima. She's very nice and fun."

—¿Tienes hermanos? —Sí, una hermana y un hermano. Mi hermana se llama Salma: tiene veintiséis años y es médica. Mi hermano Karim es el pequeño: tiene dieciocho años y es estudiante.
= "Do you have brothers and sisters?" "Yes, a sister and a brother. My sister is called Salma: she's twenty-six and she's a doctor. My brother Karim is the youngest: he's eighteen and a student."

—¿Y quién es este señor mayor? —Es mi abuelo. Tiene ochenta y cuatro años, pero es muy activo.
= "And who's this older gentleman?" "He's my grandfather. He's eighty-four, but he's very active."

—Tu familia es grande. Yo soy hija única —dice Laura—. Pero tengo muchos primos: ¡quince!
= "Your family is big. I'm an only child," says Laura. "But I have lots of cousins: fifteen!"

—¿Quince primos? ¡Qué familia tan grande!
= "Fifteen cousins? What a big family!"
`,questions:`
¿Cuántos años tiene el padre de Omar? => Cincuenta y ocho | Ochenta y cuatro | Veintiséis # How old is Omar's father?
¿Qué es Salma? => Médica | Profesora | Estudiante # What does Salma do?
¿Quién es el pequeño de la familia? => Karim | Salma | Ahmed # Who is the youngest in the family?
¿Cuántos primos tiene Laura? => Quince | Cinco | Cincuenta # How many cousins does Laura have?
`}},gs=s({default:()=>_s}),_s={n:4,title:`Daily life — the present tense`,es:`Mi día a día`,cando:[`I can conjugate regular -ar, -er and -ir verbs in the present`,`I can make sentences negative with no`,`I can say the days of the week, the months and the seasons`,`I can tell the time and ask when things happen`,`I can say how often I do things`],lessons:[{t:`Present tense: -ar verbs`,k:`grammar`,goal:`Conjugate regular -ar verbs and talk about what you do`,body:`
## Regular -ar verbs
Take off **-ar** and add the endings:
| | hablar (to speak) | trabajar (to work) |
|---|---|---|
| {yo} | {habl[o]} | {trabaj[o]} |
| {tú} | {habl[as]} | {trabaj[as]} |
| {él / ella / usted} | {habl[a]} | {trabaj[a]} |
| {nosotros} | {habl[amos]} | {trabaj[amos]} |
| {vosotros} | {habl[áis]} | {trabaj[áis]} |
| {ellos / ellas / ustedes} | {habl[an]} | {trabaj[an]} |

The present covers "I speak", "I'm speaking" and "I do speak": {Hablo español} = I speak / I'm speaking Spanish.

!de: Just like German, the ending tells you who: ich arbeit**e** = {trabaj[o]}, du arbeit**est** = {trabaj[as]}.
!ar: Arabic marks the person mostly with prefixes (أعمل، نعمل), Spanish with endings ({trabajo}, {trabajamos}) — but the idea is the same.

## Common -ar verbs
{hablar} (speak), {trabajar} (work), {estudiar} (study), {escuchar} (listen), {mirar} (look), {cocinar} (cook), {comprar} (buy), {tomar} (take, have), {necesitar} (need), {viajar} (travel), {bailar} (dance).

> Trabajo en una oficina. = I work in an office.
> ¿Hablas inglés? = Do you speak English?
> Estudiamos español todos los días. = We study Spanish every day.
`,words:`
hablar = to speak
trabajar = to work
estudiar = to study
escuchar = to listen (to)
mirar = to look (at), to watch
cocinar = to cook
comprar = to buy
tomar = to take; to have (food, drink)
necesitar = to need
viajar = to travel
la oficina = office
la música = music
`,phrases:`
Trabajo en una oficina en el centro. = I work in an office in the centre.
¿Hablas inglés? = Do you speak English?
Estudiamos español todos los días. = We study Spanish every day.
Mi madre cocina muy bien. = My mother cooks very well.
¿Qué música escucháis? = What music do you (all) listen to?
Necesito un café. = I need a coffee.
`,drills:`
Yo ___ en un hospital. (trabajar) => trabajo | trabaja | trabajas | trabajamos # I work in a hospital.
¿Tú ___ alemán? (hablar) => hablas | habla | hablo | habláis # Do you speak German?
Mi hermana ___ medicina. (estudiar) => estudia | estudias | estudio | estudian # My sister studies medicine.
Nosotros ___ música. (escuchar) => escuchamos | escucháis | escuchan | escucho # We listen to music.
Vosotros ___ mucho. (viajar) => viajáis | viajamos | viajan | viajas # You (all) travel a lot.
Ellos ___ un taxi. (necesitar) => necesitan | necesita | necesitamos | necesitáis # They need a taxi.
`},{t:`Negatives & the days of the week`,k:`vocab`,goal:`Say what you don’t do and talk about the days of the week`,body:`
## Saying no
Put **no** right before the verb: {No trabajo los sábados.} (I don't work on Saturdays.)
> ¿Hablas francés? — No, no hablo francés. = Do you speak French? — No, I don't speak French.

!de: No "nicht" at the end — Spanish puts {no} before the verb: {No trabajo} = Ich arbeite nicht.

## Days of the week
| | |
|---|---|
| {lunes} | Monday |
| {martes} | Tuesday |
| {miércoles} | Wednesday |
| {jueves} | Thursday |
| {viernes} | Friday |
| {sábado} | Saturday |
| {domingo} | Sunday |

- Days are **masculine** and written in **lowercase**.
- "On Monday" = {el lunes}; "on Mondays" = {los lunes} — no preposition!
- {el fin de semana} = the weekend.

> ¿Qué día es hoy? = What day is it today?
> Hoy es martes. = Today is Tuesday.
> Los domingos como con mi familia. = On Sundays I have lunch with my family.

!tip: Spanish weeks start on Monday — that's why calendars read L M X J V S D (X for {miércoles}, so it isn't confused with {martes}).
!ar: In many Arab countries the week starts on Sunday or Saturday; in Spain it starts on {lunes}, and the weekend is {sábado} and {domingo}.
`,words:`
el lunes = Monday
el martes = Tuesday
el miércoles = Wednesday
el jueves = Thursday
el viernes = Friday
el sábado = Saturday
el domingo = Sunday
la semana = week
el fin de semana = weekend
hoy = today
mañana = tomorrow
¿qué día es hoy? = what day is it today?
`,phrases:`
Hoy es lunes. = Today is Monday.
No trabajo los sábados. = I don't work on Saturdays.
El viernes ceno con mis amigos. = On Friday I'm having dinner with my friends.
¿Qué haces el fin de semana? = What are you doing at the weekend?
Mañana es domingo. = Tomorrow is Sunday.
No, no necesito nada. = No, I don't need anything.
`,drills:`
Hoy es lunes, mañana es ___. => martes | domingo | miércoles | jueves # Today is Monday, tomorrow is Tuesday.
___ sábados no trabajo. => Los | El | En | Las # On Saturdays I don't work.
No ___ francés. (hablar, yo) => hablo | habla | hablas | hablar # I don't speak French.
El día después del jueves es el ___. => viernes | miércoles | sábado | martes # The day after Thursday is Friday.
Mis padres ___ trabajan los domingos. => no | ni | sin | nada # My parents don't work on Sundays.
`},{t:`What time is it?`,k:`talk`,goal:`Tell the time and say when things happen`,body:`
## Telling the time
> ¿Qué hora es? = What time is it?
> Es la una. = It's one o'clock.
> Son las dos. = It's two o'clock.
> Son las tres y cuarto. = It's quarter past three.
> Son las cuatro y media. = It's half past four.
> Son las cinco menos cuarto. = It's quarter to five.
> Son las seis y diez. = It's ten past six.
> Son las siete menos veinte. = It's twenty to seven.

- **Es la una** (singular) — every other hour uses **son las**.
- After the hour: **y** + minutes. Before the next hour: **menos** + minutes.
- {de la mañana} (in the morning), {de la tarde} (in the afternoon / evening), {de la noche} (at night): {Son las diez de la noche.}

## At what time?
> ¿A qué hora empieza la clase? = What time does the class start?
> A las nueve. = At nine.
> Al mediodía. = At midday.

!es: Spain runs late: lunch ({la comida}) at 2–3 pm, dinner ({la cena}) at 9–10 pm. Many small shops close from 2 to 5 pm. Timetables use the 24-hour clock: {las 20:30} = {las ocho y media de la tarde}.
!de: Careful: German "halb fünf" is 4:30 = {las cuatro y media}. Spanish counts the half **after** the hour, not before!
!ar: Very close to Arabic: الساعة الرابعة والنصف = {las cuatro y media}; والربع = {y cuarto}; إلا ربعًا = {menos cuarto}.
`,words:`
la hora = hour; time (on the clock)
¿qué hora es? = what time is it?
es la una = it's one o'clock
son las dos = it's two o'clock
y cuarto = quarter past
y media = half past
menos cuarto = quarter to
¿a qué hora? = at what time?
la mañana = morning
la tarde = afternoon, evening
la noche = night
el mediodía = midday
`,phrases:`
¿Qué hora es? — Son las once y cuarto. = What time is it? — It's quarter past eleven.
La clase empieza a las nueve. = The class starts at nine.
Trabajo de ocho a tres. = I work from eight to three.
Ceno a las nueve y media. = I have dinner at half past nine.
Es la una menos diez. = It's ten to one.
¿A qué hora llegas? = What time are you arriving?
`,drills:`
Son las tres y ___. (3:30) => media | cuarto | menos | medio # It's half past three.
___ la una. => Es | Son | Está | Están # It's one o'clock.
Son las cinco ___ cuarto. (4:45) => menos | y | de | a # It's quarter to five.
¿A qué ___ es la clase? => hora | tiempo | vez | día # What time is the class?
Ceno a las diez de la ___. (10 pm) => noche | mañana | tarde | día # I have dinner at ten at night.
`},{t:`Present tense: -er verbs`,k:`grammar`,goal:`Conjugate regular -er verbs: comer, beber, leer, aprender…`,body:`
## Regular -er verbs
| | comer (to eat) | beber (to drink) |
|---|---|---|
| {yo} | {com[o]} | {beb[o]} |
| {tú} | {com[es]} | {beb[es]} |
| {él / ella / usted} | {com[e]} | {beb[e]} |
| {nosotros} | {com[emos]} | {beb[emos]} |
| {vosotros} | {com[éis]} | {beb[éis]} |
| {ellos / ellas / ustedes} | {com[en]} | {beb[en]} |

Common -er verbs: {comer} (eat), {beber} (drink), {leer} (read), {aprender} (learn), {comprender} (understand), {vender} (sell), {correr} (run), {deber} (must, should), {creer} (believe).

> Leo el periódico por la mañana. = I read the newspaper in the morning.
> ¿Comes carne? = Do you eat meat?
> Aprendemos mucho en clase. = We learn a lot in class.

!tip: In Spain {comer} also means **to have lunch** — the main meal of the day: {¿A qué hora coméis?}
!ar: Pork is everywhere in Spain ({el cerdo}, {el jamón}). If you don't eat it, just say {No como cerdo}, or {No bebo alcohol} — restaurants are used to it.
!de: {creer} = glauben, {deber} = sollen / müssen: {Debo estudiar} = Ich muss lernen.
`,words:`
comer = to eat; to have lunch
beber = to drink
leer = to read
aprender = to learn
comprender = to understand
vender = to sell
correr = to run
deber = must, should
el periódico = newspaper
la carne = meat
el agua = water // feminine, but takes "el"
el cerdo = pig; pork
`,phrases:`
¿Comes carne? = Do you eat meat?
No como cerdo. = I don't eat pork.
Bebemos agua con la comida. = We drink water with lunch.
Leo un libro en español. = I'm reading a book in Spanish.
Debes descansar. = You should rest.
¿Aprendéis mucho en clase? = Do you learn a lot in class?
`,drills:`
Yo no ___ carne. (comer) => como | come | comes | comemos # I don't eat meat.
¿Tú ___ café? (beber) => bebes | bebe | bebo | bebéis # Do you drink coffee?
Mi padre ___ el periódico. (leer) => lee | lees | leo | leen # My father reads the newspaper.
Nosotros ___ español. (aprender) => aprendemos | aprendéis | aprenden | aprendo # We are learning Spanish.
Ellos ___ fruta en el mercado. (vender) => venden | vende | vendemos | vendéis # They sell fruit at the market.
Vosotros ___ mucho. (correr) => corréis | corremos | corren | corres # You (all) run a lot.
`},{t:`Present tense: -ir verbs`,k:`grammar`,goal:`Conjugate regular -ir verbs and compare all three groups`,body:`
## Regular -ir verbs
| | vivir (to live) | escribir (to write) |
|---|---|---|
| {yo} | {viv[o]} | {escrib[o]} |
| {tú} | {viv[es]} | {escrib[es]} |
| {él / ella / usted} | {viv[e]} | {escrib[e]} |
| {nosotros} | {viv[imos]} | {escrib[imos]} |
| {vosotros} | {viv[ís]} | {escrib[ís]} |
| {ellos / ellas / ustedes} | {viv[en]} | {escrib[en]} |

-ir verbs are just like -er verbs, except **nosotros** (-imos) and **vosotros** (-ís).

Common -ir verbs: {vivir} (live), {escribir} (write), {abrir} (open), {recibir} (receive), {subir} (go up), {decidir} (decide), {compartir} (share), {asistir} (attend).

## All three groups at a glance
| | -ar | -er | -ir |
|---|---|---|---|
| {yo} | -o | -o | -o |
| {tú} | -as | -es | -es |
| {él} | -a | -e | -e |
| {nosotros} | -amos | -emos | -imos |
| {vosotros} | -áis | -éis | -ís |
| {ellos} | -an | -en | -en |

!warn: {asistir} = to attend (a class, a meeting) — not "to assist" ({ayudar}).

> Vivo en un piso en el centro. = I live in a flat in the centre.
> ¿Escribes muchos correos? = Do you write a lot of emails?
> Abrimos a las diez. = We open at ten.
`,words:`
vivir = to live
escribir = to write
abrir = to open
recibir = to receive
subir = to go up; to upload
decidir = to decide
compartir = to share
asistir = to attend
el correo = email; post
la carta = letter
el centro = centre
la ventana = window
`,phrases:`
Vivo en un piso en el centro. = I live in a flat in the centre.
¿Dónde vivís? = Where do you (all) live?
Escribo muchos correos en el trabajo. = I write a lot of emails at work.
La tienda abre a las diez. = The shop opens at ten.
Compartimos piso. = We share a flat.
Recibo una carta de mi abuela. = I'm getting a letter from my grandmother.
`,drills:`
Nosotros ___ en Madrid. (vivir) => vivimos | vivemos | vivís | viven # We live in Madrid.
¿Vosotros ___ en un piso? (vivir) => vivís | vivéis | vivimos | viven # Do you (all) live in a flat?
Ella ___ una carta. (escribir) => escribe | escribes | escribo | escriben # She writes a letter.
El banco ___ a las ocho y media. (abrir) => abre | abren | abro | abrimos # The bank opens at half past eight.
Yo ___ muchos correos. (recibir) => recibo | recibe | recibes | recibimos # I receive a lot of emails.
Mis amigos ___ piso. (compartir) => comparten | comparte | compartimos | compartís # My friends share a flat.
`},{t:`How often? Months & seasons`,k:`vocab`,goal:`Say how often you do things and talk about months, seasons and dates`,body:`
## How often?
| | |
|---|---|
| {siempre} | always |
| {normalmente} | usually |
| {a menudo} | often |
| {a veces} | sometimes |
| {casi nunca} | hardly ever |
| {nunca} | never |
| {todos los días} | every day |
| {una vez a la semana} | once a week |
| {dos veces al mes} | twice a month |

!tip: {nunca} goes before the verb ({Nunca bebo café}) or after it together with {no} ({No bebo café nunca}). Spanish loves double negatives!

## Months & seasons
{enero}, {febrero}, {marzo}, {abril}, {mayo}, {junio}, {julio}, {agosto}, {septiembre}, {octubre}, {noviembre}, {diciembre} — lowercase, like the days.

| Season | |
|---|---|
| {la primavera} | spring |
| {el verano} | summer |
| {el otoño} | autumn |
| {el invierno} | winter |

> Mi cumpleaños es en marzo. = My birthday is in March.
> Hoy es el cinco de octubre. = Today is the fifth of October.
> En agosto mucha gente está de vacaciones. = In August lots of people are on holiday.

!es: Dates go day + **de** + month: {el 12 de octubre}. In Spain August is the big holiday month — many offices and family shops close.
`,words:`
siempre = always
normalmente = usually
a menudo = often
a veces = sometimes
nunca = never
todos los días = every day
el mes = month
enero = January
mayo = May
agosto = August
diciembre = December
la primavera = spring
el verano = summer
el otoño = autumn
el invierno = winter
`,phrases:`
Siempre desayuno en casa. = I always have breakfast at home.
A veces como en un restaurante. = Sometimes I eat in a restaurant.
Nunca bebo café por la noche. = I never drink coffee at night.
Estudio español dos veces a la semana. = I study Spanish twice a week.
Mi cumpleaños es el doce de mayo. = My birthday is on the twelfth of May.
En invierno hace frío. = It's cold in winter.
`,drills:`
Después de marzo viene ___. => abril | mayo | febrero | junio # After March comes April.
En ___ hace mucho calor. (summer) => verano | invierno | otoño | primavera # It's very hot in summer.
Mi cumpleaños es el cinco ___ junio. => de | en | a | del # My birthday is on the fifth of June.
No como carne ___. (never) => nunca | siempre | a veces | a menudo # I never eat meat.
Estudio dos ___ a la semana. => veces | vez | días | horas # I study twice a week.
Diciembre, enero y febrero son los meses de ___. => invierno | verano | primavera | otoño # December, January and February are the winter months.
`}],story:{title:`Un día de Laura`,text:`
Laura trabaja en una oficina en el centro de Madrid. Trabaja de lunes a viernes, de nueve a seis.
= Laura works in an office in the centre of Madrid. She works Monday to Friday, from nine to six.

Por la mañana desayuna un café con leche y una tostada. Lee el periódico en el metro.
= In the morning she has a white coffee and a slice of toast. She reads the newspaper on the metro.

A las dos come con sus compañeros en un restaurante pequeño. Normalmente toman el menú del día.
= At two she has lunch with her colleagues in a small restaurant. They usually have the set menu of the day.

Por la tarde, Laura estudia inglés dos veces a la semana. Los martes y los jueves asiste a una clase en una academia.
= In the afternoon Laura studies English twice a week. On Tuesdays and Thursdays she attends a class at a language school.

Los viernes por la noche cena con sus amigos. Hablan, escuchan música y a veces bailan hasta las dos de la mañana.
= On Friday nights she has dinner with her friends. They talk, listen to music and sometimes dance until two in the morning.

Los sábados no trabaja. Limpia su piso, compra fruta en el mercado y escribe correos a su familia de Sevilla.
= On Saturdays she doesn't work. She cleans her flat, buys fruit at the market and writes emails to her family in Seville.

¿Y los domingos? Los domingos Laura descansa. ¡Nunca trabaja los domingos!
= And on Sundays? On Sundays Laura rests. She never works on Sundays!
`,questions:`
¿Cuándo trabaja Laura? => De lunes a viernes | Los fines de semana | Los domingos # When does Laura work?
¿Dónde lee el periódico? => En el metro | En la oficina | En casa # Where does she read the newspaper?
¿Qué estudia Laura? => Inglés | Francés | Alemán # What does Laura study?
¿Qué hace los domingos? => Descansa | Trabaja | Estudia # What does she do on Sundays?
`}},vs=s({default:()=>ys}),ys={n:5,title:`Places & estar`,es:`¿Dónde está?`,cando:[`I can say where people and things are with estar`,`I can say how I feel: tired, happy, ill…`,`I can choose between ser and estar in simple sentences`,`I can say what there is in a place with hay`,`I can describe my home and ask for directions`],lessons:[{t:`Estar: where is it?`,k:`grammar`,goal:`Use estar to say where people and things are`,body:`
## The verb estar
| | estar |
|---|---|
| {yo} | {estoy} |
| {tú} | {estás} |
| {él / ella / usted} | {está} |
| {nosotros} | {estamos} |
| {vosotros} | {estáis} |
| {ellos / ellas / ustedes} | {están} |

Use **estar** for **location** — where someone or something is:
> ¿Dónde está el baño? = Where is the toilet?
> Estoy en casa. = I'm at home.
> Madrid está en el centro de España. = Madrid is in the centre of Spain.
> Mis padres están en Marruecos. = My parents are in Morocco.

!tip: Even permanent locations use estar: {Sevilla está en Andalucía.} **Ser** says *what* something is; **estar** says *where* it is.
!warn: Watch the accent: {esta} (this) ≠ {está} (is). {¿Dónde está esta calle?} uses both!
!de: Location is "sein" in German ("Ich bin zu Hause") — in Spanish it's always {estar}, never {ser}: {Estoy en casa}.
!ar: Arabic often needs no verb (أنا في البيت). Spanish always needs {estar}: {Estoy en casa}.
`,words:`
estar = to be (location, condition)
estoy = I am
¿dónde está? = where is it?
el baño = bathroom, toilet
la calle = street
el barrio = neighbourhood
la plaza = square
el pueblo = village, small town
allí = there
cerca = near, nearby
lejos = far (away)
en casa = at home
`,phrases:`
¿Dónde está la estación? = Where is the station?
Estoy en casa. = I'm at home.
Sevilla está en el sur de España. = Seville is in the south of Spain.
¿Estáis en Madrid? = Are you (all) in Madrid?
El baño está allí. = The toilet is over there.
Mi casa está cerca del centro. = My house is near the centre.
`,drills:`
¿Dónde ___ el baño? => está | es | esta | están # Where is the toilet?
Yo ___ en la oficina. => estoy | soy | está | estás # I'm at the office.
Mis padres ___ en Egipto. => están | son | estamos | está # My parents are in Egypt.
Toledo ___ cerca de Madrid. => está | es | esta | hay # Toledo is near Madrid.
¿Vosotros ___ en casa? => estáis | estamos | están | sois # Are you (all) at home?
Madrid ___ la capital de España. => es | está | esta | están # Madrid is the capital of Spain.
`},{t:`Feelings · ser or estar?`,k:`grammar`,goal:`Say how you feel and choose between ser and estar`,body:`
## Estar for states and feelings
Use **estar** for how someone or something **is right now**:
> Estoy cansado. = I'm tired.
> ¿Estás bien? = Are you OK?
> María está enferma. = María is ill.
> Estamos muy contentos. = We're very happy.
> El café está frío. = The coffee is cold.

| Feeling | |
|---|---|
| {cansado / cansada} | tired |
| {contento / contenta} | happy, pleased |
| {triste} | sad |
| {enfermo / enferma} | ill |
| {nervioso / nerviosa} | nervous |
| {enfadado / enfadada} | angry (Spain) |
| {ocupado / ocupada} | busy |
| {aburrido / aburrida} | bored |

## Ser or estar?
| ser — what something IS | estar — how / where it IS |
|---|---|
| identity, origin, job: {Soy médico.} | location: {Estoy en Madrid.} |
| character, description: {Es simpática.} | feelings, states: {Está contenta.} |
| time and dates: {Son las tres.} | results of a change: {La puerta está abierta.} |

!tip: Some adjectives change meaning: {Es aburrido} = he's boring, {Está aburrido} = he's bored. {Es listo} = he's clever, {Está listo} = he's ready.
!de: German has one "sein"; Spanish splits it. Think: ser ≈ das Wesen (what it is), estar ≈ der Zustand (how or where it is now).
!ar: A handy rule: if it's a حال — a state like tired, happy, ill — Spanish uses {estar}.
`,words:`
cansado, cansada = tired
contento, contenta = happy, pleased
triste = sad
enfermo, enferma = ill
nervioso, nerviosa = nervous
enfadado, enfadada = angry (Spain)
ocupado, ocupada = busy
aburrido, aburrida = bored; boring (with ser)
listo, lista = ready; clever (with ser)
frío, fría = cold
abierto, abierta = open
¿qué te pasa? = what's wrong?
`,phrases:`
¿Cómo estás? — Estoy un poco cansado. = How are you? — I'm a bit tired.
¿Qué te pasa? ¿Estás triste? = What's wrong? Are you sad?
Mi hermana está enferma hoy. = My sister is ill today.
Estamos muy contentos con el piso. = We're very happy with the flat.
¿Estás listo? — ¡Sí, vamos! = Are you ready? — Yes, let's go!
La sopa está fría. = The soup is cold.
`,drills:`
Hoy ___ muy cansada. => estoy | soy | es | está # Today I'm very tired.
Mi novio ___ ingeniero. => es | está | están | son # My boyfriend is an engineer.
Los niños ___ aburridos. => están | son | está | es # The children are bored.
¿Por qué ___ triste, Ana? => estás | eres | está | es # Why are you sad, Ana?
Mi profesora ___ muy simpática. => es | está | son | esta # My teacher is very nice.
La puerta ___ abierta. => está | es | hay | son # The door is open.
`},{t:`Hay — there is, there are`,k:`grammar`,goal:`Say what there is in a place and tell hay and está apart`,body:`
## Hay
**Hay** means "there is" *and* "there are" — one form for everything:
> Hay un banco en la plaza. = There's a bank in the square.
> Hay muchos bares en mi calle. = There are lots of bars in my street.
> ¿Hay una farmacia por aquí? = Is there a chemist's around here?
> No hay leche. = There's no milk.

## Hay or está?
| hay | está / están |
|---|---|
| says that something exists | says where a specific thing is |
| {Hay un supermercado cerca.} | {El supermercado está cerca.} |
| + {un, una, unos, muchos, dos…} or nothing | + {el, la, los, mi, tu…} |

!tip: Never put {el} or {la} after hay: {Hay un hospital}, not "hay el hospital".
!de: {hay} = "es gibt" — one invariable form, just like German.
!ar: {hay} ≈ يوجد / هناك: {Hay un banco} ≈ يوجد بنك.

## Places in town
{el supermercado}, {la farmacia}, {el banco}, {el hospital}, {la estación}, {el restaurante}, {el bar}, {la tienda}, {el museo}, {la mezquita} (mosque), {la iglesia} (church), {el parque}.
`,words:`
hay = there is, there are
el supermercado = supermarket
la farmacia = chemist's, pharmacy
la estación = station
el restaurante = restaurant
el bar = bar, café
la tienda = shop
el museo = museum
la iglesia = church
la mezquita = mosque
el parque = park
por aquí = around here
`,phrases:`
¿Hay un supermercado por aquí? = Is there a supermarket around here?
Hay dos farmacias en mi calle. = There are two chemist's in my street.
En mi barrio hay muchos parques. = There are lots of parks in my neighbourhood.
El museo está en la plaza. = The museum is in the square.
No hay pan. = There's no bread.
¿Qué hay en tu ciudad? = What is there in your city?
`,drills:`
___ un banco en la plaza. => Hay | Está | Es | Son # There's a bank in the square.
El banco ___ en la plaza. => está | hay | es | están # The bank is in the square.
¿___ una farmacia por aquí? => Hay | Está | Es | Tiene # Is there a chemist's around here?
En Madrid ___ muchos museos. => hay | están | son | tiene # There are lots of museums in Madrid.
¿Dónde ___ los baños? => están | hay | son | está # Where are the toilets?
No ___ leche en la nevera. => hay | está | es | son # There's no milk in the fridge.
`},{t:`Next to, behind, opposite…`,k:`vocab`,goal:`Say exactly where things are with prepositions of place`,body:`
## Prepositions of place
| | |
|---|---|
| {al lado de} | next to |
| {cerca de} | near |
| {lejos de} | far from |
| {delante de} | in front of |
| {detrás de} | behind |
| {enfrente de} | opposite |
| {encima de} | on top of |
| {debajo de} | under |
| {entre … y …} | between … and … |
| {a la derecha de} | to the right of |
| {a la izquierda de} | to the left of |
| {dentro de} | inside |

!tip: **de + el = del**: {al lado del banco}, {cerca del parque} — but {cerca de la estación}.

> La farmacia está al lado del banco. = The chemist's is next to the bank.
> El gato está debajo de la mesa. = The cat is under the table.
> Mi casa está entre el parque y el colegio. = My house is between the park and the school.

!de: No cases to worry about: {delante de la casa} = vor dem Haus — always {de}.
!ar: {encima de} ≈ فوق، {debajo de} ≈ تحت، {al lado de} ≈ بجانب، {delante de} ≈ أمام، {detrás de} ≈ وراء.
`,words:`
al lado de = next to
cerca de = near
lejos de = far from
delante de = in front of
detrás de = behind
enfrente de = opposite
encima de = on top of
debajo de = under
entre = between, among
a la derecha = on the right
a la izquierda = on the left
el colegio = school
el gato = cat
`,phrases:`
La farmacia está al lado del banco. = The chemist's is next to the bank.
El gato está debajo de la mesa. = The cat is under the table.
Mi casa está enfrente del parque. = My house is opposite the park.
Las llaves están encima de la mesa. = The keys are on the table.
El baño está a la derecha. = The toilet is on the right.
El colegio está lejos de mi casa. = The school is far from my house.
`,drills:`
El gato está ___ la mesa. (under) => debajo de | encima de | delante de | al lado de # The cat is under the table.
La farmacia está al lado ___ banco. => del | de el | de | al # The chemist's is next to the bank.
El parque está ___ la estación. (opposite) => enfrente de | detrás de | dentro de | entre # The park is opposite the station.
Mi casa está ___ el bar y la farmacia. => entre | al lado | cerca | debajo # My house is between the bar and the chemist's.
El baño está a la ___. (left) => izquierda | derecha | lado | delante # The toilet is on the left.
`},{t:`My home — mi casa`,k:`vocab`,goal:`Describe your home: rooms and furniture`,body:`
## Rooms
{el salón} (living room), {la cocina} (kitchen), {el dormitorio} (bedroom), {el baño} (bathroom), {el comedor} (dining room), {el pasillo} (hallway), {la terraza} (terrace, balcony), {el jardín} (garden).

## Furniture & things
{la cama} (bed), {el sofá} (sofa), {la mesa} (table), {la silla} (chair), {el armario} (wardrobe, cupboard), {la nevera} (fridge), {la lavadora} (washing machine), {la estantería} (shelves), {la lámpara} (lamp).

> Vivo en un piso de dos dormitorios. = I live in a two-bedroom flat.
> El piso tiene un salón grande y una cocina pequeña. = The flat has a big living room and a small kitchen.
> En mi dormitorio hay una cama, un armario y una mesa. = In my bedroom there's a bed, a wardrobe and a desk.

!es: Most city dwellers in Spain live in **pisos** (flats) in apartment blocks, often with a {terraza} or {balcón}. Floors are counted {primero}, {segundo}… and the ground floor is {la planta baja}.
!tip: Asking about a flat: {¿Cuántos dormitorios tiene?} {¿Tiene terraza?} {¿Está amueblado?} (Is it furnished?)
`,words:`
el salón = living room
la cocina = kitchen
el dormitorio = bedroom
el comedor = dining room
la terraza = terrace, balcony
el jardín = garden
la cama = bed
el sofá = sofa
la silla = chair
el armario = wardrobe, cupboard
la nevera = fridge
la lavadora = washing machine
la planta baja = ground floor
`,phrases:`
Vivo en un piso de dos dormitorios. = I live in a two-bedroom flat.
La cocina es pequeña pero muy bonita. = The kitchen is small but very nice.
En el salón hay un sofá y una televisión. = In the living room there's a sofa and a TV.
¿El piso tiene terraza? = Does the flat have a terrace?
Mi dormitorio está al lado del baño. = My bedroom is next to the bathroom.
Vivimos en la planta baja. = We live on the ground floor.
`,drills:`
Duermo en el ___. => dormitorio | salón | comedor | jardín # I sleep in the bedroom.
Cocinamos en la ___. => cocina | cama | terraza | silla # We cook in the kitchen.
La leche está en la ___. => nevera | lavadora | cama | silla # The milk is in the fridge.
En el salón ___ un sofá muy grande. => hay | está | es | son # There's a very big sofa in the living room.
La ropa está en el ___. => armario | sofá | jardín | comedor # The clothes are in the wardrobe.
`},{t:`Asking the way`,k:`talk`,goal:`Ask for directions and understand the answer`,body:`
## Asking for directions
> Perdone, ¿dónde está la estación? = Excuse me, where's the station? (formal)
> Perdona, ¿hay un banco por aquí? = Excuse me, is there a bank around here? (informal)
> ¿Está lejos? = Is it far?
> ¿Cómo llego al museo? = How do I get to the museum?

## Understanding the answer
> Sigue todo recto. = Go straight on.
> Gira a la derecha. = Turn right.
> Gira a la izquierda. = Turn left.
> Toma la segunda calle a la izquierda. = Take the second street on the left.
> Cruza la plaza. = Cross the square.
> Está a cinco minutos andando. = It's five minutes on foot.
> Está al final de la calle. = It's at the end of the street.

!tip: Directions use the **command** form. {Sigue}, {gira}, {toma}, {cruza} talk to {tú}; to {usted} people say {siga}, {gire}, {tome}, {cruce}. You'll learn commands properly in week 15 — for now just recognise them.
!es: Spaniards love landmarks: {Pasa el bar y después del semáforo, a la izquierda.} (Go past the bar, and after the traffic lights turn left.)
!ar: {todo recto} ≈ على طول، {a la derecha} ≈ على اليمين، {a la izquierda} ≈ على اليسار.
`,words:`
perdone = excuse me (formal)
perdona = excuse me (informal)
todo recto = straight on
girar = to turn
seguir = to continue, to follow
cruzar = to cross
la esquina = corner
el semáforo = traffic lights
primero, primera = first
segundo, segunda = second
el minuto = minute
andando = on foot
`,phrases:`
Perdone, ¿dónde está la estación? = Excuse me, where is the station?
¿Está lejos? — No, está a cinco minutos. = Is it far? — No, it's five minutes away.
Sigue todo recto y gira a la derecha. = Go straight on and turn right.
Toma la primera calle a la izquierda. = Take the first street on the left.
Cruza la plaza y está en la esquina. = Cross the square and it's on the corner.
Muchas gracias. — De nada. = Thank you very much. — You're welcome.
`,drills:`
Perdone, ¿___ está el museo? => dónde | qué | cómo | cuándo # Excuse me, where is the museum?
Sigue todo ___. => recto | derecha | izquierda | cerca # Go straight on.
Gira a la ___. (right) => derecha | izquierda | esquina | recta # Turn right.
Toma la ___ calle a la izquierda. (second) => segunda | segundo | dos | doble # Take the second street on the left.
Está ___ cinco minutos andando. => a | en | de | por # It's five minutes on foot.
`}],story:{title:`¿Dónde está la farmacia?`,text:`
Anna está en Madrid desde el lunes. Vive en un piso pequeño en el barrio de Lavapiés.
= Anna has been in Madrid since Monday. She lives in a small flat in the Lavapiés neighbourhood.

Hoy Anna no está bien: está cansada y un poco enferma. Necesita una farmacia.
= Today Anna isn't well: she's tired and a bit ill. She needs a chemist's.

En la calle, Anna habla con una señora mayor. —Perdone, ¿hay una farmacia por aquí?
= In the street, Anna talks to an elderly lady. "Excuse me, is there a chemist's around here?"

—Sí, hay una muy cerca. Sigue todo recto, toma la segunda calle a la derecha y la farmacia está enfrente del parque.
= "Yes, there's one very close. Go straight on, take the second street on the right, and the chemist's is opposite the park."

—¿Está lejos? —No, no. Está a cinco minutos andando.
= "Is it far?" "No, no. It's five minutes on foot."

Anna encuentra la farmacia sin problemas. Al lado hay un supermercado, y Anna compra fruta, leche y pan.
= Anna finds the chemist's without any trouble. Next door there's a supermarket, and Anna buys fruit, milk and bread.

Por la tarde está en casa, en el sofá del salón. Ya está mucho mejor y está contenta: ¡su barrio es perfecto!
= In the afternoon she's at home, on the living-room sofa. She's already much better and she's happy: her neighbourhood is perfect!
`,questions:`
¿Dónde vive Anna? => En Lavapiés | En Sevilla | En Hamburgo # Where does Anna live?
¿Cómo está Anna hoy? => Cansada y un poco enferma | Muy contenta | Aburrida # How is Anna today?
¿Dónde está la farmacia? => Enfrente del parque | Al lado de la estación | Lejos del centro # Where is the chemist's?
¿Qué hay al lado de la farmacia? => Un supermercado | Un museo | Un bar # What is next to the chemist's?
`}},bs=s({default:()=>xs}),xs={n:6,title:`Food & likes`,es:`¡Me encanta!`,cando:[`I can name common foods and drinks`,`I can say what I like, love and dislike with gustar and encantar`,`I can order in a café or bar and ask for the bill`,`I can use querer and preferir`,`I can count to a million and talk about prices`],lessons:[{t:`Food — la comida`,k:`vocab`,goal:`Name basic foods and some Spanish classics`,body:`
## Basic food
| | |
|---|---|
| {el pan} | bread |
| {el arroz} | rice |
| {la carne} | meat |
| {el pollo} | chicken |
| {el pescado} | fish (food) |
| {los huevos} | eggs |
| {el queso} | cheese |
| {la fruta} | fruit |
| {la verdura} | vegetables |
| {la ensalada} | salad |
| {las patatas} | potatoes (Spain) |
| {el tomate} | tomato |

!tip: {el pescado} is fish on your plate; a live fish is {el pez}.

## Spanish classics
{la tortilla de patatas} (potato omelette), {la paella} (rice dish from Valencia), {el gazpacho} (cold tomato soup), {las tapas} (small dishes shared in bars), {el jamón} (cured ham), {los churros} (fried dough, eaten with hot chocolate).

!ar: Al-Andalus left many Arabic food words: {el arroz} (الرز), {el azúcar} (السكر), {el aceite} (الزيت), {la naranja} (نارنج), {la berenjena} (باذنجان), {la albóndiga} (البندقة → meatball).
!de: {tomar} works like German "nehmen" for food and drink: {Tomo un café} = Ich nehme einen Kaffee.

> ¿Comes pescado? = Do you eat fish?
> De postre, fruta. = For dessert, fruit.
`,words:`
la comida = food; lunch
el pan = bread
el arroz = rice
el pollo = chicken
el pescado = fish (food)
los huevos = eggs
el queso = cheese
la fruta = fruit
la verdura = vegetables
la ensalada = salad
las patatas = potatoes (Spain)
el tomate = tomato
la tortilla = Spanish omelette
el jamón = cured ham
`,phrases:`
¿Comes pescado? = Do you eat fish?
Para comer hay pollo con patatas. = For lunch there's chicken and potatoes.
Una tortilla de patatas, por favor. = A potato omelette, please.
De postre, fruta. = For dessert, fruit.
Compro pan todos los días. = I buy bread every day.
No como jamón, gracias. = I don't eat ham, thank you.
`,drills:`
Para desayunar tomo café con ___. => pan | pescado | arroz | ensalada # For breakfast I have coffee with bread.
La tortilla española lleva huevos y ___. => patatas | pollo | queso | pescado # Spanish omelette has eggs and potatoes.
El ___ es muy típico en Valencia: la paella. => arroz | pan | queso | jamón # Rice is very typical in Valencia: paella.
No como carne, pero sí como ___. (fish) => pescado | pez | pollo | jamón # I don't eat meat, but I do eat fish.
De postre quiero ___. => fruta | ensalada | pollo | arroz # For dessert I want fruit.
`},{t:`Gustar — I like it`,k:`grammar`,goal:`Say what you like, love and dislike`,body:`
## How gustar works
**Gustar** really means "to please". The thing you like is the subject:
> Me gusta el café. = I like coffee. (literally: coffee pleases me)
> Me gustan las patatas. = I like potatoes. (potatoes please me)

- One thing, or a verb → **gusta**: {Me gusta el té.} {Me gusta bailar.}
- Several things → **gustan**: {Me gustan los perros.}

| | |
|---|---|
| {me gusta} | I like |
| {te gusta} | you like |
| {le gusta} | he / she likes, you (usted) like |
| {nos gusta} | we like |
| {os gusta} | you (all) like |
| {les gusta} | they / you (ustedes) like |

!de: Exactly like German "gefallen": "Mir gefällt der Kaffee" = {Me gusta el café}; "Mir gefallen die Hunde" = {Me gustan los perros}.
!ar: Just like يعجبني: the liked thing is the subject — يعجبني الفيلم = {Me gusta la película}.

## Encantar & disliking
> Me encanta la música. = I love music.
> No me gusta nada el café. = I don't like coffee at all.
> ¿Te gusta el fútbol? = Do you like football?

!warn: {encantar} is already strong — don't add {mucho}. Say {Me encanta}, but {Me gusta mucho}.
`,words:`
gustar = to like (to please)
me gusta = I like (one thing)
me gustan = I like (several things)
te gusta = you like
encantar = to love (things)
me encanta = I love
no me gusta nada = I don't like it at all
el té = tea
el fútbol = football
el chocolate = chocolate
el deporte = sport
la película = film
`,phrases:`
Me gusta mucho el chocolate. = I like chocolate a lot.
¿Te gustan los perros? = Do you like dogs?
Me encanta bailar. = I love dancing.
No me gusta nada el fútbol. = I don't like football at all.
A mi madre le gusta el té. = My mother likes tea.
Nos encantan las películas españolas. = We love Spanish films.
`,drills:`
Me ___ el café. => gusta | gustan | gusto | gustas # I like coffee.
Me ___ los perros. => gustan | gusta | gusto | gustamos # I like dogs.
¿Te ___ bailar? => gusta | gustan | gustas | gusto # Do you like dancing?
A Pedro ___ gusta el fútbol. => le | les | me | te # Pedro likes football.
___ encanta la música. (nosotros) => Nos | Os | Les | Me # We love music.
No me gusta ___ el pescado. (at all) => nada | algo | ningún | nadie # I don't like fish at all.
`},{t:`At the café — ordering`,k:`talk`,goal:`Order drinks and food in a bar and pay the bill`,body:`
## Ordering
> ¿Qué le pongo? = What can I get you? (waiter, Spain)
> Un café con leche, por favor. = A white coffee, please.
> Para mí, un zumo de naranja. = For me, an orange juice.
> ¿Me pone una caña? = Could I have a small beer? (Spain)
> ¿Tienen tortilla? = Do you have Spanish omelette?
> ¿Me trae la cuenta, por favor? = Could you bring me the bill, please?
> ¿Cuánto es? = How much is it?

!tip: {¿Me pone…?} (literally "will you put me…?") is the most typical way to order in Spain — friendly and polite.
!es: In Spanish bars you usually pay at the end. Coffee culture: {un café solo} (espresso), {un cortado} (espresso with a dash of milk), {un café con leche} (half coffee, half milk). Tips are small: round up or leave a few coins.
!ar: Alcohol-free options: {un zumo}, {un refresco} (soft drink), {agua con gas / sin gas}, {una cerveza sin alcohol}.

## Drinks — las bebidas
{el café}, {el té}, {el agua}, {el zumo} (juice), {la leche}, {el refresco} (soft drink), {la cerveza} (beer), {el vino}, {la caña} (small draught beer).
`,words:`
la bebida = drink
el zumo = juice (Spain)
el café con leche = white coffee
el café solo = black coffee, espresso
el refresco = soft drink
la cerveza = beer
la cuenta = bill
¿me pone…? = could I have…? (Spain)
para mí = for me
¿cuánto es? = how much is it?
la tapa = tapa (small dish)
con gas = sparkling
sin gas = still
`,phrases:`
Un café con leche, por favor. = A white coffee, please.
Para mí, un zumo de naranja. = For me, an orange juice.
¿Me pone un agua sin gas? = Could I have a still water?
¿Tienen tapas? = Do you have tapas?
La cuenta, por favor. = The bill, please.
¿Cuánto es? — Son seis euros. = How much is it? — It's six euros.
`,drills:`
Un café ___ leche, por favor. => con | sin | de | y # A white coffee, please.
¿Me ___ un zumo, por favor? => pone | pones | pongo | pon # Could I have a juice, please?
___ mí, una cerveza sin alcohol. => Para | Por | A | De # For me, an alcohol-free beer.
¿Me trae la ___, por favor? => cuenta | carta | cuento | caña # Could you bring me the bill, please?
¿Cuánto ___? — Son cinco euros. => es | está | hay | tiene # How much is it? — It's five euros.
Un agua ___ gas, por favor. (still) => sin | con | de | por # A still water, please.
`},{t:`Querer & preferir (e → ie)`,k:`grammar`,goal:`Say what you want and prefer with stem-changing verbs`,body:`
## Stem-changing verbs: e → ie
Some verbs change their stem vowel when it's stressed. **querer** and **preferir** change **e → ie** — except with nosotros and vosotros:
| | querer (to want) | preferir (to prefer) |
|---|---|---|
| {yo} | {qu[ie]ro} | {pref[ie]ro} |
| {tú} | {qu[ie]res} | {pref[ie]res} |
| {él / ella / usted} | {qu[ie]re} | {pref[ie]re} |
| {nosotros} | {queremos} | {preferimos} |
| {vosotros} | {queréis} | {preferís} |
| {ellos / ellas / ustedes} | {qu[ie]ren} | {pref[ie]ren} |

!tip: Picture a **boot**: the four forms inside the boot (yo, tú, él, ellos) change; nosotros and vosotros stay outside.

## Querer + noun or infinitive
> Quiero un café. = I want a coffee.
> ¿Quieres venir? = Do you want to come?
> Prefiero el té. = I prefer tea.
> ¿Qué prefieres, carne o pescado? = What do you prefer, meat or fish?

!warn: {Te quiero} = I love you (to a person). To order politely, {Quiero…, por favor} is fine for now; in week 17 you'll learn the softer {quería} and {me gustaría}.
!de: {querer} + infinitive works like "wollen": {Quiero aprender español} = Ich will Spanisch lernen.
`,words:`
querer = to want; to love (a person)
quiero = I want
quieres = you want
preferir = to prefer
prefiero = I prefer
o = or
te quiero = I love you
el postre = dessert
la sopa = soup
el helado = ice cream
la naranja = orange
`,phrases:`
Quiero un helado de chocolate. = I want a chocolate ice cream.
¿Quieres ir al cine? = Do you want to go to the cinema?
Prefiero el pescado. = I prefer fish.
¿Qué prefieres, té o café? = What do you prefer, tea or coffee?
Mis hijos quieren pizza. = My children want pizza.
Te quiero mucho. = I love you very much.
`,drills:`
Yo ___ un café. (querer) => quiero | quero | quieres | queremos # I want a coffee.
¿Tú ___ té o café? (preferir) => prefieres | preferes | prefiero | preferís # Do you prefer tea or coffee?
Nosotros ___ aprender español. (querer) => queremos | quieremos | quieren | queréis # We want to learn Spanish.
Mi hermana ___ el pescado. (preferir) => prefiere | prefere | prefieren | preferimos # My sister prefers fish.
Ellos ___ una mesa para cuatro. (querer) => quieren | queren | quiere | queremos # They want a table for four.
¿Vosotros ___ postre? (querer) => queréis | quieréis | quieren | queremos # Do you (all) want dessert?
`},{t:`Big numbers & prices`,k:`vocab`,goal:`Count to a million, say years and ask how much things cost`,body:`
## Hundreds
| | | |
|---|---|---|
| 100 {cien} | 200 {doscientos} | 300 {trescientos} |
| 400 {cuatrocientos} | 500 {quinientos} | 600 {seiscientos} |
| 700 {setecientos} | 800 {ochocientos} | 900 {novecientos} |

- **100** on its own is {cien}; 101–199 use {ciento}: {ciento uno}, {ciento cincuenta}.
- Hundreds agree with feminine nouns: {doscientas personas}.
- Watch the irregular ones: {quinientos} (500), {setecientos} (700), {novecientos} (900).

## Thousands & millions
{mil} (1 000), {dos mil} (2 000), {diez mil} (10 000), {cien mil} (100 000), {un millón} (1 000 000), {dos millones}.
- {mil} never takes "un" and doesn't change: {tres mil euros}.
- Years: 1998 = {mil novecientos noventa y ocho}, 2026 = {dos mil veintiséis}.

## Prices
> ¿Cuánto cuesta? = How much does it cost?
> ¿Cuánto cuestan? = How much do they cost?
> Cuesta tres euros con cincuenta. = It costs €3.50.
> Son doce euros. = That's twelve euros.

!es: Spain writes decimals with a comma and thousands with a dot: {3,50 €}, {1.500 €}. Prices are read {tres euros con cincuenta} or just {tres cincuenta}.
!de: Same as German: comma for decimals ({3,50}), dot for thousands ({1.500}).
!ar: Like ألف and مليون: {mil} = 1000 (never "un mil"), {un millón} = مليون.
`,words:`
doscientos = two hundred
trescientos = three hundred
quinientos = five hundred
setecientos = seven hundred
novecientos = nine hundred
mil = one thousand
un millón = one million
el euro = euro
el precio = price
¿cuánto cuesta? = how much does it cost?
barato, barata = cheap
`,phrases:`
¿Cuánto cuesta este libro? = How much does this book cost?
Cuesta quince euros. = It costs fifteen euros.
Las gafas cuestan doscientos euros. = The glasses cost two hundred euros.
¡Qué caro! = How expensive!
Es muy barato. = It's very cheap.
El piso cuesta doscientos mil euros. = The flat costs two hundred thousand euros.
`,drills:`
500 = ___ => quinientos | cincocientos | quinientas | cinco cientos # five hundred
100 euros = ___ euros => cien | ciento | cientos | un cien # one hundred euros
700 = ___ => setecientos | sietecientos | setentos | siete cientos # seven hundred
¿Cuánto ___ los zapatos? => cuestan | cuesta | costan | cuestas # How much do the shoes cost?
2.000 = dos ___ => mil | miles | millones | cientos # two thousand
1.000.000 = un ___ => millón | mil | millones | millar # one million
`},{t:`Me too! También & tampoco`,k:`talk`,goal:`Say who likes what and agree or disagree`,body:`
## Making it clear who likes it
Add **a + person** to say who likes something:
| | |
|---|---|
| {A mí me gusta} | I like |
| {A ti te gusta} | you like |
| {A él / A ella / A usted le gusta} | he / she / you like(s) |
| {A nosotros nos gusta} | we like |
| {A vosotros os gusta} | you all like |
| {A ellos / A ellas / A ustedes les gusta} | they / you all like |

> A mi hermano le gusta el fútbol, pero a mí no. = My brother likes football, but I don't.
> ¿A vosotros os gusta la paella? = Do you (all) like paella?

## Agreeing and disagreeing
| They say… | You agree | You disagree |
|---|---|---|
| {Me gusta el té.} | {A mí también.} | {A mí no.} |
| {No me gusta el té.} | {A mí tampoco.} | {A mí sí.} |

!tip: With normal verbs it's {yo también} / {yo tampoco}: {Hablo inglés.} — {Yo también.}
!de: {también} = auch, {tampoco} = auch nicht: {A mí tampoco} = Mir auch nicht.
!ar: {también} ≈ أيضًا، {tampoco} ≈ ولا أنا: {A mí tampoco} ≈ ولا أنا كمان.

## Verbs like gustar
{encantar} (to love), {interesar} (to interest), {doler} (to hurt): {Me interesa la historia.} (I'm interested in history.)
`,words:`
también = also, too
tampoco = neither, not either
a mí también = me too
a mí tampoco = me neither
a mí sí = I do
a mí no = I don't
interesar = to interest
la historia = history; story
el arte = art
el cine = cinema
la playa = beach
la montaña = mountain(s)
`,phrases:`
Me encanta la playa. — ¡A mí también! = I love the beach. — Me too!
No me gusta el frío. — A mí tampoco. = I don't like the cold. — Me neither.
A mi novia le interesa mucho el arte. = My girlfriend is very interested in art.
¿A vosotros os gusta la montaña? = Do you (all) like the mountains?
A ellos les gusta el cine, pero a mí no. = They like the cinema, but I don't.
Hablo un poco de francés. — Yo también. = I speak a little French. — Me too.
`,drills:`
Me gusta el cine. — A mí ___. (me too) => también | tampoco | sí | no # I like the cinema. — Me too.
No me gusta el café. — A mí ___. (me neither) => tampoco | también | sí | nada # I don't like coffee. — Me neither.
A mis padres ___ gusta viajar. => les | le | los | se # My parents like travelling.
¿A ti ___ gusta el arte? => te | ti | tu | le # Do you like art?
Me gusta la playa. — A mí ___. Prefiero la montaña. => no | sí | también | tampoco # I like the beach. — I don't. I prefer the mountains.
A nosotros ___ interesa la historia. => nos | os | les | me # We're interested in history.
`}],story:{title:`En el bar de tapas`,text:`
Es viernes por la tarde. Omar y Anna están en un bar de tapas en el centro.
= It's Friday evening. Omar and Anna are in a tapas bar in the centre.

El camarero llega a la mesa: —¡Hola, chicos! ¿Qué os pongo?
= The waiter comes to the table: "Hi, guys! What can I get you?"

—Para mí, una caña, por favor —dice Anna—. Me encanta la cerveza española.
= "For me, a small beer, please," says Anna. "I love Spanish beer."

—Yo prefiero un zumo de naranja. No bebo alcohol —dice Omar—. ¿Tienen tortilla de patatas?
= "I'd prefer an orange juice. I don't drink alcohol," says Omar. "Do you have potato omelette?"

—Sí, claro. Y también tenemos croquetas, patatas bravas y calamares.
= "Yes, of course. And we also have croquettes, patatas bravas and squid."

—¡Me encantan las patatas bravas! —dice Anna. —A mí también. Una ración de bravas y una tortilla, por favor.
= "I love patatas bravas!" says Anna. "Me too. A portion of bravas and a tortilla, please."

Después, Omar pide la cuenta. —¿Cuánto es? —Son catorce euros con cincuenta. —Aquí tiene. ¡Gracias!
= Afterwards, Omar asks for the bill. "How much is it?" "It's fourteen euros fifty." "Here you are. Thanks!"
`,questions:`
¿Dónde están Omar y Anna? => En un bar de tapas | En casa | En un supermercado # Where are Omar and Anna?
¿Qué bebe Omar? => Un zumo de naranja | Una caña | Un vino # What does Omar drink?
¿Qué le encanta a Anna? => Las patatas bravas | Los calamares | El zumo # What does Anna love?
¿Cuánto es la cuenta? => 14,50 € | 4,50 € | 40,50 € # How much is the bill?
`}},Ss=s({default:()=>Cs}),Cs={n:7,title:`My day — stem changes & routine`,es:`Un día normal`,cando:[`I can use o→ue, e→ie and e→i stem-changing verbs`,`I can describe my daily routine with reflexive verbs`,`I can put events in order with primero, después, luego…`,`I can use the irregular yo forms: hago, pongo, salgo, sé…`],lessons:[{t:`o → ue: poder, dormir, volver`,k:`grammar`,goal:`Conjugate o→ue verbs and say what you can and can’t do`,body:`
## o → ue
| | poder (can) | dormir (to sleep) |
|---|---|---|
| {yo} | {p[ue]do} | {d[ue]rmo} |
| {tú} | {p[ue]des} | {d[ue]rmes} |
| {él / ella / usted} | {p[ue]de} | {d[ue]rme} |
| {nosotros} | {podemos} | {dormimos} |
| {vosotros} | {podéis} | {dormís} |
| {ellos / ellas / ustedes} | {p[ue]den} | {d[ue]rmen} |

The same **boot** as {querer}: only nosotros and vosotros keep the **o**.

More o → ue verbs: {volver} (come back), {costar} (cost), {encontrar} (find), {recordar} (remember), {contar} (count, tell), {almorzar} (have lunch), {llover} (rain), {soñar} (dream).

## poder + infinitive
> ¿Puedes ayudarme? = Can you help me?
> No puedo dormir. = I can't sleep.
> ¿Se puede pagar con tarjeta? = Can you pay by card?

!de: {poder} + infinitive = können: {Puedo nadar} = Ich kann schwimmen (physically able).
!tip: {jugar} is the only **u → ue** verb: {juego}, {juegas}, {juega}, {jugamos}, {jugáis}, {juegan}. More on day 3!
`,words:`
poder = can, to be able to
puedo = I can
dormir = to sleep
volver = to come back, to return
costar = to cost
encontrar = to find
recordar = to remember
contar = to count; to tell
almorzar = to have lunch; to have a mid-morning snack (Spain)
llover = to rain
la tarjeta = card
temprano = early
`,phrases:`
¿Puedes ayudarme? = Can you help me?
No puedo dormir. = I can't sleep.
¿Se puede pagar con tarjeta? = Can you pay by card?
Vuelvo a casa a las siete. = I come back home at seven.
¿Cuánto cuesta el billete? = How much is the ticket?
No encuentro mis llaves. = I can't find my keys.
`,drills:`
Yo no ___ dormir. (poder) => puedo | podo | puede | podemos # I can't sleep.
¿A qué hora ___ a casa? (volver, tú) => vuelves | volves | vuelve | volvéis # What time do you come back home?
Nosotros ___ ocho horas. (dormir) => dormimos | duermimos | duermen | dormís # We sleep eight hours.
¿Cuánto ___ las entradas? (costar) => cuestan | costan | cuesta | costáis # How much do the tickets cost?
Mi hijo no ___ sus zapatos. (encontrar) => encuentra | encontra | encuentras | encontramos # My son can't find his shoes.
¿___ abrir la ventana? (poder, usted) => Puede | Pode | Puedes | Podemos # Can you open the window?
`},{t:`e → ie: pensar, empezar, cerrar…`,k:`grammar`,goal:`Use more e→ie verbs to talk about times and opinions`,body:`
## e → ie
You already know {querer} and {preferir}. Many everyday verbs follow the same boot:
| | pensar (to think) | empezar (to begin) |
|---|---|---|
| {yo} | {p[ie]nso} | {emp[ie]zo} |
| {tú} | {p[ie]nsas} | {emp[ie]zas} |
| {él / ella / usted} | {p[ie]nsa} | {emp[ie]za} |
| {nosotros} | {pensamos} | {empezamos} |
| {vosotros} | {pensáis} | {empezáis} |
| {ellos / ellas / ustedes} | {p[ie]nsan} | {emp[ie]zan} |

More: {cerrar} (close), {entender} (understand), {perder} (lose, miss), {comenzar} (begin), {despertarse} (wake up), {sentir} (feel), {nevar} (snow).

> ¿Qué piensas? = What do you think?
> La película empieza a las nueve. = The film starts at nine.
> Las tiendas cierran a las dos. = The shops close at two.
> No entiendo. = I don't understand.

!tip: {pensar en} = to think about: {Pienso en ti.} {pensar} + infinitive = to plan to: {Pienso viajar en verano.}
!de: {entender} = verstehen; {perder} = verlieren *and* verpassen: {Pierdo el autobús} = Ich verpasse den Bus.
`,words:`
pensar = to think
empezar = to start, to begin
cerrar = to close
entender = to understand
perder = to lose; to miss (a bus)
comenzar = to begin
nevar = to snow
el autobús = bus
el examen = exam
la puerta = door
cerrado, cerrada = closed
`,phrases:`
¿Qué piensas de Madrid? = What do you think of Madrid?
La clase empieza a las nueve. = The class starts at nine.
¿A qué hora cierra el supermercado? = What time does the supermarket close?
No entiendo esta palabra. = I don't understand this word.
Siempre pierdo el autobús. = I always miss the bus.
En invierno nieva en la sierra. = In winter it snows in the mountains.
`,drills:`
¿Qué ___ tú? (pensar) => piensas | pensas | pienso | pensamos # What do you think?
La película ___ a las diez. (empezar) => empieza | empeza | empiezan | empezamos # The film starts at ten.
Nosotros no ___ el examen. (entender) => entendemos | entiendemos | entienden | entendéis # We don't understand the exam.
Las tiendas ___ a las dos. (cerrar) => cierran | cerran | cierra | cerramos # The shops close at two.
Yo siempre ___ las llaves. (perder) => pierdo | perdo | pierde | perdemos # I always lose my keys.
¿Vosotros ___ ir a la playa? (pensar) => pensáis | piensáis | piensan | pensamos # Are you (all) planning to go to the beach?
`},{t:`e → i & jugar: pedir, servir…`,k:`grammar`,goal:`Use e→i verbs, jugar vs tocar, and pedir vs preguntar`,body:`
## e → i (only -ir verbs)
| | pedir (to ask for, to order) | repetir (to repeat) |
|---|---|---|
| {yo} | {p[i]do} | {rep[i]to} |
| {tú} | {p[i]des} | {rep[i]tes} |
| {él / ella / usted} | {p[i]de} | {rep[i]te} |
| {nosotros} | {pedimos} | {repetimos} |
| {vosotros} | {pedís} | {repetís} |
| {ellos / ellas / ustedes} | {p[i]den} | {rep[i]ten} |

More e → i verbs: {servir} (serve), {seguir} (follow — {sigo}), {vestirse} (get dressed), {elegir} (choose — {elijo}), {medir} (measure).

!warn: **pedir** = to ask **for** something (order, request); **preguntar** = to ask a question: {Pido un café} vs {Pregunto la hora}.
!de: The same split as German: {pedir} = bitten / bestellen, {preguntar} = fragen.

## Jugar: u → ue
| | jugar |
|---|---|
| {yo} | {j[ue]go} |
| {tú} | {j[ue]gas} |
| {él / ella / usted} | {j[ue]ga} |
| {nosotros} | {jugamos} |
| {vosotros} | {jugáis} |
| {ellos / ellas / ustedes} | {j[ue]gan} |

{jugar a} + game or sport: {Juego al fútbol}, {Jugamos a las cartas}. For instruments use **tocar**: {Toco la guitarra}.

!de: German "spielen" covers both; Spanish splits them: {jugar al tenis} but {tocar el piano}.
!ar: Like لعب vs عزف: {jugar} = لعب، {tocar} (an instrument) = عزف. And {el ajedrez} (chess) comes from الشطرنج!
`,words:`
pedir = to ask for, to order
servir = to serve
repetir = to repeat
seguir = to follow; to continue
preguntar = to ask (a question)
jugar = to play (games, sports)
tocar = to touch; to play (an instrument)
la guitarra = guitar
el tenis = tennis
las cartas = cards (game)
el menú = menu
el ajedrez = chess
`,phrases:`
Siempre pido una paella. = I always order a paella.
¿Puede repetir, por favor? = Could you repeat, please?
Los domingos juego al fútbol. = On Sundays I play football.
Mi hermana toca la guitarra. = My sister plays the guitar.
¿Qué sirven en este restaurante? = What do they serve in this restaurant?
Jugamos al ajedrez con mi abuelo. = We play chess with my grandfather.
`,drills:`
Yo siempre ___ pescado. (pedir) => pido | pedo | pide | pedimos # I always order fish.
El profesor ___ la pregunta. (repetir) => repite | repete | repiten | repetimos # The teacher repeats the question.
Mis hijos ___ al fútbol. (jugar) => juegan | jugan | juega | jugamos # My children play football.
Nosotros ___ al tenis los sábados. (jugar) => jugamos | juegamos | juegan | jugáis # We play tennis on Saturdays.
Ana ___ el piano. => toca | juega | pide | sirve # Ana plays the piano.
Le ___ la hora a un señor. (ask) => pregunto | pido | repito | sirvo # I ask a man the time.
`},{t:`Reflexive verbs: my routine`,k:`grammar`,goal:`Describe your daily routine with reflexive verbs`,body:`
## Reflexive verbs
Verbs ending in **-se** describe things you do to yourself. The pronoun changes with the person and goes **before** the verb:
| | levantarse (to get up) |
|---|---|
| {yo} | {[me] levanto} |
| {tú} | {[te] levantas} |
| {él / ella / usted} | {[se] levanta} |
| {nosotros} | {[nos] levantamos} |
| {vosotros} | {[os] levantáis} |
| {ellos / ellas / ustedes} | {[se] levantan} |

## Daily routine verbs
{despertarse} (wake up — {me despierto}), {levantarse} (get up), {ducharse} (have a shower), {lavarse} (wash), {peinarse} (comb your hair), {afeitarse} (shave), {vestirse} (get dressed — {me visto}), {acostarse} (go to bed — {me acuesto}).

> Me levanto a las siete. = I get up at seven.
> Mi hermano se ducha por la noche. = My brother showers at night.
> ¿A qué hora te acuestas? = What time do you go to bed?

!tip: With an infinitive the pronoun can go at the end: {Quiero levantarme temprano} = {Me quiero levantar temprano}.
!de: Just like German reflexives: "ich wasche mich" = {me lavo}, "du ziehst dich an" = {te vistes}. Spanish has even more: {me ducho} = ich dusche (mich).
!ar: Similar to Arabic forms that act on oneself: اغتسل ≈ {lavarse}، تمشّط ≈ {peinarse}.
`,words:`
levantarse = to get up
despertarse = to wake up
ducharse = to have a shower
lavarse = to wash (oneself)
vestirse = to get dressed
acostarse = to go to bed
peinarse = to comb one's hair
afeitarse = to shave
los dientes = teeth
la ducha = shower
el despertador = alarm clock
tarde = late
`,phrases:`
Me levanto a las siete. = I get up at seven.
Me ducho y me visto. = I have a shower and get dressed.
Mi hermano se afeita todos los días. = My brother shaves every day.
¿A qué hora te acuestas? = What time do you go to bed?
Nos despertamos muy temprano. = We wake up very early.
Me lavo los dientes. = I brush my teeth.
`,drills:`
Yo ___ levanto a las siete. => me | te | se | nos # I get up at seven.
¿A qué hora te ___? (acostarse) => acuestas | acostas | acuesto | acostáis # What time do you go to bed?
Mi padre ___ afeita por la mañana. => se | me | te | le # My father shaves in the morning.
Nosotros ___ duchamos por la noche. => nos | os | se | me # We shower at night.
Ellos se ___ muy tarde. (despertarse) => despiertan | despertan | despierta | despertamos # They wake up very late.
Yo me ___ rápido. (vestirse) => visto | vesto | viste | vestimos # I get dressed quickly.
`},{t:`First, then… my day in order`,k:`talk`,goal:`Tell the story of your day in order, with meals and times`,body:`
## Putting events in order
| | |
|---|---|
| {primero} | first |
| {después} | afterwards, then |
| {luego} | then, later |
| {más tarde} | later |
| {antes de} + infinitive | before …ing |
| {después de} + infinitive | after …ing |
| {al final} | in the end |

> Primero me ducho, después desayuno y luego voy al trabajo. = First I shower, then I have breakfast and then I go to work.
> Antes de dormir, leo un poco. = Before going to sleep, I read a little.
> Después de comer, descanso. = After lunch, I rest.

!tip: After {antes de} and {después de} use the **infinitive**: {después de cenar} (after having dinner).
!de: {después de + Infinitiv} = nach dem …: {después de comer} = nach dem Essen.

## Meals in Spain
{el desayuno} / {desayunar} (breakfast), {la comida} / {comer} (lunch), {la merienda} / {merendar} (afternoon snack), {la cena} / {cenar} (dinner).

!es: A typical day: a light breakfast, a mid-morning {bocadillo}, lunch at 2 pm, {merienda} around 6 pm and dinner after 9. The famous {siesta}? Most people don't have time for it on workdays!
`,words:`
primero = first
después = afterwards, then
luego = then, later
más tarde = later
antes de = before
después de = after
al final = in the end
el desayuno = breakfast
desayunar = to have breakfast
la cena = dinner
cenar = to have dinner
la merienda = afternoon snack
`,phrases:`
Primero me ducho y después desayuno. = First I shower and then I have breakfast.
Después de comer, descanso un poco. = After lunch, I rest a little.
Antes de dormir, leo un libro. = Before going to sleep, I read a book.
Ceno a las nueve y luego veo la tele. = I have dinner at nine and then I watch TV.
A las seis meriendo un bocadillo. = At six I have a sandwich as a snack.
Al final del día estoy muy cansado. = At the end of the day I'm very tired.
`,drills:`
___ me levanto y después me ducho. => Primero | Después | Antes | Final # First I get up and then I shower.
Después de ___, me lavo los dientes. => comer | como | comemos | comida # After eating, I brush my teeth.
Antes ___ salir, cierro la ventana. => de | a | que | en # Before going out, I close the window.
Desayuno a las ocho y ___ a las diez de la noche. => ceno | cena | desayuno | meriendo # I have breakfast at eight and dinner at ten at night.
Por la mañana tomo el ___. => desayuno | cena | merienda | comida # In the morning I have breakfast.
`},{t:`Irregular yo: hago, pongo, salgo…`,k:`grammar`,goal:`Use verbs that are only irregular in the yo form`,body:`
## Verbs with an irregular "yo"
These verbs are regular **except** for the yo form:
| infinitive | yo | tú | meaning |
|---|---|---|---|
| {hacer} | {hago} | {haces} | to do, to make |
| {poner} | {pongo} | {pones} | to put |
| {salir} | {salgo} | {sales} | to go out, to leave |
| {traer} | {traigo} | {traes} | to bring |
| {ver} | {veo} | {ves} | to see, to watch |
| {saber} | {sé} | {sabes} | to know |
| {conocer} | {conozco} | {conoces} | to know (people, places) |
| {dar} | {doy} | {das} | to give |
| {conducir} | {conduzco} | {conduces} | to drive |

!tip: Learn the **-go** family together: {hago}, {pongo}, {salgo}, {traigo}, {tengo}, {vengo}, {digo}.

> Los sábados salgo con mis amigos. = On Saturdays I go out with my friends.
> ¿Qué haces? — Hago los deberes. = What are you doing? — I'm doing my homework.
> Pongo la mesa. = I set the table.
> No sé. = I don't know.

!de: {hacer} covers both "machen" and "tun": {¿Qué haces?} = Was machst du?
!ar: {¿Qué haces?} ≈ ماذا تفعل؟ — {hacer} ≈ فعل / عمل.
`,words:`
hacer = to do, to make
hago = I do, I make
poner = to put
pongo = I put
salir = to go out, to leave
salgo = I go out
traer = to bring
ver = to see, to watch
saber = to know (facts)
no sé = I don't know
conducir = to drive (Spain)
los deberes = homework
la tele = TV
`,phrases:`
¿Qué haces esta noche? = What are you doing tonight?
Salgo de casa a las ocho. = I leave home at eight.
Pongo la mesa para la cena. = I set the table for dinner.
No sé dónde está. = I don't know where it is.
Veo una película. = I'm watching a film.
Conduzco al trabajo. = I drive to work.
`,drills:`
Yo ___ los deberes por la tarde. (hacer) => hago | hace | haco | hacemos # I do my homework in the afternoon.
Los viernes ___ con mis amigos. (salir, yo) => salgo | salo | sale | salimos # On Fridays I go out with my friends.
Yo no ___ la respuesta. (saber) => sé | sabo | sabe | se # I don't know the answer.
___ la mesa, mamá. (poner, yo) => Pongo | Pono | Pone | Ponemos # I'll set the table, Mum.
Yo ___ la tele por la noche. (ver) => veo | vo | ve | vemos # I watch TV at night.
Yo ___ Madrid muy bien. (conocer) => conozco | conoco | conoce | conocemos # I know Madrid very well.
`}],story:{title:`Un día normal de Javier`,text:`
Javier es profesor de español. Se despierta a las siete menos cuarto, pero no se levanta hasta las siete.
= Javier is a Spanish teacher. He wakes up at quarter to seven, but he doesn't get up until seven.

Primero se ducha y se viste. Después desayuna un café con tostadas y lee las noticias en el móvil.
= First he showers and gets dressed. Then he has coffee and toast for breakfast and reads the news on his phone.

Sale de casa a las ocho y cuarto. No conduce: va a la escuela en bicicleta porque vive cerca.
= He leaves home at quarter past eight. He doesn't drive: he goes to school by bike because he lives nearby.

Las clases empiezan a las nueve. Javier repite mucho las palabras difíciles y sus estudiantes repiten con él.
= Classes start at nine. Javier repeats the difficult words a lot and his students repeat them with him.

A las dos vuelve a casa y come con su mujer. Después de comer, juega un poco con su hija Lucía.
= At two he comes back home and has lunch with his wife. After lunch, he plays a little with his daughter Lucía.

Por la tarde prepara las clases. A veces no puede terminar y trabaja hasta las ocho.
= In the afternoon he prepares his classes. Sometimes he can't finish and works until eight.

Cenan a las nueve y media. Antes de dormir, Javier lee una novela. Se acuesta a las once y media y duerme como un niño.
= They have dinner at half past nine. Before going to sleep, Javier reads a novel. He goes to bed at half past eleven and sleeps like a baby.
`,questions:`
¿A qué hora se levanta Javier? => A las siete | A las siete menos cuarto | A las ocho # What time does Javier get up?
¿Cómo va a la escuela? => En bicicleta | En coche | En autobús # How does he get to school?
¿Qué hace después de comer? => Juega con su hija | Prepara las clases | Lee una novela # What does he do after lunch?
¿Qué hace antes de dormir? => Lee una novela | Ve la tele | Juega al fútbol # What does he do before going to sleep?
`}},ws=s({default:()=>Ts}),Ts={n:8,title:`Plans & free time`,es:`¿Qué vas a hacer?`,cando:[`I can use ir and say where I’m going and how`,`I can talk about future plans with ir a + infinitive`,`I can talk about my hobbies and free time`,`I can talk about the weather`,`I can say what I have to do and what I can do`,`I can choose between saber and conocer`],lessons:[{t:`Ir — to go`,k:`grammar`,goal:`Say where you are going and how you get there`,body:`
## The verb ir
| | ir |
|---|---|
| {yo} | {voy} |
| {tú} | {vas} |
| {él / ella / usted} | {va} |
| {nosotros} | {vamos} |
| {vosotros} | {vais} |
| {ellos / ellas / ustedes} | {van} |

**ir a** + place = to go to:
> Voy al trabajo. = I'm going to work. (a + el = al)
> Vamos a la playa. = We're going to the beach.
> ¿Adónde vas? = Where are you going?

## How? — en
> Voy en metro. = I go by metro.
> Vamos en coche, en tren, en autobús, en avión. = We go by car, train, bus, plane.
> Voy a pie. = I walk. / I go on foot.

!tip: {¿Adónde vas?} (where to?) vs {¿Dónde estás?} (where are you?). With movement, use **a**.
!de: {ir} is both "gehen" and "fahren": {Voy a Berlín en tren} = Ich fahre mit dem Zug nach Berlin.
!ar: {ir} ≈ ذهب: {Voy al mercado} ≈ أذهب إلى السوق. And {¡Vamos!} ≈ يلّا!
`,words:`
ir = to go
voy = I go, I'm going
vas = you go
¿adónde? = where to?
el trabajo = work, job
el metro = metro, underground
el tren = train
el avión = plane
la bici = bike
a pie = on foot
el mercado = market
¡vamos! = let's go!
`,phrases:`
¿Adónde vas? — Voy al supermercado. = Where are you going? — I'm going to the supermarket.
Voy al trabajo en metro. = I go to work by metro.
Los domingos vamos al mercado. = On Sundays we go to the market.
Mis padres van a Granada en tren. = My parents are going to Granada by train.
¿Vais a la playa en coche? = Are you (all) going to the beach by car?
¡Vamos! Es tarde. = Let's go! It's late.
`,drills:`
Yo ___ al trabajo en bici. => voy | vas | va | vamos # I go to work by bike.
¿Adónde ___ tú? => vas | va | voy | vais # Where are you going?
Nosotros ___ a la playa. => vamos | van | vais | voy # We're going to the beach.
Voy ___ cine. => al | a el | a la | en # I'm going to the cinema.
Mis amigos van ___ tren. => en | a | por | de # My friends are going by train.
¿Vosotros ___ al concierto? => vais | vamos | van | vas # Are you (all) going to the concert?
`},{t:`Ir a + infinitive: plans`,k:`grammar`,goal:`Talk about your plans with ir a + infinitive`,body:`
## The near future
**ir a + infinitive** = "going to" — the easiest way to talk about the future:
> Voy a estudiar. = I'm going to study.
> ¿Qué vas a hacer el fin de semana? = What are you going to do at the weekend?
> Vamos a comer en un restaurante. = We're going to eat in a restaurant.
> Va a llover. = It's going to rain.

## Future time expressions
| | |
|---|---|
| {esta tarde} | this afternoon |
| {esta noche} | tonight |
| {mañana} | tomorrow |
| {pasado mañana} | the day after tomorrow |
| {el próximo lunes} | next Monday |
| {la semana que viene} | next week |
| {el año que viene} | next year |

!tip: {Vamos a} + infinitive can also mean "Let's…": {¡Vamos a bailar!} = Let's dance!
!de: German often just uses the present ("Morgen lerne ich"); Spanish can too ({Mañana estudio}), but {voy a estudiar} is very common.
!ar: {voy a} + infinitive ≈ سوف / رح: {Voy a viajar} ≈ سوف أسافر.
`,words:`
voy a… = I'm going to…
esta tarde = this afternoon
esta noche = tonight
pasado mañana = the day after tomorrow
el próximo lunes = next Monday
la semana que viene = next week
el año que viene = next year
el plan = plan
las vacaciones = holidays
el concierto = concert
la fiesta = party
visitar = to visit
`,phrases:`
¿Qué vas a hacer esta noche? = What are you going to do tonight?
Voy a estudiar para el examen. = I'm going to study for the exam.
Mañana vamos a visitar a mis abuelos. = Tomorrow we're going to visit my grandparents.
Va a llover esta tarde. = It's going to rain this afternoon.
El año que viene voy a viajar a México. = Next year I'm going to travel to Mexico.
¡Vamos a bailar! = Let's dance!
`,drills:`
Esta noche ___ a ver una película. (yo) => voy | vas | va | vamos # Tonight I'm going to watch a film.
¿Qué ___ a hacer mañana? (tú) => vas | va | voy | vais # What are you going to do tomorrow?
Mis amigos van ___ cenar en casa. => a | de | para | en # My friends are going to have dinner at home.
Mañana va a ___. (rain) => llover | llueve | lluvia | lloviendo # Tomorrow it's going to rain.
La semana que ___ voy a Sevilla. => viene | va | vienen | próxima # Next week I'm going to Seville.
Vamos a ___ a mis abuelos. (visit) => visitar | visitamos | visita | visitando # We're going to visit my grandparents.
`},{t:`Free time & hobbies`,k:`vocab`,goal:`Talk about what you do in your free time`,body:`
## ¿Qué haces en tu tiempo libre?
| | |
|---|---|
| {leer} | read |
| {hacer deporte} | do sport |
| {ir al gimnasio} | go to the gym |
| {nadar} | swim |
| {correr} | run, go running |
| {bailar} | dance |
| {cantar} | sing |
| {cocinar} | cook |
| {pintar} | paint |
| {hacer fotos} | take photos |
| {ver series} | watch series |
| {salir con amigos} | go out with friends |
| {ir de compras} | go shopping |
| {pasear} | go for a walk |

> En mi tiempo libre leo y hago deporte. = In my free time I read and do sport.
> Me encanta nadar en el mar. = I love swimming in the sea.
> Juego al fútbol con mis amigos. = I play football with my friends.

!es: Football rules in Spain — {el Real Madrid}, {el Barça}, {el Atleti}… Other national loves: {el pádel} (a racket sport), {ir de tapas} and {quedar con amigos}.
!tip: {quedar} = to meet up (Spain): {¿Quedamos a las ocho?} = Shall we meet at eight?
`,words:`
el tiempo libre = free time
hacer deporte = to do sport
el gimnasio = gym
nadar = to swim
bailar = to dance
cantar = to sing
pintar = to paint
la serie = series
ir de compras = to go shopping
pasear = to go for a walk
quedar = to meet up (Spain)
el mar = sea
`,phrases:`
¿Qué haces en tu tiempo libre? = What do you do in your free time?
Voy al gimnasio tres veces a la semana. = I go to the gym three times a week.
Me encanta nadar en el mar. = I love swimming in the sea.
Los fines de semana veo series. = At the weekend I watch series.
¿Quedamos el sábado? = Shall we meet up on Saturday?
Mi hermana pinta muy bien. = My sister paints very well.
`,drills:`
En mi tiempo ___ leo mucho. => libre | libro | libra | liberado # In my free time I read a lot.
Voy al ___ para hacer deporte. => gimnasio | mercado | banco | museo # I go to the gym to do sport.
Me gusta ___ en la piscina. => nadar | nado | nada | nadamos # I like swimming in the pool.
¿___ a las ocho en la plaza? (we) => Quedamos | Quedan | Queda | Quedo # Shall we meet at eight in the square?
Los sábados voy de ___ con mi madre. => compras | comprar | compro | compra # On Saturdays I go shopping with my mum.
`},{t:`What’s the weather like?`,k:`vocab`,goal:`Describe the weather and say if you are hot or cold`,body:`
## El tiempo
| | |
|---|---|
| {Hace sol.} | It's sunny. |
| {Hace calor.} | It's hot. |
| {Hace frío.} | It's cold. |
| {Hace viento.} | It's windy. |
| {Hace buen tiempo.} | The weather's good. |
| {Hace mal tiempo.} | The weather's bad. |
| {Llueve.} / {Está lloviendo.} | It's raining. |
| {Nieva.} | It's snowing. |
| {Está nublado.} | It's cloudy. |
| {Hay niebla.} | It's foggy. |

- Most weather expressions use **hacer**: {Hace frío}.
- Temperature: {Estamos a veinte grados.} or {Hace veinte grados.}

> ¿Qué tiempo hace hoy? = What's the weather like today?
> En verano hace mucho calor en Sevilla. = In summer it's very hot in Seville.

!warn: People feel cold with **tener**: {Tengo frío} (I'm cold), {Tengo calor} (I'm hot). Things *are* cold with estar: {El agua está fría}. The weather *makes* cold: {Hace frío}.
!de: "Es ist kalt" → Spanish says "it makes cold": {Hace frío}. "Mir ist kalt" = {Tengo frío}.
!ar: {hace calor} ≈ الجو حار، but {tengo calor} ≈ أنا حرّان (I feel hot).
`,words:`
el tiempo = weather; time
hace sol = it's sunny
hace calor = it's hot
hace frío = it's cold
hace viento = it's windy
llueve = it's raining
nieva = it's snowing
nublado, nublada = cloudy
la lluvia = rain
el grado = degree
tengo frío = I'm cold
tengo calor = I'm hot
`,phrases:`
¿Qué tiempo hace hoy? = What's the weather like today?
Hoy hace sol y mucho calor. = Today it's sunny and very hot.
En invierno llueve mucho en Galicia. = In winter it rains a lot in Galicia.
Estamos a treinta grados. = It's thirty degrees.
Tengo frío. ¿Cierras la ventana? = I'm cold. Can you close the window?
Está nublado, pero no llueve. = It's cloudy, but it isn't raining.
`,drills:`
Hoy ___ mucho calor. => hace | es | está | tiene # Today it's very hot.
En Granada ___ en invierno. (snow) => nieva | nueva | neva | nieve # It snows in Granada in winter.
___ frío. ¿Me das un jersey? => Tengo | Hace | Estoy | Soy # I'm cold. Can you give me a jumper?
¿Qué ___ hace hoy? => tiempo | hora | clima | día # What's the weather like today?
Está ___, pero no llueve. => nublado | sol | viento | calor # It's cloudy, but it isn't raining.
`},{t:`Tener que, hay que, poder`,k:`grammar`,goal:`Say what you must do, what people have to do and what is allowed`,body:`
## Obligation
- **tener que + infinitive** = to have to (personal): {Tengo que trabajar.}
- **hay que + infinitive** = one has to (general, impersonal): {Hay que estudiar mucho.}
- **deber + infinitive** = should, must: {Debes descansar.}

> Tengo que ir al médico. = I have to go to the doctor's.
> ¿Tienes que trabajar mañana? = Do you have to work tomorrow?
> En España hay que pagar en euros. = In Spain you have to pay in euros.

## Possibility & permission
- **poder + infinitive** = can, may: {No puedo salir hoy.}
> ¿Puedo pasar? = May I come in?
> Aquí no se puede fumar. = You can't smoke here.

!tip: {No tienes que venir} = you don't *have* to come (not necessary). {No debes fumar} = you mustn't / shouldn't smoke.
!de: {tener que} = müssen, {poder} = können / dürfen, {deber} = sollen. And {no tienes que} = du musst nicht.
!ar: {tener que} ≈ لازم / يجب: {Tengo que estudiar} ≈ لازم أدرس.
`,words:`
tener que = to have to
hay que = one must, you have to
¿puedo…? = may I…?
se puede = it's allowed, one can
no se puede = it's not allowed
fumar = to smoke
pagar = to pay
descansar = to rest
la cita = appointment; date
aparcar = to park (Spain)
el médico = doctor
`,phrases:`
Tengo que trabajar el sábado. = I have to work on Saturday.
Hay que estudiar todos los días. = You have to study every day.
¿Puedo pagar con tarjeta? = Can I pay by card?
Aquí no se puede fumar. = You can't smoke here.
Mañana tengo que ir al médico. = Tomorrow I have to go to the doctor's.
No tienes que venir si estás cansado. = You don't have to come if you're tired.
`,drills:`
Mañana ___ que trabajar. (yo) => tengo | hay | debo | puedo # Tomorrow I have to work.
Para aprender un idioma ___ que practicar. => hay | tiene | tengo | es # To learn a language you have to practise.
¿___ abrir la ventana? (poder, yo) => Puedo | Podo | Puede | Pueda # May I open the window?
Mis padres ___ que ir al banco. => tienen | hay | tiene | tenemos # My parents have to go to the bank.
Aquí no se ___ aparcar. => puede | pueden | puedo | podemos # You can't park here.
¿Tienes ___ estudiar hoy? => que | de | a | para # Do you have to study today?
`},{t:`Saber or conocer?`,k:`grammar`,goal:`Choose between saber and conocer, and use the personal a`,body:`
## Two verbs for "to know"
| saber | conocer |
|---|---|
| facts, information: {Sé tu número.} | people: {Conozco a Ana.} |
| how to do something: {Sé nadar.} | places: {Conozco Madrid.} |
| question words: {¿Sabes dónde está?} | things you're familiar with: {Conozco este libro.} |
| yo: {sé} | yo: {conozco} |

> ¿Sabes cocinar? = Can you cook? (do you know how?)
> No sé qué hora es. = I don't know what time it is.
> ¿Conoces a mi hermano? = Do you know my brother?
> Quiero conocer Barcelona. = I want to get to know Barcelona.

!tip: {conocer} also means "to meet for the first time": {Encantado de conocerte} = Nice to meet you.
!de: The same split as German! {saber} = wissen (and können for skills: {Sé nadar} = Ich kann schwimmen). {conocer} = kennen: {Conozco a Ana} = Ich kenne Ana.
!ar: {saber} ≈ عرف (معلومة)، {conocer} ≈ عرف / تعرّف على (شخصًا أو مكانًا).

## The personal "a"
When the direct object is a **person**, put **a** before it: {Conozco a Pedro.} {Busco a mi hijo.} {Veo a mis amigos.} But: {Conozco Madrid.} {Busco mis llaves.}

!de: Think of it as a signal: "a person is coming!" — German and English have nothing like it.
!ar: Arabic has no marker here, but Spanish needs {a} before people: {Veo a Omar} = أرى عمر.
`,words:`
saber = to know (facts, how to)
sé = I know
conocer = to know (people, places); to meet
conozco = I know (a person, a place)
la respuesta = answer
la pregunta = question
la verdad = truth
encantado de conocerte = nice to meet you
buscar = to look for
la dirección = address; direction
el camino = way, path
`,phrases:`
¿Sabes dónde está la estación? = Do you know where the station is?
No sé nadar. = I can't swim.
¿Conoces a mi novia? = Do you know my girlfriend?
Conozco muy bien Sevilla. = I know Seville very well.
¿Sabes la respuesta? = Do you know the answer?
Busco a mi hermano. = I'm looking for my brother.
`,drills:`
¿___ cocinar? (tú) => Sabes | Conoces | Sabe | Conozco # Can you cook?
Yo no ___ a tu hermana. => conozco | sé | conoce | sabe # I don't know your sister.
¿___ dónde vive Pedro? (tú) => Sabes | Conoces | Sabéis | Conocéis # Do you know where Pedro lives?
Mis padres ___ Barcelona muy bien. => conocen | saben | conocemos | sabemos # My parents know Barcelona very well.
Veo ___ mis amigos los sábados. => a | al | de | en # I see my friends on Saturdays.
No ___ hablar alemán. => sé | conozco | se | sabe # I can't speak German.
`}],story:{title:`Planes para el fin de semana`,text:`
Es jueves por la noche. Anna llama a Omar por teléfono.
= It's Thursday night. Anna phones Omar.

—Hola, Omar. ¿Qué vas a hacer este fin de semana? —Pues el sábado por la mañana tengo que trabajar, pero por la tarde estoy libre. ¿Por qué?
= "Hi Omar. What are you going to do this weekend?" "Well, on Saturday morning I have to work, but in the afternoon I'm free. Why?"

—Mis amigas y yo vamos a ir a Toledo el domingo. ¿Quieres venir? —¡Sí, claro! No conozco Toledo. ¿Cómo vais a ir?
= "My friends and I are going to go to Toledo on Sunday. Do you want to come?" "Yes, of course! I don't know Toledo. How are you going to get there?"

—Vamos a ir en tren. Solo tarda media hora desde Madrid. —¡Perfecto! ¿Y qué tiempo va a hacer?
= "We're going by train. It only takes half an hour from Madrid." "Perfect! And what's the weather going to be like?"

—Va a hacer sol, pero también va a hacer un poco de frío. Tienes que llevar un abrigo.
= "It's going to be sunny, but it's also going to be a bit cold. You have to bring a coat."

—Vale. ¿Sabes qué hay que ver en Toledo? —Sí: la catedral, la sinagoga y la mezquita del Cristo de la Luz. Es la ciudad de las tres culturas.
= "OK. Do you know what you have to see in Toledo?" "Yes: the cathedral, the synagogue and the Cristo de la Luz mosque. It's the city of the three cultures."

—¡Qué interesante! Entonces, ¿quedamos el domingo a las nueve en la estación? —¡Vale! ¡Hasta el domingo!
= "How interesting! So, shall we meet on Sunday at nine at the station?" "OK! See you on Sunday!"
`,questions:`
¿Qué tiene que hacer Omar el sábado por la mañana? => Trabajar | Ir a Toledo | Estudiar # What does Omar have to do on Saturday morning?
¿Cómo van a ir a Toledo? => En tren | En coche | En autobús # How are they going to get to Toledo?
¿Qué tiempo va a hacer? => Sol y un poco de frío | Lluvia y viento | Mucho calor # What will the weather be like?
¿Dónde quedan? => En la estación | En la catedral | En casa de Anna # Where are they meeting?
`}},Es=s({default:()=>Ds}),Ds={n:9,title:`Shopping, body & A1 wrap-up`,es:`De compras`,cando:[`I can say what is happening right now with estar + gerund`,`I can point at things with este, ese and aquel`,`I can buy clothes: sizes, colours and trying things on`,`I can use muy, mucho, poco, bastante and demasiado`,`I can say what hurts with doler`,`I can write a short text about myself with connectors`],lessons:[{t:`Estar + gerund: right now`,k:`grammar`,goal:`Say what is happening right now`,body:`
## What are you doing right now?
**estar + gerund** = an action in progress at this moment:
> Estoy estudiando. = I'm studying (right now).
> ¿Qué estás haciendo? = What are you doing?
> Está lloviendo. = It's raining.

## Forming the gerund
| verb | gerund |
|---|---|
| {hablar} | {habl[ando]} |
| {comer} | {com[iendo]} |
| {vivir} | {viv[iendo]} |
| {leer} | {le[yendo]} |
| {dormir} | {d[u]rmiendo} |
| {pedir} | {p[i]diendo} |

- -ar → **-ando**; -er / -ir → **-iendo**.
- Vowel + -er / -ir → **-yendo**: {leyendo}, {oyendo}, {trayendo}.
- -ir stem changers: e → i, o → u: {diciendo}, {pidiendo}, {durmiendo}.

!tip: Spanish uses this form less than English. Habits use the simple present: {Trabajo en un banco} (I work in a bank) — but {Estoy trabajando} (I'm working right now).
!de: German has no continuous tense: "Ich lerne gerade" = {Estoy estudiando}.
!ar: Like Levantine عم: عم أدرس ≈ {Estoy estudiando}.
`,words:`
hablando = speaking
comiendo = eating
haciendo = doing
leyendo = reading
durmiendo = sleeping
escribiendo = writing
esperando = waiting
trabajando = working
ahora = now
ahora mismo = right now
en este momento = at the moment
¿qué estás haciendo? = what are you doing?
`,phrases:`
¿Qué estás haciendo? — Estoy cocinando. = What are you doing? — I'm cooking.
Los niños están durmiendo. = The children are sleeping.
Está lloviendo mucho. = It's raining a lot.
Estamos esperando el autobús. = We're waiting for the bus.
Ahora mismo estoy trabajando. = Right now I'm working.
Mi madre está hablando por teléfono. = My mother is talking on the phone.
`,drills:`
Ahora ___ estudiando. (yo) => estoy | soy | está | estás # Right now I'm studying.
Los niños están ___. (dormir) => durmiendo | dormiendo | duermiendo | dormando # The children are sleeping.
¿Qué estás ___? (hacer) => haciendo | hacendo | haciando | hecho # What are you doing?
Mi padre está ___ el periódico. (leer) => leyendo | leiendo | leendo | leído # My father is reading the newspaper.
Está ___ mucho. (llover) => lloviendo | lluviendo | llovendo | llueve # It's raining a lot.
Estamos ___ la cena. (preparar) => preparando | preparendo | preparado | preparamos # We're making dinner.
`},{t:`This, that & more clothes`,k:`grammar`,goal:`Point at things with este, ese and aquel`,body:`
## Demonstratives
| | near me | near you | over there |
|---|---|---|---|
| masc. singular | {este} | {ese} | {aquel} |
| fem. singular | {esta} | {esa} | {aquella} |
| masc. plural | {estos} | {esos} | {aquellos} |
| fem. plural | {estas} | {esas} | {aquellas} |
| neutral (an idea, an unknown thing) | {esto} | {eso} | {aquello} |

> Este jersey es bonito. = This jumper is nice.
> ¿Cuánto cuesta esa camisa? = How much is that shirt?
> Aquellas botas son muy caras. = Those boots over there are very expensive.
> ¿Qué es esto? = What's this?

!tip: {esto}, {eso} and {aquello} never go before a noun — they point at things you don't name: {¿Qué es eso?}
!de: {este} ≈ dieser, {ese} ≈ der da, {aquel} ≈ jener (dort drüben). Spanish uses all three every day.
!ar: {este / esta} ≈ هذا / هذه، {ese / esa} ≈ ذلك / تلك (near you)، {aquel} ≈ ذاك (far away).

## More clothes
{la chaqueta} (jacket), {el abrigo} (coat), {las botas} (boots), {el bolso} (handbag), {el cinturón} (belt), {la bufanda} (scarf), {el gorro} (woolly hat), {los calcetines} (socks), {el traje} (suit).
`,words:`
este, esta = this
ese, esa = that
aquel, aquella = that (over there)
esto = this (thing)
eso = that (thing)
la chaqueta = jacket
el abrigo = coat
las botas = boots
el bolso = handbag
la bufanda = scarf
los calcetines = socks
el traje = suit
`,phrases:`
Me gusta mucho este abrigo. = I really like this coat.
¿Cuánto cuestan esas botas? = How much are those boots?
Aquella chaqueta es muy bonita. = That jacket over there is very nice.
¿Qué es esto? = What's this?
Estos calcetines son de mi hermano. = These socks are my brother's.
Eso es muy caro. = That's very expensive.
`,drills:`
___ camisa es muy bonita. (this) => Esta | Este | Esto | Estas # This shirt is very pretty.
¿Cuánto cuestan ___ zapatos? (those, near you) => esos | esas | eso | ese # How much are those shoes?
___ montañas de allí son muy altas. => Aquellas | Aquellos | Aquella | Aquel # Those mountains over there are very high.
¿Qué es ___? (this thing) => esto | este | esta | estos # What's this?
Me gusta ___ abrigo. (this) => este | esta | esto | estos # I like this coat.
`},{t:`In a clothes shop`,k:`talk`,goal:`Buy clothes: ask for sizes and colours, try things on and pay`,body:`
## Useful phrases
> ¿Puedo ayudarle? = Can I help you? (shop assistant)
> Solo estoy mirando, gracias. = I'm just looking, thanks.
> Busco una chaqueta negra. = I'm looking for a black jacket.
> ¿Qué talla tiene? = What size are you?
> Tengo la talla M. = I'm a size M.
> ¿Me lo puedo probar? = Can I try it on?
> ¿Dónde están los probadores? = Where are the fitting rooms?
> Me queda grande. = It's too big for me.
> Me queda bien. = It fits me well.
> ¿La tiene en azul? = Do you have it in blue?
> Me lo llevo. = I'll take it.

!tip: **quedar** (to fit, to suit) works like gustar: {Me queda bien} (it fits me), {Me quedan pequeños} (they're too small for me).
!es: Spain has two big sale seasons — {las rebajas} — from early January and from July. Shoe sizes are European ({el 42}); clothes sizes go 36, 38, 40…
!de: Sizes work just as in Germany, and {Me lo pruebo} = Ich probiere es an.
`,words:`
la talla = size (clothes)
probarse = to try on
el probador = fitting room
me queda bien = it fits me well
me queda grande = it's too big for me
me lo llevo = I'll take it
las rebajas = the sales
solo estoy mirando = I'm just looking
el dependiente, la dependienta = shop assistant
el efectivo = cash
`,phrases:`
Solo estoy mirando, gracias. = I'm just looking, thanks.
¿Tiene esta camiseta en la talla M? = Do you have this T-shirt in size M?
¿Me la puedo probar? = Can I try it on?
Me queda un poco pequeña. = It's a bit small for me.
Me queda muy bien. Me la llevo. = It fits me really well. I'll take it.
¿Se puede pagar en efectivo? = Can you pay in cash?
`,drills:`
¿Qué ___ tiene? — La 40. => talla | tamaño | número | medida # What size are you? — 40.
¿Me lo puedo ___? => probar | probarse | pruebo | prueba # Can I try it on?
Los pantalones me ___ grandes. => quedan | queda | quedo | quedamos # The trousers are too big for me.
Esta falda me ___ muy bien. => queda | quedan | gusta | está # This skirt fits me really well.
El jersey me gusta. Me ___ llevo. => lo | la | le | los # I like the jumper. I'll take it.
Solo estoy ___, gracias. => mirando | mirar | miro | mirado # I'm just looking, thanks.
`},{t:`Muy, mucho, poco, demasiado`,k:`grammar`,goal:`Talk about quantities with muy, mucho, poco, bastante and demasiado`,body:`
## Muy or mucho?
- **muy** + adjective or adverb (never changes): {muy grande}, {muy bien}, {muy tarde}.
- **mucho** after a verb (doesn't change): {Trabajo mucho.} {Me gusta mucho.}
- **mucho / mucha / muchos / muchas** + noun (agrees): {mucho dinero}, {mucha gente}, {muchos libros}, {muchas casas}.

!warn: Never say "muy mucho" — say {muchísimo}: {Te quiero muchísimo}.

## Quantity words
| | + noun (agrees) | after a verb |
|---|---|---|
| little, few | {poco pan}, {pocas personas} | {Como poco.} |
| quite, enough | {bastante dinero}, {bastantes amigos} | {Estudio bastante.} |
| a lot, many | {mucha agua}, {muchos amigos} | {Leo mucho.} |
| too much, too many | {demasiado ruido}, {demasiadas cosas} | {Hablas demasiado.} |

!tip: {un poco} = a bit (positive): {Hablo un poco de español}. {poco} = not much (negative): {Hablo poco} (I don't talk much).
!de: {muy} = sehr, {mucho} = viel, {demasiado} = zu viel, {bastante} = ziemlich / genug.
!ar: {muy} ≈ جدًا، {mucho} ≈ كثير، {poco} ≈ قليل، {demasiado} ≈ أكثر من اللازم.
`,words:`
muy = very
mucho = a lot
mucha gente = a lot of people
poco = little, not much
un poco = a bit
bastante = quite; enough
demasiado = too, too much
muchísimo = very much
la gente = people
el dinero = money
el ruido = noise
la cosa = thing
`,phrases:`
Este restaurante es muy bueno. = This restaurant is very good.
Hay mucha gente en la calle. = There are a lot of people in the street.
Trabajo demasiado. = I work too much.
Tengo poco dinero este mes. = I don't have much money this month.
Hablo bastante bien español. = I speak Spanish quite well.
Te quiero muchísimo. = I love you very much.
`,drills:`
Madrid es una ciudad ___ grande. => muy | mucho | mucha | muchos # Madrid is a very big city.
Tengo ___ amigos en Sevilla. => muchos | muy | mucho | muchas # I have a lot of friends in Seville.
Hay ___ gente en la playa. => mucha | mucho | muy | muchas # There are a lot of people on the beach.
Me gusta ___ el chocolate. => mucho | muy | mucha | muchos # I like chocolate a lot.
Hay ___ ruido. No puedo dormir. (too much) => demasiado | demasiada | bastante | poco # There's too much noise. I can't sleep.
Hablo ___ de alemán. (a bit) => un poco | poco | pocos | una poca # I speak a bit of German.
`},{t:`My body & what hurts`,k:`vocab`,goal:`Name parts of the body and say what hurts`,body:`
## El cuerpo
{la cabeza} (head), {la cara} (face), {los ojos} (eyes), {la nariz} (nose), {la boca} (mouth), {los dientes} (teeth), {la oreja} (ear), {el cuello} (neck), {la espalda} (back), {el brazo} (arm), {la mano} (hand), {el dedo} (finger), {el estómago} (stomach), {la pierna} (leg), {la rodilla} (knee), {el pie} (foot).

## Doler — to hurt
**doler** (o → ue) works like gustar:
> Me duele la cabeza. = I have a headache. (my head hurts me)
> Me duelen los pies. = My feet hurt.
> ¿Te duele algo? = Does anything hurt?
> A mi hijo le duele el estómago. = My son has a stomach ache.

!tip: Spanish uses **the**, not "my", with body parts: {Me duele la espalda} — {me} already says whose back it is.
!de: Like German "Mir tut der Kopf weh" = {Me duele la cabeza} — German uses the article too!
!ar: Like Arabic: راسي يوجعني ≈ {Me duele la cabeza} — the body part is the subject.

> Estoy resfriado. = I've got a cold.
> Tengo fiebre. = I have a temperature.
> Tengo tos. = I have a cough.
`,words:`
el cuerpo = body
la cabeza = head
la cara = face
la nariz = nose
la boca = mouth
la espalda = back
el brazo = arm
la pierna = leg
el pie = foot
el estómago = stomach
doler = to hurt
me duele = it hurts me
la fiebre = fever, temperature
resfriado, resfriada = with a cold
`,phrases:`
Me duele la cabeza. = I have a headache.
Me duelen los pies. = My feet hurt.
¿Te duele algo? = Does anything hurt?
A Pedro le duele la espalda. = Pedro's back hurts.
Estoy resfriado y tengo fiebre. = I have a cold and a temperature.
Me duele el estómago. = I have a stomach ache.
`,drills:`
Me ___ la cabeza. => duele | duelen | dolo | dolor # I have a headache.
Me ___ los ojos. => duelen | duele | dolen | duelo # My eyes hurt.
¿Te duele ___ espalda? => la | tu | su | mi # Does your back hurt?
A mi madre ___ duele la pierna. => le | la | me | se # My mother's leg hurts.
Tengo ___. Estoy a 38 grados. => fiebre | frío | calor | tos # I have a temperature. It's 38 degrees.
`},{t:`All about me: linking ideas`,k:`talk`,goal:`Write and say a short text about yourself using connectors`,body:`
## Linking your ideas
| | |
|---|---|
| {y} ({e} before i- / hi-) | and |
| {o} ({u} before o- / ho-) | or |
| {pero} | but |
| {porque} | because |
| {también} | also |
| {además} | besides, what's more |
| {por eso} | that's why |
| {entonces} | so, then |

!tip: {y} → {e} before an "i" sound: {padres e hijos}. {o} → {u} before an "o" sound: {siete u ocho}.

## A model text
> Me llamo Omar y tengo veintiocho años. = My name is Omar and I'm 28.
> Soy marroquí, pero vivo en Madrid porque trabajo aquí. = I'm Moroccan, but I live in Madrid because I work here.
> Soy ingeniero en una empresa de energía solar. = I'm an engineer at a solar energy company.
> Hablo árabe, francés e inglés, y ahora estoy aprendiendo español. = I speak Arabic, French and English, and now I'm learning Spanish.
> En mi tiempo libre juego al fútbol y cocino. Además, me encanta viajar. = In my free time I play football and cook. What's more, I love travelling.
> Mi familia vive en Rabat, por eso hablo con ellos por teléfono todos los días. = My family lives in Rabat, that's why I talk to them on the phone every day.

!tip: Now write your own! Name, age, origin, where you live, job or studies, languages, hobbies, family. Then read it aloud and record yourself in the Pronunciation lab.
`,words:`
y = and
e = and (before i-, hi-)
o = or
u = or (before o-, ho-)
pero = but
además = besides, what's more
por eso = that's why
entonces = so, then
el texto = text
la vida = life
el sueño = dream; sleep
`,phrases:`
Me llamo Omar y soy de Marruecos. = My name is Omar and I'm from Morocco.
Vivo en Madrid porque trabajo aquí. = I live in Madrid because I work here.
Hablo francés e inglés. = I speak French and English.
Tengo siete u ocho primos. = I have seven or eight cousins.
Me gusta leer. Además, me encanta el cine. = I like reading. What's more, I love the cinema.
Estoy cansado, por eso no salgo hoy. = I'm tired, that's why I'm not going out today.
`,drills:`
Hablo árabe ___ inglés. => e | y | o | u # I speak Arabic and English.
¿Quieres té ___ café? => o | u | e | pero # Do you want tea or coffee?
Tengo siete ___ ocho años de experiencia. => u | o | y | e # I have seven or eight years of experience.
Estoy cansado, ___ no voy a la fiesta. => por eso | porque | pero | además # I'm tired, that's why I'm not going to the party.
No voy a la fiesta ___ estoy cansado. => porque | por eso | por qué | además # I'm not going to the party because I'm tired.
Me gusta Madrid, ___ es muy cara. => pero | porque | y | o # I like Madrid, but it's very expensive.
`}],story:{title:`De compras en el Rastro`,text:`
Es domingo y Anna está en el Rastro, el mercado más famoso de Madrid. Hay muchísima gente.
= It's Sunday and Anna is at the Rastro, Madrid's most famous market. There are loads of people.

Anna está buscando una chaqueta para el invierno. Mira en una tienda pequeña.
= Anna is looking for a jacket for the winter. She looks in a small shop.

—Hola, ¿puedo ayudarle? —Sí, gracias. ¿Cuánto cuesta esa chaqueta negra? —Esta cuesta cuarenta euros.
= "Hello, can I help you?" "Yes, thanks. How much is that black jacket?" "This one costs forty euros."

—¿Me la puedo probar? —Claro. ¿Qué talla tiene? —La treinta y ocho.
= "Can I try it on?" "Of course. What size are you?" "Thirty-eight."

La chaqueta le queda un poco grande. —¿La tiene en una talla más pequeña? —Sí, aquí tiene la treinta y seis.
= The jacket is a bit big for her. "Do you have it in a smaller size?" "Yes, here's the thirty-six."

—¡Esta me queda perfecta! Me la llevo. ¿Puedo pagar con tarjeta? —Lo siento, aquí solo efectivo.
= "This one fits me perfectly! I'll take it. Can I pay by card?" "Sorry, cash only here."

Después de dos horas, a Anna le duelen los pies y tiene mucha hambre. Entonces va a un bar y pide un bocadillo de tortilla. ¡Qué buen domingo!
= After two hours, Anna's feet hurt and she's very hungry. So she goes to a bar and orders a tortilla sandwich. What a good Sunday!
`,questions:`
¿Qué es el Rastro? => Un mercado | Un museo | Un restaurante # What is the Rastro?
¿Cuánto cuesta la chaqueta? => Cuarenta euros | Catorce euros | Cuatrocientos euros # How much is the jacket?
¿Qué talla compra Anna? => La treinta y seis | La treinta y ocho | La cuarenta # Which size does Anna buy?
¿Por qué no paga con tarjeta? => Solo aceptan efectivo | No tiene tarjeta | Es muy caro # Why doesn't she pay by card?
¿Qué le duele a Anna? => Los pies | La cabeza | La espalda # What hurts?
`}},Os=s({default:()=>ks}),ks={n:10,title:`Pronouns & the market`,es:`En el mercado`,cando:[`I can replace objects with lo, la, los and las`,`I can say to whom with le and les`,`I can combine two pronouns: te lo, se lo…`,`I can buy food at the market using quantities`,`I can use possessive pronouns: el mío, la tuya…`,`I can use algo, nada, alguien, nadie and double negatives`],lessons:[{t:`Direct objects: lo, la, los, las`,k:`grammar`,goal:`Replace things and people with direct object pronouns`,body:`
## Who or what?
Direct object pronouns replace the thing or person that receives the action:
| | |
|---|---|
| {me} | me |
| {te} | you |
| {lo} | him, it (masc.), you (usted, masc.) |
| {la} | her, it (fem.), you (usted, fem.) |
| {nos} | us |
| {os} | you all |
| {los} | them (masc. / mixed) |
| {las} | them (fem.) |

> ¿Tienes el pasaporte? — Sí, lo tengo. = Have you got the passport? — Yes, I've got it.
> ¿Compras la fruta? — Sí, la compro. = Are you buying the fruit? — Yes, I'm buying it.
> ¿Ves a tus padres? — Los veo los domingos. = Do you see your parents? — I see them on Sundays.
> Te quiero. = I love you.

## Where does it go?
- **Before** a conjugated verb: {Lo compro.} {No la conozco.}
- **Attached** to an infinitive or gerund — or before the whole group: {Voy a comprarlo} = {Lo voy a comprar}; {Estoy leyéndolo} = {Lo estoy leyendo}.

!tip: Attaching to a gerund needs an accent to keep the stress: {leyendo} → {leyéndolo}.
!es: In much of Spain people say {le} instead of {lo} for a man: {Le veo} = I see him (*leísmo*). Both are accepted for male people.
!de: The pronoun goes *before* the verb: "Ich kaufe es" = {Lo compro}.
!ar: Arabic attaches the object to the verb (أشتريه، أراها); Spanish puts it in front: {Lo compro}, {La veo}.
`,words:`
lo = him, it (masc.)
la = her, it (fem.)
los = them (masc.)
las = them (fem.)
me = me
te = you
nos = us
el pasaporte = passport
el billete = ticket
la maleta = suitcase
las gafas de sol = sunglasses
olvidar = to forget
`,phrases:`
¿Dónde está mi móvil? No lo encuentro. = Where's my mobile? I can't find it.
¿La conoces? — Sí, la conozco del trabajo. = Do you know her? — Yes, I know her from work.
Los billetes los tengo yo. = I've got the tickets.
Te llamo esta noche. = I'll call you tonight.
¿Me ayudas? = Will you help me?
Voy a comprarlas mañana. = I'm going to buy them tomorrow.
`,drills:`
¿Tienes las llaves? — Sí, ___ tengo. => las | los | la | les # Have you got the keys? — Yes, I've got them.
¿Compras el pan? — Sí, ___ compro. => lo | la | le | los # Are you buying the bread? — Yes, I'm buying it.
¿Ves a María? — No, no ___ veo. => la | lo | le | las # Do you see María? — No, I don't see her.
¿Conoces a mis hermanos? — Sí, ___ conozco. => los | las | les | lo # Do you know my brothers? — Yes, I know them.
La maleta… voy a hacer___ ahora. => la | lo | le | las # The suitcase… I'm going to pack it now.
¿___ quieres? — Sí, te quiero mucho. => Me | Te | Lo | Nos # Do you love me? — Yes, I love you very much.
`},{t:`Indirect objects: le, les`,k:`grammar`,goal:`Say to whom or for whom you do something`,body:`
## To whom?
Indirect objects say **to whom** or **for whom** something is done:
| | |
|---|---|
| {me} | to me |
| {te} | to you |
| {le} | to him, to her, to you (usted) |
| {nos} | to us |
| {os} | to you all |
| {les} | to them, to you (ustedes) |

> Le doy el libro a Ana. = I give the book to Ana.
> ¿Me pasas la sal? = Can you pass me the salt?
> Les escribo a mis padres. = I write to my parents.
> Te compro un helado. = I'll buy you an ice cream.

!tip: Spanish usually keeps **both** the pronoun and the person: {Le doy el libro a Ana.} Without {le} it sounds incomplete!
!tip: You already know these pronouns from gustar: {A Ana le gusta…}

## Verbs that often take an indirect object
{dar} (give), {decir} (say, tell), {escribir} (write), {enviar} / {mandar} (send), {regalar} (give as a present), {prestar} (lend), {explicar} (explain), {preguntar} (ask), {contestar} (answer).

!de: {le} / {les} ≈ ihm / ihr / ihnen — the dative: {Le doy el libro} = Ich gebe ihm das Buch.
!ar: {le} ≈ لَهُ / لَها: {Le escribo} ≈ أكتب له.
`,words:`
le = (to) him, (to) her, (to) you (formal)
les = (to) them, (to) you all (formal)
dar = to give
decir = to say, to tell
regalar = to give (as a present)
prestar = to lend
explicar = to explain
mandar = to send
el regalo = present, gift
la sal = salt
el mensaje = message
contestar = to answer
`,phrases:`
Le doy el regalo a mi madre. = I give the present to my mother.
¿Me prestas tu bolígrafo? = Will you lend me your pen?
Les mando un mensaje a mis amigos. = I send a message to my friends.
¿Qué le regalas a tu novia? = What are you giving your girlfriend?
El profesor nos explica la gramática. = The teacher explains the grammar to us.
¿Me pasas la sal, por favor? = Could you pass me the salt, please?
`,drills:`
___ doy el libro a Pedro. => Le | Lo | Les | La # I give the book to Pedro.
___ escribo a mis padres cada semana. => Les | Le | Los | Las # I write to my parents every week.
¿___ prestas tu coche? (to me) => Me | Te | Le | Mi # Will you lend me your car?
La profesora ___ explica la lección. (to us) => nos | os | les | nuestro # The teacher explains the lesson to us.
¿Qué ___ vas a regalar a tu hermano? => le | lo | les | la # What are you going to give your brother?
`},{t:`Two pronouns: te lo, se lo`,k:`grammar`,goal:`Combine indirect and direct pronouns correctly`,body:`
## Indirect + direct
With two pronouns, the **indirect** (person) comes first, then the **direct** (thing):
> ¿Me das el libro? — Sí, te lo doy. = Will you give me the book? — Yes, I'll give it to you.
> Nos la explica. = He explains it to us.

## le / les + lo / la → se
**le** and **les** become **se** before {lo}, {la}, {los}, {las}:
> ¿Le das el regalo a Ana? — Sí, se lo doy. = Are you giving Ana the present? — Yes, I'm giving it to her.
> ¿Les mandas las fotos? — Sí, se las mando. = Are you sending them the photos? — Yes, I'm sending them.

!warn: Never "le lo" — it's always {se lo}.

## With infinitives and commands
Both pronouns attach to the end, with an accent: {Voy a dártelo.} (I'm going to give it to you.) {¡Dímelo!} (Tell me!)

!de: The opposite order to German: "Ich gebe es dir" = {Te lo doy} (to-you it I-give).
!ar: Like أعطيتُكَ إيّاه — the person first, then the thing: {te lo doy}.
`,words:`
me lo = it to me
te lo = it to you
se lo = it to him / her / them
nos lo = it to us
dímelo = tell me (it)
el secreto = secret
la noticia = piece of news
la contraseña = password
la receta = recipe; prescription
devolver = to give back
enseñar = to show; to teach
`,phrases:`
¿Me das tu número? — Sí, te lo doy. = Will you give me your number? — Yes, I'll give it to you.
¿Le cuentas el secreto a Ana? — No, no se lo cuento. = Are you telling Ana the secret? — No, I'm not telling her.
Te la enseño mañana. = I'll show it to you tomorrow.
¿Me devuelves el libro? — Sí, te lo devuelvo hoy. = Will you give me back the book? — Yes, I'll give it back today.
Mi abuela nos lo explica todo. = My grandmother explains everything to us.
¡Dímelo! = Tell me!
`,drills:`
¿Me das el libro? — Sí, te ___ doy. => lo | la | le | se # Will you give me the book? — Yes, I'll give it to you.
¿Le das la carta a Juan? — Sí, ___ la doy. => se | le | lo | te # Are you giving the letter to Juan? — Yes, I'm giving it to him.
¿Nos explicas el problema? — Sí, ___ lo explico. => os | nos | les | se # Will you explain the problem to us? — Yes, I'll explain it to you.
¿Les mandas las fotos? — Sí, se ___ mando. => las | los | les | la # Are you sending them the photos? — Yes, I'm sending them.
Es un secreto, pero quiero ___. => decírtelo | decirtelo | decírlote | telodecir # It's a secret, but I want to tell you.
`},{t:`At the market: quantities`,k:`talk`,goal:`Buy fruit, vegetables and other food with quantities`,body:`
## Buying food
> ¿Qué le pongo? = What can I get you?
> Póngame un kilo de tomates, por favor. = A kilo of tomatoes, please.
> Medio kilo de fresas. = Half a kilo of strawberries.
> Una docena de huevos. = A dozen eggs.
> Cien gramos de queso. = A hundred grams of cheese.
> ¿Algo más? — No, nada más, gracias. = Anything else? — No, nothing else, thanks.
> ¿Cuánto es todo? = How much is it altogether?

## Quantities & containers
| | |
|---|---|
| {un kilo de} | a kilo of |
| {medio kilo de} | half a kilo of |
| {cien gramos de} | 100 grams of |
| {un litro de} | a litre of |
| {una docena de} | a dozen |
| {una botella de} | a bottle of |
| {un paquete de} | a packet of |
| {una lata de} | a tin / can of |
| {una barra de pan} | a baguette |
| {un trozo de} | a piece of |

## Fruit & veg
{las manzanas} (apples), {los plátanos} (bananas), {las naranjas} (oranges), {las fresas} (strawberries), {las uvas} (grapes), {las cebollas} (onions), {los pimientos} (peppers), {las zanahorias} (carrots), {el ajo} (garlic), {la lechuga} (lettuce).

!es: When you arrive at a market stall, ask {¿Quién es el último?} — "Who's last in the queue?" — and you'll know when it's your turn.
!ar: Arabic gave Spanish {la zanahoria}, {la naranja}, {la aceituna} (الزيتونة) and {el aceite} (الزيت)!
`,words:`
el kilo = kilo
medio, media = half
la docena = dozen
el gramo = gram
el litro = litre
la botella = bottle
el paquete = packet
la lata = tin, can
la manzana = apple
el plátano = banana
las fresas = strawberries
la cebolla = onion
el ajo = garlic
¿algo más? = anything else?
`,phrases:`
Un kilo de manzanas, por favor. = A kilo of apples, please.
Póngame medio kilo de fresas. = Give me half a kilo of strawberries.
¿Me da una docena de huevos? = Could I have a dozen eggs?
¿Algo más? — No, nada más, gracias. = Anything else? — No, nothing else, thanks.
¿Cuánto es todo? = How much is it altogether?
¿Quién es el último? = Who's last in the queue?
`,drills:`
Un ___ de leche, por favor. => litro | kilo | docena | gramo # A litre of milk, please.
Una ___ de huevos. => docena | botella | lata | barra # A dozen eggs.
Medio ___ de tomates. => kilo | litro | botella | docena # Half a kilo of tomatoes.
Una ___ de agua. => botella | barra | docena | kilo # A bottle of water.
¿Algo ___? — No, nada más. => más | menos | mucho | poco # Anything else? — No, nothing else.
Una ___ de pan. => barra | lata | docena | botella # A baguette.
`},{t:`Mine, yours: possessive pronouns`,k:`grammar`,goal:`Say whose things are with el mío, la tuya, los suyos…`,body:`
## Possessive pronouns
| | masc. | fem. |
|---|---|---|
| mine | {el mío / los míos} | {la mía / las mías} |
| yours (tú) | {el tuyo / los tuyos} | {la tuya / las tuyas} |
| his, hers, yours (usted) | {el suyo / los suyos} | {la suya / las suyas} |
| ours | {el nuestro / los nuestros} | {la nuestra / las nuestras} |
| yours (vosotros) | {el vuestro / los vuestros} | {la vuestra / las vuestras} |
| theirs, yours (ustedes) | {el suyo / los suyos} | {la suya / las suyas} |

> Mi coche es blanco. ¿Y el tuyo? = My car is white. And yours?
> Esta maleta es la mía. = This suitcase is mine.
> ¿Es tuyo este bolígrafo? — Sí, es mío. = Is this pen yours? — Yes, it's mine.

!tip: After **ser** you can drop the article: {Es mío.} {¿Es tuya?}
!tip: They also follow nouns: {un amigo mío} = a friend of mine.
!de: Like German "meiner / meine / meins": {la mía} = meine.
!ar: {Es mío} ≈ هو لي / تبعي.
`,words:`
mío, mía = mine
tuyo, tuya = yours (informal)
suyo, suya = his, hers, theirs, yours (formal)
nuestro, nuestra = ours
un amigo mío = a friend of mine
el bolígrafo = pen
el paraguas = umbrella
la mochila = backpack
el asiento = seat
la cartera = wallet
`,phrases:`
¿De quién es este paraguas? — Es mío. = Whose umbrella is this? — It's mine.
Mi mochila es azul. ¿Y la tuya? = My backpack is blue. And yours?
Estos asientos son los nuestros. = These seats are ours.
Mi piso es pequeño, pero el suyo es enorme. = My flat is small, but his is huge.
Carlos es un amigo mío. = Carlos is a friend of mine.
¿Es tuya esta cartera? = Is this wallet yours?
`,drills:`
Este bolígrafo es ___. (mine) => mío | mía | mi | míos # This pen is mine.
Mi casa es grande. ¿Y la ___? (yours, tú) => tuya | tuyo | tu | tuyas # My house is big. And yours?
Estas maletas son las ___. (ours) => nuestras | nuestros | nuestra | vuestras # These suitcases are ours.
¿Es ___ esta mochila, señora? (yours, usted) => suya | suyo | tuya | su # Is this backpack yours, madam?
Mis zapatos son negros y los ___ son marrones. (yours, vosotros) => vuestros | vuestras | nuestros | suyos # My shoes are black and yours are brown.
`},{t:`Something, nothing, someone, no one`,k:`grammar`,goal:`Use positive and negative words, including double negatives`,body:`
## Positive & negative words
| positive | negative |
|---|---|
| {algo} — something | {nada} — nothing |
| {alguien} — someone | {nadie} — no one |
| {algún / alguna} — some, any | {ningún / ninguna} — no, not any |
| {siempre} — always | {nunca} — never |
| {también} — also | {tampoco} — neither |

> ¿Quieres algo? — No, no quiero nada. = Do you want something? — No, I don't want anything.
> ¿Hay alguien en casa? — No, no hay nadie. = Is anyone at home? — No, there's no one.
> ¿Tienes algún libro en español? — No, no tengo ninguno. = Do you have any books in Spanish? — No, I don't have any.

## Double negatives are correct!
If the negative word comes **after** the verb, you need **no** before the verb: {No veo nada.} {No viene nadie.} {No voy nunca.}
If it comes first, no {no}: {Nadie viene.} {Nunca voy.}

!tip: {alguno} / {ninguno} shorten before a masculine noun: {algún día}, {ningún problema}. {ninguno} is almost always singular.
!de: German forbids double negatives ("Ich sehe nichts"); Spanish requires them: {No veo nada}.
!ar: Like Arabic, the negation stays on the verb: لا أرى شيئًا ≈ {No veo nada}.
`,words:`
algo = something
nada = nothing
alguien = someone
nadie = no one, nobody
algún, alguna = some, any
ningún, ninguna = no, not any
ninguno = none
algún día = some day
ningún problema = no problem
nada más = nothing else
`,phrases:`
¿Quieres algo de beber? = Would you like something to drink?
No quiero nada, gracias. = I don't want anything, thanks.
¿Hay alguien aquí? — No, no hay nadie. = Is anyone here? — No, there's no one.
Nunca como carne. = I never eat meat.
No tengo ningún problema. = I don't have any problem.
Nadie habla alemán aquí. = Nobody speaks German here.
`,drills:`
No veo ___. => nada | algo | alguien | ningún # I can't see anything.
¿Hay ___ en la puerta? — No, no hay nadie. => alguien | nadie | algo | nada # Is there someone at the door? — No, there's no one.
No tengo ___ libro en español. => ningún | ninguno | algún | ninguna # I don't have any book in Spanish.
___ viene a la fiesta. ¡Qué desastre! => Nadie | Alguien | Nada | Nunca # Nobody is coming to the party. What a disaster!
¿Quieres ___? — No, gracias. => algo | nada | nadie | ningún # Do you want something? — No, thanks.
No voy ___ al gimnasio. => nunca | siempre | algo | nadie # I never go to the gym.
`}],story:{title:`El tajín de Omar`,text:`
Esta noche Omar va a cocinar para sus amigos: va a hacer un tajín marroquí. Por la mañana va al mercado del barrio.
= Tonight Omar is going to cook for his friends: he's going to make a Moroccan tagine. In the morning he goes to the neighbourhood market.

En la frutería pregunta: —¿Quién es el último? —Soy yo —contesta una señora mayor.
= At the greengrocer's he asks: "Who's last in the queue?" "I am," answers an elderly lady.

—¿Qué le pongo? —Un kilo de tomates, medio kilo de cebollas y unas zanahorias, por favor. —¿Algo más? —Sí, una cabeza de ajo y un limón.
= "What can I get you?" "A kilo of tomatoes, half a kilo of onions and some carrots, please." "Anything else?" "Yes, a head of garlic and a lemon."

Después compra pollo y aceitunas, pero no encuentra ras el hanut, su mezcla de especias favorita. No la venden en ninguna tienda.
= Then he buys chicken and olives, but he can't find ras el hanout, his favourite spice mix. No shop sells it.

Por la tarde llama a su madre: —Mamá, no tengo ras el hanut. ¿Qué hago? —Tranquilo, hijo. Usa comino, canela y pimienta. ¡Te va a quedar muy rico!
= In the afternoon he calls his mother: "Mum, I don't have ras el hanout. What do I do?" "Don't worry, son. Use cumin, cinnamon and pepper. It'll turn out really tasty!"

Omar no tiene una cazuela grande, así que Laura le presta la suya. —¿Me la devuelves mañana? —¡Claro, te la devuelvo mañana!
= Omar doesn't have a big pot, so Laura lends him hers. "Will you give it back to me tomorrow?" "Of course, I'll give it back tomorrow!"

A las nueve llegan los amigos. Nadie conoce el tajín, pero a todos les encanta. —¡Está buenísimo, Omar! ¿Nos das la receta? —Os la doy, ¡pero es un secreto de mi madre!
= At nine the friends arrive. Nobody knows tagine, but they all love it. "It's delicious, Omar! Will you give us the recipe?" "I'll give it to you — but it's my mother's secret!"
`,questions:`
¿Qué va a cocinar Omar? => Un tajín | Una paella | Una tortilla # What is Omar going to cook?
¿Qué no encuentra Omar? => Ras el hanut | Tomates | Pollo # What can't Omar find?
¿Qué le presta Laura? => Una cazuela | Un cuchillo | Dinero # What does Laura lend him?
¿Qué piden los amigos? => La receta | Más comida | La cuenta # What do the friends ask for?
`}},As=s({default:()=>js}),js={n:11,title:`What have you done? — perfect tense`,es:`¿Qué has hecho hoy?`,cando:[`I can form the present perfect: he hablado, has comido…`,`I can use the irregular participles: hecho, dicho, visto…`,`I can say what I have done today or this week`,`I can talk about life experiences: ¿Has estado alguna vez…?`,`I can use ya, todavía no, alguna vez and nunca`,`I can give news and react to news`],lessons:[{t:`He hablado: the present perfect`,k:`grammar`,goal:`Form the present perfect with haber + participle`,body:`
## haber + participle
| | haber | + participle |
|---|---|---|
| {yo} | {he} | {hablado} |
| {tú} | {has} | {comido} |
| {él / ella / usted} | {ha} | {vivido} |
| {nosotros} | {hemos} | |
| {vosotros} | {habéis} | |
| {ellos / ellas / ustedes} | {han} | |

**Participle:** -ar → **-ado** ({hablado}); -er / -ir → **-ido** ({comido}, {vivido}).

> Hoy he trabajado mucho. = I've worked a lot today.
> ¿Has comido? = Have you eaten?
> Hemos vivido en Londres. = We've lived in London.

!tip: The participle never changes here (always -o), and nothing goes between haber and the participle: {No lo he visto} (I haven't seen it).
!es: In **Spain** this tense is used for anything that happened **today** or in a time period that isn't over: {Esta mañana he desayunado tarde.} Latin America prefers the simple past.
!de: Like the German Perfekt, but always with **haber** — never "ser": "Ich bin gegangen" = {He ido}.
!ar: Close to قد + past for recent events: {He comido} ≈ قد أكلتُ.
`,words:`
haber = to have (auxiliary)
he = I have (done)
has = you have (done)
ha = he / she has (done)
hemos = we have (done)
han = they have (done)
hablado = spoken
comido = eaten
vivido = lived
estado = been
ido = gone
trabajado = worked
`,phrases:`
Hoy he trabajado mucho. = I've worked a lot today.
¿Has comido ya? = Have you eaten yet?
Esta mañana hemos ido al mercado. = This morning we went to the market.
Mis padres han llegado a Madrid. = My parents have arrived in Madrid.
¿Habéis estado en Sevilla? = Have you (all) been to Seville?
No he dormido bien. = I haven't slept well.
`,drills:`
Hoy ___ trabajado diez horas. (yo) => he | ha | has | hemos # Today I've worked ten hours.
¿___ comido ya? (tú) => Has | Ha | He | Habéis # Have you eaten yet?
Nosotros ___ vivido en Alemania. => hemos | habemos | han | habéis # We've lived in Germany.
Mis amigos han ___ a la fiesta. (ir) => ido | iendo | yendo | idos # My friends have gone to the party.
Esta mañana he ___ con mi madre. (hablar) => hablado | hablando | hablada | hablé # This morning I've spoken to my mother.
¿Vosotros ___ estado en Granada? => habéis | hemos | han | has # Have you (all) been to Granada?
`},{t:`Irregular participles`,k:`grammar`,goal:`Use the most common irregular participles`,body:`
## Learn these by heart
| infinitive | participle | |
|---|---|---|
| {hacer} | {hecho} | done, made |
| {decir} | {dicho} | said |
| {ver} | {visto} | seen |
| {escribir} | {escrito} | written |
| {poner} | {puesto} | put |
| {volver} | {vuelto} | come back |
| {abrir} | {abierto} | opened |
| {romper} | {roto} | broken |
| {morir} | {muerto} | died |
| {descubrir} | {descubierto} | discovered |
| {resolver} | {resuelto} | solved |

!tip: Compounds keep the irregularity: {devolver} → {devuelto}, {deshacer} → {deshecho}, {describir} → {descrito}.
!tip: {leer}, {traer}, {caer} and {oír} add an accent: {leído}, {traído}, {caído}, {oído}.

> ¿Qué has hecho hoy? = What have you done today?
> No he visto la película. = I haven't seen the film.
> Se ha roto el móvil. = The mobile has broken.
> ¿Quién ha abierto la ventana? = Who has opened the window?

!de: Just like German strong verbs — learn them: {hecho} = gemacht, {visto} = gesehen, {dicho} = gesagt.
`,words:`
hecho = done, made
dicho = said
visto = seen
escrito = written
puesto = put
vuelto = come back, returned
abierto = opened
roto = broken
muerto = died, dead
leído = read
oído = heard
descubierto = discovered
`,phrases:`
¿Qué has hecho hoy? = What have you done today?
No he visto esa película. = I haven't seen that film.
¿Quién ha dicho eso? = Who said that?
He escrito un correo a mi jefe. = I've written an email to my boss.
Mi hermano ha roto la ventana. = My brother has broken the window.
¿Has leído el libro? = Have you read the book?
`,drills:`
¿Qué has ___ hoy? (hacer) => hecho | hacido | hacho | haciendo # What have you done today?
No he ___ esa película. (ver) => visto | vido | veído | vista # I haven't seen that film.
¿Quién ha ___ la puerta? (abrir) => abierto | abrido | abrito | abierta # Who has opened the door?
Mi madre ha ___ una carta. (escribir) => escrito | escribido | escrita | escribito # My mother has written a letter.
¿Dónde has ___ las llaves? (poner) => puesto | ponido | ponto | pusto # Where have you put the keys?
Ya hemos ___ de vacaciones. (volver) => vuelto | volvido | vuelvido | volto # We've already come back from holiday.
`},{t:`Ya, todavía no, alguna vez`,k:`grammar`,goal:`Use time markers with the present perfect`,body:`
## Time markers for the perfect
| | |
|---|---|
| {hoy} | today |
| {esta mañana / tarde / semana} | this morning / afternoon / week |
| {este mes / año} | this month / year |
| {ya} | already; yet (in questions) |
| {todavía no} / {aún no} | not yet |
| {alguna vez} | ever |
| {nunca} | never |
| {últimamente} | lately |
| {hace un rato} | a little while ago |

> ¿Has terminado ya? — Sí, ya he terminado. = Have you finished yet? — Yes, I've already finished.
> Todavía no he comido. = I haven't eaten yet.
> ¿Has estado alguna vez en México? = Have you ever been to Mexico?
> Nunca he probado el pulpo. = I've never tried octopus.

!tip: {ya} goes before haber or at the end: {Ya lo he hecho} = {Lo he hecho ya}.
!de: {ya} = schon, {todavía no} = noch nicht, {alguna vez} = schon mal / jemals.
!ar: {ya} ≈ قد / خلاص، {todavía no} ≈ ليس بعد / لسّا.
`,words:`
ya = already; yet
todavía no = not yet
aún no = not yet
alguna vez = ever
últimamente = lately
hace un rato = a little while ago
esta semana = this week
este año = this year
terminar = to finish
el pulpo = octopus
`,phrases:`
¿Has terminado ya? — Sí, ya he terminado. = Have you finished yet? — Yes, I've already finished.
Todavía no he comido. = I haven't eaten yet.
¿Has estado alguna vez en Barcelona? = Have you ever been to Barcelona?
Nunca he probado el pulpo. = I've never tried octopus.
Esta semana he trabajado mucho. = This week I've worked a lot.
He llamado a Ana hace un rato. = I called Ana a little while ago.
`,drills:`
¿Has hecho ___ los deberes? (yet) => ya | todavía | nunca | aún # Have you done your homework yet?
___ no he terminado. (not yet) => Todavía | Ya | Nunca | Alguna # I haven't finished yet.
¿Has estado ___ en Cuba? (ever) => alguna vez | nunca | todavía | ya no # Have you ever been to Cuba?
___ he visto un fantasma. (never) => Nunca | Alguna vez | Todavía | Ya # I've never seen a ghost.
Esta ___ he ido dos veces al cine. => semana | mes | año | días # This week I've been to the cinema twice.
`},{t:`Have you ever…? Experiences`,k:`talk`,goal:`Talk about travel and life experiences`,body:`
## Talking about experiences
> ¿Has estado alguna vez en España? = Have you ever been to Spain?
> Sí, he estado dos veces. = Yes, I've been twice.
> No, no he estado nunca, pero me gustaría. = No, I've never been, but I'd like to.
> He viajado por toda Europa. = I've travelled all over Europe.
> ¿Has probado la paella? = Have you tried paella?
> He visto la Alhambra. ¡Es preciosa! = I've seen the Alhambra. It's beautiful!

## Countries
{Francia}, {Portugal}, {Italia}, {Grecia}, {Turquía}, {Túnez}, {Argelia}, {Jordania}, {Arabia Saudí}, {los Emiratos}, {Suiza}, {Austria}, {los Países Bajos}, {Japón}, {China}, {la India}, {México}, {Argentina}, {Colombia}.

!es: Must-sees in Spain: {la Alhambra} in Granada, {la Mezquita} in Córdoba (a mosque that became a cathedral), {la Sagrada Familia} in Barcelona, {el Museo del Prado} in Madrid and {el Camino de Santiago}.
!ar: Andalusia will feel familiar: {la Alhambra} (الحمراء, "the red one"), the {Giralda} in Seville (once a minaret) and the {Mezquita de Córdoba} are treasures of al-Andalus.
`,words:`
la experiencia = experience
el viaje = trip, journey
el país = country
el extranjero = abroad
el mundo = world
precioso, preciosa = beautiful, lovely
probar = to try, to taste
me gustaría = I would like (to)
Portugal = Portugal
Grecia = Greece
Turquía = Turkey
Túnez = Tunisia
Suiza = Switzerland
`,phrases:`
¿Has estado alguna vez en Granada? = Have you ever been to Granada?
He estado en Portugal dos veces. = I've been to Portugal twice.
Nunca he viajado al extranjero. = I've never travelled abroad.
Me gustaría ver la Alhambra. = I'd like to see the Alhambra.
¿Has probado el gazpacho? = Have you tried gazpacho?
Este viaje ha sido increíble. = This trip has been incredible.
`,drills:`
¿Has estado ___ vez en Italia? => alguna | algún | ningún | nunca # Have you ever been to Italy?
He estado en Grecia dos ___. => veces | vez | días | viajes # I've been to Greece twice.
Nunca he ___ el pulpo. (probar) => probado | probando | probé | prueba # I've never tried octopus.
Mis padres nunca han viajado al ___. => extranjero | extraño | exterior | estranjero # My parents have never travelled abroad.
Me ___ visitar Japón. (I'd like) => gustaría | gusta | gustan | gusto # I'd like to visit Japan.
`},{t:`Reflexives & pronouns in the perfect`,k:`grammar`,goal:`Tell someone about your day using pronouns with the perfect`,body:`
## Pronoun + haber + participle
All pronouns — reflexive, direct and indirect — go **before haber**:
> Me he levantado tarde. = I got up late.
> ¿Te has duchado? = Have you showered?
> Lo he comprado esta mañana. = I bought it this morning.
> Se lo he dicho a Ana. = I've told Ana. (I've said it to her)
> No nos hemos visto. = We haven't seen each other.

!warn: Never split haber and the participle: {Lo he visto} — never "he lo visto".

## Your day so far
> ¿Qué has hecho hoy? = What have you done today?
> Me he despertado a las siete, me he duchado y he desayunado. = I woke up at seven, showered and had breakfast.
> Después he ido a clase y he comido con unos amigos. = Then I went to class and had lunch with some friends.

!tip: In Spain this tense is the most natural way to tell someone about **today**.
!de: German puts the participle at the end ("Ich habe mich geduscht"); Spanish keeps the group together: {Me he duchado}.
`,words:`
me he levantado = I've got up
te has duchado = you've showered
se ha ido = he / she has left
nos hemos visto = we've seen each other
lo he comprado = I've bought it
se lo he dicho = I've told him / her
quedarse dormido = to oversleep; to fall asleep
el jefe, la jefa = boss
la reunión = meeting
llegar tarde = to be late
`,phrases:`
Hoy me he levantado muy temprano. = Today I got up very early.
¿Te has duchado ya? = Have you showered yet?
Me he quedado dormido y he llegado tarde. = I overslept and I was late.
¿Se lo has dicho a tu jefe? = Have you told your boss?
Lo he comprado en el mercado. = I bought it at the market.
Nos hemos visto en la reunión. = We saw each other at the meeting.
`,drills:`
Hoy ___ he levantado tarde. => me | te | se | lo # Today I got up late.
¿___ has duchado? (tú) => Te | Me | Se | Tú # Have you showered?
Ana ___ ha ido a casa. => se | le | la | me # Ana has gone home.
El libro… ya ___ he leído. => lo | la | le | los # The book… I've already read it.
¿Se lo ___ dicho a tus padres? (tú) => has | he | ha | habéis # Have you told your parents?
Nosotros ___ hemos despertado a las seis. => nos | os | se | me # We woke up at six.
`},{t:`Giving news & reacting`,k:`talk`,goal:`Share news and react with the right expression`,body:`
## Giving news
> ¿Sabes qué? = Guess what?
> ¡Me han dado el trabajo! = I've got the job! (they've given me the job)
> He aprobado el examen. = I've passed the exam.
> He suspendido el examen. = I've failed the exam.
> Mi hermana ha tenido un bebé. = My sister has had a baby.
> Hemos comprado un piso. = We've bought a flat.

## Reacting
| | |
|---|---|
| {¡Qué bien!} | Great! |
| {¡Enhorabuena!} / {¡Felicidades!} | Congratulations! |
| {¡Qué suerte!} | How lucky! |
| {¡No me digas!} | No way! / You don't say! |
| {¿De verdad?} | Really? |
| {¡Qué pena!} / {¡Qué lástima!} | What a shame! |
| {¡Qué mala suerte!} | What bad luck! |
| {¡Ánimo!} | Cheer up! / Keep going! |

!es: {¡Enhorabuena!} is for achievements (exams, jobs, babies); {¡Felicidades!} also means "happy birthday". When someone sneezes, say {¡Jesús!} or {¡Salud!}
!ar: {¡Enhorabuena!} ≈ مبروك, and {¡Qué pena!} ≈ يا خسارة.
`,words:`
aprobar = to pass (an exam)
suspender = to fail (an exam)
¡enhorabuena! = congratulations!
¡felicidades! = congratulations! happy birthday!
¡qué suerte! = how lucky!
¡qué pena! = what a shame!
¡no me digas! = no way! you don't say!
¿de verdad? = really?
¡ánimo! = cheer up! keep going!
el bebé = baby
la suerte = luck
`,phrases:`
¡He aprobado el examen! — ¡Enhorabuena! = I've passed the exam! — Congratulations!
Me han dado el trabajo. — ¡Qué bien! = I've got the job. — Great!
He suspendido. — ¡Qué pena! ¡Ánimo! = I've failed. — What a shame! Keep going!
Mi hermana ha tenido un bebé. — ¿De verdad? ¡Felicidades! = My sister has had a baby. — Really? Congratulations!
Hemos ganado la lotería. — ¡No me digas! = We've won the lottery. — No way!
Tengo una buena noticia. = I've got some good news.
`,drills:`
He aprobado el examen. — ¡___! => Enhorabuena | Qué pena | Lo siento | Ánimo # I've passed the exam. — Congratulations!
He perdido el tren. — ¡Qué ___! => pena | bien | suerte | bonito # I've missed the train. — What a shame!
Hemos ganado un viaje a Japón. — ¡Qué ___! => suerte | pena | lástima | mal # We've won a trip to Japan. — How lucky!
Lucía ha ___ el examen de conducir. ¡Tiene que repetirlo! => suspendido | aprobado | ganado | pasado # Lucía has failed her driving test. She has to retake it!
Tengo una buena ___: ¡me caso! => noticia | noticias | nota | novela # I've got some good news: I'm getting married!
`}],story:{title:`Un día de mala suerte`,text:`
Hoy ha sido un día horrible para Omar. Esta mañana no ha sonado el despertador y se ha quedado dormido.
= Today has been a horrible day for Omar. This morning his alarm didn't go off and he overslept.

Se ha levantado a las nueve, no se ha duchado y ha salido de casa sin desayunar.
= He got up at nine, didn't shower and left home without breakfast.

Ha perdido el autobús y ha llegado tarde a una reunión muy importante. Su jefa no le ha dicho nada, pero no está contenta.
= He missed the bus and arrived late to a very important meeting. His boss hasn't said anything to him, but she isn't happy.

Al mediodía se ha manchado la camisa de café, y por la tarde ha roto la pantalla del móvil.
= At midday he spilled coffee on his shirt, and in the afternoon he broke his phone screen.

Por la noche llama a Laura. —¿Qué tal tu día? —Fatal. Todo ha salido mal. —¡Qué mala suerte! Pero tengo una buena noticia.
= In the evening he calls Laura. "How was your day?" "Terrible. Everything went wrong." "What bad luck! But I've got some good news."

—¿Ah, sí? ¿Qué ha pasado? —¡He aprobado el examen de inglés! —¿De verdad? ¡Enhorabuena!
= "Oh yes? What's happened?" "I've passed my English exam!" "Really? Congratulations!"

—¿Y sabes qué? Nunca he estado en Marruecos y en verano quiero ir. ¿Me enseñas tu país? —¡Claro que sí! Ahora mi día es mucho mejor.
= "And guess what? I've never been to Morocco and I want to go this summer. Will you show me your country?" "Of course! Now my day is much better."
`,questions:`
¿Por qué se ha quedado dormido Omar? => No ha sonado el despertador | Está enfermo | Ha trabajado mucho # Why did Omar oversleep?
¿Por qué ha llegado tarde a la reunión? => Ha perdido el autobús | Ha ido a pie | Ha desayunado mucho # Why was he late for the meeting?
¿Qué le ha pasado al móvil? => Ha roto la pantalla | Lo ha perdido | No tiene batería # What happened to his mobile?
¿Qué buena noticia tiene Laura? => Ha aprobado el examen de inglés | Tiene un trabajo nuevo | Se va a casar # What good news does Laura have?
`}},Ms=s({default:()=>Ns}),Ns={n:12,title:`Last weekend — the preterite`,es:`¿Qué hiciste ayer?`,cando:[`I can form the preterite of regular -ar, -er and -ir verbs`,`I can use spelling changes: busqué, llegué, empecé, leyó`,`I can use the key irregular preterites: fui, hice, tuve, estuve, dije…`,`I can say when things happened: ayer, anoche, hace dos años…`,`I can tell someone what I did last weekend`],lessons:[{t:`Preterite: -ar verbs`,k:`grammar`,goal:`Talk about finished past actions with -ar verbs`,body:`
## The simple past (pretérito indefinido)
Use it for **finished actions** at a specific time in the past: yesterday, last week, in 2015.
| | hablar | trabajar |
|---|---|---|
| {yo} | {habl[é]} | {trabaj[é]} |
| {tú} | {habl[aste]} | {trabaj[aste]} |
| {él / ella / usted} | {habl[ó]} | {trabaj[ó]} |
| {nosotros} | {habl[amos]} | {trabaj[amos]} |
| {vosotros} | {habl[asteis]} | {trabaj[asteis]} |
| {ellos / ellas / ustedes} | {habl[aron]} | {trabaj[aron]} |

> Ayer hablé con mi madre. = Yesterday I spoke to my mother.
> ¿Trabajaste el sábado? = Did you work on Saturday?
> El verano pasado viajamos a Italia. = Last summer we travelled to Italy.

!warn: Accents change the meaning: {hablo} (I speak) ≠ {habló} (he spoke).
!tip: The nosotros form is the same as in the present: {hablamos} = we speak / we spoke. The context tells you which.
!es: In Spain: **today, this week** → perfect ({he hablado}); **yesterday, last week, in 2010** → preterite ({hablé}).
!de: Like the German Präteritum ("ich sprach") — but Spanish uses it all the time in everyday speech.
!ar: This is the Spanish الماضي: {hablé} ≈ تكلّمتُ.
`,words:`
hablé = I spoke
hablaste = you spoke
habló = he / she spoke
ayer = yesterday
anoche = last night
anteayer = the day before yesterday
el fin de semana pasado = last weekend
la semana pasada = last week
el verano pasado = last summer
llegar = to arrive
esperar = to wait; to hope
ganar = to win; to earn
`,phrases:`
Ayer hablé con mi madre. = Yesterday I spoke to my mother.
¿A qué hora llegaste anoche? = What time did you arrive last night?
El verano pasado viajamos a Italia. = Last summer we travelled to Italy.
Mis amigos bailaron toda la noche. = My friends danced all night.
¿Ganó tu equipo el sábado? = Did your team win on Saturday?
Te esperé una hora. = I waited for you for an hour.
`,drills:`
Ayer ___ con Ana. (hablar, yo) => hablé | hablo | habló | hable # Yesterday I spoke to Ana.
¿A qué hora ___ anoche? (llegar, tú) => llegaste | llegastes | llegó | llegas # What time did you arrive last night?
Mi padre ___ en un banco treinta años. (trabajar) => trabajó | trabajo | trabajé | trabajaron # My father worked in a bank for thirty years.
Nosotros ___ a Portugal el año pasado. (viajar) => viajamos | viajemos | viajaron | viajasteis # We travelled to Portugal last year.
¿Vosotros ___ la cena? (cocinar) => cocinasteis | cocinastes | cocinaron | cocinamos # Did you (all) cook dinner?
Ellos ___ toda la noche. (bailar) => bailaron | bailó | bailamos | bailasteis # They danced all night.
`},{t:`Preterite: -er & -ir verbs`,k:`grammar`,goal:`Talk about finished past actions with -er and -ir verbs`,body:`
## -er and -ir share the same endings
| | comer | vivir |
|---|---|---|
| {yo} | {com[í]} | {viv[í]} |
| {tú} | {com[iste]} | {viv[iste]} |
| {él / ella / usted} | {com[ió]} | {viv[ió]} |
| {nosotros} | {com[imos]} | {viv[imos]} |
| {vosotros} | {com[isteis]} | {viv[isteis]} |
| {ellos / ellas / ustedes} | {com[ieron]} | {viv[ieron]} |

> Anoche comí en casa de mis padres. = Last night I ate at my parents'.
> ¿Recibiste mi mensaje? = Did you get my message?
> Vivieron en París tres años. = They lived in Paris for three years.
> ¿Qué aprendisteis en clase? = What did you (all) learn in class?

!tip: {vivimos} = we live / we lived — the same as the present, like -ar verbs.
!tip: Duration needs no preposition: {Vivieron tres años en París} = They lived in Paris for three years.
!de: The same: {Vivieron tres años en París} = Sie lebten drei Jahre in Paris.
`,words:`
comí = I ate
comiste = you ate
comió = he / she ate
vivió = he / she lived
aprendí = I learnt
escribió = he / she wrote
conocí = I met
salió = he / she went out
nació = he / she was born
durante = during, for
el año pasado = last year
`,phrases:`
Anoche comí en casa de mis padres. = Last night I ate at my parents'.
¿Recibiste mi mensaje? = Did you get my message?
Vivieron en París tres años. = They lived in Paris for three years.
Conocí a mi mujer en 2018. = I met my wife in 2018.
Mi abuelo nació en 1945. = My grandfather was born in 1945.
¿A qué hora salisteis de la fiesta? = What time did you (all) leave the party?
`,drills:`
Anoche ___ pescado. (comer, yo) => comí | como | comió | comía # Last night I ate fish.
¿___ mi correo? (recibir, tú) => Recibiste | Recibistes | Recibió | Recibes # Did you get my email?
Mi abuela ___ en un pueblo. (nacer) => nació | nací | nacía | nace # My grandmother was born in a village.
Nosotros ___ en Berlín dos años. (vivir) => vivimos | vivemos | vivieron | vivisteis # We lived in Berlin for two years.
¿A qué hora ___ de casa? (salir, vosotros) => salisteis | salieron | salimos | salistes # What time did you (all) leave home?
Ellos ___ una carta al alcalde. (escribir) => escribieron | escribió | escribimos | escribiron # They wrote a letter to the mayor.
`},{t:`Spelling changes: busqué, leyó`,k:`grammar`,goal:`Spell preterite forms correctly: -car, -gar, -zar and i→y`,body:`
## Yo forms that change spelling
To keep the sound, -ar verbs ending in **-car, -gar, -zar** change spelling in the **yo** form:
| ending | change | example |
|---|---|---|
| -car | c → qu | {buscar} → {busqué} |
| -gar | g → gu | {llegar} → {llegué} |
| -zar | z → c | {empezar} → {empecé} |

Others: {tocar} → {toqué}, {sacar} → {saqué}, {practicar} → {practiqué}, {pagar} → {pagué}, {jugar} → {jugué}, {cruzar} → {crucé}, {almorzar} → {almorcé}.

!tip: Only the **yo** form changes: {busqué}, but {buscaste}, {buscó}…

## i → y in the 3rd person
-er / -ir verbs with a vowel before the ending change **i → y** in the 3rd person:
| | leer | oír | construir |
|---|---|---|---|
| {él / ella} | {le[y]ó} | {o[y]ó} | {constru[y]ó} |
| {ellos / ellas} | {le[y]eron} | {o[y]eron} | {constru[y]eron} |

Also {leí}, {leíste}, {leímos}, {leísteis} carry an accent. The same happens with {creer} ({creyó}) and {caer} ({cayó}).

!de: It's all about the sound: "c" before "e" would sound like θ, so Spanish writes {qué}: {busqué}.
`,words:`
busqué = I looked for
llegué = I arrived
empecé = I started
pagué = I paid
jugué = I played
toqué = I touched; I played (an instrument)
practiqué = I practised
leyó = he / she read
oyó = he / she heard
creyó = he / she believed
cayó = he / she fell
construyó = he / she built
`,phrases:`
Llegué a casa a las diez. = I got home at ten.
Ayer empecé un curso de español. = Yesterday I started a Spanish course.
Pagué la cena con tarjeta. = I paid for dinner by card.
Mi hijo leyó el libro en dos días. = My son read the book in two days.
Busqué mis llaves por todas partes. = I looked for my keys everywhere.
¿Oíste la noticia? = Did you hear the news?
`,drills:`
Ayer ___ a las ocho. (llegar, yo) => llegué | llegé | llegó | llegue # Yesterday I arrived at eight.
___ la cuenta con tarjeta. (pagar, yo) => Pagué | Pagé | Pagó | Pague # I paid the bill by card.
El lunes ___ a trabajar. (empezar, yo) => empecé | empezé | empezó | empiezo # On Monday I started work.
Mi hermana ___ el periódico. (leer) => leyó | leió | leó | lee # My sister read the newspaper.
Ayer ___ al tenis. (jugar, yo) => jugué | jugé | juegué | jugó # Yesterday I played tennis.
Mis abuelos ___ esta casa en 1960. (construir) => construyeron | construieron | construyó | construían # My grandparents built this house in 1960.
`},{t:`Irregulars I: fui, hice, tuve`,k:`grammar`,goal:`Use the most frequent irregular preterites: ser, ir, hacer, tener, estar`,body:`
## ser and ir: identical!
| | ser / ir |
|---|---|
| {yo} | {fui} |
| {tú} | {fuiste} |
| {él / ella / usted} | {fue} |
| {nosotros} | {fuimos} |
| {vosotros} | {fuisteis} |
| {ellos / ellas / ustedes} | {fueron} |

Context tells you which: {Fui al cine} (I went to the cinema) vs {Fue increíble} (it was incredible).

## Strong stems
New stem + endings **-e, -iste, -o, -imos, -isteis, -ieron**, with **no accents**:
| | hacer | tener | estar |
|---|---|---|---|
| {yo} | {hice} | {tuve} | {estuve} |
| {tú} | {hiciste} | {tuviste} | {estuviste} |
| {él / ella / usted} | {hizo} | {tuvo} | {estuvo} |
| {nosotros} | {hicimos} | {tuvimos} | {estuvimos} |
| {vosotros} | {hicisteis} | {tuvisteis} | {estuvisteis} |
| {ellos / ellas / ustedes} | {hicieron} | {tuvieron} | {estuvieron} |

!tip: {hizo} is written with **z** to keep the sound.

> ¿Qué hiciste el fin de semana? = What did you do at the weekend?
> Fuimos a la playa. = We went to the beach.
> Estuve en Sevilla en 2022. = I was in Seville in 2022.
> Tuve que trabajar. = I had to work.

!de: Like German strong verbs (ging, war, hatte) — just learn them by heart.
`,words:`
fui = I went; I was
fuiste = you went; you were
fue = he / she went; it was
fueron = they went; they were
hice = I did, I made
hizo = he / she did
tuve = I had
tuvo = he / she had
estuve = I was (somewhere)
estuvo = he / she was
tuve que = I had to
increíble = incredible
`,phrases:`
¿Qué hiciste el fin de semana? = What did you do at the weekend?
Fuimos a la playa con unos amigos. = We went to the beach with some friends.
La fiesta fue increíble. = The party was incredible.
Estuve en Sevilla en 2022. = I was in Seville in 2022.
Tuve que trabajar el domingo. = I had to work on Sunday.
¿Dónde estuvisteis ayer? = Where were you (all) yesterday?
`,drills:`
El sábado ___ al cine. (ir, yo) => fui | fue | iba | fuí # On Saturday I went to the cinema.
¿Qué ___ ayer? (hacer, tú) => hiciste | haciste | hizo | hacías # What did you do yesterday?
El concierto ___ fantástico. (ser) => fue | fui | fueron | fuimos # The concert was fantastic.
Mi hermano ___ un accidente. (tener) => tuvo | tenió | tuve | tenía # My brother had an accident.
Nosotros ___ en Granada en abril. (estar) => estuvimos | estuvieron | estuvisteis | estuve # We were in Granada in April.
Ellos ___ los deberes. (hacer) => hicieron | hacieron | hizieron | hicimos # They did their homework.
`},{t:`Irregulars II: dije, pude, vine`,k:`grammar`,goal:`Use more irregular preterites: decir, poder, poner, venir, traer, dar, ver`,body:`
## More strong stems (-e, -iste, -o, -imos, -isteis, -ieron)
| infinitive | stem | yo | él |
|---|---|---|---|
| {poder} | pud- | {pude} | {pudo} |
| {poner} | pus- | {puse} | {puso} |
| {saber} | sup- | {supe} | {supo} |
| {querer} | quis- | {quise} | {quiso} |
| {venir} | vin- | {vine} | {vino} |
| {andar} | anduv- | {anduve} | {anduvo} |

## j-stems: ellos ends in -eron
| infinitive | yo | él | ellos |
|---|---|---|---|
| {decir} | {dije} | {dijo} | {dijeron} |
| {traer} | {traje} | {trajo} | {trajeron} |
| {conducir} | {conduje} | {condujo} | {condujeron} |

## dar and ver
{dar}: {di}, {diste}, {dio}, {dimos}, {disteis}, {dieron} — no accents.
{ver}: {vi}, {viste}, {vio}, {vimos}, {visteis}, {vieron}.

> ¿Qué te dijo? = What did he tell you?
> No pude ir a la fiesta. = I couldn't go to the party.
> Mis padres vinieron a verme. = My parents came to see me.
> ¿Viste el partido? = Did you see the match?

!tip: Some verbs change meaning in the preterite: {supe} = I found out; {conocí} = I met (for the first time); {no quise} = I refused.
!de: {Supe la noticia} = Ich erfuhr die Nachricht — "found out", not "knew".
`,words:`
pude = I could, I managed to
puse = I put
supe = I found out
quise = I wanted
vine = I came
vino = he / she came
dije = I said
dijo = he / she said
traje = I brought
di = I gave
vi = I saw
el partido = match, game
`,phrases:`
¿Qué te dijo tu jefe? = What did your boss tell you?
No pude ir a la fiesta. = I couldn't go to the party.
Mis padres vinieron a verme. = My parents came to see me.
¿Viste el partido anoche? = Did you watch the match last night?
Le di un regalo a mi madre. = I gave my mother a present.
Traje vino y postre. = I brought wine and dessert.
`,drills:`
¿Qué te ___ Ana? (decir) => dijo | dició | dijó | dijeron # What did Ana tell you?
Ayer no ___ dormir. (poder, yo) => pude | podí | pudo | puedo # Yesterday I couldn't sleep.
Mis tíos ___ a la boda. (venir) => vinieron | venieron | vinó | vinimos # My aunt and uncle came to the wedding.
¿Dónde ___ las llaves? (poner, tú) => pusiste | ponaste | pusite | puso # Where did you put the keys?
Ellos ___ un pastel. (traer) => trajeron | trajieron | traieron | trajo # They brought a cake.
Anoche ___ una película muy buena. (ver, yo) => vi | ví | veí | vio # Last night I saw a very good film.
`},{t:`When? Ayer, hace dos años…`,k:`talk`,goal:`Say when things happened and tell someone about your weekend`,body:`
## Time expressions for the preterite
| | |
|---|---|
| {ayer} | yesterday |
| {anteayer} | the day before yesterday |
| {anoche} | last night |
| {el lunes pasado} | last Monday |
| {la semana pasada} | last week |
| {el mes pasado} | last month |
| {el año pasado} | last year |
| {hace dos días} | two days ago |
| {hace un año} | a year ago |
| {en 2015} | in 2015 |
| {el 3 de mayo} | on 3 May |

## hace + time = ago
> Llegué a España hace tres meses. = I arrived in Spain three months ago.
> ¿Cuándo empezaste a estudiar español? — Hace dos semanas. = When did you start learning Spanish? — Two weeks ago.

!de: {hace} + time = "vor": {hace dos años} = vor zwei Jahren.
!ar: {hace} + time ≈ قبل: {hace dos años} ≈ قبل سنتين.

## Last weekend
> El sábado me levanté tarde, fui al mercado y por la tarde vi una película con unos amigos. = On Saturday I got up late, went to the market and in the afternoon watched a film with some friends.
> El domingo comí con mi familia y después di un paseo. = On Sunday I had lunch with my family and then went for a walk.
`,words:`
el lunes pasado = last Monday
el mes pasado = last month
hace dos días = two days ago
hace un año = a year ago
hace mucho tiempo = a long time ago
la boda = wedding
nacer = to be born
mudarse = to move (house)
casarse = to get married
empezar a = to start (doing)
dar un paseo = to go for a walk
`,phrases:`
Llegué a España hace tres meses. = I arrived in Spain three months ago.
El año pasado me mudé a Madrid. = Last year I moved to Madrid.
Mis padres se casaron en 1990. = My parents got married in 1990.
Empecé a estudiar español hace dos semanas. = I started learning Spanish two weeks ago.
La boda fue el sábado pasado. = The wedding was last Saturday.
El domingo dimos un paseo por el parque. = On Sunday we went for a walk in the park.
`,drills:`
Llegué a Madrid ___ dos años. => hace | desde | hacía | antes # I arrived in Madrid two years ago.
El año ___ fui a Japón. => pasado | pasada | que viene | próximo # Last year I went to Japan.
___ me acosté muy tarde. (last night) => Anoche | Mañana | Hoy | Esta noche # Last night I went to bed very late.
Mis padres se ___ en 1990. (casarse) => casaron | casó | casaste | casan # My parents got married in 1990.
La semana ___ estuve enfermo. => pasada | pasado | que viene | próxima # Last week I was ill.
`}],story:{title:`Un fin de semana en Sevilla`,text:`
El lunes por la mañana Laura le pregunta a Anna: —¿Qué tal el fin de semana? ¿Qué hiciste?
= On Monday morning Laura asks Anna: "How was the weekend? What did you do?"

—¡Fui a Sevilla con Omar! Salimos el viernes por la tarde en el AVE, el tren de alta velocidad. Llegamos en dos horas y media.
= "I went to Seville with Omar! We left on Friday afternoon on the AVE, the high-speed train. We got there in two and a half hours."

—¡Qué bien! ¿Y qué visitasteis? —El sábado por la mañana vimos la catedral y subimos a la Giralda. Omar me explicó que antes fue el minarete de una mezquita.
= "Great! And what did you visit?" "On Saturday morning we saw the cathedral and climbed the Giralda. Omar explained to me that it used to be the minaret of a mosque."

—Por la tarde paseamos por el barrio de Santa Cruz y comimos unas tapas buenísimas. Por la noche fuimos a un espectáculo de flamenco. ¡Fue increíble!
= "In the afternoon we walked around the Santa Cruz neighbourhood and ate some amazing tapas. At night we went to a flamenco show. It was incredible!"

—¿Y el domingo? —El domingo hizo muchísimo calor: ¡treinta y cinco grados en octubre! Visitamos el Real Alcázar y descansamos en el parque de María Luisa.
= "And on Sunday?" "On Sunday it was really hot: thirty-five degrees in October! We visited the Royal Alcázar and rested in María Luisa Park."

—¿Cuándo volvisteis? —Volvimos el domingo por la noche. Llegué a casa muy cansada, pero muy contenta.
= "When did you come back?" "We came back on Sunday night. I got home very tired, but very happy."

—¡Qué envidia! Yo estuve todo el fin de semana en casa estudiando.
= "I'm so jealous! I spent the whole weekend at home studying."
`,questions:`
¿Cómo fueron a Sevilla? => En tren | En coche | En avión # How did they get to Seville?
¿Qué fue antes la Giralda? => El minarete de una mezquita | Un palacio | Una estación # What was the Giralda before?
¿Qué vieron el sábado por la noche? => Un espectáculo de flamenco | Un partido de fútbol | Una película # What did they see on Saturday night?
¿Qué tiempo hizo el domingo? => Mucho calor | Mucho frío | Llovió # What was the weather like on Sunday?
¿Qué hizo Laura el fin de semana? => Estudió en casa | Fue a la playa | Viajó a Toledo # What did Laura do at the weekend?
`}},Ps=s({default:()=>Fs}),Fs={n:13,title:`When I was a child — the imperfect`,es:`Cuando era niño`,cando:[`I can form the imperfect of regular verbs and of ser, ir and ver`,`I can talk about past habits: de niño…, solía…, antes…`,`I can describe people, places and situations in the past`,`I can use -ir stem changes in the preterite: pidió, durmió`,`I can set a scene with había and estaba + gerund`],lessons:[{t:`The imperfect: regular verbs`,k:`grammar`,goal:`Form the imperfect and use it for past habits`,body:`
## Pretérito imperfecto
The imperfect shows the past as **ongoing**: habits, descriptions and background — without focusing on a beginning or an end.
| | hablar | comer | vivir |
|---|---|---|---|
| {yo} | {habl[aba]} | {com[ía]} | {viv[ía]} |
| {tú} | {habl[abas]} | {com[ías]} | {viv[ías]} |
| {él / ella / usted} | {habl[aba]} | {com[ía]} | {viv[ía]} |
| {nosotros} | {habl[ábamos]} | {com[íamos]} | {viv[íamos]} |
| {vosotros} | {habl[abais]} | {com[íais]} | {viv[íais]} |
| {ellos / ellas / ustedes} | {habl[aban]} | {com[ían]} | {viv[ían]} |

!tip: Yo and él / ella look the same — add the subject when needed: {Yo trabajaba y ella estudiaba}.
!tip: No stem changes and no spelling changes: {pensaba}, {dormía}, {pedía}, {jugaba}.

> De niño vivía en un pueblo. = As a child I lived in a village.
> Mi abuela cocinaba muy bien. = My grandmother used to cook very well.
> Antes trabajábamos los sábados. = We used to work on Saturdays.

!de: Think "used to …" or "was …ing". German uses Präteritum or "früher": {Antes jugaba al fútbol} = Früher spielte ich Fußball.
!ar: Like كان + المضارع: {Jugaba al fútbol} ≈ كنتُ ألعب كرة القدم.
`,words:`
hablaba = I / he used to speak
comía = I / he used to eat
vivía = I / he used to live
jugaba = I / he used to play
trabajaba = I / he used to work
antes = before, in the past
de niño, de niña = as a child
de pequeño, de pequeña = when I was little
todos los veranos = every summer
la infancia = childhood
los dibujos animados = cartoons
`,phrases:`
De niño vivía en un pueblo pequeño. = As a child I lived in a small village.
Mi abuela cocinaba muy bien. = My grandmother used to cook very well.
Antes trabajábamos los sábados. = We used to work on Saturdays.
Todos los veranos íbamos a la playa. = Every summer we used to go to the beach.
¿Qué hacías los domingos? = What did you use to do on Sundays?
Veía dibujos animados todas las mañanas. = I used to watch cartoons every morning.
`,drills:`
De niño ___ al fútbol todos los días. (jugar, yo) => jugaba | jugué | juego | jugó # As a child I used to play football every day.
Mi abuelo siempre ___ historias. (contar) => contaba | contó | cuenta | contaron # My grandfather always used to tell stories.
Antes nosotros ___ pescado los viernes. (comer) => comíamos | comimos | comemos | comían # We used to eat fish on Fridays.
¿Qué ___ en tu tiempo libre de pequeño? (hacer, tú) => hacías | hiciste | haces | hacía # What did you use to do in your free time as a kid?
Mis padres ___ a las diez todas las noches. (cenar) => cenaban | cenaron | cenan | cenaba # My parents used to have dinner at ten every night.
Vosotros ___ mucho cuando erais niños. (jugar) => jugabais | jugasteis | jugáis | jugaban # You (all) used to play a lot when you were children.
`},{t:`Ser, ir, ver — and describing`,k:`grammar`,goal:`Use the three irregular imperfects and describe the past`,body:`
## Only three irregular verbs!
| | ser | ir | ver |
|---|---|---|---|
| {yo} | {era} | {iba} | {veía} |
| {tú} | {eras} | {ibas} | {veías} |
| {él / ella / usted} | {era} | {iba} | {veía} |
| {nosotros} | {éramos} | {íbamos} | {veíamos} |
| {vosotros} | {erais} | {ibais} | {veíais} |
| {ellos / ellas / ustedes} | {eran} | {iban} | {veían} |

> Cuando era pequeño, era muy tímido. = When I was little, I was very shy.
> Íbamos al colegio a pie. = We used to walk to school.
> Veíamos la tele con mis abuelos. = We used to watch TV with my grandparents.

## Describing the past: era, había, hacía, tenía
> Era una casa grande con jardín. = It was a big house with a garden.
> Había muchos niños en mi calle. = There were lots of children in my street.
> Hacía mucho frío en invierno. = It was very cold in winter.
> Tenía el pelo largo. = I had long hair.

!tip: {había} (there was / there were) is the imperfect of {hay} — always singular: {Había dos parques.}
!de: {había} = es gab: {Había un cine} = Es gab ein Kino.
!ar: {había} ≈ كان هناك / كان في.
`,words:`
era = I was, he / she / it was
éramos = we were
iba = I used to go
íbamos = we used to go
veía = I used to see, to watch
había = there was, there were
hacía calor = it was hot
tenía = I had, he / she had
cuando era pequeño = when I was little
el vecino, la vecina = neighbour
tranquilo, tranquila = quiet, calm
`,phrases:`
Cuando era pequeña, era muy tímida. = When I was little, I was very shy.
Íbamos al colegio a pie. = We used to walk to school.
Había un cine en mi barrio. = There was a cinema in my neighbourhood.
Mi pueblo era muy tranquilo. = My village was very quiet.
En verano hacía mucho calor. = In summer it was very hot.
Mis vecinos tenían un perro enorme. = My neighbours had a huge dog.
`,drills:`
Cuando ___ niño, vivía en el campo. (ser, yo) => era | fui | soy | estaba # When I was a child, I lived in the countryside.
Todos los domingos ___ a casa de mis abuelos. (ir, nosotros) => íbamos | fuimos | vamos | ibamos # Every Sunday we used to go to my grandparents'.
___ mucha gente en la plaza. (there used to be) => Había | Habían | Hubo | Hay # There used to be lots of people in the square.
Mi casa ___ muy grande. (ser) => era | fue | estaba | es # My house was very big.
Antes ___ la tele todas las noches. (ver, yo) => veía | vi | vía | veo # I used to watch TV every night.
Mi abuela ___ el pelo blanco. (tener) => tenía | tuvo | tiene | teniá # My grandmother had white hair.
`},{t:`Then & now: soler, ya no`,k:`talk`,goal:`Compare how things used to be with how they are now`,body:`
## Talking about how things used to be
| | |
|---|---|
| {antes} | before, in the past |
| {de niño / de pequeño} | as a child |
| {cuando era joven} | when I was young |
| {siempre} | always |
| {todos los días / veranos} | every day / summer |
| {a menudo} | often |

## soler + infinitive
**soler** (o → ue) expresses habits — in the present ({suelo}) and the past ({solía}):
> Suelo levantarme a las siete. = I usually get up at seven.
> De niño solía jugar en la calle. = As a child I used to play in the street.
> ¿Qué solías hacer en verano? = What did you use to do in summer?

## Then and now
> Antes vivía en Rabat; ahora vivo en Madrid. = I used to live in Rabat; now I live in Madrid.
> Antes no me gustaba el café, pero ahora me encanta. = I didn't use to like coffee, but now I love it.
> Ya no fumo. = I don't smoke any more.

!de: {solía} = pflegte zu / früher immer: {Solía leer mucho} = Früher habe ich viel gelesen. And {ya no} = nicht mehr.
!ar: {solía} ≈ اعتدتُ أن، {ya no} ≈ لم أعد.
`,words:`
soler = to usually (do)
suelo = I usually
solía = I used to
cuando era joven = when I was young
ya no = not any more
el campo = countryside; field
el juguete = toy
la bicicleta = bicycle
el recuerdo = memory
echar de menos = to miss (Spain)
`,phrases:`
Suelo levantarme a las siete. = I usually get up at seven.
De niño solía jugar en la calle. = As a child I used to play in the street.
Antes vivía en el campo; ahora vivo en la ciudad. = I used to live in the countryside; now I live in the city.
Ya no fumo. = I don't smoke any more.
Echo de menos a mi familia. = I miss my family.
Tengo muy buenos recuerdos de mi infancia. = I have very good memories of my childhood.
`,drills:`
De niño ___ jugar al fútbol en la calle. (soler, yo) => solía | suelo | solí | sueles # As a child I used to play football in the street.
Normalmente ___ cenar a las nueve. (soler, nosotros) => solemos | suelemos | suelen | soléis # We usually have dinner at nine.
Antes fumaba, pero ___ no fumo. => ya | todavía | aún | nunca # I used to smoke, but I don't any more.
___ de menos a mis padres. (echar, yo) => Echo | Hecho | Echar | Echa # I miss my parents.
Antes ___ en Marruecos; ahora vivo en España. (vivir, yo) => vivía | vivo | viviré | vivíamos # I used to live in Morocco; now I live in Spain.
`},{t:`Describing the past`,k:`vocab`,goal:`Describe people, places and situations in the past`,body:`
## People, places and situations
Use the imperfect to set the scene — what things **were like**:
> Mi abuelo era alto y tenía bigote. = My grandfather was tall and had a moustache.
> La casa tenía tres dormitorios y un patio con naranjos. = The house had three bedrooms and a courtyard with orange trees.
> Las calles eran estrechas y no había coches. = The streets were narrow and there were no cars.
> Era primavera y hacía buen tiempo. = It was spring and the weather was nice.
> Estábamos muy contentos. = We were very happy.

## Useful adjectives
{antiguo} (old, ancient), {moderno}, {estrecho} (narrow), {ancho} (wide), {ruidoso} (noisy), {tranquilo} (quiet), {limpio} (clean), {sucio} (dirty), {precioso} (beautiful), {feo} (ugly), {lleno} (full), {vacío} (empty).

!es: Traditional Andalusian houses have a {patio} with plants and a fountain — a design inherited from al-Andalus.
!ar: The Andalusian {patio}, the {azulejos} (tiles — from الزليج) and the courtyard fountain all echo Arab architecture.
`,words:`
antiguo, antigua = old, ancient
moderno, moderna = modern
estrecho, estrecha = narrow
ancho, ancha = wide
ruidoso, ruidosa = noisy
limpio, limpia = clean
sucio, sucia = dirty
lleno, llena = full
vacío, vacía = empty
el patio = courtyard
los azulejos = (glazed) tiles
el bigote = moustache
la barba = beard
`,phrases:`
Mi abuelo era alto y tenía barba. = My grandfather was tall and had a beard.
La casa tenía un patio con naranjos. = The house had a courtyard with orange trees.
Las calles eran estrechas y antiguas. = The streets were narrow and old.
Era primavera y hacía buen tiempo. = It was spring and the weather was good.
El tren estaba lleno de gente. = The train was full of people.
El barrio era tranquilo pero un poco sucio. = The neighbourhood was quiet but a bit dirty.
`,drills:`
La calle ___ muy estrecha. => era | fue | estuvo | eran # The street was very narrow.
Mi abuelo ___ bigote. => tenía | tuvo | era | había # My grandfather had a moustache.
___ mucha gente en el mercado. => Había | Era | Estaba | Tenía # There were lots of people at the market.
El restaurante estaba ___. No había nadie. => vacío | lleno | limpio | ancho # The restaurant was empty. There was nobody there.
La ciudad era muy ___: había mucho tráfico. => ruidosa | tranquila | vacía | limpia # The city was very noisy: there was a lot of traffic.
`},{t:`Preterite stem changes: pidió, durmió`,k:`grammar`,goal:`Use -ir stem-changing verbs in the preterite`,body:`
## Stem changes in the past
-ir verbs that change their stem in the present **also** change in the preterite — but only in the **3rd person** (él / ellos), and only **e → i** or **o → u**:
| | pedir | dormir | sentir |
|---|---|---|---|
| {yo} | {pedí} | {dormí} | {sentí} |
| {tú} | {pediste} | {dormiste} | {sentiste} |
| {él / ella / usted} | {p[i]dió} | {d[u]rmió} | {s[i]ntió} |
| {nosotros} | {pedimos} | {dormimos} | {sentimos} |
| {vosotros} | {pedisteis} | {dormisteis} | {sentisteis} |
| {ellos / ellas / ustedes} | {p[i]dieron} | {d[u]rmieron} | {s[i]ntieron} |

More: {servir} → {sirvió}, {repetir} → {repitió}, {seguir} → {siguió}, {preferir} → {prefirió}, {divertirse} → {se divirtió}, {morir} → {murió}, {vestirse} → {se vistió}.

!tip: -ar and -er stem changers do **not** change in the preterite: {pensé}, {pensó}; {volví}, {volvió}.

> Mi hijo durmió diez horas. = My son slept ten hours.
> ¿Qué pidieron tus amigos? = What did your friends order?
> Nos divertimos mucho, y ellos se divirtieron también. = We had a lot of fun, and so did they.

!de: Think of the gerund as a reminder: {pidiendo} → {pidió}, {durmiendo} → {durmió}.
`,words:`
pidió = he / she asked for, ordered
pidieron = they asked for, ordered
durmió = he / she slept
durmieron = they slept
sintió = he / she felt
sirvió = he / she served
repitió = he / she repeated
siguió = he / she followed, continued
prefirió = he / she preferred
se divirtió = he / she had fun
murió = he / she died
`,phrases:`
Mi hijo durmió diez horas. = My son slept ten hours.
¿Qué pidieron tus amigos? = What did your friends order?
El camarero nos sirvió muy rápido. = The waiter served us very quickly.
Se divirtieron mucho en la fiesta. = They had a lot of fun at the party.
Mi abuelo murió en 2010. = My grandfather died in 2010.
El profesor repitió la pregunta. = The teacher repeated the question.
`,drills:`
Anoche mi hermano ___ muy mal. (dormir) => durmió | dormió | duermió | durmieron # Last night my brother slept very badly.
Ella ___ una paella. (pedir) => pidió | pedió | pidío | pido # She ordered a paella.
Los niños ___ mucho en el parque. (divertirse) => se divirtieron | se divertieron | se divirtió | se divierten # The children had a lot of fun in the park.
Yo ___ la cena a las nueve. (servir) => serví | sirví | sirvió | servió # I served dinner at nine.
Ellos ___ el camino del río. (seguir) => siguieron | seguieron | siguió | seguimos # They followed the river path.
¿Qué ___ tú? (pedir) => pediste | pidiste | pidió | pedía # What did you order?
`},{t:`Había & estaba + gerund`,k:`grammar`,goal:`Set the scene of a story with había, hubo and estaba + gerund`,body:`
## Setting the scene
Two imperfect tools for background:
- **había** = there was / there were (imperfect of hay): {Había mucha gente.}
- **estaba + gerund** = was …ing (an action in progress): {Estaba lloviendo.}

> Cuando llegué, estaban cenando. = When I arrived, they were having dinner.
> Estábamos viendo la tele. = We were watching TV.
> ¿Qué estabas haciendo a las diez? = What were you doing at ten?

## había or hubo?
| había (imperfect) | hubo (preterite) |
|---|---|
| background, description: {Había un parque.} | an event that happened: {Hubo un accidente.} |

!tip: Both are always singular: {Había muchas personas}, {Hubo dos accidentes}.
!de: {estaba + Gerundio} = "war gerade dabei zu …": {Estaba comiendo} = Ich aß gerade.
!ar: {estaba + gerund} ≈ كنتُ + المضارع: {Estaba comiendo} ≈ كنتُ آكل.
`,words:`
estaba comiendo = I was eating
estábamos viendo = we were watching
había = there was, there were
hubo = there was (an event)
el accidente = accident
la tormenta = storm
de repente = suddenly
mientras = while
sonar = to ring, to sound
el timbre = doorbell
`,phrases:`
Cuando llegué, estaban cenando. = When I arrived, they were having dinner.
¿Qué estabas haciendo a las diez? = What were you doing at ten?
Estaba lloviendo y hacía frío. = It was raining and it was cold.
Ayer hubo un accidente en la autopista. = Yesterday there was an accident on the motorway.
Mientras cocinaba, sonó el timbre. = While I was cooking, the doorbell rang.
Había una tormenta terrible. = There was a terrible storm.
`,drills:`
Cuando me llamaste, ___ durmiendo. (estar, yo) => estaba | estuve | estoy | era # When you called me, I was sleeping.
Los niños estaban ___ en el jardín. (jugar) => jugando | jugado | juegando | jugaban # The children were playing in the garden.
Ayer ___ un accidente en mi calle. => hubo | hubieron | habían | hay # Yesterday there was an accident in my street.
En mi pueblo ___ una plaza muy bonita. => había | hubo | habían | estaba # In my village there was a very pretty square.
___ veía la tele, mi madre cocinaba. => Mientras | Durante | Entre | Luego # While I was watching TV, my mother was cooking.
`}],story:{title:`La abuela Carmen`,text:`
La abuela de Laura se llama Carmen y tiene ochenta y dos años. Un domingo, Laura le pregunta: —Abuela, ¿cómo era tu vida cuando eras niña?
= Laura's grandmother is called Carmen and she's eighty-two. One Sunday Laura asks her: "Grandma, what was your life like when you were a girl?"

—Ay, hija, era muy diferente. Vivíamos en un pueblo pequeño de Jaén, en Andalucía. No había agua en las casas: mi madre iba a la fuente todas las mañanas.
= "Oh, my dear, it was very different. We lived in a small village in Jaén, in Andalusia. There was no water in the houses: my mother went to the fountain every morning."

—¿Y tú ibas al colegio? —Sí, pero solo hasta los doce años. Después ayudaba a mi padre en el campo. Recogíamos aceitunas en invierno.
= "And did you go to school?" "Yes, but only until I was twelve. After that I helped my father in the fields. We picked olives in winter."

—¿Qué hacíais para divertiros? —Los niños jugábamos en la plaza hasta la noche. No teníamos televisión, pero éramos muy felices.
= "What did you do for fun?" "We children played in the square until night. We didn't have television, but we were very happy."

—En verano hacía muchísimo calor, y por las noches los vecinos sacaban las sillas a la calle y hablaban hasta muy tarde.
= "In summer it was terribly hot, and at night the neighbours brought their chairs out into the street and talked until very late."

—Un día llegó al pueblo el primer coche. ¡Todos salimos a verlo! Fue un día inolvidable.
= "One day the first car arrived in the village. We all went out to see it! It was an unforgettable day."

Laura escucha con atención. —Abuela, tus historias son preciosas. —Ay, hija, ¡qué tiempos aquellos!
= Laura listens carefully. "Grandma, your stories are lovely." "Oh, my dear — those were the days!"
`,questions:`
¿Dónde vivía la abuela Carmen? => En un pueblo de Jaén | En Madrid | En Sevilla # Where did Grandma Carmen live?
¿Por qué iba su madre a la fuente? => No había agua en las casas | Le gustaba pasear | Trabajaba allí # Why did her mother go to the fountain?
¿Qué recogían en invierno? => Aceitunas | Naranjas | Uvas # What did they pick in winter?
¿Qué pasó un día en el pueblo? => Llegó el primer coche | Hubo una tormenta | Abrieron un cine # What happened one day in the village?
`}},Is=s({default:()=>Ls}),Ls={n:14,title:`Telling stories`,es:`Érase una vez…`,cando:[`I can choose between the preterite and the imperfect`,`I can narrate an interrupted action: estaba… cuando…`,`I can link a story with al principio, entonces, de repente, al final…`,`I can use verbs that change meaning: conocí / conocía, supe / sabía`,`I can choose between he comido and comí the way people do in Spain`,`I can tell a short biography`],lessons:[{t:`Preterite or imperfect?`,k:`grammar`,goal:`Choose the right past tense for events and for background`,body:`
## Two past tenses, two jobs
| Preterite — the events | Imperfect — the background |
|---|---|
| completed actions: {Fui a Sevilla.} | descriptions: {Hacía sol.} |
| a sequence of events: {Llegué, comí y salí.} | habits: {Iba todos los días.} |
| a fixed number of times, a closed period: {Estuve dos horas.} | actions in progress: {Estaba lloviendo.} |
| markers: {ayer, en 2010, una vez} | markers: {siempre, antes, todos los días, de niño} |

> Ayer fui al cine. Hacía frío y había mucha gente. = Yesterday I went to the cinema. It was cold and there were lots of people.
> Cuando era niño, iba a la playa todos los veranos. Un verano fuimos a Mallorca. = When I was a child, I went to the beach every summer. One summer we went to Majorca.

!tip: Think of a film: the **imperfect** is the scenery and the music; the **preterite** is what the actors do.
!de: German Präteritum covers both — Spanish makes you choose: "Es regnete" (background) = {Llovía}; "Es regnete zwei Stunden" (closed period) = {Llovió dos horas}.
!ar: Roughly: preterite ≈ الماضي (أكلتُ), imperfect ≈ كان + المضارع (كنتُ آكل).
`,words:`
el cuento = (short) story, tale
érase una vez = once upon a time
una vez = once
un día = one day
el personaje = character
el final = ending
el lugar = place
mientras tanto = meanwhile
durar = to last
el castillo = castle
`,phrases:`
Ayer fui al cine. Hacía frío y había mucha gente. = Yesterday I went to the cinema. It was cold and there were lots of people.
De niño iba a la playa todos los veranos. = As a child I went to the beach every summer.
Un verano fuimos a Mallorca. = One summer we went to Majorca.
Estuve dos horas en el médico. = I spent two hours at the doctor's.
Érase una vez una princesa que vivía en un castillo. = Once upon a time there was a princess who lived in a castle.
Llovió todo el día. = It rained all day.
`,drills:`
Ayer ___ al médico. (ir, yo) => fui | iba | voy | iré # Yesterday I went to the doctor's.
Cuando era pequeño, ___ al colegio en autobús. (ir, yo) => iba | fui | voy | vaya # When I was little, I went to school by bus.
___ sol y hacía calor. (description) => Hacía | Hizo | Hace | Había # It was sunny and hot.
El año pasado ___ a Japón. (viajar, nosotros) => viajamos | viajábamos | viajaremos | viajemos # Last year we travelled to Japan.
La película ___ tres horas. (durar) => duró | duraba | dura | durará # The film lasted three hours.
Mis abuelos siempre ___ con nosotros en Navidad. (cenar) => cenaban | cenaron | cenan | cenarán # My grandparents always used to have dinner with us at Christmas.
`},{t:`Interrupted actions`,k:`grammar`,goal:`Narrate an action in progress interrupted by an event`,body:`
## Estaba… cuando…
An ongoing action (**imperfect**) is interrupted by a new event (**preterite**):
> Estaba durmiendo cuando sonó el teléfono. = I was sleeping when the phone rang.
> Cuando salía de casa, empezó a llover. = As I was leaving home, it started to rain.
> Mientras cocinaba, me corté el dedo. = While I was cooking, I cut my finger.
> Iba por la calle y de repente vi a Ana. = I was walking down the street and suddenly I saw Ana.

!tip: **mientras** (while) usually goes with the imperfect; **cuando** + preterite brings in the interruption.
!tip: Two actions happening at the same time → both imperfect: {Mientras yo cocinaba, él leía.}
!de: "Ich schlief, als das Telefon klingelte" = {Dormía cuando sonó el teléfono}.
!ar: {Estaba durmiendo cuando sonó el teléfono} ≈ كنتُ نائمًا عندما رنّ الهاتف.
`,words:`
cuando = when
cortarse = to cut oneself
caerse = to fall over
romperse = to break (a bone, an object)
empezar a llover = to start raining
encontrarse con = to bump into
el ladrón, la ladrona = thief
robar = to steal, to rob
la policía = police
de pronto = suddenly
el susto = fright, scare
`,phrases:`
Estaba durmiendo cuando sonó el teléfono. = I was sleeping when the phone rang.
Cuando salía de casa, empezó a llover. = As I was leaving home, it started to rain.
Mientras cocinaba, me corté el dedo. = While I was cooking, I cut my finger.
Iba por la calle y me encontré con Ana. = I was walking down the street and bumped into Ana.
Mi hijo se cayó cuando jugaba al fútbol. = My son fell over while he was playing football.
¡Qué susto! = What a fright!
`,drills:`
Estaba en la ducha cuando ___ el timbre. (sonar) => sonó | sonaba | suena | sonará # I was in the shower when the doorbell rang.
Mientras yo ___, mi hermano veía la tele. (estudiar) => estudiaba | estudié | estudio | estudiaré # While I was studying, my brother was watching TV.
___ por el parque cuando vi a Pedro. (pasear, yo) => Paseaba | Paseé | Paseo | Pasearé # I was walking in the park when I saw Pedro.
Cuando ___ de casa, empezó a llover. (as I was leaving) => salía | saldré | salgo | saliendo # As I was leaving home, it started to rain.
Mi hija se ___ mientras jugaba. (caer) => cayó | caía | cae | caerá # My daughter fell over while she was playing.
Unos ladrones ___ mi bicicleta anoche. (robar) => robaron | robaban | roban | robarán # Some thieves stole my bike last night.
`},{t:`Story connectors`,k:`talk`,goal:`Tell a story in order and react to other people’s stories`,body:`
## Telling a story
| | |
|---|---|
| {Un día…} | One day… |
| {Al principio…} | At first… |
| {Primero…} | First… |
| {Entonces…} | Then… / So… |
| {Después / Luego…} | Afterwards / Then… |
| {De repente / De pronto…} | Suddenly… |
| {Al cabo de un rato…} | After a while… |
| {Por fin…} | At last… |
| {Al final…} | In the end… |
| {Al + infinitive} | When / On …ing |

> Al llegar a casa, vi que la puerta estaba abierta. = When I got home, I saw that the door was open.
> Al principio no entendía nada, pero al final aprendí mucho. = At first I didn't understand anything, but in the end I learnt a lot.

!tip: {Al + infinitive} sounds natural and elegant: {Al salir del cine, nos encontramos con Luis.}

## Reacting to a story
{¿Y qué pasó?} (And what happened?), {¿Y entonces?} (And then?), {¡Qué fuerte!} (Wow! — colloquial, Spain), {¡Qué miedo!} (How scary!), {¡No me lo puedo creer!} (I can't believe it!)
`,words:`
al principio = at first
entonces = then; so
al cabo de un rato = after a while
por fin = at last
al final = in the end
al llegar = on arriving, when … arrived
¿y qué pasó? = and what happened?
¡qué fuerte! = wow! (Spain, colloquial)
¡qué miedo! = how scary!
no me lo puedo creer = I can't believe it
pasar = to happen; to pass
`,phrases:`
Al principio no entendía nada. = At first I didn't understand anything.
Al llegar a casa, vi que la puerta estaba abierta. = When I got home, I saw that the door was open.
Esperamos dos horas y por fin llegó el tren. = We waited two hours and at last the train arrived.
¿Y qué pasó después? = And what happened next?
Al final todo salió bien. = In the end everything turned out fine.
¡Qué fuerte! No me lo puedo creer. = Wow! I can't believe it.
`,drills:`
Al ___ a casa, me duché. => llegar | llegué | llegando | llego # When I got home, I showered.
Esperamos mucho y por ___ llegó el autobús. => fin | final | fines | último # We waited a long time and at last the bus arrived.
Al ___ no me gustaba, pero ahora me encanta. => principio | primero | principal | inicio # At first I didn't like it, but now I love it.
Estábamos cenando y de ___ se fue la luz. => repente | rápido | prisa | lejos # We were having dinner and suddenly the power went off.
¿Y qué ___ después? => pasó | pasaba | pasa | pasará # And what happened next?
`},{t:`Verbs that change meaning`,k:`grammar`,goal:`Understand how conocer, saber, querer and poder change in the past`,body:`
## The tense changes the meaning
| verb | imperfect | preterite |
|---|---|---|
| {conocer} | {conocía} = I knew (someone) | {conocí} = I met (for the first time) |
| {saber} | {sabía} = I knew (a fact) | {supe} = I found out |
| {querer} | {quería} = I wanted | {quise} = I tried; {no quise} = I refused |
| {poder} | {podía} = I could (in general) | {pude} = I managed to; {no pude} = I failed to |
| {tener} | {tenía} = I had | {tuve} = I got, I received |

> Conocí a mi mujer en Granada. = I met my wife in Granada.
> Ya conocía a Pedro. = I already knew Pedro.
> Supe la verdad ayer. = I found out the truth yesterday.
> No sabía que estabas aquí. = I didn't know you were here.
> No quiso venir. = He refused to come.
> Por fin pude abrir la puerta. = At last I managed to open the door.

!de: {conocí} = ich lernte kennen; {supe} = ich erfuhr; {no quiso} = er weigerte sich.
!ar: {conocí} ≈ تعرّفتُ على، {supe} ≈ عرفتُ (اكتشفتُ)، {no quiso} ≈ رفض.
`,words:`
conocí = I met (for the first time)
conocía = I knew (someone)
supe = I found out
sabía = I knew
no quiso = he / she refused
quería = I wanted
pude = I managed to
podía = I could (in general)
enterarse = to find out
darse cuenta = to realise
`,phrases:`
Conocí a mi mujer en Granada. = I met my wife in Granada.
Ya conocía a tu hermano. = I already knew your brother.
Supe la noticia ayer. = I found out the news yesterday.
No sabía que estabas aquí. = I didn't know you were here.
Mi hijo no quiso comer. = My son refused to eat.
Por fin pude abrir la puerta. = At last I managed to open the door.
`,drills:`
___ a mi novio en una fiesta en 2020. (conocer, yo) => Conocí | Conocía | Conozco | Conoceré # I met my boyfriend at a party in 2020.
Yo no ___ que tenías hermanos. (saber) => sabía | supe | sé | sabré # I didn't know you had brothers and sisters.
Ayer ___ que estaba embarazada. (found out) => supe | sabía | sé | sepa # Yesterday I found out she was pregnant.
Intenté llamarte, pero no ___. (poder) => pude | podía | puedo | podré # I tried to call you, but I couldn't get through.
Le pedí ayuda, pero no ___ ayudarme. (refused) => quiso | quería | quiere | querrá # I asked him for help, but he refused to help me.
`},{t:`He comido or comí? (Spain)`,k:`grammar`,goal:`Choose between the perfect and the preterite like people in Spain`,body:`
## The Spanish way
In Spain, the choice depends on whether the time period is **finished** for the speaker:
| Pretérito perfecto (he comido) | Pretérito indefinido (comí) |
|---|---|
| today: {hoy, esta mañana, esta tarde} | yesterday and before: {ayer, anoche, anteayer} |
| unfinished periods: {esta semana, este mes, este año} | finished periods: {la semana pasada, el mes pasado, en 2019} |
| experiences without a date: {He estado en Perú.} | with a date: {Estuve en Perú en 2019.} |
| {ya, todavía no, alguna vez, nunca} | {hace dos años, el lunes, una vez} |

> Esta mañana he desayunado tarde, pero ayer desayuné temprano. = This morning I had a late breakfast, but yesterday I had an early one.
> Este año he viajado mucho; el año pasado no viajé nada. = This year I've travelled a lot; last year I didn't travel at all.
> ¿Has estado alguna vez en Perú? — Sí, estuve en 2019. = Have you ever been to Peru? — Yes, I went in 2019.

!es: In Latin America and the Canary Islands people mostly use {comí} even for today ({Hoy comí paella}). In Madrid you'll hear {Hoy he comido paella}.
!de: It feels like German "heute habe ich…", but stricter: with {ayer} always use the preterite.
`,words:`
esta mañana = this morning
este mes = this month
hasta ahora = until now, so far
en toda mi vida = in my whole life
la diferencia = difference
el pasado = the past
el presente = the present
terminado, terminada = finished
reciente = recent
`,phrases:`
Esta mañana he desayunado tarde. = This morning I had breakfast late.
Ayer desayuné muy temprano. = Yesterday I had breakfast very early.
Este mes he trabajado mucho. = This month I've worked a lot.
El mes pasado trabajé poco. = Last month I didn't work much.
¿Has estado en Perú? — Sí, estuve en 2019. = Have you been to Peru? — Yes, I went in 2019.
Hasta ahora todo ha ido bien. = So far everything has gone well.
`,drills:`
Hoy ___ mucho. (trabajar, yo) => he trabajado | trabajé | trabajaba | trabajo # Today I've worked a lot.
Ayer ___ mucho. (trabajar, yo) => trabajé | he trabajado | trabajaba | trabajo # Yesterday I worked a lot.
Esta semana ___ dos veces al cine. (ir, nosotros) => hemos ido | fuimos | íbamos | vamos # This week we've been to the cinema twice.
En 2018 ___ a Berlín. (mudarse, yo) => me mudé | me he mudado | me mudaba | me mudo # In 2018 I moved to Berlin.
¿___ alguna vez en México? (estar, tú) => Has estado | Estuviste | Estabas | Estás # Have you ever been to Mexico?
`},{t:`A life story: biographies`,k:`culture`,goal:`Tell the story of someone’s life`,body:`
## Life events
| | |
|---|---|
| {nacer} | to be born |
| {crecer} | to grow up |
| {ir a la universidad} | to go to university |
| {estudiar una carrera} | to study for a degree |
| {graduarse} | to graduate |
| {conseguir un trabajo} | to get a job |
| {enamorarse} | to fall in love |
| {casarse} | to get married |
| {tener hijos} | to have children |
| {mudarse} | to move (house) |
| {jubilarse} | to retire |
| {morir} | to die |

## A famous life: Federico García Lorca
> Federico García Lorca nació en 1898 en Fuente Vaqueros, cerca de Granada. = Federico García Lorca was born in 1898 in Fuente Vaqueros, near Granada.
> Desde niño le encantaban la música y el teatro. = From childhood he loved music and theatre.
> Estudió en Granada y en Madrid, donde conoció a Dalí y a Buñuel. = He studied in Granada and Madrid, where he met Dalí and Buñuel.
> Escribió poemas y obras de teatro muy famosas, como Bodas de sangre. = He wrote very famous poems and plays, such as Blood Wedding.
> Murió en 1936, al principio de la Guerra Civil. = He died in 1936, at the beginning of the Civil War.

!tip: Biographies use the **preterite** for events ({nació}, {estudió}) and the **imperfect** for descriptions and habits ({le encantaba}, {era}).
!ar: Lorca loved Andalusia's Arab heritage: his book {Diván del Tamarit} uses the {casida} (قصيدة) and the {gacela} (غزل) — forms taken from Arabic poetry.
`,words:`
nacer = to be born
crecer = to grow (up)
la universidad = university
la carrera = degree (course); race
graduarse = to graduate
conseguir = to get, to achieve
enamorarse = to fall in love
jubilarse = to retire
la obra de teatro = play
el poema = poem
el escritor, la escritora = writer
la guerra = war
`,phrases:`
Mi padre nació en 1960 en Casablanca. = My father was born in 1960 in Casablanca.
Estudió Medicina en la universidad. = He studied Medicine at university.
Se conocieron en un viaje y se enamoraron. = They met on a trip and fell in love.
Se casaron dos años después. = They got married two years later.
Mi abuelo se jubiló a los sesenta y cinco años. = My grandfather retired at sixty-five.
Lorca escribió poemas y obras de teatro. = Lorca wrote poems and plays.
`,drills:`
Lorca ___ en 1898. (nacer) => nació | nacía | nace | nacido # Lorca was born in 1898.
De niño le ___ la música. (encantar) => encantaba | encantó | encanta | encantará # As a child he loved music.
En Madrid ___ a Dalí. (conocer, él) => conoció | conocía | conoce | conocerá # In Madrid he met Dalí.
Mis padres se ___ en 1995. (casarse) => casaron | casaban | casan | casarán # My parents got married in 1995.
Mi abuela ___ a los sesenta años. (jubilarse) => se jubiló | se jubilaba | se jubila | se jubilará # My grandmother retired at sixty.
`}],story:{title:`El susto`,text:`
Era una noche de invierno. Llovía mucho y hacía frío. Anna estaba sola en casa porque su compañera de piso estaba de viaje.
= It was a winter night. It was raining hard and it was cold. Anna was alone at home because her flatmate was away.

Eran las doce y Anna estaba leyendo una novela de misterio en el sofá. De repente, oyó un ruido en la cocina.
= It was twelve o'clock and Anna was reading a mystery novel on the sofa. Suddenly, she heard a noise in the kitchen.

Anna dejó el libro y escuchó con atención. No había nadie más en el piso… ¿o sí? Tenía mucho miedo.
= Anna put the book down and listened carefully. There was nobody else in the flat… or was there? She was very scared.

Cogió el móvil y fue despacio hacia la cocina. La puerta estaba cerrada, pero se veía luz por debajo.
= She grabbed her phone and walked slowly towards the kitchen. The door was closed, but there was light under it.

Al abrir la puerta, vio dos ojos verdes que la miraban desde la ventana. Gritó tan fuerte que los vecinos se despertaron.
= When she opened the door, she saw two green eyes looking at her from the window. She screamed so loudly that the neighbours woke up.

¡Era Misi, el gato de la vecina! La ventana estaba abierta y el gato entró para escapar de la lluvia.
= It was Misi, the neighbour's cat! The window was open and the cat had come in to escape the rain.

Al final, Anna se rio mucho, le dio un poco de leche al gato y lo devolvió a su casa. Pero esa noche durmió con la luz encendida.
= In the end Anna laughed a lot, gave the cat some milk and took it back home. But that night she slept with the light on.
`,questions:`
¿Qué tiempo hacía? => Llovía y hacía frío | Hacía sol | Nevaba # What was the weather like?
¿Qué estaba haciendo Anna? => Estaba leyendo una novela | Estaba durmiendo | Estaba cocinando # What was Anna doing?
¿Qué oyó Anna? => Un ruido en la cocina | El timbre | Su móvil # What did Anna hear?
¿Quién estaba en la cocina? => El gato de la vecina | Un ladrón | Su compañera de piso # Who was in the kitchen?
`}},Rs=s({default:()=>zs}),zs={n:15,title:`Comparing, health & commands`,es:`Más que…`,cando:[`I can compare things: más… que, menos… que, tan… como`,`I can use superlatives and -ísimo`,`I can explain my symptoms at the doctor’s`,`I can give commands with tú and vosotros`,`I can give polite commands with usted and ustedes`,`I can give advice about healthy habits`],lessons:[{t:`Comparatives`,k:`grammar`,goal:`Compare people and things`,body:`
## More, less, as… as
| | |
|---|---|
| {más} + adjective + {que} | more … than / -er than |
| {menos} + adjective + {que} | less … than |
| {tan} + adjective + {como} | as … as |
| {tanto / tanta / tantos / tantas} + noun + {como} | as much / as many … as |
| verb + {tanto como} | as much as |

> Madrid es más grande que Sevilla. = Madrid is bigger than Seville.
> El tren es menos caro que el avión. = The train is less expensive than the plane.
> Mi hermano es tan alto como yo. = My brother is as tall as me.
> No tengo tanto dinero como tú. = I don't have as much money as you.
> Trabajo tanto como mi jefe. = I work as much as my boss.

## Irregular comparatives
{bueno} → {mejor} (better), {malo} → {peor} (worse), {grande} (age) → {mayor} (older), {pequeño} (age) → {menor} (younger).
> Este restaurante es mejor que el otro. = This restaurant is better than the other one.
> Mi hermana es dos años mayor que yo. = My sister is two years older than me.

!tip: Before numbers use **de**: {Hay más de cien personas.}
!de: {más … que} = …er als; {tan … como} = so … wie.
!ar: Arabic uses the أفعل pattern (أكبر من); Spanish adds {más}: {más grande que} ≈ أكبر من.
`,words:`
más … que = more … than
menos … que = less … than
tan … como = as … as
tanto como = as much as
mejor = better
peor = worse
mayor = older; bigger
menor = younger; smaller
rápido, rápida = fast
lento, lenta = slow
el tráfico = traffic
`,phrases:`
Madrid es más grande que Sevilla. = Madrid is bigger than Seville.
El tren es más rápido que el autobús. = The train is faster than the bus.
Mi hermano es tan alto como yo. = My brother is as tall as me.
Este café es mejor que el de ayer. = This coffee is better than yesterday's.
Mi hermana es dos años mayor que yo. = My sister is two years older than me.
Hoy hay menos tráfico que ayer. = There's less traffic today than yesterday.
`,drills:`
Barcelona es ___ grande que Valencia. => más | tan | tanto | mucho # Barcelona is bigger than Valencia.
Mi hermana es tan alta ___ yo. => como | que | de | tan # My sister is as tall as me.
Este libro es ___ que el otro. (better) => mejor | más bueno | bueno | mejores # This book is better than the other one.
Hay más ___ cincuenta personas. => de | que | como | tan # There are more than fifty people.
No tengo ___ tiempo como tú. => tanto | tan | tanta | más # I don't have as much time as you.
Mi abuela es ___ que mi abuelo. (older) => mayor | menor | mejor | peor # My grandmother is older than my grandfather.
`},{t:`The best: superlatives & -ísimo`,k:`grammar`,goal:`Say what is the best, the biggest… and use -ísimo`,body:`
## Superlatives
**el / la / los / las + más / menos + adjective + de**:
> Es el edificio más alto de Madrid. = It's the tallest building in Madrid.
> Es la ciudad más bonita de España. = It's the most beautiful city in Spain.
> Son los estudiantes menos puntuales de la clase. = They're the least punctual students in the class.
> Es el mejor restaurante del barrio. = It's the best restaurant in the neighbourhood.

!tip: "in" after a superlative is **de**: {el más alto de la clase}.

## -ísimo: extremely
Add **-ísimo / -ísima**: {bueno} → {buenísimo}, {guapa} → {guapísima}, {caro} → {carísimo}, {fácil} → {facilísimo}, {rico} → {riquísimo}, {largo} → {larguísimo}, {mucho} → {muchísimo}.
> La comida está buenísima. = The food is really good.
> El examen fue facilísimo. = The exam was super easy.

!tip: Spelling keeps the sound: {rico} → {riquísimo}, {largo} → {larguísimo}, {feliz} → {felicísimo}.
!de: {-ísimo} = total / super: {carísimo} = total teuer.
!ar: {carísimo} ≈ غالٍ جدًّا.
`,words:`
el más alto = the tallest
la más bonita = the prettiest
el mejor, la mejor = the best
el peor, la peor = the worst
buenísimo, buenísima = really good, delicious
carísimo, carísima = really expensive
facilísimo, facilísima = super easy
riquísimo, riquísima = delicious
el edificio = building
famoso, famosa = famous
puntual = punctual
el río = river
`,phrases:`
Es el edificio más alto de Madrid. = It's the tallest building in Madrid.
Es la mejor paella del mundo. = It's the best paella in the world.
El Tajo es el río más largo de España. = The Tagus is the longest river in Spain.
La comida está riquísima. = The food is delicious.
Este hotel es carísimo. = This hotel is really expensive.
Es el día más feliz de mi vida. = It's the happiest day of my life.
`,drills:`
Es el museo más famoso ___ Madrid. => de | en | que | del # It's the most famous museum in Madrid.
Es ___ mejor película del año. => la | el | lo | las # It's the best film of the year.
El examen fue ___. (super easy) => facilísimo | fácilísimo | muy facilísimo | fácilmente # The exam was super easy.
Este pastel está ___. (delicious) => riquísimo | ricísimo | riquisimo | más rico # This cake is delicious.
Es el edificio ___ alto de la ciudad. => más | muy | tan | mucho # It's the tallest building in the city.
`},{t:`At the doctor’s`,k:`talk`,goal:`Explain symptoms and understand the doctor’s instructions`,body:`
## Explaining symptoms
> ¿Qué le pasa? = What's the matter? (doctor, formal)
> Me duele la garganta. = I have a sore throat.
> Tengo fiebre y tos. = I have a temperature and a cough.
> Estoy mareado. = I feel dizzy.
> Tengo náuseas. = I feel sick.
> Me he torcido el tobillo. = I've twisted my ankle.
> Soy alérgico a la penicilina. = I'm allergic to penicillin.
> Desde hace tres días. = For three days.

## The doctor says
> Abra la boca. = Open your mouth.
> Respire hondo. = Take a deep breath.
> Le voy a recetar un antibiótico. = I'm going to prescribe you an antibiotic.
> Tómese una pastilla cada ocho horas. = Take one tablet every eight hours.
> Tiene que descansar. = You have to rest.

!es: In Spain you need your {tarjeta sanitaria} (health card) at the {centro de salud}. In an emergency go to {Urgencias} or call **112**. At night, look for the {farmacia de guardia} (the duty chemist's).
!ar: {el jarabe} (syrup) comes from Arabic شراب!
`,words:`
la garganta = throat
la tos = cough
mareado, mareada = dizzy
las náuseas = nausea
torcerse = to twist (an ankle)
el tobillo = ankle
alérgico, alérgica = allergic
recetar = to prescribe
la pastilla = tablet, pill
el jarabe = (cough) syrup
el centro de salud = health centre
urgencias = A&E, emergency department
`,phrases:`
Me duele la garganta y tengo tos. = I have a sore throat and a cough.
Estoy mareada desde esta mañana. = I've felt dizzy since this morning.
Soy alérgico a la penicilina. = I'm allergic to penicillin.
Tómese una pastilla cada ocho horas. = Take one tablet every eight hours.
Necesito pedir cita con el médico. = I need to make an appointment with the doctor.
Me he torcido el tobillo. = I've twisted my ankle.
`,drills:`
Me ___ la garganta. => duele | duelen | dolor | duelo # I have a sore throat.
Tengo ___ y no puedo dormir. (a cough) => tos | tose | toso | tosa # I have a cough and I can't sleep.
Soy ___ a los frutos secos. => alérgico | alergia | alergias | alergénico # I'm allergic to nuts.
Tómese una ___ cada ocho horas. => pastilla | receta | cita | farmacia # Take one tablet every eight hours.
Si es una emergencia, hay que ir a ___. => urgencias | la farmacia | el centro | la receta # If it's an emergency, you have to go to A&E.
`},{t:`Commands: tú & vosotros`,k:`grammar`,goal:`Tell friends and family what to do`,body:`
## Affirmative tú commands
Use the **él / ella** form of the present:
| verb | tú command |
|---|---|
| {hablar} | {¡Habla!} |
| {comer} | {¡Come!} |
| {escribir} | {¡Escribe!} |
| {cerrar} | {¡Cierra la puerta!} |
| {dormir} | {¡Duerme!} |

## Eight irregular tú commands
| | | | |
|---|---|---|---|
| {tener} → {ten} | {venir} → {ven} | {poner} → {pon} | {salir} → {sal} |
| {hacer} → {haz} | {decir} → {di} | {ir} → {ve} | {ser} → {sé} |

## Vosotros commands
Replace the final **-r** of the infinitive with **-d**: {hablad}, {comed}, {escribid}, {id}, {venid}.

## Pronouns attach to the end
> ¡Dímelo! = Tell me!
> ¡Siéntate! = Sit down!
> ¡Ponte el abrigo! = Put your coat on!
> ¡Levantaos! = Get up! (vosotros — the -d drops before -os)

!tip: Attaching pronouns often needs an accent: {come} → {cómelo}, {sienta} → {siéntate}.
!de: Like German, the pronoun comes after the command: {¡Dime!} = Sag mir!
!ar: Like فعل الأمر: {¡Escucha!} ≈ اسمع!، {¡Ven!} ≈ تعال!
`,words:`
¡ven! = come!
¡ten! = take it! here you are!
¡pon! = put!
¡sal! = go out!
¡haz! = do! make!
¡di! = say! tell!
¡ve! = go!
¡sé! = be!
¡siéntate! = sit down!
¡mira! = look!
¡escucha! = listen!
¡date prisa! = hurry up!
`,phrases:`
Ven aquí, por favor. = Come here, please.
Cierra la ventana, que hace frío. = Close the window, it's cold.
Haz los deberes antes de cenar. = Do your homework before dinner.
Siéntate, por favor. = Sit down, please.
¡Date prisa! Llegamos tarde. = Hurry up! We're late.
Niños, lavaos las manos. = Children, wash your hands.
`,drills:`
¡___ aquí! (venir, tú) => Ven | Viene | Venga | Vienes # Come here!
¡___ la puerta, por favor! (cerrar, tú) => Cierra | Cerra | Cierre | Cierras # Close the door, please!
¡___ los deberes! (hacer, tú) => Haz | Hace | Haga | Hazlo # Do your homework!
¡___ la verdad! (decir, tú) => Di | Dice | Diga | Dime # Tell the truth!
Niños, ¡___ a la cama! (ir, vosotros) => id | vais | vayáis | ir # Children, go to bed!
¡___ el abrigo! Hace frío. (ponerse, tú) => Ponte | Ponete | Pónete | Pon te # Put your coat on! It's cold.
`},{t:`Commands: usted & ustedes`,k:`grammar`,goal:`Give polite instructions with usted and ustedes`,body:`
## Formal commands
Take the **yo** form of the present, drop the **-o** and switch the vowel (-ar → **-e**, -er / -ir → **-a**):
| verb | yo | usted | ustedes |
|---|---|---|---|
| {hablar} | {hablo} | {hable} | {hablen} |
| {comer} | {como} | {coma} | {coman} |
| {escribir} | {escribo} | {escriba} | {escriban} |
| {tener} | {tengo} | {tenga} | {tengan} |
| {hacer} | {hago} | {haga} | {hagan} |
| {decir} | {digo} | {diga} | {digan} |

Irregular: {ir} → {vaya}, {ser} → {sea}, {saber} → {sepa}, {dar} → {dé}, {estar} → {esté}.

> Pase, por favor. = Come in, please.
> Siga todo recto y gire a la derecha. = Go straight on and turn right.
> Tome esta pastilla. = Take this tablet.
> Siéntense, por favor. = Please sit down. (ustedes)

!tip: Spelling keeps the sound: {buscar} → {busque}, {pagar} → {pague}, {empezar} → {empiece}.
!es: Spaniards answer the phone with {¿Diga?} or {¿Dígame?} — literally "Say (to me)!"
!de: {Pase} = Treten Sie ein, {Siga} = Gehen Sie weiter — the polite Sie-imperative.
`,words:`
pase = come in (usted)
siga = carry on (usted)
gire = turn (usted)
tome = take (usted)
espere = wait (usted)
diga = say; hello? (on the phone)
oiga = excuse me (to get attention)
siéntese = sit down (usted)
no se preocupe = don't worry (usted)
las instrucciones = instructions
`,phrases:`
Pase, por favor. = Come in, please.
Siga todo recto y gire a la izquierda. = Go straight on and turn left.
Espere un momento, por favor. = Wait a moment, please.
¿Diga? — Hola, ¿está Laura? = Hello? — Hi, is Laura there?
Oiga, ¿me puede ayudar? = Excuse me, can you help me?
No se preocupe, no pasa nada. = Don't worry, it's fine.
`,drills:`
___ usted, por favor. (pasar) => Pase | Pasa | Pasen | Pasé # Come in, please.
___ la segunda calle a la derecha. (tomar, usted) => Tome | Toma | Tomen | Tomé # Take the second street on the right.
Señores, ___ aquí, por favor. (esperar, ustedes) => esperen | espere | esperan | esperad # Gentlemen, please wait here.
___ los ejercicios, por favor. (hacer, usted) => Haga | Hace | Haz | Hago # Do the exercises, please.
___ más despacio, por favor. (hablar, usted) => Hable | Habla | Hablen | Hablé # Speak more slowly, please.
___ con cuidado. (ir, usted) => Vaya | Va | Ve | Ida # Go carefully.
`},{t:`Advice & healthy habits`,k:`talk`,goal:`Give advice and talk about a healthy lifestyle`,body:`
## Giving advice
| | |
|---|---|
| {Deberías} + infinitive | You should… (polite) |
| {Tienes que} + infinitive | You have to… |
| {Es bueno / importante} + infinitive | It's good / important to… |
| {¿Por qué no} + present? | Why don't you…? |
| {Te aconsejo} + infinitive | I advise you to… |

> Deberías dormir más. = You should sleep more.
> ¿Por qué no vas al médico? = Why don't you go to the doctor's?
> Es importante beber mucha agua. = It's important to drink plenty of water.
> Te aconsejo hacer ejercicio. = I advise you to exercise.

## Healthy habits — hábitos saludables
{comer fruta y verdura}, {hacer ejercicio}, {dormir ocho horas}, {beber agua}, {no fumar}, {caminar todos los días}, {evitar el estrés}, {comer menos azúcar}.

!es: The Mediterranean diet — olive oil, fish, vegetables, fruit and pulses ({las legumbres}) — is one reason Spain has one of the highest life expectancies in the world.
!tip: {deberías} is the conditional of {deber} — you'll meet the conditional properly in week 17. Learn it as a phrase for now.
`,words:`
deberías = you should
te aconsejo = I advise you
el consejo = piece of advice
el hábito = habit
saludable = healthy
hacer ejercicio = to exercise
el estrés = stress
evitar = to avoid
las legumbres = pulses (lentils, chickpeas…)
el aceite de oliva = olive oil
la dieta = diet
engordar = to put on weight
adelgazar = to lose weight
`,phrases:`
Deberías dormir más. = You should sleep more.
¿Por qué no vas al médico? = Why don't you go to the doctor's?
Es importante beber mucha agua. = It's important to drink plenty of water.
Te aconsejo hacer ejercicio. = I advise you to exercise.
Quiero adelgazar cinco kilos. = I want to lose five kilos.
La dieta mediterránea es muy saludable. = The Mediterranean diet is very healthy.
`,drills:`
Estás muy cansado. ___ dormir más. => Deberías | Deber | Debido | Deberé # You're very tired. You should sleep more.
¿Por qué no ___ al médico? (ir, tú) => vas | vaya | ve | ir # Why don't you go to the doctor's?
Es ___ beber dos litros de agua al día. => importante | importa | importancia | importado # It's important to drink two litres of water a day.
Te ___ comer menos azúcar. => aconsejo | consejo | aconsejas | aconseja # I advise you to eat less sugar.
Para ___, hay que comer menos y hacer deporte. (lose weight) => adelgazar | engordar | ganar | crecer # To lose weight, you have to eat less and do sport.
`}],story:{title:`En el centro de salud`,text:`
El lunes Omar se despertó con fiebre. Le dolía muchísimo la garganta y no podía hablar bien.
= On Monday Omar woke up with a temperature. His throat was terribly sore and he couldn't speak properly.

Llamó al centro de salud. —¿Diga? —Buenos días, quería pedir cita con el médico. —¿Tiene usted la tarjeta sanitaria? —Sí. —Pues venga hoy a las once.
= He called the health centre. "Hello?" "Good morning, I'd like to make an appointment with the doctor." "Do you have your health card?" "Yes." "Then come today at eleven."

En la consulta, la doctora le preguntó: —¿Qué le pasa? —Me duele la garganta, tengo fiebre y estoy cansadísimo.
= In the consulting room, the doctor asked him: "What's the matter?" "I have a sore throat, a temperature and I'm exhausted."

—Abra la boca, por favor… Sí, tiene la garganta muy roja. Es una infección. Le voy a recetar un antibiótico.
= "Open your mouth, please… Yes, your throat is very red. It's an infection. I'm going to prescribe you an antibiotic."

—Tome una pastilla cada ocho horas durante siete días. Beba mucha agua y descanse. No vaya a trabajar hasta el jueves.
= "Take one tablet every eight hours for seven days. Drink plenty of water and rest. Don't go to work until Thursday."

Omar fue a la farmacia y compró el antibiótico y un jarabe de miel y limón. La farmacéutica fue simpatiquísima.
= Omar went to the chemist's and bought the antibiotic and a honey and lemon syrup. The pharmacist was really nice.

Tres días después, Omar estaba mucho mejor. —¿Qué tal estás? —le preguntó Laura. —¡Mucho mejor que el lunes! Ya puedo hablar… ¡y comer!
= Three days later Omar was much better. "How are you?" Laura asked him. "Much better than on Monday! I can talk now… and eat!"
`,questions:`
¿Qué le dolía a Omar? => La garganta | El estómago | La espalda # What was hurting Omar?
¿Qué le recetó la doctora? => Un antibiótico | Un jarabe | Nada # What did the doctor prescribe?
¿Cada cuántas horas tiene que tomar una pastilla? => Cada ocho horas | Cada dos horas | Cada doce horas # How often does he have to take a tablet?
¿Cómo estaba Omar tres días después? => Mucho mejor | Peor | Igual # How was Omar three days later?
`}},Bs=s({default:()=>Vs}),Vs={n:16,title:`The future & travel`,es:`¡Buen viaje!`,cando:[`I can form the future tense, including the irregular stems`,`I can make predictions and promises`,`I can book a hotel room and solve problems there`,`I can travel by plane and train: tickets, platforms, delays`,`I can use por and para in common situations`,`I can guess about the present with the future of probability`],lessons:[{t:`The future: hablaré`,k:`grammar`,goal:`Form the future tense and use it for predictions and promises`,body:`
## The future tense
Add the endings to the **whole infinitive** — the same endings for -ar, -er and -ir:
| | hablar | comer | vivir |
|---|---|---|---|
| {yo} | {hablar[é]} | {comer[é]} | {vivir[é]} |
| {tú} | {hablar[ás]} | {comer[ás]} | {vivir[ás]} |
| {él / ella / usted} | {hablar[á]} | {comer[á]} | {vivir[á]} |
| {nosotros} | {hablar[emos]} | {comer[emos]} | {vivir[emos]} |
| {vosotros} | {hablar[éis]} | {comer[éis]} | {vivir[éis]} |
| {ellos / ellas / ustedes} | {hablar[án]} | {comer[án]} | {vivir[án]} |

> Mañana lloverá en el norte. = Tomorrow it will rain in the north.
> Te llamaré esta noche. = I'll call you tonight.
> Dentro de diez años viviré en el campo. = In ten years I'll live in the countryside.

## ir a or the future?
- **ir a + infinitive**: plans, things about to happen: {Voy a comprar un coche.}
- **future**: predictions, promises, the more distant future: {En 2050 habrá más coches eléctricos.} {Te lo prometo: estudiaré más.}

!de: The Spanish future is "werden" + infinitive in one word: {hablaré} = ich werde sprechen.
!ar: Like سـ / سوف + المضارع: {hablaré} ≈ سأتكلّم.
`,words:`
hablaré = I will speak
comerás = you will eat
vivirá = he / she will live
lloverá = it will rain
el futuro = future
prometer = to promise
te lo prometo = I promise (you)
dentro de = in (time from now)
el próximo año = next year
el pronóstico = (weather) forecast
el robot = robot
`,phrases:`
Mañana lloverá en el norte. = Tomorrow it will rain in the north.
Te llamaré esta noche. = I'll call you tonight.
Dentro de diez años viviré en el campo. = In ten years I'll live in the countryside.
Te lo prometo: estudiaré más. = I promise: I'll study more.
¿Qué tiempo hará mañana? = What will the weather be like tomorrow?
En el futuro los robots trabajarán por nosotros. = In the future robots will work for us.
`,drills:`
Mañana ___ a mis padres. (llamar, yo) => llamaré | llamará | llamo | llamaría # Tomorrow I'll call my parents.
¿___ en la fiesta? (bailar, tú) => Bailarás | Bailaras | Bailará | Bailarías # Will you dance at the party?
El año que viene ___ en Madrid. (vivir, nosotros) => viviremos | vivimos | vivirán | viviríamos # Next year we'll live in Madrid.
Según el pronóstico, mañana ___. (llover) => lloverá | llueva | llovía | llovió # According to the forecast, it will rain tomorrow.
Te lo prometo: no ___ nunca más. (fumar, yo) => fumaré | fumo | fumé | fumará # I promise: I'll never smoke again.
___ de dos años terminaré la carrera. => Dentro | En | A | Por # In two years I'll finish my degree.
`},{t:`Irregular futures`,k:`grammar`,goal:`Use the twelve irregular future stems`,body:`
## Twelve irregular stems (same endings)
| infinitive | stem | yo |
|---|---|---|
| {tener} | tendr- | {tendré} |
| {poner} | pondr- | {pondré} |
| {salir} | saldr- | {saldré} |
| {venir} | vendr- | {vendré} |
| {valer} | valdr- | {valdré} |
| {poder} | podr- | {podré} |
| {saber} | sabr- | {sabré} |
| {haber} | habr- | {habrá} (there will be) |
| {caber} | cabr- | {cabré} |
| {querer} | querr- | {querré} |
| {hacer} | har- | {haré} |
| {decir} | dir- | {diré} |

!tip: Three groups: **-dr-** ({tendré}, {pondré}, {saldré}, {vendré}), **lost vowel** ({podré}, {sabré}, {habrá}, {querré}), and the two rebels {haré} and {diré}.

> ¿Qué harás este verano? = What will you do this summer?
> No podré ir. = I won't be able to go.
> Saldremos a las ocho. = We'll leave at eight.
> Habrá mucha gente. = There will be lots of people.

!de: Learn the 12 stems once and you get two tenses: the future and the conditional ({tendría}, {haría}…).
`,words:`
tendré = I will have
pondré = I will put
saldré = I will leave, go out
vendré = I will come
podré = I will be able to
sabré = I will know
habrá = there will be
querré = I will want
haré = I will do, make
diré = I will say
el verano que viene = next summer
`,phrases:`
¿Qué harás este verano? = What will you do this summer?
No podré ir a tu fiesta. = I won't be able to come to your party.
Saldremos a las ocho en punto. = We'll leave at eight o'clock sharp.
Mañana habrá mucho tráfico. = There will be a lot of traffic tomorrow.
Te diré la verdad. = I'll tell you the truth.
¿Vendréis a vernos en verano? = Will you (all) come and see us in summer?
`,drills:`
Mañana ___ mucho trabajo. (tener, yo) => tendré | teneré | tendría | tengo # Tomorrow I'll have a lot of work.
¿Qué ___ el fin de semana? (hacer, tú) => harás | hacerás | harías | haces # What will you do at the weekend?
No ___ ir a la reunión. (poder, nosotros) => podremos | poderemos | podríamos | podemos # We won't be able to go to the meeting.
El tren ___ a las nueve. (salir) => saldrá | salirá | saldría | salgrá # The train will leave at nine.
Mañana ___ mucha gente en la playa. (haber) => habrá | haberá | habrán | habría # There will be lots of people on the beach tomorrow.
Te ___ el secreto mañana. (decir, yo) => diré | deciré | diría | digo # I'll tell you the secret tomorrow.
`},{t:`At the hotel`,k:`talk`,goal:`Book a room and sort out problems at a hotel`,body:`
## Booking a room
> Quería reservar una habitación. = I'd like to book a room.
> ¿Tienen habitaciones libres? = Do you have any rooms available?
> Una habitación doble / individual. = A double / single room.
> ¿Para cuántas noches? — Para tres noches. = For how many nights? — For three nights.
> ¿Está incluido el desayuno? = Is breakfast included?
> ¿A qué hora hay que dejar la habitación? = What time is check-out?
> ¿Hay wifi? ¿Cuál es la contraseña? = Is there wifi? What's the password?

## Solving problems
> El aire acondicionado no funciona. = The air conditioning doesn't work.
> No hay agua caliente. = There's no hot water.
> La habitación es muy ruidosa. ¿Me la puede cambiar? = The room is very noisy. Can you change it?

!tip: {Quería} (imperfect) is a very polite way to ask for something in Spain: {Quería una habitación} = I'd like a room.
!es: Places to stay: {el hotel}, {el hostal} (simple, often family-run), {el parador} (state-run hotels in castles and monasteries), {el apartamento turístico} and {el albergue} (hostel — e.g. on the Camino de Santiago).
`,words:`
reservar = to book, to reserve
la habitación = room; bedroom
doble = double
individual = single
incluido, incluida = included
la recepción = reception
el aire acondicionado = air conditioning
el agua caliente = hot water
funcionar = to work (machines)
la reserva = booking, reservation
el ascensor = lift, elevator
quería = I'd like (polite)
`,phrases:`
Quería reservar una habitación doble. = I'd like to book a double room.
¿Para cuántas noches? — Para dos. = For how many nights? — For two.
¿Está incluido el desayuno? = Is breakfast included?
El aire acondicionado no funciona. = The air conditioning doesn't work.
¿Me puede cambiar de habitación? = Can you move me to another room?
Tengo una reserva a nombre de Omar Benali. = I have a booking in the name of Omar Benali.
`,drills:`
Quería ___ una habitación. => reservar | reserva | reservo | reservado # I'd like to book a room.
Una habitación ___ para dos personas. => doble | individual | simple | dos # A double room for two people.
¿Está ___ el desayuno? => incluido | incluida | incluye | incluir # Is breakfast included?
La ducha no ___. => funciona | funcionan | trabaja | trabajan # The shower doesn't work.
Tengo una reserva a ___ de García. => nombre | número | apellido | cargo # I have a booking in the name of García.
`},{t:`Airport & train station`,k:`talk`,goal:`Buy tickets, find your platform and handle delays`,body:`
## At the airport — el aeropuerto
> ¿Dónde se factura el equipaje? = Where do I check in my luggage?
> ¿Me enseña su pasaporte y la tarjeta de embarque? = Can you show me your passport and boarding pass?
> ¿Ventanilla o pasillo? = Window or aisle?
> El vuelo tiene un retraso de una hora. = The flight is delayed by an hour.
> La puerta de embarque es la B12. = The boarding gate is B12.
> He perdido mi maleta. = I've lost my suitcase.

## At the station — la estación
> Un billete de ida y vuelta a Valencia, por favor. = A return ticket to Valencia, please.
> Solo de ida. = Just one way.
> ¿De qué andén sale el tren? = Which platform does the train leave from?
> ¿A qué hora llega a Barcelona? = What time does it arrive in Barcelona?
> ¿Hay que hacer transbordo? = Do I have to change trains?

!es: Spain has one of the largest high-speed networks in the world: {el AVE} links Madrid with Barcelona, Seville, Valencia and Málaga in around two and a half hours. There's a security check, so arrive a little early.
!tip: {perder} = to miss ({He perdido el tren}) *and* to lose ({He perdido la maleta}).
`,words:`
el aeropuerto = airport
el vuelo = flight
facturar = to check in (luggage)
el equipaje = luggage
la tarjeta de embarque = boarding pass
la puerta de embarque = boarding gate
el retraso = delay
el andén = platform
el billete de ida y vuelta = return ticket
solo de ida = one way
el transbordo = change (of trains)
la ventanilla = window (seat); ticket window
el pasillo = aisle; corridor
`,phrases:`
Un billete de ida y vuelta a Sevilla, por favor. = A return ticket to Seville, please.
¿De qué andén sale el tren? = Which platform does the train leave from?
El vuelo tiene una hora de retraso. = The flight is an hour late.
¿Dónde se factura el equipaje? = Where do I check in my luggage?
¿Prefiere ventanilla o pasillo? = Would you prefer a window or an aisle seat?
He perdido el tren de las diez. = I've missed the ten o'clock train.
`,drills:`
Un billete de ida y ___, por favor. => vuelta | volver | vuelo | venida # A return ticket, please.
El tren sale del ___ 5. => andén | puerta | pasillo | vuelo # The train leaves from platform 5.
El vuelo tiene un ___ de dos horas. => retraso | tarde | retrasado | lento # The flight is two hours late.
¿Dónde se ___ las maletas? => facturan | factura | facturo | facturas # Where are suitcases checked in?
¿Prefiere ventanilla o ___? => pasillo | puerta | andén | asiento # Would you prefer window or aisle?
`},{t:`Por or para? The basics`,k:`grammar`,goal:`Use para for purpose and destination, por for cause, route and means`,body:`
## para — purpose, destination, deadline, recipient
| use | example |
|---|---|
| purpose (in order to) | {Estudio para aprender.} |
| destination | {Salgo para Madrid.} |
| deadline | {Lo necesito para el lunes.} |
| recipient | {Este regalo es para ti.} |
| opinion | {Para mí, es fácil.} |

## por — cause, route, means, exchange, time of day
| use | example |
|---|---|
| cause, reason | {Lo hago por ti.} {Gracias por todo.} |
| through, around | {Paseamos por el parque.} |
| means | {Hablo por teléfono.} |
| exchange, price | {Lo compré por diez euros.} |
| part of the day | {por la mañana}, {por la tarde} |
| per | {cien kilómetros por hora} |

!tip: A quick test: **para** points forward to a goal (→); **por** looks back at a cause or moves through something.
!de: {para} ≈ für / um … zu (purpose); {por} ≈ wegen / durch / pro.
!ar: {para} ≈ لـ / لكي (الهدف)، {por} ≈ بسبب / عبر / مقابل.
`,words:`
para = for, in order to
por = by, through, because of, per
para mí = for me; in my opinion
gracias por… = thanks for…
por teléfono = on the phone
por la mañana = in the morning
por ciento = per cent
por hora = per hour
para siempre = forever
el kilómetro = kilometre
`,phrases:`
Este regalo es para ti. = This present is for you.
Gracias por tu ayuda. = Thanks for your help.
Estudio español para trabajar en España. = I'm studying Spanish in order to work in Spain.
Paseamos por el centro. = We walked around the centre.
Necesito el informe para el viernes. = I need the report by Friday.
Lo compré por veinte euros. = I bought it for twenty euros.
`,drills:`
Este libro es ___ mi hermana. => para | por | a | de # This book is for my sister.
Gracias ___ todo. => por | para | de | a # Thanks for everything.
Estudio ___ aprobar el examen. => para | por | a | de # I'm studying (in order) to pass the exam.
Hablamos ___ teléfono cada día. => por | para | en | de # We talk on the phone every day.
Necesito el informe ___ el lunes. => para | por | a | en # I need the report by Monday.
Caminamos ___ la playa. => por | para | de | sin # We walked along the beach.
`},{t:`Predictions & probability`,k:`talk`,goal:`Make predictions and guess about the present with the future`,body:`
## Making predictions
> Creo que mañana hará sol. = I think it'll be sunny tomorrow.
> Seguramente llegaremos tarde. = We'll probably arrive late.
> Estoy seguro de que aprobarás. = I'm sure you'll pass.
> Quizás iré a Marruecos en verano. = Maybe I'll go to Morocco in the summer.
> Dentro de cincuenta años, todos los coches serán eléctricos. = In fifty years, all cars will be electric.

## The future of probability
The future can also express a **guess about the present**:
> ¿Dónde está Ana? — Estará en casa. = Where's Ana? — She's probably at home.
> ¿Qué hora es? — Serán las diez. = What time is it? — It must be about ten.
> Tendrá unos treinta años. = He must be about thirty.

!tip: This "guessing future" is very common in Spain: {¿Quién será?} = I wonder who that is.
!de: Like German "Er wird wohl zu Hause sein" = {Estará en casa}.
!ar: Like لعلّ / ربما: {Estará en casa} ≈ لعلّها في البيت.
`,words:`
creo que = I think (that)
seguramente = probably, surely
estoy seguro de que = I'm sure (that)
quizás = maybe, perhaps
a lo mejor = maybe (Spain, colloquial)
probablemente = probably
eléctrico, eléctrica = electric
estará = he / she will be; is probably
serán las diez = it must be about ten
¿quién será? = I wonder who it is
la predicción = prediction
el planeta = planet
`,phrases:`
Creo que mañana hará sol. = I think it'll be sunny tomorrow.
Seguramente llegaremos tarde. = We'll probably arrive late.
Estoy seguro de que aprobarás. = I'm sure you'll pass.
¿Dónde está Ana? — Estará en casa. = Where's Ana? — She's probably at home.
Llaman a la puerta. ¿Quién será? = Someone's at the door. I wonder who it is.
A lo mejor vamos a la playa. = Maybe we'll go to the beach.
`,drills:`
¿Qué hora es? — No sé, ___ las nueve. => serán | seré | será | serás # What time is it? — I don't know, it must be about nine.
Creo que mañana ___ frío. (hacer) => hará | hace | hacerá | haga # I think it'll be cold tomorrow.
Estoy ___ de que te gustará. => seguro | seguramente | segurado | asegurado # I'm sure you'll like it.
¿Dónde está Pedro? — ___ en el trabajo. => Estará | Estaré | Estarás | Estarán # Where's Pedro? — He's probably at work.
A lo ___ vamos al cine. => mejor | bueno | peor | más # Maybe we'll go to the cinema.
`}],story:{title:`Vacaciones en Marruecos`,text:`
Es junio y Omar y Anna están planeando sus vacaciones. Este verano irán a Marruecos.
= It's June and Omar and Anna are planning their holidays. This summer they'll go to Morocco.

—¿Cómo iremos? —pregunta Anna. —Primero tomaremos el AVE de Madrid a Málaga. Después iremos en autobús hasta Tarifa, y allí cogeremos el ferry a Tánger.
= "How will we get there?" asks Anna. "First we'll take the AVE from Madrid to Málaga. Then we'll go by bus to Tarifa, and there we'll catch the ferry to Tangier."

—¿Cuánto tarda el ferry? —Solo una hora. ¡Desde Tarifa se ve África!
= "How long does the ferry take?" "Only an hour. You can see Africa from Tarifa!"

—¿Y dónde dormiremos? —La primera noche, en un hotel de Tánger. Ya he reservado una habitación doble con vistas al mar. El desayuno está incluido.
= "And where will we sleep?" "The first night, in a hotel in Tangier. I've already booked a double room with a sea view. Breakfast is included."

—Después iremos a Rabat a ver a mi familia. Mi madre preparará un cuscús enorme y mis hermanos te harán mil preguntas.
= "Then we'll go to Rabat to see my family. My mother will make an enormous couscous and my brother and sister will ask you a thousand questions."

—¡Qué nervios! ¿Hablarán español? —Mi hermana, un poco. Pero no te preocupes: yo traduciré. Y seguramente aprenderás algunas palabras de árabe.
= "I'm so nervous! Will they speak Spanish?" "My sister speaks a little. But don't worry: I'll translate. And you'll probably learn some words of Arabic."

—Hará mucho calor, ¿verdad? —Sí, en agosto estaremos a cuarenta grados. ¡Tendrás que llevar crema solar!
= "It'll be very hot, won't it?" "Yes, in August it'll be forty degrees. You'll have to bring sun cream!"
`,questions:`
¿Adónde irán de vacaciones? => A Marruecos | A Italia | A Alemania # Where will they go on holiday?
¿Cómo cruzarán el mar? => En ferry | En avión | En tren # How will they cross the sea?
¿Qué preparará la madre de Omar? => Un cuscús | Una paella | Un tajín # What will Omar's mother make?
¿Quién traducirá? => Omar | La hermana de Omar | Anna # Who will translate?
`}},Hs=s({default:()=>Us}),Us={n:17,title:`Polite requests & A2 wrap-up`,es:`¿Podría…?`,cando:[`I can make polite requests with the conditional: ¿podría…?, me gustaría…`,`I can order a full meal in a restaurant`,`I can join sentences with que, donde and lo que`,`I can form adverbs with -mente`,`I can use acabar de, volver a, dejar de, seguir + gerund`,`I can say how long something has been happening: desde hace, llevar…`],lessons:[{t:`Polite requests: the conditional`,k:`grammar`,goal:`Ask politely and give advice with the conditional`,body:`
## Conditional = infinitive + -ía endings
| | hablar | poder (podr-) |
|---|---|---|
| {yo} | {hablar[ía]} | {podr[ía]} |
| {tú} | {hablar[ías]} | {podr[ías]} |
| {él / ella / usted} | {hablar[ía]} | {podr[ía]} |
| {nosotros} | {hablar[íamos]} | {podr[íamos]} |
| {vosotros} | {hablar[íais]} | {podr[íais]} |
| {ellos / ellas / ustedes} | {hablar[ían]} | {podr[ían]} |

The conditional uses the **same irregular stems** as the future: {tendría}, {haría}, {diría}, {querría}, {saldría}, {vendría}, {sabría}…

## Being polite
> ¿Podría ayudarme? = Could you help me?
> Me gustaría reservar una mesa. = I'd like to book a table.
> ¿Le importaría cerrar la ventana? = Would you mind closing the window?
> ¿Sería posible cambiar la fecha? = Would it be possible to change the date?
> Yo que tú, iría al médico. = If I were you, I'd go to the doctor's.

!tip: In Spain the imperfect {quería} is just as polite: {Quería un café} = I'd like a coffee.
!de: The conditional is the Konjunktiv II: {¿Podría…?} = Könnten Sie…? {Me gustaría} = Ich würde gern / Ich hätte gern.
!ar: {¿Podría…?} ≈ هل يمكنك من فضلك…؟ / لو سمحت.
`,words:`
¿podría…? = could you…? (formal)
¿podrías…? = could you…? (informal)
me gustaría = I would like
¿le importaría…? = would you mind…?
sería = it would be
posible = possible
yo que tú = if I were you
iría = I would go
tendría = I would have
haría = I would do
la fecha = date
amable = kind
`,phrases:`
¿Podría hablar más despacio? = Could you speak more slowly?
Me gustaría reservar una mesa para dos. = I'd like to book a table for two.
¿Le importaría cerrar la puerta? = Would you mind closing the door?
¿Sería posible cambiar la fecha? = Would it be possible to change the date?
Yo que tú, no iría. = If I were you, I wouldn't go.
Muchas gracias, es usted muy amable. = Thank you very much, you're very kind.
`,drills:`
¿___ ayudarme, por favor? (poder, usted) => Podría | Podré | Poderé | Podríamos # Could you help me, please?
Me ___ viajar a Japón. (gustar) => gustaría | gustará | gustarías | gustaré # I'd like to travel to Japan.
Yo que tú, ___ más. (estudiar) => estudiaría | estudiaré | estudiaba | estudio # If I were you, I'd study more.
¿Te ___ venir conmigo? (importar) => importaría | importarías | importaré | importamos # Would you mind coming with me?
Yo no ___ eso. (hacer) => haría | hacería | haciera | hacia # I wouldn't do that.
`},{t:`At the restaurant`,k:`talk`,goal:`Book a table, order a three-course menu and ask about ingredients`,body:`
## Booking & arriving
> Quería reservar una mesa para cuatro a las nueve. = I'd like to book a table for four at nine.
> ¿Tienen mesa para dos? = Do you have a table for two?
> ¿Nos trae la carta, por favor? = Could you bring us the menu, please?

## The menú del día
Spain's great lunch deal: a fixed price for a {primer plato} (starter), a {segundo plato} (main course), {postre} (dessert), bread and a drink.
> De primero, quiero la sopa. = For the first course, I'll have the soup.
> De segundo, el pescado a la plancha. = For the main course, the grilled fish.
> De postre, flan. = For dessert, crème caramel.
> Para beber, agua mineral. = To drink, mineral water.

## During the meal
> ¿Qué nos recomienda? = What do you recommend?
> ¿Este plato lleva cerdo? = Does this dish contain pork?
> Soy vegetariano. = I'm vegetarian.
> ¿Me trae otra servilleta? = Could you bring me another napkin?
> La cuenta, por favor. = The bill, please.

!es: Spaniards say {¡Que aproveche!} to anyone eating — even strangers at the next table. Tips aren't compulsory; 5–10 % is generous.
!ar: Asking about ingredients is completely normal: {¿Lleva cerdo?}, {¿Lleva alcohol?}, {¿Es halal?} Big cities have halal butchers and restaurants.
`,words:`
la carta = menu
el menú del día = set lunch menu
el primer plato = first course
el segundo plato = main course
a la plancha = grilled
asado, asada = roast
frito, frita = fried
el flan = crème caramel
¿qué nos recomienda? = what do you recommend?
¿lleva…? = does it contain…?
vegetariano, vegetariana = vegetarian
la servilleta = napkin
¡que aproveche! = enjoy your meal!
`,phrases:`
Quería reservar una mesa para cuatro. = I'd like to book a table for four.
¿Qué nos recomienda? = What do you recommend?
De primero, la ensalada; de segundo, el pollo asado. = For the first course, the salad; for the main course, the roast chicken.
¿Este plato lleva cerdo? = Does this dish contain pork?
Soy vegetariana. = I'm vegetarian.
¡Que aproveche! = Enjoy your meal!
`,drills:`
¿Nos trae la ___, por favor? (the menu) => carta | cuenta | mesa | plato # Could you bring us the menu, please?
De ___ plato, quiero la sopa. => primer | primero | primera | uno # For the first course, I'll have the soup.
Quiero el pescado a la ___. => plancha | plana | placa | planta # I'd like the grilled fish.
¿Este plato ___ cerdo? => lleva | llevas | lleve | llevan # Does this dish contain pork?
¡Que ___! (enjoy your meal) => aproveche | aprovecha | aproveches | aprovechar # Enjoy your meal!
`},{t:`Who, which, where: que & donde`,k:`grammar`,goal:`Join sentences with que, donde and lo que`,body:`
## que = who, which, that
**que** works for people and things:
> La chica que vive aquí es médica. = The girl who lives here is a doctor.
> El libro que me regalaste es buenísimo. = The book (that) you gave me is great.
> Tengo un amigo que habla seis idiomas. = I have a friend who speaks six languages.

!warn: English can drop "that"; Spanish **never** drops {que}: {el libro que leo} = the book I'm reading.

## donde = where
> Esta es la ciudad donde nací. = This is the city where I was born.
> El restaurante donde cenamos estaba lleno. = The restaurant where we had dinner was full.

## lo que = what (the thing that)
> No entiendo lo que dices. = I don't understand what you're saying.
> Lo que más me gusta es la comida. = What I like most is the food.

!de: {que} is like German der / die / das as a relative pronoun — but it never changes: {el chico que…}, {la chica que…}, {los libros que…}.
!ar: {que} ≈ الذي / التي / الذين: {la chica que vive aquí} ≈ الفتاة التي تسكن هنا.
`,words:`
que = who, which, that
donde = where (in relative clauses)
lo que = what, the thing that
el que, la que = the one that / who
la persona = person
el sitio = place, spot
el compañero, la compañera = colleague, classmate, flatmate
el objeto = object
describir = to describe
`,phrases:`
La chica que vive aquí es médica. = The girl who lives here is a doctor.
El libro que me regalaste es buenísimo. = The book you gave me is great.
Esta es la ciudad donde nací. = This is the city where I was born.
No entiendo lo que dices. = I don't understand what you're saying.
Tengo un compañero que habla seis idiomas. = I have a colleague who speaks six languages.
Es un sitio donde se come muy bien. = It's a place where you can eat really well.
`,drills:`
El chico ___ trabaja conmigo es alemán. => que | quien | donde | lo que # The boy who works with me is German.
La casa ___ vivo es pequeña. => donde | que | lo que | cuando # The house where I live is small.
No sé ___ quieres. => lo que | que | el que | donde # I don't know what you want.
La película ___ vimos ayer fue horrible. => que | donde | lo que | quien # The film we saw yesterday was horrible.
___ más me gusta de España es la gente. => Lo que | Que | El que | Donde # What I like most about Spain is the people.
`},{t:`Adverbs in -mente`,k:`grammar`,goal:`Turn adjectives into adverbs and use common adverbs`,body:`
## Making adverbs
Take the **feminine** form of the adjective and add **-mente**:
| adjective | adverb |
|---|---|
| {rápido / rápida} | {rápidamente} (quickly) |
| {lento / lenta} | {lentamente} (slowly) |
| {tranquilo / tranquila} | {tranquilamente} (calmly) |
| {fácil} | {fácilmente} (easily) |
| {normal} | {normalmente} (normally) |
| {feliz} | {felizmente} (happily) |
| {reciente} | {recientemente} (recently) |

!tip: The adjective keeps its accent: {rápido} → {rápidamente}, {fácil} → {fácilmente}.
!tip: Two adverbs in a row? Only the last one takes -mente: {clara y lentamente}.

## Common adverbs without -mente
{bien} (well), {mal} (badly), {despacio} (slowly), {deprisa} (quickly), {pronto} (soon, early), {tarde} (late), {todavía} (still), {ya} (already), {casi} (almost), {solo} (only).

> Habla español perfectamente. = He speaks Spanish perfectly.
> Conduce despacio, por favor. = Drive slowly, please.
> Llegamos pronto. = We arrived early.

!de: -mente ≈ -lich / -weise: {normalmente} = normalerweise, {finalmente} = schließlich.
!ar: Arabic often uses بـ + noun: {rápidamente} ≈ بسرعة.
`,words:`
rápidamente = quickly
lentamente = slowly
tranquilamente = calmly
fácilmente = easily
perfectamente = perfectly
claramente = clearly
recientemente = recently
finalmente = finally
realmente = really
despacio = slowly
deprisa = quickly
pronto = soon; early
`,phrases:`
Habla español perfectamente. = He speaks Spanish perfectly.
Conduce despacio, por favor. = Drive slowly, please.
Recientemente me he mudado a Valencia. = I've recently moved to Valencia.
Explícamelo clara y lentamente. = Explain it to me clearly and slowly.
Finalmente encontramos el hotel. = We finally found the hotel.
¡Ven pronto! = Come soon!
`,drills:`
rápido → ___ => rápidamente | rapidamente | rápidomente | rápidamento # quickly
fácil → ___ => fácilmente | facilmente | fácilamente | fácilmento # easily
Habla ___. (perfectly) => perfectamente | perfectomente | perfecto mente | perfectamento # He speaks perfectly.
Por favor, habla más ___. (slowly) => despacio | rápido | pronto | tarde # Please speak more slowly.
___ llegamos al hotel a las doce. (finally) => Finalmente | Finalamente | Final | Finalmento # We finally arrived at the hotel at twelve.
`},{t:`Acabar de, volver a, seguir…`,k:`grammar`,goal:`Use common verb phrases with infinitives and gerunds`,body:`
## Verb + infinitive / gerund combinations
| | | |
|---|---|---|
| {acabar de} + inf. | to have just (done) | {Acabo de llegar.} — I've just arrived. |
| {volver a} + inf. | to (do) again | {Vuelve a llover.} — It's raining again. |
| {empezar a} + inf. | to start (doing) | {Empecé a estudiar.} |
| {dejar de} + inf. | to stop (doing) | {He dejado de fumar.} — I've stopped smoking. |
| {estar a punto de} + inf. | to be about to | {Está a punto de llover.} |
| {seguir} + gerund | to keep (doing), still | {Sigo estudiando español.} |
| {llevar} + time + gerund | to have been (doing) for | {Llevo dos años viviendo aquí.} |

!tip: {Acabo de comer} is the natural way to say "I've just eaten" — don't translate word for word.
!de: {acabar de} = gerade (eben) etwas getan haben: {Acabo de llegar} = Ich bin gerade angekommen. {volver a} = wieder: {Vuelvo a empezar} = Ich fange wieder an.
!ar: {acabo de} ≈ للتوّ: {Acabo de llegar} ≈ وصلتُ للتوّ. {dejar de} ≈ توقّف عن.
`,words:`
acabar de = to have just (done)
volver a = to (do) again
dejar de = to stop (doing)
estar a punto de = to be about to
acabo de llegar = I've just arrived
sigo estudiando = I'm still studying
llevo dos años = I've been … for two years
dejar de fumar = to give up smoking
otra vez = again
el tabaco = tobacco, cigarettes
`,phrases:`
Acabo de llegar a casa. = I've just got home.
Vuelve a llover. = It's raining again.
He dejado de fumar. = I've stopped smoking.
El tren está a punto de salir. = The train is about to leave.
Sigo viviendo en el mismo piso. = I'm still living in the same flat.
Llevo un año estudiando español. = I've been learning Spanish for a year.
`,drills:`
Acabo ___ comer. => de | a | que | en # I've just eaten.
Mañana vuelvo ___ trabajar. => a | de | que | en # Tomorrow I'm going back to work.
Mi padre dejó ___ fumar hace diez años. => de | a | que | por # My father stopped smoking ten years ago.
El concierto está a punto ___ empezar. => de | a | que | para # The concert is about to start.
Sigo ___ en el mismo trabajo. (trabajar) => trabajando | trabajar | trabajado | trabajo # I'm still working in the same job.
___ tres años viviendo en Madrid. (llevar, yo) => Llevo | Llevas | Lleva | Llevé # I've been living in Madrid for three years.
`},{t:`How long? Hace, desde, desde hace`,k:`grammar`,goal:`Say how long something has been going on`,body:`
## Asking how long
> ¿Cuánto tiempo hace que vives aquí? = How long have you been living here?
> ¿Desde cuándo estudias español? = Since when have you been studying Spanish?

## Ways to answer
| | |
|---|---|
| {Hace} + time + {que} + present | {Hace dos años que vivo aquí.} |
| present + {desde hace} + time | {Vivo aquí desde hace dos años.} |
| present + {desde} + point in time | {Vivo aquí desde 2024.} / {desde enero} |
| {llevar} + time + gerund | {Llevo dos años viviendo aquí.} |

!warn: Spanish uses the **present** where English uses "have been": {Estudio español desde hace un mes} = I've been studying Spanish for a month.
!de: Exactly like German: "Ich wohne seit zwei Jahren hier" = {Vivo aquí desde hace dos años} — in the present!
!ar: Like منذ: أسكن هنا منذ سنتين = {Vivo aquí desde hace dos años}.

## Compare: hace = ago (with the past)
> Llegué hace dos años. = I arrived two years ago.
> Vivo aquí desde hace dos años. = I've been living here for two years.
`,words:`
¿cuánto tiempo hace que…? = how long have you been…?
¿desde cuándo? = since when?
desde = since, from
desde hace = for (a period up to now)
hace … que = it's been … since
la temporada = season, period
el principio = beginning
el siglo = century
la década = decade
la época = time, era, period
`,phrases:`
¿Cuánto tiempo hace que vives en España? = How long have you been living in Spain?
Hace tres meses que estudio español. = I've been studying Spanish for three months.
Trabajo aquí desde hace un año. = I've been working here for a year.
Vivo en Madrid desde 2025. = I've been living in Madrid since 2025.
¿Desde cuándo os conocéis? = How long have you (all) known each other?
Nos conocemos desde el colegio. = We've known each other since school.
`,drills:`
Vivo en España ___ hace dos años. => desde | hace | durante | por # I've been living in Spain for two years.
___ dos años que trabajo aquí. => Hace | Desde | Lleva | Durante # I've been working here for two years.
Estudio español ___ enero. => desde | desde hace | hace | durante # I've been studying Spanish since January.
¿Desde ___ vives aquí? => cuándo | cuando | cuánto | qué # Since when have you been living here?
Llegué a Madrid ___ tres meses. => hace | desde | desde hace | durante # I arrived in Madrid three months ago.
Te espero ___ las cinco. => desde | hace | desde hace | durante # I've been waiting for you since five.
`}],story:{title:`Una cena especial`,text:`
Omar y Anna se conocen desde hace un año. Esta noche van a cenar a un restaurante muy especial porque Omar tiene una noticia importante.
= Omar and Anna have known each other for a year. Tonight they're having dinner at a very special restaurant because Omar has some important news.

—Buenas noches. ¿Tienen reserva? —Sí, a nombre de Benali, una mesa para dos. —Perfecto, síganme, por favor.
= "Good evening. Do you have a reservation?" "Yes, in the name of Benali, a table for two." "Perfect, follow me, please."

El camarero les trae la carta. —¿Qué nos recomienda? —El cordero asado es la especialidad de la casa, y el pescado a la plancha está buenísimo.
= The waiter brings them the menu. "What do you recommend?" "The roast lamb is the house speciality, and the grilled fish is delicious."

—Para mí, el pescado, por favor. —Y yo querría el cordero. ¿La salsa lleva vino? —No, señor, solo hierbas y limón.
= "For me, the fish, please." "And I'd like the lamb. Does the sauce contain wine?" "No, sir, just herbs and lemon."

Mientras esperan, Anna pregunta: —Bueno, ¿cuál es esa noticia? —Acabo de recibir una oferta de trabajo… ¡en Barcelona!
= While they wait, Anna asks: "So, what's this news?" "I've just received a job offer… in Barcelona!"

—¡Enhorabuena! Pero… ¿te irías de Madrid? —Me gustaría aceptarla, pero no quiero dejar de verte. ¿Vendrías conmigo?
= "Congratulations! But… would you leave Madrid?" "I'd like to accept it, but I don't want to stop seeing you. Would you come with me?"

Anna sonríe. —Llevo meses pensando en cambiar de ciudad… ¡Barcelona me encantaría! —¡Que aproveche, entonces! —dice el camarero, que lo ha oído todo.
= Anna smiles. "I've been thinking about moving to another city for months… I'd love Barcelona!" "Enjoy your meal, then!" says the waiter, who has heard everything.
`,questions:`
¿Desde cuándo se conocen Omar y Anna? => Desde hace un año | Desde hace un mes | Desde el colegio # How long have Omar and Anna known each other?
¿Qué pide Anna? => El pescado | El cordero | La ensalada # What does Anna order?
¿Cuál es la noticia de Omar? => Una oferta de trabajo en Barcelona | Se va a Marruecos | Ha aprobado un examen # What is Omar's news?
¿Qué piensa Anna de ir a Barcelona? => Le encantaría | No quiere ir | No lo sabe # What does Anna think about going to Barcelona?
`}},Ws=s({default:()=>Gs}),Gs={n:18,title:`The subjunctive I — wishes`,es:`¡Ojalá!`,cando:[`I understand what the subjunctive is and when Spanish uses it`,`I can form the present subjunctive of regular verbs`,`I can form irregular subjunctives: sea, esté, vaya, haya, sepa, dé, tenga…`,`I can use stem-changing verbs in the subjunctive`,`I can express wishes with quiero que, espero que and ojalá`,`I can make requests and recommendations: te pido que, te recomiendo que…`],lessons:[{t:`What is the subjunctive?`,k:`grammar`,goal:`Understand when Spanish switches to the subjunctive`,body:`
## Two moods
Spanish verbs have **moods**:
- **Indicative** — facts, what *is*: {Ana viene.} (Ana is coming.)
- **Subjunctive** — wishes, emotions, doubts, what *might be*: {Quiero que Ana venga.} (I want Ana to come.)

The subjunctive usually appears after **que**, when the first part of the sentence expresses a wish, an emotion, a doubt or an influence — **and the subject changes**:
> Quiero ir. = I want to go. (same subject → infinitive)
> Quiero que vayas. = I want you to go. (new subject → que + subjunctive)

!tip: The formula: **[wish / emotion / doubt] + que + [new subject] + subjunctive**.
!ar: A perfect match: Arabic أنْ + المضارع المنصوب. أريد أنْ تذهبَ = {Quiero que vayas}. The particle أنْ ≈ {que}, and the verb changes its mood (منصوب ≈ subjunctive)!
!de: Similar in spirit to the German Konjunktiv ("Ich wünschte, er käme") — but Spanish uses it all the time, in simple everyday sentences: {Espero que te guste} = Ich hoffe, es gefällt dir.

## Meet the forms
> Espero que estés bien. = I hope you're well.
> Quiero que me ayudes. = I want you to help me.
> Ojalá haga sol mañana. = I hope it's sunny tomorrow.
`,words:`
el subjuntivo = subjunctive
el indicativo = indicative
quiero que = I want (someone) to
espero que = I hope (that)
ojalá = hopefully, I really hope
el deseo = wish
la duda = doubt
la emoción = emotion
el modo = mood (grammar); way
`,phrases:`
Quiero que vengas a mi fiesta. = I want you to come to my party.
Espero que estés bien. = I hope you're well.
Ojalá haga buen tiempo mañana. = I hope the weather is good tomorrow.
Mis padres quieren que estudie Medicina. = My parents want me to study Medicine.
Quiero ir, pero quiero que vengas tú también. = I want to go, but I want you to come too.
Espero que te guste el regalo. = I hope you like the present.
`,drills:`
Quiero ___ al cine. (same subject: ir) => ir | que vaya | que voy | vaya # I want to go to the cinema.
Quiero que tú ___ al cine. (ir) => vayas | vas | ir | irás # I want you to go to the cinema.
Espero que ___ bien. (estar, tú) => estés | estás | estar | estuviste # I hope you're well.
___ haga sol mañana. => Ojalá | Quiero | Espero | Creo # I really hope it's sunny tomorrow.
Mis padres quieren ___ estudie más. => que | de | a | si # My parents want me to study more.
`},{t:`Present subjunctive: regular verbs`,k:`grammar`,goal:`Form the present subjunctive of regular verbs`,body:`
## The "opposite vowel"
Take the **yo** form of the present, drop the **-o** and add the opposite vowel: -ar verbs take **-e**, -er / -ir verbs take **-a**:
| | hablar → habl- | comer → com- | vivir → viv- |
|---|---|---|---|
| {yo} | {habl[e]} | {com[a]} | {viv[a]} |
| {tú} | {habl[es]} | {com[as]} | {viv[as]} |
| {él / ella / usted} | {habl[e]} | {com[a]} | {viv[a]} |
| {nosotros} | {habl[emos]} | {com[amos]} | {viv[amos]} |
| {vosotros} | {habl[éis]} | {com[áis]} | {viv[áis]} |
| {ellos / ellas / ustedes} | {habl[en]} | {com[an]} | {viv[an]} |

!tip: You already know these forms — they're the **usted commands**: {hable}, {coma}, {viva}!
!tip: Spelling keeps the sound: {buscar} → {busque}, {llegar} → {llegue}, {empezar} → {empiece}, {coger} → {coja}.

> Quiero que hables con él. = I want you to talk to him.
> Espero que comáis bien. = I hope you (all) eat well.
> Es importante que lleguemos pronto. = It's important that we arrive early.

!de: Because the vowel swaps, {hable} looks like an -er verb — read carefully: {que hable} = dass er spricht (Konjunktiv).
`,words:`
hable = (that) I / he speak(s)
hables = (that) you speak
coma = (that) I / he eat(s)
comas = (that) you eat
viva = (that) I / he live(s)
escriba = (that) I / he write(s)
lleguemos = (that) we arrive
busque = (that) I / he look(s) for
trabajen = (that) they work
pague = (that) I / he pay(s)
`,phrases:`
Quiero que hables con tu jefe. = I want you to talk to your boss.
Espero que comáis bien en el viaje. = I hope you (all) eat well on the trip.
Necesito que me escribas un correo. = I need you to write me an email.
Prefiero que paguemos con tarjeta. = I'd prefer us to pay by card.
Mi madre quiere que viva cerca de ella. = My mother wants me to live near her.
Espero que encuentres trabajo pronto. = I hope you find a job soon.
`,drills:`
Quiero que ___ más despacio. (hablar, tú) => hables | hablas | hable | hablarás # I want you to speak more slowly.
Espero que ___ bien. (comer, vosotros) => comáis | coméis | comas | comen # I hope you (all) eat well.
Necesito que me ___ pronto. (escribir, tú) => escribas | escribes | escriba | escribirás # I need you to write to me soon.
Es importante que ___ a tiempo. (llegar, nosotros) => lleguemos | llegamos | llegemos | llegaremos # It's important that we arrive on time.
Mi jefe quiere que ___ el sábado. (trabajar, yo) => trabaje | trabajo | trabaja | trabajar # My boss wants me to work on Saturday.
Prefiero que ___ tú. (pagar) => pagues | pagas | pages | pagarás # I'd prefer you to pay.
`},{t:`Irregular subjunctives`,k:`grammar`,goal:`Form the irregular subjunctives, including the six DISHES verbs`,body:`
## Irregular yo forms carry over
Because the subjunctive is built on the **yo** form, its irregularities carry over:
| infinitive | yo (present) | subjunctive |
|---|---|---|
| {tener} | {tengo} | {tenga, tengas, tenga…} |
| {hacer} | {hago} | {haga} |
| {decir} | {digo} | {diga} |
| {poner} | {pongo} | {ponga} |
| {salir} | {salgo} | {salga} |
| {venir} | {vengo} | {venga} |
| {traer} | {traigo} | {traiga} |
| {conocer} | {conozco} | {conozca} |
| {ver} | {veo} | {vea} |

## Six truly irregular verbs
| | | |
|---|---|---|
| {dar} → {dé, des, dé, demos, deis, den} | {ir} → {vaya, vayas…} | {ser} → {sea, seas…} |
| {haber} → {haya, hayas…} | {estar} → {esté, estés…} | {saber} → {sepa, sepas…} |

!tip: Memory trick: **D-I-S-H-E-S** = dar, ir, ser, haber, estar, saber.

> Espero que tengas un buen viaje. = I hope you have a good trip.
> Quiero que seas feliz. = I want you to be happy.
> Ojalá haya entradas. = I hope there are tickets.
> No quiero que vayas solo. = I don't want you to go alone.
`,words:`
tenga = (that) I / he have / has
haga = (that) I / he do(es)
diga = (that) I / he say(s)
salga = (that) I / he go(es) out
venga = (that) I / he come(s)
sea = (that) I / he be / is
esté = (that) I / he be (location, state)
vaya = (that) I / he go(es)
haya = (that) there is / are
sepa = (that) I / he know(s)
dé = (that) I / he give(s)
conozca = (that) I / he know(s) (a person)
`,phrases:`
Espero que tengas un buen viaje. = I hope you have a good trip.
Quiero que seas feliz. = I want you to be happy.
Ojalá haya entradas para el concierto. = I hope there are tickets for the concert.
No quiero que vayas solo. = I don't want you to go alone.
Espero que estéis bien. = I hope you're (all) well.
Quiero que me digas la verdad. = I want you to tell me the truth.
`,drills:`
Espero que ___ un buen fin de semana. (tener, tú) => tengas | tienes | tenes | tendrás # I hope you have a good weekend.
Ojalá ___ sol mañana. (hacer) => haga | hace | hará | haya # I hope it's sunny tomorrow.
Quiero que ___ feliz. (ser, tú) => seas | eres | estés | serás # I want you to be happy.
No queremos que ___ solos. (ir, vosotros) => vayáis | vais | vayas | iréis # We don't want you (all) to go alone.
Ojalá ___ entradas. (haber) => haya | hay | hayan | habrá # I hope there are tickets.
Espero que ___ la respuesta. (saber, él) => sepa | sabe | sabrá | saba # I hope he knows the answer.
`},{t:`Stem changers in the subjunctive`,k:`grammar`,goal:`Use stem-changing verbs in the subjunctive`,body:`
## -ar / -er: the same boot as the present
| | pensar | volver |
|---|---|---|
| {yo} | {p[ie]nse} | {v[ue]lva} |
| {tú} | {p[ie]nses} | {v[ue]lvas} |
| {él / ella / usted} | {p[ie]nse} | {v[ue]lva} |
| {nosotros} | {pensemos} | {volvamos} |
| {vosotros} | {penséis} | {volváis} |
| {ellos / ellas / ustedes} | {p[ie]nsen} | {v[ue]lvan} |

## -ir: an extra change in nosotros / vosotros
-ir stem changers also change **e → i** or **o → u** in nosotros and vosotros:
| | sentir | dormir | pedir |
|---|---|---|---|
| {yo} | {s[ie]nta} | {d[ue]rma} | {p[i]da} |
| {nosotros} | {s[i]ntamos} | {d[u]rmamos} | {p[i]damos} |
| {vosotros} | {s[i]ntáis} | {d[u]rmáis} | {p[i]dáis} |
| {ellos} | {s[ie]ntan} | {d[ue]rman} | {p[i]dan} |

> Espero que duermas bien. = I hope you sleep well.
> Quiero que volváis pronto. = I want you (all) to come back soon.
> Es mejor que pidamos la cuenta. = We'd better ask for the bill.
> Ojalá se diviertan. = I hope they have fun.

!tip: It's the same vowel as in the gerund and in the 3rd-person preterite: {durmiendo}, {durmió}, {durmamos}.
`,words:`
piense = (that) I / he think(s)
vuelva = (that) I / he come(s) back
pueda = (that) I / he can
quiera = (that) I / he want(s)
duermas = (that) you sleep
durmamos = (that) we sleep
pida = (that) I / he ask(s) for
pidamos = (that) we ask for
sienta = (that) I / he feel(s)
se diviertan = (that) they have fun
juegue = (that) I / he play(s)
empiece = (that) I / he start(s)
`,phrases:`
Espero que duermas bien. = I hope you sleep well.
Quiero que volváis pronto. = I want you (all) to come back soon.
Es mejor que pidamos la cuenta. = We'd better ask for the bill.
Ojalá se diviertan en la fiesta. = I hope they have fun at the party.
No quiero que pienses eso. = I don't want you to think that.
Espero que puedas venir. = I hope you can come.
`,drills:`
Espero que ___ bien. (dormir, tú) => duermas | dormas | durmas | duermes # I hope you sleep well.
Ojalá ___ venir mañana. (poder, ella) => pueda | puede | poda | podrá # I hope she can come tomorrow.
Es mejor que ___ un taxi. (pedir, nosotros) => pidamos | pedamos | pedimos | pidemos # We'd better order a taxi.
Quiero que ___ a casa temprano. (volver, vosotros) => volváis | vuelváis | volvéis | vuelvan # I want you (all) to come home early.
Espero que los niños se ___. (divertirse) => diviertan | divierten | divertan | divirtieron # I hope the children have fun.
No quiero que el partido ___ sin mí. (empezar) => empiece | empieza | empece | empezará # I don't want the match to start without me.
`},{t:`Wishes: ojalá & que…`,k:`talk`,goal:`Express wishes and use everyday good-wish phrases`,body:`
## Expressing wishes
| | |
|---|---|
| {Quiero que…} | I want (someone) to… |
| {Espero que…} | I hope that… |
| {Deseo que…} | I wish that… (formal) |
| {Ojalá (que)…} | Hopefully… / I really hope… |
| {Prefiero que…} | I'd rather (someone)… |
| {Necesito que…} | I need (someone) to… |

## Good wishes with que
Spanish uses **que + subjunctive** on its own for wishes:
> ¡Que tengas un buen día! = Have a good day!
> ¡Que te vaya bien! = All the best! / Good luck!
> ¡Que descanses! = Sleep well! / Get some rest!
> ¡Que te mejores! = Get well soon!
> ¡Que lo pases bien! = Have a good time!
> ¡Que cumplas muchos más! = Many happy returns!

!ar: {ojalá} comes from Arabic لو شاء الله — "if God wills". Like إن شاء الله, people use it for any hope, religious or not: {Ojalá apruebe el examen}.
!de: {¡Que te vaya bien!} = Mach's gut! / Alles Gute! — and {¡Que te mejores!} = Gute Besserung!
`,words:`
ojalá (que) = hopefully, I really hope
desear = to wish
¡que tengas un buen día! = have a good day!
¡que te vaya bien! = all the best!
¡que descanses! = sleep well! rest well!
¡que te mejores! = get well soon!
¡que lo pases bien! = have a good time!
¡que cumplas muchos más! = many happy returns!
la esperanza = hope
el éxito = success
`,phrases:`
¡Que tengas un buen día! = Have a good day!
¡Que te mejores pronto! = Get well soon!
Ojalá me den el trabajo. = I really hope they give me the job.
Espero que todo salga bien. = I hope everything goes well.
Te deseo mucho éxito. = I wish you lots of success.
¡Que lo paséis bien en la boda! = Have a great time at the wedding!
`,drills:`
¡Que ___ un buen viaje! (tener, tú) => tengas | tienes | tendrás | tuviste # Have a good trip!
Ojalá ___ el examen. (aprobar, yo) => apruebe | apruebo | aprobé | aprobaré # I really hope I pass the exam.
Espero que todo ___ bien. (salir) => salga | sale | salirá | salió # I hope everything goes well.
¡Que te ___! Estás muy enfermo. (mejorar) => mejores | mejoras | mejore | mejorarás # Get well soon! You're very ill.
Te deseo mucho ___. => éxito | exitoso | salida | suceso # I wish you lots of success.
`},{t:`Requests & recommendations`,k:`grammar`,goal:`Ask, advise, allow and forbid with que + subjunctive`,body:`
## Influencing others
Verbs of request, advice, permission and prohibition trigger the subjunctive:
| | |
|---|---|
| {pedir que} | to ask (someone) to |
| {recomendar que} | to recommend that |
| {aconsejar que} | to advise (someone) to |
| {sugerir que} | to suggest that |
| {decir que} (= an order) | to tell (someone) to |
| {permitir que} | to allow (someone) to |
| {prohibir que} | to forbid (someone) to |

> Te pido que me ayudes. = I'm asking you to help me.
> El médico me recomienda que haga ejercicio. = The doctor recommends that I exercise.
> Te aconsejo que reserves con tiempo. = I advise you to book in advance.
> Mi madre me dice que llame más. = My mother tells me to call more often.

!warn: {decir que} + **indicative** reports information: {Dice que viene} (he says he's coming). {decir que} + **subjunctive** gives an order: {Dice que vengas} (he says you should come).
!de: Like "Er sagt, ich soll kommen" = {Dice que venga}.
!ar: Like طلب منه أنْ + المنصوب: {Te pido que me ayudes} ≈ أطلب منك أنْ تساعدني.
`,words:`
pedir que = to ask (someone) to
recomendar = to recommend
aconsejar = to advise
sugerir = to suggest
permitir = to allow
prohibir = to forbid
la recomendación = recommendation
con tiempo = in advance, in good time
el permiso = permission
la norma = rule
`,phrases:`
Te pido que me ayudes. = I'm asking you to help me.
El médico me recomienda que duerma más. = The doctor recommends that I sleep more.
Te aconsejo que reserves con tiempo. = I advise you to book in advance.
Mi madre me dice que llame más. = My mother tells me to call more often.
Mis padres no permiten que salga hasta tarde. = My parents don't let me stay out late.
Os sugiero que visitéis Granada. = I suggest you (all) visit Granada.
`,drills:`
Te pido que ___ más despacio. (conducir) => conduzcas | conduces | conduzca | conducirás # I'm asking you to drive more slowly.
El médico me recomienda que ___ menos sal. (comer, yo) => coma | como | comer | comeré # The doctor recommends that I eat less salt.
Os aconsejo que ___ el museo del Prado. (visitar) => visitéis | visitáis | visiten | visitad # I advise you (all) to visit the Prado.
Dice que ___ mañana. (information: he's coming) => viene | venga | vengas | viniera # He says he's coming tomorrow.
Dice que ___ mañana. (order: you should come) => vengas | vienes | vendrás | venir # He says you should come tomorrow.
`}],story:{title:`Querida Anna`,text:`
Querida Anna: ¿Qué tal estás? Espero que estés bien y que no trabajes demasiado. Aquí en Hamburgo todos te echamos mucho de menos.
= Dear Anna, how are you? I hope you're well and not working too hard. Here in Hamburg we all miss you very much.

Tu padre dice que te ha llamado tres veces esta semana y que no contestas. ¡Ojalá tengas un momento para llamarlo este fin de semana!
= Your father says he has called you three times this week and you don't answer. I hope you find a moment to call him this weekend!

Me cuentas que Omar quiere que vayas a Marruecos este verano. ¡Qué bien! Te recomiendo que lleves ropa ligera y mucha crema solar.
= You tell me that Omar wants you to go to Morocco this summer. How lovely! I recommend that you take light clothes and plenty of sun cream.

Tu abuela te pide que le traigas un pañuelo de seda de Marrakech. Ya sabes que le encantan.
= Your grandmother asks you to bring her a silk scarf from Marrakech. You know she loves them.

Y sobre Barcelona: tu padre y yo queremos que seas feliz. Si quieres ir con Omar, es tu decisión. Solo te pido que lo pienses bien.
= And about Barcelona: your father and I want you to be happy. If you want to go with Omar, it's your decision. I only ask that you think it over carefully.

Te aconsejo que busques piso con tiempo, porque en Barcelona es muy difícil encontrar uno barato.
= I advise you to look for a flat in good time, because in Barcelona it's very hard to find a cheap one.

Un beso muy fuerte. ¡Que tengas una semana estupenda! Tu madre, que te quiere.
= Lots of love. Have a wonderful week! Your mother, who loves you.
`,questions:`
¿Qué espera la madre de Anna? => Que Anna esté bien | Que Anna vuelva a Hamburgo | Que Anna trabaje más # What does Anna's mother hope?
¿Qué le pide la abuela? => Un pañuelo de seda | Crema solar | Una carta # What does the grandmother ask for?
¿Qué quieren los padres de Anna? => Que sea feliz | Que no vaya a Barcelona | Que estudie más # What do Anna's parents want?
¿Por qué tiene que buscar piso con tiempo? => Es difícil encontrar uno barato | No le gusta Barcelona | Omar no tiene casa # Why should she look for a flat early?
`}},Ks=s({default:()=>qs}),qs={n:19,title:`The subjunctive II — feelings & opinions`,es:`No creo que…`,cando:[`I can express feelings about other people’s actions: me alegra que…`,`I can give opinions: creo que + indicative, no creo que + subjunctive`,`I can express doubt and possibility: dudo que, es posible que, quizás`,`I can use impersonal expressions: es importante que, es mejor que…`,`I can give negative commands: no hables, no vayas…`,`I can place pronouns in commands: dímelo / no me lo digas`],lessons:[{t:`Emotions: me alegra que…`,k:`grammar`,goal:`Express feelings about what others do`,body:`
## Feelings about someone else → subjunctive
| | |
|---|---|
| {Me alegra que…} / {Me alegro de que…} | I'm glad that… |
| {Me encanta que…} | I love it that… |
| {Me molesta que…} | It bothers me that… |
| {Me preocupa que…} | It worries me that… |
| {Me da pena que…} | It's a shame that… / I'm sad that… |
| {Siento que…} | I'm sorry that… |
| {Tengo miedo de que…} | I'm afraid that… |
| {Me sorprende que…} | It surprises me that… |

> Me alegra que estés aquí. = I'm glad you're here.
> Me molesta que llegues tarde. = It bothers me that you're late.
> Siento que no puedas venir. = I'm sorry you can't come.
> Me preocupa que no coma. = It worries me that he isn't eating.

!tip: Same subject → infinitive: {Me alegra verte} (I'm glad to see you).
!de: German keeps the indicative ("Ich freue mich, dass du da bist"); Spanish needs the subjunctive: {Me alegro de que estés aquí}.
!ar: Arabic uses أنّ here (يسعدني أنّك هنا), but Spanish switches mood: {Me alegra que estés aquí}.
`,words:`
me alegra que = I'm glad that
alegrarse de = to be glad about
me molesta que = it bothers me that
me preocupa que = it worries me that
me da pena que = it's a shame that, I'm sad that
siento que = I'm sorry that
tengo miedo de que = I'm afraid that
me sorprende que = it surprises me that
el sentimiento = feeling
la pena = sorrow, pity
el miedo = fear
`,phrases:`
Me alegra que estés aquí. = I'm glad you're here.
Me molesta que no me escuches. = It bothers me that you don't listen to me.
Siento que no puedas venir. = I'm sorry you can't come.
Me preocupa que trabajes tanto. = It worries me that you work so much.
Me da pena que te vayas. = I'm sad you're leaving.
Me sorprende que no sepas nadar. = It surprises me that you can't swim.
`,drills:`
Me alegra que ___ aquí. (estar, tú) => estés | estás | estar | estarás # I'm glad you're here.
Me molesta que ___ tarde. (llegar, tú) => llegues | llegas | llegar | legues # It bothers me that you arrive late.
Siento que no ___ venir. (poder, vosotros) => podáis | podéis | puedáis | podréis # I'm sorry you (all) can't come.
Me alegra ___ a mis amigos. (same subject: ver) => ver | que vea | veo | vea # I'm glad to see my friends.
Tengo miedo de que ___ a llover. (empezar) => empiece | empieza | empezar | empezará # I'm afraid it's going to start raining.
`},{t:`Creo que vs no creo que`,k:`grammar`,goal:`Give opinions and switch mood when you deny or doubt`,body:`
## Affirming → indicative · Denying → subjunctive
| indicative (stated as true) | subjunctive (denied or doubted) |
|---|---|
| {Creo que es verdad.} | {No creo que sea verdad.} |
| {Pienso que tienes razón.} | {No pienso que tengas razón.} |
| {Me parece que va a llover.} | {No me parece que vaya a llover.} |
| {Estoy seguro de que viene.} | {No estoy seguro de que venga.} |
| {Es verdad que habla bien.} | {No es verdad que hable bien.} |

## Giving your opinion
> En mi opinión, el transporte público es caro. = In my opinion, public transport is expensive.
> Para mí, lo más importante es la salud. = For me, the most important thing is health.
> Creo que tienes razón. = I think you're right.
> No creo que sea una buena idea. = I don't think it's a good idea.

!tip: {Creo que} takes the **indicative** — even though "I think" sounds unsure in English, Spanish treats it as a statement.
!de: German doesn't change mood: "Ich glaube nicht, dass es stimmt" = {No creo que sea verdad}.
`,words:`
no creo que = I don't think that
pienso que = I think that
me parece que = it seems to me that
en mi opinión = in my opinion
tener razón = to be right
está claro que = it's clear that
es verdad que = it's true that
estar seguro de = to be sure of
la opinión = opinion
la idea = idea
`,phrases:`
Creo que tienes razón. = I think you're right.
No creo que sea una buena idea. = I don't think it's a good idea.
Me parece que va a llover. = It looks like it's going to rain.
No estoy seguro de que venga. = I'm not sure he's coming.
En mi opinión, es demasiado caro. = In my opinion, it's too expensive.
Es verdad que Madrid es muy bonita. = It's true that Madrid is very beautiful.
`,drills:`
Creo que ___ razón. (tener, tú) => tienes | tengas | tener | tenga # I think you're right.
No creo que ___ verdad. (ser) => sea | es | será | ser # I don't think it's true.
Me parece que ___ a llover. (ir) => va | vaya | ir | vayan # It looks like it's going to rain.
No pienso que ___ tan difícil. (ser) => sea | es | ser | era # I don't think it's that difficult.
Es verdad que ___ muy bien. (cocinar, él) => cocina | cocine | cocinar | cocinara # It's true that he cooks very well.
No está claro que ___ mañana. (venir, ellos) => vengan | vienen | venir | vendrán # It's not clear that they'll come tomorrow.
`},{t:`Doubt & possibility`,k:`grammar`,goal:`Express doubt and possibility with the subjunctive`,body:`
## Doubt and possibility → subjunctive
| | |
|---|---|
| {Dudo que…} | I doubt that… |
| {Es posible que…} / {Puede que…} | It's possible that… / Maybe… |
| {Es probable que…} | It's likely that… |
| {Es imposible que…} | It's impossible that… |
| {Quizás / Tal vez} + subjunctive | Perhaps… |

> Dudo que lleguen a tiempo. = I doubt they'll arrive on time.
> Es posible que llueva. = It might rain.
> Puede que tengas razón. = You might be right.
> Quizás vaya a la fiesta. = Perhaps I'll go to the party.

!tip: {quizás} and {tal vez} take the subjunctive when you're unsure (and the indicative when you're fairly sure). But {a lo mejor} always takes the **indicative**: {A lo mejor voy}.
!de: {Es posible que} = Es kann sein, dass…; {Dudo que} = Ich bezweifle, dass… — German keeps the indicative, Spanish doesn't.
!ar: {Es posible que} ≈ من الممكن أنْ + المنصوب — once again أنْ ≈ {que} + subjunctive!
`,words:`
dudo que = I doubt that
es posible que = it's possible that
puede que = maybe, it may be that
es probable que = it's likely that
es imposible que = it's impossible that
quizás = maybe, perhaps
tal vez = perhaps
la posibilidad = possibility
la probabilidad = probability
`,phrases:`
Dudo que lleguen a tiempo. = I doubt they'll arrive on time.
Es posible que llueva esta tarde. = It might rain this afternoon.
Puede que tengas razón. = You might be right.
Quizás vaya a la fiesta. = Perhaps I'll go to the party.
Es imposible que lo sepa. = There's no way he knows.
A lo mejor voy mañana. = Maybe I'll go tomorrow.
`,drills:`
Dudo que ___ a tiempo. (llegar, ellos) => lleguen | llegan | llegarán | llegar # I doubt they'll arrive on time.
Es posible que ___ mañana. (nevar) => nieve | nieva | nevar | nevará # It might snow tomorrow.
Puede que ___ razón. (tener, tú) => tengas | tienes | tener | tengo # You might be right.
A lo mejor ___ al cine. (ir, nosotros) => vamos | vayamos | ir | fuéramos # Maybe we'll go to the cinema.
Es imposible que ___ tan tarde. (ser) => sea | es | será | ser # It can't be that late.
`},{t:`Es importante que…`,k:`grammar`,goal:`Use impersonal expressions with the subjunctive or the infinitive`,body:`
## Impersonal expressions + que + subjunctive
| | |
|---|---|
| {Es importante que…} | It's important that… |
| {Es necesario que…} | It's necessary that… |
| {Es mejor que…} | It's better if… |
| {Es normal que…} | It's normal that… |
| {Es raro que…} | It's strange that… |
| {Es una pena que…} | It's a shame that… |
| {Hace falta que…} | It's necessary that… |

> Es importante que descanses. = It's important that you rest.
> Es mejor que vayamos en tren. = It's better if we go by train.
> Es normal que estés nervioso. = It's normal for you to be nervous.

## No specific person? → infinitive
> Es importante descansar. = It's important to rest.
> Es mejor ir en tren. = It's better to go by train.

## Facts → indicative
{Es verdad que…}, {Es cierto que…}, {Es evidente que…}, {Está claro que…} state facts, so they take the indicative: {Es cierto que es caro.}

!de: German: "Es ist wichtig, dass du dich ausruhst" — Spanish: {Es importante que descanses} (subjunctive!).
`,words:`
es importante que = it's important that
es necesario que = it's necessary that
es mejor que = it's better that
es normal que = it's normal that
es raro que = it's strange that
es una pena que = it's a shame that
hace falta = it's necessary; is needed
es cierto que = it's true that
evidente = obvious
raro, rara = strange; rare
`,phrases:`
Es importante que descanses. = It's important that you rest.
Es mejor que vayamos en tren. = It's better if we go by train.
Es normal que estés nervioso. = It's normal for you to be nervous.
Es una pena que no puedas venir. = It's a shame you can't come.
Hace falta que alguien me ayude. = I need someone to help me.
Es cierto que el español es fácil de pronunciar. = It's true that Spanish is easy to pronounce.
`,drills:`
Es importante que ___ mucha agua. (beber, tú) => bebas | bebes | beber | bebe # It's important that you drink a lot of water.
Es mejor que ___ un taxi. (coger, nosotros) => cojamos | cogemos | cogamos | coger # It's better if we take a taxi.
Es importante ___ bien. (no specific person: dormir) => dormir | que duerma | duerma | dormimos # It's important to sleep well.
Es una pena que no ___ venir. (poder, ellos) => puedan | pueden | poder | podrán # It's a shame they can't come.
Es verdad que ___ mucho calor en Sevilla. (hacer) => hace | haga | hacer | hiciera # It's true that it's very hot in Seville.
Es raro que Ana no ___. (contestar) => conteste | contesta | contestar | contestará # It's strange that Ana isn't answering.
`},{t:`Negative commands`,k:`grammar`,goal:`Tell people what not to do`,body:`
## no + subjunctive
All negative commands use the **present subjunctive**:
| | tú | usted | nosotros | vosotros | ustedes |
|---|---|---|---|---|---|
| {hablar} | {no hables} | {no hable} | {no hablemos} | {no habléis} | {no hablen} |
| {comer} | {no comas} | {no coma} | {no comamos} | {no comáis} | {no coman} |
| {ir} | {no vayas} | {no vaya} | {no vayamos} | {no vayáis} | {no vayan} |
| {hacer} | {no hagas} | {no haga} | {no hagamos} | {no hagáis} | {no hagan} |
| {decir} | {no digas} | {no diga} | {no digamos} | {no digáis} | {no digan} |

> ¡No toques eso! = Don't touch that!
> No llegues tarde. = Don't be late.
> No os preocupéis. = Don't worry. (vosotros)
> No hagan ruido, por favor. = Please don't make any noise. (ustedes)

!tip: Compare: {¡Habla!} / {¡No hables!}, {¡Ven!} / {¡No vengas!}, {¡Id!} / {¡No vayáis!}
!de: German just adds "nicht" to the imperative; Spanish switches to the subjunctive form.
`,words:`
¡no hables! = don't talk!
¡no toques! = don't touch!
¡no vayas! = don't go!
¡no hagas eso! = don't do that!
¡no digas nada! = don't say anything!
¡no llegues tarde! = don't be late!
no te preocupes = don't worry
no os preocupéis = don't worry (you all)
¡no corras! = don't run!
el peligro = danger
peligroso, peligrosa = dangerous
`,phrases:`
¡No toques eso, que quema! = Don't touch that, it's hot!
No llegues tarde mañana. = Don't be late tomorrow.
No te preocupes, todo saldrá bien. = Don't worry, everything will be fine.
No vayáis solos por la noche. = Don't go out alone at night.
No hagan fotos, por favor. = Please don't take photos.
¡No digas eso! = Don't say that!
`,drills:`
¡No ___ eso! (tocar, tú) => toques | tocas | toca | toque # Don't touch that!
No ___ tarde. (llegar, tú) => llegues | llegas | llega | legues # Don't be late.
No ___ ruido, por favor. (hacer, ustedes) => hagan | hacen | haced | hagáis # Please don't make any noise.
No os ___. (preocuparse) => preocupéis | preocupáis | preocupad | preocupen # Don't worry. (vosotros)
¡No ___ nada a nadie! (decir, tú) => digas | dices | di | diga # Don't tell anyone anything!
No ___ por esa calle, es peligrosa. (ir, tú) => vayas | vas | ve | vaya # Don't go down that street, it's dangerous.
`},{t:`Commands with pronouns`,k:`grammar`,goal:`Place pronouns correctly in positive and negative commands`,body:`
## Affirmative: pronouns attached
> Dímelo. = Tell me.
> Cómpralo. = Buy it.
> Siéntese. = Sit down. (usted)
> Dáselo a Ana. = Give it to Ana.
> Levantaos. = Get up. (vosotros)

## Negative: pronouns before the verb
> No me lo digas. = Don't tell me.
> No lo compres. = Don't buy it.
> No se siente ahí. = Don't sit there. (usted)
> No se lo des. = Don't give it to him.
> No os levantéis. = Don't get up. (vosotros)

| affirmative | negative |
|---|---|
| {¡Hazlo!} | {¡No lo hagas!} |
| {¡Cómetelo!} | {¡No te lo comas!} |
| {¡Díselo!} | {¡No se lo digas!} |
| {¡Vete!} | {¡No te vayas!} |

!tip: Attaching pronouns adds a written accent when the stress would move: {compra} → {cómpralo}, {di} → {dímelo}, {da} → {dáselo}.
!de: German keeps the pronoun after the verb both times ("Sag es mir! / Sag es mir nicht!"); Spanish moves it to the front in the negative.
`,words:`
dímelo = tell me (it)
cómpralo = buy it
dáselo = give it to him / her
hazlo = do it
vete = go away
no te vayas = don't go
no me lo digas = don't tell me
no lo hagas = don't do it
cuéntamelo = tell me about it
pruébalo = try it
`,phrases:`
¡Dímelo ya! = Tell me now!
Es muy caro, no lo compres. = It's very expensive, don't buy it.
Pruébalo, está buenísimo. = Try it, it's delicious.
No te vayas todavía. = Don't go yet.
Es un secreto: no se lo digas a nadie. = It's a secret: don't tell anyone.
¿Qué pasó? Cuéntamelo todo. = What happened? Tell me everything.
`,drills:`
El libro… ¡___! (buy it) => cómpralo | cómprolo | compralo | lo compra # The book… buy it!
El libro… no ___ compres. => lo | le | la | se # The book… don't buy it.
¡No te ___ todavía! (irse, tú) => vayas | vas | vete | vaya # Don't go yet!
El secreto… no se ___ digas a nadie. => lo | le | la | te # The secret… don't tell anyone.
¡___ todo! (contar, tú + me + lo) => Cuéntamelo | Cuentamelo | Cuéntalome | Me lo cuenta # Tell me everything!
`}],story:{title:`¿Barcelona o Madrid?`,text:`
Anna y Laura toman un café en la Plaza Mayor. Anna le cuenta que Omar quiere que se muden juntos a Barcelona.
= Anna and Laura are having coffee in the Plaza Mayor. Anna tells her that Omar wants them to move to Barcelona together.

—¡Qué noticia! Me alegra mucho que estéis tan bien juntos —dice Laura—. Pero me da pena que te vayas de Madrid.
= "What news! I'm so glad you're so happy together," says Laura. "But I'm sad you're leaving Madrid."

—Todavía no es seguro. No creo que encuentre trabajo tan rápido allí, y es posible que los pisos sean carísimos.
= "It's not certain yet. I don't think I'll find a job that quickly there, and the flats may be really expensive."

—Mira, yo creo que tienes muchas oportunidades. Hablas alemán, inglés y ahora español. Es normal que tengas miedo, pero no pienses solo en los problemas.
= "Look, I think you have lots of opportunities. You speak German, English and now Spanish. It's normal to be scared, but don't think only about the problems."

—Tienes razón. Además, en Barcelona hay muchas empresas alemanas. Quizás alguna necesite a alguien como yo.
= "You're right. Besides, there are lots of German companies in Barcelona. Perhaps one of them needs someone like me."

—¡Claro que sí! Mi consejo: no lo decidas hoy. Habla con Omar, haz una lista y no te preocupes tanto.
= "Of course! My advice: don't decide today. Talk to Omar, make a list and don't worry so much."

—Gracias, Laura. Eres la mejor. Pero prométeme una cosa: que vendrás a visitarnos. —¡Por supuesto! Es imposible que no vaya: ¡me encanta Barcelona!
= "Thanks, Laura. You're the best. But promise me one thing: that you'll come and visit us." "Of course! There's no way I won't come: I love Barcelona!"
`,questions:`
¿Qué quiere Omar? => Que se muden a Barcelona | Que vuelvan a Marruecos | Que se queden en Madrid # What does Omar want?
¿Qué le da pena a Laura? => Que Anna se vaya de Madrid | Que Anna esté con Omar | Que Anna hable alemán # What makes Laura sad?
¿Qué le preocupa a Anna? => Encontrar trabajo y piso | Aprender catalán | Dejar a Omar # What worries Anna?
¿Qué le aconseja Laura? => No decidirlo hoy | Decidirlo hoy | No hablar con Omar # What does Laura advise?
`}},Js=s({default:()=>Ys}),Ys={n:20,title:`The subjunctive III — time, purpose & people`,es:`Cuando llegues…`,cando:[`I can use cuando + subjunctive to talk about the future`,`I can use hasta que, en cuanto and antes de que`,`I can express purpose with para + infinitive and para que + subjunctive`,`I can describe what I’m looking for: busco un piso que tenga…`,`I can use aunque with the indicative or the subjunctive`,`I can recognise all the main subjunctive triggers`],lessons:[{t:`Cuando + subjunctive`,k:`grammar`,goal:`Use cuando + subjunctive for future events`,body:`
## cuando: future vs habit
| future → subjunctive | habit or past → indicative |
|---|---|
| {Cuando llegue a casa, te llamo.} | {Cuando llego a casa, siempre ceno.} |
| When I get home, I'll call you. | When I get home, I always have dinner. |
| {Cuando tenga dinero, viajaré.} | {Cuando tenía dinero, viajaba.} |
| When I have money, I'll travel. | When I had money, I used to travel. |

!warn: English uses the present for the future here ("when I get home"); Spanish uses the **subjunctive**. Never the future after cuando: {cuando llegue}, not "cuando llegaré".
!tip: Questions keep the future: {¿Cuándo llegarás?} (with an accent). Only **cuando** in a time clause needs the subjunctive.

> Cuando termine la carrera, buscaré trabajo. = When I finish my degree, I'll look for a job.
> Llámame cuando puedas. = Call me when you can.
> Cuando seas mayor, lo entenderás. = When you're older, you'll understand.

!de: "Wenn ich nach Hause komme, rufe ich dich an" — present in German, **subjunctive** in Spanish: {Cuando llegue a casa…}
!ar: Like عندما for the future: عندما أصلُ سأتصل بك ≈ {Cuando llegue, te llamo} — Spanish marks it with the subjunctive.
`,words:`
cuando llegue = when I get there
cuando tenga = when I have
cuando puedas = when you can
cuando seas mayor = when you're older
llámame = call me
terminar la carrera = to finish one's degree
la jubilación = retirement
el sueldo = salary
ahorrar = to save (money)
mayor de edad = of age, adult
`,phrases:`
Cuando llegue a casa, te llamo. = When I get home, I'll call you.
Cuando termine la carrera, buscaré trabajo. = When I finish my degree, I'll look for a job.
Llámame cuando puedas. = Call me when you can.
Cuando tenga dinero, me compraré un coche. = When I have money, I'll buy myself a car.
Cuando seas mayor, lo entenderás. = When you're older, you'll understand.
Cuando llego a casa, siempre me ducho. = When I get home, I always have a shower.
`,drills:`
Cuando ___ a Madrid, te llamaré. (llegar, yo) => llegue | llego | llegaré | llegar # When I arrive in Madrid, I'll call you.
Cuando ___ a casa, siempre ceno. (habit: llegar, yo) => llego | llegue | llegaré | llegar # When I get home, I always have dinner.
Llámame cuando ___. (poder, tú) => puedas | puedes | podrás | poder # Call me when you can.
Cuando ___ mayor, seré médico. (ser, yo) => sea | soy | seré | era # When I grow up, I'll be a doctor.
¿Cuándo ___ las vacaciones? (empezar) => empiezan | empiecen | empezar | empiece # When do the holidays start?
Cuando ___ dinero, viajaré por el mundo. (tener, yo) => tenga | tengo | tendré | tener # When I have money, I'll travel the world.
`},{t:`Until, as soon as, before…`,k:`grammar`,goal:`Use hasta que, en cuanto, antes de que and después de que`,body:`
## Time conjunctions
| | future → subjunctive | habit / past → indicative |
|---|---|---|
| {hasta que} (until) | {Espera hasta que vuelva.} | {Esperé hasta que volvió.} |
| {en cuanto} (as soon as) | {En cuanto llegue, te aviso.} | {En cuanto llegó, me avisó.} |
| {después de que} (after) | {Después de que se vayan, limpiamos.} | {Después de que se fueron, limpiamos.} |
| {mientras} (while / as long as) | {Mientras estés aquí, no pasa nada.} | {Mientras cocinaba, escuchaba música.} |

## antes de que — always subjunctive
> Llámame antes de que salgas. = Call me before you leave.
> Antes de que te vayas, dame tu número. = Before you go, give me your number.

## Same subject → infinitive
> Antes de salir, cierro la ventana. = Before going out, I close the window.
> Después de comer, descanso. = After eating, I rest.

!tip: {antes de que} takes the subjunctive in **every** tense, because the action hasn't happened yet at that point.
!de: {bis} = {hasta que}, {sobald} = {en cuanto}, {bevor} = {antes de que}.
`,words:`
hasta que = until
en cuanto = as soon as
tan pronto como = as soon as
antes de que = before (someone does)
después de que = after (someone does)
avisar = to let (someone) know, to warn
el aviso = notice, warning
apagar = to turn off
irse = to leave, to go away
quedarse = to stay
`,phrases:`
Espera aquí hasta que vuelva. = Wait here until I come back.
En cuanto llegue, te aviso. = As soon as I arrive, I'll let you know.
Llámame antes de que salgas. = Call me before you leave.
Después de que se vayan los invitados, limpiamos. = After the guests leave, we'll clean up.
No me voy hasta que termines. = I'm not leaving until you finish.
Apaga la luz antes de salir. = Turn off the light before you go out.
`,drills:`
Espera aquí hasta que ___. (volver, yo) => vuelva | vuelvo | volveré | volver # Wait here until I come back.
En cuanto ___ algo, te llamo. (saber, yo) => sepa | sé | sabré | saber # As soon as I know anything, I'll call you.
Llámame antes de que ___ de casa. (salir, tú) => salgas | sales | saldrás | salir # Call me before you leave home.
Antes de ___, cierra la puerta. (same subject: salir) => salir | que salgas | sales | salgas # Before going out, close the door.
Ayer esperé hasta que ___ el autobús. (past: llegar) => llegó | llegue | llegará | llega # Yesterday I waited until the bus came.
No me iré hasta que me ___ la verdad. (decir, tú) => digas | dices | dirás | decir # I won't leave until you tell me the truth.
`},{t:`Para que: so that`,k:`grammar`,goal:`Express purpose with para + infinitive and para que + subjunctive`,body:`
## Purpose
| same subject → infinitive | different subject → que + subjunctive |
|---|---|
| {Estudio para aprobar.} | {Te explico la lección para que la entiendas.} |
| I study (in order) to pass. | I'll explain the lesson so that you understand it. |
| {Ahorro para comprar un piso.} | {Ahorro para que mis hijos puedan estudiar.} |

> Te dejo mi coche para que vayas al aeropuerto. = I'm lending you my car so you can get to the airport.
> Hablo despacio para que me entiendan. = I speak slowly so that they understand me.
> ¿Para qué estudias español? — Para trabajar en España. = What are you studying Spanish for? — To work in Spain.

## Other purpose expressions
{a fin de que} (formal: so that), {con el fin de} (with the aim of), {para que no} (so that … not): {Te lo digo para que no te preocupes.}

!tip: {para que} **always** takes the subjunctive.
!de: {damit} = {para que}: "Ich erkläre es, damit du es verstehst" = {Te lo explico para que lo entiendas}.
!ar: {para que} ≈ لكي / كي + المنصوب: كي تفهمَ ≈ {para que entiendas} — exactly the same logic!
`,words:`
para que = so that
¿para qué? = what for?
a fin de que = so that (formal)
con el fin de = with the aim of
dejar = to lend; to let; to leave
el objetivo = aim, objective
el motivo = reason
la meta = goal
el propósito = purpose
`,phrases:`
Te lo explico para que lo entiendas. = I'm explaining it so that you understand it.
Ahorro para comprarme un piso. = I'm saving to buy myself a flat.
Hablo despacio para que me entiendan. = I speak slowly so that they understand me.
Te dejo mi coche para que vayas al aeropuerto. = I'm lending you my car so you can get to the airport.
¿Para qué estudias español? = What are you studying Spanish for?
Te lo digo para que no te preocupes. = I'm telling you so that you don't worry.
`,drills:`
Estudio para ___ el examen. (same subject: aprobar) => aprobar | que apruebe | apruebo | apruebe # I'm studying to pass the exam.
Te lo explico para que lo ___. (entender, tú) => entiendas | entiendes | entender | entenderás # I'm explaining it so that you understand it.
Hablo alto para que todos me ___. (oír) => oigan | oyen | oír | oirán # I speak loudly so that everyone can hear me.
Mis padres trabajan para que yo ___ estudiar. (poder) => pueda | puedo | poder | podré # My parents work so that I can study.
¿Para ___ quieres el dinero? => qué | que | quién | cuál # What do you want the money for?
`},{t:`Busco un piso que tenga…`,k:`grammar`,goal:`Describe known things with the indicative and unknown ones with the subjunctive`,body:`
## Known or unknown?
| known, real → indicative | unknown, hypothetical → subjunctive |
|---|---|
| {Tengo un piso que tiene terraza.} | {Busco un piso que tenga terraza.} |
| I have a flat that has a terrace. | I'm looking for a flat with a terrace (does one exist?). |
| {Conozco a alguien que habla ruso.} | {¿Conoces a alguien que hable ruso?} |
| {Hay un bar que abre los lunes.} | {No hay ningún bar que abra los lunes.} |

> Necesito un compañero de piso que sea ordenado. = I need a flatmate who's tidy.
> Quiero un trabajo que me guste. = I want a job I like.
> No hay nadie que sepa la respuesta. = There's nobody who knows the answer.

!tip: Ask yourself: do I know this thing exists? Yes → indicative. Not sure, or it doesn't exist → subjunctive.
!de: German makes no difference ("eine Wohnung, die eine Terrasse hat"); Spanish marks the unknown flat: {que tenga}.

## Flat-hunting words
{el anuncio} (advert), {el alquiler} (rent), {la fianza} (deposit), {amueblado} (furnished), {luminoso} (bright), {exterior} (facing the street), {la zona} (area).
`,words:`
el compañero de piso = flatmate
ordenado, ordenada = tidy
desordenado, desordenada = messy
el anuncio = advert
amueblado, amueblada = furnished
luminoso, luminosa = bright, full of light
exterior = outward-facing, facing the street
el alquiler = rent
la fianza = deposit
la zona = area
`,phrases:`
Busco un piso que tenga terraza. = I'm looking for a flat with a terrace.
Necesito un compañero de piso que sea ordenado. = I need a flatmate who's tidy.
¿Conoces a alguien que hable ruso? = Do you know anyone who speaks Russian?
Tengo un amigo que habla ruso. = I have a friend who speaks Russian.
No hay ningún restaurante que abra a las seis. = There's no restaurant that opens at six.
Quiero un piso luminoso que no sea muy caro. = I want a bright flat that isn't too expensive.
`,drills:`
Busco un piso que ___ dos dormitorios. (tener) => tenga | tiene | tendrá | tener # I'm looking for a flat with two bedrooms.
Vivo en un piso que ___ dos dormitorios. (tener) => tiene | tenga | tendrá | tener # I live in a flat that has two bedrooms.
¿Hay alguien aquí que ___ alemán? (hablar) => hable | habla | hablará | hablar # Is there anyone here who speaks German?
No hay nadie que ___ la respuesta. (saber) => sepa | sabe | sabrá | saber # There's nobody who knows the answer.
Quiero un trabajo que me ___. (gustar) => guste | gusta | gustará | gustar # I want a job I like.
Tengo un jefe que ___ muy simpático. (ser) => es | sea | será | ser # I have a boss who is very nice.
`},{t:`Aunque: although or even if`,k:`grammar`,goal:`Use aunque with the indicative or the subjunctive, and other contrast words`,body:`
## aunque
| a fact → indicative | a possibility, or it doesn't matter → subjunctive |
|---|---|
| {Aunque llueve, vamos a salir.} | {Aunque llueva, vamos a salir.} |
| Although it's raining (it is), we're going out. | Even if it rains (it might), we're going out. |
| {Aunque es caro, lo compro.} | {Aunque sea caro, lo compro.} |
| Although it's expensive (I know), I'll buy it. | Even if it's expensive (I don't care), I'll buy it. |

> Aunque estoy cansado, voy a terminar el trabajo. = Although I'm tired, I'm going to finish the work.
> Aunque me lo pidas de rodillas, no voy. = Even if you beg me on your knees, I'm not going.

## Other contrast words
{a pesar de que} (despite the fact that), {a pesar de} + noun (despite), {sin embargo} (however), {pero} (but), {sino} (but rather): {No es rojo, sino naranja.}

!de: {aunque} + indicative = obwohl; {aunque} + subjunctive = auch wenn / selbst wenn.
!ar: {aunque} + indicative ≈ مع أنّ؛ {aunque} + subjunctive ≈ حتى لو.
`,words:`
aunque = although; even if
a pesar de que = despite the fact that
a pesar de = despite
sin embargo = however
sino = but rather
de rodillas = on one's knees
el esfuerzo = effort
merecer la pena = to be worth it
de todas formas = anyway
`,phrases:`
Aunque llueve, vamos a la playa. = Although it's raining, we're going to the beach.
Aunque llueva mañana, iremos a la playa. = Even if it rains tomorrow, we'll go to the beach.
Aunque es caro, merece la pena. = Although it's expensive, it's worth it.
No es mi hermano, sino mi primo. = He's not my brother, but my cousin.
A pesar del frío, salimos a pasear. = Despite the cold, we went out for a walk.
Estaba cansado; sin embargo, terminó el trabajo. = He was tired; however, he finished the work.
`,drills:`
Aunque ___ cansado, voy a salir. (estar — I am tired) => estoy | esté | estaré | estar # Although I'm tired, I'm going out.
Aunque mañana ___, iremos de excursión. (llover — maybe) => llueva | llueve | lloverá | llover # Even if it rains tomorrow, we'll go on the trip.
No es azul, ___ verde. => sino | pero | aunque | sin embargo # It's not blue, but green.
A pesar ___ frío, fuimos a la playa. => del | de | que | de el # Despite the cold, we went to the beach.
Es caro; sin ___, lo voy a comprar. => embargo | duda | razón | problema # It's expensive; however, I'm going to buy it.
`},{t:`Subjunctive triggers: the big picture`,k:`grammar`,goal:`Know when to use the subjunctive — at a glance`,body:`
## When do I need the subjunctive?
A handy mnemonic is **WEIRDO**:
| | trigger | example |
|---|---|---|
| **W** | Wishes, wants | {Quiero que vengas.} |
| **E** | Emotions | {Me alegra que estés aquí.} |
| **I** | Impersonal expressions | {Es importante que descanses.} |
| **R** | Recommendations, requests | {Te recomiendo que lo leas.} |
| **D** | Doubt, denial | {No creo que sea verdad.} |
| **O** | Ojalá | {Ojalá llueva.} |

Plus: future time clauses ({cuando llegues}), purpose ({para que}), unknown things ({busco a alguien que sepa…}), {antes de que} and {aunque} (= even if).

## More triggers — always subjunctive
{con tal de que} (provided that), {sin que} (without someone…), {a no ser que} (unless), {es imprescindible que} (it's essential that), {insistir en que} (to insist that), {no es que} (it's not that).

## Quick check
1. Is there a **new subject** after {que}? If not → infinitive.
2. Is the first part a wish, emotion, doubt, request or judgement? → subjunctive.
3. Is it a fact, a certainty, or an opinion stated as true? → indicative.

!de: German speakers tend to overuse the indicative ("es importante que vienes" ✗). Remember: {Es importante que vengas}.
!ar: Trust your Arabic instinct: wherever Arabic uses أنْ / لكي + المنصوب (أريد أنْ، يجب أنْ، من المهم أنْ، لكي), Spanish probably wants {que} + subjunctive.
`,words:`
con tal de que = provided that
sin que = without (someone doing)
a no ser que = unless
es imprescindible que = it's essential that
insistir en que = to insist that
no es que = it's not that
conviene que = it's advisable that
me extraña que = it surprises me that
la condición = condition
el requisito = requirement
`,phrases:`
Te lo presto con tal de que me lo devuelvas. = I'll lend it to you provided you give it back.
Me voy sin que nadie se dé cuenta. = I'm leaving without anyone noticing.
Iremos a la playa, a no ser que llueva. = We'll go to the beach unless it rains.
Es imprescindible que traigas el pasaporte. = It's essential that you bring your passport.
Me extraña que no conteste. = It's strange that she isn't answering.
Mi madre insiste en que coma más. = My mother insists that I eat more.
`,drills:`
Iremos a la playa a no ser que ___. (llover) => llueva | llueve | lloverá | llover # We'll go to the beach unless it rains.
Es imprescindible que ___ el pasaporte. (traer, tú) => traigas | traes | traerás | traer # It's essential that you bring your passport.
Te lo presto con tal de que me lo ___. (devolver, tú) => devuelvas | devuelves | devolverás | devolver # I'll lend it to you provided you give it back.
Sé que ___ razón. (tener, tú) => tienes | tengas | tener | tuvieras # I know you're right.
No es que no me ___, es que no tengo tiempo. (gustar) => guste | gusta | gustará | gustar # It's not that I don't like it, it's that I don't have time.
Mi madre insiste en que ___ más. (comer, yo) => coma | como | comer | comeré # My mother insists that I eat more.
`}],story:{title:`Buscando piso en Barcelona`,text:`
Anna y Omar han decidido mudarse a Barcelona en septiembre. Ahora están buscando un piso que no sea demasiado caro.
= Anna and Omar have decided to move to Barcelona in September. Now they're looking for a flat that isn't too expensive.

—Quiero un piso que tenga mucha luz y que esté cerca del mar —dice Anna. —Y yo necesito uno con buena conexión a internet, para que pueda trabajar desde casa —dice Omar.
= "I want a flat with lots of light and close to the sea," says Anna. "And I need one with a good internet connection so that I can work from home," says Omar.

Encuentran un anuncio: piso luminoso, dos dormitorios, amueblado, en el barrio de Gràcia. Llaman a la agencia.
= They find an advert: bright flat, two bedrooms, furnished, in the Gràcia neighbourhood. They call the agency.

—Buenos días. ¿Está disponible el piso de Gràcia? —Sí, pero hay muchas personas interesadas. Les aconsejo que vengan a verlo cuanto antes.
= "Good morning. Is the flat in Gràcia available?" "Yes, but lots of people are interested. I advise you to come and see it as soon as possible."

—Llegaremos el sábado. ¿Podría esperarnos hasta que lo veamos? —No puedo prometérselo: en cuanto alguien me haga una oferta, lo alquilaré.
= "We'll arrive on Saturday. Could you wait until we've seen it?" "I can't promise that: as soon as someone makes me an offer, I'll rent it out."

El sábado van a verlo. Aunque es pequeño, es precioso y tiene una terraza con vistas. —¡Nos lo quedamos! —dice Anna antes de que Omar pueda decir nada.
= On Saturday they go to see it. Although it's small, it's lovely and has a terrace with a view. "We'll take it!" says Anna before Omar can say a word.

—Perfecto. Cuando firmen el contrato, tendrán que pagar dos meses de fianza. —Vale. ¡Y cuando nos den las llaves, haremos una fiesta!
= "Perfect. When you sign the contract, you'll have to pay two months' deposit." "OK. And when they give us the keys, we'll have a party!"
`,questions:`
¿Qué tipo de piso quiere Anna? => Con mucha luz y cerca del mar | Grande y barato | En el centro de Madrid # What kind of flat does Anna want?
¿Para qué necesita Omar internet? => Para trabajar desde casa | Para ver películas | Para llamar a su familia # Why does Omar need internet?
¿Cómo es el piso de Gràcia? => Pequeño pero precioso | Grande y oscuro | Caro y feo # What's the flat in Gràcia like?
¿Qué tienen que pagar al firmar el contrato? => Dos meses de fianza | Un año de alquiler | Nada # What do they have to pay when they sign the contract?
`}},Xs=s({default:()=>Zs}),Zs={n:21,title:`Work & formal Spanish`,es:`El mundo laboral`,cando:[`I can use the pluperfect: había hecho`,`I can talk about jobs, contracts and working conditions`,`I can write a formal email`,`I can handle a job interview in Spanish`,`I can link ideas with sin embargo, por lo tanto, así que, ya que…`,`I can use adjectives that change meaning with ser and estar`],lessons:[{t:`Pluperfect: había hecho`,k:`grammar`,goal:`Talk about what had happened before another past event`,body:`
## The past before the past
**había / habías / había / habíamos / habíais / habían + participle**
| | |
|---|---|
| {yo} | {había comido} |
| {tú} | {habías comido} |
| {él / ella / usted} | {había comido} |
| {nosotros} | {habíamos comido} |
| {vosotros} | {habíais comido} |
| {ellos / ellas / ustedes} | {habían comido} |

Use it for an action that happened **before** another past action:
> Cuando llegué, la película ya había empezado. = When I arrived, the film had already started.
> No fui a la fiesta porque había trabajado todo el día. = I didn't go to the party because I'd worked all day.
> Nunca había visto el mar. = I had never seen the sea.

!tip: {ya} (already) and {nunca} (never) love this tense: {Cuando llamaste, ya me había acostado.}
!de: Exactly the German Plusquamperfekt: "Ich hatte gegessen" = {Había comido}.
!ar: Like كان قد + الماضي: {Había comido} ≈ كنتُ قد أكلتُ.
`,words:`
había comido = I had eaten
habías visto = you had seen
habíamos llegado = we had arrived
ya había = had already
nunca había = had never
el pluscuamperfecto = pluperfect
olvidarse de = to forget
`,phrases:`
Cuando llegué, la película ya había empezado. = When I arrived, the film had already started.
Nunca había visto el mar. = I had never seen the sea.
Estaba cansado porque había trabajado mucho. = I was tired because I'd worked a lot.
¿Ya habías estado en España antes? = Had you been to Spain before?
Me di cuenta de que me había olvidado las llaves. = I realised I'd forgotten my keys.
Cuando llamaste, ya nos habíamos acostado. = When you called, we'd already gone to bed.
`,drills:`
Cuando llegué, el tren ya ___ salido. => había | ha | habrá | hubo # When I arrived, the train had already left.
Nunca ___ comido sushi antes de ese día. (yo) => había | he | habré | hubiera # I had never eaten sushi before that day.
¿___ estado en Granada antes? (tú) => Habías | Has | Habrás | Habéis # Had you been to Granada before?
Cuando volvimos, alguien ___ entrado en casa. => había | ha | habían | hemos # When we got back, someone had got into the house.
Los niños ya se habían ___ cuando llegamos. (dormir) => dormido | dormidos | durmiendo | dormían # The children had already fallen asleep when we arrived.
`},{t:`The world of work`,k:`vocab`,goal:`Talk about jobs, contracts and working conditions`,body:`
## Work vocabulary
| | |
|---|---|
| {el trabajo / el empleo} | job, employment |
| {la empresa} | company |
| {el jefe / la jefa} | boss |
| {el compañero / la compañera} | colleague |
| {el sueldo / el salario} | salary |
| {el contrato} | contract |
| {indefinido / temporal} | permanent / temporary |
| {la jornada completa / la media jornada} | full-time / part-time |
| {el horario} | working hours |
| {el paro} | unemployment (Spain) |
| {estar en paro} | to be unemployed |
| {contratar / despedir} | to hire / to fire |
| {la entrevista} | interview |
| {el currículum} | CV |

> Trabajo a jornada completa en una empresa de software. = I work full-time for a software company.
> Tengo un contrato indefinido. = I have a permanent contract.
> Mi hermano está en paro desde marzo. = My brother has been unemployed since March.

!es: Spanish work culture: the {jornada intensiva} (about 8 am to 3 pm, without a lunch break) is common in summer; people usually get 22 working days of holiday plus about 14 public holidays ({festivos}). Many offices go quiet in August.
!de: {el paro} = die Arbeitslosigkeit, {un contrato indefinido} = ein unbefristeter Vertrag.
`,words:`
el empleo = employment, job
el sueldo = salary
el contrato = contract
indefinido, indefinida = permanent (contract)
temporal = temporary
la jornada completa = full-time
la media jornada = part-time
el horario = working hours, timetable
el paro = unemployment (Spain)
estar en paro = to be unemployed
la entrevista = interview
el currículum = CV
contratar = to hire
`,phrases:`
Trabajo a jornada completa en una empresa de software. = I work full-time for a software company.
Tengo un contrato indefinido. = I have a permanent contract.
Mi hermano está en paro desde marzo. = My brother has been unemployed since March.
¿Cuál es el horario de trabajo? = What are the working hours?
Me han ofrecido un contrato temporal de seis meses. = They've offered me a six-month temporary contract.
La empresa va a contratar a diez personas. = The company is going to hire ten people.
`,drills:`
Trabajo ocho horas al día: tengo jornada ___. => completa | media | entera | total # I work eight hours a day: I work full-time.
No tengo trabajo: estoy en ___. => paro | pausa | parado | baja # I don't have a job: I'm unemployed.
Mi contrato es ___: termina en diciembre. => temporal | indefinido | completo | fijo # My contract is temporary: it ends in December.
Mañana tengo una ___ de trabajo. => entrevista | entrada | encuesta | vista # Tomorrow I have a job interview.
La empresa va a ___ a dos ingenieros. => contratar | contrato | contraer | contar # The company is going to hire two engineers.
`},{t:`Writing a formal email`,k:`talk`,goal:`Write a formal email with the right greetings and formulas`,body:`
## Structure
| part | example |
|---|---|
| greeting | {Estimado señor García:} / {Estimada señora López:} / {Estimados señores:} |
| reason for writing | {Le escribo para solicitar información sobre…} |
| | {Me pongo en contacto con usted en relación con…} |
| body | {Me gustaría saber si…} / {Le agradecería que me enviara…} |
| attachments | {Le adjunto mi currículum.} |
| closing | {Quedo a la espera de su respuesta.} |
| sign-off | {Atentamente,} / {Un cordial saludo,} |

!tip: After the greeting Spanish uses a **colon**, not a comma: {Estimada señora López:}
!tip: Formal emails use **usted**: {le escribo}, {su empresa}, {le adjunto}.

## Informal emails
{Hola, Ana:} / {Querida Ana:} … {Un abrazo,} / {Besos,} / {Hasta pronto,}

!de: {Estimado señor García:} = Sehr geehrter Herr García, — and {Atentamente} = Mit freundlichen Grüßen.
!ar: Like تحية طيبة وبعد and مع خالص التحية — Spanish formal letters also use fixed formulas.
`,words:`
estimado, estimada = dear (formal)
le escribo para… = I'm writing to…
solicitar = to request; to apply for
adjuntar = to attach
el archivo adjunto = attachment
quedo a la espera de… = I look forward to…
atentamente = yours sincerely
un cordial saludo = kind regards
un abrazo = a hug; best wishes (informal)
el asunto = subject (of an email); matter
la solicitud = application, request
el correo electrónico = email
`,phrases:`
Estimada señora López: = Dear Mrs López,
Le escribo para solicitar información sobre el curso. = I'm writing to request information about the course.
Le adjunto mi currículum. = Please find my CV attached.
Quedo a la espera de su respuesta. = I look forward to your reply.
Atentamente, Anna Weber. = Yours sincerely, Anna Weber.
Un abrazo y hasta pronto. = Best wishes and see you soon.
`,drills:`
___ señor García: => Estimado | Estimada | Estimados | Estimadas # Dear Mr García,
Le escribo ___ solicitar el puesto. => para | por | a | de # I'm writing to apply for the position.
Le ___ mi currículum. => adjunto | adjunta | junto | ajunto # I'm attaching my CV.
Quedo a la ___ de su respuesta. => espera | esperanza | esperando | esperar # I look forward to your reply.
___, Omar Benali => Atentamente | Atento | Atención | Atentos # Yours sincerely, Omar Benali
`},{t:`The job interview`,k:`talk`,goal:`Answer typical interview questions about yourself`,body:`
## Typical questions
> ¿Por qué quiere trabajar en nuestra empresa? = Why do you want to work for our company?
> Hábleme de su experiencia. = Tell me about your experience.
> ¿Cuáles son sus puntos fuertes y débiles? = What are your strengths and weaknesses?
> ¿Dónde se ve dentro de cinco años? = Where do you see yourself in five years?
> ¿Cuándo podría empezar? = When could you start?

## Useful answers
> Tengo cinco años de experiencia en el sector. = I have five years' experience in the industry.
> Soy una persona responsable, organizada y con capacidad de trabajo en equipo. = I'm responsible, organised and good at teamwork.
> Hablo cuatro idiomas: árabe, inglés, alemán y español. = I speak four languages: Arabic, English, German and Spanish.
> Me interesa mucho este puesto porque… = I'm very interested in this position because…
> Podría empezar el mes que viene. = I could start next month.

!tip: Use **usted** in interviews unless the interviewer switches to {tú} — many young companies do!
!es: List your languages with levels on a Spanish CV: {alemán — C1}, {español — B1}. A photo used to be standard; today it's optional.
`,words:`
el puesto = position, post
la experiencia laboral = work experience
los puntos fuertes = strengths
los puntos débiles = weaknesses
responsable = responsible
organizado, organizada = organised
el trabajo en equipo = teamwork
el sector = sector, industry
la formación = training, education
el candidato, la candidata = candidate
el mes que viene = next month
`,phrases:`
¿Por qué quiere trabajar en nuestra empresa? = Why do you want to work for our company?
Tengo cinco años de experiencia en el sector. = I have five years' experience in the industry.
Soy una persona responsable y organizada. = I'm a responsible and organised person.
Me interesa mucho este puesto. = I'm very interested in this position.
¿Cuándo podría empezar? — El mes que viene. = When could you start? — Next month.
Me encanta el trabajo en equipo. = I love teamwork.
`,drills:`
Me interesa mucho este ___. => puesto | puerto | puesta | punto # I'm very interested in this position.
Tengo tres años de ___ en marketing. => experiencia | experimento | expediente | esperanza # I have three years' experience in marketing.
Uno de mis puntos ___ es la paciencia. => fuertes | fuerte | fortes | forzados # One of my strengths is patience.
¿Dónde se ___ dentro de cinco años? (ver, usted) => ve | vea | verá | ves # Where do you see yourself in five years?
Hablo cuatro ___. => idiomas | idiomes | lenguajes | dialectos # I speak four languages.
`},{t:`Connectors: sin embargo, así que…`,k:`vocab`,goal:`Link your ideas with B1 connectors`,body:`
## Connecting ideas
| function | connectors |
|---|---|
| adding | {además}, {también}, {incluso} (even), {es más} (what's more) |
| contrast | {pero}, {sin embargo} (however), {en cambio} (on the other hand), {aunque} |
| cause | {porque}, {ya que} (since), {como} (as — at the start), {debido a} (due to) |
| consequence | {así que} (so), {por lo tanto} (therefore), {por eso}, {de modo que} |
| ordering | {en primer lugar}, {en segundo lugar}, {por último} |
| conclusion | {en resumen}, {en conclusión}, {al fin y al cabo} (after all) |

> Como no tenía dinero, no fui al viaje. = As I didn't have any money, I didn't go on the trip.
> El piso es pequeño; sin embargo, es muy luminoso. = The flat is small; however, it's very bright.
> Ya que estás aquí, ¿me ayudas? = Since you're here, will you help me?
> Llovía mucho, así que nos quedamos en casa. = It was raining hard, so we stayed at home.

!tip: {como} meaning "as / since" goes at the **beginning** of the sentence: {Como hace frío, me quedo en casa.}
!de: {sin embargo} = jedoch, {por lo tanto} = deshalb / daher, {en cambio} = dagegen, {ya que} = da.
`,words:`
sin embargo = however
en cambio = on the other hand
por lo tanto = therefore
así que = so
ya que = since, as
como = as, since (at the start of a sentence)
debido a = due to
incluso = even
en primer lugar = first of all
por último = finally, lastly
en resumen = in short
al fin y al cabo = after all
`,phrases:`
Como no tenía dinero, no fui al viaje. = As I didn't have any money, I didn't go on the trip.
El piso es pequeño; sin embargo, es muy luminoso. = The flat is small; however, it's very bright.
Ya que estás aquí, ¿me ayudas? = Since you're here, will you help me?
Llovía mucho, así que nos quedamos en casa. = It was raining hard, so we stayed at home.
Yo prefiero la montaña; mi hermana, en cambio, prefiere la playa. = I prefer the mountains; my sister, on the other hand, prefers the beach.
En resumen, fue un viaje fantástico. = In short, it was a fantastic trip.
`,drills:`
Estaba enfermo; ___, fue a trabajar. => sin embargo | por lo tanto | así que | ya que # He was ill; however, he went to work.
No tengo coche, ___ voy en metro. => así que | sin embargo | aunque | en cambio # I don't have a car, so I go by metro.
___ hace frío, me quedo en casa. => Como | Así que | Sin embargo | Por lo tanto # As it's cold, I'm staying at home.
A mí me gusta el café; a mi marido, en ___, le gusta el té. => cambio | cambiar | vez | lugar # I like coffee; my husband, on the other hand, likes tea.
En ___ lugar, quiero darles las gracias. => primer | primero | primera | uno # First of all, I'd like to thank you.
`},{t:`Ser or estar: meaning changes`,k:`grammar`,goal:`Use adjectives whose meaning changes with ser and estar`,body:`
## Same adjective, different meaning
| adjective | with ser | with estar |
|---|---|---|
| {listo} | clever: {Es muy listo.} | ready: {Estoy listo.} |
| {aburrido} | boring: {La película es aburrida.} | bored: {Estoy aburrido.} |
| {malo} | bad (character): {Es malo.} | ill: {Está malo.} |
| {bueno} | good: {Es bueno.} | tasty; attractive: {La paella está buena.} |
| {rico} | rich: {Es muy rico.} | delicious: {¡Está rico!} |
| {verde} | green: {La manzana es verde.} | unripe: {El plátano está verde.} |
| {orgulloso} | arrogant: {Es orgulloso.} | proud: {Estoy orgulloso de ti.} |
| {despierto} | sharp, alert: {Es despierto.} | awake: {Está despierto.} |
| {abierto} | open-minded: {Es abierto.} | open: {La tienda está abierta.} |

!tip: General rule: **ser** = what something *is* (its nature); **estar** = the state it's *in* right now.
!warn: {Está buena} about a person comments on their looks — careful! About food it just means "tasty".
!de: {Estoy aburrido} = mir ist langweilig; {Soy aburrido} = ich bin langweilig!
`,words:`
ser listo = to be clever
estar listo = to be ready
ser aburrido = to be boring
estar aburrido = to be bored
estar malo = to be ill
ser rico = to be rich
estar rico = to be delicious
estar verde = to be unripe
estar orgulloso de = to be proud of
estar despierto = to be awake
`,phrases:`
¿Estás listo? Nos vamos. = Are you ready? We're going.
Tu hermano es muy listo. = Your brother is very clever.
Esta película es muy aburrida. = This film is really boring.
Hoy no voy a clase porque estoy malo. = I'm not going to class today because I'm ill.
¡Esta paella está riquísima! = This paella is delicious!
Estoy muy orgullosa de ti. = I'm very proud of you.
`,drills:`
¿___ listo? El taxi ha llegado. => Estás | Eres | Sois | Ser # Are you ready? The taxi is here.
Mi hija ___ muy lista: siempre saca buenas notas. => es | está | son | estar # My daughter is very clever: she always gets good marks.
No hay nada que hacer, ___ aburrido. (bored, yo) => estoy | soy | es | está # There's nothing to do, I'm bored.
Este plátano no se puede comer, ___ verde. => está | es | son | estar # You can't eat this banana, it's unripe.
Mmm, la sopa ___ muy rica. => está | es | son | hay # Mmm, the soup is delicious.
`}],story:{title:`La entrevista de Anna`,text:`
Anna había enviado su currículum a varias empresas de Barcelona. Una semana después, recibió un correo: «Estimada señora Weber: Nos gustaría invitarla a una entrevista…»
= Anna had sent her CV to several companies in Barcelona. A week later she received an email: "Dear Ms Weber, We would like to invite you to an interview…"

Era una empresa alemana de energías renovables que buscaba a alguien que hablara alemán y español.
= It was a German renewable energy company that was looking for someone who spoke German and Spanish.

El día de la entrevista, Anna estaba muy nerviosa. Nunca había hecho una entrevista en español. Sin embargo, se había preparado muy bien.
= On the day of the interview Anna was very nervous. She had never done an interview in Spanish. However, she had prepared very well.

—Buenos días, señora Weber. Siéntese, por favor. Hábleme de su experiencia. —Bueno, en primer lugar, trabajé cuatro años en una empresa de Hamburgo. Además, llevo un año viviendo en Madrid.
= "Good morning, Ms Weber. Please sit down. Tell me about your experience." "Well, first of all, I worked for four years at a company in Hamburg. What's more, I've been living in Madrid for a year."

—¿Cuáles son sus puntos fuertes? —Soy organizada y me encanta el trabajo en equipo. Y como hablo tres idiomas, puedo trabajar con clientes de muchos países.
= "What are your strengths?" "I'm organised and I love teamwork. And as I speak three languages, I can work with clients from many countries."

—Muy bien. El puesto es a jornada completa, con un contrato indefinido. ¿Cuándo podría empezar? —A principios de septiembre.
= "Very good. The position is full-time, with a permanent contract. When could you start?" "At the beginning of September."

Dos días después, la llamaron: ¡le habían dado el trabajo! Anna llamó a Omar enseguida: —¡Ya tengo trabajo en Barcelona! Estoy muy orgullosa de mí misma.
= Two days later they called her: they had given her the job! Anna called Omar straight away: "I've got a job in Barcelona! I'm really proud of myself."
`,questions:`
¿Qué buscaba la empresa? => Alguien que hablara alemán y español | Un ingeniero | Una persona de Barcelona # What was the company looking for?
¿Por qué estaba nerviosa Anna? => Nunca había hecho una entrevista en español | No se había preparado | Llegó tarde # Why was Anna nervous?
¿Qué tipo de contrato le ofrecen? => Indefinido, a jornada completa | Temporal, de media jornada | De seis meses # What contract do they offer her?
¿Cuándo podría empezar Anna? => A principios de septiembre | Mañana | En enero # When could Anna start?
`}},Qs=s({default:()=>$s}),$s={n:22,title:`Hypotheses — if I had…`,es:`Si tuviera tiempo…`,cando:[`I can form the conditional of regular and irregular verbs`,`I can give advice and guess about the past with the conditional`,`I can make real conditions: si + present`,`I can form the imperfect subjunctive`,`I can talk about imaginary situations: si tuviera…, iría…`,`I can use como si and ojalá + imperfect subjunctive`],lessons:[{t:`The conditional: would`,k:`grammar`,goal:`Form the conditional of regular and irregular verbs`,body:`
## Conditional = would
Infinitive + **-ía, -ías, -ía, -íamos, -íais, -ían** — with the same 12 irregular stems as the future:
| regular | irregular |
|---|---|
| {hablaría}, {comería}, {viviría} | {tendría}, {pondría}, {saldría}, {vendría} |
| | {podría}, {sabría}, {habría}, {querría} |
| | {haría}, {diría}, {cabría}, {valdría} |

> Me gustaría vivir en el campo. = I'd like to live in the countryside.
> Con más tiempo, aprendería japonés. = With more time, I'd learn Japanese.
> ¿Qué harías tú? = What would you do?
> Yo no diría eso. = I wouldn't say that.

!tip: Don't mix it up with the imperfect: {comía} (I used to eat) vs {comería} (I would eat). The conditional always keeps the infinitive (or irregular stem) before -ía.
!de: {hablaría} = ich würde sprechen (Konjunktiv II with "würde").
!ar: Like the answer of لو: لذهبتُ ≈ {iría}.
`,words:`
hablaría = I would speak
comería = I would eat
viviría = I would live
saldría = I would go out, leave
vendría = I would come
pondría = I would put
sabría = I would know
querría = I would want, like
diría = I would say
habría = there would be
`,phrases:`
Me gustaría vivir en el campo. = I'd like to live in the countryside.
Con más tiempo, aprendería japonés. = With more time, I'd learn Japanese.
¿Qué harías tú en mi lugar? = What would you do in my place?
Yo no diría eso. = I wouldn't say that.
Sería genial ir juntos. = It would be great to go together.
¿Vendrías conmigo a Marruecos? = Would you come to Morocco with me?
`,drills:`
Me ___ ir a Japón. (gustar) => gustaría | gustará | gustaba | gustó # I'd like to go to Japan.
¿Qué ___ tú en mi lugar? (hacer) => harías | hacerías | harás | hacías # What would you do in my place?
Yo no ___ eso nunca. (decir) => diría | deciría | diré | decía # I would never say that.
Con más dinero, ___ una casa más grande. (tener, nosotros) => tendríamos | teneríamos | tendremos | teníamos # With more money, we'd have a bigger house.
¿___ conmigo al cine? (venir, tú) => Vendrías | Venirías | Vendrás | Venías # Would you come to the cinema with me?
`},{t:`Advice & guesses about the past`,k:`talk`,goal:`Give advice and express probability in the past with the conditional`,body:`
## Giving advice
| | |
|---|---|
| {Yo que tú…} | If I were you… |
| {Yo en tu lugar…} | In your place… |
| {Deberías…} | You should… |
| {Podrías…} | You could… |
| {Sería mejor…} | It would be better to… |
| {Te convendría…} | It would be good for you to… |

> Yo que tú, hablaría con ella. = If I were you, I'd talk to her.
> Deberías descansar más. = You should rest more.
> Podrías preguntar en información. = You could ask at the information desk.

## Guessing about the past
The conditional also expresses **probability in the past**:
> ¿Qué hora era cuando llegaste? — Serían las once. = What time was it when you arrived? — It must have been about eleven.
> Tendría unos veinte años cuando se casó. = She must have been about twenty when she got married.

!tip: Guess about now → future ({Serán las diez}); guess about the past → conditional ({Serían las diez}).
!de: {Yo que tú…} = An deiner Stelle würde ich…; {Deberías} = Du solltest.
`,words:`
yo en tu lugar = in your place
yo que tú = if I were you
deberías = you should
podrías = you could
sería mejor = it would be better
te convendría = it would be good for you
serían las once = it must have been about eleven
tendría unos veinte años = he / she must have been about twenty
la sugerencia = suggestion
recomendaría = I would recommend
`,phrases:`
Yo que tú, hablaría con ella. = If I were you, I'd talk to her.
Deberías descansar más. = You should rest more.
Podrías preguntar en información. = You could ask at the information desk.
Sería mejor salir temprano. = It would be better to leave early.
Serían las once cuando llegamos. = It must have been about eleven when we arrived.
Yo en tu lugar, aceptaría el trabajo. = In your place, I'd accept the job.
`,drills:`
Yo que tú, ___ con tu jefe. (hablar) => hablaría | hablaré | hablaba | hablé # If I were you, I'd talk to your boss.
___ dormir más. Estás muy cansado. (deber, tú) => Deberías | Deberás | Deberéis | Deberían # You should sleep more. You're very tired.
Sería ___ coger un taxi. => mejor | bueno | bien | mejores # It would be better to take a taxi.
¿Qué hora era? — No sé, ___ las tres. => serían | serán | seré | sería # What time was it? — I don't know, it must have been about three.
Yo en tu ___, no lo compraría. => lugar | sitio | caso | lado # In your place, I wouldn't buy it.
`},{t:`Si + present: real conditions`,k:`grammar`,goal:`Talk about real and likely conditions with si`,body:`
## Real or likely conditions
**si + present → present / future / command**
> Si tengo tiempo, te llamo. = If I have time, I'll call you.
> Si llueve, no iremos a la playa. = If it rains, we won't go to the beach.
> Si ves a Ana, dile que la espero. = If you see Ana, tell her I'm waiting for her.
> Si quieres, puedo ayudarte. = If you like, I can help you.

!warn: Never the future or the present subjunctive after **si** (if): {si llueve} — not "si lloverá" or "si llueva".
!tip: {si} (if) has no accent; {sí} (yes) does.

## si = whether
> No sé si viene. = I don't know whether he's coming.
> Pregúntale si quiere café. = Ask him if he wants coffee.

!de: {si} = wenn / falls / ob: {Si tengo tiempo} = Wenn ich Zeit habe; {No sé si viene} = Ich weiß nicht, ob er kommt.
!ar: {si} + present ≈ إذا: إذا كان عندي وقت سأتصل بك ≈ {Si tengo tiempo, te llamo}.
`,words:`
si = if; whether
si tengo tiempo = if I have time
si quieres = if you like
si llueve = if it rains
dile = tell him / her
la excursión = trip, outing
cancelar = to cancel
no sé si = I don't know whether
pregúntale = ask him / her
en ese caso = in that case
`,phrases:`
Si tengo tiempo, te llamo. = If I have time, I'll call you.
Si llueve, cancelaremos la excursión. = If it rains, we'll cancel the trip.
Si ves a Ana, dile que la espero. = If you see Ana, tell her I'm waiting for her.
Si quieres, te ayudo. = If you like, I'll help you.
No sé si mi hermano viene a la cena. = I don't know whether my brother is coming to dinner.
Pregúntale si quiere un café. = Ask him if he wants a coffee.
`,drills:`
Si ___ tiempo, iré al gimnasio. (tener, yo) => tengo | tenga | tendré | tuviera # If I have time, I'll go to the gym.
Si llueve, no ___ a la playa. (ir, nosotros) => iremos | iríamos | fuéramos | vayamos # If it rains, we won't go to the beach.
Si ___ a Pedro, dile hola. (ver, tú) => ves | veas | verás | vieras # If you see Pedro, say hello.
No sé ___ viene mañana. => si | sí | que | cuando # I don't know whether he's coming tomorrow.
Si ___, te ayudo con los deberes. (querer, tú) => quieres | quieras | querrás | quisieras # If you want, I'll help you with your homework.
`},{t:`The imperfect subjunctive`,k:`grammar`,goal:`Form the imperfect subjunctive and use it after past triggers`,body:`
## Forming it
Take the **ellos** form of the preterite, drop **-ron** and add **-ra, -ras, -ra, -ramos, -rais, -ran**:
| infinitive | ellos (preterite) | imperfect subjunctive |
|---|---|---|
| {hablar} | {hablaron} | {hablara, hablaras, hablara, habláramos, hablarais, hablaran} |
| {comer} | {comieron} | {comiera, comieras…} |
| {vivir} | {vivieron} | {viviera, vivieras…} |
| {tener} | {tuvieron} | {tuviera} |
| {ser / ir} | {fueron} | {fuera} |
| {hacer} | {hicieron} | {hiciera} |
| {decir} | {dijeron} | {dijera} |
| {poder} | {pudieron} | {pudiera} |
| {estar} | {estuvieron} | {estuviera} |
| {pedir} | {pidieron} | {pidiera} |

!tip: The nosotros form always has an accent: {habláramos}, {tuviéramos}, {fuéramos}.
!tip: There's an alternative ending in **-se** ({hablase}, {tuviese}) with the same meaning — you just need to recognise it.

## When is it used?
When the trigger is in the **past** or the **conditional**:
> Quería que vinieras. = I wanted you to come.
> Me pidió que le ayudara. = She asked me to help her.
> Sería mejor que te quedaras. = It would be better if you stayed.

!de: It's the Konjunktiv II of the past: "Ich wollte, dass du kämest".
!ar: Again أنْ + المنصوب — after a past verb: أردتُ أنْ تأتيَ ≈ {Quería que vinieras}.
`,words:`
hablara = (that) I / he spoke
comiera = (that) I / he ate
viviera = (that) I / he lived
tuviera = (that) I / he had
fuera = (that) I / he were; went
hiciera = (that) I / he did
dijera = (that) I / he said
pudiera = (that) I / he could
estuviera = (that) I / he were (state, place)
quisiera = I would like (very polite)
`,phrases:`
Quería que vinieras a la fiesta. = I wanted you to come to the party.
Me pidió que le ayudara. = She asked me to help her.
Sería mejor que te quedaras en casa. = It would be better if you stayed at home.
Mis padres no querían que viviera solo. = My parents didn't want me to live alone.
Quisiera hablar con el director. = I would like to speak to the director.
Le dije que hiciera los deberes. = I told him to do his homework.
`,drills:`
Quería que ___ conmigo. (venir, tú) => vinieras | vengas | venías | vendrías # I wanted you to come with me.
Me pidió que le ___. (ayudar, yo) => ayudara | ayude | ayudaba | ayudaría # She asked me to help her.
Sería mejor que ___ en casa. (quedarse, tú) => te quedaras | te quedes | te quedabas | te quedarías # It would be better if you stayed at home.
No querían que ___ tan tarde. (salir, nosotros) => saliéramos | salgamos | salíamos | saldríamos # They didn't want us to go out so late.
Le dije que ___ la verdad. (decir, él) => dijera | diga | decía | diría # I told him to tell the truth.
___ un café, por favor. (very polite: querer, yo) => Quisiera | Quiera | Querré | Quiere # I'd like a coffee, please.
`},{t:`Si tuviera…, iría…`,k:`grammar`,goal:`Talk about imaginary or unlikely situations`,body:`
## si + imperfect subjunctive → conditional
| condition (unreal or unlikely) | result |
|---|---|
| {Si tuviera dinero,} | {viajaría por todo el mundo.} |
| If I had money, | I'd travel all over the world. |
| {Si fuera tú,} | {no lo haría.} |
| If I were you, | I wouldn't do it. |
| {Si viviera en España,} | {hablaría español todos los días.} |
| If I lived in Spain, | I'd speak Spanish every day. |

> ¿Qué harías si te tocara la lotería? = What would you do if you won the lottery?
> Si pudiera, cambiaría de trabajo. = If I could, I'd change jobs.
> Si no lloviera, iríamos a la playa. = If it weren't raining, we'd go to the beach.

!tip: The halves can swap: {Viajaría por el mundo si tuviera dinero.}
!warn: Never the conditional after **si**: {si tuviera} — not "si tendría".

## Real vs unreal
- {Si tengo tiempo, te llamaré.} — possible.
- {Si tuviera tiempo, te llamaría.} — I don't have time (or it's unlikely).

!de: Exactly "Wenn ich Geld hätte, würde ich reisen" = {Si tuviera dinero, viajaría}.
!ar: Like لو + الماضي … لـَ: لو كان عندي مال لسافرتُ ≈ {Si tuviera dinero, viajaría}.
`,words:`
si tuviera = if I had
si fuera = if I were
si pudiera = if I could
si viviera = if I lived
tocar la lotería = to win the lottery
la lotería = lottery
imaginar = to imagine
millonario, millonaria = millionaire
dar la vuelta al mundo = to travel around the world
la isla = island
desierto, desierta = deserted
`,phrases:`
Si tuviera dinero, viajaría por todo el mundo. = If I had money, I'd travel all over the world.
¿Qué harías si te tocara la lotería? = What would you do if you won the lottery?
Si pudiera, cambiaría de trabajo. = If I could, I'd change jobs.
Si fuera tú, no lo haría. = If I were you, I wouldn't do it.
Si viviera en Granada, visitaría la Alhambra cada mes. = If I lived in Granada, I'd visit the Alhambra every month.
¿Qué te llevarías a una isla desierta? = What would you take to a desert island?
`,drills:`
Si ___ dinero, compraría una casa. (tener, yo) => tuviera | tendría | tenía | tenga # If I had money, I'd buy a house.
Si fuera tú, no lo ___. (hacer) => haría | hiciera | haga | hacía # If I were you, I wouldn't do it.
¿Qué harías si te ___ la lotería? (tocar) => tocara | tocaría | toca | toque # What would you do if you won the lottery?
Si ___, iría a tu fiesta. (poder, yo) => pudiera | podría | puedo | pueda # If I could, I'd go to your party.
Si no ___ tanto, saldríamos. (llover) => lloviera | llovería | llueve | llueva # If it weren't raining so much, we'd go out.
Si tengo tiempo mañana, te ___. (real: llamar) => llamaré | llamaría | llamara | llamé # If I have time tomorrow, I'll call you.
`},{t:`Como si & ojalá + past subjunctive`,k:`grammar`,goal:`Say "as if" and wish for unlikely or impossible things`,body:`
## como si = as if (always imperfect subjunctive)
> Habla como si fuera el jefe. = He talks as if he were the boss.
> Me miró como si no me conociera. = She looked at me as if she didn't know me.
> Gasta dinero como si fuera millonario. = He spends money as if he were a millionaire.

## ojalá + imperfect subjunctive = an unlikely or impossible wish
| ojalá + present subjunctive (possible) | ojalá + imperfect subjunctive (unlikely, impossible) |
|---|---|
| {Ojalá haga sol mañana.} | {Ojalá hiciera sol.} (but it's raining) |
| I hope it's sunny tomorrow. | I wish it were sunny. |
| {Ojalá puedas venir.} | {Ojalá pudieras venir.} (but you can't) |

> Ojalá tuviera más tiempo. = I wish I had more time.
> Ojalá estuvieras aquí. = I wish you were here.
> Ojalá supiera tocar la guitarra. = I wish I could play the guitar.

!de: {Ojalá tuviera…} = Ich wünschte, ich hätte…; {como si} = als ob: {como si fuera el jefe} = als ob er der Chef wäre.
!ar: {Ojalá estuvieras aquí} ≈ ليتك كنتَ هنا — just like ليت for impossible wishes, while {ojalá} + present ≈ عسى / إن شاء الله.
`,words:`
como si = as if
ojalá tuviera = I wish I had
ojalá estuvieras aquí = I wish you were here
ojalá supiera = I wish I knew
gastar = to spend (money)
la nostalgia = nostalgia, homesickness
la ilusión = excitement, hope (Spain)
fingir = to pretend
`,phrases:`
Habla como si fuera el jefe. = He talks as if he were the boss.
Me miró como si no me conociera. = She looked at me as if she didn't know me.
Ojalá tuviera más tiempo libre. = I wish I had more free time.
Ojalá estuvieras aquí conmigo. = I wish you were here with me.
Ojalá supiera tocar la guitarra. = I wish I could play the guitar.
Tengo mucha ilusión por el viaje. = I'm really excited about the trip.
`,drills:`
Habla como si ___ el jefe. (ser) => fuera | sea | es | sería # He talks as if he were the boss.
Ojalá ___ más tiempo. (tener, yo — but I don't) => tuviera | tenga | tengo | tendría # I wish I had more time.
Me trata como si ___ un niño. (ser, yo) => fuera | sea | soy | era # He treats me as if I were a child.
Ojalá ___ hablar japonés. (saber, yo — but I can't) => supiera | sepa | sé | sabría # I wish I could speak Japanese.
Ojalá ___ sol mañana. (possible: hacer) => haga | hiciera | hace | hará # I hope it's sunny tomorrow.
`}],story:{title:`Si nos tocara el Gordo…`,text:`
Es diciembre y en España todo el mundo habla de la Lotería de Navidad, «el Gordo». Laura, Omar y Anna están en un bar y cada uno tiene un décimo.
= It's December and everyone in Spain is talking about the Christmas Lottery, "El Gordo". Laura, Omar and Anna are in a bar and each of them has a ticket.

—¿Qué haríais si os tocara el Gordo? —pregunta Laura.
= "What would you do if you won El Gordo?" asks Laura.

—Yo dejaría de trabajar y daría la vuelta al mundo —dice Anna—. Primero iría a Japón, después a Argentina… y viviría como si fuera millonaria.
= "I'd stop working and travel around the world," says Anna. "First I'd go to Japan, then Argentina… and I'd live as if I were a millionaire."

—Pues yo no dejaría mi trabajo, porque me gusta mucho —dice Omar—. Pero compraría una casa grande para mis padres en Rabat y ayudaría a mis hermanos a estudiar.
= "Well, I wouldn't quit my job, because I like it a lot," says Omar. "But I'd buy a big house for my parents in Rabat and help my brother and sister with their studies."

—¡Qué bonito! Y tú, Laura, ¿qué harías? —Yo abriría una librería con cafetería en Sevilla, mi ciudad. Y si tuviera tiempo, escribiría una novela.
= "That's lovely! And you, Laura, what would you do?" "I'd open a bookshop-café in Seville, my city. And if I had time, I'd write a novel."

—Ojalá nos tocara a los tres —dice Anna—. Pero si no nos toca, ¡al menos tenemos salud! —¡Eso es lo más importante! —responden los otros.
= "I wish all three of us would win," says Anna. "But if we don't, at least we've got our health!" "That's the most important thing!" the others reply.

El 22 de diciembre, los niños de San Ildefonso cantan los números en la tele. No les toca nada… pero se ríen mucho y deciden hacer el viaje a Japón juntos de todas formas, aunque sea sin el Gordo.
= On 22 December the children of San Ildefonso sing the winning numbers on TV. They win nothing… but they laugh a lot and decide to take the trip to Japan together anyway, even without El Gordo.
`,questions:`
¿Qué haría Anna si le tocara la lotería? => Daría la vuelta al mundo | Abriría una librería | Compraría una casa # What would Anna do if she won the lottery?
¿Para quién compraría Omar una casa? => Para sus padres | Para Anna | Para él # Who would Omar buy a house for?
¿Qué abriría Laura? => Una librería con cafetería | Un restaurante | Una tienda de ropa # What would Laura open?
¿Les toca la lotería? => No | Sí, el Gordo | Sí, a Laura # Do they win the lottery?
`}},ec=s({default:()=>tc}),tc={n:23,title:`Reported speech & the news`,es:`Me dijo que…`,cando:[`I can report what someone says: dice que…`,`I can report past speech with tense changes: dijo que…`,`I can report questions and requests: me preguntó si…, me pidió que…`,`I can use el que, quien, lo que and cuyo`,`I can use lo + adjective: lo bueno, lo mejor…`,`I can talk about the news and the media`],lessons:[{t:`Dice que…: reporting the present`,k:`grammar`,goal:`Report what someone says right now`,body:`
## Reporting what someone says now
When the reporting verb is in the **present**, tenses don't change — only pronouns and possessives do:
> «Estoy cansado.» → Dice que está cansado. = He says he's tired.
> «Mañana voy a Madrid.» → Dice que mañana va a Madrid. = She says she's going to Madrid tomorrow.
> «Mi hermano vive en Rabat.» → Dice que su hermano vive en Rabat. = He says his brother lives in Rabat.
> «¿Tienes hambre?» → Pregunta si tengo hambre. = He's asking if I'm hungry.
> «¿Dónde vives?» → Pregunta dónde vivo. = She's asking where I live.

## Reporting verbs
{decir} (say), {comentar} (mention), {explicar} (explain), {contar} (tell), {preguntar} (ask), {responder} (answer), {asegurar} (assure), {añadir} (add).

!tip: Yes / no questions → **si**; question-word questions keep the word, with its accent: {Me pregunta cuándo llegas.}
!de: Like "Er sagt, dass er müde ist" — but Spanish never drops {que}: {Dice que está cansado}.
!ar: Like يقول إنّ: {Dice que está cansado} ≈ يقول إنّه متعب.
`,words:`
dice que = he / she says (that)
pregunta si = he / she asks if
comentar = to mention, to comment
asegurar = to assure; to insure
añadir = to add
responder = to answer
el mensaje de voz = voice message
el estilo indirecto = reported speech
textualmente = word for word
según = according to
`,phrases:`
Dice que está muy cansado. = He says he's very tired.
Mi madre dice que la comida está lista. = My mother says the food is ready.
Pregunta si quieres venir. = He's asking if you want to come.
Me pregunta dónde está la estación. = She's asking me where the station is.
Según Ana, el examen es fácil. = According to Ana, the exam is easy.
Te ha dejado un mensaje de voz. = She's left you a voice message.
`,drills:`
«Tengo hambre.» → Dice que ___ hambre. => tiene | tengo | tenga | tuvo # "I'm hungry." → He says he's hungry.
«¿Vienes?» → Pregunta ___ vienes. => si | que | cuando | sí # "Are you coming?" → He's asking if you're coming.
«¿Dónde vives?» → Me pregunta ___ vivo. => dónde | donde | si | que # "Where do you live?" → She's asking me where I live.
«Mi coche es rojo.» → Dice que ___ coche es rojo. => su | mi | tu | sus # "My car is red." → He says his car is red.
___ el periódico, mañana lloverá. => Según | Como | Dice | Para # According to the newspaper, it will rain tomorrow.
`},{t:`Dijo que…: reporting the past`,k:`grammar`,goal:`Report past speech with the right tense changes`,body:`
## Tenses shift back after a past reporting verb
When the reporting verb is in the **past** ({dijo}, {comentó}, {explicó}), the tenses shift back:
| what they said | reported |
|---|---|
| present: «Estoy cansado.» | imperfect: {Dijo que estaba cansado.} |
| preterite / perfect: «He comido.» | pluperfect: {Dijo que había comido.} |
| future: «Iré mañana.» | conditional: {Dijo que iría al día siguiente.} |
| ir a: «Voy a llamar.» | iba a: {Dijo que iba a llamar.} |
| imperfect: «Vivía en Rabat.» | no change: {Dijo que vivía en Rabat.} |

## Time and place words change too
{hoy} → {aquel día}, {mañana} → {al día siguiente}, {ayer} → {el día anterior}, {aquí} → {allí}, {este} → {ese / aquel}.

!tip: In everyday speech people often keep the present if it's still true: {Me dijo que es alemán} (he still is).
!de: German uses the Konjunktiv I ("Er sagte, er sei müde"); Spanish just shifts the indicative: {Dijo que estaba cansado}.
!ar: Like قال إنّه كان: {Dijo que estaba cansado} ≈ قال إنّه كان متعبًا.
`,words:`
dijo que = he / she said (that)
explicó que = he / she explained that
contó que = he / she told (that)
al día siguiente = the next day
el día anterior = the day before
aquel día = that day
añadió que = he / she added that
prometió que = he / she promised that
aseguró que = he / she assured that
`,phrases:`
Me dijo que estaba cansado. = He told me he was tired.
Ana dijo que había comido en casa. = Ana said she had eaten at home.
Prometió que vendría a la fiesta. = He promised he'd come to the party.
Dijo que iba a llamar más tarde. = She said she was going to call later.
Me contó que de niño vivía en Rabat. = He told me he lived in Rabat as a child.
Explicó que el tren había salido con retraso. = She explained that the train had left late.
`,drills:`
«Estoy enfermo.» → Dijo que ___ enfermo. => estaba | está | estuvo | esté # "I'm ill." → He said he was ill.
«He perdido las llaves.» → Dijo que ___ perdido las llaves. => había | ha | habría | hubo # "I've lost the keys." → She said she had lost the keys.
«Llegaré tarde.» → Dijo que ___ tarde. => llegaría | llegará | llega | llegaba # "I'll be late." → He said he'd be late.
«Voy a estudiar.» → Dijo que ___ a estudiar. => iba | va | fue | iría # "I'm going to study." → She said she was going to study.
«Mañana te llamo.» → Dijo que me llamaría ___. => al día siguiente | mañana | ayer | el día anterior # "I'll call you tomorrow." → He said he'd call me the next day.
`},{t:`Reported questions & requests`,k:`grammar`,goal:`Report questions and requests, including que + subjunctive`,body:`
## Questions
> «¿Estás bien?» → Me preguntó si estaba bien. = She asked me if I was OK.
> «¿Cuándo vuelves?» → Me preguntó cuándo volvía. = He asked me when I was coming back.
> «¿Qué has hecho?» → Me preguntó qué había hecho. = She asked me what I had done.

## Requests and orders → que + subjunctive
| reporting verb | example | mood |
|---|---|---|
| present | «Ven pronto.» → {Me dice que venga pronto.} | present subjunctive |
| past | «Ven pronto.» → {Me dijo que viniera pronto.} | imperfect subjunctive |

> «Llámame.» → Me pidió que la llamara. = She asked me to call her.
> «No hagáis ruido.» → Nos dijo que no hiciéramos ruido. = He told us not to make any noise.

!tip: {decir que} + indicative reports information; {decir que} + subjunctive reports an order.
!de: "Sie bat mich, sie anzurufen" = {Me pidió que la llamara}.
!ar: طلبت منّي أنْ أتصل بها ≈ {Me pidió que la llamara}.
`,words:`
me preguntó si = he / she asked me if
me pidió que = he / she asked me to
me dijo que viniera = he / she told me to come
ordenar = to order
rogar = to beg, to ask
la petición = request
el favor = favour
hacer un favor = to do a favour
la orden = order, command
el recado = message; errand
`,phrases:`
Me preguntó si estaba bien. = She asked me if I was OK.
Me preguntó cuándo volvía. = He asked me when I was coming back.
Me pidió que la llamara. = She asked me to call her.
Nos dijo que no hiciéramos ruido. = He told us not to make any noise.
Mi jefe me pidió que terminara el informe. = My boss asked me to finish the report.
¿Me haces un favor? = Will you do me a favour?
`,drills:`
«¿Tienes frío?» → Me preguntó ___ tenía frío. => si | que | cuando | qué # "Are you cold?" → He asked me if I was cold.
«¿Dónde vives?» → Me preguntó dónde ___. => vivía | vivo | viva | viviera # "Where do you live?" → She asked me where I lived.
«Llámame.» → Me pidió que la ___. => llamara | llame | llamaba | llamaría # "Call me." → She asked me to call her.
«Llámame.» → Me pide que la ___. => llame | llamara | llamo | llamaría # "Call me." → She's asking me to call her.
«No fuméis aquí.» → Nos dijo que no ___ allí. => fumáramos | fumemos | fumábamos | fumaríamos # "Don't smoke here." → He told us not to smoke there.
`},{t:`El que, quien, cuyo…`,k:`grammar`,goal:`Use relative pronouns after prepositions, and cuyo`,body:`
## Beyond que
| | use | example |
|---|---|---|
| {el que / la que / los que / las que} | after prepositions; "the one(s) who" | {La empresa para la que trabajo es alemana.} |
| {quien / quienes} | people, after prepositions or commas | {La chica con quien hablé es médica.} |
| {lo que} | "what", an idea | {No entiendo lo que dices.} |
| {cuyo / cuya / cuyos / cuyas} | whose (agrees with the thing owned) | {Es el escritor cuyos libros leo.} |
| {donde} | where | {El pueblo donde nací.} |

> El amigo del que te hablé vive en Sevilla. = The friend I told you about lives in Seville.
> Los que lleguen tarde no podrán entrar. = Those who arrive late won't be able to get in.
> Es una ciudad cuya historia es fascinante. = It's a city whose history is fascinating.

!tip: Spanish puts the preposition **before** the relative, never at the end: {la persona con la que hablo} (the person I talk *with*).
!de: {cuyo} = dessen / deren: {el escritor cuyos libros leo} = der Schriftsteller, dessen Bücher ich lese.
!ar: {cuyo} ≈ الذي … ـه: الكاتب الذي أقرأ كتبه ≈ {el escritor cuyos libros leo}.
`,words:`
el que, la que = the one that / who
los que = those who
quien = who (person)
cuyo, cuya = whose
del que = about which, about whom
con quien = with whom
para la que = for which
el refrán = saying, proverb
fascinante = fascinating
`,phrases:`
La empresa para la que trabajo es alemana. = The company I work for is German.
La chica con quien hablé es médica. = The girl I spoke to is a doctor.
El amigo del que te hablé vive en Sevilla. = The friend I told you about lives in Seville.
Los que lleguen tarde no podrán entrar. = Those who arrive late won't be able to get in.
Es una ciudad cuya historia es fascinante. = It's a city whose history is fascinating.
Quien mucho abarca, poco aprieta. = Grasp all, lose all. (proverb)
`,drills:`
La casa en ___ vivo es antigua. => la que | que | quien | lo que # The house I live in is old.
El chico con ___ salgo es alemán. => quien | que | cuyo | lo que # The boy I'm going out with is German.
Es la escritora ___ libros me encantan. => cuyos | cuyas | cuya | quien # She's the writer whose books I love.
No entiendo ___ quieres decir. => lo que | el que | que | cual # I don't understand what you mean.
___ quieran venir, que me avisen. => Los que | Lo que | Quien | Cuyos # Those who want to come, let me know.
`},{t:`Lo bueno, lo mejor…`,k:`grammar`,goal:`Talk about "the good thing", "the best part" with lo`,body:`
## lo + adjective = "the … thing / part"
> Lo bueno de Madrid es la gente. = The good thing about Madrid is the people.
> Lo malo es que hace mucho calor. = The bad thing is that it's very hot.
> Lo mejor del viaje fue la comida. = The best part of the trip was the food.
> Lo peor es el tráfico. = The worst thing is the traffic.
> Lo importante es participar. = The important thing is to take part.
> Lo más difícil del español es el subjuntivo. = The hardest thing about Spanish is the subjunctive.

## lo que + verb = what
> Lo que más me gusta es pasear. = What I like most is walking.
> Haz lo que quieras. = Do whatever you want.

## lo + adjective + que = how
> No sabes lo difícil que es. = You don't know how difficult it is.

!de: {lo bueno} = das Gute (daran); {lo mejor} = das Beste.
!ar: {lo mejor} ≈ أفضل ما في / الأفضل.
`,words:`
lo bueno = the good thing
lo malo = the bad thing
lo mejor = the best thing
lo peor = the worst thing
lo importante = the important thing
lo más difícil = the hardest thing
lo raro = the strange thing
lo curioso = the funny / curious thing
lo que más me gusta = what I like most
haz lo que quieras = do whatever you want
`,phrases:`
Lo bueno de Madrid es la gente. = The good thing about Madrid is the people.
Lo malo es que hace mucho calor en verano. = The bad thing is that it's very hot in summer.
Lo mejor del viaje fue la comida. = The best part of the trip was the food.
Lo importante es que estás bien. = The important thing is that you're OK.
Lo que más me gusta es pasear por el centro. = What I like most is walking around the centre.
No sabes lo difícil que es. = You don't know how difficult it is.
`,drills:`
___ bueno de vivir aquí es el clima. => Lo | El | La | Los # The good thing about living here is the climate.
Lo ___ del viaje fue el hotel. (worst) => peor | malo | peores | más malo # The worst thing about the trip was the hotel.
___ que más me gusta es cocinar. => Lo | El | La | Que # What I like most is cooking.
Haz ___ que quieras. => lo | el | la | que # Do whatever you want.
No sabes lo cansado ___ estoy. => que | como | lo | cual # You don't know how tired I am.
`},{t:`News & media`,k:`vocab`,goal:`Talk about the news, the press and social media`,body:`
## Los medios de comunicación
| | |
|---|---|
| {las noticias} | the news |
| {el periódico} | newspaper |
| {la revista} | magazine |
| {el titular} | headline |
| {el artículo} | article |
| {el / la periodista} | journalist |
| {la radio} | radio |
| {el telediario} | TV news (Spain) |
| {las redes sociales} | social media |
| {la publicidad} | advertising |
| {la encuesta} | survey |
| {el bulo} | hoax, fake news (Spain) |

> Según las noticias, el Gobierno subirá los impuestos. = According to the news, the government will raise taxes.
> Lo leí en un artículo de El País. = I read it in an article in El País.
> Ese titular es un bulo: no te lo creas. = That headline is a hoax: don't believe it.

!es: Spain's main newspapers are {El País}, {El Mundo}, {ABC} and {La Vanguardia}; the public broadcaster is {RTVE}. A daily podcast or {Radio Nacional} is a great B1 habit.
!tip: The news is full of reported speech: {El ministro dijo que…}, {Según fuentes oficiales…}, {La policía informó de que…}
`,words:`
las noticias = the news
la revista = magazine
el titular = headline
el artículo = article
el telediario = TV news (Spain)
las redes sociales = social media
la publicidad = advertising
la encuesta = survey
el bulo = hoax, fake news (Spain)
el Gobierno = the government
los impuestos = taxes
`,phrases:`
¿Has visto las noticias hoy? = Have you seen the news today?
Según el telediario, mañana nevará en Madrid. = According to the TV news, it will snow in Madrid tomorrow.
Lo leí en un artículo de El País. = I read it in an article in El País.
Ese titular es un bulo. = That headline is a hoax.
Paso demasiado tiempo en las redes sociales. = I spend too much time on social media.
El Gobierno va a bajar los impuestos. = The government is going to lower taxes.
`,drills:`
Leo las ___ en el móvil cada mañana. => noticias | notas | novelas | nóminas # I read the news on my phone every morning.
Vimos el ___ de las nueve. (TV news) => telediario | periódico | titular | artículo # We watched the nine o'clock news.
No te creas eso, es un ___. => bulo | bolo | bulto | blog # Don't believe that, it's a hoax.
Paso mucho tiempo en las redes ___. => sociales | sociedades | sociables | social # I spend a lot of time on social media.
Según una ___, el 60 % de los jóvenes lee poco. => encuesta | entrevista | revista | apuesta # According to a survey, 60% of young people read little.
`}],story:{title:`Noticias de Madrid`,text:`
Ya es octubre. Anna y Omar viven en Barcelona desde hace un mes. Un domingo, Laura llama a Anna por videollamada.
= It's October already. Anna and Omar have been living in Barcelona for a month. One Sunday, Laura video-calls Anna.

—¡Hola, guapa! Tengo muchas noticias. Ayer vi a Javier, el profesor. Me dijo que te echaba mucho de menos y me preguntó si estabas contenta en Barcelona.
= "Hi, lovely! I've got loads of news. Yesterday I saw Javier, the teacher. He told me he missed you a lot and asked me if you were happy in Barcelona."

—¡Qué majo! Dile que sí, que estoy encantada. ¿Qué más te contó? —Me contó que su hija había empezado el colegio y que el próximo verano iría con su familia a Marruecos.
= "How sweet! Tell him yes, I'm delighted. What else did he tell you?" "He told me his daughter had started school and that next summer he'd go to Morocco with his family."

—¡Qué bien! Omar se pondrá muy contento. —¡Ya lo sabe! Javier me dijo que Omar le había escrito con una lista de restaurantes de Rabat.
= "Great! Omar will be thrilled." "He already knows! Javier told me Omar had written to him with a list of restaurants in Rabat."

—Y lo mejor: ¿te acuerdas de la abuela Carmen? Me pidió que te diera un beso y que te dijera que te mandaría su receta de croquetas.
= "And the best part: do you remember Grandma Carmen? She asked me to give you a kiss and to tell you she'd send you her croquette recipe."

—¡Ay, qué ilusión! Lo malo es que aquí no tengo una cocina tan grande como la suya… —Lo importante es que lo intentes. ¡Y que me invites!
= "Oh, how exciting! The bad thing is that I don't have a kitchen as big as hers here…" "The important thing is that you try. And that you invite me!"

—¡Claro! Por cierto, según el telediario, este fin de semana va a hacer muy buen tiempo en Barcelona. ¿Por qué no vienes? —¡Me has convencido! Compro el billete ahora mismo.
= "Of course! By the way, according to the TV news, the weather in Barcelona is going to be lovely this weekend. Why don't you come?" "You've convinced me! I'm buying the ticket right now."
`,questions:`
¿Qué le preguntó Javier a Laura? => Si Anna estaba contenta en Barcelona | Dónde vivía Omar | Cuándo volvería Anna # What did Javier ask Laura?
¿Adónde iría Javier el próximo verano? => A Marruecos | A Barcelona | A Alemania # Where would Javier go next summer?
¿Qué le pidió la abuela Carmen a Laura? => Que le diera un beso a Anna | Que la llamara | Que comprara croquetas # What did Grandma Carmen ask Laura?
¿Qué decide hacer Laura al final? => Ir a Barcelona | Quedarse en Madrid | Llamar a Javier # What does Laura decide to do in the end?
`}},nc=s({default:()=>rc}),rc={n:24,title:`Opinions, the environment & “se”`,es:`El medio ambiente`,cando:[`I can use impersonal and passive se: se habla español, se venden pisos`,`I can describe accidents with se: se me olvidó, se me rompió`,`I can talk about the environment and climate change`,`I can give my opinion and debate: estoy de acuerdo, por un lado…`,`I can use verbs of change: ponerse, volverse, hacerse, quedarse…`,`I can use verbs with fixed prepositions: pensar en, soñar con…`],lessons:[{t:`Impersonal & passive se`,k:`grammar`,goal:`Make general statements and read signs with se`,body:`
## Impersonal se — "people / you / one"
**se + 3rd person singular** for general statements without a specific subject:
> En España se come muy tarde. = In Spain people eat very late.
> ¿Cómo se dice "apple" en español? = How do you say "apple" in Spanish?
> Aquí se vive muy bien. = Life is good here.
> No se puede fumar. = Smoking isn't allowed.

## Passive se — "is / are done"
**se + verb agreeing with the thing**:
> Se habla español. = Spanish is spoken.
> Se venden pisos. = Flats for sale.
> Se alquila habitación. = Room to let.
> Se necesitan camareros. = Waiters wanted.

!tip: Singular thing → singular verb ({se vende casa}); plural → plural ({se venden casas}).
!de: Like German "man": {Se come tarde} = Man isst spät. Signs: {Se alquila} = Zu vermieten.
!ar: Like المبني للمجهول: {Se habla español} ≈ يُتحدَّث بالإسبانية.
`,words:`
se dice = one says, you say
se habla = is spoken
se vende = for sale
se alquila = for rent, to let
se necesita = wanted, needed
se busca = wanted, looking for
se prohíbe = it is forbidden
el cartel = sign, poster
la oferta = offer
la tradición = tradition
`,phrases:`
En España se cena muy tarde. = In Spain people have dinner very late.
¿Cómo se dice "window" en español? = How do you say "window" in Spanish?
Aquí se habla español e inglés. = Spanish and English are spoken here.
Se venden pisos en el centro. = Flats for sale in the centre.
Se necesitan camareros con experiencia. = Experienced waiters wanted.
En esta playa no se puede fumar. = You can't smoke on this beach.
`,drills:`
¿Cómo ___ dice "window" en español? => se | le | lo | te # How do you say "window" in Spanish?
Se ___ pisos. (vender) => venden | vende | vendemos | venda # Flats for sale.
Se ___ camarero con experiencia. (necesitar) => necesita | necesitan | necesito | necesitamos # Experienced waiter wanted.
En Alemania se ___ alemán. (hablar) => habla | hablan | hablamos | hable # German is spoken in Germany.
En España se ___ muy tarde. (cenar) => cena | cenan | cenamos | cenas # In Spain people have dinner very late.
`},{t:`Accidents: se me olvidó`,k:`grammar`,goal:`Talk about accidents and things you didn’t mean to do`,body:`
## Things that "happen to you"
Spanish describes accidents as things that happen **to** you, not things you did:
**se + me / te / le / nos / os / les + verb + thing**
> Se me olvidó tu cumpleaños. = I forgot your birthday.
> Se me ha roto el móvil. = My phone has broken.
> Se le cayó el vaso. = He dropped the glass.
> Se nos acabó la leche. = We've run out of milk.
> ¿Se te perdieron las llaves? = Did you lose your keys?

| | |
|---|---|
| {olvidarse} | to forget |
| {romperse} | to break |
| {caerse} | to drop, to fall |
| {perderse} | to lose, to get lost |
| {acabarse} | to run out |
| {quemarse} | to burn |
| {estropearse} | to break down |

!tip: The verb agrees with the **thing**: {Se me rompió el vaso} / {Se me rompieron los vasos}.
!tip: It sounds less guilty — it just happened! Very Spanish.
!de: Like "Mir ist das Glas runtergefallen" = {Se me cayó el vaso}.
!ar: Close to وقع منّي الكأس ≈ {Se me cayó el vaso}.
`,words:`
se me olvidó = I forgot
se me rompió = I broke (by accident)
se me cayó = I dropped
se me perdió = I lost
se nos acabó = we ran out of
estropearse = to break down
quemarse = to burn
acabarse = to run out
el despiste = absent-mindedness, slip
¡qué despiste! = how absent-minded!
`,phrases:`
Se me olvidó tu cumpleaños. ¡Lo siento! = I forgot your birthday. I'm sorry!
Se me ha roto el móvil. = My phone has broken.
A Pedro se le cayó el vaso. = Pedro dropped the glass.
Se nos acabó la leche. = We've run out of milk.
Se me perdieron las llaves en el parque. = I lost my keys in the park.
Se me quemó la cena. ¡Qué despiste! = I burnt dinner. How absent-minded of me!
`,drills:`
Se me ___ las llaves. (perder) => perdieron | perdió | perdí | perdimos # I lost my keys.
Se ___ olvidó llamarte. (yo) => me | te | le | se # I forgot to call you.
A mi hijo se le ___ el helado. (caer) => cayó | cayeron | caí | cae # My son dropped his ice cream.
Se nos ___ el pan. (acabar) => acabó | acabaron | acabamos | acabé # We've run out of bread.
Se me ___ el coche en la autopista. (estropear) => estropeó | estropeé | estropearon | estropea # My car broke down on the motorway.
`},{t:`The environment`,k:`vocab`,goal:`Talk about environmental problems and solutions`,body:`
## El medio ambiente
| | |
|---|---|
| {el cambio climático} | climate change |
| {la contaminación} | pollution |
| {el calentamiento global} | global warming |
| {las energías renovables} | renewable energy |
| {la energía solar / eólica} | solar / wind power |
| {reciclar} | to recycle |
| {la basura} | rubbish |
| {el plástico} | plastic |
| {ahorrar agua / energía} | to save water / energy |
| {la sequía} | drought |
| {el incendio forestal} | forest fire |
| {el transporte público} | public transport |
| {sostenible} | sustainable |

> El cambio climático es el mayor problema de nuestro tiempo. = Climate change is the biggest problem of our time.
> En mi casa reciclamos el plástico y el papel. = At home we recycle plastic and paper.
> Deberíamos usar más el transporte público. = We should use public transport more.

!es: Spain suffers from {sequías} and summer {incendios}, but it's also a leader in solar and wind power. Bins are colour-coded: yellow for plastic, blue for paper, green for glass, brown for organic waste.
!ar: Spanish water words from al-Andalus: {la acequia} (الساقية, irrigation channel) and {la noria} (الناعورة, water wheel).
`,words:`
el medio ambiente = the environment
el cambio climático = climate change
la contaminación = pollution
las energías renovables = renewable energy
reciclar = to recycle
la basura = rubbish
el plástico = plastic
la sequía = drought
el incendio = fire
sostenible = sustainable
el contenedor = (recycling) bin
la acequia = irrigation channel
`,phrases:`
El cambio climático es un problema muy grave. = Climate change is a very serious problem.
En casa reciclamos el plástico y el papel. = At home we recycle plastic and paper.
Deberíamos usar más el transporte público. = We should use public transport more.
Este verano ha habido muchos incendios. = There have been many fires this summer.
España produce mucha energía solar. = Spain produces a lot of solar power.
Hay que ahorrar agua: hay sequía. = We have to save water: there's a drought.
`,drills:`
Tiramos el plástico al ___ amarillo. => contenedor | contaminación | contenido | contador # We throw plastic into the yellow bin.
Hace dos años que no llueve: hay ___. => sequía | seca | secado | inundación # It hasn't rained for two years: there's a drought.
Las energías ___ no contaminan. => renovables | renovadas | nuevas | reciclables # Renewable energies don't pollute.
Es importante ___ el papel y el vidrio. => reciclar | reciclaje | reciclado | recicle # It's important to recycle paper and glass.
Los coches producen mucha ___. => contaminación | contaminado | contaminar | contenido # Cars cause a lot of pollution.
`},{t:`Debating: agree & disagree`,k:`talk`,goal:`Give and defend your opinion, agree and disagree politely`,body:`
## Giving your opinion
{En mi opinión…}, {Desde mi punto de vista…}, {Para mí…}, {Creo / Pienso / Opino que…}, {Me parece que…}

## Agreeing and disagreeing
| agree | partly | disagree |
|---|---|---|
| {Estoy de acuerdo contigo.} | {Tienes parte de razón, pero…} | {No estoy de acuerdo.} |
| {Tienes toda la razón.} | {Depende.} | {No creo que sea así.} |
| {¡Exacto!} / {¡Claro!} | {Sí, pero por otro lado…} | {Yo no lo veo así.} |

## Structuring an argument
{Por un lado… por otro (lado)…} (on the one hand… on the other…), {Además…}, {Sin embargo…}, {Por eso…}, {En conclusión…}

> Por un lado, el coche es cómodo; por otro, contamina mucho. = On the one hand, the car is comfortable; on the other, it pollutes a lot.
> No estoy de acuerdo con que la energía nuclear sea la solución. = I don't agree that nuclear power is the solution.

!tip: {estar de acuerdo con que} + subjunctive: {No estoy de acuerdo con que suban los precios.}
!de: {Ich bin der Meinung, dass…} = {Opino que…}; {Ich bin einverstanden} = {Estoy de acuerdo}.
`,words:`
desde mi punto de vista = from my point of view
opinar = to think, to be of the opinion
estar de acuerdo = to agree
no estar de acuerdo = to disagree
tienes toda la razón = you're absolutely right
depende = it depends
por un lado = on the one hand
por otro lado = on the other hand
el argumento = argument
el debate = debate
convencer = to convince
`,phrases:`
Desde mi punto de vista, es una buena idea. = From my point of view, it's a good idea.
Estoy de acuerdo contigo. = I agree with you.
No estoy de acuerdo con que suban los precios. = I don't agree that prices should go up.
Por un lado es barato; por otro, contamina mucho. = On the one hand it's cheap; on the other, it pollutes a lot.
Tienes toda la razón. = You're absolutely right.
Depende de la situación. = It depends on the situation.
`,drills:`
Estoy de ___ contigo. => acuerdo | acorde | opinión | razón # I agree with you.
Tienes toda la ___. => razón | verdad | opinión | idea # You're absolutely right.
Por un ___, me gusta; por otro, es caro. => lado | parte | punto | vez # On the one hand I like it; on the other, it's expensive.
Desde mi punto de ___, es injusto. => vista | ver | visto | opinión # From my point of view, it's unfair.
No estoy de acuerdo con que ___ los impuestos. (subir) => suban | suben | subirán | subir # I don't agree that taxes should go up.
`},{t:`Becoming: ponerse, volverse…`,k:`grammar`,goal:`Choose the right verb to say "become" or "get"`,body:`
## Verbs of change
| verb | type of change | example |
|---|---|---|
| {ponerse} + adjective | sudden, temporary (mood, colour, health) | {Se puso rojo.} {Me pongo nervioso.} |
| {volverse} + adjective | sudden, lasting change of character | {Se ha vuelto muy serio.} |
| {hacerse} + noun / adjective | by effort or over time | {Se hizo médico.} {Se hizo rico.} |
| {llegar a ser} | after a long process | {Llegó a ser presidente.} |
| {quedarse} + adjective | a result, often negative | {Se quedó ciego.} {Me quedé sorprendido.} |
| {convertirse en} + noun | a transformation | {La rana se convirtió en príncipe.} |

> Cuando habla en público, se pone muy nerviosa. = When she speaks in public, she gets very nervous.
> Desde que es famoso, se ha vuelto insoportable. = Since he became famous, he's become unbearable.
> Mi hermano se hizo abogado. = My brother became a lawyer.
> Me quedé sin palabras. = I was left speechless.

!de: German "werden" covers most of these; Spanish picks the verb by the type of change: "Er wurde rot" = {Se puso rojo}; "Er wurde Arzt" = {Se hizo médico}.
!ar: Arabic uses أصبح / صار for most: صار طبيبًا ≈ {Se hizo médico}; احمرّ وجهه ≈ {Se puso rojo}.
`,words:`
ponerse = to become, to get (temporary)
volverse = to become (character)
hacerse = to become (by effort)
llegar a ser = to end up becoming
convertirse en = to turn into
ponerse nervioso = to get nervous
ponerse rojo = to blush
hacerse rico = to get rich
quedarse sin palabras = to be left speechless
insoportable = unbearable
`,phrases:`
Cuando hablo en público, me pongo nervioso. = When I speak in public, I get nervous.
Se puso rojo cuando la vio. = He blushed when he saw her.
Desde que es famoso, se ha vuelto insoportable. = Since he became famous, he's become unbearable.
Mi hermano se hizo abogado. = My brother became a lawyer.
Me quedé sin palabras. = I was left speechless.
El pueblo se convirtió en una ciudad turística. = The village turned into a tourist town.
`,drills:`
Cuando me hablan en inglés, me ___ nervioso. => pongo | hago | vuelvo | quedo # When people speak to me in English, I get nervous.
Trabajó mucho y se ___ rico. => hizo | puso | quedó | volvió # He worked hard and became rich.
El agua se ___ en hielo. => convirtió | hizo | puso | volvió # The water turned into ice.
Después del accidente, se ___ ciego. => quedó | puso | hizo | convirtió # After the accident, he was left blind.
Desde que gana tanto dinero, se ha ___ muy arrogante. => vuelto | puesto | hecho | quedado # Since he's been earning so much money, he's become very arrogant.
`},{t:`Verbs with prepositions`,k:`grammar`,goal:`Use common verbs with their fixed prepositions`,body:`
## Verbs that need a preposition
| | | |
|---|---|---|
| {pensar en} | to think about | {Pienso en ti.} |
| {soñar con} | to dream of | {Sueño con viajar.} |
| {depender de} | to depend on | {Depende del tiempo.} |
| {enamorarse de} | to fall in love with | {Se enamoró de Ana.} |
| {casarse con} | to marry | {Se casó con un alemán.} |
| {acordarse de} | to remember | {¿Te acuerdas de mí?} |
| {tratar de} | to try to | {Trato de estudiar cada día.} |
| {quedar con} | to meet up with | {He quedado con Laura.} |
| {confiar en} | to trust | {Confío en ti.} |
| {preocuparse por} | to worry about | {Se preocupa por todo.} |
| {aprender a} | to learn to | {Aprendo a cocinar.} |

!tip: The prepositions often differ from English: {casarse con} (marry *with*), {soñar con} (dream *with*), {pensar en} (think *in*). Learn them as one block!
!de: Some match German: {pensar en} ≈ denken an, {depender de} ≈ abhängen von, {soñar con} ≈ träumen von. But {casarse con} = jemanden heiraten.
!ar: Some match Arabic: {pensar en} ≈ فكّر في، {confiar en} ≈ وثق بـ، {casarse con} ≈ تزوّج من.
`,words:`
pensar en = to think about
soñar con = to dream of
depender de = to depend on
enamorarse de = to fall in love with
casarse con = to marry
acordarse de = to remember
tratar de = to try to
quedar con = to meet up with
confiar en = to trust
preocuparse por = to worry about
aprender a = to learn to
`,phrases:`
Pienso mucho en mi familia. = I think about my family a lot.
Sueño con vivir junto al mar. = I dream of living by the sea.
Todo depende del tiempo. = Everything depends on the weather.
Se casó con un chico de Sevilla. = She married a guy from Seville.
¿Te acuerdas de nuestro primer viaje? = Do you remember our first trip?
He quedado con Laura a las ocho. = I've arranged to meet Laura at eight.
`,drills:`
Siempre pienso ___ ti. => en | de | con | a # I always think about you.
Sueño ___ ser médica. => con | de | en | a # I dream of being a doctor.
Se casó ___ su novio de la universidad. => con | de | a | en # She married her boyfriend from university.
¿Te acuerdas ___ mi hermana? => de | a | en | con # Do you remember my sister?
Todo depende ___ ti. => de | en | a | con # Everything depends on you.
Confío ___ ti. => en | de | a | con # I trust you.
`}],story:{title:`Un verano sin agua`,text:`
Este verano en Andalucía no ha llovido nada. Se habla de la peor sequía de los últimos años.
= This summer it hasn't rained at all in Andalusia. People are talking about the worst drought in years.

Laura ha ido a visitar a su abuela Carmen, que vive en un pueblo de Jaén. En el pueblo se han cerrado las piscinas y los campos solo se riegan de noche.
= Laura has gone to visit her grandmother Carmen, who lives in a village in Jaén. In the village the swimming pools have been closed and the fields are only watered at night.

—Abuela, ¿antes también había sequías? —Sí, hija, pero no como ahora. Cuando yo era niña, el río nunca se quedaba seco.
= "Grandma, were there droughts before too?" "Yes, dear, but not like now. When I was a girl, the river never ran dry."

Una noche hay una reunión en el ayuntamiento. Un señor dice que el problema es el cambio climático; otro opina que se gasta demasiada agua en el turismo.
= One night there's a meeting at the town hall. One man says the problem is climate change; another thinks too much water is used for tourism.

—Por un lado, el turismo da trabajo —dice el alcalde—. Por otro, sin agua no hay futuro. Tenemos que buscar soluciones sostenibles.
= "On the one hand, tourism provides jobs," says the mayor. "On the other, without water there's no future. We have to find sustainable solutions."

La abuela Carmen se pone de pie: —Estoy de acuerdo. En este pueblo siempre hemos cuidado el agua, como hacían los árabes con sus acequias. ¡Tenemos que volver a hacerlo!
= Grandma Carmen stands up: "I agree. In this village we've always looked after our water, as the Arabs did with their irrigation channels. We have to do it again!"

Todos aplauden. Al volver a casa, a Laura se le olvidan las llaves… ¡y tienen que despertar a los vecinos! Pero esa noche, por fin, empieza a llover.
= Everyone applauds. On the way home Laura forgets her keys… and they have to wake the neighbours! But that night, at last, it starts to rain.
`,questions:`
¿Cuál es el problema en Andalucía? => La sequía | Los incendios | El frío # What's the problem in Andalusia?
¿Qué se ha cerrado en el pueblo? => Las piscinas | Las tiendas | El colegio # What has been closed in the village?
¿Qué opina la abuela Carmen? => Hay que cuidar el agua | El turismo es el único problema | No hay ningún problema # What does Grandma Carmen think?
¿Qué pasa al final? => Empieza a llover | Se van del pueblo | Hay un incendio # What happens at the end?
`}},ic=s({default:()=>ac}),ac={n:25,title:`Culture, feelings & real Spanish`,es:`¡Qué guay!`,cando:[`I can choose between por and para in all common uses`,`I can talk about relationships and feelings`,`I can understand and use diminutives and augmentatives`,`I can understand and use common idioms`,`I can talk about Spanish festivals and traditions`,`I can understand colloquial Spanish from Spain`],lessons:[{t:`Por or para? The complete picture`,k:`grammar`,goal:`Master all the common uses of por and para`,body:`
## para →
| use | example |
|---|---|
| purpose | {Estudio para ser médico.} |
| destination | {Salimos para Sevilla.} |
| deadline | {Para el lunes.} |
| recipient | {Es para ti.} |
| opinion | {Para mí, es lo mejor.} |
| "for a …" (comparison) | {Para ser extranjero, habla muy bien.} |
| use of an object | {una taza para café} |

## por ←
| use | example |
|---|---|
| cause, reason | {Lo hice por amor.} {Cerrado por vacaciones.} |
| route, through | {Pasamos por Toledo.} |
| approximate place or time | {Vive por aquí.} {por la mañana} |
| means | {por teléfono}, {por correo} |
| exchange, price | {Lo vendí por cien euros.} |
| instead of | {Hoy trabajo por mi compañero.} |
| per | {tres veces por semana}, {diez por ciento} |
| agent of a passive | {Escrito por Cervantes.} |

## Fixed expressions with por
{por fin} (at last), {por supuesto} (of course), {por cierto} (by the way), {por si acaso} (just in case), {por lo menos} (at least), {por ejemplo}, {por eso}, {por favor}.

!tip: "in order to", "for (a person, a deadline)", "towards" → **para**. "because of", "through", "per", "in exchange for" → **por**.
!de: {por} ≈ wegen, durch, pro, für (exchange); {para} ≈ für (goal, recipient), um … zu.
`,words:`
para ser = for a… (considering that)
por amor = for love
cerrado por vacaciones = closed for holidays
pasar por = to go through; to drop by
escrito por = written by
por supuesto = of course
por cierto = by the way
por si acaso = just in case
por lo menos = at least
por ejemplo = for example
la taza = cup
`,phrases:`
Para ser extranjero, hablas muy bien. = For a foreigner, you speak very well.
El Quijote fue escrito por Cervantes. = Don Quixote was written by Cervantes.
Coge un paraguas, por si acaso. = Take an umbrella, just in case.
Por cierto, ¿has visto a Ana? = By the way, have you seen Ana?
Trabajo tres días por semana. = I work three days a week.
Hoy trabajo por mi compañera, que está enferma. = Today I'm working instead of my colleague, who's ill.
`,drills:`
Lo hice ___ ti. (for your sake) => por | para | de | a # I did it for your sake.
Este regalo es ___ ti. (recipient) => para | por | de | a # This present is for you.
El libro fue escrito ___ García Márquez. => por | para | de | con # The book was written by García Márquez.
Coge el abrigo, por si ___. => acaso | caso | casos | acasa # Take your coat, just in case.
___ ser tan joven, sabe mucho. => Para | Por | A | De # For someone so young, he knows a lot.
Voy al gimnasio tres veces ___ semana. => por | para | de | en # I go to the gym three times a week.
`},{t:`Relationships & feelings`,k:`vocab`,goal:`Talk about relationships, friendships and emotions`,body:`
## Relationships
| | |
|---|---|
| {llevarse bien / mal con} | to get on well / badly with |
| {caer bien / mal} | to like / dislike (a person) |
| {enamorarse de} | to fall in love with |
| {salir con} | to go out with |
| {romper con} | to break up with |
| {pelearse / discutir} | to fight / to argue |
| {hacer las paces} | to make up |
| {echar de menos} | to miss |
| {tener celos} | to be jealous |

> Me llevo muy bien con mi suegra. = I get on very well with my mother-in-law.
> Tu primo me cae muy bien. = I really like your cousin.
> Rompieron después de cinco años. = They broke up after five years.
> Te echo mucho de menos. = I miss you a lot.

## Feelings
{la alegría} (joy), {la tristeza} (sadness), {la vergüenza} (embarrassment), {los celos} (jealousy), {el orgullo} (pride), {la soledad} (loneliness), {la esperanza} (hope).

!warn: {embarazada} means **pregnant**, not embarrassed! Embarrassed = {me da vergüenza}.
!tip: {caer bien} works like gustar: {Me cae bien tu hermano} (I like your brother — as a person).
!de: "Er ist mir sympathisch" = {Me cae bien}; "Ich vermisse dich" = {Te echo de menos}.
`,words:`
llevarse bien con = to get on well with
caer bien = to like (a person)
caer mal = to dislike (a person)
salir con = to go out with
romper con = to break up with
hacer las paces = to make up
tener celos = to be jealous
la vergüenza = embarrassment, shame
me da vergüenza = I'm embarrassed
la soledad = loneliness
el suegro, la suegra = father-in-law, mother-in-law
embarazada = pregnant
`,phrases:`
Me llevo muy bien con mis compañeros. = I get on very well with my colleagues.
Tu hermano me cae genial. = I really like your brother.
Rompieron después de cinco años juntos. = They broke up after five years together.
Discutieron, pero ya han hecho las paces. = They argued, but they've already made up.
Me da vergüenza hablar en público. = I'm embarrassed to speak in public.
Mi hermana está embarazada. = My sister is pregnant.
`,drills:`
Me ___ muy bien con mi jefe. => llevo | caigo | pongo | quedo # I get on very well with my boss.
Tu amiga me ___ muy bien. => cae | lleva | pone | queda # I really like your friend.
Discutimos, pero ya hemos hecho las ___. => paces | pazes | pases | paz # We argued, but we've already made up.
Me da ___ hablar en público. => vergüenza | embarazada | vergonzoso | orgullo # I'm embarrassed to speak in public.
Rompió ___ su novio la semana pasada. => con | de | a | en # She broke up with her boyfriend last week.
`},{t:`Diminutives & augmentatives`,k:`grammar`,goal:`Understand and use -ito, -illo, -ón, -azo`,body:`
## Diminutives: small, cute, affectionate
| suffix | example |
|---|---|
| {-ito / -ita} | {casa} → {casita}, {perro} → {perrito}, {abuela} → {abuelita} |
| {-cito / -cita} | {café} → {cafecito}, {joven} → {jovencito} |
| {-illo / -illa} (Andalusia) | {chico} → {chiquillo}, {pan} → {panecillo} |
| {-ín / -ina} (north-west Spain) | {pequeño} → {pequeñín} |

> Espera un momentito. = Wait just a moment.
> ¿Quieres un poquito de pan? = Would you like a little bit of bread?
> ¡Qué perrito tan bonito! = What a lovely little dog!

!tip: Diminutives add warmth, not just smallness: {un cafecito} sounds friendlier than {un café}. Spelling keeps the sound: {poco} → {poquito}, {amigo} → {amiguito}.

## Augmentatives: big — or a bit negative
| suffix | example |
|---|---|
| {-ón / -ona} | {casa} → {casona} (big house) |
| {-azo / -aza} | {coche} → {cochazo} (amazing car) |
| {-ote / -ota} | {grande} → {grandote} |

!tip: {-azo} can also mean a blow: {un portazo} (a door slam), {un codazo} (a nudge with the elbow).
!de: Like -chen / -lein (Häuschen, Hündchen): {casita}, {perrito} — but Spanish uses them much more, even on adverbs: {cerquita} (really close).
!ar: Like the Arabic تصغير (كُتَيِّب، بُيَيْت): {casita} ≈ بُيَيْت, {librito} ≈ كُتَيِّب.
`,words:`
la casita = little house
el perrito = little dog, puppy
un momentito = just a moment
un poquito = a little bit
el cafecito = (nice little) coffee
la abuelita = granny
el chiquillo, la chiquilla = kid (Andalusia)
la casona = big house
el cochazo = amazing car
el portazo = door slam
el golpe = blow, knock
cerquita = really close
`,phrases:`
Espera un momentito, por favor. = Wait just a moment, please.
¿Me das un poquito de agua? = Could you give me a little water?
¡Qué perrito tan bonito! = What a lovely little dog!
Vivimos en una casita junto al mar. = We live in a little house by the sea.
El supermercado está cerquita. = The supermarket is really close.
Se fue y dio un portazo. = He left and slammed the door.
`,drills:`
casa → ___ (small) => casita | casota | casona | casaza # little house
perro → ___ (small) => perrito | perrón | perrazo | perrote # little dog
poco → ___ => poquito | pocito | poquete | pocazo # a little bit
café → ___ => cafecito | cafeíto | cafito | cafezazo # nice little coffee
coche → ___ (big, impressive) => cochazo | cochito | cochón | cochota # amazing car
`},{t:`Idioms — modismos`,k:`vocab`,goal:`Understand and use everyday Spanish idioms`,body:`
## Everyday idioms
| idiom | literally | meaning |
|---|---|---|
| {estar en las nubes} | to be in the clouds | to daydream |
| {tomar el pelo} | to take the hair | to pull someone's leg |
| {costar un ojo de la cara} | to cost an eye of the face | to cost an arm and a leg |
| {ser pan comido} | to be eaten bread | to be a piece of cake |
| {meter la pata} | to put the paw in | to put your foot in it |
| {estar como una cabra} | to be like a goat | to be crazy |
| {no tener pelos en la lengua} | to have no hairs on the tongue | to be outspoken |
| {ponerse las pilas} | to put your batteries in | to get your act together |
| {estar hecho polvo} | to be made dust | to be exhausted |
| {dar en el clavo} | to hit the nail | to hit the nail on the head |
| {echar una mano} | to throw a hand | to give a hand |
| {ser uña y carne} | to be nail and flesh | to be inseparable |

> ¿Me echas una mano con la mudanza? = Can you give me a hand with the move?
> Este examen es pan comido. = This exam is a piece of cake.
> ¡Me estás tomando el pelo! = You're pulling my leg!
> Estoy hecho polvo. = I'm shattered.

!de: Some have German twins: {dar en el clavo} = den Nagel auf den Kopf treffen; {estar en las nubes} = in den Wolken schweben.
!ar: {ser uña y carne} ≈ زي الظفر واللحم — inseparable.
`,words:`
estar en las nubes = to daydream
tomar el pelo = to pull someone's leg
costar un ojo de la cara = to cost an arm and a leg
ser pan comido = to be a piece of cake
meter la pata = to put your foot in it
estar como una cabra = to be crazy
ponerse las pilas = to get your act together
estar hecho polvo = to be exhausted
dar en el clavo = to hit the nail on the head
echar una mano = to give a hand
ser uña y carne = to be inseparable
no tener pelos en la lengua = to be outspoken
`,phrases:`
¿Me echas una mano con la mudanza? = Can you give me a hand with the move?
Este examen es pan comido. = This exam is a piece of cake.
¡Me estás tomando el pelo! = You're pulling my leg!
Estoy hecho polvo después del viaje. = I'm shattered after the trip.
Ese coche cuesta un ojo de la cara. = That car costs an arm and a leg.
Metí la pata con su novia. = I put my foot in it with his girlfriend.
`,drills:`
Este ejercicio es pan ___. => comido | comer | comida | caliente # This exercise is a piece of cake.
¡No me tomes el ___! => pelo | pie | brazo | dedo # Don't pull my leg!
El hotel cuesta un ojo de la ___. => cara | cabeza | mano | boca # The hotel costs an arm and a leg.
¿Me echas una ___? => mano | pierna | cara | pata # Can you give me a hand?
Tienes que ponerte las ___ si quieres aprobar. => pilas | pelas | pistas | patas # You need to get your act together if you want to pass.
Siempre está en las ___. => nubes | estrellas | montañas | olas # He's always daydreaming.
`},{t:`Festivals & traditions`,k:`culture`,goal:`Talk about Spain’s main festivals and everyday customs`,body:`
## Spain's year of celebrations
| | |
|---|---|
| {la Nochevieja} (31 Dec) | New Year's Eve — eat **12 grapes** at midnight, one per chime! |
| {los Reyes Magos} (6 Jan) | The Three Kings bring children presents; people eat {el roscón de Reyes} |
| {los Carnavales} (Feb) | Carnival — famous in Cádiz and Tenerife |
| {las Fallas} (March, Valencia) | Giant figures are burnt in the streets |
| {la Semana Santa} (Easter) | Holy Week processions, especially in Seville |
| {la Feria de Abril} (Seville) | Flamenco dresses, sevillanas and dancing |
| {San Fermín} (July, Pamplona) | The famous running of the bulls |
| {la Tomatina} (August, Buñol) | A giant tomato fight |
| {las fiestas del pueblo} (summer) | Every village has its own festival |
| {la Nochebuena} (24 Dec) | Christmas Eve family dinner |

## Everyday customs
{la siesta}, {el tapeo} (bar-hopping for tapas), {la sobremesa} (chatting at the table after a meal), {el paseo} (the evening stroll), {los dos besos}.

> En Nochevieja se comen doce uvas. = On New Year's Eve, people eat twelve grapes.
> Los niños esperan a los Reyes Magos. = The children wait for the Three Kings.

!ar: Spain's three cultures live on in festivals like {Moros y Cristianos} in Alcoy, which re-enacts medieval battles with spectacular costumes.
!de: The big present day for Spanish children is traditionally 6 January — {el Día de Reyes} — not 24 December.
`,words:`
la Nochevieja = New Year's Eve
las uvas = grapes
los Reyes Magos = the Three Wise Men
el roscón de Reyes = Three Kings' cake
las Fallas = Fallas (Valencia festival)
la Semana Santa = Holy Week, Easter
la procesión = procession
la feria = fair, festival
la Nochebuena = Christmas Eve
la sobremesa = after-meal chat at the table
el tapeo = going out for tapas
el desfile = parade
`,phrases:`
En Nochevieja comemos doce uvas. = On New Year's Eve we eat twelve grapes.
Los Reyes Magos traen regalos a los niños. = The Three Kings bring presents to the children.
En Semana Santa hay procesiones en Sevilla. = During Holy Week there are processions in Seville.
La sobremesa puede durar horas. = The after-lunch chat can last for hours.
¿Vamos de tapeo esta noche? = Shall we go for tapas tonight?
En las Fallas se queman figuras gigantes. = During Fallas giant figures are burnt.
`,drills:`
En Nochevieja se comen doce ___. => uvas | naranjas | aceitunas | manzanas # On New Year's Eve, twelve grapes are eaten.
Los niños españoles reciben regalos de los Reyes ___. => Magos | Magios | Mágicos | Mayos # Spanish children get presents from the Three Kings.
En Valencia se celebran las ___ en marzo. => Fallas | Fiestas | Ferias | Faldas # Fallas is celebrated in Valencia in March.
Después de comer, nos quedamos de ___ dos horas. => sobremesa | siesta | tapeo | mesa # After lunch we stayed chatting at the table for two hours.
La cena de ___ es el 24 de diciembre. => Nochebuena | Nochevieja | Navidad | Reyes # Christmas Eve dinner is on 24 December.
`},{t:`Colloquial Spanish (Spain)`,k:`talk`,goal:`Understand and use everyday informal Spanish from Spain`,body:`
## Words you'll hear every day
| | |
|---|---|
| {¡Vale!} | OK! |
| {¡Venga!} | Come on! / OK, bye! |
| {¡Guay!} | Cool! |
| {¡Mola!} / {Me mola} | It's cool! / I like it |
| {¡Qué pasada!} | That's amazing! |
| {¡Qué fuerte!} | Wow! / No way! |
| {tío / tía} | mate, dude (also uncle / aunt) |
| {majo / maja} | nice, friendly |
| {currar / el curro} | to work / job |
| {la pasta} | money (also pasta!) |
| {flipar} | to be amazed |
| {estar hasta las narices} | to be fed up |
| {¡Ostras!} | Wow! / Blimey! |

> ¿Quedamos a las ocho? — ¡Vale, venga! = Shall we meet at eight? — OK, great!
> Tío, ¡qué pasada de concierto! = Man, what an amazing concert!
> Estoy hasta las narices del curro. = I'm fed up with work.
> Me mola mucho tu chaqueta. = I really like your jacket.

!warn: These are informal — perfect with friends, not in a job interview!
!es: Spaniards use fillers constantly: {pues} (well), {bueno} (well…), {o sea} (I mean), {¿sabes?} (you know?), {en plan} (like…). A few of them make you sound natural.
!de: {¡Vale!} is as frequent as German "OK" or "passt"; {tío / tía} ≈ "Alter" — but friendlier.
`,words:`
¡vale! = OK!
¡venga! = come on! OK!
¡guay! = cool!
mola = it's cool
¡qué pasada! = that's amazing!
el tío, la tía = mate, dude (colloquial)
majo, maja = nice, friendly
currar = to work (colloquial)
el curro = job (colloquial)
la pasta = money (colloquial); pasta
flipar = to be amazed
o sea = I mean
¡ostras! = wow! blimey!
`,phrases:`
¿Quedamos a las ocho? — ¡Vale, venga! = Shall we meet at eight? — OK, great!
Tío, ¡qué pasada de concierto! = Man, what an amazing concert!
Estoy hasta las narices del curro. = I'm fed up with work.
Me mola mucho tu chaqueta. = I really like your jacket.
Tu amiga es muy maja. = Your friend is really nice.
¡Ostras! Se me ha olvidado la cartera. = Blimey! I've forgotten my wallet.
`,drills:`
¿Vamos al cine? — ¡___! => Vale | Valor | Valle | Bale # Shall we go to the cinema? — OK!
¡Qué ___ de fiesta! Fue increíble. => pasada | pasado | pasta | pasear # What an amazing party! It was incredible.
Tu novio es muy ___. Me cae genial. => majo | maja | mago | mayo # Your boyfriend is really nice. I really like him.
No tengo ___: estoy a final de mes. (money, colloquial) => pasta | pasada | paso | pata # I've got no money: it's the end of the month.
Me ___ esta canción. (I like it, colloquial) => mola | molo | moles | muela # I really like this song.
`}],story:{title:`Nochevieja en la Puerta del Sol`,text:`
Es 31 de diciembre. Anna, Omar, Laura y Javier han quedado en la Puerta del Sol, en Madrid, para tomar las uvas.
= It's 31 December. Anna, Omar, Laura and Javier have met up in the Puerta del Sol in Madrid to eat the grapes.

—¡Tíos, qué pasada! —dice Laura—. ¡Hay miles de personas! —Sí, y hace un frío que pela —contesta Omar, que lleva gorro, bufanda y dos jerséis.
= "Guys, this is amazing!" says Laura. "There are thousands of people!" "Yes, and it's freezing," answers Omar, who's wearing a hat, a scarf and two jumpers.

Javier le explica a Omar la tradición: —A las doce, el reloj da doce campanadas. Con cada campanada hay que comer una uva. Si te las comes todas, tendrás un año de buena suerte.
= Javier explains the tradition to Omar: "At twelve, the clock strikes twelve chimes. With each chime you have to eat a grape. If you eat them all, you'll have a year of good luck."

—¿Doce uvas en doce segundos? ¡Eso no es pan comido! —Por eso las uvas de Nochevieja son pequeñitas y sin pepitas —se ríe Anna.
= "Twelve grapes in twelve seconds? That's no piece of cake!" "That's why New Year's Eve grapes are tiny and seedless," laughs Anna.

Empiezan las campanadas. Todos comen deprisa… pero a Omar se le caen dos uvas al suelo. —¡Ostras! —grita con la boca llena.
= The chimes begin. Everyone eats fast… but Omar drops two grapes on the ground. "Blimey!" he shouts with his mouth full.

—¡Feliz Año Nuevo! —gritan todos, y se dan besos y abrazos. Laura llora un poquito de emoción: echa de menos a su abuela, pero está feliz con sus amigos.
= "Happy New Year!" they all shout, and they kiss and hug. Laura cries a little with emotion: she misses her grandmother, but she's happy with her friends.

—¿Y ahora qué? —pregunta Omar. —¡Ahora, chocolate con churros hasta las seis de la mañana! —dice Javier—. ¡Venga, vamos!
= "And now what?" asks Omar. "Now, hot chocolate and churros until six in the morning!" says Javier. "Come on, let's go!"
`,questions:`
¿Dónde están los amigos? => En la Puerta del Sol | En la Plaza Mayor | En Barcelona # Where are the friends?
¿Qué hay que hacer con cada campanada? => Comer una uva | Dar un beso | Beber agua # What do you have to do with each chime?
¿Qué le pasa a Omar? => Se le caen dos uvas | Se le olvida el gorro | Llega tarde # What happens to Omar?
¿Qué van a hacer después? => Tomar chocolate con churros | Dormir | Volver a Barcelona # What are they going to do afterwards?
`}},oc=s({default:()=>sc}),sc={n:26,title:`B1 finale — putting it all together`,es:`¡Lo has conseguido!`,cando:[`I can use the future perfect and the perfect subjunctive`,`I can write a structured opinion text`,`I can keep a conversation going with natural fillers and rescue strategies`,`I can switch between formal and informal registers`,`I can use all the main tenses from A1 to B1 in context`,`I can describe my experiences, hopes and plans in Spanish`],lessons:[{t:`Future perfect: habré terminado`,k:`grammar`,goal:`Say what will have happened and guess about the recent past`,body:`
## habré / habrás / habrá / habremos / habréis / habrán + participle
1. Something **finished before a moment in the future**:
> Para junio habré terminado el curso. = By June I'll have finished the course.
> Cuando llegues, ya habremos cenado. = When you arrive, we'll already have had dinner.

2. A **guess about the recent past**:
> ¿Dónde está Ana? — Habrá perdido el tren. = Where's Ana? — She must have missed the train.
> No contesta. Se habrá dormido. = He's not answering. He must have fallen asleep.

!tip: Guess about now → future ({Estará en casa}); about something that has just happened → future perfect ({Habrá salido}); about the more distant past → conditional ({Serían las diez}).
!de: Exactly the German Futur II: "Er wird den Zug verpasst haben" = {Habrá perdido el tren}.
!ar: {Habrá perdido el tren} ≈ لا بدّ أنّه فاته القطار.
`,words:`
habré terminado = I'll have finished
habremos cenado = we'll have had dinner
habrá perdido = he / she must have missed
se habrá dormido = he / she must have fallen asleep
para junio = by June
para entonces = by then
el futuro perfecto = future perfect
el plazo = deadline; period
`,phrases:`
Para junio habré terminado el curso. = By June I'll have finished the course.
Cuando llegues, ya habremos cenado. = When you arrive, we'll already have had dinner.
¿Dónde está Ana? — Habrá perdido el tren. = Where's Ana? — She must have missed the train.
No contesta. Se habrá dormido. = He's not answering. He must have fallen asleep.
Para entonces ya habré aprendido mucho español. = By then I'll have learnt a lot of Spanish.
El plazo termina el viernes. = The deadline is on Friday.
`,drills:`
Para diciembre ___ terminado la carrera. (yo) => habré | habría | he | había # By December I'll have finished my degree.
Cuando vuelvas, ya ___ comido. (nosotros) => habremos | habríamos | hemos | habíamos # When you get back, we'll already have eaten.
Pedro no ha llegado. ___ perdido el autobús. => Habrá | Habría | Ha | Había # Pedro hasn't arrived. He must have missed the bus.
No contesta: se habrá ___. (dormir) => dormido | durmiendo | dormida | duerme # He's not answering: he must have fallen asleep.
Para ___ ya habré terminado. (by then) => entonces | ahora | luego | antes # By then I'll have finished.
`},{t:`Perfect subjunctive: que hayas…`,k:`grammar`,goal:`Use haya + participle after subjunctive triggers`,body:`
## haya / hayas / haya / hayamos / hayáis / hayan + participle
Use it with the usual subjunctive triggers when the action is **already done**:
> Espero que hayas dormido bien. = I hope you slept well.
> Me alegro de que hayáis venido. = I'm glad you've (all) come.
> No creo que haya terminado todavía. = I don't think he's finished yet.
> Es posible que se haya perdido. = Maybe he's got lost.
> Ojalá haya aprobado. = I hope I've passed.

## Compare
| present subjunctive | perfect subjunctive |
|---|---|
| {Espero que llegues bien.} | {Espero que hayas llegado bien.} |
| I hope you arrive safely. (you're still travelling) | I hope you've arrived safely. (you should be there by now) |

!tip: It's simply the subjunctive version of {he hablado}: {he} → {haya}.
!de: "Ich hoffe, du bist gut angekommen" = {Espero que hayas llegado bien} — German indicative, Spanish subjunctive.
!ar: {Ojalá haya aprobado} ≈ إن شاء الله أكون قد نجحت.
`,words:`
haya llegado = (that) he / she has arrived
hayas dormido = (that) you have slept
hayamos terminado = (that) we have finished
hayan visto = (that) they have seen
espero que hayas… = I hope you have…
me alegro de que hayáis venido = I'm glad you've come
ojalá haya aprobado = I hope I've passed
llegar bien = to arrive safely
el resultado = result
`,phrases:`
Espero que hayas dormido bien. = I hope you slept well.
Me alegro de que hayáis venido. = I'm glad you've (all) come.
No creo que haya terminado todavía. = I don't think he's finished yet.
Es posible que se haya perdido. = Maybe he's got lost.
Ojalá haya aprobado el examen. = I hope I've passed the exam.
Espero que hayáis llegado bien a casa. = I hope you've (all) got home safely.
`,drills:`
Espero que ___ dormido bien. (tú) => hayas | has | habías | habrás # I hope you slept well.
Me alegro de que ___ venido. (vosotros) => hayáis | habéis | hayan | hubierais # I'm glad you've (all) come.
No creo que Ana ___ terminado. => haya | ha | había | habrá # I don't think Ana has finished.
Ojalá ___ aprobado. (yo) => haya | he | había | habré # I hope I've passed.
Es posible que se ___ perdido. (ellos) => hayan | han | habían | habrán # Maybe they've got lost.
`},{t:`Writing an opinion text`,k:`talk`,goal:`Write a structured opinion text like in the DELE B1 exam`,body:`
## Structure (DELE B1 style)
1. **Introduction** — present the topic: {Hoy en día, cada vez más personas…} / {Se habla mucho de…}
2. **Your opinion** — {En mi opinión…} / {Desde mi punto de vista…} / {Considero que…}
3. **Arguments** — {En primer lugar…} {En segundo lugar…} {Además…} {Por otra parte…}
4. **Counter-argument** — {Es cierto que…, pero…} / {Sin embargo…} / {Aunque…}
5. **Conclusion** — {En conclusión…} / {En resumen…} / {Por todo ello, creo que…}

## A model text
> Hoy en día, cada vez más personas trabajan desde casa. = Nowadays, more and more people work from home.
> En mi opinión, el teletrabajo tiene muchas ventajas. = In my opinion, working from home has many advantages.
> En primer lugar, ahorramos tiempo y dinero en transporte. = First of all, we save time and money on transport.
> Además, podemos organizar mejor nuestro horario. = What's more, we can organise our time better.
> Es cierto que a veces nos sentimos solos; sin embargo, podemos quedar con los compañeros. = It's true that we sometimes feel lonely; however, we can meet up with colleagues.
> Por todo ello, creo que el teletrabajo es el futuro. = For all these reasons, I believe remote work is the future.

!tip: Mix your tenses and include at least one subjunctive ({Es importante que las empresas…}) — examiners love it!
!es: The official Spanish exam is the **DELE**, run by the Instituto Cervantes. DELE B1 has reading, listening, writing and speaking parts. After this course, you're ready to prepare for it!
`,words:`
hoy en día = nowadays
cada vez más = more and more
considerar = to consider
la ventaja = advantage
la desventaja = disadvantage
por otra parte = on the other hand; furthermore
por todo ello = for all these reasons
el teletrabajo = working from home
la redacción = essay, composition
el DELE = official Spanish diploma
`,phrases:`
Hoy en día, cada vez más personas trabajan desde casa. = Nowadays, more and more people work from home.
Considero que el teletrabajo tiene muchas ventajas. = I believe working from home has many advantages.
En primer lugar, ahorramos tiempo en transporte. = First of all, we save time on transport.
Es cierto que tiene desventajas; sin embargo, merece la pena. = It's true that it has disadvantages; however, it's worth it.
Por todo ello, creo que es el futuro. = For all these reasons, I think it's the future.
Quiero presentarme al DELE B1. = I want to take the DELE B1 exam.
`,drills:`
Hoy en ___, todo el mundo tiene móvil. => día | días | diario | dia # Nowadays everyone has a mobile.
Cada ___ más personas trabajan desde casa. => vez | día | año | momento # More and more people work from home.
Una ___ del teletrabajo es que ahorras tiempo. => ventaja | ventana | ventilación | venta # One advantage of working from home is that you save time.
Por ___ ello, creo que es una buena idea. => todo | toda | todos | tanto # For all these reasons, I think it's a good idea.
Es importante que las empresas ___ en sus trabajadores. (pensar) => piensen | piensan | pensar | pensarán # It's important that companies think about their workers.
`},{t:`Keeping the conversation going`,k:`talk`,goal:`Sound natural with fillers and get out of trouble when you’re stuck`,body:`
## Fillers — sound natural
| | |
|---|---|
| {Pues…} | Well… |
| {Bueno…} | Well… / OK… |
| {A ver…} | Let's see… |
| {O sea…} | I mean… |
| {Es que…} | The thing is… |
| {¿Sabes?} | You know? |
| {Es decir…} | That is… |
| {Vamos, que…} | Basically… |

## Showing you're listening
{¿En serio?} (Seriously?), {¡No me digas!} (No way!), {Ya…} (Right…), {Claro, claro} (Of course), {¡Qué interesante!}, {¿Y luego?} (And then?), {Entiendo} (I see).

## Rescue strategies
> Perdona, no te he entendido. ¿Puedes repetirlo? = Sorry, I didn't understand. Can you repeat it?
> ¿Qué quiere decir "currar"? = What does "currar" mean?
> No sé cómo se dice, pero es una cosa que sirve para… = I don't know how to say it, but it's a thing you use for…
> ¿Lo he dicho bien? = Did I say that right?

!tip: Don't know a word? **Describe it**: {Es una cosa que…}, {Es una persona que…}, {Es un sitio donde…} — the relative clauses from weeks 17 and 23 to the rescue!
!de: {Es que…} ≈ "Die Sache ist die…"; {o sea} ≈ "also / das heißt".
`,words:`
pues = well…
bueno = well…; OK
a ver = let's see
es que = the thing is
es decir = that is
¿en serio? = seriously?
ya = right… (I see)
¿y luego? = and then?
¿qué quiere decir…? = what does … mean?
¿lo he dicho bien? = did I say it right?
entiendo = I see, I understand
`,phrases:`
Pues… no sé qué decirte. = Well… I don't know what to tell you.
Es que hoy no puedo, tengo mucho trabajo. = The thing is, I can't today — I have a lot of work.
A ver, ¿qué quieres decir exactamente? = Let's see, what exactly do you mean?
¿En serio? ¡No me lo puedo creer! = Seriously? I can't believe it!
No sé cómo se dice, pero es una cosa que sirve para abrir latas. = I don't know what it's called, but it's a thing for opening tins.
Perdona, ¿lo he dicho bien? = Sorry, did I say that right?
`,drills:`
¿Vienes esta noche? — ___ que no puedo, tengo que trabajar. => Es | Pues | Bueno | Ya # Are you coming tonight? — The thing is, I can't, I have to work.
A ___, ¿dónde he dejado las llaves? => ver | mirar | saber | buscar # Let's see, where did I leave my keys?
¿Qué quiere ___ "majo"? => decir | hablar | contar | significar # What does "majo" mean?
Es una cosa ___ sirve para cortar papel. => que | donde | quien | cual # It's a thing you use to cut paper.
¿En ___? ¡No me lo puedo creer! => serio | serie | seria | sério # Seriously? I can't believe it!
`},{t:`Formal or informal?`,k:`talk`,goal:`Choose between tú and usted and adapt your register`,body:`
## Tú or usted?
| informal (tú / vosotros) | formal (usted / ustedes) |
|---|---|
| friends, family, colleagues, people your age | older people, officials, formal letters, some customers |
| {¿Cómo estás?} | {¿Cómo está usted?} |
| {¿Puedes ayudarme?} | {¿Podría ayudarme?} |
| {Siéntate.} | {Siéntese.} |
| {Te llamo mañana.} | {Le llamo mañana.} |
| {Hola, ¿qué tal?} | {Buenos días, ¿en qué puedo ayudarle?} |
| {Un abrazo} | {Atentamente} |

!tip: In Spain {tú} is very common — with strangers your age, waiters, colleagues. When in doubt, start with {usted}; people will tell you {Puedes tutearme} (you can use tú with me).

## The same message, two registers
> Oye, ¿me pasas el informe cuando puedas? ¡Gracias, eres un crack! = Hey, can you send me the report when you can? Thanks, you're a star!
> Disculpe, ¿podría enviarme el informe cuando le sea posible? Muchas gracias. = Excuse me, could you send me the report when convenient? Many thanks.

!de: Spain's {tú} is much more widespread than German "du"; {usted} feels like a very polite "Sie".
!ar: Arabic shows respect with حضرتك or titles (أستاذ، يا عمّ); Spanish uses {usted} with the 3rd-person verb.
`,words:`
tutear = to address someone as tú
hablar de usted = to address someone as usted
¿te importa si te tuteo? = do you mind if I call you tú?
disculpe = excuse me (formal)
oye = hey, listen (informal)
cuando le sea posible = when convenient (formal)
el registro = register (of language)
formal = formal
informal = informal
eres un crack = you're a star (colloquial)
`,phrases:`
¿Te importa si te tuteo? = Do you mind if I call you "tú"?
Puedes tutearme. = You can call me "tú".
Disculpe, ¿podría ayudarme? = Excuse me, could you help me?
Oye, ¿me ayudas un momento? = Hey, can you help me for a second?
Le llamo mañana sin falta. = I'll call you tomorrow without fail. (formal)
¡Gracias, eres un crack! = Thanks, you're a star!
`,drills:`
(to your boss, formal) ¿___ ayudarme, por favor? => Podría | Podrías | Puedes | Podéis # Could you help me, please?
(to a friend) ¿___ ayudarme? => Puedes | Podría | Pueda | Puede # Can you help me?
(formal) ___, ¿sabe dónde está la estación? => Disculpe | Disculpa | Oye | Mira # Excuse me, do you know where the station is?
Puedes ___: no soy tan mayor. => tutearme | tutearte | ustedearme | hablarme # You can call me "tú": I'm not that old.
(formal) ___ llamo mañana. => Le | Te | Lo | Os # I'll call you tomorrow.
`},{t:`The big tense review`,k:`grammar`,goal:`Use all the main tenses from A1 to B1 together`,body:`
## Every tense you've learned
| tense | example | use |
|---|---|---|
| Presente | {Hablo español.} | now, habits |
| Estar + gerundio | {Estoy hablando.} | right now |
| Pretérito perfecto | {He hablado hoy.} | today, this week, experiences |
| Pretérito indefinido | {Hablé ayer.} | finished past events |
| Pretérito imperfecto | {De niño hablaba mucho.} | past habits, descriptions |
| Pluscuamperfecto | {Ya había hablado.} | the past before the past |
| Futuro | {Hablaré mañana.} | future, predictions, guesses |
| Ir a + infinitivo | {Voy a hablar.} | plans |
| Futuro perfecto | {Habré hablado.} | done by a future moment |
| Condicional | {Hablaría.} | would, politeness, advice |
| Imperativo | {¡Habla!} / {¡No hables!} | commands |
| Presente de subjuntivo | {Quiero que hables.} | wishes, doubts, emotions… |
| Perfecto de subjuntivo | {Espero que hayas hablado.} | the same, already done |
| Imperfecto de subjuntivo | {Si hablara…} / {Quería que hablaras.} | hypotheses, past triggers |

## One story, many tenses
> Cuando era niño, vivía en Rabat. = When I was a child, I lived in Rabat.
> Hace cinco años me mudé a Alemania, y este año he empezado a aprender español. = Five years ago I moved to Germany, and this year I've started learning Spanish.
> Ahora estoy estudiando el subjuntivo. = Now I'm studying the subjunctive.
> Si tuviera más tiempo, viviría un año en España. = If I had more time, I'd live in Spain for a year.
> Espero que dentro de un año ya haya aprobado el DELE B1. = I hope that in a year I'll have passed the DELE B1.

!tip: Your final challenge: write your own life story using at least eight different tenses — then read it aloud and record yourself in the Pronunciation lab. ¡Enhorabuena!
`,words:`
el tiempo verbal = (verb) tense
el repaso = review, revision
repasar = to review, to revise
el progreso = progress
mejorar = to improve
la fluidez = fluency
el nivel = level
dominar = to master
`,phrases:`
Cuando era niño, vivía en Rabat. = When I was a child, I lived in Rabat.
Este año he empezado a aprender español. = This year I've started learning Spanish.
Ahora estoy repasando todos los tiempos verbales. = Now I'm reviewing all the tenses.
Si tuviera más tiempo, viviría un año en España. = If I had more time, I'd live in Spain for a year.
Espero que dentro de un año haya mejorado mucho. = I hope that in a year I'll have improved a lot.
¡He llegado al nivel B1! = I've reached level B1!
`,drills:`
Ayer ___ al cine con mis amigos. (ir, yo) => fui | iba | he ido | iré # Yesterday I went to the cinema with my friends.
De niño ___ al fútbol todos los días. (jugar, yo) => jugaba | jugué | juego | jugaría # As a child I played football every day.
Hoy ___ mucho. (estudiar, yo) => he estudiado | estudié | estudiaba | estudiara # Today I've studied a lot.
Si ___ dinero, compraría una casa. (tener, yo) => tuviera | tengo | tendría | tenga # If I had money, I'd buy a house.
Quiero que ___ a mi fiesta. (venir, tú) => vengas | vienes | vendrás | vinieras # I want you to come to my party.
Cuando llegué, ya ___ empezado la película. => había | ha | habrá | haya # When I arrived, the film had already started.
`}],story:{title:`Un año después`,text:`
Barcelona, 4 de octubre. Hoy hace exactamente un año que empecé a estudiar español en serio. No me lo puedo creer.
= Barcelona, 4 October. Today it's exactly a year since I started studying Spanish seriously. I can't believe it.

Cuando llegué a Madrid, no entendía casi nada. Me ponía nerviosa cada vez que alguien me hablaba rápido, y siempre decía «más despacio, por favor».
= When I arrived in Madrid, I understood almost nothing. I got nervous every time someone spoke to me quickly, and I was always saying "more slowly, please".

Este año han pasado muchas cosas: conocí a gente maravillosa, me mudé a Barcelona con Omar y conseguí un trabajo en el que hablo español todos los días.
= A lot has happened this year: I met wonderful people, moved to Barcelona with Omar and got a job where I speak Spanish every day.

Lo más difícil fue el subjuntivo, ¡claro! Pero ahora, cuando Omar me dice «espero que tengas un buen día», ya no tengo que pensarlo: lo entiendo sin traducir.
= The hardest thing was the subjunctive, of course! But now, when Omar says "I hope you have a good day", I don't have to think about it any more: I understand it without translating.

Hace un año no creía que pudiera escribir un diario en español. ¡Y aquí estoy!
= A year ago I didn't think I'd be able to write a diary in Spanish. And here I am!

Mi próximo objetivo es el DELE B1. Me examinaré en mayo. Ojalá apruebe, pero aunque no lo consiga a la primera, seguiré estudiando.
= My next goal is the DELE B1. I'll take the exam in May. I hope I pass — but even if I don't manage it the first time, I'll keep studying.

Quiero darle las gracias a toda la gente que me ha ayudado. Y a ti, que estás leyendo esto: ¡ánimo! Si yo lo he conseguido, tú también puedes. ¡Hasta pronto!
= I want to thank everyone who has helped me. And to you, reading this: keep going! If I've managed it, so can you. See you soon!
`,questions:`
¿Cuánto tiempo hace que Anna estudia español en serio? => Un año | Dos años | Seis meses # How long has Anna been studying Spanish seriously?
¿Qué le pasaba cuando llegó a Madrid? => Se ponía nerviosa | Lo entendía todo | Hablaba muy rápido # What used to happen to her when she arrived in Madrid?
¿Qué fue lo más difícil para Anna? => El subjuntivo | La pronunciación | Los números # What was the hardest thing for Anna?
¿Cuál es su próximo objetivo? => Aprobar el DELE B1 | Mudarse a Madrid | Aprender árabe # What is her next goal?
`}},cc=(e=``)=>e.split(`
`).map(e=>e.trim()).filter(e=>e&&!e.startsWith(`//`));function lc(e,t){let n=e.indexOf(` = `);if(n<0)throw Error(`[content] missing " = " in ${t}: ${e}`);return[e.slice(0,n).trim(),e.slice(n+3).trim()]}function uc(e,t){return cc(e).map(e=>{let[n,r]=e.split(` // `),[i,a]=lc(n,t);return r?{es:i,en:a,note:r.trim()}:{es:i,en:a}})}function dc(e,t){return cc(e).map(e=>{let[n,r]=lc(e,t);return{es:n,en:r}})}function fc(e,t){return cc(e).map(e=>{let[n,r]=e.split(` # `),i=n.indexOf(` => `);if(i<0)throw Error(`[content] missing " => " in ${t}: ${e}`);let a=n.slice(0,i).trim(),o=n.slice(i+4).split(` | `).map(e=>e.trim()).filter(Boolean);return{q:a,a:o[0],opts:o.slice(1),...r?{en:r.trim()}:{}}})}function pc(e){let t=[];for(let n of e.split(`
`)){let e=n.trim();if(!e.startsWith(`> `))continue;let r=e.indexOf(` = `);r<0||t.push({es:e.slice(2,r).trim(),en:e.slice(r+3).trim()})}return t}function mc(e,t,n){let r=[];for(let t of e.text.split(/\n\s*\n/)){let e=t.split(`
`).map(e=>e.trim()).filter(Boolean);if(!e.length)continue;let n=e.filter(e=>!e.startsWith(`= `)).join(` `),i=e.filter(e=>e.startsWith(`= `)).map(e=>e.slice(2)).join(` `);r.push({es:n,en:i})}return{id:`story-w${Mo(t)}`,week:t,level:n,title:e.title,paras:r,questions:fc(e.questions,`story w${t}`)}}function hc(e){return e<=9?`A1`:e<=17?`A2`:`B1`}function gc(e){let t=hc(e.n),n=e.lessons.map((n,r)=>{let i=`w${Mo(e.n)}d${r+1}`;return{id:i,week:e.n,day:r+1,level:t,title:n.t,kind:n.k,goal:n.goal,body:n.body.trim(),words:uc(n.words,i),phrases:dc(n.phrases,i),drills:fc(n.drills,i),examples:pc(n.body)}});return{n:e.n,level:t,title:e.title,es:e.es,cando:e.cando,lessons:n,story:mc(e.story,e.n,t)}}var _c=Object.values(Object.assign({"./weeks/w01.ts":us,"./weeks/w02.ts":fs,"./weeks/w03.ts":ms,"./weeks/w04.ts":gs,"./weeks/w05.ts":vs,"./weeks/w06.ts":bs,"./weeks/w07.ts":Ss,"./weeks/w08.ts":ws,"./weeks/w09.ts":Es,"./weeks/w10.ts":Os,"./weeks/w11.ts":As,"./weeks/w12.ts":Ms,"./weeks/w13.ts":Ps,"./weeks/w14.ts":Is,"./weeks/w15.ts":Rs,"./weeks/w16.ts":Bs,"./weeks/w17.ts":Hs,"./weeks/w18.ts":Ws,"./weeks/w19.ts":Ks,"./weeks/w20.ts":Js,"./weeks/w21.ts":Xs,"./weeks/w22.ts":Qs,"./weeks/w23.ts":ec,"./weeks/w24.ts":nc,"./weeks/w25.ts":ic,"./weeks/w26.ts":oc})).map(e=>gc(e.default)).sort((e,t)=>e.n-t.n),vc=_c.flatMap(e=>e.lessons),yc=new Map(vc.map(e=>[e.id,e])),bc=_c.map(e=>e.story),xc=new Map(bc.map(e=>[e.id,e])),Sc=new Map(_c.map(e=>[e.n,e])),Cc=new Set([9,17,26]),wc=[{id:`A1`,name:`Beginner`,es:`Primeros pasos`,weeks:[1,9],blurb:`Sounds, introductions, present tense, everyday basics`},{id:`A2`,name:`Elementary`,es:`Construyendo`,weeks:[10,17],blurb:`Past tenses, future, comparisons, travel, health`},{id:`B1`,name:`Intermediate`,es:`Independiente`,weeks:[18,26],blurb:`Subjunctive, conditionals, reported speech, opinions`}],Tc=e=>`w${Mo(e)}d7`,Ec=_c.flatMap(e=>[...e.lessons.map(t=>({id:t.id,index:0,week:e.n,day:t.day,level:e.level,kind:`lesson`,title:t.title,lesson:t})),{id:Tc(e.n),index:0,week:e.n,day:7,level:e.level,kind:Cc.has(e.n)?`checkpoint`:`review`,title:Cc.has(e.n)?`${e.level} checkpoint`:`Week ${e.n} review`}]).map((e,t)=>({...e,index:t}));new Map(Ec.map(e=>[e.id,e]));var Dc=e=>Object.values(e.xp).reduce((e,t)=>e+t,0),Oc=e=>Object.keys(e.cards).length,kc=(e,t)=>!!e.progress[t]?.done,Ac=[{id:`first`,emoji:`👣`,title:`¡Primer paso!`,desc:`Finish your first lesson`,check:e=>e.stats.lessons>=1},{id:`streak3`,emoji:`🔥`,title:`En racha`,desc:`Reach a 3-day streak`,check:e=>e.streak.longest>=3},{id:`streak7`,emoji:`📅`,title:`Una semana`,desc:`Reach a 7-day streak`,check:e=>e.streak.longest>=7},{id:`streak30`,emoji:`🌙`,title:`Un mes entero`,desc:`Reach a 30-day streak`,check:e=>e.streak.longest>=30},{id:`streak100`,emoji:`💯`,title:`Cien días`,desc:`Reach a 100-day streak`,check:e=>e.streak.longest>=100},{id:`streak180`,emoji:`🏆`,title:`Medio año`,desc:`Reach a 180-day streak`,check:e=>e.streak.longest>=180},{id:`words50`,emoji:`🌱`,title:`Primeras palabras`,desc:`Learn 50 words`,check:e=>Oc(e)>=50},{id:`words250`,emoji:`🌿`,title:`Vocabulario`,desc:`Learn 250 words`,check:e=>Oc(e)>=250},{id:`words750`,emoji:`🌳`,title:`Gran vocabulario`,desc:`Learn 750 words`,check:e=>Oc(e)>=750},{id:`words1500`,emoji:`📚`,title:`Diccionario andante`,desc:`Learn 1,500 words`,check:e=>Oc(e)>=1500},{id:`week1`,emoji:`⭐`,title:`Semana uno`,desc:`Complete week 1`,check:e=>kc(e,`w01d7`)},{id:`a1`,emoji:`🥉`,title:`Nivel A1`,desc:`Pass the A1 checkpoint`,check:e=>kc(e,`w09d7`)},{id:`a2`,emoji:`🥈`,title:`Nivel A2`,desc:`Pass the A2 checkpoint`,check:e=>kc(e,`w17d7`)},{id:`b1`,emoji:`🥇`,title:`Nivel B1`,desc:`Pass the B1 checkpoint`,check:e=>kc(e,`w26d7`)},{id:`perfect`,emoji:`💎`,title:`¡Perfecto!`,desc:`Finish a lesson with no mistakes`,check:e=>e.stats.perfect>=1},{id:`perfect10`,emoji:`👑`,title:`Perfeccionista`,desc:`10 perfect lessons`,check:e=>e.stats.perfect>=10},{id:`reviews100`,emoji:`🧠`,title:`Memoria`,desc:`Do 100 flashcard reviews`,check:e=>e.stats.reviews>=100},{id:`reviews1000`,emoji:`🐘`,title:`Memoria de elefante`,desc:`Do 1,000 flashcard reviews`,check:e=>e.stats.reviews>=1e3},{id:`speak20`,emoji:`🎙️`,title:`Valiente`,desc:`Say 20 phrases into the microphone`,check:e=>e.stats.spoken>=20},{id:`stories5`,emoji:`📖`,title:`Lector`,desc:`Read 5 stories`,check:e=>Object.keys(e.stories).length>=5},{id:`stories20`,emoji:`📜`,title:`Ratón de biblioteca`,desc:`Read 20 stories`,check:e=>Object.keys(e.stories).length>=20},{id:`xp1000`,emoji:`⚡`,title:`Mil puntos`,desc:`Earn 1,000 XP`,check:e=>Dc(e)>=1e3},{id:`xp5000`,emoji:`🚀`,title:`Cinco mil`,desc:`Earn 5,000 XP`,check:e=>Dc(e)>=5e3}],jc=new Map(Ac.map(e=>[e.id,e])),Mc={dailyGoal:50,voiceURI:null,rate:.92,theme:`system`,sound:!0,speaking:!0,autoplay:!0,tipsDe:!0,tipsAr:!0,reminder:`19:00`},Nc=()=>({onboarded:!1,startDate:null,settings:{...Mc},progress:{},xp:{},streak:{current:0,longest:0,last:null,freezes:0,frozen:[]},cards:{},mistakes:{},stories:{},achievements:{},stats:{exercises:0,correct:0,seconds:0,reviews:0,spoken:0,lessons:0,perfect:0},cando:{},goalCelebrated:null}),Pc=e=>ae(e),B=Wo()(z((e,t)=>({...Nc(),setSettings:t=>e(e=>({settings:{...e.settings,...t}})),finishOnboarding:({dailyGoal:t,startDate:n})=>e(e=>({onboarded:!0,startDate:n,settings:{...e.settings,dailyGoal:t}})),setStartDate:t=>e({startDate:t}),addXP:n=>{let r=t(),i=qo(),a=r.xp[i]??0,o=a+Math.max(0,Math.round(n)),{current:s,longest:c,last:l,freezes:u}=r.streak,d=[...r.streak.frozen],f=!1;if(n>0&&l!==i){if(!l)s=1;else{let e=Xo(l,i);if(e===1)s+=1;else if(e>1){let t=e-1;if(t<=u){u-=t;for(let e=1;e<=t;e++)d.push(Yo(l,e));s+=1}else s=1}}l=i,f=!0,c=Math.max(c,s),s%7==0&&u<2&&(u+=1)}let p=r.settings.dailyGoal,m=a<p&&o>=p&&r.goalCelebrated!==i;e({xp:{...r.xp,[i]:o},streak:{current:s,longest:c,last:l,freezes:u,frozen:d.slice(-60)},...m?{goalCelebrated:i}:{}});let h=t().checkAchievements();return{gained:o-a,streakExtended:f,streak:s,goalReached:m,unlocked:h}},completeDay:(n,r,i)=>{let a=t(),o=a.progress[n],s=qo(),c=n.endsWith(`d7`)?25:15,l=!o?.done,u=Math.round((l?c:c/2)+10*Ao(r,0,1));return e({progress:{...a.progress,[n]:{done:!0,best:Math.max(o?.best??0,r),at:o?.at??s,count:(o?.count??0)+1}},stats:{...a.stats,lessons:a.stats.lessons+ +!!l,perfect:a.stats.perfect+ +(r>=.999)}}),i?.length&&t().addCards(i,n),t().addXP(u)},addCards:(n,r)=>{let i=t(),a=Date.now(),o={...i.cards},s=0;for(let e of n){let t=Pc(e.es);t&&!o[t]&&(o[t]={id:t,es:e.es,en:e.en,src:r,added:a,due:as(a,1),interval:1,ease:2.5,reps:1,lapses:0},s++)}return s&&e({cards:o}),s},gradeCard:(n,r)=>{let i=t(),a=i.cards[n];a&&e({cards:{...i.cards,[n]:ss(a,r)},stats:{...i.stats,reviews:i.stats.reviews+1}})},saveWord:(n,r)=>{let i=Pc(n),a=t();if(a.cards[i])return!1;let o=Date.now();return e({cards:{...a.cards,[i]:{id:i,es:n,en:r,src:`saved`,added:o,due:o,interval:0,ease:2.5,reps:0,lapses:0}}}),!0},removeCard:n=>{let r={...t().cards};delete r[n],e({cards:r})},recordMistake:(n,r)=>{let i=t(),a=Pc(n),o=i.mistakes[a];e({mistakes:{...i.mistakes,[a]:{es:n,en:r,n:(o?.n??0)+1,at:Date.now()}}})},clearMistake:n=>{let r=Pc(n),i=t();if(!i.mistakes[r])return;let a={...i.mistakes};delete a[r],e({mistakes:a})},bumpStats:t=>e(e=>{let n={...e.stats};for(let[e,r]of Object.entries(t))n[e]+=r;return{stats:n}}),markStory:(t,n)=>e(e=>({stories:{...e.stories,[t]:{at:qo(),score:Math.max(n,e.stories[t]?.score??0)}}})),toggleCando:t=>e(e=>({cando:{...e.cando,[t]:!e.cando[t]}})),checkAchievements:()=>{let n=t(),r=[],i=qo(),a={...n.achievements};for(let e of Ac)a[e.id]||e.check(n)&&(a[e.id]=i,r.push(e.id));return r.length&&e({achievements:a}),r},importData:t=>e({...Nc(),...t,settings:{...Mc,...t.settings}}),resetAll:()=>e(Nc())}),{name:`camino-v1`,version:1,storage:Go(()=>localStorage),partialize:e=>{let{onboarded:t,startDate:n,settings:r,progress:i,xp:a,streak:o,cards:s,mistakes:c,stories:l,achievements:u,stats:d,cando:f,goalCelebrated:p}=e;return{onboarded:t,startDate:n,settings:r,progress:i,xp:a,streak:o,cards:s,mistakes:c,stories:l,achievements:u,stats:d,cando:f,goalCelebrated:p}},merge:(e,t)=>{let n=e??{};return{...t,...n,settings:{...Mc,...n.settings??{}},stats:{...t.stats,...n.stats??{}}}}}));function Fc(e,t=qo()){if(!e.last)return{count:0,doneToday:!1,atRisk:!1,freezeNeeded:0};let n=Xo(e.last,t);if(n<=0)return{count:e.current,doneToday:!0,atRisk:!1,freezeNeeded:0};if(n===1)return{count:e.current,doneToday:!1,atRisk:!0,freezeNeeded:0};let r=n-1;return r<=e.freezes?{count:e.current,doneToday:!1,atRisk:!0,freezeNeeded:r}:{count:0,doneToday:!1,atRisk:!1,freezeNeeded:0}}function Ic(e,t,n=qo()){let r=Ec.filter(t=>e[t.id]?.done).length,i=Ec.find(t=>!e[t.id]?.done)??null,a=t?Math.max(0,Xo(t,n)):0,o=Math.min(Ec.length,a);return{done:r,next:i,expected:o,delta:r-o,todayIdx:Math.min(Ec.length-1,a),total:Ec.length}}function Lc(e,t=Date.now()){return Object.values(e).filter(e=>e.due<=t).sort((e,t)=>e.due-t.due)}function Rc(e){return Object.keys(e).length}function zc(e){return Object.values(e).reduce((e,t)=>e+t,0)}var Bc=[{to:`/`,label:`Today`,icon:ba,end:!0},{to:`/path`,label:`Path`,icon:Ma},{to:`/practice`,label:`Practice`,icon:aa},{to:`/words`,label:`Words`,icon:Vi},{to:`/me`,label:`Me`,icon:xo}];function Vc(){return(0,I.jsx)(`nav`,{className:`lg:hidden fixed bottom-0 inset-x-0 z-40 bg-card/95 backdrop-blur border-t-2 border-line safe-bottom`,"aria-label":`Main`,children:(0,I.jsx)(`ul`,{className:`flex max-w-xl mx-auto`,children:Bc.map(({to:e,label:t,icon:n,end:r})=>(0,I.jsx)(`li`,{className:`flex-1`,children:(0,I.jsx)(fi,{to:e,end:r,className:({isActive:e})=>P(`flex flex-col items-center gap-0.5 pt-2 pb-1.5 text-[0.7rem] font-extrabold transition-colors`,e?`text-ink`:`text-ink3 hover:text-ink2`),children:({isActive:e})=>(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`span`,{className:P(`grid place-items-center w-12 h-8 rounded-xl transition-colors`,e&&`bg-brand-soft border-2 border-brand`),children:(0,I.jsx)(n,{className:`w-[22px] h-[22px]`,strokeWidth:e?2.6:2.2})}),t]})})},e))})})}function Hc(){let e=B(e=>e.streak),t=B(e=>e.xp),n=B(e=>e.settings.dailyGoal),r=Fc(e),i=t[qo()]??0;return(0,I.jsxs)(`aside`,{className:`hidden lg:flex fixed inset-y-0 left-0 w-64 flex-col border-r-2 border-line bg-bg px-4 py-6 z-30`,children:[(0,I.jsxs)(fi,{to:`/`,className:`flex items-center gap-2.5 px-2 mb-8`,children:[(0,I.jsx)(Ro,{size:44,still:!0}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`div`,{className:`text-2xl font-black tracking-tight leading-none`,children:`Camino`}),(0,I.jsx)(`div`,{className:`text-xs font-bold text-ink3`,children:`Spanish · A1 → B1`})]})]}),(0,I.jsx)(`ul`,{className:`space-y-1.5`,children:Bc.map(({to:e,label:t,icon:n,end:r})=>(0,I.jsx)(`li`,{children:(0,I.jsxs)(fi,{to:e,end:r,className:({isActive:e})=>P(`flex items-center gap-3 rounded-2xl px-4 py-3 font-black uppercase tracking-wide text-[0.88rem] border-2 transition-colors`,e?`bg-brand-soft border-brand text-ink`:`border-transparent text-ink2 hover:bg-bg2`),children:[(0,I.jsx)(n,{className:`w-6 h-6`,strokeWidth:2.3}),` `,t]})},e))}),(0,I.jsxs)(`div`,{className:`mt-auto card p-4 space-y-3`,children:[(0,I.jsxs)(`div`,{className:`flex items-center gap-2 font-black`,children:[(0,I.jsx)(ma,{className:P(`w-6 h-6`,r.count?`text-fire fill-fire/30`:`text-ink3`)}),r.count,` day streak`]}),(0,I.jsxs)(`div`,{className:`flex items-center gap-2 font-black`,children:[(0,I.jsx)(Do,{className:`w-6 h-6 text-brand-lip fill-brand/40`}),i,` / `,n,` XP today`]})]})]})}var Uc=h();function Wc({onClose:e,children:t,label:n,className:r,bare:i}){let a=(0,v.useRef)(null);return(0,v.useEffect)(()=>{let t=t=>{t.key===`Escape`&&e()};document.addEventListener(`keydown`,t);let n=document.body.style.overflow;return document.body.style.overflow=`hidden`,a.current?.focus(),()=>{document.removeEventListener(`keydown`,t),document.body.style.overflow=n}},[e]),(0,Uc.createPortal)((0,I.jsxs)(`div`,{className:`fixed inset-0 z-50 flex items-end sm:items-center justify-center`,role:`presentation`,children:[(0,I.jsx)(`div`,{className:`absolute inset-0 bg-black/40 anim-fade`,onClick:e}),(0,I.jsxs)(`div`,{ref:a,tabIndex:-1,role:`dialog`,"aria-modal":`true`,"aria-label":n,className:P(`relative w-full sm:max-w-lg max-h-[88dvh] overflow-y-auto bg-card border-2 border-line rounded-t-[1.75rem] sm:rounded-[1.75rem] sm:mb-0 outline-none anim-slide-up safe-bottom`,`shadow-[var(--shadow-pop)]`,r),children:[(0,I.jsx)(`div`,{className:`sm:hidden mx-auto mt-2.5 h-1.5 w-12 rounded-full bg-line2`}),!i&&(0,I.jsx)(`button`,{type:`button`,onClick:e,"aria-label":`Close`,className:`absolute right-3 top-3 btn-ghost rounded-xl p-2 text-ink3 hover:text-ink`,children:(0,I.jsx)(To,{className:`w-5 h-5`})}),t]})]}),document.body)}var Gc=typeof window<`u`&&`speechSynthesis`in window&&`SpeechSynthesisUtterance`in window,Kc=[],qc=[],Jc=null,Yc=.92,Xc=null,Zc=0,Qc=new Set;function $c(){Zc++,Qc.forEach(e=>e())}var el=e=>(e||``).replace(`_`,`-`).toLowerCase();function tl(e){let t=el(e.lang),n=e.name.toLowerCase(),r=0;return t===`es-es`?r+=100:t.startsWith(`es`)&&(r+=20),/natural|neural|online|premium|enhanced|mejorad|wavenet|studio|siri/.test(n)&&(r+=40),/google/.test(n)&&(r+=25),/m[oó]nica|jorge|elvira|[aá]lvaro|helena|laura|pablo|luc[ií]a|sergio|dalia|abril|arnau|irene/.test(n)&&(r+=5),/compact|eloquence|grandma|grandpa|rocko|shelley|flo|reed|sandy|eddy/.test(n)&&(r-=30),e.localService&&(r+=2),r}function nl(){if(!Gc)return;let e=window.speechSynthesis.getVoices();e.length&&(Kc=e,qc=e.filter(e=>el(e.lang).startsWith(`es`)).sort((e,t)=>tl(t)-tl(e)),$c())}if(Gc){nl(),window.speechSynthesis.addEventListener?.(`voiceschanged`,nl);let e=0,t=setInterval(()=>{nl(),(Kc.length||++e>24)&&clearInterval(t)},250)}function rl(e){Jc=e.voiceURI,Yc=e.rate}function il(){return qc}function al(){return Gc?Kc.length?qc.length?`ok`:`none`:`unknown`:`unsupported`}function ol(){if(Jc){let e=qc.find(e=>e.voiceURI===Jc);if(e)return e}return qc[0]??null}function sl(e){return e.replace(/[[\]]/g,``).replace(/_{2,}/g,`…`).replace(/\s*\/\s*/g,`, `).replace(/\s+/g,` `).trim()}var cl=0;function ll(e,t={}){if(!Gc){t.onEnd?.();return}let n=sl(e);if(!n)return;let r=window.speechSynthesis,i=new SpeechSynthesisUtterance(n),a=ol();a?(i.voice=a,i.lang=a.lang):i.lang=`es-ES`,i.rate=t.rate??(t.slow?Math.max(.45,Yc*.62):Yc),i.pitch=1;let o=t.id??n,s=!1;i.onstart=()=>{Xc=o,$c()};let c=()=>{s||(s=!0,Xc===o&&(Xc=null,$c()),t.onEnd?.())};i.onend=c,i.onerror=c,Xc=o,$c(),r.speaking||r.pending?(r.cancel(),setTimeout(()=>r.speak(i),70)):r.speak(i),r.paused&&r.resume()}function ul(e,t,n={}){let r=++cl,i=a=>{if(r===cl){if(a>=e.length){t(-1);return}t(a),ll(e[a],{slow:n.slow,id:`seq-${r}-${a}`,onEnd:()=>setTimeout(()=>i(a+1),250)})}};return i(0),()=>{r===cl&&cl++,dl(),t(-1)}}function dl(){cl++,Gc&&window.speechSynthesis.cancel(),Xc!==null&&(Xc=null,$c())}function fl(e){return Qc.add(e),()=>Qc.delete(e)}function pl(e){return(0,v.useSyncExternalStore)(fl,()=>Xc===e)}function ml(){return(0,v.useSyncExternalStore)(fl,()=>Zc)}function hl({className:e}){return(0,I.jsxs)(`span`,{className:P(`sound-wave inline-flex items-center`,e),"aria-hidden":`true`,children:[(0,I.jsx)(`span`,{}),(0,I.jsx)(`span`,{}),(0,I.jsx)(`span`,{})]})}var gl={sm:`w-7 h-7 rounded-lg [&_svg]:w-4 [&_svg]:h-4`,md:`w-10 h-10 rounded-xl [&_svg]:w-5 [&_svg]:h-5`,lg:`w-14 h-14 rounded-2xl [&_svg]:w-7 [&_svg]:h-7`,xl:`w-24 h-24 rounded-3xl [&_svg]:w-11 [&_svg]:h-11`},_l={soft:`bg-brand-soft text-brand-soft-ink hover:brightness-95`,brand:`bg-brand text-brand-ink shadow-[0_4px_0_var(--brand-lip)] active:translate-y-1 active:shadow-none`,info:`bg-info text-white shadow-[0_4px_0_var(--info-lip)] active:translate-y-1 active:shadow-none`,ghost:`text-ink2 hover:bg-bg2`};function V({text:e,slow:t,size:n=`md`,variant:r=`soft`,className:i,label:a}){let o=`${t?`slow`:`btn`}:${e}`,s=pl(o);return(0,I.jsx)(`button`,{type:`button`,"aria-label":a??(t?`Play slowly: ${e}`:`Play: ${e}`),title:t?`Play slowly`:`Play`,onClick:n=>{n.stopPropagation(),s?dl():ll(e,{slow:t,id:o})},className:P(`grid place-items-center flex-none transition`,gl[n],_l[r],i),children:s?(0,I.jsx)(hl,{}):t?(0,I.jsx)(_o,{strokeWidth:2.4}):(0,I.jsx)(Co,{strokeWidth:2.4})})}var vl=0,yl=Wo((e,t)=>({sheet:null,openWord:(t,n,r,i)=>e({sheet:{word:t,context:n,key:r,prev:i}}),closeWord:()=>e({sheet:null}),toasts:[],toast:n=>{let r=++vl;e({toasts:[...t().toasts,{...n,id:r}].slice(-3)}),setTimeout(()=>t().dismiss(r),4200)},dismiss:n=>e({toasts:t().toasts.filter(e=>e.id!==n)}),installEvent:null,setInstallEvent:t=>e({installEvent:t})}));function bl(e){let t=``,n=[],r=!1;for(let i of e){if(i===`[`){r=!0;continue}if(i===`]`){r=!1;continue}t+=i,n.push(r)}return{clean:t,marks:n}}function xl(e,t,n){if(!n.some(Boolean))return e;let r=[],i=``,a=n[t]??!1;for(let o=0;o<e.length;o++){let s=n[t+o]??!1;s!==a&&(r.push(a?(0,I.jsx)(`span`,{className:`es-hl`,children:i},o):i),i=``,a=s),i+=e[o]}return r.push(a?(0,I.jsx)(`span`,{className:`es-hl`,children:i},`end`):i),r}function H({text:e,play:t,className:n,plain:r,static:i}){let a=(0,v.useId)(),o=yl(e=>e.openWord),s=yl(e=>e.sheet?.key),{clean:c,marks:l}=(0,v.useMemo)(()=>bl(e),[e]),u=(0,v.useMemo)(()=>oe(c),[c]);if(i)return(0,I.jsx)(`span`,{lang:`es`,className:n,children:xl(c,0,l)});let d=(e,t,n)=>{ll(e,{id:`w:${t}`});let r;for(let e=n-1;e>=0;e--)if(u[e].word){r=u[e].text;break}o(e,c,t,r)};return(0,I.jsxs)(`span`,{lang:`es`,className:P(r&&`es-plain`,n),children:[t&&(0,I.jsx)(V,{text:c,size:`sm`,className:`mr-1.5 inline-flex align-[-0.3em]`}),u.map((e,t)=>{if(!e.word)return(0,I.jsx)(v.Fragment,{children:xl(e.text,e.start,l)},t);let n=`${a}-${t}`;return(0,I.jsx)(`span`,{role:`button`,tabIndex:0,className:`es-word`,"data-active":s===n,onClick:r=>{r.stopPropagation(),d(e.text,n,t)},onKeyDown:r=>{(r.key===`Enter`||r.key===` `)&&(r.preventDefault(),d(e.text,n,t))},children:xl(e.text,e.start,l)},t)})]})}var Sl=`
el = the (masc.)
la = the (fem.); her, it (object)
los = the (masc. pl.); them (object)
las = the (fem. pl.); them (fem., object)
lo = it, him (object); the … thing
un = a, an (masc.)
una = a, an (fem.)
unos = some (masc.)
unas = some (fem.)
de = of, from
del = of the (de + el)
a = to, at
al = to the (a + el)
en = in, on, at
con = with
sin = without
por = for, by, through, because of
para = for, in order to
y = and
e = and (before i- / hi-)
o = or
u = or (before o- / ho-)
pero = but
sino = but rather
que = that, which, who; than
qué = what, which; how (¡qué…!)
quién = who
quiénes = who (plural)
cómo = how
cuándo = when
dónde = where
adónde = where to
cuánto = how much
cuánta = how much
cuántos = how many
cuántas = how many
cuál = which (one)
cuáles = which (ones)
porque = because
si = if, whether
sí = yes
no = no, not
ni = nor, not even
también = also, too
tampoco = neither, not either
muy = very
mucho = a lot, much
mucha = a lot of, much
muchos = many
muchas = many
poco = little, not much
poca = little
pocos = few
pocas = few
más = more
menos = less, fewer; minus
ya = already; now
todavía = still, yet
aún = still, yet
siempre = always
nunca = never
jamás = never (ever)
hoy = today
ayer = yesterday
mañana = tomorrow; morning
ahora = now
luego = later, then
después = after, afterwards
antes = before
entonces = then, so
aquí = here
allí = there
ahí = there (near you)
este = this (masc.)
esta = this (fem.)
estos = these (masc.)
estas = these (fem.)
esto = this (thing)
ese = that (masc.)
esa = that (fem.)
esos = those (masc.)
esas = those (fem.)
eso = that (thing)
aquel = that (over there)
aquella = that (over there, fem.)
mi = my
mis = my (plural)
tu = your
tus = your (plural)
su = his, her, its, their, your (formal)
sus = his, her, their, your (plural things)
nuestro = our
nuestra = our
vuestro = your (you all)
vuestra = your (you all)
me = me, to me, myself
te = you, to you, yourself
se = himself, herself, themselves; (impersonal) one
nos = us, to us, ourselves
os = you all, to you all
le = to him, to her, to you (formal)
les = to them, to you all
mí = me (after a preposition)
ti = you (after a preposition)
conmigo = with me
contigo = with you
todo = all, everything
toda = all, the whole
todos = all, everyone
todas = all
otro = other, another
otra = other, another
otros = others
otras = others
algo = something
nada = nothing
alguien = someone
nadie = nobody
algún = some, any
alguno = some, any (one)
alguna = some, any
ningún = no, not any
ninguno = none, no one
ninguna = none, no
cada = each, every
bien = well, fine
mal = badly, bad
así = like this, so
hay = there is, there are
sobre = on, about
entre = between, among
hasta = until, up to; even
desde = from, since
hacia = towards
contra = against
según = according to
durante = during
mientras = while
cuando = when
donde = where
como = like, as; since
aunque = although, even if
tan = so, as
tanto = so much, as much
bastante = quite, enough
demasiado = too, too much
casi = almost
solo = only; alone
señor = sir, Mr, gentleman
señora = madam, Mrs, lady
don = title of respect (Mr)
doña = title of respect (Mrs)
vale = OK, fine (Spain)
bueno = well…; good
pues = well…, then
vamos = let's go; come on
venga = come on! (Spain)
oye = hey, listen
mira = look
claro = of course, clear
`,Cl=[],wl=new Map,Tl=new Map;function El(e,t){let n=e.toLowerCase().trim();if(!n)return;let r=wl.get(n)??[];r.includes(t)||r.push(t),wl.set(n,r);let i=D(n),a=Tl.get(i)??[];a.includes(t)||a.push(t),Tl.set(i,a)}function Dl(e){let t=new Set;t.add(ae(e));for(let n of e.split(/,\s*|\s*\/\s*/)){let e=ae(n.replace(/…/g,``));e&&(t.add(e),t.add(je(e)))}return[...t].filter(Boolean)}var Ol=0;for(let e of vc)for(let t of e.words){let n=je(ae(t.es)).includes(` `)&&!t.es.includes(`,`),r={id:`e${Ol++}`,es:t.es,en:t.en,note:t.note,level:e.level,src:e.id,kind:n?`phrase`:`word`};Cl.push(r),Dl(t.es).forEach(e=>El(e,r))}for(let e of ht){let t={id:`v-${e.inf}`,es:e.inf,en:e.en,level:e.level,src:`verb`,kind:`verb`};Cl.push(t),El(e.inf,t)}for(let e of Sl.split(`
`)){let t=e.trim();if(!t)continue;let n=t.indexOf(` = `),r={id:`c${Ol++}`,es:t.slice(0,n),en:t.slice(n+3),level:null,src:`core`,kind:`core`};Cl.push(r),El(r.es,r)}var kl=Cl.filter(e=>e.kind===`word`||e.kind===`phrase`),Al=null;function jl(){if(Al)return Al;Al=new Map;for(let e of ht){let t;try{t=st(e.inf)}catch{continue}for(let n of pt(t)){let t=Al.get(n.form)??[];t.some(t=>t.inf===e.inf)||t.push({inf:e.inf,tense:n.tense,p:n.p}),Al.set(n.form,t)}}return Al}function Ml(e){if(e.tense===`ger`)return`gerund (-ing form)`;if(e.tense===`part`)return`past participle`;let t=Le[e.tense];return`${e.tense===`imp`?Fe[e.p]:Pe[e.p]} · ${t.es.toLowerCase()}`}var Nl=/^(me|te|se|nos|os)$/i,Pl=[[/ces$/,`z`],[/eses$/,`és`],[/esas$/,`és`],[/esa$/,`és`],[/anas$/,`án`],[/ana$/,`án`],[/ones$/,`ón`],[/oras$/,`or`],[/ora$/,`or`],[/es$/,``],[/s$/,``],[/as$/,`o`],[/a$/,`o`],[/os$/,`o`],[/ita$/,`a`],[/ito$/,`o`],[/ísimo$/,`o`],[/ísima$/,`o`]];function Fl(e,t){let n=e.toLowerCase().trim(),r={word:e,entries:[]},i=wl.get(n);i?.length&&(r.entries=i);let a=jl().get(n);if(a?.length){let e=!!t&&Nl.test(t),n=a.find(t=>t.inf.endsWith(`se`)===e)??a[0],i=_t(n.inf);r.verb={inf:n.inf,en:i?.en??``,label:Ml(n),weak:n.inf.endsWith(`se`)&&!e}}if(!r.entries.length&&(!r.verb||r.verb.weak))for(let[e,t]of Pl){if(!e.test(n))continue;let i=n.replace(e,t),a=wl.get(i);if(a?.length){r.entries=a;break}}if(!r.entries.length&&!r.verb){let e=Tl.get(D(n));e?.length&&(r.entries=e)}return r.entries=[...r.entries].sort((e,t)=>Il(e)-Il(t)),r}function Il(e){return e.kind===`word`?0:e.kind===`phrase`?1:e.kind===`verb`?2:3}var Ll=(()=>{let e=[],t=new Set;for(let n of vc)for(let r of[...n.phrases,...n.examples]){let n=ae(r.es);t.has(n)||(t.add(n),e.push(r))}return e})();function Rl(e,t=3){let n=D(je(e.split(`,`)[0]));if(!n)return[];let r=RegExp(`(^| )${n.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)}( |$)`),i=[];for(let e of Ll)if(r.test(D(e.es))&&i.push(e),i.length>=t)break;return i}function zl(e,t=60){let n=D(e);if(!n)return[];let r=[],i=new Set;for(let e of Cl){let t=`${e.es}|${e.en}`;if(i.has(t))continue;let a=D(e.es),o=D(je(e.es)),s=D(e.en),c=-1;a===n||o===n?c=100:o.startsWith(n)||a.startsWith(n)?c=80:RegExp(`\\b${Bl(n)}`).test(s)?c=s.startsWith(n)||s.startsWith(`to ${n}`)?70:60:a.includes(n)?c=40:s.includes(n)&&(c=30),!(c<0)&&(e.kind===`core`&&(c-=5),i.add(t),r.push({entry:e,score:c}))}return r.sort((e,t)=>t.score-e.score||e.entry.es.length-t.entry.es.length).slice(0,t)}function Bl(e){return e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)}function Vl(e){let t=Me(e);return t?t===`el`||t===`los`?`m`:`f`:null}function Hl({word:e,className:t}){let n=ge(e),r=_e(e);return(0,I.jsx)(`span`,{className:P(`inline-flex flex-wrap items-center gap-1`,t),"aria-label":`Syllables: ${n.join(`-`)}`,children:n.map((e,t)=>(0,I.jsx)(`span`,{className:P(`rounded-lg px-1.5 py-0.5 text-sm font-black`,t===r?`bg-brand text-brand-ink`:`bg-bg2 text-ink2`),children:e},t))})}function Ul(){let e=yl(e=>e.sheet),t=yl(e=>e.closeWord);return e?(0,I.jsx)(Wl,{word:e.word,context:e.context,prev:e.prev,onClose:t}):null}function Wl({word:e,context:t,prev:n,onClose:r}){let i=Jn(),a=B(e=>e.cards),o=B(e=>e.saveWord),s=yl(e=>e.toast),c=(0,v.useMemo)(()=>Fl(e,n),[e,n]),l=jo(c.entries,e=>`${e.es}|${e.en}`).slice(0,3),u=l[0],d=c.verb&&!(c.verb.weak&&l.length)?c.verb:void 0,f=u&&(u.kind===`word`||u.kind===`phrase`),p=(0,v.useMemo)(()=>Rl(u?.es??d?.inf??e,2),[u,d,e]),m=u??(d?{es:d.inf,en:d.en}:null),h=m?!!a[Pc(m.es)]:!1,g=t&&t.trim().split(/\s+/).length>1&&t.trim()!==e,_=e=>{r(),i(e)},y=d&&(0,I.jsxs)(`button`,{type:`button`,onClick:()=>_(`/verbs/${encodeURIComponent(d.inf)}`),className:`w-full text-left card card-press p-3 flex items-center gap-3`,children:[(0,I.jsx)(`span`,{className:`chip bg-vio-soft text-vio`,children:`verb`}),(0,I.jsxs)(`div`,{className:`min-w-0 flex-1`,children:[(0,I.jsxs)(`div`,{className:`font-black`,children:[(0,I.jsx)(`span`,{lang:`es`,children:d.inf}),` `,(0,I.jsxs)(`span`,{className:`text-ink2 font-bold`,children:[`— `,d.en]})]}),(0,I.jsx)(`div`,{className:`text-sm text-ink2`,children:d.label})]}),(0,I.jsx)(Vi,{className:`w-5 h-5 text-ink3`})]});return(0,I.jsx)(Wc,{onClose:r,label:`Word: ${e}`,children:(0,I.jsxs)(`div`,{className:`p-5 pt-4 sm:pt-6 space-y-4`,children:[(0,I.jsxs)(`div`,{className:`flex items-center gap-3 pr-8`,children:[(0,I.jsx)(V,{text:e,size:`lg`,variant:`brand`}),(0,I.jsx)(V,{text:e,slow:!0,size:`md`,variant:`soft`}),(0,I.jsxs)(`div`,{className:`min-w-0`,children:[(0,I.jsx)(`div`,{lang:`es`,className:`text-3xl font-black leading-tight break-words`,children:e}),(0,I.jsx)(Hl,{word:e,className:`mt-1`})]})]}),!f&&y,l.length>0?(0,I.jsx)(`div`,{className:`space-y-2`,children:l.map(e=>{let t=Vl(e.es);return(0,I.jsxs)(`div`,{className:`rounded-2xl bg-bg2 px-4 py-3`,children:[(0,I.jsxs)(`div`,{className:`flex items-center gap-2 flex-wrap`,children:[(0,I.jsx)(`span`,{lang:`es`,className:`font-black text-lg`,children:e.es}),t&&(0,I.jsx)(`span`,{className:P(`chip`,t===`m`?`bg-info-soft text-info-ink`:`bg-bad-soft text-bad-ink`),children:t===`m`?`masculine`:`feminine`}),e.level&&(0,I.jsx)(`span`,{className:`chip bg-card text-ink2 border-2 border-line`,children:e.level})]}),(0,I.jsx)(`div`,{className:`text-ink2 font-bold`,children:e.en}),e.note&&(0,I.jsx)(`div`,{className:`text-sm text-ink3 mt-0.5`,children:e.note})]},e.id)})}):!d&&(0,I.jsx)(`p`,{className:`text-ink2`,children:`No saved translation for this word yet — but you can still hear it, and look it up below.`}),f&&y,p.length>0&&(0,I.jsxs)(`div`,{className:`space-y-2`,children:[(0,I.jsx)(`div`,{className:`text-xs font-black uppercase tracking-wider text-ink3`,children:`Examples`}),p.map((e,t)=>(0,I.jsxs)(`div`,{className:`flex items-start gap-2`,children:[(0,I.jsx)(V,{text:e.es,size:`sm`}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`div`,{className:`font-extrabold`,children:(0,I.jsx)(H,{text:e.es})}),(0,I.jsx)(`div`,{className:`text-sm text-ink2`,children:e.en})]})]},t))]}),g&&(0,I.jsxs)(`div`,{className:`rounded-2xl border-2 border-dashed border-line p-3 flex items-start gap-2`,children:[(0,I.jsx)(V,{text:t,size:`sm`}),(0,I.jsxs)(`div`,{className:`text-sm`,children:[(0,I.jsx)(`div`,{className:`text-ink3 font-black uppercase text-[0.7rem] tracking-wider`,children:`Whole sentence`}),(0,I.jsx)(`div`,{lang:`es`,className:`font-bold`,children:t})]})]}),(0,I.jsxs)(`div`,{className:`grid grid-cols-2 gap-2 pt-1`,children:[m?(0,I.jsxs)(`button`,{type:`button`,disabled:h,onClick:()=>{o(m.es,m.en)&&s({emoji:`⭐`,title:`Saved to your review deck`,body:m.es,tone:`ok`})},className:`btn btn-secondary btn-sm`,children:[h?(0,I.jsx)(Gi,{className:`w-4 h-4`}):(0,I.jsx)(io,{className:`w-4 h-4`}),h?`In review`:`Save word`]}):(0,I.jsx)(`span`,{}),(0,I.jsxs)(`button`,{type:`button`,onClick:()=>_(`/words?q=${encodeURIComponent(je(u?.es??e))}`),className:`btn btn-secondary btn-sm`,children:[(0,I.jsx)(Ja,{className:`w-4 h-4`}),` Dictionary`]})]}),(0,I.jsxs)(`a`,{href:`https://www.wordreference.com/es/en/translation.asp?spen=${encodeURIComponent(e.toLowerCase())}`,target:`_blank`,rel:`noreferrer`,className:`flex items-center justify-center gap-1.5 text-sm font-bold text-info hover:underline`,children:[`More on WordReference `,(0,I.jsx)(la,{className:`w-3.5 h-3.5`})]})]})})}var Gl={info:`border-info/40`,ok:`border-ok/50`,fire:`border-fire/50`,gold:`border-brand`};function Kl(){let e=yl(e=>e.toasts),t=yl(e=>e.dismiss);return(0,I.jsx)(`div`,{className:`fixed top-0 inset-x-0 z-[60] flex flex-col items-center gap-2 p-3 pointer-events-none safe-top`,"aria-live":`polite`,children:e.map(e=>(0,I.jsxs)(`button`,{type:`button`,onClick:()=>t(e.id),className:P(`pointer-events-auto w-full max-w-sm card flex items-center gap-3 px-4 py-3 text-left anim-pop shadow-[var(--shadow-pop)]`,Gl[e.tone??`info`]),children:[e.emoji&&(0,I.jsx)(`span`,{className:`text-3xl leading-none`,children:e.emoji}),(0,I.jsxs)(`span`,{className:`min-w-0`,children:[(0,I.jsx)(`span`,{className:`block font-black`,children:e.title}),e.body&&(0,I.jsx)(`span`,{className:`block text-sm text-ink2 font-bold`,children:e.body})]})]},e.id))})}var ql=null,Jl=!0;function Yl(e){Jl=e}function Xl(){if(typeof window>`u`)return null;if(!ql){let e=window.AudioContext||window.webkitAudioContext;if(!e)return null;ql=new e}return ql.state===`suspended`&&ql.resume(),ql}function Zl(e,t,n,r=`triangle`,i=.12){let a=Xl();if(!a)return;let o=a.currentTime+t,s=a.createOscillator(),c=a.createGain();s.type=r,s.frequency.setValueAtTime(e,o),c.gain.setValueAtTime(1e-4,o),c.gain.exponentialRampToValueAtTime(i,o+.015),c.gain.exponentialRampToValueAtTime(1e-4,o+n),s.connect(c),c.connect(a.destination),s.start(o),s.stop(o+n+.05)}var Ql={correct(){Jl&&(Zl(784,0,.14),Zl(1175,.1,.26))},wrong(){Jl&&(Zl(233,0,.16,`square`,.05),Zl(175,.13,.3,`square`,.05))},tap(){Jl&&Zl(880,0,.05,`sine`,.04)},flip(){Jl&&(Zl(520,0,.06,`sine`,.05),Zl(700,.05,.08,`sine`,.04))},complete(){Jl&&[523,659,784,1047].forEach((e,t)=>Zl(e,t*.11,.32,`triangle`,.1))},streak(){Jl&&[392,523,659,784,1047,1319].forEach((e,t)=>Zl(e,t*.08,.28,`triangle`,.09))}};function $l(){return(0,I.jsxs)(`div`,{className:`card p-4 space-y-3`,children:[(0,I.jsx)(`div`,{className:`font-black`,children:`No sound or wrong accent?`}),(0,I.jsx)(`ul`,{className:`space-y-2 text-sm`,children:[{os:`iPhone / iPad`,steps:`Settings → Accessibility → Spoken Content → Voices → Spanish → pick "Mónica" or "Jorge" (Spain) and download an Enhanced version.`},{os:`Android`,steps:`Settings → System → Languages → Text-to-speech output → Google engine ⚙ → Install voice data → Spanish (Spain). Use Chrome.`},{os:`Windows`,steps:`Settings → Time & language → Speech → Add voices → Español (España). In Microsoft Edge you also get very natural online voices.`},{os:`Mac`,steps:`System Settings → Accessibility → Spoken Content → System voice → Manage voices → Spanish (Spain).`}].map(e=>(0,I.jsxs)(`li`,{children:[(0,I.jsxs)(`span`,{className:`font-black`,children:[e.os,`: `]}),(0,I.jsx)(`span`,{className:`text-ink2 font-bold`,children:e.steps})]},e.os))}),(0,I.jsx)(`div`,{className:`text-xs font-bold text-ink3`,children:`Also check that your phone isn’t on silent mode. After installing a voice, reload the app and pick it in Settings.`})]})}var eu=[{xp:20,label:`Casual`,time:`~10 min a day`,note:`Good start — the plan will take longer than 6 months`},{xp:40,label:`Regular`,time:`~20–25 min a day`,note:`Steady progress`},{xp:60,label:`Serious`,time:`~35–45 min a day`,note:`Recommended for A1 → B1 in 6 months`,rec:!0},{xp:100,label:`Intense`,time:`60+ min a day`,note:`Fastest progress, extra practice every day`}];function tu(){let[e,t]=(0,v.useState)(0),[n,r]=(0,v.useState)(60),[i,a]=(0,v.useState)(qo()),[o,s]=(0,v.useState)(!1),[c,l]=(0,v.useState)(!1),u=B(e=>e.finishOnboarding),d=Jn();ml();let f=ol(),p=al(),m=e=>{u({dailyGoal:n,startDate:i}),d(e,{replace:!0})};return(0,I.jsxs)(`div`,{className:`min-h-dvh bg-bg flex flex-col`,children:[(0,I.jsx)(`div`,{className:`max-w-lg w-full mx-auto px-5 pt-6 safe-top`,children:(0,I.jsx)(`div`,{className:`flex gap-1.5`,children:[0,1,2,3].map(t=>(0,I.jsx)(`span`,{className:P(`h-2 flex-1 rounded-full transition-colors`,t<=e?`bg-brand`:`bg-line`)},t))})}),(0,I.jsxs)(`div`,{className:`flex-1 max-w-lg w-full mx-auto px-5 py-8 flex flex-col`,children:[e===0&&(0,I.jsxs)(`div`,{className:`flex-1 flex flex-col items-center text-center anim-rise`,children:[(0,I.jsx)(Ro,{mood:`cheer`,size:150,className:`anim-bob`}),(0,I.jsxs)(`h1`,{className:`text-3xl font-black mt-5`,children:[(0,I.jsx)(H,{text:`¡Hola!`,plain:!0}),` I’m Sol.`]}),(0,I.jsx)(`p`,{className:`text-lg text-ink2 font-bold mt-2`,children:`I’ll take you from zero to B1 Spanish (Spain) in 6 months.`}),(0,I.jsx)(`ul`,{className:`text-left space-y-3 mt-8 w-full`,children:[{icon:(0,I.jsx)(Ma,{className:`w-5 h-5`}),t:`A 26-week plan`,d:`One short lesson a day: grammar, words, pronunciation and stories.`},{icon:(0,I.jsx)(Co,{className:`w-5 h-5`}),t:`Tap any word to hear it`,d:`Real Spanish pronunciation, plus slow mode and a microphone check.`},{icon:(0,I.jsx)(ma,{className:`w-5 h-5`}),t:`Streaks & smart review`,d:`Spaced repetition brings words back right before you forget them.`}].map(e=>(0,I.jsxs)(`li`,{className:`card p-4 flex gap-3`,children:[(0,I.jsx)(`span`,{className:`grid place-items-center w-10 h-10 rounded-xl bg-brand-soft text-brand-lip flex-none`,children:e.icon}),(0,I.jsxs)(`span`,{children:[(0,I.jsx)(`span`,{className:`block font-black`,children:e.t}),(0,I.jsx)(`span`,{className:`block text-sm text-ink2 font-bold`,children:e.d})]})]},e.t))}),(0,I.jsx)(`div`,{className:`mt-auto pt-8 w-full`,children:(0,I.jsx)(`button`,{type:`button`,className:`btn btn-primary w-full`,onClick:()=>t(1),children:`Let’s start`})})]}),e===1&&(0,I.jsxs)(`div`,{className:`flex-1 flex flex-col items-center text-center anim-rise`,children:[(0,I.jsx)(`h1`,{className:`text-2xl font-black`,children:`First, a sound check`}),(0,I.jsx)(`p`,{className:`text-ink2 font-bold mt-1`,children:`Camino uses your device’s Spanish voice. Turn your sound on.`}),(0,I.jsx)(`button`,{type:`button`,onClick:()=>{ll(`¡Hola! Bienvenido a Camino. Vamos a aprender español.`),s(!0)},className:`mt-10 grid place-items-center w-36 h-36 rounded-full bg-info text-white shadow-[0_8px_0_var(--info-lip)] active:translate-y-2 active:shadow-none transition`,"aria-label":`Play a Spanish sentence`,children:(0,I.jsx)(sa,{className:`w-16 h-16`})}),(0,I.jsx)(`div`,{className:`mt-6 text-lg font-black`,children:(0,I.jsx)(H,{text:`¡Hola! Bienvenido a Camino.`})}),(0,I.jsx)(`div`,{className:`text-ink2 font-bold`,children:`Hello! Welcome to Camino.`}),(0,I.jsxs)(`div`,{className:`mt-4 text-sm font-bold`,children:[p===`ok`&&f&&(0,I.jsxs)(`span`,{className:`chip bg-ok-soft text-ok-ink`,children:[(0,I.jsx)(Gi,{className:`w-4 h-4`}),` Voice: `,f.name,` (`,f.lang,`)`]}),p===`none`&&(0,I.jsx)(`span`,{className:`chip bg-bad-soft text-bad-ink`,children:`No Spanish voice found on this device`})]}),(c||p===`none`)&&(0,I.jsx)(`div`,{className:`mt-5 w-full text-left`,children:(0,I.jsx)($l,{})}),(0,I.jsxs)(`div`,{className:`mt-auto pt-8 w-full grid gap-3`,children:[(0,I.jsx)(`button`,{type:`button`,className:`btn btn-primary w-full`,disabled:!o&&p!==`none`,onClick:()=>t(2),children:o?`Sounds good`:p===`none`?`Continue for now`:`Tap the ear first`}),o&&!c&&(0,I.jsx)(`button`,{type:`button`,className:`btn btn-ghost`,onClick:()=>l(!0),children:`I heard nothing`})]})]}),e===2&&(0,I.jsxs)(`div`,{className:`flex-1 flex flex-col anim-rise`,children:[(0,I.jsx)(`h1`,{className:`text-2xl font-black text-center`,children:`Pick a daily goal`}),(0,I.jsx)(`p`,{className:`text-ink2 font-bold text-center mt-1`,children:`You can change this any time.`}),(0,I.jsx)(`div`,{className:`grid gap-3 mt-6`,children:eu.map(e=>(0,I.jsxs)(`button`,{type:`button`,className:`option`,"data-state":n===e.xp?`selected`:void 0,onClick:()=>r(e.xp),children:[(0,I.jsxs)(`span`,{className:`flex-1`,children:[(0,I.jsxs)(`span`,{className:`flex items-center gap-2`,children:[(0,I.jsx)(`span`,{className:`font-black`,children:e.label}),e.rec&&(0,I.jsx)(`span`,{className:`chip bg-brand text-brand-ink`,children:`Recommended`})]}),(0,I.jsx)(`span`,{className:`block text-sm font-bold opacity-80`,children:e.note})]}),(0,I.jsxs)(`span`,{className:`text-right`,children:[(0,I.jsxs)(`span`,{className:`block font-black`,children:[e.xp,` XP`]}),(0,I.jsx)(`span`,{className:`block text-xs font-bold opacity-70`,children:e.time})]})]},e.xp))}),(0,I.jsx)(`div`,{className:`mt-auto pt-8`,children:(0,I.jsxs)(`button`,{type:`button`,className:`btn btn-primary w-full`,onClick:()=>t(3),children:[`Continue `,(0,I.jsx)(Yi,{className:`w-5 h-5`})]})})]}),e===3&&(0,I.jsxs)(`div`,{className:`flex-1 flex flex-col anim-rise`,children:[(0,I.jsx)(`div`,{className:`flex items-center gap-3 justify-center`,children:(0,I.jsx)(Ro,{mood:`cool`,size:84})}),(0,I.jsx)(`h1`,{className:`text-2xl font-black text-center mt-3`,children:`Your 6-month plan`}),(0,I.jsxs)(`label`,{className:`block mt-6`,children:[(0,I.jsx)(`span`,{className:`text-sm font-black uppercase tracking-wide text-ink3`,children:`Start date`}),(0,I.jsx)(`input`,{type:`date`,className:`input mt-1`,value:i,onChange:e=>e.target.value&&a(e.target.value)})]}),(0,I.jsx)(`ol`,{className:`mt-6 space-y-3`,children:[{lvl:`A1`,when:Yo(i,62),t:`Beginner: introduce yourself, daily life, present tense`,c:`bg-a1`},{lvl:`A2`,when:Yo(i,118),t:`Elementary: past tenses, future, travel & health`,c:`bg-a2`},{lvl:`B1`,when:Yo(i,181),t:`Intermediate: subjunctive, opinions, stories, hypotheses`,c:`bg-b1`}].map(e=>(0,I.jsxs)(`li`,{className:`card p-4 flex items-center gap-3`,children:[(0,I.jsx)(`span`,{className:P(`grid place-items-center w-12 h-12 rounded-2xl text-white font-black flex-none`,e.c),children:e.lvl}),(0,I.jsxs)(`span`,{className:`flex-1 min-w-0`,children:[(0,I.jsxs)(`span`,{className:`block font-black`,children:[`by `,Qo(e.when,{day:`numeric`,month:`long`,year:`numeric`})]}),(0,I.jsx)(`span`,{className:`block text-sm text-ink2 font-bold`,children:e.t})]})]},e.lvl))}),(0,I.jsxs)(`div`,{className:`mt-auto pt-8 grid gap-3`,children:[(0,I.jsx)(`button`,{type:`button`,className:`btn btn-primary w-full`,onClick:()=>m(`/lesson/w01d1`),children:`Start lesson 1`}),(0,I.jsx)(`button`,{type:`button`,className:`btn btn-ghost`,onClick:()=>m(`/`),children:`Go to my dashboard`})]})]})]})]})}var nu=[{id:`a`,letters:`a`,ipa:`[a]`,like:`a in "father", but short`,examples:[`casa`,`mapa`,`hablar`,`patata`],de:`Like the a in "Mann".`,ar:`Like فَتحة (a) — keep it open even next to emphatic sounds.`},{id:`e`,letters:`e`,ipa:`[e]`,like:`e in "pet" — never "ay"`,examples:[`mesa`,`leche`,`verde`,`tres`],de:`Like the e in "Bett", never long like "See".`,ar:`Arabic has no separate e: don't turn {mesa} into "misa".`},{id:`i`,letters:`i, y`,ipa:`[i]`,like:`ee in "see", but short`,examples:[`sí`,`vino`,`libro`,`y`],de:`Like the i in "Kind".`,ar:`Like كسرة (i), short and bright.`},{id:`o`,letters:`o`,ipa:`[o]`,like:`o in "for" — no "u" glide at the end`,examples:[`no`,`foto`,`ocho`,`todo`],de:`Like the o in "Sonne", never long like "Boot".`,ar:`Arabic has no separate o: keep {oso} (bear) different from {uso} (use).`},{id:`u`,letters:`u`,ipa:`[u]`,like:`oo in "food"`,examples:[`uno`,`mucho`,`luna`,`azul`],de:`Like the u in "Mutter".`,ar:`Like ضمّة (u).`},{id:`bv`,letters:`b, v`,ipa:`[b] [β]`,like:`b; softer between vowels (lips almost touching)`,examples:[`bien`,`vino`,`Cuba`,`nueve`,`beber`],tip:`B and V are exactly the same sound.`,de:`Never "f" or "w": {vino} = "bino".`,ar:`Like ب. Keep **p** separate: {peso} (weight) ≠ {beso} (kiss).`},{id:`k`,letters:`c (a/o/u), qu, k`,ipa:`[k]`,like:`k, without a puff of air`,examples:[`casa`,`cuatro`,`queso`,`kilo`,`aquí`],tip:`In qu the u is silent: {queso} = "keso".`,de:`Unaspirated, softer than German k: {casa}.`,ar:`Like ك.`},{id:`th`,letters:`z, c (e/i)`,ipa:`[θ]`,like:`th in "think" (Spain)`,examples:[`cero`,`cinco`,`zapato`,`gracias`,`hacer`],tip:`In Latin America this is pronounced like s.`,de:`Never "ts" as in "Zeit": tongue between the teeth.`,ar:`Exactly Arabic ث: {cero} ≈ ثيرو.`},{id:`d`,letters:`d`,ipa:`[d] [ð]`,like:`d with the tongue on the teeth; soft "th" (this) between vowels`,examples:[`dos`,`nada`,`cansado`,`Madrid`,`verdad`],tip:`At the end of a word it is very soft or almost silent: {Madrid}.`,de:`Between vowels much softer than German d.`,ar:`Between vowels it sounds like ذ: {nada} ≈ ناذا.`},{id:`g`,letters:`g (a/o/u), gu (e/i)`,ipa:`[g] [ɣ]`,like:`g in "go"; softer between vowels`,examples:[`gato`,`amigo`,`guitarra`,`guerra`,`lago`],tip:`In gue / gui the u is silent; with ü it is heard: {pingüino}.`,de:`Like German g, softer between vowels.`,ar:`Like Egyptian ج (g). Between vowels it gets close to a soft غ.`},{id:`j`,letters:`j, g (e/i)`,ipa:`[x]`,like:`throaty h, like Scottish "loch"`,examples:[`jamón`,`gente`,`rojo`,`mujer`,`Juan`],de:`Exactly German ch in "Bach" or "lachen".`,ar:`Exactly Arabic خ: {Juan} ≈ خوان.`},{id:`h`,letters:`h`,ipa:`—`,like:`always silent`,examples:[`hola`,`hasta`,`ahora`,`hotel`,`hijo`],de:`Never pronounced, unlike "Haus".`,ar:`Silent — not like هـ or ح.`},{id:`ll`,letters:`ll, y`,ipa:`[ʝ]`,like:`y in "yes"`,examples:[`llamo`,`calle`,`yo`,`playa`,`llave`],de:`Like German j in "ja".`,ar:`Like ي: {yo} ≈ يو.`},{id:`ny`,letters:`ñ`,ipa:`[ɲ]`,like:`ny in "canyon"`,examples:[`España`,`mañana`,`niño`,`año`,`pequeño`],tip:`Never drop the tilde: {año} (year) is a very different word from "ano".`,de:`Like "nj" in "Champagner".`,ar:`Like نْيـ in one sound.`},{id:`ch`,letters:`ch`,ipa:`[tʃ]`,like:`ch in "church"`,examples:[`noche`,`mucho`,`chocolate`,`leche`],de:`Like "tsch" in "Deutsch".`,ar:`Like تش.`},{id:`r`,letters:`r (between vowels, end)`,ipa:`[ɾ]`,like:`one quick tap, like American "better"`,examples:[`pero`,`caro`,`hablar`,`para`,`tres`],de:`Tip of the tongue, never the throat-r of "rot".`,ar:`Exactly Arabic ر.`},{id:`rr`,letters:`rr, r- (start), r after n/l/s`,ipa:`[r]`,like:`a rolled trill`,examples:[`perro`,`rojo`,`Roma`,`Enrique`,`arroz`],tip:`Practise with "tr" and "dr": {tres}, {drama}, then roll longer.`,de:`Like a strongly rolled Bavarian r.`,ar:`A long, rolled ر (رّ).`},{id:`s`,letters:`s`,ipa:`[s]`,like:`always a hissing s, never "z"`,examples:[`seis`,`casa`,`mesa`,`eso`],de:`Always voiceless like ß: {casa}, never like "Sonne".`,ar:`Like س.`},{id:`x`,letters:`x`,ipa:`[ks]`,like:`"ks" — but in México and Texas it's a j sound`,examples:[`taxi`,`examen`,`éxito`,`México`],de:`Like German x.`,ar:`Like كس.`},{id:`diph`,letters:`ai, ei, au, ia, ie, ue, ui…`,ipa:`diphthongs`,like:`two vowels glide together in one syllable`,examples:[`seis`,`aire`,`bueno`,`ciudad`,`Europa`,`tiene`],tip:`An accent breaks the diphthong: {día} = dí·a.`,de:`{ei} = "ey" (never "ai" as in "ein"), {ie} = "ye" (never long i as in "Liebe"), {eu} = e+u (never "oi" as in "Euro").`,ar:`Like ياء / واو gliding: {bueno} ≈ بوينو.`}],ru=[{id:`r`,title:`r vs rr`,focus:`tap vs rolled trill`,pairs:[[`pero`,`but`,`perro`,`dog`],[`caro`,`expensive`,`carro`,`cart`],[`para`,`for`,`parra`,`grapevine`],[`coro`,`choir`,`corro`,`I run`],[`cero`,`zero`,`cerro`,`hill`]]},{id:`th`,title:`s vs z / c`,focus:`s vs th (Spain)`,pairs:[[`casa`,`house`,`caza`,`hunting`],[`sien`,`temple (head)`,`cien`,`a hundred`],[`coser`,`to sew`,`cocer`,`to boil`],[`masa`,`dough`,`maza`,`club, mace`],[`poso`,`sediment`,`pozo`,`well`],[`seta`,`mushroom`,`zeta`,`letter Z`]]},{id:`ei`,title:`e vs i`,focus:`two different vowels`,pairs:[[`mesa`,`table`,`misa`,`mass (church)`],[`peso`,`weight`,`piso`,`flat, floor`],[`pela`,`peels`,`pila`,`battery`],[`lema`,`motto`,`lima`,`lime`],[`pecar`,`to sin`,`picar`,`to sting, to snack`]]},{id:`ou`,title:`o vs u`,focus:`two different vowels`,pairs:[[`oso`,`bear`,`uso`,`use`],[`lona`,`canvas`,`luna`,`moon`],[`poro`,`pore`,`puro`,`pure`],[`rosa`,`rose`,`rusa`,`Russian (f.)`]]},{id:`pb`,title:`p vs b`,focus:`voiceless vs voiced`,pairs:[[`peso`,`weight`,`beso`,`kiss`],[`pata`,`paw, leg`,`bata`,`dressing gown`],[`pala`,`shovel`,`bala`,`bullet`],[`pino`,`pine`,`vino`,`wine`],[`pan`,`bread`,`van`,`they go`]]},{id:`n`,title:`n vs ñ`,focus:`n vs ny`,pairs:[[`pena`,`sorrow`,`peña`,`rock; group of friends`],[`cana`,`grey hair`,`caña`,`small beer; cane`],[`mono`,`monkey; cute`,`moño`,`hair bun`],[`una`,`one (f.)`,`uña`,`nail`]]},{id:`stress`,title:`Stress & accents`,focus:`same letters, different stress`,pairs:[[`hablo`,`I speak`,`habló`,`he / she spoke`],[`esta`,`this (f.)`,`está`,`is (estar)`],[`papa`,`the Pope`,`papá`,`dad`],[`sabana`,`savannah`,`sábana`,`bed sheet`],[`practico`,`I practise`,`practicó`,`he / she practised`]]},{id:`l`,title:`l vs ll`,focus:`l vs y-sound`,pairs:[[`polo`,`pole`,`pollo`,`chicken`],[`tala`,`felling (trees)`,`talla`,`size (clothes)`],[`ala`,`wing`,`halla`,`finds`]]}],iu=[{es:`Tres tristes tigres tragaban trigo en un trigal.`,en:`Three sad tigers were swallowing wheat in a wheat field.`,focus:`tr`},{es:`Erre con erre cigarro, erre con erre barril, rápido corren los carros cargados de azúcar del ferrocarril.`,en:`R with R cigar, R with R barrel, fast run the cars loaded with sugar on the railway.`,focus:`rr`},{es:`El perro de San Roque no tiene rabo, porque Ramón Rodríguez se lo ha cortado.`,en:`San Roque's dog has no tail, because Ramón Rodríguez has cut it off.`,focus:`r / rr`},{es:`Pablito clavó un clavito. ¿Qué clavito clavó Pablito?`,en:`Little Pablo nailed a little nail. Which little nail did little Pablo nail?`,focus:`cl, stress`},{es:`Como poco coco como, poco coco compro.`,en:`As I eat little coconut, I buy little coconut.`,focus:`c / k, o`},{es:`Cuando cuentes cuentos, cuenta cuántos cuentos cuentas.`,en:`When you tell stories, count how many stories you tell.`,focus:`cu, ue`},{es:`Si Sansón no sazona su salsa con sal, le sale sosa.`,en:`If Samson doesn't season his sauce with salt, it turns out bland.`,focus:`s vs z`},{es:`Ñoño Yáñez come ñame en las mañanas con el niño.`,en:`Ñoño Yáñez eats yam in the mornings with the boy.`,focus:`ñ`},{es:`El cielo está enladrillado, ¿quién lo desenladrillará? El desenladrillador que lo desenladrille, buen desenladrillador será.`,en:`The sky is bricked up; who will un-brick it? The un-bricker who un-bricks it will be a good un-bricker.`,focus:`ll, dr`},{es:`Juan juega en el jardín con Julia, Jorge y Jaime.`,en:`Juan plays in the garden with Julia, Jorge and Jaime.`,focus:`j`}],au=`casa.hablar.teléfono.ciudad.español.lunes.árbol.examen.música.trabajo.joven.difícil.café.amigo.sábado.universidad.canción.mañana.hospital.lápiz.ordenador.pájaro.estudiante.Madrid.feliz.azúcar.problema.película.importante.reloj.jamón.zapato.semana.cumpleaños.fácil.verdad.médico.hablaron.comeremos.nación`.split(`.`);function U({value:e,color:t,className:n,height:r}){let i=Ao(e,0,1)*100;return(0,I.jsx)(`div`,{className:P(`progress-track`,n),style:r?{height:r}:void 0,role:`progressbar`,"aria-valuenow":Math.round(i),"aria-valuemin":0,"aria-valuemax":100,children:(0,I.jsx)(`div`,{className:`progress-fill`,style:{width:`${Math.max(i,i>0?4:0)}%`,background:t}})})}function W({value:e,size:t=56,stroke:n=7,color:r=`var(--brand)`,track:i=`var(--line)`,children:a,className:o}){let s=(t-n)/2,c=2*Math.PI*s,l=Ao(e,0,1);return(0,I.jsxs)(`div`,{className:P(`relative grid place-items-center flex-none`,o),style:{width:t,height:t},children:[(0,I.jsxs)(`svg`,{width:t,height:t,className:`-rotate-90 absolute inset-0`,children:[(0,I.jsx)(`circle`,{cx:t/2,cy:t/2,r:s,fill:`none`,stroke:i,strokeWidth:n}),(0,I.jsx)(`circle`,{cx:t/2,cy:t/2,r:s,fill:`none`,stroke:r,strokeWidth:n,strokeLinecap:`round`,strokeDasharray:c,strokeDashoffset:c*(1-l),style:{transition:`stroke-dashoffset 600ms cubic-bezier(.2,.8,.2,1)`}})]}),(0,I.jsx)(`div`,{className:`relative`,children:a})]})}function ou({title:e,sub:t,back:n,right:r}){let i=Jn();return(0,I.jsxs)(`header`,{className:`flex items-start gap-3 mb-5`,children:[n&&(0,I.jsx)(`button`,{type:`button`,onClick:()=>i(n===!0?-1:n),className:`btn btn-secondary btn-icon mt-0.5`,"aria-label":`Back`,children:(0,I.jsx)(Li,{className:`w-5 h-5`})}),(0,I.jsxs)(`div`,{className:`min-w-0 flex-1`,children:[(0,I.jsx)(`h1`,{className:`text-[1.65rem] sm:text-3xl font-black tracking-tight leading-tight`,children:e}),t&&(0,I.jsx)(`div`,{className:`text-ink2 font-bold mt-0.5`,children:t})]}),r]})}var su={A1:`bg-a1-soft text-a1`,A2:`bg-a2-soft text-a2`,B1:`bg-b1-soft text-b1`},cu={A1:`var(--a1)`,A2:`var(--a2)`,B1:`var(--b1)`};function lu({level:e,className:t}){return(0,I.jsx)(`span`,{className:P(`chip`,su[e],t),children:e})}function uu({xp:e,frozen:t=[]}){let n=qo(),r=Yo(n,-Zo(n));return(0,I.jsx)(`div`,{className:`grid grid-cols-7 gap-1.5`,children:$o.map((i,a)=>{let o=Yo(r,a),s=(e[o]??0)>0,c=t.includes(o),l=o===n,u=o>n;return(0,I.jsxs)(`div`,{className:`flex flex-col items-center gap-1`,children:[(0,I.jsx)(`span`,{className:P(`text-xs font-black`,l?`text-ink`:`text-ink3`),children:i}),(0,I.jsx)(`span`,{className:P(`grid place-items-center w-9 h-9 rounded-full border-2`,s?`bg-fire border-fire text-white`:c?`bg-info-soft border-info text-info`:`border-line bg-card text-ink3`,l&&!s&&`border-fire border-dashed`,u&&`opacity-50`),title:o,children:s?(0,I.jsx)(ma,{className:`w-5 h-5 fill-white/40`}):c?(0,I.jsx)(eo,{className:`w-4 h-4`}):(0,I.jsx)(`span`,{className:`text-xs font-black`,children:Jo(o).getDate()})})]},o)})})}function du({xp:e,goal:t,weeks:n=26}){let r=qo(),i=Yo(Yo(r,-Zo(r)),-7*(n-1)),a=Array.from({length:n},(e,t)=>Array.from({length:7},(e,n)=>Yo(i,t*7+n))),o=e=>e<=0?`var(--line)`:e<t*.5?`color-mix(in srgb, var(--brand) 35%, var(--card))`:e<t?`color-mix(in srgb, var(--brand) 70%, var(--card))`:`var(--fire)`;return(0,I.jsxs)(`div`,{className:`overflow-x-auto no-scrollbar`,children:[(0,I.jsx)(`div`,{className:`inline-flex gap-[3px]`,children:a.map((t,n)=>(0,I.jsx)(`div`,{className:`flex flex-col gap-[3px]`,children:t.map(t=>(0,I.jsx)(`span`,{title:`${t}: ${e[t]??0} XP`,className:`block w-3 h-3 rounded-[3px]`,style:{background:t>r?`transparent`:o(e[t]??0)}},t))},n))}),(0,I.jsxs)(`div`,{className:`flex items-center gap-1.5 mt-2 text-xs font-bold text-ink3`,children:[`less`,[0,t*.3,t*.7,t].map((e,t)=>(0,I.jsx)(`span`,{className:`w-3 h-3 rounded-[3px]`,style:{background:o(e)}},t)),`more`]})]})}var fu=[`á`,`é`,`í`,`ó`,`ú`,`ñ`,`ü`,`¿`,`¡`];function pu({inputRef:e,value:t,onChange:n}){let r=r=>{let i=e.current,a=i?.selectionStart??t.length,o=i?.selectionEnd??t.length;n(t.slice(0,a)+r+t.slice(o)),requestAnimationFrame(()=>{i?.focus(),i?.setSelectionRange(a+r.length,a+r.length)})};return(0,I.jsx)(`div`,{className:`flex flex-wrap gap-1.5`,"aria-label":`Spanish characters`,children:fu.map(e=>(0,I.jsx)(`button`,{type:`button`,className:`kbd-key`,onMouseDown:e=>e.preventDefault(),onClick:()=>r(e),children:e},e))})}function mu({icon:e,value:t,label:n,tone:r=`brand`}){return(0,I.jsxs)(`div`,{className:`card p-3.5 flex items-center gap-3`,children:[(0,I.jsx)(`span`,{className:P(`grid place-items-center w-11 h-11 rounded-2xl flex-none`,{brand:`bg-brand-soft text-brand-lip`,fire:`bg-fire-soft text-fire`,ok:`bg-ok-soft text-ok`,info:`bg-info-soft text-info`,vio:`bg-vio-soft text-vio`}[r]),children:e}),(0,I.jsxs)(`div`,{className:`min-w-0`,children:[(0,I.jsx)(`div`,{className:`text-xl font-black leading-tight`,children:t}),(0,I.jsx)(`div`,{className:`text-xs font-bold text-ink3 uppercase tracking-wide`,children:n})]})]})}function hu({title:e,children:t,art:n}){return(0,I.jsxs)(`div`,{className:`flex flex-col items-center text-center gap-3 py-10 px-4`,children:[n,(0,I.jsx)(`h2`,{className:`text-xl font-black`,children:e}),t&&(0,I.jsx)(`div`,{className:`text-ink2 font-bold max-w-sm`,children:t})]})}var gu={pron:{label:`Pronunciation`,icon:zi,color:`var(--info)`,soft:`var(--info-soft)`,minutes:15},grammar:{label:`Grammar`,icon:Ha,color:`var(--vio)`,soft:`var(--vio-soft)`,minutes:20},vocab:{label:`Vocabulary`,icon:wa,color:`var(--ok)`,soft:`var(--ok-soft)`,minutes:15},talk:{label:`Conversation`,icon:Pa,color:`var(--fire)`,soft:`var(--fire-soft)`,minutes:15},culture:{label:`Culture`,icon:ga,color:`var(--bad)`,soft:`var(--bad-soft)`,minutes:15}},_u={review:{label:`Weekly review`,icon:io,color:`var(--brand-lip)`,soft:`var(--brand-soft)`,minutes:25},checkpoint:{label:`Level checkpoint`,icon:ta,color:`var(--brand-lip)`,soft:`var(--brand-soft)`,minutes:35}};function vu({kind:e,className:t}){let n=gu[e],r=n.icon;return(0,I.jsxs)(`span`,{className:`chip ${t??``}`,style:{background:n.soft,color:n.color},children:[(0,I.jsx)(r,{className:`w-3.5 h-3.5`,strokeWidth:2.6}),n.label]})}function yu(e){let t=e.split(`
`),n=[],r=[],i=()=>{r.length&&n.push({t:`p`,text:r.join(` `)}),r=[]};for(let e=0;e<t.length;e++){let a=t[e].trim();if(!a){i();continue}if(a.startsWith(`### `)){i(),n.push({t:`h4`,text:a.slice(4)});continue}if(a.startsWith(`## `)){i(),n.push({t:`h3`,text:a.slice(3)});continue}let o=/^!(de|ar|tip|warn|es):\s*(.*)$/.exec(a);if(o){i(),n.push({t:`call`,kind:o[1],text:o[2]});continue}if(a.startsWith(`> `)){i();let e=a.slice(2),t=e.indexOf(` = `),r=t<0?{es:e,en:``}:{es:e.slice(0,t).trim(),en:e.slice(t+3).trim()},o=n[n.length-1];o?.t===`ex`?o.items.push(r):n.push({t:`ex`,items:[r]});continue}if(a.startsWith(`|`)){i();let r=[],a=e;for(;a<t.length&&t[a].trim().startsWith(`|`);){let e=t[a].trim().replace(/^\|/,``).replace(/\|$/,``).split(`|`).map(e=>e.trim());e.every(e=>/^:?-{2,}:?$/.test(e))||r.push(e),a++}e=a-1,n.push({t:`table`,head:r[0]??[],rows:r.slice(1)});continue}if(a.startsWith(`- `)){i();let e=n[n.length-1];e?.t===`ul`?e.items.push(a.slice(2)):n.push({t:`ul`,items:[a.slice(2)]});continue}if(/^\d+\.\s/.test(a)){i();let e=a.replace(/^\d+\.\s/,``),t=n[n.length-1];t?.t===`ol`?t.items.push(e):n.push({t:`ol`,items:[e]});continue}r.push(a)}return i(),n}var bu=/([؀-ۿ][؀-ۿً-ٰٟ ،]*[؀-ۿً-ٟ]|[؀-ۿ])/g;function xu(e,t){return e.split(bu).map((e,n)=>n%2==1?(0,I.jsx)(`span`,{lang:`ar`,dir:`rtl`,className:`text-[1.08em]`,children:e},`${t}-a${n}`):(0,I.jsx)(v.Fragment,{children:e},`${t}-t${n}`))}function G(e,t=`i`){return e.split(/(\*\*[^*]+\*\*|\{[^}]+\}|`[^`]+`|\*[^*\s][^*]*\*)/g).map((e,n)=>{let r=`${t}-${n}`;return e?e.startsWith(`**`)&&e.endsWith(`**`)&&e.length>4?(0,I.jsx)(`strong`,{children:G(e.slice(2,-2),r)},r):e.startsWith(`{`)&&e.endsWith(`}`)?(0,I.jsx)(H,{text:e.slice(1,-1),className:`font-extrabold`},r):e.startsWith("`")&&e.endsWith("`")?(0,I.jsx)(`code`,{children:e.slice(1,-1)},r):e.startsWith(`*`)&&e.endsWith(`*`)&&e.length>2?(0,I.jsx)(`em`,{children:G(e.slice(1,-1),r)},r):(0,I.jsx)(v.Fragment,{children:xu(e,r)},r):null})}var Su={de:{box:`border-line bg-bg2`,badge:`bg-ink text-brand`,label:`For German speakers`,icon:`DE`},ar:{box:`border-a1/30 bg-a1-soft`,badge:`bg-a1 text-white`,label:`For Arabic speakers`,icon:(0,I.jsx)(`span`,{lang:`ar`,children:`ع`})},tip:{box:`border-brand/40 bg-brand-soft`,badge:`bg-brand text-brand-ink`,label:`Tip`,icon:(0,I.jsx)(Ea,{className:`w-4 h-4`})},warn:{box:`border-bad/30 bg-bad-soft`,badge:`bg-bad text-white`,label:`Careful`,icon:(0,I.jsx)(po,{className:`w-4 h-4`})},es:{box:`border-info/30 bg-info-soft`,badge:`bg-info text-white`,label:`Spain & culture`,icon:`ES`}};function Cu({kind:e,children:t}){let n=Su[e];return(0,I.jsxs)(`div`,{className:P(`callout`,n.box),children:[(0,I.jsx)(`span`,{className:P(`callout-badge`,n.badge),children:n.icon}),(0,I.jsxs)(`div`,{className:`min-w-0`,children:[(0,I.jsx)(`div`,{className:`text-[0.72rem] font-black uppercase tracking-wider text-ink2`,children:n.label}),(0,I.jsx)(`div`,{children:t})]})]})}function wu({es:e,en:t}){return(0,I.jsxs)(`div`,{className:`example`,children:[(0,I.jsx)(V,{text:e,size:`sm`,className:`mt-0.5`}),(0,I.jsxs)(`div`,{className:`min-w-0`,children:[(0,I.jsx)(`div`,{className:`font-extrabold text-[1.05rem] leading-snug`,children:(0,I.jsx)(H,{text:e})}),t&&(0,I.jsx)(`div`,{className:`text-ink2 text-[0.92rem] leading-snug`,children:G(t)})]})]})}function Tu({text:e,className:t}){let n=(0,v.useMemo)(()=>yu(e),[e]),r=B(e=>e.settings.tipsDe),i=B(e=>e.settings.tipsAr);return(0,I.jsx)(`div`,{className:P(`rich`,t),children:n.map((e,t)=>{let n=`b${t}`;switch(e.t){case`h3`:return(0,I.jsx)(`h3`,{children:G(e.text,n)},n);case`h4`:return(0,I.jsx)(`h4`,{children:G(e.text,n)},n);case`p`:return(0,I.jsx)(`p`,{children:G(e.text,n)},n);case`ul`:return(0,I.jsx)(`ul`,{children:e.items.map((e,t)=>(0,I.jsx)(`li`,{children:G(e,`${n}-${t}`)},t))},n);case`ol`:return(0,I.jsx)(`ol`,{children:e.items.map((e,t)=>(0,I.jsx)(`li`,{children:G(e,`${n}-${t}`)},t))},n);case`table`:{let t=e.head.some(e=>e);return(0,I.jsx)(`div`,{className:`tbl-wrap`,children:(0,I.jsxs)(`table`,{children:[t&&(0,I.jsx)(`thead`,{children:(0,I.jsx)(`tr`,{children:e.head.map((e,t)=>(0,I.jsx)(`th`,{children:G(e,`${n}-h${t}`)},t))})}),(0,I.jsx)(`tbody`,{children:e.rows.map((e,t)=>(0,I.jsx)(`tr`,{children:e.map((e,r)=>(0,I.jsx)(`td`,{children:G(e,`${n}-${t}-${r}`)},r))},t))})]})},n)}case`ex`:return(0,I.jsx)(`div`,{className:`space-y-2`,children:e.items.map((e,t)=>(0,I.jsx)(wu,{es:e.es,en:e.en},t))},n);case`call`:return e.kind===`de`&&!r||e.kind===`ar`&&!i?null:(0,I.jsx)(Cu,{kind:e.kind,children:G(e.text,n)},n)}})})}var Eu=[`Spanish has about 500 million native speakers — the second most spoken native language in the world.`,`Around 4,000 Spanish words come from Arabic, like {ojalá}, {aceite}, {azúcar} and {almohada}.`,`In Spain, lunch is around 2–3 pm and dinner around 9–10 pm.`,`Spanish has two verbs for "to be": {ser} and {estar}. You’ll master both!`,`The letter {ñ} is a symbol of the language: {España}, {mañana}, {año}.`,`Spanish calendars write X for {miércoles} so it isn’t confused with M for {martes}.`,`{¡Vale!} means "OK" — you’ll hear it a hundred times a day in Spain.`,`{guerra} (war) and {blanco} (white) come from the Germanic language of the Visigoths.`,`Spaniards say {¡Hasta luego!} even when they won’t see you again.`,`In Spain people have two surnames: the father’s first surname and the mother’s first surname.`,`Spanish is the official language of 20 countries, plus Puerto Rico.`,`The word {guitarra} comes from Arabic قيثارة (qīthāra), itself from Greek.`,`Spain uses {tú} much more than German uses "du" — even with colleagues and shop staff.`,`The Real Academia Española has published the official Spanish dictionary since 1780.`];function Du(e){let t=0;for(let n of e)t=t*31+n.charCodeAt(0)>>>0;return t}function Ou(e){return e.kind===`lesson`?`/lesson/${e.id}`:`/week/${e.week}`}function ku(){let e=B(e=>e.progress),t=B(e=>e.startDate),n=B(e=>e.xp),r=B(e=>e.streak),i=B(e=>e.cards),a=B(e=>e.stories),o=B(e=>e.settings.dailyGoal),s=qo(),c=Ic(e,t,s),l=Fc(r,s),u=n[s]??0,d=Lc(i).length,f=ns(),p=c.next,m=Sc.get(p?.week??26),h=Ec.filter(t=>e[t.id]?.at===s),g=m?xc.get(m.story.id):void 0,_=nu[((p?.week??1)-1+(p?.day??1))%nu.length],v=vc.filter(t=>e[t.id]?.done).flatMap(e=>e.words),y=v.length?v:m?.lessons[0]?.words??[],b=y.length?y[Du(s)%y.length]:null,x=Eu[Du(s+`f`)%Eu.length],S=c.delta>0?{t:`${c.delta} day${c.delta>1?`s`:``} ahead`,c:`text-ok`}:c.delta<0?{t:`${-c.delta} day${c.delta<-1?`s`:``} behind`,c:`text-fire`}:{t:`On track`,c:`text-ok`};return(0,I.jsxs)(`div`,{className:`space-y-5`,children:[(0,I.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,I.jsx)(Ro,{mood:l.doneToday?`cool`:l.atRisk&&l.count>0?`wow`:`happy`,size:58}),(0,I.jsxs)(`div`,{className:`min-w-0 flex-1`,children:[(0,I.jsx)(`div`,{className:`text-2xl font-black leading-tight`,children:(0,I.jsx)(H,{text:f.es,plain:!0})}),(0,I.jsx)(`div`,{className:`text-sm font-bold text-ink3 truncate`,children:rs()})]}),(0,I.jsxs)(di,{to:`/me`,className:P(`chip text-base px-3 py-1.5`,l.count?`bg-fire-soft text-fire`:`bg-bg2 text-ink3`),"aria-label":`${l.count} day streak`,children:[(0,I.jsx)(ma,{className:P(`w-5 h-5`,l.count&&`fill-fire/40 anim-flicker`)}),` `,l.count]}),(0,I.jsx)(W,{value:u/o,size:52,stroke:6,children:(0,I.jsx)(Do,{className:`w-5 h-5 text-brand-lip fill-brand`})})]}),!l.doneToday&&l.count>0&&(0,I.jsxs)(`div`,{className:`card p-3.5 flex items-center gap-3 border-fire/40 bg-fire-soft`,children:[l.freezeNeeded?(0,I.jsx)(eo,{className:`w-6 h-6 text-info`}):(0,I.jsx)(ma,{className:`w-6 h-6 text-fire`}),(0,I.jsx)(`div`,{className:`text-sm font-bold`,children:l.freezeNeeded?(0,I.jsxs)(I.Fragment,{children:[`A streak freeze will save your `,l.count,`-day streak — practise today to keep it!`]}):(0,I.jsxs)(I.Fragment,{children:[`Practise today to keep your `,l.count,`-day streak alive.`]})})]}),p?(0,I.jsxs)(`section`,{className:`card overflow-hidden`,children:[(0,I.jsxs)(`div`,{className:`p-4 pb-3 flex items-center gap-2 flex-wrap`,children:[(0,I.jsx)(lu,{level:p.level}),(0,I.jsxs)(`span`,{className:`text-sm font-black text-ink2`,children:[`Week `,p.week,` · Day `,p.index+1,` of `,c.total]}),(0,I.jsx)(`span`,{className:P(`ml-auto text-sm font-black`,S.c),children:S.t})]}),(0,I.jsx)(`div`,{className:`px-4`,children:(0,I.jsx)(U,{value:c.done/c.total,color:cu[p.level],height:`0.75rem`})}),(0,I.jsxs)(`div`,{className:`p-4 pt-5`,children:[m&&(0,I.jsxs)(`div`,{className:`text-sm font-bold text-ink3 mb-1`,children:[(0,I.jsx)(H,{text:m.es,plain:!0}),` · `,m.title]}),(0,I.jsx)(Au,{d:p}),(0,I.jsxs)(di,{to:Ou(p),className:`btn btn-primary w-full mt-4 text-base`,children:[h.length?`Keep going`:`Start`,` `,(0,I.jsx)(Yi,{className:`w-5 h-5`})]}),h.length>0&&(0,I.jsxs)(`div`,{className:`mt-3 flex items-center gap-2 text-sm font-bold text-ok`,children:[(0,I.jsx)(Gi,{className:`w-4 h-4`}),` Done today: `,h.map(e=>e.title).join(`, `)]})]})]}):(0,I.jsxs)(`section`,{className:`card p-6 text-center`,children:[(0,I.jsx)(Ro,{mood:`cool`,size:100,className:`mx-auto`}),(0,I.jsx)(`h2`,{className:`text-2xl font-black mt-3`,children:`¡Enhorabuena! Plan complete 🎉`}),(0,I.jsx)(`p`,{className:`text-ink2 font-bold`,children:`You finished all 26 weeks. Keep your Spanish alive with reviews, stories and the verb trainer.`})]}),(0,I.jsxs)(`section`,{className:`card p-4 space-y-4`,children:[(0,I.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,I.jsx)(`h2`,{className:`font-black text-lg`,children:`Daily goal`}),(0,I.jsxs)(`span`,{className:`font-black text-ink2`,children:[u,` / `,o,` XP`]})]}),(0,I.jsx)(U,{value:u/o,color:`var(--brand)`}),(0,I.jsx)(uu,{xp:n,frozen:r.frozen})]}),(0,I.jsxs)(`section`,{className:`grid sm:grid-cols-2 gap-3`,children:[(0,I.jsxs)(di,{to:`/review`,className:`card card-press p-4 flex items-center gap-3`,children:[(0,I.jsx)(`span`,{className:`grid place-items-center w-12 h-12 rounded-2xl bg-vio-soft text-vio flex-none`,children:(0,I.jsx)(Wa,{className:`w-6 h-6`})}),(0,I.jsxs)(`span`,{className:`min-w-0 flex-1`,children:[(0,I.jsx)(`span`,{className:`block font-black`,children:`Review words`}),(0,I.jsx)(`span`,{className:`block text-sm font-bold text-ink2`,children:d?`${d} due now`:Object.keys(i).length?`All caught up ✓`:`Unlocks after your first lesson`})]}),d>0&&(0,I.jsx)(`span`,{className:`chip bg-vio text-white`,children:d})]}),(0,I.jsxs)(di,{to:`/pronunciation`,className:`card card-press p-4 flex items-center gap-3`,children:[(0,I.jsx)(`span`,{className:`grid place-items-center w-12 h-12 rounded-2xl bg-info-soft text-info flex-none`,children:(0,I.jsx)(Ia,{className:`w-6 h-6`})}),(0,I.jsxs)(`span`,{className:`min-w-0 flex-1`,children:[(0,I.jsx)(`span`,{className:`block font-black`,children:`Sound of the day`}),(0,I.jsxs)(`span`,{className:`block text-sm font-bold text-ink2 truncate`,children:[(0,I.jsx)(`span`,{lang:`es`,children:_.letters}),` — `,_.like]})]})]}),g&&(0,I.jsxs)(di,{to:`/story/${g.id}`,className:`card card-press p-4 flex items-center gap-3 sm:col-span-2`,children:[(0,I.jsx)(`span`,{className:`grid place-items-center w-12 h-12 rounded-2xl bg-fire-soft text-fire flex-none`,children:(0,I.jsx)(Vi,{className:`w-6 h-6`})}),(0,I.jsxs)(`span`,{className:`min-w-0 flex-1`,children:[(0,I.jsx)(`span`,{className:`block font-black`,children:`Story of the week`}),(0,I.jsxs)(`span`,{className:`block text-sm font-bold text-ink2 truncate`,children:[(0,I.jsx)(`span`,{lang:`es`,children:g.title}),` `,a[g.id]?`· read ✓`:``]})]}),(0,I.jsx)(Yi,{className:`w-5 h-5 text-ink3`})]})]}),b&&(0,I.jsxs)(`section`,{className:`card p-4`,children:[(0,I.jsx)(`div`,{className:`text-xs font-black uppercase tracking-wider text-ink3 mb-2`,children:`Palabra del día · word of the day`}),(0,I.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,I.jsx)(V,{text:b.es.replace(/…/g,``),size:`lg`,variant:`brand`}),(0,I.jsxs)(`div`,{className:`min-w-0`,children:[(0,I.jsx)(`div`,{className:`text-2xl font-black`,children:(0,I.jsx)(H,{text:b.es})}),(0,I.jsx)(`div`,{className:`font-bold text-ink2`,children:b.en})]})]})]}),(0,I.jsxs)(`section`,{className:`rounded-3xl bg-brand-soft border-2 border-brand/40 p-4 flex gap-3`,children:[(0,I.jsx)(Ro,{mood:`think`,size:48,still:!0}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`div`,{className:`font-black`,children:`¿Sabías que…?`}),(0,I.jsx)(`div`,{className:`text-sm font-bold text-ink2`,children:G(x)})]})]}),t&&(0,I.jsxs)(`p`,{className:`text-center text-xs font-bold text-ink3`,children:[`Plan: `,Qo(t,{day:`numeric`,month:`short`,year:`numeric`}),` → `,Qo(Yo(t,181),{day:`numeric`,month:`short`,year:`numeric`})]})]})}function Au({d:e}){let t=e.kind===`lesson`&&e.lesson?gu[e.lesson.kind]:_u[e.kind===`lesson`?`review`:e.kind],n=t.icon;return(0,I.jsxs)(`div`,{className:`flex items-start gap-3`,children:[(0,I.jsx)(`span`,{className:`grid place-items-center w-14 h-14 rounded-2xl flex-none`,style:{background:t.soft,color:t.color},children:(0,I.jsx)(n,{className:`w-7 h-7`,strokeWidth:2.4})}),(0,I.jsxs)(`div`,{className:`min-w-0`,children:[(0,I.jsxs)(`div`,{className:`text-xs font-black uppercase tracking-wider`,style:{color:t.color},children:[t.label,` · ~`,t.minutes,` min`]}),(0,I.jsx)(`div`,{className:`text-xl font-black leading-snug`,children:e.title}),e.lesson&&(0,I.jsx)(`div`,{className:`text-sm font-bold text-ink2`,children:e.lesson.goal}),!e.lesson&&(0,I.jsxs)(`div`,{className:`text-sm font-bold text-ink2`,children:[`Story, quiz and a can-do checklist for week `,e.week,`.`]})]})]})}var ju=[0,46,70,46,0,-46,-70];function Mu(){let e=B(e=>e.progress),t=B(e=>e.startDate),n=Ic(e,t),r=n.next?.level??`B1`,[i,a]=(0,v.useState)(r),[o,s]=(0,v.useState)(null),c=_c.filter(e=>e.level===i),l=t=>{let n=Ec.filter(e=>e.level===t);return n.filter(t=>e[t.id]?.done).length/Math.max(1,n.length)};return(0,I.jsxs)(`div`,{children:[(0,I.jsx)(ou,{title:`Your 6-month path`,sub:`${n.done} of ${n.total} days done · A1 → B1`}),(0,I.jsx)(`div`,{className:`seg mb-6`,role:`tablist`,children:wc.map(e=>(0,I.jsxs)(`button`,{type:`button`,"aria-pressed":i===e.id,onClick:()=>a(e.id),children:[(0,I.jsx)(`span`,{className:`block`,children:e.id}),(0,I.jsxs)(`span`,{className:`block text-[0.7rem] opacity-70`,children:[Math.round(l(e.id)*100),`%`]})]},e.id))}),(()=>{let e=wc.find(e=>e.id===i);return(0,I.jsxs)(`div`,{className:`rounded-3xl p-5 mb-6 text-white`,style:{background:cu[i]},children:[(0,I.jsxs)(`div`,{className:`text-sm font-black uppercase tracking-wider opacity-85`,children:[`Level `,e.id,` · weeks `,e.weeks[0],`–`,e.weeks[1]]}),(0,I.jsxs)(`div`,{className:`text-2xl font-black`,children:[e.name,` — `,(0,I.jsx)(`span`,{lang:`es`,children:e.es})]}),(0,I.jsx)(`div`,{className:`font-bold opacity-90`,children:e.blurb})]})})(),c.length===0&&(0,I.jsx)(`p`,{className:`text-ink2 font-bold`,children:`This level’s content is coming soon.`}),(0,I.jsx)(`div`,{className:`space-y-8`,children:c.map(r=>(0,I.jsx)(Nu,{week:r,progress:e,startDate:t,nextId:n.next?.id,onPick:s},r.n))}),o&&(0,I.jsx)(Pu,{d:o,onClose:()=>s(null)})]})}function Nu({week:e,progress:t,startDate:n,nextId:r,onPick:i}){let[a,o]=(0,v.useState)(!1),s=(0,v.useMemo)(()=>Ec.filter(t=>t.week===e.n),[e.n]),c=s.filter(e=>t[e.id]?.done).length,l=s[0],u=n?Yo(n,l.index):null,d=n?Yo(n,l.index+6):null,f=cu[e.level];return(0,I.jsxs)(`section`,{children:[(0,I.jsxs)(`div`,{className:`card p-4`,children:[(0,I.jsxs)(`div`,{className:`flex items-start gap-3`,children:[(0,I.jsx)(`span`,{className:`grid place-items-center w-12 h-12 rounded-2xl text-white font-black flex-none`,style:{background:f},children:e.n}),(0,I.jsxs)(`div`,{className:`min-w-0 flex-1`,children:[(0,I.jsxs)(`div`,{className:`text-xs font-black uppercase tracking-wider text-ink3`,children:[`Semana `,e.n,u&&d?` · ${Qo(u)} – ${Qo(d)}`:``]}),(0,I.jsxs)(`div`,{className:`text-lg font-black leading-tight`,children:[(0,I.jsx)(H,{text:e.es,plain:!0}),` `,(0,I.jsxs)(`span`,{className:`text-ink2`,children:[`· `,e.title]})]}),(0,I.jsx)(U,{value:c/s.length,color:f,className:`mt-2`,height:`0.6rem`})]})]}),(0,I.jsxs)(`button`,{type:`button`,onClick:()=>o(!a),className:`mt-3 flex items-center gap-1 text-sm font-black text-ink2`,"aria-expanded":a,children:[(0,I.jsx)(qi,{className:P(`w-4 h-4 transition-transform`,a&&`rotate-180`)}),` What you’ll be able to do`]}),a&&(0,I.jsx)(`ul`,{className:`mt-2 space-y-1.5 text-sm font-bold text-ink2`,children:e.cando.map(e=>(0,I.jsxs)(`li`,{className:`flex gap-2`,children:[(0,I.jsx)(Gi,{className:`w-4 h-4 mt-0.5 flex-none`,style:{color:f}}),` `,e]},e))})]}),(0,I.jsx)(`div`,{className:`flex flex-col items-center gap-4 mt-14`,children:s.map((e,n)=>{let a=!!t[e.id]?.done,o=e.id===r,s=(e.kind===`lesson`&&e.lesson?gu[e.lesson.kind]:_u[e.kind===`lesson`?`review`:e.kind]).icon,c=e.kind!==`lesson`;return(0,I.jsxs)(`div`,{className:`relative`,style:{transform:`translateX(${ju[n]}px)`},children:[o&&(0,I.jsx)(`div`,{className:`absolute -top-11 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-xl border-2 border-line bg-card px-3 py-1 text-sm font-black text-brand-lip anim-bob shadow-[0_3px_0_var(--line)]`,children:`START`}),(0,I.jsx)(`button`,{type:`button`,onClick:()=>i(e),"aria-label":`${e.title}${a?` (done)`:``}`,className:P(`grid place-items-center rounded-full transition active:translate-y-1`,c?`w-[84px] h-[84px]`:`w-[72px] h-[72px]`,o&&`anim-pulse-ring`),style:{background:a?f:o?`var(--brand)`:`var(--line)`,color:a?`#fff`:o?`var(--brand-ink)`:`var(--ink3)`,boxShadow:`0 6px 0 ${a?`color-mix(in srgb, ${f} 70%, black)`:o?`var(--brand-lip)`:`var(--line2)`}`},children:a&&!c?(0,I.jsx)(Gi,{className:`w-9 h-9`,strokeWidth:3.4}):(0,I.jsx)(s,{className:c?`w-10 h-10`:`w-8 h-8`,strokeWidth:2.5})})]},e.id)})})]})}function Pu({d:e,onClose:t}){let n=Jn(),r=B(t=>!!t.progress[e.id]?.done),i=e.lesson,a=e=>{t(),n(e)};return(0,I.jsx)(Wc,{onClose:t,label:e.title,children:(0,I.jsxs)(`div`,{className:`p-6 pt-5 space-y-4`,children:[(0,I.jsxs)(`div`,{className:`flex items-center gap-2 flex-wrap pr-8`,children:[i?(0,I.jsx)(vu,{kind:i.kind}):(0,I.jsx)(`span`,{className:`chip bg-brand-soft text-brand-lip`,children:e.kind===`checkpoint`?`Checkpoint`:`Weekly review`}),(0,I.jsxs)(`span`,{className:`text-sm font-black text-ink3`,children:[`Week `,e.week,` · Day `,e.index+1]}),r&&(0,I.jsxs)(`span`,{className:`chip bg-ok-soft text-ok-ink`,children:[(0,I.jsx)(Gi,{className:`w-3.5 h-3.5`}),` Done`]})]}),(0,I.jsx)(`h2`,{className:`text-2xl font-black leading-tight`,children:e.title}),(0,I.jsx)(`p`,{className:`text-ink2 font-bold`,children:i?i.goal:`Read the week’s story, take the ${e.kind===`checkpoint`?`level checkpoint`:`review quiz`} and tick off what you can do.`}),i&&(0,I.jsxs)(`div`,{className:`flex flex-wrap gap-1.5`,children:[i.words.slice(0,8).map(e=>(0,I.jsx)(`span`,{lang:`es`,className:`chip bg-bg2 text-ink2 border-2 border-line`,children:e.es},e.es)),i.words.length>8&&(0,I.jsxs)(`span`,{className:`chip bg-bg2 text-ink3`,children:[`+`,i.words.length-8]})]}),(0,I.jsxs)(`div`,{className:`grid gap-3 pt-2`,children:[(0,I.jsxs)(`button`,{type:`button`,className:`btn btn-primary`,onClick:()=>a(i?`/lesson/${e.id}`:`/week/${e.week}`),children:[(0,I.jsx)(Ba,{className:`w-5 h-5 fill-current`}),` `,r?`Practise again`:`Start`]}),i&&(0,I.jsxs)(`button`,{type:`button`,className:`btn btn-secondary`,onClick:()=>a(`/lesson/${e.id}?read=1`),children:[(0,I.jsx)(Vi,{className:`w-5 h-5`}),` Just read the explanation`]})]}),!r&&e.id!==Tc(e.week)&&e.index>0&&(0,I.jsxs)(`p`,{className:`text-xs font-bold text-ink3 flex items-center gap-1.5`,children:[(0,I.jsx)(Aa,{className:`w-3.5 h-3.5`}),` Everything is open — but the plan works best in order.`]})]})})}var Fu={};(function e(t,n,r,i){var a=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),o=typeof Path2D==`function`&&typeof DOMMatrix==`function`,s=(function(){if(!t.OffscreenCanvas)return!1;try{var e=new OffscreenCanvas(1,1),n=e.getContext(`2d`);n.fillRect(0,0,1,1);var r=e.transferToImageBitmap();n.createPattern(r,`no-repeat`)}catch{return!1}return!0})();function c(){}function l(e){var r=n.exports.Promise,i=r===void 0?t.Promise:r;return typeof i==`function`?new i(e):(e(c,c),null)}var u=(function(e,t){return{transform:function(n){if(e)return n;if(t.has(n))return t.get(n);var r=new OffscreenCanvas(n.width,n.height);return r.getContext(`2d`).drawImage(n,0,0),t.set(n,r),r},clear:function(){t.clear()}}})(s,new Map),d=function(){var e,t,n={},r=0;return typeof requestAnimationFrame==`function`&&typeof cancelAnimationFrame==`function`?(e=function(e){var t=Math.random();return n[t]=requestAnimationFrame(function i(a){r===a||r+16-1<a?(r=a,delete n[t],e()):n[t]=requestAnimationFrame(i)}),t},t=function(e){n[e]&&cancelAnimationFrame(n[e])}):(e=function(e){return setTimeout(e,16)},t=function(e){return clearTimeout(e)}),{frame:e,cancel:t}}(),f=(function(){var t,n,i={};function o(e){function t(t,n){e.postMessage({options:t||{},callback:n})}e.init=function(t){var n=t.transferControlToOffscreen();e.postMessage({canvas:n},[n])},e.fire=function(r,a,o){if(n)return t(r,null),n;var s=Math.random().toString(36).slice(2);return n=l(function(a){function c(t){t.data.callback===s&&(delete i[s],e.removeEventListener(`message`,c),n=null,u.clear(),o(),a())}e.addEventListener(`message`,c),t(r,s),i[s]=c.bind(null,{data:{callback:s}})}),n},e.reset=function(){for(var t in e.postMessage({reset:!0}),i)i[t](),delete i[t]}}return function(){if(t)return t;if(!r&&a){var n=[`var CONFETTI, SIZE = {}, module = {};`,`(`+e.toString()+`)(this, module, true, SIZE);`,`onmessage = function(msg) {`,`  if (msg.data.options) {`,`    CONFETTI(msg.data.options).then(function () {`,`      if (msg.data.callback) {`,`        postMessage({ callback: msg.data.callback });`,`      }`,`    });`,`  } else if (msg.data.reset) {`,`    CONFETTI && CONFETTI.reset();`,`  } else if (msg.data.resize) {`,`    SIZE.width = msg.data.resize.width;`,`    SIZE.height = msg.data.resize.height;`,`  } else if (msg.data.canvas) {`,`    SIZE.width = msg.data.canvas.width;`,`    SIZE.height = msg.data.canvas.height;`,`    CONFETTI = module.exports.create(msg.data.canvas);`,`  }`,`}`].join(`
`);try{t=new Worker(URL.createObjectURL(new Blob([n])))}catch(e){return typeof console<`u`&&typeof console.warn==`function`&&console.warn(`🎊 Could not load worker`,e),null}o(t)}return t}})(),p={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:[`square`,`circle`],zIndex:100,colors:[`#26ccff`,`#a25afd`,`#ff5e7e`,`#88ff5a`,`#fcff42`,`#ffa62d`,`#ff36ff`],disableForReducedMotion:!1,scalar:1};function m(e,t){return t?t(e):e}function h(e){return e!=null}function g(e,t,n){return m(e&&h(e[t])?e[t]:p[t],n)}function _(e){return e<0?0:Math.floor(e)}function v(e,t){return Math.floor(Math.random()*(t-e))+e}function y(e){return parseInt(e,16)}function b(e){return e.map(x)}function x(e){var t=String(e).replace(/[^0-9a-f]/gi,``);return t.length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:y(t.substring(0,2)),g:y(t.substring(2,4)),b:y(t.substring(4,6))}}function S(e){var t=g(e,`origin`,Object);return t.x=g(t,`x`,Number),t.y=g(t,`y`,Number),t}function C(e){e.width=document.documentElement.clientWidth,e.height=document.documentElement.clientHeight}function ee(e){var t=e.getBoundingClientRect();e.width=t.width,e.height=t.height}function w(e){var t=document.createElement(`canvas`);return t.style.position=`fixed`,t.style.top=`0px`,t.style.left=`0px`,t.style.pointerEvents=`none`,t.style.zIndex=e,t}function te(e,t,n,r,i,a,o,s,c){e.save(),e.translate(t,n),e.rotate(a),e.scale(r,i),e.arc(0,0,1,o,s,c),e.restore()}function T(e){var t=e.angle*(Math.PI/180),n=e.spread*(Math.PI/180);return{x:e.x,y:e.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:e.startVelocity*.5+Math.random()*e.startVelocity,angle2D:-t+(.5*n-Math.random()*n),tiltAngle:(Math.random()*.5+.25)*Math.PI,color:e.color,shape:e.shape,tick:0,totalTicks:e.ticks,decay:e.decay,drift:e.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:e.gravity*3,ovalScalar:.6,scalar:e.scalar,flat:e.flat}}function E(e,t){t.x+=Math.cos(t.angle2D)*t.velocity+t.drift,t.y+=Math.sin(t.angle2D)*t.velocity+t.gravity,t.velocity*=t.decay,t.flat?(t.wobble=0,t.wobbleX=t.x+10*t.scalar,t.wobbleY=t.y+10*t.scalar,t.tiltSin=0,t.tiltCos=0,t.random=1):(t.wobble+=t.wobbleSpeed,t.wobbleX=t.x+10*t.scalar*Math.cos(t.wobble),t.wobbleY=t.y+10*t.scalar*Math.sin(t.wobble),t.tiltAngle+=.1,t.tiltSin=Math.sin(t.tiltAngle),t.tiltCos=Math.cos(t.tiltAngle),t.random=Math.random()+2);var n=t.tick++/t.totalTicks,r=t.x+t.random*t.tiltCos,i=t.y+t.random*t.tiltSin,a=t.wobbleX+t.random*t.tiltCos,s=t.wobbleY+t.random*t.tiltSin;if(e.fillStyle=`rgba(`+t.color.r+`, `+t.color.g+`, `+t.color.b+`, `+(1-n)+`)`,e.beginPath(),o&&t.shape.type===`path`&&typeof t.shape.path==`string`&&Array.isArray(t.shape.matrix))e.fill(D(t.shape.path,t.shape.matrix,t.x,t.y,Math.abs(a-r)*.1,Math.abs(s-i)*.1,Math.PI/10*t.wobble));else if(t.shape.type===`bitmap`){var c=Math.PI/10*t.wobble,l=Math.abs(a-r)*.1,d=Math.abs(s-i)*.1,f=t.shape.bitmap.width*t.scalar,p=t.shape.bitmap.height*t.scalar,m=new DOMMatrix([Math.cos(c)*l,Math.sin(c)*l,-Math.sin(c)*d,Math.cos(c)*d,t.x,t.y]);m.multiplySelf(new DOMMatrix(t.shape.matrix));var h=e.createPattern(u.transform(t.shape.bitmap),`no-repeat`);h.setTransform(m),e.globalAlpha=1-n,e.fillStyle=h,e.fillRect(t.x-f/2,t.y-p/2,f,p),e.globalAlpha=1}else if(t.shape===`circle`)e.ellipse?e.ellipse(t.x,t.y,Math.abs(a-r)*t.ovalScalar,Math.abs(s-i)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):te(e,t.x,t.y,Math.abs(a-r)*t.ovalScalar,Math.abs(s-i)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI);else if(t.shape===`star`)for(var g=Math.PI/2*3,_=4*t.scalar,v=8*t.scalar,y=t.x,b=t.y,x=5,S=Math.PI/x;x--;)y=t.x+Math.cos(g)*v,b=t.y+Math.sin(g)*v,e.lineTo(y,b),g+=S,y=t.x+Math.cos(g)*_,b=t.y+Math.sin(g)*_,e.lineTo(y,b),g+=S;else e.moveTo(Math.floor(t.x),Math.floor(t.y)),e.lineTo(Math.floor(t.wobbleX),Math.floor(i)),e.lineTo(Math.floor(a),Math.floor(s)),e.lineTo(Math.floor(r),Math.floor(t.wobbleY));return e.closePath(),e.fill(),t.tick<t.totalTicks}function ne(e,t,n,a,o){var s=t.slice(),c=e.getContext(`2d`),f,p,m=l(function(t){function l(){f=p=null,c.clearRect(0,0,a.width,a.height),u.clear(),o(),t()}function m(){r&&(a.width!==i.width||a.height!==i.height)&&(a.width=e.width=i.width,a.height=e.height=i.height),!a.width&&!a.height&&(n(e),a.width=e.width,a.height=e.height),c.clearRect(0,0,a.width,a.height),s=s.filter(function(e){return E(c,e)}),s.length?f=d.frame(m):l()}f=d.frame(m),p=l});return{addFettis:function(e){return s=s.concat(e),m},canvas:e,promise:m,reset:function(){f&&d.cancel(f),p&&p()}}}function re(e,n){var r=!e,i=!!g(n||{},`resize`),o=!1,s=g(n,`disableForReducedMotion`,Boolean),c=a&&g(n||{},`useWorker`)?f():null,u=r?C:ee,d=e&&c?!!e.__confetti_initialized:!1,p=typeof matchMedia==`function`&&matchMedia(`(prefers-reduced-motion)`).matches,m;function h(t,n,r){for(var i=g(t,`particleCount`,_),a=g(t,`angle`,Number),o=g(t,`spread`,Number),s=g(t,`startVelocity`,Number),c=g(t,`decay`,Number),l=g(t,`gravity`,Number),d=g(t,`drift`,Number),f=g(t,`colors`,b),p=g(t,`ticks`,Number),h=g(t,`shapes`),y=g(t,`scalar`),x=!!g(t,`flat`),C=S(t),ee=i,w=[],te=e.width*C.x,E=e.height*C.y;ee--;)w.push(T({x:te,y:E,angle:a,spread:o,startVelocity:s,color:f[ee%f.length],shape:h[v(0,h.length)],ticks:p,decay:c,gravity:l,drift:d,scalar:y,flat:x}));return m?m.addFettis(w):(m=ne(e,w,u,n,r),m.promise)}function y(n){var a=s||g(n,`disableForReducedMotion`,Boolean),f=g(n,`zIndex`,Number);if(a&&p)return l(function(e){e()});r&&m?e=m.canvas:r&&!e&&(e=w(f),document.body.appendChild(e)),i&&!d&&u(e);var _={width:e.width,height:e.height};c&&!d&&c.init(e),d=!0,c&&(e.__confetti_initialized=!0);function v(){if(c){var t={getBoundingClientRect:function(){if(!r)return e.getBoundingClientRect()}};u(t),c.postMessage({resize:{width:t.width,height:t.height}});return}_.width=_.height=null}function y(){m=null,i&&(o=!1,t.removeEventListener(`resize`,v)),r&&e&&(document.body.contains(e)&&document.body.removeChild(e),e=null,d=!1)}return i&&!o&&(o=!0,t.addEventListener(`resize`,v,!1)),c?c.fire(n,_,y):h(n,_,y)}return y.reset=function(){c&&c.reset(),m&&m.reset()},y}var ie;function ae(){return ie||=re(null,{useWorker:!0,resize:!0}),ie}function D(e,t,n,r,i,a,o){var s=new Path2D(e),c=new Path2D;c.addPath(s,new DOMMatrix(t));var l=new Path2D;return l.addPath(c,new DOMMatrix([Math.cos(o)*i,Math.sin(o)*i,-Math.sin(o)*a,Math.cos(o)*a,n,r])),l}function oe(e){if(!o)throw Error(`path confetti are not supported in this browser`);var t,n;typeof e==`string`?t=e:(t=e.path,n=e.matrix);var r=new Path2D(t),i=document.createElement(`canvas`).getContext(`2d`);if(!n){for(var a=1e3,s=a,c=a,l=0,u=0,d,f,p=0;p<a;p+=2)for(var m=0;m<a;m+=2)i.isPointInPath(r,p,m,`nonzero`)&&(s=Math.min(s,p),c=Math.min(c,m),l=Math.max(l,p),u=Math.max(u,m));d=l-s,f=u-c;var h=10,g=Math.min(h/d,h/f);n=[g,0,0,g,-Math.round(d/2+s)*g,-Math.round(f/2+c)*g]}return{type:`path`,path:t,matrix:n}}function se(e){var t,n=1,r=`#000000`,i=`"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif`;typeof e==`string`?t=e:(t=e.text,n=`scalar`in e?e.scalar:n,i=`fontFamily`in e?e.fontFamily:i,r=`color`in e?e.color:r);var a=10*n,o=``+a+`px `+i,s=new OffscreenCanvas(a,a),c=s.getContext(`2d`);c.font=o;var l=c.measureText(t),u=Math.ceil(l.actualBoundingBoxRight+l.actualBoundingBoxLeft),d=Math.ceil(l.actualBoundingBoxAscent+l.actualBoundingBoxDescent),f=2,p=l.actualBoundingBoxLeft+f,m=l.actualBoundingBoxAscent+f;u+=f+f,d+=f+f,s=new OffscreenCanvas(u,d),c=s.getContext(`2d`),c.font=o,c.fillStyle=r,c.fillText(t,p,m);var h=1/n;return{type:`bitmap`,bitmap:s.transferToImageBitmap(),matrix:[h,0,0,h,-u*h/2,-d*h/2]}}n.exports=function(){return ae().apply(this,arguments)},n.exports.reset=function(){ae().reset()},n.exports.create=re,n.exports.shapeFromPath=oe,n.exports.shapeFromText=se})((function(){return typeof window<`u`?window:typeof self<`u`?self:this||{}})(),Fu,!1);var Iu=Fu.exports;Fu.exports.create;var Lu=()=>typeof window<`u`&&window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches;function Ru(e=1){if(Lu())return;let t=[`#FFC21A`,`#E5383B`,`#3DBE5B`,`#2D8CF0`,`#FF8A1F`];Iu({particleCount:Math.round(90*e),spread:75,startVelocity:42,origin:{y:.65},colors:t,disableForReducedMotion:!0}),setTimeout(()=>Iu({particleCount:Math.round(50*e),spread:110,origin:{y:.6},colors:t,disableForReducedMotion:!0}),180)}function zu(e){let{toast:t}=yl.getState();e.streakExtended&&e.streak>1?(Ql.streak(),t({emoji:`🔥`,title:`${e.streak}-day streak!`,body:`¡Sigue así! Keep it going.`,tone:`fire`})):e.streakExtended&&e.streak===1&&t({emoji:`🔥`,title:`Streak started!`,body:`Come back tomorrow to keep it alive.`,tone:`fire`}),e.goalReached&&(t({emoji:`🎯`,title:`Daily goal reached!`,body:`¡Objetivo cumplido! Great work today.`,tone:`ok`}),Ru(.8));for(let n of e.unlocked){let e=jc.get(n);e&&t({emoji:e.emoji,title:e.title,body:`Achievement unlocked · ${e.desc}`,tone:`gold`})}}function Bu(e){let t=Math.floor(e/60),n=e%60;return t?`${t}:${String(n).padStart(2,`0`)}`:`${n}s`}function Vu({label:e,value:t,tone:n,icon:r}){let i={brand:`bg-brand text-brand-ink`,ok:`bg-ok text-white`,info:`bg-info text-white`}[n],a={brand:`text-brand-lip border-brand`,ok:`text-ok border-ok`,info:`text-info border-info`}[n];return(0,I.jsxs)(`div`,{className:P(`rounded-2xl border-2 overflow-hidden`,a),children:[(0,I.jsx)(`div`,{className:P(`text-[0.7rem] font-black uppercase tracking-wider py-1`,i),children:e}),(0,I.jsxs)(`div`,{className:`flex items-center justify-center gap-1.5 py-3 text-xl font-black bg-card`,children:[r,t]})]})}function Hu({title:e,sub:t,xp:n,accuracy:r,seconds:i,mood:a=`cheer`,children:o,actions:s}){return(0,v.useEffect)(()=>{Ql.complete(),(r===void 0||r>=.7)&&Ru(r!==void 0&&r>=.999?1.4:1)},[]),(0,I.jsxs)(`div`,{className:`min-h-dvh flex flex-col items-center justify-center px-5 py-10 text-center bg-bg`,children:[(0,I.jsx)(Ro,{mood:a,size:140,className:`anim-bob`}),(0,I.jsx)(`h1`,{className:`text-3xl font-black mt-4 anim-pop`,children:e}),t&&(0,I.jsx)(`div`,{className:`text-ink2 font-bold mt-1 max-w-md`,children:t}),(0,I.jsxs)(`div`,{className:`grid grid-cols-3 gap-3 w-full max-w-md mt-8`,children:[(0,I.jsx)(Vu,{label:`Total XP`,value:`+${n}`,tone:`brand`,icon:(0,I.jsx)(Do,{className:`w-5 h-5 fill-current`})}),r!==void 0&&(0,I.jsx)(Vu,{label:`Accuracy`,value:`${Math.round(r*100)}%`,tone:`ok`,icon:(0,I.jsx)(co,{className:`w-5 h-5`})}),i!==void 0&&(0,I.jsx)(Vu,{label:`Time`,value:Bu(i),tone:`info`,icon:(0,I.jsx)($i,{className:`w-5 h-5`})})]}),o&&(0,I.jsx)(`div`,{className:`w-full max-w-md mt-6`,children:o}),(0,I.jsx)(`div`,{className:`w-full max-w-md grid gap-3 mt-8`,children:s})]})}function Uu({title:e,onClose:t,right:n,sub:r}){return(0,I.jsx)(`header`,{className:`sticky top-0 z-20 bg-bg/95 backdrop-blur border-b-2 border-line safe-top`,children:(0,I.jsxs)(`div`,{className:`max-w-2xl mx-auto flex items-center gap-2 px-3 py-2.5`,children:[(0,I.jsx)(`button`,{type:`button`,onClick:t,className:`btn-ghost rounded-xl p-2 text-ink3 hover:text-ink`,"aria-label":`Close`,children:(0,I.jsx)(`svg`,{viewBox:`0 0 24 24`,className:`w-6 h-6`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.6`,strokeLinecap:`round`,children:(0,I.jsx)(`path`,{d:`M6 6l12 12M18 6L6 18`})})}),(0,I.jsxs)(`div`,{className:`min-w-0 flex-1`,children:[(0,I.jsx)(`div`,{className:`font-black truncate`,children:e}),r&&(0,I.jsx)(`div`,{className:`text-xs font-bold text-ink3 truncate`,children:r})]}),n]})})}function Wu(){if(typeof window>`u`)return null;let e=window;return e.SpeechRecognition||e.webkitSpeechRecognition||null}var Gu=!!Wu();function Ku(e){let t=Wu();if(!t)return e.onError?.(`unsupported`),e.onEnd?.(),()=>{};let n=new t;n.lang=`es-ES`,n.interimResults=!1,n.continuous=!1,n.maxAlternatives=5;let r=!1;n.onresult=t=>{r=!0;let n=t.results[0],i=[];for(let e=0;e<n.length;e++)i.push(String(n[e].transcript));e.onResult(i)},n.onerror=t=>e.onError?.(String(t.error||`error`)),n.onend=()=>{r||e.onError?.(`no-speech`),e.onEnd?.()};try{n.start()}catch{e.onError?.(`start-failed`),e.onEnd?.()}return()=>{try{n.abort()}catch{}}}function qu(e,t){let n=se(e).map(e=>D(e)),r={score:0,heard:t[0]??``,matched:n.map(()=>!1)};for(let i of t){let t=Ee(i),a=new Set(se(t).map(e=>D(e))),o=n.map(e=>a.has(e)),s=o.filter(Boolean).length/Math.max(1,n.length),c=Oe(e,t),l=Math.round((.55*s+.45*c)*100)/100;l>r.score&&(r={score:l,heard:i,matched:o})}return r}function Ju(e){switch(e){case`not-allowed`:case`service-not-allowed`:return`Microphone access is blocked. Allow the microphone for this site in your browser settings.`;case`no-speech`:return`I didn't hear anything — tap the mic and speak clearly.`;case`audio-capture`:return`No microphone was found.`;case`network`:return`Speech recognition needs an internet connection in this browser.`;case`unsupported`:return`This browser has no speech recognition. Try Chrome, Edge or Safari.`;default:return`Something went wrong with the microphone. Try again.`}}var Yu=0,Xu=e=>`${e}-${++Yu}`,Zu=e=>e.replace(/…/g,``).replace(/\s+/g,` `).trim();function Qu(e){let t=Zu(e),n=new Set([t]);for(let e of t.split(/,\s*|\s*\/\s*/)){let t=e.trim();t&&n.add(t)}return[...n]}function $u(e){return/^(el|la|los|las)\s/i.test(e.es)?`noun`:/^to\s/.test(e.en)&&/[aeií]r(se)?$/.test(e.es)?`verb`:je(e.es).trim().includes(` `)?`phrase`:`other`}var K=kl.map(e=>({es:e.es,en:e.en}));function q(e,t,n,r=3){let i=$u(e),a=D(e[n]),o=t=>D(t[n])!==a&&D(t.en)!==D(e.en)&&D(t.es)!==D(e.es),s=t.filter(e=>o(e)&&$u(e)===i),c=t.filter(e=>o(e)&&$u(e)!==i),l=jo([...F(s),...F(c)],e=>D(e[n])).slice(0,r).map(e=>e[n]);if(l.length<r){let e=F(K.filter(e=>o(e)&&$u(e)===i&&!l.some(t=>D(t)===D(e[n]))));for(let t of e){if(l.length>=r)break;l.some(e=>D(e)===D(t[n]))||l.push(t[n])}}return l}function J(e,t,n){let r=q(e,t,`en`);return r.length<2?null:{kind:`mc`,id:Xu(`mc`),dir:`es-en`,prompt:e.es,options:F([e.en,...r]),answer:e.en,item:e,cardId:n}}function Y(e,t,n){let r=q(e,t,`es`);return r.length<2?null:{kind:`mc`,id:Xu(`mc`),dir:`en-es`,prompt:e.en,options:F([e.es,...r]),answer:e.es,item:e,cardId:n}}function X(e,t,n){let r=q(e,t,`es`);return r.length<2?null:{kind:`listen`,id:Xu(`listen`),audio:Zu(e.es),options:F([e.es,...r]),answer:e.es,item:e,cardId:n}}function ed(e,t){return{kind:`type`,id:Xu(`type`),prompt:e.en,accept:Qu(e.es),answer:Zu(e.es),item:e,cardId:t}}function td(e){let t=jo(jo(e,e=>D(e.es)),e=>D(e.en)).slice(0,5);return t.length<3?null:{kind:`match`,id:Xu(`match`),pairs:t}}var nd=e=>e.replace(/\([^)]*\)/g,``).replace(/\s+/g,` `).trim();function rd(e){let t=jo(F([e.a,...e.opts]),e=>e);return{kind:`fill`,id:Xu(`fill`),sentence:e.q,options:t,answer:e.a,en:e.en,full:e.q.replace(`___`,e.a),item:{es:nd(e.q.replace(`___`,e.a)),en:e.en??``}}}function id(e){let t=e.replace(/\([^)]*\)/g,``);if(/[/—]/.test(t))return null;let n=t.replace(/[.!?¿¡,;:"“”]/g,` `).split(/\s+/).filter(Boolean);return n.length>=2&&n.length<=10?n:null}function ad(e,t){let n=se(e.es);if(n.length<2||n.length>10)return null;let r=new Set(n.map(e=>D(e))),i=jo(F(t.filter(t=>t!==e).flatMap(e=>se(e.es))).filter(e=>!r.has(D(e))),e=>D(e)).slice(0,n.length>5?3:2);return{kind:`build`,id:Xu(`build`),dir:`en-es`,prompt:e.en,answer:n,bank:F([...n,...i]),full:e.es,item:e}}function od(e,t){let n=id(e.en);if(!n)return null;let r=new Set(n.map(e=>e.toLowerCase())),i=jo(F(t.filter(t=>t!==e).flatMap(e=>id(e.en)??[])).filter(e=>!r.has(e.toLowerCase())),e=>e.toLowerCase()).slice(0,3);return{kind:`build`,id:Xu(`build`),dir:`es-en`,prompt:e.es,answer:n,bank:F([...n,...i]),full:e.es,item:e}}function sd(e){let t=Zu(e.es);return{kind:`dictation`,id:Xu(`dict`),text:t,en:e.en,accept:[t],item:e}}function cd(e){return{kind:`speak`,id:Xu(`speak`),text:Zu(e.es),en:e.en,item:e}}var ld=e=>e.filter(e=>e.en&&e.es),ud=(e,t)=>se(e.es).length<=t;function dd(e,t){let n=ld(e.words),r=e.phrases.length?e.phrases:e.examples,i=F(n),a=F(r),o=[];o.push(i[0]?J(i[0],n):null),o.push(i[1]?X(i[1],n):null),o.push(n.length>=4?td(Oo(n,5)):null),o.push(i[2]?Y(i[2],n):null);for(let t of Oo(e.drills,4))o.push(rd(t));o.push(a[0]?ad(a[0],r):null),o.push(a[1]?X(a[1],r):null);let s=a.slice(2).find(e=>id(e.en))??a.find(e=>e!==a[0]&&id(e.en));o.push(s?od(s,r):null);let c=i.slice(3).find(e=>je(Zu(e.es)).split(` `).length<=2)??i.find(e=>je(Zu(e.es)).split(` `).length<=2);o.push(c?ed(c):null);let l=a.find(e=>e!==a[0]&&ud(e,5))??(i[4]?i[4]:null);if(o.push(l?sd(l):null),t.speaking&&Gu){let e=a.find(e=>ud(e,7));o.push(e?cd(e):null)}return o.filter(e=>!!e)}function fd(e,t,n){let r=e.flatMap(e=>ld(e.words)),i=e.flatMap(e=>e.phrases.length?e.phrases:e.examples),a=[];for(let t of e){let e=ld(t.words),n=t.phrases.length?t.phrases:t.examples;for(let e of Oo(t.drills,2))a.push(rd(e));let o=F(e),s=o[0]&&Y(o[0],r),c=o[1]&&X(o[1],r),l=o[2]&&J(o[2],r);for(let e of[s,c,l])e&&a.push(e);let u=ko(n.length?n:[{es:``,en:``}]),d=u.es?ad(u,i):null;d&&a.push(d)}let o=F(r).find(e=>je(Zu(e.es)).split(` `).length<=2),s=Oo(a,Math.max(0,t-3));o&&s.push(ed(o));let c=F(i).find(e=>ud(e,6));if(c&&s.push(sd(c)),n.speaking&&Gu){let e=F(i).find(e=>ud(e,7));e&&s.push(cd(e))}let l=td(Oo(r,5));return[...l?[l]:[],...F(s)].slice(0,t)}function pd(e,t){let n=t.length>=4?t:K;return e.map(e=>{let t={es:e.es,en:e.en},r=Math.random();return r<.3?J(t,n,e.id):r<.55?Y(t,n,e.id):r<.8?X(t,n,e.id):ed(t,e.id)}).filter(e=>!!e)}function md(e,t){let n=[],r=e.filter(e=>se(e.es).length<=3),i=e.filter(e=>se(e.es).length>3);for(let e of F(r).slice(0,8)){let t=Math.random();n.push(t<.35?Y(e,r):t<.7?X(e,r):ed(e))}for(let e of F(i).slice(0,5))n.push(Math.random()<.6?ad(e,i):t.speaking&&Gu?cd(e):sd(e));return F(n.filter(e=>!!e))}function hd(e){return e.kind===`match`?null:e.item}function gd(e,t){switch(e.kind){case`mc`:case`listen`:case`fill`:return typeof t==`string`&&t.length>0;case`build`:return Array.isArray(t)&&t.length>0;case`type`:case`dictation`:return typeof t==`string`&&t.trim().length>0;case`speak`:return!!t;case`match`:return!1}}function _d(e,t){switch(e.kind){case`mc`:return e.dir===`es-en`?{ok:t===e.answer,expected:e.answer,expectedEs:!1,translation:void 0,say:void 0}:{ok:t===e.answer,expected:e.answer,expectedEs:!0,translation:e.prompt,say:e.answer};case`listen`:return{ok:t===e.answer,expected:e.answer,expectedEs:!0,translation:e.item.en};case`fill`:return{ok:t===e.answer,expected:e.full,expectedEs:!0,translation:e.en,say:nd(e.full)};case`build`:{let n=t.map(t=>e.bank[t]),r=e=>D(e.join(` `)).replace(/'/g,``),i=r(n)===r(e.answer);return e.dir===`en-es`?{ok:i,expected:e.full,expectedEs:!0,translation:e.prompt,say:e.full}:{ok:i,expected:e.item.en,expectedEs:!1,translation:void 0}}case`type`:{let n=String(t??``),{verdict:r,match:i}=Ae(n,e.accept);return r===`wrong`?e.accept.map(e=>je(e)).some(t=>t!==e.answer&&ke(n,t)!==`wrong`)?{ok:!0,note:`Remember the article: ${e.answer}`,expected:e.answer,expectedEs:!0,translation:e.prompt,say:e.answer}:{ok:!1,expected:e.answer,expectedEs:!0,translation:e.prompt,say:e.answer}:{ok:!0,note:r===`accent`?`Watch the accents: ${i}`:r===`typo`?`Small typo — it's “${i}”`:void 0,expected:e.answer,expectedEs:!0,translation:e.prompt,say:e.answer}}case`dictation`:{let{verdict:n,match:r}=Ae(String(t??``),e.accept);return{ok:n!==`wrong`,note:n===`accent`?`Watch the accents: ${r}`:n===`typo`?`Almost! It's “${r}”`:void 0,expected:e.text,expectedEs:!0,translation:e.en}}case`speak`:{let n=t;return{ok:!!n&&n.score>=.72,note:n?`I heard: “${n.heard}” (${Math.round(n.score*100)}%)`:void 0,expected:e.text,expectedEs:!0,translation:e.en}}case`match`:return{ok:!0,expected:``,expectedEs:!1}}}function vd({children:e}){return(0,I.jsx)(`h2`,{className:`text-xl sm:text-2xl font-black mb-5`,children:e})}function yd(e,t,n){(0,v.useEffect)(()=>{if(n)return;let r=n=>{if(n.target instanceof HTMLInputElement||n.target instanceof HTMLTextAreaElement)return;let r=Number(n.key);r>=1&&r<=e.length&&t(e[r-1])};return window.addEventListener(`keydown`,r),()=>window.removeEventListener(`keydown`,r)},[e,t,n])}function bd(e,t,n,r){return r===`idle`?t===e?`selected`:void 0:e===n?`correct`:e===t?`wrong`:`dim`}function xd(e,t=!0){let n=B(e=>e.settings.autoplay);(0,v.useEffect)(()=>{if(!e||!n||!t)return;let r=setTimeout(()=>ll(e),250);return()=>clearTimeout(r)},[e,n,t])}var Sd=[];function Cd({ex:e,value:t,setValue:n,status:r}){let i=e.kind===`mc`,a=i&&e.dir===`es-en`;xd(i&&a?e.prompt:null);let o=e=>{r===`idle`&&(n(e),a||ll(e))};return yd(i?e.options:Sd,o,r!==`idle`),e.kind===`mc`?(0,I.jsxs)(`div`,{children:[(0,I.jsx)(vd,{children:a?`What does this mean?`:`Choose the Spanish`}),(0,I.jsxs)(`div`,{className:`flex items-center gap-3 mb-7`,children:[a&&(0,I.jsx)(V,{text:e.prompt,size:`lg`,variant:`info`}),(0,I.jsx)(`div`,{className:`text-[1.7rem] sm:text-3xl font-black leading-tight`,children:a?(0,I.jsx)(H,{text:e.prompt}):(0,I.jsxs)(`span`,{children:[`“`,e.prompt,`”`]})})]}),(0,I.jsx)(`div`,{className:`grid gap-3`,children:e.options.map((n,i)=>(0,I.jsxs)(`button`,{type:`button`,className:`option`,"data-state":bd(n,t,e.answer,r),disabled:r!==`idle`,onClick:()=>o(n),children:[(0,I.jsx)(`span`,{className:`option-key`,children:i+1}),a?(0,I.jsx)(`span`,{children:n}):(0,I.jsx)(H,{text:n,static:!0})]},n))})]}):null}function wd({ex:e,value:t,setValue:n,status:r}){xd((e.kind===`listen`?e.audio:``)||null);let i=e.kind===`listen`?e.options:[],a=e=>r===`idle`&&n(e);return yd(i,a,r!==`idle`),e.kind===`listen`?(0,I.jsxs)(`div`,{children:[(0,I.jsx)(vd,{children:`What do you hear?`}),(0,I.jsxs)(`div`,{className:`flex items-center justify-center gap-4 mb-8`,children:[(0,I.jsx)(V,{text:e.audio,size:`xl`,variant:`info`,label:`Play again`}),(0,I.jsx)(V,{text:e.audio,slow:!0,size:`lg`,variant:`soft`})]}),(0,I.jsx)(`div`,{className:`grid gap-3 sm:grid-cols-2`,children:e.options.map((n,i)=>(0,I.jsxs)(`button`,{type:`button`,className:`option`,"data-state":bd(n,t,e.answer,r),disabled:r!==`idle`,onClick:()=>a(n),children:[(0,I.jsx)(`span`,{className:`option-key`,children:i+1}),(0,I.jsx)(H,{text:n,static:!0})]},n))})]}):null}function Td({ex:e,value:t,setValue:n,status:r}){let i=e.kind===`fill`?e.options:[],a=e=>r===`idle`&&n(e);if(yd(i,a,r!==`idle`),e.kind!==`fill`)return null;let[o,s]=e.sentence.split(`___`),c=t;return(0,I.jsxs)(`div`,{children:[(0,I.jsx)(vd,{children:`Fill in the gap`}),(0,I.jsxs)(`div`,{className:`card p-5 mb-6`,children:[(0,I.jsxs)(`div`,{className:`text-2xl font-black leading-relaxed`,children:[(0,I.jsx)(H,{text:o}),(0,I.jsx)(`span`,{className:P(`inline-block min-w-[4.5rem] mx-1 px-2 rounded-xl border-b-4 text-center align-baseline`,r===`correct`?`border-ok text-ok-ink bg-ok-soft`:r===`wrong`?`border-bad text-bad-ink bg-bad-soft`:c?`border-info text-info-ink bg-info-soft`:`border-line2`),children:c??`\xA0`}),s!==void 0&&(0,I.jsx)(H,{text:s})]}),e.en&&(0,I.jsx)(`div`,{className:`text-ink2 font-bold mt-2`,children:e.en})]}),(0,I.jsx)(`div`,{className:`grid grid-cols-2 gap-3`,children:e.options.map((n,i)=>(0,I.jsxs)(`button`,{type:`button`,className:`option justify-center`,"data-state":bd(n,t,e.answer,r),disabled:r!==`idle`,onClick:()=>a(n),children:[(0,I.jsx)(`span`,{className:`option-key hidden sm:grid`,children:i+1}),(0,I.jsx)(`span`,{lang:`es`,children:n})]},n))})]})}function Ed({ex:e,value:t,setValue:n,status:r}){if(e.kind!==`build`)return null;let i=t??[],a=e.dir===`en-es`,o=t=>{r!==`idle`||i.includes(t)||(Ql.tap(),a&&ll(e.bank[t]),n([...i,t]))},s=e=>{r===`idle`&&n(i.filter(t=>t!==e))};return(0,I.jsxs)(`div`,{children:[(0,I.jsx)(vd,{children:`Translate this sentence`}),(0,I.jsxs)(`div`,{className:`flex items-start gap-3 mb-6`,children:[!a&&(0,I.jsx)(V,{text:e.prompt,size:`md`,variant:`info`}),(0,I.jsx)(`div`,{className:`text-xl sm:text-2xl font-black leading-snug`,children:a?e.prompt:(0,I.jsx)(H,{text:e.prompt})})]}),(0,I.jsx)(`div`,{className:P(`min-h-[7.5rem] rounded-2xl border-2 p-3 flex flex-wrap content-start gap-2 mb-6`,`bg-[repeating-linear-gradient(transparent,transparent_3.15rem,var(--line)_3.15rem,var(--line)_3.3rem)]`,r===`correct`?`border-ok`:r===`wrong`?`border-bad`:`border-line`),children:i.map(t=>(0,I.jsx)(`button`,{type:`button`,className:`tile anim-pop`,onClick:()=>s(t),disabled:r!==`idle`,children:(0,I.jsx)(`span`,{lang:a?`es`:`en`,children:e.bank[t]})},t))}),(0,I.jsx)(`div`,{className:`flex flex-wrap justify-center gap-2`,children:e.bank.map((e,t)=>i.includes(t)?(0,I.jsx)(`span`,{className:`tile tile-ghost`,"aria-hidden":`true`,children:e},t):(0,I.jsx)(`button`,{type:`button`,className:`tile`,onClick:()=>o(t),disabled:r!==`idle`,children:(0,I.jsx)(`span`,{lang:a?`es`:`en`,children:e})},t))})]})}function Dd({ex:e,onComplete:t,status:n}){let r=e.kind===`match`?e.pairs:[],i=(0,v.useMemo)(()=>F(r.map((e,t)=>({i:t,t:e.es}))),[r]),a=(0,v.useMemo)(()=>F(r.map((e,t)=>({i:t,t:e.en}))),[r]),[o,s]=(0,v.useState)(null),[c,l]=(0,v.useState)(null),[u,d]=(0,v.useState)(new Set),[f,p]=(0,v.useState)(null),m=(0,v.useRef)(0);if((0,v.useEffect)(()=>{if(o!==null&&c!==null){if(o===c){Ql.correct();let e=new Set(u);e.add(o),d(e),s(null),l(null),e.size===r.length&&setTimeout(()=>t(m.current),350)}else{Ql.wrong(),Po(60),m.current++,p([o,c]);let e=setTimeout(()=>{p(null),s(null),l(null)},550);return()=>clearTimeout(e)}}},[o,c]),e.kind!==`match`)return null;let h=(e,t)=>{if(u.has(t))return`correct`;if(f&&(e===`l`?f[0]:f[1])===t)return`wrong`;if((e===`l`?o:c)===t)return`selected`};return(0,I.jsxs)(`div`,{children:[(0,I.jsx)(vd,{children:`Tap the matching pairs`}),(0,I.jsxs)(`div`,{className:`grid grid-cols-2 gap-3`,children:[(0,I.jsx)(`div`,{className:`grid gap-3`,children:i.map(({i:e,t})=>(0,I.jsx)(`button`,{type:`button`,className:P(`option justify-center text-center min-h-[3.6rem]`,u.has(e)&&`opacity-60`),"data-state":h(`l`,e),disabled:u.has(e)||n!==`idle`,onClick:()=>{ll(t),s(e)},children:(0,I.jsx)(H,{text:t,static:!0})},e))}),(0,I.jsx)(`div`,{className:`grid gap-3`,children:a.map(({i:e,t})=>(0,I.jsx)(`button`,{type:`button`,className:P(`option justify-center text-center min-h-[3.6rem] text-[0.95rem]`,u.has(e)&&`opacity-60`),"data-state":h(`r`,e),disabled:u.has(e)||n!==`idle`,onClick:()=>l(e),children:t},e))})]})]})}function Od({ex:e,value:t,setValue:n,status:r,onEnter:i}){let a=(0,v.useRef)(null),o=e.kind===`dictation`;if(xd(o&&e.kind===`dictation`?e.text:null),(0,v.useEffect)(()=>{let e=setTimeout(()=>a.current?.focus(),150);return()=>clearTimeout(e)},[]),e.kind!==`type`&&e.kind!==`dictation`)return null;let s=t??``;return(0,I.jsxs)(`div`,{children:[(0,I.jsx)(vd,{children:o?`Type what you hear`:`Write this in Spanish`}),e.kind===`dictation`?(0,I.jsxs)(`div`,{className:`flex items-center justify-center gap-4 mb-7`,children:[(0,I.jsx)(V,{text:e.text,size:`xl`,variant:`info`,label:`Play again`}),(0,I.jsx)(V,{text:e.text,slow:!0,size:`lg`,variant:`soft`})]}):(0,I.jsxs)(`div`,{className:`text-[1.7rem] sm:text-3xl font-black leading-tight mb-7`,children:[`“`,e.prompt,`”`]}),(0,I.jsx)(`input`,{ref:a,lang:`es`,className:P(`input text-xl`,r===`correct`&&`border-ok!`,r===`wrong`&&`border-bad!`),placeholder:o?`Escribe aquí…`:`In Spanish…`,value:s,disabled:r!==`idle`,autoComplete:`off`,autoCorrect:`off`,autoCapitalize:`off`,spellCheck:!1,onChange:e=>n(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),i?.())}}),(0,I.jsx)(`div`,{className:`mt-3`,children:(0,I.jsx)(pu,{inputRef:a,value:s,onChange:e=>n(e)})})]})}var kd=0,Ad=()=>Date.now()<kd;function jd(e=15){kd=Date.now()+e*6e4}function Md({ex:e,value:t,setValue:n,status:r}){let[i,a]=(0,v.useState)(!1),[o,s]=(0,v.useState)(null),c=(0,v.useRef)(()=>{}),l=B(e=>e.bumpStats);if((0,v.useEffect)(()=>()=>c.current(),[]),e.kind!==`speak`)return null;let u=()=>{if(i){c.current(),a(!1);return}s(null),a(!0),c.current=Ku({onResult:t=>{let r=qu(e.text,t);l({spoken:1}),n(r)},onError:e=>{e!==`aborted`&&s(Ju(e))},onEnd:()=>a(!1)})},d=e.text.split(/\s+/);return(0,I.jsxs)(`div`,{children:[(0,I.jsx)(vd,{children:`Say this out loud`}),(0,I.jsxs)(`div`,{className:`card p-5 mb-7 flex items-start gap-3`,children:[(0,I.jsx)(V,{text:e.text,size:`md`,variant:`info`}),(0,I.jsx)(V,{text:e.text,slow:!0,size:`md`,variant:`soft`}),(0,I.jsxs)(`div`,{className:`min-w-0`,children:[(0,I.jsx)(`div`,{className:`text-2xl font-black leading-snug`,children:t?(0,I.jsx)(`span`,{lang:`es`,children:d.map((e,n)=>(0,I.jsxs)(`span`,{className:t.matched[n]?`text-ok`:`text-bad`,children:[e,` `]},n))}):(0,I.jsx)(H,{text:e.text})}),(0,I.jsx)(`div`,{className:`text-ink2 font-bold mt-1`,children:e.en})]})]}),(0,I.jsxs)(`div`,{className:`flex flex-col items-center gap-3`,children:[(0,I.jsx)(`button`,{type:`button`,onClick:u,disabled:r!==`idle`,className:P(`grid place-items-center w-24 h-24 rounded-full text-white transition`,i?`bg-bad anim-pulse-ring`:`bg-info shadow-[0_5px_0_var(--info-lip)] active:translate-y-1 active:shadow-none`),"aria-label":i?`Stop listening`:`Start speaking`,children:i?(0,I.jsx)(no,{className:`w-9 h-9 fill-white`}):(0,I.jsx)(Ia,{className:`w-10 h-10`})}),(0,I.jsx)(`div`,{className:`text-sm font-bold text-ink2 h-5`,children:i?`Listening… speak now`:t?`Score ${Math.round(t.score*100)}% — tap the mic to try again`:`Tap the mic and read the sentence`}),o&&(0,I.jsx)(`div`,{className:`text-sm font-bold text-bad text-center max-w-sm`,children:o})]})]})}var Nd=[`¡Muy bien!`,`¡Genial!`,`¡Perfecto!`,`¡Excelente!`,`¡Eso es!`,`¡Fenomenal!`,`¡Bravo!`,`¡Estupendo!`],Pd=[`Casi…`,`¡Ánimo!`,`No pasa nada.`,`¡Vamos!`];function Fd({exercises:e,onExit:t,onFinish:n,onAnswer:r,retryWrong:i=!0}){let[a,o]=(0,v.useState)(e),[s,c]=(0,v.useState)(0),[l,u]=(0,v.useState)(null),[d,f]=(0,v.useState)(`idle`),[p,m]=(0,v.useState)(null),[h,g]=(0,v.useState)(0),[_,y]=(0,v.useState)(!1),[b,x]=(0,v.useState)(!1),[S,C]=(0,v.useState)(Nd[0]),ee=B(e=>e.settings),w=B(e=>e.bumpStats),te=B(e=>e.recordMistake),T=(0,v.useRef)({firstCorrect:0,firstTotal:e.length,retried:new Set,wrong:[],start:Date.now()}),E=a[s],ne=E?gd(E,l):!1;(0,v.useEffect)(()=>()=>dl(),[]);let re=(0,v.useCallback)(()=>{let e=T.current,t=e.firstTotal?e.firstCorrect/e.firstTotal:1;n({correct:e.firstCorrect,total:e.firstTotal,accuracy:t,seconds:Math.round((Date.now()-e.start)/1e3),wrong:e.wrong})},[n]),ie=(0,v.useCallback)((e,t)=>{let n=T.current,a=n.retried.has(E.id);if(m(t),f(e?`correct`:`wrong`),C(ko(e?Nd:Pd)),e?(Ql.correct(),g(e=>e+1)):(Ql.wrong(),Po([40,40,60]),x(!0),setTimeout(()=>x(!1),420),g(0)),a||(e&&n.firstCorrect++,w({exercises:1,correct:+!!e}),r?.(E,e)),!e){let e=hd(E);if(e&&e.en&&(te(e.es,e.en),a||n.wrong.push(e)),i&&!a&&E.kind!==`speak`){let e={...E,id:`${E.id}-r`};n.retried.add(e.id),o(t=>[...t,e])}}ee.autoplay&&t.say&&setTimeout(()=>ll(t.say),e?120:300)},[E,w,r,te,i,ee.autoplay]),ae=(0,v.useCallback)(()=>{if(!E||d!==`idle`||!ne)return;let e=_d(E,l);ie(e.ok,e)},[E,d,ne,l,ie]),D=(0,v.useCallback)(()=>{if(dl(),s+1>=a.length){re();return}c(e=>e+1),u(null),f(`idle`),m(null)},[s,a.length,re]),oe=()=>{jd(15),T.current.firstTotal=Math.max(0,T.current.firstTotal-1),s+1>=a.length?re():(c(e=>e+1),u(null),f(`idle`))};if((0,v.useEffect)(()=>{let e=e=>{e.key!==`Enter`||_||e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement||(e.preventDefault(),d===`idle`?ae():D())};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[d,ae,D,_]),!E)return null;let se=(s+(d===`idle`?0:1))/a.length,ce={ex:E,value:l,setValue:u,status:d,onEnter:()=>d===`idle`?ae():D()};return(0,I.jsxs)(`div`,{className:`min-h-dvh flex flex-col bg-bg`,children:[(0,I.jsx)(`header`,{className:`sticky top-0 z-20 bg-bg/95 backdrop-blur safe-top`,children:(0,I.jsxs)(`div`,{className:`max-w-2xl mx-auto w-full flex items-center gap-3 px-4 py-3`,children:[(0,I.jsx)(`button`,{type:`button`,onClick:()=>s>0||d!==`idle`?y(!0):t(),className:`btn-ghost rounded-xl p-2 text-ink3 hover:text-ink`,"aria-label":`Quit`,children:(0,I.jsx)(To,{className:`w-6 h-6`})}),(0,I.jsx)(U,{value:se,className:`flex-1`}),h>=3?(0,I.jsxs)(`span`,{className:`chip bg-fire-soft text-fire anim-pop`,title:`Correct answers in a row`,children:[(0,I.jsx)(ma,{className:`w-4 h-4 fill-fire/40`}),h]}):(0,I.jsx)(`span`,{className:`w-10`})]})}),(0,I.jsxs)(`main`,{className:P(`flex-1 w-full max-w-2xl mx-auto px-4 pt-4 pb-56 anim-rise`,b&&`anim-shake`),children:[E.kind===`mc`&&(0,I.jsx)(Cd,{...ce}),E.kind===`listen`&&(0,I.jsx)(wd,{...ce}),E.kind===`fill`&&(0,I.jsx)(Td,{...ce}),E.kind===`build`&&(0,I.jsx)(Ed,{...ce}),(E.kind===`type`||E.kind===`dictation`)&&(0,I.jsx)(Od,{...ce}),E.kind===`speak`&&(0,I.jsx)(Md,{...ce}),E.kind===`match`&&(0,I.jsx)(Dd,{ex:E,status:d,onComplete:e=>ie(!0,{ok:!0,expected:``,expectedEs:!1,note:e?`${e} mismatch${e>1?`es`:``}`:`No mistakes!`})})]},E.id),(0,I.jsx)(`footer`,{className:P(`fixed bottom-0 inset-x-0 z-30 border-t-2 safe-bottom transition-colors`,d===`idle`&&`bg-bg border-line`,d===`correct`&&`bg-ok-soft border-ok/40`,d===`wrong`&&`bg-bad-soft border-bad/40`),children:(0,I.jsx)(`div`,{className:`max-w-2xl mx-auto px-4 py-4`,children:d===`idle`?(0,I.jsxs)(`div`,{className:`flex items-center gap-3`,children:[E.kind===`speak`&&(0,I.jsx)(`button`,{type:`button`,className:`btn btn-ghost btn-sm`,onClick:oe,children:`Can’t speak now`}),E.kind!==`match`&&(0,I.jsx)(`button`,{type:`button`,className:`btn btn-primary flex-1 sm:flex-none sm:min-w-44 sm:ml-auto`,disabled:!ne,onClick:ae,children:`Check`}),E.kind===`match`&&(0,I.jsx)(`div`,{className:`text-sm font-bold text-ink3 mx-auto`,children:`Match all pairs to continue`})]}):(0,I.jsx)(Id,{status:d,res:p,praise:S,onNext:D})})}),_&&(0,I.jsx)(Wc,{onClose:()=>y(!1),label:`Quit?`,bare:!0,children:(0,I.jsxs)(`div`,{className:`p-6 text-center space-y-4`,children:[(0,I.jsx)(Ro,{mood:`sad`,size:88,className:`mx-auto`}),(0,I.jsx)(`h2`,{className:`text-xl font-black`,children:`Wait, don’t go!`}),(0,I.jsx)(`p`,{className:`text-ink2 font-bold`,children:`If you quit now, you’ll lose the progress of this session.`}),(0,I.jsxs)(`div`,{className:`grid gap-3`,children:[(0,I.jsx)(`button`,{type:`button`,className:`btn btn-primary`,onClick:()=>y(!1),children:`Keep learning`}),(0,I.jsx)(`button`,{type:`button`,className:`btn btn-ghost text-bad`,onClick:t,children:`Quit session`})]})]})})]})}function Id({status:e,res:t,praise:n,onNext:r}){let i=e===`correct`;return(0,I.jsxs)(`div`,{className:`flex flex-col sm:flex-row sm:items-end gap-4 anim-slide-up`,children:[(0,I.jsxs)(`div`,{className:`flex items-start gap-3 flex-1 min-w-0`,children:[(0,I.jsx)(`span`,{className:P(`grid place-items-center w-11 h-11 rounded-full flex-none text-white`,i?`bg-ok`:`bg-bad`),children:i?(0,I.jsx)(Gi,{className:`w-7 h-7`,strokeWidth:3.2}):(0,I.jsx)(To,{className:`w-7 h-7`,strokeWidth:3.2})}),(0,I.jsxs)(`div`,{className:`min-w-0`,children:[(0,I.jsx)(`div`,{className:P(`text-xl font-black`,i?`text-ok-ink`:`text-bad-ink`),children:i?(0,I.jsx)(H,{text:n,plain:!0}):`Correct answer:`}),!i&&t?.expected&&(0,I.jsxs)(`div`,{className:`flex items-start gap-2 mt-1`,children:[t.expectedEs&&(0,I.jsx)(V,{text:t.expected,size:`sm`,variant:`soft`}),(0,I.jsx)(`div`,{className:`font-black text-lg text-bad-ink leading-snug`,children:t.expectedEs?(0,I.jsx)(H,{text:t.expected}):t.expected})]}),i&&t?.expectedEs&&t.expected&&(0,I.jsxs)(`div`,{className:`flex items-start gap-2 mt-1`,children:[(0,I.jsx)(V,{text:t.expected,size:`sm`,variant:`soft`}),(0,I.jsx)(`div`,{className:`font-bold text-ok-ink leading-snug`,children:(0,I.jsx)(H,{text:t.expected})})]}),t?.translation&&(0,I.jsx)(`div`,{className:P(`text-sm font-bold mt-0.5`,i?`text-ok-ink/80`:`text-bad-ink/80`),children:t.translation}),t?.note&&(0,I.jsx)(`div`,{className:P(`text-sm font-black mt-1`,i?`text-ok-ink`:`text-bad-ink`),children:t.note})]})]}),(0,I.jsx)(`button`,{type:`button`,autoFocus:!0,className:P(`btn sm:min-w-44`,i?`btn-ok`:`btn-bad`),onClick:r,children:`Continue`})]})}function Ld(e=`/`){let t=Jn(),n=j();return()=>n.key==="default"?t(e):t(-1)}function Rd(){let{id:e=``}=Qn(),[t]=_i(),n=t.get(`read`)===`1`,r=yc.get(e),i=Jn(),a=Ld(`/path`),[o,s]=(0,v.useState)(`learn`),[c,l]=(0,v.useState)(0),[u,d]=(0,v.useState)(null),f=B(e=>e.settings.speaking),p=B(e=>e.completeDay),m=B(e=>e.bumpStats),h=B(e=>Object.keys(e.cards).length),g=(0,v.useMemo)(()=>r&&o===`practice`?dd(r,{speaking:f&&!Ad()}):[],[r,c,o===`practice`]);if(!r)return(0,I.jsx)(br,{to:`/path`,replace:!0});if(o===`practice`)return(0,I.jsx)(Fd,{exercises:g,onExit:()=>s(`learn`),onFinish:e=>{let t=p(r.id,e.accuracy,r.words);m({seconds:e.seconds});let n=Object.keys(B.getState().cards).length-h;zu(t),d({r:e,xp:t.gained,added:n}),s(`done`)}},c);if(o===`done`&&u){let e=Ic(B.getState().progress,B.getState().startDate).next,t=u.r.accuracy>=.999;return(0,I.jsx)(Hu,{title:t?`¡Perfecto!`:`Lesson complete!`,sub:t?`No mistakes — impressive.`:u.r.accuracy>=.8?`¡Muy bien! Great work.`:`Good effort — mistakes are how you learn.`,xp:u.xp,accuracy:u.r.accuracy,seconds:u.r.seconds,mood:t?`cool`:`cheer`,actions:(0,I.jsxs)(I.Fragment,{children:[e&&e.id!==r.id?(0,I.jsxs)(`button`,{type:`button`,className:`btn btn-primary`,onClick:()=>i(e.kind===`lesson`?`/lesson/${e.id}`:`/week/${e.week}`,{replace:!0}),children:[`Next: `,e.title,` `,(0,I.jsx)(Yi,{className:`w-5 h-5`})]}):null,(0,I.jsx)(`button`,{type:`button`,className:`btn btn-secondary`,onClick:()=>i(`/`,{replace:!0}),children:`Back to today`}),(0,I.jsx)(`button`,{type:`button`,className:`btn btn-ghost`,onClick:()=>{l(e=>e+1),s(`practice`)},children:`Practise again`})]}),children:(0,I.jsxs)(`div`,{className:`space-y-3 text-left`,children:[u.added>0&&(0,I.jsxs)(`div`,{className:`card p-3 text-sm font-bold flex items-center gap-2`,children:[(0,I.jsx)(`span`,{className:`text-xl`,children:`⭐`}),` `,u.added,` new word`,u.added>1?`s`:``,` added to your review deck — they’ll come back tomorrow.`]}),u.r.wrong.length>0&&(0,I.jsxs)(`div`,{className:`card p-3`,children:[(0,I.jsx)(`div`,{className:`text-xs font-black uppercase tracking-wider text-ink3 mb-2`,children:`Watch out for`}),(0,I.jsx)(`div`,{className:`space-y-1.5`,children:u.r.wrong.slice(0,5).map((e,t)=>(0,I.jsxs)(`div`,{className:`flex items-center gap-2 text-sm`,children:[(0,I.jsx)(V,{text:e.es,size:`sm`}),(0,I.jsx)(`span`,{className:`font-black`,children:(0,I.jsx)(H,{text:e.es})}),(0,I.jsxs)(`span`,{className:`text-ink2 font-bold truncate`,children:[`— `,e.en]})]},t))})]})]})})}return(0,I.jsxs)(`div`,{className:`min-h-dvh bg-bg`,children:[(0,I.jsx)(Uu,{title:r.title,sub:`Week ${r.week} · Day ${r.day}`,onClose:a}),(0,I.jsxs)(`main`,{className:`max-w-2xl mx-auto px-4 pt-6 pb-36`,children:[(0,I.jsxs)(`div`,{className:`flex items-center gap-2 mb-3`,children:[(0,I.jsx)(vu,{kind:r.kind}),(0,I.jsx)(lu,{level:r.level})]}),(0,I.jsx)(`h1`,{className:`text-3xl font-black leading-tight`,children:r.title}),(0,I.jsxs)(`p`,{className:`mt-2 flex items-start gap-2 font-bold text-ink2`,children:[(0,I.jsx)(co,{className:`w-5 h-5 mt-0.5 text-brand-lip flex-none`}),` `,r.goal]}),(0,I.jsx)(Tu,{text:r.body,className:`mt-6`}),r.words.length>0&&(0,I.jsxs)(`section`,{className:`mt-10`,children:[(0,I.jsxs)(`h2`,{className:`text-xl font-black mb-3`,children:[`New words `,(0,I.jsxs)(`span`,{className:`text-ink3`,children:[`(`,r.words.length,`)`]})]}),(0,I.jsx)(`div`,{className:`grid sm:grid-cols-2 gap-2.5`,children:r.words.map(e=>(0,I.jsxs)(`div`,{className:`card p-3 flex items-center gap-3`,children:[(0,I.jsx)(V,{text:Zu(e.es),size:`md`}),(0,I.jsxs)(`div`,{className:`min-w-0`,children:[(0,I.jsx)(`div`,{className:`font-black text-lg leading-tight`,children:(0,I.jsx)(H,{text:e.es})}),(0,I.jsx)(`div`,{className:`text-sm font-bold text-ink2`,children:e.en}),e.note&&(0,I.jsx)(`div`,{className:`text-xs font-bold text-ink3`,children:e.note})]})]},e.es))})]}),r.phrases.length>0&&(0,I.jsxs)(`section`,{className:`mt-8`,children:[(0,I.jsx)(`h2`,{className:`text-xl font-black mb-3`,children:`Useful phrases`}),(0,I.jsx)(`div`,{className:`space-y-2`,children:r.phrases.map(e=>(0,I.jsx)(wu,{es:e.es,en:e.en},e.es))})]})]}),(0,I.jsx)(`footer`,{className:`fixed bottom-0 inset-x-0 z-20 bg-bg/95 backdrop-blur border-t-2 border-line safe-bottom`,children:(0,I.jsxs)(`div`,{className:`max-w-2xl mx-auto px-4 py-3 flex gap-3`,children:[n&&(0,I.jsx)(`button`,{type:`button`,className:`btn btn-secondary flex-1`,onClick:a,children:`Back`}),(0,I.jsxs)(`button`,{type:`button`,className:`btn btn-primary flex-[2]`,onClick:()=>s(`practice`),children:[(0,I.jsx)(aa,{className:`w-5 h-5`}),` `,n?`Practise`:`Start practice`]})]})})]})}function zd(){let e=Number(Qn().n),t=Sc.get(e),n=Jn(),r=Ld(`/path`),i=Tc(e),a=Cc.has(e),[o,s]=(0,v.useState)(`overview`),[c,l]=(0,v.useState)(0),[u,d]=(0,v.useState)(null),f=B(e=>e.progress),p=B(e=>e.stories),m=B(e=>e.cando),h=B(e=>e.toggleCando),g=B(e=>e.completeDay),_=B(e=>e.bumpStats),y=B(e=>e.settings.speaking),b=(0,v.useMemo)(()=>t?a?vc.filter(e=>e.level===t.level):t.lessons:[],[t,a]),x=(0,v.useMemo)(()=>o===`quiz`?fd(b,a?25:15,{speaking:y&&!Ad()}):[],[b,c,o===`quiz`]);if(!t)return(0,I.jsx)(br,{to:`/path`,replace:!0});let S=wc.find(e=>e.id===t.level);if(o===`quiz`)return(0,I.jsx)(Fd,{exercises:x,onExit:()=>s(`overview`),onFinish:e=>{let t=g(i,e.accuracy);_({seconds:e.seconds}),zu(t),d({r:e,xp:t.gained}),s(`done`)}},c);if(o===`done`&&u){let r=Ic(B.getState().progress,B.getState().startDate).next,i=u.r.accuracy>=.7;return(0,I.jsx)(Hu,{title:a?i?`¡Enhorabuena! ${t.level} done`:`${t.level} checkpoint done`:`Week ${e} complete!`,sub:a?i?`You’ve completed level ${t.level} — ${S.name}.`:`Review the tricky topics and try again for a higher score.`:`¡Una semana más! One more week behind you.`,xp:u.xp,accuracy:u.r.accuracy,seconds:u.r.seconds,mood:i?`cool`:`happy`,actions:(0,I.jsxs)(I.Fragment,{children:[r&&(0,I.jsxs)(`button`,{type:`button`,className:`btn btn-primary`,onClick:()=>n(r.kind===`lesson`?`/lesson/${r.id}`:`/week/${r.week}`,{replace:!0}),children:[`Next: `,r.title,` `,(0,I.jsx)(Yi,{className:`w-5 h-5`})]}),(0,I.jsx)(`button`,{type:`button`,className:`btn btn-secondary`,onClick:()=>n(`/`,{replace:!0}),children:`Back to today`})]}),children:a&&i&&(0,I.jsxs)(`div`,{className:`rounded-3xl border-4 p-5 text-center`,style:{borderColor:cu[t.level]},children:[(0,I.jsx)(ta,{className:`w-10 h-10 mx-auto`,style:{color:cu[t.level]}}),(0,I.jsx)(`div`,{className:`text-xs font-black uppercase tracking-widest text-ink3 mt-2`,children:`Certificado`}),(0,I.jsxs)(`div`,{className:`text-2xl font-black`,children:[`Nivel `,t.level]}),(0,I.jsxs)(`div`,{className:`font-bold text-ink2`,children:[S.name,` · `,(0,I.jsx)(`span`,{lang:`es`,children:S.es})]}),(0,I.jsxs)(`div`,{className:`text-sm font-bold text-ink3 mt-1`,children:[`Score `,Math.round(u.r.accuracy*100),`%`]})]})})}let C=!!f[i]?.done,ee=t.story,w=!!p[ee.id],te=t.lessons.reduce((e,t)=>e+t.words.length,0);return(0,I.jsxs)(`div`,{className:`min-h-dvh bg-bg`,children:[(0,I.jsx)(Uu,{title:a?`${t.level} checkpoint`:`Week ${e} review`,sub:`${t.es} · ${t.title}`,onClose:r}),(0,I.jsxs)(`main`,{className:`max-w-2xl mx-auto px-4 pt-6 pb-16 space-y-5`,children:[(0,I.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,I.jsx)(Ro,{mood:a?`cool`:`cheer`,size:84}),(0,I.jsxs)(`div`,{children:[(0,I.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,I.jsx)(lu,{level:t.level}),C&&(0,I.jsxs)(`span`,{className:`chip bg-ok-soft text-ok-ink`,children:[(0,I.jsx)(Gi,{className:`w-3.5 h-3.5`}),` Done · best `,Math.round((f[i]?.best??0)*100),`%`]})]}),(0,I.jsx)(`h1`,{className:`text-2xl font-black leading-tight mt-1`,children:a?`Show what you know: level ${t.level}`:`Great week! Let’s lock it in.`})]})]}),(0,I.jsxs)(Bd,{n:1,icon:(0,I.jsx)(Vi,{className:`w-6 h-6`}),title:`Read the story`,done:w,children:[(0,I.jsxs)(`p`,{className:`font-bold text-ink2`,children:[(0,I.jsx)(`span`,{lang:`es`,className:`font-black text-ink`,children:ee.title}),` `,`— tap any word you don’t know.`]}),(0,I.jsx)(di,{to:`/story/${ee.id}`,className:`btn btn-secondary mt-3 w-full`,children:w?`Read again`:`Read story`})]}),(0,I.jsxs)(Bd,{n:2,icon:(0,I.jsx)(Ba,{className:`w-6 h-6`}),title:a?`Level ${t.level} checkpoint`:`Week quiz`,done:C,children:[(0,I.jsx)(`p`,{className:`font-bold text-ink2`,children:a?`25 questions from all ${b.length} lessons of level ${t.level}.`:`15 mixed questions from this week’s 6 lessons.`}),(0,I.jsx)(`button`,{type:`button`,className:`btn btn-primary mt-3 w-full`,onClick:()=>{l(e=>e+1),s(`quiz`)},children:C?`Take it again`:`Start`})]}),(0,I.jsx)(Bd,{n:3,icon:(0,I.jsx)(Oa,{className:`w-6 h-6`}),title:`Can you do this?`,done:t.cando.every((t,n)=>m[`w${e}-${n}`]),children:(0,I.jsx)(`ul`,{className:`space-y-2`,children:t.cando.map((t,n)=>{let r=`w${e}-${n}`;return(0,I.jsx)(`li`,{children:(0,I.jsxs)(`button`,{type:`button`,onClick:()=>h(r),className:`w-full flex items-start gap-3 text-left font-bold`,"aria-pressed":!!m[r],children:[(0,I.jsx)(`span`,{className:P(`grid place-items-center w-6 h-6 rounded-lg border-2 flex-none mt-0.5`,m[r]?`bg-ok border-ok text-white`:`border-line2`),children:m[r]&&(0,I.jsx)(Gi,{className:`w-4 h-4`,strokeWidth:3})}),(0,I.jsx)(`span`,{className:P(m[r]?`text-ink`:`text-ink2`),children:t})]})},r)})})}),(0,I.jsxs)(di,{to:`/session/week?w=${e}`,className:`card card-press p-4 flex items-center gap-3`,children:[(0,I.jsx)(`span`,{className:`grid place-items-center w-12 h-12 rounded-2xl bg-vio-soft text-vio flex-none`,children:(0,I.jsx)(Wa,{className:`w-6 h-6`})}),(0,I.jsxs)(`span`,{className:`flex-1`,children:[(0,I.jsx)(`span`,{className:`block font-black`,children:`Extra practice`}),(0,I.jsxs)(`span`,{className:`block text-sm font-bold text-ink2`,children:[`Drill this week’s `,te,` words and phrases`]})]}),(0,I.jsx)(Yi,{className:`w-5 h-5 text-ink3`})]}),(0,I.jsxs)(`div`,{className:`text-sm font-bold text-ink3 text-center`,children:[(0,I.jsx)(H,{text:t.es,plain:!0}),` — `,t.title]})]})]})}function Bd({n:e,icon:t,title:n,done:r,children:i}){return(0,I.jsxs)(`section`,{className:P(`card p-4`,r&&`border-ok/50`),children:[(0,I.jsxs)(`div`,{className:`flex items-center gap-3 mb-3`,children:[(0,I.jsx)(`span`,{className:P(`grid place-items-center w-11 h-11 rounded-2xl flex-none`,r?`bg-ok text-white`:`bg-brand-soft text-brand-lip`),children:r?(0,I.jsx)(Gi,{className:`w-6 h-6`,strokeWidth:3}):t}),(0,I.jsxs)(`div`,{children:[(0,I.jsxs)(`div`,{className:`text-xs font-black uppercase tracking-wider text-ink3`,children:[`Step `,e]}),(0,I.jsx)(`div`,{className:`font-black text-lg leading-tight`,children:n})]})]}),i]})}var Vd=20;function Hd(){let e=B(e=>e.cards),t=Jn(),n=Ld(`/`),[r,i]=(0,v.useState)(null),[a,o]=(0,v.useState)([]),[s,c]=(0,v.useState)(null),l=Lc(e),u=Object.values(e),d=(e,t=!1)=>{let n=t?F(u).slice(0,12):l.slice(0,Vd);o(n),i(e)};return s?(0,I.jsx)(Hu,{title:`Review done!`,sub:`${s.count} card${s.count===1?``:`s`} reviewed. Spaced repetition will bring them back right on time.`,xp:s.xp,accuracy:s.accuracy,seconds:s.seconds,actions:(0,I.jsxs)(I.Fragment,{children:[Lc(B.getState().cards).length>0&&(0,I.jsx)(`button`,{type:`button`,className:`btn btn-primary`,onClick:()=>{c(null),i(null)},children:`Review more`}),(0,I.jsx)(`button`,{type:`button`,className:`btn btn-secondary`,onClick:()=>t(`/`,{replace:!0}),children:`Back to today`})]})}):r===`cards`&&a.length?(0,I.jsx)(Gd,{cards:a,onExit:()=>i(null),onDone:c}):r===`quiz`&&a.length?(0,I.jsx)(Kd,{cards:a,pool:u,onExit:()=>i(null),onDone:c}):(0,I.jsxs)(`div`,{className:`min-h-dvh bg-bg`,children:[(0,I.jsx)(Uu,{title:`Review`,sub:`Spaced repetition`,onClose:n}),(0,I.jsx)(`main`,{className:`max-w-xl mx-auto px-4 pt-8 pb-16 text-center`,children:u.length===0?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(Ro,{mood:`think`,size:120,className:`mx-auto`}),(0,I.jsx)(`h1`,{className:`text-2xl font-black mt-4`,children:`Nothing to review yet`}),(0,I.jsx)(`p`,{className:`text-ink2 font-bold mt-1`,children:`Finish a lesson — its words land here and come back just before you’d forget them.`}),(0,I.jsx)(`button`,{type:`button`,className:`btn btn-primary mt-6`,onClick:()=>t(`/`),children:`Go to today’s lesson`})]}):(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(Ro,{mood:l.length?`happy`:`cool`,size:120,className:`mx-auto`}),(0,I.jsx)(`h1`,{className:`text-2xl font-black mt-4`,children:l.length?`${l.length} word${l.length>1?`s`:``} to review`:`All caught up!`}),(0,I.jsx)(`p`,{className:`text-ink2 font-bold mt-1`,children:l.length?`A session is up to ${Vd} cards (~${Math.max(2,Math.round(Math.min(l.length,Vd)*.25))} min).`:`Next review: ${Ud(u)}. You can still practise.`}),(0,I.jsxs)(`div`,{className:`grid sm:grid-cols-2 gap-3 mt-8 text-left`,children:[(0,I.jsxs)(`button`,{type:`button`,className:`card card-press p-4 flex items-center gap-3`,onClick:()=>d(`cards`,!l.length),children:[(0,I.jsx)(`span`,{className:`grid place-items-center w-12 h-12 rounded-2xl bg-vio-soft text-vio flex-none`,children:(0,I.jsx)(wa,{className:`w-6 h-6`})}),(0,I.jsxs)(`span`,{children:[(0,I.jsx)(`span`,{className:`block font-black`,children:`Flashcards`}),(0,I.jsx)(`span`,{className:`block text-sm font-bold text-ink2`,children:`Recall, flip, rate yourself`})]})]}),(0,I.jsxs)(`button`,{type:`button`,className:`card card-press p-4 flex items-center gap-3`,onClick:()=>d(`quiz`,!l.length),children:[(0,I.jsx)(`span`,{className:`grid place-items-center w-12 h-12 rounded-2xl bg-ok-soft text-ok flex-none`,children:(0,I.jsx)(Oa,{className:`w-6 h-6`})}),(0,I.jsxs)(`span`,{children:[(0,I.jsx)(`span`,{className:`block font-black`,children:`Quiz mode`}),(0,I.jsx)(`span`,{className:`block text-sm font-bold text-ink2`,children:`Choose, listen and type`})]})]})]}),(0,I.jsxs)(`div`,{className:`mt-8 card p-4 text-left`,children:[(0,I.jsx)(`div`,{className:`text-xs font-black uppercase tracking-wider text-ink3 mb-2`,children:`Your deck`}),(0,I.jsx)(Wd,{cards:u})]})]})})]})}function Ud(e){let t=Math.min(...e.map(e=>e.due)),n=Math.max(0,Math.round((t-Date.now())/36e5));return n<1?`in less than an hour`:n<24?`in ${n} h`:`in ${Math.round(n/24)} day${n>=48?`s`:``}`}function Wd({cards:e}){let t=e.filter(e=>e.interval<7).length,n=e.filter(e=>e.interval>=7&&e.interval<21).length,r=e.filter(e=>e.interval>=21).length,i=Math.max(1,e.length);return(0,I.jsxs)(`div`,{children:[(0,I.jsxs)(`div`,{className:`flex h-4 rounded-full overflow-hidden bg-line`,children:[(0,I.jsx)(`span`,{style:{width:`${t/i*100}%`,background:`var(--fire)`}}),(0,I.jsx)(`span`,{style:{width:`${n/i*100}%`,background:`var(--info)`}}),(0,I.jsx)(`span`,{style:{width:`${r/i*100}%`,background:`var(--ok)`}})]}),(0,I.jsxs)(`div`,{className:`flex justify-between mt-2 text-sm font-bold text-ink2`,children:[(0,I.jsxs)(`span`,{children:[(0,I.jsx)(`b`,{className:`text-fire`,children:t}),` learning`]}),(0,I.jsxs)(`span`,{children:[(0,I.jsx)(`b`,{className:`text-info`,children:n}),` young`]}),(0,I.jsxs)(`span`,{children:[(0,I.jsx)(`b`,{className:`text-ok`,children:r}),` mastered`]})]})]})}function Gd({cards:e,onExit:t,onDone:n}){let[r,i]=(0,v.useState)(e),[a,o]=(0,v.useState)(0),[s,c]=(0,v.useState)(!1),l=B(e=>e.gradeCard),u=B(e=>e.addXP),d=B(e=>e.bumpStats),f=B(e=>e.settings.autoplay),p=B(e=>e.cards),m=(0,v.useRef)(Date.now()),h=(0,v.useRef)(new Set),g=(0,v.useMemo)(()=>e.map(e=>e.reps>=3&&Math.random()<.5),[e]),_=r[a],y=g[e.indexOf(_)]??!1,b=p[_?.id]??_;(0,v.useEffect)(()=>{if(_&&!y&&f){let e=setTimeout(()=>ll(Zu(_.es)),200);return()=>clearTimeout(e)}},[_,y,f]),(0,v.useEffect)(()=>()=>dl(),[]);let x=()=>{s||(Ql.flip(),c(!0),y&&f&&ll(Zu(_.es)))},S=t=>{l(_.id,t);let s=r;if(t===0&&!h.current.has(_.id)&&(h.current.add(_.id),s=[...r,_],i(s)),a+1>=s.length){let t=e.length,r=u(Math.min(30,t+2)),i=Math.round((Date.now()-m.current)/1e3);d({seconds:i}),zu(r),n({xp:r.gained,count:t,seconds:i});return}o(a+1),c(!1)};if((0,v.useEffect)(()=>{let e=e=>{(e.key===` `||e.key===`Enter`)&&(e.preventDefault(),s||x()),s&&[`1`,`2`,`3`,`4`].includes(e.key)&&S(Number(e.key)-1)};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)}),!_)return null;let C=s?Rl(_.es,1)[0]:void 0;return(0,I.jsxs)(`div`,{className:`min-h-dvh bg-bg flex flex-col`,children:[(0,I.jsx)(Uu,{title:`Flashcards`,sub:`${Math.min(a+1,r.length)} / ${r.length}`,onClose:t}),(0,I.jsx)(`div`,{className:`max-w-xl w-full mx-auto px-4 pt-4`,children:(0,I.jsx)(U,{value:a/r.length,color:`var(--vio)`})}),(0,I.jsxs)(`main`,{className:`flex-1 max-w-xl w-full mx-auto px-4 py-6 flex flex-col`,children:[(0,I.jsxs)(`button`,{type:`button`,onClick:x,className:P(`card flex-1 min-h-[19rem] p-6 flex flex-col items-center justify-center text-center gap-3 anim-pop`,!s&&`cursor-pointer`),children:[!y||s?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,I.jsx)(V,{text:Zu(_.es),size:`md`,variant:`info`}),(0,I.jsx)(`div`,{className:`text-3xl sm:text-4xl font-black`,children:(0,I.jsx)(H,{text:_.es})})]}),s&&(0,I.jsx)(Hl,{word:je(Zu(_.es)).split(/[ ,]/)[0]})]}):null,(y||s)&&(0,I.jsx)(`div`,{className:P(`font-black`,s&&!y?`text-xl text-ink2`:`text-3xl`),children:_.en}),!s&&(0,I.jsx)(`div`,{className:`text-sm font-bold text-ink3 mt-4`,children:y?`Say it in Spanish, then tap to check`:`What does it mean? Tap to reveal`}),C&&(0,I.jsxs)(`div`,{className:`mt-3 rounded-2xl bg-bg2 px-4 py-2 text-left`,children:[(0,I.jsx)(`div`,{className:`font-bold`,children:(0,I.jsx)(H,{text:C.es})}),(0,I.jsx)(`div`,{className:`text-sm text-ink2 font-bold`,children:C.en})]})]},`${_.id}-${a}`),(0,I.jsx)(`div`,{className:`pt-5 safe-bottom`,children:s?(0,I.jsx)(`div`,{className:`grid grid-cols-4 gap-2`,children:[{g:0,label:`Again`,cls:`btn-bad`},{g:1,label:`Hard`,cls:`btn-secondary`},{g:2,label:`Good`,cls:`btn-ok`},{g:3,label:`Easy`,cls:`btn-info`}].map(({g:e,label:t,cls:n})=>(0,I.jsxs)(`button`,{type:`button`,className:P(`btn btn-sm flex-col gap-0 px-1 min-h-[3.6rem]`,n),onClick:()=>S(e),children:[(0,I.jsx)(`span`,{children:t}),(0,I.jsx)(`span`,{className:`text-[0.7rem] normal-case tracking-normal opacity-80`,children:cs(b,e)})]},e))}):(0,I.jsxs)(`button`,{type:`button`,className:`btn btn-primary w-full`,onClick:x,children:[(0,I.jsx)(Ka,{className:`w-5 h-5`}),` Show answer`]})})]})]})}function Kd({cards:e,pool:t,onExit:n,onDone:r}){let i=B(e=>e.gradeCard),a=B(e=>e.addXP),o=B(e=>e.bumpStats),s=(0,v.useMemo)(()=>pd(e,t.map(e=>({es:e.es,en:e.en}))),[e,t]);return(0,I.jsx)(Fd,{exercises:s,retryWrong:!1,onExit:n,onAnswer:(e,t)=>{let n=`cardId`in e?e.cardId:void 0;n&&i(n,t?2:0)},onFinish:t=>{let n=a(Math.min(30,t.correct+2));o({seconds:t.seconds}),zu(n),r({xp:n.gained,count:e.length,seconds:t.seconds,accuracy:t.accuracy})}})}function qd({to:e,icon:t,title:n,sub:r,tone:i,badge:a}){return(0,I.jsxs)(di,{to:e,className:`card card-press p-4 flex items-center gap-3`,children:[(0,I.jsx)(`span`,{className:`grid place-items-center w-12 h-12 rounded-2xl flex-none`,style:{background:`var(--${i}-soft)`,color:`var(--${i})`},children:t}),(0,I.jsxs)(`span`,{className:`min-w-0 flex-1`,children:[(0,I.jsx)(`span`,{className:`block font-black`,children:n}),(0,I.jsx)(`span`,{className:`block text-sm font-bold text-ink2`,children:r})]}),a,(0,I.jsx)(Yi,{className:`w-5 h-5 text-ink3 flex-none`})]})}function Jd(){let e=B(e=>e.cards),t=B(e=>e.mistakes),n=Lc(e).length,r=Object.keys(t).length;return(0,I.jsxs)(`div`,{children:[(0,I.jsx)(ou,{title:`Practice`,sub:`Extra training — every session earns XP and counts for your streak.`}),(0,I.jsx)(`h2`,{className:`text-sm font-black uppercase tracking-wider text-ink3 mb-2`,children:`Memory`}),(0,I.jsxs)(`div`,{className:`grid sm:grid-cols-2 gap-3 mb-6`,children:[(0,I.jsx)(qd,{to:`/review`,icon:(0,I.jsx)(wa,{className:`w-6 h-6`}),title:`Review flashcards`,sub:n?`${n} due now`:`Spaced repetition deck`,tone:`vio`,badge:n?(0,I.jsx)(`span`,{className:`chip bg-vio text-white`,children:n}):void 0}),(0,I.jsx)(qd,{to:`/session/mistakes`,icon:(0,I.jsx)(po,{className:`w-6 h-6`}),title:`Fix my mistakes`,sub:r?`${r} word${r>1?`s`:``} to fix`:`Nothing to fix right now`,tone:`bad`,badge:r?(0,I.jsx)(`span`,{className:`chip bg-bad text-white`,children:r}):void 0}),(0,I.jsx)(qd,{to:`/session/words`,icon:(0,I.jsx)(Wa,{className:`w-6 h-6`}),title:`Word drill`,sub:`Random words you’ve learned`,tone:`ok`}),(0,I.jsx)(qd,{to:`/numbers`,icon:(0,I.jsx)(va,{className:`w-6 h-6`}),title:`Numbers trainer`,sub:`Hear a number, type it`,tone:`brand`})]}),(0,I.jsx)(`h2`,{className:`text-sm font-black uppercase tracking-wider text-ink3 mb-2`,children:`Listening & speaking`}),(0,I.jsxs)(`div`,{className:`grid sm:grid-cols-2 gap-3 mb-6`,children:[(0,I.jsx)(qd,{to:`/pronunciation`,icon:(0,I.jsx)(zi,{className:`w-6 h-6`}),title:`Pronunciation lab`,sub:`Sounds, minimal pairs, stress, tongue twisters`,tone:`info`}),(0,I.jsx)(qd,{to:`/session/listening`,icon:(0,I.jsx)(sa,{className:`w-6 h-6`}),title:`Listening drill`,sub:`Listen, choose and write`,tone:`info`}),(0,I.jsx)(qd,{to:`/session/speaking`,icon:(0,I.jsx)(Ia,{className:`w-6 h-6`}),title:`Speaking drill`,sub:Gu?`Say phrases, get a score`:`Needs Chrome, Edge or Safari`,tone:`fire`}),(0,I.jsx)(qd,{to:`/stories`,icon:(0,I.jsx)(Vi,{className:`w-6 h-6`}),title:`Stories`,sub:`26 graded stories with audio`,tone:`fire`})]}),(0,I.jsx)(`h2`,{className:`text-sm font-black uppercase tracking-wider text-ink3 mb-2`,children:`Grammar`}),(0,I.jsxs)(`div`,{className:`grid sm:grid-cols-2 gap-3`,children:[(0,I.jsx)(qd,{to:`/train/verbs`,icon:(0,I.jsx)(Ha,{className:`w-6 h-6`}),title:`Verb trainer`,sub:`Conjugation drills by tense`,tone:`vio`}),(0,I.jsx)(qd,{to:`/verbs`,icon:(0,I.jsx)(oo,{className:`w-6 h-6`}),title:`Verb conjugator`,sub:`Every tense of 350+ verbs`,tone:`vio`}),(0,I.jsx)(qd,{to:`/grammar`,icon:(0,I.jsx)(Vi,{className:`w-6 h-6`}),title:`Grammar reference`,sub:`All explanations, A1 → B1`,tone:`ok`})]})]})}var Yd={mistakes:`Fix your mistakes`,listening:`Listening drill`,speaking:`Speaking drill`,week:`Week practice`,words:`Word drill`};function Xd(){let{kind:e=`words`}=Qn(),[t]=_i(),n=Jn(),r=Ld(`/practice`),i=B(e=>e.progress),a=B(e=>e.mistakes),o=B(e=>e.cards),s=B(e=>e.settings.speaking),c=B(e=>e.addXP),l=B(e=>e.bumpStats),u=B(e=>e.clearMistake),[d,f]=(0,v.useState)(0),[p,m]=(0,v.useState)(null),h=(0,v.useMemo)(()=>{let n=vc.filter(e=>i[e.id]?.done).flatMap(e=>e.phrases),r=Object.values(o).map(e=>({es:e.es,en:e.en})),c={speaking:s&&!Ad()};switch(e){case`mistakes`:return md(Object.values(a).sort((e,t)=>t.n-e.n).slice(0,15),c);case`listening`:{let e=[];for(let t of F(r).slice(0,5))e.push(X(t,r));for(let t of F(n.filter(e=>se(e.es).length<=7)).slice(0,5))e.push(sd(t));return F(e.filter(e=>!!e))}case`speaking`:return Gu?F([...n,...r.filter(e=>se(e.es).length>=2)]).slice(0,8).map(e=>cd(e)):[];case`week`:{let e=Sc.get(Number(t.get(`w`)));return e?fd(e.lessons,12,c):[]}default:return md(F(r).slice(0,12),c)}},[e,d]);return p?(0,I.jsx)(Hu,{title:`Session complete!`,sub:Yd[e],xp:p.xp,accuracy:p.r.accuracy,seconds:p.r.seconds,actions:(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`button`,{type:`button`,className:`btn btn-primary`,onClick:()=>{m(null),f(e=>e+1)},children:`Go again`}),(0,I.jsx)(`button`,{type:`button`,className:`btn btn-secondary`,onClick:()=>n(`/practice`,{replace:!0}),children:`Back to practice`})]})}):h.length?(0,I.jsx)(Fd,{exercises:h,onExit:r,onAnswer:(t,n)=>{e===`mistakes`&&n&&t.kind!==`match`&&u(t.item.es)},onFinish:e=>{let t=c(Math.min(20,e.correct+2));l({seconds:e.seconds}),zu(t),m({r:e,xp:t.gained})}},d):(0,I.jsx)(`div`,{className:`min-h-dvh bg-bg grid place-items-center px-4`,children:(0,I.jsxs)(hu,{title:e===`speaking`&&!Gu?`Speech recognition isn’t available here`:e===`mistakes`?`No mistakes to fix!`:`Nothing to practise yet`,art:(0,I.jsx)(Ro,{mood:e===`mistakes`?`cool`:`think`,size:110}),children:[e===`speaking`&&!Gu?`Try Chrome, Edge or Safari. You can still practise pronunciation with the recorder in the Pronunciation lab.`:e===`mistakes`?`Words you get wrong will show up here so you can fix them.`:`Finish a few lessons first — then come back here.`,(0,I.jsx)(`div`,{className:`mt-6`,children:(0,I.jsx)(`button`,{type:`button`,className:`btn btn-primary`,onClick:r,children:`Back`})})]})})}function Zd(){let[e,t]=(0,v.useState)(``),[n,r]=(0,v.useState)(`all`),[i,a]=(0,v.useState)(!1),o=(0,v.useMemo)(()=>{let t=D(e);return ht.filter(e=>(n===`all`||e.level===n)&&(!i||vt(e).some(e=>e!==`reflexive`&&e!==`spelling change`))).filter(e=>!t||D(e.inf).includes(t)||D(e.en).includes(t)).sort((e,n)=>t?Number(!D(e.inf).startsWith(t))-Number(!D(n.inf).startsWith(t)):0)},[e,n,i]);return(0,I.jsxs)(`div`,{children:[(0,I.jsx)(ou,{title:`Verb conjugator`,sub:`${ht.length} verbs · every tense from A1 to B1`,back:!0,right:(0,I.jsxs)(di,{to:`/train/verbs`,className:`btn btn-primary btn-sm`,children:[(0,I.jsx)(Ha,{className:`w-4 h-4`}),` Train`]})}),(0,I.jsxs)(`label`,{className:`relative block mb-3`,children:[(0,I.jsx)(Ja,{className:`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ink3`}),(0,I.jsx)(`input`,{className:`input pl-12`,placeholder:`Search a verb in Spanish or English…`,value:e,onChange:e=>t(e.target.value),lang:`es`})]}),(0,I.jsxs)(`div`,{className:`flex flex-wrap gap-2 mb-5`,children:[[`all`,`A1`,`A2`,`B1`].map(e=>(0,I.jsx)(`button`,{type:`button`,onClick:()=>r(e),className:P(`chip border-2 py-1.5 px-3`,n===e?`bg-ink text-bg border-ink`:`bg-card text-ink2 border-line`),children:e===`all`?`All levels`:e},e)),(0,I.jsx)(`button`,{type:`button`,onClick:()=>a(!i),className:P(`chip border-2 py-1.5 px-3`,i?`bg-bad text-white border-bad`:`bg-card text-ink2 border-line`),children:`Irregular only`})]}),(0,I.jsxs)(`ul`,{className:`card divide-y-2 divide-line overflow-hidden`,children:[o.slice(0,300).map(e=>(0,I.jsx)(`li`,{children:(0,I.jsxs)(di,{to:`/verbs/${encodeURIComponent(e.inf)}`,className:`flex items-center gap-3 px-4 py-3 hover:bg-bg2`,children:[(0,I.jsxs)(`div`,{className:`min-w-0 flex-1`,children:[(0,I.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,I.jsx)(`span`,{lang:`es`,className:`font-black text-lg`,children:e.inf}),(0,I.jsx)(lu,{level:e.level})]}),(0,I.jsx)(`div`,{className:`text-sm font-bold text-ink2 truncate`,children:e.en}),(0,I.jsx)(`div`,{className:`flex flex-wrap gap-1 mt-1`,children:vt(e).slice(0,3).map(e=>(0,I.jsx)(`span`,{className:`chip bg-bg2 text-ink3 text-[0.7rem] py-0`,children:e},e))})]}),(0,I.jsx)(Yi,{className:`w-5 h-5 text-ink3`})]})},e.inf)),!o.length&&(0,I.jsx)(`li`,{className:`p-6 text-center font-bold text-ink2`,children:`No verb found. Try the infinitive, e.g. “tener”.`})]})]})}var Qd=[{level:`A1`,title:`A1 — the present`},{level:`A2`,title:`A2 — past, future & commands`},{level:`B1`,title:`B1 — conditional & subjunctive`},{level:`B2`,title:`More (B2)`}];function $d(){let{inf:e=``}=Qn(),t=decodeURIComponent(e),n=_t(t),r=(0,v.useMemo)(()=>{try{return st(t)}catch{return null}},[t]),i=(0,v.useMemo)(()=>r?ft(r):{},[r]),[a,o]=(0,v.useState)(!1);if(!r)return(0,I.jsx)(ou,{title:`Verb not found`,back:`/verbs`});let s=n?vt(n):[];return(0,I.jsxs)(`div`,{children:[(0,I.jsx)(ou,{back:!0,title:(0,I.jsxs)(`span`,{className:`flex items-center gap-3`,children:[(0,I.jsx)(V,{text:t,size:`md`,variant:`brand`}),(0,I.jsx)(`span`,{lang:`es`,children:t})]}),sub:n?.en,right:(0,I.jsxs)(di,{to:`/train/verbs?verb=${encodeURIComponent(t)}`,className:`btn btn-primary btn-sm`,children:[(0,I.jsx)(Ha,{className:`w-4 h-4`}),` Train`]})}),(0,I.jsxs)(`div`,{className:`flex flex-wrap gap-1.5 mb-4`,children:[n&&(0,I.jsx)(lu,{level:n.level}),s.map(e=>(0,I.jsx)(`span`,{className:P(`chip`,e===`irregular`?`bg-bad-soft text-bad-ink`:`bg-bg2 text-ink2`),children:e},e))]}),(0,I.jsxs)(`div`,{className:`grid grid-cols-2 gap-3 mb-6`,children:[(0,I.jsx)(ef,{label:`Gerundio (-ing)`,value:r.ger}),(0,I.jsx)(ef,{label:`Participio`,value:r.part})]}),(0,I.jsxs)(`p`,{className:`text-sm font-bold text-ink3 mb-5`,children:[(0,I.jsx)(`span`,{className:`es-hl`,children:`Red`}),` = irregular form. Tap any form to hear it.`]}),Qd.map(e=>{let t=Ie.filter(t=>t.level===e.level);return e.level===`B2`&&!a?(0,I.jsxs)(`button`,{type:`button`,onClick:()=>o(!0),className:`btn btn-secondary w-full mt-2`,children:[(0,I.jsx)(qi,{className:`w-4 h-4`}),` Show B2 tenses`]},e.level):(0,I.jsxs)(`section`,{className:`mb-8`,children:[(0,I.jsx)(`h2`,{className:`text-lg font-black mb-3`,children:e.title}),(0,I.jsx)(`div`,{className:`grid sm:grid-cols-2 gap-3`,children:t.map(e=>(0,I.jsx)(tf,{id:e.id,forms:r.forms[e.id],irregular:i[e.id]},e.id))})]},e.level)})]})}function ef({label:e,value:t}){return(0,I.jsxs)(`button`,{type:`button`,onClick:()=>ll(t),className:`card p-3 text-left`,children:[(0,I.jsx)(`div`,{className:`text-xs font-black uppercase tracking-wider text-ink3`,children:e}),(0,I.jsx)(`div`,{lang:`es`,className:`font-black text-lg`,children:t})]})}function tf({id:e,forms:t,irregular:n}){let r=Ie.find(t=>t.id===e),i=e===`imp`||e===`impneg`;return(0,I.jsxs)(`div`,{className:`card overflow-hidden`,children:[(0,I.jsxs)(`div`,{className:`px-4 pt-3 pb-2 border-b-2 border-line bg-bg2`,children:[(0,I.jsx)(`div`,{className:`flex items-center gap-2`,children:(0,I.jsx)(`span`,{lang:`es`,className:`font-black`,children:r.es})}),(0,I.jsxs)(`div`,{className:`text-xs font-bold text-ink3`,children:[r.en,` · e.g. `,(0,I.jsx)(`span`,{lang:`es`,children:r.example})]})]}),(0,I.jsx)(`table`,{className:`w-full text-[0.98rem]`,children:(0,I.jsx)(`tbody`,{children:t.map((e,t)=>e?(0,I.jsxs)(`tr`,{className:`border-t border-line first:border-t-0`,children:[(0,I.jsx)(`td`,{className:`pl-4 pr-2 py-1.5 text-ink3 font-bold text-sm whitespace-nowrap`,children:i?Fe[t]:Ne[t]}),(0,I.jsx)(`td`,{className:`pr-3 py-1.5 w-full`,children:(0,I.jsx)(`button`,{type:`button`,lang:`es`,onClick:()=>ll(e),className:P(`font-black text-left hover:underline`,n?.[t]&&`es-hl`),children:e})})]},t):null)})})]})}var nf=`ser.estar.tener.haber.hacer.ir.venir.poder.querer.decir.ver.dar.saber.conocer.hablar.vivir.comer.trabajar.salir.poner.llegar.pensar.volver.pedir.dormir.jugar.empezar.seguir.traer.oír.leer.escribir.llamarse.levantarse.gustar.necesitar.encontrar.sentir.conducir.creer`.split(`.`),rf=new Set(`ser.estar.ir.haber.tener.venir.poner.salir.hacer.decir.traer.caer.oír.ver.dar.saber.caber.poder.querer.andar.valer.conducir.traducir.pedir.dormir.sentir.jugar.seguir.morir.volver.reír.construir.leer`.split(`.`));function af(e){let t=[`pres`];return e>=11&&t.push(`perf`),e>=12&&t.push(`pret`),e>=13&&t.push(`impf`),e>=15&&t.push(`imp`),e>=16&&t.push(`fut`),e>=17&&t.push(`cond`),e>=18&&t.push(`subj`),e>=19&&t.push(`impneg`),e>=21&&t.push(`plus`),e>=22&&t.push(`impsubj`),e>=26&&t.push(`subjp`,`futp`),t}function of(){let[e]=_i(),t=e.get(`verb`),n=Ic(B(e=>e.progress),B(e=>e.startDate)).next?.week??26,r=Ld(`/practice`),[i,a]=(0,v.useState)(()=>t?Ie.filter(e=>e.level!==`B2`).map(e=>e.id):af(n)),[o,s]=(0,v.useState)(t?`one`:`top`),[c,l]=(0,v.useState)(10),[u,d]=(0,v.useState)(null),f=(0,v.useMemo)(()=>{let e=n<=9?[`A1`]:n<=17?[`A1`,`A2`]:[`A1`,`A2`,`B1`];switch(o){case`one`:return t?[t]:nf;case`top`:return nf;case`level`:return ht.filter(t=>e.includes(t.level)).map(e=>e.inf);case`irregular`:return[...rf];default:return ht.map(e=>e.inf)}},[o,t,n]),p=()=>{let e=[],t=0;for(;e.length<c&&t++<500;){let t=ko(f),n=ko(i),r=st(t),a=n===`imp`||n===`impneg`?1+Math.floor(Math.random()*5):Math.floor(Math.random()*6),o=r.forms[n][a];o&&!e.some(e=>e.inf===t&&e.tense===n&&e.p===a)&&e.push({inf:t,tense:n,p:a,answer:o})}d(F(e))};return u?(0,I.jsx)(sf,{questions:u,onExit:()=>d(null),onAgain:p}):(0,I.jsxs)(`div`,{className:`min-h-dvh bg-bg`,children:[(0,I.jsx)(Uu,{title:`Verb trainer`,sub:`Type the right form`,onClose:r}),(0,I.jsxs)(`main`,{className:`max-w-xl mx-auto px-4 pt-6 pb-16 space-y-6`,children:[(0,I.jsxs)(`section`,{children:[(0,I.jsx)(`h2`,{className:`font-black mb-2`,children:`Tenses`}),(0,I.jsx)(`div`,{className:`flex flex-wrap gap-2`,children:Ie.map(e=>{let t=i.includes(e.id);return(0,I.jsxs)(`button`,{type:`button`,onClick:()=>a(t?i.filter(t=>t!==e.id):[...i,e.id]),className:P(`chip border-2 py-1.5 px-3 text-sm`,t?`bg-vio text-white border-vio`:`bg-card text-ink2 border-line`),children:[(0,I.jsx)(`span`,{lang:`es`,children:e.es}),(0,I.jsx)(`span`,{className:`opacity-70`,children:e.level})]},e.id)})}),(0,I.jsxs)(`p`,{className:`text-xs font-bold text-ink3 mt-2`,children:[`Pre-selected: the tenses you’ve reached in your plan (week `,n,`).`]})]}),(0,I.jsxs)(`section`,{children:[(0,I.jsx)(`h2`,{className:`font-black mb-2`,children:`Verbs`}),(0,I.jsx)(`div`,{className:`seg flex-wrap`,children:[...t?[[`one`,t]]:[],[`top`,`Top 40`],[`level`,`My level`],[`irregular`,`Irregular`],[`all`,`All`]].map(([e,t])=>(0,I.jsx)(`button`,{type:`button`,"aria-pressed":o===e,onClick:()=>s(e),children:t},e))})]}),(0,I.jsxs)(`section`,{children:[(0,I.jsx)(`h2`,{className:`font-black mb-2`,children:`Questions`}),(0,I.jsx)(`div`,{className:`seg`,children:[10,20,30].map(e=>(0,I.jsx)(`button`,{type:`button`,"aria-pressed":c===e,onClick:()=>l(e),children:e},e))})]}),(0,I.jsx)(`button`,{type:`button`,className:`btn btn-primary w-full`,disabled:!i.length,onClick:p,children:`Start`})]})]})}function sf({questions:e,onExit:t,onAgain:n}){let r=Jn(),i=B(e=>e.addXP),a=B(e=>e.bumpStats),[o,s]=(0,v.useState)(0),[c,l]=(0,v.useState)(``),[u,d]=(0,v.useState)(`idle`),[f,p]=(0,v.useState)(null),[m,h]=(0,v.useState)(0),[g,_]=(0,v.useState)(null),y=(0,v.useRef)(null),b=(0,v.useRef)(Date.now()),x=(0,v.useRef)(()=>{}),S=e[o];if((0,v.useEffect)(()=>{if(u===`idle`||g)return;let e=e=>{e.key===`Enter`&&(e.preventDefault(),x.current())};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[u,g]),g)return(0,I.jsx)(Hu,{title:`Verbs trained!`,sub:`${m} of ${e.length} correct`,xp:g.xp,accuracy:m/e.length,seconds:g.seconds,actions:(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`button`,{type:`button`,className:`btn btn-primary`,onClick:()=>{_(null),n()},children:`New round`}),(0,I.jsx)(`button`,{type:`button`,className:`btn btn-secondary`,onClick:()=>r(`/practice`,{replace:!0}),children:`Back to practice`})]})});let C=Le[S.tense],ee=S.tense===`imp`||S.tense===`impneg`,w=ee?Fe[S.p]:Ne[S.p],te=[S.answer,S.answer.replace(/^(me|te|se|nos|os) /,``),S.answer.replace(/^no /,``)],T=()=>{if(u!==`idle`){E();return}if(!c.trim())return;let{verdict:e}=Ae(c,[S.answer]),t=Ae(c,te).verdict,n=e!==`wrong`||t===`exact`;d(n?`ok`:`bad`),p(n&&e===`accent`?`Watch the accents!`:null),n?(Ql.correct(),h(e=>e+1)):Ql.wrong(),a({exercises:1,correct:+!!n}),ll(S.answer)},E=()=>{if(o+1>=e.length){let e=i(Math.min(30,m+2)),t=Math.round((Date.now()-b.current)/1e3);a({seconds:t}),zu(e),_({xp:e.gained,seconds:t});return}s(o+1),l(``),d(`idle`),p(null),setTimeout(()=>y.current?.focus(),50)};return x.current=E,(0,I.jsxs)(`div`,{className:`min-h-dvh bg-bg flex flex-col`,children:[(0,I.jsx)(Uu,{title:`Verb trainer`,sub:`${o+1} / ${e.length}`,onClose:t}),(0,I.jsx)(`div`,{className:`max-w-xl w-full mx-auto px-4 pt-4`,children:(0,I.jsx)(U,{value:o/e.length,color:`var(--vio)`})}),(0,I.jsxs)(`main`,{className:`flex-1 max-w-xl w-full mx-auto px-4 py-8`,children:[(0,I.jsxs)(`div`,{className:`card p-5 text-center`,children:[(0,I.jsxs)(`div`,{className:`flex items-center justify-center gap-2`,children:[(0,I.jsx)(V,{text:S.inf,size:`sm`}),(0,I.jsx)(`span`,{lang:`es`,className:`text-3xl font-black`,children:S.inf})]}),(0,I.jsx)(`div`,{className:`text-ink2 font-bold`,children:_t(S.inf)?.en}),(0,I.jsxs)(`div`,{className:`flex flex-wrap justify-center gap-2 mt-4`,children:[(0,I.jsx)(`span`,{className:`chip bg-vio-soft text-vio text-sm`,lang:`es`,children:C.es}),(0,I.jsx)(`span`,{className:`chip bg-brand-soft text-brand-soft-ink text-sm`,lang:`es`,children:w})]}),(0,I.jsx)(`div`,{className:`text-xs font-bold text-ink3 mt-2`,children:C.en})]}),(0,I.jsx)(`input`,{ref:y,autoFocus:!0,lang:`es`,className:P(`input mt-6 text-xl text-center`,u===`ok`&&`border-ok!`,u===`bad`&&`border-bad!`),placeholder:ee?`command…`:`${w.split(` `)[0]} …`,value:c,disabled:u!==`idle`,autoComplete:`off`,autoCorrect:`off`,autoCapitalize:`off`,spellCheck:!1,onChange:e=>l(e.target.value),onKeyDown:e=>e.key===`Enter`&&T()}),(0,I.jsx)(`div`,{className:`mt-3 flex justify-center`,children:(0,I.jsx)(pu,{inputRef:y,value:c,onChange:l})}),u!==`idle`&&(0,I.jsxs)(`div`,{className:P(`mt-6 rounded-2xl p-4 flex items-center gap-3 anim-pop`,u===`ok`?`bg-ok-soft text-ok-ink`:`bg-bad-soft text-bad-ink`),children:[u===`ok`?(0,I.jsx)(Gi,{className:`w-7 h-7`,strokeWidth:3}):(0,I.jsx)(To,{className:`w-7 h-7`,strokeWidth:3}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`div`,{className:`font-black text-lg`,lang:`es`,children:S.answer}),f&&(0,I.jsx)(`div`,{className:`text-sm font-bold`,children:f})]})]})]}),(0,I.jsx)(`footer`,{className:`sticky bottom-0 bg-bg border-t-2 border-line safe-bottom`,children:(0,I.jsx)(`div`,{className:`max-w-xl mx-auto px-4 py-3`,children:(0,I.jsx)(`button`,{type:`button`,className:P(`btn w-full`,u===`idle`?`btn-primary`:u===`ok`?`btn-ok`:`btn-bad`),disabled:u===`idle`&&!c.trim(),onClick:T,children:u===`idle`?`Check`:`Continue`})})})]})}function cf(e=12){let[t,n]=(0,v.useState)(`idle`),[r,i]=(0,v.useState)(null),a=(0,v.useRef)(null),o=(0,v.useRef)([]),s=(0,v.useRef)(void 0);(0,v.useEffect)(()=>()=>{window.clearTimeout(s.current),a.current?.state===`recording`&&a.current.stop()},[]),(0,v.useEffect)(()=>()=>void(r&&URL.revokeObjectURL(r)),[r]);let c=async()=>{if(!navigator.mediaDevices?.getUserMedia||typeof MediaRecorder>`u`){n(`unsupported`);return}try{let t=await navigator.mediaDevices.getUserMedia({audio:!0}),r=new MediaRecorder(t);o.current=[],r.ondataavailable=e=>{e.data.size&&o.current.push(e.data)},r.onstop=()=>{t.getTracks().forEach(e=>e.stop());let e=new Blob(o.current,{type:r.mimeType||`audio/webm`});i(URL.createObjectURL(e)),n(`idle`)},r.start(),a.current=r,n(`recording`),s.current=window.setTimeout(()=>l(),e*1e3)}catch{n(`denied`)}},l=()=>{window.clearTimeout(s.current),a.current?.state===`recording`&&a.current.stop()};return{state:t,url:r,start:c,stop:l,play:()=>{r&&new Audio(r).play()}}}var lf=[[`sounds`,`Sounds`],[`pairs`,`Pairs`],[`stress`,`Stress`],[`twisters`,`Twisters`],[`speak`,`Speak`]];function uf(){let[e,t]=(0,v.useState)(`sounds`);return(0,I.jsxs)(`div`,{children:[(0,I.jsx)(ou,{title:`Pronunciation lab`,sub:`Castilian Spanish, sound by sound`,back:!0}),(0,I.jsx)(`div`,{className:`seg mb-6 overflow-x-auto no-scrollbar`,children:lf.map(([n,r])=>(0,I.jsx)(`button`,{type:`button`,"aria-pressed":e===n,onClick:()=>t(n),className:`whitespace-nowrap`,children:r},n))}),e===`sounds`&&(0,I.jsx)(df,{}),e===`pairs`&&(0,I.jsx)(ff,{}),e===`stress`&&(0,I.jsx)(mf,{}),e===`twisters`&&(0,I.jsx)(hf,{}),e===`speak`&&(0,I.jsx)(vf,{})]})}function df(){let e=B(e=>e.settings.tipsDe),t=B(e=>e.settings.tipsAr);return(0,I.jsxs)(`div`,{className:`space-y-3`,children:[(0,I.jsx)(`p`,{className:`text-ink2 font-bold`,children:`Tap any example to hear it. Use the turtle for slow motion.`}),nu.map(n=>(0,I.jsxs)(`section`,{className:`card p-4`,children:[(0,I.jsxs)(`div`,{className:`flex items-start gap-3`,children:[(0,I.jsx)(`span`,{lang:`es`,className:`grid place-items-center min-w-14 h-14 px-2 rounded-2xl bg-brand text-brand-ink text-xl font-black flex-none`,children:n.letters.split(`,`)[0].split(` `)[0]}),(0,I.jsxs)(`div`,{className:`min-w-0 flex-1`,children:[(0,I.jsxs)(`div`,{className:`flex flex-wrap items-baseline gap-x-2`,children:[(0,I.jsx)(`span`,{lang:`es`,className:`font-black text-lg`,children:n.letters}),(0,I.jsx)(`span`,{className:`text-sm font-bold text-ink3`,children:n.ipa})]}),(0,I.jsx)(`div`,{className:`font-bold text-ink2`,children:n.like})]})]}),(0,I.jsxs)(`div`,{className:`flex flex-wrap gap-2 mt-3`,children:[n.examples.map(e=>(0,I.jsx)(`button`,{type:`button`,lang:`es`,onClick:()=>ll(e),className:`tile text-base py-1.5`,children:e},e)),(0,I.jsx)(V,{text:n.examples.slice(0,3).join(`, `),slow:!0,size:`md`})]}),n.tip&&(0,I.jsxs)(`div`,{className:`mt-3 text-sm font-bold text-ink2`,children:[`💡 `,G(n.tip)]}),(0,I.jsxs)(`div`,{className:`mt-3 space-y-2`,children:[e&&n.de&&(0,I.jsx)(Cu,{kind:`de`,children:G(n.de)}),t&&n.ar&&(0,I.jsx)(Cu,{kind:`ar`,children:G(n.ar)})]})]},n.id))]})}function ff(){let[e,t]=(0,v.useState)(null);return e?(0,I.jsx)(pf,{set:e,onExit:()=>t(null)}):(0,I.jsxs)(`div`,{className:`space-y-3`,children:[(0,I.jsx)(`p`,{className:`text-ink2 font-bold`,children:`You’ll hear one word of a pair. Can you tell which one? Training your ear is the first step to a good accent.`}),(0,I.jsx)(`div`,{className:`grid sm:grid-cols-2 gap-3`,children:ru.map(e=>(0,I.jsxs)(`button`,{type:`button`,onClick:()=>t(e),className:`card card-press p-4 text-left`,children:[(0,I.jsx)(`div`,{className:`font-black text-lg`,lang:`es`,children:e.title}),(0,I.jsx)(`div`,{className:`text-sm font-bold text-ink2`,children:e.focus}),(0,I.jsx)(`div`,{className:`text-xs font-bold text-ink3 mt-1`,lang:`es`,children:e.pairs.slice(0,3).map(e=>`${e[0]} / ${e[2]}`).join(` · `)})]},e.id))})]})}function pf({set:e,onExit:t}){let n=(0,v.useMemo)(()=>Array.from({length:10},()=>({pair:ko(e.pairs),side:Math.random()<.5?0:1})),[e]),[r,i]=(0,v.useState)(0),[a,o]=(0,v.useState)(null),[s,c]=(0,v.useState)(0),l=B(e=>e.addXP),u=n[r],d=u?u.side===0?u.pair[0]:u.pair[2]:``;if((0,v.useEffect)(()=>{if(!d)return;let e=setTimeout(()=>ll(d),300);return()=>clearTimeout(e)},[r,d]),!u)return(0,I.jsxs)(`div`,{className:`card p-6 text-center`,children:[(0,I.jsx)(Ro,{mood:s>=8?`cool`:`happy`,size:96,className:`mx-auto`}),(0,I.jsxs)(`div`,{className:`text-2xl font-black mt-2`,children:[s,` / `,n.length]}),(0,I.jsx)(`p`,{className:`font-bold text-ink2`,children:s>=8?`¡Qué oído! Great ear.`:`Keep training your ear — it gets easier.`}),(0,I.jsx)(`div`,{className:`grid gap-2 mt-5`,children:(0,I.jsx)(`button`,{type:`button`,className:`btn btn-primary`,onClick:t,children:`Done`})})]});let f=e=>{a===null&&(o(e),e===u.side?(Ql.correct(),c(e=>e+1)):Ql.wrong())};return(0,I.jsxs)(`div`,{className:`card p-5`,children:[(0,I.jsxs)(`div`,{className:`flex items-center gap-3 mb-5`,children:[(0,I.jsx)(`button`,{type:`button`,onClick:t,className:`btn-ghost rounded-xl p-1.5 text-ink3`,"aria-label":`Back to sets`,children:(0,I.jsx)(To,{className:`w-5 h-5`})}),(0,I.jsx)(U,{value:r/n.length,className:`flex-1`,color:`var(--info)`}),(0,I.jsx)(`span`,{className:`font-black text-sm text-ink2`,children:s})]}),(0,I.jsxs)(`div`,{className:`text-center`,children:[(0,I.jsx)(`div`,{className:`text-sm font-black uppercase tracking-wider text-ink3`,children:e.title}),(0,I.jsxs)(`div`,{className:`flex justify-center gap-4 my-6`,children:[(0,I.jsx)(V,{text:d,size:`xl`,variant:`info`,label:`Play the word`}),(0,I.jsx)(V,{text:d,slow:!0,size:`lg`})]})]}),(0,I.jsx)(`div`,{className:`grid grid-cols-2 gap-3`,children:[0,1].map(e=>{let t=u.pair[e*2],n=u.pair[e*2+1],r=a===null?void 0:e===u.side?`correct`:e===a?`wrong`:`dim`;return(0,I.jsxs)(`button`,{type:`button`,className:`option flex-col items-center text-center`,"data-state":r,onClick:()=>f(e),disabled:a!==null,children:[(0,I.jsx)(`span`,{lang:`es`,className:`text-2xl font-black`,children:t}),(0,I.jsx)(`span`,{className:`text-sm font-bold opacity-75`,children:n})]},e)})}),a!==null&&(0,I.jsxs)(`div`,{className:`mt-5 flex flex-col gap-3 anim-rise`,children:[(0,I.jsxs)(`div`,{className:`flex justify-center gap-2`,children:[(0,I.jsxs)(`button`,{type:`button`,className:`tile`,onClick:()=>ll(u.pair[0]),lang:`es`,children:[(0,I.jsx)(Ba,{className:`w-4 h-4 mr-1`}),` `,u.pair[0]]}),(0,I.jsxs)(`button`,{type:`button`,className:`tile`,onClick:()=>ll(u.pair[2]),lang:`es`,children:[(0,I.jsx)(Ba,{className:`w-4 h-4 mr-1`}),` `,u.pair[2]]})]}),(0,I.jsx)(`button`,{type:`button`,className:P(`btn`,a===u.side?`btn-ok`:`btn-bad`),onClick:()=>{o(null),r+1>=n.length&&zu(l(Math.min(15,s+3))),i(r+1)},children:`Continue`})]})]})}function Z(e){return/[áéíóú]/i.test(e)?`Written accent → that syllable is stressed.`:ge(e).length===1?`Only one syllable.`:`aeiouns`.includes(e.slice(-1).toLowerCase())?`Ends in a vowel, n or s → stress the second-to-last syllable.`:`Ends in another consonant → stress the last syllable.`}function mf(){let e=B(e=>e.progress),t=B(e=>e.addXP),n=(0,v.useMemo)(()=>{let t=vc.filter(t=>e[t.id]?.done).flatMap(e=>e.words.map(e=>e.es.replace(/^(el|la|los|las)\s+/i,``))).filter(e=>/^[a-záéíóúñü]+$/i.test(e)&&ge(e).length>=2);return Oo([...au,...t],10)},[e]),[r,i]=(0,v.useState)(0),[a,o]=(0,v.useState)(null),[s,c]=(0,v.useState)(0),[l,u]=(0,v.useState)(0),d=n[r];if(!d)return(0,I.jsxs)(`div`,{className:`card p-6 text-center`,children:[(0,I.jsx)(Ro,{mood:`cool`,size:96,className:`mx-auto`}),(0,I.jsxs)(`div`,{className:`text-2xl font-black mt-2`,children:[s,` / `,n.length]}),(0,I.jsx)(`p`,{className:`font-bold text-ink2`,children:`Three rules, every word. You’re getting it!`}),(0,I.jsxs)(`button`,{type:`button`,className:`btn btn-primary mt-5`,onClick:()=>{i(0),c(0),u(l+1)},children:[(0,I.jsx)(Ka,{className:`w-5 h-5`}),` Play again`]})]});let f=ge(d),p=_e(d),m=e=>{a===null&&(o(e),e===p?(Ql.correct(),c(e=>e+1)):Ql.wrong(),ll(d))};return(0,I.jsxs)(`div`,{className:`card p-5`,children:[(0,I.jsxs)(`div`,{className:`flex items-center gap-3 mb-5`,children:[(0,I.jsx)(U,{value:r/n.length,className:`flex-1`,color:`var(--info)`}),(0,I.jsx)(`span`,{className:`font-black text-sm text-ink2`,children:s})]}),(0,I.jsx)(`p`,{className:`text-center font-bold text-ink2`,children:`Which syllable is stressed?`}),(0,I.jsx)(`div`,{className:`text-center text-4xl font-black my-4`,lang:`es`,children:d}),(0,I.jsx)(`div`,{className:`flex flex-wrap justify-center gap-2`,children:f.map((e,t)=>(0,I.jsx)(`button`,{type:`button`,className:`option w-auto justify-center text-2xl px-5`,"data-state":a===null?void 0:t===p?`correct`:t===a?`wrong`:`dim`,disabled:a!==null,onClick:()=>m(t),lang:`es`,children:e},t))}),a!==null&&(0,I.jsxs)(`div`,{className:`mt-5 space-y-3 anim-rise`,children:[(0,I.jsx)(`div`,{className:`rounded-2xl bg-bg2 p-3 text-center font-bold`,children:Z(d)}),(0,I.jsx)(`button`,{type:`button`,className:P(`btn w-full`,a===p?`btn-ok`:`btn-bad`),onClick:()=>{o(null),r+1>=n.length&&zu(t(Math.min(15,s+3))),i(r+1)},children:`Continue`})]})]},l)}function hf(){return(0,I.jsxs)(`div`,{className:`space-y-3`,children:[(0,I.jsx)(`p`,{className:`text-ink2 font-bold`,children:`Listen, then record yourself and compare. Start slowly — speed comes later.`}),iu.map(e=>(0,I.jsx)(gf,{es:e.es,en:e.en,focus:e.focus},e.es))]})}function gf({es:e,en:t,focus:n}){let r=cf(15);return(0,I.jsxs)(`section`,{className:`card p-4`,children:[(0,I.jsx)(`span`,{className:`chip bg-info-soft text-info-ink mb-2`,lang:`es`,children:n}),(0,I.jsx)(`div`,{className:`text-xl font-black leading-snug`,children:(0,I.jsx)(H,{text:e})}),(0,I.jsx)(`div`,{className:`text-sm font-bold text-ink2 mt-1`,children:t}),(0,I.jsx)(_f,{es:e,rec:r})]})}function _f({es:e,rec:t}){return(0,I.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2 mt-3`,children:[(0,I.jsx)(V,{text:e,size:`md`,variant:`info`}),(0,I.jsx)(V,{text:e,slow:!0,size:`md`}),t.state===`recording`?(0,I.jsxs)(`button`,{type:`button`,className:`btn btn-bad btn-sm`,onClick:t.stop,children:[(0,I.jsx)(no,{className:`w-4 h-4 fill-white`}),` Stop`]}):(0,I.jsxs)(`button`,{type:`button`,className:`btn btn-secondary btn-sm`,onClick:t.start,children:[(0,I.jsx)(Zi,{className:`w-4 h-4 fill-bad text-bad`}),` Record me`]}),t.url&&t.state!==`recording`&&(0,I.jsxs)(`button`,{type:`button`,className:`btn btn-secondary btn-sm`,onClick:t.play,children:[(0,I.jsx)(Ba,{className:`w-4 h-4`}),` My voice`]}),t.state===`denied`&&(0,I.jsx)(`span`,{className:`text-xs font-bold text-bad`,children:`Microphone blocked — allow it in your browser settings.`}),t.state===`unsupported`&&(0,I.jsx)(`span`,{className:`text-xs font-bold text-bad`,children:`Recording isn’t supported in this browser.`})]})}function vf(){let e=B(e=>e.progress),t=B(e=>e.bumpStats),n=B(e=>e.addXP),r=(0,v.useMemo)(()=>{let t=vc.filter(t=>e[t.id]?.done);return F((t.length?t:vc.slice(0,3)).flatMap(e=>e.phrases).filter(e=>se(e.es).length<=9))},[e]),[i,a]=(0,v.useState)(0),[o,s]=(0,v.useState)(null),[c,l]=(0,v.useState)(!1),[u,d]=(0,v.useState)(null),f=(0,v.useRef)(()=>{}),p=cf(12),m=r[i%Math.max(1,r.length)];if(!m)return(0,I.jsx)(`p`,{className:`font-bold text-ink2`,children:`Finish a lesson to unlock speaking practice.`});let h=()=>{if(c){f.current();return}d(null),l(!0),f.current=Ku({onResult:e=>{let r=qu(m.es,e);s(r),t({spoken:1}),r.score>=.72?(Ql.correct(),zu(n(2))):Ql.wrong()},onError:e=>e!==`aborted`&&d(Ju(e)),onEnd:()=>l(!1)})},g=m.es.split(/\s+/);return(0,I.jsxs)(`div`,{className:`space-y-4`,children:[(0,I.jsxs)(`div`,{className:`card p-5`,children:[(0,I.jsx)(`div`,{className:`text-xs font-black uppercase tracking-wider text-ink3 mb-2`,children:`Say this`}),(0,I.jsx)(`div`,{className:`text-2xl font-black leading-snug`,children:o?(0,I.jsx)(`span`,{lang:`es`,children:g.map((e,t)=>(0,I.jsxs)(`span`,{className:o.matched[t]?`text-ok`:`text-bad`,children:[e,` `]},t))}):(0,I.jsx)(H,{text:m.es})}),(0,I.jsx)(`div`,{className:`font-bold text-ink2 mt-1`,children:m.en}),(0,I.jsx)(_f,{es:m.es,rec:p})]}),Gu?(0,I.jsxs)(`div`,{className:`flex flex-col items-center gap-3`,children:[(0,I.jsx)(`button`,{type:`button`,onClick:h,className:P(`grid place-items-center w-24 h-24 rounded-full text-white transition`,c?`bg-bad anim-pulse-ring`:`bg-info shadow-[0_5px_0_var(--info-lip)] active:translate-y-1 active:shadow-none`),"aria-label":c?`Stop`:`Speak`,children:c?(0,I.jsx)(no,{className:`w-9 h-9 fill-white`}):(0,I.jsx)(Ia,{className:`w-10 h-10`})}),o&&(0,I.jsxs)(`div`,{className:P(`chip text-base py-1.5 px-4`,o.score>=.72?`bg-ok-soft text-ok-ink`:`bg-bad-soft text-bad-ink`),children:[o.score>=.72?(0,I.jsx)(Gi,{className:`w-5 h-5`}):(0,I.jsx)(To,{className:`w-5 h-5`}),` `,Math.round(o.score*100),`% · heard “`,o.heard,`”`]}),u&&(0,I.jsx)(`div`,{className:`text-sm font-bold text-bad text-center`,children:u})]}):(0,I.jsx)(`p`,{className:`text-sm font-bold text-ink2 text-center`,children:`Automatic scoring needs Chrome, Edge or Safari — but you can record yourself and compare with the model above.`}),(0,I.jsx)(`button`,{type:`button`,className:`btn btn-secondary w-full`,onClick:()=>{a(i+1),s(null),d(null)},children:`Next phrase`})]})}function yf(){let e=B(e=>e.stories),t=Ic(B(e=>e.progress),B(e=>e.startDate)).next?.week??26;return(0,I.jsxs)(`div`,{children:[(0,I.jsx)(ou,{title:`Stories`,sub:`Graded reading with audio — one per week`,back:!0}),wc.map(n=>{let r=bc.filter(e=>e.level===n.id);return r.length?(0,I.jsxs)(`section`,{className:`mb-8`,children:[(0,I.jsxs)(`h2`,{className:`text-sm font-black uppercase tracking-wider mb-2`,style:{color:cu[n.id]},children:[n.id,` · `,n.name]}),(0,I.jsx)(`div`,{className:`grid gap-3`,children:r.map(r=>{let i=e[r.id],a=r.week>t;return(0,I.jsxs)(di,{to:`/story/${r.id}`,className:P(`card card-press p-4 flex items-center gap-3`,a&&`opacity-70`),children:[(0,I.jsx)(`span`,{className:`grid place-items-center w-12 h-12 rounded-2xl text-white font-black flex-none`,style:{background:cu[n.id]},children:i?(0,I.jsx)(Gi,{className:`w-6 h-6`,strokeWidth:3}):r.week}),(0,I.jsxs)(`span`,{className:`min-w-0 flex-1`,children:[(0,I.jsx)(`span`,{lang:`es`,className:`block font-black text-lg leading-tight`,children:r.title}),(0,I.jsxs)(`span`,{className:`block text-sm font-bold text-ink2`,children:[`Week `,r.week,` · `,r.paras.length,` paragraphs`,i?` · score ${i.score}/${r.questions.length}`:``,a?` · ahead of your plan`:``]})]}),(0,I.jsx)(Yi,{className:`w-5 h-5 text-ink3`})]},r.id)})})]},n.id):null})]})}function bf(){let{id:e=``}=Qn(),t=xc.get(e),n=Jn(),r=Ld(`/stories`),[i,a]=(0,v.useState)(!1),[o,s]=(0,v.useState)(new Set),[c,l]=(0,v.useState)(-1),[u,d]=(0,v.useState)(!1),[f,p]=(0,v.useState)({}),[m,h]=(0,v.useState)(!1),g=(0,v.useRef)(()=>{}),_=B(e=>e.markStory),y=B(e=>t?!!e.stories[t.id]:!1),b=B(e=>e.addXP),x=(0,v.useMemo)(()=>t?.questions.map(e=>F([e.a,...e.opts]))??[],[t]);if((0,v.useEffect)(()=>()=>dl(),[]),(0,v.useEffect)(()=>{c>=0&&document.getElementById(`para-${c}`)?.scrollIntoView({behavior:`smooth`,block:`center`})},[c]),!t)return(0,I.jsx)(br,{to:`/stories`,replace:!0});let S=t.questions.length,C=Object.keys(f).length,ee=t.questions.filter((e,t)=>f[t]===e.a).length;return(0,I.jsxs)(`div`,{className:`min-h-dvh bg-bg`,children:[(0,I.jsx)(Uu,{title:(0,I.jsx)(`span`,{lang:`es`,children:t.title}),sub:`Story · week ${t.week}`,onClose:r,right:(0,I.jsx)(`button`,{type:`button`,className:`btn-ghost rounded-xl p-2 text-ink2`,onClick:()=>a(!i),"aria-label":i?`Hide translations`:`Show translations`,title:`Translations`,children:i?(0,I.jsx)(da,{className:`w-5 h-5`}):(0,I.jsx)(fa,{className:`w-5 h-5`})})}),(0,I.jsxs)(`main`,{className:`max-w-2xl mx-auto px-4 pt-6 pb-20`,children:[(0,I.jsxs)(`div`,{className:`flex items-center gap-3 mb-5`,children:[(0,I.jsx)(Ro,{mood:`happy`,size:64}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(lu,{level:t.level}),(0,I.jsx)(`h1`,{lang:`es`,className:`text-3xl font-black leading-tight mt-1`,children:t.title})]})]}),(0,I.jsxs)(`div`,{className:`flex flex-wrap gap-2 mb-6`,children:[(0,I.jsxs)(`button`,{type:`button`,className:P(`btn btn-sm`,c>=0?`btn-bad`:`btn-info`),onClick:()=>{if(c>=0){g.current(),l(-1);return}g.current=ul(t.paras.map(e=>e.es),e=>l(e),{slow:u})},children:[c>=0?(0,I.jsx)(Ra,{className:`w-4 h-4`}):(0,I.jsx)(Ba,{className:`w-4 h-4 fill-current`}),` `,c>=0?`Stop`:`Listen to all`]}),(0,I.jsx)(`button`,{type:`button`,className:P(`btn btn-sm`,u?`btn-primary`:`btn-secondary`),onClick:()=>d(!u),"aria-pressed":u,children:`🐢 Slow`}),(0,I.jsx)(`span`,{className:`text-xs font-bold text-ink3 self-center`,children:`Tap any word for its meaning.`})]}),(0,I.jsx)(`article`,{className:`space-y-3`,children:t.paras.map((e,t)=>{let n=e.es.trim().startsWith(`—`),r=i||o.has(t);return(0,I.jsx)(`div`,{id:`para-${t}`,className:P(`rounded-2xl p-3 transition-colors`,c===t?`bg-brand-soft ring-2 ring-brand`:`bg-card border-2 border-line`,n&&`ml-3 border-l-4 border-l-info`),children:(0,I.jsxs)(`div`,{className:`flex items-start gap-2`,children:[(0,I.jsx)(V,{text:e.es,size:`sm`,slow:u}),(0,I.jsxs)(`div`,{className:`min-w-0 flex-1`,children:[(0,I.jsx)(`p`,{className:`text-[1.12rem] font-bold leading-relaxed`,children:(0,I.jsx)(H,{text:e.es})}),r&&e.en&&(0,I.jsx)(`p`,{className:`text-ink2 font-bold mt-1.5 text-[0.95rem] anim-fade`,children:e.en})]}),!i&&e.en&&(0,I.jsx)(`button`,{type:`button`,onClick:()=>{let e=new Set(o);e.has(t)?e.delete(t):e.add(t),s(e)},className:`btn-ghost rounded-lg p-1.5 text-ink3 hover:text-ink`,"aria-label":`Translate paragraph`,title:`Translate`,children:(0,I.jsx)(Sa,{className:`w-4 h-4`})})]})},t)})}),(0,I.jsxs)(`section`,{className:`mt-10`,children:[(0,I.jsx)(`h2`,{className:`text-xl font-black mb-1`,children:`¿Lo has entendido?`}),(0,I.jsx)(`p`,{className:`text-ink2 font-bold mb-4`,children:`Did you understand it? Answer the questions.`}),(0,I.jsx)(`div`,{className:`space-y-4`,children:t.questions.map((e,t)=>{let n=f[t];return(0,I.jsxs)(`div`,{className:`card p-4`,children:[(0,I.jsx)(`div`,{className:`font-black text-lg`,children:(0,I.jsx)(H,{text:e.q})}),e.en&&(0,I.jsx)(`div`,{className:`text-sm font-bold text-ink3 mb-3`,children:e.en}),(0,I.jsx)(`div`,{className:`grid gap-2`,children:x[t].map(r=>{let i=n===void 0?void 0:r===e.a?`correct`:r===n?`wrong`:`dim`;return(0,I.jsx)(`button`,{type:`button`,className:`option py-2.5`,"data-state":i,disabled:n!==void 0,onClick:()=>{p({...f,[t]:r}),r===e.a?Ql.correct():Ql.wrong()},children:(0,I.jsx)(H,{text:r,static:!0})},r)})})]},t)})}),C===S&&(0,I.jsxs)(`div`,{className:`card p-5 mt-6 text-center anim-pop`,children:[(0,I.jsxs)(`div`,{className:`text-3xl font-black`,children:[ee,` / `,S]}),(0,I.jsx)(`p`,{className:`font-bold text-ink2`,children:ee===S?`¡Perfecto! You understood everything.`:ee>=S/2?`¡Bien! Read it once more and try to catch the rest.`:`Listen again with the translations on — then retry.`}),m?(0,I.jsx)(`button`,{type:`button`,className:`btn btn-secondary w-full mt-4`,onClick:()=>n(`/`,{replace:!0}),children:`Back to today`}):(0,I.jsxs)(`button`,{type:`button`,className:`btn btn-primary w-full mt-4`,onClick:()=>{_(t.id,ee),zu(b(y?5:15)),Ru(.7),h(!0)},children:[`Finish story (+`,y?5:15,` XP)`]})]})]})]})]})}function xf(){let[e,t]=_i(),n=e.get(`q`)??``,[r,i]=(0,v.useState)(`browse`),a=B(e=>e.cards),o=(0,v.useMemo)(()=>zl(n),[n]),s=(0,v.useMemo)(()=>{let e=D(n);return e.length<3?[]:vc.filter(t=>D(t.title).includes(e)||D(t.goal).includes(e)).slice(0,6)},[n]),c=yl(e=>e.openWord),l=e=>t(e?{q:e}:{},{replace:!0});return(0,I.jsxs)(`div`,{children:[(0,I.jsx)(ou,{title:`Words`,sub:`Dictionary · your deck · every lesson’s vocabulary`}),(0,I.jsxs)(`label`,{className:`relative block mb-4`,children:[(0,I.jsx)(Ja,{className:`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ink3`}),(0,I.jsx)(`input`,{className:`input pl-12 pr-11`,placeholder:`Search Spanish or English…`,value:n,onChange:e=>l(e.target.value),lang:`es`,autoComplete:`off`}),n&&(0,I.jsx)(`button`,{type:`button`,className:`absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-lg text-ink3 hover:text-ink`,onClick:()=>l(``),"aria-label":`Clear`,children:(0,I.jsx)(To,{className:`w-5 h-5`})})]}),n?(0,I.jsxs)(`div`,{className:`space-y-5`,children:[s.length>0&&(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`h2`,{className:`text-sm font-black uppercase tracking-wider text-ink3 mb-2`,children:`Lessons`}),(0,I.jsx)(`div`,{className:`grid gap-2`,children:s.map(e=>(0,I.jsxs)(di,{to:`/lesson/${e.id}?read=1`,className:`card card-press px-4 py-3 flex items-center gap-3`,children:[(0,I.jsx)(Vi,{className:`w-5 h-5 text-vio`}),(0,I.jsx)(`span`,{className:`font-black flex-1`,children:e.title}),(0,I.jsxs)(`span`,{className:`text-xs font-bold text-ink3`,children:[`Week `,e.week]})]},e.id))})]}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`h2`,{className:`text-sm font-black uppercase tracking-wider text-ink3 mb-2`,children:o.length?`${o.length} result${o.length>1?`s`:``}`:`No results`}),(0,I.jsxs)(`ul`,{className:`card divide-y-2 divide-line overflow-hidden`,children:[o.map(({entry:e})=>(0,I.jsxs)(`li`,{className:`flex items-center gap-3 px-3 py-2.5`,children:[(0,I.jsx)(V,{text:Zu(e.es),size:`sm`}),(0,I.jsxs)(`button`,{type:`button`,className:`min-w-0 flex-1 text-left`,onClick:()=>c(je(Zu(e.es)).split(`,`)[0],e.es),children:[(0,I.jsx)(`span`,{lang:`es`,className:`block font-black`,children:e.es}),(0,I.jsx)(`span`,{className:`block text-sm font-bold text-ink2 truncate`,children:e.en})]}),e.kind===`verb`&&(0,I.jsx)(di,{to:`/verbs/${encodeURIComponent(e.es)}`,className:`btn btn-secondary btn-icon w-9 h-9`,"aria-label":`Conjugate ${e.es}`,children:(0,I.jsx)(oo,{className:`w-4 h-4`})}),e.level&&(0,I.jsx)(lu,{level:e.level})]},e.id)),!o.length&&(0,I.jsx)(`li`,{className:`p-5 text-center font-bold text-ink2`,children:`Nothing found. Try another spelling — accents are optional.`})]})]})]}):(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(`div`,{className:`seg mb-5`,children:[(0,I.jsx)(`button`,{type:`button`,"aria-pressed":r===`browse`,onClick:()=>i(`browse`),children:`By week`}),(0,I.jsxs)(`button`,{type:`button`,"aria-pressed":r===`deck`,onClick:()=>i(`deck`),children:[`My deck (`,Object.keys(a).length,`)`]})]}),r===`browse`?(0,I.jsx)(Sf,{}):(0,I.jsx)(Cf,{})]})]})}function Sf(){let[e,t]=(0,v.useState)(null),n=B(e=>e.progress);return(0,I.jsx)(`div`,{className:`space-y-2.5`,children:_c.map(r=>{let i=e===r.n,a=r.lessons.reduce((e,t)=>e+t.words.length,0);return(0,I.jsxs)(`section`,{className:`card overflow-hidden`,children:[(0,I.jsxs)(`button`,{type:`button`,className:`w-full flex items-center gap-3 px-4 py-3 text-left`,onClick:()=>t(i?null:r.n),"aria-expanded":i,children:[(0,I.jsx)(`span`,{className:`grid place-items-center w-10 h-10 rounded-xl text-white font-black flex-none`,style:{background:cu[r.level]},children:r.n}),(0,I.jsxs)(`span`,{className:`min-w-0 flex-1`,children:[(0,I.jsxs)(`span`,{className:`block font-black truncate`,children:[(0,I.jsx)(`span`,{lang:`es`,children:r.es}),` · `,r.title]}),(0,I.jsxs)(`span`,{className:`block text-xs font-bold text-ink3`,children:[a,` words`]})]}),(0,I.jsx)(qi,{className:P(`w-5 h-5 text-ink3 transition-transform`,i&&`rotate-180`)})]}),i&&(0,I.jsx)(`div`,{className:`border-t-2 border-line`,children:r.lessons.map(e=>(0,I.jsxs)(`div`,{className:`px-4 py-3 border-b-2 border-line last:border-b-0`,children:[(0,I.jsxs)(di,{to:`/lesson/${e.id}?read=1`,className:`flex items-center gap-2 font-black text-sm mb-2 hover:underline`,children:[n[e.id]?.done?`✅`:`📘`,` `,e.title]}),(0,I.jsx)(`ul`,{className:`grid sm:grid-cols-2 gap-x-4 gap-y-1`,children:e.words.map(e=>(0,I.jsxs)(`li`,{className:`flex items-center gap-2 text-sm`,children:[(0,I.jsx)(V,{text:Zu(e.es),size:`sm`,variant:`ghost`}),(0,I.jsx)(`span`,{className:`font-black`,children:(0,I.jsx)(H,{text:e.es})}),(0,I.jsx)(`span`,{className:`text-ink2 font-bold truncate`,children:e.en})]},e.es))})]},e.id))})]},r.n)})})}function Cf(){let e=B(e=>e.cards),t=B(e=>e.removeCard),n=Object.values(e).sort((e,t)=>e.due-t.due);return n.length?(0,I.jsx)(`ul`,{className:`card divide-y-2 divide-line overflow-hidden`,children:n.map(e=>(0,I.jsxs)(`li`,{className:`flex items-center gap-3 px-3 py-2.5`,children:[(0,I.jsx)(V,{text:Zu(e.es),size:`sm`}),(0,I.jsxs)(`div`,{className:`min-w-0 flex-1`,children:[(0,I.jsx)(`div`,{className:`font-black`,children:(0,I.jsx)(H,{text:e.es})}),(0,I.jsx)(`div`,{className:`text-sm font-bold text-ink2 truncate`,children:e.en})]}),(0,I.jsxs)(`div`,{className:`w-16`,title:`Interval: ${e.interval} days`,children:[(0,I.jsx)(`div`,{className:`h-2 rounded-full bg-line overflow-hidden`,children:(0,I.jsx)(`div`,{className:`h-full rounded-full`,style:{width:`${Math.max(8,ls(e)*100)}%`,background:ls(e)>=1?`var(--ok)`:ls(e)>.3?`var(--info)`:`var(--fire)`}})}),(0,I.jsx)(`div`,{className:`text-[0.65rem] font-bold text-ink3 text-right mt-0.5`,children:e.interval?`${e.interval}d`:`new`})]}),(0,I.jsx)(`button`,{type:`button`,className:`p-2 rounded-lg text-ink3 hover:text-bad`,onClick:()=>t(e.id),"aria-label":`Remove ${e.es}`,children:(0,I.jsx)(uo,{className:`w-4 h-4`})})]},e.id))}):(0,I.jsx)(`p`,{className:`text-center font-bold text-ink2 py-8`,children:`Your deck is empty. Finish a lesson or save words by tapping them.`})}function wf(){let[e,t]=(0,v.useState)(`grammar`),[n,r]=(0,v.useState)(``),i=B(e=>e.progress),a=(0,v.useMemo)(()=>{let t=D(n);return vc.filter(n=>(e===`all`||n.kind===e)&&(!t||D(`${n.title} ${n.goal} ${n.body}`).includes(t)))},[e,n]);return(0,I.jsxs)(`div`,{children:[(0,I.jsx)(ou,{title:`Grammar & topics`,sub:`Every explanation from the course, ready to re-read`,back:!0}),(0,I.jsxs)(`label`,{className:`relative block mb-3`,children:[(0,I.jsx)(Ja,{className:`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ink3`}),(0,I.jsx)(`input`,{className:`input pl-12`,placeholder:`e.g. subjunctive, ser, por / para…`,value:n,onChange:e=>r(e.target.value)})]}),(0,I.jsx)(`div`,{className:`flex flex-wrap gap-2 mb-5`,children:[`all`,`grammar`,`pron`,`vocab`,`talk`,`culture`].map(n=>(0,I.jsx)(`button`,{type:`button`,onClick:()=>t(n),className:P(`chip border-2 py-1.5 px-3`,e===n?`bg-ink text-bg border-ink`:`bg-card text-ink2 border-line`),children:n===`all`?`All`:gu[n].label},n))}),wc.map(e=>{let t=a.filter(t=>t.level===e.id);return t.length?(0,I.jsxs)(`section`,{className:`mb-7`,children:[(0,I.jsxs)(`h2`,{className:`text-sm font-black uppercase tracking-wider mb-2`,style:{color:cu[e.id]},children:[e.id,` · `,e.name]}),(0,I.jsx)(`ul`,{className:`card divide-y-2 divide-line overflow-hidden`,children:t.map(e=>{let t=gu[e.kind],n=t.icon;return(0,I.jsx)(`li`,{children:(0,I.jsxs)(di,{to:`/lesson/${e.id}?read=1`,className:`flex items-center gap-3 px-4 py-3 hover:bg-bg2`,children:[(0,I.jsx)(`span`,{className:`grid place-items-center w-9 h-9 rounded-xl flex-none`,style:{background:t.soft,color:t.color},children:(0,I.jsx)(n,{className:`w-5 h-5`})}),(0,I.jsxs)(`span`,{className:`min-w-0 flex-1`,children:[(0,I.jsx)(`span`,{className:`block font-black leading-tight`,children:e.title}),(0,I.jsxs)(`span`,{className:`block text-xs font-bold text-ink3`,children:[`Week `,e.week,` · Day `,e.day]})]}),i[e.id]?.done&&(0,I.jsx)(Gi,{className:`w-5 h-5 text-ok`}),(0,I.jsx)(Yi,{className:`w-5 h-5 text-ink3`})]})},e.id)})})]},e.id):null}),!a.length&&(0,I.jsx)(`p`,{className:`text-center font-bold text-ink2 py-8`,children:`No topic found.`})]})}var Tf=[{id:`small`,label:`0–20`,gen:()=>Ef(0,20)},{id:`hundred`,label:`21–100`,gen:()=>Ef(21,100)},{id:`thousand`,label:`100–999`,gen:()=>Ef(100,999)},{id:`big`,label:`1 000+`,gen:()=>Math.random()<.5?Ef(1e3,9999):Ef(10,999)*1e3+(Math.random()<.5?0:Ef(1,999))},{id:`year`,label:`Years`,gen:()=>Ef(1950,2035)},{id:`price`,label:`Prices €`,gen:()=>Ef(100,9999)}];function Ef(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Df(e,t){if(e===`price`){let e=Math.floor(t/100),n=t%100,r=e===1?`un euro`:`${we(e).replace(/veintiuno$/,`veintiún`).replace(/uno$/,`un`)} euros`,i=n?`${r} con ${we(n)}`:r,a=`${e},${String(n).padStart(2,`0`)} €`;return{say:i,digits:`${e},${String(n).padStart(2,`0`)}`,show:a}}return{say:we(t),digits:String(t),show:t.toLocaleString(`es-ES`)}}function Of(){let[e,t]=(0,v.useState)(`small`),[n,r]=(0,v.useState)(`listen`),[i,a]=(0,v.useState)(0),[o,s]=(0,v.useState)(()=>Tf[0].gen()),[c,l]=(0,v.useState)(``),[u,d]=(0,v.useState)(`idle`),[f,p]=(0,v.useState)(0),m=(0,v.useRef)(null),h=B(e=>e.addXP),g=Df(e,o);(0,v.useEffect)(()=>{if(n===`listen`&&i<10){let e=setTimeout(()=>ll(g.say),250);return()=>clearTimeout(e)}},[o,n]);let _=(i=e,o=n)=>{t(i),r(o),a(0),p(0),l(``),d(`idle`),s(Tf.find(e=>e.id===i).gen())},y=()=>{if(u!==`idle`){b();return}if(!c.trim())return;let e;if(n===`listen`){let t=e=>e.replace(/[\s.€]/g,``).replace(/,$/,``);e=t(c)===t(g.digits)||t(c)===t(g.digits).replace(/,00$/,``)}else e=ke(c,g.say)!==`wrong`;d(e?`ok`:`bad`),e?(Ql.correct(),p(e=>e+1)):Ql.wrong(),n===`write`&&ll(g.say)},b=()=>{if(i+1>=10){zu(h(Math.min(15,f+3))),a(10);return}a(i+1),l(``),d(`idle`),s(Tf.find(t=>t.id===e).gen()),setTimeout(()=>m.current?.focus(),50)};return(0,I.jsxs)(`div`,{children:[(0,I.jsx)(ou,{title:`Numbers trainer`,sub:`Prices, years and phone numbers — numbers are everywhere`,back:!0}),(0,I.jsxs)(`div`,{className:`seg mb-3`,children:[(0,I.jsx)(`button`,{type:`button`,"aria-pressed":n===`listen`,onClick:()=>_(e,`listen`),children:`👂 Listen → digits`}),(0,I.jsx)(`button`,{type:`button`,"aria-pressed":n===`write`,onClick:()=>_(e,`write`),children:`✍️ Digits → words`})]}),(0,I.jsx)(`div`,{className:`flex flex-wrap gap-2 mb-6`,children:Tf.map(t=>(0,I.jsx)(`button`,{type:`button`,onClick:()=>_(t.id),className:P(`chip border-2 py-1.5 px-3`,e===t.id?`bg-brand text-brand-ink border-brand`:`bg-card text-ink2 border-line`),children:t.label},t.id))}),i>=10?(0,I.jsxs)(`div`,{className:`card p-6 text-center`,children:[(0,I.jsxs)(`div`,{className:`text-4xl font-black`,children:[f,` / `,10]}),(0,I.jsx)(`p`,{className:`font-bold text-ink2 mt-1`,children:f>=8?`¡Excelente!`:`Keep practising — numbers get automatic with repetition.`}),(0,I.jsx)(`button`,{type:`button`,className:`btn btn-primary mt-5`,onClick:()=>_(),children:`Play again`})]}):(0,I.jsxs)(`div`,{className:`card p-5`,children:[(0,I.jsx)(U,{value:i/10,color:`var(--brand)`,className:`mb-6`}),n===`listen`?(0,I.jsxs)(`div`,{className:`flex justify-center gap-4 mb-6`,children:[(0,I.jsx)(V,{text:g.say,size:`xl`,variant:`info`,label:`Play the number`}),(0,I.jsx)(V,{text:g.say,slow:!0,size:`lg`})]}):(0,I.jsx)(`div`,{className:`text-center text-5xl font-black mb-6`,children:g.show}),(0,I.jsx)(`input`,{ref:m,autoFocus:!0,lang:`es`,inputMode:n===`listen`?`decimal`:`text`,className:P(`input text-center text-2xl`,u===`ok`&&`border-ok!`,u===`bad`&&`border-bad!`),placeholder:n===`listen`?e===`price`?`e.g. 3,50`:`Type the number`:`Write it in Spanish words`,value:c,disabled:u!==`idle`,autoComplete:`off`,onChange:e=>l(e.target.value),onKeyDown:e=>e.key===`Enter`&&y()}),n===`write`&&(0,I.jsx)(`div`,{className:`mt-3 flex justify-center`,children:(0,I.jsx)(pu,{inputRef:m,value:c,onChange:l})}),u!==`idle`&&(0,I.jsxs)(`div`,{className:P(`mt-5 rounded-2xl p-4 flex items-center gap-3 anim-pop`,u===`ok`?`bg-ok-soft text-ok-ink`:`bg-bad-soft text-bad-ink`),children:[u===`ok`?(0,I.jsx)(Gi,{className:`w-7 h-7 flex-none`,strokeWidth:3}):(0,I.jsx)(To,{className:`w-7 h-7 flex-none`,strokeWidth:3}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`div`,{className:`font-black text-xl`,children:g.show}),(0,I.jsx)(`div`,{className:`font-bold`,children:(0,I.jsx)(H,{text:g.say})})]})]}),(0,I.jsx)(`button`,{type:`button`,className:P(`btn w-full mt-5`,u===`idle`?`btn-primary`:u===`ok`?`btn-ok`:`btn-bad`),disabled:u===`idle`&&!c.trim(),onClick:y,children:u===`idle`?`Check`:`Continue`})]})]})}function kf(e){let t=Math.floor(e/3600),n=Math.round(e%3600/60);return t?`${t}h ${n}m`:`${n}m`}function Af(){let e=B(),t=Fc(e.streak),n=zc(e.xp),r=Rc(e.cards),i=Object.values(e.cards).filter(e=>e.interval>=21).length,a=e.stats.exercises?Math.round(e.stats.correct/e.stats.exercises*100):0,o=Ec.filter(t=>e.progress[t.id]?.done).length,s=Ac.filter(t=>e.achievements[t.id]).length,c=Ec.find(t=>!e.progress[t.id]?.done)?.level??`B1`;return(0,I.jsxs)(`div`,{children:[(0,I.jsx)(ou,{title:`Me`,right:(0,I.jsx)(di,{to:`/settings`,className:`btn btn-secondary btn-icon`,"aria-label":`Settings`,children:(0,I.jsx)(Xa,{className:`w-5 h-5`})})}),(0,I.jsxs)(`section`,{className:`card p-5 flex items-center gap-4 mb-5`,children:[(0,I.jsx)(Ro,{mood:t.count>=7?`cool`:`happy`,size:80}),(0,I.jsxs)(`div`,{className:`min-w-0`,children:[(0,I.jsx)(`div`,{className:`text-xs font-black uppercase tracking-wider text-ink3`,children:`Current level`}),(0,I.jsx)(`div`,{className:`text-3xl font-black`,style:{color:cu[c]},children:c}),(0,I.jsx)(`div`,{className:`text-sm font-bold text-ink2`,children:e.startDate?`Learning since ${Qo(e.startDate,{day:`numeric`,month:`long`,year:`numeric`})}`:``})]})]}),(0,I.jsxs)(`section`,{className:`grid grid-cols-2 gap-3 mb-5`,children:[(0,I.jsx)(mu,{icon:(0,I.jsx)(ma,{className:`w-6 h-6`}),value:t.count,label:`Day streak`,tone:`fire`}),(0,I.jsx)(mu,{icon:(0,I.jsx)(ho,{className:`w-6 h-6`}),value:e.streak.longest,label:`Best streak`,tone:`brand`}),(0,I.jsx)(mu,{icon:(0,I.jsx)(Do,{className:`w-6 h-6`}),value:n.toLocaleString(),label:`Total XP`,tone:`brand`}),(0,I.jsx)(mu,{icon:(0,I.jsx)(wa,{className:`w-6 h-6`}),value:r,label:`Words · ${i} mastered`,tone:`vio`}),(0,I.jsx)(mu,{icon:(0,I.jsx)(Vi,{className:`w-6 h-6`}),value:`${o}/${Ec.length}`,label:`Plan days done`,tone:`ok`}),(0,I.jsx)(mu,{icon:(0,I.jsx)($i,{className:`w-6 h-6`}),value:kf(e.stats.seconds),label:`Time studied`,tone:`info`}),(0,I.jsx)(mu,{icon:(0,I.jsx)(co,{className:`w-6 h-6`}),value:`${a}%`,label:`Accuracy`,tone:`ok`}),(0,I.jsx)(mu,{icon:(0,I.jsx)(eo,{className:`w-6 h-6`}),value:e.streak.freezes,label:`Streak freezes`,tone:`info`})]}),(0,I.jsx)(`p`,{className:`text-xs font-bold text-ink3 -mt-2 mb-5`,children:`🧊 You earn a streak freeze for every 7 days in a row (max 2). A freeze saves your streak if you miss a day.`}),(0,I.jsxs)(`section`,{className:`card p-4 mb-5`,children:[(0,I.jsx)(`h2`,{className:`font-black text-lg mb-3`,children:`Activity`}),(0,I.jsx)(du,{xp:e.xp,goal:e.settings.dailyGoal})]}),(0,I.jsxs)(`section`,{className:`card p-4 mb-5 space-y-4`,children:[(0,I.jsx)(`h2`,{className:`font-black text-lg`,children:`Level progress`}),wc.map(t=>{let n=Ec.filter(e=>e.level===t.id),r=n.filter(t=>e.progress[t.id]?.done).length;return(0,I.jsxs)(`div`,{children:[(0,I.jsxs)(`div`,{className:`flex justify-between text-sm font-black mb-1`,children:[(0,I.jsxs)(`span`,{children:[t.id,` · `,t.name]}),(0,I.jsxs)(`span`,{className:`text-ink3`,children:[r,`/`,n.length]})]}),(0,I.jsx)(U,{value:r/Math.max(1,n.length),color:cu[t.id]})]},t.id)})]}),(0,I.jsxs)(`section`,{className:`mb-5`,children:[(0,I.jsxs)(`h2`,{className:`font-black text-lg mb-3`,children:[`Achievements `,(0,I.jsxs)(`span`,{className:`text-ink3`,children:[s,`/`,Ac.length]})]}),(0,I.jsx)(`div`,{className:`grid grid-cols-3 sm:grid-cols-4 gap-3`,children:Ac.map(t=>{let n=e.achievements[t.id];return(0,I.jsxs)(`div`,{className:P(`card p-3 text-center`,!n&&`opacity-50`),title:t.desc,children:[(0,I.jsx)(`div`,{className:P(`text-3xl`,!n&&`grayscale`),children:t.emoji}),(0,I.jsx)(`div`,{className:`text-xs font-black leading-tight mt-1`,lang:`es`,children:t.title}),(0,I.jsx)(`div`,{className:`text-[0.65rem] font-bold text-ink3 leading-tight mt-0.5`,children:t.desc})]},t.id)})})]})]})}function jf(e,t,n){let[r=`19`,i=`00`]=e.split(`:`),a=t.replace(/-/g,``),o=new Date().toISOString().replace(/[-:]/g,``).replace(/\.\d{3}/,``);return[`BEGIN:VCALENDAR`,`VERSION:2.0`,`PRODID:-//Camino//Spanish learning//EN`,`CALSCALE:GREGORIAN`,`BEGIN:VEVENT`,`UID:camino-daily-${a}-${r}${i}@camino.app`,`DTSTAMP:${o}`,`DTSTART:${a}T${r.padStart(2,`0`)}${i.padStart(2,`0`)}00`,`DURATION:PT30M`,`RRULE:FREQ=DAILY`,`SUMMARY:Spanish practice · Camino 🔥`,`DESCRIPTION:Keep your streak alive! Today's lesson is waiting: ${n}`,`URL:${n}`,`BEGIN:VALARM`,`ACTION:DISPLAY`,`DESCRIPTION:¡Hora de español! Time for Spanish.`,`TRIGGER:PT0M`,`END:VALARM`,`END:VEVENT`,`END:VCALENDAR`].join(`\r
`)}function Mf({title:e,children:t}){return(0,I.jsxs)(`section`,{className:`mb-6`,children:[(0,I.jsx)(`h2`,{className:`text-sm font-black uppercase tracking-wider text-ink3 mb-2`,children:e}),(0,I.jsx)(`div`,{className:`card divide-y-2 divide-line`,children:t})]})}function Nf({label:e,sub:t,children:n}){return(0,I.jsxs)(`div`,{className:`flex items-center gap-3 px-4 py-3.5`,children:[(0,I.jsxs)(`div`,{className:`min-w-0 flex-1`,children:[(0,I.jsx)(`div`,{className:`font-black`,children:e}),t&&(0,I.jsx)(`div`,{className:`text-sm font-bold text-ink2`,children:t})]}),n]})}function Pf({checked:e,onChange:t,label:n}){return(0,I.jsx)(`button`,{type:`button`,role:`switch`,"aria-checked":e,"aria-label":n,className:`switch`,onClick:()=>t(!e)})}var Ff=new URL(`/Spanish-teacher/`,window.location.origin).href;function If(){let e=B(e=>e.settings),t=B(e=>e.setSettings),n=B(e=>e.startDate),r=B(e=>e.setStartDate),i=B(e=>e.importData),a=B(e=>e.resetAll),o=yl(e=>e.toast),s=yl(e=>e.installEvent),c=yl(e=>e.setInstallEvent),[l,u]=(0,v.useState)(!1),[d,f]=(0,v.useState)(!1),p=(0,v.useRef)(null);ml();let m=il(),h=ol(),g=/iphone|ipad|ipod/i.test(navigator.userAgent),_=()=>{let{onboarded:e,startDate:t,settings:n,progress:r,xp:i,streak:a,cards:o,mistakes:s,stories:c,achievements:l,stats:u,cando:d,goalCelebrated:f}=B.getState(),p={onboarded:e,startDate:t,settings:n,progress:r,xp:i,streak:a,cards:o,mistakes:s,stories:c,achievements:l,stats:u,cando:d,goalCelebrated:f};No(`camino-backup-${qo()}.json`,JSON.stringify({app:`camino`,version:1,data:p},null,1))},y=async e=>{try{let t=JSON.parse(await e.text()),n=t?.data??t;if(!n||typeof n!=`object`||!(`progress`in n)||!(`settings`in n))throw Error(`bad file`);i(n),o({emoji:`✅`,title:`Backup restored`,tone:`ok`})}catch{o({emoji:`⚠️`,title:`That file is not a Camino backup`,tone:`info`})}};return(0,I.jsxs)(`div`,{children:[(0,I.jsx)(ou,{title:`Settings`,back:!0}),(0,I.jsx)(Mf,{title:`Daily goal`,children:(0,I.jsx)(`div`,{className:`p-3 grid grid-cols-2 sm:grid-cols-4 gap-2`,children:eu.map(n=>(0,I.jsxs)(`button`,{type:`button`,className:`option flex-col items-start gap-0 py-2.5`,"data-state":e.dailyGoal===n.xp?`selected`:void 0,onClick:()=>t({dailyGoal:n.xp}),children:[(0,I.jsx)(`span`,{className:`font-black`,children:n.label}),(0,I.jsxs)(`span`,{className:`text-xs font-bold opacity-75`,children:[n.xp,` XP · `,n.time]})]},n.xp))})}),(0,I.jsxs)(Mf,{title:`Voice & audio`,children:[(0,I.jsx)(Nf,{label:`Spanish voice`,sub:Gc?m.length?`${m.length} Spanish voice${m.length>1?`s`:``} on this device`:`Using the default Spanish voice`:`Speech is not supported in this browser`,children:(0,I.jsx)(`button`,{type:`button`,className:`btn btn-secondary btn-icon`,onClick:()=>ll(`Hola, ¿qué tal? Me llamo Sol y hablo español de España.`),"aria-label":`Test voice`,children:(0,I.jsx)(Co,{className:`w-5 h-5`})})}),m.length>0&&(0,I.jsxs)(`div`,{className:`px-4 py-3`,children:[(0,I.jsx)(`select`,{className:`input text-base`,value:h?.voiceURI??``,onChange:e=>t({voiceURI:e.target.value||null}),children:m.map(e=>(0,I.jsxs)(`option`,{value:e.voiceURI,children:[e.name,` · `,e.lang,e.localService?``:` (online)`]},e.voiceURI))}),(0,I.jsx)(`p`,{className:`text-xs font-bold text-ink3 mt-1.5`,children:`Voices marked es-ES are Spain Spanish. “Natural”, “Online” or “Enhanced” voices sound the best.`})]}),(0,I.jsxs)(`div`,{className:`px-4 py-3.5`,children:[(0,I.jsxs)(`div`,{className:`flex justify-between font-black`,children:[(0,I.jsx)(`span`,{children:`Speaking speed`}),(0,I.jsxs)(`span`,{className:`text-ink2`,children:[Math.round(e.rate*100),`%`]})]}),(0,I.jsx)(`input`,{type:`range`,min:.6,max:1.2,step:.02,value:e.rate,onChange:e=>t({rate:Number(e.target.value)}),className:`w-full accent-[var(--brand-lip)] mt-2`,"aria-label":`Speaking speed`})]}),(0,I.jsx)(Nf,{label:`Play audio automatically`,sub:`Read Spanish aloud in exercises and flashcards`,children:(0,I.jsx)(Pf,{checked:e.autoplay,onChange:e=>t({autoplay:e}),label:`Autoplay`})}),(0,I.jsx)(Nf,{label:`Speaking exercises`,sub:`Use the microphone in lessons`,children:(0,I.jsx)(Pf,{checked:e.speaking,onChange:e=>t({speaking:e}),label:`Speaking exercises`})}),(0,I.jsx)(Nf,{label:`Sound effects`,children:(0,I.jsx)(Pf,{checked:e.sound,onChange:e=>t({sound:e}),label:`Sound effects`})}),(0,I.jsxs)(`div`,{className:`px-4 py-3`,children:[(0,I.jsx)(`button`,{type:`button`,className:`text-sm font-black text-info`,onClick:()=>f(!d),children:d?`Hide`:`No sound or wrong accent? How to install a Spanish voice`}),d&&(0,I.jsx)(`div`,{className:`mt-3`,children:(0,I.jsx)($l,{})})]})]}),(0,I.jsxs)(Mf,{title:`Learning`,children:[(0,I.jsx)(Nf,{label:`Tips for German speakers`,sub:`Compare Spanish with German`,children:(0,I.jsx)(Pf,{checked:e.tipsDe,onChange:e=>t({tipsDe:e}),label:`German tips`})}),(0,I.jsx)(Nf,{label:`Tips for Arabic speakers`,sub:`Compare Spanish with Arabic`,children:(0,I.jsx)(Pf,{checked:e.tipsAr,onChange:e=>t({tipsAr:e}),label:`Arabic tips`})}),(0,I.jsxs)(`div`,{className:`px-4 py-3.5`,children:[(0,I.jsxs)(`label`,{className:`block`,children:[(0,I.jsx)(`span`,{className:`font-black`,children:`Plan start date`}),(0,I.jsx)(`input`,{type:`date`,className:`input mt-2 text-base`,value:n??qo(),onChange:e=>e.target.value&&r(e.target.value)})]}),n&&(0,I.jsxs)(`p`,{className:`text-xs font-bold text-ink3 mt-1.5`,children:[`Your plan ends on `,Qo(Yo(n,181),{day:`numeric`,month:`long`,year:`numeric`}),`. Move the date if you took a break — your progress stays.`]})]})]}),(0,I.jsx)(Mf,{title:`Appearance`,children:(0,I.jsx)(`div`,{className:`p-3`,children:(0,I.jsx)(`div`,{className:`seg`,children:[`system`,`light`,`dark`].map(n=>(0,I.jsx)(`button`,{type:`button`,"aria-pressed":e.theme===n,onClick:()=>t({theme:n}),className:`capitalize`,children:n},n))})})}),(0,I.jsx)(Mf,{title:`Daily reminder`,children:(0,I.jsxs)(`div`,{className:`px-4 py-3.5 space-y-3`,children:[(0,I.jsx)(`p`,{className:`text-sm font-bold text-ink2`,children:`Add a repeating event to your phone’s calendar — it reminds you every day, even when the app is closed.`}),(0,I.jsxs)(`div`,{className:`flex gap-2`,children:[(0,I.jsx)(`input`,{type:`time`,className:`input text-base w-36`,value:e.reminder,onChange:e=>t({reminder:e.target.value}),"aria-label":`Reminder time`}),(0,I.jsxs)(`button`,{type:`button`,className:`btn btn-primary flex-1`,onClick:()=>No(`camino-daily-reminder.ics`,jf(e.reminder,qo(),Ff),`text/calendar`),children:[(0,I.jsx)(Ui,{className:`w-5 h-5`}),` Add to calendar`]})]})]})}),(0,I.jsx)(Mf,{title:`Install the app`,children:(0,I.jsxs)(`div`,{className:`px-4 py-3.5 space-y-3`,children:[s?(0,I.jsxs)(`button`,{type:`button`,className:`btn btn-primary w-full`,onClick:async()=>{await s.prompt(),c(null)},children:[(0,I.jsx)(Qa,{className:`w-5 h-5`}),` Install Camino`]}):(0,I.jsxs)(`ul`,{className:`text-sm font-bold text-ink2 space-y-2`,children:[(0,I.jsxs)(`li`,{className:P(g&&`text-ink`),children:[(0,I.jsx)(`b`,{children:`iPhone / iPad (Safari):`}),` tap Share `,(0,I.jsx)(`span`,{"aria-hidden":`true`,children:`⬆️`}),` → “Add to Home Screen”.`]}),(0,I.jsxs)(`li`,{children:[(0,I.jsx)(`b`,{children:`Android (Chrome):`}),` menu ⋮ → “Install app” / “Add to Home screen”.`]}),(0,I.jsxs)(`li`,{children:[(0,I.jsx)(`b`,{children:`Computer (Chrome / Edge):`}),` click the install icon in the address bar.`]})]}),(0,I.jsx)(`p`,{className:`text-xs font-bold text-ink3`,children:`Installed, Camino opens full-screen like a native app and works offline.`})]})}),(0,I.jsx)(Mf,{title:`Your data`,children:(0,I.jsxs)(`div`,{className:`px-4 py-3.5 space-y-3`,children:[(0,I.jsx)(`p`,{className:`text-sm font-bold text-ink2`,children:`Progress is saved on this device only. Export a backup to move it to another phone or browser.`}),(0,I.jsxs)(`div`,{className:`grid grid-cols-2 gap-2`,children:[(0,I.jsxs)(`button`,{type:`button`,className:`btn btn-secondary btn-sm`,onClick:_,children:[(0,I.jsx)(ra,{className:`w-4 h-4`}),` Export`]}),(0,I.jsxs)(`button`,{type:`button`,className:`btn btn-secondary btn-sm`,onClick:()=>p.current?.click(),children:[(0,I.jsx)(yo,{className:`w-4 h-4`}),` Import`]})]}),(0,I.jsx)(`input`,{ref:p,type:`file`,accept:`application/json,.json`,className:`hidden`,onChange:e=>{let t=e.target.files?.[0];t&&y(t),e.target.value=``}}),(0,I.jsxs)(`button`,{type:`button`,className:`btn btn-ghost btn-sm w-full text-bad`,onClick:()=>u(!0),children:[(0,I.jsx)(uo,{className:`w-4 h-4`}),` Reset all progress`]})]})}),(0,I.jsx)(`p`,{className:`text-center text-xs font-bold text-ink3 pb-4`,children:`Camino · Spanish A1 → B1 · made for learning, no ads, no tracking.`}),l&&(0,I.jsx)(Wc,{onClose:()=>u(!1),label:`Reset progress?`,children:(0,I.jsxs)(`div`,{className:`p-6 space-y-4 text-center`,children:[(0,I.jsx)(`h2`,{className:`text-xl font-black`,children:`Reset everything?`}),(0,I.jsx)(`p`,{className:`font-bold text-ink2`,children:`Your streak, XP, words and lesson progress will be deleted from this device. Export a backup first if you might want it back.`}),(0,I.jsxs)(`div`,{className:`grid gap-2`,children:[(0,I.jsx)(`button`,{type:`button`,className:`btn btn-bad`,onClick:()=>{a(),u(!1)},children:`Yes, reset`}),(0,I.jsx)(`button`,{type:`button`,className:`btn btn-secondary`,onClick:()=>u(!1),children:`Cancel`})]})]})})]})}function Lf(){let e=B(e=>e.settings),t=yl(e=>e.setInstallEvent),n=yl(e=>e.closeWord),{pathname:r}=j();return(0,v.useEffect)(()=>{let t=document.documentElement;e.theme===`system`?t.removeAttribute(`data-theme`):t.setAttribute(`data-theme`,e.theme)},[e.theme]),(0,v.useEffect)(()=>{rl({voiceURI:e.voiceURI,rate:e.rate})},[e.voiceURI,e.rate]),(0,v.useEffect)(()=>Yl(e.sound),[e.sound]),(0,v.useEffect)(()=>{let e=e=>{e.preventDefault(),t(e)};return window.addEventListener(`beforeinstallprompt`,e),()=>window.removeEventListener(`beforeinstallprompt`,e)},[t]),(0,v.useEffect)(()=>{window.scrollTo(0,0),n()},[r,n]),null}function Rf(){return B(e=>e.onboarded)?(0,I.jsx)(xr,{}):(0,I.jsx)(br,{to:`/welcome`,replace:!0})}function zf(){return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(Hc,{}),(0,I.jsx)(`div`,{className:`lg:pl-64`,children:(0,I.jsx)(`main`,{className:`max-w-3xl mx-auto px-4 sm:px-6 pt-5 pb-28 lg:pb-12 safe-top`,children:(0,I.jsx)(xr,{})})}),(0,I.jsx)(Vc,{})]})}function Bf(){return(0,I.jsxs)(ui,{children:[(0,I.jsx)(Lf,{}),(0,I.jsxs)(wr,{children:[(0,I.jsx)(Sr,{path:`/welcome`,element:(0,I.jsx)(tu,{})}),(0,I.jsxs)(Sr,{element:(0,I.jsx)(Rf,{}),children:[(0,I.jsxs)(Sr,{element:(0,I.jsx)(zf,{}),children:[(0,I.jsx)(Sr,{index:!0,element:(0,I.jsx)(ku,{})}),(0,I.jsx)(Sr,{path:`path`,element:(0,I.jsx)(Mu,{})}),(0,I.jsx)(Sr,{path:`practice`,element:(0,I.jsx)(Jd,{})}),(0,I.jsx)(Sr,{path:`words`,element:(0,I.jsx)(xf,{})}),(0,I.jsx)(Sr,{path:`me`,element:(0,I.jsx)(Af,{})}),(0,I.jsx)(Sr,{path:`settings`,element:(0,I.jsx)(If,{})}),(0,I.jsx)(Sr,{path:`verbs`,element:(0,I.jsx)(Zd,{})}),(0,I.jsx)(Sr,{path:`verbs/:inf`,element:(0,I.jsx)($d,{})}),(0,I.jsx)(Sr,{path:`pronunciation`,element:(0,I.jsx)(uf,{})}),(0,I.jsx)(Sr,{path:`stories`,element:(0,I.jsx)(yf,{})}),(0,I.jsx)(Sr,{path:`grammar`,element:(0,I.jsx)(wf,{})}),(0,I.jsx)(Sr,{path:`numbers`,element:(0,I.jsx)(Of,{})})]}),(0,I.jsx)(Sr,{path:`lesson/:id`,element:(0,I.jsx)(Rd,{})}),(0,I.jsx)(Sr,{path:`week/:n`,element:(0,I.jsx)(zd,{})}),(0,I.jsx)(Sr,{path:`review`,element:(0,I.jsx)(Hd,{})}),(0,I.jsx)(Sr,{path:`story/:id`,element:(0,I.jsx)(bf,{})}),(0,I.jsx)(Sr,{path:`train/verbs`,element:(0,I.jsx)(of,{})}),(0,I.jsx)(Sr,{path:`session/:kind`,element:(0,I.jsx)(Xd,{})})]}),(0,I.jsx)(Sr,{path:`*`,element:(0,I.jsx)(br,{to:`/`,replace:!0})})]}),(0,I.jsx)(Ul,{}),(0,I.jsx)(Kl,{})]})}ne({immediate:!0}),(0,y.createRoot)(document.getElementById(`root`)).render((0,I.jsx)(v.StrictMode,{children:(0,I.jsx)(Bf,{})}));