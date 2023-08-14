"use strict";(self.webpackChunksite_docusaurus_template=self.webpackChunksite_docusaurus_template||[]).push([[7918],{8977:(e,t,n)=>{n.d(t,{Z:()=>G});var a=n(7462),o=n(7294),r=n(6010);const i={containerBig:"containerBig_UZco",controls:"controls_MJRU",editor:"editor_KnC2",result:"result_g0vb",containerSlim:"containerSlim_KhKH",playgroundContainer:"playgroundContainer_h6u2",brythonCodeBlock:"brythonCodeBlock_Ukyx",brythonTurtleResult:"brythonTurtleResult_BVBA",brythonTurtleResultHead:"brythonTurtleResultHead_cTy6",slimStrippedButton:"slimStrippedButton_5kOd",brythonEditor:"brythonEditor_yCfh",brythonOut:"brythonOut_xGNh",headerButton:"headerButton_Gjo2",playButton:"playButton_DyHw",showRawButton:"showRawButton_Ak0s",showRawButtonDisabled:"showRawButtonDisabled__CQW",brythonCodeBlockHeader:"brythonCodeBlockHeader_ii6Z",title:"title_fNhW",spacer:"spacer_qSJZ",playgroundHeader:"playgroundHeader_aSuJ"},l=function(e,t){void 0===t&&(t=0);let n=3735928559^t,a=1103547991^t;for(let o,r=0;r<e.length;r++)o=e.charCodeAt(r),n=Math.imul(n^o,2654435761),a=Math.imul(a^o,1597334677);return n=Math.imul(n^n>>>16,2246822507)^Math.imul(a^a>>>13,3266489909),a=Math.imul(a^a>>>16,2246822507)^Math.imul(n^n>>>13,3266489909),(a>>>0).toString(16).padStart(8,0)+(n>>>0).toString(16).padStart(8,0)};var s=n(1296),c=n.n(s);const d=864e5,u=function(e,t,n){if(void 0===t&&(t=void 0),void 0===n&&(n=void 0),(()=>{const e=Date.now();e-JSON.parse(localStorage.getItem("last_cleanup")||e)>d&&p()})(),t){const a=localStorage.getItem(t);if(a){const t=JSON.parse(a);if("object"==typeof t){const a=t[e];return void 0===a?n:a}return n}}const a=localStorage.getItem(e);return a?JSON.parse(a):n},m=function(e,t,n,a){void 0===n&&(n=void 0),void 0===a&&(a=2592e6);const o=Date.now();if(n){let r=u(n,void 0,{});"object"!=typeof r&&(r={});const i={...r[e]||{},...t};return r.expiry=o+a,r[e]=i,void localStorage.setItem(n,JSON.stringify(r))}const r={...u(e,n,{}),...t,expiry:o+a};localStorage.setItem(e,JSON.stringify(r))},p=()=>{const e=Date.now();Object.keys(localStorage).forEach((t=>{const n=u(t,{});n.expiry&&n.expiry>e&&localStorage.removeItem(t)})),localStorage.setItem("last_cleanup",e)},f={component:e=>`py_${e}`,turtleResult:e=>`${e}_turtle_result`,aceEditor:e=>`${e}_editor`,turtleSvgContainer:e=>`${e}_svg`,scriptSource:e=>`${e}_src`},h="bry_notify",y="close_turtle_modal",b=/(^from turtle import)|(^import turtle)/m;const _=n(5237);function g(e){let{codeId:t,pyScript:n}=e;return o.createElement("script",{id:f.scriptSource(t),type:"text/py_disabled",className:"brython-script"},`${_}\nrun("""${a=n,a.replace(/"{3}/g,"'''").replace(/\\n/,"\\\\n")}""", '${t}')`);var a}var E=void 0;function v(e){let{pyScript:t}=e;return o.createElement("pre",null,o.createElement("code",null,t))}const w=e=>{if(E)return e();n.e(4981).then(n.bind(n,4981)).then((t=>Promise.all([n.e(6604).then(n.t.bind(n,6604,23)),n.e(4007).then(n.t.bind(n,4007,23)),n.e(7787).then(n.t.bind(n,7787,23)),n.e(2679).then(n.t.bind(n,2679,23))]).then((n=>{E=t.default,e()}))))};function x(e){let{onChange:t,execScript:n,pyScript:a,setPyScript:l,codeId:s,contextId:c,save:d}=e;const[p,h]=o.useState(!1);o.useEffect((()=>{let e=!0;return w((()=>{if(e){h(!0),m(s,{original:a},c);const e=u(s,c);e.edited&&l(e.edited)}})),()=>e=!1}),[]);const y=o.useCallback((e=>(null!==e&&e.editor&&(e.editor.commands.addCommand({name:"execute",bindKey:{win:"Ctrl-Enter",mac:"Command-Enter"},exec:()=>n()}),e.editor.commands.addCommand({name:"save",bindKey:{win:"Ctrl-s",mac:"Command-s"},exec:()=>d(a,!0)})),()=>{if(e&&e.editor){const t=e.editor.commands.commands.execute;t&&e.editor.commands.removeCommand(t,!0)}})),[a]);return o.createElement("div",{className:(0,r.default)(i.brythonCodeBlock,i.editor)},p?o.createElement(E,{className:i.brythonEditor,style:{width:"100%"},maxLines:25,ref:y,mode:"python",theme:"dracula",keyBindings:"VSCode",onChange:t,value:a,defaultValue:a,name:f.aceEditor(s),editorProps:{$blockScrolling:!0},setOptions:{displayIndentGuides:!0,vScrollBarAlwaysVisible:!1,highlightGutterLine:!1},showPrintMargin:!1,highlightActiveLine:!1,enableBasicAutocompletion:!0,enableLiveAutocompletion:!1,enableSnippets:!1,showGutter:!0}):o.createElement(v,{pyScript:a}),o.createElement(g,{codeId:s,pyScript:a}))}const C=(e,t)=>{const n=o.useRef(null);return o.useCallback((a=>{n.current&&t(n.current),n.current=a,n.current&&e(n.current)}),[e,t])};var S=n(1193),N=n.n(S);const T=e=>{if(e.type&&"touchend"===e.type.toLowerCase()){var t=e.target;if(t){for(;"button"!==t.tagName.toLowerCase()&&(t=t.parentNode)&&t.tagName;)if("div"===t.tagName.toLowerCase()&&t.classList.contains("react-draggable")){t=null;break}t&&setTimeout((()=>t.click()),1)}}};var k=n(1212);const M=e=>Object.entries(e||{}).map((e=>`${e[0]}="${e[1]}"`)).join(" "),B=(e,t)=>{"root"===e.type?e.children.forEach((e=>{B(e,t)})):"element"===e.type&&"svg"===e.tagName&&"properties"in e&&(e.properties={...e.properties,...t})},I=e=>{const t=[],{properties:n,tagName:a,type:o,children:r}=e;switch("root"===o&&r.forEach((e=>{t.push(...I(e))})),a){case"svg":e.metadata&&t.push(e.metadata),t.push(`<svg ${M(n)}>`),r.forEach((e=>{t.push(...I(e))})),t.push("</svg>");break;case"rect":r.forEach((e=>{if(["animate","set"].includes(e.tagName)&&e.properties){const t=e.properties;if(!("to"in t)||!("attributeName"in t))return;"display"===t.attributeName&&"CSS"===t.attributeType&&(n.style=n.style.replace(/display:\s*\b\w+\b;/g,`display: ${t.to};`)),n[t.attributeName]=t.to}})),t.push(`<rect ${M(n)}></rect>`);break;case"g":if(0===(r||[]).length)return t;t.push(`<g ${M(n)}>`),r.forEach((e=>{t.push(...I(e))})),t.push("</g>");break;case"line":r.forEach((e=>{if(["animate","set"].includes(e.tagName)&&e.properties){const t=e.properties;if(!("to"in t)||!("attributeName"in t))return;n[t.attributeName]=t.to}})),t.push(`<line ${M(n)}></line>`);break;case"circle":r.forEach((e=>{if(["animate","set"].includes(e.tagName)&&e.properties){const t=e.properties;if(!("to"in t)||!("attributeName"in t))return;"display"===e.attributeName&&"CSS"===e.attributeType&&(n.style=n.style.replace(/display:\s*\b\w+\b;/g,`display: ${t.to}`))}})),n.style&&/\s*display:\s*none;\s*/.test(n.style)&&(n.style=n.style.replace(/\s*display:\s*none;\s*/g,"")),t.push(`<circle ${M(n)}></circle>`);break;case"text":var i="";r.forEach((e=>{switch(e.type){case"text":i=e.value;break;case"element":const t=e.properties;if(!["animate","set"].includes(e.tagName))return;if(!("to"in t)||!("attributeName"in t))return;"display"===t.attributeName&&"CSS"===t.attributeType&&(n.style=n.style.replace(/display:\s*\b\w+\b;/g,`display: ${t.to};`)),n[t.attributeName]=t.to}})),t.push(`<text ${M(n)}>${i}</text>`);break;case"polygon":var l="0,0,0",s="0,0";r.forEach((e=>{const t=e.properties;switch(e.tagName){case"set":case"animate":if(!("to"in t)||!("attributeName"in t))return;"display"===t.attributeName&&"CSS"===t.attributeType&&(n.style=n.style.replace(/display:\s*\b\w+\b;/g,`display: ${t.to};`)),n[t.attributeName]=t.to;break;case"animateTransform":"rotate"===e.properties.type&&(l=e.properties.to);break;case"animateMotion":"to"in e.properties&&(s=e.properties.to)}})),t.push(`<polygon ${M(n)} transform="translate(${s}) rotate(${l})"></polygon>`)}return t},R=(e,t,n,a)=>{e.setAttribute("xmlns","http://www.w3.org/2000/svg");const o=e.getBBox(),r={viewBox:`${o.x-5},${o.y-5},${o.width+10},${o.height+10}`,width:o.width+10,height:o.height+10};var i='<?xml version="1.0" standalone="no"?>';const l=((e,t)=>{const n=(0,k.Q)(e);return t&&B(n,t),I(n).join("\n")})(`${i}${e.outerHTML}`,r),s=document.createElement("div");if(window.__KEEP_TURTLE_ANIMATIONS__?s.innerHTML=`${i}\r\n${e.outerHTML}`:s.innerHTML=l,!window.__DISABLE_TURTLE_METADATA__){const e=s.querySelector("svg"),t=document.createElement("metadata"),o=document.createElement("raw");o.innerHTML=u(n,a,{}).executed||"",t.appendChild(o),e.appendChild(t)}var c=new Blob([s.innerHTML],{type:"image/svg+xml;charset=utf-8"}),d=URL.createObjectURL(c),m=document.createElement("a");m.href=d,m.download=t,document.body.appendChild(m),m.click(),document.body.removeChild(m)};var L=n(2814),$=n(1436);function O(e){let{clearResult:t,codeId:n,pyScript:a,contextId:r}=e;return o.createElement(N(),{onStop:T,positionOffset:{x:0,y:"-50%"}},o.createElement("div",{className:i.brythonTurtleResult},o.createElement("div",{className:i.brythonTurtleResultHead},o.createElement("span",null,"Output"),o.createElement("span",{className:i.spacer}),o.createElement("button",{"aria-label":"Download SVG",type:"button",className:i.slimStrippedButton,style:{zIndex:1e3},onClick:()=>{const e=document.getElementById(f.turtleSvgContainer(n));e&&R(e,`${n}.svg`,n,r)}},o.createElement("span",{"aria-hidden":"true"},o.createElement(L.G,{icon:$.q7m}))),o.createElement("button",{"aria-label":"Close",type:"button",style:{zIndex:1e3},className:i.slimStrippedButton,onClick:()=>t(!0)},o.createElement("span",{"aria-hidden":"true"},o.createElement(L.G,{icon:$.NBC})))),o.createElement("div",{id:f.turtleResult(n),className:"brython-turtle-result"})))}function A(e){let{logMessages:t}=e;return o.createElement("div",{className:i.brythonOut},t.length>0&&o.createElement("pre",{style:{overflowX:"auto"}},t.map(((e,t)=>o.createElement("code",{key:t,style:{color:"stderr"===e.type?"var(--ifm-color-danger-darker)":void 0}},e.msg)))))}var H=n(1417);const z=e=>{let{execScript:t,executing:n}=e;return o.createElement("button",{onClick:t,className:(0,r.default)(i.playButton,i.headerButton)},o.createElement(L.G,{icon:n?H.Bmx:$.zc,spin:n}))};function Z(e){let{slim:t,title:n,executing:a,onReset:l,hasEdits:s,showRaw:c,resettable:d,onToggleRaw:u,execScript:m,showSavedNotification:p}=e;return o.createElement("div",{className:(0,r.default)(i.brythonCodeBlockHeader,i.controls)},!t&&o.createElement(o.Fragment,null,o.createElement("div",{className:i.title},n),o.createElement("div",{className:i.spacer})),!t&&p&&o.createElement(L.G,{icon:$.f8k,style:{color:"var(--ifm-color-success)"}}),!t&&s&&!c&&d&&o.createElement("button",{onClick:l,className:i.headerButton,title:"\xc4nderungen Verwerfen"},o.createElement(L.G,{icon:$.X7o})),!t&&s&&o.createElement("button",{className:(0,r.default)(i.showRawButton,i.headerButton,c?i.showRawButtonDisabled:void 0),onClick:u,title:c?"Mein Code Anzeigen":"Original Anzeigen"},c?o.createElement(L.G,{icon:$.w49}):o.createElement(L.G,{icon:$.rxY})),o.createElement(z,{execScript:m,executing:a,title:"Code Ausf\xfchren"}))}function j(e){let{children:t,codeId:n,contextId:a,title:s,resettable:d,slim:p,executing:h,setExecuting:_,turtleModalOpen:g,setTurtleModalOpen:E,logMessages:v,setLogMessages:w}=e;const[C,S]=o.useState(0),N=o.useRef(0);N.current=C;const[T,k]=o.useState(!!u(n,a,{}).edited&&!p),[M,B]=o.useState(T?u(n,a,{}).edited:""),[I,R]=o.useState(!T),[L,$]=o.useState(!1),[H,z]=o.useState(""),j=function(e,t){void 0===t&&(t=!1),m(n,{edited:e},a),t&&$(!0)},G=o.useMemo((()=>c()(j,1e3)),[n,a,t,I,p]),D=e=>{if(I||p)return;const t=l(e)!==H;k(t),t?G(e,!0):G(void 0)},P=o.useMemo((()=>c()(D,300)),[n,a,t,I,p,H]);o.useEffect((()=>(P(M),()=>{P.cancel(),G.cancel()})),[M]),o.useEffect((()=>{const e=window.setTimeout((()=>$(!1)),1500);return()=>{window.clearTimeout(e)}}),[L]),o.useEffect((()=>{if(I||p)B(t.replace(/\n$/,""));else{const e=u(n,a,{});e.edited&&B(e.edited)}}),[I]),o.useEffect((()=>{S(0),z(l(t.replace(/\n$/,"")))}),[n,t]),o.useEffect((()=>{C>0&&(w([]),window.brython(1,{ids:[f.scriptSource(n)]}))}),[C,n]);const U=function(e){void 0===e&&(e=!1),document.dispatchEvent(new CustomEvent(y,{detail:{codeId:n,force:e}}))},V=()=>{p||I||j(M,T),m(n,{executed:M},a),U(),document.querySelectorAll('.brython-script[type="text/python"]').forEach((e=>{e.setAttribute("type","text/py_disabled")}));document.getElementById(f.scriptSource(n)).setAttribute("type","text/python"),_(!0),b.test(M)&&E(!0),S(N.current+1)};return o.createElement(o.Fragment,null,o.createElement(Z,{slim:p,title:s,executing:h,onReset:()=>{if(!d)return;window.confirm("Discard changes? (Your version will be lost!)")&&(R(!0),m(n,{edited:void 0},a),k(!1))},onToggleRaw:()=>R(!I),hasEdits:T,showRaw:I,resettable:d,execScript:V,showSavedNotification:L}),o.createElement(x,{onChange:e=>{I&&!p&&(R(!1),u(n,a,{}).edited)||B(e)},execScript:V,pyScript:M,setPyScript:B,codeId:n,contextId:a,name:f.aceEditor(n),save:j}),o.createElement("div",{className:(0,r.default)(i.result)},o.createElement(A,{logMessages:v,codeId:n}),g&&o.createElement(O,{codeId:n,clearResult:U,contextId:a})))}function G(e){let{codeId:t,slim:n,...l}=e;const[s,c]=o.useState(!1),[d,u]=o.useState([]),[m,p]=o.useState(!1),[b,_]=o.useState(0),g=o.useRef(0);g.current=b;const E=o.useCallback((e=>{if(e.detail){const t=e.detail;switch(t.type){case"done":c(!1);break;case"stdout":case"stderr":t.output.length>0&&u((n=>[...n,{type:t.type,msg:t.output,time:e.timeStamp}].sort(((e,t)=>e.time>t.time?1:e.time<t.time?-1:0))))}}}),[]),v=o.useCallback((e=>{if(e.detail.force||e.detail.codeId!==t)p(!1);else{const e=document.getElementById(f.turtleResult(t));for(;e&&e.lastElementChild;)e.removeChild(e.lastElementChild)}}),[]),w=C((e=>{console.log("setup"),e.id!==f.component(t)&&_(g.current+1),e.addEventListener(h,E),document.addEventListener(y,v)}),(e=>{e.removeEventListener(h,E),document.removeEventListener(y,v)}));return o.createElement("div",{id:f.component(t),className:(0,r.default)(i.playgroundContainer,n?i.containerSlim:i.containerBig,"live_py"),key:b,ref:w},o.createElement(j,(0,a.Z)({codeId:t,slim:n,executing:s,setExecuting:c,logMessages:d,setLogMessages:u,turtleModalOpen:m,setTurtleModalOpen:p},l)))}},968:(e,t,n)=>{n.d(t,{Z:()=>E});var a=n(7294),o=n(6010),r=n(5281),i=n(5999);const l={admonition:"admonition_WoCw",admonitionHeading:"admonitionHeading_TMsN",admonitionIcon:"admonitionIcon_Ibzs",admonitionContent:"admonitionContent_vXIg"};var s;function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}const d=e=>{let{title:t,titleId:n,...o}=e;return a.createElement("svg",c({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 85.07 122.88",style:{enableBackground:"new 0 0 85.07 122.88"},xmlSpace:"preserve","aria-labelledby":n},o),t?a.createElement("title",{id:n},t):null,s||(s=a.createElement("path",{d:"M60.78 43.44c-1.49.81-3.35.26-4.15-1.22a3.051 3.051 0 0 1 1.23-4.15c7.04-3.82 10.32-8.76 10.98-13.59.35-2.58-.05-5.17-1.02-7.57-.99-2.43-2.56-4.64-4.55-6.42-3.87-3.46-9.3-5.28-14.97-3.87-2.3.57-4.29 1.72-6.03 3.34-1.85 1.72-3.45 3.97-4.85 6.63a3.064 3.064 0 0 1-4.13 1.29A3.064 3.064 0 0 1 32 13.75c1.72-3.26 3.73-6.06 6.11-8.28 2.49-2.31 5.38-3.97 8.74-4.8 7.8-1.93 15.23.53 20.51 5.25 2.68 2.4 4.81 5.39 6.15 8.69 1.35 3.33 1.9 6.99 1.39 10.7-.91 6.62-5.15 13.26-14.12 18.13zM37.32 67.61c-11.6-15.58-11.88-30.34 2.2-44.06l-10.14-5.6C21.26 14.79 6.36 38.08 12.12 44.3l7.9 11.72-1.63 3.4c-.45 1.01-.01 1.72 1.09 2.21l1.07.29L0 102.59l4.16 8.87 8.32-2.45 2.14-4.16-2.05-3.84 4.52-.97L18.14 98l-2.36-3.6 1.55-3.01 4.51-.57 1.47-2.85-2.52-3.29 1.61-3.12 4.6-.75 6.26-11.95 1.06.58c1.84 1.12 2.79.4 3-1.83zm21.83 9.77L56.09 88.8l-4.25 1.68-.89 3.33 3.1 2.63-.81 3.03-4.2 1.48-.86 3.2 3.01 2.95-.58 2.17-4.13 1.87 2.76 3.25-1.19 4.43-7.45 4.07-5.82-7.63 11.1-41.43-2.69-.72a1.05 1.05 0 0 1-.74-1.28l1.13-4.21c-8.14-6.17-12.17-16.85-9.37-27.32 3.6-13.45 17.18-21.57 30.64-18.55.06.72.05 1.45-.05 2.18-.25 1.82-1.04 3.69-2.5 5.5-.2.24-.41.49-.63.73a9.22 9.22 0 0 0-9.49 6.82c-.5 1.86-.39 3.74.2 5.43.14.6.37 1.18.67 1.75.71 1.3 1.75 2.29 2.97 2.92.8.53 1.7.93 2.67 1.2a9.231 9.231 0 0 0 11.22-6.24c1.46-1.29 2.73-2.65 3.82-4.05 2.12-2.73 3.57-5.63 4.43-8.58 5.84 6.3 8.41 15.37 6.02 24.29-2.8 10.47-11.65 17.71-21.77 18.98l-1.13 4.21c-.15.55-.72.89-1.28.74l-.85-.25z"})))};var u,m,p,f;function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},h.apply(this,arguments)}const y=e=>{let{title:t,titleId:n,...o}=e;return a.createElement("svg",h({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64","aria-labelledby":n},o),u||(u=a.createElement("defs",null,a.createElement("style",null,".cls-2{fill:#8bc4ff}.cls-3{fill:#2e58ff}"))),void 0===t?a.createElement("title",{id:n},"find question"):t?a.createElement("title",{id:n},t):null,a.createElement("g",{id:"find_question","data-name":"find question"},a.createElement("circle",{cx:23,cy:23,r:21,style:{fill:"#d1e7ff"}}),m||(m=a.createElement("path",{className:"cls-2",d:"m37.85 37.85 4.24 4.24M62 57a5 5 0 0 1-8.45 3.62l-15-15 7.07-7.07 15 15A5 5 0 0 1 62 57Z"})),p||(p=a.createElement("path",{className:"cls-3",d:"m62 52.14-15-15a2 2 0 0 0-2.82 0l-2.13 2.12-1.48-1.49a23 23 0 0 0-33.87-31C-7.76 21.24 2.65 46 23 46a22.94 22.94 0 0 0 14.78-5.38l1.49 1.48-2.12 2.13a2 2 0 0 0 0 2.82l15 15A7 7 0 0 0 62 52.14ZM9.56 36.44C-2.42 24.46 6.19 4 23 4s25.43 20.44 13.44 32.44a19 19 0 0 1-26.88 0Zm48.6 23.32a2.9 2.9 0 0 1-3.2-.55L41.39 45.63l4.24-4.24 13.55 13.54a3 3 0 0 1-1.02 4.83Z"})),f||(f=a.createElement("path",{className:"cls-3",d:"M24 37a2 2 0 1 1 2-2 2 2 0 0 1-2 2Zm2-2Zm-2 0ZM24 29a2 2 0 0 1-2-2 8.65 8.65 0 0 1 3.45-6.84 4 4 0 1 0-6.1-1.52 2 2 0 0 1-3.64 1.66 8 8 0 1 1 12.19 3A4.68 4.68 0 0 0 26 27a2 2 0 0 1-2 2Z"}))))};const b={note:{infimaClassName:"secondary",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:a.createElement(i.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:a.createElement(i.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:a.createElement(i.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:a.createElement(i.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:a.createElement(i.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")},keyword:{infimaClassName:"keyword",iconComponent:function(){return a.createElement(d,null)},label:a.createElement(i.Z,{id:"theme.admonition.keyword",description:"The default label used for the Keyword admonition (:::keyword)"},"keyword")},think:{infimaClassName:"think",iconComponent:function(){return a.createElement(y,null)},label:a.createElement(i.Z,{id:"theme.admonition.think",description:"The default label used for the Think admonition (:::think)"},"think")}},_={secondary:"note",important:"info",success:"tip",warning:"danger"};function g(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=a.Children.toArray(e),n=t.find((e=>a.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),o=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:o}}(e.children);return{...e,title:e.title??t,children:n}}function E(e){const{children:t,type:n,title:i,icon:s}=g(e),c=function(e){const t=_[e]??e,n=b[t];return n||(console.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),b.info)}(n),d=i??c.label,{iconComponent:u}=c,m=s??a.createElement(u,null);return a.createElement("div",{className:(0,o.default)(r.k.common.admonition,r.k.common.admonitionType(e.type),"alert",`alert--${c.infimaClassName}`,l.admonition)},a.createElement("div",{className:l.admonitionHeading},a.createElement("span",{className:l.admonitionIcon},m),d),a.createElement("div",{className:l.admonitionContent},t))}},5237:e=>{e.exports="from browser import document, window\nimport re\nimport sys\nimport time\n\nhas_turtle_import = False\nlog_line_number_shift = 0\n\ndef notify(node_id, data):\n    event = window.CustomEvent.new('bry_notify', {'detail': data})\n    document[f'py_{node_id}'].dispatchEvent(event)\n\nclass EventOutput:\n    encoding = 'utf-8'\n\n    def __init__(self, node_id, out_type):\n        self.node_id = node_id\n        self.out_type = out_type\n        self.buf = ''\n\n    def write(self, data):\n        self.buf += str(data)\n        self.flush()\n\n    def flush(self):\n        if len(self.buf) > 0:\n            notify(self.node_id, {'type': self.out_type, 'output': self.buf})\n        self.buf = ''\n\n    def __len__(self):\n        return len(self.buf)\n\nclass Trace:\n    def __init__(self):\n        self.buf = \"\"\n\n    def write(self, *data):\n        self.buf += \" \".join([str(x) for x in data])\n\n    def format(self):\n        \"\"\"Remove calls to function in this script from the traceback.\"\"\"\n        return self.buf\n\ndef syntax_error(args):\n    trace = Trace()\n    info, [filename, lineno, offset, line] = args\n    line_nr = lineno - log_line_number_shift if lineno > 0 else 0\n\n    trace.write(f\"  File {filename}, line {line_nr}\\n\")\n    trace.write(\"    \" + line + \"\\n\")\n    trace.write(\"    \" + offset * \" \" + \"^\\n\")\n    trace.write(\"SyntaxError:\", info, \"\\n\")\n    return trace.buf\n\ndef format_exc():\n    trace = Trace()\n    exc_info = sys.exc_info()\n    exc_class = exc_info[0].__name__\n    exc_msg = str(exc_info[1])\n    tb = exc_info[2].tb_next\n    if exc_info[0] is SyntaxError:\n        return syntax_error(exc_info[1].args)\n    trace.write(\"Traceback (most recent call last):\\n\")\n    while tb is not None:\n        frame = tb.tb_frame\n        code = frame.f_code\n        name = code.co_name\n        filename = code.co_filename\n        line_nr = tb.tb_lineno - log_line_number_shift if tb.tb_lineno > 0 else 0\n        trace.write(f\"  File {filename}, line {line_nr}, in {name}\\n\")\n        if not filename.startswith(\"<\"):\n            trace.write(f\"    {tb.tb_lasti}\\n\")\n        tb = tb.tb_next\n    trace.write(f\"{exc_class}: {exc_msg}\\n\")\n    return trace.format()\n\ndef print_exc(file=None):\n    if file is None:\n        file = sys.stderr\n    trace = format_exc()\n    file.write(trace)\n    return trace\n\nTURTLE_IMPORTS = re.compile(r'(^from turtle import)|(^import turtle)', re.M)\nTURTLE_TEMPLATE = '''from browser import document\nimport turtle\nturtle.restart()\nturtle.set_defaults(\n  turtle_canvas_wrapper = document['{node_id}_turtle_result'],\n  turtle_canvas_id = '{node_id}_svg'\n)\n{py_script}\nturtle.done()\n'''\n\n\ndef run(code, node_id):\n    global has_turtle_import, log_line_number_shift\n    has_turtle_import = len(TURTLE_IMPORTS.findall(code)) > 0\n    log_line_number_shift = 7 if has_turtle_import else 0\n    py_script = TURTLE_TEMPLATE.format(node_id=node_id, py_script=code) if has_turtle_import else code\n\n    sys.stdout = EventOutput(node_id, 'stdout')\n    sys.stderr = EventOutput(node_id, 'stderr')\n    notify(node_id, {'type': 'start', 'time': time.time()})\n    try:\n        ns = {'__name__': node_id}\n        exec(py_script, ns)\n    except Exception as exc:\n        print_exc(file=sys.stderr)\n    finally:\n        notify(node_id, {'type': 'done', 'time': time.time()})\n    \n    sys.stdout.flush()\n    sys.stderr.flush()\n"}}]);