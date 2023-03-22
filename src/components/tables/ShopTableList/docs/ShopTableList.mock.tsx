/* eslint-disable no-alert */
import { IShopTableList } from "../types";

const base: IShopTableList = {
  key: "tables1",
  tables: [
    {
      label: "B1-1",
      status: "occupied",
      counter: 0,
      noHover: false,
      noCounter: false,
      onClick: () => alert("click B1-1"),
    },
    {
      label: "B1-2",
      status: "selected",
      counter: 1,
      noHover: false,
      noCounter: false,
      onClick: () => alert("click B1-2"),
    },
    {
      label: "B1-3",
      status: "available",
      counter: 0,
      noHover: false,
      noCounter: false,
      onClick: () => alert("click B1-3"),
    },
    {
      label: "B1-4",
      status: "occupied",
      counter: 0,
      noHover: false,
      noCounter: false,
      onClick: () => alert("click B1-4"),
    },
    {
      label: "A1-1",
      status: "available",
      counter: 0,
      noHover: false,
      noCounter: false,
      onClick: () => alert("click A1-1"),
    },
    {
      label: "A1-2",
      status: "available",
      counter: 0,
      noHover: false,
      noCounter: false,
      onClick: () => alert("click A1-2"),
    },
    {
      label: "A1-3",
      status: "available",
      counter: 0,
      noHover: false,
      noCounter: false,
      onClick: () => alert("click A1-3"),
    },
    {
      label: "A1-4",
      status: "available",
      counter: 0,
      noHover: false,
      noCounter: false,
      onClick: () => alert("click A1-4"),
    },
    {
      label: "BOX1-1",
      status: "available",
      counter: 0,
      noHover: false,
      noCounter: false,
      onClick: () => alert("click BOX1-1"),
    },
    {
      label: "BOX1-2",
      status: "available",
      counter: 0,
      noHover: false,
      noCounter: false,
      onClick: () => alert("click BOX1-2"),
    },
    {
      label: "BOX1-3",
      status: "occupied",
      counter: 2,
      noHover: false,
      noCounter: false,
      onClick: () => alert("click BOX1-3"),
    },
    {
      label: "BOX1-4",
      status: "available",
      counter: 0,
      noHover: false,
      noCounter: false,
      onClick: () => alert("click BOX1-4"),
    },
    {
      label: "PREMIUN-1",
      status: "occupied",
      counter: 1,
      noHover: false,
      noCounter: false,
      onClick: () => alert("click PREMIUN-1"),
    },
    {
      label: "PREMIUN-2",
      status: "available",
      counter: 0,
      noHover: false,
      noCounter: false,
      onClick: () => alert("click PREMIUN-2"),
    },
  ],
};

const variant: IShopTableList = {
  key: "tables1",
  tables: [
    {
      label: "B1-1",
      status: "occupied",
      counter: 0,
      noHover: false,
      noCounter: true,
      onClick: () => alert("click B1-1"),
    },
    {
      label: "B1-2",
      status: "selected",
      counter: 1,
      noHover: false,
      noCounter: true,
      onClick: () => alert("click B1-2"),
    },
    {
      label: "B1-3",
      status: "available",
      counter: 0,
      noHover: false,
      noCounter: true,
      onClick: () => alert("click B1-3"),
    },
    {
      label: "B1-4",
      status: "occupied",
      counter: 0,
      noHover: false,
      noCounter: true,
      onClick: () => alert("click B1-4"),
    },
  ],
};

export const mockShopTableListProps = {
  base,
  variant,
};
