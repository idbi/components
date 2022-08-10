import styled from "styled-components";

export const InputContainer = styled.div<{
  disabled?: boolean;
  error?: boolean;
  success?: boolean;
  isFocused?: boolean;
}>`
  padding: 0 14px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 8px;
  border: 1px solid
    ${({ theme, error, success, isFocused }) => {
      if (error) {
        return theme.color.ALERT[900];
      }
      if (success) {
        return theme.color.SUCCESS[900];
      }
      if (isFocused) {
        return theme.color.QUATERNARY[900];
      }
      return theme.color.NEUTRAL[300];
    }};
  background: #fff;
  min-height: 44px;
  ::placeholder {
    color: ${(props) => props.theme.color.NEUTRAL[500]};
  }

  background-color: ${({ theme, disabled }) =>
    disabled ? theme.color.NEUTRAL[100] : "#fff"};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "auto")};
  transition: background 0.3s ease-out;
  transition: border 0.3s ease-out;

  > input {
    width: 100%;
    flex-grow: 1;
    border: none;
    outline: none;
    padding: 14px 0;
    background: transparent;
    font: normal 16px "Poppins";
    letter-spacing: -0.04em;
    color: ${(props) => props.theme.color.NEUTRAL[700]};

    &:disabled {
      cursor: not-allowed;
      background-color: ${(props) => props.theme.color.NEUTRAL[100]};
      color: ${(props) => props.theme.color.NEUTRAL[500]};
    }
  }

  span {
    color: ${(props) => props.theme.color.NEUTRAL[500]};
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: -0.04em;
    user-select: none;
  }
`;
