import{CardWrapper as h}from"./id-styles.js";import{jsxs as p,jsx as r}from"react/jsx-runtime";const f=({design:m="primary",header:l,options:d,optionsFormatter:e,content:a,withSeparator:c})=>p(h,{design:m,withSeparator:c,children:[l&&r("header",{children:l}),d&&e&&r("ul",{children:d.map(i=>r("li",{children:e(i)},i.value))}),a&&a]});export{f as Card};