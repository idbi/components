import styled from "styled-components";

export const Container = styled.div<{ size: number }>`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  align-items: center;
  overflow: visible;

  & > * {
    position: relative;
    &:not(:last-child) {
      margin-left: ${({ size }) => size * -0.33}px;
    }
  }
`;

export const AddUserBtn = styled.button<{ size: number }>`
  background-color: transparent;
  color: ${({ theme }) => theme.color.SECONDARY[900]};
  border: 1px dashed ${({ theme }) => theme.color.SECONDARY[200]};
  border-radius: 50%;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (hover: hover) {
    cursor: pointer;
  }
`;
