"use strict";(self.webpackChunkdocusaurus_3=self.webpackChunkdocusaurus_3||[]).push([[8121],{34505:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"learn/core-concepts/config-store/overview","title":"Service Configurations","description":"Ziti Service Configurations, henceforth \\"Configs\\", may be associated with a service to provide metadata for the application that is being delivered by that service.","source":"@site/docs/learn/core-concepts/config-store/overview.md","sourceDirName":"learn/core-concepts/config-store","slug":"/learn/core-concepts/config-store/overview","permalink":"/docs/learn/core-concepts/config-store/overview","draft":false,"unlisted":false,"editUrl":"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/learn/core-concepts/config-store/overview.md","tags":[],"version":"current","lastUpdatedAt":1743027175000,"frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Services","permalink":"/docs/learn/core-concepts/services/overview"},"next":{"title":"Tunneler Config Type host.v1","permalink":"/docs/learn/core-concepts/config-store/config-type-host-v1"}}');var r=i(74848),t=i(28453);const o={},c="Service Configurations",l={},a=[{value:"Overview",id:"overview",level:2},{value:"Tunneler Config Types",id:"tunneler-config-types",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"service-configurations",children:"Service Configurations"})}),"\n",(0,r.jsx)(n.p,{children:'Ziti Service Configurations, henceforth "Configs", may be associated with a service to provide metadata for the application that is being delivered by that service.'}),"\n",(0,r.jsx)(n.p,{children:"Configs are created and updated through the edge-management API and consumed by edge SDKs through the edge-client API. Configs and Config Types are Ziti entities. Each Config is an instance of a Config Type."}),"\n",(0,r.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(n.p,{children:"The configuration store has several components:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Config Types"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Config Types define a type of Config, including an optional JSON schema that the configuration data must conform to."}),"\n",(0,r.jsxs)(n.li,{children:["Config Types have the following properties:","\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"A Config Type name"}),"\n",(0,r.jsx)(n.li,{children:"An optional JSON schema to validate configurations of the type"}),"\n",(0,r.jsx)(n.li,{children:"Standard edge entity properties: id, tags, createdAt, updatedAt"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Configs"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Configs have the following properties:","\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"A Config name"}),"\n",(0,r.jsx)(n.li,{children:"The configuration data, which is arbitrary JSON data, so long as it conforms to the type schema (if specified)"}),"\n",(0,r.jsx)(n.li,{children:"Standard edge entity properties: id, tags, createdAt, updatedAt"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Services"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Each service can be linked to multiple Configs. Services can have one linked Config for each Config Type."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Identities"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"An identity may have a Config specified for a given service and Config. This will override the service's linked Configs."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"This configuration model has the following properties:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Different applications can have their own Configs for the same service"}),"\n",(0,r.jsx)(n.li,{children:"Applications can have multiple Config Types for themselves where it makes sense"}),"\n",(0,r.jsx)(n.li,{children:"There are tunneler Config Types for intercept (client) side and hosting (server) side"}),"\n",(0,r.jsx)(n.li,{children:"Since an application can support multiple Config Types, applications can version their Config Types as their needs change"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"tunneler-config-types",children:"Tunneler Config Types"}),"\n",(0,r.jsx)(n.p,{children:"The Ziti tunnelers are themselves SDK applications and so they serve as an example of how configuration data can be used."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Tunnelers need to know what ip/dns and port(s) to intercept for services they are proxying on the intercept (client) side"}),"\n",(0,r.jsx)(n.li,{children:"Tunnelers need to know where to forward to destination servers on the hosting (server) side"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Ziti provides a handful of tunneler Config Types."}),"\n",(0,r.jsx)(n.p,{children:"The most relevant Config Types:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/docs/learn/core-concepts/config-store/config-type-intercept-v1",children:(0,r.jsx)(n.code,{children:"intercept.v1"})}),": used by a tunneler to configure itself as a proxy for a particular service"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/docs/learn/core-concepts/config-store/config-type-host-v1",children:(0,r.jsx)(n.code,{children:"host.v1"})}),": describes the destination server for a Ziti service hosted by a tunneler"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Other Config Types:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"host.v2"}),": an array of ",(0,r.jsx)(n.code,{children:"host.v1"})," Configs"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ziti-tunneler-client.v1"}),": predecessor of ",(0,r.jsx)(n.code,{children:"intercept.v1"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ziti-tunneler-server.v1"}),": predecessor of ",(0,r.jsx)(n.code,{children:"host.v1"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The tunneler Config Types' schemas are maintained ",(0,r.jsx)(n.a,{href:"https://github.com/openziti/ziti/blob/main/tunnel/entities/",children:"in GitHub"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>c});var s=i(96540);const r={},t=s.createContext(r);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);