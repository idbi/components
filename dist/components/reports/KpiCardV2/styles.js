import o from"styled-components";const i=o.div`
  width: ${({autoWidth:n})=>n?"100%":"200px"};
  min-width: 200px;
  padding: 10px 15px;
  background: #fff;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  position: relative;
  @media screen and (min-width: 768px) {
    padding: 20px 24px;
  }
`,p=o.p`
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #bdbdbd;
  font: 600 14px Poppins;
`,e=o.div`
  min-height: 68px;
  > strong {
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 1.25rem;
    color: #000000;
  }
`,a=o.section`
  margin-top: 10px;
  line-height: 15px;
  > strong {
    font: 600 12px Poppins !important;
    display: flex;
    align-items: center;
    color: ${({isUp:n})=>n?"#27ae60":"#ea345f"};
    transition: all 0.2s;
  }
  p {
    font: normal 12px Poppins !important;
    color: #6b6b6b !important;
  }
`;export{a as Compare,i as Container,p as TitleContainer,e as ValueContainer};
