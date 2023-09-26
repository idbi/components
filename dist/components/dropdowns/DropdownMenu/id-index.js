import{useState as m,useEffect as d}from"react";import{useFloating as g,autoUpdate as h}from"@floating-ui/react-dom";import w from"styled-components";import x from"../../../icons/DownArrowIcon/id-index.js";import{MultipleOptionsDropdown as v}from"../MultipleOptionsDropdown/id-index.js";import{useOnClickOutside as M}from"../../../hooks/id-useOnClickOutside.js";import{jsxs as k,jsx as t}from"react/jsx-runtime";const y=w.div`
  display: flex;
  cursor: pointer;
  text-align: right;
  * {
    margin-left: auto;
    margin-right: 0;
  }
`,S=({options:s,activator:c,header:l})=>{const{x:o,y:n,reference:u,floating:p,strategy:a,update:f,refs:e}=g({placement:"bottom-end"}),[r,i]=m(!1);return d(()=>{if(!(!e.reference.current||!e.floating.current))return h(e.reference.current,e.floating.current,f)},[r,f]),M(e.reference,()=>{i(!1)}),k("div",{ref:u,children:[t(y,{onClick:()=>i(!r),children:c||t(x,{size:25})}),r&&t("div",{ref:p,style:{position:a,top:n!=null?n:0,left:o!=null?o:0,zIndex:100},onClick:()=>i(!r),children:t(v,{options:s,header:l})})]})};export{S as DropdownMenu};
