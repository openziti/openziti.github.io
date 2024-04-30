"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[1933],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=o,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(g,a(a({ref:t},p),{},{components:r})):n.createElement(g,a({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},99760:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const i={title:"Migrate a Controller Installation",sidebar_label:"Migrate"},a=void 0,l={unversionedId:"guides/deployments/linux/controller/migrate",id:"guides/deployments/linux/controller/migrate",title:"Migrate a Controller Installation",description:"Here's an example of migrating an existing controller's configuration to the Linux service's working directory.",source:"@site/docs/guides/deployments/10-linux/10-controller/15-migrate.mdx",sourceDirName:"guides/deployments/10-linux/10-controller",slug:"/guides/deployments/linux/controller/migrate",permalink:"/docs/guides/deployments/linux/controller/migrate",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/guides/deployments/10-linux/10-controller/15-migrate.mdx",tags:[],version:"current",sidebarPosition:15,frontMatter:{title:"Migrate a Controller Installation",sidebar_label:"Migrate"},sidebar:"docsSidebar",previous:{title:"Controller",permalink:"/docs/guides/deployments/linux/controller/deploy"},next:{title:"Router Deployment",permalink:"/docs/guides/deployments/linux/router/deploy"}},s={},c=[],p={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Here's an example of migrating an existing controller's configuration to the Linux service's working directory."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Ensure the controller service is disabled and state is clean."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-text"},"sudo systemctl disable --now ziti-controller.service\nsudo systemctl clean --what=state ziti-controller.service\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Duplicate the controller's configuration to the working directory using the ",(0,o.kt)("inlineCode",{parentName:"p"},"config.yml")," filename."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-text"},"sudo mkdir -pv /var/lib/ziti-controller/\nsudo cp -Rv ./pki ./db /var/lib/ziti-controller/\nsudo cp -v ./ctrl.yaml /var/lib/ziti-controller/config.yml\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Correct the file paths in ",(0,o.kt)("inlineCode",{parentName:"p"},"config.yml"),". Ensure your current working directory matches the existing controller's\nworking directory, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"ZITI_HOME"),", or substitute the old working directory for ",(0,o.kt)("inlineCode",{parentName:"p"},"$PWD"),". After completing this step,\nverify the new ",(0,o.kt)("inlineCode",{parentName:"p"},"config.yml")," has the correct file paths."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-text"},'sudo sed -Ei "s|$PWD|/var/lib/ziti-controller|g" /var/lib/ziti-controller/config.yml\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Disable bootstrapping. We're migrating a complete controller configuration (PKI, configuration file, and database) so\nwe don't need the bootstrapping process."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-text"},"sudo sed -Ei 's|(ZITI_BOOTSTRAP_.*)=.*|\\1=false|g' /opt/openziti/etc/controller/service.env\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Start the service."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-text"},"sudo systemctl enable --now ziti-controller.service\nsudo systemctl status ziti-controller.service\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Verify the controller is running and listening on the expected port."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-text"},"journalctl -u ziti-controller.service\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-text"},"sudo lsof -Pnp $(systemctl show -p MainPID --value ziti-controller.service) |& awk '$5~/IP/'\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-buttonless",metastring:'title="Output"',title:'"Output"'},"ziti    2694474 ziti-controller    8u     IPv6          222078013       0t0       TCP *:1280 (LISTEN)\n")))))}m.isMDXComponent=!0}}]);