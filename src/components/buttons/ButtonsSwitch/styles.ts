import styled, { css } from "styled-components";
import { Model } from "./types";

export const Container = styled.div<{
  disabled?: boolean;
  fullWidth?: boolean;
  model?: Model;
}>`
  background-color: white;
  border: 1px solid ${({ theme }) => theme.color.PRIMARY[200]};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  border-radius: 10px;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  min-height: 48px;
  padding: 5px;
  position: relative;
  display: inline-flex;
  align-items: stretch;
  gap: 4px;
  box-sizing: border-box;

  * {
    box-sizing: border-box;
  }

  ${({ model, theme }) => {
    if (model === "secondary")
      return css`
        border: none;
        box-shadow: 0px 10px 30px 0px #00000014;
        border-radius: 8px;
        min-height: 45px;
      `;

    if (model === "tertiary") {
      return css`
        gap: 1px;
        padding: 0px;
        border: 1px solid ${theme.color.PRIMARY[200]};
        border-radius: 10px;
      `;
    }
  }}
`;

export const Btn = styled.button<{
  active?: boolean;
  model?: Model;
  equal?: boolean;
}>`
  background-color: white;
  color: ${({ theme, model }) =>
    model === "secondary" ? "#828282" : theme.color.SECONDARY[500]};
  border: none;
  border-radius: ${({ model }) => (model === "secondary" ? "4px" : "10px")};
  min-width: 35px;
  padding: 0 4px;
  flex-grow: 1;
  flex-basis: ${({ equal }) => (equal ? 0 : "auto")};
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  cursor: pointer;
  transition: 0.3s;

  ${({ active }) => {
    if (active)
      return css`
        background-color: ${({ theme }) => theme.color.SECONDARY[900]};
        box-shadow: 0px 2px 4px 0px #00000033;
        color: #fff;
      `;
  }}

  ${({ model, theme, active }) => {
    if (model === "tertiary") {
      return css`
        background-color: ${active ? theme.color.SECONDARY[50] : "white"};
        outline: ${active
          ? `1px solid ${theme.color.SECONDARY[500]}`
          : "1px solid transparent"};
        color: ${active
          ? theme.color.SECONDARY[900]
          : theme.color.SECONDARY[600]};
        border-radius: 0;
        min-height: 45px;
        z-index: ${active ? 1 : "auto"};

        &:first-child {
          border-top-left-radius: 10px;
          border-bottom-left-radius: 10px;
        }
        &:last-child {
          border-top-right-radius: 10px;
          border-bottom-right-radius: 10px;
        }
      `;
    }
  }}
`;

export const Cover = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;
