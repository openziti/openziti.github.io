"use strict";(self.webpackChunkdocusaurus_3=self.webpackChunkdocusaurus_3||[]).push([[8593],{43286:(e,t,n)=>{n.d(t,{Ay:()=>o,RM:()=>d});var i=n(74848),r=n(28453);const d=[{value:"For Tunnelers",id:"for-tunnelers",level:4},{value:"For BrowZer",id:"for-browzer",level:4},{value:"For Ziti Admin Console (ZAC)",id:"for-ziti-admin-console-zac",level:4}];function s(e){const t={a:"a",code:"code",h4:"h4",p:"p",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.a,{href:"https://oauth.net/2/pkce/",children:"Authorization Code Flow with PKCE or PKCE flow"})," requires configuring callback URLs the\r\nIdentity Provider (IdP) will allow redirecting to. If the URL for a specific client is not specifically listed, the IdP\r\nwill deny the authentication request. Depending on the technology used to authenticate to the OpenZiti Network,\r\ndifferent URLs need to be specified. More than one URL is allowed to be configured. Decide if you are configuring the\r\nIdP for use with tunnelers, with BrowZer or with both and add the appropriate callback urls."]}),"\n",(0,i.jsx)(t.p,{children:'In the Auth0 dashboard, with the application selected, choose the "Settings" tab and scroll down to the "Application\r\nURIs" section and add the URLs.'}),"\n",(0,i.jsx)(t.h4,{id:"for-tunnelers",children:"For Tunnelers"}),"\n",(0,i.jsxs)(t.p,{children:["Tunnelers require an allowed callback URL of: ",(0,i.jsx)(t.code,{children:"http://localhost:20314/auth/callback"}),"."]}),"\n",(0,i.jsx)(t.h4,{id:"for-browzer",children:"For BrowZer"}),"\n",(0,i.jsxs)(t.p,{children:["The URL to configure for BrowZer will vary depending on the BrowZer configuration. BrowZer requires a wildcard\r\ncertificate in order to be deployed and all services are delivered from this wildcard domain. You will need to add\r\nthe configured ",(0,i.jsx)(t.a,{href:"/docs/learn/quickstarts/browzer/example/#get-a-wildcard-certificate",children:"wildcard domain"})," as the\r\ncallback url."]}),"\n",(0,i.jsx)(t.h4,{id:"for-ziti-admin-console-zac",children:"For Ziti Admin Console (ZAC)"}),"\n",(0,i.jsxs)(t.p,{children:["The URL to configure an IdP for so that ZAC will be able to authenticate will depend on how you deploy your ZAC. The\r\ncurrent method recommended to deploy ZAC will deploy it on the same URL as the controller. For example:\r\n",(0,i.jsx)(t.a,{href:"https://controller.example.com/zac/callback",children:"https://controller.example.com/zac/callback"})]})]})}function o(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},45272:(e,t,n)=>{n.d(t,{Ay:()=>o,RM:()=>d});var i=n(74848),r=n(28453);const d=[{value:"Required Fields",id:"required-fields",level:2}];function s(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"required-fields",children:"Required Fields"}),"\n",(0,i.jsxs)(t.p,{children:["The following fields are necessary in order to configure an external JWT signer with OpenZiti. This configuration will\r\nenable authentication via JWTs obtained through an\r\n",(0,i.jsx)(t.a,{href:"https://oauth.net/2/pkce/",children:"Authorization Code Flow with PKCE or PKCE flow"}),". OpenID Connect providers will provide a\r\ndiscovery endpoint that is useful for discovering the ",(0,i.jsx)(t.strong,{children:"Issuer"})," and the ",(0,i.jsx)(t.strong,{children:"JWKS Endpoint"})," needed to complete the\r\nexternal jwt signer setup."]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Field"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Example"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Issuer"})}),(0,i.jsxs)(t.td,{children:["The issuer field is a unique HTTPS URL that identifies the OpenID Provider. It must match the ",(0,i.jsx)(t.code,{children:"iss"})," claim provided in the JWT"]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://my.identity.provider:2345",children:"https://my.identity.provider:2345"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Client ID"})}),(0,i.jsx)(t.td,{children:"The unique value provided by the OIDC provider used to identify the application within the provider to use"}),(0,i.jsx)(t.td,{children:"openziti_client_id"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Audience"})}),(0,i.jsxs)(t.td,{children:["The audience, specified as the ",(0,i.jsx)(t.code,{children:"aud"})," field in the JWT, used to verify the JWT is intended for the OpenZiti Controller"]}),(0,i.jsx)(t.td,{children:"openziti_client_id"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"External Auth URL"})}),(0,i.jsx)(t.td,{children:"For OIDC, this is the same value as the issuer and should be the base url of the OIDC discovery endpoint (.well-known/openid-configuration)"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://my.identity.provider:2345",children:"https://my.identity.provider:2345"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"JWKS Endpoint"})}),(0,i.jsxs)(t.td,{children:["A url the OpenZiti Controller can use to retrieve a ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/JSON_Web_Token",children:"JSON Web Key Set"}),", used to verify JWTs"]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://my.identity.provider:2345/.well-known/openid-configuration",children:"https://my.identity.provider:2345/.well-known/openid-configuration"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Claims Property"})}),(0,i.jsx)(t.td,{children:"The property within the JWT returned from the OIDC provider that will map to the external ID field of an identity"}),(0,i.jsx)(t.td,{children:"email"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Scopes"})}),(0,i.jsx)(t.td,{children:"The set of scopes to request when generating the authentication request to the OIDC provider"}),(0,i.jsx)(t.td,{children:"profile offline_access"})]})]})]})]})}function o(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},97331:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"guides/external-auth/identity-providers/zzz_unlisted","title":"Generic or Unlisted","description":"Callback URLs","source":"@site/docs/guides/external-auth/identity-providers/zzz_unlisted.mdx","sourceDirName":"guides/external-auth/identity-providers","slug":"/guides/external-auth/identity-providers/unlisted","permalink":"/docs/guides/external-auth/identity-providers/unlisted","draft":false,"unlisted":false,"editUrl":"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/guides/external-auth/identity-providers/zzz_unlisted.mdx","tags":[],"version":"current","lastUpdatedAt":1743027175000,"frontMatter":{"title":"Generic or Unlisted","sidebar_label":"Unlisted","hide_table_of_contents":true,"slug":"unlisted"},"sidebar":"docsSidebar","previous":{"title":"ZITADEL","permalink":"/docs/guides/external-auth/identity-providers/zitadel"},"next":{"title":"Troubleshooting","permalink":"/docs/guides/external-auth/ziti-cli"}}');var r=n(74848),d=n(28453),s=n(43286),o=n(45272);const l={title:"Generic or Unlisted",sidebar_label:"Unlisted",hide_table_of_contents:!0,slug:"unlisted"},c="Generic IdP",h={},a=[...o.RM,{value:"Callback URLs",id:"callback-urls",level:3},...s.RM];function u(e){const t={h1:"h1",h3:"h3",header:"header",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"generic-idp",children:"Generic IdP"})}),"\n",(0,r.jsx)("img",{src:"/icons/logo-unknown.svg",alt:"Google logo",height:"100px"}),"\n",(0,r.jsx)(o.Ay,{}),"\n",(0,r.jsx)(t.h3,{id:"callback-urls",children:"Callback URLs"}),"\n",(0,r.jsx)(s.Ay,{})]})}function p(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var i=n(96540);const r={},d=i.createContext(r);function s(e){const t=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(d.Provider,{value:t},e.children)}}}]);