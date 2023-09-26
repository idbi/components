import e from"styled-components";const i=e.div`
  text-align: center;
  font-weight: 300;
  font-size: 0.75rem;
  line-height: 1.125rem;
  letter-spacing: -0.04em;
  color: #404040;
  button {
    font-family: "Poppins";
    font-size: 0.75rem;
    line-height: 1.125rem;
    font-weight: 700;
  }
  margin-top: ${({marginTop:t})=>t||"auto"};
  margin-bottom: ${({marginBottom:t})=>t||"auto"};
`,n=e.div`
  margin-top: 5px;
`;export{i as Container,n as Message};
