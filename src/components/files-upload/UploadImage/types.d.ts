import { ReactNode } from "react";
import { IUploadMedia } from "../UploadMedia/types";

export type IUploadImage = Omit<IUploadMedia, 'acceptedFiles' | 'validFileExtensions'>;

export declare const UploadImage: (props: IUploadImage) => JSX.Element;
