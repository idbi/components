import React from "react";
import trash from "./trash.webp";

interface IconTrashProps {
  height?: number;
}

export const IconTrash: React.FC<IconTrashProps> = ({ height }) => (
  <img src={trash} height={height || 45} alt="trash" />
);
