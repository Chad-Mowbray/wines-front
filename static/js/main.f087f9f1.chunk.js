(this["webpackJsonpwine-frontend"]=this["webpackJsonpwine-frontend"]||[]).push([[0],{102:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(17),i=n.n(a),s=(n(53),n(13)),o=n(14),j=n(16),l=n(15),b=n(48),d=n(7),h=(n(54),n(18)),u=n(2),p=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(u.jsx)("div",{children:Object(u.jsxs)(h.BootstrapTable,{data:this.props.wines,children:[Object(u.jsx)(h.TableHeaderColumn,{isKey:!0,dataField:"id",children:" ID "}),Object(u.jsx)(h.TableHeaderColumn,{dataField:"name",children:" Name "}),Object(u.jsx)(h.TableHeaderColumn,{dataField:"price",children:" Price "}),Object(u.jsx)(h.TableHeaderColumn,{dataField:"varietal",children:" Varietal "}),Object(u.jsx)(h.TableHeaderColumn,{dataField:"description",children:" Description "})]})})}}]),n}(c.Component),O=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={wines:[]},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://bravo-wine-api.herokuapp.com/wines").then((function(e){return e.json()})).then((function(t){e.setState({wines:t})}))}},{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:" All Wines "}),Object(u.jsx)(p,{wines:this.state.wines})]})}}]),n}(c.Component),x=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={wine:{}},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e,t=this,n=this.props.match.params.wineID;(e=n,fetch("https://bravo-wine-api.herokuapp.com/wines/".concat(e)).then((function(e){return e.json()}))).then((function(e){return t.setState({wine:e})}))}},{key:"render",value:function(){var e=this.state.wine;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:" Name "}),Object(u.jsxs)("p",{children:[" ",e.name]}),Object(u.jsx)("h2",{children:" Price "}),Object(u.jsxs)("p",{children:[" ",e.price]}),Object(u.jsx)("h2",{children:" Varietal "}),Object(u.jsxs)("p",{children:[" ",e.varietal]}),Object(u.jsx)("h2",{children:" Description "}),Object(u.jsxs)("p",{children:[" ",e.description]})]})}}]),n}(c.Component),v=n(104),f=n(105),m=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={redirect:!1},e}return Object(o.a)(n,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),function(e){return fetch("https://bravo-wine-api.herokuapp.com/wines/",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify(e)})}({name:e.target.elements[0].value,price:e.target.elements[2].value,varietal:e.target.elements[1].value,description:e.target.elements[3].value}).then((function(e){t.setState({redirect:!0})}))}},{key:"render",value:function(){return this.state.redirect?Object(u.jsx)(d.a,{to:"/"}):Object(u.jsx)("div",{children:Object(u.jsxs)(v.a,{onSubmit:this.handleSubmit.bind(this),children:[Object(u.jsxs)(v.a.Group,{controlId:"name",children:[Object(u.jsx)(v.a.Label,{children:"Wine Name"}),Object(u.jsx)(v.a.Control,{})]}),Object(u.jsxs)(v.a.Group,{controlId:"varietal",children:[Object(u.jsx)(v.a.Label,{children:"Wine Varietal"}),Object(u.jsx)(v.a.Control,{})]}),Object(u.jsxs)(v.a.Group,{controlId:"price",children:[Object(u.jsx)(v.a.Label,{children:"Wine Price"}),Object(u.jsx)(v.a.Control,{})]}),Object(u.jsxs)(v.a.Group,{controlId:"description",children:[Object(u.jsx)(v.a.Label,{children:"Wine Description"}),Object(u.jsx)(v.a.Control,{})]}),Object(u.jsx)(f.a,{variant:"primary",type:"submit",children:"Submit"})]})})}}]),n}(c.Component),w=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(u.jsx)("div",{children:Object(u.jsx)(b.a,{children:Object(u.jsxs)("div",{children:[Object(u.jsx)(d.b,{exact:!0,path:"/add-wine",component:m}),Object(u.jsx)(d.b,{exact:!0,path:"/wines/:wineID",component:x}),Object(u.jsx)(d.b,{exact:!0,path:"/",component:O})]})})})}}]),n}(c.Component),y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,106)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(w,{})}),document.getElementById("root")),y()},53:function(e,t,n){},54:function(e,t,n){}},[[102,1,2]]]);
//# sourceMappingURL=main.f087f9f1.chunk.js.map