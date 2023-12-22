import{j as e,b as c,c as s,d as a,I as x,L as t,r as h,J as j}from"./index-3a462e11.js";import{S as d,T as p,a as r}from"./TimelineItem-c780a28b.js";import{C as m}from"./CardTitle-b93d986a.js";import{W as f}from"./WorldMap-dbf734ca.js";import{P as o}from"./ProgressBar-6d0ccb8b.js";import{S as u}from"./index-d63f82a7.js";import{T as b}from"./Table-1c3f720d.js";import"./Dropdown-0297e4c2.js";import"./import-beaed125.js";import"./useCallbackRef-aedf03a1.js";import"./mergeOptionsWithPopperConfig-67b37497.js";import"./InputGroupContext-5be72602.js";import"./Button-c7c76d56.js";const N=()=>e.jsxs(e.Fragment,{children:[e.jsxs(c,{children:[e.jsx(s,{sm:6,children:e.jsx(d,{icon:"mdi mdi-account-multiple",description:"Number of Customers",title:"Customers",stats:"36,254",trend:{textClass:"text-success",icon:"mdi mdi-arrow-up-bold",value:"5.27%",time:"Since last month"}})}),e.jsx(s,{sm:6,children:e.jsx(d,{icon:"mdi mdi-cart-plus",description:"Number of Orders",title:"Orders",stats:"5,543",trend:{textClass:"text-danger",icon:"mdi mdi-arrow-down-bold",value:"1.08%",time:"Since last month"}})})]}),e.jsxs(c,{children:[e.jsx(s,{sm:6,children:e.jsx(d,{icon:"mdi mdi-currency-usd",description:"Revenue",title:"Revenue",stats:"$6,254",trend:{textClass:"text-danger",icon:"mdi mdi-arrow-down-bold",value:"7.00%",time:"Since last month"}})}),e.jsx(s,{sm:6,children:e.jsx(d,{icon:"mdi mdi-pulse",description:"Growth",title:"Growth",stats:"+ 30.56%",trend:{textClass:"text-success",icon:"mdi mdi-arrow-up-bold",value:"4.87%",time:"Since last month"}})})]})]}),g=()=>{const l={chart:{height:260,type:"bar",stacked:!0,parentHeightOffset:0,toolbar:{show:!1},zoom:{enabled:!1}},plotOptions:{bar:{horizontal:!1,columnWidth:"20%"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},legend:{show:!1},colors:["#727cf5","#e3eaef"],xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],axisBorder:{show:!1}},yaxis:{labels:{formatter:function(n){return n+"k"}}},fill:{opacity:1},tooltip:{y:{formatter:function(n){return"$"+n+"k"}}}},i=[{name:"Actual",data:[65,59,80,81,56,89,40,32,65,59,80,81]},{name:"Projection",data:[89,40,32,65,59,80,81,56,89,40,65,59]}];return e.jsx(a,{className:"card-h-100",children:e.jsxs(a.Body,{children:[e.jsx(m,{containerClass:"d-flex align-items-center justify-content-between mb-2",title:"Projections Vs Actuals",menuItems:[{label:"Sales Report"},{label:"Export Report"},{label:"Profit"},{label:"Action"}]}),e.jsx("div",{dir:"ltr",children:e.jsx(x,{options:l,series:i,type:"bar",className:"apex-charts",height:255})})]})})},y=()=>{const l={chart:{height:364,type:"line",dropShadow:{enabled:!0,opacity:.1,blur:7,left:-7,top:7},toolbar:{show:!1},zoom:{enabled:!1},parentHeightOffset:0},grid:{padding:{left:0,right:0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:4},legend:{show:!1},colors:["#727cf5","#0acf97","#fa5c7c","#ffbc00"],xaxis:{categories:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],tooltip:{enabled:!1},axisBorder:{show:!1}},yaxis:{labels:{formatter:function(n){return n+"k"}}}},i=[{name:"Current Week",data:[10,20,15,25,20,30,20]},{name:"Previous Week",data:[0,15,10,30,15,35,25]}];return e.jsx(a,{children:e.jsxs(a.Body,{children:[e.jsx(m,{containerClass:"d-flex align-items-center justify-content-between mb-2",title:"Revenue",menuItems:[{label:"Sales Report"},{label:"Export Report"},{label:"Profit"},{label:"Action"}]}),e.jsx("div",{className:"chart-content-bg",children:e.jsxs(c,{className:"text-center",children:[e.jsxs(s,{md:6,children:[e.jsx("p",{className:"text-muted mb-0 mt-3",children:"Current Week"}),e.jsxs("h2",{className:"fw-normal mb-3",children:[e.jsx("small",{className:"mdi mdi-checkbox-blank-circle text-primary align-middle me-1"}),e.jsx("span",{children:"$58,254"})]})]}),e.jsxs(s,{md:6,children:[e.jsx("p",{className:"text-muted mb-0 mt-3",children:"Previous Week"}),e.jsxs("h2",{className:"fw-normal mb-3",children:[e.jsx("small",{className:"mdi mdi-checkbox-blank-circle text-success align-middle me-1"}),e.jsx("span",{children:"$69,524"})]})]})]})}),e.jsxs("div",{className:"dash-item-overlay d-none d-md-block",children:[e.jsx("h5",{children:"Today's Earning: $2,562.30"}),e.jsx("p",{className:"text-muted font-13 mb-3 mt-2",children:"Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus..."}),e.jsxs(t,{to:"",className:"btn btn-outline-primary",children:["View Statements",e.jsx("i",{className:"mdi mdi-arrow-right ms-2"})]})]}),e.jsx(x,{options:l,series:i,type:"line",className:"apex-charts mt-3",height:378})]})})},w=()=>{const l={zoomOnScroll:!1,markers:[{name:"New York",coords:[40.71,-74]},{name:"San Francisco",coords:[37.77,-122.41]},{name:"Sydney",coords:[-33.86,151.2]},{name:"Singapore",coords:[1.3,103.8]}],markerStyle:{initial:{r:9,fill:"#727cf5","fill-opacity":.9,stroke:"#fff","stroke-width":7,"stroke-opacity":.4},hover:{fill:"#727cf5",stroke:"#fff","fill-opacity":1,"stroke-width":1.5}},regionStyle:{initial:{fill:"#e3eaef"}}};return e.jsx(a,{children:e.jsxs(a.Body,{children:[e.jsx(m,{containerClass:"d-flex align-items-center justify-content-between",title:"Revenue By Location",menuItems:[{label:"Sales Report"},{label:"Export Report"},{label:"Profit"},{label:"Action"}]}),e.jsx("div",{className:"mb-4 mt-4",children:e.jsx(f,{height:"224px",width:"100%",options:l})}),e.jsx("h5",{className:"mb-1 mt-0 fw-normal",children:"New York"}),e.jsxs("div",{className:"progress-w-percent",children:[e.jsx("span",{className:"progress-value fw-bold",children:"72k"}),e.jsx(o,{now:72,className:"progress-sm"})]}),e.jsx("h5",{className:"mb-1 mt-0 fw-normal",children:"San Francisco"}),e.jsxs("div",{className:"progress-w-percent",children:[e.jsx("span",{className:"progress-value fw-bold",children:"39k"}),e.jsx(o,{now:39,className:"progress-sm"})]}),e.jsx("h5",{className:"mb-1 mt-0 fw-normal",children:"Sydney"}),e.jsxs("div",{className:"progress-w-percent",children:[e.jsx("span",{className:"progress-value fw-bold",children:"25k"}),e.jsx(o,{now:25,className:"progress-sm"})]}),e.jsx("h5",{className:"mb-1 mt-0 fw-normal",children:"Singapore"}),e.jsxs("div",{className:"progress-w-percent mb-0",children:[e.jsx("span",{className:"progress-value fw-bold",children:"61k"}),e.jsx(o,{now:61,className:"progress-sm"})]})]})})},v=()=>{const l={chart:{height:340,type:"donut"},colors:["#727cf5","#0acf97","#fa5c7c","#ffbc00"],legend:{show:!1},responsive:[{breakpoint:376,options:{chart:{width:250,height:250},legend:{position:"bottom"}}}]},i=[44,55,41,17];return e.jsx(a,{children:e.jsxs(a.Body,{children:[e.jsx(m,{containerClass:"d-flex align-items-center justify-content-between",title:"Total Sales",menuItems:[{label:"Sales Report"},{label:"Export Report"},{label:"Profit"},{label:"Action"}]}),e.jsx(x,{options:l,series:i,type:"donut",height:222,className:"apex-charts mb-4 mt-4"}),e.jsxs("div",{className:"chart-widget-list",children:[e.jsxs("p",{children:[e.jsx("i",{className:"mdi mdi-square text-primary"})," Direct",e.jsx("span",{className:"float-end",children:"$300.56"})]}),e.jsxs("p",{children:[e.jsx("i",{className:"mdi mdi-square text-danger"})," Affilliate",e.jsx("span",{className:"float-end",children:"$135.18"})]}),e.jsxs("p",{children:[e.jsx("i",{className:"mdi mdi-square text-success"})," Sponsored",e.jsx("span",{className:"float-end",children:"$48.96"})]}),e.jsxs("p",{className:"mb-0",children:[e.jsx("i",{className:"mdi mdi-square text-warning"})," E-mail",e.jsx("span",{className:"float-end",children:"$154.02"})]})]})]})})},S=()=>e.jsxs(a,{children:[e.jsx(a.Body,{className:"pb-0",children:e.jsx(m,{containerClass:"d-flex align-items-center justify-content-between mb-2",title:"Recent Activity",menuItems:[{label:"Sales Report"},{label:"Export Report"},{label:"Profit"},{label:"Action"}]})}),e.jsx(u,{style:{maxHeight:"412px",width:"100%"},children:e.jsx(a.Body,{className:"py-0",children:e.jsxs(p,{children:[e.jsxs(r,{children:[e.jsx("i",{className:"mdi mdi-upload bg-info-lighten text-info timeline-icon"}),e.jsxs("div",{className:"timeline-item-info",children:[e.jsx(t,{to:"",className:"text-info fw-bold mb-1 d-block",children:"You sold an item"}),e.jsx("small",{children:"Paul Burgess just purchased “Hyper - Admin Dashboard”!"}),e.jsx("p",{className:"mb-0 pb-2",children:e.jsx("small",{className:"text-muted",children:"5 minutes ago"})})]})]}),e.jsxs(r,{children:[e.jsx("i",{className:"mdi mdi-airplane bg-primary-lighten text-primary timeline-icon"}),e.jsxs("div",{className:"timeline-item-info",children:[e.jsx(t,{to:"",className:"text-primary fw-bold mb-1 d-block",children:"Product on the Bootstrap Market"}),e.jsxs("small",{children:["Dave Gamache added",e.jsx("span",{className:"fw-bold",children:"Admin Dashboard"})]}),e.jsx("p",{className:"mb-0 pb-2",children:e.jsx("small",{className:"text-muted",children:"30 minutes ago"})})]})]}),e.jsxs(r,{children:[e.jsx("i",{className:"mdi mdi-microphone bg-info-lighten text-info timeline-icon"}),e.jsxs("div",{className:"timeline-item-info",children:[e.jsx(t,{to:"",className:"text-info fw-bold mb-1 d-block",children:"Robert Delaney"}),e.jsxs("small",{children:["Send you message",e.jsx("span",{className:"fw-bold",children:'"Are you there?"'})]}),e.jsx("p",{className:"mb-0 pb-2",children:e.jsx("small",{className:"text-muted",children:"2 hours ago"})})]})]}),e.jsxs(r,{children:[e.jsx("i",{className:"mdi mdi-upload bg-primary-lighten text-primary timeline-icon"}),e.jsxs("div",{className:"timeline-item-info",children:[e.jsx(t,{to:"",className:"text-primary fw-bold mb-1 d-block",children:"Audrey Tobey"}),e.jsxs("small",{children:["Uploaded a photo ",e.jsx("span",{className:"fw-bold",children:'"Error.jpg"'})]}),e.jsx("p",{className:"mb-0 pb-2",children:e.jsx("small",{className:"text-muted",children:"14 hours ago"})})]})]}),e.jsxs(r,{children:[e.jsx("i",{className:"mdi mdi-airplane bg-primary-lighten text-primary timeline-icon"}),e.jsxs("div",{className:"timeline-item-info",children:[e.jsx(t,{to:"",className:"text-primary fw-bold mb-1 d-block",children:"Product on the Bootstrap Market"}),e.jsxs("small",{children:["Dave Gamache added",e.jsx("span",{className:"fw-bold",children:"Admin Dashboard"})]}),e.jsx("p",{className:"mb-0 pb-2",children:e.jsx("small",{className:"text-muted",children:"30 minutes ago"})})]})]}),e.jsxs(r,{children:[e.jsx("i",{className:"mdi mdi-microphone bg-info-lighten text-info timeline-icon"}),e.jsxs("div",{className:"timeline-item-info",children:[e.jsx(t,{to:"",className:"text-info fw-bold mb-1 d-block",children:"Robert Delaney"}),e.jsxs("small",{children:["Send you message",e.jsx("span",{className:"fw-bold",children:'"Are you there?"'})]}),e.jsx("p",{className:"mb-0 pb-2",children:e.jsx("small",{className:"text-muted",children:"2 hours ago"})})]})]}),e.jsxs(r,{children:[e.jsx("i",{className:"mdi mdi-upload bg-primary-lighten text-primary timeline-icon"}),e.jsxs("div",{className:"timeline-item-info",children:[e.jsx(t,{to:"",className:"text-primary fw-bold mb-1 d-block",children:"Audrey Tobey"}),e.jsxs("small",{children:["Uploaded a photo ",e.jsx("span",{className:"fw-bold",children:'"Error.jpg"'})]}),e.jsx("p",{className:"mb-0 pb-2",children:e.jsx("small",{className:"text-muted",children:"14 hours ago"})})]})]})]})})})]}),k=()=>e.jsxs(a,{children:[e.jsxs(a.Header,{className:"d-flex justify-content-between align-items-center",children:[e.jsx("h4",{className:"header-title",children:"Top Selling Products"}),e.jsxs(t,{to:"",className:"btn btn-sm btn-light",children:["Export ",e.jsx("i",{className:"mdi mdi-download ms-1"})]})]}),e.jsx(a.Body,{className:"pt-0",children:e.jsx(b,{hover:!0,responsive:!0,className:"mb-0",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("h5",{className:"font-14 my-1 fw-normal",children:"ASOS Ridley High Waist"}),e.jsx("span",{className:"text-muted font-13",children:"07 April 2018"})]}),e.jsxs("td",{children:[e.jsx("h5",{className:"font-14 my-1 fw-normal",children:"$79.49"}),e.jsx("span",{className:"text-muted font-13",children:"Price"})]}),e.jsxs("td",{children:[e.jsx("h5",{className:"font-14 my-1 fw-normal",children:"82"}),e.jsx("span",{className:"text-muted font-13",children:"Quantity"})]}),e.jsxs("td",{children:[e.jsx("h5",{className:"font-14 my-1 fw-normal",children:"$6,518.18"}),e.jsx("span",{className:"text-muted font-13",children:"Amount"})]})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("h5",{className:"font-14 my-1 fw-normal",children:"Marco Lightweight Shirt"}),e.jsx("span",{className:"text-muted font-13",children:"25 March 2018"})]}),e.jsxs("td",{children:[e.jsx("h5",{className:"font-14 my-1 fw-normal",children:"$128.50"}),e.jsx("span",{className:"text-muted font-13",children:"Price"})]}),e.jsxs("td",{children:[e.jsx("h5",{className:"font-14 my-1 fw-normal",children:"37"}),e.jsx("span",{className:"text-muted font-13",children:"Quantity"})]}),e.jsxs("td",{children:[e.jsx("h5",{className:"font-14 my-1 fw-normal",children:"$4,754.50"}),e.jsx("span",{className:"text-muted font-13",children:"Amount"})]})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("h5",{className:"font-14 my-1 fw-normal",children:"Half Sleeve Shirt"}),e.jsx("span",{className:"text-muted font-13",children:"17 March 2018"})]}),e.jsxs("td",{children:[e.jsx("h5",{className:"font-14 my-1 fw-normal",children:"$39.99"}),e.jsx("span",{className:"text-muted font-13",children:"Price"})]}),e.jsxs("td",{children:[e.jsx("h5",{className:"font-14 my-1 fw-normal",children:"64"}),e.jsx("span",{className:"text-muted font-13",children:"Quantity"})]}),e.jsxs("td",{children:[e.jsx("h5",{className:"font-14 my-1 fw-normal",children:"$2,559.36"}),e.jsx("span",{className:"text-muted font-13",children:"Amount"})]})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("h5",{className:"font-14 my-1 fw-normal",children:"Lightweight Jacket"}),e.jsx("span",{className:"text-muted font-13",children:"12 March 2018"})]}),e.jsxs("td",{children:[e.jsx("h5",{className:"font-14 my-1 fw-normal",children:"$20.00"}),e.jsx("span",{className:"text-muted font-13",children:"Price"})]}),e.jsxs("td",{children:[e.jsx("h5",{className:"font-14 my-1 fw-normal",children:"184"}),e.jsx("span",{className:"text-muted font-13",children:"Quantity"})]}),e.jsxs("td",{children:[e.jsx("h5",{className:"font-14 my-1 fw-normal",children:"$3,680.00"}),e.jsx("span",{className:"text-muted font-13",children:"Amount"})]})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("h5",{className:"font-14 my-1 fw-normal",children:"Marco Shoes"}),e.jsx("span",{className:"text-muted font-13",children:"05 March 2018"})]}),e.jsxs("td",{children:[e.jsx("h5",{className:"font-14 my-1 fw-normal",children:"$28.49"}),e.jsx("span",{className:"text-muted font-13",children:"Price"})]}),e.jsxs("td",{children:[e.jsx("h5",{className:"font-14 my-1 fw-normal",children:"69"}),e.jsx("span",{className:"text-muted font-13",children:"Quantity"})]}),e.jsxs("td",{children:[e.jsx("h5",{className:"font-14 my-1 fw-normal",children:"$1,965.81"}),e.jsx("span",{className:"text-muted font-13",children:"Amount"})]})]})]})})})]}),H=()=>{const[l,i]=h.useState(new Date);return e.jsxs(e.Fragment,{children:[e.jsx(c,{children:e.jsx(s,{xs:12,children:e.jsxs("div",{className:"page-title-box",children:[e.jsx("div",{className:"page-title-right",children:e.jsxs("form",{className:"d-flex",children:[e.jsx("div",{className:"input-group",children:e.jsx(j,{value:l,inputClass:"form-control-light",onChange:n=>{i(n)}})}),e.jsx(t,{to:"",className:"btn btn-primary ms-2",children:e.jsx("i",{className:"mdi mdi-autorenew"})}),e.jsx(t,{to:"",className:"btn btn-primary ms-1",children:e.jsx("i",{className:"mdi mdi-filter-variant"})})]})}),e.jsx("h4",{className:"page-title",children:"Dashboard"})]})})}),e.jsxs(c,{children:[e.jsx(s,{xl:5,lg:6,children:e.jsx(N,{})}),e.jsx(s,{xl:7,lg:6,children:e.jsx(g,{})})]}),e.jsxs(c,{children:[e.jsx(s,{lg:8,children:e.jsx(y,{})}),e.jsx(s,{lg:4,children:e.jsx(w,{})})]}),e.jsxs(c,{children:[e.jsx(s,{xl:{span:6,order:1},lg:{span:12,order:2},children:e.jsx(k,{})}),e.jsx(s,{xl:3,lg:{span:6,order:1},children:e.jsx(v,{})}),e.jsx(s,{xl:3,lg:{span:6,order:1},children:e.jsx(S,{})})]})]})};export{H as default};
