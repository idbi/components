/* eslint-disable no-alert */
import { IShopTable } from "../types";

const available: IShopTable = {
  counter: 0,
  label: "B1-10",
  noHover: false,
  status: "available",
  onClick: () => alert("click on B1-10"),
};

const occupied: IShopTable = {
  counter: 3,
  label: "B1-10",
  noHover: false,
  status: "occupied",
  onClick: () => alert("click on B1-10"),
};

const selected: IShopTable = {
  counter: 1,
  label: "B1-10",
  noHover: false,
  status: "selected",
  onClick: () => alert("click on B1-10"),
};

export const mockShopTableProps = {
  available,
  occupied,
  selected,
};
