"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[605],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(n),h=i,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||a;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:i,l[1]=o;for(var d=2;d<a;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},65471:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(87462),i=n(67294),a=n(86010),l=n(72389),o=n(86043);const s={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function d(e){return!!e&&("SUMMARY"===e.tagName||d(e.parentElement))}function c(e,t){return!!e&&(e===t||c(e.parentElement,t))}function p(e){let{summary:t,children:n,...p}=e;const u=(0,l.Z)(),h=(0,i.useRef)(null),{collapsed:m,setCollapsed:y}=(0,o.u)({initialState:!p.open}),[f,w]=(0,i.useState)(p.open),g=i.isValidElement(t)?t:i.createElement("summary",null,t??"Details");return i.createElement("details",(0,r.Z)({},p,{ref:h,open:f,"data-collapsed":m,className:(0,a.Z)(s.details,u&&s.isBrowser,p.className),onMouseDown:e=>{d(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;d(t)&&c(t,h.current)&&(e.preventDefault(),m?(y(!1),w(!0)):y(!0))}}),g,i.createElement(o.z,{lazy:!1,collapsed:m,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{y(e),w(!e)}},i.createElement("div",{className:s.collapsibleContent},n)))}const u={details:"details_b_Ee"},h="alert alert--info";function m(e){let{...t}=e;return i.createElement(p,(0,r.Z)({},t,{className:(0,a.Z)(h,u.details,t.className)}))}function y(e){const t=i.Children.toArray(e.children),n=t.find((e=>i.isValidElement(e)&&"summary"===e.props?.mdxType)),a=i.createElement(i.Fragment,null,t.filter((e=>e!==n)));return i.createElement(m,(0,r.Z)({},e,{summary:n}),a)}},93186:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(87462),i=(n(67294),n(3905)),a=n(65471);const l={},o="Third-Party CA",s={unversionedId:"reference/tunnelers/windows/add-ids/third-party-ca",id:"reference/tunnelers/windows/add-ids/third-party-ca",title:"Third-Party CA",description:"OpenZiti supports adding identities where the key and certificate are provided by a third-party CA.",source:"@site/docs/reference/tunnelers/02-windows/add-ids/20-third-party-ca.md",sourceDirName:"reference/tunnelers/02-windows/add-ids",slug:"/reference/tunnelers/windows/add-ids/third-party-ca",permalink:"/docs/reference/tunnelers/windows/add-ids/third-party-ca",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/reference/tunnelers/02-windows/add-ids/20-third-party-ca.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{},sidebar:"docsSidebar",previous:{title:"One Time Tokens",permalink:"/docs/reference/tunnelers/windows/add-ids/ott"},next:{title:"External Providers",permalink:"/docs/reference/tunnelers/windows/add-ids/ext-providers/"}},d={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Obtain the Third-Party CA JWT - ZAC",id:"obtain-the-third-party-ca-jwt---zac",level:3},{value:"Obtain the Third-Party CA JWT - Shell",id:"obtain-the-third-party-ca-jwt---shell",level:3},{value:"Adding the Identity",id:"adding-the-identity",level:2}],p={toc:c},u="wrapper";function h(e){let{components:t,...l}=e;return(0,i.kt)(u,(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"third-party-ca"},"Third-Party CA"),(0,i.kt)("p",null,"OpenZiti supports adding identities where the key and certificate are provided by a third-party CA."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ZDEW 2.5.2+"),(0,i.kt)("li",{parentName:"ul"},"a third-party-ca (",(0,i.kt)("inlineCode",{parentName:"li"},"ca"),") has been configured and verified in the OpenZiti Network"),(0,i.kt)("li",{parentName:"ul"},"an identity exists with an ",(0,i.kt)("inlineCode",{parentName:"li"},"external-id")," properly mapped to a claim,\nsee ",(0,i.kt)("a",{parentName:"li",href:"/docs/learn/core-concepts/security/authentication/third-party-cas#external-id--x509-claims"},"External Id & x509 Claims")),(0,i.kt)("li",{parentName:"ul"},"The CA's JWT has been transferred to the computer running the ZDEW")),(0,i.kt)(a.Z,{mdxType:"Details"},(0,i.kt)("summary",null,(0,i.kt)("b",null,"Obtaining the Third-Party CA JWT")),(0,i.kt)("p",null,"Adding an identity to a Windows machine that uses a third party CA requires the user or an operator to obtain a JWT\nahead of time. This can be done in two different ways."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"obtain-the-third-party-ca-jwt---zac"},"Obtain the Third-Party CA JWT - ZAC"),(0,i.kt)("p",null,"Obtain a third party CA's JWT using the Ziti Admin Console. From the Authentication->Certificate Authorities page,\nclick on the icon in the JWT column for the appropriate CA and send the JWT to the user trying to add an\nidentity."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"ext-jwt-signer-basic",src:n(90264).Z,width:"1678",height:"1048"})),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"obtain-the-third-party-ca-jwt---shell"},"Obtain the Third-Party CA JWT - Shell"),(0,i.kt)("p",null,"Alternatively, a request can be made to the OpenZiti controller's API to return the JWT. Make an HTTP GET to the controller's\n",(0,i.kt)("inlineCode",{parentName:"p"},"/edge/management/v1/cas/${ca_id}/jwt")," endpoint and save the JWT into a file. Using bash with ",(0,i.kt)("inlineCode",{parentName:"p"},"curl")," this  might look\nsomething like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'curl -X GET -sk \\\n    -H "Content-Type: application/json" \\\n    -H "zt-session: ${zt_session}" \\\n    -o ${pki_root}/auto.jwt \\\n    "https://my.openziti.controller.local:443/cas/${ca_id}/jwt"\n'))),(0,i.kt)("h2",{id:"adding-the-identity"},"Adding the Identity"),(0,i.kt)("p",null,'With the JWT for the CA on the machine running the ZDEW, click on the "ADD IDENTITY" button in the top right of the\nscreen. After the context menu pops up choose "With JWT". In the file dialog, select the third-party CA JWT file.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"windows-with-jwt",src:n(58653).Z,width:"478",height:"498"})),(0,i.kt)("p",null,'After selecting the file, a dialog will appear asking for the key and certificate to use when adding the identity.\nSelect the appropriate key and certificate and click "Join Network"'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"third party ca",src:n(79454).Z,width:"417",height:"491"})))}h.isMDXComponent=!0},79454:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/windows-3rd-party-ca-9437f8998103db7cbe0ca3c2d914254f.png"},58653:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/windows-with-jwt-56c4304b25dddc244d5a457e8c561a0f.png"},90264:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/zac-3rd-party-ca-jwt-398b83940599cb06e791efdc4e576ccc.png"}}]);