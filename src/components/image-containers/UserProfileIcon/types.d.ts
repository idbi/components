import { HTMLAttributes } from "react";

export interface IUserImg {
  src: string;
  srcSet?: string;
  alt?: string
}
export interface IUserIcon {
  img?: null | IUserImg;
  initials: string;
  size?: number;
  containerProps?: HTMLAttributes<HTMLDivElement>;
}

export declare const UserProfileIcon: (props: IUserIcon) => JSX.Element;
