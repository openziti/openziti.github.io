"use strict";(self.webpackChunkdocusaurus_3=self.webpackChunkdocusaurus_3||[]).push([[4148],{48319:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"learn/core-concepts/data-flow-explainer","title":"Data Flow Explainer","description":"This explainer walks through how data flow is established in an OpenZiti network.","source":"@site/docs/learn/core-concepts/data-flow-explainer.md","sourceDirName":"learn/core-concepts","slug":"/learn/core-concepts/data-flow-explainer","permalink":"/docs/learn/core-concepts/data-flow-explainer","draft":false,"unlisted":false,"editUrl":"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/learn/core-concepts/data-flow-explainer.md","tags":[],"version":"current","lastUpdatedAt":1743027175000,"sidebarPosition":30,"frontMatter":{"title":"Data Flow Explainer","sidebar_position":30},"sidebar":"docsSidebar","previous":{"title":"Network Access","permalink":"/docs/learn/core-concepts/zero-trust-models/ztna"},"next":{"title":"Ziti Security","permalink":"/docs/learn/core-concepts/security/overview"}}');var s=n(74848),o=n(28453);const r={title:"Data Flow Explainer",sidebar_position:30},a=void 0,l={},c=[{value:"Baseline",id:"baseline",level:2},{value:"Control Channels",id:"control-channels",level:2},{value:"Data Links",id:"data-links",level:2},{value:"Terminators/Last Hop",id:"terminatorslast-hop",level:2},{value:"Static Terminators",id:"static-terminators",level:3},{value:"SDK Hosted",id:"sdk-hosted",level:3},{value:"Edge Router Hosted",id:"edge-router-hosted",level:3},{value:"Client Connections",id:"client-connections",level:2},{value:"Authentication",id:"authentication",level:3},{value:"Create Session",id:"create-session",level:3},{value:"Connect to Edge Routers",id:"connect-to-edge-routers",level:3},{value:"Dial the Service",id:"dial-the-service",level:3},{value:"Established Circuit",id:"established-circuit",level:3}];function h(e){const t={code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"This explainer walks through how data flow is established in an OpenZiti network."}),"\n",(0,s.jsx)(t.h2,{id:"baseline",children:"Baseline"}),"\n",(0,s.jsx)(t.p,{children:"This diagram shows the components of the example network."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"image",src:n(78963).A+"",width:"1043",height:"450"})}),"\n",(0,s.jsx)(t.p,{children:"It has the following components:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"An OpenZiti controller"}),"\n",(0,s.jsx)(t.li,{children:"Two OpenZiti routers that are available via the public internet"}),"\n",(0,s.jsxs)(t.li,{children:["Two private networks, each containing a router and an application server","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"The application servers are serving up the same application. There are multiple servers, so\nthat load can be spread across them. They are in separate regions to ensure that the\napplication can still be accessed, even if a datacenter becomes unavailable."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.li,{children:"An SDK application which wants to access the application hosted by the application servers"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"control-channels",children:"Control Channels"}),"\n",(0,s.jsx)(t.p,{children:"When a router starts up it will attempt to make a connection to the controller(s) in its\nconfiguration file. This establishes the control plane, which allows controllers to update router\nstate as needed and allows routers to report changes, metrics and events back to the controller."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"image",src:n(71325).A+"",width:"1043",height:"450"})}),"\n",(0,s.jsx)(t.h2,{id:"data-links",children:"Data Links"}),"\n",(0,s.jsx)(t.p,{children:"Once a router is connected to the controller, the controller will inform the router of other routers\nalong with information about if and how those routers are listening for data links connections. The\nrouter will then attempt to establish data links to other routers, so it can participate in the data\nmesh."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"image",src:n(41609).A+"",width:"1043",height:"450"})}),"\n",(0,s.jsx)(t.h2,{id:"terminatorslast-hop",children:"Terminators/Last Hop"}),"\n",(0,s.jsx)(t.p,{children:"Data links establish inter-router connectivity, but a way to establish connectivity to the\napplication servers is still needed. The service definition on its own doesn't specify how to\nconnections to the application servers should be made. Connectivity to the application servers is\nhandled by terminators."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"image",src:n(72170).A+"",width:"1043",height:"450"})}),"\n",(0,s.jsx)(t.p,{children:"There are three common ways in which this is done."}),"\n",(0,s.jsx)(t.h3,{id:"static-terminators",children:"Static Terminators"}),"\n",(0,s.jsx)(t.p,{children:"A static terminator can be created by an OpenZiti admin. The terminator will specify the address to\ndial. Statically created terminators will exist until they are deleted or their related service or\nrouter is deleted."}),"\n",(0,s.jsx)(t.h3,{id:"sdk-hosted",children:"SDK Hosted"}),"\n",(0,s.jsx)(t.p,{children:"When an SDK application hosts (or binds, in OpenZiti terms) a service, it will first connect to one\nor more edge routers. It can then request those edge routers to create terminators on its behalf.\nWhen the SDK app disconnects from the edge router, the terminator will automatically be cleaned up."}),"\n",(0,s.jsxs)(t.p,{children:["The SDK application may handle incoming connections itself, or if it's acting as a reverse proxy, it\nmay bridge the connection to another application server. The OpenZiti tunneler applications can do\nthis and will use the ",(0,s.jsx)(t.code,{children:"host.v1"})," or ",(0,s.jsx)(t.code,{children:"host.v2"})," configurations to define how and where connections are\nforwarded to and what kind of health checks to run."]}),"\n",(0,s.jsx)(t.h3,{id:"edge-router-hosted",children:"Edge Router Hosted"}),"\n",(0,s.jsxs)(t.p,{children:["Edge routers running in tunneler mode (ER/T) can also host services by acting as a reverse proxy.\nThey will also use the ",(0,s.jsx)(t.code,{children:"host.v1"})," and ",(0,s.jsx)(t.code,{children:"host.v2"})," configurations, same as the SDK based tunnelers. An\nER/T will create and delete terminators as services, configurations and policies are created,\nupdated or deleted."]}),"\n",(0,s.jsx)(t.h2,{id:"client-connections",children:"Client Connections"}),"\n",(0,s.jsx)(t.p,{children:"When an SDK wants to connect to an OpenZiti hosted service, it will initiate the following sequence\nof events:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Authenticate to the controller"}),"\n",(0,s.jsx)(t.li,{children:"Create a Session for the desired service"}),"\n",(0,s.jsx)(t.li,{children:"Connect to one or more edge routers"}),"\n",(0,s.jsx)(t.li,{children:"Send a Dial request to the selected edge router"}),"\n",(0,s.jsx)(t.li,{children:"The edge router will send a create circuit request to the controller"}),"\n",(0,s.jsx)(t.li,{children:"The controller will find the least expensive path"}),"\n",(0,s.jsx)(t.li,{children:"The controller will send route updates to non-terminal elements of the path"}),"\n",(0,s.jsx)(t.li,{children:"The controller will instruct the terminating router to dial the service"}),"\n",(0,s.jsx)(t.li,{children:"Once the circuit is established, data can begin to flow"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"authentication",children:"Authentication"}),"\n",(0,s.jsx)(t.p,{children:"As a first step, the SDK must be authenticated to the controller. The result of a successful\nauthentication is an API Session. The SDK will use the API Session to make additional requests to\nthe control and to authenticate with edge routers. In order for edge routers to be able to verify\nAPI Sessions from connecting SDKs, the controller must inform routers of each new API Session as\nthey are created."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"image",src:n(21799).A+"",width:"1043",height:"450"})}),"\n",(0,s.jsx)(t.p,{children:"An API Session can be extended, so a single API Session can generally be used for the lifetime of\nthe application. A new API Session may be required if the application is unable to reach the\ncontroller for an extended period of time."}),"\n",(0,s.jsx)(t.h3,{id:"create-session",children:"Create Session"}),"\n",(0,s.jsx)(t.p,{children:"The SDK must now create a Session. When creating a Session, the controller will\nverify that the identity used by the SDK has permission to access the service. The controller will\nalso see which edge routers can be used to access the session. The set of edge routers will be\nreturned along with the Session token."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"image",src:n(18096).A+"",width:"1043",height:"450"})}),"\n",(0,s.jsx)(t.h3,{id:"connect-to-edge-routers",children:"Connect to Edge Routers"}),"\n",(0,s.jsx)(t.p,{children:"The returned Session contains the edge routers that can be used for this service along with\nthe address or addresses that each router is listening on for SDK connections. The SDK will connect\nto the edge routers and use whichever one connects the fastest. The edge router connections are not\nper-service, but will be shared by all services. If the connections are already made, the SDK will\nprefer connections with lower latency."}),"\n",(0,s.jsx)(t.p,{children:"The connection is made with mutual TLS. The SDK will also provide the API Session token to the edge\nrouters, allowing them to validate the connection. When the API Session becomes invalid, edge\nrouters will be notified and connections associated with that API Session will be terminated."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"image",src:n(92694).A+"",width:"1043",height:"450"})}),"\n",(0,s.jsx)(t.h3,{id:"dial-the-service",children:"Dial the Service"}),"\n",(0,s.jsx)(t.p,{children:"The SDK will pick an edge router and send it a Dial request for desired service along with the\nSession token. The edge router selected is known as the initiating router. The edge router\nwill translate this into a 'create circuit' request to the controller. The controller will select a\npath and will message the routers in the path, so they can update their routing tables and/or make\nconnections to application servers as necessary."}),"\n",(0,s.jsx)(t.p,{children:"The path will be selected based on the cost of the terminators available on that service, plus the\ncost of the routers and links from the initiating router to the terminator's router. The last router\nin the path is called the terminating router."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Router costs can be set via the management API. There is also a configurable minimum router cost.\nA minimum cost will prevent paths from adding unnecessary hops or from bouncing between two\nsimilar paths."}),"\n",(0,s.jsx)(t.li,{children:"Link costs are currently based on the link's round-trip latency"}),"\n",(0,s.jsx)(t.li,{children:"Terminators have a static cost which can be managed via the management API for static terminators,\nor via the SDK for dynamic terminators."}),"\n",(0,s.jsx)(t.li,{children:"Terminators also have a dynamic cost. The more circuits on a terminator, the higher the cost. As\ncircuits are torn down, the cost goes back down. Dial failures will also temporarily raise the\ndynamic terminator cost."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"image",src:n(95396).A+"",width:"1033",height:"450"})}),"\n",(0,s.jsx)(t.h3,{id:"established-circuit",children:"Established Circuit"}),"\n",(0,s.jsx)(t.p,{children:"Once the routing and connection to the application server are established, the circuit is made. The\ncontroller notifies the initiating router and data can now flow between the SDK and the application\nserver."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"image",src:n(25297).A+"",width:"1033",height:"450"})})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},78963:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/baseline-0b32db724c4a0cd27d6402de134aba76.png"},25297:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/circuit-52e0a353988be2d116467bc80bb6a18e.png"},21799:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/client-api-session-8b8b1b3f2ee505fcf83519b9cc9cbeea.png"},18096:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/client-session-f957e7525ab9f670561298bcc494d7fe.png"},71325:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/ctrl-to-router-05e08b30aab8d9f9f440da9c3f8c74cd.png"},95396:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/dial-d2a0c2e45dc963b3c2bbf8c8649eee2c.png"},92694:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/edge-router-connect-b86a193df5ca0dc4fc0fb10c7a972de8.png"},41609:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/router-links-a12b92ed7ba5ad323ee5e06a9fdedb6d.png"},72170:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/terminators-76f83a5dac739a1a31460603cebef772.png"},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var i=n(96540);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);