import t from"styled-components";const r=t.div`
  color: 1px solid ${({theme:o})=>o.color.NEUTRAL[700]};
  display: flex;
  gap: 10px;
  font-size: 12px;
`,e=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  font-weight: 500;

  & > div {
    position: relative;

    & > button {
      background-color: white;
      border-radius: 4px;
      box-shadow: 0px 1px 4px rgba(33, 33, 33, 0.2);
      border: none;
      width: 29px;
      height: 29px;

      @media (hover: hover) {
        cursor: ${({clickeable:o})=>o?"pointer":"auto"};
      }
    }
  }
`,n=t.div`
  display: flex;
  gap: 8px;
  flex-grow: 1;
`,p=t.div`
  border: 1px solid ${({theme:o})=>o.color.NEUTRAL[100]};
  border-radius: 4px;
  width: 50px;
  height: 50px;
  position: relative;
  overflow: hidden;
`,d=t.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,a=t.span`
  background-color: ${({theme:o})=>o.color.SECONDARY[900]};
  color: white;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  padding: 3px 4px;
  position: absolute;
  top: 3px;
  left: 0;
  white-space: nowrap;
  font-size: 10px;
  font-weight: 700;
`,s=t.div`
  flex-grow: 1;

  @media (hover: hover) {
    cursor: ${({clickeable:o})=>o?"pointer":"auto"};
  }
`,c=t.div`
  & > span {
    font-weight: 500;
  }
  & > div {
    color: ${({theme:o})=>o.color.NEUTRAL[500]};
  }
`,l=t.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;

  & > div:nth-child(2) {
    margin-top: 5px;

    button {
      width: 30px;
      height: 30px;
      + span {
        padding: 0 5px;
      }
    }
  }
`,x=t.span`
  color: ${({theme:o})=>o.color.PRIMARY[900]};
  margin-right: 8px;
  span {
    font-weight: 700;
  }
`,h=t.span`
  display: inline-block;
  color: ${({theme:o})=>o.color.NEUTRAL[400]};
  text-decoration: line-through;
`;export{r as Container,c as Details,a as DiscountLabel,e as DishOrderContainer,l as Footer,d as Img,p as ImgContainer,n as Main,h as PrevTotal,x as Price,s as ProductInformation};
