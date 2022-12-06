import { IconRightArrow } from "@/icons/IconRightArrow";
import { IIDCard } from "../types";

const base: IIDCard = {
  id: "VBNM123",
  name: {
    text: "Vinagre blanco x botella",
  },
};

const withImageNotFound: IIDCard = {
  id: "VBNM123",
  name: {
    text: "Vinagre blanco x botella",
    weight: "bold",
  },
  img: { url: "" },
};

const withImage: IIDCard = {
  id: "VBNM123",
  name: {
    text: "helado",
  },
  img: {
    url: "https://cdn.idbi.pe/0e797c6e-4f23-4995-ac18-3d38fa287387/helado-de-chocolate-6-1.jpg1645809470044.jpeg",
  },
};

const withIcon: IIDCard = {
  decorator: {
    component: <IconRightArrow />,
  },
  id: "VBNM123",
  name: {
    text: "Vinagre blanco x botella",
  },
};

const withIconAndImage: IIDCard = {
  decorator: {
    component: <IconRightArrow />,
    padding: "0 0 0 10px",
  },
  id: "VBNM123",
  type: "ID",
  name: {
    text: "Helado",
  },
  img: {
    url: "https://cdn.idbi.pe/0e797c6e-4f23-4995-ac18-3d38fa287387/helado-de-chocolate-6-1.jpg1645809470044.jpeg",
  },
};

export const mockIDCardProps = {
  base,
  withImage,
  withImageNotFound,
  withIcon,
  withIconAndImage,
};
