import { IModalOption, IOptionsModal } from "../OptionsModal/types";

export type IBulletOptionsModal = Omit<IOptionsModal, "options"> & {
  options: (Omit<IModalOption, "icon"> & { color?: string })[];
  selectedIcon?: JSX.Element;
};

export declare const BulletOptionsModal: (props: IBulletOptionsModal) => JSX.Element;
