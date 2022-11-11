import React, { useEffect, useState } from "react";
import useFirstRender from "@/hooks/useFirstRender";
import UploadFileContainer from "../UploadFileContainer";
import { IconButton } from "@/components/buttons/IconButton/styles";

import { getURLData } from "./utils";
import { IUploadImage } from "./types";
import { CloseIcon } from "@/icons-v2/CloseIcon";
import { PictureIcon } from "@/icons-v2/PictureIcon";
import { theme } from "@/theme";
import * as s from "./styles";

export const UploadImage = ({
  initialImgUrl,
  placeholder,
  onChange,
  onError,
}: IUploadImage) => {
  const [selectedImg, setSelectedImg] = useState<File | null>(null);
  const [imgObjUrl, setImgObjUrl] = useState(initialImgUrl || null);
  const firstRender = useFirstRender();

  useEffect(() => {
    let url = "";
    if (selectedImg) {
      url = window.URL.createObjectURL(selectedImg);
      setImgObjUrl(url);
    }

    return () => {
      if (url) window.URL.revokeObjectURL(url);
    };
  }, [selectedImg]);

  useEffect(() => {
    if (!firstRender) onChange(selectedImg, imgObjUrl || null);
  }, [imgObjUrl]);

  return (
    <UploadFileContainer
      onError={onError || alert}
      onSelectFile={(img) => setSelectedImg(img)}
      acceptedFiles="image/x-png,image/jpeg"
      validFileExtensions={["jpg", "jpeg", "png"]}
    >
      {imgObjUrl ? (
        <s.Display>
          <s.Img>
            <img src={imgObjUrl} />
            <s.ImgInfo>
              <span>{selectedImg?.name || getURLData(imgObjUrl)[0]}</span>
              <span>{selectedImg?.type || getURLData(imgObjUrl)[1]}</span>
            </s.ImgInfo>
          </s.Img>
          <IconButton
            variant="secondary"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImg(null);
              setImgObjUrl(null);
            }}
          >
            <CloseIcon size={12} />
          </IconButton>
        </s.Display>
      ) : (
        <s.Placeholder>
          {placeholder || (
            <s.DefaultMessage>
              <PictureIcon color={theme.color.SECONDARY[900]} size={18} /> Sube
              un imagen <span>aquí</span>
            </s.DefaultMessage>
          )}
        </s.Placeholder>
      )}
    </UploadFileContainer>
  );
};
