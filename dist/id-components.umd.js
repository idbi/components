(function(f,c){typeof exports=="object"&&typeof module<"u"?c(exports,require("styled-components"),require("react/jsx-runtime"),require("react"),require("react-loading-skeleton"),require("react-select"),require("@radix-ui/react-collapsible")):typeof define=="function"&&define.amd?define(["exports","styled-components","react/jsx-runtime","react","react-loading-skeleton","react-select","@radix-ui/react-collapsible"],c):(f=typeof globalThis<"u"?globalThis:f||self,c(f["ID-Components"]={},f.styled,f["react/jsx-runtime"].js,f.React,f.Skeleton,f.Select,f["@radix-ui/react-collapsible"]))})(this,function(f,c,r,b,R,_,V){"use strict";const T=e=>e&&typeof e=="object"&&"default"in e?e:{default:e};function G(e){if(e&&e.__esModule)return e;const t=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const o in e)if(o!=="default"){const a=Object.getOwnPropertyDescriptor(e,o);Object.defineProperty(t,o,a.get?a:{enumerable:!0,get:()=>e[o]})}}return t.default=e,Object.freeze(t)}const u=T(c),J=T(R),q=T(_),C=G(V),K={bold:700,medium:500,regular:400,light:300},L={xs:"0.750rem",sm:"0.875rem	",md:"1.0rem",lg:"1.250rem",xl:"1.5rem","2xl":"1.875rem","3xl":"2.0rem","4xl":"2.5rem","5xl":"3.0rem"},U={h1:"xl",h2:"lg",h3:"md",h4:"sm",h5:"xs",h6:"xs",text:"sm"},w={color:{NEUTRAL:{0:"#FFFFFF",20:"#FFFFFF",50:"#F5F5F5",100:"#EBEBEB",200:"#dfdfdf",300:"#bfbfbf",400:"#9f9f9f",500:"#808080",600:"#404040",700:"#383838",800:"#202020",900:"#000000"},PRIMARY:{0:"#FFFFFF",50:"#F1F2F9",100:"#E6E8F4",200:"#DDDFF0",300:"#BBBFE2",400:"#999FD3",500:"#777fc5",600:"#545fb6",700:"#414a98",800:"#333a76",900:"#242954"},SECONDARY:{0:"#FFFFFF",20:"#F7F5FF",50:"#EFEBFF",100:"#E6E0FF",200:"#d0c5ff",300:"#d0c5ff",400:"#b9a8ff",500:"#a18cff",600:"#8a6fff",700:"#7252ff",800:"#5b35ff",900:"#4318FF"},TERTIARY:{0:"#FFFFFF",50:"#FFFAFC",100:"#FFF5F9",200:"#ffeff5",300:"#ffe0eb",400:"#ffd0e1",500:"#ffc1d7",600:"#ffb1cd",700:"#FFA1C3",800:"#ff92b9",900:"#FF82AF"},QUATERNARY:{0:"#FFFFFF",50:"#FBFCFE",100:"#F2F6FD",200:"#ebf1fc",300:"#D8E4FA",400:"#c4d6f8",500:"#b0c8f5",600:"#9cbbf3",700:"#88adf0",800:"#75a0ed",900:"#6192EB"},STATE:{0:"#FFFFFF",50:"#FFFBF5",100:"#FEF7EB",200:"#fef3e3",300:"#fde7c6",400:"#fcdba9",500:"#fbcf8d",600:"#fac270",700:"#f9b654",800:"#f8aa38",900:"#F79E1B"},ALERT:{0:"#FFFFFF",50:"#FFFBF5",100:"#FEEDEC",200:"#fde3e2",300:"#fbc8c5",400:"#f9ada8",500:"#f7918b",600:"#f4756d",700:"#F25A50",800:"#F03E33",900:"#EE2316"},SUCCESS:{0:"#FFFFFF",50:"#F7FDFA",100:"#EEFBF4",200:"#e4f9ed",300:"#c9f3db",400:"#aeedc9",500:"#93e7b7",600:"#78e1a4",700:"#5DDB92",800:"#42D580",900:"#2DC96F"}},effect:{darkShadow:{4:"0px 0px 4px 1px rgba(139, 139, 139, 0.32)",6:"0px 1px 6px rgba(60, 60, 60, 0.2)",8:"0px 1px 6px rgba(107, 107, 107, 0.2)",12:"0px 0px 12px 2px #F6F6F6",24:"0px 0px 24px 4px rgba(0, 14, 51, 0.2)",30:"0px 10px 30px rgba(0, 0, 0, 0.08)"},lightShadow:{2:"0px 0px 2px 1px rgba(149, 178, 254, 0.2)",16:"0px 4px 16px rgba(153, 181, 255, 0.2)"}}},X=({shape:e})=>{switch(e){case"rounded":return c.css`
        border-radius: 0.625rem;
      `;case"squared":return c.css`
        border-radius: 0;
      `;case"circular":return c.css`
        border-radius: 10rem;
      `;default:return c.css`
        border-radius: 0.625rem;
      `}},j=({design:e,color:t})=>{switch(e){case"solid":return c.css`
        background-color: ${()=>A({color:t})};
        color: #fff;
      `;case"outline":return c.css`
        background-color: white;
        border: 1px solid ${()=>A({color:t})};
        color: ${()=>A({color:t})};
      `;case"flat":return c.css`
        background-color: white;
        border: none;
        color: ${()=>A({color:t})};
      `;case"link":return c.css`
        background-color: transparent;
        border: none;
        color: ${()=>A({color:t})};

        &:hover {
          color: ${()=>A({color:t,hover:!0})};
          text-decoration: underline;
        }
      `;default:return c.css`
        background-color: ${()=>A({color:t})};
        color: #fff;
      `}},A=({color:e="SECONDARY/900",design:t,hover:o})=>{const a=e.split("/"),n=a[0];let i=+a[1];if(o&&i>=300)switch(t){case"solid":i-=100;break;case"outline":i=100;break;case"flat":i=100;break;default:i>=400?i-=100:i+=100;break}if(o&&i<300)switch(t){case"solid":i+=100;break;case"outline":i=100;break;case"flat":i=100;break;default:i-=100;break}return n==="PRIMARY"||n==="NEUTRAL"||n==="SECONDARY"||n==="TERTIARY"||n==="QUATERNARY"||n==="STATE"||n==="ALERT"||n==="SUCCESS"?i===50||i===100||i===200||i===300||i===400||i===500||i===600||i===700||i===800||i===900?w.color[n][i]:w.color[n][900]:w.color.PRIMARY[900]},B=({fullWidth:e})=>e?c.css`
      width: 100%;
    `:c.css`
    width: auto;
  `,ee=({isLoading:e})=>e?c.css`
      cursor: not-allowed;
      opacity: 0.5;
    `:c.css`
    cursor: pointer;
    opacity: 1;
  `,te=({disabled:e})=>e?c.css`
      cursor: not-allowed;
      opacity: 0.5;
    `:c.css`
    cursor: pointer;
    opacity: 1;
  `,S=({size:e="sm"})=>c.css`
    font-size: ${L[e]||e};
  `,re=({align:e})=>{if(e)return c.css`
      text-align: ${e};
    `},O=e=>{let t="";return e.m&&(t+=`
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
    `),c.css`
    ${t}
  `},oe=u.default.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
`,ie=u.default(oe)`
  display: inline-flex;
  gap: 0.5rem;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease-out;
  padding: ${({design:e})=>e==="link"?"0":"0.7rem"};
  min-height: ${({design:e})=>e==="link"?"0":"45px"};

  ${({size:e})=>S({size:e})};
  ${({shape:e})=>X({shape:e})};
  ${({design:e,color:t})=>j({design:e,color:t})};
  ${({fullWidth:e})=>B({fullWidth:e})};
  ${({isLoading:e})=>ee({isLoading:e})};
  ${({disabled:e})=>te({disabled:e})};
  ${({m:e,mb:t,mt:o,mr:a,ml:n,my:i,mx:l,p:s,pb:d,pt:h,pr:g,pl:x,py:$,px:v})=>O({m:e,mb:t,mt:o,mr:a,ml:n,my:i,mx:l,p:s,pb:d,pt:h,pr:g,pl:x,py:$,px:v})};

  &:hover {
    background-color: ${({color:e,design:t})=>t==="link"?"transparent":A({color:e,design:t,hover:!0})};
  }

  &:active {
    background-color: ${({color:e,design:t})=>t==="link"?"transparent":A({color:e,design:t,hover:!0})};
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:disabled:hover {
    ${({design:e,color:t})=>j({design:e,color:t})};
  }
`,Y=({children:e,...t})=>r.jsxs(ie,{...t,children:[t.leftIcon,e,t.rightIcon]});function ne(e,t,o){const a=()=>{const n=document.querySelectorAll("input");return Array.from(n).filter(l=>l.className===t)};b.useEffect(()=>{const n=i=>{i.key==="Backspace"&&setTimeout(()=>{const l=a(),s=document.activeElement;s.value="";const d=l.indexOf(s);d>0&&l[d-1].focus()},0)};return document.addEventListener("keydown",n),()=>document.removeEventListener("keydown",n)},[]),b.useEffect(()=>{const n=i=>{if(i.key!=="Backspace"){const l=i.key.toLowerCase();setTimeout(()=>{if(l.length===1){const s=a(),d=document.activeElement;d.value=l;const h=s.indexOf(d);h<s.length-1&&s[h+1].focus()}},0)}};return document.addEventListener("keydown",n),()=>document.removeEventListener("keydown",n)},[]),b.useEffect(()=>{if(e){const n=i=>{const l=i.key.toLowerCase();(l.length===1||l==="backspace")&&setTimeout(()=>{const d=a().map(h=>h.value).join("");e(d)},0)};return document.addEventListener("keydown",n),()=>document.removeEventListener("keydown",n)}},[]),b.useEffect(()=>{if(o){const n=a();console.log({codeInputs:n.map(d=>d.value)});const i=n.map(d=>d.value),l=o.split(""),s=l.length===i.length?l:i;n.forEach((d,h)=>{const g=s[h];g&&(d.value=g)})}},[o])}const ae=c.keyframes`
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
`,y=u.default.div`
  opacity: 0;
  ${({shouldAppear:e})=>e&&c.css`
      animation: ${ae} 0.2s ease-in;
      animation-fill-mode: forwards;
    `}
`,le=c.css`
  display: inline-block;
  font-family: "Poppins";
  font-style: normal;
  line-height: 24px;
  letter-spacing: -0.04rem;
  ${({align:e})=>re({align:e})}
  ${({m:e,mb:t,mt:o,mr:a,ml:n,my:i,mx:l,p:s,pb:d,pt:h,pr:g,pl:x,py:$,px:v})=>O({m:e,mb:t,mt:o,mr:a,ml:n,my:i,mx:l,p:s,pb:d,pt:h,pr:g,pl:x,py:$,px:v})};
`,ce=e=>{const t=e==="h1"||e==="h2"||e==="h3"||e==="h4"||e==="h5"||e==="h6",o=t?"bold":"medium",a=t?U[e]:U.text,n="PRIMARY/900";return c.css`
    font-weight: ${({weight:i=o})=>K[i]||"500"};
    font-size: ${({size:i=a})=>L[i]||i};
    color: ${({theme:i,color:l=n})=>{const s=l==null?void 0:l.split("/")[0],d=+(l==null?void 0:l.split("/")[1]);return i.color[s][d]}};
  `},se={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",p:"p",li:"li",span:"span",strong:"strong",label:"label"},de=u.default.div`
  ${le}
  ${({as:e})=>ce(e)}
`,N=({as:e,...t})=>{const o=se[e];return r.jsx(de,{as:o,...t})},fe={H1:e=>r.jsx(N,{as:"h1",...e}),H2:e=>r.jsx(N,{as:"h2",...e}),H3:e=>r.jsx(N,{as:"h3",...e}),H4:e=>r.jsx(N,{as:"h4",...e}),H5:e=>r.jsx(N,{as:"h5",...e}),H6:e=>r.jsx(N,{as:"h6",...e})},ue=u.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
  transition: 0.3s ease-out;
`,m=e=>e.rightIcon||e.leftIcon?r.jsxs(ue,{children:[e.leftIcon,r.jsx(N,{as:e.as||"p",...e}),e.rightIcon]}):r.jsx(N,{as:e.as||"p",...e}),ge=u.default.div`
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
`,he=u.default.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`,pe=({id:e,value:t,length:o=4,errorMessage:a,success:n,onChange:i=s=>{},...l})=>(ne(i,e,t),r.jsxs(he,{children:[r.jsx(ge,{length:o,success:n,errorMessage:a,children:Array.from({length:o}).map((s,d)=>r.jsx("input",{id:d.toString(),className:e,maxLength:1,...l},d))}),a&&r.jsx(y,{shouldAppear:Boolean(a),children:r.jsx(m,{size:"xs",weight:"light",color:"ALERT/900",children:a})})]})),be=u.default.div`
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
`,xe={control:(e,t)=>({...e,minHeight:"45px",borderRadius:10,backgroundColor:"#ffffff",border:`1px solid ${t.isFocused?w.color.QUATERNARY[900]:w.color.NEUTRAL[300]}`,boxShadow:"none",cursor:"pointer"}),singleValue:()=>({color:w.color.PRIMARY[900],fontWeight:500,fontSize:"14px"}),placeholder:e=>({...e,color:w.color.NEUTRAL[700]}),indicatorSeparator:e=>({...e,display:"none",padding:0}),indicatorsContainer:e=>({...e,"> div":{padding:"0",paddingRight:"3px"}}),valueContainer:e=>({...e,padding:0,paddingLeft:"6px"})},me=({formatOptionLabel:e,options:t,loading:o=!1,style:a,error:n,firstOption:i,initialValue:l,value:s,onChange:d,isMulti:h,placeholder:g,label:x})=>{const $=i||{label:"Seleccione una opci\xF3n",value:""},v=[...t];return r.jsxs(be,{style:a,hasError:!!n,children:[x&&r.jsx(m,{as:"label",align:"left",size:"sm",color:"NEUTRAL/700",children:x}),o?r.jsx(J.default,{style:{borderRadius:10},className:"loading-skeleton",height:46,width:"100%"}):r.jsx(q.default,{placeholder:g,value:s||void 0,defaultValue:l||$,options:v,onChange:d,styles:xe,isMulti:h,formatOptionLabel:e})]})},ve=u.default.div`
  ${({fullWidth:e})=>B({fullWidth:e})};
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
    ${({size:e})=>S({size:e})};
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
    ${({size:e})=>S({size:e})};
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
`,we=e=>r.jsx("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:0,color:e.color||"#EE2316",height:24,width:24,viewBox:"0 0 24 24",...e,children:r.jsxs("g",{stroke:"none",children:[r.jsx("path",{fill:"none",d:"M0 0h24v24H0z"}),r.jsx("path",{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z"})]})}),Ae=e=>r.jsx("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:0,color:e.color||"#2DC96F",height:20,width:20,viewBox:"0 0 1024 1024",...e,children:r.jsx("path",{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z",stroke:"none"})}),Q=b.forwardRef(({type:e,leftAddon:t,rightAddon:o,placeholder:a,error:n,success:i,size:l,fullWidth:s,name:d,infoMessage:h,onFocus:g,onBlur:x,onChange:$,...v},D)=>{const[M,I]=b.useState(!1),E=!n&&!i&&h&&M;return r.jsxs(r.Fragment,{children:[r.jsxs(ve,{fullWidth:s,success:i,size:l,error:n,disabled:v.disabled,leftAddon:t,rightAddon:o,isFocused:M,children:[t&&r.jsx("span",{className:"leftAddon",children:t}),r.jsx("input",{ref:D,onFocus:F=>{g&&g(F),I(!0)},onBlur:F=>{x&&x(F),I(!1)},onChange:$,placeholder:a,type:e,name:d,...v}),o&&r.jsx("span",{className:"rightAddon",children:o}),n&&r.jsx("span",{className:"state",children:r.jsx(we,{size:24,color:w.color.ALERT[900]})}),i&&r.jsx("span",{className:"state",children:r.jsx(Ae,{size:20,color:w.color.SUCCESS[900]})})]}),E&&r.jsx(y,{shouldAppear:E,children:r.jsx(m,{size:"xs",color:"QUATERNARY/900",children:h})})]})}),ke=u.default.div`
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
`,Ne=u.default.div`
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
      ${t=>t.active&&c.css`
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
      ${t=>t.active&&c.css`
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
`,$e=u.default.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${e=>e.size}px;
  height: ${e=>e.size}px;
  fill: ${e=>e.color||e.theme.color.PRIMARY[900]};
  ${e=>e.variant==="V1"&&c.css`
      ${t=>t.active&&c.css`
          fill: #fff;
        `}
    `}
  ${e=>e.variant==="V2"&&c.css`
      fill: ${t=>t.theme.color.NEUTRAL[400]};
      ${t=>t.active&&c.css`
          fill: ${o=>o.color||o.theme.color.PRIMARY[900]};
        `}
    `}
`,H=e=>{const{children:t,color:o,size:a,viewBox:n,active:i,borderRadius:l,variant:s}=e;return r.jsx(Ne,{active:i,size:a||24,borderRadius:l||"50%",variant:s||"V1",color:o,children:r.jsx($e,{active:i,color:o,size:a||24,viewBox:n||"0 0 32 32",variant:s||"V1",children:t})})},Fe=e=>{const{color:t,size:o}=e;return r.jsx(H,{color:t,size:o,viewBox:"0 0 22 13",fill:"none",children:r.jsx("path",{d:"M19 1.406s-.32.772-1 1.752m-7 4.031a7.587 7.587 0 0 1-4.051-1.157M11 7.19a7.587 7.587 0 0 0 4.051-1.157M11 7.19v4.048m-8-9.83s.354.851 1.106 1.901M6.95 6.033 4 9.502m2.949-3.47c-1.26-.778-2.198-1.824-2.843-2.724m10.945 2.724 2.449 3.47m-2.449-3.47C16.381 5.21 17.354 4.09 18 3.158m-13.894.15L1 4.877m17-1.718 3 1.718",stroke:"#242954",strokeWidth:2,strokeLinecap:"round"})})},Me=e=>{const{color:t,size:o}=e;return r.jsx(H,{color:t,size:o,viewBox:"0 0 22 19",fill:"none",children:r.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 2.75c-3.089 0-6.002 1.167-8.524 3.239a.75.75 0 1 1-.952-1.16C4.274 2.57 7.515 1.25 11 1.25c3.485 0 6.726 1.32 9.476 3.58a.75.75 0 1 1-.952 1.159C17.002 3.917 14.089 2.75 11 2.75Zm-8.249 8.454v.002c.006.02.025.103.1.259.09.187.234.424.434.697.4.546.99 1.19 1.73 1.804 1.488 1.238 3.487 2.284 5.639 2.284 2.163 0 4.343-1.055 6.016-2.308.829-.62 1.506-1.27 1.968-1.819.231-.276.398-.514.503-.7a1.31 1.31 0 0 0 .102-.219 1.315 1.315 0 0 0-.102-.218 4.803 4.803 0 0 0-.503-.7c-.462-.55-1.14-1.198-1.968-1.82a13.63 13.63 0 0 0-1.87-1.179c.264.57.412 1.203.412 1.872 0 2.496-2.052 4.5-4.558 4.5s-4.558-2.004-4.558-4.5c0-.615.125-1.2.35-1.734-.515.309-.995.655-1.432 1.018a10.49 10.49 0 0 0-1.729 1.804c-.2.273-.343.51-.434.697-.075.156-.094.238-.1.26 0 0 0 0 0 0Zm7.903-6.545c-2.627 0-4.955 1.264-6.599 2.63a11.982 11.982 0 0 0-1.98 2.072 6.141 6.141 0 0 0-.575.931c-.13.27-.25.594-.25.912 0 .319.12.643.25.913.14.29.337.606.575.931a11.98 11.98 0 0 0 1.98 2.071c1.644 1.367 3.972 2.631 6.599 2.631 2.616 0 5.11-1.255 6.915-2.607.91-.682 1.673-1.408 2.217-2.055.271-.323.498-.638.662-.93.15-.265.302-.606.302-.954 0-.347-.153-.688-.302-.953a6.264 6.264 0 0 0-.662-.93c-.544-.647-1.307-1.373-2.217-2.055-1.806-1.352-4.299-2.607-6.915-2.607Zm0 1.5c-1.7 0-3.058 1.354-3.058 3s1.358 3 3.058 3c1.7 0 3.058-1.354 3.058-3s-1.359-3-3.058-3Z",fill:"#242954",stroke:"#242954",strokeLinecap:"round"})})},Ie=b.forwardRef(({label:e,type:t,error:o,isDirty:a,success:n,infoMessage:i,fullWidth:l,...s},d)=>{const h={...s,ref:d},[g,x]=b.useState(!1);return r.jsxs(ke,{fullWidth:l,children:[e&&r.jsxs("div",{className:"label-container",children:[r.jsx(m,{as:"label",align:"left",size:"sm",color:"NEUTRAL/700",children:e}),t==="password"&&r.jsx("span",{onClick:()=>x(!g),children:g?r.jsx(Me,{size:20}):r.jsx(Fe,{size:20})})]}),r.jsx(Q,{error:Boolean(o),success:n||!o&&a,infoMessage:i,fullWidth:l,type:g?"text":t,...h}),o&&r.jsx(y,{shouldAppear:Boolean(o),children:r.jsx(m,{size:"xs",color:"ALERT/900",children:o})})]})}),Ee=(e,t)=>{b.useEffect(()=>{const o=a=>{if(Array.isArray(e)){for(const n of e)if(!a.target||!n.current||n.current.contains(a.target))return}else if(!a.target||!e.current||e.current.contains(a.target))return;t(a)};return document.addEventListener("mousedown",o),document.addEventListener("touchstart",o),()=>{document.removeEventListener("mousedown",o),document.removeEventListener("touchstart",o)}},[e,t])},ze=e=>r.jsx("svg",{height:e.size||16,width:e.size||16,fill:"none",viewBox:"0 0 16 16",...e,children:r.jsx("path",{d:"M12 5.333v2.534l-4 3.067-4-3.067V5.333L8 8.4l4-3.067Z",fill:"#6B6B6B"})}),Te=e=>r.jsx("svg",{height:13,width:14,fill:"none",viewBox:"0 0 14 13",...e,children:r.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.821 1.606a4.715 4.715 0 1 0 0 9.43 4.715 4.715 0 0 0 0-9.43ZM.125 6.32A5.696 5.696 0 1 1 10.178 9.99l2.553 2.547a.49.49 0 0 1-.693.695l-2.553-2.55A5.696 5.696 0 0 1 .125 6.32Z",fill:"#242954"})}),Ce=u.default.div`
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
`,Se=u.default.ul`
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
`,ye=b.forwardRef(({label:e,searchable:t=!0,isMobile:o,autoSize:a,value:n,options:i,placeholder:l="Seleccione una opci\xF3n",fullWidth:s,fullWidthOptions:d,onChange:h,formatOptionLabel:g,formatSelectedOption:x},$)=>{const v=b.useRef(null),[D,M]=b.useState(i),[I,E]=b.useState(""),[F,z]=b.useState(!1);Ee(v,()=>{z(!1)});const Ke=b.useCallback(()=>{const p=i.filter(k=>k.label.toLowerCase().includes(I.toLowerCase()));M(p)},[i,n]),W=b.useCallback(p=>{h(i.find(k=>k.label===p)),z(!1),E(""),M(i)},[Ke]),Xe=b.useCallback(p=>{E(p.target.value);const k=i.filter(Z=>Z.label.toLowerCase().includes(p.target.value.toLowerCase()));M(k)},[]),et=()=>{const p=v.current;if(p){const k=p.getBoundingClientRect();return window.innerHeight-k.bottom-20}};return r.jsxs(Ce,{fullWidth:s,ref:v,children:[e&&r.jsx(m,{as:"label",align:"left",size:"sm",color:"NEUTRAL/700",pl:"0.05rem",mb:"0.25rem",children:e}),r.jsxs("div",{className:"select-btn",onClick:()=>z(!F),tabIndex:0,onKeyUpCapture:p=>{p.key==="Enter"&&z(!F)},children:[r.jsx(m,{as:"span",color:"NEUTRAL/700",mr:"0.5rem",children:x?x(n):g?g(n):n.label}),r.jsx(ze,{size:20})]}),F&&r.jsxs(Se,{maxOptionsHeight:a?et():285,fullWidthOptions:d,children:[t&&r.jsx("div",{className:"search-box",children:r.jsx(Q,{leftAddon:r.jsx(Te,{}),type:"text",placeholder:l,value:I,onChange:Xe,fullWidth:!0})}),r.jsx("div",{className:"options",children:D.map(p=>r.jsx(m,{as:"li",color:"NEUTRAL/700",className:p.value===n.value?"selected":"",tabIndex:0,onClick:()=>W(p.label),onKeyUpCapture:k=>{k.key==="Enter"&&W(p.label)},children:g?g(p):p.label},`${p.label}-${p.value}`))})]})]})}),De=u.default.div`
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
`,P="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEwIiBoZWlnaHQ9IjExMCIgdmlld0JveD0iMCAwIDExMCAxMTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNNTUuMDAwMyAxMDguMzMzQzg0LjQ1NTUgMTA4LjMzMyAxMDguMzM0IDg0LjQ1NDUgMTA4LjMzNCA1NC45OTkzQzEwOC4zMzQgMjUuNTQ0MiA4NC40NTU1IDEuNjY2MDIgNTUuMDAwMyAxLjY2NjAyQzI1LjU0NTEgMS42NjYwMiAxLjY2Njk5IDI1LjU0NDIgMS42NjY5OSA1NC45OTkzQzEuNjY2OTkgODQuNDU0NSAyNS41NDUxIDEwOC4zMzMgNTUuMDAwMyAxMDguMzMzWiIgZmlsbD0iI0U2RTBGRiIgc3Ryb2tlPSIjRTZFMEZGIiBzdHJva2Utd2lkdGg9IjIuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+DQo8cGF0aCBkPSJNNTUuNjQwMiA1OS4xNTk5QzU1LjI2NjggNTkuMTA2NiA1NC43ODY4IDU5LjEwNjYgNTQuMzYwMiA1OS4xNTk5QzQ0Ljk3MzUgNTguODM5OSAzNy41MDY4IDUxLjE1OTkgMzcuNTA2OCA0MS43MTk5QzM3LjUwNjggMzIuMDY2NiA0NS4yOTM1IDI0LjIyNjYgNTUuMDAwMiAyNC4yMjY2QzY0LjY1MzUgMjQuMjI2NiA3Mi40OTM1IDMyLjA2NjYgNzIuNDkzNSA0MS43MTk5QzcyLjQ0MDIgNTEuMTU5OSA2NS4wMjY4IDU4LjgzOTkgNTUuNjQwMiA1OS4xNTk5WiIgZmlsbD0iI0QwQzVGRiIgc3Ryb2tlPSIjRDBDNUZGIiBzdHJva2Utd2lkdGg9IjIuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+DQo8cGF0aCBkPSJNOTAuOTQ3IDk0LjM2MDNDODEuNDUzNyAxMDMuMDU0IDY4Ljg2NyAxMDguMzM0IDU1LjAwMDQgMTA4LjMzNEM0MS4xMzM3IDEwOC4zMzQgMjguNTQ3IDEwMy4wNTQgMTkuMDUzNyA5NC4zNjAzQzE5LjU4NyA4OS4zNDcgMjIuNzg3IDg0LjQ0MDMgMjguNDkzNyA4MC42MDAzQzQzLjEwNyA3MC44OTM2IDY3LjAwMDQgNzAuODkzNiA4MS41MDcgODAuNjAwM0M4Ny4yMTM3IDg0LjQ0MDMgOTAuNDEzNyA4OS4zNDcgOTAuOTQ3IDk0LjM2MDNaIiBmaWxsPSIjRDBDNUZGIiBzdHJva2U9IiNEMEM1RkYiIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4NCjwvc3ZnPg0K",Le=({imageUrl:e,size:t=128,onChange:o})=>{const a=b.useRef(null),n=i=>{var s;const l=(s=i.target.files)==null?void 0:s[0];if(l){const d=URL.createObjectURL(l);o({file:l,url:d})}};return r.jsxs(De,{size:t,children:[r.jsx(m,{color:"NEUTRAL/400",weight:"regular",size:"xs",children:"Agrega tu foto"}),r.jsxs("div",{className:"profile-input__container",children:[r.jsx("input",{type:"file",accept:"image/png, image/jpeg",onChange:n,ref:a}),r.jsx("img",{width:t,height:t,src:e||P,alt:"profile",referrerPolicy:"no-referrer"}),r.jsx(Y,{type:"button",size:"lg",design:"flat",shape:"circular",onClick:()=>{var i;return(i=a.current)==null?void 0:i.click()},children:"+"})]})]})},Ue=c.keyframes`
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
`,je=c.keyframes`
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
`,Be=u.default.div`
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
    animation: ${je} 1s linear infinite;
  }
  .idbi-loading > div > div:last-child {
    animation-delay: -0.5s;
  }
  .idbi-loading > div > div:last-child > div > div {
    animation-delay: -0.5s;
    background-color: ${({theme:e})=>e.color.TERTIARY[900]};
  }
`,Oe=()=>r.jsx(Be,{children:r.jsx("div",{className:"idbi-loading",children:r.jsxs("div",{children:[r.jsx("div",{children:r.jsx("div",{children:r.jsx("div",{})})}),r.jsx("div",{children:r.jsx("div",{children:r.jsx("div",{})})})]})})}),Ye=u.default.section`
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
  ${({theme:e,design:t})=>{switch(t){case"primary":return c.css`
          background-color: #fff;
          box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
          -webkit-box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
          -moz-box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
        `;case"secondary":return c.css`
          background-color: ${e.color.QUATERNARY[300]};
        `;case"flat":return c.css`
          background-color: transparent;
        `;default:return e.color.NEUTRAL[100]}}};
`,Qe=({design:e="primary",header:t,options:o,optionsFormatter:a,content:n,withSeparator:i})=>r.jsxs(Ye,{design:e,withSeparator:i,children:[t&&r.jsx("header",{children:t}),o&&a&&r.jsx("ul",{children:o.map((l,s)=>r.jsx(r.Fragment,{children:r.jsx("li",{children:a(l)},l.value)}))}),n&&n]}),He=e=>r.jsx("svg",{width:e.size||24,height:e.size||25,fill:"none",viewBox:"0 0 24 25",...e,children:e.isChecked?r.jsxs(r.Fragment,{children:[r.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M22.53 3.97a.75.75 0 0 1 0 1.06l-10 10a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06L12 13.44l9.47-9.47a.75.75 0 0 1 1.06 0Z",fill:"#4318FF"}),r.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5 4.25A1.25 1.25 0 0 0 3.75 5.5v14A1.25 1.25 0 0 0 5 20.75h14a1.25 1.25 0 0 0 1.25-1.25v-7a.75.75 0 0 1 1.5 0v7A2.75 2.75 0 0 1 19 22.25H5a2.75 2.75 0 0 1-2.75-2.75v-14A2.75 2.75 0 0 1 5 2.75h11a.75.75 0 0 1 0 1.5H5Z",fill:"#4318FF"})]}):r.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5 4.25c-.69 0-1.25.56-1.25 1.25v14c0 .69.56 1.25 1.25 1.25h14c.69 0 1.25-.56 1.25-1.25v-14c0-.69-.56-1.25-1.25-1.25H5ZM2.25 5.5A2.75 2.75 0 0 1 5 2.75h14a2.75 2.75 0 0 1 2.75 2.75v14A2.75 2.75 0 0 1 19 22.25H5a2.75 2.75 0 0 1-2.75-2.75v-14Z",fill:"#4318FF"})}),Pe=u.default(C.Root)`
  width: 100%;
  background-color: #fff;
  box-shadow: ${({theme:e})=>e.effect.darkShadow[4]};
  border-radius: 0.5rem;
`,We=u.default(C.Trigger)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  cursor: pointer;
  background-color: transparent;
  border: none;
`,Ze=c.keyframes`
  from {
    height: 0;
  }
  to {
    height: var(--radix-collapsible-content-height);
  }
`,Re=c.keyframes`
  from {
    height: var(--radix-collapsible-content-height);
  }
  to {
    height: 0;
  }
`,_e=u.default(C.Content)`
  overflow: hidden;
  &[data-state="open"] {
    animation: ${Ze} 300ms ease-out;
  }
  &[data-state="closed"] {
    animation: ${Re} 300ms ease-out;
  }
`,Ve=({open:e,setOpen:t,label:o,content:a})=>r.jsxs(Pe,{open:e,onOpenChange:t,children:[r.jsxs(We,{children:[r.jsx(m,{children:o}),r.jsx(He,{isChecked:e})]}),r.jsx(_e,{children:a})]}),Ge=e=>r.jsx("svg",{width:e.size||8,height:e.size||12,fill:"none",viewBox:"0 0 8 12",...e,children:r.jsx("path",{d:"m3.069 6.003 4.73-4.49a.634.634 0 0 0 0-.928L7.384.192A.705.705 0 0 0 6.895 0a.705.705 0 0 0-.489.192L.774 5.537a.634.634 0 0 0-.202.465c0 .177.071.342.202.466l5.627 5.34c.13.124.304.192.49.192a.706.706 0 0 0 .488-.192l.415-.393a.634.634 0 0 0 0-.928L3.069 6.003Z",fill:"#151E5A"})}),Je=u.default.header`
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
`,qe=({onBack:e,backLabel:t,profileImageUrl:o})=>r.jsxs(Je,{children:[r.jsxs("button",{type:"button",onClick:e,children:[r.jsx(Ge,{}),r.jsx(m,{color:"NEUTRAL/900",children:t})]}),r.jsx("img",{width:28,height:28,src:o||P,alt:"profile",referrerPolicy:"no-referrer"})]});f.Button=Y,f.Card=Qe,f.CodeInput=pe,f.Collapsible=Ve,f.CustomSelect=ye,f.Heading=fe,f.Loader=Oe,f.ProfileImage=Le,f.SelectField=me,f.StickyHeader=qe,f.Text=m,f.TextField=Ie,Object.defineProperties(f,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
