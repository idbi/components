import e from"styled-components";const i=e.div`
  margin: 15px auto;
  height: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  input {
    border: 1px solid
      ${({theme:o,disabled:t})=>t?o.color.NEUTRAL[300]:o.color.SECONDARY[900]};
    border-radius: 5px;
    font: 400 14px Poppins;
    height: 100%;
    width: 50px;
    color: ${({theme:o})=>o.color.NEUTRAL[500]};
    outline: none;
    padding: 0 5px;
    text-align: center;

    /* Chrome, Safari, Edge, Opera */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    &[type="number"] {
      -moz-appearance: textfield;
    }
  }

  p {
    font-size: 14px;
    font-family: Poppins;
    opacity: 0.6;
    margin: 0 5px;
    weight: 400;
  }
`,n=e.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 5px;
  width: 33px;
  height: 100%;
  cursor: pointer;
  transition: all 0.2s;
  border: ${({showBorderColor:o,theme:t})=>o?"1px solid #BFBFBF":`1px solid ${t.color.SECONDARY[900]}`};

  &:hover {
    background: ${({theme:o})=>o.color.NEUTRAL[50]} !important;
    border-color: ${({theme:o})=>o.color.SECONDARY[900]};
  }

  svg > path {
    fill: ${({showIconColor:o,theme:t})=>o?"#BFBFBF":t.color.SECONDARY[900]};
  }
`;export{n as Button,i as Container};
