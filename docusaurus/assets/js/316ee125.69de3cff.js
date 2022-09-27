"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[9483],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9824:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={id:"features",title:"Features"},o="Features",s={unversionedId:"introduction/features",id:"introduction/features",title:"Features",description:"Ziti has many features",source:"@site/docs/introduction/02-features.md",sourceDirName:"introduction",slug:"/introduction/features",permalink:"/docusaurus/docs/introduction/features",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/introduction/02-features.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"features",title:"Features"},sidebar:"tutorialSidebar",previous:{title:"What is OpenZiti?",permalink:"/docusaurus/docs/introduction/intro"},next:{title:"Components",permalink:"/docusaurus/docs/introduction/components"}},l={},c=[{value:"Security Features",id:"security-features",level:2},{value:"Performance and Reliability",id:"performance-and-reliability",level:2},{value:"Developer Focus",id:"developer-focus",level:2},{value:"Easy Management",id:"easy-management",level:2},{value:"Understanding buzzwords",id:"understanding-buzzwords",level:2},{value:"Zero Trust/Application Segmentation",id:"zero-trustapplication-segmentation",level:3},{value:"Dark Services and Routers",id:"dark-services-and-routers",level:3},{value:"End to End Encryption",id:"end-to-end-encryption",level:3}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"features"},"Features"),(0,r.kt)("p",null,"Ziti has many features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The Ziti fabric provides a scalable, pluggable, networking mesh with built in smart routing"),(0,r.kt)("li",{parentName:"ul"},"The Ziti edge components provide a secure, Zero Trust entry point into your network"),(0,r.kt)("li",{parentName:"ul"},"The Ziti SDKs allow you to integrate Ziti directly into your applications"),(0,r.kt)("li",{parentName:"ul"},"The Ziti tunnelers and proxies allow existing applications and networks to take advantage of a Ziti deployment")),(0,r.kt)("h2",{id:"security-features"},"Security Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Zero Trust and Application Segmentation"),(0,r.kt)("li",{parentName:"ul"},"Dark Services and Routers"),(0,r.kt)("li",{parentName:"ul"},"End to end encryption")),(0,r.kt)("h2",{id:"performance-and-reliability"},"Performance and Reliability"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A scalable mesh fabric with smart routing"),(0,r.kt)("li",{parentName:"ul"},"Support for load balancing services for both horizontal scale and failover setups ")),(0,r.kt)("h2",{id:"developer-focus"},"Developer Focus"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/openziti"},"Open source code, available with the Apache 2.0 license")),(0,r.kt)("li",{parentName:"ul"},"Fully programable REST management APIs"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../clients/sdks"},"SDKs for a variety of programming languages")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../config-store/overview"},"Application specific configuration store allowing centralized management of configuration allowing you to add structured configuration specific to your application")),(0,r.kt)("li",{parentName:"ul"},"An extensible fabric, allowing you to add your own ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"load balancing algorithms"),(0,r.kt)("li",{parentName:"ul"},"interconnect protocols"),(0,r.kt)("li",{parentName:"ul"},"ingress and egress protocols"),(0,r.kt)("li",{parentName:"ul"},"metrics collections frameworks"),(0,r.kt)("li",{parentName:"ul"},"control and management plane messaging and semantics   ")))),(0,r.kt)("h2",{id:"easy-management"},"Easy Management"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../security/authorization/policies/overview"},"A flexible and expressive policy model for managing access to services and edge routers")),(0,r.kt)("li",{parentName:"ul"},"A web based admin console"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../clients/tunnelers"},"Pre-built tunnelers and proxies for a variety of operating systems, including mobile"))),(0,r.kt)("h2",{id:"understanding-buzzwords"},"Understanding buzzwords"),(0,r.kt)("h3",{id:"zero-trustapplication-segmentation"},"Zero Trust/Application Segmentation"),(0,r.kt)("p",null,"Many networking security solutions act like a wall around an internal network. Once you are through the wall, you have access to everything inside. Zero trust solutions enforce not just access to a network, but access to individual applications within that network. "),(0,r.kt)("p",null,"Every client in a Ziti system must have an identity with provisioned certificates. The certificates are used to establish secure communications channels as well as for authentication and authorization of the associated identity. Whenever the client attempts to access a network application, Ziti will first ensure that the identity has access to the application. If access is revoked, open network connections will be closed."),(0,r.kt)("p",null,"This model enables Ziti systems to provide access to multiple applications while ensuring that clients only get access to those applications to which they have been granted access.    "),(0,r.kt)("p",null,"In addition to requiring cert based authentication for clients, Ziti uses certificates to authorize communication between Ziti components. "),(0,r.kt)("h3",{id:"dark-services-and-routers"},"Dark Services and Routers"),(0,r.kt)("p",null,"There are various levels of accessibility a network application/service can have."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Many network services are available to the world. The service then relies on authentication and authorization policies to prevent unwanted access. "),(0,r.kt)("li",{parentName:"ol"},"Firewalls can be used to limit access to specific IP or ranges. This increases security at the cost of flexibility. Adding users can be complicated and users may not be able to easily switch devices or access the service remotely."),(0,r.kt)("li",{parentName:"ol"},"Services can be put behind a VPN or made only accessible to an internal network, but there are some downsides to this approach.",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"If you can access the VPN or internal network for any reason, all services in that VPN become more vulnerable to you."),(0,r.kt)("li",{parentName:"ol"},"VPNs are not usually appropriate for external customers or users."),(0,r.kt)("li",{parentName:"ol"},"For end users, VPNs add an extra step that needs to be done each time they want to access the service."))),(0,r.kt)("li",{parentName:"ol"},"Services can be made dark, meaning they do not have any ports open for anyone to even try and connect to. ")),(0,r.kt)("p",null,"Making something dark can be done in a few ways, but the way it's generally handled in Ziti is that services reach out and establish one or more connections to the Ziti network fabric. Clients coming into the fabric can then reach the service through these connections after being authenticated and authorized. "),(0,r.kt)("p",null,"Ziti routers, which make up the fabric, can also be dark. Routers locoated in private networks will usually be made dark. These routers will reach out of the private network to talk to the controller and to make connections to join the network fabric mesh. This allows the services and routers in your private networks to make only outbound connections, so no holes have to be opened for inbound traffic."),(0,r.kt)("p",null,"Services can be completely dark if they are implemented with a Ziti SDK. If this is not possible a Ziti tunneler or proxy can be colocated with the service. The service then only needs to allow connections from the local machine or network, depending on how close you colocate the proxy to the service.   "),(0,r.kt)("h3",{id:"end-to-end-encryption"},"End to End Encryption"),(0,r.kt)("p",null,"If you take advantage of Ziti's developer SDKs and embed Ziti in your client and server applications, your traffic can be configured to be seamlessly encrypted from the client application to server application. If you prefer to use tunnelers or proxy applications, the traffic can be encrypted for you from machine to machine or private network to private network. Various combinations of the above are also supported."),(0,r.kt)("p",null,"End-to-end encryption means that even if systems between the client and server are compromised, your traffic cannot be decrypted or tampered with."))}p.isMDXComponent=!0}}]);