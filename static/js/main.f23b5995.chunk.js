(this.webpackJsonprtl=this.webpackJsonprtl||[]).push([[0],{39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},54:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),r=c(28),o=c.n(r),a=(c(39),c.p,c(40),c(41),c.p,c(1));function i(){return Object(a.jsx)("div",{className:"banner"})}var j=c(2);c(43);function l(e){var t=e.title;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("h1",{title:"Header",className:"header",children:t})})}var d=c(77),u=c(10),b=c(33),O=(c(44),c(76));var f=function(e){var t=e.setTodos,c=e.todos,s=Object(n.useState)(""),r=Object(u.a)(s,2),o=r[0],i=r[1];return Object(a.jsxs)("div",{className:"input-container",children:[Object(a.jsx)("input",{className:"input",value:o,onChange:function(e){return i(e.target.value)},placeholder:"Add a new task here..."}),Object(a.jsx)("button",{className:"add-btn",onClick:function(){if(o){var e=[].concat(Object(b.a)(c),[{id:Object(O.a)(),task:o,completed:!1}]);t(e),i("")}},children:"Add"})]})},x=(c(45),c(8));var h=function(e){var t=e.numberOfIncompleteTasks;return Object(a.jsxs)("div",{className:"todo-footer",children:[Object(a.jsxs)("p",{children:[t," ",1===t?"task":"tasks"," left"]}),Object(a.jsx)(x.b,{to:"/followers",children:"Followers"})]})};c(51);var m=function(e){var t=e.todos,c=e.setTodos;return Object(a.jsxs)("div",{className:"todolist-container",children:[Object(a.jsx)("div",{className:"todos-container",children:Object(a.jsx)("div",{children:t.map((function(e,n){return Object(a.jsx)("div",{className:"todo-item ".concat(e.completed&&"todo-item-active"),onClick:function(){return function(e){var n=t.map((function(t){return t.id===e?(t.completed=!t.completed,t):t}));c(n)}(e.id)},children:e.task})}))})}),Object(a.jsx)("div",{children:Object(a.jsx)(h,{numberOfIncompleteTasks:function(){var e=0;return t.forEach((function(t){t.completed||e++})),e}()})})]})};c(52);var v=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],s=t[1];return Object(a.jsxs)("div",{className:"todo",children:[Object(a.jsx)(l,{title:"Todo"}),Object(a.jsx)(f,{setTodos:s,todos:c}),Object(a.jsx)(m,{todos:c,setTodos:s})]})};function p(){return Object(a.jsx)("div",{children:Object(a.jsx)(d.a,{children:Object(a.jsx)(v,{})})})}var N=c(18),w=c.n(N),g=c(31),k=(c(54),c(32)),T=c.n(k);function F(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(g.a)(w.a.mark((function e(){var t,c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.get("https://randomuser.me/api/?results=5");case 2:t=e.sent,c=t.data,s(c.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(a.jsxs)("div",{className:"followerslist-container",children:[Object(a.jsx)("div",{children:c.map((function(e,t){return Object(a.jsxs)("div",{className:"follower-item","data-testid":"follower-item-".concat(t),children:[Object(a.jsx)("img",{src:e.picture.large}),Object(a.jsxs)("div",{className:"followers-details",children:[Object(a.jsxs)("div",{className:"follower-item-name",children:[Object(a.jsx)("h4",{children:e.name.first})," ",Object(a.jsx)("h4",{children:e.name.last})]}),Object(a.jsx)("p",{children:e.login.username})]})]})}))}),Object(a.jsx)("div",{className:"todo-footer",children:Object(a.jsx)(x.b,{to:"/",children:"Go Back"})})]})}c(73);function C(){return Object(a.jsxs)("div",{className:"followers",children:[Object(a.jsx)(l,{title:"Followers"}),Object(a.jsx)(F,{})]})}function S(){return Object(a.jsx)("div",{children:Object(a.jsx)(d.a,{children:Object(a.jsx)(C,{})})})}var I=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(i,{}),Object(a.jsxs)(j.c,{children:[Object(a.jsx)(j.a,{strict:!0,exact:!0,path:"/",component:p}),Object(a.jsx)(j.a,{strict:!0,exact:!0,path:"/followers",component:S})]})]})},A=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,78)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,o=t.getTTFB;c(e),n(e),s(e),r(e),o(e)}))};o.a.render(Object(a.jsx)(x.a,{children:Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(I,{})})}),document.getElementById("root")),A()}},[[74,1,2]]]);
//# sourceMappingURL=main.f23b5995.chunk.js.map