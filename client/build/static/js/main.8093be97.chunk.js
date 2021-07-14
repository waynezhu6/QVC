(this.webpackJsonpqvc=this.webpackJsonpqvc||[]).push([[0],{10:function(e,t,a){e.exports={body:"SplashPage_body__29rwu",container:"SplashPage_container__hV7YC",title:"SplashPage_title__C3RiL",subtitle:"SplashPage_subtitle__3Gyzc",option:"SplashPage_option__fjF7i",auth:"SplashPage_auth__v5PyR",label:"SplashPage_label__qVV4Y",alternative:"SplashPage_alternative__2ds4A"}},104:function(e,t,a){},106:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(53),i=a.n(o),c=(a(68),a(5)),l=a(7),s=a(29),u=a(3),m=a(54),d=a.n(m),v={isAuthorized:!1,roomname:null,password:null,navigation:0,isLogin:!0,video:null,subtitles:null,isConfigured:!1},b=Object(n.createContext)([]),f=function(e){var t=e.children,a=Object(n.useState)(v),o=Object(l.a)(a,2),i=o[0],c=o[1];return r.a.createElement(b.Provider,{value:[i,c]},t)},p=function(e){var t=e.children,a=(e.exact,e.path,Object(n.useContext)(b)),o=Object(l.a)(a,1)[0];return r.a.createElement(u.b,null,o.isAuthorized?t:r.a.createElement(u.a,{to:"/join"}))},g=(a(104),a(105),a(20)),h=a.n(g),E=function(){var e=Object(n.useContext)(b),t=Object(l.a)(e,1)[0],a=Object(n.useRef)(null),o=Object(n.useRef)(null);return Object(n.useEffect)((function(){var e=!0;if(a.current&&(a.current.addEventListener("play",(function(){e&&a.current&&T.emit("play",{id:T.id,currentTime:a.current.currentTime}),e=!0})),a.current.addEventListener("pause",(function(){e&&a.current&&T.emit("pause",{id:T.id,currentTime:a.current.currentTime}),e=!0}))),T.on("pause",(function(t){t.id!==T.id&&a.current&&(e=!1,a.current.pause(),a.current.currentTime=t.currentTime)})),T.on("play",(function(t){t.id!==T.id&&a.current&&(e=!1,a.current.currentTime=t.currentTime,a.current.play())})),null!==t.video&&a.current){var n=URL.createObjectURL(t.video);a.current.src=n}if(null!==t.subtitles&&o.current){var r=URL.createObjectURL(t.subtitles);o.current.src=r}return function(){a.current&&(a.current.removeEventListener("play",(function(){})),a.current.removeEventListener("pause",(function(){})))}}),[t.video,t.subtitles]),r.a.createElement("div",{className:"".concat(h.a.body," ").concat(t.isConfigured?h.a.show:h.a.hidden)},r.a.createElement("video",{controls:!0,ref:a},r.a.createElement("track",{label:"English",kind:"subtitles",ref:o})))},_=a(61),j=a(32),O=a(10),y=a.n(O),w=a(56),C=a(62),N=a(58),k=a(59),R=a(6),x=a.n(R),P=function(){var e=Object(n.useContext)(b),t=Object(l.a)(e,2),a=t[0],o=t[1],i=Object(C.a)({noClick:!0,noKeyboard:!0,maxFiles:2,onDropAccepted:function(e){return d(e)}}),s=i.getRootProps,u=i.getInputProps,m=i.open,d=function(e){console.log(e);var t,n=Object(w.a)(e);try{for(n.s();!(t=n.n()).done;){var r=t.value,i=r.name.slice(-3);"mp4"===i?o(Object(c.a)(Object(c.a)({},a),{},{video:r})):"vtt"===i&&o(Object(c.a)(Object(c.a)({},a),{},{subtitles:r}))}}catch(l){n.e(l)}finally{n.f()}};return r.a.createElement("div",{className:x.a.body},r.a.createElement("div",Object.assign({},s(),{className:x.a.wrapper}),r.a.createElement("input",u()),r.a.createElement("div",null),r.a.createElement("div",{className:x.a.banner},r.a.createElement(N.a,{className:x.a.icon}),r.a.createElement("div",{className:x.a.text},r.a.createElement("span",{className:x.a.label},"Drag & Drop"),r.a.createElement("span",{className:x.a.highlight},"MP4 or WEBM"),r.a.createElement("span",{className:x.a.filename},a.video?a.video.name:""))),r.a.createElement("div",{className:x.a.banner},r.a.createElement(k.a,{className:x.a.icon}),r.a.createElement("div",{className:x.a.text},r.a.createElement("span",{className:x.a.label},"Drag & Drop"),r.a.createElement("span",{className:x.a.highlight},"VTT"),r.a.createElement("span",{className:x.a.filename},a.subtitles?a.subtitles.name:""))),r.a.createElement("div",{className:x.a.chooseFile,onClick:m},"Or Choose a File"),r.a.createElement("div",{className:"\n            ".concat(x.a.chooseFile," \n            ").concat(a.video?x.a.playEnabled:x.a.playDisabled,"\n          "),onClick:function(){a.video&&o(Object(c.a)(Object(c.a)({},a),{},{isConfigured:!0}))}},"Continue")))},S=function(){var e=Object(n.useContext)(b),t=Object(l.a)(e,1)[0];return r.a.createElement("div",{className:y.a.body,style:t.isConfigured?{display:"none"}:{}},r.a.createElement("div",{className:y.a.container},r.a.createElement("div",{className:y.a.title},"QVC"),r.a.createElement(_.a,{style:y.a.line,percent:5+45*t.navigation,strokeWidth:"1",strokeColor:"#1877F2"}),r.a.createElement("div",{className:y.a.subtitle},"Welcome to Quarantine Video Client! Sync playback when watching videos remotely."),function(){switch(t.navigation){case 0:return r.a.createElement(L,null);case 1:return r.a.createElement(A,null);case 2:return r.a.createElement(P,null)}}()))},L=function(){var e=Object(n.useContext)(b),t=Object(l.a)(e,2),a=t[0],o=t[1];return r.a.createElement("div",null,r.a.createElement("div",{className:y.a.option,onClick:function(){return o(Object(c.a)(Object(c.a)({},a),{},{navigation:1,isLogin:!0}))}},r.a.createElement(j.b,null)," Join a Room"),r.a.createElement("div",{className:y.a.option,onClick:function(){return o(Object(c.a)(Object(c.a)({},a),{},{navigation:1,isLogin:!1}))}},r.a.createElement(j.a,null)," Create a Room"))},A=function(){var e=Object(n.useContext)(b),t=Object(l.a)(e,2),a=t[0],o=t[1],i=Object(n.useState)(""),s=Object(l.a)(i,2),u=s[0],m=s[1],d=Object(n.useState)(""),v=Object(l.a)(d,2),f=v[0],p=v[1],g=Object(n.useState)(""),h=Object(l.a)(g,2),E=h[0];h[1];return r.a.createElement("div",{className:y.a.auth},r.a.createElement("div",{className:y.a.label},"Room Name"),r.a.createElement("input",{type:"text",placeholder:"Room Name",onChange:function(e){return m(e.target.value)}}),r.a.createElement("div",{className:y.a.label},"Room Password"),r.a.createElement("input",{type:"password",placeholder:"Room Password",onChange:function(e){return p(e.target.value)}}),r.a.createElement("button",{onClick:function(){a.isLogin?T.emit("joinRoom",{room:u,password:f,username:E,id:T.id}):T.emit("createRoom",{room:u,password:f,username:E,id:T.id})}},a.isLogin?"Join Room":"Create Room"),r.a.createElement("div",{className:y.a.alternative,onClick:function(){o(Object(c.a)(Object(c.a)({},a),{},{navigation:0}))}},"Back"))},W=function(){var e=Object(n.useContext)(b),t=Object(l.a)(e,2),a=t[0],o=t[1];return T.on("createRoom",(function(e){o(Object(c.a)(Object(c.a)({},a),{},{isAuthorized:e.result,navigation:e.result?2:a.navigation}))})),T.on("joinRoom",(function(e){o(Object(c.a)(Object(c.a)({},a),{},{isAuthorized:e.result,navigation:e.result?2:a.navigation}))})),T.on("disconnect",(function(){T.removeAllListeners()})),r.a.createElement("div",null,r.a.createElement(E,null),r.a.createElement(s.a,null,r.a.createElement(u.d,null,r.a.createElement(u.b,{exact:!0,path:"/join"},r.a.createElement(S,null)),r.a.createElement(u.b,{exact:!0,path:"/create"}),r.a.createElement(p,{exact:!0,path:"/"}),r.a.createElement(u.a,{to:"/join"}))))},T=d()("https://waynezhu.ca",{secure:!0,path:"/qvc/socket.io"}),U=a(60);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null,r.a.createElement(W,null))),document.getElementById("root")),U.unregister()},20:function(e,t,a){e.exports={body:"Viewer_body__1rpcF",show:"Viewer_show__21fzy",hidden:"Viewer_hidden__PyOua"}},6:function(e,t,a){e.exports={body:"Configurator_body__2c50Z",wrapper:"Configurator_wrapper__UHkOV",chooseFile:"Configurator_chooseFile__rpM-E",playDisabled:"Configurator_playDisabled__2Zc4J",playEnabled:"Configurator_playEnabled__1aiFU",banner:"Configurator_banner__1Ux5V",icon:"Configurator_icon__30A6Z",text:"Configurator_text__2URqu",label:"Configurator_label__1ztdz",highlight:"Configurator_highlight__1JhuP",filename:"Configurator_filename__21UIh"}},60:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.unregister=t.register=void 0;var n=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function r(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t.register=function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");n?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):r(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):r(t,e)}))}},t.unregister=function(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},63:function(e,t,a){e.exports=a(106)},68:function(e,t,a){},97:function(e,t){}},[[63,1,2]]]);
//# sourceMappingURL=main.8093be97.chunk.js.map