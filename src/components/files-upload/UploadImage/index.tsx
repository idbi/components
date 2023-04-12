import React from "react";
import { theme } from "@/theme";
import { PictureIcon } from "@/icons-v2/PictureIcon";
import { IUploadImage } from "./types";
import { UploadMedia } from "../UploadMedia";
import * as s from "../UploadMedia/styles";

export const UploadImage = ({
  initialImgUrl,
  placeholder,
  onChange,
  onError,
}: IUploadImage) => {
  return (
    <UploadMedia
      initialImgUrl={initialImgUrl}
      placeholder={
        placeholder || (
          <s.DefaultMessage>
            <PictureIcon color={theme.color.SECONDARY[900]} size={18} /> Sube un
            imagen <span>aquí</span>
          </s.DefaultMessage>
        )
      }
      onChange={onChange}
      onError={onError}
      acceptedFiles="image/x-png,image/jpeg"
      validFileExtensions={["jpg", "jpeg", "png", "webp"]}
    />
  );
};
