/* eslint-disable no-alert */
import { OrderStatusBadge } from "../../../badges/OrderStatusBadge";
import { ITotalsCard } from "../types";

const base: ITotalsCard = {
  title: "Productos",
  actionName: "ver más",
  onAction: () => alert("ver más"),
  items: [
    {
      quantity: 3,
      description: "productos",
      amount: 12,
      currency: "s/",
    },
  ],
};

const intermediate: ITotalsCard = {
  title: "Resumen de la compra",
  hideQuantity: true,
  items: [
    {
      description: "Subtotal",
      amount: 12,
      currency: "s/",
    },
    {
      description: "Cupón 10%",
      amount: -5,
      currency: "s/",
      remark: true,
      decorators: <OrderStatusBadge statusName="accepted" />,
    },
    {
      description: "Descuento 5%",
      amount: -3,
      currency: "s/",
      remark: true,
    },
  ],
};

const advanced: ITotalsCard = {
  background: "transparent",
  gap: 30,
  padding: "0px",
  items: [
    {
      uuid: "asdqwddasdfecsad",
      img: "https://picsum.photos/200",
      quantity: 1,
      description: "Burgr Honey",
      amount: 8,
      currency: "s/",
      notes: ["Side Camote frito", "Side Papas fritas"],
    },
    {
      uuid: "asdqwddavvvvfecsad",
      img: "https://picsum.photos/200",
      quantity: 3,
      description: "Burger clásica",
      amount: 4,
      currency: "s/",
      notes: [],
      decorators: <OrderStatusBadge statusName="preparing" />,
    },
    {
      uuid: "asdqwffffsdfecsad",
      img: "https://picsum.photos/200",
      quantity: 2,
      description: "Ejemplo de combo",
      decorators: <OrderStatusBadge statusName="canceled" />,
      amount: 5,
      currency: "s/",
      notes: [
        "1x 1/2 AMARETTO Color Verde",
        "2x 1/2 AMARETTO Color Beige",
        "2x 1/2 BOT SANTA JULIA",
      ],
    },
  ],
};

const withChildren: ITotalsCard = {
  title: "Productos",
  actionName: "ver más",
  onAction: () => alert("ver más"),
  items: [
    {
      quantity: 3,
      description: "productos",
      amount: 12,
      currency: "s/",
    },
  ],
  children: <p style={{ padding: "20px 0 0" }}>Footer with children</p>,
};

export const mockTotalsCardProps = {
  base,
  intermediate,
  advanced,
  withChildren,
};
