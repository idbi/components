import { ReactNode } from "react";

export interface IImgData {
  file: File;
  url: string;
}
export interface IUploadMultipleImages {
  onChange: (images: (IImgData | string)[]) => void;
  initialImages?: (IImgData | string)[];
  limit?: number;
  onError?: (errorMessage?: string) => void;
}

export declare const UploadMultipleImages: (
  props: IUploadMultipleImages
) => JSX.Element;
