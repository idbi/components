import styled, { css } from "styled-components";
import { BaseButton } from "@/components/button";
import checkedIcon from "../static/svg/checkbox/checked.svg";
import nonCheckedIcon from "../static/svg/checkbox/nonChecked.svg";

type CheckboxProps = {
  checked?: boolean;
};

export const Checkbox = styled(BaseButton)<CheckboxProps>`
  flex-shrink: 0;
  height: 24px !important;
  width: 24px !important;
  background: url(${nonCheckedIcon}) !important;
  transition: background 0.3s ease-out;
  ${(props) => {
    if (props.checked) {
      return css`
        background: url(${checkedIcon}) !important;
      `;
    }
  }}
  :disabled {
    filter: grayscale(1) opacity(0.3);
  }
`;

const sideCircle = 12;
const sideRing = 20;

type CustomRadioButtonProps = {
  readonly isActive: boolean;
};

export const RadioButton = styled(BaseButton)<CustomRadioButtonProps>`
  position: relative;
  cursor: pointer;
  width: ${sideRing}px;
  height: ${sideRing}px;
  padding: 0;
  ::before {
    position: absolute;
    content: "";
    width: ${sideCircle}px;
    height: ${sideCircle}px;
    border-radius: 50%;
    background-color: ${(props) =>
      props.isActive ? props.theme.color.SECONDARY[900] : "transparent"};
    left: ${(sideRing - sideCircle) / 2}px;
    top: ${(sideRing - sideCircle) / 2}px;
  }
  ::after {
    position: absolute;
    content: "";
    width: ${sideRing}px;
    height: ${sideRing}px;
    border-radius: 50%;
    border: 2.5px solid ${(props) => props.theme.color.SECONDARY[900]};
    left: 0;
    top: 0;
  }
`;

export const Label = styled.label<{ mb?: number }>`
  display: inline-block;
  color: ${(props) => props.theme.color.NEUTRAL[700]};
  font-size: 14px;
  font-weight: 500;
  margin-bottom: ${(props) => `${props.mb ?? 0}px`};
`;
type InputProps = {
  readonly full?: boolean;
  readonly hasError?: boolean;
};
export const Input = styled.input<InputProps>`
  font-weight: 400;
  padding: 12px;
  border-radius: 8px;
  font-size: 14px;
  border: 1px solid
    ${(props) =>
      props.hasError
        ? props.theme.color.ALERT[900]
        : props.theme.color.NEUTRAL[300]};
  outline: none;
  :focus {
    border-color: ${(props) =>
      props.hasError
        ? props.theme.color.ALERT[900]
        : props.theme.color.NEUTRAL[500]};
  }
  width: ${(props) => (props.full ? "100%" : "auto")};
`;

export const InputErrorMessage = styled.p`
  color: ${(props) => props.theme.color.ALERT[900]};
  font-size: 14px;
`;
