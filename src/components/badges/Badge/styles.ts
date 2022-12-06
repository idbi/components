/* eslint-disable prettier/prettier */
import { theme } from "@/theme";
import styled, { css } from "styled-components";

interface IContainer {
  padding?: string;
  color?: string;
  background?: string;
  applyFlex?: boolean;
  maxWidth?: string;
}

export const Container = styled.span<IContainer>`
  padding: ${({ padding }) => padding || "4px 10px "};
  border-radius: 8px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 0.75rem;
  line-height: 1.125rem;
  letter-spacing: -0.04em;
  background: ${({ background }) => background || theme.color.STATUS.DEFAULT[0]};
  color: ${({ color }) => color || theme.color.STATUS.DEFAULT[1]};
  max-width: ${({ maxWidth }) =>  maxWidth || "auto"};
  ${({ applyFlex }) => applyFlex && (
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 5px;
    `
  )}
`;
