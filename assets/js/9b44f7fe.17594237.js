"use strict";(self.webpackChunkdocusaurus_3=self.webpackChunkdocusaurus_3||[]).push([[9504],{66985:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>h,contentTitle:()=>o,default:()=>j,frontMatter:()=>c,metadata:()=>n,toc:()=>a});const n=JSON.parse('{"id":"reference/tunnelers/kubernetes/kubernetes-host","title":"Deploy a Hosting Tunneler in Kubernetes","description":"","source":"@site/docs/reference/tunnelers/80-kubernetes/kubernetes-host.mdx","sourceDirName":"reference/tunnelers/80-kubernetes","slug":"/reference/tunnelers/kubernetes/kubernetes-host","permalink":"/docs/reference/tunnelers/kubernetes/kubernetes-host","draft":false,"unlisted":false,"editUrl":"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/reference/tunnelers/80-kubernetes/kubernetes-host.mdx","tags":[],"version":"current","sidebarPosition":60,"frontMatter":{"sidebar_position":60,"sidebar_label":"Reverse Proxy Pod","title":"Deploy a Hosting Tunneler in Kubernetes"},"sidebar":"docsSidebar","previous":{"title":"Kubernetes","permalink":"/docs/reference/tunnelers/kubernetes/"},"next":{"title":"Node Proxy","permalink":"/docs/reference/tunnelers/kubernetes/kubernetes-daemonset"}}');var i=s(74848),r=s(28453);function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"ziti-host",children:"ziti-host"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{src:"https://img.shields.io/badge/Version-1.0.0-informational?style=flat-square",alt:"Version: 1.0.0"})," ",(0,i.jsx)(t.img,{src:"https://img.shields.io/badge/Type-application-informational?style=flat-square",alt:"Type: application"})," ",(0,i.jsx)(t.img,{src:"https://img.shields.io/badge/AppVersion-1.1.3-informational?style=flat-square",alt:"AppVersion: 1.1.3"})]}),"\n",(0,i.jsx)(t.p,{children:"Reverse proxy cluster services with an OpenZiti tunneler pod"}),"\n",(0,i.jsx)(t.h2,{id:"requirements",children:"Requirements"}),"\n",(0,i.jsxs)(t.p,{children:["Kubernetes: ",(0,i.jsx)(t.code,{children:">= 1.20.0-0"})]}),"\n",(0,i.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(t.p,{children:["You may use this chart to publish cluster services to your Ziti network. For example, if you create a Ziti service with a server address of ",(0,i.jsx)(t.code,{children:"tcp:kubernetes.default.svc:443"})," and write a Bind Service Policy assigning the service to the Ziti identity used with this chart, then your Ziti network's authorized clients will be able access this cluster's apiserver. You could do the same thing for any cluster service's domain name."]}),"\n",(0,i.jsx)(t.h2,{id:"how-this-chart-works",children:"How this Chart Works"}),"\n",(0,i.jsxs)(t.p,{children:["This chart deploys a pod running ",(0,i.jsx)(t.code,{children:"ziti-edge-tunnel"}),", ",(0,i.jsx)(t.a,{href:"https://docs.openziti.io/docs/reference/tunnelers/linux/",children:"the OpenZiti Linux tunneler"}),", in service hosting mode. The chart uses container image ",(0,i.jsx)(t.code,{children:"docker.io/openziti/ziti-host"})," which runs ",(0,i.jsx)(t.code,{children:"ziti-edge-tunnel run-host"}),'. This puts the Linux tunneler in "hosting" mode which is useful for binding Ziti services without any need for elevated permissions and without any Ziti nameserver or intercepting proxy. You\'ll be able to publish any server that is known by an IP address or domain name that is reachable from the pod deployed by this chart.']}),"\n",(0,i.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"helm repo add openziti https://docs.openziti.io/helm-charts/\n"})}),"\n",(0,i.jsx)(t.p,{children:"After adding the charts repo to Helm then you may enroll the identity and install the chart. You must supply a Ziti identity JSON file when you install the chart."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"ziti edge enroll --jwt /tmp/k8s-tunneler.jwt --out /tmp/k8s-tunneler.json\nhelm install ziti-release03 openziti/ziti-host --set-file zitiIdentity=/tmp/k8s-tunneler-03.json\n"})}),"\n",(0,i.jsx)(t.h3,{id:"installation-using-a-existing--pre-created-secret",children:"Installation using a existing / pre-created secret"}),"\n",(0,i.jsx)(t.p,{children:"Alternatively when you want to use a existing / pre-created secret (i.e. you have sealed-secrets enabled in your setup), you could refer to an existing secret with the ziti identity to use."}),"\n",(0,i.jsx)(t.p,{children:"This sample shows you how to create the secret:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"kubectl create secret generic k8s-tunneler-identity --from-file=persisted-identity=k8s-tunneler.json\n"})}),"\n",(0,i.jsx)(t.p,{children:"When you deploy the helm chart refer to the existing secret:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"helm install ziti-host openziti/ziti-host --set secret.existingSecretName=k8s-tunneler-identity\n"})}),"\n",(0,i.jsxs)(t.p,{children:["When you don't want to use the default key name ",(0,i.jsx)(t.code,{children:"persisted-identity"})," you can define your own name by adding ",(0,i.jsx)(t.code,{children:"--set secret.keyName=myKeyName"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"values-reference",children:"Values Reference"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Key"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Default"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"additionalVolumes"}),(0,i.jsx)(t.td,{children:"list"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"[]"})}),(0,i.jsx)(t.td,{children:"additional volumes to mount to ziti-host container"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"affinity"}),(0,i.jsx)(t.td,{children:"object"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"{}"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"dnsPolicy"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:'"ClusterFirstWithHostNet"'})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"fullnameOverride"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:'""'})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"hostNetwork"}),(0,i.jsx)(t.td,{children:"bool"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"false"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"image.args"}),(0,i.jsx)(t.td,{children:"list"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"[]"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"image.pullPolicy"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:'"Always"'})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"image.repository"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:'"openziti/ziti-host"'})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"imagePullSecrets"}),(0,i.jsx)(t.td,{children:"list"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"[]"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"nameOverride"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:'""'})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"nodeSelector"}),(0,i.jsx)(t.td,{children:"object"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"{}"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"podAnnotations"}),(0,i.jsx)(t.td,{children:"object"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"{}"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"podSecurityContext"}),(0,i.jsx)(t.td,{children:"object"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"{}"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ports"}),(0,i.jsx)(t.td,{children:"list"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"[]"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"replicas"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"1"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"resources"}),(0,i.jsx)(t.td,{children:"object"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"{}"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"secret"}),(0,i.jsx)(t.td,{children:"object"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"{}"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"securityContext"}),(0,i.jsx)(t.td,{children:"object"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"{}"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"serviceAccount.annotations"}),(0,i.jsx)(t.td,{children:"object"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"{}"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"serviceAccount.create"}),(0,i.jsx)(t.td,{children:"bool"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"true"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"serviceAccount.name"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:'""'})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"spireAgent.enabled"}),(0,i.jsx)(t.td,{children:"bool"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"false"})}),(0,i.jsx)(t.td,{children:"if you are running a container with the spire-agent binary installed then this will allow you to add the hostpath necessary for connecting to the spire socket"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"spireAgent.spireSocketMnt"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:'"/run/spire/sockets"'})}),(0,i.jsx)(t.td,{children:"file path of the spire socket mount"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"tolerations"}),(0,i.jsx)(t.td,{children:"list"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"[]"})}),(0,i.jsx)(t.td,{})]})]})]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"helm upgrade {release} {source dir}\n"})})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}const c={sidebar_position:60,sidebar_label:"Reverse Proxy Pod",title:"Deploy a Hosting Tunneler in Kubernetes"},o=void 0,h={},a=[{value:"Requirements",id:"requirements",level:2},{value:"Overview",id:"overview",level:2},{value:"How this Chart Works",id:"how-this-chart-works",level:2},{value:"Installation",id:"installation",level:2},{value:"Installation using a existing / pre-created secret",id:"installation-using-a-existing--pre-created-secret",level:3},{value:"Values Reference",id:"values-reference",level:2}];function x(e){return(0,i.jsx)(l,{})}function j(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(x,{...e})}):x()}},28453:(e,t,s)=>{s.d(t,{R:()=>d,x:()=>l});var n=s(96540);const i={},r=n.createContext(i);function d(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);