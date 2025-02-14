"use strict";(self.webpackChunkdocusaurus_3=self.webpackChunkdocusaurus_3||[]).push([[5543],{49996:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>f,contentTitle:()=>p,default:()=>m,frontMatter:()=>h,metadata:()=>t,toc:()=>b});const t=JSON.parse('{"id":"learn/core-concepts/security/authorization/policies/creating-service-edge-router-policies","title":"creating-service-edge-router-policies","description":"","source":"@site/docs/learn/core-concepts/security/authorization/policies/creating-service-edge-router-policies.mdx","sourceDirName":"learn/core-concepts/security/authorization/policies","slug":"/learn/core-concepts/security/authorization/policies/creating-service-edge-router-policies","permalink":"/docs/learn/core-concepts/security/authorization/policies/creating-service-edge-router-policies","draft":false,"unlisted":false,"editUrl":"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/learn/core-concepts/security/authorization/policies/creating-service-edge-router-policies.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"creating-edge-router-policies","permalink":"/docs/learn/core-concepts/security/authorization/policies/creating-edge-router-policies"},"next":{"title":"creating-service-policies","permalink":"/docs/learn/core-concepts/security/authorization/policies/creating-service-policies"}}');var i=n(74848),s=n(28453),c=n(65537),l=n(79329);function o(e){const r={code:"code",li:"li",ol:"ol",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsx)(r.li,{children:'On the left side nav bar, click "Ziti Policies"'}),"\n",(0,i.jsx)(r.li,{children:'On the top nav bar, click "Service edge router policies"'}),"\n",(0,i.jsx)(r.li,{children:'In the top right corner of the screen click the "plus" image to add a new Service edge router policy'}),"\n",(0,i.jsx)(r.li,{children:'Choose a name for the Service edge router policy, such as "My Service edge router policy"'}),"\n",(0,i.jsxs)(r.li,{children:["Enter the services you want to include in the policy","\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:["Specific services can be referenced by ID or name using ",(0,i.jsx)(r.code,{children:"@"}),".  For example, a service called ",(0,i.jsx)(r.code,{children:"ssh"})," can be referenced using ",(0,i.jsx)(r.code,{children:"@ssh"}),"."]}),"\n",(0,i.jsxs)(r.li,{children:["Services can be referenced by role attribute using ",(0,i.jsx)(r.code,{children:"#"}),". For example, any service which has the ",(0,i.jsx)(r.code,{children:"sales"})," role attribute will be included if ",(0,i.jsx)(r.code,{children:"#sales"})," is included in the service roles list."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["Enter the services you want to include in the policy","\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:["Specific services can be referenced by ID or name using ",(0,i.jsx)(r.code,{children:"@"}),".  For example, a service called ",(0,i.jsx)(r.code,{children:"ssh"})," can be referenced using ",(0,i.jsx)(r.code,{children:"@ssh"}),"."]}),"\n",(0,i.jsxs)(r.li,{children:["Services can be referenced by role attribute using ",(0,i.jsx)(r.code,{children:"#"}),". For example, any service which has the ",(0,i.jsx)(r.code,{children:"sales"})," role attribute will be included if ",(0,i.jsx)(r.code,{children:"#sales"})," is included in the service roles list."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["Specify the role semantic","\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:["If you select ",(0,i.jsx)(r.code,{children:"Has Any Role"})," then if you specify multiple roles then all entities which include ",(0,i.jsx)(r.strong,{children:"any"})," of the roles will be included."]}),"\n",(0,i.jsxs)(r.li,{children:["If you select ",(0,i.jsx)(r.code,{children:"Must Have All Roles"}),", then if you specify multiple roles then only entities which include ",(0,i.jsx)(r.strong,{children:"all"})," of the given roles will be included"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(r.li,{children:"Click save"}),"\n"]})}function a(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}function u(e){const r={a:"a",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.p,{children:"To create a Service edge router policy using the CLI issue the following commands."}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:["To use the CLI, you'll need to be logged in. ",(0,i.jsx)(r.a,{href:"/docs/reference/command-line/login",children:"Link to instructions"})]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"Create a service edge router policy which allows all services to use all routers."}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-text",children:"ziti edge create service-edger-router-policy 'my-policy' --service-roles '#all' --edge-router-roles '#all'\n"})}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}const h={},p=void 0,f={},b=[];function v(e){return(0,i.jsxs)(c.A,{children:[(0,i.jsx)(l.A,{value:"tabid-new-service-edge-router-policy-ui",label:"New service edge router policy via UI",children:(0,i.jsx)(a,{})}),(0,i.jsx)(l.A,{value:"tabid-new-service-edge-router-policy-cli",label:"New service edge router policy via CLI",children:(0,i.jsx)(d,{})})]})}function m(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(v,{...e})}):v()}},79329:(e,r,n)=>{n.d(r,{A:()=>c});n(96540);var t=n(34164);const i={tabItem:"tabItem_Ymn6"};var s=n(74848);function c(e){let{children:r,hidden:n,className:c}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(i.tabItem,c),hidden:n,children:r})}},65537:(e,r,n)=>{n.d(r,{A:()=>w});var t=n(96540),i=n(34164),s=n(65627),c=n(56347),l=n(50372),o=n(30604),a=n(11861),u=n(78749);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:n}=e;return(0,t.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:n,attributes:t,default:i}}=e;return{value:r,label:n,attributes:t,default:i}}))}(n);return function(e){const r=(0,a.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function p(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function f(e){let{queryString:r=!1,groupId:n}=e;const i=(0,c.W6)(),s=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,o.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const r=new URLSearchParams(i.location.search);r.set(s,e),i.replace({...i.location,search:r.toString()})}),[s,i])]}function b(e){const{defaultValue:r,queryString:n=!1,groupId:i}=e,s=h(e),[c,o]=(0,t.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:s}))),[a,d]=f({queryString:n,groupId:i}),[b,v]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[i,s]=(0,u.Dv)(n);return[i,(0,t.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:i}),m=(()=>{const e=a??b;return p({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{m&&o(m)}),[m]);return{selectedValue:c,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),v(e)}),[d,v,s]),tabValues:s}}var v=n(9136);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(74848);function x(e){let{className:r,block:n,selectedValue:t,selectValue:c,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:a}=(0,s.a_)(),u=e=>{const r=e.currentTarget,n=o.indexOf(r),i=l[n].value;i!==t&&(a(r),c(i))},d=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;r=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;r=o[n]??o[o.length-1];break}}r?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},r),children:l.map((e=>{let{value:r,label:n,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>{o.push(e)},onKeyDown:d,onClick:u,...s,className:(0,i.A)("tabs__item",m.tabItem,s?.className,{"tabs__item--active":t===r}),children:n??r},r)}))})}function y(e){let{lazy:r,children:n,selectedValue:s}=e;const c=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=c.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:c.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==s})))})}function j(e){const r=b(e);return(0,g.jsxs)("div",{className:(0,i.A)("tabs-container",m.tabList),children:[(0,g.jsx)(x,{...r,...e}),(0,g.jsx)(y,{...r,...e})]})}function w(e){const r=(0,v.A)();return(0,g.jsx)(j,{...e,children:d(e.children)},String(r))}},28453:(e,r,n)=>{n.d(r,{R:()=>c,x:()=>l});var t=n(96540);const i={},s=t.createContext(i);function c(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);