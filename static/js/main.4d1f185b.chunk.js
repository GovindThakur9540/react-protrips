(this["webpackJsonpreact-protrips"]=this["webpackJsonpreact-protrips"]||[]).push([[0],{30:function(t,e,c){},31:function(t,e,c){},32:function(t,e,c){},34:function(t,e,c){},35:function(t,e,c){},41:function(t,e,c){"use strict";c.r(e);var n=c(1),s=c.n(n),i=c(22),r=c.n(i),a=(c(30),c(24)),l=(c(31),c(32),c(9)),o=c(10),j=c(12),b=c(11),h=c(0),p=function(t){Object(j.a)(c,t);var e=Object(b.a)(c);function c(){var t;Object(l.a)(this,c);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))).findTropicCount=function(){return t.props.trips.reduce((function(t,e){return t+("tropic"===e.type.toLowerCase())}),0)},t.findTrekCount=function(){return t.props.trips.reduce((function(t,e){return t+("trek"===e.type.toLowerCase())}),0)},t.findClubCount=function(){return t.props.trips.reduce((function(t,e){return t+("club"===e.type.toLowerCase())}),0)},t}return Object(o.a)(c,[{key:"render",value:function(){var t=this.props.trips?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"main-container",children:[Object(h.jsx)("h1",{className:"count-value",children:this.props.trips.length}),Object(h.jsx)("h4",{children:"Trips"})]}),Object(h.jsxs)("div",{className:"info-container",children:[Object(h.jsx)("img",{src:"https://img.icons8.com/wired/50/000000/sun.png",alt:"tropic-img"}),Object(h.jsx)("img",{src:"https://img.icons8.com/ios-filled/50/000000/mountain.png",alt:"trek-img"}),Object(h.jsx)("img",{src:"https://img.icons8.com/ios-filled/50/000000/bavarian-beer-mug.png",alt:"club-img"})]}),Object(h.jsxs)("div",{className:"count-container",children:[Object(h.jsx)("h1",{children:this.findTropicCount()}),Object(h.jsx)("h1",{children:this.findTrekCount()}),Object(h.jsx)("h1",{children:this.findClubCount()})]})]}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"main-container",children:[Object(h.jsx)("h1",{className:"count-value",children:this.props.trips.length}),Object(h.jsx)("h4",{children:"Trips"})]}),Object(h.jsxs)("div",{className:"info-container",children:[Object(h.jsx)("img",{src:"https://img.icons8.com/wired/50/000000/sun.png",alt:"tropic-img"}),Object(h.jsx)("img",{src:"https://img.icons8.com/ios-filled/50/000000/mountain.png",alt:"trek-img"}),Object(h.jsx)("img",{src:"https://img.icons8.com/ios-filled/50/000000/bavarian-beer-mug.png",alt:"club-img"})]}),Object(h.jsxs)("div",{className:"count-container",children:[Object(h.jsx)("h1",{children:"0"}),Object(h.jsx)("h1",{children:"0"}),Object(h.jsx)("h1",{children:"0"})]})]});return Object(h.jsx)(h.Fragment,{children:t})}}]),c}(n.Component),d=c(25),u=c(8),O=(c(34),function(t){Object(j.a)(c,t);var e=Object(b.a)(c);function c(t){var n;return Object(l.a)(this,c),(n=e.call(this,t)).getDate=function(t){console.log(t.target.value),n.setState(Object(u.a)(Object(u.a)({},n.state),{},{date:t.target.value}))},n.getPlace=function(t){console.log(t.target.value),n.setState(Object(u.a)(Object(u.a)({},n.state),{},{place:t.target.value})),console.log("state",n.state)},n.findValue=function(t){console.log(t.target.value),n.setState(Object(u.a)(Object(u.a)({},n.state),{},{type:t.target.value}))},n.submitButton=function(t){t.preventDefault(),n.setState({trips:[].concat(Object(d.a)(n.state.trips),[{date:n.state.date,place:n.state.place,type:n.state.type}])}),alert("New Trip Added")},n.state={trips:[],date:"",place:"",type:""},n}return Object(o.a)(c,[{key:"componentDidUpdate",value:function(){this.props.parentCallback(this.state.trips)}},{key:"render",value:function(){return console.log("trips",this.state.trips),Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"trip-container",children:[Object(h.jsx)("div",{className:"header-container",children:Object(h.jsx)("h1",{children:"Add a Trip"})}),Object(h.jsxs)("form",{className:"form-container",children:[Object(h.jsx)("label",{className:"spacing",children:"Date:"}),Object(h.jsx)("input",{type:"date",onChange:this.getDate}),Object(h.jsx)("label",{className:"spacing",children:"Place:"}),Object(h.jsx)("input",{type:"text",onChange:this.getPlace}),Object(h.jsx)("label",{className:"spacing",children:"Type:"}),Object(h.jsxs)("select",{onChange:this.findValue,children:[Object(h.jsx)("option",{hidden:!0,children:"Choose Type"}),Object(h.jsx)("option",{children:"Trek"}),Object(h.jsx)("option",{children:"Club"}),Object(h.jsx)("option",{children:"Tropic"})]}),Object(h.jsx)("button",{type:"submit",className:"spacing submit-button",onClick:this.submitButton,children:"SUBMIT"})]})]})})}}]),c}(n.Component)),x=(c(35),function(t){Object(j.a)(c,t);var e=Object(b.a)(c);function c(){var t;Object(l.a)(this,c);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))).renderTrips=function(){return t.props.trips.map((function(t,e){return Object(h.jsxs)("tr",{className:"table.content",children:[Object(h.jsx)("td",{children:t.date}),Object(h.jsx)("td",{children:t.place}),Object(h.jsx)("td",{children:t.type})]},e)}))},t}return Object(o.a)(c,[{key:"render",value:function(){var t=this,e=this.props.trips?Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("table",{children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Date"}),Object(h.jsx)("th",{children:"Place"}),Object(h.jsx)("th",{children:"Type"})]})}),Object(h.jsx)("tbody",{children:this.renderTrips()})]})}):Object(h.jsx)(h.Fragment,{children:"No Trips Added"});return Object(h.jsxs)("div",{children:[e,Object(h.jsxs)("div",{className:"filter",children:[Object(h.jsx)("p",{children:"Filter by: "}),Object(h.jsx)("p",{onClick:function(){return t.changeType("")},children:"All"}),Object(h.jsx)("hr",{}),Object(h.jsx)("p",{onClick:function(){return t.changeType("Trek")},children:"Trek"}),Object(h.jsx)("hr",{}),Object(h.jsx)("p",{onClick:function(){return t.changeType("Club")},children:"Club"}),Object(h.jsx)("hr",{}),Object(h.jsx)("p",{onClick:function(){return t.changeType("Tropic")},children:"Tropic"})]})]})}}]),c}(s.a.Component)),g=c(15),m=c(2);var f=function(){var t=Object(n.useState)(""),e=Object(a.a)(t,2),c=e[0],s=e[1];return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(g.a,{children:[Object(h.jsxs)("div",{className:"nav-bar",children:[Object(h.jsx)("button",{children:Object(h.jsx)(g.b,{to:"/",children:Object(h.jsx)("img",{src:"https://img.icons8.com/metro/50/000000/home.png",alt:"home-button"})})}),Object(h.jsx)("button",{children:Object(h.jsx)(g.b,{to:"/addTrip",children:Object(h.jsx)("img",{src:"https://img.icons8.com/ios/50/000000/calendar--v1.png",alt:"add-trip-button"})})}),Object(h.jsx)("button",{children:Object(h.jsx)(g.b,{to:"/showTrips",children:Object(h.jsx)("img",{src:"https://img.icons8.com/pastel-glyph/50/000000/around-the-globe--v1.png",alt:"all-trip-button"})})})]}),Object(h.jsxs)(m.c,{children:[Object(h.jsx)(m.a,{exact:!0,path:"/",children:Object(h.jsx)(p,{trips:c})}),Object(h.jsx)(m.a,{path:"/addTrip",children:Object(h.jsx)(O,{parentCallback:function(t){console.log("handle call back"),s(t),console.log("Data from child",t)}})}),Object(h.jsx)(m.a,{path:"/showTrips",children:Object(h.jsx)(x,{trips:c})})]})]})})},v=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,42)).then((function(e){var c=e.getCLS,n=e.getFID,s=e.getFCP,i=e.getLCP,r=e.getTTFB;c(t),n(t),s(t),i(t),r(t)}))};r.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(f,{})}),document.getElementById("root")),v()}},[[41,1,2]]]);
//# sourceMappingURL=main.4d1f185b.chunk.js.map