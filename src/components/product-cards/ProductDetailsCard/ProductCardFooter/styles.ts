import styled from "styled-components";

export const Footer = styled.div<{ disabled?: boolean; bottom?: boolean }>`
  padding-right: 5px;
  margin: ${({ bottom }) => (bottom ? "0 10px 8px" : 0)};
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 500;
`;

export const TotalPrices = styled.div<{ disabled?: boolean }>`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  gap: 2px 5px;

  & > span {
    :first-child {
      color: #6c757d;
      font-size: 12px;
      font-weight: 500;
      text-decoration: line-through;
    }
    :last-child {
      color: ${({ theme, disabled }) =>
        disabled ? theme.color.NEUTRAL[500] : theme.color.PRIMARY[900]};
      text-decoration: none;
      margin-left: 5px;
      font-size: 14px;
      > span {
        font-weight: 700;
      }
    }
  }
`;

export const Patch = styled.span`
  border-radius: 50px;
  color: #24a159;
  font-size: 12px;
  font-weight: 600;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  & > span {
    flex-shrink: 0;
    > span {
      font-weight: 700;
    }
  }
`;

export const DetailTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;
  width: 100%;
  padding: 4px 0;
  color: #cc688c;

  & > span {
    font-size: 12px;
    font-weight: 500;
  }
`;
