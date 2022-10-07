import { theme } from "@/theme";
import styled, { css } from "styled-components";

export const WrappSC = styled.div`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: transparent;
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;
    border-radius: ${(props) => props.borderRadius || "50%"};
    transition: 0.3s background, 0.3s width, 0.3s height;
  }
  &:hover ::before {
    width: ${(props) => props.size * 2}px;
    height: ${(props) => props.size * 2}px;
    background: ${() => theme.color.NEUTRAL[50]};
  }
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: transparent;
    width: ${(props) => props.size * 2}px;
    height: ${(props) => props.size * 2}px;
    border-radius: ${(props) => props.borderRadius || "50%"};
    transition: 0.3s background, 0.3s width, 0.3s height;
    opacity: 0.3;
  }
  &:active ::after {
    width: ${(props) => props.size * 2}px;
    height: ${(props) => props.size * 2}px;
    background: #fff;
  }

  ${(props) =>
    props.variant == "V1" &&
    css`
      ${(props) =>
        props.active &&
        css`
          &::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: ${(props) =>
              props.color || theme.color.PRIMARY[900]};
            width: ${(props) => props.size * 2}px;
            height: ${(props) => props.size * 2}px;
            border-radius: ${(props) => props.borderRadius || "50%"};
            transition: 0.3s background;
          }
          &:hover ::before {
            width: ${(props) => props.size * 2}px;
            height: ${(props) => props.size * 2}px;
            background: ${(props) =>
              props.color || theme.color.PRIMARY[900]};
          }
        `}
    `}
  ${(props) =>
    props.variant == "V2" &&
    css`
      ${(props) =>
        props.active &&
        css`
          &::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: transparent;
            width: ${(props) => props.size}px;
            height: ${(props) => props.size}px;
            border-radius: ${(props) => props.borderRadius || "50%"};
            transition: 0.3s background;
          }
          &:hover ::before {
            width: ${(props) => props.size * 2}px;
            height: ${(props) => props.size * 2}px;
            background: ${() => theme.color.NEUTRAL[50]};
          }
        `}
    `}
`;

export const SvgSC = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  fill: ${(props) => props.color || theme.color.PRIMARY[900]};
  ${(props) =>
    props.variant === "V1" &&
    css`
      ${(props) =>
        props.active &&
        css`
          fill: #fff;
        `}
    `}
  ${(props) =>
    props.variant === "V2" &&
    css`
      fill: ${() => theme.color.NEUTRAL[400]};
      ${(props) =>
        props.active &&
        css`
          fill: ${(props) => props.color || theme.color.PRIMARY[900]};
        `}
    `}
`;
