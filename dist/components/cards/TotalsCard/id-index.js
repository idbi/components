import{Container as u,Header as U,Title as k,Action as f,List as x,Item as g,ItemInfo as a,Img as C,Quantity as D,Notes as e,Amount as j}from"./id-styles.js";import{jsxs as o,jsx as n}from"react/jsx-runtime";const B=({items:s,title:d="",onAction:h=()=>{},actionName:l="",hideQuantity:i=!1,children:p,gap:t=10,background:y,padding:I})=>o(u,{background:y,padding:I,children:[(d||l)&&o(U,{children:[n(k,{children:d}),n(f,{onClick:()=>h(),children:l})]}),n(x,{style:{gap:t},children:s.map(r=>o(g,{remark:Boolean(r.remark),children:[i?o(a,{children:[o("div",{children:[n("span",{children:r.description}),r.notes&&n(e,{children:r.notes.map(c=>n("li",{children:c},crypto.randomUUID()))})]}),r==null?void 0:r.decorators]}):o(a,{children:[r.img&&n(C,{src:r.img,alt:r.description}),n(D,{children:r.quantity}),o("div",{children:[n("span",{children:r.description}),r.notes&&n(e,{children:r.notes.map(c=>n("li",{children:c},crypto.randomUUID()))})]}),r==null?void 0:r.decorators]}),o(j,{remark:Boolean(r.remark),children:[r.currency," ",r.amount.toFixed(2)]})]},crypto.randomUUID()))}),p]});export{B as TotalsCard};
