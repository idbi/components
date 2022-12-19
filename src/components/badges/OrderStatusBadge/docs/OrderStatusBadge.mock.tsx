/* eslint-disable prettier/prettier */
/* eslint-disable no-alert */
import { IOrderStatusBadge } from "../types";

const defaultStatus: IOrderStatusBadge = { statusName: "default", removeBackground: false, text:"" };
const draftStatus: IOrderStatusBadge = { statusName: "draft", removeBackground: false, text:"" };
const pendingStatus: IOrderStatusBadge = { statusName: "pending", removeBackground: false, text:"" };
const rejectedStatus: IOrderStatusBadge = { statusName: "rejected", removeBackground: false, text:"" };
const acceptedStatus: IOrderStatusBadge = { statusName: "accepted", removeBackground: false, text:"" };
const canceledStatus: IOrderStatusBadge = { statusName: "canceled" , removeBackground: false, text:""};
const preparingStatus: IOrderStatusBadge = { statusName: "preparing", removeBackground: false, text:"" };
const readyforpickupStatus: IOrderStatusBadge = {
  statusName: "readyforpickup",
};
const deliveredStatus: IOrderStatusBadge = { statusName: "delivered" };
const finishedStatus: IOrderStatusBadge = { statusName: "finished" };

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
  finishedStatus
};
