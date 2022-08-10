import styled from "styled-components";

export const Container = styled.div`
  margin: 5px 0;
`;

export const Summary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.color.PRIMARY[900]};
  font-size: 0.875rem;
  font-weight: 500;
  span {
    &:nth-child(2) {
      color: ${({ theme }) => theme.color.SECONDARY[900]};
    }
  }
`;

export const Content = styled.div`
  padding: 8px 0;
`;
