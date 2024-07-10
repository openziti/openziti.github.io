"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[4575],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},79641:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294);function r(e){return a.createElement("div",{id:"Wizardly"},a.createElement("div",{className:"wizardmodal"},a.createElement("div",{className:"page-wrapper bg-img-1"}),a.createElement("div",{className:"page-wrapper"},a.createElement("div",{className:"wizard main"},a.createElement("div",{className:"container"},a.createElement("div",{className:"row"},a.createElement("div",{className:"whitez"}),a.createElement("h1",{id:"WizardTitle",className:"header-title"}),a.createElement("div",{className:"wizardclose"}))),a.createElement("div",{className:"ocontainer"},a.createElement("div",{className:"zcontainer"},a.createElement("div",{role:"application",className:"wizard clearfix vertical",id:"steps-uid-0"},a.createElement("div",{className:"steps clearfix"},a.createElement("ul",{id:"WizardTabs",role:"tablist"})),a.createElement("div",{className:"content clearfix"},a.createElement("div",null,a.createElement("fieldset",{id:"WizardContents",role:"tabpanel",className:"body current","aria-hidden":"false"}))),a.createElement("div",{className:"actions clearfix"},a.createElement("ul",{role:"menu","aria-label":"Pagination"},a.createElement("li",null,a.createElement("button",{id:"WizardPreviousButton"},"Previous")),a.createElement("li",null,a.createElement("button",{id:"WizardNextButton"},"Next"),a.createElement("button",{id:"WizarFinishButton"},"Finish")))))))))),a.createElement("div",{className:"openWizard"},"Try the Wizard"))}},39466:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),o=n(79641);const i={title:"Ziti Admin Console",sidebar_label:"Console"},l=void 0,s={unversionedId:"learn/quickstarts/zac/index",id:"learn/quickstarts/zac/index",title:"Ziti Admin Console",description:"The Ziti Administration Console (ZAC) is a web UI provided by the OpenZiti project which will allow you to configure and",source:"@site/docs/learn/quickstarts/zac/index.md",sourceDirName:"learn/quickstarts/zac",slug:"/learn/quickstarts/zac/",permalink:"/docs/learn/quickstarts/zac/",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/learn/quickstarts/zac/index.md",tags:[],version:"current",frontMatter:{title:"Ziti Admin Console",sidebar_label:"Console"},sidebar:"docsSidebar",previous:{title:"Upgrade a Quickstart Network",permalink:"/docs/learn/quickstarts/network/help/upgrade-quickstart-network"},next:{title:"BrowZer",permalink:"/docs/learn/quickstarts/browzer/"}},c={},p=[{value:"Overview",id:"overview",level:2},{value:"Downloading From GitHub",id:"downloading-from-github",level:2},{value:"Using Docker",id:"using-docker",level:2},{value:"Copy PKI From Controller",id:"copy-pki-from-controller",level:3},{value:"Starting ZAC",id:"starting-zac",level:3},{value:"Docker Compose",id:"docker-compose",level:2},{value:"Kubernetes",id:"kubernetes",level:2},{value:"Login and use ZAC",id:"login-and-use-zac",level:2}],d={toc:p},m="wrapper";function u(e){let{components:t,...i}=e;return(0,r.kt)(m,(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Ziti Administration Console (ZAC) is a web UI provided by the OpenZiti project which will allow you to configure and\nexplore a ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn/introduction/"},"network"),"."),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null," These steps enable the console for a quickstart controller. Run these commands with a shell like ",(0,r.kt)("inlineCode",{parentName:"p"},"bash")," in a Windows Subsystem for Linux (WSL), macOS, or Linux."),(0,r.kt)("h2",{id:"downloading-from-github"},"Downloading From GitHub"),(0,r.kt)("p",null,"These steps are applicable to both the ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn/quickstarts/network/local-no-docker"},"Local - No Docker")," and the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn/quickstarts/network/hosted"},"hosted yourself")," deployments."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the controller host, download the latest release of the console from GitHub. You can use any console version >= 3.0.0."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},"wget https://github.com/openziti/ziti-console/releases/latest/download/ziti-console.zip\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Ensure ",(0,r.kt)("inlineCode",{parentName:"p"},"ZITI_HOME")," is set to your quickstart working directory and exported to forked processes. You can always restore the quickstart environment variables by sourcing the environment file."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},"source ${HOME}/.ziti/quickstart/$(hostname)/$(hostname).env\nexport ZITI_HOME\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Unzip the console in the controller's working directory."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},"unzip -d ${ZITI_HOME}/zac ./ziti-console.zip\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In ",(0,r.kt)("strong",{parentName:"p"},"${ZITI_HOME}/$(hostname -s).yaml"),", add a web API binding ",(0,r.kt)("inlineCode",{parentName:"p"},"zac")," in the list containing ",(0,r.kt)("inlineCode",{parentName:"p"},"edge-management"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},"      - binding: zac\n        options:\n          location: ./zac\n          indexFile: index.html\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Restart the controller service to apply the changes."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},"sudo systemctl restart ziti-controller.service\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Navigate to the console in your web browser, e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"https://ctrl.ziti.example.com:1280/zac/")))),(0,r.kt)("h2",{id:"using-docker"},"Using Docker"),(0,r.kt)("h3",{id:"copy-pki-from-controller"},"Copy PKI From Controller"),(0,r.kt)("p",null,"It's a good idea to use TLS everywhere. To do this, you'll need to provide ZAC a key and a certificate.\nIf you have used the ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn/quickstarts/network/local-with-docker"},"Local - With Docker")," quickstart to start\nthe network you can copy the certificates generated when the controller started.\nShown is an example which copies the certs from the OpenZiti container and uses them with ZAC. We'll copy the files\nfrom the docker named volume ",(0,r.kt)("inlineCode",{parentName:"p"},"myPersistentZitiFiles")," and put them into a folder at ",(0,r.kt)("inlineCode",{parentName:"p"},"$HOME/.ziti/zac-pki"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"mkdir -p $HOME/.ziti/zac-pki\n\ndocker run -it --rm --name temp \\\n  -v myPersistentZitiFiles:/persistent \\\n  -v $HOME/.ziti/zac-pki:/zac-pki busybox \\\n  cp /persistent/pki/ziti-edge-controller-intermediate/keys/ziti-edge-controller-server.key /zac-pki\n  \ndocker run -it --rm --name temp \\\n  -v myPersistentZitiFiles:/persistent \\\n  -v $HOME/.ziti/zac-pki:/zac-pki busybox \\\n  cp /persistent/pki/ziti-edge-controller-intermediate/certs/ziti-edge-controller-server.chain.pem /zac-pki\n")),(0,r.kt)("h3",{id:"starting-zac"},"Starting ZAC"),(0,r.kt)("p",null,"With the certificates copied, you will be able to start the ZAC using one Docker command. Also notice the command\nwill expose the ZAC http and https ports to your local computer so that you can access the ZAC from outside of Docker.\nIf you customized any of these paths, you'll need to replace the paths specified accordingly (the '-v' lines)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'docker run --rm \\\n       --name zac \\\n       -p 1408:1408 \\\n       -p 8443:8443 \\\n       -v "$HOME/.ziti/zac-pki/ziti-edge-controller-server.key":/usr/src/app/server.key \\\n       -v "$HOME/.ziti/zac-pki/ziti-edge-controller-server.chain.pem":/usr/src/app/server.chain.pem \\\n       openziti/zac\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Do note that if you are exposing ports as shown above, you will need to ensure that ",(0,r.kt)("inlineCode",{parentName:"p"},"ziti-edge-controller")," is\naddressable by your machine in order to use Docker in this way. This guide does not go into how to do this in depth.\nOne easy, and common mechanism to do this would be to edit the 'hosts' file of your operating system. A quick\ninternet search should show you how to accomplish this.")),(0,r.kt)("h2",{id:"docker-compose"},"Docker Compose"),(0,r.kt)("p",null,"If you have followed the ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn/quickstarts/network/local-docker-compose"},"Local - Docker Compose")," quickstart you will have the ZAC\nrunning already. It's now included with both the default docker-compose file and the simplified-docker-compose file.\nBoth compose files will start and expose the ZAC ports on 1408/8443."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Do note that if you are exposing ports as shown above, you will need to ensure that ",(0,r.kt)("inlineCode",{parentName:"p"},"ziti-edge-controller")," is\naddressable by your machine in order to use Docker in this way. This guide does not go into how to do this in depth.\nOne easy, and common mechanism to do this would be to edit the 'hosts' file of your operating system. A quick\ninternet search should show you how to accomplish this.")),(0,r.kt)("h2",{id:"kubernetes"},"Kubernetes"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/guides/deployments/kubernetes/kubernetes-console"},"Kubernetes deployment guide"),"."),(0,r.kt)("h2",{id:"login-and-use-zac"},"Login and use ZAC"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"At this point you should be able to navigate to: ",(0,r.kt)("inlineCode",{parentName:"p"},"https://${ZITI_CTRL_EDGE_ADVERTISED_ADDRESS}:8443"),"and see the ZAC login\nscreen. (The TLS warnings your browser will show you are normal - it's because these steps use a self-signed certificate\ngenerated during the installation process)"),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you are using docker-compose to start your network, when you access ZAC for the first time you will need to\nspecify the url of the controller. Since everything is running ",(0,r.kt)("strong",{parentName:"p"},"in")," docker compose this url is relative to the\ninternal docker compose network that is declared in the compose file. You would enter\n",(0,r.kt)("inlineCode",{parentName:"p"},"https://ziti-edge-controller:1280")," as the controller's URL"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set the controller as shown (use the correct URL):"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Example using the "everything local" quickstart:\n',(0,r.kt)("img",{alt:"everything local",src:n(54969).Z,width:"562",height:"300"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Example using the "docker-compose" quickstart:\n',(0,r.kt)("img",{alt:"docker-compose",src:n(42012).Z,width:"592",height:"315"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Example using AWS "host it anywhere":\n',(0,r.kt)("img",{alt:"host it anywhere",src:n(94624).Z,width:"549",height:"288"}))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Optionally, ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn/quickstarts/network/help/change-admin-password#ziti-console"},(0,r.kt)("strong",{parentName:"a"},"change admin's password"))))),(0,r.kt)(o.Z,{mdxType:"Wizardly"}))}u.isMDXComponent=!0},42012:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/zac_configure_dc-156a9f2db16354b0d0e98a92fffc3b18.png"},94624:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/zac_configure_hia-5458a12ba924327a042f0bc7f3cf83cc.png"},54969:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/zac_configure_local-3c8c35e21e75a8fe7256624390872577.png"}}]);