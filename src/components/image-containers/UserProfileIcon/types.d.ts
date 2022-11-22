interface IUserIcon {
  img?: null | { src?: string; srcSet?: string; alt?: string };
  initials: string;
  size?: number;
}

export declare const UserProfileIcon: (props: IUserIcon) => JSX.Element;
