import { IReference } from "../types";

const base: IReference = {
  reference: "S-004",
  onClick: () => alert("clicked reference"),
  description: "2 articulos",
};

const noDescription: IReference = {
  reference: "S-004",
  onClick: () => alert("clicked reference"),
};

export const mockReferenceProps = {
  base,
  noDescription,
};
