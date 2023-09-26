import r from"styled-components";const t=r.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  align-items: center;
  overflow: visible;

  & > * {
    position: relative;
    &:not(:last-child) {
      margin-left: ${({size:e})=>e*-.33}px;
    }
  }
`,i=r.button`
  background-color: transparent;
  color: ${({theme:e})=>e.color.SECONDARY[900]};
  border: 1px dashed ${({theme:e})=>e.color.SECONDARY[200]};
  border-radius: 50%;
  width: ${({size:e})=>e}px;
  height: ${({size:e})=>e}px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (hover: hover) {
    cursor: pointer;
  }
`;export{i as AddUserBtn,t as Container};
