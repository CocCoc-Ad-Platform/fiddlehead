(()=>{var n={782:(n,t)=>{function r(n){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},r(n)}var u=null,e=null;function l(n,t,r){if(null===t)return null===r?n(u):r;if(null===t.u){var e=n(u);return t.u=e,e}return t.u}function o(){if(null===u)throw new Error("Cannot use hooks from outside of components")}function i(n){this.current=n}var f=Object.prototype.hasOwnProperty,c=Array.prototype.slice;function a(n){return"string"==typeof n}function s(n){return"number"==typeof n}function h(n){return"function"==typeof n}function v(n){return null!==n&&"object"==r(n)}function p(n){return n.children}function m(n,t,r){this.i=n,this.o=r,this.h=null,this.p=t,this.v=null,this.t=null,this.m=null,this.g=null,this.M=null,this.j=null,this.A=null,this.O=null,this.T=null,this._=null,this.k=null}function y(n,t){n.g=t,void 0!==n.p.ref&&(n.p.ref.current=t)}function d(n){if(n instanceof m)return n;if(a(n))return new m("#",{children:n},null);if(s(n))return new m("#",{children:""+n},null);if(n instanceof Array){var t=new m("[",{},null);return j(t,n),t}return null}function g(n){return a(n)?n:s(n)?""+n:""}function j(n,t){for(var r,u=null,e=0;e<t.length;++e)null!==(r=d(t[e]))&&(r.j=n,r.h=e,null!==u?u.O=r:n.A=r,u=r)}function w(n){for(;;){if(null===n)return null;if(null!==n.g)return n;n=n.j}}function b(n,t,r){k(n,t,r,A,M)}function A(n,t,r,u){if(""!==(t=T(t))){if("style"===t)return v(r)||(r={}),v(u)||(u={}),void x(n[t],r,u);if(a(r)||s(r))n.setAttribute(t,r);else if(t in n)try{n[t]=r}catch(n){}}}function M(n,t,r){if(""!==(t=T(t))){if("style"===t)return v(r)||(r={}),x(n[t],{},r),void n.removeAttribute(t);if(a(r)||s(r))n.removeAttribute(t);else if(t in n)try{n[t]=null}catch(n){}}}function T(n){return"class"===n?"":"className"===n?"class":/^on[A-Z]/.test(n)?n.toLowerCase():n}function x(n,t,r){k(n,t,r,S,E)}function S(n,t,r){n[t]=r}function E(n,t){n[t]=""}function k(n,t,r,u,e){var l;for(l in r)O(r,l)&&(O(t,l)||e(n,l,r[l]));for(l in t)O(t,l)&&u(n,l,t[l],r[l])}function O(n,t){return f.call(n,t)&&void 0!==n[t]&&null!==n[t]}function Z(n){return"svg"===n.i?1:1===n.j.M&&"foreignObject"===n.j.i?0:n.j.M}function C(n){return"["===n||h(n)}new Map;function _(n,t){for(var r,u=t.j;null!==u;){for(r=u.t;null!==r;){if(1===r.G)return void r.F((function(t){return t||n}));r=r.u}u=u.j}throw n}function N(n,t,r,u){this.N=n,this.S=t,this.G=r,this.V=u,this.Z=null,this.q=null,this.u=null}function V(n,t,r){return void 0===t&&(t=null),i=function(){var u=L(t,null);return new N(n,t,r,u)},f=function(r){var u=L(t,r.S);if(1!==u){if(2!==u)return 0===u||3===u?(r.N=n,r.S=t,r.V=u,r.q=r.Z,void(r.Z=null)):void 0;r.V=u}},o(),e=l(i,e,u.m),null===u.m&&(u.m=e),f(e);var i,f}function F(n,t,r){for(var u=t.m;null!==u;){if(u.G===n&&(r||0===u.V||3===u.V))try{G(u)}catch(n){_(n,t)}u=u.u}}function q(n,t,r){for(var u=t.m;null!==u;){if(u.G===n&&(null!==u.q||null!==u.Z)&&(r||0===u.V||3===u.V))try{I(u,r)}catch(n){_(n,t)}u=u.u}}function G(n){n.Z=n.N(),void 0===n.Z&&(n.Z=null)}function I(n,t){null===n.q||t?null!==n.Z&&n.Z():n.q()}function L(n,t){return null===n?0:0===n.length?1:null===t||function(n,t){if(n.length!==t.length)return 0;for(var r=n.length-1;r>=0;--r)if(n[r]!==t[r])return 0;return 1}(n,t)?2:3}function B(n,t){h(n.i)?function(n,t){var r,l=t?n.A:null!==n.T?n.T.A:null;u=n;try{r=n.i(n.p)}catch(t){_(t,n),r=null}u=null,null,null,e=null;var o=d(r);null!==o&&(o.j=n),null!==l&&(null!==o&&o.i===l.i&&o.o===l.o?D(o,l):R(n,l)),n.A=o}(n,t):null!==n.T&&function(n,t){var r,u=P(t),e=P(n);u.forEach((function(t,u){void 0!==(r=e.get(u))&&r.i===t.i?D(r,t):R(n,t)}))}(n,n.T)}function D(n,t){if(n.T=t,h(n.i)){n.v=t.v,n.t=t.t,n.m=t.m;for(var r=n.t;null!==r;)r.C=n,r=r.u}}function R(n,t){null===n._?n._=[t]:n._.push(t)}function P(n){for(var t=new Map,r=n.A;null!==r;)null!==r.o?t.set(r.o,r):t.set(r.h,r),r=r.O;return t}function U(n,t,r,u,e){for(var l=r;;)if(n(l,r,u,e),null===l.A){if(l===r)return;for(;null===l.O;){if(null===l.j||l.j===r)return;l=l.j,null!==t&&t(l)}l=l.O}else l=l.A}var $=new DocumentFragment;function z(n){var t=new Map,r=new Map,u=w(n),e=u.g;u.g=$,U(H,J,n,t,r),e.appendChild($),u.g=e,r.forEach((function(n,t){q(1,t,n)})),t.forEach((function(n,t){F(1,t,n)})),setTimeout((function(){r.forEach((function(n,t){q(0,t,n)})),t.forEach((function(n,t){F(0,t,n)}))}))}function H(n,t,r,u){var e=n===t;if(B(n,e),n.i!==p&&(e?null!==n.m&&(u.set(n,0),r.set(n,0)):null!==n.T?(function(n,t){if(function(n,t){var r,u;n.M=Z(n),C(n.i)||(y(n,t.g),"#"===n.i?n.p.children!==t.p.children&&(r=n.g,u=n.p.children,r.textContent=u):b(n.g,n.p,t.p))}(n,t),null!==n.g){var r=w(n.j);null!==r&&(r.k=n.g)}}(n,n.T),null!==n.m&&(u.set(n.T,0),r.set(n,0)),n.T=null):(function(n){if(function(n){if(n.M=Z(n),!C(n.i)){var t=function(n){return"#"===n.i?(t=n.p.children,document.createTextNode(t)):function(n,t,r){var u=1===n?document.createElementNS("http://www.w3.org/2000/svg",t):document.createElement(t);return b(u,r,{}),u}(n.M,n.i,n.p);var t}(n);y(n,t)}}(n),null!==n.g){var t=w(n.j);if(null!==t){var r=null!==t.k?t.k.nextSibling:t.g.firstChild;t.g.insertBefore(n.g,r),t.k=n.g}}}(n),null!==n.m&&r.set(n,1))),null!==n._){for(var l=0;l<n._.length;++l)(function(n,t){for(var r=n;;){if(null!==n.g)t(n.g);else if(null!==n.A){n=n.A;continue}if(n===r)return;for(;null===n.O;){if(null===n.j||n.j===r)return;n=n.j}n=n.O}})(n._[l],(function(n){null!==n.parentNode&&n.parentNode.removeChild(n)})),U((function(n){null!==n.m&&u.set(n,1)}),null,n._[l]);n._=null}}function J(n){null!==n.k&&(n.k=null)}t.jsx=function(n,t,r){null===t&&(t={});var u=null;void 0!==t.key&&null!==t.key&&(u=""+t.key),delete t.key,void 0===t.ref||t.ref instanceof i||delete t.ref;var e=new m(n,t,u);if(arguments.length>2){var l=arguments.length>3;if(l&&(r=c.call(arguments,2)),h(n))e.p.children=r;else if("#"===n)if(l){for(var o="",f=0;f<r.length;++f)o+=g(r[f]);e.p.children=o}else e.p.children=g(r);else j(e,l?r:[r])}return e},t.mount=function(n,t){z(function(n,t){var r;return(r=t["%vnode"])||((r=new m(p,{},null)).M="ownerSVGElement"in t?1:0,y(r,t),function(n,t){n["%vnode"]=t}(t,r)),r.p.children=n,r}(n,t))},t.useLayoutEffect=function(n,t){return V(n,t,1)}},498:(n,t,r)=>{n.exports=r(782)}},t={};function r(u){var e=t[u];if(void 0!==e)return e.exports;var l=t[u]={exports:{}};return n[u](l,l.exports,r),l.exports}(()=>{"use strict";var n=r(498);function t(n){return function(n){if(Array.isArray(n))return u(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,t){if(n){if("string"==typeof n)return u(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(n,t):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,u=new Array(t);r<t;r++)u[r]=n[r];return u}function e(n){n.sort((function(n,t){return n-t}));var t=Math.floor(n.length/2);return n.length%2!=0?n[t]:(n[t-1]+n[t])/2}var l,o,i,f=document.getElementById("root");function c(t){var r=t.onFinish;(0,n.useLayoutEffect)((function(){r()}),[]);var u=new Array(1e4).fill(1);return(0,n.jsx)("table",null,(0,n.jsx)("tbody",null,u.map((function(t,r){return(0,n.jsx)("tr",{key:r},(0,n.jsx)("td",null,r),(0,n.jsx)("td",null,u[r]))}))))}function a(t){var r=t.onFinish;return(0,n.useLayoutEffect)((function(){r()}),[]),"ABCD"}console.log("Rows: ",1e4),o=50,i=(l=[function(t){(0,n.mount)((0,n.jsx)(c,{onFinish:t}),f)},function(t){(0,n.mount)((0,n.jsx)(a,{onFinish:t}),f)}]).map((function(){return[]})),function n(r){if(r<l.length){var u=performance.now();l[r]((function(){i[r].push(performance.now()-u),setTimeout((function(){n(r+1)}))}))}else--o>0?setTimeout((function(){n(0)})):function(n){var r=[];n.forEach((function(n){var u;r.push({Repeats:n.length,"Avg Time":(u=n,u.reduce((function(n,t){return n+t}),0)/u.length),"Med Time":e(n),"Min Time":Math.min.apply(Math,t(n)),"Max Time":Math.max.apply(Math,t(n))})})),console.table(r),console.log(n)}(i)}(0)})()})();