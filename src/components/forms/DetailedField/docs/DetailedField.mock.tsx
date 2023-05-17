import { IDetailedField } from "../types";

const base: IDetailedField = {
  label: "Stock (Kardex)",
  children: "25.00",
  aside: "U",
};

const contentRight: IDetailedField = {
  label: "Stock (Kardex)",
  children: "25.00",
  aside: "U",
  contentRight: true,
};

const contentSpacing: IDetailedField = {
  label: "Stock (Kardex)",
  children: "25.00",
  aside: "U",
  contentRight: true,
  spacing: 20,
};

export const mockDetailedFieldProps = {
  base,
  contentRight,
  contentSpacing,
};
