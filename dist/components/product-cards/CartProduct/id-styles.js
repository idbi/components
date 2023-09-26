import t from"styled-components";const i=t.div`
  background-color: white;
  border: 1px solid ${({theme:o})=>o.color.NEUTRAL[100]};
  color: 1px solid ${({theme:o})=>o.color.NEUTRAL[700]};
  border-radius: 8px;
  padding: 10px;
  font-size: 12px;
`,e=t.div`
  margin-bottom: 8px;
  display: flex;
  gap: 10px;
  cursor: ${({canClick:o})=>o?"pointer":"auto"};
`,p=t.img`
  border-radius: 8px;
  width: 55px;
  height: 55px;
  object-fit: cover;
`,n=t.div`
  flex-grow: 1;
`,s=t.span`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 5px;
  font-weight: 500;
  font-size: 14px;

  svg {
    flex-shrink: 0;
    margin: 3px 3px 0 0;
    transition: 0.3s;
    transform: ${({detailsActive:o})=>o?"rotate(0)":"rotate(-90deg)"};
    cursor: pointer;
  }
`,a=t.span`
  color: ${({theme:o})=>o.color.SUCCESS[900]};
`,c=t.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 3px;
`,d=t.span`
  display: block;
  color: 1px solid ${({theme:o})=>o.color.PRIMARY[900]};
  span {
    font-weight: 700;
  }
`,l=t.span`
  background-color: ${({theme:o})=>o.color.SUCCESS[900]};
  border-radius: 50px;
  color: white;
  display: inline-block;
  padding: 5px 8px;
  font-weight: 500;
  font-size: 10px;
`,x=t.input`
  border: 1px solid ${({theme:o})=>o.color.NEUTRAL[100]};
  height: 34px;
  border-radius: 8px;
  width: 100%;
  font-size: 12px;
  padding: 5px 10px;

  :focus {
    border: 1px solid ${({theme:o})=>o.color.NEUTRAL[500]};
    outline: none;
  }
`,g=t.div`
  margin-top: 8px;
`,f=t.div`
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;export{i as Card,g as DetailsWrapper,a as DiscountLabel,f as Footer,e as Header,p as Img,x as Input,s as Name,l as Patch,d as Price,c as PriceWrapper,n as ProductData};
