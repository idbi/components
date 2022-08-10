import styled, { css } from "styled-components";

export type Size = "sm" | "md" | "lg" | "xl" | "xxl";

type ContainerProps = {
  readonly size?: Size;
};

const getMaxWidth = (size: Size) => {
  switch (size) {
    case "sm":
      return 540;
    case "md":
      return 720;
    case "lg":
      return 960;
    case "xl":
      return 1200;
    case "xxl":
      return 1500;
  }
};

export const Container = styled.div<ContainerProps>`
  width: 95%;
  margin: 0 auto;
  ${(props) => {
    if (props.size) {
      return css`
        max-width: ${getMaxWidth(props.size)}px;
      `;
    }
  }}
`;
