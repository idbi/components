import n,{css as c}from"styled-components";const e=r=>r==="success"?c`
      color: ${({theme:o})=>o.color.SUCCESS[900]};
      background: ${({theme:o})=>o.color.SUCCESS[100]};
    `:r==="warning"?c`
      color: ${({theme:o})=>o.color.STATE[900]};
      background: ${({theme:o})=>o.color.STATE[100]};
    `:r==="error"?c`
      color: ${({theme:o})=>o.color.ALERT[700]};
      background: ${({theme:o})=>o.color.ALERT[100]};
    `:r==="quaternary"?c`
      color: ${({theme:o})=>o.color.QUATERNARY[900]};
      background: ${({theme:o})=>o.color.QUATERNARY[100]};
    `:r==="tertiary"?c`
      color: ${({theme:o})=>o.color.TERTIARY[900]};
      background: ${({theme:o})=>o.color.TERTIARY[100]};
    `:c`
    color: ${({theme:o})=>o.color.PRIMARY[900]};
    background: ${({theme:o})=>o.color.PRIMARY[100]};
  `,i=n.div`
  padding: 10px 15px;
  display: flex;
  align-items: center;
  gap: 15px;
  ${({toastType:r})=>e(r)}
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
`,l=n.p`
  font-weight: 700;
  font-size: 0.625rem;
  line-height: 0.9375rem;
`,a=n.p`
  font-weight: 400;
  font-size: 0.625rem;
  line-height: 0.9375rem;
`,s=n.span`
  color: ${({theme:r})=>r.color.SECONDARY[900]};
  text-decoration: underline;
  cursor: pointer;
`;export{i as Container,a as Description,s as Link,l as Title};
