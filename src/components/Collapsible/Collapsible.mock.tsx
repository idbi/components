import { ICollapsibleProps } from "./types";
import GoogleIcon from "@/icons/GoogleIcon";
import { Button } from "../Button";

const base: ICollapsibleProps = {
  content: "Base Collapsible",
  label: "Base Collapsible",
  open: false,
  setOpen: () => {},
};

const open: ICollapsibleProps = {
  content: (
    <Button design="outline" leftIcon={<GoogleIcon />}>
      Continuar con Google
    </Button>
  ),
  label: "Open Collapsible",
  open: true,
  setOpen: () => {},
};

export const mockCollapsibleProps = {
  base,
  open,
};
