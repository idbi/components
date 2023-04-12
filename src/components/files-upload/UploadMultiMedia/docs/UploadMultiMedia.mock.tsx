import { IUploadMultiMedia } from "../types";

const base: IUploadMultiMedia = {
  onChange: () => {},
  onRemove: () => {},
  onError: () => {},
};

export const mockUploadMultiMediaProps = {
  base,
};
