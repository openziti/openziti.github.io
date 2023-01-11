"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[9865],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>k});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(t),m=a,k=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return t?i.createElement(k,o(o({ref:n},d),{},{components:t})):i.createElement(k,o({ref:n},d))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=t[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4557:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=t(87462),a=(t(67294),t(3905));const r={sidebar_label:"Router",sidebar_position:30},o="Router Configuration Reference",l={unversionedId:"reference/configuration/router",id:"reference/configuration/router",title:"Router Configuration Reference",description:"OpenZiti uses configuration files for controllers that are in the YAML format. All configuration",source:"@site/docs/reference/30-configuration/router.md",sourceDirName:"reference/30-configuration",slug:"/reference/configuration/router",permalink:"/docs/reference/configuration/router",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/reference/30-configuration/router.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_label:"Router",sidebar_position:30},sidebar:"docsSidebar",previous:{title:"Controller",permalink:"/docs/reference/configuration/controller"},next:{title:"Glossary",permalink:"/docs/reference/glossary"}},s={},p=[{value:"Sections",id:"sections",level:2},{value:"<code>ctrl</code>",id:"ctrl",level:3},{value:"<code>csr</code>",id:"csr",level:3},{value:"<code>dialers</code>",id:"dialers",level:3},{value:"<code>edge</code>",id:"edge",level:3},{value:"<code>forwarder</code>",id:"forwarder",level:3},{value:"<code>healthChecks</code>",id:"healthChecks",level:3},{value:"<code>identity</code>",id:"identity",level:3},{value:"<code>link</code>",id:"link",level:3},{value:"<code>listeners</code>",id:"listeners",level:3},{value:"<code>metrics</code>",id:"metrics",level:3},{value:"<code>trace</code>",id:"trace",level:3},{value:"<code>transport</code>",id:"transport",level:3},{value:"<code>profile</code>",id:"profile",level:3},{value:"<code>web</code>",id:"web",level:3},{value:"<code>v</code>",id:"v",level:3}],d={toc:p};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"router-configuration-reference"},"Router Configuration Reference"),(0,a.kt)("p",null,"OpenZiti uses configuration files for controllers that are in the ",(0,a.kt)("a",{parentName:"p",href:"https://yaml.org/"},"YAML")," format. All configuration\nfiles are also subject to a set of ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/configuration/conventions"},"conventions")," such as environment variable substitution, identity\nsections, and addressing formats."),(0,a.kt)("h2",{id:"sections"},"Sections"),(0,a.kt)("p",null,"The router configuration file has several top level configuration sections that group together\nrelated configuration settings."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#ctrl"},(0,a.kt)("inlineCode",{parentName:"a"},"ctrl"))," - configuration for controller addressing/connections"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#csr"},(0,a.kt)("inlineCode",{parentName:"a"},"csr"))," - certificate fields used during enrollment (SANs, CommonName, etc.)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#dialers"},(0,a.kt)("inlineCode",{parentName:"a"},"dialers"))," - configures dialers used when router termination is used to contact target services for overlay\negress"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#edge"},(0,a.kt)("inlineCode",{parentName:"a"},"edge"))," - edge specific configuration, required to enable edge functionality (e.g. edge SDK connectivity)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#forwarder"},(0,a.kt)("inlineCode",{parentName:"a"},"forwarder"))," - configures various forwarder settings (e.g. link latency probing, idle sessions, dial\nqueues, etc.)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#healthChecks"},(0,a.kt)("inlineCode",{parentName:"a"},"healthChecks"))," - enables router health checks for controller connectivity"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#identity"},(0,a.kt)("inlineCode",{parentName:"a"},"identity"))," - configures the certificates used for outbound client connections, server listening, and CA\nbundles"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#link"},(0,a.kt)("inlineCode",{parentName:"a"},"link"))," - the type of link listeners available for incoming router link and outgoing router link connections"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#listeners"},(0,a.kt)("inlineCode",{parentName:"a"},"listeners"))," - the interfaces, ports, and addresses exposed for connection by outside clients (e.g. edge\nSDK clients, non-edge connections)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#metrics"},(0,a.kt)("inlineCode",{parentName:"a"},"metrics"))," - configures metrics reporting"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#trace"},(0,a.kt)("inlineCode",{parentName:"a"},"trace"))," - adds a peek handler to all router messaging for debug purposes"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#transport"},(0,a.kt)("inlineCode",{parentName:"a"},"transport"))," - enables transport level configuration that affects all instances of specific transports"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#profile"},(0,a.kt)("inlineCode",{parentName:"a"},"profile"))," - enables profiling of router memory and CPU statistics"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#web"},(0,a.kt)("inlineCode",{parentName:"a"},"web"))," - configures API presentation exposure"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#v"},(0,a.kt)("inlineCode",{parentName:"a"},"v"))," - A special section to note the version of the configuration file, only ",(0,a.kt)("inlineCode",{parentName:"li"},"v: 3")," is currently supported")),(0,a.kt)("p",null,"The standard OpenZit experience minimally requires the following sections:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ctrl")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"csr")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dialers")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"edge")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"identity")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"link")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"listeners")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"v"))),(0,a.kt)("p",null,"Of those values, to start the controller only the ",(0,a.kt)("inlineCode",{parentName:"p"},"ctrl"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"v")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"identity")," sections are required. Not specifying the\n",(0,a.kt)("inlineCode",{parentName:"p"},"csr")," section will not allow the router to enroll or renew existing enrollments. Not including the ",(0,a.kt)("inlineCode",{parentName:"p"},"dialer")," section will\nnot allow the router to connect to terminate services. Not including the ",(0,a.kt)("inlineCode",{parentName:"p"},"edge"),' section will start the controller in\n"fabric only" mode and will not support any edge functionality or concepts (edge SDK connectivity). Not including the\n',(0,a.kt)("inlineCode",{parentName:"p"},"link")," section will not allow the router to connect/dial or accept/host other routers for mesh establishment. Not\nincluding the ",(0,a.kt)("inlineCode",{parentName:"p"},"listeners")," configuration will not allow external connections to on-ramp connections over the mesh."),(0,a.kt)("p",null,"Example Minimum Router Configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'v: 3\n\nidentity:\n  cert: router.cert.pem\n  server_cert: router.server.cert.pem\n  key: router.key.pem\n  ca: ca-chain.cert.pem\n\nctrl:\n  endpoint: tls:127.0.0.1:6262\n\ncsr:\n  country: US\n  province: NC\n  locality: Charlotte\n  organization: OpenZiti\n  organizationalUnit: Ziti\n  sans:\n    dns:\n      - "localhost"\n    ip:\n      - "127.0.0.1"\n\ndialers:\n  - binding: udp\n  - binding: transport\n\nedge: { }\n\nlink:\n  listeners:\n    - binding: transport\n      bind: tls:127.0.0.1:6002\n      advertise: tls:127.0.0.1:6002\n  dialers:\n    - binding: transport\n\nlisteners:\n  - binding: edge\n    address: tls:0.0.0.0:3022\n  - binding: transport\n    address: tls:0.0.0.0:7099\n')),(0,a.kt)("h3",{id:"ctrl"},(0,a.kt)("inlineCode",{parentName:"h3"},"ctrl")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ctrl")," section configures how the router will connect to the controller."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"endpoint")," - (required) the address of the controller"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bind")," - (optional) the address of a local interface used to dial the controller address specified in ",(0,a.kt)("inlineCode",{parentName:"li"},"endpoint")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"defaultRequestTimeout")," - (optional) the amount of time use for controller connection timeouts (\nsee ",(0,a.kt)("a",{parentName:"li",href:"/docs/reference/configuration/conventions#time-units"},"time units"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"options")," - a set of option which includes the below options and those defined\nin ",(0,a.kt)("a",{parentName:"li",href:"/docs/reference/configuration/conventions#channel"},"channel options"))),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"ctrl:\n  endpoint: tls:127.0.0.1:6262\n")),(0,a.kt)("h3",{id:"csr"},(0,a.kt)("inlineCode",{parentName:"h3"},"csr")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"csr")," section is used during router enrollment and enrollment extension. It specifies values that will be used\nin the certificates that are the result of enrollment. This section is also present as a subsection under the ",(0,a.kt)("inlineCode",{parentName:"p"},"edge"),"\nsection."),(0,a.kt)("p",null,"Many of the values in this section are optional, however to accept connections from SDKs or other routers at least\none valid SAN must be provided."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"country")," - (optional) the subject information country field"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"province")," - (optional) the subject information province field"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"locality")," - (optional)  the subject information locality field"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"organization")," - (optional)  the subject information organization field"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"organizationalUnit")," - (optional)  the subject information organization unit field"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sans")," - (optional) - a subsection used to define Subject Alternate Names",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dns")," - (optional) - an array of DNS SAN entries"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ip")," - (optional) - an array of IP SAN entries"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"uri")," - (optional) - an array of URI SAN entries"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"email"),"  - (optional) - an array of email SAN entries")))),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'csr:\n  country: US\n  province: NC\n  locality: Charlotte\n  organization: OpenZiti\n  organizationalUnit: Ziti\n  sans:\n    dns:\n      - "localhost"\n      - "test-network"\n      - "test-network.localhost"\n      - "ziti-dev-ingress01"\n    email:\n      - "admin@example.com"\n    ip:\n      - "127.0.0.1"\n    uri:\n      - "ziti://ziti-dev-router01/made/up/example"\n')),(0,a.kt)("h3",{id:"dialers"},(0,a.kt)("inlineCode",{parentName:"h3"},"dialers")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"dialers")," sections defines the configuration for dialers that are used to dial (connect) to services from routers.\nVarious dialers are supported and referenced by ",(0,a.kt)("inlineCode",{parentName:"p"},"binding")," name. This section is an array of objects that configures\nindividual dialers specified by the property ",(0,a.kt)("inlineCode",{parentName:"p"},"binding"),"."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"dialers:\n  - binding: binding1\n    options:\n      mtu: 1000\n      #...options\n  - binding: binding2\n    options:\n    #...options\n  #...\n")),(0,a.kt)("p",null,"The following dialer bindings that are supported in the ",(0,a.kt)("inlineCode",{parentName:"p"},"binding")," field are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"proxy")," - tbd"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"proxy_udp")," - tbd"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"transport")," - tbd"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"transport_udp")," - tbd")),(0,a.kt)("p",null,"Each dialer currently supports a number of ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/configuration/conventions#xgress-options"},"shared options")),(0,a.kt)("h3",{id:"edge"},(0,a.kt)("inlineCode",{parentName:"h3"},"edge")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"edge")," section contains configuration that pertain to edge functionality. This section must be preset and empty to\nenable edge functionality (e.g. SDK connectivity). At present, the only value in this section is a deprecated ",(0,a.kt)("inlineCode",{parentName:"p"},"csr"),"\nsection. It is suggested to use the root ",(0,a.kt)("inlineCode",{parentName:"p"},"csr"),' section instead as this allows the router to run in "fabric only" and\n"edge mode" seamlessly.'),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"edge: { }\n")),(0,a.kt)("h3",{id:"forwarder"},(0,a.kt)("inlineCode",{parentName:"h3"},"forwarder")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"forwarder")," section controls options that affect how a router forwards payloads across links to other\nrouters within the mesh or egresses data to targeted services if the service is terminated by a router."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"latencyProbeInterval")," - (optional, 10,000) an integer representing the milliseconds to probe links for latency"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"latencyProbeTimeout")," - (optional, 10,000) an integer representing the milliseconds to wait before giving up on a link\nlatency probe"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"xgressCloseCheckInterval")," - (optional, 5,000) an integer representing the milliseconds to wait before un-routing a\ncircuit for due to idleness"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"xgressDialDwellTime")," - (optional, 0) an integer representing the milliseconds to wait before dialing a service for\negress"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"faultTxInterval")," - (optional, 15,000) an integer representing the milliseconds to wait between checking for circuits\nthat have faulted, 0=disabled"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"idleTxInterval")," -  (optional, 60,000) an integer representing the milliseconds to wait between checks for confirming\nidle circuits are in use, 0=disabled"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"idleCircuitTimeout")," - (optional, 60,000) an integer representing the milliseconds to wait before marking a circuit as\nidle and requesting a circuit confirmation"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"xgressDialQueueLength")," - (optional, 1000) an integer between 1 and 10,000 that represents the maximum number of\nqueued outgoing service dials"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"xgressDialWorkerCount")," - (optional, 128) an integer between 1 and 10,000 that represents the maximum number of\nworkers emptying the xgress dial queue"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"linkDialQueueLength")," -  (optional, 1000) an integer between 1 and 10,000 that represents the maximum number of queued\noutgoing router link dials"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"linkDialWorkerCount")," - (optional, 32) an integer between 1 and 10,000 that represents the maximum number of workers\nemptying the link dial queue")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"forwarder:\n  latencyProbeInterval: 1000\n")),(0,a.kt)("h3",{id:"healthChecks"},(0,a.kt)("inlineCode",{parentName:"h3"},"healthChecks")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"healthChecks")," sections allows configuration of router health checks performed. Health check status is available by\nexposing the ",(0,a.kt)("inlineCode",{parentName:"p"},"health-checks")," API in the ",(0,a.kt)("inlineCode",{parentName:"p"},"web")," section."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ctrlPingCheck")," - (optional) - configures controller health check pings",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"interval")," - (optional, 30s) - the frequency to ping the controller with connection checks"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"timeout")," - (optional, 15s) - the length of time to wait before giving up on a controller health ping"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"initialDelay")," - (optional, 15s) - the length of time to wait before starting controller health check pings")))),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"healthChecks:\n  ctrlPingCheck:\n    interval: 30s\n    timeout: 15s\n    initialDelay: 15s\n")),(0,a.kt)("h3",{id:"identity"},(0,a.kt)("inlineCode",{parentName:"h3"},"identity")),(0,a.kt)("p",null,"The identity section includes the default server certificate and private key used for services hosted by the router,\nalternate server certificates and keys to support SNI on hosted services, client certificate and private key when making\nconnections, and the ",(0,a.kt)("inlineCode",{parentName:"p"},"ca")," bundle that the controller will use when making connections to controllers and routers. See\nthe conventions that apply to all ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/configuration/conventions#identity"},"identity")," sections for field level detail."),(0,a.kt)("h3",{id:"link"},(0,a.kt)("inlineCode",{parentName:"h3"},"link")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"link")," section configures which protocols and ports are used to listen for incoming router mesh links via the\n",(0,a.kt)("inlineCode",{parentName:"p"},"listenes")," subsection and which protocols are used to dial other routers via the ",(0,a.kt)("inlineCode",{parentName:"p"},"dialers")," subsection. Dialers and\nlisteners use ",(0,a.kt)("inlineCode",{parentName:"p"},"binding")," names which can be further configured in the ",(0,a.kt)("a",{parentName:"p",href:"#transport"},(0,a.kt)("inlineCode",{parentName:"a"},"transport")," section"),'. For both\n"link listeners" and "link dialers", the ',(0,a.kt)("inlineCode",{parentName:"p"},"transport")," ",(0,a.kt)("inlineCode",{parentName:"p"},"binding")," is recommended."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"listeners")," subsection supports the same settings and option as in the ",(0,a.kt)("a",{parentName:"p",href:"#listeners"},(0,a.kt)("inlineCode",{parentName:"a"},"listeners")," section"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"dialers")," subsection supports the same settings and option as in the ",(0,a.kt)("a",{parentName:"p",href:"#dialers"},(0,a.kt)("inlineCode",{parentName:"a"},"dialers")," section"),"."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"link:\n  dialers:\n    - binding: transport\n  listeners:\n    - binding: transport\n      bind: tls:127.0.0.1:6004\n      advertise: tls:127.0.0.1:6004\n")),(0,a.kt)("h3",{id:"listeners"},(0,a.kt)("inlineCode",{parentName:"h3"},"listeners")),(0,a.kt)("p",null,'Listeners configure different types of server logic and protocols to be "listened" for on the router. This includes\nopening ports on one or more interfaces by specified in the ',(0,a.kt)("inlineCode",{parentName:"p"},"address")," option. The ",(0,a.kt)("inlineCode",{parentName:"p"},"address")," field is formatted according\nto the ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/configuration/conventions#addressing"},"address conventions"),". If necessary to refer to the listener externally in\ndocuments or payloads maintained outside the process, the ",(0,a.kt)("inlineCode",{parentName:"p"},"advertise")," option will be used to format URLs or any\nother address. The ",(0,a.kt)("inlineCode",{parentName:"p"},"advertise")," value should be externally routable."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"binding")," - (required) the name of a ",(0,a.kt)("a",{parentName:"li",href:"/docs/reference/configuration/conventions#xgress-components"},"xgress component")," that will provide the server\nside logic for the listener"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bind")," - (required) the ",(0,a.kt)("a",{parentName:"li",href:"/docs/reference/configuration/conventions#addressing"},"address")," that the listener should listen on"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"advertise")," (required) the ",(0,a.kt)("inlineCode",{parentName:"li"},"<host>:<port>")," combination that external resources should use to reach this listener"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"costTags")," - (optional) an array of tags used during link cost calculations"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"options")," - (optional) options specified by the component specifically in addition to\nthe ",(0,a.kt)("a",{parentName:"li",href:"/docs/reference/configuration/conventions#xgress-options"},"shared options"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"listeners:\n  - binding: edge\n    address: tls:0.0.0.0:3022\n    options:\n      advertise: 127.0.0.1:3022\n")),(0,a.kt)("h3",{id:"metrics"},(0,a.kt)("inlineCode",{parentName:"h3"},"metrics")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"metrics")," section controls how metrics are communicated to the connection controller."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"reportInterval")," - (optional, 1m) the interval of time to wait between crafting a new metrics message to be sent to the controller"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"messageQueueSize")," - (optional, 10) the maximum number of buffered metrics messages allowed to be queued to send to the controller")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"metrics:\n  reportInterval: 1m\n  messageQueueSize: 10\n")),(0,a.kt)("h3",{id:"trace"},(0,a.kt)("inlineCode",{parentName:"h3"},"trace")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"trace")," section instructs the router to output incoming and outgoing messaging it receives. This setting is\nuseful for debugging purposes only and should not be enabled in production environments without careful consideration."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"path")," - (required) the file to output decoded messages to")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"trace:\n  path: /var/opt/open.ziti.router.trace\n")),(0,a.kt)("h3",{id:"transport"},(0,a.kt)("inlineCode",{parentName:"h3"},"transport")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"transport")," section is for advanced configuration of underlay protocols. It currently only applies to an internally\ntuned TCP protocol named Transwarp and is tuned using ",(0,a.kt)("inlineCode",{parentName:"p"},"westworld3")," configuration options. This section should largely\nbe unnecessary outside of development."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"transport:\n  westworld3:\n    profile_version: 1\n    tx_portal_min_sz: 16384\n    tx_portal_max_sz: 1073741824\n    instrument:\n      name: metrics\n      path: /tmp/westworld3\n      snapshot_ms: 250\n      enabled: true\n")),(0,a.kt)("h3",{id:"profile"},(0,a.kt)("inlineCode",{parentName:"h3"},"profile")),(0,a.kt)("p",null,"The profile section allows for ",(0,a.kt)("a",{parentName:"p",href:"https://go.dev/blog/pprof"},"CPU (pprof) and memory (memprof)")," dumps to be created. CPU\nprofiling is buffered by the application's runtime and output to the designated file. Memory profiling allows the\ninterval memory profiling occurs at and is output. These settings are useful for debugging purposes only and should not\nbe enabled in production environments without careful consideration."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cpu")," - (optional)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"path")," - (required) the path to output the pprof data"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"memory")," - (optional)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"path")," - (required) the path to output the memprof data"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"intervalMs")," (optional) the frequency to output memprof data (default 15s)")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"profile:\n  cpu:\n    path: /home/user1/tmp/ctrl.cpu.pprof\n  memory:\n    path: ctrl.memprof\n    intervalMs: 150000\n")),(0,a.kt)("h3",{id:"web"},(0,a.kt)("inlineCode",{parentName:"h3"},"web")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"web")," section follows the ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/configuration/conventions#xweb"},"conventions of XWeb"),". The controller has the following APIs defined:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"health-checks")," - provides a health check API that allows remote parties to verify the health of the controller")),(0,a.kt)("p",null,"Each API may have their own options, but currently do not."),(0,a.kt)("h3",{id:"v"},(0,a.kt)("inlineCode",{parentName:"h3"},"v")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"v"),' section is used to detect if the version file is supported by the OpenZiti binary read it. The current and only\nsupported value is "3".'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"v: 3\n")))}c.isMDXComponent=!0}}]);