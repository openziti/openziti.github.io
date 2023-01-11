"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[4098],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?i.createElement(h,o(o({ref:t},c),{},{components:n})):i.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},86939:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const r={authors:"dovholuknf"},o="Zitifying SCP",l={permalink:"/blog/zitification/zitifying-scp",source:"@site/blog/zitification/zitifying-scp/index.md",title:"Zitifying SCP",description:"In the previous post we talked about how we could take a well-known application and improve its security by zitifying it, producing zssh. The logical next step after zitifying ssh would be to extend the functionality of zssh to cover moving files securely as well, enter zscp. A zitified scp effectively creates a more secure command line tool for sending and receiving files between ziti-empowered devices. Once zitified, we can use zscp using ziti identity names just like we did in zitifying ssh. I recommend reading the previous article) if you haven't to learn more about the benefits of zitifying tools like ssh and scp.",date:"2023-01-11T22:45:24.000Z",formattedDate:"January 11, 2023",tags:[],readingTime:4.99,hasTruncateMarker:!1,authors:[{name:"Clint Dovholuk",title:"OpenZiti Maintainer",url:"https://github.com/dovholuknf",imageURL:"https://avatars.githubusercontent.com/u/46322585?v=4",key:"dovholuknf"}],frontMatter:{authors:"dovholuknf"},prevItem:{title:"Scraping Anything, Anywhere in Action",permalink:"/blog/zitification/prometheus/part3"},nextItem:{title:"`zscp` Cheat Sheet",permalink:"/blog/zitification/zitifying-scp/zscp-cheatsheat"}},s={authorsImageUrls:[void 0]},p=[{value:"First Things First",id:"first-things-first",level:2},{value:"Sending and Receiving Files with Zscp",id:"sending-and-receiving-files-with-zscp",level:2},{value:"Zscp Flags",id:"zscp-flags",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In the ",(0,a.kt)("a",{parentName:"p",href:"/blog/zitification/zitifying-ssh/"},"previous post")," we talked about how we could take a well-known application and improve its security by zitifying it, producing ",(0,a.kt)("inlineCode",{parentName:"p"},"zssh"),". The logical next step after zitifying ",(0,a.kt)("inlineCode",{parentName:"p"},"ssh")," would be to extend the functionality of ",(0,a.kt)("inlineCode",{parentName:"p"},"zssh")," to cover moving files securely as well, enter ",(0,a.kt)("inlineCode",{parentName:"p"},"zscp"),". A zitified ",(0,a.kt)("inlineCode",{parentName:"p"},"scp")," effectively creates a more secure command line tool for sending and receiving files between ziti-empowered devices. Once zitified, we can use ",(0,a.kt)("inlineCode",{parentName:"p"},"zscp")," using ziti identity names just like we did in ",(0,a.kt)("a",{parentName:"p",href:"/blog/zitification/zitifying-ssh/"},"zitifying ssh"),". I recommend reading the ",(0,a.kt)("a",{parentName:"p",href:"/blog/zitification/zitifying-ssh/"},"previous article"),") if you haven't to learn more about the benefits of zitifying tools like ",(0,a.kt)("inlineCode",{parentName:"p"},"ssh")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"scp"),"."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"first-things-first"},"First Things First"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"zscp")," functions with the same prerequisites as ",(0,a.kt)("inlineCode",{parentName:"p"},"zssh"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Establish a ",(0,a.kt)("a",{parentName:"li",href:"/docs/learn/quickstarts/network/hosted"},"Ziti Network")),(0,a.kt)("li",{parentName:"ul"},"Create and enroll two Ziti Endpoints (one for our ",(0,a.kt)("inlineCode",{parentName:"li"},"ssh")," server, one for the client)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"the ",(0,a.kt)("inlineCode",{parentName:"li"},"sshd")," server will run ",(0,a.kt)("inlineCode",{parentName:"li"},"ziti-tunnel")," for this demonstration. Conveniently it will run on the same machine I used to setup the ",(0,a.kt)("a",{parentName:"li",href:"/docs/learn/introduction/"},"Ziti Network"),"."),(0,a.kt)("li",{parentName:"ul"},"the client, in this case, is my local machine and I'll ",(0,a.kt)("inlineCode",{parentName:"li"},"zscp")," files both to and from both the remote machine."))),(0,a.kt)("li",{parentName:"ul"},"Create the ",(0,a.kt)("a",{parentName:"li",href:"/docs/learn/core-concepts/services/overview"},"Ziti Service")," we'll use and authorize the two endpoints to use this service"),(0,a.kt)("li",{parentName:"ul"},"Use the ",(0,a.kt)("inlineCode",{parentName:"li"},"zscp")," binary from the client side and the ",(0,a.kt)("inlineCode",{parentName:"li"},"ziti-tunnel")," binary from the serving side to connect"),(0,a.kt)("li",{parentName:"ul"},"Harden ",(0,a.kt)("inlineCode",{parentName:"li"},"sshd")," further by removing port 22 from any internet-based firewall configuration (for example, from within the security-groups wizard in AWS) or by forcing ",(0,a.kt)("inlineCode",{parentName:"li"},"sshd")," to only listen on ",(0,a.kt)("inlineCode",{parentName:"li"},"localhost/127.0.0.1"))),(0,a.kt)("p",null,"After ensuring these steps are complete, you will have the ability to copy files across your Ziti Network. The traffic will be even more secure since now a Ziti Network is required for the connection, requiring that strong identity before even being able to access the ",(0,a.kt)("inlineCode",{parentName:"p"},"sshd")," server. And of course now ",(0,a.kt)("inlineCode",{parentName:"p"},"sshd")," is 'dark' - it no longer needs the typical port 22 to be exposed to any network."),(0,a.kt)("p",null,"Given all the prerequisites are satisfied, we can put ",(0,a.kt)("inlineCode",{parentName:"p"},"zscp")," to use. Simply download the binary for your platform:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/openziti-incubator/zssh/releases/latest/download/zscp-linux-amd64"},"linux")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/openziti-incubator/zssh/releases/latest/download/zscp-windows-amd64.exe"},"windows")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/openziti-incubator/zssh/releases/latest/download/zscp-macos-amd64"},"MacOs"))),(0,a.kt)("span",null),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"sending-and-receiving-files-with-zscp"},"Sending and Receiving Files with Zscp"),(0,a.kt)("p",null,"Once you have the executable downloaded, make sure it is named ",(0,a.kt)("inlineCode",{parentName:"p"},"zscp")," and for simplicity's sake we'll assume it's on the path. Just like ",(0,a.kt)("inlineCode",{parentName:"p"},"zssh")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"ssh"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"zscp")," provides the same basic functionality as ",(0,a.kt)("inlineCode",{parentName:"p"},"scp"),". As with most tooling, executing the binary with no arguments will display the expected usage."),(0,a.kt)("p",null,"There are two main functions of ",(0,a.kt)("inlineCode",{parentName:"p"},"zscp"),". Just like ",(0,a.kt)("inlineCode",{parentName:"p"},"scp")," you can send and receive from the remote host."),(0,a.kt)("p",null,"To send files we use this basic syntax:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./zscp LOCAL_FILEPATHS... <REMOTE_USERNAME>@TARGET_IDENTITY:REMOTE_FILEPATH\n")),(0,a.kt)("p",null,"Then, to retrieve remote files we use a similar syntax:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./zscp <REMOTE_USERNAME>@TARGET_IDENTITY:REMOTE_FILEPATH LOCAL_FILEPATH\n")),(0,a.kt)("p",null,"Below is a working example of using ",(0,a.kt)("inlineCode",{parentName:"p"},"zscp")," to send a file to a remote machine. In this case the remote username is not the same as my local username. Just like with ",(0,a.kt)("inlineCode",{parentName:"p"},"scp"),", I'll need to supply the username in my command and it will use the same syntax that regular ",(0,a.kt)("inlineCode",{parentName:"p"},"scp")," uses. Here I am ",(0,a.kt)("inlineCode",{parentName:"p"},"zscp'ing")," as username ",(0,a.kt)("inlineCode",{parentName:"p"},"ubuntu")," to the remote computer that is joined to the Ziti Network using the identity named ",(0,a.kt)("inlineCode",{parentName:"p"},"ziti-tunnel-aws"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./zscp local/1.txt ubuntu@ziti-tunnel-aws:remote\nINFO    connection to edge router using token 6c2e8b79-ce8e-483e-a9f8-a930530e706a\nINFO    sent file: /Users/name/local/1.txt ==> /home/ubuntu/remote/1.txt\n")),(0,a.kt)("p",null,"This is only a basic example on how we can use ",(0,a.kt)("inlineCode",{parentName:"p"},"zscp")," to send a singular file to a remote computer. In the next section, we will go over how to use ",(0,a.kt)("inlineCode",{parentName:"p"},"zscp")," flags for extended functionality."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"zscp-flags"},"Zscp Flags"),(0,a.kt)("p",null,"Just like ",(0,a.kt)("inlineCode",{parentName:"p"},"zssh"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"zscp")," has the same flags to pass in: ssh key, ziti configuration file, service name, and one to toggle debug logging. All the defaults are the same as with ",(0,a.kt)("inlineCode",{parentName:"p"},"zssh"),", thus both ",(0,a.kt)("inlineCode",{parentName:"p"},"zscp")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"zssh")," will work without the ",(0,a.kt)("inlineCode",{parentName:"p"},"-i")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"-c")," flag providing the files exist at the default locations. Refer to ","[","zitifying-ssh","]","[","2","]"," for instructions on how to use the flags below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'    -i, --SshKeyPath string   Path to ssh key. default: $HOME/.ssh/id_rsa\n    -c, --ZConfig string      Path to ziti config file. default: $HOME/.ziti/zssh.json\n    -d, --debug               pass to enable additional debug information\n    -s, --service string      service name. (default "zssh")\n')),(0,a.kt)("p",null,"In addition to the flags above, ",(0,a.kt)("inlineCode",{parentName:"p"},"zscp")," has a flag to enable recursive copying:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"    -r, --recursive           pass to enable recursive file transfer\n")),(0,a.kt)("p",null,"To use the recursive flag, you must input a directory into the ",(0,a.kt)("inlineCode",{parentName:"p"},"LOCAL_FILEPATH")," argument. Just like ",(0,a.kt)("inlineCode",{parentName:"p"},"scp"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"zscp")," will copy all file contents under the provided directory. You can see below how we can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"-r")," flag to send all contents of ",(0,a.kt)("inlineCode",{parentName:"p"},"big_directory"),"."),(0,a.kt)("p",null,"Contents of ",(0,a.kt)("inlineCode",{parentName:"p"},"big_directory")," on local computer:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"tree local\nlocal\n\u2514\u2500\u2500 big_directory\n    \u251c\u2500\u2500 1.txt\n    \u251c\u2500\u2500 2.txt\n    \u251c\u2500\u2500 3.txt\n    \u251c\u2500\u2500 small_directory1\n    \u2502   \u2514\u2500\u2500 4.txt\n    \u251c\u2500\u2500 small_directory2\n    \u2502   \u2514\u2500\u2500 5.txt\n    \u2514\u2500\u2500 small_directory3\n        \u2514\u2500\u2500 6.txt\n")),(0,a.kt)("p",null,"Here is the command and output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ zscp -r big_directory ubuntu@ziti-tunnel-aws:remote\nINFO    connection to edge router using token d6c268ee-e4f5-4836-bd38-2fc1558257aa\nINFO    sent file: /Users/name/local/big_directory/1.txt ==> /home/ubuntu/remote/big_directory/1.txt\nINFO    sent file: /Users/name/local/big_directory/2.txt ==> /home/ubuntu/remote/big_directory/2.txt\nINFO    sent file: /Users/name/local/big_directory/3.txt ==> /home/ubuntu/remote/big_directory/3.txt\nINFO    sent file: /Users/name/local/big_directory/small_directory1/4.txt ==> /home/ubuntu/remote/big_directory/small_directory1/4.txt\nINFO    sent file: /Users/name/local/big_directory/small_directory2/5.txt ==> /home/ubuntu/remote/big_directory/small_directory2/5.txt\nINFO    sent file: /Users/name/local/big_directory/small_directory3/6.txt ==> /home/ubuntu/remote/big_directory/small_directory3/6.txt\n")),(0,a.kt)("p",null,"After ",(0,a.kt)("inlineCode",{parentName:"p"},"zssh'ing")," to the remote machine, we can prove that all files have been transferred to remote device:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ubuntu@IP:~$ tree remote/\nremote/\n\u2514\u2500\u2500 big_directory\n    \u251c\u2500\u2500 1.txt\n    \u251c\u2500\u2500 2.txt\n    \u251c\u2500\u2500 3.txt\n    \u251c\u2500\u2500 small_directory1\n    \u2502   \u2514\u2500\u2500 4.txt\n    \u251c\u2500\u2500 small_directory2\n    \u2502   \u2514\u2500\u2500 5.txt\n    \u2514\u2500\u2500 small_directory3\n        \u2514\u2500\u2500 6.txt\n")),(0,a.kt)("p",null,"Recursive copying also works to retrieve all contents of a directory on the remote machine."),(0,a.kt)("hr",null),(0,a.kt)("p",null,"I hope this post has helped you get familiar with another ziti-empowered developer's tool and hopefully it's becoming more clear why zitifying your application will make it more resilient to attack and make the act of connecting to remote services trivial."),(0,a.kt)("p",null,"Have a look at the code over at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openziti-incubator/zssh/tree/main/zssh/zscp"},"GitHub")," or continue reading on to the next zitification - ",(0,a.kt)("a",{parentName:"p",href:"/blog/zitification/kubernetes/"},"kubectl"),"!"))}u.isMDXComponent=!0}}]);