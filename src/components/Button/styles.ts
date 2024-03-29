import styled from "styled-components";
import {
  getDesign,
  getShape,
  getColor,
  getFullWidth,
  getDisabled,
  getSize,
  getSpacing,
} from "@/theme/utils";
import type { IButton } from "./types";

export const BaseButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
`;

export const Button = styled(BaseButton)<IButton>`
  display: inline-flex;
  gap: 0.5rem;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease-out;
  padding: ${({ design }) => (design === "link" ? "0" : "0.7rem")};
  min-height: ${({ design }) => (design === "link" ? "0" : "45px")};

  ${({ size }) => getSize({ size })};
  ${({ shape }) => getShape({ shape })};
  ${({ design, color, fontColor, theme }) =>
    getDesign({ design, color, fontColor, theme })};
  ${({ fullWidth }) => getFullWidth({ fullWidth })};
  ${({ disabled }) => getDisabled({ disabled })};
  ${({ m, mb, mt, mr, ml, my, mx, p, pb, pt, pr, pl, py, px }) =>
    getSpacing({ m, mb, mt, mr, ml, my, mx, p, pb, pt, pr, pl, py, px })};

  &:hover:not(:disabled) {
    background-color: ${({ color, design, theme }) => {
      if (design === "link") {
        return "transparent";
      }
      return getColor({ color, design, hover: true, theme });
    }};
  }

  &:active {
    background-color: ${({ color, design, theme }) => {
      if (design === "link") {
        return "transparent";
      }
      return getColor({ color, design, hover: true, theme });
    }};
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
  }

  b {
    font-weight: bold;
  }
`;
