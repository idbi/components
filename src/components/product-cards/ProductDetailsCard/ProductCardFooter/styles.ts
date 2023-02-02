import styled from "styled-components";
import { theme } from "@/theme";

export const Footer = styled.div<{ disabled?: boolean; bottom?: boolean }>`
  padding-right: 5px;
  margin: ${({ bottom }) => (bottom ? "0 10px 8px" : 0)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;

  & > span {
    flex-shrink: 0;
    > span {
      font-weight: 700;
    }
  }
`;

export const TotalPrices = styled.div<{ disabled?: boolean }>`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  gap: 2px 5px;

  & > span {
    :first-child {
      color: ${theme.color.NEUTRAL[500]};
      font-weight: 500;
      text-decoration: line-through;
    }
    :last-child {
      color: ${({ disabled }) =>
        disabled ? theme.color.NEUTRAL[500] : theme.color.PRIMARY[900]};
      text-decoration: none;
      margin-left: 5px;
      > span {
        font-weight: 700;
      }
    }
  }
`;

export const Patch = styled.span`
  background-color: ${theme.color.SECONDARY[900]};
  border-radius: 50px;
  padding: 5px 6px;
  color: white;
  font-size: 10px;
  font-weight: 700;
`;
