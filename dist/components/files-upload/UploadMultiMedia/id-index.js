import{useState as g}from"react";import{IdiTrash as T}from"../../../icons/id-IdiTrash.js";import"../../Typography/TextBuilder/id-index.js";import{jsxs as l,Fragment as w,jsx as m}from"react/jsx-runtime";import{Text as M}from"../../Typography/Text/id-index.js";import{theme as R}from"../../../theme/id-index.js";import{UploadMedia as U}from"../UploadMedia/id-index.js";import{Files as j}from"./id-styles.js";const I=({initialImgUrl:s,placeholder:p,onChange:a,onRemove:d,onError:c,acceptedFiles:h,validFileExtensions:u})=>{const[e,i]=g([]),x=(t,o)=>{var n;const r=e.filter((y,F)=>t!==F);i(r),d((n=o==null?void 0:o.file)!=null?n:null,o==null?void 0:o.localURL,r)};return l(w,{children:[m(U,{initialImgUrl:s,placeholder:p,onChange:(t,o)=>{let r=[];r=[...e,{file:t,localURL:o}],t!==null&&i(r),a(t,o,r)},onError:c,acceptedFiles:h,validFileExtensions:u,noDisplay:!0}),m(j,{children:e==null?void 0:e.map((t,o)=>{var r;return l("li",{children:[m(M,{size:"xs",weight:"light",as:"p",color:"NEUTRAL/800",children:(r=t.file)==null?void 0:r.name}),m(T,{size:15,onClick:()=>x(o,t),color:R.color.ALERT[900],style:{minWidth:"15px"}})]},`${o}uploadmultimedia`)})})]})};export{I as UploadMultiMedia};
