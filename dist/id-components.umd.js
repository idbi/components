(function(f,l){typeof exports=="object"&&typeof module<"u"?l(exports,require("styled-components"),require("react/jsx-runtime"),require("react"),require("react-loading-skeleton"),require("react-select"),require("@radix-ui/react-collapsible")):typeof define=="function"&&define.amd?define(["exports","styled-components","react/jsx-runtime","react","react-loading-skeleton","react-select","@radix-ui/react-collapsible"],l):(f=typeof globalThis<"u"?globalThis:f||self,l(f["ID-Components"]={},f.styled,f["react/jsx-runtime"].js,f.React,f.Skeleton,f.Select,f["@radix-ui/react-collapsible"]))})(this,function(f,l,r,b,Z,R,Q){"use strict";const L=e=>e&&typeof e=="object"&&"default"in e?e:{default:e};function q(e){if(e&&e.__esModule)return e;const t=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const o in e)if(o!=="default"){const a=Object.getOwnPropertyDescriptor(e,o);Object.defineProperty(t,o,a.get?a:{enumerable:!0,get:()=>e[o]})}}return t.default=e,Object.freeze(t)}const h=L(l),K=L(Z),G=L(R),I=q(Q),J={bold:700,medium:500,regular:400,light:300},B={xs:"0.750rem",sm:"0.875rem	",md:"1.0rem",lg:"1.250rem",xl:"1.5rem","2xl":"1.875rem","3xl":"2.0rem","4xl":"2.5rem","5xl":"3.0rem"},Y={h1:"xl",h2:"lg",h3:"md",h4:"sm",h5:"xs",h6:"xs",text:"sm"},$={color:{NEUTRAL:{0:"#FFFFFF",20:"#FFFFFF",50:"#F5F5F5",100:"#EBEBEB",200:"#dfdfdf",300:"#bfbfbf",400:"#9f9f9f",500:"#808080",600:"#404040",700:"#383838",800:"#202020",900:"#000000"},PRIMARY:{0:"#FFFFFF",50:"#F1F2F9",100:"#E6E8F4",200:"#DDDFF0",300:"#BBBFE2",400:"#999FD3",500:"#777fc5",600:"#545fb6",700:"#414a98",800:"#333a76",900:"#242954"},SECONDARY:{0:"#FFFFFF",20:"#F7F5FF",50:"#EFEBFF",100:"#E6E0FF",200:"#d0c5ff",300:"#d0c5ff",400:"#b9a8ff",500:"#a18cff",600:"#8a6fff",700:"#7252ff",800:"#5b35ff",900:"#4318FF"},TERTIARY:{0:"#FFFFFF",50:"#FFFAFC",100:"#FFF5F9",200:"#ffeff5",300:"#ffe0eb",400:"#ffd0e1",500:"#ffc1d7",600:"#ffb1cd",700:"#FFA1C3",800:"#ff92b9",900:"#FF82AF"},QUATERNARY:{0:"#FFFFFF",50:"#FBFCFE",100:"#F2F6FD",200:"#ebf1fc",300:"#D8E4FA",400:"#c4d6f8",500:"#b0c8f5",600:"#9cbbf3",700:"#88adf0",800:"#75a0ed",900:"#6192EB"},STATE:{0:"#FFFFFF",50:"#FFFBF5",100:"#FEF7EB",200:"#fef3e3",300:"#fde7c6",400:"#fcdba9",500:"#fbcf8d",600:"#fac270",700:"#f9b654",800:"#f8aa38",900:"#F79E1B"},ALERT:{0:"#FFFFFF",50:"#FFFBF5",100:"#FEEDEC",200:"#fde3e2",300:"#fbc8c5",400:"#f9ada8",500:"#f7918b",600:"#f4756d",700:"#F25A50",800:"#F03E33",900:"#EE2316"},SUCCESS:{0:"#FFFFFF",50:"#F7FDFA",100:"#EEFBF4",200:"#e4f9ed",300:"#c9f3db",400:"#aeedc9",500:"#93e7b7",600:"#78e1a4",700:"#5DDB92",800:"#42D580",900:"#2DC96F"}},effect:{darkShadow:{4:"0px 0px 4px 1px rgba(139, 139, 139, 0.32)",6:"0px 1px 6px rgba(60, 60, 60, 0.2)",8:"0px 1px 6px rgba(107, 107, 107, 0.2)",12:"0px 0px 12px 2px #F6F6F6",24:"0px 0px 24px 4px rgba(0, 14, 51, 0.2)",30:"0px 10px 30px rgba(0, 0, 0, 0.08)"},lightShadow:{2:"0px 0px 2px 1px rgba(149, 178, 254, 0.2)",16:"0px 4px 16px rgba(153, 181, 255, 0.2)"}}},X=({shape:e})=>{switch(e){case"rounded":return l.css`
        border-radius: 0.625rem;
      `;case"squared":return l.css`
        border-radius: 0;
      `;case"circular":return l.css`
        border-radius: 10rem;
      `;default:return l.css`
        border-radius: 0.625rem;
      `}},D=({design:e,color:t})=>{switch(e){case"solid":return l.css`
        background-color: ${()=>F({color:t})};
        color: #fff;
      `;case"outline":return l.css`
        background-color: white;
        border: 1px solid ${()=>F({color:t})};
        color: ${()=>F({color:t})};
      `;case"flat":return l.css`
        background-color: white;
        border: none;
        color: ${()=>F({color:t})};
      `;case"link":return l.css`
        background-color: transparent;
        border: none;
        color: ${()=>F({color:t})};

        &:hover {
          color: ${()=>F({color:t,hover:!0})};
          text-decoration: underline;
        }
      `;default:return l.css`
        background-color: ${()=>F({color:t})};
        color: #fff;
      `}},F=({color:e="SECONDARY/900",design:t,hover:o})=>{const a=e.split("/"),i=a[0];let n=+a[1];if(o&&n>=300)switch(t){case"solid":n-=100;break;case"outline":n=100;break;case"flat":n=100;break;default:n>=400?n-=100:n+=100;break}if(o&&n<300)switch(t){case"solid":n+=100;break;case"outline":n=100;break;case"flat":n=100;break;default:n-=100;break}return i==="PRIMARY"||i==="NEUTRAL"||i==="SECONDARY"||i==="TERTIARY"||i==="QUATERNARY"||i==="STATE"||i==="ALERT"||i==="SUCCESS"?n===50||n===100||n===200||n===300||n===400||n===500||n===600||n===700||n===800||n===900?$.color[i][n]:$.color[i][900]:$.color.PRIMARY[900]},M=({fullWidth:e})=>e?l.css`
      width: 100%;
    `:l.css`
    width: auto;
  `,ee=({isLoading:e})=>e?l.css`
      cursor: not-allowed;
      opacity: 0.5;
    `:l.css`
    cursor: pointer;
    opacity: 1;
  `,te=({disabled:e})=>e?l.css`
      cursor: not-allowed;
      opacity: 0.5;
    `:l.css`
    cursor: pointer;
    opacity: 1;
  `,z=({size:e="sm"})=>l.css`
    font-size: ${B[e]||e};
  `,re=({align:e})=>e?l.css`
      text-align: ${e};
    `:l.css`
    text-align: left;
  `,H=e=>{let t="";return e.m&&(t+=`
      margin-top: ${e.m};
      margin-bottom: ${e.m};
      margin-left: ${e.m};
      margin-right: ${e.m};
    `),e.mb&&(t+=`
      margin-bottom: ${e.mb};
    `),e.mt&&(t+=`
      margin-top: ${e.mt};
    `),e.ml&&(t+=`
      margin-left: ${e.ml};
    `),e.mr&&(t+=`
      margin-right: ${e.mr};
    `),e.mx&&(t+=`
      margin-left: ${e.mx};
      margin-right: ${e.mx};
    `),e.my&&(t+=`
      margin-top: ${e.my};
      margin-bottom: ${e.my};
    `),e.p&&(t+=`
      padding-top: ${e.p};
      padding-bottom: ${e.p};
      padding-left: ${e.p};
      padding-right: ${e.p};
    `),e.pb&&(t+=`
      padding-bottom: ${e.pb};
    `),e.pt&&(t+=`
      padding-top: ${e.pt};
    `),e.pl&&(t+=`
      padding-left: ${e.pl};
    `),e.pr&&(t+=`
      padding-right: ${e.pr};
    `),e.px&&(t+=`
      padding-left: ${e.px};
      padding-right: ${e.px};
    `),e.py&&(t+=`
      padding-top: ${e.py};
      padding-bottom: ${e.py};
    `),l.css`
    ${t}
  `},oe=h.default.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
`,ne=h.default(oe)`
  display: inline-flex;
  gap: 0.5rem;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease-out;
  padding: ${({design:e})=>e==="link"?"0":"0.7rem"};
  min-height: ${({design:e})=>e==="link"?"0":"45px"};

  ${({size:e})=>z({size:e})};
  ${({shape:e})=>X({shape:e})};
  ${({design:e,color:t})=>D({design:e,color:t})};
  ${({fullWidth:e})=>M({fullWidth:e})};
  ${({isLoading:e})=>ee({isLoading:e})};
  ${({disabled:e})=>te({disabled:e})};
  ${({m:e,mb:t,mt:o,mr:a,ml:i,my:n,mx:c,p:s,pb:d,pt:u,pr:p,pl:x,py:w,px:v})=>H({m:e,mb:t,mt:o,mr:a,ml:i,my:n,mx:c,p:s,pb:d,pt:u,pr:p,pl:x,py:w,px:v})};

  &:hover {
    background-color: ${({color:e,design:t})=>t==="link"?"transparent":F({color:e,design:t,hover:!0})};
  }

  &:active {
    background-color: ${({color:e,design:t})=>t==="link"?"transparent":F({color:e,design:t,hover:!0})};
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:disabled:hover {
    ${({design:e,color:t})=>D({design:e,color:t})};
  }
`,P=({children:e,...t})=>r.jsxs(ne,{...t,children:[t.leftIcon,e,t.rightIcon]});function ie(e,t,o){const a=()=>{const i=document.querySelectorAll("input");return Array.from(i).filter(c=>c.className===t)};b.useEffect(()=>{const i=n=>{n.key==="Backspace"&&setTimeout(()=>{const c=a(),s=document.activeElement;s.value="";const d=c.indexOf(s);d>0&&c[d-1].focus()},0)};return document.addEventListener("keydown",i),()=>document.removeEventListener("keydown",i)},[]),b.useEffect(()=>{const i=n=>{if(n.key!=="Backspace"){const c=n.key.toLowerCase();setTimeout(()=>{if(c.length===1){const s=a(),d=document.activeElement;d.value=c;const u=s.indexOf(d);u<s.length-1&&s[u+1].focus()}},0)}};return document.addEventListener("keydown",i),()=>document.removeEventListener("keydown",i)},[]),b.useEffect(()=>{if(e){const i=n=>{const c=n.key.toLowerCase();(c.length===1||c==="backspace")&&setTimeout(()=>{const d=a().map(u=>u.value).join("");e(d)},0)};return document.addEventListener("keydown",i),()=>document.removeEventListener("keydown",i)}},[]),b.useEffect(()=>{if(o){const i=a(),n=i.map(d=>d.value),c=o.split(""),s=c.length===n.length?c:n;i.forEach((d,u)=>{const p=s[u];p&&(d.value=p)})}},[o])}const ae=l.keyframes`
  0% {
    opacity: 0;
    transform: translateY(-4px);
  }

  80% {
    opacity: 0.5;
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`,N=h.default.div`
  opacity: 0;
  ${({shouldAppear:e})=>e&&l.css`
      animation: ${ae} 0.2s ease-in;
      animation-fill-mode: forwards;
    `}
`,le={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",p:"p",li:"li",span:"span",strong:"strong",label:"label"},ce=l.css`
  display: inline-block;
  font-family: "Poppins";
  font-style: normal;
  line-height: 24px;
  letter-spacing: -0.04rem;
  ${({align:e})=>re({align:e})}
  ${({m:e,mb:t,mt:o,mr:a,ml:i,my:n,mx:c,p:s,pb:d,pt:u,pr:p,pl:x,py:w,px:v})=>H({m:e,mb:t,mt:o,mr:a,ml:i,my:n,mx:c,p:s,pb:d,pt:u,pr:p,pl:x,py:w,px:v})};
`,se=e=>{const t=e==="h1"||e==="h2"||e==="h3"||e==="h4"||e==="h5"||e==="h6",o=t?"bold":"medium",a=t?Y[e]:Y.text,i="PRIMARY/900";return l.css`
    font-weight: ${({weight:n=o})=>J[n]||"500"};
    font-size: ${({size:n=a})=>B[n]||n};
    color: ${({color:n=i})=>{const c=n==null?void 0:n.split("/")[0],s=Number(n==null?void 0:n.split("/")[1]);return $.color[c][s]}};
  `},de=h.default.div`
  ${ce}
  ${({as:e})=>se(e)}
`,E=({as:e,...t})=>{const o=le[e];return r.jsx(de,{as:o,...t})},fe={H1:e=>r.jsx(E,{as:"h1",...e}),H2:e=>r.jsx(E,{as:"h2",...e}),H3:e=>r.jsx(E,{as:"h3",...e}),H4:e=>r.jsx(E,{as:"h4",...e}),H5:e=>r.jsx(E,{as:"h5",...e}),H6:e=>r.jsx(E,{as:"h6",...e})},ue=h.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
  transition: 0.3s ease-out;
`,m=e=>e.rightIcon||e.leftIcon?r.jsxs(ue,{children:[e.leftIcon,r.jsx(E,{as:e.as||"p",...e}),e.rightIcon]}):r.jsx(E,{as:e.as||"p",...e}),he=h.default.div`
  display: grid;
  grid-template-columns: repeat(${e=>e.length}, 1fr);
  grid-gap: 22px;
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
      ${({theme:e,errorMessage:t,success:o})=>t?e.color.ALERT[900]:o?e.color.SUCCESS[900]:e.color.NEUTRAL[300]};
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
`,pe=h.default.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`,ge=({id:e,value:t,length:o=4,errorMessage:a,success:i,onChange:n=()=>{},...c})=>(ie(n,e,t),r.jsxs(pe,{children:[r.jsx(he,{length:o,success:i,errorMessage:a,children:Array.from({length:o}).map((s,d)=>r.jsx("input",{id:d.toString(),className:e,maxLength:1,...c},d))}),a&&r.jsx(N,{shouldAppear:Boolean(a),children:r.jsx(m,{size:"xs",weight:"light",color:"ALERT/900",children:a})})]})),be=h.default.div`
  position: relative;
  width: 100%;

  img {
    margin-right: 0.25rem;
  }

  label {
    display: inline-block;
    margin-bottom: 0.25rem;
    padding-left: 0.05rem;
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
`,xe={control:(e,t)=>({...e,minHeight:"45px",borderRadius:10,backgroundColor:"#ffffff",border:`1px solid ${t.isFocused?$.color.QUATERNARY[900]:$.color.NEUTRAL[300]}`,boxShadow:"none",cursor:"pointer"}),singleValue:()=>({color:$.color.PRIMARY[900],fontWeight:500,fontSize:"14px"}),placeholder:e=>({...e,color:$.color.NEUTRAL[700]}),indicatorSeparator:e=>({...e,display:"none",padding:0}),indicatorsContainer:e=>({...e,"> div":{padding:"0",paddingRight:"3px"}}),valueContainer:e=>({...e,padding:0,paddingLeft:"6px"})},me=({formatOptionLabel:e,options:t,loading:o=!1,style:a,error:i,firstOption:n,initialValue:c,value:s,onChange:d,isMulti:u,placeholder:p,label:x})=>{const w=n||{label:"Seleccione una opci\xF3n",value:""},v=[...t];return r.jsxs(be,{style:a,hasError:!!i,children:[x&&r.jsx(m,{as:"label",align:"left",size:"sm",color:"NEUTRAL/700",children:x}),o?r.jsx(K.default,{style:{borderRadius:10},className:"loading-skeleton",height:46,width:"100%"}):r.jsx(G.default,{placeholder:p,value:s||void 0,defaultValue:c||w,options:v,onChange:d,styles:xe,isMulti:u,formatOptionLabel:e})]})},ve=h.default.div`
  width: ${e=>e.size}px;
  height: ${e=>e.size}px;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: transparent;
    width: ${e=>e.size}px;
    height: ${e=>e.size}px;
    border-radius: ${e=>e.borderRadius||"50%"};
    transition: 0.3s background, 0.3s width, 0.3s height;
  }
  &:hover ::before {
    width: ${e=>e.size*2}px;
    height: ${e=>e.size*2}px;
    background: ${e=>e.theme.color.NEUTRAL[50]};
  }
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: transparent;
    width: ${e=>e.size*2}px;
    height: ${e=>e.size*2}px;
    border-radius: ${e=>e.borderRadius||"50%"};
    transition: 0.3s background, 0.3s width, 0.3s height;
    opacity: 0.3;
  }
  &:active ::after {
    width: ${e=>e.size*2}px;
    height: ${e=>e.size*2}px;
    background: #fff;
  }

  ${e=>e.variant=="V1"&&l.css`
      ${t=>t.active&&l.css`
          &::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: ${o=>o.color||o.theme.color.PRIMARY[900]};
            width: ${o=>o.size*2}px;
            height: ${o=>o.size*2}px;
            border-radius: ${o=>o.borderRadius||"50%"};
            transition: 0.3s background;
          }
          &:hover ::before {
            width: ${o=>o.size*2}px;
            height: ${o=>o.size*2}px;
            background: ${o=>o.color||o.theme.color.PRIMARY[900]};
          }
        `}
    `}
  ${e=>e.variant=="V2"&&l.css`
      ${t=>t.active&&l.css`
          &::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: transparent;
            width: ${o=>o.size}px;
            height: ${o=>o.size}px;
            border-radius: ${o=>o.borderRadius||"50%"};
            transition: 0.3s background;
          }
          &:hover ::before {
            width: ${o=>o.size*2}px;
            height: ${o=>o.size*2}px;
            background: ${o=>o.theme.color.NEUTRAL[50]};
          }
        `}
    `}
`,$e=h.default.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${e=>e.size}px;
  height: ${e=>e.size}px;
  fill: ${e=>e.color||e.theme.color.PRIMARY[900]};
  ${e=>e.variant==="V1"&&l.css`
      ${t=>t.active&&l.css`
          fill: #fff;
        `}
    `}
  ${e=>e.variant==="V2"&&l.css`
      fill: ${t=>t.theme.color.NEUTRAL[400]};
      ${t=>t.active&&l.css`
          fill: ${o=>o.color||o.theme.color.PRIMARY[900]};
        `}
    `}
`,O=e=>{const{children:t,color:o,size:a,viewBox:i,active:n,borderRadius:c,variant:s}=e;return r.jsx(ve,{active:n,size:a||24,borderRadius:c||"50%",variant:s||"V1",color:o,children:r.jsx($e,{active:n,color:o,size:a||24,viewBox:i||"0 0 32 32",variant:s||"V1",children:t})})},Fe=e=>{const{color:t,size:o}=e;return r.jsx(O,{color:t,size:o,viewBox:"0 0 22 13",fill:"none",children:r.jsx("path",{d:"M19 1.406s-.32.772-1 1.752m-7 4.031a7.587 7.587 0 0 1-4.051-1.157M11 7.19a7.587 7.587 0 0 0 4.051-1.157M11 7.19v4.048m-8-9.83s.354.851 1.106 1.901M6.95 6.033 4 9.502m2.949-3.47c-1.26-.778-2.198-1.824-2.843-2.724m10.945 2.724 2.449 3.47m-2.449-3.47C16.381 5.21 17.354 4.09 18 3.158m-13.894.15L1 4.877m17-1.718 3 1.718",stroke:"#242954",strokeWidth:2,strokeLinecap:"round"})})},we=e=>{const{color:t,size:o}=e;return r.jsx(O,{color:t,size:o,viewBox:"0 0 22 19",fill:"none",children:r.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 2.75c-3.089 0-6.002 1.167-8.524 3.239a.75.75 0 1 1-.952-1.16C4.274 2.57 7.515 1.25 11 1.25c3.485 0 6.726 1.32 9.476 3.58a.75.75 0 1 1-.952 1.159C17.002 3.917 14.089 2.75 11 2.75Zm-8.249 8.454v.002c.006.02.025.103.1.259.09.187.234.424.434.697.4.546.99 1.19 1.73 1.804 1.488 1.238 3.487 2.284 5.639 2.284 2.163 0 4.343-1.055 6.016-2.308.829-.62 1.506-1.27 1.968-1.819.231-.276.398-.514.503-.7a1.31 1.31 0 0 0 .102-.219 1.315 1.315 0 0 0-.102-.218 4.803 4.803 0 0 0-.503-.7c-.462-.55-1.14-1.198-1.968-1.82a13.63 13.63 0 0 0-1.87-1.179c.264.57.412 1.203.412 1.872 0 2.496-2.052 4.5-4.558 4.5s-4.558-2.004-4.558-4.5c0-.615.125-1.2.35-1.734-.515.309-.995.655-1.432 1.018a10.49 10.49 0 0 0-1.729 1.804c-.2.273-.343.51-.434.697-.075.156-.094.238-.1.26 0 0 0 0 0 0Zm7.903-6.545c-2.627 0-4.955 1.264-6.599 2.63a11.982 11.982 0 0 0-1.98 2.072 6.141 6.141 0 0 0-.575.931c-.13.27-.25.594-.25.912 0 .319.12.643.25.913.14.29.337.606.575.931a11.98 11.98 0 0 0 1.98 2.071c1.644 1.367 3.972 2.631 6.599 2.631 2.616 0 5.11-1.255 6.915-2.607.91-.682 1.673-1.408 2.217-2.055.271-.323.498-.638.662-.93.15-.265.302-.606.302-.954 0-.347-.153-.688-.302-.953a6.264 6.264 0 0 0-.662-.93c-.544-.647-1.307-1.373-2.217-2.055-1.806-1.352-4.299-2.607-6.915-2.607Zm0 1.5c-1.7 0-3.058 1.354-3.058 3s1.358 3 3.058 3c1.7 0 3.058-1.354 3.058-3s-1.359-3-3.058-3Z",fill:"#242954",stroke:"#242954",strokeLinecap:"round"})})},ke=e=>r.jsx("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:0,color:e.color||"#EE2316",height:24,width:24,viewBox:"0 0 24 24",...e,children:r.jsxs("g",{stroke:"none",children:[r.jsx("path",{fill:"none",d:"M0 0h24v24H0z"}),r.jsx("path",{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z"})]})}),Ee=e=>r.jsx("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:0,color:e.color||"#2DC96F",height:20,width:20,viewBox:"0 0 1024 1024",...e,children:r.jsx("path",{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z",stroke:"none"})}),Ae=h.default.div`
  ${({fullWidth:e})=>M({fullWidth:e})};
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 8px;
  border: 1px solid
    ${({theme:e,error:t,success:o,isFocused:a})=>t?e.color.ALERT[900]:o&&a?e.color.SUCCESS[900]:a?e.color.QUATERNARY[900]:e.color.NEUTRAL[300]};
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
    border-radius: 8px;
    width: 100%;
    ${({size:e})=>z({size:e})};
    flex-grow: 1;
    border: none;
    outline: none;
    padding: 10px 0px;
    background-color: #fff;
    letter-spacing: -0.04em;
    color: ${e=>e.theme.color.NEUTRAL[700]};
    padding-left: ${({leftAddon:e})=>e?"0px":"12px"};
    padding-right: ${({rightAddon:e})=>e?"0px":"12px"};
    padding-right: ${({success:e,error:t})=>(e||t)&&"2.5rem"};

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
    ${({size:e})=>z({size:e})};
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: -0.04em;
    user-select: none;
  }

  .state {
    position: absolute;
    right: 1rem;
  }
`,U=b.forwardRef(({type:e,leftAddon:t,rightAddon:o,placeholder:a,error:i,success:n,size:c,fullWidth:s,name:d,infoMessage:u,onFocus:p,onBlur:x,onChange:w,...v},T)=>{const[S,C]=b.useState(!1),A=!i&&!n&&u&&S;return r.jsxs(r.Fragment,{children:[r.jsxs(Ae,{fullWidth:s,success:n,size:c,error:i,disabled:v.disabled,leftAddon:t,rightAddon:o,isFocused:S,children:[t&&r.jsx("span",{className:"leftAddon",children:t}),r.jsx("input",{ref:T,onFocus:y=>{p&&p(y),C(!0)},onBlur:y=>{x&&x(y),C(!1)},onChange:w,placeholder:a,type:e,name:d,...v}),o&&r.jsx("span",{className:"rightAddon",children:o}),i&&r.jsx("span",{className:"state",children:r.jsx(ke,{size:24,color:$.color.ALERT[900]})}),n&&r.jsx("span",{className:"state",children:r.jsx(Ee,{size:20,color:$.color.SUCCESS[900]})})]}),A&&r.jsx(N,{shouldAppear:A,children:r.jsx(m,{size:"xs",color:"QUATERNARY/900",children:u})})]})});U.displayName="TextInput";const Ce=h.default.div`
  width: ${e=>e.fullWidth?"100%":"auto"};

  .label-container {
    display: flex;
    justify-content: space-between;
  }

  label {
    display: inline-block;
    margin-bottom: 0.25rem;
    padding-left: 0.05rem;
  }
`,j=b.forwardRef(({label:e,type:t,error:o,isDirty:a,success:i,infoMessage:n,fullWidth:c,...s},d)=>{const u={...s,ref:d},[p,x]=b.useState(!1);return r.jsxs(Ce,{fullWidth:c,children:[e&&r.jsxs("div",{className:"label-container",children:[r.jsx(m,{as:"label",align:"left",size:"sm",color:"NEUTRAL/700",children:e}),t==="password"&&r.jsx("span",{onClick:()=>x(!p),children:p?r.jsx(we,{size:20}):r.jsx(Fe,{size:20})})]}),r.jsx(U,{error:Boolean(o),success:i||!o&&a,infoMessage:n,fullWidth:c,type:p?"text":t,...u}),o&&r.jsx(N,{shouldAppear:Boolean(o),children:r.jsx(m,{size:"xs",color:"ALERT/900",children:o})})]})});j.displayName="TextField";const Se=(e,t)=>{b.useEffect(()=>{const o=a=>{if(Array.isArray(e)){for(const i of e)if(!a.target||!i.current||i.current.contains(a.target))return}else if(!a.target||!e.current||e.current.contains(a.target))return;t(a)};return document.addEventListener("mousedown",o),document.addEventListener("touchstart",o),()=>{document.removeEventListener("mousedown",o),document.removeEventListener("touchstart",o)}},[e,t])},ye=e=>r.jsx("svg",{height:e.size||16,width:e.size||16,fill:"none",viewBox:"0 0 16 16",...e,children:r.jsx("path",{d:"M12 5.333v2.534l-4 3.067-4-3.067V5.333L8 8.4l4-3.067Z",fill:"#6B6B6B"})}),Te=e=>r.jsx("svg",{height:13,width:14,fill:"none",viewBox:"0 0 14 13",...e,children:r.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.821 1.606a4.715 4.715 0 1 0 0 9.43 4.715 4.715 0 0 0 0-9.43ZM.125 6.32A5.696 5.696 0 1 1 10.178 9.99l2.553 2.547a.49.49 0 0 1-.693.695l-2.553-2.55A5.696 5.696 0 0 1 .125 6.32Z",fill:"#242954"})}),Le=h.default.div`
  position: relative;
  width: ${({fullWidth:e})=>e?"100%":"auto"};
  ::selection {
    color: #fff;
    background: #4285f4;
  }
  .select-btn,
  li {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .select-btn {
    padding: 0 20px;
    width: 100%;
    padding: 10px 12px;
    min-height: 45px;
    background: #fff;
    border: 1px solid ${({theme:e})=>e.color.NEUTRAL[300]};
    border-radius: 0.5rem;
    justify-content: space-between;
  }

  .wrapper.active .select-btn i {
    transform: rotate(-180deg);
  }

  .content .options {
    margin-top: 10px;
    max-height: 250px;
    overflow-y: auto;
    padding-right: 7px;
  }

  li.selected {
    border-radius: 0.5rem;
    background-color: ${({theme:e})=>e.color.QUATERNARY[200]};
  }

  .options li:hover {
    border-radius: 0.5rem;
    background-color: ${({theme:e})=>e.color.QUATERNARY[100]};
  }
`,Ie=h.default.ul`
  width: ${({fullWidthOptions:e})=>e?"100%":"15rem"};
  max-height: ${({maxOptionsHeight:e})=>e?`${e}px`:"auto"};
  display: flex;
  flex-direction: column;
  background-color: #fff;
  gap: 0.5rem;
  position: absolute;
  z-index: 1;
  border-radius: 0.5rem;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
  padding: 0;
  padding: 0.438rem 0.313rem;
  .options {
    margin: 0;
    padding: 2px 0;
    overflow-y: auto;
    li {
      padding: 0.875rem 0.5rem;
      margin: 0.5rem 0.313rem;
      &:focus {
        border-radius: 0.5rem;
        outline: 2px solid ${({theme:e})=>e.color.SECONDARY[900]};
      }
    }
  }
`,_=b.forwardRef(({label:e,searchable:t=!0,autoSize:o,value:a,options:i,placeholder:n="Seleccione una opci\xF3n",fullWidth:c,fullWidthOptions:s,onChange:d,formatOptionLabel:u,formatSelectedOption:p})=>{const x=b.useRef(null),[w,v]=b.useState(i),[T,S]=b.useState(""),[C,A]=b.useState(!1);Se(x,()=>{A(!1)});const y=b.useCallback(()=>{const g=i.filter(k=>k.label.toLowerCase().includes(T.toLowerCase()));v(g)},[i,a]),V=b.useCallback(g=>{d(i.find(k=>k.label===g)),A(!1),S(""),v(i)},[y]),Ke=b.useCallback(g=>{S(g.target.value);const k=i.filter(W=>W.label.toLowerCase().includes(g.target.value.toLowerCase()));v(k)},[]),Ge=()=>{const g=x.current;if(g){const k=g.getBoundingClientRect();return window.innerHeight-k.bottom-20}};return r.jsxs(Le,{fullWidth:c,ref:x,children:[e&&r.jsx(m,{as:"label",align:"left",size:"sm",color:"NEUTRAL/700",pl:"0.05rem",mb:"0.25rem",children:e}),r.jsxs("div",{className:"select-btn",onClick:()=>A(!C),tabIndex:0,onKeyUpCapture:g=>{g.key==="Enter"&&A(!C)},children:[r.jsx(m,{as:"span",color:"NEUTRAL/700",mr:"0.5rem",children:p?p(a):u?u(a):a.label}),r.jsx(ye,{size:20})]}),C&&r.jsxs(Ie,{maxOptionsHeight:o?Ge():285,fullWidthOptions:s,children:[t&&r.jsx("div",{className:"search-box",children:r.jsx(U,{leftAddon:r.jsx(Te,{}),type:"text",placeholder:n,value:T,onChange:Ke,fullWidth:!0})}),r.jsx("div",{className:"options",children:w.map(g=>r.jsx(m,{as:"li",color:"NEUTRAL/700",className:g.value===a.value?"selected":"",tabIndex:0,onClick:()=>V(g.label),onKeyUpCapture:k=>{k.key==="Enter"&&V(g.label)},children:u?u(g):g.label},`${g.label}-${g.value}`))})]})]})});_.displayName="CustomSelect";const ze=h.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  .profile-input__container {
    display: flex;
    position: relative;
    input[type="file"] {
      position: absolute;
      background-color: red;
      width: ${({size:e})=>e}px;
      height: ${({size:e})=>e}px;
      border-radius: 50%;
      cursor: pointer;
      opacity: 0;
      &::-webkit-file-upload-button {
        visibility: hidden;
      }
    }
    img {
      border-radius: 50%;
    }
    button {
      position: absolute;
      height: ${({size:e})=>e*.3515625}px;
      width: ${({size:e})=>e*.3515625}px;
      filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25));
      bottom: 0;
      right: -5px;
    }
  }
`,Ne=({imageUrl:e,size:t=128,onChange:o})=>{const a=b.useRef(null),i=n=>{var s;const c=(s=n.target.files)==null?void 0:s[0];if(c){const d=URL.createObjectURL(c);o({file:c,url:d})}};return r.jsxs(ze,{size:t,children:[r.jsx(m,{color:"NEUTRAL/400",weight:"regular",size:"xs",children:"Agrega tu foto"}),r.jsxs("div",{className:"profile-input__container",children:[r.jsx("input",{type:"file",accept:"image/png, image/jpeg",onChange:i,ref:a}),r.jsx("img",{width:t,height:t,src:e||"/default-profile.svg",alt:"profile",referrerPolicy:"no-referrer"}),r.jsx(P,{type:"button",size:"lg",design:"flat",shape:"circular",onClick:()=>{var n;return(n=a.current)==null?void 0:n.click()},children:"+"})]})]})},Ue=l.keyframes`
  0%,
  100% {
    animation-timing-function: cubic-bezier(0.2 0 0.8 0.8);
  }
  50% {
    animation-timing-function: cubic-bezier(0.2 0.2 0.8 1);
  }
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,Be=l.keyframes`
  0%,
  100% {
    animation-timing-function: cubic-bezier(0.2 0 0.8 0.8);
  }
  50% {
    animation-timing-function: cubic-bezier(0.2 0.2 0.8 1);
  }
  0% {
    transform: translate(-30px, -30px) scale(0);
  }
  50% {
    transform: translate(-30px, -30px) scale(1);
  }
  100% {
    transform: translate(-30px, -30px) scale(0);
  }
`,Ye=h.default.div`
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
  background-color: transparent;

  .idbi-loading {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0; /* see note above */
  }

  .idbi-loading div {
    box-sizing: content-box;
  }

  .idbi-loading > div {
    transform: translate(0px, -15px);
  }
  .idbi-loading > div > div {
    animation: ${Ue} 1s linear infinite;
    transform-origin: 100px 100px;
  }
  .idbi-loading > div > div > div {
    position: absolute;
    transform: translate(100px, 82px);
  }
  .idbi-loading > div > div > div > div {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: ${({theme:e})=>e.color.PRIMARY[900]};
    animation: ${Be} 1s linear infinite;
  }
  .idbi-loading > div > div:last-child {
    animation-delay: -0.5s;
  }
  .idbi-loading > div > div:last-child > div > div {
    animation-delay: -0.5s;
    background-color: ${({theme:e})=>e.color.TERTIARY[900]};
  }
`,De=()=>r.jsx(Ye,{children:r.jsx("div",{className:"idbi-loading",children:r.jsxs("div",{children:[r.jsx("div",{children:r.jsx("div",{children:r.jsx("div",{})})}),r.jsx("div",{children:r.jsx("div",{children:r.jsx("div",{})})})]})})}),Me=h.default.section`
  width: 100%;
  border-radius: 0.625rem;
  header {
    border-bottom: 1px solid #e5e5e5;
  }
  ul {
    margin: 0;
    padding: 0;
    & li {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    & li > *:first-child {
      border-radius: 0;
    }

    & li:first-child > *:first-child {
      border-top-left-radius: 0.625rem;
      border-top-right-radius: 0.625rem;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    & li:last-child > *:first-child {
      border-bottom-left-radius: 0.625rem;
      border-bottom-right-radius: 0.625rem;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }

    ${({withSeparator:e})=>e&&l.css`
        & li:not(:last-child) {
          border-bottom: 1px solid #e5e5e5;
        }
      `}
  }
  ${({theme:e,design:t})=>{switch(t){case"primary":return l.css`
          background-color: #fff;
          box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
          -webkit-box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
          -moz-box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
        `;case"secondary":return l.css`
          background-color: ${e.color.QUATERNARY[300]};
        `;case"flat":return l.css`
          background-color: transparent;
        `;default:return e.color.NEUTRAL[100]}}};
`,He=({design:e="primary",header:t,options:o,optionsFormatter:a,content:i,withSeparator:n})=>r.jsxs(Me,{design:e,withSeparator:n,children:[t&&r.jsx("header",{children:t}),o&&a&&r.jsx("ul",{children:o.map(c=>r.jsx("li",{children:a(c)},c.value))}),i&&i]}),Pe=e=>r.jsx("svg",{width:e.size||24,height:e.size||25,fill:"none",viewBox:"0 0 24 25",...e,children:e.isChecked?r.jsxs(r.Fragment,{children:[r.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M22.53 3.97a.75.75 0 0 1 0 1.06l-10 10a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06L12 13.44l9.47-9.47a.75.75 0 0 1 1.06 0Z",fill:"#4318FF"}),r.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5 4.25A1.25 1.25 0 0 0 3.75 5.5v14A1.25 1.25 0 0 0 5 20.75h14a1.25 1.25 0 0 0 1.25-1.25v-7a.75.75 0 0 1 1.5 0v7A2.75 2.75 0 0 1 19 22.25H5a2.75 2.75 0 0 1-2.75-2.75v-14A2.75 2.75 0 0 1 5 2.75h11a.75.75 0 0 1 0 1.5H5Z",fill:"#4318FF"})]}):r.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5 4.25c-.69 0-1.25.56-1.25 1.25v14c0 .69.56 1.25 1.25 1.25h14c.69 0 1.25-.56 1.25-1.25v-14c0-.69-.56-1.25-1.25-1.25H5ZM2.25 5.5A2.75 2.75 0 0 1 5 2.75h14a2.75 2.75 0 0 1 2.75 2.75v14A2.75 2.75 0 0 1 19 22.25H5a2.75 2.75 0 0 1-2.75-2.75v-14Z",fill:"#4318FF"})}),Oe=h.default(I.Root)`
  width: 100%;
  background-color: #fff;
  box-shadow: ${({theme:e})=>e.effect.darkShadow[4]};
  border-radius: 0.5rem;
`,je=h.default(I.Trigger)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  cursor: pointer;
  background-color: transparent;
  border: none;
`,_e=l.keyframes`
  from {
    height: 0;
  }
  to {
    height: var(--radix-collapsible-content-height);
  }
`,Ve=l.keyframes`
  from {
    height: var(--radix-collapsible-content-height);
  }
  to {
    height: 0;
  }
`,We=h.default(I.Content)`
  overflow: hidden;
  &[data-state="open"] {
    animation: ${_e} 300ms ease-out;
  }
  &[data-state="closed"] {
    animation: ${Ve} 300ms ease-out;
  }
`,Ze=({open:e,setOpen:t,label:o,content:a})=>r.jsxs(Oe,{open:e,onOpenChange:t,children:[r.jsxs(je,{children:[r.jsx(m,{children:o}),r.jsx(Pe,{isChecked:e})]}),r.jsx(We,{children:a})]}),Re=e=>r.jsx("svg",{width:e.size||8,height:e.size||12,fill:"none",viewBox:"0 0 8 12",...e,children:r.jsx("path",{d:"m3.069 6.003 4.73-4.49a.634.634 0 0 0 0-.928L7.384.192A.705.705 0 0 0 6.895 0a.705.705 0 0 0-.489.192L.774 5.537a.634.634 0 0 0-.202.465c0 .177.071.342.202.466l5.627 5.34c.13.124.304.192.49.192a.706.706 0 0 0 .488-.192l.415-.393a.634.634 0 0 0 0-.928L3.069 6.003Z",fill:"#151E5A"})}),Qe=h.default.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 1;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  box-shadow: ${({theme:e})=>e.effect.darkShadow[6]};

  button {
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    gap: 0.5rem;
    height: 100%;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }

  img {
    border-radius: 50%;
  }
`,qe=({onBack:e,backLabel:t,profileImageUrl:o})=>r.jsxs(Qe,{children:[r.jsxs("button",{type:"button",onClick:e,children:[r.jsx(Re,{}),r.jsx(m,{color:"NEUTRAL/900",children:t})]}),r.jsx("img",{width:28,height:28,src:o||"/default-profile.svg",alt:"profile",referrerPolicy:"no-referrer"})]});f.Button=P,f.Card=He,f.CodeInput=ge,f.Collapsible=Ze,f.CustomSelect=_,f.Heading=fe,f.Loader=De,f.ProfileImage=Ne,f.SelectField=me,f.StickyHeader=qe,f.Text=m,f.TextField=j,Object.defineProperties(f,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
