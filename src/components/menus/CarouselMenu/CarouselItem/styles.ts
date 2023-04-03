import styled, { css } from "styled-components";

type ButtonProps = {
  readonly isSelected?: boolean;
  readonly model?: number;
};

export const Button = styled.button<ButtonProps>`
  border: none;
  outline: none;
  background: none;
  padding: 6.5px 16px;
  color: #46494d;
  font-size: 14px;
  font-weight: 500;
  font-family: "Poppins";
  letter-spacing: -0.04em;
  text-transform: capitalize;
  border-radius: 36px;
  white-space: nowrap;
  transition: 0.3s;
  ${({ isSelected, model }) => {
    if (isSelected && model === 2)
      return css`
        border: 1px solid ${(props) => props.theme.color.SECONDARY[900]};
        color: ${(props) => props.theme.color.SECONDARY[900]};
        background: #d0def9;
      `;
    if (model === 2) {
      return css`
        color: #242954;
        background: #d0def9;
      `;
    }
    if (isSelected)
      return css`
        color: ${(props) => props.theme.color.SECONDARY[900]};
        background: ${(props) => props.theme.color.QUATERNARY[200]};
      `;
  }}
  :hover {
    color: ${(props) => props.theme.color.SECONDARY[900]};
  }
`;
