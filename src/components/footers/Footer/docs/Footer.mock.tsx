import { IFooter } from "../types";

const primary: IFooter = {
  children: "Footer content",
};

const secondary: IFooter = {
  children: "Footer content",
  model: "secondary",
};

const withTotal: IFooter = {
  total: { label: "Costo total", currencySymbol: "S/", value: 36 },
};

const withExtraContent: IFooter = {
  children: <div>Some content</div>,
  total: { label: "Costo total", currencySymbol: "S/", value: 36 },
};

const fixedStrategy: IFooter = {
  children: <div>Some content</div>,
  total: { label: "Costo total", currencySymbol: "S/", value: 36 },
  positionStrategy: "fixed",
};

export const mockFooterProps = {
  primary,
  secondary,
  withTotal,
  withExtraContent,
  fixedStrategy,
};
