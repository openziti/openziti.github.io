"use strict";(self.webpackChunkdocusaurus_3=self.webpackChunkdocusaurus_3||[]).push([[1680],{57047:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"guides/hsm/hsmIndex","title":"Hardware Security Modules","description":"A hardware security module (HSM) is a physical piece of equipment which is designed specifically to protect cryptographic keys","source":"@site/docs/guides/hsm/index.md","sourceDirName":"guides/hsm","slug":"/guides/hsm/","permalink":"/docs/guides/hsm/","draft":false,"unlisted":false,"editUrl":"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/guides/hsm/index.md","tags":[],"version":"current","lastUpdatedAt":1743027175000,"frontMatter":{"id":"hsmIndex","title":"Hardware Security Modules"},"sidebar":"docsSidebar","previous":{"title":"Troubleshooting","permalink":"/docs/guides/external-auth/ziti-cli"},"next":{"title":"SoftHSMv2","permalink":"/docs/guides/hsm/softhsm"}}');var n=i(74848),a=i(28453);const r={id:"hsmIndex",title:"Hardware Security Modules"},o=void 0,c={},d=[{value:"Why an HSM",id:"why-an-hsm",level:2},{value:"Enabling a Ziti Endpoint Using an HSM",id:"enabling-a-ziti-endpoint-using-an-hsm",level:2},{value:"Quickstarts",id:"quickstarts",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h2:"h2",p:"p",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"A hardware security module (HSM) is a physical piece of equipment which is designed specifically to protect cryptographic keys\r\nand aid with cryptographical processing. HSMs are designed to manage sensitive information and are generally able to be\r\nconnected and disconnected from a computer trying to use the HSM."}),"\n",(0,n.jsx)(t.h2,{id:"why-an-hsm",children:"Why an HSM"}),"\n",(0,n.jsx)(t.p,{children:"Without a doubt the biggest benefit of an HSM is that it is a physical piece of hardware. This means that any cryptographic keys\r\nprotecting data is stored in the HSM and those keys are able to be removed from any given device which had the HSM\r\nattached. Because these keys are not kept as files on a computer but are instead stored inside a physical piece of\r\nequipment attached to the computer it is more secure since there are no files for an attacker to find and copy. With an\r\nHSM you can be sure that they only computer with the relevant key is the one with the HSM attached to it."}),"\n",(0,n.jsx)(t.p,{children:"Another benefit of HSMs is that they are focused on security. The keys stored inside of many if not all HSMs are\r\ndesigned to not be able to be exported. This means that there's no chance for these keys to be extracted remotely and\r\nused outside of the HSM itself, further increasing the security of these important keys."}),"\n",(0,n.jsx)(t.h2,{id:"enabling-a-ziti-endpoint-using-an-hsm",children:"Enabling a Ziti Endpoint Using an HSM"}),"\n",(0,n.jsx)(t.p,{children:"Enabling a Ziti endpoint to utilize an HSM is straight forward but does require a bit of technical understanding. We\r\nhave provided a couple of guides on how to enable an HSM with Ziti. The Ziti SDKs all interact with HSMs which support\r\nand provide a PKCS#11 library. PKCS#11 is a specification that outlines the programming interface software can use to\r\ninteract with cryptographic hardware such as smart cards or HSMs."}),"\n",(0,n.jsx)(t.h2,{id:"quickstarts",children:"Quickstarts"}),"\n",(0,n.jsx)(t.p,{children:"We have included a couple of quickstarts illustrating two different PKCS#11 drivers to help with understanding."}),"\n",(0,n.jsxs)(t.p,{children:["You will want to go to ",(0,n.jsx)(t.a,{href:"https://github.com/OpenSC/OpenSC/wiki",children:"the OpenSC Project"})," as it is what provides the\r\n",(0,n.jsx)(t.code,{children:"pkcs11-tool"})," which is used to interact with the HSMs."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"/docs/guides/hsm/softhsm",children:"first quickstart"})," is based on ",(0,n.jsx)(t.a,{href:"https://www.opendnssec.org/softhsm/",children:"softhsm"}),". This one focuses on software that\r\nprovides an ",(0,n.jsx)(t.em,{children:"emulated"})," HSM. This is useful for learning and understanding but it is not an actual HSM. Being software it\r\ndoesn't have the important benefit of being a physical device but it does have one substantial advantage; it's entirely\r\nfree."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"/docs/guides/hsm/yubikey",children:"second quickstart"})," uses an actual physical device - a ",(0,n.jsx)(t.a,{href:"https://www.yubico.com/",children:"Yubico"})," Yubikey. The specific key we\r\nused is a ",(0,n.jsx)(t.a,{href:"https://www.yubico.com/product/yubikey-5-nfc",children:"Yubikey 5 nfc"}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>o});var s=i(96540);const n={},a=s.createContext(n);function r(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);