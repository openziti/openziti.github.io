"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[4298],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>m});var a=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(i),f=n,m=p["".concat(l,".").concat(f)]||p[f]||h[f]||r;return i?a.createElement(m,s(s({ref:t},u),{},{components:i})):a.createElement(m,s({ref:t},u))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,s=new Array(r);s[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:n,s[1]=o;for(var c=2;c<r;c++)s[c]=i[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,i)}f.displayName="MDXCreateElement"},95651:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=i(87462),n=(i(67294),i(3905));const r={authors:"andrewpmartinez"},s="Bootstrapping Trust",o={permalink:"/blog/bootstrapping-trust/part-03.certificates",source:"@site/blog/bootstrapping-trust/part-03.certificates.md",title:"Bootstrapping Trust",description:"Part 3: Certificates",date:"2023-07-13T14:39:50.000Z",formattedDate:"July 13, 2023",tags:[],readingTime:6.04,hasTruncateMarker:!1,authors:[{name:"Andrew Martinez",title:"OpenZiti Maintainer",url:"https://github.com/andrewpmartinez",imageURL:"https://avatars.githubusercontent.com/u/199856?v=4",key:"andrewpmartinez"}],frontMatter:{authors:"andrewpmartinez"},prevItem:{title:"Bootstrapping Trust",permalink:"/blog/bootstrapping-trust/part-02.a-primer-on-public-key-cryptography"},nextItem:{title:"Bootstrapping Trust",permalink:"/blog/bootstrapping-trust/part-04.certificate-authorities-and-chains-of-trust"}},l={authorsImageUrls:[void 0]},c=[{value:"Part 3: Certificates",id:"part-3-certificates",level:2},{value:"Certificates",id:"certificates",level:3},{value:"Subject Information",id:"subject-information",level:4},{value:"Validity Period",id:"validity-period",level:4},{value:"Usage/Extensions",id:"usageextensions",level:4},{value:"Signatures",id:"signatures",level:4},{value:"Conclusion",id:"conclusion",level:3}],u={toc:c};function p(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"part-3-certificates"},"Part 3: Certificates"),(0,n.kt)("p",null,"If you have read through the entire series up to here, welcome! If you\nhave not, please consider reading the whole series:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/blog/bootstrapping-trust/part-01.encryption-everywhere"},"Part 1: Encryption Everywhere")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/blog/bootstrapping-trust/part-02.a-primer-on-public-key-cryptography"},"Part 2: A Primer On Public-Key Cryptography")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/blog/bootstrapping-trust/part-03.certificates"},"Part 3: Certificates")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/blog/bootstrapping-trust/part-04.certificate-authorities-and-chains-of-trust"},"Part 4: Certificate Authorities & Chains Of Trust")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/blog/bootstrapping-trust/part-05.bootstrapping-trust"},"Part 5: Bootstrapping Trust"))),(0,n.kt)("p",null,"In the series, we have covered public-key cryptography, where we learned\nabout public keys, private keys, and their uses for encryption and\nsigning. Using keys to sign data will play an essential role in this\narticle. It is vital that the reader understand that signatures verify\nboth the content of the data and its source. For a refresher, see\n",(0,n.kt)("a",{parentName:"p",href:"/blog/bootstrapping-trust/part-02.a-primer-on-public-key-cryptography"},"part two")," of this\nseries."),(0,n.kt)("p",null,'This article covers how certificates and certificate authorities (CAs)\nwork as "trust anchors." When a CA is a trust anchor, it means that a\nsystem can trust the CA to sign certificates that it can, in turn,\ntrust. Throughout this entire article, "trusting certificates" is\nmentioned. Trusting a certificate (CA or otherwise) is a software or\noperating system configuration process. This configuration tells the\nsystem that the specified certificates are trustworthy in the eyes of\nthe operator.'),(0,n.kt)("h3",{id:"certificates"},"Certificates"),(0,n.kt)("p",null,'Part two of this series covered keys, both public and private, but did\nnot mention certificates. It is common to hear "certificate" used\ninterchangeably with "public key" and, sometimes, "private key." A\ncertificate must have the public key inside of it. Some storage formats\nallow certificates to be stored along with the matching private key.\nOne example of this is PFX files. PFX files, which are PKCS#12 archives,\nare also sometimes generically referred to as a "certificates". In this\narticle "certificate" will always mean an x509 certificate that contains\nonly the public key.'),(0,n.kt)("p",null,"Certificates are a simple concept, but years of expansions and\nextensions have added to them and can be daunting uninitiated when you\nget into the nitty-gritty details. This article will strive to sit above\nthat detail. If you venture into the realm of generating certificates,\nusing OpenSSL and its configuration files, it can be a cumbersome\nexperience to wade through. There are many great articles and tutorials\navailable to get you started."),(0,n.kt)("p",null,'For this article, the word "certificate" will mean an "x509\nCertificate". x509 is a public standard and is the de-facto standard for\nsoftware systems dealing with public-key cryptography. There are other\nformats, but they are usually environment-specific, such as Card\nVerifiable Certificates. x509 good enough for general purpose use on\nmost systems.'),(0,n.kt)("p",null,"So, what is a certificate? It is yet another blob of data that is\nspecially formatted. It can be stored anywhere data can be stored but is\nusually a file. For this conversation, we will focus on the following\nsubset of information that a certificate contains:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Subject information",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"A public key"),(0,n.kt)("li",{parentName:"ul"},"Distinguished Name"))),(0,n.kt)("li",{parentName:"ul"},"Issuer Information"),(0,n.kt)("li",{parentName:"ul"},"Validity Period"),(0,n.kt)("li",{parentName:"ul"},"Usage/Extensions"),(0,n.kt)("li",{parentName:"ul"},"Signatures")),(0,n.kt)("h4",{id:"subject-information"},"Subject Information"),(0,n.kt)("p",null,"Certificates contain more than keys. The Distinguished Name (DN) are\ntext fields. They are useful mainly to humans to know what/who owns a\ncertificate. It is sometimes used by software as display information or\nfor comparison checks. Since humans provide the DN values or configure\nsoftware with values, it is not always distinguishing. DN values have an\nalternate name: relatively distinguished names."),(0,n.kt)("p",null,"Related to the Subject DN is the Issuer Information. The Issuer\nInformation is the subject of the certificate that issued the\ncertificate. Because of this, both the issuer information has similar\nvalues to the subject DN. Both can include the following information:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"CN - common name - a name"),(0,n.kt)("li",{parentName:"ul"},"SN - surname"),(0,n.kt)("li",{parentName:"ul"},"SERIALNUMBER - a number that is usually unique per certificate issuer,\nbut not always"),(0,n.kt)("li",{parentName:"ul"},"C - country"),(0,n.kt)("li",{parentName:"ul"},"L - locality name"),(0,n.kt)("li",{parentName:"ul"},"ST or S - state or province"),(0,n.kt)("li",{parentName:"ul"},"STREET - street address"),(0,n.kt)("li",{parentName:"ul"},"O - organization name"),(0,n.kt)("li",{parentName:"ul"},"OU - organizational unit"),(0,n.kt)("li",{parentName:"ul"},"T - title"),(0,n.kt)("li",{parentName:"ul"},"G or GN - given name"),(0,n.kt)("li",{parentName:"ul"},"E - email address"),(0,n.kt)("li",{parentName:"ul"},"UID - user id"),(0,n.kt)("li",{parentName:"ul"},"DC - domain component")),(0,n.kt)("p",null,"Do not worry about memorizing that list. Simply knowing they exist and\nthat they may or may not matter is good enough for now. If the reader is\nwondering when they might matter, well, that is generally when the\nsystem you are using complains about them."),(0,n.kt)("h4",{id:"validity-period"},"Validity Period"),(0,n.kt)("p",null,"The Validity Period specifies two points in time from when the\ncertificate is valid. Before and after this window of time, the\ncertificate is invalid and should not be trusted. Validity periods\nshould be as small as possible to fit their use case. Shorter periods\nreduce the window of time that compromised private key can remain useful\nfor an attack. The cost of this is overhead reissuing certificates as\nthey reach the end of their validity period."),(0,n.kt)("h4",{id:"usageextensions"},"Usage/Extensions"),(0,n.kt)("p",null,"Usage/Extension Data is interesting because it can limit what roles a\ncertificate fulfills. Depending on the system, this may be adhered to or\nnot. Some examples of usage that are common to see:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"key usage: client authentication, server authentication, signatures,\netc."),(0,n.kt)("li",{parentName:"ul"},"Subject Alternate Names (SANs)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Limits what IP address, email address, domain name, etc. the\ncertificate can be associated with"))),(0,n.kt)("li",{parentName:"ul"},"Certificate Authority (CA) flag"),(0,n.kt)("li",{parentName:"ul"},"and more")),(0,n.kt)("p",null,"This series will not dive into the details of these usages. However, it\nis essential to be aware of them and that they can affect the roles a\ncertificate can fulfill."),(0,n.kt)("h4",{id:"signatures"},"Signatures"),(0,n.kt)("p",null,'The signature section of a certificate is a list of signatures from\nother entities that trust this certificate. A certificate that signs\nitself is a "self-signed certificate." Self-signed certificates must be\nindividually trusted as no other certificate has expressed trust in it\nby signing it. Self-signed certificates are sometimes used for testing\npurposes as they are easy to create. They are also used as Root\nCertificate Authorities (root CAs).'),(0,n.kt)("p",null,"Each signature on a certificate is the result of taking the contents of\nthe certificate (without signatures), one-way hashing it, and then\nencrypting the hash with the signator's private key. The result is\nappended to the end of the signature list. During this process, the\npublic certificate moves between systems to be signed."),(0,n.kt)("p",null,"The movement of the public certificate between systems is facilitated by\nCertificate Signing Requests (CSRs). CSRs can be transmitted\nelectronically as files or as a data stream to the signer. CSRs contain\nonly the public information of a certificate and a signature from the\ncertificate's private key. Since CSRs only contain public information,\nthey are not considered sensitive. The signature in a CSR allows the\nsigner to verify that the CSR is from the subject specified in the CSR.\nIf the signature is valid, the signator processes the CSR, and the\nresult is a newly minted certificate with an additional signature."),(0,n.kt)("h3",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"Certificates are keys, usually public ones, with additional metadata\nthat adds conventions and restrictions around certificate usages. They\nprovide a place for signatures to resides and, through CSRs, provide a\nvehicle to request additional signatures. Certificates are useful\nbecause they package all of these concerns into a neat single file. In\n",(0,n.kt)("a",{parentName:"p",href:"/blog/bootstrapping-trust/part-04.certificate-authorities-and-chains-of-trust"},"part four"),", we\nwill explore how to create a formidable chain of trust by linking\nmultiple certificates together."),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Written By: Andrew Martinez",(0,n.kt)("br",{parentName:"p"}),"\n","June 2020"))}p.isMDXComponent=!0}}]);