import{EditQuantityInput as d}from"../../forms/EditQuantityInput/index.js";import{Container as j,Discount as y,GrayFront as D,GrayOverlay as b,Img as f,Code as v,Info as F,Name as G,Description as N,DisabledMessage as k,PriceNumber as w,PriceSymbol as E}from"./styles.js";import O from"../../../assets/defaultProduct.js";import{jsxs as c,jsx as l}from"react/jsx-runtime";const H=({img:r,name:u,description:s,code:h,discount:a,price:o,style:x,quantityInput:t,maxWidth:C="",onClick:P=()=>{},disabled:n=!1,disabledMessage:e})=>c(j,{maxWidth:C,disabled:n,style:x,onClick:S=>{n||(S.stopPropagation(),P())},children:[a?l(y,{children:a}):null,n?l(D,{}):null,l(b,{}),!(r!=null&&r.src)&&!(r!=null&&r.srcSet)?l(f,{src:O,alt:r==null?void 0:r.alt,style:{objectFit:"cover"}}):l(f,{src:r==null?void 0:r.src,srcSet:r==null?void 0:r.srcSet,alt:r==null?void 0:r.alt}),h?l(v,{children:h}):null,c(F,{children:[l(G,{children:u}),s?l(N,{children:s}):null,e?l(k,{children:e}):null,o&&!e?c(w,{children:[l(E,{children:o==null?void 0:o.symbol}),o==null?void 0:o.amount]}):null]}),t!=null&&t.show?l(d,{...t,styleContainer:{position:"absolute",right:"10px",bottom:"10px"},disabled:n}):null]});export{H as SimpleProductCard};
