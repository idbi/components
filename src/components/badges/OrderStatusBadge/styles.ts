/* eslint-disable prettier/prettier */
import { OrderStatusType } from "@/types/OrderStatusType";
import styled, { css } from "styled-components";

interface IContainer {
  statusName: OrderStatusType;
  removeBackground?: boolean;
}

export const Container = styled.span<IContainer>`
  padding: ${({ removeBackground }) => removeBackground ? "0" : "4px 10px "};
  border-radius: 8px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 0.75rem;
  line-height: 1.125rem;
  letter-spacing: -0.04em;
  background: ${({ theme, removeBackground }) => removeBackground ? "transparent" : theme.color.STATUS.DEFAULT[0]};
  color: ${({theme}) => theme.color.STATUS.DEFAULT[1]};

  ${({ theme, statusName, removeBackground }) => {
    if (statusName === "draft")
      return css`
        background: ${removeBackground ? "transparent" : theme.color.STATUS.DRAFT[0]};
        color: ${theme.color.STATUS.DRAFT[1]};
      `;
    if (statusName === "pending")
      return css`
        background: ${removeBackground ? "transparent" : theme.color.STATUS.PENDING[0]};
        color: ${theme.color.STATUS.PENDING[1]};
      `;
    if (statusName === "rejected")
      return css`
        background: ${removeBackground ? "transparent" : theme.color.STATUS.REJECTED[0]};
        color: ${theme.color.STATUS.REJECTED[1]};
      `;
    if (statusName === "accepted")
      return css`
        background: ${removeBackground ? "transparent" : theme.color.STATUS.ACCEPTED[0]};
        color: ${theme.color.STATUS.ACCEPTED[1]};
      `;
    if (statusName === "canceled")
      return css`
        background: ${removeBackground ? "transparent" : theme.color.STATUS.CANCELED[0]};
        color: ${theme.color.STATUS.CANCELED[1]};
      `;
    if (statusName === "preparing")
      return css`
        background: ${removeBackground ? "transparent" : theme.color.STATUS.PREPARING[0]};
        color: ${theme.color.STATUS.PREPARING[1]};
      `;
    if (statusName === "readyforpickup")
      return css`
        background: ${removeBackground ? "transparent" : theme.color.STATUS.READYFORPICKUP[0]};
        color: ${theme.color.STATUS.READYFORPICKUP[1]};
      `;
    if (statusName === "delivered")
      return css`
        background: ${removeBackground ? "transparent" : theme.color.STATUS.DELIVERED[0]};
        color: ${theme.color.STATUS.DELIVERED[1]};
      `;
    if (statusName === "finished")
      return css`
        background: ${removeBackground ? "transparent" : theme.color.STATUS.FINISHED[0]};
        color: ${theme.color.STATUS.FINISHED[1]};
      `;
  }};
`;
