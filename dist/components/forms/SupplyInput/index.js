import{Container as S,Description as a,SubContainer as c,Value as j,Suffix as l}from"./styles.js";import{jsxs as o,jsx as n}from"react/jsx-runtime";const D=({description:e,defaultValue:p,value:i,onChange:u=()=>{},placeholder:m,suffix:r,disabled:t,readingMode:h})=>o(S,{disabled:t,withDescription:Boolean(e),readingMode:h,children:[e&&n(a,{children:e}),h?o(c,{readingMode:h,children:[n(j,{children:p}),r&&!t&&n(l,{children:r})]}):o(c,{children:[n("input",{type:"text",placeholder:m,disabled:t,onChange:C=>u(C.target.value),value:i}),r&&!t&&n(l,{children:r})]})]});export{D as SupplyInput};
