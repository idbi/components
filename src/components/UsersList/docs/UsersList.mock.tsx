/* eslint-disable no-alert */
import { IUsersList } from "../types";

const base: IUsersList = {
  users: [
    {
      name: "Some",
      lastname: "Random Name",
      img: {
        src: "https://www.tripsavvy.com/thmb/gdhvU4tBn_De9xOSyYnh1dHAUEw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/beach-5b59c9b7c9e77c004b3e0ff0.jpg",
      },
    },
    {
      name: "Other",
      lastname: "Random Name",
    },
    {
      name: "Other",
      img: {
        src: "https://www.tripsavvy.com/thmb/gdhvU4tBn_De9xOSyYnh1dHAUEw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/beach-5b59c9b7c9e77c004b3e0ff0.jpg",
      },
    },
  ],
};

const withAddBtn: IUsersList = {
  onAdd: () => alert("add user"),
  users: [
    {
      name: "Some",
      lastname: "Random Name",
      img: {
        src: "https://www.tripsavvy.com/thmb/gdhvU4tBn_De9xOSyYnh1dHAUEw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/beach-5b59c9b7c9e77c004b3e0ff0.jpg",
      },
    },
    {
      name: "Other",
      lastname: "Random Name",
    },
    {
      name: "Other",
      img: {
        src: "https://www.tripsavvy.com/thmb/gdhvU4tBn_De9xOSyYnh1dHAUEw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/beach-5b59c9b7c9e77c004b3e0ff0.jpg",
      },
    },
  ],
};

const customSize: IUsersList = {
  iconSize: 70,
  onAdd: () => alert("add user"),
  users: [
    {
      name: "Some",
      lastname: "Random Name",
      img: {
        src: "https://www.tripsavvy.com/thmb/gdhvU4tBn_De9xOSyYnh1dHAUEw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/beach-5b59c9b7c9e77c004b3e0ff0.jpg",
      },
    },
    {
      name: "Other",
      lastname: "Random Name",
    },
    {
      name: "Other",
      img: {
        src: "https://www.tripsavvy.com/thmb/gdhvU4tBn_De9xOSyYnh1dHAUEw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/beach-5b59c9b7c9e77c004b3e0ff0.jpg",
      },
    },
  ],
};

export const mock = {
  base,
  withAddBtn,
  customSize,
};
