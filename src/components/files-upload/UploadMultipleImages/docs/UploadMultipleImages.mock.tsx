/* eslint-disable no-alert */
import { IUploadMultipleImages } from "../types";

const base: IUploadMultipleImages = {
  onChange: () => {},
};

const initialImages: IUploadMultipleImages = {
  initialImages: [
    "https://cdn.idbi.pe/0e797c6e-4f23-4995-ac18-3d38fa287387/helado-de-chocolate-6-1.jpg1645809470044.jpeg",
    "https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?cs=srgb&dl=pexels-masha-raymers-2726111.jpg&fm=jpg",
  ],
  onChange: () => {},
};

const withLimit: IUploadMultipleImages = {
  limit: 2,
  onChange: () => {},
};

export const mockConfirmationCardV2Props = {
  base,
  initialImages,
  withLimit,
};
