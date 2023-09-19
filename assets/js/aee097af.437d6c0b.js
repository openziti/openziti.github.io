"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[3553],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>f});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var u=r.createContext({}),l=function(e){var t=r.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(o),h=n,f=p["".concat(u,".").concat(h)]||p[h]||d[h]||i;return o?r.createElement(f,a(a({ref:t},c),{},{components:o})):r.createElement(f,a({ref:t},c))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=h;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:n,a[1]=s;for(var l=2;l<i;l++)a[l]=o[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}h.displayName="MDXCreateElement"},81269:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=o(87462),n=(o(67294),o(3905));const i={},a="Contributing to NetFoundry Open-Source Projects",s={unversionedId:"CONTRIBUTING",id:"CONTRIBUTING",title:"Contributing to NetFoundry Open-Source Projects",description:"NetFoundry welcomes all contributions large or small from the community. If you want to contribute to a NetFoundry repository this document will serve as a guide. Contributions can come in various forms such as bug reports, engaging with other users by offering help on the the discourse group and of course as code submissions. Please take a moment and read this document to see how you can help out.",source:"@site/docs-policies/CONTRIBUTING.md",sourceDirName:".",slug:"/CONTRIBUTING",permalink:"/policies/CONTRIBUTING",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"policiesSidebar",previous:{title:"NetFoundry Contributor Covenant Code of Conduct",permalink:"/policies/CODE_OF_CONDUCT"},next:{title:"Code of Conduct",permalink:"/policies/new-project-template/CODE_OF_CONDUCT"}},u={},l=[{value:"Bug Reports",id:"bug-reports",level:2},{value:"Example Bug Report",id:"example-bug-report",level:3},{value:"Code Contributions",id:"code-contributions",level:2},{value:"Contributor License Agreement",id:"contributor-license-agreement",level:3},{value:"Submitting the CLA",id:"submitting-the-cla",level:3},{value:"Contributing",id:"contributing",level:3}],c={toc:l},p="wrapper";function d(e){let{components:t,...i}=e;return(0,n.kt)(p,(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"contributing-to-netfoundry-open-source-projects"},"Contributing to NetFoundry Open-Source Projects"),(0,n.kt)("p",null,"NetFoundry welcomes all contributions large or small from the community. If you want to contribute to a NetFoundry repository this document will serve as a guide. Contributions can come in various forms such as ",(0,n.kt)("a",{parentName:"p",href:"#example-bug-report"},"bug reports"),", engaging with other users by offering help on the the ",(0,n.kt)("a",{parentName:"p",href:"https://openziti.discourse.group/"},"discourse group")," and of course as code submissions. Please take a moment and read this document to see how you can help out."),(0,n.kt)("h2",{id:"bug-reports"},"Bug Reports"),(0,n.kt)("p",null,"If you have discovered a potential issue with any of the NetFoundry projects on GitHub please file a GitHub issue for the possible problem. We realize you are taking time out of your day to file the issue (thank you!) however we do ask that you take a moment to try to submit a high quality report of the issue. A high quality isuse report will ideally be short and direct and only as detailed as possible."),(0,n.kt)("p",null,"Here are some guidelines to follow when posting an issue:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Make sure your steps are reporducible and clear. If you are submitting a bit of code that triggers the issue the code should be as terse as possible and only inclue the bits relevant to the issue being submitted."),(0,n.kt)("li",{parentName:"ul"},"Search for similar issues before submitting an issue."),(0,n.kt)("li",{parentName:"ul"},"Include version, branch or commit hash information in the bug to help someone else reproducing the bug. If you are not using the HEAD of main, search for closed issues to make sure this was not fixed recently or update to HEAD and reproduce the issue."),(0,n.kt)("li",{parentName:"ul"},"If applicable to the issue and time permits we ask that you try to produce a test script or code that can trigger the issue. If the code is testable - produce an actual test case for the isuse."),(0,n.kt)("li",{parentName:"ul"},"Including the OS, OS version, versions of tooling used to trigger the issue is always helpful. For example if issue is UI based including the browser and browser version is often very relevant. If the bug is inside an SDK - what version of the SDK is in use?"),(0,n.kt)("li",{parentName:"ul"},"We ask that you please not disclose security related issues on GitHub. Instead, please mail ",(0,n.kt)("a",{parentName:"li",href:"mailto:security@netfoundry.io"},"security@netfoundry.io")," with any issues which might be security related.")),(0,n.kt)("p",null,"A high quality issue leaves as little room for ambiguity as possible. The more details provided the better."),(0,n.kt)("p",null,"Additional guidelines:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The issue tracker is not for support requests. Please use the ",(0,n.kt)("a",{parentName:"li",href:"https://openziti.discourse.group/"},"discourse group"),' for questions about "how do i do this" or for seeking additional information that may not be documented yet.'),(0,n.kt)("li",{parentName:"ul"},"You are expected to follow the ",(0,n.kt)("a",{parentName:"li",href:"/policies/CODE_OF_CONDUCT"},"code of conduct")," at all times. Please be respectful of issues entered by others."),(0,n.kt)("li",{parentName:"ul"},"Keep responses in the issues specifically about the issue itself. If another issue arises or if discussion is warranted open a new issue and use the ",(0,n.kt)("a",{parentName:"li",href:"https://openziti.discourse.group/"},"discourse group")," accordingly.")),(0,n.kt)("h3",{id:"example-bug-report"},"Example Bug Report"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'Title: \nName with apostrophe breaks save functionality\n\nDescription:\nWhile using the UI I noticed that when I enter a name with an apostrophe the form doesn\'t save and reports an error.\n\nHere\'s what I did:\n\n# Environment: Windows 10 [Version 10.0.18362.535]\n# Build from the main branch using `go version go1.13.4 linux/amd64`\n# Log into UI and click "new thing" using Firefox 71.0 (32 bit)\n# Fill out all the required fields\n# When filling out out the Name field ensure you use a name with an apostrophe. I used "Jerry O\'Connell"\n# Click save - observe the error\n')),(0,n.kt)("h2",{id:"code-contributions"},"Code Contributions"),(0,n.kt)("p",null,"Before a contribution can be accepted there is some bookeeping that needs to occur. NetFoundry requires external contributors to sign a Contributor License Agreement (CLA) in order to ensure our products can remain open sourece while still allowing NetFoundry to advance the products forward."),(0,n.kt)("h3",{id:"contributor-license-agreement"},"Contributor License Agreement"),(0,n.kt)("p",null,"So what is a Contributor License Agreement (CLA) anyway? A CLA is a document which explicitly defines the terms intellectual property is contributed to a company/project. Our CLA is based on the fine work from the Apache Software Foundation. In summary the CLA is effectively doing a few things. Ensure you read and understand the CLA you are signing. This summary is not legal advice"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Grant of Copyright License. You give NetFoundry permission to use your copyrighted work in the project you contributed to."),(0,n.kt)("li",{parentName:"ul"},"Grant of Patent License. If your contributed work uses a patent, you give NetFoundry a license to use that patent in the project you have contributed to. You also agree that you have authorization to grant this license."),(0,n.kt)("li",{parentName:"ul"},"No Warranty and no Support. By making a contribution you are not obligating yourself or your corporation to provide support for the contribution. You are also not agreeing to any warranty obligations or providing any assurances or guarantees about how it will perform.")),(0,n.kt)("h3",{id:"submitting-the-cla"},"Submitting the CLA"),(0,n.kt)("p",null,"In order to have a CLA on file you must download the CLA and sign it. If you are an individual you can download the ",(0,n.kt)("a",{target:"_blank",href:o(26160).Z},"Individual Contributor License Agreement"),". For contributors contributing on behalf of a corporation there exists a ",(0,n.kt)("a",{target:"_blank",href:o(15).Z},"Corporate Contributor License Agreement"),". Once signed you will send the CLA to ",(0,n.kt)("a",{parentName:"p",href:"mailto:cla@netfoundry.io"},"cla@netfoundry.io"),". We will process your request and add you as a contributor to the project. Note that submitting issues does not requires a CLA be signed. You also will only have to sign a single CLA regardless of which repository you are contributing to."),(0,n.kt)("p",null,"After being submitted please allow for a few business days for us to process your CLA submission. You will be notified by email of your acceptance and the provided GitHub id will be added as a contributor. NetFoundry pledges that any personal information will not be used in any way."),(0,n.kt)("h3",{id:"contributing"},"Contributing"),(0,n.kt)("p",null,"With the necessary paperwork complete you can now begin the process of getting your contribution into the targetted project! Like other open source projects we ask you to fork the repository in question, make your changes and then issue a pull request back to the main project line. If applicable write tests to go along with the code. Please file an issue in the GitHub issue for the pull request so that the commits can be traced back to the rationale for the change. As with all software projects the more code you change the longer it will take to review and accept the pull request. Short and simple pull requests are easy to review and accept so it's often adventageous to stage your changes accordingly. This is not always possible but it should be the target. New files should get the appropriate license header as well."))}d.isMDXComponent=!0},15:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/files/NetFoundry-CCLA-a68e768031f697589e7d435f17e0cf31.pdf"},26160:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/files/NetFoundry-ICLA-32974791ae564dd1878a7d2ab1ab8d5e.pdf"}}]);