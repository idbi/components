/* eslint-disable no-alert */
import { IStatusBanner } from "../types";

const base: IStatusBanner = { status: "default" };
const draft: IStatusBanner = { status: "draft" };
const pending: IStatusBanner = { status: "pending" };
const rejected: IStatusBanner = { status: "rejected" };
const accepted: IStatusBanner = { status: "accepted" };
const canceled: IStatusBanner = { status: "canceled" };
const preparing: IStatusBanner = { status: "preparing" };
const readyForPickup: IStatusBanner = { status: "readyforpickup" };
const delivered: IStatusBanner = { status: "delivered" };

const personalize: IStatusBanner = {
  status: "pending",
  title: "Title",
  description: "Banner personalizado con el color de un estado.",
  icon: <> 🚀 </>,
  radius: 20,
};

const personalizeWithChildren: IStatusBanner = {
  status: "accepted",
  title: " ",
  description: " ",
  icon: <> </>,
  children: <h2>Title</h2>,
};

export const mockStatusBannerProps = {
  base,
  draft,
  pending,
  rejected,
  accepted,
  canceled,
  preparing,
  readyForPickup,
  delivered,
  personalize,
  personalizeWithChildren,
};
