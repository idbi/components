(function(u,i){typeof exports=="object"&&typeof module<"u"?i(exports,require("../node_modules/styled-components/dist/styled-components.browser.esm.js"),require("../node_modules/react/jsx-runtime.js"),require("../node_modules/react/index.js"),require("../node_modules/react-loading-skeleton/lib/index.js"),require("../node_modules/react-select/dist/react-select.esm.js")):typeof define=="function"&&define.amd?define(["exports","../node_modules/styled-components/dist/styled-components.browser.esm","../node_modules/react/jsx-runtime","../node_modules/react/index","../node_modules/react-loading-skeleton/lib/index","../node_modules/react-select/dist/react-select.esm"],i):(u=typeof globalThis<"u"?globalThis:u||self,i(u["ID-Components"]={},u.styled,u.jsxRuntime,u.index_js,u.Skeleton,u.Select))})(this,function(u,i,C,b,y,L){"use strict";const k=e=>e&&typeof e=="object"&&"default"in e?e:{default:e};function N(e){if(e&&e.__esModule)return e;const t=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const n in e)if(n!=="default"){const a=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,a.get?a:{enumerable:!0,get:()=>e[n]})}}return t.default=e,Object.freeze(t)}const m=k(i),S=N(C),B=k(y),D=k(L),U={bold:700,medium:500,regular:400,light:300},I={xs:"0.750rem",sm:"0.875rem	",md:"1.0rem",lg:"1.250rem",xl:"1.5rem",xxl:"2.0rem"},$={h1:"xl",h2:"lg",h3:"md",h4:"sm",h5:"xs",h6:"xs",text:"md"},_=({shape:e})=>{switch(e){case"rounded":return i.css`
        border-radius: 10px;
      `;case"squared":return i.css`
        border-radius: 0;
      `;case"circular":return i.css`
        border-radius: 25px;
      `;default:return i.css`
        border-radius: 10px;
      `}},T=({design:e,color:t})=>{switch(e){case"solid":return i.css`
        background-color: ${({theme:n})=>p({theme:n,color:t})};
        color: #fff;
      `;case"outline":return i.css`
        background-color: transparent;
        border: 1px solid ${({theme:n})=>p({theme:n,color:t})};
        color: ${({theme:n})=>p({theme:n,color:t})};
      `;case"flat":return i.css`
        background-color: transparent;
        border: none;
        color: ${({theme:n})=>p({theme:n,color:t})};
      `;case"link":return i.css`
        background-color: transparent;
        border: none;
        color: ${({theme:n})=>p({theme:n,color:t})};

        &:hover {
          color: ${({theme:n})=>p({theme:n,color:t,hover:!0})};
          text-decoration: underline;
        }
      `;default:return i.css`
        background-color: ${({theme:n})=>p({theme:n,color:t})};
        color: #fff;
      `}},p=({color:e="SECONDARY/900",theme:t,design:n,hover:a})=>{const c=e.split("/"),r=c[0];let o=+c[1];if(a&&o>=300)switch(n){case"solid":o-=100;break;case"outline":o=100;break;case"flat":o=100;break;default:o>=400?o-=100:o+=100;break}if(a&&o<300)switch(n){case"solid":o+=100;break;case"outline":o=100;break;case"flat":o=100;break;default:o-=100;break}return r==="PRIMARY"||r==="SECONDARY"||r==="TERTIARY"||r==="QUATERNARY"||r==="STATE"||r==="ALERT"||r==="SUCCESS"?o===50||o===100||o===200||o===300||o===400||o===500||o===600||o===700||o===800||o===900?t.color[r][o]:t.color[r][900]:t.color.PRIMARY[900]},w=({fullWidth:e})=>e?i.css`
      width: 100%;
    `:i.css`
    width: auto;
  `,j=({isLoading:e})=>e?i.css`
      cursor: not-allowed;
      opacity: 0.5;
    `:i.css`
    cursor: pointer;
    opacity: 1;
  `,Y=({disabled:e})=>e?i.css`
      cursor: not-allowed;
      opacity: 0.5;
    `:i.css`
    cursor: pointer;
    opacity: 1;
  `,A=({size:e})=>{if(e)return i.css`
      font-size: ${I[e]||e};
    `},M=m.default.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
`,P=m.default(M)`
  display: inline-flex;
  gap: 0.5rem;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease-out;
  padding: ${({design:e})=>e==="link"?"0":"0.5rem"};
  min-height: ${({design:e})=>e==="link"?"0":"45px"};

  ${({size:e})=>A({size:e})};
  ${({shape:e})=>_({shape:e})};
  ${({design:e,color:t})=>T({design:e,color:t})};
  ${({fullWidth:e})=>w({fullWidth:e})};
  ${({isLoading:e})=>j({isLoading:e})};
  ${({disabled:e})=>Y({disabled:e})};

  &:hover {
    background-color: ${({theme:e,color:t,design:n})=>n==="link"?"transparent":p({color:t,theme:e,design:n,hover:!0})};
  }

  &:active {
    background-color: ${({theme:e,color:t,design:n})=>n==="link"?"transparent":p({color:t,theme:e,design:n,hover:!0})};
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:disabled:hover {
    ${({design:e,color:t})=>T({design:e,color:t})};
  }
`,s=S.jsx,E=S.jsxs,z=({children:e,...t})=>E(P,{...t,children:[t.leftIcon,e,t.rightIcon]});function O(e,t,n){const a=()=>{const c=document.querySelectorAll("input");return Array.from(c).filter(o=>o.className===t)};b.useEffect(()=>{const c=r=>{r.key==="Backspace"&&setTimeout(()=>{const o=a(),d=document.activeElement;d.value="";const l=o.indexOf(d);l>0&&o[l-1].focus()},0)};return document.addEventListener("keydown",c),()=>document.removeEventListener("keydown",c)},[]),b.useEffect(()=>{const c=r=>{if(r.key!=="Backspace"){const o=r.key.toLowerCase();setTimeout(()=>{if(o.length===1){const d=a(),l=document.activeElement;l.value=o;const f=d.indexOf(l);f<d.length-1&&d[f+1].focus()}},0)}};return document.addEventListener("keydown",c),()=>document.removeEventListener("keydown",c)},[]),b.useEffect(()=>{if(e){const c=r=>{const o=r.key.toLowerCase();(o.length===1||o==="backspace")&&setTimeout(()=>{const l=a().map(f=>f.value).join("");e(l)},0)};return document.addEventListener("keydown",c),()=>document.removeEventListener("keydown",c)}},[]),b.useEffect(()=>{if(n){const c=a(),r=n.split("");c.forEach((o,d)=>{const l=r[d];l&&(o.value=l)})}},[n])}const H=m.default.div`
  display: grid;
  grid-template-columns: repeat(${e=>e.length}, 1fr);
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
      ${({theme:e,error:t,success:n})=>t?e.color.ALERT[900]:n?e.color.SUCCESS[900]:e.color.NEUTRAL[300]};
    border-radius: 8px;
    background: #fff;
    font: normal 16px "Poppins";
    letter-spacing: -0.04em;
    color: ${e=>e.theme.color.NEUTRAL[700]};

    transition: background 0.3s ease-out;
    transition: border 0.3s ease-out;

    &:disabled {
      cursor: not-allowed;
      background-color: ${e=>e.theme.color.NEUTRAL[100]};
      color: ${e=>e.theme.color.NEUTRAL[500]};
    }

    &:focus {
      border-color: ${e=>e.theme.color.QUATERNARY[900]};
    }
  }
`,q=({id:e,value:t,length:n=4,error:a,success:c,onChange:r=d=>{},...o})=>(O(r,e,t),s(H,{length:n,error:a,success:c,children:Array.from({length:n}).map((d,l)=>s("input",{id:l.toString(),className:e,maxLength:1,...o},l))})),g={color:{NEUTRAL:{50:"#F5F5F5",100:"#EBEBEB",200:"#dfdfdf",300:"#bfbfbf",400:"#9f9f9f",500:"#808080",600:"#404040",700:"#404040",800:"#202020",900:"#000000"},PRIMARY:{50:"#F1F2F9",100:"#E6E8F4",200:"#DDDFF0",300:"#BBBFE2",400:"#999FD3",500:"#777fc5",600:"#545fb6",700:"#414a98",800:"#333a76",900:"#242954"},SECONDARY:{20:"#F7F5FF",50:"#EFEBFF",100:"#E6E0FF",200:"#d0c5ff",300:"#d0c5ff",400:"#b9a8ff",500:"#a18cff",600:"#8a6fff",700:"#7252ff",800:"#5b35ff",900:"#4318FF"},TERTIARY:{50:"#FFFAFC",100:"#FFF5F9",200:"#ffeff5",300:"#ffe0eb",400:"#ffd0e1",500:"#ffc1d7",600:"#ffb1cd",700:"#FFA1C3",800:"#ff92b9",900:"#FF82AF"},QUATERNARY:{50:"#FBFCFE",100:"#F2F6FD",200:"#ebf1fc",300:"#D8E4FA",400:"#c4d6f8",500:"#b0c8f5",600:"#9cbbf3",700:"#88adf0",800:"#75a0ed",900:"#6192EB"},STATE:{50:"#FFFBF5",100:"#FEF7EB",200:"#fef3e3",300:"#fde7c6",400:"#fcdba9",500:"#fbcf8d",600:"#fac270",700:"#f9b654",800:"#f8aa38",900:"#F79E1B"},ALERT:{50:"#FFFBF5",100:"#FEEDEC",200:"#fde3e2",300:"#fbc8c5",400:"#f9ada8",500:"#f7918b",600:"#f4756d",700:"#F25A50",800:"#F03E33",900:"#EE2316"},SUCCESS:{50:"#F7FDFA",100:"#EEFBF4",200:"#e4f9ed",300:"#c9f3db",400:"#aeedc9",500:"#93e7b7",600:"#78e1a4",700:"#5DDB92",800:"#42D580",900:"#2DC96F"}}},W=m.default.div`
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
        color: ${e=>e.theme.color.PRIMARY[900]};
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
        background: ${e=>e.theme.color.PRIMARY[900]};
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
    color: ${({theme:e})=>e.color.ALERT[900]};
    margin-left: 2px;
    margin-top: 3px;
  }

  & > span {
    width: 100%;
  }
`,V={control:(e,t)=>({...e,minHeight:"45px",borderRadius:10,backgroundColor:"#ffffff",border:`1px solid ${t.isFocused?g.color.QUATERNARY[900]:g.color.NEUTRAL[300]}`,boxShadow:"none",cursor:"pointer"}),singleValue:()=>({color:g.color.PRIMARY[900],fontWeight:500,fontSize:14}),placeholder:e=>({...e,color:g.color.NEUTRAL[700]}),indicatorSeparator:e=>({...e,display:"none"}),indicatorContainer:e=>({...e,padding:0}),valueContainer:e=>({...e,padding:0,paddingLeft:"7px"})},Q=({formatOptionLabel:e,options:t,loading:n=!1,style:a,error:c,firstOption:r,initialValue:o,value:d,onChange:l,isMulti:f,placeholder:x})=>{const R=r||{label:"Seleccione una opci\xF3n",value:""},F=[...t];return s(W,{style:a,hasError:!!c,children:n?s(B.default,{style:{borderRadius:10},className:"loading-skeleton",height:46,width:"100%"}):s(D.default,{placeholder:x,value:d||void 0,defaultValue:o||R,options:F,onChange:l,styles:V,isMulti:f,formatOptionLabel:e})})},K=m.default.div`
  ${({fullWidth:e})=>w({fullWidth:e})};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 8px;
  border: 1px solid
    ${({theme:e,error:t,success:n,isFocused:a})=>t?e.color.ALERT[900]:n?e.color.SUCCESS[900]:a?e.color.QUATERNARY[900]:e.color.NEUTRAL[300]};
  background: #fff;
  min-height: 45px;
  ::placeholder {
    color: ${e=>e.theme.color.NEUTRAL[500]};
  }

  background-color: ${({theme:e,disabled:t})=>t?e.color.NEUTRAL[100]:"#fff"};
  cursor: ${({disabled:e})=>e?"not-allowed":"auto"};
  transition: background 0.3s ease-out;
  transition: border 0.3s ease-out;

  > input {
    width: 100%;
    ${({size:e})=>A({size:e})};
    flex-grow: 1;
    border: none;
    outline: none;
    padding: 10px 0px;
    background: transparent;
    letter-spacing: -0.04em;
    color: ${e=>e.theme.color.NEUTRAL[700]};

    &:disabled {
      cursor: not-allowed;
      background-color: ${e=>e.theme.color.NEUTRAL[100]};
      color: ${e=>e.theme.color.NEUTRAL[500]};
    }
  }

  .leftAddon {
    padding-left: 12px;
  }

  .rightAddon {
    padding-right: 12px;
  }

  span {
    color: ${e=>e.theme.color.NEUTRAL[500]};
    ${({size:e})=>A({size:e})};
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: -0.04em;
    user-select: none;
  }

  .state {
    padding-right: 12px;
  }
`,G=e=>s("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:0,color:e.color||"#EE2316",height:24,width:24,viewBox:"0 0 24 24",...e,children:E("g",{stroke:"none",children:[s("path",{fill:"none",d:"M0 0h24v24H0z"}),s("path",{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z"})]})}),J=e=>s("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:0,color:e.color||"#2DC96F",height:20,width:20,viewBox:"0 0 1024 1024",...e,children:s("path",{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z",stroke:"none"})}),X=({type:e,leftAddon:t,rightAddon:n,placeholder:a,error:c,success:r,size:o,fullWidth:d,onFocus:l,onBlur:f,...x})=>{const[R,F]=b.useState(!1);return E(K,{fullWidth:d,success:r,size:o,error:c,disabled:x.disabled,isFocused:R,children:[t&&s("span",{className:"leftAddon",children:t}),s("input",{onFocus:v=>{l&&l(v),F(!0)},onBlur:v=>{f&&f(v),F(!1)},placeholder:a,type:e,...x}),n&&s("span",{className:"rightAddon",children:n}),c&&s("span",{className:"state",children:s(G,{size:24,color:g.color.ALERT[900]})}),r&&s("span",{className:"state",children:s(J,{size:20,color:g.color.SUCCESS[900]})})]})},Z=i.css`
  font-family: "Poppins";
  font-style: normal;
  line-height: 24px;
  letter-spacing: -0.04em;
`,ee=e=>{const t=e==="h1"||e==="h2"||e==="h3"||e==="h4"||e==="h5"||e==="h6",n=t?"bold":"medium",a=t?$[e]:$.text,c="PRIMARY/900";return i.css`
    font-weight: ${({weight:r=n})=>U[r]||"500"};
    font-size: ${({size:r=a})=>I[r]||r};
    color: ${({theme:r,color:o=c})=>{const d=o==null?void 0:o.split("/")[0],l=+(o==null?void 0:o.split("/")[1]);return r.color[d][l]}};
  `},te={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",p:"p",span:"span",strong:"strong",label:"label"},oe=m.default.div`
  ${Z}
  ${({as:e})=>ee(e)}
`,h=({as:e,...t})=>{const n=te[e];return s(oe,{as:n,...t})},ne={H1:e=>s(h,{as:"h1",...e}),H2:e=>s(h,{as:"h2",...e}),H3:e=>s(h,{as:"h3",...e}),H4:e=>s(h,{as:"h4",...e}),H5:e=>s(h,{as:"h5",...e}),H6:e=>s(h,{as:"h6",...e})},re=m.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,se=e=>e.rightIcon||e.leftIcon?E(re,{children:[e.leftIcon,s(h,{as:e.as||"p",...e}),e.rightIcon]}):s(h,{as:e.as||"p",...e});u.Button=z,u.CodeInput=q,u.Heading=ne,u.SelectInput=Q,u.Text=se,u.TextInput=X,Object.defineProperties(u,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
