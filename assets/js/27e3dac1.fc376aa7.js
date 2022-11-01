"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[2751],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),h=r,y=d["".concat(s,".").concat(h)]||d[h]||u[h]||i;return n?o.createElement(y,a(a({ref:t},p),{},{components:n})):o.createElement(y,a({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1211:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=n(7462),r=(n(7294),n(3905)),i=n(4834);const a={id:"key_concepts",title:"Key Concepts"},c=void 0,s={unversionedId:"introduction/key_concepts",id:"introduction/key_concepts",title:"Key Concepts",description:"",source:"@site/docs/introduction/05-concepts.md",sourceDirName:"introduction",slug:"/introduction/key_concepts",permalink:"/docs/introduction/key_concepts",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/introduction/05-concepts.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"key_concepts",title:"Key Concepts"},sidebar:"rootSidebar",previous:{title:"Components",permalink:"/docs/introduction/components"},next:{title:"Features",permalink:"/docs/introduction/features"}},l={},p=[],u={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.ZP,{mdxType:"ConceptsMd"}))}d.isMDXComponent=!0},4834:(e,t,n)=>{n.d(t,{ZP:()=>a});var o=n(7462),r=(n(7294),n(3905));const i={toc:[{value:"Zero Trust/Application Segmentation",id:"zero-trustapplication-segmentation",level:2},{value:"Dark Services and Routers",id:"dark-services-and-routers",level:2},{value:"End to End Encryption",id:"end-to-end-encryption",level:2}]};function a(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"zero-trustapplication-segmentation"},"Zero Trust/Application Segmentation"),(0,r.kt)("p",null,"Many networking security solutions act like a wall around an internal network. Once you are through the wall, you have access to everything inside. Zero trust solutions enforce not just access to a network, but access to individual applications within that network."),(0,r.kt)("p",null,"Every client in a Ziti system must have an identity with provisioned certificates. The certificates are used to establish secure communications channels as well as for authentication and authorization of the associated identity. Whenever the client attempts to access a network application, Ziti will first ensure that the identity has access to the application. If access is revoked, open network connections will be closed."),(0,r.kt)("p",null,"This model enables Ziti systems to provide access to multiple applications while ensuring that clients only get access to those applications to which they have been granted access."),(0,r.kt)("p",null,"In addition to requiring cert based authentication for clients, Ziti uses certificates to authorize communication between Ziti components."),(0,r.kt)("h2",{id:"dark-services-and-routers"},"Dark Services and Routers"),(0,r.kt)("p",null,"There are various levels of accessibility a network application/service can have."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Many network services are available to the world. The service then relies on authentication and authorization policies to prevent unwanted access."),(0,r.kt)("li",{parentName:"ol"},"Firewalls can be used to limit access to specific IP or ranges. This increases security at the cost of flexibility. Adding users can be complicated and users may not be able to easily switch devices or access the service remotely."),(0,r.kt)("li",{parentName:"ol"},"Services can be put behind a VPN or made only accessible to an internal network, but there are some downsides to this approach.",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"If you can access the VPN or internal network for any reason, all services in that VPN become more vulnerable to you."),(0,r.kt)("li",{parentName:"ol"},"VPNs are not usually appropriate for external customers or users."),(0,r.kt)("li",{parentName:"ol"},"For end users, VPNs add an extra step that needs to be done each time they want to access the service."))),(0,r.kt)("li",{parentName:"ol"},"Services can be made dark, meaning they do not have any ports open for anyone to even try and connect to.")),(0,r.kt)("p",null,"Making something dark can be done in a few ways, but the way it's generally handled in Ziti is that services reach out and establish one or more connections to the Ziti network fabric. Clients coming into the fabric can then reach the service through these connections after being authenticated and authorized."),(0,r.kt)("p",null,"Ziti routers, which make up the fabric, can also be dark. Routers located in private networks will usually be made dark. These routers will reach out of the private network to talk to the controller and to make connections to join the network fabric mesh. This allows the services and routers in your private networks to make only outbound connections, so no holes have to be opened for inbound traffic."),(0,r.kt)("p",null,"Services can be completely dark if they are implemented with a Ziti SDK. If this is not possible a Ziti tunneler or proxy can be co-located with the service. The service then only needs to allow connections from the local machine or network, depending on how close you colocate the proxy to the service."),(0,r.kt)("h2",{id:"end-to-end-encryption"},"End to End Encryption"),(0,r.kt)("p",null,"If you take advantage of Ziti's developer SDKs and embed Ziti in your client and server applications, your traffic can be configured to be seamlessly encrypted from the client application to server application. If you prefer to use tunnelers or proxy applications, the traffic can be encrypted for you from machine to machine or private network to private network. Various combinations of the above are also supported."),(0,r.kt)("p",null,"End-to-end encryption means that even if systems between the client and server are compromised, your traffic cannot be decrypted or tampered with."))}a.isMDXComponent=!0}}]);