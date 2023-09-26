import{styleScroll as l}from"../../../theme/id-scroll.js";import i,{css as r}from"styled-components";const s=i.div`
  display: grid;
  grid-template-columns: ${({gridTemplateColumns:t})=>t||"auto"};
  padding: ${({padding:t})=>t||"0"};
  gap: ${({gap:t})=>t||"0"};
  max-width: ${({maxWidth:t})=>t||"auto"};
  min-width: ${({minWidth:t})=>t||"auto"};
  margin: ${({margin:t})=>t||"0 auto"};
  .th, .td {
    font-size: 0.75rem;
    line-height: 1.125rem;
    letter-spacing: -0.04em;
  }
  .th {
    font-weight: 500;
    color: ${({theme:t})=>t.color.NEUTRAL[500]};
    padding-bottom: 8px;
    padding: 15px 10px 8px;
  }
  .td {
    font-weight: 400;
    color: ${({theme:t})=>t.color.NEUTRAL[600]};
    padding: 10px;
  }
  .tr {
    display: grid;
    grid-template-columns: ${({gridTemplateColumns:t})=>t||"auto"};
    grid-column: 1 / ${({gridTemplateColumns:t})=>{var o;return t?((o=t==null?void 0:t.split(" "))==null?void 0:o.length)+1:"auto"}};
    border-radius: 8px;
    background: ${({theme:t})=>t.color.QUATERNARY[50]};
    border: 1px solid ${({theme:t})=>t.color.QUATERNARY[300]};
    padding: 10px 0;
    margin-top: 7px;
    &:hover {
      background: ${({theme:t})=>t.color.QUATERNARY[100]};
    }
  }
  .item-center {
    margin: auto;
    text-align: center;
    justify-content: center;
  }
  .item-right {
    margin-right: 0;
    margin-left: auto;
    text-align: right;
    justify-content: flex-end;
  }
  .item-flex {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .separator {
    width: 100%;
    border-right: 1.5px solid ${({theme:t})=>t.color.QUATERNARY[300]};
  }
`,x=i.div`
  overflow-x: auto;
  ${l}
`,n=r`
  font-size: 0.75rem;
  line-height: 1.125rem;
  letter-spacing: -0.04em;
`,a=t=>{if(t==="center")return r`
    margin: auto;
    text-align: center;
    justify-content: center;
  `;if(t==="right")return r`
    margin-right: 0;
    margin-left: auto;
    text-align: right;
    justify-content: flex-end;
  `},c=t=>{if(t)return r`
    width: 100%;
    border-right: 1.5px solid ${({theme:o})=>o.color.QUATERNARY[300]};
  `},d=t=>{if(t)return r`
    display: flex;
    align-items: center;
    gap: 10px;
  `},e=t=>{if(t!=null&&t.trim())return r`
    grid-column: ${t};
  `},$=i.div`
  ${n}
  font-weight: 500;
  color: ${({theme:t})=>t.color.NEUTRAL[500]};
  padding-bottom: 8px;
  padding: 15px 10px 8px;
  ${({location:t})=>a(t||"left")}
  ${({separator:t})=>c(Boolean(t))}
  ${({itemFlex:t})=>d(Boolean(t))}
  ${({gridColumn:t})=>e(t)}
`,h=i.div`
  ${n}
  font-weight: 400;
  color: ${({theme:t})=>t.color.NEUTRAL[600]};
  padding: 10px;
  ${({location:t})=>a(t||"left")}
  ${({separator:t})=>c(Boolean(t))}
  ${({itemFlex:t})=>d(Boolean(t))}
  ${({gridColumn:t})=>e(t)}
`,f=i.div`
  display: grid;
  grid-template-columns: ${({gridTemplateColumns:t})=>t||"auto"};
  grid-column: 1 / ${({gridTemplateColumns:t})=>{var o;return t?((o=t==null?void 0:t.split(" "))==null?void 0:o.length)+1:"auto"}};
  border-radius: 8px;
  background: ${({theme:t})=>t.color.QUATERNARY[50]};
  border: 1px solid ${({theme:t})=>t.color.QUATERNARY[300]};
  padding: 10px 0;
  margin-top: 7px;
  &:hover {
    background: ${({theme:t})=>t.color.QUATERNARY[100]};
  }
  ${({gridColumn:t})=>e(t)}
`;export{s as Container,x as MobileContainer,h as Td,$ as Th,f as Tr};
