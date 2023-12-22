import{r as h,j as e,P as u,b as r,c as s,d as n,J as c,L as b}from"./index-3a462e11.js";import{S as x}from"./react-select.esm-15a5a00f.js";import{T as j}from"./Typeahead-ed11ddfb.js";import{M as d}from"./reactTextMask-17efd513.js";/* empty css                  */import"./hoist-non-react-statics.cjs-88e7e0b0.js";import"./objectWithoutProperties-ab1e2a5f.js";function p(){const[t,a]=h.useState([]),[l,i]=h.useState([]);return{options:[{id:1,value:"chocolate",label:"Chocolate"},{id:2,value:"strawberry",label:"Strawberry"},{id:3,value:"vanilla",label:"Vanilla"}],singleSelections:t,multiSelections:l,onChangeSingleSelection:o=>{a(o)},onChangeMultipleSelection:o=>{i(o)}}}const g=()=>e.jsx(n,{children:e.jsxs(n.Body,{children:[e.jsx("h4",{className:"header-title",children:e.jsx("a",{rel:"noreferrer",href:"https://github.com/JedWatson/react-select",target:"_blank",children:"React select"})}),e.jsx("p",{className:"mb-1 mt-2 fw-bold text-muted",children:"Single Selection"}),e.jsx("p",{className:"text-muted font-14",children:"React-Select based Select element"}),e.jsx(x,{className:"react-select",classNamePrefix:"react-select",options:[{value:"chocolate",label:"Chocolate"},{value:"strawberry",label:"Strawberry"},{value:"vanilla",label:"Vanilla"}]}),e.jsx("p",{className:"mb-1 mt-3 fw-bold text-muted",children:"Multiple Selection"}),e.jsx("p",{className:"text-muted font-14",children:"React-Select based Select (Multiple) element"}),e.jsx(x,{isMulti:!0,options:[{value:"chocolate",label:"Chocolate"},{value:"strawberry",label:"Strawberry"},{value:"vanilla",label:"Vanilla"}],className:"react-select",classNamePrefix:"react-select"})]})}),S=()=>{const{options:t,singleSelections:a,multiSelections:l,onChangeSingleSelection:i,onChangeMultipleSelection:m}=p();return e.jsx(n,{children:e.jsxs(n.Body,{children:[e.jsx("h4",{className:"header-title",children:e.jsx("a",{rel:"noreferrer",href:"http://ericgio.github.io/react-bootstrap-typeahead/",target:"_blank",children:"Typeahead"})}),e.jsx("p",{className:"mb-1 mt-2 fw-bold text-muted",children:"Single Selection"}),e.jsx("p",{className:"text-muted font-14",children:"Typeahead based Select element"}),e.jsx(j,{id:"select2",labelKey:"label",multiple:!1,onChange:i,options:t,placeholder:"Choose a state...",selected:a}),e.jsx("p",{className:"mb-1 mt-3 fw-bold text-muted",children:"Multiple Selection"}),e.jsx("p",{className:"text-muted font-14",children:"Typeahead based Select (Multiple) element"}),e.jsx(j,{id:"select3",labelKey:"label",multiple:!0,onChange:m,options:t,placeholder:"Choose a state...",selected:l})]})})},f=()=>{const[t,a]=h.useState(new Date);return e.jsx(n,{children:e.jsxs(n.Body,{children:[e.jsx("h4",{className:"header-title",children:"Date & Time Picker"}),e.jsxs("p",{className:"text-muted font-14",children:["A simple date picker using",e.jsx("a",{rel:"noreferrer",href:"https://reactdatepicker.com/",target:"_blank",children:"ReactJS Datepicker"})]}),e.jsxs(r,{children:[e.jsx(s,{lg:6,children:e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{children:"Single Date"})," ",e.jsx("br",{}),e.jsx(c,{hideAddon:!0,value:t,onChange:l=>{a(l)}})]})}),e.jsx(s,{lg:6,children:e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{children:"Single Date with multiple months"})," ",e.jsx("br",{}),e.jsx(c,{hideAddon:!0,monthsShown:2,value:t,onChange:l=>{a(l)}})]})})]}),e.jsxs(r,{children:[e.jsx(s,{lg:6,children:e.jsxs("div",{className:"form-group mb-3",children:[e.jsx("label",{className:"form-label",children:"Custom date format"})," ",e.jsx("br",{}),e.jsx(c,{hideAddon:!0,dateFormat:"yyyy-MM-dd",value:t,onChange:l=>{a(l)}})]})}),e.jsx(s,{lg:6,children:e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{children:"Specific date range"})," ",e.jsx("br",{}),e.jsx(c,{hideAddon:!0,minDate:new Date,maxDate:new Date(new Date().setDate(new Date().getDate()+7)),value:t,onChange:l=>{a(l)}})]})})]}),e.jsxs(r,{children:[e.jsx(s,{lg:6,children:e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{children:"Select Time"})," ",e.jsx("br",{}),e.jsx(c,{hideAddon:!0,showTimeSelect:!0,timeFormat:"HH:mm",tI:60,dateFormat:"MMMM d, yyyy h:mm aa",timeCaption:"time",value:t,onChange:l=>{a(l)}})]})}),e.jsx(s,{lg:6,children:e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{children:"Time only"})," ",e.jsx("br",{}),e.jsx(c,{hideAddon:!0,showTimeSelect:!0,showTimeSelectOnly:!0,tI:60,dateFormat:"h:mm aa",timeCaption:"Time",value:t,onChange:l=>{a(l)}})]})})]})]})})},_=()=>e.jsx(n,{children:e.jsxs(n.Body,{children:[e.jsx("h4",{className:"header-title",children:"Input Masks"}),e.jsxs("p",{className:"text-muted font-14",children:["Input masks by",e.jsx(b,{rel:"noreferrer",to:"https://github.com/text-mask/text-mask/tree/master/react#readme",target:"_blank",children:"react - text - mask"})]}),e.jsxs(r,{children:[e.jsx(s,{lg:6,children:e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Phone Number with Area Code"})," ",e.jsx("br",{}),e.jsx(d,{mask:["(",/[1-9]/,/\d/,")"," ",/\d/,/\d/,/\d/,/\d/,"-",/\d/,/\d/,/\d/,/\d/],placeholder:"(__) ____-____",className:"form-control"})]})}),e.jsx(s,{lg:6,children:e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"US Phone Number"})," ",e.jsx("br",{}),e.jsx(d,{mask:["(",/[1-9]/,/\d/,/\d/,")"," ",/\d/,/\d/,/\d/,"-",/\d/,/\d/,/\d/,/\d/],placeholder:"(___) ___-____",className:"form-control"})]})})]}),e.jsxs(r,{children:[e.jsx(s,{lg:6,children:e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Date"})," ",e.jsx("br",{}),e.jsx(d,{mask:[/\d/,/\d/,"/",/\d/,/\d/,"/",/\d/,/\d/,/\d/,/\d/],placeholder:"__/__/____",className:"form-control"})]})}),e.jsx(s,{lg:6,children:e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Time"})," ",e.jsx("br",{}),e.jsx(d,{mask:[/\d/,/\d/,":",/\d/,/\d/,":",/\d/,/\d/],placeholder:"__:__:__",className:"form-control"})]})})]})]})}),A=()=>e.jsxs(e.Fragment,{children:[e.jsx(u,{title:"Form Advanced",subName:"Form"}),e.jsxs(r,{children:[e.jsx(s,{lg:6,children:e.jsx(g,{})}),e.jsx(s,{lg:6,children:e.jsx(S,{})})]}),e.jsx(r,{children:e.jsx(s,{children:e.jsx(f,{})})}),e.jsx(r,{children:e.jsx(s,{children:e.jsx(_,{})})})]});export{A as default};
