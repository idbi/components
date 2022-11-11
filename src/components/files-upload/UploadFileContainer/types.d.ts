export interface IUploadFile {
  onSelectFile: (file: File) => void;
  maxKBSize?: number;
  onError?: (message?: string) => void;
  acceptedFiles?: string;
  validFileExtensions?: string[];
  children?: ReactNode;
  style?: CSSProperties;
}

declare const UploadFileContainer: (props: IUploadFile) => JSX.Element;
