import n,{css as e}from"styled-components";const i=n.button`
  border: none;
  outline: none;
  background: none;
  padding: 6.5px 16px;
  color: #46494d;
  font-size: 14px;
  font-weight: 500;
  font-family: "Poppins";
  letter-spacing: -0.04em;
  text-transform: capitalize;
  border-radius: 36px;
  white-space: nowrap;
  transition: 0.3s;
  ${({isSelected:r,model:t})=>{if(r&&t===2)return e`
        border: 1px solid ${o=>o.theme.color.SECONDARY[900]};
        color: ${o=>o.theme.color.SECONDARY[900]};
        background: #d0def9;
      `;if(t===2)return e`
        color: #242954;
        background: #d0def9;
      `;if(r)return e`
        color: ${o=>o.theme.color.SECONDARY[900]};
        background: ${o=>o.theme.color.QUATERNARY[200]};
      `}}
  :hover {
    color: ${r=>r.theme.color.SECONDARY[900]};
  }
`;export{i as Button};
