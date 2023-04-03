import { ICarouselMenu } from "../types";

const items = [
  {
    id: "1",
    text: "Gaseosas",
  },
  {
    id: "2",
    text: "Galletas",
  },
  {
    id: "3",
    text: "Cocteles",
  },
  {
    id: "4",
    text: "Entradas",
  },
  {
    id: "5",
    text: "Vinos",
  },
  {
    id: "6",
    text: "Hamburguesas",
  },
  {
    id: "7",
    text: "Ensaladas",
  },
  {
    id: "8",
    text: "Panes",
  },
  {
    id: "9",
    text: "Café",
  },
  {
    id: "10",
    text: "Adicionales",
  },
  {
    id: "11",
    text: "Helados",
  },
  {
    id: "12",
    text: "Conservas",
  },
  {
    id: "13",
    text: "Tacos",
  },
  {
    id: "14",
    text: "FekiCaramelos",
  },
  {
    id: "21",
    text: "Gaseosas",
  },
  {
    id: "22",
    text: "Galletas",
  },
  {
    id: "23",
    text: "Cocteles",
  },
  {
    id: "24",
    text: "Entradas",
  },
  {
    id: "25",
    text: "Vinos",
  },
  {
    id: "26",
    text: "Hamburguesas",
  },
  {
    id: "27",
    text: "Ensaladas",
  },
  {
    id: "28",
    text: "Panes",
  },
  {
    id: "29",
    text: "Café",
  },
  {
    id: "210",
    text: "Adicionales",
  },
  {
    id: "211",
    text: "Helados",
  },
  {
    id: "212",
    text: "Conservas",
  },
  {
    id: "213",
    text: "Tacos",
  },
  {
    id: "214",
    text: "FekiCaramelos",
  },
];

const base: ICarouselMenu = {
  items,
  loadingSelectedId: false,
  showArrows: false,
};

export const mockCarouselMenuProps = {
  base,
};
