import { ITextProps } from "../../TextBuilder/types";

const base: ITextProps = {
  children: "hola mundo",
  as: "p",
  weight: "regular",
  color: "NEUTRAL/900",
  align: "left",
  size: "xs",
  style: {
    display: "block",
  },
};

export const mockTextProps = {
  base,
};
