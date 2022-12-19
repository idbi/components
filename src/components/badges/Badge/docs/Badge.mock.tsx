import { IconClock } from "@/icons/IconClock";
import { IBadge } from "../types";

const base: IBadge = {
  text: "Hola",
  padding: "",
  color: "",
  background: "",
  maxWidth: "",
  withBorder: true,
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
  maxWidth: "83px",
  weight: "500",
  withBorder: false,
  borderRadius: "10px",
};

export const mockBadgeProps = {
  base,
  withIcons,
};
