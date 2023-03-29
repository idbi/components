import React from "react";

export interface ISeparator {
  sections: {
    key: string;
    title: string;
    children: React.ReactNode;
  }[]
}

export declare const Separator: (props: ISeparator) => JSX.Element;
