(self.webpackChunksite_docusaurus_template=self.webpackChunksite_docusaurus_template||[]).push([[8592],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>d,kt:()=>b});var s=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},l=Object.keys(e);for(s=0;s<l.length;s++)n=l[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(s=0;s<l.length;s++)n=l[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=s.createContext({}),c=function(e){var t=s.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return s.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},y=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(n),y=r,b=u["".concat(i,".").concat(y)]||u[y]||p[y]||l;return n?s.createElement(b,a(a({ref:t},d),{},{components:n})):s.createElement(b,a({ref:t},d))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=y;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[u]="string"==typeof e?e:r,a[1]=o;for(var c=2;c<l;c++)a[c]=n[c];return s.createElement.apply(null,a)}return s.createElement.apply(null,n)}y.displayName="MDXCreateElement"},1262:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var s=n(7294),r=n(2389);function l(e){let{children:t,fallback:n}=e;return(0,r.Z)()?s.createElement(s.Fragment,null,t?.()):n??null}},4673:(e,t,n)=>{"use strict";n.d(t,{Z:()=>b});var s=n(7462),r=n(7294),l=n(6010),a=n(2389),o=n(6043);const i={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function c(e){return!!e&&("SUMMARY"===e.tagName||c(e.parentElement))}function d(e,t){return!!e&&(e===t||d(e.parentElement,t))}function u(e){let{summary:t,children:n,...u}=e;const p=(0,a.Z)(),y=(0,r.useRef)(null),{collapsed:b,setCollapsed:m}=(0,o.u)({initialState:!u.open}),[h,f]=(0,r.useState)(u.open),g=r.isValidElement(t)?t:r.createElement("summary",null,t??"Details");return r.createElement("details",(0,s.Z)({},u,{ref:y,open:h,"data-collapsed":b,className:(0,l.default)(i.details,p&&i.isBrowser,u.className),onMouseDown:e=>{c(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;c(t)&&d(t,y.current)&&(e.preventDefault(),b?(m(!1),f(!0)):m(!0))}}),g,r.createElement(o.z,{lazy:!1,collapsed:b,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{m(e),f(!e)}},r.createElement("div",{className:i.collapsibleContent},n)))}const p={details:"details_b_Ee"},y="alert alert--info";function b(e){let{...t}=e;return r.createElement(u,(0,s.Z)({},t,{className:(0,l.default)(y,p.details,t.className)}))}},9898:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var s=n(7462),r=n(7294),l=n(4673);function a(e){const t=r.Children.toArray(e.children),n=t.find((e=>r.isValidElement(e)&&"summary"===e.props?.mdxType)),a=r.createElement(r.Fragment,null,t.filter((e=>e!==n)));return r.createElement(l.Z,(0,s.Z)({},e,{summary:n}),a)}},505:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var s=n(7294);const r=(e,t)=>{(0,s.useEffect)((()=>{if(t){let t=document.createElement("script");t.src=e,t.id="WEKu7pDAS20WhGVVi4yPt",t.setAttribute("id","WEKu7pDAS20WhGVVi4yPt"),t.async=!0,t.type="text/babel",document.body.appendChild(t)}return()=>{if(t){let e=document.getElementById("WEKu7pDAS20WhGVVi4yPt");document.body.removeChild(e)}}}),[e])};var l=n(1262),a=n(412);function o(){let e="";const t=a.Z.canUseDOM;return t&&(e=n(5111).default),r(e,t),s.createElement(l.Z,null,(()=>s.createElement("div",null)))}},1694:(e,t,n)=>{"use strict";n(9898),n(7294)},3707:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var s=n(4673),r=n(7294);const l=e=>{let{title:t}=e;return r.createElement("summary",{style:{fontWeight:"bold"}},t||"Deep Dive")};function a(e){let{children:t,title:n}=e;return r.createElement(r.Fragment,null,r.createElement(s.Z,{summary:r.createElement(l,{title:n})},t))}},6533:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var s=n(7294);const r={center_image:"center_image_tcFY"};function l(e){let{path:t,customClass:n,widthPercentage:l}=e,a="";return null!=n&&(a=`, ${n}`),s.createElement("section",null,s.createElement("img",{src:t,className:`${r.center_image} ${a}`,style:{width:`${l}`}}))}},5111:()=>{const e="black",t="KKO2rS1wYKTEyBJVRNa7e";let n="white",s=null,r=!1;const l=document.createElement("div");l.setAttribute("class","chatbase-bubble-button"),l.setAttribute("id","chatbase-bubble-button"),l.style.position="fixed",l.style.bottom="20px",l.style.right="20px",l.style.width="50px",l.style.height="50px",l.style.borderRadius="25px",l.style.backgroundColor=e,l.style.boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2)",l.style.cursor="pointer",l.style.zIndex=2,l.style.transition="all .2s ease-in-out";const a=document.createElement("div");a.setAttribute("id","chatbase-message-bubbles"),a.style.position="fixed",a.style.bottom="80px",a.style.borderRadius="10px",a.style.fontFamily="sans-serif",a.style.fontSize="16px",a.style.zIndex=2,a.style.cursor="pointer",a.style.flexDirection="column",a.style.gap="50px",a.style.marginLeft="20px",a.style.maxWidth="70vw",a.style.display="none";const o=document.createElement("div");o.setAttribute("id","chatbase-message-bubbles-close-button"),o.innerHTML="&#10005;",o.style.position="absolute",o.style.top="-7px",o.style.right="-7px",o.style.fontWeight="bold",o.style.display="none",o.style.justifyContent="center",o.style.alignItems="center",o.style.zIndex=2,o.style.width="22px",o.style.height="22px",o.style.borderRadius="50%",o.style.textAlign="center",o.style.fontSize="12px",o.style.cursor="pointer",a.appendChild(o),document.body.appendChild(a),l.addEventListener("mouseenter",(e=>{l.style.transform="scale(1.08)"})),l.addEventListener("mouseleave",(e=>{l.style.transform="scale(1)"}));const i=document.createElement("div");i.setAttribute("id","chatbase-chat-button-icon"),i.style.display="flex",i.style.alignItems="center",i.style.justifyContent="center",i.style.width="100%",i.style.height="100%",i.style.zIndex=2,l.appendChild(i),l.addEventListener("click",(function(){"none"===c.style.display?(r=!0,a.style.display="none",c.style.display="flex",i.innerHTML=y()):(r=!1,c.style.display="none",i.innerHTML=p())})),a.addEventListener("click",(()=>{r=!0,a.style.display="none",c.style.display="flex",i.innerHTML=y()}));const c=document.createElement("div");c.setAttribute("id","chatbase-bubble-window"),c.style.position="fixed",c.style.flexDirection="column",c.style.justifyContent="space-between",c.style.bottom="80px",c.style.width="85vw",c.style.height="70vh",c.style.boxShadow="rgba(150, 150, 150, 0.2) 0px 10px 30px 0px, rgba(150, 150, 150, 0.2) 0px 0px 0px 1px",c.style.display="none",c.style.borderRadius="10px",c.style.zIndex=2,c.style.overflow="hidden",document.body.appendChild(c),c.innerHTML=`<iframe\nsrc="https://www.chatbase.co/chatbot-iframe/${t}"\nwidth="100%"\nheight="100%"\nframeborder="0"\n></iframe>`;const d=window.matchMedia("(min-width: 550px)");function u(e){e.matches&&(c.style.height="600px",c.style.width="400px",a.style.maxWidth="300px")}d.addEventListener("change",u),u(d);function p(){return s||`\n  <svg id="chatbase-chat-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.3" stroke="${n}" width="24" height="24">\n  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />\n  </svg>`}function y(){return`\n  <svg id="chatbase-close-icon" class="closeIcon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.3" stroke="${n}" width="24" height="24">\n    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />\n  </svg>\n  `}function b(e,t){"#"===e.charAt(0)&&(e=e.substr(1));const n=e=>Math.min(255,Math.max(0,e)),s=parseInt(e.substr(0,2),16),r=parseInt(e.substr(2,2),16),l=parseInt(e.substr(4,2),16),a=(.299*s+.587*r+.114*l)/255>.5?-1*Math.abs(t):Math.abs(t),o=n(s+Math.round(255*a)),i=n(r+Math.round(255*a)),c=n(l+Math.round(255*a));return"#"+o.toString(16).padStart(2,"0")+i.toString(16).padStart(2,"0")+c.toString(16).padStart(2,"0")}(async()=>{const d=await fetch(`https://www.chatbase.co/api/get-chatbot-styles?chatbotId=${t}`,{method:"GET",headers:{"Content-Type":"application/json"}}),{styles:u,initialMessages:y}=await d.json();l.style.backgroundColor=u.button_color||e,"left"===u.align_chat_button?(l.style.left="20px",l.style.right="unset",c.style.left="20px",c.style.right="unset",a.style.left="20px",a.style.right="unset"):(l.style.right="20px",l.style.left="unset",c.style.right="20px",c.style.left="unset",a.style.right="20px",a.style.left="unset"),document.body.appendChild(l),u.chat_icon&&(s=`<img src="https://backend.chatbase.co/storage/v1/object/public/chat-icons/${u.chat_icon}" class="chatbase-bubble-img" id="chatbase-bubble-img" />`);const m=function(e){"#"===e.charAt(0)&&(e=e.substr(1));const t=parseInt(e.substr(0,2),16),n=parseInt(e.substr(2,2),16),s=parseInt(e.substr(4,2),16);return(.299*t+.587*n+.114*s)/255>.5?"black":"white"}(u.button_color||e);n=m,i.innerHTML=p(),y.forEach(((e,t)=>{const n=document.createElement("div");n.style.display="flex",n.style.justifyContent="left"===u.align_chat_button?"flex-start":"flex-end";const s=document.createElement("div");s.style.backgroundColor="dark"===u.theme?"black":"white",s.style.color="dark"===u.theme?"white":"black",s.style.boxShadow="rgba(150, 150, 150, 0.2) 0px 10px 30px 0px, rgba(150, 150, 150, 0.2) 0px 0px 0px 1px",s.style.borderRadius="10px",s.style.padding="20px",s.style.margin="8px",s.style.fontSize="14px",s.innerText=e,s.style.opacity=0,s.style.transform="scale(0.9)",s.style.transition="opacity 0.5s ease, transform 0.5s ease",n.appendChild(s),a.appendChild(n),u.auto_open_chat_window_after>=0&&setTimeout((()=>{r||"true"!==sessionStorage.getItem("message_bubbles_have_been_shown")&&(0===t&&(a.style.display="block"),s.style.opacity=1,s.style.transform="scale(1)",t===y.length-1&&sessionStorage.setItem("message_bubbles_have_been_shown","true"))}),1e3*u.auto_open_chat_window_after+100*t)})),o.style.backgroundColor="dark"===u.theme?b("#000000",.2):b("#FFFFFF",.12),o.style.color="dark"===u.theme?"white":"black",o.style.boxShadow="rgba(150, 150, 150, 0.15) 0px 6px 24px 0px, rgba(150, 150, 150, 0.15) 0px 0px 0px 1px",a.addEventListener("mouseenter",(()=>{o.style.display="flex"})),a.addEventListener("mouseleave",(()=>{o.style.display="none"})),o.addEventListener("click",(e=>{e.stopPropagation(),a.style.display="none"}))})(),document.onclick=function(e){console.log(e.target.id),"chatbase-bubble-window"!==e.target.id&&"chatbase-bubble-button"!==e.target.id&&"chatbase-bubble-img"!==e.target.id&&"chatbase-close-icon"!==e.target.id&&"chatbase-chat-icon"!==e.target.id&&"chatbase-chat-button-icon"!==e.target.id&&(r&&(c.style.display="none",i.innerHTML=p(),r=!1),console.log("close chat"))}}}]);