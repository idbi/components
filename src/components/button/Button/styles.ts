import styled, { css } from "styled-components";
import { IButton } from ".";

export const BaseButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
`;

export const Button = styled(BaseButton)<IButton>`
  :disabled {
    cursor: not-allowed;
  }
  border: ${({ noBorder }) => (noBorder ? "none" : "1px solid")};
  border-radius: 10px;
  transition: background 0.3s ease-out;
  ${({ model = "primary" }) => {
    if (model === "primary")
      return css`
        color: white;
        svg {
          color: white;
        }
        background-color: ${(props) => props.theme.color.SECONDARY[900]};
        :hover {
          background-color: ${(props) => props.theme.color.SECONDARY[700]};
        }
        :disabled {
          background-color: ${(props) => props.theme.color.SECONDARY[300]};
        }
      `;
    if (model === "secondary")
      return css`
        border-color: ${(props) => props.theme.color.SECONDARY[900]};
        background-color: transparent;
        color: ${(props) => props.theme.color.SECONDARY[900]};
        svg {
          color: ${(props) => props.theme.color.SECONDARY[900]};
          fill: ${(props) => props.theme.color.SECONDARY[900]};
        }
        :hover {
          border-color: ${(props) => props.theme.color.SECONDARY[600]};
          color: ${(props) => props.theme.color.SECONDARY[600]};
          svg {
            color: ${(props) => props.theme.color.SECONDARY[600]};
            fill: ${(props) => props.theme.color.SECONDARY[600]};
          }
        }
        :disabled {
          border-color: ${(props) => props.theme.color.SECONDARY[200]};
          color: ${(props) => props.theme.color.SECONDARY[200]};
          svg {
            color: ${(props) => props.theme.color.SECONDARY[200]};
          }
        }
      `;
    if (model === "secondary-empty")
      return css`
        border-color: none;
        background-color: transparent;
        color: ${(props) => props.theme.color.SECONDARY[900]};
        svg {
          color: ${(props) => props.theme.color.SECONDARY[900]};
          fill: ${(props) => props.theme.color.SECONDARY[900]};
        }
        :hover {
          color: ${(props) => props.theme.color.SECONDARY[600]};
          svg {
            color: ${(props) => props.theme.color.SECONDARY[600]};
            fill: ${(props) => props.theme.color.SECONDARY[600]};
          }
        }
        :disabled {
          color: ${(props) => props.theme.color.SECONDARY[200]};
          svg {
            color: ${(props) => props.theme.color.SECONDARY[200]};
          }
        }
      `;
    if (model === "tertiary")
      return css`
        background-color: ${(props) => props.theme.color.QUATERNARY[200]};
        color: ${(props) => props.theme.color.SECONDARY[900]};
        svg {
          color: ${(props) => props.theme.color.SECONDARY[900]};
        }
        :hover {
          background-color: ${(props) => props.theme.color.QUATERNARY[300]};
          border-color: ${(props) => props.theme.color.SECONDARY[900]};
          color: ${(props) => props.theme.color.SECONDARY[900]};
          svg {
            color: ${(props) => props.theme.color.SECONDARY[900]};
          }
        }
        :disabled {
          background-color: ${(props) => props.theme.color.QUATERNARY[100]};
          color: ${(props) => props.theme.color.SECONDARY[400]};
          svg {
            color: ${(props) => props.theme.color.SECONDARY[400]};
          }
        }
      `;
    if (model === "quaternary")
      return css`
        color: white;
        svg {
          color: white;
        }
        background-color: ${(props) => props.theme.color.PRIMARY[900]};
        :hover {
          background-color: ${(props) => props.theme.color.PRIMARY[700]};
        }
        :disabled {
          background-color: ${(props) => props.theme.color.PRIMARY[300]};
        }
      `;
    if (model === "quaternary-empty")
      return css`
        border-color: ${(props) => props.theme.color.PRIMARY[900]};
        background-color: white;
        color: ${(props) => props.theme.color.PRIMARY[900]};
        svg {
          color: ${(props) => props.theme.color.PRIMARY[900]};
          fill: ${(props) => props.theme.color.PRIMARY[900]};
        }
        :hover {
          border-color: ${(props) => props.theme.color.PRIMARY[600]};
          color: ${(props) => props.theme.color.PRIMARY[600]};
          svg {
            color: ${(props) => props.theme.color.PRIMARY[600]};
            fill: ${(props) => props.theme.color.PRIMARY[600]};
          }
        }
        :disabled {
          border-color: ${(props) => props.theme.color.PRIMARY[200]};
          color: ${(props) => props.theme.color.PRIMARY[200]};
          svg {
            color: ${(props) => props.theme.color.PRIMARY[200]};
          }
        }
      `;
    if (model === "alert-light")
      return css`
        color: white;
        svg {
          color: white;
        }
        background-color: ${(props) => props.theme.color.ALERT[700]};
        :hover {
          background-color: ${(props) => props.theme.color.ALERT[600]};
        }
        :disabled {
          background-color: ${(props) => props.theme.color.ALERT[300]};
        }
      `;
    if (model === "neutral")
      return css`
        border-color: ${(props) => props.theme.color.PRIMARY[900]};
        background-color: white;
        color: ${(props) => props.theme.color.PRIMARY[900]};
        svg {
          color: ${(props) => props.theme.color.PRIMARY[900]};
          fill: ${(props) => props.theme.color.PRIMARY[900]};
        }
        :hover {
          border-color: ${(props) => props.theme.color.PRIMARY[600]};
          color: ${(props) => props.theme.color.PRIMARY[600]};
          svg {
            color: ${(props) => props.theme.color.PRIMARY[600]};
            fill: ${(props) => props.theme.color.PRIMARY[600]};
          }
        }
        :disabled {
          border-color: ${(props) => props.theme.color.PRIMARY[300]};
          color: ${(props) => props.theme.color.PRIMARY[300]};
          svg {
            color: ${(props) => props.theme.color.PRIMARY[300]};
          }
        }
      `;
  }}
  ${({ size = "small" }) => {
    if (size === "big")
      return css`
        padding: 16px 24px;
        font-size: 16px;
      `;
    if (size === "small")
      return css`
        padding: 12px 16px;
        font-size: 14px;
      `;
  }}
  ${({ full }) => {
    if (full)
      return css`
        width: 100%;
      `;
  }}
  ${({ rounded }) => {
    if (rounded)
      return css`
        border-radius: 32px;
      `;
  }}
`;
