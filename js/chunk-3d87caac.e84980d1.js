(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d87caac"],{"1d11":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"message"},[a("div",{staticClass:"new-msg"},[a("div",{staticClass:"card-header title"},[a("router-link",{staticClass:"home",attrs:{to:"/"}},[t._v("主页")]),a("span",{staticClass:"slash"},[t._v("/")]),a("span",{staticClass:"text"},[t._v("新消息")])],1),a("div",{staticClass:"card-content content"},[t.data.hasnot_read_messages.length>0?a("div",[t._v("\n                有消息\n            ")]):a("div",{staticClass:"no-msg"},[t._v("\n                无消息\n            ")])])]),a("div",{staticClass:"old-msg"},[a("div",{staticClass:"card-header title"},[t._v("\n            过往信息\n        ")]),a("div",{staticClass:"card-content content"},[t.data.has_read_messages.length>0?a("div",[a("ul",t._l(t.data.has_read_messages,(function(s,e){return a("li",{key:e},[a("router-link",{attrs:{to:{name:"User",params:{loginname:s.author.loginname}}}},[a("span",[t._v(t._s(s.author.loginname))])]),t._v("\n                            回复了你的话题 \n                        "),a("router-link",{attrs:{to:{name:"Detail",params:{id:s.topic.id}}}},[a("span",[t._v(t._s(s.topic.title))])])],1)})),0)]):a("div",{staticClass:"no-msg"},[t._v("\n                无消息\n            ")])])])])},n=[],i=a("c443"),c={name:"Message",data:function(){return{queryList:{accesstoken:this.$store.state.accesstoken,mdrender:"true"},data:{has_read_messages:[],hasnot_read_messages:[]}}},created:function(){this.getMessages()},methods:{getMessages:function(){var t=this;Object(i["b"])(this.$store.state.accesstoken).then((function(s){var a=s.data.data;t.data=a}))}}},r=c,d=(a("c92e"),a("2877")),o=Object(d["a"])(r,e,n,!1,null,"0aa66d3a",null);s["default"]=o.exports},c92e:function(t,s,a){"use strict";var e=a("fb01"),n=a.n(e);n.a},fb01:function(t,s,a){}}]);
//# sourceMappingURL=chunk-3d87caac.e84980d1.js.map