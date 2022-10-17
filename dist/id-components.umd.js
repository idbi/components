(function(g,d){typeof exports=="object"&&typeof module<"u"?d(exports,require("styled-components"),require("react/jsx-runtime"),require("react"),require("react-loading-skeleton"),require("react-select"),require("@radix-ui/react-collapsible"),require("@floating-ui/react-dom")):typeof define=="function"&&define.amd?define(["exports","styled-components","react/jsx-runtime","react","react-loading-skeleton","react-select","@radix-ui/react-collapsible","@floating-ui/react-dom"],d):(g=typeof globalThis<"u"?globalThis:g||self,d(g["ID-Components"]={},g.styled,g["react/jsx-runtime"].js,g.React,g.Skeleton,g.Select,g["@radix-ui/react-collapsible"],g["@floating-ui/react-dom"]))})(this,function(g,d,t,b,de,ce,le,Y){"use strict";const z=e=>e&&typeof e=="object"&&"default"in e?e:{default:e};function se(e){if(e&&e.__esModule)return e;const r=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const o in e)if(o!=="default"){const a=Object.getOwnPropertyDescriptor(e,o);Object.defineProperty(r,o,a.get?a:{enumerable:!0,get:()=>e[o]})}}return r.default=e,Object.freeze(r)}const f=z(d),fe=z(de),he=z(ce),W=se(le),ue={bold:700,medium:500,regular:400,light:300},O={xs:"0.750rem",sm:"0.875rem	",md:"1.0rem",lg:"1.250rem",xl:"1.5rem","2xl":"1.875rem","3xl":"2.0rem","4xl":"2.5rem","5xl":"3.0rem"},V={h1:"xl",h2:"lg",h3:"md",h4:"sm",h5:"xs",h6:"xs",text:"sm"},c={color:{NEUTRAL:{0:"#FFFFFF",20:"#FFFFFF",50:"#F5F5F5",100:"#EBEBEB",200:"#dfdfdf",300:"#bfbfbf",400:"#9f9f9f",500:"#808080",600:"#404040",700:"#383838",800:"#202020",900:"#000000"},PRIMARY:{0:"#FFFFFF",50:"#F1F2F9",100:"#E6E8F4",200:"#DDDFF0",300:"#BBBFE2",400:"#999FD3",500:"#777fc5",600:"#545fb6",700:"#414a98",800:"#333a76",900:"#242954"},SECONDARY:{0:"#FFFFFF",20:"#F7F5FF",50:"#EFEBFF",100:"#E6E0FF",200:"#d0c5ff",300:"#d0c5ff",400:"#b9a8ff",500:"#a18cff",600:"#8a6fff",700:"#7252ff",800:"#5b35ff",900:"#4318FF"},TERTIARY:{0:"#FFFFFF",50:"#FFFAFC",100:"#FFF5F9",200:"#ffeff5",300:"#ffe0eb",400:"#ffd0e1",500:"#ffc1d7",600:"#ffb1cd",700:"#FFA1C3",800:"#ff92b9",900:"#FF82AF"},QUATERNARY:{0:"#FFFFFF",50:"#FBFCFE",100:"#F2F6FD",200:"#ebf1fc",300:"#D8E4FA",400:"#c4d6f8",500:"#b0c8f5",600:"#9cbbf3",700:"#88adf0",800:"#75a0ed",900:"#6192EB"},STATE:{0:"#FFFFFF",50:"#FFFBF5",100:"#FEF7EB",200:"#fef3e3",300:"#fde7c6",400:"#fcdba9",500:"#fbcf8d",600:"#fac270",700:"#f9b654",800:"#f8aa38",900:"#F79E1B"},ALERT:{0:"#FFFFFF",50:"#FFFBF5",100:"#FEEDEC",200:"#fde3e2",300:"#fbc8c5",400:"#f9ada8",500:"#f7918b",600:"#f4756d",700:"#F25A50",800:"#F03E33",900:"#EE2316"},SUCCESS:{0:"#FFFFFF",50:"#F7FDFA",100:"#EEFBF4",200:"#e4f9ed",300:"#c9f3db",400:"#aeedc9",500:"#93e7b7",600:"#78e1a4",700:"#5DDB92",800:"#42D580",900:"#2DC96F"},OTHER:{color1:"#151E5A"},STATUS:{DEFAULT:{0:"#F5F5F5",1:"#808080"},DRAFT:{0:"#F5F5F5",1:"#808080"},PENDING:{0:"#DFDFDF",1:"#404040"},REJECTED:{0:"#FDE3E2",1:"#EE2316"},ACCEPTED:{0:"#D0C5FF",1:"#4318FF"},CANCELED:{0:"#FDE3E2",1:"#EE2316"},PREPARING:{0:"#FEF3E3",1:"#F79E1B"},READYFORPICKUP:{0:"#FFEFF5",1:"#FF82AF"},DELIVERED:{0:"#E4F9ED",1:"#2DC96F"}}},effect:{darkShadow:{4:"0px 0px 4px 1px rgba(139, 139, 139, 0.32)",6:"0px 1px 6px rgba(60, 60, 60, 0.2)",8:"0px 1px 6px rgba(107, 107, 107, 0.2)",12:"0px 0px 12px 2px #F6F6F6",24:"0px 0px 24px 4px rgba(0, 14, 51, 0.2)",30:"0px 10px 30px rgba(0, 0, 0, 0.08)"},lightShadow:{2:"0px 0px 2px 1px rgba(149, 178, 254, 0.2)",16:"0px 4px 16px rgba(153, 181, 255, 0.2)"}}},pe=({shape:e})=>{switch(e){case"rounded":return d.css`
        border-radius: 0.625rem;
      `;case"squared":return d.css`
        border-radius: 0;
      `;case"circular":return d.css`
        border-radius: 10rem;
      `;default:return d.css`
        border-radius: 0.625rem;
      `}},X=({design:e,color:r})=>{switch(e){case"solid":return d.css`
        background-color: ${()=>A({color:r})};
        color: #fff;
      `;case"outline":return d.css`
        background-color: white;
        border: 1px solid ${()=>A({color:r})};
        color: ${()=>A({color:r})};
      `;case"flat":return d.css`
        background-color: white;
        border: none;
        color: ${()=>A({color:r})};
      `;case"link":return d.css`
        background-color: transparent;
        border: none;
        color: ${()=>A({color:r})};

        &:hover {
          color: ${()=>A({color:r,hover:!0})};
          text-decoration: underline;
        }
      `;default:return d.css`
        background-color: ${()=>A({color:r})};
        color: #fff;
      `}},A=({color:e="SECONDARY/900",design:r,hover:o})=>{const a=e.split("/"),i=a[0];let n=+a[1];if(o&&n>=300)switch(r){case"solid":n-=100;break;case"outline":n=100;break;case"flat":n=100;break;default:n>=400?n-=100:n+=100;break}if(o&&n<300)switch(r){case"solid":n+=100;break;case"outline":n=100;break;case"flat":n=100;break;default:n-=100;break}return i==="PRIMARY"||i==="NEUTRAL"||i==="SECONDARY"||i==="TERTIARY"||i==="QUATERNARY"||i==="STATE"||i==="ALERT"||i==="SUCCESS"?n===50||n===100||n===200||n===300||n===400||n===500||n===600||n===700||n===800||n===900?c.color[i][n]:c.color[i][900]:c.color.PRIMARY[900]},Z=({fullWidth:e})=>e?d.css`
      width: 100%;
    `:d.css`
    width: auto;
  `,ge=({isLoading:e})=>e?d.css`
      cursor: not-allowed;
      opacity: 0.5;
    `:d.css`
    cursor: pointer;
    opacity: 1;
  `,be=({disabled:e})=>e?d.css`
      cursor: not-allowed;
      opacity: 0.5;
    `:d.css`
    cursor: pointer;
    opacity: 1;
  `,U=({size:e="sm"})=>d.css`
    font-size: ${O[e]||e};
  `,xe=({align:e})=>e?d.css`
      text-align: ${e};
    `:d.css`
    text-align: left;
  `,J=e=>{let r="";return e.m&&(r+=`
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
    `),d.css`
    ${r}
  `},me=f.default.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
`,ve=f.default(me)`
  display: inline-flex;
  gap: 0.5rem;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease-out;
  padding: ${({design:e})=>e==="link"?"0":"0.7rem"};
  min-height: ${({design:e})=>e==="link"?"0":"45px"};

  ${({size:e})=>U({size:e})};
  ${({shape:e})=>pe({shape:e})};
  ${({design:e,color:r})=>X({design:e,color:r})};
  ${({fullWidth:e})=>Z({fullWidth:e})};
  ${({isLoading:e})=>ge({isLoading:e})};
  ${({disabled:e})=>be({disabled:e})};
  ${({m:e,mb:r,mt:o,mr:a,ml:i,my:n,mx:l,p:u,pb:p,pt:h,pr:s,pl:x,py:k,px:v})=>J({m:e,mb:r,mt:o,mr:a,ml:i,my:n,mx:l,p:u,pb:p,pt:h,pr:s,pl:x,py:k,px:v})};

  &:hover {
    background-color: ${({color:e,design:r})=>r==="link"?"transparent":A({color:e,design:r,hover:!0})};
  }

  &:active {
    background-color: ${({color:e,design:r})=>r==="link"?"transparent":A({color:e,design:r,hover:!0})};
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:disabled:hover {
    ${({design:e,color:r})=>X({design:e,color:r})};
  }
`,S=({children:e,...r})=>t.jsxs(ve,{...r,children:[r.leftIcon,e,r.rightIcon]});function we(e,r,o){const a=()=>{const i=document.querySelectorAll("input");return Array.from(i).filter(l=>l.className===r)};b.useEffect(()=>{const i=n=>{n.key==="Backspace"&&setTimeout(()=>{const l=a(),u=document.activeElement;u.value="";const p=l.indexOf(u);p>0&&l[p-1].focus()},0)};return document.addEventListener("keydown",i),()=>document.removeEventListener("keydown",i)},[]),b.useEffect(()=>{const i=n=>{if(n.key!=="Backspace"){const l=n.key.toLowerCase();setTimeout(()=>{if(l.length===1){const u=a(),p=document.activeElement;p.value=l;const h=u.indexOf(p);h<u.length-1&&u[h+1].focus()}},0)}};return document.addEventListener("keydown",i),()=>document.removeEventListener("keydown",i)},[]),b.useEffect(()=>{if(e){const i=n=>{const l=n.key.toLowerCase();(l.length===1||l==="backspace")&&setTimeout(()=>{const p=a().map(h=>h.value).join("");e(p)},0)};return document.addEventListener("keydown",i),()=>document.removeEventListener("keydown",i)}},[]),b.useEffect(()=>{if(o){const i=a(),n=i.map(p=>p.value),l=o.split(""),u=l.length===n.length?l:n;i.forEach((p,h)=>{const s=u[h];s&&(p.value=s)})}},[o])}const ke=d.keyframes`
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
`,P=f.default.div`
  opacity: 0;
  ${({shouldAppear:e})=>e&&d.css`
      animation: ${ke} 0.2s ease-in;
      animation-fill-mode: forwards;
    `}
`,Ae={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",p:"p",li:"li",span:"span",strong:"strong",label:"label"},Ce=d.css`
  display: inline-block;
  font-family: "Poppins";
  font-style: normal;
  line-height: 24px;
  letter-spacing: -0.04rem;
  ${({align:e})=>xe({align:e})}
  ${({m:e,mb:r,mt:o,mr:a,ml:i,my:n,mx:l,p:u,pb:p,pt:h,pr:s,pl:x,py:k,px:v})=>J({m:e,mb:r,mt:o,mr:a,ml:i,my:n,mx:l,p:u,pb:p,pt:h,pr:s,pl:x,py:k,px:v})};
`,Te=e=>{const r=e==="h1"||e==="h2"||e==="h3"||e==="h4"||e==="h5"||e==="h6",o=r?"bold":"medium",a=r?V[e]:V.text,i="PRIMARY/900";return d.css`
    font-weight: ${({weight:n=o})=>ue[n]||"500"};
    font-size: ${({size:n=a})=>O[n]||n};
    color: ${({color:n=i})=>{const l=n==null?void 0:n.split("/")[0],u=Number(n==null?void 0:n.split("/")[1]);return c.color[l][u]}};
  `},Fe=f.default.div`
  ${Ce}
  ${({as:e})=>Te(e)}
`,T=({as:e,...r})=>{const o=Ae[e];return t.jsx(Fe,{as:o,...r})},Ee={H1:e=>t.jsx(T,{as:"h1",...e}),H2:e=>t.jsx(T,{as:"h2",...e}),H3:e=>t.jsx(T,{as:"h3",...e}),H4:e=>t.jsx(T,{as:"h4",...e}),H5:e=>t.jsx(T,{as:"h5",...e}),H6:e=>t.jsx(T,{as:"h6",...e})},Se=f.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
  transition: 0.3s ease-out;
`,w=e=>e.rightIcon||e.leftIcon?t.jsxs(Se,{children:[e.leftIcon,t.jsx(T,{as:e.as||"p",...e}),e.rightIcon]}):t.jsx(T,{as:e.as||"p",...e}),Ne=f.default.div`
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
      ${({errorMessage:e,success:r})=>e?c.color.ALERT[900]:r?c.color.SUCCESS[900]:c.color.NEUTRAL[300]};
    border-radius: 8px;
    background: #fff;
    font: normal 16px "Poppins";
    letter-spacing: -0.04em;
    color: ${()=>c.color.NEUTRAL[700]};

    transition: background 0.3s ease-out;
    transition: border 0.3s ease-out;

    &:disabled {
      cursor: not-allowed;
      background-color: ${()=>c.color.NEUTRAL[100]};
      color: ${()=>c.color.NEUTRAL[500]};
    }

    &:focus {
      border-color: ${()=>c.color.QUATERNARY[900]};
    }
  }
`,ye=f.default.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`,Le=({id:e,value:r,length:o=4,errorMessage:a,success:i,onChange:n=()=>{},...l})=>(we(n,e,r),t.jsxs(ye,{children:[t.jsx(Ne,{length:o,success:i,errorMessage:a,children:Array.from({length:o}).map((u,p)=>t.jsx("input",{id:p.toString(),className:e,maxLength:1,...l},p))}),a&&t.jsx(P,{shouldAppear:Boolean(a),children:t.jsx(w,{size:"xs",weight:"light",color:"ALERT/900",children:a})})]})),Ie=f.default.div`
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
    color: ${()=>c.color.ALERT[900]};
    margin-left: 2px;
    margin-top: 3px;
  }

  & > span {
    width: 100%;
  }
`,ze={control:(e,r)=>({...e,minHeight:"45px",borderRadius:10,backgroundColor:"#ffffff",border:`1px solid ${r.isFocused?c.color.QUATERNARY[900]:c.color.NEUTRAL[300]}`,boxShadow:"none",cursor:"pointer"}),singleValue:()=>({color:c.color.PRIMARY[900],fontWeight:500,fontSize:"14px"}),placeholder:e=>({...e,color:c.color.NEUTRAL[700]}),indicatorSeparator:e=>({...e,display:"none",padding:0}),indicatorsContainer:e=>({...e,"> div":{padding:"0",paddingRight:"3px"}}),valueContainer:e=>({...e,padding:0,paddingLeft:"6px"})},We=({formatOptionLabel:e,options:r,loading:o=!1,style:a,error:i,firstOption:n,initialValue:l,value:u,onChange:p,isMulti:h,placeholder:s,label:x})=>{const k=n||{label:"Seleccione una opci\xF3n",value:""},v=[...r];return t.jsxs(Ie,{style:a,hasError:!!i,children:[x&&t.jsx(w,{as:"label",align:"left",size:"sm",color:"NEUTRAL/700",children:x}),o?t.jsx(fe.default,{style:{borderRadius:10},className:"loading-skeleton",height:46,width:"100%"}):t.jsx(he.default,{placeholder:s,value:u||void 0,defaultValue:l||k,options:v,onChange:p,styles:ze,isMulti:h,formatOptionLabel:e})]})},Ue=f.default.div`
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
    background: ${()=>c.color.NEUTRAL[50]};
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

  ${e=>e.variant=="V1"&&d.css`
      ${r=>r.active&&d.css`
          &::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: ${o=>o.color||c.color.PRIMARY[900]};
            width: ${o=>o.size*2}px;
            height: ${o=>o.size*2}px;
            border-radius: ${o=>o.borderRadius||"50%"};
            transition: 0.3s background;
          }
          &:hover ::before {
            width: ${o=>o.size*2}px;
            height: ${o=>o.size*2}px;
            background: ${o=>o.color||c.color.PRIMARY[900]};
          }
        `}
    `}
  ${e=>e.variant=="V2"&&d.css`
      ${r=>r.active&&d.css`
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
            background: ${()=>c.color.NEUTRAL[50]};
          }
        `}
    `}
`,Pe=f.default.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${e=>e.size}px;
  height: ${e=>e.size}px;
  fill: ${e=>e.color||c.color.PRIMARY[900]};
  ${e=>e.variant==="V1"&&d.css`
      ${r=>r.active&&d.css`
          fill: #fff;
        `}
    `}
  ${e=>e.variant==="V2"&&d.css`
      fill: ${()=>c.color.NEUTRAL[400]};
      ${r=>r.active&&d.css`
          fill: ${o=>o.color||c.color.PRIMARY[900]};
        `}
    `}
`,G=e=>{const{children:r,color:o,size:a,viewBox:i,active:n,borderRadius:l,variant:u}=e;return t.jsx(Ue,{active:n,size:a||24,borderRadius:l||"50%",variant:u||"V1",color:o,children:t.jsx(Pe,{active:n,color:o,size:a||24,viewBox:i||"0 0 32 32",variant:u||"V1",children:r})})},De=e=>{const{color:r,size:o}=e;return t.jsx(G,{color:r,size:o,viewBox:"0 0 22 13",fill:"none",children:t.jsx("path",{d:"M19 1.406s-.32.772-1 1.752m-7 4.031a7.587 7.587 0 0 1-4.051-1.157M11 7.19a7.587 7.587 0 0 0 4.051-1.157M11 7.19v4.048m-8-9.83s.354.851 1.106 1.901M6.95 6.033 4 9.502m2.949-3.47c-1.26-.778-2.198-1.824-2.843-2.724m10.945 2.724 2.449 3.47m-2.449-3.47C16.381 5.21 17.354 4.09 18 3.158m-13.894.15L1 4.877m17-1.718 3 1.718",stroke:"#242954",strokeWidth:2,strokeLinecap:"round"})})},je=e=>{const{color:r,size:o}=e;return t.jsx(G,{color:r,size:o,viewBox:"0 0 22 19",fill:"none",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 2.75c-3.089 0-6.002 1.167-8.524 3.239a.75.75 0 1 1-.952-1.16C4.274 2.57 7.515 1.25 11 1.25c3.485 0 6.726 1.32 9.476 3.58a.75.75 0 1 1-.952 1.159C17.002 3.917 14.089 2.75 11 2.75Zm-8.249 8.454v.002c.006.02.025.103.1.259.09.187.234.424.434.697.4.546.99 1.19 1.73 1.804 1.488 1.238 3.487 2.284 5.639 2.284 2.163 0 4.343-1.055 6.016-2.308.829-.62 1.506-1.27 1.968-1.819.231-.276.398-.514.503-.7a1.31 1.31 0 0 0 .102-.219 1.315 1.315 0 0 0-.102-.218 4.803 4.803 0 0 0-.503-.7c-.462-.55-1.14-1.198-1.968-1.82a13.63 13.63 0 0 0-1.87-1.179c.264.57.412 1.203.412 1.872 0 2.496-2.052 4.5-4.558 4.5s-4.558-2.004-4.558-4.5c0-.615.125-1.2.35-1.734-.515.309-.995.655-1.432 1.018a10.49 10.49 0 0 0-1.729 1.804c-.2.273-.343.51-.434.697-.075.156-.094.238-.1.26 0 0 0 0 0 0Zm7.903-6.545c-2.627 0-4.955 1.264-6.599 2.63a11.982 11.982 0 0 0-1.98 2.072 6.141 6.141 0 0 0-.575.931c-.13.27-.25.594-.25.912 0 .319.12.643.25.913.14.29.337.606.575.931a11.98 11.98 0 0 0 1.98 2.071c1.644 1.367 3.972 2.631 6.599 2.631 2.616 0 5.11-1.255 6.915-2.607.91-.682 1.673-1.408 2.217-2.055.271-.323.498-.638.662-.93.15-.265.302-.606.302-.954 0-.347-.153-.688-.302-.953a6.264 6.264 0 0 0-.662-.93c-.544-.647-1.307-1.373-2.217-2.055-1.806-1.352-4.299-2.607-6.915-2.607Zm0 1.5c-1.7 0-3.058 1.354-3.058 3s1.358 3 3.058 3c1.7 0 3.058-1.354 3.058-3s-1.359-3-3.058-3Z",fill:"#242954",stroke:"#242954",strokeLinecap:"round"})})},Me=e=>t.jsx("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:0,color:e.color||"#EE2316",height:24,width:24,viewBox:"0 0 24 24",...e,children:t.jsxs("g",{stroke:"none",children:[t.jsx("path",{fill:"none",d:"M0 0h24v24H0z"}),t.jsx("path",{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z"})]})}),He=e=>t.jsx("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:0,color:e.color||"#2DC96F",height:20,width:20,viewBox:"0 0 1024 1024",...e,children:t.jsx("path",{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z",stroke:"none"})}),Ye=f.default.div`
  ${({fullWidth:e})=>Z({fullWidth:e})};
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 8px;
  border: 1px solid
    ${({error:e,success:r,isFocused:o})=>e?c.color.ALERT[900]:r&&o?c.color.SUCCESS[900]:o?c.color.QUATERNARY[900]:c.color.NEUTRAL[300]};
  background: #fff;
  min-height: 45px;
  ::placeholder {
    color: ${()=>c.color.NEUTRAL[500]};
  }

  background-color: ${({disabled:e})=>e?c.color.NEUTRAL[100]:"#fff"};
  cursor: ${({disabled:e})=>e?"not-allowed":"auto"};
  transition: background 0.3s ease-out;
  transition: border 0.3s ease-out;

  > input {
    border-radius: 8px;
    width: 100%;
    ${({size:e})=>U({size:e})};
    flex-grow: 1;
    border: none;
    outline: none;
    padding: 10px 0px;
    background-color: #fff;
    letter-spacing: -0.04em;
    color: ${()=>c.color.NEUTRAL[700]};
    padding-left: ${({leftAddon:e})=>e?"0px":"12px"};
    padding-right: ${({rightAddon:e})=>e?"0px":"12px"};
    padding-right: ${({success:e,error:r})=>(e||r)&&"2.5rem"};

    &:disabled {
      cursor: not-allowed;
      background-color: ${()=>c.color.NEUTRAL[100]};
      color: ${()=>c.color.NEUTRAL[500]};
    }
  }

  .leftAddon {
    padding-left: 12px;
  }

  .rightAddon {
    padding-right: 12px;
  }

  span {
    color: ${()=>c.color.NEUTRAL[500]};
    ${({size:e})=>U({size:e})};
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
`,D=b.forwardRef(({type:e,leftAddon:r,rightAddon:o,placeholder:a,error:i,success:n,size:l,fullWidth:u,name:p,infoMessage:h,onFocus:s,onBlur:x,onChange:k,...v},N)=>{const[F,E]=b.useState(!1),y=!i&&!n&&h&&F;return t.jsxs(t.Fragment,{children:[t.jsxs(Ye,{fullWidth:u,success:n,size:l,error:i,disabled:v.disabled,leftAddon:r,rightAddon:o,isFocused:F,children:[r&&t.jsx("span",{className:"leftAddon",children:r}),t.jsx("input",{ref:N,onFocus:L=>{s&&s(L),E(!0)},onBlur:L=>{x&&x(L),E(!1)},onChange:k,placeholder:a,type:e,name:p,...v}),o&&t.jsx("span",{className:"rightAddon",children:o}),i&&t.jsx("span",{className:"state",children:t.jsx(Me,{size:24,color:c.color.ALERT[900]})}),n&&t.jsx("span",{className:"state",children:t.jsx(He,{size:20,color:c.color.SUCCESS[900]})})]}),y&&t.jsx(P,{shouldAppear:y,children:t.jsx(w,{size:"xs",color:"QUATERNARY/900",children:h})})]})});D.displayName="TextInput";const Oe=f.default.div`
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
`,q=b.forwardRef(({label:e,type:r,error:o,isDirty:a,success:i,infoMessage:n,fullWidth:l,...u},p)=>{const h={...u,ref:p},[s,x]=b.useState(!1);return t.jsxs(Oe,{fullWidth:l,children:[e&&t.jsxs("div",{className:"label-container",children:[t.jsx(w,{as:"label",align:"left",size:"sm",color:"NEUTRAL/700",children:e}),r==="password"&&t.jsx("span",{onClick:()=>x(!s),children:s?t.jsx(je,{size:20}):t.jsx(De,{size:20})})]}),t.jsx(D,{error:Boolean(o),success:i||!o&&a,infoMessage:n,fullWidth:l,type:s?"text":r,...h}),o&&t.jsx(P,{shouldAppear:Boolean(o),children:t.jsx(w,{size:"xs",color:"ALERT/900",children:o})})]})});q.displayName="TextField";const B=(e,r)=>{b.useEffect(()=>{const o=a=>{if(Array.isArray(e)){for(const i of e)if(!a.target||!i.current||i.current.contains(a.target))return}else if(!a.target||!e.current||e.current.contains(a.target))return;r(a)};return document.addEventListener("mousedown",o),document.addEventListener("touchstart",o),()=>{document.removeEventListener("mousedown",o),document.removeEventListener("touchstart",o)}},[e,r])},R=e=>t.jsx("svg",{height:e.size||16,width:e.size||16,fill:"none",viewBox:"0 0 16 16",...e,children:t.jsx("path",{d:"M12 5.333v2.534l-4 3.067-4-3.067V5.333L8 8.4l4-3.067Z",fill:"#6B6B6B"})}),Ve=e=>t.jsx("svg",{height:13,width:14,fill:"none",viewBox:"0 0 14 13",...e,children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.821 1.606a4.715 4.715 0 1 0 0 9.43 4.715 4.715 0 0 0 0-9.43ZM.125 6.32A5.696 5.696 0 1 1 10.178 9.99l2.553 2.547a.49.49 0 0 1-.693.695l-2.553-2.55A5.696 5.696 0 0 1 .125 6.32Z",fill:"#242954"})}),Xe=f.default.div`
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
    border: 1px solid ${()=>c.color.NEUTRAL[300]};
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
    background-color: ${()=>c.color.QUATERNARY[200]};
  }

  .options li:hover {
    border-radius: 0.5rem;
    background-color: ${()=>c.color.QUATERNARY[100]};
  }
`,Ze=f.default.ul`
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
        outline: 2px solid ${()=>c.color.SECONDARY[900]};
      }
    }
  }
`,Q=b.forwardRef(({label:e,searchable:r=!0,autoSize:o,value:a,options:i,placeholder:n="Seleccione una opci\xF3n",fullWidth:l,fullWidthOptions:u,onChange:p,formatOptionLabel:h,formatSelectedOption:s})=>{const x=b.useRef(null),[k,v]=b.useState(i),[N,F]=b.useState(""),[E,y]=b.useState(!1);B(x,()=>{y(!1)});const L=b.useCallback(()=>{const m=i.filter(C=>C.label.toLowerCase().includes(N.toLowerCase()));v(m)},[i,a]),ie=b.useCallback(m=>{p(i.find(C=>C.label===m)),y(!1),F(""),v(i)},[L]),Jt=b.useCallback(m=>{F(m.target.value);const C=i.filter(ae=>ae.label.toLowerCase().includes(m.target.value.toLowerCase()));v(C)},[]),Gt=()=>{const m=x.current;if(m){const C=m.getBoundingClientRect();return window.innerHeight-C.bottom-20}};return t.jsxs(Xe,{fullWidth:l,ref:x,children:[e&&t.jsx(w,{as:"label",align:"left",size:"sm",color:"NEUTRAL/700",pl:"0.05rem",mb:"0.25rem",children:e}),t.jsxs("div",{className:"select-btn",onClick:()=>y(!E),tabIndex:0,onKeyUpCapture:m=>{m.key==="Enter"&&y(!E)},children:[t.jsx(w,{as:"span",color:"NEUTRAL/700",mr:"0.5rem",children:s?s(a):h?h(a):a.label}),t.jsx(R,{size:20})]}),E&&t.jsxs(Ze,{maxOptionsHeight:o?Gt():285,fullWidthOptions:u,children:[r&&t.jsx("div",{className:"search-box",children:t.jsx(D,{leftAddon:t.jsx(Ve,{}),type:"text",placeholder:n,value:N,onChange:Jt,fullWidth:!0})}),t.jsx("div",{className:"options",children:k.map(m=>t.jsx(w,{as:"li",color:"NEUTRAL/700",className:m.value===a.value?"selected":"",tabIndex:0,onClick:()=>ie(m.label),onKeyUpCapture:C=>{C.key==="Enter"&&ie(m.label)},children:h?h(m):m.label},`${m.label}-${m.value}`))})]})]})});Q.displayName="CustomSelect";const Je=f.default.div`
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
`,Ge=({imageUrl:e,size:r=128,onChange:o})=>{const a=b.useRef(null),i=n=>{var u;const l=(u=n.target.files)==null?void 0:u[0];if(l){const p=URL.createObjectURL(l);o({file:l,url:p})}};return t.jsxs(Je,{size:r,children:[t.jsx(w,{color:"NEUTRAL/400",weight:"regular",size:"xs",children:"Agrega tu foto"}),t.jsxs("div",{className:"profile-input__container",children:[t.jsx("input",{type:"file",accept:"image/png, image/jpeg",onChange:i,ref:a}),t.jsx("img",{width:r,height:r,src:e||"/default-profile.svg",alt:"profile",referrerPolicy:"no-referrer"}),t.jsx(S,{type:"button",size:"lg",design:"flat",shape:"circular",onClick:()=>{var n;return(n=a.current)==null?void 0:n.click()},children:"+"})]})]})},qe=d.keyframes`
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
`,Be=d.keyframes`
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
`,Re=f.default.div`
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
    animation: ${qe} 1s linear infinite;
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
    background-color: ${()=>c.color.PRIMARY[900]};
    animation: ${Be} 1s linear infinite;
  }
  .idbi-loading > div > div:last-child {
    animation-delay: -0.5s;
  }
  .idbi-loading > div > div:last-child > div > div {
    animation-delay: -0.5s;
    background-color: ${()=>c.color.TERTIARY[900]};
  }
`,Qe=()=>t.jsx(Re,{children:t.jsx("div",{className:"idbi-loading",children:t.jsxs("div",{children:[t.jsx("div",{children:t.jsx("div",{children:t.jsx("div",{})})}),t.jsx("div",{children:t.jsx("div",{children:t.jsx("div",{})})})]})})}),Ke=f.default.section`
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

    ${({withSeparator:e})=>e&&d.css`
        & li:not(:last-child) {
          border-bottom: 1px solid #e5e5e5;
        }
      `}
  }
  ${({design:e})=>{switch(e){case"primary":return d.css`
          background-color: #fff;
          box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
          -webkit-box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
          -moz-box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
        `;case"secondary":return d.css`
          background-color: ${c.color.QUATERNARY[300]};
        `;case"flat":return d.css`
          background-color: transparent;
        `;default:return c.color.NEUTRAL[100]}}};
`,$e=({design:e="primary",header:r,options:o,optionsFormatter:a,content:i,withSeparator:n})=>t.jsxs(Ke,{design:e,withSeparator:n,children:[r&&t.jsx("header",{children:r}),o&&a&&t.jsx("ul",{children:o.map(l=>t.jsx("li",{children:a(l)},l.value))}),i&&i]}),_e=e=>t.jsx("svg",{width:e.size||24,height:e.size||25,fill:"none",viewBox:"0 0 24 25",...e,children:e.ischecked?t.jsxs(t.Fragment,{children:[t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M22.53 3.97a.75.75 0 0 1 0 1.06l-10 10a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06L12 13.44l9.47-9.47a.75.75 0 0 1 1.06 0Z",fill:"#4318FF"}),t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5 4.25A1.25 1.25 0 0 0 3.75 5.5v14A1.25 1.25 0 0 0 5 20.75h14a1.25 1.25 0 0 0 1.25-1.25v-7a.75.75 0 0 1 1.5 0v7A2.75 2.75 0 0 1 19 22.25H5a2.75 2.75 0 0 1-2.75-2.75v-14A2.75 2.75 0 0 1 5 2.75h11a.75.75 0 0 1 0 1.5H5Z",fill:"#4318FF"})]}):t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5 4.25c-.69 0-1.25.56-1.25 1.25v14c0 .69.56 1.25 1.25 1.25h14c.69 0 1.25-.56 1.25-1.25v-14c0-.69-.56-1.25-1.25-1.25H5ZM2.25 5.5A2.75 2.75 0 0 1 5 2.75h14a2.75 2.75 0 0 1 2.75 2.75v14A2.75 2.75 0 0 1 19 22.25H5a2.75 2.75 0 0 1-2.75-2.75v-14Z",fill:"#4318FF"})}),et=f.default(W.Root)`
  width: 100%;
  background-color: #fff;
  box-shadow: ${()=>c.effect.darkShadow[4]};
  border-radius: 0.5rem;
`,tt=f.default(W.Trigger)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  cursor: pointer;
  background-color: transparent;
  border: none;
`,rt=d.keyframes`
  from {
    height: 0;
  }
  to {
    height: var(--radix-collapsible-content-height);
  }
`,ot=d.keyframes`
  from {
    height: var(--radix-collapsible-content-height);
  }
  to {
    height: 0;
  }
`,nt=f.default(W.Content)`
  overflow: hidden;
  &[data-state="open"] {
    animation: ${rt} 300ms ease-out;
  }
  &[data-state="closed"] {
    animation: ${ot} 300ms ease-out;
  }
`,it=({open:e,setOpen:r,label:o,content:a})=>t.jsxs(et,{open:e,onOpenChange:r,children:[t.jsxs(tt,{children:[t.jsx(w,{children:o}),t.jsx(_e,{ischecked:e||!1})]}),t.jsx(nt,{children:a})]}),I=e=>t.jsx("svg",{width:e.size||8,height:e.size||12,fill:"none",viewBox:"0 0 8 12",onClick:e.onClick,...e,children:t.jsx("path",{d:"m3.069 6.003 4.73-4.49a.634.634 0 0 0 0-.928L7.384.192A.705.705 0 0 0 6.895 0a.705.705 0 0 0-.489.192L.774 5.537a.634.634 0 0 0-.202.465c0 .177.071.342.202.466l5.627 5.34c.13.124.304.192.49.192a.706.706 0 0 0 .488-.192l.415-.393a.634.634 0 0 0 0-.928L3.069 6.003Z",fill:"#151E5A"})}),at=f.default.header`
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
  box-shadow: ${()=>c.effect.darkShadow[6]};

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
`,dt=({onBack:e,backLabel:r,profileImageUrl:o,rightContent:a})=>t.jsxs(at,{children:[t.jsxs("button",{type:"button",onClick:e,children:[t.jsx(I,{}),t.jsx(w,{color:"NEUTRAL/900",children:r})]}),a||t.jsx("img",{width:28,height:28,src:o||"/default-profile.svg",alt:"profile",referrerPolicy:"no-referrer"})]}),ct=d.keyframes`
  100% {
    transform: rotate(360deg);
  }
`,lt=f.default.div`
  display: block;
  margin: ${e=>e.margin||"25% auto"};
  width: ${e=>e.width||"100%"};
  height: ${e=>e.height||"100%"};
  border: ${e=>e.borderWidth||"0.25em"} solid rgba(0, 0, 0, 0.1);
  border-top-color: #03a7e5;
  border-radius: 50%;
  animation: ${ct} 1s infinite linear;
`,j=e=>t.jsx(lt,{width:e.width,height:e.height,borderWidth:e.borderWidth,margin:e.margin}),K=f.default.ul`
  color: ${()=>c.color.OTHER.color1};
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
`,M=f.default.li`
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

  ${({alert:e})=>{if(e)return d.css`
        background-color: ${c.color.ALERT[100]};
        color: ${c.color.ALERT[900]};
        &:hover {
          background-color: ${c.color.ALERT[200]};
        }
      `}}
`,st=f.default.div`
  position: absolute;
  top: 0;
  right: calc(100% + 8px);
`,ft=({text:e,options:r})=>{const[o,a]=b.useState(!1),i=b.useRef(null),n=l=>{if(i.current&&clearTimeout(i.current),l){a(!0);return}i.current=setTimeout(()=>{o!==l&&a(l)},50)};return t.jsxs(M,{onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),active:o,onClick:l=>l.stopPropagation(),children:[e," ",t.jsx("div",{style:{transform:"rotateY(180deg)"},children:t.jsx(I,{})}),o&&t.jsx(st,{children:t.jsx(K,{children:r.map((l,u)=>t.jsxs(M,{alert:l.alert,onClick:p=>l.disabled||l.loading?p.stopPropagation():l.onClick(),disabled:l.disabled||l.loading,loading:l.loading,children:[l.text," ",l.loading?t.jsx("div",{style:{width:"24px"},children:t.jsx(j,{width:"20px",height:"20px"})}):l.icon]},`suboption-${u}`))})})]})},ht=({options:e})=>t.jsx(K,{children:e.map((r,o)=>"options"in r?t.jsx(ft,{...r},`option-${o}`):t.jsxs(M,{disabled:r.disabled||r.loading,alert:r.alert,onClick:r.disabled||r.loading?a=>a.stopPropagation():r.onClick,loading:r.loading,children:[r.text," ",r.loading?t.jsx("div",{style:{width:"24px"},children:t.jsx(j,{width:"20px",height:"20px"})}):r.icon]},`option-${o}`))}),ut=f.default.div`
  cursor: pointer;
  text-align: right;
  * {
    margin-left: auto;
    margin-right: 0;
  }
`,pt=({options:e,activator:r})=>{const{x:o,y:a,reference:i,floating:n,strategy:l,update:u,refs:p}=Y.useFloating({placement:"bottom-end"}),[h,s]=b.useState(!1);return b.useEffect(()=>{if(!(!p.reference.current||!p.floating.current))return Y.autoUpdate(p.reference.current,p.floating.current,u)},[h,u]),B(p.reference,()=>{s(!1)}),t.jsxs("div",{ref:i,children:[t.jsx(ut,{onClick:()=>s(!h),children:r||t.jsx(R,{size:25})}),h&&t.jsx("div",{ref:n,style:{position:l,top:a!=null?a:0,left:o!=null?o:0},onClick:()=>s(!h),children:t.jsx(ht,{options:e})})]})},gt=e=>t.jsx("svg",{width:9,height:9,fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:t.jsx("path",{d:"M8.53 1.53A.75.75 0 0 0 7.47.47l1.06 1.06ZM.47 7.47a.75.75 0 0 0 1.06 1.06L.47 7.47Zm7 1.06a.75.75 0 0 0 1.06-1.06L7.47 8.53ZM1.53.47A.75.75 0 0 0 .47 1.53L1.53.47Zm5.94 0-7 7 1.06 1.06 7-7L7.47.47Zm1.06 7-7-7L.47 1.53l7 7 1.06-1.06Z",fill:"#404040"})}),bt=f.default.div`
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
`,xt=({onClose:e=()=>{},backdropOpacity:r,zIndex:o})=>(b.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow="visible"}),[]),t.jsx(bt,{onClick:a=>{a.stopPropagation(),e()},opacity:r,zIndex:o})),$=d.keyframes`
  from {
    transform: translateY(100px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`,_=d.keyframes`
  from {
    transform: translateY(-100px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`,ee=d.keyframes`
  from {
    transform: translateX(-100px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`,te=d.keyframes`
  from {
    transform: translateX(100px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`,mt=f.default.div`
  position: fixed;
  max-height: 100vh;
  max-width: 100vw;
  overflow: auto;
  animation: fadeIn 0.3s ease-in-out;
  z-index: ${e=>e.zIndex};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  ${e=>{if(e.contentLocation==="bottom")return d.css`
        transform: translate(0, 0);
        right: unset;
        top: unset;
        left: 0;
        bottom: 0;
        animation: ${$} 0.3s ease-out;
      `;if(e.contentLocation==="top")return d.css`
        transform: translate(0, 0);
        right: unset;
        bottom: unset;
        left: 0;
        top: 0;
        animation: ${_} 0.3s ease-out;
      `;if(e.contentLocation==="left")return d.css`
        transform: translate(0, 0);
        top: unset;
        right: unset;
        left: 0;
        bottom: 0;
        animation: ${ee} 0.3s ease-out;
      `;if(e.contentLocation==="right")return d.css`
        transform: translate(0, 0);
        top: unset;
        left: unset;
        right: 0;
        bottom: 0;
        animation: ${te} 0.3s ease-out;
      `}}

  ${e=>{if(e.contentLocationInDesktop==="center")return d.css`
        @media screen and (min-width: 1024px) {
          transform: translate(-50%, -50%);
          bottom: unset;
          right: unset;
          top: 50%;
          left: 50%;
          animation: fadeIn 0.3s ease-out;
        }
      `;if(e.contentLocationInDesktop==="bottom")return d.css`
        @media screen and (min-width: 1024px) {
          transform: translate(0, 0);
          top: unset;
          right: unset;
          left: 0;
          bottom: 0;
          animation: ${$} 0.3s ease-out;
        }
      `;if(e.contentLocationInDesktop==="top")return d.css`
        @media screen and (min-width: 1024px) {
          transform: translate(0, 0);
          top: unset;
          right: unset;
          left: 0;
          top: 0;
          animation: ${_} 0.3s ease-out;
        }
      `;if(e.contentLocationInDesktop==="left")return d.css`
        @media screen and (min-width: 1024px) {
          transform: translate(0, 0);
          top: unset;
          right: unset;
          left: 0;
          bottom: 0;
          animation: ${ee} 0.3s ease-out;
        }
      `;if(e.contentLocationInDesktop==="right")return d.css`
        @media screen and (min-width: 1024px) {
          transform: translate(0, 0);
          top: unset;
          left: unset;
          right: 0;
          bottom: 0;
          animation: ${te} 0.3s ease-out;
        }
      `}}
`,vt=({children:e,onClose:r,backdropOpacity:o,zIndex:a,contentLocation:i="center",contentLocationInDesktop:n="center"})=>t.jsxs(t.Fragment,{children:[t.jsx(xt,{onClose:r,backdropOpacity:o,zIndex:a||4}),t.jsx(mt,{zIndex:a||4,contentLocation:i,contentLocationInDesktop:n,onClick:l=>l.stopPropagation(),children:e})]}),wt=f.default.div`
  background-color: ${e=>e.background||"#fff"};
  border-radius: ${e=>e.borderRadius?e.borderRadius:"15px"};
  max-height: ${e=>e.maxHeight?e.maxHeight:"90vh"};
  height: ${e=>e.height?e.height:"auto"};
  max-width: ${e=>e.maxWidth?e.maxWidth:"90vw"};
  width: ${e=>e.width?e.width:"90vw"};
  padding: ${e=>e.padding?e.padding:"1.5rem"};
  overflow: ${e=>e.overflow||"hidden"};
  cursor: auto;
  box-shadow: 0px 0px 24px 4px rgba(0, 12, 51, 0.05);
  ${e=>{if(e.contentLocation&&e.contentLocation==="bottom")return d.css`
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        max-width: unset;
        width: 100vw;
      `;if(e.contentLocation&&e.contentLocation==="top")return d.css`
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        max-width: unset;
        width: 100vw;
      `;if(e.contentLocation&&e.contentLocation==="left")return d.css`
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        height: 100vh;
        max-height: ${()=>e.maxHeight?e.maxHeight:"100vh"};
        max-width: ${()=>e.maxWidth?e.maxWidth:"550px"};
      `;if(e.contentLocation&&e.contentLocation==="right")return d.css`
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        height: 100vh;
        max-height: ${()=>e.maxHeight?e.maxHeight:"100vh"};
        max-width: ${()=>e.maxWidth?e.maxWidth:"550px"};
      `}}

  ${e=>{if(e.contentLocationInDesktop==="center")return d.css`
        @media screen and (min-width: 1024px) {
          border-radius: ${()=>e.borderRadiusInDesktop?e.borderRadiusInDesktop:"15px"};
          height: auto;
          max-width: ${()=>e.maxWidth?e.maxWidth:"90vw"};
          max-height: ${()=>e.maxHeight?e.maxHeight:"90vh"};
          padding: ${()=>e.padding?e.padding:"1.5rem"};
        }
      `;if(e.contentLocationInDesktop==="bottom")return d.css`
        @media screen and (min-width: 1024px) {
          border-radius: ${()=>e.borderRadiusInDesktop?e.borderRadiusInDesktop:"15px"};
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
          max-width: unset;
          height: unset;
          width: ${()=>e.width?e.width:"100vw"};
        }
      `;if(e.contentLocationInDesktop==="top")return d.css`
        @media screen and (min-width: 1024px) {
          border-radius: ${()=>e.borderRadiusInDesktop?e.borderRadiusInDesktop:"15px"};
          border-top-left-radius: 0;
          border-top-right-radius: 0;
          max-width: unset;
          height: unset;
          width: ${()=>e.width?e.width:"100vw"};
        }
      `;if(e.contentLocationInDesktop==="left")return d.css`
        @media screen and (min-width: 1024px) {
          border-radius: ${()=>e.borderRadiusInDesktop?e.borderRadiusInDesktop:"15px"};
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
          height: 100vh;
          max-height: ${()=>e.maxHeight?e.maxHeight:"100vh"};
          max-width: ${()=>e.maxWidth?e.maxWidth:"550px"};
        }
      `;if(e.contentLocationInDesktop==="right")return d.css`
        @media screen and (min-width: 1024px) {
          border-radius: ${()=>e.borderRadiusInDesktop?e.borderRadiusInDesktop:"15px"};
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
          height: 100vh;
          max-height: ${()=>e.maxHeight?e.maxHeight:"100vh"};
          max-width: ${()=>e.maxWidth?e.maxWidth:"550px"};
        }
      `}}
`,kt=f.default.div`
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
`,re=({children:e,onClose:r,backdropOpacity:o,padding:a,borderRadius:i,borderRadiusInDesktop:n,maxHeight:l,height:u,maxWidth:p,width:h,zIndex:s,overflow:x,contentLocation:k="center",contentLocationInDesktop:v="center",closeIcon:N,closeIconInDesktop:F,background:E="#fff"})=>t.jsx(vt,{onClose:r,backdropOpacity:o,zIndex:s,contentLocation:k,contentLocationInDesktop:v,children:t.jsxs(wt,{padding:a,borderRadius:i,borderRadiusInDesktop:n,maxHeight:l,height:u,maxWidth:p,width:h,background:E,overflow:x,contentLocation:k,contentLocationInDesktop:v,children:[(N||F)&&t.jsx(kt,{onClick:r,closeIconInDesktop:F,closeIcon:N,children:t.jsx(gt,{})}),e]})}),At=f.default.div`
  @media (max-width: 600px) {
    padding-bottom: 15px;
  }
`,Ct=f.default.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,Tt=f.default.div`
  padding: 0 20px;
  & > :nth-child(2) {
    margin-top: 5px;
  }

  svg,
  img {
    cursor: pointer;
  }
`,Ft=f.default.ul`
  color: ${()=>c.color.NEUTRAL[700]};
  padding: 0;
  margin: 10px 0;
  list-style-type: none;
  font-size: 14px;
`,H=f.default.li`
  background-color: ${({alert:e})=>e?c.color.ALERT[100]:"white"};
  color: ${({alert:e})=>e?c.color.ALERT[900]:"inherit"};
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
`,oe=t.jsx("div",{style:{display:"inline-block"},children:t.jsx(j,{width:"20px",height:"20px"})}),Et=({options:e,onClose:r,contentLocation:o,contentLocationInDesktop:a,defaultDescription:i="",defaultTitle:n="",optionsInCenter:l=!1})=>{const[u,p]=b.useState(null),h=b.useMemo(()=>{if(u===null)return null;const s=e[u];if(s&&"options"in s)return s},[u,e]);return t.jsx(re,{maxWidth:"500px",padding:"20px 0",onClose:r,contentLocation:o||"bottom",contentLocationInDesktop:a||"center",closeIcon:!0,children:t.jsxs(At,{children:[t.jsxs(Tt,{children:[t.jsxs(Ct,{children:[h&&t.jsx(I,{onClick:()=>p(null)}),t.jsx(w,{as:"h2",size:"md",children:(h==null?void 0:h.text)||n})]}),i.length>0&&t.jsx(w,{color:"NEUTRAL/400",size:"sm",weight:"regular",children:(h==null?void 0:h.description)||i})]}),t.jsxs(Ft,{children:[!h&&e.map((s,x)=>"onClick"in s?t.jsxs(H,{alert:s.alert,disabled:s.disabled||s.loading,onClick:()=>{!s.loading&&!s.disabled&&(s.onClick(),r())},optionsInCenter:l,children:[s.text," ",s.loading?oe:s.icon]},`option-${x}`):t.jsxs(H,{onClick:()=>{p(x)},optionsInCenter:l,children:[s.text," ",t.jsx("div",{style:{transform:"rotateY(180deg)"},children:t.jsx(I,{})})]},`option-${x}`)),h==null?void 0:h.options.map((s,x)=>t.jsxs(H,{alert:s.alert,disabled:s.disabled||s.loading,onClick:()=>{!s.loading&&!s.disabled&&s.onClick()},optionsInCenter:l,children:[s.text," ",s.loading?oe:s.icon]},`suboption-${x}`))]})]})})},St=f.default.div`
  padding: 20px;
  background: linear-gradient(#feedec 25%, #fff 25%);
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  text-align: center;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #383838;
`,Nt=f.default.p`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 21px;
  color: #808080;
  margin: 15px 0;
`,yt=f.default.div`
  margin-top: 30px;
  padding-top: 20px;
  display: flex;
  justify-content: space-around;
  gap: 10px;
  border-top: 1px solid #dfdfdf;
`,Lt=f.default.div`
  width: 3px;
  background: #dfdfdf;
`,It=f.default.div`
  padding: 0 20px;
`,zt="data:image/webp;base64,UklGRlxRAABXRUJQVlA4WAoAAAAQAAAA6wEA6wEAQUxQSLYdAAABGYVt2zaIgm7//3C6L4jo/wTYj5K0hbv7BELXSikkgAkEW5Ge9Vm6x4yjVGyqheVZWr3lKGjbhulS/qz3EUTEBOghMe0wrVyGx+QHJcqtHE9ZtlGZYLvYB4AcSZIiqRb0F4+ZmfcYSgR/VsQETIAcatuOR3q/cGzbtm3PrG0b7Z6tjN5mZdusxrbtZBD++NZO/i9dREyAN9q2TdvWbSumNhc/22fvT9e2bdu2bfvXsW3btm1/xt777s/WQs8/Wh/jevRxHRET4Nm2bddOrG2rA+I8/rn/C/LP6034AA4ICYFAeG9WS6xNJDVXMiImIIbyf/m//F/+L/+X/8v/NV2E+EKxQCgQCvWEIr6IL+Tzv8fQNKVm1JSKYlSMiqIYwDoaJNY3MLV2djA3MjMx1jc2FhuI+DyE4PeyDK2SK+RTcpl0clLS3zs8KZcxWCcisHd1cbR39TDmAYZ/lVUrp4caOwb7B7pGKV0FMg+KDnO3VNHw38SMRNrRVVxTP6VbENj4x2eHYfhfMwMNb961jGOdAN+tMNsL/vtsX9nTe8PEz2H5TDPQlLJPV59KSJ7H9iTQrJ1njslIHX/dTtC87ZteYyIn3GMNmli+6wRg0oYw7wwGzcxsvgCASRoCjBaJQVPLYusQOUM8kZ6ByGAOaO57uxUqpVKNMbni6enrm9g62VtYWJrp64t5GDQ5q5RPSiclkpHRwZ7BSYWMxmQIiSwcnDy9rM0sjRFCLGijLKWclktGx0bbW8d6RykiIzDxdHe0s3f0MgftWjnY2t3fN1TXp2AJCBKbm3q4eoe5WmHQ7hlp33BjTVv3yDRNJASWXo4e7iFWgIFL4mlJR2lnx1DbBEsMRC6hSX5OiMLAVbFKOtpZWlw/oOZ4hqEhvlH+wJWlxXWVxa00F0MWgenhfrbAvSXtrbWvqxSYOyGr+MgsawzcHY+Vvi6vHsMcyCy+MMyEBe7PDNW8/lQt4zLm/tk5PkAS5e9efaxRcRKD6DmxGMgjVfXhSi3LMcRZMxNYIJV087Xn5TR3MFm5gQKyKW84dkvGCZDr1uVAQrvPnB7X/vw3ZgEpbbt4elyry+pADJDUkYOXJ7W15m84AqS1amkD1sbKU//iLwPi+mf9pr+/enjNq3/QDz3Ii9f/xP+IHljVu37tv3Qgsc/+D9/nNeoBVbz2F/65HmmPf/uHPb89nDLH9/2zPN7+w/92qQdRrP6sf8Bj7n/8ekkPn6T8V6981Hn1v3vU8gCe6j1/k8fdf+DpRA+dRP6NZx953v035tzDJorn/iaPvM/8fY7Kwzao/tz3Pvb4a17lvHrADFVve+bR5+1v7qiiB0sq6q0efZ96UyIP1zSdn3788YqQHi4o1eFR+BBSD5I4kuqrjz/7Rh06jD1IsFWOPrVHn5c/d9RhlR4oSeff+92PPt/1maMK5iEaKtXxld//6POrXq6j44geJNero6Of89jzzZ95HElCD5BVUh09+WVffeT5rb/nqKOo5gHaqMTRiz/jkef71XFQbXqIKKgj9cO/8qjze/7A0RlHHqLZSqmO/sfvuUecL33Plx1XygO1UqmOjuNn/Ng92uz7/LaeHEqoYw+PzYyjDuml//6HvfRI883/7Cc/OUhHMuvhUUJMjnr2B/9zX32U+fA/9vOfytGRc3mQDsJRqfr9f9/HCMyv/vs/VFpqMg/XkOnMZ//lT6Tl5R/570cJ8mAdZUyE2ucTVleyBOXlX/OP/qink44roh4kubOtDVtr3Jq4/jUmJPvZ/+B/9om2sInGtofIsBMuYYGBhr2pS9+qCciXftbf8P0+dcBmc55zDxFBqY7qiMJ85w/75N/5Z7+3x4x94Jf+1r/8r3hmutS6HIw8XKujjqMIpSvx1Cd/2h/Z3/DXvOWRYp/4Jb/lNX/ZX/m8q9Naaw09VJiGzpTEwtPf+vgv/6Wv+xv/5jc9OuyDv/I3Pvkr//K3PfvyMNGcWzLTA0QJOTTNCV1aOy7Hcx/4Fb/0df/J+x8X2v75d/9Vf+U7X744r7a2w9SlRXqYEJUSWgzHJRl69l+cR8a/6qd+g9Gs0bIdtifLrOgBEuVEhYXssDmm9/zHHh3/yT/pv3gpbbSMVVuWHcweJI6gluuz5mp2+NP+RY+Qf9G/8q9+zXmylq0VHIMeJhEzV8N2XETY0/+WR8lv+8f+62emaaOFTCziQZKr0abNjEyX6K/2SPlXfvg7mEaDhRbL8iCN5GrMdjFXjzle/sceK/qnf8QTLNOaY7SWoD1EBCVmp+lyLFZ773OPFf7C3/fNlksGxyYca8jDtJVNi5mZLtUl62/1aPmWb//taxna8fKhCavNQ7WS67Oz2A7Ltz9e9PbvHJdkWktryqgHilRkzC4blpb0aOF4yRwX92zHjkE8YFjDYC5NI/a5tzxefP056xI7ptYlouVhkzt3vri7ffLdjxcff5fmalvtaBbHLA/WKM3MlazRjg/8SY8WL335dUPWZDVpTfKAzT03s2mx9vk3P1p86WtvPS6aRrmItOZhm0k1u9poWt/5rh4rvvzCG5eNMIcGTQ8bSrZcX6zWvv7k+ceKz771xZF7trSwB04ihg2Wq89+7J2PFZ94Z9kyNUFrefgmgpHJTu0T736s+Ni7t9XExILWw4eW5nqmBR9+/2PFH3uvHVvT5HrYg0h0x4TLgQ/8SY8V3/V2pmmCVhcP5naPZuoSn33zI8W++Dp0qUvODe3BhJZoaDusT72lx4kXP/dWbcd2rGG1eXhnYprj8tUnr3ic+NB7N1pdCG0e4GkNrYvjK19+5+PEB947YjsYzYM8gmXHfPNLb32c+MT3qLmktcwDvbLsGMzH3/048bk3NFosaw+1iWVZjk+9+XHiu9+20CVW81Cvi1wf3/mux4nPv3HOXdI83JfpRJn5rUPiyyMnM272EWKGnnw+JC4/EE2om1xjGAkf3hwSj96amabB6OZmCWnw+fqQePpVNYjGzT0MDWm6f0hc3c6QMN3gziHGdOu3Q+LMkEFu9DEKQ7k4JP4oKSK6uTVFU6HrDojt/hRklAVMwsWXA+Ldhygp5ka3zOwknrw8IF6+J/sZ6iaHtoLUy9cHxIWoVFnAGRX6m6cHxI/EONnc7GIqiO3hAfFga78VpukmJzHYKi8OiBeISWmaG92+Penh8fDtsqgQucmHEio9Oh7ev9LmZBq6wSEoTPP78fDyIpKTuenPEKm6+HQ4PPuEUhk3/CjRjh+eHA6PflAwdPMLBg3N+eFwrvSnb3JCqlS5ezj8lu8OxtzoKJiyv3M4/BWJQm72A2G0f3Q4vCooJ7vZZVDJGNdHA/uEBDXSjY7kZLX19PPBMPyh2pLIuNnPiGorzPsnB0PFD4qcrLnZlZH9bOnN+cHwEAPtjDWMjLbLg+GoVJLopleMfcqtxwfDtoSQzE2PJMVWHh0MCyQlmG5640+G7h4LbFaI7JubXiSVlLtfD4XhAhWmQje98d1Cvr45FC7eT8YIeuCFxFSm968OhauPDebq3IgVbVtfzg6FZz84FZpugNJAJrd/ORQelDlP6OFnCCl1eSg8JNfnJkyU7HN1JPRjp8ka9eCzI6rh8kj4+CGuLOeH35igaOPqSHjxno1xK4Qm+2G7+nwgXH0h6DQ34JBEbeXLwwPhl2ksRroBYoQY/M2vB8J9ggh6+A1BalPOD4TLXL0jD/+iERIuj4OeVWwQevgRoYbq8XHw8bnTXWu3ACOR8PA4ePVYMnd3GwSNqDvfDoPnr1mwK+0mSBClzy8Og/NbW87B5maMlLj94DB4douZQW7FYWqCuvXwMLgKuZ5ug5FIxfjlMHioXF1MN0HJ6fYPDoMzGEO6FRglEW+Ogu5u1WLN3Aj7UEo9/HoQvL4e+5Bqt0JoED69OAgu/q5TO1G3Ajpt8/bhQXAVm+vN3AxhYJo+Pj4I/krDMHEr1GCL9rcfHQS/tce4ciOOKmqIy4PgMTK5LcxgsBXdOwa6tMn10c1QKKHc2w6Bt8+zmVihW4EpNKF3Hw6Bs0/lu3NDpkyaKt6/OASevTe6UrcEgylh68urQ+BSZW20bgmUiXDr8hB4MpRqo3UzZF+COj8E7o3sQ27JlH0Vd46A/tjCgm6KmWZSEf1xBHy5JBkzt2ZMU+TJEfD6m1RJrNuhkGwUT74dAE/fVUFNbgi1QRPqy7MD4N5tmrKh3JSDhva3fzkAfsc0S6x1QwykgvrrAXBRJYzclO1UKJ4dAE9F5RadkjGVtkcHwMtqy9VaN0UE2c+D9esSvrNySw6GKqnfWr73z5Ipk5szTdBsfH67fPduic0566bIsElJ3Tpbvt9u0aYYuS2TIcqwflfCSJ12U0xTTra/t3znqWIauikS0pbBH8t3JigrN+jYT7Z0vXrdSURNdGNMpezzuMX7dCUVI3NrNk6nevt58R7/hQwTujVGSNR492LxHoqq0O2Rxr7Yen+9eJdVgt0iUinC7XuL9wuKiNyaGaSS+nXxLogUtW4NU3I6rteux0X2QTfG5HSVumzpPj5NCGJuzJwsp599WrpH7yidoG6NQWqU6uGLpbt836YwsZtjP40twrtXS3c9ToYmt2gybKrb10v3+FQTaroxKibVBA+W7lxtJYixmjPZRnTy/tL9ssm+ysx6lKZmnP5j5b5d2KiyHy3H99vL2cq9eYOCYCznGFQoPWvhXn4mo1NZz2xKBurtm4V7pmqLLOswRgk//LZwF/ZD1KKcTFLcWbhHikowsx7TCZToeuF+DkWCBUlJBdX5wp1JTSSzIqezi1yuW5eJjcaqTnKySr+2bF9eSpHTsyDG6QiPPi/b+TdCpl1LgnaK/O35sv18e0soyaxIUQWl2+t2ZkoSkRW9xcCmqXq6bM9FYoJZks3JNBucL9tFJGp2azqijEgPl+1OQShmTSSUou62aF/vabMpZVlDEDEXXxftKaZpLO8glL6+WrSz21WbrdYmnYjy7uWiXTrZWJwJSfbni/arZD+oWRWjGtm0+WXRzsmmlOWdYqKLRTuLppERsyqlirbK1ZptrypbpS3rEg0ScfVlyT68LQ1jBmNxi+jB6yV7/k6hyn6WJdGQ8vrVkj36nMo+rYyUCnX7esn++EGkIis7vp8xD5fszMnGMGZhQruoLpfsIgTRyiSaMXzXH/kTwbanNqktWdpIMOyLv/vPBHt/leT7icZcbXzzt/+5YC+fUoVNaNesmfNLv/bPAXv+JiLNiQYXVdIyx+9+HdjDvxWCZnUmmPMffRHsfEIUpABbrtaVj7wA9leqZKLQAKNmWbZ8x3eD3dkq+00JDQ0wS3KOT38U7CWkGkNIATbX5/ylP+717VIokbUtQiRf/e2/uJ5+oGCitZnTTsOLv/uI68e/RCE1GmQYxZwvv3uJ6yLZh1GgrZm794d2uJ6oVETTQLOU2ZU+tsb1CIrCFGxDIuM7NrgelAgSn8GcPzOltf0oohANOoVa+OrUH6zXW3PCRC1O7hsvfnnBuq+2VMkM4IXNvPRyhXV1WwpC4UywCH/2sK5LBjMwOCjXU+jAOiNVNsrqpjEMGua8UFJDOGIYRriz6ncpGpTRuecyaeUX1adrnZxgiun60Ruq15+yn6Cs8a5E2nqiuv6srUiZmfVZgjHpxwHVT7NhZLPEOc/1QtsW1V2osq/lIWmYLaU1quuKcnpanmiuJ4QJqS6MmimVZoESW0YKfVKfntmiCLJAGpqrz1fq5VVTGkRaIQyGLreVelVkk6mxwJEGk14u1OO/SBOm0QIFg0S3zhbqLGhUmFmiZa4uHi7UXZVIUutzTmNS/bFQ91BqyFjhXB00urtQz4tKjMwCnXN1tjxdpx6RoSxzrg/h+tsyvXmZKlTSAl1fFunFq2X68W9KZOyzxo1oqU9ny3QvZUNhZo2mENTnq2V6qphsUVnpLOFimS5Dm+xn1qjTDIqrZbpG5GS1REiuV7+tUo9FhMZCz3ka7m2L9O5Z2hMxaxRhmMyHD4t08QHGPqo1QmtMtb19s0iPP7Sn0FjkXE+VT48W6Vnl5ECzSHfO1W7dWaTzW9OedtMqLcyucG+RLso+NTFrFIqK5Mki/YpEbKbWCI2GpCct0ZfHlWxkmFkmgp1y9X6JXn8SmSKyzoNacPl6iZ6/pwSRdS6MJrYPz5fo7pT2xlqZMVT+crlEv/ruFNEylTChHi/RldpCyFjnudoUnq5QlzFDCbVMERux1fkKfX2B9pQFz2hYojeP2jOMRS90pwV6+dwGpZZrdmKb7/7GDfTpJ2s2k+2mmtjYxWV71SdvoO+YbcYucltvsK1hH7+BPsFsWNhuqDRGO/nwDfSHzXlu74W1Xdguu4U+O9jMjG6ojJaG+s7bZ5/ZZRtzfTfUJjNs2+ULu3le+JTznOfGno1t2HzlazfPp47ZZsZ2Y0UwY770XTfPJ7PNeTu6sezczGbf/OTN8502xnCxG6swDI6v3DwfnzAb5hY/mf1JP/ivv3n+9f/wLbORyY292Rbj277PL/wbXnXzPP8v/Ib/6C3Y1ma7qWrKtsuf95P+/idu4Wf+tR/+tpmG3NYTo3/wp7/PrfwX/vy/fNnp1s6c/90f9Gq387t/wt98WdrNdec/9l885ZZ+3Y/902jdXMM89y+5sZ//r3Kjj7/mz7q1/M3v3i0W8S91cx3/QjK6oaL0nr/e7f03H3Fo3UwF9Sd3g32PP1VJbueVeLMb/Pk3mPNupILkC7fY5YWOkrqJQqg+dot97VMht/JCjjo++eIN9pnvUiHdQl1Uwdd++Q32Gy+HVOj2SWyp+iU32I+rJLfxSFePfu0Xb67f/IdyHJJuoVBx5Pjsj7i1Lv99x0G52s0zoVrVj//gjfULfu+ho1Ru4VSp4/yFv/8P3VS/5j9+0tF1dROdU6onL/yc1/1ZN9O3fugf+7bnc55l3Tw5pzrqOJ749V/7856+jT7z77//fU+aZsdYu312pVL1pCdP//7f+653dPvsl/78P+VPvISFNdnNUwSpoyfH8eTTP+83vfYdT902n/vNP/59f+b7Xb/U5RhzAydVjurJcX7qC7/2tz95z5Pb5bO/4Nf/iX/++16EZU3LYjrJ1aDjScf5c7/xp3zqeMMzt8iXftOv/+hf8he9CZoWpumSG3hdQZ4cx3F0HB3HPvQrftkHXvXGp26LN7/xl3zxT/vL//xnsCxryEVu4tI9Oo6Oow6Ojm9+7Ff8tF/7mb3i2W6B7er+//m3u3/VX/Vtr7tYy45ZE1bTpdvHsBrrydFRR45D0eWLf+gX/7Lf8ole/eyDrus//uXO/S/xwmSty2G575pjN5CUO4/j6KpayJMXPv2Hf+FP/s0f/s6vPfd8D6+e/Xp2/t/evr9Nw2StZa5mLV2ybp5OdkdHx5FrIsGTJ1/4wG/6NT/v17z5nX/iX/DG46H09cH/enL/8uXbW2k0gi4xOceEObBbpzoZw1GllNw3PPHyl+ylF1/9pjf8Ge94x9vf8HwPlW+vX11eXP30+Pr9PxIa4UQvH7rUpkUGxyXLrTs0ddo6SslgGG20pkF8/dl3vOa1b/r2d77rda96qodCH9+9fHb3wYezl49v/+3U5GT8mWV7skGDyI6LdvNcbRsbdewgMgxjaSHL9fDSy8fzTz33J7/5za9+/Rve8Ibn+j+mPry8vvzw5PWD+y9/+Prtb3NygkaQmlK5ZKHJQmYHmhAx2w47FIaxNsygJet0vaU1vvaNV73tDW96/Zt7zTve8YZXPOl/3/r6/vL88ZdX759/uLicv/dnm2ggNGkUSYMds5xbzrHmBh6b85YSaYZdNGwmi66E5dwyYi3zjZeeffY1z11e9eq3vvGZ17z6la84nn3m6aeefvqZJ0+O+l/V7OWXX3zphZdffOmFb738la987Ssfr1+8fP0Pr998+PbPk0mjaeh7ZPqOCNtsU2lLF5osZNGOtdsnjG1zQpvBhnGJmSHSEFowQSNYrIn10tefujz13LPPvyLPPPvsU09dXv3S8899/umnnn7y5Jknmy5HTevll1984eXLi699aS997XjxpW++8K1vPfXCN77xrRdf3JNXNohp7Bvy3YxMdmSSfZITcVwaYnUpyw5MTSibtVmnNTZmG9vGXNCVlTXHCLLc92TH0FrLGllGzsvV5u7J9WU11ydjMiFj3xCaRk6ECDoVJc3luIQdy44hjZYBurg6l4uIGJvZNnPaKLTD0iRrkcU6ZZoYOS9oDYLFosux6V5rzpnzWhYyTSOnp9lM9o00u5xottkIm1LQWi4RZMWOuYEra5vRYNu1OZkxhtIOi+xEFpqwWqOFpjVay/XJ3cuChebk7p3+p8ZookETYmqCiDJFUcqmiTkuhUV2TKNbSM6njZiMje1idmFsJCFCtFwNshpydWkxMo6x3Le1dkKjNa3R1rXdb2RqyMk0BDVNIZpsUiptsBrWarUawm6kwcYYzGa2jcvssl22tUPSoiuCoAW5d5BpjfxPX1hXWMu9h6ZNp3y/yb7ZMaWJSCiSsulk1pB2XI417RgyN3Ews9GWGRdzsXuaySFBuqtFFpmuhYyW5Xq7X0tryKU1rdFo7p67203EJPsg7CKRIptsdptYrrdj2bEsczPNYJpmsztdTnaZXZYSiUQQIefcndzdWmu590IL05qrp/OaLHN3NI1kkn0I0RRRYjtRbLbKiKXTUpeCdhsJ5p6bzS52/WKXbZddqohOyWq5RytLy51dQZa17srVyfUusStdWpjm6lrSBA2RkIl0YrYpqdlsbMqWrYTVWuxYTRNzM7eMWc47230vLi7mUHQKByJImiA7prtGGjIttEamIaY1jbVcv9ROa2iiEdnHbGQnkY0Um1LaUtUlmhaOS+aYzI19pV25euGOy7ZdtkvJIQ4SDleCkKwuBWFBGrRY18IsdAWaOS/XB4smSGZX0JRoNqIkpVQ6qSbkzsNimRu7XN8ds20XFy+7uOyyi6QoKRIOWvc5567WkvtnmnNrMg0tg+U8msmgpqkh2EaEbYqkUCdskU1lk3ZaaK3WWm7ssBlhTKdxcdlVF5XkIEUkcdoxIVoQcu6O1dDSJdeXZXFqrk7WMBrZJxORKWk2EpvETiopm1SuNtpxCZrdWkIwm9PMbGbbZZeLyEFR1FLuUbS03LForablaqNlXZlj0JjrjeHaYjRqooldIpFEspFtSlKxSZc6CXawzA3e0Ny5dY/LZVddKkkkaeU+FJpjLYKQte5h0aCRuWfDmrZYwzSnmmI2QtMJ/YkoipKkZHMMrWVlWm72JcNwsrkwMyMpWkk4kFMt0rREkCvXy07aqTVNo3UFazDntYbRlAkJiVOSKLGTFElJltZamqzL7ZbDOdpyxdiY5VrkSlALxUmoXYtoxCQWTvdt2pWFSyzm6towy7p0atM1M0bSbISS0hRJkib7rP+IYMLW4NJaUeTEMZFWtE7asawmTQSNJldjV5rWyGANLVvT1hZzurg+xppZNieJIs0mRHSajKZxBFZLRjaCWSMJCtlhhx1oIUGakHMmuTsWo+XqMhrNYmELY43R2GnGMsZwKScmiYgo5LthHIcJgjQbRjjVkiYiyBXSJFNrOYd1yv0zmvuuubqYZRnLnHfFmrli1lCQ72jnO+3GARldNCznU65GpCl2qkWL5rQsXMmVRiMTi+a+a1xbmOtDu7ZmDWZ0oZkm+hPEn0MOy+XcriDnoFwNoYWsnGN1hZgWTZhcj2sLy9VpWFibzNW5OgynZaxpQpoIYvoT4+jM9Zw7LUSWlnYPLKHlSu5uWm3HaKdz1tx/MizYsixzHtbcYc6joUxogpzOUZo5nENOTRNCy/WcM8FJ0xppaJxap2Y5TxgyV9fcOZ3mzp0MOyGTnM7JJpNDNdhdcrU1xxrRqF1p7SR3554ZxGJkWWvuXBNz91xvO7W1E9aYcrKJiabJgdsysZrcnTuzoMXSWkPOS0aT0ZpYznNu7l5raMtac14Mlrln36GRo7jFWqcm/1PWcs7VtWvnLJgsC9bpPNm1xlqjuee01iUmy04bjRzZubrIriz3717L1UaD1tAarTmvBQum0egSpjlPy9V5VI8rpvU/Bcu0LPfNNM3VDMt5YbR2urqshbXm/yxsZO207Ji1TqtpaNBac3VhuXO57/yfqc3VRtOIhWkNMa1d+//9X/4v/5f/y//l//L//5shVlA4IIAzAACQ4wCdASrsAewBPlEokEYjoqGhItUJUHAKCWdu5KgesMaSV5uhJnJcA/82HaKyb8h/T/lp7fPLPntll8emGv5P/M80Tof/pesX/heuX+v+Un7Ev+P68/6p/xvUz/Lf7Z/4/8371v+q/bv3ef5P/AfhB8hH9L/xnW8f2P/mexH/D/8X60v/d/dH4e/7Z/wf279rT/46wH1t/Dbzcfy/+W/G/94fX3zr+0/az/Af+H7UcI/1vc0/C35r+/e2D/G8GfjnqI/kX8w/zvpvdxO/r2TzDvbD6X/qP8h+Rny/fff8H0a+uf/M9wD+Ufzj/N/cL9Gf8/wvPt/+19gD+Jfzf/Pf2//Sf+j/HfUX/df9P/P/k17p/pj/pf5n93v8p9g/8i/n/+Z/uv+U/8P+K/////+8L16fsx/2PcW/Tr70P3/FwVF/jSp6CWzSgp6CWzSgp6CWzSgp6CWzSgp6CWzSgp6CWzSgp6CWzSgp6CWzSgp6CWzSgp6CWzSgp6CWzSgp426QSLyc/qLfRxvUjRJtSe+LuuFGu3VL4RDKnW8rfBHc8CwdNk6LdWlBT0Etmf9buky5VcPo5SjdtZ8RfxsmZNns10qMizrl2XNsos0Qh0wcnQYD9SHDq6D9595i2sReTTKUai6fLUeZYnDw+rhCnYEKvYcGCbT/bI9Ci+QO4BsKLCYmHjt3LyIHdWJ1Wc+tzSt1WRGazspSVs+S2UmikrVCDcvFBtgsd4er+cN/66covjhpDokyZlGXoAeUJTbqyBqoBHpNLlTLNJ/UcHWvDK/wyep8vTbb9i4d+CykQWZ5q3E2eCRvcs1IFRfQGSTjuJ6Wh2WtiiDTqTaTmMXLhXq+S6Y3j1BgV07l226YpWmxoFMmzm1dmv8eGYRtQiYrL8I/LjvZG4Wfv0EtlhDjk7r4UCKaO1S6s1+Effk7rjGUkd/NxgyW5okDy55KUetV81hks8ROizVV340VVhoCmwBHdha2Asc7HjJ6IWmFfiF49nbPgP12ZNa7BgMqWfFkmUg9oqH60yNg63nXMH1fEwovkEWAynV9cmGbxEb6FbQf004kIX8eXMm1H6erVMxL960tnE/5CbZKTvi3cZoFNWq2UXRt3dlhadBzdqltACzuaJkH3uhd5az9LKeduhW/F6mGPjP+wX4Y6KMs4A8hEa6oFCoSLZBZBNEk52MiuVKN/tb1RyyuDNUeazcIOhIl+75804OcBchs1pfC7xEQskcH7KnoJay9CCaHX1ZXEx44NjswW1HI8Jb+t9548uULlsQUDZiY5D0O5MgxsmddR1mV1FjSp6CU2owryX8SUUpIQjRPQRFYZavmer5ecFKECoDq2Lohq1RPwu2pus0oKeLv/FeCfwEgudLjAYg8X3VAn0WIQE/YMcOsOwOmen4tEH7mmszrembyHiZdURfIOaXUNH5qGs7ez4UfnRO0xDdMPCxBTMjDDBWmBMBwCUPG9M7bK6OR87g4+ghRfIPAgE63fozvJw7vfyWDsvwVF+/SNiWWHzpaIKgA4z1Sj04VOJ66gVRy7AqL/GlMs0fCqkznw5swttfz9MTa6qNVca04LFBPzfkTeN8UbM16ce4IvkHgVEQ5g4l0dMgutoyPGBJMbFZovtfB6H+wSEY1OA5ceiejV48Cov8Y5dQ+pm5ohP8tVES3ls85/K/6+UCJspj+hmspmY8sXTyvVgN24eBUX+NKXW0x/oNo0/dffXarRLTYnLJut4CsuWoReZJ0j7HhA036rycRqHsqeglsz42uFtCueR/fHy1z9dVvv3Ie6V2kXDym7iK/SQ6TRfIPAqLtlY68g5uO6OlcMf2QBG2Wlg68yJQHQ5vYlKs+iMuNXzU21VOD7IxrqiL5B0LxOXvAJ0AyM7rjIm7D8wZHENXK/cicawBBdyTpce1PvlIyxpU9BLVFXxylFH0qhhnhqqCQoAw0LHXpCgU1bIwfJnUAL6s8MzLcgG1d/Zzg7q9Uqc93yUWeis/QjOUCJCUKyE/6U9jjrjERHkNu7GwkQVIWuaTt2BX8ga6oi+Qcxthx2J7PGGTRAo6QZWj5V0csb4GI2FTfps/PYXmvQpQMFEMZTNIHb7TpFLlqSrPGtNdwyvSJlRfJ7h14SpmYUyEA8om+0Oy86RjXVEXyDm23q0zvyy5iO0Dxtf3RndVwe9k2J5nUmC3P8XD/DXof06C6BdhnSmtU8ivB2aBS66heACMsaVPQS1l+2NteapgbsRzKs1PKz43IzFlCTcMpdmIu7QsK9Y5yV8rMiMmF34nD8jvDYPfo6lvge6tLShQkVPfwWneUNSOWEba7GjkBN1UrdgQbqUsmt90/9vT8vO/+zE9ThE+s9g+noHeyp6CCu1M8Yb5sWAmZY0qegls0oKegls0oKegls0oKegls0oKegls0oKegls0oKegls0oKegls0oKeglsz4AD+/739AAAAAAAAAAAAPvu5RI9oOIeczhMzm/O9lrH1ff5or8Nf1bKSJUv//18NPexN41E7thp8+PJ80bHdXDASWhlViRZXiCT7+48yixvR5/iMBR+wffxuK6qzwkKxg0EIVL8/vadXwyeEr9QfycTWqSjBjxFUlsDPUSYonyJwy8TLMQDJl2zW2laNlOuxa/8dvav4qnN+P+HYDl/1GkZ7y49swKv/TMA/88rv8pDm5OrAzwSUl5W3JrUE5FxxwfXRo/TuVqscAxvsEbF8GGM71oN3csKZMh2s6cANHwcgGj0e0u3LC59yjlPTMa/V2sbDPQC/pJ/8bHxbTO06uuj+Y0wZfeng6vGvPZhDNVkcPx8VxpaE3guc2ApG7hpbTd6h22m5uRabL5tV+8hXpFEEsfGh290vcrfhkVirUutmhp1X418XLObghPHQnZrfP+8fWeJe4rxD/Khcrh+3Hem2iMrYdR4Gsh+6mXzW8NL/Bd5i4GZZS+nLrhGNuYJ7ZE4vzXTy76WhNFXeuLstFlFkyLltLnXsKGhkjvngZmMiZxityfgkCFE4xU1WZt+5w9XJheKkIeid8llpvAFZ/88Wwz5nQtOLq4au6OHhfZ7b188rhkO2amdY++5D4e8F7LuuRvYJSTtY30pdc8cYrmrzr/r95Z379P8uuII1471f3ZAtHwFAOcJh9VrT/eSk0vQA9PNMk8snP1XX4vy8xYsM4FNPGmFfR8Oszdjt41lv2ql9D0pyzSOMtSjaNX7rngej6mFPN2mMBHuTiY4qr1ndB1rxe9Cp1yLha2Vv/SknpTV6b+WmwpD3DpAW4ebXYx7Zosm3jaivW9PAw30NsJmABDreWyRzFZhX8sbtxTV9JWB7CQumZDz6SOkzUxtwRuHBkrIFR2OFHqGD2QyG5csSikMRBdTmwtFvCbuYrAhp3WLl+5EKDIO21HxMRQ7dZ9JhFqlkMI0uV059Cd/pXcA2lENNQp0jIiTb10bknyuPhobF5YkEXb8xbJK+w+AHbjn5V+CgnH+WgRYdhESUsJQwNeKR+dPqWO6wuSwf0ThOvROqvxf406AtOzA66ocJ1/KbC/DcEtKgByFiiUo6cxIm/Bj+6LFxbGkXTF6sE6hEMZNgmbTDPQSxfw0ftQ7vcKbhxCOv7NzohcpsQjkgTG5kkUxkWHvajWamDgHZWIqpSOn4p1HvnuCsXPJ2DraENJHUeh2jd0fdykn7oHqgpRu/7B9aGqnSKmJtWyZOuYg9LE7Ko+Ic3wC46Cu2kWdU4vuy38Ier5/PuYFgzGrnEn1Ydt3dEAe28kmt634oocV1qCFx5grw7qxHKtzf0RZhC1TUvo5qAoSdGcEea4xYuybR45jnf2jQ0ZSwhfDQl4gWD1iiiW4LFvphus//xtSG0n2MuEle2CS2pjwmp/4j87H5Tf6xP/6U47b0YAiVNS4tJSXlzhkrduVNB1hI4MxzV5AgKiGdDAd4wydwnOcCQ7IVztrcq+T/+f9Ef+Lk25K6IfLPX1DXjh7Se1/UlAR0OibKgGTsCTn8s5IYitLjBEM2v/7FyyjJy2srBYQlwmSOBL5MknBeZox2vDy6+qj4kDrxrDVqDX/8/lesWKpemzMBZKIZyrLNBCChIIEolQti/eg8Nw4fxyJCGLCfJK1kBEJf9tehWhXlAOXKZOVTZnHF9Hj7VHNg3I/AMRbmqo2HmS59/fBbzJVRUpYg+GEoEd91MJ9pukuJ6xXBCRH1ceADxxgQ9xgwEBEuQI/k4jjPD2CioW4gaKcEFftBrcVmcULI89GLz9scu1PPj3HvITcYF4aID9Y+h5/vmnXuwV3MyGV52uKNcuIQtG6Y3BD1d5OT+N02jm+yp6QWaYZZ2bCZtfcdbhS8UulRGszBPeCtOUvXPSjSeg/BCz4/LeLlMjYNzkKTM7eBvgQDqW+wTRGcVKtFccXhoRNnaosiBF9V9QIPHW7LoWNdn/SUOIwif0tDvRbvC+mm3IeZY6ojLtIMmrCorPkkmm5JgFN1DNMBrm/hAIUlrNgkgD1WUYrF5VhHEIGKMAJ5WuRs2kq5DbbV1mzjRBPHn/HPdsi1hT8EFpk+nRaoGRz4tpE2Yvc8aZwYvvpgoJ9Tyi19HB8XHWipBM1D5itGc7eenlQfZuBGnoCVkP+YiZkfQjlEuhk+TGn+P7q+p9aKiAb5wFX73VjjLXofvDYvC8O0ooN8Tn8CPRvpnyFOyU6s6dUiFuRug3Zo/Nbntn8xTC6PDEGkqWOrCSUKCCjrylqUIqYh34tjT4mr7gMNfxCTK67qNw337LNiIi6hO+OCzAbsQvQBadNOnGpaeh2ThveWTKUaGXs2n06SERH5Fi6bGNI6b5UT09NN5Je8/CGYuM/dZfCZO/VhxYDxDgGNGwOyAl3mKKoq4d8t7QPr65K1O86unCT6Nnq4IF9yZGb/UWvrcFwBuCcpWwt88Zx4VZUZLeb1S+fQrJtafiMYsx3K/5i7XkXUWPsVbez1ydQUXpWwRJ5NWc2gMmpzB9Ix+9CjvRJjiHhmbsxiKlFNBAY3gm47oACP4YONZ87YToFjqOkcQamXf4HLqSPr/Aflf4Eudyaa54SHMQI2217C7bbv1T3CrJo0wRNiwW7DzzIhzowXPTPQpNh8vbJIAMLfXbYAlQogIybaW0CZPgtx1nWMJHG1VXmrmebJcFsDzZrhnFetJMVe5WsrBZaeicthoRYDEIG+yIJ4UVlLDk8v6zJmjv1pi0Tvs4BsgIJUur1S+Y2LQEQmkHgKdhgLGwdJEMVWYK3sP7wH5NTV/zGkDDfRYW8SBVn3UtJbq/dyEa5virBWcC8Y6/PgdzDbo0lwJI3IBXDJn9Lra7cTj6O3Fl2Ljn8S1pYQxjgzgEGQHXl7SVEyjn6eHlFp+QaeBsXOOlMsTnZIddKjbizc1ZgJxic5YlyhmilGFh2lfLnnPMubsJFa3cNVY4lRvmprpL2sbTcAlKsWR58x5/1Spqsa+8ljzFdzoau75RJ/VMzPa8sfJuKbRpqG7W7xWZne+QXw2qpZGF7rceIDXasw5e06Evx2kkrxoVDV/SD5Uyu+P4HV/SMuxEP62oRSmYcZ24ItjQETRWIjQpRwZJPDFik2391emqaMysP7c7sgKDWO+SbJ1BSQkPbrhfvyh/dFN501T9IoJnhKVPLdvv9N3lPZZCF7gfC3w3/C0LlxQlQagam1oLkJwm8Xt1Iztf+hy3Rh8ZZuKC7jXMD1QGa2rqdaj0kRvT9eOaaZXLAhRjsOjivwpoODpStXXwItg7/xjK5TUe9taAtpE6QGgIRBT/9EWGv+oylKxcvWi4VUW8zeLrsrk93qqbQAjMcVgz3WciZd5DL0q74AsSDyoAnRCdAJ3i3CHNVTskNJ1tHQv8IWstX1cCQaDQHf5Cd01VD1QJB2zNBGhA+8vQgA8pBUzAxQJl3eIOR8BdS+l/hzFiQwJ0ocNt+MPNCF4amxqEwQl9w5xeARUsCQ4Wc8XkuXWLYDjsUkw8b9l9jd0ciP7bNcaDM235dYP4cgRnAiIPuN6VMv4Wr53343IN8qR8DTIAbZ2bFSsH4ALUXqkMkrt4Ay88XNmJ0kSdOUkOws93mEEsBs7xMok9QrnLZejaKVnNWEYUiEttneAvG5mlu42sEEe/jr9rupUaij3HZW0xP3eJ9pVeiZPSZ6PgoNGrViAd1hUfUCWd+UMwfxJWIca3YwcDWGe9buvef8dJHB/nh+xl/1nGhJLIdxJ5BzTc7NZkU1oNEjd9f4URIAGPyMLADZTnhzW9wO6VNh0Te9bv0mH2kQ9raKIavOBd34IWGHQHOk2tjFTPRLTzOygBlPpfvRND3FZ8T9TMpjjagkAq/hRXi3JENJwnMTv5E5np1aT4067YzlddlofDeTKsPa+jIRcnsG7dBQM6/a2Lv0kDi1QhJ8qFq5JCP8Jk68VJlIKiJm2bFAmyxNO6V3X6qLq2tAJ2i+IxrW1kus34dm0mK1Yww1iBAlAos5VWQsUM2VJugottxdnM6jS63mQyKk3Mfq8DHb2VaJA470+DUAj8zltgyqDY9a50kFnOx95eA7MrFaVUt9hVrov6ADwp2El9FE75wUjpjFaNHJe9IEp//YtGSp10dryk3/eFzI0ZYYahQk9LINTqGq66TvXlKbLUV4VYrfRYMJ0DI3JBJDbhFxI3XjhkWa6P2WtP2kR+GQpmdDFNb6hmBMGBQBB2F3b5TMGN9jKv60TvLehFGUKqNKk3Z6JBxcsHpi4/zILNpFWYIo3jlAvA4XEIOCfUYSEtBHOAtUj6ttzcD3vKemKruFwnGAHzRH/bCxkUMkZyShIoTKxcq8YaimJ3t7+Q2hp2p8yPp0nrUbPVBETKw8QjdeV5GyvU0Biy7y+anjLx3hT/yr3+mOimE7WRHySFtQSDn+WZAZwvgqgd2Ore2w0Yhm5JlUu6hBeoSpTcum2RK3D+wG4hbh+ttAIlf0RGVa3P6wvz1wg3vpRlGZlaajE62UdV52sbGIRYDJ+0cBeebjQaXQGdwcZT3+aDcSXhSqo9TbNRwoCZTYl7tkq3++d3BM1dtobw/DUJOw9N6eiaJx+lP2sw2NYBGH1frJbj+wTqiudD2IctjWh4GiyzksM/ode3TuNQbfabUhedak96ckWSRy4aeCH9RfbR37QXLtkX719VxynGPWzQ2Azav52xrQsxuAJrsnBJUNGMXO4AVsU2N/uvcivTKTVpVqxd9S5N23vd454RYRyTTOkaEqAjtBGX30pHRkDxB/0tfoV5vrTwUgJYjJwBiZw57DfINdTFRcC7xZY2fnybtg5qIKYkv3HpjXd/ED9mts2PAEmmY5iccMqnnPkWXFyvsJA+Q8IAPZP68p7WGSDa9UdMSMe4fI1Y62ESNuexVy0Il98sUv+fjRU9mU6B38+IONaHzYZ27A9NAYIDQJycKOzWyLCkaVr/L5cRs8IsjKc/TDJ+PUc9OdLc9rR+CPXxnQ2QP/Nx1mewhk5EvKrBLnGb+yCQBRo4ftlWtAiUO3ZluydYkdHmWr034oiaB9d9y0MmMN/IxPor1/GPzvgtgfjGEWPk3DbbvrN+nUhP8rNBhrTu5AWbS0v4k5/c72zzMGs1t/3DmNJDgoIZDDl0vsoB5hyCHZiDBG9CgQnftE3wql9rwL5NN1K/FpXRdEqiWnWgVBF2/B69e4pKXqhXqKKsXyOkYk2qhq03xqdJFIk+xalOFLt2ooUvRYFobaAWPHCbBMg5ao6+DPY69LL08UAf4ZFpNhNoU099yQ+cqCYtWh91ulf2PPeybVQpp2YmsPTCIGOZIisv15uBjpvbIAPprCdXAK5D17lmTfyVxgEtEO9dJLtQAv8fHSQ+ZAEVgSeN5/0ZdB9JIrprI0yG606KKA2+rmtaTl9vm4Q2RJowF15KWynllr36qTcR62XgHTLop14lAIDeX3+aKLx/mS0Lf5tUcTy0a3EYsTRkTs/lJ7HMjrpOYuEddCS106JXbkyAvmCRyK9v0DXdnMOHG0291wML59qsYRGNDUUvo73OHTS0Bjtfg/Y7GcVSBELWeUYPM+FNT6XpsqSrrFmo5YDSonAZV2GsSF7+X90Vi9VLAqBtAo8QEUKOqMNYOehPicPaZ19AJBUgIZPHGfO8RJMc3joAQTmcJ7OE7CgV9AszKD8AUEPqYOIkF8QRSwHkHuVTmq8tb3zC0QYl5J48NX4ED3v3jh6UMfHe3aZ5wQKT20Aard3PGVG37nDspUnKGOgmpn9mtBqqTviB35/VD9JAK3O0l0OBUQxjmk9xv7eBlxZdAHE/ymR4cQA0xkz04qzq3b5TpZ0Qu2I8YNlY5vB+pHto8gzA+QBDfHWzeVioEfc7mJ4/fSeVbcClr7FuUmBm3PqX3Sw433J2uA/T9+cIpf2ToivwczdPh9xyq33uidM0Pv1VBpkgq53XlRwcZTSq5IU5cONjJAPbdwibeeucdMa1xQA7egQolHPIZuZsiQXGBgnAdLgAF8G6+87MHf/QJ2oUbEtMDvb0al3DRHWoWBxXEfShkG7oL7xJS1T7QAwuOwe3cC2NzpieYzByIJ/kY35A0SY/N/WcRfLr/Urbztem32seFYqwby/swOc2QE/BWvntUaMHuOr5cEddd8UEdpxe/NbX7NlG1T2iVQM0KwRFdnlolmjM2UddX/eqdyrl+/NLC7jaIrKO6pq8JvNt1UqM77/g125UN1G/RBFNGc8/IBKkYGRo1Lw1yMfTtH38pT1PSWGZEYEcPeNG4XGjQXld261vWp7opD3nimQ1kuxWLGTfuZf7FL7rAJxZ+ZnlqB5a7hQbckHfQ08uArDlpDGuKqij8KjDyfa01jvYJjidqEI3N0BFSkr/A5wG0PzJXnaUol+MT5C9bS98R0vbtylcY84PSj4+dSf10/wpnVCXqvABJO0Rg5QIPx66E5oBdvIEZptPoetsxfo4bsKWUHwSrYA+ZrlWOQ3UMJZ7O8P+QPEWje48HwABwWLMH7H5YJlJHqSNU6K8JyBmPZ0HIMUfKkukOOu24IQiko8mudeim+whv/H9SwlOfYpwTpbtNpk8q+90QJ+VV/HaJo5CQludjl0ydx8NA/9GP81JPzVy2rOa0xfNiBYbv0FV6AQmpS0fFNrzENe1JaLzgdUIBC7MyILfIAWid9w0RoXU4czPd6ilWWlvtXI1q51mwuvb/GEJ1yE1jSgGc0h1YH0xqxeIhz0fSx1+hPMDZhB7UO8T/FCDGeEOWLvNfSW5gRmg6d65VhmWJJh3/pRw9Jusbj8j4MlZ4jLlZKgwWO13z92gVBs59+kVHTRi6aCeMo9FHyWGXxZYyjXoHjWlcirUq/i9t+OUA3++ScnnahISNsmcT0V0dqa8INc2kQf3FrMTVu/fnXHkkViek/vHaKze2NFdhy1+MBVOgeMBw3zL5y8vuZNiGlfTMN350ClfPhAgOAJLQwb4LLyy6MHdUTv3fHqx2Ey9iLTWAzUDj8GNNdNgWUM05QNLGYCdis5IvzLAZu+0hCub5m+X9qpTUQ2hGyVpe3BgHqM18HQEvIP3gmLQOMq4WrMD48WTNPoCcjLwhN2gA80RbXEU602BNzlxXuWUNAwM15z32TLwa4q8K2UWaE0Yg3JDcRSljIQ1vWhuTARbW7Jn6v1uyGcNQQX3ic14MTrLL8S7kcdMsFlp6TDNQnHHZ/rxZPLjnM6MjMHvZ8xZvOuZQxsQnoJb2Zb+GfKLMK59Iuf991biaSt2ONcN7e1enCLD9R9YfFI7jvqMYTN+IfCX6cUiUryLPaMANwcAV1Ng5K3GvcX3AAAmqC1AAN7csN+kcy4jH0oXRgeosEH+0R34GtjlxgrjR15R/i5j2ZPPV+AWk2OvVBcj3p7QYoJh3PHaSe1QgX5EvdYOLKFbzXjUzKxC5IARcP3khib73sV0CNDzcI5rLU+lznlvXtcbxeD3UfR0O6icawj02/OQtSd4gh6J03u/Ol4ubA8uvvBM/CKKYGjlUvzeA2+ok6QPcr0eKVlLdHGFoAB9bnBTGVHUqYwXPUI+2SrYwBqO23crgjhTjOFwqcGvNaABpv4cuhRbgOgHObKRJynRECdiWC3wNVTDMDX+Y49N1xQ2NHJI8S1lK4VxEff2BRGqEnzQnVcoR5coElnKtjWuusqZSp4HaJd24sDq32JiRl8zhxIpOfv3RNIMK54piIOOvN/XBNWoOcmKj1rxdrGhndAANAWcjmUK7kWzF8aswqUSifw729QC0XjSIeQHc47DLWvjYIZ7+23929O9fdC/zGwHRh7yDijDp0blxCWCjVyn4tt+j1x56TAiT+FGO5lZ/5mXfzgHX3mUr7hJhY1YEwRuPXDofbThTOP+L1kFe82Zf+gZchrrV3/6RGOdKET3YgabuAl4bL4bBduvdFY6hPxDteVbF3SHGChRcUoJjRFOdxjQhN/JY3AkG/y6NnChOqXjevEuu9vNgBoupClNI+fIKZfhcYYSDEdbGQfEBfwpLAdKJG8tRntVkmOXYBkUVy23lTsreRME2bWxOkU6kPK4Ez/NpkJEW/CVkGoO49Yu1DdAp+OowSS0+++KrXtBHrK3ejZThZ8pIt4lTQI2O7VJJ2lPKSlrOlXhyPaL6z+UQggBgO/MpQ+CdOmI5p8L/7VnMQeEvnSfKSIpBGutahGbjQpxoOr7w82kpYH2K4HW/716A1c4ubiGxd6jphgUo2Zyl2v5YI4X7AGkgW998vB6vxoIFutjywnBn70noEcr9dr6HwiO2/gU9CF14UUODggjNC6QVo2tj7ImOi2+OudnVcsHOhh5jDDigAglnLEWPMfzINmqtgIyrKQHZzYR8MCW0dWfDwDzAfpCWO52TkGS0E6WXfzLc1dD92n1jEEIiv4SACd6DStKU8UseL81dkS6p+mL4bCRIRxxOZ6U0M+ONFEQ5Yd4Qxf9QmKwaH/ciprnGJa4dBDVv2BERNyl1rak50fnR1M98f5ihXqqWXtjJeTIP7DDu6SLqmXvw+dI/9qJEII4gFTpDT5OHwAFoEjT5A6V93s9EE+rexmlTQOkgY38LFbtEcwSFWNwjXwhC7D2/I21zn7tmU714a835yCo4teJ860THERJHHmfefT1FptKiFA7Y5yLIftHyujQPPdG59UkzNmsYflrdrXtjD/OfvuZ3QHp15grPutTOhomTzsTA8y6dEZog6KEuJHUBDadC4v86Y5ska66C4HuwQI4oX4fZhoHdNGkD2VVxvx5UCtDIYchpedaK4GxTRZjTMHy6tU86a9zLQ8GRS1WG3puEKyCpQwVQI5qlSGlQWmX1ZkgghjGBOK9IoL0Vmw8cV+RLkFwORqqQ4l4M7wFadCUX3xGjXfdnQr3lUl6u8K3xNUjC6v0qZRNtOh7pWz018M8+ZzG+p8u2Jx9oz8CcDbLUQaGfmm7cwKwDK2UMWALbVhuxt7e9Jb7gYtP28eWMUwdaCqbGIIw/Q6mnBAHZh3gZ4lVpxULCcArfsk7qBFFAtH+Ya9IZ8XYCop7KOb6qapNLEgiosD/KY4jMdgIIbJf08Qcthd9cGfTFRhA47oL+CtvkZ7+7hfFNL5hfrg2K5r4GmPtfUQ7GaTB8My36X0Uywjjdl8jNWvAl1NrlIyMP1dYfD2zQi+GIszm/0oq6A4a8X7KdrEWrcotyC+VKbKHHtneEbsnxOjEFPaKdPDduR4B3/wSG249IpQYflEq1ATvm+1O225RFYpovKR2xXZiBt8+Kd6LIFzQYpfGufp7jKNTdLd4+4coypYJ6Vc/zmGVeQphpCtyfJiptd2TFBFWI9FKuy8e9Ey+Z8KCNRMAYTfw3LbiKtmSwWCLcokM3uc3dIYNSwUT4CkTsMKhAuThBbE686foXo/XULqXRJnv4vFN7yBrwb2yV9M7mDr9awjAck12ooF8oOb3QCjtKd6fgiRTnGLit9RLbN0ic/NDolKP0eFeNiOl4ZnsG/U++uhiNO3nJw9rN7G0qNisjltWCUZs9pexiKADJ2uRJ+qAXnCEGwo3+k37zzitxu5XRvCvPcqHABb1cPhFDkLi+HHrX4p2lHNZdM9CJZdcRO91HArlt97ed3KuS076EIUdMkTc17bA2Qsry6VTGK4oXtOkotzRFYXvp2Hxalrtn30JRD179LBHMXzcuuonixJOZOphurGtjOZmlJkmFsHcQmmDxvFeFJNnEwD8uwyYaXnkQt9S3+PsBMo/i1T5S0Bfa9DaAsXcsgRi/7kqAE/z/J909zC1AWtJjoE3PrDfHSMEBCd0KET1j8X34BiWkQuCVAd8ZiIpBcCh0pxAQUdKJZsjPFzzMsATld5HvsqFh+482CbH7W+FL87VBMaGevJcotOTYpDI6z7v2w82HTcX6SYOiMy9EMuWZAOWgEHvoFPOniAQDFbDMcNTcX5kOTBzSpKkLNqu80fX2hlju4ufTCnEXa62NcnRbTqmgtMV0C7jJgwQQPKh9tWIwPvsmFStrtfCUCsgqY8t33UnmTIjEtJJDD/g7S4AcsvB2MUqQkUgcCPE80i89TrDiM/1hGB3H427P/gFaIWT5HvcWyMVnFlhjA7AvHQUzUk12zV90z27+NeZJBf7H+61JGPqXmf+B6fjW8qMeMndJP1V+8WbrvfO7iNeW+ASKF43CAACHNW7B3leTioK+h/S6/8evcWzda2flGiDx8P1V+WSPvV6JOK/mG0FjrX9uyRL0Kw+7/gm3G3++GJla26Rvgm6zYJR/So1Coz5aL95smJo1eaSIgRUolR9afuwRy2UqMH7p5yerqKvMQLcfwtyD+Qg64r8q5Mf7Iatp4fSLChmkge9iXCEW4n581pQWcQEDZw+zR6rkEwFyxEuZqMgl4c+g/63uqO51y8AUYmFt9OuqCI46w6eMAj8RaWisd4wxYGAVswxCmVks5U7Ah9AcUkjmkgH3hXIpj6sEzeLpPGDyQ45T+/hPvHhMjYCUwnGotjco8LvWUbbLduPrGIJ0/rVrSAaXFLxhfPvPbMoMG89f3dzQ2qvIz4KDrZOwXLn3Wyf0Jk+6CYEABa5VqTX9dOV0AfRnx/8R32AKlbT1dcQ0NjnvPKV35oK88f7HbfOPBn8Y9q7Hsgc5WznnECn8Mq96lb5uHR4EPfLaeAyZbrvKvtxBX+W6pofrtkaK2NXe2m9C0S7+2R1Fwhy71HJok72WzuJTpICj8sTyjBd42vmSShwehQBwbxOzrJnXC5oLStDGT5yFOL8a0CJCC0Bz7gcHKW6UpOucYXLjO3QbfJaDQoX0hMkCJns2ippH0RjsqYRxaW0z2PcjYz3UvwhDrnzTX9bGKxTCPOmVYe0qJ3Obvt3mZmN5Ibx11CzJkOahYuranLyT+ymsturkq87vr/9dnxC9U4t0zOhP9vaOXz8ozGnRQqHxz1zz1c1ArrpOiGJTr5BS8g4V3aoFWS1Vf5HUPWPvfNq2frRP4nX4cjrFr8epM9MOis4qKoxvqLjERPRgABZ6wRkfm4GejIaq6EzZFV3gJ1Nv67YVnJhamfRNan2y8pMJYQjixlpLrb1HZG/2ERMT9iUA2w4apyuV4PtB3IX9yiiPl3s8Xf7Y8hZ8f2whCsfChXgsk4vO2gi03+JCe3yogrbg0RlRRN2jrQafucnUx557/HmydH2h/L9eMCWW763E6PinUzqF5GclNG/MYX/focM2lg8dI3baLEX6hpwm5bg7teKLkQeQO7Du/iMdjmD0XPYNJ8/vx86BIuJgt2ZWTjPQ+XUQXbS8QleUyChfWpay02iDy258rqnWf9nGN47bt5pDEOMRq6q23odoMd0/b4FxC2mpvG6JFpk6ZB5S/CL+iAea2FU22pHlLUL2zuoSBUGKMbBlp9m4r53I9g+qH6bSrGHGuc0XV3pYHJBJMNCDMNlsH70l2LDrIHEIr6XAhz6IMFCiSAD8UzqoZTtWQVV7GW8mzwpkAcx+WQD/BGD0/nWtTChLt9R+FJsU7XlpDiGPWwdxdy3YpxwUCxzowlOJ7/sQKLKTN5qCflKMheYedP74aNPG86MR7ZW7udWfFGVYF94oCSfbX/Lz/5oi+XSBQjmDLaF4QpujGNBoM5naRnnckOwFyTEXIlptRrm/izZheOtn12kkpudVqT6OO2wjLEu1SaeXet6z6kfPedclhxnaKuahXS0BU1Z6qp+CMECWVZhU31uHuaz21dYoKtuX7JFzIyl/f6vcn4BbEEV0bvfHL3p7lzxyzVf08fwyBSDXQZGJ5W78TotaCEFBjNgWoDBNO9E48kKruhCrCDsKq4YirR6l/Fszh8Vq/F5cNoqiVS4PefVbPVi+dleUrrck7q9Z9v9Qh0J1FTaGtmNQVmGqF8mThw7JptdGdZIfS0mUqjLVZaAr/2Ab4bhGFg+l9bB1Pr+GW4F2sxGLNYMpONzCaETGmjGj3OCrNIkeKakKW6UfETR90H2qw6B3X4CDnN3lmxV4fzKTzsy0K5UBpMYMP4kwqeTqti4OKCEeb1n8niyAsx8XeSPSVuaeo+8+ZTVYdLx860T5C86gl2yMr/U+YozGg1n43Kitg9PFIp1Cy7nFA8jMvu5J8SoK6v8wuolajVtMD1fluaFZV15d6XkXSCgH536QDtIgub+SaPLKZ5ijIxaZNsPQyYYB1V80kLALMcRZfZY1vXYyMYaCNK3Mxpsietdp/onBqDcShC0TsQy9ccCHfyoO/8RAThgdru6jvsLJlDfvdFaHoqg7xtZkBYKvaxa6scIx33KDCBI+wBe0UlhcJJewU02pSAnV/UEsmiNjRmsazUnYOUrzqjWNWTkTPIGbaMqXjJOSBjXwMlOCMRD54Z9y8+SW/aX3hafNX0O6TKqFzrfBArICun4Vj2fQoYCtoubLNVjY+itbVYmAH+JEUyaTQ+hCSxs+FpAMIIq+YUbIvsq9t6v2kwAvDW4ZPyUXdCL3tmH68nLzp/lNwLOCcuhqHv+cxRexb8p+ZS+l9iAX5D6Bnls90zfCzeudtRtFP/tW3dMYSi6tK5m6kzm8UAVGBRPmFfUQlp/HkXas/H5W0x+RW2GbpYV1IX8wqekQ7p6HG8mcpp0sWn721icR4hFVNWoElWWPQkyxsGmlPTgNX2lO4Jqua/gpwMT3483fbt7+qTqvTH/sgo+JDmILA3MudNktV3HBR+iNfC1tc/e3waMmiK5ez1CEQP4bs30k0xFudKUK5nzxrpPRb/lKiJJ/3TvHeYKB6FsLU5r0zNIBRZl40F8xD/Ozb/Dg/Djo9u+m6onEzjXG/Ly3uf7DfVm3IFI8HHzKUuWvctFXqg+7b92aqPqGf086dArN5wjW6G2OOItXt8tRH73AxJgNMLVzb/rmFA3BGPf0b8MIy6j+pf4EaZo2vVujPbn4clhdaFtJIie3nn4Bf7DgdgHaqXXOmh0tAJ++hCIAgFUb0wiofRlzRw6ioXlvHZ5fT7cP1YZACdSScs/GWZKnAARuEKMyWiQSqBdBug4jQjsyxrThlBDDxsFw11+a6AhpPwdw9F4Z16IxHiABSqA9+1xrQUADlf0fKYKIY61yaqQ/eGeYQAi/lHEgEmAhW8M4s5lpWqQPZa6QWjuCXmvqcbrBT0dgzL/bWNUBeAwCuDAgYHSIgj9EURLUhGoXOFx5uwRsDkrL1pfArVxTIAXX9RZAGoI74BYpwZBgxqxe8JtxHYZwIAWaON/j4Wq0W9JdhlEOhsfQL7FItaKon15w6scEJpA2vXxEBQgoeCeGBsEbkaFU42YH7exHAvXxbZ+bdWCSCddtkEMFpDnOohLaaEjdfaludGnmTzI9IO9c/SqhEeZ/tZthSOww80uNGuLJczuLO8c7YJbgzapFQQqNF+gyrTJFVnCwZlLEFxOzGH6+zzt+9nn6AsX/vL4dmBezsqvtyNf9LK8avRnMKCmYklmb/NPxlHBV6pCabN384UGNAwhugEDYErGKFbWj7qE6NPLXfG0oT3lN8wbFo0MqMZHJXW78oVySHT9uxokeO5R7Yy16iAgAWmx185uQl2corVU8C/lg7t6VRjNYcH7bvq5vRm9vtCzJnaCtcbTDu7Xa91tPHR9bMICfU2IbzJkqV1ZU1lm6PqnpJI4hVPQ7KDD9pZAGZkwzP3MfYCt1aAcRKUO++K2DP+nKv9DXUr2X7rvsPmYX4hCVm6XjJa3tbi1Cty4n4tEzEZtpwgeTAWK6YXtCr07Vd1HSjp6HHCx8c7baDDHVY50yYO7UJWvHrH9n/Kpf8/JzB53vqmB3atG1XYK/FfxbpUA5E3M2ZH2dGcjlW3kQxBDTd4tTzmbLaO1YrurCSogo3sargMsJ7L/ODZPGXOEtzPB8eQRD7z/HHRIw0k8Qvtsjpvm4+0q44GddjImgvDtFVwqmVQUYs7W9PQ8BxVys5ZW60grDTljGUkA3eXsCsiWYDVYieMT4gVZC61dfScZznmx8+lqX7BkAIt1LzR/G/yHvMla6rIdvYBO89gt/0nYNTnIyG4lKSQ+Y67a+JKf0XWATITBrPk+WyITkX3o6LDq0Z48oflGzZmOlbk8UX8H0ejegStBk0Q9cd4Yk2T8Er0BisSTI0XUxaoi3uMrugUQ7c/t1gTfsRhPq9DTh/tSz0gmkszTPqOSX/EmGoC0YukWhWfSTav3MB18RS6s0JFWgCYeB/dElIrCfRqJw389jeALD5KnbdFSSorYqtz4SjEpSX31hroHGzRlpdIz4cl1fGL2bX7yCa549fBAXjJWlPue7T+g+sI2gdgqd3rRlGbg28Kh9DdrHLA2lIcssqioDtzhDCTcpYYmCxVRdbriYyTLEYfA1UbgFJT7+nSTRDhvgbSbNVt91qqrIWy6NRqCXc6+WFNxSNpnyhpVon23KQ4vKBLAQAyB2Ql83flDur/FDOuVv46lzrHzingmg0K5shq6jg44vjKclK81dOoF9jkavadfHacSMJq5/xc/9J707UOy0rfxXJXqq58jJTeEVmZuZ9qD8rpzgOCXhaRzSnPXwg6H3YwIu0r/EUNqNS0XoA61qRKz2bdkZ2pP3AqDDEIxYUNueUbJrKiHLfkuD2AipDZIHFlq6oEf7Pxu/9VU8h3q/w+TYefaI49kwz3HaMG9JjBIfZaO1A7dSM+lY0DcEvWLA8y6PDDigGzI3E1Z/rqUA0vFMd7aQdWWrtEZI8ctAVIOAI+6NhmXl28WY9XYN+qrSWWPCR5kV4JRcZfKB79Dd+1OlohfGNpa3bf97trsYuzDVldBjFj5gf3vKwMRnEMwemL31HH4CjvQ6Uv+h1KNl6+q+tkv+ZlGShEB1rh4IUFj8ncEnKZUDYH/zLMUmEHuu3kHNbzOM8npG8gHR3xJOQvrrGIubnopQ7SP+VPNCSuwRQatZoRuJ2o3/sDBi71hh0Va8RUbdxt38+i/B6v4F/rsiZPCLeobsn4juctHNm5KQ7xXtveg4BFBICm0cBc6SSHKu03MbgFNiy/AXUiba8adh1auVhamkVyVsys5BvU5BTOd+uEjVi4fQDQIBfjq7QrY72olU75LsUxpVkNyOc9ELzH/S/3QvHl0SBCLSFCNVTTOx+n36iVwOru5Pa9v9bUFAvS8otb195YoJrJqoULlr2h88Uv6PkI8EnLRAAAAAAAAAAAAAAAAAAAAAAAA==",Wt=({height:e})=>t.jsx("img",{src:zt,height:e||45,alt:"trash"}),Ut=({children:e,icon:r=t.jsx(Wt,{height:150}),note:o="Esta acci\xF3n no se puede revertir.",btnLeft:a={onClick:()=>{},text:"Cancelar"},btnRight:i={onClick:()=>{},text:"Eliminar"}})=>t.jsxs(St,{children:[r,t.jsx(It,{children:e}),t.jsx(Nt,{children:o}),t.jsxs(yt,{children:[t.jsx(S,{design:"flat",fullWidth:!0,onClick:()=>a.onClick(),children:a.text}),t.jsx(Lt,{}),t.jsx(S,{design:"flat",fullWidth:!0,onClick:()=>i.onClick(),color:"ALERT/900",children:i.text})]})]}),Pt=f.default.div`
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
`,Dt=f.default.div`
  border-radius: 15px 15px 0 0;
  background: #f3f5ff;
  padding: 20px;
  @media screen and (min-width: 1024px) {
    padding: 50px 58px;
  }
`,jt=f.default.p`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 21px;
  color: #808080;
  margin: 5px 0 0;
`,Mt=f.default.div`
  padding: 20px;
  @media screen and (min-width: 1024px) {
    display: flex;
    gap: 10px;
    flex-direction: row;
    justify-content: space-around;
    padding: 27px 29px;
  }
`,Ht=f.default.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.6875rem;
  letter-spacing: -0.04em;
  color: #151e5a;
`,Yt=f.default.div`
  margin: 0 15px 15px;
  background: #fff;
  border-radius: 15px;
  @media screen and (min-width: 1024px) {
    margin: 0;
  }
`;function Ot(e="(min-width: 768px)"){const[r,o]=b.useState({matches:window.innerWidth>(()=>{const i=e.match(/(\d+)/);return i?i[0]:768})()});return b.useEffect(()=>{let i=window.matchMedia(e);return i.addEventListener("change",o),()=>i.removeEventListener("change",o)},[]),{status:Boolean(r&&r.matches)}}const Vt=({children:e,note:r="Esta acci\xF3n no se puede revertir.",btnLeft:o={onClick:()=>{},text:"Cancelar"},btnRight:a={onClick:()=>{},text:"Eliminar"}})=>{const{status:i}=Ot("(min-width: 1023px)");return t.jsxs(Pt,{children:[t.jsxs(Yt,{children:[t.jsxs(Dt,{children:[t.jsx(Ht,{children:e}),t.jsx(jt,{children:r})]}),t.jsxs(Mt,{children:[i&&t.jsx(S,{design:"flat",fullWidth:!0,onClick:()=>o.onClick(),color:"PRIMARY/900 ",style:{borderRadius:"32px",padding:"20px 0"},children:o.text}),t.jsx(S,{design:"solid",fullWidth:!0,onClick:()=>a.onClick(),style:{borderRadius:"32px",padding:"20px 60px"},children:a.text})]})]}),!i&&t.jsx(S,{design:"flat",fullWidth:!0,onClick:()=>o.onClick(),color:"PRIMARY/900",style:{margin:"0 15px 15px",width:"calc(100% - 30px)",padding:"20px",borderRadius:"15px"},children:o.text})]})},Xt=f.default.span`
  padding: 4px 10px;
  border-radius: 8px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 0.75rem;
  line-height: 1.125rem;
  letter-spacing: -0.04em;
  background: ${c.color.STATUS.DEFAULT[0]};
  color: ${c.color.STATUS.DEFAULT[1]};

  ${({statusName:e})=>{if(e==="draft")return d.css`
        background: ${c.color.STATUS.DRAFT[0]};
        color: ${c.color.STATUS.DRAFT[1]};
      `;if(e==="pending")return d.css`
        background: ${c.color.STATUS.PENDING[0]};
        color: ${c.color.STATUS.PENDING[1]};
      `;if(e==="rejected")return d.css`
        background: ${c.color.STATUS.REJECTED[0]};
        color: ${c.color.STATUS.REJECTED[1]};
      `;if(e==="accepted")return d.css`
        background: ${c.color.STATUS.ACCEPTED[0]};
        color: ${c.color.STATUS.ACCEPTED[1]};
      `;if(e==="canceled")return d.css`
        background: ${c.color.STATUS.CANCELED[0]};
        color: ${c.color.STATUS.CANCELED[1]};
      `;if(e==="preparing")return d.css`
        background: ${c.color.STATUS.PREPARING[0]};
        color: ${c.color.STATUS.PREPARING[1]};
      `;if(e==="readyforpickup")return d.css`
        background: ${c.color.STATUS.READYFORPICKUP[0]};
        color: ${c.color.STATUS.READYFORPICKUP[1]};
      `;if(e==="delivered")return d.css`
        background: ${c.color.STATUS.DELIVERED[0]};
        color: ${c.color.STATUS.DELIVERED[1]};
      `}};
`,ne={default:"...",draft:"Borrador",pending:"Pendiente",rejected:"Rechazado",accepted:"Aceptado",canceled:"Anulado",preparing:"Preparando",readyforpickup:"Listo para recojo",delivered:"Entregado"},Zt=({statusName:e})=>{const r=o=>ne[o]||ne.default;return t.jsx(Xt,{statusName:e,children:r(e)})};g.Button=S,g.Card=$e,g.CardModal=re,g.CodeInput=Le,g.Collapsible=it,g.ConfirmationCard=Ut,g.ConfirmationCardV2=Vt,g.CustomSelect=Q,g.DropdownMenu=pt,g.Heading=Ee,g.Loader=Qe,g.MultipleOptionsModal=Et,g.OrderStatusBadge=Zt,g.ProfileImage=Ge,g.SelectField=We,g.StickyHeader=dt,g.Text=w,g.TextField=q,Object.defineProperties(g,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
