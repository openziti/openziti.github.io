"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[7463],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,k=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(k,a(a({ref:t},u),{},{components:n})):r.createElement(k,a({ref:t},u))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},79641:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294);function o(e){return r.createElement("div",{id:"Wizardly"},r.createElement("div",{className:"wizardmodal"},r.createElement("div",{className:"page-wrapper bg-img-1"}),r.createElement("div",{className:"page-wrapper"},r.createElement("div",{className:"wizard main"},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},r.createElement("div",{className:"whitez"}),r.createElement("h1",{id:"WizardTitle",className:"header-title"}),r.createElement("div",{className:"wizardclose"}))),r.createElement("div",{className:"zcontainer"},r.createElement("div",{role:"application",className:"wizard clearfix vertical",id:"steps-uid-0"},r.createElement("div",{className:"steps clearfix"},r.createElement("ul",{id:"WizardTabs",role:"tablist"})),r.createElement("div",{className:"content clearfix"},r.createElement("div",null,r.createElement("fieldset",{id:"WizardContents",role:"tabpanel",className:"body current","aria-hidden":"false"}))),r.createElement("div",{className:"actions clearfix"},r.createElement("ul",{role:"menu","aria-label":"Pagination"},r.createElement("li",null,r.createElement("button",{id:"WizardPreviousButton"},"Previous")),r.createElement("li",null,r.createElement("button",{id:"WizardNextButton"},"Next"))))))))),r.createElement("div",{className:"openWizard"},"Let me Guide You!"))}},72982:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(87462),o=(n(67294),n(3905)),i=n(79641);const a={sidebar_position:40},l="Local - With Docker",s={unversionedId:"learn/quickstarts/network/local-with-docker",id:"learn/quickstarts/network/local-with-docker",title:"Local - With Docker",description:"Docker is a popular container engine, and many developers enjoy using solutions delivered via",source:"@site/docs/learn/quickstarts/network/local-with-docker.md",sourceDirName:"learn/quickstarts/network",slug:"/learn/quickstarts/network/local-with-docker",permalink:"/docs/learn/quickstarts/network/local-with-docker",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/learn/quickstarts/network/local-with-docker.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_position:40},sidebar:"docsSidebar",previous:{title:"Local - No Docker",permalink:"/docs/learn/quickstarts/network/local-no-docker"},next:{title:"Local - Docker Compose",permalink:"/docs/learn/quickstarts/network/local-docker-compose"}},c={},u=[{value:"Starting the Controller",id:"starting-the-controller",level:2},{value:"Required - Docker Named Volume",id:"required---docker-named-volume",level:3},{value:"Required - Docker Network",id:"required---docker-network",level:3},{value:"Optional - Expose Controller Port",id:"optional---expose-controller-port",level:3},{value:"Running the Controller",id:"running-the-controller",level:3},{value:"Create Edge Router Policies",id:"create-edge-router-policies",level:2},{value:"Edge Router",id:"edge-router",level:2},{value:"Testing the Network",id:"testing-the-network",level:2},{value:"Using Docker Locally",id:"using-docker-locally",level:3},{value:"Testing",id:"testing",level:3},{value:"Next Steps",id:"next-steps",level:2}],d={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"local---with-docker"},"Local - With Docker"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.docker.com"},"Docker")," is a popular container engine, and many developers enjoy using solutions delivered via\nDocker. Ziti provides a single Docker container which contains the entire stack of Ziti components. This is not the most\ncommon mechanism for deploying containers, we recognize that. However, we think that this makes it a bit easier for\npeople to get started with deploying Ziti components using Docker. We will certainly look to create individual\ncontainers for each component in the future but for now it's a single container. You can get this container by issuing\n",(0,o.kt)("inlineCode",{parentName:"p"},"docker pull openziti/quickstart:latest"),"."),(0,o.kt)("h2",{id:"starting-the-controller"},"Starting the Controller"),(0,o.kt)("p",null,"All ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn/introduction/"},"Ziti Networks")," require\na ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/deployments/controller"},"Ziti Controller"),". Without a controller, edge routers won't be able to authorize new\nconnections rendering a new network useless. You must have a controller running."),(0,o.kt)("h3",{id:"required---docker-named-volume"},"Required - Docker Named Volume"),(0,o.kt)("p",null,'Running Ziti locally via Docker will require you to create a "named volume" in docker where any and all persistent files\nwill be saved.'),(0,o.kt)("p",null,"Create the named volume now using this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker volume create myPersistentZitiFiles\n")),(0,o.kt)("h3",{id:"required---docker-network"},"Required - Docker Network"),(0,o.kt)("p",null,"Other containers on the Docker network will ",(0,o.kt)("strong",{parentName:"p"},"need")," to address the controller. To do this, the container requires\na network alias. This forces you to add the container to a network which is not the default network. "),(0,o.kt)("p",null,"Create the docker network now using this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker network create myFirstZitiNetwork\n")),(0,o.kt)("p",null,"When starting containers participating in this OpenZiti Network, the docker network name will be supplied as a parameter\nto the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker")," command. It's important for containers to be able to address other containers on the docker network,\nthis requires predictable container names on the docker network. When looking at the example commands below, these\noptions are the ones controlling the network name and network alias on the network:\n",(0,o.kt)("inlineCode",{parentName:"p"},"--network myFirstZitiNetwork --network-alias ziti-controller"),"."),(0,o.kt)("h3",{id:"optional---expose-controller-port"},"Optional - Expose Controller Port"),(0,o.kt)("p",null,"Docker containers by default won't expose any ports that you could use from your local machine. If you want to be able\nto use this controller from outside of Docker, you'll need to export the controller's API port. That's easy to do,\nsimply pass one more parameter to the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker")," command: ",(0,o.kt)("inlineCode",{parentName:"p"},"-p ${externalPort}:${internalPort}")),(0,o.kt)("h3",{id:"running-the-controller"},"Running the Controller"),(0,o.kt)("p",null,"Here's an example of how to launch a controller using the folder created in the steps above. Also, notice this command\npasses a couple extra flags you'll see used on this page. Notably\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"--rm")," flag and the ",(0,o.kt)("inlineCode",{parentName:"p"},"-it")," flag. The ",(0,o.kt)("inlineCode",{parentName:"p"},"--rm")," flag instructs Docker to delete the container when the container exits.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"-it")," flag will run the container interactively. Running interactively like this makes it easier to see the logs\nproduced, but you will need a terminal for each process you want to run. The choice is yours, but in these examples\nwe'll use ",(0,o.kt)("inlineCode",{parentName:"p"},"-it")," to make seeing the output from the logs easier."),(0,o.kt)("p",null,'Here\'s an example which will use the Docker network named "myFirstZitiNetwork" and expose the controller to your local\ncomputer on port 1280 (the default port).'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run \\\n  --name ziti-controller \\\n  -e ZITI_CTRL_ADVERTISED_ADDRESS=ziti-edge-controller \\\n  --network myFirstZitiNetwork \\\n  --network-alias ziti-controller \\\n  --network-alias ziti-edge-controller \\\n  -p 1280:1280 \\\n  -it \\\n  --rm \\\n  -v myPersistentZitiFiles:/persistent \\\n  openziti/quickstart \\\n  /var/openziti/scripts/run-controller.sh\n")),(0,o.kt)("h2",{id:"create-edge-router-policies"},"Create Edge Router Policies"),(0,o.kt)("p",null,"OpenZiti requires explicit authorization of identities using (",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/glossary#edge-router-policy"},"edge router policies"),"),\nas well as authorization of services and routers using (",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/glossary#service-edge-router-policy"},"service edge router policies"),").\nThe docker-based quickstart doesn't perform these steps automatically. Run the initialization container one time, after\nstarting the controller as shown"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker run \\\n  --network myFirstZitiNetwork \\\n  --network-alias ziti-controller-init-container \\\n  -it \\\n  --rm \\\n  -v myPersistentZitiFiles:/persistent \\\n  openziti/quickstart \\\n  /var/openziti/scripts/run-with-ziti-cli.sh  /var/openziti/scripts/access-control.sh\n")),(0,o.kt)("h2",{id:"edge-router"},"Edge Router"),(0,o.kt)("p",null,"At this point you should have a ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/deployments/controller"},"Ziti Controller")," running. You should have created your\nDocker network as well as creating the volume mount. Now it's time to connect your first edge router. The same Docker\nimage that runs the controller can run an edge router. To start an edge router, you will run a very similar command as\nthe one to start the controller with a couple of key differences."),(0,o.kt)("p",null,"The first noticeable difference is that we need to pass in the name of the edge router we want it to be. To use this\nnetwork, the name supplied needs tobe addressable by clients.  Also notice the port exported is port 3022. This is the\ndefault port used by edge routers. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run \\\n  --name ziti-edge-router-1 \\\n  -e ZITI_ROUTER_NAME=ziti-edge-router-1 \\\n  -e ZITI_ROUTER_ADVERTISED_ADDRESS=ziti-edge-router-1 \\\n  -e ZITI_ROUTER_ROLES=public \\\n  --network myFirstZitiNetwork \\\n  --network-alias ziti-edge-router-1 \\\n  -p 3022:3022 \\\n  -it \\\n  --rm \\\n  -v myPersistentZitiFiles:/persistent \\\n  openziti/quickstart \\\n  /var/openziti/scripts/run-router.sh edge\n")),(0,o.kt)("p",null,"If you want to create a second edge router, you'll need to override the router port, don't forget to export that port too"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run \\\n  --name ziti-edge-router-2 \\\n  -e ZITI_ROUTER_NAME=ziti-edge-router-2 \\\n  -e ZITI_ROUTER_ADVERTISED_ADDRESS=ziti-edge-router-2 \\\n  -e ZITI_ROUTER_PORT=4022 \\\n  -e ZITI_ROUTER_ROLES=public \\\n  --network myFirstZitiNetwork \\\n  --network-alias ziti-edge-router-2 \\\n  -p 4022:4022 \\\n  -it \\\n  --rm \\\n  -v myPersistentZitiFiles:/persistent \\\n  openziti/quickstart \\\n  /var/openziti/scripts/run-router.sh edge\n")),(0,o.kt)("h2",{id:"testing-the-network"},"Testing the Network"),(0,o.kt)("h3",{id:"using-docker-locally"},"Using Docker Locally"),(0,o.kt)("p",null,"Using the OpenZiti Network outside the docker environment is somewhat complex. The aliases chosen when starting the docker\ncontainers need to be addressable from wherever a client is connecting. This includes the ",(0,o.kt)("inlineCode",{parentName:"p"},"ziti")," CLI, tunnelers, SDKs,\netc. This quickstart expects you understand this and every router added to the overlay will require a route to the alias\nused. The easiest way to accomplish this is to use the operating system's ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Hosts_(file)"},'"hosts file"'),"\nbut a nameserver such as a ",(0,o.kt)("a",{parentName:"p",href:"https://pi-hole.net/"},"pi hole")," also works well. Understanding this concept in-depth is out\nof scope of this guide. It is assumed you have added the following entries to your operating\nsystem's hosts file or DNS nameserver:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ziti-edge-controller")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ziti-edge-router-1")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ziti-edge-router-2"))),(0,o.kt)("h3",{id:"testing"},"Testing"),(0,o.kt)("p",null,"With the controller and router running, you can now attach to the Docker host running the Ziti controller and test that\nthe router did indeed come online and is running as you expect. To do this, we'll use another feature of the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker"),"\ncommand and ",(0,o.kt)("inlineCode",{parentName:"p"},"exec")," into the machine. First, you'll need to know your Docker container name which you can figure out by\nrunning ",(0,o.kt)("inlineCode",{parentName:"p"},"docker ps"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ docker ps\n\nCONTAINER ID   IMAGE                 COMMAND                  CREATED          STATUS          PORTS\n                   NAMES\n1b86c4b461e7   openziti/quickstart   "/var/openziti/scripts/r\u2026"   10 minutes ago   Up 10 minutes   0.0.0.0:3022->3022/tcp, :::3022->3022/tcp   musing_engelbart\na33d58248d6e   openziti/quickstart   "/var/openziti/scripts/r\u2026"   46 minutes ago   Up 46 minutes   0.0.0.0:1280->1280/tcp, :::1280->1280/tcp   xenodochial_cori\n')),(0,o.kt)("p",null,"Above, you'll see my controller is running in a container named \"xenodochial_cori\". I can tell because it's using the\ndefault port of 1280, the default port for the controller. Now I can ",(0,o.kt)("inlineCode",{parentName:"p"},"exec")," into this\ncontainer: ",(0,o.kt)("inlineCode",{parentName:"p"},"docker exec -it xenodochial_cori /bin/bash")),(0,o.kt)("p",null,"Once in the container, I can now issue ",(0,o.kt)("inlineCode",{parentName:"p"},"zitiLogin")," to authenticate the ",(0,o.kt)("inlineCode",{parentName:"p"},"ziti")," CLI."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"zitiLogin\nToken: b16f182f-88b3-4fcc-9bfc-1e32319ca486\nSaving identity 'default' to /persistent/ziti-cli.json\n")),(0,o.kt)("p",null,"And finally, once authenticated I can test to see if the edge router is online in the controller and as you'll see, the\n",(0,o.kt)("inlineCode",{parentName:"p"},"isOnline")," property is true!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ziti@a33d58248d6e:/persistent$ ziti edge list edge-routers\nid: qNZyqZEix3    name: ziti-edge-router-1    isOnline: true    role attributes: {}\nresults: 1-1 of 1\n")),(0,o.kt)("h2",{id:"next-steps"},"Next Steps"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Now that you have your network in place, you probably want to try it out. Head to the\n",(0,o.kt)("a",{parentName:"li",href:"/docs/learn/quickstarts/services/"},"Your First Service")," quickstart and start learning how to use OpenZiti."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/learn/quickstarts/zac/#using-docker"},"Install the Ziti Console")," (web UI)"),(0,o.kt)("li",{parentName:"ul"},'Add a Second Public Router: In order for multiple routers to form transit links, they need a firewall exception to expose the "link listener" port. The default port is ',(0,o.kt)("inlineCode",{parentName:"li"},"10080/tcp"),"."),(0,o.kt)("li",{parentName:"ul"},"Help",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/learn/quickstarts/network/help/change-admin-password"},"Change Admin Password")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/learn/quickstarts/network/help/reset-quickstart"},"Reset the Quickstart"))))),(0,o.kt)(i.Z,{mdxType:"Wizardly"}))}m.isMDXComponent=!0}}]);