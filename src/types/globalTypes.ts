export interface IImgData {
  src: string;
  srcSet?: string;
  alt?: string;
}

export type StatusType =
  | "draft"
  | "pending"
  | "accepted"
  | "preparing"
  | "prepared"
  | "collected"
  | "delivered"
  | "canceled";
