"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[451],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=i,f=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},60716:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const o={},a="Endpoint Registration",s={unversionedId:"learn/core-concepts/clients/process-sequences/EndpointRegistration",id:"learn/core-concepts/clients/process-sequences/EndpointRegistration",title:"Endpoint Registration",description:"Steps",source:"@site/docs/learn/core-concepts/clients/process-sequences/EndpointRegistration.md",sourceDirName:"learn/core-concepts/clients/process-sequences",slug:"/learn/core-concepts/clients/process-sequences/EndpointRegistration",permalink:"/docs/learn/core-concepts/clients/process-sequences/EndpointRegistration",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/learn/core-concepts/clients/process-sequences/EndpointRegistration.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Endpoint  Initialization",permalink:"/docs/learn/core-concepts/clients/process-sequences/EndpointInitialization"},next:{title:"Ziti Identities",permalink:"/docs/learn/core-concepts/identities/overview"}},l={},c=[{value:"Steps",id:"steps",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"endpoint-registration"},"Endpoint Registration"),(0,i.kt)("mermaid",{value:"sequenceDiagram\ntitle Ziti Nde Registration Flow\nautonumber 1\nAdmin->> Controller:Create the enrolling identity/edge router\nController ->> Admin: Return the enrollment JWT\nAdmin->> SDK: Deliver the enrollment JWT to the enrolling device\nSDK->> SDK : Parse the JWT and perform initial inspection\nSDK ->> Controller:Retrieve the Controller's Server Certificate\nSDK ->> SDK: Verify the JWT's signature\nSDK ->> Controller: Retrieve and Trust the EST CA Store (well known)\nSDK ->> Controller : Generate a CSR and an enrollment request\nController ->> SDK : Validate and return the request and certificiates\nSDK ->> SDK: Store signed certificate\nnote over SDK: Endpoint Registered"}),(0,i.kt)("h2",{id:"steps"},"Steps"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"A person with administrative rights to the Network instance creates a new identity."),(0,i.kt)("li",{parentName:"ol"},"The Ziti controller returns a JWT to be used as a one time token to register the new identity."),(0,i.kt)("li",{parentName:"ol"},"The administrator delivers the JWT to the endpoint by whatever means required.  This is the true bootstrapping of the trust model, and should be well defined."),(0,i.kt)("li",{parentName:"ol"},"The JWT is parsed and information, such as the name of the identity and the address of the controller are parsed from the token"),(0,i.kt)("li",{parentName:"ol"},"The server certificate is retrieved from the controller."),(0,i.kt)("li",{parentName:"ol"},"The JWT's signature is cryptographically verified with the controller's public certificate."),(0,i.kt)("li",{parentName:"ol"},"The Certificate Authority public key is retrieved via the controller's .well-known endpoint.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The CA is added to the client as a trusted certificate.  This is the public key of the certificate used to sign all the certificates within the network instance, and is used to verify other nodes when connecting as well."))),(0,i.kt)("li",{parentName:"ol"},"The endpoint generates a Certificate Signing Request and forwards it to the controller along with an enrollment request. ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'The token value (jti) in the JWT is used as a unique identifier for the controller to verify the endpoint.  That token is held by the controller as well when created, and then deleted when it is "used", rending the JWT useless after the enrollment.'))),(0,i.kt)("li",{parentName:"ol"},"The controller validates the token value, and the information included in the CSR, signs the certificate, and returns it to the endpoint."),(0,i.kt)("li",{parentName:"ol"},"The endpoint stores the signed certificate.\nThe endpoint is now registered to the network, and has all the necessary certificates to identify itself and participate.")))}d.isMDXComponent=!0}}]);