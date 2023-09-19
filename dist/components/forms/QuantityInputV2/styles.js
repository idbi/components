import t from"styled-components";const n=t.div`
  min-width: 134px;
  width: ${({fullWidth:e})=>e?"100%":"auto"};
  display: inline-flex;
  align-items: center;
  gap: 4px;
`,i=t.button`
  background-color: transparent;
  color: ${({theme:e})=>e.color.SECONDARY[900]};
  border-radius: 5px;
  border: none;
  height: 30px;
  min-width: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 0 auto;
  padding: 2px 5px;
  font-size: 30px;
  font-weight: 500;

  :disabled {
    opacity: 0.45;
  }
  @media (hover: hover) {
    cursor: pointer;
    :disabled {
      cursor: not-allowed;
    }
  }
`,r=t.div`
  color: ${({theme:e})=>e.color.NEUTRAL[600]};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-size: 17px;
  font-weight: 500;
  flex-grow: 0.5;
`;export{i as Btn,n as Container,r as Label};
