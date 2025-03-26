"use strict";(self.webpackChunkdocusaurus_3=self.webpackChunkdocusaurus_3||[]).push([[9243],{88321:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"reference/tunnelers/windows/add-ids/ext-providers/ext-jwt","title":"By JWT","description":"Prerequisites","source":"@site/docs/reference/tunnelers/02-windows/add-ids/ext-providers/30-ext-jwt.mdx","sourceDirName":"reference/tunnelers/02-windows/add-ids/ext-providers","slug":"/reference/tunnelers/windows/add-ids/ext-providers/ext-jwt","permalink":"/docs/reference/tunnelers/windows/add-ids/ext-providers/ext-jwt","draft":false,"unlisted":false,"editUrl":"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/reference/tunnelers/02-windows/add-ids/ext-providers/30-ext-jwt.mdx","tags":[],"version":"current","lastUpdatedAt":1743027175000,"sidebarPosition":30,"frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"External Providers","permalink":"/docs/reference/tunnelers/windows/add-ids/ext-providers/"},"next":{"title":"By URL","permalink":"/docs/reference/tunnelers/windows/add-ids/ext-providers/ext-jwt-url"}}');var r=n(74848),s=n(28453),o=n(27763),d=n(35358);const a={},l="By JWT",c={},h=[...d.RM,{value:"Prerequisites",id:"prerequisites",level:2},{value:"Obtain the Network JWT - ZAC",id:"obtain-the-network-jwt---zac",level:3},{value:"Obtain the Network JWT - Shell",id:"obtain-the-network-jwt---shell",level:3},{value:"Adding the Identity",id:"adding-the-identity",level:2},{value:"Authenticating",id:"authenticating",level:2}];function u(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"by-jwt",children:"By JWT"})}),"\n",(0,r.jsx)(d.Ay,{}),"\n",(0,r.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"OpenZiti Controller 1.2+"}),"\n",(0,r.jsx)(t.li,{children:"ZDEW 2.5.2+"}),"\n",(0,r.jsxs)(t.li,{children:["an ",(0,r.jsx)(t.code,{children:"external-jwt-provider"})," is properly configured"]}),"\n",(0,r.jsxs)(t.li,{children:["an identity exists with an ",(0,r.jsx)(t.code,{children:"external-id"})," field set to a value provided from the external provider"]}),"\n",(0,r.jsx)(t.li,{children:"the OpenZiti network operator has sent the Windows machine the network jwt file"}),"\n"]}),"\n",(0,r.jsxs)(o.A,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)("b",{children:"Obtaining the Network JWT"})}),(0,r.jsx)(t.p,{children:"Adding an identity to a Windows machine that uses an external provider as the primary authentication mechanism with a JWT\r\nrequires the user or an operator to obtain a JWT ahead of time. This can be done in two different ways."}),(0,r.jsx)("hr",{}),(0,r.jsx)(t.h3,{id:"obtain-the-network-jwt---zac",children:"Obtain the Network JWT - ZAC"}),(0,r.jsx)(t.p,{children:'Obtain a controller\'s network JWT using the Ziti Admin Console. From the Authentication->JWT Signers page, click on\r\n"Download Network JWT" located on the top right, near the "plus" icon and send the JWT to the user trying to add an\r\nidentity.'}),(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"ext-jwt-signer-basic",src:n(98809).A+"",width:"1240",height:"810"})}),(0,r.jsx)("hr",{}),(0,r.jsx)(t.h3,{id:"obtain-the-network-jwt---shell",children:"Obtain the Network JWT - Shell"}),(0,r.jsxs)(t.p,{children:["Alternatively, a request can be made to the OpenZiti controller's API to return the JWT. Make an HTTP GET to the controller's\r\n",(0,r.jsx)(t.code,{children:"/network-jwts"})," endpoint and extract the ",(0,r.jsx)(t.code,{children:"token"})," field and save this content to a JWT. Using bash, ",(0,r.jsx)(t.code,{children:"curl"})," and ",(0,r.jsx)(t.code,{children:"jq"})," this\r\nmight look something like:"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-text",children:"curl -s https://my.openziti.controller.local:443/network-jwts | jq -r .data[].token > my-network-jwt\n"})})]}),"\n",(0,r.jsx)(t.h2,{id:"adding-the-identity",children:"Adding the Identity"}),"\n",(0,r.jsx)(t.p,{children:'With the JWT on the Windows machine to be added, click on the "ADD IDENTITY" button in the top right of the screen.\r\nAfter the context menu pops up choose "With JWT". In the file dialog, select the network JWT file and the identity will\r\nbe added to the system.'}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"windows-with-jwt",src:n(39535).A+"",width:"478",height:"498"})}),"\n",(0,r.jsx)(t.h2,{id:"authenticating",children:"Authenticating"}),"\n",(0,r.jsxs)(t.p,{children:["Once an identity is added for a network leveraging an external provider. ",(0,r.jsx)(t.a,{href:"./authenticating",children:"See Authenticating"}),"\r\nfor more details about how to authenticate to the network."]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},35358:(e,t,n)=>{n.d(t,{Ay:()=>d,RM:()=>s});var i=n(74848),r=n(28453);const s=[];function o(e){const t={code:"code",p:"p",...(0,r.R)(),...e.components};return(0,i.jsxs)(t.p,{children:["New with ZDEW 2.5.2+ and an OpenZiti Controller version 1.2+ is adding an identity to a Windows installation using\r\nexternally provided authentication. This process involves mapping an identity provided by an identity provider to\r\nan OpenZiti Identity using the ",(0,i.jsx)(t.code,{children:"external-id"})," field as well as configuring an ",(0,i.jsx)(t.code,{children:"ext-jwt-signer"}),"."]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},27763:(e,t,n)=>{n.d(t,{A:()=>j});var i=n(96540),r=n(34164),s=n(25246),o=n(9136),d=n(33535);const a={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};var l=n(74848);function c(e){return!!e&&("SUMMARY"===e.tagName||c(e.parentElement))}function h(e,t){return!!e&&(e===t||h(e.parentElement,t))}function u(e){let{summary:t,children:n,...u}=e;(0,s.A)().collectAnchor(u.id);const p=(0,o.A)(),x=(0,i.useRef)(null),{collapsed:w,setCollapsed:j}=(0,d.u)({initialState:!u.open}),[m,f]=(0,i.useState)(u.open),g=i.isValidElement(t)?t:(0,l.jsx)("summary",{children:t??"Details"});return(0,l.jsxs)("details",{...u,ref:x,open:m,"data-collapsed":w,className:(0,r.A)(a.details,p&&a.isBrowser,u.className),onMouseDown:e=>{c(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;c(t)&&h(t,x.current)&&(e.preventDefault(),w?(j(!1),f(!0)):j(!0))},children:[g,(0,l.jsx)(d.N,{lazy:!1,collapsed:w,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{j(e),f(!e)},children:(0,l.jsx)("div",{className:a.collapsibleContent,children:n})})]})}const p={details:"details_b_Ee"},x="alert alert--info";function w(e){let{...t}=e;return(0,l.jsx)(u,{...t,className:(0,r.A)(x,p.details,t.className)})}function j(e){const t=i.Children.toArray(e.children),n=t.find((e=>i.isValidElement(e)&&"summary"===e.type)),r=(0,l.jsx)(l.Fragment,{children:t.filter((e=>e!==n))});return(0,l.jsx)(w,{...e,summary:n,children:r})}},39535:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/windows-with-jwt-56c4304b25dddc244d5a457e8c561a0f.png"},98809:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/zac-ext-jwt-signer-basic-51a99f6a3e836ed6eb9ea3f4058cdcc9.png"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>d});var i=n(96540);const r={},s=i.createContext(r);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);