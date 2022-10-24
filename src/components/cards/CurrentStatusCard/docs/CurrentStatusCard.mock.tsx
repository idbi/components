/* eslint-disable no-alert */
import { ICurrentStatusCard } from "../types";

const base: ICurrentStatusCard = {
  items: [
    {
      description: "Estado",
      statusName: "accepted",
      statusDate: "10/10/2022",
    },
  ],
  title: "Datos del pedido",
  creationDate: "10/10/2022",
  creationDescription: "Pedido creado",
};

const intermediate: ICurrentStatusCard = {
  items: [
    {
      statusName: "preparing",
      statusDate: "10/10/2022",
    },
    {
      statusName: "accepted",
      statusDate: "10/10/2022",
    },
    {
      statusName: "pending",
      statusDate: "10/10/2022",
    },
  ],
  title: "Estados del pedido",
  creationDate: "10/10/2022",
  creationDescription: "Pedido creado",
};

export const mockCurrentStatusCardProps = {
  base,
  intermediate,
};
