"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[7628],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(67294),o=r(86010);const a={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:r,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(a.tabItem,i),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>w});var n=r(87462),o=r(67294),a=r(86010),i=r(12466),l=r(16550),s=r(91980),u=r(67392),c=r(50012);function p(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:o}}=e;return{value:t,label:r,attributes:n,default:o}}))}function d(e){const{values:t,children:r}=e;return(0,o.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const n=(0,l.k6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(a),(0,o.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(n.location.search);t.set(a,e),n.replace({...n.location,search:t.toString()})}),[a,n])]}function g(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,a=d(e),[i,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[s,u]=f({queryString:r,groupId:n}),[p,g]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,a]=(0,c.Nk)(r);return[n,(0,o.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:n}),h=(()=>{const e=s??p;return m({value:e,tabValues:a})?e:null})();(0,o.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),g(e)}),[u,g,a]),tabValues:a}}var h=r(72389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:r,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,r=c.indexOf(t),n=u[r].value;n!==l&&(p(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:i}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},i,{className:(0,a.Z)("tabs__item",y.tabItem,i?.className,{"tabs__item--active":l===t})}),r??t)})))}function k(e){let{lazy:t,children:r,selectedValue:n}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===n));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=g(e);return o.createElement("div",{className:(0,a.Z)("tabs-container",y.tabList)},o.createElement(b,(0,n.Z)({},e,t)),o.createElement(k,(0,n.Z)({},e,t)))}function w(e){const t=(0,h.Z)();return o.createElement(v,(0,n.Z)({key:String(t)},e))}},47653:(e,t,r)=>{r.d(t,{ZP:()=>u});var n=r(87462),o=(r(67294),r(3905)),a=r(74866),i=r(85162);const l={toc:[]},s="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(s,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"All Ziti components log to standard output and standard error file descriptors."),(0,o.kt)(a.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"goformats",label:"Log Formats",mdxType:"TabItem"},(0,o.kt)("p",null,"Output from Ziti components comes in three distinct styles. Choose the style of logging that is right for you."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pfxlog")," - a human-readable format leveraging ascii escape codes to display colorized log level"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"json")," - a machine-readable format targeting automated processes for log aggregation/searching"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"text")," - a human-readable format using plain text (no ascii escape codes)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ziti-router run ./router.yml --log-formatter pfxlog\n"))),(0,o.kt)(i.Z,{value:"golevels",label:"Log Levels",mdxType:"TabItem"},(0,o.kt)("p",null,"By default the Ziti components will log at the ",(0,o.kt)("inlineCode",{parentName:"p"},"INFO")," level. This means that log messages ",(0,o.kt)("inlineCode",{parentName:"p"},"INFO"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"WARNING"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ERROR"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"FATAL")," will all be emitted. Ziti components all support verbose logging by adding ",(0,o.kt)("inlineCode",{parentName:"p"},"--verbose or -v")," to the command being executed. Verbose mode will add ",(0,o.kt)("inlineCode",{parentName:"p"},"DEBUG")," log messages."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ziti-controller run ./ctrl.yml --verbose\n")))))}u.isMDXComponent=!0},20476:(e,t,r)=>{r.d(t,{ZP:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={toc:[]},i="wrapper";function l(e){let{components:t,...r}=e;return(0,o.kt)(i,(0,n.Z)({},a,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("br",null),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ziti")," CLI will help you get a session from the controller's management API. You will be prompted to trust any new server certificates. Your session cache and trust store are managed by the CLI in your home directory."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# implies https://localhost:1280\nziti edge login -u admin -p admin\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# implies https://\nziti edge login ziti.example.com:8441 -u admin -p admin\n")))}l.isMDXComponent=!0},11792:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var n=r(87462),o=(r(67294),r(3905)),a=(r(74866),r(85162),r(43249),r(20476)),i=r(47653);const l={id:"deployment",title:"Router Deployment"},s=void 0,u={unversionedId:"reference/deployments/router/deployment",id:"reference/deployments/router/deployment",title:"Router Deployment",description:"The Ziti Router is the entry point for Ziti-based clients. It is responsible for authenticating incoming connections by",source:"@site/docs/reference/deployments/02-router/01-deployment.md",sourceDirName:"reference/deployments/02-router",slug:"/reference/deployments/router/deployment",permalink:"/docs/reference/deployments/router/deployment",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/reference/deployments/02-router/01-deployment.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"deployment",title:"Router Deployment"},sidebar:"docsSidebar",previous:{title:"Controller",permalink:"/docs/reference/deployments/controller"},next:{title:"Config Examples",permalink:"/docs/reference/deployments/router/router-configuration"}},c={},p=[{value:"Deployment",id:"deployment",level:2},{value:"Process of Deployment",id:"process-of-deployment",level:2},{value:"Download Binaries",id:"download-binaries",level:3},{value:"Create Config File",id:"router-config-file",level:3},{value:"Create Router",id:"router-create",level:3},{value:"Enroll Router",id:"enrollment",level:3},{value:"Run Router",id:"router-run",level:3},{value:"Manage Router",id:"router-update",level:3},{value:"Configure Logging",id:"configure-logging",level:3}],d={toc:p},m="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Ziti Router is the entry point for Ziti-based clients. It is responsible for authenticating incoming connections by\nverifying the connecting client has a valid network session.  It also routes traffic to whatever the\ndestination is for the given service. In simple deployments can have a single router as is the case\nwith the ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn/quickstarts/network/"},"Ziti Network Quickstart"),"."),(0,o.kt)("h2",{id:"deployment"},"Deployment"),(0,o.kt)("p",null,"This article describes the process of deploying a router. It covers what attributes can be updated, removed, and added after the deployment is completed."),(0,o.kt)("admonition",{title:"Notes",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The life cycle of a router does not allow for the advertised, external DNS name or IP address to change. A new router must be created.")),(0,o.kt)("h2",{id:"process-of-deployment"},"Process of Deployment"),(0,o.kt)("p",null,"It is advisable to generate private keys on the same host where they'll be used. This minimizes the risk of losing custody of the private key material."),(0,o.kt)("admonition",{title:"Note",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Ensure you are logged in for managing routers with the CLI"),(0,o.kt)(a.ZP,{mdxType:"CliLogin"})),(0,o.kt)("h3",{id:"download-binaries"},"Download Binaries"),(0,o.kt)("p",null,"You will need the ",(0,o.kt)("inlineCode",{parentName:"p"},"ziti-router")," executable from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openziti/ziti/releases/latest"},"OpenZiti Releases"),"."),(0,o.kt)("h3",{id:"router-config-file"},"Create Config File"),(0,o.kt)("p",null,"The router loads its configuration from a YAML file. You may use the ",(0,o.kt)("inlineCode",{parentName:"p"},"ziti create config router")," command to generate a config file, influencing the contents with options and variables. Here are ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/deployments/router/router-configuration"},"some practical examples representing common deployment scenarios"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"identity.key")," field in the config behaves differently for routers. If a file exists in the path indicated by ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," then the key will be used during router enrollment. If it does not exist then a unique key will be generated."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'identity:\n    cert:                 "~/.ziti/config/certs/router01.zitinetwork.example.org.cert"\n    server_cert:          "~/.ziti/config/certs/router01.zitinetwork.example.org.server.chain.cert"\n    key:                  "~/.ziti/config/certs/router01.zitinetwork.example.org.key"\n    ca:                   "~/.ziti/config/certs/router01.zitinetwork.example.org.cas"\n')),(0,o.kt)("h3",{id:"router-create"},"Create Router"),(0,o.kt)("p",null,"The life cycle of a router begins by calling the controller's management API to create a router. You can do this with ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/developer/api/"},"the REST API")," or ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/deployments/router/cli-mgmt#create-router"},"the ",(0,o.kt)("inlineCode",{parentName:"a"},"ziti")," CLI"),"."),(0,o.kt)("h3",{id:"enrollment"},"Enroll Router"),(0,o.kt)("p",null,"Creating a router yields a one-time enrollment token that you may store as a JWT file. Enrollment consumes the token and facilitates issuing a client certificate for the router, establishing cryptographic trust with the controller."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ziti router enroll config.yaml --jwt token.jwt\n")),(0,o.kt)("h3",{id:"router-run"},"Run Router"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ziti router run config.yaml\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"# /etc/systemd/system/ziti-router.service\n[Unit]\nDescription=Ziti Router\nAfter=network.target\n\n[Service]\nUser=root\nWorkingDirectory=/etc/openziti/router\nExecStart=/usr/local/sbin/ziti-router run /etc/openziti/router/config.yml --log-formatter pfxlog\nRestart=always\nRestartSec=2\nLimitNOFILE=65536\n\n[Install]\nWantedBy=multi-user.target\n")),(0,o.kt)("h3",{id:"router-update"},"Manage Router"),(0,o.kt)("p",null,"You can manage a router's role attributes, tags, etc. with ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/developer/api/"},"the REST API")," or ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/deployments/router/cli-mgmt#managing-routers-with-the-cli"},"the ",(0,o.kt)("inlineCode",{parentName:"a"},"ziti")," CLI")," for more details"),(0,o.kt)("h3",{id:"configure-logging"},"Configure Logging"),(0,o.kt)(i.ZP,{mdxType:"CliLogFormats"}))}f.isMDXComponent=!0},43249:()=>{}}]);