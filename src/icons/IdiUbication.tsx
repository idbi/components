import React from "react";
import { IIcon } from "./types";
import { SvgWrapper } from "./SvgWrapper";

export const IdiUbication: React.FC<IIcon> = ({
  size = 20,
  color = "currentColor",
  onClick,
  style,
}) => {
  return (
    <SvgWrapper
      onClick={onClick}
      size={size}
      style={style}
      svgProps={{
        viewBox: "3 3 19 19",
      }}
    >
      <path
        d="M15.0769 10.7692C15.0769 12.0437 14.0437 13.0769 12.7692 13.0769C11.4947 13.0769 10.4615 12.0437 10.4615 10.7692C10.4615 9.49473 11.4947 8.46154 12.7692 8.46154C14.0437 8.46154 15.0769 9.49473 15.0769 10.7692Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M18.5385 10.5917C18.5385 15.4551 12.7692 20 12.7692 20C12.7692 20 7 15.4551 7 10.5917C7 7.5035 9.58297 5 12.7692 5C15.9555 5 18.5385 7.5035 18.5385 10.5917Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </SvgWrapper>
  );
};
