import styled from "styled-components";

export const RadioContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  gap: 6px;
  align-items: center;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color.SECONDARY[100]};
  position: relative;

  label {
    position: absolute;
    padding: 14px 45px;
    padding-right: 14px;
    width: 100%;
    color: ${({ theme }) => theme.color.NEUTRAL[700]};
    font: normal 16px "Poppins";
    font-weight: 400;
    letter-spacing: -0.04em;
    border-radius: 8px;
    cursor: pointer;
  }

  input[type="radio"] {
    -webkit-appearance: none !important;
    background-color: #fff;
    border: 2px solid ${({ theme }) => theme.color.SECONDARY[900]};
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
    padding: 9px;
    border-radius: 50px;
    display: inline-block;
    margin: 0;
    margin-left: 13px;

    &:checked::before {
      content: "";
      display: block;
      width: calc(100% + 2px);
      height: calc(100% + 2px);
      position: absolute;
      top: -1px;
      left: -1px;
      border-radius: 8px;
      border: 1.5px solid ${({ theme }) => theme.color.SECONDARY[900]};
      cursor: pointer;
    }

    &:checked:after {
      content: " ";
      width: 14px;
      height: 14px;
      border-radius: 50px;
      position: absolute;
      top: 17px;
      left: 17px;
      background: ${({ theme }) => theme.color.SECONDARY[900]};
      text-shadow: 0px;
      font-size: 32px;
    }

    &:checked {
      background-color: #fff;
      border: 2px solid ${({ theme }) => theme.color.SECONDARY[900]};
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05),
        inset 15px 10px -12px rgba(255, 255, 255, 0.1), inset 0px 0px 10px rgba(0, 0, 0, 0.1);
    }

    &:active,
    &:checked:active {
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px 1px 3px rgba(0, 0, 0, 0.1);
    }
  }
`;
