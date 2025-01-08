"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[3832],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),h=r,f=p["".concat(s,".").concat(h)]||p[h]||u[h]||o;return n?i.createElement(f,a(a({ref:t},c),{},{components:n})):i.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,a[1]=l;for(var d=2;d<o;d++)a[d]=n[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},65471:(e,t,n)=>{n.d(t,{Z:()=>m});var i=n(87462),r=n(67294),o=n(86010),a=n(72389),l=n(86043);const s={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function d(e){return!!e&&("SUMMARY"===e.tagName||d(e.parentElement))}function c(e,t){return!!e&&(e===t||c(e.parentElement,t))}function p(e){let{summary:t,children:n,...p}=e;const u=(0,a.Z)(),h=(0,r.useRef)(null),{collapsed:f,setCollapsed:m}=(0,l.u)({initialState:!p.open}),[w,g]=(0,r.useState)(p.open),v=r.isValidElement(t)?t:r.createElement("summary",null,t??"Details");return r.createElement("details",(0,i.Z)({},p,{ref:h,open:w,"data-collapsed":f,className:(0,o.Z)(s.details,u&&s.isBrowser,p.className),onMouseDown:e=>{d(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;d(t)&&c(t,h.current)&&(e.preventDefault(),f?(m(!1),g(!0)):m(!0))}}),v,r.createElement(l.z,{lazy:!1,collapsed:f,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{m(e),g(!e)}},r.createElement("div",{className:s.collapsibleContent},n)))}const u={details:"details_b_Ee"},h="alert alert--info";function f(e){let{...t}=e;return r.createElement(p,(0,i.Z)({},t,{className:(0,o.Z)(h,u.details,t.className)}))}function m(e){const t=r.Children.toArray(e.children),n=t.find((e=>r.isValidElement(e)&&"summary"===e.props?.mdxType)),o=r.createElement(r.Fragment,null,t.filter((e=>e!==n)));return r.createElement(f,(0,i.Z)({},e,{summary:n}),o)}},33229:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=n(87462),r=(n(67294),n(3905)),o=(n(65471),n(1169));n(54957),n(91197);const a={},l="By URL",s={unversionedId:"reference/tunnelers/windows/add-ids/ext-providers/ext-jwt-url",id:"reference/tunnelers/windows/add-ids/ext-providers/ext-jwt-url",title:"By URL",description:"Adding an identity by URL is very straight-forward. Deliver the root URL of the OpenZiti controller to the user, and",source:"@site/docs/reference/tunnelers/02-windows/add-ids/ext-providers/40-ext-jwt-url.mdx",sourceDirName:"reference/tunnelers/02-windows/add-ids/ext-providers",slug:"/reference/tunnelers/windows/add-ids/ext-providers/ext-jwt-url",permalink:"/docs/reference/tunnelers/windows/add-ids/ext-providers/ext-jwt-url",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/reference/tunnelers/02-windows/add-ids/ext-providers/40-ext-jwt-url.mdx",tags:[],version:"current",sidebarPosition:40,frontMatter:{},sidebar:"docsSidebar",previous:{title:"By JWT",permalink:"/docs/reference/tunnelers/windows/add-ids/ext-providers/ext-jwt"},next:{title:"Authenticating",permalink:"/docs/reference/tunnelers/windows/add-ids/ext-providers/authenticating"}},d={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Adding the Identity",id:"adding-the-identity",level:2},{value:"Authenticating",id:"authenticating",level:2}],p={toc:c},u="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"by-url"},"By URL"),(0,r.kt)(o.ZP,{mdxType:"AboutExtAuth"}),(0,r.kt)("p",null,"Adding an identity by URL is very straight-forward. Deliver the root URL of the OpenZiti controller to the user, and\nsend them the following instructions."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"OpenZiti Controller 1.2+"),(0,r.kt)("li",{parentName:"ul"},"ZDEW 2.5.2+"),(0,r.kt)("li",{parentName:"ul"},"an ",(0,r.kt)("inlineCode",{parentName:"li"},"external-jwt-provider")," is properly configured"),(0,r.kt)("li",{parentName:"ul"},"an identity exists with an ",(0,r.kt)("inlineCode",{parentName:"li"},"external-id")," field set to a value provided from the external provider"),(0,r.kt)("li",{parentName:"ul"},"the OpenZiti Controller is configured to serve a pre-configured trusted certificate. The certificate must be verifiable\nby the OS without additional information such as using a widely trusted CA or the Windows administrator has\nadded the certificate chain to the OS trust store")),(0,r.kt)("h2",{id:"adding-the-identity"},"Adding the Identity"),(0,r.kt)("p",null,'To add an identity to Windows by URL, first start by clicking on the "ADD IDENTITY" button in the top right of the screen.\nAfter the context menu pops up, select the "With URL" option. '),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"With URL",src:n(39044).Z,width:"475",height:"498"})),(0,r.kt)("p",null,"A dialog will appear. Enter a valid https url to a controller and click"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"With URL",src:n(53129).Z,width:"411",height:"486"})),(0,r.kt)("h2",{id:"authenticating"},"Authenticating"),(0,r.kt)("p",null,"Once an identity is added for a network leveraging an external provider. ",(0,r.kt)("a",{parentName:"p",href:"./authenticating"},"See Authenticating"),"\nfor more details about how to authenticate to the network."))}h.isMDXComponent=!0},1169:(e,t,n)=>{n.d(t,{ZP:()=>l});var i=n(87462),r=(n(67294),n(3905));const o={toc:[]},a="wrapper";function l(e){let{components:t,...n}=e;return(0,r.kt)(a,(0,i.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"New with ZDEW 2.5.2+ and an OpenZiti Controller version 1.2+ is adding an identity to a Windows installation using\nexternally provided authentication. This process involves mapping an identity provided by an identity provider to\nan OpenZiti Identity using the ",(0,r.kt)("inlineCode",{parentName:"p"},"external-id")," field as well as configuring an ",(0,r.kt)("inlineCode",{parentName:"p"},"ext-jwt-signer"),"."))}l.isMDXComponent=!0},91197:(e,t,n)=>{n.d(t,{ZP:()=>l});var i=n(87462),r=(n(67294),n(3905));const o={toc:[{value:"Saving a Preferred Provider",id:"saving-a-preferred-provider",level:3},{value:"Resetting a Preferred Provider",id:"resetting-a-preferred-provider",level:3},{value:"Non-Default Provider",id:"non-default-provider",level:3}]},a="wrapper";function l(e){let{components:t,...l}=e;return(0,r.kt)(a,(0,i.Z)({},o,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'If your network is configured with more than one external provider, a popup will be shown when clicking on\nthe "authorize IdP" icon. The popup will contain a list of the providers to select from. Choosing a provider from the\nlist will begin the authorization flow for the selected provider.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"more than one provider",src:n(94880).Z,width:"419",height:"593"})),(0,r.kt)("h3",{id:"saving-a-preferred-provider"},"Saving a Preferred Provider"),(0,r.kt)("p",null,"When using external providers, it's likely users will want to assign a preferred provider as a default. Before\nauthenticating, click on the detail entry for the given identity a default should be assigned to. A new screen will\nappear looking like the image shown below."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"more than one provider",src:n(2988).Z,width:"426",height:"505"})),(0,r.kt)("p",null,'To assign a default provider, click the desired provider and click the "Default provider?" checkbox. The UI will remember\nthe setting when it is clicked. There is no need to \'save\' this setting. When a default provider is selected on a network\nwith multiple providers, no popup will be shown when clicking the "authorize IdP" icon.'),(0,r.kt)("h3",{id:"resetting-a-preferred-provider"},"Resetting a Preferred Provider"),(0,r.kt)("p",null,'To reset the default provider simply uncheck the "Default provider" checkbox. When first opening the identity details\npage, the default provider will be automatically selected. If another provider is highlighted, choose the default provider\nand uncheck the "Default provider" box. There is no need to \'save\' this setting, the values is stored immediately.'),(0,r.kt)("h3",{id:"non-default-provider"},"Non-Default Provider"),(0,r.kt)("p",null,'If a default provider has been selected, users may still elect to authenticate with a different provider. To use a\ndifferent provider than the default, open the identity details page and select the provider to authenticate with. Once\nselected, click "Authenticate With Provider" and the selected provider will be used to authenticate.'))}l.isMDXComponent=!0},54957:(e,t,n)=>{n.d(t,{ZP:()=>l});var i=n(87462),r=(n(67294),n(3905));const o={toc:[]},a="wrapper";function l(e){let{components:t,...l}=e;return(0,r.kt)(a,(0,i.Z)({},o,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Once the JWT is accepted, a new identity will be added to the ZDEW. Initially, the identity will not be authorized and a\nnew icon will show up indicating the user needs to authorize via the external provider. If a single external provider is\nconfigured for this OpenZiti overlay network, clicking the icon will being the Auth Flow with PKCE process. During this\ntime, the ZDEW will be listening on port 20314."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Authenticating 1",src:n(98061).Z,width:"423",height:"490"})),(0,r.kt)("p",null,"After successfully completing the authentication with the external provider, the browser will redirect to the listening\nport and complete the authentication flow. The user will be shown a screen that looks similar to this. The first time\nthis screen is shown in a browser session, it will not automatically close. Subsequent authentication events should\nresult in the tab automatically closing."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"pkce-success",src:n(37038).Z,width:"637",height:"343"})),(0,r.kt)("p",null,"Assuming everything succeeds, the user will see the normal information shown by an authenticated identity."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"after-pkce-success.png",src:n(76882).Z,width:"404",height:"89"})))}l.isMDXComponent=!0},76882:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/windows-after-pkce-success-69dbb2c3127384034bf0259ccf80946c.png"},98061:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/windows-auth-1-cb265766adc9ecf123738b4a3ef84549.png"},94880:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/windows-more-than-one-provider-cea13ad903e5e9dfa15883d845a33734.png"},2988:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/windows-provider-prefs-126b09d6c2dd7118a350f912cc574755.png"},53129:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/windows-with-url-dialog-85434dabc1a2e53eafbc9254c61a4c41.png"},39044:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/windows-with-url-9628f952919f7ca5fb0c71951b70a522.png"},37038:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/zac-pkce-success-0c084b6d40923a40f820db884adf5492.png"}}]);