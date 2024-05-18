"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[8306],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),p=i,m=d["".concat(s,".").concat(p)]||d[p]||h[p]||a;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),i=n(86010);const a={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,i.Z)(a.tabItem,o),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(87462),i=n(67294),a=n(86010),o=n(12466),l=n(16550),s=n(91980),c=n(67392),u=n(50012);function d(e){return function(e){return i.Children.map(e,(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:i}}=e;return{value:t,label:n,attributes:r,default:i}}))}function h(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(a),(0,i.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=h(e),[o,l]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[s,c]=m({queryString:n,groupId:r}),[d,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,u.Nk)(n);return[r,(0,i.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),y=(()=>{const e=s??d;return p({value:e,tabValues:a})?e:null})();(0,i.useLayoutEffect)((()=>{y&&l(y)}),[y]);return{selectedValue:o,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),f(e)}),[c,f,a]),tabValues:a}}var y=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),h=e=>{const t=e.currentTarget,n=u.indexOf(t),r=c[n].value;r!==l&&(d(t),s(r))},p=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:o}=e;return i.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:p,onClick:h},o,{className:(0,a.Z)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":l===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:r}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function v(e){const t=f(e);return i.createElement("div",{className:(0,a.Z)("tabs-container",b.tabList)},i.createElement(g,(0,r.Z)({},e,t)),i.createElement(k,(0,r.Z)({},e,t)))}function w(e){const t=(0,y.Z)();return i.createElement(v,(0,r.Z)({key:String(t)},e))}},81070:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>m,default:()=>v,frontMatter:()=>p,metadata:()=>f,toc:()=>b});var r=n(87462),i=(n(67294),n(3905));const a={toc:[]},o="wrapper";function l(e){let{components:t,...n}=e;return(0,i.kt)(o,(0,r.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'#creates a new user named "NewUser"\nziti edge create identity user "NewUser" -o NewUser.jwt\n')))}l.isMDXComponent=!0;const s={toc:[]},c="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'    Verb: POST\n\n    name:\n      The name of the CA to create\n    isAutoCaEnrollmentEnabled:\n      controls if the CA can be used for automatic enrollment\n    isOttCaEnrollmentEnabled:\n      controls if the CA be used for one time token enrollment\n    isAuthEnabled:\n      controls if the CA is enabled for authentication. Devices can enroll but not connect if set to false\n    certPem:\n      the CA to upload in PEM format\n    body:\n    {\n      "name": "${string}",\n      "isAutoCaEnrollmentEnabled": ${true|false},\n      "isOttCaEnrollmentEnabled": ${true|false},\n      "isAuthEnabled": ${true|false},\n      "certPem": "${string}"\n    }\n')))}u.isMDXComponent=!0;var d=n(74866),h=n(85162);const p={title:"Creating"},m=void 0,f={unversionedId:"learn/core-concepts/identities/creating",id:"learn/core-concepts/identities/creating",title:"Creating",description:"Creating an Identity",source:"@site/docs/learn/core-concepts/identities/10-creating.mdx",sourceDirName:"learn/core-concepts/identities",slug:"/learn/core-concepts/identities/creating",permalink:"/docs/learn/core-concepts/identities/creating",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/learn/core-concepts/identities/10-creating.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Creating"},sidebar:"docsSidebar",previous:{title:"Ziti Identities",permalink:"/docs/learn/core-concepts/identities/overview"},next:{title:"Enrolling",permalink:"/docs/learn/core-concepts/identities/enrolling"}},y={},b=[{value:"Creating an Identity",id:"creating-an-identity",level:2},{value:"Choosing an Enrollment Method",id:"choosing-an-enrollment-method",level:2},{value:"One Time Token (OTT)",id:"one-time-token-ott",level:3},{value:"3rd Party CA - Overview",id:"3rd-party-ca---overview",level:3},{value:"Adding a 3rd Party CA to the Ziti Controller",id:"adding-a-3rd-party-ca-to-the-ziti-controller",level:4},{value:"3rd Party CA - One Time Token",id:"3rd-party-ca---one-time-token",level:4},{value:"3rd Party CA - Auto Enrolled",id:"3rd-party-ca---auto-enrolled",level:4},{value:"Choosing an Identity Type",id:"choosing-an-identity-type",level:2}],g={toc:b},k="wrapper";function v(e){let{components:t,...n}=e;return(0,i.kt)(k,(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"creating-an-identity"},"Creating an Identity"),(0,i.kt)("p",null,"The mechanism for creating identities is influenced by how your Ziti network is setup, specifically how the PKI is\nestablished. Identities are integrally linked to the PKI configured in a given Ziti network and directly affects how\nidentities are created and enrolled. There are generally three enrollment methods for identities:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"One Time Token (ott) identities using the configured PKI"),(0,i.kt)("li",{parentName:"ul"},"One Time Token (ott) identities using a 3rd Party CA"),(0,i.kt)("li",{parentName:"ul"},"3rd Party auto-enrolled identities")),(0,i.kt)("h2",{id:"choosing-an-enrollment-method"},"Choosing an Enrollment Method"),(0,i.kt)("p",null,"Choosing which type of enrollment your identity will use comes down to whether you are using a 3rd Party CA or not. If the\nnetwork does not have a 3rd Party Certificate configured the only option is to use the One Time Token (OTT) enrollment method."),(0,i.kt)("p",null,"If one or more 3rd Party CA is installed you will need to understand the intention of each 3rd Party certificate."),(0,i.kt)("p",null,"Each of the types of enrollments are secure it just depends on your actual network setup as to which type to choose. If\nyou don't know - just use the One Time Token (OTT) method. The identity can always be recreated at a later date if necessary."),(0,i.kt)("h3",{id:"one-time-token-ott"},"One Time Token (OTT)"),(0,i.kt)("p",null,"The One Time Token method is available to all Ziti networks.  A one time token enrolled identity will\nhave a token generated at the time of the identity's creation.  This token is then submitted at some point in the future\nas part of the ",(0,i.kt)("a",{parentName:"p",href:"./enrolling"},"enrollment")," process.  Once an identity is successfully enrolled - the one time token is\nno longer valid and cannot be used to enroll the same identity again."),(0,i.kt)("p",null,"One time tokens are delivered from the controller as a ",(0,i.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc7519"},"jwt")," and the token\nexpires 24 hours after the identity is created.  The token is downloadable via the Ziti Admin Console. After you create\na user you can go to the Identities page and click the icon that looks like a certificate to download the .jwt file."),(0,i.kt)("p",null,"You can also create an identity for one time token enrollment using the ",(0,i.kt)("inlineCode",{parentName:"p"},"ziti")," cli tool.  This command will\ncreate a new identity and output the jwt to the selected path. You can then transfer the .jwt file to the device where\nthe permanent identity JSON file will be installed by running the ",(0,i.kt)("inlineCode",{parentName:"p"},"enroll")," command."),(0,i.kt)(l,{mdxType:"CreateCliExampleMd"}),(0,i.kt)("h3",{id:"3rd-party-ca---overview"},"3rd Party CA - Overview"),(0,i.kt)("p",null,'The controller is capable of using an existing PKI for authentication and authorization rather than to PKI\nconfigured in the controller.  Certificates that are not controlled by the controller are referred to as "3rd\nparty". If you have an existing PKI setup you wish to reuse or if you are just interested in learning how\nto use a 3rd Party CA this section is for you.'),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Reusing a PKI is not a simple topic and managing and maintaining a PKI is out of the scope of this guide.")),(0,i.kt)("p",null,"A 3rd Party CA will need to be created and the public certificate uploaded into the controller. After using an\nexisting PKI to reuse/generate a certificate, the controller will be to create identities which will be expected to\npresent a certificate during the connection process that is valid per the provided certificate."),(0,i.kt)("h4",{id:"adding-a-3rd-party-ca-to-the-ziti-controller"},"Adding a 3rd Party CA to the Ziti Controller"),(0,i.kt)("p",null,"Adding a certificate to the controller is easy using the console."),(0,i.kt)(d.Z,{mdxType:"Tabs"},(0,i.kt)(h.Z,{value:"tabid-new-ca-ui",label:"New CA via UI",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},'On the left side click "Certificate Authorities"'),(0,i.kt)("li",{parentName:"ol"},'In the top right corner of the screen click the "plus" image to add a new Certificate Authority'),(0,i.kt)("li",{parentName:"ol"},"Enter the name of the Certificate Authority you would like to create"),(0,i.kt)("li",{parentName:"ol"},"Choose if the CA should be used for Enrollment (yes) and Auth (yes)"),(0,i.kt)("li",{parentName:"ol"},"Click save"))),(0,i.kt)(h.Z,{value:"tabid-new-ca-cli",label:"New CA via REST",mdxType:"TabItem"},(0,i.kt)(u,{mdxType:"CreateCaJsonMd"}))),(0,i.kt)("h4",{id:"3rd-party-ca---one-time-token"},"3rd Party CA - One Time Token"),(0,i.kt)("p",null,"3rd Party CA OTT enrollment is closely related to ",(0,i.kt)("a",{parentName:"p",href:"#one-time-token-ott"},"OTT Enrollment"),". The main difference is the\nutilization of a 3rd party CA certificate rather than the configured edge CA and PKI. In this method, the system\ndoes not have access to the 3rd party CA private key and thus cannot provide CSR fulfillment capabilities. Instead it is\nassumed that the enrolling device has a separate process to acquire signed certificates. Rather than submitting a CSR\nthe client uses an already acquired signed certificate as its client certificate for the enrollment request. The client\ncertificate is validated against the CA certificate tied to the one time token."),(0,i.kt)("p",null,"Similar to the ",(0,i.kt)("a",{parentName:"p",href:"#one-time-token-ott"},"OTT Enrollment")," process, identities must be provisioned ahead of enrollment in\norder to generate one time token required and to creat the jwt that can be delivered to enrolling devices. This means\nthat the provisioning of the identities and client certificates must be coordinated. Identities can be enrolled with a one time token flow similar to the ",(0,i.kt)("a",{parentName:"p",href:"#one-time-token-ott"},"one time token flow"),"."),(0,i.kt)("h4",{id:"3rd-party-ca---auto-enrolled"},"3rd Party CA - Auto Enrolled"),(0,i.kt)("p",null,"CA Auto Enrollment is useful in situations where devices are provisioned with certificates en-mass that need to be able\nto register as identities within the edge. This enrollment method allows for device provisioning processes to skip the\nmanual configuration of the edge and instead allow clients to present a signed client certificate to generate an\nidentity during the enrollment process. The identity will grant the client access to authenticate only - any\nauthorization will need to be done after the device identities have been created."),(0,i.kt)("p",null,"A certificate can only be used for one identity. The edge does not allow the same certificate to be used for\nmultiple identities. An enrollment request is comprised of a special enrollment URL used to perform an HTTP POST request\nusing the signed client certificate as the TLS client certificate and an optional JSON payload that allows the client to\nspecify the devices display name and internal username. See ",(0,i.kt)("a",{parentName:"p",href:"./enrolling"},"enrollment")," for more details on enrolling."),(0,i.kt)(d.Z,{mdxType:"Tabs"},(0,i.kt)(h.Z,{label:"New 3rd Party CA Identity via UI",value:"tabid-new-identity-ui",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},'On the left side click "Certificate Authorities"'),(0,i.kt)("li",{parentName:"ol"},'In the top right corner of the screen click the "plus" image to add a new Certificate Authority'),(0,i.kt)("li",{parentName:"ol"},"Enter the name of the Certificate Authority you would like to create"),(0,i.kt)("li",{parentName:"ol"},"Choose if the CA should be used for Enrollment (yes) and Auth (yes)"),(0,i.kt)("li",{parentName:"ol"},"Click save"))),(0,i.kt)(h.Z,{label:"New 3rd Party Identity via CLI",value:"tabid-new-identity-cli",mdxType:"TabItem"},(0,i.kt)(l,{mdxType:"CreateIdCliMd"}))),(0,i.kt)("h2",{id:"choosing-an-identity-type"},"Choosing an Identity Type"),(0,i.kt)("p",null,"The three types of identities are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"User"),(0,i.kt)("li",{parentName:"ul"},"Device"),(0,i.kt)("li",{parentName:"ul"},"Service")),(0,i.kt)("p",null,"These are functionally equivalent and have identical properties. You may wish to express the intended purpose of an\nidentity by choosing one or another type when the identity is created. The type can not be changed."))}v.isMDXComponent=!0}}]);