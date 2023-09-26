import n,{css as r}from"styled-components";const p=n.span`
  padding: ${({padding:o})=>o||"4px 10px "};
  border-radius: ${({borderRadius:o})=>o||"8px"};
  font-family: "Poppins";
  font-style: normal;
  font-weight: ${({weigth:o})=>o||"600"};
  font-size: 0.75rem;
  line-height: 1.125rem;
  letter-spacing: -0.04em;
  background: ${({theme:o,background:e})=>e||o.color.STATUS.DEFAULT[0]};
  color: ${({theme:o,color:e})=>e||o.color.STATUS.DEFAULT[1]};
  max-width: ${({maxWidth:o})=>o||"auto"};
  ${({applyFlex:o})=>o&&r`
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 5px;
    `}

${({theme:o,withBorder:e,color:t})=>e&&r`
      border: 1px solid ${t||o.color.STATUS.DEFAULT[1]};
    `}
`;export{p as Container};
