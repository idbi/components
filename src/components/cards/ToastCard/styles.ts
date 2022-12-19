import { theme } from "@/theme";
import styled, { css } from "styled-components";
import { IToastCardType } from "./types";

const getColor = (type: IToastCardType) => {
  if (type === "success")
    return css`
      color: ${theme.color.SUCCESS[900]};
      background: ${theme.color.SUCCESS[100]};
    `;
  if (type === "warning")
    return css`
      color: ${theme.color.STATE[900]};
      background: ${theme.color.STATE[100]};
    `;
  if (type === "error")
    return css`
      color: ${theme.color.ALERT[700]};
      background: ${theme.color.ALERT[100]};
    `;
  if (type === "quaternary")
    return css`
      color: ${theme.color.QUATERNARY[900]};
      background: ${theme.color.QUATERNARY[100]};
    `;
  if (type === "tertiary")
    return css`
      color: ${theme.color.TERTIARY[900]};
      background: ${theme.color.TERTIARY[100]};
    `;
  return css`
    color: ${theme.color.PRIMARY[900]};
    background: ${theme.color.PRIMARY[100]};
  `;
};

interface IContainer {
  toastType: IToastCardType;
}

export const Container = styled.div<IContainer>`
  padding: 10px 15px;
  display: flex;
  align-items: center;
  gap: 15px;
  ${({ toastType }) => getColor(toastType)}
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 0.625rem;
  line-height: 0.9375rem;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 0.625rem;
  line-height: 0.9375rem;
`;

export const Link = styled.span`
  color: ${theme.color.SECONDARY[900]};
  text-decoration: underline;
  cursor: pointer;
`;
