(this["webpackJsonpemployee-direct"]=this["webpackJsonpemployee-direct"]||[]).push([[0],{10:function(e,t,s){},12:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s(4),a=s.n(n),l=s(2),r=function(){return fetch("https://randomuser.me/api/?results=100",{method:"GET"}).then((function(e){return e.json()})).then((function(e){return e.results}))},i=s(0);function o(e){return Object(i.jsx)("nav",{className:"navbar sticky-top text-light bg-primary",children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsxs)("h1",{className:"mx-auto",children:[Object(i.jsx)("i",{class:"fas fa-users"}),"   Employee",Object(i.jsx)("b",{children:"Direct"})]}),Object(i.jsx)("div",{className:"input-group mx-auto w-50",children:Object(i.jsx)("input",{autoComplete:"off",id:"search",onChange:e.handleSearch,type:"search",className:"px-4 form-control text-dark search-input rounded-end border-0 rounded-pill mx-auto",placeholder:"Search Employee...","aria-describedby":"search-icon"})})]})})}function j(e){return Object(i.jsxs)("table",{className:"h-100 table table-striped  table-hover",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{className:"table-row",children:[Object(i.jsx)("th",{scope:"col",children:Object(i.jsx)("small",{className:"text-muted",children:"Img"})}),Object(i.jsx)("th",{scope:"col",children:Object(i.jsx)("small",{className:"text-muted",children:"Title"})}),Object(i.jsx)("th",{scope:"col",children:Object(i.jsx)("button",{onClick:e.toggleFirst,className:"btn sort-btn-first",children:Object(i.jsxs)("small",{className:"text-muted",children:["First ",Object(i.jsx)("i",{class:"fas fa-angle-up sort-icon"})]})})}),Object(i.jsx)("th",{scope:"col",children:Object(i.jsx)("button",{onClick:e.toggleLast,className:"btn sort-btn-last",children:Object(i.jsxs)("small",{className:"text-muted",children:["Last ",Object(i.jsx)("i",{class:"fas fa-angle-up sort-icon"})]})})}),Object(i.jsx)("th",{scope:"col",children:Object(i.jsx)("small",{className:"text-muted",children:"Email"})}),Object(i.jsx)("th",{scope:"col",children:Object(i.jsx)("small",{className:"text-muted",children:"Phone"})})]})}),Object(i.jsx)("tbody",{id:"tbody",children:e.results.map((function(e,t){return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:Object(i.jsx)("img",{className:"employee-img",src:e.picture.thumbnail,alt:e.name.last+", "+e.name.first})}),Object(i.jsx)("th",{children:e.name.title}),Object(i.jsx)("td",{children:e.name.first}),Object(i.jsx)("td",{children:e.name.last}),Object(i.jsx)("td",{children:e.email}),Object(i.jsx)("td",{children:e.cell})]})}))})]})}function u(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),s=t[0],n=t[1],a=Object(c.useState)([]),u=Object(l.a)(a,2),b=u[0],d=u[1],m=Object(c.useState)([]),h=Object(l.a)(m,2),O=(h[0],h[1],Object(c.useState)(!1)),x=Object(l.a)(O,2),f=x[0],p=x[1],g=Object(c.useState)([]),v=Object(l.a)(g,2),N=(v[0],v[1],Object(c.useState)(!1)),y=Object(l.a)(N,2),S=y[0],k=y[1];return Object(c.useEffect)((function(){r().then((function(e){n(e),d(e)})).catch((function(e){return console.log(e)}))}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(o,{handleSearch:function(){for(var e=[],t=document.querySelector("#search").value,s=0;s<b.length;s++)(b[s].name.first.includes(t)||b[s].name.last.includes(t)||b[s].email.includes(t)||b[s].cell.includes(t))&&e.push(b[s]);n(e)},results:s}),Object(i.jsx)(j,{toggleLast:function(){var e=document.querySelector(".sort-btn-last > small > i");p(!f),e.classList.toggle("active"),b.sort((function(e,t){return e.name.last<t.name.last?-1:e.name.last>t.name.last?1:0})),n(f?b.reverse():b)},toggleFirst:function(){var e=document.querySelector(".sort-btn-first > small > i");k(!S),e.classList.toggle("active"),b.sort((function(e,t){return e.name.first<t.name.first?-1:e.name.first>t.name.first?1:0})),n(S?b.reverse():b)},results:s})]})}s(10);var b=function(){return Object(i.jsx)(u,{})};s(11);a.a.render(Object(i.jsx)(b,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.c08acde7.chunk.js.map