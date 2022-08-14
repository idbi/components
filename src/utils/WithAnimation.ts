import styled, { css, keyframes } from "styled-components";

const animationIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-4px);
  }

  80% {
    opacity: 0.5;
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const WithAnimation = styled.div<{ shouldAppear: boolean }>`
  opacity: 0;
  ${({ shouldAppear }) =>
    shouldAppear &&
    css`
      animation: ${animationIn} 0.2s ease-in;
      animation-fill-mode: forwards;
    `}
`;
