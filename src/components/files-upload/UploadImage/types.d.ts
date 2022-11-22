import { ReactNode } from "react";

export interface IUploadImage {
  initialImgUrl?: string;
  placeholder?: ReactNode;
  onChange: (file: File | null, localURL?: string | null) => void;
  onError?: (errorMessage?: string) => void;
}

export declare const SelectImg: (props: IUploadImage) => JSX.Element;
