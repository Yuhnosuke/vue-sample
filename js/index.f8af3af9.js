(function(t){function e(e){for(var n,s,r=e[0],c=e[1],l=e[2],d=0,p=[];d<r.length;d++)s=r[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&p.push(i[s][0]),i[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,l||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],n=!0,r=1;r<o.length;r++){var c=o[r];0!==i[c]&&(n=!1)}n&&(a.splice(e--,1),t=s(s.s=o[0]))}return t}var n={},i={index:0},a=[];function s(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=n,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(o,n,function(e){return t[e]}.bind(null,n));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/vue-sample/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"08e9":function(t,e,o){},3086:function(t,e,o){},"528f":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("main",[o("section",{staticClass:"container"},[o("h1",[t._v("TODO")]),o("input",{staticClass:"text-field",attrs:{type:"text",placeholder:"カテゴリでフィルタ"},domProps:{value:t.input.filter.category},on:{change:t.onInputFilterCategory}}),t._l(this.filteredTodoList,(function(e){return[o("TodoItem",{key:e._id,attrs:{content:e,deleteTodoItem:t.handleDeleteItem,updateTodoItem:t.handleUpdateTodoItem}})]}))],2),o("ToolBox",{attrs:{addTodoItem:t.handleAddTodoItem}})],1)},a=[],s=o("15fd"),r=o("a38e"),c=o("3835"),l=o("ade3"),u=o("5530"),d=(o("d81d"),o("4de4"),o("4fad"),o("caad"),o("2532"),o("c1f9"),o("99af"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo-item",class:t.classObject},[o("button",{staticClass:"done-button",class:t.classObject,on:{click:t.toggleIsDone}},[t._v("○")]),o("button",{staticClass:"edit-button",on:{click:t.openEditDialog}},[t._v("△")]),t.showDialog?o("div",{attrs:{id:"overlay"}},[o("div",{attrs:{id:"content"}},[o("div",{staticClass:"input-container"},[o("label",{attrs:{for:"title"}},[t._v("タイトル")]),o("input",{staticClass:"text-field",attrs:{id:"title",type:"text"},domProps:{value:this.contentToUpdate.title},on:{keyup:t.onInputTitle}})]),o("div",{staticClass:"input-container"},[o("label",{attrs:{for:"expiresAt"}},[t._v("期限")]),o("input",{staticClass:"text-field",attrs:{id:"expiresAt",type:"text"},domProps:{value:this.contentToUpdate.expiresAt},on:{keyup:t.onInputExpiresAt}})]),o("div",{staticClass:"input-container"},[o("label",{attrs:{for:"category"}},[t._v("カテゴリー")]),o("input",{staticClass:"text-field",attrs:{id:"category",type:"text"},domProps:{value:this.contentToUpdate.category},on:{keyup:t.onInputCategory}})]),o("div",{staticClass:"input-container"},[o("label",{attrs:{for:"memo"}},[t._v("メモ")]),o("input",{staticClass:"text-field",attrs:{id:"memo",type:"text"},domProps:{value:this.contentToUpdate.memo},on:{keyup:t.onInputMemo}})]),o("div",{staticClass:"button-wrapper"},[o("button",{staticClass:"update-button",on:{click:t.onClickUpdate}},[t._v("更新")]),o("button",{staticClass:"cancel-button",on:{click:t.closeEditDialog}},[t._v("閉じる ")])])])]):t._e(),o("button",{staticClass:"delete-button",on:{click:t.onClickDelete}},[t._v("X")]),o("h2",{class:t.classObject},[t._v(t._s(t.content.title))]),t.content.expiresAt?o("p",[t._v(t._s(t.content.expiresAt)+"まで")]):t._e(),t.content.category?o("p",[t._v(t._s(t.content.category))]):t._e(),t.content.memo?o("p",[t._v(t._s(t.content.memo))]):t._e()])}),p=[],f=n["a"].extend({name:"TodoItem",props:{content:{type:Object,required:!0},deleteTodoItem:{type:Function,required:!0},updateTodoItem:{type:Function,required:!0}},data:function(){return{showDialog:!1}},methods:{onClickDelete:function(){this.deleteTodoItem(this.content._id)},toggleIsDone:function(){this.content.isDone=!this.content.isDone},openEditDialog:function(){this.showDialog=!0},closeEditDialog:function(){this.showDialog=!1},onClickUpdate:function(){this.updateTodoItem(this.contentToUpdate),this.showDialog=!1},setPropertyInContent:function(t,e){this.$set(this.contentToUpdate,t,e)},onInputTitle:function(t){this.setPropertyInContent("title",t.target.value)},onInputExpiresAt:function(t){this.setPropertyInContent("expiresAt",t.target.value)},onInputCategory:function(t){this.setPropertyInContent("category",t.target.value)},onInputMemo:function(t){this.setPropertyInContent("memo",t.target.value)}},computed:{classObject:function(){return{done:this.content.isDone}},contentToUpdate:function(){return Object(u["a"])({},this.content)}}}),h=f,m=(o("b9c2"),o("2877")),v=Object(m["a"])(h,d,p,!1,null,"5d12f762",null),y=v.exports,g=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"tool-box"},[o("input",{staticClass:"text-field",attrs:{type:"text",placeholder:"タイトル"},domProps:{value:t.title},on:{keyup:t.onInputTitle}}),o("input",{staticClass:"text-field",attrs:{type:"text",placeholder:"期限"},domProps:{value:t.expiresAt},on:{keyup:t.onInputExpiresAt}}),o("input",{staticClass:"text-field",attrs:{type:"text",placeholder:"カテゴリ"},domProps:{value:t.category},on:{keyup:t.onInputCategory}}),o("input",{staticClass:"text-field",attrs:{type:"text",placeholder:"メモ"},domProps:{value:t.memo},on:{keyup:t.onInputMemo}}),o("button",{on:{click:t.onClickAdd}},[t._v("追加")])])},b=[],x=n["a"].extend({name:"ToolBox",props:{addTodoItem:{type:Function,required:!0}},data:function(){return{title:"",expiresAt:"",category:"",memo:""}},methods:{onInputTitle:function(t){this.title=t.target.value},onInputExpiresAt:function(t){this.expiresAt=t.target.value},onInputCategory:function(t){this.category=t.target.value},onInputMemo:function(t){this.memo=t.target.value},onClickAdd:function(){this.addTodoItem({title:this.title,expiresAt:this.expiresAt,category:this.category,memo:this.memo}),this.title="",this.expiresAt="",this.category="",this.memo=""}}}),I=x,_=(o("e859"),Object(m["a"])(I,g,b,!1,null,"6adcf216",null)),T=_.exports,C="https://jsondb.app/todoapp/todos/",O=n["a"].extend({name:"App",components:{TodoItem:y,ToolBox:T},data:function(){return{todoList:{},todoListIds:[],input:{filter:{category:null}}}},mounted:function(){var t=this;this.axios.get(C).then((function(e){var o=e.data.data;t.todoListIds=o.map((function(t){return t._id})),t.todoList=o.reduce((function(t,e){return Object(u["a"])(Object(u["a"])({},t),{},Object(l["a"])({},e._id,e))}),t.todoList)})).catch((function(t){console.log("GET Error: ",t)}))},computed:{filteredTodoList:function(){var t=this;if(null===this.input.filter.category)return this.todoList;var e=this.todoListIds.filter((function(e){return t.todoList[e].category===t.input.filter.category})),o=Object.entries(this.todoList),n=o.filter((function(t){var o=Object(c["a"])(t,2),n=o[0],i=o[1];return console.log(i),e.includes(n)}));return Object.fromEntries(n)}},methods:{onInputFilterCategory:function(t){""!==t.target.value?this.input.filter.category=t.target.value:this.input.filter.category=null},handleAddTodoItem:function(t){var e=this;if(""!==t.title){var o={title:t.title,expiresAt:t.expiresAt||null,category:t.category||null,memo:t.memo||null,isDone:!1};this.axios.post(C,o).then((function(t){var o=t.data.data;e.todoListIds.concat([o._id]),e.todoList=Object(u["a"])(Object(u["a"])({},e.todoList),{},Object(l["a"])({},o._id,o))})).catch((function(t){return console.log("POST error: ",t)}))}},handleDeleteItem:function(t){var e=this;this.axios.delete(C+t).then((function(){e.todoListIds=e.todoListIds.filter((function(e){return e!==t}));var o=e.todoList,n=o[t],i=Object(s["a"])(o,[t].map(r["a"]));console.log(n),e.todoList=i})).catch((function(t){return console.log("DELETE error: ",t)}))},handleUpdateTodoItem:function(t){var e=this;this.axios.put(C+t._id,t).then((function(t){var o=t.data.data;e.todoList=Object(u["a"])(Object(u["a"])({},e.todoList),{},Object(l["a"])({},o._id,o))})).catch((function(t){return console.log("PUT error: ",t)}))}}}),j=O,k=(o("fffb"),o("fbfb"),Object(m["a"])(j,i,a,!1,null,"7e1c6d19",null)),A=k.exports,P=o("2f62");n["a"].use(P["a"]);var D=new P["a"].Store({state:{},mutations:{},actions:{},modules:{}}),L=o("bc3a"),w=o.n(L),E=o("2106"),U=o.n(E);n["a"].config.productionTip=!1,n["a"].use(U.a,w.a),new n["a"]({store:D,render:function(t){return t(A)}}).$mount("#app")},a210:function(t,e,o){},b9c2:function(t,e,o){"use strict";o("08e9")},e859:function(t,e,o){"use strict";o("528f")},fbfb:function(t,e,o){"use strict";o("3086")},fffb:function(t,e,o){"use strict";o("a210")}});
//# sourceMappingURL=index.f8af3af9.js.map