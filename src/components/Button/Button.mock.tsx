import GoogleIcon from "@/icons/GoogleIcon";
import { IButton } from "./types";

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
