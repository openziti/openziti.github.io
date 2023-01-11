"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[4663],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=i,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},10316:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const o={},a="MFA TOTP",l={unversionedId:"learn/core-concepts/security/authentication/totp",id:"learn/core-concepts/security/authentication/totp",title:"MFA TOTP",description:"Ziti authentication allows for n-factors of authentication - meaning that it is possible to support 1FA, 2FA, ...nFA",source:"@site/docs/learn/core-concepts/security/authentication/70-totp.md",sourceDirName:"learn/core-concepts/security/authentication",slug:"/learn/core-concepts/security/authentication/totp",permalink:"/docs/learn/core-concepts/security/authentication/totp",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/learn/core-concepts/security/authentication/70-totp.md",tags:[],version:"current",sidebarPosition:70,frontMatter:{},sidebar:"docsSidebar",previous:{title:"Identities",permalink:"/docs/learn/core-concepts/security/authentication/identities"},next:{title:"Authorization",permalink:"/docs/learn/core-concepts/security/authorization/auth"}},c={},s=[{value:"Enforcement",id:"enforcement",level:2},{value:"Authentication Policies",id:"authentication-policies",level:3},{value:"MFA Posture Check",id:"mfa-posture-check",level:3},{value:"Enrollment",id:"enrollment",level:2},{value:"Enrollment Status",id:"enrollment-status",level:3},{value:"Request:",id:"request",level:4},{value:"Responses:",id:"responses",level:4},{value:"Restart Enrollment",id:"restart-enrollment",level:3},{value:"Start Enrollment",id:"start-enrollment",level:3},{value:"Verify &amp; Complete Enrollment",id:"verify--complete-enrollment",level:3},{value:"QR Code",id:"qr-code",level:3},{value:"Removing/Unenrolling",id:"removingunenrolling",level:3},{value:"Client Removal",id:"client-removal",level:4},{value:"Administrative Removal",id:"administrative-removal",level:4},{value:"Viewing Recovery Codes",id:"viewing-recovery-codes",level:3},{value:"Regenerating Recovery Codes",id:"regenerating-recovery-codes",level:3}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"mfa-totp"},"MFA TOTP"),(0,i.kt)("p",null,'Ziti authentication allows for n-factors of authentication - meaning that it is possible to support 1FA, 2FA, ...nFA\nauthentication. One common setup for multi-factor authentication (MFA) is time-based one time passwords (TOTP).\nTOTP is commonly see in "authenticator" application (e.g. Google Authenticator, Authy, Microsoft Authenticator, etc).\nAll "authenticator" applications support the same core ',(0,i.kt)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc6238"},"TOTP RFC 6238"),"\nspecification."),(0,i.kt)("h2",{id:"enforcement"},"Enforcement"),(0,i.kt)("p",null,"Ziti allows individual clients to enroll or un-enroll from MFA TOTP. Administrators can enforce TOTP enrollment through\n",(0,i.kt)("a",{parentName:"p",href:"./authentication-policies"},"Authentication Policies")," and ",(0,i.kt)("a",{parentName:"p",href:"../authorization/posture-checks#mfa"},"Posture Checks"),"."),(0,i.kt)("h3",{id:"authentication-policies"},"Authentication Policies"),(0,i.kt)("p",null,"When enforced at authentication via ",(0,i.kt)("a",{parentName:"p",href:"./authentication-policies"},"Authentication Policies"),", clients are unable to\ntransition from ",(0,i.kt)("a",{parentName:"p",href:"./auth#full-vs-partial-authentication"},"partially authenticated to fully authenticated"),"\nwithout enrolling in MFA TOTP - leaving them unable to list services or connect to them. "),(0,i.kt)("h3",{id:"mfa-posture-check"},"MFA Posture Check"),(0,i.kt)("p",null,"When enforced through the ",(0,i.kt)("a",{parentName:"p",href:"../authorization/posture-checks#mfa"},"MFA Posture Check"),", clients still must become fully\nauthenticated according to their authentication policy, however, access to services is determined by their policy and\nposture check access. If a service is granted only through a service policy that has an MFA posture check, they will\nnot be able to connect to that service without enrolling in MFA TOTP."),(0,i.kt)("h2",{id:"enrollment"},"Enrollment"),(0,i.kt)("p",null,"High level flow:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A client initiates enrollment via ",(0,i.kt)("inlineCode",{parentName:"li"},"POST /edge/client/v1/current-identity/mfa")),(0,i.kt)("li",{parentName:"ul"},"The controller returns recovery codes and a TOTP secret"),(0,i.kt)("li",{parentName:"ul"},"A client uses the TOTP secret to generate a TOTP code"),(0,i.kt)("li",{parentName:"ul"},"A client submits the TOTP code via ",(0,i.kt)("inlineCode",{parentName:"li"},"POST /edge/client/v1/current-identity/mfa/verify")),(0,i.kt)("li",{parentName:"ul"},"The controller saves the MFA TOTP configuration, subsequent authentication attempts will require an MFA TOTP code")),(0,i.kt)("h3",{id:"enrollment-status"},"Enrollment Status"),(0,i.kt)("p",null,"Enrollment status can be checked by the client themselves through the following requests:"),(0,i.kt)("h4",{id:"request"},"Request:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"GET /edge/client/v1/current-identity/mfa")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<empty body>\n")),(0,i.kt)("h4",{id:"responses"},"Responses:"),(0,i.kt)("p",null,"If enrolled:\n",(0,i.kt)("inlineCode",{parentName:"p"},"HTTP 200 ok")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "isVerified": true\n}\n')),(0,i.kt)("p",null,"If enrollment started:\n",(0,i.kt)("inlineCode",{parentName:"p"},"HTTP 200 ok")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "isVerified": true,\n  "recoveryCodes": ["code1", "..."],\n  "provisioningUrl": "otpauth://totp/<identity-name>?issuer=ziti.dev&secret=<secret>"\n}\n')),(0,i.kt)("p",null,"If enrollment has not been started:\n",(0,i.kt)("inlineCode",{parentName:"p"},"HTTP 404 Not Found")),(0,i.kt)("p",null,"Fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isVerified")," - true/false status for enrollment. If ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," only this value is returned. If ",(0,i.kt)("inlineCode",{parentName:"li"},"false")," the current enrollment information is provided"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"recoveryCodes")," - an array of one-time use recovery codes that may be used in place of a TOTP code during authentication, only shown while enrollment has not been completed"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"provisioningUrl")," - an ",(0,i.kt)("inlineCode",{parentName:"li"},"otpauth")," url used by authenticator applications, normally shown as a QR code")),(0,i.kt)("h3",{id:"restart-enrollment"},"Restart Enrollment"),(0,i.kt)("p",null,"If enrollment has been started but not completed a ",(0,i.kt)("inlineCode",{parentName:"p"},"DELETE /edge/client/v1/current-identity/mfa")," should be used to\nabandon the unfinished enrollment and a new enrollment started."),(0,i.kt)("h3",{id:"start-enrollment"},"Start Enrollment"),(0,i.kt)("p",null,"Enrollment may be started by performing a ",(0,i.kt)("inlineCode",{parentName:"p"},"POST /edge/client/v1/current-identity/mfa")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"{}")," as the body."),(0,i.kt)("h3",{id:"verify--complete-enrollment"},"Verify & Complete Enrollment"),(0,i.kt)("p",null,"Enrolment is completed by verifying the secret has been received by providing a currently valid TOTP code. A recovery\ncodes are not treated as a valid value."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"POST /edge/client/v1/current-identity/mfa/verify")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": "<totp-code>"\n}\n')),(0,i.kt)("h3",{id:"qr-code"},"QR Code"),(0,i.kt)("p",null,"To aid in enrollment, the current enrollment's ",(0,i.kt)("inlineCode",{parentName:"p"},"provisioningUrl")," may be retrieved as a QR code. As long as an outstanding\nMFA TOTP enrollment is active an image is available at: ",(0,i.kt)("inlineCode",{parentName:"p"},"GET /edge/client/v1/current-identity/mfa/qr-code")),(0,i.kt)("h3",{id:"removingunenrolling"},"Removing/Unenrolling"),(0,i.kt)("p",null,"MFA TOTP can be removed by an administrator at any time on behalf of a client. Clients may remove MFA TOTP enrollment\nfrom their account as long as they have access to a recovery code or TOPT code."),(0,i.kt)("h4",{id:"client-removal"},"Client Removal"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"DELETE /edge/client/v1/current-identity/mfa")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": "<totp-or-recovery-code>"\n}\n')),(0,i.kt)("h4",{id:"administrative-removal"},"Administrative Removal"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"DELETE /edge/management/v1/identities/<id>/mfa")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<empty body>>\n")),(0,i.kt)("h3",{id:"viewing-recovery-codes"},"Viewing Recovery Codes"),(0,i.kt)("p",null,"At any time the current valid list of recovery codes may be viewed by the client by issuing the following request:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"GET /edge/client/v1/current-identity/mfa/recovery-codes")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": "<totp-or-recovery-code>"\n}\n')),(0,i.kt)("h3",{id:"regenerating-recovery-codes"},"Regenerating Recovery Codes"),(0,i.kt)("p",null,"At any time the current valid list of recovery codes may be replaced by the client by issuing the following request:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"POST /edge/client/v1/current-identity/mfa/recovery-codes")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": "<totp-or-recovery-code>"\n}\n')))}p.isMDXComponent=!0}}]);