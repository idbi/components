import { IImgData } from "../../types/globalTypes";

interface IUser {
  name: string;
  lastname?: string;
  img?: IImgData;
}

export interface IUsersList {
  users: IUser[];
  iconSize?: number;
  onAdd?: null | (() => void);
}

export declare const UsersList: (props: IUsersList) => JSX.Element;
