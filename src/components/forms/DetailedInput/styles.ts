import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  border: 1px solid ${({ theme }) => theme.color.NEUTRAL[300]};
  border-radius: 8px;
  padding: 6px 11px 5px;
`;

export const Input = styled.input`
  background-color: transparent;
  color: inherit;
  border: none;
  min-width: 0;
  width: auto;
  padding: 0;
  flex-grow: 1;
  font-size: inherit;

  :focus {
    outline: none;
  }
  ::placeholder {
    color: ${({ theme }) => theme.color.NEUTRAL[400]};
  }
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    display: none;
  }
`;
