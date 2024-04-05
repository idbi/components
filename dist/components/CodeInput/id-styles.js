import r from"styled-components";const i=r.div`
  display: grid;
  grid-template-columns: repeat(${o=>o.length}, 1fr);
  grid-gap: 22px;
  align-items: center;
  /* Chrome, Safari, Edge, Opera */
  > input {
    text-align: center;
    width: 100%;
    flex-grow: 1;
    border: none;
    outline: none;
    width: 45px;
    height: 45px;
    border: 1px solid
      ${({theme:o,errorMessage:e,success:n})=>e?o.color.ALERT[900]:n?o.color.SUCCESS[900]:o.color.NEUTRAL[300]};
    border-radius: 8px;
    background: #fff;
    font: normal 16px "Poppins";
    letter-spacing: -0.04em;
    color: ${({theme:o})=>o.color.NEUTRAL[700]};
    transition: background 0.3s ease-out;
    transition: border 0.3s ease-out;

    &:disabled {
      cursor: not-allowed;
      background-color: ${({theme:o})=>o.color.NEUTRAL[100]};
      color: ${({theme:o})=>o.color.NEUTRAL[500]};
    }

    &:focus {
      border-color: ${({theme:o})=>o.color.QUATERNARY[900]};
    }
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`,a=r.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;export{a as CodeInputContainer,i as InputsContainer};
