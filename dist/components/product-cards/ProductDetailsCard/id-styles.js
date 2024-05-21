import l,{css as r}from"styled-components";const n=l.div`
  background-color: ${({theme:o,disabled:c})=>c?o.color.NEUTRAL[50]:"white"};
  border: 1px solid ${({theme:o})=>o.color.NEUTRAL[100]};
  border-radius: 8px;
  min-height: ${({hasDetails:o})=>o?"140px":"unset"};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  gap: 5px;
  font-size: 14px;
  overflow: hidden;

  ${({onClick:o,theme:c,disabled:i})=>o&&!i&&r`
      transition: background-color 0.2s ease;
      cursor: pointer;

      :hover {
        background-color: ${c.color.NEUTRAL[50]};
      }
    `};
`,t=l.div`
  display: flex;
  align-items: stretch;
`,a=l.div`
  width: 75px;
  height: 88px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  flex-shrink: 0;

  & > div:first-child {
    width: 100%;
    flex-grow: 1;
    flex-basis: 0;
    position: relative;
    display: flex;
    & > img {
      display: inline-block;
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`,d=l.div`
  min-height: 24px;
  width: 100%;
  background-color: ${({theme:o})=>o.color.QUATERNARY[100]};
  color: ${({theme:o})=>o.color.QUATERNARY[900]};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  flex-shrink: 0;

  ${({theme:o,status:c})=>{switch(c){case"draft":return r`
          background-color: ${o.color.NEUTRAL[100]};
          color: ${o.color.NEUTRAL[500]};
        `;case"pending":return r`
          background-color: ${o.color.SECONDARY[100]};
          color: ${o.color.SECONDARY[700]};
        `;case"preparing":return r`
          background-color: ${o.color.STATE[100]};
          color: ${o.color.STATE[900]};
        `;case"prepared":return r`
          background-color: ${o.color.SUCCESS[100]};
          color: ${o.color.SUCCESS[900]};
        `;case"collected":return r`
          background-color: #efdaff;
          color: #9600f2;
        `;case"delivered":return r`
          background-color: ${o.color.PRIMARY[100]};
          color: ${o.color.PRIMARY[700]};
        `;case"canceled":return r`
          background-color: ${o.color.ALERT[100]};
          color: ${o.color.ALERT[900]};
        `}}}
`,s=l.div`
  padding: 8px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: ${({hasDetails:o})=>o?"flex-start":"space-between"};
  gap: 5px;
`,p=l.div`
  color: ${({theme:o,disabled:c})=>c?o.color.NEUTRAL[500]:o.color.NEUTRAL[800]};
  display: flex;
  align-items: flex-start;
  gap: 5px;
  font-weight: 500;
`,f=l.div`
  color: ${({theme:o})=>o.color.NEUTRAL[500]};
  margin-top: 8px;
  font-size: 12px;
`;export{n as Card,f as DetailsWrapper,a as ImgContainer,d as ImgLabel,p as Main,t as MainContainer,s as ProductData};
