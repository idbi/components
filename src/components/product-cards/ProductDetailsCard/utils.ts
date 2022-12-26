import { ProductStatus } from "./types";

export const getStatusText = (status: ProductStatus) => {
  switch (status) {
    case "prepared":
      return "Listo";
    case "preparing":
      return "Preparando";
    default:
      return "Aceptado";
  }
};
