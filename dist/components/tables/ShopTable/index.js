import{IdiShopTable as p}from"../../../icons/IdiShopTable.js";import{BsCheckCircle as d}from"react-icons/bs";import{Container as f,Counter as C,Table as t,tableColor as S,tableColorStroke as a,Label as k}from"./styles.js";import{jsxs as i,jsx as l}from"react/jsx-runtime";const j=({onClick:n,uuid:c,label:r,status:o="available",counter:e=0,noCounter:h=!1,noHover:m=!1})=>i(f,{children:[h?null:i(C,{status:o,occupied:e>0,children:[e,e>0?l(d,{size:14}):null]}),i(t,{onClick:()=>n&&n(c),status:o,noHover:m,children:[l(p,{size:98,color:S[o],colorStroke:a[o]}),l(k,{status:o,length:(r==null?void 0:r.length)||0,children:r})]})]});export{j as ShopTable};
