import { useRef } from "react";
import { Button } from "../Button";
import { Text } from "../Typography";
import { ProfileImageContainer } from "./styles";
import { IProfileImage } from "./types";
import DefaultProfile from "/public/default-profile.svg";

export const ProfileImage: React.FC<IProfileImage> = ({
  imageUrl,
  size = 128,
  onChange,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] as File;
    if (file) {
      const url = URL.createObjectURL(file);
      onChange({
        file,
        url,
      });
    }
  };

  return (
    <ProfileImageContainer size={size}>
      <Text color="NEUTRAL/400" weight="regular" size="xs">
        Agrega tu foto
      </Text>
      <div className="profile-input__container">
        <input
          type="file"
          accept="image/png, image/jpeg"
          onChange={handleChange}
          ref={inputRef}
        />
        <img
          width={size}
          height={size}
          src={imageUrl || DefaultProfile}
          alt="profile"
          referrerPolicy="no-referrer"
        />
        <Button
          type="button"
          size="lg"
          design="flat"
          shape="circular"
          onClick={() => inputRef.current?.click()}
        >
          +
        </Button>
      </div>
    </ProfileImageContainer>
  );
};
