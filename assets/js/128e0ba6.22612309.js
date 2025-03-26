"use strict";(self.webpackChunkdocusaurus_3=self.webpackChunkdocusaurus_3||[]).push([[808],{43286:(e,n,t)=>{t.d(n,{Ay:()=>d,RM:()=>r});var i=t(74848),s=t(28453);const r=[{value:"For Tunnelers",id:"for-tunnelers",level:4},{value:"For BrowZer",id:"for-browzer",level:4},{value:"For Ziti Admin Console (ZAC)",id:"for-ziti-admin-console-zac",level:4}];function o(e){const n={a:"a",code:"code",h4:"h4",p:"p",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"https://oauth.net/2/pkce/",children:"Authorization Code Flow with PKCE or PKCE flow"})," requires configuring callback URLs the\r\nIdentity Provider (IdP) will allow redirecting to. If the URL for a specific client is not specifically listed, the IdP\r\nwill deny the authentication request. Depending on the technology used to authenticate to the OpenZiti Network,\r\ndifferent URLs need to be specified. More than one URL is allowed to be configured. Decide if you are configuring the\r\nIdP for use with tunnelers, with BrowZer or with both and add the appropriate callback urls."]}),"\n",(0,i.jsx)(n.p,{children:'In the Auth0 dashboard, with the application selected, choose the "Settings" tab and scroll down to the "Application\r\nURIs" section and add the URLs.'}),"\n",(0,i.jsx)(n.h4,{id:"for-tunnelers",children:"For Tunnelers"}),"\n",(0,i.jsxs)(n.p,{children:["Tunnelers require an allowed callback URL of: ",(0,i.jsx)(n.code,{children:"http://localhost:20314/auth/callback"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"for-browzer",children:"For BrowZer"}),"\n",(0,i.jsxs)(n.p,{children:["The URL to configure for BrowZer will vary depending on the BrowZer configuration. BrowZer requires a wildcard\r\ncertificate in order to be deployed and all services are delivered from this wildcard domain. You will need to add\r\nthe configured ",(0,i.jsx)(n.a,{href:"/docs/learn/quickstarts/browzer/example/#get-a-wildcard-certificate",children:"wildcard domain"})," as the\r\ncallback url."]}),"\n",(0,i.jsx)(n.h4,{id:"for-ziti-admin-console-zac",children:"For Ziti Admin Console (ZAC)"}),"\n",(0,i.jsxs)(n.p,{children:["The URL to configure an IdP for so that ZAC will be able to authenticate will depend on how you deploy your ZAC. The\r\ncurrent method recommended to deploy ZAC will deploy it on the same URL as the controller. For example:\r\n",(0,i.jsx)(n.a,{href:"https://controller.example.com/zac/callback",children:"https://controller.example.com/zac/callback"})]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},60524:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>d,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"guides/external-auth/identity-providers/msentra","title":"Microsoft Entra ID","description":"The following fields are necessary in order to configure an external JWT signer with OpenZiti. This configuration will","source":"@site/docs/guides/external-auth/identity-providers/msentra.md","sourceDirName":"guides/external-auth/identity-providers","slug":"/guides/external-auth/identity-providers/msentra","permalink":"/docs/guides/external-auth/identity-providers/msentra","draft":false,"unlisted":false,"editUrl":"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/guides/external-auth/identity-providers/msentra.md","tags":[],"version":"current","lastUpdatedAt":1743027175000,"frontMatter":{"title":"Microsoft Entra ID","sidebar_label":"Microsoft Entra ID","hide_table_of_contents":true},"sidebar":"docsSidebar","previous":{"title":"Keycloak","permalink":"/docs/guides/external-auth/identity-providers/keycloak"},"next":{"title":"Okta","permalink":"/docs/guides/external-auth/identity-providers/okta"}}');var s=t(74848),r=t(28453),o=t(43286);const d={title:"Microsoft Entra ID",sidebar_label:"Microsoft Entra ID",hide_table_of_contents:!0},c="Microsoft Entra IDP",a={},l=[{value:"Get a Microsoft Entra ID Account",id:"get-a-microsoft-entra-id-account",level:2},{value:"Register an Application",id:"register-an-application",level:2},{value:"Redirect URIs",id:"redirect-uris",level:2},{value:"Callback URLs",id:"callback-urls",level:3},...o.RM,{value:"Add Redirect URIs",id:"add-redirect-uris",level:3},{value:"Expose an API",id:"expose-an-api",level:2},{value:"Add a scope",id:"add-a-scope",level:3},{value:"A Note About Audiences",id:"a-note-about-audiences",level:3},{value:"Example",id:"example",level:4},{value:"Common Errors",id:"common-errors",level:2},{value:"Using SPA for Tunnelers",id:"using-spa-for-tunnelers",level:3}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"microsoft-entra-idp",children:"Microsoft Entra IDP"})}),"\n",(0,s.jsx)("img",{src:"/icons/logo-msentra.svg",alt:"MS Entra logo",height:"100px"}),"\n",(0,s.jsxs)(n.p,{children:["The following fields are necessary in order to configure an external JWT signer with OpenZiti. This configuration will\nenable authentication via JWTs obtained through an\n",(0,s.jsx)(n.a,{href:"https://oauth.net/2/pkce/",children:"Authorization Code Flow with PKCE or PKCE flow"}),". All the values are found from the App\nregistration page in ",(0,s.jsx)(n.a,{href:"https://portal.azure.com/",children:"the Azure portal"}),"."]}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsxs)(n.p,{children:["You may want to know your ",(0,s.jsxs)(n.strong,{children:["Microsoft Entra ID ",(0,s.jsx)(n.code,{children:"tenantid"})]}),". The ",(0,s.jsx)(n.code,{children:"tenantid"})," is found from the ",(0,s.jsx)(n.strong,{children:"App\nregistration"})," overview page as the ",(0,s.jsx)(n.strong,{children:"Directory (tenant) ID"})]}),(0,s.jsxs)(n.p,{children:["You also should consult the ",(0,s.jsx)(n.strong,{children:"OpenID Connect metadata document"})," found by clicking on the ",(0,s.jsx)(n.strong,{children:"Endpoints"})," button\non the overview page of the ",(0,s.jsx)(n.strong,{children:"App registration"})]})]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Field"}),(0,s.jsx)(n.th,{children:"Where to Find the Value in the Microsoft Entra UI"}),(0,s.jsx)(n.th,{children:"Example"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Issuer"})}),(0,s.jsxs)(n.td,{children:["Consult the ",(0,s.jsx)(n.strong,{children:"OpenID Connect metadata document"})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://login.microsoftonline.com/23f45e36-2ae6-4434-b116-25c66c27168d/v2.0",children:"https://login.microsoftonline.com/23f45e36-2ae6-4434-b116-25c66c27168d/v2.0"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Client ID"})}),(0,s.jsxs)(n.td,{children:["On the App registration overview page. The ",(0,s.jsx)(n.strong,{children:"Application (client) ID"})]}),(0,s.jsx)(n.td,{children:"1d3584fe-b4eb-403f-b5a9-d1ed8b693b8f"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Audience"})}),(0,s.jsxs)(n.td,{children:["Often the same as the ",(0,s.jsx)(n.strong,{children:"Client ID"})," however depending on how the App/API was setup, this might be the API URI"]}),(0,s.jsx)(n.td,{children:"1d3584fe-b4eb-403f-b5a9-d1ed8b693b8f"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"External Auth URL"})}),(0,s.jsxs)(n.td,{children:["The same value as the ",(0,s.jsx)(n.strong,{children:"Issuer"})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://login.microsoftonline.com/23f45e36-2ae6-4434-b116-25c66c27168d/v2.0",children:"https://login.microsoftonline.com/23f45e36-2ae6-4434-b116-25c66c27168d/v2.0"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"JWKS Endpoint"})}),(0,s.jsxs)(n.td,{children:["Consult the ",(0,s.jsx)(n.strong,{children:"OpenID Connect metadata document"})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://login.microsoftonline.com/23f45e36-2ae6-4434-b116-25c66c27168d/discovery/v2.0/keys",children:"https://login.microsoftonline.com/23f45e36-2ae6-4434-b116-25c66c27168d/discovery/v2.0/keys"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Claims Property"})}),(0,s.jsxs)(n.td,{children:["Often ",(0,s.jsx)(n.code,{children:"unique_name"}),", but can also be ",(0,s.jsx)(n.code,{children:"upn"}),", or ",(0,s.jsx)(n.code,{children:"sub"})," or any other claim contained in the JWT"]}),(0,s.jsx)(n.td,{children:"unique_name"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Scopes"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"openid"})," is always included. Often ",(0,s.jsx)(n.code,{children:"offline_access"})," and the API URI ",(0,s.jsx)(n.code,{children:"api://openziti/auth"})]}),(0,s.jsx)(n.td,{children:"offline_access api://openziti/auth"})]})]})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"get-a-microsoft-entra-id-account",children:"Get a Microsoft Entra ID Account"}),"\n",(0,s.jsxs)(n.p,{children:["If you don't already have an account you can sign up at ",(0,s.jsx)(n.a,{href:"https://entra.microsoft.com/",children:"https://entra.microsoft.com/"}),". After logging into the Azure\nconsole, find and click on the ",(0,s.jsx)(n.strong,{children:"Microsoft Entra ID"})," icon in the navbar:"]}),"\n",(0,s.jsx)(n.admonition,{title:"Open Entra",type:"info",children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Entra icon",src:t(34843).A+"",width:"2174",height:"382"})})}),"\n",(0,s.jsxs)(n.p,{children:["Find ",(0,s.jsx)(n.strong,{children:"App registrations"})," under ",(0,s.jsx)(n.strong,{children:"Manage"})," and select it and click ",(0,s.jsx)(n.strong,{children:"New registration"}),"."]}),"\n",(0,s.jsx)(n.admonition,{title:"Open App Registrations",type:"info",children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Entra icon",src:t(55220).A+"",width:"1262",height:"682"})})}),"\n",(0,s.jsx)(n.h2,{id:"register-an-application",children:"Register an Application"}),"\n",(0,s.jsx)(n.p,{children:"Registering an application will generate the Client ID necessary for configuring the ext-jwt-signer."}),"\n",(0,s.jsxs)(n.p,{children:["Enter a ",(0,s.jsx)(n.strong,{children:"Name"})," for the application and select the appropriate bullet for the ",(0,s.jsx)(n.strong,{children:"Supported account types"}),". If you\nare only enabling one OpenZiti technology for OIDC auth (OpenZiti tunnelers, ZAC, BrowZer), you can skip the next\nsection and set the ",(0,s.jsx)(n.strong,{children:"Redirect URI"})," accordingly. Once finished, click the ",(0,s.jsx)(n.strong,{children:"Register"})," button at the bottom of the\nform. (You can optionally add a single callback here)"]}),"\n",(0,s.jsx)(n.admonition,{title:"Register an Application",type:"info",children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Entra icon",src:t(72725).A+"",width:"894",height:"853"})})}),"\n",(0,s.jsx)(n.h2,{id:"redirect-uris",children:"Redirect URIs"}),"\n",(0,s.jsxs)(n.p,{children:["After creating the App registration, from the ",(0,s.jsx)(n.strong,{children:"Overview"})," page click ",(0,s.jsx)(n.strong,{children:"Add a Redirect URI"})]}),"\n",(0,s.jsx)(n.admonition,{title:"Redirect URIs",type:"info",children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Entra icon",src:t(10068).A+"",width:"1265",height:"317"})})}),"\n",(0,s.jsx)(n.h3,{id:"callback-urls",children:"Callback URLs"}),"\n",(0,s.jsx)(o.Ay,{}),"\n",(0,s.jsx)(n.h3,{id:"add-redirect-uris",children:"Add Redirect URIs"}),"\n",(0,s.jsxs)(n.p,{children:["Under ",(0,s.jsx)(n.strong,{children:"Platform configurations"}),", find the ",(0,s.jsx)(n.strong,{children:"Add a platform"})," button and click it. Depending on the OpenZiti technology\nbeing enabled, choose the appropriate option:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["For OpenZiti Tunnelers, choose ",(0,s.jsx)(n.strong,{children:"Mobile and desktop applications"})]}),"\n",(0,s.jsxs)(n.li,{children:["For BrowZer or Ziti Admin Console (ZAC), choose ",(0,s.jsx)(n.strong,{children:"Single-page application"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Choose the type of token desired. Ideally, an access token will be used with OpenZiti but if necessary ID tokens can be\nused."}),"\n",(0,s.jsx)(n.admonition,{title:"Issued Tokens",type:"info",children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Entra icon",src:t(90880).A+"",width:"471",height:"91"})})}),"\n",(0,s.jsxs)(n.p,{children:["With the callback URIs specified, click ",(0,s.jsx)(n.strong,{children:"Save"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"expose-an-api",children:"Expose an API"}),"\n",(0,s.jsxs)(n.p,{children:["For Microsoft Entra to produce an access token with a customized audience you must ",(0,s.jsx)(n.strong,{children:"Expose an API"})," and add a scope tied\nto the exposed API. This will allow Microsoft Entra to create an access token that the OpenZiti controller can verify."]}),"\n",(0,s.jsxs)(n.p,{children:["In Microsoft Entra from the App registration page created above, click ",(0,s.jsx)(n.strong,{children:"Expose an API"})," and ",(0,s.jsx)(n.strong,{children:"Add"})," an ",(0,s.jsx)(n.strong,{children:"Application ID\nURI"}),". A form will pop up on the side, enter a URI. It's common to prefix the URI with ",(0,s.jsx)(n.code,{children:"api://"})," such as ",(0,s.jsx)(n.code,{children:"api://openziti"}),"."]}),"\n",(0,s.jsx)(n.admonition,{title:"Expose an API",type:"info",children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Entra icon",src:t(84868).A+"",width:"698",height:"485"})})}),"\n",(0,s.jsx)(n.h3,{id:"add-a-scope",children:"Add a scope"}),"\n",(0,s.jsxs)(n.p,{children:["Adding a scope to an exposed API is what instructs Microsoft Entra to add an audience claim to the access token\nwhich is specific to OpenZiti. Click on ",(0,s.jsx)(n.strong,{children:"Add a scope"})," and the ",(0,s.jsx)(n.strong,{children:"Add a scope"})," popup form will come up. Fill out the\nfields accordingly. The ",(0,s.jsx)(n.strong,{children:"Scope name"})," is probably the most important as this is what you will reference on the\nexternal JWT signer in the controller. For example, as shown ",(0,s.jsx)(n.code,{children:"auth"})," is used, but it can be any value."]}),"\n",(0,s.jsxs)(n.p,{children:["Continue filling out the other fields, add display names and consent descriptions as you see fit. Be sure to set the\n",(0,s.jsx)(n.strong,{children:"State"})," value to ",(0,s.jsx)(n.strong,{children:"Enabled"})," to allow clients to request the scope."]}),"\n",(0,s.jsx)(n.admonition,{title:"Add a Scope",type:"info",children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Entra icon",src:t(58627).A+"",width:"1365",height:"697"})})}),"\n",(0,s.jsx)(n.h3,{id:"a-note-about-audiences",children:"A Note About Audiences"}),"\n",(0,s.jsxs)(n.p,{children:["When creating the App Registration, it seems that the value selected for the ",(0,s.jsx)(n.strong,{children:"Supported account types"}),' influences\nthe ability to change the audience. If "Accounts in this organizational directory only (Your Company only -\nSingle tenant)" is chosen, the access token\'s audience will be determined by the URI added to the "exposed api".\nAdding, then requesting a scope added to that "exposed api" will produce an access token with the desired audience.']}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Create an ",(0,s.jsx)(n.strong,{children:"App registration"})," with the name ",(0,s.jsx)(n.strong,{children:"My App Registration"})]}),"\n",(0,s.jsxs)(n.li,{children:["Add the ",(0,s.jsx)(n.strong,{children:"Application ID URI"})," of ",(0,s.jsx)(n.code,{children:"api://my-app-registration"})]}),"\n",(0,s.jsxs)(n.li,{children:["Add a scope to the exposed API: ",(0,s.jsx)(n.code,{children:"auth"})]}),"\n",(0,s.jsxs)(n.li,{children:["On the ",(0,s.jsx)(n.code,{children:"ext-jwt-signer"}),", assign the scope ",(0,s.jsx)(n.code,{children:"api://my-app-registration/auth"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["After successfully authenticating, the access token will have the audience of ",(0,s.jsx)(n.code,{children:"api://my-app-registration"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:'{\n  "aud": "api://my-app-registration",\n  "iss": "https://sts.windows.net/25445e86-2ae6-4434-b116-25c66c27168d/",\n  "iat": 1741991722,\n  "nbf": 1741991722,\n  "exp": 1741996813,\n  ... <jwt continues> ...\n}\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"common-errors",children:"Common Errors"}),"\n",(0,s.jsx)(n.h3,{id:"using-spa-for-tunnelers",children:"Using SPA for Tunnelers"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:'failed to exchange token: oauth2: "invalid_request" "AADSTS9002327: Tokens issued for the \'Single-Page Application\'\nclient-type may only be redeemed via cross-origin requests.'}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["This error is indicating the callback used for tunnelers (",(0,s.jsx)(n.code,{children:"http://localhost:20314/auth/callback"}),') is not allowed when\nusing the MS Entra "SPA" platform. The callback cannot be specified platform type SPA. Move the callback URL to the\n"Mobile and desktop applications" platform.']})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},58627:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/add-api-scope-aa29b56073a2408349ca41c90c7153bd.png"},10068:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/add-redirect-uris-54fac91c15f8308673fb8ebb8c8bf2f8.png"},84868:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/expose-api-add-uri-fe9a84cb1d684f7ad74d7231ef1eeb1c.png"},90880:(e,n,t)=>{t.d(n,{A:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAdcAAABbCAYAAAAhgc/WAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABteSURBVHhe7Z1PjCNH9ce/+SVKCAoRElpCMiSKW6AtTxBXEFFLiFlA3TPS2nNBQnBAv9gjlDngdiQUDtwgl7h9mQ2abgnlhEQO6znMdh/YQfy2hQRnxLg4bJuQTOCEUBAk4o/8O1R3u7r6j9ue9ox3932kkaaru6tevfrz6r0q2w9Np9MpCIIgCIKojf9REwiCIAiCOB9kXAmCIAiiZsi4EgRBEETNkHElCIIgiJoh40oQBEEQNUPGlSAIgiBqhowrQRAEQdQMGVeCIAiCqBkyrgRBEARRM2RcCYIgCKJmyLgSBEEQRM2QcSUIgiCImlkf4xo62G1aCNT0lRGg32zBDdX0FXPh9byPmKO70G1hN7dB020dWAyblsglsFjBOxfEnDpVJnSwexn9WSawEr2qrErPq8p3WWqVp+42rTu/FVA8hhcjdFvYbDs4f07LsxrjGjrYbTJsxn8FA65eQrhthn5RUXVNYhnmlEusHbrNcWrravLyBNalD2RoXdwcH6GjqTfuJ9ZtrK1YnvO2qTrnnTe/ewitc4TTURdVqlrrgkiifuMaOtjd9mDc4jgdi7/D5vhyJx6CIAiCuEDqN64AwExsSUsGvSOvIAL0E6+2JESR8n5Vj1POg6EfBOg3TQw54HdZ1osILGxu2+DwsNdUVilnUjnKe6HbmuN9F5cbWJLnnpE/Rqx8i96byRmFNQNJ1pQ8c3SqrmDjusV5KJEGWT+BpazMi0J/SroalkmFe+ooD0o+bQdn6v0CCleqgRX1p+i6tA9Gj7gtbHY9gNvYkd5N9Z28NlGJys62bVGfUFDaOP+dvH4SoK/UTW2D/Lyg5JevnzRnor8rOsm2R96WTfFYK8oXajsU9SP1OakumTBl6GC37SBcUp55fX/XdYRO2w5CqU3T8qXfTc01sRx5c15mHkjPo5nxawVS3mp7pCnSs6hTIOlD6SclYzj7rirDfPnFRVRvaYwJ3Yn5d88HuG0msmX745JMa+fu1GldnTZ7d9QbyT0rvnX3cNpmvekd9f/pnanFrk+du9Fzd3rTZutwKi7vTC2WzsMRGaTzVknlP03yKcw3VeZ0eqd3ddpOBJLJlnvXuZ56N5WXJMedXlpPd53r0rWcb5ms2fKzqM/cnTqtWL9KvZVn7/SUvO/0Ctr2ztSS9Hund33absXXNZVX1kfuHk7brKiN0s/KbZn8f/dw2pbzU/NX+kMK9d6d3rQp97VM35OI5FbbPZavuE8oSGWk30keKHg33W5TpQ2Ky1fzi/poplzBnd7VaVPVZ1xunv5y81HLzOabGlOLjOFe+rk4j7vO9fQ7dw+n7STPBeWp0Pcr9Rt1PizoO5n3U9fKs4p+7jrXp01J1sycJlOi5/n6KB7D6rvpcVVB/tS8IZWrjHW1X6jXy7ICz1VDZ8RxiE5mNYHgAENYeDne7tKuwWAhuLJICN0BfKM/2xvQ2zA4F6uaYATfcDFI8uiis/T2GUNvEHvVOloGMOHRisb2YFgzj1tvm+DjKr5RgBs2pHwB6PvowcOJVE/utrA3sXCc7P1F7+0nFcOWySJ5UCKrBtaI/y9CySu8DR8iuiB0LekTGjqWCX9UvMrPZwOMeTgKACDA0cSE0Yivz8BrLi/TR7QuXreY8lRVbqO/baPhzPajMvnLfbCUqO84NmZV7KJnxLrIw8Rh0g+EPrh3G+HcPpGPxjRgom7FVOknKiXlq2MZOgaOOXs1B2bZkj730Yv7i6LbYOTBaFcf1HK+etuM6r7IGNbQsdPPnYd8ear1fWbtz/pNLgH63TA1FwykvrNlVhwDUfu9Lm3A6vsW4N2e9RtJVm3LBMvt//P1XK6P8jFc2GeqyJ9CGmPaNRiMg2crA0CcybhZw8b0CoyrQLej/VZ00iGTKHwm3HMTQ15QST8yzk2GzWYHPoQRDnkI1txQn66FjWa6Yf2uFHLoejkTVhEaWKptNLCGXE8PQ9UAAwA4htuzMndsXjAZpGXVbQ+GZ0rhjizalpl0vPDEA8xrSdkZfW4wsMp1jZEn3hEm5jV02mZy7TeaNZeXk8+ScNtWJr2Igj44HwamVrE53ygmbDDMWrd6n0jQbRybnhhn0tir0k+ylJQvteniCGMv0NFKFh8BjnwTLbUtqpLS3QJjWA7Ldz317vIo8mT67IJ9P7A6gLQIhBKS3bG5/Hg5avtpTTRyDWh0T02TqKznefooRe4zC8qfQslnRazMuMbotpf22gw3OegU/2UmNQDM8pTnZh1q7uRSCww96VDW6ZhXPn2GzCQcgk/kCdfEoaNhuK3uU5k4VHRT7VSriBacjsXkmXt6Ueui1/BwEoY48QBD2hTP6POMg6sdtwKxAQ94lP8Gi67DlCdSV3lqPmfjBSYWCWa56E06GYNT1gfLyS4Yz8YcjfSKq5iUPpbrE1rnCKdjLoxsEj2q0E8ylJSvTKBh1cUDkBkT+r6FySiIIlPtOd5bVSqO4cDCps1wHD8zxwM/D2qfXajvBxb2kF4Ehm4LO+N+Ur/jRaI3qgEMx5gwhkXMnaCinnNQ9VE+hpV5tDb5V0P9xjWw0oM2vA0/1pfehuF35g5qbcsEbCt3A13bMsHkPEIH7pz8FkfDlgkM+8t8vEJHy+Dpd4MDDKOw6OwxG8dWiL1kg1+s3vdKDl3Mpzz0p7c1+AcH8BuzUExGn3GYJzKGG00mha0C9MtW9VoTDe5h6EF47to1GPAw9LTEE6mrPJHPYNZHQgdDX3moMhvojFw0bDMxsGV9sBzhwftdaeEUOhiWemMehklBos5CH+fvE/NDxHI4P5rAEz2WlK+3YXAbN5JbAW7M8Zq4fSAdFLLSY0K7BmMyQn8USmHo81B9DIc8THlBwWjW5zSmRSF6iL7at1Fey2Lm9f1yAvS7kLYPBGdjLnl/IU68itJF7feKfKDqwE5FtKpRXc8qVcZwYZ+pTf4sdR1oqt+46vtgthQi2PZg3IpX/DoGtyxM5BCCerIXEJ/HcrRUOCrZu9W6uCnnse1BLFWi/YvMyb2IaN8rc1q4AK1zhMOGHMIu+jxbtlzd5ul3bYbjnJWc1jnCoeFhLzoFp9seehM5FKmejssjOnEcvbMHt3i/QG+j4XtoyINZ1WfTBLdm0QSt04eRhEdHaJWu6sXCgjdiz0MMPA5pNVlXeWof6QO9RVbtGUTfhG2KvqbmL/dBFX0fPcxOC2udo2jhFL23zdEbS3uwGUwYiMOSHUwsL9HHMn0idXKzCxyOutAK+4nUf5sMm6M2Do1ZXsXlq2O5pK0imMVwFOWzY2uRXDEatswQ/kRZhKbIjrUyqo5hrWOn6ngEqR5S2242LcCypLDmYvLM6/tlBFYHfnTyN5Zz1w2h22JRKNIs8IY0BkrnPB2Dsfwuw7DpFc8dJVTVcwZ1jOWM4eI+U5/8+n407tWTzOfkoel0OlUTifuVAP3mCK3SiZ4gLofQbeEV2EtNkMT9R2AtbzDXgfo9V2JtCd0BJnNPIxLEZRDghq2hd49OpAShQsb1QSD6oPaOZ6aOrhPEOiC+qKADyB9fIoh7HAoLEwRBEETNkOdKEARBEDVDxpUgCIIgaoaMK0EQBEHUDBlXgiAIgqgZMq4EQRAEUTNkXAmCIAiiZsi4EgRBEETNkHElCIIgiJoh40oQBEEQNbOSb2j609/+hRd/MsG77/9HvVWJTz/5CH793Qae+/ij6i2CIAiCWHtWYlw3XuN47/3/qskL8cyTj+Ds1atqMkEQBEGsPSsJC5/XsALAe0t6vQRBEARx2azEuBLnJHSwW/MP964lgVX8A+TJr6WU/Eh5ZQL0q/6A80IE6Es/Xh5Y82Wt8oxM8sPnbQf/57YWepcgiMvjvjGuYhJaV4MUwm2vYnJfAaGDXclgXBqhg6Fv4nDMcWqf94fIdAzGHIPzZjMH3Z4va+qZuYuoADdsoHeL43TUxbPq7VUQWGs8jgji3mFtjOtDAL703ONqckXEDy0bhocjmhXORXBgo+EcYS1+9pUxbKhpDxwa2EW2hW7j2AoxvPTVFUHc26yNcb1x/Wl8/8tX1ORqBCP4RhuDtgl/lGNdA0uE1posvSovSE9CcWpIMvrRcfX5JHzZZNjNTEoB+k0TQw74XRHei5+Q3yv2FoTXW/TerLwoRBlIMqZCiCI0Kt4r8Ewjb7EVO1ZuK12f0MHuXDmK09MyFNU3apdtG5zb2JHCual2SdUhqrsr2jO/DdLh213XmcliBWnZJL2FUShWrlNRBELkOys7JW+kt+SZuI7wsJcnc+hgt9mBX3Q/eSZH10q4PXRbqf4jt2teW2lbJmAfFLcPQRBzWQvj+sb1p3H1ymP4xs/eUW9VIhh5MNo6oLdh+IO04QgsbHYhwotjjmOLzU3f8UwcR+mH6ESTToD+tgfjlkg/HdvQo4lqD26UxnEz4/LpGIw99BhgOCK8p8XvTayknFMH2JMmwJjAMjFsuOn3kvI8GJ4pTfYcQxt4fcxxOnZh+J3oXgi33QGcWPZ8zzQ88cCNNsoDm4KiehfLp8rQxlHXU7MV6DZOb1lgTOhnoEftYmtJe53eMuFvywaaYzhuF7RBFm5ztCQ9bTZHqeuUAfU7OGrH5VqYdAsWJxKh20r3I1N5IK4jROg7I7PWxc2xC6PoPgL0t200En1KutbbMPxRopuzMcDAcQYACHHiAcaWVtiG0K7BYCH4nDoSBFHMpRvX4fancPXKY9h+8218+J8lPhWU8rZ0tAwO/2Q2KwQjD4YjDCEAaJ0u9ML0EK7twbCEIQMAvW2Cj88AbIAxDi5mqASNacBknDGK5UR7aYNZOdD30YMHSXTw2AAn+3jRe/uJ1NgyGSbJLMikPHW0DET3NLBG/H85rFktEJtf7xL5ggMMYeHlxHLrGDiqxSkiahepvaB10UttAzCp3Pkwaz/KS+hJvU7pynBn+7VaFz2lj2URBkxuX70jtXUNhO4AviwXNHSsOHKzAcZi3QQ4mpgwGvH1GThMbGlFbSjyYo1sXycIojoXYlzf+uaz+NxTj6nJ+NHXPonPP/0R7CxrWHO8Lb1tgnu3owkjBJ8wsIy9KEoX+N1ZqGyz60UTkIbOyAWie4lno9s4Nj3sSKG/aqh7aeqE5mGoGmBAeGjbM/l2bB4Z/ywbzcgbB6DbwrPJD5sKzsZcTSqmsN4l8jWa5zAw2fbaaMoLi4tD1ms+Z+Bcbd/6ySyENhhY1Fdni5oRJuY1dNpmcu3H7VDYhgRBnJcLMa5v/Oav8L/zPNiV2Tcu/fArV/DF5z6K7TffxgdLGlbhIXDA76SNIbdxQwqV5q/Ai9KZOJ0Zhx/Hs1BufOr0dOwCUmhQ6xzhdMzFRFX5oxJq2E01+CYOHQ3DVOgzSpdlG88/oSrQ0Bkp4UOF+UYjTX69S+RTvKRwIcOYba+zMUdj1RYsh2rlqu1bP5lF1RkHjwyntmUC3m0EXISAscGi61BsoUTktyFBEOflQozrr8J/4NtvvYtf/G8Dn/nEo/jei5/AVz/7xPKh4Jgo1JjsW0Z/xxaLwmNiBe935cNKDoLSdGDYn7eKP2+IWISvU+UEBxhG4brZY+Lk5l5y+EdHy/Cwd65JsDxELE/YGtNSUQC3byPPt53Vu0Q+vQ0jtegJcMPOyy2PbHuph69WiryPH1jYm1tutn0Dd16fWgxtywRL7Q1HofPYcGpNNLiHoQfhQWvXYMDD0NNyZU/3XXWhRxDEolyIcUVkYL/183dwZ6+B9gtP4us//eP5DGu0b8rMa5lQo5h4xISodY4iAxWFKT1gI1qxF6UfNsQp1dgbFhOYfNLVhG96GOjKidAucJh4uSmJxH6YdFpYt3m6HJvhOOddrXOEQ8PDXnTaVbc99CaSp1508jdFdOI4emcPbs4BmUhv8uJA30cPsYwWYFmIfduiehfLp2Nwy8IkCbmP0Kq855ptr81tjl50qGzlGCbQj+saondrfrlq++6Nc0Li0b5x4WngMrQubqb0aYJb8md5hYHnjXjLRCwcOWYfbypqQ4S34V9AWJsg7mdW8t3CD736ezUp4QvPPo7f/eVD/PPf84udvvaCmkSsmMBiOGqv/gsX7hVCt4Wdcb9i6P3+IHRbeAV27gKMIIhqXJjnGvPbdz6oZFiJy0Hfr/ZRE+I+JfrIU48MK0Gciws3rsSao3Vxs+BzsMQDgG4nn+EmCGJ5VhIWfubHf8Cf/36+X7V5+mMP470fLHZ6lSAIgiDWgZV4rr986Xk89cTDanJlnnriYZy81FCTCYIgCOKeYCWeK0EQBEE8yKzEcyUIgiCIBxkyrgRBEARRM2RcCYIgCKJmyLgSBEEQRM2QcSUIgiCImiHjShAEQRA1Q8aVIAiCIGqGjCtBEARB1AwZV4IgCIKomZV8Q9Of/vYvvPiTCd59f7nvF/70k4/g199t4LmPP6reIgiCIIi1ZyXGdeM1jvfe/6+avBDPPPkIzl69qiYTBEEQxNqzkrDweQ0rALy3pNdLEARBEJfNSozr/UxgMeze978kHsJtl/xgeuhgt8mw2Sx5piKh28Jm28E5s8kQui1sWsHs/3llhA52a6jPooRuq6A/BegvI0/oYLdpQdS8AvPqHViJHvMILIbNJsOmFTwgY4MgqnGPG1fFCASWGOjy37xJNbDmP7MWhHDb6zF5BQc2YHk4reFH1bXOEU5HXZwzm1IqlZH6kXih636xTbl/SNV7QUIHQ9/E4Zjj1L6Yn1cPLGHICWLdWRvj+hCALz33uJq8OIaL0zFP/o5NDztlK/N7heAAw4aLm0vNgvXTYOshB3HJMIYNNW2F6LaH3mRw749n4r5nbYzrjetP4/tfvqImnxutc4RjCxgeZFe7odvCZtcDuI2d5sxTCd2W5P2WGObIU859T1pdxyHKJISm5DlLL/JMQ7i2B6MdeQehg92Ut6148EnYlmFTDhEWpSuy77pn0h0Z4dHt+YDflaICqXzTdRChQgf9gihCJnxrOXDbctRBlJmJQsThTzlaUeDRyGUIAiFP9NcPpPwQoN80MeRKHRXkNpOfmdfWKV21HRRpOuEs/fxM3zntJ9exQC+Z9sjkJeumJLwcWNjctsGVsSNTNI4CS35ejcjIfVmWJU7TsGXmj2eCWCfWwri+cf1pXL3yGL7xs3fUW7WgbZlg/igzUWidI5w6JsAsHI85BrqYNHZsTYS6xhynt0z42zmTTOhgtxuid0t6zzNxHL13iE7aUPodHLUjb9oChn0xUYZuC3uYedu5nml4Gz430aoUeQvQ3/Zg3Iq9dxviNSXdAfbiyVqR/XUMMORqvgCgoTPiODQAw+FRqDVAf9tGw4nL82B4Zmqy5TZHaxw/PwffAwYinx5s7DSt1PUrKUvlYW/UTsrtTRSd5xKg3+wAsby3LLDUfR2DsYcek+uoEuAoabMcuQraOtMGA2Bo5yo6gmNoA6+POU7HLgxu40YAQLsGg3k4kgzUiQf09uMOUq6X4vYI4bYl3YzbOOp6qScSdFvoTh47MiXjSG+b8Eex8GfgYMA4WmaEt+HDxJamyjILXWtbJthknLvoIYh14dKN63D7U7h65TFsv/k2PvxP7Z8KEmhNNNS0XCIP0YkNktiT6hnyRAYAtyODIu3R2R4MazZZ6W0TPJ4wIMLV8QSkbZlgnOMMgMY0oMpEUTn8tgHGOLjiEoXuAL7Rn+2t6W0YnOMsR3atY6OXtjiFiHxndQM0dCx58gSYtT/T5zwSGTVsmSxzndIpTBwme32iXO7dLtdlMErLq3XRqSxcjI6BVO6WqSiroK0zbaB18bpVpmiG3iBuFx0tA5jwMClT/C8bpPi9cr0UtkdwgCEsvJzc1DFwzPQzlZgzjjbYbLEbjDAxTTTi6zMOmNegQQNrxPVV0JpoRDoliHXlQozrW998Fp976jE1GT/62ifx+ac/gp1VGlYACMeYVDZODEx5cKMpTWQAuG0rBkXgd6VQYdcrNpqysdftaF+4OASJM44y/yaNhs7IBSJZUuE6vyOF6TrwEUJUK1vnRWBNVWHscjyLDaZ4oVlCHmblXQI55LlT5n0qC7vzlL3RnNVO2zKByGCGJ15kkAqooJeERrM4n4XI9qlkHGnXYDDR94JRCGOri5YRX3vJfr5uiyjIZuF2CUGsLxdiXN/4zV/hf+d5sCuzb1z64Veu4IvPfRTbb76ND1ZpWBGdbi2bfFJkvb6zMU8d4GGWmwm1AQy9JBQb/WXCbvlonSMRQjQ97OTtGy4yOQJRaFOEEtGd7XUxy0vLl4Ta1DqfgZfYC5W0NxktBmqbpBegYrkZeRckdFvYGfcTPR6Xep9p1LLPxgsoWkbrotfwcBKKkLAxc1uzVNQLgMyCMMzzHCuh9il5HIl9U/8kAI887o1mdD2Rtz/ENkTeVgNBrDsXYlx/Ff4D337rXfzifxv4zCcexfde/AS++tknVhsKjggshr2Jhdfz9jIziHCb300fAhr66n7nBjojFw3bjAxsdMgi2VtbjtIQsRwG05pocA8n0YOhaxXskc5CxNqWCdhWzuGsqM62fChnAF95qgixn91JH1CRD1+tFA/DpEIB+t355WbkDR24C07aZ2MueaAhTrxc5WcQZUsnXUMHw6qKzkFva/APDuA3pFAzsJRegHirINrXBQAEuFHmlRcyfxxpTAP3BvAhjL7wxAfwG+2ckLUSIl4oEkUQl8OFGFdEBvZbP38Hd/YaaL/wJL7+0z+uxrCmQp8Mw6ZX7kHq+9HBGRFCFaeLQ+zFeWxz9JJDQakXMbhlAbaJTSuA1jnCYUPkE5ddZaWdOlHZBQ7zZJXCaAIdL1vAcFu89wr60h6pfMLShG96InytdXHT0ZJ3NpuzU6Sq7On85qB1cfOWhUkSEjfBrZwDLivBhIH4VGwHEyuqaxmqvNsesrN0tG9ccFpYt8XCSpRrgTcqKkttgz7QW8DrzaC30fA9NDKGcwm9AEmfnrXlCK2l9lwrjKNozz+RXbsGAxyQFi3JKfEmwx5mH0MLT7zqnjhBXBIr+W7hh179vZqU8IVnH8fv/vIh/vnv+cVOX3tBTXpwCSxsjtoX9mH9tSd0sKtO2A8cAfrNEVoPlA5CuG0LGCz5xRcEcUFcmOca89t3PqhkWAkFfT9nn5d4kAndASZFJ3/vUwLLxDATBieI9ePCjSuxLOJwR+7nYIkHi+iLKHY8s+JZgvsH3b64r1okiPOwkrDwMz/+A/789/P9qs3TH3sY7/3gHPtRBEEQBHFJrMRz/eVLz+OpJx5Wkyvz1BMP4+Slal/7QBAEQRDrxko8V4IgCIJ4kFmJ50oQBEEQDzJkXAmCIAiiZsi4EgRBEETNkHElCIIgiJoh40oQBEEQNUPGlSAIgiBqhowrQRAEQdQMGVeCIAiCqJn/B19w05snXA8ZAAAAAElFTkSuQmCC"},55220:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/new-registration-7577c755e57935c8c949cde86a1b18e5.png"},34843:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/open-entra-af10f1d9402901e11da5e16582a38856.jpg"},72725:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/register-app-91ce3cd6ea880f68ff6bd9a47f58364d.png"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>d});var i=t(96540);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);