import{aI as K,r as o,S as f,j as n,e as d,aJ as je,aC as Ee,$ as ke,W,a3 as Be,aK as Ae,aL as b,aM as De,aN as Oe,a6 as _,aO as Fe,al as Ie,Y as He,aP as xe}from"./index-3a462e11.js";import{u as Le}from"./useCallbackRef-aedf03a1.js";var p;function z(e){if((!p&&p!==0||e)&&K){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),p=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return p}const J=o.forwardRef(({className:e,bsPrefix:t,as:s="div",...r},l)=>(t=f(t,"modal-body"),n.jsx(s,{ref:l,className:d(e,t),...r})));J.displayName="ModalBody";const Ue=J,Y=o.forwardRef(({bsPrefix:e,className:t,contentClassName:s,centered:r,size:l,fullscreen:i,children:w,scrollable:R,...N},v)=>{e=f(e,"modal");const m=`${e}-dialog`,c=typeof i=="string"?`${e}-fullscreen-${i}`:`${e}-fullscreen`;return n.jsx("div",{...N,ref:v,className:d(m,t,l&&`${e}-${l}`,r&&`${m}-centered`,R&&`${m}-scrollable`,i&&c),children:n.jsx("div",{className:d(`${e}-content`,s),children:w})})});Y.displayName="ModalDialog";const q=Y,G=o.forwardRef(({className:e,bsPrefix:t,as:s="div",...r},l)=>(t=f(t,"modal-footer"),n.jsx(s,{ref:l,className:d(e,t),...r})));G.displayName="ModalFooter";const We=G,Q=o.forwardRef(({bsPrefix:e,className:t,closeLabel:s="Close",closeButton:r=!1,...l},i)=>(e=f(e,"modal-header"),n.jsx(je,{ref:i,...l,className:d(t,e),closeLabel:s,closeButton:r})));Q.displayName="ModalHeader";const be=Q,ze=Ee("h4"),V=o.forwardRef(({className:e,bsPrefix:t,as:s=ze,...r},l)=>(t=f(t,"modal-title"),n.jsx(s,{ref:l,className:d(e,t),...r})));V.displayName="ModalTitle";const Ke=V;function _e(e){return n.jsx(_,{...e,timeout:null})}function Je(e){return n.jsx(_,{...e,timeout:null})}const X=o.forwardRef(({bsPrefix:e,className:t,style:s,dialogClassName:r,contentClassName:l,children:i,dialogAs:w=q,"aria-labelledby":R,"aria-describedby":N,"aria-label":v,show:m=!1,animation:c=!0,backdrop:h=!0,keyboard:Z=!0,onEscapeKeyDown:T,onShow:P,onHide:y,container:ee,autoFocus:ae=!0,enforceFocus:te=!0,restoreFocus:oe=!0,restoreFocusOptions:ne,onEntered:le,onExit:j,onExiting:se,onEnter:E,onEntering:k,onExited:B,backdropClassName:A,manager:D,...re},de)=>{const[ie,ce]=o.useState({}),[ue,O]=o.useState(!1),S=o.useRef(!1),$=o.useRef(!1),g=o.useRef(null),[M,fe]=Le(),me=ke(de,fe),F=W(y),ge=Be();e=f(e,"modal");const Me=o.useMemo(()=>({onHide:F}),[F]);function I(){return D||Fe({isRTL:ge})}function H(a){if(!K)return;const u=I().getScrollbarWidth()>0,U=a.scrollHeight>He(a).documentElement.clientHeight;ce({paddingRight:u&&!U?z():void 0,paddingLeft:!u&&U?z():void 0})}const C=W(()=>{M&&H(M.dialog)});Ae(()=>{b(window,"resize",C),g.current==null||g.current()});const he=()=>{S.current=!0},ye=a=>{S.current&&M&&a.target===M.dialog&&($.current=!0),S.current=!1},x=()=>{O(!0),g.current=xe(M.dialog,()=>{O(!1)})},pe=a=>{a.target===a.currentTarget&&x()},we=a=>{if(h==="static"){pe(a);return}if($.current||a.target!==a.currentTarget){$.current=!1;return}y==null||y()},Re=a=>{Z?T==null||T(a):(a.preventDefault(),h==="static"&&x())},Ne=(a,u)=>{a&&H(a),E==null||E(a,u)},ve=a=>{g.current==null||g.current(),j==null||j(a)},Se=(a,u)=>{k==null||k(a,u),Ie(window,"resize",C)},$e=a=>{a&&(a.style.display=""),B==null||B(a),b(window,"resize",C)},Ce=o.useCallback(a=>n.jsx("div",{...a,className:d(`${e}-backdrop`,A,!c&&"show")}),[c,A,e]),L={...s,...ie};L.display="block";const Te=a=>n.jsx("div",{role:"dialog",...a,style:L,className:d(t,e,ue&&`${e}-static`,!c&&"show"),onClick:h?we:void 0,onMouseUp:ye,"aria-label":v,"aria-labelledby":R,"aria-describedby":N,children:n.jsx(w,{...re,onMouseDown:he,className:r,contentClassName:l,children:i})});return n.jsx(De.Provider,{value:Me,children:n.jsx(Oe,{show:m,ref:me,backdrop:h,container:ee,keyboard:!0,autoFocus:ae,enforceFocus:te,restoreFocus:oe,restoreFocusOptions:ne,onEscapeKeyDown:Re,onShow:P,onHide:y,onEnter:Ne,onEntering:Se,onEntered:le,onExit:ve,onExiting:se,onExited:$e,manager:I(),transition:c?_e:void 0,backdropTransition:c?Je:void 0,renderBackdrop:Ce,renderDialog:Te})})});X.displayName="Modal";const Ge=Object.assign(X,{Body:Ue,Header:be,Title:Ke,Footer:We,Dialog:q,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150});export{Ge as M};
