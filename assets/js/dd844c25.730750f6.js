"use strict";(self.webpackChunkdocusaurus_3=self.webpackChunkdocusaurus_3||[]).push([[647],{60383:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"reference/tunnelers/kubernetes/kubernetes-sidecar","title":"Kubernetes Sidecar Proxy","description":"Overview","source":"@site/docs/reference/tunnelers/80-kubernetes/kubernetes-sidecar.md","sourceDirName":"reference/tunnelers/80-kubernetes","slug":"/reference/tunnelers/kubernetes/kubernetes-sidecar","permalink":"/docs/reference/tunnelers/kubernetes/kubernetes-sidecar","draft":false,"unlisted":false,"editUrl":"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/reference/tunnelers/80-kubernetes/kubernetes-sidecar.md","tags":[],"version":"current","lastUpdatedAt":1743027175000,"sidebarPosition":70,"frontMatter":{"sidebar_position":70,"sidebar_label":"Sidecar Proxy"},"sidebar":"docsSidebar","previous":{"title":"Node Proxy","permalink":"/docs/reference/tunnelers/kubernetes/kubernetes-daemonset"},"next":{"title":"NGINX Module","permalink":"/docs/reference/tunnelers/nginx"}}');var s=n(74848),r=n(28453);const a={sidebar_position:70,sidebar_label:"Sidecar Proxy"},c="Kubernetes Sidecar Proxy",d={},o=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create and Enroll an Identity",id:"create-and-enroll-an-identity",level:2},{value:"Restore the Quickstart KUBECONFIG If Necessary",id:"restore-the-quickstart-kubeconfig-if-necessary",level:2},{value:"Save the Identity in a Kubernetes Secret",id:"save-the-identity-in-a-kubernetes-secret",level:2},{value:"Deploy the Pod",id:"deploy-the-pod",level:2},{value:"Check the Logs",id:"check-the-logs",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"kubernetes-sidecar-proxy",children:"Kubernetes Sidecar Proxy"})}),"\n",(0,s.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsxs)(t.p,{children:["This guide shows you how to access a service with a non-Ziti client application that's running\nin a Kubernetes pod. To provide access to the service, we will deploy the ",(0,s.jsx)(t.code,{children:"ziti-tunnel"})," container as a sidecar in a pod with a demo client app."]}),"\n",(0,s.jsxs)(t.p,{children:["This guide also demonstrates ",(0,s.jsx)(t.code,{children:"ziti-tunnel"}),"'s internal DNS server, which allows us to access services\nby hostname instead of IP address."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Diagram of solution",src:n(41448).A+"",width:"865",height:"584"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/docs/reference/tunnelers/linux/",children:"Here's some detail on how the various intercept modes work on Linux"})}),"\n",(0,s.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Complete the ",(0,s.jsx)(t.a,{href:"/docs/learn/quickstarts/network/local-kubernetes",children:"Minikube Quickstart"}),". This guide\nuses the controller and router that are created in the Minikube Quickstart."]}),"\n",(0,s.jsxs)(t.li,{children:["Admin-level access to a Kubernetes cluster via ",(0,s.jsx)(t.code,{children:"kubectl"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"create-and-enroll-an-identity",children:"Create and Enroll an Identity"}),"\n",(0,s.jsx)(t.p,{children:'This guide will re-use the service "testapi-service", a REST API demo server, that was created in the quickstart.'}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"We will create a new identity for our client app with the correct role to grant access to the service."}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-text",children:"ziti edge create identity sidecar-client \\\n  --jwt-output-file /tmp/sidecar-client.jwt --role-attributes testapi-clients\n"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Enroll the identity."}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-text",children:"ziti edge enroll /tmp/sidecar-client.jwt\n"})}),"\n",(0,s.jsx)(t.h2,{id:"restore-the-quickstart-kubeconfig-if-necessary",children:"Restore the Quickstart KUBECONFIG If Necessary"}),"\n",(0,s.jsx)(t.p,{children:"You can restore the KUBECONFIG context from the Minikube quickstart like this if you switched contexts after running it."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-text",children:"minikube --profile miniziti update-context\n"})}),"\n",(0,s.jsx)(t.h2,{id:"save-the-identity-in-a-kubernetes-secret",children:"Save the Identity in a Kubernetes Secret"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"ziti-tunnel"})," sidecar will access its identity by mounting a Kubernetes secret in the container."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-text",children:'kubectl create secret generic "sidecar-client-identity" \\\n    --from-file=/tmp/sidecar-client.json\n'})}),"\n",(0,s.jsx)(t.h2,{id:"deploy-the-pod",children:"Deploy the Pod"}),"\n",(0,s.jsxs)(t.p,{children:["Deploy a Pod that runs a non-Ziti demo client application and ",(0,s.jsx)(t.code,{children:"ziti-tunnel"})," as a sidecar proxy. For this\ndemonstration, the client application is ",(0,s.jsx)(t.code,{children:"wget"}),". Our Pod sends a ",(0,s.jsx)(t.code,{children:"POST"})," request to the demo testapi server in a loop so we can see the response in the log."]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Find the CoreDNS cluster service IP address."}),"\n",(0,s.jsxs)(t.p,{children:["You need to update the deployment manifest with the CoreDNS CLUSTER-IP address before you deploy. This is because the ",(0,s.jsx)(t.code,{children:"ziti-tunnel"})," sidecar provides an override nameserver for the pod, so we need to inject the CoreDNS nameserver as fallback resolver for non-Ziti names because ",(0,s.jsx)(t.code,{children:"ziti-tunnel"})," itself will not answer queries for non-Ziti DNS names."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-text",children:"kubectl --namespace kube-system get services kube-dns\n"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Save the following to a file named /tmp/sidecar-demo.yaml."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-text",children:'# /tmp/sidecar-demo.yaml\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: ziti-tunnel-sidecar-demo\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: ziti-tunnel-sidecar-demo\n  strategy:\n    type: Recreate\n  template:\n    metadata:\n      labels:\n        app: ziti-tunnel-sidecar-demo\n    spec:\n      containers:\n        - image: stedolan/jq\n          name: testclient\n          command: \n            - sh\n            - -c\n            - |\n              while true; do\n                set -x\n                wget --quiet \\\n                  --output-document=- \\\n                  --post-data ziti=awesome \\\n                  http://testapi.ziti/post \\\n                | jq .data\n                set +x\n                sleep 3\n              done\n        - image: openziti/ziti-tunnel\n          name: ziti-tunnel\n          args: ["tproxy"]\n          env:\n          - name: ZITI_IDENTITY_BASENAME\n            value: sidecar-client  # the filename in the volume is sidecar-client.json\n          volumeMounts:\n          - name: sidecar-client-identity\n            mountPath: /netfoundry\n            readOnly: true\n          securityContext:\n            capabilities:\n              add:\n              - NET_ADMIN\n      dnsPolicy: None\n      dnsConfig:\n        nameservers:\n          - 127.0.0.1   # used by the tunneler during startup to verify own DNS for the pod\n          - 10.96.0.10  # change to CoreDNS cluster service address\n      restartPolicy: Always\n      volumes:\n      - name: sidecar-client-identity\n        secret:\n          secretName: sidecar-client-identity\n'})}),"\n",(0,s.jsxs)(t.p,{children:["You'll notice that the ",(0,s.jsx)(t.code,{children:"ziti-tunnel"})," sidecar container has a few requirements:"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["The basename (sans suffix) of the identity that is assumed by ",(0,s.jsx)(t.code,{children:"ziti-tunnel"})," must be passed into the container with the\n",(0,s.jsx)(t.code,{children:"ZITI_IDENTITY_BASENAME"})," environment variable."]}),"\n",(0,s.jsx)(t.li,{children:'The secret that we created above for the enrolled identity must be mounted into the container at\n"/netfoundry".'}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Once the manifest YAML is saved, we can deploy the pod with ",(0,s.jsx)(t.code,{children:"kubectl"})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-text",children:"kubectl apply -f /tmp/sidecar-demo.yaml\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"check-the-logs",children:"Check the Logs"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Find the name of the pod that Kubernetes deployed for us."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-text",children:"$ kubectl get pods\nziti-tunnel-sidecar-demo-749c476989-6wpfn   1/1     Running   0          42s\n"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:'Tail the logs for the "testclient" container inside the pod. The first few attempts didn\'t get a reply because the tunnel was starting up.'}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-text",children:'$ kubectl logs --follow ziti-tunnel-sidecar-demo-749c476989-6wpfn --container testclient\n+ wget --quiet --output-document=- --post-data ziti=awesome http://testapi.ziti/post\n+ jq .data\n+ set +x\n+ wget --quiet --output-document=- --post-data ziti=awesome http://testapi.ziti/post\n+ jq .data\n+ set +x\n+ wget --quiet --output-document=- --post-data ziti=awesome http://testapi.ziti/post\n+ jq .data\n"ziti=awesome"\n+ set +x\n+ wget --quiet --output-document=- --post-data ziti=awesome http://testapi.ziti/post\n+ jq .data\n"ziti=awesome"\n+ set +x\n+ wget --quiet --output-document=- --post-data ziti=awesome http://testapi.ziti/post\n+ jq .data\n"ziti=awesome"\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Notice that the ",(0,s.jsx)(t.code,{children:"wget"})," client is using the DNS name that we provided in the service definition to make the request."]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},41448:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/sidecar-diagram-94e794be522098d08715eac653dd8207.svg"},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>c});var i=n(96540);const s={},r=i.createContext(s);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);