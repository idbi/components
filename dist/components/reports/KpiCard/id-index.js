import{Skeleton as d}from"../../skeleton/id-styles.js";import{formatNumber as C}from"../../../utils/id-formatNumber.js";import{IconPER as x}from"../../../icons/flags-icons/IconPER/id-index.js";import{IconUSA as a}from"../../../icons/flags-icons/IconUSA/id-index.js";import{Container as F,Title as s,Body as t,Money as h,Footer as f,QuantitySection as I}from"./id-styles.js";import{jsx as r,jsxs as n,Fragment as u}from"react/jsx-runtime";const T=({title:g,total_PEN:c,total_USD:o,tip_PEN:e,tip_USD:i,main:w,loading:y,autoWidth:$,noDecimals:v=!1,containerStyle:R,quantity:m,big:p})=>{const l=j=>C(j,v?0:2);return r(F,{main:w,autoWidth:$,style:R,children:y?n("div",{children:[r(s,{children:r(d,{width:"150px",height:"16px"})}),n(t,{children:[n(h,{style:{marginRight:"30px"},children:[r(x,{})," ",r("span",{children:r(d,{width:"50px",height:"16px"})})]}),n(h,{children:[r(a,{})," ",r("span",{children:r(d,{width:"50px",height:"16px"})})]})]}),r(f,{children:r(d,{width:"150px",height:"16px"})})]}):n(u,{children:[m&&n(I,{children:[r(s,{children:m.title}),r(t,{children:r(h,{big:p,children:m.value})})]}),n("div",{children:[r(s,{children:g||""}),n(t,{children:[c&&c>0?n(h,{style:{marginRight:"30px"},big:p,children:[r(x,{})," ",r("span",{children:l(c)})]}):null,o&&o>0?n(h,{big:p,children:[r(a,{})," ",r("span",{children:l(o)})]}):null]}),r(f,{children:e&&e>0||i&&i>0?n(u,{children:[r("span",{children:"Propina: "}),e&&e>0?n("span",{children:[" ",` S/${l(e)}`]}):null,i&&i>0?n("span",{children:[" ",` $/${l(i)}`]}):null]}):null})]})]})})};export{T as KpiCard};