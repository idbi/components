import a from"react";import i from"../../../images/id-photo-item.js";import{Container as l,ItemImg as c,ItemData as d}from"./id-styles.js";import{jsxs as e,jsx as o}from"react/jsx-runtime";const v=({name:n,sku:r,img:t})=>e(l,{children:[t!==!1&&((m=>a.isValidElement(m))(t)?t:o(c,{src:t||i})),e(d,{children:[r&&e("div",{children:[o("span",{children:"SKU"}),r]}),n]})]});export{v as ProductItem};