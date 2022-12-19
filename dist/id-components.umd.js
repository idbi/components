(function(p,s){typeof exports=="object"&&typeof module<"u"?s(exports,require("styled-components"),require("react/jsx-runtime"),require("react"),require("react-loading-skeleton"),require("react-select"),require("@radix-ui/react-collapsible"),require("@floating-ui/react-dom")):typeof define=="function"&&define.amd?define(["exports","styled-components","react/jsx-runtime","react","react-loading-skeleton","react-select","@radix-ui/react-collapsible","@floating-ui/react-dom"],s):(p=typeof globalThis<"u"?globalThis:p||self,s(p["ID-Components"]={},p.styled,p["react/jsx-runtime"].js,p.React,p.Skeleton,p.Select,p["@radix-ui/react-collapsible"],p["@floating-ui/react-dom"]))})(this,function(p,s,o,b,Ve,Re,Je,J){"use strict";const U=e=>e&&typeof e=="object"&&"default"in e?e:{default:e};function Xe(e){if(e&&e.__esModule)return e;const t=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const r in e)if(r!=="default"){const n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:()=>e[r]})}}return t.default=e,Object.freeze(t)}const a=U(s),Ke=U(Ve),qe=U(Re),P=Xe(Je),$e={bold:700,medium:500,regular:400,light:300},X={xs:"0.750rem",sm:"0.875rem	",md:"1.0rem",lg:"1.250rem",xl:"1.5rem","2xl":"1.875rem","3xl":"2.0rem","4xl":"2.5rem","5xl":"3.0rem"},K={h1:"xl",h2:"lg",h3:"md",h4:"sm",h5:"xs",h6:"xs",text:"sm"},d={color:{NEUTRAL:{0:"#FFFFFF",20:"#FFFFFF",50:"#F5F5F5",100:"#EBEBEB",200:"#dfdfdf",300:"#bfbfbf",400:"#9f9f9f",500:"#808080",600:"#404040",700:"#383838",800:"#202020",900:"#000000"},PRIMARY:{0:"#FFFFFF",50:"#F1F2F9",100:"#E6E8F4",200:"#DDDFF0",300:"#BBBFE2",400:"#999FD3",500:"#777fc5",600:"#545fb6",700:"#414a98",800:"#333a76",900:"#242954"},SECONDARY:{0:"#FFFFFF",20:"#F7F5FF",50:"#EFEBFF",100:"#E6E0FF",200:"#d0c5ff",300:"#d0c5ff",400:"#b9a8ff",500:"#a18cff",600:"#8a6fff",700:"#7252ff",800:"#5b35ff",900:"#4318FF"},TERTIARY:{0:"#FFFFFF",50:"#FFFAFC",100:"#FFF5F9",200:"#ffeff5",300:"#ffe0eb",400:"#ffd0e1",500:"#ffc1d7",600:"#ffb1cd",700:"#FFA1C3",800:"#ff92b9",900:"#FF82AF"},QUATERNARY:{0:"#FFFFFF",50:"#FBFCFE",100:"#F2F6FD",200:"#ebf1fc",300:"#D8E4FA",400:"#c4d6f8",500:"#b0c8f5",600:"#9cbbf3",700:"#88adf0",800:"#75a0ed",900:"#6192EB"},STATE:{0:"#FFFFFF",50:"#FFFBF5",100:"#FEF7EB",200:"#fef3e3",300:"#fde7c6",400:"#fcdba9",500:"#fbcf8d",600:"#fac270",700:"#f9b654",800:"#f8aa38",900:"#F79E1B"},ALERT:{0:"#FFFFFF",50:"#FFFBF5",100:"#FEEDEC",200:"#fde3e2",300:"#fbc8c5",400:"#f9ada8",500:"#f7918b",600:"#f4756d",700:"#F25A50",800:"#F03E33",900:"#EE2316"},SUCCESS:{0:"#FFFFFF",50:"#F7FDFA",100:"#EEFBF4",200:"#e4f9ed",300:"#c9f3db",400:"#aeedc9",500:"#93e7b7",600:"#78e1a4",700:"#5DDB92",800:"#42D580",900:"#2DC96F"},OTHER:{color1:"#151E5A"},STATUS:{DEFAULT:{0:"#F5F5F5",1:"#808080"},DRAFT:{0:"#F5F5F5",1:"#808080"},PENDING:{0:"#DFDFDF",1:"#404040"},REJECTED:{0:"#FDE3E2",1:"#EE2316"},ACCEPTED:{0:"#D0C5FF",1:"#4318FF"},CANCELED:{0:"#FDE3E2",1:"#EE2316"},PREPARING:{0:"#FEF3E3",1:"#F79E1B"},READYFORPICKUP:{0:"#FFEFF5",1:"#FF82AF"},DELIVERED:{0:"#E4F9ED",1:"#2DC96F"},FINISHED:{0:"#DDDFF0",1:"#414A98 "}}},effect:{darkShadow:{4:"0px 0px 4px 1px rgba(139, 139, 139, 0.32)",6:"0px 1px 6px rgba(60, 60, 60, 0.2)",8:"0px 1px 6px rgba(107, 107, 107, 0.2)",12:"0px 0px 12px 2px #F6F6F6",24:"0px 0px 24px 4px rgba(0, 14, 51, 0.2)",30:"0px 10px 30px rgba(0, 0, 0, 0.08)"},lightShadow:{2:"0px 0px 2px 1px rgba(149, 178, 254, 0.2)",16:"0px 4px 16px rgba(153, 181, 255, 0.2)"}}},_e=({shape:e})=>{switch(e){case"rounded":return s.css`
        border-radius: 0.625rem;
      `;case"squared":return s.css`
        border-radius: 0;
      `;case"circular":return s.css`
        border-radius: 10rem;
      `;default:return s.css`
        border-radius: 0.625rem;
      `}},eo=({design:e,color:t,fontColor:r})=>{switch(e){case"solid":return s.css`
        background-color: ${()=>L({color:t})};
        color: ${r?L({color:r}):"#fff"};
      `;case"outline":return s.css`
        background-color: white;
        border: 1px solid ${()=>L({color:t})};
        color: ${()=>L({color:t})};
      `;case"flat":return s.css`
        background-color: white;
        border: none;
        color: ${()=>L({color:t})};
      `;case"link":return s.css`
        background-color: transparent;
        border: none;
        color: ${()=>L({color:t})};

        &:hover {
          color: ${()=>L({color:t,hover:!0})};
          text-decoration: underline;
        }
      `;default:return s.css`
        background-color: ${()=>L({color:t})};
        color: #fff;
      `}},L=({color:e="SECONDARY/900",design:t,hover:r})=>{const n=e.split("/"),i=n[0];let l=+n[1];if(r&&l>=300)switch(t){case"solid":l-=100;break;case"outline":l=100;break;case"flat":l=100;break;default:l>=400?l-=100:l+=100;break}if(r&&l<300)switch(t){case"solid":l+=100;break;case"outline":l=100;break;case"flat":l=100;break;default:l-=100;break}return i==="PRIMARY"||i==="NEUTRAL"||i==="SECONDARY"||i==="TERTIARY"||i==="QUATERNARY"||i==="STATE"||i==="ALERT"||i==="SUCCESS"?l===0||l===50||l===100||l===200||l===300||l===400||l===500||l===600||l===700||l===800||l===900?d.color[i][l]:d.color[i][900]:d.color.PRIMARY[900]},q=({fullWidth:e})=>e?s.css`
      width: 100%;
    `:s.css`
    width: auto;
  `,$=({isLoading:e})=>e?s.css`
      cursor: not-allowed;
      opacity: 0.5;
    `:s.css`
    cursor: pointer;
    opacity: 1;
  `,Q=({disabled:e})=>e?s.css`
      cursor: not-allowed;
      opacity: 0.5;
    `:s.css`
    cursor: pointer;
    opacity: 1;
  `,Y=({size:e="sm"})=>s.css`
    font-size: ${X[e]||e};
  `,oo=({align:e})=>e?s.css`
      text-align: ${e};
    `:s.css`
    text-align: left;
  `,_=e=>{let t="";return e.m&&(t+=`
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
    `),s.css`
    ${t}
  `},to=a.default.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
`,ro=a.default(to)`
  display: inline-flex;
  gap: 0.5rem;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease-out;
  padding: ${({design:e})=>e==="link"?"0":"0.7rem"};
  min-height: ${({design:e})=>e==="link"?"0":"45px"};

  ${({size:e})=>Y({size:e})};
  ${({shape:e})=>_e({shape:e})};
  ${({design:e,color:t,fontColor:r})=>eo({design:e,color:t,fontColor:r})};
  ${({fullWidth:e})=>q({fullWidth:e})};
  ${({isLoading:e})=>$({isLoading:e})};
  ${({disabled:e})=>Q({disabled:e})};
  ${({m:e,mb:t,mt:r,mr:n,ml:i,my:l,mx:c,p:f,pb:g,pt:A,pr:x,pl:h,py:u,px:w})=>_({m:e,mb:t,mt:r,mr:n,ml:i,my:l,mx:c,p:f,pb:g,pt:A,pr:x,pl:h,py:u,px:w})};

  &:hover:not(:disabled) {
    background-color: ${({color:e,design:t})=>t==="link"?"transparent":L({color:e,design:t,hover:!0})};
  }

  &:active {
    background-color: ${({color:e,design:t})=>t==="link"?"transparent":L({color:e,design:t,hover:!0})};
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
    & li {
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

    ${({withSeparator:e})=>e&&s.css`
        & li:not(:last-child) {
          border-bottom: 1px solid #e5e5e5;
        }
      `}
  }
  ${({design:e})=>{switch(e){case"primary":return s.css`
          background-color: #fff;
          box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
          -webkit-box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
          -moz-box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
        `;case"secondary":return s.css`
          background-color: ${d.color.QUATERNARY[300]};
        `;case"flat":return s.css`
          background-color: transparent;
        `;default:return d.color.NEUTRAL[100]}}};
`,Ct=({design:e="primary",header:t,options:r,optionsFormatter:n,content:i,withSeparator:l})=>o.jsxs(vt,{design:e,withSeparator:l,children:[t&&o.jsx("header",{children:t}),r&&n&&o.jsx("ul",{children:r.map(c=>o.jsx("li",{children:n(c)},c.value))}),i&&i]}),Mt=a.default.div`
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
`,kt=a.default.p`
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: -0.04em;
  color: #181B20;
`,ge=a.default.span`
  color: #151E5A;
  font-weight: 500;
`,mt=({items:e,creationDescription:t,creationDate:r,title:n,children:i})=>o.jsxs(Mt,{children:[n&&o.jsx(kt,{children:n}),e.map(l=>o.jsxs("div",{children:[o.jsxs("p",{children:[l.description&&o.jsx("span",{children:l.description})," ",o.jsx(de,{statusName:l.statusName,removeBackground:!0})]}),o.jsx(ge,{children:l.statusDate})]},crypto.randomUUID())),r&&o.jsxs("div",{children:[t&&o.jsx("span",{children:t}),o.jsx(ge,{children:r})]}),i]}),It=a.default.div`
  padding: ${({padding:e})=>e||"20px"};;
  border-radius: 10px;
  background: ${({background:e})=>e||"#fff"};
  box-shadow: ${({background:e})=>e==="transparent"?"none":"0px 10px 30px rgba(0, 0, 0, 0.08)"};
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.25rem;
  letter-spacing: -0.04em;
  color: #383838;
`,Et=a.default.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`,Tt=a.default.p`
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: -0.04em;
  color: #181B20;
`,Dt=a.default.div`
  outline: none;
  border: none;
  background: none;
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 1.125rem;
  letter-spacing: -0.04em;
  color: #4318FF;
  cursor: pointer;
`,Lt=a.default.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Nt=a.default.li`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
  color: ${({remark:e})=>e?"#6192EB":""};
`,xe=a.default.div`
  display: flex;
  gap: 15px;
  align-items: flex-start;
`,yt=a.default.span`
  font-size: 0.75rem;
  color: ${({remark:e})=>e?"#6192EB":"#151E5A"};
`,ue=a.default.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.125rem;
  color: #383838;
`,zt=a.default.img`
  width: 56px;
  height: 56px;
  border: 1px solid #BFBFBF;
  background: #BFBFBF;
  border-radius: 8px;
  font-size: 9px;
  object-fit: cover;
  color: ${({theme:e})=>e.color.PRIMARY[900]};
  padding: 20px;
  font-size: 14px;
`,Bt=a.default.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: ${({hasContent:e})=>e?"12px":0};
`,Ut=a.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
`,Pt=({title:e,icon:t,headerAside:r,children:n})=>o.jsxs(Ft,{children:[o.jsxs(Bt,{hasContent:!!n,children:[o.jsxs(Ut,{children:[t," ",e]}),r]}),n]}),Qt=e=>o.jsxs(y,{viewBox:"0 0 13 11",...e,children:[o.jsx("path",{d:"M1.68232 10.5L11.3177 10.5C12.1078 10.5 12.75 9.81498 12.75 8.97219L12.75 2.02781C12.75 1.18502 12.1078 0.5 11.3177 0.5L1.68232 0.500001C0.892203 0.500001 0.249999 1.18502 0.249999 2.02781L0.25 8.97219C0.25 9.81498 0.892204 10.5 1.68232 10.5ZM11.3177 1.33333C11.6765 1.33333 11.9688 1.64502 11.9688 2.02781L11.9688 8.97219C11.9688 9.35498 11.6765 9.66667 11.3177 9.66667L1.68232 9.66667C1.32346 9.66667 1.03125 9.35498 1.03125 8.97219L1.03125 2.02781C1.03125 1.64502 1.32345 1.33333 1.68232 1.33333L11.3177 1.33333Z",fill:"currentColor"}),o.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.27455 7.28751C7.20193 7.41863 7.17308 7.59075 7.17308 7.70817C7.17308 7.86925 7.0224 7.99984 6.83654 7.99984C6.65067 7.99984 6.5 7.86925 6.5 7.70817C6.5 7.53392 6.53846 7.26854 6.66776 7.03508C6.80081 6.79484 7.0636 6.5415 7.50962 6.5415L8.85577 6.5415C9.04163 6.5415 9.19231 6.67209 9.19231 6.83317C9.19231 6.99425 9.04163 7.12484 8.85577 7.12484L7.50962 7.12484C7.41717 7.12484 7.34342 7.16317 7.27455 7.28751Z",fill:"currentColor"}),o.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M10.1004 7.28751C10.1731 7.41863 10.2019 7.59075 10.2019 7.70817C10.2019 7.86925 10.3526 7.99984 10.5385 7.99984C10.7243 7.99984 10.875 7.86925 10.875 7.70817C10.875 7.53392 10.8365 7.26854 10.7072 7.03508C10.5742 6.79484 10.3114 6.5415 9.86538 6.5415H8.51923C8.33337 6.5415 8.18269 6.67209 8.18269 6.83317C8.18269 6.99425 8.33337 7.12484 8.51923 7.12484H9.86538C9.95783 7.12484 10.0316 7.16317 10.1004 7.28751Z",fill:"currentColor"}),o.jsx("path",{d:"M2.45982 7.375L4.91518 7.375C5.1 7.375 5.25 7.235 5.25 7.0625C5.25 6.89 5.1 6.75 4.91518 6.75L2.45982 6.75C2.275 6.75 2.125 6.89 2.125 7.0625C2.125 7.235 2.275 7.375 2.45982 7.375Z",fill:"currentColor"}),o.jsx("path",{d:"M2.45982 5.5L4.91518 5.5C5.1 5.5 5.25 5.36 5.25 5.1875C5.25 5.015 5.1 4.875 4.91518 4.875L2.45982 4.875C2.275 4.875 2.125 5.015 2.125 5.1875C2.125 5.36 2.275 5.5 2.45982 5.5Z",fill:"currentColor"}),o.jsx("path",{d:"M2.45982 3.625L4.91518 3.625C5.1 3.625 5.25 3.485 5.25 3.3125C5.25 3.14 5.1 3 4.91518 3L2.45982 3C2.275 3 2.125 3.14 2.125 3.3125C2.125 3.485 2.275 3.625 2.45982 3.625Z",fill:"currentColor"}),o.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8.6875 5.65625C9.29156 5.65625 9.78125 5.16656 9.78125 4.5625C9.78125 3.95844 9.29156 3.46875 8.6875 3.46875C8.08344 3.46875 7.59375 3.95844 7.59375 4.5625C7.59375 5.16656 8.08344 5.65625 8.6875 5.65625ZM8.6875 6.125C9.55044 6.125 10.25 5.42544 10.25 4.5625C10.25 3.69956 9.55044 3 8.6875 3C7.82456 3 7.125 3.69956 7.125 4.5625C7.125 5.42544 7.82456 6.125 8.6875 6.125Z",fill:"currentColor"})]}),Yt=a.default.div`
  background-color: white;
  color: ${({theme:e})=>e.color.PRIMARY[900]};
  border: 1px solid ${({theme:e})=>e.color.NEUTRAL[200]};
  border-radius: 10px;
  padding: 11px 12px;
  display: flex;
  align-items: center;
  font-size: 14px;
`,Zt=a.default.div`
  margin-right: 10px;
  flex-shrink: 0;
`,Ot=a.default.div`
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
`,Ht=a.default.span`
  display: block;
  font-weight: 500;
  line-height: 1em;
`,Wt=({name:e,lastName:t,idNumber:r,img:n,otherSections:i=[]})=>o.jsxs(Yt,{children:[o.jsx(Zt,{children:o.jsx(ae,{img:n,initials:t?`${e.charAt(0)}${t.charAt(0)}`:e.charAt(0)})}),o.jsxs("div",{children:[o.jsxs(Ot,{children:[r&&o.jsxs("span",{children:[o.jsx(Qt,{}),r]}),i.map(l=>o.jsx("span",{children:l}))]}),o.jsxs(Ht,{children:[e," ",t]})]})]}),Gt=()=>o.jsx("svg",{width:22,height:22,fill:"none",xmlns:"http://www.w3.org/2000/svg",children:o.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM.5 11C.5 5.201 5.201.5 11 .5S21.5 5.201 21.5 11 16.799 21.5 11 21.5.5 16.799.5 11Zm6.173-4.28a.75.75 0 0 1 1.06 0L11 9.986l3.266-3.266a.75.75 0 1 1 1.06 1.06l-3.265 3.267 3.266 3.266a.75.75 0 0 1-1.06 1.06L11 12.108l-3.266 3.267a.75.75 0 1 1-1.061-1.061l3.266-3.266L6.673 7.78a.75.75 0 0 1 0-1.06Z",fill:"#F25A50"})}),Vt=()=>o.jsxs("svg",{width:20,height:20,fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[o.jsx("path",{d:"m9.046 11.153 1.26-1.32c.743-.776 1.485-1.553 2.228-2.327.267-.28.614-.309.878-.081a.667.667 0 0 1 .112.87c-.041.06-.092.114-.142.167l-3.818 3.992c-.35.364-.688.365-1.035.002-.65-.68-1.302-1.36-1.95-2.042-.295-.31-.284-.738.017-.996a.585.585 0 0 1 .766-.01c.095.078.178.17.263.259l1.421 1.486Z",fill:"#2DC96F"}),o.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 18.5a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17Zm0 1.5c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10Z",fill:"#2DC96F"})]}),Rt=({color:e="#6192EB"})=>o.jsxs("svg",{width:20,height:20,fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[o.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.393 1.005A1.815 1.815 0 0 1 10 0c.671 0 1.288.386 1.607 1.005l8.146 15.836C20.486 18.27 19.498 20 17.95 20H2.05C.5 20-.487 18.269.248 16.841L8.393 1.005ZM10 1.429a.458.458 0 0 0-.405.253l-.597-.336.597.336-8.146 15.837c-.245.475.085 1.052.6 1.052H17.95c.517 0 .846-.577.6-1.053L10.406 1.682A.457.457 0 0 0 10 1.429Z",fill:e}),o.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 6.3a.7.7 0 0 1 .7.7v6a.7.7 0 1 1-1.4 0V7a.7.7 0 0 1 .7-.7ZM10 14.3a.7.7 0 0 1 .7.7v1a.7.7 0 1 1-1.4 0v-1a.7.7 0 0 1 .7-.7Z",fill:e})]}),be=({color:e="#F79E1B"})=>o.jsx("svg",{width:20,height:20,fill:"none",xmlns:"http://www.w3.org/2000/svg",children:o.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 1.429a8.571 8.571 0 1 0 0 17.142A8.571 8.571 0 0 0 10 1.43ZM0 10C0 4.477 4.477 0 10 0s10 4.477 10 10-4.477 10-10 10S0 15.523 0 10Zm10-5.714c.395 0 .714.32.714.714v1.429a.714.714 0 0 1-1.428 0V5c0-.394.32-.714.714-.714Zm0 4.285c.395 0 .714.32.714.715V15a.714.714 0 1 1-1.428 0V9.286c0-.395.32-.715.714-.715Z",fill:e})}),Jt=e=>e==="success"?s.css`
      color: ${d.color.SUCCESS[900]};
      background: ${d.color.SUCCESS[100]};
    `:e==="warning"?s.css`
      color: ${d.color.STATE[900]};
      background: ${d.color.STATE[100]};
    `:e==="error"?s.css`
      color: ${d.color.ALERT[700]};
      background: ${d.color.ALERT[100]};
    `:e==="quaternary"?s.css`
      color: ${d.color.QUATERNARY[900]};
      background: ${d.color.QUATERNARY[100]};
    `:e==="tertiary"?s.css`
      color: ${d.color.TERTIARY[900]};
      background: ${d.color.TERTIARY[100]};
    `:s.css`
    color: ${d.color.PRIMARY[900]};
    background: ${d.color.PRIMARY[100]};
  `,Xt=a.default.div`
  padding: 10px 15px;
  display: flex;
  align-items: center;
  gap: 15px;
  ${({toastType:e})=>Jt(e)}
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
`,Kt=a.default.p`
  font-weight: 700;
  font-size: 0.625rem;
  line-height: 0.9375rem;
`,qt=a.default.p`
  font-weight: 400;
  font-size: 0.625rem;
  line-height: 0.9375rem;
`,$t=a.default.span`
  color: ${d.color.SECONDARY[900]};
  text-decoration: underline;
  cursor: pointer;
`,_t=({title:e="",description:t="",type:r,link:n,icon:i})=>{const l=()=>{if(i)return i;if(r==="success")return o.jsx(Vt,{});if(r==="warning")return o.jsx(be,{});if(r==="error")return o.jsx(Gt,{});if(r==="quaternary")return o.jsx(Rt,{});if(r==="tertiary")return o.jsx(be,{color:"#FF82AF"})};return o.jsxs(Xt,{toastType:r||"primary",children:[l(),o.jsxs("div",{children:[e&&o.jsx(Kt,{children:e}),t&&o.jsxs(qt,{children:[t," ",n&&n.onClick&&o.jsx($t,{onClick:c=>{c.stopPropagation(),n.onClick&&n.onClick()},children:(n==null?void 0:n.text)||"Ver m\xE1s"})]})]})]})},we={xs:"(min-width: 360px)",sm:"(min-width: 591px)",md:"(min-width: 800px)",lg:"(min-width: 1400px)"},er=a.default.div`
  font-family: 'Poppins';
  font-style: normal;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`,or=a.default.div`
  display: flex;
  align-items: center;
  padding: ${({padding:e})=>e||"0 10px"};
`,tr=a.default.span`
  font-weight: 400;
  font-size: 0.625rem;
  line-height: 0.9375rem;
  letter-spacing: -0.04em;
  color:${d.color.NEUTRAL[500]};
`,rr=a.default.p`
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 0.9375rem;
  letter-spacing: -0.04em;
  color:${d.color.PRIMARY[900]};
`,nr=a.default.img`
  border: 1px solid #bfbfbf;
  margin: 8px 10px 0 0;
  border-radius: 8px;
  width: 30px;
  height: 30px;
  overflow: hidden;
  @media screen and ${we.md} {
    margin: 4px 10px 0 0;
    width: 34px;
    height: 34px;
  }
`,ir="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0id2hpdGUiLz4NCjxyZWN0IHg9IjQyIiB5PSI0MiIgd2lkdGg9IjMxNiIgaGVpZ2h0PSIzMTYiIHJ4PSIyNCIgZmlsbD0iI0M0RDZGOCIvPg0KPHBhdGggZD0iTTM1NC45NTcgMzA5LjQ3N0wyOTIuMDA1IDI0NS4xMzFDMjkwLjIwOCAyNDMuMzA0IDI4Ny44MDkgMjQyLjE5OSAyODUuMjU5IDI0Mi4wMjRDMjgyLjcwOSAyNDEuODUgMjgwLjE4MyAyNDIuNjE3IDI3OC4xNTYgMjQ0LjE4MkwyMDguMDY5IDI5OC4yOTVDMjA1Ljk0NSAyOTkuOTQ5IDIwNC41MzMgMzAyLjM1OCAyMDQuMTIzIDMwNS4wMjdDMjAzLjcxMyAzMDcuNjk2IDIwNC4zMzcgMzEwLjQyMSAyMDUuODY2IDMxMi42NDFMMjMzLjk4NSAzNTMuNDY0QzIzNC45NDkgMzU0Ljg2MSAyMzYuMjM1IDM1Ni4wMDQgMjM3LjczMyAzNTYuNzkzQzIzOS4yMzEgMzU3LjU4MyAyNDAuODk2IDM1Ny45OTcgMjQyLjU4OCAzNThIMzI2LjUyNEMzMzQuODcyIDM1OCAzNDIuODc4IDM1NC42NjYgMzQ4Ljc4MSAzNDguNzMxQzM1NC42ODQgMzQyLjc5NyAzNTggMzM0Ljc0NyAzNTggMzI2LjM1NFYzMTYuODYxQzM1Ny45ODggMzE0LjA5NCAzNTYuODk2IDMxMS40NDIgMzU0Ljk1NyAzMDkuNDc3WiIgZmlsbD0iIzYxOTJFQiIvPg0KPHBhdGggZD0iTTI1MC4xMjcgMzQxLjQ2N0wxNTUuNjE5IDIwNC41NjhDMTU0LjcxOSAyMDMuMjUzIDE1My41MzEgMjAyLjE2IDE1Mi4xNDggMjAxLjM3MkMxNTAuNzY0IDIwMC41ODUgMTQ5LjIyIDIwMC4xMjMgMTQ3LjYzMiAyMDAuMDIxQzE0Ni4wNDQgMTk5LjkyIDE0NC40NTQgMjAwLjE4MiAxNDIuOTgxIDIwMC43ODdDMTQxLjUwOSAyMDEuMzkyIDE0MC4xOTMgMjAyLjMyNSAxMzkuMTMzIDIwMy41MTVMNDQuNjI1NiAzMDguODIyQzQyLjkxMzIgMzEwLjc2OSA0MS45NzgzIDMxMy4yODEgNDIuMDAwNCAzMTUuODc3VjMyNi40MDhDNDIuMDAwNCAzMzQuNzg3IDQ1LjMxOTQgMzQyLjgyMiA1MS4yMjczIDM0OC43NDdDNTcuMTM1MSAzNTQuNjcyIDY1LjE0NzkgMzU4IDczLjUwMjkgMzU4SDI0MS41MTZDMjQzLjQzMiAzNTcuOTk3IDI0NS4zMSAzNTcuNDY4IDI0Ni45NDggMzU2LjQ3MUMyNDguNTg2IDM1NS40NzUgMjQ5LjkyIDM1NC4wNDcgMjUwLjgwNyAzNTIuMzQ1QzI1MS42OTQgMzUwLjY0MiAyNTIuMDk5IDM0OC43MjggMjUxLjk3OSAzNDYuODExQzI1MS44NiAzNDQuODkzIDI1MS4yMTkgMzQzLjA0NSAyNTAuMTI3IDM0MS40NjdaIiBmaWxsPSIjNjE5MkVCIi8+DQo8cGF0aCBkPSJNMjQzIDIyMEMyNTQuNTk4IDIyMCAyNjQgMjEwLjU5OCAyNjQgMTk5QzI2NCAxODcuNDAyIDI1NC41OTggMTc4IDI0MyAxNzhDMjMxLjQwMiAxNzggMjIyIDE4Ny40MDIgMjIyIDE5OUMyMjIgMjEwLjU5OCAyMzEuNDAyIDIyMCAyNDMgMjIwWiIgZmlsbD0iI0ZBQzI3MCIvPg0KPC9zdmc+DQo=",ar=({type:e="SKU",id:t,name:r,decorator:n,img:i})=>o.jsxs(er,{children:[(n==null?void 0:n.component)&&o.jsx(or,{padding:n==null?void 0:n.padding,children:n==null?void 0:n.component}),i&&o.jsx(nr,{src:i!=null&&i.url?i==null?void 0:i.url:ir,alt:(r==null?void 0:r.text)||"item"}),o.jsxs("div",{children:[o.jsxs(tr,{children:[o.jsx("strong",{children:e})," ",t]}),o.jsx(rr,{style:{fontWeight:(r==null?void 0:r.weight)||"500"},children:r==null?void 0:r.text})]})]}),ve=e=>o.jsx("svg",{width:9,height:9,fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:o.jsx("path",{d:"M8.53 1.53A.75.75 0 0 0 7.47.47l1.06 1.06ZM.47 7.47a.75.75 0 0 0 1.06 1.06L.47 7.47Zm7 1.06a.75.75 0 0 0 1.06-1.06L7.47 8.53ZM1.53.47A.75.75 0 0 0 .47 1.53L1.53.47Zm5.94 0-7 7 1.06 1.06 7-7L7.47.47Zm1.06 7-7-7L.47 1.53l7 7 1.06-1.06Z",fill:"#404040"})}),lr=a.default.div`
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
`,dr=({onClose:e=()=>{},backdropOpacity:t,zIndex:r})=>(b.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow="visible"}),[]),o.jsx(lr,{onClick:n=>{n.stopPropagation(),e()},opacity:t,zIndex:r})),Ce=s.keyframes`
  from {
    transform: translateY(100px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`,Me=s.keyframes`
  from {
    transform: translateY(-100px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`,ke=s.keyframes`
  from {
    transform: translateX(-100px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`,me=s.keyframes`
  from {
    transform: translateX(100px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`,cr=a.default.div`
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

  ${e=>{if(e.contentLocation==="bottom")return s.css`
        transform: translate(0, 0);
        right: unset;
        top: unset;
        left: 0;
        bottom: 0;
        animation: ${Ce} 0.3s ease-out;
      `;if(e.contentLocation==="top")return s.css`
        transform: translate(0, 0);
        right: unset;
        bottom: unset;
        left: 0;
        top: 0;
        animation: ${Me} 0.3s ease-out;
      `;if(e.contentLocation==="left")return s.css`
        transform: translate(0, 0);
        top: unset;
        right: unset;
        left: 0;
        bottom: 0;
        animation: ${ke} 0.3s ease-out;
      `;if(e.contentLocation==="right")return s.css`
        transform: translate(0, 0);
        top: unset;
        left: unset;
        right: 0;
        bottom: 0;
        animation: ${me} 0.3s ease-out;
      `}}

  ${e=>{if(e.contentLocationInDesktop==="center")return s.css`
        @media screen and (min-width: 1024px) {
          transform: translate(-50%, -50%);
          bottom: unset;
          right: unset;
          top: 50%;
          left: 50%;
          animation: fadeIn 0.3s ease-out;
        }
      `;if(e.contentLocationInDesktop==="bottom")return s.css`
        @media screen and (min-width: 1024px) {
          transform: translate(0, 0);
          top: unset;
          right: unset;
          left: 0;
          bottom: 0;
          animation: ${Ce} 0.3s ease-out;
        }
      `;if(e.contentLocationInDesktop==="top")return s.css`
        @media screen and (min-width: 1024px) {
          transform: translate(0, 0);
          top: unset;
          right: unset;
          left: 0;
          top: 0;
          animation: ${Me} 0.3s ease-out;
        }
      `;if(e.contentLocationInDesktop==="left")return s.css`
        @media screen and (min-width: 1024px) {
          transform: translate(0, 0);
          top: unset;
          right: unset;
          left: 0;
          bottom: 0;
          animation: ${ke} 0.3s ease-out;
        }
      `;if(e.contentLocationInDesktop==="right")return s.css`
        @media screen and (min-width: 1024px) {
          transform: translate(0, 0);
          top: unset;
          left: unset;
          right: 0;
          bottom: 0;
          animation: ${me} 0.3s ease-out;
        }
      `}}
  @media screen and (min-width: 1024px) {
    box-shadow: ${e=>e.boxShadowInDesktop||"0px 0px 24px 4px rgba(0, 12, 51, 0.05)"};
  }
`,sr=({children:e,onClose:t,backdropOpacity:r,zIndex:n,contentLocation:i="center",contentLocationInDesktop:l="center",boxShadow:c,boxShadowInDesktop:f,fullWidth:h})=>o.jsxs(o.Fragment,{children:[o.jsx(dr,{onClose:t,backdropOpacity:r,zIndex:n||4}),o.jsx(cr,{zIndex:n||4,contentLocation:i,contentLocationInDesktop:l,onClick:A=>A.stopPropagation(),boxShadow:c,boxShadowInDesktop:f,fullWidth:h,children:e})]}),Ie=s.css`
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
`;s.css`
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
`;const Ar=a.default.div`
  background-color: ${e=>e.background||"#fff"};
  border-radius: ${e=>e.borderRadius?e.borderRadius:"15px"};
  max-height: ${e=>e.maxHeight?e.maxHeight:"90vh"};
  height: ${e=>e.height?e.height:"auto"};
  max-width: ${e=>e.maxWidth?e.maxWidth:"90vw"};
  width: ${e=>e.width?e.width:"90vw"};
  padding: ${e=>e.padding?e.padding:"1.5rem"};
  overflow: ${e=>e.overflow||"hidden"};
  cursor: auto;

  ${e=>{if(e.contentLocation&&e.contentLocation==="bottom")return s.css`
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        max-width: unset;
        width: 100vw;
      `;if(e.contentLocation&&e.contentLocation==="top")return s.css`
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        max-width: unset;
        width: 100vw;
      `;if(e.contentLocation&&e.contentLocation==="left")return s.css`
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        height: 100vh;
        max-height: ${()=>e.maxHeight?e.maxHeight:"100vh"};
        max-width: ${()=>e.maxWidth?e.maxWidth:"550px"};
      `;if(e.contentLocation&&e.contentLocation==="right")return s.css`
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        height: 100vh;
        max-height: ${()=>e.maxHeight?e.maxHeight:"100vh"};
        max-width: ${()=>e.maxWidth?e.maxWidth:"550px"};
      `}}

  ${e=>{if(e.contentLocationInDesktop==="center")return s.css`
        @media screen and (min-width: 1024px) {
          border-radius: ${()=>e.borderRadiusInDesktop?e.borderRadiusInDesktop:"15px"};
          height: auto;
          max-width: ${()=>e.maxWidth?e.maxWidth:"90vw"};
          max-height: ${()=>e.maxHeight?e.maxHeight:"90vh"};
          padding: ${()=>e.padding?e.padding:"1.5rem"};
        }
      `;if(e.contentLocationInDesktop==="bottom")return s.css`
        @media screen and (min-width: 1024px) {
          border-radius: ${()=>e.borderRadiusInDesktop?e.borderRadiusInDesktop:"15px"};
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
          max-width: unset;
          height: unset;
          width: ${()=>e.width?e.width:"100vw"};
        }
      `;if(e.contentLocationInDesktop==="top")return s.css`
        @media screen and (min-width: 1024px) {
          border-radius: ${()=>e.borderRadiusInDesktop?e.borderRadiusInDesktop:"15px"};
          border-top-left-radius: 0;
          border-top-right-radius: 0;
          max-width: unset;
          height: unset;
          width: ${()=>e.width?e.width:"100vw"};
        }
      `;if(e.contentLocationInDesktop==="left")return s.css`
        @media screen and (min-width: 1024px) {
          border-radius: ${()=>e.borderRadiusInDesktop?e.borderRadiusInDesktop:"15px"};
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
          height: 100vh;
          max-height: ${()=>e.maxHeight?e.maxHeight:"100vh"};
          max-width: ${()=>e.maxWidth?e.maxWidth:"550px"};
        }
      `;if(e.contentLocationInDesktop==="right")return s.css`
        @media screen and (min-width: 1024px) {
          border-radius: ${()=>e.borderRadiusInDesktop?e.borderRadiusInDesktop:"15px"};
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
          height: 100vh;
          max-height: ${()=>e.maxHeight?e.maxHeight:"100vh"};
          max-width: ${()=>e.maxWidth?e.maxWidth:"550px"};
        }
      `}}
  ${Ie}
`,fr=a.default.div`
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
  font-size: 20px;
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
`,Ee=({onConfirm:e,onClose:t,zIndex:r,onlyIntegers:n,initialValue:i})=>{const l=b.useRef(null),[c,f]=b.useState(i||""),g=x=>{const h=x.target.value;let u=/^[0-9]\d*(\.(\d*))?$/;n&&(u=/^[0-9]*$/),!(h!==""&&!u.test(h))&&f(h)};b.useEffect(()=>{l.current.focus()},[]);const A=Number(c);return o.jsxs(F,{onClose:t,maxWidth:"350px",zIndex:r||6,children:[o.jsx(pr,{children:"Especifica la cantidad"}),o.jsxs(hr,{children:[o.jsx("input",{type:"text",inputMode:n?"numeric":"decimal",value:c,onChange:g,ref:l}),o.jsx(D,{design:"solid",size:"xs",onClick:()=>e(A),disabled:A<=0,children:"Agregar"})]})]})},Te=e=>o.jsx(y,{viewBox:"0 0 12 12",...e,children:o.jsx("path",{xmlns:"http://www.w3.org/2000/svg",fillRule:"evenodd",clipRule:"evenodd",d:"M4.86399 0.666504C4.21911 0.666504 3.69633 1.18928 3.69633 1.83416V2.1813H1.077C0.850426 2.1813 0.666748 2.36497 0.666748 2.59155C0.666748 2.81813 0.850426 3.00181 1.077 3.00181H1.80284V9.40812C1.80284 10.4713 2.66472 11.3332 3.72789 11.3332H8.27227C9.33545 11.3332 10.1973 10.4713 10.1973 9.40812V3.00181H10.9232C11.1497 3.00181 11.3334 2.81813 11.3334 2.59155C11.3334 2.36497 11.1497 2.1813 10.9232 2.1813H8.30383V1.83416C8.30383 1.18928 7.78105 0.666504 7.13618 0.666504H4.86399ZM4.51685 1.83416C4.51685 1.64244 4.67227 1.48702 4.86399 1.48702H7.13618C7.32789 1.48702 7.48332 1.64244 7.48332 1.83416V2.1813H4.51685V1.83416ZM2.62336 9.40812V3.00181H9.37681V9.40812C9.37681 10.0181 8.88229 10.5127 8.27227 10.5127H3.72789C3.11787 10.5127 2.62336 10.0181 2.62336 9.40812ZM6.00008 4.07479C5.7735 4.07479 5.58982 4.25847 5.58982 4.48504L5.58982 9.02942C5.58982 9.256 5.7735 9.43968 6.00008 9.43968C6.22666 9.43968 6.41034 9.256 6.41034 9.02942L6.41034 4.48504C6.41034 4.25847 6.22666 4.07479 6.00008 4.07479Z",fill:"currentColor"})}),gr=a.default.div`
  display: flex;
  justify-content: center;
`,xr=a.default.span`
  color: ${({isZero:e,error:t=!1,theme:r})=>e?t?r.color.ALERT[900]:r.color.NEUTRAL[500]:r.color.PRIMARY[900]};
  text-align: center;
  padding: 0 8px;
  min-width: 6ch;
`,ur=a.default.span`
  display: flex;
  justify-content: center;
  align-items: center;
`,br=a.default.div`
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
  border: ${({error:e=!1,theme:t})=>e?`1px solid ${t.color.ALERT[900]}`:"1px solid transparent"};

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
`,De=({value:e,onSetQuantity:t,onDelete:r,minimumQuantity:n=1,measureUnit:i,onlyIntegers:l,blockInputModal:c,disabled:f,hasError:g,variant:A,renderModal:x,zIndex:h,style:u,noDecrement:w,noIncrement:C})=>{const[I,k]=b.useState(!1),M=Number(e||0),T=e===null||M<=n,z=v=>{v.stopPropagation();const m=M%1!==0?Math.ceil(M):M+1;t(m)},S=v=>{if(v.stopPropagation(),T){r&&r();return}const m=M%1>0?Math.floor(M):M-1;t(m)},B=v=>{const m=l?Math.round(v):v;t(m<=n?n:m),k(!1)};return o.jsxs(o.Fragment,{children:[o.jsx(gr,{children:o.jsxs(br,{isDisabled:f,onClick:()=>{c||f||k(!0)},minQuantity:T,canDelete:!!r,variant:A,error:g,style:u,children:[!w&&o.jsx("button",{disabled:f,onClick:S,children:T&&r?o.jsx(ur,{children:o.jsx(Te,{color:d.color.ALERT[900]})}):"-"}),o.jsx(xr,{children:`${e===null?"-":e} ${e!==null&&i||""}`}),!C&&o.jsx("button",{onClick:z,disabled:f,children:"+"})]})}),I&&!c&&(x?x(o.jsx(Ee,{onClose:()=>k(!1),onConfirm:B,initialValue:e?e.toString():"",onlyIntegers:l,zIndex:h})):o.jsx(Ee,{onClose:()=>k(!1),onConfirm:B,initialValue:e?e.toString():"",onlyIntegers:l,zIndex:h}))]})},wr=e=>o.jsx(y,{viewBox:"0 0 15 9",...e,children:o.jsx("path",{xmlns:"http://www.w3.org/2000/svg",fillRule:"evenodd",clipRule:"evenodd",d:"M0.692211 1.06721C0.948493 0.81093 1.36401 0.81093 1.62029 1.06721L7.28125 6.72817L12.9422 1.06721C13.1985 0.81093 13.614 0.81093 13.8703 1.06721C14.1266 1.32349 14.1266 1.73901 13.8703 1.99529L7.74529 8.12029C7.48901 8.37657 7.07349 8.37657 6.81721 8.12029L0.692211 1.99529C0.43593 1.73901 0.43593 1.32349 0.692211 1.06721Z",fill:"currentColor"})}),vr=a.default.div`
  background-color: white;
  border: 1px solid ${({theme:e})=>e.color.NEUTRAL[100]};
  color: 1px solid ${({theme:e})=>e.color.NEUTRAL[700]};
  border-radius: 8px;
  padding: 10px;
  font-size: 12px;
`,Cr=a.default.div`
  margin-bottom: 8px;
  display: flex;
  gap: 10px;
  cursor: ${({canClick:e})=>e?"pointer":"auto"};
`,Mr=a.default.img`
  border-radius: 8px;
  width: 55px;
  height: 55px;
  object-fit: cover;
`,kr=a.default.div`
  flex-grow: 1;
`,mr=a.default.span`
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
`,Ir=a.default.span`
  color: ${({theme:e})=>e.color.SUCCESS[900]};
`,Er=a.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 3px;
`,Le=a.default.span`
  display: block;
  color: 1px solid ${({theme:e})=>e.color.PRIMARY[900]};
  span {
    font-weight: 700;
  }
`,Tr=a.default.span`
  background-color: ${({theme:e})=>e.color.SUCCESS[900]};
  border-radius: 50px;
  color: white;
  display: inline-block;
  padding: 5px 8px;
  font-weight: 500;
  font-size: 10px;
`,Dr=a.default.input`
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
`,Lr=a.default.div`
  margin-top: 8px;
`,Nr=a.default.div`
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,zr=({img:e,name:t,currencySymbol:r,total:n,unitPrice:i,quantity:l,comment:c,onClick:f,onChangeQuantity:g,onDeleteProduct:A,onChangeComment:x,discount:h,measureUnit:u,productDetails:w,renderModal:C,onlyIntegers:I})=>{const[k,M]=b.useState(!0),T=u||"u.";return o.jsxs(vr,{children:[o.jsxs(Cr,{onClick:f||(()=>{}),canClick:!!f,children:[(e==null?void 0:e.src)&&o.jsx(Mr,{...e}),o.jsxs(kr,{children:[o.jsxs(mr,{detailsActive:k,children:[t,o.jsx(wr,{size:16,onClick:z=>{z.stopPropagation(),M(S=>!S)}})]}),h&&o.jsx(Ir,{children:h.label}),o.jsxs(Er,{children:[h&&o.jsxs(Tr,{children:["-",r,h.discountedAmount.toFixed(2)]}),o.jsxs(Le,{children:[r,o.jsx("span",{children:n.toFixed(2)})]})]})]})]}),k&&o.jsxs("div",{children:[o.jsx(Dr,{value:c,onChange:z=>x(z.target.value),placeholder:"Agregar alg\xFAn comentario"}),w&&o.jsx(Lr,{children:w})]}),o.jsxs(Nr,{children:[o.jsxs(Le,{children:[r,o.jsx("span",{children:i.toFixed(2)})," x ",T]}),o.jsx(De,{value:l,onSetQuantity:g,measureUnit:T,onDelete:A,renderModal:C,onlyIntegers:I})]})]})},yr=a.default.div`
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
`,zr=a.default.div`
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
      color: ${({disabled:e,theme:t})=>e?t.color.NEUTRAL[500]:t.color.PRIMARY[900]};
      text-decoration: none;
      margin-left: 5px;
      > span {
        font-weight: 700;
      }
    }
  }
`,jr=a.default.span`
  background-color: ${({theme:e})=>e.color.SECONDARY[900]};
  border-radius: 50px;
  padding: 5px 6px;
  color: white;
  font-size: 10px;
  font-weight: 700;
`,Ne=({currencySymbol:e,unitPrice:t,total:r,measureUnit:n,discount:i,disabled:l,bottom:c})=>{const f=n||"u.";return o.jsxs(yr,{disabled:l,bottom:c,children:[o.jsxs("span",{children:[e,t.toFixed(2)," x ",f]}),o.jsxs(Sr,{disabled:l,children:[i&&o.jsxs(o.Fragment,{children:[o.jsxs("span",{children:[e,i.prevTotal.toFixed(2)]}),o.jsx(jr,{children:i.label})]}),o.jsxs("span",{children:[e,o.jsx("span",{children:r.toFixed(2)})]})]})]})},Fr=a.default.div`
  background-color: ${({disabled:e,theme:t})=>e?t.color.NEUTRAL[50]:"white"};
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
`,Br=a.default.div`
  display: flex;
  align-items: stretch;

  & > img {
    width: 75px;
    height: 88px;
    object-fit: cover;
  }
`,Ur=a.default.div`
  padding: 8px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: ${({hasDetails:e})=>e?"flex-start":"space-between"};
  gap: 5px;
`,Pr=a.default.div`
  color: ${({disabled:e,theme:t})=>e?t.color.NEUTRAL[500]:t.color.NEUTRAL[800]};
  display: flex;
  align-items: flex-start;
  gap: 5px;
  font-weight: 500;
`,Qr=a.default.div`
  color: ${({theme:e})=>e.color.NEUTRAL[500]};
  margin-top: 8px;
  font-size: 12px;
`,Yr=({name:e,img:t,quantity:r,currencySymbol:n,unitPrice:i,total:l,productDetails:c,discount:f,measureUnit:g,disabled:A})=>o.jsxs(Fr,{disabled:A,hasDetails:!!c,children:[o.jsxs(Br,{children:[(t==null?void 0:t.src)&&o.jsx("img",{...t}),o.jsxs(Ur,{hasDetails:!!c,children:[o.jsxs(Pr,{disabled:A,children:[o.jsx(se,{opacity:.4,children:r}),e]}),c&&o.jsx(Qr,{children:c}),!c&&o.jsx(Ne,{currencySymbol:n,unitPrice:i,total:l,discount:f,disabled:A})]})]}),c&&o.jsx(Ne,{currencySymbol:n,unitPrice:i,total:l,discount:f,disabled:A,bottom:!0})]}),Zr=a.default.div`
  padding: 20px;
  background: linear-gradient(#feedec 25%, #fff 25%);
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  text-align: center;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #383838;
`,Or=a.default.p`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 21px;
  color: #808080;
  margin: 15px 0;
`,Hr=a.default.div`
  margin-top: 30px;
  padding-top: 20px;
  display: flex;
  justify-content: space-around;
  gap: 10px;
  border-top: 1px solid #dfdfdf;
`,Wr=a.default.div`
  width: 3px;
  background: #dfdfdf;
`,Gr=a.default.div`
  padding: 0 20px;
`,Vr="data:image/webp;base64,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",Rr=({height:e})=>o.jsx("img",{src:Vr,height:e||45,alt:"trash"}),Jr=({children:e,icon:t=o.jsx(Rr,{height:150}),note:r="Esta acci\xF3n no se puede revertir.",btnLeft:n={onClick:()=>{},text:"Cancelar"},btnRight:i={onClick:()=>{},text:"Eliminar"}})=>o.jsxs(Zr,{children:[t,o.jsx(Gr,{children:e}),o.jsx(Or,{children:r}),o.jsxs(Hr,{children:[o.jsx(D,{design:"flat",fullWidth:!0,onClick:()=>n.onClick(),children:n.text}),o.jsx(Wr,{}),o.jsx(D,{design:"flat",fullWidth:!0,onClick:()=>i.onClick(),color:"ALERT/900",children:i.text})]})]}),Xr=a.default.div`
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
`,Kr=a.default.div`
  border-radius: 15px 15px 0 0;
  background: #f3f5ff;
  padding: 20px;
  @media screen and (min-width: 1024px) {
    padding: 50px 58px;
  }
`,qr=a.default.p`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 21px;
  color: #808080;
  margin: 5px 0 0;
`,$r=a.default.div`
  padding: 20px;
  @media screen and (min-width: 1024px) {
    display: flex;
    gap: 10px;
    flex-direction: row;
    justify-content: space-around;
    padding: 27px 29px;
  }
`,_r=a.default.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.6875rem;
  letter-spacing: -0.04em;
  color: #151e5a;
`,e0=a.default.div`
  margin: 0 15px 15px;
  background: #fff;
  border-radius: 15px;
  @media screen and (min-width: 1024px) {
    margin: 0;
  }
`;function o0(e="(min-width: 768px)"){const[t,r]=b.useState({matches:window.innerWidth>(()=>{const i=e.match(/(\d+)/);return i?i[0]:768})()});return b.useEffect(()=>{let i=window.matchMedia(e);return i.addEventListener("change",r),()=>i.removeEventListener("change",r)},[]),{status:Boolean(t&&t.matches)}}const t0=({children:e,note:t="Esta acci\xF3n no se puede revertir.",btnLeft:r={onClick:()=>{},text:"Cancelar"},btnRight:n={onClick:()=>{},text:"Eliminar"}})=>{const{status:i}=o0("(min-width: 1023px)");return o.jsxs(Xr,{children:[o.jsxs(e0,{children:[o.jsxs(Kr,{children:[o.jsx(_r,{children:e}),o.jsx(qr,{children:t})]}),o.jsxs($r,{children:[i&&o.jsx(D,{design:"flat",fullWidth:!0,onClick:()=>r.onClick(),color:"PRIMARY/900",style:{borderRadius:"32px",padding:"20px 0"},children:r.text}),o.jsx(D,{design:"solid",fullWidth:!0,onClick:()=>n.onClick(),style:{borderRadius:"32px",padding:"20px 60px"},children:n.text})]})]}),!i&&o.jsx(D,{design:"flat",fullWidth:!0,onClick:()=>r.onClick(),color:"PRIMARY/900",style:{margin:"0 15px 15px",width:"calc(100% - 30px)",padding:"20px",borderRadius:"15px"},children:r.text})]})},r0=a.default.div`
  background: transparent;
  color: #383838;
  border-radius: 20px;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5rem;

  @media ${we.md} {
    text-align: center;
  }
`,n0=a.default.div`
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
  background: #fff;
  border-radius: 15px;
`,i0=a.default.div`
  border-radius: 15px 15px 0 0;
  background: #f3f5ff;
  padding: 25px 20px;
`,a0=a.default.div`
  color: #151e5a;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.6875rem;
  letter-spacing: -0.04em;
`,l0=a.default.p`
  color: #808080;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
`,ze=a.default.div`
  padding: 20px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;

  button {
    font-size: 14px;
  }

  ${({bottom:e})=>{if(e)return s.css`
        padding: 0;
        margin: 10px 0;
        button {
          box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
        }
      `}}
`,ye=({title:e,content:t,options:r,cancelOptions:n})=>o.jsxs(r0,{children:[o.jsxs(n0,{children:[(e||t)&&o.jsxs(i0,{children:[e&&o.jsx(a0,{children:e}),t&&o.jsx(l0,{children:t})]}),r.length>0&&o.jsx(ze,{children:r.map((i,l)=>o.jsx(D,{design:"solid",shape:"circular",size:"xs",fullWidth:!0,onClick:i.onClick,disabled:i.disabled,color:i.type==="primary"?"SECONDARY/900":"QUATERNARY/200",fontColor:i.type==="primary"?"SECONDARY/0":"SECONDARY/900",style:{gap:0},children:i.content},`confirmation-option-${l}`))})]}),n.length>0&&o.jsx(ze,{bottom:!0,children:n.map((i,l)=>o.jsx(D,{design:"flat",size:"xs",fullWidth:!0,onClick:i.onClick,disabled:i.disabled,color:"PRIMARY/900",style:{gap:0},children:i.content},`cancel-option-${l}`))})]}),d0=({color:e="#4318FF"})=>o.jsxs("svg",{width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[o.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M22.53 3.47a.75.75 0 0 1 0 1.06l-10 10a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06L12 12.94l9.47-9.47a.75.75 0 0 1 1.06 0Z",fill:e}),o.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5 3.75A1.25 1.25 0 0 0 3.75 5v14A1.25 1.25 0 0 0 5 20.25h14A1.25 1.25 0 0 0 20.25 19v-7a.75.75 0 0 1 1.5 0v7A2.75 2.75 0 0 1 19 21.75H5A2.75 2.75 0 0 1 2.25 19V5A2.75 2.75 0 0 1 5 2.25h11a.75.75 0 0 1 0 1.5H5Z",fill:e})]}),c0=({color:e="#4318FF"})=>o.jsx("svg",{width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg",children:o.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5 3.75c-.69 0-1.25.56-1.25 1.25v14c0 .69.56 1.25 1.25 1.25h14c.69 0 1.25-.56 1.25-1.25V5c0-.69-.56-1.25-1.25-1.25H5ZM2.25 5A2.75 2.75 0 0 1 5 2.25h14A2.75 2.75 0 0 1 21.75 5v14A2.75 2.75 0 0 1 19 21.75H5A2.75 2.75 0 0 1 2.25 19V5Z",fill:e})}),s0=a.default.label`
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
`,A0=({children:e,value:t="value",callbackOnChange:r=()=>{},disabled:n=!1,...i})=>{const[l,c]=b.useState(!1);return b.useEffect(()=>{i.checked&&c(i.checked)},[]),o.jsxs(s0,{disabled:n,children:[o.jsx("input",{type:"checkbox",value:t,disabled:n,onChange:f=>{r(f.target.value,l&&!n),c(!l)},...i}),o.jsx("span",{children:l?o.jsx(d0,{color:n?"gray":"#4318FF"}):o.jsx(c0,{color:n?"gray":"#4318FF"})}),e]})},f0=a.default.div`
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
`,p0=({text:e,...t})=>o.jsxs(f0,{disabled:Boolean(t.disabled),children:[o.jsx("input",{type:"radio",...t}),o.jsx("label",{htmlFor:t==null?void 0:t.id,children:e})]}),h0=a.default.div`
  background-color: white;
  border: 1px solid ${({theme:e})=>e.color.PRIMARY[200]};
  opacity: ${({disabled:e})=>e?.5:1};
  border-radius: 10px;
  width: ${({fullWidth:e})=>e?"100%":"auto"};
  min-height: 48px;
  padding: 5px;
  position: relative;
  display: inline-flex;
  align-items: stretch;
  gap: 4px;

  ${({model:e})=>{if(e==="secondary")return s.css`
        border: none;
        box-shadow: 0px 10px 30px 0px #00000014;
        border-radius: 8px;
        min-height: 45px;
      `}}
`,g0=a.default.button`
  background-color: white;
  color: ${({theme:e,model:t})=>t==="secondary"?"#828282":e.color.SECONDARY[500]};
  border: none;
  border-radius: ${({model:e})=>e==="secondary"?"4px":"10px"};
  min-width: 35px;
  padding: 0 4px;
  flex-grow: 1;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  cursor: pointer;
  transition: 0.3s;

  ${({active:e})=>{if(e)return s.css`
        background-color: ${({theme:t})=>t.color.SECONDARY[900]};
        box-shadow: 0px 2px 4px 0px #00000033;
        color: #fff;
      `}}
`;a.default.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;const x0=({options:e,selected:t,disabled:r,onSelect:n,fullWidth:i,model:l})=>o.jsx(h0,{disabled:r,onClick:c=>{r&&c.stopPropagation()},model:l,fullWidth:i,children:e.map(c=>o.jsx(g0,{onClick:()=>n(c.value),active:c.value===t,disabled:r,model:l,children:c.label},c.value))}),u0=a.default.div`
  padding: ${({withDescription:e})=>e?"3px 14px 5px":"0 14px"};
  display: ${({withDescription:e})=>e?"block":"flex"};
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid ${d.color.NEUTRAL[300]};
  background: #fff;
  input {
    width: 100%;
    border: none;
    outline: none;
    padding: ${({withDescription:e})=>e?"0px 0":"12px 0"};
    background: transparent;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.3125rem;
    letter-spacing: -0.04em;
    color: ${d.color.NEUTRAL[700]};
    ::placeholder {
      color: ${d.color.NEUTRAL[500]};
    }
  }
  ${({readingMode:e})=>e&&s.css`
    border: none;
    padding: 0;
    input {
      padding: 0;
    }
  `}
  ${({disabled:e})=>Q({disabled:e})}; 
`,Se=a.default.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${({readingMode:e})=>e?"flex-start":"space-between"};
  gap: 3px;
`,b0=a.default.span`
  font-weight: 500;
  font-size: 0.625rem;
  line-height: 1.125rem;
  letter-spacing: -0.04em;
  color: ${d.color.NEUTRAL[500]};
`,je=a.default.div`
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.125rem;
  letter-spacing: -0.04em;
  color: ${d.color.NEUTRAL[500]};
`,w0=a.default.span`
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: ${d.color.PRIMARY[900]};
`,v0=({description:e,defaultValue:t,value:r,onChange:n=()=>{},placeholder:i,suffix:l,disabled:c,readingMode:f})=>o.jsxs(u0,{disabled:c,withDescription:Boolean(e),readingMode:f,children:[e&&o.jsx(b0,{children:e}),f?o.jsxs(ze,{readingMode:f,children:[o.jsx(w0,{children:t}),l&&!c&&o.jsx(je,{children:l})]}):o.jsxs(ze,{children:[o.jsx("input",{type:"text",placeholder:i,disabled:c,onChange:h=>n(h.target.value),value:r}),l&&!c&&o.jsx(je,{children:l})]})]}),C0=a.default.div`
  @media (max-width: 600px) {
    padding-bottom: 15px;
  }
`,M0=a.default.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,k0=a.default.div`
  padding: 0 20px;
  & > :nth-child(2) {
    margin-top: 5px;
  }

  svg,
  img {
    cursor: pointer;
  }
`,m0=a.default.ul`
  color: ${()=>d.color.NEUTRAL[700]};
  padding: 0;
  margin: 10px 0;
  list-style-type: none;
  font-size: 14px;
  ${({direction:e})=>e==="column"&&s.css`
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
    `}
`,G=a.default.li`
  background-color: ${({alert:e})=>e?d.color.ALERT[100]:"white"};
  color: ${({alert:e})=>e?d.color.ALERT[900]:"inherit"};
  min-height: 50px;
  padding: 0 20px;
  display: flex;
  flex-direction: ${({iconOrientation:e})=>e==="vertical"?"column-reverse":"row"};
  justify-content: ${({optionsInCenter:e})=>e?"center":"space-between"};
  align-items: center;
  gap: ${({optionsInCenter:e})=>e?"10px":"5px"};
  opacity: ${({disabled:e})=>e?.6:1};
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};

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
`,Fe=o.jsx("div",{style:{display:"inline-block"},children:o.jsx(H,{width:"20px",height:"20px"})}),I0=({options:e,onClose:t,contentLocation:r,contentLocationInDesktop:n,defaultDescription:i="",defaultTitle:l="",optionsInCenter:c=!1,direction:f="row",iconOrientation:g="horizontal"})=>{const[A,x]=b.useState(null),h=b.useMemo(()=>{if(A===null)return null;const u=e[A];if(u&&"options"in u)return u},[A,e]);return o.jsx(F,{maxWidth:"500px",padding:"20px 0",onClose:t,contentLocation:r||"bottom",contentLocationInDesktop:n||"center",closeIcon:!0,children:o.jsxs(C0,{children:[o.jsxs(k0,{children:[o.jsxs(M0,{children:[h&&o.jsx(j,{onClick:()=>x(null)}),o.jsx(E,{as:"h2",size:"md",children:(h==null?void 0:h.text)||l})]}),i.length>0&&o.jsx(E,{color:"NEUTRAL/400",size:"sm",weight:"regular",children:(h==null?void 0:h.description)||i})]}),o.jsxs(m0,{direction:f,children:[!h&&e.map((u,w)=>"onClick"in u?o.jsxs(G,{alert:u.alert,disabled:u.disabled||u.loading,onClick:()=>{!u.loading&&!u.disabled&&(u.onClick(),t())},optionsInCenter:c,iconOrientation:g,children:[o.jsx("span",{children:u.text}),u.loading?Fe:u.icon]},`option-${w}`):o.jsxs(G,{onClick:()=>{x(w)},optionsInCenter:c,children:[u.text," ",o.jsx("div",{style:{transform:"rotateY(180deg)"},children:o.jsx(j,{})})]},`option-${w}`)),h==null?void 0:h.options.map((u,w)=>o.jsxs(G,{alert:u.alert,disabled:u.disabled||u.loading,onClick:()=>{!u.loading&&!u.disabled&&u.onClick()},optionsInCenter:c,children:[u.text," ",u.loading?Fe:u.icon]},`suboption-${w}`))]})]})})},E0=({cardProps:e,...t})=>o.jsx(F,{background:"transparent",boxShadowInDesktop:"none",padding:"0 10px",contentLocation:"bottom",maxWidth:"650px",...e,children:o.jsx(ye,{...t})}),T0=(e,t=1024*8)=>{let r=!0,n=null;return e.size/1024>t&&(r=!1,n={code:"F0001",message:`El archivo ${e.name} pesa ${(e.size/1024/1024).toFixed(2)} MB. Intenta subir una imagen menor a ${t/1024} MB `}),{success:r,error:n}},V=({onSelectFile:e,maxKBSize:t,onError:r=()=>{},acceptedFiles:n,validFileExtensions:i,children:l,style:c})=>{const f=b.useRef(null),g=()=>f.current.click(),A=()=>{const w=f.current.files[0];u(w)},x=w=>{w.stopPropagation(),w.preventDefault();const C=w.dataTransfer.files[0];u(C)},h=w=>i?new RegExp(`${i.join("|")}$`,"i").exec(w.toLowerCase()):!0,u=w=>{var I;if(!w)return;if(!h(w.name)){r("Tipo de archivo no permitido");return}const C=T0(w,t);if(!C.success){r((I=C.error)==null?void 0:I.message);return}e(w)};return o.jsxs("div",{onClick:g,onDragOver:w=>w.preventDefault(),onDrop:x,style:c,children:[l,o.jsx("input",{ref:f,style:{display:"none"},onChange:A,type:"file",accept:n})]})},Be=()=>{const e=b.useRef(!0);return b.useEffect(()=>{e.current=!1},[]),e.current},Ue=a.default.button`
  border: 1px solid #fff;
  font-size: 14px;
  border-radius: 50%;
  display: flex;
  height: 34px;
  min-width: 34px;
  width: 34px;
  justify-content: center;
  background: #fff;
  align-items: center;
  text-align: center;
  color: ${({theme:e,variant:t="primary"})=>t==="primary"?e.color.SECONDARY[900]:e.color.PRIMARY[900]};
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  padding: 0;
  margin: 0;
  transition: 0.3s;
  :hover {
    box-shadow: 0px 1px 8px rgba(45, 45, 45, 0.2);
  }
`,Pe=e=>{const t=e.slice(e.lastIndexOf("/"));return[t.slice(1,t.indexOf(".")),t.slice(t.lastIndexOf(".")+1).toUpperCase()]},D0=e=>o.jsx(y,{viewBox:"0 0 10 8",...e,children:o.jsx("path",{xmlns:"http://www.w3.org/2000/svg",d:"M8.79444 1.53098C9.09821 1.24938 9.11617 0.774844 8.83457 0.471079C8.55297 0.167315 8.07843 0.149348 7.77467 0.43095L8.79444 1.53098ZM1.05554 6.65985C0.751779 6.94145 0.733813 7.41598 1.01541 7.71975C1.29702 8.02351 1.77155 8.04148 2.07532 7.75988L1.05554 6.65985ZM7.77467 7.75987C8.07844 8.04147 8.55297 8.02351 8.83457 7.71974C9.11617 7.41598 9.09821 6.94144 8.79444 6.65984L7.77467 7.75987ZM2.07532 0.430942C1.77155 0.14934 1.29702 0.167306 1.01541 0.471071C0.733813 0.774836 0.751779 1.24937 1.05554 1.53097L2.07532 0.430942ZM7.77467 0.43095L1.05554 6.65985L2.07532 7.75988L8.79444 1.53098L7.77467 0.43095ZM8.79444 6.65984L2.07532 0.430942L1.05554 1.53097L7.77467 7.75987L8.79444 6.65984Z",fill:"currentColor"})}),Qe=e=>o.jsx(y,{viewBox:"0 0 18 17",...e,children:o.jsx("path",{xmlns:"http://www.w3.org/2000/svg",d:"M1 13.6923H1.75H1ZM14.5385 16V15.25V16ZM3.46154 16V16.75H3.46154L3.46154 16ZM17 3.30772H17.75H17ZM17 13.6923H16.25H17ZM14.5385 1.00002L14.5385 0.250023L14.5385 1.00002ZM3.46154 1L3.46154 1.75L3.46154 1ZM4.69231 7.92307L5.20526 7.37592C4.91677 7.10546 4.46784 7.10546 4.17935 7.37592L4.69231 7.92307ZM12.7947 16.5472C13.0969 16.8304 13.5715 16.8151 13.8548 16.513C14.1381 16.2108 14.1228 15.7361 13.8206 15.4528L12.7947 16.5472ZM16.487 13.6625C16.7892 13.9458 17.2639 13.9305 17.5472 13.6283C17.8305 13.3262 17.8151 12.8515 17.513 12.5682L16.487 13.6625ZM13.3077 9.65384L13.8206 9.10669C13.5322 8.83623 13.0832 8.83623 12.7947 9.10669L13.3077 9.65384ZM9.92308 12.8269L9.41012 13.3741L9.92308 12.8269ZM1 11.3846H0.25H1ZM14.5385 15.25L3.46154 15.25L3.46154 16.75L14.5385 16.75V15.25ZM16.25 3.30772L16.25 13.6923H17.75L17.75 3.30772H16.25ZM14.5385 0.250023L3.46155 0.25L3.46154 1.75L14.5385 1.75002L14.5385 0.250023ZM17.75 3.30772C17.75 1.57414 16.2658 0.250026 14.5385 0.250023L14.5385 1.75002C15.5301 1.75002 16.25 2.49229 16.25 3.30772H17.75ZM1.75 3.30769C1.75 2.49226 2.46995 1.75 3.46154 1.75L3.46155 0.25C1.73419 0.249996 0.250001 1.57411 0.25 3.30769H1.75ZM0.25 13.6923C0.25 15.4259 1.73418 16.75 3.46154 16.75V15.25C2.46995 15.25 1.75 14.5077 1.75 13.6923H0.25ZM14.5385 16.75C16.2658 16.75 17.75 15.4259 17.75 13.6923H16.25C16.25 14.5077 15.53 15.25 14.5385 15.25V16.75ZM13.7885 5.03846C13.7885 5.53526 13.344 6.01923 12.6923 6.01923V7.51923C14.0798 7.51923 15.2885 6.45341 15.2885 5.03846H13.7885ZM12.6923 6.01923C12.0406 6.01923 11.5962 5.53526 11.5962 5.03846H10.0962C10.0962 6.45341 11.3048 7.51923 12.6923 7.51923V6.01923ZM11.5962 5.03846C11.5962 4.54166 12.0406 4.05769 12.6923 4.05769V2.55769C11.3048 2.55769 10.0962 3.62351 10.0962 5.03846H11.5962ZM12.6923 4.05769C13.344 4.05769 13.7885 4.54165 13.7885 5.03846H15.2885C15.2885 3.62351 14.0798 2.55769 12.6923 2.55769V4.05769ZM17.513 12.5682L13.8206 9.10669L12.7947 10.201L16.487 13.6625L17.513 12.5682ZM4.17935 8.47023L9.41012 13.3741L10.436 12.2798L5.20526 7.37592L4.17935 8.47023ZM9.41012 13.3741L12.7947 16.5472L13.8206 15.4528L10.436 12.2798L9.41012 13.3741ZM12.7947 9.10669L9.41012 12.2798L10.436 13.3741L13.8206 10.201L12.7947 9.10669ZM0.25 3.30769L0.25 11.3846H1.75L1.75 3.30769H0.25ZM0.25 11.3846L0.25 13.6923H1.75L1.75 11.3846H0.25ZM1.51296 11.9318L5.20526 8.47023L4.17935 7.37592L0.487044 10.8375L1.51296 11.9318Z",fill:"currentColor"})}),L0=a.default.div`
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
`,N0=a.default.span`
  color: ${({theme:e})=>e.color.NEUTRAL[600]};
  span {
    color: ${({theme:e})=>e.color.SECONDARY[900]};
  }
  svg {
    margin-right: 5px;
  }
`,z0=a.default.div`
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
`,y0=a.default.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,z0=a.default.div`
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
`,j0=({initialImgUrl:e,placeholder:t,onChange:r,onError:n})=>{const[i,l]=b.useState(null),[c,f]=b.useState(e||null),g=Be();return b.useEffect(()=>{let A="";return i&&(A=window.URL.createObjectURL(i),f(A)),()=>{A&&window.URL.revokeObjectURL(A)}},[i]),b.useEffect(()=>{g||r(i,c||null)},[c]),o.jsx(V,{onError:n||alert,onSelectFile:A=>l(A),acceptedFiles:"image/x-png,image/jpeg",validFileExtensions:["jpg","jpeg","png"],children:c?o.jsxs(z0,{children:[o.jsxs(y0,{children:[o.jsx("img",{src:c}),o.jsxs(S0,{children:[o.jsx("span",{children:(i==null?void 0:i.name)||Pe(c)[0]}),o.jsx("span",{children:(i==null?void 0:i.type)||Pe(c)[1]})]})]}),o.jsx(Ue,{variant:"secondary",onClick:A=>{A.stopPropagation(),l(null),f(null)},children:o.jsx(D0,{size:12})})]}):o.jsx(L0,{children:t||o.jsxs(N0,{children:[o.jsx(Qe,{color:d.color.SECONDARY[900],size:18})," Sube un imagen ",o.jsx("span",{children:"aqu\xED"})]})})})},Ye=a.default.div`
  width: 55px;
  height: 55px;
  border-radius: 7px;
`,F0=a.default.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`,B0=a.default(Ye)`
  border: 1px solid ${({theme:e})=>e.color.NEUTRAL[100]};
  position: relative;
  overflow: hidden;
  cursor: pointer;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`,U0=a.default(Ye)`
  border: 2px dashed ${({theme:e})=>e.color.SECONDARY[400]};
  color: ${({theme:e})=>e.color.SECONDARY[900]};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  cursor: pointer;
`,P0=a.default.div`
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
`,Q0=({onChange:e,initialImages:t,limit:r})=>{const[n,i]=b.useState(t||[]),[l,c]=b.useState(null),f=Be(),g=x=>{const h=window.URL.createObjectURL(x);i(u=>[...u,{file:x,url:h}])},A=x=>{const h=n[x];typeof h!="string"&&window.URL.revokeObjectURL(h.url),i(u=>u.filter((w,C)=>C!==x))};return b.useEffect(()=>{f||e(n)},[n]),o.jsxs(F0,{children:[n.map((x,h)=>o.jsxs(B0,{onMouseEnter:()=>c(h),onMouseLeave:()=>c(null),onTouchCancel:()=>c(null),children:[o.jsx("img",{src:typeof x=="string"?x:x.url}),l===h&&o.jsx(P0,{onClick:()=>A(h),children:o.jsx(Te,{size:16})})]},`imgs-${h}`)),!(r&&n.length>=r)&&o.jsx(V,{onError:alert,onSelectFile:g,acceptedFiles:"image/x-png,image/jpeg",validFileExtensions:["jpg","jpeg","png"],children:o.jsx(U0,{children:o.jsx(Qe,{})})})]})},Y0=a.default.div`
  display: grid;
  grid-template-columns: ${({gridTemplateColumns:e})=>e||"auto"};
  padding: ${({padding:e})=>e||"0"};
  gap: ${({gap:e})=>e||"0"};
  max-width: ${({maxWidth:e})=>e||"auto"};
  min-width: ${({minWidth:e})=>e||"auto"};
  margin: ${({margin:e})=>e||"0 auto"};
  .th, .td {
    font-size: 0.75rem;
    line-height: 1.125rem;
    letter-spacing: -0.04em;
  }
  .th {
    font-weight: 500;
    color: ${d.color.NEUTRAL[500]};
    padding-bottom: 8px;
    padding: 15px 10px 8px;
  }
  .td {
    font-weight: 400;
    color: ${d.color.NEUTRAL[600]};
    padding: 10px;
  }
  .tr {
    display: grid;
    grid-template-columns: ${({gridTemplateColumns:e})=>e||"auto"};
    grid-column: 1 / ${({gridTemplateColumns:e})=>{var t;return e?((t=e==null?void 0:e.split(" "))==null?void 0:t.length)+1:"auto"}};
    border-radius: 8px;
    background: ${d.color.QUATERNARY[50]};
    border: 1px solid ${d.color.QUATERNARY[300]};
    padding: 10px 0;
    margin-top: 7px;
    &:hover {
      background: ${d.color.QUATERNARY[100]};
    }
  }
  .item-center {
    margin: auto;
    text-align: center;
    justify-content: center;
  }
  .item-right {
    margin-right: 0;
    margin-left: auto;
    text-align: right;
    justify-content: flex-end;
  }
  .item-flex {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .separator {
    width: 100%;
    border-right: 1.5px solid ${d.color.QUATERNARY[300]};
  }
`,Z0=a.default.div`
  overflow-x: auto;
  ${Ie}
`,Ze=s.css`
  font-size: 0.75rem;
  line-height: 1.125rem;
  letter-spacing: -0.04em;
`,Oe=e=>{if(e==="center")return s.css`
    margin: auto;
    text-align: center;
    justify-content: center;
  `;if(e==="right")return s.css`
    margin-right: 0;
    margin-left: auto;
    text-align: right;
    justify-content: flex-end;
  `},He=e=>{if(e)return s.css`
    width: 100%;
    border-right: 1.5px solid ${d.color.QUATERNARY[300]};
  `},We=e=>{if(e)return s.css`
    display: flex;
    align-items: center;
    gap: 10px;
  `},R=e=>{if(e!=null&&e.trim())return s.css`
    grid-column: ${e};
  `},O0=a.default.div`
  ${Ze}
  font-weight: 500;
  color: ${d.color.NEUTRAL[500]};
  padding-bottom: 8px;
  padding: 15px 10px 8px;
  ${({location:e})=>Oe(e||"left")}
  ${({separator:e})=>He(Boolean(e))}
  ${({itemFlex:e})=>We(Boolean(e))}
  ${({gridColumn:e})=>R(e)}
`,H0=a.default.div`
  ${Ze}
  font-weight: 400;
  color: ${d.color.NEUTRAL[600]};
  padding: 10px;
  ${({location:e})=>Oe(e||"left")}
  ${({separator:e})=>He(Boolean(e))}
  ${({itemFlex:e})=>We(Boolean(e))}
  ${({gridColumn:e})=>R(e)}
`,W0=a.default.div`
  display: grid;
  grid-template-columns: ${({gridTemplateColumns:e})=>e||"auto"};
  grid-column: 1 / ${({gridTemplateColumns:e})=>{var t;return e?((t=e==null?void 0:e.split(" "))==null?void 0:t.length)+1:"auto"}};
  border-radius: 8px;
  background: ${d.color.QUATERNARY[50]};
  border: 1px solid ${d.color.QUATERNARY[300]};
  padding: 10px 0;
  margin-top: 7px;
  &:hover {
    background: ${d.color.QUATERNARY[100]};
  }
  ${({gridColumn:e})=>R(e)}
`,G0={Table:({gridTemplateColumns:e,maxWidth:t,minWidth:r,gap:n,padding:i,margin:l,header:c,body:f})=>o.jsx(Z0,{children:o.jsxs(Y0,{gridTemplateColumns:e,maxWidth:t,minWidth:r,gap:n,padding:i,margin:l,children:[c&&c,f&&f]})}),Th:O0,Td:H0,Tr:W0},V0=s.css`
  background: none;
  outline: none;
  border: none;
  padding: none;
  margin: none;
  cursor: pointer;
`,R0=a.default.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({padding:e})=>e||"3px 0 "};;
  box-shadow: ${d.effect.lightShadow[16]};
  color: ${d.color.PRIMARY[900]};
  background: ${d.color.PRIMARY[0]};

  position: ${({isSticky:e})=>e?"sticky":"static"};
  top: 0;
  left: 0;
  z-index: ${({zIndex:e})=>e||"5"};
  margin-bottom: ${({marginBottom:e})=>e||"0"};
`,J0=a.default.div`
  text-align: right;
  min-width: ${({minWidthForOptions:e})=>e||"auto"};
  button {
    padding: ${({paddingForOptions:e})=>e||"12px 20px"};
  }
`,X0=a.default.button`
  ${V0}
  color: ${({mode:e})=>e==="danger"?d.color.ALERT[700]:d.color.PRIMARY[900]};
  border-left: 1px solid ${d.color.NEUTRAL[200]};
  ${({isLoading:e})=>$({isLoading:e})};
  ${({disabled:e})=>Q({disabled:e})};
`,K0=({container:e,options:t,closeIcon:r})=>{var n;return o.jsxs(R0,{marginBottom:e==null?void 0:e.marginBottom,isSticky:e==null?void 0:e.isSticky,zIndex:e==null?void 0:e.zIndex,children:[r!=null&&r.hide?o.jsx("div",{}):o.jsx(Ue,{style:{marginLeft:(r==null?void 0:r.marginLeft)||"20px"},children:o.jsx(ve,{})}),o.jsx(J0,{minWidthForOptions:t.minWidth,paddingForOptions:t.padding,children:(n=t==null?void 0:t.options)==null?void 0:n.map((i,l)=>o.jsx(X0,{onClick:i.onClick,type:"button",mode:i.mode,disabled:i.disabled,children:i.text},`${l}${i.id}`))})]})},q0=a.default.div`
  display: flex;
  gap: ${({gap:e})=>e||"15px"};
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: ${({marginTop:e})=>e||"15px"};
  padding: ${({padding:e})=>e||"10px 20px"};
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.125rem;
  font-family: 'DM Sans';
  font-style: normal;
  letter-spacing: -0.04em;
  color: ${d.color.PRIMARY[900]};
  background: ${d.color.PRIMARY[0]};
  box-shadow: ${({boxShadow:e})=>e||d.effect.darkShadow[6]};
  position: ${({isFixed:e})=>e?"fixed":"static"};
  bottom: 0;
  left: 0;
  z-index: ${({zIndex:e})=>e||"5"};
`,$0=({description:e,buttons:t,container:r})=>o.jsxs(q0,{padding:r==null?void 0:r.padding,gap:r==null?void 0:r.gap,marginTop:r==null?void 0:r.marginTop,isFixed:r==null?void 0:r.isFixed,zIndex:r==null?void 0:r.zIndex,boxShadow:r==null?void 0:r.boxShadow,children:[e&&o.jsx("div",{children:e}),t==null?void 0:t.map(n=>o.jsx(D,{...n},crypto.randomUUID()))]});p.Badge=dt,p.Button=D,p.ButtonsSwitch=x0,p.Card=Ct,p.CardModal=F,p.CartProduct=zr,p.Checkbox=A0,p.ClientCard=Wt,p.CodeInput=go,p.Collapsible=Oo,p.ConfirmationCard=Jr,p.ConfirmationCardV2=t0,p.ConfirmationCardV3=ye,p.ConfirmationModalV3=E0,p.CurrentStatusCard=mt,p.CustomSelect=ne,p.DropdownMenu=$o,p.EditQuantityInput=De,p.GridTable=G0,p.Heading=Ao,p.IDCard=ar,p.IconV2=y,p.Loader=Fo,p.ModalHeader=K0,p.MultipleOptionsModal=I0,p.NoData=tt,p.OrderStatusBadge=de,p.OrderTypeBanner=pt,p.ProductDetailsCard=Yr,p.ProfileImage=zo,p.Radio=p0,p.SectionCard=Pt,p.SelectField=bo,p.SimpleFooter=$0,p.StatusBanner=wt,p.StickyHeader=Wo,p.SupplyInput=v0,p.Text=E,p.TextField=oe,p.ToastCard=_t,p.TotalsCard=jt,p.TransparentBadge=se,p.UploadFileContainer=V,p.UploadImage=j0,p.UploadMultipleImages=Q0,p.UserProfileIcon=ae,Object.defineProperties(p,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
