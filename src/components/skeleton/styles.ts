import { getDimension } from "@/utils/dimensions";
import styled, { css, keyframes } from "styled-components";

interface ISkeleton {
  borderRadius?: number;
  height?: number | string;
  width?: number | string;
}

const colors = { base: "#ebebeb", highlight: "#f5f5f5" };

const skeletonAnimation = keyframes`
 100% {
    transform: translateX(100%);
  }
`;

export const Skeleton = styled.div<ISkeleton>`
  background-color: ${colors.base};
  border-radius: ${({ borderRadius = "0.25em" }) => getDimension(borderRadius)};
  height: ${({ height = "1em" }) => getDimension(height)};
  position: relative;
  overflow: hidden;
  z-index: 1;
  line-height: 1;

  ${({ width }) =>
    width &&
    css`
      width: ${getDimension(width)};
    `}

  ::after {
    content: " ";
    display: var(--pseudo-element-display);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background-repeat: no-repeat;
    background-image: ${`linear-gradient(90deg, ${colors.base}, ${colors.highlight}, ${colors.base})`};
    transform: translateX(-100%);

    animation-name: ${skeletonAnimation};
    animation-direction: normal;
    animation-duration: 1.5s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  }
`;
