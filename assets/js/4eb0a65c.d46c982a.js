"use strict";(self.webpackChunkdocusaurus_3=self.webpackChunkdocusaurus_3||[]).push([[8021],{64404:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"learn/quickstarts/network/hosted","title":"Host OpenZiti Anywhere","description":"Quickstarts are short-lived networks that are great for learning how to use OpenZiti. For long-lived production deployments, see the deployment guides.","source":"@site/docs/learn/quickstarts/network/hosted.mdx","sourceDirName":"learn/quickstarts/network","slug":"/learn/quickstarts/network/hosted","permalink":"/docs/learn/quickstarts/network/hosted","draft":false,"unlisted":false,"editUrl":"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/learn/quickstarts/network/hosted.mdx","tags":[],"version":"current","lastUpdatedAt":1743027175000,"sidebarPosition":60,"frontMatter":{"title":"Host OpenZiti Anywhere","sidebar_position":60},"sidebar":"docsSidebar","previous":{"title":"Local - Docker Compose","permalink":"/docs/learn/quickstarts/network/local-docker-compose"},"next":{"title":"Kubernetes","permalink":"/docs/learn/quickstarts/network/local-kubernetes"}}');var i=n(74848),r=n(28453),o=n(2754);const l={title:"Host OpenZiti Anywhere",sidebar_position:60},a=void 0,c={},d=[{value:"Installation",id:"installation",level:2},{value:"Firewall",id:"firewall",level:3},{value:"Express Install",id:"express-install",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"<code>expressInstall</code> Setup",id:"expressinstall-setup",level:3},{value:"Run <code>expressInstall</code>",id:"run-expressinstall",level:3},{value:"<code>systemd</code>",id:"systemd",level:3},{value:"The helper functions vs systemd",id:"the-helper-functions-vs-systemd",level:4},{value:"Adding Environment Variables Back to the Shell",id:"adding-environment-variables-back-to-the-shell",level:2},{value:"Next Steps",id:"next-steps",level:2}];function u(e){const t={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["Quickstarts are short-lived networks that are great for learning how to use OpenZiti. For long-lived production deployments, see ",(0,i.jsx)(t.a,{href:"/docs/category/deployments",children:"the deployment guides"}),"."]})}),"\n",(0,i.jsxs)(t.p,{children:["You can absolutely choose to host your ",(0,i.jsx)(t.a,{href:"/docs/learn/introduction/",children:"network"})," anywhere you like.\nIt is not necessary for the server to be on the open internet. If it works better for you to deploy OpenZiti on your\nown network, great, do that.  The only requirement to be aware of is that every piece of the network will need to be able to communicate to the controller and at least one edge router, which this quickstart will provide."]}),"\n",(0,i.jsx)(t.p,{children:"If you have a Linux server available on the open internet, or you will provision one for use with OpenZiti, that's the\nideal scenario. With a zero trust overlay network provided by OpenZiti, you can rest assured that your traffic is safe even when using commodity internet. Furthermore, you do not need to worry about being on a network you trust, as all networks are considered untrustworthy, even your work/home network!"}),"\n",(0,i.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsxs)(t.p,{children:["When starting out deploying a ",(0,i.jsx)(t.a,{href:"/docs/learn/introduction/",children:"network"}),", we recommend you follow\nand use the ",(0,i.jsx)(t.code,{children:"expressInstall"})," function provided by the OpenZiti project. Once you're familiar with the network and\nthe configuration options available you'll be better equipped to make changes."]}),"\n",(0,i.jsx)(t.h3,{id:"firewall",children:"Firewall"}),"\n",(0,i.jsx)(t.p,{children:"The first issue you will need to deal with is opening some ports. A network will consist of at least one controller and\nat least one edge router. Both of these components will require ports to be open. For the controller you will need to\nopen a range of ports through your firewall:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"8440/tcp"}),": edge controller providing router control plane"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"8441/tcp"}),": edge controller providing client sessions"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"8442/tcp"}),": edge router providing client connections"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"8443/tcp"}),": Ziti Admin Console (ZAC) [optional]"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"These are the arbitrary ports we'll use in this example for convenience when specifying the firewall exception as a port range."}),"\n",(0,i.jsx)(t.h2,{id:"express-install",children:"Express Install"}),"\n",(0,i.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["Make sure you have ",(0,i.jsx)(t.code,{children:"tar"}),", ",(0,i.jsx)(t.code,{children:"hostname"}),", ",(0,i.jsx)(t.code,{children:"jq"})," and ",(0,i.jsx)(t.code,{children:"curl"})," installed before running the ",(0,i.jsx)(t.code,{children:"expressInstall"})," one-liner."]})}),"\n",(0,i.jsxs)(t.h3,{id:"expressinstall-setup",children:[(0,i.jsx)(t.code,{children:"expressInstall"})," Setup"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"expressInstall"})," may be customized with environment variables. Consider creating a DNS name for this installation before running the script. By default, the\nquickstart will install your Ziti network's PKI and configuration files in ",(0,i.jsx)(t.code,{children:"${HOME}/.ziti/quickstart/$(hostname -s)"}),". You may choose a different location by defining ",(0,i.jsx)(t.code,{children:"ZITI_HOME=/custom/path/to/quickstart"}),". If you do customize ",(0,i.jsx)(t.code,{children:"ZITI_HOME"})," then you should also make this assignment in your shell RC, e.g., ",(0,i.jsx)(t.code,{children:"~/.bashrc"})," for future convenience."]}),"\n",(0,i.jsxs)(t.p,{children:["You will almost certainly want to use the ",(0,i.jsx)(t.strong,{children:"public"})," DNS name\nof your instance. It is possible to use an IP address, but a DNS name is a more flexible option, which will be important if the IP ever changes."]}),"\n",(0,i.jsxs)(t.p,{children:["The quickest and easiest thing to do, is find your external DNS name and set it into the ",(0,i.jsx)(t.code,{children:"EXTERNAL_DNS"})," environment\nvariable. You may skip setting ",(0,i.jsx)(t.code,{children:"EXTERNAL_DNS"})," if you don't need to configure the advertised DNS Subject Alternative Name (SAN). For example,"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:'export EXTERNAL_DNS="acme.example.com"\n'})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:'export EXTERNAL_IP="$(curl -s eth0.me)"       \nexport ZITI_CTRL_EDGE_IP_OVERRIDE="${EXTERNAL_IP}"\nexport ZITI_CTRL_ADVERTISED_ADDRESS="${EXTERNAL_DNS:-${EXTERNAL_IP}}"\nexport ZITI_CTRL_ADVERTISED_PORT=8440\nexport ZITI_CTRL_EDGE_ADVERTISED_ADDRESS="${EXTERNAL_DNS:-${EXTERNAL_IP}}"\nexport ZITI_CTRL_EDGE_ADVERTISED_PORT=8441\nexport ZITI_ROUTER_ADVERTISED_ADDRESS="${EXTERNAL_DNS:-${EXTERNAL_IP}}"\nexport ZITI_ROUTER_IP_OVERRIDE="${EXTERNAL_IP}"\nexport ZITI_ROUTER_PORT=8442\n'})}),"\n",(0,i.jsxs)(t.h3,{id:"run-expressinstall",children:["Run ",(0,i.jsx)(t.code,{children:"expressInstall"})]}),"\n",(0,i.jsx)(t.p,{children:"As with any script that is downloaded and run from the internet, we recommend you examine\nthe script before running it locally. This script is provided as a convenience\nmethod for installing an environment quickly and easily."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:'source /dev/stdin <<< "$(wget -qO- https://get.openziti.io/ziti-cli-functions.sh)"; expressInstall\n'})}),"\n",(0,i.jsx)(t.h3,{id:"systemd",children:(0,i.jsx)(t.code,{children:"systemd"})}),"\n",(0,i.jsxs)(t.p,{children:["This assumes you already ran ",(0,i.jsx)(t.code,{children:"expressInstall"})," on a Linux server. If it's available on your system, then it is recommended to use ",(0,i.jsx)(t.code,{children:"systemd"})," to manage your controller and router processes. This\nis useful to make sure the controller can restart automatically should you shutdown/restart the server. To generate the ",(0,i.jsx)(t.code,{children:"systemd"})," unit files, run:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:'createControllerSystemdFile\ncreateRouterSystemdFile "${ZITI_ROUTER_NAME}"\n'})}),"\n",(0,i.jsx)(t.p,{children:"Example output:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:'$ createControllerSystemdFile\nController systemd file written to: /home/ubuntu/.ziti/quickstart/ip-172-31-23-18/ip-172-31-23-18-edge-controller.service\n\n$ createRouterSystemdFile "${ZITI_ROUTER_NAME}"\nRouter systemd file written to: /home/ubuntu/.ziti/quickstart/ip-172-31-23-18/ip-172-31-23-18-edge-router.service\n'})}),"\n",(0,i.jsx)(t.h4,{id:"the-helper-functions-vs-systemd",children:"The helper functions vs systemd"}),"\n",(0,i.jsxs)(t.p,{children:["The set of startController/stopController, startRouter/stopRouter are functions declared in the\n",(0,i.jsx)(t.a,{href:"https://get.openziti.io/ziti-cli-functions.sh",children:"the ziti-cli-function.sh helper script"})," and are useful for running\nthe controller and router directly in your shell. These functions are not meant to work with systemd-enabled installs. If\nyou are enabling systemd, use ",(0,i.jsx)(t.code,{children:"systemctl"})," to start/stop the components. During the expressInstall, the controller and router\nwere started using the helper scripts to complete the installation. Both should not be running, but before you run the\ncontroller and router with ",(0,i.jsx)(t.code,{children:"systemd"})," you need to stop them if they're currently running:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"stopRouter \nstopController \n"})}),"\n",(0,i.jsx)(t.p,{children:"Example output:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"$ stopRouter \nINFO: Router stopped.\n\n$ stopController \nINFO: Controller stopped.\n"})}),"\n",(0,i.jsxs)(t.p,{children:["After the ",(0,i.jsx)(t.code,{children:"systemd"})," service units are generated, you can then install them by running:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:'sudo cp "${ZITI_HOME}/${ZITI_CTRL_NAME}.service" /etc/systemd/system/ziti-controller.service\nsudo cp "${ZITI_HOME}/${ZITI_ROUTER_NAME}.service" /etc/systemd/system/ziti-router.service\nsudo systemctl daemon-reload\nsudo systemctl enable --now ziti-controller\nsudo systemctl enable --now ziti-router\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Now, both the controller and the edge router will restart automatically if the machine reboots!",(0,i.jsx)(t.br,{}),"\n","After a few seconds you can then run these commands and verify systemd has started the processes\nand see the status:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"sudo systemctl -q status ziti-controller --lines=0 --no-pager\nsudo systemctl -q status ziti-router --lines=0 --no-pager\n"})}),"\n",(0,i.jsx)(t.p,{children:"Example output:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"$ sudo systemctl -q status ziti-controller --lines=0 --no-pager\n\u25cf ziti-controller.service - Ziti-Controller\n     Loaded: loaded (/etc/systemd/system/ziti-controller.service; disabled; vendor preset: enabled)\n     Active: active (running) since Thu 2021-11-11 19:05:46 UTC; 8s ago\n   Main PID: 2375 (ziti-controller)\n      Tasks: 7 (limit: 1154)\n     Memory: 43.7M\n     CGroup: /system.slice/ziti-controller.service\n             \u2514\u25002375 /home/ubuntu/.ziti/quickstart/ip-10-0-0-1/ziti-bin/ziti-v0.22.11/ziti-controller run /home/ubuntu/.ziti/quickstart/ip-10-0-0-1/co\u2026\n\n$ sudo systemctl -q status ziti-router --lines=0 --no-pager\n\u25cf ziti-router.service - Ziti-Router for ip-10-0-0-1-edge-router\n     Loaded: loaded (/etc/systemd/system/ziti-router.service; disabled; vendor preset: enabled)\n     Active: active (running) since Thu 2021-11-11 19:05:47 UTC; 8s ago\n   Main PID: 2385 (ziti-router)\n      Tasks: 6 (limit: 1154)\n     Memory: 231.4M\n     CGroup: /system.slice/ziti-router.service\n             \u2514\u25002385 /home/ubuntu/.ziti/quickstart/ip-10-0-0-1/ziti-bin/ziti-v0.22.11/ziti-router run /home/ubuntu/.ziti/quickstart/ip-10-0-0-1/ip-10\u2026\n"})}),"\n",(0,i.jsx)(t.h2,{id:"adding-environment-variables-back-to-the-shell",children:"Adding Environment Variables Back to the Shell"}),"\n",(0,i.jsxs)(t.p,{children:["If you log out and log back in again you can source the *.env file located in ",(0,i.jsx)(t.code,{children:"ZITI_HOME"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"source ~/.ziti/quickstart/$(hostname -s)/$(hostname -s).env\n"})}),"\n",(0,i.jsx)(t.p,{children:"Example output:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"$ source ~/.ziti/quickstart/$(hostname -s)/$(hostname -s).env\nadding /home/ubuntu/.ziti/quickstart/ip-10-0-0-1/ziti-bin/ziti-v0.20.2 to the path\n\n$ echo $ZITI_HOME\n/home/ubuntu/.ziti/quickstart/ip-10-0-0-1\n"})}),"\n",(0,i.jsx)(t.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Now that you have your network in place, you probably want to try it out. Head to the\n",(0,i.jsx)(t.a,{href:"/docs/learn/quickstarts/services/",children:"Your First Service"})," quickstart and start learning how to use OpenZiti."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/docs/learn/quickstarts/zac/",children:"Install the console"})," (web UI)"]}),"\n",(0,i.jsxs)(t.li,{children:['Add a Second Public Router: In order for multiple routers to form transit links, they need a firewall exception to expose the "link listener" port. The default port is ',(0,i.jsx)(t.code,{children:"10080/tcp"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Help","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"./help/change-admin-password",children:"Change Admin Password"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"./help/reset-quickstart",children:"Reset the Quickstart"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(o.A,{})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},2754:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var s=n(74848);function i(e){return(0,s.jsxs)("div",{id:"Wizardly",children:[(0,s.jsxs)("div",{className:"wizardmodal",children:[(0,s.jsx)("div",{className:"page-wrapper bg-img-1"}),(0,s.jsx)("div",{className:"page-wrapper",children:(0,s.jsxs)("div",{className:"wizard main",children:[(0,s.jsx)("div",{className:"container",children:(0,s.jsxs)("div",{className:"row",children:[(0,s.jsx)("div",{className:"whitez"}),(0,s.jsx)("h1",{id:"WizardTitle",className:"header-title"}),(0,s.jsx)("div",{className:"wizardclose"})]})}),(0,s.jsx)("div",{className:"ocontainer",children:(0,s.jsx)("div",{className:"zcontainer",children:(0,s.jsxs)("div",{role:"application",className:"wizard clearfix vertical",id:"steps-uid-0",children:[(0,s.jsx)("div",{className:"steps clearfix",children:(0,s.jsx)("ul",{id:"WizardTabs",role:"tablist"})}),(0,s.jsx)("div",{className:"content clearfix",children:(0,s.jsx)("div",{children:(0,s.jsx)("fieldset",{id:"WizardContents",role:"tabpanel",className:"body current","aria-hidden":"false"})})}),(0,s.jsx)("div",{className:"actions clearfix",children:(0,s.jsxs)("ul",{role:"menu","aria-label":"Pagination",children:[(0,s.jsx)("li",{children:(0,s.jsx)("button",{id:"WizardPreviousButton",children:"Previous"})}),(0,s.jsxs)("li",{children:[(0,s.jsx)("button",{id:"WizardNextButton",children:"Next"}),(0,s.jsx)("button",{id:"WizarFinishButton",children:"Finish"})]})]})})]})})})]})})]}),(0,s.jsx)("div",{className:"openWizard",children:"Try the Wizard"})]})}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var s=n(96540);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);