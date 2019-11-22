(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{187:function(e,t,a){e.exports=a.p+"static/media/profile_pic.d8e66e15.png"},193:function(e,t,a){e.exports=a(386)},372:function(e,t,a){},377:function(e,t,a){},383:function(e,t,a){},384:function(e,t,a){},385:function(e,t,a){},386:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(5),o=a.n(l),c=a(67),i=a(174),s=a(175),u={LOGIN_AUTHENTICATED:"LOGIN_AUTHENTICATED",LOGIN_REQUEST:"LOGIN_REQUEST",LOGIN_ERROR:"LOGIN_ERROR",LOG_OUT:"LOGOUT"},m={GET_TOP_HEADLINES_BY_COUNTRY:" GET_TOP_HEADLINES_BY_COUNTRY",GET_EVERYTHING:"GET_EVERYTHING",GET_STORY:"GET_STORY",GET_PROFILE:"GET_PROFILE",UPDATE_PROFILE:"UPDATE_PROFILE"},E={ALERT_ERROR_SHOW:"ALERT_ERROR_SHOW",ALERT_ERROR_REMOVE:"ALERT_ERROR_REMOVE"};function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(a,!0).forEach((function(t){Object(s.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u.LOGIN_AUTHENTICATED:return p({},e,{token:t.token});case u.LOGIN_ERROR:return p({},e,{error:"Seems your name or token is invalid"});case m.GET_EVERYTHING:case m.GET_TOP_HEADLINES_BY_COUNTRY:return p({},e,{headlines:t.payload});case m.GET_STORY:return p({},e,{story:t.story});case m.GET_PROFILE:return p({},e,{user:t.user});case m.UPDATE_PROFILE:return p({},e,{user:t.payload});case E.ALERT_ERROR_SHOW:return p({},e,{error:t.error});case E.ALERT_ERROR_REMOVE:return p({},e,{error:void 0});case u.LOG_OUT:return{};default:return e}};var f=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||c.c,y=Object(c.d)(g,function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return void console.log(t)}}(),f(Object(c.a)(i.a)));y.subscribe((function(){return function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(a){console.log(a)}}(y.getState())}));var O=y,h=a(17),b=a(28),v=a(54),T=(a(173),a(81)),R=(a(71),a(32)),_=(a(88),a(47)),k=(a(118),a(60)),N=(a(148),a(45)),I=(a(87),a(50)),w=a(110),L=a.n(w);L.a.defaults.baseURL="https://newsapi.org/v2/";var S={getTopHeadlines:function(e,t){return L.a.get("/top-headlines?country=".concat(e,"&apiKey=").concat(t)).then((function(e){return e.data}))},getEverything:function(e,t){return L.a.get("/everything?q=".concat(e,"&apiKey=").concat(t)).then((function(e){return e.data}))},logout:function(){localStorage.clear()}};function G(e){return function(t){var a,n;t((a="login requested",{type:u.LOGIN_REQUEST,message:a}));try{t({type:u.LOGIN_AUTHENTICATED,token:e.token}),t(function(e){return{type:m.GET_PROFILE,user:e}}(e))}catch(r){console.log("Error login",r),t((n=r,{type:u.LOGIN_ERROR,error:n}))}}}function j(e){return{type:m.GET_STORY,story:e}}function A(e,t){return function(a){S.getTopHeadlines(e,t).then((function(e){console.log("Top headlines",e),a({type:m.GET_TOP_HEADLINES_BY_COUNTRY,payload:e})}))}}function P(e,t){return function(a){S.getEverything(e,t).then((function(e){a({type:m.GET_EVERYTHING,payload:e})}))}}var C=N.a.create({name:"dynamic_rule"})((function(e){var t=e.form.getFieldDecorator,a=R.a.Title;return r.a.createElement("div",{className:"login-form"},r.a.createElement(a,{level:4,className:"login-form-title"},"Sign in to see top news"),r.a.createElement(N.a.Item,null,t("email",{rules:[{required:!0,message:"Your email is required"}]})(r.a.createElement(I.a,{placeholder:"Enter your email"}))),r.a.createElement(N.a.Item,null,t("token",{rules:[{required:!0,message:"Your token is required"}]})(r.a.createElement(I.a,{placeholder:"Enter your token"}))),r.a.createElement(k.a,{type:"primary",className:"button",onClick:function(t){t.preventDefault(),e.form.validateFields((function(t,a){t||(e.login(a,"us"),e.getTopHeadlines("us",a.token),void 0===e.headlines&&e.getAlertError("Oops! No response! Looks like you have an invalid token, email or no network connection"))}))}},"Login"),r.a.createElement(N.a.Item,null,r.a.createElement("p",null,"Don't have a token?"," ",r.a.createElement("a",{href:"https://newsapi.org/register",rel:"noopener noreferrer",target:"_blank"},"Get here"))))}));var U=Object(h.b)((function(e){return{token:e.token,headlines:e.headlines}}),{login:G,getAlertError:function(e){return console.log("Inside alert error",e),{type:E.ALERT_ERROR_SHOW,error:e}},getTopHeadlines:A})(C),D=(a(362),a(69)),H=_.a.Header,x=I.a.Search;var Y=Object(h.b)((function(e){return{token:e.token}}),{login:G,logout:function(){return S.logout(),{type:u.LOG_OUT}},getEverything:P})((function(e){return r.a.createElement(H,{style:{backgroundColor:"white ",borderBottom:"1px solid #e8e8e8",display:"flex",justifyContent:"space-between"}},r.a.createElement("div",null,r.a.createElement(b.b,{to:"/main",style:{color:"rgba(0, 0, 0, 0.70)"}},r.a.createElement("strong",null,"MediaCom"))),r.a.createElement(D.a,{theme:"light",mode:"horizontal",defaultSelectedKeys:[e.defaultSelected],style:{lineHeight:"62px",color:"rgba(0, 0, 0, 0.65)"}},r.a.createElement(D.a.Item,{key:"1"},r.a.createElement(b.b,{to:"/main"},"Main")),e.type?r.a.createElement(D.a.Item,{disabled:!0},r.a.createElement(x,{placeholder:"Enter your search",onSearch:function(t){return e.getEverything(t,e.token)},style:{width:200}})," "):null,r.a.createElement(D.a.Item,{key:"2"},r.a.createElement(b.b,{to:"/profile"},"Profile")),r.a.createElement(D.a.Item,{key:"3",onClick:function(t){"Log out"===e.action&&e.logout()}},e.action)))})),F=(a(370),a(191));var M=Object(h.b)((function(e){return{error:e.error}}),{removeAlertMessage:function(){return{type:E.ALERT_ERROR_REMOVE}}})((function(e){return e.error?r.a.createElement("div",null,r.a.createElement(F.a,{description:e.error,type:"error",closable:!0,className:"error-message",onClose:function(t){console.log(t,"I was closed."),e.removeAlertMessage()}})):null})),V=(a(372),_.a.Content),q=R.a.Title,B=R.a.Text;var W=Object(h.b)((function(e){return{token:e.token,headlines:e.headlines}}),null)((function(e){return e.token&&e.headlines?r.a.createElement(v.a,{to:"/main"}):r.a.createElement(_.a,{className:"layout"},r.a.createElement(Y,{defaultSelected:"4",action:"Log in"}),r.a.createElement("div",{className:"layout-container"},r.a.createElement(M,null),r.a.createElement(V,{className:"login-content"},r.a.createElement(T.a,{className:"login-card"},r.a.createElement("div",{className:"left-grid"},r.a.createElement(q,{level:3,className:"left-grid-text"},"Search worldwide news with code"),r.a.createElement(B,null,"Get breaking news headlines, and search for articles from over 30,000 news sources and blogs with our news API")),r.a.createElement("div",{className:"right-grid"},r.a.createElement(U,null))))))})),K=(a(375),a(186)),J=a(183),z=a(184),Q=a(189),X=a(185),$=a(190),Z=(a(377),a(387),a(113));var ee=Object(h.b)(null,{getStory:j})((function(e){return e.newsList?r.a.createElement(Z.a,{itemLayout:"vertical",size:"large",pagination:{onChange:function(e){console.log(e)},pageSize:3},dataSource:e.newsList,renderItem:function(t,a){return r.a.createElement(Z.a.Item,{key:a,noborder:"true",style:{borderBottomColor:"transparent",borderBottomWidth:0},extra:r.a.createElement("img",{width:272,alt:"news",src:t.urlToImage})},r.a.createElement(Z.a.Item.Meta,{title:r.a.createElement(b.b,{to:"/story",onClick:function(a){e.getStory(t)}},"Home",t.title),description:t.description}),t.content)}}):null})),te=(a(116),a(42)),ae=(a(117),a(27)),ne=R.a.Title,re=R.a.Text,le=function(e){return r.a.createElement("p",{className:"height-".concat(e.value)},e.children)},oe=[4,12,6];var ce=Object(h.b)(null,{getStory:j})((function(e){var t=Object(v.g)(),a=e.newsList?e.newsList.flat().splice(1,3).map((function(a,n){return r.a.createElement(ae.a,{sm:{span:24},xs:{span:24},md:{span:n<3?oe[n]:2+n},lg:{span:n<3?oe[n]:2+n},className:"main-page-content-col",key:n},r.a.createElement(le,null,r.a.createElement("img",{src:a.urlToImage,alt:"news list"})),r.a.createElement(ne,{level:3,className:"title",onClick:function(n){e.getStory(a),setTimeout(t.push("/story"),100)}},a.title),r.a.createElement(re,null,a.description))})):null;return e.newsList?r.a.createElement("div",null,r.a.createElement(te.a,{type:"flex",justify:"space-between",align:"top",gutter:[{xs:8,sm:16,md:24,lg:32},18]},a)):r.a.createElement(v.a,{to:"/"})})),ie=function(e){function t(e){var a;return Object(J.a)(this,t),(a=Object(Q.a)(this,Object(X.a)(t).call(this,e))).handleImageNotDisplayed=function(e){if(e)return e.articles.filter((function(e){if(null!==e.urlToImage)return e}))},a}return Object($.a)(t,e),Object(z.a)(t,[{key:"render",value:function(){return this.props.token&&this.props.headlines?r.a.createElement("div",{className:"main-page"},r.a.createElement(Y,{defaultSelected:"1",type:"withSearchInput",action:"Log out"}),r.a.createElement("div",{className:"main-page-content"},r.a.createElement(ce,{newsList:this.handleImageNotDisplayed(this.props.headlines)}),this.props.headlines?r.a.createElement(K.a,{orientation:"right"},"More Headlines"):null,r.a.createElement("div",{className:"news-list"},r.a.createElement("div",{className:"full-news-list"},r.a.createElement(ee,{newsList:this.handleImageNotDisplayed(this.props.headlines)})))),r.a.createElement(_.a.Footer,{style:{textAlign:"center",color:"black",backgroundColor:"#f6e6a3"}},"MediaCom App \xa92019 Created by Kadri Oluwagbemi")):r.a.createElement(v.a,{to:"/"})}}]),t}(n.Component);var se=Object(h.b)((function(e){return{token:e.token,headlines:e.headlines}}),{getTopHeadlines:A,getEverything:P})(ie),ue=a(187),me=a.n(ue);var Ee=N.a.create({name:"dynamic_rule"})((function(e){var t=e.form.getFieldDecorator,a=R.a.Title;return r.a.createElement("div",null,r.a.createElement(a,{level:4},"Update profile details"),r.a.createElement(N.a.Item,null,t("name",{initialValue:e.user.email?e.user.email.match(/([^@]+)/i)[0]:"",rules:[{required:!0,message:"Your name is required"}]})(r.a.createElement(I.a,{placeholder:"Enter your name"}))),r.a.createElement(N.a.Item,null,t("email",{initialValue:e.user.email,rules:[{required:!0,message:"Your email is required"}]})(r.a.createElement(I.a,{placeholder:"Enter your email"}))),r.a.createElement(N.a.Item,null,t("token",{initialValue:e.user.token,rules:[{required:!0,message:"Your token is required"}]})(r.a.createElement(I.a,{placeholder:"Enter your token"}))),r.a.createElement(k.a,{type:"primary",className:"button",onClick:function(t){t.preventDefault(),e.form.validateFields((function(t,a){console.log("Update Value"),t||e.updateUserProfile(a)}))}},"Update"))})),de=Object(h.b)((function(e){return{user:e.user}}),{updateUserProfile:function(e){return{type:m.UPDATE_PROFILE,payload:e}}})(Ee),pe=(a(383),R.a.Title),ge=R.a.Text;var fe=Object(h.b)((function(e){return{token:e.token,user:e.user}}),null)((function(e){return e.token?r.a.createElement("div",null,r.a.createElement(Y,{action:"Log out"}),r.a.createElement("div",{className:"profile-page"},r.a.createElement(te.a,{gutter:[{xs:8,sm:16,md:24,lg:32},18]},r.a.createElement(ae.a,{className:"gutter-row",sm:{span:24},xs:{span:24},md:{span:7},lg:{span:7}},r.a.createElement("div",{className:"gutter-box"},r.a.createElement(T.a,{className:"profile-card"},r.a.createElement("img",{src:me.a,alt:"profile pic"}),r.a.createElement(pe,{level:3},"User profile"),r.a.createElement("div",null,e.user.name?r.a.createElement("div",null,r.a.createElement("strong",null,"Name:")," ",r.a.createElement("br",null),r.a.createElement(ge,null,e.user.name),r.a.createElement("br",null)):null,r.a.createElement("strong",null,"Email:")," ",r.a.createElement("br",null),r.a.createElement(ge,null,e.user.email),r.a.createElement("br",null),r.a.createElement("strong",null,"Token:"),r.a.createElement("br",null),r.a.createElement(ge,{type:"secondary"},e.user.token),r.a.createElement("br",null))))),r.a.createElement(ae.a,{className:"gutter-row",sm:{span:24},xs:{span:24},md:{span:17},lg:{span:17}},r.a.createElement("div",{className:"gutter-box"},r.a.createElement(T.a,{className:"profile-card"},r.a.createElement(de,null))))))):r.a.createElement(v.a,{to:"/"})}));a(384);var ye=Object(h.b)((function(e){return{token:e.token,story:e.story}}),null)((function(e){return e.token&&e.story?r.a.createElement("div",null,r.a.createElement(Y,{action:"Log out"}),r.a.createElement("div",{className:"story-page"},r.a.createElement("h1",null," ",e.story.title),r.a.createElement("p",null,e.story.description),r.a.createElement("div",null,r.a.createElement("img",{src:e.story.urlToImage,alt:"news list"})),r.a.createElement("p",null,e.story.content)),r.a.createElement(_.a.Footer,{style:{textAlign:"center",color:"black",backgroundColor:"#f6e6a3"}},"MediaCom App \xa92019 Created by Kadri Oluwagbemi")):r.a.createElement(v.a,{to:"/"})})),Oe=a(188);var he=Object(h.b)((function(e){return{token:e.token}}),null)((function(e){var t=e.children,a=Object(Oe.a)(e,["children"]);return console.log("rest",a),console.log("children",t),r.a.createElement(v.b,Object.assign({},a,{render:function(e){var n=e.location;return a.token?t:r.a.createElement(v.a,{to:{pathname:"/",state:{from:n}}})}}))})),be=function(e){var t=e.store;return r.a.createElement(h.a,{store:t},r.a.createElement(b.a,null,r.a.createElement(v.d,null,r.a.createElement(v.b,{exact:!0,path:"/"},r.a.createElement(W,null)),r.a.createElement(he,{path:"/main"},r.a.createElement(se,null)),r.a.createElement(he,{path:"/story"},r.a.createElement(ye,null)),r.a.createElement(he,{path:"/profile"},r.a.createElement(fe,null)))))};a(385),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(be,{store:O}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[193,1,2]]]);
//# sourceMappingURL=main.02f7026f.chunk.js.map