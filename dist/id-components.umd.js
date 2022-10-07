(function(p,d){typeof exports=="object"&&typeof module<"u"?d(exports,require("styled-components"),require("react/jsx-runtime"),require("react"),require("react-loading-skeleton"),require("react-select"),require("@radix-ui/react-collapsible"),require("@floating-ui/react-dom")):typeof define=="function"&&define.amd?define(["exports","styled-components","react/jsx-runtime","react","react-loading-skeleton","react-select","@radix-ui/react-collapsible","@floating-ui/react-dom"],d):(p=typeof globalThis<"u"?globalThis:p||self,d(p["ID-Components"]={},p.styled,p["react/jsx-runtime"].js,p.React,p.Skeleton,p.Select,p["@radix-ui/react-collapsible"],p["@floating-ui/react-dom"]))})(this,function(p,d,t,b,ae,de,ce,Y){"use strict";const S=e=>e&&typeof e=="object"&&"default"in e?e:{default:e};function le(e){if(e&&e.__esModule)return e;const r=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const o in e)if(o!=="default"){const n=Object.getOwnPropertyDescriptor(e,o);Object.defineProperty(r,o,n.get?n:{enumerable:!0,get:()=>e[o]})}}return r.default=e,Object.freeze(r)}const g=S(d),se=S(ae),fe=S(de),z=le(ce),he={bold:700,medium:500,regular:400,light:300},W={xs:"0.750rem",sm:"0.875rem	",md:"1.0rem",lg:"1.250rem",xl:"1.5rem","2xl":"1.875rem","3xl":"2.0rem","4xl":"2.5rem","5xl":"3.0rem"},O={h1:"xl",h2:"lg",h3:"md",h4:"sm",h5:"xs",h6:"xs",text:"sm"},l={color:{NEUTRAL:{0:"#FFFFFF",20:"#FFFFFF",50:"#F5F5F5",100:"#EBEBEB",200:"#dfdfdf",300:"#bfbfbf",400:"#9f9f9f",500:"#808080",600:"#404040",700:"#383838",800:"#202020",900:"#000000"},PRIMARY:{0:"#FFFFFF",50:"#F1F2F9",100:"#E6E8F4",200:"#DDDFF0",300:"#BBBFE2",400:"#999FD3",500:"#777fc5",600:"#545fb6",700:"#414a98",800:"#333a76",900:"#242954"},SECONDARY:{0:"#FFFFFF",20:"#F7F5FF",50:"#EFEBFF",100:"#E6E0FF",200:"#d0c5ff",300:"#d0c5ff",400:"#b9a8ff",500:"#a18cff",600:"#8a6fff",700:"#7252ff",800:"#5b35ff",900:"#4318FF"},TERTIARY:{0:"#FFFFFF",50:"#FFFAFC",100:"#FFF5F9",200:"#ffeff5",300:"#ffe0eb",400:"#ffd0e1",500:"#ffc1d7",600:"#ffb1cd",700:"#FFA1C3",800:"#ff92b9",900:"#FF82AF"},QUATERNARY:{0:"#FFFFFF",50:"#FBFCFE",100:"#F2F6FD",200:"#ebf1fc",300:"#D8E4FA",400:"#c4d6f8",500:"#b0c8f5",600:"#9cbbf3",700:"#88adf0",800:"#75a0ed",900:"#6192EB"},STATE:{0:"#FFFFFF",50:"#FFFBF5",100:"#FEF7EB",200:"#fef3e3",300:"#fde7c6",400:"#fcdba9",500:"#fbcf8d",600:"#fac270",700:"#f9b654",800:"#f8aa38",900:"#F79E1B"},ALERT:{0:"#FFFFFF",50:"#FFFBF5",100:"#FEEDEC",200:"#fde3e2",300:"#fbc8c5",400:"#f9ada8",500:"#f7918b",600:"#f4756d",700:"#F25A50",800:"#F03E33",900:"#EE2316"},SUCCESS:{0:"#FFFFFF",50:"#F7FDFA",100:"#EEFBF4",200:"#e4f9ed",300:"#c9f3db",400:"#aeedc9",500:"#93e7b7",600:"#78e1a4",700:"#5DDB92",800:"#42D580",900:"#2DC96F"},OTHER:{color1:"#151E5A"}},effect:{darkShadow:{4:"0px 0px 4px 1px rgba(139, 139, 139, 0.32)",6:"0px 1px 6px rgba(60, 60, 60, 0.2)",8:"0px 1px 6px rgba(107, 107, 107, 0.2)",12:"0px 0px 12px 2px #F6F6F6",24:"0px 0px 24px 4px rgba(0, 14, 51, 0.2)",30:"0px 10px 30px rgba(0, 0, 0, 0.08)"},lightShadow:{2:"0px 0px 2px 1px rgba(149, 178, 254, 0.2)",16:"0px 4px 16px rgba(153, 181, 255, 0.2)"}}},ue=({shape:e})=>{switch(e){case"rounded":return d.css`
        border-radius: 0.625rem;
      `;case"squared":return d.css`
        border-radius: 0;
      `;case"circular":return d.css`
        border-radius: 10rem;
      `;default:return d.css`
        border-radius: 0.625rem;
      `}},P=({design:e,color:r})=>{switch(e){case"solid":return d.css`
        background-color: ${()=>k({color:r})};
        color: #fff;
      `;case"outline":return d.css`
        background-color: white;
        border: 1px solid ${()=>k({color:r})};
        color: ${()=>k({color:r})};
      `;case"flat":return d.css`
        background-color: white;
        border: none;
        color: ${()=>k({color:r})};
      `;case"link":return d.css`
        background-color: transparent;
        border: none;
        color: ${()=>k({color:r})};

        &:hover {
          color: ${()=>k({color:r,hover:!0})};
          text-decoration: underline;
        }
      `;default:return d.css`
        background-color: ${()=>k({color:r})};
        color: #fff;
      `}},k=({color:e="SECONDARY/900",design:r,hover:o})=>{const n=e.split("/"),a=n[0];let i=+n[1];if(o&&i>=300)switch(r){case"solid":i-=100;break;case"outline":i=100;break;case"flat":i=100;break;default:i>=400?i-=100:i+=100;break}if(o&&i<300)switch(r){case"solid":i+=100;break;case"outline":i=100;break;case"flat":i=100;break;default:i-=100;break}return a==="PRIMARY"||a==="NEUTRAL"||a==="SECONDARY"||a==="TERTIARY"||a==="QUATERNARY"||a==="STATE"||a==="ALERT"||a==="SUCCESS"?i===50||i===100||i===200||i===300||i===400||i===500||i===600||i===700||i===800||i===900?l.color[a][i]:l.color[a][900]:l.color.PRIMARY[900]},j=({fullWidth:e})=>e?d.css`
      width: 100%;
    `:d.css`
    width: auto;
  `,ge=({isLoading:e})=>e?d.css`
      cursor: not-allowed;
      opacity: 0.5;
    `:d.css`
    cursor: pointer;
    opacity: 1;
  `,pe=({disabled:e})=>e?d.css`
      cursor: not-allowed;
      opacity: 0.5;
    `:d.css`
    cursor: pointer;
    opacity: 1;
  `,N=({size:e="sm"})=>d.css`
    font-size: ${W[e]||e};
  `,be=({align:e})=>e?d.css`
      text-align: ${e};
    `:d.css`
    text-align: left;
  `,Z=e=>{let r="";return e.m&&(r+=`
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
  `},xe=g.default.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
`,me=g.default(xe)`
  display: inline-flex;
  gap: 0.5rem;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease-out;
  padding: ${({design:e})=>e==="link"?"0":"0.7rem"};
  min-height: ${({design:e})=>e==="link"?"0":"45px"};

  ${({size:e})=>N({size:e})};
  ${({shape:e})=>ue({shape:e})};
  ${({design:e,color:r})=>P({design:e,color:r})};
  ${({fullWidth:e})=>j({fullWidth:e})};
  ${({isLoading:e})=>ge({isLoading:e})};
  ${({disabled:e})=>pe({disabled:e})};
  ${({m:e,mb:r,mt:o,mr:n,ml:a,my:i,mx:c,p:h,pb:u,pt:f,pr:s,pl:x,py:w,px:v})=>Z({m:e,mb:r,mt:o,mr:n,ml:a,my:i,mx:c,p:h,pb:u,pt:f,pr:s,pl:x,py:w,px:v})};

  &:hover {
    background-color: ${({color:e,design:r})=>r==="link"?"transparent":k({color:e,design:r,hover:!0})};
  }

  &:active {
    background-color: ${({color:e,design:r})=>r==="link"?"transparent":k({color:e,design:r,hover:!0})};
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
`,_=({children:e,...r})=>t.jsxs(me,{...r,children:[r.leftIcon,e,r.rightIcon]});function ve(e,r,o){const n=()=>{const a=document.querySelectorAll("input");return Array.from(a).filter(c=>c.className===r)};b.useEffect(()=>{const a=i=>{i.key==="Backspace"&&setTimeout(()=>{const c=n(),h=document.activeElement;h.value="";const u=c.indexOf(h);u>0&&c[u-1].focus()},0)};return document.addEventListener("keydown",a),()=>document.removeEventListener("keydown",a)},[]),b.useEffect(()=>{const a=i=>{if(i.key!=="Backspace"){const c=i.key.toLowerCase();setTimeout(()=>{if(c.length===1){const h=n(),u=document.activeElement;u.value=c;const f=h.indexOf(u);f<h.length-1&&h[f+1].focus()}},0)}};return document.addEventListener("keydown",a),()=>document.removeEventListener("keydown",a)},[]),b.useEffect(()=>{if(e){const a=i=>{const c=i.key.toLowerCase();(c.length===1||c==="backspace")&&setTimeout(()=>{const u=n().map(f=>f.value).join("");e(u)},0)};return document.addEventListener("keydown",a),()=>document.removeEventListener("keydown",a)}},[]),b.useEffect(()=>{if(o){const a=n(),i=a.map(u=>u.value),c=o.split(""),h=c.length===i.length?c:i;a.forEach((u,f)=>{const s=h[f];s&&(u.value=s)})}},[o])}const $e=d.keyframes`
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
`,U=g.default.div`
  opacity: 0;
  ${({shouldAppear:e})=>e&&d.css`
      animation: ${$e} 0.2s ease-in;
      animation-fill-mode: forwards;
    `}
`,we={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",p:"p",li:"li",span:"span",strong:"strong",label:"label"},ke=d.css`
  display: inline-block;
  font-family: "Poppins";
  font-style: normal;
  line-height: 24px;
  letter-spacing: -0.04rem;
  ${({align:e})=>be({align:e})}
  ${({m:e,mb:r,mt:o,mr:n,ml:a,my:i,mx:c,p:h,pb:u,pt:f,pr:s,pl:x,py:w,px:v})=>Z({m:e,mb:r,mt:o,mr:n,ml:a,my:i,mx:c,p:h,pb:u,pt:f,pr:s,pl:x,py:w,px:v})};
`,Fe=e=>{const r=e==="h1"||e==="h2"||e==="h3"||e==="h4"||e==="h5"||e==="h6",o=r?"bold":"medium",n=r?O[e]:O.text,a="PRIMARY/900";return d.css`
    font-weight: ${({weight:i=o})=>he[i]||"500"};
    font-size: ${({size:i=n})=>W[i]||i};
    color: ${({color:i=a})=>{const c=i==null?void 0:i.split("/")[0],h=Number(i==null?void 0:i.split("/")[1]);return l.color[c][h]}};
  `},Ce=g.default.div`
  ${ke}
  ${({as:e})=>Fe(e)}
`,C=({as:e,...r})=>{const o=we[e];return t.jsx(Ce,{as:o,...r})},Ae={H1:e=>t.jsx(C,{as:"h1",...e}),H2:e=>t.jsx(C,{as:"h2",...e}),H3:e=>t.jsx(C,{as:"h3",...e}),H4:e=>t.jsx(C,{as:"h4",...e}),H5:e=>t.jsx(C,{as:"h5",...e}),H6:e=>t.jsx(C,{as:"h6",...e})},Ee=g.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
  transition: 0.3s ease-out;
`,$=e=>e.rightIcon||e.leftIcon?t.jsxs(Ee,{children:[e.leftIcon,t.jsx(C,{as:e.as||"p",...e}),e.rightIcon]}):t.jsx(C,{as:e.as||"p",...e}),Le=g.default.div`
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
      ${({errorMessage:e,success:r})=>e?l.color.ALERT[900]:r?l.color.SUCCESS[900]:l.color.NEUTRAL[300]};
    border-radius: 8px;
    background: #fff;
    font: normal 16px "Poppins";
    letter-spacing: -0.04em;
    color: ${()=>l.color.NEUTRAL[700]};

    transition: background 0.3s ease-out;
    transition: border 0.3s ease-out;

    &:disabled {
      cursor: not-allowed;
      background-color: ${()=>l.color.NEUTRAL[100]};
      color: ${()=>l.color.NEUTRAL[500]};
    }

    &:focus {
      border-color: ${()=>l.color.QUATERNARY[900]};
    }
  }
`,ye=g.default.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`,Ie=({id:e,value:r,length:o=4,errorMessage:n,success:a,onChange:i=()=>{},...c})=>(ve(i,e,r),t.jsxs(ye,{children:[t.jsx(Le,{length:o,success:a,errorMessage:n,children:Array.from({length:o}).map((h,u)=>t.jsx("input",{id:u.toString(),className:e,maxLength:1,...c},u))}),n&&t.jsx(U,{shouldAppear:Boolean(n),children:t.jsx($,{size:"xs",weight:"light",color:"ALERT/900",children:n})})]})),Te=g.default.div`
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
    color: ${()=>l.color.ALERT[900]};
    margin-left: 2px;
    margin-top: 3px;
  }

  & > span {
    width: 100%;
  }
`,Se={control:(e,r)=>({...e,minHeight:"45px",borderRadius:10,backgroundColor:"#ffffff",border:`1px solid ${r.isFocused?l.color.QUATERNARY[900]:l.color.NEUTRAL[300]}`,boxShadow:"none",cursor:"pointer"}),singleValue:()=>({color:l.color.PRIMARY[900],fontWeight:500,fontSize:"14px"}),placeholder:e=>({...e,color:l.color.NEUTRAL[700]}),indicatorSeparator:e=>({...e,display:"none",padding:0}),indicatorsContainer:e=>({...e,"> div":{padding:"0",paddingRight:"3px"}}),valueContainer:e=>({...e,padding:0,paddingLeft:"6px"})},ze=({formatOptionLabel:e,options:r,loading:o=!1,style:n,error:a,firstOption:i,initialValue:c,value:h,onChange:u,isMulti:f,placeholder:s,label:x})=>{const w=i||{label:"Seleccione una opci\xF3n",value:""},v=[...r];return t.jsxs(Te,{style:n,hasError:!!a,children:[x&&t.jsx($,{as:"label",align:"left",size:"sm",color:"NEUTRAL/700",children:x}),o?t.jsx(se.default,{style:{borderRadius:10},className:"loading-skeleton",height:46,width:"100%"}):t.jsx(fe.default,{placeholder:s,value:h||void 0,defaultValue:c||w,options:v,onChange:u,styles:Se,isMulti:f,formatOptionLabel:e})]})},Ne=g.default.div`
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
    background: ${()=>l.color.NEUTRAL[50]};
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
            background: ${o=>o.color||l.color.PRIMARY[900]};
            width: ${o=>o.size*2}px;
            height: ${o=>o.size*2}px;
            border-radius: ${o=>o.borderRadius||"50%"};
            transition: 0.3s background;
          }
          &:hover ::before {
            width: ${o=>o.size*2}px;
            height: ${o=>o.size*2}px;
            background: ${o=>o.color||l.color.PRIMARY[900]};
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
            background: ${()=>l.color.NEUTRAL[50]};
          }
        `}
    `}
`,Ue=g.default.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${e=>e.size}px;
  height: ${e=>e.size}px;
  fill: ${e=>e.color||l.color.PRIMARY[900]};
  ${e=>e.variant==="V1"&&d.css`
      ${r=>r.active&&d.css`
          fill: #fff;
        `}
    `}
  ${e=>e.variant==="V2"&&d.css`
      fill: ${()=>l.color.NEUTRAL[400]};
      ${r=>r.active&&d.css`
          fill: ${o=>o.color||l.color.PRIMARY[900]};
        `}
    `}
`,V=e=>{const{children:r,color:o,size:n,viewBox:a,active:i,borderRadius:c,variant:h}=e;return t.jsx(Ne,{active:i,size:n||24,borderRadius:c||"50%",variant:h||"V1",color:o,children:t.jsx(Ue,{active:i,color:o,size:n||24,viewBox:a||"0 0 32 32",variant:h||"V1",children:r})})},De=e=>{const{color:r,size:o}=e;return t.jsx(V,{color:r,size:o,viewBox:"0 0 22 13",fill:"none",children:t.jsx("path",{d:"M19 1.406s-.32.772-1 1.752m-7 4.031a7.587 7.587 0 0 1-4.051-1.157M11 7.19a7.587 7.587 0 0 0 4.051-1.157M11 7.19v4.048m-8-9.83s.354.851 1.106 1.901M6.95 6.033 4 9.502m2.949-3.47c-1.26-.778-2.198-1.824-2.843-2.724m10.945 2.724 2.449 3.47m-2.449-3.47C16.381 5.21 17.354 4.09 18 3.158m-13.894.15L1 4.877m17-1.718 3 1.718",stroke:"#242954",strokeWidth:2,strokeLinecap:"round"})})},Be=e=>{const{color:r,size:o}=e;return t.jsx(V,{color:r,size:o,viewBox:"0 0 22 19",fill:"none",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 2.75c-3.089 0-6.002 1.167-8.524 3.239a.75.75 0 1 1-.952-1.16C4.274 2.57 7.515 1.25 11 1.25c3.485 0 6.726 1.32 9.476 3.58a.75.75 0 1 1-.952 1.159C17.002 3.917 14.089 2.75 11 2.75Zm-8.249 8.454v.002c.006.02.025.103.1.259.09.187.234.424.434.697.4.546.99 1.19 1.73 1.804 1.488 1.238 3.487 2.284 5.639 2.284 2.163 0 4.343-1.055 6.016-2.308.829-.62 1.506-1.27 1.968-1.819.231-.276.398-.514.503-.7a1.31 1.31 0 0 0 .102-.219 1.315 1.315 0 0 0-.102-.218 4.803 4.803 0 0 0-.503-.7c-.462-.55-1.14-1.198-1.968-1.82a13.63 13.63 0 0 0-1.87-1.179c.264.57.412 1.203.412 1.872 0 2.496-2.052 4.5-4.558 4.5s-4.558-2.004-4.558-4.5c0-.615.125-1.2.35-1.734-.515.309-.995.655-1.432 1.018a10.49 10.49 0 0 0-1.729 1.804c-.2.273-.343.51-.434.697-.075.156-.094.238-.1.26 0 0 0 0 0 0Zm7.903-6.545c-2.627 0-4.955 1.264-6.599 2.63a11.982 11.982 0 0 0-1.98 2.072 6.141 6.141 0 0 0-.575.931c-.13.27-.25.594-.25.912 0 .319.12.643.25.913.14.29.337.606.575.931a11.98 11.98 0 0 0 1.98 2.071c1.644 1.367 3.972 2.631 6.599 2.631 2.616 0 5.11-1.255 6.915-2.607.91-.682 1.673-1.408 2.217-2.055.271-.323.498-.638.662-.93.15-.265.302-.606.302-.954 0-.347-.153-.688-.302-.953a6.264 6.264 0 0 0-.662-.93c-.544-.647-1.307-1.373-2.217-2.055-1.806-1.352-4.299-2.607-6.915-2.607Zm0 1.5c-1.7 0-3.058 1.354-3.058 3s1.358 3 3.058 3c1.7 0 3.058-1.354 3.058-3s-1.359-3-3.058-3Z",fill:"#242954",stroke:"#242954",strokeLinecap:"round"})})},Me=e=>t.jsx("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:0,color:e.color||"#EE2316",height:24,width:24,viewBox:"0 0 24 24",...e,children:t.jsxs("g",{stroke:"none",children:[t.jsx("path",{fill:"none",d:"M0 0h24v24H0z"}),t.jsx("path",{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z"})]})}),He=e=>t.jsx("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:0,color:e.color||"#2DC96F",height:20,width:20,viewBox:"0 0 1024 1024",...e,children:t.jsx("path",{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z",stroke:"none"})}),Ye=g.default.div`
  ${({fullWidth:e})=>j({fullWidth:e})};
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 8px;
  border: 1px solid
    ${({error:e,success:r,isFocused:o})=>e?l.color.ALERT[900]:r&&o?l.color.SUCCESS[900]:o?l.color.QUATERNARY[900]:l.color.NEUTRAL[300]};
  background: #fff;
  min-height: 45px;
  ::placeholder {
    color: ${()=>l.color.NEUTRAL[500]};
  }

  background-color: ${({disabled:e})=>e?l.color.NEUTRAL[100]:"#fff"};
  cursor: ${({disabled:e})=>e?"not-allowed":"auto"};
  transition: background 0.3s ease-out;
  transition: border 0.3s ease-out;

  > input {
    border-radius: 8px;
    width: 100%;
    ${({size:e})=>N({size:e})};
    flex-grow: 1;
    border: none;
    outline: none;
    padding: 10px 0px;
    background-color: #fff;
    letter-spacing: -0.04em;
    color: ${()=>l.color.NEUTRAL[700]};
    padding-left: ${({leftAddon:e})=>e?"0px":"12px"};
    padding-right: ${({rightAddon:e})=>e?"0px":"12px"};
    padding-right: ${({success:e,error:r})=>(e||r)&&"2.5rem"};

    &:disabled {
      cursor: not-allowed;
      background-color: ${()=>l.color.NEUTRAL[100]};
      color: ${()=>l.color.NEUTRAL[500]};
    }
  }

  .leftAddon {
    padding-left: 12px;
  }

  .rightAddon {
    padding-right: 12px;
  }

  span {
    color: ${()=>l.color.NEUTRAL[500]};
    ${({size:e})=>N({size:e})};
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
`,D=b.forwardRef(({type:e,leftAddon:r,rightAddon:o,placeholder:n,error:a,success:i,size:c,fullWidth:h,name:u,infoMessage:f,onFocus:s,onBlur:x,onChange:w,...v},L)=>{const[A,E]=b.useState(!1),y=!a&&!i&&f&&A;return t.jsxs(t.Fragment,{children:[t.jsxs(Ye,{fullWidth:h,success:i,size:c,error:a,disabled:v.disabled,leftAddon:r,rightAddon:o,isFocused:A,children:[r&&t.jsx("span",{className:"leftAddon",children:r}),t.jsx("input",{ref:L,onFocus:I=>{s&&s(I),E(!0)},onBlur:I=>{x&&x(I),E(!1)},onChange:w,placeholder:n,type:e,name:u,...v}),o&&t.jsx("span",{className:"rightAddon",children:o}),a&&t.jsx("span",{className:"state",children:t.jsx(Me,{size:24,color:l.color.ALERT[900]})}),i&&t.jsx("span",{className:"state",children:t.jsx(He,{size:20,color:l.color.SUCCESS[900]})})]}),y&&t.jsx(U,{shouldAppear:y,children:t.jsx($,{size:"xs",color:"QUATERNARY/900",children:f})})]})});D.displayName="TextInput";const We=g.default.div`
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
`,q=b.forwardRef(({label:e,type:r,error:o,isDirty:n,success:a,infoMessage:i,fullWidth:c,...h},u)=>{const f={...h,ref:u},[s,x]=b.useState(!1);return t.jsxs(We,{fullWidth:c,children:[e&&t.jsxs("div",{className:"label-container",children:[t.jsx($,{as:"label",align:"left",size:"sm",color:"NEUTRAL/700",children:e}),r==="password"&&t.jsx("span",{onClick:()=>x(!s),children:s?t.jsx(Be,{size:20}):t.jsx(De,{size:20})})]}),t.jsx(D,{error:Boolean(o),success:a||!o&&n,infoMessage:i,fullWidth:c,type:s?"text":r,...f}),o&&t.jsx(U,{shouldAppear:Boolean(o),children:t.jsx($,{size:"xs",color:"ALERT/900",children:o})})]})});q.displayName="TextField";const Q=(e,r)=>{b.useEffect(()=>{const o=n=>{if(Array.isArray(e)){for(const a of e)if(!n.target||!a.current||a.current.contains(n.target))return}else if(!n.target||!e.current||e.current.contains(n.target))return;r(n)};return document.addEventListener("mousedown",o),document.addEventListener("touchstart",o),()=>{document.removeEventListener("mousedown",o),document.removeEventListener("touchstart",o)}},[e,r])},K=e=>t.jsx("svg",{height:e.size||16,width:e.size||16,fill:"none",viewBox:"0 0 16 16",...e,children:t.jsx("path",{d:"M12 5.333v2.534l-4 3.067-4-3.067V5.333L8 8.4l4-3.067Z",fill:"#6B6B6B"})}),Oe=e=>t.jsx("svg",{height:13,width:14,fill:"none",viewBox:"0 0 14 13",...e,children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.821 1.606a4.715 4.715 0 1 0 0 9.43 4.715 4.715 0 0 0 0-9.43ZM.125 6.32A5.696 5.696 0 1 1 10.178 9.99l2.553 2.547a.49.49 0 0 1-.693.695l-2.553-2.55A5.696 5.696 0 0 1 .125 6.32Z",fill:"#242954"})}),Pe=g.default.div`
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
    border: 1px solid ${()=>l.color.NEUTRAL[300]};
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
    background-color: ${()=>l.color.QUATERNARY[200]};
  }

  .options li:hover {
    border-radius: 0.5rem;
    background-color: ${()=>l.color.QUATERNARY[100]};
  }
`,je=g.default.ul`
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
        outline: 2px solid ${()=>l.color.SECONDARY[900]};
      }
    }
  }
`,X=b.forwardRef(({label:e,searchable:r=!0,autoSize:o,value:n,options:a,placeholder:i="Seleccione una opci\xF3n",fullWidth:c,fullWidthOptions:h,onChange:u,formatOptionLabel:f,formatSelectedOption:s})=>{const x=b.useRef(null),[w,v]=b.useState(a),[L,A]=b.useState(""),[E,y]=b.useState(!1);Q(x,()=>{y(!1)});const I=b.useCallback(()=>{const m=a.filter(F=>F.label.toLowerCase().includes(L.toLowerCase()));v(m)},[a,n]),ie=b.useCallback(m=>{u(a.find(F=>F.label===m)),y(!1),A(""),v(a)},[I]),Et=b.useCallback(m=>{A(m.target.value);const F=a.filter(ne=>ne.label.toLowerCase().includes(m.target.value.toLowerCase()));v(F)},[]),Lt=()=>{const m=x.current;if(m){const F=m.getBoundingClientRect();return window.innerHeight-F.bottom-20}};return t.jsxs(Pe,{fullWidth:c,ref:x,children:[e&&t.jsx($,{as:"label",align:"left",size:"sm",color:"NEUTRAL/700",pl:"0.05rem",mb:"0.25rem",children:e}),t.jsxs("div",{className:"select-btn",onClick:()=>y(!E),tabIndex:0,onKeyUpCapture:m=>{m.key==="Enter"&&y(!E)},children:[t.jsx($,{as:"span",color:"NEUTRAL/700",mr:"0.5rem",children:s?s(n):f?f(n):n.label}),t.jsx(K,{size:20})]}),E&&t.jsxs(je,{maxOptionsHeight:o?Lt():285,fullWidthOptions:h,children:[r&&t.jsx("div",{className:"search-box",children:t.jsx(D,{leftAddon:t.jsx(Oe,{}),type:"text",placeholder:i,value:L,onChange:Et,fullWidth:!0})}),t.jsx("div",{className:"options",children:w.map(m=>t.jsx($,{as:"li",color:"NEUTRAL/700",className:m.value===n.value?"selected":"",tabIndex:0,onClick:()=>ie(m.label),onKeyUpCapture:F=>{F.key==="Enter"&&ie(m.label)},children:f?f(m):m.label},`${m.label}-${m.value}`))})]})]})});X.displayName="CustomSelect";const Ze=g.default.div`
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
`,_e=({imageUrl:e,size:r=128,onChange:o})=>{const n=b.useRef(null),a=i=>{var h;const c=(h=i.target.files)==null?void 0:h[0];if(c){const u=URL.createObjectURL(c);o({file:c,url:u})}};return t.jsxs(Ze,{size:r,children:[t.jsx($,{color:"NEUTRAL/400",weight:"regular",size:"xs",children:"Agrega tu foto"}),t.jsxs("div",{className:"profile-input__container",children:[t.jsx("input",{type:"file",accept:"image/png, image/jpeg",onChange:a,ref:n}),t.jsx("img",{width:r,height:r,src:e||"/default-profile.svg",alt:"profile",referrerPolicy:"no-referrer"}),t.jsx(_,{type:"button",size:"lg",design:"flat",shape:"circular",onClick:()=>{var i;return(i=n.current)==null?void 0:i.click()},children:"+"})]})]})},Ve=d.keyframes`
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
`,qe=d.keyframes`
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
`,Qe=g.default.div`
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
    animation: ${Ve} 1s linear infinite;
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
    background-color: ${()=>l.color.PRIMARY[900]};
    animation: ${qe} 1s linear infinite;
  }
  .idbi-loading > div > div:last-child {
    animation-delay: -0.5s;
  }
  .idbi-loading > div > div:last-child > div > div {
    animation-delay: -0.5s;
    background-color: ${()=>l.color.TERTIARY[900]};
  }
`,Ke=()=>t.jsx(Qe,{children:t.jsx("div",{className:"idbi-loading",children:t.jsxs("div",{children:[t.jsx("div",{children:t.jsx("div",{children:t.jsx("div",{})})}),t.jsx("div",{children:t.jsx("div",{children:t.jsx("div",{})})})]})})}),Xe=g.default.section`
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
          background-color: ${l.color.QUATERNARY[300]};
        `;case"flat":return d.css`
          background-color: transparent;
        `;default:return l.color.NEUTRAL[100]}}};
`,Ge=({design:e="primary",header:r,options:o,optionsFormatter:n,content:a,withSeparator:i})=>t.jsxs(Xe,{design:e,withSeparator:i,children:[r&&t.jsx("header",{children:r}),o&&n&&t.jsx("ul",{children:o.map(c=>t.jsx("li",{children:n(c)},c.value))}),a&&a]}),Je=e=>t.jsx("svg",{width:e.size||24,height:e.size||25,fill:"none",viewBox:"0 0 24 25",...e,children:e.ischecked?t.jsxs(t.Fragment,{children:[t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M22.53 3.97a.75.75 0 0 1 0 1.06l-10 10a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06L12 13.44l9.47-9.47a.75.75 0 0 1 1.06 0Z",fill:"#4318FF"}),t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5 4.25A1.25 1.25 0 0 0 3.75 5.5v14A1.25 1.25 0 0 0 5 20.75h14a1.25 1.25 0 0 0 1.25-1.25v-7a.75.75 0 0 1 1.5 0v7A2.75 2.75 0 0 1 19 22.25H5a2.75 2.75 0 0 1-2.75-2.75v-14A2.75 2.75 0 0 1 5 2.75h11a.75.75 0 0 1 0 1.5H5Z",fill:"#4318FF"})]}):t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5 4.25c-.69 0-1.25.56-1.25 1.25v14c0 .69.56 1.25 1.25 1.25h14c.69 0 1.25-.56 1.25-1.25v-14c0-.69-.56-1.25-1.25-1.25H5ZM2.25 5.5A2.75 2.75 0 0 1 5 2.75h14a2.75 2.75 0 0 1 2.75 2.75v14A2.75 2.75 0 0 1 19 22.25H5a2.75 2.75 0 0 1-2.75-2.75v-14Z",fill:"#4318FF"})}),Re=g.default(z.Root)`
  width: 100%;
  background-color: #fff;
  box-shadow: ${()=>l.effect.darkShadow[4]};
  border-radius: 0.5rem;
`,et=g.default(z.Trigger)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  cursor: pointer;
  background-color: transparent;
  border: none;
`,tt=d.keyframes`
  from {
    height: 0;
  }
  to {
    height: var(--radix-collapsible-content-height);
  }
`,rt=d.keyframes`
  from {
    height: var(--radix-collapsible-content-height);
  }
  to {
    height: 0;
  }
`,ot=g.default(z.Content)`
  overflow: hidden;
  &[data-state="open"] {
    animation: ${tt} 300ms ease-out;
  }
  &[data-state="closed"] {
    animation: ${rt} 300ms ease-out;
  }
`,it=({open:e,setOpen:r,label:o,content:n})=>t.jsxs(Re,{open:e,onOpenChange:r,children:[t.jsxs(et,{children:[t.jsx($,{children:o}),t.jsx(Je,{ischecked:e||!1})]}),t.jsx(ot,{children:n})]}),T=e=>t.jsx("svg",{width:e.size||8,height:e.size||12,fill:"none",viewBox:"0 0 8 12",onClick:e.onClick,...e,children:t.jsx("path",{d:"m3.069 6.003 4.73-4.49a.634.634 0 0 0 0-.928L7.384.192A.705.705 0 0 0 6.895 0a.705.705 0 0 0-.489.192L.774 5.537a.634.634 0 0 0-.202.465c0 .177.071.342.202.466l5.627 5.34c.13.124.304.192.49.192a.706.706 0 0 0 .488-.192l.415-.393a.634.634 0 0 0 0-.928L3.069 6.003Z",fill:"#151E5A"})}),nt=g.default.header`
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
  box-shadow: ${()=>l.effect.darkShadow[6]};

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
`,at=({onBack:e,backLabel:r,profileImageUrl:o,rightContent:n})=>t.jsxs(nt,{children:[t.jsxs("button",{type:"button",onClick:e,children:[t.jsx(T,{}),t.jsx($,{color:"NEUTRAL/900",children:r})]}),n||t.jsx("img",{width:28,height:28,src:o||"/default-profile.svg",alt:"profile",referrerPolicy:"no-referrer"})]}),dt=d.keyframes`
  100% {
    transform: rotate(360deg);
  }
`,ct=g.default.div`
  display: block;
  margin: ${e=>e.margin||"25% auto"};
  width: ${e=>e.width||"100%"};
  height: ${e=>e.height||"100%"};
  border: ${e=>e.borderWidth||"0.25em"} solid rgba(0, 0, 0, 0.1);
  border-top-color: #03a7e5;
  border-radius: 50%;
  animation: ${dt} 1s infinite linear;
`,B=e=>t.jsx(ct,{width:e.width,height:e.height,borderWidth:e.borderWidth,margin:e.margin}),G=g.default.ul`
  color: ${()=>l.color.OTHER.color1};
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
`,M=g.default.li`
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
        background-color: ${l.color.ALERT[100]};
        color: ${l.color.ALERT[900]};
        &:hover {
          background-color: ${l.color.ALERT[200]};
        }
      `}}
`,lt=g.default.div`
  position: absolute;
  top: 0;
  right: calc(100% + 8px);
`,st=({text:e,options:r})=>{const[o,n]=b.useState(!1),a=b.useRef(null),i=c=>{if(a.current&&clearTimeout(a.current),c){n(!0);return}a.current=setTimeout(()=>{o!==c&&n(c)},50)};return t.jsxs(M,{onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),active:o,onClick:c=>c.stopPropagation(),children:[e," ",t.jsx("div",{style:{transform:"rotateY(180deg)"},children:t.jsx(T,{})}),o&&t.jsx(lt,{children:t.jsx(G,{children:r.map((c,h)=>t.jsxs(M,{alert:c.alert,onClick:u=>c.disabled||c.loading?u.stopPropagation():c.onClick(),disabled:c.disabled||c.loading,loading:c.loading,children:[c.text," ",c.loading?t.jsx("div",{style:{width:"24px"},children:t.jsx(B,{width:"20px",height:"20px"})}):c.icon]},`suboption-${h}`))})})]})},ft=({options:e})=>t.jsx(G,{children:e.map((r,o)=>"options"in r?t.jsx(st,{...r},`option-${o}`):t.jsxs(M,{disabled:r.disabled||r.loading,alert:r.alert,onClick:r.disabled||r.loading?n=>n.stopPropagation():r.onClick,loading:r.loading,children:[r.text," ",r.loading?t.jsx("div",{style:{width:"24px"},children:t.jsx(B,{width:"20px",height:"20px"})}):r.icon]},`option-${o}`))}),ht=g.default.div`
  cursor: pointer;
  text-align: right;
  * {
    margin-left: auto;
    margin-right: 0;
  }
`,ut=({options:e,activator:r})=>{const{x:o,y:n,reference:a,floating:i,strategy:c,update:h,refs:u}=Y.useFloating({placement:"bottom-end"}),[f,s]=b.useState(!1);return b.useEffect(()=>{if(!(!u.reference.current||!u.floating.current))return Y.autoUpdate(u.reference.current,u.floating.current,h)},[f,h]),Q(u.reference,()=>{s(!1)}),t.jsxs("div",{ref:a,children:[t.jsx(ht,{onClick:()=>s(!f),children:r||t.jsx(K,{size:25})}),f&&t.jsx("div",{ref:i,style:{position:c,top:n!=null?n:0,left:o!=null?o:0},onClick:()=>s(!f),children:t.jsx(ft,{options:e})})]})},gt=e=>t.jsx("svg",{width:9,height:9,fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:t.jsx("path",{d:"M8.53 1.53A.75.75 0 0 0 7.47.47l1.06 1.06ZM.47 7.47a.75.75 0 0 0 1.06 1.06L.47 7.47Zm7 1.06a.75.75 0 0 0 1.06-1.06L7.47 8.53ZM1.53.47A.75.75 0 0 0 .47 1.53L1.53.47Zm5.94 0-7 7 1.06 1.06 7-7L7.47.47Zm1.06 7-7-7L.47 1.53l7 7 1.06-1.06Z",fill:"#404040"})}),pt=g.default.div`
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
`,bt=({onClose:e=()=>{},backdropOpacity:r,zIndex:o})=>(b.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow="visible"}),[]),t.jsx(pt,{onClick:n=>{n.stopPropagation(),e()},opacity:r,zIndex:o})),J=d.keyframes`
  from {
    transform: translateY(100px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`,R=d.keyframes`
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
`,xt=g.default.div`
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
        animation: ${J} 0.3s ease-out;
      `;if(e.contentLocation==="top")return d.css`
        transform: translate(0, 0);
        right: unset;
        bottom: unset;
        left: 0;
        top: 0;
        animation: ${R} 0.3s ease-out;
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
          animation: ${J} 0.3s ease-out;
        }
      `;if(e.contentLocationInDesktop==="top")return d.css`
        @media screen and (min-width: 1024px) {
          transform: translate(0, 0);
          top: unset;
          right: unset;
          left: 0;
          top: 0;
          animation: ${R} 0.3s ease-out;
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
`,mt=({children:e,onClose:r,backdropOpacity:o,zIndex:n,contentLocation:a="center",contentLocationInDesktop:i="center"})=>t.jsxs(t.Fragment,{children:[t.jsx(bt,{onClose:r,backdropOpacity:o,zIndex:n||4}),t.jsx(xt,{zIndex:n||4,contentLocation:a,contentLocationInDesktop:i,onClick:c=>c.stopPropagation(),children:e})]}),vt=g.default.div`
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
`,$t=g.default.div`
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
`,re=({children:e,onClose:r,backdropOpacity:o,padding:n,borderRadius:a,borderRadiusInDesktop:i,maxHeight:c,height:h,maxWidth:u,width:f,zIndex:s,overflow:x,contentLocation:w="center",contentLocationInDesktop:v="center",closeIcon:L,closeIconInDesktop:A,background:E="#fff"})=>t.jsx(mt,{onClose:r,backdropOpacity:o,zIndex:s,contentLocation:w,contentLocationInDesktop:v,children:t.jsxs(vt,{padding:n,borderRadius:a,borderRadiusInDesktop:i,maxHeight:c,height:h,maxWidth:u,width:f,background:E,overflow:x,contentLocation:w,contentLocationInDesktop:v,children:[(L||A)&&t.jsx($t,{onClick:r,closeIconInDesktop:A,closeIcon:L,children:t.jsx(gt,{})}),e]})}),wt=g.default.div`
  @media (max-width: 600px) {
    padding-bottom: 15px;
  }
`,kt=g.default.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,Ft=g.default.div`
  padding: 0 20px;
  & > :nth-child(2) {
    margin-top: 5px;
  }

  svg,
  img {
    cursor: pointer;
  }
`,Ct=g.default.ul`
  color: ${()=>l.color.NEUTRAL[700]};
  padding: 0;
  margin: 10px 0;
  list-style-type: none;
  font-size: 14px;
`,H=g.default.li`
  background-color: ${({alert:e})=>e?l.color.ALERT[100]:"white"};
  color: ${({alert:e})=>e?l.color.ALERT[900]:"inherit"};
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
`,oe=t.jsx("div",{style:{display:"inline-block"},children:t.jsx(B,{width:"20px",height:"20px"})}),At=({options:e,onClose:r,contentLocation:o,contentLocationInDesktop:n,defaultDescription:a="",defaultTitle:i="",optionsInCenter:c=!1})=>{const[h,u]=b.useState(null),f=b.useMemo(()=>{if(h===null)return null;const s=e[h];if(s&&"options"in s)return s},[h,e]);return t.jsx(re,{maxWidth:"500px",padding:"20px 0",onClose:r,contentLocation:o||"bottom",contentLocationInDesktop:n||"center",closeIcon:!0,children:t.jsxs(wt,{children:[t.jsxs(Ft,{children:[t.jsxs(kt,{children:[f&&t.jsx(T,{onClick:()=>u(null)}),t.jsx($,{as:"h2",size:"md",children:(f==null?void 0:f.text)||i})]}),a.length>0&&t.jsx($,{color:"NEUTRAL/400",size:"sm",weight:"regular",children:(f==null?void 0:f.description)||a})]}),t.jsxs(Ct,{children:[!f&&e.map((s,x)=>"onClick"in s?t.jsxs(H,{alert:s.alert,disabled:s.disabled||s.loading,onClick:()=>{!s.loading&&!s.disabled&&(s.onClick(),r())},optionsInCenter:c,children:[s.text," ",s.loading?oe:s.icon]},`option-${x}`):t.jsxs(H,{onClick:()=>{u(x)},optionsInCenter:c,children:[s.text," ",t.jsx("div",{style:{transform:"rotateY(180deg)"},children:t.jsx(T,{})})]},`option-${x}`)),f==null?void 0:f.options.map((s,x)=>t.jsxs(H,{alert:s.alert,disabled:s.disabled||s.loading,onClick:()=>{!s.loading&&!s.disabled&&s.onClick()},optionsInCenter:c,children:[s.text," ",s.loading?oe:s.icon]},`suboption-${x}`))]})]})})};p.Button=_,p.Card=Ge,p.CardModal=re,p.CodeInput=Ie,p.Collapsible=it,p.CustomSelect=X,p.DropdownMenu=ut,p.Heading=Ae,p.Loader=Ke,p.MultipleOptionsModal=At,p.ProfileImage=_e,p.SelectField=ze,p.StickyHeader=at,p.Text=$,p.TextField=q,Object.defineProperties(p,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
