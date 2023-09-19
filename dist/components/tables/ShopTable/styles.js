import o,{css as t}from"styled-components";const i={occupied:"#383838",available:"#151E5A",selected:"#FFFFFF"},a={occupied:"#D0D2DE",available:"#FFFFFF",selected:"#151E5A"},l={occupied:"",available:"#151E5A",selected:""},s=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,n=o.div`
  position: relative;
  transition: 0.3s;
  ${({noHover:e})=>!e&&t`
      :hover {
        transform: scale(1.05);
      }
    `}
`,c=o.p`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  cursor: default;
  color: ${({status:e})=>i[e]};
  font-weight: bold;
  font-size: ${({length:e})=>e>10?"0.4rem":e>9?"0.5rem":e>8?"0.6rem":e>6?"0.8rem":e>4?"0.9rem":"1.1rem"};
`,d=o.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0px 8px 1px;
  font-size: 0.75rem;
  border-radius: 10px;
  background: ${({occupied:e})=>e?"rgba(39, 174, 96, 0.3)":"#E8E8E9"};
  color: ${({occupied:e})=>e?"#219653":"#979797"};
  margin-bottom: 7px;
`;export{s as Container,d as Counter,c as Label,n as Table,a as tableColor,l as tableColorStroke};
