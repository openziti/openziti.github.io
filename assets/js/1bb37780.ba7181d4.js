"use strict";(self.webpackChunkdocusaurus_3=self.webpackChunkdocusaurus_3||[]).push([[4397],{79486:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>p,default:()=>g,frontMatter:()=>h,metadata:()=>r,toc:()=>b});const r=JSON.parse('{"id":"learn/core-concepts/security/authorization/policies/creating-edge-router-policies","title":"creating-edge-router-policies","description":"","source":"@site/docs/learn/core-concepts/security/authorization/policies/creating-edge-router-policies.mdx","sourceDirName":"learn/core-concepts/security/authorization/policies","slug":"/learn/core-concepts/security/authorization/policies/creating-edge-router-policies","permalink":"/docs/learn/core-concepts/security/authorization/policies/creating-edge-router-policies","draft":false,"unlisted":false,"editUrl":"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/learn/core-concepts/security/authorization/policies/creating-edge-router-policies.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Policies","permalink":"/docs/learn/core-concepts/security/authorization/policies/overview"},"next":{"title":"creating-service-edge-router-policies","permalink":"/docs/learn/core-concepts/security/authorization/policies/creating-service-edge-router-policies"}}');var i=n(74848),l=n(28453),s=n(65537),o=n(79329);function c(e){const t={code:"code",li:"li",ol:"ol",strong:"strong",...(0,l.R)(),...e.components};return(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:'On the left side nav bar, click "Ziti Policies"'}),"\n",(0,i.jsx)(t.li,{children:'It should already be selected, but if not, on the top nav bar, click "Edge Router Policies"'}),"\n",(0,i.jsx)(t.li,{children:'In the top right corner of the screen click the "plus" image to add a new edge router policy'}),"\n",(0,i.jsx)(t.li,{children:'Choose a name for the edge router policy, such as "My edge router policy"'}),"\n",(0,i.jsxs)(t.li,{children:["Enter the edge routers you want to include in the policy","\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Specific edge routers can be referenced by ID or name using ",(0,i.jsx)(t.code,{children:"@"}),".  For example, an edge router called ",(0,i.jsx)(t.code,{children:"us-east-4"})," can be referenced using ",(0,i.jsx)(t.code,{children:"@us-east-4"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Edge routers can be referenced by role attribute using ",(0,i.jsx)(t.code,{children:"#"}),". For example, any edge router which has the ",(0,i.jsx)(t.code,{children:"us-seast"})," role attribute will be included if ",(0,i.jsx)(t.code,{children:"#us-east"})," is included in the edge routers roles list."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["Enter the identities you want to include in the policy","\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Specific identities can be referenced by ID or name using ",(0,i.jsx)(t.code,{children:"@"}),".  For example, as identity called ",(0,i.jsx)(t.code,{children:"jsmith-desktop"})," can be referenced using ",(0,i.jsx)(t.code,{children:"@jsmith-desktop"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Identities can be referenced by role attribute using ",(0,i.jsx)(t.code,{children:"#"}),". For example, any identity which has the ",(0,i.jsx)(t.code,{children:"sales"})," role attribute will be included if ",(0,i.jsx)(t.code,{children:"#sales"})," is included in the identities roles list."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["Specify the role semantic","\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["If you select ",(0,i.jsx)(t.code,{children:"Has Any Role"})," then if you specify multiple roles then all entities which include ",(0,i.jsx)(t.strong,{children:"any"})," of the roles will be included."]}),"\n",(0,i.jsxs)(t.li,{children:["If you select ",(0,i.jsx)(t.code,{children:"Must Have All Roles"}),", then if you specify multiple roles then only entities which include ",(0,i.jsx)(t.strong,{children:"all"})," of the given roles will be included"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.li,{children:"Click save"}),"\n"]})}function a(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}function u(e){const t={a:"a",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"To create an edge router policy using the CLI issue the following commands."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["To use the CLI, you'll need to be logged in. ",(0,i.jsx)(t.a,{href:"/docs/reference/command-line/login",children:"Link to instructions"})]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Create an edge router policy named ",(0,i.jsx)(t.code,{children:"my-policy"})," which allows all identities to use all routers."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"ziti edge create edge-router-policy my-policy --identity-roles '#all' --edge-router-roles '#all'\n"})}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}const h={},p=void 0,f={},b=[];function m(e){return(0,i.jsxs)(s.A,{children:[(0,i.jsx)(o.A,{value:"tabid-new-edge-router-policy-ui",label:"New edge router policy via UI",children:(0,i.jsx)(a,{})}),(0,i.jsx)(o.A,{value:"tabid-new-edge-router-policy-cli",label:"New edge router policy via CLI",children:(0,i.jsx)(d,{})})]})}function g(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m()}},79329:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var r=n(34164);const i={tabItem:"tabItem_Ymn6"};var l=n(74848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,s),hidden:n,children:t})}},65537:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(96540),i=n(34164),l=n(65627),s=n(56347),o=n(50372),c=n(30604),a=n(11861),u=n(78749);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:i}}=e;return{value:t,label:n,attributes:r,default:i}}))}(n);return function(e){const t=(0,a.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const i=(0,s.W6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(i.location.search);t.set(l,e),i.replace({...i.location,search:t.toString()})}),[l,i])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,l=h(e),[s,c]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[a,d]=f({queryString:n,groupId:i}),[b,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,l]=(0,u.Dv)(n);return[i,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:i}),g=(()=>{const e=a??b;return p({value:e,tabValues:l})?e:null})();(0,o.A)((()=>{g&&c(g)}),[g]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),m(e)}),[d,m,l]),tabValues:l}}var m=n(9136);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(74848);function y(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:a}=(0,l.a_)(),u=e=>{const t=e.currentTarget,n=c.indexOf(t),i=o[n].value;i!==r&&(a(t),s(i))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:l}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>{c.push(e)},onKeyDown:d,onClick:u,...l,className:(0,i.A)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:l}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===l));return e?(0,r.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==l})))})}function v(e){const t=b(e);return(0,x.jsxs)("div",{className:(0,i.A)("tabs-container",g.tabList),children:[(0,x.jsx)(y,{...t,...e}),(0,x.jsx)(j,{...t,...e})]})}function w(e){const t=(0,m.A)();return(0,x.jsx)(v,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var r=n(96540);const i={},l=r.createContext(i);function s(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);