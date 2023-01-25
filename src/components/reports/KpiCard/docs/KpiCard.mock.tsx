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

const mainCard: IKpiCard = {
  title: "Efectivo sin decimales and size to 100% ",
  total_USD: 1010.5,
  autoWidth: true,
  tip_USD: 3500,
  main: true,
  noDecimals: true,
};

const loadingCard: IKpiCard = {
  title: "Total",
  total_USD: 1010.5,
  tip_USD: 3500,
  main: false,
  loading: true,
};

export const mockKpiCardProps = {
  defaultCard,
  PERCard,
  USACard,
  mainCard,
  loadingCard,
};
