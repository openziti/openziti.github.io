"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[9245],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),l=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(a.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,f=d["".concat(a,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=m;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c[d]="string"==typeof e?e:o,s[1]=c;for(var l=2;l<i;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},22741:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const i={id:"overview",title:"Zero Trust Models",hide_table_of_contents:!0},s=void 0,c={unversionedId:"learn/core-concepts/zero-trust-models/overview",id:"learn/core-concepts/zero-trust-models/overview",title:"Zero Trust Models",description:"All OpenZiti deployment architectures can be categorized by three types of Zero Trust Edge Access Security Models. Many of them will be overlapping at least 2 of these initially, especially the brownfield deployments.  That gives customers a great deal of flexibility in terms of deployment options depending on where they are in the journey to eventually reach the ZiTi Application Access Security Model, i.e most secured.",source:"@site/docs/learn/core-concepts/zero-trust-models/01-overview.md",sourceDirName:"learn/core-concepts/zero-trust-models",slug:"/learn/core-concepts/zero-trust-models/overview",permalink:"/docs/learn/core-concepts/zero-trust-models/overview",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/learn/core-concepts/zero-trust-models/01-overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"overview",title:"Zero Trust Models",hide_table_of_contents:!0},sidebar:"docsSidebar",previous:{title:"Prometheus Endpoint",permalink:"/docs/learn/core-concepts/metrics/prometheus"},next:{title:"App Access",permalink:"/docs/learn/core-concepts/zero-trust-models/ztaa"}},a={},l=[{value:"App Access (ZTAA)",id:"app-access-ztaa",level:2},{value:"Host Access (ZTHA)",id:"host-access-ztha",level:2},{value:"Network Access (ZTNA)",id:"network-access-ztna",level:2}],p={toc:l};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"All OpenZiti deployment architectures can be categorized by three types of Zero Trust Edge Access Security Models. Many of them will be overlapping at least 2 of these initially, especially the brownfield deployments.  That gives customers a great deal of flexibility in terms of deployment options depending on where they are in the journey to eventually reach the ZiTi Application Access Security Model, i.e most secured."),(0,o.kt)("h2",{id:"app-access-ztaa"},"App Access (ZTAA)"),(0,o.kt)("p",null,"The Zero Trust is maintained between Applications, and the encryption terminated in Applications"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:r(67814).Z,width:"1020",height:"392"})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"host-access-ztha"},"Host Access (ZTHA)"),(0,o.kt)("p",null,"The Zero Trust is maintained between Application Hosts, and the encryption terminated at Application Hosts\n","\xa0"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:r(96448).Z,width:"3060",height:"1176"})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"network-access-ztna"},"Network Access (ZTNA)"),(0,o.kt)("p",null,"The Zero Trust is only maintained between Ziti Private Edge Routers, and the encryption is terminated at Ziti Private Edge Routers\n","\xa0"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:r(97217).Z,width:"1020",height:"392"})))}d.isMDXComponent=!0},67814:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/ZTAA.v2-7e93356862d62c6a331cb1a5035c1c14.png"},96448:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/ZTHA.v2-624bf2231c79b9bfdfd0631258c9a352.png"},97217:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/ZTNA.v2-a87941a90a905a79a308c22afffc22e6.png"}}]);