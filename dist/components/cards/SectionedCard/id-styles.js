import r from"styled-components";const e=r.div`
  background-color: white;
  border: 1px solid ${({theme:o})=>o.color.QUATERNARY[400]};
  box-shadow: ${({theme:o})=>o.effect.darkShadow[6]};
  border-radius: 8px;
  font-size: 14px;

  & > *:first-child {
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
  }
  & > *:last-child {
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }
`,d=r.div`
  padding: 13px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 7px;
`,i=r(d)`
  color: ${({theme:o})=>o.color.NEUTRAL[600]};
  background-color: ${({theme:o})=>o.color.QUATERNARY[100]};
`,p=r.div`
  color: ${({theme:o})=>o.color.NEUTRAL[800]};
  padding: 15px 20px;
`,c=r(d)`
  border-top: 1px solid ${({theme:o})=>o.color.NEUTRAL[200]};
`;export{p as Body,e as Card,c as Footer,i as Header};
