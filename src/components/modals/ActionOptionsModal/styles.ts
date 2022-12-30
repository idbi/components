import styled from "styled-components";

export const Header = styled.div`
  color: ${({ theme }) => theme.color.PRIMARY[900]};
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 18px;
`;

export const OptionsContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0 0 25px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Option = styled.li<{ disabled?: boolean }>`
  color: ${({ theme }) => theme.color.NEUTRAL[600]};
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

  @media (hover: hover) {
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  }
`;
