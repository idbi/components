import styled, { css } from "styled-components";
import { OrderStatusType } from "../../../types/OrderStatusType";

interface IContainer {
  statusName?: OrderStatusType;
  radius?: number;
}

export const Container = styled.div<IContainer>`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 20px;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.125rem;
  letter-spacing: -0.04em;
  background: #fff;
  color: #404040;
  border-radius: ${({ radius }) => `${radius}px` || "0"};

  ${({ theme, statusName }) => {
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

export const Title = styled.p`
  font-weight: 700;
`;
