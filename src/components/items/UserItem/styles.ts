import styled, { css } from "styled-components";

export const Container = styled.div<{ right?: boolean }>`
  display: flex;
  align-items: center;
  gap: 7px;

  ${({ right }) =>
    right &&
    css`
      flex-direction: row-reverse;
    `}
`;

export const UserData = styled.div<{ aside?: boolean }>`
  color: ${({ theme }) => theme.color.NEUTRAL[600]};
  font-size: 16px;
  font-weight: 500;

  & > div {
    color: ${({ theme }) => theme.color.NEUTRAL[500]};
    margin-top: -3px;
    font-size: 14px;
    font-weight: 400;
  }

  ${({ aside }) =>
    aside &&
    css`
      text-align: right;
      font-size: 12px;

      & > div {
        font-size: 12px;
      }
    `}
`;
