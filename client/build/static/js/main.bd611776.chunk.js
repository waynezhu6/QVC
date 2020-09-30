(this.webpackJsonpqvc=this.webpackJsonpqvc||[]).push([[0],{12:function(e,t,a){e.exports={body:"Viewer_body__1rpcF",show:"Viewer_show__21fzy",hidden:"Viewer_hidden__PyOua"}},3:function(e,t,a){e.exports={body:"Configurator_body__2c50Z",wrapper:"Configurator_wrapper__UHkOV",chooseFile:"Configurator_chooseFile__rpM-E",playDisabled:"Configurator_playDisabled__2Zc4J",banner:"Configurator_banner__1Ux5V",icon:"Configurator_icon__30A6Z",text:"Configurator_text__2URqu",label:"Configurator_label__1ztdz",highlight:"Configurator_highlight__1JhuP",filename:"Configurator_filename__21UIh"}},44:function(e,t,a){e.exports=a(86)},49:function(e,t,a){},6:function(e,t,a){e.exports={body:"Authenticator_body__7nidM",wrapper:"Authenticator_wrapper__13UqW",form:"Authenticator_form__2RdKv",buttons:"Authenticator_buttons__10G_K"}},79:function(e,t){},82:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(37),c=a.n(o),i=(a(49),a(4)),l=a(38),s=a.n(l),u=(a(82),a(83),a(12)),m=a.n(u),d=function(e){var t=Object(n.useRef)(null);return Object(n.useEffect)((function(){var a=!0;if(t.current&&(t.current.addEventListener("play",(function(){a&&t.current&&O.emit("play",{id:O.id,currentTime:t.current.currentTime}),a=!0})),t.current.addEventListener("pause",(function(){a&&t.current&&O.emit("pause",{id:O.id,currentTime:t.current.currentTime}),a=!0}))),O.on("pause",(function(e){e.id!==O.id&&t.current&&(a=!1,t.current.pause(),t.current.currentTime=e.currentTime)})),O.on("play",(function(e){e.id!==O.id&&t.current&&(a=!1,t.current.currentTime=e.currentTime,t.current.play())})),null!==e.video&&t.current){var n=URL.createObjectURL(e.video);t.current.src=n}return function(){t.current&&(t.current.removeEventListener("play",(function(){})),t.current.removeEventListener("pause",(function(){})))}}),[e]),r.a.createElement("div",{className:"".concat(m.a.body," ").concat(e.video?m.a.show:m.a.hidden)},r.a.createElement("video",{controls:!0,ref:t}))},p=a(39),f=a(43),v=a(41),b=a(42),_=a(3),h=a.n(_),E=function(e){var t=Object(f.a)({noClick:!0,noKeyboard:!0,maxFiles:2,accept:"text/vtt, video/mp4, video/webm, application/pdf, image/png",onDropAccepted:function(e){return c(e)}}),a=t.getRootProps,n=t.getInputProps,o=t.open,c=function(t){console.log(t);var a,n=Object(p.a)(t);try{for(n.s();!(a=n.n()).done;){var r=a.value,o=r.name.slice(-3);"mp4"===o?e.setVideo(r):"vtt"===o&&e.setSubtitles(r)}}catch(c){n.e(c)}finally{n.f()}};return r.a.createElement("div",{className:h.a.body},r.a.createElement("div",Object.assign({},a(),{className:h.a.wrapper}),r.a.createElement("input",n()),r.a.createElement("div",null),r.a.createElement("div",{className:h.a.banner},r.a.createElement(v.a,{className:h.a.icon}),r.a.createElement("div",{className:h.a.text},r.a.createElement("span",{className:h.a.label},"Drag & Drop"),r.a.createElement("span",{className:h.a.highlight},"MP4 or WEBM"),r.a.createElement("span",{className:h.a.filename},e.video?e.video.name:""))),r.a.createElement("div",{className:h.a.banner},r.a.createElement(b.a,{className:h.a.icon}),r.a.createElement("div",{className:h.a.text},r.a.createElement("span",{className:h.a.label},"Drag & Drop"),r.a.createElement("span",{className:h.a.highlight},"VTT"),r.a.createElement("span",{className:h.a.filename},e.subtitles?e.subtitles.name:""))),r.a.createElement("div",{className:h.a.chooseFile,onClick:o},"Or Choose a File"),r.a.createElement("div",{className:"".concat(h.a.chooseFile," ").concat(h.a.playDisabled)},"Continue")))},g=a(6),y=a.n(g),w=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(""),l=Object(i.a)(c,2),s=l[0],u=l[1],m=Object(n.useState)(""),d=Object(i.a)(m,2),p=d[0],f=d[1];return r.a.createElement("div",{className:y.a.body},r.a.createElement("div",{className:y.a.wrapper},r.a.createElement("div",{className:y.a.form},r.a.createElement("input",{type:"text",placeholder:"Room Name",onChange:function(e){return o(e.target.value)}}),r.a.createElement("input",{type:"password",placeholder:"Room Password",onChange:function(e){return u(e.target.value)}}),r.a.createElement("input",{type:"text",placeholder:"Username",onChange:function(e){return f(e.target.value)}})),r.a.createElement("div",{className:y.a.buttons},r.a.createElement("button",{onClick:function(){O.emit("createRoom",{room:a,password:s,username:p,id:O.id})}},"Create Room"),r.a.createElement("div",null),r.a.createElement("button",{onClick:function(){O.emit("joinRoom",{room:a,password:s,username:p,id:O.id})}},"Join Room"))))},N=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(null),l=Object(i.a)(c,2),s=l[0],u=l[1],m=Object(n.useState)(null),p=Object(i.a)(m,2),f=p[0],v=p[1];return O.on("createRoom",(function(e){o(e.result)})),O.on("joinRoom",(function(e){o(e.result)})),O.on("disconnect",(function(){O.removeAllListeners()})),r.a.createElement("div",null,r.a.createElement(d,{video:s,subtitles:f}),a?null:r.a.createElement(w,null),a&&null===s?r.a.createElement(E,{video:s,setVideo:u,subtitles:f,setSubtitles:v}):null)},O=s()("http://localhost:5000");Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.bd611776.chunk.js.map