"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[2873],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=l,h=c["".concat(u,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),l=n(86010);const r={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r.tabItem,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(87462),l=n(67294),r=n(86010),i=n(12466),o=n(16550),u=n(91980),s=n(67392),p=n(50012);function c(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:l}}=e;return{value:t,label:n,attributes:a,default:l}}))}function d(e){const{values:t,children:n}=e;return(0,l.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=d(e),[i,o]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[u,s]=h({queryString:n,groupId:a}),[c,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,p.Nk)(n);return[a,(0,l.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),b=(()=>{const e=u??c;return m({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,l.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),k(e)}),[s,k,r]),tabValues:r}}var b=n(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:n,selectedValue:o,selectValue:u,tabValues:s}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),a=s[n].value;a!==o&&(c(t),u(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:i}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},i,{className:(0,r.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":o===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=k(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",g.tabList)},l.createElement(f,(0,a.Z)({},e,t)),l.createElement(y,(0,a.Z)({},e,t)))}function N(e){const t=(0,b.Z)();return l.createElement(v,(0,a.Z)({key:String(t)},e))}},54869:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),l=(n(67294),n(3905)),r=n(74866),i=n(85162);const o={title:"Linux"},u=void 0,s={unversionedId:"reference/tunnelers/linux/index",id:"reference/tunnelers/linux/index",title:"Linux",description:"The Ziti Tunneller",source:"@site/docs/reference/tunnelers/linux/index.md",sourceDirName:"reference/tunnelers/linux",slug:"/reference/tunnelers/linux/",permalink:"/docs/reference/tunnelers/linux/",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/reference/tunnelers/linux/index.md",tags:[],version:"current",frontMatter:{title:"Linux"},sidebar:"docsSidebar",previous:{title:"iOS",permalink:"/docs/reference/tunnelers/iOS"},next:{title:"Containers",permalink:"/docs/reference/tunnelers/linux/container/"}},p={},c=[{value:"The Ziti Tunneller",id:"the-ziti-tunneller",level:2},{value:"Install Linux Package",id:"install-linux-package",level:2},{value:"Installing the DEB",id:"installing-the-deb",level:3},{value:"Ubuntu",id:"ubuntu",level:4},{value:"Debian GNU/Linux",id:"debian-gnulinux",level:4},{value:"Installing the RPM",id:"installing-the-rpm",level:3},{value:"Red Hat",id:"red-hat",level:4},{value:"Fedora",id:"fedora",level:4},{value:"Amazon Linux",id:"amazon-linux",level:4},{value:"Manual Installation",id:"manual-installation",level:2},{value:"Enroll Before You Run",id:"enroll-before-you-run",level:3},{value:"Run the Manually Installed Binary",id:"run-the-manually-installed-binary",level:3},{value:"Run with Docker",id:"run-with-docker",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],d={toc:c},m="wrapper";function h(e){let{components:t,...n}=e;return(0,l.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"the-ziti-tunneller"},"The Ziti Tunneller"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ziti-edge-tunnel")," is the general purpose tunneller CLI and can also run as a systemd daemon."),(0,l.kt)("p",null,"The purpose of the tunneller is to configure host access. This means all users and all processes on the host will share the same level of access. This is accomplished by configuring the OS to have an on-board OpenZiti DNS nameserver and IP routes for authorized OpenZiti Services."),(0,l.kt)("h2",{id:"install-linux-package"},"Install Linux Package"),(0,l.kt)("p",null,"Reasons to use the package:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Install the tunneller as a systemd service."),(0,l.kt)("li",{parentName:"ol"},"Create permissions and policies for the tunneller to run as a non-root user."),(0,l.kt)("li",{parentName:"ol"},"Automatically enroll the identity and clean up the enrollment token in identity directory."),(0,l.kt)("li",{parentName:"ol"},"Automatically upgrade the tunneller when a new package is available.")),(0,l.kt)("p",null,"Linux DEB packages are currently available for the x86_64 and arm64 platforms and RPM packages are available for x86_64. Additionally, there are executable downloads available for arm/v7 (32bit) for ",(0,l.kt)("a",{parentName:"p",href:"#manual-installation"},"manual installation"),"."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},'It is not necessary to manually enroll the identity when using the RPM or DEB package. Just install the token in the identities directory with file owner "ziti" and it will be enrolled and cleaned up when you start the service.')),(0,l.kt)("h3",{id:"installing-the-deb"},"Installing the DEB"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Run the script for your OS to install ",(0,l.kt)("inlineCode",{parentName:"li"},"ziti-edge-tunnel"),".")),(0,l.kt)(r.Z,{defaultValue:"Ubuntu",values:[{label:"Ubuntu",value:"Ubuntu"},{label:"Debian GNU/Linux",value:"Debian"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"Ubuntu",mdxType:"TabItem"},(0,l.kt)("h4",{id:"ubuntu"},"Ubuntu"),(0,l.kt)("p",null,"Packages are available for all Ubuntu releases since 18.04 (Bionic)."),(0,l.kt)("br",null),"Architectures available:",(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"x86_64"),(0,l.kt)("li",{parentName:"ul"},"arm64")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Please read this script to ensure it is safe before running it.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sSLf https://get.openziti.io/tun/scripts/install-ubuntu.bash | bash\n"))),(0,l.kt)(i.Z,{value:"Debian",mdxType:"TabItem"},(0,l.kt)("h4",{id:"debian-gnulinux"},"Debian GNU/Linux"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Debian"),(0,l.kt)("th",{parentName:"tr",align:null},"Ubuntu"),(0,l.kt)("th",{parentName:"tr",align:null},"Archs"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"12 Bookworm"),(0,l.kt)("td",{parentName:"tr",align:null},"Jammy 22.04"),(0,l.kt)("td",{parentName:"tr",align:null},"x86_64, arm64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"11 Bullseye"),(0,l.kt)("td",{parentName:"tr",align:null},"Focal 20.04"),(0,l.kt)("td",{parentName:"tr",align:null},"x86_64, arm64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"10 Buster"),(0,l.kt)("td",{parentName:"tr",align:null},"Bionic 18.04"),(0,l.kt)("td",{parentName:"tr",align:null},"x86_64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"9 Stretch"),(0,l.kt)("td",{parentName:"tr",align:null},"Xenial 16.04"),(0,l.kt)("td",{parentName:"tr",align:null},"x86_64")))),(0,l.kt)("p",null,"This example subscribes you to the Ubuntu ",(0,l.kt)("inlineCode",{parentName:"p"},"focal")," repo which will work well in most cases. Alternatively, you may refer to the table to find the Ubuntu release name that is the contemporary of your Debian release. Then, substitute the Ubuntu release name for ",(0,l.kt)("inlineCode",{parentName:"p"},"focal")," in the ",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/apt/sources.list.d/openziti.list")," file."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"(\nset -euo pipefail\n\ncurl -sSLf https://get.openziti.io/tun/package-repos.gpg \\\n  | sudo gpg --dearmor --output /usr/share/keyrings/openziti.gpg\n\necho 'deb [signed-by=/usr/share/keyrings/openziti.gpg] https://packages.openziti.org/zitipax-openziti-deb-stable focal main' \\\n  | sudo tee /etc/apt/sources.list.d/openziti.list >/dev/null\n\nsudo apt update\nsudo apt install ziti-edge-tunnel\n)\n")))),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Place a copy of the enrollment token JWT file in the ",(0,l.kt)("inlineCode",{parentName:"p"},"/opt/openziti/etc/identities")," directory.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Set the filemode and owner so that members of group ",(0,l.kt)("inlineCode",{parentName:"p"},"ziti")," will be able to read and delete the token file."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo chown -cR :ziti        /opt/openziti/etc/identities\nsudo chmod -cR ug=rwX,o-rwx /opt/openziti/etc/identities\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Enable and start the service"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl enable --now ziti-edge-tunnel.service\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"The process needs to be restarted if the contents of ",(0,l.kt)("inlineCode",{parentName:"p"},"/opt/openziti/etc/identities")," change."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl restart ziti-edge-tunnel.service\n")))),(0,l.kt)("h3",{id:"installing-the-rpm"},"Installing the RPM"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Create a repo file like ",(0,l.kt)("inlineCode",{parentName:"li"},"/etc/yum.repos.d/openziti.repo")," matching the appropriate example below for your OS.")),(0,l.kt)(r.Z,{defaultValue:"RedHat",values:[{label:"Red Hat",value:"RedHat"},{label:"Fedora",value:"Fedora"},{label:"Amazon Linux",value:"Amazon"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"RedHat",mdxType:"TabItem"},(0,l.kt)("h4",{id:"red-hat"},"Red Hat"),(0,l.kt)("p",null,"Architectures available:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"x86_64")),(0,l.kt)("p",null,"Use this repo with var ",(0,l.kt)("inlineCode",{parentName:"p"},"$releasever")," on CentOS 7, Rocky 8-9, and RHEL 7-9."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini"},"[OpenZiti]\nname=OpenZiti\nbaseurl=https://packages.openziti.org/zitipax-openziti-rpm-stable/redhat$releasever/$basearch\nenabled=1\ngpgcheck=0\ngpgkey=https://packages.openziti.org/zitipax-openziti-rpm-stable/redhat$releasever/$basearch/repodata/repomd.xml.key\nrepo_gpgcheck=1\n"))),(0,l.kt)(i.Z,{value:"Fedora",mdxType:"TabItem"},(0,l.kt)("h4",{id:"fedora"},"Fedora"),(0,l.kt)("p",null,"Architectures available:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"x86_64")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini"},"[OpenZiti]\nname=OpenZiti\nbaseurl=https://packages.openziti.org/zitipax-openziti-rpm-stable/redhat8/$basearch\nenabled=1\ngpgcheck=0\ngpgkey=https://packages.openziti.org/zitipax-openziti-rpm-stable/redhat8/$basearch/repodata/repomd.xml.key\nrepo_gpgcheck=1\n"))),(0,l.kt)(i.Z,{value:"Amazon",mdxType:"TabItem"},(0,l.kt)("h4",{id:"amazon-linux"},"Amazon Linux"),(0,l.kt)("p",null,"Architectures available:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"x86_64")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini"},"[OpenZiti]\nname=OpenZiti\nbaseurl=https://packages.openziti.org/zitipax-openziti-rpm-stable/redhat8/$basearch\nenabled=1\ngpgcheck=0\ngpgkey=https://packages.openziti.org/zitipax-openziti-rpm-stable/redhat8/$basearch/repodata/repomd.xml.key\nrepo_gpgcheck=1\n")))),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Run ",(0,l.kt)("inlineCode",{parentName:"p"},"sudo yum update")," to refresh your repo data cache. Optionally, you may wish to also install all available updates.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Run ",(0,l.kt)("inlineCode",{parentName:"p"},"sudo yum install ziti-edge-tunnel")," to install the RPM.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Place a copy of the enrollment token JWT file in the ",(0,l.kt)("inlineCode",{parentName:"p"},"/opt/openziti/etc/identities")," directory.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Set the filemode and owner so that members of group ",(0,l.kt)("inlineCode",{parentName:"p"},"ziti")," will be able to read and delete the token file."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo chown -cR :ziti        /opt/openziti/etc/identities\nsudo chmod -cR ug=rwX,o-rwx /opt/openziti/etc/identities\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Enable and start the service"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl enable --now ziti-edge-tunnel.service\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"The process needs to be restarted if the contents of ",(0,l.kt)("inlineCode",{parentName:"p"},"/opt/openziti/etc/identities")," change."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl restart ziti-edge-tunnel.service\n")))),(0,l.kt)("h2",{id:"manual-installation"},"Manual Installation"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/openziti/ziti-tunnel-sdk-c/releases/latest/"},"The latest binary release")," of ",(0,l.kt)("inlineCode",{parentName:"p"},"ziti-edge-tunnel")," is distributed as an executable for amd64, arm, arm64 architectures. The upgrade procedure is identical to the installation procedure."),(0,l.kt)("p",null,"You'll need to install the ",(0,l.kt)("inlineCode",{parentName:"p"},"wget")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"unzip")," commands to use this example."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'wget -q "https://github.com/openziti/ziti-tunnel-sdk-c/releases/latest/download/ziti-edge-tunnel-Linux_$(uname -p).zip" \\\n  && unzip ./ziti-edge-tunnel-Linux_$(uname -p).zip \\\n  && rm ./ziti-edge-tunnel-Linux_$(uname -p).zip \\\n  && chmod -c +x ./ziti-edge-tunnel \\\n  && ./ziti-edge-tunnel version\n')),(0,l.kt)("h3",{id:"enroll-before-you-run"},"Enroll Before You Run"),(0,l.kt)("p",null,"You will need the token file or its contents to enroll. Enrollment is the act of exchanging the token for an identity that is to be permanently installed in the filesystem."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/learn/core-concepts/identities/enrolling"},"Learn more about enrolling"),"."),(0,l.kt)("h3",{id:"run-the-manually-installed-binary"},"Run the Manually Installed Binary"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ziti-edge-tunnel run \\\n  --identity-dir /opt/openziti/etc/identities\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"./linux-tunnel-options"},"Learn more about tunneler options and modes"),"."),(0,l.kt)("h2",{id:"run-with-docker"},"Run with Docker"),(0,l.kt)("p",null,"Please reference ",(0,l.kt)("a",{parentName:"p",href:"/docs/reference/tunnelers/linux/container/"},"the article about running the Linux tunneler in a container")," for guidance and examples!"),(0,l.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,l.kt)("p",null,"Please refer to ",(0,l.kt)("a",{parentName:"p",href:"./linux-tunnel-troubleshooting"},"the troubleshooting guide")))}h.isMDXComponent=!0}}]);