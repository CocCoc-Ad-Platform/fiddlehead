(()=>{"use strict";var n={};function t(n){this.current=n}function r(n){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},r(n)}function e(n,t){return Object.prototype.hasOwnProperty.call(n,t)}function o(n){return"string"==typeof n||n instanceof String}function l(n){return"number"==typeof n||n instanceof Number}function i(n){return n instanceof Function}function a(n){return n instanceof Array}function u(n){return null==n}function c(n){this.type_=n,this.props_={},this.key_=null,this.ref_=null,this.hooks_=[],this.parent_=null,this.children_=[],this.path_="",this.posInRow_=null,this.nativeNode_=null,this.ns_=null,this.class_=n===s||n===f?p:i(n)?h:_}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}();var f="[",s="=",_=0,h=1,p=2,y=function(n){return n.children},d=0,v=0;function m(n,r){n.nativeNode_=r,n.ref_ instanceof t&&(n.ref_.current=r)}function b(n){var t=null;return n instanceof c?t=n:o(n)||l(n)?(t=new c("#")).props_.children=n:a(n)&&w(t=new c(f),n),t}function g(n,t,r){t.parent_=n,t.posInRow_=r,n.children_[r]=t}function w(n,t){for(var r,e=-1,o=0,l=t.length;o<l;++o)null!==(r=b(t[o]))&&g(n,r,++e)}var k=["key","ref"];function S(n,t){if(null==n)return{};var r,e,o=function(n,t){if(null==n)return{};var r,e,o={},l=Object.keys(n);for(e=0;e<l.length;e++)r=l[e],t.indexOf(r)>=0||(o[r]=n[r]);return o}(n,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(e=0;e<l.length;e++)r=l[e],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(o[r]=n[r])}return o}function A(n,t){var r=t||{},e=r.key,o=void 0===e?null:e,l=r.ref,i=void 0===l?null:l,a=S(r,k),u=new c(n);u.props_=a,u.key_=o,u.ref_=i;for(var f=arguments.length,s=new Array(f>2?f-2:0),_=2;_<f;_++)s[_-2]=arguments[_];return u.class_===h?u.props_.children=s.length>1?s:s[0]:w(u,s),u}function N(n,t){n.hook_vnode=t}var j=new Map,C=null,E=-1;function O(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var r=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var e,o,l=[],i=!0,a=!1;try{for(r=r.call(n);!(i=(e=r.next()).done)&&(l.push(e.value),!t||l.length!==t);i=!0);}catch(n){a=!0,o=n}finally{try{i||null==r.return||r.return()}finally{if(a)throw o}}return l}}(n,t)||function(n,t){if(n){if("string"==typeof n)return I(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?I(n,t):void 0}}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}function x(n,t,r){for(var o in r)e(r,o)&&u(t[o])&&D(n,o,r[o]);for(var l in t)e(t,l)&&M(n,l,t[l],r[l])}function D(n,t,r){var e=O(V(t,r),2),o=e[0];u(e[1])||n.removeAttribute(o)}function M(n,t,r,i){var a=O(V(t,r),2),c=a[0],f=a[1];if(!u(f))if("style"!==c){if((o(f)||l(f))&&n.setAttribute(c,f),c in n)try{n[c]=f}catch(n){}}else{if(!u(i)){var s=O(V(t,i),2)[1];if(!u(s))for(var _ in s)e(s,_)&&!e(f,_)&&(n.style[_]="")}for(var h in f)e(f,h)&&(u(f[h])||(n.style[h]=f[h]))}}function V(n,t){return i(t)?[n.toLowerCase(),t]:"className"===n?a(t)?["class",t.filter((function(n){return o(n)})).join(" ")]:["class",t]:"class"===n?(__DEV__&&console.error("className instead of class"),[n]):"style"!==n||u(t)||function(n){return null!==n&&"object"===r(n)}(t)?[n,t]:(__DEV__&&console.error("Style must be an object",t),[n])}function T(n){var t=function(n){return"#"===n.type_?(t=n.props_.children,document.createTextNode(t)):(r=n.ns_,e=n.type_,o=n.props_,x(l=1===r?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e),o,{}),l);var t,r,e,o,l}(n);m(n,t),__DEV__&&null!==t&&N(t,n)}function R(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}function U(n,t){0===n.size?function(n){var t;n.forEach((function(n){null!==(t=P(n))&&(T(n),t.appendChild(n.nativeNode_))}))}(t):(function(n,t){var r,e="";n.forEach((function(n,o){var l,i;t.has(o)?(m(r=t.get(o),n.nativeNode_),"#"===r.type_?r.props_.children!==n.props_.children&&(l=r.nativeNode_,i=r.props_.children,l.textContent=i):x(r.nativeNode_,r.props_,n.props_)):function(n,t){if(n.length<t.length)return!1;for(var r=t.length-1;r>=0;--r)if(t[r]!==n[r])return!1;return!0}(o,e+"/")||(function(n){for(var t,r=F(n),e=0,o=r.length;e<o;++e)null!==(t=r[e]).parentNode&&t.parentNode.removeChild(t)}(n),e=o)}))}(n,t),function(n,t){var r=[];t.forEach((function(t,e){n.has(e)?($(r,n.get(e)),r.length=0):r.push(t)})),r.length>0&&$(r,null)}(n,t))}function $(n,t){for(var r,e,o=t&&B(t)||null,l=0,i=n.length;l<i;++l)null!==(e=P(r=n[l]))&&(T(r),null!==o&&e===o.parentNode?e.insertBefore(r.nativeNode_,o):e.appendChild(r.nativeNode_))}function P(n){return n.type_===y?n.nativeNode_:null===n.parent_?null:null===n.parent_.nativeNode_?P(n.parent_):n.parent_.nativeNode_}function B(n){if(null!==n.nativeNode_)return n.nativeNode_;for(var t=null,r=0,e=n.children_.length;r<e&&null===t;++r)t=B(n.children_[r]);return t}function F(n){if(null!==n.nativeNode_)return[n.nativeNode_];for(var t=[],r=0,e=n.children_.length;r<e;++r)t.push.apply(t,function(n){if(Array.isArray(n))return R(n)}(o=F(n.children_[r]))||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(o)||function(n,t){if(n){if("string"==typeof n)return R(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?R(n,t):void 0}}(o)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());var o;return t}function z(n,t,r){this.tag_=q,this.callback_=n,this.deps_=t,this.destroy_=null,this.lastDestroy_=r}var G,L,Y,q=0;function H(n){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];null===n.lastDestroy_||t?null!==n.destroy_&&n.destroy_():n.lastDestroy_()}function J(n){var t,r,e=function(n){var t=Q();return W(n,t),t}(n),o=function(n){var t=Q();return K(n,t),t}(n);t=e.functional_,r=o.functional_,t.forEach((function(n,t){var e,o=!r.has(t);!function(n,t){for(var r,e=0,o=n.hooks_.length;e<o;++e)(r=n.hooks_[e])instanceof z&&(null!==r.lastDestroy_||null!==r.destroy_)&&(t||1===r.tag_||4===r.tag_)&&H(r,t)}(n,o),o&&(e=n.path_,j.delete(e))})),U(e.viewable_,o.viewable_),function(n,t){t.forEach((function(t,r){!function(n,t){for(var r,e=0,o=n.hooks_.length;e<o;++e)(r=n.hooks_[e])instanceof z&&(t||1===r.tag_||4===r.tag_)&&((l=r).destroy_=l.callback_(),void 0===l.destroy_&&(l.destroy_=null));var l}(t,!n.has(r))}))}(e.functional_,o.functional_)}function K(n,t){if(n.class_===h){t.functional_.set(n.path_,n),C=n,E=-1;var r=b(n.type_(n.props_));C=null,E=-1,null!==r&&(g(n,r,0),tn(n))}else n.class_===_&&t.viewable_.set(n.path_,n);for(var e=0,o=n.children_.length;e<o;++e)K(n.children_[e],t)}function Q(){return{functional_:new Map,viewable_:new Map}}function W(n,t){n.class_===h?t.functional_.set(n.path_,n):n.class_===_&&t.viewable_.set(n.path_,n);for(var r=0,e=n.children_.length;r<e;++r)W(n.children_[r],t)}function X(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}function Z(n,t){var r=this;this.context_=n,this.value_=t,this.setValue_=function(n){var t;(t=i(n)?n(r.value_):n)!==r.value_&&(r.value_=t,J(r.context_))}}function nn(n){var t,r,e,o=(r=function(){if(null===C)throw new Error("Cannot call hooks from outside of the component");return[C,++E]}(),e=2,function(n){if(Array.isArray(n))return n}(r)||function(n,t){var r=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var e,o,l=[],i=!0,a=!1;try{for(r=r.call(n);!(i=(e=r.next()).done)&&(l.push(e.value),!t||l.length!==t);i=!0);}catch(n){a=!0,o=n}finally{try{i||null==r.return||r.return()}finally{if(a)throw o}}return l}}(r,e)||function(n,t){if(n){if("string"==typeof n)return X(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?X(n,t):void 0}}(r,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=o[0],i=o[1];return l.hooks_.length>i?t=l.hooks_[i]:(t=new Z(l,n),l.hooks_.push(t)),[t.value_,t.setValue_]}function tn(n){for(var t=0,r=n.children_.length;t<r;++t)rn(n.children_[t],n.path_)}function rn(n,t){var r,o,l;if(n.path_=t+"/"+(null!==n.key_?(r=n.key_,"@"+encodeURIComponent(r)):n.posInRow_)+"/"+(n.class_===h?e(l=n.type_,"hook_alias")?l.hook_alias:l.hook_alias=function(n){return(__DEV__?n.name:"")+"{"+(++d).toString(36)}(l):n.type_),n.class_===h){var i=(o=n.path_,j.get(o)||null);if(null!==i){n.hooks_=i;for(var a,u=0,c=n.hooks_.length;u<c;++u)(a=n.hooks_[u])instanceof Z&&(a.context_=n)}!function(n,t){j.set(n,t)}(n.path_,n.hooks_)}n.ns_=function(n){return"svg"===n.type_?1:1===n.parent_.ns_&&"foreignObject"===n.parent_.type_?0:n.parent_.ns_}(n);for(var f=0,s=n.children_.length;f<s;++f)rn(n.children_[f],n.path_)}function en(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var r=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var e,o,l=[],i=!0,a=!1;try{for(r=r.call(n);!(i=(e=r.next()).done)&&(l.push(e.value),!t||l.length!==t);i=!0);}catch(n){a=!0,o=n}finally{try{i||null==r.return||r.return()}finally{if(a)throw o}}return l}}(n,t)||function(n,t){if(n){if("string"==typeof n)return on(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?on(n,t):void 0}}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function on(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}function ln(n){n.count;var t=n.setCount,r=en(nn("cat"),2),e=r[0],o=r[1];return A("form",{className:"YourAd",style:{padding:"16px",border:"1px solid #ccc"}},A("input",{type:"checkbox",checked:"cat"===e,onChange:function(n){return o(n.target.checked?"cat":"dog")}}),A("main",null,"cat"===e&&A("div-cat",{className:"Cat",style:{display:"block"}},"spam Render Cat"),"dog"===e&&A("div-dog",{className:"Dog",style:{display:"block"}},"spam Render Dog")),A("button",{type:"button",onclick:function(){t((function(n){return n+1}))}},"Update count"))}n.g.__DEV__=!0,(L=function(n,t){var r;if(!(r=t.hook_vnode)){for(;t.firstChild;)t.removeChild(t.firstChild);(r=new c(y)).ns_="ownerSVGElement"in t?1:0,m(r,t),N(t,r)}return r.props_.children=n,r}(A((function(){var n=en(nn(1),2),t=n[0];return A("article",{className:"MyAd"},"Count "+t,A(ln,{count:t,setCount:n[1]}))}),null),G=document.getElementById("sandbox-container"))).path_=e(Y=G,"hook_rootid")?Y.hook_rootid:Y.hook_rootid="~"+(++v).toString(36),tn(L),J(L)})();