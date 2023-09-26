import o,{css as p}from"styled-components";const n=o.div`
  box-shadow: 0 10px 30px 0 rgb(0 0 0 / 8%);
  border-radius: 15px;
  min-height: 90px;
  padding: 7px;
  display: flex;
  flex-direction: column;
  letter-spacing: -0.04em;
`,d=o.div`
  display: flex;
  align-items: center;
  padding: 6px 10px;
`,l=o.div`
  color: ${({theme:e})=>e.color.NEUTRAL[800]};
  font-size: 14px;
  font-weight: 500;

  ${({inner:e})=>e&&p`
      color: ${({theme:i})=>i.color.NEUTRAL[500]};
      font-size: 14px;
    `}
`,r=o.div`
  border-top: 1px solid ${({theme:e})=>e.color.NEUTRAL[200]};
  flex-grow: 1;
  display: flex;
  padding: 7px 0 0;

  > :nth-child(n + 2) {
    border-left: 1px solid ${({theme:e})=>e.color.NEUTRAL[200]};
    padding-left: 17px;
  }
`,x=o.div`
  padding: 0 10px;
  flex: 1 1 0;
`,s=o.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px 10px;
`,c=o.div`
  color: #1b2559;
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  font-weight: 500;
  flex-grow: 1;
`,a=o.div`
  width: 100%;
`;export{c as AmountWrapper,n as Card,s as InnerSections,x as Section,r as SectionsContainer,a as SkeletonWrapper,l as Title,d as TopSection};
