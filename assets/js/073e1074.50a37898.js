"use strict";(self.webpackChunkdocusaurus_3=self.webpackChunkdocusaurus_3||[]).push([[2498],{87698:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"learn/quickstarts/browzer/index","title":"BrowZer","description":"BrowZer is a set of technologies which is capable of bootstrapping zero trust connectivity entirely in a browser,","source":"@site/docs/learn/quickstarts/browzer/index.mdx","sourceDirName":"learn/quickstarts/browzer","slug":"/learn/quickstarts/browzer/","permalink":"/docs/learn/quickstarts/browzer/","draft":false,"unlisted":false,"editUrl":"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/learn/quickstarts/browzer/index.mdx","tags":[],"version":"current","lastUpdatedAt":1743027175000,"frontMatter":{"title":"BrowZer"},"sidebar":"docsSidebar","previous":{"title":"Console","permalink":"/docs/learn/quickstarts/zac/"},"next":{"title":"Chrome Origin Trials","permalink":"/docs/learn/quickstarts/browzer/chrome-origin-trials"}}');var r=n(74848),o=n(28453),s=n(27763);const a={title:"BrowZer"},l=void 0,c={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"OIDC Prerequisites",id:"oidc-prerequisites",level:3},{value:"Configuring the Network",id:"configuring-the-network",level:2},{value:"Creating the External JWT Signer",id:"creating-the-external-jwt-signer",level:3},{value:"Creating the Authentication Policy",id:"creating-the-authentication-policy",level:3},{value:"Associate Identities to the Authentication Policy",id:"associate-identities-to-the-authentication-policy",level:3},{value:"Running the Ziti BrowZer Bootstrapper",id:"running-the-ziti-browzer-bootstrapper",level:2},{value:"Cloning From GitHub",id:"cloning-from-github",level:2},{value:"Running via Docker",id:"running-via-docker",level:2},{value:"Example Docker Command",id:"example-docker-command",level:3},{value:"Enabling BrowZer with Systemd",id:"enabling-browzer-with-systemd",level:2}];function h(e){const t={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["BrowZer is a set of technologies which is capable of bootstrapping zero trust connectivity entirely in a browser,\nand without the need to install any client-side software! To enable BrowZer on your network the ",(0,r.jsx)(t.code,{children:"ziti-browzer-bootstrapper"}),"\nwill need to be deployed. This pages outlines the steps needed to deploy BrowZer to your own overlay. For an example\nof enabling BrowZer, see the ",(0,r.jsx)(t.a,{href:"/docs/learn/quickstarts/browzer/example/",children:"Example Enabling BrowZer"})," subpage showing the steps in more detail."]}),"\n",(0,r.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(t.p,{children:"To deploy and enable BrowZer on your network, you will need to have:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"an OpenZiti Overlay Network is available and has been configured with alternative server certs"}),"\n",(0,r.jsx)(t.li,{children:"an OIDC Provider and the ability to define applications/clients for the provider"}),"\n",(0,r.jsx)(t.li,{children:"a wildcard certificate from a 3rd party verifiable CA"}),"\n",(0,r.jsxs)(t.li,{children:['you have signed up with Chrome\'s "origin trials" to allow the BrowZer bootstrapper to automatically enable\n',(0,r.jsx)(t.a,{href:"https://v8.dev/blog/jspi",children:"JSPI"})," for your BrowZer users. See ",(0,r.jsx)(t.a,{href:"/docs/learn/quickstarts/browzer/chrome-origin-trials",children:"the chrome-origin-trials"}),"\nfor more detail"]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"oidc-prerequisites",children:"OIDC Prerequisites"}),"\n",(0,r.jsxs)(t.p,{children:["Enabling BrowZer will require configuring the network to delegate authentication to an OIDC provider. Every OIDC\nprovider is different and understanding OIDC flows is beyond this guide. There are\n",(0,r.jsx)(t.a,{href:"https://www.oauth.com/oauth2-servers/client-registration/client-id-secret/",children:"numerous"}),",\n",(0,r.jsx)(t.a,{href:"https://developer.okta.com/blog/2019/10/21/illustrated-guide-to-oauth-and-oidc",children:"excellent"}),"\n",(0,r.jsx)(t.a,{href:"https://developers.google.com/identity/openid-connect/openid-connect",children:"posts"})," to find and read about OIDC. The OIDC\nconcepts you will want to understand are:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"how to create/obtain the client id the network will use"}),"\n",(0,r.jsx)(t.li,{children:"how to learn/find/discover the OIDC discovery endpoint"}),"\n",(0,r.jsxs)(t.li,{children:["what ",(0,r.jsx)(t.code,{children:"audience"})," the OIDC provider will add to the bearer token"]}),"\n",(0,r.jsxs)(t.li,{children:["what field or ",(0,r.jsx)(t.code,{children:"claim"})," the OIDC provider will add to the bearer token which will be used to locate matching identities"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"configuring-the-network",children:"Configuring the Network"}),"\n",(0,r.jsx)(t.p,{children:"With the OIDC information in hand, the next step is to actually configure OpenZiti to allow the delegation of authentication.\nTo do this you will need to:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["create an ",(0,r.jsx)(t.a,{href:"/docs/learn/core-concepts/security/authentication/external-jwt-signers",children:"external jwt signer"})]}),"\n",(0,r.jsxs)(t.li,{children:["create an ",(0,r.jsx)(t.a,{href:"../../../../docs/learn/core-concepts/security/authentication/authentication-policies",children:"authentication policy"}),"\nand associate the external jwt signer"]}),"\n",(0,r.jsx)(t.li,{children:"associate identities with the authentication policy delegating the authentication to the specified OIDC provider"}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"creating-the-external-jwt-signer",children:"Creating the External JWT Signer"}),"\n",(0,r.jsxs)(t.p,{children:["To create the external jwt signer, you will need to have the OIDC discovery endpoint and the ",(0,r.jsx)(t.code,{children:"audience"})," values handy.\nUsing the OIDC discovery endpoint, discover the ",(0,r.jsx)(t.code,{children:"issuer"})," and ",(0,r.jsx)(t.code,{children:"jwks_uri"})," from the discovery endpoint. Using the ",(0,r.jsx)(t.code,{children:"ziti"}),"\nCLI, create the external jwt. Shown below is a ",(0,r.jsx)(t.code,{children:"bash"})," example. Replace the values accordingly. Capture the returned\nidentity, it will be necessary after creating the external jwt signer:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-text",children:'issuer="__issuer_id_here__"\njwks_uri="__jwks_uri_here__"\naudience="__audience_here__"\nclaims_property="email"\nziti edge create ext-jwt-signer \\\n  "ext-jwt-signer-name-here" "${issuer}" \\\n  --jwks-endpoint "${jwks_uri}" \\\n  --audience "${audience}" \\\n  --claims-property ${claims_property}\n'})}),"\n",(0,r.jsx)(t.h3,{id:"creating-the-authentication-policy",children:"Creating the Authentication Policy"}),"\n",(0,r.jsxs)(t.p,{children:["Authentication policies configure the network to delegate authentication one or more OIDC providers. To\ncreate the authentication policy you only need the id of the external jwt signer (from above). Shown below is a ",(0,r.jsx)(t.code,{children:"bash"}),"\nexample. Replace the values accordingly. Capture the returned identity, it will be necessary after creating the external\njwt signer:"]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["Shown below is an example creating a ",(0,r.jsx)(t.strong,{children:"new"})," authentication policy and allowing it to be used for ",(0,r.jsx)(t.strong,{children:"primary"}),"\nauthentication. This means the associated external jwt signer (OIDC provider) is allowed to provide a document that\nOpenZiti will validate, and use for authentication. You can also choose to modify the ",(0,r.jsx)(t.strong,{children:"default"})," policy if you decide\nto. You do not need to create a ",(0,r.jsx)(t.strong,{children:"new"})," policy. If this is your first time using BrowZer it is recommended you start\nwith a new authentication policy, as shown. Once you understand how authentication policies work and how BrowZer works,\nthen you can make an informed decision if you want to modify the default authentication policy or not"]})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-text",children:'ext_jwt_signer="__ext_jwt_signer_id_from_above__"\nziti edge create auth-policy \\\n  "auth-policy-name-here" \\\n  --primary-ext-jwt-allowed \\\n  --primary-ext-jwt-allowed-signers ${ext_jwt_signer}\n'})}),"\n",(0,r.jsx)(t.h3,{id:"associate-identities-to-the-authentication-policy",children:"Associate Identities to the Authentication Policy"}),"\n",(0,r.jsxs)(t.p,{children:["With an auth policy created and associated to the external jwt signer, you are now ready to create or modify identities\nto use this new authentication policy. To allow a given identity to be enabled for BrowZer, you will need to first\nupdate (or create) the identity with an ",(0,r.jsx)(t.code,{children:"externalId"})," and you will need to associate the identity with the authentication\npolicy."]}),"\n",(0,r.jsxs)(t.p,{children:["In this example, a new identity will be created and the associated OIDC provider will be expected to provide a bearer\ntoken which has an ",(0,r.jsx)(t.code,{children:"email"})," claim with the value ",(0,r.jsx)(t.code,{children:"ziggy@openziti.io"})," and names the identity ",(0,r.jsx)(t.code,{children:"openziti_ziggy"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-text",children:'identity_name="openziti_ziggy"\nauth_policy="__auth_policy_id_from_above__"\nexternal_id="ziggy@openziti.io"\nziti edge create identity "${identity_name}" \\\n  --auth-policy ${auth_policy} \\\n  --external-id "${external_id}" \\\n  -a docker.whale.dialers\n'})}),"\n",(0,r.jsx)(t.h2,{id:"running-the-ziti-browzer-bootstrapper",children:"Running the Ziti BrowZer Bootstrapper"}),"\n",(0,r.jsxs)(t.p,{children:["Running the Ziti BrowZer Bootstrapper can be done directly using NodeJS or with a container engine such as Docker. Either\nway you choose to run it, you will need to establish some environment variables. If you are using NodeJS, you'll ",(0,r.jsx)(t.code,{children:"export"}),"\nthem. To run using Docker, you can either reference the environment variables (shown below) or use an ",(0,r.jsx)(t.code,{children:".env"})," file."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"NODE_ENV"}),": controls if the environment is ",(0,r.jsx)(t.code,{children:"production"})," or ",(0,r.jsx)(t.code,{children:"development"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"ZITI_BROWZER_RUNTIME_LOGLEVEL"}),": the log level for the Ziti BrowZer Runtime (ZBR) to use. ",(0,r.jsx)(t.code,{children:"trace|debug|info|warn|error"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"ZITI_BROWZER_RUNTIME_HOTKEY"}),": the hotkey to activate the BrowZer settings dialog modal. default: alt+F12"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"ZITI_CONTROLLER_HOST"}),': the "alternative" address for the OpenZiti controller. example: ',(0,r.jsx)(t.code,{children:"ctrl.openziti.io"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"ZITI_CONTROLLER_PORT"}),": the port to find the OpenZiti controller at. example: ",(0,r.jsx)(t.code,{children:"8441"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"ZITI_BROWZER_BOOTSTRAPPER_LOGLEVEL"}),": the log level for the ziti-browzer-bootstrapper to log at. ",(0,r.jsx)(t.code,{children:"silly|debug|info|warn|error"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"ZITI_BROWZER_BOOTSTRAPPER_HOST"}),": the address the ziti-browzer-bootstrapper is available at. example: ",(0,r.jsx)(t.code,{children:"browzer.openziti.io"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"ZITI_BROWZER_BOOTSTRAPPER_LISTEN_PORT"}),": the port the ziti-browzer-bootstrapper is available at. example: ",(0,r.jsx)(t.code,{children:"443"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"ZITI_BROWZER_BOOTSTRAPPER_SCHEME"}),": the scheme to use to access the ziti-browzer-bootstrapper. ",(0,r.jsx)(t.code,{children:"http|https"})," (https by default)"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"ZITI_BROWZER_BOOTSTRAPPER_CERTIFICATE_PATH"}),": the path to the certificate the ziti-browzer-bootstrapper presents to clients"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"ZITI_BROWZER_BOOTSTRAPPER_KEY_PATH"}),": the associated key for the ZITI_BROWZER_BOOTSTRAPPER_CERTIFICATE_PATH"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"ZITI_BROWZER_RUNTIME_ORIGIN_TRIAL_TOKEN"}),": the token obtained from the origin trials prerequisite"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"ZITI_BROWZER_BOOTSTRAPPER_TARGETS"}),": A json block representing the services to enable BrowZer for."]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-text",children:"      NODE_ENV: production\n      ZITI_BROWZER_RUNTIME_LOGLEVEL: debug\n      ZITI_BROWZER_RUNTIME_HOTKEY: alt+F12\n      ZITI_CONTROLLER_HOST: ${ZITI_CTRL_EDGE_ALT_ADVERTISED_ADDRESS}\n      ZITI_CONTROLLER_PORT: ${ZITI_CTRL_EDGE_ADVERTISED_PORT}\n      ZITI_BROWZER_BOOTSTRAPPER_LOGLEVEL: debug\n      ZITI_BROWZER_BOOTSTRAPPER_HOST: ${ZITI_BROWZER_HTTP_AGENT_ADDRESS}\n      ZITI_BROWZER_BOOTSTRAPPER_LISTEN_PORT: ${ZITI_BROWZER_BOOTSTRAPPER_LISTEN_PORT}\n      ZITI_BROWZER_BOOTSTRAPPER_SCHEME: https\n      ZITI_BROWZER_BOOTSTRAPPER_CERTIFICATE_PATH: /etc/letsencrypt/live/your.fqdn.here/fullchain.pem\n      ZITI_BROWZER_BOOTSTRAPPER_KEY_PATH: /etc/letsencrypt/live/your.fqdn.here/privkey.pem\n      ZITI_BROWZER_RUNTIME_ORIGIN_TRIAL_TOKEN=__the_token_you_received_from_the_jspi_orgin_trial_prerequisite__\n      ZITI_BROWZER_BOOTSTRAPPER_TARGETS: __more on this below__\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Set these values accordingly. Also shown is the reuse of certificates provisioned in this case by LetsEncrypt. BrowZer\nrequires a wildcard certificate to be provisioned that aligns to the ",(0,r.jsx)(t.code,{children:"ZITI_BROWZER_BOOTSTRAPPER_HOST"})," value used. For example, if you had\nset ",(0,r.jsx)(t.code,{children:"ZITI_BROWZER_BOOTSTRAPPER_HOST=my.custom.network"}),", the certificate must be valid for ",(0,r.jsx)(t.code,{children:"*.my.custom.network"})]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:"If you use Certbot/LetsEncrypt, the certificate created is likely to be accessible by root only.\nYou will need to modify the folder/files accordingly.\naccordingly."})}),"\n",(0,r.jsx)(t.h2,{id:"cloning-from-github",children:"Cloning From GitHub"}),"\n",(0,r.jsx)(t.p,{children:"Once the environment variables are set, to start the Ziti BrowZer Bootstrapper perform the following:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["clone the repository and checkout the desired tag/version. ",(0,r.jsx)(t.code,{children:"main"})," should be fine:","\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"git clone https://github.com/openziti/ziti-browzer-bootstrapper.git $ZITI_HOME/ziti-browzer-bootstrapper\n"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["cd to the cloned location: ",(0,r.jsx)(t.code,{children:"cd $ZITI_HOME/ziti-browzer-bootstrapper"})]}),"\n",(0,r.jsxs)(t.li,{children:["ensure the proper version of node and yarn are installed and run yarn install: ",(0,r.jsx)(t.code,{children:"yarn install"})]}),"\n",(0,r.jsxs)(t.li,{children:["start the node server:","\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"NODE_EXTRA_CA_CERTS=node_modules/node_extra_ca_certs_mozilla_bundle/ca_bundle/ca_intermediate_root_bundle.pem node index.js\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"running-via-docker",children:"Running via Docker"}),"\n",(0,r.jsxs)(t.p,{children:["Running the Ziti BrowZer Bootstrapper using Docker is similar to running with NodeJS. Establish the environment variables\nthen run the agent with a command as shown. Note that this is running in the foreground. It's up to you to decide to put\nthis into daemon mode, to use ",(0,r.jsx)(t.code,{children:"docker compose"}),", etc."]}),"\n",(0,r.jsxs)(t.admonition,{type:"note",children:[(0,r.jsxs)(t.p,{children:["To work around the LetsEncrypt issue mentioned above (the certs only visible to root), this example explicitly sets the\n--user the container runs as to a group id of 2171. Not shown was the creation of this group prior to running in Docker.\nIn the Docker host OS, a group was added using a command such as: ",(0,r.jsx)(t.code,{children:"sudo groupadd -g 2171 zitiweb"}),". Then the\nLetsEncrypt folder containing the certificates/keys was chown'ed: ",(0,r.jsx)(t.code,{children:"sudo chown -R root:zitiweb /etc/letsencrypt/"}),".\nThis allows the Docker container that will run the bootstrapper to access the files"]}),(0,r.jsx)(t.p,{children:"Understanding the exact mechanics of why/how this works is beyond the scope of this page and is more relevant to Linux/Docker\nsystem administration."})]}),"\n",(0,r.jsx)(t.h3,{id:"example-docker-command",children:"Example Docker Command"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-text",children:'docker run \\\n  --name ziti-browzer-bootstrapper \\\n  --rm -v /etc/letsencrypt:/etc/letsencrypt \\\n  --user "${UID}:2171" \\\n  -p ${ZITI_BROWZER_BOOTSTRAPPER_LISTEN_PORT}:${ZITI_BROWZER_BOOTSTRAPPER_LISTEN_PORT} \\\n  -e NODE_ENV="${NODE_ENV}" \\\n  -e ZITI_BROWZER_BOOTSTRAPPER_LOGLEVEL="${ZITI_BROWZER_BOOTSTRAPPER_LOGLEVEL}" \\\n  -e ZITI_BROWZER_RUNTIME_LOGLEVEL="${ZITI_BROWZER_RUNTIME_LOGLEVEL}" \\\n  -e ZITI_BROWZER_RUNTIME_HOTKEY="${ZITI_BROWZER_RUNTIME_HOTKEY}" \\\n  -e ZITI_CONTROLLER_HOST="${ZITI_CONTROLLER_HOST}" \\\n  -e ZITI_CONTROLLER_PORT="${ZITI_CONTROLLER_PORT}" \\\n  -e ZITI_BROWZER_BOOTSTRAPPER_HOST="${ZITI_BROWZER_BOOTSTRAPPER_HOST}" \\\n  -e ZITI_BROWZER_BOOTSTRAPPER_SCHEME="${ZITI_BROWZER_BOOTSTRAPPER_SCHEME}" \\\n  -e ZITI_BROWZER_BOOTSTRAPPER_CERTIFICATE_PATH="${ZITI_BROWZER_BOOTSTRAPPER_CERTIFICATE_PATH}" \\\n  -e ZITI_BROWZER_BOOTSTRAPPER_KEY_PATH="${ZITI_BROWZER_BOOTSTRAPPER_KEY_PATH}" \\\n  -e ZITI_BROWZER_BOOTSTRAPPER_LISTEN_PORT="${ZITI_BROWZER_BOOTSTRAPPER_LISTEN_PORT}" \\\n  -e ZITI_BROWZER_RUNTIME_ORIGIN_TRIAL_TOKEN="${ZITI_BROWZER_RUNTIME_ORIGIN_TRIAL_TOKEN}" \\\n  -e ZITI_BROWZER_BOOTSTRAPPER_TARGETS="${ZITI_BROWZER_BOOTSTRAPPER_TARGETS}" \\\n  ghcr.io/openziti/ziti-browzer-bootstrapper:latest\n'})}),"\n",(0,r.jsx)(t.h2,{id:"enabling-browzer-with-systemd",children:"Enabling BrowZer with Systemd"}),"\n",(0,r.jsxs)(t.p,{children:["If you want the BrowZer Bootstrap Agent to start when the machine starts or if the process fails for some reason\nand you have ",(0,r.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Systemd",children:"systemd"})," on your system, you can enable the BrowZer Bootstrap Agent\nto start automatically on failure or reboot."]}),"\n",(0,r.jsxs)(t.p,{children:["If you have used the ",(0,r.jsx)(t.a,{href:"/docs/learn/quickstarts/network/local-no-docker",children:"Local - No Docker"})," or the\n",(0,r.jsx)(t.a,{href:"/docs/learn/quickstarts/network/hosted",children:'"host it anywhere" quickstart'})," quickstarts, you would have sourced the",(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.code,{children:"ziti-cli-function.sh"})," helper script. If not, you can add the function to your shell or inspect the function and\nreplicate the output it produces. Find the function here: ",(0,r.jsx)(t.a,{href:"https://get.openziti.io/ziti-cli-functions.sh",children:"https://get.openziti.io/ziti-cli-functions.sh"})]}),"\n",(0,r.jsx)(t.p,{children:"As with any script hosted on the internet, you are encouraged to download or preview the script from a browser\nbefore sourcing it. Once you are comfortable with the script, you can source it directly if you wish by running:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-text",children:'source /dev/stdin <<< "$(wget -qO- https://get.openziti.io/ziti-cli-functions.sh)"\n'})}),"\n",(0,r.jsxs)(t.p,{children:["You should also ensure you have the appropriate environment variable (",(0,r.jsx)(t.code,{children:"$ZITI_HOME"}),") in your shell before running\nthe function as it's used when creating the file or you'll see:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-text",children:"  * ERROR: ZITI_HOME is not set\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Also, if ",(0,r.jsx)(t.code,{children:"node"})," is not on the path you'll see:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-text",children:"ERROR: missing executable 'node'\n"})}),"\n",(0,r.jsxs)(t.p,{children:["You can file: ",(0,r.jsx)(t.code,{children:"createBrowZerSystemdFile"}),". Execute this now and you'll see something like:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-text",children:"Ziti BrowZer Bootstrapper systemd file written to: /home/ubuntu/.ziti/quickstart/ip-172-31-47-200/browzer-bootstrapper.service\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Once created, you can copy that file and ",(0,r.jsx)(t.code,{children:"enable"})," the unit with systemd:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-text",children:'createBrowZerSystemdFile\nsudo cp "${ZITI_HOME}/browzer-bootstrapper.service" /etc/systemd/system\nsudo systemctl daemon-reload\nsudo systemctl enable --now browzer-bootstrapper\n'})}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)("summary",{children:"Verify BrowZer Started"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-text",children:"systemctl status browzer-bootstrapper --no-pager --lines 0\n"})}),(0,r.jsxs)(s.A,{children:[(0,r.jsx)("summary",{children:"Example systemctl Output"}),(0,r.jsx)(t.p,{children:'You should see output that looks similar to this. Notice the "Active" status is (running) and not failed/restarting etc:'}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-text",children:"\u25cf browzer-bootstrapper.service - A systemd unit file for the Ziti BrowZer Bootstrapper\n     Loaded: loaded (/etc/systemd/system/browzer-bootstrapper.service; enabled; vendor preset: enabled)\n     Active: active (running) since Fri 2023-08-18 12:52:54 UTC; 1min 24s ago\n   Main PID: 54770 (node)\n      Tasks: 11 (limit: 2316)\n     Memory: 42.9M\n        CPU: 2.269s\n     CGroup: /system.slice/browzer-bootstrapper.service\n             \u2514\u250054770 /usr/local/bin/node /home/ubuntu/.ziti/quickstart/ip-172-31-47-200/ziti-browzer-bootstra\u2026\n"})})]})]})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},27763:(e,t,n)=>{n.d(t,{A:()=>R});var i=n(96540),r=n(34164),o=n(25246),s=n(9136),a=n(33535);const l={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};var c=n(74848);function d(e){return!!e&&("SUMMARY"===e.tagName||d(e.parentElement))}function h(e,t){return!!e&&(e===t||h(e.parentElement,t))}function u(e){let{summary:t,children:n,...u}=e;(0,o.A)().collectAnchor(u.id);const p=(0,s.A)(),_=(0,i.useRef)(null),{collapsed:x,setCollapsed:R}=(0,a.u)({initialState:!u.open}),[T,w]=(0,i.useState)(u.open),O=i.isValidElement(t)?t:(0,c.jsx)("summary",{children:t??"Details"});return(0,c.jsxs)("details",{...u,ref:_,open:T,"data-collapsed":x,className:(0,r.A)(l.details,p&&l.isBrowser,u.className),onMouseDown:e=>{d(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;d(t)&&h(t,_.current)&&(e.preventDefault(),x?(R(!1),w(!0)):R(!0))},children:[O,(0,c.jsx)(a.N,{lazy:!1,collapsed:x,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{R(e),w(!e)},children:(0,c.jsx)("div",{className:l.collapsibleContent,children:n})})]})}const p={details:"details_b_Ee"},_="alert alert--info";function x(e){let{...t}=e;return(0,c.jsx)(u,{...t,className:(0,r.A)(_,p.details,t.className)})}function R(e){const t=i.Children.toArray(e.children),n=t.find((e=>i.isValidElement(e)&&"summary"===e.type)),r=(0,c.jsx)(c.Fragment,{children:t.filter((e=>e!==n))});return(0,c.jsx)(x,{...e,summary:n,children:r})}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var i=n(96540);const r={},o=i.createContext(r);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);