/* eslint-disable no-alert */
import { TrashIcon } from "@/icons-v2/TrashIcon";
import { IClientCard } from "../types";

const base: IClientCard = {
  name: "Andrea",
  lastName: "Perez Vasquez",
  img: {
    src: "https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?cs=srgb&dl=pexels-masha-raymers-2726111.jpg&fm=jpg",
  },
  idNumber: "77867856",
};

const withOtherSections: IClientCard = {
  name: "Andrea",
  lastName: "Perez Vasquez",
  img: {
    src: "https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?cs=srgb&dl=pexels-masha-raymers-2726111.jpg&fm=jpg",
  },
  idNumber: "77867856",
  otherSections: [
    "Test: asd",
    <>
      <TrashIcon color="red" style={{ cursor: "pointer" }} onClick={() => alert("clicked!")} /> Other: aaa
    </>,
  ],
};

const noProfileImg: IClientCard = {
  name: "Andrea",
  lastName: "Perez Vasquez",
  idNumber: "77867856",
  otherSections: ["Test: asd", "Other: aaa"],
};

const noIdentification: IClientCard = {
  name: "Andrea",
  lastName: "Perez Vasquez",
  otherSections: ["Test: asd", "Other: aaa"],
};

const withDeleteAction: IClientCard = {
  name: "Andrea",
  lastName: "Perez Vasquez",
  otherSections: ["Test: asd", "Other: aaa"],
  onDelete: () => alert("remove client"),
};

export const mockConfirmationCardV2Props = {
  base,
  withOtherSections,
  noProfileImg,
  noIdentification,
  withDeleteAction,
};
