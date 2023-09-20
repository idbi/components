import React, { useEffect, useState } from "react";
import useFirstRender from "@/hooks/useFirstRender";
import { CloseIcon } from "@/icons-v2/CloseIcon";
import { IconButton } from "@/components/buttons/IconButton/styles";
import { UploadFileContainer } from "../UploadFileContainer";
import { getURLData } from "../utils";
import { IUploadMedia } from "./types";
import * as s from "./styles";

export const UploadMedia = ({
  initialImgUrl,
  placeholder,
  onChange,
  onError,
  acceptedFiles,
  validFileExtensions,
  noDisplay = false,
  maxKBSize,
  image,
}: IUploadMedia) => {
  const [media, setMedia] = useState<File | null>(null);
  const [imgObjUrl, setImgObjUrl] = useState(initialImgUrl || null);
  const firstRender = useFirstRender();

  useEffect(() => {
    let url = "";
    if (media) {
      url = window.URL.createObjectURL(media);
      setImgObjUrl(url);
    }

    return () => {
      if (url) window.URL.revokeObjectURL(url);
    };
  }, [media]);

  useEffect(() => {
    if (!firstRender) onChange(media, imgObjUrl || null);
  }, [imgObjUrl]);

  return (
    <UploadFileContainer
      onError={onError || alert}
      onSelectFile={(img) => setMedia(img)}
      acceptedFiles={acceptedFiles}
      validFileExtensions={validFileExtensions}
      maxKBSize={maxKBSize}
    >
      {imgObjUrl && !noDisplay ? (
        <s.Display>
          <s.Img>
            {media?.type.includes("image") ||
            imgObjUrl.includes("jpeg") ||
            imgObjUrl.includes("jpg") ||
            imgObjUrl.includes("webp") ||
            imgObjUrl.includes("png") ? (
              <img src={imgObjUrl} alt="" />
            ) : image ? (
              typeof image === "string" ? (
                <img src={image} alt="" />
              ) : (
                image
              )
            ) : null}
            <s.ImgInfo>
              <span>{media?.name || getURLData(imgObjUrl)[0]}</span>
              <span>{media?.type || getURLData(imgObjUrl)[1]}</span>
            </s.ImgInfo>
          </s.Img>
          <IconButton
            variant="secondary"
            onClick={(e) => {
              e.stopPropagation();
              setMedia(null);
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
              Sube un archivo <span>aquí</span>
            </s.DefaultMessage>
          )}
        </s.Placeholder>
      )}
    </UploadFileContainer>
  );
};
