import React from "react";
import { ErrorIcon } from "./assets/icons/ErrorIcon";
import { SuccessIcon } from "./assets/icons/SuccessIcon";
import { WarningIcon } from "./assets/icons/WarningIcon";
import { Warningv2Icon } from "./assets/icons/Warningv2Icon";
import * as s from "./styles";
import type { IToastCard } from "./types";

export const ToastCard: React.FC<IToastCard> = ({
  title = "",
  description = "",
  type,
  link,
  icon,
}) => {
  const showIcon = () => {
    if (icon) return icon;
    if (type === "primary") return <WarningIcon color="#242954" />;
    if (type === "success") return <SuccessIcon />;
    if (type === "warning") return <Warningv2Icon />;
    if (type === "error") return <ErrorIcon />;
    if (type === "blue") return <WarningIcon />;
    if (type === "pink") return <Warningv2Icon color="#FF82AF" />;
  };

  return (
    <s.Container toastType={type || "primary"}>
      {showIcon()}
      <div>
        {title && <s.Title>{title}</s.Title>}
        {description && (
          <s.Description>
            {description}{" "}
            {link && link.onClick && (
              <s.Link
                onClick={(e) => {
                  e.stopPropagation();
                  link.onClick();
                }}
              >
                {link?.text || "Ver más"}
              </s.Link>
            )}
          </s.Description>
        )}
      </div>
    </s.Container>
  );
};
