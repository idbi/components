/* eslint-disable no-alert */
import { IHorizontalDivision } from "../types";

const base: IHorizontalDivision = {
  children: "#1",
};

const customThickness: IHorizontalDivision = {
  children: "#1",
  thickness: 3,
};

const customMinDivisionWidth: IHorizontalDivision = {
  children:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, rem ex sit sunt asperiores quia dolore maxime eligendi labore dolores et explicabo minima, possimus, cumque delectus! Obcaecati blanditiis hic cupiditate.",
  thickness: 3,
  hrMinWidth: 120,
};

export const mock = {
  base,
  customThickness,
  customMinDivisionWidth,
};
