import React, { ImgHTMLAttributes } from 'react';
import trash from './trash.webp';

interface IconTrashV2Props {
  height?: number;
}

const IconTrashV2: React.FC<IconTrashV2Props> = ({ height }) => (
  <img src={trash} height={height || 45} />
);

export default IconTrashV2;
