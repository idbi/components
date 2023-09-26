import i from"styled-components";const n=i.div`
  background-color: white;
  border: 1px solid
    ${({theme:o,alert:r})=>r?o.color.ALERT[900]:o.color.NEUTRAL[300]};
  border-radius: 5px;
  opacity: ${({disabled:o})=>o?.6:1};
  width: ${({fullWidth:o})=>o?"100%":"auto"};
  padding: 0 12px;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  box-sizing: border-box;
  * {
    box-sizing: border-box;
  }

  input {
    border: none;
    color: ${({theme:o})=>o.color.NEUTRAL[800]};
    min-height: ${({minHeight:o})=>o}px;
    min-width: 30px;
    flex-grow: 1;
    font-size: 14px;
    padding: 0;

    :focus {
      outline: none;
    }
    ::placeholder {
      color: ${({theme:o})=>o.color.NEUTRAL[400]};
    }
  }

  & > svg {
    flex-shrink: 0;
  }
`;export{n as Container};
