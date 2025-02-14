"use strict";(self.webpackChunkdocusaurus_3=self.webpackChunkdocusaurus_3||[]).push([[7775],{8143:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"reference/logging","title":"Logging","description":"This article is about log messages from the ziti CLI that is used to run the controller and router. See the Linux tunneler reference for details about messages from ziti-edge-tunnel.","source":"@site/docs/reference/40-logging.mdx","sourceDirName":"reference","slug":"/reference/logging","permalink":"/docs/reference/logging","draft":false,"unlisted":false,"editUrl":"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/reference/40-logging.mdx","tags":[],"version":"current","sidebarPosition":40,"frontMatter":{"title":"Logging"},"sidebar":"docsSidebar","previous":{"title":"CLI","permalink":"/docs/reference/command-line/login"},"next":{"title":"Builtin Config Types","permalink":"/docs/reference/config-types/"}}');var o=t(74848),i=t(28453);const s={title:"Logging"},l=void 0,c={},d=[{value:"Levels",id:"levels",level:2},{value:"Formats",id:"formats",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["This article is about log messages from the ",(0,o.jsx)(n.code,{children:"ziti"})," CLI that is used to run the controller and router. See ",(0,o.jsx)(n.a,{href:"/docs/reference/tunnelers/linux/linux-tunnel-troubleshooting",children:"the Linux tunneler reference"})," for details about messages from ",(0,o.jsx)(n.code,{children:"ziti-edge-tunnel"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"levels",children:"Levels"}),"\n",(0,o.jsxs)(n.p,{children:["The default log level is ",(0,o.jsx)(n.code,{children:"INFO"}),". This means that log messages ",(0,o.jsx)(n.code,{children:"INFO"}),", ",(0,o.jsx)(n.code,{children:"WARNING"}),", ",(0,o.jsx)(n.code,{children:"ERROR"}),", and ",(0,o.jsx)(n.code,{children:"FATAL"})," will all be emitted. Enable verbose logging by adding ",(0,o.jsx)(n.code,{children:"--verbose or -v"})," to the command being executed. Verbose mode will additionally emit ",(0,o.jsx)(n.code,{children:"DEBUG"})," messages."]}),"\n",(0,o.jsx)(n.h2,{id:"formats",children:"Formats"}),"\n",(0,o.jsxs)(n.p,{children:["Adjust the log format with option ",(0,o.jsx)(n.code,{children:"--log-formatter"})," (",(0,o.jsx)(n.code,{children:"json"}),", ",(0,o.jsx)(n.code,{children:"text"}),", ",(0,o.jsx)(n.code,{children:"pfxlog"}),")."]}),"\n",(0,o.jsxs)(n.p,{children:["The default log format is ",(0,o.jsx)(n.code,{children:"json"})," when is running in the background (no tty)."]}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:'{"file":"github.com/openziti/ziti/controller/network/network.go:927","func":"github.com/openziti/ziti/controller/network.(*Network).Run","level":"info","msg":"started","time":"2024-05-22T09:20:06.423Z"}\n'})}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"text"})," format has the same level of detail and is the default when running in the foreground (with tty)."]}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:'time="2024-05-22T09:23:27-04:00" level=info msg=started func="github.com/openziti/ziti/controller/network.(*Network).Run" file="github.com/openziti/ziti/controller/network/network.go:927"\n'})}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsxs)(n.p,{children:["The simplified, human-friendly format is ",(0,o.jsx)(n.code,{children:"pfxlog"}),". This format can also be enabled by setting environment variable ",(0,o.jsx)(n.code,{children:"PFXLOG_NO_JSON=true"}),"."]}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"INFO ziti/controller/network.(*Network).Run: started\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var r=t(96540);const o={},i=r.createContext(o);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);