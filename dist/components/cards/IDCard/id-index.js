import{Container as x,IconContainer as I,ItemPhoto as f,Id as u,Name as C}from"./id-styles.js";import j from"./assets/id-photo-item.js";import{jsxs as i,jsx as p}from"react/jsx-runtime";const y=({type:n="SKU",id:s,name:t,decorator:h,img:l})=>i(x,{children:[(h==null?void 0:h.component)&&p(I,{padding:h==null?void 0:h.padding,children:h==null?void 0:h.component}),l&&p(f,{src:l!=null&&l.url?l==null?void 0:l.url:j,alt:(t==null?void 0:t.text)||"item"}),i("div",{children:[i(u,{children:[p("strong",{children:n})," ",s]}),p(C,{style:{fontWeight:(t==null?void 0:t.weight)||"500"},children:t==null?void 0:t.text})]})]});export{y as IDCard};
