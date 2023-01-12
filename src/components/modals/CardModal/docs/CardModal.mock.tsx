/* eslint-disable no-alert */
import { ICardModal } from "../types";

const base: ICardModal = {
  show: false,
  contentLocation: "bottom",
  contentLocationInDesktop: "right",
  borderRadiusInDesktop: "0",
  backdropOpacity: 0.3,
  onClose: () => alert("cerrar"),
  overflow: "auto",
  padding: "20px",
  closeIcon: true,
  closeIconInDesktop: false,
  children: (
    <p>
      <b>styleContainer=none</b> can be used to prevent a select from generating an internal scroll. <br />
      <b>styleContainer=none</b> can be used to prevent a select from generating an internal scroll. <br />
      <b>styleContainer=none</b> can be used to prevent a select from generating an internal scroll. <br />
      <b>styleContainer=none</b> can be used to prevent a select from generating an internal scroll. <br />
      <b>styleContainer=none</b> can be used to prevent a select from generating an internal scroll. <br />
    </p>
  ),
  background: "#fff",
  boxShadowInDesktop: "0px 0px 24px 4px rgba(0, 12, 51, 0.08)",
  styleContainer: {
    overflow: "auto",
  },
};

const fullPageInMobile: ICardModal = {
  show: false,
  backdropOpacity: 0.3,
  overflow: "auto",
  padding: "20px",
  height: "100vh",
  maxHeight: "100vh",
  onClose: () => alert("cerrar"),
  contentLocation: "bottom",
  borderRadius: "0",
  closeIcon: true,
  contentLocationInDesktop: "left",
  borderRadiusInDesktop: "0",
  closeIconInDesktop: false,
  children: (
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, earum
      recusandae debitis rerum explicabo quaerat, nemo magni at praesentium
      labore deleniti iure minima voluptas natus cupiditate. Odio, deleniti?
      Doloremque.
    </p>
  ),
};

export const mockCardModalProps = {
  base,
  fullPageInMobile,
};
