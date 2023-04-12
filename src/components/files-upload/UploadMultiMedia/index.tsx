import React, { useState } from "react";
import { IdiTrash } from "@/icons/IdiTrash";
import { Text } from "@/components/Typography";
import { theme } from "@/theme";
import type { IFile, IUploadMultiMedia } from "./types";
import { UploadMedia } from "../UploadMedia";
import * as s from "./styles";

export const UploadMultiMedia: React.FC<IUploadMultiMedia> = ({
  initialImgUrl,
  placeholder,
  onChange,
  onRemove,
  onError,
  acceptedFiles,
  validFileExtensions,
}) => {
  const [files, setFiles] = useState<IFile[]>([]);

  const handleRemoveFile = (index: number, file: IFile) => {
    const newFiles = files.filter((_f, i) => index !== i);
    setFiles(newFiles);
    onRemove(file?.file ?? null, file?.localURL, newFiles);
  };

  return (
    <>
      <UploadMedia
        initialImgUrl={initialImgUrl}
        placeholder={placeholder}
        onChange={(file, localURL) => {
          let newFiles = [];
          newFiles = [...files, { file, localURL }];
          if (file !== null) {
            setFiles(newFiles);
          }
          onChange(file, localURL, newFiles);
        }}
        onError={onError}
        acceptedFiles={acceptedFiles}
        validFileExtensions={validFileExtensions}
        noDisplay
      />
      <s.Files>
        {files?.map((fi, i) => (
          <li key={`${i}uploadmultimedia`}>
            <Text size="xs" weight="light" as="p" color="NEUTRAL/800">
              {fi.file?.name}
            </Text>
            <IdiTrash
              size={15}
              onClick={() => handleRemoveFile(i, fi)}
              color={theme.color.ALERT[900]}
              style={{
                minWidth: "15px",
              }}
            />
          </li>
        ))}
      </s.Files>
    </>
  );
};
