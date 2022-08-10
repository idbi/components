import styled, { css } from "styled-components";

type ModelType = "primary" | "neutral";

export const Patch = styled.span<{ model: ModelType }>`
  display: inline-block;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 12px;

  ${(props) => {
    if (props.model === "primary")
      return css`
        background-color: ${(props) => props.theme.color.QUATERNARY[300]};
        color: ${(props) => props.theme.color.PRIMARY[900]};
      `;
    if (props.model === "neutral")
      return css`
        background-color: ${(props) => props.theme.color.NEUTRAL[50]};
        color: ${(props) => props.theme.color.NEUTRAL[500]};
      `;
  }}
`;
