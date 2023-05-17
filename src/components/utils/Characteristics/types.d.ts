import React, { ReactNode } from "react";

export interface ICharacteristics {
  title: string;
  description?: string;
  aside?: ReactNode;
  descriptionTop?: boolean;
}

export declare const Characteristics: (props: ICharacteristics) => JSX.Element;
