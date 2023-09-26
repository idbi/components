import e from"styled-components";const i=e.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
`,r=e.div`
  color: ${({theme:t})=>t.color.PRIMARY[900]};
  font-weight: 500;

  span {
    margin-top: -3px;
    display: flex;
    align-items: center;
    gap: 3px;
    color: ${({theme:t})=>t.color.NEUTRAL[400]};

    & > svg:first-child {
      transform: rotate(-90deg);
    }
  }
`;export{i as Container,r as TitleWrapper};
