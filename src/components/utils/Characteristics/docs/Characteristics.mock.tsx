import { ICharacteristics } from "../types";

const base: ICharacteristics = {
  title: "Venta",
  description: "Producto vendido de manera externa",
};

const withAside: ICharacteristics = {
  title: "Venta",
  description: "Producto vendido de manera externa",
  aside: "Principal",
};

const descriptionTop: ICharacteristics = {
  title: "Carlos Arturo Contreras Bravo",
  description: "Coti coti plan mensual",
  aside: "Principal",
  descriptionTop: true,
};

const noDescription: ICharacteristics = {
  title: "Carlos Arturo Contreras Bravo",
  aside: "Principal",
};

export const mockCharacteristicsProps = {
  base,
  withAside,
  descriptionTop,
  noDescription,
};
