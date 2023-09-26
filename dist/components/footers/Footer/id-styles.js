import o,{css as e}from"styled-components";const i=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,a=o(i)`
  background-color: white;
  width: 100%;
  min-height: 68px;
  padding: 15px;
  position: ${({position:t})=>t};
  bottom: 0;
  left: 0;

  ${({model:t,theme:n})=>{switch(t){case"primary":return e`
          box-shadow: ${n.effect.darkShadow[24]};
        `;default:return e`
          border-top: 1px solid ${n.color.NEUTRAL[200]};
        `}}}
`,p=o(i)`
  gap: 10px;
`,s=o.div`
  color: ${({theme:t})=>t.color.PRIMARY[900]};
  display: flex;
  align-items: center;
  gap: 0 10px;
  font-size: 12px;
  letter-spacing: -0.04em;

  span {
    display: block;
    font-size: 18px;
    font-weight: 800;
  }

  ${({vertical:t})=>t&&e`
      flex-direction: column;
      align-items: flex-start;
      span {
        margin-top: -3px;
      }
    `}
`;export{a as Container,p as Content,s as TotalContainer};
