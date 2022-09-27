import { IProfileImage } from "./types";

const base: IProfileImage = {
  onChange: () => {},
  imageUrl: "https://picsum.photos/200",
};

export const mockProfileImageProps = {
  base,
};
