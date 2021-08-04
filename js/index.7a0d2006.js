(function(t){function e(e){for(var o,i,s=e[0],c=e[1],u=e[2],p=0,f=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);d&&d(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(o=!1)}o&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},r={index:0},a=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/vue-sample/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var d=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"2ac0":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("section",{staticClass:"container"},[n("h1",[t._v("TODO")]),n("TodoList",{attrs:{ids:t.todoList.ids,getTodoById:t.getTodoById}})],1)])},a=[],i=n("1da1"),s=n("2909"),c=(n("96cf"),n("99af"),n("d81d"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._l(this.todos,(function(t){return[n("TodoItem",{key:t._id,attrs:{content:t}})]}))],2)}),u=[],d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"todo-item"},[n("h2",[t._v(t._s(t.content.title))]),t.content.expiresAt?n("p",[t._v(t._s(t.content.expiresAt)+"まで")]):t._e(),t.content.category?n("p",[t._v(t._s(t.content.category))]):t._e()])},p=[],f=o["a"].extend({name:"TodoItem",props:{content:{type:Object,required:!0}}}),l=f,h=(n("7065"),n("2877")),b=Object(h["a"])(l,d,p,!1,null,"fbe26cb0",null),m=b.exports,y=o["a"].extend({name:"TodoList",components:{TodoItem:m},props:{ids:{type:Array,required:!0},getTodoById:{type:Function,required:!0}},computed:{todos:function(){return this.ids.map(this.getTodoById)}}}),v=y,g=Object(h["a"])(v,c,u,!1,null,null,null),_=g.exports,O=n("ade3"),T=n("5530"),j=function(t,e){return Object(T["a"])(Object(T["a"])({},t),{},Object(O["a"])({},e._id,e))},x=n("bc3a").default,w="sample-todoapp-api-key",I=x.create({baseURL:"https://jsondb.app/sample-todoapp",headers:{"x-api-key":w},responseType:"json"}),L=function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,I.get("/todos");case 2:return e=t.sent,n=e.data.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),k=o["a"].extend({name:"App",components:{TodoList:_},data:function(){return{entity:{todo:{}},todoList:{ids:[]}}},methods:{getTodoById:function(t){return this.entity.todo[t]},setTodos:function(t){this.entity.todo=t.reduce(j,this.entity.todo)},addTodoIds:function(t){this.todoList.ids=[].concat(Object(s["a"])(t),Object(s["a"])(this.todoList.ids))},fetchTodos:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,L();case 2:n=e.sent,t.setTodos(n),t.addTodoIds(n.map((function(t){return t._id})));case 5:case"end":return e.stop()}}),e)})))()}},computed:{todos:function(){var t=this;return this.todoList.ids.map((function(e){return t.getTodoById(e)}))}},mounted:function(){this.fetchTodos()}}),P=k,B=(n("fffb"),n("5863"),Object(h["a"])(P,r,a,!1,null,"46fb5690",null)),S=B.exports,R=n("2f62");o["a"].use(R["a"]);var A=new R["a"].Store({state:{},mutations:{},actions:{},modules:{}}),M=n("bc3a"),$=n.n(M),q=n("2106"),E=n.n(q);o["a"].config.productionTip=!1,o["a"].use(E.a,$.a),new o["a"]({store:A,render:function(t){return t(S)}}).$mount("#app")},5863:function(t,e,n){"use strict";n("2ac0")},7065:function(t,e,n){"use strict";n("adb3")},a210:function(t,e,n){},adb3:function(t,e,n){},fffb:function(t,e,n){"use strict";n("a210")}});
//# sourceMappingURL=index.7a0d2006.js.map