import styled, { css } from "styled-components";
import { Model } from "./types";

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

type ContainerProps = {
  model: Model;
  position: string;
};

export const Container = styled(FlexWrapper)<ContainerProps>`
  background-color: white;
  width: 100%;
  min-height: 68px;
  padding: 15px;
  position: ${({ position }) => position};
  bottom: 0;
  left: 0;

  ${({ model, theme }) => {
    switch (model) {
      case "primary":
        return css`
          box-shadow: ${theme.effect.darkShadow[24]};
        `;
      default:
        return css`
          border-top: 1px solid ${theme.color.NEUTRAL[200]};
        `;
    }
  }}
`;

export const Content = styled(FlexWrapper)`
  gap: 10px;
`;

export const TotalContainer = styled.div<{ vertical?: boolean }>`
  color: ${({ theme }) => theme.color.PRIMARY[900]};
  display: flex;
  align-items: center;
  gap: 0 10px;
  font-size: 12px;
  letter-spacing: -0.04em;

  span {
    display: block;
    font-size: 18px;
    font-weight: 800;
  }

  ${({ vertical }) =>
    vertical &&
    css`
      flex-direction: column;
      align-items: flex-start;
      span {
        margin-top: -3px;
      }
    `}
`;
