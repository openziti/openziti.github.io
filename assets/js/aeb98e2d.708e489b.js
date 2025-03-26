"use strict";(self.webpackChunkdocusaurus_3=self.webpackChunkdocusaurus_3||[]).push([[2634,7969],{6121:(e,t,i)=>{i.d(t,{A:()=>l});i(96540);var s=i(67788);const n={root:"root_v6j6",content:"content_OFse"};var r=i(74848);function l(e){const{children:t,noFooter:i,wrapperClassName:l,title:a,description:o,style:c}=e;(0,s.J)();let d=null;return d=l||n.root,(0,r.jsx)("div",{className:d,style:c,children:(0,r.jsx)("div",{className:n.content,children:t})})}},53914:(e,t,i)=>{i.d(t,{A:()=>g});i(96540),i(4023);var s=i(59144),n=i(67788),r=i(74689),l=i(12093),a=i(13806),o=i(99803),c=i(9861);i(17048);const d={root:"root_UnDB",content:"content_XCk7"};var h=i(4034),p=i(74848);function g(e){const{children:t,style:i,noFooter:g,wrapperClassName:x,title:u,description:m,bgColor:y}=e;return(0,n.J)(),(0,p.jsx)(c.A,{children:(0,p.jsxs)("div",{className:d.root,style:i,children:[(0,p.jsxs)("div",{className:d.content,children:[(0,p.jsx)(s.be,{title:"OpenZiti - open source zero trust networking!",description:"OpenZiti is an open source zero trust network applying zero trust principles directly into applications through SDKs or to existing networks using tunnelers"}),(0,p.jsx)(r.A,{}),(0,p.jsx)(l.A,{}),(0,p.jsx)(h.A,{}),(0,p.jsx)(a.A,{})]}),t,(0,p.jsx)(o.A,{})]})})}},21585:(e,t,i)=>{i.d(t,{L:()=>n});i(96540);var s=i(74848);function n(){return(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{style:{color:"var(--ifm-color-primary)",fontWeight:"bold"},children:"OpenZiti"})," is a free and open source project focused on bringing zero trust networking principles directly into any application. The project provides all the pieces required to implement a zero trust overlay network and provides all the tools necessary to integrate zero trust into your existing solutions. The OpenZiti project believes the principles of zero trust shouldn't stop at your network, those ideas belong ",(0,s.jsx)("span",{style:{color:"var(--ifm-color-primary)",fontWeight:"bold"},children:"in your application"}),"."]})}},61696:(e,t,i)=>{i.r(t),i.d(t,{default:()=>y});var s=i(96540),n=i(35363),r=i(74848);const l=e=>{let{src:t,...l}=e;return(0,r.jsx)(n.A,{fallback:(0,r.jsx)("div",{children:"Loading asciinema cast..."}),children:()=>{const e=i(64967),n=(0,s.useRef)(null);return(0,s.useEffect)((()=>{e.create(t,n.current,l)}),[t]),(0,r.jsx)("div",{ref:n})}})};var a=i(40797),o=i(6121),c=i(53914),d=i(89216),h=i(29030),p=i(58069),g=i(8532);const x=e=>{const{style:t,slideClassName:i,slideTitle:n,slides:l,buttonClassName:a,textClassName:o,imgClassName:c}=e,d="View All",{colorMode:h,setColorMode:p}=(0,g.G)(),[x,u]=(0,s.useState)(0),[m,y]=(0,s.useState)(!1),[j,v]=(0,s.useState)(!0),[f,b]=(0,s.useState)(!1),[w,S]=(0,s.useState)(d),[C,k]=(0,s.useState)(0),N=()=>{x===l.length-1||u(x+1),z(x+1)},H=()=>{0===x||u(x-1),z(x-1)},z=e=>{v(0===e),y(e===l.length-1)};let _=null;l.length>1&&(_=(0,r.jsxs)("div",{style:{display:"flex",flexDirection:"row-reverse",margin:"5px"},children:[(0,r.jsx)("div",{style:{display:"flex",marginRight:"5px"},children:(0,r.jsx)("button",{disabled:m,className:a,onClick:N,children:"Next"})}),(0,r.jsx)("div",{style:{display:"flex",marginRight:"5px"},children:(0,r.jsx)("button",{disabled:j,className:a,onClick:H,children:"Previous"})})]}));const A=e=>"dark"===h?e.darkImg:e.img,T=(e,t)=>{const s=A(e);return(0,r.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",marginTop:"10px"},children:[e.title,(0,r.jsxs)("div",{className:i,children:[(0,r.jsx)("div",{className:o,children:e.text}),(0,r.jsxs)("div",{className:c,children:[(0,r.jsx)("img",{style:{maxWidth:"100%"},src:s,alt:e.text}),t]})]})]})},B=(0,r.jsxs)("div",{style:t,onWheel:e=>{if((()=>{const e=document.body,t=document.documentElement,i=window.innerHeight||t.clientHeight||e.clientHeight;return Math.max(e.scrollHeight,e.offsetHeight,t.clientHeight,t.scrollHeight,t.offsetHeight)>i})())return;const t=Math.max(C+e.deltaY,0),i=Math.floor(t/100);console.debug("effectivePage:"+i+" : , curScroll:"+t),t<0?k(0):i>l.length?k(100*l.length):i<l.length&&i>=0&&(console.debug("effectivePage:"+i+" : , currentPos:"+x),k(t),u(i),console.debug("handleOnWheel.currentPosition: "+x),z(i))},children:[(0,r.jsx)("div",{children:T(l[x])}),_]}),Z=l.map((e=>T(e,(0,r.jsx)("hr",{}))));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[n,(0,r.jsx)("div",{style:{display:"flex",marginRight:"5px",height:"36px"},children:(0,r.jsx)("button",{className:a,onClick:()=>{f?(S(d),b(!1)):(S("View as Slideshow"),b(!0))},children:w})})]}),(0,r.jsx)("div",{children:f?Z:B})]})},u=e=>{const[t,i]=(0,s.useState)(!0);return(0,s.useEffect)((()=>{const t=setTimeout((()=>{i(!1)}),e.delay);return()=>clearTimeout(t)}),[e.delay]),t?(0,r.jsx)("div",{className:e.className,children:e.children}):(0,r.jsx)("div",{})},m={slideStyle:"slideStyle_y6EE",defaultSlideStyle:"defaultSlideStyle_ZscK",slideText:"slideText_jxng",explainer:"explainer_K3WX",slideImage:"slideImage_NCri",exampleContainer:"exampleContainer_Q005",liveMsgContainerContainer:"liveMsgContainerContainer_DmFK",liveMsgContainer:"liveMsgContainer_F9Tm",pageWrapper:"pageWrapper_MXf5",bgImg1:"bgImg1_HvfR",messagebox:"messagebox_Ckxi","chat-bubbles":"chat-bubbles_vCuQ",msgSpan:"msgSpan_WsGl",app:"app_YAHM",messageName:"messageName_zLfK",messageText:"messageText_ZrSs",toast:"toast_TRRw",toastHeader:"toastHeader_aXpl",toastBody:"toastBody_dYQ1",asciinema:"asciinema_kiwR",buttons:"buttons_fVRM",flexGrowNoWrap:"flexGrowNoWrap_R8nv"};const y=function(){const{siteConfig:e}=(0,a.A)(),t={marginBottom:"0px"},i=(0,r.jsx)(d.Highlight,{children:"strong identity"}),n=(0,r.jsx)(d.Highlight,{children:"strong identities"}),g=[{title:(0,r.jsx)("div",{children:(0,r.jsx)(d.H3,{style:t,children:"Step 1 - Reflect Server Strong Identity"})}),text:(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("p",{children:["When the Appetizer process starts, it first creates a ",i,' for itself. This strong identity (represented by the lock icon) is authorized to "bind" the reflect service, creating a listener. The reflect server is then listening on the overlay and able to accept incoming connections from other ',n,", authorized to participate in the OpenZiti network."]})}),img:(0,h.Ay)("/img/appetizer/step1.svg"),darkImg:(0,h.Ay)("/img/appetizer/dark-step1.svg")},{title:(0,r.jsx)("div",{children:(0,r.jsx)(d.H3,{style:t,children:"Step 2 - Reflect Server Connects to the OpenZiti Network"})}),text:(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("p",{children:["Now the\xa0",(0,r.jsx)("code",{children:"reflect server"}),"\xa0is ready to connect to the overlay network. The OpenZiti SDK locates any/all ",(0,r.jsx)("a",{href:"/docs/reference/glossary",children:"OpenZiti Routers"})," it's authorized to connect to and using the ",i," created in step 1, it attaches to the overlay network. Following the principle of ",(0,r.jsx)(d.Highlight,{children:"least privileged access"}),', the server must be authorized to "bind" the reflect service and other ',n,' must be authorized "dial" the service. Other ',n," that are not authorized, will not be allowed to access the service."]})}),img:(0,h.Ay)("/img/appetizer/step2.svg"),darkImg:(0,h.Ay)("/img/appetizer/dark-step2.svg")},{title:(0,r.jsx)("div",{children:(0,r.jsx)(d.H3,{style:t,children:"Step 3 - Reflect Client Strong Identity"})}),text:(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("p",{children:["Your\xa0",(0,r.jsx)("code",{children:"reflect client"}),"\xa0also needs a ",i,". You won't be able to connect to the \xa0",(0,r.jsx)("code",{children:"reflect server"}),"\xa0if you're not authenticated to the OpenZiti overlay, and you can't authenticate to the overlay without a ",i,"! The Appetizer exposes a public endpoint (one not protected by OpenZiti) which creates ",n," authorized to connect to the reflect server. The first time you run the reflect client, it will automatically make an HTTP request to retrieve a ",i," for your use, authorized to communicate to the reflect server."]})}),img:(0,h.Ay)("/img/appetizer/step3.svg"),darkImg:(0,h.Ay)("/img/appetizer/dark-step3.svg")},{title:(0,r.jsx)("div",{children:(0,r.jsx)(d.H3,{style:t,children:"Step 4 - Reflect Client Connects to the OpenZiti Network"})}),text:(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("p",{children:["Your\xa0",(0,r.jsx)("code",{children:"reflect client"}),"\xa0now has it's own ",i," and can connect to the OpenZiti overlay! Both reflect client and reflect server established connections to the",(0,r.jsx)("a",{href:"/docs/reference/glossary",children:"OpenZiti Routers"})," deployed on the public, open internet. By making outbound connections to edge routers in this way, absolutely ",(0,r.jsx)(d.Highlight,{children:"no inbound firewall holes"})," are needed. The reflect server also has ",(0,r.jsx)(d.Highlight,{children:"no listening ports"})," on the IP-based, underlay network. It only listens for connections exclusively on the overlay network! This gives the reflect server and any server adopting an OpenZiti SDK, total protection ",(0,r.jsx)(d.Highlight,{children:"from port scanning"}),"."]})}),img:(0,h.Ay)("/img/appetizer/step4.svg"),darkImg:(0,h.Ay)("/img/appetizer/dark-step4.svg")},{title:(0,r.jsx)("div",{children:(0,r.jsx)(d.H3,{style:t,children:"Step 5 - Client and Server Communicate Securely"})}),text:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("p",{children:["The\xa0",(0,r.jsx)("code",{children:"reflect client"}),"\xa0now securely dials the\xa0",(0,r.jsx)("code",{children:"reflect server"}),"\xa0over the OpenZiti overlay. The client can connect and the server can accept the connections because both are now ",(0,r.jsx)(d.Highlight,{children:"authenticated"})," and ",(0,r.jsx)(d.Highlight,{children:"authorized"}),". The client sends bytes to the server, which are reflected back to your locally running reflect client. When the client initiates a connection, ",(0,r.jsx)(d.Highlight,{children:"end to end encryption"})," is then negotiated as well, further ensuring the security of the connection!"]}),(0,r.jsxs)("span",{style:{paddingTop:"5px"},children:["With the connection established, the OpenZiti overlay can now monitor the connection and apply ",(0,r.jsx)(d.Highlight,{children:"continual authorization"})," as well. As soon as either",i," is unauthorized, the connection is terminated."]})]}),img:(0,h.Ay)("/img/appetizer/step5.svg"),darkImg:(0,h.Ay)("/img/appetizer/dark-step5.svg")}],y="\n        git clone https://github.com/openziti-test-kitchen/appetizer.git\n        cd appetizer\n        go run clients/reflect.go reflectService\n        ".trim().split("\n").map((e=>e.trimLeft()+"\n")),j=(0,r.jsxs)("div",{children:[(0,r.jsx)(d.H3,{style:t,children:"What You Get by Adopting an OpenZiti SDK"}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Strong identities. X509 certificates guarantee all entities on the network are who they claim to be."}),(0,r.jsx)("li",{children:'Segmented access. Follow the "least privileged access" model. Allow access only to exactly what is needed.'}),(0,r.jsx)("li",{children:"Protection from port scanning. The application has no listening ports, it's \"dark\". It's impossible to detect and directly attack."}),(0,r.jsx)("li",{children:"Continuous authentication. The world is dynamic. Constant authentication is vital."}),(0,r.jsx)("li",{children:"End-to-end encryption. Make sure the data you intend to send is only available to the intended recipient."})]})]}),[v,f]=(0,s.useState)([]);function b(){return Date.now().toString(36)+Math.random().toString(36).substr(2,5)}b();const w=e=>{const t=e.data.split(":"),i=t[0],s=t.slice(1).join(":"),n=((e,t,i)=>(0,r.jsxs)("div",{className:m.toast,children:[(0,r.jsxs)("div",{className:m.toastHeader,children:[(0,r.jsx)("p",{children:e}),(0,r.jsx)("small",{children:t})]}),(0,r.jsx)("div",{className:m.toastBody,children:(0,r.jsx)("p",{children:i})})]}))(i,(()=>{const e=new Date;return`${e.getHours().toString().padStart(2,"0")}:${e.getMinutes().toString().padStart(2,"0")}:${e.getSeconds().toString().padStart(2,"0")}`})(),s);f((e=>[(0,r.jsx)(u,{delay:"20000",className:m.chatBubbles,children:n},b()),...e]))};(0,s.useEffect)((()=>{new EventSource("https://appetizer.openziti.io/sse").addEventListener("notify",w,!0)}),[]);const[S,C]=(0,s.useState)(!0),[k,N]=(0,s.useState)("Hide Live Messages!");return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:m.liveMsgContainerContainer,style:{minHeight:"100px",maxHeight:"450px"},children:S&&(0,r.jsxs)("div",{className:`${m.liveMsgContainer} ${m.bgImg1}`,children:[(0,r.jsx)("span",{className:m.msgSpan,children:'\ud83d\udc46 live "Reflect" messages will display here'}),(0,r.jsx)("div",{className:`${m.pageWrapper}`,children:v.map(((e,t)=>e))})]})}),(0,r.jsx)(c.A,{children:(0,r.jsxs)(o.A,{children:[(0,r.jsx)("div",{style:{display:"flex",paddingBottom:"10px"},children:(0,r.jsxs)("div",{style:{display:"flex",flexGrow:1},children:[(0,r.jsx)("img",{src:"https://raw.githubusercontent.com/openziti/branding/main/images/ziggy/closeups/Ziggy-Chef-Closeup.png",height:"60px",alt:"Ziggy Chef",style:{padding:"0 10px 0 0"}}),(0,r.jsxs)(d.H1,{children:["Appetizer: ",(0,r.jsx)("span",{style:{display:"inline-block"},children:"Taste OpenZiti"})]})]})}),(0,r.jsxs)("div",{className:m.exampleContainer,children:[(0,r.jsxs)("div",{className:m.explainer,children:[(0,r.jsxs)("p",{children:["If you have go installed, it's as simple as clone the repo, and\xa0",(0,r.jsx)("code",{children:"go run"}),"\xa0and you can experience application embedded zero trust in action \ud83d\udc47."]}),(0,r.jsx)(p.A,{children:y}),j]}),(0,r.jsxs)("div",{className:`${m.asciinema}`,children:[(0,r.jsx)("div",{style:{display:"flex",flexBasis:"33%"}}),(0,r.jsxs)("div",{style:{width:"100%",position:"relative"},children:[(0,r.jsx)("div",{style:{display:"flex",position:"absolute",right:"5px",zIndex:1,top:"5px",alignItems:"center"},children:(0,r.jsx)("button",{className:"button button--primary",onClick:()=>{C(!S),N(S?"Show Live Messages!":"Hide Live Messages!")},children:k})}),(0,r.jsx)(l,{fit:"width",src:"/appetizer.cast",loop:!0,autoplay:1,preload:!0})]}),(0,r.jsx)("div",{style:{display:"flex",flexBasis:"33%"}})]})]}),(0,r.jsx)("hr",{}),(0,r.jsx)(x,{slides:g,slideTitle:(0,r.jsx)(d.H2,{children:"Taking a Closer Look"}),slideClassName:m.defaultSlideStyle,textClassName:m.slideText,imgClassName:m.slideImage,buttonClassName:"button button--primary"})]})})]})}},89216:(e,t,i)=>{i.r(t),i.d(t,{H1:()=>o,H2:()=>c,H3:()=>d,Highlight:()=>a,default:()=>h});i(96540);var s=i(40797);i(53914),i(21585),i(56289),i(39324),i(29030);const n={main:"main_iUjq",h1:"h1_SKUt",h2:"h2_gZ6G",h3:"h3_MdNH",cardz:"cardz_sI0g",indexCtas:"indexCtas_Pg_g",indexCtasGitHubButtonWrapper:"indexCtasGitHubButtonWrapper_psdh",indexCtasGitHubButton:"indexCtasGitHubButton_6hBL",installChoice:"installChoice_BtBK",installChoiceBtn:"installChoiceBtn_UqFo",getStartedRow:"getStartedRow_Ja2B",getStartedBlurb:"getStartedBlurb_Pekd",getStartedBoxes:"getStartedBoxes_PdVd"};i(6121);var r=i(56347),l=i(74848);function a(e){const{children:t}=e;return(0,l.jsxs)("span",{style:{color:"var(--ifm-color-primary)",fontWeight:"bold"},children:[" ",t]})}function o(e){const{children:t,id:i}=e;return(0,l.jsx)("p",{id:i,className:n.h1,children:t})}function c(e){const{children:t}=e;return(0,l.jsx)("p",{className:n.h2,children:t})}function d(e){const{children:t,style:i}=e;return(0,l.jsx)("h3",{className:n.h3,style:i,children:t})}function h(){const{siteConfig:e}=(0,s.A)();return(0,l.jsx)(r.rd,{to:"docs/learn/introduction/"})}}}]);