"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[4710],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(g,a(a({ref:t},p),{},{components:n})):r.createElement(g,a({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},53737:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={title:"Console Deployment",sidebar_label:"Console"},a=void 0,l={unversionedId:"guides/deployments/docker/console",id:"guides/deployments/docker/console",title:"Console Deployment",description:"This article is about deploying the Ziti console as a standalone Node.js server application in a Docker container.",source:"@site/docs/guides/deployments/20-docker/30-console.mdx",sourceDirName:"guides/deployments/20-docker",slug:"/guides/deployments/docker/console",permalink:"/docs/guides/deployments/docker/console",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/guides/deployments/20-docker/30-console.mdx",tags:[],version:"current",sidebarPosition:30,frontMatter:{title:"Console Deployment",sidebar_label:"Console"},sidebar:"docsSidebar",previous:{title:"Router",permalink:"/docs/guides/deployments/docker/router"},next:{title:"Kubernetes",permalink:"/docs/category/kubernetes"}},s={},c=[{value:"Run the Console in Docker",id:"run-the-console-in-docker",level:2},{value:"Settings",id:"settings",level:2},{value:"Server TLS",id:"server-tls",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This article is about deploying the Ziti console as a standalone Node.js server application in a Docker container."),(0,o.kt)("p",null,"The Ziti console (ZAC) provides a web-based user interface for managing Ziti networks. The console can be built to run as a single-page application that communicates with the Ziti controller via REST requests originating in the browser, or as a standalone Node.js server that initiates REST requests to the Ziti controller on behalf of the user."),(0,o.kt)("p",null,"Alternatively to Docker, clone the Git repository and follow ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openziti/ziti-console?tab=readme-ov-file#readme"},"the steps to run the standalone Node.js web server"),"."),(0,o.kt)("h2",{id:"run-the-console-in-docker"},"Run the Console in Docker"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'docker run --name ziti-console --publish "1408:1408" openziti/zac\n')),(0,o.kt)("h2",{id:"settings"},"Settings"),(0,o.kt)("p",null,"You may pre-populate the URL of the Ziti controller's management API by creating a ",(0,o.kt)("inlineCode",{parentName:"p"},"settings.json")," file. The application looks for this file in the current working directory or a path relative to the working directory specified with the ",(0,o.kt)("inlineCode",{parentName:"p"},"SETTINGS")," environment variable."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'{\n    "edgeControllers": [\n        {\n            "default": true,\n            "name": "Mega Ziti",\n            "url": "https://megaziti.example.com:1280"\n        }\n    ]\n}\n')),(0,o.kt)("p",null,"Link to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openziti/ziti-console/blob/main/projects/ziti-console-lib/src/lib/assets/data/settings.json"},"settings template in the repository"),"."),(0,o.kt)("p",null,"The Docker image's working directory is ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/src/app"),", so the ",(0,o.kt)("inlineCode",{parentName:"p"},"settings.json")," file may be mounted and referenced with the environment variable."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"docker run \\\n    --rm --name ziti-console --publish 1408:1408 \\\n    --volume /tmp/ziti-console-settings.json:/usr/src/ziti/settings.json \\\n    --env SETTINGS=../ziti \\\n        openziti/zac\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-buttonless",metastring:"title=Output",title:"Output"},"Running: server.js node-api\n{\n    edgeControllers: [\n        {\n            default: true,\n            name: 'Mega Ziti',\n            url: 'https://megaziti.example.com:1280'\n        }\n    ]\n}\nZiti Admin Console is now listening on port 1408\n")),(0,o.kt)("h2",{id:"server-tls"},"Server TLS"),(0,o.kt)("p",null,"The console server can be configured to present a TLS server certificate on a configurable TCP port. TLS is enabled when the private key and certificate files exist with the expected filenames in the working directory."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"./server.key")," - private key"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"./server.chain.pem")," - server certificate chain")),(0,o.kt)("p",null,"Configure the TLS port in ",(0,o.kt)("inlineCode",{parentName:"p"},"settings.json")," by setting ",(0,o.kt)("inlineCode",{parentName:"p"},"portTLS")," (default: 8443)."))}d.isMDXComponent=!0}}]);