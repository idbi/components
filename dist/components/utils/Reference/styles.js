import t from"styled-components";const i=t.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  span {
    display: block;
  }
`,n=t.div`
  color: ${({theme:o})=>o.color.QUATERNARY[900]};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`,r=t.span`
  color: ${({theme:o})=>o.color.NEUTRAL[600]};
  margin-top: -3px;
  font-size: 12px;
`;export{i as Container,r as Description,n as Reference};
