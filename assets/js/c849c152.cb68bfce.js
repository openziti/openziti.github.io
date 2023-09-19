"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[2324],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=d(n),c=r,k=m["".concat(p,".").concat(c)]||m[c]||u[c]||i;return n?a.createElement(k,l(l({ref:t},s),{},{components:n})):a.createElement(k,l({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},10521:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const i={},l="Shared API Capabilities",o={unversionedId:"reference/developer/api/shared-api-capabilities",id:"reference/developer/api/shared-api-capabilities",title:"Shared API Capabilities",description:"API Response Envelopes",source:"@site/docs/reference/developer/api/shared-api-capabilities.md",sourceDirName:"reference/developer/api",slug:"/reference/developer/api/shared-api-capabilities",permalink:"/docs/reference/developer/api/shared-api-capabilities",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/reference/developer/api/shared-api-capabilities.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Fabric API",permalink:"/docs/reference/developer/api/fabric-api"},next:{title:"Edge SDKs",permalink:"/docs/reference/developer/sdk/"}},p={},d=[{value:"API Response Envelopes",id:"api-response-envelopes",level:2},{value:"Filtering, Sorting, &amp; Pagination",id:"filtering-sorting--pagination",level:2},{value:"Pagination",id:"pagination",level:3},{value:"Sorting",id:"sorting",level:3},{value:"Filtering",id:"filtering",level:3},{value:"Logical Operations",id:"logical-operations",level:4},{value:"Logical Conjunctions",id:"logical-conjunctions",level:4},{value:"Types",id:"types",level:4}],s={toc:d},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"shared-api-capabilities"},"Shared API Capabilities"),(0,r.kt)("h2",{id:"api-response-envelopes"},"API Response Envelopes"),(0,r.kt)("p",null,"All responses from APIs have the following outer envelope:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": ...,\n  "meta": {...},\n  "error": {...}\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"error")," fields are mutually exclusive. Responses are either a data response or an error. The ",(0,r.kt)("inlineCode",{parentName:"p"},"data"),"\nsection represents the subject or output information of the client's request. The ",(0,r.kt)("inlineCode",{parentName:"p"},"meta")," section contains additional\ninformation about the requested entity that may be useful to clients (e.g. pagination, sortable fields, etc.)."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"error")," section contains errors in the following format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": "string constant error code",\n  "message": "string human readable value",\n  "cause": ... //[nested error|field error]\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"cause")," field can either be another nested ",(0,r.kt)("inlineCode",{parentName:"p"},"error")," or a ",(0,r.kt)("inlineCode",{parentName:"p"},"field error"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "field": "the name of the field",\n  "reason": "a message explaining the issue",\n  "value": ... //the provided value\n}\n')),(0,r.kt)("h2",{id:"filtering-sorting--pagination"},"Filtering, Sorting, & Pagination"),(0,r.kt)("p",null,"API support rich filtering, sorting and pagination on queries that return lists/arrays of objects in the ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," fields.\nOn list responses the ",(0,r.kt)("inlineCode",{parentName:"p"},"meta")," section contains a list of ",(0,r.kt)("inlineCode",{parentName:"p"},"sortableFields")," which can filtered and sorted upon.\nAll values are provided in the ",(0,r.kt)("inlineCode",{parentName:"p"},"filter")," URL query field."),(0,r.kt)("p",null,"Example: ",(0,r.kt)("inlineCode",{parentName:"p"},"https://my-controller/edge/v1/management/identities?filter=<filterValue>")),(0,r.kt)("p",null,"The value of ",(0,r.kt)("inlineCode",{parentName:"p"},"filter")," (denoted by ",(0,r.kt)("inlineCode",{parentName:"p"},"<filterValue>"),") is defined by the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openziti/storage/blob/main/zitiql/ZitiQl.g4"},"ZitiQl grammar definition"),"."),(0,r.kt)("h3",{id:"pagination"},"Pagination"),(0,r.kt)("p",null,"Data can be paginated through by providing a ",(0,r.kt)("inlineCode",{parentName:"p"},"filter")," value with ",(0,r.kt)("inlineCode",{parentName:"p"},"skip")," and/or ",(0,r.kt)("inlineCode",{parentName:"p"},"limit")," clauses. For example to show:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the first page of 10 items:  ",(0,r.kt)("inlineCode",{parentName:"li"},"filter=skip 0 limit 10")),(0,r.kt)("li",{parentName:"ul"},"the second page of 10 items:  ",(0,r.kt)("inlineCode",{parentName:"li"},"filter=skip 10 limit 10"))),(0,r.kt)("h3",{id:"sorting"},"Sorting"),(0,r.kt)("p",null,"Data can be sorted on fields by providing a ",(0,r.kt)("inlineCode",{parentName:"p"},"sort by")," clause:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"sort by name ascending: ",(0,r.kt)("inlineCode",{parentName:"li"},"filter=sort by name asc")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"sort by name descending: ",(0,r.kt)("inlineCode",{parentName:"li"},"filter=sort by name dsc"))))),(0,r.kt)("h3",{id:"filtering"},"Filtering"),(0,r.kt)("h4",{id:"logical-operations"},"Logical Operations"),(0,r.kt)("p",null,"The following comparisons are allowed:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Operation"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"="),", ",(0,r.kt)("inlineCode",{parentName:"td"},"!=")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'name = "myName"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"isOnline" = true'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<"),", ",(0,r.kt)("inlineCode",{parentName:"td"},">"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"<="),", ",(0,r.kt)("inlineCode",{parentName:"td"},">=")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"precident > 0"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"contains"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"not contains")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'name contains "hi"'))))),(0,r.kt)("h4",{id:"logical-conjunctions"},"Logical Conjunctions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Conjunction"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"and")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'firstName = "bob" and lastName = "builder"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"or")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'firstName = "bob" or firstName = "jim"'))))),(0,r.kt)("p",null,"Complex conjunction grouping and nesting is supported via ",(0,r.kt)("inlineCode",{parentName:"p"},"(")," and ",(0,r.kt)("inlineCode",{parentName:"p"},")"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")," ",(0,r.kt)("inlineCode",{parentName:"p"},'firstName = "bob" or (firstName = "jim" and lastName = "john" or ("isOnline" = false))')),(0,r.kt)("h4",{id:"types"},"Types"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"this is a string"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"1.555"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"2e5"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"date_time")," (RFC3339) ("),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"datetime(2019-10-12T07:20:50.52+07:00)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"array")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'["str", "str"]'),", ",(0,r.kt)("inlineCode",{parentName:"td"},"[1,2,3.5]"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"[datetime(...), datetime(...)]"))))))}u.isMDXComponent=!0}}]);