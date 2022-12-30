/* eslint-disable no-alert */
import { IButtonsSelect } from "../types";

const base: IButtonsSelect = {
  onSelect: (val, selected) => {},
  selected: "1",
  options: [
    { value: "1", content: 1 },
    { value: "2", content: 2 },
    { value: "3", content: 3 },
    { value: "4", content: 4 },
    { value: "5", content: 5 },
  ],
};

const withTitle: IButtonsSelect = {
  title: "Orden",
  onSelect: (val, selected) => {},
  selected: "1",
  options: [
    { value: "1", content: 1 },
    { value: "2", content: 2 },
    { value: "3", content: 3 },
    { value: "4", content: 4 },
    { value: "5", content: 5 },
  ],
};

const withDisabledOptions: IButtonsSelect = {
  title: "Orden",
  onSelect: (val, selected) => {},
  selected: "1",
  options: [
    { value: "1", content: 1 },
    { value: "2", content: 2 },
    { value: "3", content: 3 },
    { value: "4", content: 4, disabled: true },
    { value: "5", content: 5, disabled: true },
  ],
};

export const mock = {
  base,
  withTitle,
  withDisabledOptions,
};
