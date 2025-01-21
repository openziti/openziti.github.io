"use strict";(self.webpackChunkdocusaurus_3=self.webpackChunkdocusaurus_3||[]).push([[6414],{5921:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>x,frontMatter:()=>n,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"learn/core-concepts/metrics/available-metrics","title":"Available Metrics","description":"Metrics are reported to the log files, locale in /var/log/ziti by default.  There are 2 primary log files for metrics, utilization-metrics.log and utilization-usage.log.  These logs may be shipped to various reporting systems for easier visibility and monitoring.","source":"@site/docs/learn/core-concepts/metrics/15-available-metrics.md","sourceDirName":"learn/core-concepts/metrics","slug":"/learn/core-concepts/metrics/available-metrics","permalink":"/docs/learn/core-concepts/metrics/available-metrics","draft":false,"unlisted":false,"editUrl":"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/learn/core-concepts/metrics/15-available-metrics.md","tags":[],"version":"current","sidebarPosition":15,"frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Types","permalink":"/docs/learn/core-concepts/metrics/types"},"next":{"title":"File Reporter","permalink":"/docs/learn/core-concepts/metrics/file"}}');var i=t(74848),d=t(28453);const n={},c="Available Metrics",l={},o=[];function a(e){const r={h1:"h1",header:"header",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.header,{children:(0,i.jsx)(r.h1,{id:"available-metrics",children:"Available Metrics"})}),"\n",(0,i.jsx)(r.p,{children:"Metrics are reported to the log files, locale in /var/log/ziti by default.  There are 2 primary log files for metrics, utilization-metrics.log and utilization-usage.log.  These logs may be shipped to various reporting systems for easier visibility and monitoring."}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Metric"}),(0,i.jsx)(r.th,{children:"Type"}),(0,i.jsx)(r.th,{children:"Source"}),(0,i.jsx)(r.th,{children:"Description"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"api-session.create"}),(0,i.jsx)(r.td,{children:"Histogram"}),(0,i.jsx)(r.td,{children:"controller"}),(0,i.jsx)(r.td,{children:"Time to create api sessions"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"api.session.enforcer.run"}),(0,i.jsx)(r.td,{children:"Timer"}),(0,i.jsx)(r.td,{children:"controller"}),(0,i.jsx)(r.td,{children:"How long it takes the API Session policy enforcer to run"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"bolt.open_read_txs"}),(0,i.jsx)(r.td,{children:"Gauge"}),(0,i.jsx)(r.td,{children:"controller"}),(0,i.jsx)(r.td,{children:"Current number of open bbolt read transactions"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"ctrl.latency"}),(0,i.jsx)(r.td,{children:"Histogram"}),(0,i.jsx)(r.td,{children:"controller"}),(0,i.jsx)(r.td,{children:"Per control channel latency"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"ctrl.queue_time"}),(0,i.jsx)(r.td,{children:"Histogram"}),(0,i.jsx)(r.td,{children:"controller"}),(0,i.jsx)(r.td,{children:"Per control channel queue time (between send and write to wire)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"ctrl.rx.bytesrate"}),(0,i.jsx)(r.td,{children:"Meter"}),(0,i.jsx)(r.td,{children:"controller"}),(0,i.jsx)(r.td,{children:"Per control channel receive data rate"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"ctrl.rx.msgrate"}),(0,i.jsx)(r.td,{children:"Meter"}),(0,i.jsx)(r.td,{children:"controller"}),(0,i.jsx)(r.td,{children:"Per control channel receive message rate"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"ctrl.rx.msgsize"}),(0,i.jsx)(r.td,{children:"Histogram"}),(0,i.jsx)(r.td,{children:"controller"}),(0,i.jsx)(r.td,{children:"Per control channel receive message size distribution"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"ctrl.tx.bytesrate"}),(0,i.jsx)(r.td,{children:"Meter"}),(0,i.jsx)(r.td,{children:"controller"}),(0,i.jsx)(r.td,{children:"Per control channel send data rate"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"ctrl.tx.msgrate"}),(0,i.jsx)(r.td,{children:"Meter"}),(0,i.jsx)(r.td,{children:"controller"}),(0,i.jsx)(r.td,{children:"Per control channel send message rate"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"ctrl.tx.msgsize"}),(0,i.jsx)(r.td,{children:"Histogram"}),(0,i.jsx)(r.td,{children:"controller"}),(0,i.jsx)(r.td,{children:"Per control channel send messsage size distribution"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"edge.invalid_api_tokens"}),(0,i.jsx)(r.td,{children:"Meter"}),(0,i.jsx)(r.td,{children:"router"}),(0,i.jsx)(r.td,{children:"Number of invalid API Session token encountered"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"edge.invalid_api_tokens_during_sync"}),(0,i.jsx)(r.td,{children:"Meter"}),(0,i.jsx)(r.td,{children:"router"}),(0,i.jsx)(r.td,{children:"Number of invalid API Session token encountered while a sync is in progress"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"egress.rx.bytesrate"}),(0,i.jsx)(r.td,{children:"Meter"}),(0,i.jsx)(r.td,{children:"router"}),(0,i.jsx)(r.td,{children:"Data rate of data received via xgress, originating from terminators. Per router."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"egress.rx.msgrate"}),(0,i.jsx)(r.td,{children:"Meter"}),(0,i.jsx)(r.td,{children:"router"}),(0,i.jsx)(r.td,{children:"Message rate of data received via xgress, originating from terminators. Per router."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"egress.rx.msgsize"}),(0,i.jsx)(r.td,{children:"Histogram"}),(0,i.jsx)(r.td,{children:"router"}),(0,i.jsx)(r.td,{children:"Message size distribution of data received via xgress, originating from terminators. Per router."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"egress.tx.bytesrate"}),(0,i.jsx)(r.td,{children:"Meter"}),(0,i.jsx)(r.td,{children:"router"}),(0,i.jsx)(r.td,{children:"Data rate of data sent via xgress originating from terminators. Per router."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"egress.tx.msgrate"}),(0,i.jsx)(r.td,{children:"Meter"}),(0,i.jsx)(r.td,{children:"router"}),(0,i.jsx)(r.td,{children:"Message rate of data sent via xgress originating from terminators. Per router."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"egress.tx.msgsize"}),(0,i.jsx)(r.td,{children:"Histogram"}),(0,i.jsx)(r.td,{children:"router"}),(0,i.jsx)(r.td,{children:"Message size distribution of data sent via xgress, originating from terminators. Per router."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"eventual.events"}),(0,i.jsx)(r.td,{children:"Gauge"}),(0,i.jsx)(r.td,{children:"controller"}),(0,i.jsx)(r.td,{children:"Number of background events pending processing"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"fabric.rx.bytesrate"}),(0,i.jsx)(r.td,{children:"Meter"}),(0,i.jsx)(r.td,{children:"router"}),(0,i.jsx)(r.td,{children:"Data rate of data received from fabric links"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"fabric.rx.msgrate"}),(0,i.jsx)(r.td,{children:"Meter"}),(0,i.jsx)(r.td,{children:"router"}),(0,i.jsx)(r.td,{children:"Message rate of data received from fabric links"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"fabric.rx.msgsize"}),(0,i.jsx)(r.td,{children:"Histogram"}),(0,i.jsx)(r.td,{children:"router"}),(0,i.jsx)(r.td,{children:"Message size distribution of data received from fabric links"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"fabric.tx.bytesrate"}),(0,i.jsx)(r.td,{children:"Meter"}),(0,i.jsx)(r.td,{children:"router"}),(0,i.jsx)(r.td,{children:"Data rate of data sent on fabric links"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"fabric.tx.msgrate"}),(0,i.jsx)(r.td,{children:"Meter"}),(0,i.jsx)(r.td,{children:"router"}),(0,i.jsx)(r.td,{children:"Message rate of data sent on fabric links"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"fabric.tx.msgsize"}),(0,i.jsx)(r.td,{children:"Histogram"}),(0,i.jsx)(r.td,{children:"router"}),(0,i.jsx)(r.td,{children:"Message size distribution of data sent on fabric links"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"identity.refresh"}),(0,i.jsx)(r.td,{children:"Meter"}),(0,i.jsx)(r.td,{children:"controller"}),(0,i.jsx)(r.td,{children:"How often an identity is marked, indicating that they need a full refresh of their service list"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"identity.update-sdk-info"}),(0,i.jsx)(r.td,{children:"Histogram"}),(0,i.jsx)(r.td,{children:"controller"}),(0,i.jsx)(r.td,{children:"Time to update identity sdk info"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"ingress.rx.bytesrate"}),(0,i.jsx)(r.td,{children:"Meter"}),(0,i.jsx)(r.td,{children:"router"}),(0,i.jsx)(r.td,{children:"Data rate of data received via xgress, originating from initiators. Per router."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"ingress.rx.msgrate"}),(0,i.jsx)(r.td,{children:"Meter"}),(0,i.jsx)(r.td,{children:"router"}),(0,i.jsx)(r.td,{children:"Message rate of data received via xgress, originating from initiators. Per router."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"ingress.rx.msgsize"}),(0,i.jsx)(r.td,{children:"Histogram"}),(0,i.jsx)(r.td,{children:"router"}),(0,i.jsx)(r.td,{children:"Message size distribution of data received via xgress, originating from initiators. Per router."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"ingress.tx.bytesrate"}),(0,i.jsx)(r.td,{children:"Meter"}),(0,i.jsx)(r.td,{children:"router"}),(0,i.jsx)(r.td,{children:"Data rate of data sent via xgress originating from initiators. Per router."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"ingress.tx.msgrate"}),(0,i.jsx)(r.td,{children:"Meter"}),(0,i.jsx)(r.td,{children:"router"}),(0,i.jsx)(r.td,{children:"Message rate of data sent via xgress originating from initiators. Per router."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"ingress.tx.msgsize"}),(0,i.jsx)(r.td,{children:"Histogram"}),(0,i.jsx)(r.td,{children:"router"}),(0,i.jsx)(r.td,{children:"Message size distribution of data sent via xgress, originating from initiators. Per router."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"link.latency"}),(0,i.jsx)(r.td,{children:"Histogram"}),(0,i.jsx)(r.td,{children:"controller"}),(0,i.jsx)(r.td,{children:"Per link latency in nanoseconds"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"link.queue_time"}),(0,i.jsx)(r.td,{children:"Histogram"}),(0,i.jsx)(r.td,{children:"controller"}),(0,i.jsx)(r.td,{children:"Per link queue time (between send and write to wire)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"link.rx.bytesrate"}),(0,i.jsx)(r.td,{children:"Meter"}),(0,i.jsx)(r.td,{children:"controller"}),(0,i.jsx)(r.td,{children:"Per link receive data rate"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"link.rx.msgrate"}),(0,i.jsx)(r.td,{children:"Meter"}),(0,i.jsx)(r.td,{children:"controller"}),(0,i.jsx)(r.td,{children:"Per link receive message rate"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"link.rx.msgsize"}),(0,i.jsx)(r.td,{children:"Histogram"}),(0,i.jsx)(r.td,{children:"controller"}),(0,i.jsx)(r.td,{children:"Per link receive message size distribution"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"link.tx.bytesrate"}),(0,i.jsx)(r.td,{children:"Meter"}),(0,i.jsx)(r.td,{children:"controller"}),(0,i.jsx)(r.td,{children:"Per link send data rate"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"link.tx.msgrate"}),(0,i.jsx)(r.td,{children:"Meter"}),(0,i.jsx)(r.td,{children:"controller"}),(0,i.jsx)(r.td,{children:"Per link send message rate"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"link.tx.msgsize"}),(0,i.jsx)(r.td,{children:"Histogram"}),(0,i.jsx)(r.td,{children:"controller"}),(0,i.jsx)(r.td,{children:"Per link send messsage size distribution"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"service.policy.enforcer.run"}),(0,i.jsx)(r.td,{children:"Timer"}),(0,i.jsx)(r.td,{children:"controller"}),(0,i.jsx)(r.td,{children:"How long it takes the service policy enforcer to run"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"service.policy.enforcer.run.deletes"}),(0,i.jsx)(r.td,{children:"Meter"}),(0,i.jsx)(r.td,{children:"controller"}),(0,i.jsx)(r.td,{children:"How many sessions are deleted by the service policy enforcer"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"services.list"}),(0,i.jsx)(r.td,{children:"Histogram"}),(0,i.jsx)(r.td,{children:"controller"}),(0,i.jsx)(r.td,{children:"Time to list services"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"session.create"}),(0,i.jsx)(r.td,{children:"Histogram"}),(0,i.jsx)(r.td,{children:"controller"}),(0,i.jsx)(r.td,{children:"Time to create an API Session"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"xgress.ack_duplicates"}),(0,i.jsx)(r.td,{children:"Meter"}),(0,i.jsx)(r.td,{children:"router"}),(0,i.jsx)(r.td,{children:"Number of duplicate acks received. Indicates over-eager retransmission"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"xgress.ack_failures"}),(0,i.jsx)(r.td,{children:"Meter"}),(0,i.jsx)(r.td,{children:"router"}),(0,i.jsx)(r.td,{children:"Number of failures sending acks"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"xgress.acks.queue_size"}),(0,i.jsx)(r.td,{children:"Gauge"}),(0,i.jsx)(r.td,{children:"router"}),(0,i.jsx)(r.td,{children:"Number of acks queued to send"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"xgress.blocked_by_local_window"}),(0,i.jsx)(r.td,{children:"Gauge"}),(0,i.jsx)(r.td,{children:"router"}),(0,i.jsx)(r.td,{children:"Number of xgress instances blocked because the windowing threshold has been exceeded locally"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"xgress.blocked_by_remote_window"}),(0,i.jsx)(r.td,{children:"Gauge"}),(0,i.jsx)(r.td,{children:"router"}),(0,i.jsx)(r.td,{children:"Number of xgress instances blocked because the windowing threshold has been exceeded remotely"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"xgress.dropped_payloads"}),(0,i.jsx)(r.td,{children:"Meter"}),(0,i.jsx)(r.td,{children:"router"}),(0,i.jsx)(r.td,{children:"Number of payloads dropped because the xgress receiver side couldn't keep up"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"xgress.retransmission_failures"}),(0,i.jsx)(r.td,{children:"Meter"}),(0,i.jsx)(r.td,{children:"router"}),(0,i.jsx)(r.td,{children:"Number of retransmission send failures"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"xgress.retransmissions"}),(0,i.jsx)(r.td,{children:"Meter"}),(0,i.jsx)(r.td,{children:"router"}),(0,i.jsx)(r.td,{children:"Number of payloads retransmitted"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"xgress.retransmits.queue_size"}),(0,i.jsx)(r.td,{children:"Gauge"}),(0,i.jsx)(r.td,{children:"router"}),(0,i.jsx)(r.td,{children:"Number of payloads queued for retransmission"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"xgress.rx.acks"}),(0,i.jsx)(r.td,{children:"Meter"}),(0,i.jsx)(r.td,{children:"router"}),(0,i.jsx)(r.td,{children:"Number of acks received"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"xgress.tx.acks"}),(0,i.jsx)(r.td,{children:"Meter"}),(0,i.jsx)(r.td,{children:"router"}),(0,i.jsx)(r.td,{children:"Number of acks sent"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"xgress.tx_unacked_payload_bytes"}),(0,i.jsx)(r.td,{children:"Gauge"}),(0,i.jsx)(r.td,{children:"router"}),(0,i.jsx)(r.td,{children:"Total payload data size that has been buffered but not acked yet"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"xgress.tx_unacked_payloads"}),(0,i.jsx)(r.td,{children:"Gauge"}),(0,i.jsx)(r.td,{children:"router"}),(0,i.jsx)(r.td,{children:"Number of payload messages that have been buffered but not yet acked"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"xgress.tx_write_time"}),(0,i.jsx)(r.td,{children:"Timer"}),(0,i.jsx)(r.td,{children:"router"}),(0,i.jsx)(r.td,{children:"Time to write payloads to the xgress receiver"})]})]})]})]})}function x(e={}){const{wrapper:r}={...(0,d.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>n,x:()=>c});var s=t(96540);const i={},d=s.createContext(i);function n(e){const r=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),s.createElement(d.Provider,{value:r},e.children)}}}]);