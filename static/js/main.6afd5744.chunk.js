(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{24:function(e,t,n){},44:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),a=n(17),s=n.n(a),l=(n(24),n(3)),i=n(4),o=n(6),d=n(5),u=n(18),j=n.n(u),h=function(){return j.a.get("https://randomuser.me/api/?results=200&nat=us")},b=n(8),p=n(0);var m=function(e){return Object(p.jsx)("div",{className:"container",style:e.style,children:e.children})};n(44);var f=function(e){var t=e.handleInputChange;return Object(p.jsx)("form",{className:"search",children:Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("input",{onChange:function(e){return t(e)},className:"form-control",placeholder:"Search Employee",id:"searchBox"})})})},O=n(19),x=n.n(O);n(46);var y=function(e){var t=e.employees,n=e.sortHandler;return Object(p.jsxs)("table",{className:"table table-stripped",children:[Object(p.jsx)("head",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{scope:"col",children:"Image"}),Object(p.jsx)("th",{scope:"col",classNmae:"nameCol",onClick:function(){return n()},children:"Name"}),Object(p.jsx)("th",{scope:"col",children:"Phone"}),Object(p.jsx)("th",{scope:"col",children:"DOB"})]})}),Object(p.jsx)("body",{children:t.map((function(e,t){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:Object(p.jsx)("img",{alt:"Employee",src:e.picture.thumbnail,className:"img-fluid"})}),Object(p.jsxs)("td",{children:[" ",e.name.first," ",e.name.last]}),Object(p.jsxs)("td",{children:[" ",e.phone]}),Object(p.jsxs)("td",{children:[" ",e.email]}),Object(p.jsx)("td",{children:x()(e.dob.date).calendar()})]},t)}))})]})},v=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={search:"",employees:[],filteredEmployees:[]},e.sortHandler=function(){e.setState(Object(b.a)(Object(b.a)({},e.state),{},{filteredEmployees:e.sort(e.state.filteredEmployees)}))},e.handleInputChange=function(t){var n=t.target.value,c=e.state.employees.filter((function(e){return-1!==Object.values(e).join("").toLowerCase().indexOf(n.toLowerCase())}));e.setState({filteredEmployees:c,search:t.target.value})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;h().then((function(t){e.setState({employees:t.data.results,filteredEmployees:t.data.results})}))}},{key:"render",value:function(){return Object(p.jsx)("div",{children:Object(p.jsxs)(m,{style:{minHeight:"80%",minWidth:"80%"},children:[Object(p.jsx)(f,{handleInputChange:this.handleInputChange}),Object(p.jsx)(y,{employees:this.state.filteredEmployees,sortHandler:this.sortHandler})]})})}}]),n}(c.Component);n(47);var g=function(e){return Object(p.jsxs)("main",{className:"wrapper",children:[" ",e.children]})},C=(n(48),function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={employees:[]},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){h()}},{key:"render",value:function(){return Object(p.jsx)("div",{children:Object(p.jsx)(g,{children:Object(p.jsx)(v,{})})})}}]),n}(c.Component)),E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(C,{})}),document.getElementById("root")),E()}},[[49,1,2]]]);
//# sourceMappingURL=main.6afd5744.chunk.js.map