import r from"styled-components";const i=r.h2`
  color: ${({theme:o})=>o.color.PRIMARY[900]};
  margin-bottom: 20px;
  font-size: 20px;
`,l=r.div`
  display: flex;

  input {
    border-radius: 8px;
    border: 1px solid ${({theme:o})=>o.color.NEUTRAL[300]};
    display: block;
    flex-grow: 1;
    width: 0;
    padding-left: 10px;
    margin-right: 10px;
  }
`;export{l as ModalContent,i as ModalTitle};
