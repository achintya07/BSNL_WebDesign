(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{293:function(t,r,n){"use strict";n.d(r,"a",(function(){return e}));n(59),n(7),n(4),n(9);var o=n(0);function e(t){return o.a.extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(r,n){var o=n.props,data=n.data,e=n.children;data.staticClass="".concat(t," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var l=Object.keys(c).filter((function(t){if("slot"===t)return!1;var r=c[t];return t.startsWith("data-")?(data.attrs[t]=r,!1):r||"string"==typeof r}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return o.id&&(data.domProps=data.domProps||{},data.domProps.id=o.id),r(o.tag,data,e)}})}},295:function(t,r,n){"use strict";n(59),n(7),n(4),n(9),n(179),n(138);var o=n(293),e=n(39);r.a=Object(o.a)("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,r){var n,o=r.props,data=r.data,c=r.children,l=data.attrs;return l&&(data.attrs={},n=Object.keys(l).filter((function(t){if("slot"===t)return!1;var r=l[t];return t.startsWith("data-")?(data.attrs[t]=r,!1):r||"string"==typeof r}))),o.id&&(data.domProps=data.domProps||{},data.domProps.id=o.id),t(o.tag,Object(e.a)(data,{staticClass:"container",class:Array({"container--fluid":o.fluid}).concat(n||[])}),c)}})},396:function(t,r,n){"use strict";n.r(r);var o=n(29),e=n(38),c=n.n(e),l=n(276),d=n(285),v=n(295),f=n(286),component=Object(o.a)({},(function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("v-container",{staticClass:"grey lighten-5"},[n("v-row",{staticClass:"mb-6",attrs:{"no-gutters":""}},t._l(4,(function(r){return n("v-col",{key:r,attrs:{cols:5===r?6:void 0}},[n("v-card",{staticClass:"pa-2",attrs:{outlined:"",tile:""}},[t._v("\n        "+t._s(r)+" of 3 "+t._s(2===r?"(wider)":"")+"\n      ")])],1)})),1),t._v(" "),n("v-row",{attrs:{"no-gutters":""}},t._l(3,(function(r){return n("v-col",{key:r,attrs:{cols:2===r?5:void 0}},[n("v-card",{staticClass:"pa-2",attrs:{outlined:"",tile:""}},[t._v("\n        "+t._s(r)+" of 3 "+t._s(2===r?"(wider)":"")+"\n      ")])],1)})),1),t._v(" "),n("v-row",{attrs:{"no-gutters":""}},t._l(6,(function(r){return n("v-col",{key:r,attrs:{cols:3===r?6:void 0}},[n("v-card",{staticClass:"pa-2",attrs:{outlined:"",tile:""}},[t._v("\n        "+t._s(r)+" of 3 "+t._s(2===r?"(wider)":"")+"\n      ")])],1)})),1),t._v(" "),n("v-row",{attrs:{"no-gutters":""}},t._l(2,(function(r){return n("v-col",{key:r,attrs:{cols:1===r?6:void 0}},[n("v-card",{staticClass:"pa-2",attrs:{outlined:"",tile:""}},[t._v("\n        "+t._s(r)+" of 3 "+t._s(2===r?"(wider)":"")+"\n      ")])],1)})),1)],1)}),[],!1,null,null,null);r.default=component.exports;c()(component,{VCard:l.a,VCol:d.a,VContainer:v.a,VRow:f.a})}}]);