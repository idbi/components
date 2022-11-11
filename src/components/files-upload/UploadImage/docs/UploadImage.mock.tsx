/* eslint-disable no-alert */
import { IUploadImage } from "../types";

const base: IUploadImage = {
  onChange: () => {},
  onError: alert,
};

export const mockConfirmationCardV2Props = {
  base,
};
