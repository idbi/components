import{ErrorIcon as a}from"./assets/icons/id-ErrorIcon.js";import{SuccessIcon as f}from"./assets/icons/id-SuccessIcon.js";import{WarningIcon as u}from"./assets/icons/id-WarningIcon.js";import{Warningv2Icon as s}from"./assets/icons/id-Warningv2Icon.js";import{Container as h,Title as d,Description as p,Link as C}from"./id-styles.js";import{jsxs as i,jsx as o}from"react/jsx-runtime";const l=({title:c="",description:t="",type:n,link:r,icon:e})=>i(h,{toastType:n||"primary",children:[(()=>{if(e)return e;if(n==="success")return o(f,{});if(n==="warning")return o(s,{});if(n==="error")return o(a,{});if(n==="quaternary")return o(u,{});if(n==="tertiary")return o(s,{color:"#FF82AF"})})(),i("div",{children:[c&&o(d,{children:c}),t&&i(p,{children:[t," ",r&&r.onClick&&o(C,{onClick:m=>{m.stopPropagation(),r.onClick&&r.onClick()},children:(r==null?void 0:r.text)||"Ver m\xE1s"})]})]})]});export{l as ToastCard};