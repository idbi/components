/* eslint-disable no-alert */
import { IUploadImage } from "../types";

const base: IUploadImage = {
  onChange: () => {},
  onError: alert,
};

const withInitialImg: IUploadImage = {
  onChange: () => {},
  onError: alert,
  initialImgUrl:
    "https://cdn.idbi.pe/0e797c6e-4f23-4995-ac18-3d38fa287387/helado-de-chocolate-6-1.jpg1645809470044.jpeg",
};

const customPlaceholder: IUploadImage = {
  onChange: () => {},
  onError: alert,
  placeholder: (
    <div style={{ textAlign: "center" }}>
      Adjunta una foto <b style={{ fontWeight: "bold" }}>aquí</b>
      <div>placeholder</div>
    </div>
  ),
};

export const mockConfirmationCardV2Props = {
  base,
  withInitialImg,
  customPlaceholder,
};
