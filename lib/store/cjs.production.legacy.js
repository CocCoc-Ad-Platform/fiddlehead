Object.defineProperty(exports,"__esModule",{value:!0});var n=require("hook"),r=function(n){if(null==n||n.constructor!==Object)throw new Error("Store data must be a plain object");var r=n,t=new Set;return{get data(){return r},setData:function(n){n(r),t.forEach((function(n){n(r)}))},subscribe:t.add.bind(t),unsubscribe:t.delete.bind(t)}},t=function(r,t,e){var o=n.useState(t(r.data));return n.useEffect((function(){var n=function(n){void 0===e?o[1](t(n)):o[1]((function(r){var o=t(n);return e(r,o)?r:o}))};return r.subscribe(n),function(){r.unsubscribe(n)}}),[r,t,e]),o[0]},e=function(n,r){return function(t){n.setData((function(n){r(n,t)}))}},o=new WeakMap,u=function(r){var t,e=n.resolveRootVNode(),u=o.get(e);if(void 0!==u&&(t=u.get(r)),void 0===t)throw new Error("Store has not been initialized");return t};exports.createStore=r,exports.useGlobalStoreRead=t,exports.useGlobalStoreWrite=e,exports.useStoreInit=function(t,e){var u=n.resolveRootVNode(),i=o.get(u);void 0===i&&(i=new WeakMap,o.set(u,i)),i.has(t)||i.set(t,r(e))},exports.useStoreRead=function(n,r,e){var o=u(n);return t(o,r,e)},exports.useStoreWrite=function(n,r){var t=u(n);return e(t,r)};