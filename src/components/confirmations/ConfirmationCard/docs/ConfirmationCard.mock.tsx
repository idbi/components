/* eslint-disable no-alert */
import { IConfirmationCard } from "../types";

const base: IConfirmationCard = {
  children: <p>¿Estás seguro que deseas eliminar la tarjeta Crédito *1234?</p>,
  btnLeft: {
    onClick: () => alert("Cancelar"),
    text: "Cancelar",
  },
  btnRight: {
    onClick: () => alert("Eliminar tarjeta"),
    text: "Eliminar tarjeta",
  },
};

export const mockConfirmationCardProps = {
  base,
};
