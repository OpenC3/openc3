"use strict";(self.webpackChunkdocs_openc3_com=self.webpackChunkdocs_openc3_com||[]).push([["7306"],{247:function(e,n,o){o.r(n),o.d(n,{metadata:()=>t,contentTitle:()=>c,default:()=>p,assets:()=>l,toc:()=>a,frontMatter:()=>r});var t=JSON.parse('{"id":"development/developing","title":"Developing COSMOS","description":"Building COSMOS and developing the frontend and backend","source":"@site/docs/development/developing.md","sourceDirName":"development","slug":"/development/developing","permalink":"/docs/development/developing","draft":false,"unlisted":false,"editUrl":"https://github.com/OpenC3/cosmos/tree/main/docs.openc3.com/docs/development/developing.md","tags":[],"version":"current","frontMatter":{"title":"Developing COSMOS","description":"Building COSMOS and developing the frontend and backend","sidebar_custom_props":{"myEmoji":"\uD83D\uDCBB"}},"sidebar":"defaultSidebar","previous":{"title":"Testing with Curl","permalink":"/docs/development/curl"},"next":{"title":"JSON API","permalink":"/docs/development/json-api"}}'),s=o("5893"),i=o("65");let r={title:"Developing COSMOS",description:"Building COSMOS and developing the frontend and backend",sidebar_custom_props:{myEmoji:"\uD83D\uDCBB"}},c="Developing COSMOS",l={},a=[{value:"Development Tools",id:"development-tools",level:2},{value:"Running a Frontend Application",id:"running-a-frontend-application",level:2},{value:"Running a Backend Server",id:"running-a-backend-server",level:2}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"developing-cosmos",children:"Developing COSMOS"})}),"\n",(0,s.jsxs)(n.p,{children:["So you want to help develop COSMOS? All of our open source COSMOS code is on ",(0,s.jsx)(n.a,{href:"https://github.com/",children:"Github"})," so the first thing to do is get an ",(0,s.jsx)(n.a,{href:"https://github.com/join",children:"account"}),". Next ",(0,s.jsx)(n.a,{href:"https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository",children:"clone"})," the ",(0,s.jsx)(n.a,{href:"https://github.com/openc3/cosmos",children:"COSMOS"})," repository. We accept contributions from others as ",(0,s.jsx)(n.a,{href:"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests",children:"Pull Requests"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"development-tools",children:"Development Tools"}),"\n",(0,s.jsxs)(n.p,{children:["The core COSMOS team develops with the ",(0,s.jsx)(n.a,{href:"https://code.visualstudio.com/",children:"Visual Studio Code"})," editor and we highly recommend it. We also utilize a number of extensions including docker, kubernetes, gitlens, prettier, eslint, python, vetur, and ruby. We commit our ",(0,s.jsx)(n.code,{children:"openc3.code-workspace"})," configuration for VSCode to help configure these plugins. You also need ",(0,s.jsx)(n.a,{href:"https://www.docker.com/products/docker-desktop",children:"Docker Desktop"})," which you should already have as it is a requirement to run COSMOS. You'll also need ",(0,s.jsx)(n.a,{href:"https://nodejs.org/en/download/",children:"NodeJS"})," and ",(0,s.jsx)(n.a,{href:"https://yarnpkg.com/getting-started/install",children:"yarn"})," installed."]}),"\n",(0,s.jsx)(n.h1,{id:"building-cosmos",children:"Building COSMOS"}),"\n",(0,s.jsx)(n.p,{children:"Note: We primarily develop COSMOS in MacOS so the commands here will reference bash scripts but the same files exist in Windows as batch scripts."}),"\n",(0,s.jsxs)(n.p,{children:["Build COSMOS using the ",(0,s.jsx)(n.code,{children:"openc3.sh"})," script:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"% ./openc3.sh build\n"})}),"\n",(0,s.jsx)(n.p,{children:"This will pull all the COSMOS container dependencies and build our local containers. Note: This can take a long time especially for your first build!"}),"\n",(0,s.jsx)(n.p,{children:"Once the build completes you can see the built images with the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'% docker image ls | grep "openc3"\nopenc3inc/openc3-cosmos-init                latest   4cac7a3ea9d3   29 hours ago   446MB\nopenc3inc/openc3-cosmos-script-runner-api   latest   4aacbaf49f7a   29 hours ago   431MB\nopenc3inc/openc3-cosmos-cmd-tlm-api         latest   9a8806bd4be3   3 days ago     432MB\nopenc3inc/openc3-operator                   latest   223e98129fe9   3 days ago     405MB\nopenc3inc/openc3-base                       latest   98df5c0378c2   3 days ago     405MB\nopenc3inc/openc3-redis                      latest   5a3003a49199   8 days ago     111MB\nopenc3inc/openc3-traefik                    latest   ec13a8d16a2f   8 days ago     104MB\nopenc3inc/openc3-minio                      latest   787f6e3fc0be   8 days ago     238MB\nopenc3inc/openc3-node                       latest   b3ee86d3620a   8 days ago     372MB\nopenc3inc/openc3-ruby                       latest   aa158bbb9539   8 days ago     326MB\n'})}),"\n",(0,s.jsxs)(n.admonition,{title:"Offline Building",type:"info",children:[(0,s.jsxs)(n.p,{children:["If you're building in a offline environment or want to use a private Rubygems, NPM or APK server (e.g. Nexus), you can update the following environment variables: RUBYGEMS_URL, NPM_URL, APK_URL, and more in the ",(0,s.jsx)(n.a,{href:"https://github.com/openc3/cosmos/blob/main/.env",children:".env"})," file. Example values:"]}),(0,s.jsxs)(n.p,{children:["ALPINE_VERSION=3.18",(0,s.jsx)("br",{}),"\nALPINE_BUILD=9",(0,s.jsx)("br",{}),"\nRUBYGEMS_URL=",(0,s.jsx)(n.a,{href:"https://rubygems.org",children:"https://rubygems.org"}),(0,s.jsx)("br",{}),"\nNPM_URL=",(0,s.jsx)(n.a,{href:"https://registry.npmjs.org",children:"https://registry.npmjs.org"}),(0,s.jsx)("br",{}),"\nAPK_URL=",(0,s.jsx)(n.a,{href:"http://dl-cdn.alpinelinux.org",children:"http://dl-cdn.alpinelinux.org"}),(0,s.jsx)("br",{})]})]}),"\n",(0,s.jsx)(n.h1,{id:"running-cosmos",children:"Running COSMOS"}),"\n",(0,s.jsxs)(n.p,{children:["Running COSMOS in development mode enables localhost access to internal API ports as well as sets ",(0,s.jsx)(n.code,{children:"RAILS_ENV=development"})," in the cmd-tlm-api and script-runner-api Rails servers. To run in development mode:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"% ./openc3.sh dev\n"})}),"\n",(0,s.jsx)(n.p,{children:"You can now see the running containers (I removed CONTAINER ID, CREATED and STATUS to save space):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'% docker ps\nIMAGE                                             COMMAND                  PORTS                      NAMES\nopenc3/openc3-cmd-tlm-api:latest         "/sbin/tini -- rails\u2026"   127.0.0.1:2901->2901/tcp   cosmos-openc3-cmd-tlm-api-1\nopenc3/openc3-script-runner-api:latest   "/sbin/tini -- rails\u2026"   127.0.0.1:2902->2902/tcp   cosmos-openc3-script-runner-api-1\nopenc3/openc3-traefik:latest             "/entrypoint.sh trae\u2026"   0.0.0.0:2900->80/tcp       cosmos-openc3-traefik-1\nopenc3/openc3-operator:latest            "/sbin/tini -- ruby \u2026"                              cosmos-openc3-operator-1\nopenc3/openc3-minio:latest               "/usr/bin/docker-ent\u2026"   127.0.0.1:9000->9000/tcp   cosmos-openc3-minio-1\nopenc3/openc3-redis:latest               "docker-entrypoint.s\u2026"   127.0.0.1:6379->6379/tcp   cosmos-openc3-redis-1\n'})}),"\n",(0,s.jsx)(n.p,{children:"If you go to localhost:2900 you should see COSMOS up and running!"}),"\n",(0,s.jsx)(n.h2,{id:"running-a-frontend-application",children:"Running a Frontend Application"}),"\n",(0,s.jsx)(n.p,{children:"So now that you have COSMOS up and running how do you develop an individual COSMOS application?"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Bootstrap the frontend with yarn"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"openc3-init % yarn\n"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Serve a local COSMOS application (CmdTlmServer, ScriptRunner, etc)"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"openc3-init % cd plugins/packages/openc3-tool-scriptrunner\nopenc3-tool-scriptrunner % yarn serve\n\nDONE  Compiled successfully in 128722ms\nApp running at:\n- Local:   http://localhost:2914/tools/scriptrunner/\n- Network: http://localhost:2914/tools/scriptrunner/\n\nNote that the development build is not optimized.\nTo create a production build, run npm run build.\n"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Set the ",(0,s.jsx)(n.a,{href:"https://single-spa.js.org/",children:"single SPA"})," override for the application"]}),"\n",(0,s.jsxs)(n.p,{children:["Visit localhost:2900 and Right-click 'Inspect'",(0,s.jsx)("br",{}),"\nIn the console paste:"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'localStorage.setItem("devtools", true);\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Refresh and you should see ",(0,s.jsx)(n.code,{children:"{...}"})," in the bottom right",(0,s.jsx)("br",{}),"\nClick the Default button next to the application (@openc3/tool-scriptrunner)",(0,s.jsx)("br",{}),"\nPaste in the development path which is dependent on the port returned by the local yarn serve and the tool name (scriptrunner)"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"http://localhost:2914/tools/scriptrunner/js/app.js",children:"http://localhost:2914/tools/scriptrunner/js/app.js"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Refresh the page and you should see your local copy of the application (Script Runner in this example). If you dynamically add code (like ",(0,s.jsx)(n.code,{children:"console.log"}),") the yarn window should re-compile and the browser should refresh displaying your new code. It is highly recommended to get familiar with your browser's ",(0,s.jsx)(n.a,{href:"https://developer.chrome.com/docs/devtools/overview/",children:"development tools"})," if you plan to do frontend development."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"running-a-backend-server",children:"Running a Backend Server"}),"\n",(0,s.jsx)(n.p,{children:"If the code you want to develop is the cmd-tlm-api or script-runner-api backend servers there are several steps to enable access to a development copy."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Run a development version of traefik. COSMOS uses traefik to direct API requests to the correct locations."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"% cd openc3-traefik\nopenc3-traefik % docker ps\n# Look for the container with name including traefik\nopenc3-traefik % docker stop cosmos-openc3-traefik-1\nopenc3-traefik % docker build --build-arg TRAEFIK_CONFIG=traefik-dev.yaml -t openc3-traefik-dev .\nopenc3-traefik % docker run --network=openc3-cosmos-network -p 2900:2900 -it --rm openc3-traefik-dev\n"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Run a local copy of the cmd-tlm-api or script-runner-api"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"% cd openc3-cosmos-cmd-tlm-api\nopenc3-cosmos-cmd-tlm-api % docker ps\n# Look for the container with name including cmd-tlm-api\nopenc3-cosmos-cmd-tlm-api % docker stop cosmos-openc3-cosmos-cmd-tlm-api-1\n# Run the following on Windows:\nopenc3-cosmos-cmd-tlm-api> dev_server.bat\n# In Linux, set all the environment variables in the .env file, but override REDIS to be local\nopenc3-cosmos-cmd-tlm-api % set -a; source ../.env; set +a\nopenc3-cosmos-cmd-tlm-api % export OPENC3_REDIS_HOSTNAME=127.0.0.1\nopenc3-cosmos-cmd-tlm-api % export OPENC3_REDIS_EPHEMERAL_HOSTNAME=127.0.0.1\nopenc3-cosmos-cmd-tlm-api % bundle install\nopenc3-cosmos-cmd-tlm-api % bundle exec rails s\n"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Once the ",(0,s.jsx)(n.code,{children:"bundle exec rails s"})," command returns you should see API requests coming from interactions in the frontend code. If you add code (like Ruby debugging statements) to the cmd-tlm-api code you need to stop the server (CTRL-C) and restart it to see the effect."]}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},65:function(e,n,o){o.d(n,{Z:function(){return c},a:function(){return r}});var t=o(7294);let s={},i=t.createContext(s);function r(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);