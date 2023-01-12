import { theme } from "@/theme";
import styled, { css } from "styled-components";

interface IToggleSwitchWrapper {
  disabled: boolean;
}

export const ToggleSwitchWrapper = styled.div<IToggleSwitchWrapper>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  ${(props) => {
    if (props.disabled) {
      return css`
        opacity: 0.6;
        cursor: not-allowed;
      `;
    }
  }}
`;

interface IToggleStyle {
  color?: string;
  background?: string;
  ballColor: string;
  border?: string;
}

interface IToggle {
  toggled: boolean;
  width?: number;
  padding?: number;
  styleOn?: IToggleStyle;
  styleOff?: IToggleStyle;
}

export const Toggle = styled.div<IToggle>`
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
  transform: translate3d(0, 0, 0);
  height: ${({ width }) => (width ? width / 2 : 50 / 2)}px;
  width: ${({ width }) => width || 50}px;
  padding: ${({ padding }) => padding || 3}px;
  border-radius: ${({ width }) => (width ? width / 4 : 50 / 4)}px;
  ${({ toggled, styleOn, styleOff }) => {
    if (toggled)
      return css`
        background-color: ${styleOn?.background || "#4318FF"};
        border: ${styleOn?.border || "none"};
      `;
    return css`
      background-color: ${styleOff?.background || "#DFDFDF"};
      border: ${styleOff?.border || "none"};
    `;
  }}
`;

interface IToggleBall {
  toggled: boolean;
  width?: number;
  padding?: number;
  styleOn?: IToggleStyle;
  styleOff?: IToggleStyle;
}

export const ToggleBall = styled.div<IToggleBall>`
  z-index: 2;
  border-radius: 50%;
  background-color: ${theme.color.SECONDARY[900]};
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s cubic-bezier(1, 0.19, 0.15, 0.7);
  transition-delay: 0.1s;
  will-change: transform;
  height: ${({ width, padding }) =>
    (width ? width / 2 : 50 / 2) - (padding ? padding * 2 : 3 * 2)}px;
  width: ${({ width, padding }) =>
    (width ? width / 2 : 50 / 2) - (padding ? padding * 2 : 3 * 2)}px;

  ${({ toggled, styleOn, styleOff, width }) => {
    if (toggled)
      return css`
        background-color: ${styleOn?.ballColor || "#fff"};
        transform: ${`translateX(${width ? width / 2 : 50 / 2}px)`};
      `;
    return css`
      background-color: ${styleOff?.ballColor || "#fff"};
    `;
  }}
`;

interface IRippleBg {
  visible: boolean;
  styleOn?: IToggleStyle;
}

export const RippleBg = styled.div<IRippleBg>`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  z-index: 1;
  background-repeat: no-repeat;
  background-position: 50%;
  pointer-events: none;
  transition: transform 0.5s, opacity 0.3s ease;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transform: ${(props) => (props.visible ? "scale(10, 10)" : "scale(0, 0)")};
  background-image: ${({ styleOn }) =>
    `radial-gradient(circle, ${
      styleOn?.background || "#4318FF"
    } 10%, transparent 10.01%)`};
`;

export const Text = styled.p`
  font-size: 1.1em;
  font-weight: 500;
  color: #4a4a4a;
  display: flex;
  margin: 15px 0;
  padding: 0 20px;
`;
