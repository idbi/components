import { HTMLAttributes } from "react";

interface IUserIcon {
  img?: null | { src: string; srcSet?: string; alt?: string };
  initials: string;
  size?: number;
  containerProps?: HTMLAttributes<HTMLDivElement>;
}

export declare const UserProfileIcon: (props: IUserIcon) => JSX.Element;
