"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[6630],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},v=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),v=r,f=d["".concat(c,".").concat(v)]||d[v]||u[v]||o;return n?i.createElement(f,a(a({ref:t},p),{},{components:n})):i.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=v;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:r,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}v.displayName="MDXCreateElement"},89294:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=n(87462),r=(n(67294),n(3905));const o={authors:"dovholuknf"},a="zssh Cheat Sheet",s={permalink:"/blog/zitification/zitifying-ssh/zssh-cheat-sheet",source:"@site/blog/zitification/zitifying-ssh/zssh-cheat-sheet.md",title:"zssh Cheat Sheet",description:"",date:"2023-06-12T13:05:08.000Z",formattedDate:"June 12, 2023",tags:[],readingTime:.99,hasTruncateMarker:!1,authors:[{name:"Clint Dovholuk",title:"OpenZiti Maintainer",url:"https://github.com/dovholuknf",imageURL:"https://avatars.githubusercontent.com/u/46322585?v=4",key:"dovholuknf"}],frontMatter:{authors:"dovholuknf"},prevItem:{title:"Zitifying SSH",permalink:"/blog/zitification/zitifying-ssh"}},c={authorsImageUrls:[void 0]},l=[],p={toc:l};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# establish some variables which are used below\nservice_name=zsshSvc\nclient_identity="${service_name}"Client\nserver_identity="${service_name}"Server\nthe_port=22\n\n# create two identities. one host - one client. Only necessary if you want/need them. Skippable if you\n# already have an identity. provided here to just \'make it easy\' to test/try\nziti edge create identity device "${server_identity}" -a "${service_name}"ServerEndpoints -o "${server_identity}".jwt\nziti edge create identity device "${client_identity}" -a "${service_name}"ClientEndpoints -o "${client_identity}".jwt\n\n# if you want to modify anything, often deleting the configs/services is easier than updating them\n# it\'s easier to delete all the items too - so until you understand exactly how ziti works,\n# make sure you clean them all up before making a change\nziti edge delete config "${service_name}"-host.v1\nziti edge delete config "${service_name}"-client-config\nziti edge delete service "${service_name}"\nziti edge delete service-policy "${service_name}"-binding\nziti edge delete service-policy "${service_name}"-dialing\n\nziti edge create config "${service_name}"-host.v1 host.v1 \'{"protocol":"tcp", "address":"localhost","port":\'"${the_port}"\', "listenOptions": {"bindUsingEdgeIdentity":true}}\'\n# intercept is not needed for zscp/zssh but make it for testing if you like\nziti edge create config "${service_name}"-client-config intercept.v1 \'{"protocols":["tcp"],"addresses":["\'"${service_name}.ziti"\'"], "portRanges":[{"low":\'"${the_port}"\', "high":\'"${the_port}"\'}]}\'\nziti edge create service "${service_name}" --configs "${service_name}"-client-config,"${service_name}"-host.v1\nziti edge create service-policy "${service_name}"-binding Bind --service-roles \'@\'"${service_name}" --identity-roles \'#\'"${service_name}"\'ServerEndpoints\'\nziti edge create service-policy "${service_name}"-dialing Dial --service-roles \'@\'"${service_name}" --identity-roles \'#\'"${service_name}"\'ClientEndpoints\'\n')))}d.isMDXComponent=!0}}]);