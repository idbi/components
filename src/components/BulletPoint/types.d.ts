import { ReactNode } from "react";

export interface IBulletPoint {
  children: ReactNode;
  color?: string;
  size?: number;
  bulletSize?: number;
  spacing?: number;
}
