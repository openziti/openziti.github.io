"use strict";(self.webpackChunkdocusaurus_3=self.webpackChunkdocusaurus_3||[]).push([[207],{55854:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>a,default:()=>o,frontMatter:()=>r,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"learn/core-concepts/metrics/types","title":"Types","description":"OpenZiti is instrumenting more code and adding additional metrics all of the time. This section will describe the different types of metrics that OpenZiti reports, not individual metric names.","source":"@site/docs/learn/core-concepts/metrics/05-types.md","sourceDirName":"learn/core-concepts/metrics","slug":"/learn/core-concepts/metrics/types","permalink":"/docs/learn/core-concepts/metrics/types","draft":false,"unlisted":false,"editUrl":"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/learn/core-concepts/metrics/05-types.md","tags":[],"version":"current","lastUpdatedAt":1743027175000,"sidebarPosition":5,"frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Overview","permalink":"/docs/learn/core-concepts/metrics/overview"},"next":{"title":"Available Metrics","permalink":"/docs/learn/core-concepts/metrics/available-metrics"}}');var s=n(74848),l=n(28453);const r={},a="Types",d={},c=[{value:"intValue/floatValue",id:"intvaluefloatvalue",level:2},{value:"Histogram",id:"histogram",level:2},{value:"Meter",id:"meter",level:2},{value:"Timer",id:"timer",level:2},{value:"Gauge",id:"gauge",level:2}];function h(e){const i={h1:"h1",h2:"h2",header:"header",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"types",children:"Types"})}),"\n",(0,s.jsx)(i.p,{children:"OpenZiti is instrumenting more code and adding additional metrics all of the time. This section will describe the different types of metrics that OpenZiti reports, not individual metric names."}),"\n",(0,s.jsx)(i.h2,{id:"intvaluefloatvalue",children:"intValue/floatValue"}),"\n",(0,s.jsx)(i.p,{children:"A gauge of a single value.  The value is the current metric value, and can go up and down over time"}),"\n",(0,s.jsx)(i.h2,{id:"histogram",children:"Histogram"}),"\n",(0,s.jsx)(i.p,{children:"Histogram metrics utilize the Go metrics module, and are set to a 128 sample exponentially decaying bucket with a alpha value of .015.  This is important to understand, especially in reference to minimum and maximum values.  The bucket is sample bound, not time bound.  In practice this means one will often see a maximum or minimum value that carries on for several time samples; this is expected behavior. For example, link latency is measured every 10 seconds by default.  This means a maximum value can be in place for 21:40 minutes (128 * 10s).  When viewing the measurements, it is important to keep this in mind, as it may appear that a low or high value is more prevalent than it actually is, if you are  familiar with thinking of time bound buckets. The histogram implementation allows for extremely fast and memory efficient data collection.  As some of the metrics are multiplied by multiple levels of cardinality, it is critical to maintaining the operations of the software."}),"\n",(0,s.jsx)(i.p,{children:"An exponentially decaying histogram means that as the samples age across the 128 sample window, they are weighted less than the newer samples.  This makes functions, such as the mean, which is often used, able to respond more quickly to changes than a straight sliding window.  An alpha value of .015 means that the sample weights range from 1 (the newest sample) to approximately .93.  This means that when calculating the mean, the oldest sample in the window is weighted to 93%, reducing its contribution to the function."}),"\n",(0,s.jsx)(i.p,{children:"A simple weighting exercise:\nGiven 3 samples, 10, 5, and 5, how does the weighting and order affect the mean function? (This is not the same actual function of the histogram, but is intended to help explain the decaying function nd the impact of the age of the sample on the measurements)"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Sample"}),(0,s.jsx)(i.th,{children:"Weight"}),(0,s.jsx)(i.th,{children:"Weighted Value"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"10"}),(0,s.jsx)(i.td,{children:"1.0"}),(0,s.jsx)(i.td,{children:"10.0"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"5"}),(0,s.jsx)(i.td,{children:".95"}),(0,s.jsx)(i.td,{children:"4.75"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"5"}),(0,s.jsx)(i.td,{children:".90"}),(0,s.jsx)(i.td,{children:"4.5"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Sum"}),(0,s.jsx)(i.td,{children:"2.85"}),(0,s.jsx)(i.td,{children:"19.25"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Mean"}),(0,s.jsx)(i.td,{children:"19.25/2.85"}),(0,s.jsx)(i.td,{children:"6.75"})]})]})]}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Sample"}),(0,s.jsx)(i.th,{children:"Weight"}),(0,s.jsx)(i.th,{children:"Weighted Value"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"5"}),(0,s.jsx)(i.td,{children:"1.0"}),(0,s.jsx)(i.td,{children:"5.0"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"5"}),(0,s.jsx)(i.td,{children:".95"}),(0,s.jsx)(i.td,{children:"4.75"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"10"}),(0,s.jsx)(i.td,{children:".90"}),(0,s.jsx)(i.td,{children:"9.0"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Sum"}),(0,s.jsx)(i.td,{children:"2.85"}),(0,s.jsx)(i.td,{children:"18.75"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Mean"}),(0,s.jsx)(i.td,{children:"18.75/2.85"}),(0,s.jsx)(i.td,{children:"6.58"})]})]})]}),"\n",(0,s.jsx)(i.p,{children:"Standard histograms provide:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"min"}),"\n",(0,s.jsx)(i.li,{children:"max"}),"\n",(0,s.jsx)(i.li,{children:"mean"}),"\n",(0,s.jsx)(i.li,{children:"stdev"}),"\n",(0,s.jsx)(i.li,{children:"variance"}),"\n",(0,s.jsxs)(i.li,{children:["percentiles","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"p50"}),"\n",(0,s.jsx)(i.li,{children:"p75"}),"\n",(0,s.jsx)(i.li,{children:"p95"}),"\n",(0,s.jsx)(i.li,{children:"p99"}),"\n",(0,s.jsx)(i.li,{children:"p999"}),"\n",(0,s.jsx)(i.li,{children:"p9999"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"It is important to note the sample size (128) means the more specific percentiles will use the same actual values, and may be repetitive."}),"\n",(0,s.jsx)(i.h2,{id:"meter",children:"Meter"}),"\n",(0,s.jsx)(i.p,{children:"Meters are used for rate measurements, how much of something happened per unit time.  The samples are exponentially decayed, similar to the histogram, however the values are bound to specific time intervals, such as 1, 5, and 15 minutes.  They can also provide similar statistical values to histograms"}),"\n",(0,s.jsx)(i.p,{children:"Meter metric with:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"count"}),"\n",(0,s.jsx)(i.li,{children:"m1_rate"}),"\n",(0,s.jsx)(i.li,{children:"m5_rate"}),"\n",(0,s.jsx)(i.li,{children:"m15_rate"}),"\n",(0,s.jsx)(i.li,{children:"min"}),"\n",(0,s.jsx)(i.li,{children:"max"}),"\n",(0,s.jsx)(i.li,{children:"mean"}),"\n",(0,s.jsx)(i.li,{children:"std_dev"}),"\n",(0,s.jsx)(i.li,{children:"variance"}),"\n",(0,s.jsxs)(i.li,{children:["percentiles","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"p50"}),"\n",(0,s.jsx)(i.li,{children:"p75"}),"\n",(0,s.jsx)(i.li,{children:"p95"}),"\n",(0,s.jsx)(i.li,{children:"p99"}),"\n",(0,s.jsx)(i.li,{children:"p999"}),"\n",(0,s.jsx)(i.li,{children:"p9999"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"timer",children:"Timer"}),"\n",(0,s.jsx)(i.p,{children:"Timers provide statistical samples of timed events."}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"min"}),"\n",(0,s.jsx)(i.li,{children:"max"}),"\n",(0,s.jsx)(i.li,{children:"mean"}),"\n",(0,s.jsx)(i.li,{children:"std_dev"}),"\n",(0,s.jsx)(i.li,{children:"variance"}),"\n",(0,s.jsxs)(i.li,{children:["percentiles","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"p50"}),"\n",(0,s.jsx)(i.li,{children:"p75"}),"\n",(0,s.jsx)(i.li,{children:"p95"}),"\n",(0,s.jsx)(i.li,{children:"p99"}),"\n",(0,s.jsx)(i.li,{children:"p999"}),"\n",(0,s.jsx)(i.li,{children:"p9999"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"gauge",children:"Gauge"}),"\n",(0,s.jsx)(i.p,{children:"Gauges present a point in time measurement of a metric.  For example, the number of open database transactions at a given moment."})]})}function o(e={}){const{wrapper:i}={...(0,l.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>a});var t=n(96540);const s={},l=t.createContext(s);function r(e){const i=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(l.Provider,{value:i},e.children)}}}]);