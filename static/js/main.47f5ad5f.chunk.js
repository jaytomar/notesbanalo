(this.webpackJsonpnotes=this.webpackJsonpnotes||[]).push([[0],{23:function(e,t,n){},27:function(e,t,n){},44:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(2),a=n.n(s),o=n(29),i=n.n(o),l=(n(44),n(12)),r=(n(23),n(24)),u=n.n(r),d=n(30),j=n(18);n(46),n(48);j.a.initializeApp({apiKey:"AIzaSyA080kJfAPwLpYxRMozXm1z2gYSUobiwnw",authDomain:"notesbanalo.firebaseapp.com",databaseURL:"https://notesbanalo.firebaseio.com",projectId:"notesbanalo",storageBucket:"notesbanalo.appspot.com",messagingSenderId:"592029749801",appId:"1:592029749801:web:187b77d0eabbec763d0238"});var b=j.a,h=j.a.auth(),m=j.a.firestore(),O=function(){var e=function(){var e=Object(d.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new b.auth.GoogleAuthProvider,e.next=3,h.signInWithPopup(n);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{}),Object(c.jsx)("div",{className:"form-container",children:Object(c.jsxs)("div",{className:"form",children:[Object(c.jsx)("h1",{children:"notebanalo"}),Object(c.jsx)("button",{onClick:e,children:"Login with Google"})]})})]})},p=n(37),f=n(31),x=n(32),v=n(13),g=n(38),C=n(36),k=n(33),w=n.n(k);n(27);function y(e){var t=e.target.parentNode.value||e.target.value,n=window.getSelection().getRangeAt(0).startContainer.parentNode.nodeName,c=window.getSelection().getRangeAt(0).startContainer.parentNode.style.backgroundColor;"H1"===n||"H2"===n||"H3"===n?t==n?document.execCommand("formatblock",!1,"div"):document.execCommand("formatblock",!1,t):"H1"===t||"H2"===t||"H3"===t?("B"!==n&&"I"!==n&&"STRIKE"!==n&&"U"!==n||document.execCommand("removeFormat",!1),document.execCommand("formatblock",!1,t)):document.execCommand(t,!1),"hiliteColor"===t&&(""!==c?document.execCommand("removeFormat",!1):document.execCommand("hiliteColor",!1,"#DAF7A6")),"formatBlock"===t&&document.execCommand(t,!1)}var S=function(e){var t=e.position.x+e.position.width/2-200,n={position:"absolute",top:e.position.y-30+window.scrollY,left:t};return Object(c.jsx)("div",{style:n,className:"menu-container",children:Object(c.jsxs)("div",{className:"menu",children:[Object(c.jsxs)("button",{onClick:y,value:"italic",children:[" ",Object(c.jsx)("i",{className:"fas fa-italic"})]}),Object(c.jsxs)("button",{onClick:y,value:"bold",children:[" ",Object(c.jsx)("i",{className:"fas fa-bold"})," "]}),Object(c.jsxs)("button",{onClick:y,value:"underline",children:[" ",Object(c.jsx)("i",{className:"fas fa-underline"})," "]}),Object(c.jsxs)("button",{onClick:y,value:"strikethrough",children:[" ",Object(c.jsx)("i",{className:"fas fa-strikethrough"})," "]}),Object(c.jsxs)("button",{onClick:y,value:"H1",children:[" ",Object(c.jsx)("b",{children:"H1"}),"  "]}),Object(c.jsxs)("button",{onClick:y,value:"H2",children:[" ",Object(c.jsx)("b",{children:"H2"}),"  "]}),Object(c.jsxs)("button",{onClick:y,value:"H3",children:[" ",Object(c.jsx)("b",{children:"H3"})]}),Object(c.jsxs)("button",{onClick:y,value:"insertOrderedList",children:[" ",Object(c.jsx)("i",{className:"fas fa-list-ol"})," "]}),Object(c.jsxs)("button",{onClick:y,value:"insertUnorderedList",children:[" ",Object(c.jsx)("i",{className:"fas fa-list-ul"})]}),Object(c.jsxs)("button",{onClick:y,value:"justifyLeft",children:[" ",Object(c.jsx)("i",{className:"fas fa-align-left"})," "]}),Object(c.jsxs)("button",{onClick:y,value:"justifyCenter",children:[Object(c.jsx)("i",{className:"fas fa-align-center"})," "]}),Object(c.jsxs)("button",{onClick:y,value:"justifyRight",children:[" ",Object(c.jsx)("i",{className:"fas fa-align-right"})]}),Object(c.jsxs)("button",{onClick:y,value:"hiliteColor",children:[" ",Object(c.jsx)("i",{className:"fas fa-highlighter"})]})]})})};function N(e){var t=e.target.parentNode.value||e.target.value;"insertHorizontalRule"==t&&(document.execCommand(t,!1),document.execCommand("insertHtml",!1,"<br>")),"formatBlock"==t&&document.execCommand(t,!1)}var H=function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){document.execCommand("insertHTML",!1,"<div contenteditable='false'><img src=".concat(n.result," /> </div>"))},n.readAsDataURL(t)},D=function(e){var t=e.position.x,n={position:"absolute",top:e.position.y+window.scrollY,left:t};return Object(c.jsx)("div",{style:n,className:"menu-container",children:Object(c.jsxs)("div",{className:"menu",children:[Object(c.jsx)("label",{for:"file-upload",className:"custom-file-upload",children:Object(c.jsx)("i",{className:"fas fa-upload"})}),Object(c.jsx)("input",{id:"file-upload",type:"file",accept:"image/*",onChange:H,className:"image-upload"}),Object(c.jsx)("button",{onClick:N,value:"insertHorizontalRule",children:" divider "})]})})},M=function(){var e,t,n,c=window.getSelection();if(0!==c.rangeCount){var s=c.getRangeAt(0).cloneRange();s.collapse(!1);var a=s.getBoundingClientRect();a&&(e=a.left,t=a.top,n=a.width)}return{x:e,y:t,width:n}},A=function(e){Object(g.a)(n,e);var t=Object(C.a)(n);function n(e){var s;return Object(f.a)(this,n),(s=t.call(this,e)).onKeyDownHandler=function(e){if("."==e.key&&"."==s.state.prevkey){e.preventDefault();var t=M(),n=t.x,c=t.y,a=t.width;s.setState({isSlashMenuOpen:!0,menuPosition:{x:n,y:c,width:a},prevkey:null})}else"."==e.key?s.setState({prevkey:"."}):s.setState({isSlashMenuOpen:!1,prevkey:null})},s.mouseUp=function(){var e=document.getSelection();if("None"!=e.type){var t=M(),n=t.x,c=t.y,a=t.width;"Caret"!=e.type&&s.setState({isMenuOpen:!0,menuPosition:{x:n,y:c,width:a},isSlashMenuOpen:!1})}},s.render=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("div",{className:"App default",onMouseUp:s.mouseUp,onKeyDown:s.onKeyDownHandler,children:Object(c.jsxs)("div",{className:"sheet",children:[s.state.isMenuOpen&&Object(c.jsx)(S,{position:s.state.menuPosition}),s.state.isSlashMenuOpen&&Object(c.jsx)(D,{position:s.state.menuPosition}),Object(c.jsx)(w.a,{className:"editable",html:s.state.html,disabled:!1,onChange:s.onChangeHandler,onMouseDown:s.onMouseDownHandler,spellCheck:"false"}),Object(c.jsx)("button",{onClick:s.SaveDoc,className:"save-btn",children:" save doc"})]})})})},s.state={id:s.props.currentDoc,html:s.props.html,isMenuOpen:!1,isSlashMenuOpen:!1,menuPosition:{x:null,y:null,width:null},prevkey:null},s.onMouseDownHandler=s.onMouseDownHandler.bind(Object(v.a)(s)),s.onChangeHandler=s.onChangeHandler.bind(Object(v.a)(s)),s.mouseUp=s.mouseUp.bind(Object(v.a)(s)),s.onKeyDownHandler=s.onKeyDownHandler.bind(Object(v.a)(s)),s.SaveDoc=s.SaveDoc.bind(Object(v.a)(s)),s}return Object(x.a)(n,[{key:"componentDidUpdate",value:function(){this.props.currentDoc!=this.state.id&&this.setState({id:this.props.currentDoc,html:this.props.html})}},{key:"SaveDoc",value:function(){m.collection("users").doc(this.props.userObj.user.uid).collection("notes").doc(this.props.currentDoc.id).update({doc:this.state.html}).then((function(){console.log("succesfully added")}))}},{key:"onMouseDownHandler",value:function(e){document.getSelection().removeAllRanges(),this.state.isMenuOpen&&this.setState({isMenuOpen:!1,isSlashMenuOpen:!1}),this.state.isSlashMenuOpen&&this.setState({isMenuOpen:!1,isSlashMenuOpen:!1})}},{key:"onChangeHandler",value:function(e){this.setState({html:e.target.value,isMenuOpen:!1})}}]),n}(a.a.Component),R=n(58),L=function(e){var t=e.userObj,n=function(e){var t=e.target.id;f(u[t].doc),C(u[t]),o()},a=function(e){var n=e.target.parentNode.id||e.target.id;m.collection("users").doc(t.user.uid).collection("notes").doc(u[n].id).delete().then((function(){console.log("Document successfully deleted!"),o()})),f("document deleted")};Object(s.useEffect)((function(){o()}),[]);var o=function(){t&&(m.collection("users").doc(t.user.uid).collection("notes").get().then((function(e){var t=e.docs.map((function(e){return e.data()}));d(Object(p.a)(t)),C(u[0])})),y(!0))},i=Object(s.useState)([{id:"1234",name:"test",doc:"hello 1"}]),r=Object(l.a)(i,2),u=r[0],d=r[1],j=Object(s.useState)("create or select a document to show its content"),b=Object(l.a)(j,2),O=b[0],f=b[1],x=Object(s.useState)(u[0]),v=Object(l.a)(x,2),g=v[0],C=v[1],k=Object(s.useState)(!1),w=Object(l.a)(k,2),y=(w[0],w[1]),S=Object(s.useState)(1),N=Object(l.a)(S,2),H=N[0],D=N[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{children:Object(c.jsxs)("nav",{children:[Object(c.jsx)("div",{children:Object(c.jsx)("p",{className:"logo",children:"notebanalo"})}),Object(c.jsx)("button",{onClick:function(){h.signOut()},className:"sign-out-btn",children:"sign out"})]})}),Object(c.jsxs)("div",{className:"sidebar",children:[Object(c.jsx)("button",{onClick:function(){D(H+1);var e=Object(R.a)(),n={id:e,createdAt:Date.now(),name:"document "+H,doc:"You can highlight this text to apply styles. type the period (.) key twice for more option"};m.collection("users").doc(t.user.uid).collection("notes").doc(e).set(n),o()},className:"new-doc-btn",children:"new doc"}),Object(c.jsx)("div",{children:u.map((function(e,t){return Object(c.jsxs)("div",{className:"sidebar-btn-container",children:[Object(c.jsx)("button",{className:"sidebar-btn",onClick:n,id:t,children:e.name}),Object(c.jsx)("button",{className:"delete-btn",onClick:a,id:t,children:Object(c.jsx)("i",{className:"fas fa-trash-alt"})})]},t)}))})]}),Object(c.jsx)(A,{userObj:t,html:O,currentDoc:g})]})},U=n(34),F=n(5),P=function(e){var t=e.isLogged,n=e.userObj;return Object(c.jsx)(U.a,{children:Object(c.jsx)(F.c,{children:t?Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(F.a,{exact:!0,path:"",children:Object(c.jsx)("div",{className:"",children:Object(c.jsx)(L,{userObj:n})})})}):Object(c.jsx)(F.a,{exact:!0,path:"",children:Object(c.jsx)(O,{})})})})},I=function(){var e=Object(s.useState)(!1),t=Object(l.a)(e,2),n=t[0],a=t[1],o=Object(s.useState)(!1),i=Object(l.a)(o,2),r=i[0],u=i[1],d=Object(s.useState)(null),j=Object(l.a)(d,2),b=j[0],m=j[1];return Object(s.useEffect)((function(){h.onAuthStateChanged((function(e){e?(m({user:e}),a(!0)):a(!1)})),u(!0)}),[]),Object(c.jsx)(c.Fragment,{children:r?Object(c.jsx)(P,{isLogged:n,userObj:b}):"initialize"})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,59)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),s(e),a(e),o(e)}))};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(I,{})}),document.getElementById("root")),z()}},[[56,1,2]]]);
//# sourceMappingURL=main.47f5ad5f.chunk.js.map