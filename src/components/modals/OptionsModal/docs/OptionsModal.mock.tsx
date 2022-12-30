/* eslint-disable no-alert */
import { CloseIcon } from "@/icons-v2/CloseIcon";
import { TrashIcon } from "@/icons-v2/TrashIcon";
import { IOptionsModal } from "../types";

const base: IOptionsModal = {
  title: "Crear cotización",
  onClose: () => {},
  onSelect: (value, selected) => {},
  selected: "first",
  options: [
    { value: "first", content: "A first option" },
    { value: "second", content: "A second option" },
    { value: "third", content: "A third option" },
  ],
};

const withIcons: IOptionsModal = {
  title: "Crear cotización",
  onClose: () => {},
  onSelect: (value, selected) => {},
  selected: "first",
  options: [
    {
      value: "first",
      content: "A first option",
      icon: <CloseIcon />,
    },
    {
      value: "second",
      content: "A second option",
      icon: (
        <TrashIcon
          color="red"
          size={18}
          onClick={(e) => {
            e.stopPropagation();
            alert("custom action");
          }}
        />
      ),
    },
    { value: "third", content: "A third option", icon: <span>Custom Icon</span> },
  ],
};

const withDisabledOptions: IOptionsModal = {
  title: "Crear cotización",
  onClose: () => {},
  onSelect: (value, selected) => {},
  selected: "first",
  options: [
    { value: "first", content: "A first option", icon: <CloseIcon /> },
    { value: "second", content: "A second option", icon: <CloseIcon />, disabled: true },
    { value: "third", content: "A third option", icon: <CloseIcon />, disabled: true },
    { value: "fourth", content: "A fourth option", icon: <CloseIcon /> },
  ],
};

export const mock = {
  base,
  withIcons,
  withDisabledOptions,
};
