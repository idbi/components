import{useState as p,useEffect as d}from"react";import{IconChecked as i}from"../../../icons/IconChecked/id-index.js";import{IconNotChecked as l}from"../../../icons/IconNotChecked/id-index.js";import{Label as u}from"./id-styles.js";import{jsxs as C,jsx as e}from"react/jsx-runtime";const j=({children:k,value:m="value",callbackOnChange:a=()=>{},disabled:h=!1,...c})=>{const[o,n]=p((c==null?void 0:c.checked)||!1);return d(()=>{n(Boolean(c==null?void 0:c.checked))},[c==null?void 0:c.checked]),C(u,{disabled:h,children:[e("input",{...c,type:"checkbox",value:m,disabled:h,onChange:f=>{n(!o),a(f.target.value,!o)},checked:o}),e("span",{children:o?e(i,{}):e(l,{})}),k]})};export{j as Checkbox};
