/* eslint-disable no-alert */
import { IEditQuantityInputContainer } from "./Container";

const base: IEditQuantityInputContainer = {
  value: 1,
};

const onlyIntegers: IEditQuantityInputContainer = {
  value: 1,
  onlyIntegers: true,
};

const noModal: IEditQuantityInputContainer = {
  value: 1,
  blockInputModal: true,
};

const withUnit: IEditQuantityInputContainer = {
  value: 1,
  measureUnit: "u.",
};

const disabled: IEditQuantityInputContainer = {
  value: 1,
  disabled: true,
};

const withDelete: IEditQuantityInputContainer = {
  value: 1,
  onDelete: () => alert("delete!"),
};

const noDecrement: IEditQuantityInputContainer = {
  value: 0,
  noDecrement: true,
};

const withError: IEditQuantityInputContainer = {
  value: null,
  onlyIntegers: true,
  setNull: true,
  minimumQuantity: 0,
};

const cardVariant: IEditQuantityInputContainer = {
  value: 1,
  onDelete: () => alert("delete!"),
  variant: "card",
  measureUnit: "u.",
};

export const mockConfirmationCardV2Props = {
  base,
  onlyIntegers,
  disabled,
  withUnit,
  noModal,
  withDelete,
  withError,
  noDecrement,
  cardVariant,
};
