import styled from "styled-components";

export const Container = styled.div<{ minHeight: number; alert?: boolean; disabled?: boolean; fullWidth?: boolean }>`
  background-color: white;
  border: 1px solid ${({ theme, alert }) => (alert ? theme.color.ALERT[900] : theme.color.NEUTRAL[300])};
  border-radius: 5px;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  padding: 0 12px;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;

  input {
    border: none;
    color: ${({ theme }) => theme.color.NEUTRAL[800]};
    min-height: ${({ minHeight }) => minHeight}px;
    min-width: 30px;
    flex-grow: 1;
    font-size: 14px;
    padding: 0;

    :focus {
      outline: none;
    }
    ::placeholder {
      color: ${({ theme }) => theme.color.NEUTRAL[400]};
    }
  }

  & > svg {
    flex-shrink: 0;
  }
`;
