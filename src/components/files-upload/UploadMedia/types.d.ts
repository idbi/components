import { ReactNode } from "react";

export interface IUploadMedia {
  initialImgUrl?: string;
  placeholder?: ReactNode;
  onChange: (file: File | null, localURL?: string | null) => void;
  onError?: (errorMessage?: string) => void;
  acceptedFiles?: string; // TODO: define some types
  validFileExtensions?: string[];
}

export declare const UploadMedia: (props: IUploadMedia) => JSX.Element;
