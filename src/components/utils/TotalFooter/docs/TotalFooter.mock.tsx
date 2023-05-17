import { ITotalFooter } from "../types";

const base: ITotalFooter = {
  total: 20,
  currencySymbol: "S/",
};

const withAside: ITotalFooter = {
  total: 20,
  currencySymbol: "S/",
  aside: "Costo total",
};

const withLightAside: ITotalFooter = {
  total: 20,
  currencySymbol: "S/",
  aside: "Costo total",
  config: { lightAside: true },
};

const withBoldSymbol: ITotalFooter = {
  total: 20,
  currencySymbol: "S/",
  aside: "Costo total",
  config: { lightAside: true, boldSymbol: true },
};

const leftPrice: ITotalFooter = {
  total: 20,
  currencySymbol: "S/",
  aside: "Valido hasta: 17/04/2023",
  config: { lightAside: true, pricePosition: "left" },
};

export const mockTotalFooterProps = {
  base,
  withAside,
  withLightAside,
  withBoldSymbol,
  leftPrice,
};
