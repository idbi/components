import t,{css as e}from"styled-components";const r=t.div`
  display: flex;
  align-items: center;
  gap: 7px;

  ${({right:o})=>o&&e`
      flex-direction: row-reverse;
    `}
`,n=t.div`
  color: ${({theme:o})=>o.color.NEUTRAL[600]};
  font-size: 16px;
  font-weight: 500;

  & > div {
    color: ${({theme:o})=>o.color.NEUTRAL[500]};
    margin-top: -3px;
    font-size: 14px;
    font-weight: 400;
  }

  ${({aside:o})=>o&&e`
      text-align: right;
      font-size: 12px;

      & > div {
        font-size: 12px;
      }
    `}
`;export{r as Container,n as UserData};
