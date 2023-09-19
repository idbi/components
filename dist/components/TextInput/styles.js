import{getFullWidth as i,getSize as t}from"../../theme/utils.js";import l from"styled-components";const c=l.div`
  ${({fullWidth:o})=>i({fullWidth:o})};
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 8px;
  border: 1px solid
    ${({theme:o,error:r,success:n,isFocused:e})=>r?o.color.ALERT[900]:n&&e?o.color.SUCCESS[900]:e?o.color.QUATERNARY[900]:o.color.NEUTRAL[300]};
  background: #fff;
  min-height: 45px;
  ::placeholder {
    color: ${({theme:o})=>o.color.NEUTRAL[500]};
  }

  background-color: ${({theme:o,disabled:r})=>r?o.color.NEUTRAL[100]:"#fff"};
  cursor: ${({disabled:o})=>o?"not-allowed":"auto"};
  transition: background 0.3s ease-out;
  transition: border 0.3s ease-out;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;

  > input {
    border-radius: 8px;
    width: 100%;
    ${({size:o})=>t({size:o})};
    flex-grow: 1;
    border: none;
    outline: none;
    background-color: #fff;
    letter-spacing: -0.04em;
    color: ${({theme:o})=>o.color.NEUTRAL[700]};
    padding-left: ${({leftAddon:o})=>o?"0px":"15px"};
    padding-right: ${({rightAddon:o})=>o?"0px":"12px"};
    padding-right: ${({success:o,error:r})=>(o||r)&&"2.5rem"};

    &:disabled {
      cursor: not-allowed;
      background-color: ${({theme:o})=>o.color.NEUTRAL[100]};
      color: ${({theme:o})=>o.color.NEUTRAL[500]};
    }
  }

  .leftAddon {
    padding-left: 12px;
  }

  .rightAddon {
    padding-right: 12px;
  }

  span {
    color: ${({theme:o})=>o.color.NEUTRAL[500]};
    ${({size:o})=>t({size:o})};
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: -0.04em;
    user-select: none;
  }

  .state {
    position: absolute;
    right: 1rem;
  }
`;export{c as InputContainer};
