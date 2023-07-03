import React, { DragEvent, useRef } from "react";
import { validateFileSize } from "@/utils/validators";
import { IUploadFile } from "./types";

export const UploadFileContainer = <T extends boolean = false>({
  onSelectFile,
  maxKBSize,
  onError = () => {},
  acceptedFiles,
  validFileExtensions,
  children,
  style,
  multiple,
}: IUploadFile<T>) => {
  const fileInput = useRef<HTMLInputElement | null>(null);
  const handleClickFile = () => fileInput.current!.click();

  const validateFileExtension = (fileName: string) => {
    if (!validFileExtensions) return true;
    const regex = new RegExp(`${validFileExtensions!.join("|")}$`, "i");
    return regex.exec(fileName.toLowerCase());
  };

  const handleFile = (files: File[]) => {
    if (files.length === 0) return;

    try {
      files.forEach((file) => {
        if (!validateFileExtension(file.name)) throw new Error("Tipo de archivo no permitido");
        if (maxKBSize !== null) {
          const result = validateFileSize(file, maxKBSize);
          if (!result.success && result.error) throw new Error(result.error.message);
        }
      });
      onSelectFile((multiple ? files : files[0]) as any);
    } catch (err) {
      if (err instanceof Error) onError(err.message);
    }
  };

  const handleChangeFile = () => {
    const { files } = fileInput.current!;
    if (files) handleFile(Array.from(files));
  };

  const handleDropFile = (e: DragEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();
    const { files } = e.dataTransfer;
    handleFile(Array.from(files));
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
        multiple={multiple}
      />
    </div>
  );
};
