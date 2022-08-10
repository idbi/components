import styled, { css } from "styled-components";
import { BaseButton } from "@/components/button";

type TabProps = {
  readonly isActive: boolean;
};

export const Tab = styled(BaseButton)<TabProps>`
  font-size: 14px;
  position: relative;
  display: flex;
  gap: 10px;
  span.pill {
    border-radius: 2px;
    font-size: 12px;
    padding: 10px;
    color: ${(props) => props.theme.color.NEUTRAL[500]};
    background-color: ${(props) => props.theme.color.NEUTRAL[200]};
  }
  ${(props) => {
    if (props.isActive) {
      return css`
        color: ${(props) => props.theme.color.SECONDARY[900]};
        span.pill {
          color: ${(props) => props.theme.color.SECONDARY[900]};
          background-color: ${(props) => props.theme.color.SECONDARY[100]};
        }

        ::after {
          content: "";
          position: absolute;
          width: 24px;
          height: 4px;
          border-radius: 8px;
          background-color: ${(props) => props.theme.color.SECONDARY[900]};
          bottom: -2.5px;
          left: 2.5px;
          animation: fadeIn 1.2s;
          -webkit-animation: fadeIn 1.2s;
          -moz-animation: fadeIn 1.2s;
          -o-animation: fadeIn 1.2s;
          -ms-animation: fadeIn 1.2s;
          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

          @-moz-keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

          @-webkit-keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

          @-o-keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

          @-ms-keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
        }
      `;
    }
    return css`
      color: ${(props) => props.theme.color.NEUTRAL[600]};
    `;
  }};
`;
