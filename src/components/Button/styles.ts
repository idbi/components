import styled from "styled-components";
import {
  getDesign,
  getShape,
  getColor,
  getFullWidth,
  getIsLoading,
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
  ${({ design, color }) => getDesign({ design, color })};
  ${({ fullWidth }) => getFullWidth({ fullWidth })};
  ${({ isLoading }) => getIsLoading({ isLoading })};
  ${({ disabled }) => getDisabled({ disabled })};
  ${({ m, mb, mt, mr, ml, my, mx, p, pb, pt, pr, pl, py, px }) =>
    getSpacing({ m, mb, mt, mr, ml, my, mx, p, pb, pt, pr, pl, py, px })};

  &:hover {
    background-color: ${({ theme, color, design }) => {
      if (design === "link") {
        return "transparent";
      }
      return getColor({ color, theme, design, hover: true });
    }};
  }

  &:active {
    background-color: ${({ theme, color, design }) => {
      if (design === "link") {
        return "transparent";
      }
      return getColor({ color, theme, design, hover: true });
    }};
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:disabled:hover {
    ${({ design, color }) => getDesign({ design, color })};
  }
`;
