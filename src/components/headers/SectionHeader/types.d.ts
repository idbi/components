import { ReactNode } from "react";

export interface ISectionHeader {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export declare const SectionHeader: (props: ISectionHeader) => JSX.Element;
