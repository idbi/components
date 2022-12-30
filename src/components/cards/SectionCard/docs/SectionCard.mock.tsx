/* eslint-disable no-alert */
import { PictureIcon } from "@/icons-v2/PictureIcon";
import { ISectionCard } from "../types";
import { theme } from "@/theme";

const baseNoContent: ISectionCard = {
  title: "Datos de la cotización",
  icon: <PictureIcon />,
};

const withContent: ISectionCard = {
  title: "Datos de la cotización",
  icon: <PictureIcon />,
  children: (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea laborum suscipit optio accusantium hic voluptates,
      maxime a neque! Vitae iusto temporibus aperiam rerum possimus asperiores unde sunt fugit aliquam hic.
    </div>
  ),
};

const withHeaderAside: ISectionCard = {
  title: "Datos de la cotización",
  icon: <PictureIcon />,
  children: (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea laborum suscipit optio accusantium hic voluptates,
      maxime a neque! Vitae iusto temporibus aperiam rerum possimus asperiores unde sunt fugit aliquam hic.
    </div>
  ),
  headerAside: (
    <span style={{ color: theme.color.SECONDARY[900], cursor: "pointer" }} onClick={() => alert("clicked!")}>
      Cambiar
    </span>
  ),
};

const noIcon: ISectionCard = {
  title: "Datos de la cotización",
  children: (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea laborum suscipit optio accusantium hic voluptates,
      maxime a neque! Vitae iusto temporibus aperiam rerum possimus asperiores unde sunt fugit aliquam hic.
    </div>
  ),
  headerAside: (
    <span style={{ color: theme.color.SECONDARY[900], cursor: "pointer" }} onClick={() => alert("clicked!")}>
      Cambiar
    </span>
  ),
};

const withInnerSections: ISectionCard = {
  title: "Datos de la cotización",
  children: (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea laborum suscipit optio accusantium hic voluptates,
      maxime a neque! Vitae iusto temporibus aperiam rerum possimus asperiores unde sunt fugit aliquam hic.
    </div>
  ),
  headerAside: (
    <span style={{ color: theme.color.SECONDARY[900], cursor: "pointer" }} onClick={() => alert("clicked!")}>
      Cambiar
    </span>
  ),
  sections: [
    <>
      Some inner section...
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis accusamus mollitia nam perspiciatis
        voluptatum optio! Ad eaque cupiditate porro dicta, necessitatibus saepe, consequatur inventore deleniti
        perferendis odio expedita? Sequi, explicabo.
      </p>
    </>,
    <>
      Other inner section...
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis accusamus mollitia nam perspiciatis
        voluptatum optio! Ad eaque cupiditate porro dicta, necessitatibus saepe, consequatur inventore deleniti
        perferendis odio expedita? Sequi, explicabo.
      </p>
    </>,
  ],
};

const innerSectionsNoChildren: ISectionCard = {
  title: "Datos de la cotización",

  headerAside: (
    <span style={{ color: theme.color.SECONDARY[900], cursor: "pointer" }} onClick={() => alert("clicked!")}>
      Cambiar
    </span>
  ),
  sections: [
    <>
      Some inner section...
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis accusamus mollitia nam perspiciatis
        voluptatum optio! Ad eaque cupiditate porro dicta, necessitatibus saepe, consequatur inventore deleniti
        perferendis odio expedita? Sequi, explicabo.
      </p>
    </>,
    <>
      Other inner section...
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis accusamus mollitia nam perspiciatis
        voluptatum optio! Ad eaque cupiditate porro dicta, necessitatibus saepe, consequatur inventore deleniti
        perferendis odio expedita? Sequi, explicabo.
      </p>
    </>,
  ],
};

export const mockConfirmationCardV2Props = {
  baseNoContent,
  withContent,
  withHeaderAside,
  noIcon,
  withInnerSections,
  innerSectionsNoChildren,
};
