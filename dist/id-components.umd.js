(function(g,A){typeof exports=="object"&&typeof module<"u"?A(exports,require("styled-components"),require("react/jsx-runtime"),require("react"),require("react-loading-skeleton"),require("react-select"),require("@radix-ui/react-collapsible"),require("@floating-ui/react-dom")):typeof define=="function"&&define.amd?define(["exports","styled-components","react/jsx-runtime","react","react-loading-skeleton","react-select","@radix-ui/react-collapsible","@floating-ui/react-dom"],A):(g=typeof globalThis<"u"?globalThis:g||self,A(g["ID-Components"]={},g.styled,g["react/jsx-runtime"].js,g.React,g.Skeleton,g.Select,g["@radix-ui/react-collapsible"],g["@floating-ui/react-dom"]))})(this,function(g,A,t,x,ye,ze,je,V){"use strict";const H=e=>e&&typeof e=="object"&&"default"in e?e:{default:e};function Ue(e){if(e&&e.__esModule)return e;const o=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const r in e)if(r!=="default"){const i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(o,r,i.get?i:{enumerable:!0,get:()=>e[r]})}}return o.default=e,Object.freeze(o)}const d=H(A),De=H(ye),He=H(ze),N=Ue(je),Ne={bold:700,medium:500,regular:400,light:300},X={xs:"0.750rem",sm:"0.875rem	",md:"1.0rem",lg:"1.250rem",xl:"1.5rem","2xl":"1.875rem","3xl":"2.0rem","4xl":"2.5rem","5xl":"3.0rem"},J={h1:"xl",h2:"lg",h3:"md",h4:"sm",h5:"xs",h6:"xs",text:"sm"},s={color:{NEUTRAL:{0:"#FFFFFF",20:"#FFFFFF",50:"#F5F5F5",100:"#EBEBEB",200:"#dfdfdf",300:"#bfbfbf",400:"#9f9f9f",500:"#808080",600:"#404040",700:"#383838",800:"#202020",900:"#000000"},PRIMARY:{0:"#FFFFFF",50:"#F1F2F9",100:"#E6E8F4",200:"#DDDFF0",300:"#BBBFE2",400:"#999FD3",500:"#777fc5",600:"#545fb6",700:"#414a98",800:"#333a76",900:"#242954"},SECONDARY:{0:"#FFFFFF",20:"#F7F5FF",50:"#EFEBFF",100:"#E6E0FF",200:"#d0c5ff",300:"#d0c5ff",400:"#b9a8ff",500:"#a18cff",600:"#8a6fff",700:"#7252ff",800:"#5b35ff",900:"#4318FF"},TERTIARY:{0:"#FFFFFF",50:"#FFFAFC",100:"#FFF5F9",200:"#ffeff5",300:"#ffe0eb",400:"#ffd0e1",500:"#ffc1d7",600:"#ffb1cd",700:"#FFA1C3",800:"#ff92b9",900:"#FF82AF"},QUATERNARY:{0:"#FFFFFF",50:"#FBFCFE",100:"#F2F6FD",200:"#ebf1fc",300:"#D8E4FA",400:"#c4d6f8",500:"#b0c8f5",600:"#9cbbf3",700:"#88adf0",800:"#75a0ed",900:"#6192EB"},STATE:{0:"#FFFFFF",50:"#FFFBF5",100:"#FEF7EB",200:"#fef3e3",300:"#fde7c6",400:"#fcdba9",500:"#fbcf8d",600:"#fac270",700:"#f9b654",800:"#f8aa38",900:"#F79E1B"},ALERT:{0:"#FFFFFF",50:"#FFFBF5",100:"#FEEDEC",200:"#fde3e2",300:"#fbc8c5",400:"#f9ada8",500:"#f7918b",600:"#f4756d",700:"#F25A50",800:"#F03E33",900:"#EE2316"},SUCCESS:{0:"#FFFFFF",50:"#F7FDFA",100:"#EEFBF4",200:"#e4f9ed",300:"#c9f3db",400:"#aeedc9",500:"#93e7b7",600:"#78e1a4",700:"#5DDB92",800:"#42D580",900:"#2DC96F"},OTHER:{color1:"#151E5A"},STATUS:{DEFAULT:{0:"#F5F5F5",1:"#808080"},DRAFT:{0:"#F5F5F5",1:"#808080"},PENDING:{0:"#DFDFDF",1:"#404040"},REJECTED:{0:"#FDE3E2",1:"#EE2316"},ACCEPTED:{0:"#D0C5FF",1:"#4318FF"},CANCELED:{0:"#FDE3E2",1:"#EE2316"},PREPARING:{0:"#FEF3E3",1:"#F79E1B"},READYFORPICKUP:{0:"#FFEFF5",1:"#FF82AF"},DELIVERED:{0:"#E4F9ED",1:"#2DC96F"}}},effect:{darkShadow:{4:"0px 0px 4px 1px rgba(139, 139, 139, 0.32)",6:"0px 1px 6px rgba(60, 60, 60, 0.2)",8:"0px 1px 6px rgba(107, 107, 107, 0.2)",12:"0px 0px 12px 2px #F6F6F6",24:"0px 0px 24px 4px rgba(0, 14, 51, 0.2)",30:"0px 10px 30px rgba(0, 0, 0, 0.08)"},lightShadow:{2:"0px 0px 2px 1px rgba(149, 178, 254, 0.2)",16:"0px 4px 16px rgba(153, 181, 255, 0.2)"}}},Pe=({shape:e})=>{switch(e){case"rounded":return A.css`
        border-radius: 0.625rem;
      `;case"squared":return A.css`
        border-radius: 0;
      `;case"circular":return A.css`
        border-radius: 10rem;
      `;default:return A.css`
        border-radius: 0.625rem;
      `}},Ge=({design:e,color:o,fontColor:r})=>{switch(e){case"solid":return A.css`
        background-color: ${()=>F({color:o})};
        color: ${r?F({color:r}):"#fff"};
      `;case"outline":return A.css`
        background-color: white;
        border: 1px solid ${()=>F({color:o})};
        color: ${()=>F({color:o})};
      `;case"flat":return A.css`
        background-color: white;
        border: none;
        color: ${()=>F({color:o})};
      `;case"link":return A.css`
        background-color: transparent;
        border: none;
        color: ${()=>F({color:o})};

        &:hover {
          color: ${()=>F({color:o,hover:!0})};
          text-decoration: underline;
        }
      `;default:return A.css`
        background-color: ${()=>F({color:o})};
        color: #fff;
      `}},F=({color:e="SECONDARY/900",design:o,hover:r})=>{const i=e.split("/"),n=i[0];let a=+i[1];if(r&&a>=300)switch(o){case"solid":a-=100;break;case"outline":a=100;break;case"flat":a=100;break;default:a>=400?a-=100:a+=100;break}if(r&&a<300)switch(o){case"solid":a+=100;break;case"outline":a=100;break;case"flat":a=100;break;default:a-=100;break}return n==="PRIMARY"||n==="NEUTRAL"||n==="SECONDARY"||n==="TERTIARY"||n==="QUATERNARY"||n==="STATE"||n==="ALERT"||n==="SUCCESS"?a===0||a===50||a===100||a===200||a===300||a===400||a===500||a===600||a===700||a===800||a===900?s.color[n][a]:s.color[n][900]:s.color.PRIMARY[900]},R=({fullWidth:e})=>e?A.css`
      width: 100%;
    `:A.css`
    width: auto;
  `,Ye=({isLoading:e})=>e?A.css`
      cursor: not-allowed;
      opacity: 0.5;
    `:A.css`
    cursor: pointer;
    opacity: 1;
  `,Ze=({disabled:e})=>e?A.css`
      cursor: not-allowed;
      opacity: 0.5;
    `:A.css`
    cursor: pointer;
    opacity: 1;
  `,P=({size:e="sm"})=>A.css`
    font-size: ${X[e]||e};
  `,We=({align:e})=>e?A.css`
      text-align: ${e};
    `:A.css`
    text-align: left;
  `,q=e=>{let o="";return e.m&&(o+=`
      margin-top: ${e.m};
      margin-bottom: ${e.m};
      margin-left: ${e.m};
      margin-right: ${e.m};
    `),e.mb&&(o+=`
      margin-bottom: ${e.mb};
    `),e.mt&&(o+=`
      margin-top: ${e.mt};
    `),e.ml&&(o+=`
      margin-left: ${e.ml};
    `),e.mr&&(o+=`
      margin-right: ${e.mr};
    `),e.mx&&(o+=`
      margin-left: ${e.mx};
      margin-right: ${e.mx};
    `),e.my&&(o+=`
      margin-top: ${e.my};
      margin-bottom: ${e.my};
    `),e.p&&(o+=`
      padding-top: ${e.p};
      padding-bottom: ${e.p};
      padding-left: ${e.p};
      padding-right: ${e.p};
    `),e.pb&&(o+=`
      padding-bottom: ${e.pb};
    `),e.pt&&(o+=`
      padding-top: ${e.pt};
    `),e.pl&&(o+=`
      padding-left: ${e.pl};
    `),e.pr&&(o+=`
      padding-right: ${e.pr};
    `),e.px&&(o+=`
      padding-left: ${e.px};
      padding-right: ${e.px};
    `),e.py&&(o+=`
      padding-top: ${e.py};
      padding-bottom: ${e.py};
    `),A.css`
    ${o}
  `},Qe=d.default.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
`,Oe=d.default(Qe)`
  display: inline-flex;
  gap: 0.5rem;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease-out;
  padding: ${({design:e})=>e==="link"?"0":"0.7rem"};
  min-height: ${({design:e})=>e==="link"?"0":"45px"};

  ${({size:e})=>P({size:e})};
  ${({shape:e})=>Pe({shape:e})};
  ${({design:e,color:o,fontColor:r})=>Ge({design:e,color:o,fontColor:r})};
  ${({fullWidth:e})=>R({fullWidth:e})};
  ${({isLoading:e})=>Ye({isLoading:e})};
  ${({disabled:e})=>Ze({disabled:e})};
  ${({m:e,mb:o,mt:r,mr:i,ml:n,my:a,mx:l,p:f,pb:h,pt:c,pr:p,pl:u,py:v,px:b})=>q({m:e,mb:o,mt:r,mr:i,ml:n,my:a,mx:l,p:f,pb:h,pt:c,pr:p,pl:u,py:v,px:b})};

  &:hover:not(:disabled) {
    background-color: ${({color:e,design:o})=>o==="link"?"transparent":F({color:e,design:o,hover:!0})};
  }

  &:active {
    background-color: ${({color:e,design:o})=>o==="link"?"transparent":F({color:e,design:o,hover:!0})};
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
  }

  b {
    font-weight: bold;
  }
`,T=({children:e,...o})=>t.jsxs(Oe,{...o,children:[o.leftIcon,e,o.rightIcon]});function Ve(e,o,r){const i=()=>{const n=document.querySelectorAll("input");return Array.from(n).filter(l=>l.className===o)};x.useEffect(()=>{const n=a=>{a.key==="Backspace"&&setTimeout(()=>{const l=i(),f=document.activeElement;f.value="";const h=l.indexOf(f);h>0&&l[h-1].focus()},0)};return document.addEventListener("keydown",n),()=>document.removeEventListener("keydown",n)},[]),x.useEffect(()=>{const n=a=>{if(a.key!=="Backspace"){const l=a.key.toLowerCase();setTimeout(()=>{if(l.length===1){const f=i(),h=document.activeElement;h.value=l;const c=f.indexOf(h);c<f.length-1&&f[c+1].focus()}},0)}};return document.addEventListener("keydown",n),()=>document.removeEventListener("keydown",n)},[]),x.useEffect(()=>{if(e){const n=a=>{const l=a.key.toLowerCase();(l.length===1||l==="backspace")&&setTimeout(()=>{const h=i().map(c=>c.value).join("");e(h)},0)};return document.addEventListener("keydown",n),()=>document.removeEventListener("keydown",n)}},[]),x.useEffect(()=>{if(r){const n=i(),a=n.map(h=>h.value),l=r.split(""),f=l.length===a.length?l:a;n.forEach((h,c)=>{const p=f[c];p&&(h.value=p)})}},[r])}const Xe=A.keyframes`
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
`,G=d.default.div`
  opacity: 0;
  ${({shouldAppear:e})=>e&&A.css`
      animation: ${Xe} 0.2s ease-in;
      animation-fill-mode: forwards;
    `}
`,Je={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",p:"p",li:"li",span:"span",strong:"strong",label:"label"},Re=A.css`
  display: inline-block;
  font-family: "Poppins";
  font-style: normal;
  line-height: 24px;
  letter-spacing: -0.04rem;
  ${({align:e})=>We({align:e})}
  ${({m:e,mb:o,mt:r,mr:i,ml:n,my:a,mx:l,p:f,pb:h,pt:c,pr:p,pl:u,py:v,px:b})=>q({m:e,mb:o,mt:r,mr:i,ml:n,my:a,mx:l,p:f,pb:h,pt:c,pr:p,pl:u,py:v,px:b})};
`,qe=e=>{const o=e==="h1"||e==="h2"||e==="h3"||e==="h4"||e==="h5"||e==="h6",r=o?"bold":"medium",i=o?J[e]:J.text,n="PRIMARY/900";return A.css`
    font-weight: ${({weight:a=r})=>Ne[a]||"500"};
    font-size: ${({size:a=i})=>X[a]||a};
    color: ${({color:a=n})=>{const l=a==null?void 0:a.split("/")[0],f=Number(a==null?void 0:a.split("/")[1]);return s.color[l][f]}};
  `},Ke=d.default.div`
  ${Re}
  ${({as:e})=>qe(e)}
`,S=({as:e,...o})=>{const r=Je[e];return t.jsx(Ke,{as:r,...o})},$e={H1:e=>t.jsx(S,{as:"h1",...e}),H2:e=>t.jsx(S,{as:"h2",...e}),H3:e=>t.jsx(S,{as:"h3",...e}),H4:e=>t.jsx(S,{as:"h4",...e}),H5:e=>t.jsx(S,{as:"h5",...e}),H6:e=>t.jsx(S,{as:"h6",...e})},_e=d.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
  transition: 0.3s ease-out;
`,I=e=>e.rightIcon||e.leftIcon?t.jsxs(_e,{children:[e.leftIcon,t.jsx(S,{as:e.as||"p",...e}),e.rightIcon]}):t.jsx(S,{as:e.as||"p",...e}),et=d.default.div`
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
      ${({errorMessage:e,success:o})=>e?s.color.ALERT[900]:o?s.color.SUCCESS[900]:s.color.NEUTRAL[300]};
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
`,tt=d.default.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`,ot=({id:e,value:o,length:r=4,errorMessage:i,success:n,onChange:a=()=>{},...l})=>(Ve(a,e,o),t.jsxs(tt,{children:[t.jsx(et,{length:r,success:n,errorMessage:i,children:Array.from({length:r}).map((f,h)=>t.jsx("input",{id:h.toString(),className:e,maxLength:1,...l},h))}),i&&t.jsx(G,{shouldAppear:Boolean(i),children:t.jsx(I,{size:"xs",weight:"light",color:"ALERT/900",children:i})})]})),rt=d.default.div`
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
`,nt={control:(e,o)=>({...e,minHeight:"45px",borderRadius:10,backgroundColor:"#ffffff",border:`1px solid ${o.isFocused?s.color.QUATERNARY[900]:s.color.NEUTRAL[300]}`,boxShadow:"none",cursor:"pointer"}),singleValue:()=>({color:s.color.PRIMARY[900],fontWeight:500,fontSize:"14px"}),placeholder:e=>({...e,color:s.color.NEUTRAL[700]}),indicatorSeparator:e=>({...e,display:"none",padding:0}),indicatorsContainer:e=>({...e,"> div":{padding:"0",paddingRight:"3px"}}),valueContainer:e=>({...e,padding:0,paddingLeft:"6px"})},it=({formatOptionLabel:e,options:o,loading:r=!1,style:i,error:n,firstOption:a,initialValue:l,value:f,onChange:h,isMulti:c,placeholder:p,label:u})=>{const v=a||{label:"Seleccione una opci\xF3n",value:""},b=[...o];return t.jsxs(rt,{style:i,hasError:!!n,children:[u&&t.jsx(I,{as:"label",align:"left",size:"sm",color:"NEUTRAL/700",children:u}),r?t.jsx(De.default,{style:{borderRadius:10},className:"loading-skeleton",height:46,width:"100%"}):t.jsx(He.default,{placeholder:p,value:f||void 0,defaultValue:l||v,options:b,onChange:h,styles:nt,isMulti:c,formatOptionLabel:e})]})},at=d.default.div`
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
    background: ${()=>s.color.NEUTRAL[50]};
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

  ${e=>e.variant=="V1"&&A.css`
      ${o=>o.active&&A.css`
          &::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: ${r=>r.color||s.color.PRIMARY[900]};
            width: ${r=>r.size*2}px;
            height: ${r=>r.size*2}px;
            border-radius: ${r=>r.borderRadius||"50%"};
            transition: 0.3s background;
          }
          &:hover ::before {
            width: ${r=>r.size*2}px;
            height: ${r=>r.size*2}px;
            background: ${r=>r.color||s.color.PRIMARY[900]};
          }
        `}
    `}
  ${e=>e.variant=="V2"&&A.css`
      ${o=>o.active&&A.css`
          &::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: transparent;
            width: ${r=>r.size}px;
            height: ${r=>r.size}px;
            border-radius: ${r=>r.borderRadius||"50%"};
            transition: 0.3s background;
          }
          &:hover ::before {
            width: ${r=>r.size*2}px;
            height: ${r=>r.size*2}px;
            background: ${()=>s.color.NEUTRAL[50]};
          }
        `}
    `}
`,dt=d.default.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${e=>e.size}px;
  height: ${e=>e.size}px;
  fill: ${e=>e.color||s.color.PRIMARY[900]};
  ${e=>e.variant==="V1"&&A.css`
      ${o=>o.active&&A.css`
          fill: #fff;
        `}
    `}
  ${e=>e.variant==="V2"&&A.css`
      fill: ${()=>s.color.NEUTRAL[400]};
      ${o=>o.active&&A.css`
          fill: ${r=>r.color||s.color.PRIMARY[900]};
        `}
    `}
`,K=e=>{const{children:o,color:r,size:i,viewBox:n,active:a,borderRadius:l,variant:f}=e;return t.jsx(at,{active:a,size:i||24,borderRadius:l||"50%",variant:f||"V1",color:r,children:t.jsx(dt,{active:a,color:r,size:i||24,viewBox:n||"0 0 32 32",variant:f||"V1",children:o})})},lt=e=>{const{color:o,size:r}=e;return t.jsx(K,{color:o,size:r,viewBox:"0 0 22 13",fill:"none",children:t.jsx("path",{d:"M19 1.406s-.32.772-1 1.752m-7 4.031a7.587 7.587 0 0 1-4.051-1.157M11 7.19a7.587 7.587 0 0 0 4.051-1.157M11 7.19v4.048m-8-9.83s.354.851 1.106 1.901M6.95 6.033 4 9.502m2.949-3.47c-1.26-.778-2.198-1.824-2.843-2.724m10.945 2.724 2.449 3.47m-2.449-3.47C16.381 5.21 17.354 4.09 18 3.158m-13.894.15L1 4.877m17-1.718 3 1.718",stroke:"#242954",strokeWidth:2,strokeLinecap:"round"})})},ct=e=>{const{color:o,size:r}=e;return t.jsx(K,{color:o,size:r,viewBox:"0 0 22 19",fill:"none",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 2.75c-3.089 0-6.002 1.167-8.524 3.239a.75.75 0 1 1-.952-1.16C4.274 2.57 7.515 1.25 11 1.25c3.485 0 6.726 1.32 9.476 3.58a.75.75 0 1 1-.952 1.159C17.002 3.917 14.089 2.75 11 2.75Zm-8.249 8.454v.002c.006.02.025.103.1.259.09.187.234.424.434.697.4.546.99 1.19 1.73 1.804 1.488 1.238 3.487 2.284 5.639 2.284 2.163 0 4.343-1.055 6.016-2.308.829-.62 1.506-1.27 1.968-1.819.231-.276.398-.514.503-.7a1.31 1.31 0 0 0 .102-.219 1.315 1.315 0 0 0-.102-.218 4.803 4.803 0 0 0-.503-.7c-.462-.55-1.14-1.198-1.968-1.82a13.63 13.63 0 0 0-1.87-1.179c.264.57.412 1.203.412 1.872 0 2.496-2.052 4.5-4.558 4.5s-4.558-2.004-4.558-4.5c0-.615.125-1.2.35-1.734-.515.309-.995.655-1.432 1.018a10.49 10.49 0 0 0-1.729 1.804c-.2.273-.343.51-.434.697-.075.156-.094.238-.1.26 0 0 0 0 0 0Zm7.903-6.545c-2.627 0-4.955 1.264-6.599 2.63a11.982 11.982 0 0 0-1.98 2.072 6.141 6.141 0 0 0-.575.931c-.13.27-.25.594-.25.912 0 .319.12.643.25.913.14.29.337.606.575.931a11.98 11.98 0 0 0 1.98 2.071c1.644 1.367 3.972 2.631 6.599 2.631 2.616 0 5.11-1.255 6.915-2.607.91-.682 1.673-1.408 2.217-2.055.271-.323.498-.638.662-.93.15-.265.302-.606.302-.954 0-.347-.153-.688-.302-.953a6.264 6.264 0 0 0-.662-.93c-.544-.647-1.307-1.373-2.217-2.055-1.806-1.352-4.299-2.607-6.915-2.607Zm0 1.5c-1.7 0-3.058 1.354-3.058 3s1.358 3 3.058 3c1.7 0 3.058-1.354 3.058-3s-1.359-3-3.058-3Z",fill:"#242954",stroke:"#242954",strokeLinecap:"round"})})},st=e=>t.jsx("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:0,color:e.color||"#EE2316",height:24,width:24,viewBox:"0 0 24 24",...e,children:t.jsxs("g",{stroke:"none",children:[t.jsx("path",{fill:"none",d:"M0 0h24v24H0z"}),t.jsx("path",{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z"})]})}),At=e=>t.jsx("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:0,color:e.color||"#2DC96F",height:20,width:20,viewBox:"0 0 1024 1024",...e,children:t.jsx("path",{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z",stroke:"none"})}),ft=d.default.div`
  ${({fullWidth:e})=>R({fullWidth:e})};
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 8px;
  border: 1px solid
    ${({error:e,success:o,isFocused:r})=>e?s.color.ALERT[900]:o&&r?s.color.SUCCESS[900]:r?s.color.QUATERNARY[900]:s.color.NEUTRAL[300]};
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
    ${({size:e})=>P({size:e})};
    flex-grow: 1;
    border: none;
    outline: none;
    padding: 10px 0px;
    background-color: #fff;
    letter-spacing: -0.04em;
    color: ${()=>s.color.NEUTRAL[700]};
    padding-left: ${({leftAddon:e})=>e?"0px":"12px"};
    padding-right: ${({rightAddon:e})=>e?"0px":"12px"};
    padding-right: ${({success:e,error:o})=>(e||o)&&"2.5rem"};

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
    ${({size:e})=>P({size:e})};
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
`,Y=x.forwardRef(({type:e,leftAddon:o,rightAddon:r,placeholder:i,error:n,success:a,size:l,fullWidth:f,name:h,infoMessage:c,onFocus:p,onBlur:u,onChange:v,...b},w)=>{const[M,k]=x.useState(!1),m=!n&&!a&&c&&M;return t.jsxs(t.Fragment,{children:[t.jsxs(ft,{fullWidth:f,success:a,size:l,error:n,disabled:b.disabled,leftAddon:o,rightAddon:r,isFocused:M,children:[o&&t.jsx("span",{className:"leftAddon",children:o}),t.jsx("input",{ref:w,onFocus:L=>{p&&p(L),k(!0)},onBlur:L=>{u&&u(L),k(!1)},onChange:v,placeholder:i,type:e,name:h,...b}),r&&t.jsx("span",{className:"rightAddon",children:r}),n&&t.jsx("span",{className:"state",children:t.jsx(st,{size:24,color:s.color.ALERT[900]})}),a&&t.jsx("span",{className:"state",children:t.jsx(At,{size:20,color:s.color.SUCCESS[900]})})]}),m&&t.jsx(G,{shouldAppear:m,children:t.jsx(I,{size:"xs",color:"QUATERNARY/900",children:c})})]})});Y.displayName="TextInput";const pt=d.default.div`
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
`,$=x.forwardRef(({label:e,type:o,error:r,isDirty:i,success:n,infoMessage:a,fullWidth:l,...f},h)=>{const c={...f,ref:h},[p,u]=x.useState(!1);return t.jsxs(pt,{fullWidth:l,children:[e&&t.jsxs("div",{className:"label-container",children:[t.jsx(I,{as:"label",align:"left",size:"sm",color:"NEUTRAL/700",children:e}),o==="password"&&t.jsx("span",{onClick:()=>u(!p),children:p?t.jsx(ct,{size:20}):t.jsx(lt,{size:20})})]}),t.jsx(Y,{error:Boolean(r),success:n||!r&&i,infoMessage:a,fullWidth:l,type:p?"text":o,...c}),r&&t.jsx(G,{shouldAppear:Boolean(r),children:t.jsx(I,{size:"xs",color:"ALERT/900",children:r})})]})});$.displayName="TextField";const _=(e,o)=>{x.useEffect(()=>{const r=i=>{if(Array.isArray(e)){for(const n of e)if(!i.target||!n.current||n.current.contains(i.target))return}else if(!i.target||!e.current||e.current.contains(i.target))return;o(i)};return document.addEventListener("mousedown",r),document.addEventListener("touchstart",r),()=>{document.removeEventListener("mousedown",r),document.removeEventListener("touchstart",r)}},[e,o])},ee=e=>t.jsx("svg",{height:e.size||16,width:e.size||16,fill:"none",viewBox:"0 0 16 16",...e,children:t.jsx("path",{d:"M12 5.333v2.534l-4 3.067-4-3.067V5.333L8 8.4l4-3.067Z",fill:"#6B6B6B"})}),ht=e=>t.jsx("svg",{height:13,width:14,fill:"none",viewBox:"0 0 14 13",...e,children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.821 1.606a4.715 4.715 0 1 0 0 9.43 4.715 4.715 0 0 0 0-9.43ZM.125 6.32A5.696 5.696 0 1 1 10.178 9.99l2.553 2.547a.49.49 0 0 1-.693.695l-2.553-2.55A5.696 5.696 0 0 1 .125 6.32Z",fill:"#242954"})}),gt=d.default.div`
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
`,ut=d.default.ul`
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
`,te=x.forwardRef(({label:e,searchable:o=!0,autoSize:r,value:i,options:n,placeholder:a="Seleccione una opci\xF3n",fullWidth:l,fullWidthOptions:f,onChange:h,formatOptionLabel:c,formatSelectedOption:p})=>{const u=x.useRef(null),[v,b]=x.useState(n),[w,M]=x.useState(""),[k,m]=x.useState(!1);_(u,()=>{m(!1)});const L=x.useCallback(()=>{const C=n.filter(E=>E.label.toLowerCase().includes(w.toLowerCase()));b(C)},[n,i]),B=x.useCallback(C=>{h(n.find(E=>E.label===C)),m(!1),M(""),b(n)},[L]),z=x.useCallback(C=>{M(C.target.value);const E=n.filter(Be=>Be.label.toLowerCase().includes(C.target.value.toLowerCase()));b(E)},[]),D=()=>{const C=u.current;if(C){const E=C.getBoundingClientRect();return window.innerHeight-E.bottom-20}};return t.jsxs(gt,{fullWidth:l,ref:u,children:[e&&t.jsx(I,{as:"label",align:"left",size:"sm",color:"NEUTRAL/700",pl:"0.05rem",mb:"0.25rem",children:e}),t.jsxs("div",{className:"select-btn",onClick:()=>m(!k),tabIndex:0,onKeyUpCapture:C=>{C.key==="Enter"&&m(!k)},children:[t.jsx(I,{as:"span",color:"NEUTRAL/700",mr:"0.5rem",children:p?p(i):c?c(i):i.label}),t.jsx(ee,{size:20})]}),k&&t.jsxs(ut,{maxOptionsHeight:r?D():285,fullWidthOptions:f,children:[o&&t.jsx("div",{className:"search-box",children:t.jsx(Y,{leftAddon:t.jsx(ht,{}),type:"text",placeholder:a,value:w,onChange:z,fullWidth:!0})}),t.jsx("div",{className:"options",children:v.map(C=>t.jsx(I,{as:"li",color:"NEUTRAL/700",className:C.value===i.value?"selected":"",tabIndex:0,onClick:()=>B(C.label),onKeyUpCapture:E=>{E.key==="Enter"&&B(C.label)},children:c?c(C):C.label},`${C.label}-${C.value}`))})]})]})});te.displayName="CustomSelect";const xt=d.default.div`
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
`,bt=({imageUrl:e,size:o=128,onChange:r})=>{const i=x.useRef(null),n=a=>{var f;const l=(f=a.target.files)==null?void 0:f[0];if(l){const h=URL.createObjectURL(l);r({file:l,url:h})}};return t.jsxs(xt,{size:o,children:[t.jsx(I,{color:"NEUTRAL/400",weight:"regular",size:"xs",children:"Agrega tu foto"}),t.jsxs("div",{className:"profile-input__container",children:[t.jsx("input",{type:"file",accept:"image/png, image/jpeg",onChange:n,ref:i}),t.jsx("img",{width:o,height:o,src:e||"/default-profile.svg",alt:"profile",referrerPolicy:"no-referrer"}),t.jsx(T,{type:"button",size:"lg",design:"flat",shape:"circular",onClick:()=>{var a;return(a=i.current)==null?void 0:a.click()},children:"+"})]})]})},vt=A.keyframes`
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
`,Ct=A.keyframes`
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
`,wt=d.default.div`
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
    animation: ${vt} 1s linear infinite;
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
    animation: ${Ct} 1s linear infinite;
  }
  .idbi-loading > div > div:last-child {
    animation-delay: -0.5s;
  }
  .idbi-loading > div > div:last-child > div > div {
    animation-delay: -0.5s;
    background-color: ${()=>s.color.TERTIARY[900]};
  }
`,mt=()=>t.jsx(wt,{children:t.jsx("div",{className:"idbi-loading",children:t.jsxs("div",{children:[t.jsx("div",{children:t.jsx("div",{children:t.jsx("div",{})})}),t.jsx("div",{children:t.jsx("div",{children:t.jsx("div",{})})})]})})}),kt=e=>t.jsx("svg",{width:e.size||24,height:e.size||25,fill:"none",viewBox:"0 0 24 25",...e,children:e.ischecked?t.jsxs(t.Fragment,{children:[t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M22.53 3.97a.75.75 0 0 1 0 1.06l-10 10a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06L12 13.44l9.47-9.47a.75.75 0 0 1 1.06 0Z",fill:"#4318FF"}),t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5 4.25A1.25 1.25 0 0 0 3.75 5.5v14A1.25 1.25 0 0 0 5 20.75h14a1.25 1.25 0 0 0 1.25-1.25v-7a.75.75 0 0 1 1.5 0v7A2.75 2.75 0 0 1 19 22.25H5a2.75 2.75 0 0 1-2.75-2.75v-14A2.75 2.75 0 0 1 5 2.75h11a.75.75 0 0 1 0 1.5H5Z",fill:"#4318FF"})]}):t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5 4.25c-.69 0-1.25.56-1.25 1.25v14c0 .69.56 1.25 1.25 1.25h14c.69 0 1.25-.56 1.25-1.25v-14c0-.69-.56-1.25-1.25-1.25H5ZM2.25 5.5A2.75 2.75 0 0 1 5 2.75h14a2.75 2.75 0 0 1 2.75 2.75v14A2.75 2.75 0 0 1 19 22.25H5a2.75 2.75 0 0 1-2.75-2.75v-14Z",fill:"#4318FF"})}),Et=d.default(N.Root)`
  width: 100%;
  background-color: #fff;
  box-shadow: ${()=>s.effect.darkShadow[4]};
  border-radius: 0.5rem;
`,Mt=d.default(N.Trigger)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  cursor: pointer;
  background-color: transparent;
  border: none;
`,It=A.keyframes`
  from {
    height: 0;
  }
  to {
    height: var(--radix-collapsible-content-height);
  }
`,Lt=A.keyframes`
  from {
    height: var(--radix-collapsible-content-height);
  }
  to {
    height: 0;
  }
`,Ft=d.default(N.Content)`
  overflow: hidden;
  &[data-state="open"] {
    animation: ${It} 300ms ease-out;
  }
  &[data-state="closed"] {
    animation: ${Lt} 300ms ease-out;
  }
`,Tt=({open:e,setOpen:o,label:r,content:i})=>t.jsxs(Et,{open:e,onOpenChange:o,children:[t.jsxs(Mt,{children:[t.jsx(I,{children:r}),t.jsx(kt,{ischecked:e||!1})]}),t.jsx(Ft,{children:i})]}),j=e=>t.jsx("svg",{width:e.size||8,height:e.size||12,fill:"none",viewBox:"0 0 8 12",onClick:e.onClick,...e,children:t.jsx("path",{d:"m3.069 6.003 4.73-4.49a.634.634 0 0 0 0-.928L7.384.192A.705.705 0 0 0 6.895 0a.705.705 0 0 0-.489.192L.774 5.537a.634.634 0 0 0-.202.465c0 .177.071.342.202.466l5.627 5.34c.13.124.304.192.49.192a.706.706 0 0 0 .488-.192l.415-.393a.634.634 0 0 0 0-.928L3.069 6.003Z",fill:"#151E5A"})}),St=d.default.header`
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
`,Bt=({onBack:e,backLabel:o,profileImageUrl:r,rightContent:i})=>t.jsxs(St,{children:[t.jsxs("button",{type:"button",onClick:e,children:[t.jsx(j,{}),t.jsx(I,{color:"NEUTRAL/900",children:o})]}),i||t.jsx("img",{width:28,height:28,src:r||"/default-profile.svg",alt:"profile",referrerPolicy:"no-referrer"})]}),yt=A.keyframes`
  100% {
    transform: rotate(360deg);
  }
`,zt=d.default.div`
  display: block;
  margin: ${e=>e.margin||"25% auto"};
  width: ${e=>e.width||"100%"};
  height: ${e=>e.height||"100%"};
  border: ${e=>e.borderWidth||"0.25em"} solid rgba(0, 0, 0, 0.1);
  border-top-color: #03a7e5;
  border-radius: 50%;
  animation: ${yt} 1s infinite linear;
`,Z=e=>t.jsx(zt,{width:e.width,height:e.height,borderWidth:e.borderWidth,margin:e.margin}),oe=d.default.ul`
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
`,W=d.default.li`
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

  ${({alert:e})=>{if(e)return A.css`
        background-color: ${s.color.ALERT[100]};
        color: ${s.color.ALERT[900]};
        &:hover {
          background-color: ${s.color.ALERT[200]};
        }
      `}}
`,jt=d.default.div`
  position: absolute;
  top: 0;
  right: calc(100% + 8px);
`,Ut=({text:e,options:o})=>{const[r,i]=x.useState(!1),n=x.useRef(null),a=l=>{if(n.current&&clearTimeout(n.current),l){i(!0);return}n.current=setTimeout(()=>{r!==l&&i(l)},50)};return t.jsxs(W,{onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),active:r,onClick:l=>l.stopPropagation(),children:[e," ",t.jsx("div",{style:{transform:"rotateY(180deg)"},children:t.jsx(j,{})}),r&&t.jsx(jt,{children:t.jsx(oe,{children:o.map((l,f)=>t.jsxs(W,{alert:l.alert,onClick:h=>l.disabled||l.loading?h.stopPropagation():l.onClick(),disabled:l.disabled||l.loading,loading:l.loading,children:[l.text," ",l.loading?t.jsx("div",{style:{width:"24px"},children:t.jsx(Z,{width:"20px",height:"20px"})}):l.icon]},`suboption-${f}`))})})]})},Dt=({options:e})=>t.jsx(oe,{children:e.map((o,r)=>"options"in o?t.jsx(Ut,{...o},`option-${r}`):t.jsxs(W,{disabled:o.disabled||o.loading,alert:o.alert,onClick:o.disabled||o.loading?i=>i.stopPropagation():o.onClick,loading:o.loading,children:[o.text," ",o.loading?t.jsx("div",{style:{width:"24px"},children:t.jsx(Z,{width:"20px",height:"20px"})}):o.icon]},`option-${r}`))}),Ht=d.default.div`
  cursor: pointer;
  text-align: right;
  * {
    margin-left: auto;
    margin-right: 0;
  }
`,Nt=({options:e,activator:o})=>{const{x:r,y:i,reference:n,floating:a,strategy:l,update:f,refs:h}=V.useFloating({placement:"bottom-end"}),[c,p]=x.useState(!1);return x.useEffect(()=>{if(!(!h.reference.current||!h.floating.current))return V.autoUpdate(h.reference.current,h.floating.current,f)},[c,f]),_(h.reference,()=>{p(!1)}),t.jsxs("div",{ref:n,children:[t.jsx(Ht,{onClick:()=>p(!c),children:o||t.jsx(ee,{size:25})}),c&&t.jsx("div",{ref:a,style:{position:l,top:i!=null?i:0,left:r!=null?r:0},onClick:()=>p(!c),children:t.jsx(Dt,{options:e})})]})},Pt=d.default.svg`
  vertical-align: middle;
`,y=({color:e="currentColor",size:o,children:r,...i})=>t.jsx(Pt,{color:e,height:o?`${o}px`:"1em",width:o?`${o}px`:"1em",xmlns:"http://www.w3.org/2000/svg",...i,children:r}),Gt=d.default.div`
  background-color: ${({hasImg:e,theme:o})=>e?o.color.QUATERNARY[300]:"transparent"};
  border-radius: 50%;
  color: ${({theme:e})=>e.color.QUATERNARY[900]};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  font-weight: 500;
  font-size: var(--test);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,re=({img:e,size:o=36,initials:r})=>{const i=r.slice(0,2).toUpperCase();return t.jsx(Gt,{hasImg:!(e!=null&&e.src),style:{width:`${o}px`,height:`${o}px`,fontSize:`${o/(r.length===1?2:2.25)}px`},children:e!=null&&e.src?t.jsx("img",{...e}):i})},Yt=d.default.span`
  padding: ${({removeBackground:e})=>e?"0":"4px 10px "};
  border-radius: 8px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 0.75rem;
  line-height: 1.125rem;
  letter-spacing: -0.04em;
  background: ${({removeBackground:e})=>e?"transparent":s.color.STATUS.DEFAULT[0]};
  color: ${s.color.STATUS.DEFAULT[1]};

  ${({statusName:e,removeBackground:o})=>{if(e==="draft")return A.css`
        background: ${o?"transparent":s.color.STATUS.DRAFT[0]};
        color: ${s.color.STATUS.DRAFT[1]};
      `;if(e==="pending")return A.css`
        background: ${o?"transparent":s.color.STATUS.PENDING[0]};
        color: ${s.color.STATUS.PENDING[1]};
      `;if(e==="rejected")return A.css`
        background: ${o?"transparent":s.color.STATUS.REJECTED[0]};
        color: ${s.color.STATUS.REJECTED[1]};
      `;if(e==="accepted")return A.css`
        background: ${o?"transparent":s.color.STATUS.ACCEPTED[0]};
        color: ${s.color.STATUS.ACCEPTED[1]};
      `;if(e==="canceled")return A.css`
        background: ${o?"transparent":s.color.STATUS.CANCELED[0]};
        color: ${s.color.STATUS.CANCELED[1]};
      `;if(e==="preparing")return A.css`
        background: ${o?"transparent":s.color.STATUS.PREPARING[0]};
        color: ${s.color.STATUS.PREPARING[1]};
      `;if(e==="readyforpickup")return A.css`
        background: ${o?"transparent":s.color.STATUS.READYFORPICKUP[0]};
        color: ${s.color.STATUS.READYFORPICKUP[1]};
      `;if(e==="delivered")return A.css`
        background: ${o?"transparent":s.color.STATUS.DELIVERED[0]};
        color: ${s.color.STATUS.DELIVERED[1]};
      `}};
`,ne={default:"...",draft:"Borrador",pending:"Pendiente",rejected:"Rechazado",accepted:"Aceptado",canceled:"Anulado",preparing:"Preparando",readyforpickup:"Listo para recojo",delivered:"Entregado"},ie=({statusName:e,text:o,removeBackground:r})=>{const i=n=>ne[n]||ne.default;return t.jsx(Yt,{statusName:e,removeBackground:r,children:o||i(e)})},Zt=d.default.span`
  border-radius: 4px;
  padding: 4px 8px;
  line-height: 1em;
  font-size: 1em;
  display: inline-block;
  font-weight: bold;
`,ae=(e,o,r)=>e>=o&&e<=r?e:e<o?o:r,de=({intensity:e=.8,opacity:o=.5,children:r,style:i={},...n})=>{const a=ae(e,0,1),l=ae(o,0,1),f=256*a;return t.jsx(Zt,{style:{backgroundColor:`rgba(${f}, ${f}, ${f}, ${l})`,...i},...n,children:r})},Wt=d.default.div`
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 15px;
  padding: 8px 20px 0;
  background: #fff1dc;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #fc2250;
  border-radius: 8px;
  p {
    padding-bottom: 18px;
  }
`,Qt="data:image/webp;base64,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",Ot="data:image/webp;base64,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",Vt="data:image/webp;base64,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",Xt=({type:e,message:o,children:r})=>t.jsxs(Wt,{children:[e==="on-table"?t.jsx("img",{src:Vt,alt:"on table",height:55}):e==="delivery"?t.jsx("img",{src:Qt,alt:"delivery",height:55}):e==="on-room"||e==="pick-up"?t.jsx("img",{src:Ot,alt:"pick up",height:55}):"",o?t.jsx("p",{children:o}):t.jsx("p",{children:e==="on-table"?"Pedido para consumo en mesa":e==="delivery"?"Pedido para entrega a domicilio":e==="on-room"||e==="pick-up"?"Pedido para recojo en tienda":""}),r]}),Jt=d.default.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 20px;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.125rem;
  letter-spacing: -0.04em;
  background: #fff;
  color: #404040;
  border-radius: ${({radius:e})=>`${e}px`||"0"};

  ${({statusName:e})=>{if(e==="draft")return A.css`
        background: ${s.color.STATUS.DRAFT[0]};
        color: ${s.color.STATUS.DRAFT[1]};
      `;if(e==="pending")return A.css`
        background: ${s.color.STATUS.PENDING[0]};
        color: ${s.color.STATUS.PENDING[1]};
      `;if(e==="rejected")return A.css`
        background: ${s.color.STATUS.REJECTED[0]};
        color: ${s.color.STATUS.REJECTED[1]};
      `;if(e==="accepted")return A.css`
        background: ${s.color.STATUS.ACCEPTED[0]};
        color: ${s.color.STATUS.ACCEPTED[1]};
      `;if(e==="canceled")return A.css`
        background: ${s.color.STATUS.CANCELED[0]};
        color: ${s.color.STATUS.CANCELED[1]};
      `;if(e==="preparing")return A.css`
        background: ${s.color.STATUS.PREPARING[0]};
        color: ${s.color.STATUS.PREPARING[1]};
      `;if(e==="readyforpickup")return A.css`
        background: ${s.color.STATUS.READYFORPICKUP[0]};
        color: ${s.color.STATUS.READYFORPICKUP[1]};
      `;if(e==="delivered")return A.css`
        background: ${s.color.STATUS.DELIVERED[0]};
        color: ${s.color.STATUS.DELIVERED[1]};
      `}};
`,le=d.default.p`
  font-weight: 700;
`,ce=e=>t.jsxs("svg",{width:30,height:22,fill:"none",style:{transform:"scale(1.4)",margin:"0 0 0 5px"},...e,children:[t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.233.954C9.583.367 10.262 0 11 0s1.417.367 1.767.954L21.727 16C22.536 17.355 21.45 19 19.746 19H2.255C.55 19-.535 17.355.272 16L9.232.953ZM11 1.357a.516.516 0 0 0-.446.24l-.656-.319.656.32-8.96 15.045c-.27.452.093 1 .66 1h17.491c.568 0 .93-.548.661-1l-8.96-15.045a.516.516 0 0 0-.446-.24Z",fill:"#EE2316"}),t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.001 5.985c.426 0 .77.298.77.665v5.7c0 .367-.344.665-.77.665-.425 0-.77-.298-.77-.665v-5.7c0-.367.345-.665.77-.665ZM11.001 13.585c.426 0 .77.297.77.665v.95c0 .367-.344.665-.77.665-.425 0-.77-.298-.77-.665v-.95c0-.368.345-.665.77-.665Z",fill:"#EE2316"})]}),Rt=({color:e="#404040",size:o=22})=>t.jsxs("svg",{width:o,height:o,fill:"none",color:e,children:[t.jsx("path",{d:"M20.167 11c0 5.06-4.106 9.167-9.166 9.167-5.06 0-9.167-4.107-9.167-9.167s4.107-9.166 9.167-9.166S20.167 5.94 20.167 11Z",stroke:e,strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M14.4 13.915 11.56 12.22c-.495-.293-.899-.999-.899-1.576V6.884",stroke:e,strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})]}),se=({color:e="#4318FF"})=>t.jsx("svg",{width:20,height:20,fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M13.937 19v-.6.6Zm-7.874 0v.6-.6Zm12.15-11.71a.6.6 0 1 0-1.195-.119l1.194.12Zm-1.52 9.215.596.06-.597-.06ZM2.981 7.171a.6.6 0 1 0-1.194.12l1.194-.12Zm.326 9.334.597-.06-.597.06Zm7.292-4.428a.6.6 0 0 0-1.2 0h1.2Zm-1.2 2.77a.6.6 0 0 0 1.2 0H9.4Zm4.662-2.77a.6.6 0 0 0-1.2 0h1.2Zm-1.2 2.77a.6.6 0 0 0 1.2 0h-1.2Zm-5.724-2.77a.6.6 0 0 0-1.2 0h1.2Zm-1.2 2.77a.6.6 0 0 0 1.2 0h-1.2Zm2.544-13.63A.6.6 0 0 0 7.364.783l1.118.434ZM4.941 7.013a.6.6 0 1 0 1.118.435l-1.118-.435ZM1 6.631a.6.6 0 0 0 0 1.2v-1.2Zm18 1.2a.6.6 0 1 0 0-1.2v1.2ZM12.636.783a.6.6 0 1 0-1.118.434l1.118-.434Zm1.305 6.665a.6.6 0 1 0 1.118-.435l-1.118.435ZM13.936 18.4H6.064v1.2h7.874v-1.2Zm3.082-11.229-.923 9.275 1.194.118.923-9.274-1.194-.119Zm-15.23.12.923 9.273 1.194-.118-.923-9.275-1.194.12ZM6.063 18.4a2.17 2.17 0 0 1-2.158-1.954l-1.194.118A3.37 3.37 0 0 0 6.063 19.6v-1.2Zm7.874 1.2a3.37 3.37 0 0 0 3.352-3.036l-1.194-.118a2.17 2.17 0 0 1-2.158 1.954v1.2ZM9.4 12.077v2.77h1.2v-2.77H9.4Zm3.461 0v2.77h1.2v-2.77h-1.2Zm-6.923 0v2.77h1.2v-2.77h-1.2ZM7.364.783 4.94 7.013l1.118.435 2.423-6.23L7.364.782ZM1 7.83h18v-1.2H1v1.2Zm10.518-6.614 2.423 6.231 1.118-.435-2.423-6.23-1.118.434Z",fill:e})}),qt=({color:e="#FF82AF"})=>t.jsxs("svg",{width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M15 2v10c0 1.1-.9 2-2 2H2V7.62c.73.87 1.85 1.41 3.09 1.38 1.01-.02 1.92-.41 2.6-1.06.31-.26.57-.59.77-.95.36-.61.56-1.33.54-2.08-.03-1.17-.55-2.2-1.36-2.91H15Z",stroke:e,strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M22 14v3c0 1.66-1.34 3-3 3h-1c0-1.1-.9-2-2-2s-2 .9-2 2h-4c0-1.1-.9-2-2-2s-2 .9-2 2H5c-1.66 0-3-1.34-3-3v-3h11c1.1 0 2-.9 2-2V5h1.84c.72 0 1.38.39 1.74 1.01L20.29 9H19c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3Z",stroke:e,strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M8 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM16 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM22 12v2h-3c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1h1.29L22 12Z",stroke:e,strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M9.001 4.91c.02.75-.18 1.47-.54 2.08-.2.36-.46.69-.77.95-.68.65-1.59 1.04-2.6 1.06-1.24.03-2.36-.51-3.09-1.38-.14-.15-.26-.32-.37-.49-.39-.59-.61-1.29-.63-2.04a3.99 3.99 0 0 1 1.43-3.16c.68-.56 1.54-.91 2.48-.93 1.05-.02 2.01.36 2.73 1 .81.71 1.33 1.74 1.36 2.91Z",stroke:e,strokeWidth:1.5,strokeMiterlimit:10,strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"m3.441 5.03 1.01.96 2.09-2.02",stroke:e,strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})]}),Kt=({color:e="#F79E1B"})=>t.jsxs("svg",{width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M22 15c0 3.87-3.13 7-7 7l1.05-1.75M2 9c0-3.87 3.13-7 7-7L7.95 3.75M13.703 4.45l3.98 2.3 3.94-2.29M17.684 10.82V6.74",stroke:e,strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"m16.742 2.21-2.4 1.33c-.54.3-.99 1.06-.99 1.68v2.54c0 .62.44 1.38.99 1.68l2.4 1.33c.51.29 1.35.29 1.87 0l2.4-1.33c.54-.3.99-1.06.99-1.68V5.22c0-.62-.44-1.38-.99-1.68l-2.4-1.33c-.51-.28-1.35-.28-1.87 0ZM2.352 15.45l3.97 2.3 3.95-2.29M6.32 21.82v-4.08",stroke:e,strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"m5.39 13.21-2.4 1.33c-.54.3-.99 1.06-.99 1.68v2.54c0 .62.44 1.38.99 1.68l2.4 1.33c.51.29 1.35.29 1.87 0l2.4-1.33c.54-.3.99-1.06.99-1.68v-2.54c0-.62-.44-1.38-.99-1.68l-2.4-1.33c-.52-.28-1.36-.28-1.87 0Z",stroke:e,strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})]}),$t={default:t.jsx(t.Fragment,{children:" "}),draft:t.jsx(t.Fragment,{children:" "}),pending:t.jsx(Rt,{}),rejected:t.jsx(ce,{}),accepted:t.jsx(se,{color:"#4318FF"}),canceled:t.jsx(ce,{}),preparing:t.jsx(Kt,{color:"#F79E1B"}),readyforpickup:t.jsx(qt,{color:"#FF82AF"}),delivered:t.jsx(se,{color:"#2DC96F"})},Ae={default:{title:"...",description:""},draft:{title:"Tu pedido es borrador",description:""},pending:{title:"Tu pedido est\xE1 en pendiente aprobaci\xF3n",description:"Te notificaremos cuando tu pedido sea aceptado"},rejected:{title:"El local ha rechazado tu pedido",description:"\xA1No te quedes con las ganas! Haz un nuevo pedido aqu\xED"},accepted:{title:"El local acept\xF3 tu pedido",description:"En un momento comenzaremos a preparar tu pedido"},canceled:{title:"El local ha anulado tu pedido",description:"\xA1No te quedes con las ganas! Haz un nuevo pedido aqu\xED"},preparing:{title:"Estamos preparando tu pedido",description:"Te notificaremos cuando tu pedido este listo"},readyforpickup:{title:"\xA1Pedido listo! ",description:"Ya puedes recoger tu pedido. \xA1Que lo disfrutes!"},delivered:{title:"Disfruta tu pedido",description:"\xA1Gracias por ordenar!"}},_t=({status:e,title:o="default",description:r="default",icon:i,radius:n,children:a})=>t.jsxs(Jt,{statusName:e,radius:n,children:[i||$t[e],(o==="default"||r==="default"||o.length>1||r.length>1)&&t.jsxs("div",{children:[o==="default"?t.jsx(le,{children:Ae[e].title}):t.jsx(le,{children:o}),r==="default"?t.jsx("p",{children:Ae[e].description}):t.jsx("p",{children:r})]}),a]}),eo=d.default.section`
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

    ${({withSeparator:e})=>e&&A.css`
        & li:not(:last-child) {
          border-bottom: 1px solid #e5e5e5;
        }
      `}
  }
  ${({design:e})=>{switch(e){case"primary":return A.css`
          background-color: #fff;
          box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
          -webkit-box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
          -moz-box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
        `;case"secondary":return A.css`
          background-color: ${s.color.QUATERNARY[300]};
        `;case"flat":return A.css`
          background-color: transparent;
        `;default:return s.color.NEUTRAL[100]}}};
`,to=({design:e="primary",header:o,options:r,optionsFormatter:i,content:n,withSeparator:a})=>t.jsxs(eo,{design:e,withSeparator:a,children:[o&&t.jsx("header",{children:o}),r&&i&&t.jsx("ul",{children:r.map(l=>t.jsx("li",{children:i(l)},l.value))}),n&&n]}),oo=d.default.div`
  padding: 20px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.125rem;
  letter-spacing: -0.04em;
  color: #383838;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 15px;
  }
`,ro=d.default.p`
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: -0.04em;
  color: #181B20;
`,fe=d.default.span`
  color: #151E5A;
  font-weight: 500;
`,no=({items:e,creationDescription:o,creationDate:r,title:i,children:n})=>t.jsxs(oo,{children:[i&&t.jsx(ro,{children:i}),e.map(a=>t.jsxs("div",{children:[t.jsxs("p",{children:[a.description&&t.jsx("span",{children:a.description})," ",t.jsx(ie,{statusName:a.statusName,removeBackground:!0})]}),t.jsx(fe,{children:a.statusDate})]},crypto.randomUUID())),r&&t.jsxs("div",{children:[o&&t.jsx("span",{children:o}),t.jsx(fe,{children:r})]}),n]}),io=d.default.div`
  padding: ${({padding:e})=>e||"20px"};;
  border-radius: 10px;
  background: ${({background:e})=>e||"#fff"};
  box-shadow: ${({background:e})=>e==="transparent"?"none":"0px 10px 30px rgba(0, 0, 0, 0.08)"};
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.25rem;
  letter-spacing: -0.04em;
  color: #383838;
`,ao=d.default.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`,lo=d.default.p`
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: -0.04em;
  color: #181B20;
`,co=d.default.div`
  outline: none;
  border: none;
  background: none;
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 1.125rem;
  letter-spacing: -0.04em;
  color: #4318FF;
  cursor: pointer;
`,so=d.default.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Ao=d.default.li`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
  color: ${({remark:e})=>e?"#6192EB":""};
`,pe=d.default.div`
  display: flex;
  gap: 15px;
  align-items: flex-start;
`,fo=d.default.span`
  line-height: 1.25rem;
  padding: 1px 9px;
  background: #DFDFDF;
  border-radius: 4px;
  font-size: 0.75rem;
  color: #383838;
`,po=d.default.span`
  font-weight: 500;
  font-size: 0.75rem;
  color: ${({remark:e})=>e?"#6192EB":"#151E5A"};
`,he=d.default.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.125rem;
  color: #383838;
`,ho=d.default.img`
  width: 56px;
  height: 56px;
  border: 1px solid #BFBFBF;
  background: #BFBFBF;
  border-radius: 8px;
  font-size: 9px;
  object-fit: cover;
`,go=({items:e,title:o="",onAction:r=()=>{},actionName:i="",hideQuantity:n=!1,children:a,gap:l=10,background:f,padding:h})=>t.jsxs(io,{background:f,padding:h,children:[(o||i)&&t.jsxs(ao,{children:[t.jsx(lo,{children:o}),t.jsx(co,{onClick:()=>r(),children:i})]}),t.jsx(so,{style:{gap:l},children:e.map(c=>t.jsxs(Ao,{remark:Boolean(c.remark),children:[n?t.jsxs(pe,{children:[t.jsxs("div",{children:[t.jsx("span",{children:c.description}),c.notes&&t.jsx(he,{children:c.notes.map(p=>t.jsx("li",{children:p},crypto.randomUUID()))})]}),c==null?void 0:c.decorators]}):t.jsxs(pe,{children:[c.img&&t.jsx(ho,{src:c.img,alt:c.description}),t.jsx(fo,{children:c.quantity}),t.jsxs("div",{children:[t.jsx("span",{children:c.description}),c.notes&&t.jsx(he,{children:c.notes.map(p=>t.jsx("li",{children:p},crypto.randomUUID()))})]}),c==null?void 0:c.decorators]}),t.jsxs(po,{remark:Boolean(c.remark),children:[c.currency," ",c.amount.toFixed(2)]})]},crypto.randomUUID()))}),a]}),uo=d.default.div`
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
  color: ${({theme:e})=>e.color.PRIMARY[900]};
  border-radius: 8px;
  padding: 20px;
  font-size: 14px;
`,xo=d.default.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: ${({hasContent:e})=>e?"12px":0};
`,bo=d.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
`,vo=({title:e,icon:o,headerAside:r,children:i})=>t.jsxs(uo,{children:[t.jsxs(xo,{hasContent:!!i,children:[t.jsxs(bo,{children:[o," ",e]}),r]}),i]}),Co=e=>t.jsxs(y,{viewBox:"0 0 13 11",...e,children:[t.jsx("path",{d:"M1.68232 10.5L11.3177 10.5C12.1078 10.5 12.75 9.81498 12.75 8.97219L12.75 2.02781C12.75 1.18502 12.1078 0.5 11.3177 0.5L1.68232 0.500001C0.892203 0.500001 0.249999 1.18502 0.249999 2.02781L0.25 8.97219C0.25 9.81498 0.892204 10.5 1.68232 10.5ZM11.3177 1.33333C11.6765 1.33333 11.9688 1.64502 11.9688 2.02781L11.9688 8.97219C11.9688 9.35498 11.6765 9.66667 11.3177 9.66667L1.68232 9.66667C1.32346 9.66667 1.03125 9.35498 1.03125 8.97219L1.03125 2.02781C1.03125 1.64502 1.32345 1.33333 1.68232 1.33333L11.3177 1.33333Z",fill:"currentColor"}),t.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.27455 7.28751C7.20193 7.41863 7.17308 7.59075 7.17308 7.70817C7.17308 7.86925 7.0224 7.99984 6.83654 7.99984C6.65067 7.99984 6.5 7.86925 6.5 7.70817C6.5 7.53392 6.53846 7.26854 6.66776 7.03508C6.80081 6.79484 7.0636 6.5415 7.50962 6.5415L8.85577 6.5415C9.04163 6.5415 9.19231 6.67209 9.19231 6.83317C9.19231 6.99425 9.04163 7.12484 8.85577 7.12484L7.50962 7.12484C7.41717 7.12484 7.34342 7.16317 7.27455 7.28751Z",fill:"currentColor"}),t.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M10.1004 7.28751C10.1731 7.41863 10.2019 7.59075 10.2019 7.70817C10.2019 7.86925 10.3526 7.99984 10.5385 7.99984C10.7243 7.99984 10.875 7.86925 10.875 7.70817C10.875 7.53392 10.8365 7.26854 10.7072 7.03508C10.5742 6.79484 10.3114 6.5415 9.86538 6.5415H8.51923C8.33337 6.5415 8.18269 6.67209 8.18269 6.83317C8.18269 6.99425 8.33337 7.12484 8.51923 7.12484H9.86538C9.95783 7.12484 10.0316 7.16317 10.1004 7.28751Z",fill:"currentColor"}),t.jsx("path",{d:"M2.45982 7.375L4.91518 7.375C5.1 7.375 5.25 7.235 5.25 7.0625C5.25 6.89 5.1 6.75 4.91518 6.75L2.45982 6.75C2.275 6.75 2.125 6.89 2.125 7.0625C2.125 7.235 2.275 7.375 2.45982 7.375Z",fill:"currentColor"}),t.jsx("path",{d:"M2.45982 5.5L4.91518 5.5C5.1 5.5 5.25 5.36 5.25 5.1875C5.25 5.015 5.1 4.875 4.91518 4.875L2.45982 4.875C2.275 4.875 2.125 5.015 2.125 5.1875C2.125 5.36 2.275 5.5 2.45982 5.5Z",fill:"currentColor"}),t.jsx("path",{d:"M2.45982 3.625L4.91518 3.625C5.1 3.625 5.25 3.485 5.25 3.3125C5.25 3.14 5.1 3 4.91518 3L2.45982 3C2.275 3 2.125 3.14 2.125 3.3125C2.125 3.485 2.275 3.625 2.45982 3.625Z",fill:"currentColor"}),t.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8.6875 5.65625C9.29156 5.65625 9.78125 5.16656 9.78125 4.5625C9.78125 3.95844 9.29156 3.46875 8.6875 3.46875C8.08344 3.46875 7.59375 3.95844 7.59375 4.5625C7.59375 5.16656 8.08344 5.65625 8.6875 5.65625ZM8.6875 6.125C9.55044 6.125 10.25 5.42544 10.25 4.5625C10.25 3.69956 9.55044 3 8.6875 3C7.82456 3 7.125 3.69956 7.125 4.5625C7.125 5.42544 7.82456 6.125 8.6875 6.125Z",fill:"currentColor"})]}),wo=d.default.div`
  color: ${({theme:e})=>e.color.PRIMARY[900]};
  border: 1px solid ${({theme:e})=>e.color.NEUTRAL[200]};
  border-radius: 10px;
  padding: 11px 12px;
  display: flex;
  align-items: center;
  font-size: 14px;
`,mo=d.default.div`
  margin-right: 10px;
  flex-shrink: 0;
`,ko=d.default.div`
  color: ${({theme:e})=>e.color.NEUTRAL[700]};
  margin-bottom: 3px;
  display: flex;
  flex-wrap: wrap;
  gap: 1px 7px;

  span {
    display: inline-flex;
    align-items: center;
    gap: 3px;
    line-height: 1em;
    :not(:last-child) {
      padding-right: 5px;
      border-right: 1px solid ${({theme:e})=>e.color.NEUTRAL[700]};
    }
  }
`,Eo=d.default.span`
  display: block;
  font-weight: 500;
  line-height: 1em;
`,Mo=({name:e,lastName:o,idNumber:r,img:i,otherSections:n=[]})=>t.jsxs(wo,{children:[t.jsx(mo,{children:t.jsx(re,{img:i,initials:o?`${e.charAt(0)}${o.charAt(0)}`:e.charAt(0)})}),t.jsxs("div",{children:[t.jsxs(ko,{children:[r&&t.jsxs("span",{children:[t.jsx(Co,{}),r]}),n.map(a=>t.jsx("span",{children:a}))]}),t.jsxs(Eo,{children:[e," ",o]})]})]}),Io=e=>t.jsx("svg",{width:9,height:9,fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:t.jsx("path",{d:"M8.53 1.53A.75.75 0 0 0 7.47.47l1.06 1.06ZM.47 7.47a.75.75 0 0 0 1.06 1.06L.47 7.47Zm7 1.06a.75.75 0 0 0 1.06-1.06L7.47 8.53ZM1.53.47A.75.75 0 0 0 .47 1.53L1.53.47Zm5.94 0-7 7 1.06 1.06 7-7L7.47.47Zm1.06 7-7-7L.47 1.53l7 7 1.06-1.06Z",fill:"#404040"})}),Lo=d.default.div`
  background-color: ${e=>`rgba(0, 0, 0, ${e.opacity?e.opacity:"0.5"})`};
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${e=>e.zIndex?e.zIndex:"auto"};
  cursor: auto;
  animation: fadeIn 0.3s ease-in-out;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`,Fo=({onClose:e=()=>{},backdropOpacity:o,zIndex:r})=>(x.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow="visible"}),[]),t.jsx(Lo,{onClick:i=>{i.stopPropagation(),e()},opacity:o,zIndex:r})),ge=A.keyframes`
  from {
    transform: translateY(100px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`,ue=A.keyframes`
  from {
    transform: translateY(-100px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`,xe=A.keyframes`
  from {
    transform: translateX(-100px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`,be=A.keyframes`
  from {
    transform: translateX(100px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`,To=d.default.div`
  position: fixed;
  max-height: 100vh;
  max-width: 100vw;
  width: ${({fullWidth:e})=>e?"100%":"unset"};
  overflow: auto;
  animation: fadeIn 0.3s ease-in-out;
  z-index: ${e=>e.zIndex};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: ${e=>e.boxShadow||"0px 0px 24px 4px rgba(0, 12, 51, 0.05)"};

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  ${e=>{if(e.contentLocation==="bottom")return A.css`
        transform: translate(0, 0);
        right: unset;
        top: unset;
        left: 0;
        bottom: 0;
        animation: ${ge} 0.3s ease-out;
      `;if(e.contentLocation==="top")return A.css`
        transform: translate(0, 0);
        right: unset;
        bottom: unset;
        left: 0;
        top: 0;
        animation: ${ue} 0.3s ease-out;
      `;if(e.contentLocation==="left")return A.css`
        transform: translate(0, 0);
        top: unset;
        right: unset;
        left: 0;
        bottom: 0;
        animation: ${xe} 0.3s ease-out;
      `;if(e.contentLocation==="right")return A.css`
        transform: translate(0, 0);
        top: unset;
        left: unset;
        right: 0;
        bottom: 0;
        animation: ${be} 0.3s ease-out;
      `}}

  ${e=>{if(e.contentLocationInDesktop==="center")return A.css`
        @media screen and (min-width: 1024px) {
          transform: translate(-50%, -50%);
          bottom: unset;
          right: unset;
          top: 50%;
          left: 50%;
          animation: fadeIn 0.3s ease-out;
        }
      `;if(e.contentLocationInDesktop==="bottom")return A.css`
        @media screen and (min-width: 1024px) {
          transform: translate(0, 0);
          top: unset;
          right: unset;
          left: 0;
          bottom: 0;
          animation: ${ge} 0.3s ease-out;
        }
      `;if(e.contentLocationInDesktop==="top")return A.css`
        @media screen and (min-width: 1024px) {
          transform: translate(0, 0);
          top: unset;
          right: unset;
          left: 0;
          top: 0;
          animation: ${ue} 0.3s ease-out;
        }
      `;if(e.contentLocationInDesktop==="left")return A.css`
        @media screen and (min-width: 1024px) {
          transform: translate(0, 0);
          top: unset;
          right: unset;
          left: 0;
          bottom: 0;
          animation: ${xe} 0.3s ease-out;
        }
      `;if(e.contentLocationInDesktop==="right")return A.css`
        @media screen and (min-width: 1024px) {
          transform: translate(0, 0);
          top: unset;
          left: unset;
          right: 0;
          bottom: 0;
          animation: ${be} 0.3s ease-out;
        }
      `}}
  @media screen and (min-width: 1024px) {
    box-shadow: ${e=>e.boxShadowInDesktop||"0px 0px 24px 4px rgba(0, 12, 51, 0.05)"};
  }
`,So=({children:e,onClose:o,backdropOpacity:r,zIndex:i,contentLocation:n="center",contentLocationInDesktop:a="center",boxShadow:l,boxShadowInDesktop:f,fullWidth:h})=>t.jsxs(t.Fragment,{children:[t.jsx(Fo,{onClose:o,backdropOpacity:r,zIndex:i||4}),t.jsx(To,{zIndex:i||4,contentLocation:n,contentLocationInDesktop:a,onClick:c=>c.stopPropagation(),boxShadow:l,boxShadowInDesktop:f,fullWidth:h,children:e})]}),Bo=A.css`
  ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #c4c4c4;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: #ffffff;
  }
`;A.css`
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  ::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: none;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;const yo=d.default.div`
  background-color: ${e=>e.background||"#fff"};
  border-radius: ${e=>e.borderRadius?e.borderRadius:"15px"};
  max-height: ${e=>e.maxHeight?e.maxHeight:"90vh"};
  height: ${e=>e.height?e.height:"auto"};
  max-width: ${e=>e.maxWidth?e.maxWidth:"90vw"};
  width: ${e=>e.width?e.width:"90vw"};
  padding: ${e=>e.padding?e.padding:"1.5rem"};
  overflow: ${e=>e.overflow||"hidden"};
  cursor: auto;

  ${e=>{if(e.contentLocation&&e.contentLocation==="bottom")return A.css`
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        max-width: unset;
        width: 100vw;
      `;if(e.contentLocation&&e.contentLocation==="top")return A.css`
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        max-width: unset;
        width: 100vw;
      `;if(e.contentLocation&&e.contentLocation==="left")return A.css`
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        height: 100vh;
        max-height: ${()=>e.maxHeight?e.maxHeight:"100vh"};
        max-width: ${()=>e.maxWidth?e.maxWidth:"550px"};
      `;if(e.contentLocation&&e.contentLocation==="right")return A.css`
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        height: 100vh;
        max-height: ${()=>e.maxHeight?e.maxHeight:"100vh"};
        max-width: ${()=>e.maxWidth?e.maxWidth:"550px"};
      `}}

  ${e=>{if(e.contentLocationInDesktop==="center")return A.css`
        @media screen and (min-width: 1024px) {
          border-radius: ${()=>e.borderRadiusInDesktop?e.borderRadiusInDesktop:"15px"};
          height: auto;
          max-width: ${()=>e.maxWidth?e.maxWidth:"90vw"};
          max-height: ${()=>e.maxHeight?e.maxHeight:"90vh"};
          padding: ${()=>e.padding?e.padding:"1.5rem"};
        }
      `;if(e.contentLocationInDesktop==="bottom")return A.css`
        @media screen and (min-width: 1024px) {
          border-radius: ${()=>e.borderRadiusInDesktop?e.borderRadiusInDesktop:"15px"};
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
          max-width: unset;
          height: unset;
          width: ${()=>e.width?e.width:"100vw"};
        }
      `;if(e.contentLocationInDesktop==="top")return A.css`
        @media screen and (min-width: 1024px) {
          border-radius: ${()=>e.borderRadiusInDesktop?e.borderRadiusInDesktop:"15px"};
          border-top-left-radius: 0;
          border-top-right-radius: 0;
          max-width: unset;
          height: unset;
          width: ${()=>e.width?e.width:"100vw"};
        }
      `;if(e.contentLocationInDesktop==="left")return A.css`
        @media screen and (min-width: 1024px) {
          border-radius: ${()=>e.borderRadiusInDesktop?e.borderRadiusInDesktop:"15px"};
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
          height: 100vh;
          max-height: ${()=>e.maxHeight?e.maxHeight:"100vh"};
          max-width: ${()=>e.maxWidth?e.maxWidth:"550px"};
        }
      `;if(e.contentLocationInDesktop==="right")return A.css`
        @media screen and (min-width: 1024px) {
          border-radius: ${()=>e.borderRadiusInDesktop?e.borderRadiusInDesktop:"15px"};
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
          height: 100vh;
          max-height: ${()=>e.maxHeight?e.maxHeight:"100vh"};
          max-width: ${()=>e.maxWidth?e.maxWidth:"550px"};
        }
      `}}
  ${Bo}
`,zo=d.default.div`
  background-color: white;
  box-shadow: 0 2px 7px #e5e5e5;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  display: ${({closeIcon:e})=>e?"flex":"none"};
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 11px;
  cursor: pointer;
  @media screen and (min-width: 1024px) {
    display: ${({closeIconInDesktop:e})=>e?"flex":"none"};
  }
`,U=({children:e,onClose:o,backdropOpacity:r,padding:i,borderRadius:n,borderRadiusInDesktop:a,maxHeight:l,height:f,maxWidth:h,width:c,zIndex:p,overflow:u,contentLocation:v="center",contentLocationInDesktop:b="center",closeIcon:w,closeIconInDesktop:M,background:k="#fff",boxShadow:m,boxShadowInDesktop:L})=>t.jsx(So,{onClose:o,backdropOpacity:r,zIndex:p,contentLocation:v,contentLocationInDesktop:b,boxShadow:m,boxShadowInDesktop:L,children:t.jsxs(yo,{padding:i,borderRadius:n,borderRadiusInDesktop:a,maxHeight:l,height:f,maxWidth:h,width:c,background:k,overflow:u,contentLocation:v,contentLocationInDesktop:b,children:[(w||M)&&t.jsx(zo,{onClick:o,closeIconInDesktop:M,closeIcon:w,children:t.jsx(Io,{})}),e]})}),jo=d.default.h2`
  color: ${e=>e.theme.color.PRIMARY[900]};
  margin-bottom: 20px;
  font-size: 20px;
`,Uo=d.default.div`
  display: flex;

  input {
    border-radius: 8px;
    border: 1px solid ${e=>e.theme.color.NEUTRAL[300]};
    display: block;
    flex-grow: 1;
    width: 0;
    padding-left: 10px;
    margin-right: 10px;
  }
`,ve=({onConfirm:e,onClose:o,zIndex:r,onlyIntegers:i,initialValue:n})=>{const a=x.useRef(null),[l,f]=x.useState(n||""),h=p=>{const u=p.target.value;let v=/^[0-9]\d*(\.(\d*))?$/;i&&(v=/^[0-9]*$/),!(u!==""&&!v.test(u))&&f(u)};x.useEffect(()=>{a.current.focus()},[]);const c=Number(l);return t.jsxs(U,{onClose:o,maxWidth:"350px",zIndex:r||6,children:[t.jsx(jo,{children:"Especifica la cantidad"}),t.jsxs(Uo,{children:[t.jsx("input",{type:"text",inputMode:i?"numeric":"decimal",value:l,onChange:h,ref:a}),t.jsx(T,{design:"solid",size:"xs",onClick:()=>e(c),disabled:c<=0,children:"Agregar"})]})]})},Ce=e=>t.jsx(y,{viewBox:"0 0 12 12",...e,children:t.jsx("path",{xmlns:"http://www.w3.org/2000/svg",fillRule:"evenodd",clipRule:"evenodd",d:"M4.86399 0.666504C4.21911 0.666504 3.69633 1.18928 3.69633 1.83416V2.1813H1.077C0.850426 2.1813 0.666748 2.36497 0.666748 2.59155C0.666748 2.81813 0.850426 3.00181 1.077 3.00181H1.80284V9.40812C1.80284 10.4713 2.66472 11.3332 3.72789 11.3332H8.27227C9.33545 11.3332 10.1973 10.4713 10.1973 9.40812V3.00181H10.9232C11.1497 3.00181 11.3334 2.81813 11.3334 2.59155C11.3334 2.36497 11.1497 2.1813 10.9232 2.1813H8.30383V1.83416C8.30383 1.18928 7.78105 0.666504 7.13618 0.666504H4.86399ZM4.51685 1.83416C4.51685 1.64244 4.67227 1.48702 4.86399 1.48702H7.13618C7.32789 1.48702 7.48332 1.64244 7.48332 1.83416V2.1813H4.51685V1.83416ZM2.62336 9.40812V3.00181H9.37681V9.40812C9.37681 10.0181 8.88229 10.5127 8.27227 10.5127H3.72789C3.11787 10.5127 2.62336 10.0181 2.62336 9.40812ZM6.00008 4.07479C5.7735 4.07479 5.58982 4.25847 5.58982 4.48504L5.58982 9.02942C5.58982 9.256 5.7735 9.43968 6.00008 9.43968C6.22666 9.43968 6.41034 9.256 6.41034 9.02942L6.41034 4.48504C6.41034 4.25847 6.22666 4.07479 6.00008 4.07479Z",fill:"currentColor"})}),Do=d.default.div`
  display: flex;
  justify-content: center;
`,Ho=d.default.span`
  color: ${({isZero:e,error:o=!1,theme:r})=>e?o?r.color.ALERT[900]:r.color.NEUTRAL[500]:r.color.PRIMARY[900]};
  text-align: center;
  padding: 0 8px;
  min-width: 6ch;
`,No=d.default.span`
  display: flex;
  justify-content: center;
  align-items: center;
`,Po=d.default.div`
  background-color: ${({theme:e})=>e.color.NEUTRAL[50]};
  border-radius: 100px;
  padding: 3px;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 13px;
  opacity: ${e=>e.isDisabled?.5:1};
  transition: 0.3s ease-out;
  width: fit-content;
  align-self: flex-end;
  border: ${({error:e=!1,theme:o})=>e?`1px solid ${o.color.ALERT[900]}`:"1px solid transparent"};

  @media (hover: hover) {
    :hover {
      transition: 0.3s ease-in;
      background-color: white;
      box-shadow: 0px 1px 6px rgba(60, 60, 60, 0.2);
      cursor: ${e=>e.isDisabled?"auto":"pointer"};
      color: ${e=>e.theme.color.SECONDARY[900]};
    }
  }

  button {
    background-color: ${e=>e.theme.color.SECONDARY[900]};
    border: none;
    color: white;
    border-radius: 50%;
    width: ${({variant:e})=>e==="card"?"42px":"35px"};
    height: ${({variant:e})=>e==="card"?"40px":"35px"};
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s ease-out;
    font-size: ${({variant:e})=>e==="card"?"18px":"16px"};

    @media (hover: hover) {
      :hover {
        cursor: ${e=>e.isDisabled?"auto":"pointer"};
        background-color: ${e=>e.theme.color.SECONDARY[700]};
        transition: 0.3s ease-in;
      }
    }

    :first-child {
      background-color: ${e=>e.minQuantity?"white":e.theme.color.SECONDARY[900]};
      border: ${e=>`1px solid ${e.minQuantity?e.canDelete?e.theme.color.ALERT[900]:e.theme.color.NEUTRAL[400]:"none"}`};
      color: ${e=>e.minQuantity?e.canDelete?e.theme.color.ALERT[900]:e.theme.color.NEUTRAL[400]:"white"};

      :hover {
        background-color: ${e=>e.minQuantity?"initial":e.theme.color.SECONDARY[700]};
      }
    }
  }

  @media (max-width: 850px) {
    background-color: white;
    box-shadow: 0px 1px 6px rgba(60, 60, 60, 0.2);
  }
`,we=({value:e,onSetQuantity:o,onDelete:r,minimumQuantity:i=1,measureUnit:n,onlyIntegers:a,blockInputModal:l,disabled:f,hasError:h,variant:c,renderModal:p,zIndex:u,style:v,noDecrement:b,noIncrement:w})=>{const[M,k]=x.useState(!1),m=Number(e||0),L=e===null||m<=i,B=C=>{C.stopPropagation();const E=m%1!==0?Math.ceil(m):m+1;o(E)},z=C=>{if(C.stopPropagation(),L){r&&r();return}const E=m%1>0?Math.floor(m):m-1;o(E)},D=C=>{const E=a?Math.round(C):C;o(E<=i?i:E),k(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(Do,{children:t.jsxs(Po,{isDisabled:f,onClick:()=>{l||f||k(!0)},minQuantity:L,canDelete:!!r,variant:c,error:h,style:v,children:[!b&&t.jsx("button",{disabled:f,onClick:z,children:L&&r?t.jsx(No,{children:t.jsx(Ce,{color:s.color.ALERT[900]})}):"-"}),t.jsx(Ho,{children:`${e===null?"-":e} ${e!==null&&n||""}`}),!w&&t.jsx("button",{onClick:B,disabled:f,children:"+"})]})}),M&&!l&&(p?p(t.jsx(ve,{onClose:()=>k(!1),onConfirm:D,initialValue:e?e.toString():"",onlyIntegers:a,zIndex:u})):t.jsx(ve,{onClose:()=>k(!1),onConfirm:D,initialValue:e?e.toString():"",onlyIntegers:a,zIndex:u}))]})},Go=e=>t.jsx(y,{viewBox:"0 0 15 9",...e,children:t.jsx("path",{xmlns:"http://www.w3.org/2000/svg",fillRule:"evenodd",clipRule:"evenodd",d:"M0.692211 1.06721C0.948493 0.81093 1.36401 0.81093 1.62029 1.06721L7.28125 6.72817L12.9422 1.06721C13.1985 0.81093 13.614 0.81093 13.8703 1.06721C14.1266 1.32349 14.1266 1.73901 13.8703 1.99529L7.74529 8.12029C7.48901 8.37657 7.07349 8.37657 6.81721 8.12029L0.692211 1.99529C0.43593 1.73901 0.43593 1.32349 0.692211 1.06721Z",fill:"currentColor"})}),Yo=d.default.div`
  border: 1px solid ${({theme:e})=>e.color.NEUTRAL[100]};
  color: 1px solid ${({theme:e})=>e.color.NEUTRAL[700]};
  border-radius: 8px;
  padding: 10px;
  font-size: 12px;
`,Zo=d.default.div`
  margin-bottom: 8px;
  display: flex;
  gap: 10px;
  cursor: ${({canClick:e})=>e?"pointer":"auto"};
`,Wo=d.default.img`
  border-radius: 8px;
  width: 55px;
  height: 55px;
  object-fit: cover;
`,Qo=d.default.div`
  flex-grow: 1;
`,Oo=d.default.span`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 5px;
  font-weight: 500;
  font-size: 14px;

  svg {
    flex-shrink: 0;
    margin: 3px 3px 0 0;
    transition: 0.3s;
    transform: ${({detailsActive:e})=>e?"rotate(0)":"rotate(-90deg)"};
    cursor: pointer;
  }
`,Vo=d.default.span`
  color: ${({theme:e})=>e.color.SUCCESS[900]};
`,Xo=d.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 3px;
`,me=d.default.span`
  display: block;
  color: 1px solid ${({theme:e})=>e.color.PRIMARY[900]};
  span {
    font-weight: 700;
  }
`,Jo=d.default.span`
  background-color: ${({theme:e})=>e.color.SUCCESS[900]};
  border-radius: 50px;
  color: white;
  display: inline-block;
  padding: 5px 8px;
  font-weight: 500;
  font-size: 10px;
`,Ro=d.default.input`
  border: 1px solid ${({theme:e})=>e.color.NEUTRAL[100]};
  height: 34px;
  border-radius: 8px;
  width: 100%;
  font-size: 12px;
  padding: 5px 10px;

  :focus {
    border: 1px solid ${({theme:e})=>e.color.NEUTRAL[500]};
    outline: none;
  }
`,qo=d.default.div`
  margin-top: 8px;
`,Ko=d.default.div`
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,$o=({img:e,name:o,currencySymbol:r,total:i,unitPrice:n,quantity:a,comment:l,onClick:f,onChangeQuantity:h,onDeleteProduct:c,onChangeComment:p,discount:u,measureUnit:v,productDetails:b,renderModal:w,onlyIntegers:M})=>{const[k,m]=x.useState(!0),L=v||"u.";return t.jsxs(Yo,{children:[t.jsxs(Zo,{onClick:f||(()=>{}),canClick:!!f,children:[(e==null?void 0:e.src)&&t.jsx(Wo,{...e}),t.jsxs(Qo,{children:[t.jsxs(Oo,{detailsActive:k,children:[o,t.jsx(Go,{size:16,onClick:B=>{B.stopPropagation(),m(z=>!z)}})]}),u&&t.jsx(Vo,{children:u.label}),t.jsxs(Xo,{children:[u&&t.jsxs(Jo,{children:["-",r,u.discountedAmount.toFixed(2)]}),t.jsxs(me,{children:[r,t.jsx("span",{children:i.toFixed(2)})]})]})]})]}),k&&t.jsxs("div",{children:[t.jsx(Ro,{value:l,onChange:B=>p(B.target.value),placeholder:"Agregar alg\xFAn comentario"}),b&&t.jsx(qo,{children:b})]}),t.jsxs(Ko,{children:[t.jsxs(me,{children:[r,t.jsx("span",{children:n.toFixed(2)})," x ",L]}),t.jsx(we,{value:a,onSetQuantity:h,measureUnit:L,onDelete:c,renderModal:w,onlyIntegers:M})]})]})},_o=d.default.div`
  padding-right: 5px;
  margin: ${({bottom:e})=>e?"0 10px 8px":0};
  display: flex;
  justify-content: space-between;
  font-weight: 500;

  & > span {
    > span {
      font-weight: 700;
    }
  }
`,er=d.default.div`
  display: flex;
  align-items: center;
  gap: 5px;

  & > span {
    :first-child {
      color: ${({theme:e})=>e.color.NEUTRAL[500]};
      font-weight: 500;
      text-decoration: line-through;
    }
    :last-child {
      color: ${({disabled:e,theme:o})=>e?o.color.NEUTRAL[500]:o.color.PRIMARY[900]};
      text-decoration: none;
      margin-left: 5px;
      > span {
        font-weight: 700;
      }
    }
  }
`,tr=d.default.span`
  background-color: ${({theme:e})=>e.color.SECONDARY[900]};
  border-radius: 50px;
  padding: 5px 6px;
  color: white;
  font-size: 10px;
  font-weight: 700;
`,ke=({currencySymbol:e,unitPrice:o,total:r,measureUnit:i,discount:n,disabled:a,bottom:l})=>{const f=i||"u.";return t.jsxs(_o,{disabled:a,bottom:l,children:[t.jsxs("span",{children:[e,o.toFixed(2)," x ",f]}),t.jsxs(er,{disabled:a,children:[n&&t.jsxs(t.Fragment,{children:[t.jsxs("span",{children:[e,n.prevTotal.toFixed(2)]}),t.jsx(tr,{children:n.label})]}),t.jsxs("span",{children:[e,t.jsx("span",{children:r.toFixed(2)})]})]})]})},or=d.default.div`
  background-color: ${({disabled:e,theme:o})=>e?o.color.NEUTRAL[50]:"transparent"};
  border: 1px solid ${({theme:e})=>e.color.NEUTRAL[100]};
  border-radius: 8px;
  min-height: ${({hasDetails:e})=>e?"140px":"unset"};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  gap: 5px;
  font-size: 14px;
  overflow: hidden;
`,rr=d.default.div`
  display: flex;
  align-items: stretch;

  & > img {
    width: 75px;
    height: 88px;
    object-fit: cover;
  }
`,nr=d.default.div`
  padding: 8px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: ${({hasDetails:e})=>e?"flex-start":"space-between"};
  gap: 5px;
`,ir=d.default.div`
  color: ${({disabled:e,theme:o})=>e?o.color.NEUTRAL[500]:o.color.NEUTRAL[800]};
  display: flex;
  align-items: flex-start;
  gap: 5px;
  font-weight: 500;
`,ar=d.default.div`
  color: ${({theme:e})=>e.color.NEUTRAL[500]};
  margin-top: 8px;
  font-size: 12px;
`,dr=({name:e,img:o,quantity:r,currencySymbol:i,unitPrice:n,total:a,productDetails:l,discount:f,measureUnit:h,disabled:c})=>t.jsxs(or,{disabled:c,hasDetails:!!l,children:[t.jsxs(rr,{children:[(o==null?void 0:o.src)&&t.jsx("img",{...o}),t.jsxs(nr,{hasDetails:!!l,children:[t.jsxs(ir,{disabled:c,children:[t.jsx(de,{opacity:.4,children:r}),e]}),l&&t.jsx(ar,{children:l}),!l&&t.jsx(ke,{currencySymbol:i,unitPrice:n,total:a,discount:f,disabled:c})]})]}),l&&t.jsx(ke,{currencySymbol:i,unitPrice:n,total:a,discount:f,disabled:c,bottom:!0})]}),lr=d.default.div`
  padding: 20px;
  background: linear-gradient(#feedec 25%, #fff 25%);
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  text-align: center;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #383838;
`,cr=d.default.p`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 21px;
  color: #808080;
  margin: 15px 0;
`,sr=d.default.div`
  margin-top: 30px;
  padding-top: 20px;
  display: flex;
  justify-content: space-around;
  gap: 10px;
  border-top: 1px solid #dfdfdf;
`,Ar=d.default.div`
  width: 3px;
  background: #dfdfdf;
`,fr=d.default.div`
  padding: 0 20px;
`,pr="data:image/webp;base64,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",hr=({height:e})=>t.jsx("img",{src:pr,height:e||45,alt:"trash"}),gr=({children:e,icon:o=t.jsx(hr,{height:150}),note:r="Esta acci\xF3n no se puede revertir.",btnLeft:i={onClick:()=>{},text:"Cancelar"},btnRight:n={onClick:()=>{},text:"Eliminar"}})=>t.jsxs(lr,{children:[o,t.jsx(fr,{children:e}),t.jsx(cr,{children:r}),t.jsxs(sr,{children:[t.jsx(T,{design:"flat",fullWidth:!0,onClick:()=>i.onClick(),children:i.text}),t.jsx(Ar,{}),t.jsx(T,{design:"flat",fullWidth:!0,onClick:()=>n.onClick(),color:"ALERT/900",children:n.text})]})]}),ur=d.default.div`
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #383838;
  background: transparent;
  @media screen and (min-width: 1024px) {
    text-align: center;
    background: #fff;
  }

  button {
    font-family: "Poppins";
    font-style: normal;
  }
`,xr=d.default.div`
  border-radius: 15px 15px 0 0;
  background: #f3f5ff;
  padding: 20px;
  @media screen and (min-width: 1024px) {
    padding: 50px 58px;
  }
`,br=d.default.p`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 21px;
  color: #808080;
  margin: 5px 0 0;
`,vr=d.default.div`
  padding: 20px;
  @media screen and (min-width: 1024px) {
    display: flex;
    gap: 10px;
    flex-direction: row;
    justify-content: space-around;
    padding: 27px 29px;
  }
`,Cr=d.default.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.6875rem;
  letter-spacing: -0.04em;
  color: #151e5a;
`,wr=d.default.div`
  margin: 0 15px 15px;
  background: #fff;
  border-radius: 15px;
  @media screen and (min-width: 1024px) {
    margin: 0;
  }
`;function mr(e="(min-width: 768px)"){const[o,r]=x.useState({matches:window.innerWidth>(()=>{const n=e.match(/(\d+)/);return n?n[0]:768})()});return x.useEffect(()=>{let n=window.matchMedia(e);return n.addEventListener("change",r),()=>n.removeEventListener("change",r)},[]),{status:Boolean(o&&o.matches)}}const kr=({children:e,note:o="Esta acci\xF3n no se puede revertir.",btnLeft:r={onClick:()=>{},text:"Cancelar"},btnRight:i={onClick:()=>{},text:"Eliminar"}})=>{const{status:n}=mr("(min-width: 1023px)");return t.jsxs(ur,{children:[t.jsxs(wr,{children:[t.jsxs(xr,{children:[t.jsx(Cr,{children:e}),t.jsx(br,{children:o})]}),t.jsxs(vr,{children:[n&&t.jsx(T,{design:"flat",fullWidth:!0,onClick:()=>r.onClick(),color:"PRIMARY/900",style:{borderRadius:"32px",padding:"20px 0"},children:r.text}),t.jsx(T,{design:"solid",fullWidth:!0,onClick:()=>i.onClick(),style:{borderRadius:"32px",padding:"20px 60px"},children:i.text})]})]}),!n&&t.jsx(T,{design:"flat",fullWidth:!0,onClick:()=>r.onClick(),color:"PRIMARY/900",style:{margin:"0 15px 15px",width:"calc(100% - 30px)",padding:"20px",borderRadius:"15px"},children:r.text})]})},Er={xs:"(min-width: 360px)",sm:"(min-width: 591px)",md:"(min-width: 800px)",lg:"(min-width: 1400px)"},Mr=d.default.div`
  background: transparent;
  color: #383838;
  border-radius: 20px;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5rem;

  @media ${Er.md} {
    text-align: center;
  }
`,Ir=d.default.div`
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
  background: #fff;
  border-radius: 15px;
`,Lr=d.default.div`
  border-radius: 15px 15px 0 0;
  background: #f3f5ff;
  padding: 25px 20px;
`,Fr=d.default.div`
  color: #151e5a;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.6875rem;
  letter-spacing: -0.04em;
`,Tr=d.default.p`
  color: #808080;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
`,Ee=d.default.div`
  padding: 20px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;

  button {
    font-size: 14px;
  }

  ${({bottom:e})=>{if(e)return A.css`
        padding: 0;
        margin: 10px 0;
        button {
          box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
        }
      `}}
`,Me=({title:e,content:o,options:r,cancelOptions:i})=>t.jsxs(Mr,{children:[t.jsxs(Ir,{children:[t.jsxs(Lr,{children:[e&&t.jsx(Fr,{children:e}),t.jsx(Tr,{children:o})]}),r.length>0&&t.jsx(Ee,{children:r.map(n=>t.jsx(T,{design:"solid",shape:"circular",size:"xs",fullWidth:!0,onClick:n.onClick,disabled:n.disabled,color:n.type==="primary"?"SECONDARY/900":"QUATERNARY/200",fontColor:n.type==="primary"?"SECONDARY/0":"SECONDARY/900",style:{gap:0},children:n.content}))})]}),i.length>0&&t.jsx(Ee,{bottom:!0,children:i.map(n=>t.jsx(T,{design:"flat",size:"xs",fullWidth:!0,onClick:n.onClick,disabled:n.disabled,color:"PRIMARY/900",style:{gap:0},children:n.content}))})]}),Sr=({color:e="#4318FF"})=>t.jsxs("svg",{width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M22.53 3.47a.75.75 0 0 1 0 1.06l-10 10a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06L12 12.94l9.47-9.47a.75.75 0 0 1 1.06 0Z",fill:e}),t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5 3.75A1.25 1.25 0 0 0 3.75 5v14A1.25 1.25 0 0 0 5 20.25h14A1.25 1.25 0 0 0 20.25 19v-7a.75.75 0 0 1 1.5 0v7A2.75 2.75 0 0 1 19 21.75H5A2.75 2.75 0 0 1 2.25 19V5A2.75 2.75 0 0 1 5 2.25h11a.75.75 0 0 1 0 1.5H5Z",fill:e})]}),Br=({color:e="#4318FF"})=>t.jsx("svg",{width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5 3.75c-.69 0-1.25.56-1.25 1.25v14c0 .69.56 1.25 1.25 1.25h14c.69 0 1.25-.56 1.25-1.25V5c0-.69-.56-1.25-1.25-1.25H5ZM2.25 5A2.75 2.75 0 0 1 5 2.25h14A2.75 2.75 0 0 1 21.75 5v14A2.75 2.75 0 0 1 19 21.75H5A2.75 2.75 0 0 1 2.25 19V5Z",fill:e})}),yr=d.default.label`
  display: flex;
  gap: 9px;
  font-weight: 500;
  font-size: 0.8125rem;
  line-height: 1.25rem;
  color: ${({disabled:e})=>e?"gray":"#242954"};
  cursor: pointer;
  input {
    display: none;
  }
`,zr=({children:e,value:o="value",callbackOnChange:r=()=>{},disabled:i=!1,...n})=>{const[a,l]=x.useState(!1);return x.useEffect(()=>{n.checked&&l(n.checked)},[]),t.jsxs(yr,{disabled:i,children:[t.jsx("input",{type:"checkbox",value:o,disabled:i,onChange:f=>{r(f.target.value,a&&!i),l(!a)},...n}),t.jsx("span",{children:a?t.jsx(Sr,{color:i?"gray":"#4318FF"}):t.jsx(Br,{color:i?"gray":"#4318FF"})}),e]})},jr=d.default.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 9px;
  cursor: pointer;

  label {
    width: 100%;
    font: normal 16px "Poppins";
    letter-spacing: -0.04em;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 500;
    font-size: 0.8125rem;
    line-height: 1.25rem;
    color: ${({disabled:e})=>e?"gray":"#242954"};
  }

  input[type="radio"] {
    -webkit-appearance: none !important;
    border: 2px solid ${({disabled:e})=>e?"gray":"#4318FF"};
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
    padding: 9px;
    border-radius: 50px;
    display: inline-block;
    margin: 3px 0 0;
    cursor: pointer;

    &:checked:after {
      content: " ";
      width: 14px;
      height: 14px;
      border-radius: 50px;
      position: absolute;
      top: 7px;
      left: 4px;
      // SECONDARY[900]
      background: ${({disabled:e})=>e?"gray":"#4318FF"};
      text-shadow: 0px;
      font-size: 32px;
    }
  }
`,Ur=({text:e,...o})=>t.jsxs(jr,{disabled:Boolean(o.disabled),children:[t.jsx("input",{type:"radio",...o}),t.jsx("label",{htmlFor:o==null?void 0:o.id,children:e})]}),Dr=d.default.div`
  @media (max-width: 600px) {
    padding-bottom: 15px;
  }
`,Hr=d.default.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,Nr=d.default.div`
  padding: 0 20px;
  & > :nth-child(2) {
    margin-top: 5px;
  }

  svg,
  img {
    cursor: pointer;
  }
`,Pr=d.default.ul`
  color: ${()=>s.color.NEUTRAL[700]};
  padding: 0;
  margin: 10px 0;
  list-style-type: none;
  font-size: 14px;
`,Q=d.default.li`
  background-color: ${({alert:e})=>e?s.color.ALERT[100]:"white"};
  color: ${({alert:e})=>e?s.color.ALERT[900]:"inherit"};
  min-height: 50px;
  padding: 0 20px;
  display: flex;
  justify-content: ${({optionsInCenter:e})=>e?"center":"space-between"};
  align-items: center;
  gap: ${({optionsInCenter:e})=>e?"10px":"5px"};
  opacity: ${({disabled:e})=>e?.6:1};
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};;

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
`,Ie=t.jsx("div",{style:{display:"inline-block"},children:t.jsx(Z,{width:"20px",height:"20px"})}),Gr=({options:e,onClose:o,contentLocation:r,contentLocationInDesktop:i,defaultDescription:n="",defaultTitle:a="",optionsInCenter:l=!1})=>{const[f,h]=x.useState(null),c=x.useMemo(()=>{if(f===null)return null;const p=e[f];if(p&&"options"in p)return p},[f,e]);return t.jsx(U,{maxWidth:"500px",padding:"20px 0",onClose:o,contentLocation:r||"bottom",contentLocationInDesktop:i||"center",closeIcon:!0,children:t.jsxs(Dr,{children:[t.jsxs(Nr,{children:[t.jsxs(Hr,{children:[c&&t.jsx(j,{onClick:()=>h(null)}),t.jsx(I,{as:"h2",size:"md",children:(c==null?void 0:c.text)||a})]}),n.length>0&&t.jsx(I,{color:"NEUTRAL/400",size:"sm",weight:"regular",children:(c==null?void 0:c.description)||n})]}),t.jsxs(Pr,{children:[!c&&e.map((p,u)=>"onClick"in p?t.jsxs(Q,{alert:p.alert,disabled:p.disabled||p.loading,onClick:()=>{!p.loading&&!p.disabled&&(p.onClick(),o())},optionsInCenter:l,children:[p.text," ",p.loading?Ie:p.icon]},`option-${u}`):t.jsxs(Q,{onClick:()=>{h(u)},optionsInCenter:l,children:[p.text," ",t.jsx("div",{style:{transform:"rotateY(180deg)"},children:t.jsx(j,{})})]},`option-${u}`)),c==null?void 0:c.options.map((p,u)=>t.jsxs(Q,{alert:p.alert,disabled:p.disabled||p.loading,onClick:()=>{!p.loading&&!p.disabled&&p.onClick()},optionsInCenter:l,children:[p.text," ",p.loading?Ie:p.icon]},`suboption-${u}`))]})]})})},Yr=({cardProps:e,...o})=>t.jsx(U,{background:"transparent",boxShadowInDesktop:"none",padding:"0 10px",contentLocation:"bottom",maxWidth:"650px",...e,children:t.jsx(Me,{...o})}),Zr=(e,o=1024*8)=>{let r=!0,i=null;return e.size/1024>o&&(r=!1,i={code:"F0001",message:`El archivo ${e.name} pesa ${(e.size/1024/1024).toFixed(2)} MB. Intenta subir una imagen menor a ${o/1024} MB `}),{success:r,error:i}},O=({onSelectFile:e,maxKBSize:o,onError:r=()=>{},acceptedFiles:i,validFileExtensions:n,children:a,style:l})=>{const f=x.useRef(null),h=()=>f.current.click(),c=()=>{const b=f.current.files[0];v(b)},p=b=>{b.stopPropagation(),b.preventDefault();const w=b.dataTransfer.files[0];v(w)},u=b=>n?new RegExp(`${n.join("|")}$`,"i").exec(b.toLowerCase()):!0,v=b=>{var M;if(!b)return;if(!u(b.name)){r("Tipo de archivo no permitido");return}const w=Zr(b,o);if(!w.success){r((M=w.error)==null?void 0:M.message);return}e(b)};return t.jsxs("div",{onClick:h,onDragOver:b=>b.preventDefault(),onDrop:p,style:l,children:[a,t.jsx("input",{ref:f,style:{display:"none"},onChange:c,type:"file",accept:i})]})},Le=()=>{const e=x.useRef(!0);return x.useEffect(()=>{e.current=!1},[]),e.current},Wr=d.default.button`
  border: 1px solid #fff;
  font-size: 14px;
  border-radius: 50%;
  display: flex;
  height: 34px;
  width: 34px;
  justify-content: center;
  background: #fff;
  align-items: center;
  text-align: center;
  color: ${({theme:e,variant:o="primary"})=>o==="primary"?e.color.SECONDARY[900]:e.color.PRIMARY[900]};
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  padding: 0;
  margin: 0;
  transition: 0.3s;
  :hover {
    box-shadow: 0px 1px 8px rgba(45, 45, 45, 0.2);
  }
`,Fe=e=>{const o=e.slice(e.lastIndexOf("/"));return[o.slice(1,o.indexOf(".")),o.slice(o.lastIndexOf(".")+1).toUpperCase()]},Qr=e=>t.jsx(y,{viewBox:"0 0 10 8",...e,children:t.jsx("path",{xmlns:"http://www.w3.org/2000/svg",d:"M8.79444 1.53098C9.09821 1.24938 9.11617 0.774844 8.83457 0.471079C8.55297 0.167315 8.07843 0.149348 7.77467 0.43095L8.79444 1.53098ZM1.05554 6.65985C0.751779 6.94145 0.733813 7.41598 1.01541 7.71975C1.29702 8.02351 1.77155 8.04148 2.07532 7.75988L1.05554 6.65985ZM7.77467 7.75987C8.07844 8.04147 8.55297 8.02351 8.83457 7.71974C9.11617 7.41598 9.09821 6.94144 8.79444 6.65984L7.77467 7.75987ZM2.07532 0.430942C1.77155 0.14934 1.29702 0.167306 1.01541 0.471071C0.733813 0.774836 0.751779 1.24937 1.05554 1.53097L2.07532 0.430942ZM7.77467 0.43095L1.05554 6.65985L2.07532 7.75988L8.79444 1.53098L7.77467 0.43095ZM8.79444 6.65984L2.07532 0.430942L1.05554 1.53097L7.77467 7.75987L8.79444 6.65984Z",fill:"currentColor"})}),Te=e=>t.jsx(y,{viewBox:"0 0 18 17",...e,children:t.jsx("path",{xmlns:"http://www.w3.org/2000/svg",d:"M1 13.6923H1.75H1ZM14.5385 16V15.25V16ZM3.46154 16V16.75H3.46154L3.46154 16ZM17 3.30772H17.75H17ZM17 13.6923H16.25H17ZM14.5385 1.00002L14.5385 0.250023L14.5385 1.00002ZM3.46154 1L3.46154 1.75L3.46154 1ZM4.69231 7.92307L5.20526 7.37592C4.91677 7.10546 4.46784 7.10546 4.17935 7.37592L4.69231 7.92307ZM12.7947 16.5472C13.0969 16.8304 13.5715 16.8151 13.8548 16.513C14.1381 16.2108 14.1228 15.7361 13.8206 15.4528L12.7947 16.5472ZM16.487 13.6625C16.7892 13.9458 17.2639 13.9305 17.5472 13.6283C17.8305 13.3262 17.8151 12.8515 17.513 12.5682L16.487 13.6625ZM13.3077 9.65384L13.8206 9.10669C13.5322 8.83623 13.0832 8.83623 12.7947 9.10669L13.3077 9.65384ZM9.92308 12.8269L9.41012 13.3741L9.92308 12.8269ZM1 11.3846H0.25H1ZM14.5385 15.25L3.46154 15.25L3.46154 16.75L14.5385 16.75V15.25ZM16.25 3.30772L16.25 13.6923H17.75L17.75 3.30772H16.25ZM14.5385 0.250023L3.46155 0.25L3.46154 1.75L14.5385 1.75002L14.5385 0.250023ZM17.75 3.30772C17.75 1.57414 16.2658 0.250026 14.5385 0.250023L14.5385 1.75002C15.5301 1.75002 16.25 2.49229 16.25 3.30772H17.75ZM1.75 3.30769C1.75 2.49226 2.46995 1.75 3.46154 1.75L3.46155 0.25C1.73419 0.249996 0.250001 1.57411 0.25 3.30769H1.75ZM0.25 13.6923C0.25 15.4259 1.73418 16.75 3.46154 16.75V15.25C2.46995 15.25 1.75 14.5077 1.75 13.6923H0.25ZM14.5385 16.75C16.2658 16.75 17.75 15.4259 17.75 13.6923H16.25C16.25 14.5077 15.53 15.25 14.5385 15.25V16.75ZM13.7885 5.03846C13.7885 5.53526 13.344 6.01923 12.6923 6.01923V7.51923C14.0798 7.51923 15.2885 6.45341 15.2885 5.03846H13.7885ZM12.6923 6.01923C12.0406 6.01923 11.5962 5.53526 11.5962 5.03846H10.0962C10.0962 6.45341 11.3048 7.51923 12.6923 7.51923V6.01923ZM11.5962 5.03846C11.5962 4.54166 12.0406 4.05769 12.6923 4.05769V2.55769C11.3048 2.55769 10.0962 3.62351 10.0962 5.03846H11.5962ZM12.6923 4.05769C13.344 4.05769 13.7885 4.54165 13.7885 5.03846H15.2885C15.2885 3.62351 14.0798 2.55769 12.6923 2.55769V4.05769ZM17.513 12.5682L13.8206 9.10669L12.7947 10.201L16.487 13.6625L17.513 12.5682ZM4.17935 8.47023L9.41012 13.3741L10.436 12.2798L5.20526 7.37592L4.17935 8.47023ZM9.41012 13.3741L12.7947 16.5472L13.8206 15.4528L10.436 12.2798L9.41012 13.3741ZM12.7947 9.10669L9.41012 12.2798L10.436 13.3741L13.8206 10.201L12.7947 9.10669ZM0.25 3.30769L0.25 11.3846H1.75L1.75 3.30769H0.25ZM0.25 11.3846L0.25 13.6923H1.75L1.75 11.3846H0.25ZM1.51296 11.9318L5.20526 8.47023L4.17935 7.37592L0.487044 10.8375L1.51296 11.9318Z",fill:"currentColor"})}),Or=d.default.div`
  min-height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  cursor: pointer;
  padding: 10px;
  font: normal 14px "Poppins";
  letter-spacing: -0.04em;
  border: 2px dashed ${({theme:e})=>e.color.SECONDARY[900]};
  border-radius: 10px;
  cursor: pointer;
`,Vr=d.default.span`
  color: ${({theme:e})=>e.color.NEUTRAL[600]};
  span {
    color: ${({theme:e})=>e.color.SECONDARY[900]};
  }
  svg {
    margin-right: 5px;
  }
`,Xr=d.default.div`
  min-height: 70px;
  padding: 7px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({theme:e})=>e.color.QUATERNARY[200]};
  border: 1.5px solid ${({theme:e})=>e.color.QUATERNARY[400]};
  border-radius: 10px;
  cursor: pointer;
  img {
    display: block;
    width: 100%;
    max-width: 55px;
    height: 55px;
    border-radius: 5px;
    object-fit: cover;
  }
  button {
    color: ${({theme:e})=>e.color.QUATERNARY[900]};
  }
`,Jr=d.default.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,Rr=d.default.div`
  max-width: 150px;

  span {
    display: block;
    letter-spacing: -0.04em;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  span:nth-child(1) {
    font: normal 16px "Poppins";
    color: ${({theme:e})=>e.color.PRIMARY[900]};
  }
  span:nth-child(2) {
    text-transform: uppercase;
    font: normal 12px "Poppins";
    color: ${({theme:e})=>e.color.QUATERNARY[900]};
  }
`,qr=({initialImgUrl:e,placeholder:o,onChange:r,onError:i})=>{const[n,a]=x.useState(null),[l,f]=x.useState(e||null),h=Le();return x.useEffect(()=>{let c="";return n&&(c=window.URL.createObjectURL(n),f(c)),()=>{c&&window.URL.revokeObjectURL(c)}},[n]),x.useEffect(()=>{h||r(n,l||null)},[l]),t.jsx(O,{onError:i||alert,onSelectFile:c=>a(c),acceptedFiles:"image/x-png,image/jpeg",validFileExtensions:["jpg","jpeg","png"],children:l?t.jsxs(Xr,{children:[t.jsxs(Jr,{children:[t.jsx("img",{src:l}),t.jsxs(Rr,{children:[t.jsx("span",{children:(n==null?void 0:n.name)||Fe(l)[0]}),t.jsx("span",{children:(n==null?void 0:n.type)||Fe(l)[1]})]})]}),t.jsx(Wr,{variant:"secondary",onClick:c=>{c.stopPropagation(),a(null),f(null)},children:t.jsx(Qr,{size:12})})]}):t.jsx(Or,{children:o||t.jsxs(Vr,{children:[t.jsx(Te,{color:s.color.SECONDARY[900],size:18})," Sube un imagen ",t.jsx("span",{children:"aqu\xED"})]})})})},Se=d.default.div`
  width: 55px;
  height: 55px;
  border-radius: 7px;
`,Kr=d.default.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`,$r=d.default(Se)`
  border: 1px solid ${({theme:e})=>e.color.NEUTRAL[100]};
  position: relative;
  overflow: hidden;
  cursor: pointer;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`,_r=d.default(Se)`
  border: 2px dashed ${({theme:e})=>e.color.SECONDARY[400]};
  color: ${({theme:e})=>e.color.SECONDARY[900]};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  cursor: pointer;
`,en=d.default.div`
  background-color: ${({theme:e})=>`${e.color.PRIMARY[900]}90`};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`,tn=({onChange:e,initialImages:o,limit:r})=>{const[i,n]=x.useState(o||[]),[a,l]=x.useState(null),f=Le(),h=p=>{const u=window.URL.createObjectURL(p);n(v=>[...v,{file:p,url:u}])},c=p=>{const u=i[p];typeof u!="string"&&window.URL.revokeObjectURL(u.url),n(v=>v.filter((b,w)=>w!==p))};return x.useEffect(()=>{f||e(i)},[i]),t.jsxs(Kr,{children:[i.map((p,u)=>t.jsxs($r,{onMouseEnter:()=>l(u),onMouseLeave:()=>l(null),onTouchCancel:()=>l(null),children:[t.jsx("img",{src:typeof p=="string"?p:p.url}),a===u&&t.jsx(en,{onClick:()=>c(u),children:t.jsx(Ce,{size:16})})]},`imgs-${u}`)),!(r&&i.length>=r)&&t.jsx(O,{onError:alert,onSelectFile:h,acceptedFiles:"image/x-png,image/jpeg",validFileExtensions:["jpg","jpeg","png"],children:t.jsx(_r,{children:t.jsx(Te,{})})})]})};g.Button=T,g.Card=to,g.CardModal=U,g.CartProduct=$o,g.Checkbox=zr,g.ClientCard=Mo,g.CodeInput=ot,g.Collapsible=Tt,g.ConfirmationCard=gr,g.ConfirmationCardV2=kr,g.ConfirmationCardV3=Me,g.ConfirmationModalV3=Yr,g.CurrentStatusCard=no,g.CustomSelect=te,g.DropdownMenu=Nt,g.EditQuantityInput=we,g.Heading=$e,g.IconV2=y,g.Loader=mt,g.MultipleOptionsModal=Gr,g.OrderStatusBadge=ie,g.OrderTypeBanner=Xt,g.ProductDetailsCard=dr,g.ProfileImage=bt,g.Radio=Ur,g.SectionCard=vo,g.SelectField=it,g.StatusBanner=_t,g.StickyHeader=Bt,g.Text=I,g.TextField=$,g.TotalsCard=go,g.TransparentBadge=de,g.UploadFileContainer=O,g.UploadImage=qr,g.UploadMultipleImages=tn,g.UserProfileIcon=re,Object.defineProperties(g,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
