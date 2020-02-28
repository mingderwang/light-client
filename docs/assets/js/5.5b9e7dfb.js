(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{205:function(e,t,r){"use strict";r.r(t);var n=r(28),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{align:"center"}},[r("br"),e._v(" "),r("a",{attrs:{href:"https://raiden.network/"}},[r("img",{attrs:{width:"400px",alt:"",src:"https://user-images.githubusercontent.com/35398162/54018436-ee3f6300-4188-11e9-9b4e-0666c44cda53.png"}})]),e._v(" "),r("br"),e._v("\n  Raiden Light Client SDK\n  "),r("br")]),e._v(" "),r("p",[e._v("The Raiden Light Client SDK is a "),r("a",{attrs:{href:"https://raiden.network",target:"_blank",rel:"noopener noreferrer"}},[e._v("Raiden Network"),r("OutboundLink")],1),e._v(" compatible client written in JavaScript/Typescript, capable of running in modern web3-enabled browsers, wallets and Node.js environments.")]),e._v(" "),r("h2",{attrs:{id:"about-the-project"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#about-the-project"}},[e._v("#")]),e._v(" About The Project")]),e._v(" "),r("p",[e._v("The "),r("a",{attrs:{href:"https://raiden.network/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Raiden Network"),r("OutboundLink")],1),e._v(" is an off-chain scaling solution, enabling near-instant, low-fee and scalable payments. It’s complementary to the Ethereum blockchain and works with any ERC20 compatible token.")]),e._v(" "),r("p",[e._v("The Raiden client code is available "),r("a",{attrs:{href:"https://github.com/raiden-network/raiden",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),r("OutboundLink")],1),e._v(" and has been "),r("a",{attrs:{href:"https://medium.com/raiden-network/red-eyes-mainnet-release-announcement-d48235bbef3c",target:"_blank",rel:"noopener noreferrer"}},[e._v("released for mainnet"),r("OutboundLink")],1),e._v(" with a limited alpha release of the Raiden Network in December 2018.")]),e._v(" "),r("p",[e._v("The main entry point of the SDK is the "),r("code",[e._v("Raiden")]),e._v(" class, which exposes an "),r("code",[e._v("async")]),e._v("/promise-based public API to fetch state, events and perform every action provided by the SDK on the blockchain and the Raiden Network.")]),e._v(" "),r("p",[e._v("Internally, the SDK architecture is a Redux-powered state machine, where every blockchain event, user request and off-chain message from other Raiden nodes and service providers follows an unified flow as actions on this state machine. These actions produce deterministic changes to the state and may cause other actions to be emitted as well. Asynchronous operations are handled by a pipeline of "),r("a",{attrs:{href:"https://redux-observable.js.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("redux-observable"),r("OutboundLink")],1),e._v(" epics, an "),r("a",{attrs:{href:"https://rxjs.dev/",target:"_blank",rel:"noopener noreferrer"}},[e._v("RxJs"),r("OutboundLink")],1),e._v(" async extension for Redux which unleashes the power, versatility and correctness of observables to Redux actions processing. These epics interact with the blockchain through "),r("a",{attrs:{href:"https://github.com/ethers-io/ethers.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("ethers.js"),r("OutboundLink")],1),e._v(" providers, signers and contracts, allowing seamless integration with different web3 providers, such as "),r("a",{attrs:{href:"https://metamask.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Metamask"),r("OutboundLink")],1),e._v(". Redux state is optionally persisted on "),r("code",[e._v("localStorage")]),e._v(" or emitted to be persisted somewhere else. Tests are implemented with "),r("a",{attrs:{href:"https://jestjs.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("Jest"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("External off-chain communication with the Raiden Network is provided by a dedicated federation of community-provided "),r("a",{attrs:{href:"https://matrix.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("matrix.org"),r("OutboundLink")],1),e._v(" homeservers, accessed through "),r("a",{attrs:{href:"https://github.com/matrix-org/matrix-js-sdk",target:"_blank",rel:"noopener noreferrer"}},[e._v("matrix-js-sdk"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h3",{attrs:{id:"architecture-diagram"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#architecture-diagram"}},[e._v("#")]),e._v(" Architecture diagram")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("            +---------+---------+\n            |                   |\n            |    Raiden SDK     |\n            |                   |\n            +----+----+----+----+\n            |         |         |      +------------+\n         +--+  redux  +  epics  +------+ Matrix.org |\n         |  |         |         |      +-----+------+\n         |  +---------+-----+---+            |\n         |                  |          +-----+------+\n+--------+-------+   +------+------+   |   Raiden   |\n|  localStorage  |   |  ethers.js  |   |   Network  |\n+----------------+   +------+------+   +------------+\n                            |\n                     +------+------+\n                     |  ethereum   |\n                     +-------------+\n")])])]),r("p",[e._v("A technical deep dive into the SDK architecture, technologies, tips and details on the design goals and decisions can be found in the "),r("a",{attrs:{href:"https://github.com/raiden-network/light-client/blob/master/raiden-ts/SDK-Development.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("SDK Development"),r("OutboundLink")],1),e._v(" document. Reading it is highly recommended to anyone wishing to better understand how the Raiden Light Client works under the hood or to contribute to it, though not required to use this library as a dApp developer.")])])}),[],!1,null,null,null);t.default=a.exports}}]);