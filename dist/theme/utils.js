import{css as e}from"styled-components";import{Size as l}from"../components/Typography/utils.js";import{theme as g}from"./index.js";const d=({color:t="SECONDARY/900",design:r,hover:c,theme:n=g})=>{const o=t.split("/"),a=o[0];let i=+o[1];if(c&&i>=300)switch(r){case"solid":i-=100;break;case"outline":i=100;break;case"flat":i=100;break;default:i>=400?i-=100:i+=100;break}if(c&&i<300)switch(r){case"solid":i+=100;break;case"outline":i=100;break;case"flat":i=100;break;default:i-=100;break}return a==="PRIMARY"||a==="NEUTRAL"||a==="SECONDARY"||a==="TERTIARY"||a==="QUATERNARY"||a==="STATE"||a==="ALERT"||a==="SUCCESS"?i===0||i===50||i===100||i===200||i===300||i===400||i===500||i===600||i===700||i===800||i===900?n.color[a][i]:n.color[a][900]:n.color.PRIMARY[900]},$=({shape:t})=>{switch(t){case"rounded":return e`
        border-radius: 0.625rem;
      `;case"squared":return e`
        border-radius: 0;
      `;case"circular":return e`
        border-radius: 10rem;
      `;default:return e`
        border-radius: 0.625rem;
      `}},b=({design:t,color:r,fontColor:c,theme:n})=>{switch(t){case"solid":return e`
        background-color: ${()=>d({color:r,theme:n})};
        color: ${c?d({color:c,theme:n}):"#fff"};
      `;case"outline":return e`
        background-color: white;
        border: 1px solid ${()=>d({color:r,theme:n})};
        color: ${()=>d({color:r,theme:n})};
      `;case"flat":return e`
        background-color: white;
        border: none;
        color: ${()=>d({color:r,theme:n})};
      `;case"link":return e`
        background-color: transparent;
        border: none;
        color: ${()=>d({color:r,theme:n})};

        &:hover {
          color: ${()=>d({color:r,hover:!0,theme:n})};
          text-decoration: underline;
        }
      `;default:return e`
        background-color: ${()=>d({color:r,theme:n})};
        color: #fff;
      `}},k=({fullWidth:t})=>t?e`
      width: 100%;
    `:e`
    width: auto;
  `,S=({disabled:t})=>t?e`
      cursor: not-allowed;
      opacity: 0.5;
    `:e`
    cursor: pointer;
    opacity: 1;
  `,x=({size:t="sm"})=>e`
    font-size: ${l[t]||t};
  `,R=({align:t})=>t?e`
      text-align: ${t};
    `:e`
    text-align: left;
  `,A=t=>{let r="";return t.m&&(r+=`
      margin-top: ${t.m};
      margin-bottom: ${t.m};
      margin-left: ${t.m};
      margin-right: ${t.m};
    `),t.mb&&(r+=`
      margin-bottom: ${t.mb};
    `),t.mt&&(r+=`
      margin-top: ${t.mt};
    `),t.ml&&(r+=`
      margin-left: ${t.ml};
    `),t.mr&&(r+=`
      margin-right: ${t.mr};
    `),t.mx&&(r+=`
      margin-left: ${t.mx};
      margin-right: ${t.mx};
    `),t.my&&(r+=`
      margin-top: ${t.my};
      margin-bottom: ${t.my};
    `),t.p&&(r+=`
      padding-top: ${t.p};
      padding-bottom: ${t.p};
      padding-left: ${t.p};
      padding-right: ${t.p};
    `),t.pb&&(r+=`
      padding-bottom: ${t.pb};
    `),t.pt&&(r+=`
      padding-top: ${t.pt};
    `),t.pl&&(r+=`
      padding-left: ${t.pl};
    `),t.pr&&(r+=`
      padding-right: ${t.pr};
    `),t.px&&(r+=`
      padding-left: ${t.px};
      padding-right: ${t.px};
    `),t.py&&(r+=`
      padding-top: ${t.py};
      padding-bottom: ${t.py};
    `),e`
    ${r}
  `};export{d as getColor,b as getDesign,S as getDisabled,k as getFullWidth,$ as getShape,x as getSize,A as getSpacing,R as getTextAlign};
