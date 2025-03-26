"use strict";(self.webpackChunkdocusaurus_3=self.webpackChunkdocusaurus_3||[]).push([[4618],{71822:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"learn/core-concepts/security/SessionsAndConnections","title":"Sessions and Connections Sequence Diagram","description":"OpenZiti has a number of different connection and session types.  It is important to understand the different scopes and uses of these connections in working with the project, developing, operating, and most importantly, troubleshooting.","source":"@site/docs/learn/core-concepts/security/SessionsAndConnections.md","sourceDirName":"learn/core-concepts/security","slug":"/learn/core-concepts/security/SessionsAndConnections","permalink":"/docs/learn/core-concepts/security/SessionsAndConnections","draft":false,"unlisted":false,"editUrl":"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/learn/core-concepts/security/SessionsAndConnections.md","tags":[],"version":"current","lastUpdatedAt":1743027175000,"frontMatter":{"sidebar_label":"Session Diagram"},"sidebar":"docsSidebar","previous":{"title":"Posture Checks","permalink":"/docs/learn/core-concepts/security/authorization/posture-checks"},"next":{"title":"Connection Security","permalink":"/docs/learn/core-concepts/security/connection-security"}}');var i=t(74848),r=t(28453);const s={sidebar_label:"Session Diagram"},a="Sessions and Connections Sequence Diagram",c={},d=[{value:"Control Plane",id:"control-plane",level:2},{value:"Data Plane",id:"data-plane",level:2}];function l(e){const n={h1:"h1",h2:"h2",header:"header",li:"li",mermaid:"mermaid",ol:"ol",p:"p",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"sessions-and-connections-sequence-diagram",children:"Sessions and Connections Sequence Diagram"})}),"\n",(0,i.jsx)(n.p,{children:"OpenZiti has a number of different connection and session types.  It is important to understand the different scopes and uses of these connections in working with the project, developing, operating, and most importantly, troubleshooting."}),"\n",(0,i.jsx)(n.mermaid,{value:"sequenceDiagram\ntitle Ziti Sessions and Connections\n\nparticipant Client Application\nparticipant SDK 1\nparticipant Edge Router 1\nparticipant Network Controller\nparticipant Edge Router 2\nparticipant SDK 2\nparticipant Application Server\n\npar Control Plane\n\tSDK 1 ->> Network Controller: API Session\nand \n\tSDK 2 ->>Network Controller: API Session\nand \n\tEdge Router 1 ->> Network Controller: API Session\nand \n\tEdge Router 2 ->> Network Controller: API Session\nend\n\npar Edge Control Plane\n\tSDK 1 ->> Network Controller: \nand \n\tSDK 2 ->>Network Controller: Session (per service)\nand \n\tEdge Router 1 ->> Network Controller: Session (per service)\nand \n\tEdge Router 2 ->> Network Controller: Session (per service)\nend\n\npar Data Plane (TCP)\n\tClient Application ->> SDK 1 : TCP Connection\nand\n\tServer Application ->> SDK 2 : TCP Connection\nend\n\npar Data Plane (Edge)\n\tSDK 1 ->> Edge Router 1: Conn\nand \n\tEdge Router 2 ->> SDK 2: Conn\nend\n\nEdge Router 1 ->> Edge Router 2: Circuit"}),"\n",(0,i.jsx)(n.h2,{id:"control-plane",children:"Control Plane"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"The API Session is the first and primary session between and endpoint and the OpenZiti network instance.  This session is created during attachment, after validating the certificates in both directions, and the endpoint name.  This makes the endpoint present on the network, and all endpoints and routers have API sessions to the Controller(s)"}),"\n",(0,i.jsx)(n.li,{children:"The Session is created with the API Session authorization, and is specific to each service configured for the endpoint.  The Session object holds information such as the service policies, parent API Session, service ID, and other information the endpoint and network require to properly service each given service."}),"\n",(0,i.jsx)(n.li,{children:"Channels are formed between the endpoint and each edge router available and within the policies.  These channels are monitored for latency to select best path, and are the control connections for incoming connections for hosted services."}),"\n",(0,i.jsx)(n.li,{children:"Links connect Edge Routers logically.  Edge Routers can advertise a listener socket, which is distributed during client initialization to other Edge Routers.  All Edge Routers will attach to all others in a mesh, provided the policy dictates/allows it.  Each pair of routers will have one link per link type (TLS, WSS, etc.)  Links are a split connection, having both control plane and data plane messaging."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"data-plane",children:"Data Plane"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"The TCP connections at either end of an OpenZiti connection are dependent on the implementation model.  If Tunnelers, or edge router with embedded Tunnelers are used, and the end device makes a TCP connection to gain entry to the OpenZiti network.  If the endpoints, both dialing and binding, or either one, is fully embedded via the SDK, these connections will not exist."}),"\n",(0,i.jsx)(n.li,{children:"The Connection is the flow specific connection between the endpoint and the initial Edge Router.  Each service invocation will create an independent Connection, and data will flow over this to the Edge Router"}),"\n",(0,i.jsx)(n.li,{children:"The Fabric Circuit is the path in the network from initial to terminating Edge Router, comprised of one more more Edge Routers, and zero or more Links. (An initiating edge router may have a local terminator for the service)"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"These terms in their full and abbreviated forms appear in logs, metrics, and software, and are therefore critical terminology to understand networks."})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var o=t(96540);const i={},r=o.createContext(i);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);