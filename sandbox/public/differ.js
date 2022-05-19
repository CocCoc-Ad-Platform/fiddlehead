(()=>{"use strict";var n={112:(n,t,r)=>{var e=["key","ref"];function o(n,t){if(null==n)return{};var r,e,o=function(n,t){if(null==n)return{};var r,e,o={},u=Object.keys(n);for(e=0;e<u.length;e++)r=u[e],t.indexOf(r)>=0||(o[r]=n[r]);return o}(n,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(n);for(e=0;e<u.length;e++)r=u[e],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(o[r]=n[r])}return o}function u(n){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},u(n)}function i(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var r=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var e,o,u=[],i=!0,l=!1;try{for(r=r.call(n);!(i=(e=r.next()).done)&&(u.push(e.value),!t||u.length!==t);i=!0);}catch(n){l=!0,o=n}finally{try{i||null==r.return||r.return()}finally{if(l)throw o}}return u}}(n,t)||l(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(n,t){if(n){if("string"==typeof n)return a(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(n,t):void 0}}function a(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}var f=null,c=-1;function h(){if(null===f)throw new Error("Cannot call hooks from outside of the component");return[f,++c]}function s(n){this.current=n}function v(n,t){return Object.prototype.hasOwnProperty.call(n,t)}function y(n){return"string"==typeof n||n instanceof String}function p(n){return"number"==typeof n||n instanceof Number}function d(n){return n instanceof Function}function g(n){return n instanceof Array}function m(n){return null==n}function b(n){this.t=n,this.o={},this.u=null,this.i=null,this.l=[],this.h=null,this.p=[],this.v="",this.m=null,this.g=null,this._=null,this.j=n===S||n===w?C:d(n)?A:j}var w="[",S="=",j=0,A=1,C=2,k=function(n){return n.children},O=0,E=0;function I(n,t){n.g=t,n.i instanceof s&&(n.i.current=t)}function _(n){var t=null;return n instanceof b?t=n:y(n)||p(n)?(t=new b("#")).o.children=n:g(n)&&x(t=new b(w),n),t}function N(n,t,r){t.h=n,t.m=r,n.p[r]=t}function x(n,t){for(var r,e=-1,o=0,u=t.length;o<u;++o)null!==(r=_(t[o]))&&N(n,r,++e)}var F=new Map;function M(n,t,r){for(var e in r)v(r,e)&&m(t[e])&&T(n,e,r[e]);for(var o in t)v(t,o)&&D(n,o,t[o],r[o])}function T(n,t,r){var e=i(G(t,r),2),o=e[0];m(e[1])||n.removeAttribute(o)}function D(n,t,r,e){var o=i(G(t,r),2),u=o[0],l=o[1];if(!m(l))if("style"!==u){if((y(l)||p(l))&&n.setAttribute(u,l),u in n)try{n[u]=l}catch(n){}}else{if(!m(e)){var a=i(G(t,e),2)[1];if(!m(a))for(var f in a)v(a,f)&&!v(l,f)&&(n.style[f]="")}for(var c in l)v(l,c)&&(m(l[c])||(n.style[c]=l[c]))}}function G(n,t){return d(t)?[n.toLowerCase(),t]:"className"===n?g(t)?["class",t.filter((function(n){return y(n)})).join(" ")]:["class",t]:"class"===n?[n]:"style"!==n||m(t)||function(n){return null!==n&&"object"==u(n)}(t)?[n,t]:[n]}function L(n){var t=function(n){return"#"===n.t?(t=n.o.children,document.createTextNode(t)):function(n,t,r){var e=1===n?document.createElementNS("http://www.w3.org/2000/svg",t):document.createElement(t);return M(e,r,{}),e}(n._,n.t,n.o);var t}(n);I(n,t)}function P(n,t){0===n.size?function(n){var t;n.forEach((function(n){null!==(t=V(n))&&(L(n),t.appendChild(n.g))}))}(t):(function(n,t){var r,e="";n.forEach((function(n,o){var u,i;t.has(o)?(I(r=t.get(o),n.g),"#"===r.t?r.o.children!==n.o.children&&(u=r.g,i=r.o.children,u.textContent=i):M(r.g,r.o,n.o)):function(n,t){if(n.length<t.length)return!1;for(var r=t.length-1;r>=0;--r)if(t[r]!==n[r])return!1;return!0}(o,e+"/")||(function(n){for(var t,r=J(n),e=0,o=r.length;e<o;++e)null!==(t=r[e]).parentNode&&t.parentNode.removeChild(t)}(n),e=o)}))}(n,t),function(n,t){var r=[];t.forEach((function(t,e){n.has(e)?(U(r,n.get(e)),r.length=0):r.push(t)})),r.length>0&&U(r,null)}(n,t))}function U(n,t){for(var r,e,o=t&&B(t)||null,u=0,i=n.length;u<i;++u)null!==(e=V(r=n[u]))&&(L(r),null!==o&&e===o.parentNode?e.insertBefore(r.g,o):e.appendChild(r.g))}function V(n){return n.t===k?n.g:null===n.h?null:null===n.h.g?V(n.h):n.h.g}function B(n){if(null!==n.g)return n.g;for(var t=null,r=0,e=n.p.length;r<e&&null===t;++r)t=B(n.p[r]);return t}function J(n){if(null!==n.g)return[n.g];for(var t=[],r=0,e=n.p.length;r<e;++r)t.push.apply(t,function(n){if(Array.isArray(n))return a(n)}(o=J(n.p[r]))||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(o)||l(o)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());var o;return t}function W(n,t,r){this.k=$,this.M=n,this.O=t,this.C=null,this.N=r}var $=0;function z(n){n.C=n.M(),void 0===n.C&&(n.C=null)}function H(n){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];null===n.N||t?null!==n.C&&n.C():n.N()}function R(n){var t,r,e=function(n){var t=K();return Q(n,t),t}(n),o=function(n){var t=K();return q(n,t),t}(n);t=e.S,r=o.S,t.forEach((function(n,t){var e,o=!r.has(t);!function(n,t){for(var r,e=0,o=n.l.length;e<o;++e)(r=n.l[e])instanceof W&&(null!==r.N||null!==r.C)&&(t||1===r.k||4===r.k)&&H(r,t)}(n,o),o&&(e=n.v,F.delete(e))})),P(e.A,o.A),function(n,t){t.forEach((function(t,r){!function(n,t){for(var r,e=0,o=n.l.length;e<o;++e)(r=n.l[e])instanceof W&&(t||1===r.k||4===r.k)&&z(r)}(t,!n.has(r))}))}(e.S,o.S)}function q(n,t){if(n.j===A){t.S.set(n.v,n),f=n,c=-1;var r=_(n.t(n.o));f=null,c=-1,null!==r&&(N(n,r,0),Y(n))}else n.j===j&&t.A.set(n.v,n);for(var e=0,o=n.p.length;e<o;++e)q(n.p[e],t)}function K(){return{S:new Map,A:new Map}}function Q(n,t){n.j===A?t.S.set(n.v,n):n.j===j&&t.A.set(n.v,n);for(var r=0,e=n.p.length;r<e;++r)Q(n.p[r],t)}function X(n,t){var r=this;this.D=n,this.F=t,this.G=function(n){var t;(t=d(n)?n(r.F):n)!==r.F&&(r.F=t,R(r.D))}}function Y(n){for(var t=0,r=n.p.length;t<r;++t)Z(n.p[t],n.v)}function Z(n,t){var r,e;if(n.v=t+"/"+(null!==n.u?(r=n.u,"@"+encodeURIComponent(r)):n.m)+"/"+(n.j===A?function(n){return v(n,"hook_alias")?n.hook_alias:n.hook_alias="{"+(++O).toString(36)}(n.t):n.t),n.j===A){var o=(e=n.v,F.get(e)||null);if(null!==o){n.l=o;for(var u,i=0,l=n.l.length;i<l;++i)(u=n.l[i])instanceof X&&(u.D=n)}!function(n,t){F.set(n,t)}(n.v,n.l)}n._=function(n){return"svg"===n.t?1:1===n.h._&&"foreignObject"===n.h.t?0:n.h._}(n);for(var a=0,f=n.p.length;a<f;++a)Z(n.p[a],n.v)}r.g.false=!0,t.h=function(n,t){for(var r=t||{},u=r.key,i=void 0===u?null:u,l=r.ref,a=void 0===l?null:l,f=o(r,e),c=new b(n),h=arguments.length,s=new Array(h>2?h-2:0),v=2;v<h;v++)s[v-2]=arguments[v];return c.o=f,c.u=i,c.i=a,c.j===A?c.o.children=s.length>1?s:s[0]:x(c,s),c},t.LI=function(n,t){var r=function(n,t){var r;if(!(r=t.hook_vnode)){for(;t.firstChild;)t.removeChild(t.firstChild);(r=new b(k))._="ownerSVGElement"in t?1:0,I(r,t),function(n,t){n.hook_vnode=t}(t,r)}return r.o.children=n,r}(n,t);r.v=function(n){return v(n,"hook_rootid")?n.hook_rootid:n.hook_rootid="~"+(++E).toString(36)}(t),Y(r),R(r)},t.eJ=function(n){var t,r=i(h(),2),e=r[0],o=r[1];return e.l.length>o?t=e.l[o]:(t=new X(e,n),e.l.push(t)),[t.F,t.G]}}},t={};function r(e){var o=t[e];if(void 0!==o)return o.exports;var u=t[e]={exports:{}};return n[e](u,u.exports,r),u.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),(()=>{var n=r(112);function t(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}function e(t){var r=t.children;return(0,n.h)("span",{className:"Wrapper"},r)}function o(t){var r=t.value,e=t.setValue;return(0,n.h)("input",{value:r,onInput:function(n){return e(n.target.value)}})}(0,n.LI)((0,n.h)((function(){var r,u,i=(r=(0,n.eJ)(""),u=2,function(n){if(Array.isArray(n))return n}(r)||function(n,t){var r=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var e,o,u=[],i=!0,l=!1;try{for(r=r.call(n);!(i=(e=r.next()).done)&&(u.push(e.value),!t||u.length!==t);i=!0);}catch(n){l=!0,o=n}finally{try{i||null==r.return||r.return()}finally{if(l)throw o}}return u}}(r,u)||function(n,r){if(n){if("string"==typeof n)return t(n,r);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?t(n,r):void 0}}(r,u)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=i[0],a=i[1],f=function(){switch(l){case"1":return{color:"red"};case"2":return{fontWeight:"bold"};case"3":return{color:"red",fontStyle:"italic"}}return null}();return(0,n.h)("main",null,(0,n.h)("div",{key:"haha"},(0,n.h)(e,null,(0,n.h)(o,{value:l,setValue:a}),(0,n.h)("div",{style:f},"Hello world!"))))}),null),document.getElementById("sandbox-container"))})()})();