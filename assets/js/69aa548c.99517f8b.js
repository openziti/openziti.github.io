"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[2635],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||i;return n?o.createElement(m,r(r({ref:t},p),{},{components:n})):o.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},28251:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=n(87462),a=(n(67294),n(3905));const i={authors:"dovholuknf"},r="Scraping Anything, Anywhere in Action",s={permalink:"/blog/zitification/prometheus/part3",source:"@site/blog/zitification/prometheus/part3.md",title:"Scraping Anything, Anywhere in Action",description:"_This is part three of a three-part article. This article builds on the previous two articles. Here we will take a look at what we built",date:"2023-04-13T20:18:21.000Z",formattedDate:"April 13, 2023",tags:[],readingTime:11.73,hasTruncateMarker:!1,authors:[{name:"Clint Dovholuk",title:"OpenZiti Maintainer",url:"https://github.com/dovholuknf",imageURL:"https://avatars.githubusercontent.com/u/46322585?v=4",key:"dovholuknf"}],frontMatter:{authors:"dovholuknf"},prevItem:{title:"Configuring OpenZiti to Enable Prometheus",permalink:"/blog/zitification/prometheus/part2"},nextItem:{title:"Zitifying SCP",permalink:"/blog/zitification/zitifying-scp"}},l={authorsImageUrls:[void 0]},c=[{value:"The Payoff",id:"the-payoff",level:2},{value:"Developer Access",id:"developer-access",level:2},{value:"ClusterA",id:"clustera",level:2},{value:"Config Reloaded",id:"config-reloaded",level:3},{value:"Let&#39;s Graph It!",id:"lets-graph-it",level:3},{value:"Generate Some Data",id:"generate-some-data",level:3},{value:"Scrape Something Else",id:"scrape-something-else",level:3},{value:"Scraping All the Things!",id:"scraping-all-the-things",level:2},{value:"Taking it to 11",id:"taking-it-to-11",level:2},{value:"But - Does It Work?",id:"but---does-it-work",level:3},{value:"SUCCESS!",id:"success",level:3},{value:"Wrap Up",id:"wrap-up",level:2}],p={toc:c};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"This is part three of a three-part article. This article builds on the previous two articles. Here we will take a look at what we built\nand use it to explore the power of a zitified Prometheus. See ",(0,a.kt)("a",{parentName:"em",href:"/blog/zitification/prometheus/part1"},"part one")," for the necessary background about the series. See\n",(0,a.kt)("a",{parentName:"em",href:"/blog/zitification/prometheus/part2"},"part two")," for detailed instructions covering how to setup the environment you're about to explore")),(0,a.kt)("h2",{id:"the-payoff"},"The Payoff"),(0,a.kt)("p",null,"Ok. Here it is. We are at the end of the series and here is where we'll put it all together and really start to understand the sort of\ninnovations you can create when you zitify an application. As a reminder, we are working with ",(0,a.kt)("a",{parentName:"p",href:"https://prometheus.io/"},"Prometheus"),", a\nCNCF project which we will use to monitor a workload deployed in two separate ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io"},"Kubernetes")," clusters. To save you\nfrom flipping back to a previous article, here is what that solution looks like."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"overview",src:n(81283).Z,width:"1264",height:"531"})),(0,a.kt)("p",null,"Now we are ready to start using our Prometheus servers. We'll use our OpenZiti overlay network to connect to a workload which will\ngenerate a metric we want to display in Prometheus. We'll then configure Prometheus to scrape the workload and put it on a graph to\nprove it works. Once that's complete, we'll play around with the setup and see if we really can scrape anything, anywhere. Let's begin."),(0,a.kt)("h2",{id:"developer-access"},"Developer Access"),(0,a.kt)("p",null,"In the ",(0,a.kt)("a",{parentName:"p",href:"/blog/zitification/prometheus/part2"},"previous article"),", we established our entire solution using the OpenZiti overlay, ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"helm"),'. We saw\neverything get installed and it all "seems to work". But how do we ',(0,a.kt)("strong",{parentName:"p"},"know")," it works?  Let's provision an identity for yourself now and\nlet's enroll it in your local tunneling app and find out. Go out and get ",(0,a.kt)("a",{parentName:"p",href:"/docs/learn/core-concepts/clients/choose"},"a tunneling client")," running\nlocally. Once you have that installed, provision an identity and enroll it with your tunneling client. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'ziti edge create identity user dev.client -a "prometheus-clients","reflectz-clients"\n')),(0,a.kt)("p",null,"You should have access to six total services when this identity is enrolled:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"Service Name: kubeA.prometheus.svc\n   Intercept: kubeA.prometheus.svc:80\nService Name: kubeA.reflect.svc\n   Intercept: kubeA.reflect.svc.ziti:80\nService Name: kubeA.reflect.scrape.svc\n   Intercept: kubeA.reflect.scrape.svc.ziti:80\n\nService Name: kubeB.prometheus.svc\n   Intercept: kubeB.prometheus.svc:80\nService Name: kubeB.reflect.svc\n   Intercept: kubeB.reflect.svc.ziti:80\nService Name: kubeB.reflect.scrape.svc\n   Intercept: kubeB.reflect.scrape.svc.ziti:80\n")),(0,a.kt)("h2",{id:"clustera"},"ClusterA"),(0,a.kt)("p",null,"With your developer access you should be able to navigate your browser to ",(0,a.kt)("a",{parentName:"p",href:"http://kubea.prometheus.svc/targets"},"http://kubea.prometheus.svc/targets"),". "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"[!NOTE]",'\nWe won\'t dwell on this for long in this article but notice that this is showing off another superpower of OpenZiti, private DNS.\nNotice that you were able to browse to a totally fictitious domain name: kubea.prometheus.svc. ".svc" is ',(0,a.kt)("strong",{parentName:"p"},"not")," a legitimate top level\ndomain.\n",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_Internet_top-level_domains#S"},"Look at the full list of top level domains starting with S"),'. You\nwon\'t find ".svc" on that list at this time')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kubea.prom.init",src:n(4900).Z,width:"510",height:"433"})),(0,a.kt)("p",null,"You should see the following. You might have noticed that the chart deployed has a few other containers we have not discussed yet. We'll\nnot go into those containers in this article. What's important is that this Prometheus server has a few targets already for us to access.\nNeat, but this isn't what we want to actually monitor."),(0,a.kt)("p",null,"What we really want to monitor is the workload we deployed: ",(0,a.kt)("inlineCode",{parentName:"p"},"reflectz"),". We can do this by editing the Prometheus configmap using\n",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl"),". Let's go ahead and do this now:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"kubectl edit cm prometheuz-prometheus-server\n")),(0,a.kt)("p",null,'This will open an editor in your terminal and allow you to update the config map for the pod. Once the editor is open, find the section\nlabeled "scrape_config" and add the following entry:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"    - job_name: 'kubeA.reflectz'\n      scrape_interval: 5s\n      honor_labels: true\n      scheme: 'ziti'\n      params:\n        'match[]':\n          - '{job!=\"\"}'\n        'ziti-config':\n          - '/etc/prometheus/scrape.json'\n      static_configs:\n        - targets:\n          - 'kubeA.reflect.scrape.svc-kubeA.reflect.id'\n")),(0,a.kt)("p",null,"This is yaml and yaml is sensitive to spaces. The block above is properly indented for the config that the helm chart installs. You\nshould be able to simply copy it and add it under the scrape_config. Remember, there is a ",(0,a.kt)("inlineCode",{parentName:"p"},"configmap-reload")," container in\nthe pod which monitors the configmap. On successful edit, this container will notice and will issue a web hook to the\n",(0,a.kt)("inlineCode",{parentName:"p"},"prometheus-server")," container. The trigger is not immediate, don't worry if it takes a while. It can take around a minute for the\ntrigger to fire. "),(0,a.kt)("p",null,"While we wait for the trigger, let's explain what this is doing. This is informing the Prometheus server to monitor a workload which can\nbe found at the provided target of ",(0,a.kt)("inlineCode",{parentName:"p"},"kubeA.reflect.scrape.svc-kubeA.reflect.id"),'. Notice that no port is included in this target, and also\nnotice that this is a very strange looking FQDN. That\'s because this is a zitified version of Prometheus. We have extended Prometheus to\nunderstand a "scheme" of ',(0,a.kt)("inlineCode",{parentName:"p"},"ziti"),". When we configure this job with a scheme of ziti, we can then supply targets to the job which represent\nan OpenZiti service.  We need to supply the ",(0,a.kt)("inlineCode",{parentName:"p"},"ziti-config")," node with the path to the identity we want Prometheus to use to issue the\nscrape. This will always be ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/prometheus/scrape.json")," at this time. Should the community desire it, we can look into changing the\nlocation of the identity."),(0,a.kt)("p",null,"If you would like to tail the ",(0,a.kt)("inlineCode",{parentName:"p"},"configmap-reloadz")," container, you can issue this one liner. This will instruct ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl")," to tail the logs\nfrom ",(0,a.kt)("inlineCode",{parentName:"p"},"configmap-reloadz"),". "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'pod=$(kubectl get pods | grep server | cut -d " " -f1); echo POD: $pod; kubectl logs -f "$pod" prometheus-server-configmap-reload\n')),(0,a.kt)("p",null,"When the trigger happens for ClusterA you will see a message like the one below. Notice that ",(0,a.kt)("inlineCode",{parentName:"p"},"configmap-reloadz")," is using the underlay\nnetwork: ",(0,a.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:9090/-/reload")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"2022/04/23 20:01:23 config map updated\n2022/04/23 20:01:23 performing webhook request (1/1/http://127.0.0.1:9090/-/reload)\n2022/04/23 20:01:23 successfully triggered reload\n")),(0,a.kt)("h3",{id:"config-reloaded"},"Config Reloaded"),(0,a.kt)("p",null,"Once you've correctly updated the configmap, and ",(0,a.kt)("inlineCode",{parentName:"p"},"configmap-reloadz")," detected the change and told Prometheus to reload. You'll see a new\ntarget has been reported by Prometheus at ",(0,a.kt)("a",{parentName:"p",href:"http://kubea.prometheus.svc/targets"},"http://kubea.prometheus.svc/targets"),'. You should now see "kubeA.reflectz (1/1 up)" showing.\nCongratulations! You have just successfully scraped a target from zitified Prometheus! Remember this workload does not listen on the\nKubernetes underlay network. It\'s only accessible from the OpenZiti overlay. '),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kubea.target1.png",src:n(12979).Z,width:"1055",height:"197"})),(0,a.kt)("h3",{id:"lets-graph-it"},"Let's Graph It!"),(0,a.kt)("p",null,"Cool, we have a target. The target can be scraped by Prometheus over the OpenZiti overlay. We're also able to securely access the\nPrometheus UI over the same OpenZiti overlay. Let's use the Prometheus UI to graph the data point we want to see, the\n",(0,a.kt)("inlineCode",{parentName:"p"},"reflect_total_connections")," metric. "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Navigate to ",(0,a.kt)("a",{parentName:"li",href:"http://kubea.prometheus.svc/graph"},"http://kubea.prometheus.svc/graph")),(0,a.kt)("li",{parentName:"ol"},"enter ",(0,a.kt)("inlineCode",{parentName:"li"},"reflect_total_connections")),(0,a.kt)("li",{parentName:"ol"},"click Graph (notice I changed my time to '10s', located just under Graph)"),(0,a.kt)("li",{parentName:"ol"},"click Execute"),(0,a.kt)("li",{parentName:"ol"},"Notice there are no connections (0)")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"grpah it",src:n(25296).Z,width:"1050",height:"706"})),(0,a.kt)("h3",{id:"generate-some-data"},"Generate Some Data"),(0,a.kt)("p",null,"Now let's change that graph of ",(0,a.kt)("inlineCode",{parentName:"p"},"reflect_total_connections")," from 0 to 1 (or more). One of the services you will have access to will\nintercept ",(0,a.kt)("inlineCode",{parentName:"p"},"kubeA.reflect.svc.ziti:80"),". "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"[!NOTE]","\nIf you are using Windows and Windows Subsystem for Linux (WSL) as I am, you ",(0,a.kt)("strong",{parentName:"p"},"might")," need to understand how get WSL to use your Ziti\nDesktop Edge for Windows as your DNS resolver when inside WSL. Generally speaking this is as easy as editing /etc/resolv.conf and\nadding the IP as the first nameserver: ",(0,a.kt)("inlineCode",{parentName:"p"},"nameserver 100.64.0.1")," (or whatever the DNS IP is). Try it first, depending on how you setup\nWSL it might 'just work' for you. You can also just use cygwin or any other netcat tool from Windows (not WSL) too.")),(0,a.kt)("p",null,"Now we can use netcat to open a connection through this intercept a few times. The metric tracks the total number of connections to the\nreflect service. Connect, send some text, the use ctrl-c to disconnect. Do that a few times then click 'execute' again on the graph page.\nYou can see I did this over a minute and moved my total count on kubeA to 8, shown below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"/tmp/prometheus$ nc kubeA.reflect.svc.ziti 80\nkubeA reflect test\nyou sent me: kubeA reflect test\n^C\n/tmp/prometheus$ nc kubeA.reflect.svc.ziti 80\nanother reflect test\nyou sent me: another reflect test\n^C\n/tmp/prometheus$ nc kubeA.reflect.svc.ziti 80\nanother reflect test\nyou sent me: another reflect test\n^C\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kubea.more.total.conn.png",src:n(77566).Z,width:"878",height:"784"})),(0,a.kt)("h3",{id:"scrape-something-else"},"Scrape Something Else"),(0,a.kt)("p",null,"Hopefully you agree with me that this is pretty neat. Well what if we take it to the next level? What if we tried to scrape the\nworkload we deployed to ClusterB? Could we get that to work? Recall from above how we enabled the job named 'kubeA.reflectz'. What if we\nsimply copied/pasted that into the configmap changing kubeA --\x3e kubeB. Would it work? Let's see. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"# edit the configmap on ClusterA:\nkubectl edit cm prometheuz-prometheus-server\n\n#add the job - and wait for the configmap to reload\n\n    - job_name: 'kubeB.reflectz'\n      scrape_interval: 5s\n      honor_labels: true\n      scheme: 'ziti'\n      params:\n        'match[]':\n          - '{job!=\"\"}'\n        'ziti-config':\n          - '/etc/prometheus/scrape.json'\n      static_configs:\n        - targets:\n          - 'kubeB.reflect.scrape.svc-kubeB.reflect.id'\n")),(0,a.kt)("p",null,"After watching the logs from ",(0,a.kt)("inlineCode",{parentName:"p"},"configmap-reloadz")," on ClusterA and seeing the webhook trigger. Just go back to the Prometheus server in\nthe browser. You should be at the 'graph' url but if not navigate back and execute another graph for ",(0,a.kt)("inlineCode",{parentName:"p"},"reflect_total_connections"),". When\nwe do that it probably doesn't look much different but... Wait a second? In the legend? Can it be? That's right. From Kubernetes\nClusterA, we have just scraped a workload from Kubernetes ClusterB, entirely over the OpenZiti overlay."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kubeA-and-kubeB.png",src:n(72486).Z,width:"581",height:"73"})),(0,a.kt)("p",null,"Generate some data like you did before by running a few netcat connection/disconnects and click 'Execute' again. Don't forget to send\nthe connection request to kubeB though!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"nc kubeB.reflect.svc.ziti 80\nthis is kubeb\nyou sent me: this is kubeb\n^C\nnc kubeB.reflect.svc.ziti 80\nanother to kube b\nyou sent me: another to kube b\n^C\nnc kubeB.reflect.svc.ziti 80\none more for fun and profit\nyou sent me: one more for fun and profit\n^C\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kubeB from kubeA",src:n(95701).Z,width:"880",height:"946"})),(0,a.kt)("h2",{id:"scraping-all-the-things"},"Scraping All the Things!"),(0,a.kt)("p",null,"By now, you are probably starting to get the idea just how powerful this is for Prometheus. A zitified Prometheus can scrape things\neasily and natively by just deploying a ",(0,a.kt)("inlineCode",{parentName:"p"},"Prometheuz")," instance into the location you want to scrape. Or, you can just enable a scrape\ntarget using a tunneling app, or in Kubernetes using the ",(0,a.kt)("inlineCode",{parentName:"p"},"ziti-host")," helm chart.  Let's complete our vision now and stand up a\nPrometheus server on our local workstation using Docker."),(0,a.kt)("p",null,"When we run ",(0,a.kt)("inlineCode",{parentName:"p"},"Prometheuz")," locally using docker we'll need a config file to give to docker using a volume mount. We also provide the\nidentity used to connect to the OpenZiti overlay in the same fashion. Let's start up a docker container locally and see if we can grab\ndata from our two Prometheus instances using a locally deployed ",(0,a.kt)("inlineCode",{parentName:"p"},"Prometheuz")," via docker."),(0,a.kt)("p",null,"GitHub has a sample Prometheus ",(0,a.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/openziti/ziti-doc/main/docusaurus/blog/zitification/prometheus/scripts/local.prometheus.yml"},"file you can download"),".\nBelow, I used curl to download it and put it into the expected location."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'curl -s https://raw.githubusercontent.com/openziti/ziti-doc/main/docusaurus/blog/zitification/prometheus/scripts/local.prometheus.yml > /tmp/prometheus/prometheus.config.yml\n\nziti edge create identity user local.prometheus.id -o /tmp/prometheus/local.prometheus.id.jwt -a "reflectz-clients","prometheus-clients"\nziti edge enroll /tmp/prometheus/local.prometheus.id.jwt -o /tmp/prometheus/local.prometheus.id.json\n\ndocker run \\\n  -v /tmp/prometheus/local.prometheus.id.json:/etc/prometheus/ziti.id.json \\\n  -v /tmp/prometheus/prometheus.config.yml:/etc/prometheus/prometheus.yml \\\n  -p 9090:9090 \\\n  openziti/prometheuz\n')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"local-docker-targets.png",src:n(46245).Z,width:"458",height:"316"})),(0,a.kt)("p",null,"Look at what we've just done. We have started a Prometheus instance locally, and used it to connect to four Prometheus targets via\nscrape configurations when all four targets are hidden entirely from my local computer (and any computer) unless the computer has an\nOpenZiti identity. I personally think that is incredibly cool!"),(0,a.kt)("h2",{id:"taking-it-to-11"},"Taking it to 11"),(0,a.kt)("p",null,"But wait, I'm not done. That docker instance is listening on an underlay network. It's exposed to attack by anything on my local network.\nI want to fix that too. Let's start this docker container up listening only on the OpenZiti overlay. Just like in ",(0,a.kt)("a",{parentName:"p",href:"/blog/zitification/prometheus/part2"},"part 2"),"\nwe will make a config, a service and two policies to enable identities on the OpenZiti overlay."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'curl -s https://raw.githubusercontent.com/openziti/ziti-doc/main/docusaurus/blog/zitification/prometheus/scripts/local.prometheus.yml > /tmp/prometheus/prometheus.config.yml\n\n# create the config and service for the local prometheus server\nziti edge create config "local.prometheus.svc-intercept.v1" intercept.v1 \\\n  \'{"protocols":["tcp"],"addresses":["local.prometheus.svc"],"portRanges":[{"low":80, "high":80}], "dialOptions": {"identity":"local.prometheus.id"}}\'\n\nziti edge create service "local.prometheus.svc" \\\n  --configs "local.prometheus.svc-intercept.v1"\n\n# grant the prometheus clients the ability to dial the service and the local.prometheus.id the ability to bind\nziti edge create service-policy "local.prometheus.svc.dial" Dial \\\n  --service-roles "@local.prometheus.svc" \\\n  --identity-roles "#prometheus-clients"\nziti edge create service-policy "local.prometheus.svc.bind" Bind \\\n  --service-roles "@local.prometheus.svc" \\\n  --identity-roles "@local.prometheus.id"\n')),(0,a.kt)("p",null,"Once that's done - let's see if we can start the docker container. The helm charts are configured to translate the ",(0,a.kt)("inlineCode",{parentName:"p"},"--set"),' flags\nprovided into "container friendly" settings like environment variables, volumes and mounts etc. In docker we need to provide those. If\nyou\'re familiar with docker these will probably all make sense. The most important part of the command below is the ',(0,a.kt)("strong",{parentName:"p"},"lack")," of a ",(0,a.kt)("inlineCode",{parentName:"p"},"-p"),"\nflag. The ",(0,a.kt)("inlineCode",{parentName:"p"},"-p")," flag is used to expose a port from inside docker, outside docker. Look at the previous docker sample and you'll find we\nwere mapping local underlay port 9090 to port 9090 in the docker container. In this example, ",(0,a.kt)("strong",{parentName:"p"},"we will do no such thing"),"! :)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"docker run \\\n    -e ZITI_LISTENER_SERVICE_NAME=local.prometheus.svc \\\n    -e ZITI_LISTENER_IDENTITY_FILE=/etc/prometheus/ziti.server.json \\\n    -e ZITI_LISTENER_IDENTITY_NAME=local.prometheus.id \\\n    -v /tmp/prometheus/prometheus.config.yml:/etc/prometheus/prometheus.yml \\\n    -v /tmp/prometheus/local.prometheus.id.json:/etc/prometheus/ziti.id.json \\\n    -v /tmp/prometheus/local.prometheus.id.json:/etc/prometheus/ziti.server.json \\\n    openziti/prometheuz\n")),(0,a.kt)("h3",{id:"but---does-it-work"},"But - Does It Work?"),(0,a.kt)("p",null,"After configuring the OpenZiti overlay, we just need to open a browser and navigate to ",(0,a.kt)("a",{parentName:"p",href:"http://local.prometheus.svc/targets"},"http://local.prometheus.svc/targets"),". SUCCESS!"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"local-docker-targets-no-listener.png",src:n(97481).Z,width:"495",height:"405"})),(0,a.kt)("h3",{id:"success"},"SUCCESS!"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"local-docker-graph-no-listener.png",src:n(13397).Z,width:"891",height:"953"})),(0,a.kt)("h2",{id:"wrap-up"},"Wrap Up"),(0,a.kt)("p",null,"This was quite the journey and a lot of fun. We have taken a wildly popular open source project and brought OpenZiti to it with really\nnot much code at all. Then using OpenZiti we were able to give Prometheus superpowers and enable it to scrape any target regardless of\nwhere that target is or what network it is on. "),(0,a.kt)("p",null,"Think of the possibilities here. Are you a cloud provider looking to monitor your client's services which are deployed on-prem? That's\nso easy with OpenZiti and without sacrificing security ",(0,a.kt)("strong",{parentName:"p"},"at all"),". In fact, using OpenZiti like this provides amazing reach while\n",(0,a.kt)("strong",{parentName:"p"},"strengthening")," the security posture of the solution because you're now using the concepts of\n",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Zero_trust_security_model"},"zero trust networking principles")," and applying them to your alerting and\nmonitoring solution."),(0,a.kt)("p",null,"What do you think? Was this series interesting? Do you think OpenZiti is cool and you are looking to try it out? What are you going to\nzitify? Tell us on twitter or on discourse! Both links are included in this page. Let us know what you think! Go star the\n",(0,a.kt)("a",{parentName:"p",href:"http://github.com/openziti/ziti"},"openziti/ziti")," repo and help us spread the word of OpenZiti to the world!"))}u.isMDXComponent=!0},72486:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,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"},95701:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/kubeB-from-kubeA-0f78d64d83a2d8b02e25a72167d20de1.png"},25296:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/kubea.graph-a39d9acca67d92b279c388dfda2fda53.png"},77566:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/kubea.more.total.conn-056a41b592c79bd2b5efc64c4b45efbf.png"},4900:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/kubea.prom.init-4d7855b727621c1778b9a8a6b6d7a25d.png"},12979:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/kubea.target1-8f5a33a23d13709763eeff7c98afecf1.png"},81283:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/kubernetes-prometheus-after-1c432161cd5ceac47eadc4149cae35fb.svg"},13397:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/local-docker-graph-no-listener-bf6c6577b99852b0c9df5935da209c7b.png"},97481:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/local-docker-targets-no-listener-c80c0b90432aa76d510ab4684613c0f2.png"},46245:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/local-docker-targets-8dc1e23a53a77339ddc8926ac5d7327a.png"}}]);