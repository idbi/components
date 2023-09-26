import e from"styled-components";const t=e.div`
  background-color: white;
  border: 1px solid ${({theme:o})=>o.color.NEUTRAL[300]};
  border-radius: 8px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;

  &[data-focused="true"] {
    border-color: ${({theme:o})=>o.color.QUATERNARY[700]};
  }
  &[data-disabled="true"] {
    opacity: 0.5;
  }
`,i=e.textarea`
  box-sizing: border-box;
  border: none;
  max-height: ${({maxHeight:o="unset"})=>o};
  height: 38px;
  flex-grow: 1;
  padding: 10px 0;
  display: block;
  resize: none;
  font-size: inherit;
  overflow: auto;

  ::placeholder {
    color: ${({theme:o})=>o.color.NEUTRAL[300]};
  }
  :focus {
    outline: none;
  }
`;export{t as Container,i as Textarea};
