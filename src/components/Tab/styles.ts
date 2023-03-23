import styled, { css } from "styled-components";

export const Tab = styled.button<{
  isActive?: boolean;
  noWrap?: boolean;
  rounded?: boolean;
  activeColor: string;
  tabWidth: number;
  tabHeight: number;
  tabFullWidth?: boolean;
  bold: boolean;
}>`
  color: currentColor;
  background-color: transparent;
  border: none;
  font-size: 14px;
  position: relative;
  padding: 4px 5px;
  font-weight: ${({ bold }) => (bold ? "bold" : "regular")};

  @media (hover: hover) {
    cursor: pointer;
  }

  ${({ noWrap }) =>
    noWrap &&
    css`
      white-space: "nowrap";
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 100%;
    `}

  ${({ isActive, rounded, activeColor, tabWidth, tabFullWidth, tabHeight }) =>
    isActive &&
    css`
      color: ${activeColor};
      ::before {
        content: "";
        background-color: ${activeColor};
        border-radius: ${rounded ? "8px" : 0};
        width: ${tabFullWidth ? "100%" : `${tabWidth}px`};
        height: ${tabHeight}px;
        position: absolute;
        bottom: 0px;
        left: ${tabFullWidth ? "0" : "unset"};

        animation: fadeIn 1.2s;
        -webkit-animation: fadeIn 1.2s;
        -moz-animation: fadeIn 1.2s;
        -o-animation: fadeIn 1.2s;
        -ms-animation: fadeIn 1.2s;

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        @-moz-keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        @-webkit-keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        @-o-keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        @-ms-keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      
    `};
`;
