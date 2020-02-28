(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{225:function(t,e,n){"use strict";n.r(e);var a=n(28),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"connecting"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#connecting"}},[t._v("#")]),t._v(" Connecting")]),t._v(" "),n("p",[t._v("The SDK provides out of the box support for the deployed networks on "),n("code",[t._v("Görli")]),t._v(", "),n("code",[t._v("Ropsten")]),t._v(", and "),n("code",[t._v("Rinkeby")]),t._v(".")]),t._v(" "),n("p",[t._v("If you need to use the SDK on a private network, or a custom deployment you can find more information in the following "),n("RouterLink",{attrs:{to:"/private-chain/"}},[t._v("guide")]),t._v(".")],1),t._v(" "),n("h2",{attrs:{id:"raiden-light-client-test-environment"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#raiden-light-client-test-environment"}},[t._v("#")]),t._v(" Raiden Light Client test environment")]),t._v(" "),n("p",[t._v("For development purposes, the Light Client uses a standalone environment. The dApp deployment "),n("a",{attrs:{href:"https://lightclient.raiden.network/",target:"_blank",rel:"noopener noreferrer"}},[t._v("lightclient.raiden.network"),n("OutboundLink")],1),t._v(" and the development version served by 'npm run serve' also conforms to this configuration.")]),t._v(" "),n("p",[t._v("This environment uses:")]),t._v(" "),n("ul",[n("li",[t._v("A specific version of "),n("a",{attrs:{href:"https://github.com/raiden-network/raiden/commit/2e741dfdf4bfa564dec760abd5e3d8b2c9d30715",target:"_blank",rel:"noopener noreferrer"}},[t._v("Raiden"),n("OutboundLink")],1)]),t._v(" "),n("li",[t._v("A matrix transport server - "),n("code",[t._v("https://raidentransport.test001.env.raiden.network")])]),t._v(" "),n("li",[t._v("A PFS server - "),n("code",[t._v("https://pfs.raidentransport.test001.env.raiden.network")])])]),t._v(" "),n("p",[t._v("You can find the raiden version tagged on Docker Hub under "),n("code",[t._v("raidennetwork/raiden:testenv001")]),t._v(". To pull the image you need to run the following:")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("docker pull raidennetwork/raiden:testenv001\n")])])]),n("p",[t._v("The transport server does not participate in the matrix federation. For this reason, you have to explicitly specify it when starting raiden. You can use the following flag:")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("--matrix-server"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https://raidentransport.test001.env.raiden.network\n")])])]),n("p",[t._v("Similarly, you also have to specify the path-finding server:")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("--pathfinding-service-address https://pfs.raidentransport.test001.env.raiden.network\n")])])]),n("h2",{attrs:{id:"running-a-raiden-node-in-the-test-environment"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#running-a-raiden-node-in-the-test-environment"}},[t._v("#")]),t._v(" Running a Raiden node in the test environment")]),t._v(" "),n("p",[t._v("You can easily run a python node in the test environment by using Docker. To get the supported Raiden version from "),n("a",{attrs:{href:"https://hub.docker.com/r/raidennetwork/raiden",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker Hub"),n("OutboundLink")],1),t._v(" you need to run the following command:")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("docker pull raidennetwork/raiden:testenv001\n")])])]),n("p",[t._v("The test environment uses the "),n("strong",[t._v("Görli")]),t._v(" testnet. For the purposes of this guide, we assume that a "),n("a",{attrs:{href:"https://geth.ethereum.org/docs/",target:"_blank",rel:"noopener noreferrer"}},[t._v("geth"),n("OutboundLink")],1),t._v(" node runs locally on your computer. If you use a different ethereum client or RPC provider, please adjust accordingly.")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("geth --goerli console --cache"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("512")]),t._v(" --port "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("30303")]),t._v(" --rpc --rpcapi eth,net,web3,txpool --rpccorsdomain "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*"')]),t._v(" --rpcaddr "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.0.0.0"')]),t._v("\n")])])]),n("h3",{attrs:{id:"using-docker-run"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#using-docker-run"}},[t._v("#")]),t._v(" Using docker run")]),t._v(" "),n("p",[t._v("You can start the container, by using the following command:")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("docker run --rm -it "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --network"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("host "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --mount "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("src")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/path/to/keystore,target"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/keystore,type"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("bind "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    raidennetwork/raiden:testenv001 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --keystore-path /keystore "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --network-id "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --environment-type development "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --eth-rpc-endpoint http://127.0.0.1:8545 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --accept-disclaimer "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --matrix-server"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https://raidentransport.test001.env.raiden.network "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --pathfinding-service-address https://pfs.raidentransport.test001.env.raiden.network "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --api-address "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://0.0.0.0:5001"')]),t._v("\n")])])]),n("p",[t._v("We use "),n("code",[t._v("--network=host")]),t._v(" if the ethereum node runs locally on the host machine, to provide access to it from the container.")]),t._v(" "),n("h3",{attrs:{id:"running-the-python-client-from-source"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#running-the-python-client-from-source"}},[t._v("#")]),t._v(" Running the python client from source")]),t._v(" "),n("p",[t._v("If you want to use raiden from source code you can start by cloning the raiden repository, and checkout the suggested commit:")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/raiden-network/raiden\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" raiden\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout 2e741dfdf4bfa564dec760abd5e3d8b2c9d30715\n")])])]),n("p",[t._v("Then you need to create a virtual environment using python 3.7 and activate it:")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("python3.7 -m venv .venv\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" .venv/bin/activate\n")])])]),n("p",[t._v("Before starting Raiden, you need to install its dependencies. You can install them by running:")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("make install-dev\n")])])]),n("p",[t._v("After the installation, you can start Raiden by running:")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("raiden --keystore-path ~/.keystore "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --log-config raiden:INFO "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --api-address "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://0.0.0.0:5001"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --eth-rpc-endpoint http://localhost:8545 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --accept-disclaimer "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --network-id "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --environment-type development "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --routing-mode"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("pfs "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --matrix-server"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https://raidentransport.test001.env.raiden.network "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --pathfinding-service-address https://pfs.raidentransport.test001.env.raiden.network \n\n")])])]),n("p",[t._v("After you get your node running, you will be able to receive token transfers from the Light Client dApp and SDK.")])])}),[],!1,null,null,null);e.default=s.exports}}]);