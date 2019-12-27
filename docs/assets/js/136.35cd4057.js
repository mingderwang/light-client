(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{334:function(e,t,n){"use strict";n.r(t);var a=n(0),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"module-transfer"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#module-transfer"}},[e._v("#")]),e._v(" Module: transfer")]),e._v(" "),n("p",[e._v("A transfer async action set")]),e._v(" "),n("p",[e._v("A transfer is considered as having succeeded from the time the secret is revealed to the target,\nas from there, target and mediators can claim the payment down to us. But the full off-chain\nhappy case completes only after partner/neighbor acknowledges receiving the Unlock.\nSo, we usually only emits this action in the end of the happy case, and it'll then contain the\nunlock's balanceProof, which indicates the full off-chain path succeeded.\nIt'll be emitted without a balanceProof if something forces the transfer to complete\n(e.g.  channel closed), the secret was revealed (so target was paid) but for any reason the\nunlock didn't happen yet.")]),e._v(" "),n("p",[e._v("transfer.failure is emitted as soon as we know the transfer failed definitely, like when a\nRefundTransfer is received or the lock expires before revealing the secret. It notifies the user\n(e.g. pending Promises) that the transfer failed and won't be paid (eventually, locked amount\nwill be recovered by expiring the lock).")])])}),[],!1,null,null,null);t.default=r.exports}}]);