import t,{css as n}from"styled-components";import e from"../../../theme/id-media-query.js";const p=t.div`
  background: transparent;
  color: #383838;
  border-radius: 20px;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5rem;

  @media ${e.md} {
    text-align: center;
  }
`,d=t.div`
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
  background: #fff;
  border-radius: 15px;
`,a=t.div`
  border-radius: 15px 15px 0 0;
  background: #f3f5ff;
  padding: 25px 20px;
`,x=t.div`
  color: #151e5a;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.6875rem;
  letter-spacing: -0.04em;
`,s=t.p`
  color: #808080;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
`,f=t.div`
  padding: 20px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;

  button {
    font-size: 14px;
  }

  ${({bottom:o})=>{if(o)return n`
        padding: 0;
        margin: 10px 0;
        button {
          box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
        }
      `}}
`;export{d as Card,p as Container,s as Content,a as Header,f as Options,x as Title};
