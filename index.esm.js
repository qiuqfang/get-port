import t from"node:net";import r from"node:os";function e(){e=function(){return t};var t={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,r,e){t[r]=e.value},i="function"==typeof Symbol?Symbol:{},u=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function f(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{f({},"")}catch(t){f=function(t,r,e){return t[r]=e}}function l(t,r,e,n){var i=Object.create((r&&r.prototype instanceof p?r:p).prototype),u=new S(n||[]);return o(i,"_invoke",{value:E(t,e,u)}),i}function s(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var h={};function p(){}function v(){}function d(){}var y={};f(y,u,function(){return this});var m=Object.getPrototypeOf,g=m&&m(m(_([])));g&&g!==r&&n.call(g,u)&&(y=g);var w=d.prototype=p.prototype=Object.create(y);function b(t){["next","throw","return"].forEach(function(r){f(t,r,function(t){return this._invoke(r,t)})})}function x(t,r){function e(o,i,u,a){var c=s(t[o],t,i);if("throw"!==c.type){var f=c.arg,l=f.value;return l&&"object"==typeof l&&n.call(l,"__await")?r.resolve(l.__await).then(function(t){e("next",t,u,a)},function(t){e("throw",t,u,a)}):r.resolve(l).then(function(t){f.value=t,u(f)},function(t){return e("throw",t,u,a)})}a(c.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new r(function(r,o){e(t,n,r,o)})}return i=i?i.then(o,o):o()}})}function E(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(e.method=o,e.arg=i;;){var u=e.delegate;if(u){var a=O(u,e);if(a){if(a===h)continue;return a}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var c=s(t,r,e);if("normal"===c.type){if(n=e.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(n="completed",e.method="throw",e.arg=c.arg)}}}function O(t,r){var e=r.method,n=t.iterator[e];if(void 0===n)return r.delegate=null,"throw"===e&&t.iterator.return&&(r.method="return",r.arg=void 0,O(t,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),h;var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,h;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,h):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function j(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function L(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function _(t){if(t){var r=t[u];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,o=function r(){for(;++e<t.length;)if(n.call(t,e))return r.value=t[e],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}return{next:P}}function P(){return{value:void 0,done:!0}}return v.prototype=d,o(w,"constructor",{value:d,configurable:!0}),o(d,"constructor",{value:v,configurable:!0}),v.displayName=f(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===v||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,f(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},b(x.prototype),f(x.prototype,a,function(){return this}),t.AsyncIterator=x,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var u=new x(l(r,e,n,o),i);return t.isGeneratorFunction(e)?u:u.next().then(function(t){return t.done?t.value:u.next()})},b(w),f(w,c,"Generator"),f(w,u,function(){return this}),f(w,"toString",function(){return"[object Generator]"}),t.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=_,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function e(e,n){return u.type="throw",u.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],u=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var a=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(a&&c){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var u=i?i.completion:{};return u.type=t,u.arg=r,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(u)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),h},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),L(e),h}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;L(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:_(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),h}},t}function n(t){return n=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},n(t)}function o(t,r){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,r){return t.__proto__=r,t},o(t,r)}function i(t,r,e){return i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct.bind():function(t,r,e){var n=[null];n.push.apply(n,r);var i=new(Function.bind.apply(t,n));return e&&o(i,e.prototype),i},i.apply(null,arguments)}function u(t){var r="function"==typeof Map?new Map:void 0;return u=function(t){if(null===t||-1===Function.toString.call(t).indexOf("[native code]"))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(t))return r.get(t);r.set(t,e)}function e(){return i(t,arguments,n(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),o(e,t)},u(t)}function a(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function c(t,r){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(e)return(e=e.call(t)).next.bind(e);if(Array.isArray(t)||(e=function(t,r){if(t){if("string"==typeof t)return a(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?a(t,r):void 0}}(t))||r&&t&&"number"==typeof t.length){e&&(t=e);var n=0;return function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(t,r){try{var e=t()}catch(t){return r(t)}return e&&e.then?e.then(void 0,r):e}var l="undefined"!=typeof Symbol?Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator")):"@@iterator";function s(t,r,e){if(!t.s){if(e instanceof h){if(!e.s)return void(e.o=s.bind(null,t,r));1&r&&(r=e.s),e=e.v}if(e&&e.then)return void e.then(s.bind(null,t,r),s.bind(null,t,2));t.s=r,t.v=e;var n=t.o;n&&n(t)}}var h=/*#__PURE__*/function(){function t(){}return t.prototype.then=function(r,e){var n=new t,o=this.s;if(o){var i=1&o?r:e;if(i){try{s(n,1,i(this.v))}catch(t){s(n,2,t)}return n}return this}return this.o=function(t){try{var o=t.v;1&t.s?s(n,1,r?r(o):o):e?s(n,1,e(o)):s(n,2,o)}catch(t){s(n,2,t)}},n},t}();function p(t){return t instanceof h&&1&t.s}function v(t,r,e){if("function"==typeof t[l]){var n,o,i,u=t[l]();if(function t(a){try{for(;!((n=u.next()).done||e&&e());)if((a=r(n.value))&&a.then){if(!p(a))return void a.then(t,i||(i=s.bind(null,o=new h,2)));a=a.v}o?s(o,1,a):o=a}catch(t){s(o||(o=new h),2,t)}}(),u.return){var a=function(t){try{n.done||u.return()}catch(t){}return t};if(o&&o.then)return o.then(a,function(t){throw a(t)});a()}return o}if(!("length"in t))throw new TypeError("Object is not iterable");for(var c=[],f=0;f<t.length;f++)c.push(t[f]);return function(t,r,e){var n,o,i=-1;return function u(a){try{for(;++i<t.length&&(!e||!e());)if((a=r(i))&&a.then){if(!p(a))return void a.then(u,o||(o=s.bind(null,n=new h,2)));a=a.v}n?s(n,1,a):n=a}catch(t){s(n||(n=new h),2,t)}}(),n}(c,function(t){return r(c[t])},e)}function d(){return d=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t},d.apply(this,arguments)}var y,m=function(t){try{var n,o,i=function(t){if(n)return t;throw new Error("No available ports found")},u=new Set;if(t&&(t.port&&(o="number"==typeof t.port?[t.port]:t.port),t.exclude)){var a=t.exclude;if("function"!=typeof a[Symbol.iterator])throw new TypeError("The `exclude` option must be an iterable.");for(var l,s=c(a);!(l=s()).done;){var h=l.value;if("number"!=typeof h)throw new TypeError("Each item in the `exclude` option must be a number corresponding to the port you want excluded.");if(!Number.isSafeInteger(h))throw new TypeError("Number "+h+" in the exclude option is not a safe integer and can't be used")}u=new Set(a)}void 0===y&&(y=setTimeout(function(){y=void 0,w.old=w.young,w.young=new Set},15e3)).unref&&y.unref();var p=function(){for(var t=r.networkInterfaces(),e=new Set([void 0,"0.0.0.0"]),n=0,o=Object.values(t);n<o.length;n++)for(var i,u=c(o[n]);!(i=u()).done;)e.add(i.value.address);return e}(),m=v(/*#__PURE__*/e().mark(function t(r){return e().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=r,!t.t0){t.next=3;break}return t.delegateYield(r,"t1",3);case 3:return t.next=5,0;case 5:case"end":return t.stop()}},t)})(o),function(r){return f(function(){if(!u.has(r))return Promise.resolve(x(d({},t,{port:r}),p)).then(function(e){function o(t){var r=(w.young.add(e),e);return n=1,r}var i=_for(function(){return!(!w.old.has(e)&&!w.young.has(e))},void 0,function(){if(0!==r)throw new g(r);return Promise.resolve(x(d({},t,{port:r}),p)).then(function(t){e=t})});return i&&i.then?i.then(o):o()})},function(t){if(!(["EADDRINUSE","EACCES"].includes(t.code)||t instanceof g))throw t})},function(){return n});return Promise.resolve(m&&m.then?m.then(i):i(m))}catch(t){return Promise.reject(t)}},g=/*#__PURE__*/function(t){var r,e;function n(r){return t.call(this,r+" is locked")||this}return e=t,(r=n).prototype=Object.create(e.prototype),r.prototype.constructor=r,o(r,e),n}(/*#__PURE__*/u(Error)),w={old:new Set,young:new Set},b=function(r){return new Promise(function(e,n){var o=t.createServer();o.unref(),o.on("error",n),o.listen(r,function(){var t=o.address().port;o.close(function(){e(t)})})})},x=function(t,r){try{var e=function(r){return t.port};if(t.host||0===t.port)return Promise.resolve(b(t));var n=v(r,function(r){return f(function(){return Promise.resolve(b({port:t.port,host:r})).then(function(){})},function(t){if(!["EADDRNOTAVAIL","EINVAL"].includes(t.code))throw t})},function(){});return Promise.resolve(n&&n.then?n.then(e):e())}catch(t){return Promise.reject(t)}};function E(t,r){if(!Number.isInteger(t)||!Number.isInteger(r))throw new TypeError("`from` and `to` must be integer numbers");if(t<1024||t>65535)throw new RangeError("'from' must be between 1024 and 65535");if(r<1024||r>65535)throw new RangeError("'to' must be between 1024 and 65535");if(t>r)throw new RangeError("`to` must be greater than or equal to `from`");/*#__PURE__*/return e().mark(function t(r,n){var o;return e().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:o=r;case 1:if(!(o<=n)){t.next=7;break}return t.next=4,o;case 4:o++,t.next=1;break;case 7:case"end":return t.stop()}},t)})(t,r)}export{m as default,E as portNumbers};
//# sourceMappingURL=index.esm.js.map
