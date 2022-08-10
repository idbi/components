import styled, { css } from "styled-components";
import { BaseButton } from "../Button/styles";

export const BaseIconButton = styled(BaseButton)<{ pxSize?: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  width: 25px;
  height: 25px;
  ${(props) => {
    if (props.pxSize)
      return css`
        width: ${props.pxSize}px;
        height: ${props.pxSize}px;
      `;
  }}
`;

type IconButtonProps = {
  readonly variant?: "primary" | "secondary";
};

export const IconButton = styled.button<IconButtonProps>`
  border: 1px solid #fff;
  font-size: 14px;
  border-radius: 50%;
  display: flex;
  height: 34px;
  width: 34px;
  justify-content: center;
  background: #fff;
  align-items: center;
  text-align: center;
  color: ${({ theme, variant = "primary" }) =>
    variant === "primary" ? theme.color.SECONDARY[900] : theme.color.PRIMARY[900]};
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  padding: 0;
  margin: 0;
  transition: 0.3s;
  :hover {
    box-shadow: 0px 1px 8px rgba(45, 45, 45, 0.2);
  }
`;
