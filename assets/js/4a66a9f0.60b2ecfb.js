"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[6527],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},73602:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const o={},a="Building the Ziti C SDK and Sample Apps for arm (BeagleBone)",l={permalink:"/blog/c-sdk-on-beaglebone",source:"@site/blog/c-sdk-on-beaglebone.md",title:"Building the Ziti C SDK and Sample Apps for arm (BeagleBone)",description:"This article walks you through building the Ziti C SDK for Linux-arm and running",date:"2023-10-02T20:29:39.000Z",formattedDate:"October 2, 2023",tags:[],readingTime:5.645,hasTruncateMarker:!1,authors:[],frontMatter:{},prevItem:{title:"Articles",permalink:"/blog/articles"},nextItem:{title:"Bootstrapping Trust",permalink:"/blog/bootstrapping-trust/part-01.encryption-everywhere"}},s={authorsImageUrls:[]},c=[{value:"Configure the Host System",id:"configure-the-host-system",level:2},{value:"Build the SDK and Sample Applications",id:"build-the-sdk-and-sample-applications",level:2},{value:"Set up a Ziti Network",id:"set-up-a-ziti-network",level:2},{value:"Create the &quot;demo-weather&quot; Service",id:"create-the-demo-weather-service",level:3},{value:"Upload the Artifacts to Your BeagleBone",id:"upload-the-artifacts-to-your-beaglebone",level:2},{value:"Run the Application",id:"run-the-application",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This article walks you through building the Ziti C SDK for Linux-arm and running\nthe wttr sample application on a ",(0,i.kt)("a",{parentName:"p",href:"https://beagleboard.org/enhanced"},"BeagleBone SanCloud"),"."),(0,i.kt)("h2",{id:"configure-the-host-system"},"Configure the Host System"),(0,i.kt)("p",null,"This article uses an Ubuntu 19.10 virtual machine as a development host because it's\nrelatively easy to install a functional toolchain that targets arm-linux."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"devbox$ sudo apt-get install gcc-arm-linux-gnueabihf g++-arm-linux-gnueabihf \\\n    binutils-arm-linux-gnueabihf gdb-multiarch cmake git\n")),(0,i.kt)("h2",{id:"build-the-sdk-and-sample-applications"},"Build the SDK and Sample Applications"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"devbox$ git clone --recurse-submodules https://github.com/netfoundry/ziti-sdk-c.git\nCloning into 'ziti-sdk-c'...\nremote: Enumerating objects: 77, done.\nremote: Counting objects: 100% (77/77), done.\nremote: Compressing objects: 100% (50/50), done.\nremote: Total 1287 (delta 35), reused 51 (delta 24), pack-reused 1210\nReceiving objects: 100% (1287/1287), 475.44 KiB | 4.85 MiB/s, done.\n...\n\ndevbox$ cd ziti-sdk-c\ndevbox$ mkdir build-Linux-arm\ndevbox$ cd build-Linux-arm\ndevbox$ cmake -DCMAKE_TOOLCHAIN_FILE=../toolchains/Linux-arm.cmake ..\nproject version: 0.9.2.1 (derived from git)\n-- The C compiler identification is GNU 9.2.1\n-- The CXX compiler identification is GNU 9.2.1\n-- Check for working C compiler: /usr/bin/arm-linux-gnueabihf-gcc\n...\n\n$ make\n[  1%] Building C object deps/uv-mbed/deps/libuv/CMakeFiles/uv_a.dir/src/fs-poll.c.o\n[  1%] Building C object deps/uv-mbed/deps/libuv/CMakeFiles/uv_a.dir/src/idna.c.o\n[  2%] Building C object deps/uv-mbed/deps/libuv/CMakeFiles/uv_a.dir/src/inet.c.o\n[  2%] Building C object deps/uv-mbed/deps/libuv/CMakeFiles/uv_a.dir/src/random.c.o\n...\n[ 99%] Building C object programs/sample_wttr/CMakeFiles/sample_wttr.dir/sample_wttr.c.o\n[ 99%] Linking C executable sample_wttr\n[ 99%] Built target sample_wttr\n[100%] Built target sample-host\n")),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"make")," completes, you'll have statically linked binaries for the SDK's sample applications."),(0,i.kt)("h2",{id:"set-up-a-ziti-network"},"Set up a Ziti Network"),(0,i.kt)("p",null,"For this article we'll use a Ziti Edge Developer Edition to run our network. Follow\nthe ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn/quickstarts/network/"},"Ziti Network Quickstart"),"."),(0,i.kt)("h3",{id:"create-the-demo-weather-service"},'Create the "demo-weather" Service'),(0,i.kt)("p",null,'The sample_wttr application accesses a service named "demo-weather", so we\'ll create\nthat service now. Log in to your Ziti Edge Developer Edition web UI and follow the\nsteps:'),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},'On the left side nav bar, click "Edge Services"'),(0,i.kt)("li",{parentName:"ol"},'In the top right corner of the screen click the "plus" image to add a new service'),(0,i.kt)("li",{parentName:"ol"},'Choose a name for the service. Enter "demo-weather"'),(0,i.kt)("li",{parentName:"ol"},'Choose Router "ziti-gw01"'),(0,i.kt)("li",{parentName:"ol"},"For Endpoint Service choose:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"protocol = tcp"),(0,i.kt)("li",{parentName:"ul"},"host = wttr.in"),(0,i.kt)("li",{parentName:"ul"},"port = 80"))),(0,i.kt)("li",{parentName:"ol"},"Click save")),(0,i.kt)("h2",{id:"upload-the-artifacts-to-your-beaglebone"},"Upload the Artifacts to Your BeagleBone"),(0,i.kt)("p",null,"At this point we have created all of the artifacts that are needed for running the\nsample application:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'The "sample_wttr" executable'),(0,i.kt)("li",{parentName:"ul"},'The Ziti identity json file (e.g. "NewUser.json")')),(0,i.kt)("p",null,"Now we need to upload these artifacts to the BeagleBone. The scp command shown here\nassumes that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You are in the ",(0,i.kt)("inlineCode",{parentName:"li"},"build-Linux-arm")," subdirectory where the ",(0,i.kt)("inlineCode",{parentName:"li"},"make")," command was executed above."),(0,i.kt)("li",{parentName:"ul"},"Your BeagleBone is running sshd and has an IP address of 192.168.2.2 which\ncan be reached from your development host"),(0,i.kt)("li",{parentName:"ul"},"The Ziti identity json file that was created when you followed the Ziti Network Quickstart\nwas downloaded to your ~/Downloads directory.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"devbox$ scp ./programs/sample_wttr/sample_wttr root@192.168.2.2:.\n$ scp ~/Downloads/NewUser.json ./programs/sample_wttr/sample_wttr debian@192.168.2.2:.\nNewUser.json                                  100% 6204     2.5MB/s   00:00\nsample_wttr                                   100% 2434KB   5.4MB/s   00:00\n")),(0,i.kt)("h2",{id:"run-the-application"},"Run the Application"),(0,i.kt)("p",null,"Now we're ready to log into the BeagleBone and run the sample application.\nLet's go!"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ubuntu@beaglebone:~$ ./sample_wttr ./NewUser.json\n[        0.000] INFO    library/ziti.c:173 NF_init(): ZitiSDK version 0.9.2.1-local @de37e6f(wttr-sample-shutdown-cleanup) starting at (2019-09-05T22:35:12.259)\n[        0.000] INFO    library/ziti.c:195 NF_init_with_tls(): ZitiSDK version 0.9.2.1-local @de37e6f(wttr-sample-shutdown-cleanup)\n/home/scarey/repos/github.com/netfoundry/ziti-sdk-c/deps/uv-mbed/src/http.c:315 ERR TLS handshake error \n/home/scarey/repos/github.com/netfoundry/ziti-sdk-c/deps/uv-mbed/src/http.c:153 WARN received -103 (software caused connection abort)\n[        0.210] ERROR   library/ziti.c:433 version_cb(): failed to get controller version from ec2-54-164-120-24.compute-1.amazonaws.com:1280 CONTROLLER_UNAVAILABLE(software caused connection abort)\n[        0.210] WARN    library/ziti_ctrl.c:49 code_to_error(): unmapped error code: CONTROLLER_UNAVAILABLE\n[        0.210] ERROR   library/ziti.c:419 session_cb(): failed to login: CONTROLLER_UNAVAILABLE[-11](software caused connection abort)\nERROR: status => WTF: programming error\nubuntu@beaglebone:~# \n")),(0,i.kt)("p",null,"Oops. Actually The Ziti SDK verifies the certificate from the Ziti Edge Controller,\nso we need to set the clock on the BeagleBone to a time/date that is within the\nvalid range of the certificate. Might as well set the clock to the current time:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ubuntu@beaglebone:~# sudo rdate time.nist.gov\nWed Mar 18 15:46:56 2020\n")),(0,i.kt)("p",null,"And ",(0,i.kt)("em",{parentName:"p"},"now")," we are ready to run the application:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'ubuntu@beaglebone:~$ ./sample_wttr ./NewUser.json\n[        0.000] INFO    library/ziti.c:173 NF_init(): ZitiSDK version 0.9.2.1-local @de37e6f(wttr-sample-shutdown-cleanup) starting at (2020-03-18T15:46:57.536)\n[        0.000] INFO    library/ziti.c:195 NF_init_with_tls(): ZitiSDK version 0.9.2.1-local @de37e6f(wttr-sample-shutdown-cleanup)\n[        0.554] INFO    library/ziti.c:438 version_cb(): connected to controller ec2-54-164-120-24.compute-1.amazonaws.com:1280 version v0.9.0(ea556fc18740 2020-02-11 16:09:08)\n[        0.696] INFO    library/connect.c:180 connect_get_service_cb(): got service[demo-weather] id[cc90410f-1017-4d23-977a-3695cb58f4e8]\n[        0.810] INFO    library/connect.c:209 connect_get_net_session_cb(): got session[d89bfdd8-c7e5-42ff-a39f-63056eeb3a82] for service[demo-weather]\n[        0.810] INFO    library/channel.c:148 ziti_channel_connect(): opening new channel for ingress[tls://ec2-54-164-120-24.compute-1.amazonaws.com:3022] ch[0]\nsending HTTP request\nrequest success: 99 bytes sent\nHTTP/1.1 200 OK\nServer: nginx/1.10.3\nDate: Wed, 18 Mar 2020 15:47:00 GMT\nContent-Type: text/plain; charset=utf-8\nContent-Length: 8662\nConnection: close\n\nWeather report: Rochester\n\n     \\   /     Sunny\n      .-.      39 \xb0F          \n   \u2015 (   ) \u2015   \u2196 0 mph        \n      `-\u2019      9 mi           \n     /   \\     0.0 in         \n                                                       \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510                                                       \n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524  Wed 18 Mar \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502            Morning           \u2502             Noon      \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2518     Evening           \u2502             Night            \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502               Overcast       \u2502               Overcast       \u2502               Cloudy         \u2502               Overcast       \u2502\n\u2502      .--.     32..35 \xb0F      \u2502      .--.     35..41 \xb0F      \u2502      .--.     39..44 \xb0F      \u2502      .--.     37..42 \xb0F      \u2502\n\u2502   .-(    ).   \u2196 3-4 mph      \u2502   .-(    ).   \u2190 6-8 mph      \u2502   .-(    ).   \u2190 9-16 mph     \u2502   .-(    ).   \u2196 9-17 mph     \u2502\n\u2502  (___.__)__)  6 mi           \u2502  (___.__)__)  6 mi           \u2502  (___.__)__)  6 mi           \u2502  (___.__)__)  6 mi           \u2502\n\u2502               0.0 in | 0%    \u2502               0.0 in | 0%    \u2502               0.0 in | 0%    \u2502               0.0 in | 0%    \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                                                       \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510                                                       \n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524  Thu 19 Mar \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502            Morning           \u2502             Noon      \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2518     Evening           \u2502             Night            \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502    \\  /       Partly cloudy  \u2502               Cloudy         \u2502    \\  /       Partly cloudy  \u2502  _`/"".-.     Patchy light d\u2026\u2502\n\u2502  _ /"".-.     41..44 \xb0F      \u2502      .--.     50 \xb0F          \u2502  _ /"".-.     53..55 \xb0F      \u2502   ,\\_(   ).   50..53 \xb0F      \u2502\n\u2502    \\_(   ).   \u2190 4-7 mph      \u2502   .-(    ).   \u2190 4-6 mph      \u2502    \\_(   ).   \u2196 6-11 mph     \u2502    /(___(__)  \u2196 10-19 mph    \u2502\n\u2502    /(___(__)  3 mi           \u2502  (___.__)__)  6 mi           \u2502    /(___(__)  6 mi           \u2502      \u2018 \u2018 \u2018 \u2018  4 mi           \u2502\n\u2502               0.0 in | 0%    \u2502               0.0 in | 0%    \u2502               0.0 in | 0%    \u2502     \u2018 \u2018 \u2018 \u2018   0.0 in | 20%   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                                                       \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510                                                       \n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524  Fri 20 Mar \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502            Morning           \u2502             Noon      \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2518     Evening           \u2502             Night            \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502  _`/"".-.     Light rain sho\u2026\u2502    \\  /       Partly cloudy  \u2502    \\  /       Partly cloudy  \u2502               Cloudy         \u2502\n\u2502   ,\\_(   ).   62 \xb0F          \u2502  _ /"".-.     66 \xb0F          \u2502  _ /"".-.     48..51 \xb0F      \u2502      .--.     46 \xb0F          \u2502\n\u2502    /(___(__)  \u2191 14-27 mph    \u2502    \\_(   ).   \u2197 26-41 mph    \u2502    \\_(   ).   \u2192 24-36 mph    \u2502   .-(    ).   \u2192 22-30 mph    \u2502\n\u2502      \u2018 \u2018 \u2018 \u2018  6 mi           \u2502    /(___(__)  6 mi           \u2502    /(___(__)  6 mi           \u2502  (___.__)__)  6 mi           \u2502\n\u2502     \u2018 \u2018 \u2018 \u2018   0.0 in | 29%   \u2502               0.0 in | 59%   \u2502               0.0 in | 41%   \u2502               0.0 in | 0%    \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\nLocation: Rochester, Monroe County, New York, United States of America [43.157285,-77.6152139]\n\nFollow @igor_chubin for wttr.in updates\nrequest completed: Connection closed\n[        3.714] INFO    library/ziti.c:238 NF_shutdown(): Ziti is shutting down\n========================\n')))}d.isMDXComponent=!0}}]);