(function(g,c){typeof exports=="object"&&typeof module<"u"?c(exports,require("styled-components"),require("react/jsx-runtime"),require("react"),require("react-loading-skeleton"),require("react-select")):typeof define=="function"&&define.amd?define(["exports","styled-components","react/jsx-runtime","react","react-loading-skeleton","react-select"],c):(g=typeof globalThis<"u"?globalThis:g||self,c(g["ID-Components"]={},g.styled,g["react/jsx-runtime"].js,g.React,g.Skeleton,g.Select))})(this,function(g,c,n,p,W,V){"use strict";const L=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},b=L(c),j=L(W),_=L(V),Q={bold:700,medium:500,regular:400,light:300},B={xs:"0.750rem",sm:"0.875rem	",md:"1.0rem",lg:"1.250rem",xl:"1.5rem","2xl":"1.875rem","3xl":"2.0rem","4xl":"2.5rem","5xl":"3.0rem"},U={h1:"xl",h2:"lg",h3:"md",h4:"sm",h5:"xs",h6:"xs",text:"sm"},q=({shape:e})=>{switch(e){case"rounded":return c.css`
        border-radius: 10px;
      `;case"squared":return c.css`
        border-radius: 0;
      `;case"circular":return c.css`
        border-radius: 25px;
      `;default:return c.css`
        border-radius: 10px;
      `}},R=({design:e,color:o})=>{switch(e){case"solid":return c.css`
        background-color: ${({theme:t})=>$({theme:t,color:o})};
        color: #fff;
      `;case"outline":return c.css`
        background-color: transparent;
        border: 1px solid ${({theme:t})=>$({theme:t,color:o})};
        color: ${({theme:t})=>$({theme:t,color:o})};
      `;case"flat":return c.css`
        background-color: transparent;
        border: none;
        color: ${({theme:t})=>$({theme:t,color:o})};
      `;case"link":return c.css`
        background-color: transparent;
        border: none;
        color: ${({theme:t})=>$({theme:t,color:o})};

        &:hover {
          color: ${({theme:t})=>$({theme:t,color:o,hover:!0})};
          text-decoration: underline;
        }
      `;default:return c.css`
        background-color: ${({theme:t})=>$({theme:t,color:o})};
        color: #fff;
      `}},$=({color:e="SECONDARY/900",theme:o,design:t,hover:s})=>{const a=e.split("/"),i=a[0];let r=+a[1];if(s&&r>=300)switch(t){case"solid":r-=100;break;case"outline":r=100;break;case"flat":r=100;break;default:r>=400?r-=100:r+=100;break}if(s&&r<300)switch(t){case"solid":r+=100;break;case"outline":r=100;break;case"flat":r=100;break;default:r-=100;break}return i==="PRIMARY"||i==="SECONDARY"||i==="TERTIARY"||i==="QUATERNARY"||i==="STATE"||i==="ALERT"||i==="SUCCESS"?r===50||r===100||r===200||r===300||r===400||r===500||r===600||r===700||r===800||r===900?o.color[i][r]:o.color[i][900]:o.color.PRIMARY[900]},D=({fullWidth:e})=>e?c.css`
      width: 100%;
    `:c.css`
    width: auto;
  `,Z=({isLoading:e})=>e?c.css`
      cursor: not-allowed;
      opacity: 0.5;
    `:c.css`
    cursor: pointer;
    opacity: 1;
  `,K=({disabled:e})=>e?c.css`
      cursor: not-allowed;
      opacity: 0.5;
    `:c.css`
    cursor: pointer;
    opacity: 1;
  `,z=({size:e="sm"})=>c.css`
    font-size: ${B[e]||e};
  `,G=({align:e})=>{if(e)return c.css`
      text-align: ${e};
    `},Y=e=>{let o="";return e.m&&(o+=`
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
    `),c.css`
    ${o}
  `},J=b.default.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
`,X=b.default(J)`
  display: inline-flex;
  gap: 0.5rem;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease-out;
  padding: ${({design:e})=>e==="link"?"0":"0.7rem"};
  min-height: ${({design:e})=>e==="link"?"0":"45px"};

  ${({size:e})=>z({size:e})};
  ${({shape:e})=>q({shape:e})};
  ${({design:e,color:o})=>R({design:e,color:o})};
  ${({fullWidth:e})=>D({fullWidth:e})};
  ${({isLoading:e})=>Z({isLoading:e})};
  ${({disabled:e})=>K({disabled:e})};
  ${({m:e,mb:o,mt:t,mr:s,ml:a,my:i,mx:r,p:l,pb:d,pt:u,pr:h,pl:m,py:k,px:x})=>Y({m:e,mb:o,mt:t,mr:s,ml:a,my:i,mx:r,p:l,pb:d,pt:u,pr:h,pl:m,py:k,px:x})};

  &:hover {
    background-color: ${({theme:e,color:o,design:t})=>t==="link"?"transparent":$({color:o,theme:e,design:t,hover:!0})};
  }

  &:active {
    background-color: ${({theme:e,color:o,design:t})=>t==="link"?"transparent":$({color:o,theme:e,design:t,hover:!0})};
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:disabled:hover {
    ${({design:e,color:o})=>R({design:e,color:o})};
  }
`,ee=({children:e,...o})=>n.jsxs(X,{...o,children:[o.leftIcon,e,o.rightIcon]});function te(e,o,t){const s=()=>{const a=document.querySelectorAll("input");return Array.from(a).filter(r=>r.className===o)};p.useEffect(()=>{const a=i=>{i.key==="Backspace"&&setTimeout(()=>{const r=s(),l=document.activeElement;l.value="";const d=r.indexOf(l);d>0&&r[d-1].focus()},0)};return document.addEventListener("keydown",a),()=>document.removeEventListener("keydown",a)},[]),p.useEffect(()=>{const a=i=>{if(i.key!=="Backspace"){const r=i.key.toLowerCase();setTimeout(()=>{if(r.length===1){const l=s(),d=document.activeElement;d.value=r;const u=l.indexOf(d);u<l.length-1&&l[u+1].focus()}},0)}};return document.addEventListener("keydown",a),()=>document.removeEventListener("keydown",a)},[]),p.useEffect(()=>{if(e){const a=i=>{const r=i.key.toLowerCase();(r.length===1||r==="backspace")&&setTimeout(()=>{const d=s().map(u=>u.value).join("");e(d)},0)};return document.addEventListener("keydown",a),()=>document.removeEventListener("keydown",a)}},[]),p.useEffect(()=>{if(t){const a=s(),i=t.split("");a.forEach((r,l)=>{const d=i[l];d&&(r.value=d)})}},[t])}const oe=c.keyframes`
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
`,N=b.default.div`
  opacity: 0;
  ${({shouldAppear:e})=>e&&c.css`
      animation: ${oe} 0.2s ease-in;
      animation-fill-mode: forwards;
    `}
`,ne=c.css`
  display: inline-block;
  font-family: "Poppins";
  font-style: normal;
  line-height: 24px;
  letter-spacing: -0.04rem;
  ${({align:e})=>G({align:e})}
  ${({m:e,mb:o,mt:t,mr:s,ml:a,my:i,mx:r,p:l,pb:d,pt:u,pr:h,pl:m,py:k,px:x})=>Y({m:e,mb:o,mt:t,mr:s,ml:a,my:i,mx:r,p:l,pb:d,pt:u,pr:h,pl:m,py:k,px:x})};
`,re=e=>{const o=e==="h1"||e==="h2"||e==="h3"||e==="h4"||e==="h5"||e==="h6",t=o?"bold":"medium",s=o?U[e]:U.text,a="PRIMARY/900";return c.css`
    font-weight: ${({weight:i=t})=>Q[i]||"500"};
    font-size: ${({size:i=s})=>B[i]||i};
    color: ${({theme:i,color:r=a})=>{const l=r==null?void 0:r.split("/")[0],d=+(r==null?void 0:r.split("/")[1]);return i.color[l][d]}};
  `},ie={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",p:"p",li:"li",span:"span",strong:"strong",label:"label"},ae=b.default.div`
  ${ne}
  ${({as:e})=>re(e)}
`,w=({as:e,...o})=>{const t=ie[e];return n.jsx(ae,{as:t,...o})},se={H1:e=>n.jsx(w,{as:"h1",...e}),H2:e=>n.jsx(w,{as:"h2",...e}),H3:e=>n.jsx(w,{as:"h3",...e}),H4:e=>n.jsx(w,{as:"h4",...e}),H5:e=>n.jsx(w,{as:"h5",...e}),H6:e=>n.jsx(w,{as:"h6",...e})},ce=b.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
  transition: 0.3s ease-out;
`,E=e=>e.rightIcon||e.leftIcon?n.jsxs(ce,{children:[e.leftIcon,n.jsx(w,{as:e.as||"p",...e}),e.rightIcon]}):n.jsx(w,{as:e.as||"p",...e}),le=b.default.div`
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
      ${({theme:e,errorMessage:o,success:t})=>o?e.color.ALERT[900]:t?e.color.SUCCESS[900]:e.color.NEUTRAL[300]};
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
`,de=b.default.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`,fe=({id:e,value:o,length:t=4,errorMessage:s,success:a,onChange:i=l=>{},...r})=>(te(i,e,o),n.jsxs(de,{children:[n.jsx(le,{length:t,success:a,errorMessage:s,children:Array.from({length:t}).map((l,d)=>n.jsx("input",{id:d.toString(),className:e,maxLength:1,...r},d))}),s&&n.jsx(N,{shouldAppear:Boolean(s),children:n.jsx(E,{size:"xs",weight:"light",color:"ALERT/900",children:s})})]})),F={color:{NEUTRAL:{50:"#F5F5F5",100:"#EBEBEB",200:"#dfdfdf",300:"#bfbfbf",400:"#9f9f9f",500:"#808080",600:"#404040",700:"#383838",800:"#202020",900:"#000000"},PRIMARY:{50:"#F1F2F9",100:"#E6E8F4",200:"#DDDFF0",300:"#BBBFE2",400:"#999FD3",500:"#777fc5",600:"#545fb6",700:"#414a98",800:"#333a76",900:"#242954"},SECONDARY:{20:"#F7F5FF",50:"#EFEBFF",100:"#E6E0FF",200:"#d0c5ff",300:"#d0c5ff",400:"#b9a8ff",500:"#a18cff",600:"#8a6fff",700:"#7252ff",800:"#5b35ff",900:"#4318FF"},TERTIARY:{50:"#FFFAFC",100:"#FFF5F9",200:"#ffeff5",300:"#ffe0eb",400:"#ffd0e1",500:"#ffc1d7",600:"#ffb1cd",700:"#FFA1C3",800:"#ff92b9",900:"#FF82AF"},QUATERNARY:{50:"#FBFCFE",100:"#F2F6FD",200:"#ebf1fc",300:"#D8E4FA",400:"#c4d6f8",500:"#b0c8f5",600:"#9cbbf3",700:"#88adf0",800:"#75a0ed",900:"#6192EB"},STATE:{50:"#FFFBF5",100:"#FEF7EB",200:"#fef3e3",300:"#fde7c6",400:"#fcdba9",500:"#fbcf8d",600:"#fac270",700:"#f9b654",800:"#f8aa38",900:"#F79E1B"},ALERT:{50:"#FFFBF5",100:"#FEEDEC",200:"#fde3e2",300:"#fbc8c5",400:"#f9ada8",500:"#f7918b",600:"#f4756d",700:"#F25A50",800:"#F03E33",900:"#EE2316"},SUCCESS:{50:"#F7FDFA",100:"#EEFBF4",200:"#e4f9ed",300:"#c9f3db",400:"#aeedc9",500:"#93e7b7",600:"#78e1a4",700:"#5DDB92",800:"#42D580",900:"#2DC96F"}}},ue=b.default.div`
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
`,he={control:(e,o)=>({...e,minHeight:"45px",borderRadius:10,backgroundColor:"#ffffff",border:`1px solid ${o.isFocused?F.color.QUATERNARY[900]:F.color.NEUTRAL[300]}`,boxShadow:"none",cursor:"pointer"}),singleValue:()=>({color:F.color.PRIMARY[900],fontWeight:500,fontSize:"14px"}),placeholder:e=>({...e,color:F.color.NEUTRAL[700]}),indicatorSeparator:e=>({...e,display:"none",padding:0}),indicatorsContainer:e=>({...e,"> div":{padding:"0",paddingRight:"3px"}}),valueContainer:e=>({...e,padding:0,paddingLeft:"6px"})},ge=({formatOptionLabel:e,options:o,loading:t=!1,style:s,error:a,firstOption:i,initialValue:r,value:l,onChange:d,isMulti:u,placeholder:h,label:m})=>{const k=i||{label:"Seleccione una opci\xF3n",value:""},x=[...o];return n.jsxs(ue,{style:s,hasError:!!a,children:[m&&n.jsx(E,{as:"label",align:"left",size:"sm",color:"NEUTRAL/700",children:m}),t?n.jsx(j.default,{style:{borderRadius:10},className:"loading-skeleton",height:46,width:"100%"}):n.jsx(_.default,{placeholder:h,value:l||void 0,defaultValue:r||k,options:x,onChange:d,styles:he,isMulti:u,formatOptionLabel:e})]})},pe=b.default.div`
  ${({fullWidth:e})=>D({fullWidth:e})};
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 8px;
  border: 1px solid
    ${({theme:e,error:o,success:t,isFocused:s})=>o?e.color.ALERT[900]:t&&s?e.color.SUCCESS[900]:s?e.color.QUATERNARY[900]:e.color.NEUTRAL[300]};
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
    width: 100%;
    ${({size:e})=>z({size:e})};
    flex-grow: 1;
    border: none;
    outline: none;
    padding: 10px 0px;
    background: transparent;
    letter-spacing: -0.04em;
    color: ${e=>e.theme.color.NEUTRAL[700]};
    padding-left: ${({leftAddon:e})=>e?"0px":"12px"};
    padding-right: ${({rightAddon:e})=>e?"0px":"12px"};
    padding-right: ${({success:e,error:o})=>(e||o)&&"2.5rem"};

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
`,be=e=>n.jsx("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:0,color:e.color||"#EE2316",height:24,width:24,viewBox:"0 0 24 24",...e,children:n.jsxs("g",{stroke:"none",children:[n.jsx("path",{fill:"none",d:"M0 0h24v24H0z"}),n.jsx("path",{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z"})]})}),me=e=>n.jsx("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:0,color:e.color||"#2DC96F",height:20,width:20,viewBox:"0 0 1024 1024",...e,children:n.jsx("path",{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z",stroke:"none"})}),M=p.forwardRef(({type:e,leftAddon:o,rightAddon:t,placeholder:s,error:a,success:i,size:r,fullWidth:l,name:d,infoMessage:u,onFocus:h,onBlur:m,onChange:k,...x},y)=>{const[C,S]=p.useState(!1),T=!a&&!i&&u&&C;return n.jsxs(n.Fragment,{children:[n.jsxs(pe,{fullWidth:l,success:i,size:r,error:a,disabled:x.disabled,leftAddon:o,rightAddon:t,isFocused:C,children:[o&&n.jsx("span",{className:"leftAddon",children:o}),n.jsx("input",{ref:y,onFocus:A=>{h&&h(A),S(!0)},onBlur:A=>{m&&m(A),S(!1)},onChange:k,placeholder:s,type:e,name:d,...x}),t&&n.jsx("span",{className:"rightAddon",children:t}),a&&n.jsx("span",{className:"state",children:n.jsx(be,{size:24,color:F.color.ALERT[900]})}),i&&n.jsx("span",{className:"state",children:n.jsx(me,{size:20,color:F.color.SUCCESS[900]})})]}),T&&n.jsx(N,{shouldAppear:T,children:n.jsx(E,{size:"xs",color:"QUATERNARY/900",children:u})})]})}),xe=b.default.div`
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
`,$e=b.default.div`
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
      ${o=>o.active&&c.css`
          &::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: ${t=>t.color||t.theme.color.PRIMARY[900]};
            width: ${t=>t.size*2}px;
            height: ${t=>t.size*2}px;
            border-radius: ${t=>t.borderRadius||"50%"};
            transition: 0.3s background;
          }
          &:hover ::before {
            width: ${t=>t.size*2}px;
            height: ${t=>t.size*2}px;
            background: ${t=>t.color||t.theme.color.PRIMARY[900]};
          }
        `}
    `}
  ${e=>e.variant=="V2"&&c.css`
      ${o=>o.active&&c.css`
          &::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: transparent;
            width: ${t=>t.size}px;
            height: ${t=>t.size}px;
            border-radius: ${t=>t.borderRadius||"50%"};
            transition: 0.3s background;
          }
          &:hover ::before {
            width: ${t=>t.size*2}px;
            height: ${t=>t.size*2}px;
            background: ${t=>t.theme.color.NEUTRAL[50]};
          }
        `}
    `}
`,Ee=b.default.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${e=>e.size}px;
  height: ${e=>e.size}px;
  fill: ${e=>e.color||e.theme.color.PRIMARY[900]};
  ${e=>e.variant==="V1"&&c.css`
      ${o=>o.active&&c.css`
          fill: #fff;
        `}
    `}
  ${e=>e.variant==="V2"&&c.css`
      fill: ${o=>o.theme.color.NEUTRAL[400]};
      ${o=>o.active&&c.css`
          fill: ${t=>t.color||t.theme.color.PRIMARY[900]};
        `}
    `}
`,H=e=>{const{children:o,color:t,size:s,viewBox:a,active:i,borderRadius:r,variant:l}=e;return n.jsx($e,{active:i,size:s||24,borderRadius:r||"50%",variant:l||"V1",color:t,children:n.jsx(Ee,{active:i,color:t,size:s||24,viewBox:a||"0 0 32 32",variant:l||"V1",children:o})})},ve=e=>{const{color:o,size:t}=e;return n.jsx(H,{color:o,size:t,viewBox:"0 0 22 13",fill:"none",children:n.jsx("path",{d:"M19 1.406s-.32.772-1 1.752m-7 4.031a7.587 7.587 0 0 1-4.051-1.157M11 7.19a7.587 7.587 0 0 0 4.051-1.157M11 7.19v4.048m-8-9.83s.354.851 1.106 1.901M6.95 6.033 4 9.502m2.949-3.47c-1.26-.778-2.198-1.824-2.843-2.724m10.945 2.724 2.449 3.47m-2.449-3.47C16.381 5.21 17.354 4.09 18 3.158m-13.894.15L1 4.877m17-1.718 3 1.718",stroke:"#242954",strokeWidth:2,strokeLinecap:"round"})})},we=e=>{const{color:o,size:t}=e;return n.jsx(H,{color:o,size:t,viewBox:"0 0 22 19",fill:"none",children:n.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 2.75c-3.089 0-6.002 1.167-8.524 3.239a.75.75 0 1 1-.952-1.16C4.274 2.57 7.515 1.25 11 1.25c3.485 0 6.726 1.32 9.476 3.58a.75.75 0 1 1-.952 1.159C17.002 3.917 14.089 2.75 11 2.75Zm-8.249 8.454v.002c.006.02.025.103.1.259.09.187.234.424.434.697.4.546.99 1.19 1.73 1.804 1.488 1.238 3.487 2.284 5.639 2.284 2.163 0 4.343-1.055 6.016-2.308.829-.62 1.506-1.27 1.968-1.819.231-.276.398-.514.503-.7a1.31 1.31 0 0 0 .102-.219 1.315 1.315 0 0 0-.102-.218 4.803 4.803 0 0 0-.503-.7c-.462-.55-1.14-1.198-1.968-1.82a13.63 13.63 0 0 0-1.87-1.179c.264.57.412 1.203.412 1.872 0 2.496-2.052 4.5-4.558 4.5s-4.558-2.004-4.558-4.5c0-.615.125-1.2.35-1.734-.515.309-.995.655-1.432 1.018a10.49 10.49 0 0 0-1.729 1.804c-.2.273-.343.51-.434.697-.075.156-.094.238-.1.26 0 0 0 0 0 0Zm7.903-6.545c-2.627 0-4.955 1.264-6.599 2.63a11.982 11.982 0 0 0-1.98 2.072 6.141 6.141 0 0 0-.575.931c-.13.27-.25.594-.25.912 0 .319.12.643.25.913.14.29.337.606.575.931a11.98 11.98 0 0 0 1.98 2.071c1.644 1.367 3.972 2.631 6.599 2.631 2.616 0 5.11-1.255 6.915-2.607.91-.682 1.673-1.408 2.217-2.055.271-.323.498-.638.662-.93.15-.265.302-.606.302-.954 0-.347-.153-.688-.302-.953a6.264 6.264 0 0 0-.662-.93c-.544-.647-1.307-1.373-2.217-2.055-1.806-1.352-4.299-2.607-6.915-2.607Zm0 1.5c-1.7 0-3.058 1.354-3.058 3s1.358 3 3.058 3c1.7 0 3.058-1.354 3.058-3s-1.359-3-3.058-3Z",fill:"#242954",stroke:"#242954",strokeLinecap:"round"})})},ke=p.forwardRef(({label:e,type:o,error:t,isDirty:s,success:a,infoMessage:i,fullWidth:r,...l},d)=>{const u={...l,ref:d},[h,m]=p.useState(!1);return n.jsxs(xe,{fullWidth:r,children:[e&&n.jsxs("div",{className:"label-container",children:[n.jsx(E,{as:"label",align:"left",size:"sm",color:"NEUTRAL/700",children:e}),o==="password"&&n.jsx("span",{onClick:()=>m(!h),children:h?n.jsx(we,{size:20}):n.jsx(ve,{size:20})})]}),n.jsx(M,{error:Boolean(t),success:a||!t&&s,infoMessage:i,fullWidth:r,type:h?"text":o,...u}),t&&n.jsx(N,{shouldAppear:Boolean(t),children:n.jsx(E,{size:"xs",color:"ALERT/900",children:t})})]})}),Ae=(e,o)=>{p.useEffect(()=>{const t=s=>{if(Array.isArray(e)){for(const a of e)if(!s.target||!a.current||a.current.contains(s.target))return}else if(!s.target||!e.current||e.current.contains(s.target))return;o(s)};return document.addEventListener("mousedown",t),document.addEventListener("touchstart",t),()=>{document.removeEventListener("mousedown",t),document.removeEventListener("touchstart",t)}},[e,o])},Fe=e=>n.jsx("svg",{height:e.size||16,width:e.size||16,fill:"none",viewBox:"0 0 16 16",...e,children:n.jsx("path",{d:"M12 5.333v2.534l-4 3.067-4-3.067V5.333L8 8.4l4-3.067Z",fill:"#6B6B6B"})}),Ce=e=>n.jsx("svg",{height:13,width:14,fill:"none",viewBox:"0 0 14 13",...e,children:n.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.821 1.606a4.715 4.715 0 1 0 0 9.43 4.715 4.715 0 0 0 0-9.43ZM.125 6.32A5.696 5.696 0 1 1 10.178 9.99l2.553 2.547a.49.49 0 0 1-.693.695l-2.553-2.55A5.696 5.696 0 0 1 .125 6.32Z",fill:"#242954"})}),Se=b.default.div`
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
`,Te=b.default.ul`
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
      padding: 1.2rem 0.5rem;
      margin: 0 0.313rem;
      &:focus {
        border-radius: 0.5rem;
        outline: 2px solid ${({theme:e})=>e.color.SECONDARY[900]};
      }
    }
  }
`,Ie=p.forwardRef(({label:e,searchable:o=!0,isMobile:t,autoSize:s,value:a,options:i,placeholder:r="Seleccione una opci\xF3n",fullWidth:l,fullWidthOptions:d,onChange:u,formatOptionLabel:h,formatSelectedOption:m},k)=>{const x=p.useRef(null),[y,C]=p.useState(i),[S,T]=p.useState(""),[A,I]=p.useState(!1);Ae(x,()=>{I(!1)});const Le=p.useCallback(()=>{const f=i.filter(v=>v.label.toLowerCase().includes(S.toLowerCase()));C(f)},[i,a]),P=p.useCallback(f=>{u(i.find(v=>v.label===f)),I(!1),T(""),C(i)},[Le]),ze=p.useCallback(f=>{T(f.target.value);const v=i.filter(O=>O.label.toLowerCase().includes(f.target.value.toLowerCase()));C(v)},[]),Ne=()=>{const f=x.current;if(f){const v=f.getBoundingClientRect();return window.innerHeight-v.bottom-20}};return n.jsxs(Se,{fullWidth:l,ref:x,children:[e&&n.jsx(E,{as:"label",align:"left",size:"sm",color:"NEUTRAL/700",pl:"0.05rem",mb:"0.25rem",children:e}),n.jsxs("div",{className:"select-btn",onClick:()=>I(!A),tabIndex:0,onKeyUpCapture:f=>{f.key==="Enter"&&I(!A)},children:[n.jsx(E,{as:"span",color:"NEUTRAL/700",mr:"0.5rem",children:m?m(a):h?h(a):a.label}),n.jsx(Fe,{size:20})]}),A&&n.jsxs(Te,{maxOptionsHeight:s?Ne():285,fullWidthOptions:d,children:[o&&n.jsx("div",{className:"search-box",children:n.jsx(M,{leftAddon:n.jsx(Ce,{}),type:"text",placeholder:r,value:S,onChange:ze,fullWidth:!0})}),n.jsx("div",{className:"options",children:y.map(f=>n.jsx(E,{as:"li",color:"NEUTRAL/700",className:f.value===a.value?"selected":"",tabIndex:0,onClick:()=>P(f.label),onKeyUpCapture:v=>{v.key==="Enter"&&P(f.label)},children:h?h(f):f.label},`${f.label}-${f.value}`))})]})]})});g.Button=ee,g.CodeInput=fe,g.CustomSelect=Ie,g.Heading=se,g.SelectField=ge,g.Text=E,g.TextField=ke,Object.defineProperties(g,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
