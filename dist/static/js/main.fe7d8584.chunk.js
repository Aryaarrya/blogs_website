(this.webpackJsonpfinal=this.webpackJsonpfinal||[]).push([[0],{217:function(e,t,a){e.exports=a(423)},222:function(e,t,a){},423:function(e,t,a){"use strict";a.r(t);var n=a(16),r=a(0),l=a.n(r),c=a(134),i=a.n(c),s=(a(222),a(23)),o=a(24),m=a(26),u=a(25),d=a(4),h=a(6),E=a(9),p=Object(E.b)(null,(function(e){return{signOut:function(){return e((function(e,t,a){(0,a.getFirebase)().auth().signOut().then((function(){e({type:"SIGNOUT_SUCCESS"})}))}))}}}))((function(e){return l.a.createElement("ul",{className:"right"},l.a.createElement("li",null,l.a.createElement(d.c,{to:"/add",className:"black-text"},"NewBlog",l.a.createElement("i",{class:"material-icons right large"},"create"))),l.a.createElement("li",null," ",l.a.createElement("a",{onClick:e.signOut,className:"black-text"},"Log Out")," "),l.a.createElement("li",null,l.a.createElement("div",{class:"chip black large"},l.a.createElement("a",{className:"white-text"},e.profile.firstName," ",e.profile.lastName))))})),f=function(){return l.a.createElement("ul",{className:"right"},l.a.createElement("li",null,l.a.createElement(d.c,{className:"black-text",to:"/signup"},"SignUp")),l.a.createElement("li",null,l.a.createElement(d.c,{className:"black-text",to:"/signin"},"Login")))},g=Object(E.b)((function(e){return console.log(e),{auth:e.firebase.auth,profile:e.firebase.profile}}))((function(e){var t=e.auth,a=e.profile,n=t.uid?l.a.createElement(p,{profile:a}):l.a.createElement(f,null);return l.a.createElement("nav",null,l.a.createElement("div",{className:"nav-wrapper"},l.a.createElement("div",{className:"container"},l.a.createElement(d.b,{to:"/",className:"brand-logo black-text"},"blogs.org   ",l.a.createElement("i",{class:"material-icons right large"},"local_florist")),t.isLoaded&&n)))})),b=a(49),v=a.n(b),N=function(e){var t=e.notifications;return l.a.createElement("div",{className:"section sec"},l.a.createElement("div",{className:"card z-depth-0"},l.a.createElement("div",{className:"card-content noti"},l.a.createElement("span",{className:"card-title"},"Notifications"),l.a.createElement("ul",{className:"notifications"},t&&t.map((function(e){return l.a.createElement("li",{key:e.id},l.a.createElement("span",{className:"indigo-text darken-4"},e.user,"  "),l.a.createElement("span",null,e.content),l.a.createElement("div",{className:"grey-text note-date"},v()(e.time.toDate()).fromNow()))}))))))},j=function(e){var t=e.project;t.authorFirstName[0],t.authorLastName[0];return l.a.createElement("div",{className:"row poem"},l.a.createElement("div",{className:"col s12 info"},l.a.createElement("div",{class:"card horizontal small hoverable"},l.a.createElement("div",{class:"card-image"},l.a.createElement("img",{src:t.photo})),l.a.createElement("div",{class:"card-stacked"},l.a.createElement("div",{class:"card-content"},l.a.createElement("div",{className:"description"},l.a.createElement("h4",{className:"titlehome"},t.title),l.a.createElement("p",{className:"addresshome hide-on-small-only"},t.summary))),l.a.createElement("div",{className:"card-action"},l.a.createElement("span",null,l.a.createElement("span",null,l.a.createElement("p",null,"Posted by ",t.authorFirstName," ",t.authorLastName," ",v()(t.createdAt.toDate()).calendar()))))))))},O=(a(228),a(234),function(e){var t=e.projects;return l.a.createElement("div",{className:"project-list section"},t&&t.map((function(e){return l.a.createElement(d.b,{to:"/project/"+e.id,key:e.id},l.a.createElement(j,{project:e}))})))}),y=a(29),C=a(17),w=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.projects,a=e.auth,n=e.notifications;return a.uid?l.a.createElement("div",null,l.a.createElement("div",{className:"theme"},l.a.createElement("div",{className:"branding"},l.a.createElement("h1",{className:"black-text center aa"},"DEAD BLOGGERS SOCIETY"),l.a.createElement("h6",{className:"black-text center bb"},"\u201cBlogs are whatever we make them. Defining \u2018Blog\u2019 is a fool\u2019s errand.\u201d ~Michael Conniff"))),l.a.createElement("div",{className:"dashboard"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s12 m9"},l.a.createElement(O,{projects:t})),l.a.createElement("div",{className:"col s12 m2 offset-m1 notifs"},l.a.createElement(N,{notifications:n}),l.a.createElement("div",{class:"container"},l.a.createElement(d.c,{to:"/add"},l.a.createElement("a",{class:"waves-effect waves-light btn-large pulse createnew black"},l.a.createElement("i",{class:"material-icons right"},"create"),"CREATE BLOG")))))),l.a.createElement("footer",{class:"page-footer"},l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col l6 s12"},l.a.createElement("h5",{class:"white-text"},"Blogs.org"),l.a.createElement("p",{class:"grey-text text-lighten-4"},"Showcase your work with talented artists across the globe")),l.a.createElement("div",{class:"col l4 offset-l2 s12"},l.a.createElement("h5",{class:"white-text"},"Contact us"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{class:"grey-text text-lighten-3",href:"#!"},"admin@thedeadbloggerssociety.co.in")),l.a.createElement("li",null,l.a.createElement("a",{class:"grey-text text-lighten-3",href:"#!"},"contact@thedeadbloggersociety.co.in")))))),l.a.createElement("div",{class:"footer-copyright"},l.a.createElement("div",{class:"container"},"\xa9 2018 The Dead Bloggers Society",l.a.createElement("a",{class:"grey-text text-lighten-4 right",href:"#!"},"About"))))):l.a.createElement(h.a,{to:"/signin"})}}]),a}(r.Component),S=Object(C.d)(Object(E.b)((function(e){return console.log(e),{projects:e.firestore.ordered.projects,auth:e.firebase.auth,notifications:e.firestore.ordered.notifications}})),Object(y.firestoreConnect)([{collection:"projects",orderBy:["createdAt","desc"]},{collection:"notifications",limit:5,orderBy:["time","desc"]}]))(w),x=Object(C.d)(Object(E.b)((function(e,t){var a=t.match.params.id,n=e.firestore.data.projects;return{project:n?n[a]:null,auth:e.firebase.auth}})),Object(y.firestoreConnect)([{collection:"projects"}]))((function(e){var t=e.project,a=e.auth;e.match.params.id;return a.uid?t?l.a.createElement("div",{className:"container ipoem"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s12 m6 standout"},l.a.createElement("h1",null,t.title),l.a.createElement("p",{className:"isum"},l.a.createElement("text",{className:"ihigh"},"Highlight"),": ",t.summary)),l.a.createElement("div",{className:"col s12 m6"},l.a.createElement("img",{src:t.photo,className:"iphoto"}))),l.a.createElement("div",null,l.a.createElement("p",{className:"icontent"},t.content)),l.a.createElement("div",{className:"idetails"},l.a.createElement("p",null,"Posted by ",t.authorFirstName," ",t.authorLastName),l.a.createElement("p",null,v()(t.createdAt.toDate()).calendar())),l.a.createElement("div",{className:"ihome"},l.a.createElement(d.c,{to:"../"},l.a.createElement("a",{className:"btn-small black"},"HOME")))):l.a.createElement("div",{className:"container center"},l.a.createElement("p",null,"Loading project...")):l.a.createElement(h.a,{to:"/signin"})})),k=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={email:"",password:""},e.handleChange=function(t){e.setState(Object(n.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.signIn(e.state)},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.uid?l.a.createElement(h.a,{to:"/"}):l.a.createElement("div",{className:"container"},l.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},l.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign In"),l.a.createElement("div",{className:"input-field"},l.a.createElement("i",{class:"material-icons prefix"},"email"),l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),l.a.createElement("div",{className:"input-field"},l.a.createElement("i",{class:"material-icons prefix"},"vpn_key"),l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),l.a.createElement("div",{className:"input-fiels"},l.a.createElement("button",{className:"btn black lightn-1 z-depth-0"},"Login"),l.a.createElement("div",{className:"red-text center"},t?l.a.createElement("p",null,t):null))))}}]),a}(r.Component),R=Object(E.b)((function(e){return{authError:e.auth.authError,auth:e.firebase.auth}}),(function(e){return{signIn:function(t){return e((a=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(a.email,a.password).then((function(){e({type:"LOGIN_SUCCESS"})})).catch((function(t){e({type:"LOGIN_ERROR",err:t})}))}));var a}}}))(k),F=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={email:"",password:"",firstName:"",lastName:""},e.handleChange=function(t){e.setState(Object(n.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.signUp(e.state)},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.authError;return t.uid?l.a.createElement(h.a,{to:"/"}):l.a.createElement("div",{className:"container"},l.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},l.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign Up"),l.a.createElement("div",{className:"input-field"},l.a.createElement("i",{class:"material-icons prefix"},"email"),l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),l.a.createElement("div",{className:"input-field"},l.a.createElement("i",{class:"material-icons prefix"},"vpn_key"),l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),l.a.createElement("div",{className:"input-field"},l.a.createElement("i",{class:"material-icons prefix"},"person"),l.a.createElement("label",{htmlFor:"firstName"},"First Name"),l.a.createElement("input",{type:"text",id:"firstName",onChange:this.handleChange})),l.a.createElement("div",{className:"input-field"},l.a.createElement("i",{class:"material-icons prefix"},"perm_identity"),l.a.createElement("label",{htmlFor:"lastName"},"Last Name"),l.a.createElement("input",{type:"text",id:"lastName",onChange:this.handleChange})),l.a.createElement("div",{className:"input-field"},l.a.createElement("button",{className:"btn lighten-1 z-depth-0 black"},"Sign Up"),l.a.createElement("div",{className:"red-text center"},a?l.a.createElement("p",null,a):null))))}}]),a}(r.Component),_=Object(E.b)((function(e){return{auth:e.firebase.auth,authError:e.auth.authError}}),(function(e){return{signUp:function(t){return e(function(e){return function(t,a,n){var r=n.getFirebase,l=n.getFirestore,c=r(),i=l();c.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(t){return i.collection("users").doc(t.user.uid).set({firstName:e.firstName,lastName:e.lastName,initials:e.firstName[0]+e.lastName[0]})})).then((function(){t({type:"SIGNUP_SUCCESS"})})).catch((function(e){t({type:"SIGNUP_ERROR",err:e})}))}}(t))}}}))(F),I=a(18),P=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={title:"",image:"",content:""},e.handleChange=function(t){e.setState(Object(n.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.createProject(e.state),e.props.history.push("../")},e}return Object(o.a)(a,[{key:"render",value:function(){return this.props.auth.uid?l.a.createElement("div",{className:"container"},l.a.createElement("form",{onSubmit:this.handleSubmit,className:"createForm"},l.a.createElement("h5",{className:"grey-text text-darken-3"},"Enter your details"),l.a.createElement("div",{className:"input-field"},l.a.createElement("i",{class:"material-icons prefix"},"title"),l.a.createElement("label",{htmlFor:"title"},"Title"),l.a.createElement("input",{type:"text",id:"title",onChange:this.handleChange})),l.a.createElement("div",{className:"input-field"},l.a.createElement("i",{class:"material-icons prefix"},"description"),l.a.createElement("label",{htmlFor:"content"},"Content"),l.a.createElement("textarea",{className:"materialize-textarea",rows:"10",cols:"60",name:"description",id:"content",onChange:this.handleChange})),l.a.createElement("div",{className:"input-field"},l.a.createElement("i",{class:"material-icons prefix"},"highlight_alt"),l.a.createElement("label",{htmlFor:"summary"},"Highlights"),l.a.createElement("textarea",{className:"materialize-textarea",rows:"10",cols:"60",name:"description",id:"summary",onChange:this.handleChange})),l.a.createElement("div",{className:"input-field"},l.a.createElement("i",{class:"material-icons prefix"},"add_photo_alternate"),l.a.createElement("label",{htmlFor:"photo"},"Path to the image"),l.a.createElement("input",{type:"text",id:"photo",onChange:this.handleChange})),l.a.createElement("div",{className:"input-field"},l.a.createElement("button",{className:"btn waves-effect waves-light black"},"POST"))),l.a.createElement("div",{className:"input-field"},l.a.createElement("button",{className:"waves-effect waves-light btn black goback"},l.a.createElement(d.c,{to:"/../",className:"goback"})))):l.a.createElement(h.a,{to:"/signin"})}}]),a}(r.Component),U=Object(E.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{createProject:function(t){return e(function(e){return function(t,a,n){n.getFirebase;var r=(0,n.getFirestore)(),l=a().firebase.profile,c=a().firebase.auth.uid;r.collection("projects").add(Object(I.a)(Object(I.a)({},e),{},{authorFirstName:l.firstName,authorLastName:l.lastName,authorId:c,createdAt:new Date})).then((function(){t({type:"CREATE_PROJECT_SUCCESS"})})).catch((function(e){t({type:"CREATE_PROJECT_ERROR"},e)}))}}(t))}}}))(Object(h.g)(P)),A=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement(d.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(g,null),l.a.createElement(h.d,null,l.a.createElement(h.b,{exact:!0,path:"/",component:S}),l.a.createElement(h.b,{path:"/project/:id",component:x}),l.a.createElement(h.b,{path:"/add",component:U}),l.a.createElement(h.b,{path:"/signin",component:R}),l.a.createElement(h.b,{path:"/signup",component:_}))))}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L={authError:null},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return console.log("login error"),Object(I.a)(Object(I.a)({},e),{},{authError:"Login failed"});case"LOGIN_SUCCESS":return console.log("login success"),Object(I.a)(Object(I.a)({},e),{},{authError:null});case"SIGNOUT_SUCCESS":return console.log("signed out"),e;case"SIGNUP_SUCCESS":return console.log("signup success"),Object(I.a)(Object(I.a)({},e),{},{authError:null});case"SIGNUP_ERROR":return console.log("sin=gnup failed"),Object(I.a)(Object(I.a)({},e),{},{authError:t.err.message});default:return e}},G={projects:[{id:"1",title:"help me find peach",content:"blah blah blah"},{id:"2",title:"collect all the stars",content:"blah blah blah"},{id:"3",title:"egg hunt with yoshi",content:"blah blah blah"}]},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT_SUCCESS":return console.log("create project success"),e;case"CREATE_PROJECT_ERROR":return console.log("create project error"),e;default:return e}},B=a(50),z=Object(C.c)({auth:T,project:D,firestore:B.firestoreReducer,firebase:y.firebaseReducer}),J=a(216),W=a(38),H=a.n(W);a(417),a(421);H.a.initializeApp({apiKey:"AIzaSyDwVFWd_kX5EPPgYD5i-RUxARm1oqEKp9E",authDomain:"net-ninja-mario-plan-ae06e.firebaseapp.com",databaseURL:"https://net-ninja-mario-plan-ae06e.firebaseio.com",projectId:"net-ninja-mario-plan-ae06e",storageBucket:"net-ninja-mario-plan-ae06e.appspot.com",messagingSenderId:"1064365763076",appId:"1:1064365763076:web:4b019a06b770273fd9e351",measurementId:"G-HTGW9LJ64X"}),H.a.firestore().settings({timestampsInSnapshots:!0});var K,M=H.a,X=Object(C.e)(z,Object(C.d)(Object(C.a)(J.a.withExtraArgument({getFirestore:B.getFirestore,getFirebase:y.getFirebase})),Object(B.reduxFirestore)(H.a,M))),Y=(K={firebase:H.a,config:M},Object(n.a)(K,"config",{userProfile:"users",useFirestoreForProfile:!0,enableRedirectHandling:!1,resetBeforeLogin:!1}),Object(n.a)(K,"dispatch",X.dispatch),Object(n.a)(K,"createFirestoreInstance",B.createFirestoreInstance),K);i.a.render(l.a.createElement(E.a,{store:X},l.a.createElement(y.ReactReduxFirebaseProvider,Y,l.a.createElement(A,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[217,1,2]]]);
//# sourceMappingURL=main.fe7d8584.chunk.js.map