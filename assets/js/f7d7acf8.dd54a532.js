"use strict";(self.webpackChunkdocusaurus_3=self.webpackChunkdocusaurus_3||[]).push([[6863],{99405:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"learn/core-concepts/security/connection-security","title":"Connection Security","description":"Ziti networks use robust modern cryptography and security mechanisms. Each component within a Ziti network uses","source":"@site/docs/learn/core-concepts/security/connection-security.md","sourceDirName":"learn/core-concepts/security","slug":"/learn/core-concepts/security/connection-security","permalink":"/docs/learn/core-concepts/security/connection-security","draft":false,"unlisted":false,"editUrl":"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/learn/core-concepts/security/connection-security.md","tags":[],"version":"current","lastUpdatedAt":1743027175000,"frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Session Diagram","permalink":"/docs/learn/core-concepts/security/SessionsAndConnections"},"next":{"title":"Enrollment","permalink":"/docs/learn/core-concepts/security/enrollment"}}');var t=s(74848),c=s(28453);const o={},r="Connection Security",a={},d=[{value:"Control and Link Connection Details",id:"control-and-link-connection-details",level:2},{value:"Controller API Connection Details",id:"controller-api-connection-details",level:2},{value:"Edge Connection Details",id:"edge-connection-details",level:2},{value:"Service Connection Details",id:"service-connection-details",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"connection-security",children:"Connection Security"})}),"\n",(0,t.jsx)(n.p,{children:"Ziti networks use robust modern cryptography and security mechanisms. Each component within a Ziti network uses\nsecurity technology that fits its role and use-cases."}),"\n",(0,t.jsx)(n.p,{children:"Here are the different types of connections:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"control"})," -  connections between a controller and a router that manage network state. Secured via mTLS 1.2+"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"link"})," - connections between routers to form a mesh network. Secured via mTLS 1.2+"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"edge"})," - multiplexed connections between an SDK and an edge router that carries ",(0,t.jsx)(n.code,{children:"service"})," connections. Secured via mTLS 1.2+"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"controller APIs"})," - connections between a controller and an SDK (or other software) via HTTPS and/or secure websockets. Secured via TLS, mTLS 1.2+"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"service"})," - connections carried by an ",(0,t.jsx)(n.code,{children:"edge"})," connection and establish communication between a client and host. Application data is end-to-end encrypted via libsodium public private key cryptography."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Below is a diagram showing the ",(0,t.jsx)(n.code,{children:"control"}),", ",(0,t.jsx)(n.code,{children:"link"}),", ",(0,t.jsx)(n.code,{children:"edge"}),", and ",(0,t.jsx)(n.code,{children:"controller API"})," connections. The ",(0,t.jsx)(n.code,{children:"service"})," connections\nexist within an ",(0,t.jsx)(n.code,{children:"edge"})," connection and are pictured in more detail in the second diagram."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(22526).A+"",children:(0,t.jsx)(n.img,{alt:"image",src:s(26239).A+"",width:"2755",height:"1300"})})}),"\n",(0,t.jsxs)(n.p,{children:["Connections between SDKs and Edge Routers are called ",(0,t.jsx)(n.code,{children:"edge"})," connections. ",(0,t.jsx)(n.code,{children:"edge"})," connections are multiplexed and carry\nmultiple ",(0,t.jsx)(n.code,{children:"service"})," connections. Each connection is for a specific service and secured with end-to-end encryption in\norder to transport application/service data securely between the two intended parties only."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(80062).A+"",children:(0,t.jsx)(n.img,{alt:"image",src:s(72169).A+"",width:"2067",height:"793"})})}),"\n",(0,t.jsx)(n.h2,{id:"control-and-link-connection-details",children:"Control and Link Connection Details"}),"\n",(0,t.jsxs)(n.p,{children:["Routers work in concert with a controller to establish a mesh network of ",(0,t.jsx)(n.code,{children:"link"})," connections between routers. Routers coordinate\nwith a controller over a ",(0,t.jsx)(n.code,{children:"control"})," connection. These connections are initialized and maintained while the network is in\noperation. ",(0,t.jsx)(n.code,{children:"control"})," and ",(0,t.jsx)(n.code,{children:"link"})," connections are always authenticated using mTLS. The certificates that enable mTLS\nfor ",(0,t.jsx)(n.code,{children:"control"})," connections are exchanged during router enrollment. The ",(0,t.jsx)(n.code,{children:"control"})," connection between controllers and\nEdge Routers is used to continuously update routers with the proper certificate information for all other routers in\nthe mesh."]}),"\n",(0,t.jsx)(n.h2,{id:"controller-api-connection-details",children:"Controller API Connection Details"}),"\n",(0,t.jsxs)(n.p,{children:["Controller APIs provide ways for clients (SDKs or otherwise) to interact with a network. The ",(0,t.jsx)(n.a,{href:"/docs/reference/developer/api/edge-management-reference",children:"edge management API"}),"\nis used for configuration and maintenance. The ",(0,t.jsx)(n.a,{href:"/docs/reference/developer/api/edge-client-reference",children:"edge client API"}),"\nis used to allow clients to authenticate, discover services, request ",(0,t.jsx)(n.a,{href:"/docs/learn/core-concepts/security/sessions#session",children:"Sessions"}),",\ndiscover Edge Routers, and to perform basic self-maintenance."]}),"\n",(0,t.jsxs)(n.p,{children:["Access to the APIs requires ",(0,t.jsx)(n.a,{href:"/docs/learn/core-concepts/security/authentication/auth",children:"authentication"})," which results in an ",(0,t.jsx)(n.a,{href:"/docs/learn/core-concepts/security/authentication/auth#api-sessions",children:"API Session"}),"\nbeing returned to the client. An ",(0,t.jsx)(n.a,{href:"/docs/learn/core-concepts/security/authentication/auth#api-sessions",children:"API Session"})," is required to make ",(0,t.jsx)(n.code,{children:"edge"})," connections."]}),"\n",(0,t.jsx)(n.h2,{id:"edge-connection-details",children:"Edge Connection Details"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"edge"})," connections are made between SDKs and Edge Routers. They require the following:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["a valid ",(0,t.jsx)(n.a,{href:"/docs/learn/core-concepts/security/authentication/auth#api-sessions",children:"API Session"})," represented by a token"]}),"\n",(0,t.jsxs)(n.li,{children:["a valid x509 certificate associated with the supplied ",(0,t.jsx)(n.a,{href:"/docs/learn/core-concepts/security/authentication/auth#api-sessions",children:"API Session"})]}),"\n",(0,t.jsx)(n.li,{children:"a target Edge Router"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["An ",(0,t.jsx)(n.a,{href:"/docs/learn/core-concepts/security/authentication/auth#api-sessions",children:"API Session"})," is obtained during authentication with either the edge client\nor management APIs. It is represented as a token. The x509 certificate used to establish the mTLS connection may\neither be the certificate used during authentication (if used) or an ",(0,t.jsx)(n.a,{href:"/docs/learn/core-concepts/security/authentication/api-session-certificates",children:"API Session Certificate"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"edge"})," connections once establish allow the use of ",(0,t.jsx)(n.a,{href:"/docs/learn/core-concepts/security/sessions#session",children:"Session"})," tokens to establish\n",(0,t.jsx)(n.code,{children:"service"})," connections. When a ",(0,t.jsx)(n.a,{href:"/docs/learn/core-concepts/security/sessions#session",children:"Session"})," is created, a list of valid Edge Router\nis included in the response."]}),"\n",(0,t.jsx)(n.h2,{id:"service-connection-details",children:"Service Connection Details"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"service"})," connections represent an SDK that has connected to a service (dial) or is hosting a service (bind). To\nestablish a ",(0,t.jsx)(n.code,{children:"service"})," connection of either type the following is required:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["an ",(0,t.jsx)(n.code,{children:"edge"})," connection to an edge router that has the correct policies in place to support the target service and intent (dial/bind)"]}),"\n",(0,t.jsxs)(n.li,{children:["a ",(0,t.jsx)(n.a,{href:"/docs/learn/core-concepts/security/sessions#session",children:"Session"})," for the target service and intent (dial/bind)"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/learn/core-concepts/security/sessions#session",children:"Sessions"})," are issued by the controller's edge client API. A valid ",(0,t.jsx)(n.a,{href:"/docs/learn/core-concepts/security/sessions#session",children:"Sessions"})," token\nmust be included with dial and bind requests. Edge Routers validate API Session tokens continuously. If valid, the Edge\nRouter will facilitate the connecting the client to a service or registering the client as a host."]}),"\n",(0,t.jsxs)(n.p,{children:["Should a ",(0,t.jsx)(n.a,{href:"/docs/learn/core-concepts/security/sessions#session",children:"Session"})," become invalid at any point, any existing ",(0,t.jsx)(n.code,{children:"service"})," connection that\nwas established using the invalidated Session will be terminated. Attempts to re-establish connection with the\ninvalidated ",(0,t.jsx)(n.a,{href:"/docs/learn/core-concepts/security/sessions#session",children:"Session"})," will be refused."]})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},80062:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/files/connections-edge-sdk-sdk-0f9f5a0ab982015fb9b67b5cfb807715.png"},22526:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/files/connections-585b0f4d2d57d592e45386d4f39e7c58.png"},72169:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/connections-edge-sdk-sdk-0f9f5a0ab982015fb9b67b5cfb807715.png"},26239:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/connections-585b0f4d2d57d592e45386d4f39e7c58.png"},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>r});var i=s(96540);const t={},c=i.createContext(t);function o(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);