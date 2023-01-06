import { IKpiCardV2 } from "../types";

const defaultCard: IKpiCardV2 = {
  currentAmount: 100.5,
  oldAmount: 100.1,
  name: "total de venta",
  symbol: "S/",
  autoWidth: false,
  loading: false,
  noDecimals: false,
};

const loadingCard: IKpiCardV2 = {
  currentAmount: 100.5,
  oldAmount: 100.1,
  name: "total de venta",
  symbol: "S/",
  autoWidth: false,
  loading: true,
  noDecimals: true,
};

export const mockKpiCardV2Props = {
  defaultCard,
  loadingCard,
};
