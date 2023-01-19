"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[9391],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>v});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),l=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=r,v=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return n?i.createElement(v,a(a({ref:t},p),{},{components:n})):i.createElement(v,a({ref:t},p))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:r,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},87786:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var i=n(87462),r=(n(67294),n(3905));const o={authors:"dovholuknf"},a="`zscp` Cheat Sheet",c={permalink:"/blog/zitification/zitifying-scp/zscp-cheatsheat",source:"@site/blog/zitification/zitifying-scp/zscp-cheatsheat.md",title:"`zscp` Cheat Sheet",description:"",date:"2023-01-19T16:57:29.000Z",formattedDate:"January 19, 2023",tags:[],readingTime:.985,hasTruncateMarker:!1,authors:[{name:"Clint Dovholuk",title:"OpenZiti Maintainer",url:"https://github.com/dovholuknf",imageURL:"https://avatars.githubusercontent.com/u/46322585?v=4",key:"dovholuknf"}],frontMatter:{authors:"dovholuknf"},prevItem:{title:"Zitifying SCP",permalink:"/blog/zitification/zitifying-scp"},nextItem:{title:"Zitifying SSH",permalink:"/blog/zitification/zitifying-ssh"}},s={authorsImageUrls:[void 0]},l=[],p={toc:l};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# establish some variables which are used below\nservice_name=zscpSvc\nclient_identity="${service_name}"Client\nserver_identity="${service_name}"Server\nthe_port=22\n\n# create two identities. one host - one client. Only necessary if you want/need them. Skippable if you\n# already have an identity. provided here to just \'make it easy\' to test/try\nziti edge create identity device "${server_identity}" -a "${service_name}"ServerEndpoints -o "${server_identity}".jwt\nziti edge create identity device "${client_identity}" -a "${service_name}"ClientEndpoints -o "${client_identity}".jwt\n\n# if you want to modify anything, often deleting the configs/services is easier than updating them\n# it\'s easier to delete all the items too - so until you understand exactly how ziti works, \n# make sure you clean them all up before making a change\nziti edge delete config "${service_name}"-host.v1\nziti edge delete config "${service_name}"-client-config\nziti edge delete service "${service_name}"\nziti edge delete service-policy "${service_name}"-binding\nziti edge delete service-policy "${service_name}"-dialing\n\nziti edge create config "${service_name}"-host.v1 host.v1 \'{"protocol":"tcp", "address":"localhost","port":\'"${the_port}"\', "listenOptions": {"bindUsingEdgeIdentity":true}}\'# intercept is not needed for zscp/zssh but make it for testing if you like\nziti edge create config "${service_name}"-client-config intercept.v1 \'{"protocols":["tcp"],"addresses":["\'"${service_name}.ziti"\'"], "portRanges":[{"low":\'"${the_port}"\', "high":"\'${the_port}"\'}]}\'\nziti edge create service "${service_name}" --configs "${service_name}"-client-config,"${service_name}"-host.v1\nziti edge create service-policy "${service_name}"-binding Bind --service-roles \'@\'"${service_name}" --identity-roles \'#\'"${service_name}"\'ServerEndpoints\'\nziti edge create service-policy "${service_name}"-dialing Dial --service-roles \'@\'"${service_name}" --identity-roles \'#\'"${service_name}"\'ClientEndpoints\'\n\n')))}d.isMDXComponent=!0}}]);