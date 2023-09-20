import{useState as y,useRef as v}from"react";import{useOnClickOutside as A}from"../../hooks/useOnClickOutside.js";import{AiOutlineMenu as L}from"react-icons/ai";import{IdiLogo as z}from"../../icons/IdiLogo.js";import{IdiBell as R}from"../../icons/IdiBell.js";import{ArrowIcon as $}from"../../icons-v2/ArrowIcon/index.js";import{UserProfileIcon as g}from"../image-containers/UserProfileIcon/index.js";import{Search as j}from"../Search/index.js";import{Container as B,Header as H,FlexContainer as S,HeaderOptions as U,HeaderLinks as E,UserInfo as P,Body as T,NotificactionsBody as D}from"./styles.js";import"../Typography/TextBuilder/index.js";import{jsxs as d,jsx as t}from"react/jsx-runtime";import{Text as N}from"../Typography/Text/index.js";const F=({option:e,onClose:C,subOptions:i=[]})=>{const[f,m]=y(!1);return d("li",{onClick:()=>{i.length>0?m(!f):(e.onClick(),C())},children:[d("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[e.text," ",i.length>0&&t($,{size:12,style:{display:"block",marginLeft:"auto",marginRight:"0",transform:f?"":"rotate(-90deg)"}})]}),f&&i.length>0&&t("ul",{children:i.map((a,r)=>t("li",{onClick:()=>{a.onClick(),C()},children:a.text},`${r}sub${e.key}`))})]})},O=({options:e=[],links:C=[],userIcon:i,searchOption:f,logoIcon:m,bellIcon:a,zIndex:r,isSticky:s})=>{const[w,h]=y(!1),[n,k]=y(!1),p=v(null);return A(p,()=>{h(!1),k(!1)}),d(B,{zIndex:r,isSticky:s,ref:p,children:[d(H,{children:[d(S,{children:[e.length>0&&t(L,{size:20,color:"#151E5A",onClick:()=>{k(!1),h(!w)},style:{cursor:"pointer"}}),m!=null&&m.onClick?t(z,{size:28,onClick:()=>{h(!1),k(!1),m==null||m.onClick()}}):t(z,{size:28})]}),d(U,{children:[t(E,{children:C.map((l,x)=>t("li",{onClick:()=>(l==null?void 0:l.onClick)&&(l==null?void 0:l.onClick()),children:l.text},`${x}navbarlinksfordesktop`))}),(f==null?void 0:f.show)&&t(j,{...f,onSearch:l=>f.onSearch(l)}),(a==null?void 0:a.show)&&t(R,{size:16,onClick:()=>{a!=null&&a.onClick&&a.onClick(),h(!1),k(!n)}}),(i==null?void 0:i.show)&&d(S,{children:[((i==null?void 0:i.name)||(i==null?void 0:i.note))&&d(P,{children:[(i==null?void 0:i.name)&&t(N,{children:i==null?void 0:i.name}),(i==null?void 0:i.note)&&t(N,{color:"NEUTRAL/500",size:"xs",as:"span",children:i==null?void 0:i.note})]}),t(g,{initials:(i==null?void 0:i.initials)||"ID",img:(i==null?void 0:i.img)||null,size:35,containerProps:{onClick:()=>{i!=null&&i.onClick&&(h(!1),k(!1),i.onClick())},style:i!=null&&i.onClick?{cursor:"pointer"}:{}}})]})]})]}),w&&t(T,{children:t("ul",{children:e.map((l,x)=>t(F,{option:l.option,subOptions:l.subOptions,onClose:()=>h(!w)},`${x}navbaroption`))})}),n&&t(D,{children:a==null?void 0:a.children})]})};export{O as Navbar};
