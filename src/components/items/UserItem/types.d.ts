import React, { ReactNode } from "react";

export interface IUserItem {
  name: string;
  lastName?: string;
  description?: ReactNode;
  img?: string | null;
  imgSize?: number;
  aside?: boolean;
}

export declare const UserItem: (props: IUserItem) => JSX.Element;
