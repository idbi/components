/* eslint-disable no-alert */
import { PictureIcon } from "@/icons-v2/PictureIcon";
import { IQuantityInputV2 } from "../types";

const base: IQuantityInputV2 = {
  quantity: 1,
  onChange: () => {},
};

const withIcon: IQuantityInputV2 = {
  quantity: 1,
  onChange: () => {},
  icon: <PictureIcon />,
};

const noDecrease: IQuantityInputV2 = {
  quantity: 5,
  onChange: () => {},
  icon: <PictureIcon />,
  decrease: { available: false },
};

const fullWidth: IQuantityInputV2 = {
  quantity: 1,
  onChange: () => {},
  icon: <PictureIcon />,
  fullWidth: true,
};

export const mockConfirmationCardV2Props = {
  base,
  withIcon,
  noDecrease,
  fullWidth,
};
