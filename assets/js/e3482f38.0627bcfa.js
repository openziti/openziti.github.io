"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[6900],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?o.createElement(h,a(a({ref:t},p),{},{components:n})):o.createElement(h,a({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<r;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},60936:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(87462),i=(n(67294),n(3905));const r={title:"Ziti Admin Console"},a=void 0,s={unversionedId:"quickstarts/zac/installation",id:"quickstarts/zac/installation",title:"Ziti Admin Console",description:"The Ziti Administration Console (ZAC) is a web UI provided by the OpenZiti project which will allow you to configure and",source:"@site/docs/quickstarts/zac/installation.md",sourceDirName:"quickstarts/zac",slug:"/quickstarts/zac/installation",permalink:"/docs/quickstarts/zac/installation",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/quickstarts/zac/installation.md",tags:[],version:"current",frontMatter:{title:"Ziti Admin Console"},sidebar:"rootSidebar",previous:{title:"Reset the Quickstart",permalink:"/docs/quickstarts/network/help/reset-quickstart"},next:{title:"Starting With Services",permalink:"/docs/quickstarts/services/"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Cloning From GitHub",id:"cloning-from-github",level:2},{value:"Docker",id:"docker",level:2},{value:"Docker Compose",id:"docker-compose",level:2},{value:"Login and use ZAC",id:"login-and-use-zac",level:2}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Ziti Administration Console (ZAC) is a web UI provided by the OpenZiti project which will allow you to configure and\nexplore a ",(0,i.kt)("a",{parentName:"p",href:"/docs/introduction/"},"Ziti Network"),"."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"It's expected that you're using ",(0,i.kt)("inlineCode",{parentName:"p"},"bash")," for these commands. If you're using Windows we strongly recommend that you install\nand use Windows Subsystem for Linux (WSL). Other operating systems it's recommended you use ",(0,i.kt)("inlineCode",{parentName:"p"},"bash")," unless you are able to\ntranslate to your shell accordingly."),(0,i.kt)("p",null,"You will need ",(0,i.kt)("inlineCode",{parentName:"p"},"node")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"npm")," executables from Node.js v16+."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"When running Ziti Administration Console, you should also prefer using https over http. In order to do this you will need\nto either create, or copy the certificates needed. Each section below tries to show you how to accomplish this on your own.")),(0,i.kt)("h2",{id:"cloning-from-github"},"Cloning From GitHub"),(0,i.kt)("p",null,"These steps are applicable to both the ",(0,i.kt)("a",{parentName:"p",href:"../network/local-no-docker"},"local, no docker")," as well as the\n",(0,i.kt)("a",{parentName:"p",href:"../network/hosted"},"hosted yourself")," deployments. Do note, these steps expect you have the necessary\nenvironment variables established in your shell. If you used the default parameters, you can establish these variables\nusing the file at ",(0,i.kt)("inlineCode",{parentName:"p"},"${HOME}/.ziti/quickstart/$(hostname)/$(hostname).env"),". To deploy ZAC after following one of those guides,\nyou can perform the following steps."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Clone the ziti-console repo from github:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'git clone https://github.com/openziti/ziti-console.git "${ZITI_HOME}/ziti-console"\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install Node modules:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'cd "${ZITI_HOME}/ziti-console"\nnpm install\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Use the ziti-controller certificates for the Ziti Console:"),(0,i.kt)("p",{parentName:"li"},"Link a server certificate into the ",(0,i.kt)("inlineCode",{parentName:"p"},"ziti-console")," directory. Your web browser won't recognize it, but it's sufficient for this exercise to have server TLS for your ZAC session."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'ln -s "${ZITI_PKI}/${ZITI_EDGE_CONTROLLER_HOSTNAME}-intermediate/certs/${ZITI_EDGE_CONTROLLER_HOSTNAME}-server.chain.pem" "${ZITI_HOME}/ziti-console/server.chain.pem"\nln -s "${ZITI_PKI}/${ZITI_EDGE_CONTROLLER_HOSTNAME}-intermediate/keys/${ZITI_EDGE_CONTROLLER_HOSTNAME}-server.key" "${ZITI_HOME}/ziti-console/server.key"\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"[Optional]"," Emit the Ziti Console systemd file and update systemd to start the Ziti Console. If you have not sourced the\nZiti helper script, you need to in order to get the necessary function."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'createZacSystemdFile\nsudo cp "${ZITI_HOME}/ziti-console.service" /etc/systemd/system\nsudo systemctl daemon-reload\nsudo systemctl enable --now ziti-console\n')),(0,i.kt)("p",{parentName:"li"},"If you do not have systemd installed or if you just wish to start ZAC you can simply issue:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'node "${ZITI_HOME}/ziti-console/server.js"\nInitializing TLS\nTLS initialized on port: 8443\nZiti Server running on port 1408\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"[Optional]"," If using systemd - verify the Ziti Console is running by running the systemctl command\n",(0,i.kt)("inlineCode",{parentName:"p"},"sudo systemctl status ziti-console --lines=0 --no-pager")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ sudo systemctl status ziti-console --lines=0 --no-pager\n \u25cf ziti-console.service - Ziti-Console\n Loaded: loaded (/etc/systemd/system/ziti-console.service; disabled; vendor preset: enabled)\n Active: active (running) since Wed 2021-05-19 22:04:44 UTC; 13h ago\n Main PID: 13458 (node)\n Tasks: 11 (limit: 1160)\n Memory: 33.4M\n CGroup: /system.slice/ziti-console.service\n \u2514\u250013458 /usr/bin/node /home/ubuntu/.ziti/quickstart/ip-172-31-22-212/ziti-console/server.js\n\n$ sudo ss -lntp | grep node\nLISTEN 0      511                *:8443             *:*    users:(("node",pid=26013,fd=19))           \nLISTEN 0      511                *:1408             *:*    users:(("node",pid=26013,fd=18))\n')))),(0,i.kt)("h2",{id:"docker"},"Docker"),(0,i.kt)("p",null,"Getting ZAC setup if you have followed the ",(0,i.kt)("a",{parentName:"p",href:"../network/local-with-docker"},"docker network quickstart"),"\nshould be straightforward. If you have used the default values from this quickstart you can issue the following command.\nNotice that this command uses the default path: ",(0,i.kt)("inlineCode",{parentName:"p"},"${HOME}/docker-volume/myFirstZitiNetwork"),". If you customized the path,\nreplace the paths specified in the volume mount sections below accordingly (the '-v' lines). Also note this command will\nexpose the http and https ports to your local computer. This is optional, read more about using docker for more details\nif necessary."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'docker run \\\n       --name zac \\\n       -p 1408:1408 \\\n       -p 8443:8443 \\\n       -v "${HOME}/docker-volume/myFirstZitiNetwork/ziti-edge-controller-intermediate/keys/ziti-edge-controller-server.key":/usr/src/app/server.key \\\n       -v "${HOME}/docker-volume/myFirstZitiNetwork/ziti-edge-controller-intermediate/certs/ziti-edge-controller-server.chain.pem":/usr/src/app/server.chain.pem \\\n       openziti/zac\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Do note that if you are exposing ports as shown above, you will need to ensure that ",(0,i.kt)("inlineCode",{parentName:"p"},"ziti-edge-controller")," is\naddressable by your machine in order to use docker in this way. This guide does not go into how to do this in depth.\nOne easy, and common mechanism to do this would be to edit the 'hosts' file of your operating system. A quick\ninternet search should show you how to accomplish this.")),(0,i.kt)("h2",{id:"docker-compose"},"Docker Compose"),(0,i.kt)("p",null,"If you have followed the ",(0,i.kt)("a",{parentName:"p",href:"../network/local-docker-compose"},"docker compose quickstart")," getting the ZAC\nrunning within the compose file is a bit cumbersome because the docker-compose file will generate a full PKI on your\nbehalf. While this makes it very easy to get a basic network setup, it makes reusing that PKI in the ZAC difficult at\nthis time.  It's not difficult to reuse the PKI but you'll need to do the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Start the network using ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose")," as normal.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"After running, copy the ",(0,i.kt)("inlineCode",{parentName:"p"},"ziti-edge-controller")," server certificate chain and key from the controller using these commands:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker cp docker_ziti-controller_1:/var/openziti/pki/ziti-edge-controller-intermediate/keys/ziti-edge-controller-server.key .\ndocker cp docker_ziti-controller_1:/var/openziti/pki/ziti-edge-controller-intermediate/certs/ziti-edge-controller-server.chain.pem .\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Once these files are copied out, shut down the running docker-compose ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose down"),". Do NOT remove the volume\nwith ",(0,i.kt)("inlineCode",{parentName:"p"},"-v"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Now add the ZAC configuration lines to the compose file of your choice:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'  ziti-console:\n    image: openziti/zac\n    ports:\n      - "1408:1408"\n      - "8443:8443"\n    environment:\n      - ZITI_EDGE_CONTROLLER_HOSTNAME=ziti-edge-router\n    volumes:\n      - ziti-fs:/openziti\n      - type: bind\n        source: ./ziti-edge-controller-server.key\n        target: /usr/src/app/server.key\n      - type: bind\n        source: ./ziti-edge-controller-server.chain.pem\n        target: /usr/src/app/server.chain.pem\n\n    networks:\n      - zitiblue\n      - zitired\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"After adding the ZAC configuration as shown, ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose")," will now start and expose the ZAC ports on 1408/8443."))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Do note that if you are exposing ports as shown above, you will need to ensure that ",(0,i.kt)("inlineCode",{parentName:"p"},"ziti-edge-controller")," is\naddressable by your machine in order to use docker in this way. This guide does not go into how to do this in depth.\nOne easy, and common mechanism to do this would be to edit the 'hosts' file of your operating system. A quick\ninternet search should show you how to accomplish this.")),(0,i.kt)("h2",{id:"login-and-use-zac"},"Login and use ZAC"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"At this point you should be able to navigate to both: ",(0,i.kt)("inlineCode",{parentName:"p"},"https://${ZITI_EDGE_CONTROLLER_HOSTNAME}:8443"),"and see the ZAC login\nscreen. (The TLS warnings your browser will show you are normal - it's because these steps use a self-signed certificate\ngenerated in the install process)"),(0,i.kt)("admonition",{parentName:"li",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If you are using docker-compose to start your network, when you access ZAC for the first time you will need to\nspecify the url of the controller. Since everything is running ",(0,i.kt)("strong",{parentName:"p"},"in")," docker compose this url is relative to the\ninternal docker compose network that is declared in the compose file. You would enter\n",(0,i.kt)("inlineCode",{parentName:"p"},"https://ziti-edge-controller:1280")," as the controller's URL"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Set the controller as shown (use the correct URL):"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Example using the "everything local" quickstart:\n',(0,i.kt)("img",{alt:"everything local",src:n(76481).Z,width:"562",height:"300"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Example using the "docker-compose" quickstart:\n',(0,i.kt)("img",{alt:"docker-compose",src:n(97229).Z,width:"592",height:"315"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Example using AWS "host it anywhere":\n',(0,i.kt)("img",{alt:"host it anywhere",src:n(88925).Z,width:"549",height:"288"}))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Optionally, ",(0,i.kt)("a",{parentName:"p",href:"/docs/quickstarts/network/help/change-admin-password#ziti-console"},"change admin's password")))))}d.isMDXComponent=!0},97229:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/zac_configure_dc-156a9f2db16354b0d0e98a92fffc3b18.png"},88925:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/zac_configure_hia-5458a12ba924327a042f0bc7f3cf83cc.png"},76481:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/zac_configure_local-3c8c35e21e75a8fe7256624390872577.png"}}]);