"use strict";(self.webpackChunkdocusaurus_3=self.webpackChunkdocusaurus_3||[]).push([[832],{4006:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"learn/core-concepts/security/authentication/external-jwt-signers","title":"External JWT Signers","description":"External JWT Signers allow external identity providers to facilitate authentication with a Ziti network. External","source":"@site/docs/learn/core-concepts/security/authentication/50-external-jwt-signers.md","sourceDirName":"learn/core-concepts/security/authentication","slug":"/learn/core-concepts/security/authentication/external-jwt-signers","permalink":"/docs/learn/core-concepts/security/authentication/external-jwt-signers","draft":false,"unlisted":false,"editUrl":"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/learn/core-concepts/security/authentication/50-external-jwt-signers.md","tags":[],"version":"current","sidebarPosition":50,"frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Certificate Management","permalink":"/docs/learn/core-concepts/security/authentication/certificate-management"},"next":{"title":"Identities","permalink":"/docs/learn/core-concepts/security/authentication/identities"}}');var r=t(74848),a=t(28453);const s={},c="External JWT Signers",d={},l=[{value:"Usage",id:"usage",level:2},{value:"x509 Certificate",id:"x509-certificate",level:3},{value:"JWKS Endpoint",id:"jwks-endpoint",level:3},{value:"JWT Validation",id:"jwt-validation",level:2},{value:"Creation",id:"creation",level:2},{value:"External Authentication URL &amp; Client Authentication",id:"external-authentication-url--client-authentication",level:2}];function o(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"external-jwt-signers",children:"External JWT Signers"})}),"\n",(0,r.jsxs)(n.p,{children:["External JWT Signers allow external identity providers to facilitate authentication with a Ziti network. External\nJWT Signers can be added as a static x509 certificate or via a JWKS endpoint. Authenticating clients can provide\na JWT as a primary authentication mechanism to obtain an ",(0,r.jsx)(n.a,{href:"/docs/learn/core-concepts/security/sessions#api-session",children:"API Session"}),". Additionally, the JWT can be required on\nall REST API calls if desired by using an Authentication Policy that requires it as a secondary factor."]}),"\n",(0,r.jsxs)(n.p,{children:["JWT is described in ",(0,r.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc7519",children:"RFC 7519"})," and on ",(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/JSON_Web_Token",children:"Wikipedia"}),".\nX509 PKI is described in ",(0,r.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc5280",children:"RFC 5280"})," an on ",(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/X.509",children:"Wikipedia"})]}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(n.p,{children:["External JWT Signers are used in conjunction with Authentication Policies to allow identities to authenticate using a\nJWT. External JWT Signers can be configured to match an identity through the ",(0,r.jsx)(n.code,{children:"claimsProperty"})," and ",(0,r.jsx)(n.code,{children:"useExternalId"}),"\nfields. ",(0,r.jsx)(n.code,{children:"claimsProperty"})," can change which field in the JWT is matched to the ",(0,r.jsx)(n.code,{children:"id"})," or ",(0,r.jsx)(n.code,{children:"externalId"})," on an identity.\n",(0,r.jsx)(n.code,{children:"useExternalId"})," when true will match the ",(0,r.jsx)(n.code,{children:"claimsProperty"})," to an identity's ",(0,r.jsx)(n.code,{children:"externalId"})," field. If false, it will match\nto the ",(0,r.jsx)(n.code,{children:"id"})," field."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.em,{children:["Note: ",(0,r.jsx)(n.code,{children:"externalId"})," values on identities are enforced to be unique."]})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"claimsProperty"})," can contain JWT standard claims or private claims. An example usage would be an ",(0,r.jsx)(n.code,{children:"email"})," JWT private\nclaim and Ziti identities with ",(0,r.jsx)(n.code,{children:"externalId"})," set to email addresses."]}),"\n",(0,r.jsx)(n.h3,{id:"x509-certificate",children:"x509 Certificate"}),"\n",(0,r.jsx)(n.p,{children:"If the JWT provider has a static x509 certificate, it is possible define an External JWT Signer using the PEM encoded\npublic certificate of the signer. If the JWT provider has JWKS endpoint support it is strongly recommended to create\nan External JWT Signer using the JWKS endpoint. External JWT Signers configured with a static x509 certificate will\nneed maintenance during key rotation and certificate expiration. For these operations the edge management API\ncan be used for external automation."}),"\n",(0,r.jsx)(n.h3,{id:"jwks-endpoint",children:"JWKS Endpoint"}),"\n",(0,r.jsxs)(n.p,{children:["JSON Web Key Sets (JWKS) is defined in ",(0,r.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc7517#section-5",children:"RFC7517 Section 5"}),"\nand is used by many popular IdPs (Auth0, Okta) in order to enable external JWT verification. External JWT Signers\nconfigured with a JWKS endpoint allows an identity provider to rotate keys and bridge signer certificate expiration\nwindows."]}),"\n",(0,r.jsx)(n.h2,{id:"jwt-validation",children:"JWT Validation"}),"\n",(0,r.jsx)(n.p,{children:"External JTW Signers are used to validate JWTs for authentication. This validation requires the following:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["the ",(0,r.jsx)(n.code,{children:"iss"})," field on the JWT must match the ",(0,r.jsx)(n.code,{children:"issuer"})," field on the External JWT Signer"]}),"\n",(0,r.jsxs)(n.li,{children:["the ",(0,r.jsx)(n.code,{children:"aud"})," field on the JWT must match the ",(0,r.jsx)(n.code,{children:"audience"})," field on the External JWT Signer"]}),"\n",(0,r.jsxs)(n.li,{children:["the ",(0,r.jsx)(n.code,{children:"sub"})," or field defined by ",(0,r.jsx)(n.code,{children:"claimsProperty"})," must match the ",(0,r.jsx)(n.code,{children:"id"})," field on an identity (or ",(0,r.jsx)(n.code,{children:"externalid"})," if ",(0,r.jsx)(n.code,{children:"useExternal"})," is true)"]}),"\n",(0,r.jsx)(n.li,{children:"the JWT must be signed by the x509 certificate or a JWK from the JWKS endpoint defined on the External JWT Signer"}),"\n",(0,r.jsxs)(n.li,{children:["the JWT ",(0,r.jsx)(n.code,{children:"kid"})," must match the External JWT ",(0,r.jsx)(n.code,{children:"kid"})," field for x509 certificates or the ",(0,r.jsx)(n.code,{children:"kid"})," in a JWKS response"]}),"\n",(0,r.jsx)(n.li,{children:"the JWT must not be expired"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"creation",children:"Creation"}),"\n",(0,r.jsxs)(n.p,{children:["An External JWT Signer that uses a private ",(0,r.jsx)(n.code,{children:"email"})," claim and matches on ",(0,r.jsx)(n.code,{children:"externalId"})," with a JWKS endpoint can\nbe created as follows:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"POST /edge/management/v1/ext-jwt-signers"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:'{\n  "name": "My External JWT Signer",\n  "enabled": true,\n  "issuer": "my-issuer",\n  "audience": "my-audience",\n  "jwksEndpoint": "https://example.com/.well-known/jwks.json",\n  "claimsProperty": "email",\n  "useExternalId": true\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["An External JWT Signer that uses the ",(0,r.jsx)(n.code,{children:"sub"})," claim and matches on ",(0,r.jsx)(n.code,{children:"id"})," with a x509 certificate can\nbe created as follows:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"POST /edge/management/v1/ext-jwt-signers"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:'{\n  "name": "My External JWT Signer",\n  "enabled": true,\n  "issuer": "my-issuer",\n  "audience": "my-audience",\n  "kid": "2gh80220",\n  "certPem": "-----BEGIN CERTIFICATE-----\\nMII...\\n-----END CERTIFICATE-----\\n"\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"external-authentication-url--client-authentication",children:"External Authentication URL & Client Authentication"}),"\n",(0,r.jsxs)(n.p,{children:["Unauthenticated clients can enumerate External JWT Signers that have an ",(0,r.jsx)(n.code,{children:"externalAuthUrl"})," property. Clients will\nreceive the name of the External JWT Signer and the ",(0,r.jsx)(n.code,{children:"externalAuthUrl"})," only. This information can allow clients\nto initiate client authentication to the target identity provider."]}),"\n",(0,r.jsx)(n.p,{children:"Example Client External JWT Signer response:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"GET /edge/client/v1/external-jwt-signers"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:'{\n  "data": [\n    {\n      "_links": {\n        "self": {\n          "href": "./external-jwt-signers/eZjzX3U1u"\n        }\n      },\n      "id": "eZjzX3U1u",\n      "name": "my-ext-jwt-signer",\n      "externalAuthUrl": "https://my-site/authenticate"\n    }\n  ],\n  "meta": {}\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var i=t(96540);const r={},a=i.createContext(r);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);