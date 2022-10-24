import styled from "styled-components";

interface ILabel {
  disabled: boolean;
}

export const Label = styled.label<ILabel>`
  display: flex;
  gap: 9px;
  font-weight: 500;
  font-size: 0.8125rem;
  line-height: 1.25rem;
  color: ${({ disabled }) => (disabled ? "gray" : "#242954")};
  cursor: pointer;
  input {
    display: none;
  }
`;
