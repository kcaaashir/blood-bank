(this["webpackJsonpblood-bank"]=this["webpackJsonpblood-bank"]||[]).push([[0],{48:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/img5.926af922.png"},89:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(8),o=n.n(s),r=n(29),l=n(10),i=n(50),d=n.n(i),j=(n(73),n(2)),b=function(e,t){return e.location.pathname===t?{color:"#ff9900"}:{color:"black"}},h=Object(l.f)((function(e){var t=e.history;return Object(j.jsx)("div",{className:"sticky-top top-menu",style:{borderBottom:"1px solid #dee2e6"},children:Object(j.jsxs)("ul",{style:{height:"45px"},className:"nav nav-tabs bg-white",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(r.b,{className:"nav-link",style:b(t,"/"),to:"/",children:"Home"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(r.b,{className:"nav-link",style:b(t,"/addDonor"),to:"/addDonor",children:"Manage Donor"})})]})})})),u=function(e){var t=e.children;return Object(j.jsxs)(a.Fragment,{children:[Object(j.jsx)(h,{}),Object(j.jsx)("div",{style:{overflow:"none",borderCollapse:"separate",borderSpacing:"15px",border:"5px solid lightblue"},children:Object(j.jsx)("div",{children:t})})]})},p=(n(48),{superLargeDesktop:{breakpoint:{max:4e3,min:3e3},items:1},desktop:{breakpoint:{max:2e3,min:1024},items:1},tablet:{breakpoint:{max:1024,min:464},items:1},mobile:{breakpoint:{max:464,min:0},items:1}}),x=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(u,{children:Object(j.jsx)("div",{style:{borderCollapse:"separate",borderSpacing:"15px",border:"5px solid lightblue"},children:Object(j.jsx)(d.a,{swipeable:!0,draggable:!1,responsive:p,containerClass:"carousel-container",dotListClass:"custom-dot-list-style",itemClass:"carousel-item-padding-40-px",children:Object(j.jsx)("div",{children:Object(j.jsx)("img",{width:"200px",alt:"",src:n(83).default,className:"responsive"})})})})})})},m=n(30),O=n(33),f=n(28),g=n(120),v=n(125),N=n(124),y=n(43),k=n.n(y),C=n(51),S="https://blood-bank123.herokuapp.com/api",w=function(){var e=Object(C.a)(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("".concat(S,"/donor/add"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).catch((function(e){console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(e,t){return console.log(S),fetch("".concat(S,"/donor/search?blood_group=").concat(e,"&location=").concat(t),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))},T=Object(g.a)((function(e){return{root:{"& > *":{marginTop:"25px",width:"40px"}}}})),G=function(){var e=Object(a.useState)({name:"",age:"",sex:"",blood_group:"",location:"",phone:""}),t=Object(f.a)(e,2),n=t[0],c=t[1],s=n.name,o=n.age,r=n.sex,l=n.blood_group,i=n.location,d=n.phone,b=Object(a.useState)([]),h=Object(f.a)(b,2),p=h[0],x=h[1],g=Object(a.useState)(!1),y=Object(f.a)(g,2),k=y[0],C=y[1],S=Object(a.useState)(!1),G=Object(f.a)(S,2),_=G[0],B=G[1],z=Object(a.useState)({address:"",bloodGroup:""}),A=Object(f.a)(z,2),E=A[0],L=A[1],P=E.address,I=E.bloodGroup,J=function(){D("","").then((function(e){e&&"failed"==e.status?console.log(e):x(e.payload)}))};Object(a.useEffect)((function(){J()}),[]);var F=T(),M=function(e){return function(t){C(""),B("");var a=t.target.value;c(Object(O.a)(Object(O.a)({},n),{},Object(m.a)({},e,a)))}},H=function(e){return function(t){C(""),B("");var n=t.target.value;L(Object(O.a)(Object(O.a)({},E),{},Object(m.a)({},e,n)))}};return Object(j.jsxs)(a.Fragment,{children:[Object(j.jsx)(u,{children:Object(j.jsxs)("div",{className:"ml-2 mb-2",children:[Object(j.jsx)("h2",{style:{fontSize:"28px"},children:"Add Donor Info"}),function(){if(!0===k)return Object(j.jsx)("h3",{className:"text-danger info-message",children:"Please provide all data"})}(),function(){if(!0===_)return Object(j.jsx)("h3",{className:"text-success info-message",children:"Donor data is created"})}(),Object(j.jsxs)("form",{className:F.root,noValidate:!0,autoComplete:"off",children:[Object(j.jsx)("span",{className:"mr-4",children:Object(j.jsx)(N.a,{value:s,onChange:M("name"),id:"standard-basic",label:"Name"})}),Object(j.jsx)("span",{className:"mr-4",children:Object(j.jsx)(N.a,{value:o,onChange:M("age"),id:"standard-basic",type:"number",label:"Age"})}),Object(j.jsx)("span",{className:"mr-4",children:Object(j.jsx)(N.a,{value:r,onChange:M("sex"),id:"standard-basic",label:"sex"})}),Object(j.jsx)("span",{className:"mr-4",children:Object(j.jsx)(N.a,{value:l,onChange:M("blood_group"),id:"standard-basic",label:"Blood Group"})}),Object(j.jsx)("span",{className:"mr-4",children:Object(j.jsx)(N.a,{value:i,onChange:M("location"),id:"standard-basic",label:"Location"})}),Object(j.jsx)("span",{className:"mr-4",children:Object(j.jsx)(N.a,{value:d,onChange:M("phone"),type:"number",id:"standard-basic",label:"Phone No"})}),Object(j.jsx)(v.a,{size:"small",className:"button",width:"40px",variant:"contained",color:"primary",onClick:function(e){e.preventDefault(),w(n).then((function(e){e&&"failed"===e.status?C(!0):(B(!0),c({name:"",age:"",sex:"",blood_group:"",location:"",phone:""}),J())}))},children:"Save"})]})]})}),Object(j.jsx)("div",{style:{overflow:"none",borderCollapse:"separate",borderSpacing:"15px",border:"5px solid lightblue"},children:Object(j.jsxs)("div",{className:"ml-2",children:[Object(j.jsx)("h2",{style:{fontSize:"28px",textAlign:"center"},children:"Donor Info Table"}),Object(j.jsx)("span",{className:"mb-4",children:"Enter search data here"}),Object(j.jsx)("form",{children:Object(j.jsxs)("div",{className:"mb-4",children:[Object(j.jsx)("span",{className:"mr-4",children:Object(j.jsx)(N.a,{value:P,onChange:H("address"),id:"outlined-helperText",variant:"outlined",label:"Location"})}),Object(j.jsx)("span",{className:"mr-4",children:Object(j.jsx)(N.a,{value:I,onChange:H("bloodGroup"),id:"outlined-helperText",variant:"outlined",label:"Blood Group"})}),Object(j.jsx)(v.a,{size:"small",className:"button",variant:"contained",color:"primary",onClick:function(e){e.preventDefault(),D(I,P).then((function(e){e&&"failed"===e.status?console.log(e):x(e.payload)}))},children:"Search"})]})}),Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("div",{className:"col-12",children:Object(j.jsxs)("table",{className:"table",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{scope:"col",children:"Name"}),Object(j.jsx)("th",{scope:"col",children:"Age"}),Object(j.jsx)("th",{scope:"col",children:"Sex"}),Object(j.jsx)("th",{scope:"col",children:"Blood Group"}),Object(j.jsx)("th",{scope:"col",children:"location"}),Object(j.jsx)("th",{scope:"col",children:"Phone"})]})}),Object(j.jsx)("tbody",{children:p&&p.map((function(e,t){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:e.name}),Object(j.jsx)("td",{children:e.age}),Object(j.jsx)("td",{children:e.sex}),Object(j.jsx)("td",{children:e.blood_group}),Object(j.jsx)("td",{children:e.location}),Object(j.jsx)("td",{children:e.phone})]},t)}))})]})})})]})})]})},_=function(){return Object(j.jsx)(r.a,{children:Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{path:"/",exact:!0,component:x}),Object(j.jsx)(l.a,{path:"/addDonor",exact:!0,component:G})]})})};n(86).config(),o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(_,{})}),document.getElementById("root"))}},[[89,1,2]]]);
//# sourceMappingURL=main.ac78f160.chunk.js.map