import React, { useRef } from "react";
import { validateFileSize } from "@/utils/validators";
import { IUploadFile } from "./types";

const UploadFileContainer = ({
  onSelectFile,
  maxKBSize,
  onError = () => {},
  acceptedFiles,
  validFileExtensions,
  children,
  style,
}: IUploadFile) => {
  const fileInput = useRef<HTMLInputElement | null>(null);
  const handleClickFile = () => fileInput.current!.click();

  const handleChangeFile = () => {
    const file = fileInput.current!.files![0];
    handleFile(file);
  };

  const handleDropFile = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const validateFileExtension = (fileName: string) => {
    if (!validFileExtensions) return true;
    const regex = new RegExp(`${validFileExtensions!.join("|")}$`, "i");
    return regex.exec(fileName.toLowerCase());
  };

  const handleFile = (file: File) => {
    if (!file) return;
    if (!validateFileExtension(file.name)) {
      onError("Tipo de archivo no permitido");
      return;
    }
    const result = validateFileSize(file, maxKBSize);
    if (!result.success) {
      onError(result.error?.message);
      return;
    }

    onSelectFile(file);
  };

  return (
    <div
      onClick={handleClickFile}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDropFile}
      style={style}
    >
      {children}
      <input
        ref={fileInput}
        style={{ display: "none" }}
        onChange={handleChangeFile}
        type="file"
        accept={acceptedFiles}
      />
    </div>
  );
};

export default UploadFileContainer;
