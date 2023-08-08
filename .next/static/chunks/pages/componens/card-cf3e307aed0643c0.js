(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[845],{3220:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/componens/card",function(){return t(3875)}])},3875:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return E}});var a=t(5893),l=t(4184),n=t.n(l),o=t(7294),s=t(6792),d=t(6611),i=t(9602);let c=o.forwardRef(({bsPrefix:e,className:r,variant:t,as:l="img",...o},d)=>{let i=(0,s.vE)(e,"card-img");return(0,a.jsx)(l,{ref:d,className:n()(t?`${i}-${t}`:i,r),...o})});c.displayName="CardImg";var u=t(9059);let f=o.forwardRef(({bsPrefix:e,className:r,as:t="div",...l},d)=>{let i=(0,s.vE)(e,"card-header"),c=(0,o.useMemo)(()=>({cardHeaderBsPrefix:i}),[i]);return(0,a.jsx)(u.Z.Provider,{value:c,children:(0,a.jsx)(t,{ref:d,...l,className:n()(r,i)})})});f.displayName="CardHeader";let m=(0,i.Z)("h5"),h=(0,i.Z)("h6"),p=(0,d.Z)("card-body"),x=(0,d.Z)("card-title",{Component:m}),v=(0,d.Z)("card-subtitle",{Component:h}),b=(0,d.Z)("card-link",{Component:"a"}),g=(0,d.Z)("card-text",{Component:"p"}),y=(0,d.Z)("card-footer"),N=(0,d.Z)("card-img-overlay"),j=o.forwardRef(({bsPrefix:e,className:r,bg:t,text:l,border:o,body:d,children:i,as:c="div",...u},f)=>{let m=(0,s.vE)(e,"card");return(0,a.jsx)(c,{ref:f,...u,className:n()(r,m,t&&`bg-${t}`,l&&`text-${l}`,o&&`border-${o}`),children:d?(0,a.jsx)(p,{children:i}):i})});j.displayName="Card",j.defaultProps={body:!1};var Z=Object.assign(j,{Img:c,Title:x,Subtitle:v,Body:p,Link:b,Text:g,Header:f,Footer:y,ImgOverlay:N}),w=t(2169);let C=e=>{let{header:r,titulo:t,contenido:l,tituloModal:n,descripcionModal:o,ocultar:s}=e;return(0,a.jsxs)(Z,{className:"position-static shadow-lg bg-transparente text-dark text-center h-100 w-100",children:[(0,a.jsx)(Z.Header,{className:"bg-primary text-white",children:r}),(0,a.jsxs)(Z.Body,{className:"d-flex flex-column h-100",children:[(0,a.jsx)(Z.Title,{children:t}),l,(0,a.jsx)(w.default,{titulo:n,descripcion:o,ocultarModal:s})]})]})};var E=C},2169:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return z}});var a,l=t(5893),n=t(7294),o=t(4184),s=t.n(o),d=t(861),i=t(6792);let c=n.forwardRef(({as:e,bsPrefix:r,variant:t,size:a,active:n,className:o,...c},u)=>{let f=(0,i.vE)(r,"btn"),[m,{tagName:h}]=(0,d.FT)({tagName:e,...c});return(0,l.jsx)(h,{...m,...c,ref:u,className:s()(o,f,n&&"active",t&&`${f}-${t}`,a&&`${f}-${a}`,c.href&&c.disabled&&"disabled")})});c.displayName="Button",c.defaultProps={variant:"primary",active:!1,disabled:!1};var u=t(9351),f=t(3004),m=t(7216),h=t(99);function p(e){if((!a&&0!==a||e)&&f.Z){var r=document.createElement("div");r.style.position="absolute",r.style.top="-9999px",r.style.width="50px",r.style.height="50px",r.style.overflow="scroll",document.body.appendChild(r),a=r.offsetWidth-r.clientWidth,document.body.removeChild(r)}return a}var x=t(2092),v=t(8146),b=t(5654),g=t(6852),y=t(4305),N=t(7785),j=t(9673),Z=t(1068),w=t(6611),C=(0,w.Z)("modal-body"),E=t(6467);let $=n.forwardRef(({bsPrefix:e,className:r,contentClassName:t,centered:a,size:n,fullscreen:o,children:d,scrollable:c,...u},f)=>{e=(0,i.vE)(e,"modal");let m=`${e}-dialog`,h="string"==typeof o?`${e}-fullscreen-${o}`:`${e}-fullscreen`;return(0,l.jsx)("div",{...u,ref:f,className:s()(m,r,n&&`${e}-${n}`,a&&`${m}-centered`,c&&`${m}-scrollable`,o&&h),children:(0,l.jsx)("div",{className:s()(`${e}-content`,t),children:d})})});$.displayName="ModalDialog";var k=(0,w.Z)("modal-footer"),T=t(6695);let _=n.forwardRef(({bsPrefix:e,className:r,...t},a)=>(e=(0,i.vE)(e,"modal-header"),(0,l.jsx)(T.Z,{ref:a,...t,className:s()(r,e)})));_.displayName="ModalHeader",_.defaultProps={closeLabel:"Close",closeButton:!1};var R=t(9602);let B=(0,R.Z)("h4");var H=(0,w.Z)("modal-title",{Component:B});function M(e){return(0,l.jsx)(Z.Z,{...e,timeout:null})}function F(e){return(0,l.jsx)(Z.Z,{...e,timeout:null})}let O=n.forwardRef(({bsPrefix:e,className:r,style:t,dialogClassName:a,contentClassName:o,children:d,dialogAs:c,"aria-labelledby":Z,"aria-describedby":w,"aria-label":C,show:$,animation:k,backdrop:T,keyboard:_,onEscapeKeyDown:R,onShow:B,onHide:H,container:O,autoFocus:P,enforceFocus:D,restoreFocus:S,restoreFocusOptions:I,onEntered:A,onExit:z,onExiting:L,onEnter:U,onEntering:W,onExited:K,backdropClassName:X,manager:J,...q},G)=>{let[Q,V]=(0,n.useState)({}),[Y,ee]=(0,n.useState)(!1),er=(0,n.useRef)(!1),et=(0,n.useRef)(!1),ea=(0,n.useRef)(null),[el,en]=(0,x.Z)(),eo=(0,b.Z)(G,en),es=(0,v.Z)(H),ed=(0,i.SC)();e=(0,i.vE)(e,"modal");let ei=(0,n.useMemo)(()=>({onHide:es}),[es]);function ec(){return J||(0,j.t)({isRTL:ed})}function eu(e){if(!f.Z)return;let r=ec().getScrollbarWidth()>0,t=e.scrollHeight>(0,m.Z)(e).documentElement.clientHeight;V({paddingRight:r&&!t?p():void 0,paddingLeft:!r&&t?p():void 0})}let ef=(0,v.Z)(()=>{el&&eu(el.dialog)});(0,g.Z)(()=>{(0,h.Z)(window,"resize",ef),null==ea.current||ea.current()});let em=()=>{er.current=!0},eh=e=>{er.current&&el&&e.target===el.dialog&&(et.current=!0),er.current=!1},ep=()=>{ee(!0),ea.current=(0,y.Z)(el.dialog,()=>{ee(!1)})},ex=e=>{e.target===e.currentTarget&&ep()},ev=e=>{if("static"===T){ex(e);return}if(et.current||e.target!==e.currentTarget){et.current=!1;return}null==H||H()},eb=e=>{_?null==R||R(e):(e.preventDefault(),"static"===T&&ep())},eg=(e,r)=>{e&&eu(e),null==U||U(e,r)},ey=e=>{null==ea.current||ea.current(),null==z||z(e)},eN=(e,r)=>{null==W||W(e,r),(0,u.ZP)(window,"resize",ef)},ej=e=>{e&&(e.style.display=""),null==K||K(e),(0,h.Z)(window,"resize",ef)},eZ=(0,n.useCallback)(r=>(0,l.jsx)("div",{...r,className:s()(`${e}-backdrop`,X,!k&&"show")}),[k,X,e]),ew={...t,...Q};ew.display="block";let eC=t=>(0,l.jsx)("div",{role:"dialog",...t,style:ew,className:s()(r,e,Y&&`${e}-static`,!k&&"show"),onClick:T?ev:void 0,onMouseUp:eh,"aria-label":C,"aria-labelledby":Z,"aria-describedby":w,children:(0,l.jsx)(c,{...q,onMouseDown:em,className:a,contentClassName:o,children:d})});return(0,l.jsx)(E.Z.Provider,{value:ei,children:(0,l.jsx)(N.Z,{show:$,ref:eo,backdrop:T,container:O,keyboard:!0,autoFocus:P,enforceFocus:D,restoreFocus:S,restoreFocusOptions:I,onEscapeKeyDown:eb,onShow:B,onHide:H,onEnter:eg,onEntering:eN,onEntered:A,onExit:ey,onExiting:L,onExited:ej,manager:ec(),transition:k?M:void 0,backdropTransition:k?F:void 0,renderBackdrop:eZ,renderDialog:eC})})});O.displayName="Modal",O.defaultProps={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:$};var P=Object.assign(O,{Body:C,Header:_,Title:H,Footer:k,Dialog:$,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150}),D=t(857),S=t.n(D),I=t(682);let A=e=>{let{titulo:r,descripcion:t,ocultarModal:a}=e,[o,s]=(0,n.useState)(!1),[d,i]=(0,n.useState)("");(0,n.useEffect)(()=>{a&&i("d-none")},[a]);let u=()=>s(!1),f=()=>s(!0);return(0,l.jsxs)(I.Z,{fluid:!0,className:d+" d-flex h-100  align-self-end",children:[(0,l.jsx)(c,{variant:"primary",className:S().BotonModal+" justify-content-center",onClick:f,children:"Detalles"}),(0,l.jsxs)(P,{show:o,onHide:u,children:[(0,l.jsx)(P.Header,{closeButton:!0,children:(0,l.jsx)(P.Title,{children:r})}),(0,l.jsx)(P.Body,{children:(0,l.jsx)("p",{children:t})}),(0,l.jsx)(P.Footer,{children:(0,l.jsx)(c,{className:"",variant:"primary",onClick:u,children:"Close"})})]})]})};var z=A},857:function(e){e.exports={BotonModal:"Modal_BotonModal__TJm6h"}},9059:function(e,r,t){"use strict";var a=t(7294);let l=a.createContext(null);l.displayName="CardHeaderContext",r.Z=l}},function(e){e.O(0,[462,774,888,179],function(){return e(e.s=3220)}),_N_E=e.O()}]);