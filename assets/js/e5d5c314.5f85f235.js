"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[2579],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,k=d["".concat(s,".").concat(u)]||d[u]||m[u]||a;return n?o.createElement(k,r(r({ref:t},c),{},{components:n})):o.createElement(k,r({ref:t},c))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<a;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},87428:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>N,frontMatter:()=>p,metadata:()=>d,toc:()=>u});var o=n(87462),i=(n(67294),n(3905)),a=n(96541),r=n(42631),l=n(77030),s=n(40185);const p={title:"Network Access Model",sidebar_label:"Network Access",hide_table_of_contents:!0},c=void 0,d={unversionedId:"learn/core-concepts/zero-trust-models/ztna",id:"learn/core-concepts/zero-trust-models/ztna",title:"Network Access Model",description:"This article describes the various edge deployments of ZiTi Network Access. In all cases, the Controller and at least 2 Public Edge Routers are to be deployed for redundancy. The Ziti Fabric connections are established between all Edge Routers but not Clients/SDKs. The Public Edge Routers would provide connection between Private Edge Routers and/or Clients/SDKs.",source:"@site/docs/learn/core-concepts/zero-trust-models/04-ztna.md",sourceDirName:"learn/core-concepts/zero-trust-models",slug:"/learn/core-concepts/zero-trust-models/ztna",permalink:"/docs/learn/core-concepts/zero-trust-models/ztna",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/learn/core-concepts/zero-trust-models/04-ztna.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Network Access Model",sidebar_label:"Network Access",hide_table_of_contents:!0},sidebar:"docsSidebar",previous:{title:"Host Access",permalink:"/docs/learn/core-concepts/zero-trust-models/ztha"},next:{title:"Overview",permalink:"/docs/learn/core-concepts/security/overview"}},m={},u=[],k={toc:u};function N(e){let{components:t,...p}=e;return(0,i.kt)("wrapper",(0,o.Z)({},k,p,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This article describes the various edge deployments of ZiTi Network Access. In all cases, the Controller and at least 2 Public Edge Routers are to be deployed for redundancy. The Ziti Fabric connections are established between all Edge Routers but not Clients/SDKs. The Public Edge Routers would provide connection between Private Edge Routers and/or Clients/SDKs."),(0,i.kt)("admonition",{title:"Note",type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"Recommended configuration deployment of Public Edge Routers is to have only Ziti Edge enabled and of Private Edge Routers is to have Ziti Edge enabled with Tunnel option being required for cases where the Zero Trust domain ends at the private edge router."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"Acronyms used in this article:")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"ZDE - Ziti Desktop Edge")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"ZME - Ziti Mobile Edge")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"ZET - Ziti Edge Tunnel")))))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Application to Router A Deployment"),"\n","\xa0"),(0,i.kt)(a.ZP,{mdxType:"Share15Md"}),(0,i.kt)("hr",{parentName:"li"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Application to Router B Deployment"),"\n","\xa0"),(0,i.kt)(r.ZP,{mdxType:"Share43Md"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Client to Router Deployment"),"\n","\xa0"),(0,i.kt)(l.ZP,{mdxType:"Share12Md"}),(0,i.kt)("hr",{parentName:"li"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Router to Host Deployment"),"\n","\xa0"),(0,i.kt)(s.ZP,{mdxType:"Share31Md"}),(0,i.kt)("hr",{parentName:"li"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Router to Router Deployment"),"\n","\xa0"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"image",src:n(98222).Z,width:"2066",height:"886"})),(0,i.kt)("admonition",{parentName:"li",title:"Details",type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Clients are behind Router"),(0,i.kt)("li",{parentName:"ul"},"Application is behind Router"))),(0,i.kt)("admonition",{parentName:"li",title:"Advantages",type:"tip"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"No software must be deployed to clients"),(0,i.kt)("li",{parentName:"ul"},"No software must be deployed to application servers"))),(0,i.kt)("admonition",{parentName:"li",title:"Things to consider while deciding",type:"caution"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Less secure, connection from clients to router is not protected"),(0,i.kt)("li",{parentName:"ul"},"Less secure, connection from private router to application is not protected"),(0,i.kt)("li",{parentName:"ul"},"Static/Dynamic Routing or Load Balancer is needed to direct traffic toward Routers"),(0,i.kt)("li",{parentName:"ul"},"Clients must be configured use Routers as first DNS entry if using named services"))))))}N.isMDXComponent=!0},96541:(e,t,n)=>{n.d(t,{ZP:()=>r});var o=n(87462),i=(n(67294),n(3905));const a={toc:[]};function r(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,o.Z)({},a,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(28198).Z,width:"835",height:"443"})),(0,i.kt)("admonition",{title:"Details",type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Client is SDK integrated"),(0,i.kt)("li",{parentName:"ul"},"Application is behind private router"))),(0,i.kt)("admonition",{title:"Advantages",type:"tip"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"No software must be deployed to application servers"),(0,i.kt)("li",{parentName:"ul"},"No additional routing needed"),(0,i.kt)("li",{parentName:"ul"},"No additional DNS entries needed"))),(0,i.kt)("admonition",{title:"Things to consider while deciding",type:"caution"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Less secure, connection from private router to application is not protected"),(0,i.kt)("li",{parentName:"ul"},"SDK and Application source code availability"))))}r.isMDXComponent=!0},42631:(e,t,n)=>{n.d(t,{ZP:()=>r});var o=n(87462),i=(n(67294),n(3905));const a={toc:[]};function r(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,o.Z)({},a,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(36358).Z,width:"1033",height:"443"})),(0,i.kt)("admonition",{title:"Details",type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Client is SDK integrated."),(0,i.kt)("li",{parentName:"ul"},"Application is behind private router"))),(0,i.kt)("admonition",{title:"Advantages",type:"tip"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"No software must be deployed to application servers"),(0,i.kt)("li",{parentName:"ul"},"No additional routing needed"),(0,i.kt)("li",{parentName:"ul"},"No additional DNS entries needed"))),(0,i.kt)("admonition",{title:"Things to consider while deciding",type:"caution"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Less secure, connection from private router to application is not protected"),(0,i.kt)("li",{parentName:"ul"},"SDK and Application source code availability"))))}r.isMDXComponent=!0},77030:(e,t,n)=>{n.d(t,{ZP:()=>r});var o=n(87462),i=(n(67294),n(3905));const a={toc:[]};function r(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,o.Z)({},a,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(24085).Z,width:"835",height:"443"})),(0,i.kt)("admonition",{title:"Details",type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Client is ZDE/ZME enabled"),(0,i.kt)("li",{parentName:"ul"},"Router is tunnel enabled"))),(0,i.kt)("admonition",{title:"Advantages",type:"tip"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"No software must be deployed to application servers"),(0,i.kt)("li",{parentName:"ul"},"No additional routing needed"),(0,i.kt)("li",{parentName:"ul"},"No additional DNS entries needed"))),(0,i.kt)("admonition",{title:"Things to consider while deciding",type:"caution"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Software must be deployed to desktops/mobile"),(0,i.kt)("li",{parentName:"ul"},"Less secure, connection from private router to application is not protected"))))}r.isMDXComponent=!0},40185:(e,t,n)=>{n.d(t,{ZP:()=>r});var o=n(87462),i=(n(67294),n(3905));const a={toc:[]};function r(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,o.Z)({},a,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(32318).Z,width:"2066",height:"886"})),(0,i.kt)("admonition",{title:"Details",type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Clients are behind Router"),(0,i.kt)("li",{parentName:"ul"},"Application host has a client software (ZET) deployed"))),(0,i.kt)("admonition",{title:"Advantages",type:"tip"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"No software must be deployed to clients"))),(0,i.kt)("admonition",{title:"Things to consider while deciding",type:"caution"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Less secure, connection from clients to router is not protected"),(0,i.kt)("li",{parentName:"ul"},"Static/Dynamic Routing or Load Balancer is needed to direct traffic toward Routers"),(0,i.kt)("li",{parentName:"ul"},"Clients must be configured use Routers as first DNS entry if using named services"))))}r.isMDXComponent=!0},28198:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/app_to_router_a_deploy-16a9c85c8cdd1eebc87e053b6c5c3c8e.png"},36358:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/app_to_router_b_deploy-887cf0e99317cc81962ebde42f6699c5.png"},24085:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/client_to_router_deploy-5dc3be4d91266c234523ad145daf9745.png"},32318:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/router_to_host_deploy-be9be23f7637508450f80535494f1ac6.png"},98222:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/router_to_router_deploy-f2f27b8febfe6594a1aea487003db7ba.png"}}]);