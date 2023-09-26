import{getTextAlign as d,getSpacing as b}from"../../../theme/id-utils.js";import{css as r}from"styled-components";import{FontWeight as S,Size as $,DefaultSizes as m}from"../id-utils.js";const M={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",p:"p",li:"li",span:"span",strong:"strong",label:"label"},N=r`
  display: inline-block;
  font-family: "Poppins";
  font-style: normal;
  line-height: 24px;
  letter-spacing: -0.04rem;
  ${({align:t})=>d({align:t})}
  ${({m:t,mb:s,mt:i,mr:h,ml:l,my:n,mx:e,p:a,pb:o,pt:g,pr:f,pl:p,py:u,px:c})=>b({m:t,mb:s,mt:i,mr:h,ml:l,my:n,mx:e,p:a,pb:o,pt:g,pr:f,pl:p,py:u,px:c})};
`,P=t=>{const s=t==="h1"||t==="h2"||t==="h3"||t==="h4"||t==="h5"||t==="h6",i=s?"bold":"medium",h=s?m[t]:m.text,l="PRIMARY/900";return r`
    font-weight: ${({weight:n=i})=>S[n]||"500"};
    font-size: ${({size:n=h})=>$[n]||n};
    color: ${({theme:n,color:e=l})=>{const a=e==null?void 0:e.split("/")[0],o=Number(e==null?void 0:e.split("/")[1]);return n.color[a][o]}};
  `};export{N as baseStyles,P as customStyles,M as tagsMap};
