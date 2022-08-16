import styled from "styled-components";

const Layout = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 0 25px;
  gap: 13px;
`;

function App() {
  return <Layout>Hello</Layout>;
}

export default App;
