import { useState } from "react";
import styled from "styled-components";
import { Button } from "./components/Button";
import { Collapsible } from "./components/Collapsible";
import { ConfirmationCardV3 } from "./components/confirmations/ConfirmationCardV3";
import PlayGround from "./components/Playground";

const ProfileOption = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  .left-box {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

function App() {
  const [open, setOpen] = useState(false);

  return (
    <PlayGround>
      {/* <Collapsible
        open={open}
        setOpen={setOpen}
        label="Profile"
        content={
          <ProfileOption>
            <div className="left-box">
              <GoogleIcon />
              <div>
                <h3>Google</h3>
                <p>
                  <span>
                    <CheckIcon />
                  </span>
                  <span>Verified</span>
                </p>
              </div>
            </div>
            <Button>Change</Button>
          </ProfileOption>
        }
      /> */}
      {/* <Card
        design="primary"
        options={[
          {
            leftIcon: <GoogleIcon />,
            label: "Mis datos",
            onClick: () => console.log("Mis datos"),
          },
          {
            leftIcon: <GoogleIcon />,
            label: "Mis tarjetas",
            onClick: () => console.log("Mis tarjetas"),
          },
          {
            leftIcon: <GoogleIcon />,
            label: "Mis pedidos",
            onClick: () => console.log("Mis pedidos"),
          },
          {
            leftIcon: <GoogleIcon />,
            label: "Mis direcciones",
            onClick: () => console.log("Mis direcciones"),
          },
          {
            leftIcon: <GoogleIcon />,
            label: "Mis empresas",
            onClick: () => console.log("Mis empresas"),
          },
        ]}
        optionsFormatter={(option) => (
          <Button
            onClick={option.onClick}
            type="button"
            color="PRIMARY/0"
            design="flat"
            shape="squared"
            fullWidth
          >
            <ProfileOption>
              <div className="left-box">
                {option.leftIcon}
                <span>{option.label}</span>
              </div>
              <div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 16.5L16.5 12L18 13.5L12 19.5L6 13.5L7.5 12L12 16.5Z"
                    fill="#BDBDBD"
                  />
                </svg>
              </div>
            </ProfileOption>
          </Button>
        )}
        withSeparator
      /> */}
    </PlayGround>
  );
}

export default App;
