"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[7698],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),c=l(n),f=i,m=c["".concat(s,".").concat(f)]||c[f]||u[f]||o;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d[c]="string"==typeof e?e:i,a[1]=d;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},90853:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const o={},a="Adding Identities",d={unversionedId:"reference/tunnelers/windows/add-ids/index",id:"reference/tunnelers/windows/add-ids/index",title:"Adding Identities",description:"Adding an identity is often referred to as enrolling an identity. This is the act of bootstrapping trust between",source:"@site/docs/reference/tunnelers/02-windows/add-ids/index.md",sourceDirName:"reference/tunnelers/02-windows/add-ids",slug:"/reference/tunnelers/windows/add-ids/",permalink:"/docs/reference/tunnelers/windows/add-ids/",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/reference/tunnelers/02-windows/add-ids/index.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Windows",permalink:"/docs/reference/tunnelers/windows/"},next:{title:"One Time Tokens",permalink:"/docs/reference/tunnelers/windows/add-ids/ott"}},s={},l=[{value:"Types of Enrollment Supported",id:"types-of-enrollment-supported",level:2}],p={toc:l},c="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"adding-identities"},"Adding Identities"),(0,i.kt)("p",null,"Adding an identity is often referred to as enrolling an identity. This is the act of bootstrapping trust between\nthe computer adding an identity and the OpenZiti Controller."),(0,i.kt)("p",null,"There are numerous mechanisms to bootstrap this trust and enroll an identity to a tunneler. The most common\nis probably via a JWT using a one-time token. There are however, other enrollment types. Currently, each type of\nenrollment comes in the form of a JWT with one notable exception - the URL."),(0,i.kt)("h2",{id:"types-of-enrollment-supported"},"Types of Enrollment Supported"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./ott"},"One-Time Token")," - Add an identity with a single use token. The most common option"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./third-party-ca"},"Third-Party CA")," - Add an identity using a third-party CA"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./ext-providers/ext-jwt"},"External JWT Provider - JWT")," - Add an identity using the configured provider and network JWT"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./ext-providers/ext-jwt-url"},"External JWT Provider - URL")," - Add an identity using the configured provider and URL")))}u.isMDXComponent=!0}}]);