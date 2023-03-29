/* eslint-disable prettier/prettier */
import styled, { css } from "styled-components";

interface IContainer {
  padding?: string;
  color?: string;
  background?: string;
  applyFlex?: boolean;
  maxWidth?: string;
  weigth?: string;
  borderRadius?: string;
  withBorder?: boolean;
}

export const Container = styled.span<IContainer>`
  padding: ${({ padding }) => padding || "4px 10px "};
  border-radius: ${({ borderRadius }) => borderRadius || "8px"};
  font-family: "Poppins";
  font-style: normal;
  font-weight: ${({ weigth }) => weigth || "600"};
  font-size: 0.75rem;
  line-height: 1.125rem;
  letter-spacing: -0.04em;
  background: ${({ theme, background }) => background || theme.color.STATUS.DEFAULT[0]};
  color: ${({ theme, color }) => color || theme.color.STATUS.DEFAULT[1]};
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

${({ theme, withBorder, color }) => withBorder && (
    css`
      border: 1px solid ${color || theme.color.STATUS.DEFAULT[1]};
    `
  )}
`;
