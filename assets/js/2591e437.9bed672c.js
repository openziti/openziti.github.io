"use strict";(self.webpackChunkdocusaurus_3=self.webpackChunkdocusaurus_3||[]).push([[2411],{17774:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>l,frontMatter:()=>r,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"reference/config-types/host.v2","title":"The host.v2 Config Type","description":"The host.v2 configuration type defines how edge routers or tunnelers can make outgoing connections","source":"@site/docs/reference/config-types/host.v2.md","sourceDirName":"reference/config-types","slug":"/reference/config-types/host.v2","permalink":"/docs/reference/config-types/host.v2","draft":false,"unlisted":false,"editUrl":"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/reference/config-types/host.v2.md","tags":[],"version":"current","sidebarPosition":20,"frontMatter":{"sidebar_label":"host.v2","sidebar_position":20},"sidebar":"docsSidebar","previous":{"title":"host.v1","permalink":"/docs/reference/config-types/host.v1"},"next":{"title":"Overview","permalink":"/docs/reference/"}}');var s=o(74848),i=o(28453);const r={sidebar_label:"host.v2",sidebar_position:20},c="The host.v2 Config Type",d={},a=[{value:"Endpoint Configuration",id:"endpoint-configuration",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsxs)(n.h1,{id:"the-hostv2-config-type",children:["The ",(0,s.jsx)(n.code,{children:"host.v2"})," Config Type"]})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"host.v2"})," configuration type defines how edge routers or tunnelers can make outgoing connections\nfor associated services. The config type also allows specifying health checks for the service. An\nendpoint in a ",(0,s.jsx)(n.code,{children:"host.v2"})," config can be specified explicitly or can be configured to use information\npassed through from a tunneler intercepting traffic, allowing it to forward traffic."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"host.v2"})," type allows defining multiple host endpoints. If only a single endpoint is required,\nconsider using the simpler ",(0,s.jsx)(n.a,{href:"/docs/reference/config-types/host.v1",children:(0,s.jsx)(n.code,{children:"host.v1"})})," config type instead."]}),"\n",(0,s.jsx)(n.h2,{id:"endpoint-configuration",children:"Endpoint Configuration"}),"\n",(0,s.jsx)(n.p,{children:"Each config can define one or more endpoints. If a service is hosted by multiple servers, the\nconfiguration can have an endpoint defined for each hosting server."}),"\n",(0,s.jsx)(n.p,{children:"Each endpoint defined will result in a terminator for each router or tunneler hosting the\napplication."}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.code,{children:"host.v2"})," configuration only has one field."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"terminators"})," - an array of ",(0,s.jsx)(n.a,{href:"/docs/reference/config-types/host.v1",children:(0,s.jsx)(n.code,{children:"host.v1"})})," entries, one per endpoint"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example"})}),"\n",(0,s.jsx)(n.p,{children:"This service is hosted by two application servers."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "terminators": [\n    {\n      "address": "192.168.100.1",\n      "port": 80,\n      "protocol": "tcp"\n    },\n    {\n      "address": "192.168.100.2",\n      "port": 80,\n      "protocol": "tcp"\n    }\n  ]\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["See the ",(0,s.jsx)(n.a,{href:"/docs/reference/config-types/host.v1",children:(0,s.jsx)(n.code,{children:"host.v1"})})," specification for what can be done with each entry."]})]})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>c});var t=o(96540);const s={},i=t.createContext(s);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);