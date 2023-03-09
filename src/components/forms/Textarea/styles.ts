import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  border: 1px solid ${({ theme }) => theme.color.NEUTRAL[300]};
  border-radius: 8px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;

  &[data-focused="true"] {
    border-color: ${({ theme }) => theme.color.QUATERNARY[700]};
  }
  &[data-disabled="true"] {
    opacity: 0.5;
  }
`;

export const Textarea = styled.textarea<{ maxHeight?: string }>`
  box-sizing: border-box;
  border: none;
  max-height: ${({ maxHeight = "unset" }) => maxHeight};
  height: 38px;
  flex-grow: 1;
  padding: 10px 0;
  display: block;
  resize: none;
  font-size: inherit;
  overflow: auto;

  ::placeholder {
    color: ${({ theme }) => theme.color.NEUTRAL[300]};
  }
  :focus {
    outline: none;
  }
`;
