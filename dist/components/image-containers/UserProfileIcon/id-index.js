import{ImgContainer as s}from"./id-styles.js";import{jsx as e}from"react/jsx-runtime";const a=({img:r,size:t=36,initials:o,containerProps:{style:n,...p}={}})=>{const c=o.slice(0,2).toUpperCase();return e(s,{hasImg:!(r!=null&&r.src),style:{width:`${t}px`,minWidth:`${t}px`,height:`${t}px`,fontSize:`${t/(o.length===1?2:2.25)}px`,...n||{}},...p,children:r!=null&&r.src?e("img",{...r}):c})};export{a as UserProfileIcon};
