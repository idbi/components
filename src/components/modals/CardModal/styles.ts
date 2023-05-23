import styled, { css } from "styled-components";
import { styleScroll } from "../../../theme/scroll";

interface CardModalType {
  borderRadius?: string;
  borderRadiusInDesktop?: string;
  padding?: string;
  maxHeight?: string;
  height?: string;
  maxWidth?: string;
  width?: string;
  background?: string;
  overflow?: string;
  contentLocation?: "bottom" | "top" | "left" | "right" | "center";
  contentLocationInDesktop?: "bottom" | "top" | "left" | "right" | "center";
  boxShadow?: string;
  boxShadowInDesktop?: string;
}

export const StyledCardModal = styled.div<CardModalType>`
  background-color: ${(props) => props.background || "#fff"};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "15px"};
  max-height: ${(props) => (props.maxHeight ? props.maxHeight : "90vh")};
  height: ${(props) => (props.height ? props.height : "auto")};
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : "90vw")};
  width: ${(props) => (props.width ? props.width : "90vw")};
  padding: ${(props) => (props.padding ? props.padding : "1.5rem")};
  overflow: ${(props) => props.overflow || "hidden"};
  cursor: auto;

  ${(props) => {
    if (props.contentLocation && props.contentLocation === "bottom")
      return css`
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        max-width: unset;
        width: 100vw;
      `;
    if (props.contentLocation && props.contentLocation === "top")
      return css`
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        max-width: unset;
        width: 100vw;
      `;
    if (props.contentLocation && props.contentLocation === "left")
      return css`
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        height: 100vh;
        max-height: ${() => (props.maxHeight ? props.maxHeight : "100vh")};
        max-width: ${() => (props.maxWidth ? props.maxWidth : "550px")};
      `;
    if (props.contentLocation && props.contentLocation === "right")
      return css`
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        height: 100vh;
        max-height: ${() => (props.maxHeight ? props.maxHeight : "100vh")};
        max-width: ${() => (props.maxWidth ? props.maxWidth : "550px")};
      `;
  }}

  ${(props) => {
    if (props.contentLocationInDesktop === "center")
      return css`
        @media screen and (min-width: 1024px) {
          border-radius: ${() =>
            props.borderRadiusInDesktop ? props.borderRadiusInDesktop : "15px"};
          height: auto;
          max-width: ${() => (props.maxWidth ? props.maxWidth : "90vw")};
          max-height: ${() => (props.maxHeight ? props.maxHeight : "90vh")};
          padding: ${() => (props.padding ? props.padding : "1.5rem")};
        }
      `;
    if (props.contentLocationInDesktop === "bottom")
      return css`
        @media screen and (min-width: 1024px) {
          border-radius: ${() =>
            props.borderRadiusInDesktop ? props.borderRadiusInDesktop : "15px"};
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
          max-width: unset;
          height: unset;
          width: ${() => (props.width ? props.width : "100vw")};
        }
      `;
    if (props.contentLocationInDesktop === "top")
      return css`
        @media screen and (min-width: 1024px) {
          border-radius: ${() =>
            props.borderRadiusInDesktop ? props.borderRadiusInDesktop : "15px"};
          border-top-left-radius: 0;
          border-top-right-radius: 0;
          max-width: unset;
          height: unset;
          width: ${() => (props.width ? props.width : "100vw")};
        }
      `;
    if (props.contentLocationInDesktop === "left")
      return css`
        @media screen and (min-width: 1024px) {
          border-radius: ${() =>
            props.borderRadiusInDesktop ? props.borderRadiusInDesktop : "15px"};
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
          height: 100vh;
          max-height: ${() => (props.maxHeight ? props.maxHeight : "100vh")};
          max-width: ${() => (props.maxWidth ? props.maxWidth : "550px")};
        }
      `;
    if (props.contentLocationInDesktop === "right")
      return css`
        @media screen and (min-width: 1024px) {
          border-radius: ${() =>
            props.borderRadiusInDesktop ? props.borderRadiusInDesktop : "15px"};
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
          height: 100vh;
          max-height: ${() => (props.maxHeight ? props.maxHeight : "100vh")};
          max-width: ${() => (props.maxWidth ? props.maxWidth : "550px")};
        }
      `;
  }}
  ${styleScroll}
`;

interface CloseIconProps {
  closeIcon?: boolean;
  closeIconInDesktop?: boolean;
  zIndex?: number;
}

export const CloseIcon = styled.div<CloseIconProps>`
  background-color: white;
  box-shadow: 0 2px 7px #e5e5e5;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  display: ${({ closeIcon }) => (closeIcon ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 11px;
  cursor: pointer;
  z-index: ${({ zIndex }) => zIndex || 1};
  @media screen and (min-width: 1024px) {
    display: ${({ closeIconInDesktop }) =>
      closeIconInDesktop ? "flex" : "none"};
  }
`;
