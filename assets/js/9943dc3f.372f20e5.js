"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[877],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),l=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},h=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(t),h=r,m=p["".concat(c,".").concat(h)]||p[h]||u[h]||i;return t?o.createElement(m,a(a({ref:n},d),{},{components:t})):o.createElement(m,a({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=h;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[p]="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}h.displayName="MDXCreateElement"},16634:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=t(87462),r=(t(67294),t(3905));const i={sidebar_label:"Session Diagram"},a="Sessions and Connections Sequence Diagram",s={unversionedId:"learn/core-concepts/security/SessionsAndConnections",id:"learn/core-concepts/security/SessionsAndConnections",title:"Sessions and Connections Sequence Diagram",description:"OpenZiti has a number of different connection and session types.  It is important to understand the different scopes and uses of these connections in working with the project, developing, operating, and most importantly, troubleshooting.",source:"@site/docs/learn/core-concepts/security/SessionsAndConnections.md",sourceDirName:"learn/core-concepts/security",slug:"/learn/core-concepts/security/SessionsAndConnections",permalink:"/docs/learn/core-concepts/security/SessionsAndConnections",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/learn/core-concepts/security/SessionsAndConnections.md",tags:[],version:"current",frontMatter:{sidebar_label:"Session Diagram"},sidebar:"docsSidebar",previous:{title:"Posture Checks",permalink:"/docs/learn/core-concepts/security/authorization/posture-checks"},next:{title:"Connection Security",permalink:"/docs/learn/core-concepts/security/connection-security"}},c={},l=[{value:"Control Plane",id:"control-plane",level:2},{value:"Data Plane",id:"data-plane",level:2}],d={toc:l},p="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sessions-and-connections-sequence-diagram"},"Sessions and Connections Sequence Diagram"),(0,r.kt)("p",null,"OpenZiti has a number of different connection and session types.  It is important to understand the different scopes and uses of these connections in working with the project, developing, operating, and most importantly, troubleshooting."),(0,r.kt)("mermaid",{value:"sequenceDiagram\ntitle Ziti Sessions and Connections\n\nparticipant Client Application\nparticipant SDK 1\nparticipant Edge Router 1\nparticipant Network Controller\nparticipant Edge Router 2\nparticipant SDK 2\nparticipant Application Server\n\npar Control Plane\n\tSDK 1 ->> Network Controller: API Session\nand \n\tSDK 2 ->>Network Controller: API Session\nand \n\tEdge Router 1 ->> Network Controller: API Session\nand \n\tEdge Router 2 ->> Network Controller: API Session\nend\n\npar Edge Control Plane\n\tSDK 1 ->> Network Controller: \nand \n\tSDK 2 ->>Network Controller: Edge Session (per service)\nand \n\tEdge Router 1 ->> Network Controller: Edge Session (per service)\nand \n\tEdge Router 2 ->> Network Controller: Edge Session (per service)\nend\n\npar Data Plane (TCP)\n\tClient Application ->> SDK 1 : TCP Connection\nand\n\tServer Application ->> SDK 2 : TCP Connection\nend\n\npar Data Plane (Edge)\n\tSDK 1 ->> Edge Router 1: Conn\nand \n\tEdge Router 2 ->> SDK 2: Conn\nend\n\nEdge Router 1 ->> Edge Router 2: Circuit"}),(0,r.kt)("h2",{id:"control-plane"},"Control Plane"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The API Session is the first and primary session between and endpoint and the OpenZiti network instance.  This session is created during attachment, after validating the certificates in both directions, and the endpoint name.  This makes the endpoint present on the network, and all endpoints and routers have API sessions to the Controller(s)"),(0,r.kt)("li",{parentName:"ol"},"The Edge Session is created with the API session authorization, and is specific to each service configured for the endpoint.  The edge session object holds information such as the service policies, parent API session, service ID, and other information the endpoint and network require to properly service each given service."),(0,r.kt)("li",{parentName:"ol"},"Channels are formed between the endpoint and each Edge Router available and within the policies.  These channels are monitored for latency to select best path, and are the control connections for incoming connections for hosted services."),(0,r.kt)("li",{parentName:"ol"},"Links connect Edge Routers logically.  Edge Routers can advertise a listener socket, which is distributed during client initialization to other Edge Routers.  All Edge Routers will attach to all others in a mesh, provided the policy dictates/allows it.  Each pair of routers will have one link per link type (TLS, WSS, etc.)  Links are a split connection, having both control plane and data plane messaging.")),(0,r.kt)("h2",{id:"data-plane"},"Data Plane"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The TCP connections at either end of an OpenZiti connection are dependent on the implementation model.  If Tunnelers, or Edge Router with embedded Tunnelers are used, and the end device makes a TCP connection to gain entry to the OpenZiti network.  If the endpoints, both dialing and binding, or either one, is fully embedded via the SDK, these connections will not exist."),(0,r.kt)("li",{parentName:"ol"},"The Connection is the flow specific connection between the endpoint and the initial Edge Router.  Each service invocation will create an independent Connection, and data will flow over this to the Edge Router"),(0,r.kt)("li",{parentName:"ol"},"The Fabric Circuit is the path in the OpenZiti Network from initial to terminating Edge Router, comprised of one more more Edge Routers, and zero or more Links. (An initiating Edge Router may have a local terminator for the service) ")),(0,r.kt)("p",null,"These terms in their full and abbreviated forms appear in logs, metrics, and software, and are therefore critical terminology to understand OpenZiti Networks."))}u.isMDXComponent=!0}}]);