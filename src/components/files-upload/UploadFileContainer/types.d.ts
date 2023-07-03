export interface IUploadFile<Multi extends boolean> {
  multiple?: Multi;
  onSelectFile: (file: Multi extends true ? File[] : File) => void;
  maxKBSize?: number | null;
  onError?: (message?: string) => void;
  acceptedFiles?: string;
  validFileExtensions?: string[];
  children?: ReactNode;
  style?: CSSProperties;
}

declare const UploadFileContainer: (props: IUploadFile) => JSX.Element;
