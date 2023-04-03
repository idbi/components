/* eslint-disable react/jsx-key */
/* eslint-disable no-alert */
import { theme } from "@/theme";
import { PictureIcon } from "@/icons-v2/PictureIcon";
import { ISectionCard } from "../types";

const text =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea laborum suscipit optio accusantium hic voluptates, maxime a neque! Vitae iusto temporibus aperiam rerum possimus asperiores unde sunt fugit aliquam hic.";

const Cambiar = (
  <button
    type="button"
    style={{
      background: "none",
      outline: "none",
      border: "none",
      color: theme.color.SECONDARY[900],
      cursor: "pointer",
    }}
    onClick={() => alert("clicked!")}
  >
    Cambiar
  </button>
);

const Section = (
  <>
    Some inner section...
    <p>{text}</p>
  </>
);

const baseNoContent: ISectionCard = {
  title: "Datos de la cotización",
  icon: <PictureIcon />,
};

const withContent: ISectionCard = {
  title: "Datos de la cotización",
  icon: <PictureIcon />,
  children: <div>{text}</div>,
};

const noTitle: ISectionCard = {
  children: <div>{text}</div>,
};

const withHeaderAside: ISectionCard = {
  title: "Datos de la cotización",
  icon: <PictureIcon />,
  children: <div>{text}</div>,
  headerAside: Cambiar,
};

const noIcon: ISectionCard = {
  title: "Datos de la cotización",
  children: <div>{text}</div>,
  headerAside: Cambiar,
};

const withInnerSections: ISectionCard = {
  title: "Datos de la cotización",
  children: <div>{text}</div>,
  headerAside: Cambiar,
  sections: [Section, Section],
};

const innerSectionsNoChildren: ISectionCard = {
  title: "Datos de la cotización",
  headerAside: Cambiar,
  sections: [Section, Section],
};

export const mockSectionCardProps = {
  baseNoContent,
  withContent,
  withHeaderAside,
  noIcon,
  withInnerSections,
  innerSectionsNoChildren,
  noTitle,
};
