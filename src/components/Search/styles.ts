import styled, { css } from "styled-components";
import { TSearchSize } from "./types";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
`;

interface IInputContainer {
  disabled: boolean;
}

export const InputContainer = styled.div<IInputContainer>`
  width: 100%;
  position: relative;
  .icon {
    content: "";
    position: absolute;
    left: 15px;
    top: 53%;
    transform: translateY(-50%);
    width: auto;
  }
  .clean {
    content: "";
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    width: auto;
    outline: none;
    padding: 0;
    border: none;
    background: none;
    min-width: 25px;
    width: 25px;
    height: 25px;
  }
  .icon,
  .clean {
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  }
`;

interface ISearch {
  addSearchIcon: boolean;
  addCleanOption: boolean;
  containerSize: TSearchSize;
  alert: boolean;
  disabled: boolean;
}

const getSearchSize = (size: TSearchSize) => {
  if (size === "small") return "45px";
  if (size === "big") return "55px";
  return `${size}px`;
};

export const Search = styled.input<ISearch>`
  width: 100%;
  height: ${({ containerSize }) => getSearchSize(containerSize)};
  padding: 8px 15px;
  padding-left: ${({ addSearchIcon }) => (addSearchIcon ? "36px" : "15px")};
  padding-right: ${({ addCleanOption }) => (addCleanOption ? "46px" : "15px")};
  color: #4a4a4a;
  border-radius: 10px;
  border: ${({ theme, alert }) =>
    alert
      ? `1px solid ${theme.color.ALERT[900]}`
      : `1px solid ${theme.color.NEUTRAL[300]}`};
  outline: none;
  transition: box-shadow 0.3s ease-out;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 21px;
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.color.PRIMARY[900]};
  background: ${({ theme, disabled }) =>
    disabled ? theme.color.NEUTRAL[100] : "#fff"};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "default")};

  ::placeholder {
    color: ${({ theme }) => theme.color.NEUTRAL[500]};
  }
  :focus {
    border: 1px solid ${({ theme }) => theme.color.QUATERNARY[900]};
  }
`;

interface ContainerListProps {
  active: boolean;
}

export const ContainerList = styled.div<ContainerListProps>`
  width: 100%;
  position: absolute;
  top: 100%;
  left: 0;
  border-radius: 6px;
  transition: all 0.4s ease;
  overflow: hidden;
  z-index: 9;
  background-color: white;
  max-height: 250px;
  overflow: auto;
  cursor: pointer;
  ${(props) => {
    if (props.active) {
      return css`
        border: 1px solid #d7d7d7;
      `;
    }
    return css`
      border: 0;
      height: 0;
    `;
  }};
`;

export const ContainerLoader = styled.div`
  width: 100%;
  height: 2px;
  padding: 0 6px;
  position: absolute;
  left: 0;
  top: 95%;
  border-radius: 50%;
  overflow: hidden;
`;

interface LoaderProps {
  active: boolean;
}

export const Loader = styled.div<LoaderProps>`
  background-color: ${({ theme }) => theme.color.QUATERNARY[900]};
  height: 1.5px;
  transition: all 0.3s ease;
  ${(props) => {
    if (props.active) {
      return css`
        width: 100%;
      `;
    }
    return css`
      width: 0;
    `;
  }};
`;

export const ItemList = styled.div`
  width: 100%;
  color: #4a4a4a;
  padding: 5px 10px;
  font-size: 0.875rem;
  line-height: 1.3125rem;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  :hover {
    background-color: #e9e9e9;
  }
`;

export const CreateContainer = styled.p`
  padding: 5px 10px;
  color: #4968e4;
  text-align: center;
  font-size: 0.875rem;
  line-height: 1.3125rem;
  :hover {
    text-decoration: underline;
    background-color: #e9e9e9;
  }
`;
