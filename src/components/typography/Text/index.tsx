import React from "react";
import { TextBuilder } from "../TextBuilder";
import { ITextProps } from "../TextBuilder/types";

export const Text = (props: ITextProps) => <TextBuilder as={props.as || "p"} {...props} />;
