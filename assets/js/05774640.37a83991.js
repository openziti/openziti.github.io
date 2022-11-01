"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[6270],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,d=u["".concat(l,".").concat(m)]||u[m]||f[m]||a;return n?i.createElement(d,o(o({ref:t},s),{},{components:n})):i.createElement(d,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7673:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var i=n(7462),r=(n(7294),n(3905));const a={},o="Zitification",p={permalink:"/blog/zitification",source:"@site/blog/zitification/index.md",title:"Zitification",description:'"Zitification" or "zitifying" is the act of taking an application and incorporating a Ziti SDK into that application. Once an',date:"2022-11-01T02:05:21.000Z",formattedDate:"November 1, 2022",tags:[],readingTime:1.185,hasTruncateMarker:!1,authors:[],frontMatter:{},prevItem:{title:"wildcard-dns/cheatsheet",permalink:"/blog/wildcard-dns/cheatsheet"},nextItem:{title:"Zitifying Kubectl",permalink:"/blog/zitification/kubernetes"}},l={authorsImageUrls:[]},c=[],s={toc:c};function f(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'"Zitification" or "zitifying" is the act of taking an application and incorporating a Ziti SDK into that application. Once an\napplication has a Ziti SDK incorporated into it, that application can now access network resources securely from anywhere in\nthe world provided that the computer has internet access: NO VPN NEEDED, NO ADDITIONAL SOFTWARE NEEDED.'),(0,r.kt)("p",null,"Integrating a Ziti SDK into your application and enrolling the application itself into a Ziti Network provides you with ",(0,r.kt)("em",{parentName:"p"},"\ntremendous")," additional security. An application using a ",(0,r.kt)("a",{parentName:"p",href:"/docs/introduction/intro#overview-of-a-ziti-network"},"Ziti Network")," configured with a truly zero-trust mindset will be\n",(0,r.kt)("strong",{parentName:"p"},"IMMUNE"),' to the "expand/multiply" phases of classic ',(0,r.kt)("a",{parentName:"p",href:"https://netfoundry.io/ztna-ransomware/"},"ransomware attacks"),". As recent events have shown, it's probably not\na case of if your application will be attacked, but when."),(0,r.kt)("p",null,'In these posts we\'re going to explore how common applications can be "zitified". The first application we are going to focus\non will be ',(0,r.kt)("inlineCode",{parentName:"p"},"ssh")," and it's corollary ",(0,r.kt)("inlineCode",{parentName:"p"},"scp"),'. At first, you might think, "why even bother" zitifying (of all things) ',(0,r.kt)("inlineCode",{parentName:"p"},"ssh"),"\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"scp"),"? These applications are vital to system administration, and we have been using ",(0,r.kt)("inlineCode",{parentName:"p"},"ssh")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"scp"),' "safely" on the internet for years. Hopefully you\'re now interested enough to find out in the first post:\n',(0,r.kt)("a",{parentName:"p",href:"/blog/zitification/zitifying-ssh/"},"zitifying ssh")),(0,r.kt)("p",null,"If you'd prefer to read about other zitifications, a running list of zitified apps will be updated below:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/blog/zitification/zitifying-ssh/"},"ssh->zssh")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/blog/zitification/zitifying-scp/"},"scp->zscp")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/blog/zitification/kubernetes/"},"Kubernetes cluster manager - kubectl"))))}f.isMDXComponent=!0}}]);