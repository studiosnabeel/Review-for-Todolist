(()=>{"use strict";var r={426:(r,n,e)=>{e.d(n,{Z:()=>s});var t=e(81),o=e.n(t),i=e(645),a=e.n(i)()(o());a.push([r.id,"* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.todo-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  width: 100%;\r\n  height: 100vh;\r\n  padding: 50px;\r\n  background-color: rgb(56, 157, 224);\r\n}\r\n\r\n.todo-sub-container {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  background-color: white;\r\n}\r\n\r\n.todo-li {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  gap: 20px;\r\n  margin: 20px;\r\n}\r\n\r\n.todo {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  margin: 20px;\r\n}\r\n\r\n.todo-hr {\r\n  color: rgb(63, 63, 63);\r\n}\r\n\r\n.todo-h3 {\r\n  font-size: 26px;\r\n  font-weight: 600;\r\n  color: tomato;\r\n}\r\n\r\n.add-to-list {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  margin: 20px;\r\n}\r\n\r\n.todo-input {\r\n  border: none;\r\n  font-size: 20px;\r\n  align-self: flex-start;\r\n  width: 90%;\r\n}\r\n\r\n.todo-input:focus {\r\n  outline: 0;\r\n  color: rgb(62, 62, 62);\r\n  font-size: 20px;\r\n}\r\n\r\n.input::placeholder {\r\n  font-size: 17px;\r\n}\r\n\r\n.fa-turn-down {\r\n  transform: rotate(90deg);\r\n  cursor: pointer;\r\n  color: rgb(74, 74, 74);\r\n}\r\n\r\n.fa-arrows-rotate {\r\n  color: rgb(82, 82, 82);\r\n}\r\n\r\n.clearAll {\r\n  padding: 20px;\r\n  border: 0;\r\n  background: rgb(237, 237, 237);\r\n  width: 100%;\r\n  cursor: pointer;\r\n  font-size: 18px;\r\n  color: rgb(47, 47, 47);\r\n}\r\n\r\n#addBtn {\r\n  background-color: white;\r\n  border: none;\r\n}\r\n\r\n.js-list {\r\n  width: 100%;\r\n  background-color: var(--secondary-color);\r\n}\r\n\r\n.js-list li {\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\r\n  padding: 0 var(--fs-1);\r\n  font-size: var(--fs-1);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  gap: var(--fs-0);\r\n  position: relative;\r\n}\r\n\r\n.js-list li button {\r\n  border: 2px solid #c1c1c3;\r\n  cursor: pointer;\r\n  color: transparent;\r\n  border-radius: 2px;\r\n  margin: var(--fs-1) 0;\r\n  background-color: transparent;\r\n  width: 18px;\r\n  height: 18px;\r\n}\r\n\r\n.todo-sub-container .js-list li > .move-item {\r\n  cursor: move;\r\n}\r\n\r\n.todo-sub-container .js-list li > .move-item.none {\r\n  cursor: move;\r\n  display: none;\r\n}\r\n\r\n.todo-sub-container .js-list li > .delete-item {\r\n  cursor: pointer;\r\n  display: none;\r\n}\r\n\r\n.todo-sub-container .js-list li > .delete-item.active {\r\n  display: inline;\r\n}\r\n\r\n.todo-sub-container .js-list li button > i {\r\n  color: #2e8ae6;\r\n  display: none;\r\n}\r\n\r\n.js-list li button i.active {\r\n  display: inline;\r\n}\r\n\r\n.js-list li .container {\r\n  flex: 1;\r\n  font-size: var(--fs-1);\r\n  word-wrap: break-word;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.js-list li .container.active {\r\n  text-decoration: line-through;\r\n}\r\n\r\n.js-list li .container .content-description {\r\n  width: 100%;\r\n  outline: none;\r\n  padding: 16px 0;\r\n}\r\n\r\n.js-list li.editing {\r\n  background-color: #fffeca;\r\n}\r\n\r\n.fa-arrows-rotate.active {\r\n  animation: animateRefresh 2s;\r\n}\r\n\r\n@keyframes animateRefresh {\r\n  from {\r\n    transform: rotate(0);\r\n  }\r\n\r\n  to {\r\n    transform: rotate(720deg);\r\n  }\r\n}\r\n",""]);const s=a},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e="",t=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),t&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=r(n),t&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(r,e,t,o,i){"string"==typeof r&&(r=[[null,r,void 0]]);var a={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<r.length;l++){var d=[].concat(r[l]);t&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},81:r=>{r.exports=function(r){return r[1]}},379:r=>{var n=[];function e(r){for(var e=-1,t=0;t<n.length;t++)if(n[t].identifier===r){e=t;break}return e}function t(r,t){for(var i={},a=[],s=0;s<r.length;s++){var c=r[s],l=t.base?c[0]+t.base:c[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var p=e(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=o(f,t);t.byIndex=s,n.splice(s,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function o(r,n){var e=n.domAPI(n);return e.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;e.update(r=n)}else e.remove()}}r.exports=function(r,o){var i=t(r=r||[],o=o||{});return function(r){r=r||[];for(var a=0;a<i.length;a++){var s=e(i[a]);n[s].references--}for(var c=t(r,o),l=0;l<i.length;l++){var d=e(i[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}i=c}}},569:r=>{var n={};r.exports=function(r,e){var t=function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}n[r]=e}return n[r]}(r);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},565:(r,n,e)=>{r.exports=function(r){var n=e.nc;n&&r.setAttribute("nonce",n)}},795:r=>{r.exports=function(r){var n=r.insertStyleElement(r);return{update:function(e){!function(r,n,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(t,r,n.options)}(n,r,e)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},589:r=>{r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}}},n={};function e(t){var o=n[t];if(void 0!==o)return o.exports;var i=n[t]={id:t,exports:{}};return r[t](i,i.exports,e),i.exports}e.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return e.d(n,{a:n}),n},e.d=(r,n)=>{for(var t in n)e.o(n,t)&&!e.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:n[t]})},e.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),e.nc=void 0,(()=>{var r=e(379),n=e.n(r),t=e(795),o=e.n(t),i=e(569),a=e.n(i),s=e(565),c=e.n(s),l=e(216),d=e.n(l),u=e(589),p=e.n(u),f=e(426),m={};m.styleTagTransform=p(),m.setAttributes=c(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),n()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const v=new class{constructor(){this.arr=JSON.parse(localStorage.getItem("tasks"))||[]}setLocalStorageItem=()=>{localStorage.setItem("tasks",JSON.stringify(this.arr))};addNewTask=({description:r,completed:n=!1,index:e=this.arr.length+1})=>{this.arr.push({description:r,completed:n,index:e}),this.setLocalStorageItem()};deleteTask=(r=null)=>{if(null!==r)return this.arr.splice(r,1),this.arr.forEach(((r,n)=>{r.index=n+1})),void this.setLocalStorageItem();this.arr=this.arr.filter((r=>!r.completed)),this.arr.forEach(((r,n)=>{r.index=n+1})),this.setLocalStorageItem()};modifyTask=(r,n,e)=>{this.arr[r].description=n,this.arr[r].completed=e,this.setLocalStorageItem()}},h=document.querySelector(".js-list"),g=r=>r.sort(((r,n)=>r.index-n.index)),b=r=>{(r=>{h.innerHTML="",r.forEach((r=>{h.innerHTML+=`\n    <li class="todo-li">\n      <button class="checkbox" ><i class="fa-solid fa-check ${r.completed?"active":""}"></i></button>\n      <div class="container ${r.completed?"active":""}">\n      <div contenteditable="true" class="todo-p-1" id='para'">${r.description}</div>\n      </div>\n      <i class="move-item fa-solid fa-ellipsis-vertical"></i>\n      <i class="delete-item fa-regular fa-trash-can"></i>\n    </li>\n    `}))})(g(r)),(r=>{document.querySelectorAll(".checkbox").forEach(((n,e)=>{n.addEventListener("click",(()=>{n.childNodes[0].classList.toggle("active"),n.nextElementSibling.classList.toggle("active"),n.childNodes[0].classList.contains("active")?r.modifyTask(e,n.nextElementSibling.textContent.trim(),!0):r.modifyTask(e,n.nextElementSibling.textContent.trim(),!1)}))}))})(v);const n=document.querySelectorAll(".todo-p-1"),e=document.querySelectorAll(".move-item"),t=document.querySelectorAll(".delete-item");n.forEach(((r,n)=>{r.addEventListener("input",(()=>{v.modifyTask(n,r.textContent,v.arr[n].completed)})),r.addEventListener("focus",(()=>{r.parentElement.parentElement.classList.add("editing"),e[n].classList.add("none"),t[n].classList.add("active"),t[n].addEventListener("pointerdown",(r=>{r.preventDefault()})),t[n].addEventListener("click",(()=>{v.deleteTask(n),b(g(v.arr))}))})),r.addEventListener("blur",(()=>{r.parentElement.parentElement.classList.remove("editing"),e[n].classList.remove("none"),t[n].classList.remove("active")}))}))};b(g(v.arr));const x=document.querySelector("#dataInput"),y=document.querySelector(".add-to-list");y.addEventListener("submit",(r=>{r.preventDefault(),x.value.trim().length>0&&(v.addNewTask({description:x.value}),b(g(v.arr)),y.reset())})),document.querySelector(".clearAll").addEventListener("click",(()=>{v.deleteTask(),b(g(v.arr))}));const w=document.querySelector(".fa-arrows-rotate");w.addEventListener("click",(()=>{w.classList.remove("active"),setInterval((()=>{w.classList.add("active")}),10),b(g(v.arr))}))})()})();