import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
`;

export const TitleWrapper = styled.div`
  color: ${({ theme }) => theme.color.PRIMARY[900]};
  font-weight: 500;

  span {
    margin-top: -3px;
    display: flex;
    align-items: center;
    gap: 3px;
    color: ${({ theme }) => theme.color.NEUTRAL[400]};

    & > svg:first-child {
      transform: rotate(-90deg);
    }
  }
`;
