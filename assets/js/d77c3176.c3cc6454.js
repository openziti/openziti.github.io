"use strict";(self.webpackChunkdocusaurus_3=self.webpackChunkdocusaurus_3||[]).push([[7433],{47918:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"guides/deployments/linux/controller/migrate","title":"Migrate a Controller Installation","description":"Here\'s an example of migrating an existing controller\'s configuration to the Linux service\'s working directory.","source":"@site/docs/guides/deployments/10-linux/10-controller/15-migrate.mdx","sourceDirName":"guides/deployments/10-linux/10-controller","slug":"/guides/deployments/linux/controller/migrate","permalink":"/docs/guides/deployments/linux/controller/migrate","draft":false,"unlisted":false,"editUrl":"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/guides/deployments/10-linux/10-controller/15-migrate.mdx","tags":[],"version":"current","sidebarPosition":15,"frontMatter":{"title":"Migrate a Controller Installation","sidebar_label":"Migrate"},"sidebar":"docsSidebar","previous":{"title":"Controller","permalink":"/docs/guides/deployments/linux/controller/deploy"},"next":{"title":"Backup","permalink":"/docs/guides/deployments/linux/controller/backup"}}');var i=t(74848),o=t(28453);const l={title:"Migrate a Controller Installation",sidebar_label:"Migrate"},s=void 0,c={},a=[];function d(e){const n={a:"a",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Here's an example of migrating an existing controller's configuration to the Linux service's working directory."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Remove the quickstart controller service if you followed the BASH quickstart to create ",(0,i.jsx)(n.strong,{children:"/etc/systemd/system/ziti-controller.service"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Follow ",(0,i.jsx)(n.a,{href:"/docs/guides/deployments/linux/controller/deploy",children:"the Linux controller deployment guide"})," to install the controller service."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Ensure the controller service is disabled and the state is clean."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"sudo systemctl disable --now ziti-controller.service\nsudo systemctl clean --what=state ziti-controller.service\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Copy the controller's configuration to the working directory and rename it ",(0,i.jsx)(n.code,{children:"config.yml"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"sudo mkdir -pv /var/lib/ziti-controller/\nsudo cp -Rv ./pki ./db /var/lib/ziti-controller/\nsudo cp -v ./ctrl.yaml /var/lib/ziti-controller/config.yml\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Correct the file paths in ",(0,i.jsx)(n.code,{children:"config.yml"}),". Ensure your current working directory matches the existing controller's\nworking directory, e.g. ",(0,i.jsx)(n.code,{children:"ZITI_HOME"}),", or substitute the old working directory for ",(0,i.jsx)(n.code,{children:"$PWD"}),". After completing this step,\nverify the new ",(0,i.jsx)(n.code,{children:"config.yml"})," has the correct file paths."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:'sudo sed -Ei "s|$PWD|/var/lib/ziti-controller|g" /var/lib/ziti-controller/config.yml\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Disable bootstrapping. We're migrating a complete controller configuration (PKI, configuration file, and database) so\nwe don't want the bootstrapper to generate a configuration."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"sudo sed -Ei 's|(ZITI_BOOTSTRAP)=.*|\\1=false|g' /opt/openziti/etc/controller/service.env\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Start the service."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"sudo systemctl enable --now ziti-controller.service\nsudo systemctl status ziti-controller.service\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Verify the controller is running and listening on the expected port."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"journalctl -u ziti-controller.service\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"sudo lsof -Pnp $(systemctl show -p MainPID --value ziti-controller.service) |& awk '$5~/IP/'\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-buttonless",metastring:'title="Output"',children:"ziti    2694474 ziti-controller    8u     IPv6          222078013       0t0       TCP *:1280 (LISTEN)\n"})}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>s});var r=t(96540);const i={},o=r.createContext(i);function l(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);