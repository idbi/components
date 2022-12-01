/* eslint-disable prettier/prettier */
import { theme } from "@/theme";
import styled from "styled-components";

interface IContainer {
  padding?: string;
  gap?: string;
  marginTop?: string;
  isFixed?: boolean;
  zIndex?: number;
  boxShadow?: string;
}

export const Container = styled.div<IContainer>`
  display: flex;
  gap: ${({ gap }) => gap || "15px"};
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: ${({ marginTop }) => marginTop || "15px"};
  padding: ${({ padding }) => padding || "10px 20px"};
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.125rem;
  font-family: 'DM Sans';
  font-style: normal;
  letter-spacing: -0.04em;
  color: ${theme.color.PRIMARY[900]};
  background: ${theme.color.PRIMARY[0]};
  box-shadow: ${({boxShadow}) => boxShadow || theme.effect.darkShadow[6]};
  position: ${({isFixed}) => isFixed ? "fixed" : "static"};
  bottom: 0;
  left: 0;
  z-index: ${({zIndex}) => zIndex || "5"};
`;
