import{Container as f,Title as t}from"./id-styles.js";import{IconWarning as n}from"../../../icons/IconWarning/id-index.js";import{IconClock as m}from"../../../icons/IconClock/id-index.js";import{IconBag as a}from"../../../icons/IconBag/id-index.js";import{IconTruck as h}from"../../../icons/IconTruck/id-index.js";import{IconPreparing as g}from"../../../icons/IconPreparing/id-index.js";import{jsxs as c,jsx as e,Fragment as r}from"react/jsx-runtime";const x={default:e(r,{children:" "}),draft:e(r,{children:" "}),pending:e(m,{}),rejected:e(n,{}),accepted:e(a,{color:"#4318FF"}),canceled:e(n,{}),preparing:e(g,{color:"#F79E1B"}),readyforpickup:e(h,{color:"#FF82AF"}),delivered:e(a,{color:"#2DC96F"}),finished:e(r,{children:" "})},p={default:{title:"...",description:""},draft:{title:"Tu pedido es borrador",description:""},pending:{title:"Tu pedido est\xE1 en pendiente aprobaci\xF3n",description:"Te notificaremos cuando tu pedido sea aceptado"},rejected:{title:"El local ha rechazado tu pedido",description:"\xA1No te quedes con las ganas! Haz un nuevo pedido aqu\xED"},accepted:{title:"El local acept\xF3 tu pedido",description:"En un momento comenzaremos a preparar tu pedido"},canceled:{title:"El local ha anulado tu pedido",description:"\xA1No te quedes con las ganas! Haz un nuevo pedido aqu\xED"},preparing:{title:"Estamos preparando tu pedido",description:"Te notificaremos cuando tu pedido este listo"},readyforpickup:{title:"\xA1Pedido listo! ",description:"Ya puedes recoger tu pedido. \xA1Que lo disfrutes!"},delivered:{title:"Disfruta tu pedido",description:"\xA1Gracias por ordenar!"},finished:{title:"Pedido finalizado",description:""}},z=({status:o,title:i="default",description:d="default",icon:l,radius:u,children:s})=>c(f,{statusName:o,radius:u,children:[l||x[o],(i==="default"||d==="default"||i.length>1||d.length>1)&&c("div",{children:[i==="default"?e(t,{children:p[o].title}):e(t,{children:i}),d==="default"?e("p",{children:p[o].description}):e("p",{children:d})]}),s]});export{z as StatusBanner};