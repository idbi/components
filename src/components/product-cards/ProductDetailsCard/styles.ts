import styled from "styled-components";

export const Card = styled.div<{ disabled?: boolean }>`
  background-color: ${({ disabled, theme }) => (disabled ? theme.color.NEUTRAL[50] : "transparent")};
  border: 1px solid ${({ theme }) => theme.color.NEUTRAL[100]};
  border-radius: 8px;
  min-height: 90px;
  display: flex;
  align-items: stretch;
  gap: 5px;
  font-size: 14px;
  overflow: hidden;

  & > img {
    width: 75px;
    object-fit: cover;
  }
`;

export const ProductData = styled.div`
  padding: 8px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
`;

export const Main = styled.div<{ disabled?: boolean }>`
  color: ${({ disabled, theme }) => (disabled ? theme.color.NEUTRAL[500] : theme.color.NEUTRAL[800])};
  display: flex;
  align-items: flex-start;
  gap: 5px;
  font-weight: 500;
`;

export const Footer = styled.div<{ disabled?: boolean }>`
  padding-right: 5px;
  display: flex;
  justify-content: space-between;
  font-weight: 500;

  & > span {
    :last-child {
      color: ${({ disabled, theme }) => (disabled ? theme.color.NEUTRAL[500] : theme.color.PRIMARY[900])};
    }
    > span {
      font-weight: 700;
    }
  }
`;

export const Patch = styled.span`
  /* background-color: #00000019; */
  /* background-color: #ffffff19; */
  background-color: #84848419;
  border-radius: 4px;
  padding: 4px 8px;
  line-height: 1em;
  display: inline-block;
  font-weight: bold;
`;
