/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";

interface ISvgWrapper {
  size?: number;
  onClick?: () => void;
  style?: React.CSSProperties;
  svgProps: React.SVGProps<SVGSVGElement>;
  children: React.ReactNode;
}

export const SvgWrapper: React.FC<ISvgWrapper> = ({
  size = 20,
  onClick,
  style,
  children,
  svgProps,
}) => {
  return (
    <div
      onClick={() => onClick && onClick()}
      style={{
        ...style,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: `${size}px`,
        height: `${size}px`,
        minWidth: `${size}px`,
        minHeight: `${size}px`,
      }}
    >
      <div
        style={{
          position: "relative",
          height: 0,
          width: "100%",
          padding: 0,
          paddingBottom: "100%",
        }}
      >
        <svg
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            left: 0,
            top: 0,
          }}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          {...svgProps}
        >
          {children}
        </svg>
      </div>
    </div>
  );
};
