import styled from "styled-components";

interface IRadioContainer {
  disabled: boolean;
}

export const RadioContainer = styled.div<IRadioContainer>`
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 9px;
  cursor: pointer;

  label {
    width: 100%;
    font: normal 16px "Poppins";
    letter-spacing: -0.04em;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 500;
    font-size: 0.8125rem;
    line-height: 1.25rem;
    color: ${({ disabled }) => (disabled ? "gray" : "#242954")};
  }

  input[type="radio"] {
    -webkit-appearance: none !important;
    border: 2px solid
      ${({ disabled, theme }) =>
        disabled ? "gray" : theme.color.SECONDARY[900]};
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
    padding: 9px;
    border-radius: 50px;
    display: inline-block;
    margin: 3px 0 0;
    cursor: pointer;

    &:checked:after {
      content: " ";
      width: 14px;
      height: 14px;
      border-radius: 50px;
      position: absolute;
      top: 7px;
      left: 4px;
      // SECONDARY[900]
      background: ${({ disabled, theme }) =>
        disabled ? "gray" : theme.color.SECONDARY[900]};
      text-shadow: 0px;
      font-size: 32px;
    }
  }
`;
