import{Container as m,styledTitle as h,Group as a}from"./id-styles.js";import"../Typography/TextBuilder/id-index.js";import{jsx as l,jsxs as x}from"react/jsx-runtime";import{Text as f}from"../Typography/Text/id-index.js";const u=({sections:p})=>l(m,{children:p.map((r,d)=>x("div",{children:[l(f,{as:"p",weight:"bold",style:h,children:r==null?void 0:r.title}),l(a,{children:r==null?void 0:r.children})]},`${d}${r==null?void 0:r.key}`))});export{u as Separator};