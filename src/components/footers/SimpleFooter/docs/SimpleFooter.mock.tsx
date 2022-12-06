import { IconClock } from "@/icons/IconClock";
import { ISimpleFooter } from "../types";

const base: ISimpleFooter = {
  description: "Costo de la orden",
  buttons: [
    {
      children: "Pasar a finalizado",
      onClick: () => alert("hola"),
    },
  ],
  container: {
    gap: "20px",
    padding: "20px",
  },
};
const variant: ISimpleFooter = {
  description: (
    <div style={{ minWidth: "100px" }}>
      Total a pagar <br /> <strong>S/105.80</strong>
    </div>
  ),
  buttons: [
    {
      children: "PRE-ORDEN",
      onClick: () => alert("pre orden"),
      fullWidth: true,
      style: { maxWidth: "300px" }
    },
    {
      children: "FINALIZAR",
      onClick: () => alert("finalizar"),
      fullWidth: true,
      style: { maxWidth: "300px" },
      design: "outline",
    },
  ],
  container: {
    gap: "15px",
    padding: "15px",
    marginTop: "20px",
    isFixed: true,
  },
};

export const mockSimpleFooterProps = {
  base,
  variant,
};
