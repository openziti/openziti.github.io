"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[4510,8025],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var i=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(a),u=r,h=m["".concat(l,".").concat(u)]||m[u]||p[u]||n;return a?i.createElement(h,o(o({ref:t},d),{},{components:a})):i.createElement(h,o({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,o=new Array(n);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<n;c++)o[c]=a[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var i=a(7294),r=a(6010);const n="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return i.createElement("div",{role:"tabpanel",className:(0,r.Z)(n,o),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>u});var i=a(7462),r=a(7294),n=a(6010),o=a(2389),s=a(7392),l=a(7094),c=a(2466);const d="tabList__CuJ",p="tabItem_LNqP";function m(e){var t;const{lazy:a,block:o,defaultValue:m,values:u,groupId:h,className:v}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=u??g.map((e=>{let{props:{value:t,label:a,attributes:i}}=e;return{value:t,label:a,attributes:i}})),k=(0,s.l)(f,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===m?m:m??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==y&&!f.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:w}=(0,l.U)(),[N,T]=(0,r.useState)(y),S=[],{blockElementScrollPositionUntilNextRender:Z}=(0,c.o5)();if(null!=h){const e=b[h];null!=e&&e!==N&&f.some((t=>t.value===e))&&T(e)}const C=e=>{const t=e.currentTarget,a=S.indexOf(t),i=f[a].value;i!==N&&(Z(t),T(i),null!=h&&w(h,String(i)))},x=e=>{var t;let a=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const t=S.indexOf(e.currentTarget)+1;a=S[t]??S[0];break}case"ArrowLeft":{const t=S.indexOf(e.currentTarget)-1;a=S[t]??S[S.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,n.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":o},v)},f.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,i.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>S.push(e),onKeyDown:x,onClick:C},o,{className:(0,n.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":N===t})}),a??t)}))),a?(0,r.cloneElement)(g.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function u(e){const t=(0,o.Z)();return r.createElement(m,(0,i.Z)({key:String(t)},e))}},7144:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>v,frontMatter:()=>c,metadata:()=>p,toc:()=>u});var i=a(7462),r=(a(7294),a(3905));const n={toc:[]};function o(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},n,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# creates a new service named ssh\nziti edge create service ssh\n\n# creates a new service named ssh with a terminator strategy which load-balances using random selection\nziti edge create service ssh --terminator-strategy random\n\n# creates a router based terminator for ssh on router router1 which connects to the local machine\nziti edge create terminator ssh router1 tcp:localhost:22\n\n# creates a new service named postgresql with a terminator strategy which does failover\nziti edge create service postgresql --terminator-strategy ha\n\n# creates a router based terminator for postgres on router router1\n# this is the posgres primary, so precedence is set to required\nziti edge create terminator postgresql router1 tcp:pg-primary:5432 --precedence required\n\n# creates a router based terminator for postgres on router router1 which connects to another machine\n# this is the posgresql secondary, so precedence is left at default\nziti edge create terminator postgresql router1 tcp:pg-secondary:5432\n\n# If the primary goes down, the controller will notice that dials are failing and set the \n# precedence to failed. New sessions will go to the secondary. When the primary is brought \n# back up, it can be marked as requred again\nziti edge update terminator <terminator-id> --precedence required \n")))}o.isMDXComponent=!0;var s=a(5488),l=a(5162);const c={title:"Creating"},d="Creating a Service",p={unversionedId:"core-concepts/services/creating",id:"core-concepts/services/creating",title:"Creating",description:"",source:"@site/docs/core-concepts/services/creating.mdx",sourceDirName:"core-concepts/services",slug:"/core-concepts/services/creating",permalink:"/docs/core-concepts/services/creating",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/core-concepts/services/creating.mdx",tags:[],version:"current",frontMatter:{title:"Creating"},sidebar:"rootSidebar",previous:{title:"Ziti Services",permalink:"/docs/core-concepts/services/overview"},next:{title:"Service Configurations",permalink:"/docs/core-concepts/config-store/overview"}},m={},u=[],h={toc:u};function v(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"creating-a-service"},"Creating a Service"),(0,r.kt)("p",null,"Here's how you can create a service."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"create-service-ui",label:"Create Service UI",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'On the left side nav bar, click "Edge Services"'),(0,r.kt)("li",{parentName:"ol"},'In the top right corner of the screen click the "plus" image to add a new service'),(0,r.kt)("li",{parentName:"ol"},'Choose a name for the serivce. Example "my-first-service"'),(0,r.kt)("li",{parentName:"ol"},'Enter a host name for the service. Enter "intercepted-hostname"'),(0,r.kt)("li",{parentName:"ol"},"Enter the port you want intercepted: 1111"),(0,r.kt)("li",{parentName:"ol"},'Choose Router by name - for example "ziti-gw01" if you are using ',(0,r.kt)("a",{parentName:"li",href:"https://aws.amazon.com/marketplace/pp/B07YZLKMLV"},"Ziti Edge - Developer\nEdition")),(0,r.kt)("li",{parentName:"ol"},"For Endpoint Service choose:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"protocol = tcp"),(0,r.kt)("li",{parentName:"ul"},"host = actual-hostname"),(0,r.kt)("li",{parentName:"ul"},"port = 2222")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Select a cluster. If using ",(0,r.kt)("a",{parentName:"li",href:"https://aws.amazon.com/marketplace/pp/B07YZLKMLV"},"Ziti Edge - Developer Edition"),' choose\n"demo-c01"'),(0,r.kt)("li",{parentName:"ol"},"Leave Hosting Identities as is"),(0,r.kt)("li",{parentName:"ol"},"Click save"))),(0,r.kt)(l.Z,{value:"create-hosted-service-ui",label:"Create Hosted Service UI",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'On the left side nav bar, click "Edge Services"'),(0,r.kt)("li",{parentName:"ol"},'In the top right corner of the screen click the "plus" image to add a new service'),(0,r.kt)("li",{parentName:"ol"},'Choose a name for the serivce. Example "my-first-hosted-service"'),(0,r.kt)("li",{parentName:"ol"},'Enter a host name for the service. Enter "intercepted-hostname"'),(0,r.kt)("li",{parentName:"ol"},"Enter the port you want intercepted: 1111"),(0,r.kt)("li",{parentName:"ol"},'Choose "Hosted (No Router)" for the Router'),(0,r.kt)("li",{parentName:"ol"},"Select a cluster. If using ",(0,r.kt)("a",{parentName:"li",href:"https://aws.amazon.com/marketplace/pp/B07YZLKMLV"},"Ziti Edge - Developer Edition"),' choose\n"demo-c01"'),(0,r.kt)("li",{parentName:"ol"},'Select one or more identities in "Hosting Identities" representing the identities which host the service'),(0,r.kt)("li",{parentName:"ol"},"Click save"))),(0,r.kt)(l.Z,{value:"create-service-cli",label:"Create Service CLI",mdxType:"TabItem"},(0,r.kt)("p",null,"To create a new service via CLI simply issue these commands: ",(0,r.kt)(o,{mdxType:"CreateServiceCliMd"})))))}v.isMDXComponent=!0},423:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var i=a(7462),r=(a(7294),a(3905)),n=a(7144);const o={},s="Ziti Services",l={unversionedId:"core-concepts/services/overview",id:"core-concepts/services/overview",title:"Ziti Services",description:'The primary strategy assumes that one function of Ziti is providing access to "services". A service encapsulates the definition of any',source:"@site/docs/core-concepts/services/overview.mdx",sourceDirName:"core-concepts/services",slug:"/core-concepts/services/overview",permalink:"/docs/core-concepts/services/overview",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/core-concepts/services/overview.mdx",tags:[],version:"current",frontMatter:{},sidebar:"rootSidebar",previous:{title:"Enrolling",permalink:"/docs/core-concepts/identities/enrolling"},next:{title:"Creating",permalink:"/docs/core-concepts/services/creating"}},c={},d=[{value:"Service Name",id:"service-name",level:2},{value:"Service Termination",id:"service-termination",level:2},{value:"SDK Embedded Applications",id:"sdk-embedded-applications",level:3},{value:"Proxied Applications",id:"proxied-applications",level:3},{value:"Ziti Router Terminated Services",id:"ziti-router-terminated-services",level:3},{value:"Summary",id:"summary",level:3},{value:"Terminators",id:"terminators",level:3},{value:"Availability and Scaling",id:"availability-and-scaling",level:2},{value:"Router HA/Scaling",id:"router-hascaling",level:3},{value:"Application HA/Scaling",id:"application-hascaling",level:3},{value:"Xt",id:"xt",level:3},{value:"Costs",id:"costs",level:4},{value:"Route Cost",id:"route-cost",level:5},{value:"Static Cost",id:"static-cost",level:5},{value:"Precedence",id:"precedence",level:4},{value:"Dynamic Cost",id:"dynamic-cost",level:5},{value:"Effective Cost",id:"effective-cost",level:5},{value:"Strategies",id:"strategies",level:4},{value:"<code>smartrouting</code>",id:"smartrouting",level:5},{value:"<code>weighted</code>",id:"weighted",level:5},{value:"<code>random</code>",id:"random",level:5}],p={toc:d};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ziti-services"},"Ziti Services"),(0,r.kt)("p",null,'The primary strategy assumes that one function of Ziti is providing access to "services". A service encapsulates the definition of any\nresource that could be accessed by a client on a traditional network. '),(0,r.kt)("p",null,"A service is defined by the following components:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Name")," - the name of the service"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Termination")," - Ziti only provides access to a network service, it does not provide the service itself. The service must be able to get network traffic to whatever application or application cluster is actually providing the service, whether that provider has Ziti embedded or has no knowledge of Ziti"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Configuration")," - Ziti allows application specific configuration to be stored for services. See ",(0,r.kt)("a",{parentName:"li",href:"/docs/core-concepts/config-store/overview"},"Configuration Store")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Authorization")," - For a details on controlling access to services, see ",(0,r.kt)("a",{parentName:"li",href:"/docs/core-concepts/security/authorization/policies/overview"},"Policies"),".")),(0,r.kt)("h2",{id:"service-name"},"Service Name"),(0,r.kt)("p",null,"Ziti services must have names that are unique to their Ziti installation. Service names are how clients address services in order to consume them. Services which are provided by applications with Ziti embedded also use the service name to indicate which service is being provided."),(0,r.kt)("p",null,'Services defined on a Ziti Network have an almost limitless "namespace" available for identifying services. A Ziti service is to be defined by a name and this name is registered with the Ziti Controller. Once declared, services can then be addressed directly by name from Ziti-aware clients. This means there are effecitvely a ',(0,r.kt)("strong",{parentName:"p"},"limitless")," number names available with no need for global DNS registration. The names assigned are unique to a Ziti Network and the application developer has total control over service names."),(0,r.kt)("h2",{id:"service-termination"},"Service Termination"),(0,r.kt)("p",null,"In Ziti, service termination refers to how a network traffic going over Ziti reaches the application (or application cluster) which is actually providing a service. There are a few basic ways in which a service can be terminated at an application."),(0,r.kt)("p",null,"There are some trade-offs to consider for each type of termination. "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Do you want end-to-end zero trust? If yes, that requires that both the client and server have Ziti identities and can connect securely with provisioned certificates."),(0,r.kt)("li",{parentName:"ol"},"Do you want Ziti to provide end-to-end encryption? Developers can always provide their own end-to-end encryption on top of the connectivity that Ziti provides, but not all modes of service termination allow Ziti to encrypt traffic end-to-end for you."),(0,r.kt)("li",{parentName:"ol"},"How accessible to non-zero trust clients do you want your server application to be? With the proper configuration applications can be fully 'dark', meaning they do not listen for connections.  ")),(0,r.kt)("h3",{id:"sdk-embedded-applications"},"SDK Embedded Applications"),(0,r.kt)("p",null,"The server application can embed the Ziti Edge SDK. The application will have an enrolled identity and provisioned certificates. This has several advantages:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Connections between the application and Ziti will be secured using certificates. This enables true zero trust and end-to-end encrypted connections betwen SDK based clients and SDK based servers. "),(0,r.kt)("li",{parentName:"ol"},"With an identity, the server application can particpate in the Ziti security model. This means you can control which services the application can provide, and revoke access as needed. You can also control which edge routers the application may connect to."),(0,r.kt)("li",{parentName:"ol"},"The application will be 'dark'. Instead of listening for incoming network connections, the application will make an outgoing, secured connection to one or more Ziti edge routers. It will then receive network requests over these secured connections.")),(0,r.kt)("p",null,"The downside to this approach, specifically for existing applications, is that the application must be refactored to use a Ziti Edge SDK. Depending on language and frameworks used, the effort required can range from updating a few lines of code to writing a new SDK from scratch for a language that's not supported yet.   "),(0,r.kt)("h3",{id:"proxied-applications"},"Proxied Applications"),(0,r.kt)("p",null,"For applications where it doesn't make sense to embed the SDK a Ziti SDK based proxy can provide access to the application. Often the proxy may take the form of a sidecar and be co-located with the application. This minimizes the attack surface. There are a few things to note about this approach."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The application will not be completely dark. It must accept connections from wherever the proxy is located. The proxy may be co-located with the application, so the attack surface area may be tiny. However, tiny is still bigger than zero."),(0,r.kt)("li",{parentName:"ol"},"Similarly, traffic can be encrypted between the client and the proxy, but traffic between the proxy and the application will not be covered under the Ziti end-to-end encryption. It may still be encrypted, if the client and server establish their own encryption at the discretion of the client and server implementors. "),(0,r.kt)("li",{parentName:"ol"},"Via the proxy, the application is still represented by an identity and thus participates in policies.")),(0,r.kt)("p",null,"Services which use proxies for server side termination may require extra configuration, so that the proxing application knows how to connect to the server application. Service configurations are discussed more below."),(0,r.kt)("h3",{id:"ziti-router-terminated-services"},"Ziti Router Terminated Services"),(0,r.kt)("p",null,"Routers also have the ability to connect to applications providing services. This approach has its own advantages and disadvantages."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Like the proxy approach, the application cannot be completely dark. The application must be reachable from the Ziti router. "),(0,r.kt)("li",{parentName:"ol"},"Ziti currently only offers end-to-end encryption between two SDK applications. Sessions terminating at a router cannot be end-to-end encrypted by Ziti. The data may still be end-to-end encrypted by the client and server, but that is up to the client and server implementors.")),(0,r.kt)("h3",{id:"summary"},"Summary"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Termination Type"),(0,r.kt)("th",{parentName:"tr",align:null},"End-to-end Zero Trust"),(0,r.kt)("th",{parentName:"tr",align:null},"Managed by Policies"),(0,r.kt)("th",{parentName:"tr",align:null},"Ziti Provided End-to-end encryption"),(0,r.kt)("th",{parentName:"tr",align:null},"Dark Server Application"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SDK Embedded"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SDK Based Proxy"),(0,r.kt)("td",{parentName:"tr",align:null},"No, only to proxy"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes (via Proxy)"),(0,r.kt)("td",{parentName:"tr",align:null},"Only to proxy. If desired, full end-to-end must be done externally"),(0,r.kt)("td",{parentName:"tr",align:null},"No. Can be relatively locked down, though")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ziti Router"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"No. If desired, end-to-end must be done externally"),(0,r.kt)("td",{parentName:"tr",align:null},"No. Can be relatively locked down, though.")))),(0,r.kt)("h3",{id:"terminators"},"Terminators"),(0,r.kt)("p",null,"Terminators represent a way to connect to a specific server application for a specific service. "),(0,r.kt)("p",null,"For an SDK based server (whether embedded or proxied), these are created automatically as the application connects and removed when the application disconnects. "),(0,r.kt)("p",null,"For router terminated services they must be created manually. When creating a terminator manually, the following must be specified."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The router which will connect to the server application"),(0,r.kt)("li",{parentName:"ol"},"The binding. This indicates which Xgress component on the router will handle making the connection. This will generally be ",(0,r.kt)("inlineCode",{parentName:"li"},"transport")," for tcp based applications and ",(0,r.kt)("inlineCode",{parentName:"li"},"udp")," for UDP based applications",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"See the ziti-fabric documentation for more information on the Xgress framework"))),(0,r.kt)("li",{parentName:"ol"},"The address to connect to. This will generally take the form ",(0,r.kt)("inlineCode",{parentName:"li"},"<protocol>:<host or ip>:<port>"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Example: ",(0,r.kt)("inlineCode",{parentName:"li"},"tcp:localhost:5432"))))),(0,r.kt)("h2",{id:"availability-and-scaling"},"Availability and Scaling"),(0,r.kt)("p",null,"Services can be made highly available and/or horizontally scalable. There are two kinds of availability that server applications need to concern themselves with. "),(0,r.kt)("h3",{id:"router-hascaling"},"Router HA/Scaling"),(0,r.kt)("p",null,"The first is allowing multiple routers to connect to a single application. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Multiple Routers")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:a(547).Z,width:"521",height:"289"})),(0,r.kt)("p",null,"This ensures that the application will still be able to service requests even if a router fails or there is network partition separating a router and server application. It also will help ensure that the router layer doesn't become a bottleneck, as more routers can be addeded as necessary to scale out connectivity. Finally, it provides multiple network paths to the application. This gives smart routing more to choose optimal routes from as network conditions change."),(0,r.kt)("h3",{id:"application-hascaling"},"Application HA/Scaling"),(0,r.kt)("p",null,"The second is application availabilty and/or scalability. There will often be multiple instances of a service application running, either for failover or in a load balanced deployment."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Failover Deployment")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:a(6834).Z,width:"521",height:"289"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Horizontal Scale Deployment")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:a(2687).Z,width:"521",height:"289"})),(0,r.kt)("h3",{id:"xt"},"Xt"),(0,r.kt)("p",null,"All types of availability and scalability involve multiple terminators. What distinguishes an HA failover setup from a load-balanced horizontal scale setup is how new sessions are assigned to terminators. For failover, we want sessions to always go to the same service instance. For horizontal scale, we want to load balance sessions across available instances. "),(0,r.kt)("p",null,"The fabric contains a framework called Xt (eXtensible Terminators) which allows defining terminator strategies and defines how terminator strategies and external components integrate with smart routing. The general flow of terminator selection goes as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"A client requests a new session for a service"),(0,r.kt)("li",{parentName:"ol"},"Smart routing finds all the active terminators for the session (active meaning the terminator's router is connected)"),(0,r.kt)("li",{parentName:"ol"},"Smart routing calculates a cost for each terminator then hands the service's terminator strategy a list of terminators and their costs ranked from lowest to highest"),(0,r.kt)("li",{parentName:"ol"},"The strategy returns the terminator that should be used"),(0,r.kt)("li",{parentName:"ol"},"A new session is created using that path. ")),(0,r.kt)("p",null,"Strategies will often work by adjusting terminator costs. The selection algorithm then simply returns the lowest cost option presented by smart routing. "),(0,r.kt)("h4",{id:"costs"},"Costs"),(0,r.kt)("p",null,"There are a number of elements which feed the smart routing cost algorithm."),(0,r.kt)("h5",{id:"route-cost"},"Route Cost"),(0,r.kt)("p",null,"The cost of the route from the initiating route to the terminator router will be included in the terminator cost. This cost may be influenced by things such as link latencies and user determined link costs."),(0,r.kt)("h5",{id:"static-cost"},"Static Cost"),(0,r.kt)("p",null,"Each terminator has a static cost which can be set or updated when the terminator is created. SDK applications can set the terminator cost when they invoke the Listen operation."),(0,r.kt)("h4",{id:"precedence"},"Precedence"),(0,r.kt)("p",null,"Each terminator has a precedence. There are three precedence levels: ",(0,r.kt)("inlineCode",{parentName:"p"},"required"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"failed"),"."),(0,r.kt)("p",null,"Smart routing will always rank terminators with higher precedence levels higher than terminators with lower precedence levers. So required terminators will always be first, default second and failed third. Precedence levels can be used to implement HA. The primary will be marked as required and the secondary as default. When the primary is determined to be down, either by some internal or external set of heuristics, it will be marked as Failed and new sessions will go to the secondary. When the primary recovers it can be bumped back up to Required."),(0,r.kt)("h5",{id:"dynamic-cost"},"Dynamic Cost"),(0,r.kt)("p",null,"Each terminator also has a dynamic cost that will move a terminator up and down relative to its precedence. This cost can be driven by stratagies or by external components. A strategy might use number of active of open sessions or dial successes and failures to drive the dynamic cost. "),(0,r.kt)("h5",{id:"effective-cost"},"Effective Cost"),(0,r.kt)("p",null,"Each terminator has an associated precedence and dynamic cost. This can be reduced to a single cost. The cost algorithm ensures terminators at different precedence levels do not overlap. So a terminator which is marked failed, with dynamic cost 0, will always have a higher calculated cost than a terminator with default precedence and maximum value for dynamic cost. "),(0,r.kt)("h4",{id:"strategies"},"Strategies"),(0,r.kt)("p",null,"The fabric currently provides four strategy implementations."),(0,r.kt)("h5",{id:"smartrouting"},(0,r.kt)("inlineCode",{parentName:"h5"},"smartrouting")),(0,r.kt)("p",null,"This is the default strategy. It always uses the lowest cost terminator. It drives costs as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cost is proportional to number of open sessions"),(0,r.kt)("li",{parentName:"ul"},"Dial failures drive the cost up"),(0,r.kt)("li",{parentName:"ul"},"Dial successes drive the cost down, but only as much as they were previously driven up by failures")),(0,r.kt)("h5",{id:"weighted"},(0,r.kt)("inlineCode",{parentName:"h5"},"weighted")),(0,r.kt)("p",null,"This strategy drives costs in the same way as the ",(0,r.kt)("inlineCode",{parentName:"p"},"smartrouting")," strategy. However instead of always picking the lowest cost terminator it does a weighted random selection across all terminators of the highest precedence. If a terminator has double the cost of another terminator it should get picked approximately half as often. "),(0,r.kt)("h5",{id:"random"},(0,r.kt)("inlineCode",{parentName:"h5"},"random")),(0,r.kt)("p",null,"This strategy does not change terminator weights. It does simple random selection across all terminators of the highest precedence. "),(0,r.kt)(n.default,{mdxType:"CreatingMd"}))}m.isMDXComponent=!0},6834:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/application-ha-0c10d100419445f137c47a20d6fbab13.png"},2687:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/horizontal-scale-a2574ff77b3aabd1e6306fc831209c3a.png"},547:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/router-ha-70458d2f86318be0155118ce003c00ec.png"}}]);