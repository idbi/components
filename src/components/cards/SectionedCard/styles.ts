import styled from "styled-components";

export const Card = styled.div`
  background-color: white;
  border: 1px solid ${({ theme }) => theme.color.QUATERNARY[400]};
  box-shadow: ${({ theme }) => theme.effect.darkShadow[6]};
  border-radius: 8px;
  font-size: 14px;

  & > *:first-child {
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
  }
  & > *:last-child {
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }
`;

const FlexContainer = styled.div`
  padding: 13px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 7px;
`;

export const Header = styled(FlexContainer)`
  color: ${({ theme }) => theme.color.NEUTRAL[600]};
  background-color: ${({ theme }) => theme.color.QUATERNARY[100]};
`;

export const Body = styled.div`
  color: ${({ theme }) => theme.color.NEUTRAL[800]};
  padding: 15px 20px;
`;

export const Footer = styled(FlexContainer)`
  border-top: 1px solid ${({ theme }) => theme.color.NEUTRAL[200]};
`;
