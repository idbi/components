import{Button as l}from"../../Button/id-index.js";import{Container as s,SubCard as t,Header as c,Description as p,Note as x,Options as u}from"./id-styles.js";import{useMediaQueryScreen as m}from"../../../hooks/id-useMediaQueryScreen.js";import{jsxs as d,jsx as e}from"react/jsx-runtime";const g=({children:o,note:a="Esta acci\xF3n no se puede revertir.",btnLeft:i={onClick:()=>{},text:"Cancelar",disabled:!1},btnRight:r={onClick:()=>{},text:"Eliminar",disabled:!1}})=>{const{status:n}=m("(min-width: 1023px)");return d(s,{children:[d(t,{children:[d(c,{children:[e(p,{children:o}),e(x,{children:a})]}),d(u,{children:[n&&e(l,{design:"flat",fullWidth:!0,onClick:()=>i.onClick(),color:"PRIMARY/900",style:{borderRadius:"32px",padding:"20px 0"},disabled:i.disabled,children:i.text}),e(l,{design:"solid",fullWidth:!0,onClick:()=>r.onClick(),style:{borderRadius:"32px",padding:"20px 60px"},disabled:r.disabled,children:r.text})]})]}),!n&&e(l,{design:"flat",fullWidth:!0,onClick:()=>i.onClick(),color:"PRIMARY/900",style:{margin:"0 15px 15px",width:"calc(100% - 30px)",padding:"20px",borderRadius:"15px"},children:i.text})]})};export{g as ConfirmationCardV2};