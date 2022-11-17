import React from "react";
import { ConfirmationCardV3 } from "@/components/confirmations/ConfirmationCardV3";
import { CardModal } from "../CardModal";
import { IConfirmationModalV3 } from "./types";

export const ConfirmationModalV3 = ({ cardProps, ...rest }: IConfirmationModalV3) => {
  return (
    <CardModal
      background="transparent"
      boxShadowInDesktop="none"
      padding="0 10px"
      contentLocation="bottom"
      maxWidth="650px"
      {...cardProps}
    >
      <ConfirmationCardV3 {...rest} />
    </CardModal>
  );
};
