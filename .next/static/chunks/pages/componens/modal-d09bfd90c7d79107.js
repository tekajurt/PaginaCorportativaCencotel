(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[413],{4106:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/componens/modal",function(){return r(2169)}])},2169:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return z}});var n,l=r(5893),o=r(7294),a=r(4184),i=r.n(a),s=r(861),d=r(6792);let c=o.forwardRef(({as:e,bsPrefix:t,variant:r,size:n,active:o,className:a,...c},u)=>{let f=(0,d.vE)(t,"btn"),[m,{tagName:h}]=(0,s.FT)({tagName:e,...c});return(0,l.jsx)(h,{...m,...c,ref:u,className:i()(a,f,o&&"active",r&&`${f}-${r}`,n&&`${f}-${n}`,c.href&&c.disabled&&"disabled")})});c.displayName="Button",c.defaultProps={variant:"primary",active:!1,disabled:!1};var u=r(9351),f=r(3004),m=r(7216),h=r(99);function p(e){if((!n&&0!==n||e)&&f.Z){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),n=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return n}var v=r(2092),b=r(8146),g=r(5654),y=r(6852),x=r(4305),N=r(7785),w=r(9673),j=r(1068),Z=r(6611),E=(0,Z.Z)("modal-body"),_=r(6467);let k=o.forwardRef(({bsPrefix:e,className:t,contentClassName:r,centered:n,size:o,fullscreen:a,children:s,scrollable:c,...u},f)=>{e=(0,d.vE)(e,"modal");let m=`${e}-dialog`,h="string"==typeof a?`${e}-fullscreen-${a}`:`${e}-fullscreen`;return(0,l.jsx)("div",{...u,ref:f,className:i()(m,t,o&&`${e}-${o}`,n&&`${m}-centered`,c&&`${m}-scrollable`,a&&h),children:(0,l.jsx)("div",{className:i()(`${e}-content`,r),children:s})})});k.displayName="ModalDialog";var T=(0,Z.Z)("modal-footer"),$=r(6695);let C=o.forwardRef(({bsPrefix:e,className:t,...r},n)=>(e=(0,d.vE)(e,"modal-header"),(0,l.jsx)($.Z,{ref:n,...r,className:i()(t,e)})));C.displayName="ModalHeader",C.defaultProps={closeLabel:"Close",closeButton:!1};var R=r(9602);let B=(0,R.Z)("h4");var D=(0,Z.Z)("modal-title",{Component:B});function F(e){return(0,l.jsx)(j.Z,{...e,timeout:null})}function M(e){return(0,l.jsx)(j.Z,{...e,timeout:null})}let O=o.forwardRef(({bsPrefix:e,className:t,style:r,dialogClassName:n,contentClassName:a,children:s,dialogAs:c,"aria-labelledby":j,"aria-describedby":Z,"aria-label":E,show:k,animation:T,backdrop:$,keyboard:C,onEscapeKeyDown:R,onShow:B,onHide:D,container:O,autoFocus:S,enforceFocus:H,restoreFocus:P,restoreFocusOptions:A,onEntered:I,onExit:z,onExiting:U,onEnter:W,onEntering:K,onExited:L,backdropClassName:X,manager:J,...q},G)=>{let[Q,V]=(0,o.useState)({}),[Y,ee]=(0,o.useState)(!1),et=(0,o.useRef)(!1),er=(0,o.useRef)(!1),en=(0,o.useRef)(null),[el,eo]=(0,v.Z)(),ea=(0,g.Z)(G,eo),ei=(0,b.Z)(D),es=(0,d.SC)();e=(0,d.vE)(e,"modal");let ed=(0,o.useMemo)(()=>({onHide:ei}),[ei]);function ec(){return J||(0,w.t)({isRTL:es})}function eu(e){if(!f.Z)return;let t=ec().getScrollbarWidth()>0,r=e.scrollHeight>(0,m.Z)(e).documentElement.clientHeight;V({paddingRight:t&&!r?p():void 0,paddingLeft:!t&&r?p():void 0})}let ef=(0,b.Z)(()=>{el&&eu(el.dialog)});(0,y.Z)(()=>{(0,h.Z)(window,"resize",ef),null==en.current||en.current()});let em=()=>{et.current=!0},eh=e=>{et.current&&el&&e.target===el.dialog&&(er.current=!0),et.current=!1},ep=()=>{ee(!0),en.current=(0,x.Z)(el.dialog,()=>{ee(!1)})},ev=e=>{e.target===e.currentTarget&&ep()},eb=e=>{if("static"===$){ev(e);return}if(er.current||e.target!==e.currentTarget){er.current=!1;return}null==D||D()},eg=e=>{C?null==R||R(e):(e.preventDefault(),"static"===$&&ep())},ey=(e,t)=>{e&&eu(e),null==W||W(e,t)},ex=e=>{null==en.current||en.current(),null==z||z(e)},eN=(e,t)=>{null==K||K(e,t),(0,u.ZP)(window,"resize",ef)},ew=e=>{e&&(e.style.display=""),null==L||L(e),(0,h.Z)(window,"resize",ef)},ej=(0,o.useCallback)(t=>(0,l.jsx)("div",{...t,className:i()(`${e}-backdrop`,X,!T&&"show")}),[T,X,e]),eZ={...r,...Q};eZ.display="block";let eE=r=>(0,l.jsx)("div",{role:"dialog",...r,style:eZ,className:i()(t,e,Y&&`${e}-static`,!T&&"show"),onClick:$?eb:void 0,onMouseUp:eh,"aria-label":E,"aria-labelledby":j,"aria-describedby":Z,children:(0,l.jsx)(c,{...q,onMouseDown:em,className:n,contentClassName:a,children:s})});return(0,l.jsx)(_.Z.Provider,{value:ed,children:(0,l.jsx)(N.Z,{show:k,ref:ea,backdrop:$,container:O,keyboard:!0,autoFocus:S,enforceFocus:H,restoreFocus:P,restoreFocusOptions:A,onEscapeKeyDown:eg,onShow:B,onHide:D,onEnter:ey,onEntering:eN,onEntered:I,onExit:ex,onExiting:U,onExited:ew,manager:ec(),transition:T?F:void 0,backdropTransition:T?M:void 0,renderBackdrop:ej,renderDialog:eE})})});O.displayName="Modal",O.defaultProps={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:k};var S=Object.assign(O,{Body:E,Header:C,Title:D,Footer:T,Dialog:k,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150}),H=r(857),P=r.n(H),A=r(682);let I=e=>{let{titulo:t,descripcion:r,ocultarModal:n}=e,[a,i]=(0,o.useState)(!1),[s,d]=(0,o.useState)("");(0,o.useEffect)(()=>{n&&d("d-none")},[n]);let u=()=>i(!1),f=()=>i(!0);return(0,l.jsxs)(A.Z,{fluid:!0,className:s+" d-flex h-100  align-self-end",children:[(0,l.jsx)(c,{variant:"primary",className:P().BotonModal+" justify-content-center",onClick:f,children:"Detalles"}),(0,l.jsxs)(S,{show:a,onHide:u,children:[(0,l.jsx)(S.Header,{closeButton:!0,children:(0,l.jsx)(S.Title,{children:t})}),(0,l.jsx)(S.Body,{children:(0,l.jsx)("p",{children:r})}),(0,l.jsx)(S.Footer,{children:(0,l.jsx)(c,{className:"",variant:"primary",onClick:u,children:"Close"})})]})]})};var z=I},857:function(e){e.exports={BotonModal:"Modal_BotonModal__TJm6h"}}},function(e){e.O(0,[462,774,888,179],function(){return e(e.s=4106)}),_N_E=e.O()}]);