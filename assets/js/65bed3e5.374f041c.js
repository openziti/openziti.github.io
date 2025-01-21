"use strict";(self.webpackChunkdocusaurus_3=self.webpackChunkdocusaurus_3||[]).push([[5178],{50238:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>x,contentTitle:()=>h,default:()=>m,frontMatter:()=>p,metadata:()=>t,toc:()=>j});const t=JSON.parse('{"id":"learn/core-concepts/zero-trust-models/ztaa","title":"Application Access Model","description":"This article describes the various edge deployments of ZiTi App Access. In all cases, the Controller and at least 2 Public Edge Routers are to be deployed for redundancy. The Ziti Fabric connections are established between all Edge Routers but not Clients/SDKs. The Public Edge Routers would provide connection between Private Edge Routers and/or Clients/SDKs.","source":"@site/docs/learn/core-concepts/zero-trust-models/02-ztaa.mdx","sourceDirName":"learn/core-concepts/zero-trust-models","slug":"/learn/core-concepts/zero-trust-models/ztaa","permalink":"/docs/learn/core-concepts/zero-trust-models/ztaa","draft":false,"unlisted":false,"editUrl":"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/learn/core-concepts/zero-trust-models/02-ztaa.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Application Access Model","sidebar_label":"App Access","hide_table_of_contents":true},"sidebar":"docsSidebar","previous":{"title":"Zero Trust Models","permalink":"/docs/learn/core-concepts/zero-trust-models/overview"},"next":{"title":"Host Access","permalink":"/docs/learn/core-concepts/zero-trust-models/ztha"}}');var s=i(74848),l=i(28453),o=i(35982),d=i(88456),r=i(20341),c=i(82885),a=i(92119);const p={title:"Application Access Model",sidebar_label:"App Access",hide_table_of_contents:!0},h=void 0,x={},j=[...a.RM,...o.RM,...c.RM,...d.RM,...r.RM];function u(n){const e={admonition:"admonition",em:"em",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:"This article describes the various edge deployments of ZiTi App Access. In all cases, the Controller and at least 2 Public Edge Routers are to be deployed for redundancy. The Ziti Fabric connections are established between all Edge Routers but not Clients/SDKs. The Public Edge Routers would provide connection between Private Edge Routers and/or Clients/SDKs."}),"\n",(0,s.jsx)(e.admonition,{title:"Note",type:"info",children:(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.em,{children:"Recommended configuration deployment of Public Edge Routers is to have only Ziti Edge enabled and of Private Edge Routers is to have Ziti Edge enabled with Tunnel option being required for cases where the Zero Trust domain ends at the private edge router."})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.em,{children:"Acronyms used in this article:"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.em,{children:"ZDE - Ziti Desktop Edge"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.em,{children:"ZME - Ziti Mobile Edge"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.em,{children:"ZET - Ziti Edge Tunnel"})}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,s.jsx)(e.p,{children:"\xa0"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Application to Application A Deployment"}),"\n\xa0"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"image",src:i(56061).A+"",width:"835",height:"443"})}),"\n",(0,s.jsx)(e.admonition,{title:"Details",type:"info",children:(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Client is SDK integrated."}),"\n",(0,s.jsx)(e.li,{children:"Application is SDK integrated."}),"\n"]})}),"\n",(0,s.jsx)(e.p,{children:"\xa0"}),"\n",(0,s.jsx)(e.admonition,{title:"Advantages",type:"tip",children:(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Application to Application Encryption"}),"\n",(0,s.jsx)(e.li,{children:"No additional routing needed"}),"\n",(0,s.jsx)(e.li,{children:"No additional DNS entries needed"}),"\n"]})}),"\n",(0,s.jsx)(e.p,{children:"\xa0"}),"\n",(0,s.jsx)(e.admonition,{title:"Things to consider while deciding",type:"caution",children:(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"SDK and Application source code availability"}),"\n"]})}),"\n",(0,s.jsx)(e.p,{children:"\xa0"}),"\n",(0,s.jsx)(e.hr,{}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Application to Application B Deployment"}),"\n\xa0"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"image",src:i(67452).A+"",width:"1033",height:"443"})}),"\n",(0,s.jsx)(e.admonition,{title:"Details",type:"info",children:(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Client is SDK integrated"}),"\n",(0,s.jsx)(e.li,{children:"Application is SDK integrated"}),"\n"]})}),"\n",(0,s.jsx)(e.p,{children:"\xa0"}),"\n",(0,s.jsx)(e.admonition,{title:"Advantages",type:"tip",children:(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Application to Application Encryption"}),"\n",(0,s.jsx)(e.li,{children:"No additional routing needed"}),"\n",(0,s.jsx)(e.li,{children:"No additional DNS entries needed"}),"\n"]})}),"\n",(0,s.jsx)(e.p,{children:"\xa0"}),"\n",(0,s.jsx)(e.admonition,{title:"Things to consider while deciding",type:"caution",children:(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"SDK and Application source code availability"}),"\n"]})}),"\n",(0,s.jsx)(e.p,{children:"\xa0"}),"\n",(0,s.jsx)(e.hr,{}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Application to Application C Deployment"}),"\n\xa0"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"image",src:i(2031).A+"",width:"835",height:"443"})}),"\n",(0,s.jsx)(e.admonition,{title:"Details",type:"info",children:(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Client is SDK integrated"}),"\n",(0,s.jsx)(e.li,{children:"Application is SDK integrated."}),"\n"]})}),"\n",(0,s.jsx)(e.p,{children:"\xa0"}),"\n",(0,s.jsx)(e.admonition,{title:"Advantages",type:"tip",children:(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"No need to deploy private edge routers"}),"\n",(0,s.jsx)(e.li,{children:"Application to Application Encryption"}),"\n",(0,s.jsx)(e.li,{children:"No additional routing needed"}),"\n",(0,s.jsx)(e.li,{children:"No additional DNS entries needed"}),"\n"]})}),"\n",(0,s.jsx)(e.p,{children:"\xa0"}),"\n",(0,s.jsx)(e.admonition,{title:"Things to consider while deciding",type:"caution",children:(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Fabric is not extended into application network"}),"\n",(0,s.jsx)(e.li,{children:"SDK and Application source code availability"}),"\n"]})}),"\n",(0,s.jsx)(e.p,{children:"\xa0"}),"\n",(0,s.jsx)(e.hr,{}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Application to Host A Deployment"}),"\n\xa0"]}),"\n",(0,s.jsx)(a.Ay,{}),"\n",(0,s.jsx)(e.p,{children:"\xa0"}),"\n",(0,s.jsx)(e.hr,{}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Application to Host B Deployment"}),"\n\xa0"]}),"\n",(0,s.jsx)(o.Ay,{}),"\n",(0,s.jsx)(e.p,{children:"\xa0"}),"\n",(0,s.jsx)(e.hr,{}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Application to Host C Deployment"}),"\n\xa0"]}),"\n",(0,s.jsx)(c.Ay,{}),"\n",(0,s.jsx)(e.p,{children:"\xa0"}),"\n",(0,s.jsx)(e.hr,{}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Application to Router A Deployment"}),"\n\xa0"]}),"\n",(0,s.jsx)(d.Ay,{}),"\n",(0,s.jsx)(e.p,{children:"\xa0"}),"\n",(0,s.jsx)(e.hr,{}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Application to Router B Deployment"}),"\n\xa0"]}),"\n",(0,s.jsx)(r.Ay,{}),"\n"]}),"\n"]})]})}function m(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(u,{...n})}):u(n)}},92119:(n,e,i)=>{i.d(e,{Ay:()=>d,RM:()=>l});var t=i(74848),s=i(28453);const l=[];function o(n){const e={admonition:"admonition",img:"img",li:"li",p:"p",ul:"ul",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"image",src:i(70386).A+"",width:"835",height:"443"})}),"\n",(0,t.jsx)(e.admonition,{title:"Details",type:"info",children:(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Client is SDK integrated"}),"\n",(0,t.jsx)(e.li,{children:"Application has a client software (ZET) deployed"}),"\n"]})}),"\n",(0,t.jsx)(e.p,{children:"\xa0"}),"\n",(0,t.jsx)(e.admonition,{title:"Advantages",type:"tip",children:(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Application to Host Encryption"}),"\n",(0,t.jsx)(e.li,{children:"No additional routing needed"}),"\n",(0,t.jsx)(e.li,{children:"No additional DNS entries needed"}),"\n"]})}),"\n",(0,t.jsx)(e.p,{children:"\xa0"}),"\n",(0,t.jsx)(e.admonition,{title:"Things to consider while deciding",type:"caution",children:(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Software must be deployed to application servers"}),"\n",(0,t.jsx)(e.li,{children:"SDK and Application source code availability"}),"\n"]})})]})}function d(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(o,{...n})}):o(n)}},35982:(n,e,i)=>{i.d(e,{Ay:()=>d,RM:()=>l});var t=i(74848),s=i(28453);const l=[];function o(n){const e={admonition:"admonition",img:"img",li:"li",p:"p",ul:"ul",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"image",src:i(48535).A+"",width:"1033",height:"443"})}),"\n",(0,t.jsx)(e.admonition,{title:"Details",type:"info",children:(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Client is SDK integrated"}),"\n",(0,t.jsx)(e.li,{children:"Application has a client software (ZET) deployed"}),"\n"]})}),"\n",(0,t.jsx)(e.p,{children:"\xa0"}),"\n",(0,t.jsx)(e.admonition,{title:"Advantages",type:"tip",children:(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Application to Host Encryption"}),"\n",(0,t.jsx)(e.li,{children:"No additional routing needed"}),"\n",(0,t.jsx)(e.li,{children:"No additional DNS entries needed"}),"\n"]})}),"\n",(0,t.jsx)(e.p,{children:"\xa0"}),"\n",(0,t.jsx)(e.admonition,{title:"Things to consider while deciding",type:"caution",children:(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Software must be deployed to application servers"}),"\n",(0,t.jsx)(e.li,{children:"SDK and Application source code availability"}),"\n"]})})]})}function d(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(o,{...n})}):o(n)}},82885:(n,e,i)=>{i.d(e,{Ay:()=>d,RM:()=>l});var t=i(74848),s=i(28453);const l=[];function o(n){const e={admonition:"admonition",img:"img",li:"li",p:"p",ul:"ul",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"image",src:i(72196).A+"",width:"835",height:"443"})}),"\n",(0,t.jsx)(e.admonition,{title:"Details",type:"info",children:(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Client is SDK integrated"}),"\n",(0,t.jsx)(e.li,{children:"Application has a client software (ZET) deployed"}),"\n"]})}),"\n",(0,t.jsx)(e.p,{children:"\xa0"}),"\n",(0,t.jsx)(e.admonition,{title:"Advantages",type:"tip",children:(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"No need to deploy private edge routers"}),"\n",(0,t.jsx)(e.li,{children:"Application to host Encryption"}),"\n",(0,t.jsx)(e.li,{children:"No additional routing needed"}),"\n",(0,t.jsx)(e.li,{children:"No additional DNS entries needed"}),"\n"]})}),"\n",(0,t.jsx)(e.p,{children:"\xa0"}),"\n",(0,t.jsx)(e.admonition,{title:"Things to consider while deciding",type:"caution",children:(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Fabric is not extended into application network"}),"\n",(0,t.jsx)(e.li,{children:"SDK and Application source code availability"}),"\n"]})})]})}function d(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(o,{...n})}):o(n)}},88456:(n,e,i)=>{i.d(e,{Ay:()=>d,RM:()=>l});var t=i(74848),s=i(28453);const l=[];function o(n){const e={admonition:"admonition",img:"img",li:"li",p:"p",ul:"ul",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"image",src:i(63205).A+"",width:"835",height:"443"})}),"\n",(0,t.jsx)(e.admonition,{title:"Details",type:"info",children:(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Client is SDK integrated"}),"\n",(0,t.jsx)(e.li,{children:"Application is behind private router"}),"\n"]})}),"\n",(0,t.jsx)(e.p,{children:"\xa0"}),"\n",(0,t.jsx)(e.admonition,{title:"Advantages",type:"tip",children:(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"No software must be deployed to application servers"}),"\n",(0,t.jsx)(e.li,{children:"No additional routing needed"}),"\n",(0,t.jsx)(e.li,{children:"No additional DNS entries needed"}),"\n"]})}),"\n",(0,t.jsx)(e.p,{children:"\xa0"}),"\n",(0,t.jsx)(e.admonition,{title:"Things to consider while deciding",type:"caution",children:(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Less secure, connection from private router to application is not protected"}),"\n",(0,t.jsx)(e.li,{children:"SDK and Application source code availability"}),"\n"]})})]})}function d(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(o,{...n})}):o(n)}},20341:(n,e,i)=>{i.d(e,{Ay:()=>d,RM:()=>l});var t=i(74848),s=i(28453);const l=[];function o(n){const e={admonition:"admonition",img:"img",li:"li",p:"p",ul:"ul",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"image",src:i(99652).A+"",width:"1033",height:"443"})}),"\n",(0,t.jsx)(e.admonition,{title:"Details",type:"info",children:(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Client is SDK integrated."}),"\n",(0,t.jsx)(e.li,{children:"Application is behind private router"}),"\n"]})}),"\n",(0,t.jsx)(e.p,{children:"\xa0"}),"\n",(0,t.jsx)(e.admonition,{title:"Advantages",type:"tip",children:(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"No software must be deployed to application servers"}),"\n",(0,t.jsx)(e.li,{children:"No additional routing needed"}),"\n",(0,t.jsx)(e.li,{children:"No additional DNS entries needed"}),"\n"]})}),"\n",(0,t.jsx)(e.p,{children:"\xa0"}),"\n",(0,t.jsx)(e.admonition,{title:"Things to consider while deciding",type:"caution",children:(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Less secure, connection from private router to application is not protected"}),"\n",(0,t.jsx)(e.li,{children:"SDK and Application source code availability"}),"\n"]})})]})}function d(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(o,{...n})}):o(n)}},56061:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/app_to_app_a_deploy-3422948c21a932b129002b854fb06431.png"},67452:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/app_to_app_b_deploy-78bf6729c12a4b888deb6bd940b6e95c.png"},2031:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/app_to_app_c_deploy-57aa99e291c93394a623b0ff97f06b3b.png"},70386:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/app_to_host_a_deploy-dcb1f5ad5a99488854b4bf5580b84679.png"},48535:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/app_to_host_b_deploy-52f7b63a05d5372b2a825007f7c41d2b.png"},72196:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/app_to_host_c_deploy-e2ba8b8407bd3da97edba7a258e1a0cc.png"},63205:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/app_to_router_a_deploy-16a9c85c8cdd1eebc87e053b6c5c3c8e.png"},99652:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/app_to_router_b_deploy-887cf0e99317cc81962ebde42f6699c5.png"},28453:(n,e,i)=>{i.d(e,{R:()=>o,x:()=>d});var t=i(96540);const s={},l=t.createContext(s);function o(n){const e=t.useContext(l);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),t.createElement(l.Provider,{value:e},n.children)}}}]);