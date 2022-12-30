/* eslint-disable no-alert */
import { IUserIcon } from "../types";

const noImage: IUserIcon = {
  initials: "SG",
  size: 60,
};

const withImage: IUserIcon = {
  initials: "SG",
  img: {
    src: "https://www.tripsavvy.com/thmb/gdhvU4tBn_De9xOSyYnh1dHAUEw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/beach-5b59c9b7c9e77c004b3e0ff0.jpg",
  },
  size: 60,
};

export const mock = {
  noImage,
  withImage,
};
