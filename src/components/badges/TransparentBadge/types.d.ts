import { HTMLAttributes, ReactNode } from "react";

export type ITransparentBadge = HTMLAttributes<HTMLSpanElement> & {
  intensity?: number;
  opacity?: number;
  children: ReactNode;
};

export declare const TransparentBadge: (props: ITransparentBadge) => JSX.Element;
