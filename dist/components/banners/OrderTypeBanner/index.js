import{Container as n}from"./styles.js";import a from"./assets/delivery.js";import c from"./assets/pickup.js";import m from"./assets/ontable.js";import{jsxs as d,jsx as r}from"react/jsx-runtime";const g=({type:o,message:i,children:e})=>d(n,{children:[o==="on-table"?r("img",{src:m,alt:"on table",height:55}):o==="delivery"?r("img",{src:a,alt:"delivery",height:55}):o==="on-room"||o==="pick-up"?r("img",{src:c,alt:"pick up",height:55}):"",i?r("p",{children:i}):r("p",{children:o==="on-table"?"Pedido para consumo en mesa":o==="delivery"?"Pedido para entrega a domicilio":o==="on-room"||o==="pick-up"?"Pedido para recojo en tienda":""}),e]});export{g as OrderTypeBanner};
