"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[3646],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),c=l(n),h=i,g=c["".concat(d,".").concat(h)]||c[h]||u[h]||o;return n?r.createElement(g,s(s({ref:t},p),{},{components:n})):r.createElement(g,s({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=h;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a[c]="string"==typeof e?e:i,s[1]=a;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},47978:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const o={title:"Workload Tunneling"},s=void 0,a={unversionedId:"guides/kubernetes/workload-tunneling/index",id:"guides/kubernetes/workload-tunneling/index",title:"Workload Tunneling",description:"This guide will help you discover the best strategy and tool for connecting a Kubernetes workload. This overview page links to child pages for each strategy and tool, and a summary of each is provided in the sections below. Click on the chart's outcomes to see the corresponding documentation.",source:"@site/docs/guides/kubernetes/workload-tunneling/index.md",sourceDirName:"guides/kubernetes/workload-tunneling",slug:"/guides/kubernetes/workload-tunneling/",permalink:"/docs/guides/kubernetes/workload-tunneling/",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/guides/kubernetes/workload-tunneling/index.md",tags:[],version:"current",frontMatter:{title:"Workload Tunneling"},sidebar:"docsSidebar",previous:{title:"Console",permalink:"/docs/guides/kubernetes/hosting/kubernetes-console"},next:{title:"Reverse Proxy Pod",permalink:"/docs/guides/kubernetes/workload-tunneling/kubernetes-host"}},d={},l=[{value:"Strategies and Solutions",id:"strategies-and-solutions",level:2},{value:"Intercepting Pod Egress",id:"intercepting-pod-egress",level:3},{value:"Node Proxy Daemonset",id:"node-proxy-daemonset",level:4},{value:"Transparent Proxy Sidecar",id:"transparent-proxy-sidecar",level:4},{value:"Loopback Proxy Sidecar",id:"loopback-proxy-sidecar",level:4},{value:"Ingress to Cluster Services",id:"ingress-to-cluster-services",level:3},{value:"OpenZiti Router",id:"openziti-router",level:4},{value:"Nginx Proxy Module",id:"nginx-proxy-module",level:4},{value:"ziti-host Reverse Proxy Pod",id:"ziti-host-reverse-proxy-pod",level:4}],p={toc:l},c="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This guide will help you discover the best strategy and tool for connecting a Kubernetes workload. This overview page links to child pages for each strategy and tool, and a summary of each is provided in the sections below. Click on the chart's outcomes to see the corresponding documentation."),(0,i.kt)("mermaid",{value:'graph TB; \n  A{Pod connects to an </br>OpenZiti Service?}\n  A -- Yes --\x3e B{Intercept at pod or </br>node level?}\n  subgraph egressGraph ["&nbsp;"]\n    direction BT\n    B -- NODE --\x3e F(["transparent node proxy </br>(tunneler daemonset) </br>provides DNS and IP interception to </br>all pods on selected nodes"])\n    B -- POD ---\x3e G{Pod uses DNS or </br>static IP to connect to </br>the OpenZiti Service?}\n    G -- YES --\x3e H(["transparent sidecar </br>(iptables tproxy)</br> provides DNS and </br>IP interception to the pod"])\n    G -- NO ---\x3e I(["loopback sidecar </br>(tcp proxy)</br>binds a local port to </br>each OpenZiti Service"])\n  end\n  class egressGraph subgraphClass\n  A -- No --------\x3e K{OpenZiti Router </br>is installed?}\n  subgraph ingressGraph ["&nbsp;"]\n    K -- Yes --\x3e J([OpenZiti Router provides </br>ingress to</br>cluster services])\n    K -- No ---\x3e C{Nginx </br>is </br>installed?}\n    C -- Yes --\x3e D([Nginx container with </br>OpenZiti proxy module </br>provides ingress to</br>cluster services])\n    C -- No ---\x3e E([ziti-host </br>reverse proxy pod</br>provides ingress </br>to cluster services])\n  end\n  click D "../../securing-apis/aks-api-with-nginx-ziti-module/" "OpenZiti Nginx Module"\n  click E "./kubernetes-host/" "ziti-host"\n  click F "./kubernetes-daemonset/" "node proxy"\n  click H "./kubernetes-sidecar/" "transparent sidecar"\n  click I "#loopback-proxy-sidecar" "loopback sidecar"'}),(0,i.kt)("h2",{id:"strategies-and-solutions"},"Strategies and Solutions"),(0,i.kt)("p",null,"In the chart above, there are several strategies and solutions for connecting a Kubernetes workload. The following sections describe each strategy and solution in more detail. These are organized into two main categories: ingress to cluster services, and intercepting pod egress."),(0,i.kt)("h3",{id:"intercepting-pod-egress"},"Intercepting Pod Egress"),(0,i.kt)("p",null,'An OpenZiti Tunneler can be used to intercept pod egress. One important thing to know is that the OpenZiti Tunneler that is used in this way may also be used to "host" OpenZiti Services in order to provide ingress to cluster services.'),(0,i.kt)("h4",{id:"node-proxy-daemonset"},(0,i.kt)("a",{parentName:"h4",href:"/docs/guides/kubernetes/workload-tunneling/kubernetes-daemonset"},"Node Proxy Daemonset")),(0,i.kt)("p",null,"Deploying a daemonset of privileged ",(0,i.kt)("inlineCode",{parentName:"p"},"ziti-edge-tunnel run")," pods on selected nodes is a simple way to enable OpenZiti services in a cluster. The daemonset pods intercept egress from pods and provide a DNS nameserver for CoreDNS. Like any other OpenZiti Tunneler, the OpenZiti Identity used by the daemonset may be configured to host OpenZiti Services, i.e. provide OpenZiti ingress to cluster services. For more information, see the ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/kubernetes/workload-tunneling/kubernetes-daemonset"},"node proxy")," page."),(0,i.kt)("h4",{id:"transparent-proxy-sidecar"},(0,i.kt)("a",{parentName:"h4",href:"/docs/guides/kubernetes/workload-tunneling/kubernetes-sidecar"},"Transparent Proxy Sidecar")),(0,i.kt)("p",null,"You can deploy a transparent proxy sidecar to intercept pod egress. The sidecar provides a DNS nameserver that is used by the workload application to resolve OpenZiti Service addresses. The sidecar container runs ",(0,i.kt)("inlineCode",{parentName:"p"},"ziti tunnel tproxy")," to create IPTables TPROXY rules in the pod. For more information, see the ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/kubernetes/workload-tunneling/kubernetes-sidecar"},"transparent proxy sidecar")," quickstart."),(0,i.kt)("h4",{id:"loopback-proxy-sidecar"},(0,i.kt)("a",{parentName:"h4",href:"/docs/guides/kubernetes/workload-tunneling/kubernetes-sidecar"},"Loopback Proxy Sidecar")),(0,i.kt)("p",null,"You can deploy a loopback proxy sidecar for pod egress to OpenZiti Services. The sidecar binds OpenZiti Services to a local port on the pod's loopback interface, e.g., 127.0.0.1:8443. The workload application must be configured to connect to the local port. This mode of operation has a few differences in comparison to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/kubernetes/workload-tunneling/kubernetes-sidecar"},"transparent proxy sidecar")," quickstart."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The sidecar container runs ",(0,i.kt)("inlineCode",{parentName:"li"},"ziti tunnel proxy")," instead of ",(0,i.kt)("inlineCode",{parentName:"li"},"ziti tunnel tproxy"),"."),(0,i.kt)("li",{parentName:"ol"},"The sidecar container does not need the CAP_NET_ADMIN capability."),(0,i.kt)("li",{parentName:"ol"},"The sidecar container does not need a ",(0,i.kt)("inlineCode",{parentName:"li"},"dnsPolicy")," or explicit nameserver.")),(0,i.kt)("h3",{id:"ingress-to-cluster-services"},"Ingress to Cluster Services"),(0,i.kt)("p",null,'Any OpenZiti Tunneler can be used to "host" an OpenZiti Service. This hosting begins a few moments after an OpenZiti Service becomes authorized for the OpenZiti Identity in use by the SDK. This section is about different ways to deploy an OpenZiti Tunneler to provide ingress to cluster services.'),(0,i.kt)("h4",{id:"openziti-router"},(0,i.kt)("a",{parentName:"h4",href:"/docs/guides/kubernetes/hosting/kubernetes-router"},"OpenZiti Router")),(0,i.kt)("p",null,"The OpenZiti Router's built-in tunneler can provide ingress to cluster services. This is done by creating the router with tunneler mode enabled, and then installing the OpenZiti Router with Helm with the tunneler mode set to ",(0,i.kt)("inlineCode",{parentName:"p"},"host")," (the default). For more information, see the ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/kubernetes/hosting/kubernetes-router"},"OpenZiti Router")," page."),(0,i.kt)("h4",{id:"nginx-proxy-module"},(0,i.kt)("a",{parentName:"h4",href:"/docs/guides/securing-apis/aks-api-with-nginx-ziti-module"},"Nginx Proxy Module")),(0,i.kt)("p",null,"The OpenZiti Nginx Proxy Module can be used to provide ingress to cluster services. The module binds OpenZiti Services to an Nginx stream context and forward requests to the configured upstreams. Unlike the rest of these solutions, the Nginx module is not a full tunneler. The main difference for writing OpenZiti configurations for the module is that it will honor the upstreams that are set in the Nginx configuration, ignoring the ",(0,i.kt)("inlineCode",{parentName:"p"},"host.v1")," addresses set in the OpenZiti config. For more information, see the ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/securing-apis/aks-api-with-nginx-ziti-module"},"OpenZiti Nginx Proxy Module")," guide."),(0,i.kt)("h4",{id:"ziti-host-reverse-proxy-pod"},(0,i.kt)("a",{parentName:"h4",href:"/docs/guides/kubernetes/workload-tunneling/kubernetes-host"},"ziti-host Reverse Proxy Pod")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ziti-host")," Helm chart deploys a headless service and can be used to provide ingress cluster services. The pod runs ",(0,i.kt)("inlineCode",{parentName:"p"},"ziti-edge-tunnel run-host")," to bind OpenZiti Services and forwards requests arriving via OpenZiti to their configured host addresses inside the cluster. For more information, see the ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/kubernetes/workload-tunneling/kubernetes-host"},"ziti-host")," page."))}u.isMDXComponent=!0}}]);