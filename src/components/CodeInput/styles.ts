import styled from "styled-components";
import type { ICodeInputProps } from "./types";

export const InputsContainer = styled.div<
  Omit<ICodeInputProps, "value" | "id">
>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.length}, 1fr);
  grid-gap: 22px;
  align-items: center;

  > input {
    text-align: center;
    width: 100%;
    flex-grow: 1;
    border: none;
    outline: none;
    width: 45px;
    height: 45px;
    border: 1px solid
      ${({ theme, errorMessage, success }) => {
        if (errorMessage) {
          return theme.color.ALERT[900];
        }
        if (success) {
          return theme.color.SUCCESS[900];
        }
        return theme.color.NEUTRAL[300];
      }};
    border-radius: 8px;
    background: #fff;
    font: normal 16px "Poppins";
    letter-spacing: -0.04em;
    color: ${({ theme }) => theme.color.NEUTRAL[700]};

    transition: background 0.3s ease-out;
    transition: border 0.3s ease-out;

    &:disabled {
      cursor: not-allowed;
      background-color: ${({ theme }) => theme.color.NEUTRAL[100]};
      color: ${({ theme }) => theme.color.NEUTRAL[500]};
    }

    &:focus {
      border-color: ${({ theme }) => theme.color.QUATERNARY[900]};
    }
  }
`;

export const CodeInputContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;
