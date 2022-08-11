import styled from "styled-components";
import type { ICodeInputProps } from "./types";

export const CodeInputContainer = styled.div<
  Omit<ICodeInputProps, "value" | "id">
>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.length}, 1fr);
  grid-gap: 0.5rem;
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
      ${({ theme, error, success }) => {
        if (error) {
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
    color: ${(props) => props.theme.color.NEUTRAL[700]};

    transition: background 0.3s ease-out;
    transition: border 0.3s ease-out;

    &:disabled {
      cursor: not-allowed;
      background-color: ${(props) => props.theme.color.NEUTRAL[100]};
      color: ${(props) => props.theme.color.NEUTRAL[500]};
    }

    &:focus {
      border-color: ${(props) => props.theme.color.QUATERNARY[900]};
    }
  }
`;
