(function(t){function e(e){for(var n,i,d=e[0],u=e[1],c=e[2],l=0,f=[];l<d.length;l++)i=d[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);s&&s(e);while(f.length)f.shift()();return a.push.apply(a,c||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],n=!0,d=1;d<o.length;d++){var u=o[d];0!==r[u]&&(n=!1)}n&&(a.splice(e--,1),t=i(i.s=o[0]))}return t}var n={},r={app:0},a=[];function i(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=n,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var d=window["webpackJsonp"]=window["webpackJsonp"]||[],u=d.push.bind(d);d.push=e,d=d.slice();for(var c=0;c<d.length;c++)e(d[c]);var s=u;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var n=o("85ec"),r=o.n(n);r.a},"2a2f":function(t,e,o){"use strict";var n=o("874f"),r=o.n(n);r.a},"537f":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("Header"),o("div",{staticClass:"container mt-4"},[0===t.allTodos.length?o("Greeting"):t._e(),o("List",{attrs:{"all-todos":t.allTodos}})],1)],1)},a=[],i=o("5530"),d=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],attrs:{type:"text",placeholder:"Tap new task..."},domProps:{value:t.inputValue},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodoItem(e)},input:function(e){e.target.composing||(t.inputValue=e.target.value)}}}),o("button",{staticClass:"submit",on:{click:t.addTodoItem}},[t._v(" + ")])])},u=[],c=o("2f62"),s={name:"Header",data:function(){return{inputValue:""}},methods:Object(i["a"])(Object(i["a"])({},Object(c["b"])(["addTodo"])),{},{addTodoItem:function(){""!==this.inputValue&&this.addTodo({id:Math.floor(1e5*Math.random()),text:this.inputValue,done:!1}),this.inputValue=""}})},l=s,f=(o("2a2f"),o("2877")),p=Object(f["a"])(l,d,u,!1,null,"938c6a66",null),m=p.exports,h=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"todo-collection d-flex flex-column"},t._l(t.allTodos,(function(t){return o("div",{key:t.id},[o("Todo",{attrs:{todo:t}})],1)})),0)},v=[],b=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"card",staticStyle:{"margin-bottom":"3%"}},[o("div",{staticClass:"d-flex align-items-center"},[t.todo.done?o("input",{staticClass:"ml-3 checkbox",attrs:{type:"checkbox",name:"todo",checked:""}}):o("input",{staticClass:"ml-3 checkbox",attrs:{type:"checkbox",name:"todo"}}),t.editing?o("input",{staticClass:"col form-control ml-2",attrs:{type:"text"},domProps:{value:t.todoDescription},on:{change:t.todoChangeDescription,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.updateTodoElement(t.todo)}}}):o("h3",{staticClass:"ml-2 p-3"},[t._v(" "+t._s(t.todo.text)+" ")])]),o("button",{staticClass:"remove",on:{click:function(e){return t.deleteTodo(t.todo.id)}}},[t._v(" Remove task ")]),o("button",{staticClass:"btn-warning",on:{click:function(e){return t.updateTodoElement(t.todo)}}},[t._v(" "+t._s(t.editing?"Update todo":"Changed todo")+" ")])])},g=[],y={name:"Todo",props:{todo:{}},data:function(){return{todoDescription:"",editing:!1}},methods:Object(i["a"])(Object(i["a"])({},Object(c["b"])(["deleteTodo","updateTodo"])),{},{todoChangeDescription:function(t){this.todoDescription=t.target.value},updateTodoElement:function(t){this.editing=!0!==this.editing,this.editing?(this.todoDescription=t.text,this.updateTodo(t)):t.text=this.todoDescription}})},_=y,x=(o("b7fd"),Object(f["a"])(_,b,g,!1,null,"7512fbf9",null)),T=x.exports,O={name:"List",components:{Todo:T},props:{allTodos:{}}},k=O,j=Object(f["a"])(k,h,v,!1,null,null,null),C=j.exports,w=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("h1",{staticClass:"text-light text-center display-4"},[t._v(" Create Your Task... ")])},E=[],P={name:"Greeting"},V=P,D=(o("f9f0"),Object(f["a"])(V,w,E,!1,null,"82fb09e6",null)),S=D.exports,M={name:"App",components:{Header:m,List:C,Greeting:S},computed:Object(i["a"])({},Object(c["c"])(["allTodos"]))},$=M,I=(o("034f"),Object(f["a"])($,r,a,!1,null,null,null)),G=I.exports,H=(o("4de4"),o("c740"),{state:{todos:[]},getters:{allTodos:function(t){return t.todos}},actions:{addTodo:function(t,e){var o=t.commit;o("add_todo",e)},deleteTodo:function(t,e){var o=t.commit;o("del_todo",e)},updateTodo:function(t,e){var o=t.commit;o("update_todo",e)}},mutations:{add_todo:function(t,e){""!==e&&t.todos.push(e)},del_todo:function(t,e){t.todos=t.todos.filter((function(t){return t.id!==e}))},update_todo:function(t,e){var o=t.todos.findIndex((function(t){return t.id===e.id}));-1!==o&&(t.todos[o]=e)}}});n["a"].use(c["a"]);var L=new c["a"].Store({modules:{todos:H}});n["a"].config.productionTip=!1,new n["a"]({store:L,render:function(t){return t(G)}}).$mount("#app")},"85ec":function(t,e,o){},"874f":function(t,e,o){},b7fd:function(t,e,o){"use strict";var n=o("537f"),r=o.n(n);r.a},e29e:function(t,e,o){},f9f0:function(t,e,o){"use strict";var n=o("e29e"),r=o.n(n);r.a}});
//# sourceMappingURL=app.aabb0646.js.map