"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[2833],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>k});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=p(n),g=r,k=m["".concat(s,".").concat(g)]||m[g]||u[g]||l;return n?a.createElement(k,i(i({ref:e},d),{},{components:n})):a.createElement(k,i({ref:e},d))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=g;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[m]="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},58478:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>p,default:()=>c,frontMatter:()=>s,metadata:()=>d,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const l={toc:[{value:"Add the OpenZiti Charts Repo to Helm",id:"add-the-openziti-charts-repo-to-helm",level:2},{value:"Minimal Installation",id:"minimal-installation",level:2},{value:"Ingress-Nginx Sample Values",id:"ingress-nginx-sample-values",level:2},{value:"Traefik Sample Values",id:"traefik-sample-values",level:2},{value:"TLS with Cert Manager",id:"tls-with-cert-manager",level:2},{value:"Values Reference",id:"values-reference",level:2}]},i="wrapper";function o(t){let{components:e,...n}=t;return(0,r.kt)(i,(0,a.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ziti-console"},"ziti-console"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/Version-0.4.0-informational?style=flat-square",alt:"Version: 0.4.0"})," ",(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/Type-application-informational?style=flat-square",alt:"Type: application"})," ",(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/AppVersion-2.8.3-informational?style=flat-square",alt:"AppVersion: 2.8.3"})),(0,r.kt)("p",null,"Deploy OpenZiti console as kubernetes service"),(0,r.kt)("h2",{id:"add-the-openziti-charts-repo-to-helm"},"Add the OpenZiti Charts Repo to Helm"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add openziti https://docs.openziti.io/helm-charts/\n")),(0,r.kt)("h2",{id:"minimal-installation"},"Minimal Installation"),(0,r.kt)("p",null,"This chart deploys a pod running ",(0,r.kt)("inlineCode",{parentName:"p"},"ziti-console"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openziti/ziti-console/"},"the OpenZiti console"),"."),(0,r.kt)("p",null,"After adding the charts repo to Helm then you may install the chart."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm install \\\n  --namespace ziti-console --create-namespace --generate-name \\\n  openziti/ziti-console \\\n    --set service.type=LoadBalancer \\\n    --set service.advertisedPort=80\n")),(0,r.kt)("p",null,"Although simple, using the LoadBalancer type may not be ideal for a variety of reasons. Here are some examples for creating an HTTP Ingress."),(0,r.kt)("h2",{id:"ingress-nginx-sample-values"},"Ingress-Nginx Sample Values"),(0,r.kt)("p",null,"You can merge these ingress-nginx values when you install or upgrade."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"ingress:\n  enabled: true\n  ingressClassName: nginx\n  advertisedHost: myziti-console.zitik8s\n\nsettings:\n  edgeControllers:\n    - name: Ziti Edge Mgmt API\n      # URL of controller's mgmt API cluster service\n      url: https://myziti-controller-client.ziti-controller.svc:443\n      # or https://myziti-controller-mgmt.ziti-controller.svc:443 if mgmt API is separate\n      default: true\n")),(0,r.kt)("h2",{id:"traefik-sample-values"},"Traefik Sample Values"),(0,r.kt)("p",null,"This is a minimal ",(0,r.kt)("inlineCode",{parentName:"p"},"values.yaml")," sample for an k3s-enviroment using traefik as ingress loadbalancer:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"ingress:\n  enabled: true\n  ingressClassName: nginx\n  advertisedHost: myziti-console.zitik8s\n  annotations:\n    traefik.ingress.kubernetes.io/router.entrypoints: websecure\n  labels:\n    ingressMethod: traefik\n\nsettings:\n  edgeControllers:\n    - name: Ziti Edge Mgmt API\n      # URL of controller's mgmt API cluster service\n      url: https://myziti-controller-client.ziti-controller.svc:443\n      # or https://myziti-controller-mgmt.ziti-controller.svc:443 if mgmt API is separate\n      default: true\n\n")),(0,r.kt)("h2",{id:"tls-with-cert-manager"},"TLS with Cert Manager"),(0,r.kt)("p",null,"Cert Manager can provide a Let's Encrypt certificate for you, even a wildcard certificate with ACMEv2. As a prerequisite, you need a cert-manager Issuer for Let's Encrypt (",(0,r.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/tutorials/acme/pomerium-ingress/#configure-lets-encrypt-issuer"},"reference"),"). Here are example chart values showing annotations for cert-manager and ingress-nginx."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"ingress:\n  ingressClassName: nginx\n  annotations:\n    cert-manager.io/cluster-issuer: my-letsencrypt-issuer\n  advertisedHost: myziti-console.example.com\n  tlsSecret: myziti-console-tls-secret  # secret managed by issuer\n")),(0,r.kt)("h2",{id:"values-reference"},"Values Reference"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"affinity"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}")),(0,r.kt)("td",{parentName:"tr",align:null},"deployment pod node affinity")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fullnameOverride"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'""')),(0,r.kt)("td",{parentName:"tr",align:null},"release fullname override")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"image.args"),(0,r.kt)("td",{parentName:"tr",align:null},"list"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[]")),(0,r.kt)("td",{parentName:"tr",align:null},"app run command args")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"image.command"),(0,r.kt)("td",{parentName:"tr",align:null},"list"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'["node","/usr/src/app/server.js"]')),(0,r.kt)("td",{parentName:"tr",align:null},"app run command")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"image.pullPolicy"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"Always"')),(0,r.kt)("td",{parentName:"tr",align:null},"deployment image pull policy")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"image.pullSecrets"),(0,r.kt)("td",{parentName:"tr",align:null},"list"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[]")),(0,r.kt)("td",{parentName:"tr",align:null},"app image registry credential")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"image.repository"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"openziti/zac"')),(0,r.kt)("td",{parentName:"tr",align:null},"app container image to deploy")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ingress.advertisedHost"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nil")),(0,r.kt)("td",{parentName:"tr",align:null},"DNS name the ingress should use for the console service")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ingress.annotations"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}")),(0,r.kt)("td",{parentName:"tr",align:null},"ingress annotations for the ingress controller")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ingress.enabled"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"create an ingress for the cluster service")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ingress.ingressClassName"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'""')),(0,r.kt)("td",{parentName:"tr",align:null},'"nginx" if using ingress-nginx')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ingress.labels"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}")),(0,r.kt)("td",{parentName:"tr",align:null},"ingress labels")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ingress.tlsSecret"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nil")),(0,r.kt)("td",{parentName:"tr",align:null},"enable TLS ingress by specifying the name of the secret with the tls.crt, tls.key, etc. for the server cert")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nameOverride"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'""')),(0,r.kt)("td",{parentName:"tr",align:null},"release name override")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nodeSelector"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}")),(0,r.kt)("td",{parentName:"tr",align:null},"deployment pod node selector")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"podAnnotations"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}")),(0,r.kt)("td",{parentName:"tr",align:null},"annotations to apply to all pods")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"podSecurityContext.fsGroup"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1000")),(0,r.kt)("td",{parentName:"tr",align:null},"volume mount filesystem group owner")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"podSecurityContext.runAsGroup"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1000")),(0,r.kt)("td",{parentName:"tr",align:null},"effective GID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"podSecurityContext.runAsUser"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1000")),(0,r.kt)("td",{parentName:"tr",align:null},"effective UID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"replicas"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1")),(0,r.kt)("td",{parentName:"tr",align:null},"deployment pod replicas")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"resources"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}")),(0,r.kt)("td",{parentName:"tr",align:null},"deployment container resources")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"securityContext"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nil")),(0,r.kt)("td",{parentName:"tr",align:null},"deployment container security context")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"service.advertisedPort"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"80")),(0,r.kt)("td",{parentName:"tr",align:null},"port for the cluster service, load balancer, nodeport, and ingress to advertise")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"service.annotations"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}")),(0,r.kt)("td",{parentName:"tr",align:null},"cluster service annotations")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"service.containerPort"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1408")),(0,r.kt)("td",{parentName:"tr",align:null},"port for the server to bind and cluster service to target")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"service.enabled"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},"create a cluster service for the deployment")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"service.labels"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}")),(0,r.kt)("td",{parentName:"tr",align:null},"cluster service labels")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"service.portName"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"http"')),(0,r.kt)("td",{parentName:"tr",align:null},"symbolic name of the cluster service port")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"service.type"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"ClusterIP"')),(0,r.kt)("td",{parentName:"tr",align:null},"choose ClusterIP, NodePort, or LoadBalancer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"settings.edgeControllers"),(0,r.kt)("td",{parentName:"tr",align:null},"list"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[]")),(0,r.kt)("td",{parentName:"tr",align:null},"Ziti Edge Mgmt APIs to pre-configure")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"settings.fabricControllers"),(0,r.kt)("td",{parentName:"tr",align:null},"list"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[]")),(0,r.kt)("td",{parentName:"tr",align:null},"Ziti Fabric Mgmt APIs to pre-configure")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tolerations"),(0,r.kt)("td",{parentName:"tr",align:null},"list"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[]")),(0,r.kt)("td",{parentName:"tr",align:null},"deployment pod tolerations")))))}o.isMDXComponent=!0;const s={sidebar_position:30,sidebar_label:"Console",title:"Install the OpenZiti Console in Kubernetes"},p=void 0,d={unversionedId:"guides/kubernetes/hosting/kubernetes-console",id:"guides/kubernetes/hosting/kubernetes-console",title:"Install the OpenZiti Console in Kubernetes",description:"",source:"@site/docs/guides/kubernetes/hosting/kubernetes-console.mdx",sourceDirName:"guides/kubernetes/hosting",slug:"/guides/kubernetes/hosting/kubernetes-console",permalink:"/docs/guides/kubernetes/hosting/kubernetes-console",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/guides/kubernetes/hosting/kubernetes-console.mdx",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30,sidebar_label:"Console",title:"Install the OpenZiti Console in Kubernetes"},sidebar:"docsSidebar",previous:{title:"Router",permalink:"/docs/guides/kubernetes/hosting/kubernetes-router"},next:{title:"Workload Tunneling",permalink:"/docs/guides/kubernetes/workload-tunneling/"}},m={},u=[],g={toc:u},k="wrapper";function c(t){let{components:e,...n}=t;return(0,r.kt)(k,(0,a.Z)({},g,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(o,{mdxType:"ConsoleHelmChartReadme"}))}c.isMDXComponent=!0}}]);