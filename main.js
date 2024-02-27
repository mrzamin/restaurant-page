(()=>{"use strict";var e={365:(e,n,t)=>{t.d(n,{A:()=>u});var r=t(601),o=t.n(r),a=t(314),i=t.n(a),c=t(417),d=t.n(c),p=new URL(t(792),t.b),l=i()(o()),s=d()(p);l.push([e.id,`body {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.wrapper {\n  display: grid;\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 1fr 10fr;\n  border: 3px solid green;\n}\n\n#header {\n  padding: 1rem;\n  background-color: black;\n  border: 2px solid red;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n#header button {\n  background-color: black;\n  border: 1px solid gold;\n  color: white;\n  padding: 0.5rem 1rem;\n}\n\n.logo {\n  width: 200px;\n}\n\nnav {\n  display: flex;\n  gap: 15px;\n}\n\n/* Start of content styles. */\n#content {\n  border: 1px solid blue;\n  background: url(${s});\n  display: grid;\n  place-items: center;\n}\n\n.contentbox {\n  padding: 2rem;\n  background-color: black;\n  opacity: 0.7;\n}\n\n.contentbox > img {\n  width: 250px;\n}\n\n.menubox {\n  padding: 1rem;\n  background-color: black;\n  width: 90%;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 300px);\n  opacity: 0.7;\n}\n\n.menubox > div {\n  background-color: white;\n  border-radius: 15px;\n}\n`,""]);const u=l},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var p=0;p<e.length;p++){var l=[].concat(e[p]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},417:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var d=e[c],p=r.base?d[0]+r.base:d[0],l=a[p]||0,s="".concat(p," ").concat(l);a[p]=l+1;var u=t(s),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var h=o(m,r);r.byIndex=c,n.splice(c,0,{identifier:s,updater:h,references:1})}i.push(s)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var d=r(e,o),p=0;p<a.length;p++){var l=t(a[p]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=d}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},206:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},792:(e,n,t)=>{e.exports=t.p+"eb3dcf4b7785dcee8c8d.jpg"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const e=t.p+"4f9fe136bd8a6fd6a738.png",n=(t.p,()=>{const n=document.querySelector("#header"),t=new Image;t.classList.add("logo"),t.src=e,n.appendChild(t);const r=document.createElement("nav");n.appendChild(r);const o=document.createElement("button");o.innerHTML="Home";const a=document.createElement("button");a.innerHTML="Menu";const i=document.createElement("button");i.innerHTML="About",r.appendChild(o),r.appendChild(a),r.appendChild(i);const c=document.createElement("button");c.innerHTML="Book a table",n.appendChild(c)});var r=t(72),o=t.n(r),a=t(206),i=t.n(a),c=t(659),d=t.n(c),p=t(56),l=t.n(p),s=t(540),u=t.n(s),m=t(113),h=t.n(m),f=t(365),g={};g.styleTagTransform=h(),g.setAttributes=l(),g.insert=d().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=u(),o()(f.A,g),f.A&&f.A.locals&&f.A.locals,n(),(()=>{const e=document.querySelector("#content"),n=document.createElement("div");n.classList.add("menubox"),n.innerHTML="HELLLLO";const t=document.createElement("div"),r=new Image,o=document.createElement("h3"),a=document.createElement("p");o.innerHTML="Shrimp Corndog",a.innerHTML="Bistro honey mustard",t.appendChild(r),t.appendChild(o),t.appendChild(a);const i=document.createElement("div"),c=new Image,d=document.createElement("h3"),p=document.createElement("p");d.innerHTML="Bacon-wrapped apricots",p.innerHTML="tequila-soaked apricots, hickory smoked bacon, jalapeño kumquat, honey glaze",i.appendChild(c),i.appendChild(d),i.appendChild(p);const l=document.createElement("div"),s=new Image,u=document.createElement("h3"),m=document.createElement("p");u.innerHTML="Cauliflower piccata",m.innerHTML="Lemon caper aioli, pine nuts, parsley, pickled carrots, parmesan crisp",l.appendChild(s),l.appendChild(u),l.appendChild(m);const h=document.createElement("div"),f=new Image,g=document.createElement("h3"),v=document.createElement("p");g.innerHTML="Shrimp Corndog",v.innerHTML="Bistro honey mustard",h.appendChild(f),h.appendChild(g),h.appendChild(v);const b=document.createElement("div"),y=new Image,C=document.createElement("h3"),x=document.createElement("p");C.innerHTML="Shrimp Corndog",x.innerHTML="Bistro honey mustard",b.appendChild(y),b.appendChild(C),b.appendChild(x);const w=document.createElement("div"),E=new Image,T=document.createElement("h3"),L=document.createElement("p");T.innerHTML="Shrimp Corndog",L.innerHTML="Bistro honey mustard",w.appendChild(E),w.appendChild(T),w.appendChild(L),n.appendChild(t),n.appendChild(i),n.appendChild(l),n.appendChild(h),n.appendChild(b),n.appendChild(w),e.appendChild(n)})()})()})();