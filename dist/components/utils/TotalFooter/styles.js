import t,{css as n}from"styled-components";const s=t.div`
  display: flex;
  flex-direction: ${({reverse:e})=>e?"row-reverse":"row"};
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  font-size: 14px;
`,r=t.div`
  font-weight: ${({bold:e})=>e?700:500};

  span {
    font-weight: 700;
  }
`,c=t.span`
  ${({light:e})=>e&&n`
      color: ${({theme:o})=>o.color.NEUTRAL[500]};
      font-size: 12px;
    `}
`;export{c as Aside,s as Container,r as Price};
