export interface IProfileImage {
  size?: number;
  imageUrl?: string;
  onChange: (src: { file: File; url: string }) => void;
}

export declare const ProfileImage: (props: IProfileImage) => JSX.Element;
