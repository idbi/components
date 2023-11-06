import t from"styled-components";const e=t.div`
  width: 100%;
  min-width: ${({autoWidth:i})=>i?"auto":"300px"};
  padding: 15px 20px;
  border-radius: 15px;
  letter-spacing: -0.04em;
  background: ${({main:i})=>i?"linear-gradient(102.45deg, rgba(211, 217, 255, 0.76) 0.8%, #9BA8FF 101.76%)":""};
  box-shadow: 0 10px 30px 0 rgb(0 0 0 / 8%);
  display: flex;
  align-items: center;
  @media screen and (min-width: 768px) {
    max-width: ${({autoWidth:i})=>i?"auto":"300px"};
    margin-bottom: 0;
  }
`,o=t.div`
  border-radius: 20vw;
  min-width: 38px;
  height: 38px;
  min-height: 38px;
  height: 38px;
  background-color: #eff4fd;
  margin-right: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`,r=t.div`
  border-right: 1px solid ${({theme:i})=>i.color.NEUTRAL[200]};
  width: 120px;
  padding-right: 15px;
  margin-right: 15px;
  flex-shrink: 2;
`,a=t.span`
  color: ${i=>i.theme.color.NEUTRAL[500]};
  font-size: 15px;
  font-weight: 500;
`,p=t.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 5px 0 0;
  gap: 0;
  font-weight: bold;
`,d=t.div`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  color: #1b2559;
  font-size: ${({big:i})=>i?24:18}px;
`,x=t.span`
  display: block;
  text-align: right;
  color: #1b2559;
  font-weight: 400;
  font-size: 13.5px;
  span {
    margin-right: 5px;
  }
  @media screen and (min-width: 768px) {
    margin-top: 5px;
    text-align: left;
  }
`;export{p as Body,e as Container,x as Footer,o as IconContainer,d as Money,r as QuantitySection,a as Title};
