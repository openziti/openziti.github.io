"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[9650],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,k=m["".concat(s,".").concat(u)]||m[u]||c[u]||o;return n?i.createElement(k,r(r({ref:t},d),{},{components:n})):i.createElement(k,r({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},15310:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const o={sidebar_label:"Conventions",sidebar_position:10},r="Conventions",l={unversionedId:"reference/configuration/conventions",id:"reference/configuration/conventions",title:"Conventions",description:"The following conventions apply to multiple areas of the configuration files for routers and",source:"@site/docs/reference/30-configuration/conventions.md",sourceDirName:"reference/30-configuration",slug:"/reference/configuration/conventions",permalink:"/docs/reference/configuration/conventions",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/reference/30-configuration/conventions.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_label:"Conventions",sidebar_position:10},sidebar:"docsSidebar",previous:{title:"NGINX Module",permalink:"/docs/reference/tunnelers/nginx"},next:{title:"Controller",permalink:"/docs/reference/configuration/controller"}},s={},p=[{value:"Addressing",id:"addressing",level:2},{value:"Environment Variables",id:"environment-variables",level:2},{value:"Identity",id:"identity",level:2},{value:"Channel",id:"channel",level:2},{value:"Heartbeats",id:"heartbeats",level:2},{value:"Time Units",id:"time-units",level:2},{value:"XWeb",id:"xweb",level:2},{value:"<code>bindPoints</code>",id:"bindpoints",level:3},{value:"<code>apis</code>",id:"apis",level:3},{value:"<code>options</code>",id:"options",level:3},{value:"xgress Components",id:"xgress-components",level:2},{value:"xgress Options",id:"xgress-options",level:2}],d={toc:p},m="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"conventions"},"Conventions"),(0,a.kt)("p",null,"The following conventions apply to multiple areas of the configuration files for routers and\ncontrollers."),(0,a.kt)("h2",{id:"addressing"},"Addressing"),(0,a.kt)("p",null,"Listening and dialing addresses in OpenZiti are in the format of ",(0,a.kt)("inlineCode",{parentName:"p"},"<protocol>:<ip-or-host>:<port>"),"\nformat."),(0,a.kt)("p",null,"For servers that are listening ",(0,a.kt)("inlineCode",{parentName:"p"},"<ip-or-host>"),' should be the address of an interface to listen on\nor "0.0.0.0" for all IPv4 interfaces or "::" for all IPv6 interfaces. ',(0,a.kt)("inlineCode",{parentName:"p"},"<port>")," should be a valid\nport number that the server should listen on."),(0,a.kt)("p",null,"For clients dialing a server the ",(0,a.kt)("inlineCode",{parentName:"p"},"<ip-or-host>")," should be an IP address or hostname that resolves to\nthe target server. ",(0,a.kt)("inlineCode",{parentName:"p"},"<port>")," should be the port the server is listening on."),(0,a.kt)("p",null,"For clients and server, the ",(0,a.kt)("inlineCode",{parentName:"p"},"<protocol>")," section is the protocol used to host or initiate the\nconnection. It may be one of the following values, however ",(0,a.kt)("inlineCode",{parentName:"p"},"tls")," is suggested for most scenarios."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tls")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tcp")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"udp")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dtls")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ws")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"wss")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"transwarp")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"transwarptls"))),(0,a.kt)("h2",{id:"environment-variables"},"Environment Variables"),(0,a.kt)("p",null,"All values in the configuration file support environment variable replacement. The environment\nvariables are sourced from the scope of the executing process (i.e. controller, router). The\nsyntax ",(0,a.kt)("inlineCode",{parentName:"p"},"${VARIABLE}")," is used."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"db: ${ZITI_DATA}/db/ctrl.db\n")),(0,a.kt)("h2",{id:"identity"},"Identity"),(0,a.kt)("p",null,'OpenZiti uses a common framework for loading, storing, and processing certificate and private key\nconfiguration. Identity sections all have a similar format. The use of the defined certificates is\nup to the implementing application. So see their configuration sections for details on which values\nare utilized for what. This documentation provides an overview useful to understand the "default"\nassumptions. The ',(0,a.kt)("inlineCode",{parentName:"p"},"identity")," section may need to be formatted as YAML or JSON, depending on the\nimplementing application. The ",(0,a.kt)("inlineCode",{parentName:"p"},"ziti")," CLI and bundled sub-commands,\ne.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"ziti controller"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ziti router"),", expect a configuration file formatted as YAML."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cert")," - (required) A string in the format of ",(0,a.kt)("inlineCode",{parentName:"li"},"<engine>:<value>")," that defines a x509 client\ncertificate"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"key")," - (required) A string in the format of ",(0,a.kt)("inlineCode",{parentName:"li"},"<engine>:<value>")," that defines a private key used\nfor ",(0,a.kt)("inlineCode",{parentName:"li"},"cert"),"\nand ",(0,a.kt)("inlineCode",{parentName:"li"},"server_cert"),"\nif ",(0,a.kt)("inlineCode",{parentName:"li"},"server_key")," is not defined"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"server_cert")," -(optional) A string in the format of ",(0,a.kt)("inlineCode",{parentName:"li"},"<engine>:<value>")," that defines a x509\ncertificate, if not defined ",(0,a.kt)("inlineCode",{parentName:"li"},"cert")," is used"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"server_key")," - (optional) A string in the format of ",(0,a.kt)("inlineCode",{parentName:"li"},"<engine>:<value>")," that defines a private key\nfor ",(0,a.kt)("inlineCode",{parentName:"li"},"server_cert"),", if not defined ",(0,a.kt)("inlineCode",{parentName:"li"},"key")," is used if ",(0,a.kt)("inlineCode",{parentName:"li"},"server_cert")," is defined"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ca")," - (optional) A string in the format of ",(0,a.kt)("inlineCode",{parentName:"li"},"<engine>:<value>")," that defines x509 certificate chain\nused to define trusted CAs"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"alt_server_certs")," - (optional) An array of objects with ",(0,a.kt)("inlineCode",{parentName:"li"},"server_cert")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"server_key")," values\nused to add additional server certificates and keys not managed by OpenZiti (i.e. from public CAs\nlike Let's Encrypt). The server name indication (SNI) of incoming requests is compared with all\nDNS subject alternative names (SAN) of the server certificates in ",(0,a.kt)("inlineCode",{parentName:"li"},"identity.server_cert"),"\nand ",(0,a.kt)("inlineCode",{parentName:"li"},"identity.alt_server_certs[].server_cert"),". The first-matched server certificate is presented\nto the TLS client. You must use distinct DNS SANs to avoid ambiguity during server certificate\nselection.")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"<engine>:<value>")," format is used to define multiple different source types. If the ",(0,a.kt)("inlineCode",{parentName:"p"},"<engine>:"),"\npart is omitted, it is assumed to be ",(0,a.kt)("inlineCode",{parentName:"p"},"file:"),". The following engines are supported:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"file")," - indicates that ",(0,a.kt)("inlineCode",{parentName:"li"},"<value>")," is the path to a file"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pem")," - indicates that ",(0,a.kt)("inlineCode",{parentName:"li"},"<value>")," is an inline PEM string")),(0,a.kt)("p",null,"Additional PKCS#11 engines such as ",(0,a.kt)("inlineCode",{parentName:"p"},"siometrics.so")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"authenta.so")," may be used if the library are\npresent on the host machine. This allows for access to hardware backed private keys."),(0,a.kt)("p",null,"Example Identity Section (Client & Server use same key):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'identity:\n  cert: "file:ctrl-client.cert.pem"\n  server_cert: "pem:-----BEGIN CERTIFICATE-----\\nMIIEtzCCAp+gAwIBAgICEA0wDQYJKoZIhvcNAQELBQAwgYsxCzAJBgNVBAYTAlVT..."\n  key: ctrl.key.pem\n  ca: ca-chain.cert.pem\n  alt_server_certs:\n    - server_cert: lets_encrypt.cert.pem\n    - server_key: lets_encrypt.key.pem\n\n')),(0,a.kt)("h2",{id:"channel"},"Channel"),(0,a.kt)("p",null,"Channel sections control different ways in which connections behave. It is controlled by the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openziti/channel"},"channel")," library. Sections that invoke the channel library\nsupport the following options section."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"options")," - a set of optional connections options",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"maxQueuedConnects")," - (optional) the maximum number of connections to be accepted but awaiting\ninitial messaging"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"maxOutstandingConnects")," - (optional) the maximum number of connection accepted and waiting\nfor hello messaging to complete"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"connectTimeoutMs")," - (optional) the maximum number of milliseconds to wait for hello messaging\nto complete",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"writeTimeout")," - (optional)  the maximum amount of time to wait when writing data to a\nconnection")))))),(0,a.kt)("h2",{id:"heartbeats"},"Heartbeats"),(0,a.kt)("p",null,"Channels will use heartbeats to determine both latency and health. Heartbeats can be configured with\nthe following properties."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sendInterval")," - (optional, 10s) How often to send heartbeats"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"checkInterval")," - (optional, 1s) How often to check if heartbeat thresholds have been met"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"closeUnresponsiveTimeout")," - (optional, 30s) How to long to wait after the last heartbeat response\narrived before closing the channel")),(0,a.kt)("h2",{id:"time-units"},"Time Units"),(0,a.kt)("p",null,"Configurations that do not specify a unit of time in their name, support a variety of human-readable\ntime units. The format supports single and combinations of values (\ne.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"12s"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"5m20s"),",  ",(0,a.kt)("inlineCode",{parentName:"p"},"2h30m22s"),")."),(0,a.kt)("p",null,"Supported units:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ns")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"us")," (or ",(0,a.kt)("inlineCode",{parentName:"li"},"\xb5s"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ms")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"s")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"m")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"h"))),(0,a.kt)("h2",{id:"xweb"},"XWeb"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"web")," section is powered by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openziti/xweb"},"XWeb"),". XWeb allows web APIs to be\ndefined in code and exposed on multiple interfaces/networks through configuration alone."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"web:\n  - name: all-apis-localhost\n    bindPoints:\n      - interface: 127.0.0.1:1280\n        address: 127.0.0.1:1280\n        newAddress: localhost:1280\n        identity:\n          cert: ctrl-client.cert.pem\n          server_cert: ctrl-server.cert.pem\n          key: ctrl.key.pem\n          ca: ca-chain.cert.pem\n    options:\n      idleTimeout: 5000ms\n      readTimeout: 5000ms\n      writeTimeout: 100000ms\n      minTLSVersion: TLS1.2\n      maxTLSVersion: TLS1.3\n    apis:\n      - binding: health-checks\n      - binding: fabric\n      - binding: edge-management\n      - binding: edge-client\n\n")),(0,a.kt)("p",null,"The structure of the ",(0,a.kt)("inlineCode",{parentName:"p"},"web")," section is an array of API exposure options:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"web:\n  - name: API Exposure 1\n    ...\n  - name: API Exposure 2\n    ...\n")),(0,a.kt)("p",null,"Each exposure has the following configuration options:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name")," - (required) a name used for logging and error messaging"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bindPoints")," - (required) the interfaces, external addresses, and migration address options for\nthis exposure"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"apis")," - (required) a list of APIs and their options from the list above"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"options")," - (optional) a set of options used to tune HTTP/TLS")),(0,a.kt)("h3",{id:"bindpoints"},(0,a.kt)("inlineCode",{parentName:"h3"},"bindPoints")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"bindPoints")," are used to instruct XWeb on where to listen for new connections. Each exposure can\nhave multiple bind pints to have the same API listen on one or more interfaces/networks.\nAdditionally, each interface listened on can have its own external address and migration address."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"interface"),' - (required) the interface and port to listen on ("0.0.0.0" for all IPv4\ninterfaces, "::" for all IPv6 interfaces'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"identity")," - (optional, root identity) the certificates and keys to use for TLS"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"address")," - (required) the host:port combination that external devices can use to reach the\nexposed interface (ip or host name)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"newAddress")," - (optional) when specified, ",(0,a.kt)("inlineCode",{parentName:"li"},"newAddress")," will be sent to clients in the HTTP\nheader ",(0,a.kt)("inlineCode",{parentName:"li"},"ziti-ctrl-address"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"newAddress")," should only be specified when clients can use the new host:port combination to reach\nthe specified APIs. This setting is used to migrate APIs between ip/hostnames."),(0,a.kt)("h3",{id:"apis"},(0,a.kt)("inlineCode",{parentName:"h3"},"apis")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"apis")," section defines which APIs will be hosted on this exposure. Different OpenZiti components\nsupport different APIs. See their documentation for a list of APIs supported."),(0,a.kt)("h3",{id:"options"},(0,a.kt)("inlineCode",{parentName:"h3"},"options")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"idleTimeout")," - (optional) the maximum amount of time to wait for the next request when\nkeep-alives are enabled, if IdleTimeout is zero, the value of ReadTimeout is used"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"readTimeout")," - (optional) the maximum duration for reading the entire request, including the body"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"writeTimeout"),"  - (optional) the maximum duration before timing out writes of the response, it is\nreset whenever a new request\u2019s header is read"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"minTLSVersion")," - (optional) the minimum TLS version to support (TLS1.1, TLS1.2, TLS1.3)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"maxTLSVersion")," - (optional) the maximum TLS version to support (TLS1.1, TLS1.2, TLS1.3)")),(0,a.kt)("h2",{id:"xgress-components"},"xgress Components"),(0,a.kt)("p",null,'"xgress" is an internal OpenZiti set of components that facilitate ingress and egress traffic from\nthe OpenZiti mesh overlay network. Ingress traffic is handled by "listeners" and egress traffic is\nhandled by "dialers". Internally, xgress components may be developed that support listeners (\ningress), dialers (egress), or both.'),(0,a.kt)("p",null,"Each xgress components are referenced to by ",(0,a.kt)("inlineCode",{parentName:"p"},"binding")," name. The following ",(0,a.kt)("inlineCode",{parentName:"p"},"binding")," values are\ncurrently defined:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"proxy")," - listener only - allows ingress TCP connections to connect directly to a ",(0,a.kt)("inlineCode",{parentName:"li"},"service"),"\ndefined in ",(0,a.kt)("inlineCode",{parentName:"li"},"options")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"proxy_udp")," - listener only - allows ingress UDP connections to connect directly to a ",(0,a.kt)("inlineCode",{parentName:"li"},"service"),"\ndefined in ",(0,a.kt)("inlineCode",{parentName:"li"},"options")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"transport")," - listener, dialer - allows ingress TCP connections to request a circuit for a service\nand for traffic to dial to an underlay UDP service at a ",(0,a.kt)("inlineCode",{parentName:"li"},"<host>:<port>")," address"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"transport_udp")," - listener, dialer - allows ingress UDP connections to request a circuit for a\nservice and for traffic to dial to an underlay UDP service at a ",(0,a.kt)("inlineCode",{parentName:"li"},"<host>:<port>")," address"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"edge")," - listener, dialer - allows multiplexed ingress connections from SDKs and connections to\nother SDKs hosting services, requires an ",(0,a.kt)("inlineCode",{parentName:"li"},"advertise")," option in the ",(0,a.kt)("inlineCode",{parentName:"li"},"options")," section to be defined\nfor external linking"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tunnel")," - a special type of binding ",(0,a.kt)("a",{parentName:"li",href:"/docs/reference/configuration/router#tunnel-listeners"},"used by routers"))),(0,a.kt)("h2",{id:"xgress-options"},"xgress Options"),(0,a.kt)("p",null,"Each xgress component can have its own options in addition to the following shared options:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"mtu")," - (optional, 640*1024) unused"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"randomDrops")," - (optional, false) true/yes/on or false/no/off to randomly drop 1 in ",(0,a.kt)("inlineCode",{parentName:"li"},"drop1InN"),"\npayloads, used for testing only"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"drop1InN")," - (optional, 100)  if ",(0,a.kt)("inlineCode",{parentName:"li"},"randomDrops")," is enabled, will drop 1 in N payloads, used for\ntesting only"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"txQueueSize")," - (optional, 1) the number of transmit payload to queue"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"txPortalStartSize")," - (optional, 16*1024) integer that sets the starting window sizes"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"txPortalMinSize")," - (optional, 16*1024) integer that sets the minimum window size"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"txPortalMaxSize")," - (optional, 4",(0,a.kt)("em",{parentName:"li"},"1024"),"1024) integer that sets the maximum window size"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"txPortalIncreaseThresh")," - (optional, 224)  the number of successful transmits that triggers the\nwindow size to be scaled by ",(0,a.kt)("inlineCode",{parentName:"li"},"txPortalIncreaseScale")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"txPortalIncreaseScale")," - (optional, 1.0) the scale factor to increase the window size by"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"txPortalRetxThresh")," - (optional, 64) the number of retransmissions that triggers the window size\nto be scaled by ",(0,a.kt)("inlineCode",{parentName:"li"},"txPortalRetxScale")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"txPortalRetxScale")," - (optional, 0.75) the factor used to scale the window size\nwhen ",(0,a.kt)("inlineCode",{parentName:"li"},"txPortalRetxThresh")," is reached"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"txPortalDupAckThresh")," - (optional, 64) the number of duplicate ACKs that triggers the window size\nto be scaled by ",(0,a.kt)("inlineCode",{parentName:"li"},"txPortalDupAckScale")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"txPortalDupAckScale")," - (optional, 0.9) the factor used to scale the window size\nwhen ",(0,a.kt)("inlineCode",{parentName:"li"},"txPortalDupAckScale")," is reached"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rxBufferSize")," - (optional, 4",(0,a.kt)("em",{parentName:"li"},"1024"),"1024) the size of the receive buffer"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"retxStartMs")," - (optional, 200) the number of milliseconds to wait before attempting to retransmit"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"retxScale")," - (optional, 1.5) the factor to scale ",(0,a.kt)("inlineCode",{parentName:"li"},"retxStartMs")," based on RTT"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"retxAddMs")," - (optional, 0) a number of milliseconds to add to ",(0,a.kt)("inlineCode",{parentName:"li"},"retxStartMs")," when calculating new\nretransmission thresholds"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"maxCloseWaitMs")," - (optional, 30s) the amount of time to wait for buffers to empty before closing\na connection"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"getCircuitTimeout")," - (optional, 30s)  the amount of time to wait for circuit creation"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"circuitStartTimeout")," - (optional, 3m) the amount of time to wait for a circuit to start"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"connectTimeout")," - (optional, 0s) the amount of time to wait for dialed connections to connect,\n0/0s = OS default")))}c.isMDXComponent=!0}}]);