import styled from "styled-components";

export const InputContainer = styled.div`
  padding: 0 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.color.NEUTRAL[300]};
  background: #fff;
  min-height: 44px;
  ::placeholder {
    color: ${(props) => props.theme.color.NEUTRAL[500]};
  }

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
  }
`;

export const Span = styled.span`
  color: ${(props) => props.theme.color.NEUTRAL[500]};
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: -0.04em;
`;
