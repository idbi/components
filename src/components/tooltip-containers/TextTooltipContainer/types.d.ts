import { CSSProperties } from "react";
import { Placement, Middleware, Strategy } from "@floating-ui/react-dom";

export interface ITextTooltipContainer {
  render: (containerProps: {
    ref: (node: HTMLElement | null) => void;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
  }) => JSX.Element;
  tooltipContent: ReactNode;
  tooltipStyles?: CSSProperties;
  placement?: Placement;
  strategy?: Strategy;
  offset?: number | { crossAxis?: number; mainAxis?: number; alignmentAxis?: number };
  middlewares?: Middleware[];
}
