(()=>{"use strict";var n={365:(n,e,t)=>{t.d(e,{A:()=>u});var o=t(601),r=t.n(o),a=t(314),c=t.n(a),i=t(417),s=t.n(i),d=new URL(t(792),t.b),l=c()(r());l.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap);"]);var p=s()(d);l.push([n.id,`* {\n  margin: 0px;\n  padding: 0px;\n  box-sizing: border-box;\n  font-family: "Lato", sans-serif;\n  font-weight: 300;\n  font-style: normal;\n}\n\n:root {\n  --gold-color: rgb(199, 155, 40);\n  --header-color: black;\n  --light-grey-color: rgb(46, 46, 46);\n  --dark-grey-color: rgb(39, 39, 39);\n}\n\n/* Main grid. */\n\n.wrapper {\n  display: grid;\n  grid-template-rows: 1fr 8fr 0.5fr;\n}\n\n/* Header styles. */\n\n#header {\n  padding: 1rem;\n  background-color: var(--header-color);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n\n#header > div,\n#header button {\n  flex-shrink: 4;\n}\n\n.logo {\n  flex-shrink: 1;\n  width: 200px;\n}\n\n#header button {\n  background-color: black;\n  border: 1px solid var(--gold-color);\n  color: white;\n  padding: 0.5rem 1rem;\n}\n\n#header button:hover {\n  color: var(--gold-color);\n  border: 1px solid white;\n  scale: 110%;\n}\nnav {\n  display: flex;\n  gap: 15px;\n  flex-wrap: wrap;\n}\n\n/* Default styles on page load. */\n\n#content {\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)),\n    url(${p});\n  background-size: cover;\n\n  display: grid;\n  place-items: center;\n}\n\n/* Homepage styles. */\n\n.restaurantname {\n  width: 250px;\n  padding-bottom: 10px;\n  border-bottom: 2px solid var(--gold-color);\n}\n\n.homebuttons {\n  margin-top: 10px;\n  width: 250px;\n  display: flex;\n  justify-content: space-between;\n  gap: 10px;\n}\n\n.homebuttons > button {\n  flex-grow: 1;\n  border-radius: 5px;\n  border: none;\n  padding: 5px 0px;\n  font-weight: 400;\n}\n\n.homebuttons > button:hover {\n  scale: 110%;\n}\n\n/* Menu page styles. */\n\n.menucontainer {\n  display: grid;\n  width: 80%;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  column-gap: 2.5rem;\n  row-gap: 0.5rem;\n}\n\n.card {\n  border-radius: 15px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  align-items: center;\n}\n\n.name {\n  color: white;\n}\n\n.descr {\n  color: gold;\n}\n\n.image {\n  width: 100%;\n  border-radius: 15px;\n  border-left: 5px solid gold;\n}\n\nh3 {\n  font-weight: 400;\n  font-size: 1rem;\n}\n\n.descr {\n  text-align: center;\n  font-style: italic;\n  font-size: 0.8rem;\n  font-weight: 400;\n}\n\n/* About page styles. */\n\n.aboutcontainer {\n  margin-top: 1rem;\n  margin-bottom: 0.8rem;\n  padding: 1rem;\n  width: 90%;\n  background-color: var(--light-grey-color);\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.aboutcontainer h2 {\n  font-weight: 300;\n  color: white;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid var(--gold-color);\n}\n\n.biocontainer {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 2rem;\n}\n\n.biocontainer img {\n  max-width: 350px;\n  max-height: 220px;\n  height: auto;\n  width: auto;\n  border: 5px solid white;\n  border-radius: 15px;\n}\n\n.biocontainer img:hover {\n  transform: scaleX(-1);\n}\n\n.biocontainer p {\n  width: 75%;\n  color: white;\n  flex: 1;\n}\n\n.contactcontainer {\n  background-color: rgb(36, 35, 35);\n  width: 90%;\n  padding: 1rem;\n\n  display: flex;\n  gap: 1rem;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n  flex-wrap: wrap;\n}\n\n.contactcontainer h2 {\n  color: white;\n  font-size: 1.5rem;\n  border: 1px solid white;\n  width: max-content;\n  padding: 8px 12px;\n}\n\n.contacttext {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  gap: 1rem;\n}\n\n.contacttext p:nth-child(2) {\n  color: gold;\n}\n\n.contacttext p:nth-child(3) {\n  border-bottom: 1px solid white;\n  width: min-content;\n}\n.contacttext p:nth-child(3),\n.contacttext p:nth-child(4) {\n  color: white;\n}\n\n/* Footer styles. */\n\n#footer {\n  display: grid;\n  place-items: center;\n  background-color: black;\n  color: var(--gold-color);\n}\n\n#footer > div {\n  font-weight: 400;\n}\n`,""]);const u=l},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var c={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);o&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},c=[],i=0;i<n.length;i++){var s=n[i],d=o.base?s[0]+o.base:s[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var h=r(m,o);o.byIndex=i,e.splice(i,0,{identifier:p,updater:h,references:1})}c.push(p)}return c}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var c=0;c<a.length;c++){var i=t(a[c]);e[i].references--}for(var s=o(n,r),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},792:(n,e,t)=>{n.exports=t.p+"eb3dcf4b7785dcee8c8d.jpg"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const n=t.p+"4f9fe136bd8a6fd6a738.png",e=()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("contentbox");const o=new Image;o.src=n,o.classList.add("restaurantname");const r=document.createElement("div");r.classList.add("homebuttons");const a=["Menu","Reserve"];a.forEach(((n,e)=>{const t=document.createElement("button");t.innerHTML=`${a[e]}`,r.appendChild(t)})),t.appendChild(o),t.appendChild(r),e.appendChild(t)},o=t.p+"c6b94501c881b18e1606.jpg",r=t.p+"fbcb663fbce78ae34dc7.jpg",a=t.p+"3f75cc1a58a5c9f95fa4.jpg",c=t.p+"ef787d1b282da62e3449.jpg",i=t.p+"10230331bc6720c9d085.jpg",s=t.p+"7713f7c95277dc8672c8.jpg";class d{constructor(n,e,t){this.image=n,this.name=e,this.descr=t}}let l=[new d(`${o}`,"Shrimp corndog","Bistro honey mustard"),new d(`${r}`,"Bacon-wrapped apricots","Tequila-soaked apricots, hickory smoked bacon, jalapeño kumquat, honey glaze"),new d(`${a}`,"Cauliflower piccata","Lemon caper aioli, pine nuts, parsley, pickled carrots, parmesan crisp"),new d(`${c}`,"Salmon filet","Olive oil poached, white bean bacon purée, red onion poppy seed marmalade, broccolini, pickled mustard molasses glaze, smoked onion rings"),new d(`${i}`,"Spinach salad","Spinach, zucchini sauté, mustard cream, crispy leeks"),new d(`${s}`,"Beef brisket","Wild mushroom ragout, cheddar potato latke, ratatouille, artichoke gremolata, blue cheese, miso tomato ketchup")];const p=t.p+"b6427caa989e07bf5bbe.jpg";var u=t(72),m=t.n(u),h=t(825),f=t.n(h),g=t(659),b=t.n(g),v=t(56),y=t.n(v),w=t(540),x=t.n(w),L=t(113),E=t.n(L),C=t(365),k={};k.styleTagTransform=E(),k.setAttributes=y(),k.insert=b().bind(null,"head"),k.domAPI=f(),k.insertStyleElement=x(),m()(C.A,k),C.A&&C.A.locals&&C.A.locals,(()=>{const e=document.querySelector("#header"),t=new Image;t.src=n,t.classList.add("logo");const o=document.createElement("nav"),r=["Home","Menu","About"];r.forEach(((n,e)=>{const t=document.createElement("button");t.innerHTML=`${r[e]}`,t.classList.add("nav"),o.appendChild(t)}));const a=document.createElement("button");a.innerHTML="Book a table",a.classList.add("reserve"),e.appendChild(t),e.appendChild(o),e.appendChild(a)})(),e();const S=document.querySelector("#content"),M=document.querySelector(".logo"),T=document.querySelectorAll(".nav"),A=document.querySelectorAll(".reserve"),j=[e,()=>{const n=document.querySelector("#content"),e=document.createElement("div");e.classList.add("menucontainer"),l.forEach((n=>{const t=document.createElement("div");t.classList.add("card");const o=new Image;o.src=n.image,o.classList.add("image");const r=document.createElement("h3");r.innerHTML=`${n.name}`,r.classList.add("name");const a=document.createElement("p");a.innerHTML=`${n.descr}`,a.classList.add("descr"),t.appendChild(o),t.appendChild(r),t.appendChild(a),e.appendChild(t)})),n.appendChild(e)},()=>{const n=document.querySelector("#content"),e=document.createElement("div");e.classList.add("aboutcontainer");const t=document.createElement("h2");t.classList.add("bio"),t.innerHTML="About Us";const o=document.createElement("div");o.classList.add("biocontainer");const r=document.createElement("p");r.classList.add("bio"),r.innerHTML="As Chef/Proprietor of OAKLEYS bistro, Steven J. Oakley is living his childhood dream and hoping to help others do the same. An unpretentious, neighborhood American bistro is very different from the haute cuisine establishments of Chef Oakley’s previous experiences. Put in his words, “We wanted to dispel the notion that special food should be reserved for special occasions: we created an affordable, everyday destination where every meal is a special occasion.”";const a=new Image;a.src=p,a.classList.add("bio");const c=document.createElement("div");c.classList.add("contactcontainer");const i=document.createElement("div");i.classList.add("contacttext");const s=document.createElement("h2");s.innerHTML="Contact Us",i.appendChild(s),Object.values({Address:"1000 Lincoln St, Lincoln, Nebraska 10101",Email:"oakleysbistro@restaurant.com",Phone:"Reservations & Catering: 100-989-3745"}).forEach((n=>{const e=document.createElement("p");e.innerHTML=`${n}`,i.appendChild(e)}));const d=document.createElement("iframe");d.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11505.803035634517!2d-94.76293401726959!3d43.86721151863466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f4bd690df66f57%3A0xd4095320f5e41e07!2sOdin%2C%20MN%2056160!5e0!3m2!1sen!2sus!4v1709066830083!5m2!1sen!2sus",d.width=400,d.height=400,c.appendChild(i),c.appendChild(d),o.appendChild(r),o.appendChild(a),e.appendChild(t),e.appendChild(o),n.appendChild(e),n.appendChild(c)}];T.forEach((n=>{n.addEventListener("click",(function(n){const e=n.target,t=[...T].indexOf(e);$(t)}))})),A.forEach((n=>{n.addEventListener("click",(function(n){$(2)}))})),M.addEventListener("click",(function(n){$(0)}));const $=n=>{const e=j[n];H(),e()},H=()=>{S.innerHTML=""}})()})();