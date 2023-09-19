import n from"styled-components";const t=n.div`
  background-color: white;
  border: 1px solid ${({theme:o})=>o.color.NEUTRAL[300]};
  border-radius: 8px;
  padding: 6px 11px 5px;
`,i=n.input`
  background-color: transparent;
  color: inherit;
  border: none;
  min-width: 0;
  width: auto;
  padding: 0;
  flex-grow: 1;
  font-size: inherit;

  :focus {
    outline: none;
  }
  ::placeholder {
    color: ${({theme:o})=>o.color.NEUTRAL[400]};
  }
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    display: none;
  }
`;export{t as Container,i as Input};
