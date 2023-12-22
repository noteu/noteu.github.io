import{W as K,X as Q,r as a,Y as ee,Z as te,$ as B,a0 as M,a1 as ne,a2 as oe,S as P,j as p,e as j,a3 as W,a4 as H,a5 as se,a6 as U,a7 as D,a8 as ae,a9 as re,aa as ie,ab as le}from"./index-3a462e11.js";import{u as I}from"./useCallbackRef-aedf03a1.js";import{u as ce,g as ue,a as de,m as fe}from"./mergeOptionsWithPopperConfig-67b37497.js";const he=()=>{};function me(e,n,{disabled:t,clickTrigger:o}={}){const s=n||he;ce(e,s,{disabled:t,clickTrigger:o});const i=K(l=>{Q(l)&&s(l)});a.useEffect(()=>{if(t||e==null)return;const l=ee(ue(e));let m=(l.defaultView||window).event;const u=te(l,"keyup",f=>{if(f===m){m=void 0;return}i(f)});return()=>{u()}},[e,t,i])}const z=a.forwardRef((e,n)=>{const{flip:t,offset:o,placement:s,containerPadding:i,popperConfig:l={},transition:m,runTransition:u}=e,[f,y]=I(),[O,w]=I(),h=B(y,n),d=M(e.container),T=M(e.target),[r,v]=a.useState(!e.show),c=de(T,f,fe({placement:s,enableEvents:!!e.show,containerPadding:i||5,flip:t,offset:o,arrowElement:O,popperConfig:l}));e.show&&r&&v(!1);const x=(...$)=>{v(!0),e.onExited&&e.onExited(...$)},C=e.show||!r;if(me(f,e.onHide,{disabled:!e.rootClose||e.rootCloseDisabled,clickTrigger:e.rootCloseEvent}),!C)return null;const{onExit:N,onExiting:R,onEnter:E,onEntering:k,onEntered:_}=e;let b=e.children(Object.assign({},c.attributes.popper,{style:c.styles.popper,ref:h}),{popper:c,placement:s,show:!!e.show,arrowProps:Object.assign({},c.attributes.arrow,{style:c.styles.arrow,ref:w})});return b=ne(m,u,{in:!!e.show,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:b,onExit:N,onExiting:R,onExited:x,onEnter:E,onEntering:k,onEntered:_}),d?oe.createPortal(b,d):null});z.displayName="Overlay";const ve=z,A=a.forwardRef(({className:e,bsPrefix:n,as:t="div",...o},s)=>(n=P(n,"popover-header"),p.jsx(t,{ref:s,className:j(e,n),...o})));A.displayName="PopoverHeader";const pe=A,V=a.forwardRef(({className:e,bsPrefix:n,as:t="div",...o},s)=>(n=P(n,"popover-body"),p.jsx(t,{ref:s,className:j(e,n),...o})));V.displayName="PopoverBody";const X=V;function Y(e,n){let t=e;return e==="left"?t=n?"end":"start":e==="right"&&(t=n?"start":"end"),t}function Z(e="absolute"){return{position:e,top:"0",left:"0",opacity:"0",pointerEvents:"none"}}const ge=a.forwardRef(({bsPrefix:e,placement:n="right",className:t,style:o,children:s,body:i,arrowProps:l,hasDoneInitialMeasure:m,popper:u,show:f,...y},O)=>{const w=P(e,"popover"),h=W(),[d]=(n==null?void 0:n.split("-"))||[],T=Y(d,h);let r=o;return f&&!m&&(r={...o,...Z(u==null?void 0:u.strategy)}),p.jsxs("div",{ref:O,role:"tooltip",style:r,"x-placement":d,className:j(t,w,d&&`bs-popover-${T}`),...y,children:[p.jsx("div",{className:"popover-arrow",...l}),i?p.jsx(X,{children:s}):s]})}),ye=Object.assign(ge,{Header:pe,Body:X,POPPER_OFFSET:[0,8]}),q=a.forwardRef(({bsPrefix:e,placement:n="right",className:t,style:o,children:s,arrowProps:i,hasDoneInitialMeasure:l,popper:m,show:u,...f},y)=>{e=P(e,"tooltip");const O=W(),[w]=(n==null?void 0:n.split("-"))||[],h=Y(w,O);let d=o;return u&&!l&&(d={...o,...Z(m==null?void 0:m.strategy)}),p.jsxs("div",{ref:y,style:d,role:"tooltip","x-placement":w,className:j(t,e,`bs-tooltip-${h}`),...f,children:[p.jsx("div",{className:"tooltip-arrow",...i}),p.jsx("div",{className:`${e}-inner`,children:s})]})});q.displayName="Tooltip";const Oe=Object.assign(q,{TOOLTIP_OFFSET:[0,6]});function we(e){const n=a.useRef(null),t=P(void 0,"popover"),o=P(void 0,"tooltip"),s=a.useMemo(()=>({name:"offset",options:{offset:()=>{if(e)return e;if(n.current){if(H(n.current,t))return ye.POPPER_OFFSET;if(H(n.current,o))return Oe.TOOLTIP_OFFSET}return[0,0]}}}),[e,t,o]);return[n,[s]]}function Re(e,n){const{ref:t}=e,{ref:o}=n;e.ref=t.__wrapped||(t.__wrapped=s=>t(D(s))),n.ref=o.__wrapped||(o.__wrapped=s=>o(D(s)))}const G=a.forwardRef(({children:e,transition:n=U,popperConfig:t={},rootClose:o=!1,placement:s="top",show:i=!1,...l},m)=>{const u=a.useRef({}),[f,y]=a.useState(null),[O,w]=we(l.offset),h=B(m,O),d=n===!0?U:n||void 0,T=K(r=>{y(r),t==null||t.onFirstUpdate==null||t.onFirstUpdate(r)});return se(()=>{f&&l.target&&(u.current.scheduleUpdate==null||u.current.scheduleUpdate())},[f,l.target]),a.useEffect(()=>{i||y(null)},[i]),p.jsx(ve,{...l,ref:h,popperConfig:{...t,modifiers:w.concat(t.modifiers||[]),onFirstUpdate:T},transition:d,rootClose:o,placement:s,show:i,children:(r,{arrowProps:v,popper:c,show:x})=>{var C,N;Re(r,v);const R=c==null?void 0:c.placement,E=Object.assign(u.current,{state:c==null?void 0:c.state,scheduleUpdate:c==null?void 0:c.update,placement:R,outOfBoundaries:(c==null||(C=c.state)==null||(N=C.modifiersData.hide)==null?void 0:N.isReferenceHidden)||!1,strategy:t.strategy}),k=!!f;return typeof e=="function"?e({...r,placement:R,show:x,...!n&&x&&{className:"show"},popper:E,arrowProps:v,hasDoneInitialMeasure:k}):a.cloneElement(e,{...r,placement:R,arrowProps:v,popper:E,hasDoneInitialMeasure:k,className:j(e.props.className,!n&&x&&"show"),style:{...e.props.style,...r.style}})}})});G.displayName="Overlay";const Ee=G;function Te(e){return e&&typeof e=="object"?e:{show:e,hide:e}}function L(e,n,t){const[o]=n,s=o.currentTarget,i=o.relatedTarget||o.nativeEvent[t];(!i||i!==s)&&!le(s,i)&&e(...n)}ae.oneOf(["click","hover","focus"]);const xe=({trigger:e=["hover","focus"],overlay:n,children:t,popperConfig:o={},show:s,defaultShow:i=!1,onToggle:l,delay:m,placement:u,flip:f=u&&u.indexOf("auto")!==-1,...y})=>{const O=a.useRef(null),w=B(O,t.ref),h=re(),d=a.useRef(""),[T,r]=ie(s,i,l),v=Te(m),{onFocus:c,onBlur:x,onClick:C}=typeof t!="function"?a.Children.only(t).props:{},N=g=>{w(D(g))},R=a.useCallback(()=>{if(h.clear(),d.current="show",!v.show){r(!0);return}h.set(()=>{d.current==="show"&&r(!0)},v.show)},[v.show,r,h]),E=a.useCallback(()=>{if(h.clear(),d.current="hide",!v.hide){r(!1);return}h.set(()=>{d.current==="hide"&&r(!1)},v.hide)},[v.hide,r,h]),k=a.useCallback((...g)=>{R(),c==null||c(...g)},[R,c]),_=a.useCallback((...g)=>{E(),x==null||x(...g)},[E,x]),b=a.useCallback((...g)=>{r(!T),C==null||C(...g)},[C,r,T]),$=a.useCallback((...g)=>{L(R,g,"fromElement")},[R]),J=a.useCallback((...g)=>{L(E,g,"toElement")},[E]),S=e==null?[]:[].concat(e),F={ref:N};return S.indexOf("click")!==-1&&(F.onClick=b),S.indexOf("focus")!==-1&&(F.onFocus=k,F.onBlur=_),S.indexOf("hover")!==-1&&(F.onMouseOver=$,F.onMouseOut=J),p.jsxs(p.Fragment,{children:[typeof t=="function"?t(F):a.cloneElement(t,F),p.jsx(Ee,{...y,show:T,onHide:E,flip:f,placement:u,popperConfig:o,target:O.current,children:n})]})},ke=xe;export{ke as O,ye as P,Oe as T};
