/* eslint-disable no-alert */
import { IUserIconTooltip } from "../types";

const noImage: IUserIconTooltip = {
  name: "Some",
  lastname: "Random Name",
  size: 60,
  tooltipProps: {},
};

const withImage: IUserIconTooltip = {
  name: "Some",
  lastname: "Random Name",
  size: 60,
  img: {
    src: "https://www.tripsavvy.com/thmb/gdhvU4tBn_De9xOSyYnh1dHAUEw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/beach-5b59c9b7c9e77c004b3e0ff0.jpg",
  },
};

const noLastname: IUserIconTooltip = {
  name: "Random",
  size: 60,
  img: {
    src: "https://www.tripsavvy.com/thmb/gdhvU4tBn_De9xOSyYnh1dHAUEw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/beach-5b59c9b7c9e77c004b3e0ff0.jpg",
  },
};

const differentPosition: IUserIconTooltip = {
  name: "Some",
  lastname: "Random Name",
  size: 60,
  img: {
    src: "https://www.tripsavvy.com/thmb/gdhvU4tBn_De9xOSyYnh1dHAUEw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/beach-5b59c9b7c9e77c004b3e0ff0.jpg",
  },
  tooltipProps: { placement: "bottom-end" },
};

export const mock = {
  noImage,
  withImage,
  noLastname,
  differentPosition,
};
