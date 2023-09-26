import e,{css as t}from"styled-components";const a=e.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
`,d=e.div`
  width: 100%;
  position: relative;
  .icon {
    content: "";
    position: absolute;
    left: 15px;
    top: 53%;
    transform: translateY(-50%);
    width: auto;
  }
  .clean {
    content: "";
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    width: auto;
    outline: none;
    padding: 0;
    border: none;
    background: none;
    min-width: 25px;
    width: 25px;
    height: 25px;
  }
  .icon,
  .clean {
    cursor: ${({disabled:o})=>o?"not-allowed":"pointer"};
  }
`,i=o=>o==="small"?"45px":o==="big"?"55px":`${o}px`,l=e.input`
  width: 100%;
  height: ${({containerSize:o})=>i(o)};
  padding: 8px 15px;
  padding-left: ${({addSearchIcon:o})=>o?"36px":"15px"};
  padding-right: ${({addCleanOption:o})=>o?"46px":"15px"};
  color: #4a4a4a;
  border-radius: 10px;
  border: ${({theme:o,alert:r})=>r?`1px solid ${o.color.ALERT[900]}`:`1px solid ${o.color.NEUTRAL[300]}`};
  outline: none;
  transition: box-shadow 0.3s ease-out;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 21px;
  letter-spacing: -0.04em;
  color: ${({theme:o})=>o.color.PRIMARY[900]};
  background: ${({theme:o,disabled:r})=>r?o.color.NEUTRAL[100]:"#fff"};
  cursor: ${({disabled:o})=>o?"not-allowed":"default"};

  ::placeholder {
    color: ${({theme:o})=>o.color.NEUTRAL[500]};
  }
  :focus {
    border: 1px solid ${({theme:o})=>o.color.QUATERNARY[900]};
  }
`,p=e.div`
  width: 100%;
  position: absolute;
  top: 100%;
  left: 0;
  border-radius: 6px;
  transition: all 0.4s ease;
  overflow: hidden;
  z-index: 9;
  background-color: white;
  max-height: 250px;
  overflow: auto;
  cursor: pointer;
  ${o=>o.active?t`
        border: 1px solid #d7d7d7;
      `:t`
      border: 0;
      height: 0;
    `};
`,s=e.div`
  width: 100%;
  height: 2px;
  padding: 0 6px;
  position: absolute;
  left: 0;
  top: 95%;
  border-radius: 50%;
  overflow: hidden;
`,c=e.div`
  background-color: ${({theme:o})=>o.color.QUATERNARY[900]};
  height: 1.5px;
  transition: all 0.3s ease;
  ${o=>o.active?t`
        width: 100%;
      `:t`
      width: 0;
    `};
`,h=e.div`
  width: 100%;
  color: #4a4a4a;
  padding: 5px 10px;
  font-size: 0.875rem;
  line-height: 1.3125rem;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  :hover {
    background-color: #e9e9e9;
  }
`,x=e.p`
  padding: 5px 10px;
  color: #4968e4;
  text-align: center;
  font-size: 0.875rem;
  line-height: 1.3125rem;
  :hover {
    text-decoration: underline;
    background-color: #e9e9e9;
  }
`;export{p as ContainerList,s as ContainerLoader,x as CreateContainer,d as InputContainer,h as ItemList,c as Loader,l as Search,a as Wrapper};
