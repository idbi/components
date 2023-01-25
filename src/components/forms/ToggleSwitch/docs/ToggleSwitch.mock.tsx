import { IToggleSwitch } from "../types";

const base: IToggleSwitch = {
  initial: true,
};

const defaultProps: IToggleSwitch = {
  initial: true,
  disabled: false,
  width: 50,
  padding: 3,
  onToggle: () => {},
  styleOff: {
    ballColor: "#fff",
    background: "#DFDFDF",
    border: "none",
  },
  styleOn: {
    ballColor: "#fff",
    background: "#4318FF",
    border: "none",
  },
};

export const mockToggleSwitchProps = {
  base,
  defaultProps,
};
