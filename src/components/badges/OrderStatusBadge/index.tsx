import React from "react";
import { Container } from "./styles";
import type { IOrderStatusBadge, StatusType } from "./types";

const StatusDiccionary = {
  default: "...",
  draft: "Borrador",
  pending: "Pendiente",
  rejected: "Aceptado",
  accepted: "Preparando",
  canceled: "Anulado",
  preparing: "Preparando",
  readyforpickup: "Listo para recojo",
  delivered: "Entregado",
};

export const OrderStatusBadge: React.FC<IOrderStatusBadge> = ({
  statusName,
}) => {
  const getStatus = (status: StatusType) =>
    StatusDiccionary[status] || StatusDiccionary.default;

  return <Container statusName={statusName}>{getStatus(statusName)}</Container>;
};
