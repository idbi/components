/* eslint-disable no-alert */
import { IConfirmationCardV3 } from "../types";

const base: IConfirmationCardV3 = {
  title: "Crear cotización",
  content: "Elige como deseas crear la cotizacion",
  options: [
    {
      content: (
        <span>
          Crear <b>borrador</b>
        </span>
      ),
      onClick: () => alert("Crear borrador"),
    },
    {
      content: (
        <span>
          Crear y <b>finalizar</b>
        </span>
      ),
      onClick: () => alert("Crear y finalizar"),
    },
    {
      content: "Crear",
      type: "primary",
      onClick: () => alert("Crear"),
    },
  ],
  cancelOptions: [
    {
      content: "Cancelar",
      onClick: () => alert("Cancelar"),
    },
  ],
};

export const mockConfirmationCardV2Props = {
  base,
};
