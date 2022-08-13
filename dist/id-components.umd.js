(function(u,c){typeof exports=="object"&&typeof module<"u"?c(exports,require("styled-components"),require("react/jsx-runtime"),require("react"),require("react-loading-skeleton"),require("react-select")):typeof define=="function"&&define.amd?define(["exports","styled-components","react/jsx-runtime","react","react-loading-skeleton","react-select"],c):(u=typeof globalThis<"u"?globalThis:u||self,c(u["ID-Components"]={},u.styled,u["react/jsx-runtime"].js,u.React,u.Skeleton,u.Select))})(this,function(u,c,s,b,w,L){"use strict";const m=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},g=m(c),y=m(b),N=m(w),B=m(L),D={bold:700,medium:500,regular:400,light:300},$={xs:"0.750rem",sm:"0.875rem	",md:"1.0rem",lg:"1.250rem",xl:"1.5rem",xxl:"2.0rem"},S={h1:"xl",h2:"lg",h3:"md",h4:"sm",h5:"xs",h6:"xs",text:"md"},U=({shape:e})=>{switch(e){case"rounded":return c.css`
        border-radius: 10px;
      `;case"squared":return c.css`
        border-radius: 0;
      `;case"circular":return c.css`
        border-radius: 25px;
      `;default:return c.css`
        border-radius: 10px;
      `}},I=({design:e,color:o})=>{switch(e){case"solid":return c.css`
        background-color: ${({theme:n})=>p({theme:n,color:o})};
        color: #fff;
      `;case"outline":return c.css`
        background-color: transparent;
        border: 1px solid ${({theme:n})=>p({theme:n,color:o})};
        color: ${({theme:n})=>p({theme:n,color:o})};
      `;case"flat":return c.css`
        background-color: transparent;
        border: none;
        color: ${({theme:n})=>p({theme:n,color:o})};
      `;case"link":return c.css`
        background-color: transparent;
        border: none;
        color: ${({theme:n})=>p({theme:n,color:o})};

        &:hover {
          color: ${({theme:n})=>p({theme:n,color:o,hover:!0})};
          text-decoration: underline;
        }
      `;default:return c.css`
        background-color: ${({theme:n})=>p({theme:n,color:o})};
        color: #fff;
      `}},p=({color:e="SECONDARY/900",theme:o,design:n,hover:l})=>{const a=e.split("/"),r=a[0];let t=+a[1];if(l&&t>=300)switch(n){case"solid":t-=100;break;case"outline":t=100;break;case"flat":t=100;break;default:t>=400?t-=100:t+=100;break}if(l&&t<300)switch(n){case"solid":t+=100;break;case"outline":t=100;break;case"flat":t=100;break;default:t-=100;break}return r==="PRIMARY"||r==="SECONDARY"||r==="TERTIARY"||r==="QUATERNARY"||r==="STATE"||r==="ALERT"||r==="SUCCESS"?t===50||t===100||t===200||t===300||t===400||t===500||t===600||t===700||t===800||t===900?o.color[r][t]:o.color[r][900]:o.color.PRIMARY[900]},T=({fullWidth:e})=>e?c.css`
      width: 100%;
    `:c.css`
    width: auto;
  `,R=({isLoading:e})=>e?c.css`
      cursor: not-allowed;
      opacity: 0.5;
    `:c.css`
    cursor: pointer;
    opacity: 1;
  `,Y=({disabled:e})=>e?c.css`
      cursor: not-allowed;
      opacity: 0.5;
    `:c.css`
    cursor: pointer;
    opacity: 1;
  `,k=({size:e})=>{if(e)return c.css`
      font-size: ${$[e]||e};
    `},z=({align:e})=>{if(e)return c.css`
      text-align: ${e};
    `},M=g.default.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
`,P=g.default(M)`
  display: inline-flex;
  gap: 0.5rem;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease-out;
  padding: ${({design:e})=>e==="link"?"0":"0.5rem"};
  min-height: ${({design:e})=>e==="link"?"0":"45px"};

  ${({size:e})=>k({size:e})};
  ${({shape:e})=>U({shape:e})};
  ${({design:e,color:o})=>I({design:e,color:o})};
  ${({fullWidth:e})=>T({fullWidth:e})};
  ${({isLoading:e})=>R({isLoading:e})};
  ${({disabled:e})=>Y({disabled:e})};

  &:hover {
    background-color: ${({theme:e,color:o,design:n})=>n==="link"?"transparent":p({color:o,theme:e,design:n,hover:!0})};
  }

  &:active {
    background-color: ${({theme:e,color:o,design:n})=>n==="link"?"transparent":p({color:o,theme:e,design:n,hover:!0})};
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:disabled:hover {
    ${({design:e,color:o})=>I({design:e,color:o})};
  }
`,j=({children:e,...o})=>s.jsxs(P,{...o,children:[o.leftIcon,e,o.rightIcon]});function H(e,o,n){const l=()=>{const a=document.querySelectorAll("input");return Array.from(a).filter(t=>t.className===o)};b.useEffect(()=>{const a=r=>{r.key==="Backspace"&&setTimeout(()=>{const t=l(),d=document.activeElement;d.value="";const i=t.indexOf(d);i>0&&t[i-1].focus()},0)};return document.addEventListener("keydown",a),()=>document.removeEventListener("keydown",a)},[]),b.useEffect(()=>{const a=r=>{if(r.key!=="Backspace"){const t=r.key.toLowerCase();setTimeout(()=>{if(t.length===1){const d=l(),i=document.activeElement;i.value=t;const f=d.indexOf(i);f<d.length-1&&d[f+1].focus()}},0)}};return document.addEventListener("keydown",a),()=>document.removeEventListener("keydown",a)},[]),b.useEffect(()=>{if(e){const a=r=>{const t=r.key.toLowerCase();(t.length===1||t==="backspace")&&setTimeout(()=>{const i=l().map(f=>f.value).join("");e(i)},0)};return document.addEventListener("keydown",a),()=>document.removeEventListener("keydown",a)}},[]),b.useEffect(()=>{if(n){const a=l(),r=n.split("");a.forEach((t,d)=>{const i=r[d];i&&(t.value=i)})}},[n])}const _=g.default.div`
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
      ${({theme:e,error:o,success:n})=>o?e.color.ALERT[900]:n?e.color.SUCCESS[900]:e.color.NEUTRAL[300]};
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
`,O=({id:e,value:o,length:n=4,error:l,success:a,onChange:r=d=>{},...t})=>(H(r,e,o),s.jsx(_,{length:n,error:l,success:a,children:Array.from({length:n}).map((d,i)=>s.jsx("input",{id:i.toString(),className:e,maxLength:1,...t},i))})),x={color:{NEUTRAL:{50:"#F5F5F5",100:"#EBEBEB",200:"#dfdfdf",300:"#bfbfbf",400:"#9f9f9f",500:"#808080",600:"#404040",700:"#404040",800:"#202020",900:"#000000"},PRIMARY:{50:"#F1F2F9",100:"#E6E8F4",200:"#DDDFF0",300:"#BBBFE2",400:"#999FD3",500:"#777fc5",600:"#545fb6",700:"#414a98",800:"#333a76",900:"#242954"},SECONDARY:{20:"#F7F5FF",50:"#EFEBFF",100:"#E6E0FF",200:"#d0c5ff",300:"#d0c5ff",400:"#b9a8ff",500:"#a18cff",600:"#8a6fff",700:"#7252ff",800:"#5b35ff",900:"#4318FF"},TERTIARY:{50:"#FFFAFC",100:"#FFF5F9",200:"#ffeff5",300:"#ffe0eb",400:"#ffd0e1",500:"#ffc1d7",600:"#ffb1cd",700:"#FFA1C3",800:"#ff92b9",900:"#FF82AF"},QUATERNARY:{50:"#FBFCFE",100:"#F2F6FD",200:"#ebf1fc",300:"#D8E4FA",400:"#c4d6f8",500:"#b0c8f5",600:"#9cbbf3",700:"#88adf0",800:"#75a0ed",900:"#6192EB"},STATE:{50:"#FFFBF5",100:"#FEF7EB",200:"#fef3e3",300:"#fde7c6",400:"#fcdba9",500:"#fbcf8d",600:"#fac270",700:"#f9b654",800:"#f8aa38",900:"#F79E1B"},ALERT:{50:"#FFFBF5",100:"#FEEDEC",200:"#fde3e2",300:"#fbc8c5",400:"#f9ada8",500:"#f7918b",600:"#f4756d",700:"#F25A50",800:"#F03E33",900:"#EE2316"},SUCCESS:{50:"#F7FDFA",100:"#EEFBF4",200:"#e4f9ed",300:"#c9f3db",400:"#aeedc9",500:"#93e7b7",600:"#78e1a4",700:"#5DDB92",800:"#42D580",900:"#2DC96F"}}},q=g.default.div`
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
`,W={control:(e,o)=>({...e,minHeight:"45px",borderRadius:10,backgroundColor:"#ffffff",border:`1px solid ${o.isFocused?x.color.QUATERNARY[900]:x.color.NEUTRAL[300]}`,boxShadow:"none",cursor:"pointer"}),singleValue:()=>({color:x.color.PRIMARY[900],fontWeight:500,fontSize:14}),placeholder:e=>({...e,color:x.color.NEUTRAL[700]}),indicatorSeparator:e=>({...e,display:"none",padding:0}),indicatorsContainer:e=>({...e,"> div":{padding:"0",paddingRight:"5px"}}),valueContainer:e=>({...e,padding:0,paddingLeft:"7px"})},V=({formatOptionLabel:e,options:o,loading:n=!1,style:l,error:a,firstOption:r,initialValue:t,value:d,onChange:i,isMulti:f,placeholder:E})=>{const A=r||{label:"Seleccione una opci\xF3n",value:""},F=[...o];return s.jsx(q,{style:l,hasError:!!a,children:n?s.jsx(N.default,{style:{borderRadius:10},className:"loading-skeleton",height:46,width:"100%"}):s.jsx(B.default,{placeholder:E,value:d||void 0,defaultValue:t||A,options:F,onChange:i,styles:W,isMulti:f,formatOptionLabel:e})})},Q=g.default.div`
  ${({fullWidth:e})=>T({fullWidth:e})};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 8px;
  border: 1px solid
    ${({theme:e,error:o,success:n,isFocused:l})=>o?e.color.ALERT[900]:n?e.color.SUCCESS[900]:l?e.color.QUATERNARY[900]:e.color.NEUTRAL[300]};
  background: #fff;
  min-height: 45px;
  ::placeholder {
    color: ${e=>e.theme.color.NEUTRAL[500]};
  }

  background-color: ${({theme:e,disabled:o})=>o?e.color.NEUTRAL[100]:"#fff"};
  cursor: ${({disabled:e})=>e?"not-allowed":"auto"};
  transition: background 0.3s ease-out;
  transition: border 0.3s ease-out;

  > input {
    position: relative;
    width: 100%;
    ${({size:e})=>k({size:e})};
    flex-grow: 1;
    border: none;
    outline: none;
    padding: 10px 0px;
    background: transparent;
    letter-spacing: -0.04em;
    color: ${e=>e.theme.color.NEUTRAL[700]};
    padding-left: ${({leftAddon:e})=>e?"0px":"12px"};
    padding-right: ${({rightAddon:e})=>e?"0px":"12px"};
    padding-right: ${({success:e,error:o})=>(e||o)&&"35px"};

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
    ${({size:e})=>k({size:e})};
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: -0.04em;
    user-select: none;
  }

  .state {
    padding-right: 12px;
    position: absolute;
    right: 25px;
  }
`,K=e=>s.jsx("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:0,color:e.color||"#EE2316",height:24,width:24,viewBox:"0 0 24 24",...e,children:s.jsxs("g",{stroke:"none",children:[s.jsx("path",{fill:"none",d:"M0 0h24v24H0z"}),s.jsx("path",{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z"})]})}),G=e=>s.jsx("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:0,color:e.color||"#2DC96F",height:20,width:20,viewBox:"0 0 1024 1024",...e,children:s.jsx("path",{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z",stroke:"none"})}),J=y.default.forwardRef(({type:e,leftAddon:o,rightAddon:n,placeholder:l,error:a,success:r,size:t,fullWidth:d,name:i,onFocus:f,onBlur:E,onChange:A,...F},se)=>{const[ce,C]=b.useState(!1);return s.jsxs(Q,{fullWidth:d,success:r,size:t,error:a,disabled:F.disabled,leftAddon:o,rightAddon:n,isFocused:ce,children:[o&&s.jsx("span",{className:"leftAddon",children:o}),s.jsx("input",{ref:se,onFocus:v=>{f&&f(v),C(!0)},onBlur:v=>{E&&E(v),C(!1)},onChange:A,placeholder:l,type:e,name:i,...F}),n&&s.jsx("span",{className:"rightAddon",children:n}),a&&s.jsx("span",{className:"state",children:s.jsx(K,{size:24,color:x.color.ALERT[900]})}),r&&s.jsx("span",{className:"state",children:s.jsx(G,{size:20,color:x.color.SUCCESS[900]})})]})}),X=c.css`
  font-family: "Poppins";
  font-style: normal;
  line-height: 24px;
  letter-spacing: -0.04em;
  ${({align:e})=>z({align:e})}
`,Z=e=>{const o=e==="h1"||e==="h2"||e==="h3"||e==="h4"||e==="h5"||e==="h6",n=o?"bold":"medium",l=o?S[e]:S.text,a="PRIMARY/900";return c.css`
    font-weight: ${({weight:r=n})=>D[r]||"500"};
    font-size: ${({size:r=l})=>$[r]||r};
    color: ${({theme:r,color:t=a})=>{const d=t==null?void 0:t.split("/")[0],i=+(t==null?void 0:t.split("/")[1]);return r.color[d][i]}};
  `},ee={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",p:"p",span:"span",strong:"strong",label:"label"},te=g.default.div`
  ${X}
  ${({as:e})=>Z(e)}
`,h=({as:e,...o})=>{const n=ee[e];return s.jsx(te,{as:n,...o})},oe={H1:e=>s.jsx(h,{as:"h1",...e}),H2:e=>s.jsx(h,{as:"h2",...e}),H3:e=>s.jsx(h,{as:"h3",...e}),H4:e=>s.jsx(h,{as:"h4",...e}),H5:e=>s.jsx(h,{as:"h5",...e}),H6:e=>s.jsx(h,{as:"h6",...e})},ne=g.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,re=e=>e.rightIcon||e.leftIcon?s.jsxs(ne,{children:[e.leftIcon,s.jsx(h,{as:e.as||"p",...e}),e.rightIcon]}):s.jsx(h,{as:e.as||"p",...e});u.Button=j,u.CodeInput=O,u.Heading=oe,u.SelectInput=V,u.Text=re,u.TextInput=J,Object.defineProperties(u,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
