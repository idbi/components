import styled, { css } from "styled-components";

export const Container = styled.div<{ reverse?: boolean }>`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  font-size: 14px;
`;

export const Price = styled.div<{ bold?: boolean }>`
  font-weight: ${({ bold }) => (bold ? 700 : 500)};

  span {
    font-weight: 700;
  }
`;

export const Aside = styled.span<{ light?: boolean }>`
  ${({ light }) =>
    light &&
    css`
      color: ${({ theme }) => theme.color.NEUTRAL[500]};
      font-size: 12px;
    `}
`;
