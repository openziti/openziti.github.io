"use strict";(self.webpackChunkdocusaurus_3=self.webpackChunkdocusaurus_3||[]).push([[9631],{92578:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>x,frontMatter:()=>l,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"reference/tunnelers/nginx","title":"Tunneling to NGINX Upstreams","description":"Ziti\'s NGINX module works like a tunneler for hosting Ziti services, i.e. as a reverse proxy. This means that NGINX listens for particular, pre-configured Ziti services on the Ziti overlay (not on an IP address), and forwards the incoming requests to the NGINX upstream specified for that service in the NGINX config file.","source":"@site/docs/reference/tunnelers/90-nginx.mdx","sourceDirName":"reference/tunnelers","slug":"/reference/tunnelers/nginx","permalink":"/docs/reference/tunnelers/nginx","draft":false,"unlisted":false,"editUrl":"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/reference/tunnelers/90-nginx.mdx","tags":[],"version":"current","sidebarPosition":90,"frontMatter":{"title":"Tunneling to NGINX Upstreams","sidebar_label":"NGINX Module"},"sidebar":"docsSidebar","previous":{"title":"Sidecar Proxy","permalink":"/docs/reference/tunnelers/kubernetes/kubernetes-sidecar"},"next":{"title":"Logging","permalink":"/docs/reference/logging"}}');var s=r(74848),t=r(28453);const l={title:"Tunneling to NGINX Upstreams",sidebar_label:"NGINX Module"},c=void 0,a={},o=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Create a Network",id:"create-a-network",level:2},{value:"Create Identities",id:"create-identities",level:2},{value:"Build Docker Image",id:"build-docker-image",level:2},{value:"Deploy AKS Cluster",id:"deploy-aks-cluster",level:2},{value:"Configuration Code Snippets",id:"configuration-code-snippets",level:2},{value:"Service Configurations",id:"service-configurations",level:2},{value:"Enable Ziti Service in Ingress Controller",id:"enable-ziti-service-in-ingress-controller",level:2},{value:"Let&#39;s test our service",id:"lets-test-our-service",level:2},{value:"Block IPs to API Server",id:"block-ips-to-api-server",level:2},{value:"Clean up",id:"clean-up",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/openziti/ngx_ziti_module",children:"Ziti's NGINX module"})," works like a tunneler for hosting Ziti services, i.e. as a reverse proxy. This means that NGINX listens for particular, pre-configured Ziti services on the Ziti overlay (not on an IP address), and forwards the incoming requests to the NGINX upstream specified for that service in the NGINX config file."]}),"\n",(0,s.jsx)(n.p,{children:"We'll run the module in Kubernetes as an example, but the module works anywhere NGINX does."}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Azure Subscription, Resource Group and ",(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/cli/azure/",children:"Azure Cli"})]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/openziti/ngx_ziti_module",children:"NGINX Module"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://developer.hashicorp.com/terraform/downloads",children:"Terraform"})}),"\n",(0,s.jsx)(n.li,{children:"network"}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/reference/tunnelers/",children:"Desktop Tunneler"})}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"architecture",children:"Architecture"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Before\r\n",(0,s.jsx)(n.img,{alt:"Before",src:r(77845).A+"",width:"1046",height:"349"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["After\r\n",(0,s.jsx)(n.img,{alt:"After",src:r(79186).A+"",width:"1046",height:"349"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"create-a-network",children:"Create a Network"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/category/network",children:"Local quickstart"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/category/linux",children:"Linux"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/category/docker",children:"Docker"})}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"create-identities",children:"Create Identities"}),"\n",(0,s.jsxs)(n.p,{children:["Follow the guide @",(0,s.jsx)(n.a,{href:"/docs/learn/core-concepts/identities/overview#creating-an-identity",children:"Create Identities"})," for the ngx-ziti-module and windows client."]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["client name = ",(0,s.jsx)(n.code,{children:"client-nginx"})," with ",(0,s.jsx)(n.code,{children:"Attribute"}),": ",(0,s.jsx)(n.code,{children:"#clients"}),",  server module name = ",(0,s.jsx)(n.code,{children:"server-nginx"})," with ",(0,s.jsx)(n.code,{children:"Attribute"}),": ",(0,s.jsx)(n.code,{children:"#servers"})]})}),"\n",(0,s.jsx)(n.p,{children:"Download jwt files and enroll identities."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Windows ZDE Identity can be enrolled by following this ",(0,s.jsx)(n.a,{href:"/docs/reference/tunnelers/windows/",children:"enrolling process"})]}),"\n",(0,s.jsxs)(n.li,{children:["Nginx Module Identity can be enrolled by following ",(0,s.jsx)(n.a,{href:"/docs/learn/core-concepts/identities/enrolling",children:"Enrolling an Identity Guide"})]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"build-docker-image",children:"Build Docker Image"}),"\n",(0,s.jsx)(n.p,{children:"Currently, configmaps have a binary file limit of 1MB and the size of the ngx-ziti-module is around 2~3MBs. Therefore, it can not be uploaded to the existing nginx image. One needs to build a custom docker image and add it during the build process."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Follow steps to build @",(0,s.jsx)(n.a,{href:"https://github.com/openziti/ngx_ziti_module/blob/main/README.md#user-content-build-using-cmake",children:"ngx-ziti-module"})]}),"\n",(0,s.jsxs)(n.li,{children:["Follow steps to create @",(0,s.jsx)(n.a,{href:"https://docs.nginx.com/nginx-ingress-controller/installation/building-nginx-ingress-controller/#build-image",children:"nginx ingress controller image"})]}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["One way to update the build is to add to the Dockerfile (",(0,s.jsx)(n.code,{children:"build/Dockerfile"}),") this snippet of code under the common section, i.e. ",(0,s.jsx)(n.code,{children:"FROM ${BUILD_OS} as common"})]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-textell",children:"# copy ziti module\r\nCOPY  ./ngx_ziti_module.so /usr/lib/nginx/modules\r\n\n"})}),(0,s.jsxs)(n.p,{children:["Also, need to add the following package ",(0,s.jsx)(n.code,{children:"libc6"})," to the debian build in the same Dockerfile, i.e. ",(0,s.jsx)(n.code,{children:"FROM nginx:1.23.3 AS debian"}),". Did not try the alpine build but the assumption is that would be the same."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-textell",children:"&& apt-get install --no-install-recommends --no-install-suggests -y libcap2-bin libc6 \\\n"})}),(0,s.jsxs)(n.p,{children:["Lastly, if you don't want the image name to have a postfix of",(0,s.jsx)(n.code,{children:"SNAPSHOT..."})," , comment it out in ",(0,s.jsx)(n.code,{children:"Makefile"}),"."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-textell",children:"VERSION = $(GIT_TAG)##-SNAPSHOT-$(GIT_COMMIT_SHORT)\n"})})]}),"\n",(0,s.jsx)(n.p,{children:"Once the image is built, upload it to your container registry. You will need it during customization of the nginx ingress controller deployment to the AKS Cluster."}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsx)(n.p,{children:"if you don't have time to build your own, can use our test image based on debian 11 and nginx v1.23.3"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-textell",children:'set {\r\n    name = "controller.image.repository"\r\n    value = "docker.io/elblag91/ziti-nginx-ingress"\r\n}\n'})})]}),"\n",(0,s.jsx)(n.h2,{id:"deploy-aks-cluster",children:"Deploy AKS Cluster"}),"\n",(0,s.jsxs)(n.p,{children:["Deploy the AKS Infrustructure in Azure using terraform. The terraform code is located @",(0,s.jsx)(n.a,{href:"https://github.com/dariuszSki/openziti-nginx-ingress-terraform.git",children:"OpenZiti Nginx Ingress Terraform Repo"}),". The following resources will be created, when the plan is applied."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Virtual Network"}),"\n",(0,s.jsx)(n.li,{children:"AKS Private Cluster with Kubenet CNI and Nginx Ingress Controller"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Set a few environmental variables for Azure Authentication and Authorization."}),"\n",(0,s.jsx)(n.admonition,{title:"Env Vars",type:"tip",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'export ARM_SUBSCRIPTION_ID = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"\r\n\r\nexport ARM_CLIENT_ID = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"\r\n\r\nexport ARM_CLIENT_SECRET = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"\r\n\r\nexport ARM_TENANT_ID = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"\n'})})}),"\n",(0,s.jsx)(n.p,{children:"Run terraform plan."}),"\n",(0,s.jsxs)(n.admonition,{title:"Steps",type:"info",children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-textell",children:'git clone https://github.com/dariuszSki/openziti-nginx-ingress-terraform.git\r\ncd openziti-nginx-ingress-terraform/tf-provider\r\nterraform init\r\nterraform plan  -var include_aks_nginx=true  -out aks\r\nterraform apply "aks"\n'})}),(0,s.jsxs)(n.p,{children:["Once completed, grab  ",(0,s.jsx)(n.code,{children:"cluster_public_fqdn"})," under ",(0,s.jsx)(n.code,{children:"outputs"})," as shown in the example below."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-textell",children:'cluster_name = "akssandeastus"\r\ncluster_private_fqdn = ""\r\ncluster_public_fqdn = "akssand-2ift1yqr.hcp.eastus.azmk8s.io"\r\n\n'})})]}),"\n",(0,s.jsx)(n.h2,{id:"configuration-code-snippets",children:"Configuration Code Snippets"}),"\n",(0,s.jsx)(n.p,{children:"If you are using your own deployment method, here are some configuration details from helm chart that need to be passed to the nginx ingress controller deployment."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Ziti Nginx Module Identity"})})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-textell",children:'nginx_ziti_identity = "${file("./server-nginx.json")}"\r\nresource "kubernetes_secret" "ziti-identity" {\r\n  metadata {\r\n    name = "nginx-ziti-identity"\r\n  }\r\n  data = {\r\n    "nginx-ziti-identity" = var.nginx_ziti_identity\r\n  }\r\n  type = "Opaque"\r\n}\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Image Reference"})})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-textell",children:'set {\r\n    name = "controller.image.repository"\r\n    value = "docker.io/elblag91/ziti-nginx-ingress"\r\n  }\r\n\r\nset {\r\n    name = "controller.image.tag"\r\n    value = "3.0.2"\r\n}\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Configuration File - Main section block"})})}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"Services are commented out until they are created. Then, terraform plan can be re-run to enable them."})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-textell",children:"controller:\r\n  service:\r\n    create: false\r\n  config:\r\n    entries:\r\n      main-snippets: |\r\n        load_module modules/ngx_ziti_module.so;\r\n       \r\n        thread_pool ngx_ziti_tp threads=32 max_queue=65536;\r\n\r\n        #ziti identity1 {\r\n        #  identity_file /var/run/secrets/openziti.io/${kubernetes_secret.ziti-identity.metadata[0].name};\r\n\r\n        #  bind k8s-api {\r\n        #    upstream kubernetes.default:443;\r\n        #  }\r\n        #}\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Volume section and path to secrets. Added openziti.io folder."})})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:'  volumes:\r\n      - name: "ziti-nginx-files"\r\n        projected:\r\n          defaultMode: 420\r\n          sources:\r\n          - secret:\r\n              name: ${kubernetes_secret.ziti-identity.metadata[0].name}\r\n              items: \r\n              - key: ${kubernetes_secret.ziti-identity.metadata[0].name}\r\n                path: ${kubernetes_secret.ziti-identity.metadata[0].name}\r\n  volumeMounts:\r\n    - mountPath: /var/run/secrets/openziti.io\r\n      name: ziti-nginx-files\r\n      readOnly: true\r\n\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"service-configurations",children:"Service Configurations"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Create configs"})})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-textell",children:'ziti edge create config k8s-api-intercept.v1 intercept.v1 "{\\"protocols\\": [\\"tcp\\"], \\"addresses\\": [\\"akssand-2ift1yqr.hcp.eastus.azmk8s.io\\"],\\"portRanges\\": [{\\"low\\": 443,\\"high\\": 443}]}"\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Create Service"})})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-textell",children:'ziti edge create service k8s-api --configs "k8s-api-intercept.v1" --role-attributes "service-nginx"\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Create Service Bind Policy"})})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-textell",children:'ziti edge create service-policy k8s-api-bind Bind --semantic "AnyOf" --identity-roles "#servers" --service-roles "#service-nginx"\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Create Service Dial Policy"})})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-textell",children:'ziti edge create service-policy k8s-api-dial Dial --semantic "AnyOf" --identity-roles "#clients" --service-roles "#service-nginx"\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"enable-ziti-service-in-ingress-controller",children:"Enable Ziti Service in Ingress Controller"}),"\n",(0,s.jsxs)(n.p,{children:["Uncomment ",(0,s.jsx)(n.code,{children:"ziti identity1"})," block in ",(0,s.jsx)(n.code,{children:"resource.helm_release.nginx-ingress"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-textell",children:"config:\r\n    entries:\r\n      main-snippets: |\r\n        load_module modules/ngx_ziti_module.so;\r\n       \r\n        thread_pool ngx_ziti_tp threads=32 max_queue=65536;\r\n\r\n        ziti identity1 {\r\n          identity_file /var/run/secrets/openziti.io/${kubernetes_secret.ziti-identity.metadata[0].name};\r\n\r\n          bind k8s-api {\r\n            upstream kubernetes.default:443;\r\n          }\r\n        }\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsx)(n.p,{children:"Need to disable ZDE for this network before the next step, so the nginx updates will not get intercepted while the service is not ready yet."})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Re-run terraform"})})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"terraform plan  -var include_aks_nginx=true  -out aks\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:'terraform apply "aks"\n'})}),"\n",(0,s.jsx)(n.h2,{id:"lets-test-our-service",children:"Let's test our service"}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["If the terraform was run, the kube-config file was created in the tf root directory. One can also use ",(0,s.jsx)(n.code,{children:"az cli"})," to get the kube config downloaded."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-textell",children:"# Configure your local kube configuration file using azure cli\r\naz login # if not already logged in\r\n# Windows WSL\r\nexport RG_NAME = 'resource group name'\r\nexport ARM_SUBSCRIPTION_ID = \xa0'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'\r\naz aks get-credentials --resource-group $RG_NAME --name {cluster_name} --subscription $ARM_SUBSCRIPTION_ID\n"})})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Check context in the kubectl config file"})})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-textell",children:"kubectl config  get-contexts\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"Expected Output"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-textell",children:"CURRENT   NAME            CLUSTER         AUTHINFO                                           NAMESPACE\r\n*         akssandeastus   akssandeastus   clusterUser_nginx_module_rg_eastus_akssandeastus   \n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Let's check the status of nodes in the cluster."})})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-textell",children:"kubectl get nodes\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"Expected Output"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-textell",children:"NAME                                STATUS   ROLES   AGE    VERSION\r\naks-agentpool-20887740-vmss000000   Ready    agent   151m   v1.24.9\r\naks-agentpool-20887740-vmss000001   Ready    agent   151m   v1.24.9\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"List cluster info"})})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-textell",children:"kubectl cluster-info\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"Expected Output"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-textell",children:"Kubernetes control plane is running at https://akssand-2ift1yqr.hcp.eastus.azmk8s.io:443\r\nCoreDNS is running at https://akssand-2ift1yqr.hcp.eastus.azmk8s.io:443/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy\r\nMetrics-server is running at https://akssand-2ift1yqr.hcp.eastus.azmk8s.io:443/api/v1/namespaces/kube-system/services/https:metrics-server:/proxy\r\n\r\nTo further debug and diagnose cluster problems, use 'kubectl cluster-info dump'.\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"List pods"})})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-textell",children:"kubectl get pods --all-namespaces\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"Expected Output"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-textell",children:"NAMESPACE     NAME                                           READY   STATUS    RESTARTS   AGE\r\ndefault       nginx-ingress-nginx-ingress-7ffd564557-ngt69   1/1     Running   0          134m\r\nkube-system   azure-ip-masq-agent-9scx6                      1/1     Running   0          166m\r\nkube-system   azure-ip-masq-agent-xps5g                      1/1     Running   0          166m\r\nkube-system   cloud-node-manager-8q7fk                       1/1     Running   0          166m\r\nkube-system   cloud-node-manager-czg95                       1/1     Running   0          166m\r\nkube-system   coredns-59b6bf8b4f-8t5kj                       1/1     Running   0          165m\r\nkube-system   coredns-59b6bf8b4f-rc6b8                       1/1     Running   0          167m\r\nkube-system   coredns-autoscaler-5655d66f64-pbjhr            1/1     Running   0          167m\r\nkube-system   csi-azuredisk-node-2mp98                       3/3     Running   0          166m\r\nkube-system   csi-azuredisk-node-tq6x6                       3/3     Running   0          166m\r\nkube-system   csi-azurefile-node-9q4f5                       3/3     Running   0          166m\r\nkube-system   csi-azurefile-node-bzr4z                       3/3     Running   0          166m\r\nkube-system   konnectivity-agent-86cdc66d6b-tlhkw            1/1     Running   0          128m\r\nkube-system   konnectivity-agent-86cdc66d6b-ttmq6            1/1     Running   0          128m\r\nkube-system   kube-proxy-q48qv                               1/1     Running   0          166m\r\nkube-system   kube-proxy-t2dhr                               1/1     Running   0          166m\r\nkube-system   metrics-server-8655f897d8-mr2bq                2/2     Running   0          165m\r\nkube-system   metrics-server-8655f897d8-tnpzt                2/2     Running   0          165m\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"List  services"})})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-textell",children:"kubectl get services --all-namespaces\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"Expected Output"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-textell",children:"NAMESPACE     NAME             TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)         AGE\r\ndefault       kubernetes       ClusterIP   10.0.0.1       <none>        443/TCP         169m\r\nkube-system   kube-dns         ClusterIP   10.0.0.10      <none>        53/UDP,53/TCP   169m\r\nkube-system   metrics-server   ClusterIP   10.0.218.224   <none>        443/TCP         169m\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"At this point the public access is still available even though the API Kubectl queries are routed through Ziti. You can disable ZDE client and test that."})}),"\n",(0,s.jsx)(n.h2,{id:"block-ips-to-api-server",children:"Block IPs to API Server"}),"\n",(0,s.jsx)(n.p,{children:"Pass the following variable to only allow 192.168.1.1/32 source IP to essentially disable Public Access."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-textell",children:'terraform plan  -var include_aks_nginx=true -var authorized_source_ip_list=[\\"192.168.1.1/32\\"] -out aks\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-textell",children:'terraform apply "aks"\n'})}),"\n",(0,s.jsx)(n.p,{children:"Retest with ZDE enabled and disabled for this network."}),"\n",(0,s.jsx)(n.h2,{id:"clean-up",children:"Clean up"}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"Run terraform to open up the AKS API to public before deleting AKS resources, so you dont get locked out."})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-textell",children:'terraform plan  -var include_aks_nginx=true -var authorized_source_ip_list=[\\"0.0.0.0/0\\"] -out aks\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-textell",children:'terraform apply "aks"\n'})}),"\n",(0,s.jsx)(n.p,{children:"Delete all resources"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-textell",children:"terraform plan  --destroy -var include_aks_nginx=true  -out aks\n"})})]})}function x(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},79186:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/nginx-aks-after-168be36dcccf67eaffd8382be46322da.svg"},77845:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/nginx-aks-before-8052922bcebcc62faa4c2f7912cd9931.svg"},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>c});var i=r(96540);const s={},t=i.createContext(s);function l(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);