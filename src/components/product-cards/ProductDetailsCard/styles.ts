import styled from "styled-components";

export const Card = styled.div<{ disabled?: boolean; hasDetails?: boolean }>`
  background-color: ${({ disabled, theme }) => (disabled ? theme.color.NEUTRAL[50] : "transparent")};
  border: 1px solid ${({ theme }) => theme.color.NEUTRAL[100]};
  border-radius: 8px;
  min-height: ${({ hasDetails }) => (hasDetails ? "140px" : "unset")};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  gap: 5px;
  font-size: 14px;
  overflow: hidden;
`;

export const MainContainer = styled.div`
  display: flex;
  align-items: stretch;

  & > img {
    width: 75px;
    height: 88px;
    object-fit: cover;
  }
`;

export const ProductData = styled.div<{ hasDetails?: boolean }>`
  padding: 8px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: ${({ hasDetails }) => (hasDetails ? "flex-start" : "space-between")};
  gap: 5px;
`;

export const Main = styled.div<{ disabled?: boolean }>`
  color: ${({ disabled, theme }) => (disabled ? theme.color.NEUTRAL[500] : theme.color.NEUTRAL[800])};
  display: flex;
  align-items: flex-start;
  gap: 5px;
  font-weight: 500;
`;

export const DetailsWrapper = styled.div`
  color: ${({ theme }) => theme.color.NEUTRAL[500]};
  margin-top: 8px;
  font-size: 12px;
`;
