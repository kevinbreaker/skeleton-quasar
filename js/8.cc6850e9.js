(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"0f34":function(t,e,s){},"5c89":function(t,e,s){"use strict";var a=s("0f34"),n=s.n(a);n.a},8991:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{staticClass:"DashboardIndex",attrs:{padding:""}},[s("div",{staticClass:"q-pa-md"},[s("q-toolbar",{staticClass:"bg-primary text-white shadow-2 rounded-borders mono-font"},[s("div",{staticClass:"col-6 text-white q-pa-sm"},[s("small",[t._v(t._s(t.greetings)+" "),s("strong",[t._v(t._s(t.name))])])]),s("q-space"),s("small",{staticClass:"float-right"},[t._v("Versão da aplicação: "+t._s(t.version))])],1)],1)])},n=[],r=s("0c05"),o=s("9220"),i=s("bd4c"),c={name:"DashboardIndex",data:function(){return{shortcuts:[{label:"Ocorrências",path:"/dashboard/support/incident"},{label:"Ordens de Serviço",path:"/dashboard/support/order"}]}},computed:{user:function(){return this.$store.getters["auth/getUser"]},name:function(){return this.$util.get(this.$store.getters["auth/getUser"],"name")},last:function(){var t=this.$util.get(this.$store.getters["auth/getUser"],"last_login"),e=i["b"].formatDate(t,"dddd"),s=i["b"].formatDate(t,"DD/MM/YYYY"),a=i["b"].formatDate(t,"HH:mm");return"".concat(e,", ").concat(s," às ").concat(a)},greetings:function(){var t=(new Date).getHours();return t>=0&&t<=12?this.$lang("app.greetings.morning"):t>12&&t<=18?this.$lang("app.greetings.afternoon"):this.$lang("app.greetings.night")},version:function(){return r["a"].state.version||"unknown"},shortcutsAvailable:function(){return this.shortcuts.filter((function(t){return Object(o["a"])(t.path)}))}},methods:{openShortcut:function(t){t.path&&this.$browse(t.path)}}},u=c,l=(s("5c89"),s("2877")),h=Object(l["a"])(u,a,n,!1,null,null,null);e["default"]=h.exports}}]);