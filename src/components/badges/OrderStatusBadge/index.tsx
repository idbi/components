import { OrderStatusType } from "@/types/OrderStatusType";
import React from "react";
import { Container } from "./styles";
import type { IOrderStatusBadge } from "./types";

const StatusDiccionary = {
  default: "...",
  draft: "Borrador",
  pending: "Pendiente",
  rejected: "Rechazado",
  accepted: "Aceptado",
  canceled: "Anulado",
  preparing: "Preparando",
  readyforpickup: "Listo para recojo",
  delivered: "Entregado",
  finished: "Finalizado",
};

export const OrderStatusBadge: React.FC<IOrderStatusBadge> = ({
  statusName,
  text,
  removeBackground,
}) => {
  const getStatus = (status: OrderStatusType) =>
    StatusDiccionary[status] || StatusDiccionary.default;

  return (
    <Container statusName={statusName} removeBackground={removeBackground}>
      {text || getStatus(statusName)}
    </Container>
  );
};
