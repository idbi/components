import t from"styled-components";const n=t.button`
  border: 1px solid #fff;
  font-size: 14px;
  border-radius: 50%;
  display: flex;
  height: 34px;
  min-width: 34px;
  width: 34px;
  justify-content: center;
  background: #fff;
  align-items: center;
  text-align: center;
  color: ${({theme:o,variant:r="primary"})=>r==="primary"?o.color.SECONDARY[900]:o.color.PRIMARY[900]};
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  padding: 0;
  margin: 0;
  transition: 0.3s;
  :hover {
    box-shadow: 0px 1px 8px rgba(45, 45, 45, 0.2);
  }
`;export{n as IconButton};
