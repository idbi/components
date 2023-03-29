import styled from "styled-components";

export const Card = styled.div`
  background-color: #fff;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
  color: ${({ theme }) => theme.color.PRIMARY[900]};
  border-radius: 8px;
  padding: 20px;
  font-size: 14px;
`;

export const Section = styled.div`
  padding: 20px 0 0;
  margin-top: 20px;
  position: relative;

  ::before {
    content: "";
    border-top: 1px solid ${({ theme }) => theme.color.NEUTRAL[100]};
    width: calc(100% + 20px);
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const Header = styled.div<{ hasContent?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-bottom: ${({ hasContent }) => (hasContent ? "12px" : 0)};
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
`;
