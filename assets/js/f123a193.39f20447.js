"use strict";(self.webpackChunkdocusaurus_3=self.webpackChunkdocusaurus_3||[]).push([[3355],{9925:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"guides/deployments/linux/router/backup","title":"Router Backup and Recovery","description":"Recover","source":"@site/docs/guides/deployments/10-linux/20-router/60-backup.mdx","sourceDirName":"guides/deployments/10-linux/20-router","slug":"/guides/deployments/linux/router/backup","permalink":"/docs/guides/deployments/linux/router/backup","draft":false,"unlisted":false,"editUrl":"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/guides/deployments/10-linux/20-router/60-backup.mdx","tags":[],"version":"current","lastUpdatedAt":1743027175000,"sidebarPosition":60,"frontMatter":{"title":"Router Backup and Recovery","sidebar_label":"Backup"},"sidebar":"docsSidebar","previous":{"title":"Migrate","permalink":"/docs/guides/deployments/linux/router/migrate"},"next":{"title":"Console","permalink":"/docs/guides/deployments/linux/console"}}');var i=n(74848),o=n(28453);const l={title:"Router Backup and Recovery",sidebar_label:"Backup"},s=void 0,a={},u=[{value:"Recover",id:"recover",level:2},{value:"Role Attributes",id:"role-attributes",level:3},{value:"Re-enrollment",id:"re-enrollment",level:3},{value:"Restore Files",id:"restore-files",level:3},{value:"Backup",id:"backup",level:2},{value:"Identity Files",id:"identity-files",level:3},{value:"Configuration File",id:"configuration-file",level:3}];function c(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"recover",children:"Recover"}),"\n",(0,i.jsx)(t.p,{children:"Routers are replaceable without a backup. You can use role attributes in your policies or\nre-enroll an unavailable router."}),"\n",(0,i.jsx)(t.h3,{id:"role-attributes",children:"Role Attributes"}),"\n",(0,i.jsxs)(t.p,{children:["You can recover without a backup by creating a new router with the same roles. Policies that authorize routers with role\nattributes (e.g., ",(0,i.jsx)(t.code,{children:"#some-role"}),"), not mentions (e.g., ",(0,i.jsx)(t.code,{children:"@router1"}),") will authorize a replacement router with the same roles\nwith the same privileges."]}),"\n",(0,i.jsx)(t.p,{children:"Remember to delete the replaced router."}),"\n",(0,i.jsx)(t.h3,{id:"re-enrollment",children:"Re-enrollment"}),"\n",(0,i.jsxs)(t.p,{children:["You can recover without a backup by re-enrolling an existing router. Re-enrolling a router will invalidate the existing\nenrollment and existing policy grants for the router's ID (e.g., ",(0,i.jsx)(t.code,{children:"@router1"}),") will still be valid."]}),"\n",(0,i.jsx)(t.p,{children:"Re-enroll with the CLI like this."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"ziti edge re-enroll edge-router router1 --jwt-output-file /tmp/router1.jwt\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-buttonless",metastring:'title="Expected output"',children:"re-enroll edge-router with id XVXqEG6ANz: OK\nEnrollment expires at 2024-04-19T18:12:47.489Z\n"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/docs/reference/developer/api/edge-management-reference#tag/Edge-Router/operation/reEnrollEdgeRouter",children:"Link to API reference for the re-enroll operation"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"restore-files",children:"Restore Files"}),"\n",(0,i.jsx)(t.p,{children:"If you have a backup of the router's identity files, you can restore them to a new host. The router's identity files are\nthe only state that must be restored. You probably also want to restore the configuration file, but you may use any\nvalid router configuration."}),"\n",(0,i.jsxs)(t.p,{children:["The necessary files are referred to in the configuration file as filesystem paths in ",(0,i.jsx)(t.code,{children:"identity"}),"\nblocks, of which there are one or more. If you restore the identity files to a new location, you must edit the\nconfiguration file to reflect the new paths or use environment variables within the configuration file for\npaths within the ",(0,i.jsx)(t.code,{children:"identity"})," block."]}),"\n",(0,i.jsx)(t.h2,{id:"backup",children:"Backup"}),"\n",(0,i.jsx)(t.p,{children:"The router has two stateful elements: the configuration file and the identity files mentioned in the configuration\nfile. The router will cache control plane information in the same directory as the configuration file, but it's not\nessential to back it up as long as the configuration file points to a valid control plane endpoint."}),"\n",(0,i.jsx)(t.h3,{id:"identity-files",children:"Identity Files"}),"\n",(0,i.jsx)(t.p,{children:"The router's identity files (keys and certs) uniquely identify the router to the controller. To recover a unique router\nidentity you must back up the files mentioned in the following configuration properties:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"identity"})," may appear in several places and always configures keys and certs for the router"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"configuration-file",children:"Configuration File"}),"\n",(0,i.jsx)(t.p,{children:"The router's configuration file is specified as a positional parameter when the router is run. You can edit the\nfile to change the filesystem path for any files that are restored to a new location."})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>s});var r=n(96540);const i={},o=r.createContext(i);function l(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);