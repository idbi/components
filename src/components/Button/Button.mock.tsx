import GoogleIcon from "@/icons/GoogleIcon";
import { IButton } from "./types";

const base: IButton = {
  children: "Base Button",
  disabled: false,
};

const google: IButton = {
  leftIcon: <GoogleIcon />,
  children: "Continuar con Google",
  design: "outline",
  disabled: false,
};

export const mockButtonProps = {
  base,
  google,
};
