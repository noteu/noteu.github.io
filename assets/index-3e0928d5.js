import{j as e,s,L as n,M as m,e as h,k as x,m as d,P as u,b as i,c as r,d as o,F as j,T as p}from"./index-3a462e11.js";import{S as y}from"./SelectInput-cc366491.js";import{T as g}from"./Table-1c3f720d.js";import{u as N}from"./avatar-1-34f0c02a.js";import{u as v}from"./avatar-2-6a377658.js";import{u as b}from"./avatar-3-c5024d76.js";import{u as f}from"./avatar-4-6f552de6.js";import{u as C}from"./avatar-5-90acf0fe.js";import{u as S}from"./avatar-6-cd8a4bbc.js";import{a as M}from"./avatar-7-56a9c2de.js";import{a as P}from"./avatar-8-4aaf1246.js";import{a as w}from"./avatar-9-37cf6792.js";import{a as I}from"./avatar-10-ffe845e5.js";import{B as c}from"./Button-c7c76d56.js";const J=({orderData:t})=>e.jsxs(g,{responsive:!0,className:"table-centered table-nowrap mb-0",children:[e.jsx("thead",{className:"table-light",children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"20px"},children:e.jsx(s,{children:e.jsx(s.Check,{type:"checkbox",id:"all"})})}),e.jsx("th",{children:"Order ID"}),e.jsx("th",{children:"Customers"}),e.jsx("th",{children:"Project"}),e.jsx("th",{children:"Address"}),e.jsx("th",{children:"Date Order"}),e.jsx("th",{children:"Order Status"}),e.jsx("th",{style:{width:"125px"},children:"Action"})]})}),e.jsx("tbody",{children:(t||[]).map((a,l)=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s,{children:e.jsx(s.Check,{type:"checkbox",id:a.orderId})})}),e.jsx("td",{children:e.jsx(n,{to:"",className:"text-body fw-bold",children:a.orderId})}),e.jsx("td",{children:e.jsx("div",{className:"d-flex",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx("img",{src:a.avatar,className:"rounded-circle avatar-xs",alt:"friend"})}),e.jsx("div",{className:"flex-grow-1 ms-2",children:e.jsx("h5",{className:"my-0",children:a.name})})]})})}),e.jsx("td",{children:a.projectName}),e.jsxs("td",{children:[e.jsx("h5",{className:"my-0",children:a.country}),e.jsx("p",{className:"mb-0 txt-muted",children:a.city})]}),e.jsx("td",{children:a.date}),e.jsx("td",{children:e.jsx("h5",{className:"my-0",children:e.jsx(m,{bg:"",className:h({"badge-info-lighten":a.orderStatus==="In Progress","badge-success-lighten":a.orderStatus==="Complete","badge-warning-lighten":a.orderStatus==="Pending","badge-primary-lighten":a.orderStatus==="Delivered"}),children:a.orderStatus})})}),e.jsxs("td",{children:[e.jsx(n,{to:"",className:"action-icon",children:e.jsx("i",{className:"mdi mdi-square-edit-outline"})}),e.jsx(n,{to:"",className:"action-icon",children:e.jsx("i",{className:"mdi mdi-delete"})})]})]},l.toString()))})]}),k=[{orderId:"#CM9708",avatar:N,name:"Jerry Geiger",projectName:"Landing Page",country:"New York",city:"Meadow Lane Oakland",date:"01 January 2022",orderStatus:"In Progress"},{orderId:"#CM9707",avatar:v,name:"Adam Thomas",projectName:"Client Project (Sktech)",country:"Canada",city:"Bagwell Avenue Ocala",date:"02 January 2022",orderStatus:"Complete"},{orderId:"#CM9706",avatar:b,name:"Sara Lewis",projectName:"Admin Dashboard",country:"Denmark",city:"Washburn Baton Rouge",date:"03 January 2022",orderStatus:"Pending"},{orderId:"#CM9705",avatar:f,name:"Myrtle Johnson",projectName:"Landing Page (Figma)",country:"Brazil",city:"Nest Lane Olivette",date:"04 January 2022",orderStatus:"Delivered"},{orderId:"#CM9704",avatar:C,name:"Bryan Collier",projectName:"App Landing Page",country:"Mexico",city:"Larry San Francisco",date:"05 January 2022",orderStatus:"In Progress"},{orderId:"#CM9703",avatar:S,name:"Joshua Moody",projectName:"CRM Admin pages",country:"Russia",city:"Oak Drive Mobile",date:"06 January 2022",orderStatus:"Complete"},{orderId:"#CM9702",avatar:M,name:"John Clune",projectName:"Ecommerce Dashboard",country:"Manitoba",city:"Oxford Court Amory",date:"07 January 2022",orderStatus:"Delivered"},{orderId:"#CM9701",avatar:P,name:"Jamie Romero",projectName:"Logo Design",country:"Nova Scotia",city:"Lane New Market",date:"08 January 2022",orderStatus:"Pending"},{orderId:"#CM9700",avatar:w,name:"Clint Percival",projectName:"PHP Project",country:"Manitoba",city:"Wilson Avenue Dallas",date:"09 January 2022",orderStatus:"Delivered"},{orderId:"#CM9699",avatar:I,name:"Donna Lynch",projectName:"Landing Section",country:"Yukon",city:"Avenue Johnson country",date:"10 January 2022",orderStatus:"Complete"}],Y=()=>{const t=x({email:d().email("Please enter valid email").required("Please enter email"),password:d().required("Please enter password")});return e.jsxs(e.Fragment,{children:[e.jsx(u,{title:"Orders List",subName:"CRM"}),e.jsx(i,{children:e.jsx(r,{xs:12,children:e.jsx(o,{children:e.jsxs(o.Body,{children:[e.jsxs("div",{className:"mb-2 row",children:[e.jsx(j,{onSubmit:()=>{},schema:t,className:"col-xl-8",children:e.jsxs(i,{className:"gy-2 gx-2 align-items-center justify-content-xl-start justify-content-between",children:[e.jsx(r,{xs:"auto",children:e.jsx(p,{type:"text",name:"search",placeholder:"Search..."})}),e.jsx(r,{xs:"auto",children:e.jsxs(s.Group,{as:i,className:"align-items-center",children:[e.jsx(s.Label,{htmlFor:"exampleEmail3",as:r,sm:3,className:"mb-0 fw-medium",children:"Status"}),e.jsx(r,{sm:9,children:e.jsxs(y,{name:"select",className:"form-select",children:[e.jsx("option",{children:"Choose..."}),e.jsx("option",{children:"Paid"}),e.jsx("option",{children:"Awaiting Authorization"}),e.jsx("option",{children:"Payment failed"}),e.jsx("option",{children:"Cash On Delivery"}),e.jsx("option",{children:"Fulfilled"}),e.jsx("option",{children:"Unfulfilled"})]},"select")})]})})]})}),e.jsx(r,{xl:4,children:e.jsxs("div",{className:"text-xl-end mt-xl-0 mt-2",children:[e.jsxs(c,{variant:"danger",className:"mb-2 me-2",children:[e.jsx("i",{className:"mdi mdi-basket me-1"})," Add New Order"]}),e.jsx(c,{variant:"light",className:"mb-2",children:"Export"})]})})]}),e.jsx(J,{orderData:k})]})})})})]})};export{Y as default};
