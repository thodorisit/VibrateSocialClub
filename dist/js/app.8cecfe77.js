(function(t){function e(e){for(var o,a,r=e[0],c=e[1],l=e[2],u=0,h=[];u<r.length;u++)a=r[u],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&h.push(i[a][0]),i[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);d&&d(e);while(h.length)h.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],o=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(o=!1)}o&&(s.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},i={app:0},s=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var d=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("85ec"),i=n.n(o);i.a},"14e0":function(t,e,n){"use strict";var o=n("7de6"),i=n.n(o);i.a},"18fa":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],a={name:"App",components:{}},r=a,c=(n("034f"),n("2877")),l=Object(c["a"])(r,i,s,!1,null,null,null),d=l.exports,u=n("8c4f"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("TopMenuComponent"),n("div",{staticClass:"d-block content width-90 pb-6"}),n("div",{staticClass:"d-none justify-content--center unselectable mt-6 mb-4",attrs:{id:"_record__vibrate_button"}},[n("div",{staticClass:"d-flex justify-content--center align-items--center vibrate-button",on:{touchstart:t.vibrateTouchStart,touchend:t.vibrateTouchEnd}},[n("div",{staticClass:"d-block font-weight-light"},[t._v("Vibrate")])])]),n("div",{staticClass:"d-flex justify-content--center unselectable mt-6 mb-4",attrs:{id:"_record__start_recording_button"}},[n("div",{staticClass:"d-flex justify-content--center align-items--center vibrate-button",on:{click:t.startRecording}},[t._m(0)])]),t._m(1),t._m(2)],1)},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-block"},[t._v("Start"),n("br"),t._v("Recording")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex justify-content--center mt-6 pt-6"},[n("div",{staticClass:"recording-line"},[n("div",{staticClass:"recording-line--black"}),n("div",{staticClass:"recording-line--loaded",attrs:{id:"_recording_line__loaded"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-block content width-90 font-align-center mt-6"},[n("a",{attrs:{target:"_blank",href:"https://itsios.eu/"}},[n("div",{staticClass:"font-sm color-white pt-6",staticStyle:{opacity:"0.5"}},[t._v("Crafted by "),n("span",{staticClass:"font-weight-bold"},[t._v("Thodoris Itsios.")])])])])}],m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"top-menu-container mb-3"},[n("div",{staticClass:"top-menu-content"},[n("img",{staticClass:"logo",attrs:{src:"img/logo.svg"}}),n("router-link",{attrs:{to:"/"}},[n("div",{staticClass:"new-vibe-button font-weight-light"},[t._v("New Vibe ")])])],1)])])},f=[],p={name:"TopMenuComponent",mounted:function(){},data:function(){return{}},methods:{}},b=p,_=(n("69e3"),Object(c["a"])(b,m,f,!1,null,null,null)),w=_.exports,g=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"footer-container"})])}],C={name:"Footer",data:function(){}},k=C,x=(n("66e5"),Object(c["a"])(k,g,y,!1,null,"60d221f3",null)),E=x.exports,T={components:{TopMenuComponent:w,Footer:E},mounted:function(){},methods:{}},j=T,S={duration:{default:1e4,time:0},record:{now:!1,temporary:[],final:[]},timeout_var:null,timestamps:{start:0,end:0,touchStart:0,touchEnd:0},start:function(){this.clearData(),window.console.log("start-timeout");var t=Date.now();this.timestamps.start=t,this.timestamps.touchEnd=t;var e=this;this.timeout_var=setTimeout((function(){e.record.now&&e.vibrateTouchEnd(),e.record.final=e.record.temporary,e.record.final.unshift(0);var t=JSON.stringify(e.record.final);window.location.href=window.envData.url+"/#/playback/"+t.substring(1,t.length-1)}),this.duration.time)},stop:function(){window.console.log("clear-timeout"),clearTimeout(this.timeout_var)},vibrateTouchStart:function(){this.timestamps.touchStart=Date.now(),this.record.now=!0},vibrateTouchEnd:function(){var t=Date.now();this.record.temporary.push(Math.abs(this.timestamps.touchEnd-this.timestamps.touchStart)),this.record.temporary.push(t-this.timestamps.touchStart),this.timestamps.touchEnd=t,this.record.now=!1},clearData:function(){this.duration.time=this.duration.default,this.record.temporary=[],this.timeout_var=null}},O=S,P={name:"RecordComponent",mixins:[j],components:{},mounted:function(){},data:function(){return{record:{final:[]}}},methods:{startRecording:function(){document.getElementById("_record__start_recording_button").classList.remove("d-flex"),document.getElementById("_record__start_recording_button").classList.add("d-none"),document.getElementById("_record__vibrate_button").classList.remove("d-none"),document.getElementById("_record__vibrate_button").classList.add("d-flex"),document.getElementById("_recording_line__loaded").classList.add("animation"),O.start()},stopRecording:function(){O.stop()},vibrateTouchStart:function(){O.vibrateTouchStart()},vibrateTouchEnd:function(){O.vibrateTouchEnd()}}},M=P,z=(n("89d8"),Object(c["a"])(M,h,v,!1,null,"e86e2fc8",null)),$=z.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("TopMenuComponent"),n("div",{staticClass:"d-block content width-90 pb-6"}),n("div",{staticClass:"d-flex justify-content--center unselectable mt-6 mb-4"},[n("div",{staticClass:"d-flex justify-content--center align-items--center vibrate-button",on:{click:t.playVibe}},[t._m(0)])]),n("div",{staticClass:"d-flex justify-content--center flex-direction--column align-content--center width-90 unselectable mt-6 mb-4"},[n("div",{staticClass:"d-block font-l font-weight-light mt-6 color-white"},[t._v("Share your vibe")]),n("div",{staticClass:"d-block"},[n("div",{staticClass:"d-inline-block mt-2 icon"},[n("svg",{staticClass:"svg-share-icon",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},on:{click:t.sharePostFacebook}},[n("path",{attrs:{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z"}})])]),n("div",{staticClass:"d-inline-block mt-2 ml-2 icon"},[n("svg",{staticClass:"svg-share-icon",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","fill-rule":"evenodd","clip-rule":"evenodd"},on:{click:t.sharePostMessenger}},[n("path",{attrs:{d:"M19 24h-14c-2.761 0-5-2.239-5-5v-14c0-2.761 2.239-5 5-5h14c2.762 0 5 2.239 5 5v14c0 2.761-2.238 5-5 5zm-7-19.5c-4.418 0-8 3.316-8 7.407 0 2.332 1.163 4.411 2.981 5.769v2.824l2.724-1.495c.727.201 1.497.31 2.295.31 4.418 0 8-3.317 8-7.408s-3.582-7.407-8-7.407zm.795 9.975l-2.037-2.173-3.975 2.173 4.372-4.642 2.087 2.173 3.926-2.173-4.373 4.642z"}})])]),n("div",{staticClass:"d-inline-block mt-2 ml-2 icon"},[n("svg",{staticClass:"svg-share-icon",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},on:{click:t.sharePostTwitter}},[n("path",{attrs:{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z"}})])]),n("div",{staticClass:"d-inline-block mt-2 ml-2 icon"},[n("svg",{staticClass:"svg-share-icon",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},on:{click:t.sharePostLinkedin}},[n("path",{attrs:{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"}})])]),n("div",{staticClass:"d-inline-block mt-2 ml-2 icon"},[n("svg",{staticClass:"svg-share-icon",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},on:{click:t.sharePostEmail}},[n("path",{attrs:{d:"M13.718 10.528c0 .792-.268 1.829-.684 2.642-1.009 1.98-3.063 1.967-3.063-.14 0-.786.27-1.799.687-2.58 1.021-1.925 3.06-1.624 3.06.078zm10.282 1.472c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-5-1.194c0-3.246-2.631-5.601-6.256-5.601-4.967 0-7.744 3.149-7.744 7.073 0 3.672 2.467 6.517 7.024 6.517 2.52 0 4.124-.726 5.122-1.288l-.687-.991c-1.022.593-2.251 1.136-4.256 1.136-3.429 0-5.733-2.199-5.733-5.473 0-5.714 6.401-6.758 9.214-5.071 2.624 1.642 2.524 5.578.582 7.083-1.034.826-2.199.799-1.821-.756 0 0 1.212-4.489 1.354-4.975h-1.364l-.271.952c-.278-.785-.943-1.295-1.911-1.295-2.018 0-3.722 2.19-3.722 4.783 0 1.73.913 2.804 2.38 2.804 1.283 0 1.95-.726 2.364-1.373-.3 2.898 5.725 1.557 5.725-3.525z"}})])]),n("div",{staticClass:"d-inline-block mt-2 ml-2 icon"},[n("svg",{staticClass:"svg-share-icon",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},on:{click:t.sharePostClipboard}},[n("path",{attrs:{d:"M24 4h-20v20h20v-20zm-24 17v-21h21v2h-19v19h-2z"}})])])])]),t._m(1)],1)},I=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-block font-weight-light"},[t._v("Feel"),n("br"),t._v("the VIBE")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-block content width-90 font-align-center"},[n("a",{attrs:{target:"_blank",href:"https://itsios.eu/"}},[n("div",{staticClass:"font-sm color-white pt-2",staticStyle:{opacity:"0.5"}},[t._v("Crafted by "),n("span",{staticClass:"font-weight-bold"},[t._v("Thodoris Itsios.")])])])])}],L={name:"PlaybackComponent",mixins:[j],props:{vibe:String},watch:{vibe:{immediate:!0,deep:!0,handler:function(t){this.shareUrl=window.envData.url+"/#/playback/"+t,this.record.final=JSON.parse("["+t+"]")}}},mounted:function(){},data:function(){return{shareUrl:"",record:{final:[]}}},methods:{playVibe:function(){window.console.log(this.record.final),window.navigator.vibrate(0),window.navigator.vibrate(this.record.final)},sharePostFacebook:function(){var t="fb://faceweb/f?href=https://www.facebook.com/sharer/sharer.php?u="+this.shareUrl;window.open(t,"_system")},sharePostMessenger:function(){var t="fb-messenger://share/?link="+this.shareUrl;window.open(t,"_system")},sharePostTwitter:function(){var t="twitter://post?message="+this.shareUrl;window.open(t,"_system")},sharePostLinkedin:function(){var t="https://www.linkedin.com/sharing/share-offsite/?url="+this.shareUrl;window.open(t,"_system")},sharePostEmail:function(){window.open("mailto:?subject=VIBE social club&body="+this.shareUrl,"_system")},sharePostClipboard:function(){var t=document.createElement("input");document.body.appendChild(t),t.setAttribute("id","hidden_input__clipboard_id"),document.getElementById("hidden_input__clipboard_id").value=this.shareUrl,t.select(),document.execCommand("copy"),document.body.removeChild(t)}}},U=L,D=(n("14e0"),Object(c["a"])(U,B,I,!1,null,"17ac496a",null)),V=D.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("TopMenuComponent"),t._m(0)],1)},N=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content width-90"},[n("div",{staticClass:"d-block mt-5 font-weight-normal font-xxl pt-6 mb-6"},[t._v(" Your device can't... vibrate! ")]),n("div",{staticClass:"d-block content width-90 font-align-center"},[n("a",{attrs:{target:"_blank",href:"https://itsios.eu/"}},[n("div",{staticClass:"font-sm color-white",staticStyle:{opacity:"0.5"}},[t._v("Crafted by "),n("span",{staticClass:"font-weight-bold"},[t._v("Thodoris Itsios.")])])])])])}],R={name:"NoInternetComponent",mixins:[j],components:{},mounted:function(){},data:function(){return{}},methods:{}},J=R,A=Object(c["a"])(J,F,N,!1,null,"007371c8",null),q=A.exports,Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("TopMenuComponent"),t._m(0)],1)},G=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content width-90"},[n("div",{staticClass:"d-block mt-5 font-weight-normal font-xxl pt-6 mb-6"},[t._v(" Look behind you, there is a monkey! ")]),n("div",{staticClass:"d-block content width-90 font-align-center"},[n("a",{attrs:{target:"_blank",href:"https://itsios.eu/"}},[n("div",{staticClass:"font-sm color-white",staticStyle:{opacity:"0.5"}},[t._v("Crafted by "),n("span",{staticClass:"font-weight-bold"},[t._v("Thodoris Itsios.")])])])])])}],H={name:"NoInternetComponent",mixins:[j],components:{},mounted:function(){},data:function(){return{}},methods:{}},K=H,Q=Object(c["a"])(K,Y,G,!1,null,"66dd058c",null),W=Q.exports,X={availability:function(){return"vibrate"in navigator}},Z=X,tt=[{name:"record",path:"/",component:$,beforeEnter:function(t,e,n){Z.availability()?n():n("/nosupport")}},{name:"playback",path:"/playback/:vibe",component:V,props:!0,beforeEnter:function(t,e,n){Z.availability()?n():n("/nosupport")}},{name:"nosupport",path:"/nosupport",component:q,props:!0},{name:"notfound",path:"*",component:W,props:!0}],et=new u["a"]({mode:"hash",routes:tt,scrollBehavior:function(t){return t.hash?window.scrollTo({top:document.querySelector(t.hash).offsetTop-70,behavior:"smooth"}):{x:0,y:0}}});o["a"].use(u["a"]);var nt=et;n("6672");o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(d)},router:nt}).$mount("#app")},6672:function(t,e,n){},"66e5":function(t,e,n){"use strict";var o=n("18fa"),i=n.n(o);i.a},"69e3":function(t,e,n){"use strict";var o=n("7834"),i=n.n(o);i.a},7834:function(t,e,n){},"7de6":function(t,e,n){},"85ec":function(t,e,n){},"89d8":function(t,e,n){"use strict";var o=n("91f3"),i=n.n(o);i.a},"91f3":function(t,e,n){}});
//# sourceMappingURL=app.8cecfe77.js.map