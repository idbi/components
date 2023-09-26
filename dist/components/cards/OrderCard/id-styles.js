import o,{css as t}from"styled-components";const r=o.div`
  display: flex;
  cursor: default;
  flex-direction: column;
  box-shadow: rgba(128, 136, 156, 0.31) 0px 4px 6px 0px;
  width: 100%;
  max-width: 190px;
  position: relative;
  border-radius: 6px;
  overflow: hidden;
  background: "red";
  transition: 0.3s;
  ${({status:e})=>e==="canceled"?t`
        background: #e8e8e8;
      `:e==="accepted"?t`
        border-top: 6px solid #151e5a;
      `:t`
      border-top: 6px solid #bdbdbd;
    `}
  ${({noHover:e})=>{if(!e)return t`
        :hover {
          transform: scale(1.02);
        }
      `}}
`,i=o.div`
  padding: 20px 15px;
`,a=o.div`
  background-color: ${e=>e.theme.color.QUATERNARY[200]};
  color: ${e=>e.theme.color.PRIMARY[900]};
  padding: 12px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 14px;
`,p=o.span`
  display: block;
  font-size: 0.9em;
  font-weight: 300;
  color: #afafaf;
  text-align: left;
  margin: 5px 0;
`,s=o.span`
  margin: 0;
  display: block;
  font-size: 13px;
  margin-bottom: 5px;

  ${({status:e})=>e==="accepted"?t`
        color: #151e5a;
      `:t`
      color: #bdbdbd;
    `};
`,d=o.span`
  margin: 0;
  color: ${e=>e.theme.color.PRIMARY[900]};
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  font-weight: 600;
`,l=o.p`
  margin: 0 0 5px;
  font-size: 1em;
  font-weight: 500;
  text-transform: uppercase;
`,c=o.div`
  display: block;
  margin: 0 0 5px;
  font-size: 0.9em;
  font-weight: 300;
  text-align: left;
`,f=o.span`
  display: block;
  margin: 5px 0;
  font-size: 0.75em;
  font-weight: 300;
  color: #6986e5;
  text-transform: uppercase;
`;export{s as Badge,i as Body,r as Container,a as Footer,d as NumClients,f as Seller,c as Spot,p as Time,l as Title};
