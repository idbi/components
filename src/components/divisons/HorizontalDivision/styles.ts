import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const Division = styled.div<{ thickness: number; minWidth: number }>`
  border-top: ${({ thickness }) => thickness}px solid currentColor;
  min-width: ${({ minWidth }) => minWidth}px;
  flex-grow: 1;
`;
