import{Container as o}from"./id-styles.js";import{jsx as n}from"react/jsx-runtime";const r={default:"...",draft:"Borrador",pending:"Pendiente",rejected:"Rechazado",accepted:"Aceptado",canceled:"Anulado",preparing:"Preparando",readyforpickup:"Listo para recojo",delivered:"Entregado",finished:"Finalizado"},s=({statusName:e,text:t,removeBackground:a})=>n(o,{statusName:e,removeBackground:a,children:t||(d=>r[d]||r.default)(e)});export{s as OrderStatusBadge};