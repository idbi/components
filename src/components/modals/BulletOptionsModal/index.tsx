import React from "react";
import { OptionsModal } from "../OptionsModal";
import { BulletPoint } from "@/components/BulletPoint";
import { IBulletOptionsModal } from "./types";
import { CheckIcon } from "@/icons-v2/CheckIcon";
import { theme } from "../../../theme";
import * as s from "./styles";

export const BulletOptionsModal = ({ options, selectedIcon, ...rest }: IBulletOptionsModal) => {
  return (
    <OptionsModal
      options={options.map(({ content, color = theme.color.NEUTRAL[800], ...opt }) => ({
        content: (
          <s.Label color={color}>
            <BulletPoint spacing={30} bulletSize={7}>
              {content}
            </BulletPoint>
          </s.Label>
        ),
        icon: opt.value === rest.selected ? selectedIcon || <CheckIcon /> : undefined,
        ...opt,
      }))}
      {...rest}
    />
  );
};
