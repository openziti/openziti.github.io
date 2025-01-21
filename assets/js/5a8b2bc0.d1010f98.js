"use strict";(self.webpackChunkdocusaurus_3=self.webpackChunkdocusaurus_3||[]).push([[1038],{70685:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"reference/tunnelers/linux/linux-tunnel-options","title":"Options and Modes","description":"ziti-edge-tunnel Environment Variables","source":"@site/docs/reference/tunnelers/60-linux/40-linux-tunnel-options.mdx","sourceDirName":"reference/tunnelers/60-linux","slug":"/reference/tunnelers/linux/linux-tunnel-options","permalink":"/docs/reference/tunnelers/linux/linux-tunnel-options","draft":false,"unlisted":false,"editUrl":"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/reference/tunnelers/60-linux/40-linux-tunnel-options.mdx","tags":[],"version":"current","sidebarPosition":40,"frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Manual","permalink":"/docs/reference/tunnelers/linux/manual-installation"},"next":{"title":"Troubleshooting","permalink":"/docs/reference/tunnelers/linux/linux-tunnel-troubleshooting"}}');var i=r(74848),t=r(28453),o=r(49584);const d={},l="Options and Modes",c={},a=[{value:"<code>ziti-edge-tunnel</code> Environment Variables",id:"ziti-edge-tunnel-environment-variables",level:2},{value:"<code>ziti-edge-tunnel</code> Global Options",id:"ziti-edge-tunnel-global-options",level:2},{value:"Run Modes",id:"run-modes",level:2},{value:"<code>run</code> Mode",id:"run-mode",level:3},{value:"How does <code>run</code> configure nameservers?",id:"how-does-run-configure-nameservers",level:4},...o.RM,{value:"System Requirements for Mode <code>run</code>",id:"system-requirements-for-mode-run",level:4},{value:"<code>run-host</code> Mode",id:"run-host-mode",level:3},{value:"System Requirements for Mode <code>run-host</code>",id:"system-requirements-for-mode-run-host",level:4}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"options-and-modes",children:"Options and Modes"})}),"\n",(0,i.jsxs)(n.h2,{id:"ziti-edge-tunnel-environment-variables",children:[(0,i.jsx)(n.code,{children:"ziti-edge-tunnel"})," Environment Variables"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"ZITI_TIME_FORMAT=utc"})," - set the log message time format to UTC timestamp instead of milliseconds since start"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"ZITI_LOG=4"})," - set the log level of the underlying Ziti C SDK, higher is more verbose (level 4 means DEBUG)"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"TLSUV_DEBUG=4"})," - set the log level of the underlying libuv library, higher is more verbose (level 4 means DEBUG)"]}),"\n",(0,i.jsxs)(n.p,{children:["For more information about configuring the underlying Ziti C SDK with environment variables, see ",(0,i.jsx)(n.a,{href:"/docs/reference/developer/sdk/ziti-sdk-c",children:"the Ziti C SDK documentation"}),"."]}),"\n",(0,i.jsxs)(n.h2,{id:"ziti-edge-tunnel-global-options",children:[(0,i.jsx)(n.code,{children:"ziti-edge-tunnel"})," Global Options"]}),"\n",(0,i.jsxs)(n.p,{children:["You can start ",(0,i.jsx)(n.code,{children:"ziti-edge-tunnel"})," with different options, some of the most commonly used options are listed below."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"# Load a single identity.\n--identity <identity>\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"# Load all identities in a dir, ignoring files with a .bak or .original filename suffix.\n--identity-dir <dir>\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"# Set log level, higher is more verbose (default level 3 means INFO).\n--verbose N\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"# Set service polling interval in seconds (default 10).\n--refresh N\n"})}),"\n",(0,i.jsx)(n.h2,{id:"run-modes",children:"Run Modes"}),"\n",(0,i.jsx)(n.p,{children:"There are two run modes:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"run"}),": transparent proxy with DNS nameserver"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"run-host"}),": hosting-only without proxy or nameserver"]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"run-mode",children:[(0,i.jsx)(n.code,{children:"run"})," Mode"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"ziti-edge-tunnel run"})," provides a transparent proxy and nameserver. The nameserver may be configured to be authoritative (the default) or recursive with command-line option ",(0,i.jsx)(n.code,{children:"--dns-upstream"}),". ",(0,i.jsx)(n.code,{children:"systemd-resolved"}),", if enabled, automatically configures the Ziti nameserver. You may inspect the configuration with these commands."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"resolvectl dns     # inspect the association of tun device and nameserver\nresolvectl domain  # inspect the configuration of query routing domains\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If any interface has a wildcard routing domain configured, ",(0,i.jsx)(n.code,{children:"ziti-edge-tunnel"})," will also configure its tun with a wildcard routing domain. If no other interface has a wildcard routing domain configured, neither will the ",(0,i.jsx)(n.code,{children:"ziti-edge-tunnel"})," tun."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"# Specify the tun interface address and the subnet to which Service domain names are resolved (default 100.64.0.1/10). The nameserver address is always the tun interface address +1, default is 100.64.0.2.\n--dns-ip-range <ip range>\n"})}),"\n",(0,i.jsxs)(n.h4,{id:"how-does-run-configure-nameservers",children:["How does ",(0,i.jsx)(n.code,{children:"run"})," configure nameservers?"]}),"\n",(0,i.jsx)(o.Ay,{}),"\n",(0,i.jsxs)(n.h4,{id:"system-requirements-for-mode-run",children:["System Requirements for Mode ",(0,i.jsx)(n.code,{children:"run"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"ziti-edge-tunnel run"})," requires Linux capabilities for managing the ",(0,i.jsx)(n.code,{children:"/dev/net/tun"})," device, running ",(0,i.jsx)(n.code,{children:"resolvectl"})," to assign nameservers and domain routes to the tun interface, and running ",(0,i.jsx)(n.code,{children:"ip route"})," to manage IP routes."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["tun device and route management are permitted by passing the ",(0,i.jsx)(n.code,{children:"CAP_NET_ADMIN"})," to the ziti-edge-tunnel process via ",(0,i.jsx)(n.code,{children:"AmbientCapabilities"})," in the systemd service unit."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"systemd-resolved"})," DNS configuration is permitted by a PolKit rule installed with the RPM or DEB package."]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"run-host-mode",children:[(0,i.jsx)(n.code,{children:"run-host"})," Mode"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"ziti-edge-tunnel run-host"})," is a mode for hosting (listening) for services which does provide service intercepts or DNS. Services configured for 'Bind' will be hosted by the tunneler."]}),"\n",(0,i.jsxs)(n.h4,{id:"system-requirements-for-mode-run-host",children:["System Requirements for Mode ",(0,i.jsx)(n.code,{children:"run-host"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"ziti-edge-tunnel run-host"})," does not require elevated privileges or the above device or socket, only network egress to the servers for which it is hosting Services."]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},49584:(e,n,r)=>{r.d(n,{Ay:()=>d,RM:()=>t});var s=r(74848),i=r(28453);const t=[];function o(e){const n={code:"code",em:"em",p:"p",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ziti-edge-tunnel run"})," provides a built-in nameserver for the services it is authorized to dial. The nameserver is automatically configured by ",(0,s.jsx)(n.code,{children:"systemd-resolved"}),", if enabled."]}),"\n",(0,s.jsxs)(n.p,{children:["If ",(0,s.jsx)(n.code,{children:"systemd-resolved"})," is not enabled, you must configure your resolver to query the tunneler's nameserver. Add Ziti's nameserver to the connection manager, e.g., NetworkManager, Netplan, or by directly editing ",(0,s.jsx)(n.code,{children:"/etc/resolv.conf"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"You may configure the system resolver to use the tunneler's nameserver as the first or only nameserver."}),"\n",(0,s.jsxs)(n.p,{children:["When the tunneler nameserver is the first of multiple nameservers and the requested DNS record does not match an authorized service's intercept domain name, it sets the query status to ",(0,s.jsx)(n.code,{children:"REFUSE"}),". This implies that the caller ",(0,s.jsx)(n.em,{children:"should"})," keep trying to resolve the domain name with other nameservers."]}),"\n",(0,s.jsxs)(n.p,{children:["To use the tunneler nameserver as the only nameserver, you must specify an upstream nameserver for recursion: ",(0,s.jsx)(n.code,{children:"ziti-edge-tunnel run --dns-upstream 208.67.222.222"}),". In this configuration, the query status from the upstream nameserver is returned, e.g., ",(0,s.jsx)(n.code,{children:"NXDOMAIN"})," if the domain name is not found in the tunneler nameserver or the upstream nameserver."]}),"\n",(0,s.jsxs)(n.p,{children:["The IP address of the nameserver (default: ",(0,s.jsx)(n.code,{children:"100.64.0.2"}),") is determined by the tunneler's dns-ip-range (default: ",(0,s.jsx)(n.code,{children:"100.64.0.1/10"}),")."]})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>d});var s=r(96540);const i={},t=s.createContext(i);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);