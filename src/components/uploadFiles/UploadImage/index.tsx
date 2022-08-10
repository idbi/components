import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import { Placeholder, Display, Img, ImgInfo } from "./styles";
import { AiOutlinePaperClip } from "react-icons/ai";
import { validateFileSize } from "../../../utils/validators/file";
import { toast } from "react-toastify";
import { IconButton } from "@/components/button";
import { FiX } from "react-icons/fi";

type UploadImageProps = {
  placeholder?: string;
  icon?: any;
  alt?: "";
  setImageFile?: (image: any) => void;
  style?: any;
};

export const UploadImage: React.FC<UploadImageProps> = forwardRef(
  ({ placeholder, icon, alt = "imagen a subir", setImageFile, style }, ref) => {
    const [photoUrl, setPhotoUrl] = useState("");
    const [file, setFile] = useState(null);
    const fileInput = useRef(null);

    const handleClickFile = () => fileInput.current.click();

    const handleChangeFile = () => {
      const file = fileInput.current.files[0];
      handleFile(file);
    };

    const handleDropFile = (e: any) => {
      e.stopPropagation();
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      handleFile(file);
    };

    const handleFile = (file: any) => {
      if (!file) return;
      const result = validateFileSize(file);
      if (!result.success) {
        resetFile();
        toast.warn(result.errors[0].message, {
          position: "top-right",
          autoClose: 8000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        const imgURL = window.URL.createObjectURL(file);
        setPhotoUrl(imgURL);
        setImageFile(file);
        setFile(file);
      }
    };

    const resetFile = () => {
      setPhotoUrl("");
      setImageFile(null);
      setFile(null);
      fileInput.current.value = "";
    };

    useImperativeHandle(ref, () => {
      return {
        resetFile,
      };
    });

    return (
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDropFile}
        style={style}
      >
        {photoUrl ? (
          <Display onClick={handleClickFile}>
            <Img>
              <img src={photoUrl} alt={alt} />
              <ImgInfo>
                <span>{file?.name}</span>
                <span>{file?.type}</span>
              </ImgInfo>
            </Img>
            <IconButton
              variant="secondary"
              onClick={(e) => {
                e.stopPropagation();
                resetFile();
              }}
            >
              <FiX size={18} />
            </IconButton>
          </Display>
        ) : (
          <Placeholder onClick={handleClickFile}>
            {!icon ? <AiOutlinePaperClip size={24} /> : icon}
            <span>{placeholder}</span>
          </Placeholder>
        )}
        <input
          ref={fileInput}
          style={{ display: "none" }}
          onChange={handleChangeFile}
          type="file"
          accept="image/x-png,image/jpeg"
        />
      </div>
    );
  }
);
