import o from"styled-components";const t=o.div`
  display: flex;
  align-items: center;
  gap: 15px;
`,e=o.div`
  border-top: ${({thickness:i})=>i}px solid currentColor;
  min-width: ${({minWidth:i})=>i}px;
  flex-grow: 1;
`;export{t as Container,e as Division};
