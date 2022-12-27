import styled, { css } from "styled-components";

export const Header = styled.div`
  color: ${({ theme }) => theme.color.PRIMARY[900]};
  font-size: 20px;
  font-weight: 700;
  padding: 20px 20px 18px;
`;

export const OptionsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0 0 25px;
`;

export const Option = styled.li<{ selected?: boolean; disabled?: boolean; minHeight: number }>`
  color: ${({ theme }) => theme.color.NEUTRAL[800]};
  min-height: ${({ minHeight }) => minHeight}px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 500;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

  ${({ selected, theme }) =>
    selected &&
    css`
      background-color: ${theme.color.QUATERNARY[100]};
    `}

  @media (hover: hover) {
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  }
`;
