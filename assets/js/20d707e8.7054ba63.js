"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[83],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),p=i,m=d["".concat(c,".").concat(p)]||d[p]||h[p]||a;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},67464:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(87462),i=(r(67294),r(3905));const a={hide_table_of_contents:!0},o="Circuit Create Error Codes",l={unversionedId:"guides/troubleshooting/circuit-create-error-codes",id:"guides/troubleshooting/circuit-create-error-codes",title:"Circuit Create Error Codes",description:"The most fundamental action of a working OpenZiti instance is the dialing of services to create connections and pass data.  This action crosses a few borders, but the central process is the creation of a fabric circuit to carry the traffic between the initiating Edge node (SDK embedded application, client, tunneler, etc.) and the terminating Edge node.  When this process fails, it is important to understand why it failed, to properly troubleshoot the issue.  Below is a table of the various cause codes emitted by the OpenZiti Controller, and a brief description of the context of the error.",source:"@site/docs/guides/troubleshooting/20-circuit-create-error-codes.md",sourceDirName:"guides/troubleshooting",slug:"/guides/troubleshooting/circuit-create-error-codes",permalink:"/docs/guides/troubleshooting/circuit-create-error-codes",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/guides/troubleshooting/20-circuit-create-error-codes.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{hide_table_of_contents:!0},sidebar:"docsSidebar",previous:{title:"Agent",permalink:"/docs/guides/troubleshooting/agent"},next:{title:"PKI Troubleshooting",permalink:"/docs/guides/troubleshooting/pki-troubleshooting/"}},c={},s=[],u={toc:s},d="wrapper";function h(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"circuit-create-error-codes"},"Circuit Create Error Codes"),(0,i.kt)("p",null,"The most fundamental action of a working OpenZiti instance is the dialing of services to create connections and pass data.  This action crosses a few borders, but the central process is the creation of a fabric circuit to carry the traffic between the initiating Edge node (SDK embedded application, client, tunneler, etc.) and the terminating Edge node.  When this process fails, it is important to understand why it failed, to properly troubleshoot the issue.  Below is a table of the various cause codes emitted by the OpenZiti Controller, and a brief description of the context of the error."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Circuit Create Error / Failure Cause"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CircuitFailureInvalidService / INVALID_SERVICE"),(0,i.kt)("td",{parentName:"tr",align:null},"The service identity given to the controller in the connection request is not found in the controller's configuration database . The endpoint has gotten out of sync with the controller, most likely due to very near term changes, or failure of the client software to properly process service changes.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CircuitFailureIdGenerationError / ID_GENERATION_ERR"),(0,i.kt)("td",{parentName:"tr",align:null},"The circuit identity generation function has failed to generate and return a circuit identity string")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CircuitFailureNoTerminators / NO_TERMINATORS"),(0,i.kt)("td",{parentName:"tr",align:null},"The service requested in the connection request has no terminators. This is normally indicative of a hosting device having lost connection to the network, either due to process, network, or power issues. The controller is unable to create a path.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CircuitFailureNoOnlineTerminators / NO_ONLINE_TERMINATORS"),(0,i.kt)("td",{parentName:"tr",align:null},"The only terminators in the controller network map are hosted by routers that are currently in an offline state.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CircuitFailureNoPath / NO_PATH"),(0,i.kt)("td",{parentName:"tr",align:null},"During the routing evaluation, no path was calculable between the initiating and terminating devices.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CircuitFailurePathMissingLink / PATH_MISSING_LINK"),(0,i.kt)("td",{parentName:"tr",align:null},"There is no set of links that can create a valid path from the initiating router to the terminator.  This may be caused by link failures, router failures, or policies the preclude certain paths.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CircuitFailureInvalidStrategy / INVALID_STRATEGY"),(0,i.kt)("td",{parentName:"tr",align:null},"There are multiple routing strategies allowed, though at this time, only smart routing is in use.  This failure would indicate that a service has a routing strategy defined that the controller is unaware of.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CircuitFailureStrategyError / STRATEGY_ERR"),(0,i.kt)("td",{parentName:"tr",align:null},"This indicates that the service's defined routing strategy returned an error not otherwise captured")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CircuitFailureRouterErrGeneric / ROUTER_ERR_GENERIC"),(0,i.kt)("td",{parentName:"tr",align:null},"Failure on route creation not otherwise captured")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CircuitFailureRouterErrInvalidTerminator / ROUTER_ERR_INVALID_TERMINATOR"),(0,i.kt)("td",{parentName:"tr",align:null},"The service requested in the connection request has no online terminators.  This is normally indicative of a terminator state problem, where the controller believes there is a valid terminator, however, the device hosting that terminator has responded that the terminator is not valid")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CircuitFailureRouterErrMisconfiguredTerminator / ROUTER_ERR_MISCONFIGURED_TERMINATOR"),(0,i.kt)("td",{parentName:"tr",align:null},"The data object for the terminator is not correctly formatted or otherwise unusable, resulting in an inability of the system to properly utilize the terminator to create a fabric circuit")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CircuitFailureRouterErrDialTimedOu / ROUTER_ERR_DIAL_TIMED_OUT"),(0,i.kt)("td",{parentName:"tr",align:null},"The dial from the terminating host to the socket configured for the service experienced a timeout when attempting to connect.  This is most likely caused by a routing or service issue preventing the TCP or UDP connection from the hosting device to the configured service definition.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CircuitFailureRouterErrDialConnRefused / ROUTER_ERR_CONN_REFUSED"),(0,i.kt)("td",{parentName:"tr",align:null},"The dial from the terminating host to the socket configured for the service received a TCP reset (RST) packet when attempting to connect.  This is most likely caused by a routing or service issue preventing the TCP or UDP connection from the hosting device to the configured service definition.")))))}h.isMDXComponent=!0}}]);