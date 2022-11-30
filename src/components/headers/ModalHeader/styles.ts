/* eslint-disable prettier/prettier */
import { theme } from "@/theme";
import { getDisabled, getIsLoading } from "@/theme/utils";
import { resetButtonStyles } from "@/theme/utils/resetButtonStyles";
import styled from "styled-components";

interface IContainer {
  marginBottom?: string;
  isSticky?: boolean;
  zIndex?: number;
}

export const Container = styled.div<IContainer>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3px 0;
  box-shadow: ${() => theme.effect.lightShadow[16]};
  color: ${() => theme.color.PRIMARY[900]};
  background: ${() => theme.color.PRIMARY[0]};

  position: ${({isSticky}) => isSticky ? "sticky" : "static"};
  top: 0;
  z-index: ${({zIndex}) => zIndex || "5"};
  margin-bottom: ${({marginBottom}) => marginBottom || "0"};
`;

interface IOptions {
  minWidthForOptions?: string;
  paddingForOptions?: string;
}

export const Options = styled.div<IOptions>`
  text-align: right;
  min-width: ${({ minWidthForOptions }) => minWidthForOptions || "auto"};
  button {
    padding: ${({ paddingForOptions }) => paddingForOptions || "12px 20px"};
  }
`

interface IButton {
  mode?: "normal" | "danger" | string;
  isLoading?: boolean;
  disabled?: boolean;
}

export const Option = styled.button<IButton>`
  ${resetButtonStyles}
  color: ${({ mode }) => mode === "danger" ? theme.color.ALERT[700] : theme.color.PRIMARY[900]};
  border-left: 1px solid ${() => theme.color.NEUTRAL[200]};
  ${({ isLoading }) => getIsLoading({ isLoading })};
  ${({ disabled }) => getDisabled({ disabled })};
`