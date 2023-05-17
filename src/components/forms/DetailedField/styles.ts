import styled from "styled-components";

export const Container = styled.div`
  color: ${({ theme }) => theme.color.NEUTRAL[600]};
  font-size: 14px;

  [data-light] {
    color: ${({ theme }) => theme.color.NEUTRAL[500]};
  }
`;

export const Label = styled.label`
  display: block;
  font-size: 10px;
`;

export const MainContent = styled.div<{ spacing?: number }>`
  display: flex;
  align-items: center;
  gap: ${({ spacing = 3 }) => `${spacing}px`};
`;

export const Aside = styled.span`
  flex-shrink: 0;
  font-size: 12px;
`;
