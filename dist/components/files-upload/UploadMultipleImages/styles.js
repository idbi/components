import e from"styled-components";const r=e.div`
  width: 55px;
  height: 55px;
  border-radius: 7px;
`,i=e.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`,n=e(r)`
  border: 1px solid ${({theme:o})=>o.color.NEUTRAL[100]};
  position: relative;
  overflow: hidden;
  cursor: pointer;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`,c=e(r)`
  border: 2px dashed ${({theme:o})=>o.color.SECONDARY[400]};
  color: ${({theme:o})=>o.color.SECONDARY[900]};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  cursor: pointer;
`,l=e.div`
  background-color: ${({theme:o})=>`${o.color.PRIMARY[900]}90`};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;export{i as Container,l as Cover,n as ImgWrapper,c as Placeholder};
