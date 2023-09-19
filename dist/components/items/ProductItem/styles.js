import t from"styled-components";const r=t.div`
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 7px;
`,e=t.img`
  border: 1px solid ${({theme:o})=>o.color.NEUTRAL[300]};
  border-radius: 8px;
  width: 33px;
  height: 33px;
  object-fit: cover;
`,p=t.div`
  color: ${({theme:o})=>o.color.PRIMARY[900]};
  font-size: 14px;
  font-weight: 700;

  & > div {
    color: ${({theme:o})=>o.color.NEUTRAL[500]};
    margin-bottom: -3px;
    font-size: 10px;
    font-weight: 400;

    span {
      font-weight: 700;
      padding-right: 3px;
    }
  }
`;export{r as Container,p as ItemData,e as ItemImg};
