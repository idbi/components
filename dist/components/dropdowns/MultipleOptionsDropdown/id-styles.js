import t,{css as e}from"styled-components";const p=t.ul`
  color: ${({theme:o})=>o.color.OTHER.color1};
  background-color: white;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid ${({theme:o})=>o.color.QUATERNARY[300]};
  border-radius: 10px;
  width: 300px;
  margin: 5px 0;
  padding: 0;
  z-index: 99;
  font: 400 14px Poppins;
  list-style-type: none;

  & > li:last-child {
    border-radius: 0 0 10px 10px;
  }

  & > li:first-child {
    border-radius: 10px 10px 0 0;
  }
`,n=t.div`
  padding: 5px 10px 5px 15px;
  min-height: 55px;
  display: flex;
  align-items: center;
  font-weight: 700;
  position: relative;

  ::after {
    content: "";
    border-top: 1px solid ${({theme:o})=>o.color.QUATERNARY[300]};
    width: calc(100% - 12px);
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%);
  }
`,l=t.li`
  background-color: ${({active:o})=>o?"#ebedff":"white"};
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px 5px 15px;
  gap: 7px;
  opacity: ${({disabled:o})=>o?.6:1};
  position: relative;
  @media (hover: hover) {
    cursor: ${({disabled:o})=>o?"not-allowed":"pointer"};
  }

  &:hover {
    background-color: #ebedff;
  }

  & > svg,
  & > img {
    flex-shrink: 0;
  }
  & > img {
    width: 18px;
    height: 18px;
    object-fit: contain;
  }
  & > svg {
    font-size: 20px;
  }

  ${({alert:o})=>{if(o)return e`
        background-color: ${({theme:i})=>i.color.ALERT[100]};
        color: ${({theme:i})=>i.color.ALERT[900]};
        &:hover {
          background-color: ${({theme:i})=>i.color.ALERT[200]};
        }
      `}}
`,c=t.div`
  position: absolute;
  top: 0;
  right: calc(100% + 8px);
`;export{n as Header,p as Menu,l as Option,c as SubMenuContainer};
