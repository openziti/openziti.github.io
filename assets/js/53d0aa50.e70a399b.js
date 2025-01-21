"use strict";(self.webpackChunkdocusaurus_3=self.webpackChunkdocusaurus_3||[]).push([[7430],{48600:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"reference/tunnelers/kubernetes/index","title":"Tunneling Kubernetes Workloads","description":"This guide will help you discover the best strategy and tool for connecting a Kubernetes workload. This overview page links to child pages for each strategy and tool, and a summary of each is provided in the sections below. Click on the chart\'s outcomes to see the corresponding documentation.","source":"@site/docs/reference/tunnelers/80-kubernetes/index.mdx","sourceDirName":"reference/tunnelers/80-kubernetes","slug":"/reference/tunnelers/kubernetes/","permalink":"/docs/reference/tunnelers/kubernetes/","draft":false,"unlisted":false,"editUrl":"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/reference/tunnelers/80-kubernetes/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Tunneling Kubernetes Workloads","sidebar_label":"Kubernetes"},"sidebar":"docsSidebar","previous":{"title":"Docker","permalink":"/docs/reference/tunnelers/docker/"},"next":{"title":"Reverse Proxy Pod","permalink":"/docs/reference/tunnelers/kubernetes/kubernetes-host"}}');var t=n(74848),o=n(28453);const i={title:"Tunneling Kubernetes Workloads",sidebar_label:"Kubernetes"},d=void 0,c={},a=[{value:"Strategies and Solutions",id:"strategies-and-solutions",level:2},{value:"Intercepting Pod Egress",id:"intercepting-pod-egress",level:3},{value:"Node Proxy Daemonset",id:"node-proxy-daemonset",level:4},{value:"Transparent Proxy Sidecar",id:"transparent-proxy-sidecar",level:4},{value:"TCP Proxy Sidecar",id:"tcp-proxy-sidecar",level:4},{value:"TCP Proxy Cluster Service",id:"tcp-proxy-cluster-service",level:4},{value:"Ingress to Cluster Services",id:"ingress-to-cluster-services",level:3},{value:"Reverse Proxy Router Pod",id:"reverse-proxy-router-pod",level:4},{value:"NGINX Proxy Module",id:"nginx-proxy-module",level:4},{value:"Reverse Proxy Tunnel Pod",id:"reverse-proxy-tunnel-pod",level:4}];function l(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",mermaid:"mermaid",ol:"ol",p:"p",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:"This guide will help you discover the best strategy and tool for connecting a Kubernetes workload. This overview page links to child pages for each strategy and tool, and a summary of each is provided in the sections below. Click on the chart's outcomes to see the corresponding documentation."}),"\n",(0,t.jsx)(r.mermaid,{value:'graph TB;\n  A{Pods connect to <br/>Ziti services?}\n  A -- Yes --\x3e B{Intercept at pod,<br/>node, or <br/>cluster level?}\n  subgraph egressGraph ["&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;proxy"]\n    direction BT\n    B -- POD ---\x3e H(["Ziti sidecar<br/> provides Ziti DNS and <br/>proxy to the pod"])\n    B -- CLUSTER --\x3e F(["Ziti router<br/>provides a cluster service <br/>for each Ziti service"])\n    B -- NODE ----\x3e G(["Ziti daemonset<br/>provides Ziti DNS and <br/>proxy to all pods"])\n  end\n  class egressGraph subgraphClass\n  A -- No --------\x3e K{Ziti router <br/>in cluster?}\n  subgraph ingressGraph ["&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;reverse proxy"]\n    K -- Yes --\x3e J([Ziti router<br/>tunnel mode \'host\'])\n    K -- No ---\x3e C{NGINX <br/>in cluster?}\n    C -- Yes --\x3e D([Ziti proxy module for NGINX])\n    C -- No ---\x3e E([Ziti tunneler mode \'run-host\'])\n  end\n  click D "#nginx-proxy-module" "NGINX Module"\n  click E "#reverse-proxy-tunnel-pod" "ziti-host"\n  click F "#tcp-proxy-cluster-service" "cluster proxy"\n  click G "#node-proxy-daemonset" "node proxy daemonset"\n  click H "#transparent-proxy-sidecar" "transparent sidecar"\n  click I "#tcp-proxy-sidecar" "loopback sidecar"\n  click J "#reverse-proxy-router-pod" "cluster reverse proxy"'}),"\n",(0,t.jsx)(r.h2,{id:"strategies-and-solutions",children:"Strategies and Solutions"}),"\n",(0,t.jsx)(r.p,{children:"In the chart above, there are several strategies and solutions for connecting a Kubernetes workload. The following sections describe each strategy and solution in more detail. These are organized into two main categories: ingress to cluster services, and intercepting pod egress."}),"\n",(0,t.jsx)(r.h3,{id:"intercepting-pod-egress",children:"Intercepting Pod Egress"}),"\n",(0,t.jsx)(r.p,{children:'An tunneler can be used to intercept pod egress. One important thing to know is that the tunneler that is used in this way may also be used to "host" services in order to provide ingress to cluster services.'}),"\n",(0,t.jsx)(r.h4,{id:"node-proxy-daemonset",children:(0,t.jsx)(r.a,{href:"./kubernetes-daemonset",children:"Node Proxy Daemonset"})}),"\n",(0,t.jsxs)(r.p,{children:["Deploying a daemonset of privileged ",(0,t.jsx)(r.code,{children:"ziti-edge-tunnel run"})," pods on selected nodes is a simple way to enable services in a cluster. The daemonset pods intercept egress from pods and provide Ziti DNS to CoreDNS. For more information, see the ",(0,t.jsx)(r.a,{href:"./kubernetes-daemonset",children:"node proxy"})," page."]}),"\n",(0,t.jsx)(r.h4,{id:"transparent-proxy-sidecar",children:(0,t.jsx)(r.a,{href:"/docs/reference/tunnelers/kubernetes/kubernetes-sidecar",children:"Transparent Proxy Sidecar"})}),"\n",(0,t.jsxs)(r.p,{children:["You can deploy a transparent proxy sidecar to intercept pod egress. The sidecar provides a DNS nameserver that is used by the workload application to resolve service addresses. The sidecar container runs ",(0,t.jsx)(r.code,{children:"ziti tunnel tproxy"})," to create IPTables TPROXY rules in the pod. For more information, see the ",(0,t.jsx)(r.a,{href:"/docs/reference/tunnelers/kubernetes/kubernetes-sidecar",children:"transparent proxy sidecar"})," quickstart."]}),"\n",(0,t.jsx)(r.h4,{id:"tcp-proxy-sidecar",children:(0,t.jsx)(r.a,{href:"/docs/reference/tunnelers/kubernetes/kubernetes-sidecar",children:"TCP Proxy Sidecar"})}),"\n",(0,t.jsxs)(r.p,{children:["You can deploy a loopback proxy sidecar for pod egress to services. The sidecar binds services to a local port on the pod's loopback interface, e.g., 127.0.0.1:8443. The workload application must be configured to connect to the local port. This mode of operation has a few differences in comparison to the ",(0,t.jsx)(r.a,{href:"/docs/reference/tunnelers/kubernetes/kubernetes-sidecar",children:"transparent proxy sidecar"})," quickstart."]}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsxs)(r.li,{children:["The sidecar container runs ",(0,t.jsx)(r.code,{children:"ziti tunnel proxy"})," instead of ",(0,t.jsx)(r.code,{children:"ziti tunnel tproxy"}),"."]}),"\n",(0,t.jsx)(r.li,{children:"The sidecar container does not need the CAP_NET_ADMIN capability."}),"\n",(0,t.jsxs)(r.li,{children:["The sidecar container does not need a ",(0,t.jsx)(r.code,{children:"dnsPolicy"})," or explicit nameserver."]}),"\n"]}),"\n",(0,t.jsx)(r.h4,{id:"tcp-proxy-cluster-service",children:(0,t.jsx)(r.a,{href:"/docs/guides/deployments/kubernetes/kubernetes-router",children:"TCP Proxy Cluster Service"})}),"\n",(0,t.jsxs)(r.p,{children:["The router can be deployed to provide a cluster-wide proxy for services, optionally exposing the services' proxy ports with an Ingress or LoadBalancer. This is accomplished by first creating the router with tunnel mode enabled, then deploying the router Helm chart with input values specifying each service for which the router's tunnel identity is authorized by a Dial Service Policy. For more information, see the ",(0,t.jsx)(r.a,{href:"/docs/guides/deployments/kubernetes/kubernetes-router",children:"router"})," page."]}),"\n",(0,t.jsx)(r.h3,{id:"ingress-to-cluster-services",children:"Ingress to Cluster Services"}),"\n",(0,t.jsx)(r.p,{children:'Any tunneler can be used to "host" a service. This hosting begins a few moments after a service becomes authorized for the identity in use by the SDK. This section is about different ways to deploy a tunneler to provide ingress to cluster services.'}),"\n",(0,t.jsx)(r.h4,{id:"reverse-proxy-router-pod",children:(0,t.jsx)(r.a,{href:"/docs/guides/deployments/kubernetes/kubernetes-router",children:"Reverse Proxy Router Pod"})}),"\n",(0,t.jsxs)(r.p,{children:["The router's built-in tunneler can reverse-proxy cluster services for Ziti clients. This is accomplished by creating the router with tunneler mode enabled, and then installing the router Helm chart with the tunneler mode set to ",(0,t.jsx)(r.code,{children:"host"})," (the default). For more information, see ",(0,t.jsx)(r.a,{href:"/docs/guides/deployments/kubernetes/kubernetes-router",children:"the router"})," page."]}),"\n",(0,t.jsx)(r.h4,{id:"nginx-proxy-module",children:(0,t.jsx)(r.a,{href:"/docs/reference/tunnelers/nginx",children:"NGINX Proxy Module"})}),"\n",(0,t.jsxs)(r.p,{children:["The NGINX Proxy Module can be used to provide ingress to cluster services. The module binds services to an NGINX stream context and forward requests to the configured upstreams. Unlike the rest of these solutions, the NGINX module is not a full tunneler. The main difference for writing configurations for the module is that it will honor the upstreams that are set in the NGINX configuration, ignoring the ",(0,t.jsx)(r.code,{children:"host.v1"})," addresses set in the config. For more information, see the ",(0,t.jsx)(r.a,{href:"/docs/reference/tunnelers/nginx",children:"NGINX Proxy Module guide"}),"."]}),"\n",(0,t.jsx)(r.h4,{id:"reverse-proxy-tunnel-pod",children:(0,t.jsx)(r.a,{href:"/docs/reference/tunnelers/kubernetes/kubernetes-host",children:"Reverse Proxy Tunnel Pod"})}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.code,{children:"ziti-host"})," Helm chart deploys a headless service and can be used to provide ingress cluster services. The pod runs ",(0,t.jsx)(r.code,{children:"ziti-edge-tunnel run-host"})," to bind services and forwards requests arriving via Ziti to their configured host addresses inside the cluster. For more information, see the ",(0,t.jsx)(r.a,{href:"/docs/reference/tunnelers/kubernetes/kubernetes-host",children:"ziti-host"})," page."]})]})}function u(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>d});var s=n(96540);const t={},o=s.createContext(t);function i(e){const r=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);