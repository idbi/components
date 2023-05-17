import { IUserItem } from "../types";

const base: IUserItem = {
  name: "Francisco",
  lastName: "Gutierrez",
  description: "999888777 - asd@email.com",
};

const withImage: IUserItem = {
  name: "Francisco Gutierrez",
  description: "999888777 - asd@email.com",
  img: "https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?cs=srgb&dl=pexels-masha-raymers-2726111.jpg&fm=jpg",
};

const customImageSize: IUserItem = {
  name: "Francisco Gutierrez",
  description: "999888777 - asd@email.com",
  img: "https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?cs=srgb&dl=pexels-masha-raymers-2726111.jpg&fm=jpg",
  imgSize: 45,
};

const asideVariant: IUserItem = {
  name: "Francisco Gutierrez",
  description: "Creado: 14 Nov",
  img: "https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?cs=srgb&dl=pexels-masha-raymers-2726111.jpg&fm=jpg",
  aside: true,
};

export const mockUserItemProps = {
  base,
  withImage,
  customImageSize,
  asideVariant,
};
