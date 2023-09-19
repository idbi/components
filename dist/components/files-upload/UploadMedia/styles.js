import e,{css as r}from"styled-components";const t=r`
  min-height: 70px;
  display: flex;
  align-items: center;
  cursor: default;
  user-select: none;
  border-radius: 10px;
`,p=e.div`
  ${t}
  justify-content: center;
  gap: 10px;
  width: 100%;
  padding: 10px;
  font: normal 14px "Poppins";
  letter-spacing: -0.04em;
  border: 2px dashed ${({theme:o})=>o.color.SECONDARY[900]};
`,i=e.p`
  transition: 0.3s;
  color: ${({theme:o})=>o.color.NEUTRAL[600]};
  span {
    color: ${({theme:o})=>o.color.SECONDARY[900]};
  }
  svg {
    margin-right: 5px;
  }
`,s=e.div`
  ${t}
  padding: 7px 12px;
  justify-content: space-between;
  background: ${({theme:o})=>o.color.QUATERNARY[200]};
  border: 1.5px solid ${({theme:o})=>o.color.QUATERNARY[400]};

  img {
    display: block;
    width: 100%;
    max-width: 55px;
    height: 55px;
    border-radius: 5px;
    object-fit: cover;
  }
  button {
    color: ${({theme:o})=>o.color.QUATERNARY[900]};
  }
`,l=e.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,c=e.div`
  max-width: 150px;

  span {
    display: block;
    letter-spacing: -0.04em;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  span:nth-child(1) {
    font: normal 16px "Poppins";
    color: ${({theme:o})=>o.color.PRIMARY[900]};
  }
  span:nth-child(2) {
    text-transform: uppercase;
    font: normal 12px "Poppins";
    color: ${({theme:o})=>o.color.QUATERNARY[900]};
  }
`;export{i as DefaultMessage,s as Display,l as Img,c as ImgInfo,p as Placeholder};
