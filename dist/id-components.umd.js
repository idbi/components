(function(g,c){typeof exports=="object"&&typeof module<"u"?c(exports,require("styled-components"),require("react/jsx-runtime"),require("react"),require("react-loading-skeleton"),require("react-select"),require("@radix-ui/react-collapsible"),require("@floating-ui/react-dom")):typeof define=="function"&&define.amd?define(["exports","styled-components","react/jsx-runtime","react","react-loading-skeleton","react-select","@radix-ui/react-collapsible","@floating-ui/react-dom"],c):(g=typeof globalThis<"u"?globalThis:g||self,c(g["ID-Components"]={},g.styled,g["react/jsx-runtime"].js,g.React,g.Skeleton,g.Select,g["@radix-ui/react-collapsible"],g["@floating-ui/react-dom"]))})(this,function(g,c,t,b,R,ee,te,M){"use strict";const L=e=>e&&typeof e=="object"&&"default"in e?e:{default:e};function re(e){if(e&&e.__esModule)return e;const r=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const o in e)if(o!=="default"){const a=Object.getOwnPropertyDescriptor(e,o);Object.defineProperty(r,o,a.get?a:{enumerable:!0,get:()=>e[o]})}}return r.default=e,Object.freeze(r)}const u=L(c),oe=L(R),ie=L(ee),z=re(te),ne={bold:700,medium:500,regular:400,light:300},Y={xs:"0.750rem",sm:"0.875rem	",md:"1.0rem",lg:"1.250rem",xl:"1.5rem","2xl":"1.875rem","3xl":"2.0rem","4xl":"2.5rem","5xl":"3.0rem"},D={h1:"xl",h2:"lg",h3:"md",h4:"sm",h5:"xs",h6:"xs",text:"sm"},s={color:{NEUTRAL:{0:"#FFFFFF",20:"#FFFFFF",50:"#F5F5F5",100:"#EBEBEB",200:"#dfdfdf",300:"#bfbfbf",400:"#9f9f9f",500:"#808080",600:"#404040",700:"#383838",800:"#202020",900:"#000000"},PRIMARY:{0:"#FFFFFF",50:"#F1F2F9",100:"#E6E8F4",200:"#DDDFF0",300:"#BBBFE2",400:"#999FD3",500:"#777fc5",600:"#545fb6",700:"#414a98",800:"#333a76",900:"#242954"},SECONDARY:{0:"#FFFFFF",20:"#F7F5FF",50:"#EFEBFF",100:"#E6E0FF",200:"#d0c5ff",300:"#d0c5ff",400:"#b9a8ff",500:"#a18cff",600:"#8a6fff",700:"#7252ff",800:"#5b35ff",900:"#4318FF"},TERTIARY:{0:"#FFFFFF",50:"#FFFAFC",100:"#FFF5F9",200:"#ffeff5",300:"#ffe0eb",400:"#ffd0e1",500:"#ffc1d7",600:"#ffb1cd",700:"#FFA1C3",800:"#ff92b9",900:"#FF82AF"},QUATERNARY:{0:"#FFFFFF",50:"#FBFCFE",100:"#F2F6FD",200:"#ebf1fc",300:"#D8E4FA",400:"#c4d6f8",500:"#b0c8f5",600:"#9cbbf3",700:"#88adf0",800:"#75a0ed",900:"#6192EB"},STATE:{0:"#FFFFFF",50:"#FFFBF5",100:"#FEF7EB",200:"#fef3e3",300:"#fde7c6",400:"#fcdba9",500:"#fbcf8d",600:"#fac270",700:"#f9b654",800:"#f8aa38",900:"#F79E1B"},ALERT:{0:"#FFFFFF",50:"#FFFBF5",100:"#FEEDEC",200:"#fde3e2",300:"#fbc8c5",400:"#f9ada8",500:"#f7918b",600:"#f4756d",700:"#F25A50",800:"#F03E33",900:"#EE2316"},SUCCESS:{0:"#FFFFFF",50:"#F7FDFA",100:"#EEFBF4",200:"#e4f9ed",300:"#c9f3db",400:"#aeedc9",500:"#93e7b7",600:"#78e1a4",700:"#5DDB92",800:"#42D580",900:"#2DC96F"},OTHER:{color1:"#151E5A"}},effect:{darkShadow:{4:"0px 0px 4px 1px rgba(139, 139, 139, 0.32)",6:"0px 1px 6px rgba(60, 60, 60, 0.2)",8:"0px 1px 6px rgba(107, 107, 107, 0.2)",12:"0px 0px 12px 2px #F6F6F6",24:"0px 0px 24px 4px rgba(0, 14, 51, 0.2)",30:"0px 10px 30px rgba(0, 0, 0, 0.08)"},lightShadow:{2:"0px 0px 2px 1px rgba(149, 178, 254, 0.2)",16:"0px 4px 16px rgba(153, 181, 255, 0.2)"}}},ae=({shape:e})=>{switch(e){case"rounded":return c.css`
        border-radius: 0.625rem;
      `;case"squared":return c.css`
        border-radius: 0;
      `;case"circular":return c.css`
        border-radius: 10rem;
      `;default:return c.css`
        border-radius: 0.625rem;
      `}},P=({design:e,color:r})=>{switch(e){case"solid":return c.css`
        background-color: ${()=>w({color:r})};
        color: #fff;
      `;case"outline":return c.css`
        background-color: white;
        border: 1px solid ${()=>w({color:r})};
        color: ${()=>w({color:r})};
      `;case"flat":return c.css`
        background-color: white;
        border: none;
        color: ${()=>w({color:r})};
      `;case"link":return c.css`
        background-color: transparent;
        border: none;
        color: ${()=>w({color:r})};

        &:hover {
          color: ${()=>w({color:r,hover:!0})};
          text-decoration: underline;
        }
      `;default:return c.css`
        background-color: ${()=>w({color:r})};
        color: #fff;
      `}},w=({color:e="SECONDARY/900",design:r,hover:o})=>{const a=e.split("/"),n=a[0];let i=+a[1];if(o&&i>=300)switch(r){case"solid":i-=100;break;case"outline":i=100;break;case"flat":i=100;break;default:i>=400?i-=100:i+=100;break}if(o&&i<300)switch(r){case"solid":i+=100;break;case"outline":i=100;break;case"flat":i=100;break;default:i-=100;break}return n==="PRIMARY"||n==="NEUTRAL"||n==="SECONDARY"||n==="TERTIARY"||n==="QUATERNARY"||n==="STATE"||n==="ALERT"||n==="SUCCESS"?i===50||i===100||i===200||i===300||i===400||i===500||i===600||i===700||i===800||i===900?s.color[n][i]:s.color[n][900]:s.color.PRIMARY[900]},H=({fullWidth:e})=>e?c.css`
      width: 100%;
    `:c.css`
    width: auto;
  `,le=({isLoading:e})=>e?c.css`
      cursor: not-allowed;
      opacity: 0.5;
    `:c.css`
    cursor: pointer;
    opacity: 1;
  `,ce=({disabled:e})=>e?c.css`
      cursor: not-allowed;
      opacity: 0.5;
    `:c.css`
    cursor: pointer;
    opacity: 1;
  `,I=({size:e="sm"})=>c.css`
    font-size: ${Y[e]||e};
  `,se=({align:e})=>e?c.css`
      text-align: ${e};
    `:c.css`
    text-align: left;
  `,O=e=>{let r="";return e.m&&(r+=`
      margin-top: ${e.m};
      margin-bottom: ${e.m};
      margin-left: ${e.m};
      margin-right: ${e.m};
    `),e.mb&&(r+=`
      margin-bottom: ${e.mb};
    `),e.mt&&(r+=`
      margin-top: ${e.mt};
    `),e.ml&&(r+=`
      margin-left: ${e.ml};
    `),e.mr&&(r+=`
      margin-right: ${e.mr};
    `),e.mx&&(r+=`
      margin-left: ${e.mx};
      margin-right: ${e.mx};
    `),e.my&&(r+=`
      margin-top: ${e.my};
      margin-bottom: ${e.my};
    `),e.p&&(r+=`
      padding-top: ${e.p};
      padding-bottom: ${e.p};
      padding-left: ${e.p};
      padding-right: ${e.p};
    `),e.pb&&(r+=`
      padding-bottom: ${e.pb};
    `),e.pt&&(r+=`
      padding-top: ${e.pt};
    `),e.pl&&(r+=`
      padding-left: ${e.pl};
    `),e.pr&&(r+=`
      padding-right: ${e.pr};
    `),e.px&&(r+=`
      padding-left: ${e.px};
      padding-right: ${e.px};
    `),e.py&&(r+=`
      padding-top: ${e.py};
      padding-bottom: ${e.py};
    `),c.css`
    ${r}
  `},de=u.default.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
`,fe=u.default(de)`
  display: inline-flex;
  gap: 0.5rem;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease-out;
  padding: ${({design:e})=>e==="link"?"0":"0.7rem"};
  min-height: ${({design:e})=>e==="link"?"0":"45px"};

  ${({size:e})=>I({size:e})};
  ${({shape:e})=>ae({shape:e})};
  ${({design:e,color:r})=>P({design:e,color:r})};
  ${({fullWidth:e})=>H({fullWidth:e})};
  ${({isLoading:e})=>le({isLoading:e})};
  ${({disabled:e})=>ce({disabled:e})};
  ${({m:e,mb:r,mt:o,mr:a,ml:n,my:i,mx:l,p:f,pb:d,pt:h,pr:p,pl:m,py:k,px:$})=>O({m:e,mb:r,mt:o,mr:a,ml:n,my:i,mx:l,p:f,pb:d,pt:h,pr:p,pl:m,py:k,px:$})};

  &:hover {
    background-color: ${({color:e,design:r})=>r==="link"?"transparent":w({color:e,design:r,hover:!0})};
  }

  &:active {
    background-color: ${({color:e,design:r})=>r==="link"?"transparent":w({color:e,design:r,hover:!0})};
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:disabled:hover {
    ${({design:e,color:r})=>P({design:e,color:r})};
  }
`,j=({children:e,...r})=>t.jsxs(fe,{...r,children:[r.leftIcon,e,r.rightIcon]});function he(e,r,o){const a=()=>{const n=document.querySelectorAll("input");return Array.from(n).filter(l=>l.className===r)};b.useEffect(()=>{const n=i=>{i.key==="Backspace"&&setTimeout(()=>{const l=a(),f=document.activeElement;f.value="";const d=l.indexOf(f);d>0&&l[d-1].focus()},0)};return document.addEventListener("keydown",n),()=>document.removeEventListener("keydown",n)},[]),b.useEffect(()=>{const n=i=>{if(i.key!=="Backspace"){const l=i.key.toLowerCase();setTimeout(()=>{if(l.length===1){const f=a(),d=document.activeElement;d.value=l;const h=f.indexOf(d);h<f.length-1&&f[h+1].focus()}},0)}};return document.addEventListener("keydown",n),()=>document.removeEventListener("keydown",n)},[]),b.useEffect(()=>{if(e){const n=i=>{const l=i.key.toLowerCase();(l.length===1||l==="backspace")&&setTimeout(()=>{const d=a().map(h=>h.value).join("");e(d)},0)};return document.addEventListener("keydown",n),()=>document.removeEventListener("keydown",n)}},[]),b.useEffect(()=>{if(o){const n=a(),i=n.map(d=>d.value),l=o.split(""),f=l.length===i.length?l:i;n.forEach((d,h)=>{const p=f[h];p&&(d.value=p)})}},[o])}const ue=c.keyframes`
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
`,N=u.default.div`
  opacity: 0;
  ${({shouldAppear:e})=>e&&c.css`
      animation: ${ue} 0.2s ease-in;
      animation-fill-mode: forwards;
    `}
`,ge={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",p:"p",li:"li",span:"span",strong:"strong",label:"label"},pe=c.css`
  display: inline-block;
  font-family: "Poppins";
  font-style: normal;
  line-height: 24px;
  letter-spacing: -0.04rem;
  ${({align:e})=>se({align:e})}
  ${({m:e,mb:r,mt:o,mr:a,ml:n,my:i,mx:l,p:f,pb:d,pt:h,pr:p,pl:m,py:k,px:$})=>O({m:e,mb:r,mt:o,mr:a,ml:n,my:i,mx:l,p:f,pb:d,pt:h,pr:p,pl:m,py:k,px:$})};
`,be=e=>{const r=e==="h1"||e==="h2"||e==="h3"||e==="h4"||e==="h5"||e==="h6",o=r?"bold":"medium",a=r?D[e]:D.text,n="PRIMARY/900";return c.css`
    font-weight: ${({weight:i=o})=>ne[i]||"500"};
    font-size: ${({size:i=a})=>Y[i]||i};
    color: ${({color:i=n})=>{const l=i==null?void 0:i.split("/")[0],f=Number(i==null?void 0:i.split("/")[1]);return s.color[l][f]}};
  `},xe=u.default.div`
  ${pe}
  ${({as:e})=>be(e)}
`,E=({as:e,...r})=>{const o=ge[e];return t.jsx(xe,{as:o,...r})},me={H1:e=>t.jsx(E,{as:"h1",...e}),H2:e=>t.jsx(E,{as:"h2",...e}),H3:e=>t.jsx(E,{as:"h3",...e}),H4:e=>t.jsx(E,{as:"h4",...e}),H5:e=>t.jsx(E,{as:"h5",...e}),H6:e=>t.jsx(E,{as:"h6",...e})},ve=u.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
  transition: 0.3s ease-out;
`,v=e=>e.rightIcon||e.leftIcon?t.jsxs(ve,{children:[e.leftIcon,t.jsx(E,{as:e.as||"p",...e}),e.rightIcon]}):t.jsx(E,{as:e.as||"p",...e}),$e=u.default.div`
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
      ${({errorMessage:e,success:r})=>e?s.color.ALERT[900]:r?s.color.SUCCESS[900]:s.color.NEUTRAL[300]};
    border-radius: 8px;
    background: #fff;
    font: normal 16px "Poppins";
    letter-spacing: -0.04em;
    color: ${()=>s.color.NEUTRAL[700]};

    transition: background 0.3s ease-out;
    transition: border 0.3s ease-out;

    &:disabled {
      cursor: not-allowed;
      background-color: ${()=>s.color.NEUTRAL[100]};
      color: ${()=>s.color.NEUTRAL[500]};
    }

    &:focus {
      border-color: ${()=>s.color.QUATERNARY[900]};
    }
  }
`,we=u.default.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`,ke=({id:e,value:r,length:o=4,errorMessage:a,success:n,onChange:i=()=>{},...l})=>(he(i,e,r),t.jsxs(we,{children:[t.jsx($e,{length:o,success:n,errorMessage:a,children:Array.from({length:o}).map((f,d)=>t.jsx("input",{id:d.toString(),className:e,maxLength:1,...l},d))}),a&&t.jsx(N,{shouldAppear:Boolean(a),children:t.jsx(v,{size:"xs",weight:"light",color:"ALERT/900",children:a})})]})),Fe=u.default.div`
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
    color: ${()=>s.color.ALERT[900]};
    margin-left: 2px;
    margin-top: 3px;
  }

  & > span {
    width: 100%;
  }
`,Ee={control:(e,r)=>({...e,minHeight:"45px",borderRadius:10,backgroundColor:"#ffffff",border:`1px solid ${r.isFocused?s.color.QUATERNARY[900]:s.color.NEUTRAL[300]}`,boxShadow:"none",cursor:"pointer"}),singleValue:()=>({color:s.color.PRIMARY[900],fontWeight:500,fontSize:"14px"}),placeholder:e=>({...e,color:s.color.NEUTRAL[700]}),indicatorSeparator:e=>({...e,display:"none",padding:0}),indicatorsContainer:e=>({...e,"> div":{padding:"0",paddingRight:"3px"}}),valueContainer:e=>({...e,padding:0,paddingLeft:"6px"})},Ae=({formatOptionLabel:e,options:r,loading:o=!1,style:a,error:n,firstOption:i,initialValue:l,value:f,onChange:d,isMulti:h,placeholder:p,label:m})=>{const k=i||{label:"Seleccione una opci\xF3n",value:""},$=[...r];return t.jsxs(Fe,{style:a,hasError:!!n,children:[m&&t.jsx(v,{as:"label",align:"left",size:"sm",color:"NEUTRAL/700",children:m}),o?t.jsx(oe.default,{style:{borderRadius:10},className:"loading-skeleton",height:46,width:"100%"}):t.jsx(ie.default,{placeholder:p,value:f||void 0,defaultValue:l||k,options:$,onChange:d,styles:Ee,isMulti:h,formatOptionLabel:e})]})},Ce=u.default.div`
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

  ${e=>e.variant=="V1"&&c.css`
      ${r=>r.active&&c.css`
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
  ${e=>e.variant=="V2"&&c.css`
      ${r=>r.active&&c.css`
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
`,ye=u.default.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${e=>e.size}px;
  height: ${e=>e.size}px;
  fill: ${e=>e.color||e.theme.color.PRIMARY[900]};
  ${e=>e.variant==="V1"&&c.css`
      ${r=>r.active&&c.css`
          fill: #fff;
        `}
    `}
  ${e=>e.variant==="V2"&&c.css`
      fill: ${r=>r.theme.color.NEUTRAL[400]};
      ${r=>r.active&&c.css`
          fill: ${o=>o.color||o.theme.color.PRIMARY[900]};
        `}
    `}
`,W=e=>{const{children:r,color:o,size:a,viewBox:n,active:i,borderRadius:l,variant:f}=e;return t.jsx(Ce,{active:i,size:a||24,borderRadius:l||"50%",variant:f||"V1",color:o,children:t.jsx(ye,{active:i,color:o,size:a||24,viewBox:n||"0 0 32 32",variant:f||"V1",children:r})})},Se=e=>{const{color:r,size:o}=e;return t.jsx(W,{color:r,size:o,viewBox:"0 0 22 13",fill:"none",children:t.jsx("path",{d:"M19 1.406s-.32.772-1 1.752m-7 4.031a7.587 7.587 0 0 1-4.051-1.157M11 7.19a7.587 7.587 0 0 0 4.051-1.157M11 7.19v4.048m-8-9.83s.354.851 1.106 1.901M6.95 6.033 4 9.502m2.949-3.47c-1.26-.778-2.198-1.824-2.843-2.724m10.945 2.724 2.449 3.47m-2.449-3.47C16.381 5.21 17.354 4.09 18 3.158m-13.894.15L1 4.877m17-1.718 3 1.718",stroke:"#242954",strokeWidth:2,strokeLinecap:"round"})})},Te=e=>{const{color:r,size:o}=e;return t.jsx(W,{color:r,size:o,viewBox:"0 0 22 19",fill:"none",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 2.75c-3.089 0-6.002 1.167-8.524 3.239a.75.75 0 1 1-.952-1.16C4.274 2.57 7.515 1.25 11 1.25c3.485 0 6.726 1.32 9.476 3.58a.75.75 0 1 1-.952 1.159C17.002 3.917 14.089 2.75 11 2.75Zm-8.249 8.454v.002c.006.02.025.103.1.259.09.187.234.424.434.697.4.546.99 1.19 1.73 1.804 1.488 1.238 3.487 2.284 5.639 2.284 2.163 0 4.343-1.055 6.016-2.308.829-.62 1.506-1.27 1.968-1.819.231-.276.398-.514.503-.7a1.31 1.31 0 0 0 .102-.219 1.315 1.315 0 0 0-.102-.218 4.803 4.803 0 0 0-.503-.7c-.462-.55-1.14-1.198-1.968-1.82a13.63 13.63 0 0 0-1.87-1.179c.264.57.412 1.203.412 1.872 0 2.496-2.052 4.5-4.558 4.5s-4.558-2.004-4.558-4.5c0-.615.125-1.2.35-1.734-.515.309-.995.655-1.432 1.018a10.49 10.49 0 0 0-1.729 1.804c-.2.273-.343.51-.434.697-.075.156-.094.238-.1.26 0 0 0 0 0 0Zm7.903-6.545c-2.627 0-4.955 1.264-6.599 2.63a11.982 11.982 0 0 0-1.98 2.072 6.141 6.141 0 0 0-.575.931c-.13.27-.25.594-.25.912 0 .319.12.643.25.913.14.29.337.606.575.931a11.98 11.98 0 0 0 1.98 2.071c1.644 1.367 3.972 2.631 6.599 2.631 2.616 0 5.11-1.255 6.915-2.607.91-.682 1.673-1.408 2.217-2.055.271-.323.498-.638.662-.93.15-.265.302-.606.302-.954 0-.347-.153-.688-.302-.953a6.264 6.264 0 0 0-.662-.93c-.544-.647-1.307-1.373-2.217-2.055-1.806-1.352-4.299-2.607-6.915-2.607Zm0 1.5c-1.7 0-3.058 1.354-3.058 3s1.358 3 3.058 3c1.7 0 3.058-1.354 3.058-3s-1.359-3-3.058-3Z",fill:"#242954",stroke:"#242954",strokeLinecap:"round"})})},Le=e=>t.jsx("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:0,color:e.color||"#EE2316",height:24,width:24,viewBox:"0 0 24 24",...e,children:t.jsxs("g",{stroke:"none",children:[t.jsx("path",{fill:"none",d:"M0 0h24v24H0z"}),t.jsx("path",{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z"})]})}),ze=e=>t.jsx("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:0,color:e.color||"#2DC96F",height:20,width:20,viewBox:"0 0 1024 1024",...e,children:t.jsx("path",{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z",stroke:"none"})}),Ie=u.default.div`
  ${({fullWidth:e})=>H({fullWidth:e})};
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 8px;
  border: 1px solid
    ${({error:e,success:r,isFocused:o})=>e?s.color.ALERT[900]:r&&o?s.color.SUCCESS[900]:o?s.color.QUATERNARY[900]:s.color.NEUTRAL[300]};
  background: #fff;
  min-height: 45px;
  ::placeholder {
    color: ${()=>s.color.NEUTRAL[500]};
  }

  background-color: ${({disabled:e})=>e?s.color.NEUTRAL[100]:"#fff"};
  cursor: ${({disabled:e})=>e?"not-allowed":"auto"};
  transition: background 0.3s ease-out;
  transition: border 0.3s ease-out;

  > input {
    border-radius: 8px;
    width: 100%;
    ${({size:e})=>I({size:e})};
    flex-grow: 1;
    border: none;
    outline: none;
    padding: 10px 0px;
    background-color: #fff;
    letter-spacing: -0.04em;
    color: ${()=>s.color.NEUTRAL[700]};
    padding-left: ${({leftAddon:e})=>e?"0px":"12px"};
    padding-right: ${({rightAddon:e})=>e?"0px":"12px"};
    padding-right: ${({success:e,error:r})=>(e||r)&&"2.5rem"};

    &:disabled {
      cursor: not-allowed;
      background-color: ${()=>s.color.NEUTRAL[100]};
      color: ${()=>s.color.NEUTRAL[500]};
    }
  }

  .leftAddon {
    padding-left: 12px;
  }

  .rightAddon {
    padding-right: 12px;
  }

  span {
    color: ${()=>s.color.NEUTRAL[500]};
    ${({size:e})=>I({size:e})};
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
`,U=b.forwardRef(({type:e,leftAddon:r,rightAddon:o,placeholder:a,error:n,success:i,size:l,fullWidth:f,name:d,infoMessage:h,onFocus:p,onBlur:m,onChange:k,...$},T)=>{const[y,C]=b.useState(!1),A=!n&&!i&&h&&y;return t.jsxs(t.Fragment,{children:[t.jsxs(Ie,{fullWidth:f,success:i,size:l,error:n,disabled:$.disabled,leftAddon:r,rightAddon:o,isFocused:y,children:[r&&t.jsx("span",{className:"leftAddon",children:r}),t.jsx("input",{ref:T,onFocus:S=>{p&&p(S),C(!0)},onBlur:S=>{m&&m(S),C(!1)},onChange:k,placeholder:a,type:e,name:d,...$}),o&&t.jsx("span",{className:"rightAddon",children:o}),n&&t.jsx("span",{className:"state",children:t.jsx(Le,{size:24,color:s.color.ALERT[900]})}),i&&t.jsx("span",{className:"state",children:t.jsx(ze,{size:20,color:s.color.SUCCESS[900]})})]}),A&&t.jsx(N,{shouldAppear:A,children:t.jsx(v,{size:"xs",color:"QUATERNARY/900",children:h})})]})});U.displayName="TextInput";const Ne=u.default.div`
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
`,_=b.forwardRef(({label:e,type:r,error:o,isDirty:a,success:n,infoMessage:i,fullWidth:l,...f},d)=>{const h={...f,ref:d},[p,m]=b.useState(!1);return t.jsxs(Ne,{fullWidth:l,children:[e&&t.jsxs("div",{className:"label-container",children:[t.jsx(v,{as:"label",align:"left",size:"sm",color:"NEUTRAL/700",children:e}),r==="password"&&t.jsx("span",{onClick:()=>m(!p),children:p?t.jsx(Te,{size:20}):t.jsx(Se,{size:20})})]}),t.jsx(U,{error:Boolean(o),success:n||!o&&a,infoMessage:i,fullWidth:l,type:p?"text":r,...h}),o&&t.jsx(N,{shouldAppear:Boolean(o),children:t.jsx(v,{size:"xs",color:"ALERT/900",children:o})})]})});_.displayName="TextField";const V=(e,r)=>{b.useEffect(()=>{const o=a=>{if(Array.isArray(e)){for(const n of e)if(!a.target||!n.current||n.current.contains(a.target))return}else if(!a.target||!e.current||e.current.contains(a.target))return;r(a)};return document.addEventListener("mousedown",o),document.addEventListener("touchstart",o),()=>{document.removeEventListener("mousedown",o),document.removeEventListener("touchstart",o)}},[e,r])},Z=e=>t.jsx("svg",{height:e.size||16,width:e.size||16,fill:"none",viewBox:"0 0 16 16",...e,children:t.jsx("path",{d:"M12 5.333v2.534l-4 3.067-4-3.067V5.333L8 8.4l4-3.067Z",fill:"#6B6B6B"})}),Ue=e=>t.jsx("svg",{height:13,width:14,fill:"none",viewBox:"0 0 14 13",...e,children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.821 1.606a4.715 4.715 0 1 0 0 9.43 4.715 4.715 0 0 0 0-9.43ZM.125 6.32A5.696 5.696 0 1 1 10.178 9.99l2.553 2.547a.49.49 0 0 1-.693.695l-2.553-2.55A5.696 5.696 0 0 1 .125 6.32Z",fill:"#242954"})}),Be=u.default.div`
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
    border: 1px solid ${()=>s.color.NEUTRAL[300]};
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
    background-color: ${()=>s.color.QUATERNARY[200]};
  }

  .options li:hover {
    border-radius: 0.5rem;
    background-color: ${()=>s.color.QUATERNARY[100]};
  }
`,Me=u.default.ul`
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
        outline: 2px solid ${()=>s.color.SECONDARY[900]};
      }
    }
  }
`,q=b.forwardRef(({label:e,searchable:r=!0,autoSize:o,value:a,options:n,placeholder:i="Seleccione una opci\xF3n",fullWidth:l,fullWidthOptions:f,onChange:d,formatOptionLabel:h,formatSelectedOption:p})=>{const m=b.useRef(null),[k,$]=b.useState(n),[T,y]=b.useState(""),[C,A]=b.useState(!1);V(m,()=>{A(!1)});const S=b.useCallback(()=>{const x=n.filter(F=>F.label.toLowerCase().includes(T.toLowerCase()));$(x)},[n,a]),J=b.useCallback(x=>{d(n.find(F=>F.label===x)),A(!1),y(""),$(n)},[S]),lt=b.useCallback(x=>{y(x.target.value);const F=n.filter(X=>X.label.toLowerCase().includes(x.target.value.toLowerCase()));$(F)},[]),ct=()=>{const x=m.current;if(x){const F=x.getBoundingClientRect();return window.innerHeight-F.bottom-20}};return t.jsxs(Be,{fullWidth:l,ref:m,children:[e&&t.jsx(v,{as:"label",align:"left",size:"sm",color:"NEUTRAL/700",pl:"0.05rem",mb:"0.25rem",children:e}),t.jsxs("div",{className:"select-btn",onClick:()=>A(!C),tabIndex:0,onKeyUpCapture:x=>{x.key==="Enter"&&A(!C)},children:[t.jsx(v,{as:"span",color:"NEUTRAL/700",mr:"0.5rem",children:p?p(a):h?h(a):a.label}),t.jsx(Z,{size:20})]}),C&&t.jsxs(Me,{maxOptionsHeight:o?ct():285,fullWidthOptions:f,children:[r&&t.jsx("div",{className:"search-box",children:t.jsx(U,{leftAddon:t.jsx(Ue,{}),type:"text",placeholder:i,value:T,onChange:lt,fullWidth:!0})}),t.jsx("div",{className:"options",children:k.map(x=>t.jsx(v,{as:"li",color:"NEUTRAL/700",className:x.value===a.value?"selected":"",tabIndex:0,onClick:()=>J(x.label),onKeyUpCapture:F=>{F.key==="Enter"&&J(x.label)},children:h?h(x):x.label},`${x.label}-${x.value}`))})]})]})});q.displayName="CustomSelect";const Ye=u.default.div`
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
`,De=({imageUrl:e,size:r=128,onChange:o})=>{const a=b.useRef(null),n=i=>{var f;const l=(f=i.target.files)==null?void 0:f[0];if(l){const d=URL.createObjectURL(l);o({file:l,url:d})}};return t.jsxs(Ye,{size:r,children:[t.jsx(v,{color:"NEUTRAL/400",weight:"regular",size:"xs",children:"Agrega tu foto"}),t.jsxs("div",{className:"profile-input__container",children:[t.jsx("input",{type:"file",accept:"image/png, image/jpeg",onChange:n,ref:a}),t.jsx("img",{width:r,height:r,src:e||"/default-profile.svg",alt:"profile",referrerPolicy:"no-referrer"}),t.jsx(j,{type:"button",size:"lg",design:"flat",shape:"circular",onClick:()=>{var i;return(i=a.current)==null?void 0:i.click()},children:"+"})]})]})},Pe=c.keyframes`
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
`,He=c.keyframes`
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
`,Oe=u.default.div`
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
    animation: ${Pe} 1s linear infinite;
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
    background-color: ${()=>s.color.PRIMARY[900]};
    animation: ${He} 1s linear infinite;
  }
  .idbi-loading > div > div:last-child {
    animation-delay: -0.5s;
  }
  .idbi-loading > div > div:last-child > div > div {
    animation-delay: -0.5s;
    background-color: ${()=>s.color.TERTIARY[900]};
  }
`,je=()=>t.jsx(Oe,{children:t.jsx("div",{className:"idbi-loading",children:t.jsxs("div",{children:[t.jsx("div",{children:t.jsx("div",{children:t.jsx("div",{})})}),t.jsx("div",{children:t.jsx("div",{children:t.jsx("div",{})})})]})})}),We=u.default.section`
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

    ${({withSeparator:e})=>e&&c.css`
        & li:not(:last-child) {
          border-bottom: 1px solid #e5e5e5;
        }
      `}
  }
  ${({design:e})=>{switch(e){case"primary":return c.css`
          background-color: #fff;
          box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
          -webkit-box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
          -moz-box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
        `;case"secondary":return c.css`
          background-color: ${s.color.QUATERNARY[300]};
        `;case"flat":return c.css`
          background-color: transparent;
        `;default:return s.color.NEUTRAL[100]}}};
`,_e=({design:e="primary",header:r,options:o,optionsFormatter:a,content:n,withSeparator:i})=>t.jsxs(We,{design:e,withSeparator:i,children:[r&&t.jsx("header",{children:r}),o&&a&&t.jsx("ul",{children:o.map(l=>t.jsx("li",{children:a(l)},l.value))}),n&&n]}),Ve=e=>t.jsx("svg",{width:e.size||24,height:e.size||25,fill:"none",viewBox:"0 0 24 25",...e,children:e.isChecked?t.jsxs(t.Fragment,{children:[t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M22.53 3.97a.75.75 0 0 1 0 1.06l-10 10a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06L12 13.44l9.47-9.47a.75.75 0 0 1 1.06 0Z",fill:"#4318FF"}),t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5 4.25A1.25 1.25 0 0 0 3.75 5.5v14A1.25 1.25 0 0 0 5 20.75h14a1.25 1.25 0 0 0 1.25-1.25v-7a.75.75 0 0 1 1.5 0v7A2.75 2.75 0 0 1 19 22.25H5a2.75 2.75 0 0 1-2.75-2.75v-14A2.75 2.75 0 0 1 5 2.75h11a.75.75 0 0 1 0 1.5H5Z",fill:"#4318FF"})]}):t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5 4.25c-.69 0-1.25.56-1.25 1.25v14c0 .69.56 1.25 1.25 1.25h14c.69 0 1.25-.56 1.25-1.25v-14c0-.69-.56-1.25-1.25-1.25H5ZM2.25 5.5A2.75 2.75 0 0 1 5 2.75h14a2.75 2.75 0 0 1 2.75 2.75v14A2.75 2.75 0 0 1 19 22.25H5a2.75 2.75 0 0 1-2.75-2.75v-14Z",fill:"#4318FF"})}),Ze=u.default(z.Root)`
  width: 100%;
  background-color: #fff;
  box-shadow: ${()=>s.effect.darkShadow[4]};
  border-radius: 0.5rem;
`,qe=u.default(z.Trigger)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  cursor: pointer;
  background-color: transparent;
  border: none;
`,Qe=c.keyframes`
  from {
    height: 0;
  }
  to {
    height: var(--radix-collapsible-content-height);
  }
`,Ke=c.keyframes`
  from {
    height: var(--radix-collapsible-content-height);
  }
  to {
    height: 0;
  }
`,Ge=u.default(z.Content)`
  overflow: hidden;
  &[data-state="open"] {
    animation: ${Qe} 300ms ease-out;
  }
  &[data-state="closed"] {
    animation: ${Ke} 300ms ease-out;
  }
`,Je=({open:e,setOpen:r,label:o,content:a})=>t.jsxs(Ze,{open:e,onOpenChange:r,children:[t.jsxs(qe,{children:[t.jsx(v,{children:o}),t.jsx(Ve,{isChecked:e})]}),t.jsx(Ge,{children:a})]}),Q=e=>t.jsx("svg",{width:e.size||8,height:e.size||12,fill:"none",viewBox:"0 0 8 12",...e,children:t.jsx("path",{d:"m3.069 6.003 4.73-4.49a.634.634 0 0 0 0-.928L7.384.192A.705.705 0 0 0 6.895 0a.705.705 0 0 0-.489.192L.774 5.537a.634.634 0 0 0-.202.465c0 .177.071.342.202.466l5.627 5.34c.13.124.304.192.49.192a.706.706 0 0 0 .488-.192l.415-.393a.634.634 0 0 0 0-.928L3.069 6.003Z",fill:"#151E5A"})}),Xe=u.default.header`
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
  box-shadow: ${()=>s.effect.darkShadow[6]};

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
`,Re=({onBack:e,backLabel:r,profileImageUrl:o})=>t.jsxs(Xe,{children:[t.jsxs("button",{type:"button",onClick:e,children:[t.jsx(Q,{}),t.jsx(v,{color:"NEUTRAL/900",children:r})]}),t.jsx("img",{width:28,height:28,src:o||"/default-profile.svg",alt:"profile",referrerPolicy:"no-referrer"})]}),et=c.keyframes`
  100% {
    transform: rotate(360deg);
  }
`,tt=u.default.div`
  display: block;
  margin: ${e=>e.margin||"25% auto"};
  width: ${e=>e.width||"100%"};
  height: ${e=>e.height||"100%"};
  border: ${e=>e.borderWidth||"0.25em"} solid rgba(0, 0, 0, 0.1);
  border-top-color: #03a7e5;
  border-radius: 50%;
  animation: ${et} 1s infinite linear;
`,K=e=>t.jsx(tt,{width:e.width,height:e.height,borderWidth:e.borderWidth,margin:e.margin}),G=u.default.ul`
  color: ${()=>s.color.OTHER.color1};
  background-color: white;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid #59a5fc;
  border-radius: 10px;
  width: 300px;
  margin: 5px 0;
  padding: 0;
  z-index: 99;
  font: 400 14px Poppins;
  list-style-type: none;

  & > li:last-child {
    border-radius: 0 0 10px 10px;
  }

  & > li:first-child {
    border-radius: 10px 10px 0 0;
  }
`,B=u.default.li`
  background-color: ${({active:e})=>e?"#ebedff":"white"};
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px 5px 15px;
  gap: 7px;
  opacity: ${({disabled:e})=>e?.6:1};
  position: relative;
  @media (hover: hover) {
    cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  }

  &:hover {
    background-color: #ebedff;
  }

  & > svg,
  & > img {
    flex-shrink: 0;
  }
  & > img {
    width: 18px;
    height: 18px;
    object-fit: contain;
  }
  & > svg {
    font-size: 20px;
  }

  ${({alert:e})=>{if(e)return c.css`
        background-color: ${s.color.ALERT[100]};
        color: ${s.color.ALERT[900]};
        &:hover {
          background-color: ${s.color.ALERT[200]};
        }
      `}}
`,rt=u.default.div`
  position: absolute;
  top: 0;
  right: calc(100% + 8px);
`,ot=({text:e,options:r})=>{const[o,a]=b.useState(!1),n=b.useRef(null),i=l=>{if(n.current&&clearTimeout(n.current),l){a(!0);return}n.current=setTimeout(()=>{o!==l&&a(l)},50)};return t.jsxs(B,{onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),active:o,onClick:l=>l.stopPropagation(),children:[e," ",t.jsx("div",{style:{transform:"rotateY(180deg)"},children:t.jsx(Q,{})}),o&&t.jsx(rt,{children:t.jsx(G,{children:r.map((l,f)=>t.jsxs(B,{alert:l.alert,onClick:d=>l.disabled||l.loading?d.stopPropagation():l.onClick(),disabled:l.disabled||l.loading,loading:l.loading,children:[l.text," ",l.loading?t.jsx("div",{style:{width:"24px"},children:t.jsx(K,{width:"20px",height:"20px"})}):l.icon]},`suboption-${f}`))})})]})},it=({options:e})=>t.jsx(G,{children:e.map((r,o)=>"options"in r?t.jsx(ot,{...r},`option-${o}`):t.jsxs(B,{disabled:r.disabled||r.loading,alert:r.alert,onClick:r.disabled||r.loading?a=>a.stopPropagation():r.onClick,loading:r.loading,children:[r.text," ",r.loading?t.jsx("div",{style:{width:"24px"},children:t.jsx(K,{width:"20px",height:"20px"})}):r.icon]},`option-${o}`))}),nt=u.default.div`
  cursor: pointer;
  text-align: right;
  * {
    margin-left: auto;
    margin-right: 0;
  }
`,at=({options:e,activator:r})=>{const{x:o,y:a,reference:n,floating:i,strategy:l,update:f,refs:d}=M.useFloating({placement:"bottom-end"}),[h,p]=b.useState(!1);return b.useEffect(()=>{if(!(!d.reference.current||!d.floating.current))return M.autoUpdate(d.reference.current,d.floating.current,f)},[h,f]),V(d.reference,()=>{p(!1)}),t.jsxs("div",{ref:n,children:[t.jsx(nt,{onClick:()=>p(!h),children:r||t.jsx(Z,{size:25})}),h&&t.jsx("div",{ref:i,style:{position:l,top:a!=null?a:0,left:o!=null?o:0},onClick:()=>p(!h),children:t.jsx(it,{options:e})})]})};g.Button=j,g.Card=_e,g.CodeInput=ke,g.Collapsible=Je,g.CustomSelect=q,g.DropdownMenu=at,g.Heading=me,g.Loader=je,g.ProfileImage=De,g.SelectField=Ae,g.StickyHeader=Re,g.Text=v,g.TextField=_,Object.defineProperties(g,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
