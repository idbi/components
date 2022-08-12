(function(_,m){typeof exports=="object"&&typeof module<"u"?m(exports,require("styled-components"),require("react"),require("react-loading-skeleton"),require("react-select")):typeof define=="function"&&define.amd?define(["exports","styled-components","react","react-loading-skeleton","react-select"],m):(_=typeof globalThis<"u"?globalThis:_||self,m(_["ID-Components"]={},_.styled,_.React,_.Skeleton,_.Select))})(this,function(_,m,N,Ve,He){"use strict";const q=r=>r&&typeof r=="object"&&"default"in r?r:{default:r},D=q(m),k=q(N),qe=q(Ve),Ge=q(He),Je={bold:700,medium:500,regular:400,light:300},le={xs:"0.750rem",sm:"0.875rem	",md:"1.0rem",lg:"1.250rem",xl:"1.5rem",xxl:"2.0rem"},fe={h1:"xl",h2:"lg",h3:"md",h4:"sm",h5:"xs",h6:"xs",text:"md"},Ke=({shape:r})=>{switch(r){case"rounded":return m.css`
        border-radius: 10px;
      `;case"squared":return m.css`
        border-radius: 0;
      `;case"circular":return m.css`
        border-radius: 25px;
      `;default:return m.css`
        border-radius: 10px;
      `}},de=({design:r,color:o})=>{switch(r){case"solid":return m.css`
        background-color: ${({theme:a})=>A({theme:a,color:o})};
        color: #fff;
      `;case"outline":return m.css`
        background-color: transparent;
        border: 1px solid ${({theme:a})=>A({theme:a,color:o})};
        color: ${({theme:a})=>A({theme:a,color:o})};
      `;case"flat":return m.css`
        background-color: transparent;
        border: none;
        color: ${({theme:a})=>A({theme:a,color:o})};
      `;case"link":return m.css`
        background-color: transparent;
        border: none;
        color: ${({theme:a})=>A({theme:a,color:o})};

        &:hover {
          color: ${({theme:a})=>A({theme:a,color:o,hover:!0})};
          text-decoration: underline;
        }
      `;default:return m.css`
        background-color: ${({theme:a})=>A({theme:a,color:o})};
        color: #fff;
      `}},A=({color:r="SECONDARY/900",theme:o,design:a,hover:f})=>{const u=r.split("/"),l=u[0];let i=+u[1];if(f&&i>=300)switch(a){case"solid":i-=100;break;case"outline":i=100;break;case"flat":i=100;break;default:i>=400?i-=100:i+=100;break}if(f&&i<300)switch(a){case"solid":i+=100;break;case"outline":i=100;break;case"flat":i=100;break;default:i-=100;break}return l==="PRIMARY"||l==="SECONDARY"||l==="TERTIARY"||l==="QUATERNARY"||l==="STATE"||l==="ALERT"||l==="SUCCESS"?i===50||i===100||i===200||i===300||i===400||i===500||i===600||i===700||i===800||i===900?o.color[l][i]:o.color[l][900]:o.color.PRIMARY[900]},pe=({fullWidth:r})=>r?m.css`
      width: 100%;
    `:m.css`
    width: auto;
  `,Qe=({isLoading:r})=>r?m.css`
      cursor: not-allowed;
      opacity: 0.5;
    `:m.css`
    cursor: pointer;
    opacity: 1;
  `,Xe=({disabled:r})=>r?m.css`
      cursor: not-allowed;
      opacity: 0.5;
    `:m.css`
    cursor: pointer;
    opacity: 1;
  `,Z=({size:r})=>{if(r)return m.css`
      font-size: ${le[r]||r};
    `},Ze=D.default.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
`,er=D.default(Ze)`
  display: inline-flex;
  gap: 0.5rem;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease-out;
  padding: ${({design:r})=>r==="link"?"0":"0.5rem"};
  min-height: ${({design:r})=>r==="link"?"0":"45px"};

  ${({size:r})=>Z({size:r})};
  ${({shape:r})=>Ke({shape:r})};
  ${({design:r,color:o})=>de({design:r,color:o})};
  ${({fullWidth:r})=>pe({fullWidth:r})};
  ${({isLoading:r})=>Qe({isLoading:r})};
  ${({disabled:r})=>Xe({disabled:r})};

  &:hover {
    background-color: ${({theme:r,color:o,design:a})=>a==="link"?"transparent":A({color:o,theme:r,design:a,hover:!0})};
  }

  &:active {
    background-color: ${({theme:r,color:o,design:a})=>a==="link"?"transparent":A({color:o,theme:r,design:a,hover:!0})};
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:disabled:hover {
    ${({design:r,color:o})=>de({design:r,color:o})};
  }
`;var ee={exports:{}},M={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ve;function rr(){if(ve)return M;ve=1;var r=k.default,o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),f=Object.prototype.hasOwnProperty,u=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function i(h,c,x){var R,w={},C=null,j=null;x!==void 0&&(C=""+x),c.key!==void 0&&(C=""+c.key),c.ref!==void 0&&(j=c.ref);for(R in c)f.call(c,R)&&!l.hasOwnProperty(R)&&(w[R]=c[R]);if(h&&h.defaultProps)for(R in c=h.defaultProps,c)w[R]===void 0&&(w[R]=c[R]);return{$$typeof:o,type:h,key:C,ref:j,props:w,_owner:u.current}}return M.Fragment=a,M.jsx=i,M.jsxs=i,M}var z={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var he;function tr(){return he||(he=1,process.env.NODE_ENV!=="production"&&function(){var r=k.default,o=Symbol.for("react.element"),a=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),h=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),R=Symbol.for("react.suspense_list"),w=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),j=Symbol.for("react.offscreen"),ye=Symbol.iterator,_r="@@iterator";function Tr(e){if(e===null||typeof e!="object")return null;var t=ye&&e[ye]||e[_r];return typeof t=="function"?t:null}var U=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function T(e){{for(var t=arguments.length,n=new Array(t>1?t-1:0),s=1;s<t;s++)n[s-1]=arguments[s];Sr("error",e,n)}}function Sr(e,t,n){{var s=U.ReactDebugCurrentFrame,v=s.getStackAddendum();v!==""&&(t+="%s",n=n.concat([v]));var g=n.map(function(p){return String(p)});g.unshift("Warning: "+t),Function.prototype.apply.call(console[e],console,g)}}var wr=!1,Cr=!1,Fr=!1,kr=!1,Ar=!1,Re;Re=Symbol.for("react.module.reference");function Or(e){return!!(typeof e=="string"||typeof e=="function"||e===f||e===l||Ar||e===u||e===x||e===R||kr||e===j||wr||Cr||Fr||typeof e=="object"&&e!==null&&(e.$$typeof===C||e.$$typeof===w||e.$$typeof===i||e.$$typeof===h||e.$$typeof===c||e.$$typeof===Re||e.getModuleId!==void 0))}function Pr(e,t,n){var s=e.displayName;if(s)return s;var v=t.displayName||t.name||"";return v!==""?n+"("+v+")":n}function xe(e){return e.displayName||"Context"}function O(e){if(e==null)return null;if(typeof e.tag=="number"&&T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case f:return"Fragment";case a:return"Portal";case l:return"Profiler";case u:return"StrictMode";case x:return"Suspense";case R:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case h:var t=e;return xe(t)+".Consumer";case i:var n=e;return xe(n._context)+".Provider";case c:return Pr(e,e.render,"ForwardRef");case w:var s=e.displayName||null;return s!==null?s:O(e.type)||"Memo";case C:{var v=e,g=v._payload,p=v._init;try{return O(p(g))}catch{return null}}}return null}var L=Object.assign,V=0,_e,Te,Se,we,Ce,Fe,ke;function Ae(){}Ae.__reactDisabledLog=!0;function Ir(){{if(V===0){_e=console.log,Te=console.info,Se=console.warn,we=console.error,Ce=console.group,Fe=console.groupCollapsed,ke=console.groupEnd;var e={configurable:!0,enumerable:!0,value:Ae,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}V++}}function $r(){{if(V--,V===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:L({},e,{value:_e}),info:L({},e,{value:Te}),warn:L({},e,{value:Se}),error:L({},e,{value:we}),group:L({},e,{value:Ce}),groupCollapsed:L({},e,{value:Fe}),groupEnd:L({},e,{value:ke})})}V<0&&T("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var te=U.ReactCurrentDispatcher,ne;function G(e,t,n){{if(ne===void 0)try{throw Error()}catch(v){var s=v.stack.trim().match(/\n( *(at )?)/);ne=s&&s[1]||""}return`
`+ne+e}}var oe=!1,J;{var jr=typeof WeakMap=="function"?WeakMap:Map;J=new jr}function Oe(e,t){if(!e||oe)return"";{var n=J.get(e);if(n!==void 0)return n}var s;oe=!0;var v=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var g;g=te.current,te.current=null,Ir();try{if(t){var p=function(){throw Error()};if(Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(P){s=P}Reflect.construct(e,[],p)}else{try{p.call()}catch(P){s=P}e.call(p.prototype)}}else{try{throw Error()}catch(P){s=P}e()}}catch(P){if(P&&s&&typeof P.stack=="string"){for(var d=P.stack.split(`
`),S=s.stack.split(`
`),E=d.length-1,y=S.length-1;E>=1&&y>=0&&d[E]!==S[y];)y--;for(;E>=1&&y>=0;E--,y--)if(d[E]!==S[y]){if(E!==1||y!==1)do if(E--,y--,y<0||d[E]!==S[y]){var F=`
`+d[E].replace(" at new "," at ");return e.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",e.displayName)),typeof e=="function"&&J.set(e,F),F}while(E>=1&&y>=0);break}}}finally{oe=!1,te.current=g,$r(),Error.prepareStackTrace=v}var W=e?e.displayName||e.name:"",ze=W?G(W):"";return typeof e=="function"&&J.set(e,ze),ze}function Dr(e,t,n){return Oe(e,!1)}function Lr(e){var t=e.prototype;return!!(t&&t.isReactComponent)}function K(e,t,n){if(e==null)return"";if(typeof e=="function")return Oe(e,Lr(e));if(typeof e=="string")return G(e);switch(e){case x:return G("Suspense");case R:return G("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case c:return Dr(e.render);case w:return K(e.type,t,n);case C:{var s=e,v=s._payload,g=s._init;try{return K(g(v),t,n)}catch{}}}return""}var Q=Object.prototype.hasOwnProperty,Pe={},Ie=U.ReactDebugCurrentFrame;function X(e){if(e){var t=e._owner,n=K(e.type,e._source,t?t.type:null);Ie.setExtraStackFrame(n)}else Ie.setExtraStackFrame(null)}function Nr(e,t,n,s,v){{var g=Function.call.bind(Q);for(var p in e)if(g(e,p)){var d=void 0;try{if(typeof e[p]!="function"){var S=Error((s||"React class")+": "+n+" type `"+p+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[p]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw S.name="Invariant Violation",S}d=e[p](t,p,s,n,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(E){d=E}d&&!(d instanceof Error)&&(X(v),T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",s||"React class",n,p,typeof d),X(null)),d instanceof Error&&!(d.message in Pe)&&(Pe[d.message]=!0,X(v),T("Failed %s type: %s",n,d.message),X(null))}}}var Yr=Array.isArray;function ae(e){return Yr(e)}function Ur(e){{var t=typeof Symbol=="function"&&Symbol.toStringTag,n=t&&e[Symbol.toStringTag]||e.constructor.name||"Object";return n}}function Br(e){try{return $e(e),!1}catch{return!0}}function $e(e){return""+e}function je(e){if(Br(e))return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Ur(e)),$e(e)}var H=U.ReactCurrentOwner,Wr={key:!0,ref:!0,__self:!0,__source:!0},De,Le,ie;ie={};function Mr(e){if(Q.call(e,"ref")){var t=Object.getOwnPropertyDescriptor(e,"ref").get;if(t&&t.isReactWarning)return!1}return e.ref!==void 0}function zr(e){if(Q.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return e.key!==void 0}function Vr(e,t){if(typeof e.ref=="string"&&H.current&&t&&H.current.stateNode!==t){var n=O(H.current.type);ie[n]||(T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',O(H.current.type),e.ref),ie[n]=!0)}}function Hr(e,t){{var n=function(){De||(De=!0,T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};n.isReactWarning=!0,Object.defineProperty(e,"key",{get:n,configurable:!0})}}function qr(e,t){{var n=function(){Le||(Le=!0,T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};n.isReactWarning=!0,Object.defineProperty(e,"ref",{get:n,configurable:!0})}}var Gr=function(e,t,n,s,v,g,p){var d={$$typeof:o,type:e,key:t,ref:n,props:p,_owner:g};return d._store={},Object.defineProperty(d._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(d,"_self",{configurable:!1,enumerable:!1,writable:!1,value:s}),Object.defineProperty(d,"_source",{configurable:!1,enumerable:!1,writable:!1,value:v}),Object.freeze&&(Object.freeze(d.props),Object.freeze(d)),d};function Jr(e,t,n,s,v){{var g,p={},d=null,S=null;n!==void 0&&(je(n),d=""+n),zr(t)&&(je(t.key),d=""+t.key),Mr(t)&&(S=t.ref,Vr(t,v));for(g in t)Q.call(t,g)&&!Wr.hasOwnProperty(g)&&(p[g]=t[g]);if(e&&e.defaultProps){var E=e.defaultProps;for(g in E)p[g]===void 0&&(p[g]=E[g])}if(d||S){var y=typeof e=="function"?e.displayName||e.name||"Unknown":e;d&&Hr(p,y),S&&qr(p,y)}return Gr(e,d,S,v,s,H.current,p)}}var se=U.ReactCurrentOwner,Ne=U.ReactDebugCurrentFrame;function B(e){if(e){var t=e._owner,n=K(e.type,e._source,t?t.type:null);Ne.setExtraStackFrame(n)}else Ne.setExtraStackFrame(null)}var ue;ue=!1;function ce(e){return typeof e=="object"&&e!==null&&e.$$typeof===o}function Ye(){{if(se.current){var e=O(se.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function Kr(e){{if(e!==void 0){var t=e.fileName.replace(/^.*[\\\/]/,""),n=e.lineNumber;return`

Check your code at `+t+":"+n+"."}return""}}var Ue={};function Qr(e){{var t=Ye();if(!t){var n=typeof e=="string"?e:e.displayName||e.name;n&&(t=`

Check the top-level render call using <`+n+">.")}return t}}function Be(e,t){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var n=Qr(t);if(Ue[n])return;Ue[n]=!0;var s="";e&&e._owner&&e._owner!==se.current&&(s=" It was passed a child from "+O(e._owner.type)+"."),B(e),T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',n,s),B(null)}}function We(e,t){{if(typeof e!="object")return;if(ae(e))for(var n=0;n<e.length;n++){var s=e[n];ce(s)&&Be(s,t)}else if(ce(e))e._store&&(e._store.validated=!0);else if(e){var v=Tr(e);if(typeof v=="function"&&v!==e.entries)for(var g=v.call(e),p;!(p=g.next()).done;)ce(p.value)&&Be(p.value,t)}}}function Xr(e){{var t=e.type;if(t==null||typeof t=="string")return;var n;if(typeof t=="function")n=t.propTypes;else if(typeof t=="object"&&(t.$$typeof===c||t.$$typeof===w))n=t.propTypes;else return;if(n){var s=O(t);Nr(n,e.props,"prop",s,e)}else if(t.PropTypes!==void 0&&!ue){ue=!0;var v=O(t);T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",v||"Unknown")}typeof t.getDefaultProps=="function"&&!t.getDefaultProps.isReactClassApproved&&T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function Zr(e){{for(var t=Object.keys(e.props),n=0;n<t.length;n++){var s=t[n];if(s!=="children"&&s!=="key"){B(e),T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",s),B(null);break}}e.ref!==null&&(B(e),T("Invalid attribute `ref` supplied to `React.Fragment`."),B(null))}}function Me(e,t,n,s,v,g){{var p=Or(e);if(!p){var d="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(d+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var S=Kr(v);S?d+=S:d+=Ye();var E;e===null?E="null":ae(e)?E="array":e!==void 0&&e.$$typeof===o?(E="<"+(O(e.type)||"Unknown")+" />",d=" Did you accidentally export a JSX literal instead of a component?"):E=typeof e,T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",E,d)}var y=Jr(e,t,n,v,g);if(y==null)return y;if(p){var F=t.children;if(F!==void 0)if(s)if(ae(F)){for(var W=0;W<F.length;W++)We(F[W],e);Object.freeze&&Object.freeze(F)}else T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else We(F,e)}return e===f?Zr(y):Xr(y),y}}function et(e,t,n){return Me(e,t,n,!0)}function rt(e,t,n){return Me(e,t,n,!1)}var tt=rt,nt=et;z.Fragment=f,z.jsx=tt,z.jsxs=nt}()),z}(function(r){process.env.NODE_ENV==="production"?r.exports=rr():r.exports=tr()})(ee);const b=ee.exports.jsx,re=ee.exports.jsxs,nr=({children:r,...o})=>re(er,{...o,children:[o.leftIcon,r,o.rightIcon]});function or(r,o,a){const f=()=>{const u=document.querySelectorAll("input");return Array.from(u).filter(i=>i.className===o)};N.useEffect(()=>{const u=l=>{l.key==="Backspace"&&setTimeout(()=>{const i=f(),h=document.activeElement;h.value="";const c=i.indexOf(h);c>0&&i[c-1].focus()},0)};return document.addEventListener("keydown",u),()=>document.removeEventListener("keydown",u)},[]),N.useEffect(()=>{const u=l=>{if(l.key!=="Backspace"){const i=l.key.toLowerCase();setTimeout(()=>{if(i.length===1){const h=f(),c=document.activeElement;c.value=i;const x=h.indexOf(c);x<h.length-1&&h[x+1].focus()}},0)}};return document.addEventListener("keydown",u),()=>document.removeEventListener("keydown",u)},[]),N.useEffect(()=>{if(r){const u=l=>{const i=l.key.toLowerCase();(i.length===1||i==="backspace")&&setTimeout(()=>{const c=f().map(x=>x.value).join("");r(c)},0)};return document.addEventListener("keydown",u),()=>document.removeEventListener("keydown",u)}},[]),N.useEffect(()=>{if(a){const u=f(),l=a.split("");u.forEach((i,h)=>{const c=l[h];c&&(i.value=c)})}},[a])}const ar=D.default.div`
  display: grid;
  grid-template-columns: repeat(${r=>r.length}, 1fr);
  grid-gap: 0.5rem;
  align-items: center;

  > input {
    text-align: center;
    width: 100%;
    flex-grow: 1;
    border: none;
    outline: none;
    width: 45px;
    height: 45px;
    border: 1px solid
      ${({theme:r,error:o,success:a})=>o?r.color.ALERT[900]:a?r.color.SUCCESS[900]:r.color.NEUTRAL[300]};
    border-radius: 8px;
    background: #fff;
    font: normal 16px "Poppins";
    letter-spacing: -0.04em;
    color: ${r=>r.theme.color.NEUTRAL[700]};

    transition: background 0.3s ease-out;
    transition: border 0.3s ease-out;

    &:disabled {
      cursor: not-allowed;
      background-color: ${r=>r.theme.color.NEUTRAL[100]};
      color: ${r=>r.theme.color.NEUTRAL[500]};
    }

    &:focus {
      border-color: ${r=>r.theme.color.QUATERNARY[900]};
    }
  }
`,ir=({id:r,value:o,length:a=4,error:f,success:u,onChange:l=h=>{},...i})=>(or(l,r,o),b(ar,{length:a,error:f,success:u,children:Array.from({length:a}).map((h,c)=>b("input",{id:c.toString(),className:r,maxLength:1,...i},c))})),Y={color:{NEUTRAL:{50:"#F5F5F5",100:"#EBEBEB",200:"#dfdfdf",300:"#bfbfbf",400:"#9f9f9f",500:"#808080",600:"#404040",700:"#404040",800:"#202020",900:"#000000"},PRIMARY:{50:"#F1F2F9",100:"#E6E8F4",200:"#DDDFF0",300:"#BBBFE2",400:"#999FD3",500:"#777fc5",600:"#545fb6",700:"#414a98",800:"#333a76",900:"#242954"},SECONDARY:{20:"#F7F5FF",50:"#EFEBFF",100:"#E6E0FF",200:"#d0c5ff",300:"#d0c5ff",400:"#b9a8ff",500:"#a18cff",600:"#8a6fff",700:"#7252ff",800:"#5b35ff",900:"#4318FF"},TERTIARY:{50:"#FFFAFC",100:"#FFF5F9",200:"#ffeff5",300:"#ffe0eb",400:"#ffd0e1",500:"#ffc1d7",600:"#ffb1cd",700:"#FFA1C3",800:"#ff92b9",900:"#FF82AF"},QUATERNARY:{50:"#FBFCFE",100:"#F2F6FD",200:"#ebf1fc",300:"#D8E4FA",400:"#c4d6f8",500:"#b0c8f5",600:"#9cbbf3",700:"#88adf0",800:"#75a0ed",900:"#6192EB"},STATE:{50:"#FFFBF5",100:"#FEF7EB",200:"#fef3e3",300:"#fde7c6",400:"#fcdba9",500:"#fbcf8d",600:"#fac270",700:"#f9b654",800:"#f8aa38",900:"#F79E1B"},ALERT:{50:"#FFFBF5",100:"#FEEDEC",200:"#fde3e2",300:"#fbc8c5",400:"#f9ada8",500:"#f7918b",600:"#f4756d",700:"#F25A50",800:"#F03E33",900:"#EE2316"},SUCCESS:{50:"#F7FDFA",100:"#EEFBF4",200:"#e4f9ed",300:"#c9f3db",400:"#aeedc9",500:"#93e7b7",600:"#78e1a4",700:"#5DDB92",800:"#42D580",900:"#2DC96F"}}},sr=D.default.div`
  position: relative;
  width: 100%;

  label {
    position: relative;
    width: fit-content;
    font: 500 14px "Poppins" !important;
    display: flex;
    margin-left: 2px;
    margin-bottom: 7px;

    align-items: center;

    p {
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        cursor: pointer;
        margin-left: 13px;
        color: ${r=>r.theme.color.PRIMARY[900]};
        position: relative;
        right: unset;
        top: unset;
        fill: none;
      }

      small {
        opacity: 0.8;
        display: none;
        visibility: hidden;

        position: absolute;
        font: normal 9px Poppins;
        background: ${r=>r.theme.color.PRIMARY[900]};
        width: 200px;
        color: #f5f5f5;
        padding: 5px 10px;
        border-radius: 5px;

        top: 0;
        left: 105%;

        z-index: 5;
      }
    }

    p:hover {
      small {
        display: block;
        visibility: visible;
      }
    }
  }

  select + svg {
    position: absolute;
    right: 20px;
    fill: #151e5a;
    top: 50%;
    transform: translateY(-50%);
  }

  label + select + svg {
    position: absolute;
    right: 20px;
    fill: #151e5a;
    top: 45px;
    transform: none;
  }

  > small {
    display: block;
    font: normal 11px Poppins;
    color: ${({theme:r})=>r.color.ALERT[900]};
    margin-left: 2px;
    margin-top: 3px;
  }

  & > span {
    width: 100%;
  }
`,ur={control:(r,o)=>({...r,minHeight:"45px",borderRadius:10,backgroundColor:"#ffffff",border:`1px solid ${o.isFocused?Y.color.QUATERNARY[900]:Y.color.NEUTRAL[300]}`,boxShadow:"none",cursor:"pointer"}),singleValue:()=>({color:Y.color.PRIMARY[900],fontWeight:500,fontSize:14}),placeholder:r=>({...r,color:Y.color.NEUTRAL[700]}),indicatorSeparator:r=>({...r,display:"none"}),indicatorContainer:r=>({...r,padding:0}),valueContainer:r=>({...r,padding:0,paddingLeft:"7px"})},cr=({formatOptionLabel:r,options:o,loading:a=!1,style:f,error:u,firstOption:l,initialValue:i,value:h,onChange:c,isMulti:x,placeholder:R})=>{const w=l||{label:"Seleccione una opci\xF3n",value:""},C=[...o];return b(sr,{style:f,hasError:!!u,children:a?b(qe.default,{style:{borderRadius:10},className:"loading-skeleton",height:46,width:"100%"}):b(Ge.default,{placeholder:R,value:h||void 0,defaultValue:i||w,options:C,onChange:c,styles:ur,isMulti:x,formatOptionLabel:r})})},lr=D.default.div`
  ${({fullWidth:r})=>pe({fullWidth:r})};
  padding-left: ${({leftAddon:r})=>r&&"12px"};
  padding-right: ${({rightAddon:r})=>r&&"12px"};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 8px;
  border: 1px solid
    ${({theme:r,error:o,success:a,isFocused:f})=>o?r.color.ALERT[900]:a?r.color.SUCCESS[900]:f?r.color.QUATERNARY[900]:r.color.NEUTRAL[300]};
  background: #fff;
  min-height: 45px;
  ::placeholder {
    color: ${r=>r.theme.color.NEUTRAL[500]};
  }

  background-color: ${({theme:r,disabled:o})=>o?r.color.NEUTRAL[100]:"#fff"};
  cursor: ${({disabled:r})=>r?"not-allowed":"auto"};
  transition: background 0.3s ease-out;
  transition: border 0.3s ease-out;

  > input {
    width: 100%;
    ${({size:r})=>Z({size:r})};
    flex-grow: 1;
    border: none;
    outline: none;
    padding: 10px 0;
    background: transparent;
    letter-spacing: -0.04em;
    color: ${r=>r.theme.color.NEUTRAL[700]};

    &:disabled {
      cursor: not-allowed;
      background-color: ${r=>r.theme.color.NEUTRAL[100]};
      color: ${r=>r.theme.color.NEUTRAL[500]};
    }
  }

  span {
    color: ${r=>r.theme.color.NEUTRAL[500]};
    ${({size:r})=>Z({size:r})};
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: -0.04em;
    user-select: none;
  }
`;var ge={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},me=k.default.createContext&&k.default.createContext(ge),I=globalThis&&globalThis.__assign||function(){return I=Object.assign||function(r){for(var o,a=1,f=arguments.length;a<f;a++){o=arguments[a];for(var u in o)Object.prototype.hasOwnProperty.call(o,u)&&(r[u]=o[u])}return r},I.apply(this,arguments)},fr=globalThis&&globalThis.__rest||function(r,o){var a={};for(var f in r)Object.prototype.hasOwnProperty.call(r,f)&&o.indexOf(f)<0&&(a[f]=r[f]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,f=Object.getOwnPropertySymbols(r);u<f.length;u++)o.indexOf(f[u])<0&&Object.prototype.propertyIsEnumerable.call(r,f[u])&&(a[f[u]]=r[f[u]]);return a};function be(r){return r&&r.map(function(o,a){return k.default.createElement(o.tag,I({key:a},o.attr),be(o.child))})}function Ee(r){return function(o){return k.default.createElement(dr,I({attr:I({},r.attr)},o),be(r.child))}}function dr(r){var o=function(a){var f=r.attr,u=r.size,l=r.title,i=fr(r,["attr","size","title"]),h=u||a.size||"1em",c;return a.className&&(c=a.className),r.className&&(c=(c?c+" ":"")+r.className),k.default.createElement("svg",I({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},a.attr,f,i,{className:c,style:I(I({color:r.color||a.color},a.style),r.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),l&&k.default.createElement("title",null,l),r.children)};return me!==void 0?k.default.createElement(me.Consumer,null,function(a){return o(a)}):o(ge)}function pr(r){return Ee({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]})(r)}function vr(r){return Ee({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z"}}]}]})(r)}const hr=({type:r,leftAddon:o,rightAddon:a,placeholder:f,error:u,success:l,size:i,fullWidth:h,onFocus:c,onBlur:x,...R})=>{const[w,C]=N.useState(!1);return re(lr,{fullWidth:h,success:l,size:i,error:u,disabled:R.disabled,isFocused:w,children:[b("span",{children:o}),b("input",{onFocus:j=>{c&&c(j),C(!0)},onBlur:j=>{x&&x(j),C(!1)},placeholder:f,type:r,...R}),b("span",{children:a}),u&&b("span",{children:b(vr,{size:24,color:Y.color.ALERT[900]})}),l&&b("span",{children:b(pr,{size:20,color:Y.color.SUCCESS[900]})})]})},gr=m.css`
  font-family: "Poppins";
  font-style: normal;
  line-height: 24px;
  letter-spacing: -0.04em;
`,mr=r=>{const o=r==="h1"||r==="h2"||r==="h3"||r==="h4"||r==="h5"||r==="h6",a=o?"bold":"medium",f=o?fe[r]:fe.text,u="PRIMARY/900";return m.css`
    font-weight: ${({weight:l=a})=>Je[l]||"500"};
    font-size: ${({size:l=f})=>le[l]||l};
    color: ${({theme:l,color:i=u})=>{const h=i==null?void 0:i.split("/")[0],c=+(i==null?void 0:i.split("/")[1]);return l.color[h][c]}};
  `},br={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",p:"p",span:"span",strong:"strong",label:"label"},Er=D.default.div`
  ${gr}
  ${({as:r})=>mr(r)}
`,$=({as:r,...o})=>{const a=br[r];return b(Er,{as:a,...o})},yr={H1:r=>b($,{as:"h1",...r}),H2:r=>b($,{as:"h2",...r}),H3:r=>b($,{as:"h3",...r}),H4:r=>b($,{as:"h4",...r}),H5:r=>b($,{as:"h5",...r}),H6:r=>b($,{as:"h6",...r})},Rr=D.default.div`
  display: flex;
  gap: 8px;
`,xr=r=>r.rightIcon||r.leftIcon?re(Rr,{children:[r.leftIcon,b($,{as:r.as||"p",...r}),r.rightIcon]}):b($,{as:r.as||"p",...r});_.Button=nr,_.CodeInput=ir,_.Heading=yr,_.SelectInput=cr,_.Text=xr,_.TextInput=hr,Object.defineProperties(_,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
