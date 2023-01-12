import { theme } from "@/theme";
import styled from "styled-components";

interface IContainer {
  disabled: boolean;
}

export const Container = styled.div<IContainer>`
  margin: 15px auto;
  height: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    border: 0;
    border-radius: 5px;
    width: 33px;
    height: 100%;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background: ${theme.color.NEUTRAL[50]} !important;
    }
  }

  input {
    border: 1px solid
      ${({ disabled }) =>
        disabled ? theme.color.NEUTRAL[300]: theme.color.SECONDARY[900]};
    border-radius: 5px;
    font: 400 14px Poppins;
    height: 100%;
    width: 50px;
    color: ${theme.color.NEUTRAL[500]};
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
`;
