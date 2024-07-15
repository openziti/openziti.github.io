"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[1135],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,g=c["".concat(u,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(g,l(l({ref:t},p),{},{components:n})):r.createElement(g,l({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(86010);const i={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,l),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>N});var r=n(87462),a=n(67294),i=n(86010),l=n(12466),o=n(16550),u=n(91980),s=n(67392),p=n(50012);function c(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=d(e),[l,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[u,s]=g({queryString:n,groupId:r}),[c,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,p.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),f=(()=>{const e=u??c;return m({value:e,tabValues:i})?e:null})();(0,a.useLayoutEffect)((()=>{f&&o(f)}),[f]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),k(e)}),[s,k,i]),tabValues:i}}var f=n(72389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:o,selectValue:u,tabValues:s}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),r=s[n].value;r!==o&&(c(t),u(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},l,{className:(0,i.Z)("tabs__item",h.tabItem,l?.className,{"tabs__item--active":o===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=k(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",h.tabList)},a.createElement(b,(0,r.Z)({},e,t)),a.createElement(v,(0,r.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return a.createElement(y,(0,r.Z)({key:String(t)},e))}},20476:(e,t,n)=>{n.d(t,{ZP:()=>o});var r=n(87462),a=(n(67294),n(3905));const i={toc:[]},l="wrapper";function o(e){let{components:t,...n}=e;return(0,a.kt)(l,(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("br",null),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ziti")," CLI will help you get an API Session from the controller's management API. You will be prompted to trust any new server certificates. Your login token cache and trust store are managed by the CLI in your home directory."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"# implies https://localhost:1280\nziti edge login -u admin -p admin\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"# implies https://\nziti edge login ctrl.ziti.example.com:8441 -u admin -p admin\n")))}o.isMDXComponent=!0},12810:(e,t,n)=>{n.d(t,{ZP:()=>p});var r=n(87462),a=(n(67294),n(3905)),i=n(74866);const l=(o="TabItem",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var o;const u={toc:[]},s="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(l,{value:"debian",label:"Debian",mdxType:"TabItem"},(0,a.kt)("p",null,"Configure the repository for the Debian family of distributions (Ubuntu, Mint, Pop!_OS)"),(0,a.kt)("p",null,"Install the OpenZiti repository key."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"curl -sSLf https://get.openziti.io/tun/package-repos.gpg | sudo gpg --dearmor --output /usr/share/keyrings/openziti.gpg\n")),(0,a.kt)("p",null,"Ensure the key is readable by all users."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"sudo chmod a+r /usr/share/keyrings/openziti.gpg\n")),(0,a.kt)("p",null,"Create the repository file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"sudo tee /etc/apt/sources.list.d/openziti-release.list >/dev/null <<EOF\ndeb [signed-by=/usr/share/keyrings/openziti.gpg] https://packages.openziti.org/zitipax-openziti-deb-stable debian main\nEOF\n")),(0,a.kt)("p",null,"Update the package list."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"sudo apt update\n"))),(0,a.kt)(l,{value:"redhat",label:"RedHat",mdxType:"TabItem"},(0,a.kt)("p",null,"Configure the repository for the RedHat family (Fedora, Rocky, Alma)"),(0,a.kt)("p",null,"Create the repository file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"sudo tee /etc/yum.repos.d/openziti-release.repo >/dev/null <<\\EOF\n[OpenZitiRelease]\nname=OpenZiti Release\nbaseurl=https://packages.openziti.org/zitipax-openziti-rpm-stable/redhat/$basearch\nenabled=1\ngpgcheck=0\ngpgkey=https://packages.openziti.org/zitipax-openziti-rpm-stable/redhat/$basearch/repodata/repomd.xml.key\nrepo_gpgcheck=1\nEOF\n")),(0,a.kt)("p",null,"Update the package list."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"sudo dnf update\n")))))}p.isMDXComponent=!0},86004:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>k,frontMatter:()=>u,metadata:()=>p,toc:()=>d});var r=n(87462),a=(n(67294),n(3905)),i=n(74866),l=n(85162),o=(n(20476),n(12810));const u={title:"Router Deployment"},s=void 0,p={unversionedId:"guides/deployments/linux/router/deploy",id:"guides/deployments/linux/router/deploy",title:"Router Deployment",description:"This article is about deploying a router as a Linux system service. The router introduction may be helpful to read first.",source:"@site/docs/guides/deployments/10-linux/20-router/10-deploy.mdx",sourceDirName:"guides/deployments/10-linux/20-router",slug:"/guides/deployments/linux/router/deploy",permalink:"/docs/guides/deployments/linux/router/deploy",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/guides/deployments/10-linux/20-router/10-deploy.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Router Deployment"},sidebar:"docsSidebar",previous:{title:"Backup",permalink:"/docs/guides/deployments/linux/controller/backup"},next:{title:"Configuration",permalink:"/docs/guides/deployments/linux/router/router-configuration"}},c={},d=[{value:"Router Creation",id:"router-creation",level:2},{value:"Install the Router Package",id:"install-the-router-package",level:2},{value:"One-liner Install Script",id:"one-liner-install-script",level:3},{value:"Manual Package Repo Setup",id:"manual-package-repo-setup",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Generate a Configuration",id:"generate-a-configuration",level:3},{value:"Answer Interactively",id:"answer-interactively",level:4},{value:"Answer Non-interactively",id:"answer-non-interactively",level:4},{value:"Migrate an Existing Configuration",id:"migrate-an-existing-configuration",level:3},{value:"Craft a Configuration",id:"craft-a-configuration",level:3},{value:"Starting Up",id:"starting-up",level:2},{value:"Further Configuration",id:"further-configuration",level:2},{value:"Firewall",id:"firewall",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Logging",id:"logging",level:2},{value:"Uninstall",id:"uninstall",level:2}],m={toc:d},g="wrapper";function k(e){let{components:t,...n}=e;return(0,a.kt)(g,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This article is about deploying a router as a Linux system service. ",(0,a.kt)("a",{parentName:"p",href:"/docs/learn/introduction/components#router"},"The router introduction")," may be helpful to read first."),(0,a.kt)("p",null,"We'll cover the following topics:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#router-creation"},"Creation")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#installation"},"Installation")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#configuration"},"Configuration")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#starting-up"},"Starting Up"))),(0,a.kt)("h2",{id:"router-creation"},"Router Creation"),(0,a.kt)("p",null,"You must create the router in the controller first with ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/deployments/linux/console"},"the web console")," or ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/deployments/linux/router/cli-mgmt"},"the CLI"),"."),(0,a.kt)("p",null,"After creating the router, save the enrollment token (JWT) and use it to finish configuring the router deployment."),(0,a.kt)("h2",{id:"install-the-router-package"},"Install the Router Package"),(0,a.kt)("p",null,"The router package provides a systemd service unit and bootstrapping script."),(0,a.kt)("h3",{id:"one-liner-install-script"},"One-liner Install Script"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"curl -sS https://get.openziti.io/install.bash | sudo bash -s openziti-router\n")),(0,a.kt)("h3",{id:"manual-package-repo-setup"},"Manual Package Repo Setup"),(0,a.kt)("p",null,"Configure the package repository and install ",(0,a.kt)("inlineCode",{parentName:"p"},"openziti-router"),"."),(0,a.kt)(o.ZP,{mdxType:"LinuxPackageRepo"}),(0,a.kt)("p",null,"Finally, install the package: ",(0,a.kt)("strong",{parentName:"p"},"openziti-router")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"The ",(0,a.kt)("inlineCode",{parentName:"em"},"openziti")," package provides the ",(0,a.kt)("inlineCode",{parentName:"em"},"ziti")," CLI and is installed as a dependency.")),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"You must generate, migrate, or craft a configuration. Configuration consists of a config YAML file and router enrollment."),(0,a.kt)("h3",{id:"generate-a-configuration"},"Generate a Configuration"),(0,a.kt)("p",null,"This is the recommended approach if you are deploying a new router."),(0,a.kt)("h4",{id:"answer-interactively"},"Answer Interactively"),(0,a.kt)("p",null,"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"bootstrap.bash")," to be prompted for the required values."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"sudo /opt/openziti/etc/router/bootstrap.bash\n")),(0,a.kt)("h4",{id:"answer-non-interactively"},"Answer Non-interactively"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Set the required values in the answer file ",(0,a.kt)("strong",{parentName:"p"},"/opt/openziti/etc/router/bootstrap.env"),"."),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"ZITI_CTRL_ADVERTISED_ADDRESS")," - the control plane DNS name or IP address (required)"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"ZITI_CTRL_ADVERTISED_PORT")," - the control plane TCP port (default: 1280)"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"ZITI_ENROLL_TOKEN")," - router enrollment token (JWT) as a literal string or path to a file (required)"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"ZITI_ROUTER_ADVERTISED_ADDRESS")," - permanent DNS name or IP address of this router (required)"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"ZITI_ROUTER_PORT")," - listener TCP port (default: 3022)"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"bootstrap.bash")," "),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-text"},"sudo /opt/openziti/etc/router/bootstrap.bash\n")))),(0,a.kt)("h3",{id:"migrate-an-existing-configuration"},"Migrate an Existing Configuration"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/guides/deployments/linux/router/migrate"},"This example")," illustrates copying the configuration and identity files from a previous installation to the router service's working directory."),(0,a.kt)("h3",{id:"craft-a-configuration"},"Craft a Configuration"),(0,a.kt)("p",null,"Craft a new configuration by running ",(0,a.kt)("inlineCode",{parentName:"p"},"ziti create config router edge --routerName=router"),"."),(0,a.kt)("p",null,"Review the environment variables, especially those named like ",(0,a.kt)("inlineCode",{parentName:"p"},"ZITI_ROUTER_*"),", that influence the router configuration with ",(0,a.kt)("inlineCode",{parentName:"p"},"ziti create config environment"),"."),(0,a.kt)("p",null,"Here's a link to ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/configuration/router"},"the router configuration reference"),"."),(0,a.kt)("h2",{id:"starting-up"},"Starting Up"),(0,a.kt)("p",null,"Run the service now and after every reboot"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"sudo systemctl enable --now ziti-router.service\n")),(0,a.kt)("h2",{id:"further-configuration"},"Further Configuration"),(0,a.kt)("p",null,"Customize ",(0,a.kt)("strong",{parentName:"p"},"/var/lib/ziti-router/config.yml")," as needed and restart the service."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"sudo systemctl restart ziti-router.service\n")),(0,a.kt)("p",null,"Here's a link to ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/configuration/router"},"the configuration reference"),"."),(0,a.kt)("p",null,"Learn more about ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/deployments/linux/router/cli-mgmt"},"managing routers with the CLI"),"."),(0,a.kt)("h2",{id:"firewall"},"Firewall"),(0,a.kt)("p",null,"The router's generated configuration uses a single TCP port (default: ",(0,a.kt)("inlineCode",{parentName:"p"},"3022"),")."),(0,a.kt)("p",null,"Confirm the router is running and listening on the expected port."),(0,a.kt)("p",null,'This will list all TCP listeners for "ziti" commands.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"sudo ss -tlnp | grep ziti\n")),(0,a.kt)("p",null,'If you have only one process named like "ziti" running, you will see output similar to this.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-buttonless",metastring:'title="Output"',title:'"Output"'},'LISTEN 0      4096                          *:3022             *:*    users:(("ziti",pid=2166302,fd=8))\n')),(0,a.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("p",null,"Verify the edge listener is reachable by identities. The edge listener must terminate TLS for identities because they will authenticate with a client certificate for all interactions."),(0,a.kt)("p",null,"The server certificate must be issued by the controller's edge signer CA (",(0,a.kt)("inlineCode",{parentName:"p"},"edge.enrollment.signerCert")," in the controller's config.yml)."),(0,a.kt)("p",null,"Substitute the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"listeners[?binding == 'edge'].options.advertise")," from ",(0,a.kt)("strong",{parentName:"p"},"/var/lib/ziti-router/config.yml"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"openssl s_client -connect {listeners[?binding == 'edge'].options.advertise} -alpn ziti-edge -showcerts <>/dev/null \\\n|& openssl storeutl -certs -noout -text /dev/stdin \\\n| grep -E '(Subject|Issuer):'\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-buttonless",metastring:'title="Output"',title:'"Output"'},"Issuer: C=US, L=Charlotte, O=NetFoundry, OU=ADV-DEV, CN=NetFoundry Inc. Intermediate CA 42KvRQxn.\nSubject: C=US, ST=NC, L=Charlotte, O=NetFoundry, OU=Ziti, CN=BhCjN2Rkx\nIssuer: C=US, L=Charlotte, O=NetFoundry, OU=ADV-DEV, CN=NetFoundry Inc. Certificate Authority IpcOEkAR6\nSubject: C=US, ST=NC, L=Charlotte, O=NetFoundry, OU=ADV-DEV, CN=NetFoundry Inc. Intermediate CA 42KvRQxn.\n")),(0,a.kt)("p",null,"At least one router must provide a link listener if you have multiple routers. Verify all link listeners are reachable by all routers. The link listener must terminate TLS for routers because they will authenticate with a client certificate for all interactions."),(0,a.kt)("p",null,"The server certificate must be issued by the controller's edge signer CA (",(0,a.kt)("inlineCode",{parentName:"p"},"edge.enrollment.signerCert")," in the controller's config.yml)."),(0,a.kt)("p",null,"Substitute the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"link.listeners[?binding == 'transport'].advertise")," after the ",(0,a.kt)("inlineCode",{parentName:"p"},"tls:")," prefix from ",(0,a.kt)("strong",{parentName:"p"},"/var/lib/ziti-router/config.yml"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"openssl s_client -connect {link.listeners[?binding == 'transport'].advertise} -alpn ziti-link -showcerts <>/dev/null \\\n|& openssl storeutl -certs -noout -text /dev/stdin \\\n| grep -E '(Subject|Issuer):'\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-buttonless",metastring:'title="Output"',title:'"Output"'},"Issuer: C=US, L=Charlotte, O=NetFoundry, OU=ADV-DEV, CN=NetFoundry Inc. Intermediate CA 42KvRQxn.\nSubject: C=US, ST=NC, L=Charlotte, O=NetFoundry, OU=Ziti, CN=BhCjN2Rkx\nIssuer: C=US, L=Charlotte, O=NetFoundry, OU=ADV-DEV, CN=NetFoundry Inc. Certificate Authority IpcOEkAR6\nSubject: C=US, ST=NC, L=Charlotte, O=NetFoundry, OU=ADV-DEV, CN=NetFoundry Inc. Intermediate CA 42KvRQxn.\n")),(0,a.kt)("h2",{id:"logging"},"Logging"),(0,a.kt)("p",null,"View the service's output."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"journalctl -u ziti-router.service\n")),(0,a.kt)("br",null),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"goformats",label:"Log Formats",mdxType:"TabItem"},(0,a.kt)("p",null,"Set a different format in the ",(0,a.kt)("inlineCode",{parentName:"p"},"ZITI_ARGS")," environment variable and restart the service."),(0,a.kt)("br",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text",metastring:"title=/opt/openziti/etc/router/service.env",title:"/opt/openziti/etc/router/service.env"},"ZITI_ARGS='--log-formatter text'\n")),(0,a.kt)("br",null)),(0,a.kt)(l.Z,{value:"golevels",label:"Log Levels",mdxType:"TabItem"},(0,a.kt)("p",null,"Enable DEBUG log level with the ",(0,a.kt)("inlineCode",{parentName:"p"},"--verbose")," flag in the ",(0,a.kt)("inlineCode",{parentName:"p"},"ZITI_ARGS")," environment variable and restart the service."),(0,a.kt)("br",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text",metastring:"title=/opt/openziti/etc/router/service.env",title:"/opt/openziti/etc/router/service.env"},"ZITI_ARGS='--verbose'\n")))),(0,a.kt)("br",null),(0,a.kt)("p",null,"Learn more in ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/logging"},"the logging reference"),"."),(0,a.kt)("h2",{id:"uninstall"},"Uninstall"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Clean the service state."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-text"},"sudo systemctl disable --now ziti-router.service\nsudo systemctl reset-failed ziti-router.service\nsudo systemctl clean --what=state ziti-router.service\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Purge the package, including configuration files."),(0,a.kt)("p",{parentName:"li"},"APT - Debian, Ubuntu, etc."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-text"},"sudo apt-get purge openziti-router\n")),(0,a.kt)("p",{parentName:"li"},"RPM - RedHat, Fedora, etc."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-text"},"sudo dnf remove openziti-router\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Remove any firewall exceptions you created."))))}k.isMDXComponent=!0}}]);