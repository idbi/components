import React from "react";
import { TextBuilder } from "../TextBuilder";
import { ITextProps } from "../TextBuilder/types";

export const Heading = {
  H1: (props: ITextProps) => <TextBuilder as="h1" {...props} />,
  H2: (props: ITextProps) => <TextBuilder as="h2" {...props} />,
  H3: (props: ITextProps) => <TextBuilder as="h3" {...props} />,
  H4: (props: ITextProps) => <TextBuilder as="h4" {...props} />,
  H5: (props: ITextProps) => <TextBuilder as="h5" {...props} />,
  H6: (props: ITextProps) => <TextBuilder as="h6" {...props} />,
};
