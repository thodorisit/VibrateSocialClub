(function(t){function e(e){for(var o,a,c=e[0],r=e[1],l=e[2],u=0,f=[];u<c.length;u++)a=c[u],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&f.push(i[a][0]),i[a]=0;for(o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);d&&d(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],o=!0,c=1;c<n.length;c++){var r=n[c];0!==i[r]&&(o=!1)}o&&(s.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},i={app:0},s=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=r;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"0f51":function(t,e,n){"use strict";n("39da")},"127d":function(t,e,n){"use strict";n("8ba1")},"18fa":function(t,e,n){},2392:function(t,e,n){},"28b5":function(t,e,n){"use strict";n("2392")},"39da":function(t,e,n){},5304:function(t,e,n){"use strict";n("d211")},"534d":function(t,e,n){"use strict";n("7a72")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],a={name:"App",components:{}},c=a,r=(n("034f"),n("2877")),l=Object(r["a"])(c,i,s,!1,null,null,null),d=l.exports,u=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("TopMenuComponent",{attrs:{"show-new-vibe":"no"}}),n("div",{staticClass:"d-block content width-90 pb-6"}),n("div",{staticClass:"d-none justify-content--center unselectable mt-6 mb-4",attrs:{id:"_record__vibrate_button"}},[n("div",{staticClass:"d-flex justify-content--center align-items--center vibrate-button",on:{touchstart:t.vibrateTouchStart,touchend:t.vibrateTouchEnd}},[n("div",{staticClass:"d-block font-weight-light"},[t._v("Παλμός")])])]),n("div",{staticClass:"d-flex justify-content--center unselectable mt-6 mb-4",attrs:{id:"_record__start_recording_button"}},[n("div",{staticClass:"d-flex justify-content--center align-items--center vibrate-button",on:{click:t.startRecording}},[t._m(0)])]),t._m(1),n("div",{staticClass:"d-flex align-items--center justify-content--center unselectable mt-6 information-box"},[n("div",{staticClass:"d-flex align-items--center justify-content--center"},[n("router-link",{staticClass:"d-inline-block col-16 font-align-center font-s p-2 notice-message",attrs:{to:"/learn"}},[t._v("Μάθετε πως λειτουργεί")]),n("router-link",{staticClass:"d-inline-block col-16 font-align-center font-s p-2 mt-3",attrs:{to:"/contact"}},[n("div",[t._v("Επικοινωνήστε μαζί μας")])])],1)]),t._m(2)],1)},h=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-block"},[t._v("Έναρξη"),n("br"),t._v("Εγγραφής")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex justify-content--center mt-4 pt-6"},[n("div",{staticClass:"recording-line"},[n("div",{staticClass:"recording-line--black"}),n("div",{staticClass:"recording-line--loaded",attrs:{id:"_recording_line__loaded"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-block content width-90 font-align-center mt-5 mb-6"},[n("a",{attrs:{target:"_blank",href:"https://itsios.eu/"}},[n("div",{staticClass:"font-sm color-white",staticStyle:{opacity:"0.7"}},[t._v("Ανάπτυξη "),n("span",{staticClass:"font-weight-bold"},[t._v("Thodoris Itsios.")])])])])}],m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"top-menu-container mb-3"},[n("div",{staticClass:"top-menu-content"},[n("img",{staticClass:"logo",attrs:{src:"img/logo.png"}}),t.showNewVibeButton?n("router-link",{attrs:{to:"/"}},[n("div",{staticClass:"new-vibe-button font-weight-light"},[t._v("Νέος Παλμός")])]):t._e()],1),t.showBackButton?n("div",{staticClass:"d-block mb-5",on:{click:t.goHistoryBack}},[n("div",{staticClass:"new-vibe-button font-weight-light font-align-center"},[t._v("Επιστροφή")])]):t._e()])])},v=[],p={name:"TopMenuComponent",props:{showNewVibe:String,showBack:String},watch:{showNewVibe:{immediate:!0,deep:!0,handler:function(t){"no"==t&&(this.showNewVibeButton=!1)}},showBack:{immediate:!0,deep:!0,handler:function(t){"yes"==t&&(this.showBackButton=!0)}}},mounted:function(){},data:function(){return{showNewVibeButton:!0,showBackButton:!1}},methods:{goHistoryBack:function(){window.history.back()}}},b=p,_=(n("69e3"),Object(r["a"])(b,m,v,!1,null,null,null)),w=_.exports,g=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"footer-container"})])}],k={name:"Footer",data:function(){}},y=k,x=(n("66e5"),Object(r["a"])(y,g,C,!1,null,"60d221f3",null)),E=x.exports,T={components:{TopMenuComponent:w,Footer:E},mounted:function(){},methods:{}},j=T,B={duration:{default:1e4,time:0},record:{now:!1,temporary:[],final:[]},timeout_var:null,timestamps:{start:0,end:0,touchStart:0,touchEnd:0},start:function(){this.clearData(),window.console.log("start-timeout");var t=Date.now();this.timestamps.start=t,this.timestamps.touchEnd=t;var e=this;this.timeout_var=setTimeout((function(){e.record.now&&e.vibrateTouchEnd(),e.record.final=e.record.temporary,e.record.final.unshift(0);var t=JSON.stringify(e.record.final);window.location.href=window.envData.url+"/#/playback/"+t.substring(1,t.length-1)}),this.duration.time)},stop:function(){window.console.log("clear-timeout"),clearTimeout(this.timeout_var)},vibrateTouchStart:function(){this.timestamps.touchStart=Date.now(),this.record.now=!0},vibrateTouchEnd:function(){var t=Date.now();this.record.temporary.push(Math.abs(this.timestamps.touchEnd-this.timestamps.touchStart)),this.record.temporary.push(t-this.timestamps.touchStart),this.timestamps.touchEnd=t,this.record.now=!1},clearData:function(){this.duration.time=this.duration.default,this.record.temporary=[],this.timeout_var=null}},S=B,O={name:"RecordComponent",mixins:[j],components:{},mounted:function(){},data:function(){return{record:{final:[]}}},methods:{startRecording:function(){document.getElementById("_record__start_recording_button").classList.remove("d-flex"),document.getElementById("_record__start_recording_button").classList.add("d-none"),document.getElementById("_record__vibrate_button").classList.remove("d-none"),document.getElementById("_record__vibrate_button").classList.add("d-flex"),document.getElementById("_recording_line__loaded").classList.add("animation"),S.start()},stopRecording:function(){S.stop()},vibrateTouchStart:function(){S.vibrateTouchStart()},vibrateTouchEnd:function(){S.vibrateTouchEnd()}}},P=O,M=(n("fadb"),Object(r["a"])(P,f,h,!1,null,"1d921164",null)),$=M.exports,z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("TopMenuComponent"),n("div",{staticClass:"d-block content width-90 pb-6"}),n("div",{staticClass:"d-flex justify-content--center unselectable mt-6 mb-4"},[n("div",{staticClass:"d-flex justify-content--center align-items--center vibrate-button",on:{click:t.playVibe}},[t._m(0)])]),n("div",{staticClass:"d-flex justify-content--center flex-direction--column align-content--center width-90 unselectable mt-6 mb-4"},[n("div",{staticClass:"d-block font-l font-weight-light mt-6 color-white"},[t._v("Μοιράσου τον παλμό")]),n("div",{staticClass:"d-block"},[n("div",{staticClass:"d-inline-block mt-2 icon"},[n("svg",{staticClass:"svg-share-icon",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},on:{click:t.sharePostFacebook}},[n("path",{attrs:{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z"}})])]),n("div",{staticClass:"d-inline-block mt-2 ml-2 icon"},[n("svg",{staticClass:"svg-share-icon",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","fill-rule":"evenodd","clip-rule":"evenodd"},on:{click:t.sharePostMessenger}},[n("path",{attrs:{d:"M19 24h-14c-2.761 0-5-2.239-5-5v-14c0-2.761 2.239-5 5-5h14c2.762 0 5 2.239 5 5v14c0 2.761-2.238 5-5 5zm-7-19.5c-4.418 0-8 3.316-8 7.407 0 2.332 1.163 4.411 2.981 5.769v2.824l2.724-1.495c.727.201 1.497.31 2.295.31 4.418 0 8-3.317 8-7.408s-3.582-7.407-8-7.407zm.795 9.975l-2.037-2.173-3.975 2.173 4.372-4.642 2.087 2.173 3.926-2.173-4.373 4.642z"}})])]),n("div",{staticClass:"d-inline-block mt-2 ml-2 icon"},[n("svg",{staticClass:"svg-share-icon",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},on:{click:t.sharePostTwitter}},[n("path",{attrs:{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z"}})])]),n("div",{staticClass:"d-inline-block mt-2 ml-2 icon"},[n("svg",{staticClass:"svg-share-icon",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},on:{click:t.sharePostLinkedin}},[n("path",{attrs:{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"}})])]),n("div",{staticClass:"d-inline-block mt-2 ml-2 icon"},[n("svg",{staticClass:"svg-share-icon",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},on:{click:t.sharePostEmail}},[n("path",{attrs:{d:"M13.718 10.528c0 .792-.268 1.829-.684 2.642-1.009 1.98-3.063 1.967-3.063-.14 0-.786.27-1.799.687-2.58 1.021-1.925 3.06-1.624 3.06.078zm10.282 1.472c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-5-1.194c0-3.246-2.631-5.601-6.256-5.601-4.967 0-7.744 3.149-7.744 7.073 0 3.672 2.467 6.517 7.024 6.517 2.52 0 4.124-.726 5.122-1.288l-.687-.991c-1.022.593-2.251 1.136-4.256 1.136-3.429 0-5.733-2.199-5.733-5.473 0-5.714 6.401-6.758 9.214-5.071 2.624 1.642 2.524 5.578.582 7.083-1.034.826-2.199.799-1.821-.756 0 0 1.212-4.489 1.354-4.975h-1.364l-.271.952c-.278-.785-.943-1.295-1.911-1.295-2.018 0-3.722 2.19-3.722 4.783 0 1.73.913 2.804 2.38 2.804 1.283 0 1.95-.726 2.364-1.373-.3 2.898 5.725 1.557 5.725-3.525z"}})])]),n("div",{staticClass:"d-inline-block mt-2 ml-2 icon"},[n("svg",{staticClass:"svg-share-icon",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},on:{click:t.sharePostClipboard}},[n("path",{attrs:{d:"M24 4h-20v20h20v-20zm-24 17v-21h21v2h-19v19h-2z"}})])])])]),n("div",{staticClass:"d-flex align-items--center justify-content--center unselectable mt-6 information-box"},[n("router-link",{staticClass:"d-inline-block col-16 font-align-center font-s p-2 notice-message",attrs:{to:"/learn"}},[t._v("Μάθετε πως λειτουργεί")]),n("router-link",{staticClass:"d-inline-block col-16 font-align-center font-s p-2 mt-3",attrs:{to:"/contact"}},[n("div",[t._v("Επικοινωνήστε μαζί μας")])])],1),t._m(1),t.popup_for_vibration?n("div",{staticClass:"overlay"},[n("div",{staticClass:"popup"},[n("a",{staticClass:"close",on:{click:t.hidePopUpForVibration}},[t._v("×")]),t._m(2)])]):t._e()],1)},I=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-block font-weight-light"},[t._v("Νιώσε"),n("br"),t._v("τον παλμό")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-block content width-90 font-align-center mt-5 mb-6"},[n("a",{attrs:{target:"_blank",href:"https://itsios.eu/"}},[n("div",{staticClass:"font-sm color-white",staticStyle:{opacity:"0.7"}},[t._v("Ανάπτυξη "),n("span",{staticClass:"font-weight-bold"},[t._v("Thodoris Itsios.")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content color-black font-m"},[t._v(" Μην ξεχάσετε να ενεργοποιήσετε τη "),n("b",[n("u",[t._v("δόνηση")])]),t._v(" στο κινητό σας! ")])}],U=(n("c975"),n("ac1f"),n("1276"),{setCookie:function(t,e,n){var o="";if(n){var i=new Date;i.setTime(i.getTime()+24*n*60*60*1e3),o="; expires="+i.toUTCString()}document.cookie=t+"="+(e||"")+o+"; path=/"},getCookie:function(t){for(var e=t+"=",n=document.cookie.split(";"),o=0;o<n.length;o++){var i=n[o];while(" "==i.charAt(0))i=i.substring(1,i.length);if(0==i.indexOf(e))return i.substring(e.length,i.length)}return null},eraseCookie:function(t){document.cookie=t+"=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"}}),N=U,V={name:"PlaybackComponent",mixins:[j],props:{vibe:String},watch:{vibe:{immediate:!0,deep:!0,handler:function(t){this.shareUrl__copy=window.envData.url+"/#/playback/"+t,this.shareUrl=window.envData.url+"/%23/playback/"+t,this.record.final=JSON.parse("["+t+"]")}}},mounted:function(){var t=N.getCookie("popup_for_vibration");t&&(this.popup_for_vibration=!1)},data:function(){return{shareUrl__copy:"",shareUrl:"",record:{final:[]},popup_for_vibration:!0}},methods:{playVibe:function(){window.console.log(this.record.final);for(var t=0,e=0;e<this.record.final.length;e++)t+=this.record.final[e];window.navigator.vibrate(0),t<2e4?window.navigator.vibrate(this.record.final):window.console.log("Ooops, your vibe exceeds 20s!")},hidePopUpForVibration:function(){this.popup_for_vibration=!1,N.setCookie("popup_for_vibration",1,2)},sharePostFacebook:function(){var t="fb://faceweb/f?href=https://www.facebook.com/sharer/sharer.php?u="+this.shareUrl;window.open(t,"_system")},sharePostMessenger:function(){var t="fb-messenger://share/?link="+this.shareUrl;window.open(t,"_system")},sharePostTwitter:function(){var t="twitter://post?message="+this.shareUrl;window.open(t,"_system")},sharePostLinkedin:function(){var t="https://www.linkedin.com/sharing/share-offsite/?url="+this.shareUrl;window.open(t,"_system")},sharePostEmail:function(){window.open("mailto:?subject=VIBE social club&body="+this.shareUrl,"_system")},sharePostClipboard:function(){var t=document.createElement("input");document.body.appendChild(t),t.setAttribute("id","hidden_input__clipboard_id"),document.getElementById("hidden_input__clipboard_id").value=this.shareUrl__copy,t.select(),document.execCommand("copy"),document.body.removeChild(t)}}},D=V,L=(n("534d"),Object(r["a"])(D,z,I,!1,null,"6bfd14b6",null)),F=L.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("TopMenuComponent",{attrs:{"show-new-vibe":"no","show-back":"yes"}}),t._m(0)],1)},R=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content width-90 mt-6"},[n("div",{staticClass:"d-block mt-5 font-weight-normal font-xxl pt-6"},[t._v(" Μάθετε πως λειτουργεί ")]),n("div",{staticClass:"d-block mt-5 font-weight-normal font-m"},[t._v(" Φέτος τα Χριστούγεννα το "),n("b",[t._v("Niwse.club")]),t._v(" φέρνει τους αγαπημένους σας ανθρώπους πιο κοντά μέσω μίας διαφορετικής - πρωτοποριακής εφαρμογής. Η εφαρμογή είναι διαθέσιμη για συσκευές με δυνατότητα δόνησης. "),n("div",{staticClass:"font-xl font-weight-bold mt-4"},[t._v("Νέος Παλμός")]),t._v(' Πιέστε "Εγγραφή Παλμού" όπου θα εμφανιστεί ένα πλήκτρο "Έναρξη Εγγραφής". Μετά το πρώτο άγγιγμα στο κουμπί "Έναρξη Εγγραφής" έχετε στη διάθεση σας 10 δευτερόλεπτα να καταγράψετε ένα μοτίβο δόνησης πιέζοντας το πλήκτρο "Παλμός". Μετά την ολοκληρώση θα μεταφερθείτε στην επόμενη σελίδα όπου μπορείτε να νιώσετε τον παλμό που δημιουργήσατε καθώς και να τον μοιραστείτε με τους αγαπημένους σας. '),n("div",{staticClass:"font-xl font-weight-bold mt-4"},[t._v("Νιώσε τον παλμό")]),t._v(' Στη σελίδα αυτή εμφανίζεται ένα πλήκτρο "Νιώσε τον παλμό" όπου πιέζοντάς το, μπορείτε να αναπαράγετε τον παλμό που έχει καταγραφεί από εσάς ή που σας τον έχει μοιράσει κάποιος αγαπημένος σας. '),n("div",{staticClass:"font-xl font-weight-bold mt-4"},[t._v("Σημείωση:")]),t._v(" Μην ξεχάσεις να ενεργοποιήσεις τη δόνηση στο κινητό σου όταν "),n("b",[t._v("Νιώθεις τον παλμό")]),t._v("! ")]),n("div",{staticClass:"d-block content width-90 font-align-center mt-6 mb-6"},[n("a",{attrs:{target:"_blank",href:"https://itsios.eu/"}},[n("div",{staticClass:"font-sm color-white",staticStyle:{opacity:"0.7"}},[t._v("Ανάπτυξη "),n("span",{staticClass:"font-weight-bold"},[t._v("Thodoris Itsios.")])])])])])}],A={name:"NoInternetComponent",mixins:[j],components:{},mounted:function(){},data:function(){return{}},methods:{}},H=A,q=(n("5304"),Object(r["a"])(H,J,R,!1,null,"566d8e27",null)),G=q.exports,K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("TopMenuComponent",{attrs:{"show-new-vibe":"no","show-back":"yes"}}),t._m(0)],1)},Q=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content width-90 mt-6"},[n("div",{staticClass:"d-block mt-5 font-weight-normal font-l pt-6"},[n("div",{staticClass:"font-sm"},[t._v("Αν θέλεις να επικοινωνήσεις μαζί μας, στείλε μας email στο:")]),n("div",{staticClass:"font-l"},[t._v("info@niwse.club")]),n("div",{staticClass:"font-xl mt-4"},[t._v(":)")])])])}],W={name:"NoInternetComponent",mixins:[j],components:{},mounted:function(){},data:function(){return{}},methods:{}},X=W,Y=(n("28b5"),Object(r["a"])(X,K,Q,!1,null,"3102f42a",null)),Z=Y.exports,tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("TopMenuComponent"),n("div",{staticClass:"content width-90"},[n("div",{staticClass:"d-block mt-5 font-weight-normal font-xxl pt-6 mb-6"},[t._v(" Η συσκευή σας δεν υποστηρίζει δόνηση! ")]),n("div",{staticClass:"d-flex align-items--center justify-content--center unselectable mt-6 information-box"},[n("router-link",{staticClass:"d-inline-block col-16 font-align-center font-s p-2 notice-message",attrs:{to:"/learn"}},[t._v("Μάθετε πως λειτουργεί")]),n("router-link",{staticClass:"d-inline-block col-16 font-align-center font-s p-2 mt-3",attrs:{to:"/contact"}},[n("div",[t._v("Επικοινωνήστε μαζί μας")])])],1),t._m(0)])],1)},et=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-block content width-90 font-align-center mt-6"},[n("a",{attrs:{target:"_blank",href:"https://itsios.eu/"}},[n("div",{staticClass:"font-sm color-white",staticStyle:{opacity:"0.7"}},[t._v("Ανάπτυξη "),n("span",{staticClass:"font-weight-bold"},[t._v("Thodoris Itsios.")])])])])}],nt={name:"NoInternetComponent",mixins:[j],components:{},mounted:function(){},data:function(){return{}},methods:{}},ot=nt,it=(n("127d"),Object(r["a"])(ot,tt,et,!1,null,"ea292792",null)),st=it.exports,at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("TopMenuComponent"),n("div",{staticClass:"content width-90"},[t._m(0),n("div",{staticClass:"d-flex align-items--center justify-content--center unselectable mt-6 information-box"},[n("router-link",{staticClass:"d-inline-block col-16 font-align-center font-s p-2 notice-message",attrs:{to:"/learn"}},[t._v("Μάθετε πως λειτουργεί")]),n("router-link",{staticClass:"d-inline-block col-16 font-align-center font-s p-2 mt-3",attrs:{to:"/contact"}},[n("div",[t._v("Επικοινωνήστε μαζί μας")])])],1),t._m(1)])],1)},ct=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-block mt-5 font-weight-normal font-xxl pt-6 mb-6"},[t._v(" Κοίτα πίσω σου... είναι οι "),n("u",[n("b",[t._v("404")])]),t._v(" κάλτσες που θα γεμίσει ο Άγιος Βασίλης με δώρα! ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-block content width-90 font-align-center mt-6"},[n("a",{attrs:{target:"_blank",href:"https://itsios.eu/"}},[n("div",{staticClass:"font-sm color-white",staticStyle:{opacity:"0.7"}},[t._v("Ανάπτυξη "),n("span",{staticClass:"font-weight-bold"},[t._v("Thodoris Itsios.")])])])])}],rt={name:"NoInternetComponent",mixins:[j],components:{},mounted:function(){},data:function(){return{}},methods:{}},lt=rt,dt=(n("0f51"),Object(r["a"])(lt,at,ct,!1,null,"7800cbac",null)),ut=dt.exports,ft={availability:function(){return"vibrate"in navigator}},ht=ft,mt=[{name:"record",path:"/",component:$,beforeEnter:function(t,e,n){ht.availability()?n():n("/nosupport")}},{name:"playback",path:"/playback/:vibe",component:F,props:!0,beforeEnter:function(t,e,n){ht.availability()?n():n("/nosupport")}},{name:"learn",path:"/learn",component:G,props:!0},{name:"contact",path:"/contact",component:Z,props:!0},{name:"nosupport",path:"/nosupport",component:st,props:!0},{name:"notfound",path:"*",component:ut,props:!0}],vt=new u["a"]({mode:"hash",routes:mt,scrollBehavior:function(t){return t.hash?window.scrollTo({top:document.querySelector(t.hash).offsetTop-70,behavior:"smooth"}):{x:0,y:0}}});o["a"].use(u["a"]);var pt=vt;n("6672");o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(d)},router:pt}).$mount("#app")},6672:function(t,e,n){},"66e5":function(t,e,n){"use strict";n("18fa")},"69e3":function(t,e,n){"use strict";n("7834")},7834:function(t,e,n){},"7a72":function(t,e,n){},"85ec":function(t,e,n){},"8ba1":function(t,e,n){},d211:function(t,e,n){},e62c:function(t,e,n){},fadb:function(t,e,n){"use strict";n("e62c")}});
//# sourceMappingURL=app.16dc0baa.js.map