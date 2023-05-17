import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  span {
    display: block;
  }
`;

export const Reference = styled.div`
  color: ${({ theme }) => theme.color.QUATERNARY[900]};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`;

export const Description = styled.span`
  color: ${({ theme }) => theme.color.NEUTRAL[600]};
  margin-top: -3px;
  font-size: 12px;
`;
