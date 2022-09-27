"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[6924],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=i.createContext({}),s=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(r),m=n,y=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return r?i.createElement(y,l(l({ref:t},u),{},{components:r})):i.createElement(y,l({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<a;s++)l[s]=r[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>l});var i=r(7294),n=r(6010);const a="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return i.createElement("div",{role:"tabpanel",className:(0,n.Z)(a,l),hidden:r},t)}},5488:(e,t,r)=>{r.d(t,{Z:()=>m});var i=r(7462),n=r(7294),a=r(6010),l=r(2389),o=r(7392),c=r(7094),s=r(2466);const u="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:r,block:l,defaultValue:d,values:m,groupId:y,className:v}=e,f=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=m??f.map((e=>{let{props:{value:t,label:r,attributes:i}}=e;return{value:t,label:r,attributes:i}})),b=(0,o.l)(h,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===d?d:d??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==g&&!h.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:N}=(0,c.U)(),[w,C]=(0,n.useState)(g),E=[],{blockElementScrollPositionUntilNextRender:O}=(0,s.o5)();if(null!=y){const e=k[y];null!=e&&e!==w&&h.some((t=>t.value===e))&&C(e)}const T=e=>{const t=e.currentTarget,r=E.indexOf(t),i=h[r].value;i!==w&&(O(t),C(i),null!=y&&N(y,String(i)))},P=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;r=E[t]??E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;r=E[t]??E[E.length-1];break}}null==(t=r)||t.focus()};return n.createElement("div",{className:(0,a.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":l},v)},h.map((e=>{let{value:t,label:r,attributes:l}=e;return n.createElement("li",(0,i.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>E.push(e),onKeyDown:P,onFocus:T,onClick:T},l,{className:(0,a.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":w===t})}),r??t)}))),r?(0,n.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,l.Z)();return n.createElement(d,(0,i.Z)({key:String(t)},e))}},9801:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>d,default:()=>h,frontMatter:()=>p,metadata:()=>m,toc:()=>v});var i=r(7462),n=(r(7294),r(3905)),a=r(5488),l=r(5162);const o={toc:[]};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},'On the left side nav bar, click "Ziti Policies"'),(0,n.kt)("li",{parentName:"ol"},'On the top nav bar, click "Service Edge Router Policies"'),(0,n.kt)("li",{parentName:"ol"},'In the top right corner of the screen click the "plus" image to add a new Service Edge Router Policy'),(0,n.kt)("li",{parentName:"ol"},'Choose a name for the Service Edge Router Policy, such as "My Service Edge Router Policy"'),(0,n.kt)("li",{parentName:"ol"},"Enter the services you want to include in the policy",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"Specific services can be referenced by ID or name using ",(0,n.kt)("inlineCode",{parentName:"li"},"@"),".  For example, a service called ",(0,n.kt)("inlineCode",{parentName:"li"},"ssh")," can be referenced using ",(0,n.kt)("inlineCode",{parentName:"li"},"@ssh"),". "),(0,n.kt)("li",{parentName:"ol"},"Services can be referenced by role attribute using ",(0,n.kt)("inlineCode",{parentName:"li"},"#"),". For example, any service which has the ",(0,n.kt)("inlineCode",{parentName:"li"},"sales")," role attribute will be included if ",(0,n.kt)("inlineCode",{parentName:"li"},"#sales")," is included in the service roles list."))),(0,n.kt)("li",{parentName:"ol"},"Enter the services you want to include in the policy",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"Specific services can be referenced by ID or name using ",(0,n.kt)("inlineCode",{parentName:"li"},"@"),".  For example, a service called ",(0,n.kt)("inlineCode",{parentName:"li"},"ssh")," can be referenced using ",(0,n.kt)("inlineCode",{parentName:"li"},"@ssh"),". "),(0,n.kt)("li",{parentName:"ol"},"Services can be referenced by role attribute using ",(0,n.kt)("inlineCode",{parentName:"li"},"#"),". For example, any service which has the ",(0,n.kt)("inlineCode",{parentName:"li"},"sales")," role attribute will be included if ",(0,n.kt)("inlineCode",{parentName:"li"},"#sales")," is included in the service roles list."))),(0,n.kt)("li",{parentName:"ol"},"Specify the role semantic",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"If you select ",(0,n.kt)("inlineCode",{parentName:"li"},"Has Any Role")," then if you specify multiple roles then all entities which include ",(0,n.kt)("strong",{parentName:"li"},"any")," of the roles will be included."),(0,n.kt)("li",{parentName:"ol"},"If you select ",(0,n.kt)("inlineCode",{parentName:"li"},"Must Have All Roles"),", then if you specify multiple roles then only entities which include ",(0,n.kt)("strong",{parentName:"li"},"all")," of the given roles will be included    "))),(0,n.kt)("li",{parentName:"ol"},"Click save")))}c.isMDXComponent=!0;const s={toc:[]};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"To create a Service Edge Router Policy using the CLI issue the following commands. (ensure you are ",(0,n.kt)("a",{parentName:"p",href:"../../../cli/logging-in"},"logged in"),")"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"# Create a service edge router policy which allows all services to use all edge routers \nziti edge create service-edger-router-policy 'my-policy' --service-roles '#all' --edge-router-roles '#all'\n")))}u.isMDXComponent=!0;const p={},d="Creating a Service Policy",m={unversionedId:"security/authorization/policies/creating-service-edge-router-policies",id:"security/authorization/policies/creating-service-edge-router-policies",title:"Creating a Service Policy",description:"",source:"@site/docs/security/authorization/policies/creating-service-edge-router-policies.mdx",sourceDirName:"security/authorization/policies",slug:"/security/authorization/policies/creating-service-edge-router-policies",permalink:"/docusaurus/docs/security/authorization/policies/creating-service-edge-router-policies",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/security/authorization/policies/creating-service-edge-router-policies.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Creating an Edge Router Policy",permalink:"/docusaurus/docs/security/authorization/policies/creating-edge-router-policies"},next:{title:"Creating a Service Policy",permalink:"/docusaurus/docs/security/authorization/policies/creating-service-policies"}},y={},v=[],f={toc:v};function h(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"creating-a-service-policy"},"Creating a Service Policy"),(0,n.kt)(a.Z,{mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"tabid-new-service-edge-router-policy-ui",label:"New Service Edge Router Policy via UI",mdxType:"TabItem"},(0,n.kt)(c,{mdxType:"CreateSERPUIMd"})),(0,n.kt)(l.Z,{value:"tabid-new-service-edge-router-policy-cli",label:"New Service Edge Router Policy via CLI",mdxType:"TabItem"},(0,n.kt)(u,{mdxType:"CreateSERPCLIMd"}))))}h.isMDXComponent=!0}}]);