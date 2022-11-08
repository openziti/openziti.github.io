"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[4099],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=i,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4047:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const o={},a="Windows",s={unversionedId:"core-concepts/clients/tunnelers/windows",id:"core-concepts/clients/tunnelers/windows",title:"Windows",description:"Installation",source:"@site/docs/core-concepts/clients/tunnelers/02-windows.md",sourceDirName:"core-concepts/clients/tunnelers",slug:"/core-concepts/clients/tunnelers/windows",permalink:"/docs/core-concepts/clients/tunnelers/windows",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/core-concepts/clients/tunnelers/02-windows.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"rootSidebar",previous:{title:"Tunnelers",permalink:"/docs/core-concepts/clients/tunnelers/"},next:{title:"Android",permalink:"/docs/core-concepts/clients/tunnelers/android"}},l={},c=[{value:"Installation",id:"installation",level:2},{value:"Architecture",id:"architecture",level:2},{value:"The Data Service",id:"the-data-service",level:3},{value:"DNS",id:"dns",level:4},{value:"The Monitor Service",id:"the-monitor-service",level:3},{value:"Automatic Upgrades",id:"automatic-upgrades",level:4},{value:"Diagnostic Information",id:"diagnostic-information",level:4},{value:"The UI",id:"the-ui",level:3},{value:"Logging",id:"logging",level:2},{value:"Source",id:"source",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"windows"},"Windows"),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"The ZDEW has an installer which is available for download from GitHub.\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/openziti/desktop-edge-win/releases/latest"},"Download the latest release here"),".\nThe installer will require administrator privileges to install successfully."),(0,i.kt)("h2",{id:"architecture"},"Architecture"),(0,i.kt)("p",null,"The ZDEW is composed of three main components: the data service, the monitor service, the UI. Communication among\nthese processes is handled through IPC and requires the process to have been started by an interactive login."),(0,i.kt)("h3",{id:"the-data-service"},"The Data Service"),(0,i.kt)("p",null,"The data service is the main workhorse of the ZDEW. It is built around the ",(0,i.kt)("inlineCode",{parentName:"p"},"ziti-tunneler-sdk-c")," (and subsequently the\n",(0,i.kt)("inlineCode",{parentName:"p"},"ziti-sdk-c"),'). It is responsible for creating the "TUN" (virtual network interface) as well as for configuring any\nroutes necessary for IP-based intercepts.'),(0,i.kt)("h4",{id:"dns"},"DNS"),(0,i.kt)("p",null,"The data service also has a DNS server listening at $TUN_IP + 1. For example, if the data service is configured to use\nthe default IP 100.64.0.1, there will be a DNS server listening on 100.64.0.2."),(0,i.kt)("h3",{id:"the-monitor-service"},"The Monitor Service"),(0,i.kt)("p",null,"This component is delivered as a Windows service and is set to automatic, delayed startup. It has two main functions:\nautomatic upgrades and diagnostic information."),(0,i.kt)("h4",{id:"automatic-upgrades"},"Automatic Upgrades"),(0,i.kt)("p",null,"This service will monitor the GitHub releases for new updates. It does this every ten minutes by default but could be\nconfigured if the user wants to change this to be longer. Shorter is not recommended."),(0,i.kt)("h4",{id:"diagnostic-information"},"Diagnostic Information"),(0,i.kt)("p",null,"When the ZDEW runs into problems. The UI has a 'feedback' option in the main menu to generate diagnostic information,\ncollect logs etc. This service performs that work resulting in a zip file saved into the ",(0,i.kt)("inlineCode",{parentName:"p"},"logs")," folder."),(0,i.kt)("h3",{id:"the-ui"},"The UI"),(0,i.kt)("p",null,"The UI is currently a .NET UWP application. It is not necessary for this program to run for the ZDEW to function. It\nis exclusively for users to interact with the data and monitor services."),(0,i.kt)("h2",{id:"logging"},"Logging"),(0,i.kt)("p",null,"Logs for ZDEW are saved relative to the location of the installation. Normally this path will end up being:\n",(0,i.kt)("inlineCode",{parentName:"p"},"C:\\Program Files (x86)\\NetFoundry, Inc\\Ziti Desktop Edge"),". In that directory should be a logs directory."),(0,i.kt)("p",null,"The logs directory has three subdirectories for each of the main components:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"service - the logs for the data service"),(0,i.kt)("li",{parentName:"ul"},"ZitiMonitorService - the logs for the monitor service"),(0,i.kt)("li",{parentName:"ul"},"UI - the logs from the UI")),(0,i.kt)("h2",{id:"source"},"Source"),(0,i.kt)("p",null,"The source for ZDEW is found on GitHub at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/openziti/desktop-edge-win"},"https://github.com/openziti/desktop-edge-win")))}d.isMDXComponent=!0}}]);