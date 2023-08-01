import styled, { css } from "styled-components";

export const Card = styled.div<{ autoWidth?: boolean }>`
  box-shadow: 0 10px 30px 0 rgb(0 0 0 / 8%);
  border-radius: 15px;
  min-height: 90px;
  padding: 7px;
  display: flex;
  flex-direction: column;
  letter-spacing: -0.04em;
`;

export const TopSection = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 10px;
`;

export const Title = styled.div<{ inner?: boolean }>`
  color: ${({ theme }) => theme.color.NEUTRAL[400]};
  font-size: 12px;
  font-weight: 500;

  ${({ inner }) =>
    inner &&
    css`
      color: ${({ theme }) => theme.color.NEUTRAL[500]};
      font-size: 14px;
    `}
`;

export const SectionsContainer = styled.div`
  border-top: 1px solid ${({ theme }) => theme.color.NEUTRAL[200]};
  flex-grow: 1;
  display: flex;
  padding: 7px 0 0;

  > :nth-child(n + 2) {
    border-left: 1px solid ${({ theme }) => theme.color.NEUTRAL[200]};
    padding-left: 17px;
  }
`;

export const Section = styled.div`
  padding: 0 10px;
  flex: 1 1 0;
`;

export const InnerSections = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px 10px;
`;

export const AmountWrapper = styled.div`
  color: #1b2559;
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  font-weight: 500;
  flex-grow: 1;
`;

export const SkeletonWrapper = styled.div`
  width: 100%;
`;
