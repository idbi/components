import styled, { css } from "styled-components";

export const Card = styled.div`
  box-shadow: 0px 1px 10px rgba(98, 98, 98, 0.2);
  display: inline-block;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.color.NEUTRAL[700]};
  margin: 3px 8px;
  font-size: 12px;
  font-weight: 500;
`;

export const ButtonsContainer = styled.div`
  box-shadow: 0px 1px 10px rgba(98, 98, 98, 0.2);
  min-height: 46px;
  display: flex;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  overflow: hidden;
`;

export const Btn = styled.button<{ selected?: boolean }>`
  background-color: white;
  color: ${({ theme }) => theme.color.NEUTRAL[400]};
  border: none;
  min-width: 46px;
  padding: 3px 5px;
  font-size: 14px;

  &:not(:first-child) {
    border-left: 1px solid ${({ theme }) => theme.color.NEUTRAL[100]};
  }
  &:disabled {
    opacity: 0.5;
  }

  @media (hover: hover) {
    &:not(:disabled):hover {
      color: ${({ theme }) => theme.color.SECONDARY[900]};
      cursor: pointer;
    }
  }

  ${({ selected }) =>
    selected &&
    css`
      background-color: ${({ theme }) => theme.color.QUATERNARY[900]};
      color: white;
      :hover {
        color: white !important;
      }
    `}
`;
