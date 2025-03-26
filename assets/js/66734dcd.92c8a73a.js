"use strict";(self.webpackChunkdocusaurus_3=self.webpackChunkdocusaurus_3||[]).push([[8552],{57096:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>h,default:()=>w,frontMatter:()=>d,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"learn/quickstarts/browzer/example/index","title":"Example Enabling BrowZer","description":"This page will demonstrate adding BrowZer to an existing network that was started using the","source":"@site/docs/learn/quickstarts/browzer/example/index.mdx","sourceDirName":"learn/quickstarts/browzer/example","slug":"/learn/quickstarts/browzer/example/","permalink":"/docs/learn/quickstarts/browzer/example/","draft":false,"unlisted":false,"editUrl":"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/learn/quickstarts/browzer/example/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Example Enabling BrowZer"},"sidebar":"docsSidebar","previous":{"title":"Chrome Origin Trials","permalink":"/docs/learn/quickstarts/browzer/chrome-origin-trials"},"next":{"title":"Starting With Services","permalink":"/docs/learn/quickstarts/services/"}}');var i=r(74848),s=r(28453),o=(r(12329),r(27763)),a=(r(73540),r(59168)),l=r(13554),c=r.n(l);const d={title:"Example Enabling BrowZer"},h=void 0,u={},p=[{value:"Before you Begin",id:"before-you-begin",level:3},{value:"Get a Wildcard Certificate",id:"get-a-wildcard-certificate",level:3},{value:"Enable Certificate Access by Specific Users",id:"enable-certificate-access-by-specific-users",level:3},{value:"Install Ziti",id:"install-ziti",level:3},{value:"Run the Ziti Quickstart",id:"run-the-ziti-quickstart",level:4},{value:"Add WebSocket Support",id:"add-websocket-support",level:3},{value:"Install the Ziti Admin Console (ZAC)",id:"install-the-ziti-admin-console-zac",level:3},{value:"Configure the OIDC Provider",id:"configure-the-oidc-provider",level:3},{value:"Create a BrowZer env File",id:"create-a-browzer-env-file",level:2},{value:"Prepare the Network",id:"prepare-the-network",level:2},{value:"Try It Out",id:"try-it-out",level:3},{value:"If Needed, BrowZer Bootstrapper Logs",id:"if-needed-browzer-bootstrapper-logs",level:3},{value:"BrowZer UI Controls &amp; White Labeling",id:"browzer-ui-controls--white-labeling",level:2},{value:"Cleaning up and Trying Again",id:"cleaning-up-and-trying-again",level:2}];function g(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["This page will demonstrate adding BrowZer to an existing network that was started using the\n",(0,i.jsx)(t.a,{href:"/docs/learn/quickstarts/network/hosted",children:'"host it anywhere" quickstart'}),". It will use Ubuntu Linux as well, if\nyour Linux distribution is different, change the commands accordingly. The August 18 2023 Ziti TV features a full\nwalkthrough and explanation of this whole page. If you are interested in watching a narrated and explained run\nthrough of this page, watch the video and follow along with the doc here."]}),"\n",(0,i.jsx)(c(),{playing:!1,controls:!0,url:"https://youtu.be/ZPkOQbVEnW0?t=816"}),"\n",(0,i.jsx)(t.h3,{id:"before-you-begin",children:"Before you Begin"}),"\n",(0,i.jsxs)(t.p,{children:["This guide will use BASH. If you're using a different shell, it's up to you to translate any commands that don't work\ncorrectly (or run a BASH shell). This guide will expect you have set a variable named ",(0,i.jsx)(t.code,{children:"wildcard_url"})," which represents\nthe root domain you want to enable BrowZer with. For this example, this guide uses and references this value\nfor the ",(0,i.jsx)(t.code,{children:"wildcard_url=browzerexample.demo.openziti.org"}),". ",(0,i.jsx)(a.A,{style:{fontWeight:"bold"},children:"(Make sure you set\nthis value)"})]}),"\n",(0,i.jsxs)(t.p,{children:["This quickstart will use ",(0,i.jsx)(t.a,{href:"https://www.docker.com/",children:"Docker"})," to obtain a wildcard certificate. You'll need to be\nfamiliar with Docker and have it installed to proceed, or you'll need to figure out alternative ways to obtain\na wildcard certificate."]}),"\n",(0,i.jsx)(t.p,{children:"If you already have an existing network, you'll likely want to skim through this document and pick out the\nsections that are relevant to your configuration."}),"\n",(0,i.jsx)(t.p,{children:"If you lose your shell, one or more important variables may be lost. It is probably easiest to start again and follow\nthis guide, or you will need to ensure the variables are reset in the shell."}),"\n",(0,i.jsxs)(t.p,{children:["BrowZer also leverages an OIDC provider. Configuring and picking an OIDC provider are topics largely out of scope\nfor this document. This example will choose to use a provider that can delegate to other providers, hopefully making\nit simple to follow this guide. We'll be using ",(0,i.jsx)(t.a,{href:"https://auth0.com",children:"Auth0"})," in this guide."]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"get-a-wildcard-certificate",children:"Get a Wildcard Certificate"}),"\n",(0,i.jsxs)(t.p,{children:["First, to obtain the a wildcard certificate, I used Docker to run ",(0,i.jsx)(t.a,{href:"https://certbot.eff.org/",children:"Certbot"}),".\nOn the Certbot site there are instructions illustrating how to use Certbot. I chose to use Docker to run Certbot\ninstead of having to install Certbot on the machine. I was able to generate a wildcard certificate from LetsEncrypt for the\n",(0,i.jsx)(t.code,{children:"${wildcard_url}"})," domain using the ",(0,i.jsx)(t.a,{href:"https://letsencrypt.org/docs/challenge-types/#dns-01-challenge",children:"DNS challenge method"}),".  Also notice that Certbot can contact you as a\nreminder that your certificates are expiring. LetsEncrypt certs are only valid for 90 days, if you follow these\ninstructions remember that and plan on rotating the certs often. Set ",(0,i.jsx)(t.code,{children:"your_email"})," as shown below and obtain\ncertificates from LetsEncrypt now:"]}),"\n",(0,i.jsxs)(o.A,{children:[(0,i.jsx)("summary",{children:"Run Certbot via Docker"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'your_email="your.email@someserver.com"\nsudo docker run -it --rm --name certbot \\\n  -v "/etc/letsencrypt:/etc/letsencrypt" \\\n  -v "/var/lib/letsencrypt:/var/lib/letsencrypt" \\\n  certbot/certbot certonly -d "*.${wildcard_url}" \\\n                  --manual \\\n                  --preferred-challenges dns \\\n                  --email "${your_email}" \\\n                  --agree-tos\n'})})]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"enable-certificate-access-by-specific-users",children:"Enable Certificate Access by Specific Users"}),"\n",(0,i.jsx)(t.p,{children:"Certbot will make the files it creates available to root only (a good practice). If you run your network as root, this\nyou'll have no problems but generally, it's a better practice to not run as root when you don't need to. In order to run\nthis example as \"us\" (not the root user) we'll need to grant specific users the ability to read the files."}),"\n",(0,i.jsxs)(t.p,{children:['A flexible way to allow other processes to use/access these files is to make a new group and a new user, that is what\nis shown below. In linux, groups and users are assigned ids. 2171 looks like "ziti" so we\'ll use UID 2171 and GID 2171.\nThe example below will make a new group named ',(0,i.jsx)(t.code,{children:"zitiweb"}),". This group will then be granted ownership of the ",(0,i.jsx)(t.code,{children:"letsencrypt"}),"\nfolder via chown. Changing the ownership of the files to the group will allow any user in that group the ability to read\nthese files so be careful granting this group to users. Then we'll add the user we are currently logged in with to that\ngroup so that \"we\" can see the files for debugging or other purposes. Finally, we'll make a ",(0,i.jsx)(t.code,{children:"ziggy"})," user that is also in\nthis group so that if we want to, we can run processes as ziggy. Please plan accordingly here. This is just a reasonable\nexample to follow to get you going, change it to suit your needs and do not take this example as authoritative. There\nare many ways to solve this problem, it's up to you to pick 'the best' way."]}),"\n",(0,i.jsxs)(o.A,{children:[(0,i.jsx)("summary",{children:"Example Changing LetsEncrypt Permissions"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"sudo groupadd -g 2171 zitiweb\nsudo useradd -u 2171 -M ziggy\nsudo usermod -aG zitiweb ziggy\nsudo usermod -aG zitiweb $USER\nsudo chown -R root:zitiweb /etc/letsencrypt/\nsudo chmod -R g+rX /etc/letsencrypt/\n"})}),(0,i.jsxs)(t.p,{children:["You will want to enable the new group permissions in the current shell. Log out of your current session and log back\nin again. Doing so will enable the new group permission in your shell. After, set the ",(0,i.jsx)(t.code,{children:"wildcard_url"})," variable again.\nOnce set, verify you can access to the certificates:"]}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"ls -l /etc/letsencrypt/live/${wildcard_url}/\n"})}),(0,i.jsx)(t.p,{children:"You should see something similar to:"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"total 8\n-rw-r--r-- 1 root zitiweb 692 Aug 17 21:12 README\nlrwxrwxrwx 1 root zitiweb  56 Aug 17 21:12 cert.pem -> ../../archive/browzerexample.demo.openziti.org/cert1.pem\nlrwxrwxrwx 1 root zitiweb  57 Aug 17 21:12 chain.pem -> ../../archive/browzerexample.demo.openziti.org/chain1.pem\nlrwxrwxrwx 1 root zitiweb  61 Aug 17 21:12 fullchain.pem -> ../../archive/browzerexample.demo.openziti.org/fullchain1.pem\nlrwxrwxrwx 1 root zitiweb  59 Aug 17 21:12 privkey.pem -> ../../archive/browzerexample.demo.openziti.org/privkey1.pem\n"})})]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"install-ziti",children:"Install Ziti"}),"\n",(0,i.jsxs)(t.p,{children:["BrowZer is built around OpenZiti. You'll need a network deployed. Since this guide is using\na legitimate 3rd party verifiable certificate from LetsEncrypt, we'll deploy a brand new network by\nfollowing the steps outlined in the ",(0,i.jsx)(t.a,{href:"/docs/learn/quickstarts/network/hosted",children:'"host it anywhere"'}),"\nquickstart with ",(0,i.jsx)(a.A,{style:{fontWeight:"bold"},children:"one important exception"}),"!\nWe are going to set two variables before running the quickstart to allow the servers to use the LetsEncrypt\nwildcard certificate:"]}),"\n",(0,i.jsxs)(o.A,{children:[(0,i.jsx)("summary",{children:"Setup for Alternative Server Certs"}),(0,i.jsxs)(t.p,{children:["Since we have just obtained some LetsEncrypt certificates, we'll enable OpenZiti with\nAlternative Server Certs ",(0,i.jsx)(t.strong,{children:"immediately"}),"! To do that we'll set two new variables\nintroduced with v0.29.0. Notice that the ",(0,i.jsx)(t.code,{children:"${wildcard_url}"})," variable needs to be set if it's not already set:"]}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:'export ZITI_PKI_ALT_SERVER_CERT="/etc/letsencrypt/live/${wildcard_url}/fullchain.pem"\nexport ZITI_PKI_ALT_SERVER_KEY="/etc/letsencrypt/live/${wildcard_url}/privkey.pem"\n'})})]}),"\n",(0,i.jsx)(t.h4,{id:"run-the-ziti-quickstart",children:"Run the Ziti Quickstart"}),"\n",(0,i.jsxs)(t.p,{children:["With the ",(0,i.jsx)(t.code,{children:"ZITI_PKI_ALT_*"})," environment variables set, we are ready to follow the\n",(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.a,{href:"/docs/learn/quickstarts/network/hosted",children:'"host it anywhere" quickstart'})})," instructions.  Run the quickstart\nand return here when complete."]}),"\n",(0,i.jsxs)(o.A,{children:[(0,i.jsx)("summary",{children:"Verify that Ziti is Listening"}),(0,i.jsxs)(t.p,{children:["After completing the quickstart, you should be able to access the controller at both the alternate server cert url.\nNotice there's no need for 'insecure' (-sk) curl mode for the",(0,i.jsx)(t.code,{children:"${wildcard_url}"})," URL:"]}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"curl https://ctrl.${wildcard_url}:${ZITI_CTRL_EDGE_ADVERTISED_PORT}\n"})}),(0,i.jsxs)(t.p,{children:["and we should be able to curl to the non-alternative server url. Note for this we need to use ",(0,i.jsx)(t.code,{children:"-sk"})," since this will\nbe the self-signed PKI endpoint:"]}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"curl -sk https://${ZITI_CTRL_EDGE_ADVERTISED_ADDRESS}:${ZITI_CTRL_EDGE_ADVERTISED_PORT}\n"})})]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"add-websocket-support",children:"Add WebSocket Support"}),"\n",(0,i.jsxs)(t.p,{children:["BrowZer operates in a web browser. For it to connect to a router, BrowZer will attempt to connect to the router\nusing a ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/WebSocket",children:"web socket"}),". We'll need to provision an edge router on the network that supports\n",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/WebSocket",children:"web sockets"}),". We will do that by modifying the configuration of the router provisioned in the quickstart."]}),"\n",(0,i.jsxs)(o.A,{children:[(0,i.jsx)("summary",{children:"Update edge router for WebSocket Support"}),(0,i.jsxs)(t.p,{children:["After completing the quickstart, you will have an edge router configuration file in the user's home directory.\nUse your favorite editor, such as ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Vim_(text_editor)",children:(0,i.jsx)(t.code,{children:"vim"})})," to edit the file:"]}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"vi $ZITI_HOME/${ZITI_NETWORK}-edge-router.yaml\n"})}),(0,i.jsxs)(t.p,{children:['Locate the "binding" section, and add a section that looks like this. Make sure to change the ',(0,i.jsx)(t.code,{children:"address"})," and ",(0,i.jsx)(t.code,{children:"advertise"}),"\nfields accordingly to fit your ",(0,i.jsx)(t.code,{children:"${wildcard_url}"})," value:"]}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"  - binding: edge\n    address: wss:0.0.0.0:8447\n    options:\n      advertise: ws.browzerexample.demo.openziti.org:8447\n      connectTimeoutMs: 5000\n      getSessionTimeout: 60\n"})})]}),"\n",(0,i.jsxs)(o.A,{children:[(0,i.jsx)("summary",{children:"Restart the Edge Router"}),(0,i.jsx)(t.p,{children:"After updating the router's configuration file you'll need to restart the router:"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"sudo systemctl restart ziti-router\n"})})]}),"\n",(0,i.jsxs)(o.A,{children:[(0,i.jsx)("summary",{children:"Verify the edge router is Websocket Enabled"}),(0,i.jsx)(t.p,{children:"After the router restarts you'll be able to verify the router is properly configured. The following curl statement\nshould succeed and return a 404 message similar to the one shown below. Note port 8447 is used, if you change this\nport you will obviously need to change the port number to the one you chose:"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"curl https://ws.${wildcard_url}:8447\n"})})]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"install-the-ziti-admin-console-zac",children:"Install the Ziti Admin Console (ZAC)"}),"\n",(0,i.jsxs)(t.p,{children:["In this example, we will be protecting the Ziti Administration Console (ZAC) with BrowZer. That means we'll need to\ninstall ZAC first. Follow ",(0,i.jsx)(t.a,{href:"/docs/learn/quickstarts/zac/",children:"the ZAC install guide"}),".\nAfter installing ZAC, continue."]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"configure-the-oidc-provider",children:"Configure the OIDC Provider"}),"\n",(0,i.jsxs)(t.p,{children:["As stated in the ",(0,i.jsx)(t.a,{href:"#before-you-begin",children:'"Before You Begin"'})," section, we will be using Auth0 for this quickstart. Lett's\nconfigure Auth0 to be the BrowZer OIDC provider."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Begin by signing up and authenticating to Auth0."}),"\n",(0,i.jsxs)(t.li,{children:["Follow the 'vanillajs' quickstart from Auth0: ",(0,i.jsx)(t.a,{href:"https://auth0.com/docs/quickstart/spa/vanillajs/interactive",children:"https://auth0.com/docs/quickstart/spa/vanillajs/interactive"})]}),"\n",(0,i.jsxs)(t.li,{children:["Configure the Callback URLs and Logout URLs. Replace the values accordingly, for me, I used:\nthe value ",(0,i.jsx)(t.code,{children:"https://*.browzerexample.demo.openziti.org:8446"})]}),"\n"]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"create-a-browzer-env-file",children:"Create a BrowZer env File"}),"\n",(0,i.jsx)(t.p,{children:"At this point we have a functioning network. We're ready to start BrowZer-specific configuration.\nFirst we need to decide/find an OIDC provider."}),"\n",(0,i.jsxs)(t.p,{children:["Set a shell variable named ",(0,i.jsx)(t.code,{children:"AUTH0_DOMAIN"}),' and set it to the value shown on the "Basic Information" page in Auth0. Then\nset a shell variable named ',(0,i.jsx)(t.code,{children:"AUTHO_CLIENTID"}),". For me, this looked like this:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"AUTH0_DOMAIN=dev-b2q0t23rxctngxka.us.auth0.com\nAUTH0_CLIENTID=mKWvp7xJHWxHKPf4eol4VwZxRCmdJIMy\n"})}),"\n",(0,i.jsxs)(o.A,{children:[(0,i.jsx)("summary",{children:"Generate the BrowZer.env File"}),(0,i.jsx)(t.admonition,{title:"Warning",type:"caution",children:(0,i.jsx)(t.p,{children:"Make sure all variables listed below are set in your shell before running"})}),(0,i.jsx)(t.p,{children:"Now copy and paste this command to generate the browzer.env file."}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:'export NODE_ENV=production\nexport ZITI_BROWZER_BOOTSTRAPPER_LOGLEVEL=debug\nexport ZITI_BROWZER_BOOTSTRAPPER_HOST=browzer.${wildcard_url}\nexport ZITI_BROWZER_RUNTIME_LOGLEVEL=debug\nexport ZITI_BROWZER_RUNTIME_HOTKEY=alt+F12\nexport ZITI_CONTROLLER_HOST=ctrl.${wildcard_url}\nexport ZITI_CONTROLLER_PORT=${ZITI_CTRL_EDGE_ADVERTISED_PORT}\nexport ZITI_BROWZER_BOOTSTRAPPER_SCHEME=https\nexport ZITI_BROWZER_BOOTSTRAPPER_CERTIFICATE_PATH=/etc/letsencrypt/live/${wildcard_url}/fullchain.pem\nexport ZITI_BROWZER_BOOTSTRAPPER_KEY_PATH=/etc/letsencrypt/live/${wildcard_url}/privkey.pem\nexport ZITI_BROWZER_BOOTSTRAPPER_LISTEN_PORT=8446\nexport ZITI_BROWZER_SERVICE=brozac\nexport ZITI_BROWZER_VHOST=${ZITI_BROWZER_SERVICE}.${wildcard_url}\nexport ZITI_BROWZER_OIDC_URL=https://${AUTH0_DOMAIN}\nexport ZITI_BROWZER_CLIENT_ID=${AUTH0_CLIENTID}\n\nexport ZITI_BROWZER_BOOTSTRAPPER_TARGETS="$(cat <<HERE\n  {\n    "targetArray": [\n      {\n        "vhost": "${ZITI_BROWZER_VHOST}",\n        "service": "${ZITI_BROWZER_SERVICE}",\n        "path": "/",\n        "scheme": "http",\n        "idp_issuer_base_url": "${ZITI_BROWZER_OIDC_URL}",\n        "idp_client_id": "${ZITI_BROWZER_CLIENT_ID}"\n      }\n    ]\n  }\nHERE\n)"\n\ncat > $ZITI_HOME/browzer.env << HERE\nZITI_BROWZER_BOOTSTRAPPER_HOST="${ZITI_BROWZER_BOOTSTRAPPER_HOST}"\nZITI_BROWZER_BOOTSTRAPPER_LOGLEVEL="${ZITI_BROWZER_BOOTSTRAPPER_LOGLEVEL}"\nZITI_BROWZER_RUNTIME_LOGLEVEL="${ZITI_BROWZER_RUNTIME_LOGLEVEL}"\nZITI_BROWZER_RUNTIME_HOTKEY="${ZITI_BROWZER_RUNTIME_HOTKEY}"\nZITI_CONTROLLER_HOST="${ZITI_CONTROLLER_HOST}"\nZITI_CONTROLLER_PORT="${ZITI_CONTROLLER_PORT}"\nZITI_BROWZER_BOOTSTRAPPER_SCHEME="${ZITI_BROWZER_BOOTSTRAPPER_SCHEME}"\nZITI_BROWZER_BOOTSTRAPPER_CERTIFICATE_PATH="${ZITI_BROWZER_BOOTSTRAPPER_CERTIFICATE_PATH}"\nZITI_BROWZER_BOOTSTRAPPER_KEY_PATH="${ZITI_BROWZER_BOOTSTRAPPER_KEY_PATH}"\nZITI_BROWZER_BOOTSTRAPPER_LISTEN_PORT="${ZITI_BROWZER_BOOTSTRAPPER_LISTEN_PORT}"\nZITI_BROWZER_BOOTSTRAPPER_TARGETS=\'${ZITI_BROWZER_BOOTSTRAPPER_TARGETS}\'\nNODE_EXTRA_CA_CERTS=node_modules/node_extra_ca_certs_mozilla_bundle/ca_bundle/ca_intermediate_root_bundle.pem\nHERE\necho browzer env file written to: $ZITI_HOME/browzer.env\n'})})]}),"\n",(0,i.jsxs)(o.A,{children:[(0,i.jsx)("summary",{children:"Inspect the browzer.env File"}),(0,i.jsx)(t.p,{children:"You should see something like:"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"browzer env file written to: /home/ubuntu/.ziti/quickstart/ip-172-31-47-200/browzer.env\n"})}),(0,i.jsx)(t.p,{children:"Open this file up and visually inspect it to verify the file seems to be full, complete and not missing anything\nobvious. If you had verified all the variables used in the previous command were set, this file will be correctly\ncreated."})]}),"\n",(0,i.jsxs)(o.A,{children:[(0,i.jsx)("summary",{children:"Install BrowZer"}),(0,i.jsxs)(t.p,{children:["BrowZer is ready to be installed. The ",(0,i.jsx)(t.a,{href:"/docs/learn/quickstarts/browzer/",children:"main BrowZer page"})," has two sections showing you how to\ninstall BrowZer either by ",(0,i.jsx)(t.a,{href:"/docs/learn/quickstarts/browzer/#cloning-from-github",children:"cloning from GitHub"}),"\nor by ",(0,i.jsx)(t.a,{href:"/docs/learn/quickstarts/browzer/#running-via-docker",children:"Running via Docker"}),'. I have\nused the "clone" approach to run my BrowZer (and ZAC).']}),(0,i.jsx)(t.p,{children:"Follow one of those methods and ensure BrowZer is up and running."}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"browzer env file written to: /home/ubuntu/.ziti/quickstart/ip-172-31-47-200/browzer.env\n"})}),(0,i.jsx)(t.p,{children:"Open this file up and visually inspect it to verify the file seems to be full, complete and not missing anything\nobvious. If you had verified all the variables used in the previous command were set, this file will be correctly\ncreated."})]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"prepare-the-network",children:"Prepare the Network"}),"\n",(0,i.jsx)(t.p,{children:"For the following steps, make sure you have all the variables set and make sure you have logged into the controller:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"ziti edge login -u $ZITI_USER -p $ZITI_PWD -y ${ZITI_CTRL_EDGE_ADVERTISED_ADDRESS}:${ZITI_CTRL_EDGE_ADVERTISED_PORT}\n"})}),"\n",(0,i.jsxs)(o.A,{children:[(0,i.jsx)("summary",{children:"Configure the External JWT Signer and Auth Policy"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:'echo "configuring OpenZiti for BrowZer..."\nziti_object_prefix=browzer-auth0\nissuer=$(curl -s ${ZITI_BROWZER_OIDC_URL}/.well-known/openid-configuration | jq -r .issuer)\njwks=$(curl -s ${ZITI_BROWZER_OIDC_URL}/.well-known/openid-configuration | jq -r .jwks_uri)\n\necho "OIDC issuer   : $issuer"\necho "OIDC jwks url : $jwks"\n\next_jwt_signer=$(ziti edge create ext-jwt-signer "${ziti_object_prefix}-ext-jwt-signer" "${issuer}" --jwks-endpoint "${jwks}" --audience "${ZITI_BROWZER_CLIENT_ID}" --claims-property email)\necho "ext jwt signer id: $ext_jwt_signer"\n\nauth_policy=$(ziti edge create auth-policy "${ziti_object_prefix}-auth-policy" --primary-ext-jwt-allowed --primary-ext-jwt-allowed-signers ${ext_jwt_signer})\necho "auth policy id: $auth_policy"\n'})}),(0,i.jsxs)(t.p,{children:["After running the commands listed above, you should see output that confirms an ",(0,i.jsx)(t.code,{children:"ext-jwt-signer"})," and ",(0,i.jsx)(t.code,{children:"auth-policy"})," were\ncreated successfully. It should look similar to what is shown below. Ensure the id's for the signer and auth policy\nhave some value and are not blank:"]}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"configuring OpenZiti for BrowZer...\nOIDC issuer   : https://dev-b2q0t23rxctngxka.us.auth0.com/\nOIDC jwks url : https://dev-b2q0t23rxctngxka.us.auth0.com/.well-known/jwks.json\next jwt signer id: 23sRIAoaPqh9RDoFO8iwGZ\nauth policy id: 6EbCIB8ke40SI8eQxc3O0X\n"})})]}),"\n",(0,i.jsxs)(o.A,{children:[(0,i.jsx)("summary",{children:"Add a Service to Access an HTTP Web App"}),(0,i.jsx)(t.p,{children:"To enable access to the ZAC using BrowZer we need to make a service. Things to notice here are that we are using the\nHTTP port (the BrowZer Bootstrapper will provide HTTPS) and we're using the default port of 1408. Ensure the variables\nreferenced are all set accordingly and then copy/paste these commands:"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:'intercept_address="${ZITI_BROWZER_SERVICE}.ziti"\nintercept_port=80\noffload_address=127.0.0.1\noffload_port=1408\n\nfunction createService {\nziti edge create config ${ZITI_BROWZER_SERVICE}.host.config host.v1 \'{"protocol":"tcp", "address":"\'"${offload_address}"\'", "port":\'${offload_port}\'}\'\nziti edge create config ${ZITI_BROWZER_SERVICE}.int.config  intercept.v1 \'{"protocols":["tcp"],"addresses":["\'"${intercept_address}"\'"], "portRanges":[{"low":\'${intercept_port}\', "high":\'${intercept_port}\'}]}\'\nziti edge create service "${ZITI_BROWZER_SERVICE}" --configs "${ZITI_BROWZER_SERVICE}.host.config","${ZITI_BROWZER_SERVICE}.int.config"\nziti edge create service-policy "${ZITI_BROWZER_SERVICE}.bind" Bind --service-roles "@${ZITI_BROWZER_SERVICE}" --identity-roles "#${ZITI_BROWZER_SERVICE}.binders"\nziti edge create service-policy "${ZITI_BROWZER_SERVICE}.dial" Dial --service-roles "@${ZITI_BROWZER_SERVICE}" --identity-roles "#${ZITI_BROWZER_SERVICE}.dialers"\n}\n\nfunction deleteService {\nziti edge delete config  where \'name contains "\'"${ZITI_BROWZER_SERVICE}"\'."\'\nziti edge delete service where \'name = "\'"${ZITI_BROWZER_SERVICE}"\'"\'\nziti edge delete sp      where \'name contains "\'"${ZITI_BROWZER_SERVICE}"\'."\'\n}\n\ncreateService\n\n'})}),(0,i.jsx)(t.p,{children:"Verify the commands all succeed (no errors shown) and the output looks similar to this after running:"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"New config brozac.host.config created with id: 5i85SF4pnehz1LEjJNvCtH\nNew config brozac.int.config created with id: 2p8xuev7Vb9NzuZoEGi4tq\nNew service brozac created with id: 5Ry0BOMr6VJGQjF51LdDxv\nNew service policy brozac.bind created with id: 8EoBqEhKeIKQLQxY5zr3Z\nNew service policy brozac.dial created with id: 1TUzPYdN3GpGdA4k9Uauv3\n"})})]}),"\n",(0,i.jsxs)(o.A,{children:[(0,i.jsx)("summary",{children:"Associate/Update Identities with the Auth Policy"}),(0,i.jsxs)(t.p,{children:["Now we need to associate the claims presented by the OIDC provider with one or more identities inside the\nnetwork. Since we have decided to use Auth0, in the previous step we were able to create an ",(0,i.jsx)(t.code,{children:"ext-jwt-signer"})," and\nreference the claim named ",(0,i.jsx)(t.code,{children:"email"}),". Since we chose Auth0, I know that it will provide this particular claim to OpenZiti\nafter the user logs into the OIDC provider. If your OIDC provider doesn't provide ",(0,i.jsx)(t.code,{children:"email"}),", you'll have to\nlearn/explore/understand how the OIDC provider you're using works. It's out of scope of this document to provide\nthat sort of insight. Set a variable named ",(0,i.jsx)(t.code,{children:"ZITI_BROWZER_IDENTITIES"})," and assign it an email address you plan to use:"]}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:'ZITI_BROWZER_IDENTITIES="clint.dovholuk@company.name"\n'})}),(0,i.jsxs)(t.p,{children:["After create a ",(0,i.jsx)(t.strong,{children:"space"})," delimited list (one value/email is fine too), copy and paste the following command:"]}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:'echo "creating users specified by ZITI_BROWZER_IDENTITIES: ${ZITI_BROWZER_IDENTITIES}"\nfor id in ${ZITI_BROWZER_IDENTITIES}; do\nziti edge create identity "${id}" --auth-policy ${auth_policy} --external-id "${id}" -a "${ZITI_BROWZER_SERVICE}.dialers"\ndone\n\n#ziti edge update identity "${id}" -a $(ziti edge list identities \'name="\'${id}\'"\' -j | jq -r \'.data[].roleAttributes | map(. // "") | @csv\'),"${ZITI_BROWZER_SERVICE}.dialers"\nziti edge update identity "${ZITI_ROUTER_NAME}" -a "${ZITI_BROWZER_SERVICE}.binders"\n'})}),(0,i.jsx)(t.p,{children:"After you run that command you should see output looking similar to this:"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"creating users specified by ZITI_BROWZER_IDENTITIES: clint.dovholuk@company.name\nNew identity clint.dovholuk@company.name created with id: hmnQByTn3\n"})})]}),"\n",(0,i.jsx)(t.h3,{id:"try-it-out",children:"Try It Out"}),"\n",(0,i.jsx)(t.p,{children:"This is it! This is the moment we've been working for.  Copy and paste this command to echo to the screen the url to\ntest out and let's see ZAC protected by BrowZer!!!"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:'echo " "\necho "now go to: https://${ZITI_BROWZER_VHOST}:${ZITI_BROWZER_BOOTSTRAPPER_LISTEN_PORT} and see your ${ZITI_BROWZER_SERVICE}!"\necho " "\n'})}),"\n",(0,i.jsx)(t.h3,{id:"if-needed-browzer-bootstrapper-logs",children:"If Needed, BrowZer Bootstrapper Logs"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"journalctl -fu browzer-bootstrapper\n"})}),"\n",(0,i.jsx)(t.h2,{id:"browzer-ui-controls--white-labeling",children:"BrowZer UI Controls & White Labeling"}),"\n",(0,i.jsx)(t.p,{children:"By default, BrowZer renders some things in the browser-client that you may wish to change, or disable."}),"\n",(0,i.jsx)(t.p,{children:"These items include:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"whether or not the browZer button appears"}),"\n",(0,i.jsx)(t.li,{children:"the logo in the browZer button if it is present"}),"\n",(0,i.jsx)(t.li,{children:"whether or not the bootstrapping splash text appears"}),"\n",(0,i.jsx)(t.li,{children:"the text of the bootstrapping splash text if it is present"}),"\n",(0,i.jsx)(t.li,{children:"whether or not the the browZer toast messages appear"}),"\n",(0,i.jsx)(t.li,{children:"whether or not the the browZer throughput chart appears"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["You can control all this by using the ",(0,i.jsx)(t.code,{children:"ZITI_BROWZER_WHITELABEL"})," env var."]}),"\n",(0,i.jsx)(t.p,{children:"For example:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:'export ZITI_BROWZER_WHITELABEL="$(cat <<HERE\n{\n    "enable": {\n        "browZerButton":            false,\n        "browZerToastMessages":     true,\n        "browZerSplashScreen":      true,\n        "browZerThroughputChart":   false\n    },\n    "branding": {\n        "browZerName":              "WebCloak",\n        "browZerSplashMessage":     "Hang Tight while we Bootstrap your private web app",\n        "browZerButtonIconSvgUrl":  "https://netfoundry.io/wp-content/uploads/2024/07/netfoundry-icon-color.svg",\n        "browZerCSS":               "https://<YOUR_BOOTSTRAPPER_HOST>/ziti-browzer-css.css"\n    }\n}\nHERE\n)"\n'})}),"\n",(0,i.jsx)(t.p,{children:"Where:"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"enable.browZerButton"})," is either ",(0,i.jsx)(t.code,{children:"true"})," or ",(0,i.jsx)(t.code,{children:"false"})]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"enable.browZerToastMessages"})," is either ",(0,i.jsx)(t.code,{children:"true"})," or ",(0,i.jsx)(t.code,{children:"false"})]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"enable.browZerSplashScreen"})," is either ",(0,i.jsx)(t.code,{children:"true"})," or ",(0,i.jsx)(t.code,{children:"false"})]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"enable.browZerThroughputChart"})," is either ",(0,i.jsx)(t.code,{children:"true"})," or ",(0,i.jsx)(t.code,{children:"false"})]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"branding.browZerName"})," is an arbitrary name you chose."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"branding.browZerSplashMessage"})," is arbitrary text you chose."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"branding.browZerButtonIconSvgUrl"})," is the URL of the logo SVG you want rendered inside the browZer button."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"branding.browZerCSS"})," must be specified, but cannot be set to an arbitrary URL at this time."]}),"\n",(0,i.jsx)(t.h2,{id:"cleaning-up-and-trying-again",children:"Cleaning up and Trying Again"}),"\n",(0,i.jsx)(t.p,{children:"To clean everything up and try it all over (if you need to) run these commands:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"sudo systemctl stop browzer-bootstrapper\nsudo systemctl stop ziti-controller \nsudo systemctl stop ziti-router\nsudo rm -rf $HOME/.ziti/quickstart\nunsetZitiEnv\ncd \n"})})]})}function w(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}},59168:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var n=r(74848);function i(e){const{children:t,style:r}=e;return(0,n.jsx)("span",{style:r,children:(0,n.jsx)("span",{style:{color:"var(--ifm-color-primary)"},children:t})})}}}]);