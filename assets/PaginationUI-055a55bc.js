import{r as j,j as e,e as x,an as P,S as I,P as v,b,c as m,d as i}from"./index-3a462e11.js";const h=j.forwardRef(({active:n=!1,disabled:t=!1,className:r,style:a,activeLabel:l="(current)",children:d,linkStyle:o,linkClassName:p,...g},f)=>{const N=n||t?"span":P;return e.jsx("li",{ref:f,style:a,className:x(r,"page-item",{active:n,disabled:t}),children:e.jsxs(N,{className:x("page-link",p),style:o,...g,children:[d,n&&l&&e.jsx("span",{className:"visually-hidden",children:l})]})})});h.displayName="PageItem";const y=h;function c(n,t,r=n){const a=j.forwardRef(({children:l,...d},o)=>e.jsxs(h,{...d,ref:o,children:[e.jsx("span",{"aria-hidden":"true",children:l||t}),e.jsx("span",{className:"visually-hidden",children:r})]}));return a.displayName=n,a}const B=c("First","«"),E=c("Prev","‹","Previous"),R=c("Ellipsis","…","More"),S=c("Next","›"),w=c("Last","»"),u=j.forwardRef(({bsPrefix:n,className:t,size:r,...a},l)=>{const d=I(n,"pagination");return e.jsx("ul",{ref:l,...a,className:x(t,d,r&&`${d}-${r}`)})});u.displayName="Pagination";const s=Object.assign(u,{First:B,Prev:E,Ellipsis:R,Item:y,Next:S,Last:w}),z=()=>{let n=[];for(let t=1;t<=5;t++)n.push(e.jsx(s.Item,{children:t},t.toString()));return e.jsx(i,{children:e.jsxs(i.Body,{children:[e.jsx("h4",{className:"header-title",children:"Default Pagination"}),e.jsx("p",{className:"text-muted font-14",children:"Simple pagination inspired by Rdio, great for apps and search results."}),e.jsxs(s,{children:[e.jsx(s.Prev,{}),n,e.jsx(s.Next,{})]})]})})},F=()=>e.jsx(i,{children:e.jsxs(i.Body,{children:[e.jsx("h4",{className:"header-title",children:"Disabled and active states"}),e.jsxs("p",{className:"text-muted font-14",children:["PageItem are customizable for different circumstances. Use ",e.jsx("code",{children:"disabled"}),"prop for links that appear un-clickable and ",e.jsx("code",{children:"active"})," prop to indicate the current page."]}),e.jsxs(s,{children:[e.jsx(s.Prev,{disabled:!0,children:"Previous"}),e.jsx(s.Item,{children:1}),e.jsx(s.Item,{active:!0,children:2}),e.jsx(s.Item,{children:3}),e.jsx(s.Next,{children:"Next"})]})]})}),U=()=>{let n=[];for(let t=1;t<=5;t++)n.push(e.jsx(s.Item,{active:t===2,children:t},t.toString()));return e.jsx(i,{children:e.jsxs(i.Body,{children:[e.jsx("h4",{className:"header-title",children:"Rounded Pagination"}),e.jsxs("p",{className:"text-muted font-14",children:["Add ",e.jsx("code",{children:" .pagination-rounded"})," for rounded pagination."]}),e.jsxs(s,{className:"pagination-rounded",children:[e.jsx(s.Prev,{}),n,e.jsx(s.Next,{})]})]})})},$=()=>{let n=[];for(let t=1;t<=3;t++)n.push(e.jsx(s.Item,{children:t},t.toString()));return e.jsx(i,{children:e.jsxs(i.Body,{children:[e.jsx("h4",{className:"header-title",children:"Sizing"}),e.jsxs("p",{className:"text-muted font-14",children:["Add ",e.jsx("code",{children:"lg"})," or ",e.jsx("code",{children:"sm"})," type to ",e.jsx("code",{children:"size"})," prop for additional sizes."]}),e.jsxs(s,{size:"lg",children:[e.jsx(s.Prev,{}),n,e.jsx(s.Next,{})]}),e.jsxs(s,{size:"sm",children:[e.jsx(s.Prev,{}),n,e.jsx(s.Next,{})]})]})})},k=()=>e.jsx(i,{children:e.jsxs(i.Body,{children:[e.jsx("h4",{className:"header-title",children:"More options"}),e.jsxs("p",{className:"text-muted font-14",children:['For building more complex pagination UI, there are few convenient sub-components for adding "First", "Previous", "Next", and "Last" buttons, as well as an',e.jsx("code",{children:"Ellipsis"})," item for indicating previous or continuing results."]}),e.jsxs(s,{children:[e.jsx(s.First,{}),e.jsx(s.Prev,{}),e.jsx(s.Item,{children:1}),e.jsx(s.Ellipsis,{}),e.jsx(s.Item,{children:10}),e.jsx(s.Item,{children:11}),e.jsx(s.Item,{active:!0,children:12}),e.jsx(s.Item,{children:13}),e.jsx(s.Item,{disabled:!0,children:14}),e.jsx(s.Ellipsis,{}),e.jsx(s.Item,{children:20}),e.jsx(s.Next,{}),e.jsx(s.Last,{})]})]})}),C=()=>e.jsxs(e.Fragment,{children:[e.jsx(v,{title:"Pagination",subName:"Base UI"}),e.jsxs(b,{children:[e.jsxs(m,{xl:6,children:[e.jsx(z,{}),e.jsx(F,{}),e.jsx(k,{})]}),e.jsxs(m,{xl:6,children:[e.jsx(U,{}),e.jsx($,{})]})]})]});export{C as default};
