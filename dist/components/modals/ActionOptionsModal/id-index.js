import{CardModal as l}from"../CardModal/id-index.js";import{Header as m,OptionsContainer as s,Option as p}from"./id-styles.js";import{jsxs as o,jsx as r}from"react/jsx-runtime";const b=({title:d,options:t,onClose:n,closeOnAction:e,modalProps:c={}})=>o(l,{onClose:n,closeIcon:!0,contentLocation:"bottom",padding:"20px",maxWidth:"600px",...c,children:[r(m,{children:d}),r(s,{children:t.map((i,a)=>o(p,{disabled:i.disabled,onClick:()=>{i.disabled||(i.onClick(),e&&n())},children:[i.icon," ",i.content]},`modal-option-${a}`))})]});export{b as ActionOptionsModal};