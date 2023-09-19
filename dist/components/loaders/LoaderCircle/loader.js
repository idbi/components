import"react";import r,{keyframes as t}from"styled-components";import{jsx as e}from"react/jsx-runtime";const o=t`
  100% {
    transform: rotate(360deg);
  }
`,d=r.div`
  display: block;
  margin: ${i=>i.margin||"25% auto"};
  width: ${i=>i.width||"100%"};
  height: ${i=>i.height||"100%"};
  border: ${i=>i.borderWidth||"0.25em"} solid rgba(0, 0, 0, 0.1);
  border-top-color: #03a7e5;
  border-radius: 50%;
  animation: ${o} 1s infinite linear;
`,m=i=>e(d,{width:i.width,height:i.height,borderWidth:i.borderWidth,margin:i.margin});export{m as default};
