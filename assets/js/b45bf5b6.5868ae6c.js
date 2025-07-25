"use strict";(self.webpackChunkdocusaurus_3=self.webpackChunkdocusaurus_3||[]).push([[9739],{96160:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>o});const a=JSON.parse('{"id":"learn/core-concepts/security/authentication/password-management","title":"Password Management","description":"For identities using username password (UPDB) authenticators the following actions are supported:","source":"@site/docs/learn/core-concepts/security/authentication/5-password-management.md","sourceDirName":"learn/core-concepts/security/authentication","slug":"/learn/core-concepts/security/authentication/password-management","permalink":"/docs/learn/core-concepts/security/authentication/password-management","draft":false,"unlisted":false,"editUrl":"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/learn/core-concepts/security/authentication/5-password-management.md","tags":[],"version":"current","lastUpdatedAt":1753336678000,"sidebarPosition":5,"frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Authentication","permalink":"/docs/learn/core-concepts/security/authentication/auth"},"next":{"title":"3rd Party CAs","permalink":"/docs/learn/core-concepts/security/authentication/third-party-cas"}}');var i=t(74848),s=t(28453);const r={},c="Password Management",d={},o=[{value:"Administrative Password Reset",id:"administrative-password-reset",level:2},{value:"Ziti CLI",id:"ziti-cli",level:3},{value:"Management API",id:"management-api",level:3},{value:"Client Password Change",id:"client-password-change",level:2},{value:"Ziti CLI",id:"ziti-cli-1",level:3},{value:"Client or Management API",id:"client-or-management-api",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"password-management",children:"Password Management"})}),"\n",(0,i.jsx)(n.p,{children:"For identities using username password (UPDB) authenticators the following actions are supported:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"administrative password resets"}),"\n",(0,i.jsx)(n.li,{children:"client initiated password rotation"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"administrative-password-reset",children:"Administrative Password Reset"}),"\n",(0,i.jsxs)(n.p,{children:["Passwords may be reset via the ",(0,i.jsx)(n.a,{href:"/docs/reference/developer/api/edge-management-reference",children:"edge management API"})," by an administrative client."]}),"\n",(0,i.jsx)(n.h3,{id:"ziti-cli",children:"Ziti CLI"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"ziti edge update authenticator updb --identity <identityIdOrName> -p <newPassword>"})}),"\n",(0,i.jsx)(n.h3,{id:"management-api",children:"Management API"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"POST /edge/management/v1/authenticators/<id>"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:'{\n    "password": "<new-password>"\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"client-password-change",children:"Client Password Change"}),"\n",(0,i.jsxs)(n.p,{children:["Passwords may be reset via the ",(0,i.jsx)(n.a,{href:"/docs/reference/developer/api/#edge-management-api",children:"edge management API"})," or\n",(0,i.jsx)(n.a,{href:"/docs/reference/developer/api/#edge-client-api",children:"edge client API"})," by the currently authenticated client."]}),"\n",(0,i.jsx)(n.h3,{id:"ziti-cli-1",children:"Ziti CLI"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"ziti edge update authenticator updb -c <currentPassword> -n <newPassword>"})}),"\n",(0,i.jsx)(n.h3,{id:"client-or-management-api",children:"Client or Management API"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"POST /edge/client/v1/current-identity/authenticators/<id>"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:'{\n    "password": "<new-password>"\n}\n'})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var a=t(96540);const i={},s=a.createContext(i);function r(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);