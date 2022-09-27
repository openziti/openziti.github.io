"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[3490],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=i,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||r;return n?o.createElement(m,a(a({ref:t},c),{},{components:n})):o.createElement(m,a({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<r;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6635:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var o=n(7462),i=(n(7294),n(3905));const r={sidebar_position:3},a="Local - No Docker",l={unversionedId:"quickstarts/network/local-no-docker",id:"quickstarts/network/local-no-docker",title:"Local - No Docker",description:"This page will show you how to get your Ziti Network up and running",source:"@site/docs/quickstarts/network/local-no-docker.md",sourceDirName:"quickstarts/network",slug:"/quickstarts/network/local-no-docker",permalink:"/docusaurus/docs/quickstarts/network/local-no-docker",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/quickstarts/network/local-no-docker.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Start Cooking With Ziti",permalink:"/docusaurus/docs/quickstarts/network/"},next:{title:"Local - With Docker",permalink:"/docusaurus/docs/quickstarts/network/local-with-docker"}},s={},u=[{value:"Preparation",id:"preparation",level:2},{value:"One-liner Setup",id:"one-liner-setup",level:2},{value:"Start the Components",id:"start-the-components",level:2},{value:"Start Your Controller",id:"start-your-controller",level:3},{value:"Verify the Controller is Running",id:"verify-the-controller-is-running",level:3},{value:"Start Your Edge Router",id:"start-your-edge-router",level:3},{value:"Testing Your Overlay",id:"testing-your-overlay",level:2},{value:"Run Your First Service",id:"run-your-first-service",level:2},{value:"Customizing the Express Install",id:"customizing-the-express-install",level:2},{value:"Configuration File Location",id:"configuration-file-location",level:3},{value:"Sourcing the Env File",id:"sourcing-the-env-file",level:2},{value:"Install Ziti Admin Console (ZAC) Optional",id:"install-ziti-admin-console-zac-optional",level:2},{value:"Using the Overlay",id:"using-the-overlay",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"local---no-docker"},"Local - No Docker"),(0,i.kt)("p",null,"This page will show you how to get your ",(0,i.kt)("a",{parentName:"p",href:"../../introduction/intro"},"Ziti Network")," up and running\nquickly and easily, entirely locally. Since you'll be running everything locally, you'll have no issues communicating\nbetween network components. All the processes will run locally, and you'll be responsible for starting and stopping them\nwhen you want to turn the overlay network on or off."),(0,i.kt)("h2",{id:"preparation"},"Preparation"),(0,i.kt)("p",null,"There is not much preparation necessary to getting up-and-running locally. At this time, this guide expects that\nyou'll be running commands within a ",(0,i.kt)("inlineCode",{parentName:"p"},"bash")," shell. If you're running Windows, you will need to make sure you have\nWindows Subsystem for Linux installed for now. We plan to provide a Powershell script in the future, but for now the\nscript requires you to be able to use ",(0,i.kt)("inlineCode",{parentName:"p"},"bash"),". Make sure your local ports 1280, 6262, 10000 are free before running the\ncontroller. These ports are the default ports used by the controller. Also ensure ports 10080 and 3022 are open as these\nare the default ports the edge router will use."),(0,i.kt)("h2",{id:"one-liner-setup"},"One-liner Setup"),(0,i.kt)("p",null,"Running the latest version of Ziti locally is as simple as running this one command (the command will require the ",(0,i.kt)("inlineCode",{parentName:"p"},"jq"),"\nutility be installed):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'source /dev/stdin <<< "$(wget -qO- https://raw.githubusercontent.com/openziti/ziti/release-next/quickstart/docker/image/ziti-cli-functions.sh)"; expressInstall\n')),(0,i.kt)("p",null,"This script will perform an 'express' install of Ziti which does the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"download the latest version of the Ziti components (",(0,i.kt)("inlineCode",{parentName:"li"},"ziti"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"ziti-controller"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"ziti-edge-router"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"ziti-tunnel"),")"),(0,i.kt)("li",{parentName:"ul"},"extract the components into a predefined location: ~/.ziti/quickstart/$(hostname)"),(0,i.kt)("li",{parentName:"ul"},"create a full PKI for you to explore"),(0,i.kt)("li",{parentName:"ul"},"create a controller configuration using default values and the PKI created above"),(0,i.kt)("li",{parentName:"ul"},"create an edge-router configuration using default values and the PKI created above "),(0,i.kt)("li",{parentName:"ul"},"add helper functions and environment variables to your shell (explore the script to see all)")),(0,i.kt)("h2",{id:"start-the-components"},"Start the Components"),(0,i.kt)("p",null,"Once the latest version of Ziti has been downloaded and added to your path, it's time to start your controller and\nedge router. "),(0,i.kt)("h3",{id:"start-your-controller"},"Start Your Controller"),(0,i.kt)("p",null,"Start your controller by running ",(0,i.kt)("inlineCode",{parentName:"p"},"startZitiController"),". The location of the log file will be output for you to look\nat, tail etc. Notice that this log is written to the given location. There is no log rotation. Once run, you will see\noutput that looks like the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"ziti-controller started as process id: 7282. log located at: ${HOME}/.ziti/quickstart/My-Mac-mini.local.domain/ziti-edge-controller.log\n")),(0,i.kt)("h3",{id:"verify-the-controller-is-running"},"Verify the Controller is Running"),(0,i.kt)("p",null,"Assuming you have sourced the script, you will have an environment variable set named ",(0,i.kt)("inlineCode",{parentName:"p"},"$ZITI_EDGE_CONTROLLER_API"),". After\nthe controller has started, your controller should be listening at that hostname:port combination. You can see what your\nvalue is set to by running ",(0,i.kt)("inlineCode",{parentName:"p"},"echo $ZITI_EDGE_CONTROLLER_API"),". This variable defaults to: ",(0,i.kt)("inlineCode",{parentName:"p"},"$(hostname):1280"),". Make sure the\ncontroller is on and listening and then start the edge router. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"~ % echo $ZITI_EDGE_CONTROLLER_API\nMy-Mac-mini.local.domain:1280\n")),(0,i.kt)("h3",{id:"start-your-edge-router"},"Start Your Edge Router"),(0,i.kt)("p",null,"Now that the controller is ready, you can start the edge router created with the 'express' process. You can start this\nrouter locally by running ",(0,i.kt)("inlineCode",{parentName:"p"},"startExpressEdgeRouter"),"."),(0,i.kt)("p",null,"You should see output that looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Express Edge Router started as process id: 7555. log located at: ${HOME}/.ziti/quickstart/My-Mac-mini.local.domain/My-Mac-mini.local.domain-edge-router.log\n")),(0,i.kt)("p",null,"You can verify the edge router is listening by finding the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"$ZITI_EDGE_ROUTER_HOSTNAME:$ZITI_EDGE_ROUTER_PORT"),".\nAgain, this will default to using ",(0,i.kt)("inlineCode",{parentName:"p"},"$(hostname)")," as the host name and port 3022. "),(0,i.kt)("h2",{id:"testing-your-overlay"},"Testing Your Overlay"),(0,i.kt)("p",null,"At this point you should have a functioning ",(0,i.kt)("a",{parentName:"p",href:"../../introduction/intro"},"Ziti Network"),". The script\nyou sourced provides another function to login to your network. Try this now by running ",(0,i.kt)("inlineCode",{parentName:"p"},"zitiLogin"),". You should see\nsomething similar to this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"~ % zitiLogin\nToken: 40d2d280-a633-46c9-8499-ab2e005dd222\nSaving identity 'default' to ${HOME}/.ziti/quickstart/My-Mac-mini.local.domain/ziti-cli.json\n")),(0,i.kt)("p",null,"Congratulations! You can now use the ",(0,i.kt)("inlineCode",{parentName:"p"},"ziti")," CLI to interact with Ziti! (",(0,i.kt)("a",{parentName:"p",href:"../../cli"},"Ziti CLI Help Here"),") The\n",(0,i.kt)("inlineCode",{parentName:"p"},"ziti")," binary is not added to your path by default but will be available at ",(0,i.kt)("inlineCode",{parentName:"p"},'"${ZITI_BIN_DIR-}/ziti"'),". Add that folder\nto your path, alias ",(0,i.kt)("inlineCode",{parentName:"p"},"ziti")," if you like. Let's try to use this command to see if the edge router is online by running:\n",(0,i.kt)("inlineCode",{parentName:"p"},'"${ZITI_BIN_DIR-}/ziti" edge list edge-routers'),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'~ % "${ZITI_BIN_DIR-}/ziti" edge list edge-routers\nid: rhx6687N.P    name: My-Mac-mini.local.domain    isOnline: true    role attributes: {}\nresults: 1-1 of 1\n')),(0,i.kt)("p",null,"Horray! Our edge router shows up and is online!"),(0,i.kt)("h2",{id:"run-your-first-service"},"Run Your First Service"),(0,i.kt)("p",null,"You can try out creating and running a simple echo service through ziti by running the ",(0,i.kt)("inlineCode",{parentName:"p"},"first-service")," tutorial."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'~ % "${ZITI_BIN_DIR-}/ziti" edge tutorial first-service\n')),(0,i.kt)("h2",{id:"customizing-the-express-install"},"Customizing the Express Install"),(0,i.kt)("p",null,"You can influence and customize the express installation somewhat if you wish. This is useful if trying to run more than\none instance of Ziti locally. The most common settings you might choose to customize would be the ports used or the name\nof the network. "),(0,i.kt)("h3",{id:"configuration-file-location"},"Configuration File Location"),(0,i.kt)("p",null,"You can change the location of the configuration files output by adding a parameter to the ",(0,i.kt)("inlineCode",{parentName:"p"},"expressInstall"),' function\ninvocation. However, if you do this you will also need to set other environment variables as well. Please realize that\nif you change these variables each of the "hostname" variables will need to be addressable:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ZITI_CONTROLLER_HOSTNAME"),(0,i.kt)("li",{parentName:"ul"},"ZITI_EDGE_CONTROLLER_HOSTNAME"),(0,i.kt)("li",{parentName:"ul"},"ZITI_EDGE_CONTROLLER_PORT"),(0,i.kt)("li",{parentName:"ul"},"ZITI_EDGE_ROUTER_HOSTNAME"),(0,i.kt)("li",{parentName:"ul"},"ZITI_EDGE_ROUTER_PORT")),(0,i.kt)("p",null,"Here is an example which allows you to put all the files into a folder called: ",(0,i.kt)("inlineCode",{parentName:"p"},"${HOME}/.ziti/quickstart/newfolder"),", uses\na host named 'localhost', and uses ports 8800 for the edge controller and 9090 for the edge router:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"ZITI_CONTROLLER_HOSTNAME=localhost; \\\nZITI_EDGE_CONTROLLER_HOSTNAME=localhost; \\\nZITI_EDGE_CONTROLLER_PORT=8800; \\\nZITI_EDGE_ROUTER_HOSTNAME=localhost;ZITI_EDGE_ROUTER_PORT=9090; \\\nsource ziti-cli-functions.sh; expressInstall newfolder\n")),(0,i.kt)("h2",{id:"sourcing-the-env-file"},"Sourcing the Env File"),(0,i.kt)("p",null,'In the case you close your shell and you want to get the same environment variables back into your shell, you can just\nsource the "env" file that is placed into the location you specified. For example, if you ran the example above where\nthe deployed files went to ',(0,i.kt)("inlineCode",{parentName:"p"},"${HOME}/.ziti/quickstart/newfolder"),' you would find an "env" file at\n',(0,i.kt)("inlineCode",{parentName:"p"},"${HOME}/.ziti/quickstart/newfolder/newfolder.env")," and source it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"source ${HOME}/.ziti/quickstart/newfolder/newfolder.env\n\n~ % zitiLogin\nToken: aa1c7fb0-85d9-4a79-86b2-5df450c5b4de\nSaving identity 'default' to ${HOME}/.ziti/quickstart/newfolder/ziti-cli.json\n")),(0,i.kt)("h2",{id:"install-ziti-admin-console-zac-optional"},"Install Ziti Admin Console (ZAC) ","[Optional]"),(0,i.kt)("p",null,"Once you have the network up and running, if you want to install the UI management console, the ZAC, ",(0,i.kt)("a",{parentName:"p",href:"../zac/installation"},"follow along with\nthe installation guide")),(0,i.kt)("h2",{id:"using-the-overlay"},"Using the Overlay"),(0,i.kt)("p",null,"Now you have your zero trust overlay network in place, you probably want to try it out. Head on over to\n",(0,i.kt)("a",{parentName:"p",href:"../services"},"the services quickstart")," and start the journey to understanding how to use OpenZiti."))}p.isMDXComponent=!0}}]);