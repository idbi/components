import p from"styled-components";const i=p.div`
  width: 100%;
  display: flex;
  gap: 6px;
  align-items: center;
  border-radius: 8px;
  border: 1px solid
    ${({isActive:o,theme:r})=>o?r.color.SECONDARY[900]:r.color.SECONDARY[100]};
  background: #fff;
  position: relative;
  box-sizing: border-box;

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  label {
    padding: 14px;
    width: 100%;
    color: ${({theme:o})=>o.color.NEUTRAL[700]};
    font: normal 16px "Poppins";
    font-weight: 400;
    letter-spacing: -0.04em;
    border-radius: 8px;
    cursor: pointer;
  }

  input[type="radio"] {
    -webkit-appearance: none !important;
    background-color: #fff;
    border: 2px solid ${({theme:o})=>o.color.SECONDARY[900]};
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
      inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
    padding: 9px;
    border-radius: 50px;
    display: inline-block;
    position: relative;
    margin: 0;
    margin-left: 13px;

    &:checked:after {
      content: " ";
      width: 14px;
      height: 14px;
      border-radius: 50px;
      position: absolute;
      top: 2px;
      left: 2px;
      background: ${({theme:o})=>o.color.SECONDARY[900]};
      text-shadow: 0px;
      font-size: 32px;
    }

    &:checked {
      background-color: #fff;
      border: 2px solid ${({theme:o})=>o.color.SECONDARY[900]};
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
        inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05),
        inset 15px 10px -12px rgba(255, 255, 255, 0.1),
        inset 0px 0px 10px rgba(0, 0, 0, 0.1);
    }

    &:active,
    &:checked:active {
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
        inset 0px 1px 3px rgba(0, 0, 0, 0.1);
    }
  }
`;export{i as Container};
