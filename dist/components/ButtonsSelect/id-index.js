import{Card as c,Title as s,ButtonsContainer as a,Btn as u}from"./id-styles.js";import{jsxs as i,jsx as r}from"react/jsx-runtime";const b=({title:l,options:d,selected:n,onSelect:t})=>i(c,{children:[l&&r(s,{children:l}),r(a,{children:d.map(e=>r(u,{selected:e.value===n,onClick:()=>t(e.value,e),disabled:!!e.disabled,children:e.content},`${e.value}-btn`))})]});export{b as ButtonsSelect};