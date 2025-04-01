"use strict";(self.webpackChunkdocusaurus_3=self.webpackChunkdocusaurus_3||[]).push([[2575],{68186:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"learn/quickstarts/zac/index","title":"Ziti Admin Console","description":"The Ziti Administration Console (ZAC) is a web UI provided by the OpenZiti project which will allow you to configure and","source":"@site/docs/learn/quickstarts/zac/index.mdx","sourceDirName":"learn/quickstarts/zac","slug":"/learn/quickstarts/zac/","permalink":"/docs/learn/quickstarts/zac/","draft":false,"unlisted":false,"editUrl":"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/learn/quickstarts/zac/index.mdx","tags":[],"version":"current","lastUpdatedAt":1743513678000,"frontMatter":{"title":"Ziti Admin Console","sidebar_label":"Console"},"sidebar":"docsSidebar","previous":{"title":"Upgrade a Quickstart Network","permalink":"/docs/learn/quickstarts/network/help/upgrade-quickstart-network"},"next":{"title":"BrowZer","permalink":"/docs/learn/quickstarts/browzer/"}}');var s=i(74848),o=i(28453),r=i(2754);function a(e){const n={a:"a",admonition:"admonition",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(n.admonition,{title:"Enhancing the Console with valid SSL Certificates",type:"note",children:[(0,s.jsx)(n.p,{children:"As mentioned above, the ZAC will produce TLS warnings in the browser. It is encouraged to fix this.\nValid certificates will promote confidence in the implementation. Let's Encrypt provides a free, automated\nway to obtain trusted certificates."}),(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"/docs/guides/deployments/console",children:(0,s.jsx)(n.strong,{children:"The Console and Alternative Server Certificates"})}),"\nfor details on how to integrate."]})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}const l={title:"Ziti Admin Console",sidebar_label:"Console"},d=void 0,h={},u=[{value:"Overview",id:"overview",level:2},{value:"Downloading From GitHub",id:"downloading-from-github",level:2},{value:"Using Docker",id:"using-docker",level:2},{value:"Copy PKI From Controller",id:"copy-pki-from-controller",level:3},{value:"Starting ZAC",id:"starting-zac",level:3},{value:"Docker Compose",id:"docker-compose",level:2},{value:"Kubernetes",id:"kubernetes",level:2},{value:"Login and use ZAC",id:"login-and-use-zac",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["The Ziti Administration Console (ZAC) is a web UI provided by the OpenZiti project which will allow you to configure and\nexplore a ",(0,s.jsx)(n.a,{href:"/docs/learn/introduction/",children:"network"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsxs)(n.p,{children:["These steps enable the console for a quickstart controller. Run these commands with a shell like ",(0,s.jsx)(n.code,{children:"bash"})," in a Windows Subsystem for Linux (WSL), macOS, or Linux."]}),"\n",(0,s.jsx)(n.h2,{id:"downloading-from-github",children:"Downloading From GitHub"}),"\n",(0,s.jsxs)(n.p,{children:["With ZAC 3.0+, the ZAC has been transformed to a single-page-application (SPA) allowing you to download an artifact\nfrom GitHub and host the ZAC however you like. The controller was also modified to allow the ZAC to be hosted by the\ncontroller. These steps are applicable to both the ",(0,s.jsx)(n.a,{href:"/docs/learn/quickstarts/network/local-no-docker",children:"Local - No Docker"}),"\nand the ",(0,s.jsx)(n.a,{href:"/docs/learn/quickstarts/network/hosted",children:"hosted yourself"})," deployments. When complete, the controller will host\nthe ZAC on the management API web binding."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"On the controller host, download any console version >= 3.0.0 from GitHub."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"wget https://github.com/openziti/ziti-console/releases/latest/download/ziti-console.zip\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Ensure ",(0,s.jsx)(n.code,{children:"ZITI_HOME"})," is set to your quickstart working directory and exported to forked processes. You can always restore the quickstart environment variables by sourcing the environment file."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"source ${HOME}/.ziti/quickstart/$(hostname)/$(hostname).env\necho $ZITI_HOME\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Unzip the console in the controller's working directory."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"unzip -d ${ZITI_HOME}/console ./ziti-console.zip\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.strong,{children:"${ZITI_HOME}/$(hostname -s).yaml"}),", add a web API binding ",(0,s.jsx)(n.code,{children:"zac"})," in the list containing ",(0,s.jsx)(n.code,{children:"edge-management"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"      - binding: zac\n        options:\n          location: ./console\n          indexFile: index.html\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Restart the controller service to apply the changes."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"sudo systemctl restart ziti-controller.service\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:['Navigate to the console in your web browser using whatever port the management API is configured for. Depending\non which quickstart you have used, the port may be different. The "Local" quickstart defaults to port 1280 while\nthe "Host OpenZiti Anywhere" quickstart defaults to 8441 and is customizable by you. Make sure you are using the\nadvertised host and port for your managment API, e.g., ',(0,s.jsx)(n.code,{children:"https://ctrl.ziti.example.com:1280/zac/"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"using-docker",children:"Using Docker"}),"\n",(0,s.jsx)(n.h3,{id:"copy-pki-from-controller",children:"Copy PKI From Controller"}),"\n",(0,s.jsxs)(n.p,{children:["It's a good idea to use TLS everywhere. To do this, you'll need to provide ZAC a key and a certificate.\nIf you have used the ",(0,s.jsx)(n.a,{href:"/docs/learn/quickstarts/network/local-with-docker",children:"Local - With Docker"})," quickstart to start\nthe network you can copy the certificates generated when the controller started.\nShown is an example which copies the certs from the OpenZiti container and uses them with ZAC. We'll copy the files\nfrom the docker named volume ",(0,s.jsx)(n.code,{children:"myPersistentZitiFiles"})," and put them into a folder at ",(0,s.jsx)(n.code,{children:"$HOME/.ziti/zac-pki"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"mkdir -p $HOME/.ziti/zac-pki\n\ndocker run -it --rm --name temp \\\n  -v myPersistentZitiFiles:/persistent \\\n  -v $HOME/.ziti/zac-pki:/zac-pki busybox \\\n  cp /persistent/pki/ziti-edge-controller-intermediate/keys/ziti-edge-controller-server.key /zac-pki\n  \ndocker run -it --rm --name temp \\\n  -v myPersistentZitiFiles:/persistent \\\n  -v $HOME/.ziti/zac-pki:/zac-pki busybox \\\n  cp /persistent/pki/ziti-edge-controller-intermediate/certs/ziti-edge-controller-server.chain.pem /zac-pki\n"})}),"\n",(0,s.jsx)(n.h3,{id:"starting-zac",children:"Starting ZAC"}),"\n",(0,s.jsx)(n.p,{children:"With the certificates copied, you will be able to start the ZAC using one Docker command. Also notice the command\nwill expose the ZAC http and https ports to your local computer so that you can access the ZAC from outside of Docker.\nIf you customized any of these paths, you'll need to replace the paths specified accordingly (the '-v' lines)."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:'docker run --rm \\\n       --name zac \\\n       -p 1408:1408 \\\n       -p 8443:8443 \\\n       -v "$HOME/.ziti/zac-pki/ziti-edge-controller-server.key":/usr/src/app/server.key \\\n       -v "$HOME/.ziti/zac-pki/ziti-edge-controller-server.chain.pem":/usr/src/app/server.chain.pem \\\n       openziti/zac\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Do note that if you are exposing ports as shown above, you will need to ensure that ",(0,s.jsx)(n.code,{children:"ziti-edge-controller"})," is\naddressable by your machine in order to use Docker in this way. This guide does not go into how to do this in depth.\nOne easy, and common mechanism to do this would be to edit the 'hosts' file of your operating system. A quick\ninternet search should show you how to accomplish this."]})}),"\n",(0,s.jsx)(n.h2,{id:"docker-compose",children:"Docker Compose"}),"\n",(0,s.jsxs)(n.p,{children:["If you have followed the ",(0,s.jsx)(n.a,{href:"/docs/learn/quickstarts/network/local-docker-compose",children:"Local - Docker Compose"})," quickstart you will have the ZAC\nrunning already. It's now included with both the default docker-compose file and the simplified-docker-compose file.\nBoth compose files will start and expose the ZAC ports on 1408/8443."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Do note that if you are exposing ports as shown above, you will need to ensure that ",(0,s.jsx)(n.code,{children:"ziti-edge-controller"})," is\naddressable by your machine in order to use Docker in this way. This guide does not go into how to do this in depth.\nOne easy, and common mechanism to do this would be to edit the 'hosts' file of your operating system. A quick\ninternet search should show you how to accomplish this."]})}),"\n",(0,s.jsx)(n.h2,{id:"kubernetes",children:"Kubernetes"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/guides/deployments/kubernetes/kubernetes-console",children:"Kubernetes deployment guide"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"login-and-use-zac",children:"Login and use ZAC"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["At this point you should be able to navigate to: ",(0,s.jsx)(n.code,{children:"https://${ZITI_CTRL_EDGE_ADVERTISED_ADDRESS}:8443"}),"and see the ZAC login\nscreen. (The TLS warnings your browser will show you are normal - it's because these steps use a self-signed certificate\ngenerated during the installation process)"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["If you are using docker-compose to start your network, when you access ZAC for the first time you will need to\nspecify the url of the controller. Since everything is running ",(0,s.jsx)(n.strong,{children:"in"})," docker compose this url is relative to the\ninternal docker compose network that is declared in the compose file. You would enter\n",(0,s.jsx)(n.code,{children:"https://ziti-edge-controller:1280"})," as the controller's URL"]})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Set the controller as shown (use the correct URL):"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:['Example using the "everything local" quickstart:\n',(0,s.jsx)(n.img,{alt:"everything local",src:i(74659).A+"",width:"562",height:"300"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:['Example using the "docker-compose" quickstart:\n',(0,s.jsx)(n.img,{alt:"docker-compose",src:i(11363).A+"",width:"592",height:"315"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:['Example using AWS "host it anywhere":\n',(0,s.jsx)(n.img,{alt:"host it anywhere",src:i(42960).A+"",width:"549",height:"288"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Optionally, ",(0,s.jsx)(n.a,{href:"/docs/learn/quickstarts/network/help/change-admin-password#ziti-console",children:(0,s.jsx)(n.strong,{children:"change admin's password"})})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(c,{}),"\n",(0,s.jsx)(r.A,{})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},2754:(e,n,i)=>{i.d(n,{A:()=>s});i(96540);var t=i(74848);function s(e){return(0,t.jsxs)("div",{id:"Wizardly",children:[(0,t.jsxs)("div",{className:"wizardmodal",children:[(0,t.jsx)("div",{className:"page-wrapper bg-img-1"}),(0,t.jsx)("div",{className:"page-wrapper",children:(0,t.jsxs)("div",{className:"wizard main",children:[(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"whitez"}),(0,t.jsx)("h1",{id:"WizardTitle",className:"header-title"}),(0,t.jsx)("div",{className:"wizardclose"})]})}),(0,t.jsx)("div",{className:"ocontainer",children:(0,t.jsx)("div",{className:"zcontainer",children:(0,t.jsxs)("div",{role:"application",className:"wizard clearfix vertical",id:"steps-uid-0",children:[(0,t.jsx)("div",{className:"steps clearfix",children:(0,t.jsx)("ul",{id:"WizardTabs",role:"tablist"})}),(0,t.jsx)("div",{className:"content clearfix",children:(0,t.jsx)("div",{children:(0,t.jsx)("fieldset",{id:"WizardContents",role:"tabpanel",className:"body current","aria-hidden":"false"})})}),(0,t.jsx)("div",{className:"actions clearfix",children:(0,t.jsxs)("ul",{role:"menu","aria-label":"Pagination",children:[(0,t.jsx)("li",{children:(0,t.jsx)("button",{id:"WizardPreviousButton",children:"Previous"})}),(0,t.jsxs)("li",{children:[(0,t.jsx)("button",{id:"WizardNextButton",children:"Next"}),(0,t.jsx)("button",{id:"WizarFinishButton",children:"Finish"})]})]})})]})})})]})})]}),(0,t.jsx)("div",{className:"openWizard",children:"Try the Wizard"})]})}},11363:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/zac_configure_dc-156a9f2db16354b0d0e98a92fffc3b18.png"},42960:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/zac_configure_hia-5458a12ba924327a042f0bc7f3cf83cc.png"},74659:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/zac_configure_local-3c8c35e21e75a8fe7256624390872577.png"},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var t=i(96540);const s={},o=t.createContext(s);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);