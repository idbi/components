import e,{css as t}from"styled-components";const s=e.div`
  display: flex;
  justify-content: center;
`,c=e.span`
  color: ${({theme:o,isZero:r,error:i=!1})=>r?i?o.color.ALERT[900]:o.color.NEUTRAL[500]:o.color.PRIMARY[900]};
  text-align: center;
  padding: 0 8px;
  min-width: 6ch;
`,a=e.span`
  display: flex;
  justify-content: center;
  align-items: center;
`,l=e.div`
  background-color: ${({theme:o})=>o.color.NEUTRAL[50]};
  border-radius: 100px;
  padding: 3px;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 13px;
  opacity: ${o=>o.isDisabled?.5:1};
  transition: 0.3s ease-out;
  width: fit-content;
  align-self: flex-end;
  border: ${({theme:o,error:r=!1})=>r?`1px solid ${o.color.ALERT[900]}`:"1px solid transparent"};

  @media (hover: hover) {
    :hover {
      transition: 0.3s ease-in;
      background-color: white;
      box-shadow: 0px 1px 6px rgba(60, 60, 60, 0.2);
      cursor: ${o=>o.isDisabled?"auto":"pointer"};
      color: ${o=>o.theme.color.SECONDARY[900]};
    }
  }

  @media (max-width: 850px) {
    background-color: white;
    box-shadow: 0px 1px 6px rgba(60, 60, 60, 0.2);
  }
`,d=e.button`
  background-color: ${({theme:o})=>o.color.SECONDARY[900]};
  border: none;
  color: white;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s ease-out;
  font-size: 16px;

  @media (hover: hover) {
    :hover:not(:disabled) {
      cursor: pointer;
      background-color: ${({theme:o,alert:r})=>r?"initial":o.color.SECONDARY[700]};
      transition: 0.3s ease-in;
    }
  }

  :disabled {
    background-color: white;
    border: 1px solid ${({theme:o})=>o.color.NEUTRAL[400]};
    color: ${({theme:o})=>o.color.NEUTRAL[400]};
  }

  ${({alert:o})=>o&&t`
      background-color: white;
      border: 1px solid ${({theme:r})=>r.color.ALERT[900]};
      color: ${({theme:r})=>r.color.ALERT[900]};
    `}

  ${({card:o})=>o&&t`
      width: 42px;
      height: 40px;
      font-size: 18px;
    `}
`;export{d as ActionButton,s as Container,a as IconWrapper,l as InputContainer,c as Span};
