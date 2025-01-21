"use strict";(self.webpackChunkdocusaurus_3=self.webpackChunkdocusaurus_3||[]).push([[9524],{39099:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"guides/deployments/linux/console","title":"Console Deployment","description":"Installation","source":"@site/docs/guides/deployments/10-linux/30-console.mdx","sourceDirName":"guides/deployments/10-linux","slug":"/guides/deployments/linux/console","permalink":"/docs/guides/deployments/linux/console","draft":false,"unlisted":false,"editUrl":"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/guides/deployments/10-linux/30-console.mdx","tags":[],"version":"current","sidebarPosition":30,"frontMatter":{"title":"Console Deployment","sidebar_label":"Console"},"sidebar":"docsSidebar","previous":{"title":"Backup","permalink":"/docs/guides/deployments/linux/router/backup"},"next":{"title":"Docker","permalink":"/docs/category/docker"}}');var o=t(74848),i=t(28453);const l={title:"Console Deployment",sidebar_label:"Console"},r=void 0,c={},a=[{value:"Installation",id:"installation",level:2},{value:"Install the Package",id:"install-the-package",level:3},{value:"Install from GitHub",id:"install-from-github",level:3},{value:"Configuration",id:"configuration",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,o.jsx)(n.h3,{id:"install-the-package",children:"Install the Package"}),"\n",(0,o.jsxs)(n.p,{children:["The package installs the console files in ",(0,o.jsx)(n.code,{children:"/opt/openziti/share/console"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",metastring:'title="Install the console package"',children:"sudo apt install openziti-console\n"})}),"\n",(0,o.jsx)(n.p,{children:"Or, configure the package repository and install with this one-liner."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",metastring:'title="Configure the package repository and install openziti-console"',children:"curl -sS https://get.openziti.io/install.bash | sudo bash -s openziti-console\n"})}),"\n",(0,o.jsx)(n.h3,{id:"install-from-github",children:"Install from GitHub"}),"\n",(0,o.jsx)(n.p,{children:"Console versions >= 3.0.0 from GitHub may be used."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Download a release."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"wget https://github.com/openziti/ziti-console/releases/latest/download/ziti-console.zip\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Unzip in a directory that is mounted the controller's filesystem namespace."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"sudo mkdir -p /opt/openziti/share/console\nsudo unzip -d /opt/openziti/share/console ./ziti-console.zip\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["In ",(0,o.jsx)(n.strong,{children:"/var/lib/ziti-controller/config.yml"}),", ensure you have an API binding ",(0,o.jsx)(n.code,{children:"zac"})," on the same web listener where ",(0,o.jsx)(n.code,{children:"edge-management"})," is bound. Ensure the ",(0,o.jsx)(n.code,{children:"location"})," matches the path to the console files."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"- binding: zac\n  options:\n    location: /opt/openziti/share/console\n    indexFile: index.html\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Restart the controller service if you edited the configuration."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"sudo systemctl restart ziti-controller.service\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Visit the controller's web address in a browser to access the console."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"https://ctrl.ziti.example.com:1280/zac/\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Console certificate option - The console is served from the controller's API and can be used with the default API certificate. The controller can be configured to present a different certificate for the console when the API is accessed by a distinct URL for the console. For more information about using alternative server certs with the controller, see: ",(0,o.jsxs)(n.a,{href:"/docs/reference/configuration/conventions#identity",children:["the configuration reference for the ",(0,o.jsx)(n.code,{children:"identity"})," property"]}),"."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>r});var s=t(96540);const o={},i=s.createContext(o);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);