import { ReactNode } from "react";

export interface IBulletPoint {
  children: ReactNode;
  color?: string;
  size?: number;
  bulletSize?: number;
  spacing?: number;
}

export declare const BulletPoint: (props: IBulletPoint) => JSX.Element;
