"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[1080],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>y});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),d=i,y=p["".concat(c,".").concat(d)]||p[d]||f[d]||o;return t?n.createElement(y,a(a({ref:r},u),{},{components:t})):n.createElement(y,a({ref:r},u))}));function y(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},49587:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=t(87462),i=(t(67294),t(3905));const o={title:"Tunnelers"},a=void 0,s={unversionedId:"reference/tunnelers/index",id:"reference/tunnelers/index",title:"Tunnelers",description:"Each tunneler operates similarly. The goal is to have the tunneler seamlessly intercept traffic destined for Ziti",source:"@site/docs/reference/tunnelers/index.mdx",sourceDirName:"reference/tunnelers",slug:"/reference/tunnelers/",permalink:"/docs/reference/tunnelers/",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/reference/tunnelers/index.mdx",tags:[],version:"current",frontMatter:{title:"Tunnelers"},sidebar:"docsSidebar",previous:{title:"Overview",permalink:"/docs/reference/"},next:{title:"Windows",permalink:"/docs/reference/tunnelers/windows"}},c={},l=[],u={toc:l},p="wrapper";function f(e){let{components:r,...t}=e;return(0,i.kt)(p,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Each tunneler operates similarly. The goal is to have the tunneler seamlessly intercept traffic destined for Ziti\nservices and forward that traffic over the Ziti overlay instead of the ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/glossary#underlay"},"underlay")," network. All processes on the host can access the Ziti services available to the tunneler's loaded identities."),(0,i.kt)("p",null,"A tunneler configures a Ziti nameserver for resolving Ziti service addresses and associated Ziti IP routes in a device's OS. These are quickly updated when a policy change alters the visible Ziti services for any loaded Ziti identity."))}f.isMDXComponent=!0}}]);