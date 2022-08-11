(function(A,p){typeof exports=="object"&&typeof module<"u"?p(exports,require("styled-components"),require("react"),require("react-loading-skeleton"),require("react-select")):typeof define=="function"&&define.amd?define(["exports","styled-components","react","react-loading-skeleton","react-select"],p):(A=typeof globalThis<"u"?globalThis:A||self,p(A["ID-Components"]={},A.styled,A.React,A.Skeleton,A.Select))})(this,function(A,p,D,Ve,We){"use strict";const H=r=>r&&typeof r=="object"&&"default"in r?r:{default:r},Y=H(p),_=H(D),qe=H(Ve),He=H(We),ze=Y.default.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
`,Qe=Y.default(ze)`
  :disabled {
    cursor: not-allowed;
  }
  border: ${({noBorder:r})=>r?"none":"1px solid"};
  border-radius: 10px;
  transition: background 0.3s ease-out;
  ${({model:r="primary"})=>{if(r==="primary")return p.css`
        color: white;
        svg {
          color: white;
        }
        background-color: ${t=>t.theme.color.SECONDARY[900]};
        :hover {
          background-color: ${t=>t.theme.color.SECONDARY[700]};
        }
        :disabled {
          background-color: ${t=>t.theme.color.SECONDARY[300]};
        }
      `;if(r==="secondary")return p.css`
        border-color: ${t=>t.theme.color.SECONDARY[900]};
        background-color: transparent;
        color: ${t=>t.theme.color.SECONDARY[900]};
        svg {
          color: ${t=>t.theme.color.SECONDARY[900]};
          fill: ${t=>t.theme.color.SECONDARY[900]};
        }
        :hover {
          border-color: ${t=>t.theme.color.SECONDARY[600]};
          color: ${t=>t.theme.color.SECONDARY[600]};
          svg {
            color: ${t=>t.theme.color.SECONDARY[600]};
            fill: ${t=>t.theme.color.SECONDARY[600]};
          }
        }
        :disabled {
          border-color: ${t=>t.theme.color.SECONDARY[200]};
          color: ${t=>t.theme.color.SECONDARY[200]};
          svg {
            color: ${t=>t.theme.color.SECONDARY[200]};
          }
        }
      `;if(r==="secondary-empty")return p.css`
        border-color: none;
        background-color: transparent;
        color: ${t=>t.theme.color.SECONDARY[900]};
        svg {
          color: ${t=>t.theme.color.SECONDARY[900]};
          fill: ${t=>t.theme.color.SECONDARY[900]};
        }
        :hover {
          color: ${t=>t.theme.color.SECONDARY[600]};
          svg {
            color: ${t=>t.theme.color.SECONDARY[600]};
            fill: ${t=>t.theme.color.SECONDARY[600]};
          }
        }
        :disabled {
          color: ${t=>t.theme.color.SECONDARY[200]};
          svg {
            color: ${t=>t.theme.color.SECONDARY[200]};
          }
        }
      `;if(r==="tertiary")return p.css`
        background-color: ${t=>t.theme.color.QUATERNARY[200]};
        color: ${t=>t.theme.color.SECONDARY[900]};
        svg {
          color: ${t=>t.theme.color.SECONDARY[900]};
        }
        :hover {
          background-color: ${t=>t.theme.color.QUATERNARY[300]};
          border-color: ${t=>t.theme.color.SECONDARY[900]};
          color: ${t=>t.theme.color.SECONDARY[900]};
          svg {
            color: ${t=>t.theme.color.SECONDARY[900]};
          }
        }
        :disabled {
          background-color: ${t=>t.theme.color.QUATERNARY[100]};
          color: ${t=>t.theme.color.SECONDARY[400]};
          svg {
            color: ${t=>t.theme.color.SECONDARY[400]};
          }
        }
      `;if(r==="quaternary")return p.css`
        color: white;
        svg {
          color: white;
        }
        background-color: ${t=>t.theme.color.PRIMARY[900]};
        :hover {
          background-color: ${t=>t.theme.color.PRIMARY[700]};
        }
        :disabled {
          background-color: ${t=>t.theme.color.PRIMARY[300]};
        }
      `;if(r==="quaternary-empty")return p.css`
        border-color: ${t=>t.theme.color.PRIMARY[900]};
        background-color: white;
        color: ${t=>t.theme.color.PRIMARY[900]};
        svg {
          color: ${t=>t.theme.color.PRIMARY[900]};
          fill: ${t=>t.theme.color.PRIMARY[900]};
        }
        :hover {
          border-color: ${t=>t.theme.color.PRIMARY[600]};
          color: ${t=>t.theme.color.PRIMARY[600]};
          svg {
            color: ${t=>t.theme.color.PRIMARY[600]};
            fill: ${t=>t.theme.color.PRIMARY[600]};
          }
        }
        :disabled {
          border-color: ${t=>t.theme.color.PRIMARY[200]};
          color: ${t=>t.theme.color.PRIMARY[200]};
          svg {
            color: ${t=>t.theme.color.PRIMARY[200]};
          }
        }
      `;if(r==="alert-light")return p.css`
        color: white;
        svg {
          color: white;
        }
        background-color: ${t=>t.theme.color.ALERT[700]};
        :hover {
          background-color: ${t=>t.theme.color.ALERT[600]};
        }
        :disabled {
          background-color: ${t=>t.theme.color.ALERT[300]};
        }
      `;if(r==="neutral")return p.css`
        border-color: ${t=>t.theme.color.PRIMARY[900]};
        background-color: white;
        color: ${t=>t.theme.color.PRIMARY[900]};
        svg {
          color: ${t=>t.theme.color.PRIMARY[900]};
          fill: ${t=>t.theme.color.PRIMARY[900]};
        }
        :hover {
          border-color: ${t=>t.theme.color.PRIMARY[600]};
          color: ${t=>t.theme.color.PRIMARY[600]};
          svg {
            color: ${t=>t.theme.color.PRIMARY[600]};
            fill: ${t=>t.theme.color.PRIMARY[600]};
          }
        }
        :disabled {
          border-color: ${t=>t.theme.color.PRIMARY[300]};
          color: ${t=>t.theme.color.PRIMARY[300]};
          svg {
            color: ${t=>t.theme.color.PRIMARY[300]};
          }
        }
      `}}
  ${({size:r="small"})=>{if(r==="big")return p.css`
        padding: 16px 24px;
        font-size: 16px;
      `;if(r==="small")return p.css`
        padding: 12px 16px;
        font-size: 14px;
      `}}
  ${({full:r})=>{if(r)return p.css`
        width: 100%;
      `}}
  ${({rounded:r})=>{if(r)return p.css`
        border-radius: 32px;
      `}}
`;var Z={exports:{}},B={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var se;function Ge(){if(se)return B;se=1;var r=_.default,t=Symbol.for("react.element"),a=Symbol.for("react.fragment"),f=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function c(m,s,x){var y,C={},w=null,z=null;x!==void 0&&(w=""+x),s.key!==void 0&&(w=""+s.key),s.ref!==void 0&&(z=s.ref);for(y in s)f.call(s,y)&&!u.hasOwnProperty(y)&&(C[y]=s[y]);if(m&&m.defaultProps)for(y in s=m.defaultProps,s)C[y]===void 0&&(C[y]=s[y]);return{$$typeof:t,type:m,key:w,ref:z,props:C,_owner:l.current}}return B.Fragment=a,B.jsx=c,B.jsxs=c,B}var V={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ue;function Je(){return ue||(ue=1,process.env.NODE_ENV!=="production"&&function(){var r=_.default,t=Symbol.for("react.element"),a=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),m=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),y=Symbol.for("react.suspense_list"),C=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),z=Symbol.for("react.offscreen"),be=Symbol.iterator,Cr="@@iterator";function $r(e){if(e===null||typeof e!="object")return null;var o=be&&e[be]||e[Cr];return typeof o=="function"?o:null}var L=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function $(e){{for(var o=arguments.length,n=new Array(o>1?o-1:0),i=1;i<o;i++)n[i-1]=arguments[i];Sr("error",e,n)}}function Sr(e,o,n){{var i=L.ReactDebugCurrentFrame,v=i.getStackAddendum();v!==""&&(o+="%s",n=n.concat([v]));var g=n.map(function(h){return String(h)});g.unshift("Warning: "+o),Function.prototype.apply.call(console[e],console,g)}}var Tr=!1,_r=!1,kr=!1,wr=!1,Or=!1,Re;Re=Symbol.for("react.module.reference");function Pr(e){return!!(typeof e=="string"||typeof e=="function"||e===f||e===u||Or||e===l||e===x||e===y||wr||e===z||Tr||_r||kr||typeof e=="object"&&e!==null&&(e.$$typeof===w||e.$$typeof===C||e.$$typeof===c||e.$$typeof===m||e.$$typeof===s||e.$$typeof===Re||e.getModuleId!==void 0))}function Yr(e,o,n){var i=e.displayName;if(i)return i;var v=o.displayName||o.name||"";return v!==""?n+"("+v+")":n}function Ee(e){return e.displayName||"Context"}function O(e){if(e==null)return null;if(typeof e.tag=="number"&&$("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case f:return"Fragment";case a:return"Portal";case u:return"Profiler";case l:return"StrictMode";case x:return"Suspense";case y:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case m:var o=e;return Ee(o)+".Consumer";case c:var n=e;return Ee(n._context)+".Provider";case s:return Yr(e,e.render,"ForwardRef");case C:var i=e.displayName||null;return i!==null?i:O(e.type)||"Memo";case w:{var v=e,g=v._payload,h=v._init;try{return O(h(g))}catch{return null}}}return null}var N=Object.assign,W=0,ye,Ae,xe,Ce,$e,Se,Te;function _e(){}_e.__reactDisabledLog=!0;function Ir(){{if(W===0){ye=console.log,Ae=console.info,xe=console.warn,Ce=console.error,$e=console.group,Se=console.groupCollapsed,Te=console.groupEnd;var e={configurable:!0,enumerable:!0,value:_e,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}W++}}function Fr(){{if(W--,W===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:N({},e,{value:ye}),info:N({},e,{value:Ae}),warn:N({},e,{value:xe}),error:N({},e,{value:Ce}),group:N({},e,{value:$e}),groupCollapsed:N({},e,{value:Se}),groupEnd:N({},e,{value:Te})})}W<0&&$("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var re=L.ReactCurrentDispatcher,te;function Q(e,o,n){{if(te===void 0)try{throw Error()}catch(v){var i=v.stack.trim().match(/\n( *(at )?)/);te=i&&i[1]||""}return`
`+te+e}}var oe=!1,G;{var Nr=typeof WeakMap=="function"?WeakMap:Map;G=new Nr}function ke(e,o){if(!e||oe)return"";{var n=G.get(e);if(n!==void 0)return n}var i;oe=!0;var v=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var g;g=re.current,re.current=null,Ir();try{if(o){var h=function(){throw Error()};if(Object.defineProperty(h.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(h,[])}catch(P){i=P}Reflect.construct(e,[],h)}else{try{h.call()}catch(P){i=P}e.call(h.prototype)}}else{try{throw Error()}catch(P){i=P}e()}}catch(P){if(P&&i&&typeof P.stack=="string"){for(var d=P.stack.split(`
`),S=i.stack.split(`
`),R=d.length-1,E=S.length-1;R>=1&&E>=0&&d[R]!==S[E];)E--;for(;R>=1&&E>=0;R--,E--)if(d[R]!==S[E]){if(R!==1||E!==1)do if(R--,E--,E<0||d[R]!==S[E]){var T=`
`+d[R].replace(" at new "," at ");return e.displayName&&T.includes("<anonymous>")&&(T=T.replace("<anonymous>",e.displayName)),typeof e=="function"&&G.set(e,T),T}while(R>=1&&E>=0);break}}}finally{oe=!1,re.current=g,Fr(),Error.prepareStackTrace=v}var U=e?e.displayName||e.name:"",Be=U?Q(U):"";return typeof e=="function"&&G.set(e,Be),Be}function Dr(e,o,n){return ke(e,!1)}function jr(e){var o=e.prototype;return!!(o&&o.isReactComponent)}function J(e,o,n){if(e==null)return"";if(typeof e=="function")return ke(e,jr(e));if(typeof e=="string")return Q(e);switch(e){case x:return Q("Suspense");case y:return Q("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case s:return Dr(e.render);case C:return J(e.type,o,n);case w:{var i=e,v=i._payload,g=i._init;try{return J(g(v),o,n)}catch{}}}return""}var K=Object.prototype.hasOwnProperty,we={},Oe=L.ReactDebugCurrentFrame;function X(e){if(e){var o=e._owner,n=J(e.type,e._source,o?o.type:null);Oe.setExtraStackFrame(n)}else Oe.setExtraStackFrame(null)}function Lr(e,o,n,i,v){{var g=Function.call.bind(K);for(var h in e)if(g(e,h)){var d=void 0;try{if(typeof e[h]!="function"){var S=Error((i||"React class")+": "+n+" type `"+h+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[h]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw S.name="Invariant Violation",S}d=e[h](o,h,i,n,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(R){d=R}d&&!(d instanceof Error)&&(X(v),$("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",i||"React class",n,h,typeof d),X(null)),d instanceof Error&&!(d.message in we)&&(we[d.message]=!0,X(v),$("Failed %s type: %s",n,d.message),X(null))}}}var Mr=Array.isArray;function ne(e){return Mr(e)}function Ur(e){{var o=typeof Symbol=="function"&&Symbol.toStringTag,n=o&&e[Symbol.toStringTag]||e.constructor.name||"Object";return n}}function Br(e){try{return Pe(e),!1}catch{return!0}}function Pe(e){return""+e}function Ye(e){if(Br(e))return $("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Ur(e)),Pe(e)}var q=L.ReactCurrentOwner,Vr={key:!0,ref:!0,__self:!0,__source:!0},Ie,Fe,ae;ae={};function Wr(e){if(K.call(e,"ref")){var o=Object.getOwnPropertyDescriptor(e,"ref").get;if(o&&o.isReactWarning)return!1}return e.ref!==void 0}function qr(e){if(K.call(e,"key")){var o=Object.getOwnPropertyDescriptor(e,"key").get;if(o&&o.isReactWarning)return!1}return e.key!==void 0}function Hr(e,o){if(typeof e.ref=="string"&&q.current&&o&&q.current.stateNode!==o){var n=O(q.current.type);ae[n]||($('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',O(q.current.type),e.ref),ae[n]=!0)}}function zr(e,o){{var n=function(){Ie||(Ie=!0,$("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",o))};n.isReactWarning=!0,Object.defineProperty(e,"key",{get:n,configurable:!0})}}function Qr(e,o){{var n=function(){Fe||(Fe=!0,$("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",o))};n.isReactWarning=!0,Object.defineProperty(e,"ref",{get:n,configurable:!0})}}var Gr=function(e,o,n,i,v,g,h){var d={$$typeof:t,type:e,key:o,ref:n,props:h,_owner:g};return d._store={},Object.defineProperty(d._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(d,"_self",{configurable:!1,enumerable:!1,writable:!1,value:i}),Object.defineProperty(d,"_source",{configurable:!1,enumerable:!1,writable:!1,value:v}),Object.freeze&&(Object.freeze(d.props),Object.freeze(d)),d};function Jr(e,o,n,i,v){{var g,h={},d=null,S=null;n!==void 0&&(Ye(n),d=""+n),qr(o)&&(Ye(o.key),d=""+o.key),Wr(o)&&(S=o.ref,Hr(o,v));for(g in o)K.call(o,g)&&!Vr.hasOwnProperty(g)&&(h[g]=o[g]);if(e&&e.defaultProps){var R=e.defaultProps;for(g in R)h[g]===void 0&&(h[g]=R[g])}if(d||S){var E=typeof e=="function"?e.displayName||e.name||"Unknown":e;d&&zr(h,E),S&&Qr(h,E)}return Gr(e,d,S,v,i,q.current,h)}}var ce=L.ReactCurrentOwner,Ne=L.ReactDebugCurrentFrame;function M(e){if(e){var o=e._owner,n=J(e.type,e._source,o?o.type:null);Ne.setExtraStackFrame(n)}else Ne.setExtraStackFrame(null)}var ie;ie=!1;function le(e){return typeof e=="object"&&e!==null&&e.$$typeof===t}function De(){{if(ce.current){var e=O(ce.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function Kr(e){{if(e!==void 0){var o=e.fileName.replace(/^.*[\\\/]/,""),n=e.lineNumber;return`

Check your code at `+o+":"+n+"."}return""}}var je={};function Xr(e){{var o=De();if(!o){var n=typeof e=="string"?e:e.displayName||e.name;n&&(o=`

Check the top-level render call using <`+n+">.")}return o}}function Le(e,o){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var n=Xr(o);if(je[n])return;je[n]=!0;var i="";e&&e._owner&&e._owner!==ce.current&&(i=" It was passed a child from "+O(e._owner.type)+"."),M(e),$('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',n,i),M(null)}}function Me(e,o){{if(typeof e!="object")return;if(ne(e))for(var n=0;n<e.length;n++){var i=e[n];le(i)&&Le(i,o)}else if(le(e))e._store&&(e._store.validated=!0);else if(e){var v=$r(e);if(typeof v=="function"&&v!==e.entries)for(var g=v.call(e),h;!(h=g.next()).done;)le(h.value)&&Le(h.value,o)}}}function Zr(e){{var o=e.type;if(o==null||typeof o=="string")return;var n;if(typeof o=="function")n=o.propTypes;else if(typeof o=="object"&&(o.$$typeof===s||o.$$typeof===C))n=o.propTypes;else return;if(n){var i=O(o);Lr(n,e.props,"prop",i,e)}else if(o.PropTypes!==void 0&&!ie){ie=!0;var v=O(o);$("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",v||"Unknown")}typeof o.getDefaultProps=="function"&&!o.getDefaultProps.isReactClassApproved&&$("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function et(e){{for(var o=Object.keys(e.props),n=0;n<o.length;n++){var i=o[n];if(i!=="children"&&i!=="key"){M(e),$("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",i),M(null);break}}e.ref!==null&&(M(e),$("Invalid attribute `ref` supplied to `React.Fragment`."),M(null))}}function Ue(e,o,n,i,v,g){{var h=Pr(e);if(!h){var d="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(d+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var S=Kr(v);S?d+=S:d+=De();var R;e===null?R="null":ne(e)?R="array":e!==void 0&&e.$$typeof===t?(R="<"+(O(e.type)||"Unknown")+" />",d=" Did you accidentally export a JSX literal instead of a component?"):R=typeof e,$("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",R,d)}var E=Jr(e,o,n,v,g);if(E==null)return E;if(h){var T=o.children;if(T!==void 0)if(i)if(ne(T)){for(var U=0;U<T.length;U++)Me(T[U],e);Object.freeze&&Object.freeze(T)}else $("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Me(T,e)}return e===f?et(E):Zr(E),E}}function rt(e,o,n){return Ue(e,o,n,!0)}function tt(e,o,n){return Ue(e,o,n,!1)}var ot=tt,nt=rt;V.Fragment=f,V.jsx=ot,V.jsxs=nt}()),V}(function(r){process.env.NODE_ENV==="production"?r.exports=Ge():r.exports=Je()})(Z);const b=Z.exports.jsx,fe=Z.exports.jsxs,Ke=({children:r,...t})=>b(Qe,{...t,children:r}),Xe=Y.default.div`
  padding: 0 14px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 8px;
  border: 1px solid
    ${({theme:r,error:t,success:a,isFocused:f})=>t?r.color.ALERT[900]:a?r.color.SUCCESS[900]:f?r.color.QUATERNARY[900]:r.color.NEUTRAL[300]};
  background: #fff;
  min-height: 44px;
  ::placeholder {
    color: ${r=>r.theme.color.NEUTRAL[500]};
  }

  background-color: ${({theme:r,disabled:t})=>t?r.color.NEUTRAL[100]:"#fff"};
  cursor: ${({disabled:r})=>r?"not-allowed":"auto"};
  transition: background 0.3s ease-out;
  transition: border 0.3s ease-out;

  > input {
    width: 100%;
    flex-grow: 1;
    border: none;
    outline: none;
    padding: 14px 0;
    background: transparent;
    font: normal 16px "Poppins";
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
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: -0.04em;
    user-select: none;
  }
`;var de={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},pe=_.default.createContext&&_.default.createContext(de),I=globalThis&&globalThis.__assign||function(){return I=Object.assign||function(r){for(var t,a=1,f=arguments.length;a<f;a++){t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(r[l]=t[l])}return r},I.apply(this,arguments)},Ze=globalThis&&globalThis.__rest||function(r,t){var a={};for(var f in r)Object.prototype.hasOwnProperty.call(r,f)&&t.indexOf(f)<0&&(a[f]=r[f]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,f=Object.getOwnPropertySymbols(r);l<f.length;l++)t.indexOf(f[l])<0&&Object.prototype.propertyIsEnumerable.call(r,f[l])&&(a[f[l]]=r[f[l]]);return a};function he(r){return r&&r.map(function(t,a){return _.default.createElement(t.tag,I({key:a},t.attr),he(t.child))})}function ve(r){return function(t){return _.default.createElement(er,I({attr:I({},r.attr)},t),he(r.child))}}function er(r){var t=function(a){var f=r.attr,l=r.size,u=r.title,c=Ze(r,["attr","size","title"]),m=l||a.size||"1em",s;return a.className&&(s=a.className),r.className&&(s=(s?s+" ":"")+r.className),_.default.createElement("svg",I({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},a.attr,f,c,{className:s,style:I(I({color:r.color||a.color},a.style),r.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),u&&_.default.createElement("title",null,u),r.children)};return pe!==void 0?_.default.createElement(pe.Consumer,null,function(a){return t(a)}):t(de)}function rr(r){return ve({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]})(r)}function tr(r){return ve({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z"}}]}]})(r)}const j={color:{NEUTRAL:{50:"#F5F5F5",100:"#EBEBEB",200:"#dfdfdf",300:"#bfbfbf",400:"#9f9f9f",500:"#808080",600:"#404040",700:"#404040",800:"#202020",900:"#000000"},PRIMARY:{50:"#F1F2F9",100:"#E6E8F4",200:"#DDDFF0",300:"#BBBFE2",400:"#999FD3",500:"#777fc5",600:"#545fb6",700:"#414a98",800:"#333a76",900:"#242954"},SECONDARY:{20:"#F7F5FF",50:"#EFEBFF",100:"#E6E0FF",200:"#d0c5ff",300:"#d0c5ff",400:"#b9a8ff",500:"#a18cff",600:"#8a6fff",700:"#7252ff",800:"#5b35ff",900:"#4318FF"},TERTIARY:{50:"#FFFAFC",100:"#FFF5F9",200:"#ffeff5",300:"#ffe0eb",400:"#ffd0e1",500:"#ffc1d7",600:"#ffb1cd",700:"#FFA1C3",800:"#ff92b9",900:"#FF82AF"},QUATERNARY:{50:"#FBFCFE",100:"#F2F6FD",200:"#ebf1fc",300:"#D8E4FA",400:"#c4d6f8",500:"#b0c8f5",600:"#9cbbf3",700:"#88adf0",800:"#75a0ed",900:"#6192EB"},STATE:{50:"#FFFBF5",100:"#FEF7EB",200:"#fef3e3",300:"#fde7c6",400:"#fcdba9",500:"#fbcf8d",600:"#fac270",700:"#f9b654",800:"#f8aa38",900:"#F79E1B"},ALERT:{50:"#FFFBF5",100:"#FEEDEC",200:"#fde3e2",300:"#fbc8c5",400:"#f9ada8",500:"#f7918b",600:"#f4756d",700:"#F25A50",800:"#F03E33",900:"#EE2316"},SUCCESS:{50:"#F7FDFA",100:"#EEFBF4",200:"#e4f9ed",300:"#c9f3db",400:"#aeedc9",500:"#93e7b7",600:"#78e1a4",700:"#5DDB92",800:"#42D580",900:"#2DC96F"}}},or=({type:r,leftAddon:t,rightAddon:a,placeholder:f,error:l,success:u,onFocus:c,onBlur:m,...s})=>{const[x,y]=D.useState(!1);return fe(Xe,{success:u,error:l,disabled:s.disabled,isFocused:x,children:[b("span",{children:t}),b("input",{onFocus:C=>{c&&c(C),y(!0)},onBlur:C=>{m&&m(C),y(!1)},placeholder:f,type:r,...s}),b("span",{children:a}),l&&b("span",{children:b(tr,{size:24,color:j.color.ALERT[900]})}),u&&b("span",{children:b(rr,{size:20,color:j.color.SUCCESS[900]})})]})},nr=Y.default.div`
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
`,ar={control:(r,t)=>({...r,minHeight:50,borderRadius:10,backgroundColor:"#ffffff",border:`1px solid ${t.isFocused?j.color.QUATERNARY[900]:j.color.NEUTRAL[300]}`,boxShadow:"none",cursor:"pointer"}),singleValue:(r,t)=>({color:j.color.PRIMARY[900],fontWeight:500,fontSize:14}),placeholder:r=>({...r,color:j.color.NEUTRAL[700]}),indicatorSeparator:r=>({...r,display:"none"})},cr=({formatOptionLabel:r,options:t,loading:a=!1,style:f,error:l,firstOption:u,initialValue:c,value:m,onChange:s,isMulti:x,placeholder:y})=>{const C=u||{label:"Seleccione una opci\xF3n",value:""},w=[...t];return b(nr,{style:f,hasError:!!l,children:a?b(qe.default,{style:{borderRadius:10},className:"loading-skeleton",height:46,width:"100%"}):b(He.default,{placeholder:y,value:m||void 0,defaultValue:c||C,options:w,onChange:s,styles:ar,isMulti:x,formatOptionLabel:r})})};function ir(r,t,a){const f=()=>{const l=document.querySelectorAll("input");return Array.from(l).filter(c=>c.className===t)};D.useEffect(()=>{const l=u=>{u.key==="Backspace"&&setTimeout(()=>{const c=f(),m=document.activeElement;m.value="";const s=c.indexOf(m);s>0&&c[s-1].focus()},0)};return document.addEventListener("keydown",l),()=>document.removeEventListener("keydown",l)},[]),D.useEffect(()=>{const l=u=>{if(u.key!=="Backspace"){const c=u.key.toLowerCase();setTimeout(()=>{if(c.length===1){const m=f(),s=document.activeElement;s.value=c;const x=m.indexOf(s);x<m.length-1&&m[x+1].focus()}},0)}};return document.addEventListener("keydown",l),()=>document.removeEventListener("keydown",l)},[]),D.useEffect(()=>{if(r){const l=u=>{const c=u.key.toLowerCase();(c.length===1||c==="backspace")&&setTimeout(()=>{const s=f().map(x=>x.value).join("");r(s)},0)};return document.addEventListener("keydown",l),()=>document.removeEventListener("keydown",l)}},[]),D.useEffect(()=>{if(a){const l=f(),u=a.split("");l.forEach((c,m)=>{const s=u[m];s&&(c.value=s)})}},[a])}const lr=Y.default.div`
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
      ${({theme:r,error:t,success:a})=>t?r.color.ALERT[900]:a?r.color.SUCCESS[900]:r.color.NEUTRAL[300]};
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
`,sr=({id:r,value:t,length:a=4,error:f,success:l,onChange:u=m=>{},...c})=>(ir(u,r,t),b(lr,{length:a,error:f,success:l,children:Array.from({length:a}).map((m,s)=>b("input",{id:s.toString(),className:r,maxLength:1,...c},s))})),ur=({shape:r})=>{switch(r){case"rounded":return p.css`
        border-radius: 10px;
      `;case"squared":return p.css`
        border-radius: 0;
      `;case"circular":return p.css`
        border-radius: 25px;
      `;default:return p.css`
        border-radius: 10px;
      `}},fr=({design:r,color:t})=>{switch(r){case"solid":return p.css`
        background-color: ${({theme:a})=>k({theme:a,color:t})};
        color: #fff;
      `;case"outline":return p.css`
        background-color: transparent;
        border: 1px solid ${({theme:a})=>k({theme:a,color:t})};
        color: ${({theme:a})=>k({theme:a,color:t})};
      `;case"flat":return p.css`
        background-color: transparent;
        border: none;
        color: ${({theme:a})=>k({theme:a,color:t})};
      `;case"link":return p.css`
        background-color: transparent;
        border: none;
        color: ${({theme:a})=>k({theme:a,color:t})};

        &:hover {
          color: ${({theme:a})=>k({theme:a,color:t,hover:!0})};
          text-decoration: underline;
        }
      `;default:return p.css`
        background-color: ${({theme:a})=>k({theme:a,color:t})};
        color: #fff;
      `}},k=({color:r="SECONDARY/900",theme:t,design:a,hover:f})=>{const l=r.split("/"),u=l[0];let c=+l[1];if(f&&c>=300)switch(a){case"solid":c-=100;break;case"outline":c=100;break;case"flat":c=100;break;default:c>=400?c-=100:c+=100;break}if(f&&c<300)switch(a){case"solid":c+=100;break;case"outline":c=100;break;case"flat":c=100;break;default:c-=100;break}return u==="PRIMARY"||u==="SECONDARY"||u==="TERTIARY"||u==="QUATERNARY"||u==="STATE"||u==="ALERT"||u==="SUCCESS"?c===50||c===100||c===200||c===300||c===400||c===500||c===600||c===700||c===800||c===900?t.color[u][c]:t.color[u][900]:t.color.PRIMARY[900]},dr=({fullWidth:r})=>r?p.css`
      width: 100%;
    `:p.css`
    width: auto;
  `,pr=({isLoading:r})=>r?p.css`
      cursor: not-allowed;
      opacity: 0.5;
    `:p.css`
    cursor: pointer;
    opacity: 1;
  `,hr=({disabled:r})=>r?p.css`
      cursor: not-allowed;
      opacity: 0.5;
    `:p.css`
    cursor: pointer;
    opacity: 1;
  `,vr=Y.default.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
`,mr=Y.default(vr)`
  display: inline-flex;
  gap: 0.5rem;
  font-size: 14px;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease-out;
  padding: ${({design:r})=>r==="link"?"0":"0.5rem 1rem"};

  ${({shape:r})=>ur({shape:r})};
  ${({design:r,color:t})=>fr({design:r,color:t})};
  ${({fullWidth:r})=>dr({fullWidth:r})};
  ${({isLoading:r})=>pr({isLoading:r})};
  ${({disabled:r})=>hr({disabled:r})};

  &:hover {
    background-color: ${({theme:r,color:t,design:a})=>a==="link"?"transparent":k({color:t,theme:r,design:a,hover:!0})};
  }

  &:active {
    background-color: ${({theme:r,color:t,design:a})=>a==="link"?"transparent":k({color:t,theme:r,design:a,hover:!0})};
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
  }
`,gr=({children:r,...t})=>fe(mr,{...t,children:[t.leftIcon,r,t.rightIcon]});var me=(r=>(r[r.bold=700]="bold",r[r.medium=500]="medium",r[r.regular=400]="regular",r[r.light=300]="light",r))(me||{}),ge=(r=>(r.xs="0.750em",r.sm="0.875em	",r.md="1.0em",r.lg="1.250em",r.xl="1.5em",r.xxl="2.0em",r))(ge||{}),ee=(r=>(r.h1="xl",r.h2="lg",r.h3="md",r.h4="sm",r.h5="xs",r.h6="xs",r.text="md",r))(ee||{});const br={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",p:"p",span:"span",strong:"strong",label:"label"},Rr=p.css`
  font-family: "Poppins";
  font-style: normal;
  line-height: 24px;
  letter-spacing: -0.04em;
`,Er=r=>{const t=r==="h1"||r==="h2"||r==="h3"||r==="h4"||r==="h5"||r==="h6",a=t?"bold":"medium",f=t?ee[r]:ee.text,l="PRIMARY/900";return p.css`
    font-weight: ${({weight:u=a})=>me[u]||"500"};
    font-size: ${({size:u=f})=>ge[u]||u};
    color: ${({theme:u,color:c=l})=>{const m=c==null?void 0:c.split("/")[0],s=+(c==null?void 0:c.split("/")[1]);return u.color[m][s]}};
  `},yr=Y.default.div`
  ${({as:r})=>`
    ${Rr}
    ${Er(r)}
  `}
`,F=({as:r,...t})=>{const a=br[r];return b(yr,{as:a,...t})},Ar={H1:r=>b(F,{as:"h1",...r}),H2:r=>b(F,{as:"h2",...r}),H3:r=>b(F,{as:"h3",...r}),H4:r=>b(F,{as:"h4",...r}),H5:r=>b(F,{as:"h5",...r}),H6:r=>b(F,{as:"h6",...r})},xr=r=>b(F,{as:r.as||"p",...r});A.Button=Ke,A.ButtonV2=gr,A.CodeInput=sr,A.Heading=Ar,A.SelectInput=cr,A.Text=xr,A.TextInput=or,Object.defineProperties(A,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
