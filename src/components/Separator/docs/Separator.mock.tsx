import { ISeparator } from "../types";

const base: ISeparator = {
  sections: [
    {
      key: "1",
      title: "10:00",
      children: <div>content here</div>,
    },
    {
      key: "2",
      title: "11:00",
      children: <div>content here</div>,
    },
    {
      key: "3",
      title: "12:00",
      children: <div>content here</div>,
    },
  ],
};

export const mockSeparatorProps = {
  base,
};
