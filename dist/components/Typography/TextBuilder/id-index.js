import s from"styled-components";import{baseStyles as r,customStyles as m,tagsMap as n}from"./id-styles.js";import{jsx as p}from"react/jsx-runtime";const c=s.div`
  ${r}
  ${({as:t})=>m(t)}
`,d=({as:t,...o})=>{const e=n[t];return p(c,{as:e,...o})};export{d as TextBuilder};
