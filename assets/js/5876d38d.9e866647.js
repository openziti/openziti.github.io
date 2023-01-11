"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[8857],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return r?a.createElement(g,l(l({ref:t},c),{},{components:r})):a.createElement(g,l({ref:t},c))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(67294),n=r(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,l),hidden:r},t)}},65488:(e,t,r)=>{r.d(t,{Z:()=>m});var a=r(87462),n=r(67294),o=r(86010),l=r(72389),i=r(67392),s=r(7094),u=r(12466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){const{lazy:t,block:r,defaultValue:l,values:d,groupId:m,className:g}=e,h=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=d??h.map((e=>{let{props:{value:t,label:r,attributes:a}}=e;return{value:t,label:r,attributes:a}})),f=(0,i.l)(b,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===l?l:l??h.find((e=>e.props.default))?.props.value??h[0].props.value;if(null!==v&&!b.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:y}=(0,s.U)(),[N,w]=(0,n.useState)(v),E=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=m){const e=k[m];null!=e&&e!==N&&b.some((t=>t.value===e))&&w(e)}const O=e=>{const t=e.currentTarget,r=E.indexOf(t),a=b[r].value;a!==N&&(T(t),w(a),null!=m&&y(m,String(a)))},R=e=>{let t=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":{const r=E.indexOf(e.currentTarget)+1;t=E[r]??E[0];break}case"ArrowLeft":{const r=E.indexOf(e.currentTarget)-1;t=E[r]??E[E.length-1];break}}t?.focus()};return n.createElement("div",{className:(0,o.Z)("tabs-container",c)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},g)},b.map((e=>{let{value:t,label:r,attributes:l}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>E.push(e),onKeyDown:R,onClick:O},l,{className:(0,o.Z)("tabs__item",p,l?.className,{"tabs__item--active":N===t})}),r??t)}))),t?(0,n.cloneElement)(h.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,l.Z)();return n.createElement(d,(0,a.Z)({key:String(t)},e))}},20476:(e,t,r)=>{r.d(t,{ZP:()=>l});var a=r(87462),n=(r(67294),r(3905));const o={toc:[]};function l(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("br",null),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"ziti")," CLI will help you get a session from the controller's management API. You will be prompted to trust any new server certificates. Your session cache and trust store are managed by the CLI in your home directory."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# implies https://localhost:1280\nziti edge login -u admin -p admin\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# implies https://\nziti edge login ziti.example.com:8441 -u admin -p admin\n")))}l.isMDXComponent=!0},48927:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>g,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=r(87462),n=(r(67294),r(3905)),o=r(65488),l=r(85162),i=(r(27728),r(20476));const s={id:"cli-mgmt",title:"CLI Mgmt"},u=void 0,c={unversionedId:"guides/router/cli-mgmt",id:"guides/router/cli-mgmt",title:"CLI Mgmt",description:"Managing Routers with the CLI",source:"@site/docs/guides/02-router/04-cli-mgmt.md",sourceDirName:"guides/02-router",slug:"/guides/router/cli-mgmt",permalink:"/docs/guides/router/cli-mgmt",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/guides/02-router/04-cli-mgmt.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"cli-mgmt",title:"CLI Mgmt"},sidebar:"docsSidebar",previous:{title:"Config Examples",permalink:"/docs/guides/router/router-configuration"},next:{title:"Kubernetes Sidecar Client",permalink:"/docs/guides/kubernetes/kubernetes-sidecar-tunnel-quickstart"}},p={},d=[{value:"Managing Routers with the CLI",id:"managing-routers-with-the-cli",level:2},{value:"Login",id:"login",level:3},{value:"Create Router",id:"create-router",level:3},{value:"List Routers",id:"list-routers",level:3},{value:"Delete Router",id:"delete-router",level:3},{value:"Update Router",id:"update-router",level:3},{value:"Flags",id:"flags",level:3},{value:"Attributes",id:"attributes",level:3}],m={toc:d};function g(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"managing-routers-with-the-cli"},"Managing Routers with the CLI"),(0,n.kt)("p",null,"In this article we are highlighting the most relevant commands and options for managing routers with the ",(0,n.kt)("inlineCode",{parentName:"p"},"ziti")," CLI."),(0,n.kt)("admonition",{title:"Important Note",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Routers or their identities can be referenced by ",(0,n.kt)("inlineCode",{parentName:"p"},"@router_name")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"#attribute")," in various policies like service policy, edge router policy, etc. Using group ",(0,n.kt)("inlineCode",{parentName:"p"},"#attribute")," is recommended.")),(0,n.kt)("h3",{id:"login"},"Login"),(0,n.kt)(i.ZP,{mdxType:"CliLogin"}),(0,n.kt)("h3",{id:"create-router"},"Create Router"),(0,n.kt)("p",null,"The router creation command is described with the minimum required options to create the type shown. For the more detail options list, please refer to the ",(0,n.kt)("a",{parentName:"p",href:"#flags"},"Flags Section"),". "),(0,n.kt)(o.Z,{groupId:"routerType",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Private",label:"Private Router with Edge",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"ziti edge create edge-router $ROUTER_NAME \\\n                            --jwt-output-file $ROUTER_NAME.jwt\n"))),(0,n.kt)(l.Z,{value:"Gateway",label:"Private Router with Edge and Tunneler",mdxType:"TabItem"},(0,n.kt)("admonition",{title:"Notes",type:"info"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("inlineCode",{parentName:"p"},"--no-travesal")," flag is not required, but keep in mind that private routers are stub routers and setting it to true disables transitive routing through it.\nIn other words, only connections destined for this router will be routed to it by the smart routing algorithm. ",(0,n.kt)("inlineCode",{parentName:"p"},"--tunneler-enabled or just -t")," flag indicates the tunnel mode.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"ziti edge create edge-router $ROUTER_NAME \\\n                            --jwt-output-file $ROUTER_NAME.jwt \\\n                            --tunneler-enabled --no-traversal \n"))),(0,n.kt)(l.Z,{value:"Public-Edge",label:"Public Router with Edge",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"ziti edge create edge-router $ROUTER_NAME \\\n                            --jwt-output-file $ROUTER_NAME.jwt\n")))),(0,n.kt)("h3",{id:"list-routers"},"List Routers"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"ziti edge list edge-routers\n")),(0,n.kt)("h3",{id:"delete-router"},"Delete Router"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"ziti edge delete edge-routers $ROUTER_NAME\nziti edge delete edge-routers $ROUTER_ID\n")),(0,n.kt)("h3",{id:"update-router"},"Update Router"),(0,n.kt)("p",null,"For the more detail options list, please refer to the ",(0,n.kt)("a",{parentName:"p",href:"#flags"},"Flags Section"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"ziti edge update edge-router $ROUTER_NAME [flags]\nziti edge update edge-router $ROUTER_ID [flags]\n")),(0,n.kt)("h3",{id:"flags"},"Flags"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"App-Data can be used to set key/value pair to be used in addressable terminator service for example.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'--app-data stringToString   Custom application data (default [])\n--app-data "fqdn"="aksprod-cae02995.eastus2.azmk8s.io"\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Router cost can be used to influence the smart routing to not use this router for service traversal unless no other paths are available.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"--cost uint16               Specifies the router cost. Default 0.\n--cost 300\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"No-traversal flag means no service traversal through this router at all. Only the service termination or origination can be completed on it.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"--no-traversal              Disallow traversal for this edge router. Default to allowed(false).\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The role attribute flag allows to set a list of attributes that can be referenced by all policies for dialing and/or hosting services.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"-a, --role-attributes strings   Set role attributes of the edge router. Use --role-attributes '' to set an empty list\n --role-attributes 'example,example2,example3'\n")),(0,n.kt)("h3",{id:"attributes"},"Attributes"),(0,n.kt)("p",null,"Let's consider an Autoscaling Group scenario, where routers would be created or deleted as the scale-out or scale-in events occur respectively. If router names were referenced in such deployment, then all policies would need to be updated upon the scale-out event with ",(0,n.kt)("inlineCode",{parentName:"p"},"@router_name"),". To keep the complexity of this deployment to minimum, it just makes sense to use #attribute, where no other updates would be needed."))}g.isMDXComponent=!0},27728:()=>{}}]);