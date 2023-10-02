"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[5825],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,m=u["".concat(l,".").concat(d)]||u[d]||p[d]||r;return n?i.createElement(m,o(o({ref:t},h),{},{components:n})):i.createElement(m,o({ref:t},h))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5386:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=n(87462),a=(n(67294),n(3905));const r={authors:"andrewpmartinez"},o="Bootstrapping Trust",s={permalink:"/blog/bootstrapping-trust/part-01.encryption-everywhere",source:"@site/blog/bootstrapping-trust/part-01.encryption-everywhere.md",title:"Bootstrapping Trust",description:"Part 1: Encryption Everywhere",date:"2023-10-02T20:29:39.000Z",formattedDate:"October 2, 2023",tags:[],readingTime:14.4,hasTruncateMarker:!1,authors:[{name:"Andrew Martinez",title:"OpenZiti Maintainer",url:"https://github.com/andrewpmartinez",imageURL:"https://avatars.githubusercontent.com/u/199856?v=4",key:"andrewpmartinez"}],frontMatter:{authors:"andrewpmartinez"},prevItem:{title:"Building the Ziti C SDK and Sample Apps for arm (BeagleBone)",permalink:"/blog/c-sdk-on-beaglebone"},nextItem:{title:"Bootstrapping Trust",permalink:"/blog/bootstrapping-trust/part-02.a-primer-on-public-key-cryptography"}},l={authorsImageUrls:[void 0]},c=[{value:"Part 1: Encryption Everywhere",id:"part-1-encryption-everywhere",level:2},{value:"Zero Trust",id:"zero-trust",level:3},{value:"Ziti &amp; Zero Trust",id:"ziti--zero-trust",level:3},{value:"Setting It Up",id:"setting-it-up",level:4},{value:"CAs &amp; Adding Complexity",id:"cas--adding-complexity",level:4},{value:"Further Concerns",id:"further-concerns",level:4}],h={toc:c},u="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,i.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"part-1-encryption-everywhere"},"Part 1: Encryption Everywhere"),(0,a.kt)("p",null,"Whether you are an encryption expert or a newcomer, welcome! This series\nis for you! It assumes you know nothing and takes you from soup to nuts\non how to bootstrap trust with the intent to power a Zero Trust security\nmodel. The process and thinking described in this series are the direct\noutput of developing the same system for the Ziti open source project.\nZiti can be found on the GitHub project page for\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openziti"},"OpenZiti"),". The series starts with the\nbasics and dovetails into Ziti's Enrollment system."),(0,a.kt)("p",null,"The parts are as follows."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/blog/bootstrapping-trust/part-01.encryption-everywhere"},"Part 1: Encryption Everywhere")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/blog/bootstrapping-trust/part-02.a-primer-on-public-key-cryptography"},"Part 2: A Primer On Public-Key Cryptography")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/blog/bootstrapping-trust/part-03.certificates"},"Part 3: Certificates")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/blog/bootstrapping-trust/part-04.certificate-authorities-and-chains-of-trust"},"Part 4: Certificate Authorities & Chains Of Trust")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/blog/bootstrapping-trust/part-05.bootstrapping-trust"},"Part 5: Bootstrapping Trust"))),(0,a.kt)("h3",{id:"zero-trust"},"Zero Trust"),(0,a.kt)("p",null,"This entire series assumes some familiarity with Zero Trust. If you do\nnot have a strong background in it, that is fine. This section should\ngive the reader enough context to make use of the entire series. If a\nmore in-depth understanding is desired, please consider reading ",(0,a.kt)("em",{parentName:"p"},"Zero\nTrust Networks: Building Secure Systems in Untrusted Networks")," by Evan\nGilman."),(0,a.kt)("p",null,'Zero Trust is a security model that requires strict identity\nauthentication and access verification on every connection at all times.\nIt sets the tone for a system\'s security to say, "this system shall\nnever assume the identity or access of any connection." Before the Zero\nTrust security models, IT infrastructures were set up as a series of\nsecurity perimeters. Think of as a castle with walls and moats. The\ncastle would have a set number of entry points with guards. Once past\nthe guards and inside the castle, any visitors were trusted and had\naccess to the castle. In the real world, passing the guards is analogous\nto authenticating with a machine or, at worst, connect the office\nnetwork via WiFi or ethernet cable.'),(0,a.kt)("p",null,"Zero Trust does away with the concept of having a central castle that\nassumes anyone inside is trusted. It assumes that the castle has already\nbeen breached. That is to say, we expect attackers to already be inside\nthe network and for it to be a hostile environment. Any resources inside\nthe network should be treated as being publicly available on the\ninternet and must be defended. To accomplish this defense, a series of\nZero Trust pillars are defined:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Never Trust, Verify - the virtue of a connection should not grant\naccess"),(0,a.kt)("li",{parentName:"ul"},"Authenticate Before Connect - authentication should happen before\nresources are connected to"),(0,a.kt)("li",{parentName:"ul"},"Least Privileged Access - access should only grant connectivity to the\nminimum number of resources")),(0,a.kt)("p",null,"Implementing those pillars is not a simple tweak to existing\ninfrastructure. The first point alone will have much of this series\ndedicated to it."),(0,a.kt)("h3",{id:"ziti--zero-trust"},"Ziti & Zero Trust"),(0,a.kt)("p",null,"In a Zero Trust model, there needs to exist mechanisms to verify\nidentities such that trust can be granted. Zero Trust does not mean\nthere is no trust. Zero Trust means that trust is given only after\nverification. Even then, that trust is limited to accessing the minimum\nnetwork resources necessary. To accomplish this, we need a network that\ncan force all connections through the following process."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Authenticate"),(0,a.kt)("li",{parentName:"ol"},"Request Access To A Resource"),(0,a.kt)("li",{parentName:"ol"},"Connect To The Requested Resource")),(0,a.kt)("p",null,"This process is not the typical connection order on a network. Most\nconnections on a network are done in the reverse order. At first, this\nmay seem counter-intuitive. To help make Zero Trust and bootstrapping\ntrust a bit clearer, it helps to have a concrete system to use an\nexample. It just so happens that the Ziti software system makes a great\nexample!"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Ziti System",src:n(19894).Z,width:"2910",height:"479"})),(0,a.kt)("p",null,"In Ziti, all of the above steps require interacting with a Ziti\nController. The Ziti Controller manages the Ziti overlay network by\nmaintaining a list of known network services, SDK clients, routers,\nenrollments, policies, and much more! All of these pieces working\ntogether to create a Ziti Network. A Ziti Network is an overlay network\n","-"," meaning it creates a virtual network on top of a concrete network.\nThe concrete network may be the internet, a university network, or your\nown home network. Whatever it is, it is referred to as the underlay\nnetwork."),(0,a.kt)("p",null,'In the Ziti Network, all network resources are modeled as services in\nthe Ziti Controller. All services on a Ziti Network should only be\naccessible via the Ziti Network for maximum effect. Network services can\nbe made available via a Ziti Network in a variety of manners. The\npreferred method is embedding the Ziti SDK inside of applications and\nservers as it provides the highest degree of Zero Trust security.\nHowever, it is also possible to configure various overlay-to-underlay\nconnections to existing network services via "router termination" or a\nparticular type of application with the Ziti SDK embedded in it that\nspecifically deals with underlay-to-overlay translations (i.e. Ziti\nDesktop Edge/Mobile Edge).'),(0,a.kt)("p",null,"The Ziti Controller also knows about one or more Ziti Routers that form\na mesh network that can create dynamic circuits amongst themselves.\nRouters use circuits to move data across the Ziti Network. Routers can\nbe configured to allow data to enter and exit the mesh. The most common\nentry/exit points are Ziti SDKs acting as clients or servers."),(0,a.kt)("p",null,"Network clients wishing to attach to the network use the Ziti SDK to\nfirst authenticate with the Ziti Controller. During authentication, the\nZiti SDK client and Ziti Controller will verify each other. Upon\nsuccessful authentication, the Ziti Controller can provide a list of\navailable services to dial (connect) or to bind (host) for the\nauthenticated SDK Client. The client can then request to dial or bind a\nservice. If fulfilled, a session is associated with the client and\nservice. This new session is propagated to the necessary Ziti Routers,\nand the required circuits are created. The client is returned a list of\nZiti Routers which can be connected to in order to complete the last\nmile of communication between the Ziti overlay network and the SDK\nclient."),(0,a.kt)("p",null,"This set of steps covers the pillars of the Zero Trust model! The Ziti\nController and SDK Clients verify each other. The client cannot connect\nto network resources or services until it authenticates. After\nauthentication, a client is given the least privilege access allowed by\nonly being told about and only being able to dial/bind the authenticated\nidentity's assigned services. It is a Zero Trust overlay network!"),(0,a.kt)("p",null,"How did this system come into existence? How do the Ziti SDK client and\nZiti Controller verify each other? How do the routers and controller\nknow to validate each other? How is this managed at scale with hundreds\nof Ziti Routers and thousands of Ziti SDK clients? It seems that this is\na recursive problem. To terminate the recursion, we have to start our\nsystem with a well-defined and carefully controlled seed of trust."),(0,a.kt)("h1",{id:"trust"},"Trust"),(0,a.kt)("p",null,"In software systems that require network connectivity, there are at\nleast two parties in the system. Generally, there are more, and in the\ncase of a Ziti network, there could be thousands. Between two parties,\neach time a connection is made, a trust decision is made. Should this\nconnection be allowed? Mechanisms must be put into place to verify the\nidentity of the connecting party if that question is to be answered."),(0,a.kt)("p",null,"One mechanism that might jump out at the reader is a password or secret.\nIn Ziti, it would be possible to configure the Controller, Routers, and\nSDK Clients with a secret. Software is easy to deploy with a secret.\nThrow it into a configuration file, point the software at, and off you\ngo!"),(0,a.kt)("p",null,"It is also fundamentally weak as there is only one secret in the system\nnecessary to compromise the entire system. In Ziti, this would mean\ngiving the secret to network clients that may or may not be owned by the\nnetwork operator. Also, shared secrets do not individually identify each\ncomponent, nor do they define how secrets will power other security\nconcerns, like encryption."),(0,a.kt)("p",null,"The solution can be improved. Secrets could be generated per software\ncomponent. The controller, each router, and each SDK client could have a\nunique secret. This secret would then individually identity each\ncomponent! It is a significant improvement, but how does each component\nverify connections? Do they challenge for the incoming connections\nsecret and compare it to a list? That means that a pair of systems that\nneed to connect must have each other's secrets. Secret sharing will not\ndo! We can not be copying secrets between every machine. One machine\nthat is compromised would mean that many secrets are revealed!"),(0,a.kt)("p",null,"This solution can be evolved and improved, but we do not have to do that\nhard work! If we did, we would end up recreating an existing technology.\nThat technology is (public-key\ncryptography)","[https://en.wikipedia.org/wiki/Public-key_cryptography]",",\nand it provides everything we need."),(0,a.kt)("p",null,"Public-key cryptography allows each device to have a unique, secret,\nprivate key that proves its unique identity. That private key is\nmathematically tied to a public key. The public key can be used to\nencrypt messages that only the private key holder can decrypt. Also, the\npublic key cannot be used to derive the original private key. This\nfunctionality fits perfectly with what our distributed system needs!\nAlas, public-key cryptography introduces complex behaviors, setup, and\nmanagement. In the next article, we will dive a little deeper into this\ntopic. For now, let us take it on faith that it will serve our needs\nwell."),(0,a.kt)("h4",{id:"setting-it-up"},"Setting It Up"),(0,a.kt)("p",null,"So we have decided that public-key cryptography is the answer. What does\nthat mean? What do I have to do? Let us explore what would need to be\ndone by a human or a piece of software automating this process. Don't\nworry if you don't get all of this; the gist is all you need for now.\nLater articles will expand upon this terminology. In fact, after reading\nthe later articles, consider revisiting this part."),(0,a.kt)("p",null,'Consider the following diagram of a "mesh" distributed system. This mesh\ncould be any type of system such as a mesh of Ziti Routers, or maybe it\nis a system of sensors on an airplane. What they do does not matter.\nWhat matters is that this system has multiple pieces of software\nconnecting amongst themselves. Consider what it means to accomplish this\nusing public-key cryptography.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Mesh",src:n(46451).Z,width:"1179",height:"887"})),(0,a.kt)("p",null,"In the diagram above, each system needs:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a key pair for client and server connections"),(0,a.kt)("li",{parentName:"ul"},"to have the public keys of each system it is connecting to")),(0,a.kt)("p",null,"So what do we need to do? Drop into a CLI and start generating keys on\neach machine. Do that by using these commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"openssl ecparam -name secp256k1-genkey -param_enc explicit -out private-key.pem\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"openssl req -new -x509 -key private-key.pem -out server.pem -days 360\n")),(0,a.kt)("p",null,"Voila - you now have a self-signed certificate! What is a self-signed\ncertificate? For now, let us understand it means that no other system\nhas expressed trust in your public certificate. In\n",(0,a.kt)("a",{parentName:"p",href:"/blog/bootstrapping-trust/part-04.certificate-authorities-and-chains-of-trust"},"Part 4: Certificate Authorities & Chains Of Trust"),"\nwe will cover them in more detail."),(0,a.kt)("p",null,"You can repeat the above process for every piece of software in your\nmesh network. Preferably, you log into each machine and generate the\nprivate key there. Moving private keys on and off devices is a security\nrisk and frowned upon. For maximum security, hardware, such as\n",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Hardware_security_module"},"Hardware Security Modules (HSMs)"),"\nand ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Trusted_Platform_Module"},"Trusted Platform Modules\n(TPMs)"),", can be\nused to store the private keys in a manner that does not make them\ndirectly accessible."),(0,a.kt)("p",null,"Then you will need to copy each public certificate to every other\nmachine and configure your software so that it trusts that certificate.\nThe system will need to repeat this process any time the system adds a\npiece of software. If a machine is compromised, the analogous public\ncertificate will need to be untrusted on every node in the mesh. Adding\nor removing trust in a public certificate involves configuring software\nor operating systems. There are many ways it can be implemented,\nincluding configuration files, files stored in specific directories, and\neven via configuration tools such as Windows Certificate Manager\nsnap-in."),(0,a.kt)("p",null,"This is a log of careful work to get a simple system running. Consider\nwhat this means when adding or removing many nodes? Visiting each\nmachine and reconfiguring them each time is quite a bit of overhead.\nThere is a solution to these woes. While it is elegant on its own, it\ndoes add complexity. Let us see how Certificate Authorities (CAs) can\nhelp! In the next section, we will hit the highlights of CAs. For more\ndetail, look forward to\n",(0,a.kt)("a",{parentName:"p",href:"/blog/bootstrapping-trust/part-04.certificate-authorities-and-chains-of-trust"},"Part 4: Certificate Authorities & Chains Of Trust"),"."),(0,a.kt)("h4",{id:"cas--adding-complexity"},"CAs & Adding Complexity"),(0,a.kt)("p",null,'A CA enables trust deferral from multiple individual certificates to a\nsingle certificate which means that instead of trusting each\ncertificate, each piece of software will trust the CA. The CA will be\nused to sign every public certificate our software pieces need to use.\nHow does "signing" work? We will cover that in\n',(0,a.kt)("a",{parentName:"p",href:"/blog/bootstrapping-trust/part-03.certificates"},"part three")," and why it matters part in\n",(0,a.kt)("a",{parentName:"p",href:"/blog/bootstrapping-trust/part-04.certificate-authorities-and-chains-of-trust"},"four"),". For\nnow, the basics will be provided."),(0,a.kt)("p",null,"Here are the high-level steps of using a CA:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"create a CA configuration via OpenSSL CNF files"),(0,a.kt)("li",{parentName:"ol"},"create the CA"),(0,a.kt)("li",{parentName:"ol"},"use the CA's public key to sign all of the public certificates"),(0,a.kt)("li",{parentName:"ol"},"distribute the CA's certificate to every machine"),(0,a.kt)("li",{parentName:"ol"},"configure the machines certificate store or configure the software")),(0,a.kt)("p",null,"For items one and two, the process can be a bit mystical. There is a\nmultitude of options involved in managing a CA. To perform number three,\nyou will need to go through the processing of creating certificate\nsigning requests (CSRs, see ",(0,a.kt)("a",{parentName:"p",href:"/blog/bootstrapping-trust/part-03.certificates"},"parts three")," for\nmore detail) on behalf of the piece of software, and someone or\nsomething will have to play the role of the CA and resolve the CSRs. The\nlast two steps will depend on the operating system and software being\nused."),(0,a.kt)("p",null,"All of these actions can be done via a CLI or programmatically. You will\nhave to spend time and energy, making sure the options are correctly set\nand learning about all the different capabilities and extensions.\nMistakes will inevitably occur. It is time-consuming to debug why a\nspecific public certificate is not working as intended. The tools and\nsystems that use the certificates are purposely vague in error messages\nas not to reveal too much information to attackers."),(0,a.kt)("p",null,"The payoff for using CAs is having the ability to create chains of\ntrust. Chains of trust allow distributed systems to scale without having\nto reconfigure each node every time the system grows or shrinks. With a\nlittle more upfront cost and bookkeeping to run a CA, the system will\ngreatly decrease the amount of configuration required on each device."),(0,a.kt)("h4",{id:"further-concerns"},"Further Concerns"),(0,a.kt)("p",null,"Once configured, there are still other concerns that need to be taken\ninto account. Consider the following list of events that may happen to a\nCA, and it's certificates:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"What happens when a certificate expires?"),(0,a.kt)("li",{parentName:"ul"},"How does a system know not to trust a certificate anymore?"),(0,a.kt)("li",{parentName:"ul"},"What happens when private keys need to regenerate?")),(0,a.kt)("p",null,'CAs do not automatically handle the propagation of these types of\nevents. CAs are files on a storage device or HSM. Issuing or revoking\ncertificates does not generate any kind of event without additional\nsoftware. There is also the issue of certificates expiring. That "-days\n360", used in the example above, puts a lifetime on each certificate.\nThe lifetime can be extended far into the future, but this is a bad\npractice. Limiting the life span of a certificate reduces attack windows\nand can be used as a trigger to adopt strong encryption.'),(0,a.kt)("p",null,"Even if we ignore all of those concerns, who did we trust to get this\nsystem setup? What was the seed of trust used to bootstrap trust? So\nfar, you could have imagined that a human was doing all of this work. In\nthat case, a human operator is trusted to properly configure all of the\nsystems - trusting them with access to all of the private keys. The seed\nof trust is in that human. If this is a software system performing these\nactions, that means that the system has to be trusted and most likely\nhave access to every other system coming online. That is workable, but\nwhat happens when your system can have external systems request to be\nadded to the network? How can that be handled? How do you trust that\nsystem in the first place? Using a secret password creates a single,\nexploitable, weak point. Public-key cryptography could be put in place,\nbut then we are in a chicken-and-egg scenario. We are putting public-key\ncryptography in place to automate public-key cryptography."),(0,a.kt)("p",null,"There are many caveats to bootstrapping trust. In a dynamic distributed\nsystem where pieces of software can come and go at the whim of network\noperators, the issues become a mountain of concerns. Thankfully in Ziti,\na mechanism is provided that abstracts all of these issues. To\nunderstand how Ziti accomplishes this, we have a few more topics to\ndiscuss. In\n",(0,a.kt)("a",{parentName:"p",href:"/blog/bootstrapping-trust/part-02.a-primer-on-public-key-cryptography"},"part two"),", we will\nchip away at those topics by covering public-key cryptography in more\ndetail to understand its powers and applications."),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Written By: Andrew Martinez",(0,a.kt)("br",{parentName:"p"}),"\n","June 2020"))}p.isMDXComponent=!0},46451:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/mesh-329d97ab70482d5223a4d30c0263e6cb.png"},19894:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/ziti-system-c36f11d4eaa20132bc62e5b899b00d2f.png"}}]);