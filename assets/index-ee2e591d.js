import{j as e,d as r,L as d,r as o,t as u,P as f,b as a,c as l}from"./index-3a462e11.js";import{T as R}from"./Table-1c3f720d.js";const p=n=>{const{list:c}=n;return e.jsx(r,{children:e.jsxs(r.Body,{children:[e.jsx("h4",{className:"header-title",children:"자료실"}),e.jsx("p",{className:"text-muted font-14",children:"수업에 필요한 자료 파일들을 다운로드 받을 수 있는 공간입니다."}),e.jsxs(R,{className:"mb-0",hover:!0,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"Title"}),e.jsx("th",{children:"Date"}),e.jsx("th",{children:"Views"})]})}),e.jsx("tbody",{children:c.map(s=>{const t=new Date(s.createdAt),i=t.getFullYear(),h=t.getMonth()+1,x=t.getDate(),j=t.getHours(),m=t.getMinutes();return e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:s.referenceRoomId}),e.jsx("td",{children:e.jsx(d,{to:`/apps/referenceRoom/detail/${s.referenceRoomId}`,children:e.jsx("div",{children:s.referenceRoomTitle})})}),e.jsx("td",{children:`${i}-${h}-${x} ${j}시 ${m}분`}),e.jsx("td",{children:s.views})]},s.referenceRoomId)})})]})]})})},N=()=>{const[n,c]=o.useState([]),s=localStorage.getItem("_NOTEU_AUTH");return console.log(s),o.useEffect(()=>{u.get("http://localhost:8081/subjects/1/references",{headers:{Authorization:s}}).then(t=>{t.status===200?c(t.data.content):console.log("error : "+t.status)})},[]),e.jsxs(e.Fragment,{children:[e.jsx(f,{title:"ReferenceRoom List",subName:"ReferenceRoom"}),e.jsx(a,{children:e.jsx(l,{xs:12,children:e.jsx(r,{children:e.jsxs(r.Body,{children:[e.jsx(a,{className:"mb-2",children:e.jsx(l,{sm:5,children:e.jsxs(d,{to:"/apps/referenceRoom/create",className:"btn btn-danger btn-rounded mb-2",children:[e.jsx("i",{className:"mdi mdi-plus-circle me-2"})," Create"]})})}),e.jsx(p,{list:n})]})})})})]})};export{N as default};
