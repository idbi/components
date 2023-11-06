import { IdiBag } from "@/icons/IdiBag";
import { IKpiCard } from "../types";

const defaultCard: IKpiCard = {
  title: "Total",
  total_PEN: 1005,
  total_USD: 1010.1,
  autoWidth: false,
  tip_PEN: 140,
  tip_USD: 3500,
  main: false,
  loading: false,
  noDecimals: false,
};

const PERCard: IKpiCard = {
  title: "Efectivo",
  total_PEN: 1005,
  autoWidth: false,
  tip_PEN: 140,
  main: false,
  loading: false,
  noDecimals: false,
};

const USACard: IKpiCard = {
  title: "Efectivo",
  total_USD: 1010.1,
  autoWidth: false,
  tip_USD: 3500,
  main: false,
  loading: false,
  noDecimals: false,
};

const withQuantityCard: IKpiCard = {
  title: "Efectivo",
  total_USD: 1010.1,
  main: false,
  loading: false,
  noDecimals: false,
  quantity: { title: "N° de órdenes", value: 20 },
};

const mainCard: IKpiCard = {
  title: "Efectivo sin decimales and size to 100% ",
  total_USD: 1010.5,
  autoWidth: true,
  tip_USD: 3500,
  main: true,
  noDecimals: true,
};

const bigAmountsCard: IKpiCard = {
  title: "Efectivo sin decimales and size to 100% ",
  total_USD: 1010.5,
  total_PEN: 1010.5,
  autoWidth: true,
  tip_USD: 3500,
  main: true,
  noDecimals: true,
  big: true,
};

const loadingCard: IKpiCard = {
  title: "Total",
  total_USD: 1010.5,
  tip_USD: 3500,
  main: false,
  loading: true,
};

const withIconCard: IKpiCard = {
  title: "Total de ventas",
  total_PEN: 1234.4,
  total_USD: 124.2,
  autoWidth: true,
  icon: <IdiBag />,
};

export const mockKpiCardProps = {
  defaultCard,
  PERCard,
  USACard,
  withQuantityCard,
  mainCard,
  loadingCard,
  bigAmountsCard,
  withIconCard,
};
