import a from"../../hooks/id-useCodeInput.js";import{WithAnimation as u}from"../../utils/id-WithAnimation.js";import"../Typography/TextBuilder/id-index.js";import{jsxs as h,jsx as t}from"react/jsx-runtime";import{Text as l}from"../Typography/Text/id-index.js";import{CodeInputContainer as f,InputsContainer as s}from"./id-styles.js";const m="code-input-container",w=({id:n,value:p,length:i=4,errorMessage:o,success:c,onChange:e=()=>{},...d})=>(a(e,n,p,m),h(f,{id:m,children:[t(s,{length:i,success:c,errorMessage:o,children:Array.from({length:i}).map((x,r)=>t("input",{id:r.toString(),className:n,maxLength:1,...d},r))}),o&&t(u,{shouldAppear:Boolean(o),children:t(l,{size:"xs",weight:"light",color:"ALERT/900",children:o})})]}));export{w as CodeInput};
