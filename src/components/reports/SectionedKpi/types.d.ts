import React from "react";

interface ISection {
  label: string;
  PEN?: number;
  USD?: number;
}

export interface ISectionedKpi {
  title: string;
  sections: ISection[];
  onlyIntegers?: boolean;
  loading?: boolean;
}

export declare const SectionedKpi: (props: ISectionedKpi) => JSX.Element;
