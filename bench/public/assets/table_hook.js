!function(){var n={497:function(n,t){var l=function(n){return n.children};function r(n,t){this.l=n,this.t=null,this.u=null,this.i=t,this.o=null,this.h=null,this.p=null,this.v=null,this.m=null,this.j=null,this.O=null,this.T=null,this.g=null,this.M=null,this.A=null,this.C=null,this._=null,this.k=null}var e=function(n,t){n.v=t,null!==n.j&&(n.j.current=t)};function u(n,t){this.G=n,this.v=t}var i=function(n){var t=new r(l,{children:n.G});return t.m="ownerSVGElement"in n.v?1:0,e(t,n.v),t},o=function(n){for(;;){if(null===n)return null;if(null!==n.v)return n;n=n.O}},f=function(n,t,l){var r=t.T;if(null!==r)for(;;){if(r===l)return;if(null!==r.v)n(r.v);else if(null!==r.T){r=r.T;continue}if(r===t)return;for(;null===r.g;){if(null===r.O||r.O===t)return;r=r.O}r=r.g}},c=Object.prototype.hasOwnProperty,a=Array.prototype.slice,s=function(n){return"string"==typeof n},v=function(n){return"number"==typeof n},h=function(n){return"function"==typeof n},p=function(n){return n instanceof Array},d=function(n,t,l){x(n,t,l,m,y)},m=function(n,t,l,r){if(""!==(t=g(t)))if("style"!==t){if(l!==r){if(t in n)try{n[t]=l}catch(n){}b(t,l)&&n.setAttribute(t,l)}}else w(n[t],l,r)},y=function(n,t,l){if(""!==(t=g(t))){if("style"===t)return w(n[t],null,l),void n.removeAttribute(t);if(t in n)try{n[t]=null}catch(n){}b(t,l)&&n.removeAttribute(t)}},g=function(n){return"className"===n?"class":n.length>=4&&111===n.charCodeAt(0)&&110===n.charCodeAt(1)&&n.charCodeAt(2)<=90&&n.charCodeAt(2)>=65?n.toLowerCase():n},b=function(n,t){return"innerHTML"!==n&&"innerText"!==n&&"textContent"!==n&&!(!s(t)&&!v(t))},w=function(n,t,l){x(n,t,l,A,j)},A=function(n,t,l){n[t]=l},j=function(n,t){n[t]=""},x=function(n,t,l,r,e){var u,i=null==t;if(null==l)if(i);else for(u in t)O(t,u)&&r(n,u,t[u]);else if(i)for(u in l)O(l,u)&&e(n,u,l[u]);else{for(u in l)O(l,u)&&(O(t,u)||e(n,u,l[u]));for(u in t)O(t,u)&&r(n,u,t[u],l[u])}},O=function(n,t){return c.call(n,t)&&null!=n[t]},T=function(n){null!==n.parentNode&&n.parentNode.removeChild(n)},M=function(n){var t,l;n.m=k(n),C(n.l)||("#"===n.l?(l=n.i,t=document.createTextNode(l)):t=function(n,t,l){var r=1===n?document.createElementNS("http://www.w3.org/2000/svg",t):document.createElement(t);return d(r,l),r}(n.m,n.l,n.i),e(n,t))},k=function(n){return"svg"===n.l?1:1===n.O.m&&"foreignObject"===n.O.l?0:n.O.m},C=function(n){return"["===n||h(n)},E=function(n,t){if(function(n,t){var l,r;n.m=k(n),C(n.l)||(e(n,t.v),"#"===n.l?(l=n.v,(r=n.i)!==t.i&&(l.textContent=r)):d(n.v,n.i,t.i))}(n,t),null!==n.v){var l=o(n.O);null!==l&&(l._=n.v)}},F=function(n){if(null!==n.v){var t=o(n.O);null!==t&&(l=t.v,r=n.v,e=t._,l.insertBefore(r,null!==e?e.nextSibling:l.firstChild),t._=n.v)}var l,r,e},L=null,N=null,H=function(n,t,l){if(null===t)return null===l?n(L):l;if(null===t.H){var r=n(L);return t.H=r,r}return t.H},I=function(){if(null===L)throw new Error("Cannot use hooks from outside of components")};var S=function(n,t){for(var l,r=t.O;null!==r;){for(l=r.h;null!==l;){if(1===l.L)return void l.V((function(t){return null!=t?t:n}));l=l.H}r=r.O}throw n};function _(n,t,l){this.L=n,this.B=t,this.D=l,this.F=null,this.I=null,this.H=null}var B=function(n,t,l){for(var r=t.p;null!==r;){if(r.L===n&&(l||z(r.D,r.I)))try{G(r)}catch(n){S(n,t)}r=r.H}},D=function(n,t,l){for(var r=t.p;null!==r;){if(r.L===n&&null!==r.F&&(l||z(r.D,r.I)))try{r.F()}catch(n){S(n,t)}r=r.H}},G=function(n){n.I=n.D,n.F=n.B(),void 0===n.F&&(n.F=null)},z=function(n,t){return null===n||0!==n.length&&null!==t&&!function(n,t){if(n.length!==t.length)return!1;for(var l=n.length-1;l>=0;--l)if(n[l]!==t[l])return!1;return!0}(n,t)};function R(n){this.current=n}var V=function(n,t){for(var l,r=null,e=0;e<t.length;++e)null!==(l=$(t[e]))&&(l.O=n,l.u=e,null!==r?r.g=l:n.T=l,r=l)},P={};function U(n,t,l){this.l=n,this.i=t,this.G=l}Object.freeze(P);var $=function(n){if(n instanceof U)return function(n){var t=n.l,l=n.G,e=h(t),u=void 0!==l,i=n.i,o=null,f=null;null===i?e&&(u?(i={children:l},Object.freeze(i)):i=P):(void 0!==i.key&&(o=v(i.key)?""+i.key:i.key,delete i.key),e?(u&&(i.children=l),Object.freeze(i)):void 0!==i.ref&&(i.ref instanceof R&&(f=i.ref),delete i.ref));var c=new r(t,i);return c.t=o,c.j=f,u&&(e||("#"===t?s(l)?c.i=l:c.i=""+l:p(l)?V(c,l):function(n,t){var l=$(t);null!==l&&(n.T=l,l.O=n)}(c,l))),c}(n);if(s(n))return new r("#",n);if(v(n))return new r("#",""+n);if(p(n)){var t=new r("[",null);return V(t,n),t}return n instanceof u?i(n):null},q=function(n,t){n.M=t},J=function(n,t){null===n.A?n.A=[t]:n.A.push(t)},K=function(n){for(var t=new Map,l=n.T;null!==l;)null!==l.t?t.set(l.t,l):t.set(l.u,l),l=l.g;return t},Q=function(n){var t=new Map,l=new Map,r=o(n);f((function(n){r._=n}),r,n),Y(W,X,n,t,l),r._=null,l.forEach((function(n,t){D(1,t,n)})),t.forEach((function(n,t){B(1,t,n)})),setTimeout((function(){l.forEach((function(n,t){D(0,t,n)})),t.forEach((function(n,t){B(0,t,n)}))}))},W=function(n,t,r,e){var u,i=n===t;if(function(n,t){h(n.l)?function(n,t,l){if(null!==t){n.o=t.o,n.h=t.h,n.p=t.p;for(var r=n.h;null!==r;)r.N=n,r=r.H;n.k=t.k,t.k=null}var e;L=n;try{e=n.l(n.i)}catch(t){S(t,n),e=null}L=null,null,null,N=null;var u=$(e);null!==u&&(u.O=n);var i=l?n.T:null!==t?t.T:null;null!==i&&(null!==u&&u.l===i.l&&u.t===i.t?q(u,i):J(n,i)),n.T=u}(n,n.M,t):null!==n.M&&function(n,t){var l,r=K(t),e=K(n);r.forEach((function(t,r){void 0!==(l=e.get(r))&&l.l===t.l?q(l,t):J(n,t)}))}(n,n.M)}(n,i),n.l!==l&&(i?null!==n.p&&(e.set(n,!1),r.set(n,!1)):null!==n.M?(E(n,n.M),null!==n.p&&(e.set(n.M,!1),r.set(n,!1)),n.M=null):(M(n),null!==n.T?null!==n.O.C?(n.C=1,F(n)):null!==n.v&&(n.C=0):F(n),null!==n.p&&r.set(n,!0))),null!==n.A){for(var o=0;o<n.A.length;++o)null!==(u=n.A[o]).v?T(u.v):f(T,u),Y((function(n){null!==n.p&&e.set(n,!0),null!==n.k&&(clearTimeout(n.k),n.k=null)}),null,n.A[o]);n.A=null}null!==n.k&&(clearTimeout(n.k),n.k=null)},X=function(n){0===n.C&&F(n),n._=null,n.C=null},Y=function(n,t,l,r,e){for(var u=l;;)if(n(u,l,r,e),null===u.T){if(u===l)return;for(;null===u.g;){if(null===u.O||u.O===l)return;u=u.O,null!==t&&t(u)}u=u.g}else u=u.T};t.jsx=function(n,t,l){return arguments.length>3&&(l=a.call(arguments,2)),new U(n,t,l)},t.render=function(n,t){var l=t["%vnode"];if(l)l.i.children=n;else{var r=function(n,t){return new u(n,t)}(n,t);!function(n,t){n["%vnode"]=t}(t,l=i(r))}Q(l)},t.useLayoutEffect=function(n,t){return function(n,t,l){return void 0===l&&(l=null),r=function(){return new _(n,t,l)},e=function(n){n.B=t,n.D=l},I(),N=H(r,N,L.p),null===L.p&&(L.p=N),e(N);var r,e}(1,n,t)}},678:function(n,t,l){n.exports=l(497)}},t={};function l(r){var e=t[r];if(void 0!==e)return e.exports;var u=t[r]={exports:{}};return n[r](u,u.exports,l),u.exports}!function(){"use strict";var n=l(678);function t(n){return function(n){if(Array.isArray(n))return r(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,t){if(n){if("string"==typeof n)return r(n,t);var l=Object.prototype.toString.call(n).slice(8,-1);return"Object"===l&&n.constructor&&(l=n.constructor.name),"Map"===l||"Set"===l?Array.from(n):"Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?r(n,t):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(n,t){(null==t||t>n.length)&&(t=n.length);for(var l=0,r=new Array(t);l<t;l++)r[l]=n[l];return r}function e(n){n.sort((function(n,t){return n-t}));var t=Math.floor(n.length/2);return n.length%2!=0?n[t]:(n[t-1]+n[t])/2}var u=1e4;console.log("Rows: ",u);var i,o,f,c=document.getElementById("root");function a(t){var l=t.onFinish;return(0,n.useLayoutEffect)((function(){l()}),[]),"ABCD"}function s(t){var l=t.onFinish;(0,n.useLayoutEffect)((function(){l()}),[]);var r=new Array(u).fill(1);return(0,n.jsx)("table",null,(0,n.jsx)("tbody",null,r.map((function(t,l){return(0,n.jsx)("tr",{key:l},(0,n.jsx)("td",{className:"cell"},l+"-aaa"),(0,n.jsx)("td",{className:"cell"},l+"-bbb"))}))))}function v(t){var l=t.onFinish;(0,n.useLayoutEffect)((function(){l()}),[]);var r=new Array(u).fill(1);return(0,n.jsx)("table",null,(0,n.jsx)("tbody",null,r.map((function(t,l){return(0,n.jsx)("tr",{key:l},(0,n.jsx)("td",{className:"cell"},l+"-aaa",(0,n.jsx)("i",null)),(0,n.jsx)("td",{className:"cell"},l+"-bbb",(0,n.jsx)("i",null)))}))))}o=10,f=(i=[function(t){(0,n.render)((0,n.jsx)(a,{onFinish:t}),c)},function(t){(0,n.render)((0,n.jsx)(s,{onFinish:t}),c)},function(t){(0,n.render)((0,n.jsx)(v,{onFinish:t}),c)}]).map((function(){return[]})),function n(l){if(l<i.length){var r=performance.now();i[l]((function(){f[l].push(performance.now()-r),setTimeout((function(){n(l+1)}),200)}))}else--o>0?setTimeout((function(){n(0)}),200):function(n){var l=[];n.forEach((function(n){var r;l.push({Repeats:n.length,"Avg Time":(r=n,r.reduce((function(n,t){return n+t}),0)/r.length),"Med Time":e(n),"Min Time":Math.min.apply(Math,t(n)),"Max Time":Math.max.apply(Math,t(n))})})),console.table(l),console.log(l),console.log(n)}(f)}(0)}()}();