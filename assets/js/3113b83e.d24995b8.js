"use strict";(self.webpackChunkdocusaurus_3=self.webpackChunkdocusaurus_3||[]).push([[9405],{93518:(e,r,i)=>{i.d(r,{Ay:()=>d,RM:()=>t});var n=i(74848),o=i(28453);const t=[{value:"Gather IdP Information",id:"gather-idp-information",level:3},{value:"Gather <code>clientId</code>",id:"gather-clientid",level:4},{value:"Gather <code>issuer</code>",id:"gather-issuer",level:4},{value:"Gather <code>jwks_uri</code>",id:"gather-jwks_uri",level:4},{value:"Create External JWT Signer",id:"create-external-jwt-signer",level:3}];function s(e){const r={a:"a",br:"br",code:"code",em:"em",h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"The generic instructions below apply to any identity provider used with BrowZer."}),"\n",(0,n.jsxs)(r.p,{children:["If you plan to use this identity provider with your BrowZer network,\nand you'd like more detailed instructions that are specific to this identity provider\n(e.g. ",(0,n.jsx)(r.em,{children:"where in the IdP's UI to find the values described below"}),"),\nplease express your interest over in our ",(0,n.jsx)(r.a,{href:"https://openziti.discourse.group/",children:"Discourse forum"}),"."]}),"\n",(0,n.jsx)(r.h3,{id:"gather-idp-information",children:"Gather IdP Information"}),"\n",(0,n.jsxs)(r.p,{children:["Your OpenZiti network must be configured to become aware of your Auth0 identity provider.",(0,n.jsx)(r.br,{}),"\n","OpenZiti refers to the identity provider as an ",(0,n.jsx)(r.code,{children:"External JWT Signer"}),".  Before you can set up the new JWT signer, you must gather some information from the new Auth0 Application that you just created:"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["the ",(0,n.jsx)(r.code,{children:"clientId"})]}),"\n",(0,n.jsxs)(r.li,{children:["the ",(0,n.jsx)(r.code,{children:"issuer"})]}),"\n",(0,n.jsxs)(r.li,{children:["the ",(0,n.jsx)(r.code,{children:"jwks_uri"})]}),"\n"]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsxs)(r.h4,{id:"gather-clientid",children:["Gather ",(0,n.jsx)(r.code,{children:"clientId"})]}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"clientId"})," can be found via the openid-configuration endpoint that all OIDC-compliant identity providers expose.  The openid-configuration endpoint URL for Auth0 looks like this:"]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsxs)(r.h4,{id:"gather-issuer",children:["Gather ",(0,n.jsx)(r.code,{children:"issuer"})]}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"issuer"})," can be found via the openid-configuration endpoint that all OIDC-compliant identity providers expose.",(0,n.jsx)(r.br,{}),"\n","The openid-configuration endpoint URL for Auth0 looks like this:"]}),"\n",(0,n.jsx)("p",{align:"center",children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"https://<YOUR_IDP_DOMAIN>/<YOUR_IDP_PATH>/.well-known/openid-configuration"})})}),"\n",(0,n.jsxs)(r.p,{children:["where the value for ",(0,n.jsx)(r.code,{children:"<YOUR_IDP_DOMAIN>"})," is specific to where you are hosting your identity provider, and\nwhere the value for ",(0,n.jsx)(r.code,{children:"<YOUR_IDP_PATH>"})," is specific to your identity provider's implementation."]}),"\n",(0,n.jsxs)(r.p,{children:["When you enter the openid-configuration endpoint URL into a browser, you will receive a JSON response that will\ncontain an ",(0,n.jsx)(r.code,{children:"issuer"})," field."]}),"\n",(0,n.jsxs)(r.p,{children:["Take note of the ",(0,n.jsx)(r.code,{children:"issuer"})," value."]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsxs)(r.h4,{id:"gather-jwks_uri",children:["Gather ",(0,n.jsx)(r.code,{children:"jwks_uri"})]}),"\n",(0,n.jsxs)(r.p,{children:["The JSON response from the above openid-configuration endpoint URL will also\ncontain a ",(0,n.jsx)(r.code,{children:"jwks_uri"})," field."]}),"\n",(0,n.jsxs)(r.p,{children:["Take note of the ",(0,n.jsx)(r.code,{children:"jwks_uri"})," value returned from the above openid-configuration endpoint URL."]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(r.h3,{id:"create-external-jwt-signer",children:"Create External JWT Signer"}),"\n",(0,n.jsxs)(r.p,{children:["Using the values described above, use the ",(0,n.jsx)(r.code,{children:"ziti"})," CLI to configure an external JWT signer that represents your Auth0 identity provider.  You can find details on how to do this in the ",(0,n.jsx)(r.a,{href:"/docs/learn/quickstarts/browzer/",children:"BrowZer Quickstart documentation"})]})]})}function d(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(s,{...e})}):s(e)}},54978:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>n,toc:()=>a});const n=JSON.parse('{"id":"guides/Identity_Providers/duo/index","title":"Duo for BrowZer","description":"Duo for OpenZiti BrowZer","source":"@site/docs/guides/Identity_Providers/duo/index.mdx","sourceDirName":"guides/Identity_Providers/duo","slug":"/identity-providers-for-browZer-duo","permalink":"/docs/identity-providers-for-browZer-duo","draft":false,"unlisted":false,"editUrl":"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/guides/Identity_Providers/duo/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Duo for BrowZer","sidebar_label":"Duo","slug":"/identity-providers-for-browZer-duo"},"sidebar":"docsSidebar","previous":{"title":"Dex","permalink":"/docs/identity-providers-for-browZer-dex"},"next":{"title":"Microsoft Entra ID","permalink":"/docs/identity-providers-for-browZer-entra"}}');var o=i(74848),t=i(28453),s=i(93518);const d={title:"Duo for BrowZer",sidebar_label:"Duo",slug:"/identity-providers-for-browZer-duo"},c=void 0,l={},a=[...s.RM];function u(e){const{Head:r}={...(0,t.R)(),...e.components};return r||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r,{children:[(0,o.jsx)("title",{children:"Duo for OpenZiti BrowZer"}),(0,o.jsx)("meta",{name:"description",content:"How to configure Duo for OpenZiti BrowZer."})]}),"\n",(0,o.jsx)("img",{src:"/icons/logo-duo.svg",alt:"How to configure Duo for OpenZiti BrowZer",width:"30%"}),"\n",(0,o.jsx)(s.Ay,{})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},28453:(e,r,i)=>{i.d(r,{R:()=>s,x:()=>d});var n=i(96540);const o={},t=n.createContext(o);function s(e){const r=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);