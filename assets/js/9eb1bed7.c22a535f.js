"use strict";(self.webpackChunkdocusaurus_3=self.webpackChunkdocusaurus_3||[]).push([[9066],{21118:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"learn/quickstarts/network/local-no-docker","title":"Local - No Docker","description":"This page will show you how to get your network up and running","source":"@site/docs/learn/quickstarts/network/local-no-docker.mdx","sourceDirName":"learn/quickstarts/network","slug":"/learn/quickstarts/network/local-no-docker","permalink":"/docs/learn/quickstarts/network/local-no-docker","draft":false,"unlisted":false,"editUrl":"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/learn/quickstarts/network/local-no-docker.mdx","tags":[],"version":"current","sidebarPosition":30,"frontMatter":{"sidebar_position":30},"sidebar":"docsSidebar","previous":{"title":"Network","permalink":"/docs/category/network"},"next":{"title":"Local - With Docker","permalink":"/docs/learn/quickstarts/network/local-with-docker"}}');var i=t(74848),s=t(28453),o=t(2754);const l={sidebar_position:30},a="Local - No Docker",c={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Run <code>expressInstall</code> One-liner",id:"run-expressinstall-one-liner",level:2},{value:"Start the Components",id:"start-the-components",level:2},{value:"Start Your Controller",id:"start-your-controller",level:2},{value:"Verify the Controller is Running",id:"verify-the-controller-is-running",level:3},{value:"Start Your Edge Router",id:"start-your-edge-router",level:3},{value:"Stopping the Controller and Router",id:"stopping-the-controller-and-router",level:3},{value:"Testing Your Overlay",id:"testing-your-overlay",level:2},{value:"Run Your First Service",id:"run-your-first-service",level:2},{value:"Customizing the Express Install",id:"customizing-the-express-install",level:2},{value:"Configuration File Location",id:"configuration-file-location",level:3},{value:"Sourcing the Env File",id:"sourcing-the-env-file",level:2},{value:"Next Steps",id:"next-steps",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"local---no-docker",children:"Local - No Docker"})}),"\n",(0,i.jsxs)(n.p,{children:["This page will show you how to get your ",(0,i.jsx)(n.a,{href:"/docs/learn/introduction/",children:"network"})," up and running\r\nquickly and easily, entirely locally. Since you'll be running everything locally, you'll have no issues communicating\r\nbetween network components. All the processes will run locally, and you'll be responsible for starting and stopping them\r\nwhen you want to turn the overlay network on or off."]}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Make sure you have ",(0,i.jsx)(n.code,{children:"tar"}),", ",(0,i.jsx)(n.code,{children:"hostname"}),", ",(0,i.jsx)(n.code,{children:"jq"})," and ",(0,i.jsx)(n.code,{children:"curl"})," installed before running the ",(0,i.jsx)(n.code,{children:"expressInstall"})," one-liner."]})}),"\n",(0,i.jsxs)(n.p,{children:["There is not much preparation necessary to getting up-and-running locally. At this time, this guide expects that\r\nyou'll be running commands within a ",(0,i.jsx)(n.code,{children:"bash"})," shell. If you're running Windows, you will need to make sure you have\r\nWindows Subsystem for Linux installed for now. We plan to provide a Powershell script in the future, but for now the\r\nscript requires you to be able to use ",(0,i.jsx)(n.code,{children:"bash"}),". Make sure your local ports 1280, 6262, 10000 are free before running the\r\ncontroller. These ports are the default ports used by the controller. Also ensure ports 10080 and 3022 are open as these\r\nare the default ports the edge router will use."]}),"\n",(0,i.jsxs)(n.h2,{id:"run-expressinstall-one-liner",children:["Run ",(0,i.jsx)(n.code,{children:"expressInstall"})," One-liner"]}),"\n",(0,i.jsx)(n.p,{children:"Running the latest version of Ziti locally is as simple as running this one command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:'source /dev/stdin <<< "$(wget -qO- https://get.openziti.io/ziti-cli-functions.sh)"; expressInstall\n'})}),"\n",(0,i.jsx)(n.p,{children:"This script will perform an 'express' install of Ziti which does the following:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["download the latest version of the OpenZiti binary (",(0,i.jsx)(n.code,{children:"ziti"}),")"]}),"\n",(0,i.jsx)(n.li,{children:"extract the binary into a predefined location: ~/.ziti/quickstart/$(hostname -s)"}),"\n",(0,i.jsx)(n.li,{children:"create a full PKI for you to explore"}),"\n",(0,i.jsx)(n.li,{children:"create a controller configuration using default values and the PKI created above"}),"\n",(0,i.jsx)(n.li,{children:"create an edge-router configuration using default values and the PKI created above"}),"\n",(0,i.jsx)(n.li,{children:"add helper functions and environment variables to your shell (explore the script to see all)"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"start-the-components",children:"Start the Components"}),"\n",(0,i.jsx)(n.p,{children:"Once the latest version of Ziti has been downloaded and added to your path, it's time to start your controller and\r\nedge-router."}),"\n",(0,i.jsx)(n.h2,{id:"start-your-controller",children:"Start Your Controller"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"startController\n"})}),"\n",(0,i.jsx)(n.p,{children:"Example output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"$ startController\r\nziti-controller started as process id: 1286. log located at: /home/vagrant/.ziti/quickstart/bullseye/bullseye.log\n"})}),"\n",(0,i.jsx)(n.h3,{id:"verify-the-controller-is-running",children:"Verify the Controller is Running"}),"\n",(0,i.jsxs)(n.p,{children:["After running ",(0,i.jsx)(n.code,{children:"expressInstall"}),", you will have environment variables set named ",(0,i.jsx)(n.code,{children:"ZITI_CTRL_EDGE_ADVERTISED_ADDRESS"})," and\r\n",(0,i.jsx)(n.code,{children:"ZITI_CTRL_EDGE_ADVERTISED_PORT"}),". After the controller has started, your controller should be listening at that\r\naddress",":port",' combination. (Note, if you do not have these environment variables, you\'ve probably closed your shell and opened\r\nit up again. You can get the environment variables by sourcing the ".env" file.\r\n',(0,i.jsx)(n.a,{href:"#sourcing-the-env-file",children:"See the section at the bottom of the page"}),"\r\nfor details)"]}),"\n",(0,i.jsxs)(n.p,{children:["You can see what your value is set to by running\r\n",(0,i.jsx)(n.code,{children:"echo ${ZITI_CTRL_EDGE_ADVERTISED_ADDRESS}:${ZITI_CTRL_EDGE_ADVERTISED_PORT}"}),". This value defaults to:\r\n",(0,i.jsx)(n.code,{children:"$(hostname -s):1280"}),". Make sure the controller is available by trying to curl to the address, and then start the edge router."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:'curl -sk "https://${ZITI_CTRL_EDGE_ADVERTISED_ADDRESS}:${ZITI_CTRL_EDGE_ADVERTISED_PORT}"\n'})}),"\n",(0,i.jsx)(n.p,{children:"Example output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:'{"data":{"apiVersions":{"edge":{"v1":{"apiBaseUrls":["https://your.hostname:1280/edge/client/v1"],"path":"/edge/client/v1"}},"edge-client":{"v1":{"apiBaseUrls":["https://your.hostname:1280/edge/client/v1"],"path":"/edge/client/v1"}},"edge-management":{"v1":{"apiBaseUrls":["https://your.hostname:1280/edge/management/v1"],"path":"/edge/management/v1"}}},"buildDate":"2023-06-23T15:08:25Z","revision":"65d1dda821a3","runtimeVersion":"go1.20.5","version":"v0.28.4"},"meta":{}}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"start-your-edge-router",children:"Start Your Edge Router"}),"\n",(0,i.jsx)(n.p,{children:"Now that the controller is ready, you can start the edge router created with the 'express' process. You can start this\r\nrouter locally by running:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"startRouter\n"})}),"\n",(0,i.jsx)(n.p,{children:"Example output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"$ startRouter\r\nExpress edge router started as process id: 1296. log located at: /home/vagrant/.ziti/quickstart/bullseye/bullseye-edge-router.log\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You can verify the edge router is listening by finding the value of ",(0,i.jsx)(n.code,{children:"$ZITI_ROUTER_ADVERTISED_ADDRESS:$ZITI_ROUTER_PORT"}),".\r\nAgain, this will default to using ",(0,i.jsx)(n.code,{children:"$(hostname -s)"})," as the host name and port 3022."]}),"\n",(0,i.jsx)(n.h3,{id:"stopping-the-controller-and-router",children:"Stopping the Controller and Router"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"stopRouter \r\nstopController \n"})}),"\n",(0,i.jsx)(n.p,{children:"Example output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"$ stopRouter \r\nINFO: Router stopped.\r\n\r\n$ stopController \r\nINFO: Controller stopped.\n"})}),"\n",(0,i.jsx)(n.h2,{id:"testing-your-overlay",children:"Testing Your Overlay"}),"\n",(0,i.jsxs)(n.p,{children:["At this point you should have a functioning ",(0,i.jsx)(n.a,{href:"/docs/learn/introduction/",children:"network"}),". The script\r\nyou sourced provides another function to login to your network. Try this now by running ",(0,i.jsx)(n.code,{children:"zitiLogin"}),". You should see\r\nsomething similar to this:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"$ zitiLogin\r\nToken: 40d2d280-a633-46c9-8499-ab2e005dd222\r\nSaving identity 'default' to ${HOME}/.ziti/quickstart/My-Mac-mini/ziti-cli.json\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You can now use the ",(0,i.jsx)(n.code,{children:"ziti"})," CLI to interact with Ziti!. The\r\n",(0,i.jsx)(n.code,{children:"ziti"})," binary is not added to your path by default but will be available at ",(0,i.jsx)(n.code,{children:'"${ZITI_BIN_DIR-}/ziti"'}),". Add that folder\r\nto your path, alias ",(0,i.jsx)(n.code,{children:"ziti"})," if you like. Let's try to use this command to see if the edge router is online by running:\r\n",(0,i.jsx)(n.code,{children:'"${ZITI_BIN_DIR-}/ziti" edge list edge-routers'}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:'$ "${ZITI_BIN_DIR-}/ziti" edge list edge-routers\r\nid: rhx6687N.P    name: My-Mac-mini    isOnline: true    role attributes: {}\r\nresults: 1-1 of 1\n'})}),"\n",(0,i.jsx)(n.p,{children:"Horray! Our edge router shows up and is online!"}),"\n",(0,i.jsx)(n.h2,{id:"run-your-first-service",children:"Run Your First Service"}),"\n",(0,i.jsxs)(n.p,{children:["You can try out creating and running a simple echo service through ziti by running the ",(0,i.jsx)(n.code,{children:"first-service"})," tutorial."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:'$ "${ZITI_BIN_DIR-}/ziti" demo first-service\n'})}),"\n",(0,i.jsx)(n.h2,{id:"customizing-the-express-install",children:"Customizing the Express Install"}),"\n",(0,i.jsx)(n.p,{children:"You can influence and customize the express installation somewhat if you wish. This is useful if trying to run more than\r\none instance of Ziti locally. The most common settings you might choose to customize would be the ports used or the name\r\nof the network."}),"\n",(0,i.jsx)(n.h3,{id:"configuration-file-location",children:"Configuration File Location"}),"\n",(0,i.jsxs)(n.p,{children:["You can change the location of the configuration files output by setting the ",(0,i.jsx)(n.code,{children:"ZITI_NETWORK"})," environment variable prior\r\nto running ",(0,i.jsx)(n.code,{children:"expressInstall"}),'. However, if you do this you will also need to set other environment variables as well.\r\nPlease realize that if you change these variables each of the "hostname" variables will need to be addressable:']}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"ZITI_CTRL_EDGE_ADVERTISED_ADDRESS"}),"\n",(0,i.jsx)(n.li,{children:"ZITI_CTRL_EDGE_ADVERTISED_PORT"}),"\n",(0,i.jsx)(n.li,{children:"ZITI_ROUTER_ADVERTISED_ADDRESS"}),"\n",(0,i.jsx)(n.li,{children:"ZITI_ROUTER_PORT"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Here is an example which allows you to put all the files into a folder called: ",(0,i.jsx)(n.code,{children:"${HOME}/.ziti/quickstart/newfolder"}),", uses\r\na host named 'localhost', and uses ports 8800 for the edge controller and 9090 for the edge router:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:'ZITI_NETWORK="newfolder"; \\\r\nZITI_CTRL_EDGE_ADVERTISED_ADDRESS=localhost; \\\r\nZITI_CTRL_EDGE_ADVERTISED_PORT=8800; \\\r\nZITI_ROUTER_ADVERTISED_ADDRESS=localhost; \\\r\nZITI_ROUTER_PORT=9090; \\\r\nsource ziti-cli-functions.sh; expressInstall\n'})}),"\n",(0,i.jsx)(n.h2,{id:"sourcing-the-env-file",children:"Sourcing the Env File"}),"\n",(0,i.jsxs)(n.p,{children:['In the case you close your shell and you want to get the same environment variables back into your shell, you can just\r\nsource the "env" file that is placed into the location you specified. This file is usually located at:\r\n',(0,i.jsx)(n.code,{children:"$HOME/.ziti/quickstart/$(hostname)/$(hostname).env"}),". You can source this file to place the environment variables back\r\ninto your shell."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"source $HOME/.ziti/quickstart/$(hostname)/$(hostname).env\n"})}),"\n",(0,i.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Now that you have your network in place, you probably want to try it out. Head to the\r\n",(0,i.jsx)(n.a,{href:"/docs/learn/quickstarts/services/",children:"Your First Service"})," quickstart and start learning how to use OpenZiti."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/docs/learn/quickstarts/zac/",children:"Install the console"})," (web UI)"]}),"\n",(0,i.jsxs)(n.li,{children:['Add a Second Public Router: In order for multiple routers to form transit links, they need a firewall exception to expose the "link listener" port. The default port is ',(0,i.jsx)(n.code,{children:"10080/tcp"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Help","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/learn/quickstarts/network/help/change-admin-password",children:"Change Admin Password"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/learn/quickstarts/network/help/reset-quickstart",children:"Reset the Quickstart"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(o.A,{})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},2754:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var r=t(74848);function i(e){return(0,r.jsxs)("div",{id:"Wizardly",children:[(0,r.jsxs)("div",{className:"wizardmodal",children:[(0,r.jsx)("div",{className:"page-wrapper bg-img-1"}),(0,r.jsx)("div",{className:"page-wrapper",children:(0,r.jsxs)("div",{className:"wizard main",children:[(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"whitez"}),(0,r.jsx)("h1",{id:"WizardTitle",className:"header-title"}),(0,r.jsx)("div",{className:"wizardclose"})]})}),(0,r.jsx)("div",{className:"ocontainer",children:(0,r.jsx)("div",{className:"zcontainer",children:(0,r.jsxs)("div",{role:"application",className:"wizard clearfix vertical",id:"steps-uid-0",children:[(0,r.jsx)("div",{className:"steps clearfix",children:(0,r.jsx)("ul",{id:"WizardTabs",role:"tablist"})}),(0,r.jsx)("div",{className:"content clearfix",children:(0,r.jsx)("div",{children:(0,r.jsx)("fieldset",{id:"WizardContents",role:"tabpanel",className:"body current","aria-hidden":"false"})})}),(0,r.jsx)("div",{className:"actions clearfix",children:(0,r.jsxs)("ul",{role:"menu","aria-label":"Pagination",children:[(0,r.jsx)("li",{children:(0,r.jsx)("button",{id:"WizardPreviousButton",children:"Previous"})}),(0,r.jsxs)("li",{children:[(0,r.jsx)("button",{id:"WizardNextButton",children:"Next"}),(0,r.jsx)("button",{id:"WizarFinishButton",children:"Finish"})]})]})})]})})})]})})]}),(0,r.jsx)("div",{className:"openWizard",children:"Try the Wizard"})]})}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var r=t(96540);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);