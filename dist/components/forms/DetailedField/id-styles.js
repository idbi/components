import t from"styled-components";const e=t.div`
  color: ${({theme:o})=>o.color.NEUTRAL[600]};
  font-size: 14px;

  [data-light] {
    color: ${({theme:o})=>o.color.NEUTRAL[500]};
  }
`,i=t.label`
  display: block;
  font-size: 10px;
`,l=t.div`
  display: flex;
  align-items: center;
  gap: ${({spacing:o=3})=>`${o}px`};
`,s=t.span`
  flex-shrink: 0;
  font-size: 12px;
`;export{s as Aside,e as Container,i as Label,l as MainContent};
