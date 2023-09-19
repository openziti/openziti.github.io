"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[9369],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||a;return n?i.createElement(m,o(o({ref:t},p),{},{components:n})):i.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},77174:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=n(87462),r=(n(67294),n(3905));const a={title:"Enrolling"},o=void 0,l={unversionedId:"learn/core-concepts/identities/enrolling",id:"learn/core-concepts/identities/enrolling",title:"Enrolling",description:"Enrolling an Identity",source:"@site/docs/learn/core-concepts/identities/20-enrolling.md",sourceDirName:"learn/core-concepts/identities",slug:"/learn/core-concepts/identities/enrolling",permalink:"/docs/learn/core-concepts/identities/enrolling",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/learn/core-concepts/identities/20-enrolling.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"Enrolling"},sidebar:"docsSidebar",previous:{title:"Creating",permalink:"/docs/learn/core-concepts/identities/creating"},next:{title:"Ziti Services",permalink:"/docs/learn/core-concepts/services/overview"}},s={},c=[{value:"Enrolling an Identity",id:"enrolling-an-identity",level:2},{value:"Overview",id:"overview",level:3},{value:"One Time Token Enrollment - Internal PKI",id:"one-time-token-enrollment---internal-pki",level:3},{value:"3rd Party CA - One Time Token",id:"3rd-party-ca---one-time-token",level:3},{value:"3rd Party CA - Auto",id:"3rd-party-ca---auto",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"enrolling-an-identity"},"Enrolling an Identity"),(0,r.kt)("p",null,"All connections made to the Ziti network leverage ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Mutual_authentication"},"mutual TLS"),'\nwhich means every client needs a valid X509 certificate which it will present to the Ziti network during the connection\nprocess. The process of obtaining a key/certificate pair and presenting it securely to the Ziti Controller is called\n"Enrollment".'),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("p",null,"All identities need to be enrolled with the Ziti Controller so the Ziti Controller can authenticate the incoming connection.\nThis process is slightly different for each type of identity and is complex. The easiest way to enroll an identity is to\nuse either the Ziti Desktop Edge/Ziti Mobile Edge for your operating system. Alternatively, you may perform the enrollment separate\nwith the ",(0,r.kt)("inlineCode",{parentName:"p"},"ziti")," CLI which can be downloaded from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openziti/ziti/releases/latest"},"GitHub releases page")," "),(0,r.kt)("h3",{id:"one-time-token-enrollment---internal-pki"},"One Time Token Enrollment - Internal PKI"),(0,r.kt)("p",null,"Perhaps the easiest path to an enrolled identity is by using the one-time token enrollment flow. This flow leverages the\nPKI configured in the Ziti Controller.  Using the one-time token flow - the ",(0,r.kt)("inlineCode",{parentName:"p"},"ziti")," CLI will generate a private key\nand a certificate signing request for the Ziti Controller's built-in certificate authority to fulfill."),(0,r.kt)("p",null,"Follow these steps to enroll an identity with a one-time token:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./creating"},"create the Identity")),(0,r.kt)("li",{parentName:"ul"},"download or copy the JWT - this file contains the single use token"),(0,r.kt)("li",{parentName:"ul"},"run the ",(0,r.kt)("inlineCode",{parentName:"li"},"ziti")," CLI:")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example Usage:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ziti edge enroll \\\n    --jwt ${jwt_file} \\\n    --out ${identity_config_file}\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The output from the ",(0,r.kt)("inlineCode",{parentName:"p"},"ziti")," CLI is a permanent identity configuration file which\nmust be stored securely. This file contains within it the private key that backs\nthe certificate issued by the Ziti Controller.  This file should not be\ntransferred or shared and should not be moved from the machine unless you are\nconfident you understand the risks involved in doing so.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example Usage for ",(0,r.kt)("inlineCode",{parentName:"strong"},"ziti-edge-tunnel")," CLI")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# enroll from a token file\n./ziti-edge-tunnel enroll --jwt ./myTunneler.jwt --identity ./myTunneler.json\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# enroll from stdin\n./ziti-edge-tunnel enroll --jwt - --identity ./myTunneler.json < ./myTunneler.jwt\n")),(0,r.kt)("h3",{id:"3rd-party-ca---one-time-token"},"3rd Party CA - One Time Token"),(0,r.kt)("p",null,"This flow allows you to pre-create identities for a 3rd party CA with distinct role attributes. This flow is similar to the One Time Token flow from above except that it expects that a private key and certificate have\nalready been created on or distributed to the machine that is about to enroll and that the certificate presented is\nissued by a validated, ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn/core-concepts/pki#third-party-ca-optional"},"third party CA"),"."),(0,r.kt)("p",null,"Follow these steps to enroll a 3rd Party CA - one-time token identity:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./creating"},"create the Identity")),(0,r.kt)("li",{parentName:"ul"},"download or copy the JWT - this file contains the one-time token"),(0,r.kt)("li",{parentName:"ul"},"run the ",(0,r.kt)("inlineCode",{parentName:"li"},"ziti")," CLI. Notice you can provide the filename of the identity config JSON file to output:")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example Usage:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ziti edge enroll \\\n    --cert ${user_certificate} \\\n    --key ${user_private_key} \\\n    --jwt ${one_time_jwt_file} \\\n    --out ${identity_config_file}\n")),(0,r.kt)("h3",{id:"3rd-party-ca---auto"},"3rd Party CA - Auto"),(0,r.kt)("p",null,"When using a third party CA identity creation process in the Ziti Controller is\nautomatic. Enrolling the identity will create it with the default role attributes that were specified when the 3rd party CA was created."),(0,r.kt)("p",null,'Like "3rd Party CA - One Time Token" - this flow expects that a private key and certificate have\nalready been created on or distributed to the machine that is about to enroll.\nThe certificate presented to the Ziti Controller must be issued by a ',(0,r.kt)("a",{parentName:"p",href:"/docs/learn/core-concepts/pki#third-party-ca-optional"},"third\nparty CA")," that was already\nimported and verified in the Ziti Controller with the\n",(0,r.kt)("inlineCode",{parentName:"p"},"isAutoCaEnrollmentEnabled")," property set to true."),(0,r.kt)("p",null,"Using the ",(0,r.kt)("inlineCode",{parentName:"p"},"ziti")," CLI will also require the re-use of a permanent JWT that is unique to the external CA. The JWT\ncan be downloaded from the Ziti Controller from:  ",(0,r.kt)("inlineCode",{parentName:"p"},"${controller_uri}/cas/${id}/jwt")," where ",(0,r.kt)("inlineCode",{parentName:"p"},"${controller_uri}")," represents\nthe fully qualified address of the Ziti Controller api and ",(0,r.kt)("inlineCode",{parentName:"p"},"${id}")," represents the identifier for the given third party CA."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example Usage:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ziti edge enroll \\\n    --cert ${user_certificate} \\\n    --key ${user_private_key} \\\n    --jwt ${reusable_ca_jwt_file} \\\n    --out ${identity_config_file}\n")),(0,r.kt)("p",null,"If supplied, the argument to option ",(0,r.kt)("inlineCode",{parentName:"p"},"--idname")," will be used as the name for the identity created. The default name of auto-created identities is generated from a template that uses values from the user certificate i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"[caName]-[commonName]"),"."))}u.isMDXComponent=!0}}]);