(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[797],{227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,r,o){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(2648).Z,n=r(7273).Z,l=o(r(7294)),a=r(1003),u=r(7795),c=r(4465),f=r(2692),i=r(8245),s=r(9246),d=r(227),p=r(3468);let h=new Set;function v(e,t,r,o){if(a.isLocalURL(t)){if(!o.bypassPrefetchedCheck){let n=void 0!==o.locale?o.locale:"locale"in e?e.locale:void 0,l=t+"%"+r+"%"+n;if(h.has(l))return;h.add(l)}Promise.resolve(e.prefetch(t,r,o)).catch(e=>{})}}function y(e){return"string"==typeof e?e:u.formatUrl(e)}let m=l.default.forwardRef(function(e,t){let r,o;let{href:u,as:h,children:m,prefetch:b,passHref:g,replace:j,shallow:C,scroll:E,locale:O,onClick:_,onMouseEnter:w,onTouchStart:M,legacyBehavior:k=!1}=e,P=n(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);r=m,k&&("string"==typeof r||"number"==typeof r)&&(r=l.default.createElement("a",null,r));let x=!1!==b,N=l.default.useContext(f.RouterContext),$=l.default.useContext(i.AppRouterContext),R=null!=N?N:$,S=!N,{href:L,as:I}=l.default.useMemo(()=>{if(!N){let e=y(u);return{href:e,as:h?y(h):e}}let[t,r]=a.resolveHref(N,u,!0);return{href:t,as:h?a.resolveHref(N,h):r||t}},[N,u,h]),T=l.default.useRef(L),z=l.default.useRef(I);k&&(o=l.default.Children.only(r));let D=k?o&&"object"==typeof o&&o.ref:t,[K,U,Z]=s.useIntersection({rootMargin:"200px"}),H=l.default.useCallback(e=>{(z.current!==I||T.current!==L)&&(Z(),z.current=I,T.current=L),K(e),D&&("function"==typeof D?D(e):"object"==typeof D&&(D.current=e))},[I,D,L,Z,K]);l.default.useEffect(()=>{R&&U&&x&&v(R,L,I,{locale:O})},[I,L,U,O,x,null==N?void 0:N.locale,R]);let A={ref:H,onClick(e){k||"function"!=typeof _||_(e),k&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),R&&!e.defaultPrevented&&function(e,t,r,o,n,u,c,f,i,s){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!a.isLocalURL(r)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[n?"replace":"push"](r,o,{shallow:u,locale:f,scroll:c}):t[n?"replace":"push"](o||r,{forceOptimisticNavigation:!s})};i?l.default.startTransition(h):h()}(e,R,L,I,j,C,E,O,S,x)},onMouseEnter(e){k||"function"!=typeof w||w(e),k&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),R&&(x||!S)&&v(R,L,I,{locale:O,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){k||"function"!=typeof M||M(e),k&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),R&&(x||!S)&&v(R,L,I,{locale:O,priority:!0,bypassPrefetchedCheck:!0})}};if(!k||g||"a"===o.type&&!("href"in o.props)){let B=void 0!==O?O:null==N?void 0:N.locale,G=(null==N?void 0:N.isLocaleDomain)&&d.getDomainLocale(I,B,null==N?void 0:N.locales,null==N?void 0:N.domainLocales);A.href=G||p.addBasePath(c.addLocale(I,B,null==N?void 0:N.defaultLocale))}return k?l.default.cloneElement(o,A):l.default.createElement("a",Object.assign({},P,A),r)});t.default=m,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:r,disabled:c}=e,f=c||!l,[i,s]=o.useState(!1),[d,p]=o.useState(null);o.useEffect(()=>{if(l){if(!f&&!i&&d&&d.tagName){let e=function(e,t,r){let{id:o,observer:n,elements:l}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},o=u.find(e=>e.root===r.root&&e.margin===r.margin);if(o&&(t=a.get(o)))return t;let n=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:l,elements:n},u.push(r),a.set(r,t),t}(r);return l.set(e,t),n.observe(e),function(){if(l.delete(e),n.unobserve(e),0===l.size){n.disconnect(),a.delete(o);let t=u.findIndex(e=>e.root===o.root&&e.margin===o.margin);t>-1&&u.splice(t,1)}}}(d,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:r});return e}}else if(!i){let o=n.requestIdleCallback(()=>s(!0));return()=>n.cancelIdleCallback(o)}},[d,f,r,t,i]);let h=o.useCallback(()=>{s(!1)},[]);return[p,i,h]};var o=r(7294),n=r(4686);let l="function"==typeof IntersectionObserver,a=new Map,u=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1664:function(e,t,r){r(1551)},1555:function(e,t,r){"use strict";var o=r(4184),n=r.n(o),l=r(7294),a=r(6792),u=r(5893);let c=l.forwardRef((e,t)=>{let[{className:r,...o},{as:l="div",bsPrefix:c,spans:f}]=function({as:e,bsPrefix:t,className:r,...o}){t=(0,a.vE)(t,"col");let l=(0,a.pi)(),u=(0,a.zG)(),c=[],f=[];return l.forEach(e=>{let r,n,l;let a=o[e];delete o[e],"object"==typeof a&&null!=a?{span:r,offset:n,order:l}=a:r=a;let i=e!==u?`-${e}`:"";r&&c.push(!0===r?`${t}${i}`:`${t}${i}-${r}`),null!=l&&f.push(`order${i}-${l}`),null!=n&&f.push(`offset${i}-${n}`)}),[{...o,className:n()(r,...c,...f)},{as:e,bsPrefix:t,spans:c}]}(e);return(0,u.jsx)(l,{...o,ref:t,className:n()(r,!f.length&&c)})});c.displayName="Col",t.Z=c},4051:function(e,t,r){"use strict";var o=r(4184),n=r.n(o),l=r(7294),a=r(6792),u=r(5893);let c=l.forwardRef(({bsPrefix:e,className:t,as:r="div",...o},l)=>{let c=(0,a.vE)(e,"row"),f=(0,a.pi)(),i=(0,a.zG)(),s=`${c}-cols`,d=[];return f.forEach(e=>{let t;let r=o[e];delete o[e],null!=r&&"object"==typeof r?{cols:t}=r:t=r;let n=e!==i?`-${e}`:"";null!=t&&d.push(`${s}${n}-${t}`)}),(0,u.jsx)(r,{ref:l,...o,className:n()(t,c,...d)})});c.displayName="Row",t.Z=c},8357:function(e,t,r){"use strict";r.d(t,{w_:function(){return c}});var o=r(7294),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=o.createContext&&o.createContext(n),a=function(){return(a=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},u=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)0>t.indexOf(o[n])&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]]);return r};function c(e){return function(t){return o.createElement(f,a({attr:a({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return o.createElement(t.tag,a({key:r},t.attr),e(t.child))})}(e.child))}}function f(e){var t=function(t){var r,n=e.attr,l=e.size,c=e.title,f=u(e,["attr","size","title"]),i=l||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),o.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,f,{className:r,style:a(a({color:e.color||t.color},t.style),e.style),height:i,width:i,xmlns:"http://www.w3.org/2000/svg"}),c&&o.createElement("title",null,c),e.children)};return void 0!==l?o.createElement(l.Consumer,null,function(e){return t(e)}):t(n)}}}]);