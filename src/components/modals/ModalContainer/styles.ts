import styled, { css, keyframes } from "styled-components";

const AppearFromBottom = keyframes`
  from {
    transform: translateY(100px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const AppearFromTop = keyframes`
  from {
    transform: translateY(-100px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const AppearFromLeft = keyframes`
  from {
    transform: translateX(-100px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const AppearFromRight = keyframes`
  from {
    transform: translateX(100px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const Content = styled.div<{
  zIndex: number;
  useSiteBar?: boolean;
  contentLocation: "bottom" | "top" | "left" | "right" | "center";
  contentLocationInDesktop: "bottom" | "top" | "left" | "right" | "center";
}>`
  position: fixed;
  max-height: 100vh;
  max-width: 100vw;
  overflow: auto;
  animation: fadeIn 0.3s ease-in-out;
  z-index: ${(props) => props.zIndex};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  ${(props) => {
    if (props.contentLocation === "bottom")
      return css`
        transform: translate(0, 0);
        right: unset;
        top: unset;
        left: 0;
        bottom: 0;
        animation: ${AppearFromBottom} 0.3s ease-out;
      `;
    if (props.contentLocation === "top")
      return css`
        transform: translate(0, 0);
        right: unset;
        bottom: unset;
        left: 0;
        top: 0;
        animation: ${AppearFromTop} 0.3s ease-out;
      `;
    if (props.contentLocation === "left")
      return css`
        transform: translate(0, 0);
        top: unset;
        right: unset;
        left: 0;
        bottom: 0;
        animation: ${AppearFromLeft} 0.3s ease-out;
      `;
    if (props.contentLocation === "right")
      return css`
        transform: translate(0, 0);
        top: unset;
        left: unset;
        right: 0;
        bottom: 0;
        animation: ${AppearFromRight} 0.3s ease-out;
      `;
  }}

  ${(props) => {
    if (props.contentLocationInDesktop === "center")
      return css`
        @media screen and (min-width: 1024px) {
          transform: translate(-50%, -50%);
          bottom: unset;
          right: unset;
          top: 50%;
          left: 50%;
          animation: fadeIn 0.3s ease-out;
        }
      `;
    if (props.contentLocationInDesktop === "bottom")
      return css`
        @media screen and (min-width: 1024px) {
          transform: translate(0, 0);
          top: unset;
          right: unset;
          left: 0;
          bottom: 0;
          animation: ${AppearFromBottom} 0.3s ease-out;
        }
      `;
    if (props.contentLocationInDesktop === "top")
      return css`
        @media screen and (min-width: 1024px) {
          transform: translate(0, 0);
          top: unset;
          right: unset;
          left: 0;
          top: 0;
          animation: ${AppearFromTop} 0.3s ease-out;
        }
      `;
    if (props.contentLocationInDesktop === "left")
      return css`
        @media screen and (min-width: 1024px) {
          transform: translate(0, 0);
          top: unset;
          right: unset;
          left: 0;
          bottom: 0;
          animation: ${AppearFromLeft} 0.3s ease-out;
        }
      `;
    if (props.contentLocationInDesktop === "right")
      return css`
        @media screen and (min-width: 1024px) {
          transform: translate(0, 0);
          top: unset;
          left: unset;
          right: 0;
          bottom: 0;
          animation: ${AppearFromRight} 0.3s ease-out;
        }
      `;
  }}
`;
