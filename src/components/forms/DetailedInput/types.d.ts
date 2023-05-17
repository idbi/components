import React, { ComponentPropsWithRef } from "react";
import { IDetailedField } from "../DetailedField/types";

export interface IDetailedInput extends Omit<IDetailedField, "children" | "htmlFor"> {
  inputProps?: ComponentPropsWithRef<"input">;
  // id?: string;
}

export declare const DetailedInput: (props: IDetailedInput) => JSX.Element;
