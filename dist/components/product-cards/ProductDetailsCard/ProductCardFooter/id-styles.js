import o from"styled-components";const i=o.div`
  padding-right: 5px;
  margin: ${({bottom:t})=>t?"0 10px 8px":0};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;

  & > span {
    flex-shrink: 0;
    > span {
      font-weight: 700;
    }
  }
`,r=o.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  gap: 2px 5px;

  & > span {
    :first-child {
      color: ${({theme:t})=>t.color.NEUTRAL[500]};
      font-weight: 500;
      text-decoration: line-through;
    }
    :last-child {
      color: ${({theme:t,disabled:e})=>e?t.color.NEUTRAL[500]:t.color.PRIMARY[900]};
      text-decoration: none;
      margin-left: 5px;
      > span {
        font-weight: 700;
      }
    }
  }
`,p=o.span`
  background-color: ${({theme:t})=>t.color.SECONDARY[900]};
  border-radius: 50px;
  padding: 5px 6px;
  color: white;
  font-size: 10px;
  font-weight: 700;
`;export{i as Footer,p as Patch,r as TotalPrices};
