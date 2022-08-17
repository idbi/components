import { IButton } from "./types";
import GoogleIcon from "@/icons/GoogleIcon";

const base: IButton = {
  children: "Base Button",
};

const google: IButton = {
  leftIcon: <GoogleIcon />,
  children: "Continuar con Google",
  design: "outline",
};

export const mockButtonProps = {
  base,
  google,
};
