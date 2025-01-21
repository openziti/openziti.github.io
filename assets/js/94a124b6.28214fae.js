"use strict";(self.webpackChunkdocusaurus_3=self.webpackChunkdocusaurus_3||[]).push([[6280],{93518:(e,t,r)=>{r.d(t,{Ay:()=>d,RM:()=>o});var i=r(74848),n=r(28453);const o=[{value:"Gather IdP Information",id:"gather-idp-information",level:3},{value:"Gather <code>clientId</code>",id:"gather-clientid",level:4},{value:"Gather <code>issuer</code>",id:"gather-issuer",level:4},{value:"Gather <code>jwks_uri</code>",id:"gather-jwks_uri",level:4},{value:"Create External JWT Signer",id:"create-external-jwt-signer",level:3}];function s(e){const t={a:"a",br:"br",code:"code",em:"em",h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"The generic instructions below apply to any identity provider used with BrowZer."}),"\n",(0,i.jsxs)(t.p,{children:["If you plan to use this identity provider with your BrowZer network,\nand you'd like more detailed instructions that are specific to this identity provider\n(e.g. ",(0,i.jsx)(t.em,{children:"where in the IdP's UI to find the values described below"}),"),\nplease express your interest over in our ",(0,i.jsx)(t.a,{href:"https://openziti.discourse.group/",children:"Discourse forum"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"gather-idp-information",children:"Gather IdP Information"}),"\n",(0,i.jsxs)(t.p,{children:["Your OpenZiti network must be configured to become aware of your Auth0 identity provider.",(0,i.jsx)(t.br,{}),"\n","OpenZiti refers to the identity provider as an ",(0,i.jsx)(t.code,{children:"External JWT Signer"}),".  Before you can set up the new JWT signer, you must gather some information from the new Auth0 Application that you just created:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["the ",(0,i.jsx)(t.code,{children:"clientId"})]}),"\n",(0,i.jsxs)(t.li,{children:["the ",(0,i.jsx)(t.code,{children:"issuer"})]}),"\n",(0,i.jsxs)(t.li,{children:["the ",(0,i.jsx)(t.code,{children:"jwks_uri"})]}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)(t.h4,{id:"gather-clientid",children:["Gather ",(0,i.jsx)(t.code,{children:"clientId"})]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"clientId"})," can be found via the openid-configuration endpoint that all OIDC-compliant identity providers expose.  The openid-configuration endpoint URL for Auth0 looks like this:"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)(t.h4,{id:"gather-issuer",children:["Gather ",(0,i.jsx)(t.code,{children:"issuer"})]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"issuer"})," can be found via the openid-configuration endpoint that all OIDC-compliant identity providers expose.",(0,i.jsx)(t.br,{}),"\n","The openid-configuration endpoint URL for Auth0 looks like this:"]}),"\n",(0,i.jsx)("p",{align:"center",children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"https://<YOUR_IDP_DOMAIN>/<YOUR_IDP_PATH>/.well-known/openid-configuration"})})}),"\n",(0,i.jsxs)(t.p,{children:["where the value for ",(0,i.jsx)(t.code,{children:"<YOUR_IDP_DOMAIN>"})," is specific to where you are hosting your identity provider, and\nwhere the value for ",(0,i.jsx)(t.code,{children:"<YOUR_IDP_PATH>"})," is specific to your identity provider's implementation."]}),"\n",(0,i.jsxs)(t.p,{children:["When you enter the openid-configuration endpoint URL into a browser, you will receive a JSON response that will\ncontain an ",(0,i.jsx)(t.code,{children:"issuer"})," field."]}),"\n",(0,i.jsxs)(t.p,{children:["Take note of the ",(0,i.jsx)(t.code,{children:"issuer"})," value."]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)(t.h4,{id:"gather-jwks_uri",children:["Gather ",(0,i.jsx)(t.code,{children:"jwks_uri"})]}),"\n",(0,i.jsxs)(t.p,{children:["The JSON response from the above openid-configuration endpoint URL will also\ncontain a ",(0,i.jsx)(t.code,{children:"jwks_uri"})," field."]}),"\n",(0,i.jsxs)(t.p,{children:["Take note of the ",(0,i.jsx)(t.code,{children:"jwks_uri"})," value returned from the above openid-configuration endpoint URL."]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(t.h3,{id:"create-external-jwt-signer",children:"Create External JWT Signer"}),"\n",(0,i.jsxs)(t.p,{children:["Using the values described above, use the ",(0,i.jsx)(t.code,{children:"ziti"})," CLI to configure an external JWT signer that represents your Auth0 identity provider.  You can find details on how to do this in the ",(0,i.jsx)(t.a,{href:"/docs/learn/quickstarts/browzer/",children:"BrowZer Quickstart documentation"})]})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},63459:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>d,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"guides/Identity_Providers/stytch/index","title":"Stytch for BrowZer","description":"Stytch for OpenZiti BrowZer","source":"@site/docs/guides/Identity_Providers/stytch/index.mdx","sourceDirName":"guides/Identity_Providers/stytch","slug":"/identity-providers-for-browZer-stytch","permalink":"/docs/identity-providers-for-browZer-stytch","draft":false,"unlisted":false,"editUrl":"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/guides/Identity_Providers/stytch/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Stytch for BrowZer","sidebar_label":"Stytch","slug":"/identity-providers-for-browZer-stytch"},"sidebar":"docsSidebar","previous":{"title":"Ory Kratos","permalink":"/docs/identity-providers-for-browZer-ory-kratos"},"next":{"title":"Zitadel","permalink":"/docs/identity-providers-for-browZer-zitadel"}}');var n=r(74848),o=r(28453),s=r(93518);const d={title:"Stytch for BrowZer",sidebar_label:"Stytch",slug:"/identity-providers-for-browZer-stytch"},c=void 0,l={},a=[...s.RM];function h(e){const{Head:t}={...(0,o.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t,{children:[(0,n.jsx)("title",{children:"Stytch for OpenZiti BrowZer"}),(0,n.jsx)("meta",{name:"description",content:"How to configure Stytch for OpenZiti BrowZer."})]}),"\n",(0,n.jsx)("img",{src:"/icons/logo-stytch.svg",alt:"How to configure Stytch for OpenZiti BrowZer",width:"20%"}),"\n",(0,n.jsx)(s.Ay,{})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>d});var i=r(96540);const n={},o=i.createContext(n);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);