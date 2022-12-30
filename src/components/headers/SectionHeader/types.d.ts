import { ReactNode } from "react";

export interface ISectionHeader {
  title: string;
  subtitle?: string;
  aside?: ReactNode;
}

export declare const SectionHeader: (props: ISectionHeader) => JSX.Element;
