/* eslint-disable no-alert */
/* eslint-disable no-console */
import { INavbar } from "../types";

const defaultNavbar: INavbar = {
  zIndex: 100,
  isSticky: true,
  logoIcon: {
    onClick: () => alert("logo"),
  },
  bellIcon: {
    show: true,
    onClick: () => {},
    children: <div style={{ padding: "15px" }}>customize the list</div>,
  },
  searchOption: {
    show: true,
    onSearch: (val) => console.log(val),
    placeholder: "take care of hiding the options",
    addSearchIcon: true,
  },
  userIcon: {
    show: true,
    initials: "FC",
    onClick: () => alert("user icon"),
    name: "Felix Castro",
    note: "Administrador",
  },
  links: [
    {
      text: "link 1",
      onClick: () => alert("link 1"),
    },
    {
      text: "link 2",
      onClick: () => alert("link 2"),
    },
  ],
  options: [
    {
      option: {
        key: "1",
        text: "option 1",
        onClick: () => alert("option 1"),
      },
    },
    {
      option: {
        key: "2",
        text: "option 2",
        onClick: () => alert("option 2"),
      },
      subOptions: [
        {
          text: "sub option 1",
          onClick: () => alert("sub option 1"),
        },
        {
          text: "sub option 2",
          onClick: () => alert("sub option 2"),
        },
        {
          text: "sub option 3",
          onClick: () => alert("sub option 3"),
        },
      ],
    },
    {
      option: {
        key: "3",
        text: "option 3",
        onClick: () => alert("option 3"),
      },
      subOptions: [
        {
          text: "sub option 1",
          onClick: () => alert("sub option 1"),
        },
        {
          text: "sub option 2",
          onClick: () => alert("sub option 2"),
        },
        {
          text: "sub option 3",
          onClick: () => alert("sub option 3"),
        },
      ],
    },
  ],
};

const SimpleNavbar: INavbar = {
  links: [
    {
      text: "link 1",
      onClick: () => alert("link 1"),
    },
    {
      text: "link 2",
      onClick: () => alert("link 2"),
    },
  ],
};

export const mockNavbarProps = {
  defaultNavbar,
  SimpleNavbar,
};
