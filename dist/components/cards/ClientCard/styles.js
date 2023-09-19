import o from"styled-components";const r=o.div`
  background-color: white;
  color: ${({theme:i})=>i.color.PRIMARY[900]};
  border: 1px solid ${({theme:i})=>i.color.NEUTRAL[200]};
  border-radius: 10px;
  padding: 11px 12px;
  display: flex;
  align-items: center;
  font-size: 14px;
`,l=o.div`
  margin-right: 10px;
  flex-shrink: 0;
`,n=o.div`
  flex-grow: 1;
`,p=o.div`
  color: ${({theme:i})=>i.color.NEUTRAL[700]};
  margin-bottom: 3px;
  display: flex;
  flex-wrap: wrap;
  gap: 1px 7px;

  span {
    display: inline-flex;
    align-items: center;
    gap: 3px;
    line-height: 1em;
    :not(:last-child) {
      padding-right: 5px;
      border-right: 1px solid ${({theme:i})=>i.color.NEUTRAL[700]};
    }
  }
`,t=o.span`
  display: block;
  font-weight: 500;
  line-height: 1em;
`;o.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-grow: 1;
  flex-shrink: 0;
  padding: 0 3px;

  svg {
    font-size: 14px;
    color: ${({theme:i})=>i.color.SECONDARY[900]};
    @media (hover: hover) {
      cursor: pointer;
    }
  }
`;export{r as Card,p as DataFields,l as ImgWrapper,n as Main,t as Name};
