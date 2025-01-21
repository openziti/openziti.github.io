"use strict";(self.webpackChunkdocusaurus_3=self.webpackChunkdocusaurus_3||[]).push([[6375],{10659:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"learn/core-concepts/clients/process-sequences/EndpointInitialization","title":"Endpoint  Initialization","description":"Steps","source":"@site/docs/learn/core-concepts/clients/process-sequences/EndpointInitialization.md","sourceDirName":"learn/core-concepts/clients/process-sequences","slug":"/learn/core-concepts/clients/process-sequences/EndpointInitialization","permalink":"/docs/learn/core-concepts/clients/process-sequences/EndpointInitialization","draft":false,"unlisted":false,"editUrl":"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/learn/core-concepts/clients/process-sequences/EndpointInitialization.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Process Sequences","permalink":"/docs/category/process-sequences"},"next":{"title":"Endpoint Registration","permalink":"/docs/learn/core-concepts/clients/process-sequences/EndpointRegistration"}}');var o=t(74848),r=t(28453);const s={},c="Endpoint  Initialization",l={},a=[{value:"Steps",id:"steps",level:2}];function d(e){const n={h1:"h1",h2:"h2",header:"header",li:"li",mermaid:"mermaid",ol:"ol",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"endpoint--initialization",children:"Endpoint  Initialization"})}),"\n",(0,o.jsx)(n.mermaid,{value:"sequenceDiagram\ntitle Endpoint Initialization\n\nparticipant Endpoint\nparticipant Controller\nparticipant Edge Router\nautonumber 1\n\nnote over Endpoint : Load config.json\nnote over Endpoint  : Create TUN Device\nnote over Endpoint  : Create route for\\n 100.64.0.0 to TUN\nnote over Endpoint  : Initialize DNS Service\nnote over Endpoint  : Load Identity\nnote over Endpoint  : Initialize Logging\nEndpoint->>Controller : Connect\nController->>Endpoint : Network / Service Configuration\nEndpoint->>Edge Router : Connect Channel(s)\nnote over Endpoint : Process Services <br> Insert DNS Names <br> Create routes to \\n 100.64.0.0 IPs\nnote over Endpoint,Edge Router : Monitor Latency\nnote over Endpoint,Controller : Poll for Updates"}),"\n",(0,o.jsx)(n.h2,{id:"steps",children:"Steps"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Init - Load config.json"}),"\n",(0,o.jsx)(n.li,{children:"Create TUN device"}),"\n",(0,o.jsx)(n.li,{children:"Create route for 100.64.0.0 network to TUN"}),"\n",(0,o.jsx)(n.li,{children:"Initialize DNS service"}),"\n",(0,o.jsx)(n.li,{children:"Load identity"}),"\n",(0,o.jsx)(n.li,{children:"Initialize logging"}),"\n",(0,o.jsx)(n.li,{children:"Connect to controller"}),"\n",(0,o.jsx)(n.li,{children:"Download network configuration"}),"\n",(0,o.jsx)(n.li,{children:"Initialize Channels to Edge Routers"}),"\n",(0,o.jsxs)(n.li,{children:["Initialize Services","\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Insert DNS names"}),"\n",(0,o.jsx)(n.li,{children:"Create routes for IPs to 100.64.0.0 block"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.li,{children:"Collect latency information for ER selection"}),"\n",(0,o.jsx)(n.li,{children:"Complete DNS initialization with Service names"}),"\n",(0,o.jsx)(n.li,{children:"Periodically check for updates to services or other network config.  Polling controlled by app, including desktop edges and tunnelers, 10 or 15 seconds in OpenZiti released software."}),"\n",(0,o.jsx)(n.li,{children:"Update services, add or delete Edge Routers, etc. as necessary."}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var i=t(96540);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);