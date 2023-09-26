import t from"styled-components";const o=t.div`
  padding: ${({padding:e})=>e||"20px"};;
  border-radius: 10px;
  background: ${({background:e})=>e||"#fff"};
  box-shadow: ${({background:e})=>e==="transparent"?"none":"0px 10px 30px rgba(0, 0, 0, 0.08)"};
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.25rem;
  letter-spacing: -0.04em;
  color: #383838;
`,i=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`,r=t.p`
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: -0.04em;
  color: #181B20;
`,s=t.div`
  outline: none;
  border: none;
  background: none;
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 1.125rem;
  letter-spacing: -0.04em;
  color: #4318FF;
  cursor: pointer;
`,l=t.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`,p=t.li`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
  color: ${({remark:e})=>e?"#6192EB":""};
`,a=t.div`
  display: flex;
  gap: 15px;
  align-items: flex-start;
`,c=t.span`
  line-height: 1.25rem;
  padding: 1px 9px;
  background: #DFDFDF;
  border-radius: 4px;
  font-size: 0.75rem;
  color: #383838;
`,g=t.span`
  font-weight: 500;
  font-size: 0.75rem;
  color: ${({remark:e})=>e?"#6192EB":"#151E5A"};
`,d=t.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.125rem;
  color: #383838;
`,m=t.img`
  width: 56px;
  height: 56px;
  border: 1px solid #BFBFBF;
  background: #BFBFBF;
  border-radius: 8px;
  font-size: 9px;
  object-fit: cover;
`;export{s as Action,g as Amount,o as Container,i as Header,m as Img,p as Item,a as ItemInfo,l as List,d as Notes,c as Quantity,r as Title};
