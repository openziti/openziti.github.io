"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[4252],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),h=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=h(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=h(n),c=o,m=d["".concat(l,".").concat(c)]||d[c]||u[c]||a;return n?i.createElement(m,s(s({ref:t},p),{},{components:n})):i.createElement(m,s({ref:t},p))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,s[1]=r;for(var h=2;h<a;h++)s[h]=n[h];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2990:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>h});var i=n(7462),o=(n(7294),n(3905));const a={authors:"dovholuknf"},s="Zitifying SSH",r={permalink:"/blog/zitification/zitifying-ssh",source:"@site/blog/zitification/zitifying-ssh/index.md",title:"Zitifying SSH",description:'As we learned in the opening post, "zitifying" an application means to embed a Ziti SDK into an application and leverage the power of a Ziti Network to provide secure, truly zero-trust access to your application no matter where in the world that application goes. In this post we are going to see how we have zitified ssh and why. Future posts will expand on this even further by showing how NetFoundry uses zssh to support our customers.',date:"2022-12-06T14:47:43.000Z",formattedDate:"December 6, 2022",tags:[],readingTime:7.885,hasTruncateMarker:!1,authors:[{name:"Clint Dovholuk",title:"OpenZiti Maintainer",url:"https://github.com/dovholuknf",imageURL:"https://avatars.githubusercontent.com/u/46322585?v=4",key:"dovholuknf"}],frontMatter:{authors:"dovholuknf"},prevItem:{title:"`zscp` Cheat Sheet",permalink:"/blog/zitification/zitifying-scp/zscp-cheatsheat"},nextItem:{title:"`zssh` Cheat Sheet",permalink:"/blog/zitification/zitifying-ssh/zssh-cheat-sheet"}},l={authorsImageUrls:[void 0]},h=[{value:"Why SSH?",id:"why-ssh",level:2},{value:"Overview of SSH - notice how port 22 is open to inbound connections:",id:"overview-of-ssh---notice-how-port-22-is-open-to-inbound-connections",level:4},{value:"How It&#39;s Done",id:"how-its-done",level:2},{value:"Overview of ZSSH - notice port 22 is no longer open to inbound connections:",id:"overview-of-zssh---notice-port-22-is-no-longer-open-to-inbound-connections",level:4},{value:"Zssh in Action",id:"zssh-in-action",level:2},{value:"Zssh Flags",id:"zssh-flags",level:2}],p={toc:h};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"As we learned in the ",(0,o.kt)("a",{parentName:"p",href:"/blog/zitification/"},"opening post"),', "zitifying" an application means to embed a Ziti SDK into an application and leverage the power of a ',(0,o.kt)("a",{parentName:"p",href:"/docs/introduction/intro#overview-of-a-ziti-network"},"Ziti Network")," to provide secure, truly zero-trust access to your application no matter where in the world that application goes. In this post we are going to see how we have zitified ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh")," and why. Future posts will expand on this even further by showing how NetFoundry uses ",(0,o.kt)("inlineCode",{parentName:"p"},"zssh")," to support our customers."),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/WyZ8GRvtgGs",title:"YouTube video player",allow:"autoplay; picture-in-picture",allowfullscreen:!0}),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"why-ssh"},"Why SSH?"),(0,o.kt)("p",null,"As I sit here typing these words, I can tell you're skeptical. I can tell you're wondering why in the world we would even attempt to mess with ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh")," at all. After all, ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh")," has been a foundation of the administration of not only home networks but also corporate networks and the internet itself. Surely if millions (billions?) of computers can interact every day safely and securely using ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh"),' there is "no need" for us to be spending time zitifying ',(0,o.kt)("inlineCode",{parentName:"p"},"ssh")," right? (Spoiler alert: wrong)"),(0,o.kt)("p",null,"I'm sure you've guessed that this is not the case whatsoever. After all, attackers don't leave ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh")," alone just because it's not worth it to try! Put a machine on the open internet, expose ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh")," on port 22 and watch for yourself all the attempts to access ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh")," using known default/weak/bad passwords flood in. Attacks don't only come from the internet either! Attacks from a single compromised machine on your network very well could behave in the same way as an outside attacker. This is particularly true for ransomware-style attacks as the compromised machine attempts to expand/multiply. The problems don't just stop here either. DoS attacks, other zero-day type bugs and more are all waiting for any service sitting on the open internet."),(0,o.kt)("p",null,"A zitified ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh")," client is superior since the port used by ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh")," can be eliminated from the internet-based firewall preventing any connections whatsoever from any network client. In this configuration the ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh"),' process is effectively "\ndark". The only way to ',(0,o.kt)("inlineCode",{parentName:"p"},"ssh")," to a machine configured in this way is to have an identity authorized for that ",(0,o.kt)("a",{parentName:"p",href:"/docs/introduction/intro#overview-of-a-ziti-network"},"Ziti Network"),"."),(0,o.kt)("p",null,"It doesn't stop there though. A Ziti Network mandates the use of a strong identity. You cannot access any services defined in a ",(0,o.kt)("a",{parentName:"p",href:"/docs/introduction/intro#overview-of-a-ziti-network"},"Ziti Network")," without having gone through the enrollment process to create a strong identity used for bidirectional authentication and authorization. With Ziti, you can't even connect to SSH without first being authorized to connect to the remote SSH server."),(0,o.kt)("p",null,"Contrast that to SSH. With SSH you need access the sshd port before starting the authentication process. This requires the port to be exposed to the network, exposing it to attack. With SSH you are also usually allowed to authenticate without providing a strong identity using a username and password. Even if you are choosing to use the more secure pub/private key authentication for SSH, the remote machine still needed the public key added to the authorized_keys file before allowing connections to it via SSH. This is all-too-often a step which a human will do, making the process of authorizing a user or revoking access relatively cumbersome. Ziti provides a secure, centralized location to manage authorization of users to services. Ziti makes it trivial to grant or revoke access to a given set of services to users immediately."),(0,o.kt)("p",null,"Lastly, Ziti provides support for continual authorization through the use of policy checks. These policy checks run continuously. If a user suddenly fails to meet a particular policy, access to the services provided via the ",(0,o.kt)("a",{parentName:"p",href:"/docs/introduction/intro#overview-of-a-ziti-network"},"Ziti Network")," are revoked immediately."),(0,o.kt)("p",null,"Cool right? Let's see how we did it and how you can do the same thing using a ",(0,o.kt)("a",{parentName:"p",href:"/docs/introduction/intro#overview-of-a-ziti-network"},"Ziti Network"),"."),(0,o.kt)("h4",{id:"overview-of-ssh---notice-how-port-22-is-open-to-inbound-connections"},"Overview of SSH - notice how port 22 is open to inbound connections:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ssh-overview.svg",src:n(9713).Z,width:"723",height:"249"})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"how-its-done"},"How It's Done"),(0,o.kt)("p",null,"There are a few steps necessary before being able to use ",(0,o.kt)("inlineCode",{parentName:"p"},"zssh"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Establish a ",(0,o.kt)("a",{parentName:"li",href:"/docs/quickstarts/network/hosted"},"Ziti Network")),(0,o.kt)("li",{parentName:"ul"},"Create and enroll two Ziti Endpoints (one for our ",(0,o.kt)("inlineCode",{parentName:"li"},"ssh")," server, one for the client)",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"the ",(0,o.kt)("inlineCode",{parentName:"li"},"sshd")," server will run ",(0,o.kt)("inlineCode",{parentName:"li"},"ziti-tunnel")," for this demonstration. Conveniently it will run on the same machine I used to setup the ",(0,o.kt)("a",{parentName:"li",href:"/docs/introduction/intro#overview-of-a-ziti-network"},"Ziti Network"),"."),(0,o.kt)("li",{parentName:"ul"},"the client will run ",(0,o.kt)("inlineCode",{parentName:"li"},"zssh")," from my local machine, and I'll ",(0,o.kt)("inlineCode",{parentName:"li"},"zssh")," to the other endpoint"))),(0,o.kt)("li",{parentName:"ul"},"Create the ",(0,o.kt)("a",{parentName:"li",href:"/docs/core-concepts/services/overview"},"Ziti Service")," we'll use and authorize the two endpoints to use this service"),(0,o.kt)("li",{parentName:"ul"},"Use the ",(0,o.kt)("inlineCode",{parentName:"li"},"zssh")," binary from the client side and the ",(0,o.kt)("inlineCode",{parentName:"li"},"ziti-tunnel")," binary from the serving side to connect"),(0,o.kt)("li",{parentName:"ul"},"Harden ",(0,o.kt)("inlineCode",{parentName:"li"},"sshd")," further by removing port 22 from any internet-based firewall configuration (for example, from within the security-groups wizard in AWS) or by forcing ",(0,o.kt)("inlineCode",{parentName:"li"},"sshd")," to only listen on ",(0,o.kt)("inlineCode",{parentName:"li"},"localhost/127.0.0.1"))),(0,o.kt)("h4",{id:"overview-of-zssh---notice-port-22-is-no-longer-open-to-inbound-connections"},"Overview of ZSSH - notice port 22 is no longer open to inbound connections:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"zssh-overview.svg",src:n(4999).Z,width:"723",height:"249"})),(0,o.kt)("p",null,"After performing these steps you'll have an ",(0,o.kt)("inlineCode",{parentName:"p"},"sshd")," server that is dark to the internet. Accessing the server via ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh"),"\nmust now occur using the Ziti Network. Since the service is no longer accessible directly through a network, it is no longer susceptible to the types of attacks mentioned previously!"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"zssh-in-action"},"Zssh in Action"),(0,o.kt)("p",null,"Once the prerequisites are satisfied, we can see ",(0,o.kt)("inlineCode",{parentName:"p"},"zssh")," in action. Simply download the binary for your platform:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/openziti-incubator/zssh/releases/latest/download/zssh-linux-amd64"},"linux")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/openziti-incubator/zssh/releases/latest/download/zssh-windows-amd64.exe"},"windows")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/openziti-incubator/zssh/releases/latest/download/zssh-macos-amd64"},"MacOs"))),(0,o.kt)("p",null,"Once you have the executable download, make sure it is named ",(0,o.kt)("inlineCode",{parentName:"p"},"zssh")," and for simplicity's sake we'll assume it's on the path. A goal for ",(0,o.kt)("inlineCode",{parentName:"p"},"zssh")," is to make the usage of the command very similar to the usage of ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh"),". Anyone familiar with ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh")," should be able to pick up ",(0,o.kt)("inlineCode",{parentName:"p"},"zssh")," easily. As with most tooling, executing the binary with no arguments will display the expected usage. The general format when using ",(0,o.kt)("inlineCode",{parentName:"p"},"zssh")," will be similar to that of ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"zssh <remoteUsername>@<targetIdentity>")),(0,o.kt)("p",null,"Below you can see me ",(0,o.kt)("inlineCode",{parentName:"p"},"zssh")," from my local machine to the AWS machine secured by ",(0,o.kt)("inlineCode",{parentName:"p"},"ziti-tunnel"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./zssh ubuntu@ziti-tunnel-aws\nINFO[0000] connection to edge router using token 95c45123-9415-49d6-930a-275ada9ae06f\nconnected.\nubuntu@ip-172-31-27-154:~$\n")),(0,o.kt)("p",null,"It really was that simple! Now let's break down the current flags for ",(0,o.kt)("inlineCode",{parentName:"p"},"zssh")," and exactly how this worked."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"zssh-flags"},"Zssh Flags"),(0,o.kt)("p",null,"We know that ",(0,o.kt)("inlineCode",{parentName:"p"},"zssh")," requires access to a ",(0,o.kt)("a",{parentName:"p",href:"/docs/introduction/intro#overview-of-a-ziti-network"},"Ziti Network")," but it is not clear from the example above is where ",(0,o.kt)("inlineCode",{parentName:"p"},"zzsh"),"\nfound the credentials required to access the network. ",(0,o.kt)("inlineCode",{parentName:"p"},"zssh")," supports three basic flags:"),(0,o.kt)("p",null,'-i, --SshKeyPath string Path to ssh key. default: $HOME/.ssh/id_rsa -c, --ZConfig string Path to ziti config file. default: $HOME/.ziti/zssh.json -d, --debug pass to enable additional debug information -h, --help help for this command -s, --service string service name. default: zssh (default "zssh")'),(0,o.kt)("p",null,"What you see above is exactly the output ",(0,o.kt)("inlineCode",{parentName:"p"},"zssh")," provides should you pass the ",(0,o.kt)("inlineCode",{parentName:"p"},"-h/--help")," flag or execute ",(0,o.kt)("inlineCode",{parentName:"p"},"zssh")," without any parameters. The ",(0,o.kt)("inlineCode",{parentName:"p"},"-i/--SshKeyPath")," flag is congruent to the ",(0,o.kt)("inlineCode",{parentName:"p"},"-i")," flag for ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh"),". You would use it to supply your key to the ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh")," client. Under the hood of ",(0,o.kt)("inlineCode",{parentName:"p"},"zssh")," is a full-fledged ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh")," client that works similarly to how ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh")," does. If your ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.ssh/id_rsa")," file is in the ",(0,o.kt)("inlineCode",{parentName:"p"},"authorized_keys")," of the remote machine, then you won't need to specify the ",(0,o.kt)("inlineCode",{parentName:"p"},"-i/"),"\nflag (as I didn't in my example). Using ",(0,o.kt)("inlineCode",{parentName:"p"},"zssh")," requires the use of a public/private key in order for the ",(0,o.kt)("inlineCode",{parentName:"p"},"zssh")," client to connect to the remote machine."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"-c/--ZConfig")," flag controls access to the network. A configuration file must be supplied to use ",(0,o.kt)("inlineCode",{parentName:"p"},"zssh")," but does not need to be supplied as part of the command. By default, ",(0,o.kt)("inlineCode",{parentName:"p"},"zssh")," will look at your home directory in a folder named ",(0,o.kt)("inlineCode",{parentName:"p"},".ziti")," for a file named ",(0,o.kt)("inlineCode",{parentName:"p"},"zssh.json"),". In bash this is would be the equivalent of ",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME"),". In Windows this is the equivalent the environment variable named ",(0,o.kt)("inlineCode",{parentName:"p"},"USERPROFILE"),". You do not need to supply this flag if a file exists at the default location. You can specify this flag to use ",(0,o.kt)("inlineCode",{parentName:"p"},"zssh")," with other networks."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"-s/--service"),' flag is for passing in a different service name other than "zssh". By defualt, the service name will be "zssh", but if you would like to access a different service use the ',(0,o.kt)("inlineCode",{parentName:"p"},"-s")," flag followed by the service name."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"-d/--debug")," flag outputs additional information to assist you with debugging. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./zssh ubuntu@ziti-tunnel-aws -d\nINFO[0000]     sshKeyPath set to: /home/myUser/.ssh/id_rsa\nINFO[0000]        ZConfig set to: /home/myUser/.ziti/zssh.json\nINFO[0000]       username set to: ubuntu\nINFO[0000] targetIdentity set to: ziti-tunnel-aws\nINFO[0000] connection to edge router using token 95c45123-a234-412e-8997-96139fbd1938\nconnected.\nubuntu@ip-172-31-27-154:~$\n")),(0,o.kt)("p",null,"Shown above is also one additional piece of information, the remote username. Shown in the example above I have ",(0,o.kt)("inlineCode",{parentName:"p"},"zssh"),"ed to an ubuntu image in AWS. When it was provisioned AWS used the username ",(0,o.kt)("inlineCode",{parentName:"p"},"ubuntu"),". In order to ",(0,o.kt)("inlineCode",{parentName:"p"},"zssh")," to this machine I need to tell the remote ",(0,o.kt)("inlineCode",{parentName:"p"},"sshd")," server that I wish to attach as the ",(0,o.kt)("inlineCode",{parentName:"p"},"ubuntu")," user. If your username is the same for your local environment as the remote machine you do not need to specify the username. For example, my local username is ",(0,o.kt)("inlineCode",{parentName:"p"},"cd")," (my initials). When I ",(0,o.kt)("inlineCode",{parentName:"p"},"zssh")," to my dev machine I can simply use ",(0,o.kt)("inlineCode",{parentName:"p"},"zssh ClintLinux"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./zssh ClintLinux\nINFO[0000] connection to edge router using token 909dfb4f-fa83-4f73-af8e-ed251bcd30be\nconnected.\ncd@clint-linux-vm ~\n")),(0,o.kt)("p",null,"Hopefully this post has been helpful and insightful. Zitifying an application is ",(0,o.kt)("em",{parentName:"p"},"POWERFUL"),"!!!!"),(0,o.kt)("p",null,"The next post in this series will cover how we extended the same code we used for ",(0,o.kt)("inlineCode",{parentName:"p"},"zssh")," and ",(0,o.kt)("a",{parentName:"p",href:"/blog/zitification/zitifying-scp/"},"zitified scp"),"."),(0,o.kt)("p",null,"Have a look at the code over at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openziti-incubator/zssh/tree/main/zssh/zssh"},"GitHub")))}u.isMDXComponent=!0},9713:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/ssh-overview-45937eb23dc9f3295bd27452dda3b660.svg"},4999:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/zssh-overview-e793e9a4cdc8275a8375ff45d73d44c3.svg"}}]);