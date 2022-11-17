/* eslint-disable no-alert */
import { PictureIcon } from "@/icons-v2/PictureIcon";
import { ISectionCard } from "../types";
import { theme } from "@/theme";

const baseNoContent: ISectionCard = {
  title: "Datos de la cotización",
  icon: <PictureIcon />,
  // headerAside: <span style={{ color: theme.color.SECONDARY[900] }}>Cambiar</span>,
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
  // headerAside: <span style={{ color: theme.color.SECONDARY[900] }}>Cambiar</span>,
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

export const mockConfirmationCardV2Props = {
  baseNoContent,
  withContent,
  withHeaderAside,
  noIcon,
};
