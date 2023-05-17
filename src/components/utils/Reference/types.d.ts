import React from "react";

export interface IReference {
  reference: string;
  onClick: () => void;
  description?: string;
}

export declare const Reference: (props: IReference) => JSX.Element;
