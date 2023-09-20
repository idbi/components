import { ReactNode } from "react";

export interface IUploadMedia {
  initialImgUrl?: string;
  placeholder?: ReactNode;
  onChange: (file: File | null, localURL?: string | null) => void;
  onError?: (errorMessage?: string) => void;
  acceptedFiles?: string; // TODO: define some types
  validFileExtensions?: string[];
  noDisplay?: boolean;
  maxKBSize?: number | null;
  image?: string | ReactNode;
}

export declare const UploadMedia: (props: IUploadMedia) => JSX.Element;
