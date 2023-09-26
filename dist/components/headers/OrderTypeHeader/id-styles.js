import{resetBtnStyles as n}from"../../../theme/utils/id-resetButtonStyles.js";import o,{css as i}from"styled-components";const c=o.div`
  display: flex;
  width: 100%;

  & > button {
    width: 100%;
    flex: 1;
  }
  background-color: #fff;
`,p=o.button`
  ${n}
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 7px;
  margin-top: 11px;
  color: black;
  border-radius: 8px 8px 0px 0px;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.04em;
  min-height: 69px;
  transition: 0.3s all ease-in-out;
  ${({isActive:e})=>e&&i`
      color: ${({theme:t})=>t.color.SECONDARY[900]};
      background-color: ${({theme:t})=>t.color.QUATERNARY[200]};
    `}
`;export{p as BtnType,c as Container};
