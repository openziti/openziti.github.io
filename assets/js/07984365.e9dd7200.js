"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[7071],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=i,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(g,a(a({ref:t},u),{},{components:r})):n.createElement(g,a({ref:t},u))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},87032:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));const o={title:"Migrate a Router Installation",sidebar_label:"Migrate"},a=void 0,s={unversionedId:"guides/deployments/linux/router/migrate",id:"guides/deployments/linux/router/migrate",title:"Migrate a Router Installation",description:"You can generate a configuration with the ziti create config router command, optionally mutating the generated config with a combination of command-line args and environment variables. Find an annotated sample config file from the Ziti repo.",source:"@site/docs/guides/deployments/10-linux/20-router/50-migrate.mdx",sourceDirName:"guides/deployments/10-linux/20-router",slug:"/guides/deployments/linux/router/migrate",permalink:"/docs/guides/deployments/linux/router/migrate",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/guides/deployments/10-linux/20-router/50-migrate.mdx",tags:[],version:"current",sidebarPosition:50,frontMatter:{title:"Migrate a Router Installation",sidebar_label:"Migrate"},sidebar:"docsSidebar",previous:{title:"CLI Mgmt",permalink:"/docs/guides/deployments/linux/router/cli-mgmt"},next:{title:"Docker",permalink:"/docs/category/docker"}},l={},c=[],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can generate a configuration with the ",(0,i.kt)("inlineCode",{parentName:"p"},"ziti create config router")," command, optionally mutating the generated config with a combination of command-line args and environment variables. Find an annotated sample config file from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/openziti/ziti/blob/main/etc/edge.router.yml"},"the Ziti repo"),"."),(0,i.kt)("p",null,"Here's an example BASH script for migrating an existing controller state to the Linux service's working directory."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"#!/bin/bash\n\nset -o errexit\nset -o nounset\nset -o pipefail\nset -o xtrace\n\npushd $(mktemp -d)\n\n# install router and CLI packages\ncurl -sS https://get.openziti.io/install.bash \\\n| sudo bash -s openziti-router\n\n# create state with the quickstart\ntimeout 10s ziti edge quickstart --home $PWD\n\n# ensure service is disabled and state is clean\nsudo systemctl disable --now ziti-router.service\nsudo systemctl clean --what=state ziti-router.service\n\n# duplicate the controller part of the quickstart state to the service working directory using the config.yml filename\n# expected by the controller service\nsudo mkdir -pv /var/lib/ziti-router/\nsudo cp -v ./quickstart-router.* /var/lib/ziti-router/\nsudo mv -v /var/lib/ziti-router/{quickstart-router.yaml,config.yml}\n\n# correct config paths\nsudo sed -Ei \"s|$PWD|/var/lib/ziti-router|g\" /var/lib/ziti-router/config.yml\n\n# disable bootstrapping\nsudo sed -Ei 's|(ZITI_BOOTSTRAP_.*)=.*|\\1=false|g' /opt/openziti/etc/router/service.env\n\n# run only the controller in the background using the quickstart state so the enrolled router can check in\nnohup ziti controller run ctrl.yaml &\n\n# start the service\nsudo systemctl enable --now ziti-router.service\nsudo systemctl status ziti-router.service\n")))}d.isMDXComponent=!0}}]);