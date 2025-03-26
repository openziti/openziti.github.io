"use strict";(self.webpackChunkdocusaurus_3=self.webpackChunkdocusaurus_3||[]).push([[6171],{66893:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"guides/deployments/linux/router/migrate","title":"Migrate a Router Installation","description":"Here\'s an example of migrating an existing router configuration to the Linux service\'s working directory.","source":"@site/docs/guides/deployments/10-linux/20-router/50-migrate.mdx","sourceDirName":"guides/deployments/10-linux/20-router","slug":"/guides/deployments/linux/router/migrate","permalink":"/docs/guides/deployments/linux/router/migrate","draft":false,"unlisted":false,"editUrl":"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/guides/deployments/10-linux/20-router/50-migrate.mdx","tags":[],"version":"current","lastUpdatedAt":1743027175000,"sidebarPosition":50,"frontMatter":{"title":"Migrate a Router Installation","sidebar_label":"Migrate"},"sidebar":"docsSidebar","previous":{"title":"CLI Mgmt","permalink":"/docs/guides/deployments/linux/router/cli-mgmt"},"next":{"title":"Backup","permalink":"/docs/guides/deployments/linux/router/backup"}}');var i=r(74848),s=r(28453);const o={title:"Migrate a Router Installation",sidebar_label:"Migrate"},l=void 0,a={},c=[];function u(e){const t={a:"a",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Here's an example of migrating an existing router configuration to the Linux service's working directory."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Remove the quickstart router service if you followed the BASH quickstart to create ",(0,i.jsx)(t.strong,{children:"/etc/systemd/system/ziti-router.service"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Follow ",(0,i.jsx)(t.a,{href:"/docs/guides/deployments/linux/router/deploy",children:"the Linux router deployment guide"})," to install the controller service."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Ensure service is disabled and state is clean."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"sudo systemctl disable --now ziti-router.service\nsudo systemctl clean --what=state ziti-router.service\n"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Copy the router-related parts of the configuration to the service's working directory and rename the configuration file to ",(0,i.jsx)(t.code,{children:"config.yml"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"sudo mkdir -pv /var/lib/ziti-router/\nsudo cp -v ./quickstart-router.* /var/lib/ziti-router/\nsudo mv -v /var/lib/ziti-router/{quickstart-router.yaml,config.yml}\n"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Correct paths in the configuration YAML file."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:'sudo sed -Ei "s|$PWD|/var/lib/ziti-router|g" /var/lib/ziti-router/config.yml\n'})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Disable bootstrapping. It's unnecessary because we are migrating, not generating, a complete router configuration."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"sudo sed -Ei 's|(ZITI_BOOTSTRAP)=.*|\\1=false|g' /opt/openziti/etc/router/service.env\n"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Start the service."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"sudo systemctl enable --now ziti-router.service\nsudo systemctl status ziti-router.service\n"})}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>l});var n=r(96540);const i={},s=n.createContext(i);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);