/* eslint-disable no-alert */
import { IOrderStatusBadge } from "../types";

const defaultStatus: IOrderStatusBadge = { statusName: "default" };
const draftStatus: IOrderStatusBadge = { statusName: "draft" };
const pendingStatus: IOrderStatusBadge = { statusName: "pending" };
const rejectedStatus: IOrderStatusBadge = { statusName: "rejected" };
const acceptedStatus: IOrderStatusBadge = { statusName: "accepted" };
const canceledStatus: IOrderStatusBadge = { statusName: "canceled" };
const preparingStatus: IOrderStatusBadge = { statusName: "preparing" };
const readyforpickupStatus: IOrderStatusBadge = {
  statusName: "readyforpickup",
};
const deliveredStatus: IOrderStatusBadge = { statusName: "delivered" };

export const mockOrderStatusBadgeProps = {
  defaultStatus,
  draftStatus,
  pendingStatus,
  rejectedStatus,
  acceptedStatus,
  canceledStatus,
  preparingStatus,
  readyforpickupStatus,
  deliveredStatus,
};
