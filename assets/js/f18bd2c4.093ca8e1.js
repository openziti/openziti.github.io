"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[1177],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>h});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(i),h=a,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||s;return i?n.createElement(m,r(r({ref:t},u),{},{components:i})):n.createElement(m,r({ref:t},u))}));function h(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=i.length,r=new Array(s);r[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var c=2;c<s;c++)r[c]=i[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},6318:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=i(7462),a=(i(7294),i(3905));const s={authors:"dovholuknf"},r=void 0,o={permalink:"/blog/zitification/kubernetes/kubernetes-oci",source:"@site/blog/zitification/kubernetes/kubernetes-oci.md",title:"zitification/kubernetes/kubernetes-oci",description:"Kubernetes Cheatsheet",date:"2022-12-06T14:47:43.000Z",formattedDate:"December 6, 2022",tags:[],readingTime:3.34,hasTruncateMarker:!1,authors:[{name:"Clint Dovholuk",title:"OpenZiti Maintainer",url:"https://github.com/dovholuknf",imageURL:"https://avatars.githubusercontent.com/u/46322585?v=4",key:"dovholuknf"}],frontMatter:{authors:"dovholuknf"},prevItem:{title:"Zitifying Kubectl",permalink:"/blog/zitification/kubernetes"},nextItem:{title:"Enable Prometheus to Scrape Anything from Anywhere",permalink:"/blog/zitification/prometheus/part1"}},l={authorsImageUrls:[void 0]},c=[{value:"Kubernetes Cheatsheet",id:"kubernetes-cheatsheet",level:2},{value:"establish some variables just to make commands easier:",id:"establish-some-variables-just-to-make-commands-easier",level:3},{value:"clean up commands - if needed:",id:"clean-up-commands---if-needed",level:3},{value:"create kubernetes config files - public and private:",id:"create-kubernetes-config-files---public-and-private",level:3},{value:"delete any resources if needed:",id:"delete-any-resources-if-needed",level:3},{value:"show it working via public ip from wsl:",id:"show-it-working-via-public-ip-from-wsl",level:3},{value:"wsl:",id:"wsl",level:4},{value:"show it failing via private ip from wsl:",id:"show-it-failing-via-private-ip-from-wsl",level:4},{value:"let&#39;s install ziti in the cluster:",id:"lets-install-ziti-in-the-cluster",level:3},{value:"make a new identity:",id:"make-a-new-identity",level:4},{value:"add the identity to the cluster (using the public ip):",id:"add-the-identity-to-the-cluster-using-the-public-ip",level:4},{value:"create the config file to apply",id:"create-the-config-file-to-apply",level:3},{value:"kubectl apply the config:",id:"kubectl-apply-the-config",level:3},{value:"verify the ziti identity was bootstrapped by using kubectl logs",id:"verify-the-ziti-identity-was-bootstrapped-by-using-kubectl-logs",level:3},{value:"let&#39;s setup the ziti bits we need",id:"lets-setup-the-ziti-bits-we-need",level:3},{value:"ziti setup:",id:"ziti-setup",level:4},{value:"verify windows can access the kubernetes api (using cmd.exe from wsl):",id:"verify-windows-can-access-the-kubernetes-api-using-cmdexe-from-wsl",level:4},{value:"at this point from wsl kubectl will work using the ip address - but not dns",id:"at-this-point-from-wsl-kubectl-will-work-using-the-ip-address---but-not-dns",level:4},{value:"use &quot;kubeztl&quot;:",id:"use-kubeztl",level:4},{value:"download from github:",id:"download-from-github",level:4},{value:"modify config if you want...",id:"modify-config-if-you-want",level:4},{value:"useful if you need to update either of the identities...",id:"useful-if-you-need-to-update-either-of-the-identities",level:3}],u={toc:c};function d(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"kubernetes-cheatsheet"},"Kubernetes Cheatsheet"),(0,a.kt)("p",null,"This page exists as the set of commands which were used in the video ",(0,a.kt)("a",{parentName:"p",href:"https://youtu.be/CRoansolpR0"},"Secure Kubernetes Cluster using Ziti")),(0,a.kt)("h3",{id:"establish-some-variables-just-to-make-commands-easier"},"establish some variables just to make commands easier:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'service_name=k8s.oci\nthe_user_identity="${service_name}".client\nthe_kubernetes_identity="${service_name}".private\noci_cluster_id="put-your-cluster-id-here"\n')),(0,a.kt)("h3",{id:"clean-up-commands---if-needed"},"clean up commands - if needed:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'rm /tmp/oci/config.oci.public\nrm /tmp/oci/config.oci.private\nziti edge delete identity "${the_kubernetes_identity}"\nziti edge delete identity "${the_user_identity}"\n')),(0,a.kt)("p",null,"work done ahead of time - takes time to establish a cluster:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"* previously setup kubernetes in OKE\n    * simple cluster\n    * standard quick create cluster\n    * public endpoint\n    * Shape: VM.Standard2.2\n    * 1 node\n    * pasted my public key for access\n    * exposed the cluster with public ip\n* already installed oci as well as helm\n* already deployed a ziti environment using https://openziti.github.io/docs/quickstarts/network/hosted\n")),(0,a.kt)("h3",{id:"create-kubernetes-config-files---public-and-private"},"create kubernetes config files - public and private:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"oci ce cluster create-kubeconfig \\\n    --cluster-id ${oci_cluster_id} \\\n    --file /tmp/oci/config.oci.public \\\n    --region us-ashburn-1 \\\n    --token-version 2.0.0 \\\n    --kube-endpoint PUBLIC_ENDPOINT\nchmod 600 /tmp/oci/config.oci.public\n    \noci ce cluster create-kubeconfig \\\n    --cluster-id ${oci_cluster_id} \\\n    --file /tmp/oci/config.oci.private \\\n    --region us-ashburn-1 \\\n    --token-version 2.0.0 \\\n    --kube-endpoint PRIVATE_ENDPOINT\nchmod 600 /tmp/oci/config.oci.private\n")),(0,a.kt)("h3",{id:"delete-any-resources-if-needed"},"delete any resources if needed:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"export KUBECONFIG=/tmp/oci/config.oci.public\nhelm uninstall ziti-host\nkubectl delete persistentvolume ziti-host-pv\n")),(0,a.kt)("h3",{id:"show-it-working-via-public-ip-from-wsl"},"show it working via public ip from wsl:"),(0,a.kt)("h4",{id:"wsl"},"wsl:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"export KUBECONFIG=/tmp/oci/config.oci.public\nkubectl get pods -v7 --request-timeout='5s'\n")),(0,a.kt)("h4",{id:"show-it-failing-via-private-ip-from-wsl"},"show it failing via private ip from wsl:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"export KUBECONFIG=/tmp/oci/config.oci.private\nkubectl get pods -v7 --request-timeout='2s'\n")),(0,a.kt)("h3",{id:"lets-install-ziti-in-the-cluster"},"let's install ziti in the cluster:"),(0,a.kt)("h4",{id:"make-a-new-identity"},"make a new identity:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'ziti edge create identity device "${the_kubernetes_identity}" -a "${service_name}"ServerEndpoints -o "${the_kubernetes_identity}".jwt\nziti edge create identity device "${the_user_identity}" -a "${service_name}"ClientEndpoints -o "${the_user_identity}".jwt\n')),(0,a.kt)("h4",{id:"add-the-identity-to-the-cluster-using-the-public-ip"},"add the identity to the cluster (using the public ip):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add netfoundry https://netfoundry.github.io/charts/\n")),(0,a.kt)("h3",{id:"create-the-config-file-to-apply"},"create the config file to apply"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: PersistentVolume\nmetadata:\n  name: ziti-host\n  labels:\n    type: local\nspec:\n  storageClassName: oci\n  capacity:\n    storage: 100Mi\n  accessModes:\n    - ReadWriteOnce\n  hostPath:\n    path: "/netfoundry"\n')),(0,a.kt)("h3",{id:"kubectl-apply-the-config"},"kubectl apply the config:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'export KUBECONFIG=/tmp/oci/config.oci.public\nkubectl apply -f add-persistent-claims.yaml \nhelm install ziti-host netfoundry/ziti-host --set-file enrollmentToken="${the_kubernetes_identity}".jwt\n')),(0,a.kt)("h3",{id:"verify-the-ziti-identity-was-bootstrapped-by-using-kubectl-logs"},"verify the ziti identity was bootstrapped by using kubectl logs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl logs ziti-host<tab><enter>\n")),(0,a.kt)("hr",null),(0,a.kt)("p",null,'now go disable the public ip so private access ONLY works... this takes "a minute or two or three"...'),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"lets-setup-the-ziti-bits-we-need"},"let's setup the ziti bits we need"),(0,a.kt)("p",null,"setup ziti to access the private server address...\nset environment variables to make it easier to reference:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'export KUBECONFIG=/tmp/oci/config.oci.private\nk8s_private_host_and_port=$(kubectl config view | grep server | cut -d "/" -f3)\nk8s_private_host=$(echo ${k8s_private_host_and_port} | cut -d ":" -f1)\nk8s_private_port=$(echo ${k8s_private_host_and_port} | cut -d ":" -f2)\necho "Private URL: ${k8s_private_host_and_port}, Host: ${k8s_private_host}, Port: ${k8s_private_port}"\n')),(0,a.kt)("h4",{id:"ziti-setup"},"ziti setup:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'k8s_private_dns=kubernetes\n\nziti edge delete config "${service_name}"-host.v1\nziti edge delete config "${service_name}"-client-config\nziti edge delete service "${service_name}"\nziti edge delete service-policy "${service_name}"-binding\nziti edge delete service-policy "${service_name}"-dialing\n\nziti edge create config "${service_name}"-host.v1 host.v1 \'{"protocol":"tcp", "address":"\'${k8s_private_host}\'","port":\'${k8s_private_port}\' }\'\nziti edge create config "${service_name}"-client-config intercept.v1 \'{"protocols":["tcp"],"addresses":["\'${k8s_private_host}\'","\'${k8s_private_dns}\'"], "portRanges":[{"low":443, "high":443}]}\'\nziti edge create service "${service_name}" --configs "${service_name}"-client-config,"${service_name}"-host.v1\nziti edge create service-policy "${service_name}"-binding Bind --service-roles \'@\'"${service_name}" --identity-roles \'#\'"${service_name}"\'ServerEndpoints\'\nziti edge create service-policy "${service_name}"-dialing Dial --service-roles \'@\'"${service_name}" --identity-roles \'#\'"${service_name}"\'ClientEndpoints\'\n')),(0,a.kt)("h4",{id:"verify-windows-can-access-the-kubernetes-api-using-cmdexe-from-wsl"},"verify windows can access the kubernetes api (using cmd.exe from wsl):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'cmd.exe /c curl -k "https://${k8s_private_dns}"\ncmd.exe /c curl -k "https://${k8s_private_host}"    \n')),(0,a.kt)("h4",{id:"at-this-point-from-wsl-kubectl-will-work-using-the-ip-address---but-not-dns"},"at this point from wsl kubectl will work using the ip address - but not dns"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'#enroll the identity\nziti edge enroll "${the_user_identity}".jwt\n\n# use the identity to get pods:\n./kubeztl --zConfig "${the_user_identity}".json --service k8s.oci get pods\n\n# update your config to make it so you don\'t need to supply --zConfig or --service\n# replace "${the_user_identity}" accordingly:\nzConfig: /mnt/v/temp/oci/"${the_user_identity}".json\nservice: k8s.oci\n')),(0,a.kt)("h4",{id:"use-kubeztl"},'use "kubeztl":'),(0,a.kt)("h4",{id:"download-from-github"},"download from github:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl -L -o kubeztl https://github.com/openziti-incubator/kubectl/releases/download/v0.0.4/kubectl-linux-amd64 ./kubeztl get pods -c ./id.json -S "${service_name}"\n')),(0,a.kt)("h4",{id:"modify-config-if-you-want"},"modify config if you want..."),(0,a.kt)("p",null,"find your context, add two lines:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"zConfig: /mnt/v/temp/oci/oci.json\nservice: k8s.oci\n")),(0,a.kt)("h3",{id:"useful-if-you-need-to-update-either-of-the-identities"},"useful if you need to update either of the identities..."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'ziti edge update identity "${the_user_identity}" -a "${service_name}"ClientEndpoints\nziti edge update identity "${the_kubernetes_identity}" -a "${service_name}"ServerEndpoints\n')))}d.isMDXComponent=!0}}]);