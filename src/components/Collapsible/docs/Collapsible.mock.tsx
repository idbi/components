import GoogleIcon from "@/icons/GoogleIcon";
import { ICollapsible } from "../types";
import { Button } from "../../Button";

const base: ICollapsible = {
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
};
