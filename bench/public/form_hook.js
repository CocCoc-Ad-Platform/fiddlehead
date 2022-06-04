/*! For license information please see form_hook.js.LICENSE.txt */
!function(){var n={47:function(n,t){"use strict";function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},e(n)}Symbol.for("react.element"),Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.memo"),Symbol.for("react.lazy"),Symbol.iterator;var r={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},u=Object.assign,o={};function l(n,t,e){this.props=n,this.context=t,this.refs=o,this.updater=e||r}function i(){}function f(n,t,e){this.props=n,this.context=t,this.refs=o,this.updater=e||r}l.prototype.isReactComponent={},l.prototype.setState=function(n,t){if("object"!==e(n)&&"function"!=typeof n&&null!=n)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,t,"setState")},l.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")},i.prototype=l.prototype;var c=f.prototype=new i;c.constructor=f,u(c,l.prototype),c.isPureReactComponent=!0;Array.isArray,Object.prototype.hasOwnProperty},401:function(n,t,e){"use strict";e(47)},782:function(n,t){function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},e(n)}Object.defineProperty(t,"__esModule",{value:1});var r=null,u=null,o=null,l=null;function i(n,t){return c(),o=f(n,o,r.t),null===r.t&&(r.t=o),t(o)}function f(n,t,e){if(null===t)return null===e?n(r):e;if(null===t.u){var u=n(r);return t.u=u,u}return t.u}function c(){if(null===r)throw new Error("Cannot use hooks from outside of components")}function a(n){this.current=n}function s(n){this.l=new a(n),this.u=null}var h=Object.prototype.hasOwnProperty,p=Array.prototype.slice;function y(n){return"string"==typeof n}function v(n){return"number"==typeof n}function m(n){return"function"==typeof n}function d(n){return null!==n&&"object"==e(n)}function b(n){return n.children}function g(n,t,e){this.i=n,this.o=e,this.h=null,this.p=t,this.v=null,this.t=null,this.m=null,this.g=null,this.M=null,this.j=null,this.A=null,this.O=null,this.T=null,this._=null,this.k=null}function S(n,t){n.g=t,void 0!==n.p.ref&&(n.p.ref.current=t)}function x(n,t,e){null===t&&(t={});var r=null;void 0!==t.key&&null!==t.key&&(r=""+t.key),delete t.key,void 0===t.ref||t.ref instanceof a||delete t.ref;var u=new g(n,t,r);if(arguments.length>2){var o=arguments.length>3;if(o&&(e=p.call(arguments,2)),m(n))u.p.children=e;else if("#"===n)if(o){for(var l="",i=0;i<e.length;++i)l+=w(e[i]);u.p.children=l}else u.p.children=w(e);else j(u,o?e:[e])}return u}function A(n){if(n instanceof g)return n;if(y(n))return new g("#",{children:n},null);if(v(n))return new g("#",{children:""+n},null);if(n instanceof Array){var t=new g("[",{},null);return j(t,n),t}return null}function w(n){return y(n)?n:v(n)?""+n:""}function j(n,t){for(var e,r=null,u=0;u<t.length;++u)null!==(e=A(t[u]))&&(e.j=n,e.h=u,null!==r?r.O=e:n.A=e,r=e)}function T(n,t,e){L(n,t,e,E,C)}function E(n,t,e,r){if(""!==(t=M(t))){if("style"===t)return d(e)||(e={}),d(r)||(r={}),void k(n[t],e,r);if(y(e)||v(e))n.setAttribute(t,e);else if(t in n)try{n[t]=e}catch(n){}}}function C(n,t,e){if(""!==(t=M(t))){if("style"===t)return d(e)||(e={}),k(n[t],{},e),void n.removeAttribute(t);if(y(e)||v(e))n.removeAttribute(t);else if(t in n)try{n[t]=null}catch(n){}}}function M(n){return"class"===n?"":"className"===n?"class":/^on[A-Z]/.test(n)?n.toLowerCase():n}function k(n,t,e){L(n,t,e,O,N)}function O(n,t,e){n[t]=e}function N(n,t){n[t]=""}function L(n,t,e,r,u){var o;for(o in e)B(e,o)&&(B(t,o)||u(n,o,e[o]));for(o in t)B(t,o)&&r(n,o,t[o],e[o])}function B(n,t){return h.call(n,t)&&void 0!==n[t]&&null!==n[t]}function _(n){return"svg"===n.i?1:1===n.j.M&&"foreignObject"===n.j.i?0:n.j.M}function q(n){return"["===n||m(n)}function D(n){for(var t=n.j;;){if(null===t)return null;if(null!==t.g)return t;t=t.j}}function R(n,t,e){this.C=n,this.G=t,this.N=G.bind(this),this.S=e,this.u=null}var F=new Map,I=null;function G(n){var t=F.get(this.C);void 0===t?(t=[[n,this]],F.set(this.C,t)):t.unshift([n,this]),null!==I&&clearTimeout(I),I=setTimeout(U)}function U(){F.forEach((function(n){for(var t,e,r,u,o=0;n.length>0;){if(e=(t=n.pop())[0],r=t[1],m(e))try{u=e(r.G)}catch(n){V(n,r.C);continue}else u=e;(1!==r.S||P(u))&&u!==r.G&&(r.G=u,o=1)}o&&en(r.C)})),F.clear(),I=null}function P(n){return null===n||n instanceof Error?1:0}function V(n,t){for(var e,r=t.j;null!==r;){for(e=r.t;null!==e;){if(1===e.S)return void e.N((function(t){return t||n}));e=e.u}r=r.j}throw n}function Z(n,t,e,r){this.V=n,this.Z=t,this.S=e,this.q=r,this.B=null,this.D=null,this.u=null}function Y(n,t,e){return void 0===t&&(t=null),u=function(){var r=J(t,null);return new Z(n,t,e,r)},o=function(e){var r=J(t,e.Z);if(1!==r){if(2!==r)return 0===r||3===r?(e.V=n,e.Z=t,e.q=r,e.D=e.B,void(e.B=null)):void 0;e.q=r}},c(),l=f(u,l,r.m),null===r.m&&(r.m=l),o(l);var u,o}function $(n,t,e){for(var r=t.m;null!==r;){if(r.S===n&&(e||0===r.q||3===r.q))try{W(r)}catch(n){V(n,t)}r=r.u}}function z(n,t,e){for(var r=t.m;null!==r;){if(r.S===n&&(null!==r.D||null!==r.B)&&(e||0===r.q||3===r.q))try{H(r,e)}catch(n){V(n,t)}r=r.u}}function W(n){n.B=n.V(),void 0===n.B&&(n.B=null)}function H(n,t){null===n.D||t?null!==n.B&&n.B():n.D()}function J(n,t){return null===n?0:0===n.length?1:null===t||function(n,t){if(n.length!==t.length)return 0;for(var e=n.length-1;e>=0;--e)if(n[e]!==t[e])return 0;return 1}(n,t)?2:3}function K(n,t){m(n.i)?function(n,t){var e,i=t?n.A:null!==n.T?n.T.A:null;r=n;try{e=n.i(n.p)}catch(t){V(t,n),e=null}r=null,u=null,o=null,l=null;var f=A(e);null!==f&&(f.j=n),null!==i&&(null!==f&&f.i===i.i&&f.o===i.o?Q(f,i):X(n,i)),n.A=f}(n,t):null!==n.T&&function(n,t){var e,r=nn(t),u=nn(n);r.forEach((function(t,r){void 0!==(e=u.get(r))&&e.i===t.i?Q(e,t):X(n,t)}))}(n,n.T)}function Q(n,t){if(n.T=t,m(n.i)){n.v=t.v,n.t=t.t,n.m=t.m;for(var e=n.t;null!==e;)e.C=n,e=e.u}}function X(n,t){null===n._?n._=[t]:n._.push(t)}function nn(n){for(var t=new Map,e=n.A;null!==e;)null!==e.o?t.set(e.o,e):t.set(e.h,e),e=e.O;return t}function tn(n,t,e,r,u){for(var o=e;;)if(n(o,e,r,u),null===o.A){if(o===e)return;for(;null===o.O;){if(null===o.j||o.j===e)return;o=o.j,null!==t&&t(o)}o=o.O}else o=o.A}function en(n){var t=new Map,e=new Map;tn(rn,un,n,t,e),e.forEach((function(n,t){z(1,t,n)})),t.forEach((function(n,t){$(1,t,n)})),setTimeout((function(){e.forEach((function(n,t){z(0,t,n)})),t.forEach((function(n,t){$(0,t,n)}))}))}function rn(n,t,e,r){var u=n===t;if(K(n,u),n.i!==b&&(u?null!==n.m&&(r.set(n,0),e.set(n,0)):null!==n.T?(function(n,t){if(function(n,t){var e,r;n.M=_(n),q(n.i)||(S(n,t.g),"#"===n.i?n.p.children!==t.p.children&&(e=n.g,r=n.p.children,e.textContent=r):T(n.g,n.p,t.p))}(n,t),null!==n.g){var e=D(n);null!==e&&(e.k=n.g)}}(n,n.T),null!==n.m&&(r.set(n.T,0),e.set(n,0)),n.T=null):(function(n){if(function(n){if(n.M=_(n),!q(n.i)){var t=function(n){return"#"===n.i?(t=n.p.children,document.createTextNode(t)):function(n,t,e){var r=1===n?document.createElementNS("http://www.w3.org/2000/svg",t):document.createElement(t);return T(r,e,{}),r}(n.M,n.i,n.p);var t}(n);S(n,t)}}(n),null!==n.g){var t=D(n);if(null!==t){var e=null!==t.k?t.k.nextSibling:t.g.firstChild;t.g.insertBefore(n.g,e),t.k=n.g}}}(n),null!==n.m&&e.set(n,1))),null!==n._){for(var o=0;o<n._.length;++o)(function(n,t){for(var e=n,r=n;;){if(null!==r.g)t(r.g);else if(null!==r.A){r=r.A;continue}if(r===e)return;for(;null===r.O;){if(null===r.j||r.j===e)return;r=r.j}r=r.O}})(n._[o],(function(n){null!==n.parentNode&&n.parentNode.removeChild(n)})),tn((function(n){null!==n.m&&r.set(n,1)}),null,n._[o]);n._=null}}function un(n){null!==n.k&&(n.k=null)}function on(n,t){var e;return(e=t["%vnode"])||((e=new g(b,{},null)).M="ownerSVGElement"in t?1:0,S(e,t),function(n,t){n["%vnode"]=t}(t,e)),e.p.children=n,e}t.Fragment="[",t.Ref=a,t.TextNode="#",t.createElement=x,t.createPortal=on,t.jsx=x,t.mount=function(n,t){en(on(n,t))},t.useEffect=function(n,t){return Y(n,t,0)},t.useError=function(n){return i((function(t){return P(n)||(n=null),new R(t,n,1)}),(function(n){return[n.G,n.N]}))},t.useLayoutEffect=function(n,t){return Y(n,t,1)},t.useRef=function(n){return t=function(){return new s(n)},e=function(n){return n.l},c(),u=f(t,u,r.v),null===r.v&&(r.v=u),e(u);var t,e},t.useState=function(n){return i((function(t){return new R(t,n,0)}),(function(n){return[n.G,n.N]}))}},498:function(n,t,e){n.exports=e(782)}},t={};function e(r){var u=t[r];if(void 0!==u)return u.exports;var o=t[r]={exports:{}};return n[r](o,o.exports,e),o.exports}!function(){"use strict";var n=e(498);function t(n){return function(n){if(Array.isArray(n))return r(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,t){if(n){if("string"==typeof n)return r(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(n,t):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function u(n){n.sort((function(n,t){return n-t}));var t=Math.floor(n.length/2);return n.length%2!=0?n[t]:(n[t-1]+n[t])/2}function o(n,t){return a(n)||function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var r,u,o=[],l=!0,i=!1;try{for(e=e.call(n);!(l=(r=e.next()).done)&&(o.push(r.value),!t||o.length!==t);l=!0);}catch(n){i=!0,u=n}finally{try{l||null==e.return||e.return()}finally{if(i)throw u}}return o}}(n,t)||f(n,t)||i()}function l(n){return a(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||f(n)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(n,t){if(n){if("string"==typeof n)return c(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?c(n,t):void 0}}function c(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function a(n){if(Array.isArray(n))return n}e(401);var s=n.jsx,h=n;function p(n){var t=n.text,e=n.setText;return l(h.useState(1)),h.useLayoutEffect((function(){return function(){}}),[]),h.useLayoutEffect((function(){return function(){}}),[t]),s("div",{className:"Cat"},s(d,null,s("span",null,"Ad name: "),s("input",{type:"text",value:t,onInput:function(n){return e(n.target.value)}})))}function y(n){var t=n.text,e=n.setText,r=o(h.useState("gruuu"),2),u=r[0],l=r[1];return h.useLayoutEffect((function(){return function(){}}),[]),h.useLayoutEffect((function(){return function(){}}),[t]),s("div",{className:"Dog"},s(d,null,s("span",null,"Ad name: "),s("input",{type:"text",value:t,onChange:function(n){return e(n.target.value)}})),s("br",null),s(d,null,"Speak:"," ",s("input",{value:u,onChange:function(n){return l(n.target.value)}})))}function v(n){var t=n.layout,e=n.text,r=n.setText;return l(h.useState()),h.useLayoutEffect((function(){return function(){}}),[]),s("div",{className:"Bird"},"dog"===t&&s(h.Fragment,{key:"hehehehe"},s(y,{text:e,setText:r})),"cat"===t&&s(p,{text:e,setText:r}))}function m(n){var t=n.count,e=n.setCount,r=o(h.useState("cat"),2),u=r[0],l=r[1],i=o(h.useState("unnamed"),2),f=i[0],c=i[1],a=h.useRef(null);return h.useLayoutEffect((function(){return function(){}}),[]),h.useLayoutEffect((function(){return function(){}})),h.useLayoutEffect((function(){return function(){}}),[u,f]),s("form",{className:"YourAd",style:{padding:"16px",border:"1px solid #ccc"}},s("div",null,s("span",null,"Your Ad: ",f)),s("br",null),s("div",null,s("select",{ref:a,onChange:function(n){return l(n.target.value)}},s("option",{value:"cat",selected:"cat"===u},"Layout Cat"),s("option",{value:"dog",selected:"dog"===u},"Layout Dog"))),s("br",null),s(d,null,"cat"===u&&s(d,{key:"#hehe/hahaha mm"},s("br",null),s("div",null,"This is cat layout."),s(p,{text:f,setText:c})),"dog"===u&&s(d,null,s("div",null,"This is not default layout, update from ancestor might reset the state of this part if tree updating logic not correct."),s("br",null),s(y,{text:f,setText:c}))),s("br",null),s(d,null,s("div",null,s("strong",null,s("i",null,"This is Bird container"))),s("br",null),s(v,{layout:u,text:f,setText:c})),s("br",null),s("div",null,s("button",{type:"button",onClick:function(){e((function(n){return n+1}))}},"Update count")," ",s("span",null,"Re-renders:",t)))}function d(n){var t=n.children;return s("div",{className:"Wrapper"},t)}function b(){var n=o(h.useState(1),2),t=n[0],e=n[1],r=h.useRef(null);return h.useLayoutEffect((function(){return function(){}})),s("article",{className:"MyAd"},[!1,1,2,[4,5]," Count: ",t],s(d,null,s("inner",null,s("my-div",null,s("love-div",null,s("test-div",null,s("a",null,"link"),s(d,null,s(d,null,s(d,null,"test",s(d,null,s(m,{ref:r,count:t,setCount:e}))))))),s("b",null,s("i",null,"hehe"))))))}function g(){var n=o(h.useState(!0),2),t=n[0],e=n[1];return t?s("[",null,s("paragraph",null,s("input",{type:"checkbox",checked:t,onChange:function(n){return e((function(n){return!n}))}}),s("h2",null,"Demo"),"hello",t&&s(b,null))):null}function S(){return new Array(100).fill(1).map((function(n,t){return s(g,{key:t})}))}function x(){return s("hh-ff",null,s(S,null))}var A,w,j,T=document.getElementById("root");function E(t){var e=t.onFinish;return(0,n.useLayoutEffect)((function(){e()}),[]),(0,n.jsx)(x,null)}function C(t){var e=t.onFinish;return(0,n.useLayoutEffect)((function(){e()}),[]),"ABCD"}w=100,j=(A=[function(t){(0,n.mount)((0,n.jsx)(E,{onFinish:t}),T)},function(t){(0,n.mount)((0,n.jsx)(C,{onFinish:t}),T)}]).map((function(){return[]})),function n(e){if(e<A.length){var r=performance.now();A[e]((function(){j[e].push(performance.now()-r),setTimeout((function(){n(e+1)}))}))}else--w>0?setTimeout((function(){n(0)})):function(n){var e=[];n.forEach((function(n){var r;e.push({Repeats:n.length,"Avg Time":(r=n,r.reduce((function(n,t){return n+t}),0)/r.length),"Med Time":u(n),"Min Time":Math.min.apply(Math,t(n)),"Max Time":Math.max.apply(Math,t(n))})})),console.table(e),console.log(n)}(j)}(0)}()}();