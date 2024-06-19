import { StatusType } from "../../../types/globalTypes";

export const getStatusText = (status: StatusType) => {
  switch (status) {
    case "draft":
      return "Borrador";
    case "pending":
      return "Pendiente";
    case "accepted":
      return "Aceptado";
    case "preparing":
      return "Preparando";
    case "prepared":
      return "Listo";
    case "collected":
      return "Enviado";
    case "delivered":
      return "Entregado";
    case "canceled":
      return "Anulado";
    case "wasted":
      return "Dado de baja";
    default:
      return "";
  }
};
