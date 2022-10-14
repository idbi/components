import { theme } from "@/theme";
import styled, { css } from "styled-components";
import { StatusType } from "./types";

interface IContainer {
  statusName: StatusType;
}

export const Container = styled.span<IContainer>`
  padding: 4px 10px;
  border-radius: 8px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 0.75rem;
  line-height: 1.125rem;
  letter-spacing: -0.04em;
  background: ${theme.color.STATUS.DEFAULT[0]};
  color: ${theme.color.STATUS.DEFAULT[1]};

  ${({ statusName }) => {
    if (statusName === "draft")
      return css`
        background: ${theme.color.STATUS.DRAFT[0]};
        color: ${theme.color.STATUS.DRAFT[1]};
      `;
    if (statusName === "pending")
      return css`
        background: ${theme.color.STATUS.PENDING[0]};
        color: ${theme.color.STATUS.PENDING[1]};
      `;
    if (statusName === "rejected")
      return css`
        background: ${theme.color.STATUS.REJECTED[0]};
        color: ${theme.color.STATUS.REJECTED[1]};
      `;
    if (statusName === "accepted")
      return css`
        background: ${theme.color.STATUS.ACCEPTED[0]};
        color: ${theme.color.STATUS.ACCEPTED[1]};
      `;
    if (statusName === "canceled")
      return css`
        background: ${theme.color.STATUS.CANCELED[0]};
        color: ${theme.color.STATUS.CANCELED[1]};
    `;
    if (statusName === "preparing")
      return css`
        background: ${theme.color.STATUS.PREPARING[0]};
        color: ${theme.color.STATUS.PREPARING[1]};
      `;
    if (statusName === "readyforpickup")
      return css`
        background: ${theme.color.STATUS.READYFORPICKUP[0]};
        color: ${theme.color.STATUS.READYFORPICKUP[1]};
      `;
    if (statusName === "delivered")
      return css`
        background: ${theme.color.STATUS.DELIVERED[0]};
        color: ${theme.color.STATUS.DELIVERED[1]};
      `;
  }};
`;
