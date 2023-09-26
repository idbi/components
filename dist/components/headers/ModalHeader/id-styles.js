import{theme as t}from"../../../theme/id-index.js";import{getDisabled as e}from"../../../theme/id-utils.js";import{resetButtonStyles as r}from"../../../theme/utils/id-resetButtonStyles.js";import i from"styled-components";const p=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({padding:o})=>o||"3px 0 "};;
  box-shadow: ${t.effect.lightShadow[16]};
  color: ${t.color.PRIMARY[900]};
  background: ${t.color.PRIMARY[0]};

  position: ${({isSticky:o})=>o?"sticky":"static"};
  top: 0;
  left: 0;
  z-index: ${({zIndex:o})=>o||"5"};
  margin-bottom: ${({marginBottom:o})=>o||"0"};
`,s=i.div`
  text-align: right;
  min-width: ${({minWidthForOptions:o})=>o||"auto"};
  button {
    padding: ${({paddingForOptions:o})=>o||"12px 20px"};
  }
`,a=i.button`
  ${r}
  color: ${({mode:o})=>o==="danger"?t.color.ALERT[700]:t.color.PRIMARY[900]};
  border-left: 1px solid ${t.color.NEUTRAL[200]};
  ${({disabled:o})=>e({disabled:o})};
`;export{p as Container,a as Option,s as Options};
