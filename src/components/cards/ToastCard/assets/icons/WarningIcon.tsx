import * as React from "react";

interface IconProps {
  color?: string;
}

export const WarningIcon: React.FC<IconProps> = ({ color = "#6192EB" }) => (
  <svg width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.393 1.005A1.815 1.815 0 0 1 10 0c.671 0 1.288.386 1.607 1.005l8.146 15.836C20.486 18.27 19.498 20 17.95 20H2.05C.5 20-.487 18.269.248 16.841L8.393 1.005ZM10 1.429a.458.458 0 0 0-.405.253l-.597-.336.597.336-8.146 15.837c-.245.475.085 1.052.6 1.052H17.95c.517 0 .846-.577.6-1.053L10.406 1.682A.457.457 0 0 0 10 1.429Z"
      fill={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 6.3a.7.7 0 0 1 .7.7v6a.7.7 0 1 1-1.4 0V7a.7.7 0 0 1 .7-.7ZM10 14.3a.7.7 0 0 1 .7.7v1a.7.7 0 1 1-1.4 0v-1a.7.7 0 0 1 .7-.7Z"
      fill={color}
    />
  </svg>
);
