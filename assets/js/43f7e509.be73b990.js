"use strict";(self.webpackChunkdocusaurus_3=self.webpackChunkdocusaurus_3||[]).push([[9690],{43286:(e,t,n)=>{n.d(t,{Ay:()=>l,RM:()=>i});var o=n(74848),r=n(28453);const i=[{value:"For Tunnelers",id:"for-tunnelers",level:4},{value:"For BrowZer",id:"for-browzer",level:4},{value:"For Ziti Admin Console (ZAC)",id:"for-ziti-admin-console-zac",level:4}];function s(e){const t={a:"a",code:"code",h4:"h4",p:"p",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.a,{href:"https://oauth.net/2/pkce/",children:"Authorization Code Flow with PKCE or PKCE flow"})," requires configuring callback URLs the\r\nIdentity Provider (IdP) will allow redirecting to. If the URL for a specific client is not specifically listed, the IdP\r\nwill deny the authentication request. Depending on the technology used to authenticate to the OpenZiti Network,\r\ndifferent URLs need to be specified. More than one URL is allowed to be configured. Decide if you are configuring the\r\nIdP for use with tunnelers, with BrowZer or with both and add the appropriate callback urls."]}),"\n",(0,o.jsx)(t.p,{children:'In the Auth0 dashboard, with the application selected, choose the "Settings" tab and scroll down to the "Application\r\nURIs" section and add the URLs.'}),"\n",(0,o.jsx)(t.h4,{id:"for-tunnelers",children:"For Tunnelers"}),"\n",(0,o.jsxs)(t.p,{children:["Tunnelers require an allowed callback URL of: ",(0,o.jsx)(t.code,{children:"http://localhost:20314/auth/callback"}),"."]}),"\n",(0,o.jsx)(t.h4,{id:"for-browzer",children:"For BrowZer"}),"\n",(0,o.jsxs)(t.p,{children:["The URL to configure for BrowZer will vary depending on the BrowZer configuration. BrowZer requires a wildcard\r\ncertificate in order to be deployed and all services are delivered from this wildcard domain. You will need to add\r\nthe configured ",(0,o.jsx)(t.a,{href:"/docs/learn/quickstarts/browzer/example/#get-a-wildcard-certificate",children:"wildcard domain"})," as the\r\ncallback url."]}),"\n",(0,o.jsx)(t.h4,{id:"for-ziti-admin-console-zac",children:"For Ziti Admin Console (ZAC)"}),"\n",(0,o.jsxs)(t.p,{children:["The URL to configure an IdP for so that ZAC will be able to authenticate will depend on how you deploy your ZAC. The\r\ncurrent method recommended to deploy ZAC will deploy it on the same URL as the controller. For example:\r\n",(0,o.jsx)(t.a,{href:"https://controller.example.com/zac/callback",children:"https://controller.example.com/zac/callback"})]})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}},64174:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"guides/external-auth/identity-providers/google","title":"Google Workspace","description":"This section illustrates where the expected values are found within the Google dashboards. There are at least two","source":"@site/docs/guides/external-auth/identity-providers/google.mdx","sourceDirName":"guides/external-auth/identity-providers","slug":"/guides/external-auth/identity-providers/google","permalink":"/docs/guides/external-auth/identity-providers/google","draft":false,"unlisted":false,"editUrl":"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/guides/external-auth/identity-providers/google.mdx","tags":[],"version":"current","lastUpdatedAt":1743027175000,"frontMatter":{"title":"Google Workspace","sidebar_label":"Google","hide_table_of_contents":true},"sidebar":"docsSidebar","previous":{"title":"Duo","permalink":"/docs/guides/external-auth/identity-providers/duo"},"next":{"title":"Keycloak","permalink":"/docs/guides/external-auth/identity-providers/keycloak"}}');var r=n(74848),i=n(28453),s=(n(43286),n(27763));const l={title:"Google Workspace",sidebar_label:"Google",hide_table_of_contents:!0},c="Google Workspace",a={},d=[{value:"Create a Client/Credential",id:"create-a-clientcredential",level:2},{value:"Select Credential Type",id:"select-credential-type",level:2},{value:"Common Errors With Google",id:"common-errors-with-google",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",div:"div",h1:"h1",h2:"h2",header:"header",hr:"hr",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"google-workspace",children:"Google Workspace"})}),"\n",(0,r.jsx)("img",{src:"/icons/logo-google.svg",alt:"Google logo",height:"100px"}),"\n",(0,r.jsxs)(t.p,{children:["This section illustrates where the expected values are found within the Google dashboards. There are at least two\ndifferent consoles for Google, the ",(0,r.jsx)(t.a,{href:"https://console.cloud.google.com/auth/overview",children:"Google Auth Platform"}),"\nand ",(0,r.jsx)(t.a,{href:"https://console.cloud.google.com/apis/credentials",children:"Google Cloud APIs & Services"}),". For a more detailed guide on\nenabling Google with OpenZiti, see below. Use these values to configure an external JWT signer. All of these values\nare found from the ",(0,r.jsx)(t.strong,{children:"client"})," or ",(0,r.jsx)(t.strong,{children:"credentials"})," screen in the corresponding overview page."]}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsxs)(t.p,{children:["Most of the errors when using Google as an identity provider are due to selecting/using the wrong type of client.\nThe only client type that currently works with OpenZiti is the ",(0,r.jsx)(t.strong,{children:"Universal Windows Platform"})," client type. If you use any\nof the other client types you will experience one sort of error or another. Also, only OpenZiti tunnelers will work with\nthis configuration. Google does not function standalone with BrowZer or Ziti Admin Console (ZAC)"]})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Where to Find the Value in the Google UI"}),(0,r.jsx)(t.th,{children:"Example"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Issuer"})}),(0,r.jsxs)(t.td,{children:["The issuer for all Google tokens is constant: ",(0,r.jsx)(t.a,{href:"https://accounts.google.com",children:"https://accounts.google.com"})]}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://accounts.google.com",children:"https://accounts.google.com"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Client ID"})}),(0,r.jsx)(t.td,{children:"Found on the client/credentials screen"}),(0,r.jsx)(t.td,{children:"264297154877-lni3d11teird99mhkmches566dmt0f3i.apps.googleusercontent.com"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Audience"})}),(0,r.jsxs)(t.td,{children:["Unless overridden, the same value as the ",(0,r.jsx)(t.strong,{children:"Client ID"})]}),(0,r.jsx)(t.td,{children:"264297154877-lni3d11teird99mhkmches566dmt0f3i.apps.googleusercontent.com"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"External Auth URL"})}),(0,r.jsxs)(t.td,{children:["The same value as the Issuer. Always ",(0,r.jsx)(t.a,{href:"https://accounts.google.com",children:"https://accounts.google.com"})]}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://accounts.google.com",children:"https://accounts.google.com"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"JWKS Endpoint"})}),(0,r.jsx)(t.td,{children:"Same value for all tokens. Found using the OpenID configuration URL"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://www.googleapis.com/oauth2/v3/certs",children:"https://www.googleapis.com/oauth2/v3/certs"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Claims Property"})}),(0,r.jsxs)(t.td,{children:["Often ",(0,r.jsx)(t.code,{children:"email"}),", but can also be ",(0,r.jsx)(t.code,{children:"sub"})," or any other claim contained in the JWT"]}),(0,r.jsx)(t.td,{children:"email"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Scopes"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"openid"})," is always included. Often ",(0,r.jsx)(t.code,{children:"email"})," but ",(0,r.jsx)(t.code,{children:"profile"})," or any standard or custom scope"]}),(0,r.jsx)(t.td,{children:"profile offline_access"})]})]})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"create-a-clientcredential",children:"Create a Client/Credential"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://console.cloud.google.com/auth/overview",children:"Google Auth Platform"}),"\nand ",(0,r.jsx)(t.a,{href:"https://console.cloud.google.com/apis/credentials",children:"Google Cloud APIs & Services"})," both allow you to generate\ncredentials or clients. Although the terminology changes, both are the same at the end. If you create a credential\nin the APIs & Services screen, it will appear in the Google Auth Platform as a client."]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["The screens shown below are from the ",(0,r.jsx)(t.a,{href:"https://console.cloud.google.com/apis/credentials",children:"Google Cloud APIs & Services"}),"\nconsole. If the screens do not look very close or identical you may be looking at the\n",(0,r.jsx)(t.a,{href:"https://console.cloud.google.com/auth/overview",children:"Google Auth Platform"})]})}),"\n",(0,r.jsx)(t.p,{children:"Begin, by creating a credential. From the APIs & Services console, click on Credentials, Create Credentials and\nchoose OAuth client ID:"}),"\n",(0,r.jsx)(t.admonition,{title:"Create a Client/Credential",type:"info",children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Auth0 Applications",src:n(69746).A+"",width:"885",height:"358"})})}),"\n",(0,r.jsx)(t.h2,{id:"select-credential-type",children:"Select Credential Type"}),"\n",(0,r.jsxs)(t.p,{children:["When creating a credential/client there are different types available to select. Depending on the OpenZiti tech\nyou are trying to enable, you will need to select a different type. To enable authentication for BrowZer or the Ziti\nAdmin Console (ZAC) you will need to select the ",(0,r.jsx)(t.strong,{children:"Web application"})," type. For use with an OpenZiti tunneler you will\nneed to select ",(0,r.jsx)(t.strong,{children:"Universal Windows Platform (UWP)"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Begin by creating an application with provider. Go to the admin interface, on the left expand ",(0,r.jsx)(t.strong,{children:"Applications"}),", click\non ",(0,r.jsx)(t.strong,{children:"Applications"})," an then click on ",(0,r.jsx)(t.strong,{children:"Create with Provider"})," and complete the wizard that pops up."]}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)("summary",{children:"Universal Windows Platform (UWP)"}),(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Auth0 Applications",src:n(56987).A+"",width:"559",height:"495"})})]}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)("summary",{children:"Web Application"}),(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Auth0 Applications",src:n(82733).A+"",width:"550",height:"955"})})]}),"\n",(0,r.jsx)(t.h2,{id:"common-errors-with-google",children:"Common Errors With Google"}),"\n",(0,r.jsxs)(t.p,{children:["If you are using any client type other than ",(0,r.jsx)(t.strong,{children:"Universal Windows Platform (UWP)"})," and trying to use Google with anything\nother than the OpenZiti tunnelers clients will likely experience errors. One such example is shown below."]}),"\n",(0,r.jsx)(t.div,{className:"code-section",children:(0,r.jsxs)(t.div,{className:"code-section-code",children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Example error"})}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-text",children:'{\n  "error": "invalid_request",\n  "error_description": "client_secret is missing."\n}\n'})})]})})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},27763:(e,t,n)=>{n.d(t,{A:()=>m});var o=n(96540),r=n(34164),i=n(25246),s=n(9136),l=n(33535);const c={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};var a=n(74848);function d(e){return!!e&&("SUMMARY"===e.tagName||d(e.parentElement))}function h(e,t){return!!e&&(e===t||h(e.parentElement,t))}function u(e){let{summary:t,children:n,...u}=e;(0,i.A)().collectAnchor(u.id);const p=(0,s.A)(),g=(0,o.useRef)(null),{collapsed:x,setCollapsed:m}=(0,l.u)({initialState:!u.open}),[f,j]=(0,o.useState)(u.open),w=o.isValidElement(t)?t:(0,a.jsx)("summary",{children:t??"Details"});return(0,a.jsxs)("details",{...u,ref:g,open:f,"data-collapsed":x,className:(0,r.A)(c.details,p&&c.isBrowser,u.className),onMouseDown:e=>{d(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;d(t)&&h(t,g.current)&&(e.preventDefault(),x?(m(!1),j(!0)):m(!0))},children:[w,(0,a.jsx)(l.N,{lazy:!1,collapsed:x,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{m(e),j(!e)},children:(0,a.jsx)("div",{className:c.collapsibleContent,children:n})})]})}const p={details:"details_b_Ee"},g="alert alert--info";function x(e){let{...t}=e;return(0,a.jsx)(u,{...t,className:(0,r.A)(g,p.details,t.className)})}function m(e){const t=o.Children.toArray(e.children),n=t.find((e=>o.isValidElement(e)&&"summary"===e.type)),r=(0,a.jsx)(a.Fragment,{children:t.filter((e=>e!==n))});return(0,a.jsx)(x,{...e,summary:n,children:r})}},69746:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/create-credentials-08a78d1fb7a8c9f1f98b0892dee8d4d4.png"},56987:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/create-uwp-type-064bcd541611d04270a4b904292c4234.png"},82733:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/create-web-type-082f7588a6b67b9f4f333a7cc608e7f0.png"},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var o=n(96540);const r={},i=o.createContext(r);function s(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);