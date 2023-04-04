"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[8744],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),a=r(86010);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:r,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,o),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>w});var n=r(87462),a=r(67294),i=r(86010),o=r(12466),l=r(16550),c=r(91980),s=r(67392),u=r(50012);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function d(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const n=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,c._X)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function y(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,i=d(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[c,s]=f({queryString:r,groupId:n}),[p,y]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,u.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:n}),h=(()=>{const e=c??p;return m({value:e,tabValues:i})?e:null})();(0,a.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),s(e),y(e)}),[s,y,i]),tabValues:i}}var h=r(72389);const g="tabList__CuJ",b="tabItem_LNqP";function v(e){let{className:t,block:r,selectedValue:l,selectValue:c,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,r=u.indexOf(t),n=s[r].value;n!==l&&(p(t),c(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},t)},s.map((e=>{let{value:t,label:r,attributes:o}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},o,{className:(0,i.Z)("tabs__item",b,o?.className,{"tabs__item--active":l===t})}),r??t)})))}function k(e){let{lazy:t,children:r,selectedValue:n}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=y(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",g)},a.createElement(v,(0,n.Z)({},e,t)),a.createElement(k,(0,n.Z)({},e,t)))}function w(e){const t=(0,h.Z)();return a.createElement(N,(0,n.Z)({key:String(t)},e))}},20476:(e,t,r)=>{r.d(t,{ZP:()=>o});var n=r(87462),a=(r(67294),r(3905));const i={toc:[]};function o(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("br",null),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ziti")," CLI will help you get a session from the controller's management API. You will be prompted to trust any new server certificates. Your session cache and trust store are managed by the CLI in your home directory."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# implies https://localhost:1280\nziti edge login -u admin -p admin\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# implies https://\nziti edge login ziti.example.com:8441 -u admin -p admin\n")))}o.isMDXComponent=!0},18355:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>m,default:()=>b,frontMatter:()=>d,metadata:()=>f,toc:()=>h});var n=r(87462),a=(r(67294),r(3905)),i=r(74866),o=r(85162);const l={toc:[]};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'On the left side nav bar, click "Ziti Policies"'),(0,a.kt)("li",{parentName:"ol"},'On the top nav bar, click "Service Edge Router Policies"'),(0,a.kt)("li",{parentName:"ol"},'In the top right corner of the screen click the "plus" image to add a new Service Edge Router Policy'),(0,a.kt)("li",{parentName:"ol"},'Choose a name for the Service Edge Router Policy, such as "My Service Edge Router Policy"'),(0,a.kt)("li",{parentName:"ol"},"Enter the services you want to include in the policy",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Specific services can be referenced by ID or name using ",(0,a.kt)("inlineCode",{parentName:"li"},"@"),".  For example, a service called ",(0,a.kt)("inlineCode",{parentName:"li"},"ssh")," can be referenced using ",(0,a.kt)("inlineCode",{parentName:"li"},"@ssh"),". "),(0,a.kt)("li",{parentName:"ol"},"Services can be referenced by role attribute using ",(0,a.kt)("inlineCode",{parentName:"li"},"#"),". For example, any service which has the ",(0,a.kt)("inlineCode",{parentName:"li"},"sales")," role attribute will be included if ",(0,a.kt)("inlineCode",{parentName:"li"},"#sales")," is included in the service roles list."))),(0,a.kt)("li",{parentName:"ol"},"Enter the services you want to include in the policy",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Specific services can be referenced by ID or name using ",(0,a.kt)("inlineCode",{parentName:"li"},"@"),".  For example, a service called ",(0,a.kt)("inlineCode",{parentName:"li"},"ssh")," can be referenced using ",(0,a.kt)("inlineCode",{parentName:"li"},"@ssh"),". "),(0,a.kt)("li",{parentName:"ol"},"Services can be referenced by role attribute using ",(0,a.kt)("inlineCode",{parentName:"li"},"#"),". For example, any service which has the ",(0,a.kt)("inlineCode",{parentName:"li"},"sales")," role attribute will be included if ",(0,a.kt)("inlineCode",{parentName:"li"},"#sales")," is included in the service roles list."))),(0,a.kt)("li",{parentName:"ol"},"Specify the role semantic",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"If you select ",(0,a.kt)("inlineCode",{parentName:"li"},"Has Any Role")," then if you specify multiple roles then all entities which include ",(0,a.kt)("strong",{parentName:"li"},"any")," of the roles will be included."),(0,a.kt)("li",{parentName:"ol"},"If you select ",(0,a.kt)("inlineCode",{parentName:"li"},"Must Have All Roles"),", then if you specify multiple roles then only entities which include ",(0,a.kt)("strong",{parentName:"li"},"all")," of the given roles will be included    "))),(0,a.kt)("li",{parentName:"ol"},"Click save")))}c.isMDXComponent=!0;var s=r(20476);const u={toc:[]};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To create a Service Edge Router Policy using the CLI issue the following commands."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"ensure you are logged in with the CLI."),(0,a.kt)(s.ZP,{mdxType:"CliLoginMd"})),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a service edge router policy which allows all services to use all routers."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ziti edge create service-edger-router-policy 'my-policy' --service-roles '#all' --edge-router-roles '#all'\n")))))}p.isMDXComponent=!0;const d={},m="Creating a Service Edge Router Policy",f={unversionedId:"learn/core-concepts/security/authorization/policies/creating-service-edge-router-policies",id:"learn/core-concepts/security/authorization/policies/creating-service-edge-router-policies",title:"Creating a Service Edge Router Policy",description:"",source:"@site/docs/learn/core-concepts/security/authorization/policies/creating-service-edge-router-policies.mdx",sourceDirName:"learn/core-concepts/security/authorization/policies",slug:"/learn/core-concepts/security/authorization/policies/creating-service-edge-router-policies",permalink:"/docs/learn/core-concepts/security/authorization/policies/creating-service-edge-router-policies",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/learn/core-concepts/security/authorization/policies/creating-service-edge-router-policies.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Creating an Edge Router Policy",permalink:"/docs/learn/core-concepts/security/authorization/policies/creating-edge-router-policies"},next:{title:"Creating a Service Policy",permalink:"/docs/learn/core-concepts/security/authorization/policies/creating-service-policies"}},y={},h=[],g={toc:h};function b(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"creating-a-service-edge-router-policy"},"Creating a Service Edge Router Policy"),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"tabid-new-service-edge-router-policy-ui",label:"New Service Edge Router Policy via UI",mdxType:"TabItem"},(0,a.kt)(c,{mdxType:"CreateSERPUIMd"})),(0,a.kt)(o.Z,{value:"tabid-new-service-edge-router-policy-cli",label:"New Service Edge Router Policy via CLI",mdxType:"TabItem"},(0,a.kt)(p,{mdxType:"CreateSERPCLIMd"}))))}b.isMDXComponent=!0}}]);