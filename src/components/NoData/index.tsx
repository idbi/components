import React from "react";
import * as s from "./styles";
import type { INoData } from "./types";
import ImgNodata from "./assets/nodata.webp";

export const NoData: React.FC<INoData> = ({
  text,
  marginTop,
  marginBottom,
  style,
}) => {
  return (
    <s.Container
      marginTop={marginTop}
      marginBottom={marginBottom}
      style={style}
    >
      <img src={ImgNodata} alt="sin datos" width={65} height={65} />
      <s.Message>{text}</s.Message>
    </s.Container>
  );
};
