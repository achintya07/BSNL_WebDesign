(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{318:function(t,n,r){"use strict";r.d(n,"a",(function(){return o}));r(64),r(7),r(4),r(9);var e=r(2);function o(t){return e.a.extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(n,r){var e=r.props,data=r.data,o=r.children;data.staticClass="".concat(t," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var d=Object.keys(c).filter((function(t){if("slot"===t)return!1;var n=c[t];return t.startsWith("data-")?(data.attrs[t]=n,!1):n||"string"==typeof n}));d.length&&(data.staticClass+=" ".concat(d.join(" ")))}return e.id&&(data.domProps=data.domProps||{},data.domProps.id=e.id),n(e.tag,data,o)}})}},321:function(t,n,r){"use strict";r.r(n);var e=r(322),o=r.n(e);for(var c in e)["default"].indexOf(c)<0&&function(t){r.d(n,t,(function(){return e[t]}))}(c);n.default=o.a},322:function(t,n){},327:function(t,n,r){"use strict";r(64),r(7),r(4),r(9),r(183),r(143);var e=r(318),o=r(36);n.a=Object(e.a)("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,n){var r,e=n.props,data=n.data,c=n.children,d=data.attrs;return d&&(data.attrs={},r=Object.keys(d).filter((function(t){if("slot"===t)return!1;var n=d[t];return t.startsWith("data-")?(data.attrs[t]=n,!1):n||"string"==typeof n}))),e.id&&(data.domProps=data.domProps||{},data.domProps.id=e.id),t(e.tag,Object(o.a)(data,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(r||[])}),c)}})},369:function(t,n,r){"use strict";r.d(n,"a",(function(){return e})),r.d(n,"b",(function(){return o}));var e=function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("v-content",[n("v-container",{attrs:{fluid:"","fill-height":""}},[n("v-layout",{attrs:{"justify-center":"","align-center":""}},[n("blockquote",{staticClass:"blockquote"},[this._v("\n          “First, solve the problem. Then, write the code.”\n          "),n("footer",[n("small",[n("em",[this._v("—John Johnson")])])])])])],1)],1)],1)},o=[]},373:function(t,n,r){"use strict";r.r(n);var e=r(369),o=r(321);for(var c in o)["default"].indexOf(c)<0&&function(t){r.d(n,t,(function(){return o[t]}))}(c);var d=r(30),f=r(44),l=r.n(f),v=r(327),h=r(317),m=r(374),component=Object(d.a)(o.default,e.a,e.b,!1,null,null,null);n.default=component.exports,l()(component,{VContainer:v.a,VContent:h.a,VLayout:m.a})},374:function(t,n,r){"use strict";r(183);var e=r(318);n.a=Object(e.a)("layout")}}]);