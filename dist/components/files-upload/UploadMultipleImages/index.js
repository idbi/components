import{useState as c,useEffect as I}from"react";import{PictureIcon as j}from"../../../icons-v2/PictureIcon/index.js";import{TrashIcon as L}from"../../../icons-v2/TrashIcon/index.js";import U from"../../../hooks/useFirstRender.js";import{UploadFileContainer as w}from"../UploadFileContainer/index.js";import{Container as x,ImgWrapper as R,Cover as C,Placeholder as F}from"./styles.js";import{jsxs as a,jsx as r}from"react/jsx-runtime";const O=({onChange:m,initialImages:p,limit:s})=>{const[t,i]=c(p||[]),[d,n]=c(null),g=U(),f=e=>{const o=window.URL.createObjectURL(e);i(l=>[...l,{file:e,url:o}])},u=e=>{const o=t[e];typeof o!="string"&&window.URL.revokeObjectURL(o.url),i(l=>l.filter((v,h)=>h!==e))};return I(()=>{g||m(t)},[t]),a(x,{children:[t.map((e,o)=>a(R,{onMouseEnter:()=>n(o),onMouseLeave:()=>n(null),onTouchCancel:()=>n(null),children:[r("img",{src:typeof e=="string"?e:e.url,alt:""}),d===o&&r(C,{onClick:()=>u(o),children:r(L,{size:16})})]},`imgs-${o}`)),!(s&&t.length>=s)&&r(w,{onError:alert,onSelectFile:f,acceptedFiles:"image/x-png,image/jpeg",validFileExtensions:["jpg","jpeg","png"],children:r(F,{children:r(j,{})})})]})};export{O as UploadMultipleImages};
