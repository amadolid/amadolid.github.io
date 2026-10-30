(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const v of document.querySelectorAll('link[rel="modulepreload"]'))d(v);new MutationObserver(v=>{for(const w of v)if(w.type==="childList")for(const k of w.addedNodes)k.tagName==="LINK"&&k.rel==="modulepreload"&&d(k)}).observe(document,{childList:!0,subtree:!0});function c(v){const w={};return v.integrity&&(w.integrity=v.integrity),v.referrerPolicy&&(w.referrerPolicy=v.referrerPolicy),v.crossOrigin==="use-credentials"?w.credentials="include":v.crossOrigin==="anonymous"?w.credentials="omit":w.credentials="same-origin",w}function d(v){if(v.ep)return;v.ep=!0;const w=c(v);fetch(v.href,w)}})();var _i=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function io(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var ol={exports:{}},ro={},il={exports:{}},he={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tu;function Ip(){if(Tu)return he;Tu=1;var s=Symbol.for("react.element"),u=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),k=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),Y=Symbol.for("react.memo"),O=Symbol.for("react.lazy"),E=Symbol.iterator;function B(m){return m===null||typeof m!="object"?null:(m=E&&m[E]||m["@@iterator"],typeof m=="function"?m:null)}var V={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,q={};function U(m,S,$){this.props=m,this.context=S,this.refs=q,this.updater=$||V}U.prototype.isReactComponent={},U.prototype.setState=function(m,S){if(typeof m!="object"&&typeof m!="function"&&m!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,m,S,"setState")},U.prototype.forceUpdate=function(m){this.updater.enqueueForceUpdate(this,m,"forceUpdate")};function ie(){}ie.prototype=U.prototype;function b(m,S,$){this.props=m,this.context=S,this.refs=q,this.updater=$||V}var A=b.prototype=new ie;A.constructor=b,X(A,U.prototype),A.isPureReactComponent=!0;var T=Array.isArray,P=Object.prototype.hasOwnProperty,g={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function H(m,S,$){var J,ne={},ae=null,ue=null;if(S!=null)for(J in S.ref!==void 0&&(ue=S.ref),S.key!==void 0&&(ae=""+S.key),S)P.call(S,J)&&!N.hasOwnProperty(J)&&(ne[J]=S[J]);var de=arguments.length-2;if(de===1)ne.children=$;else if(1<de){for(var ge=Array(de),Ee=0;Ee<de;Ee++)ge[Ee]=arguments[Ee+2];ne.children=ge}if(m&&m.defaultProps)for(J in de=m.defaultProps,de)ne[J]===void 0&&(ne[J]=de[J]);return{$$typeof:s,type:m,key:ae,ref:ue,props:ne,_owner:g.current}}function L(m,S){return{$$typeof:s,type:m.type,key:S,ref:m.ref,props:m.props,_owner:m._owner}}function le(m){return typeof m=="object"&&m!==null&&m.$$typeof===s}function se(m){var S={"=":"=0",":":"=2"};return"$"+m.replace(/[=:]/g,function($){return S[$]})}var me=/\/+/g;function ve(m,S){return typeof m=="object"&&m!==null&&m.key!=null?se(""+m.key):S.toString(36)}function Ae(m,S,$,J,ne){var ae=typeof m;(ae==="undefined"||ae==="boolean")&&(m=null);var ue=!1;if(m===null)ue=!0;else switch(ae){case"string":case"number":ue=!0;break;case"object":switch(m.$$typeof){case s:case u:ue=!0}}if(ue)return ue=m,ne=ne(ue),m=J===""?"."+ve(ue,0):J,T(ne)?($="",m!=null&&($=m.replace(me,"$&/")+"/"),Ae(ne,S,$,"",function(Ee){return Ee})):ne!=null&&(le(ne)&&(ne=L(ne,$+(!ne.key||ue&&ue.key===ne.key?"":(""+ne.key).replace(me,"$&/")+"/")+m)),S.push(ne)),1;if(ue=0,J=J===""?".":J+":",T(m))for(var de=0;de<m.length;de++){ae=m[de];var ge=J+ve(ae,de);ue+=Ae(ae,S,$,ge,ne)}else if(ge=B(m),typeof ge=="function")for(m=ge.call(m),de=0;!(ae=m.next()).done;)ae=ae.value,ge=J+ve(ae,de++),ue+=Ae(ae,S,$,ge,ne);else if(ae==="object")throw S=String(m),Error("Objects are not valid as a React child (found: "+(S==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":S)+"). If you meant to render a collection of children, use an array instead.");return ue}function Ie(m,S,$){if(m==null)return m;var J=[],ne=0;return Ae(m,J,"","",function(ae){return S.call($,ae,ne++)}),J}function je(m){if(m._status===-1){var S=m._result;S=S(),S.then(function($){(m._status===0||m._status===-1)&&(m._status=1,m._result=$)},function($){(m._status===0||m._status===-1)&&(m._status=2,m._result=$)}),m._status===-1&&(m._status=0,m._result=S)}if(m._status===1)return m._result.default;throw m._result}var pe={current:null},M={transition:null},K={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:M,ReactCurrentOwner:g};function G(){throw Error("act(...) is not supported in production builds of React.")}return he.Children={map:Ie,forEach:function(m,S,$){Ie(m,function(){S.apply(this,arguments)},$)},count:function(m){var S=0;return Ie(m,function(){S++}),S},toArray:function(m){return Ie(m,function(S){return S})||[]},only:function(m){if(!le(m))throw Error("React.Children.only expected to receive a single React element child.");return m}},he.Component=U,he.Fragment=c,he.Profiler=v,he.PureComponent=b,he.StrictMode=d,he.Suspense=R,he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K,he.act=G,he.cloneElement=function(m,S,$){if(m==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+m+".");var J=X({},m.props),ne=m.key,ae=m.ref,ue=m._owner;if(S!=null){if(S.ref!==void 0&&(ae=S.ref,ue=g.current),S.key!==void 0&&(ne=""+S.key),m.type&&m.type.defaultProps)var de=m.type.defaultProps;for(ge in S)P.call(S,ge)&&!N.hasOwnProperty(ge)&&(J[ge]=S[ge]===void 0&&de!==void 0?de[ge]:S[ge])}var ge=arguments.length-2;if(ge===1)J.children=$;else if(1<ge){de=Array(ge);for(var Ee=0;Ee<ge;Ee++)de[Ee]=arguments[Ee+2];J.children=de}return{$$typeof:s,type:m.type,key:ne,ref:ae,props:J,_owner:ue}},he.createContext=function(m){return m={$$typeof:k,_currentValue:m,_currentValue2:m,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},m.Provider={$$typeof:w,_context:m},m.Consumer=m},he.createElement=H,he.createFactory=function(m){var S=H.bind(null,m);return S.type=m,S},he.createRef=function(){return{current:null}},he.forwardRef=function(m){return{$$typeof:y,render:m}},he.isValidElement=le,he.lazy=function(m){return{$$typeof:O,_payload:{_status:-1,_result:m},_init:je}},he.memo=function(m,S){return{$$typeof:Y,type:m,compare:S===void 0?null:S}},he.startTransition=function(m){var S=M.transition;M.transition={};try{m()}finally{M.transition=S}},he.unstable_act=G,he.useCallback=function(m,S){return pe.current.useCallback(m,S)},he.useContext=function(m){return pe.current.useContext(m)},he.useDebugValue=function(){},he.useDeferredValue=function(m){return pe.current.useDeferredValue(m)},he.useEffect=function(m,S){return pe.current.useEffect(m,S)},he.useId=function(){return pe.current.useId()},he.useImperativeHandle=function(m,S,$){return pe.current.useImperativeHandle(m,S,$)},he.useInsertionEffect=function(m,S){return pe.current.useInsertionEffect(m,S)},he.useLayoutEffect=function(m,S){return pe.current.useLayoutEffect(m,S)},he.useMemo=function(m,S){return pe.current.useMemo(m,S)},he.useReducer=function(m,S,$){return pe.current.useReducer(m,S,$)},he.useRef=function(m){return pe.current.useRef(m)},he.useState=function(m){return pe.current.useState(m)},he.useSyncExternalStore=function(m,S,$){return pe.current.useSyncExternalStore(m,S,$)},he.useTransition=function(){return pe.current.useTransition()},he.version="18.3.1",he}var Eu;function Kl(){return Eu||(Eu=1,il.exports=Ip()),il.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lu;function Op(){if(Lu)return ro;Lu=1;var s=Kl(),u=Symbol.for("react.element"),c=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,v=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,w={key:!0,ref:!0,__self:!0,__source:!0};function k(y,R,Y){var O,E={},B=null,V=null;Y!==void 0&&(B=""+Y),R.key!==void 0&&(B=""+R.key),R.ref!==void 0&&(V=R.ref);for(O in R)d.call(R,O)&&!w.hasOwnProperty(O)&&(E[O]=R[O]);if(y&&y.defaultProps)for(O in R=y.defaultProps,R)E[O]===void 0&&(E[O]=R[O]);return{$$typeof:u,type:y,key:B,ref:V,props:E,_owner:v.current}}return ro.Fragment=c,ro.jsx=k,ro.jsxs=k,ro}var Mu;function Dp(){return Mu||(Mu=1,ol.exports=Op()),ol.exports}var n=Dp(),ze=Kl();const An=io(ze);var mi={},sl={exports:{}},it={},ll={exports:{}},al={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iu;function Fp(){return Iu||(Iu=1,(function(s){function u(M,K){var G=M.length;M.push(K);e:for(;0<G;){var m=G-1>>>1,S=M[m];if(0<v(S,K))M[m]=K,M[G]=S,G=m;else break e}}function c(M){return M.length===0?null:M[0]}function d(M){if(M.length===0)return null;var K=M[0],G=M.pop();if(G!==K){M[0]=G;e:for(var m=0,S=M.length,$=S>>>1;m<$;){var J=2*(m+1)-1,ne=M[J],ae=J+1,ue=M[ae];if(0>v(ne,G))ae<S&&0>v(ue,ne)?(M[m]=ue,M[ae]=G,m=ae):(M[m]=ne,M[J]=G,m=J);else if(ae<S&&0>v(ue,G))M[m]=ue,M[ae]=G,m=ae;else break e}}return K}function v(M,K){var G=M.sortIndex-K.sortIndex;return G!==0?G:M.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var w=performance;s.unstable_now=function(){return w.now()}}else{var k=Date,y=k.now();s.unstable_now=function(){return k.now()-y}}var R=[],Y=[],O=1,E=null,B=3,V=!1,X=!1,q=!1,U=typeof setTimeout=="function"?setTimeout:null,ie=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(M){for(var K=c(Y);K!==null;){if(K.callback===null)d(Y);else if(K.startTime<=M)d(Y),K.sortIndex=K.expirationTime,u(R,K);else break;K=c(Y)}}function T(M){if(q=!1,A(M),!X)if(c(R)!==null)X=!0,je(P);else{var K=c(Y);K!==null&&pe(T,K.startTime-M)}}function P(M,K){X=!1,q&&(q=!1,ie(H),H=-1),V=!0;var G=B;try{for(A(K),E=c(R);E!==null&&(!(E.expirationTime>K)||M&&!se());){var m=E.callback;if(typeof m=="function"){E.callback=null,B=E.priorityLevel;var S=m(E.expirationTime<=K);K=s.unstable_now(),typeof S=="function"?E.callback=S:E===c(R)&&d(R),A(K)}else d(R);E=c(R)}if(E!==null)var $=!0;else{var J=c(Y);J!==null&&pe(T,J.startTime-K),$=!1}return $}finally{E=null,B=G,V=!1}}var g=!1,N=null,H=-1,L=5,le=-1;function se(){return!(s.unstable_now()-le<L)}function me(){if(N!==null){var M=s.unstable_now();le=M;var K=!0;try{K=N(!0,M)}finally{K?ve():(g=!1,N=null)}}else g=!1}var ve;if(typeof b=="function")ve=function(){b(me)};else if(typeof MessageChannel<"u"){var Ae=new MessageChannel,Ie=Ae.port2;Ae.port1.onmessage=me,ve=function(){Ie.postMessage(null)}}else ve=function(){U(me,0)};function je(M){N=M,g||(g=!0,ve())}function pe(M,K){H=U(function(){M(s.unstable_now())},K)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(M){M.callback=null},s.unstable_continueExecution=function(){X||V||(X=!0,je(P))},s.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<M?Math.floor(1e3/M):5},s.unstable_getCurrentPriorityLevel=function(){return B},s.unstable_getFirstCallbackNode=function(){return c(R)},s.unstable_next=function(M){switch(B){case 1:case 2:case 3:var K=3;break;default:K=B}var G=B;B=K;try{return M()}finally{B=G}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(M,K){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var G=B;B=M;try{return K()}finally{B=G}},s.unstable_scheduleCallback=function(M,K,G){var m=s.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?m+G:m):G=m,M){case 1:var S=-1;break;case 2:S=250;break;case 5:S=1073741823;break;case 4:S=1e4;break;default:S=5e3}return S=G+S,M={id:O++,callback:K,priorityLevel:M,startTime:G,expirationTime:S,sortIndex:-1},G>m?(M.sortIndex=G,u(Y,M),c(R)===null&&M===c(Y)&&(q?(ie(H),H=-1):q=!0,pe(T,G-m))):(M.sortIndex=S,u(R,M),X||V||(X=!0,je(P))),M},s.unstable_shouldYield=se,s.unstable_wrapCallback=function(M){var K=B;return function(){var G=B;B=K;try{return M.apply(this,arguments)}finally{B=G}}}})(al)),al}var Ou;function zp(){return Ou||(Ou=1,ll.exports=Fp()),ll.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Du;function Gp(){if(Du)return it;Du=1;var s=Kl(),u=zp();function c(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d=new Set,v={};function w(e,t){k(e,t),k(e+"Capture",t)}function k(e,t){for(v[e]=t,e=0;e<t.length;e++)d.add(t[e])}var y=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),R=Object.prototype.hasOwnProperty,Y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,O={},E={};function B(e){return R.call(E,e)?!0:R.call(O,e)?!1:Y.test(e)?E[e]=!0:(O[e]=!0,!1)}function V(e,t,r,o){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function X(e,t,r,o){if(t===null||typeof t>"u"||V(e,t,r,o))return!0;if(o)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function q(e,t,r,o,i,l,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=a}var U={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){U[e]=new q(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];U[t]=new q(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){U[e]=new q(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){U[e]=new q(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){U[e]=new q(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){U[e]=new q(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){U[e]=new q(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){U[e]=new q(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){U[e]=new q(e,5,!1,e.toLowerCase(),null,!1,!1)});var ie=/[\-:]([a-z])/g;function b(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ie,b);U[t]=new q(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ie,b);U[t]=new q(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ie,b);U[t]=new q(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){U[e]=new q(e,1,!1,e.toLowerCase(),null,!1,!1)}),U.xlinkHref=new q("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){U[e]=new q(e,1,!1,e.toLowerCase(),null,!0,!0)});function A(e,t,r,o){var i=U.hasOwnProperty(t)?U[t]:null;(i!==null?i.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(X(t,r,i,o)&&(r=null),o||i===null?B(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,o=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,o?e.setAttributeNS(o,t,r):e.setAttribute(t,r))))}var T=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,P=Symbol.for("react.element"),g=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),le=Symbol.for("react.provider"),se=Symbol.for("react.context"),me=Symbol.for("react.forward_ref"),ve=Symbol.for("react.suspense"),Ae=Symbol.for("react.suspense_list"),Ie=Symbol.for("react.memo"),je=Symbol.for("react.lazy"),pe=Symbol.for("react.offscreen"),M=Symbol.iterator;function K(e){return e===null||typeof e!="object"?null:(e=M&&e[M]||e["@@iterator"],typeof e=="function"?e:null)}var G=Object.assign,m;function S(e){if(m===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);m=t&&t[1]||""}return`
`+m+e}var $=!1;function J(e,t){if(!e||$)return"";$=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(C){var o=C}Reflect.construct(e,[],t)}else{try{t.call()}catch(C){o=C}e.call(t.prototype)}else{try{throw Error()}catch(C){o=C}e()}}catch(C){if(C&&o&&typeof C.stack=="string"){for(var i=C.stack.split(`
`),l=o.stack.split(`
`),a=i.length-1,h=l.length-1;1<=a&&0<=h&&i[a]!==l[h];)h--;for(;1<=a&&0<=h;a--,h--)if(i[a]!==l[h]){if(a!==1||h!==1)do if(a--,h--,0>h||i[a]!==l[h]){var p=`
`+i[a].replace(" at new "," at ");return e.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",e.displayName)),p}while(1<=a&&0<=h);break}}}finally{$=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?S(e):""}function ne(e){switch(e.tag){case 5:return S(e.type);case 16:return S("Lazy");case 13:return S("Suspense");case 19:return S("SuspenseList");case 0:case 2:case 15:return e=J(e.type,!1),e;case 11:return e=J(e.type.render,!1),e;case 1:return e=J(e.type,!0),e;default:return""}}function ae(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case N:return"Fragment";case g:return"Portal";case L:return"Profiler";case H:return"StrictMode";case ve:return"Suspense";case Ae:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case se:return(e.displayName||"Context")+".Consumer";case le:return(e._context.displayName||"Context")+".Provider";case me:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ie:return t=e.displayName||null,t!==null?t:ae(e.type)||"Memo";case je:t=e._payload,e=e._init;try{return ae(e(t))}catch{}}return null}function ue(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ae(t);case 8:return t===H?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function de(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ge(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ee(e){var t=ge(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,l=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){o=""+a,l.call(this,a)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(a){o=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function lt(e){e._valueTracker||(e._valueTracker=Ee(e))}function Gn(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),o="";return e&&(o=ge(e)?e.checked?"true":"false":e.value),e=o,e!==r?(t.setValue(e),!0):!1}function ft(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function yr(e,t){var r=t.checked;return G({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Bn(e,t){var r=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;r=de(t.value!=null?t.value:r),e._wrapperState={initialChecked:o,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function wt(e,t){t=t.checked,t!=null&&A(e,"checked",t,!1)}function Un(e,t){wt(e,t);var r=de(t.value),o=t.type;if(r!=null)o==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Hn(e,t.type,r):t.hasOwnProperty("defaultValue")&&Hn(e,t.type,de(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Et(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Hn(e,t,r){(t!=="number"||ft(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var at=Array.isArray;function Lt(e,t,r,o){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&o&&(e[r].defaultSelected=!0)}else{for(r=""+de(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,o&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Mt(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(c(91));return G({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function qn(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(c(92));if(at(r)){if(1<r.length)throw Error(c(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:de(r)}}function It(e,t){var r=de(t.value),o=de(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),o!=null&&(e.defaultValue=""+o)}function We(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ct(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pe(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ct(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var we,ct=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,o,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,o,i)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(we=we||document.createElement("div"),we.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=we.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ot(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var qt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$t=["Webkit","ms","Moz","O"];Object.keys(qt).forEach(function(e){$t.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),qt[t]=qt[e]})});function nn(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||qt.hasOwnProperty(e)&&qt[e]?(""+t).trim():t+"px"}function Dt(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var o=r.indexOf("--")===0,i=nn(r,t[r],o);r==="float"&&(r="cssFloat"),o?e.setProperty(r,i):e[r]=i}}var kt=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $n(e,t){if(t){if(kt[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(c(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(c(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(c(61))}if(t.style!=null&&typeof t.style!="object")throw Error(c(62))}}function Wt(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rn=null;function Ze(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Re=null,mt=null,on=null;function xr(e){if(e=Ur(e)){if(typeof Re!="function")throw Error(c(280));var t=e.stateNode;t&&(t=Ro(t),Re(e.stateNode,e.type,t))}}function vr(e){mt?on?on.push(e):on=[e]:mt=e}function _r(){if(mt){var e=mt,t=on;if(on=mt=null,xr(e),t)for(e=0;e<t.length;e++)xr(t[e])}}function Wn(e,t){return e(t)}function Jl(){}var ji=!1;function Zl(e,t,r){if(ji)return e(t,r);ji=!0;try{return Wn(e,t,r)}finally{ji=!1,(mt!==null||on!==null)&&(Jl(),_r())}}function jr(e,t){var r=e.stateNode;if(r===null)return null;var o=Ro(r);if(o===null)return null;r=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(c(231,t,typeof r));return r}var wi=!1;if(y)try{var wr={};Object.defineProperty(wr,"passive",{get:function(){wi=!0}}),window.addEventListener("test",wr,wr),window.removeEventListener("test",wr,wr)}catch{wi=!1}function Bd(e,t,r,o,i,l,a,h,p){var C=Array.prototype.slice.call(arguments,3);try{t.apply(r,C)}catch(D){this.onError(D)}}var Cr=!1,lo=null,ao=!1,Ci=null,Ud={onError:function(e){Cr=!0,lo=e}};function Hd(e,t,r,o,i,l,a,h,p){Cr=!1,lo=null,Bd.apply(Ud,arguments)}function qd(e,t,r,o,i,l,a,h,p){if(Hd.apply(this,arguments),Cr){if(Cr){var C=lo;Cr=!1,lo=null}else throw Error(c(198));ao||(ao=!0,Ci=C)}}function bn(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function ea(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ta(e){if(bn(e)!==e)throw Error(c(188))}function $d(e){var t=e.alternate;if(!t){if(t=bn(e),t===null)throw Error(c(188));return t!==e?null:e}for(var r=e,o=t;;){var i=r.return;if(i===null)break;var l=i.alternate;if(l===null){if(o=i.return,o!==null){r=o;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===r)return ta(i),e;if(l===o)return ta(i),t;l=l.sibling}throw Error(c(188))}if(r.return!==o.return)r=i,o=l;else{for(var a=!1,h=i.child;h;){if(h===r){a=!0,r=i,o=l;break}if(h===o){a=!0,o=i,r=l;break}h=h.sibling}if(!a){for(h=l.child;h;){if(h===r){a=!0,r=l,o=i;break}if(h===o){a=!0,o=l,r=i;break}h=h.sibling}if(!a)throw Error(c(189))}}if(r.alternate!==o)throw Error(c(190))}if(r.tag!==3)throw Error(c(188));return r.stateNode.current===r?e:t}function na(e){return e=$d(e),e!==null?ra(e):null}function ra(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ra(e);if(t!==null)return t;e=e.sibling}return null}var oa=u.unstable_scheduleCallback,ia=u.unstable_cancelCallback,Wd=u.unstable_shouldYield,Vd=u.unstable_requestPaint,Le=u.unstable_now,Kd=u.unstable_getCurrentPriorityLevel,ki=u.unstable_ImmediatePriority,sa=u.unstable_UserBlockingPriority,co=u.unstable_NormalPriority,Yd=u.unstable_LowPriority,la=u.unstable_IdlePriority,uo=null,Ft=null;function Qd(e){if(Ft&&typeof Ft.onCommitFiberRoot=="function")try{Ft.onCommitFiberRoot(uo,e,void 0,(e.current.flags&128)===128)}catch{}}var At=Math.clz32?Math.clz32:Zd,Xd=Math.log,Jd=Math.LN2;function Zd(e){return e>>>=0,e===0?32:31-(Xd(e)/Jd|0)|0}var ho=64,po=4194304;function kr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function fo(e,t){var r=e.pendingLanes;if(r===0)return 0;var o=0,i=e.suspendedLanes,l=e.pingedLanes,a=r&268435455;if(a!==0){var h=a&~i;h!==0?o=kr(h):(l&=a,l!==0&&(o=kr(l)))}else a=r&~i,a!==0?o=kr(a):l!==0&&(o=kr(l));if(o===0)return 0;if(t!==0&&t!==o&&(t&i)===0&&(i=o&-o,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if((o&4)!==0&&(o|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)r=31-At(t),i=1<<r,o|=e[r],t&=~i;return o}function eh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function th(e,t){for(var r=e.suspendedLanes,o=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var a=31-At(l),h=1<<a,p=i[a];p===-1?((h&r)===0||(h&o)!==0)&&(i[a]=eh(h,t)):p<=t&&(e.expiredLanes|=h),l&=~h}}function Ai(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function aa(){var e=ho;return ho<<=1,(ho&4194240)===0&&(ho=64),e}function Si(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Ar(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-At(t),e[t]=r}function nh(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-At(r),l=1<<i;t[i]=0,o[i]=-1,e[i]=-1,r&=~l}}function bi(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var o=31-At(r),i=1<<o;i&t|e[o]&t&&(e[o]|=t),r&=~i}}var xe=0;function ca(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var ua,Ni,da,ha,pa,Pi=!1,mo=[],sn=null,ln=null,an=null,Sr=new Map,br=new Map,cn=[],rh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fa(e,t){switch(e){case"focusin":case"focusout":sn=null;break;case"dragenter":case"dragleave":ln=null;break;case"mouseover":case"mouseout":an=null;break;case"pointerover":case"pointerout":Sr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":br.delete(t.pointerId)}}function Nr(e,t,r,o,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:r,eventSystemFlags:o,nativeEvent:l,targetContainers:[i]},t!==null&&(t=Ur(t),t!==null&&Ni(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function oh(e,t,r,o,i){switch(t){case"focusin":return sn=Nr(sn,e,t,r,o,i),!0;case"dragenter":return ln=Nr(ln,e,t,r,o,i),!0;case"mouseover":return an=Nr(an,e,t,r,o,i),!0;case"pointerover":var l=i.pointerId;return Sr.set(l,Nr(Sr.get(l)||null,e,t,r,o,i)),!0;case"gotpointercapture":return l=i.pointerId,br.set(l,Nr(br.get(l)||null,e,t,r,o,i)),!0}return!1}function ma(e){var t=Nn(e.target);if(t!==null){var r=bn(t);if(r!==null){if(t=r.tag,t===13){if(t=ea(r),t!==null){e.blockedOn=t,pa(e.priority,function(){da(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function go(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Ti(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var o=new r.constructor(r.type,r);rn=o,r.target.dispatchEvent(o),rn=null}else return t=Ur(r),t!==null&&Ni(t),e.blockedOn=r,!1;t.shift()}return!0}function ga(e,t,r){go(e)&&r.delete(t)}function ih(){Pi=!1,sn!==null&&go(sn)&&(sn=null),ln!==null&&go(ln)&&(ln=null),an!==null&&go(an)&&(an=null),Sr.forEach(ga),br.forEach(ga)}function Pr(e,t){e.blockedOn===t&&(e.blockedOn=null,Pi||(Pi=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,ih)))}function Rr(e){function t(i){return Pr(i,e)}if(0<mo.length){Pr(mo[0],e);for(var r=1;r<mo.length;r++){var o=mo[r];o.blockedOn===e&&(o.blockedOn=null)}}for(sn!==null&&Pr(sn,e),ln!==null&&Pr(ln,e),an!==null&&Pr(an,e),Sr.forEach(t),br.forEach(t),r=0;r<cn.length;r++)o=cn[r],o.blockedOn===e&&(o.blockedOn=null);for(;0<cn.length&&(r=cn[0],r.blockedOn===null);)ma(r),r.blockedOn===null&&cn.shift()}var Vn=T.ReactCurrentBatchConfig,yo=!0;function sh(e,t,r,o){var i=xe,l=Vn.transition;Vn.transition=null;try{xe=1,Ri(e,t,r,o)}finally{xe=i,Vn.transition=l}}function lh(e,t,r,o){var i=xe,l=Vn.transition;Vn.transition=null;try{xe=4,Ri(e,t,r,o)}finally{xe=i,Vn.transition=l}}function Ri(e,t,r,o){if(yo){var i=Ti(e,t,r,o);if(i===null)Ki(e,t,o,xo,r),fa(e,o);else if(oh(i,e,t,r,o))o.stopPropagation();else if(fa(e,o),t&4&&-1<rh.indexOf(e)){for(;i!==null;){var l=Ur(i);if(l!==null&&ua(l),l=Ti(e,t,r,o),l===null&&Ki(e,t,o,xo,r),l===i)break;i=l}i!==null&&o.stopPropagation()}else Ki(e,t,o,null,r)}}var xo=null;function Ti(e,t,r,o){if(xo=null,e=Ze(o),e=Nn(e),e!==null)if(t=bn(e),t===null)e=null;else if(r=t.tag,r===13){if(e=ea(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return xo=e,null}function ya(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Kd()){case ki:return 1;case sa:return 4;case co:case Yd:return 16;case la:return 536870912;default:return 16}default:return 16}}var un=null,Ei=null,vo=null;function xa(){if(vo)return vo;var e,t=Ei,r=t.length,o,i="value"in un?un.value:un.textContent,l=i.length;for(e=0;e<r&&t[e]===i[e];e++);var a=r-e;for(o=1;o<=a&&t[r-o]===i[l-o];o++);return vo=i.slice(e,1<o?1-o:void 0)}function _o(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function jo(){return!0}function va(){return!1}function ut(e){function t(r,o,i,l,a){this._reactName=r,this._targetInst=i,this.type=o,this.nativeEvent=l,this.target=a,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(r=e[h],this[h]=r?r(l):l[h]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?jo:va,this.isPropagationStopped=va,this}return G(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=jo)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=jo)},persist:function(){},isPersistent:jo}),t}var Kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Li=ut(Kn),Tr=G({},Kn,{view:0,detail:0}),ah=ut(Tr),Mi,Ii,Er,wo=G({},Tr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Di,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Er&&(Er&&e.type==="mousemove"?(Mi=e.screenX-Er.screenX,Ii=e.screenY-Er.screenY):Ii=Mi=0,Er=e),Mi)},movementY:function(e){return"movementY"in e?e.movementY:Ii}}),_a=ut(wo),ch=G({},wo,{dataTransfer:0}),uh=ut(ch),dh=G({},Tr,{relatedTarget:0}),Oi=ut(dh),hh=G({},Kn,{animationName:0,elapsedTime:0,pseudoElement:0}),ph=ut(hh),fh=G({},Kn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),mh=ut(fh),gh=G({},Kn,{data:0}),ja=ut(gh),yh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _h(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=vh[e])?!!t[e]:!1}function Di(){return _h}var jh=G({},Tr,{key:function(e){if(e.key){var t=yh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=_o(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?xh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Di,charCode:function(e){return e.type==="keypress"?_o(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_o(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),wh=ut(jh),Ch=G({},wo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wa=ut(Ch),kh=G({},Tr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Di}),Ah=ut(kh),Sh=G({},Kn,{propertyName:0,elapsedTime:0,pseudoElement:0}),bh=ut(Sh),Nh=G({},wo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ph=ut(Nh),Rh=[9,13,27,32],Fi=y&&"CompositionEvent"in window,Lr=null;y&&"documentMode"in document&&(Lr=document.documentMode);var Th=y&&"TextEvent"in window&&!Lr,Ca=y&&(!Fi||Lr&&8<Lr&&11>=Lr),ka=" ",Aa=!1;function Sa(e,t){switch(e){case"keyup":return Rh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ba(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Yn=!1;function Eh(e,t){switch(e){case"compositionend":return ba(t);case"keypress":return t.which!==32?null:(Aa=!0,ka);case"textInput":return e=t.data,e===ka&&Aa?null:e;default:return null}}function Lh(e,t){if(Yn)return e==="compositionend"||!Fi&&Sa(e,t)?(e=xa(),vo=Ei=un=null,Yn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ca&&t.locale!=="ko"?null:t.data;default:return null}}var Mh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Na(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Mh[e.type]:t==="textarea"}function Pa(e,t,r,o){vr(o),t=bo(t,"onChange"),0<t.length&&(r=new Li("onChange","change",null,r,o),e.push({event:r,listeners:t}))}var Mr=null,Ir=null;function Ih(e){Va(e,0)}function Co(e){var t=er(e);if(Gn(t))return e}function Oh(e,t){if(e==="change")return t}var Ra=!1;if(y){var zi;if(y){var Gi="oninput"in document;if(!Gi){var Ta=document.createElement("div");Ta.setAttribute("oninput","return;"),Gi=typeof Ta.oninput=="function"}zi=Gi}else zi=!1;Ra=zi&&(!document.documentMode||9<document.documentMode)}function Ea(){Mr&&(Mr.detachEvent("onpropertychange",La),Ir=Mr=null)}function La(e){if(e.propertyName==="value"&&Co(Ir)){var t=[];Pa(t,Ir,e,Ze(e)),Zl(Ih,t)}}function Dh(e,t,r){e==="focusin"?(Ea(),Mr=t,Ir=r,Mr.attachEvent("onpropertychange",La)):e==="focusout"&&Ea()}function Fh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Co(Ir)}function zh(e,t){if(e==="click")return Co(t)}function Gh(e,t){if(e==="input"||e==="change")return Co(t)}function Bh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var St=typeof Object.is=="function"?Object.is:Bh;function Or(e,t){if(St(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),o=Object.keys(t);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var i=r[o];if(!R.call(t,i)||!St(e[i],t[i]))return!1}return!0}function Ma(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ia(e,t){var r=Ma(e);e=0;for(var o;r;){if(r.nodeType===3){if(o=e+r.textContent.length,e<=t&&o>=t)return{node:r,offset:t-e};e=o}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Ma(r)}}function Oa(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Oa(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Da(){for(var e=window,t=ft();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=ft(e.document)}return t}function Bi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Uh(e){var t=Da(),r=e.focusedElem,o=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Oa(r.ownerDocument.documentElement,r)){if(o!==null&&Bi(r)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,l=Math.min(o.start,i);o=o.end===void 0?l:Math.min(o.end,i),!e.extend&&l>o&&(i=o,o=l,l=i),i=Ia(r,l);var a=Ia(r,o);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>o?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Hh=y&&"documentMode"in document&&11>=document.documentMode,Qn=null,Ui=null,Dr=null,Hi=!1;function Fa(e,t,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Hi||Qn==null||Qn!==ft(o)||(o=Qn,"selectionStart"in o&&Bi(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Dr&&Or(Dr,o)||(Dr=o,o=bo(Ui,"onSelect"),0<o.length&&(t=new Li("onSelect","select",null,t,r),e.push({event:t,listeners:o}),t.target=Qn)))}function ko(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Xn={animationend:ko("Animation","AnimationEnd"),animationiteration:ko("Animation","AnimationIteration"),animationstart:ko("Animation","AnimationStart"),transitionend:ko("Transition","TransitionEnd")},qi={},za={};y&&(za=document.createElement("div").style,"AnimationEvent"in window||(delete Xn.animationend.animation,delete Xn.animationiteration.animation,delete Xn.animationstart.animation),"TransitionEvent"in window||delete Xn.transitionend.transition);function Ao(e){if(qi[e])return qi[e];if(!Xn[e])return e;var t=Xn[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in za)return qi[e]=t[r];return e}var Ga=Ao("animationend"),Ba=Ao("animationiteration"),Ua=Ao("animationstart"),Ha=Ao("transitionend"),qa=new Map,$a="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dn(e,t){qa.set(e,t),w(t,[e])}for(var $i=0;$i<$a.length;$i++){var Wi=$a[$i],qh=Wi.toLowerCase(),$h=Wi[0].toUpperCase()+Wi.slice(1);dn(qh,"on"+$h)}dn(Ga,"onAnimationEnd"),dn(Ba,"onAnimationIteration"),dn(Ua,"onAnimationStart"),dn("dblclick","onDoubleClick"),dn("focusin","onFocus"),dn("focusout","onBlur"),dn(Ha,"onTransitionEnd"),k("onMouseEnter",["mouseout","mouseover"]),k("onMouseLeave",["mouseout","mouseover"]),k("onPointerEnter",["pointerout","pointerover"]),k("onPointerLeave",["pointerout","pointerover"]),w("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),w("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),w("onBeforeInput",["compositionend","keypress","textInput","paste"]),w("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Wh=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fr));function Wa(e,t,r){var o=e.type||"unknown-event";e.currentTarget=r,qd(o,t,void 0,e),e.currentTarget=null}function Va(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var o=e[r],i=o.event;o=o.listeners;e:{var l=void 0;if(t)for(var a=o.length-1;0<=a;a--){var h=o[a],p=h.instance,C=h.currentTarget;if(h=h.listener,p!==l&&i.isPropagationStopped())break e;Wa(i,h,C),l=p}else for(a=0;a<o.length;a++){if(h=o[a],p=h.instance,C=h.currentTarget,h=h.listener,p!==l&&i.isPropagationStopped())break e;Wa(i,h,C),l=p}}}if(ao)throw e=Ci,ao=!1,Ci=null,e}function Ce(e,t){var r=t[es];r===void 0&&(r=t[es]=new Set);var o=e+"__bubble";r.has(o)||(Ka(t,e,2,!1),r.add(o))}function Vi(e,t,r){var o=0;t&&(o|=4),Ka(r,e,o,t)}var So="_reactListening"+Math.random().toString(36).slice(2);function zr(e){if(!e[So]){e[So]=!0,d.forEach(function(r){r!=="selectionchange"&&(Wh.has(r)||Vi(r,!1,e),Vi(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[So]||(t[So]=!0,Vi("selectionchange",!1,t))}}function Ka(e,t,r,o){switch(ya(t)){case 1:var i=sh;break;case 4:i=lh;break;default:i=Ri}r=i.bind(null,t,r,e),i=void 0,!wi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),o?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function Ki(e,t,r,o,i){var l=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var a=o.tag;if(a===3||a===4){var h=o.stateNode.containerInfo;if(h===i||h.nodeType===8&&h.parentNode===i)break;if(a===4)for(a=o.return;a!==null;){var p=a.tag;if((p===3||p===4)&&(p=a.stateNode.containerInfo,p===i||p.nodeType===8&&p.parentNode===i))return;a=a.return}for(;h!==null;){if(a=Nn(h),a===null)return;if(p=a.tag,p===5||p===6){o=l=a;continue e}h=h.parentNode}}o=o.return}Zl(function(){var C=l,D=Ze(r),F=[];e:{var I=qa.get(e);if(I!==void 0){var W=Li,Z=e;switch(e){case"keypress":if(_o(r)===0)break e;case"keydown":case"keyup":W=wh;break;case"focusin":Z="focus",W=Oi;break;case"focusout":Z="blur",W=Oi;break;case"beforeblur":case"afterblur":W=Oi;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":W=_a;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":W=uh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":W=Ah;break;case Ga:case Ba:case Ua:W=ph;break;case Ha:W=bh;break;case"scroll":W=ah;break;case"wheel":W=Ph;break;case"copy":case"cut":case"paste":W=mh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":W=wa}var ee=(t&4)!==0,Me=!ee&&e==="scroll",x=ee?I!==null?I+"Capture":null:I;ee=[];for(var f=C,j;f!==null;){j=f;var z=j.stateNode;if(j.tag===5&&z!==null&&(j=z,x!==null&&(z=jr(f,x),z!=null&&ee.push(Gr(f,z,j)))),Me)break;f=f.return}0<ee.length&&(I=new W(I,Z,null,r,D),F.push({event:I,listeners:ee}))}}if((t&7)===0){e:{if(I=e==="mouseover"||e==="pointerover",W=e==="mouseout"||e==="pointerout",I&&r!==rn&&(Z=r.relatedTarget||r.fromElement)&&(Nn(Z)||Z[Vt]))break e;if((W||I)&&(I=D.window===D?D:(I=D.ownerDocument)?I.defaultView||I.parentWindow:window,W?(Z=r.relatedTarget||r.toElement,W=C,Z=Z?Nn(Z):null,Z!==null&&(Me=bn(Z),Z!==Me||Z.tag!==5&&Z.tag!==6)&&(Z=null)):(W=null,Z=C),W!==Z)){if(ee=_a,z="onMouseLeave",x="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(ee=wa,z="onPointerLeave",x="onPointerEnter",f="pointer"),Me=W==null?I:er(W),j=Z==null?I:er(Z),I=new ee(z,f+"leave",W,r,D),I.target=Me,I.relatedTarget=j,z=null,Nn(D)===C&&(ee=new ee(x,f+"enter",Z,r,D),ee.target=j,ee.relatedTarget=Me,z=ee),Me=z,W&&Z)t:{for(ee=W,x=Z,f=0,j=ee;j;j=Jn(j))f++;for(j=0,z=x;z;z=Jn(z))j++;for(;0<f-j;)ee=Jn(ee),f--;for(;0<j-f;)x=Jn(x),j--;for(;f--;){if(ee===x||x!==null&&ee===x.alternate)break t;ee=Jn(ee),x=Jn(x)}ee=null}else ee=null;W!==null&&Ya(F,I,W,ee,!1),Z!==null&&Me!==null&&Ya(F,Me,Z,ee,!0)}}e:{if(I=C?er(C):window,W=I.nodeName&&I.nodeName.toLowerCase(),W==="select"||W==="input"&&I.type==="file")var te=Oh;else if(Na(I))if(Ra)te=Gh;else{te=Fh;var re=Dh}else(W=I.nodeName)&&W.toLowerCase()==="input"&&(I.type==="checkbox"||I.type==="radio")&&(te=zh);if(te&&(te=te(e,C))){Pa(F,te,r,D);break e}re&&re(e,I,C),e==="focusout"&&(re=I._wrapperState)&&re.controlled&&I.type==="number"&&Hn(I,"number",I.value)}switch(re=C?er(C):window,e){case"focusin":(Na(re)||re.contentEditable==="true")&&(Qn=re,Ui=C,Dr=null);break;case"focusout":Dr=Ui=Qn=null;break;case"mousedown":Hi=!0;break;case"contextmenu":case"mouseup":case"dragend":Hi=!1,Fa(F,r,D);break;case"selectionchange":if(Hh)break;case"keydown":case"keyup":Fa(F,r,D)}var oe;if(Fi)e:{switch(e){case"compositionstart":var ce="onCompositionStart";break e;case"compositionend":ce="onCompositionEnd";break e;case"compositionupdate":ce="onCompositionUpdate";break e}ce=void 0}else Yn?Sa(e,r)&&(ce="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(ce="onCompositionStart");ce&&(Ca&&r.locale!=="ko"&&(Yn||ce!=="onCompositionStart"?ce==="onCompositionEnd"&&Yn&&(oe=xa()):(un=D,Ei="value"in un?un.value:un.textContent,Yn=!0)),re=bo(C,ce),0<re.length&&(ce=new ja(ce,e,null,r,D),F.push({event:ce,listeners:re}),oe?ce.data=oe:(oe=ba(r),oe!==null&&(ce.data=oe)))),(oe=Th?Eh(e,r):Lh(e,r))&&(C=bo(C,"onBeforeInput"),0<C.length&&(D=new ja("onBeforeInput","beforeinput",null,r,D),F.push({event:D,listeners:C}),D.data=oe))}Va(F,t)})}function Gr(e,t,r){return{instance:e,listener:t,currentTarget:r}}function bo(e,t){for(var r=t+"Capture",o=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=jr(e,r),l!=null&&o.unshift(Gr(e,l,i)),l=jr(e,t),l!=null&&o.push(Gr(e,l,i))),e=e.return}return o}function Jn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ya(e,t,r,o,i){for(var l=t._reactName,a=[];r!==null&&r!==o;){var h=r,p=h.alternate,C=h.stateNode;if(p!==null&&p===o)break;h.tag===5&&C!==null&&(h=C,i?(p=jr(r,l),p!=null&&a.unshift(Gr(r,p,h))):i||(p=jr(r,l),p!=null&&a.push(Gr(r,p,h)))),r=r.return}a.length!==0&&e.push({event:t,listeners:a})}var Vh=/\r\n?/g,Kh=/\u0000|\uFFFD/g;function Qa(e){return(typeof e=="string"?e:""+e).replace(Vh,`
`).replace(Kh,"")}function No(e,t,r){if(t=Qa(t),Qa(e)!==t&&r)throw Error(c(425))}function Po(){}var Yi=null,Qi=null;function Xi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ji=typeof setTimeout=="function"?setTimeout:void 0,Yh=typeof clearTimeout=="function"?clearTimeout:void 0,Xa=typeof Promise=="function"?Promise:void 0,Qh=typeof queueMicrotask=="function"?queueMicrotask:typeof Xa<"u"?function(e){return Xa.resolve(null).then(e).catch(Xh)}:Ji;function Xh(e){setTimeout(function(){throw e})}function Zi(e,t){var r=t,o=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(o===0){e.removeChild(i),Rr(t);return}o--}else r!=="$"&&r!=="$?"&&r!=="$!"||o++;r=i}while(r);Rr(t)}function hn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ja(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Zn=Math.random().toString(36).slice(2),zt="__reactFiber$"+Zn,Br="__reactProps$"+Zn,Vt="__reactContainer$"+Zn,es="__reactEvents$"+Zn,Jh="__reactListeners$"+Zn,Zh="__reactHandles$"+Zn;function Nn(e){var t=e[zt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Vt]||r[zt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Ja(e);e!==null;){if(r=e[zt])return r;e=Ja(e)}return t}e=r,r=e.parentNode}return null}function Ur(e){return e=e[zt]||e[Vt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function er(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(c(33))}function Ro(e){return e[Br]||null}var ts=[],tr=-1;function pn(e){return{current:e}}function ke(e){0>tr||(e.current=ts[tr],ts[tr]=null,tr--)}function _e(e,t){tr++,ts[tr]=e.current,e.current=t}var fn={},Ve=pn(fn),et=pn(!1),Pn=fn;function nr(e,t){var r=e.type.contextTypes;if(!r)return fn;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in r)i[l]=t[l];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function tt(e){return e=e.childContextTypes,e!=null}function To(){ke(et),ke(Ve)}function Za(e,t,r){if(Ve.current!==fn)throw Error(c(168));_e(Ve,t),_e(et,r)}function ec(e,t,r){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return r;o=o.getChildContext();for(var i in o)if(!(i in t))throw Error(c(108,ue(e)||"Unknown",i));return G({},r,o)}function Eo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||fn,Pn=Ve.current,_e(Ve,e),_e(et,et.current),!0}function tc(e,t,r){var o=e.stateNode;if(!o)throw Error(c(169));r?(e=ec(e,t,Pn),o.__reactInternalMemoizedMergedChildContext=e,ke(et),ke(Ve),_e(Ve,e)):ke(et),_e(et,r)}var Kt=null,Lo=!1,ns=!1;function nc(e){Kt===null?Kt=[e]:Kt.push(e)}function ep(e){Lo=!0,nc(e)}function mn(){if(!ns&&Kt!==null){ns=!0;var e=0,t=xe;try{var r=Kt;for(xe=1;e<r.length;e++){var o=r[e];do o=o(!0);while(o!==null)}Kt=null,Lo=!1}catch(i){throw Kt!==null&&(Kt=Kt.slice(e+1)),oa(ki,mn),i}finally{xe=t,ns=!1}}return null}var rr=[],or=0,Mo=null,Io=0,gt=[],yt=0,Rn=null,Yt=1,Qt="";function Tn(e,t){rr[or++]=Io,rr[or++]=Mo,Mo=e,Io=t}function rc(e,t,r){gt[yt++]=Yt,gt[yt++]=Qt,gt[yt++]=Rn,Rn=e;var o=Yt;e=Qt;var i=32-At(o)-1;o&=~(1<<i),r+=1;var l=32-At(t)+i;if(30<l){var a=i-i%5;l=(o&(1<<a)-1).toString(32),o>>=a,i-=a,Yt=1<<32-At(t)+i|r<<i|o,Qt=l+e}else Yt=1<<l|r<<i|o,Qt=e}function rs(e){e.return!==null&&(Tn(e,1),rc(e,1,0))}function os(e){for(;e===Mo;)Mo=rr[--or],rr[or]=null,Io=rr[--or],rr[or]=null;for(;e===Rn;)Rn=gt[--yt],gt[yt]=null,Qt=gt[--yt],gt[yt]=null,Yt=gt[--yt],gt[yt]=null}var dt=null,ht=null,Se=!1,bt=null;function oc(e,t){var r=jt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function ic(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,dt=e,ht=hn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,dt=e,ht=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Rn!==null?{id:Yt,overflow:Qt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=jt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,dt=e,ht=null,!0):!1;default:return!1}}function is(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ss(e){if(Se){var t=ht;if(t){var r=t;if(!ic(e,t)){if(is(e))throw Error(c(418));t=hn(r.nextSibling);var o=dt;t&&ic(e,t)?oc(o,r):(e.flags=e.flags&-4097|2,Se=!1,dt=e)}}else{if(is(e))throw Error(c(418));e.flags=e.flags&-4097|2,Se=!1,dt=e}}}function sc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;dt=e}function Oo(e){if(e!==dt)return!1;if(!Se)return sc(e),Se=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Xi(e.type,e.memoizedProps)),t&&(t=ht)){if(is(e))throw lc(),Error(c(418));for(;t;)oc(e,t),t=hn(t.nextSibling)}if(sc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){ht=hn(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}ht=null}}else ht=dt?hn(e.stateNode.nextSibling):null;return!0}function lc(){for(var e=ht;e;)e=hn(e.nextSibling)}function ir(){ht=dt=null,Se=!1}function ls(e){bt===null?bt=[e]:bt.push(e)}var tp=T.ReactCurrentBatchConfig;function Hr(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(c(309));var o=r.stateNode}if(!o)throw Error(c(147,e));var i=o,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(a){var h=i.refs;a===null?delete h[l]:h[l]=a},t._stringRef=l,t)}if(typeof e!="string")throw Error(c(284));if(!r._owner)throw Error(c(290,e))}return e}function Do(e,t){throw e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ac(e){var t=e._init;return t(e._payload)}function cc(e){function t(x,f){if(e){var j=x.deletions;j===null?(x.deletions=[f],x.flags|=16):j.push(f)}}function r(x,f){if(!e)return null;for(;f!==null;)t(x,f),f=f.sibling;return null}function o(x,f){for(x=new Map;f!==null;)f.key!==null?x.set(f.key,f):x.set(f.index,f),f=f.sibling;return x}function i(x,f){return x=Cn(x,f),x.index=0,x.sibling=null,x}function l(x,f,j){return x.index=j,e?(j=x.alternate,j!==null?(j=j.index,j<f?(x.flags|=2,f):j):(x.flags|=2,f)):(x.flags|=1048576,f)}function a(x){return e&&x.alternate===null&&(x.flags|=2),x}function h(x,f,j,z){return f===null||f.tag!==6?(f=Js(j,x.mode,z),f.return=x,f):(f=i(f,j),f.return=x,f)}function p(x,f,j,z){var te=j.type;return te===N?D(x,f,j.props.children,z,j.key):f!==null&&(f.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===je&&ac(te)===f.type)?(z=i(f,j.props),z.ref=Hr(x,f,j),z.return=x,z):(z=li(j.type,j.key,j.props,null,x.mode,z),z.ref=Hr(x,f,j),z.return=x,z)}function C(x,f,j,z){return f===null||f.tag!==4||f.stateNode.containerInfo!==j.containerInfo||f.stateNode.implementation!==j.implementation?(f=Zs(j,x.mode,z),f.return=x,f):(f=i(f,j.children||[]),f.return=x,f)}function D(x,f,j,z,te){return f===null||f.tag!==7?(f=zn(j,x.mode,z,te),f.return=x,f):(f=i(f,j),f.return=x,f)}function F(x,f,j){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Js(""+f,x.mode,j),f.return=x,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case P:return j=li(f.type,f.key,f.props,null,x.mode,j),j.ref=Hr(x,null,f),j.return=x,j;case g:return f=Zs(f,x.mode,j),f.return=x,f;case je:var z=f._init;return F(x,z(f._payload),j)}if(at(f)||K(f))return f=zn(f,x.mode,j,null),f.return=x,f;Do(x,f)}return null}function I(x,f,j,z){var te=f!==null?f.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return te!==null?null:h(x,f,""+j,z);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case P:return j.key===te?p(x,f,j,z):null;case g:return j.key===te?C(x,f,j,z):null;case je:return te=j._init,I(x,f,te(j._payload),z)}if(at(j)||K(j))return te!==null?null:D(x,f,j,z,null);Do(x,j)}return null}function W(x,f,j,z,te){if(typeof z=="string"&&z!==""||typeof z=="number")return x=x.get(j)||null,h(f,x,""+z,te);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case P:return x=x.get(z.key===null?j:z.key)||null,p(f,x,z,te);case g:return x=x.get(z.key===null?j:z.key)||null,C(f,x,z,te);case je:var re=z._init;return W(x,f,j,re(z._payload),te)}if(at(z)||K(z))return x=x.get(j)||null,D(f,x,z,te,null);Do(f,z)}return null}function Z(x,f,j,z){for(var te=null,re=null,oe=f,ce=f=0,He=null;oe!==null&&ce<j.length;ce++){oe.index>ce?(He=oe,oe=null):He=oe.sibling;var ye=I(x,oe,j[ce],z);if(ye===null){oe===null&&(oe=He);break}e&&oe&&ye.alternate===null&&t(x,oe),f=l(ye,f,ce),re===null?te=ye:re.sibling=ye,re=ye,oe=He}if(ce===j.length)return r(x,oe),Se&&Tn(x,ce),te;if(oe===null){for(;ce<j.length;ce++)oe=F(x,j[ce],z),oe!==null&&(f=l(oe,f,ce),re===null?te=oe:re.sibling=oe,re=oe);return Se&&Tn(x,ce),te}for(oe=o(x,oe);ce<j.length;ce++)He=W(oe,x,ce,j[ce],z),He!==null&&(e&&He.alternate!==null&&oe.delete(He.key===null?ce:He.key),f=l(He,f,ce),re===null?te=He:re.sibling=He,re=He);return e&&oe.forEach(function(kn){return t(x,kn)}),Se&&Tn(x,ce),te}function ee(x,f,j,z){var te=K(j);if(typeof te!="function")throw Error(c(150));if(j=te.call(j),j==null)throw Error(c(151));for(var re=te=null,oe=f,ce=f=0,He=null,ye=j.next();oe!==null&&!ye.done;ce++,ye=j.next()){oe.index>ce?(He=oe,oe=null):He=oe.sibling;var kn=I(x,oe,ye.value,z);if(kn===null){oe===null&&(oe=He);break}e&&oe&&kn.alternate===null&&t(x,oe),f=l(kn,f,ce),re===null?te=kn:re.sibling=kn,re=kn,oe=He}if(ye.done)return r(x,oe),Se&&Tn(x,ce),te;if(oe===null){for(;!ye.done;ce++,ye=j.next())ye=F(x,ye.value,z),ye!==null&&(f=l(ye,f,ce),re===null?te=ye:re.sibling=ye,re=ye);return Se&&Tn(x,ce),te}for(oe=o(x,oe);!ye.done;ce++,ye=j.next())ye=W(oe,x,ce,ye.value,z),ye!==null&&(e&&ye.alternate!==null&&oe.delete(ye.key===null?ce:ye.key),f=l(ye,f,ce),re===null?te=ye:re.sibling=ye,re=ye);return e&&oe.forEach(function(Mp){return t(x,Mp)}),Se&&Tn(x,ce),te}function Me(x,f,j,z){if(typeof j=="object"&&j!==null&&j.type===N&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case P:e:{for(var te=j.key,re=f;re!==null;){if(re.key===te){if(te=j.type,te===N){if(re.tag===7){r(x,re.sibling),f=i(re,j.props.children),f.return=x,x=f;break e}}else if(re.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===je&&ac(te)===re.type){r(x,re.sibling),f=i(re,j.props),f.ref=Hr(x,re,j),f.return=x,x=f;break e}r(x,re);break}else t(x,re);re=re.sibling}j.type===N?(f=zn(j.props.children,x.mode,z,j.key),f.return=x,x=f):(z=li(j.type,j.key,j.props,null,x.mode,z),z.ref=Hr(x,f,j),z.return=x,x=z)}return a(x);case g:e:{for(re=j.key;f!==null;){if(f.key===re)if(f.tag===4&&f.stateNode.containerInfo===j.containerInfo&&f.stateNode.implementation===j.implementation){r(x,f.sibling),f=i(f,j.children||[]),f.return=x,x=f;break e}else{r(x,f);break}else t(x,f);f=f.sibling}f=Zs(j,x.mode,z),f.return=x,x=f}return a(x);case je:return re=j._init,Me(x,f,re(j._payload),z)}if(at(j))return Z(x,f,j,z);if(K(j))return ee(x,f,j,z);Do(x,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,f!==null&&f.tag===6?(r(x,f.sibling),f=i(f,j),f.return=x,x=f):(r(x,f),f=Js(j,x.mode,z),f.return=x,x=f),a(x)):r(x,f)}return Me}var sr=cc(!0),uc=cc(!1),Fo=pn(null),zo=null,lr=null,as=null;function cs(){as=lr=zo=null}function us(e){var t=Fo.current;ke(Fo),e._currentValue=t}function ds(e,t,r){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===r)break;e=e.return}}function ar(e,t){zo=e,as=lr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(nt=!0),e.firstContext=null)}function xt(e){var t=e._currentValue;if(as!==e)if(e={context:e,memoizedValue:t,next:null},lr===null){if(zo===null)throw Error(c(308));lr=e,zo.dependencies={lanes:0,firstContext:e}}else lr=lr.next=e;return t}var En=null;function hs(e){En===null?En=[e]:En.push(e)}function dc(e,t,r,o){var i=t.interleaved;return i===null?(r.next=r,hs(t)):(r.next=i.next,i.next=r),t.interleaved=r,Xt(e,o)}function Xt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var gn=!1;function ps(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Jt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function yn(e,t,r){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(fe&2)!==0){var i=o.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),o.pending=t,Xt(e,r)}return i=o.interleaved,i===null?(t.next=t,hs(o)):(t.next=i.next,i.next=t),o.interleaved=t,Xt(e,r)}function Go(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,r|=o,t.lanes=r,bi(e,r)}}function pc(e,t){var r=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var i=null,l=null;if(r=r.firstBaseUpdate,r!==null){do{var a={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};l===null?i=l=a:l=l.next=a,r=r.next}while(r!==null);l===null?i=l=t:l=l.next=t}else i=l=t;r={baseState:o.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:o.shared,effects:o.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Bo(e,t,r,o){var i=e.updateQueue;gn=!1;var l=i.firstBaseUpdate,a=i.lastBaseUpdate,h=i.shared.pending;if(h!==null){i.shared.pending=null;var p=h,C=p.next;p.next=null,a===null?l=C:a.next=C,a=p;var D=e.alternate;D!==null&&(D=D.updateQueue,h=D.lastBaseUpdate,h!==a&&(h===null?D.firstBaseUpdate=C:h.next=C,D.lastBaseUpdate=p))}if(l!==null){var F=i.baseState;a=0,D=C=p=null,h=l;do{var I=h.lane,W=h.eventTime;if((o&I)===I){D!==null&&(D=D.next={eventTime:W,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,next:null});e:{var Z=e,ee=h;switch(I=t,W=r,ee.tag){case 1:if(Z=ee.payload,typeof Z=="function"){F=Z.call(W,F,I);break e}F=Z;break e;case 3:Z.flags=Z.flags&-65537|128;case 0:if(Z=ee.payload,I=typeof Z=="function"?Z.call(W,F,I):Z,I==null)break e;F=G({},F,I);break e;case 2:gn=!0}}h.callback!==null&&h.lane!==0&&(e.flags|=64,I=i.effects,I===null?i.effects=[h]:I.push(h))}else W={eventTime:W,lane:I,tag:h.tag,payload:h.payload,callback:h.callback,next:null},D===null?(C=D=W,p=F):D=D.next=W,a|=I;if(h=h.next,h===null){if(h=i.shared.pending,h===null)break;I=h,h=I.next,I.next=null,i.lastBaseUpdate=I,i.shared.pending=null}}while(!0);if(D===null&&(p=F),i.baseState=p,i.firstBaseUpdate=C,i.lastBaseUpdate=D,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);In|=a,e.lanes=a,e.memoizedState=F}}function fc(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],i=o.callback;if(i!==null){if(o.callback=null,o=r,typeof i!="function")throw Error(c(191,i));i.call(o)}}}var qr={},Gt=pn(qr),$r=pn(qr),Wr=pn(qr);function Ln(e){if(e===qr)throw Error(c(174));return e}function fs(e,t){switch(_e(Wr,t),_e($r,e),_e(Gt,qr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Pe(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Pe(t,e)}ke(Gt),_e(Gt,t)}function cr(){ke(Gt),ke($r),ke(Wr)}function mc(e){Ln(Wr.current);var t=Ln(Gt.current),r=Pe(t,e.type);t!==r&&(_e($r,e),_e(Gt,r))}function ms(e){$r.current===e&&(ke(Gt),ke($r))}var be=pn(0);function Uo(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var gs=[];function ys(){for(var e=0;e<gs.length;e++)gs[e]._workInProgressVersionPrimary=null;gs.length=0}var Ho=T.ReactCurrentDispatcher,xs=T.ReactCurrentBatchConfig,Mn=0,Ne=null,De=null,Be=null,qo=!1,Vr=!1,Kr=0,np=0;function Ke(){throw Error(c(321))}function vs(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!St(e[r],t[r]))return!1;return!0}function _s(e,t,r,o,i,l){if(Mn=l,Ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ho.current=e===null||e.memoizedState===null?sp:lp,e=r(o,i),Vr){l=0;do{if(Vr=!1,Kr=0,25<=l)throw Error(c(301));l+=1,Be=De=null,t.updateQueue=null,Ho.current=ap,e=r(o,i)}while(Vr)}if(Ho.current=Vo,t=De!==null&&De.next!==null,Mn=0,Be=De=Ne=null,qo=!1,t)throw Error(c(300));return e}function js(){var e=Kr!==0;return Kr=0,e}function Bt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?Ne.memoizedState=Be=e:Be=Be.next=e,Be}function vt(){if(De===null){var e=Ne.alternate;e=e!==null?e.memoizedState:null}else e=De.next;var t=Be===null?Ne.memoizedState:Be.next;if(t!==null)Be=t,De=e;else{if(e===null)throw Error(c(310));De=e,e={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Be===null?Ne.memoizedState=Be=e:Be=Be.next=e}return Be}function Yr(e,t){return typeof t=="function"?t(e):t}function ws(e){var t=vt(),r=t.queue;if(r===null)throw Error(c(311));r.lastRenderedReducer=e;var o=De,i=o.baseQueue,l=r.pending;if(l!==null){if(i!==null){var a=i.next;i.next=l.next,l.next=a}o.baseQueue=i=l,r.pending=null}if(i!==null){l=i.next,o=o.baseState;var h=a=null,p=null,C=l;do{var D=C.lane;if((Mn&D)===D)p!==null&&(p=p.next={lane:0,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),o=C.hasEagerState?C.eagerState:e(o,C.action);else{var F={lane:D,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null};p===null?(h=p=F,a=o):p=p.next=F,Ne.lanes|=D,In|=D}C=C.next}while(C!==null&&C!==l);p===null?a=o:p.next=h,St(o,t.memoizedState)||(nt=!0),t.memoizedState=o,t.baseState=a,t.baseQueue=p,r.lastRenderedState=o}if(e=r.interleaved,e!==null){i=e;do l=i.lane,Ne.lanes|=l,In|=l,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Cs(e){var t=vt(),r=t.queue;if(r===null)throw Error(c(311));r.lastRenderedReducer=e;var o=r.dispatch,i=r.pending,l=t.memoizedState;if(i!==null){r.pending=null;var a=i=i.next;do l=e(l,a.action),a=a.next;while(a!==i);St(l,t.memoizedState)||(nt=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),r.lastRenderedState=l}return[l,o]}function gc(){}function yc(e,t){var r=Ne,o=vt(),i=t(),l=!St(o.memoizedState,i);if(l&&(o.memoizedState=i,nt=!0),o=o.queue,ks(_c.bind(null,r,o,e),[e]),o.getSnapshot!==t||l||Be!==null&&Be.memoizedState.tag&1){if(r.flags|=2048,Qr(9,vc.bind(null,r,o,i,t),void 0,null),Ue===null)throw Error(c(349));(Mn&30)!==0||xc(r,t,i)}return i}function xc(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Ne.updateQueue,t===null?(t={lastEffect:null,stores:null},Ne.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function vc(e,t,r,o){t.value=r,t.getSnapshot=o,jc(t)&&wc(e)}function _c(e,t,r){return r(function(){jc(t)&&wc(e)})}function jc(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!St(e,r)}catch{return!0}}function wc(e){var t=Xt(e,1);t!==null&&Tt(t,e,1,-1)}function Cc(e){var t=Bt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yr,lastRenderedState:e},t.queue=e,e=e.dispatch=ip.bind(null,Ne,e),[t.memoizedState,e]}function Qr(e,t,r,o){return e={tag:e,create:t,destroy:r,deps:o,next:null},t=Ne.updateQueue,t===null?(t={lastEffect:null,stores:null},Ne.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(o=r.next,r.next=e,e.next=o,t.lastEffect=e)),e}function kc(){return vt().memoizedState}function $o(e,t,r,o){var i=Bt();Ne.flags|=e,i.memoizedState=Qr(1|t,r,void 0,o===void 0?null:o)}function Wo(e,t,r,o){var i=vt();o=o===void 0?null:o;var l=void 0;if(De!==null){var a=De.memoizedState;if(l=a.destroy,o!==null&&vs(o,a.deps)){i.memoizedState=Qr(t,r,l,o);return}}Ne.flags|=e,i.memoizedState=Qr(1|t,r,l,o)}function Ac(e,t){return $o(8390656,8,e,t)}function ks(e,t){return Wo(2048,8,e,t)}function Sc(e,t){return Wo(4,2,e,t)}function bc(e,t){return Wo(4,4,e,t)}function Nc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Pc(e,t,r){return r=r!=null?r.concat([e]):null,Wo(4,4,Nc.bind(null,t,e),r)}function As(){}function Rc(e,t){var r=vt();t=t===void 0?null:t;var o=r.memoizedState;return o!==null&&t!==null&&vs(t,o[1])?o[0]:(r.memoizedState=[e,t],e)}function Tc(e,t){var r=vt();t=t===void 0?null:t;var o=r.memoizedState;return o!==null&&t!==null&&vs(t,o[1])?o[0]:(e=e(),r.memoizedState=[e,t],e)}function Ec(e,t,r){return(Mn&21)===0?(e.baseState&&(e.baseState=!1,nt=!0),e.memoizedState=r):(St(r,t)||(r=aa(),Ne.lanes|=r,In|=r,e.baseState=!0),t)}function rp(e,t){var r=xe;xe=r!==0&&4>r?r:4,e(!0);var o=xs.transition;xs.transition={};try{e(!1),t()}finally{xe=r,xs.transition=o}}function Lc(){return vt().memoizedState}function op(e,t,r){var o=jn(e);if(r={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null},Mc(e))Ic(t,r);else if(r=dc(e,t,r,o),r!==null){var i=Je();Tt(r,e,o,i),Oc(r,t,o)}}function ip(e,t,r){var o=jn(e),i={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null};if(Mc(e))Ic(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var a=t.lastRenderedState,h=l(a,r);if(i.hasEagerState=!0,i.eagerState=h,St(h,a)){var p=t.interleaved;p===null?(i.next=i,hs(t)):(i.next=p.next,p.next=i),t.interleaved=i;return}}catch{}finally{}r=dc(e,t,i,o),r!==null&&(i=Je(),Tt(r,e,o,i),Oc(r,t,o))}}function Mc(e){var t=e.alternate;return e===Ne||t!==null&&t===Ne}function Ic(e,t){Vr=qo=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Oc(e,t,r){if((r&4194240)!==0){var o=t.lanes;o&=e.pendingLanes,r|=o,t.lanes=r,bi(e,r)}}var Vo={readContext:xt,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useInsertionEffect:Ke,useLayoutEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useMutableSource:Ke,useSyncExternalStore:Ke,useId:Ke,unstable_isNewReconciler:!1},sp={readContext:xt,useCallback:function(e,t){return Bt().memoizedState=[e,t===void 0?null:t],e},useContext:xt,useEffect:Ac,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,$o(4194308,4,Nc.bind(null,t,e),r)},useLayoutEffect:function(e,t){return $o(4194308,4,e,t)},useInsertionEffect:function(e,t){return $o(4,2,e,t)},useMemo:function(e,t){var r=Bt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var o=Bt();return t=r!==void 0?r(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=op.bind(null,Ne,e),[o.memoizedState,e]},useRef:function(e){var t=Bt();return e={current:e},t.memoizedState=e},useState:Cc,useDebugValue:As,useDeferredValue:function(e){return Bt().memoizedState=e},useTransition:function(){var e=Cc(!1),t=e[0];return e=rp.bind(null,e[1]),Bt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var o=Ne,i=Bt();if(Se){if(r===void 0)throw Error(c(407));r=r()}else{if(r=t(),Ue===null)throw Error(c(349));(Mn&30)!==0||xc(o,t,r)}i.memoizedState=r;var l={value:r,getSnapshot:t};return i.queue=l,Ac(_c.bind(null,o,l,e),[e]),o.flags|=2048,Qr(9,vc.bind(null,o,l,r,t),void 0,null),r},useId:function(){var e=Bt(),t=Ue.identifierPrefix;if(Se){var r=Qt,o=Yt;r=(o&~(1<<32-At(o)-1)).toString(32)+r,t=":"+t+"R"+r,r=Kr++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=np++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},lp={readContext:xt,useCallback:Rc,useContext:xt,useEffect:ks,useImperativeHandle:Pc,useInsertionEffect:Sc,useLayoutEffect:bc,useMemo:Tc,useReducer:ws,useRef:kc,useState:function(){return ws(Yr)},useDebugValue:As,useDeferredValue:function(e){var t=vt();return Ec(t,De.memoizedState,e)},useTransition:function(){var e=ws(Yr)[0],t=vt().memoizedState;return[e,t]},useMutableSource:gc,useSyncExternalStore:yc,useId:Lc,unstable_isNewReconciler:!1},ap={readContext:xt,useCallback:Rc,useContext:xt,useEffect:ks,useImperativeHandle:Pc,useInsertionEffect:Sc,useLayoutEffect:bc,useMemo:Tc,useReducer:Cs,useRef:kc,useState:function(){return Cs(Yr)},useDebugValue:As,useDeferredValue:function(e){var t=vt();return De===null?t.memoizedState=e:Ec(t,De.memoizedState,e)},useTransition:function(){var e=Cs(Yr)[0],t=vt().memoizedState;return[e,t]},useMutableSource:gc,useSyncExternalStore:yc,useId:Lc,unstable_isNewReconciler:!1};function Nt(e,t){if(e&&e.defaultProps){t=G({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Ss(e,t,r,o){t=e.memoizedState,r=r(o,t),r=r==null?t:G({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Ko={isMounted:function(e){return(e=e._reactInternals)?bn(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var o=Je(),i=jn(e),l=Jt(o,i);l.payload=t,r!=null&&(l.callback=r),t=yn(e,l,i),t!==null&&(Tt(t,e,i,o),Go(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var o=Je(),i=jn(e),l=Jt(o,i);l.tag=1,l.payload=t,r!=null&&(l.callback=r),t=yn(e,l,i),t!==null&&(Tt(t,e,i,o),Go(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Je(),o=jn(e),i=Jt(r,o);i.tag=2,t!=null&&(i.callback=t),t=yn(e,i,o),t!==null&&(Tt(t,e,o,r),Go(t,e,o))}};function Dc(e,t,r,o,i,l,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,l,a):t.prototype&&t.prototype.isPureReactComponent?!Or(r,o)||!Or(i,l):!0}function Fc(e,t,r){var o=!1,i=fn,l=t.contextType;return typeof l=="object"&&l!==null?l=xt(l):(i=tt(t)?Pn:Ve.current,o=t.contextTypes,l=(o=o!=null)?nr(e,i):fn),t=new t(r,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ko,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function zc(e,t,r,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,o),t.state!==e&&Ko.enqueueReplaceState(t,t.state,null)}function bs(e,t,r,o){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},ps(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=xt(l):(l=tt(t)?Pn:Ve.current,i.context=nr(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Ss(e,t,l,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ko.enqueueReplaceState(i,i.state,null),Bo(e,r,i,o),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ur(e,t){try{var r="",o=t;do r+=ne(o),o=o.return;while(o);var i=r}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function Ns(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Ps(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var cp=typeof WeakMap=="function"?WeakMap:Map;function Gc(e,t,r){r=Jt(-1,r),r.tag=3,r.payload={element:null};var o=t.value;return r.callback=function(){ti||(ti=!0,qs=o),Ps(e,t)},r}function Bc(e,t,r){r=Jt(-1,r),r.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var i=t.value;r.payload=function(){return o(i)},r.callback=function(){Ps(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(r.callback=function(){Ps(e,t),typeof o!="function"&&(vn===null?vn=new Set([this]):vn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),r}function Uc(e,t,r){var o=e.pingCache;if(o===null){o=e.pingCache=new cp;var i=new Set;o.set(t,i)}else i=o.get(t),i===void 0&&(i=new Set,o.set(t,i));i.has(r)||(i.add(r),e=Cp.bind(null,e,t,r),t.then(e,e))}function Hc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function qc(e,t,r,o,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Jt(-1,1),t.tag=2,yn(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var up=T.ReactCurrentOwner,nt=!1;function Xe(e,t,r,o){t.child=e===null?uc(t,null,r,o):sr(t,e.child,r,o)}function $c(e,t,r,o,i){r=r.render;var l=t.ref;return ar(t,i),o=_s(e,t,r,o,l,i),r=js(),e!==null&&!nt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Zt(e,t,i)):(Se&&r&&rs(t),t.flags|=1,Xe(e,t,o,i),t.child)}function Wc(e,t,r,o,i){if(e===null){var l=r.type;return typeof l=="function"&&!Xs(l)&&l.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=l,Vc(e,t,l,o,i)):(e=li(r.type,null,o,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,(e.lanes&i)===0){var a=l.memoizedProps;if(r=r.compare,r=r!==null?r:Or,r(a,o)&&e.ref===t.ref)return Zt(e,t,i)}return t.flags|=1,e=Cn(l,o),e.ref=t.ref,e.return=t,t.child=e}function Vc(e,t,r,o,i){if(e!==null){var l=e.memoizedProps;if(Or(l,o)&&e.ref===t.ref)if(nt=!1,t.pendingProps=o=l,(e.lanes&i)!==0)(e.flags&131072)!==0&&(nt=!0);else return t.lanes=e.lanes,Zt(e,t,i)}return Rs(e,t,r,o,i)}function Kc(e,t,r){var o=t.pendingProps,i=o.children,l=e!==null?e.memoizedState:null;if(o.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},_e(hr,pt),pt|=r;else{if((r&1073741824)===0)return e=l!==null?l.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,_e(hr,pt),pt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=l!==null?l.baseLanes:r,_e(hr,pt),pt|=o}else l!==null?(o=l.baseLanes|r,t.memoizedState=null):o=r,_e(hr,pt),pt|=o;return Xe(e,t,i,r),t.child}function Yc(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Rs(e,t,r,o,i){var l=tt(r)?Pn:Ve.current;return l=nr(t,l),ar(t,i),r=_s(e,t,r,o,l,i),o=js(),e!==null&&!nt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Zt(e,t,i)):(Se&&o&&rs(t),t.flags|=1,Xe(e,t,r,i),t.child)}function Qc(e,t,r,o,i){if(tt(r)){var l=!0;Eo(t)}else l=!1;if(ar(t,i),t.stateNode===null)Qo(e,t),Fc(t,r,o),bs(t,r,o,i),o=!0;else if(e===null){var a=t.stateNode,h=t.memoizedProps;a.props=h;var p=a.context,C=r.contextType;typeof C=="object"&&C!==null?C=xt(C):(C=tt(r)?Pn:Ve.current,C=nr(t,C));var D=r.getDerivedStateFromProps,F=typeof D=="function"||typeof a.getSnapshotBeforeUpdate=="function";F||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(h!==o||p!==C)&&zc(t,a,o,C),gn=!1;var I=t.memoizedState;a.state=I,Bo(t,o,a,i),p=t.memoizedState,h!==o||I!==p||et.current||gn?(typeof D=="function"&&(Ss(t,r,D,o),p=t.memoizedState),(h=gn||Dc(t,r,h,o,I,p,C))?(F||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=p),a.props=o,a.state=p,a.context=C,o=h):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{a=t.stateNode,hc(e,t),h=t.memoizedProps,C=t.type===t.elementType?h:Nt(t.type,h),a.props=C,F=t.pendingProps,I=a.context,p=r.contextType,typeof p=="object"&&p!==null?p=xt(p):(p=tt(r)?Pn:Ve.current,p=nr(t,p));var W=r.getDerivedStateFromProps;(D=typeof W=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(h!==F||I!==p)&&zc(t,a,o,p),gn=!1,I=t.memoizedState,a.state=I,Bo(t,o,a,i);var Z=t.memoizedState;h!==F||I!==Z||et.current||gn?(typeof W=="function"&&(Ss(t,r,W,o),Z=t.memoizedState),(C=gn||Dc(t,r,C,o,I,Z,p)||!1)?(D||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(o,Z,p),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(o,Z,p)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||h===e.memoizedProps&&I===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&I===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=Z),a.props=o,a.state=Z,a.context=p,o=C):(typeof a.componentDidUpdate!="function"||h===e.memoizedProps&&I===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&I===e.memoizedState||(t.flags|=1024),o=!1)}return Ts(e,t,r,o,l,i)}function Ts(e,t,r,o,i,l){Yc(e,t);var a=(t.flags&128)!==0;if(!o&&!a)return i&&tc(t,r,!1),Zt(e,t,l);o=t.stateNode,up.current=t;var h=a&&typeof r.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&a?(t.child=sr(t,e.child,null,l),t.child=sr(t,null,h,l)):Xe(e,t,h,l),t.memoizedState=o.state,i&&tc(t,r,!0),t.child}function Xc(e){var t=e.stateNode;t.pendingContext?Za(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Za(e,t.context,!1),fs(e,t.containerInfo)}function Jc(e,t,r,o,i){return ir(),ls(i),t.flags|=256,Xe(e,t,r,o),t.child}var Es={dehydrated:null,treeContext:null,retryLane:0};function Ls(e){return{baseLanes:e,cachePool:null,transitions:null}}function Zc(e,t,r){var o=t.pendingProps,i=be.current,l=!1,a=(t.flags&128)!==0,h;if((h=a)||(h=e!==null&&e.memoizedState===null?!1:(i&2)!==0),h?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),_e(be,i&1),e===null)return ss(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(a=o.children,e=o.fallback,l?(o=t.mode,l=t.child,a={mode:"hidden",children:a},(o&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=a):l=ai(a,o,0,null),e=zn(e,o,r,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Ls(r),t.memoizedState=Es,e):Ms(t,a));if(i=e.memoizedState,i!==null&&(h=i.dehydrated,h!==null))return dp(e,t,a,o,h,i,r);if(l){l=o.fallback,a=t.mode,i=e.child,h=i.sibling;var p={mode:"hidden",children:o.children};return(a&1)===0&&t.child!==i?(o=t.child,o.childLanes=0,o.pendingProps=p,t.deletions=null):(o=Cn(i,p),o.subtreeFlags=i.subtreeFlags&14680064),h!==null?l=Cn(h,l):(l=zn(l,a,r,null),l.flags|=2),l.return=t,o.return=t,o.sibling=l,t.child=o,o=l,l=t.child,a=e.child.memoizedState,a=a===null?Ls(r):{baseLanes:a.baseLanes|r,cachePool:null,transitions:a.transitions},l.memoizedState=a,l.childLanes=e.childLanes&~r,t.memoizedState=Es,o}return l=e.child,e=l.sibling,o=Cn(l,{mode:"visible",children:o.children}),(t.mode&1)===0&&(o.lanes=r),o.return=t,o.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=o,t.memoizedState=null,o}function Ms(e,t){return t=ai({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Yo(e,t,r,o){return o!==null&&ls(o),sr(t,e.child,null,r),e=Ms(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function dp(e,t,r,o,i,l,a){if(r)return t.flags&256?(t.flags&=-257,o=Ns(Error(c(422))),Yo(e,t,a,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=o.fallback,i=t.mode,o=ai({mode:"visible",children:o.children},i,0,null),l=zn(l,i,a,null),l.flags|=2,o.return=t,l.return=t,o.sibling=l,t.child=o,(t.mode&1)!==0&&sr(t,e.child,null,a),t.child.memoizedState=Ls(a),t.memoizedState=Es,l);if((t.mode&1)===0)return Yo(e,t,a,null);if(i.data==="$!"){if(o=i.nextSibling&&i.nextSibling.dataset,o)var h=o.dgst;return o=h,l=Error(c(419)),o=Ns(l,o,void 0),Yo(e,t,a,o)}if(h=(a&e.childLanes)!==0,nt||h){if(o=Ue,o!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(o.suspendedLanes|a))!==0?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,Xt(e,i),Tt(o,e,i,-1))}return Qs(),o=Ns(Error(c(421))),Yo(e,t,a,o)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=kp.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,ht=hn(i.nextSibling),dt=t,Se=!0,bt=null,e!==null&&(gt[yt++]=Yt,gt[yt++]=Qt,gt[yt++]=Rn,Yt=e.id,Qt=e.overflow,Rn=t),t=Ms(t,o.children),t.flags|=4096,t)}function eu(e,t,r){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),ds(e.return,t,r)}function Is(e,t,r,o,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=o,l.tail=r,l.tailMode=i)}function tu(e,t,r){var o=t.pendingProps,i=o.revealOrder,l=o.tail;if(Xe(e,t,o.children,r),o=be.current,(o&2)!==0)o=o&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&eu(e,r,t);else if(e.tag===19)eu(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(_e(be,o),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&Uo(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),Is(t,!1,i,r,l);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Uo(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}Is(t,!0,r,null,l);break;case"together":Is(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Qo(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Zt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),In|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,r=Cn(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Cn(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function hp(e,t,r){switch(t.tag){case 3:Xc(t),ir();break;case 5:mc(t);break;case 1:tt(t.type)&&Eo(t);break;case 4:fs(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,i=t.memoizedProps.value;_e(Fo,o._currentValue),o._currentValue=i;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(_e(be,be.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?Zc(e,t,r):(_e(be,be.current&1),e=Zt(e,t,r),e!==null?e.sibling:null);_e(be,be.current&1);break;case 19:if(o=(r&t.childLanes)!==0,(e.flags&128)!==0){if(o)return tu(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),_e(be,be.current),o)break;return null;case 22:case 23:return t.lanes=0,Kc(e,t,r)}return Zt(e,t,r)}var nu,Os,ru,ou;nu=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},Os=function(){},ru=function(e,t,r,o){var i=e.memoizedProps;if(i!==o){e=t.stateNode,Ln(Gt.current);var l=null;switch(r){case"input":i=yr(e,i),o=yr(e,o),l=[];break;case"select":i=G({},i,{value:void 0}),o=G({},o,{value:void 0}),l=[];break;case"textarea":i=Mt(e,i),o=Mt(e,o),l=[];break;default:typeof i.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=Po)}$n(r,o);var a;r=null;for(C in i)if(!o.hasOwnProperty(C)&&i.hasOwnProperty(C)&&i[C]!=null)if(C==="style"){var h=i[C];for(a in h)h.hasOwnProperty(a)&&(r||(r={}),r[a]="")}else C!=="dangerouslySetInnerHTML"&&C!=="children"&&C!=="suppressContentEditableWarning"&&C!=="suppressHydrationWarning"&&C!=="autoFocus"&&(v.hasOwnProperty(C)?l||(l=[]):(l=l||[]).push(C,null));for(C in o){var p=o[C];if(h=i!=null?i[C]:void 0,o.hasOwnProperty(C)&&p!==h&&(p!=null||h!=null))if(C==="style")if(h){for(a in h)!h.hasOwnProperty(a)||p&&p.hasOwnProperty(a)||(r||(r={}),r[a]="");for(a in p)p.hasOwnProperty(a)&&h[a]!==p[a]&&(r||(r={}),r[a]=p[a])}else r||(l||(l=[]),l.push(C,r)),r=p;else C==="dangerouslySetInnerHTML"?(p=p?p.__html:void 0,h=h?h.__html:void 0,p!=null&&h!==p&&(l=l||[]).push(C,p)):C==="children"?typeof p!="string"&&typeof p!="number"||(l=l||[]).push(C,""+p):C!=="suppressContentEditableWarning"&&C!=="suppressHydrationWarning"&&(v.hasOwnProperty(C)?(p!=null&&C==="onScroll"&&Ce("scroll",e),l||h===p||(l=[])):(l=l||[]).push(C,p))}r&&(l=l||[]).push("style",r);var C=l;(t.updateQueue=C)&&(t.flags|=4)}},ou=function(e,t,r,o){r!==o&&(t.flags|=4)};function Xr(e,t){if(!Se)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ye(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,o=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,o|=i.subtreeFlags&14680064,o|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,o|=i.subtreeFlags,o|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=o,e.childLanes=r,t}function pp(e,t,r){var o=t.pendingProps;switch(os(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(t),null;case 1:return tt(t.type)&&To(),Ye(t),null;case 3:return o=t.stateNode,cr(),ke(et),ke(Ve),ys(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(Oo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,bt!==null&&(Vs(bt),bt=null))),Os(e,t),Ye(t),null;case 5:ms(t);var i=Ln(Wr.current);if(r=t.type,e!==null&&t.stateNode!=null)ru(e,t,r,o,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(c(166));return Ye(t),null}if(e=Ln(Gt.current),Oo(t)){o=t.stateNode,r=t.type;var l=t.memoizedProps;switch(o[zt]=t,o[Br]=l,e=(t.mode&1)!==0,r){case"dialog":Ce("cancel",o),Ce("close",o);break;case"iframe":case"object":case"embed":Ce("load",o);break;case"video":case"audio":for(i=0;i<Fr.length;i++)Ce(Fr[i],o);break;case"source":Ce("error",o);break;case"img":case"image":case"link":Ce("error",o),Ce("load",o);break;case"details":Ce("toggle",o);break;case"input":Bn(o,l),Ce("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!l.multiple},Ce("invalid",o);break;case"textarea":qn(o,l),Ce("invalid",o)}$n(r,l),i=null;for(var a in l)if(l.hasOwnProperty(a)){var h=l[a];a==="children"?typeof h=="string"?o.textContent!==h&&(l.suppressHydrationWarning!==!0&&No(o.textContent,h,e),i=["children",h]):typeof h=="number"&&o.textContent!==""+h&&(l.suppressHydrationWarning!==!0&&No(o.textContent,h,e),i=["children",""+h]):v.hasOwnProperty(a)&&h!=null&&a==="onScroll"&&Ce("scroll",o)}switch(r){case"input":lt(o),Et(o,l,!0);break;case"textarea":lt(o),We(o);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(o.onclick=Po)}o=i,t.updateQueue=o,o!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ct(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=a.createElement(r,{is:o.is}):(e=a.createElement(r),r==="select"&&(a=e,o.multiple?a.multiple=!0:o.size&&(a.size=o.size))):e=a.createElementNS(e,r),e[zt]=t,e[Br]=o,nu(e,t,!1,!1),t.stateNode=e;e:{switch(a=Wt(r,o),r){case"dialog":Ce("cancel",e),Ce("close",e),i=o;break;case"iframe":case"object":case"embed":Ce("load",e),i=o;break;case"video":case"audio":for(i=0;i<Fr.length;i++)Ce(Fr[i],e);i=o;break;case"source":Ce("error",e),i=o;break;case"img":case"image":case"link":Ce("error",e),Ce("load",e),i=o;break;case"details":Ce("toggle",e),i=o;break;case"input":Bn(e,o),i=yr(e,o),Ce("invalid",e);break;case"option":i=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},i=G({},o,{value:void 0}),Ce("invalid",e);break;case"textarea":qn(e,o),i=Mt(e,o),Ce("invalid",e);break;default:i=o}$n(r,i),h=i;for(l in h)if(h.hasOwnProperty(l)){var p=h[l];l==="style"?Dt(e,p):l==="dangerouslySetInnerHTML"?(p=p?p.__html:void 0,p!=null&&ct(e,p)):l==="children"?typeof p=="string"?(r!=="textarea"||p!=="")&&Ot(e,p):typeof p=="number"&&Ot(e,""+p):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(v.hasOwnProperty(l)?p!=null&&l==="onScroll"&&Ce("scroll",e):p!=null&&A(e,l,p,a))}switch(r){case"input":lt(e),Et(e,o,!1);break;case"textarea":lt(e),We(e);break;case"option":o.value!=null&&e.setAttribute("value",""+de(o.value));break;case"select":e.multiple=!!o.multiple,l=o.value,l!=null?Lt(e,!!o.multiple,l,!1):o.defaultValue!=null&&Lt(e,!!o.multiple,o.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Po)}switch(r){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ye(t),null;case 6:if(e&&t.stateNode!=null)ou(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(c(166));if(r=Ln(Wr.current),Ln(Gt.current),Oo(t)){if(o=t.stateNode,r=t.memoizedProps,o[zt]=t,(l=o.nodeValue!==r)&&(e=dt,e!==null))switch(e.tag){case 3:No(o.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&No(o.nodeValue,r,(e.mode&1)!==0)}l&&(t.flags|=4)}else o=(r.nodeType===9?r:r.ownerDocument).createTextNode(o),o[zt]=t,t.stateNode=o}return Ye(t),null;case 13:if(ke(be),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Se&&ht!==null&&(t.mode&1)!==0&&(t.flags&128)===0)lc(),ir(),t.flags|=98560,l=!1;else if(l=Oo(t),o!==null&&o.dehydrated!==null){if(e===null){if(!l)throw Error(c(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(c(317));l[zt]=t}else ir(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ye(t),l=!1}else bt!==null&&(Vs(bt),bt=null),l=!0;if(!l)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(be.current&1)!==0?Fe===0&&(Fe=3):Qs())),t.updateQueue!==null&&(t.flags|=4),Ye(t),null);case 4:return cr(),Os(e,t),e===null&&zr(t.stateNode.containerInfo),Ye(t),null;case 10:return us(t.type._context),Ye(t),null;case 17:return tt(t.type)&&To(),Ye(t),null;case 19:if(ke(be),l=t.memoizedState,l===null)return Ye(t),null;if(o=(t.flags&128)!==0,a=l.rendering,a===null)if(o)Xr(l,!1);else{if(Fe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=Uo(e),a!==null){for(t.flags|=128,Xr(l,!1),o=a.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=r,r=t.child;r!==null;)l=r,e=o,l.flags&=14680066,a=l.alternate,a===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=a.childLanes,l.lanes=a.lanes,l.child=a.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=a.memoizedProps,l.memoizedState=a.memoizedState,l.updateQueue=a.updateQueue,l.type=a.type,e=a.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return _e(be,be.current&1|2),t.child}e=e.sibling}l.tail!==null&&Le()>pr&&(t.flags|=128,o=!0,Xr(l,!1),t.lanes=4194304)}else{if(!o)if(e=Uo(a),e!==null){if(t.flags|=128,o=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Xr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!a.alternate&&!Se)return Ye(t),null}else 2*Le()-l.renderingStartTime>pr&&r!==1073741824&&(t.flags|=128,o=!0,Xr(l,!1),t.lanes=4194304);l.isBackwards?(a.sibling=t.child,t.child=a):(r=l.last,r!==null?r.sibling=a:t.child=a,l.last=a)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Le(),t.sibling=null,r=be.current,_e(be,o?r&1|2:r&1),t):(Ye(t),null);case 22:case 23:return Ys(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&(t.mode&1)!==0?(pt&1073741824)!==0&&(Ye(t),t.subtreeFlags&6&&(t.flags|=8192)):Ye(t),null;case 24:return null;case 25:return null}throw Error(c(156,t.tag))}function fp(e,t){switch(os(t),t.tag){case 1:return tt(t.type)&&To(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return cr(),ke(et),ke(Ve),ys(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return ms(t),null;case 13:if(ke(be),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));ir()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ke(be),null;case 4:return cr(),null;case 10:return us(t.type._context),null;case 22:case 23:return Ys(),null;case 24:return null;default:return null}}var Xo=!1,Qe=!1,mp=typeof WeakSet=="function"?WeakSet:Set,Q=null;function dr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(o){Te(e,t,o)}else r.current=null}function Ds(e,t,r){try{r()}catch(o){Te(e,t,o)}}var iu=!1;function gp(e,t){if(Yi=yo,e=Da(),Bi(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var i=o.anchorOffset,l=o.focusNode;o=o.focusOffset;try{r.nodeType,l.nodeType}catch{r=null;break e}var a=0,h=-1,p=-1,C=0,D=0,F=e,I=null;t:for(;;){for(var W;F!==r||i!==0&&F.nodeType!==3||(h=a+i),F!==l||o!==0&&F.nodeType!==3||(p=a+o),F.nodeType===3&&(a+=F.nodeValue.length),(W=F.firstChild)!==null;)I=F,F=W;for(;;){if(F===e)break t;if(I===r&&++C===i&&(h=a),I===l&&++D===o&&(p=a),(W=F.nextSibling)!==null)break;F=I,I=F.parentNode}F=W}r=h===-1||p===-1?null:{start:h,end:p}}else r=null}r=r||{start:0,end:0}}else r=null;for(Qi={focusedElem:e,selectionRange:r},yo=!1,Q=t;Q!==null;)if(t=Q,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Q=e;else for(;Q!==null;){t=Q;try{var Z=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(Z!==null){var ee=Z.memoizedProps,Me=Z.memoizedState,x=t.stateNode,f=x.getSnapshotBeforeUpdate(t.elementType===t.type?ee:Nt(t.type,ee),Me);x.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var j=t.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(c(163))}}catch(z){Te(t,t.return,z)}if(e=t.sibling,e!==null){e.return=t.return,Q=e;break}Q=t.return}return Z=iu,iu=!1,Z}function Jr(e,t,r){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var i=o=o.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&Ds(t,r,l)}i=i.next}while(i!==o)}}function Jo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var o=r.create;r.destroy=o()}r=r.next}while(r!==t)}}function Fs(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function su(e){var t=e.alternate;t!==null&&(e.alternate=null,su(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[zt],delete t[Br],delete t[es],delete t[Jh],delete t[Zh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function lu(e){return e.tag===5||e.tag===3||e.tag===4}function au(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||lu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function zs(e,t,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Po));else if(o!==4&&(e=e.child,e!==null))for(zs(e,t,r),e=e.sibling;e!==null;)zs(e,t,r),e=e.sibling}function Gs(e,t,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(Gs(e,t,r),e=e.sibling;e!==null;)Gs(e,t,r),e=e.sibling}var qe=null,Pt=!1;function xn(e,t,r){for(r=r.child;r!==null;)cu(e,t,r),r=r.sibling}function cu(e,t,r){if(Ft&&typeof Ft.onCommitFiberUnmount=="function")try{Ft.onCommitFiberUnmount(uo,r)}catch{}switch(r.tag){case 5:Qe||dr(r,t);case 6:var o=qe,i=Pt;qe=null,xn(e,t,r),qe=o,Pt=i,qe!==null&&(Pt?(e=qe,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):qe.removeChild(r.stateNode));break;case 18:qe!==null&&(Pt?(e=qe,r=r.stateNode,e.nodeType===8?Zi(e.parentNode,r):e.nodeType===1&&Zi(e,r),Rr(e)):Zi(qe,r.stateNode));break;case 4:o=qe,i=Pt,qe=r.stateNode.containerInfo,Pt=!0,xn(e,t,r),qe=o,Pt=i;break;case 0:case 11:case 14:case 15:if(!Qe&&(o=r.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){i=o=o.next;do{var l=i,a=l.destroy;l=l.tag,a!==void 0&&((l&2)!==0||(l&4)!==0)&&Ds(r,t,a),i=i.next}while(i!==o)}xn(e,t,r);break;case 1:if(!Qe&&(dr(r,t),o=r.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=r.memoizedProps,o.state=r.memoizedState,o.componentWillUnmount()}catch(h){Te(r,t,h)}xn(e,t,r);break;case 21:xn(e,t,r);break;case 22:r.mode&1?(Qe=(o=Qe)||r.memoizedState!==null,xn(e,t,r),Qe=o):xn(e,t,r);break;default:xn(e,t,r)}}function uu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new mp),t.forEach(function(o){var i=Ap.bind(null,e,o);r.has(o)||(r.add(o),o.then(i,i))})}}function Rt(e,t){var r=t.deletions;if(r!==null)for(var o=0;o<r.length;o++){var i=r[o];try{var l=e,a=t,h=a;e:for(;h!==null;){switch(h.tag){case 5:qe=h.stateNode,Pt=!1;break e;case 3:qe=h.stateNode.containerInfo,Pt=!0;break e;case 4:qe=h.stateNode.containerInfo,Pt=!0;break e}h=h.return}if(qe===null)throw Error(c(160));cu(l,a,i),qe=null,Pt=!1;var p=i.alternate;p!==null&&(p.return=null),i.return=null}catch(C){Te(i,t,C)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)du(t,e),t=t.sibling}function du(e,t){var r=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Rt(t,e),Ut(e),o&4){try{Jr(3,e,e.return),Jo(3,e)}catch(ee){Te(e,e.return,ee)}try{Jr(5,e,e.return)}catch(ee){Te(e,e.return,ee)}}break;case 1:Rt(t,e),Ut(e),o&512&&r!==null&&dr(r,r.return);break;case 5:if(Rt(t,e),Ut(e),o&512&&r!==null&&dr(r,r.return),e.flags&32){var i=e.stateNode;try{Ot(i,"")}catch(ee){Te(e,e.return,ee)}}if(o&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,a=r!==null?r.memoizedProps:l,h=e.type,p=e.updateQueue;if(e.updateQueue=null,p!==null)try{h==="input"&&l.type==="radio"&&l.name!=null&&wt(i,l),Wt(h,a);var C=Wt(h,l);for(a=0;a<p.length;a+=2){var D=p[a],F=p[a+1];D==="style"?Dt(i,F):D==="dangerouslySetInnerHTML"?ct(i,F):D==="children"?Ot(i,F):A(i,D,F,C)}switch(h){case"input":Un(i,l);break;case"textarea":It(i,l);break;case"select":var I=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var W=l.value;W!=null?Lt(i,!!l.multiple,W,!1):I!==!!l.multiple&&(l.defaultValue!=null?Lt(i,!!l.multiple,l.defaultValue,!0):Lt(i,!!l.multiple,l.multiple?[]:"",!1))}i[Br]=l}catch(ee){Te(e,e.return,ee)}}break;case 6:if(Rt(t,e),Ut(e),o&4){if(e.stateNode===null)throw Error(c(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(ee){Te(e,e.return,ee)}}break;case 3:if(Rt(t,e),Ut(e),o&4&&r!==null&&r.memoizedState.isDehydrated)try{Rr(t.containerInfo)}catch(ee){Te(e,e.return,ee)}break;case 4:Rt(t,e),Ut(e);break;case 13:Rt(t,e),Ut(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(Hs=Le())),o&4&&uu(e);break;case 22:if(D=r!==null&&r.memoizedState!==null,e.mode&1?(Qe=(C=Qe)||D,Rt(t,e),Qe=C):Rt(t,e),Ut(e),o&8192){if(C=e.memoizedState!==null,(e.stateNode.isHidden=C)&&!D&&(e.mode&1)!==0)for(Q=e,D=e.child;D!==null;){for(F=Q=D;Q!==null;){switch(I=Q,W=I.child,I.tag){case 0:case 11:case 14:case 15:Jr(4,I,I.return);break;case 1:dr(I,I.return);var Z=I.stateNode;if(typeof Z.componentWillUnmount=="function"){o=I,r=I.return;try{t=o,Z.props=t.memoizedProps,Z.state=t.memoizedState,Z.componentWillUnmount()}catch(ee){Te(o,r,ee)}}break;case 5:dr(I,I.return);break;case 22:if(I.memoizedState!==null){fu(F);continue}}W!==null?(W.return=I,Q=W):fu(F)}D=D.sibling}e:for(D=null,F=e;;){if(F.tag===5){if(D===null){D=F;try{i=F.stateNode,C?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(h=F.stateNode,p=F.memoizedProps.style,a=p!=null&&p.hasOwnProperty("display")?p.display:null,h.style.display=nn("display",a))}catch(ee){Te(e,e.return,ee)}}}else if(F.tag===6){if(D===null)try{F.stateNode.nodeValue=C?"":F.memoizedProps}catch(ee){Te(e,e.return,ee)}}else if((F.tag!==22&&F.tag!==23||F.memoizedState===null||F===e)&&F.child!==null){F.child.return=F,F=F.child;continue}if(F===e)break e;for(;F.sibling===null;){if(F.return===null||F.return===e)break e;D===F&&(D=null),F=F.return}D===F&&(D=null),F.sibling.return=F.return,F=F.sibling}}break;case 19:Rt(t,e),Ut(e),o&4&&uu(e);break;case 21:break;default:Rt(t,e),Ut(e)}}function Ut(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(lu(r)){var o=r;break e}r=r.return}throw Error(c(160))}switch(o.tag){case 5:var i=o.stateNode;o.flags&32&&(Ot(i,""),o.flags&=-33);var l=au(e);Gs(e,l,i);break;case 3:case 4:var a=o.stateNode.containerInfo,h=au(e);zs(e,h,a);break;default:throw Error(c(161))}}catch(p){Te(e,e.return,p)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yp(e,t,r){Q=e,hu(e)}function hu(e,t,r){for(var o=(e.mode&1)!==0;Q!==null;){var i=Q,l=i.child;if(i.tag===22&&o){var a=i.memoizedState!==null||Xo;if(!a){var h=i.alternate,p=h!==null&&h.memoizedState!==null||Qe;h=Xo;var C=Qe;if(Xo=a,(Qe=p)&&!C)for(Q=i;Q!==null;)a=Q,p=a.child,a.tag===22&&a.memoizedState!==null?mu(i):p!==null?(p.return=a,Q=p):mu(i);for(;l!==null;)Q=l,hu(l),l=l.sibling;Q=i,Xo=h,Qe=C}pu(e)}else(i.subtreeFlags&8772)!==0&&l!==null?(l.return=i,Q=l):pu(e)}}function pu(e){for(;Q!==null;){var t=Q;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Qe||Jo(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!Qe)if(r===null)o.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:Nt(t.type,r.memoizedProps);o.componentDidUpdate(i,r.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&fc(t,l,o);break;case 3:var a=t.updateQueue;if(a!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}fc(t,a,r)}break;case 5:var h=t.stateNode;if(r===null&&t.flags&4){r=h;var p=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":p.autoFocus&&r.focus();break;case"img":p.src&&(r.src=p.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var C=t.alternate;if(C!==null){var D=C.memoizedState;if(D!==null){var F=D.dehydrated;F!==null&&Rr(F)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(c(163))}Qe||t.flags&512&&Fs(t)}catch(I){Te(t,t.return,I)}}if(t===e){Q=null;break}if(r=t.sibling,r!==null){r.return=t.return,Q=r;break}Q=t.return}}function fu(e){for(;Q!==null;){var t=Q;if(t===e){Q=null;break}var r=t.sibling;if(r!==null){r.return=t.return,Q=r;break}Q=t.return}}function mu(e){for(;Q!==null;){var t=Q;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Jo(4,t)}catch(p){Te(t,r,p)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var i=t.return;try{o.componentDidMount()}catch(p){Te(t,i,p)}}var l=t.return;try{Fs(t)}catch(p){Te(t,l,p)}break;case 5:var a=t.return;try{Fs(t)}catch(p){Te(t,a,p)}}}catch(p){Te(t,t.return,p)}if(t===e){Q=null;break}var h=t.sibling;if(h!==null){h.return=t.return,Q=h;break}Q=t.return}}var xp=Math.ceil,Zo=T.ReactCurrentDispatcher,Bs=T.ReactCurrentOwner,_t=T.ReactCurrentBatchConfig,fe=0,Ue=null,Oe=null,$e=0,pt=0,hr=pn(0),Fe=0,Zr=null,In=0,ei=0,Us=0,eo=null,rt=null,Hs=0,pr=1/0,en=null,ti=!1,qs=null,vn=null,ni=!1,_n=null,ri=0,to=0,$s=null,oi=-1,ii=0;function Je(){return(fe&6)!==0?Le():oi!==-1?oi:oi=Le()}function jn(e){return(e.mode&1)===0?1:(fe&2)!==0&&$e!==0?$e&-$e:tp.transition!==null?(ii===0&&(ii=aa()),ii):(e=xe,e!==0||(e=window.event,e=e===void 0?16:ya(e.type)),e)}function Tt(e,t,r,o){if(50<to)throw to=0,$s=null,Error(c(185));Ar(e,r,o),((fe&2)===0||e!==Ue)&&(e===Ue&&((fe&2)===0&&(ei|=r),Fe===4&&wn(e,$e)),ot(e,o),r===1&&fe===0&&(t.mode&1)===0&&(pr=Le()+500,Lo&&mn()))}function ot(e,t){var r=e.callbackNode;th(e,t);var o=fo(e,e===Ue?$e:0);if(o===0)r!==null&&ia(r),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(r!=null&&ia(r),t===1)e.tag===0?ep(yu.bind(null,e)):nc(yu.bind(null,e)),Qh(function(){(fe&6)===0&&mn()}),r=null;else{switch(ca(o)){case 1:r=ki;break;case 4:r=sa;break;case 16:r=co;break;case 536870912:r=la;break;default:r=co}r=Au(r,gu.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function gu(e,t){if(oi=-1,ii=0,(fe&6)!==0)throw Error(c(327));var r=e.callbackNode;if(fr()&&e.callbackNode!==r)return null;var o=fo(e,e===Ue?$e:0);if(o===0)return null;if((o&30)!==0||(o&e.expiredLanes)!==0||t)t=si(e,o);else{t=o;var i=fe;fe|=2;var l=vu();(Ue!==e||$e!==t)&&(en=null,pr=Le()+500,Dn(e,t));do try{jp();break}catch(h){xu(e,h)}while(!0);cs(),Zo.current=l,fe=i,Oe!==null?t=0:(Ue=null,$e=0,t=Fe)}if(t!==0){if(t===2&&(i=Ai(e),i!==0&&(o=i,t=Ws(e,i))),t===1)throw r=Zr,Dn(e,0),wn(e,o),ot(e,Le()),r;if(t===6)wn(e,o);else{if(i=e.current.alternate,(o&30)===0&&!vp(i)&&(t=si(e,o),t===2&&(l=Ai(e),l!==0&&(o=l,t=Ws(e,l))),t===1))throw r=Zr,Dn(e,0),wn(e,o),ot(e,Le()),r;switch(e.finishedWork=i,e.finishedLanes=o,t){case 0:case 1:throw Error(c(345));case 2:Fn(e,rt,en);break;case 3:if(wn(e,o),(o&130023424)===o&&(t=Hs+500-Le(),10<t)){if(fo(e,0)!==0)break;if(i=e.suspendedLanes,(i&o)!==o){Je(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ji(Fn.bind(null,e,rt,en),t);break}Fn(e,rt,en);break;case 4:if(wn(e,o),(o&4194240)===o)break;for(t=e.eventTimes,i=-1;0<o;){var a=31-At(o);l=1<<a,a=t[a],a>i&&(i=a),o&=~l}if(o=i,o=Le()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*xp(o/1960))-o,10<o){e.timeoutHandle=Ji(Fn.bind(null,e,rt,en),o);break}Fn(e,rt,en);break;case 5:Fn(e,rt,en);break;default:throw Error(c(329))}}}return ot(e,Le()),e.callbackNode===r?gu.bind(null,e):null}function Ws(e,t){var r=eo;return e.current.memoizedState.isDehydrated&&(Dn(e,t).flags|=256),e=si(e,t),e!==2&&(t=rt,rt=r,t!==null&&Vs(t)),e}function Vs(e){rt===null?rt=e:rt.push.apply(rt,e)}function vp(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var o=0;o<r.length;o++){var i=r[o],l=i.getSnapshot;i=i.value;try{if(!St(l(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function wn(e,t){for(t&=~Us,t&=~ei,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-At(t),o=1<<r;e[r]=-1,t&=~o}}function yu(e){if((fe&6)!==0)throw Error(c(327));fr();var t=fo(e,0);if((t&1)===0)return ot(e,Le()),null;var r=si(e,t);if(e.tag!==0&&r===2){var o=Ai(e);o!==0&&(t=o,r=Ws(e,o))}if(r===1)throw r=Zr,Dn(e,0),wn(e,t),ot(e,Le()),r;if(r===6)throw Error(c(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Fn(e,rt,en),ot(e,Le()),null}function Ks(e,t){var r=fe;fe|=1;try{return e(t)}finally{fe=r,fe===0&&(pr=Le()+500,Lo&&mn())}}function On(e){_n!==null&&_n.tag===0&&(fe&6)===0&&fr();var t=fe;fe|=1;var r=_t.transition,o=xe;try{if(_t.transition=null,xe=1,e)return e()}finally{xe=o,_t.transition=r,fe=t,(fe&6)===0&&mn()}}function Ys(){pt=hr.current,ke(hr)}function Dn(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Yh(r)),Oe!==null)for(r=Oe.return;r!==null;){var o=r;switch(os(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&To();break;case 3:cr(),ke(et),ke(Ve),ys();break;case 5:ms(o);break;case 4:cr();break;case 13:ke(be);break;case 19:ke(be);break;case 10:us(o.type._context);break;case 22:case 23:Ys()}r=r.return}if(Ue=e,Oe=e=Cn(e.current,null),$e=pt=t,Fe=0,Zr=null,Us=ei=In=0,rt=eo=null,En!==null){for(t=0;t<En.length;t++)if(r=En[t],o=r.interleaved,o!==null){r.interleaved=null;var i=o.next,l=r.pending;if(l!==null){var a=l.next;l.next=i,o.next=a}r.pending=o}En=null}return e}function xu(e,t){do{var r=Oe;try{if(cs(),Ho.current=Vo,qo){for(var o=Ne.memoizedState;o!==null;){var i=o.queue;i!==null&&(i.pending=null),o=o.next}qo=!1}if(Mn=0,Be=De=Ne=null,Vr=!1,Kr=0,Bs.current=null,r===null||r.return===null){Fe=1,Zr=t,Oe=null;break}e:{var l=e,a=r.return,h=r,p=t;if(t=$e,h.flags|=32768,p!==null&&typeof p=="object"&&typeof p.then=="function"){var C=p,D=h,F=D.tag;if((D.mode&1)===0&&(F===0||F===11||F===15)){var I=D.alternate;I?(D.updateQueue=I.updateQueue,D.memoizedState=I.memoizedState,D.lanes=I.lanes):(D.updateQueue=null,D.memoizedState=null)}var W=Hc(a);if(W!==null){W.flags&=-257,qc(W,a,h,l,t),W.mode&1&&Uc(l,C,t),t=W,p=C;var Z=t.updateQueue;if(Z===null){var ee=new Set;ee.add(p),t.updateQueue=ee}else Z.add(p);break e}else{if((t&1)===0){Uc(l,C,t),Qs();break e}p=Error(c(426))}}else if(Se&&h.mode&1){var Me=Hc(a);if(Me!==null){(Me.flags&65536)===0&&(Me.flags|=256),qc(Me,a,h,l,t),ls(ur(p,h));break e}}l=p=ur(p,h),Fe!==4&&(Fe=2),eo===null?eo=[l]:eo.push(l),l=a;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var x=Gc(l,p,t);pc(l,x);break e;case 1:h=p;var f=l.type,j=l.stateNode;if((l.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(vn===null||!vn.has(j)))){l.flags|=65536,t&=-t,l.lanes|=t;var z=Bc(l,h,t);pc(l,z);break e}}l=l.return}while(l!==null)}ju(r)}catch(te){t=te,Oe===r&&r!==null&&(Oe=r=r.return);continue}break}while(!0)}function vu(){var e=Zo.current;return Zo.current=Vo,e===null?Vo:e}function Qs(){(Fe===0||Fe===3||Fe===2)&&(Fe=4),Ue===null||(In&268435455)===0&&(ei&268435455)===0||wn(Ue,$e)}function si(e,t){var r=fe;fe|=2;var o=vu();(Ue!==e||$e!==t)&&(en=null,Dn(e,t));do try{_p();break}catch(i){xu(e,i)}while(!0);if(cs(),fe=r,Zo.current=o,Oe!==null)throw Error(c(261));return Ue=null,$e=0,Fe}function _p(){for(;Oe!==null;)_u(Oe)}function jp(){for(;Oe!==null&&!Wd();)_u(Oe)}function _u(e){var t=ku(e.alternate,e,pt);e.memoizedProps=e.pendingProps,t===null?ju(e):Oe=t,Bs.current=null}function ju(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=pp(r,t,pt),r!==null){Oe=r;return}}else{if(r=fp(r,t),r!==null){r.flags&=32767,Oe=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Fe=6,Oe=null;return}}if(t=t.sibling,t!==null){Oe=t;return}Oe=t=e}while(t!==null);Fe===0&&(Fe=5)}function Fn(e,t,r){var o=xe,i=_t.transition;try{_t.transition=null,xe=1,wp(e,t,r,o)}finally{_t.transition=i,xe=o}return null}function wp(e,t,r,o){do fr();while(_n!==null);if((fe&6)!==0)throw Error(c(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(c(177));e.callbackNode=null,e.callbackPriority=0;var l=r.lanes|r.childLanes;if(nh(e,l),e===Ue&&(Oe=Ue=null,$e=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||ni||(ni=!0,Au(co,function(){return fr(),null})),l=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||l){l=_t.transition,_t.transition=null;var a=xe;xe=1;var h=fe;fe|=4,Bs.current=null,gp(e,r),du(r,e),Uh(Qi),yo=!!Yi,Qi=Yi=null,e.current=r,yp(r),Vd(),fe=h,xe=a,_t.transition=l}else e.current=r;if(ni&&(ni=!1,_n=e,ri=i),l=e.pendingLanes,l===0&&(vn=null),Qd(r.stateNode),ot(e,Le()),t!==null)for(o=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],o(i.value,{componentStack:i.stack,digest:i.digest});if(ti)throw ti=!1,e=qs,qs=null,e;return(ri&1)!==0&&e.tag!==0&&fr(),l=e.pendingLanes,(l&1)!==0?e===$s?to++:(to=0,$s=e):to=0,mn(),null}function fr(){if(_n!==null){var e=ca(ri),t=_t.transition,r=xe;try{if(_t.transition=null,xe=16>e?16:e,_n===null)var o=!1;else{if(e=_n,_n=null,ri=0,(fe&6)!==0)throw Error(c(331));var i=fe;for(fe|=4,Q=e.current;Q!==null;){var l=Q,a=l.child;if((Q.flags&16)!==0){var h=l.deletions;if(h!==null){for(var p=0;p<h.length;p++){var C=h[p];for(Q=C;Q!==null;){var D=Q;switch(D.tag){case 0:case 11:case 15:Jr(8,D,l)}var F=D.child;if(F!==null)F.return=D,Q=F;else for(;Q!==null;){D=Q;var I=D.sibling,W=D.return;if(su(D),D===C){Q=null;break}if(I!==null){I.return=W,Q=I;break}Q=W}}}var Z=l.alternate;if(Z!==null){var ee=Z.child;if(ee!==null){Z.child=null;do{var Me=ee.sibling;ee.sibling=null,ee=Me}while(ee!==null)}}Q=l}}if((l.subtreeFlags&2064)!==0&&a!==null)a.return=l,Q=a;else e:for(;Q!==null;){if(l=Q,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:Jr(9,l,l.return)}var x=l.sibling;if(x!==null){x.return=l.return,Q=x;break e}Q=l.return}}var f=e.current;for(Q=f;Q!==null;){a=Q;var j=a.child;if((a.subtreeFlags&2064)!==0&&j!==null)j.return=a,Q=j;else e:for(a=f;Q!==null;){if(h=Q,(h.flags&2048)!==0)try{switch(h.tag){case 0:case 11:case 15:Jo(9,h)}}catch(te){Te(h,h.return,te)}if(h===a){Q=null;break e}var z=h.sibling;if(z!==null){z.return=h.return,Q=z;break e}Q=h.return}}if(fe=i,mn(),Ft&&typeof Ft.onPostCommitFiberRoot=="function")try{Ft.onPostCommitFiberRoot(uo,e)}catch{}o=!0}return o}finally{xe=r,_t.transition=t}}return!1}function wu(e,t,r){t=ur(r,t),t=Gc(e,t,1),e=yn(e,t,1),t=Je(),e!==null&&(Ar(e,1,t),ot(e,t))}function Te(e,t,r){if(e.tag===3)wu(e,e,r);else for(;t!==null;){if(t.tag===3){wu(t,e,r);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(vn===null||!vn.has(o))){e=ur(r,e),e=Bc(t,e,1),t=yn(t,e,1),e=Je(),t!==null&&(Ar(t,1,e),ot(t,e));break}}t=t.return}}function Cp(e,t,r){var o=e.pingCache;o!==null&&o.delete(t),t=Je(),e.pingedLanes|=e.suspendedLanes&r,Ue===e&&($e&r)===r&&(Fe===4||Fe===3&&($e&130023424)===$e&&500>Le()-Hs?Dn(e,0):Us|=r),ot(e,t)}function Cu(e,t){t===0&&((e.mode&1)===0?t=1:(t=po,po<<=1,(po&130023424)===0&&(po=4194304)));var r=Je();e=Xt(e,t),e!==null&&(Ar(e,t,r),ot(e,r))}function kp(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Cu(e,r)}function Ap(e,t){var r=0;switch(e.tag){case 13:var o=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(c(314))}o!==null&&o.delete(t),Cu(e,r)}var ku;ku=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||et.current)nt=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return nt=!1,hp(e,t,r);nt=(e.flags&131072)!==0}else nt=!1,Se&&(t.flags&1048576)!==0&&rc(t,Io,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;Qo(e,t),e=t.pendingProps;var i=nr(t,Ve.current);ar(t,r),i=_s(null,t,o,e,i,r);var l=js();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,tt(o)?(l=!0,Eo(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ps(t),i.updater=Ko,t.stateNode=i,i._reactInternals=t,bs(t,o,e,r),t=Ts(null,t,o,!0,l,r)):(t.tag=0,Se&&l&&rs(t),Xe(null,t,i,r),t=t.child),t;case 16:o=t.elementType;e:{switch(Qo(e,t),e=t.pendingProps,i=o._init,o=i(o._payload),t.type=o,i=t.tag=bp(o),e=Nt(o,e),i){case 0:t=Rs(null,t,o,e,r);break e;case 1:t=Qc(null,t,o,e,r);break e;case 11:t=$c(null,t,o,e,r);break e;case 14:t=Wc(null,t,o,Nt(o.type,e),r);break e}throw Error(c(306,o,""))}return t;case 0:return o=t.type,i=t.pendingProps,i=t.elementType===o?i:Nt(o,i),Rs(e,t,o,i,r);case 1:return o=t.type,i=t.pendingProps,i=t.elementType===o?i:Nt(o,i),Qc(e,t,o,i,r);case 3:e:{if(Xc(t),e===null)throw Error(c(387));o=t.pendingProps,l=t.memoizedState,i=l.element,hc(e,t),Bo(t,o,null,r);var a=t.memoizedState;if(o=a.element,l.isDehydrated)if(l={element:o,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=ur(Error(c(423)),t),t=Jc(e,t,o,r,i);break e}else if(o!==i){i=ur(Error(c(424)),t),t=Jc(e,t,o,r,i);break e}else for(ht=hn(t.stateNode.containerInfo.firstChild),dt=t,Se=!0,bt=null,r=uc(t,null,o,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(ir(),o===i){t=Zt(e,t,r);break e}Xe(e,t,o,r)}t=t.child}return t;case 5:return mc(t),e===null&&ss(t),o=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,a=i.children,Xi(o,i)?a=null:l!==null&&Xi(o,l)&&(t.flags|=32),Yc(e,t),Xe(e,t,a,r),t.child;case 6:return e===null&&ss(t),null;case 13:return Zc(e,t,r);case 4:return fs(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=sr(t,null,o,r):Xe(e,t,o,r),t.child;case 11:return o=t.type,i=t.pendingProps,i=t.elementType===o?i:Nt(o,i),$c(e,t,o,i,r);case 7:return Xe(e,t,t.pendingProps,r),t.child;case 8:return Xe(e,t,t.pendingProps.children,r),t.child;case 12:return Xe(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(o=t.type._context,i=t.pendingProps,l=t.memoizedProps,a=i.value,_e(Fo,o._currentValue),o._currentValue=a,l!==null)if(St(l.value,a)){if(l.children===i.children&&!et.current){t=Zt(e,t,r);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var h=l.dependencies;if(h!==null){a=l.child;for(var p=h.firstContext;p!==null;){if(p.context===o){if(l.tag===1){p=Jt(-1,r&-r),p.tag=2;var C=l.updateQueue;if(C!==null){C=C.shared;var D=C.pending;D===null?p.next=p:(p.next=D.next,D.next=p),C.pending=p}}l.lanes|=r,p=l.alternate,p!==null&&(p.lanes|=r),ds(l.return,r,t),h.lanes|=r;break}p=p.next}}else if(l.tag===10)a=l.type===t.type?null:l.child;else if(l.tag===18){if(a=l.return,a===null)throw Error(c(341));a.lanes|=r,h=a.alternate,h!==null&&(h.lanes|=r),ds(a,r,t),a=l.sibling}else a=l.child;if(a!==null)a.return=l;else for(a=l;a!==null;){if(a===t){a=null;break}if(l=a.sibling,l!==null){l.return=a.return,a=l;break}a=a.return}l=a}Xe(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,o=t.pendingProps.children,ar(t,r),i=xt(i),o=o(i),t.flags|=1,Xe(e,t,o,r),t.child;case 14:return o=t.type,i=Nt(o,t.pendingProps),i=Nt(o.type,i),Wc(e,t,o,i,r);case 15:return Vc(e,t,t.type,t.pendingProps,r);case 17:return o=t.type,i=t.pendingProps,i=t.elementType===o?i:Nt(o,i),Qo(e,t),t.tag=1,tt(o)?(e=!0,Eo(t)):e=!1,ar(t,r),Fc(t,o,i),bs(t,o,i,r),Ts(null,t,o,!0,e,r);case 19:return tu(e,t,r);case 22:return Kc(e,t,r)}throw Error(c(156,t.tag))};function Au(e,t){return oa(e,t)}function Sp(e,t,r,o){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jt(e,t,r,o){return new Sp(e,t,r,o)}function Xs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function bp(e){if(typeof e=="function")return Xs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===me)return 11;if(e===Ie)return 14}return 2}function Cn(e,t){var r=e.alternate;return r===null?(r=jt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function li(e,t,r,o,i,l){var a=2;if(o=e,typeof e=="function")Xs(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case N:return zn(r.children,i,l,t);case H:a=8,i|=8;break;case L:return e=jt(12,r,t,i|2),e.elementType=L,e.lanes=l,e;case ve:return e=jt(13,r,t,i),e.elementType=ve,e.lanes=l,e;case Ae:return e=jt(19,r,t,i),e.elementType=Ae,e.lanes=l,e;case pe:return ai(r,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case le:a=10;break e;case se:a=9;break e;case me:a=11;break e;case Ie:a=14;break e;case je:a=16,o=null;break e}throw Error(c(130,e==null?e:typeof e,""))}return t=jt(a,r,t,i),t.elementType=e,t.type=o,t.lanes=l,t}function zn(e,t,r,o){return e=jt(7,e,o,t),e.lanes=r,e}function ai(e,t,r,o){return e=jt(22,e,o,t),e.elementType=pe,e.lanes=r,e.stateNode={isHidden:!1},e}function Js(e,t,r){return e=jt(6,e,null,t),e.lanes=r,e}function Zs(e,t,r){return t=jt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Np(e,t,r,o,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Si(0),this.expirationTimes=Si(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Si(0),this.identifierPrefix=o,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function el(e,t,r,o,i,l,a,h,p){return e=new Np(e,t,r,h,p),t===1?(t=1,l===!0&&(t|=8)):t=0,l=jt(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:o,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},ps(l),e}function Pp(e,t,r){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:g,key:o==null?null:""+o,children:e,containerInfo:t,implementation:r}}function Su(e){if(!e)return fn;e=e._reactInternals;e:{if(bn(e)!==e||e.tag!==1)throw Error(c(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(tt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(c(171))}if(e.tag===1){var r=e.type;if(tt(r))return ec(e,r,t)}return t}function bu(e,t,r,o,i,l,a,h,p){return e=el(r,o,!0,e,i,l,a,h,p),e.context=Su(null),r=e.current,o=Je(),i=jn(r),l=Jt(o,i),l.callback=t??null,yn(r,l,i),e.current.lanes=i,Ar(e,i,o),ot(e,o),e}function ci(e,t,r,o){var i=t.current,l=Je(),a=jn(i);return r=Su(r),t.context===null?t.context=r:t.pendingContext=r,t=Jt(l,a),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=yn(i,t,a),e!==null&&(Tt(e,i,a,l),Go(e,i,a)),a}function ui(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Nu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function tl(e,t){Nu(e,t),(e=e.alternate)&&Nu(e,t)}function Rp(){return null}var Pu=typeof reportError=="function"?reportError:function(e){console.error(e)};function nl(e){this._internalRoot=e}di.prototype.render=nl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));ci(e,t,null,null)},di.prototype.unmount=nl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;On(function(){ci(null,e,null,null)}),t[Vt]=null}};function di(e){this._internalRoot=e}di.prototype.unstable_scheduleHydration=function(e){if(e){var t=ha();e={blockedOn:null,target:e,priority:t};for(var r=0;r<cn.length&&t!==0&&t<cn[r].priority;r++);cn.splice(r,0,e),r===0&&ma(e)}};function rl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function hi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ru(){}function Tp(e,t,r,o,i){if(i){if(typeof o=="function"){var l=o;o=function(){var C=ui(a);l.call(C)}}var a=bu(t,o,e,0,null,!1,!1,"",Ru);return e._reactRootContainer=a,e[Vt]=a.current,zr(e.nodeType===8?e.parentNode:e),On(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof o=="function"){var h=o;o=function(){var C=ui(p);h.call(C)}}var p=el(e,0,!1,null,null,!1,!1,"",Ru);return e._reactRootContainer=p,e[Vt]=p.current,zr(e.nodeType===8?e.parentNode:e),On(function(){ci(t,p,r,o)}),p}function pi(e,t,r,o,i){var l=r._reactRootContainer;if(l){var a=l;if(typeof i=="function"){var h=i;i=function(){var p=ui(a);h.call(p)}}ci(t,a,e,i)}else a=Tp(r,t,e,i,o);return ui(a)}ua=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=kr(t.pendingLanes);r!==0&&(bi(t,r|1),ot(t,Le()),(fe&6)===0&&(pr=Le()+500,mn()))}break;case 13:On(function(){var o=Xt(e,1);if(o!==null){var i=Je();Tt(o,e,1,i)}}),tl(e,1)}},Ni=function(e){if(e.tag===13){var t=Xt(e,134217728);if(t!==null){var r=Je();Tt(t,e,134217728,r)}tl(e,134217728)}},da=function(e){if(e.tag===13){var t=jn(e),r=Xt(e,t);if(r!==null){var o=Je();Tt(r,e,t,o)}tl(e,t)}},ha=function(){return xe},pa=function(e,t){var r=xe;try{return xe=e,t()}finally{xe=r}},Re=function(e,t,r){switch(t){case"input":if(Un(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var o=r[t];if(o!==e&&o.form===e.form){var i=Ro(o);if(!i)throw Error(c(90));Gn(o),Un(o,i)}}}break;case"textarea":It(e,r);break;case"select":t=r.value,t!=null&&Lt(e,!!r.multiple,t,!1)}},Wn=Ks,Jl=On;var Ep={usingClientEntryPoint:!1,Events:[Ur,er,Ro,vr,_r,Ks]},no={findFiberByHostInstance:Nn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Lp={bundleType:no.bundleType,version:no.version,rendererPackageName:no.rendererPackageName,rendererConfig:no.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:T.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=na(e),e===null?null:e.stateNode},findFiberByHostInstance:no.findFiberByHostInstance||Rp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fi.isDisabled&&fi.supportsFiber)try{uo=fi.inject(Lp),Ft=fi}catch{}}return it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ep,it.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rl(t))throw Error(c(200));return Pp(e,t,null,r)},it.createRoot=function(e,t){if(!rl(e))throw Error(c(299));var r=!1,o="",i=Pu;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=el(e,1,!1,null,null,r,!1,o,i),e[Vt]=t.current,zr(e.nodeType===8?e.parentNode:e),new nl(t)},it.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=na(t),e=e===null?null:e.stateNode,e},it.flushSync=function(e){return On(e)},it.hydrate=function(e,t,r){if(!hi(t))throw Error(c(200));return pi(null,e,t,!0,r)},it.hydrateRoot=function(e,t,r){if(!rl(e))throw Error(c(405));var o=r!=null&&r.hydratedSources||null,i=!1,l="",a=Pu;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onRecoverableError!==void 0&&(a=r.onRecoverableError)),t=bu(t,null,e,1,r??null,i,!1,l,a),e[Vt]=t.current,zr(e),o)for(e=0;e<o.length;e++)r=o[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new di(t)},it.render=function(e,t,r){if(!hi(t))throw Error(c(200));return pi(null,e,t,!1,r)},it.unmountComponentAtNode=function(e){if(!hi(e))throw Error(c(40));return e._reactRootContainer?(On(function(){pi(null,null,e,!1,function(){e._reactRootContainer=null,e[Vt]=null})}),!0):!1},it.unstable_batchedUpdates=Ks,it.unstable_renderSubtreeIntoContainer=function(e,t,r,o){if(!hi(r))throw Error(c(200));if(e==null||e._reactInternals===void 0)throw Error(c(38));return pi(e,t,r,!1,o)},it.version="18.3.1-next-f1338f8080-20240426",it}var Fu;function Bp(){if(Fu)return sl.exports;Fu=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(u){console.error(u)}}return s(),sl.exports=Gp(),sl.exports}var zu;function Up(){if(zu)return mi;zu=1;var s=Bp();return mi.createRoot=s.createRoot,mi.hydrateRoot=s.hydrateRoot,mi}var Hp=Up();const qp=[{group:"Getting Started",links:[{id:"home",label:"Home"},{id:"installation",label:"Installation"},{id:"quickstart",label:"Quick Start"},{id:"how-it-works",label:"How it works"}]},{group:"Core Features",links:[{id:"object-oriented",label:"Object-Oriented"},{id:"life-cycle",label:"Life Cycle Hooks"},{id:"grpc",label:"gRPC (Scaling)"},{id:"mcp",label:"MCP"}]},{group:"Advanced",links:[{id:"special",label:"Special Attributes"},{id:"nesting",label:"Complex Nesting"},{id:"runtime",label:"Runtime Builder"},{id:"reference",label:"API Reference"}]},{group:"Resources",links:[{id:"roadmap",label:"Roadmap"},{id:"examples",label:"Examples"},{id:"contrib",label:"Contributing"}]}];function $p({active:s,onNavigate:u,isOpen:c,onClose:d}){return n.jsx("nav",{className:`sidebar${c?" mobile-open":""}`,children:qp.map(({group:v,links:w})=>n.jsxs("div",{className:"nav-section",children:[n.jsx("h3",{children:v}),w.map(({id:k,label:y})=>n.jsx("button",{className:`nav-link ${s===k?"active":""}`,onClick:()=>{u(k),d==null||d()},children:y},k))]},v))})}function Wp({onSearchOpen:s,onNavigate:u}){return n.jsxs("header",{className:"doc-header",children:[n.jsxs("button",{className:"header-logo",onClick:()=>u("home"),children:[n.jsx("span",{className:"logo-text",children:"PyBotchi"}),n.jsx("span",{className:"version-badge",children:"v4.2.0"})]}),n.jsxs("button",{className:"header-search",onClick:s,children:[n.jsx("span",{className:"search-icon",children:"⌕"}),n.jsx("span",{className:"search-placeholder",children:"Search documentation..."}),n.jsx("kbd",{className:"search-kbd",children:"Ctrl+K"})]}),n.jsx("div",{className:"header-actions",children:n.jsx("a",{href:"https://github.com/amadolid/pybotchi",className:"github-btn",target:"_blank",rel:"noreferrer",children:"GitHub"})})]})}const Vp=[{page:"home",title:"Home",section:"Overview",sectionId:"overview",text:"PyBotchi Python AI agent orchestration framework scalable lifecycle hooks gRPC MCP"},{page:"installation",title:"Installation",section:"pip install",sectionId:"pip-install",text:"pip install pybotchi grpc mcp poetry Python 3.12 extras from source"},{page:"quickstart",title:"Quick Start",section:"Your First Agent",sectionId:"your-first-agent",text:"first agent LLM setup AzureChatOpenAI Action Context asyncio run"},{page:"how-it-works",title:"How It Works",section:"Architecture",sectionId:"architecture",text:"action tree context LLM tool calls lifecycle hooks parent child workflow"},{page:"object-oriented",title:"Object-Oriented",section:"Inheritance",sectionId:"inheritance",text:"class inheritance composition override defaults abstract actions polymorphism encapsulation PrivateAttr"},{page:"life-cycle",title:"Life Cycle Hooks",section:"pre",sectionId:"pre",text:"pre hook before child agents validation data gathering business logic guardrails"},{page:"life-cycle",title:"Life Cycle Hooks",section:"post",sectionId:"post",text:"post hook after child complete consolidate results persistence"},{page:"life-cycle",title:"Life Cycle Hooks",section:"on_error",sectionId:"on_error",text:"on_error exception handling retry match ConnectionError TimeoutError"},{page:"life-cycle",title:"Life Cycle Hooks",section:"fallback",sectionId:"fallback",text:"fallback no child agent selected non-tool-call result text content"},{page:"life-cycle",title:"Life Cycle Hooks",section:"child_selection",sectionId:"child_selection",text:"child_selection determine which children execute custom selection override"},{page:"life-cycle",title:"Life Cycle Hooks",section:"commit_context",sectionId:"commit_context",text:"commit_context merge context detach clone isolated execution"},{page:"life-cycle",title:"Life Cycle Hooks",section:"cleanup",sectionId:"cleanup",text:"cleanup finally always runs release resources close connection teardown reset state"},{page:"life-cycle",title:"Life Cycle Hooks",section:"pre_mcp",sectionId:"pre_mcp",text:"pre_mcp MCPAction connection headers credentials allowed_tools guardrails"},{page:"life-cycle",title:"Life Cycle Hooks",section:"pre_grpc",sectionId:"pre_grpc",text:"pre_grpc GRPCAction connection metadata group credentials"},{page:"life-cycle",title:"Life Cycle Hooks",section:"on_child_init_error",sectionId:"on_child_init_error",text:"on_child_init_error child initialization failure correction error recovery history"},{page:"grpc",title:"gRPC (Scaling)",section:"Distributed Agents",sectionId:"distributed-agents",text:"gRPC scale distributed servers GRPCAction GRPCConnection GRPCRemoteAction remote"},{page:"mcp",title:"MCP",section:"Model Context Protocol",sectionId:"model-context-protocol",text:"MCP model context protocol MCPAction MCPConnection standalone mounted FastAPI"},{page:"mcp",title:"MCP",section:"PyBotchi-Native MCP Features",sectionId:"pybotchi-native-mcp",text:"pybotchi native context propagation stateless_groups stateful session callbacks sampling elicitation block_return consume_result_meta return value stop request_context"},{page:"special",title:"Special Attributes",section:"__concurrent__",sectionId:"__concurrent__",text:"__concurrent__ parallel asyncio TaskGroup child actions scenarios"},{page:"special",title:"Special Attributes",section:"__max_iteration__",sectionId:"__max_iteration__",text:"__max_iteration__ loop iteration limit cycle child actions"},{page:"special",title:"Special Attributes",section:"__first_tool_only__",sectionId:"__first_tool_only__",text:"__first_tool_only__ single tool call selection first result"},{page:"special",title:"Special Attributes",section:"__system_prompt__",sectionId:"__system_prompt__",text:"__system_prompt__ override system prompt tool selection trigger"},{page:"special",title:"Special Attributes",section:"__temperature__",sectionId:"__temperature__",text:"__temperature__ override temperature model tool selection"},{page:"special",title:"Special Attributes",section:"__default_tool__",sectionId:"__default_tool__",text:"__default_tool__ fallback DEFAULT_ACTION when no tool selected"},{page:"special",title:"Special Attributes",section:"__agent__",sectionId:"__agent__",text:"__agent__ mark agent type custom agent not inheritable"},{page:"nesting",title:"Complex Nesting",section:"Deep Hierarchies",sectionId:"deep-hierarchies",text:"nested agent hierarchy inheritance parent child deep levels composition inner class"},{page:"runtime",title:"Runtime Builder",section:"add_child / remove_child",sectionId:"add_child-remove_child",text:"add_child remove_child dynamic graph modification runtime"},{page:"runtime",title:"Runtime Builder",section:"Iteration Pattern",sectionId:"iteration-pattern",text:"__max_iteration__ iteration loop circular fallback BREAK"},{page:"runtime",title:"Runtime Builder",section:"Circular Actions",sectionId:"circular-actions",text:"circular direct indirect add_child self DefaultAction execute workflow loop"},{page:"reference",title:"API Reference",section:"Execution Flow",sectionId:"execution-flow",text:"execute pre post child_selection iteration loop execution flow sequence"},{page:"reference",title:"API Reference",section:"Action Class Variables",sectionId:"action-class-variables",text:"__concurrent__ __max_iteration__ __first_tool_only__ __system_prompt__ __temperature__ __default_tool__ __enabled__ __groups__ __detached__ __skip_commit__ __tool_call_prompt__ __max_iteration_prompt__ __agent__"},{page:"reference",title:"API Reference",section:"Overridable Methods",sectionId:"overridable-methods",text:"pre post fallback on_error on_max_iteration on_max_self_recursion commit_context cleanup child_selection _as_tool on_child_init_error pre_mcp pre_grpc consume_result_meta override lifecycle hook"},{page:"reference",title:"API Reference",section:"child_selection",sectionId:"child_selection",text:"child_selection filter validate add inject override bypass LLM routing custom selection"},{page:"reference",title:"API Reference",section:"__groups__",sectionId:"__groups__",text:"__groups__ set dict groups mcp grpc a2a exposure all valid groups"},{page:"reference",title:"API Reference",section:"Action Class Methods",sectionId:"action-class-methods",text:"add_child remove_child add_grand_child remove_grand_child graph wiring circular cross-module"},{page:"reference",title:"API Reference",section:"Context",sectionId:"context",text:"context fields llm prompts metadata tool_calls allowed_actions add_message add_response set_metadata notify detach_context run_func_in_thread"},{page:"reference",title:"API Reference",section:"ActionReturn",sectionId:"actionreturn",text:"ActionReturn GO BREAK END go end is_break is_end stop continue loop break"},{page:"reference",title:"API Reference",section:"gRPC",sectionId:"grpc",text:"GRPCAction GRPCConnection GRPCRemoteAction GRPCContext integrations grpc reference"},{page:"reference",title:"API Reference",section:"MCP",sectionId:"mcp",text:"MCPAction MCPConnection MCPToolAction build_mcp_app mount_mcp_app mcp reference client_session_args block_return consume_result_meta stateless_groups timeout context propagation MCPContext source_id context_id callbacks sampling"},{page:"reference",title:"API Reference",section:"LLM",sectionId:"llm",text:"LLM.add LLM.base LLM.get model registry bind tools"},{page:"reference",title:"API Reference",section:"Anthropic Compatibility",sectionId:"anthropic-compatibility",text:"Anthropic Claude tool schema tool_use tool_result history known issue limitation workaround add_message child_selection re-injection 1-level deep"},{page:"reference",title:"API Reference",section:"Utilities",sectionId:"utilities",text:"graph flowchart all_agents uuid apply_placeholders unwrap_exceptions mermaid"},{page:"roadmap",title:"Roadmap",section:"Coming Soon",sectionId:"coming-soon",text:"roadmap future features upcoming planned"},{page:"examples",title:"Examples",section:"Getting Started",sectionId:"getting-started",text:"tiny.py full_spec.py minimal examples core concepts"},{page:"examples",title:"Examples",section:"Execution Patterns",sectionId:"execution-patterns",text:"sequential.py nested_combination.py execution patterns combination iteration"},{page:"examples",title:"Examples",section:"Parallel Processing",sectionId:"parallel-processing",text:"concurrent_combination.py concurrent_threading_combination.py async threading"},{page:"examples",title:"Examples",section:"gRPC",sectionId:"grpc",text:"grpc_pybotchi_agent.py grpc_pybotchi_client.py distributed gRPC server client"},{page:"examples",title:"Examples",section:"MCP Protocol",sectionId:"mcp-protocol",text:"mcp_pybotchi_agent.py mcp_pybotchi_client.py MCP integration Atlassian"},{page:"contrib",title:"Contributing",section:"Development Setup",sectionId:"development-setup",text:"fork clone poetry install pre-commit hooks contributing development"},{page:"contrib",title:"Contributing",section:"Code Style",sectionId:"code-style",text:"ruff mypy type hints docstrings line length 120 Python 3.12"},{page:"contrib",title:"Contributing",section:"Pull Requests",sectionId:"pull-requests",text:"pull request PR checklist rebase commit messages MAJOR MINOR BUGFIX DOCS CHORE"}];function Kp({onClose:s,onNavigate:u}){const[c,d]=ze.useState(""),[v,w]=ze.useState(0),k=ze.useRef(null);ze.useEffect(()=>{var O;(O=k.current)==null||O.focus()},[]);const y=c.length>1?Vp.filter(O=>[O.title,O.section,O.text].some(E=>E.toLowerCase().includes(c.toLowerCase()))).slice(0,12):[];ze.useEffect(()=>{w(0)},[c]);const R=(O,E)=>{u(O,E),s()},Y=O=>{O.key==="ArrowDown"?(O.preventDefault(),w(E=>Math.min(E+1,y.length-1))):O.key==="ArrowUp"?(O.preventDefault(),w(E=>Math.max(E-1,0))):O.key==="Enter"&&y[v]?R(y[v].page,y[v].sectionId):O.key==="Escape"&&s()};return n.jsx("div",{className:"search-overlay",onClick:s,children:n.jsxs("div",{className:"search-modal",onClick:O=>O.stopPropagation(),onKeyDown:Y,children:[n.jsxs("div",{className:"search-input-row",children:[n.jsx("span",{className:"search-modal-icon",children:"⌕"}),n.jsx("input",{ref:k,className:"search-input",placeholder:"Search documentation...",value:c,onChange:O=>d(O.target.value)}),n.jsx("button",{className:"search-close",onClick:s,children:"Esc"})]}),y.length>0&&n.jsx("ul",{className:"search-results",children:y.map((O,E)=>n.jsx("li",{children:n.jsxs("button",{className:`search-result-item${E===v?" selected":""}`,onClick:()=>R(O.page,O.sectionId),onMouseEnter:()=>w(E),children:[n.jsx("span",{className:"result-page",children:O.title}),n.jsx("span",{className:"result-divider",children:"›"}),n.jsx("span",{className:"result-section",children:O.section})]})},E))}),c.length>1&&y.length===0&&n.jsxs("div",{className:"search-empty",children:["No results for “",c,"”"]}),c.length===0&&n.jsxs("div",{className:"search-hint",children:[n.jsx("span",{children:"Type to search"}),n.jsxs("span",{className:"hint-keys",children:[n.jsx("kbd",{children:"↑↓"})," navigate · ",n.jsx("kbd",{children:"↵"})," select · ",n.jsx("kbd",{children:"Esc"})," close"]})]})]})})}function Yp({page:s,mainRef:u}){const[c,d]=ze.useState([]);if(ze.useEffect(()=>{const w=u==null?void 0:u.current;if(!w)return;const k=setTimeout(()=>{const y=w.querySelectorAll("h2, h3");d(Array.from(y).map(R=>({text:R.textContent.trim(),level:parseInt(R.tagName[1]),el:R})))},50);return()=>clearTimeout(k)},[s,u]),!c.length)return null;const v=w=>{const k=w.getBoundingClientRect().top+window.scrollY-80;window.scrollTo({top:k,behavior:"smooth"})};return n.jsxs("aside",{className:"toc",children:[n.jsx("div",{className:"toc-header",children:"On this page"}),n.jsx("ul",{className:"toc-list",children:c.map(({text:w,level:k,el:y})=>n.jsx("li",{className:`toc-item toc-level-${k}`,children:n.jsx("button",{className:"toc-link",onClick:()=>v(y),children:w})},w))})]})}const gi=["home","installation","quickstart","how-it-works","object-oriented","life-cycle","grpc","mcp","special","nesting","runtime","reference","roadmap","examples","contrib"],Gu={home:"Home",installation:"Installation",quickstart:"Quick Start","how-it-works":"How It Works","object-oriented":"Object-Oriented","life-cycle":"Life Cycle Hooks",grpc:"gRPC (Scaling)",mcp:"MCP",special:"Special Attributes",nesting:"Complex Nesting",runtime:"Runtime Builder",reference:"API Reference",roadmap:"Roadmap",examples:"Examples",contrib:"Contributing"};function Qp({active:s,onNavigate:u}){const c=gi.indexOf(s),d=c>0?gi[c-1]:null,v=c>=0&&c<gi.length-1?gi[c+1]:null;return!d&&!v?null:n.jsxs("nav",{className:"page-nav",children:[n.jsx("div",{className:"page-nav-side",children:d&&n.jsxs("button",{className:"page-nav-btn",onClick:()=>u(d),children:[n.jsx("span",{className:"nav-arrow",children:"←"}),n.jsxs("span",{className:"nav-info",children:[n.jsx("span",{className:"nav-label",children:"Previous"}),n.jsx("span",{className:"nav-title",children:Gu[d]})]})]})}),n.jsx("div",{className:"page-nav-side page-nav-right",children:v&&n.jsxs("button",{className:"page-nav-btn",onClick:()=>u(v),children:[n.jsxs("span",{className:"nav-info",children:[n.jsx("span",{className:"nav-label",children:"Next"}),n.jsx("span",{className:"nav-title",children:Gu[v]})]}),n.jsx("span",{className:"nav-arrow",children:"→"})]})})]})}function Xp({onNavigate:s}){const u=[{icon:"🪶",title:"Lightweight Architecture",body:n.jsxs(n.Fragment,{children:["The entire system is built upon a minimal foundation of just three core classes:"," ",n.jsx("code",{children:"Action"})," (the central agent with a defined lifecycle), ",n.jsx("code",{children:"Context"})," ","(the universal container for conversational state and metadata), and ",n.jsx("code",{children:"LLM"})," (a singleton client for managing your model connection). This lean design minimizes overhead, ensuring extreme speed and efficiency."]})},{icon:"🏗️",title:"Object-Oriented Design",body:n.jsxs(n.Fragment,{children:["Achieves maximum customizability through a powerful Object-Oriented structure. All base classes inherit from Pydantic ",n.jsx("code",{children:"BaseModel"}),", ensuring rigorous data validation and adherence to industry-standard type hinting. This foundation makes every component inherently overridable and extendable to precisely match complex requirements."]})},{icon:"🔧",title:"JSON Schema Native",body:n.jsxs(n.Fragment,{children:["Built on Pydantic ",n.jsx("code",{children:"BaseModel"}),", every Action automatically conforms to JSON Schema standards used by OpenAI, Gemini, and other LLM providers for tool calling. Anthropic requires minor adjustments, but with PyBotchi's overridable architecture, you can easily adapt to any provider's specification without compromising the core design."]})},{icon:"🎣",title:"Action Lifecycle Hooks",body:n.jsxs(n.Fragment,{children:["The base ",n.jsx("code",{children:"Action"})," class provides essential lifecycle events (hooks) that developers can easily override or catch. This allows for precise control over the agent's behavior at critical points—such as before execution, after execution, or upon failure—greatly simplifying state management, logging, and error handling."]})},{icon:"⚡",title:"Highly Scalable",body:`The system is built on an async-first architecture, maximizing concurrency and I/O
        efficiency. Leveraging this, along with its modularity and graph structure, the architecture
        is primed for distributed scaling. Agents can be deployed remotely or across different
        machines to isolate resources, optimize performance, and effortlessly handle massive,
        parallel workloads.`},{icon:"🧱",title:"Truly Modular",body:`Agents are developed as isolated, self-contained units. This means different teams can
        independently develop, improve, or modify specific agents without impacting the system's
        core logic. Any agent can function as a standalone unit, a subordinate in a workflow, or a
        Master Agent.`},{icon:"🔗",title:"Graph By Design",body:`The architecture enforces a structured parent-child relationship for agent
        orchestration. Agents are declared within a graph-like structure, explicitly defining
        potential task flow and delegation paths. This structure provides clear visibility into
        system execution and state even during development, simplifying debugging, testing, and
        complex multi-agent reasoning.`},{icon:"🌍",title:"Framework & Model Agnostic",body:`The inherent Object-Oriented nature ensures true agnosticism. By prioritizing
        overridability in every base class, the library allows developers to bypass default
        implementations entirely, catering to any specific LLM client, third-party framework, or
        unique business requirement without architectural restriction.`}];return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"hero",id:"overview",children:[n.jsx("h1",{children:"PyBotchi"}),n.jsx("p",{className:"subtitle",children:"Build scalable AI agent systems with ease"}),n.jsx("p",{children:"A modern Python library for orchestrating multi-agent AI systems. Design and deploy agents that are inherently lightest, fastest, and most customizable. Leverage a modular, framework-agnostic, and scalable architecture to build intelligent agents that work together to solve complex problems."}),n.jsxs("div",{className:"cta-buttons",children:[n.jsx("button",{className:"btn btn-primary",onClick:()=>s("installation"),children:"Get Started"}),n.jsx("a",{href:"https://github.com/amadolid/pybotchi",className:"btn btn-secondary",target:"_blank",rel:"noreferrer",children:"View on GitHub"})]})]}),n.jsx("div",{className:"features-grid",children:u.map(({icon:c,title:d,body:v})=>n.jsxs("div",{className:"feature-card",children:[n.jsx("div",{className:"feature-icon",children:c}),n.jsx("h3",{children:d}),n.jsx("p",{children:v})]},d))})]})}function Jp(s,u){if(s==null)return{};var c={};for(var d in s)if({}.hasOwnProperty.call(s,d)){if(u.indexOf(d)!==-1)continue;c[d]=s[d]}return c}function Zp(s,u){if(s==null)return{};var c,d,v=Jp(s,u);if(Object.getOwnPropertySymbols){var w=Object.getOwnPropertySymbols(s);for(d=0;d<w.length;d++)c=w[d],u.indexOf(c)===-1&&{}.propertyIsEnumerable.call(s,c)&&(v[c]=s[c])}return v}function $l(s,u){(u==null||u>s.length)&&(u=s.length);for(var c=0,d=Array(u);c<u;c++)d[c]=s[c];return d}function ef(s){if(Array.isArray(s))return $l(s)}function tf(s){if(typeof Symbol<"u"&&s[Symbol.iterator]!=null||s["@@iterator"]!=null)return Array.from(s)}function nf(s,u){if(s){if(typeof s=="string")return $l(s,u);var c={}.toString.call(s).slice(8,-1);return c==="Object"&&s.constructor&&(c=s.constructor.name),c==="Map"||c==="Set"?Array.from(s):c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?$l(s,u):void 0}}function rf(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Wl(s){return ef(s)||tf(s)||nf(s)||rf()}function oo(s){"@babel/helpers - typeof";return oo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},oo(s)}function of(s,u){if(oo(s)!="object"||!s)return s;var c=s[Symbol.toPrimitive];if(c!==void 0){var d=c.call(s,u);if(oo(d)!="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return(u==="string"?String:Number)(s)}function sf(s){var u=of(s,"string");return oo(u)=="symbol"?u:u+""}function Pd(s,u,c){return(u=sf(u))in s?Object.defineProperty(s,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[u]=c,s}function Vl(){return Vl=Object.assign?Object.assign.bind():function(s){for(var u=1;u<arguments.length;u++){var c=arguments[u];for(var d in c)({}).hasOwnProperty.call(c,d)&&(s[d]=c[d])}return s},Vl.apply(null,arguments)}function Bu(s,u){var c=Object.keys(s);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(s);u&&(d=d.filter(function(v){return Object.getOwnPropertyDescriptor(s,v).enumerable})),c.push.apply(c,d)}return c}function mr(s){for(var u=1;u<arguments.length;u++){var c=arguments[u]!=null?arguments[u]:{};u%2?Bu(Object(c),!0).forEach(function(d){Pd(s,d,c[d])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(c)):Bu(Object(c)).forEach(function(d){Object.defineProperty(s,d,Object.getOwnPropertyDescriptor(c,d))})}return s}function lf(s){var u=s.length;if(u===0||u===1)return s;if(u===2)return[s[0],s[1],"".concat(s[0],".").concat(s[1]),"".concat(s[1],".").concat(s[0])];if(u===3)return[s[0],s[1],s[2],"".concat(s[0],".").concat(s[1]),"".concat(s[0],".").concat(s[2]),"".concat(s[1],".").concat(s[0]),"".concat(s[1],".").concat(s[2]),"".concat(s[2],".").concat(s[0]),"".concat(s[2],".").concat(s[1]),"".concat(s[0],".").concat(s[1],".").concat(s[2]),"".concat(s[0],".").concat(s[2],".").concat(s[1]),"".concat(s[1],".").concat(s[0],".").concat(s[2]),"".concat(s[1],".").concat(s[2],".").concat(s[0]),"".concat(s[2],".").concat(s[0],".").concat(s[1]),"".concat(s[2],".").concat(s[1],".").concat(s[0])];if(u>=4)return[s[0],s[1],s[2],s[3],"".concat(s[0],".").concat(s[1]),"".concat(s[0],".").concat(s[2]),"".concat(s[0],".").concat(s[3]),"".concat(s[1],".").concat(s[0]),"".concat(s[1],".").concat(s[2]),"".concat(s[1],".").concat(s[3]),"".concat(s[2],".").concat(s[0]),"".concat(s[2],".").concat(s[1]),"".concat(s[2],".").concat(s[3]),"".concat(s[3],".").concat(s[0]),"".concat(s[3],".").concat(s[1]),"".concat(s[3],".").concat(s[2]),"".concat(s[0],".").concat(s[1],".").concat(s[2]),"".concat(s[0],".").concat(s[1],".").concat(s[3]),"".concat(s[0],".").concat(s[2],".").concat(s[1]),"".concat(s[0],".").concat(s[2],".").concat(s[3]),"".concat(s[0],".").concat(s[3],".").concat(s[1]),"".concat(s[0],".").concat(s[3],".").concat(s[2]),"".concat(s[1],".").concat(s[0],".").concat(s[2]),"".concat(s[1],".").concat(s[0],".").concat(s[3]),"".concat(s[1],".").concat(s[2],".").concat(s[0]),"".concat(s[1],".").concat(s[2],".").concat(s[3]),"".concat(s[1],".").concat(s[3],".").concat(s[0]),"".concat(s[1],".").concat(s[3],".").concat(s[2]),"".concat(s[2],".").concat(s[0],".").concat(s[1]),"".concat(s[2],".").concat(s[0],".").concat(s[3]),"".concat(s[2],".").concat(s[1],".").concat(s[0]),"".concat(s[2],".").concat(s[1],".").concat(s[3]),"".concat(s[2],".").concat(s[3],".").concat(s[0]),"".concat(s[2],".").concat(s[3],".").concat(s[1]),"".concat(s[3],".").concat(s[0],".").concat(s[1]),"".concat(s[3],".").concat(s[0],".").concat(s[2]),"".concat(s[3],".").concat(s[1],".").concat(s[0]),"".concat(s[3],".").concat(s[1],".").concat(s[2]),"".concat(s[3],".").concat(s[2],".").concat(s[0]),"".concat(s[3],".").concat(s[2],".").concat(s[1]),"".concat(s[0],".").concat(s[1],".").concat(s[2],".").concat(s[3]),"".concat(s[0],".").concat(s[1],".").concat(s[3],".").concat(s[2]),"".concat(s[0],".").concat(s[2],".").concat(s[1],".").concat(s[3]),"".concat(s[0],".").concat(s[2],".").concat(s[3],".").concat(s[1]),"".concat(s[0],".").concat(s[3],".").concat(s[1],".").concat(s[2]),"".concat(s[0],".").concat(s[3],".").concat(s[2],".").concat(s[1]),"".concat(s[1],".").concat(s[0],".").concat(s[2],".").concat(s[3]),"".concat(s[1],".").concat(s[0],".").concat(s[3],".").concat(s[2]),"".concat(s[1],".").concat(s[2],".").concat(s[0],".").concat(s[3]),"".concat(s[1],".").concat(s[2],".").concat(s[3],".").concat(s[0]),"".concat(s[1],".").concat(s[3],".").concat(s[0],".").concat(s[2]),"".concat(s[1],".").concat(s[3],".").concat(s[2],".").concat(s[0]),"".concat(s[2],".").concat(s[0],".").concat(s[1],".").concat(s[3]),"".concat(s[2],".").concat(s[0],".").concat(s[3],".").concat(s[1]),"".concat(s[2],".").concat(s[1],".").concat(s[0],".").concat(s[3]),"".concat(s[2],".").concat(s[1],".").concat(s[3],".").concat(s[0]),"".concat(s[2],".").concat(s[3],".").concat(s[0],".").concat(s[1]),"".concat(s[2],".").concat(s[3],".").concat(s[1],".").concat(s[0]),"".concat(s[3],".").concat(s[0],".").concat(s[1],".").concat(s[2]),"".concat(s[3],".").concat(s[0],".").concat(s[2],".").concat(s[1]),"".concat(s[3],".").concat(s[1],".").concat(s[0],".").concat(s[2]),"".concat(s[3],".").concat(s[1],".").concat(s[2],".").concat(s[0]),"".concat(s[3],".").concat(s[2],".").concat(s[0],".").concat(s[1]),"".concat(s[3],".").concat(s[2],".").concat(s[1],".").concat(s[0])]}var cl={};function af(s){if(s.length===0||s.length===1)return s;var u=s.join(".");return cl[u]||(cl[u]=lf(s)),cl[u]}function cf(s){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=arguments.length>2?arguments[2]:void 0,d=s.filter(function(w){return w!=="token"}),v=af(d);return v.reduce(function(w,k){return mr(mr({},w),c[k])},u)}function Uu(s){return s.join(" ")}function uf(s,u){var c=0;return function(d){return c+=1,d.map(function(v,w){return Rd({node:v,stylesheet:s,useInlineStyles:u,key:"code-segment-".concat(c,"-").concat(w)})})}}function Rd(s){var u=s.node,c=s.stylesheet,d=s.style,v=d===void 0?{}:d,w=s.useInlineStyles,k=s.key,y=u.properties,R=u.type,Y=u.tagName,O=u.value;if(R==="text")return O;if(Y){var E=uf(c,w),B;if(!w)B=mr(mr({},y),{},{className:Uu(y.className)});else{var V=Object.keys(c).reduce(function(ie,b){return b.split(".").forEach(function(A){ie.includes(A)||ie.push(A)}),ie},[]),X=y.className&&y.className.includes("token")?["token"]:[],q=y.className&&X.concat(y.className.filter(function(ie){return!V.includes(ie)}));B=mr(mr({},y),{},{className:Uu(q)||void 0,style:cf(y.className,Object.assign({},y.style,v),c)})}var U=E(u.children);return An.createElement(Y,Vl({key:k},B),U)}}const df=(function(s,u){var c=s.listLanguages();return c.indexOf(u)!==-1});var hf=["language","children","style","customStyle","codeTagProps","useInlineStyles","showLineNumbers","showInlineLineNumbers","startingLineNumber","lineNumberContainerStyle","lineNumberStyle","wrapLines","wrapLongLines","lineProps","renderer","PreTag","CodeTag","code","astGenerator"];function Hu(s,u){var c=Object.keys(s);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(s);u&&(d=d.filter(function(v){return Object.getOwnPropertyDescriptor(s,v).enumerable})),c.push.apply(c,d)}return c}function Sn(s){for(var u=1;u<arguments.length;u++){var c=arguments[u]!=null?arguments[u]:{};u%2?Hu(Object(c),!0).forEach(function(d){Pd(s,d,c[d])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(c)):Hu(Object(c)).forEach(function(d){Object.defineProperty(s,d,Object.getOwnPropertyDescriptor(c,d))})}return s}var pf=/\n/g;function ff(s){return s.match(pf)}function mf(s){var u=s.lines,c=s.startingLineNumber,d=s.style;return u.map(function(v,w){var k=w+c;return An.createElement("span",{key:"line-".concat(w),className:"react-syntax-highlighter-line-number",style:typeof d=="function"?d(k):d},"".concat(k,`
`))})}function gf(s){var u=s.codeString,c=s.codeStyle,d=s.containerStyle,v=d===void 0?{float:"left",paddingRight:"10px"}:d,w=s.numberStyle,k=w===void 0?{}:w,y=s.startingLineNumber;return An.createElement("code",{style:Object.assign({},c,v)},mf({lines:u.replace(/\n$/,"").split(`
`),style:k,startingLineNumber:y}))}function yf(s){return"".concat(s.toString().length,".25em")}function Td(s,u){return{type:"element",tagName:"span",properties:{key:"line-number--".concat(s),className:["comment","linenumber","react-syntax-highlighter-line-number"],style:u},children:[{type:"text",value:s}]}}function Ed(s,u,c){var d={display:"inline-block",minWidth:yf(c),paddingRight:"1em",textAlign:"right",userSelect:"none"},v=typeof s=="function"?s(u):s,w=Sn(Sn({},d),v);return w}function vi(s){var u=s.children,c=s.lineNumber,d=s.lineNumberStyle,v=s.largestLineNumber,w=s.showInlineLineNumbers,k=s.lineProps,y=k===void 0?{}:k,R=s.className,Y=R===void 0?[]:R,O=s.showLineNumbers,E=s.wrapLongLines,B=s.wrapLines,V=B===void 0?!1:B,X=V?Sn({},typeof y=="function"?y(c):y):{};if(X.className=X.className?[].concat(Wl(X.className.trim().split(/\s+/)),Wl(Y)):Y,c&&w){var q=Ed(d,c,v);u.unshift(Td(c,q))}return E&O&&(X.style=Sn({display:"flex"},X.style)),{type:"element",tagName:"span",properties:X,children:u}}function Ld(s){for(var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],d=0;d<s.length;d++){var v=s[d];if(v.type==="text")c.push(vi({children:[v],className:Wl(new Set(u))}));else if(v.children){var w=u.concat(v.properties.className);Ld(v.children,w).forEach(function(k){return c.push(k)})}}return c}function xf(s,u,c,d,v,w,k,y,R){var Y,O=Ld(s.value),E=[],B=-1,V=0;function X(P,g){var N=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return vi({children:P,lineNumber:g,lineNumberStyle:y,largestLineNumber:k,showInlineLineNumbers:v,lineProps:c,className:N,showLineNumbers:d,wrapLongLines:R,wrapLines:u})}function q(P,g){if(d&&g&&v){var N=Ed(y,g,k);P.unshift(Td(g,N))}return P}function U(P,g){var N=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return u||N.length>0?X(P,g,N):q(P,g)}for(var ie=function(){var g=O[V],N=g.children[0].value,H=ff(N);if(H){var L=N.split(`
`);L.forEach(function(le,se){var me=d&&E.length+w,ve={type:"text",value:"".concat(le,`
`)};if(se===0){var Ae=O.slice(B+1,V).concat(vi({children:[ve],className:g.properties.className})),Ie=U(Ae,me);E.push(Ie)}else if(se===L.length-1){var je=O[V+1]&&O[V+1].children&&O[V+1].children[0],pe={type:"text",value:"".concat(le)};if(je){var M=vi({children:[pe],className:g.properties.className});O.splice(V+1,0,M)}else{var K=[pe],G=U(K,me,g.properties.className);E.push(G)}}else{var m=[ve],S=U(m,me,g.properties.className);E.push(S)}}),B=V}V++};V<O.length;)ie();if(B!==O.length-1){var b=O.slice(B+1,O.length);if(b&&b.length){var A=d&&E.length+w,T=U(b,A);E.push(T)}}return u?E:(Y=[]).concat.apply(Y,E)}function vf(s){var u=s.rows,c=s.stylesheet,d=s.useInlineStyles;return u.map(function(v,w){return Rd({node:v,stylesheet:c,useInlineStyles:d,key:"code-segment-".concat(w)})})}function Md(s){return s&&typeof s.highlightAuto<"u"}function _f(s){var u=s.astGenerator,c=s.language,d=s.code,v=s.defaultCodeValue;if(Md(u)){var w=df(u,c);return c==="text"?{value:v,language:"text"}:w?u.highlight(c,d):u.highlightAuto(d)}try{return c&&c!=="text"?{value:u.highlight(d,c)}:{value:v}}catch{return{value:v}}}function jf(s,u){return function(d){var v,w,k=d.language,y=d.children,R=d.style,Y=R===void 0?u:R,O=d.customStyle,E=O===void 0?{}:O,B=d.codeTagProps,V=B===void 0?{className:k?"language-".concat(k):void 0,style:Sn(Sn({},Y['code[class*="language-"]']),Y['code[class*="language-'.concat(k,'"]')])}:B,X=d.useInlineStyles,q=X===void 0?!0:X,U=d.showLineNumbers,ie=U===void 0?!1:U,b=d.showInlineLineNumbers,A=b===void 0?!0:b,T=d.startingLineNumber,P=T===void 0?1:T,g=d.lineNumberContainerStyle,N=d.lineNumberStyle,H=N===void 0?{}:N,L=d.wrapLines,le=d.wrapLongLines,se=le===void 0?!1:le,me=d.lineProps,ve=me===void 0?{}:me,Ae=d.renderer,Ie=d.PreTag,je=Ie===void 0?"pre":Ie,pe=d.CodeTag,M=pe===void 0?"code":pe,K=d.code,G=K===void 0?(Array.isArray(y)?y[0]:y)||"":K,m=d.astGenerator,S=Zp(d,hf);m=m||s;var $=ie?An.createElement(gf,{containerStyle:g,codeStyle:V.style||{},numberStyle:H,startingLineNumber:P,codeString:G}):null,J=Y.hljs||Y['pre[class*="language-"]']||{backgroundColor:"#fff"},ne=Md(m)?"hljs":"prismjs",ae=q?Object.assign({},S,{style:Object.assign({},J,E)}):Object.assign({},S,{className:S.className?"".concat(ne," ").concat(S.className):ne,style:Object.assign({},E)});if(se?V.style=Sn({whiteSpace:"pre-wrap"},V.style):V.style=Sn({whiteSpace:"pre"},V.style),!m)return An.createElement(je,ae,$,An.createElement(M,V,G));(L===void 0&&Ae||se)&&(L=!0),Ae=Ae||vf;var ue=[{type:"text",value:G}],de=_f({astGenerator:m,language:k,code:G,defaultCodeValue:ue});de.language===null&&(de.value=ue);var ge=(v=(w=G.match(/\n/g))===null||w===void 0?void 0:w.length)!==null&&v!==void 0?v:0,Ee=P+ge,lt=xf(de,L,ve,ie,A,P,Ee,H,se);return An.createElement(je,ae,An.createElement(M,V,!A&&$,Ae({rows:lt,stylesheet:Y,useInlineStyles:q})))}}var ul,qu;function wf(){if(qu)return ul;qu=1,ul=u;var s=Object.prototype.hasOwnProperty;function u(){for(var c={},d=0;d<arguments.length;d++){var v=arguments[d];for(var w in v)s.call(v,w)&&(c[w]=v[w])}return c}return ul}var dl,$u;function Id(){if($u)return dl;$u=1,dl=u;var s=u.prototype;s.space=null,s.normal={},s.property={};function u(c,d,v){this.property=c,this.normal=d,v&&(this.space=v)}return dl}var hl,Wu;function Cf(){if(Wu)return hl;Wu=1;var s=wf(),u=Id();hl=c;function c(d){for(var v=d.length,w=[],k=[],y=-1,R,Y;++y<v;)R=d[y],w.push(R.property),k.push(R.normal),Y=R.space;return new u(s.apply(null,w),s.apply(null,k),Y)}return hl}var pl,Vu;function Yl(){if(Vu)return pl;Vu=1,pl=s;function s(u){return u.toLowerCase()}return pl}var fl,Ku;function Od(){if(Ku)return fl;Ku=1,fl=u;var s=u.prototype;s.space=null,s.attribute=null,s.property=null,s.boolean=!1,s.booleanish=!1,s.overloadedBoolean=!1,s.number=!1,s.commaSeparated=!1,s.spaceSeparated=!1,s.commaOrSpaceSeparated=!1,s.mustUseProperty=!1,s.defined=!1;function u(c,d){this.property=c,this.attribute=d}return fl}var tn={},Yu;function Ql(){if(Yu)return tn;Yu=1;var s=0;tn.boolean=u(),tn.booleanish=u(),tn.overloadedBoolean=u(),tn.number=u(),tn.spaceSeparated=u(),tn.commaSeparated=u(),tn.commaOrSpaceSeparated=u();function u(){return Math.pow(2,++s)}return tn}var ml,Qu;function Dd(){if(Qu)return ml;Qu=1;var s=Od(),u=Ql();ml=v,v.prototype=new s,v.prototype.defined=!0;var c=["boolean","booleanish","overloadedBoolean","number","commaSeparated","spaceSeparated","commaOrSpaceSeparated"],d=c.length;function v(k,y,R,Y){var O=-1,E;for(w(this,"space",Y),s.call(this,k,y);++O<d;)E=c[O],w(this,E,(R&u[E])===u[E])}function w(k,y,R){R&&(k[y]=R)}return ml}var gl,Xu;function so(){if(Xu)return gl;Xu=1;var s=Yl(),u=Id(),c=Dd();gl=d;function d(v){var w=v.space,k=v.mustUseProperty||[],y=v.attributes||{},R=v.properties,Y=v.transform,O={},E={},B,V;for(B in R)V=new c(B,Y(y,B),R[B],w),k.indexOf(B)!==-1&&(V.mustUseProperty=!0),O[B]=V,E[s(B)]=B,E[s(V.attribute)]=B;return new u(O,E,w)}return gl}var yl,Ju;function kf(){if(Ju)return yl;Ju=1;var s=so();yl=s({space:"xlink",transform:u,properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}});function u(c,d){return"xlink:"+d.slice(5).toLowerCase()}return yl}var xl,Zu;function Af(){if(Zu)return xl;Zu=1;var s=so();xl=s({space:"xml",transform:u,properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function u(c,d){return"xml:"+d.slice(3).toLowerCase()}return xl}var vl,ed;function Sf(){if(ed)return vl;ed=1,vl=s;function s(u,c){return c in u?u[c]:c}return vl}var _l,td;function Fd(){if(td)return _l;td=1;var s=Sf();_l=u;function u(c,d){return s(c,d.toLowerCase())}return _l}var jl,nd;function bf(){if(nd)return jl;nd=1;var s=so(),u=Fd();return jl=s({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:u,properties:{xmlns:null,xmlnsXLink:null}}),jl}var wl,rd;function Nf(){if(rd)return wl;rd=1;var s=Ql(),u=so(),c=s.booleanish,d=s.number,v=s.spaceSeparated;wl=u({transform:w,properties:{ariaActiveDescendant:null,ariaAtomic:c,ariaAutoComplete:null,ariaBusy:c,ariaChecked:c,ariaColCount:d,ariaColIndex:d,ariaColSpan:d,ariaControls:v,ariaCurrent:null,ariaDescribedBy:v,ariaDetails:null,ariaDisabled:c,ariaDropEffect:v,ariaErrorMessage:null,ariaExpanded:c,ariaFlowTo:v,ariaGrabbed:c,ariaHasPopup:null,ariaHidden:c,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:v,ariaLevel:d,ariaLive:null,ariaModal:c,ariaMultiLine:c,ariaMultiSelectable:c,ariaOrientation:null,ariaOwns:v,ariaPlaceholder:null,ariaPosInSet:d,ariaPressed:c,ariaReadOnly:c,ariaRelevant:null,ariaRequired:c,ariaRoleDescription:v,ariaRowCount:d,ariaRowIndex:d,ariaRowSpan:d,ariaSelected:c,ariaSetSize:d,ariaSort:null,ariaValueMax:d,ariaValueMin:d,ariaValueNow:d,ariaValueText:null,role:null}});function w(k,y){return y==="role"?y:"aria-"+y.slice(4).toLowerCase()}return wl}var Cl,od;function Pf(){if(od)return Cl;od=1;var s=Ql(),u=so(),c=Fd(),d=s.boolean,v=s.overloadedBoolean,w=s.booleanish,k=s.number,y=s.spaceSeparated,R=s.commaSeparated;return Cl=u({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:c,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:R,acceptCharset:y,accessKey:y,action:null,allow:null,allowFullScreen:d,allowPaymentRequest:d,allowUserMedia:d,alt:null,as:null,async:d,autoCapitalize:null,autoComplete:y,autoFocus:d,autoPlay:d,capture:d,charSet:null,checked:d,cite:null,className:y,cols:k,colSpan:null,content:null,contentEditable:w,controls:d,controlsList:y,coords:k|R,crossOrigin:null,data:null,dateTime:null,decoding:null,default:d,defer:d,dir:null,dirName:null,disabled:d,download:v,draggable:w,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:d,formTarget:null,headers:y,height:k,hidden:d,high:k,href:null,hrefLang:null,htmlFor:y,httpEquiv:y,id:null,imageSizes:null,imageSrcSet:R,inputMode:null,integrity:null,is:null,isMap:d,itemId:null,itemProp:y,itemRef:y,itemScope:d,itemType:y,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:d,low:k,manifest:null,max:null,maxLength:k,media:null,method:null,min:null,minLength:k,multiple:d,muted:d,name:null,nonce:null,noModule:d,noValidate:d,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextMenu:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:d,optimum:k,pattern:null,ping:y,placeholder:null,playsInline:d,poster:null,preload:null,readOnly:d,referrerPolicy:null,rel:y,required:d,reversed:d,rows:k,rowSpan:k,sandbox:y,scope:null,scoped:d,seamless:d,selected:d,shape:null,size:k,sizes:null,slot:null,span:k,spellCheck:w,src:null,srcDoc:null,srcLang:null,srcSet:R,start:k,step:null,style:null,tabIndex:k,target:null,title:null,translate:null,type:null,typeMustMatch:d,useMap:null,value:w,width:k,wrap:null,align:null,aLink:null,archive:y,axis:null,background:null,bgColor:null,border:k,borderColor:null,bottomMargin:k,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:d,declare:d,event:null,face:null,frame:null,frameBorder:null,hSpace:k,leftMargin:k,link:null,longDesc:null,lowSrc:null,marginHeight:k,marginWidth:k,noResize:d,noHref:d,noShade:d,noWrap:d,object:null,profile:null,prompt:null,rev:null,rightMargin:k,rules:null,scheme:null,scrolling:w,standby:null,summary:null,text:null,topMargin:k,valueType:null,version:null,vAlign:null,vLink:null,vSpace:k,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:d,disableRemotePlayback:d,prefix:null,property:null,results:k,security:null,unselectable:null}}),Cl}var kl,id;function Rf(){if(id)return kl;id=1;var s=Cf(),u=kf(),c=Af(),d=bf(),v=Nf(),w=Pf();return kl=s([c,u,d,v,w]),kl}var Al,sd;function Tf(){if(sd)return Al;sd=1;var s=Yl(),u=Dd(),c=Od(),d="data";Al=y;var v=/^data[-\w.:]+$/i,w=/-[a-z]/g,k=/[A-Z]/g;function y(B,V){var X=s(V),q=V,U=c;return X in B.normal?B.property[B.normal[X]]:(X.length>4&&X.slice(0,4)===d&&v.test(V)&&(V.charAt(4)==="-"?q=R(V):V=Y(V),U=u),new U(q,V))}function R(B){var V=B.slice(5).replace(w,E);return d+V.charAt(0).toUpperCase()+V.slice(1)}function Y(B){var V=B.slice(4);return w.test(V)?B:(V=V.replace(k,O),V.charAt(0)!=="-"&&(V="-"+V),d+V)}function O(B){return"-"+B.toLowerCase()}function E(B){return B.charAt(1).toUpperCase()}return Al}var Sl,ld;function Ef(){if(ld)return Sl;ld=1,Sl=u;var s=/[#.]/g;function u(c,d){for(var v=c||"",w=d||"div",k={},y=0,R,Y,O;y<v.length;)s.lastIndex=y,O=s.exec(v),R=v.slice(y,O?O.index:v.length),R&&(Y?Y==="#"?k.id=R:k.className?k.className.push(R):k.className=[R]:w=R,y+=R.length),O&&(Y=O[0],y++);return{type:"element",tagName:w,properties:k,children:[]}}return Sl}var yi={},ad;function Lf(){if(ad)return yi;ad=1,yi.parse=d,yi.stringify=v;var s="",u=" ",c=/[ \t\n\r\f]+/g;function d(w){var k=String(w||s).trim();return k===s?[]:k.split(c)}function v(w){return w.join(u).trim()}return yi}var xi={},cd;function Mf(){if(cd)return xi;cd=1,xi.parse=d,xi.stringify=v;var s=",",u=" ",c="";function d(w){for(var k=[],y=String(w||c),R=y.indexOf(s),Y=0,O=!1,E;!O;)R===-1&&(R=y.length,O=!0),E=y.slice(Y,R).trim(),(E||!O)&&k.push(E),Y=R+1,R=y.indexOf(s,Y);return k}function v(w,k){var y=k||{},R=y.padLeft===!1?c:u,Y=y.padRight?u:c;return w[w.length-1]===c&&(w=w.concat(c)),w.join(Y+s+R).trim()}return xi}var bl,ud;function If(){if(ud)return bl;ud=1;var s=Tf(),u=Yl(),c=Ef(),d=Lf().parse,v=Mf().parse;bl=k;var w={}.hasOwnProperty;function k(X,q,U){var ie=U?V(U):null;return b;function b(T,P){var g=c(T,q),N=Array.prototype.slice.call(arguments,2),H=g.tagName.toLowerCase(),L;if(g.tagName=ie&&w.call(ie,H)?ie[H]:H,P&&y(P,g)&&(N.unshift(P),P=null),P)for(L in P)A(g.properties,L,P[L]);return Y(g.children,N),g.tagName==="template"&&(g.content={type:"root",children:g.children},g.children=[]),g}function A(T,P,g){var N,H,L;g==null||g!==g||(N=s(X,P),H=N.property,L=g,typeof L=="string"&&(N.spaceSeparated?L=d(L):N.commaSeparated?L=v(L):N.commaOrSpaceSeparated&&(L=d(v(L).join(" ")))),H==="style"&&typeof g!="string"&&(L=B(L)),H==="className"&&T.className&&(L=T.className.concat(L)),T[H]=O(N,H,L))}}function y(X,q){return typeof X=="string"||"length"in X||R(q.tagName,X)}function R(X,q){var U=q.type;return X==="input"||!U||typeof U!="string"?!1:typeof q.children=="object"&&"length"in q.children?!0:(U=U.toLowerCase(),X==="button"?U!=="menu"&&U!=="submit"&&U!=="reset"&&U!=="button":"value"in q)}function Y(X,q){var U,ie;if(typeof q=="string"||typeof q=="number"){X.push({type:"text",value:String(q)});return}if(typeof q=="object"&&"length"in q){for(U=-1,ie=q.length;++U<ie;)Y(X,q[U]);return}if(typeof q!="object"||!("type"in q))throw new Error("Expected node, nodes, or string, got `"+q+"`");X.push(q)}function O(X,q,U){var ie,b,A;if(typeof U!="object"||!("length"in U))return E(X,q,U);for(b=U.length,ie=-1,A=[];++ie<b;)A[ie]=E(X,q,U[ie]);return A}function E(X,q,U){var ie=U;return X.number||X.positiveNumber?!isNaN(ie)&&ie!==""&&(ie=Number(ie)):(X.boolean||X.overloadedBoolean)&&typeof ie=="string"&&(ie===""||u(U)===u(q))&&(ie=!0),ie}function B(X){var q=[],U;for(U in X)q.push([U,X[U]].join(": "));return q.join("; ")}function V(X){for(var q=X.length,U=-1,ie={},b;++U<q;)b=X[U],ie[b.toLowerCase()]=b;return ie}return bl}var Nl,dd;function Of(){if(dd)return Nl;dd=1;var s=Rf(),u=If(),c=u(s,"div");return c.displayName="html",Nl=c,Nl}var Pl,hd;function Df(){return hd||(hd=1,Pl=Of()),Pl}const Ff="Æ",zf="&",Gf="Á",Bf="Â",Uf="À",Hf="Å",qf="Ã",$f="Ä",Wf="©",Vf="Ç",Kf="Ð",Yf="É",Qf="Ê",Xf="È",Jf="Ë",Zf=">",em="Í",tm="Î",nm="Ì",rm="Ï",om="<",im="Ñ",sm="Ó",lm="Ô",am="Ò",cm="Ø",um="Õ",dm="Ö",hm='"',pm="®",fm="Þ",mm="Ú",gm="Û",ym="Ù",xm="Ü",vm="Ý",_m="á",jm="â",wm="´",Cm="æ",km="à",Am="&",Sm="å",bm="ã",Nm="ä",Pm="¦",Rm="ç",Tm="¸",Em="¢",Lm="©",Mm="¤",Im="°",Om="÷",Dm="é",Fm="ê",zm="è",Gm="ð",Bm="ë",Um="½",Hm="¼",qm="¾",$m=">",Wm="í",Vm="î",Km="¡",Ym="ì",Qm="¿",Xm="ï",Jm="«",Zm="<",eg="¯",tg="µ",ng="·",rg=" ",og="¬",ig="ñ",sg="ó",lg="ô",ag="ò",cg="ª",ug="º",dg="ø",hg="õ",pg="ö",fg="¶",mg="±",gg="£",yg='"',xg="»",vg="®",_g="§",jg="­",wg="¹",Cg="²",kg="³",Ag="ß",Sg="þ",bg="×",Ng="ú",Pg="û",Rg="ù",Tg="¨",Eg="ü",Lg="ý",Mg="¥",Ig="ÿ",Og={AElig:Ff,AMP:zf,Aacute:Gf,Acirc:Bf,Agrave:Uf,Aring:Hf,Atilde:qf,Auml:$f,COPY:Wf,Ccedil:Vf,ETH:Kf,Eacute:Yf,Ecirc:Qf,Egrave:Xf,Euml:Jf,GT:Zf,Iacute:em,Icirc:tm,Igrave:nm,Iuml:rm,LT:om,Ntilde:im,Oacute:sm,Ocirc:lm,Ograve:am,Oslash:cm,Otilde:um,Ouml:dm,QUOT:hm,REG:pm,THORN:fm,Uacute:mm,Ucirc:gm,Ugrave:ym,Uuml:xm,Yacute:vm,aacute:_m,acirc:jm,acute:wm,aelig:Cm,agrave:km,amp:Am,aring:Sm,atilde:bm,auml:Nm,brvbar:Pm,ccedil:Rm,cedil:Tm,cent:Em,copy:Lm,curren:Mm,deg:Im,divide:Om,eacute:Dm,ecirc:Fm,egrave:zm,eth:Gm,euml:Bm,frac12:Um,frac14:Hm,frac34:qm,gt:$m,iacute:Wm,icirc:Vm,iexcl:Km,igrave:Ym,iquest:Qm,iuml:Xm,laquo:Jm,lt:Zm,macr:eg,micro:tg,middot:ng,nbsp:rg,not:og,ntilde:ig,oacute:sg,ocirc:lg,ograve:ag,ordf:cg,ordm:ug,oslash:dg,otilde:hg,ouml:pg,para:fg,plusmn:mg,pound:gg,quot:yg,raquo:xg,reg:vg,sect:_g,shy:jg,sup1:wg,sup2:Cg,sup3:kg,szlig:Ag,thorn:Sg,times:bg,uacute:Ng,ucirc:Pg,ugrave:Rg,uml:Tg,uuml:Eg,yacute:Lg,yen:Mg,yuml:Ig},Dg={0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"};var Rl,pd;function zd(){if(pd)return Rl;pd=1,Rl=s;function s(u){var c=typeof u=="string"?u.charCodeAt(0):u;return c>=48&&c<=57}return Rl}var Tl,fd;function Fg(){if(fd)return Tl;fd=1,Tl=s;function s(u){var c=typeof u=="string"?u.charCodeAt(0):u;return c>=97&&c<=102||c>=65&&c<=70||c>=48&&c<=57}return Tl}var El,md;function zg(){if(md)return El;md=1,El=s;function s(u){var c=typeof u=="string"?u.charCodeAt(0):u;return c>=97&&c<=122||c>=65&&c<=90}return El}var Ll,gd;function Gg(){if(gd)return Ll;gd=1;var s=zg(),u=zd();Ll=c;function c(d){return s(d)||u(d)}return Ll}var Ml,yd;function Bg(){if(yd)return Ml;yd=1;var s,u=59;Ml=c;function c(d){var v="&"+d+";",w;return s=s||document.createElement("i"),s.innerHTML=v,w=s.textContent,w.charCodeAt(w.length-1)===u&&d!=="semi"||w===v?!1:w}return Ml}var Il,xd;function Ug(){if(xd)return Il;xd=1;var s=Og,u=Dg,c=zd(),d=Fg(),v=Gg(),w=Bg();Il=K;var k={}.hasOwnProperty,y=String.fromCharCode,R=Function.prototype,Y={warning:null,reference:null,text:null,warningContext:null,referenceContext:null,textContext:null,position:{},additional:null,attribute:!1,nonTerminated:!0},O=9,E=10,B=12,V=32,X=38,q=59,U=60,ie=61,b=35,A=88,T=120,P=65533,g="named",N="hexadecimal",H="decimal",L={};L[N]=16,L[H]=10;var le={};le[g]=v,le[H]=c,le[N]=d;var se=1,me=2,ve=3,Ae=4,Ie=5,je=6,pe=7,M={};M[se]="Named character references must be terminated by a semicolon",M[me]="Numeric character references must be terminated by a semicolon",M[ve]="Named character references cannot be empty",M[Ae]="Numeric character references cannot be empty",M[Ie]="Named character references must be known",M[je]="Numeric character references cannot be disallowed",M[pe]="Numeric character references cannot be outside the permissible Unicode range";function K($,J){var ne={},ae,ue;J||(J={});for(ue in Y)ae=J[ue],ne[ue]=ae??Y[ue];return(ne.position.indent||ne.position.start)&&(ne.indent=ne.position.indent||[],ne.position=ne.position.start),G($,ne)}function G($,J){var ne=J.additional,ae=J.nonTerminated,ue=J.text,de=J.reference,ge=J.warning,Ee=J.textContext,lt=J.referenceContext,Gn=J.warningContext,ft=J.position,yr=J.indent||[],Bn=$.length,wt=0,Un=-1,Et=ft.column||1,Hn=ft.line||1,at="",Lt=[],Mt,qn,It,We,Ct,Pe,we,ct,Ot,qt,$t,nn,Dt,kt,$n,Wt,rn,Ze,Re;for(typeof ne=="string"&&(ne=ne.charCodeAt(0)),Wt=mt(),ct=ge?on:R,wt--,Bn++;++wt<Bn;)if(Ct===E&&(Et=yr[Un]||1),Ct=$.charCodeAt(wt),Ct===X){if(we=$.charCodeAt(wt+1),we===O||we===E||we===B||we===V||we===X||we===U||we!==we||ne&&we===ne){at+=y(Ct),Et++;continue}for(Dt=wt+1,nn=Dt,Re=Dt,we===b?(Re=++nn,we=$.charCodeAt(Re),we===A||we===T?(kt=N,Re=++nn):kt=H):kt=g,Mt="",$t="",We="",$n=le[kt],Re--;++Re<Bn&&(we=$.charCodeAt(Re),!!$n(we));)We+=y(we),kt===g&&k.call(s,We)&&(Mt=We,$t=s[We]);It=$.charCodeAt(Re)===q,It&&(Re++,qn=kt===g?w(We):!1,qn&&(Mt=We,$t=qn)),Ze=1+Re-Dt,!It&&!ae||(We?kt===g?(It&&!$t?ct(Ie,1):(Mt!==We&&(Re=nn+Mt.length,Ze=1+Re-nn,It=!1),It||(Ot=Mt?se:ve,J.attribute?(we=$.charCodeAt(Re),we===ie?(ct(Ot,Ze),$t=null):v(we)?$t=null:ct(Ot,Ze)):ct(Ot,Ze))),Pe=$t):(It||ct(me,Ze),Pe=parseInt(We,L[kt]),m(Pe)?(ct(pe,Ze),Pe=y(P)):Pe in u?(ct(je,Ze),Pe=u[Pe]):(qt="",S(Pe)&&ct(je,Ze),Pe>65535&&(Pe-=65536,qt+=y(Pe>>>10|55296),Pe=56320|Pe&1023),Pe=qt+y(Pe))):kt!==g&&ct(Ae,Ze)),Pe?(xr(),Wt=mt(),wt=Re-1,Et+=Re-Dt+1,Lt.push(Pe),rn=mt(),rn.offset++,de&&de.call(lt,Pe,{start:Wt,end:rn},$.slice(Dt-1,Re)),Wt=rn):(We=$.slice(Dt-1,Re),at+=We,Et+=We.length,wt=Re-1)}else Ct===10&&(Hn++,Un++,Et=0),Ct===Ct?(at+=y(Ct),Et++):xr();return Lt.join("");function mt(){return{line:Hn,column:Et,offset:wt+(ft.offset||0)}}function on(vr,_r){var Wn=mt();Wn.column+=_r,Wn.offset+=_r,ge.call(Gn,M[vr],Wn,vr)}function xr(){at&&(Lt.push(at),ue&&ue.call(Ee,at,{start:Wt,end:mt()}),at="")}}function m($){return $>=55296&&$<=57343||$>1114111}function S($){return $>=1&&$<=8||$===11||$>=13&&$<=31||$>=127&&$<=159||$>=64976&&$<=65007||($&65535)===65535||($&65535)===65534}return Il}var Ol={exports:{}},vd;function Hg(){return vd||(vd=1,(function(s){var u=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var c=(function(d){var v=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,w=0,k={},y={manual:d.Prism&&d.Prism.manual,disableWorkerMessageHandler:d.Prism&&d.Prism.disableWorkerMessageHandler,util:{encode:function b(A){return A instanceof R?new R(A.type,b(A.content),A.alias):Array.isArray(A)?A.map(b):A.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(b){return Object.prototype.toString.call(b).slice(8,-1)},objId:function(b){return b.__id||Object.defineProperty(b,"__id",{value:++w}),b.__id},clone:function b(A,T){T=T||{};var P,g;switch(y.util.type(A)){case"Object":if(g=y.util.objId(A),T[g])return T[g];P={},T[g]=P;for(var N in A)A.hasOwnProperty(N)&&(P[N]=b(A[N],T));return P;case"Array":return g=y.util.objId(A),T[g]?T[g]:(P=[],T[g]=P,A.forEach(function(H,L){P[L]=b(H,T)}),P);default:return A}},getLanguage:function(b){for(;b;){var A=v.exec(b.className);if(A)return A[1].toLowerCase();b=b.parentElement}return"none"},setLanguage:function(b,A){b.className=b.className.replace(RegExp(v,"gi"),""),b.classList.add("language-"+A)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(P){var b=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(P.stack)||[])[1];if(b){var A=document.getElementsByTagName("script");for(var T in A)if(A[T].src==b)return A[T]}return null}},isActive:function(b,A,T){for(var P="no-"+A;b;){var g=b.classList;if(g.contains(A))return!0;if(g.contains(P))return!1;b=b.parentElement}return!!T}},languages:{plain:k,plaintext:k,text:k,txt:k,extend:function(b,A){var T=y.util.clone(y.languages[b]);for(var P in A)T[P]=A[P];return T},insertBefore:function(b,A,T,P){P=P||y.languages;var g=P[b],N={};for(var H in g)if(g.hasOwnProperty(H)){if(H==A)for(var L in T)T.hasOwnProperty(L)&&(N[L]=T[L]);T.hasOwnProperty(H)||(N[H]=g[H])}var le=P[b];return P[b]=N,y.languages.DFS(y.languages,function(se,me){me===le&&se!=b&&(this[se]=N)}),N},DFS:function b(A,T,P,g){g=g||{};var N=y.util.objId;for(var H in A)if(A.hasOwnProperty(H)){T.call(A,H,A[H],P||H);var L=A[H],le=y.util.type(L);le==="Object"&&!g[N(L)]?(g[N(L)]=!0,b(L,T,null,g)):le==="Array"&&!g[N(L)]&&(g[N(L)]=!0,b(L,T,H,g))}}},plugins:{},highlightAll:function(b,A){y.highlightAllUnder(document,b,A)},highlightAllUnder:function(b,A,T){var P={callback:T,container:b,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};y.hooks.run("before-highlightall",P),P.elements=Array.prototype.slice.apply(P.container.querySelectorAll(P.selector)),y.hooks.run("before-all-elements-highlight",P);for(var g=0,N;N=P.elements[g++];)y.highlightElement(N,A===!0,P.callback)},highlightElement:function(b,A,T){var P=y.util.getLanguage(b),g=y.languages[P];y.util.setLanguage(b,P);var N=b.parentElement;N&&N.nodeName.toLowerCase()==="pre"&&y.util.setLanguage(N,P);var H=b.textContent,L={element:b,language:P,grammar:g,code:H};function le(me){L.highlightedCode=me,y.hooks.run("before-insert",L),L.element.innerHTML=L.highlightedCode,y.hooks.run("after-highlight",L),y.hooks.run("complete",L),T&&T.call(L.element)}if(y.hooks.run("before-sanity-check",L),N=L.element.parentElement,N&&N.nodeName.toLowerCase()==="pre"&&!N.hasAttribute("tabindex")&&N.setAttribute("tabindex","0"),!L.code){y.hooks.run("complete",L),T&&T.call(L.element);return}if(y.hooks.run("before-highlight",L),!L.grammar){le(y.util.encode(L.code));return}if(A&&d.Worker){var se=new Worker(y.filename);se.onmessage=function(me){le(me.data)},se.postMessage(JSON.stringify({language:L.language,code:L.code,immediateClose:!0}))}else le(y.highlight(L.code,L.grammar,L.language))},highlight:function(b,A,T){var P={code:b,grammar:A,language:T};if(y.hooks.run("before-tokenize",P),!P.grammar)throw new Error('The language "'+P.language+'" has no grammar.');return P.tokens=y.tokenize(P.code,P.grammar),y.hooks.run("after-tokenize",P),R.stringify(y.util.encode(P.tokens),P.language)},tokenize:function(b,A){var T=A.rest;if(T){for(var P in T)A[P]=T[P];delete A.rest}var g=new E;return B(g,g.head,b),O(b,g,A,g.head,0),X(g)},hooks:{all:{},add:function(b,A){var T=y.hooks.all;T[b]=T[b]||[],T[b].push(A)},run:function(b,A){var T=y.hooks.all[b];if(!(!T||!T.length))for(var P=0,g;g=T[P++];)g(A)}},Token:R};d.Prism=y;function R(b,A,T,P){this.type=b,this.content=A,this.alias=T,this.length=(P||"").length|0}R.stringify=function b(A,T){if(typeof A=="string")return A;if(Array.isArray(A)){var P="";return A.forEach(function(le){P+=b(le,T)}),P}var g={type:A.type,content:b(A.content,T),tag:"span",classes:["token",A.type],attributes:{},language:T},N=A.alias;N&&(Array.isArray(N)?Array.prototype.push.apply(g.classes,N):g.classes.push(N)),y.hooks.run("wrap",g);var H="";for(var L in g.attributes)H+=" "+L+'="'+(g.attributes[L]||"").replace(/"/g,"&quot;")+'"';return"<"+g.tag+' class="'+g.classes.join(" ")+'"'+H+">"+g.content+"</"+g.tag+">"};function Y(b,A,T,P){b.lastIndex=A;var g=b.exec(T);if(g&&P&&g[1]){var N=g[1].length;g.index+=N,g[0]=g[0].slice(N)}return g}function O(b,A,T,P,g,N){for(var H in T)if(!(!T.hasOwnProperty(H)||!T[H])){var L=T[H];L=Array.isArray(L)?L:[L];for(var le=0;le<L.length;++le){if(N&&N.cause==H+","+le)return;var se=L[le],me=se.inside,ve=!!se.lookbehind,Ae=!!se.greedy,Ie=se.alias;if(Ae&&!se.pattern.global){var je=se.pattern.toString().match(/[imsuy]*$/)[0];se.pattern=RegExp(se.pattern.source,je+"g")}for(var pe=se.pattern||se,M=P.next,K=g;M!==A.tail&&!(N&&K>=N.reach);K+=M.value.length,M=M.next){var G=M.value;if(A.length>b.length)return;if(!(G instanceof R)){var m=1,S;if(Ae){if(S=Y(pe,K,b,ve),!S||S.index>=b.length)break;var ae=S.index,$=S.index+S[0].length,J=K;for(J+=M.value.length;ae>=J;)M=M.next,J+=M.value.length;if(J-=M.value.length,K=J,M.value instanceof R)continue;for(var ne=M;ne!==A.tail&&(J<$||typeof ne.value=="string");ne=ne.next)m++,J+=ne.value.length;m--,G=b.slice(K,J),S.index-=K}else if(S=Y(pe,0,G,ve),!S)continue;var ae=S.index,ue=S[0],de=G.slice(0,ae),ge=G.slice(ae+ue.length),Ee=K+G.length;N&&Ee>N.reach&&(N.reach=Ee);var lt=M.prev;de&&(lt=B(A,lt,de),K+=de.length),V(A,lt,m);var Gn=new R(H,me?y.tokenize(ue,me):ue,Ie,ue);if(M=B(A,lt,Gn),ge&&B(A,M,ge),m>1){var ft={cause:H+","+le,reach:Ee};O(b,A,T,M.prev,K,ft),N&&ft.reach>N.reach&&(N.reach=ft.reach)}}}}}}function E(){var b={value:null,prev:null,next:null},A={value:null,prev:b,next:null};b.next=A,this.head=b,this.tail=A,this.length=0}function B(b,A,T){var P=A.next,g={value:T,prev:A,next:P};return A.next=g,P.prev=g,b.length++,g}function V(b,A,T){for(var P=A.next,g=0;g<T&&P!==b.tail;g++)P=P.next;A.next=P,P.prev=A,b.length-=g}function X(b){for(var A=[],T=b.head.next;T!==b.tail;)A.push(T.value),T=T.next;return A}if(!d.document)return d.addEventListener&&(y.disableWorkerMessageHandler||d.addEventListener("message",function(b){var A=JSON.parse(b.data),T=A.language,P=A.code,g=A.immediateClose;d.postMessage(y.highlight(P,y.languages[T],T)),g&&d.close()},!1)),y;var q=y.util.currentScript();q&&(y.filename=q.src,q.hasAttribute("data-manual")&&(y.manual=!0));function U(){y.manual||y.highlightAll()}if(!y.manual){var ie=document.readyState;ie==="loading"||ie==="interactive"&&q&&q.defer?document.addEventListener("DOMContentLoaded",U):window.requestAnimationFrame?window.requestAnimationFrame(U):window.setTimeout(U,16)}return y})(u);s.exports&&(s.exports=c),typeof _i<"u"&&(_i.Prism=c)})(Ol)),Ol.exports}var Dl,_d;function qg(){if(_d)return Dl;_d=1,Dl=s,s.displayName="markup",s.aliases=["html","mathml","svg","xml","ssml","atom","rss"];function s(u){u.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},u.languages.markup.tag.inside["attr-value"].inside.entity=u.languages.markup.entity,u.languages.markup.doctype.inside["internal-subset"].inside=u.languages.markup,u.hooks.add("wrap",function(c){c.type==="entity"&&(c.attributes.title=c.content.value.replace(/&amp;/,"&"))}),Object.defineProperty(u.languages.markup.tag,"addInlined",{value:function(d,v){var w={};w["language-"+v]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:u.languages[v]},w.cdata=/^<!\[CDATA\[|\]\]>$/i;var k={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:w}};k["language-"+v]={pattern:/[\s\S]+/,inside:u.languages[v]};var y={};y[d]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return d}),"i"),lookbehind:!0,greedy:!0,inside:k},u.languages.insertBefore("markup","cdata",y)}}),Object.defineProperty(u.languages.markup.tag,"addAttribute",{value:function(c,d){u.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+c+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[d,"language-"+d],inside:u.languages[d]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),u.languages.html=u.languages.markup,u.languages.mathml=u.languages.markup,u.languages.svg=u.languages.markup,u.languages.xml=u.languages.extend("markup",{}),u.languages.ssml=u.languages.xml,u.languages.atom=u.languages.xml,u.languages.rss=u.languages.xml}return Dl}var Fl,jd;function $g(){if(jd)return Fl;jd=1,Fl=s,s.displayName="css",s.aliases=[];function s(u){(function(c){var d=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;c.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+d.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+d.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+d.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:d,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},c.languages.css.atrule.inside.rest=c.languages.css;var v=c.languages.markup;v&&(v.tag.addInlined("style","css"),v.tag.addAttribute("style","css"))})(u)}return Fl}var zl,wd;function Wg(){if(wd)return zl;wd=1,zl=s,s.displayName="clike",s.aliases=[];function s(u){u.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/}}return zl}var Gl,Cd;function Vg(){if(Cd)return Gl;Cd=1,Gl=s,s.displayName="javascript",s.aliases=["js"];function s(u){u.languages.javascript=u.languages.extend("clike",{"class-name":[u.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),u.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,u.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:u.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:u.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:u.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:u.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:u.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),u.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:u.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),u.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),u.languages.markup&&(u.languages.markup.tag.addInlined("script","javascript"),u.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),u.languages.js=u.languages.javascript}return Gl}var Bl,kd;function Kg(){if(kd)return Bl;kd=1;var s=typeof globalThis=="object"?globalThis:typeof self=="object"?self:typeof window=="object"?window:typeof _i=="object"?_i:{},u=P();s.Prism={manual:!0,disableWorkerMessageHandler:!0};var c=Df(),d=Ug(),v=Hg(),w=qg(),k=$g(),y=Wg(),R=Vg();u();var Y={}.hasOwnProperty;function O(){}O.prototype=v;var E=new O;Bl=E,E.highlight=X,E.register=B,E.alias=V,E.registered=q,E.listLanguages=U,B(w),B(k),B(y),B(R),E.util.encode=A,E.Token.stringify=ie;function B(g){if(typeof g!="function"||!g.displayName)throw new Error("Expected `function` for `grammar`, got `"+g+"`");E.languages[g.displayName]===void 0&&g(E)}function V(g,N){var H=E.languages,L=g,le,se,me,ve;N&&(L={},L[g]=N);for(le in L)for(se=L[le],se=typeof se=="string"?[se]:se,me=se.length,ve=-1;++ve<me;)H[se[ve]]=H[le]}function X(g,N){var H=v.highlight,L;if(typeof g!="string")throw new Error("Expected `string` for `value`, got `"+g+"`");if(E.util.type(N)==="Object")L=N,N=null;else{if(typeof N!="string")throw new Error("Expected `string` for `name`, got `"+N+"`");if(Y.call(E.languages,N))L=E.languages[N];else throw new Error("Unknown language: `"+N+"` is not registered")}return H.call(this,g,L,N)}function q(g){if(typeof g!="string")throw new Error("Expected `string` for `language`, got `"+g+"`");return Y.call(E.languages,g)}function U(){var g=E.languages,N=[],H;for(H in g)Y.call(g,H)&&typeof g[H]=="object"&&N.push(H);return N}function ie(g,N,H){var L;return typeof g=="string"?{type:"text",value:g}:E.util.type(g)==="Array"?b(g,N):(L={type:g.type,content:E.Token.stringify(g.content,N,H),tag:"span",classes:["token",g.type],attributes:{},language:N,parent:H},g.alias&&(L.classes=L.classes.concat(g.alias)),E.hooks.run("wrap",L),c(L.tag+"."+L.classes.join("."),T(L.attributes),L.content))}function b(g,N){for(var H=[],L=g.length,le=-1,se;++le<L;)se=g[le],se!==""&&se!==null&&se!==void 0&&H.push(se);for(le=-1,L=H.length;++le<L;)se=H[le],H[le]=E.Token.stringify(se,N,H);return H}function A(g){return g}function T(g){var N;for(N in g)g[N]=d(g[N]);return g}function P(){var g="Prism"in s,N=g?s.Prism:void 0;return H;function H(){g?s.Prism=N:delete s.Prism,g=void 0,N=void 0}}return Bl}var Yg=Kg();const Xl=io(Yg);var gr=jf(Xl,{});gr.registerLanguage=function(s,u){return Xl.register(u)};gr.alias=function(s,u){return Xl.alias(s,u)};var Ul,Ad;function Qg(){if(Ad)return Ul;Ad=1,Ul=s,s.displayName="bash",s.aliases=["shell"];function s(u){(function(c){var d="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",v={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},w={bash:v,environment:{pattern:RegExp("\\$"+d),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+d),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};c.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+d),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:w},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:v}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:w},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:w.entity}}],environment:{pattern:RegExp("\\$?"+d),alias:"constant"},variable:w.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},v.inside=c.languages.bash;for(var k=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],y=w.variable[1].inside,R=0;R<k.length;R++)y[k[R]]=c.languages.bash[k[R]];c.languages.shell=c.languages.bash})(u)}return Ul}var Hl,Sd;function Xg(){if(Sd)return Hl;Sd=1,Hl=s,s.displayName="json",s.aliases=["webmanifest"];function s(u){u.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},u.languages.webmanifest=u.languages.json}return Hl}var ql,bd;function Jg(){if(bd)return ql;bd=1,ql=s,s.displayName="python",s.aliases=["py"];function s(u){u.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},u.languages.python["string-interpolation"].inside.interpolation.inside.rest=u.languages.python,u.languages.py=u.languages.python}return ql}const Zg={'pre[class*="language-"]':{color:"#d4d4d4",fontSize:"13px",textShadow:"none",fontFamily:'Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace',direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",background:"#1e1e1e"},'code[class*="language-"]':{color:"#d4d4d4",fontSize:"13px",textShadow:"none",fontFamily:'Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace',direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]::selection':{textShadow:"none",background:"#264F78"},'code[class*="language-"]::selection':{textShadow:"none",background:"#264F78"},'pre[class*="language-"] *::selection':{textShadow:"none",background:"#264F78"},'code[class*="language-"] *::selection':{textShadow:"none",background:"#264F78"},':not(pre) > code[class*="language-"]':{padding:".1em .3em",borderRadius:".3em",color:"#db4c69",background:"#1e1e1e"},".namespace":{Opacity:".7"},"doctype.doctype-tag":{color:"#569CD6"},"doctype.name":{color:"#9cdcfe"},comment:{color:"#6a9955"},prolog:{color:"#6a9955"},punctuation:{color:"#d4d4d4"},".language-html .language-css .token.punctuation":{color:"#d4d4d4"},".language-html .language-javascript .token.punctuation":{color:"#d4d4d4"},property:{color:"#9cdcfe"},tag:{color:"#569cd6"},boolean:{color:"#569cd6"},number:{color:"#b5cea8"},constant:{color:"#9cdcfe"},symbol:{color:"#b5cea8"},inserted:{color:"#b5cea8"},unit:{color:"#b5cea8"},selector:{color:"#d7ba7d"},"attr-name":{color:"#9cdcfe"},string:{color:"#ce9178"},char:{color:"#ce9178"},builtin:{color:"#ce9178"},deleted:{color:"#ce9178"},".language-css .token.string.url":{textDecoration:"underline"},operator:{color:"#d4d4d4"},entity:{color:"#569cd6"},"operator.arrow":{color:"#569CD6"},atrule:{color:"#ce9178"},"atrule.rule":{color:"#c586c0"},"atrule.url":{color:"#9cdcfe"},"atrule.url.function":{color:"#dcdcaa"},"atrule.url.punctuation":{color:"#d4d4d4"},keyword:{color:"#569CD6"},"keyword.module":{color:"#c586c0"},"keyword.control-flow":{color:"#c586c0"},function:{color:"#dcdcaa"},"function.maybe-class-name":{color:"#dcdcaa"},regex:{color:"#d16969"},important:{color:"#569cd6"},italic:{fontStyle:"italic"},"class-name":{color:"#4ec9b0"},"maybe-class-name":{color:"#4ec9b0"},console:{color:"#9cdcfe"},parameter:{color:"#9cdcfe"},interpolation:{color:"#9cdcfe"},"punctuation.interpolation-punctuation":{color:"#569cd6"},variable:{color:"#9cdcfe"},"imports.maybe-class-name":{color:"#9cdcfe"},"exports.maybe-class-name":{color:"#9cdcfe"},escape:{color:"#d7ba7d"},"tag.punctuation":{color:"#808080"},cdata:{color:"#808080"},"attr-value":{color:"#ce9178"},"attr-value.punctuation":{color:"#ce9178"},"attr-value.punctuation.attr-equals":{color:"#d4d4d4"},namespace:{color:"#4ec9b0"},'pre[class*="language-javascript"]':{color:"#9cdcfe"},'code[class*="language-javascript"]':{color:"#9cdcfe"},'pre[class*="language-jsx"]':{color:"#9cdcfe"},'code[class*="language-jsx"]':{color:"#9cdcfe"},'pre[class*="language-typescript"]':{color:"#9cdcfe"},'code[class*="language-typescript"]':{color:"#9cdcfe"},'pre[class*="language-tsx"]':{color:"#9cdcfe"},'code[class*="language-tsx"]':{color:"#9cdcfe"},'pre[class*="language-css"]':{color:"#ce9178"},'code[class*="language-css"]':{color:"#ce9178"},'pre[class*="language-html"]':{color:"#d4d4d4"},'code[class*="language-html"]':{color:"#d4d4d4"},".language-regex .token.anchor":{color:"#dcdcaa"},".language-html .token.punctuation":{color:"#808080"},'pre[class*="language-"] > code[class*="language-"]':{position:"relative",zIndex:"1"},".line-highlight.line-highlight":{background:"#f7ebc6",boxShadow:"inset 5px 0 0 #f7d87c",zIndex:"0"}};var ey=Jg();const ty=io(ey);var ny=Qg();const ry=io(ny);var oy=Xg();const iy=io(oy);gr.registerLanguage("python",ty);gr.registerLanguage("bash",ry);gr.registerLanguage("json",iy);const sy={background:"#1e293b",border:"1px solid #334155",borderRadius:"0.75rem",padding:"1.5rem",margin:"0",fontSize:"0.9rem",lineHeight:"1.6",overflowX:"auto"};function _({language:s="python",children:u}){const[c,d]=ze.useState(!1),v=()=>{navigator.clipboard.writeText(String(u).trim()).then(()=>{d(!0),setTimeout(()=>d(!1),2e3)})};return n.jsxs("div",{className:"code-block-wrapper",children:[n.jsx("button",{className:`copy-btn ${c?"copied":""}`,onClick:v,"aria-label":"Copy code",children:c?"Copied!":"Copy"}),n.jsx(gr,{language:s,style:Zg,customStyle:sy,children:String(u).trim()})]})}function Ge({children:s}){return n.jsx("div",{className:"note",children:s})}function ly(){return n.jsxs(n.Fragment,{children:[n.jsx("h2",{id:"pip-install",children:"Installation"}),n.jsx("p",{children:"PyBotchi requires Python 3.12 or higher. Install using pip:"}),n.jsx(_,{language:"bash",children:"pip install pybotchi"}),n.jsx("h3",{children:"Optional Dependencies"}),n.jsx("p",{children:"For additional features, install optional dependencies:"}),n.jsx(_,{language:"bash",children:`# With grpc support
pip install pybotchi[grpc]

# With mcp support
pip install pybotchi[mcp]

# With both
pip install pybotchi[grpc,mcp]`}),n.jsx("h3",{children:"From Source"}),n.jsx("p",{children:"To install the latest development version:"}),n.jsx(_,{language:"bash",children:`git clone https://github.com/amadolid/pybotchi.git
cd pybotchi
pip install -e .
# pip install -e .[grpc]
# pip install -e .[mcp]
# pip install -e .[grpc,mcp]`}),n.jsxs(Ge,{children:[n.jsx("strong",{children:"Note:"})," It's recommended to use a virtual environment to avoid dependency conflicts."]})]})}function ay(){return n.jsxs(n.Fragment,{children:[n.jsx("h2",{id:"your-first-agent",children:"Quick Start"}),n.jsx("p",{children:"Get up and running with PyBotchi in minutes. Here's a simple example to create your first agent:"}),n.jsx("h3",{children:"Declare your base LLM"}),n.jsxs(Ge,{children:[n.jsx("strong",{children:"Note:"})," By default, you can use classes that extend LangChain's BaseChatModel, such as AzureChatOpenAI. However, if you want to use a different AI library or framework for advanced tasks, you will likely need to customize the Context and Action classes to integrate those tools.",n.jsx("br",{})]}),n.jsx("h5",{style:{color:"var(--text-muted)",marginBottom:"1rem"},children:"This base LLM instance will be used for tool-selection (or child-selection)."}),n.jsx(_,{language:"python",children:`from langchain_openai import AzureChatOpenAI

from pybotchi import LLM

LLM.add(
    base=AzureChatOpenAI(
        api_key="{{CHAT_KEY}}",
        azure_endpoint="{{CHAT_ENDPOINT}}",
        azure_deployment="{{CHAT_DEPLOYMENT}}",
        model="{{CHAT_MODEL}}",
        api_version="{{CHAT_VERSION}}",
        temperature={{CHAT_TEMPERATURE}},
        stream_usage=True,
    )
)`}),n.jsx("h3",{children:"Declare your master agent"}),n.jsx("p",{children:"Get up and running with PyBotchi in minutes. Here's a simple example to create your first agent:"}),n.jsx(_,{language:"python",children:`from pybotchi import Action, ActionReturn, Context

from pydantic import Field

# previous imports and code ...

class GeneralChat(Action):
    """Casual Generic Chat."""

    class AnswerMathProlem(Action):
        """Answer math problem."""

        answer: str = Field(description="The answer to the math problem")

        async def pre(self, context: Context) -> ActionReturn:
            """Execute pre process."""
            await context.add_response(self, self.answer)
            return None


    class Translate(Action):
        """Translate query to requested language."""

        translation: str = Field(description="The translation of the query")

        async def pre(self, context: Context) -> ActionReturn:
            """Execute pre process."""
            await context.add_response(self, self.translation)
            return None`}),n.jsx("h3",{children:"Initialize your context"}),n.jsxs(Ge,{children:[n.jsx("strong",{children:"Note:"})," The system prompt is required, even if it is empty. This ensures more secure prompting and provides a placeholder for your custom system prompt."]}),n.jsx(_,{language:"python",children:`from pybotchi import Context

context = Context(
    prompts=[
        {
            "role": "system",
            "content": """
You're an AI the can solve math problem and translate any request.

Your primary focus is to prioritize tool usage and efficiently handle multiple tool calls, including invoking the same tool multiple times if necessary.
Ensure that all relevant tools are effectively utilized and properly sequenced to accurately and comprehensively address the user's inquiry.
""",
        },
        {
            "role": "user",
            "content": "4 x 4 and explain your answer in filipino",
        },
    ],
)`}),n.jsx("h3",{children:"Run your master agent"}),n.jsx("p",{children:"Start your agent using asyncio."}),n.jsx(_,{language:"python",children:`from asyncio import run
from json import dumps

from pybotchi import graph

# previous imports and code ...

async def main():
    action, _ = await context.start(GeneralChat)
    print(dumps(context.prompts, indent=4))
    print(dumps(action.serialize(), indent=4))

    general_chat_graph = await graph(GeneralChat)
    print(general_chat_graph.flowchart())

run(main())`}),n.jsx("p",{children:"Result:"}),n.jsx(_,{language:"bash",children:`[
    {
        "role": "system",
        "content": "You're an AI the can solve math problem and translate any request.\\n\\nYour primary focus is to prioritize tool usage and efficiently handle multiple tool calls, including invoking the same tool multiple times if necessary.\\nEnsure that all relevant tools are effectively utilized and properly sequenced to accurately and comprehensively address the user's inquiry."
    },
    {
        "role": "user",
        "content": "4 x 4 and explain your answer in filipino"
    },
    {
        "content": "",
        "role": "assistant",
        "tool_calls": [
            {
                "id": "call_ea7e65251a02464ba1c60d403748dae4",
                "function": {
                    "name": "AnswerMathProlem",
                    "arguments": "{\\"answer\\":\\"4 x 4\\"}"
                },
                "type": "function"
            }
        ]
    },
    ...
]
flowchart TD
__main__.GeneralChat.AnswerMathProlem[AnswerMathProlem]
__main__.GeneralChat.Translate[Translate]
__main__.GeneralChat{GeneralChat}
__main__.GeneralChat --> __main__.GeneralChat.Translate
__main__.GeneralChat --> __main__.GeneralChat.AnswerMathProlem
style __main__.GeneralChat fill:#4CAF50,color:#000000`}),n.jsx("h3",{children:"Mermaid-JS Flowchart"}),n.jsx("img",{className:"content-img",src:"assets/mermaid.png",alt:"mermaid.png"})]})}function cy(){return n.jsxs("div",{id:"how-it-works",children:[n.jsxs("div",{className:"section-header",children:[n.jsx("h1",{children:"How It Works"}),n.jsx("p",{className:"tagline",children:"Understanding the philosophy and architecture behind PyBotchi"})]}),n.jsxs("div",{className:"philosophy-section",children:[n.jsx("h2",{children:"Why PyBotchi Exists"}),n.jsxs("div",{className:"philosophy-content",children:[n.jsxs("div",{className:"insight-block",children:[n.jsx("h3",{children:"Traditional Coding Already Works"}),n.jsx("p",{children:"We've been building complex systems across every industry using traditional development approaches since the beginning of computing. Every application challenge has been solved deterministically through well-structured code, APIs, and events."})]}),n.jsxs("div",{className:"insight-block",children:[n.jsx("h3",{children:"The Critical Gap: Natural Language Translation"}),n.jsx("p",{children:"The real limitation isn't in execution—it's in translation. Traditional systems require users to know specific structures, APIs, and interfaces. Every action needs dedicated endpoints. What if we could accept natural language and automatically route to the right logic?"})]}),n.jsxs("div",{className:"insight-block",children:[n.jsx("h3",{children:"LLMs as Translators, Not Replacements"}),n.jsx("p",{children:"Many frameworks try to replace traditional development with LLM-driven logic. PyBotchi takes a different approach: LLMs excel at understanding intent and translating between human and computer language—not at business logic, calculations, or deterministic execution. Let each do what it does best."})]})]})]}),n.jsxs("div",{className:"diagram-section",children:[n.jsx("h2",{children:"The PyBotchi Workflow"}),n.jsx("div",{className:"workflow-container",children:n.jsxs("div",{className:"workflow-steps",children:[n.jsxs("div",{className:"workflow-step",children:[n.jsx("div",{className:"step-number",children:"1"}),n.jsx("h3",{children:"Detect & Translate"}),n.jsx("p",{children:"LLM processes natural language input to extract intents and identify the appropriate Action with its arguments."}),n.jsx("span",{className:"tech-label",children:"LLM Layer"}),n.jsx("div",{className:"arrow-connector",children:"→"})]}),n.jsxs("div",{className:"workflow-step",children:[n.jsx("div",{className:"step-number",children:"2"}),n.jsx("h3",{children:"Execute Logic"}),n.jsx("p",{children:"Traditional code handles business logic, calculations, and data processing—the deterministic work computers do best."}),n.jsx("span",{className:"tech-label",children:"Your Code"}),n.jsx("div",{className:"arrow-connector",children:"→"})]}),n.jsxs("div",{className:"workflow-step",children:[n.jsx("div",{className:"step-number",children:"3"}),n.jsx("h3",{children:"Generate Response"}),n.jsx("p",{children:"LLM transforms processed results back into natural language for human-friendly communication."}),n.jsx("span",{className:"tech-label",children:"LLM Layer"})]})]})})]}),n.jsxs("div",{className:"architecture-section",children:[n.jsx("h2",{id:"architecture",children:"The Action Lifecycle Architecture"}),n.jsxs("div",{className:"architecture-diagram",children:[n.jsx("img",{src:"assets/action-life-cycle.png",alt:"PyBotchi Architecture Diagram",className:"arch-diagram-img"}),n.jsx("p",{className:"diagram-caption",children:"Hierarchical action execution with parent-child relationships"})]}),n.jsxs("div",{className:"lifecycle-explanation",children:[n.jsx("h3",{children:"How the Lifecycle Works"}),n.jsx("p",{className:"intro-text",children:"Every Action in PyBotchi follows a structured lifecycle that gives you complete control over execution flow. This lifecycle enables precise orchestration of multi-agent systems while maintaining clean, maintainable code."}),n.jsx("div",{className:"lifecycle-steps",children:[{num:1,title:"Pre-Execution",body:n.jsxs(n.Fragment,{children:["The Action's ",n.jsx("code",{children:"pre"})," hook runs before any child agent selection. This is where you implement business logic, validation, data gathering (RAG, knowledge graphs), tool execution, or any custom processing. You have complete freedom—use traditional code, call external APIs, or integrate other frameworks."]})},{num:2,title:"Child Selection",body:`After pre-execution, the system determines which child Actions to execute next.
                  You can let the LLM decide via tool calling, or override this entirely with
                  traditional logic (if/else, switch cases). The choice is yours—use AI routing
                  when it makes sense, use deterministic code when it doesn't.`},{num:3,title:"Child Execution",body:`Selected child Actions run through their own complete lifecycle. They maintain
                  references to their parent (the Action that called them) and can access sibling
                  Actions executed alongside them. This creates a hierarchical execution tree
                  that's automatically tracked and traceable.`},{num:4,title:"Post-Processing",body:n.jsxs(n.Fragment,{children:["The ",n.jsx("code",{children:"post"})," hook runs after all child executions complete. Use it to consolidate results, save data, logging, or prepare the final response. Like pre-execution, you have complete freedom to implement any logic needed."]})}].map(({num:s,title:u,body:c})=>n.jsxs("div",{className:"lifecycle-step",children:[n.jsxs("div",{className:"step-header",children:[n.jsx("div",{className:"step-num",children:s}),n.jsx("h4",{children:u})]}),n.jsx("p",{children:c})]},s))}),n.jsxs("div",{className:"additional-hooks",children:[n.jsx("h4",{children:"Additional Lifecycle Hooks"}),n.jsxs("div",{className:"hooks-grid",children:[n.jsxs("div",{className:"hook-card",children:[n.jsx("strong",{children:"on_error"}),n.jsx("p",{children:"Handle errors, implement retry logic, log issues, or re-raise for parent handling."})]}),n.jsxs("div",{className:"hook-card",children:[n.jsx("strong",{children:"fallback"}),n.jsx("p",{children:"Triggered when no child is selected—handle non-tool responses or default behaviors."})]}),n.jsxs("div",{className:"hook-card",children:[n.jsx("strong",{children:"commit_context"}),n.jsx("p",{children:"Control what data merges back to the main context—useful for reactive agents."})]}),n.jsxs("div",{className:"hook-card",children:[n.jsx("strong",{children:"cleanup"}),n.jsx("p",{children:"Always runs when the action finishes—release resources, reset state, final logging."})]})]})]})]}),n.jsxs("div",{className:"key-insight",children:[n.jsx("h4",{children:"Why This Matters"}),n.jsx("p",{children:"This lifecycle gives you the best of both worlds: structured orchestration with complete flexibility. Use LLMs for intent detection and routing, but keep your business logic where it belongs—in well-tested, deterministic code. Override any hook, inject custom logic at any stage, and maintain full control over your system's behavior."})]}),n.jsx("div",{className:"architecture-grid",children:[{title:"🏗️ Self-Documenting Graph",body:`Your code IS the architecture. Declare child Actions as class attributes and
                the execution graph emerges naturally. No separate diagramming tools, no manual
                synchronization—the graph structure is inherent in your code and always accurate.`},{title:"🔄 Living Architecture",body:`Add, remove, or swap agents at runtime without system restarts. Access parent
                context and sibling state during execution. Your agent system adapts to changing
                requirements without architectural rewrites.`},{title:"⚡ True Customization",body:`Override ANY hook with your own logic. Replace LLM routing with traditional
                if/else when needed. Integrate any framework, call any API, implement any business
                rule—PyBotchi enforces structure, not limitations.`},{title:"🎯 Team Scalability",body:`Different teams can build isolated agents independently. No merge conflicts in
                graph definitions, no stepping on each other's code. Deploy agents separately, test
                in isolation, integrate seamlessly.`}].map(({title:s,body:u})=>n.jsxs("div",{className:"arch-card",children:[n.jsx("h3",{children:s}),n.jsx("p",{children:u})]},s))})]}),n.jsxs("div",{className:"highlight-box",children:[n.jsx("h3",{children:"The Core Philosophy"}),n.jsx("p",{children:"PyBotchi doesn't replace your code—it enhances it. By letting LLMs handle what they're good at (understanding intent) and letting your code handle what it's good at (executing logic), you get the best of both worlds: the flexibility of natural language with the reliability of deterministic execution."})]})]})}function uy(){return n.jsxs(n.Fragment,{children:[n.jsx("h2",{children:"OOP-Driven Agent Customization"}),n.jsxs("p",{children:["Customize your agent by utilizing ",n.jsx("code",{children:"Object-Oriented Programming"})," practices"]}),n.jsx("h3",{id:"inheritance",children:"Inheritance"}),n.jsx("h4",{children:"Overrides & Extensions"}),n.jsx(_,{language:"python",children:`from typing import ClassVar

from pybotchi import Action, graph

class A1(Action):
    """Doc 1."""

class A2(Action):
    """Doc 2."""

# Declare Agent with A1 & A2 as child Actions
class A0(Action):
    """Maid doc."""

    A1: ClassVar = A1
    A2: ClassVar = A2

    # OR
    # class A1(A1):
    #    pass
    # class A2(A2):
    #    pass

    # Additional Agents
    class A3(Action):
        """Doc 3."""

    class A4(Action):
        """Doc 4."""

        # override print method
        def print(self) -> None:
          """Print some value."""
          print("A0")

# Modify A0 docstring
class B0(A0):
    """Modified Main doc."""

    # replace A1
    class A1(Action):
        """Different Doc 1."""

    # extend A2 to add new child agent and replace docstring
    class A2(A0.A2):
        """Modified Doc 2."""

        class A2Child1(Action):
            """Child Doc 1."""

    # remove A3
    A3: ClassVar = None

    # override print method
    def print(self) -> None:
        """Print some value."""
        print("B0")

# Not recommended but it's supported
# Remove A4 from A0 and this will propagate to every derived classes
A0.remove_child("A4")`}),n.jsx("br",{}),n.jsx("img",{className:"content-img2",src:"assets/mermaid2.png",alt:"mermaid2.png"}),n.jsx("img",{className:"content-img2",src:"assets/mermaid3.png",alt:"mermaid3.png"}),n.jsx("h3",{children:"Abstractions & Polymorphism"}),n.jsx("p",{children:"Though not commonly used in python, incorporating this approach significantly improves long-term design quality and maintainability."}),n.jsx(_,{language:"python",children:`from abc import ABC, abstractmethod

from aiofiles import open as aio_open

from pybotchi import Action

class FileUpdateAction(Action, ABC):
    """File Update Abstract Action."""

    @abstractmethod
    async def read_file(self, path: str) -> str:
        """Read file by path."""
        pass

class FileUpdate(FileUpdateAction):
    """File Update Abstract Action."""

    async def read_file(self, path: str) -> str:
        """Read file by path."""
        with open(path, 'r') as f:
            return f.read()


class AsyncFileUpdate(FileUpdateAction):
    """File Update Abstract Action."""

    async def read_file(self, path: str) -> str:
        """Read file by path."""
        async with aio_open(path, 'r') as f:
            return await f.read()`}),n.jsx("h3",{children:"Encapsulation"}),n.jsxs(Ge,{children:[n.jsx("strong",{children:"Note:"})," Python doesn't enforce ",n.jsx("strong",{children:"true"})," encapsulation (like using keywords such as private in other languages), but you can use Pydantic's"," ",n.jsx("code",{children:"PrivateAttr"})," feature. This allows you to hide internal attributes from the model's standard output and serialization."]}),n.jsx(_,{language:"python",children:`from pybotchi import Action

from pydantic import Field, PrivateAttr

class Agent(Action):
    """Agent."""
    value: str = Field(description="some value")
    _private_value: str = PrivateAttr(default="some value")`})]})}function dy(){return n.jsxs(n.Fragment,{children:[n.jsx("h2",{children:"Life Cycle Hooks"}),n.jsxs("p",{children:["The purpose of Life Cycle Hooks is to give developers fine-grained control over the various stages of an agent's or workflow's execution. They act as specific, reliable points where you can inject custom business logic, handle data, manage errors, and control the flow, ensuring the agent behaves exactly as intended from preparation to completion.",n.jsx("br",{}),"This control allows for more complex, robust, and customized agent architectures."]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{children:"ActionResult — Flow Control"}),n.jsxs("p",{children:["Every lifecycle method returns ",n.jsx("code",{children:"ActionResult"}),", which is"," ",n.jsx("code",{children:"ActionReturn | None"}),". The value controls what happens next:"]}),n.jsx(_,{language:"python",children:`from pybotchi import ActionResult, ActionReturn

# None (or omit return) — continue normally, nothing is interrupted
return None

# ActionReturn.END — stop only this action's remaining lifecycle.
# Sibling actions at the same level continue running unaffected.
return ActionReturn.END

# ActionReturn.BREAK — stop this action AND break the nearest ancestor's
# iteration loop (__max_iteration__). Stops subsequent siblings too.
return ActionReturn.BREAK

# ActionReturn.STOP — stop the entire agent immediately.
# Propagates all the way up through every ancestor.
return ActionReturn.STOP

# ActionReturn.stop(value=...) — same as STOP but carries a return value
# accessible after context.start() completes.
return ActionReturn.stop(value="any_value_of_any_type")`}),n.jsxs("p",{children:[n.jsx("code",{children:"ActionReturn.END"}),", ",n.jsx("code",{children:"ActionReturn.BREAK"}),", and"," ",n.jsx("code",{children:"ActionReturn.STOP"})," are pre-instantiated singletons — use them directly without calling a constructor. Only ",n.jsx("code",{children:"ActionReturn.stop(value=...)"})," is a factory method (for when you need to attach a return value)."]})]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{id:"pre",children:"pre"}),n.jsx("p",{children:"Executes before child agents run, allowing preparation, validation, and data gathering."}),n.jsxs("ul",{children:[n.jsx("li",{children:"Guardrails and validation before execution"}),n.jsx("li",{children:"Data gathering (RAG, knowledge graphs, etc.)"}),n.jsx("li",{children:"Business logic, tool execution, or preprocessing"}),n.jsx("li",{children:"Logging and notifications"})]}),n.jsx(_,{language:"python",children:`from itertools import islice

from pybotchi import Action, ActionResult, ActionReturn, Context

from pydantic import Field

class Translate(Action):
    """Translate query to requested language."""

    language: str = Field(description="Target language.")

    async def pre(self, context: Context) -> ActionResult:
        """Execute pre process."""
        # use base llm instance to invoke completion base on your requirements
        message = await context.llm.ainvoke(
            # Override system prompt to make your agent more specialized
            [
                {
                    "content": f"You are a specialized agent for translating the user's query to {self.language}",
                    "role": "system",
                },
                *islice(context.prompts, 1, None),
            ]
        )
        # push message.text to your conversational prompt context
        await context.add_response(self, message.text)

        # All process here are optional and overridable
        # You may do something else here like calling other framework/library
        # You may call langgraph ainvoke
        # You may call crewai kickoff_async
        # You may call OpenAI REST API directly
        # You may do guardrails before executing any commands
        # No restriction at all

        # Return None (or omit return) to continue normally
        # Return ActionReturn.END to stop only this action (siblings continue)
        # Return ActionReturn.BREAK to break the nearest ancestor iteration loop
        # Return ActionReturn.STOP to stop the entire agent`})]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{id:"post",children:"post"}),n.jsx("p",{children:"Executes after child agents complete, handling result consolidation and recording."}),n.jsxs("ul",{children:[n.jsx("li",{children:"Consolidate results from child agent executions"}),n.jsx("li",{children:"Data persistence (RAG, knowledge graphs, etc.)"}),n.jsx("li",{children:"Recording processes"}),n.jsx("li",{children:"Logging and notifications"})]}),n.jsxs("p",{children:["Doesn't run if the lifecycle was halted (",n.jsx("code",{children:"END"}),", ",n.jsx("code",{children:"BREAK"}),","," ",n.jsx("code",{children:"STOP"}),") or an error occurred. Use ",n.jsx("code",{children:"cleanup"})," for anything that must always run."]}),n.jsx(_,{language:"python",children:`from pybotchi import Action, ActionReturn, Context

class GeneratePresentation(Action):
    """Generate presentation based on user's query."""

    # your attributes ...
    # your pre execution method ...
    # your child actions ...

    async def post(self, context: Context) -> None:
        """Execute post process."""
        message = await context.llm.ainvoke(
            [
                {
                    "content": f"You are a specialized agent for for generating closing remarks.",
                    "role": "system",
                },
                *islice(context.prompts, 1, None),
            ]
        )
        await context.add_response(self, message.text)

        # All process here are optional and overridable
        # Save data to db, No restriction at all`})]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{id:"on_error",children:"on_error"}),n.jsx("p",{children:"Handles errors during execution with retry logic or custom error handling."}),n.jsxs("ul",{children:[n.jsx("li",{children:"Error handling and retry mechanisms"}),n.jsx("li",{children:"Logging and notifications"}),n.jsx("li",{children:"Re-raise errors for parent agent handling"})]}),n.jsx(_,{language:"python",children:`from pybotchi import Action, ActionResult, Context

class GeneratePresentation(Action):
    """Generate presentation based on user's query."""

    # your attributes ...
    # your pre execution method ...
    # your child actions ...

    async def on_error(self, context: Context, exception: Exception, unwrapped_exceptions) -> ActionResult:
        """Execute on error process."""
        # Consume exception Here
        # Check for type or attributes then execute their respective full back process

        # Example:
        match exception:
            case ConnectionError():
                print("Network connection failed")
                fallback1()
            case TimeoutError():
                print("Request timed out")
                fallback2()
            case _:
                print(f"Unexpected error: {type(exception).__name__}: {exception}")
                fallback3()

        # Optional re-raise
        raise exception`})]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{id:"fallback",children:"fallback"}),n.jsx("p",{children:"Executes when no child agent is selected, handling non-tool-call results."}),n.jsxs("ul",{children:[n.jsx("li",{children:"Process text content results from tool calls"}),n.jsx("li",{children:"Allow non-tool-call result handling"}),n.jsx("li",{children:"Logging and notifications"})]}),n.jsx(_,{language:"python",children:`from pybotchi import Action, ActionReturn, ChatRole, Context

class GeneratePresentation(Action):
    """Generate presentation based on user's query."""

    # your attributes ...
    # your pre execution method ...
    # your child actions ...

    async def fallback(self, context: Context, content: str) -> ActionResult:
        """Execute fallback process."""
        # You can just add the content as response
        await context.add_response(self, content)

        # or
        # await context.add_message(ChatRole.ASSISTANT, content)

        # Return None to continue normally
        # Return ActionReturn.BREAK to break the nearest ancestor iteration loop
        # Return ActionReturn.STOP to stop the entire agent`})]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{id:"child_selection",children:"child_selection"}),n.jsx("p",{children:"Determines which child agents to execute, can be overridden with custom logic."}),n.jsxs("ul",{children:[n.jsx("li",{children:"Override with traditional control flow (if/else, switch/case)"}),n.jsx("li",{children:"Custom agent selection logic"}),n.jsx("li",{children:"Return declared or undeclared child agents"})]}),n.jsx(_,{language:"python",children:`from pybotchi import Action, ActionReturn, ChatRole, Context

class GeneratePresentation(Action):
    """Generate presentation based on user's query."""

    # your attributes ...
    # your pre execution method ...
    # your child actions ...

    async def child_selection(
        self,
        context: Context,
        child_actions: ChildActions | None = None,
    ) -> tuple[list["Action"], str]:
        """Execute tool selection process."""
        # By default, child_actions will hold the current set of child actions.
        if child_actions is None:
            child_actions = await self.get_child_actions(context)

        # Override the selection here.
        # Use if/else, match/case, or an LLM tool call.
        message = await context.llm.ainvoke(...)

        # Select the next actions based on your result.
        next_actions = [
            child_actions[call["name"]](**call["args"]) for call in message.tool_calls
        ]

        # message.text is for a fallback process in case tool_calls is empty.
        return next_actions, message.text

        # Alternatively:
        # return [SomeAction()], "Your fallback message"`})]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{id:"commit_context",children:"commit_context"}),n.jsx("p",{children:"The final lifecycle event that controls context merging with the main execution context."}),n.jsxs("ul",{children:[n.jsx("li",{children:"Detach and clone current context for isolated execution"}),n.jsx("li",{children:"Control which data merges with main context"}),n.jsx("li",{children:"Useful for reactive agents that only need final results"})]}),n.jsx(_,{language:"python",children:`from pybotchi import Action, ActionReturn, ChatRole, Context

class GeneratePresentation(Action):
    """Generate presentation based on user's query."""

    # optional attribute to enable iteration
    __max_iteration__ = 5

    # your attributes ...

    async def commit_context(self, parent: Context, child: Context) -> None:
        """Execute commit context if it's detached."""
        # The default implementation will merge usages.
        await super().commit_context(parent, child)

        # Include additional data merging or logging here.
        # Transfer context.prompts, metadata, or any other important information.`})]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{id:"cleanup",children:"cleanup"}),n.jsxs("p",{children:["Always executes when the action finishes, like a ",n.jsx("code",{children:"finally"})," block: on success, on ",n.jsx("code",{children:"END"}),"/",n.jsx("code",{children:"BREAK"}),"/",n.jsx("code",{children:"STOP"}),", on errors (handled by"," ",n.jsx("code",{children:"on_error"})," or not), on max self recursion, and on cancellation."]}),n.jsxs("ul",{children:[n.jsx("li",{children:"Release resources (connections, locks, temp files)"}),n.jsx("li",{children:"Reset state"}),n.jsx("li",{children:"Final logging and metrics"})]}),n.jsx(_,{language:"python",children:`from pybotchi import Action, Context

class GeneratePresentation(Action):
    """Generate presentation based on user's query."""

    # your attributes ...

    async def pre(self, context: Context) -> None:
        """Execute pre process."""
        self._conn = await open_connection()

    async def cleanup(self, context: Context) -> None:
        """Execute cleanup process."""
        # pre may not have run (e.g. max self recursion or an early error)
        if (conn := getattr(self, "_conn", None)) is not None:
            await conn.close()`}),n.jsxs("ul",{children:[n.jsxs("li",{children:["Runs before ",n.jsx("code",{children:"commit_context"}),", so usage and metadata added to a detached context are still merged into the parent."]}),n.jsxs("li",{children:["May run even when ",n.jsx("code",{children:"pre"})," didn't, so don't assume setup completed."]}),n.jsxs("li",{children:["Its return value is ignored and it can't change the flow. If it raises, that error replaces the action's result or original error, but ",n.jsx("code",{children:"commit_context"})," ","still runs."]}),n.jsxs("li",{children:["For ",n.jsx("code",{children:"MCPAction"}),"/",n.jsx("code",{children:"GRPCAction"}),", it runs after the MCP/gRPC connections are closed. Do remote cleanup in ",n.jsx("code",{children:"post"})," or"," ",n.jsx("code",{children:"on_error"}),"."]})]})]}),n.jsx("h2",{children:"Extended Life Cycle Hooks"}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{id:"pre_mcp",children:"pre_mcp"}),n.jsxs("p",{children:["Executes before MCP server connection for ",n.jsx("code",{children:"MCPAction"})," agents only."]}),n.jsxs("ul",{children:[n.jsx("li",{children:"Construct MCP server connection arguments"}),n.jsx("li",{children:"Refresh expired credentials or tokens"}),n.jsx("li",{children:"Guardrails and validation before connection"})]}),n.jsx(_,{language:"python",children:`from pybotchi import ActionReturn
from pybotchi.mcp import MCPAction, MCPConnection, MCPContext


class JiraRequestAction(MCPAction):
    """Trigger Atlassian Jira related request."""

    __mcp_connections__ = [
        MCPConnection("jira", "SSE", "https://mcp.atlassian.com/v1/sse")
    ]

    # your attributes ...

    async def pre_mcp(self, context: MCPContext) -> None:
        """Execute pre process."""
        if not (integration := context.integrations.get("jira")):
            raise NotImplementedError("Feature not yet implemented!")

        # Implement guardrails or additional validation for custom security checks.
        # Implement business logic to generate a user token or refresh an existing one

        # Optionally adjust headers for MCP arguments for the duration of this context.
        integration["config"]["headers"] = {"Authorization": "Bearer {{access_token}}"}
        # Optionally override allowed_tools for the duration of this context.
        # allowed_tools is a dict[str, bool], merged over the connection's defaults.
        integration["allowed_tools"] = {
            "Action1": True,
            "Action2": True,
        }`})]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{id:"pre_grpc",children:"pre_grpc"}),n.jsxs("p",{children:["Executes before GRPC server connection for ",n.jsx("code",{children:"GRPCAction"})," agents only."]}),n.jsxs("ul",{children:[n.jsx("li",{children:"Construct GRPC server connection arguments"}),n.jsx("li",{children:"Refresh expired credentials or tokens"}),n.jsx("li",{children:"Guardrails and validation before connection"})]}),n.jsx(_,{language:"python",children:`from pybotchi import ActionReturn
from pybotchi.grpc import GRPCAction, GRPCConnection, GRPCContext


class GeneralChat(GRPCAction):
    """Casual Generic Chat."""

    __grpc_connections__ = [GRPCConnection("testing", "localhost:50051", ["group-1"])]

    # your attributes ...

    async def pre_grpc(self, context: GRPCContext) -> None:
        """Execute pre grpc execution."""
        if not (integration := context.integrations.get("testing")):
            raise NotImplementedError("Feature not yet implemented!")

        # Optionally Adjust GRPC connection arguments and additional configuration.
        integration["config"]["metadata"] = {
            "additional_field_to_be": "included in invocation_metadata"
        }
        integration["config"]["groups"] = ["override-the-group"]
        # gRPC uses allowed_actions (dict[str, bool]), merged over the connection's defaults.
        integration["allowed_actions"] = {
            "Action1": True,
            "Action2": True,
        }`})]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{id:"on_child_init_error",children:"on_child_init_error"}),n.jsx("p",{children:"Executes when a child action fails to initialize — for example, when the LLM returns malformed tool-call arguments that fail Pydantic validation. This hook lets you record the failure, add corrective context to the prompt history, and allow the iteration loop to retry with the error fed back to the model."}),n.jsxs("ul",{children:[n.jsx("li",{children:"Record the failed tool call in the action's history for serialization"}),n.jsx("li",{children:"Add the error as a response so the LLM can self-correct on the next iteration"}),n.jsxs("li",{children:["Return ",n.jsx("code",{children:"None"})," to skip the failed action and continue the loop"]})]}),n.jsx(_,{language:"python",children:`from json import dumps
from typing import Any

from pybotchi import Action, ActionReturn, Context
from pybotchi.utils import uuid


class GeneralChatWithCorrection(Action):
    """Runs with an iteration loop; handles bad tool arguments gracefully."""

    __max_iteration__ = 4
    __first_tool_only__ = True

    class Print(Action):
        """Print a number."""

        number: int  # LLM may initially send a string — triggers init error

        async def pre(self, context: Context) -> None:
            await context.add_response(self, str(self.number))

    async def on_child_init_error(
        self,
        context: Context,
        next_actions: list[Action],
        child_cls: type[Action],
        child_args: dict[str, Any],
        exception: Exception,
    ) -> str | None:
        """Record the failed call and feed the error back to the LLM."""
        # 1. Track the failed attempt in action history
        self._actions.append({
            "name": child_cls.__name__,
            "args": child_args,
            "usages": [],
            "actions": [],
        })

        # 2. Add the failed tool call + error as a response so the LLM can retry
        await context.add_response(
            {
                "id": f"call_{uuid().hex}",
                "function": {
                    "name": child_cls.__name__,
                    "arguments": dumps(child_args),
                },
                "type": "function",
            },
            str(exception),
        )

        # Return None to skip this action and let the iteration continue
        return None`})]})]})}function Ht({summary:s,children:u}){const[c,d]=ze.useState(!1);return n.jsxs("div",{className:"collapsible-section",children:[n.jsxs("div",{className:"collapsible-summary",onClick:()=>d(!c),children:[n.jsx("span",{className:`collapsible-arrow ${c?"open":""}`,children:"▶"}),n.jsx("span",{children:s})]}),c&&n.jsx("div",{className:"collapsible-content",children:u})]})}const hy=`from os import getenv

from dotenv import load_dotenv

from langchain_openai import AzureChatOpenAI

from pybotchi import Action, ActionReturn, ChatRole, LLM
from pybotchi.grpc import GRPCAction, GRPCConnection, GRPCContext

from pydantic import Field

load_dotenv()

LLM.add(
    base=AzureChatOpenAI(
        api_key=getenv("CHAT_KEY"),
        azure_endpoint=getenv("CHAT_ENDPOINT"),
        azure_deployment=getenv("CHAT_DEPLOYMENT"),
        model=getenv("CHAT_MODEL"),
        api_version=getenv("CHAT_VERSION"),
        temperature=int(getenv("CHAT_TEMPERATURE", "1")),
        stream_usage=True,
    )
)


class MathProblem(Action):
    """Solve the math problem."""

    __groups__ = {"grpc": {"group-1"}}

    equation: str = Field(description="The mathematical equation to solve (e.g., '2x + 5')")

    async def pre(self, context: GRPCContext) -> None:
        """Execute pre process."""
        message = await context.llm.ainvoke(f"Solve \`{self.equation}\`")
        await context.add_usage(self, context.llm_model, message.usage_metadata)
        await context.add_message(
            ChatRole.ASSISTANT,
            "Adding additional message",
            metadata={"additional": True},
        )
        await context.add_response(self, message.text)


class Translation(Action):
    """Translate to specific language."""

    __groups__ = {"grpc": {"group-1"}}

    message: str = Field(description="The text content to be translated.")
    language: str = Field(description="The ISO code or name of the target language.")

    async def pre(self, context: GRPCContext) -> None:
        """Execute pre process."""
        message = await context.llm.ainvoke(f"Translate \`{self.message}\` to {self.language}")
        await context.add_usage(self, context.llm_model, message.usage_metadata)
        await context.add_response(self, message.text)


# Example nested gRPC Action - exposed at group-1 and connected to group-2
class JokeWithStoryTelling(GRPCAction):
    """Tell Joke or Story."""

    __groups__ = {"grpc": {"group-1"}}
    __grpc_connections__ = [GRPCConnection("testing2", "localhost:50051", ["group-2"])]

    async def post(self, context: GRPCContext) -> ActionReturn:
        """Execute post process."""
        message = await context.llm.ainvoke(context.prompts)
        await context.add_usage(self, context.llm_model, message.usage_metadata, "combine")
        await context.add_message(ChatRole.ASSISTANT, message.text)
        return ActionReturn.STOP


class Joke(Action):
    """Generate a joke."""

    __concurrent__ = True
    __groups__ = {"grpc": {"group-2"}}

    async def pre(self, context: GRPCContext) -> None:
        """Execute pre process."""
        message = await context.llm.ainvoke("generate very short joke")
        await context.add_usage(self, context.llm_model, message.usage_metadata)
        await context.add_response(self, message.text)


class StoryTelling(Action):
    """Tell a story."""

    __concurrent__ = True
    __groups__ = {"grpc": {"group-2"}}

    async def pre(self, context: GRPCContext) -> None:
        """Execute pre process."""
        message = await context.llm.ainvoke("generate a very short story")
        await context.add_usage(self, context.llm_model, message.usage_metadata)
        await context.add_response(self, message.text)`,py=`from asyncio import run
from os import getenv
from json import dumps

from dotenv import load_dotenv

from langchain_openai import AzureChatOpenAI

from pybotchi import Action, ActionResult, ActionReturn, ChatRole, LLM
from pybotchi.grpc import (
    GRPCAction,
    GRPCConnection,
    GRPCContext,
    GRPCIntegration,
    GRPCRemoteAction,
    graph,
)

load_dotenv()

LLM.add(
    base=AzureChatOpenAI(
        api_key=getenv("CHAT_KEY"),
        azure_endpoint=getenv("CHAT_ENDPOINT"),
        azure_deployment=getenv("CHAT_DEPLOYMENT"),
        model=getenv("CHAT_MODEL"),
        api_version=getenv("CHAT_VERSION"),
        temperature=int(getenv("CHAT_TEMPERATURE", "1")),
        stream_usage=True,
    )
)


class GeneralChat(GRPCAction):
    """Casual Generic Chat."""

    __grpc_connections__ = [GRPCConnection("testing", "localhost:50051", ["group-1"])]

    async def pre_grpc(self, context: GRPCContext) -> None:
        """Execute pre grpc execution."""
        print("Trigger anything here before grpc client connection")
        print("Build context.integrations['testing']['config']")
        print("Refresh tokens")
        print("etc ...")

    class MathProblem(GRPCRemoteAction):
        async def pre(self, context: GRPCContext) -> ActionResult:
            """Execute pre execution."""
            print("#####################################")
            return await super().pre(context)

    class RequestValidator(Action):
        """Validate request concurrently."""

        __concurrent__ = True

        async def pre(self, context: GRPCContext) -> None:
            """Execute pre execution."""
            await context.add_response(self, "Validated!")


async def test() -> None:
    """Chat."""
    integrations: dict[str, GRPCIntegration] = {"testing": {}, "testing2": {}}
    context = GRPCContext(
        prompts=[
            {
                "role": ChatRole.SYSTEM,
                "content": "Address user's query while always including \`RequestValidator\` as first tool if available",
            },
            {
                "role": ChatRole.USER,
                "content": "What is 4 x 4 and what is the english of \`Kamusta?\`",
            },
        ],
        integrations=integrations,
    )
    action, result = await context.start(GeneralChat)
    print(dumps(context.prompts, indent=4))
    print(dumps(action.serialize(), indent=4))

    general_chat_graph = await graph(GeneralChat, integrations=integrations)
    print(general_chat_graph.flowchart())


run(test())`,fy=`#-------------------------------------------------------#
# Agent ID: agent_b7759e0b77b94cc081ddd40417747dc8
# Agent Path: server.py
# Starting None worker(s) on 0.0.0.0:50051
#-------------------------------------------------------#
# Agent Process: Process-1 [314611]
# Agent Handler: PyBotchiGRPC
#-------------------------------------------------------#`,my=`Trigger anything here before grpc client connection
Build context.integrations['testing']['config']
Refresh tokens
etc ...
#####################################
[
    {
        "role": "system",
        "content": "Address user's query while always including \`RequestValidator\` as first tool if available"
    },
    {
        "role": "user",
        "content": "What is 4 x 4 and what is the english of \`Kamusta?\`"
    },
    {
        "content": "",
        "role": "assistant",
        "tool_calls": [
            {
                "id": "call_4c271935415d460d8d20ac26ffbeea15",
                "function": {
                    "name": "RequestValidator",
                    "arguments": "{}"
                },
                "type": "function"
            }
        ]
    },
    {
        "content": "Validated!",
        "role": "tool",
        "tool_call_id": "call_4c271935415d460d8d20ac26ffbeea15"
    },
    {
        "content": "Adding additional message",
        "role": "assistant"
    },
    {
        "content": "",
        "role": "assistant",
        "tool_calls": [
            {
                "id": "call_e2b365e22caf45f7991d47512bc1e39d",
                "type": "function",
                "function": {
                    "arguments": "{"equation":"4 x 4"}",
                    "name": "MathProblem"
                }
            }
        ]
    },
    {
        "content": "The result of \`4 x 4\` is **16**.",
        "role": "tool",
        "tool_call_id": "call_e2b365e22caf45f7991d47512bc1e39d"
    },
    {
        "content": "",
        "role": "assistant",
        "tool_calls": [
            {
                "id": "call_b4c8c806c96d4d48b68ef1046193f102",
                "type": "function",
                "function": {
                    "arguments": "{"message":"Kamusta?","language":"English"}",
                    "name": "Translation"
                }
            }
        ]
    },
    {
        "content": ""Kamusta?" translates to "How are you?" in English.",
        "role": "tool",
        "tool_call_id": "call_b4c8c806c96d4d48b68ef1046193f102"
    }
]
{
    "name": "GeneralChat",
    "args": {},
    "usages": [
        {
            "name": "$tool",
            "model": "gpt-4.1",
            "usage": {
                "input_tokens": 324,
                "output_tokens": 66,
                "total_tokens": 390,
                "input_token_details": {
                    "audio": 0,
                    "cache_read": 0
                },
                "output_token_details": {
                    "audio": 0,
                    "reasoning": 0
                }
            }
        }
    ],
    "actions": [
        {
            "name": "RequestValidator",
            "args": {},
            "usages": [],
            "actions": []
        },
        {
            "name": "MathProblem",
            "args": {
                "equation": "4 x 4"
            },
            "usages": [
                {
                    "name": null,
                    "usage": {
                        "input_token_details": {
                            "cache_read": 0.0,
                            "audio": 0.0
                        },
                        "total_tokens": 29.0,
                        "input_tokens": 14.0,
                        "output_token_details": {
                            "audio": 0.0,
                            "reasoning": 0.0
                        },
                        "output_tokens": 15.0
                    },
                    "model": "gpt-4.1"
                }
            ],
            "actions": []
        },
        {
            "name": "Translation",
            "args": {
                "message": "Kamusta?",
                "language": "English"
            },
            "usages": [
                {
                    "name": null,
                    "usage": {
                        "input_token_details": {
                            "cache_read": 0.0,
                            "audio": 0.0
                        },
                        "total_tokens": 30.0,
                        "input_tokens": 15.0,
                        "output_token_details": {
                            "audio": 0.0,
                            "reasoning": 0.0
                        },
                        "output_tokens": 15.0
                    },
                    "model": "gpt-4.1"
                }
            ],
            "actions": []
        }
    ]
}`,gy=`flowchart TD
__main__.GeneralChat.RequestValidator[RequestValidator]
grpc.agent_b7759e0b77b94cc081ddd40417747dc8.StoryTelling[StoryTelling]
__main__.GeneralChat{GeneralChat}
grpc.agent_b7759e0b77b94cc081ddd40417747dc8.JokeWithStoryTelling{JokeWithStoryTelling}
grpc.agent_b7759e0b77b94cc081ddd40417747dc8.Joke[Joke]
grpc.agent_b7759e0b77b94cc081ddd40417747dc8.patched.MathProblem[MathProblem]
grpc.agent_b7759e0b77b94cc081ddd40417747dc8.Translation[Translation]
grpc.agent_b7759e0b77b94cc081ddd40417747dc8.JokeWithStoryTelling ed0@--"\`**GRPC** : testing2<br>*[concurrent]*\`"--> grpc.agent_b7759e0b77b94cc081ddd40417747dc8.Joke
grpc.agent_b7759e0b77b94cc081ddd40417747dc8.JokeWithStoryTelling ed1@--"\`**GRPC** : testing2<br>*[concurrent]*\`"--> grpc.agent_b7759e0b77b94cc081ddd40417747dc8.StoryTelling
__main__.GeneralChat --"\`**GRPC** : testing\`"--> grpc.agent_b7759e0b77b94cc081ddd40417747dc8.patched.MathProblem
__main__.GeneralChat --"\`**GRPC** : testing\`"--> grpc.agent_b7759e0b77b94cc081ddd40417747dc8.Translation
__main__.GeneralChat ed2@--"\`*[concurrent]*\`"--> __main__.GeneralChat.RequestValidator
__main__.GeneralChat --"\`**GRPC** : testing\`"--> grpc.agent_b7759e0b77b94cc081ddd40417747dc8.JokeWithStoryTelling
style __main__.GeneralChat fill:#4CAF50,color:#000000
classDef animate stroke-dasharray: 10,stroke-dashoffset: 500,animation: dash 10s linear infinite;
class ed0,ed1,ed2 animate`;function yy(){return n.jsxs(n.Fragment,{children:[n.jsx("h2",{id:"distributed-agents",children:"gRPC (Scaling)"}),n.jsxs("p",{children:["PyBotchi's ",n.jsx("strong",{children:"gRPC support"})," enables"," ",n.jsx("em",{children:"true distributed scaling"})," by allowing a PyBotchi client to connect to remote ",n.jsx("strong",{children:"PyBotchi servers"})," over gRPC. This lets you distribute compute resources ",n.jsx("em",{children:"per Action"})," (or per group of Actions) while maintaining execution as a"," ",n.jsx("strong",{children:"single unified graph"}),"."]}),n.jsxs(Ge,{children:[n.jsx("strong",{children:"Key concept:"})," Remote Actions behave exactly like local Actions. They remain nodes in your graph—just executed on different machines with isolated resources."]}),n.jsx("h3",{children:"Real-Time Context Synchronization"}),n.jsxs("p",{children:["When an Action executes through a gRPC connection, PyBotchi maintains"," ",n.jsx("strong",{children:"bidirectional context synchronization"})," between client and server throughout the execution lifecycle."]}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"Server → Client:"})," When the remote server adds responses or updates context, changes propagate back to the client in real-time."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Client → Server:"})," When the client updates context during an active connection, changes flow to the server immediately."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"No polling required:"})," Context stays synchronized through the persistent gRPC connection—no polling loops, background jobs, or coordination overhead."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"No database dependency:"})," State synchronization happens directly through the connection without requiring external storage for coordination."]})]}),n.jsxs("div",{className:"highlight-box",children:[n.jsx("h3",{children:"Why This Matters"}),n.jsx("p",{children:"Most distributed agent frameworks force you to choose between two painful options: implement polling loops with databases for state management, or lose the ability for agents to collaborate during execution. PyBotchi's gRPC mode eliminates this tradeoff entirely."}),n.jsxs("p",{children:["Context synchronization is ",n.jsx("strong",{children:"fully customizable"}),"—control exactly which data propagates (prompts, metadata, usage stats, or custom fields) and when it syncs. Override ",n.jsx("code",{children:"commit_context"})," ","to implement selective propagation rules that match your architecture."]})]}),n.jsx("h3",{children:"Concurrent Execution Support"}),n.jsxs("p",{children:["gRPC Actions fully support ",n.jsx("strong",{children:"concurrent execution"})," just like local Actions. Enable concurrent child execution by setting"," ",n.jsx("code",{children:"__concurrent__"})," to control parallel processing across remote servers."]}),n.jsx("h4",{children:"Via Remote Action Configuration"}),n.jsx(_,{language:"python",children:`from pybotchi import Action, ActionReturn, ChatRole
from pybotchi.grpc import GRPCContext

from pydantic import Field

class MathProblem(Action):
    """Solve the math problem."""

    # Action will run concurrently
    __concurrent__ = True
    __groups__ = {"grpc": {"group-1"}}

    equation: str = Field(description="The mathematical equation to solve (e.g., '2x + 5')")

    async def pre(self, context: GRPCContext) -> None:
        """Execute pre process."""
        message = await context.llm.ainvoke(f"Solve \`{self.equation}\`")
        await context.add_response(self, message.text)`}),n.jsx("h4",{children:"Via Local Action Override"}),n.jsx(_,{language:"python",children:`from pybotchi.grpc import GRPCAction, GRPCConnection, GRPCRemoteAction

class GeneralChat(GRPCAction):
    """Casual Generic Chat."""

    __grpc_connections__ = [GRPCConnection("testing", "localhost:50051", ["group-1"])]

    class MathProblem(GRPCRemoteAction):
        # This overrides the remote action configuration
        __concurrent__ = True`}),n.jsx("h3",{children:"Core Capabilities"}),n.jsx("div",{className:"features-grid",children:[{icon:"🧩",title:"Unified Graph Execution",body:"Remote Actions integrate seamlessly into your execution graph. Parent-child relationships, lifecycle hooks, and context flow work identically whether Actions run locally or remotely."},{icon:"📈",title:"Targeted Resource Allocation",body:"Deploy compute-intensive Actions (RAG, embeddings, inference) on GPU servers, I/O-bound Actions (scraping, APIs) on separate workers, and coordination logic on lightweight clients."},{icon:"🔁",title:"Zero-Overhead Synchronization",body:"Context updates propagate through persistent connections during execution. No polling loops, no sync jobs, no coordination overhead—just direct communication between client and server."},{icon:"🧠",title:"Database-Free Architecture",body:"Eliminate the need for external databases or message queues solely for state coordination. Context syncs directly through gRPC connections, simplifying your infrastructure."},{icon:"⚡",title:"Concurrent Remote Execution",body:"Execute multiple remote Actions in parallel across different servers. Enable __concurrent__ for true distributed parallel processing with automatic context aggregation."},{icon:"🛠️",title:"Complete Customization",body:"Override connection behavior, authentication flow, context propagation rules, and execution lifecycle. Adapt gRPC integration to match your security, networking, and architectural requirements."}].map(({icon:s,title:u,body:c})=>n.jsxs("div",{className:"feature-card",children:[n.jsx("div",{className:"feature-icon",children:s}),n.jsx("h3",{children:u}),n.jsx("p",{children:c})]},u))}),n.jsx("h3",{children:"When to Use gRPC"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"Resource-intensive Actions:"})," RAG pipelines, vector searches, model inference, or long-running computations that benefit from dedicated hardware."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Resource isolation:"})," Separate CPU/GPU/memory allocation per Action group to prevent resource contention and improve reliability."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Horizontal scaling:"})," Deploy multiple servers hosting specialized Action groups, with automatic load distribution across instances."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Team independence:"})," Different teams deploy and scale their Actions independently without coordinating deployments or risking graph breakage."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Cost optimization:"})," Run expensive operations on spot instances or specialized hardware only when needed."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Fault isolation:"})," Contain failures to specific Action groups—a crashed remote Action doesn't take down your entire system."]})]}),n.jsxs(Ge,{children:[n.jsx("strong",{children:"Design principle:"})," Use gRPC when you need distributed execution without the complexity of message queues, state databases, or coordination services. PyBotchi handles the hard parts—you just deploy Actions where they make sense."]}),n.jsx("h3",{children:"Complete Example"}),n.jsx("p",{children:"This example demonstrates a distributed setup with nested gRPC connections, concurrent execution, and bidirectional context synchronization."}),n.jsx(Ht,{summary:n.jsxs(n.Fragment,{children:[n.jsx("strong",{children:"server.py"})," — Remote Action Definitions"]}),children:n.jsx(_,{language:"python",children:hy})}),n.jsx(Ht,{summary:n.jsxs(n.Fragment,{children:[n.jsx("strong",{children:"client.py"})," — Local Action with gRPC Connections"]}),children:n.jsx(_,{language:"python",children:py})}),n.jsx("h3",{children:"Running the Example"}),n.jsx("h4",{children:"Start the gRPC Server"}),n.jsx(_,{language:"bash",children:"pybotchi-grpc server.py"}),n.jsx(Ht,{summary:"Server Output",children:n.jsx(_,{language:"bash",children:fy})}),n.jsx("h4",{children:"Run the Client"}),n.jsx(_,{language:"bash",children:"python3 client.py"}),n.jsx(Ht,{summary:"Client Output — Execution Flow",children:n.jsx(_,{language:"bash",children:my})}),n.jsx(Ht,{summary:"Mermaid Graph Output",children:n.jsx(_,{language:"bash",children:gy})}),n.jsx("h3",{children:"Execution Graph Visualization"}),n.jsx("img",{className:"content-img",src:"assets/grpc.png",alt:"Distributed gRPC execution graph showing local and remote Actions with concurrent execution paths"}),n.jsxs("div",{className:"highlight-box",children:[n.jsx("h3",{children:"What This Example Demonstrates"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"Nested gRPC connections:"})," ",n.jsx("code",{children:"JokeWithStoryTelling"})," connects to a second group of remote Actions"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Concurrent execution:"})," ",n.jsx("code",{children:"RequestValidator"}),", ",n.jsx("code",{children:"Joke"}),", and ",n.jsx("code",{children:"StoryTelling"})," run in parallel"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Bidirectional sync:"})," Messages added on the server automatically appear in client context"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Usage tracking:"})," Token usage from remote executions aggregates in the final output"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Action overrides:"})," ",n.jsx("code",{children:"MathProblem"})," is overridden locally to add custom pre-execution logic"]})]})]})]})}const xy=`from os import getenv

from dotenv import load_dotenv

from langchain_openai import AzureChatOpenAI

from pydantic import Field
from uvicorn import run

from pybotchi import Action, ActionReturn, ChatRole, Context, LLM
from pybotchi.mcp import build_mcp_app

load_dotenv()

LLM.add(
    base=AzureChatOpenAI(
        api_key=getenv("CHAT_KEY"),
        azure_endpoint=getenv("CHAT_ENDPOINT"),
        azure_deployment=getenv("CHAT_DEPLOYMENT"),
        model=getenv("CHAT_MODEL"),
        api_version=getenv("CHAT_VERSION"),
        temperature=int(getenv("CHAT_TEMPERATURE", "1")),
        stream_usage=True,
    )
)


class MathProblem(Action):
    """Solve the math problem."""

    __groups__ = {"mcp": {"group-1"}}

    equation: str = Field(description="The mathematical equation to solve (e.g., '2x + 5')")

    async def pre(self, context: Context) -> None:
        """Execute pre process."""
        message = await context.llm.ainvoke(f"Solve \`{self.equation}\`")
        await context.add_usage(self, context.llm_model, message.usage_metadata)
        await context.add_response(self, message.text)


class Translation(Action):
    """Translate to specific language."""

    __groups__ = {"mcp": {"group-1"}}

    message: str = Field(description="The text content to be translated.")
    language: str = Field(description="The ISO code or name of the target language.")

    async def pre(self, context: Context) -> None:
        """Execute pre process."""
        message = await context.llm.ainvoke(f"Translate \`{self.message}\` to {self.language}")
        await context.add_usage(self, context.llm_model, message.usage_metadata)
        await context.add_response(self, message.text)


class JokeWithStoryTelling(Action):
    """Tell Joke or Story."""

    __groups__ = {"mcp": {"group-1", "group-2"}}

    query: str

    async def pre(self, context: Context) -> None:
        """Execute pre process."""
        await context.add_message(ChatRole.USER, self.query)

    class Joke(Action):
        """Generate a joke."""

        __concurrent__ = True

        async def pre(self, context: Context) -> None:
            """Execute pre process."""
            message = await context.llm.ainvoke("generate very short joke")
            await context.add_usage(self, context.llm_model, message.usage_metadata)
            await context.add_response(self, message.text)

    class StoryTelling(Action):
        """Tell a story."""

        __concurrent__ = True

        async def pre(self, context: Context) -> None:
            """Execute pre process."""
            message = await context.llm.ainvoke("generate a very short story")
            await context.add_usage(self, context.llm_model, message.usage_metadata)
            await context.add_response(self, message.text)

    async def post(self, context: Context) -> ActionReturn:
        """Execute post process."""
        message = await context.llm.ainvoke(context.prompts)
        await context.add_usage(self, context.llm_model, message.usage_metadata, "combine")
        await context.add_message(ChatRole.ASSISTANT, message.text)
        return ActionReturn.STOP


# SSE paths /group-1/sse & /group-2/sse
# Streamable HTTP paths /group-1/mcp & /group-2/mcp
app = build_mcp_app(transport="streamable-http")

if __name__ == "__main__":
    run(
        app,
        host="127.0.0.1",
        port=8000,
        log_level="info",
    )`,vy=`from collections.abc import AsyncGenerator
from contextlib import asynccontextmanager

from fastapi import FastAPI

from pybotchi.mcp import mount_mcp_app

# ... (same Action definitions as above) ...

@asynccontextmanager
async def lifespan(app: FastAPI) -> AsyncGenerator[None, None]:
    """Override life cycle."""
    async with mount_mcp_app(app, transport="streamable-http"):
        yield


app = FastAPI(lifespan=lifespan)
if __name__ == "__main__":
    run(app, host="127.0.0.1", port=8000, log_level="info")`,_y=`from asyncio import run
from json import dumps
from os import getenv

from dotenv import load_dotenv

from langchain_openai import AzureChatOpenAI

from pybotchi import ActionReturn, ChatRole, LLM
from pybotchi.mcp import MCPAction, MCPConnection, MCPContext, MCPIntegration, graph

load_dotenv()

LLM.add(
    base=AzureChatOpenAI(
        api_key=getenv("CHAT_KEY"),
        azure_endpoint=getenv("CHAT_ENDPOINT"),
        azure_deployment=getenv("CHAT_DEPLOYMENT"),
        model=getenv("CHAT_MODEL"),
        api_version=getenv("CHAT_VERSION"),
        temperature=int(getenv("CHAT_TEMPERATURE", "1")),
        stream_usage=True,
    )
)


class GeneralChat(MCPAction):
    """Casual Generic Chat."""

    __mcp_connections__ = [MCPConnection("testing", "SHTTP", "http://localhost:8000/group-1/mcp")]

    async def pre_mcp(self, context: MCPContext) -> None:
        """Execute pre mcp execution."""
        print("Trigger anything here before mcp client connection")
        print("Build context.integrations['testing']['config']")
        print("Refresh tokens")


async def test() -> None:
    """Chat."""
    integrations: dict[str, MCPIntegration] = {"testing": {}}
    context = MCPContext(
        prompts=[
            {"role": ChatRole.SYSTEM, "content": ""},
            {"role": ChatRole.USER, "content": "What is 4 x 4 and what is the english of \`Kamusta?\`"},
        ],
        integrations=integrations,
    )
    action, result = await context.start(GeneralChat)
    print(dumps(context.prompts, indent=4))
    print(dumps(action.serialize(), indent=4))

    general_chat_graph = await graph(GeneralChat, {"IgnoredAction": False}, integrations)
    print(general_chat_graph.flowchart())


run(test())`,jy=`{
  "mcpServers": {
    "pybotchi-tools": {
      "command": "npx",
      "args": ["mcp-remote", "http://localhost:8000/group-1/mcp"]
    }
  }
}`;function wy(){return n.jsxs(n.Fragment,{children:[n.jsx("h2",{id:"model-context-protocol",children:"MCP (Model Context Protocol)"}),n.jsxs("p",{children:["PyBotchi's ",n.jsx("strong",{children:"MCP support"})," enables seamless integration with the"," ",n.jsx("strong",{children:"Model Context Protocol"}),", allowing your Actions to function as MCP servers that can be consumed by any MCP-compatible client. This lets you expose your agent capabilities as standardized tools while maintaining PyBotchi's powerful orchestration features."]}),n.jsxs(Ge,{children:[n.jsx("strong",{children:"Key concept:"})," PyBotchi Actions can serve as MCP tools, bridging the gap between PyBotchi's agent architecture and the broader MCP ecosystem. Your Actions become discoverable, callable tools for any MCP client."]}),n.jsx("h3",{children:"Dual-Mode Architecture"}),n.jsx("p",{children:"PyBotchi supports MCP in two complementary ways:"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"MCP Server Mode:"})," Expose your Actions as MCP tools that can be discovered and invoked by external MCP clients (Claude Desktop, IDEs, etc.)"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"MCP Client Mode:"})," Connect to external MCP servers and integrate their tools as child Actions within your PyBotchi orchestration graph"]})]}),n.jsxs("div",{className:"highlight-box",children:[n.jsx("h3",{children:"Why MCP Integration Matters"}),n.jsx("p",{children:"The Model Context Protocol is rapidly becoming the standard for AI tool integration. By supporting MCP, PyBotchi Actions can be consumed by any MCP-compatible application while maintaining all the benefits of PyBotchi's lifecycle management, context synchronization, and orchestration patterns."}),n.jsx("p",{children:"This means your carefully crafted agent workflows can be exposed as simple tools to external systems, or you can incorporate external MCP tools into your complex multi-agent orchestrations."})]}),n.jsx("h3",{children:"Transport Protocols"}),n.jsx("p",{children:"PyBotchi MCP servers support multiple transport mechanisms:"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"Server-Sent Events (SSE):"})," Real-time streaming protocol ideal for long-running operations and progressive updates"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Streamable HTTP (SHTTP):"})," HTTP-based protocol for simpler integration with existing web infrastructure"]})]}),n.jsx("h3",{children:"Core Capabilities"}),n.jsx("div",{className:"features-grid",children:[{icon:"🔌",title:"Standard Protocol Support",body:"Full compatibility with MCP specification. Your Actions automatically generate proper tool schemas and handle the complete request/response cycle."},{icon:"🎯",title:"Group-Based Organization",body:"Organize Actions into logical groups with separate MCP endpoints. Each group exposes only its designated Actions, enabling fine-grained access control."},{icon:"🔄",title:"Bidirectional Integration",body:"Serve your Actions as MCP tools OR consume external MCP servers as child Actions. Mix and match based on your architecture needs."},{icon:"⚡",title:"Concurrent Execution",body:"MCP Actions support the same concurrent execution patterns as local Actions. Enable __concurrent__ for parallel processing across MCP boundaries."},{icon:"🏗️",title:"FastAPI Integration",body:"Mount MCP endpoints directly to existing FastAPI applications or run standalone with Starlette. Integrate seamlessly with your current web infrastructure."},{icon:"🛠️",title:"Complete Lifecycle Control",body:"All PyBotchi lifecycle hooks work with MCP Actions. Use pre_mcp for authentication, override context propagation, and maintain full control."}].map(({icon:s,title:u,body:c})=>n.jsxs("div",{className:"feature-card",children:[n.jsx("div",{className:"feature-icon",children:s}),n.jsx("h3",{children:u}),n.jsx("p",{children:c})]},u))}),n.jsx("h3",{children:"When to Use MCP"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"External tool exposure:"})," Make your PyBotchi agents available to Claude Desktop, IDEs, or other MCP-compatible applications."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Third-party integration:"})," Consume tools from external MCP servers (Brave Search, file systems, databases) within your PyBotchi orchestration."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Ecosystem participation:"})," Contribute your specialized agents to the growing MCP ecosystem while maintaining PyBotchi's advanced features."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Standardized APIs:"})," Provide a standard interface to your agents without sacrificing PyBotchi's orchestration capabilities."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Hybrid architectures:"})," Combine PyBotchi's orchestration with MCP's broad ecosystem support for maximum flexibility."]})]}),n.jsxs(Ge,{children:[n.jsx("strong",{children:"Design principle:"})," Use MCP when you need standardized tool integration with the broader AI ecosystem while maintaining PyBotchi's powerful orchestration features."]}),n.jsx("h3",{children:"Complete Example"}),n.jsx("p",{children:"This example demonstrates both MCP server and client modes, showing how to expose Actions as MCP tools and consume them from a PyBotchi client."}),n.jsx(Ht,{summary:n.jsxs(n.Fragment,{children:[n.jsx("strong",{children:"server.py (standalone)"})," — MCP Server (Exposing Actions as Tools)"]}),children:n.jsx(_,{language:"python",children:xy})}),n.jsx(Ht,{summary:n.jsxs(n.Fragment,{children:[n.jsx("strong",{children:"server.py (mounted)"})," — Alternative: Mount to Existing FastAPI App"]}),children:n.jsx(_,{language:"python",children:vy})}),n.jsx(Ht,{summary:n.jsxs(n.Fragment,{children:[n.jsx("strong",{children:"client.py"})," — MCP Client (Consuming MCP Tools)"]}),children:n.jsx(_,{language:"python",children:_y})}),n.jsx("h3",{children:"Running the Example"}),n.jsx("h4",{children:"Start the MCP Server"}),n.jsx(_,{language:"bash",children:"python3 server.py"}),n.jsx(Ht,{summary:"Server Output",children:n.jsx(_,{language:"bash",children:`INFO:     Started server process [642763]
INFO:     Waiting for application startup.
INFO:     Application startup complete.
INFO:     Uvicorn running on http://127.0.0.1:8000 (Press CTRL+C to quit)`})}),n.jsx("h4",{children:"Run the Client"}),n.jsx(_,{language:"bash",children:"python3 client.py"}),n.jsx(Ht,{summary:"Client Output — Execution Flow",children:n.jsx(_,{language:"bash",children:`Trigger anything here before mcp client connection
Build context.integrations['testing']['config']
Refresh tokens
etc ...`})}),n.jsx("h3",{children:"Execution Graph Visualization"}),n.jsx("img",{className:"content-img",src:"assets/mcp.png",alt:"Distributed MCP execution graph showing seamless orchestration of local and remote Tools with concurrent execution paths."}),n.jsx("h3",{children:"MCP Endpoints Structure"}),n.jsx("p",{children:"PyBotchi automatically generates MCP endpoints based on your Action groups:"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("code",{children:"/<group-name>/mcp"})," — Streamable HTTP endpoint for the group"]}),n.jsxs("li",{children:[n.jsx("code",{children:"/<group-name>/sse"})," — Server-Sent Events endpoint for the group"]})]}),n.jsxs("p",{children:["Each endpoint exposes only the Actions assigned to that group via ",n.jsx("code",{children:"__groups__"}),", enabling fine-grained access control and logical organization."]}),n.jsxs("div",{className:"highlight-box",children:[n.jsx("h3",{children:"What This Example Demonstrates"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"MCP server setup:"})," Actions are automatically exposed as MCP tools with proper schemas"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Group organization:"})," Actions are organized into logical groups with separate endpoints"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Client integration:"})," PyBotchi client consumes MCP tools as if they were local Actions"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Nested Actions:"})," ",n.jsx("code",{children:"JokeWithStoryTelling"})," contains concurrent child Actions"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Lifecycle hooks:"})," ",n.jsx("code",{children:"pre_mcp"})," enables authentication and configuration before connection"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Transport flexibility:"})," Support for both SSE and Streamable HTTP transports"]})]})]}),n.jsx("h3",{id:"pybotchi-native-mcp",children:"PyBotchi-Native MCP Features"}),n.jsxs("p",{children:["When ",n.jsx("strong",{children:"both the server and client run PyBotchi"}),", extra capabilities light up automatically. The server advertises a ",n.jsx("code",{children:"pybotchi_native"})," capability flag, and the client detects it to enable richer coordination across the MCP boundary. These features are new in ",n.jsx("strong",{children:"v4.1"}),"."]}),n.jsx("h4",{children:"Stateful Sessions & Server Callbacks"}),n.jsxs("p",{children:["By default each MCP group runs as a ",n.jsx("strong",{children:"stateful"})," session (",n.jsx("code",{children:"stateless_groups=False"}),"). A stateful session is required for server-initiated callbacks — sampling, elicitation, and logging — because the server needs an open channel back to the client. Inside a server-side action, reach the live request through"," ",n.jsx("code",{children:"context._request_context"}),":"]}),n.jsx(_,{language:"python",children:`from mcp.types import SamplingMessage, TextContent


class MathProblem(Action):
    """Solve the math problem."""

    __groups__ = {"mcp": {"group-1"}}

    equation: str = Field(description="The mathematical equation to solve.")

    async def pre(self, context: Context) -> None:
        """Execute pre process."""
        # Stateful session (default) → server-initiated callbacks are available
        result = await context._request_context.session.create_message(
            messages=[
                SamplingMessage(
                    role="user",
                    content=TextContent(type="text", text="Trigger Sampling Callback"),
                )
            ],
            max_tokens=200,
        )
        message = await context.llm.ainvoke(f"Solve \`{self.equation}\`")
        await context.add_usage(self, context.llm_model, message.usage_metadata)
        await context.add_response(self, message.text)


# Opt into stateless servers only for simple tools that never call back:
# app = build_mcp_app(transport="streamable-http", stateless_groups=True)
# Or per-group: stateless_groups={"group-1": False, "group-2": True}`}),n.jsxs(Ge,{children:[n.jsx("strong",{children:"Trade-off:"})," stateless servers (",n.jsx("code",{children:"stateless_groups=True"}),") are simpler to scale horizontally but cannot perform sampling/elicitation callbacks. Leave the default ",n.jsx("code",{children:"False"})," whenever your server actions need to talk back to the client."]}),n.jsx("h4",{children:"Context Propagation"}),n.jsxs("p",{children:["On every tool call the client sends a snapshot of its ",n.jsx("code",{children:"MCPContext"})," to the server, and the server returns its resulting context and serialized action tree back. Shared"," ",n.jsx("code",{children:"metadata"})," therefore flows across the boundary, and each context is chained via"," ",n.jsx("code",{children:"source_id"})," / ",n.jsx("code",{children:"context_id"})," so a distributed graph behaves like a single in-process one."]}),n.jsx("h4",{children:"Returning Values & Blocking Flow"}),n.jsxs("p",{children:["A server action can finish with ",n.jsx("code",{children:"ActionReturn.stop(value=...)"}),", and that signal is carried back to the client in the tool result's ",n.jsx("code",{children:"_meta"}),". Set"," ",n.jsx("code",{children:"block_return=True"})," on the ",n.jsx("code",{children:"MCPConnection"})," to honor it — the client rebuilds the ",n.jsx("code",{children:"ActionReturn"})," and can stop its own graph. Override"," ",n.jsx("code",{children:"consume_result_meta()"})," on an ",n.jsx("code",{children:"MCPToolAction"})," to inspect the propagated context or customize this behavior:"]}),n.jsx(_,{language:"python",children:`from typing import Any

from pybotchi import ActionResult
from pybotchi.mcp import MCPAction, MCPConnection, MCPContext, MCPToolAction


class GeneralChat(MCPAction):
    """Casual Generic Chat."""

    __mcp_connections__ = [
        MCPConnection(
            "testing",
            "SHTTP",
            "http://localhost:8000/group-1/mcp",
            block_return=True,   # honor a server-returned ActionReturn (e.g. STOP)
        )
    ]

    class MathProblem(MCPToolAction):  # customize a specific remote tool
        async def consume_result_meta(self, context: MCPContext, meta: dict[str, Any]) -> ActionResult:
            """Inspect the propagated server context."""
            print(f"Tool result context: {meta.get('context')}")
            # super() converts meta["return"] into an ActionReturn when block_return=True
            return await super().consume_result_meta(context, meta)`}),n.jsx("h3",{children:"Using MCP with Claude Desktop"}),n.jsx("p",{children:"Your PyBotchi MCP server can be consumed by Claude Desktop or any other MCP-compatible client. Simply configure the client to connect to your server's MCP endpoint:"}),n.jsx(_,{language:"json",children:jy})]})}function Cy(){return n.jsxs(n.Fragment,{children:[n.jsx("h2",{children:"Special Attributes"}),n.jsxs("p",{children:["Special class attributes are class-level variables prefixed and suffixed with double underscores (",n.jsx("code",{children:"__dunder__"}),"). They control how an ",n.jsx("code",{children:"Action"})," behaves during tool selection, execution, and child orchestration. Each attribute has a sensible default, so you only need to declare the ones you want to override."]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{id:"__concurrent__",children:"__concurrent__"}),n.jsxs("p",{children:["When ",n.jsx("code",{children:"True"}),", child actions that are marked concurrent run together inside an"," ",n.jsx("code",{children:"asyncio.TaskGroup"}),". This is ideal for I/O-bound steps that can overlap in time."]}),n.jsxs(Ge,{children:[n.jsx("strong",{children:"Three mixing scenarios:"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"All concurrent:"})," every selected action runs in parallel; wait for all."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Leading concurrent + trailing sequential:"})," the concurrent action starts in the background, then the sequential ones run one-by-one; wait for the background task last."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Leading sequential + trailing concurrent:"})," sequential actions run first; the concurrent one fires last; wait for it to finish."]})]})]}),n.jsx(_,{language:"python",children:`from pybotchi import Action, ActionReturn, Context


class ResearchAgent(Action):
    """Research and analyze a topic."""

    class FetchWebContent(Action):
        """Fetch content from the web."""

        # Set on the child — makes this action run inside a TaskGroup when selected
        __concurrent__: bool = True  # default: False

        url: str

        async def pre(self, context: Context) -> None:
            # I/O bound — benefits from concurrency
            content = await fetch(url)
            await context.add_response(self, content)

    class FetchDatabaseRecords(Action):
        """Fetch related records from the database."""

        __concurrent__: bool = True  # also concurrent — overlaps with FetchWebContent

        query: str

        async def pre(self, context: Context) -> None:
            records = await db.query(self.query)
            await context.add_response(self, str(records))

    async def post(self, context: Context) -> None:
        # Both child results are available here — consolidate them
        message = await context.llm.ainvoke(context.prompts)
        await context.add_response(self, message.text)`})]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{id:"__max_iteration__",children:"__max_iteration__"}),n.jsxs("p",{children:["Sets the maximum number of child selection iterations per turn. When set, the action re-runs its child selection loop up to this many times, allowing agentic loops without external recursion. On exhaustion, ",n.jsx("code",{children:"on_max_iteration()"})," is called to produce a final response."]}),n.jsx(_,{language:"python",children:`from pybotchi import Action, ActionReturn, Context


class IterativeAnalyst(Action):
    """Iteratively refine the analysis."""

    # Allow up to 5 loops through child selection
    __max_iteration__: int = 5  # default: None (no iteration)
    __first_tool_only__: bool = True  # one step at a time

    class AnalyzeData(Action):
        """Analyze the provided data."""

        insight: str

        async def pre(self, context: Context) -> None:
            await context.add_response(self, self.insight)

    class GenerateReport(Action):
        """Generate the final report."""

        async def pre(self, context: Context) -> None:
            message = await context.llm.ainvoke(context.prompts)
            await context.add_response(self, message.text)

    async def fallback(self, context: Context, content: str) -> ActionReturn:
        # When the LLM decides no tool is needed, stop iterating
        await context.add_response(self, content)
        return ActionReturn.BREAK  # breaks the iteration loop`})]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{children:"__max_self_recursion__"}),n.jsxs("p",{children:["Per-action self-recursion cap. Tracks how many times this specific action class has been called within a single turn. Once the limit is reached, the"," ",n.jsx("code",{children:"on_max_self_recursion()"})," hook is invoked — which by default returns"," ",n.jsx("code",{children:"ActionReturn.STOP"}),", halting the entire agent. Override that hook to log, notify, or return ",n.jsx("code",{children:"None"})," to let execution continue past the cap. Use this to guard against runaway recursive loops. The global equivalent on ",n.jsx("code",{children:"Context"})," is"," ",n.jsx("code",{children:"max_self_recursion"}),", which applies to all actions that do not set their own limit."]}),n.jsx(_,{language:"python",children:`from pybotchi import Action


class LoopGuardedAgent(Action):
    """Agent with a recursion safety net."""

    # Stop automatically if this action is called more than 3 times in one turn
    __max_self_recursion__: int | None = 3  # default: None (uses context.max_self_recursion)`})]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{id:"__first_tool_only__",children:"__first_tool_only__"}),n.jsxs("p",{children:["When ",n.jsx("code",{children:"True"}),", only the first tool call from the LLM response is executed, even if the model suggests multiple tools. This is useful for strictly sequential step-by-step workflows."]}),n.jsx(_,{language:"python",children:`from pybotchi import Action, ActionReturn, Context


class StepByStepAgent(Action):
    """Execute one step at a time."""

    __max_iteration__: int = 10
    __first_tool_only__: bool = True  # default: False

    class Step1(Action):
        """Execute step 1."""
        ...

    class Step2(Action):
        """Execute step 2."""
        ...

    class Step3(Action):
        """Execute step 3."""
        ...`})]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{id:"__system_prompt__",children:"__system_prompt__"}),n.jsxs("p",{children:["Overrides the system prompt used for this action's tool-selection prompt"," ",n.jsx("em",{children:"and"})," its finalization (",n.jsx("code",{children:"on_max_iteration"}),") prompt. If not set, the current conversation's system prompt is used. This lets each action specialise the LLM's persona for its own domain."]}),n.jsx(_,{language:"python",children:`from pybotchi import Action, ActionReturn, Context


class CodeReviewAgent(Action):
    """Review code for quality and security issues."""

    # Used for this action's tool-selection AND finalization prompts
    __system_prompt__: str | None = """
You are an expert code reviewer specializing in Python.
Focus on security vulnerabilities, performance issues, and code quality.
Always recommend actionable improvements.
""".strip()

    # default: None — uses the conversation's active system prompt

    class CheckSecurity(Action):
        """Check for security vulnerabilities."""
        ...

    class CheckPerformance(Action):
        """Identify performance bottlenecks."""
        ...`})]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{id:"__temperature__",children:"__temperature__"}),n.jsx("p",{children:"Overrides the model temperature for the tool selection trigger of this action. Lower values (closer to 0) make output more deterministic; higher values increase creativity. If not set, the model's default temperature is used."}),n.jsx(_,{language:"python",children:`from pybotchi import Action, ActionReturn, Context


class DeterministicRouter(Action):
    """Route requests with high consistency."""

    # Very low temperature for predictable routing decisions
    __temperature__: float | None = 0.0  # default: None (use model default)


class CreativeWriter(Action):
    """Generate creative content."""

    # Higher temperature for more varied, creative responses
    __temperature__: float | None = 1.2`})]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{id:"__default_tool__",children:"__default_tool__"}),n.jsxs("p",{children:["The action name injected as ",n.jsx("code",{children:"${default}"})," in the tool-call prompt — it is suggested to the LLM as the default choice during child selection. Defaults to"," ",n.jsx("code",{children:"DEFAULT_ACTION"})," (the string ",n.jsx("code",{children:'"DefaultAction"'}),", configurable via the ",n.jsx("code",{children:"DEFAULT_ACTION"})," env var). It only biases the prompt; it performs no routing. The real “no tool selected” path is the"," ",n.jsx("code",{children:"fallback()"})," hook."]}),n.jsx(_,{language:"python",children:`from pybotchi import Action, ActionReturn, Context, DEFAULT_ACTION


class GeneralChat(Action):
    """Casual Generic Chat."""

    # Name suggested to the LLM as the default choice in the tool-call prompt
    __default_tool__: str = DEFAULT_ACTION  # default ("DefaultAction")

    # Point it at a child so that child becomes the suggested default:
    # __default_tool__: str = "AnswerQuestion"

    class AnswerQuestion(Action):
        """Answer a specific factual question."""
        ...

    class DefaultAction(Action):
        """General assistant for any request not covered by other tools."""

        async def pre(self, context: Context) -> ActionReturn:
            message = await context.llm.ainvoke(context.prompts)
            await context.add_response(self, message.text)
            return ActionReturn.END  # stops only this DefaultAction; parent continues`})]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{id:"__agent__",children:"__agent__"}),n.jsxs("p",{children:["Tags an action as an “agent type”. When ",n.jsx("code",{children:"True"}),", the class is yielded by the ",n.jsx("code",{children:"all_agents()"})," generator — used for discovery and introspection. It has no effect on execution flow. It is"," ",n.jsx("strong",{children:"not inheritable"})," — subclasses always default back to"," ",n.jsx("code",{children:"False"})," even if the parent sets it to ",n.jsx("code",{children:"True"}),"."]}),n.jsx(_,{language:"python",children:`from pybotchi import Action


class MyAgent(Action):
    """A custom agent implementation."""

    # Not inheritable — always resets to False in subclasses
    __agent__: bool = False  # default

    ...


class MySubAgent(MyAgent):
    """Subclass."""

    # __agent__ is always False here, even though MyAgent sets it
    ...`}),n.jsxs(Ge,{children:[n.jsx("strong",{children:"Note:"})," This attribute is a marker for tooling and introspection. It is consumed today by ",n.jsx("code",{children:"all_agents()"})," but has no effect on execution flow."]})]}),n.jsxs("div",{className:"highlight-box",children:[n.jsx("h3",{children:"Quick Reference"}),n.jsx(_,{language:"python",children:`class MyAction(Action):
    __enabled__: bool = True                        # False = hidden from parent tool selection
    __system_prompt__: str | None = None            # Custom system prompt for tool selection
    __tool_call_prompt__: str | None = None         # Override full tool-selection prompt template
    __max_iteration_prompt__: str | None = None     # Override finalization prompt template
    __temperature__: float | None = None            # Model temperature override
    __max_child_selection_prompts__: int | None = None  # Sliding window for prompt history
    __default_tool__: str = DEFAULT_ACTION          # Fallback when no tool is selected
    __first_tool_only__: bool = False               # Only execute the first tool call
    __concurrent__: bool = False                    # Run this action concurrently (set on child)
    __max_iteration__: int | None = None            # Max child selection loop iterations
    __max_self_recursion__: int | None = None       # Per-action self-call cap (calls on_max_self_recursion on breach)
    # ── not inheritable ──────────────────────────────────────────────────────
    __agent__: bool = False                         # Mark as agent type (no runtime effect)
    __display_name__: str                           # Human-friendly name for notify()/MCP
    __groups__: Groups | set[str] | None = None     # gRPC/MCP/a2a group membership`})]})]})}function ky(){return n.jsxs(n.Fragment,{children:[n.jsx("h2",{children:"Complex Nesting"}),n.jsx("p",{children:"PyBotchi actions are defined as Python classes. Child actions are simply inner classes, which means the full power of Python inheritance and composition applies. This section shows patterns from simple two-level nesting through deep multi-level hierarchies and mixed inheritance trees."}),n.jsx("h3",{children:"Basic Nesting"}),n.jsx("p",{children:"The simplest pattern: define child actions as inner classes. The parent's LLM tool-call selects which child to run."}),n.jsx(_,{language:"python",children:`from pybotchi import Action, ActionReturn, Context
from pydantic import Field


class GeneralChat(Action):
    """Casual Generic Chat."""

    class MathProblem(Action):
        """Solve the math problem."""

        answer: str = Field(description="Your mathematical answer")

        async def pre(self, context: Context) -> None:
            await context.add_response(self, self.answer)

    class Translation(Action):
        """Translate to a different language."""

        async def pre(self, context: Context) -> None:
            message = await context.llm.ainvoke(context.prompts)
            await context.add_usage(self, context.llm_model, message.usage_metadata)
            await context.add_response(self, message.text)`}),n.jsx("h3",{id:"deep-hierarchies",children:"Deep Hierarchies"}),n.jsx("p",{children:"Children can themselves have children, forming multi-level trees. Each level gets its own LLM tool-call, progressively narrowing the task."}),n.jsx(_,{language:"python",children:`from pybotchi import Action, ActionReturn, ChatRole, Context


class Deep(Action):
    """Respond to a joke."""

    class Funny(Action):
        """Use when the joke is funny."""

        async def pre(self, context: Context) -> ActionReturn:
            await context.add_message(ChatRole.ASSISTANT, "Ha! That's funny.")
            return ActionReturn.STOP

    class NotFunny(Action):
        """Use when the joke is not funny."""

        async def pre(self, context: Context) -> ActionReturn:
            await context.add_message(ChatRole.ASSISTANT, "I don't get it.")
            return ActionReturn.STOP


class GeneralChat(Action):
    """Casual Generic Chat."""

    # Inherits Deep's children (Funny and NotFunny)
    class Joke(Deep):
        """Respond to jokes."""

    class Greetings(Action):
        """Reply to hello/hi."""

        async def pre(self, context: Context) -> ActionReturn:
            await context.add_response(self, "Hello!")
            return ActionReturn.END`}),n.jsx("h3",{children:"Inheritance Patterns"}),n.jsx("p",{children:"Standalone action classes can be used as base classes and then inherited into any parent. This lets you define reusable action logic once and compose it into multiple agents."}),n.jsx(_,{language:"python",children:`from pybotchi import Action, ActionReturn, Context


# --- Reusable base action ---
class Mini(Action):
    """Reply to good-byes."""

    async def fallback(self, context: Context, content: str) -> ActionReturn:
        await context.add_response(self, content)
        return ActionReturn.END


class Nano(Action):
    """Reply to greetings."""

    async def pre(self, context: Context) -> ActionReturn:
        await context.add_response(self, "Hello")
        return ActionReturn.END


# --- Compose into a parent ---
class GeneralChat(Action):
    """Casual Generic Chat."""

    # Each child inherits the logic from the base class
    class Goodbyes(Mini):
        """Reply to good-byes."""  # class doc overrides the tool description

    class Greetings(Nano):
        """Reply to greetings."""`}),n.jsxs(Ge,{children:["The class docstring of each inner class becomes its ",n.jsx("strong",{children:"tool description"})," for the LLM tool-call. Override it in the subclass to give the tool a more contextual description even when inheriting from a base action."]}),n.jsx("h3",{children:"Mixed Patterns"}),n.jsx("p",{children:"All patterns can be freely combined: some children inherit from bases, some are defined inline, and children can themselves have multiple levels of nesting."}),n.jsx(_,{language:"python",children:`from pybotchi import Action, ActionReturn, ChatRole, Context
from pydantic import Field


class Deep(Action):
    """Respond to a joke."""

    class Funny(Action):
        """Use when the joke is funny."""

        async def pre(self, context: Context) -> ActionReturn:
            await context.add_message(ChatRole.ASSISTANT, "your funny")
            return ActionReturn.END

    class NotFunny(Action):
        """Use when the joke is not funny."""

        async def pre(self, context: Context) -> ActionReturn:
            await context.add_message(ChatRole.ASSISTANT, "your not funny")
            return ActionReturn.END


class Mini(Action):
    """Reply to good-byes."""

    async def fallback(self, context: Context, content: str) -> ActionReturn:
        await context.add_response(self, content)
        return ActionReturn.END


class Nano(Action):
    """Reply to greetings."""

    async def pre(self, context: Context) -> ActionReturn:
        await context.add_response(self, "Hello")
        return ActionReturn.END


class GeneralChat(Action):
    """Casual Generic Chat with 5 specialised child actions."""

    class Joke(Deep):
        """Respond to jokes — inherits Funny/NotFunny sub-actions."""

    class Goodbyes(Mini):
        """Reply to good-byes."""

    class Greetings(Nano):
        """Reply to greetings."""

    class MathProblem(Action):
        """Solve a math problem."""

        answer: str = Field(description="Your mathematical answer")

        async def pre(self, context: Context) -> None:
            await context.add_response(self, self.answer)

    class Translation(Action):
        """Translate to a different language."""

        async def pre(self, context: Context) -> None:
            message = await context.llm.ainvoke(context.prompts)
            await context.add_usage(self, context.llm_model, message.usage_metadata)
            await context.add_response(self, message.text)`}),n.jsxs("div",{className:"highlight-box",children:[n.jsx("h3",{children:"How Child Discovery Works"}),n.jsxs("p",{children:["PyBotchi automatically discovers all inner classes that inherit from ",n.jsx("code",{children:"Action"})," ","and presents them to the LLM as tool options. The order they are defined in the class body is preserved. There is no limit to nesting depth — each level triggers its own tool-call with only that level's children visible to the model."]})]})]})}function Ay(){return n.jsxs(n.Fragment,{children:[n.jsx("h2",{children:"Runtime Builder"}),n.jsxs("p",{children:["PyBotchi lets you modify the agent graph at runtime. You can add or remove child actions after class definition, and you can build circular or iterative workflows using four distinct patterns. This section covers ",n.jsx("code",{children:"add_child"})," / ",n.jsx("code",{children:"remove_child"})," ","and all four loop approaches."]}),n.jsx("h3",{id:"add_child-remove_child",children:"add_child / remove_child"}),n.jsxs("p",{children:["Both ",n.jsx("code",{children:"add_child"})," and ",n.jsx("code",{children:"remove_child"})," are class-level methods. They mutate the action's child list permanently (for the lifetime of the process), so they are typically called at module level after class definitions — not inside hooks."]}),n.jsx(_,{language:"python",children:`from pybotchi import Action


class Router(Action):
    """Routes requests."""


class WeatherTool(Action):
    """Get the current weather."""
    ...


class SummaryTool(Action):
    """Summarize results."""
    ...


# Add children after class definition
Router.add_child(WeatherTool)
Router.add_child(SummaryTool)

# Remove a child if needed — remove_child takes the tool NAME (a string)
Router.remove_child("SummaryTool")`}),n.jsxs(Ge,{children:[n.jsx("strong",{children:"add_child"})," accepts a class and an optional alias string that overrides the class name used as the tool name. This is useful when adding the same action type under multiple names, or when creating circular references."]}),n.jsx("h3",{id:"iteration-pattern",children:"Iteration Pattern"}),n.jsxs("p",{children:["The simplest loop: set ",n.jsx("code",{children:"__max_iteration__"})," to allow the parent to cycle through child selection multiple times. A ",n.jsx("code",{children:"fallback"})," returning"," ",n.jsx("code",{children:"ActionReturn.BREAK"})," stops the loop early when the LLM signals it is done."]}),n.jsx(_,{language:"python",children:`from pybotchi import Action, ActionReturn, ChatRole, Context


class WeatherAgent(Action):
    """Get weather and synthesize a response."""

    __max_iteration__ = 5  # allow up to 5 tool-selection rounds

    async def fallback(self, context: Context, content: str) -> ActionReturn:
        """LLM replied without a tool call — we're done."""
        await context.add_message(ChatRole.ASSISTANT, content)
        return ActionReturn.BREAK  # break the iteration loop

    class Weather(Action):
        """Get the current weather for a location."""

        location: str

        async def pre(self, context: Context) -> None:
            if self.location.lower() == "yorkshire":
                await context.add_response(self, "It's cold and wet.")
            else:
                await context.add_response(self, "It's warm and sunny.")`}),n.jsx("h3",{id:"circular-actions",children:"Direct Circular Pattern"}),n.jsxs("p",{children:["Wire a child action back to its parent (or any ancestor) using ",n.jsx("code",{children:"add_child"})," with a ",n.jsx("code",{children:'"DefaultAction"'})," alias. When the child finishes (returning ",n.jsx("code",{children:"None"}),"), it triggers a new tool-call on the aliased parent, creating a loop until ",n.jsx("code",{children:"fallback"})," fires."]}),n.jsx(_,{language:"python",children:`from pybotchi import Action, ActionReturn, ChatRole, Context


class WeatherAgent(Action):
    """Iterative weather agent using direct circular reference."""

    async def fallback(self, context: Context, content: str) -> ActionReturn:
        await context.add_message(ChatRole.ASSISTANT, content)
        return ActionReturn.STOP

    class Weather(Action):
        """Get the current weather for a location."""

        location: str

        async def pre(self, context: Context) -> None:
            if self.location.lower() == "yorkshire":
                await context.add_response(self, "It's cold and wet.")
            else:
                await context.add_response(self, "It's warm and sunny.")


# Wire Weather → WeatherAgent under the alias "DefaultAction"
# When Weather.pre() returns None, WeatherAgent is selected next
WeatherAgent.Weather.add_child(WeatherAgent, "DefaultAction")`}),n.jsx("h3",{children:"Indirect Circular Pattern"}),n.jsxs("p",{children:["Call ",n.jsx("code",{children:"execute"})," on a parent action instance directly from inside a child's hook. This creates an indirect recursive loop that is fully controlled by your code rather than the tool-call mechanism."]}),n.jsx(_,{language:"python",children:`from pybotchi import Action, ActionResult, ActionReturn, ChatRole, Context


class WeatherAgent(Action):
    """Iterative weather agent using indirect execution."""

    async def fallback(self, context: Context, content: str) -> ActionReturn:
        await context.add_message(ChatRole.ASSISTANT, content)
        return ActionReturn.STOP

    class Weather(Action):
        """Get the current weather for a location."""

        location: str

        async def pre(self, context: Context) -> ActionResult:
            if self.location.lower() == "yorkshire":
                await context.add_response(self, "It's cold and wet.")
            else:
                await context.add_response(self, "It's warm and sunny.")

            # Directly invoke the parent action to continue the loop
            result = await WeatherAgent().execute(context, self)
            return result`}),n.jsxs(Ge,{children:["The indirect circular pattern gives you precise control over ",n.jsx("em",{children:"when"})," to recurse. You can add conditions before calling ",n.jsx("code",{children:"execute"})," to implement custom termination logic without relying on ",n.jsx("code",{children:"fallback"}),"."]}),n.jsx("h3",{children:"DefaultAction Pattern"}),n.jsxs("p",{children:["Declare an inner class named ",n.jsx("code",{children:"DefaultAction"})," as a child. It acts as the termination step: when the LLM stops calling tools and falls back to this action, it generates the final response and returns ",n.jsx("code",{children:"ActionReturn.STOP"}),". Combine with",n.jsx("code",{children:"add_child"})," to wire in the loop."]}),n.jsx(_,{language:"python",children:`from pybotchi import Action, ActionReturn, ChatRole, Context


class WeatherAgent(Action):
    """Weather agent with an explicit DefaultAction terminator."""

    class DefaultAction(Action):
        """General assistant — generates final response when no tool is needed."""

        async def pre(self, context: Context) -> ActionReturn:
            message = await context.llm.ainvoke(context.prompts)
            await context.add_message(ChatRole.ASSISTANT, message.text)
            return ActionReturn.STOP  # stop the whole agent

    class Weather(Action):
        """Get the current weather for a location."""

        location: str

        async def pre(self, context: Context) -> None:
            if self.location.lower() == "yorkshire":
                await context.add_response(self, "It's cold and wet.")
            else:
                await context.add_response(self, "It's warm and sunny.")
            # returns None — continues, triggers WeatherAgent again


# Wire Weather back to WeatherAgent; DefaultAction handles final output
WeatherAgent.Weather.add_child(WeatherAgent, "DefaultAction")`}),n.jsxs("div",{className:"highlight-box",children:[n.jsx("h3",{children:"Choosing a Pattern"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"Iteration"})," — simplest; use when you need a bounded loop with a clear max step count (",n.jsx("code",{children:"__max_iteration__"}),")."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Direct circular"})," — clean; use when you want the tool-call mechanism to handle looping with no extra boilerplate."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Indirect circular"})," — most control; use when termination logic is complex or conditional."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"DefaultAction"})," — explicit; use when you want a dedicated final-step action with custom generation logic and the loop wired via ",n.jsx("code",{children:"add_child"}),"."]})]})]})]})}const st="https://github.com/amadolid/pybotchi/blob/master/examples",Sy=[{id:"getting-started",title:"🚀 Getting Started",desc:"Start here if you're new to PyBotchi. These examples demonstrate the core concepts with minimal code, perfect for understanding the fundamentals.",examples:[{name:"tiny.py",desc:"Minimal implementation to get you started",href:`${st}/tiny.py`},{name:"full_spec.py",desc:"Complete feature demonstration showcasing all core capabilities",href:`${st}/full_spec.py`}]},{id:"execution-patterns",title:"🔄 Execution Patterns",desc:"Learn how to control execution flow in your agent systems. Master sequential processing, nested workflows, and complex orchestration patterns.",examples:[{name:"sequential.py",desc:"Sequential action execution via iteration or multi-tool calls",href:`${st}/sequential.py`},{name:"nested_combination.py",desc:"Complex hierarchical agent structures with parent-child relationships",href:`${st}/nested_combination.py`}]},{id:"parallel-processing",title:"⚡ Parallel Processing",desc:"Maximize performance with concurrent execution. These examples show how to run multiple actions simultaneously using async patterns and multi-threading.",examples:[{name:"concurrent_combination.py",desc:"Async-based parallel action execution for I/O-bound tasks",href:`${st}/concurrent_combination.py`},{name:"concurrent_threading_combination.py",desc:"Thread-based parallel processing for CPU-bound operations",href:`${st}/concurrent_threading_combination.py`}]},{id:"grpc",title:"🌐 Distributed Systems",desc:"Scale your agents across multiple servers with gRPC. Deploy compute-intensive actions remotely while maintaining unified orchestration.",examples:[{name:"grpc_pybotchi_agent.py",desc:"Set up a gRPC server to expose actions as remote services",href:`${st}/grpc/grpc_pybotchi_agent.py`},{name:"grpc_pybotchi_client.py",desc:"Connect to remote gRPC servers and orchestrate distributed agents",href:`${st}/grpc/grpc_pybotchi_client.py`}]},{id:"mcp-protocol",title:"🔌 MCP Protocol",desc:"Integrate with the Model Context Protocol ecosystem. Expose your agents as MCP tools or consume external MCP servers within your workflows.",examples:[{name:"mcp_pybotchi_agent.py",desc:"Create an MCP server to expose actions to Claude Desktop and other clients",href:`${st}/mcp/mcp_pybotchi_agent.py`},{name:"mcp_pybotchi_client.py",desc:"Consume MCP servers as child actions in your orchestration",href:`${st}/mcp/mcp_pybotchi_client.py`},{name:"mcp_pybotchi_client_for_mcp_atlassian.py",desc:"Integrate Atlassian's MCP services (Jira, Confluence) into PyBotchi workflows",href:`${st}/mcp/mcp_pybotchi_client_for_mcp_atlassian.py`}]},{id:"production-use-cases",title:"💼 Production Use Cases",desc:"Real-world applications demonstrating PyBotchi in production scenarios with advanced patterns like WebSocket communication and streaming responses.",examples:[{name:"interactive_action.py",desc:"Real-time bidirectional communication using WebSocket for interactive agents",href:`${st}/interactive_action.py`}]},{id:"framework-comparisons",title:"⚖️ Framework Comparisons",desc:"See how PyBotchi compares to other agent frameworks. Same problem, different approaches—compare code clarity, flexibility, and implementation complexity.",examples:[{name:"PyBotchi Implementation",desc:"Weather agent using PyBotchi's lifecycle and orchestration patterns",href:`${st}/vs/pybotchi_approach.py`},{name:"LangGraph Implementation",desc:"Same weather agent built with LangGraph for direct comparison",href:`${st}/vs/langgraph_approach.py`}]}];function by(){return n.jsxs(n.Fragment,{children:[n.jsx("h2",{children:"Examples"}),n.jsx("p",{children:"Explore practical examples demonstrating PyBotchi's capabilities, from basic implementations to complex real-world applications. All examples are available in the GitHub repository with complete, runnable code."}),n.jsx("div",{className:"examples-grid",children:Sy.map(({id:s,title:u,desc:c,examples:d})=>n.jsxs("div",{className:"example-category",id:s,children:[n.jsx("h3",{children:u}),n.jsx("p",{className:"category-description",children:c}),n.jsx("ul",{className:"example-list",children:d.map(({name:v,desc:w,href:k})=>n.jsx("li",{children:n.jsxs("a",{href:k,target:"_blank",rel:"noreferrer",className:"example-link",children:[n.jsx("span",{className:"example-name",children:v}),n.jsx("span",{className:"example-desc",children:w})]})},v))})]},u))}),n.jsxs("div",{className:"examples-footer",children:[n.jsx("p",{children:"Clone the repository and run them locally to see PyBotchi in action."}),n.jsx("a",{href:"https://github.com/amadolid/pybotchi/tree/master/examples",className:"btn btn-primary",target:"_blank",rel:"noreferrer",children:"Browse All Examples on GitHub"})]})]})}function Ny(){return n.jsxs(n.Fragment,{children:[n.jsx("h2",{children:"Contributing"}),n.jsx("div",{className:"contributing-intro",children:n.jsx("p",{children:"Thank you for your interest in contributing to PyBotchi! We welcome bug reports, feature requests, documentation improvements, code contributions, and example applications."})}),n.jsx("h3",{id:"development-setup",children:"🚀 Development Setup"}),n.jsxs("div",{className:"setup-steps",children:[n.jsxs("div",{className:"setup-step",children:[n.jsx("div",{className:"step-number",children:"1"}),n.jsxs("div",{className:"step-content",children:[n.jsx("h4",{children:"Fork and clone the repository"}),n.jsx(_,{language:"bash",children:`git clone https://github.com/YOUR_USERNAME/pybotchi.git
cd pybotchi`})]})]}),n.jsxs("div",{className:"setup-step",children:[n.jsx("div",{className:"step-number",children:"2"}),n.jsxs("div",{className:"step-content",children:[n.jsx("h4",{children:"Install dependencies"}),n.jsx(_,{language:"bash",children:`pip install poetry
poetry install --all-extras`})]})]}),n.jsxs("div",{className:"setup-step",children:[n.jsx("div",{className:"step-number",children:"3"}),n.jsxs("div",{className:"step-content",children:[n.jsx("h4",{children:"Set up pre-commit hooks"}),n.jsx(_,{language:"bash",children:"pre-commit install"}),n.jsx("p",{className:"note-text",children:"Once installed, pre-commit will automatically run code formatting and quality checks on every commit."})]})]}),n.jsxs("div",{className:"setup-step",children:[n.jsx("div",{className:"step-number",children:"4"}),n.jsxs("div",{className:"step-content",children:[n.jsx("h4",{children:"Create a feature branch"}),n.jsx(_,{language:"bash",children:"git checkout -b feature/your-feature-name"})]})]})]}),n.jsx("h3",{children:"🧪 Code Quality"}),n.jsx("p",{children:"Pre-commit hooks will automatically run formatting and quality checks when you commit. To manually run checks:"}),n.jsx(_,{language:"bash",children:`# Run all pre-commit hooks manually
pre-commit run --all-files

# Or run specific tools
ruff check --fix .
ruff format .
mypy pybotchi`}),n.jsx("h3",{id:"code-style",children:"📝 Code Style"}),n.jsx("div",{className:"style-guidelines",children:n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"Line length:"})," 120 characters max"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Python:"})," 3.12+ target"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Docstrings:"})," Single sentence if descriptive enough, Google-style for complex cases"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Type hints:"})," Required for function signatures"]})]})}),n.jsx("p",{children:"Example:"}),n.jsx(_,{language:"python",children:`"""Example action module demonstrating PyBotchi coding standards."""

from pybotchi import Action, ActionReturn, Context
from pydantic import Field


class ExampleAction(Action):
    """Processes user requests and generates responses."""

    field_name: str = Field(description="Field description")

    async def pre(self, context: Context) -> None:
        """Execute pre-processing logic before child actions."""`}),n.jsx("h3",{children:"💬 Commit Messages"}),n.jsx("p",{children:"Use clear, descriptive commit messages with capitalized type prefixes:"}),n.jsx(_,{language:"bash",children:`[TYPE]: Description

[optional body]`}),n.jsx("div",{className:"commit-types",children:[{badge:"[MAJOR]",desc:"Breaking changes, major refactors"},{badge:"[MINOR]",desc:"New features, enhancements"},{badge:"[BUGFIX]",desc:"Bug fixes"},{badge:"[DOCS]",desc:"Documentation changes"},{badge:"[CHORE]",desc:"Maintenance, dependencies"},{badge:"[PERF]",desc:"Performance improvements"}].map(({badge:s,desc:u})=>n.jsxs("div",{className:"commit-type-card",children:[n.jsx("span",{className:"type-badge",children:s}),n.jsx("p",{children:u})]},s))}),n.jsxs(Ge,{children:[n.jsx("strong",{children:"Note:"})," Types can be anything descriptive that clearly communicates the change (e.g., [SECURITY], [STYLE], etc.)"]}),n.jsx("p",{children:n.jsx("strong",{children:"Examples:"})}),n.jsx(_,{language:"bash",children:`[MINOR]: Add custom metadata support for gRPC connections
[BUGFIX]: Resolve SSE transport disconnection in MCP
[DOCS]: Update installation instructions
[MAJOR]: Refactor Action lifecycle hooks`}),n.jsx("h3",{id:"pull-requests",children:"🔄 Pull Request Process"}),n.jsxs("div",{className:"pr-steps",children:[n.jsxs("div",{className:"pr-step",children:[n.jsx("h4",{children:"1. Commit your changes"}),n.jsx("p",{children:"Pre-commit hooks will automatically check code quality"})]}),n.jsxs("div",{className:"pr-step",children:[n.jsx("h4",{children:"2. Update documentation"}),n.jsx("p",{children:"If needed, update relevant docs"})]}),n.jsxs("div",{className:"pr-step",children:[n.jsx("h4",{children:"3. Rebase on main"}),n.jsx(_,{language:"bash",children:`git fetch origin
git rebase origin/main`})]}),n.jsxs("div",{className:"pr-step",children:[n.jsx("h4",{children:"4. Push and create PR"}),n.jsx("p",{children:"Include:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Clear title (following commit format)"}),n.jsx("li",{children:"Description of changes"}),n.jsx("li",{children:'Reference to related issues (e.g., "Fixes #123")'})]})]})]}),n.jsxs("div",{className:"pr-checklist",children:[n.jsx("h4",{children:"PR Checklist"}),n.jsxs("ul",{children:[n.jsx("li",{children:"☑ Code follows style guidelines (enforced by pre-commit)"}),n.jsx("li",{children:"☑ Documentation updated"}),n.jsx("li",{children:"☑ No breaking changes (or documented)"})]})]}),n.jsx("h3",{children:"🐛 Reporting Bugs"}),n.jsx("p",{children:"Include in your bug report:"}),n.jsx("div",{className:"contribution-types",children:[{title:"Clear Description",desc:"What's the issue you're experiencing?"},{title:"Steps to Reproduce",desc:"How can we recreate the problem?"},{title:"Expected vs Actual",desc:"What should happen vs what actually happens?"},{title:"Environment",desc:"PyBotchi version, Python version, OS"}].map(({title:s,desc:u})=>n.jsxs("div",{className:"contribution-card",children:[n.jsx("h4",{children:s}),n.jsx("p",{children:u})]},s))}),n.jsx("h3",{children:"💡 Feature Requests"}),n.jsx("p",{children:"Include in your proposal:"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"Feature description"})," — What are you proposing?"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Use case"})," — What problem does it solve?"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Proposed implementation"})," — If you have ideas"]})]}),n.jsx("h3",{children:"📖 Documentation"}),n.jsx("p",{children:"Help improve:"}),n.jsx("div",{className:"doc-areas",children:[{icon:"📚",title:"API Reference"},{icon:"📝",title:"Tutorials & Guides"},{icon:"💼",title:"Real-world Examples"},{icon:"✨",title:"Best Practices"}].map(({icon:s,title:u})=>n.jsxs("div",{className:"doc-card",children:[n.jsx("span",{children:s}),n.jsx("h4",{children:u})]},u))}),n.jsx("h3",{children:"🤝 Community Guidelines"}),n.jsx("div",{className:"community-guidelines",children:n.jsxs("ul",{children:[n.jsx("li",{children:"Be respectful and constructive"}),n.jsx("li",{children:"Provide helpful feedback"}),n.jsx("li",{children:"Work collaboratively"}),n.jsx("li",{children:"Welcome contributors of all backgrounds"})]})}),n.jsxs("div",{className:"highlight-box",children:[n.jsx("h3",{children:"📄 License"}),n.jsx("p",{children:"By contributing, you agree that your contributions will be licensed under the Apache License 2.0."})]}),n.jsxs("div",{className:"contributing-footer",children:[n.jsx("p",{children:"Thank you for contributing to PyBotchi! 🚀"}),n.jsx("a",{href:"https://github.com/amadolid/pybotchi",className:"btn btn-primary",target:"_blank",rel:"noreferrer",children:"View on GitHub"})]})]})}function Py(){return n.jsxs(n.Fragment,{children:[n.jsx("h2",{children:"API Reference"}),n.jsx("p",{children:"Complete reference for all PyBotchi classes, methods, attributes, and utilities. Only override or set what you need — every attribute has a sensible default."}),n.jsx("h2",{id:"execution-flow",children:"Execution Flow"}),n.jsxs("p",{children:["Every call to ",n.jsx("code",{children:"context.start(MyAction)"})," follows this exact sequence:"]}),n.jsx(_,{language:"python",children:`context.start(MyAction)
  └─ validates prompts[0] is system role
  └─ action.execute(context)
       └─ sets _parent, optionally detaches context, checks self-recursion
            [on breach: on_max_self_recursion() → default STOP]
       └─ pre(context)
       └─ iteration loop (up to __max_iteration__ times):
            └─ execution(context)
                 ├─ get_child_actions(context)  → filtered children dict
                 ├─ [fast path: 1 child, 0 Pydantic fields, no fallback → run directly, no LLM]
                 ├─ child_selection(context, children)  → selected [(action, args), ...]
                 │    └─ default: LLM tool call (tool_choice="auto" if fallback, "any" if Anthropic+no fallback, "required" otherwise)
                 │    └─ for each tool call: instantiate child; on failure → on_child_init_error()
                 ├─ run selected children (concurrent or sequential based on child's __concurrent__)
                 └─ fallback(context, content) if LLM selected nothing
                      [if zero children: LLM is auto-invoked first, result passed to fallback]
            [after loop: if STOP → return early]
            [after loop: if exhausted → on_max_iteration(); if result.is_end → return early]
       └─ post(context)
       └─ finally:
            ├─ cleanup(context)  [always runs, even on END/BREAK/STOP/errors]
            └─ commit_context(context, child_context)  [only if __detached__ = True; runs even if cleanup raises]`}),n.jsx("h2",{id:"action-class-variables",children:"Action Class Variables"}),n.jsxs("p",{children:["Declare these as class-level annotations on your ",n.jsx("code",{children:"Action"})," subclass. Attributes marked ",n.jsx("strong",{children:"not inheritable"})," always reset to their default in subclasses."]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{children:"__enabled__"}),n.jsxs("p",{children:["Type: ",n.jsx("code",{children:"bool"}),"  |  Default: ",n.jsx("code",{children:"True"})]}),n.jsxs("p",{children:["Whether this action appears in ",n.jsx("code",{children:"get_child_actions()"}),". Can be overridden per-request via ",n.jsx("code",{children:"context.allowed_actions"}),". Set ",n.jsx("code",{children:"False"})," at class level to hide an action entirely by default."]}),n.jsx(_,{language:"python",children:`class BetaFeature(Action):
    """Not ready for production."""
    __enabled__: bool = False   # hidden from parent LLM tool selection`})]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{children:"__concurrent__"}),n.jsxs("p",{children:["Type: ",n.jsx("code",{children:"bool"}),"  |  Default: ",n.jsx("code",{children:"False"})]}),n.jsxs("p",{children:["Set on ",n.jsx("strong",{children:"child actions"}),", not the parent. When ",n.jsx("code",{children:"True"}),", this child runs inside an ",n.jsx("code",{children:"asyncio.TaskGroup"})," concurrently alongside other concurrent children. Mixed lists (some concurrent, some sequential) are supported — concurrent ones run in the background while sequential ones run in order."]}),n.jsx(_,{language:"python",children:`class Pipeline(Action):
    """Orchestrates the pipeline."""

    class FetchWeb(Action):
        """Fetch web content."""
        __concurrent__: bool = True   # spawned as a background task in TaskGroup
        url: str

    class FetchDB(Action):
        """Fetch database records."""
        __concurrent__: bool = True   # also a background task — overlaps with FetchWeb

    class Summarize(Action):
        """Summarize all fetched content."""
        # __concurrent__ = False (default) — runs inline at its position in next_actions`}),n.jsxs(Ge,{children:["Execution iterates ",n.jsx("code",{children:"next_actions"})," in order. Concurrent children (",n.jsx("code",{children:"__concurrent__=True"}),") are spawned as ",n.jsx("code",{children:"TaskGroup"})," tasks and run in the background. Sequential children (",n.jsx("code",{children:"__concurrent__=False"}),") are awaited inline ",n.jsx("strong",{children:"at their position"})," in the list — they do not automatically wait for earlier concurrent tasks to finish first."]})]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{children:"__max_iteration__"}),n.jsxs("p",{children:["Type: ",n.jsx("code",{children:"int | None"}),"  |  Default: ",n.jsx("code",{children:"None"})]}),n.jsxs("p",{children:["Loops ",n.jsx("code",{children:"execution()"})," up to N times. ",n.jsx("code",{children:"None"})," means run once (no loop). On exhaustion ",n.jsx("code",{children:"on_max_iteration()"})," is called. Use ",n.jsx("code",{children:"ActionReturn.BREAK"})," ","to exit the loop early, or ",n.jsx("code",{children:"ActionReturn.STOP"})," to stop the entire agent."]}),n.jsx(_,{language:"python",children:`class Researcher(Action):
    __max_iteration__: int = 5   # up to 5 iterations
    __first_tool_only__: bool = True

    class Search(Action):
        """Search the web for information."""
        query: str

    class Summarize(Action):
        """Produce the final answer — call this when enough info is gathered."""

        async def pre(self, context: Context) -> ActionReturn:
            msg = await context.llm.ainvoke(context.prompts)
            await context.add_response(self, msg.text)
            return ActionReturn.BREAK   # break the iteration loop`})]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{children:"__max_self_recursion__"}),n.jsxs("p",{children:["Type: ",n.jsx("code",{children:"int | None"}),"  |  Default: ",n.jsx("code",{children:"None"})]}),n.jsxs("p",{children:["Per-class self-recursion limit. Takes priority over ",n.jsx("code",{children:"context.max_self_recursion"}),". Checked in ",n.jsx("code",{children:"check_self_recursion()"})," each time this action class is about to execute. When the limit is exceeded, the ",n.jsx("code",{children:"on_max_self_recursion()"})," hook is invoked — which by default returns ",n.jsx("code",{children:"ActionReturn.STOP"}),". Override that hook to run side effects or return ",n.jsx("code",{children:"None"})," to keep going past the cap."]})]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{children:"__first_tool_only__"}),n.jsxs("p",{children:["Type: ",n.jsx("code",{children:"bool"}),"  |  Default: ",n.jsx("code",{children:"False"})]}),n.jsxs("p",{children:["When ",n.jsx("code",{children:"True"}),": sets ",n.jsx("code",{children:"parallel_tool_calls=False"})," on the LLM binding AND only the first selected action runs, regardless of how many the LLM called. Combine with ",n.jsx("code",{children:"__max_iteration__"})," for strict step-by-step workflows."]})]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{children:"__system_prompt__"}),n.jsxs("p",{children:["Type: ",n.jsx("code",{children:"str | None"}),"  |  Default: ",n.jsx("code",{children:"None"})]}),n.jsxs("p",{children:["Replaces ",n.jsx("code",{children:"${system}"})," in the tool-call prompt and the finalization prompt. Also used as the MCP tool's system prompt when this action is exposed as a server. Falls back to ",n.jsx("code",{children:'context.prompts[0]["content"]'})," when ",n.jsx("code",{children:"None"}),"."]}),n.jsx(_,{language:"python",children:`class CodeReviewer(Action):
    __system_prompt__: str | None = """
You are a senior Python engineer. Review for security, performance, and correctness.
""".strip()`})]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{children:"__temperature__"}),n.jsxs("p",{children:["Type: ",n.jsx("code",{children:"float | None"}),"  |  Default: ",n.jsx("code",{children:"None"})]}),n.jsxs("p",{children:["Applied as ",n.jsxs("code",{children:[".with_config(configurable=","{",'"llm_temperature": value',"}",")"]})," on the LLM. Affects tool selection, fallback invocation, and ",n.jsx("code",{children:"on_max_iteration"}),".",n.jsx("code",{children:"None"})," uses the model's configured default."]}),n.jsx(_,{language:"python",children:`class PreciseRouter(Action):
    __temperature__: float | None = 0.0   # deterministic routing

class CreativeWriter(Action):
    __temperature__: float | None = 1.2   # more varied output`})]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{children:"__max_child_selection_prompts__"}),n.jsxs("p",{children:["Type: ",n.jsx("code",{children:"int | None"}),"  |  Default: ",n.jsx("code",{children:"None"})]}),n.jsxs("p",{children:["Sliding window: only the last N prompts (minimum index 1, always keeping the system prompt) are sent to the LLM during ",n.jsx("code",{children:"child_selection()"}),". Useful for keeping token costs low in long iteration loops. ",n.jsx("code",{children:"None"})," sends all prompts."]}),n.jsx(_,{language:"python",children:`class LongRunningAgent(Action):
    __max_iteration__: int = 20
    __max_child_selection_prompts__: int = 6   # only last 6 messages sent to LLM each cycle`})]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{children:"__default_tool__"}),n.jsxs("p",{children:["Type: ",n.jsx("code",{children:"str"}),"  |  Default: ",n.jsx("code",{children:'"DefaultAction"'})," ","(configurable via ",n.jsx("code",{children:"DEFAULT_ACTION"})," env var)"]}),n.jsxs("p",{children:["Name of the action injected as ",n.jsx("code",{children:"${default}"})," in the tool-call prompt template — it acts as the suggested default choice for the LLM. When the LLM selects it, that action ",n.jsx("strong",{children:"runs normally"})," like any other child."]}),n.jsxs("p",{children:[n.jsx("code",{children:"fallback()"})," is separate: it is only called when"," ",n.jsx("code",{children:"fallback"})," is implemented ",n.jsx("em",{children:"and"})," the LLM did not select any tool at all. The two are independent mechanisms."]}),n.jsx(_,{language:"python",children:`from pybotchi import Action, ActionReturn, Context

class Router(Action):
    # "GeneralAnswer" is suggested to the LLM as the default choice in the prompt.
    # The LLM can still pick any other child; this just biases the selection.
    __default_tool__: str = "GeneralAnswer"

    class AnswerQuestion(Action):
        """Answer a specific factual question."""

    class GeneralAnswer(Action):
        """General-purpose response for anything not covered above."""

        async def pre(self, context: Context) -> ActionReturn:
            msg = await context.llm.ainvoke(context.prompts)
            await context.add_response(self, msg.text)
            return ActionReturn.END  # stops only this GeneralAnswer; parent continues

    # fallback() is NOT called when GeneralAnswer runs — it would only be called
    # if fallback() were defined here AND the LLM selected no tool at all.`})]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{children:"__tool_call_prompt__"}),n.jsxs("p",{children:["Type: ",n.jsx("code",{children:"str | None"}),"  |  Default: ",n.jsx("code",{children:"None"})]}),n.jsxs("p",{children:["Replaces the entire tool-selection system prompt template. Supports placeholders:"," ",n.jsx("code",{children:"${tool_choice}"}),", ",n.jsx("code",{children:"${default}"}),", and"," ",n.jsx("code",{children:"${system}"}),". Falls back to"," ",n.jsx("code",{children:"DEFAULT_TOOL_CALL_PROMPT"})," (overridable via env var)."]}),n.jsx(_,{language:"python",children:`class MyAction(Action):
    __tool_call_prompt__: str | None = """
\${system}

Available tools: \${tool_choice}
Default fallback: \${default}
""".strip()`})]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{children:"__max_iteration_prompt__"}),n.jsxs("p",{children:["Type: ",n.jsx("code",{children:"str | None"}),"  |  Default: ",n.jsx("code",{children:"None"})]}),n.jsxs("p",{children:["Replaces the finalization prompt used when ",n.jsx("code",{children:"__max_iteration__"})," is exhausted. Supports ",n.jsx("code",{children:"${system}"}),". Falls back to"," ",n.jsx("code",{children:"DEFAULT_MAX_ITERATION_PROMPT"})," (overridable via env var)."]})]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{children:"__display_name__"}),n.jsxs("p",{children:["Type: ",n.jsx("code",{children:"str"}),"  |  Default: ",n.jsx("code",{children:"cls.__name__"}),"  | ",n.jsx("strong",{children:" not inheritable"})]}),n.jsxs("p",{children:["Used in ",n.jsx("code",{children:"notify()"})," events and as the MCP tool title. Defaults to the class name. Override to show a human-friendly name without renaming the class."]}),n.jsx(_,{language:"python",children:`class SearchKnowledgeBase(Action):
    """Search internal knowledge base."""
    __display_name__: str = "Search"   # shown in UI / MCP title`})]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{id:"__groups__",children:"__groups__"}),n.jsxs("p",{children:["Type: ",n.jsx("code",{children:"Groups | set[str] | None"}),"  |  Default: ",n.jsx("code",{children:"None"})," "," |  ",n.jsx("strong",{children:"not inheritable"})]}),n.jsxs("p",{children:["Registers this action into integration groups. A ",n.jsx("code",{children:"set[str]"})," applies to"," ",n.jsx("strong",{children:"all valid groups"})," simultaneously (",n.jsx("code",{children:'"mcp"'}),","," ",n.jsx("code",{children:'"grpc"'}),", ",n.jsx("code",{children:'"a2a"'}),", etc.). Use the ",n.jsx("code",{children:"Groups"})," dict form to target specific integration types."]}),n.jsx(_,{language:"python",children:`# set[str] — expose to ALL valid groups (mcp, grpc, a2a) under these names
class SearchTool(Action):
    __groups__: set[str] = {"tools", "public"}

# Groups dict — target specific integration types
from pybotchi.mcp import MCPAction
class AdminTool(Action):
    __groups__ = {"mcp": {"admin"}, "grpc": {"internal"}}`})]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{children:"__detached__"}),n.jsxs("p",{children:["Type: ",n.jsx("code",{children:"bool"}),"  |  Default: auto"]}),n.jsxs("p",{children:["Auto-set ",n.jsx("code",{children:"True"})," when you override ",n.jsx("code",{children:"commit_context"}),". Can also be set explicitly. When ",n.jsx("code",{children:"True"}),": ",n.jsx("code",{children:"execute()"})," calls"," ",n.jsx("code",{children:"context.detach_context()"})," to create an isolated copy for children to work on."]})]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{children:"__to_commit__"}),n.jsxs("p",{children:["Type: ",n.jsx("code",{children:"bool"}),"  |  Default: ",n.jsx("code",{children:"True"}),"  | ",n.jsx("strong",{children:" not inheritable"})]}),n.jsxs("p",{children:["Set ",n.jsx("code",{children:"False"})," internally when an exception propagates without being handled by ",n.jsx("code",{children:"on_error"}),". Prevents ",n.jsx("code",{children:"commit_context()"})," from running in the",n.jsx("code",{children:"finally"})," block. Can also be set manually to suppress merging. Doesn't affect ",n.jsx("code",{children:"cleanup"}),", which always runs."]})]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{children:"__agent__"}),n.jsxs("p",{children:["Type: ",n.jsx("code",{children:"bool"}),"  |  Default: ",n.jsx("code",{children:"False"}),"  | ",n.jsx("strong",{children:" not inheritable"})]}),n.jsxs("p",{children:["Metadata marker for the ",n.jsx("code",{children:"all_agents()"})," generator. No runtime behavior. Always resets to ",n.jsx("code",{children:"False"})," in subclasses."]})]}),n.jsx("h2",{id:"overridable-methods",children:"Overridable Methods"}),n.jsx("p",{children:"All methods below have default implementations. Override only what your logic requires."}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{children:"pre"}),n.jsx(_,{language:"python",children:"async def pre(self, context: Context) -> ActionResult:"}),n.jsxs("p",{children:["Called first, before any child selection. Default: returns ",n.jsx("code",{children:"None"}),". Use for input validation, data gathering (RAG), or setting up state. Return"," ",n.jsx("code",{children:"ActionReturn.END"})," to stop only this action (siblings continue)."]}),n.jsx(_,{language:"python",children:`async def pre(self, context: Context) -> ActionResult:
    if not self.query:
        await context.add_response(self, "No query provided.")
        return ActionReturn.END
    await context.set_metadata("query", value=self.query)`})]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{children:"post"}),n.jsx(_,{language:"python",children:"async def post(self, context: Context) -> ActionResult:"}),n.jsxs("p",{children:["Called after all children complete (after the iteration loop exits). Default: returns ",n.jsx("code",{children:"None"}),". Use for consolidating results or final LLM summarization. Skipped if the lifecycle was halted (",n.jsx("code",{children:"END"}),"/",n.jsx("code",{children:"BREAK"}),"/",n.jsx("code",{children:"STOP"}),") or an error occurred; use ",n.jsx("code",{children:"cleanup"})," for anything that must always run."]})]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{children:"fallback"}),n.jsx(_,{language:"python",children:"async def fallback(self, context: Context, content: str) -> ActionResult:"}),n.jsxs("p",{children:["Called when: (a) the LLM selected no tools, or (b) the action has zero children (in which case the LLM is auto-invoked first and the result is passed here). Default: returns ",n.jsx("code",{children:"None"}),". Use to handle plain-text responses or break iteration loops."]}),n.jsx(_,{language:"python",children:`async def fallback(self, context: Context, content: str) -> ActionReturn:
    await context.add_response(self, content)
    return ActionReturn.BREAK   # done — exit the iteration loop`})]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{children:"on_child_init_error"}),n.jsx(_,{language:"python",children:`async def on_child_init_error(
    self,
    context: Context,
    next_actions: list[Action],
    child_cls: type[Action],
    child_args: dict[str, Any],
    exception: Exception,
) -> str | None:`}),n.jsxs("p",{children:["Called when a child action fails to instantiate from the LLM's tool call args (e.g. Pydantic validation error). Default: not defined (re-raises). Return ",n.jsx("code",{children:"None"})," to skip the failed action and continue processing any remaining tool calls. Return a string to stop all further tool-call processing and route that string to ",n.jsx("code",{children:"fallback(content)"})," — useful for feeding an error correction back to the LLM on the next iteration."]}),n.jsx(_,{language:"python",children:`async def on_child_init_error(self, context, next_actions, child_cls, child_args, exception):
    # Return a string to route to fallback with a correction hint for the next iteration
    return (
        f"Tool '{child_cls.__name__}' was called with invalid args: {exception}. "
        "Please correct the arguments and try again."
    )`})]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{children:"on_error"}),n.jsx(_,{language:"python",children:`async def on_error(
    self,
    context: Context,
    exception: Exception,
    unwrapped_exceptions: Generator[Exception, None, None],
) -> ActionResult:`}),n.jsxs("p",{children:["Called when any unhandled exception propagates through ",n.jsx("code",{children:"execute()"}),". Default: not defined (re-raises). Return an ",n.jsx("code",{children:"ActionResult"})," to recover, or re-raise. ",n.jsx("code",{children:"unwrapped_exceptions"})," is a generator of leaf exceptions from ",n.jsx("code",{children:"unwrap_exceptions()"})," — iterate it to inspect"," ",n.jsx("code",{children:"ExceptionGroup"})," members individually."]}),n.jsx(_,{language:"python",children:`async def on_error(self, context, exception, unwrapped_exceptions) -> ActionResult:
    match exception:
        case ConnectionError():
            await context.add_message(ChatRole.USER, "Connection lost, retrying...")
            return None  # continue
        case _:
            raise exception`})]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{children:"on_max_self_recursion"}),n.jsx(_,{language:"python",children:"async def on_max_self_recursion(self, context: Context) -> ActionResult:"}),n.jsxs("p",{children:["Called from ",n.jsx("code",{children:"check_self_recursion()"})," when this action class has been invoked more times than ",n.jsx("code",{children:"__max_self_recursion__"})," (or ",n.jsx("code",{children:"context.max_self_recursion"}),") allows within a single turn. ",n.jsxs("strong",{children:["Default: returns ",n.jsx("code",{children:"ActionReturn.STOP"})]}),", halting the agent. Override to log/notify before stopping, or return ",n.jsx("code",{children:"None"})," to let execution continue past the cap."]}),n.jsx(_,{language:"python",children:`async def on_max_self_recursion(self, context: Context) -> ActionResult:
    await context.notify({"event": "recursion-limit", "action": type(self).__name__})
    return ActionReturn.STOP   # or return None to keep going`})]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{children:"on_max_iteration"}),n.jsx(_,{language:"python",children:"async def on_max_iteration(self, context: Context) -> ActionResult:"}),n.jsxs("p",{children:["Called after ",n.jsx("code",{children:"__max_iteration__"})," is exhausted without a BREAK or STOP. Default: invokes the LLM with ",n.jsx("code",{children:"max_iteration_prompt()"})," and adds the response. Override for custom finalization, structured output, or graceful degradation.",n.jsx("strong",{children:" Not called when BREAK exits the loop cleanly."})]})]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{children:"commit_context"}),n.jsx(_,{language:"python",children:"async def commit_context(self, parent: Context, child: Context) -> None:"}),n.jsxs("p",{children:["Called in the ",n.jsx("code",{children:"finally"})," block when ",n.jsx("code",{children:"__detached__"})," is"," ",n.jsx("code",{children:"True"}),". Default: merges ",n.jsx("code",{children:"child_context"})," token usages into"," ",n.jsx("code",{children:"context"}),". Override to selectively merge prompts, metadata, or other state from the isolated branch back into the parent context."]}),n.jsx(_,{language:"python",children:`async def commit_context(self, parent: Context, child: Context) -> None:
    # Only bring back messages added after the branch point
    new_messages = child.prompts[len(parent.prompts):]
    parent.prompts.extend(new_messages)
    # Merge usages from parent (always call this)
    await super().commit_context(parent, child)`})]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{children:"cleanup"}),n.jsx(_,{language:"python",children:"async def cleanup(self, context: Context) -> None:"}),n.jsxs("p",{children:["Called in the ",n.jsx("code",{children:"finally"})," block every time the action finishes: on success, on ",n.jsx("code",{children:"END"}),"/",n.jsx("code",{children:"BREAK"}),"/",n.jsx("code",{children:"STOP"}),", on errors (handled or not), on max self recursion, and on cancellation. Default: does nothing. Use for releasing resources, resetting state, or final logging."]}),n.jsxs("ul",{children:[n.jsxs("li",{children:["Runs before ",n.jsx("code",{children:"commit_context"}),", so usage/metadata added to a detached context still merges into the parent."]}),n.jsxs("li",{children:["May run even if ",n.jsx("code",{children:"pre"})," didn't; don't assume setup completed."]}),n.jsxs("li",{children:["Return value is ignored. If it raises, that error replaces the action's result (the original error survives only as ",n.jsx("code",{children:"__context__"}),"), skips ",n.jsx("code",{children:"on_error"}),", and ",n.jsx("code",{children:"commit_context"})," still runs."]}),n.jsxs("li",{children:["Can't tell how the action ended: ",n.jsx("code",{children:"sys.exc_info()"})," only shows unhandled errors. Track the outcome on the instance if you need it."]}),n.jsxs("li",{children:["For ",n.jsx("code",{children:"MCPAction"}),"/",n.jsx("code",{children:"GRPCAction"}),", runs after the connections are closed."]})]}),n.jsx(_,{language:"python",children:`async def cleanup(self, context: Context) -> None:
    if (conn := getattr(self, "_conn", None)) is not None:   # pre may not have run
        await conn.close()`})]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{id:"child_selection",children:"child_selection"}),n.jsx(_,{language:"python",children:`async def child_selection(
    self,
    context: Context,
    child_actions: ChildActions | None = None,
) -> tuple[list[Action], str]:`}),n.jsxs("p",{children:["Called during ",n.jsx("code",{children:"execution()"})," to determine which children run. Returns a tuple of ",n.jsx("code",{children:"(actions, content)"}),":"]}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("code",{children:"actions"})," — list of instantiated child ",n.jsx("code",{children:"Action"})," objects to execute (may be empty)"]}),n.jsxs("li",{children:[n.jsx("code",{children:"content"})," — the LLM's plain-text message when it did not select any tool (empty string otherwise); routed to ",n.jsx("code",{children:"fallback(content)"})," when actions is empty"]})]}),n.jsx("p",{children:"Override to add filtering, validation, inject additional actions, or completely bypass the LLM for complex routing logic."}),n.jsx("h4",{children:"Scenario 1 — Additional filtering"}),n.jsx("p",{children:"Call super, then narrow the returned list based on runtime conditions:"}),n.jsx(_,{language:"python",children:`async def child_selection(self, context, child_actions=None):
    actions, content = await super().child_selection(context, child_actions)
    if not actions:
        return actions, content   # LLM gave no tool calls — pass through to fallback()
    allowed = context.metadata.get("allowed_tools", set())
    return [a for a in actions if type(a).__name__ in allowed], content`}),n.jsx("h4",{children:"Scenario 2 — Validation"}),n.jsx("p",{children:"Raise or abort when the LLM picks something unexpected:"}),n.jsx(_,{language:"python",children:`async def child_selection(self, context, child_actions=None):
    actions, content = await super().child_selection(context, child_actions)
    for action in actions:
        if isinstance(action, DangerousAction) and not context.metadata.get("admin"):
            raise PermissionError(f"{type(action).__name__} requires admin privileges")
    return actions, content`}),n.jsx("h4",{children:"Scenario 3 — Adding actions to the selection"}),n.jsx("p",{children:"Append a fixed action (e.g., audit logger) after every LLM selection:"}),n.jsx(_,{language:"python",children:`async def child_selection(self, context, child_actions=None):
    actions, content = await super().child_selection(context, child_actions)
    if not actions:
        return actions, content
    audit = AuditLogger(action_names=[type(a).__name__ for a in actions])
    return actions + [audit], content`}),n.jsx("h4",{children:"Scenario 4 — Complete override (no LLM)"}),n.jsx("p",{children:"For deterministic or rule-based routing, bypass the LLM entirely:"}),n.jsx(_,{language:"python",children:`async def child_selection(self, context, child_actions=None):
    intent = context.metadata.get("intent")
    routing = {
        "billing": BillingAgent,
        "support": SupportAgent,
    }
    cls = routing.get(intent, DefaultHandler)
    return [cls()], ""`})]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{children:"child_selection_prompt"}),n.jsx(_,{language:"python",children:"def child_selection_prompt(self, context: Context, tool_choice: str) -> str:"}),n.jsxs("p",{children:["Called inside ",n.jsx("code",{children:"child_selection()"})," to build the tool-selection system prompt string. Default: applies the ",n.jsx("code",{children:"__tool_call_prompt__"})," template. A lighter override than rewriting all of ",n.jsx("code",{children:"child_selection"})," — just return any string."]}),n.jsx(_,{language:"python",children:`def child_selection_prompt(self, context: Context, tool_choice: str) -> str:
    base = super().child_selection_prompt(context, tool_choice)
    user_role = context.metadata.get("user_role", "user")
    return f"[Role: {user_role}]
{base}"`})]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{children:"max_iteration_prompt"}),n.jsx(_,{language:"python",children:"def max_iteration_prompt(self, context: Context) -> str:"}),n.jsxs("p",{children:["Called inside ",n.jsx("code",{children:"on_max_iteration()"})," to build the finalization prompt string. Default: applies the ",n.jsx("code",{children:"__max_iteration_prompt__"})," template. Override to return custom finalization instructions."]})]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{children:"get_child_actions"}),n.jsx(_,{language:"python",children:"async def get_child_actions(self, context: Context) -> dict[str, type[Action]]:"}),n.jsxs("p",{children:["Called at the start of each ",n.jsx("code",{children:"execution()"})," cycle to get the filtered child dict. Default: filters ",n.jsx("code",{children:"__child_actions__"})," by"," ",n.jsx("code",{children:"allowed_actions"})," + ",n.jsx("code",{children:"__enabled__"}),". Override to add dynamic children not defined at class time."]}),n.jsx(_,{language:"python",children:`async def get_child_actions(self, context: Context) -> dict[str, type[Action]]:
    base = await super().get_child_actions(context)
    # Dynamically add a plugin action from context metadata
    if plugin_cls := context.metadata.get("plugin_action"):
        base[plugin_cls.__name__] = plugin_cls
    return base`})]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{children:"_as_tool"}),n.jsx(_,{language:"python",children:`@classmethod
async def _as_tool(cls, context: Context) -> dict | type[BaseModel]:`}),n.jsxs("p",{children:["Called during ",n.jsx("code",{children:"child_selection()"})," for each child to get its tool schema. Default: returns the class itself (Pydantic model). Return a custom JSON schema dict to override the schema at runtime."]}),n.jsx(_,{language:"python",children:`@classmethod
async def _as_tool(cls, context: Context) -> dict[str, Any]:
    sources = await get_available_sources()
    return {
        "name": cls.__name__,
        "description": "Fetch data from a dynamic source",
        "parameters": {
            "type": "object",
            "properties": {
                "source": {"type": "string", "enum": sources},
            },
            "required": ["source"],
        },
    }`})]}),n.jsx("h2",{id:"action-class-methods",children:"Action Class Methods"}),n.jsx("p",{children:"Static graph manipulation methods. Call at module level or in setup to wire up relationships that cannot be expressed as inner classes."}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{children:"add_child"}),n.jsx(_,{language:"python",children:`ParentAction.add_child(
    action: type[Action],
    name: str | None = None,
    override: bool = False,
    extended: bool = True,
) -> None`}),n.jsxs("p",{children:["Adds an action as a child. ",n.jsx("code",{children:"extended=True"})," (default) creates a new subclass to prevent shared mutable state across different parents. ",n.jsx("code",{children:"name"})," becomes the tool name. Raises if name already exists unless ",n.jsx("code",{children:"override=True"}),"."]}),n.jsx(_,{language:"python",children:`class PlannerAgent(Action): ...
class ExecutorAgent(Action): ...
class ReviewAgent(Action): ...

PlannerAgent.add_child(ExecutorAgent)
PlannerAgent.add_child(ReviewAgent)

# Circular: executor can re-invoke planner
ExecutorAgent.add_child(PlannerAgent)`})]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{children:"add_grand_child"}),n.jsx(_,{language:"python",children:`Action.add_grand_child(
    action: type[Action],
    name: str | None = None,
    override: bool = False,
    extended: bool = True,
) -> None`}),n.jsxs("p",{children:["Calls ",n.jsx("code",{children:"add_child()"})," on every immediate child — injects a capability into the whole subtree at once."]})]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{children:"remove_child / remove_grand_child"}),n.jsx(_,{language:"python",children:`Action.remove_child(name: str) -> None
Action.remove_grand_child(name: str) -> None`}),n.jsxs("p",{children:["Remove a child by ",n.jsx("strong",{children:"name"})," from ",n.jsx("code",{children:"__child_actions__"}),". Cascades to all subclasses. ",n.jsx("code",{children:"remove_grand_child"})," calls"," ",n.jsx("code",{children:"remove_child"})," on every immediate child."]})]}),n.jsx("h2",{id:"context",children:"Context"}),n.jsxs("p",{children:["The ",n.jsx("code",{children:"Context"})," object carries the full conversation and shared state. Pass it through every lifecycle hook; do not store it as instance state on actions."]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{children:"Fields"}),n.jsx(_,{language:"python",children:`class Context(BaseModel, Generic[TLLM]):
    prompts: list[dict]              # conversation history — must start with system role
                                     # format: {"role": ChatRole.X, "content": str}
    allowed_actions: dict[str, bool] # per-request action gating
                                     # overrides __enabled__; True enables even if class is disabled
    metadata: dict[str, Any]         # arbitrary shared state across the action tree
    usages: dict[str, UsageMetadata] # token usage aggregated per model name
    streaming: bool                  # informational — no built-in effect
                                     # actions read this to decide whether to stream
    max_self_recursion: int | None   # global self-recursion limit (__max_self_recursion__ takes priority)
    parent: Self | None              # set by detach_context(); reference to originating context`})]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{children:"start"}),n.jsx(_,{language:"python",children:`async def start(
    self,
    ActionClass: type[Action],
    **kwargs: Any,
) -> tuple[Action, ActionResult]:`}),n.jsxs("p",{children:["The main entry point. Validates that ",n.jsx("code",{children:"prompts[0]"})," is a system role, resets the ",n.jsx("code",{children:"_action_call"})," counter, then calls ",n.jsx("code",{children:"action.execute(context)"}),". Returns ",n.jsx("code",{children:"(action_instance, ActionResult)"})," — the result may be"," ",n.jsx("code",{children:"None"})," when the action completes normally without returning a signal."]}),n.jsx(_,{language:"python",children:`context = Context(
    prompts=[{"role": ChatRole.SYSTEM, "content": "You are a helpful assistant."}]
)
action, result = await context.start(MyRootAction)`})]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{children:"detach_context"}),n.jsx(_,{language:"python",children:"async def detach_context(self) -> Context:"}),n.jsxs("p",{children:["Deep-copies ",n.jsx("code",{children:"prompts"}),", ",n.jsx("code",{children:"allowed_actions"}),", and"," ",n.jsx("code",{children:"metadata"}),". Sets ",n.jsx("code",{children:"parent=self"})," on the copy. Used for isolated branches where children should not affect the main context."]})]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{children:"detached_start"}),n.jsx(_,{language:"python",children:`async def detached_start(
    self,
    ActionClass: type[Action],
    **kwargs: Any,
) -> tuple[Context, Action, ActionResult]:`}),n.jsxs("p",{children:["Convenience: calls ",n.jsx("code",{children:"detach_context()"})," then ",n.jsx("code",{children:"start()"}),". Returns ",n.jsx("code",{children:"(child_context, action_instance, ActionResult)"})," (the result may be"," ",n.jsx("code",{children:"None"}),"). Use to run an action in isolation and inspect or merge the result manually."]}),n.jsx(_,{language:"python",children:`child_ctx, action, result = await context.detached_start(SubWorkflow)
# Inspect child_ctx.prompts, child_ctx.metadata before merging`})]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{children:"add_message"}),n.jsx(_,{language:"python",children:"async def add_message(self, role: ChatRole, content: str, metadata: dict | None = None) -> None:"}),n.jsxs("p",{children:["Appends a single ",n.jsx("code",{children:"{'role', 'content'}"})," entry. Accepts any"," ",n.jsx("code",{children:"ChatRole"})," value. For action outputs specifically, prefer"," ",n.jsx("code",{children:"add_response()"})," as it correctly pairs the tool-call and tool-result entries."]})]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{children:"add_response"}),n.jsx(_,{language:"python",children:`async def add_response(
    self,
    action_or_toolcall: Action | ToolCall,
    content: str,
    metadata: dict | None = None,
) -> None:`}),n.jsxs("p",{children:["Appends ",n.jsx("strong",{children:"two"})," entries: the assistant tool-call message + the tool result message. This is the correct way to record action outputs in the conversation history."]}),n.jsx(_,{language:"python",children:`msg = await context.llm.ainvoke(context.prompts)
await context.add_response(self, msg.text)`})]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{children:"add_usage"}),n.jsx(_,{language:"python",children:`async def add_usage(
    self,
    action: Action,
    model: str | None,
    usage: UsageMetadata | None,
    name: str | None = None,
    raise_error: bool = False,
) -> None:`}),n.jsxs("p",{children:["Appends to ",n.jsx("code",{children:"action._usage"})," and merges into ",n.jsx("code",{children:"context.usages[model]"}),".",n.jsx("code",{children:"name"})," labels the usage record: ",n.jsx("code",{children:'"$tool"'}),","," ",n.jsx("code",{children:'"$fallback"'}),", ",n.jsx("code",{children:'"$finalize"'})," (from ",n.jsx("code",{children:"on_max_iteration"}),", unrelated to ",n.jsx("code",{children:"cleanup"}),"), or a custom label."]})]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{children:"set_metadata / update_metadata"}),n.jsx(_,{language:"python",children:`async def set_metadata(self, *paths: Any, value: Any, update: bool = False) -> None
async def update_metadata(self, *paths: Any, value: Any) -> None`}),n.jsxs("p",{children:["Deep-set by path. ",n.jsx("code",{children:"update=True"})," (or ",n.jsx("code",{children:"update_metadata"}),") extends lists/dicts instead of replacing. No paths = replace the entire metadata dict."]}),n.jsx(_,{language:"python",children:`await context.set_metadata("results", value={})                  # create the "results" bucket
await context.set_metadata("results", "step1", value="done")     # metadata["results"]["step1"] = "done"
await context.update_metadata("results", value={"step2": "ok"})  # merge → {"step1": "done", "step2": "ok"}`})]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{children:"notify"}),n.jsx(_,{language:"python",children:"async def notify(self, message: dict[str, Any]) -> None:"}),n.jsxs("p",{children:["No-op in the base class. Override in your custom Context for WebSocket, SSE, or logging. Called by the framework on: tool selection start/complete, fallback start/complete, finalize start/complete (",n.jsx("code",{children:"on_max_iteration"}),"'s summary step, not the ",n.jsx("code",{children:"cleanup"})," hook), and gRPC/MCP events."]})]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{children:"shifted_prompts"}),n.jsx(_,{language:"python",children:"def shifted_prompts(self, offset: int | None = None) -> Iterator[dict]:"}),n.jsxs("p",{children:["Returns a prompts iterator. Always skips index 0 (system prompt). With"," ",n.jsx("code",{children:"offset=N"}),": returns only the last N entries (minimum index 1). Used internally by ",n.jsx("code",{children:"__max_child_selection_prompts__"}),"."]})]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{children:"run_func_in_thread / run_task_in_thread"}),n.jsx(_,{language:"python",children:`def run_func_in_thread(
    self, task: Callable, executor=None, *args, **kwargs
) -> Future

def run_task_in_thread(
    self, task: Coroutine, executor=None
) -> Future`}),n.jsxs("p",{children:["Run a synchronous callable (",n.jsx("code",{children:"run_func_in_thread"}),") or an async coroutine in a new event loop (",n.jsx("code",{children:"run_task_in_thread"}),") inside a thread pool. Returns a Future. Use to avoid blocking the async event loop with CPU-bound or legacy sync code."]}),n.jsx(_,{language:"python",children:"result = await context.run_func_in_thread(sync_heavy_computation, None, data)"})]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{children:"detached_kwargs"}),n.jsx(_,{language:"python",children:"def detached_kwargs(self, **kwargs: Any) -> dict[str, Any]:"}),n.jsx("p",{children:"Returns the dict used to construct a detached context copy. Override in custom Context subclasses to pass extra fields (e.g. DB connection, websocket handle) into the detached copy."}),n.jsx(_,{language:"python",children:`class AppContext(Context):
    db: AsyncSession   # custom field

    def detached_kwargs(self, **kwargs: Any) -> dict[str, Any]:
        return super().detached_kwargs(db=self.db, **kwargs)`})]}),n.jsx("h2",{id:"actionreturn",children:"ActionReturn"}),n.jsxs("p",{children:["Lifecycle methods return ",n.jsx("code",{children:"ActionResult"})," (",n.jsx("code",{children:"ActionReturn | None"}),"). The value controls what the framework does next."]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{children:"Values"}),n.jsx(_,{language:"python",children:`from pybotchi import ActionResult, ActionReturn

# None — continue normally; nothing is interrupted (equivalent of old GO)
return None

# ActionReturn.END — stop only this action's remaining lifecycle.
# Sibling actions at the same level continue running.
return ActionReturn.END

# ActionReturn.BREAK — stop this action AND break the nearest ancestor's
# __max_iteration__ loop. Also stops subsequent siblings in sequential execution.
return ActionReturn.BREAK

# ActionReturn.STOP — stop the entire agent immediately.
# Propagates all the way up through every ancestor. No value attached.
return ActionReturn.STOP

# ActionReturn.stop(value=...) — STOP with a return value.
# The value is accessible on the ActionReturn object after context.start() returns.
return ActionReturn.stop(value="any_value_of_any_type")

# Checking return values
ar.is_end    # True for END, BREAK, and STOP  (isinstance(ar, End))
ar.is_break  # True for BREAK and STOP        (isinstance(ar, Break))
ar.is_stop   # True only for STOP             (isinstance(ar, Stop))`}),n.jsxs(Ge,{children:[n.jsx("strong",{children:"END, BREAK, and STOP are pre-instantiated singletons."})," Use them directly — do not call them as constructors. Only"," ",n.jsx("code",{children:"ActionReturn.stop(value=...)"})," is a factory method, for when you need to attach a return value to a STOP signal."]}),n.jsxs(Ge,{children:[n.jsx("strong",{children:"END vs BREAK inside an iteration loop:"})," END stops the current action's lifecycle but does ",n.jsx("em",{children:"not"})," break the parent's loop — the loop continues to the next iteration. BREAK exits the loop immediately and, if the loop is exhausted, skips ",n.jsx("code",{children:"on_max_iteration()"}),"."]})]}),n.jsx("h2",{children:"ChatRole"}),n.jsx(_,{language:"python",children:`from pybotchi import ChatRole

ChatRole.USER        # "user"
ChatRole.SYSTEM      # "system"
ChatRole.ASSISTANT   # "assistant"
ChatRole.TOOL        # "tool"
ChatRole.DEVELOPER   # "developer"`}),n.jsx("h2",{id:"llm",children:"LLM"}),n.jsx("p",{children:"Global LLM registry. Register one or more models at startup; actions receive the correct model through their context."}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{children:"LLM.add"}),n.jsx(_,{language:"python",children:"LLM.add(**llms: Any) -> None"}),n.jsxs("p",{children:["Register LLMs by keyword name. The key ",n.jsx("code",{children:'"base"'})," is required and used as the default model. Any additional keyword registers a named model."]}),n.jsx(_,{language:"python",children:`LLM.add(
    base=AzureChatOpenAI(model="gpt-4o-mini", ...),
    powerful=AzureChatOpenAI(model="gpt-4o", ...),
)`})]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{children:"LLM.base / LLM.get"}),n.jsx(_,{language:"python",children:`LLM.base(_: type[T] | None = None) -> T
# Returns the "base" LLM; raises NotImplementedError if not set.
# Pass a type to narrow the return type for static analysis.

LLM.get(llm: str, type: type[T] | None = None, throw: bool = True) -> T | None
# type[T] — unconstrained TypeVar; pass the expected class to get a typed return.
# throw=False returns None instead of raising when the LLM is missing or wrong type.`}),n.jsx(_,{language:"python",children:`from langchain_openai import AzureChatOpenAI

base = LLM.base()                                    # Any
typed = LLM.base(AzureChatOpenAI)                   # -> AzureChatOpenAI
model = LLM.get("powerful", AzureChatOpenAI)        # -> AzureChatOpenAI
maybe = LLM.get("powerful", AzureChatOpenAI, throw=False)  # -> AzureChatOpenAI | None`}),n.jsxs("p",{children:["Inside lifecycle hooks, prefer ",n.jsx("code",{children:"context.llm"})," — it is already bound with the correct tools for the current action."]})]}),n.jsx("h2",{id:"anthropic-compatibility",children:"Anthropic Compatibility"}),n.jsxs("p",{children:["PyBotchi is designed to pass ",n.jsx("strong",{children:"only the tools relevant to the current intent"})," ","when invoking child selection. This reduces noise in the LLM context and improves routing accuracy. However, Anthropic models have a known constraint that conflicts with this design:"]}),n.jsxs(Ge,{children:[n.jsx("strong",{children:"Known issue — Anthropic tool-schema requirement:"})," When a conversation history already contains a ",n.jsx("code",{children:"tool_use"})," / ",n.jsx("code",{children:"tool_result"})," entry for a specific tool, Anthropic requires that tool's schema to be included in"," ",n.jsx("em",{children:"every subsequent"})," API call in that session — even if the tool is no longer relevant. PyBotchi's selective-tool approach omits those schemas on later turns, which causes Anthropic to return a validation error.",n.jsx("br",{}),n.jsx("br",{}),"OpenAI does not have this restriction. Anthropic may address this in a future API version."]}),n.jsx("p",{children:"Three approaches are available today:"}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{children:"Option 1 — 1-level deep agent"}),n.jsx("p",{children:"Place all child actions directly under a single top-level parent. Every child selection call will include all tool schemas, which always satisfies Anthropic's requirement. This is the simplest approach and the recommended starting point."}),n.jsx(_,{language:"python",children:`class MyAgent(Action):
    """All tools live one level deep — Anthropic always sees every schema."""

    class Search(Action):
        """Search the web."""
        query: str

    class Summarize(Action):
        """Summarize gathered results."""

    class Translate(Action):
        """Translate text."""
        language: str`})]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsxs("h3",{children:["Option 2 — Use ",n.jsx("code",{children:"add_message"})," instead of ",n.jsx("code",{children:"add_response"})]}),n.jsxs("p",{children:[n.jsx("code",{children:"add_response(action, content)"})," records the full tool-call pair (tool name, args, result) in the conversation history. Replacing it with"," ",n.jsx("code",{children:"add_message(ChatRole.ASSISTANT, content)"})," writes a plain assistant message instead — Anthropic won't require those tool schemas on future turns because no tool-call entry exists."]}),n.jsx("p",{children:"Trade-off: the structured tool-call/result metadata is not in the prompt history. You can add a summarization step to keep the context clean."}),n.jsx(_,{language:"python",children:`from pybotchi import Action, ChatRole, Context

class MyAction(Action):
    async def pre(self, context: Context) -> None:
        msg = await context.llm.ainvoke(context.prompts)
        # Plain assistant message — no tool_use/tool_result metadata stored
        await context.add_message(ChatRole.ASSISTANT, msg.text)`})]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsxs("h3",{children:["Option 3 — Custom ",n.jsx("code",{children:"child_selection"})," with schema re-injection"]}),n.jsxs("p",{children:["Override ",n.jsx("code",{children:"child_selection"})," to inspect the prompt history for previously-used tool names and re-inject their schemas into the current tool set, even if those tools are not part of the active intent. This preserves PyBotchi's selective routing while satisfying Anthropic's constraint."]}),n.jsx("p",{children:"Most complete solution, but requires more implementation work. A built-in mechanism for this is under consideration for a future release."}),n.jsx(_,{language:"python",children:`from pybotchi import Action, Context

class MyAgent(Action):

    class ToolA(Action):
        """Do something."""
        param: str

    class ToolB(Action):
        """Do something else."""

    async def child_selection(self, context: Context, child_actions=None):
        if child_actions is None:
            child_actions = await self.get_child_actions(context)

        # Collect tool names already referenced in history as tool_use entries
        seen_tools = {
            call["function"]["name"]
            for msg in context.prompts
            if msg.get("role") == "assistant"
            for call in msg.get("tool_calls", [])
        }

        # Re-include any previously-seen tool even if not in the current intent
        extended = {**child_actions}
        for name in seen_tools:
            if name not in extended and name in self.__child_actions__:
                extended[name] = self.__child_actions__[name]

        return await super().child_selection(context, extended)`})]}),n.jsx("h2",{id:"grpc",children:"gRPC"}),n.jsxs("p",{children:["gRPC support runs action graphs across processes or machines. Import from"," ",n.jsx("code",{children:"pybotchi.grpc"}),"."]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{children:"GRPCAction"}),n.jsxs("p",{children:[n.jsx("strong",{children:"Server side"})," — just a regular ",n.jsx("code",{children:"Action"})," with"," ",n.jsx("code",{children:"__groups__"})," set. No need to inherit ",n.jsx("code",{children:"GRPCAction"}),":"]}),n.jsx(_,{language:"python",children:`from pybotchi import Action, ActionReturn
from pybotchi.grpc import GRPCContext

class WorkerAgent(Action):
    __groups__: set[str] = {"workers"}   # exposed via gRPC under the "workers" group

    class ProcessTask(Action):
        """Process a single task."""
        payload: str

        async def pre(self, context: GRPCContext) -> None:
            result = do_work(self.payload)
            await context.add_response(self, result)`}),n.jsxs("p",{children:[n.jsx("strong",{children:"Client side"})," — inherits ",n.jsx("code",{children:"GRPCAction"})," and declares"," ",n.jsx("code",{children:"__grpc_connections__"})," to connect to remote servers. Remote actions are dynamically discovered and injected as children at runtime via"," ",n.jsx("code",{children:"get_child_actions()"}),":"]}),n.jsx(_,{language:"python",children:`from pybotchi.grpc import GRPCAction, GRPCConnection

class OrchestratorAgent(GRPCAction):
    __grpc_connections__: list[GRPCConnection] = [
        GRPCConnection(
            name="workers",
            url="localhost:50051",
            groups=["workers"],   # fetch actions belonging to the "workers" group
        )
    ]
    # Remote actions from the server are discovered and injected as children
    # automatically — no need to declare them here`})]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{children:"GRPCConnection"}),n.jsx(_,{language:"python",children:`GRPCConnection(
    name="worker-pool",            # unique identifier
    url="localhost:50051",         # gRPC server address
    groups=["workers"],            # remote action groups to fetch/consume from this server
    secure=False,                  # TLS — set True for production
    root_certificates=None,        # path or bytes for CA cert
    private_key=None,              # path or bytes for client key
    certificate_chain=None,        # path or bytes for client cert
    options=None,                  # list[tuple] — grpc channel options
    compression=None,              # GRPCCompression.Gzip etc.
    interceptors=None,             # list[ClientInterceptor]
    metadata=None,                 # dict — default call metadata (auth headers)
    allow_exec=False,              # UNSAFE: allow exec() of raw code from the server — keep False unless trusted
    manual_enable=False,           # require explicit enable per-request
    allowed_actions=None,          # dict[str, bool] — default allow-list
    remote_action_class=None,      # override GRPCRemoteAction subclass
    block_return=False,            # honor a server-returned ActionReturn (e.g. STOP)
    exclude_unset=True,            # drop fields never explicitly set (pydantic exclude_unset)
    require_integration=True,      # skip this connection if its integration is not configured
)`})]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{children:"GRPCRemoteAction"}),n.jsxs("p",{children:["Dynamically built proxy action that represents a remote server-side action. Subclass to customize ",n.jsx("code",{children:"__concurrent__"})," or to handle streaming events."]}),n.jsx(_,{language:"python",children:`from pybotchi.grpc import GRPCRemoteAction

class MyRemote(GRPCRemoteAction):
    async def grpc_event_update(self, context, event) -> None:
        """Called on each streaming update from the server."""
        await context.notify(event.data)

    async def grpc_event_close(self, context, event) -> None:
        """Called when the server stream closes."""
        ...

    async def grpc_event_error(self, context, event) -> None:
        """Called when the server reports an error event."""
        ...

conn = GRPCConnection(
    name="workers",
    url="localhost:50051",
    remote_action_class=MyRemote,  # use custom remote class
)`})]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{children:"GRPCContext"}),n.jsxs("p",{children:["Extends ",n.jsx("code",{children:"Context"}),". Overrides ",n.jsx("code",{children:"add_message"}),","," ",n.jsx("code",{children:"add_response"}),", ",n.jsx("code",{children:"set_metadata"}),", and ",n.jsx("code",{children:"notify"})," to automatically propagate changes up/down through gRPC pipes."]}),n.jsx(_,{language:"python",children:`class GRPCContext(Context[TLLM]):
    integrations: dict[str, GRPCIntegration]  # per-connection runtime overrides
    source_id: str | None                     # ID of originating context
    context_id: str                           # unique ID for this copy

    async def grpc_send_up(self, source_id, name, data) -> None    # push to caller
    async def grpc_send_down(self, source_id, name, data) -> None  # push to servers`})]}),n.jsx("h2",{id:"mcp",children:"MCP"}),n.jsxs("p",{children:["MCP (Model Context Protocol) support exposes action graphs as tool servers. Import from ",n.jsx("code",{children:"pybotchi.mcp"}),"."]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{children:"MCPAction"}),n.jsxs("p",{children:[n.jsx("strong",{children:"Server side"})," — just a regular ",n.jsx("code",{children:"Action"})," with"," ",n.jsx("code",{children:"__groups__"})," set. ",n.jsx("code",{children:"build_mcp_app"})," / ",n.jsx("code",{children:"mount_mcp_app"})," ","scans all ",n.jsx("code",{children:"Action"})," subclasses with ",n.jsx("code",{children:"__groups__"})," and exposes them as MCP tools automatically:"]}),n.jsx(_,{language:"python",children:`from pybotchi import Action, ActionReturn, Context

class SearchTool(Action):
    """Search the knowledge base."""
    __groups__: set[str] = {"public"}   # exposed as an MCP tool in the "public" group
    query: str

    async def pre(self, context: Context) -> None:
        results = await search(self.query)
        await context.add_response(self, results)`}),n.jsxs("p",{children:[n.jsx("strong",{children:"Client side"})," — inherits ",n.jsx("code",{children:"MCPAction"})," and declares"," ",n.jsx("code",{children:"__mcp_connections__"})," to consume tools from external MCP servers. Remote tools are dynamically discovered and injected as children via"," ",n.jsx("code",{children:"get_child_actions()"}),":"]}),n.jsx(_,{language:"python",children:`from pybotchi.mcp import MCPAction, MCPConnection, MCPContext, MCPMode

class MyAgent(MCPAction):
    __mcp_connections__: list[MCPConnection] = [
        MCPConnection(name="atlas", mode=MCPMode.SHTTP, url="http://mcp.example.com/mcp")
    ]
    # Remote MCP tools are discovered and injected as children automatically`})]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{children:"MCPConnection"}),n.jsx(_,{language:"python",children:`MCPConnection(
    name="tools-server",              # unique identifier
    mode=MCPMode.SHTTP,               # MCPMode.SSE or MCPMode.SHTTP
    url="http://localhost:8000/mcp",  # server URL
    headers=None,                     # default request headers dict
    timeout=30.0,                     # connection timeout (seconds)
    sse_read_timeout=300.0,           # SSE stream read timeout; also drives
                                      # ClientSession.read_timeout_seconds
    terminate_on_close=True,          # close session on disconnect
    httpx_client_factory=...,         # custom HTTP client factory
    auth=None,                        # httpx Auth object
    on_session_created=None,          # callback(session_id: str) -> None
    async_client_args=None,           # AsyncClientArgs TypedDict
    client_session_args=None,         # ClientSessionArgs TypedDict — extra
                                      # mcp.ClientSession kwargs (callbacks, etc.)
    manual_enable=False,              # require explicit enable per-request
    allowed_tools=None,               # dict[str, bool] — default allow-list
    tool_action_class=None,           # override MCPToolAction subclass
    block_return=False,               # honor a server-returned ActionReturn
                                      # (e.g. STOP) via consume_result_meta()
    exclude_unset=True,               # drop fields never explicitly set (pydantic exclude_unset)
    require_integration=True,         # skip this connection if its integration is not configured
)`}),n.jsxs("p",{children:[n.jsx("code",{children:"timeout"})," now defaults to ",n.jsx("code",{children:"30.0"})," (was ",n.jsx("code",{children:"5.0"}),"). The underlying ",n.jsx("code",{children:"mcp.ClientSession"})," read timeout is derived from"," ",n.jsx("code",{children:"min(timeout, sse_read_timeout)"}),", keeping the session and HTTP transport aligned. Supply ",n.jsx("code",{children:"client_session_args"})," to configure session-level callbacks (sampling, elicitation, logging, message handlers) directly on the connection."]})]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{children:"MCPToolAction"}),n.jsxs("p",{children:["Dynamically built proxy action for each MCP tool. Override to customize concurrent behavior or add pre/post logic around remote calls. Has a built-in"," ",n.jsx("code",{children:"clean_content()"})," helper that handles all MCP content types (Text, Image, Audio, EmbeddedResource, ResourceLink) and a progress callback."]}),n.jsx(_,{language:"python",children:`from pybotchi.mcp import MCPToolAction

class AuditedTool(MCPToolAction):
    __concurrent__: bool = True   # run MCP calls concurrently

    async def pre(self, context: Context) -> None:
        await log_audit(type(self).__name__, context.metadata)

conn = MCPConnection(
    name="audited",
    mode="SHTTP",
    url="http://localhost:8001/mcp",
    tool_action_class=AuditedTool,   # every tool from this server uses this class
)`}),n.jsx("h4",{children:"consume_result_meta"}),n.jsx(_,{language:"python",children:"async def consume_result_meta(self, context: MCPContext, meta: dict[str, Any]) -> ActionResult:"}),n.jsxs("p",{children:["Called after a tool result comes back, with the result's ",n.jsx("code",{children:"_meta"})," payload. When the server is a PyBotchi MCP app, that payload carries the remote action's serialized tree and its ",n.jsx("code",{children:"ActionReturn"}),". Default behavior: when the connection sets ",n.jsx("code",{children:"block_return=True"})," and the meta contains a ",n.jsx("code",{children:"return"})," entry, it rebuilds the signal (e.g. a ",n.jsx("code",{children:"STOP"})," with its value) so a remote stop can halt the local graph too. Override to inspect the propagated context or customize handling."]}),n.jsx(_,{language:"python",children:`class MathProblem(MCPToolAction):
    async def consume_result_meta(self, context, meta) -> ActionResult:
        print("remote context:", meta.get("context"))
        # super() converts meta["return"] into an ActionReturn when block_return=True
        return await super().consume_result_meta(context, meta)`})]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{children:"build_mcp_app / mount_mcp_app"}),n.jsx(_,{language:"python",children:`from pybotchi.mcp import build_mcp_app, mount_mcp_app

# Standalone Starlette app with SSE or streamable-HTTP transport
app = build_mcp_app(*groups, transport="streamable-http", stateless_groups=False)

# Mount into an existing FastAPI / Starlette app — async context manager
from fastapi import FastAPI
web_app = FastAPI()
async with mount_mcp_app(web_app, *groups, transport="sse", stateless_groups=False):
    ...  # servers stay mounted for the duration of this block`}),n.jsxs("p",{children:["Both functions call ",n.jsx("code",{children:"initialize_mcp_groups()"})," internally. Pass the group names that match the ",n.jsx("code",{children:"__groups__"})," values on your actions (omit them to expose every group)."]}),n.jsxs("p",{children:[n.jsx("code",{children:"stateless_groups"})," controls each FastMCP server's"," ",n.jsx("code",{children:"stateless_http"})," flag. Pass a single ",n.jsx("code",{children:"bool"})," to apply to all groups, or a ",n.jsx("code",{children:"dict[str, bool]"})," to set it per group. ",n.jsxs("strong",{children:["Keep it"," ",n.jsx("code",{children:"False"})," (the default) to support server-initiated callbacks"]})," — sampling, elicitation, and logging require a stateful session. Set it ",n.jsx("code",{children:"True"}),"only for simple, fully stateless tools that never call back to the client."]}),n.jsxs("p",{children:["PyBotchi also patches each server's capabilities with a ",n.jsx("code",{children:"pybotchi_native"}),"marker. When a PyBotchi client connects to a PyBotchi server it detects this flag and enables context propagation (see ",n.jsx("a",{href:"#mcp-context-propagation",children:"MCP Context Propagation"}),")."]})]}),n.jsxs("div",{className:"lifecycle-hook-section",id:"mcp-context-propagation",children:[n.jsx("h3",{children:"MCP Context Propagation"}),n.jsxs("p",{children:["When both ends run PyBotchi, the client forwards a snapshot of its context to the server with every tool call, and the server returns its resulting context and action tree back. This lets a distributed MCP graph behave like a single in-process one — shared metadata flows across the boundary and a remote ",n.jsx("code",{children:"STOP"})," can halt the whole graph."]}),n.jsx(_,{language:"python",children:`class MCPContext(Context[TLLM]):
    integrations: dict[str, MCPIntegration]  # per-connection runtime overrides
    source_id: str | None                    # ID of the calling (upstream) context
    context_id: str                          # unique ID for this context copy

    def mcp_dump(self) -> dict[str, Any]         # full JSON dump (server → client)
    def mcp_sharing_dump(self) -> dict[str, Any] # dump sent client → server
                                                 # (re-chains source_id / context_id)`}),n.jsxs("p",{children:["On the server side, each exposed action runs inside an ",n.jsx("code",{children:"MCPContext"}),"reconstructed from the caller's snapshot; the live FastMCP request is available as"," ",n.jsx("code",{children:"context._request_context"})," for session callbacks (only when the group is"," ",n.jsx("em",{children:"not"})," stateless). On the client side, override"," ",n.jsx("code",{children:"MCPToolAction.consume_result_meta()"})," to read the returned context."]})]}),n.jsx("h2",{id:"utilities",children:"Utilities"}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{children:"all_agents"}),n.jsx(_,{language:"python",children:`from pybotchi import all_agents

# Generator yielding all Action subclasses where __agent__ = True
for agent_cls in all_agents():
    print(agent_cls.__name__)`})]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{children:"graph / flowchart"}),n.jsx(_,{language:"python",children:`from pybotchi import graph

g = await graph(MyRootAction, allowed_actions={})  # async — builds Graph (nodes + edges)
diagram = g.flowchart()   # returns Mermaid flowchart TD string
                          # concurrent edges are rendered with animation
print(diagram)`})]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{children:"uuid"}),n.jsx(_,{language:"python",children:`from pybotchi.utils import uuid

# uuid7 preferred (time-ordered), falls back to uuid4
new_id = uuid()   # returns a UUID object`})]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{children:"apply_placeholders"}),n.jsx(_,{language:"python",children:`from pybotchi.utils import apply_placeholders

# Supports {key{'}'} and {key:default{'}'} syntax
result = apply_placeholders("\${greeting}, \${name}!", greeting="Hello", name="World")
# "Hello, World!"`}),n.jsxs("p",{children:["Used internally to fill ",n.jsx("code",{children:"__tool_call_prompt__"})," and"," ",n.jsx("code",{children:"__max_iteration_prompt__"})," templates. Defaults in the"," ",n.jsx("code",{children:"${key:default}"})," form are parsed as JSON, so a string default needs quotes (e.g. ",n.jsx("code",{children:'${name:"World"}'}),")."]})]}),n.jsxs("div",{className:"lifecycle-hook-section",children:[n.jsx("h3",{children:"unwrap_exceptions"}),n.jsx(_,{language:"python",children:`from pybotchi.utils import unwrap_exceptions

# Generator that flattens ExceptionGroup into individual exceptions
for exc in unwrap_exceptions(outer_exception):
    print(type(exc).__name__)`})]}),n.jsxs("div",{className:"highlight-box",children:[n.jsx("h3",{children:"Quick Cheat-Sheet"}),n.jsx(_,{language:"python",children:`from pybotchi import Action, ActionResult, ActionReturn, ChatRole, Context, LLM, graph, all_agents

# ── Class variables (select overrides) ───────────────────────────────────────
class MyAction(Action):
    __enabled__: bool = True                        # False = hidden from parent
    __concurrent__: bool = False                    # ← set on CHILD, not parent
    __max_iteration__: int | None = None            # child selection loop cap
    __max_self_recursion__: int | None = None       # per-action self-call cap (→ on_max_self_recursion)
    __first_tool_only__: bool = False
    __system_prompt__: str | None = None
    __temperature__: float | None = None
    __max_child_selection_prompts__: int | None = None  # sliding prompt window
    __default_tool__: str = "DefaultAction"
    __tool_call_prompt__: str | None = None
    __max_iteration_prompt__: str | None = None
    # ── not inheritable ───────────────────────────────────────────────────────
    __display_name__: str = "MyAction"              # UI / MCP title
    __groups__: set[str] | None = None              # set → all valid groups
    __agent__: bool = False                         # marker for all_agents()
    __to_commit__: bool = True
    __detached__: bool = False                      # auto-set when commit_context overridden

# ── Lifecycle hooks ───────────────────────────────────────────────────────────
    async def pre(self, context: Context) -> ActionResult: ...
    async def post(self, context: Context) -> ActionResult: ...
    async def fallback(self, context: Context, content: str) -> ActionResult: ...
    async def on_error(self, context, exception, unwrapped_exceptions) -> ActionResult: ...
    async def on_max_iteration(self, context: Context) -> ActionResult: ...
    async def on_max_self_recursion(self, context: Context) -> ActionResult: ...
    async def commit_context(self, context: Context, child: Context) -> None: ...
    async def cleanup(self, context: Context) -> None: ...              # always runs, like finally
    async def child_selection(self, context, child_actions=None) -> tuple[list[Action], str]: ...
    def child_selection_prompt(self, context, tool_choice) -> str: ...   # sync
    def max_iteration_prompt(self, context) -> str: ...                  # sync
    async def get_child_actions(self, context) -> dict[str, type[Action]]: ...
    async def on_child_init_error(self, context, next_actions, cls, args, exc): ...
    @classmethod
    async def _as_tool(cls, context) -> dict | type[BaseModel]: ...

# ── ActionResult / ActionReturn ───────────────────────────────────────────────
#   None → continue  |  END → stop self  |  BREAK → break loop  |  STOP → stop agent
ActionReturn.END / ActionReturn.BREAK / ActionReturn.STOP
ActionReturn.stop(value)   # STOP with a return value

# ── Graph helpers ─────────────────────────────────────────────────────────────
ParentAction.add_child(ChildCls, name=None, override=False, extended=True)
ParentAction.remove_child("ChildName")
g = await graph(MyRootAction, allowed_actions={})   # graph() is async
g.flowchart()   # → Mermaid diagram string`})]})]})}function Gd(){return n.jsxs("div",{className:"wip-container",id:"coming-soon",children:[n.jsx("div",{className:"wip-icon",children:"🚧"}),n.jsx("h2",{children:"Work in Progress"}),n.jsx("p",{className:"wip-message",children:"This section is currently under construction. Check back soon for updates!"})]})}const Ry={home:Xp,installation:ly,quickstart:ay,"how-it-works":cy,"object-oriented":uy,"life-cycle":dy,grpc:yy,mcp:wy,special:Cy,nesting:ky,runtime:Ay,reference:Py,roadmap:Gd,examples:by,contrib:Ny};function Nd(){return window.location.hash.slice(1)||"home"}function Ty(){const[s,u]=ze.useState(Nd),[c,d]=ze.useState(!1),[v,w]=ze.useState(!1),k=ze.useRef(null),y=ze.useRef(null);ze.useEffect(()=>{const O=()=>u(Nd());return window.addEventListener("hashchange",O),()=>window.removeEventListener("hashchange",O)},[]),ze.useEffect(()=>{var E;const O=y.current;if(y.current=null,O){const B=(E=k.current)==null?void 0:E.querySelector(`[id="${O}"]`);if(B){const V=B.getBoundingClientRect().top+window.scrollY-80;window.scrollTo({top:Math.max(0,V),behavior:"instant"})}else window.scrollTo(0,0)}else window.scrollTo(0,0)},[s]),ze.useEffect(()=>{const O=E=>{(E.ctrlKey||E.metaKey)&&E.key==="k"&&(E.preventDefault(),w(!0))};return window.addEventListener("keydown",O),()=>window.removeEventListener("keydown",O)},[]);const R=(O,E=null)=>{y.current=E,u(O),history.pushState(null,"",`#${O}`),d(!1)},Y=Ry[s]||Gd;return n.jsxs(n.Fragment,{children:[n.jsx(Wp,{onSearchOpen:()=>w(!0),onNavigate:R}),v&&n.jsx(Kp,{onClose:()=>w(!1),onNavigate:R}),n.jsxs("div",{className:"container",children:[n.jsx("button",{className:"hamburger",onClick:()=>d(O=>!O),"aria-label":"Toggle navigation",children:"☰"}),c&&n.jsx("div",{className:"sidebar-overlay",onClick:()=>d(!1)}),n.jsx($p,{active:s,onNavigate:R,isOpen:c,onClose:()=>d(!1)}),n.jsxs("main",{className:"main-content",ref:k,children:[n.jsx(Y,{onNavigate:R}),n.jsx(Qp,{active:s,onNavigate:R})]}),n.jsx(Yp,{page:s,mainRef:k})]})]})}Hp.createRoot(document.getElementById("root")).render(n.jsx(ze.StrictMode,{children:n.jsx(Ty,{})}));
