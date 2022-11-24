import styled from "styled-components";

export const Card = styled.div`
  background-color: white;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
  color: ${({ theme }) => theme.color.PRIMARY[900]};
  border-radius: 8px;
  padding: 20px;
  font-size: 14px;
`;

export const Header = styled.div<{ hasContent?: boolean }>`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: ${({ hasContent }) => (hasContent ? "12px" : 0)};
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
`;
