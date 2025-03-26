"use strict";(self.webpackChunkdocusaurus_3=self.webpackChunkdocusaurus_3||[]).push([[8873],{33591:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>g,frontMatter:()=>i,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"learn/core-concepts/metrics/sequence-diagram","title":"Sequence Diagram","description":"OpenZiti systems provide a wide range of metrics for the monitoring of the network services, endpoints, and processes.  Some of the various metrics are visualized below to understand where they fall and what they measure in a network instance.  The bulk of the remaining metrics are measuring processes within the control plane, rather than network operation.","source":"@site/docs/learn/core-concepts/metrics/80-sequence-diagram.md","sourceDirName":"learn/core-concepts/metrics","slug":"/learn/core-concepts/metrics/sequence-diagram","permalink":"/docs/learn/core-concepts/metrics/sequence-diagram","draft":false,"unlisted":false,"editUrl":"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/learn/core-concepts/metrics/80-sequence-diagram.md","tags":[],"version":"current","lastUpdatedAt":1743027175000,"sidebarPosition":80,"frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Using Grafana","permalink":"/docs/learn/core-concepts/metrics/grafana"},"next":{"title":"Zero Trust Models","permalink":"/docs/learn/core-concepts/zero-trust-models/overview"}}');var s=t(74848),o=t(28453);const i={},a="Sequence Diagram",c={},d=[];function l(e){const r={h1:"h1",header:"header",mermaid:"mermaid",p:"p",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"sequence-diagram",children:"Sequence Diagram"})}),"\n",(0,s.jsx)(r.p,{children:"OpenZiti systems provide a wide range of metrics for the monitoring of the network services, endpoints, and processes.  Some of the various metrics are visualized below to understand where they fall and what they measure in a network instance.  The bulk of the remaining metrics are measuring processes within the control plane, rather than network operation."}),"\n",(0,s.jsx)(r.mermaid,{value:"sequenceDiagram\ntitle Metrics\n\nparticipant Initiating SDK\nparticipant Edge Router 1\nparticipant Network Controller\nparticipant Edge Router 2\nparticipant Terminating SDK\n\n\n\n\nInitiating SDK ->>Edge Router 1 : ingress rx\n\n\nEdge Router 2 ->>Terminating SDK :egress tx\n\nnote over Initiating SDK, Edge Router 1 : ingress.rx.bytesrate<br>ingress.rx.msgrate<br>ingress.rx.msgsize <br>\nnote over Terminating SDK, Edge Router 2 : ingress.tx.bytesrate<br>ingress.tx.msgrate<br>ingress.tx.msgsize <br>\n\nEdge Router 1 ->> Initiating SDK: ingress tx\nTerminating SDK ->>Edge Router 2 : egress rx\n\nnote over Terminating SDK, Edge Router 2 : egress.rx.bytesrate<br>egress.rx.msgrate<br>egress.rx.msgsize <br>\nnote over Initiating SDK, Edge Router 1 : egress.tx.bytesrate<br>egress.tx.msgrate<br>egress.tx.msgsize <br>\npar \n    Network Controller ->>Edge Router 1 : \nand \n    Edge Router 1 ->>Network Controller : Control Channel (ctrl)\nend\npar \n    Network Controller ->>Edge Router 2 : \nand \n    Edge Router 2 ->>Network Controller : Control Channel (ctrl)\nend\n\n\nnote over Edge Router 1, Network Controller : ctrl.latency<br>ctrl.queue_time<br>ctrl.rx.bytesrate<br>ctrl.rx.msgrate<br>ctrl.rx.msgsize<br>ctrl.tx.bytesrate<br>ctrl.tx.msgrate<br>ctrl.tx.msgsize\n\n\nEdge Router 2 ->>Edge Router 1 : \nEdge Router 1 ->>Edge Router 2 : link\n\nnote over Edge Router 1, Edge Router 2 :link.latency<br>link.queue_time<br>link.rx.bytesrate<br>link.rx.msgrate<br>link.rx.msgsize<br>link.tx.bytesrate<br>link.tx.msgrate<br>link.tx.msgsize"})]})}function g(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>a});var n=t(96540);const s={},o=n.createContext(s);function i(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);