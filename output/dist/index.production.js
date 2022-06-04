Object.defineProperty(exports,"__esModule",{value:1});let n=null,t=null,u=null,l=null;function i(t,l){return r(),u=o(t,u,n.t),null===n.t&&(n.t=u),l(u)}function o(t,u,l){if(null===u)return null===l?t(n):l;if(null===u.u){const l=t(n);return u.u=l,l}return u.u}function r(){if(null===n)throw new Error("Cannot use hooks from outside of components")}function e(n){this.current=n}function f(n){this.l=new e(n),this.u=null}const c=Object.prototype.hasOwnProperty,s=Array.prototype.slice;function h(n){return"string"==typeof n}function a(n){return"number"==typeof n}function p(n){return"function"==typeof n}function d(n){return null!==n&&"object"==typeof n}function w(n){return n.children}function v(n,t,u){this.i=n,this.o=u,this.h=null,this.p=t,this.v=null,this.t=null,this.m=null,this.g=null,this.M=null,this.j=null,this.A=null,this.O=null,this.T=null,this._=null,this.k=null}function y(n,t){n.g=t,void 0!==n.p.ref&&(n.p.ref.current=t)}function x(n,t,u){null===t&&(t={});let l=null;void 0!==t.key&&null!==t.key&&(l=""+t.key),delete t.key,void 0===t.ref||t.ref instanceof e||delete t.ref;const i=new v(n,t,l);if(arguments.length>2){const t=arguments.length>3;if(t&&(u=s.call(arguments,2)),p(n))i.p.children=u;else if("#"===n)if(t){let n="",t=0;for(;t<u.length;++t)n+=b(u[t]);i.p.children=n}else i.p.children=b(u);else g(i,t?u:[u])}return i}function m(n){if(n instanceof v)return n;if(h(n))return new v("#",{children:n},null);if(a(n))return new v("#",{children:""+n},null);if(n instanceof Array){const t=new v("[",{},null);return g(t,n),t}return null}function b(n){return h(n)?n:a(n)?""+n:""}function g(n,t){let u,l=null,i=0;for(;i<t.length;++i)u=m(t[i]),null!==u&&(u.j=n,u.h=i,null!==l?l.O=u:n.A=u,l=u)}function M(n,t){n["%vnode"]=t}function j(n,t,u){C(n,t,u,A,E)}function A(n,t,u,l){if(""!==(t=O(t))){if("style"===t)return d(u)||(u={}),d(l)||(l={}),void T(n[t],u,l);if(h(u)||a(u))n.setAttribute(t,u);else if(t in n)try{n[t]=u}catch(n){0}}}function E(n,t,u){if(""!==(t=O(t))){if("style"===t)return d(u)||(u={}),T(n[t],{},u),void n.removeAttribute(t);if(h(u)||a(u))n.removeAttribute(t);else if(t in n)try{n[t]=null}catch(n){0}}}function O(n){return"class"===n?"":"className"===n?"class":/^on[A-Z]/.test(n)?n.toLowerCase():n}function T(n,t,u){C(n,t,u,_,k)}function _(n,t,u){n[t]=u}function k(n,t){n[t]=""}function C(n,t,u,l,i){let o;for(o in u)G(u,o)&&(G(t,o)||i(n,o,u[o]));for(o in t)G(t,o)&&l(n,o,t[o],u[o])}function G(n,t){return c.call(n,t)&&void 0!==n[t]&&null!==n[t]}function N(n){if(n.M=S(n),V(n.i))return;const t=function(n){if("#"===n.i)return t=n.p.children,document.createTextNode(t);var t;return function(n,t,u){const l=1===n?document.createElementNS("http://www.w3.org/2000/svg",t):document.createElement(t);return j(l,u,{}),l}(n.M,n.i,n.p)}(n);y(n,t)}function S(n){return"svg"===n.i?1:1===n.j.M&&"foreignObject"===n.j.i?0:n.j.M}function V(n){return"["===n||p(n)}function Z(n,t){if(function(n,t){var u,l;n.M=S(n),V(n.i)||(y(n,t.g),"#"===n.i?n.p.children!==t.p.children&&(u=n.g,l=n.p.children,u.textContent=l):j(n.g,n.p,t.p))}(n,t),null!==n.g){const t=q(n);null!==t&&(t.k=n.g)}}function q(n){let t=n.j;for(;;){if(null===t)return null;if(null!==t.g)return t;t=t.j}}function z(n,t,u){this.C=n,this.G=t,this.N=F.bind(this),this.S=u,this.u=null}const B=new Map;let D=null;function F(n){let t=B.get(this.C);void 0===t?(t=[[n,this]],B.set(this.C,t)):t.unshift([n,this]),null!==D&&clearTimeout(D),D=setTimeout(H)}function H(){B.forEach((function(n){let t,u,l,i,o=0;for(;n.length>0;){if(t=n.pop(),u=t[0],l=t[1],p(u))try{i=u(l.G)}catch(n){J(n,l.C);continue}else i=u;(1!==l.S||I(i))&&(i!==l.G&&(l.G=i,o=1))}o&&un(l.C)})),B.clear(),D=null}function I(n){return null===n||n instanceof Error?1:0}function J(n,t){let u,l=t.j;for(;null!==l;){for(u=l.t;null!==u;){if(1===u.S)return void u.N((function(t){return t||n}));u=u.u}l=l.j}throw n}function K(n,t,u,l){this.V=n,this.Z=t,this.S=u,this.q=l,this.B=null,this.D=null,this.u=null}function L(t,u,i){return void 0===u&&(u=null),e=function(){const n=W(u,null);return new K(t,u,i,n)},f=function(n){const l=W(u,n.Z);if(1!==l){if(2!==l)return 0===l||3===l?(n.V=t,n.Z=u,n.q=l,n.D=n.B,void(n.B=null)):void 0;n.q=l}},r(),l=o(e,l,n.m),null===n.m&&(n.m=l),f(l);var e,f}function P(n,t,u){let l=t.m;for(;null!==l;){if(l.S===n&&(u||0===l.q||3===l.q))try{R(l)}catch(n){J(n,t)}l=l.u}}function Q(n,t,u){let l=t.m;for(;null!==l;){if(l.S===n&&(null!==l.D||null!==l.B)&&(u||0===l.q||3===l.q))try{U(l,u)}catch(n){J(n,t)}l=l.u}}function R(n){n.B=n.V(),void 0===n.B&&(n.B=null)}function U(n,t){null===n.D||t?null!==n.B&&n.B():n.D()}function W(n,t){return null===n?0:0===n.length?1:null===t||function(n,t){if(n.length!==t.length)return 0;for(let u=n.length-1;u>=0;--u)if(n[u]!==t[u])return 0;return 1}(n,t)?2:3}function X(i,o){p(i.i)?function(i,o){const r=o?i.A:null!==i.T?i.T.A:null;let e;f=i,n=f;var f;try{e=i.i(i.p)}catch(n){J(n,i),e=null}n=null,t=null,u=null,l=null;const c=m(e);null!==c&&(c.j=i);null!==r&&(null!==c&&c.i===r.i&&c.o===r.o?Y(c,r):$(i,r));i.A=c}(i,o):null!==i.T&&function(n,t){const u=nn(t),l=nn(n);let i;u.forEach((function(t,u){i=l.get(u),void 0!==i&&i.i===t.i?Y(i,t):$(n,t)}))}(i,i.T)}function Y(n,t){if(n.T=t,p(n.i)){n.v=t.v,n.t=t.t,n.m=t.m;let u=n.t;for(;null!==u;)u.C=n,u=u.u}}function $(n,t){null===n._?n._=[t]:n._.push(t)}function nn(n){const t=new Map;let u=n.A;for(;null!==u;)null!==u.o?t.set(u.o,u):t.set(u.h,u),u=u.O;return t}function tn(n,t,u,l,i){let o=u;for(;;)if(n(o,u,l,i),null===o.A){if(o===u)return;for(;null===o.O;){if(null===o.j||o.j===u)return;o=o.j,null!==t&&t(o)}o=o.O}else o=o.A}function un(n){const t=new Map,u=new Map;tn(ln,on,n,t,u),u.forEach((function(n,t){Q(1,t,n)})),t.forEach((function(n,t){P(1,t,n)})),setTimeout((function(){u.forEach((function(n,t){Q(0,t,n)})),t.forEach((function(n,t){P(0,t,n)}))}))}function ln(n,t,u,l){const i=n===t;if(X(n,i),n.i!==w&&(i?null!==n.m&&(l.set(n,0),u.set(n,0)):null!==n.T?(Z(n,n.T),null!==n.m&&(l.set(n.T,0),u.set(n,0)),n.T=null):(!function(n){if(N(n),null!==n.g){const t=q(n);if(null!==t){const u=null!==t.k?t.k.nextSibling:t.g.firstChild;t.g.insertBefore(n.g,u),t.k=n.g}}}(n),null!==n.m&&u.set(n,1))),null!==n._){for(let t=0;t<n._.length;++t)(function(n,t){let u=n,l=n;for(;;){if(null!==l.g)t(l.g);else if(null!==l.A){l=l.A;continue}if(l===u)return;for(;null===l.O;){if(null===l.j||l.j===u)return;l=l.j}l=l.O}})(n._[t],(function(n){null!==n.parentNode&&n.parentNode.removeChild(n)})),tn((function(n){null!==n.m&&l.set(n,1)}),null,n._[t]);n._=null}}function on(n){null!==n.k&&(n.k=null)}function rn(n,t){let u;return(u=t["%vnode"])||(u=new v(w,{},null),u.M="ownerSVGElement"in t?1:0,y(u,t),M(t,u)),u.p.children=n,u}exports.Fragment="[",exports.Ref=e,exports.TextNode="#",exports.createElement=x,exports.createPortal=rn,exports.jsx=x,exports.mount=function(n,t){un(rn(n,t))},exports.useEffect=function(n,t){return L(n,t,0)},exports.useError=function(n){return i((function(t){return I(n)||(n=null),new z(t,n,1)}),(function(n){return[n.G,n.N]}))},exports.useLayoutEffect=function(n,t){return L(n,t,1)},exports.useRef=function(u){return l=function(){return new f(u)},i=function(n){return n.l},r(),t=o(l,t,n.v),null===n.v&&(n.v=t),i(t);var l,i},exports.useState=function(n){return i((function(t){return new z(t,n,0)}),(function(n){return[n.G,n.N]}))};
