"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[8044],{3905:(t,e,i)=>{i.d(e,{Zo:()=>l,kt:()=>m});var n=i(7294);function r(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function a(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(Object(i),!0).forEach((function(e){r(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function c(t,e){if(null==t)return{};var i,n,r=function(t,e){if(null==t)return{};var i,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)i=o[n],e.indexOf(i)>=0||(r[i]=t[i]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)i=o[n],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(r[i]=t[i])}return r}var u=n.createContext({}),p=function(t){var e=n.useContext(u),i=e;return t&&(i="function"==typeof t?t(e):a(a({},e),t)),i},l=function(t){var e=p(t.components);return n.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var i=t.components,r=t.mdxType,o=t.originalType,u=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),d=p(i),m=r,h=d["".concat(u,".").concat(m)]||d[m]||s[m]||o;return i?n.createElement(h,a(a({ref:e},l),{},{components:i})):n.createElement(h,a({ref:e},l))}));function m(t,e){var i=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=i.length,a=new Array(o);a[0]=d;var c={};for(var u in e)hasOwnProperty.call(e,u)&&(c[u]=e[u]);c.originalType=t,c.mdxType="string"==typeof t?t:r,a[1]=c;for(var p=2;p<o;p++)a[p]=i[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},5729:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>u,contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=i(7462),r=(i(7294),i(3905));const o={id:"contributing",title:"Contributing"},a="Contributing",c={unversionedId:"introduction/contributing",id:"introduction/contributing",title:"Contributing",description:"The Ziti project welcomes contributions including, but not limited to, code, documentation and bug reports.",source:"@site/docs/introduction/06-contributing.md",sourceDirName:"introduction",slug:"/introduction/contributing",permalink:"/docusaurus/docs/introduction/contributing",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/introduction/06-contributing.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"contributing",title:"Contributing"},sidebar:"tutorialSidebar",previous:{title:"Key Concepts",permalink:"/docusaurus/docs/introduction/key_concepts"},next:{title:"Software Architecture",permalink:"/docusaurus/docs/zitiSoftwareArchitecture"}},u={},p=[],l={toc:p};function s(t){let{components:e,...i}=t;return(0,r.kt)("wrapper",(0,n.Z)({},l,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"contributing"},"Contributing"),(0,r.kt)("p",null,"The Ziti project welcomes contributions including, but not limited to, code, documentation and bug reports."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"All Ziti code is found on Github under the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/openziti"},"OpenZiti")," organization. ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/openziti/ziti"},"ziti"),": top level project which builds all Ziti executables"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/openziti/edge"},"edge"),": edge components and model which includes identity, polices and config "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/openziti/fabric"},"fabric"),": fabric project which includes core controller and router"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/openziti/foundation"},"foundation"),": project which contains library code used across multiple projects"),(0,r.kt)("li",{parentName:"ul"},"SDKs",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"[ziti-sdk-c]"," (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/openziti/ziti-sdk-c"},"https://github.com/openziti/ziti-sdk-c"),"): C SDK"),(0,r.kt)("li",{parentName:"ul"},"[ziti-sdk-csharp]"," (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/openziti/ziti-sdk-csharp"},"https://github.com/openziti/ziti-sdk-csharp"),"): C# SDK"),(0,r.kt)("li",{parentName:"ul"},"[ziti-sdk-jvm]"," (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/openziti/ziti-sdk-jvm"},"https://github.com/openziti/ziti-sdk-jvm"),"): SDK for JVM based languages"),(0,r.kt)("li",{parentName:"ul"},"[ziti-sdk-swift]"," (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/openziti/ziti-sdk-swift"},"https://github.com/openziti/ziti-sdk-swift"),"): Swift SDK"),(0,r.kt)("li",{parentName:"ul"},"[ziti-sdk-nodejs]"," (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/openziti/ziti-sdk-nodejs"},"https://github.com/openziti/ziti-sdk-nodejs"),"): NodeJS SDK"),(0,r.kt)("li",{parentName:"ul"},"[sdk-golang]"," (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/openziti/sdk-golang"},"https://github.com/openziti/sdk-golang"),"): Go SDK"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/openziti/ziti-doc"},"ziti-doc"),": Documention (which you are currently reading)"))),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("a",{parentName:"li",href:"https://openziti.discourse.group/"},"Discourse forum")," is available ")),(0,r.kt)("p",null,"Ziti was developed and open sourced by ",(0,r.kt)("a",{parentName:"p",href:"https://netfoundry.io"},"NetFoundry, Inc"),". NetFoundry continues to fund and contribute to Ziti."))}s.isMDXComponent=!0}}]);