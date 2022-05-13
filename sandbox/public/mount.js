(()=>{"use strict";var n={526:(n,t)=>{var e=["key","ref"],r=["key","ref"];function o(n){return function(n){if(Array.isArray(n))return i(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||a(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(n,t){if(null==n)return{};var e,r,o=function(n,t){if(null==n)return{};var e,r,o={},l=Object.keys(n);for(r=0;r<l.length;r++)e=l[r],t.indexOf(e)>=0||(o[e]=n[e]);return o}(n,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(r=0;r<l.length;r++)e=l[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(o[e]=n[e])}return o}function u(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var r,o,l=[],u=!0,a=!1;try{for(e=e.call(n);!(u=(r=e.next()).done)&&(l.push(r.value),!t||l.length!==t);u=!0);}catch(n){a=!0,o=n}finally{try{u||null==e.return||e.return()}finally{if(a)throw o}}return l}}(n,t)||a(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(n,t){if(n){if("string"==typeof n)return i(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?i(n,t):void 0}}function i(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function c(n,t){return Object.prototype.hasOwnProperty.call(n,t)}function s(n){return"string"==typeof n||n instanceof String}function f(n){return"number"==typeof n||n instanceof Number}function h(n){return n instanceof Function}function _(n){return n instanceof Array}function v(n){return null==n}var p=null,d=-1;function y(){if(null===p)throw new Error("Cannot call hooks from outside of the component");return[p,++d]}function g(n){this.current=n}function m(n,t,e,r){this.type_=n,this.props_=t,this.key_=e,this.ref_=r,this.hooks_=[],this.parent_=null,this.children_=[],this.path_=[],this.posInRow_=null,this.data_=null,this.nativeNode_=null,this.ns_=null}var b="#",w="<",k="html",A="svg";function N(n,t){n.nativeNode_=t,n.ref_ instanceof g&&(n.ref_.current=t)}function S(n){if(n instanceof m)return n;if(s(n)||f(n)){var t=new m(b,{},null,null);return t.data_=n,t}if(_(n)){for(var e=new m("[",{},null,null),r=-1,o=0;o<n.length;o++){var l=S(n[o]);null!==l&&O(e,l,++r)}return e}return null}function O(n,t,e){t.parent_=n,t.posInRow_=e,n.children_[e]=t}function E(n,t){for(var r=t.key,o=void 0===r?null:r,u=t.ref,a=void 0===u?null:u,i=l(t,e),c=arguments.length,s=new Array(c>2?c-2:0),f=2;f<c;f++)s[f-2]=arguments[f];return i.children=s,new m(n,i,o,a)}function I(n,t){for(var e=t.key,o=void 0===e?null:e,u=t.ref,a=void 0===u?null:u,i=l(t,r),c=new m(n,i,o,a),s=-1,f=0;f<(arguments.length<=2?0:arguments.length-2);f++){var h=S(f+2<2||arguments.length<=f+2?void 0:arguments[f+2]);null!==h&&O(c,h,++s)}return c}function j(n){return n.join("/")}var x=0,C=0;function R(n){return c(n,"hook_cid")||(n.hook_cid="~"+(++C).toString(36)),n.hook_cid}function M(n,t){n.hook_vnode=t}var B=new Map;function L(n,t,e){for(var r in e)c(e,r)&&v(t[r])&&D(n,r,e[r]);for(var o in t)c(t,o)&&T(n,o,t[o],e[o])}function D(n,t,e){var r=u(H(t,e),2),o=r[0];v(r[1])||n.removeAttribute(o)}function T(n,t,e,r){var o=u(H(t,e),2),l=o[0],a=o[1];if(!v(a))if("style"!==l){if((s(a)||f(a))&&n.setAttribute(l,a),l in n)try{n[l]=a}catch(n){}}else{if(!v(r)){var i=u(H(t,r),2)[1];if(!v(i))for(var h in i)c(i,h)&&!c(a,h)&&(n.style[h]="")}for(var _ in a)c(a,_)&&(v(a[_])||(n.style[_]=a[_]))}}function H(n,t){return h(t)?[n.toLowerCase(),t]:"className"===n?_(t)?["class",t.filter((function(n){return s(n)})).join(" ")]:["class",t]:"class"===n?(console.error("className instead of class"),[n]):"style"!==n||v(t)||function(n){return!!n&&n.constructor===Object}(t)?[n,t]:(console.error("Style must be a plain object",t),[n])}function V(n){"svg"===n.type_?n.ns_=A:null!==n.parent_?n.ns_=n.parent_.ns_:n.ns_=k;var t,e,r,o,l,u=null;if(n.type_===b)l=n.data_,u=document.createTextNode(l);else if(n.type_===w||"["===n.type_);else if(s(n.type_)){var a=null;n.ns_===A&&(a="http://www.w3.org/2000/svg"),t=a,e=n.type_,r=n.props_,L(o=null!==t?document.createElementNS(t,e):document.createElement(e),r,{}),M(u=o,n)}N(n,u);for(var i=0;i<n.children_.length;i++)V(n.children_[i])}function z(n,t){for(var e=t&&U(t)[0]||null,r=0;r<n.length;r++){var o=n[r];if(null!==o.nativeNode_){var l=P(o);null!==l&&(null!==e&&l===e.parentNode?l.insertBefore(o.nativeNode_,e):l.appendChild(o.nativeNode_))}}}function P(n){return null===n.parent_?null:null===n.parent_.nativeNode_?P(n.parent_):n.parent_.nativeNode_}function U(n){if(null!==n.nativeNode_)return[n.nativeNode_];for(var t=[],e=0;e<n.children_.length;e++){var r=n.children_[e];t.push.apply(t,o(U(r)))}return t}function $(n,t,e){this.tag_=J,this.callback_=n,this.deps_=t,this.destroy_=null,this.lastDestroy_=e}var J=0;function W(n){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];null===n.lastDestroy_||t?null!==n.destroy_&&n.destroy_():n.lastDestroy_()}function F(n){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return null===n?1:0===n.length?2:!1===t||G(n,t)?3:4}function G(n,t){for(var e=0;e<n.length;e++)if(n[e]!==t[e])return!1;return!0}function Q(n,t){var e=u(t?[new Map,new Map]:K(n),2),r=e[0],o=e[1];q(n);var l=u(K(n),2),a=l[0],i=l[1];!function(n,t){n.forEach((function(n,e){var r,o=!t.has(e);!function(n,t){for(var e=0;e<n.hooks_.length;e++){var r=n.hooks_[e];r instanceof $&&(null!==r.lastDestroy_||null!==r.destroy_)&&(t||1===r.tag_||4===r.tag_)&&W(r,t)}}(n,o),o&&(r=j(n.path_),B.delete(r))}))}(o,i),V(n),function(n,t){!function(n,t){var e="";n.forEach((function(n,r){if(t.has(r)){var o=t.get(r);N(o,n.nativeNode_),o.type_===b?o.data_!==n.data_&&(l=o.nativeNode_,u=o.data_,l.textContent=u):L(o.nativeNode_,o.props_,n.props_)}else r.startsWith(e+"/")||(function(n){for(var t=U(n),e=0;e<t.length;e++){var r=t[e];null!==r.parentNode&&r.parentNode.removeChild(r)}}(n),e=r);var l,u}))}(n,t),function(n,t){var e=[];t.forEach((function(t,r){n.has(r)?(z(e,n.get(r)),e.length=0):e.push(t)})),e.length>0&&z(e,null)}(n,t)}(r,a),function(n,t){t.forEach((function(t,e){!function(n,t){for(var e=0;e<n.hooks_.length;e++){var r=n.hooks_[e];r instanceof $&&(t||1===r.tag_||4===r.tag_)&&((o=r).destroy_=o.callback_())}var o}(t,!n.has(e))}))}(o,i)}function q(n){if(n.type_!==b)if(h(n.type_)){p=n,d=-1;var t=S(n.type_(n.props_));p=null,d=-1,null!==t&&(O(n,t,0),Z(n),q(t))}else for(var e=0;e<n.children_.length;e++)q(n.children_[e])}function K(n){var t=new Map,e=new Map;return X(n,e,t),[t,e]}function X(n,t,e){h(n.type_)?t.set(j(n.path_),n):"["!==n.type_&&n.type_!==w&&e.set(j(n.path_),n);for(var r=0;r<n.children_.length;r++)X(n.children_[r],t,e)}function Y(n,t){var e=this;this.context_=n,this.value_=t,this.setValue_=function(n){var t;(t=h(n)?n(e.value_):n)!==e.value_&&(e.value_=t,Q(e.context_,!1))}}function Z(n){for(var t=0;t<n.children_.length;t++)nn(n.children_[t],n.path_)}function nn(n,t){var e,r,l,u=o(t);if(null!==n.key_?u.push((e=n.key_,"@"+encodeURIComponent(e))):u.push(n.posInRow_),h(n.type_)?u.push((c(l=n.type_,"hook_alias")||(l.hook_alias="{"+(++x).toString(36)),l.hook_alias)):u.push(n.type_),n.path_=u,h(n.type_)){var a=(r=j(n.path_),B.has(r)?B.get(r):null);if(null!==a){n.hooks_=a;for(var i=0;i<n.hooks_.length;i++){var s=n.hooks_[i];s instanceof Y&&(s.context_=n)}}!function(n,t){var e=j(n);B.set(e,t)}(n.path_,n.hooks_)}for(var f=0;f<n.children_.length;f++)nn(n.children_[f],u)}t.h=function(n,t){t=t||{};for(var e=arguments.length,r=new Array(e>2?e-2:0),o=2;o<e;o++)r[o-2]=arguments[o];return null===n?I.apply(void 0,[w,t].concat(r)):h(n)?E.apply(void 0,[n,t].concat(r)):I.apply(void 0,[n,t].concat(r))},t.LI=function(n,t){if(t.firstChild)throw new Error("Container must be empty");var e=S(n),r=new m(t.nodeName.toLowerCase(),{},null,null);r.path_=[R(t)],r.ns_=t.ownerSVGElement?A:k,N(r,t),M(t,r),O(r,e,0),Z(r),Q(e,!0)},t.d4=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,e=y(),r=u(e,2),o=r[0],l=r[1];if(o.hooks_.length>l){var a=o.hooks_[l];if((null!==t||null!==a.deps_)&&t.length!==a.deps_.length)throw new Error("Deps must be size-fixed");var i=F(t,a.deps_);if(2===i)return;if(3===i)return void(a.tag_=i);if(1===i||4===i){var c=new $(n,t,a.destroy_);return c.tag_=i,void(o.hooks_[l]=c)}}else{var s=new $(n,t,null);s.tag_=F(t),o.hooks_.push(s)}},t.sO=function(n){var t=u(y(),2),e=t[0],r=t[1];if(e.hooks_.length>r)return e.hooks_[r];var o=new g(n);return e.hooks_.push(o),o},t.eJ=function(n){var t=u(y(),2),e=t[0],r=t[1];if(e.hooks_.length>r){var o=e.hooks_[r];return[o.value_,o.setValue_]}var l=new Y(e,n);return e.hooks_.push(l),[l.value_,l.setValue_]}}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var l=t[r]={exports:{}};return n[r](l,l.exports,e),l.exports}(()=>{var n=e(526);function t(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function r(t){var e=t.children,r=t.myRef;return(0,n.h)("span",{className:"Wrapper",ref:r},e)}function o(t){var e=t.children,o=t.myRef;return(0,n.h)(r,{myRef:o},e)}function l(){var e,r,l=(e=(0,n.eJ)("A"),r=2,function(n){if(Array.isArray(n))return n}(e)||function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var r,o,l=[],u=!0,a=!1;try{for(e=e.call(n);!(u=(r=e.next()).done)&&(l.push(r.value),!t||l.length!==t);u=!0);}catch(n){a=!0,o=n}finally{try{u||null==e.return||e.return()}finally{if(a)throw o}}return l}}(e,r)||function(n,e){if(n){if("string"==typeof n)return t(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(n,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=l[0],a=l[1],i=(0,n.sO)(null),c=(0,n.sO)(null);return(0,n.d4)((function(){return console.log("effect always",i.current,c.current),function(){console.log("unmount always",i.current,c.current)}})),(0,n.d4)((function(){return console.log("effect deps",i.current,c.current),function(){console.log("unmount deps",i.current,c.current)}}),[u]),(0,n.d4)((function(){return console.log("effect lazy",i.current,c.current),function(){console.log("unmount lazy",i.current,c.current)}}),[]),(0,n.h)("div",{className:"Root",ref:i},(0,n.h)("select",{onChange:function(n){return a(n.target.value)}},(0,n.h)("option",{key:"HAHAH@#$%#@#@][",value:"A",selected:"A"===u},"Layout A"),(0,n.h)("option",{key:1234,value:"B",selected:"B"===u},"Layout B")),(0,n.h)("div",{style:{marginTop:"100px"}},(0,n.h)("span",null,"Hi,"),"A"===u&&(0,n.h)(null,null,(0,n.h)(o,{myRef:c},(0,n.h)("b",null,"My")),(0,n.h)(null,null,(0,n.h)(null,null,(0,n.h)("i",null,"name"),(0,n.h)("span",null,(0,n.h)("u",null,"is"))))),"B"===u&&(0,n.h)(null,null,(0,n.h)("b",null,"I"),(0,n.h)(o,{myRef:c},(0,n.h)(null,null,(0,n.h)("i",null,(0,n.h)(null,null,"am"))))),(0,n.h)(o,null,(0,n.h)(null,null,(0,n.h)("a",null,"Quyet")))))}function u(){return console.timeEnd("mount"),null}console.time("stack"),console.time("mount"),(0,n.LI)((0,n.h)((function(){return[(0,n.h)(l,null),(0,n.h)(u,null)]}),null),document.getElementById("sandbox-container")),console.timeEnd("stack")})()})();