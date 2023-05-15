import React from "react";
import { IIcon } from "./types";
import { IconV2 } from "../icons-v2/IconV2";

export const IdiBagCheck: React.FC<IIcon> = ({
  size = 20,
  color = "currentColor",
  onClick,
  style,
}) => {
  return (
    <IconV2
      onClick={onClick}
      size={size}
      style={style}
      viewBox="0 0 14 15"
      fill="transparent"
    >
      <path
        d="M5.61133 9.83594L6.48633 10.7109L8.38216 8.96094"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.13901 1.66406L3.02734 3.78156"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.86035 1.66406L10.972 3.78156"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.16699 5.08073C1.16699 4.00156 1.74449 3.91406 2.46199 3.91406H11.5387C12.2562 3.91406 12.8337 4.00156 12.8337 5.08073C12.8337 6.3349 12.2562 6.2474 11.5387 6.2474H2.46199C1.74449 6.2474 1.16699 6.3349 1.16699 5.08073Z"
        stroke={color}
        strokeWidth="1.5"
      />
      <path
        d="M2.04199 6.33594L2.86449 11.3759C3.05116 12.5076 3.50033 13.3359 5.16866 13.3359H8.68616C10.5003 13.3359 10.7687 12.5426 10.9787 11.4459L11.9587 6.33594"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </IconV2>
  );
};
