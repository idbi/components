import React, { useEffect, useState } from "react";
import useFirstRender from "@/hooks/useFirstRender";
import UploadFileContainer from "../UploadFileContainer";

import { IImgData, IUploadMultipleImages } from "./types";
import { PictureIcon } from "@/icons-v2/PictureIcon";
import * as s from "./styles";

export const UploadMultipleImages = ({ onChange, initialImages, limit }: IUploadMultipleImages) => {
  const [imgsList, setImgsList] = useState<(IImgData | string)[]>(initialImages || []);
  const firstRender = useFirstRender();

  const handleAddImage = (img: File) => {
    const imgUrl = window.URL.createObjectURL(img);
    setImgsList((s) => [...s, { file: img, url: imgUrl }]);
  };

  const handleDeleteImage = (index: number) => {
    const selectedImage = imgsList[index];
    if (typeof selectedImage !== "string") window.URL.revokeObjectURL(selectedImage.url);
    setImgsList((s) => s.filter((_, i) => i !== index));
  };

  useEffect(() => {
    if (!firstRender) onChange(imgsList);
  }, [imgsList]);

  return (
    <s.Container>
      {imgsList.map((img, i) => (
        <s.ImgWrapper key={`imgs-${i}`} onClick={() => handleDeleteImage(i)}>
          <img src={typeof img === "string" ? img : img.url} />
        </s.ImgWrapper>
      ))}
      {!(limit && imgsList.length >= limit) && (
        <UploadFileContainer
          onError={alert}
          onSelectFile={handleAddImage}
          acceptedFiles="image/x-png,image/jpeg"
          validFileExtensions={["jpg", "jpeg", "png"]}
        >
          <s.Placeholder>
            <PictureIcon />
          </s.Placeholder>
        </UploadFileContainer>
      )}
    </s.Container>
  );
};
