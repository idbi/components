import e from"styled-components";const i=e.div`
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
`,r=e.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  gap: 2px 5px;

  & > span {
    :first-child {
      color: #6c757d;
      font-size: 12px;
      font-weight: 500;
      text-decoration: line-through;
    }
    :last-child {
      color: ${({theme:t,disabled:o})=>o?t.color.NEUTRAL[500]:t.color.PRIMARY[900]};
      text-decoration: none;
      margin-left: 5px;
      > span {
        font-weight: 700;
      }
    }
  }
`,a=e.span`
  border-radius: 50px;
  color: #24a159;
  font-size: 12px;
  font-weight: 600;
`;export{i as Footer,a as Patch,r as TotalPrices};
