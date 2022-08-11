import styled from "styled-components";
import { Heading } from "../Typography";

const Image = styled.img`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.color.PRIMARY[50]};
  padding-left: 20px;
  padding-right: 20px;

  header {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 7vh;
    gap: 20px;
  }

  main {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;
    height: 86vh;
    place-items: center;
  }
`;
const PlayGround: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Wrapper>
      {/* <header>
        <Image
          src="/id-logo.svg"
          alt="Letter I with color pink and a D with color blue"
          width={40}
          height={40}
        />
        <Heading.H1 size="sm">ID Components Playground</Heading.H1>
      </header> */}
      <main>{children}</main>
    </Wrapper>
  );
};

export default PlayGround;
