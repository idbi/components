import styled from "styled-components";

export const Container = styled.div`
  color: ${({ theme }) => theme.color.NEUTRAL[800]};
  display: flex;
  justify-content: space-between;
  gap: 5px;
  font-size: 12px;
`;

export const Main = styled.div<{ revert?: boolean }>`
  display: flex;
  flex-direction: ${({ revert }) => (revert ? "column-reverse" : "column")};
`;

export const Title = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 500;
`;

export const Aside = styled.div`
  color: ${({ theme }) => theme.color.NEUTRAL[500]};
`;
