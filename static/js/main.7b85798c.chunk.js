(this["webpackJsonpgoit-react-hw-02-phonebook."]=this["webpackJsonpgoit-react-hw-02-phonebook."]||[]).push([[0],{12:function(t){t.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},18:function(t,e,n){},2:function(t,e,n){t.exports={container:"ContactForm_container__jcN59",form:"ContactForm_form__2IF4m",label:"ContactForm_label__2mfXY",input:"ContactForm_input__3dHde",button:"ContactForm_button__3oBpw"}},20:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(10),s=n.n(r),i=(n(18),n(13)),o=n(4),l=n(5),u=n(7),b=n(6),m=n(22),j=n(0);var d=function(t){var e=t.title,n=t.children;return Object(j.jsxs)(j.Fragment,{children:[e&&Object(j.jsx)("h1",{children:e}),n]})},h=n(11),f=n(2),p=n.n(f),O=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(h.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(j.jsxs)("form",{className:p.a.form,onSubmit:this.handleSubmit,children:[Object(j.jsxs)("label",{classNam:p.a.label,children:["Name",Object(j.jsx)("input",{className:p.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",value:e,onChange:this.handleChange,required:!0})]}),Object(j.jsxs)("label",{classNam:p.a.label,children:["Number",Object(j.jsx)("input",{className:p.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",value:n,onChange:this.handleChange,required:!0})]}),Object(j.jsx)("button",{className:p.a.button,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),C=n(8),x=n.n(C),v=function(t){var e=t.value,n=t.onChange;return Object(j.jsx)("label",{className:x.a.label,children:Object(j.jsxs)("p",{className:x.a.contacts,children:["Find contacts by name",Object(j.jsx)("input",{className:x.a.input,type:"text",onChange:n,value:e})]})})},_=n(3),g=n.n(_);var N=function(t){var e=t.contacts,n=t.onDeleteContacts;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("ul",{className:g.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(j.jsxs)("li",{className:g.a.item,children:[Object(j.jsxs)("p",{className:g.a.contact,children:[a," : ",c]}),Object(j.jsx)("button",{className:g.a.btn,type:"button",onClick:function(){return n(e)},children:"X"})]},e)}))})})},S=n(12),y=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:S,filter:""},t.formSubmitHandler=function(e){t.state.contacts.some((function(t){return t.name.toLowerCase()===e.name.toLowerCase()}))||t.state.contacts.find((function(t){return t.number===e.number}))?alert("".concat(e.name," is already in your phonebook!")):(e.id=Object(m.a)(),t.setState((function(t){var n=t.contacts;return{contacts:[e].concat(Object(i.a)(n))}})))},t.deleteContacts=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.getFilter=function(e){t.setState({filter:e.currentTarget.value.toLowerCase()})},t}return Object(l.a)(n,[{key:"getFiltredContacts",value:function(){var t=this.state,e=t.contacts,n=t.filter;return e.filter((function(t){return t.name.toLowerCase().includes(n)}))}},{key:"render",value:function(){var t=this.state.filter;return Object(j.jsxs)("div",{className:p.a.container,children:[Object(j.jsx)(d,{title:"Phonebook",children:Object(j.jsx)(O,{onSubmit:this.formSubmitHandler})}),Object(j.jsxs)(d,{title:"Contacts",children:[Object(j.jsx)(v,{value:t,onChange:this.getFilter}),Object(j.jsx)(N,{contacts:this.getFiltredContacts(),onDeleteContacts:this.deleteContacts})]})]})}}]),n}(a.Component);function F(){return Object(j.jsx)(d,{children:Object(j.jsx)(y,{})})}s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(F,{})}),document.getElementById("root"))},3:function(t,e,n){t.exports={list:"ContactList_list__2cE9S",item:"ContactList_item__MbtlS",btn:"ContactList_btn__2-jnR"}},8:function(t,e,n){t.exports={label:"Filter_label__19jWm",input:"Filter_input__2CEsa"}}},[[20,1,2]]]);
//# sourceMappingURL=main.7b85798c.chunk.js.map