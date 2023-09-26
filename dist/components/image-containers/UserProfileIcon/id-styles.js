import r from"styled-components";const i=r.div`
  background-color: ${({theme:o,hasImg:e})=>e?o.color.QUATERNARY[300]:"transparent"};
  border: 1px solid white;
  border-radius: 50%;
  color: ${({theme:o})=>o.color.QUATERNARY[900]};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  font-weight: 500;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;export{i as ImgContainer};
