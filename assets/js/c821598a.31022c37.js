"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[8631],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>v});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),l=s(r),f=o,v=l["".concat(p,".").concat(f)]||l[f]||u[f]||i;return r?n.createElement(v,a(a({ref:t},d),{},{components:r})):n.createElement(v,a({ref:t},d))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[l]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},20308:(e,t,r)=>{r.d(t,{ZP:()=>c});var n=r(87462),o=(r(67294),r(3905));const i={toc:[]},a="wrapper";function c(e){let{components:t,...r}=e;return(0,o.kt)(a,(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you are building a new application you have a unique opportunity to choose to use one of the Ziti SDKs and to create a\ntruly zero trust application from the start! A Ziti Edge SDK enables your application to discover and provide or connect to Ziti services directly without an agent or proxy. The SDKs use ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/developer/api/#edge-client-api"},"the Edge Client API")," provided by the controller to authenticate and discover routers and services. Then, the SDK connects to the most responsive router and begins hosting or connecting to the Ziti service."))}c.isMDXComponent=!0},83298:(e,t,r)=>{r.d(t,{ZP:()=>c});var n=r(87462),o=(r(67294),r(3905));const i={toc:[]},a="wrapper";function c(e){let{components:t,...r}=e;return(0,o.kt)(a,(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Ziti provides several APIs. The most relevant Ziti API for an integrator is ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/developer/api/#edge-management-api"},"the Management API")," provided by the Ziti controller. The ",(0,o.kt)("inlineCode",{parentName:"p"},"ziti edge")," CLI and the web UI both use the Management API for create, list, update, delete operations on Ziti entities like identities and services."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/reference/developer/api/#edge-client-api"},"The Edge Client API")," is also provided by the Ziti controller. This is the API implemented by Ziti Edge SDKs which are used by endpoints to authenticate and discover Ziti services and routers."))}c.isMDXComponent=!0},35314:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>v,frontMatter:()=>c,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905)),i=r(20308),a=r(83298);const c={title:"Ziti Developer Resources"},p=void 0,s={unversionedId:"reference/developer/index",id:"reference/developer/index",title:"Ziti Developer Resources",description:"Edge SDKs",source:"@site/docs/reference/developer/index.md",sourceDirName:"reference/developer",slug:"/reference/developer/",permalink:"/docs/reference/developer/",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/reference/developer/index.md",tags:[],version:"current",frontMatter:{title:"Ziti Developer Resources"},sidebar:"docsSidebar",previous:{title:"Router",permalink:"/docs/reference/configuration/router"},next:{title:"Edge APIs",permalink:"/docs/reference/developer/api/"}},d={},l=[{value:"Edge SDKs",id:"edge-sdks",level:2},{value:"Edge APIs",id:"edge-apis",level:2}],u={toc:l},f="wrapper";function v(e){let{components:t,...r}=e;return(0,o.kt)(f,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"edge-sdks"},"Edge SDKs"),(0,o.kt)(i.ZP,{mdxType:"SdkQuickInfoMd"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/reference/developer/sdk/"},"Explore Edge SDKs")),(0,o.kt)("h2",{id:"edge-apis"},"Edge APIs"),(0,o.kt)(a.ZP,{mdxType:"ApiQuickInfoMd"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/reference/developer/api/"},"Explore Edge APIs")))}v.isMDXComponent=!0}}]);