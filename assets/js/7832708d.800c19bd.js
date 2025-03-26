"use strict";(self.webpackChunkdocusaurus_3=self.webpackChunkdocusaurus_3||[]).push([[8632],{43286:(e,t,n)=>{n.d(t,{Ay:()=>a,RM:()=>o});var i=n(74848),s=n(28453);const o=[{value:"For Tunnelers",id:"for-tunnelers",level:4},{value:"For BrowZer",id:"for-browzer",level:4},{value:"For Ziti Admin Console (ZAC)",id:"for-ziti-admin-console-zac",level:4}];function r(e){const t={a:"a",code:"code",h4:"h4",p:"p",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.a,{href:"https://oauth.net/2/pkce/",children:"Authorization Code Flow with PKCE or PKCE flow"})," requires configuring callback URLs the\r\nIdentity Provider (IdP) will allow redirecting to. If the URL for a specific client is not specifically listed, the IdP\r\nwill deny the authentication request. Depending on the technology used to authenticate to the OpenZiti Network,\r\ndifferent URLs need to be specified. More than one URL is allowed to be configured. Decide if you are configuring the\r\nIdP for use with tunnelers, with BrowZer or with both and add the appropriate callback urls."]}),"\n",(0,i.jsx)(t.p,{children:'In the Auth0 dashboard, with the application selected, choose the "Settings" tab and scroll down to the "Application\r\nURIs" section and add the URLs.'}),"\n",(0,i.jsx)(t.h4,{id:"for-tunnelers",children:"For Tunnelers"}),"\n",(0,i.jsxs)(t.p,{children:["Tunnelers require an allowed callback URL of: ",(0,i.jsx)(t.code,{children:"http://localhost:20314/auth/callback"}),"."]}),"\n",(0,i.jsx)(t.h4,{id:"for-browzer",children:"For BrowZer"}),"\n",(0,i.jsxs)(t.p,{children:["The URL to configure for BrowZer will vary depending on the BrowZer configuration. BrowZer requires a wildcard\r\ncertificate in order to be deployed and all services are delivered from this wildcard domain. You will need to add\r\nthe configured ",(0,i.jsx)(t.a,{href:"/docs/learn/quickstarts/browzer/example/#get-a-wildcard-certificate",children:"wildcard domain"})," as the\r\ncallback url."]}),"\n",(0,i.jsx)(t.h4,{id:"for-ziti-admin-console-zac",children:"For Ziti Admin Console (ZAC)"}),"\n",(0,i.jsxs)(t.p,{children:["The URL to configure an IdP for so that ZAC will be able to authenticate will depend on how you deploy your ZAC. The\r\ncurrent method recommended to deploy ZAC will deploy it on the same URL as the controller. For example:\r\n",(0,i.jsx)(t.a,{href:"https://controller.example.com/zac/callback",children:"https://controller.example.com/zac/callback"})]})]})}function a(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},39359:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"guides/external-auth/identity-providers/zitadel","title":"ZITADEL","description":"The following fields are necessary in order to configure an external JWT signer with OpenZiti. This configuration will","source":"@site/docs/guides/external-auth/identity-providers/zitadel.mdx","sourceDirName":"guides/external-auth/identity-providers","slug":"/guides/external-auth/identity-providers/zitadel","permalink":"/docs/guides/external-auth/identity-providers/zitadel","draft":false,"unlisted":false,"editUrl":"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/guides/external-auth/identity-providers/zitadel.mdx","tags":[],"version":"current","lastUpdatedAt":1743027175000,"frontMatter":{"title":"ZITADEL","sidebar_label":"ZITADEL","hide_table_of_contents":true},"sidebar":"docsSidebar","previous":{"title":"Okta","permalink":"/docs/guides/external-auth/identity-providers/okta"},"next":{"title":"Unlisted","permalink":"/docs/guides/external-auth/identity-providers/unlisted"}}');var s=n(74848),o=n(28453),r=n(43286),a=n(27763);const l={title:"ZITADEL",sidebar_label:"ZITADEL",hide_table_of_contents:!0},d="ZITADEL",c={},h=[{value:"Create an Application",id:"create-an-application",level:3},{value:"Create a Project",id:"create-a-project",level:3},{value:"Create a Project",id:"create-a-project-1",level:3},{value:"Choose Authentication Method",id:"choose-authentication-method",level:3},{value:"Add Allowed Redirects",id:"add-allowed-redirects",level:3},{value:"Callback URLs",id:"callback-urls",level:3},...r.RM,{value:"Finish Creating the Project",id:"finish-creating-the-project",level:3},{value:"Use JWT Token Type",id:"use-jwt-token-type",level:3},{value:"Create an Action Adding Email to Tokens (Optional)",id:"create-an-action-adding-email-to-tokens-optional",level:3},{value:"Add Action",id:"add-action",level:3},{value:"Add Action Trigger",id:"add-action-trigger",level:3}];function p(e){const t={a:"a",admonition:"admonition",code:"code",div:"div",h1:"h1",h3:"h3",header:"header",hr:"hr",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"zitadel",children:"ZITADEL"})}),"\n",(0,s.jsx)("img",{src:"/icons/logo-zitadel.png",alt:"ZITADEL logo",height:"100px"}),"\n",(0,s.jsxs)(t.p,{children:["The following fields are necessary in order to configure an external JWT signer with OpenZiti. This configuration will\nenable authentication via JWTs obtained through an\n",(0,s.jsx)(t.a,{href:"https://oauth.net/2/pkce/",children:"Authorization Code Flow with PKCE or PKCE flow"}),". ZITADEL allows you to\n",(0,s.jsx)(t.a,{href:"https://github.com/zitadel/zitadel",children:"self-host your own ZITADEL instance"})," or use a version from\n",(0,s.jsx)(t.a,{href:"https://zitadel.com/signin",children:"their SAAS provider (sign up here)"}),". Regardless of how you get an instance of ZITADEL,\nthe UIs should be identical."]}),"\n",(0,s.jsxs)(t.p,{children:["ZITADEL also provides an OpenID discovery endpoint at the base of your ZITIADEL server URL +\n",(0,s.jsx)(t.code,{children:".well-known/openid-configuration"}),". For example, if you self-hosted a ZITADEL instance at\n",(0,s.jsx)(t.a,{href:"https://zitadel.example.com",children:"https://zitadel.example.com"}),", the discovery document will be located at\n",(0,s.jsx)(t.a,{href:"https://zitadel.example.com/.well-known/openid-configuration",children:"https://zitadel.example.com/.well-known/openid-configuration"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["At this time, ZITADEL does not allow for customizing the audience (",(0,s.jsx)(t.code,{children:"aud"}),") claim within the JWTs. It is recommended\nyou create a new ZITADEL Project for this reason as you will need to add this generated Client Id from ZITADEL as\nthe ",(0,s.jsx)(t.strong,{children:"Audience"})," mapped to the external JWT signer."]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Where to Find the Value in the ZITADEL UI"}),(0,s.jsx)(t.th,{children:"Example"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Issuer"})}),(0,s.jsx)(t.td,{children:"Use the OpenID discovery document, expected to be the URL of the ZITADEL instance"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://zitadel.example.com",children:"https://zitadel.example.com"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Client ID"})}),(0,s.jsxs)(t.td,{children:["The ZITADEL Application page, within the ZITADEL project has a ",(0,s.jsx)(t.strong,{children:"Client Id"})," field"]}),(0,s.jsx)(t.td,{children:"311640049412276226"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Audience"})}),(0,s.jsxs)(t.td,{children:["Same as the ",(0,s.jsx)(t.strong,{children:"Client ID"})]}),(0,s.jsx)(t.td,{children:"311640049412276226"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"External Auth URL"})}),(0,s.jsxs)(t.td,{children:["Same as the ",(0,s.jsx)(t.strong,{children:"Issuer"})]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://zitadel.example.com",children:"https://zitadel.example.com"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"JWKS Endpoint"})}),(0,s.jsx)(t.td,{children:"Use the OpenID discovery document, see above for the location"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://zitadel.example.com/oauth/v2/keys",children:"https://zitadel.example.com/oauth/v2/keys"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Claims Property"})}),(0,s.jsxs)(t.td,{children:["Often ",(0,s.jsx)(t.code,{children:"email"}),", but can also be ",(0,s.jsx)(t.code,{children:"sub"})," or any other claim contained in the JWT"]}),(0,s.jsx)(t.td,{children:"email"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Scopes"})}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"openid"})," is always included."]}),(0,s.jsx)(t.td,{children:"profile offline_access"})]})]})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"create-an-application",children:"Create an Application"}),"\n",(0,s.jsxs)(t.p,{children:["From the ZITADEL web portal, if necessary, create an application by clicking the ",(0,s.jsx)(t.strong,{children:"Create Application"})," button."]}),"\n",(0,s.jsx)(t.admonition,{title:"Create Application",type:"info",children:(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Create Application",src:n(3081).A+"",width:"1021",height:"375"})})}),"\n",(0,s.jsx)(t.h3,{id:"create-a-project",children:"Create a Project"}),"\n",(0,s.jsxs)(t.p,{children:["On the popup, enter a ",(0,s.jsx)(t.strong,{children:"Project Name"})," and select a framework by choosing ",(0,s.jsx)(t.strong,{children:"Other"})," and click the button to ",(0,s.jsx)(t.strong,{children:"Create\nProject ${YourProjectName}"})]}),"\n",(0,s.jsx)(t.admonition,{title:"Create a Project",type:"info",children:(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Create a Project",src:n(41507).A+"",width:"587",height:"600"})})}),"\n",(0,s.jsx)(t.h3,{id:"create-a-project-1",children:"Create a Project"}),"\n",(0,s.jsxs)(t.p,{children:["Following the wizard, add a ",(0,s.jsx)(t.strong,{children:"Name"})," for the ZITADEL Application you're creating and choose the ",(0,s.jsx)(t.strong,{children:"Type of\nApplication"})," as ",(0,s.jsx)(t.strong,{children:"User Agent"}),". Other types will work but each of the types have small subtleties to be aware of. If\nyou are familiar with the various types and the implications, by all means use the type that works for you. The only\nOpenZiti requirement is that whatever type you choose will allow you to add the appropriate callback URLs to the\nZITADEL configuration and allows for the PKCE flow to be selected. Select the type and click ",(0,s.jsx)(t.strong,{children:"Continue"}),"."]}),"\n",(0,s.jsx)(t.admonition,{title:"Application Details - Name and Type",type:"info",children:(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Application Details - Name and Type",src:n(18151).A+"",width:"1177",height:"804"})})}),"\n",(0,s.jsx)(t.h3,{id:"choose-authentication-method",children:"Choose Authentication Method"}),"\n",(0,s.jsxs)(t.p,{children:["All OpenZiti flows will follow the PKCE flow. Ensure you select PKCE and click ",(0,s.jsx)(t.strong,{children:"Continue"}),"."]}),"\n",(0,s.jsx)(t.admonition,{title:"Application Details - Authentication Method",type:"info",children:(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Application Details - Authentication Method",src:n(685).A+"",width:"1222",height:"763"})})}),"\n",(0,s.jsx)(t.h3,{id:"add-allowed-redirects",children:"Add Allowed Redirects"}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["As mentioned before, the ZITADEL types enforce different rules. The ",(0,s.jsx)(t.strong,{children:"User Agent"})," flow will not allow for\nlocal redirects that use the insecure ",(0,s.jsx)(t.code,{children:"http"})," protocol unless the ",(0,s.jsx)(t.strong,{children:"Development Mode"})," toggle is toggled. Since\nOpenZiti is following a PKCE flow even if an attacker were to intercept the code it is insufficient to compromise\nthe flow. An attacker would need to be able to dump the memory of the running tunneler and obtain the code verifier\nto be able to compromise the PKCE flow. This is ",(0,s.jsx)(t.strong,{children:"required"})," if using ZITADEL with OpenZiti tunnelers."]})}),"\n",(0,s.jsx)(t.h3,{id:"callback-urls",children:"Callback URLs"}),"\n",(0,s.jsx)(r.Ay,{}),"\n",(0,s.jsxs)(t.p,{children:["Enter the ",(0,s.jsx)(t.strong,{children:"Redirect URIs"})," for the OpenZiti solutions you want to enable, toggle ",(0,s.jsx)(t.strong,{children:"Developer Mode"})," if you plan to\nuse OpenZiti tunneling solutions, and click ",(0,s.jsx)(t.strong,{children:"Continue"}),"."]}),"\n",(0,s.jsx)(t.admonition,{title:"Application Details - URI Redirects",type:"info",children:(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Application Details - URI Redirects",src:n(12370).A+"",width:"1180",height:"744"})})}),"\n",(0,s.jsx)(t.h3,{id:"finish-creating-the-project",children:"Finish Creating the Project"}),"\n",(0,s.jsxs)(t.p,{children:["The final wizard page is simply an overview of the configuration as you have entered it. Click ",(0,s.jsx)(t.strong,{children:"Create"})," to create\nthe project."]}),"\n",(0,s.jsx)(t.admonition,{title:"Application Details - Create",type:"info",children:(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Application Details - Create",src:n(99277).A+"",width:"1196",height:"590"})})}),"\n",(0,s.jsxs)(t.p,{children:["After clicking ",(0,s.jsx)(t.strong,{children:"Create"}),", you will see a confirmation dialog indicating the Client Id. Simply click ",(0,s.jsx)(t.strong,{children:"Close"}),"."]}),"\n",(0,s.jsx)(t.admonition,{title:"Application Details - Confirmation",type:"info",children:(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Application Details - Confirmation",src:n(58302).A+"",width:"681",height:"354"})})}),"\n",(0,s.jsx)(t.h3,{id:"use-jwt-token-type",children:"Use JWT Token Type"}),"\n",(0,s.jsxs)(t.p,{children:["On the ZITADEL Project overview page, find the ",(0,s.jsx)(t.strong,{children:"Token Settings"})," option toward the bottom of the screen and select it.\nOnce the form appears, change the ",(0,s.jsx)(t.strong,{children:"Auth Token Type"})," from ",(0,s.jsx)(t.strong,{children:"Bearer Token"})," to ",(0,s.jsx)(t.strong,{children:"JWT"})," and click the ",(0,s.jsx)(t.strong,{children:"Save"})," button."]}),"\n",(0,s.jsx)(t.admonition,{title:"Token Type - JWT",type:"info",children:(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Token Type - JWT",src:n(74197).A+"",width:"915",height:"763"})})}),"\n",(0,s.jsx)(t.h3,{id:"create-an-action-adding-email-to-tokens-optional",children:"Create an Action Adding Email to Tokens (Optional)"}),"\n",(0,s.jsxs)(t.p,{children:["It's quite common to want to use a user's email address as the external id for users in your OpenZiti Network.\nZITADEL does support adding email addresses to tokens however it will require a ZITADEL action to be created and\nassigned to the proper flow. If you use the ",(0,s.jsx)(t.code,{children:"sub"})," claim as the external id for identities, these steps are not\nnecessary. If you prefer to use the user's email address, expand this section and follow the steps therein."]}),"\n",(0,s.jsxs)(a.A,{children:[(0,s.jsx)("summary",{children:"Create an Action to Add Email to Tokens"}),(0,s.jsxs)(t.p,{children:["From the main ZITADEL overview page, find the ",(0,s.jsx)(t.strong,{children:"Actions"})," tab and select it. On the new page that pops up, click the\n",(0,s.jsx)(t.strong,{children:"New"})," button to being the process of adding a new ",(0,s.jsx)(t.strong,{children:"Action"}),"."]}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Create a New Action",src:n(64058).A+"",width:"1256",height:"561"})}),(0,s.jsx)(t.hr,{}),(0,s.jsx)(t.h3,{id:"add-action",children:"Add Action"}),(0,s.jsxs)(t.p,{children:["A new modal will pop up on the page. Here, enter the ",(0,s.jsx)(t.strong,{children:"Name"})," of the action (",(0,s.jsx)(t.code,{children:"addEmailToAccessToken"}),"). Take note,\nthe name must match the name of the function. In the multi-line text block, copy and paste the following code. This\ncode will add an ",(0,s.jsx)(t.strong,{children:"email"})," claim to all access tokens using the ZITADEL v1 api, then click ",(0,s.jsx)(t.strong,{children:"Add"})," to add the action."]}),(0,s.jsx)(t.div,{className:"code-section",children:(0,s.jsxs)(t.div,{className:"code-section-code",children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"addEmailToAccessToken action function"})}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"function addEmailToAccessToken(ctx, api) {\n  api.v1.claims.setClaim('email', ctx.v1.getUser().human.email);\n}\n"})})]})}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Create Action Details",src:n(21171).A+"",width:"1269",height:"739"})}),(0,s.jsx)(t.hr,{}),(0,s.jsx)(t.h3,{id:"add-action-trigger",children:"Add Action Trigger"}),(0,s.jsxs)(t.p,{children:["With the action in place, it now needs to be assigned to a flow in the ZITADEL admin interface. At the bottom of the\nscreen, find the ",(0,s.jsx)(t.strong,{children:"Flows"})," section. Select the ",(0,s.jsx)(t.strong,{children:"Compliment Token"})," flow from the dropdown and click ",(0,s.jsx)(t.strong,{children:"Add Trigger"}),"."]}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Add trigger to Flow",src:n(61893).A+"",width:"624",height:"275"})}),(0,s.jsxs)(t.p,{children:["A modal will pop up, for the ",(0,s.jsx)(t.strong,{children:"Trigger Type"})," choose ",(0,s.jsx)(t.strong,{children:"Pre access token creation"})," then choose the ",(0,s.jsx)(t.code,{children:"addEmailToAccessToken"}),"\naction for the ",(0,s.jsx)(t.strong,{children:"Action"})," and click ",(0,s.jsx)(t.strong,{children:"Save"}),"."]}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Finish Assigning Action to Flow",src:n(4653).A+"",width:"1285",height:"522"})}),(0,s.jsx)(t.p,{children:"With the action assigned, the ZITADEL server should be ready to deliver properly configured tokens to the OpenZiti\ncontroller for authentication."}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Action Assigned",src:n(4653).A+"",width:"1285",height:"522"})})]})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},27763:(e,t,n)=>{n.d(t,{A:()=>j});var i=n(96540),s=n(34164),o=n(25246),r=n(9136),a=n(33535);const l={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};var d=n(74848);function c(e){return!!e&&("SUMMARY"===e.tagName||c(e.parentElement))}function h(e,t){return!!e&&(e===t||h(e.parentElement,t))}function p(e){let{summary:t,children:n,...p}=e;(0,o.A)().collectAnchor(p.id);const u=(0,r.A)(),x=(0,i.useRef)(null),{collapsed:g,setCollapsed:j}=(0,a.u)({initialState:!p.open}),[m,f]=(0,i.useState)(p.open),A=i.isValidElement(t)?t:(0,d.jsx)("summary",{children:t??"Details"});return(0,d.jsxs)("details",{...p,ref:x,open:m,"data-collapsed":g,className:(0,s.A)(l.details,u&&l.isBrowser,p.className),onMouseDown:e=>{c(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;c(t)&&h(t,x.current)&&(e.preventDefault(),g?(j(!1),f(!0)):j(!0))},children:[A,(0,d.jsx)(a.N,{lazy:!1,collapsed:g,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{j(e),f(!e)},children:(0,d.jsx)("div",{className:l.collapsibleContent,children:n})})]})}const u={details:"details_b_Ee"},x="alert alert--info";function g(e){let{...t}=e;return(0,d.jsx)(p,{...t,className:(0,s.A)(x,u.details,t.className)})}function j(e){const t=i.Children.toArray(e.children),n=t.find((e=>i.isValidElement(e)&&"summary"===e.type)),s=(0,d.jsx)(d.Fragment,{children:t.filter((e=>e!==n))});return(0,d.jsx)(g,{...e,summary:n,children:s})}},4653:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/add-trigger-finish-550be4407fc08dc33c34c262639e69d0.png"},61893:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/add-trigger-4d14619ccc98dc0cc6ecc3d3ba4eb7ad.png"},3081:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/create-app-53d04a75cb2aa76b4665b25d6093be59.png"},41507:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/create-project-bcd3e06d9dc2e021dbf415ebab71533c.png"},74197:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/jwt-tokens-e852af6aee0f78d3d89febfe4c2cbf27.png"},21171:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/new-action-details-1c3f2adc3fef70ef3c5076a0645766a9.png"},64058:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/new-action-703da58dfb53b3647a0f7fe390e2c58a.png"},685:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/wizard-auth-method-2b2fd272ac30eb2b213cab23ef172fff.png"},58302:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/wizard-confirmation-658393c593e533d6a2b478b2a8e15599.png"},99277:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/wizard-create-17be6acfd8d5cfc05ff0efff8ec08e42.png"},18151:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/wizard-name-and-type-106545b8e6a7e92dde53f980ab48fa12.png"},12370:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/wizard-redirects-1ca5406112282ad2780aee21b901e28a.png"},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var i=n(96540);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);