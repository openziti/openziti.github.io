"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[5878],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=i,k=m["".concat(o,".").concat(d)]||m[d]||c[d]||r;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:i,l[1]=s;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},67062:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=n(87462),i=(n(67294),n(3905));const r={title:"OpenZiti Ingress to Azure K8s Service"},l=void 0,s={unversionedId:"guides/securing-apis/aks-api-with-nginx-ziti-module",id:"guides/securing-apis/aks-api-with-nginx-ziti-module",title:"OpenZiti Ingress to Azure K8s Service",description:"Prerequisites",source:"@site/docs/guides/securing-apis/aks-api-with-nginx-ziti-module.md",sourceDirName:"guides/securing-apis",slug:"/guides/securing-apis/aks-api-with-nginx-ziti-module",permalink:"/docs/guides/securing-apis/aks-api-with-nginx-ziti-module",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/guides/securing-apis/aks-api-with-nginx-ziti-module.md",tags:[],version:"current",frontMatter:{title:"OpenZiti Ingress to Azure K8s Service"},sidebar:"docsSidebar",previous:{title:"Securing APIs",permalink:"/docs/category/securing-apis"},next:{title:"Troubleshooting",permalink:"/docs/category/troubleshooting"}},o={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Create OpenZiti Network",id:"create-openziti-network",level:2},{value:"Create Identities",id:"create-identities",level:2},{value:"Build Docker Image",id:"build-docker-image",level:2},{value:"Deploy AKS Cluster",id:"deploy-aks-cluster",level:2},{value:"Configuration Code Snippets",id:"configuration-code-snippets",level:2},{value:"OpenZiti Service Configurations",id:"openziti-service-configurations",level:2},{value:"Enable Ziti Service in Ingress Controller",id:"enable-ziti-service-in-ingress-controller",level:2},{value:"Let&#39;s test our service",id:"lets-test-our-service",level:2},{value:"Block IPs to API Server",id:"block-ips-to-api-server",level:2},{value:"Clean up",id:"clean-up",level:2}],p={toc:u},m="wrapper";function c(e){let{components:t,...r}=e;return(0,i.kt)(m,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Azure Subscription, Resource Group and ",(0,i.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/cli/azure/"},"Azure Cli")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/openziti/ngx_ziti_module"},"OpenZiti Nginx Module Repo")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.hashicorp.com/terraform/downloads"},"Terraform")),(0,i.kt)("li",{parentName:"ul"},"Openziti Network"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../../../docs/reference/tunnelers"},"Desktop Tunneler"))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"architecture"},"Architecture"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Before\n",(0,i.kt)("img",{alt:"Before",src:n(52063).Z,width:"1046",height:"349"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"After\n",(0,i.kt)("img",{alt:"After",src:n(25164).Z,width:"1046",height:"349"})))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"create-openziti-network"},"Create OpenZiti Network"),(0,i.kt)("p",null,"A couple of ways to do that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Follow the guide @",(0,i.kt)("a",{parentName:"li",href:"/docs/learn/quickstarts/network/hosted"},"Host OpenZiti")),(0,i.kt)("li",{parentName:"ul"},"Follow the guide @",(0,i.kt)("a",{parentName:"li",href:"https://github.com/openziti-test-kitchen/terraform-lke-ziti/blob/main/README.md"},"Terraform LKE Setup with OpenZiti"))),(0,i.kt)("p",null,"Tested with OpenZiti Network deployed to the LKE Cluster using Terraform."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"create-identities"},"Create Identities"),(0,i.kt)("p",null,"Follow the guide @",(0,i.kt)("a",{parentName:"p",href:"../../learn/core-concepts/identities/overview#creating-an-identity"},"Create Identities")," for the ngx-ziti-module and windows client."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"client name = ",(0,i.kt)("inlineCode",{parentName:"p"},"client-nginx")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"Attribute"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"#clients"),",  server module name = ",(0,i.kt)("inlineCode",{parentName:"p"},"server-nginx")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"Attribute"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"#servers"))),(0,i.kt)("p",null,"Download jwt files and enroll identities. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Windows ZDE Identity can be enrolled by following this ",(0,i.kt)("a",{parentName:"li",href:"/docs/reference/tunnelers/windows#enrolling"},"enrolling process")),(0,i.kt)("li",{parentName:"ul"},"Nginx Module Identity can be enrolled by following ",(0,i.kt)("a",{parentName:"li",href:"/docs/learn/core-concepts/identities/enrolling"},"Enrolling an Identity Guide"))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"build-docker-image"},"Build Docker Image"),(0,i.kt)("p",null,"Currently, configmaps have a binary file limit of 1MB and the size of the ngx-ziti-module is around 2~3MBs. Therefore, it can not be uploaded to the existing nginx image. One needs to build a custom docker image and add it during the build process."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Follow steps to build @",(0,i.kt)("a",{parentName:"li",href:"https://github.com/openziti/ngx_ziti_module/blob/main/README.md#user-content-build-using-cmake"},"ngx-ziti-module")),(0,i.kt)("li",{parentName:"ul"},"Follow steps to create @",(0,i.kt)("a",{parentName:"li",href:"https://docs.nginx.com/nginx-ingress-controller/installation/building-ingress-controller-image/#building-the-image-and-pushing-it-to-the-private-registry"},"nginx ingress controller image"))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"One way to update the build is to add to the Dockerfile (",(0,i.kt)("inlineCode",{parentName:"p"},"build/Dockerfile"),") this snippet of code under the common section, i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"FROM ${BUILD_OS} as common")),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# copy ziti module\nCOPY  ./ngx_ziti_module.so /usr/lib/nginx/modules\n\n")),(0,i.kt)("p",{parentName:"admonition"},"Also, need to add the following package ",(0,i.kt)("inlineCode",{parentName:"p"},"libc6")," to the debian build in the same Dockerfile, i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"FROM nginx:1.23.3 AS debian"),". Did not try the alpine build but the assumption is that would be the same."),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"&& apt-get install --no-install-recommends --no-install-suggests -y libcap2-bin libc6 \\\n")),(0,i.kt)("p",{parentName:"admonition"},"Lastly, if you don't want the image name to have a postfix of",(0,i.kt)("inlineCode",{parentName:"p"},"SNAPSHOT...")," , comment it out in ",(0,i.kt)("inlineCode",{parentName:"p"},"Makefile"),"."),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"VERSION = $(GIT_TAG)##-SNAPSHOT-$(GIT_COMMIT_SHORT)\n"))),(0,i.kt)("p",null,"Once the image is built, upload it to your container registry. You will need it during customization of the nginx ingress controller deployment to the AKS Cluster."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"if you don't have time to build your own, can use our test image based on debian 11 and nginx v1.23.3 "),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'set {\n    name = "controller.image.repository"\n    value = "docker.io/elblag91/ziti-nginx-ingress"\n}\n'))),(0,i.kt)("h2",{id:"deploy-aks-cluster"},"Deploy AKS Cluster"),(0,i.kt)("p",null,"Deploy the AKS Infrustructure in Azure using terraform. The terraform code is located @",(0,i.kt)("a",{parentName:"p",href:"https://github.com/dariuszSki/openziti-nginx-ingress-terraform.git"},"OpenZiti Nginx Ingress Terraform Repo"),". The following resources will be created, when the plan is applied."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Virtual Network"),(0,i.kt)("li",{parentName:"ul"},"AKS Private Cluster with Kubenet CNI and Nginx Ingress Controller")),(0,i.kt)("p",null,"Set a few environmental variables for Azure Authentication and Authorization."),(0,i.kt)("admonition",{title:"Env Vars",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},'export ARM_SUBSCRIPTION_ID = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"'),(0,i.kt)("p",{parentName:"admonition"},'export ARM_CLIENT_ID = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"'),(0,i.kt)("p",{parentName:"admonition"},'export ARM_CLIENT_SECRET = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"'),(0,i.kt)("p",{parentName:"admonition"},'export ARM_TENANT_ID = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"')),(0,i.kt)("p",null,"Run terraform plan."),(0,i.kt)("admonition",{title:"Steps",type:"info"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'git clone https://github.com/dariuszSki/openziti-nginx-ingress-terraform.git\ncd openziti-nginx-ingress-terraform/tf-provider\nterraform init\nterraform plan  -var include_aks_nginx=true  -out aks\nterraform apply "aks"\n')),(0,i.kt)("p",{parentName:"admonition"},"Once completed, grab  ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster_public_fqdn")," under ",(0,i.kt)("inlineCode",{parentName:"p"},"outputs")," as shown in the example below."),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'cluster_name = "akssandeastus"\ncluster_private_fqdn = ""\ncluster_public_fqdn = "akssand-2ift1yqr.hcp.eastus.azmk8s.io"\n\n'))),(0,i.kt)("h2",{id:"configuration-code-snippets"},"Configuration Code Snippets"),(0,i.kt)("p",null,"If you are using your own deployment method, here are some configuration details from helm chart that need to be passed to the nginx ingress controller deployment."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Ziti Nginx Module Identity")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'nginx_ziti_identity = "${file("./server-nginx.json")}"\nresource "kubernetes_secret" "ziti-identity" {\n  metadata {\n    name = "nginx-ziti-identity"\n  }\n  data = {\n    "nginx-ziti-identity" = var.nginx_ziti_identity\n  }\n  type = "Opaque"\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Image Reference")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'set {\n    name = "controller.image.repository"\n    value = "docker.io/elblag91/ziti-nginx-ingress"\n  }\n\nset {\n    name = "controller.image.tag"\n    value = "3.0.2"\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Configuration File - Main section block")),(0,i.kt)("admonition",{parentName:"li",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Services are commented out until they are created. Then, terraform plan can be re-run to enable them.")))),(0,i.kt)("p",null,":::"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"controller:\n  service:\n    create: false\n  config:\n    entries:\n      main-snippets: |\n        load_module modules/ngx_ziti_module.so;\n       \n        thread_pool ngx_ziti_tp threads=32 max_queue=65536;\n\n        #ziti identity1 {\n        #  identity_file /var/run/secrets/openziti.io/${kubernetes_secret.ziti-identity.metadata[0].name};\n\n        #  bind k8s-api {\n        #    upstream kubernetes.default:443;\n        #  }\n        #}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Volume section and path to secrets. Added openziti.io folder.")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'  volumes:\n      - name: "ziti-nginx-files"\n        projected:\n          defaultMode: 420\n          sources:\n          - secret:\n              name: ${kubernetes_secret.ziti-identity.metadata[0].name}\n              items: \n              - key: ${kubernetes_secret.ziti-identity.metadata[0].name}\n                path: ${kubernetes_secret.ziti-identity.metadata[0].name}\n  volumeMounts:\n    - mountPath: /var/run/secrets/openziti.io\n      name: ziti-nginx-files\n      readOnly: true\n\n')),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"openziti-service-configurations"},"OpenZiti Service Configurations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Create configs")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'ziti edge create config k8s-api-intercept.v1 intercept.v1 "{\\"protocols\\": [\\"tcp\\"], \\"addresses\\": [\\"akssand-2ift1yqr.hcp.eastus.azmk8s.io\\"],\\"portRanges\\": [{\\"low\\": 443,\\"high\\": 443}]}"\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Create Service")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'ziti edge create service k8s-api --configs "k8s-api-intercept.v1" --role-attributes "service-nginx"\n')),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Create Service Bind Policy")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'ziti edge create service-policy k8s-api-bind Bind --semantic "AnyOf" --identity-roles "#servers" --service-roles "#service-nginx"\n')),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Create Service Dial Policy")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'ziti edge create service-policy k8s-api-dial Dial --semantic "AnyOf" --identity-roles "#clients" --service-roles "#service-nginx"\n')),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"enable-ziti-service-in-ingress-controller"},"Enable Ziti Service in Ingress Controller"),(0,i.kt)("p",null,"Uncomment ",(0,i.kt)("inlineCode",{parentName:"p"},"ziti identity1")," block in ",(0,i.kt)("inlineCode",{parentName:"p"},"resource.helm_release.nginx-ingress")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"config:\n    entries:\n      main-snippets: |\n        load_module modules/ngx_ziti_module.so;\n       \n        thread_pool ngx_ziti_tp threads=32 max_queue=65536;\n\n        ziti identity1 {\n          identity_file /var/run/secrets/openziti.io/${kubernetes_secret.ziti-identity.metadata[0].name};\n\n          bind k8s-api {\n            upstream kubernetes.default:443;\n          }\n        }\n")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Need to disable ZDE for this network before the next step, so the nginx updates will not get intercepted while the service is not ready yet.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Re-run terraform")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"terraform plan  -var include_aks_nginx=true  -out aks\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'terraform apply "aks"\n')),(0,i.kt)("h2",{id:"lets-test-our-service"},"Let's test our service"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If the terraform was run, the kube-config file was created in the tf root directory. One can also use ",(0,i.kt)("inlineCode",{parentName:"p"},"az cli")," to get the kube config downloaded."),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# Configure your local kube configuration file using azure cli\naz login # if not already logged in\n# Windows WSL\nexport RG_NAME = 'resource group name'\nexport ARM_SUBSCRIPTION_ID = \xa0'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'\naz aks get-credentials --resource-group $RG_NAME --name {cluster_name} --subscription $ARM_SUBSCRIPTION_ID\n"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Check context in the kubectl config file")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl config  get-contexts\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Expected Output")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"CURRENT   NAME            CLUSTER         AUTHINFO                                           NAMESPACE\n*         akssandeastus   akssandeastus   clusterUser_nginx_module_rg_eastus_akssandeastus   \n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Let's check the status of nodes in the cluster.")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get nodes\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Expected Output")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"NAME                                STATUS   ROLES   AGE    VERSION\naks-agentpool-20887740-vmss000000   Ready    agent   151m   v1.24.9\naks-agentpool-20887740-vmss000001   Ready    agent   151m   v1.24.9\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"List cluster info")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl cluster-info\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Expected Output")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"Kubernetes control plane is running at https://akssand-2ift1yqr.hcp.eastus.azmk8s.io:443\nCoreDNS is running at https://akssand-2ift1yqr.hcp.eastus.azmk8s.io:443/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy\nMetrics-server is running at https://akssand-2ift1yqr.hcp.eastus.azmk8s.io:443/api/v1/namespaces/kube-system/services/https:metrics-server:/proxy\n\nTo further debug and diagnose cluster problems, use 'kubectl cluster-info dump'.\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"List pods")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get pods --all-namespaces\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Expected Output")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"NAMESPACE     NAME                                           READY   STATUS    RESTARTS   AGE\ndefault       nginx-ingress-nginx-ingress-7ffd564557-ngt69   1/1     Running   0          134m\nkube-system   azure-ip-masq-agent-9scx6                      1/1     Running   0          166m\nkube-system   azure-ip-masq-agent-xps5g                      1/1     Running   0          166m\nkube-system   cloud-node-manager-8q7fk                       1/1     Running   0          166m\nkube-system   cloud-node-manager-czg95                       1/1     Running   0          166m\nkube-system   coredns-59b6bf8b4f-8t5kj                       1/1     Running   0          165m\nkube-system   coredns-59b6bf8b4f-rc6b8                       1/1     Running   0          167m\nkube-system   coredns-autoscaler-5655d66f64-pbjhr            1/1     Running   0          167m\nkube-system   csi-azuredisk-node-2mp98                       3/3     Running   0          166m\nkube-system   csi-azuredisk-node-tq6x6                       3/3     Running   0          166m\nkube-system   csi-azurefile-node-9q4f5                       3/3     Running   0          166m\nkube-system   csi-azurefile-node-bzr4z                       3/3     Running   0          166m\nkube-system   konnectivity-agent-86cdc66d6b-tlhkw            1/1     Running   0          128m\nkube-system   konnectivity-agent-86cdc66d6b-ttmq6            1/1     Running   0          128m\nkube-system   kube-proxy-q48qv                               1/1     Running   0          166m\nkube-system   kube-proxy-t2dhr                               1/1     Running   0          166m\nkube-system   metrics-server-8655f897d8-mr2bq                2/2     Running   0          165m\nkube-system   metrics-server-8655f897d8-tnpzt                2/2     Running   0          165m\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"List  services")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get services --all-namespaces\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Expected Output")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"NAMESPACE     NAME             TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)         AGE\ndefault       kubernetes       ClusterIP   10.0.0.1       <none>        443/TCP         169m\nkube-system   kube-dns         ClusterIP   10.0.0.10      <none>        53/UDP,53/TCP   169m\nkube-system   metrics-server   ClusterIP   10.0.218.224   <none>        443/TCP         169m\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"At this point the public access is still available even though the API Kubectl queries are routed through Ziti Network. You can disable ZDE client and test that.")),(0,i.kt)("h2",{id:"block-ips-to-api-server"},"Block IPs to API Server"),(0,i.kt)("p",null,"Pass the following variable to only allow 192.168.1.1/32 source IP to essentially disable Public Access. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'terraform plan  -var include_aks_nginx=true -var authorized_source_ip_list=[\\"192.168.1.1/32\\"] -out aks\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'terraform apply "aks"\n')),(0,i.kt)("p",null,"Retest with ZDE enabled and disabled for this network."),(0,i.kt)("h2",{id:"clean-up"},"Clean up"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Run terraform to open up the AKS API to public before deleting AKS resources, so you dont get locked out.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'terraform plan  -var include_aks_nginx=true -var authorized_source_ip_list=[\\"0.0.0.0/0\\"] -out aks\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'terraform apply "aks"\n')),(0,i.kt)("p",null,"Delete all resources"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"terraform plan  --destroy -var include_aks_nginx=true  -out aks\n")))}c.isMDXComponent=!0},25164:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/nginx-aks-after-168be36dcccf67eaffd8382be46322da.svg"},52063:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/nginx-aks-before-8052922bcebcc62faa4c2f7912cd9931.svg"}}]);