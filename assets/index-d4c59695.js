import{j as e,b as r,c as a,d as t,I as o,L as m,e as c,P as x}from"./index-3a462e11.js";import{S as n,T as h}from"./StatisticsChartWidget-4a24dd5a.js";import{C as d}from"./CardTitle-b93d986a.js";import{T as j}from"./Table-1c3f720d.js";import{e as p}from"./email-campaign-bf054802.js";import{u}from"./avatar-1-34f0c02a.js";import{u as b}from"./avatar-2-6a377658.js";import{u as f}from"./avatar-3-c5024d76.js";import{u as g}from"./avatar-4-6f552de6.js";import{u as N}from"./avatar-5-90acf0fe.js";import{u as y}from"./avatar-6-cd8a4bbc.js";import"./index-d63f82a7.js";import"./Button-c7c76d56.js";import"./Dropdown-0297e4c2.js";import"./import-beaed125.js";import"./useCallbackRef-aedf03a1.js";import"./mergeOptionsWithPopperConfig-67b37497.js";import"./InputGroupContext-5be72602.js";const w=()=>e.jsxs(r,{children:[e.jsx(a,{md:6,xl:3,children:e.jsx(n,{description:"Campaign Sent",title:"Campaign Sent",stats:"9,184",trend:{textClass:"text-success",icon:"mdi mdi-arrow-up-bold",value:"3.27%"},colors:["#727cf5"],data:[25,66,41,89,63,25,44,12,36,9,54]})}),e.jsx(a,{md:6,xl:3,children:e.jsx(n,{description:"New Leads",title:"New Leads",stats:"3,254",trend:{textClass:"text-danger",icon:"mdi mdi-arrow-down-bold",value:"5.38%"},colors:["#0acf97"],type:"line",data:[25,66,41,89,63,25,44,12,36,9,54]})}),e.jsx(a,{md:6,xl:3,children:e.jsx(n,{description:"Deals",title:"Deals",stats:"861",trend:{textClass:"text-success",icon:"mdi mdi-arrow-up-bold",value:"4.87%"},colors:["#727cf5"],data:[12,14,2,47,42,15,47,75,65,19,14]})}),e.jsx(a,{md:6,xl:3,children:e.jsx(n,{description:"Booked Revenue",title:"Booked Revenue",stats:"$253k",trend:{textClass:"text-success",icon:"mdi mdi-arrow-up-bold",value:"11.7%"},colors:["#0acf97"],data:[47,45,74,14,56,74,14,11,7,39,82]})})]}),v=()=>{const i={grid:{padding:{left:0,right:0}},chart:{height:320,type:"radialBar"},colors:["#ffbc00","#727cf5","#0acf97"],labels:["Total Sent","Reached","Opened"],plotOptions:{radialBar:{track:{margin:8}}}},s=[86,36,50];return e.jsx(t,{children:e.jsxs(t.Body,{children:[e.jsx(d,{containerClass:"d-flex align-items-center justify-content-between mb-1",title:"Campaigns",menuItems:[{label:"Today"},{label:"Yesterday"},{label:"Last Week"},{label:"Last Month"}]}),e.jsx(o,{options:i,series:s,type:"radialBar",className:"apex-charts",height:302}),e.jsxs(r,{className:"text-center mt-3",children:[e.jsxs(a,{sm:4,children:[e.jsx("i",{className:"mdi mdi-send widget-icon rounded-circle bg-light-lighten text-muted"}),e.jsx("h3",{className:"fw-normal mt-3",children:e.jsx("span",{children:"6,510"})}),e.jsxs("p",{className:"text-muted mb-0 mb-2",children:[e.jsx("i",{className:"mdi mdi-checkbox-blank-circle text-warning"})," Total Sent"]})]}),e.jsxs(a,{sm:4,children:[e.jsx("i",{className:"mdi mdi-flag-variant widget-icon rounded-circle bg-light-lighten text-muted"}),e.jsx("h3",{className:"fw-normal mt-3",children:e.jsx("span",{children:"3,487"})}),e.jsxs("p",{className:"text-muted mb-0 mb-2",children:[e.jsx("i",{className:"mdi mdi-checkbox-blank-circle text-primary"})," Reached"]})]}),e.jsxs(a,{sm:4,children:[e.jsx("i",{className:"mdi mdi-email-open widget-icon rounded-circle bg-light-lighten text-muted"}),e.jsx("h3",{className:"fw-normal mt-3",children:e.jsx("span",{children:"1,568"})}),e.jsxs("p",{className:"text-muted mb-0 mb-2",children:[e.jsx("i",{className:"mdi mdi-checkbox-blank-circle text-success"})," Opened"]})]})]})]})})},C=()=>{const i={chart:{height:336,type:"line",toolbar:{show:!1}},stroke:{curve:"smooth",width:2},fill:{type:"solid",opacity:[.35,1]},labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],markers:{size:0},colors:["#0acf97","#fa5c7c"],yaxis:[{title:{text:"Revenue (USD)"},min:0}],tooltip:{shared:!0,intersect:!1,y:{formatter:function(l){return typeof l<"u"?l.toFixed(0)+"k":l}}},grid:{borderColor:"#f1f3fa"},legend:{fontSize:"14px",fontFamily:"14px",offsetY:-10},responsive:[{breakpoint:600,options:{yaxis:{show:!1},legend:{show:!1}}}]},s=[{name:"Total Revenue",type:"area",data:[44,55,31,47,31,43,26,41,31,47,33,43]},{name:"Total Pipeline",type:"line",data:[55,69,45,61,43,54,37,52,44,61,43,56]}];return e.jsx(t,{children:e.jsxs(t.Body,{children:[e.jsx(d,{containerClass:"d-flex align-items-center justify-content-between mb-3",title:"Revenue",menuItems:[{label:"Today"},{label:"Yesterday"},{label:"Last Week"},{label:"Last Month"}]}),e.jsx("div",{className:"chart-content-bg",children:e.jsxs(r,{className:"text-center",children:[e.jsxs(a,{sm:6,children:[e.jsx("p",{className:"text-muted mb-0 mt-3",children:"Current Month"}),e.jsx("h2",{className:"fw-normal mb-3",children:e.jsx("span",{children:"$42,025"})})]}),e.jsxs(a,{sm:6,children:[e.jsx("p",{className:"text-muted mb-0 mt-3",children:"Previous Month"}),e.jsx("h2",{className:"fw-normal mb-3",children:e.jsx("span",{children:"$74,651"})})]})]})}),e.jsx("div",{dir:"ltr",children:e.jsx(o,{options:i,series:s,type:"line",className:"apex-charts",height:321})})]})})},k=({topPerformanceData:i})=>e.jsx(t,{children:e.jsxs(t.Body,{children:[e.jsx(d,{containerClass:"d-flex align-items-center justify-content-between mb-2",title:"Top Performing",menuItems:[{label:"Settings"},{label:"Action"}]}),e.jsxs(j,{hover:!0,responsive:!0,striped:!0,size:"sm",className:"table-centered mb-0 table-nowrap",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"User"}),e.jsx("th",{children:"Leads"}),e.jsx("th",{children:"Deals"}),e.jsx("th",{children:"Tasks"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:(i||[]).map((s,l)=>e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("h5",{className:"font-15 mb-1 fw-normal",children:s.name}),e.jsx("span",{className:"text-muted font-13",children:s.position})]}),e.jsx("td",{children:s.leads}),e.jsx("td",{children:s.deals}),e.jsx("td",{children:s.tasks}),e.jsx("td",{className:"table-action",children:e.jsx(m,{to:"",className:"action-icon",children:e.jsx("i",{className:"mdi mdi-eye"})})})]},l.toString()))})]})]})}),S=({recentLeads:i})=>e.jsx(t,{children:e.jsxs(t.Body,{children:[e.jsx(d,{containerClass:"d-flex align-items-center justify-content-between mb-3",title:"Recent Leads",menuItems:[{label:"Settings"},{label:"Action"}]}),(i||[]).map((s,l)=>e.jsxs("div",{className:c("d-flex","align-items-start",{"mt-3":l!==i.length}),children:[e.jsx("img",{className:"me-3 rounded-circle",src:s.profile,width:"40",alt:"Generic placeholder"}),e.jsxs("div",{className:"w-100 overflow-hidden",children:[e.jsxs("span",{className:c("badge","float-end",{"badge-warning-lighten":s.status==="Cold","badge-danger-lighten":s.status==="Lost","badge-success-lighten":s.status==="Won"}),children:[s.status," lead"]}),e.jsx("h5",{className:"mt-0 mb-1",children:s.name}),e.jsx("span",{className:"font-13",children:s.email})]})]},l.toString()))]})}),L=()=>e.jsx(t,{className:"cta-box bg-primary text-white",children:e.jsx(t.Body,{children:e.jsxs("div",{className:"d-flex align-items-start align-items-center",children:[e.jsxs("div",{className:"w-100 overflow-hidden",children:[e.jsx("h2",{className:"mt-0",children:e.jsx("i",{className:"mdi mdi-bullhorn-outline"})}),e.jsxs("h3",{className:"m-0 fw-normal cta-box-title",children:["Enhance your ",e.jsx("b",{children:"Campaign"})," for better outreach",e.jsx("i",{className:"mdi mdi-arrow-right"})]})]}),e.jsx("img",{className:"ms-3",src:p,width:"120",alt:"Generic placeholder"})]})})}),B=[{id:1,name:"Jeremy Young",position:"Senior Sales Executive",leads:187,deals:154,tasks:49},{id:2,name:"Thomas Krueger",position:"Senior Sales Executive",leads:235,deals:127,tasks:83},{id:3,name:"Pete Burdine",position:"Senior Sales Executive",leads:365,deals:148,tasks:62},{id:4,name:"Mary Nelson",position:"Senior Sales Executive",leads:753,deals:159,tasks:258},{id:5,name:"Kevin Grove",position:"Senior Sales Executive",leads:458,deals:126,tasks:73}],R=[{id:1,name:"Risa Pearson",email:"richard.john@mail.com",profile:b,status:"Cold"},{id:2,name:"Margaret D. Evans",email:"margaret.evans@rhyta.com",profile:f,status:"Lost"},{id:3,name:"Bryan J. Luellen",email:"bryuellen@dayrep.com",profile:g,status:"Won"},{id:4,name:"Kathryn S. Collier",email:"collier@jourrapide.com",profile:N,status:"Cold"},{id:5,name:"Timothy Kauper",email:"thykauper@rhyta.com",profile:u,status:"Cold"},{id:6,name:"Zara Raws",email:"austin@dayrep.com",profile:y,status:"Won"}],_=()=>e.jsxs(e.Fragment,{children:[e.jsx(x,{title:"CRM",subName:"Dashboard"}),e.jsx(w,{}),e.jsxs(r,{children:[e.jsx(a,{lg:5,children:e.jsx(v,{})}),e.jsx(a,{lg:7,children:e.jsx(C,{})})]}),e.jsxs(r,{children:[e.jsx(a,{xl:4,lg:12,children:e.jsx(k,{topPerformanceData:B})}),e.jsx(a,{xl:4,lg:6,children:e.jsx(S,{recentLeads:R})}),e.jsxs(a,{xl:4,lg:6,children:[e.jsx(L,{}),e.jsx(h,{height:"220px"})]})]})]});export{_ as default};
