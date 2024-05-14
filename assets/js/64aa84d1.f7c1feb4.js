"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[1177],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=i,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),i=n(86010);const a={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,i.Z)(a.tabItem,o),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>T});var r=n(87462),i=n(67294),a=n(86010),o=n(12466),l=n(16550),u=n(91980),s=n(67392),c=n(50012);function p(e){return function(e){return i.Children.map(e,(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:i}}=e;return{value:t,label:n,attributes:r,default:i}}))}function d(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(a),(0,i.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=d(e),[o,l]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[u,s]=f({queryString:n,groupId:r}),[p,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,c.Nk)(n);return[r,(0,i.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),h=(()=>{const e=u??p;return m({value:e,tabValues:a})?e:null})();(0,i.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:o,selectValue:(0,i.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),s(e),g(e)}),[s,g,a]),tabValues:a}}var h=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:l,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),r=s[n].value;r!==l&&(p(t),u(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:o}=e;return i.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},o,{className:(0,a.Z)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":l===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function k(e){const t=g(e);return i.createElement("div",{className:(0,a.Z)("tabs-container",b.tabList)},i.createElement(y,(0,r.Z)({},e,t)),i.createElement(v,(0,r.Z)({},e,t)))}function T(e){const t=(0,h.Z)();return i.createElement(k,(0,r.Z)({key:String(t)},e))}},76827:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=n(87462),i=(n(67294),n(3905)),a=n(74866),o=n(85162);const l={id:"router-configuration",title:"Router Configuration",sidebar_label:"Configuration",hide_table_of_contents:!1},u=void 0,s={unversionedId:"guides/deployments/linux/router/router-configuration",id:"guides/deployments/linux/router/router-configuration",title:"Router Configuration",description:"This article expands on the Linux router deployment article with configuration concepts and examples.",source:"@site/docs/guides/deployments/10-linux/20-router/30-configuration.md",sourceDirName:"guides/deployments/10-linux/20-router",slug:"/guides/deployments/linux/router/router-configuration",permalink:"/docs/guides/deployments/linux/router/router-configuration",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/guides/deployments/10-linux/20-router/30-configuration.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{id:"router-configuration",title:"Router Configuration",sidebar_label:"Configuration",hide_table_of_contents:!1},sidebar:"docsSidebar",previous:{title:"Router Deployment",permalink:"/docs/guides/deployments/linux/router/deploy"},next:{title:"CLI Mgmt",permalink:"/docs/guides/deployments/linux/router/cli-mgmt"}},c={},p=[{value:"Config Management",id:"config-management",level:2},{value:"Identity",id:"identity",level:2},{value:"Private Key",id:"private-key",level:3},{value:"Optional Capabilities",id:"optional-capabilities",level:2},{value:"Examples",id:"examples",level:2},{value:"Public Router config.yml",id:"public-router-configyml",level:3},{value:"Private Router with Tunneler config.yml",id:"private-router-with-tunneler-configyml",level:3}],d={toc:p},m="wrapper";function f(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This article expands on the ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/deployments/linux/router/deploy"},"Linux router deployment")," article with configuration concepts and examples."),(0,i.kt)("h2",{id:"config-management"},"Config Management"),(0,i.kt)("p",null,"Edit the generated configuration YAML file or run ",(0,i.kt)("inlineCode",{parentName:"p"},"ziti create config router")," to generate one from scratch. Run ",(0,i.kt)("inlineCode",{parentName:"p"},"ziti create config environment")," for descriptions of the environment variables that influence the generated output."),(0,i.kt)("h2",{id:"identity"},"Identity"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"identity")," configuration section defines the paths to the router's identity files: certs, keys, and a bundle of trusted root CA certificates. All of the files will be created in the specified paths at the time of router enrollment. The router will automatically renew its certificates if the path remains writable."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"identity:\n    cert:                 /var/lib/ziti-router/client.cert\n    server_cert:          /var/lib/ziti-router/server.chain.cert\n    key:                  /var/lib/ziti-router/private.key\n    ca:                   /var/lib/ziti-router/trusted-root.cas\n")),(0,i.kt)("h3",{id:"private-key"},"Private Key"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/configuration/conventions#identity"},(0,i.kt)("inlineCode",{parentName:"a"},"identity"))," configuration section is conventional for routers and controllers, but the ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," sub-property behaves differently for routers. If a private key exists in the path, then it will be used to sign router enrollment certificate requests. If it does not exist, then a private key will be locally generated and stored in that path."),(0,i.kt)("p",null,"If present, the ",(0,i.kt)("inlineCode",{parentName:"p"},"server_key")," signs the router's server certificate request. Otherwise, the ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," sub-property is used for both client and server certificate."),(0,i.kt)("p",null,"The private keys' values are assumed to be ",(0,i.kt)("inlineCode",{parentName:"p"},"file://")," URLs if unspecified. Alternatives include ",(0,i.kt)("inlineCode",{parentName:"p"},"pkcs11://")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"parsec://")," URLs for hardware keys."),(0,i.kt)("h2",{id:"optional-capabilities"},"Optional Capabilities"),(0,i.kt)("p",null,"You may enable or disable capabilities of the router by including or omitting their sections in the configuration file. These are a few of the most relevant configuration sections. Refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/configuration/router"},"the router configuration reference")," for more complete information."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/configuration/router#edge"},(0,i.kt)("inlineCode",{parentName:"a"},"edge")),' - Most routers include this section which configures the router to listen for connections from endpoint identities. This is what makes a router an "edge router." Without this section, the router is a "fabric router" and communicates only with other routers and the control plane.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/configuration/router#link"},(0,i.kt)("inlineCode",{parentName:"a"},"link.listeners"))," - The ",(0,i.kt)("inlineCode",{parentName:"li"},"link")," section configures the router to dial and listen for other routers that are dialing in to create mesh links. Omitting the ",(0,i.kt)("inlineCode",{parentName:"li"},"listeners"),' sub-section makes a router "private." "Public" routers are presumed reachable and listening for other routers.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/configuration/router#listeners"},(0,i.kt)("inlineCode",{parentName:"a"},"listeners[?binding == 'tunnel']"))," - the ",(0,i.kt)("inlineCode",{parentName:"li"},"listeners")," section may contain a special type of binding that configures the router's built-in tunneling capabilities: ",(0,i.kt)("inlineCode",{parentName:"li"},"binding: tunnel"),". The tunnel's ",(0,i.kt)("inlineCode",{parentName:"li"},"mode")," property may be set to ",(0,i.kt)("inlineCode",{parentName:"li"},"tproxy"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"proxy"),", or ",(0,i.kt)("inlineCode",{parentName:"li"},"host"),". Requires ",(0,i.kt)("inlineCode",{parentName:"li"},"edge"),".",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tproxy")," mode requires the ",(0,i.kt)("inlineCode",{parentName:"li"},"CAP_NET_ADMIN")," capability and that the host's DNS resolver is set to use the nameserver provided by the router. The ",(0,i.kt)("inlineCode",{parentName:"li"},"tproxy")," mode is useful for transparently proxying services and providing Ziti DNS to non-Ziti applications.")))),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("br",null),(0,i.kt)(a.Z,{groupId:"routerType",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"Public-Edge",label:"Public Router",mdxType:"TabItem"},(0,i.kt)("p",null,"This is an example of generating a public router configuration with the ",(0,i.kt)("inlineCode",{parentName:"p"},"ziti")," CLI."),(0,i.kt)("br",null),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"#!/usr/bin/env bash\n\n# working directory for the router\nexport ZITI_HOME=/var/lib/ziti-router\n\n# address and port of control plane endpoint\nexport  ZITI_CTRL_ADVERTISED_ADDRESS=ctrl.ziti.example.org \\\n        ZITI_CTRL_ADVERTISED_PORT=1280\n\n# address and port of this router\nexport  ZITI_ROUTER_ADVERTISED_ADDRESS=router1.ziti.example.org \\\n        ZITI_ROUTER_PORT=3022 \\\n        ZITI_ROUTER_LISTENER_BIND_PORT=3022\n\nziti create config router edge \\\n    --routerName router1 \\\n    --tunnelerMode none\n")),(0,i.kt)("h3",{id:"public-router-configyml"},"Public Router config.yml"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'v: 3\n\nidentity:\n  cert:             "/var/lib/ziti-router/router1.cert"\n  server_cert:      "/var/lib/ziti-router/router1.server.chain.cert"\n  key:              "/var/lib/ziti-router/router1.key"\n  ca:               "/var/lib/ziti-router/router1.cas"\n\nctrl:\n  endpoint:             tls:ctrl.ziti.example.org:1280\n\nlink:\n  dialers:\n    - binding: transport\n  listeners:\n    - binding:          transport\n      bind:             tls:0.0.0.0:3022\n      advertise:        tls:router1.ziti.example.org:3022\n      options:\n        outQueueSize:   4\n\nlisteners:\n  - binding: edge\n    address: tls:0.0.0.0:3022\n    options:\n      advertise: router1.ziti.example.org:3022\n      connectTimeoutMs: 5000\n      getSessionTimeout: 60\n\nedge:\n  csr:\n    country: US\n    province: NC\n    locality: Charlotte\n    organization: NetFoundry\n    organizationalUnit: Ziti\n    sans:\n      dns:\n        - localhost\n        - router1.ziti.example.org\n      ip:\n        - "127.0.0.1"\n\nforwarder:\n  latencyProbeInterval: 0\n  xgressDialQueueLength: 1000\n  xgressDialWorkerCount: 128\n  linkDialQueueLength: 1000\n  linkDialWorkerCount: 32\n'))),(0,i.kt)(o.Z,{value:"Gateway",label:"Private Router with Tunneler",mdxType:"TabItem"},(0,i.kt)("p",null,"This is an example of generating a private router configuration with the ",(0,i.kt)("inlineCode",{parentName:"p"},"ziti")," CLI. "),(0,i.kt)("br",null),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"#!/usr/bin/env bash\n\n# working directory for the router\nexport ZITI_HOME=/var/lib/ziti-router\n\n# address and port of control plane endpoint\nexport  ZITI_CTRL_ADVERTISED_ADDRESS=ctrl.ziti.example.org \\\n        ZITI_CTRL_ADVERTISED_PORT=1280\n\n# address and port of this router\nexport  ZITI_ROUTER_ADVERTISED_ADDRESS=router2.ziti.example.org \\\n        ZITI_ROUTER_PORT=3022 \\\n        ZITI_ROUTER_LISTENER_BIND_PORT=3022\n\nziti create config router edge \\\n    --routerName router2 \\\n    --tunnelerMode tproxy \\\n    --private\n")),(0,i.kt)("br",null),(0,i.kt)("p",null,"Public routers dial and listen for other routers dialing mesh links. Private routers dial for mesh links but do not listen. The ",(0,i.kt)("inlineCode",{parentName:"p"},"edge")," capability is independent of the ",(0,i.kt)("inlineCode",{parentName:"p"},"link")," capability, and so both private and public routers may listen for and advertise edge connections from endpoints."),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"private-router-with-tunneler-configyml"},"Private Router with Tunneler config.yml"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'v: 3\n\nidentity:\n  cert:             "/var/lib/ziti-router/router2.cert"\n  server_cert:      "/var/lib/ziti-router/router2.server.chain.cert"\n  key:              "/var/lib/ziti-router/router2.key"\n  ca:               "/var/lib/ziti-router/router2.cas"\n\nctrl:\n  endpoint:             tls:ctrl.ziti.example.org:1280\n\nlink:\n  dialers:\n    - binding: transport\n\nlisteners:\n  - binding: edge\n    address: tls:0.0.0.0:3022\n    options:\n      advertise: router2.ziti.example.org:3022\n      connectTimeoutMs: 5000\n      getSessionTimeout: 60\n  - binding: tunnel\n    options:\n      mode: tproxy\n      resolver: udp://127.0.0.1:53\n      lanIf: \n\nedge:\n  csr:\n    country: US\n    province: NC\n    locality: Charlotte\n    organization: NetFoundry\n    organizationalUnit: Ziti\n    sans:\n      dns:\n        - localhost\n        - router2.ziti.example.org\n      ip:\n        - "127.0.0.1"\n\n\nforwarder:\n  latencyProbeInterval: 0\n  xgressDialQueueLength: 1000\n  xgressDialWorkerCount: 128\n  linkDialQueueLength: 1000\n  linkDialWorkerCount: 32\n\n')))))}f.isMDXComponent=!0}}]);