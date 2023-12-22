import{j as s,P as t,b as n,c as r,d as a}from"./index-3a462e11.js";import{P as e}from"./ProgressBar-6d0ccb8b.js";const l=()=>s.jsx(a,{children:s.jsxs(a.Body,{children:[s.jsx("h4",{className:"header-title",children:"Examples"}),s.jsx("p",{className:"text-muted font-14",children:"A progressBar bar can be used to show a user how far along he/she is in a process."}),s.jsx(e,{}),s.jsx(e,{now:25,className:"mt-2"}),s.jsx(e,{now:50,className:"mt-2"}),s.jsx(e,{now:75,className:"mt-2"}),s.jsx(e,{now:100,className:"mt-2"})]})}),i=()=>s.jsx(a,{children:s.jsxs(a.Body,{children:[s.jsx("h4",{className:"header-title",children:"Labels"}),s.jsxs("p",{className:"text-muted font-14",children:["Add a ",s.jsx("code",{children:"label"})," prop to show a visible percentage. For low percentages, consider adding a min-width to ensure the label's text is fully visible."]}),s.jsx(e,{now:25,label:"25%"})]})}),c=()=>s.jsx(a,{children:s.jsxs(a.Body,{children:[s.jsx("h4",{className:"header-title",children:"Screenreader only label"}),s.jsxs("p",{className:"text-muted font-14",children:["Add a ",s.jsx("code",{children:"visuallyHidden"})," prop to hide the label visually."]}),s.jsx(e,{now:60,label:"60%",visuallyHidden:!0})]})}),d=()=>s.jsx(a,{children:s.jsxs(a.Body,{children:[s.jsx("h4",{className:"header-title",children:"Contextual alternatives"}),s.jsx("p",{className:"text-muted font-14",children:"Progress bars use some of the same button and alert classes for consistent styles."}),s.jsx(e,{now:25,className:"mt-2",variant:"success"}),s.jsx(e,{now:50,className:"mt-2",variant:"info"}),s.jsx(e,{now:75,className:"mt-2",variant:"warning"}),s.jsx(e,{now:100,className:"mt-2",variant:"danger"}),s.jsx(e,{now:65,className:"mt-2",variant:"dark"}),s.jsx(e,{now:50,className:"mt-2",variant:"secondary"})]})}),o=()=>s.jsx(a,{children:s.jsxs(a.Body,{children:[s.jsx("h4",{className:"header-title",children:"Height"}),s.jsxs("p",{className:"text-muted font-14",children:["We only set a ",s.jsx("code",{children:"height"})," value on the ",s.jsx("code",{children:"ProgressBar"}),", so if you change that value the inner ",s.jsx("code",{children:".progress-bar"})," will automatically resize accordingly. Use ",s.jsx("code",{children:".progress-sm"}),",",s.jsx("code",{children:".progress-md"}),",",s.jsx("code",{children:".progress-lg"}),",",s.jsx("code",{children:".progress-xl"})," classes."]}),s.jsx(e,{now:25,variant:"danger",style:{height:1}}),s.jsx(e,{now:25,className:"mt-2",style:{height:3}}),s.jsx(e,{now:25,className:"mt-2 progress-sm",variant:"success"}),s.jsx(e,{now:50,className:"mt-2 progress-md",variant:"info"}),s.jsx(e,{now:75,className:"mt-2 progress-lg",variant:"warning"}),s.jsx(e,{now:38,className:"mt-2 progress-xl",variant:"success"})]})}),x=()=>s.jsx(a,{children:s.jsxs(a.Body,{children:[s.jsx("h4",{className:"header-title",children:"Striped"}),s.jsxs("p",{className:"text-muted font-14",children:["Add ",s.jsx("code",{children:"striped"})," to any ",s.jsx("code",{children:"ProgressBar"})," to apply a stripe via CSS gradient over the progressBar bar’s background color."]}),s.jsx(e,{now:10,striped:!0}),s.jsx(e,{now:25,className:"mt-2",variant:"success",striped:!0}),s.jsx(e,{now:50,className:"mt-2",variant:"info",striped:!0}),s.jsx(e,{now:75,className:"mt-2",variant:"warning",striped:!0}),s.jsx(e,{now:100,className:"mt-2",variant:"danger",striped:!0})]})}),h=()=>s.jsx(a,{children:s.jsxs(a.Body,{children:[s.jsx("h4",{className:"header-title",children:"Animated stripes"}),s.jsxs("p",{className:"text-muted font-14",children:["The striped gradient can also be animated. Add ",s.jsx("code",{children:"animated"})," to",s.jsx("code",{children:"ProgressBar"})," to animate the stripes right to left via CSS3 animations."]}),s.jsx(e,{now:45,variant:"primary",animated:!0})]})}),j=()=>s.jsx(a,{children:s.jsxs(a.Body,{children:[s.jsx("h4",{className:"header-title",children:"Stacked"}),s.jsxs("p",{className:"text-muted font-14",children:["Nest ",s.jsx("code",{children:"<ProgressBar />"}),"s to stack them."]}),s.jsxs(e,{children:[s.jsx(e,{striped:!0,variant:"success",now:35},1),s.jsx(e,{variant:"warning",now:20},2),s.jsx(e,{striped:!0,variant:"danger",now:10},3)]})]})}),g=()=>s.jsxs(s.Fragment,{children:[s.jsx(t,{title:"Progress",subName:"Base UI"}),s.jsxs(n,{children:[s.jsxs(r,{xl:6,children:[s.jsx(l,{}),s.jsx(c,{}),s.jsx(o,{}),s.jsx(h,{})]}),s.jsxs(r,{xl:6,children:[s.jsx(i,{}),s.jsx(d,{}),s.jsx(x,{}),s.jsx(j,{})]})]})]});export{g as default};
