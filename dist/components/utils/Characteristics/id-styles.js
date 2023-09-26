import e from"styled-components";const i=e.div`
  color: ${({theme:o})=>o.color.NEUTRAL[800]};
  display: flex;
  justify-content: space-between;
  gap: 5px;
  font-size: 12px;
`,n=e.div`
  display: flex;
  flex-direction: ${({revert:o})=>o?"column-reverse":"column"};
`,l=e.span`
  display: block;
  font-size: 14px;
  font-weight: 500;
`,s=e.div`
  color: ${({theme:o})=>o.color.NEUTRAL[500]};
`;export{s as Aside,i as Container,n as Main,l as Title};
