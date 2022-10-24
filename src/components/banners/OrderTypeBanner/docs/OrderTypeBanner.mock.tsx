/* eslint-disable no-alert */
import { OrderStatusBadge } from "../../../badges/OrderStatusBadge";
import { IOrderTypeBanner } from "../types";

const onTable: IOrderTypeBanner = { type: "on-table" };
const delivery: IOrderTypeBanner = { type: "delivery" };
const onRoom: IOrderTypeBanner = { type: "on-room" };
const pickUp: IOrderTypeBanner = { type: "pick-up" };

const personalizeWithChildren: IOrderTypeBanner = {
  type: "delivery",
  message: " ",
  children: (
    <div style={{ marginBottom: "18px" }}>
      Su pedido ha sido <OrderStatusBadge statusName="canceled" />
    </div>
  ),
};

export const mockOrderTypeBannerProps = {
  onTable,
  delivery,
  onRoom,
  pickUp,
  personalizeWithChildren,
};
