/* eslint-disable no-alert */
/* eslint-disable @typescript-eslint/naming-convention */
import GoogleIcon from "@/icons/GoogleIcon";
import TicketIcon from "@/icons/TicketIcon";
import WarningIcon from "@/icons/WarningIcon";
import { DropdownOptions, IDropdownMenu } from "./types";

const options_base: DropdownOptions = [
  {
    text: "Hoy",
    onClick: () => alert("hoy"),
  },
  {
    text: "Esta semana",
    onClick: () => alert("Esta semana"),
    disabled: true,
  },
  {
    text: "Este mes",
    onClick: () => alert("Este mes"),
    alert: true,
  },
];

const options_withIcons: DropdownOptions = [
  {
    text: "Descargar reporte",
    onClick: () => alert("descargar reporte"),
  },
  {
    text: "Descargar reporte consolidado",
    onClick: () => alert("descargar reporte consolidado"),
    loading: true,
    icon: <WarningIcon />,
  },
  {
    text: "Imprimir reporte consolidado",
    onClick: () => alert("Imprimir reporte consolidado"),
    alert: true,
    icon: <WarningIcon />,
  },
  {
    text: "Imprimir reporte de administrador",
    onClick: () => alert("Imprimir reporte de administrador"),
    icon: <TicketIcon />,
  },
];

const options_withSubOptions: DropdownOptions = [
  {
    text: "Descargar",
    options: [
      {
        text: "Reporte",
        onClick: () => alert("Descargar reporte"),
        loading: true,
      },
      {
        text: "Reporte consolidado",
        onClick: () => alert(" Descargar reporte consolidado"),
      },
    ],
  },
  {
    text: "Imprimir",
    options: [
      {
        text: "Reporte consolidado",
        onClick: () => alert("Imprimir reporte consolidado"),
        alert: true,
        icon: <WarningIcon />,
      },
      {
        text: "Reporte de administrador",
        onClick: () => alert("Imprimir reporte de administrador"),
        disabled: true,
        icon: <TicketIcon />,
      },
    ],
  },
];

const base: IDropdownMenu = {
  options: options_base,
};

const withIcons: IDropdownMenu = {
  options: options_withIcons,
  activator: <>Activador</>,
};

const withSubOptions: IDropdownMenu = {
  options: options_withSubOptions,
  activator: <GoogleIcon />,
};

export const mockDropdownMenuProps = {
  base,
  withIcons,
  withSubOptions,
};
