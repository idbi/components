import r from"styled-components";const i=r.div`
  position: relative;
  width: ${({fullWidth:o})=>o?"100%":"auto"};
  ::selection {
    color: #fff;
    background: #4285f4;
  }
  .select-btn,
  li {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .select-btn {
    padding: 0 20px;
    width: 100%;
    padding: 10px 12px;
    min-height: 45px;
    background: #fff;
    border: 1px solid ${({theme:o})=>o.color.NEUTRAL[300]};
    border-radius: 0.5rem;
    justify-content: space-between;
  }

  .wrapper.active .select-btn i {
    transform: rotate(-180deg);
  }

  .content .options {
    margin-top: 10px;
    max-height: 250px;
    overflow-y: auto;
    padding-right: 7px;
  }

  li.selected {
    border-radius: 0.5rem;
    background-color: ${({theme:o})=>o.color.QUATERNARY[200]};
  }

  .options li:hover {
    border-radius: 0.5rem;
    background-color: ${({theme:o})=>o.color.QUATERNARY[100]};
  }
`,t=r.ul`
  width: ${({fullWidthOptions:o})=>o?"100%":"15rem"};
  max-height: ${({maxOptionsHeight:o})=>o?`${o}px`:"auto"};
  display: flex;
  flex-direction: column;
  background-color: #fff;
  gap: 0.5rem;
  position: absolute;
  z-index: 1;
  border-radius: 0.5rem;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
  padding: 0;
  padding: 0.438rem 0.313rem;
  .options {
    margin: 0;
    padding: 2px 0;
    overflow-y: auto;
    li {
      padding: 0.875rem 0.5rem;
      margin: 0.5rem 0.313rem;
      &:focus {
        border-radius: 0.5rem;
        outline: 2px solid ${({theme:o})=>o.color.SECONDARY[900]};
      }
    }
  }
`;export{t as OptionsManager,i as Wrapper};
