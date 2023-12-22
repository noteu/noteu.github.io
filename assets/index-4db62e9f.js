import{k as n,m as c,j as s,P as m,F as i,b as l,c as d,L as u}from"./index-3a462e11.js";import{u as t}from"./useTranslation-39ff952a.js";import{A as x}from"./AccountWrapper-765b5eb5.js";import{P as h}from"./PasswordInput-27b7ba44.js";import{u as p}from"./avatar-1-34f0c02a.js";import{B as j}from"./Button-c7c76d56.js";import"./InputGroup-85468536.js";import"./InputGroupContext-5be72602.js";function b(){const{t:e}=t();return{schema:n().shape({password:c().required(e("Please enter Password"))}),onSubmit:({data:o})=>{console.log(o)}}}const w=()=>{const{t:e}=t();return s.jsx(l,{className:"mt-3",children:s.jsx(d,{className:"text-center",children:s.jsxs("p",{className:"text-muted",children:[e("Not you? return"),s.jsx(u,{to:"/account/login",className:"text-muted ms-1",children:s.jsx("b",{children:e("Sign In")})})]})})})},B=()=>{const{t:e}=t(),{schema:r,onSubmit:a}=b();return s.jsxs(s.Fragment,{children:[s.jsx(m,{title:"Lock Screen"}),s.jsxs(x,{bottomLinks:s.jsx(w,{}),children:[s.jsxs("div",{className:"text-center w-75 m-auto",children:[s.jsx("img",{src:p,height:64,alt:"user avatar",className:"rounded-circle shadow"}),s.jsx("h4",{className:"text-dark-50 text-center mt-3 fw-bold",children:e("Hi ! Michael ")}),s.jsx("p",{className:"text-muted mb-4",children:e("Enter your password to access the admin.")})]}),s.jsxs(i,{onSubmit:a,schema:r,children:[s.jsx(h,{label:e("Password"),name:"password",placeholder:e("Enter your password"),containerClass:"mb-3"}),s.jsx("div",{className:"mb-0 text-center",children:s.jsx(j,{variant:"primary",type:"submit",children:e("Log In")})})]})]})]})};export{B as default};
