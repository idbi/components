import styled from "styled-components";

export const Container = styled.span<{ size?: number; bulletSize?: number; spacing?: number; color?: string }>`
  color: ${({ color }) => color || "currentColor"};
  display: inline-flex;
  align-items: center;
  gap: ${({ spacing }) => (spacing ? `${spacing}px` : "0.5em")};
  font-size: ${({ size }) => (size ? `${size}px` : "1em")};

  svg {
    font-size: ${({ bulletSize }) => (bulletSize ? `${bulletSize}px` : "0.4em")};
  }
`;
