/* eslint-disable no-alert */
import { IconRightArrow } from "@/icons/IconRightArrow";
import { IToastCard } from "../types";

const primary: IToastCard = {
  title: "Título principal de la notificación",
  description: "Lorem ipsum dolor sit amet.",
  type: "primary",
};

const success: IToastCard = {
  title: "Título principal de la notificación",
  description: "Lorem ipsum dolor sit amet.",
  type: "success",
};

const warning: IToastCard = {
  title: "Título principal de la notificación",
  description: "Lorem ipsum dolor sit amet.",
  type: "warning",
};

const error: IToastCard = {
  title: "Título principal de la notificación",
  description: "Lorem ipsum dolor sit amet.",
  type: "error",
};

const tertiary: IToastCard = {
  title: "Título principal de la notificación",
  description: "Lorem ipsum dolor sit amet.",
  type: "tertiary",
};

const quaternary: IToastCard = {
  title: "Título principal de la notificación",
  description: "Lorem ipsum dolor sit amet.",
  type: "quaternary",
};

const withLink: IToastCard = {
  title: "Título principal de la notificación",
  description: "Lorem ipsum dolor sit amet.",
  type: "warning",
  link: {
    text: "",
    onClick: () => alert("ver más"),
  },
};

const customDescription: IToastCard = {
  title: "Título principal de la notificación",
  description: (
    <>
      Lorem <strong>ipsum</strong> dolor <strong>sit</strong> amet.
    </>
  ),
  type: "warning",
};

const onlyTitle: IToastCard = {
  title: "Título principal de la notificación",
  icon: <IconRightArrow />
};

const onlyDescription: IToastCard = {
  description: "Lorem ipsum dolor sit amet.",
  type: "success",
  icon: " ",
};

export const mockToastCardProps = {
  primary,
  success,
  warning,
  error,
  tertiary,
  quaternary,
  withLink,
  customDescription,
  onlyTitle,
  onlyDescription,
};
