import styled, { css } from "styled-components";
import {
  getDesign,
  getShape,
  getColor,
  getFullWidth,
  getIsLoading,
  getDisabled,
} from "@/ThemeProvider/utils";
import { IButtonV2 } from ".";

export const BaseButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
`;

export const Button = styled(BaseButton)<IButtonV2>`
  display: inline-flex;
  gap: 0.5rem;
  font-size: 14px;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease-out;
  padding: ${({ design }) => (design === "link" ? "0" : "0.5rem 1rem")};

  ${({ shape }) => getShape({ shape })};
  ${({ design, color }) => getDesign({ design, color })};
  ${({ fullWidth }) => getFullWidth({ fullWidth })};
  ${({ isLoading }) => getIsLoading({ isLoading })};
  ${({ disabled }) => getDisabled({ disabled })};

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
`;
