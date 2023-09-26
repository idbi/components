import r,{css as t}from"styled-components";const e=r.div`
  box-shadow: 0px 1px 10px rgba(98, 98, 98, 0.2);
  display: inline-block;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
`,n=r.div`
  color: ${({theme:o})=>o.color.NEUTRAL[700]};
  margin: 3px 8px;
  font-size: 12px;
  font-weight: 500;
`,l=r.div`
  box-shadow: 0px 1px 10px rgba(98, 98, 98, 0.2);
  min-height: 46px;
  display: flex;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  overflow: hidden;
`,p=r.button`
  background-color: white;
  color: ${({theme:o})=>o.color.NEUTRAL[400]};
  border: none;
  min-width: 46px;
  padding: 3px 5px;
  font-size: 14px;

  &:not(:first-child) {
    border-left: 1px solid ${({theme:o})=>o.color.NEUTRAL[100]};
  }
  &:disabled {
    opacity: 0.5;
  }

  @media (hover: hover) {
    &:not(:disabled):hover {
      color: ${({theme:o})=>o.color.SECONDARY[900]};
      cursor: pointer;
    }
  }

  ${({selected:o})=>o&&t`
      background-color: ${({theme:i})=>i.color.QUATERNARY[900]};
      color: white;
      :hover {
        color: white !important;
      }
    `}
`;export{p as Btn,l as ButtonsContainer,e as Card,n as Title};
