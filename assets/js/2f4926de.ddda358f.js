"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[1952],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?o.createElement(f,a(a({ref:t},p),{},{components:n})):o.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},81574:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var o=n(87462),r=(n(67294),n(3905));const i={},a="Endpoint  Initialization",c={unversionedId:"learn/core-concepts/clients/process-sequences/EndpointInitialization",id:"learn/core-concepts/clients/process-sequences/EndpointInitialization",title:"Endpoint  Initialization",description:"Steps",source:"@site/docs/learn/core-concepts/clients/process-sequences/EndpointInitialization.md",sourceDirName:"learn/core-concepts/clients/process-sequences",slug:"/learn/core-concepts/clients/process-sequences/EndpointInitialization",permalink:"/docs/learn/core-concepts/clients/process-sequences/EndpointInitialization",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/learn/core-concepts/clients/process-sequences/EndpointInitialization.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Process Sequences",permalink:"/docs/category/process-sequences"},next:{title:"Endpoint Registration",permalink:"/docs/learn/core-concepts/clients/process-sequences/EndpointRegistration"}},l={},s=[{value:"Steps",id:"steps",level:2}],p={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"endpoint--initialization"},"Endpoint  Initialization"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-textermaid"},"sequenceDiagram\ntitle Endpoint Initialization\n\nparticipant Endpoint\nparticipant Controller\nparticipant Edge Router\nautonumber 1\n\nnote over Endpoint : Load config.json\nnote over Endpoint  : Create TUN Device\nnote over Endpoint  : Create route for\\n 100.64.0.0 to TUN\nnote over Endpoint  : Initialize DNS Service\nnote over Endpoint  : Load Identity\nnote over Endpoint  : Initialize Logging\nEndpoint->>Controller : Connect\nController->>Endpoint : Network / Service Configuration\nEndpoint->>Edge Router : Connect Channel(s)\nnote over Endpoint : Process Services <br> Insert DNS Names <br> Create routes to \\n 100.64.0.0 IPs\nnote over Endpoint,Edge Router : Monitor Latency\nnote over Endpoint,Controller : Poll for Updates\n")),(0,r.kt)("h2",{id:"steps"},"Steps"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Init - Load config.json"),(0,r.kt)("li",{parentName:"ol"},"Create TUN device"),(0,r.kt)("li",{parentName:"ol"},"Create route for 100.64.0.0 network to TUN"),(0,r.kt)("li",{parentName:"ol"},"Initialize DNS service"),(0,r.kt)("li",{parentName:"ol"},"Load identity"),(0,r.kt)("li",{parentName:"ol"},"Initialize logging"),(0,r.kt)("li",{parentName:"ol"},"Connect to controller"),(0,r.kt)("li",{parentName:"ol"},"Download network configuration"),(0,r.kt)("li",{parentName:"ol"},"Initialize Channels to Edge Routers"),(0,r.kt)("li",{parentName:"ol"},"Initialize Services",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Insert DNS names"),(0,r.kt)("li",{parentName:"ol"},"Create routes for IPs to 100.64.0.0 block"))),(0,r.kt)("li",{parentName:"ol"},"Collect latency information for ER selection"),(0,r.kt)("li",{parentName:"ol"},"Complete DNS initialization with Service names"),(0,r.kt)("li",{parentName:"ol"},"Periodically check for updates to services or other network config.  Polling controlled by app, including desktop edges and tunnelers, 10 or 15 seconds in OpenZiti released software."),(0,r.kt)("li",{parentName:"ol"},"Update services, add or delete Edge Routers, etc. as necessary.")))}u.isMDXComponent=!0}}]);