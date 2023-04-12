import React, { useState } from "react";
import { UploadMultiMedia as UploadMultiMediaComponent } from "../index";
import { IFile, IUploadMultiMedia } from "../types";

export const UploadMultiMedia: React.FC<IUploadMultiMedia> = (props) => {
  const [files, setFiles] = useState<IFile[]>([]);

  return (
    <UploadMultiMediaComponent
      onRemove={(_file, _url, allFiles) => setFiles(allFiles)}
      onChange={(_file, _url, allFiles) => setFiles(allFiles)}
      onError={() => {}}
    />
  );
};
