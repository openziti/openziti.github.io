"use strict";(self.webpackChunkdocusaurus_3=self.webpackChunkdocusaurus_3||[]).push([[8438],{96735:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"learn/core-concepts/services/overview","title":"Ziti Services","description":"The primary strategy assumes that one function of Ziti is providing access to \\"services\\". A service encapsulates the definition of any","source":"@site/docs/learn/core-concepts/services/overview.mdx","sourceDirName":"learn/core-concepts/services","slug":"/learn/core-concepts/services/overview","permalink":"/docs/learn/core-concepts/services/overview","draft":false,"unlisted":false,"editUrl":"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/learn/core-concepts/services/overview.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Enrolling","permalink":"/docs/learn/core-concepts/identities/enrolling"},"next":{"title":"Service Configurations","permalink":"/docs/learn/core-concepts/config-store/overview"}}');var r=t(74848),s=t(28453);const a={},o="Ziti Services",c={},l=[{value:"Service Name",id:"service-name",level:2},{value:"Service Termination",id:"service-termination",level:2},{value:"SDK Embedded Applications",id:"sdk-embedded-applications",level:3},{value:"Proxied Applications",id:"proxied-applications",level:3},{value:"Ziti Router Terminated Services",id:"ziti-router-terminated-services",level:3},{value:"Summary",id:"summary",level:3},{value:"Terminators",id:"terminators",level:3},{value:"Availability and Scaling",id:"availability-and-scaling",level:2},{value:"Router HA/Scaling",id:"router-hascaling",level:3},{value:"Application HA/Scaling",id:"application-hascaling",level:3},{value:"Xt",id:"xt",level:3},{value:"Costs",id:"costs",level:4},{value:"Route Cost",id:"route-cost",level:5},{value:"Static Cost",id:"static-cost",level:5},{value:"Precedence",id:"precedence",level:4},{value:"Dynamic Cost",id:"dynamic-cost",level:5},{value:"Effective Cost",id:"effective-cost",level:5},{value:"Strategies",id:"strategies",level:4},{value:"<code>smartrouting</code>",id:"smartrouting",level:5},{value:"<code>weighted</code>",id:"weighted",level:5},{value:"<code>random</code>",id:"random",level:5}];function d(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"ziti-services",children:"Ziti Services"})}),"\n",(0,r.jsx)(i.p,{children:'The primary strategy assumes that one function of Ziti is providing access to "services". A service encapsulates the definition of any\nresource that could be accessed by a client on a traditional network.'}),"\n",(0,r.jsx)(i.p,{children:"A service is defined by the following components:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Name"})," - the name of the service"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Termination"})," - Ziti only provides access to a network service, it does not provide the service itself. The service must be able to get network traffic to whatever application or application cluster is actually providing the service, whether that provider has Ziti embedded or has no knowledge of Ziti"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Configuration"})," - Ziti allows application specific configuration to be stored for services. See ",(0,r.jsx)(i.a,{href:"/docs/learn/core-concepts/config-store/overview",children:"Configuration Store"})]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Authorization"})," - For a details on controlling access to services, see ",(0,r.jsx)(i.a,{href:"/docs/learn/core-concepts/security/authorization/policies/overview",children:"Policies"}),"."]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"service-name",children:"Service Name"}),"\n",(0,r.jsx)(i.p,{children:"Ziti services must have names that are unique to their Ziti installation. Service names are how clients address services in order to consume them. Services which are provided by applications with Ziti embedded also use the service name to indicate which service is being provided."}),"\n",(0,r.jsxs)(i.p,{children:['Services defined on a network have an almost limitless "namespace" available for identifying services. A Ziti service is to be defined by a name and this name is registered with the controller. Once declared, services can then be addressed directly by name from Ziti-aware clients. This means there are effectively a ',(0,r.jsx)(i.strong,{children:"limitless"})," number names available with no need for global DNS registration. The names assigned are unique to a network and the application developer has total control over service names."]}),"\n",(0,r.jsx)(i.h2,{id:"service-termination",children:"Service Termination"}),"\n",(0,r.jsx)(i.p,{children:"In Ziti, service termination refers to how a network traffic going over Ziti reaches the application (or application cluster) which is actually providing a service. There are a few basic ways in which a service can be terminated at an application."}),"\n",(0,r.jsx)(i.p,{children:"There are some trade-offs to consider for each type of termination."}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsx)(i.li,{children:"Do you want end-to-end zero trust? If yes, that requires that both the client and server have Ziti identities and can connect securely with provisioned certificates."}),"\n",(0,r.jsx)(i.li,{children:"Do you want Ziti to provide end-to-end encryption? Developers can always provide their own end-to-end encryption on top of the connectivity that Ziti provides, but not all modes of service termination allow Ziti to encrypt traffic end-to-end for you."}),"\n",(0,r.jsx)(i.li,{children:"How accessible to non-zero trust clients do you want your server application to be? With the proper configuration applications can be fully 'dark', meaning they do not listen for connections."}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"sdk-embedded-applications",children:"SDK Embedded Applications"}),"\n",(0,r.jsx)(i.p,{children:"The server application can embed the Ziti Edge SDK. The application will have an enrolled identity and provisioned certificates. This has several advantages:"}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsx)(i.li,{children:"Connections between the application and Ziti will be secured using certificates. This enables true zero trust and end-to-end encrypted connections between SDK based clients and SDK based servers."}),"\n",(0,r.jsx)(i.li,{children:"With an identity, the server application can participate in the Ziti security model. This means you can control which services the application can provide, and revoke access as needed. You can also control which edge routers the application may connect to."}),"\n",(0,r.jsx)(i.li,{children:"The application will be 'dark'. Instead of listening for incoming network connections, the application will make an outgoing, secured connection to one or more Ziti edge routers. It will then receive network requests over these secured connections."}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"The downside to this approach, specifically for existing applications, is that the application must be refactored to use a Ziti Edge SDK. Depending on language and frameworks used, the effort required can range from updating a few lines of code to writing a new SDK from scratch for a language that's not supported yet."}),"\n",(0,r.jsx)(i.h3,{id:"proxied-applications",children:"Proxied Applications"}),"\n",(0,r.jsx)(i.p,{children:"For applications where it doesn't make sense to embed the SDK a Ziti SDK based proxy can provide access to the application. Often the proxy may take the form of a sidecar and be co-located with the application. This minimizes the attack surface. There are a few things to note about this approach."}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsx)(i.li,{children:"The application will not be completely dark. It must accept connections from wherever the proxy is located. The proxy may be co-located with the application, so the attack surface area may be tiny. However, tiny is still bigger than zero."}),"\n",(0,r.jsx)(i.li,{children:"Similarly, traffic can be encrypted between the client and the proxy, but traffic between the proxy and the application will not be covered under the Ziti end-to-end encryption. It may still be encrypted, if the client and server establish their own encryption at the discretion of the client and server implementors."}),"\n",(0,r.jsx)(i.li,{children:"Via the proxy, the application is still represented by an identity and thus participates in policies."}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"Services which use proxies for server side termination may require extra configuration, so that the proxying application knows how to connect to the server application. Service configurations are discussed more below."}),"\n",(0,r.jsx)(i.h3,{id:"ziti-router-terminated-services",children:"Ziti Router Terminated Services"}),"\n",(0,r.jsx)(i.p,{children:"Routers also have the ability to connect to applications providing services. This approach has its own advantages and disadvantages."}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsx)(i.li,{children:"Like the proxy approach, the application cannot be completely dark. The application must be reachable from the Ziti router."}),"\n",(0,r.jsx)(i.li,{children:"Ziti currently only offers end-to-end encryption between two SDK applications. Sessions terminating at a router cannot be end-to-end encrypted by Ziti. The data may still be end-to-end encrypted by the client and server, but that is up to the client and server implementors."}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"summary",children:"Summary"}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Termination Type"}),(0,r.jsx)(i.th,{children:"End-to-end Zero Trust"}),(0,r.jsx)(i.th,{children:"Managed by Policies"}),(0,r.jsx)(i.th,{children:"Ziti Provided End-to-end encryption"}),(0,r.jsx)(i.th,{children:"Dark Server Application"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"SDK Embedded"}),(0,r.jsx)(i.td,{children:"Yes"}),(0,r.jsx)(i.td,{children:"Yes"}),(0,r.jsx)(i.td,{children:"Yes"}),(0,r.jsx)(i.td,{children:"Yes"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"SDK Based Proxy"}),(0,r.jsx)(i.td,{children:"No, only to proxy"}),(0,r.jsx)(i.td,{children:"Yes (via Proxy)"}),(0,r.jsx)(i.td,{children:"Only to proxy. If desired, full end-to-end must be done externally"}),(0,r.jsx)(i.td,{children:"No. Can be relatively locked down, though"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"router"}),(0,r.jsx)(i.td,{children:"No"}),(0,r.jsx)(i.td,{children:"No"}),(0,r.jsx)(i.td,{children:"No. If desired, end-to-end must be done externally"}),(0,r.jsx)(i.td,{children:"No. Can be relatively locked down, though."})]})]})]}),"\n",(0,r.jsx)(i.h3,{id:"terminators",children:"Terminators"}),"\n",(0,r.jsx)(i.p,{children:"Terminators represent a way to connect to a specific server application for a specific service."}),"\n",(0,r.jsx)(i.p,{children:"For an SDK based server (whether embedded or proxied), these are created automatically as the application connects and removed when the application disconnects."}),"\n",(0,r.jsx)(i.p,{children:"For router terminated services they must be created manually. When creating a terminator manually, the following must be specified."}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsx)(i.li,{children:"The router which will connect to the server application"}),"\n",(0,r.jsxs)(i.li,{children:["The binding. This indicates which Xgress component on the router will handle making the connection. This will generally be ",(0,r.jsx)(i.code,{children:"transport"})," for tcp based applications and ",(0,r.jsx)(i.code,{children:"udp"})," for UDP based applications","\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsx)(i.li,{children:"See the ziti-fabric documentation for more information on the Xgress framework"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["The address to connect to. This will generally take the form ",(0,r.jsx)(i.code,{children:"<protocol>:<host or ip>:<port>"}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsxs)(i.li,{children:["Example: ",(0,r.jsx)(i.code,{children:"tcp:localhost:5432"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"availability-and-scaling",children:"Availability and Scaling"}),"\n",(0,r.jsx)(i.p,{children:"Services can be made highly available and/or horizontally scalable. There are two kinds of availability that server applications need to concern themselves with."}),"\n",(0,r.jsx)(i.h3,{id:"router-hascaling",children:"Router HA/Scaling"}),"\n",(0,r.jsx)(i.p,{children:"The first is allowing multiple routers to connect to a single application."}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Multiple Routers"})}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"image",src:t(15653).A+"",width:"521",height:"289"})}),"\n",(0,r.jsx)(i.p,{children:"This ensures that the application will still be able to service requests even if a router fails or there is network partition separating a router and server application. It also will help ensure that the router layer doesn't become a bottleneck, as more routers can be added as necessary to scale out connectivity. Finally, it provides multiple network paths to the application. This gives smart routing more to choose optimal routes from as network conditions change."}),"\n",(0,r.jsx)(i.h3,{id:"application-hascaling",children:"Application HA/Scaling"}),"\n",(0,r.jsx)(i.p,{children:"The second is application availability and/or scalability. There will often be multiple instances of a service application running, either for failover or in a load balanced deployment."}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Failover Deployment"})}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"image",src:t(65152).A+"",width:"521",height:"289"})}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Horizontal Scale Deployment"})}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"image",src:t(23223).A+"",width:"521",height:"289"})}),"\n",(0,r.jsx)(i.h3,{id:"xt",children:"Xt"}),"\n",(0,r.jsx)(i.p,{children:"All types of availability and scalability involve multiple terminators. What distinguishes an HA failover setup from a load-balanced horizontal scale setup is how new Sessions are assigned to terminators. For failover, we want Sessions to always go to the same service instance. For horizontal scale, we want to load balance Sessions across available instances."}),"\n",(0,r.jsx)(i.p,{children:"The fabric contains a framework called Xt (eXtensible Terminators) which allows defining terminator strategies and defines how terminator strategies and external components integrate with smart routing. The general flow of terminator selection goes as follows:"}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsx)(i.li,{children:"A client requests a new Session"}),"\n",(0,r.jsx)(i.li,{children:"Smart routing finds all the active terminators for the Session (active meaning the terminator's router is connected)"}),"\n",(0,r.jsx)(i.li,{children:"Smart routing calculates a cost for each terminator then hands the service's terminator strategy a list of terminators and their costs ranked from lowest to highest"}),"\n",(0,r.jsx)(i.li,{children:"The strategy returns the terminator that should be used"}),"\n",(0,r.jsx)(i.li,{children:"A new Session is created using that path."}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"Strategies will often work by adjusting terminator costs. The selection algorithm then simply returns the lowest cost option presented by smart routing."}),"\n",(0,r.jsx)(i.h4,{id:"costs",children:"Costs"}),"\n",(0,r.jsx)(i.p,{children:"There are a number of elements which feed the smart routing cost algorithm."}),"\n",(0,r.jsx)(i.h5,{id:"route-cost",children:"Route Cost"}),"\n",(0,r.jsx)(i.p,{children:"The cost of the route from the initiating route to the terminator router will be included in the terminator cost. This cost may be influenced by things such as link latencies and user determined link costs."}),"\n",(0,r.jsx)(i.h5,{id:"static-cost",children:"Static Cost"}),"\n",(0,r.jsx)(i.p,{children:"Each terminator has a static cost which can be set or updated when the terminator is created. SDK applications can set the terminator cost when they invoke the Listen operation."}),"\n",(0,r.jsx)(i.h4,{id:"precedence",children:"Precedence"}),"\n",(0,r.jsxs)(i.p,{children:["Each terminator has a precedence. There are three precedence levels: ",(0,r.jsx)(i.code,{children:"required"}),", ",(0,r.jsx)(i.code,{children:"default"})," and ",(0,r.jsx)(i.code,{children:"failed"}),"."]}),"\n",(0,r.jsx)(i.p,{children:"Smart routing will always rank terminators with higher precedence levels higher than terminators with lower precedence levers. So required terminators will always be first, default second and failed third. Precedence levels can be used to implement HA. The primary will be marked as required and the secondary as default. When the primary is determined to be down, either by some internal or external set of heuristics, it will be marked as Failed and new Sessions will go to the secondary. When the primary recovers it can be bumped back up to Required."}),"\n",(0,r.jsx)(i.h5,{id:"dynamic-cost",children:"Dynamic Cost"}),"\n",(0,r.jsx)(i.p,{children:"Each terminator also has a dynamic cost that will move a terminator up and down relative to its precedence. This cost can be driven by strategies or by external components. A strategy might use number of active of open Sessions or dial successes and failures to drive the dynamic cost."}),"\n",(0,r.jsx)(i.h5,{id:"effective-cost",children:"Effective Cost"}),"\n",(0,r.jsx)(i.p,{children:"Each terminator has an associated precedence and dynamic cost. This can be reduced to a single cost. The cost algorithm ensures terminators at different precedence levels do not overlap. So a terminator which is marked failed, with dynamic cost 0, will always have a higher calculated cost than a terminator with default precedence and maximum value for dynamic cost."}),"\n",(0,r.jsx)(i.h4,{id:"strategies",children:"Strategies"}),"\n",(0,r.jsx)(i.p,{children:"The fabric currently provides four strategy implementations."}),"\n",(0,r.jsx)(i.h5,{id:"smartrouting",children:(0,r.jsx)(i.code,{children:"smartrouting"})}),"\n",(0,r.jsx)(i.p,{children:"This is the default strategy. It always uses the lowest cost terminator. It drives costs as follows:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Cost is proportional to number of open Sessions"}),"\n",(0,r.jsx)(i.li,{children:"Dial failures drive the cost up"}),"\n",(0,r.jsx)(i.li,{children:"Dial successes drive the cost down, but only as much as they were previously driven up by failures"}),"\n"]}),"\n",(0,r.jsx)(i.h5,{id:"weighted",children:(0,r.jsx)(i.code,{children:"weighted"})}),"\n",(0,r.jsxs)(i.p,{children:["This strategy drives costs in the same way as the ",(0,r.jsx)(i.code,{children:"smartrouting"})," strategy. However instead of always picking the lowest cost terminator it does a weighted random selection across all terminators of the highest precedence. If a terminator has double the cost of another terminator it should get picked approximately half as often."]}),"\n",(0,r.jsx)(i.h5,{id:"random",children:(0,r.jsx)(i.code,{children:"random"})}),"\n",(0,r.jsx)(i.p,{children:"This strategy does not change terminator weights. It does simple random selection across all terminators of the highest precedence."})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},65152:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/application-ha-0c10d100419445f137c47a20d6fbab13.png"},23223:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/horizontal-scale-a2574ff77b3aabd1e6306fc831209c3a.png"},15653:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/router-ha-70458d2f86318be0155118ce003c00ec.png"},28453:(e,i,t)=>{t.d(i,{R:()=>a,x:()=>o});var n=t(96540);const r={},s=n.createContext(r);function a(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);