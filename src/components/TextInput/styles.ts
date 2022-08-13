import { getFullWidth, getSize } from "@/ThemeProvider/utils";
import styled, { css } from "styled-components";
import { InputProps } from "./types";

export const InputContainer = styled.div<InputProps & { isFocused?: boolean }>`
  ${({ fullWidth }) => getFullWidth({ fullWidth })};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 8px;
  border: 1px solid
    ${({ theme, error, success, isFocused }) => {
      if (error) {
        return theme.color.ALERT[900];
      }
      if (success) {
        return theme.color.SUCCESS[900];
      }
      if (isFocused) {
        return theme.color.QUATERNARY[900];
      }
      return theme.color.NEUTRAL[300];
    }};
  background: #fff;
  min-height: 45px;
  ::placeholder {
    color: ${(props) => props.theme.color.NEUTRAL[500]};
  }

  background-color: ${({ theme, disabled }) =>
    disabled ? theme.color.NEUTRAL[100] : "#fff"};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "auto")};
  transition: background 0.3s ease-out;
  transition: border 0.3s ease-out;

  > input {
    position: relative;
    width: 100%;
    ${({ size }) => getSize({ size })};
    flex-grow: 1;
    border: none;
    outline: none;
    padding: 10px 0px;
    background: transparent;
    letter-spacing: -0.04em;
    color: ${(props) => props.theme.color.NEUTRAL[700]};
    padding-left: ${({ leftAddon }) => (!leftAddon ? "12px" : "0px")};
    padding-right: ${({ rightAddon }) => (!rightAddon ? "12px" : "0px")};
    padding-right: ${({ success, error }) => (success || error) && "35px"};

    &:disabled {
      cursor: not-allowed;
      background-color: ${(props) => props.theme.color.NEUTRAL[100]};
      color: ${(props) => props.theme.color.NEUTRAL[500]};
    }
  }

  .leftAddon {
    padding-left: 12px;
  }

  .rightAddon {
    padding-right: 12px;
  }

  span {
    color: ${(props) => props.theme.color.NEUTRAL[500]};
    ${({ size }) => getSize({ size })};
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: -0.04em;
    user-select: none;
  }

  .state {
    padding-right: 12px;
    position: absolute;
    right: 25px;
  }
`;
