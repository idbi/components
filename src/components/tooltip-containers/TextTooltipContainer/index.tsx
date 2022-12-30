import React, { useEffect, useRef, useState } from "react";
import { useMediaQueryScreen } from "@/hooks/useMediaQueryScreen";
import { arrow, autoUpdate, offset, useFloating } from "@floating-ui/react-dom";
import { ITextTooltipContainer } from "./types";
import * as s from "./styles";

export const TextTooltipContainer = ({
  render,
  tooltipContent,
  tooltipStyles = {},
  placement: propPlacement,
  offset: propOffset,
  strategy: propStrategy,
  middlewares = [],
}: ITextTooltipContainer) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const arrowRef = useRef<null | HTMLDivElement>(null);
  const { x, y, reference, floating, strategy, update, refs, middlewareData, placement } = useFloating({
    placement: propPlacement || "top",
    strategy: propStrategy,
    middleware: [offset(propOffset ?? 10), ...middlewares, arrow({ element: arrowRef })],
  });
  const { x: arrowX, y: arrowY } = middlewareData.arrow || {};
  const { status: hasPointer } = useMediaQueryScreen("(hover: hover)");

  const handleShowTooltip = (value = true) => {
    if (hasPointer) setShowTooltip(value);
  };

  useEffect(() => {
    if (!refs.reference.current || !refs.floating.current) return;
    return autoUpdate(refs.reference.current, refs.floating.current, update);
  }, [showTooltip, update]);

  const staticSide = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right",
  }[placement.split("-")[0]]!;

  return (
    <>
      {render({
        ref: reference,
        onMouseEnter: () => handleShowTooltip(),
        onMouseLeave: () => handleShowTooltip(false),
      })}

      {showTooltip && (
        <s.Tooltip ref={floating} style={{ position: strategy, top: y ?? 0, left: x ?? 0, ...tooltipStyles }}>
          {tooltipContent}
          <s.Arrow
            ref={arrowRef}
            style={{
              left: arrowX != null ? `${arrowX}px` : "",
              top: arrowY != null ? `${arrowY}px` : "",
              [staticSide]: "-3px",
            }}
          />
        </s.Tooltip>
      )}
    </>
  );
};
