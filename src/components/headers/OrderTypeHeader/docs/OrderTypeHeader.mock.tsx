import { IOrderTypeHeader } from "../types";

const base: IOrderTypeHeader = {
  types: [
    {
      slug: "delivery",
      uuid: "1",
    },
    {
      slug: "on-room",
      uuid: "2",
    },
    {
      slug: "pick-up",
      uuid: "3",
    },
    {
      slug: "on-room",
      uuid: "4",
    },
  ],
  activeTypeUuid: "3",
};

export const mockOrderTypeHeaderProps = {
  base,
};
