import { IconClock } from "@/icons/IconClock";
import { IBadge } from "../types";

const base: IBadge = {
  text: "Hola",
  padding: "",
  color: "",
  background: "",
  maxWidth: "",
};
const withIcons: IBadge = {
  text: (
    <>
      hola <IconClock />{" "}
    </>
  ),
  padding: "",
  color: "",
  background: "",
  applyFlex: true,
  maxWidth: "80px",
};

export const mockBadgeProps = {
  base,
  withIcons,
};
