/* eslint-disable no-alert */
import { IShopTable } from "../types";

const available: IShopTable = {
  uuid: "1",
  counter: 0,
  label: "B1-10",
  noHover: false,
  noCounter: false,
  status: "available",
  onClick: () => alert("click on B1-10"),
};

const occupied: IShopTable = {
  uuid: "2",
  counter: 3,
  label: "B1-10",
  noHover: false,
  noCounter: false,
  status: "occupied",
  onClick: () => alert("click on B1-10"),
};

const selected: IShopTable = {
  uuid: "3",
  counter: 1,
  label: "B1-10",
  noHover: false,
  noCounter: false,
  status: "selected",
  onClick: () => alert("click on B1-10"),
};

export const mockShopTableProps = {
  available,
  occupied,
  selected,
};
