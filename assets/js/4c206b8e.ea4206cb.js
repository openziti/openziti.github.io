"use strict";(self.webpackChunkdocusaurus_3=self.webpackChunkdocusaurus_3||[]).push([[6379],{48569:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>s});var i=t(74848),o=t(28453);const s=[];function r(e){const n={a:"a",code:"code",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Ziti provides several APIs. The most relevant Ziti API for an integrator is ",(0,i.jsx)(n.a,{href:"/docs/reference/developer/api/#edge-management-api",children:"the Management API"})," provided by the Ziti controller. The ",(0,i.jsx)(n.code,{children:"ziti edge"})," CLI and the web UI both use the management API for create, list, update, delete operations on Ziti entities like identities and services."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/reference/developer/api/#edge-client-api",children:"The edge client API"})," is also provided by the Ziti controller. This is the API implemented by Ziti Edge SDKs which are used by endpoints to authenticate and discover Ziti services and routers."]})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},4377:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"reference/developer/api/index","title":"Edge APIs","description":"Specifications & Documentation","source":"@site/docs/reference/developer/api/index.mdx","sourceDirName":"reference/developer/api","slug":"/reference/developer/api/","permalink":"/docs/reference/developer/api/","draft":false,"unlisted":false,"editUrl":"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/reference/developer/api/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Edge APIs"},"sidebar":"docsSidebar","previous":{"title":"Ziti Developer Resources","permalink":"/docs/reference/developer/"},"next":{"title":"Edge Client API Reference","permalink":"/docs/reference/developer/api/edge-client-reference"}}');var o=t(74848),s=t(28453),r=t(48569);const a={title:"Edge APIs"},l=void 0,c={},d=[...r.RM,{value:"Specifications &amp; Documentation",id:"specifications--documentation",level:2},{value:"Find the Controller Version",id:"find-the-controller-version",level:3},{value:"Edge Management API",id:"edge-management-api",level:2},{value:"Edge Client API",id:"edge-client-api",level:2},{value:"Edge Client &amp; Management Shared Capabilities",id:"edge-client--management-shared-capabilities",level:2},{value:"Configuring the Controller Edge APIs",id:"configuring-the-controller-edge-apis",level:2},{value:"Controller Configuration Reference",id:"controller-configuration-reference",level:3},{value:"Example Controller Edge Configuration Section",id:"edge-configuration-section",level:4},{value:"Example Controller Web Configuration Section",id:"web-configuration-section",level:4}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.Ay,{}),"\n",(0,o.jsx)(n.h2,{id:"specifications--documentation",children:"Specifications & Documentation"}),"\n",(0,o.jsxs)(n.p,{children:["Both the edge management and client APIs have OpenAPI 2.0, formerly Swagger, specifications. The most up-to-date versions  are\navailable within the ",(0,o.jsx)(n.a,{href:"https://github.com/openziti/edge-api#user-content-versioning",children:"Ziti Edge API GitHub repository"}),". There is also\nan API reference web site built in to the running Ziti controller:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"https://<host>:<port>/edge/client/v1/docs"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"https://<host>:<port>/edge/management/v1/docs"})}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Where ",(0,o.jsx)(n.code,{children:"<host>:<port>"})," should be replaced with the values configured for the APIs in the ",(0,o.jsxs)(n.a,{href:"#web-configuration-section",children:[(0,o.jsx)(n.code,{children:"web"})," section"]})]}),"\n",(0,o.jsx)(n.h3,{id:"find-the-controller-version",children:"Find the Controller Version"}),"\n",(0,o.jsxs)(n.p,{children:["It is essential to build your application with respect to the specification of your controller version, and ",(0,o.jsx)(n.a,{href:"https://github.com/openziti/edge-api#user-content-versioning",children:"the spec is versioned separately from the controller"}),"."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"GET /"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:'{\n    "data": {\n        "apiVersions": {\n            "edge": {\n                "v1": {\n                    "path": "/edge/v1"\n                }\n            }\n        },\n        "buildDate": "2021-04-23 18:09:47",\n        "revision": "fe826ed2ec0c",\n        "runtimeVersion": "go1.16.3",\n        "version": "v0.19.12"\n    },\n    "meta": {}\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"edge-management-api",children:"Edge Management API"}),"\n",(0,o.jsx)(n.p,{children:"The edge management API is used by clients that wish to configure a network and does not facilitate to interacting\nwith service for dialing (connecting) nor binding (hosting). The edge management API provides the ability to create\nnew identities, identities, policies, and other entities used to manage a network."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"/docs/reference/developer/api/edge-management-reference",children:"Explore the latest edge management API Reference"})}),"\n",(0,o.jsx)(n.h2,{id:"edge-client-api",children:"Edge Client API"}),"\n",(0,o.jsxs)(n.p,{children:["The edge client API is used by clients that wish to dial (connect) or bind (host) services. The services that the\nclients are allowed to interact with is defined by ",(0,o.jsx)(n.a,{href:"/docs/learn/core-concepts/security/authorization/policies/overview",children:"policies"}),". In order\nfor clients to use the client API they must first ",(0,o.jsx)(n.a,{href:"/docs/learn/core-concepts/security/authentication/auth",children:"authenticate"})," and\nobtain either a ",(0,o.jsx)(n.a,{href:"/docs/learn/core-concepts/security/sessions#full-vs-partial-authentication",children:"partial or fully authenticated"}),"\n",(0,o.jsx)(n.a,{href:"/docs/learn/core-concepts/security/sessions",children:"API Session"}),"."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"/docs/reference/developer/api/edge-client-reference",children:"Explore the latest edge client API Reference"})}),"\n",(0,o.jsx)(n.h2,{id:"edge-client--management-shared-capabilities",children:"Edge Client & Management Shared Capabilities"}),"\n",(0,o.jsxs)(n.p,{children:["The Client and Management APIs both follow the ",(0,o.jsx)(n.a,{href:"./shared-api-capabilities",children:"shared API capabilities"})," common on\nall Ziti APIs. Additionally, between the two the following endpoint paths are exposed on both."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"current-identity"})," - facilitates the","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"/edge/management/v1/current-identity/*"}),"\n",(0,o.jsx)(n.li,{children:"/edge/client/v1/current-api-session/*"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"current-api-session"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"/edge/client/v1/current-api-session/*"}),"\n",(0,o.jsx)(n.li,{children:"/edge/management/v1/current-api-session/*"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"configuring-the-controller-edge-apis",children:"Configuring the Controller Edge APIs"}),"\n",(0,o.jsxs)(n.p,{children:["In order for the edge client and management API to be available a controller must be configured to enable them. This\nrequires two configuration sections ",(0,o.jsx)(n.code,{children:"edge"})," and ",(0,o.jsx)(n.code,{children:"web"}),". The ",(0,o.jsx)(n.code,{children:"edge"})," section configures values that will affect  both the\nEdge client API and the edge management API. The ",(0,o.jsx)(n.code,{children:"web"})," section is used to configure and compose any of Ziti's\nAPIs, edge client and Management included, to listen on any combination of network interface and ports."]}),"\n",(0,o.jsx)(n.h3,{id:"controller-configuration-reference",children:"Controller Configuration Reference"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"/docs/reference/configuration/controller",children:"The controller configuration reference"})}),"\n",(0,o.jsx)(n.h4,{id:"edge-configuration-section",children:"Example Controller Edge Configuration Section"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"edge:\n  api:\n    #(optional, default 90s) Alters how frequently heartbeat and last activity values are persisted\n    # activityUpdateInterval: 90s\n    #(optional, default 250) The number of API Sessions updated for last activity per transaction\n    # activityUpdateBatchSize: 250\n    # sessionTimeout - optional, default 10m\n    # The number of minutes before an Edge API session will timeout. Timeouts are reset by\n    # API requests and connections that are maintained to Edge Routers\n    sessionTimeout: 30m\n    # address - required\n    # The default address (host:port) to use for enrollment for the client API. This value must match one of the addresses\n    # defined in a bind point's address field for the `edge-client` API in the web section.\n    address: 127.0.0.1:1280\n  # enrollment - required\n  # A section containing settings pertaining to enrollment.\n  enrollment:\n    # signingCert - required\n    # A identity configuration section that specifically makes use of the cert and key fields to define\n    # a signing certificate from the PKI that the Ziti environment is using to sign certificates. The signingCert.cert\n    # will be added to the /.well-known CA store that is used to bootstrap trust with the controller.\n    signingCert:\n      cert: ./ziti/etc/ca/intermediate/certs/intermediate.cert.pem\n      key: ./ziti/etc/ca/intermediate/private/intermediate.key.pem\n    # edgeIdentity - optional\n    # A section for identity enrollment specific settings\n    edgeIdentity:\n      # duration - optional, default 5m\n      # The length of time that a Ziti Edge Identity enrollment should remain valid. After\n      # this duration, the enrollment will expire and not longer be usable.\n      duration: 5m\n    # edgeRouter - Optional\n    # A section for edge router enrollment specific settings.\n    edgeRouter:\n      # duration - optional, default 5m\n      # The length of time that a edge router enrollment should remain valid. After\n      # this duration, the enrollment will expire and not longer be usable.\n      duration: 5m\n"})}),"\n",(0,o.jsx)(n.h4,{id:"web-configuration-section",children:"Example Controller Web Configuration Section"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"web"})," section of the controller is based off of the ",(0,o.jsx)(n.a,{href:"https://github.com/openziti/xweb",children:"xweb"})," library. xweb allows\na single configuration section to be used to compose multiple APIs across any number of network interfaces. Understanding\nthe xweb configuration format is essential for success with configuring the ",(0,o.jsx)(n.code,{children:"web"})," section in the controller."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:'# web - optional\n# Defines webListeners that will be hosted by the controller. Each webListener can host many APIs and be bound to many\n# bind points.\nweb:\n# name - required\n# Provides a name for this listener, used for logging output. Not required to be unique, but is highly suggested.\n- name: all-apis-localhost\n  # bindPoints - required\n  # One or more bind points are required. A bind point specifies an interface (interface:port string) that defines\n  # where on the host machine the webListener will listen and the address (host:port) that should be used to\n  # publicly address the webListener(i.e. mydomain.com, localhost, 127.0.0.1). This public address may be used for\n  # incoming address resolution as well as used in responses in the API.\n  bindPoints:\n  #interface - required\n  # A host:port string on which network interface to listen on. 0.0.0.0 will listen on all interfaces\n    - interface: 127.0.0.1:1280\n\n      # address - required\n      # The public address that external incoming requests will be able to resolve. Used in request processing and\n      # response content that requires full host:port/path addresses.\n      address: 127.0.0.1:1280\n\n      # newAddress - optional\n      # A host:port string which will be sent out as an HTTP header "ziti-new-address" if specified. If the header\n      # is present, clients should update location configuration to immediately use the new address for future\n      # connections. The value of newAddress must be resolvable both via DNS and validate via certificates\n      newAddress: localhost:1280\n  # identity - optional\n  # Allows the webListener to have a specific identity instead of defaulting to the root `identity` section.\n  #    identity:\n  #      cert:                 ${ZITI_SOURCE}/ziti/etc/ca/intermediate/certs/ctrl-client.cert.pem\n  #      server_cert:          ${ZITI_SOURCE}/ziti/etc/ca/intermediate/certs/ctrl-server.cert.pem\n  #      key:                  ${ZITI_SOURCE}/ziti/etc/ca/intermediate/private/ctrl.key.pem\n  #      ca:                   ${ZITI_SOURCE}/ziti/etc/ca/intermediate/certs/ca-chain.cert.pem\n  # options - optional\n  # Allows the specification of webListener level options - mainly dealing with HTTP/TLS settings. These options are\n  # used for all http servers started by the current webListener.\n  options:\n  # idleTimeout - optional, default 5000ms\n  # The maximum amount of idle time in milliseconds allowed for pipelined HTTP requests. Setting this too high\n  # can cause resources on the host to be consumed as clients remain connected and idle. Lowering this value\n  # will cause clients to reconnect on subsequent HTTPs requests.\n  idleTimeout: 5000ms  #http timeouts, new\n\n  # readTimeout - optional, default 5000ms\n  # The maximum amount of time in milliseconds http servers will wait to read the first incoming requests. A higher\n  # value risks consuming resources on the host with clients that are acting bad faith or suffering from high latency\n  # or packet loss. A lower value can risk losing connections to high latency/packet loss clients.\n\n  readTimeout: 5000ms\n  # writeTimeout - optional, default 10000ms\n  # The total maximum time in milliseconds that the http server will wait for a single requests to be received and\n  # responded too. A higher value can allow long running requests to consume resources on the host. A lower value\n  # can risk ending requests before the server has a chance to respond.\n\n  writeTimeout: 100000ms\n  # minTLSVersion - optional, default TSL1.2\n  # The minimum version of TSL to support\n\n  minTLSVersion: TLS1.2\n  # maxTLSVersion - optional, default TSL1.3\n  # The maximum version of TSL to support\n\n  maxTLSVersion: TLS1.3\n  # apis - required\n  # Allows one or more APIs to be bound to this webListener\n  apis:\n  # binding - required\n  # Specifies an API to bind to this webListener. Built-in APIs are\n  #   - health-checks\n  #   - edge-management\n  #   - edge-client\n  #   - fabric-management\n    - binding: health-checks\n      options: { }\n    - binding: fabric\n    - binding: edge-management\n      # options - variable optional/required\n      # This section is used to define values that are specified by the API they are associated with.\n      # These settings are per API. The example below is for the `edge-api` and contains both optional values and\n      # required values.\n      options: { }\n    - binding: edge-client\n      options: { }\n'})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(96540);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);