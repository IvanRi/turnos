(this.webpackJsonpturnos_web=this.webpackJsonpturnos_web||[]).push([[0],{15:function(e,n,t){e.exports=t(23)},23:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(11),i=t.n(o),c=t(2),l=t(5),u=t.n(l),s=t(6),m=t(3),d=t(1);function f(){var e=Object(c.a)(["padding-left:50%;"]);return f=function(){return e},e}function p(){var e=Object(c.a)(["\n  position: relative;\n\n  .error{\n    font-size: .8rem;\n    color: red;\n    position: absolute;\n    bottom: 1px;\n  }\n\n  .info{\n    font-size: .8rem;\n    color: #ffb000;\n    position: absolute;\n    bottom: 1px;\n  }\n\n  .placeholder{\n    color: ",";\n    position: absolute;\n    top:-3px;\n    height:0;\n    font-size:.75rem;\n  }\n\n  .input{\n    width: 100%;\n    border: none;\n    margin: 1rem 0;\n    padding: .3rem 0;\n    font-size: .85rem;\n    border-bottom: \n      ","\n      solid  \n      "," ;\n    :focus {\n      outline: none;\n    }\n    background-color: transparent;\n    ","\n  }\n"]);return p=function(){return e},e}var b=a.a.forwardRef((function(e,n){var t=e.required,o=e.id,i=e.color,c=e.type,l=e.label,u=e.defaultValue,s=e.className,d=e.centerNumber,f=e.charRestriction,p=Object(r.useState)(""),b=Object(m.a)(p,2),h=b[0],v=b[1],y=Object(r.useState)(null),E=Object(m.a)(y,2),j=E[0],w=E[1],x=Object(r.useState)(null),O=Object(m.a)(x,2),k=O[0],N=O[1];Object(r.useEffect)((function(){if(u){v(u.toString());var e=u.length-f;if(e>=0){var n=u.slice(0,u.length-e);return N(n),w("S\xf3lo se permiten hasta ".concat(f," car\xe1cteres."))}N(u)}}),[u]);var S=function(e){!function(){var e=document.getElementById("".concat(o)).value;v(e)}(),function(e){if(e.target.value.length>=f)return w("S\xf3lo se permiten hasta ".concat(f," car\xe1cteres."));w(null)}(e)};return a.a.createElement(g,{className:s,color:i,centerNumber:d,writing:h},a.a.createElement("input",{ref:n,className:"input",spellCheck:"false",type:c,maxLength:f,id:o,onChange:function(e){return S(e)},placeholder:h.length?"":l,defaultValue:k,autoComplete:"off"}),!!h.length&&a.a.createElement("div",{className:"placeholder"},l),t&&a.a.createElement("div",{className:"error"},"Este es un campo obligatorio"),!!j&&a.a.createElement("div",{className:"info"},j))}));b.defaultProps={centerNumber:!1,required:!1,type:"text",className:"",defaultValue:!1};var g=d.c.div(p(),(function(e){var n=e.required,t=e.color;return n?"red":t}),(function(e){return e.writing?"2px":"1px"}),(function(e){var n=e.required,t=e.theme,r=e.writing;return n?"red":r&&t.palette.green}),(function(e){return!!e.centerNumber&&Object(d.b)(f())})),h=b;function v(){var e=Object(c.a)(["\n      background-color: ",";\n      color: white;\n    "]);return v=function(){return e},e}function y(){var e=Object(c.a)(["\n      background-color: ",";\n      color: white;\n    "]);return y=function(){return e},e}function E(){var e=Object(c.a)(["\n  position: relative;\n  overflow: hidden;\n  border-radius: .8rem;\n  border: none;\n  padding: 10px;\n  cursor: pointer;\n  background-color: transparent;\n  transition: all .3s ease;\n  font-size:1.1rem;\n  display:flex;\n  align-items:center;\n  &:focus {\n    outline: none;\n  };\n\n  ","\n"]);return E=function(){return e},e}var j=d.c.button(E(),(function(e){return"primary"===e.type?Object(d.b)(y(),(function(e){return e.theme.palette.green})):Object(d.b)(v(),(function(e){return e.theme.palette.grey}))})),w=function(e){return a.a.createElement(j,e,e.children)};function x(){var e=Object(c.a)(["\n    height: 15px;\n    .lds-ellipsis {\n        display: inline-block;\n        position: relative;\n        width: 64px;\n        height: 15px;\n    }\n    .lds-ellipsis div {\n        position: absolute;\n        top: 2px;\n        width: 11px;\n        height: 11px;\n        border-radius: 50%;\n        animation-timing-function: cubic-bezier(0, 1, 1, 0);\n        background: ",";\n    }\n    .lds-ellipsis div:nth-child(1) {\n        left: 6px;\n        animation: lds-ellipsis1 0.6s infinite;\n    }\n    .lds-ellipsis div:nth-child(2) {\n        left: 6px;\n        animation: lds-ellipsis2 0.6s infinite;\n    }\n    .lds-ellipsis div:nth-child(3) {\n        left: 26px;\n        animation: lds-ellipsis2 0.6s infinite;\n    }\n    .lds-ellipsis div:nth-child(4) {\n        left: 45px;\n        animation: lds-ellipsis3 0.6s infinite;\n    }\n    @keyframes lds-ellipsis1 {\n        0% {\n            transform: scale(0);\n        }\n        100% {\n            transform: scale(1);\n        }\n    }\n    @keyframes lds-ellipsis3 {\n        0% {\n            transform: scale(1);\n        }\n        100% {\n            transform: scale(0);\n        }\n    }\n    @keyframes lds-ellipsis2 {\n        0% {\n            transform: translate(0, 0);\n        }\n        100% {\n            transform: translate(19px, 0);\n        }\n    }\n"]);return x=function(){return e},e}var O=d.c.div(x(),(function(e){return e.color||"rgb(65, 130, 252)"})),k=function(e){return a.a.createElement(O,e,a.a.createElement("div",{className:"lds-ellipsis"},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null)))};function N(){var e=Object(c.a)(["\n  background-color: #ff000038;\n  padding: .5rem;\n  border-radius: .3rem;\n  font-size: .8rem;\n  margin-bottom: 1rem;\n  display:"," ;\n"]);return N=function(){return e},e}var S=d.c.div(N(),(function(e){return e.error?"block":"none"})),C=function(e){var n=e.error;return a.a.createElement(S,e,n)};function z(){var e=Object(c.a)(["\n  background-color:whitesmoke;\n  width:25rem;\n  padding:2rem;\n  box-sizing:border-box;\n  border-radius:.5rem;\n\n  h3{\n    font-weight:bold;\n    font-size:1.8rem;\n    margin:.5rem 0;\n  }\n\n  .loginButton{\n    border-radius:.7rem;\n    font-size:1rem;\n    background-color:",";\n    width:10rem;\n    display:flex;\n    justify-content:center;\n    height:2.5rem;\n    margin:auto;\n    margin-top:2rem;\n  }\n\n  .registerContainer{\n    display:flex;\n    justify-content:center;\n    margin-top:2rem;\n\n    .pStyle{\n      margin-left:.5rem;\n      color:",";\n      font-weight:bold;\n      cursor:pointer;\n    }\n  }\n"]);return z=function(){return e},e}var R=d.c.div(z(),(function(e){return e.theme.palette.green}),(function(e){return e.theme.palette.green})),T=function(e){var n=e.onLogin,t=e.onError,o=e.setFormType,i=Object(r.useState)(!1),c=Object(m.a)(i,2),l=c[0],d=c[1],f=Object(r.useRef)(null),p=Object(r.useRef)(null);function b(){return(b=Object(s.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.next=3,n(f.current.value,p.current.value);case 3:d(!1);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return a.a.createElement(R,null,a.a.createElement("h3",null,"Iniciar sesi\xf3n"),a.a.createElement("p",{style:{marginBottom:"2rem"}},"Completa los campos para iniciar sesi\xf3n."),t&&a.a.createElement(C,{error:t}),a.a.createElement(h,{label:"Nombre de usuario",id:"user",ref:f}),a.a.createElement(h,{label:"Contrase\xf1a",id:"pass",type:"password",ref:p}),a.a.createElement(w,{className:"loginButton",onClick:function(){return b.apply(this,arguments)}},l?a.a.createElement(k,{color:"white"}):"Iniciar sesi\xf3n"),a.a.createElement("div",{className:"registerContainer"},"\xbfUsuario nuevo?",a.a.createElement("div",{className:"pStyle",onClick:o},"Registrate")))},B=t(4);function I(){var e=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  #myH3{\n    font-size: 1.5rem;\n    margin: 2rem 0;\n  }\n\n  .backButton{\n    width:60%; \n    background-color:",";\n    display: flex;\n    justify-content: center;\n    svg{\n      font-size:1.5rem;\n    }\n  }\n\n  .svgCustom{\n    color:",";\n    font-size:5rem;\n  }\n"]);return I=function(){return e},e}var D=d.c.div(I(),(function(e){return e.theme.palette.green}),(function(e){return e.theme.palette.green})),P=function(e){return a.a.createElement(D,null,a.a.createElement(B.c,{className:"svgCustom"}),a.a.createElement("h3",{id:"myH3"},"Usuario creado correctamente"),a.a.createElement(w,{className:"backButton"},a.a.createElement(B.b,null)," In al login"))},L=function(e,n){return fetch("".concat("http://localhost:4001","/login"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams("name=".concat(e,"&password=").concat(n))}).then((function(e){return e.json()}))},M=function(e,n){return fetch("".concat("http://localhost:4001","/register"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams("name=".concat(e,"&password=").concat(n))}).then((function(e){return e.json()}))};function F(){var e=Object(c.a)(["\n  background-color:whitesmoke;\n  width:25rem;\n  padding:2rem;\n  box-sizing:border-box;\n  border-radius:.5rem;\n\n  h3{\n    font-weight:bold;\n    font-size:1.8rem;\n    margin:.5rem 0;\n  }\n\n  .loginButton{\n    border-radius:.7rem;\n    font-size:1rem;\n    background-color:",";\n    width:10rem;\n    display:flex;\n    justify-content:center;\n    height:2.5rem;\n    margin:auto;\n    margin-top:2rem;\n  }\n\n  .toLogin{\n    display:flex;\n    justify-content:center;\n    margin-top:2rem;\n\n    .pStyle{\n      margin-left:.5rem;\n      color:",";\n      font-weight:bold;\n      cursor:pointer;\n    }\n  }\n"]);return F=function(){return e},e}var G=d.c.div(F(),(function(e){return e.theme.palette.green}),(function(e){return e.theme.palette.green})),U=function(e){var n=e.setFormType,t=Object(r.useState)(!1),o=Object(m.a)(t,2),i=o[0],c=o[1],l=Object(r.useState)(null),d=Object(m.a)(l,2),f=d[0],p=d[1],b=Object(r.useState)(!1),g=Object(m.a)(b,2),v=g[0],y=g[1],E=Object(r.useRef)(null),j=Object(r.useRef)(null),x=Object(r.useRef)(null);function O(){y(!0),setTimeout((function(){n("login")}),3e3)}function N(){return(N=Object(s.a)(u.a.mark((function e(){var n,t,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=j.current.value,t=x.current.value,n===t){e.next=4;break}return e.abrupt("return",p("Las contrase\xf1as no coinciden"));case 4:return c(!0),e.next=7,M(E.current.value,n);case 7:if(r=e.sent,c(!1),!r.error){e.next=11;break}return e.abrupt("return",p(r.error));case 11:O();case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return a.a.createElement(G,null,v?a.a.createElement(P,null):a.a.createElement(a.a.Fragment,null,a.a.createElement("h3",null,"Registrarme"),a.a.createElement("p",{style:{marginBottom:"2rem"}},"Completa los campos para registrarte."),f&&a.a.createElement(C,{error:f}),a.a.createElement(h,{label:"Nombre de usuario",id:"userRegister",ref:E}),a.a.createElement(h,{label:"Contrase\xf1a",id:"passRegister",type:"password",ref:j}),a.a.createElement(h,{label:"Repita la contrase\xf1a",id:"passRepeat",type:"password",ref:x}),a.a.createElement(w,{className:"loginButton",onClick:function(){return N.apply(this,arguments)}},i?a.a.createElement(k,{color:"white"}):"Registrarme"),a.a.createElement("div",{className:"toLogin"},"\xbfYa tienes un usuario?",a.a.createElement("div",{className:"pStyle",onClick:n},"Inicia sesi\xf3n"))))};function q(){var e=Object(c.a)(["\n  background-color: ",";\n  position:absolute;\n  top:0;\n  bottom:0;\n  left:0;\n  right:0;\n  display:flex;\n  justify-content:center;\n  align-items:center;\n"]);return q=function(){return e},e}var _=d.c.div(q(),(function(e){return e.theme.palette.darkGrey})),A=function(e){var n=Object(r.useState)("login"),t=Object(m.a)(n,2),o=t[0],i=t[1];return a.a.createElement(_,null,"login"===o?a.a.createElement(T,Object.assign({},e,{setFormType:function(){return i("registro")}})):a.a.createElement(U,{setFormType:function(){return i("login")}}))};function V(){localStorage.clear(),window.location.reload()}function H(){var e=Object(c.a)(["background-color: ",";"]);return H=function(){return e},e}function J(){var e=Object(c.a)(["\n  margin-top:1rem;\n  border-radius: .5rem;\n  height: 3rem;\n  display: flex;\n  align-items: center;\n  font-size: 1.1rem;\n  ","\n  color: whitesmoke;\n  box-sizing:border-box;\n  position:relative;\n  cursor:pointer;\n"]);return J=function(){return e},e}function W(){var e=Object(c.a)(["\n  height: 100vh;\n  width:20rem;\n  padding:2rem;\n  box-sizing:border-box;\n  display:flex;\n  flex-direction:column;\n  justify-content:space-between;\n  background-color: ",";\n\n  .option-icon{\n    margin-right:1rem;\n  }\n\n  .addTurn{\n    width:100%;\n    display:flex;\n    justify-content:center;\n  }\n\n  .addTurn-icon{\n    font-size:1.5rem;\n    margin-left:1rem;\n  }\n\n  .logoutButton{\n    width:100%;\n    display:flex;\n    justify-content:center;\n  }\n\n  @media (max-width: 800px) {\n    position:absolute;\n    left:",";\n    transition: left .5s;\n  }\n"]);return W=function(){return e},e}var Y=d.c.div(W(),(function(e){return e.theme.palette.darkGrey}),(function(e){return e.currentDisplay?0:"-20rem"})),$=d.c.div(J(),(function(e){return e.selected===e.id&&Object(d.b)(H(),(function(e){return e.theme.palette.grey}))})),K=function(e){var n=e.selected,t=e.setSelected,r=e.currentDisplay,o=e.changeDisplay,i=function(e){t(e),o(!1)};return a.a.createElement(Y,{currentDisplay:r},a.a.createElement("div",null,a.a.createElement(w,{className:"addTurn",type:"primary"},"Nuevo turno",a.a.createElement(B.a,{className:"addTurn-icon"})),a.a.createElement($,{selected:n,id:"Mis turnos",onClick:function(){return i("Mis turnos")}},a.a.createElement(B.e,{className:"addTurn-icon option-icon"}),"Mis turnos"),a.a.createElement($,{selected:n,id:"Perfil",onClick:function(){return i("Perfil")}},a.a.createElement(B.h,{className:"addTurn-icon option-icon"}),"Perfil")),a.a.createElement(w,{className:"logoutButton",onClick:V},"Cerrar sesi\xf3n",a.a.createElement(B.f,{className:"addTurn-icon"})))};function Q(){var e=Object(c.a)(["\n  background-color:",";\n  color: whitesmoke;\n  height: 4rem;\n  display: flex;\n  align-items: center;\n  justify-content:space-between;\n  font-size: 1.5rem;\n  padding: 0 1rem;\n\n  .menuIcon{\n    font-size:1.5rem;\n    padding:.5rem;\n    border-radius: 50%;\n    display:none;\n    background-color: ",";\n\n    @media (max-width: 800px) {\n      display:flex;\n    }\n  }\n"]);return Q=function(){return e},e}var X=d.c.div(Q(),(function(e){return e.theme.palette.grey}),(function(e){return e.theme.palette.green})),Z=function(e){var n=e.title,t=e.setMenuDisplay,r=e.currentDisplay;return a.a.createElement(X,null,n,r?a.a.createElement(B.d,{className:"menuIcon",onClick:function(){return t(!r)}}):a.a.createElement(B.g,{className:"menuIcon",onClick:function(){return t(!r)}}))};function ee(){var e=Object(c.a)(["\n\n"]);return ee=function(){return e},e}var ne=d.c.div(ee()),te=function(e){return a.a.createElement(ne,null,"TURNOS")};function re(){var e=Object(c.a)(["\n\n"]);return re=function(){return e},e}var ae=d.c.div(re()),oe=function(e){return a.a.createElement(ae,null,"Perfil")};function ie(){var e=Object(c.a)(["\n  width: calc(100vw - 20rem);\n\n  .dataContainer{\n    height: calc(100vh - 4rem);\n  }\n\n  @media (max-width: 800px) {\n    width:100vw;\n  }\n"]);return ie=function(){return e},e}function ce(){var e=Object(c.a)(["\n  display:flex;\n  overflow:hidden;\n"]);return ce=function(){return e},e}var le=d.c.div(ce()),ue=d.c.div(ie()),se=function(e){var n=Object(r.useState)("Mis turnos"),t=Object(m.a)(n,2),o=t[0],i=t[1],c=Object(r.useState)(!1),l=Object(m.a)(c,2),u=l[0],s=l[1];return a.a.createElement(le,null,a.a.createElement(K,{selected:o,setSelected:i,currentDisplay:u,changeDisplay:s}),a.a.createElement(ue,null,a.a.createElement(Z,{title:o,setMenuDisplay:s,currentDisplay:u}),a.a.createElement("div",{className:"dataContainer"},"Mis turnos"===o?a.a.createElement(te,null):a.a.createElement(oe,null))))},me={palette:{darkGrey:"#2e3539",grey:"#464c51",lightGrey:"#fafafa",green:"#40c173",fontGrey:"#8c9093"}};function de(){var e=Object(c.a)(['\n  line-height: 1;\n  font-family: "Roboto", sans-serif;\n  color: #313638;\n  background-color: #fffded;\n  position:absolute;\n  left:0;\n  right:0;\n  top: 0;\n  bottom:0;\n']);return de=function(){return e},e}var fe=d.c.div(de()),pe=function(){var e=Object(r.useState)(!1),n=Object(m.a)(e,2),t=n[0],o=n[1],i=Object(r.useState)(null),c=Object(m.a)(i,2),l=c[0],f=c[1];function p(e,n){localStorage.setItem(e,n)}function b(){return(b=Object(s.a)(u.a.mark((function e(n,t){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(null),e.next=3,L(n,t);case 3:if(!(r=e.sent).error){e.next=6;break}return e.abrupt("return",f(r.error));case 6:p("user_twirp",r.token),o(!0);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){localStorage.getItem("user_twirp")&&o(!0)}),[t]),a.a.createElement(fe,null,a.a.createElement(d.a,{theme:me},a.a.createElement("div",{className:"App"},t?a.a.createElement(se,null):a.a.createElement(A,{onLogin:function(e,n){return b.apply(this,arguments)},onError:l}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(pe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.a72958f4.chunk.js.map