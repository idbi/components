import o,{keyframes as i}from"styled-components";const a=o.div`
  display: flex;
  gap: 10px;
`,e=i`
  0% { -webkit-transform:rotate(0deg); }
  100% { -webkit-transform:rotate(360deg); }
`,s=o.div`
  width: calc(100% - 20px);
  display: flex;
  gap: 1px;
  overflow-y: none;
  overflow-x: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  svg.loadingButton {
    animation-name: ${e};
    animation-duration: 1s;
    animation-iteration-count: infinite;
    margin-left: 5px;
  }
`,d=o.div`
  display: none;
  @media screen and (min-width: 1024px) {
    display: block;
  }
`,l=o.div`
  display: none;
  @media screen and (min-width: 1024px) {
    display: block;
  }
`,p=o.button`
  border: 1px solid #fff;
  font-size: 14px;
  border-radius: 50%;
  display: flex;
  height: 34px;
  width: 34px;
  justify-content: center;
  background: #fff;
  align-items: center;
  text-align: center;
  color: ${({theme:n,variant:t="primary"})=>t==="primary"?n.color.SECONDARY[900]:n.color.PRIMARY[900]};
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  padding: 0;
  margin: 0;
  transition: 0.3s;
  :hover {
    transform: scale(1.05);
    * {
      color: ${n=>n.theme.color.SECONDARY[900]};
    }
  }
`;export{l as ArrowLeft,d as ArrowRight,a as Container,p as IconButton,s as ItemList};
