import t from"styled-components";const o=t.div`
  padding-right: 5px;
  margin: ${({bottom:e})=>e?"0 10px 8px":0};
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 500;
`,s=t.div`
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
      color: ${({theme:e,disabled:n})=>n?e.color.NEUTRAL[500]:e.color.PRIMARY[900]};
      text-decoration: none;
      margin-left: 5px;
      font-size: 14px;
      > span {
        font-weight: 700;
      }
    }
  }
`,a=t.span`
  border-radius: 50px;
  color: #24a159;
  font-size: 12px;
  font-weight: 600;
`,l=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  & > span {
    flex-shrink: 0;
    > span {
      font-weight: 700;
    }
  }
`,p=t.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;
  width: 100%;
  padding: 4px 0;
  color: #cc688c;

  & > span {
    font-size: 12px;
    font-weight: 500;
  }
`;export{l as Content,p as DetailTag,o as Footer,a as Patch,s as TotalPrices};
