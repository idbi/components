import { theme } from "@/theme";
import styled, { css } from "styled-components";
import { ICard } from "./types";

type CardWrapperProps = Pick<ICard, "design" | "withSeparator">;

export const CardWrapper = styled.section<CardWrapperProps>`
  width: 100%;
  border-radius: 0.625rem;
  header {
    border-bottom: 1px solid #e5e5e5;
  }
  ul {
    margin: 0;
    padding: 0;
    & li {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    & li > *:first-child {
      border-radius: 0;
    }

    & li:first-child > *:first-child {
      border-top-left-radius: 0.625rem;
      border-top-right-radius: 0.625rem;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    & li:last-child > *:first-child {
      border-bottom-left-radius: 0.625rem;
      border-bottom-right-radius: 0.625rem;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }

    ${({ withSeparator }) =>
      withSeparator &&
      css`
        & li:not(:last-child) {
          border-bottom: 1px solid #e5e5e5;
        }
      `}
  }
  ${({ design }) => {
    switch (design) {
      case "primary":
        return css`
          background-color: #fff;
          box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
          -webkit-box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
          -moz-box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
        `;
      case "secondary":
        return css`
          background-color: ${theme.color.QUATERNARY[300]};
        `;
      case "flat":
        return css`
          background-color: transparent;
        `;
      default:
        return theme.color.NEUTRAL[100];
    }
  }};
`;
