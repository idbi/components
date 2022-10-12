/* eslint-disable no-alert */
import { IConfirmationCardV2 } from "../types";

const base: IConfirmationCardV2 = {
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

export const mockConfirmationCardV2Props = {
  base,
};
