import React from "react";
import { IUploadMedia } from "../UploadMedia/types";

export interface IFile {
  file: File | null | undefined;
  localURL: string | null | undefined;
}

export interface IUploadMultiMedia extends IUploadMedia{
  onChange: (file: File | null, localURL?: string | null, files: IFile[]) => void;
  onRemove: (file: File | null, localURL?: string | null, files: IFile[]) => void;
}

export declare const UploadMultiMedia: (props: IUploadMultiMedia) => JSX.Element;
