"use strict";(self.webpackChunkdocusaurus_3=self.webpackChunkdocusaurus_3||[]).push([[5700],{73948:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"learn/core-concepts/security/enrollment","title":"Enrollment","description":"Enrollment is the process of some Edge client or edge router associating itself with a Ziti network. Client enrollment","source":"@site/docs/learn/core-concepts/security/enrollment.md","sourceDirName":"learn/core-concepts/security","slug":"/learn/core-concepts/security/enrollment","permalink":"/docs/learn/core-concepts/security/enrollment","draft":false,"unlisted":false,"editUrl":"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/learn/core-concepts/security/enrollment.md","tags":[],"version":"current","lastUpdatedAt":1743027175000,"frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Connection Security","permalink":"/docs/learn/core-concepts/security/connection-security"},"next":{"title":"Session Types","permalink":"/docs/learn/core-concepts/security/sessions"}}');var r=t(74848),l=t(28453);const s={},a="Enrollment",o={},c=[{value:"Routers",id:"routers",level:2},{value:"Router Enrollment Extension",id:"router-enrollment-extension",level:3},{value:"Clients",id:"clients",level:2},{value:"OTT Enrollment",id:"ott-enrollment",level:3},{value:"Create",id:"create",level:4},{value:"Ziti CLI",id:"ziti-cli",level:5},{value:"Edge Management API",id:"edge-management-api",level:4},{value:"Read",id:"read",level:3},{value:"Ziti CLI",id:"ziti-cli-1",level:4},{value:"Edge Management API",id:"edge-management-api-1",level:4},{value:"OTT CA Enrollment",id:"ott-ca-enrollment",level:3},{value:"Create",id:"create-1",level:4},{value:"Edge Management API",id:"edge-management-api-2",level:5},{value:"Auto CA Enrollment",id:"auto-ca-enrollment",level:3},{value:"Client Re-Enrollment",id:"client-re-enrollment",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"enrollment",children:"Enrollment"})}),"\n",(0,r.jsx)(n.p,{children:"Enrollment is the process of some Edge client or edge router associating itself with a Ziti network. Client enrollment\nresults in the creation of an identity or associating security credentials with a pre-provisioned identity.\nZiti Router enrollment is exclusively associating security credentials with a pre-provisioned Edge Router."}),"\n",(0,r.jsx)(n.p,{children:"Edge clients \"learn\" the controller's address and port when they enroll, so it is necessary to re-enroll or replace the identity if the controller's advertised address or port changes."}),"\n",(0,r.jsx)(n.h2,{id:"routers",children:"Routers"}),"\n",(0,r.jsxs)(n.p,{children:["Upon creation of an Edge Router, enrollment details in the form of a JWT that acts as a one-time-token become\navailable in the ",(0,r.jsx)(n.code,{children:"enrollmentJWT"})," field."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Create:"}),"\n",(0,r.jsx)(n.code,{children:"POST /edge/management/v1/edge-routers"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:'{\n  "name": "test3"\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Get:"}),"\n",(0,r.jsx)(n.code,{children:"GET /edge/management/v1/edge-routers/PYvobLGzj"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:'{\n    "data": {\n        ...,\n        "name": "test3",\n        "enrollmentJwt": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbSI6ImVyb3R0IiwiZXhwIjoxNjYwMDU4ODU5LCJpc3MiOiJodHRwczovLzEyNy4wLjAuMToxMjgwIiwianRpIjoiYjkzZjg2NTgtZGQ3ZC00NTc4LWJkYTYtMmZhZWNlZjkyMTc3Iiwic3ViIjoiUFl2b2JMR3pqIn0.UN6QiifUfCMUvzsKwjSUarl9iWyOr1zsaa_6VzNTRn7EQ_PjtHFMm9QEjj8ErtkNIbyh-vaVLZL-TPOAIZsaQX2Ye5k8-M7dbWGiQ35DbgQaJSWLMJ0xzazHYBvhZvZ9Wc5F96HKA_qTGiSq5Lsm3WraAffepEqCe_F_HwBwjBPrsgO9U23pKuoz1X8pQbAj95yoz6rBNWo63mlZDeDn7McEiJLY0i7EyPQ3paEjJ0sSntVjfmZ7aPgThoG2HCYbhvj_DkXD_HRSwMxoQHR1yIA4sW4ukdQ_S3nVMurLOG06d0VSUzlIecQSuJT8XV56AhqZ-ZNIEzp-bp2YaL1FlA",\n        "enrollmentToken": "b93f8658-dd7d-4578-bda6-2faecef92177",\n        ...\n        "isVerified": false,\n        ...\n    },\n    "meta": {}\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["To enroll a router, deliver the ",(0,r.jsx)(n.code,{children:"enrollmentJWT"})," to the host that will run the edge router and perform enrollment via:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"ziti router enroll -j <jwt_path>"})}),"\n",(0,r.jsx)(n.h3,{id:"router-enrollment-extension",children:"Router Enrollment Extension"}),"\n",(0,r.jsx)(n.p,{children:"Routers will automatically maintain their enrollment by refreshing their certificates seven days before they expire."}),"\n",(0,r.jsx)(n.h2,{id:"clients",children:"Clients"}),"\n",(0,r.jsx)(n.p,{children:"Client enroll in one of two major categories:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["pre-provisioned - identities are created before the client attempts to run and are provided with one-time-tokens to enroll","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"OTT, OTT CA"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["post-provisioned - an identity is created during enrollment","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Auto CA"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"ott-enrollment",children:"OTT Enrollment"}),"\n",(0,r.jsx)(n.p,{children:"OTT Enrollment involves creating an identity and then delivering the enrollment JWT to client software that can then\ncomplete enrollment."}),"\n",(0,r.jsx)(n.h4,{id:"create",children:"Create"}),"\n",(0,r.jsx)(n.h5,{id:"ziti-cli",children:"Ziti CLI"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"ziti edge create identity [device|service|user] test-user10 -j ./my.token.jwt"})}),"\n",(0,r.jsx)(n.h4,{id:"edge-management-api",children:"Edge Management API"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"POST /edge/management/v1/identities"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:'{\n  "name": "test-user10",\n  "type": "User",\n  "isAdmin": false,\n  "roleAttributes": [\n    "dial"\n  ],\n  "enrollment": {\n    "ott": true\n  }\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"read",children:"Read"}),"\n",(0,r.jsx)(n.h4,{id:"ziti-cli-1",children:"Ziti CLI"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"ziti edge list identities 'id=\"-ItUkLGKUE\"'"})}),"\n",(0,r.jsx)(n.h4,{id:"edge-management-api-1",children:"Edge Management API"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"GET /edge/management/v1/identities/-ItUkLGKUE"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:'{\n    "data": {\n        ...\n        "id": "-ItUkLGKUE",\n        "tags": {},\n       ...\n        "enrollment": {\n            "ott": {\n                "expiresAt": "2022-08-09T15:37:16.619Z",\n                "id": "uFtU28GKj",\n                "jwt": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbSI6Im90dCIsImV4cCI6MTY2MDA1OTQzNiwiaXNzIjoiaHR0cHM6Ly8xMjcuMC4wLjE6MTI4MCIsImp0aSI6IjdjM2VmOWFkLTE2ZjAtNDk4OS05MDQ3LTNmYzFmYTE5NDgyYyIsInN1YiI6Ii1JdFVrTEdLVUUifQ.JnLlHP9wdMlfgteAf4Y-KMnxRv_00EOhEtRRmMABg_dD7xRK2RQt-bwt5rkosfgghZPR4jppuR9Prg1F1skf7JGa9Z-CmEIVvmHB8LAT6AvNnRmfkNBioD4g-Q0LP1o_xZyfePUslSxwNYPevzYYdCwgXK-TuIW34sCirX1edZ25eRtlnTUq9T0cgqMyVCEtX03WkAhb8C_TLIzhWxCwxxJTY3lgOqwuMXQEqLrWFiuG6Q1aIAA8hjh57043z5a1GQ8sUGIWP0U7YuXBWzl50VY4fenrstaaanweQLDPCZlZGPKh08mPCAGAc4Fun10hBzYaezJXGb8BpEPKXrtmLA",\n                "token": "7c3ef9ad-16f0-4989-9047-3fc1fa19482c"\n            }\n        },\n        ...\n    },\n    "meta": {}\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Alternatively, enrollments for an identity can be reviewed at ",(0,r.jsx)(n.code,{children:"/edge/management/v1/identities/<id>/enrollments"})," or\n",(0,r.jsx)(n.code,{children:"/edge/management/v1/enrollments"})," or ",(0,r.jsx)(n.code,{children:"ziti edge list enrollments"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"ott-ca-enrollment",children:"OTT CA Enrollment"}),"\n",(0,r.jsxs)(n.p,{children:["OTT CA Enrollment requires that the enrolling client also has an existing client certificate signed by a\n",(0,r.jsx)(n.a,{href:"./authentication/third-party-cas",children:"3rd Party CA"}),". When creating an identity the ",(0,r.jsx)(n.code,{children:"id"})," of the target\n",(0,r.jsx)(n.a,{href:"./authentication/third-party-cas",children:"3rd Party CA"})," is specified."]}),"\n",(0,r.jsx)(n.h4,{id:"create-1",children:"Create"}),"\n",(0,r.jsx)(n.h5,{id:"edge-management-api-2",children:"Edge Management API"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"POST /edge/management/v1/identities"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:'{\n  "name": "test-user10",\n  "type": "User",\n  "isAdmin": false,\n  "roleAttributes": [\n    "dial"\n  ],\n  "enrollment": {\n    "ottca": "<ott-ca-id>"\n  }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["An enrollment JWT can be retrieved in the same manner as ",(0,r.jsx)(n.a,{href:"#ott-enrollment",children:"OTT Enrollment"})]}),"\n",(0,r.jsx)(n.h3,{id:"auto-ca-enrollment",children:"Auto CA Enrollment"}),"\n",(0,r.jsxs)(n.p,{children:["Auto CA enrollment allows a ",(0,r.jsx)(n.a,{href:"./authentication/third-party-cas",children:"3rd Party CA"})," to have clients enroll with a\nZiti network without first creating an identity or distributing a JWT enrollment token. Create a\n",(0,r.jsx)(n.a,{href:"./authentication/third-party-cas",children:"3rd Party CA"})," and ensure that ",(0,r.jsx)(n.code,{children:"isAutoCaEnrollmentEnabled"})," is set to ",(0,r.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The name of enrolling clients is controlled by the ",(0,r.jsx)(n.code,{children:"identityNameFormat"})," of the ",(0,r.jsx)(n.a,{href:"./authentication/third-party-cas",children:"3rd Party CA"}),".\nThe format support a number of replacement strings:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"[caName]"})," - the Ziti ",(0,r.jsx)(n.code,{children:"name"})," of the ",(0,r.jsx)(n.a,{href:"./authentication/third-party-cas",children:"3rd Party CA"})," that validates the enrolling certificate"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"[caId]"})," - the Ziti ",(0,r.jsx)(n.code,{children:"id"})," of the ",(0,r.jsx)(n.a,{href:"./authentication/third-party-cas",children:"3rd Party CA"})," that validates the enrolling certificate"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"[commonName]"})," - the common name of the enrolling certificate"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"[requestedName]"})," - clients can submit a requested name during enrollment"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"[identityId]"})," - the ",(0,r.jsx)(n.code,{children:"id"})," of the created identity"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The default format is ",(0,r.jsx)(n.code,{children:"[caName] - [commonName]"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Identity names are unique and if a collision occurs, incrementing numbers are appended."}),"\n",(0,r.jsx)(n.h3,{id:"client-re-enrollment",children:"Client Re-Enrollment"}),"\n",(0,r.jsxs)(n.p,{children:["Clients may request to extend enrollments that generated x509 certificates if the client certificate was issued by\nZiti. If the client's certificate was issued by a ",(0,r.jsx)(n.a,{href:"./authentication/third-party-cas",children:"3rd Party CA"}),", the\nclient certificate renewal must be handled outside of Ziti."]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var i=t(96540);const r={},l=i.createContext(r);function s(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);