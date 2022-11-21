import styled from "styled-components";

export const Footer = styled.div<{ disabled?: boolean; bottom?: boolean }>`
  padding-right: 5px;
  margin: ${({ bottom }) => (bottom ? "0 10px 8px" : 0)};
  display: flex;
  justify-content: space-between;
  font-weight: 500;

  & > span {
    > span {
      font-weight: 700;
    }
  }
`;

export const TotalPrices = styled.div<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  gap: 5px;

  & > span {
    :first-child {
      color: ${({ theme }) => theme.color.NEUTRAL[500]};
      font-weight: 500;
      text-decoration: line-through;
    }
    :last-child {
      color: ${({ disabled, theme }) => (disabled ? theme.color.NEUTRAL[500] : theme.color.PRIMARY[900])};
      text-decoration: none;
      margin-left: 5px;
      > span {
        font-weight: 700;
      }
    }
  }
`;

export const Patch = styled.span`
  background-color: ${({ theme }) => theme.color.SECONDARY[900]};
  border-radius: 50px;
  padding: 5px 6px;
  color: white;
  font-size: 10px;
  font-weight: 700;
`;
