(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5dcb669a"],{5876:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("lazy-route",[n("select-hub")],1)},o=[],c=n("9ab4"),u=n("60a3"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-form",{staticClass:"select-hub",attrs:{autocomplete:"off"},on:{submit:function(e){return e.preventDefault(),t.selectHub()}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-row",{attrs:{align:"center",justify:"center","no-gutters":""}},[n("v-col",{attrs:{cols:"10"}},[n("address-input",{attrs:{value:t.partner,exclude:[t.token.address,t.defaultAccount]},model:{value:t.partner,callback:function(e){t.partner=e},expression:"partner"}})],1)],1),n("divider"),n("token-information",{attrs:{token:t.token}}),n("action-button",{attrs:{enabled:t.valid,text:t.$t("select-hub.select-button")}})],1)},a=[],f=n("a34a"),s=n.n(f),l=n("13ea"),p=n.n(l),b=n("2f62"),y=n("6fc3"),d=n("fc09"),h=n("152b"),v=n("01f0"),m=n("8716"),O=n("750b");function w(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function k(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function j(t,e,n){return e&&k(t.prototype,e),n&&k(t,n),t}function g(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_(t,e)}function _(t,e){return _=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},_(t,e)}function R(t){var e=P();return function(){var n,r=T(t);if(e){var o=T(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return x(this,n)}}function x(t,e){return!e||"object"!==C(e)&&"function"!==typeof e?S(t):e}function S(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function P(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function T(t){return T=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},T(t)}function C(t){return C="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}var D=function(t,e,n,r){var o,c=arguments.length,u=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"===("undefined"===typeof Reflect?"undefined":C(Reflect))&&"function"===typeof Reflect.decorate)u=Reflect.decorate(t,e,n,r);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(u=(c<3?o(u):c>3?o(e,n,u):o(e,n))||u);return c>3&&u&&Object.defineProperty(e,n,u),u},E=function(t,e,n,r){function o(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,c){function u(t){try{a(r.next(t))}catch(e){c(e)}}function i(t){try{a(r["throw"](t))}catch(e){c(e)}}function a(t){t.done?n(t.value):o(t.value).then(u,i)}a((r=r.apply(t,e||[])).next())}))},H=function(t){g(n,t);var e=R(n);function n(){var t;return w(this,n),t=e.apply(this,arguments),t.partner="",t.valid=!1,t}return j(n,[{key:"selectHub",value:function(){this.navigateToOpenChannel(this.token.address,this.partner)}},{key:"created",value:function(){var t;return E(this,void 0,void 0,s.a.mark((function e(){var n;return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=this.$route.params.token,d["a"].checkAddressChecksum(n)){e.next=4;break}return this.navigateToHome(),e.abrupt("return");case 4:return e.next=6,this.$raiden.fetchTokenData([n]);case 6:"number"!==typeof this.token.decimals&&this.navigateToHome(),this.isConnectedToHub||"goerli"!==this.network.name||(this.partner=null!==(t="hub.raiden.eth")&&void 0!==t?t:"");case 8:case"end":return e.stop()}}),e,this)})))}},{key:"token",get:function(){var t=this.$route.params.token;return this.getToken(t)||{address:t}}},{key:"isConnectedToHub",get:function(){var t=this.$route.params.token;return!p()(this.channels[t])}}]),n}(Object(u["c"])(h["a"]));H=D([Object(u["a"])({components:{TokenInformation:m["a"],Divider:v["a"],AddressInput:y["a"],ActionButton:O["a"]},computed:Object.assign(Object.assign({},Object(b["c"])(["defaultAccount","channels","network"])),Object(b["b"])({getToken:"token"}))})],H);var $=H,A=$,V=(n("b0de"),n("2877")),z=n("6544"),I=n.n(z),J=n("62ad"),B=n("4bd4"),F=n("0fd9"),L=Object(V["a"])(A,i,a,!1,null,"08009abe",null),q=L.exports;I()(L,{VCol:J["a"],VForm:B["a"],VRow:F["a"]});var G=n("f931");function K(t){return K="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},K(t)}function M(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function N(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Q(t,e)}function Q(t,e){return Q=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},Q(t,e)}function U(t){var e=Y();return function(){var n,r=Z(t);if(e){var o=Z(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return W(this,n)}}function W(t,e){return!e||"object"!==K(e)&&"function"!==typeof e?X(t):e}function X(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Y(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function Z(t){return Z=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},Z(t)}var tt=function(t){N(n,t);var e=U(n);function n(){return M(this,n),e.apply(this,arguments)}return n}(u["e"]);tt=Object(c["b"])([Object(u["a"])({components:{LazyRoute:G["a"],SelectHub:q}})],tt);var et=tt,nt=et,rt=Object(V["a"])(nt,r,o,!1,null,"f6ffb832",null);e["default"]=rt.exports},b0de:function(t,e,n){"use strict";var r=n("dd47"),o=n.n(r);o.a},dd47:function(t,e,n){}}]);