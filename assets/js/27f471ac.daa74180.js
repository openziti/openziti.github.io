"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[6253],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),s=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=n,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return r?a.createElement(f,o(o({ref:t},c),{},{components:r})):a.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(67294),n=r(86010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:r,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,o),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>w});var a=r(87462),n=r(67294),l=r(86010),o=r(12466),i=r(16550),u=r(91980),s=r(67392),c=r(50012);function d(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const a=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function g(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,l=p(e),[o,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[u,s]=f({queryString:r,groupId:a}),[d,g]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:a}),b=(()=>{const e=u??d;return m({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),g(e)}),[s,g,l]),tabValues:l}}var b=r(72389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:r,selectedValue:i,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),p=e=>{const t=e.currentTarget,r=c.indexOf(t),a=s[r].value;a!==i&&(d(t),u(a))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},t)},s.map((e=>{let{value:t,label:r,attributes:o}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},o,{className:(0,l.Z)("tabs__item",h.tabItem,o?.className,{"tabs__item--active":i===t})}),r??t)})))}function y(e){let{lazy:t,children:r,selectedValue:a}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function k(e){const t=g(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",h.tabList)},n.createElement(v,(0,a.Z)({},e,t)),n.createElement(y,(0,a.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return n.createElement(k,(0,a.Z)({key:String(t)},e))}},20476:(e,t,r)=>{r.d(t,{ZP:()=>i});var a=r(87462),n=(r(67294),r(3905));const l={toc:[]},o="wrapper";function i(e){let{components:t,...r}=e;return(0,n.kt)(o,(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("br",null),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"ziti")," CLI will help you get an API Session from the controller's management API. You will be prompted to trust any new server certificates. Your login token cache and trust store are managed by the CLI in your home directory."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"# implies https://localhost:1280\nziti edge login -u admin -p admin\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"# implies https://\nziti edge login ctrl.ziti.example.com:8441 -u admin -p admin\n")))}i.isMDXComponent=!0},53412:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>g,frontMatter:()=>u,metadata:()=>c,toc:()=>p});var a=r(87462),n=(r(67294),r(3905)),l=r(74866),o=r(85162),i=r(20476);const u={id:"cli-mgmt",title:"Managing Routers with the CLI",sidebar_label:"CLI Mgmt"},s=void 0,c={unversionedId:"guides/deployments/linux/router/cli-mgmt",id:"guides/deployments/linux/router/cli-mgmt",title:"Managing Routers with the CLI",description:"Login",source:"@site/docs/guides/deployments/10-linux/20-router/40-cli-mgmt.md",sourceDirName:"guides/deployments/10-linux/20-router",slug:"/guides/deployments/linux/router/cli-mgmt",permalink:"/docs/guides/deployments/linux/router/cli-mgmt",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/guides/deployments/10-linux/20-router/40-cli-mgmt.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{id:"cli-mgmt",title:"Managing Routers with the CLI",sidebar_label:"CLI Mgmt"},sidebar:"docsSidebar",previous:{title:"Configuration",permalink:"/docs/guides/deployments/linux/router/router-configuration"},next:{title:"Migrate",permalink:"/docs/guides/deployments/linux/router/migrate"}},d={},p=[{value:"Login",id:"login",level:2},{value:"Create a Router",id:"create-a-router",level:2},{value:"Update a Router",id:"update-a-router",level:2},{value:"Additional Flags",id:"additional-flags",level:2},{value:"Role Attributes are Powerful",id:"role-attributes-are-powerful",level:2}],m={toc:p},f="wrapper";function g(e){let{components:t,...r}=e;return(0,n.kt)(f,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"login"},"Login"),(0,n.kt)(i.ZP,{mdxType:"CliLogin"}),(0,n.kt)("h2",{id:"create-a-router"},"Create a Router"),(0,n.kt)(l.Z,{groupId:"routerType",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"TunnelerEnabled",label:"Router with Tunneler",mdxType:"TabItem"},(0,n.kt)("p",null,"The tunneler flag must be administratively set when the router is created or updated or the router will not start."),(0,n.kt)("br",null),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},'ziti edge create edge-router "router2" \\\n    --jwt-output-file router2.jwt \\\n    --tunneler-enabled\n'))),(0,n.kt)(o.Z,{value:"NoTraversal",label:"Router with No Traversal",mdxType:"TabItem"},(0,n.kt)("p",null,"No-traversal routers are administratively excluded from the set of routers that provide smart routing for transiting service traffic. They still provide service termination and origination."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},'ziti edge create edge-router "router3" \\\n    --jwt-output-file router3.jwt \\\n    --no-traversal\n')))),(0,n.kt)("h2",{id:"update-a-router"},"Update a Router"),(0,n.kt)("p",null,"The update command will replace all administrative properties of the router. This example preserves the properties from the router3 example above, adding the ",(0,n.kt)("inlineCode",{parentName:"p"},"--tunneler-enabled")," flag."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},'ziti edge update edge-router "router3" \\\n    --no-traversal \\\n    --tunneler-enabled\n')),(0,n.kt)("h2",{id:"additional-flags"},"Additional Flags"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"App-Data can be used to set key/value pair to be used in addressable terminator service for example.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},'--app-data stringToString   Custom application data (default [])\n--app-data "fqdn"="aksprod-cae02995.eastus2.azmk8s.io"\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Router cost can be used to influence the smart routing to not use this router for service traversal unless no other paths are available.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"--cost uint16               Specifies the router cost. Default 0.\n--cost 300\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"No-traversal flag means no service traversal through this router at all. Only the service termination or origination can be completed on it.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"--no-traversal              Disallow traversal for this edge router. Default to allowed(false).\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The role attribute flag allows to set a list of attributes that can be referenced by all policies for dialing and/or hosting services.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"-a, --role-attributes strings   Set role attributes of the edge router. Use --role-attributes '' to set an empty list\n --role-attributes 'example,example2,example3'\n")),(0,n.kt)("h2",{id:"role-attributes-are-powerful"},"Role Attributes are Powerful"),(0,n.kt)("p",null,"Consider an autoscaling group scenario where routers are created or deleted with scale-out or scale-in events. Attribute-based access control enables this scenario because the policies grant roles instead of the individual, temporary identities."),(0,n.kt)("p",null,"If router names or IDs were referenced explicitly in such a scenario then all policies would need to be updated upon the scale-out event with new grants like ",(0,n.kt)("inlineCode",{parentName:"p"},"@router_name"),". To keep the complexity of this deployment to minimum, it just makes sense to use role ",(0,n.kt)("inlineCode",{parentName:"p"},"#attributes"),"."))}g.isMDXComponent=!0}}]);