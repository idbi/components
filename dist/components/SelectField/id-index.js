import{theme as e}from"../../theme/id-index.js";import g from"react-select";import"../Typography/TextBuilder/id-index.js";import{jsxs as h,jsx as t}from"react/jsx-runtime";import{Text as x}from"../Typography/Text/id-index.js";import{Skeleton as R}from"../skeleton/id-styles.js";import{Container as S}from"./id-styles.js";const b={control:(o,r)=>({...o,minHeight:"45px",borderRadius:10,backgroundColor:"#ffffff",border:`1px solid ${r.isFocused?e.color.QUATERNARY[900]:e.color.NEUTRAL[300]}`,boxShadow:"none",cursor:"pointer"}),singleValue:o=>({...o,color:e.color.PRIMARY[900],fontWeight:400,fontSize:"0.875rem",fontFamily:"Poppins",fontStyle:"normal"}),placeholder:o=>({...o,color:e.color.NEUTRAL[500]}),indicatorSeparator:o=>({...o,display:"none",padding:0}),indicatorsContainer:o=>({...o,"> div":{padding:"0",paddingRight:"10px"}}),valueContainer:o=>({...o,padding:0,paddingLeft:"15px"})},L=({formatOptionLabel:o,options:r,loading:n=!1,style:l,firstOption:a={label:"Seleccione una opci\xF3n",value:""},initialValue:d,value:s,onChange:c,isMulti:p,placeholder:f,label:i})=>{const m=a,u=[...r];return h(S,{style:l,children:[i&&t(x,{as:"label",align:"left",size:"sm",color:"NEUTRAL/700",children:i}),n?t(R,{style:{borderRadius:10,display:"block"},height:"45px",width:"100%"}):t(g,{placeholder:f,value:s||void 0,defaultValue:d||m,options:u,onChange:c,styles:b,isMulti:p,formatOptionLabel:o})]})};export{L as SelectField};