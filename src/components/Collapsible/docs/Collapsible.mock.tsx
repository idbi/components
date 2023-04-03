import { ICollapsible } from "../types";
import { Button } from "../../Button";

const base: ICollapsible = {
  content: (
    <Button design="outline" leftIcon={<>🕵🏻</>}>
      Continuar
    </Button>
  ),
  label: "Open Collapsible",
  open: true,
  setOpen: () => {},
};

export const mockCollapsibleProps = {
  base,
};
