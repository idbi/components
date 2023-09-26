import t from"styled-components";const i=t.div`
  background-color: #fff;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
  color: ${({theme:o})=>o.color.PRIMARY[900]};
  border-radius: 8px;
  padding: 20px;
  font-size: 14px;
`,p=t.div`
  padding: 20px 0 0;
  margin-top: 20px;
  position: relative;

  ::before {
    content: "";
    border-top: 1px solid ${({theme:o})=>o.color.NEUTRAL[100]};
    width: calc(100% + 20px);
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`,n=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-bottom: ${({hasContent:o})=>o?"12px":0};
`,r=t.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
`;export{i as Card,n as Header,p as Section,r as Title};
