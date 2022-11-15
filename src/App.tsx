import { useState } from "react";
import styled from "styled-components";
import { Button } from "./components/Button";
import { Collapsible } from "./components/Collapsible";
import { ConfirmationCardV3 } from "./components/confirmations/ConfirmationCardV3";
import PlayGround from "./components/Playground";
import { UploadImage } from "./components/files-upload/UploadImage";
import CheckIcon from "./icons/CheckIcon";
import GoogleIcon from "./icons/GoogleIcon";
import { PictureIcon } from "./icons-v2/PictureIcon";
import { SectionCard } from "./components/cards/SectionCard";
import { theme } from "./theme";
import { ClientCard } from "./components/cards/ClientCard";
import { EditQuantityInput } from "./components/forms/EditQuantityInput";
import UserProfileIcon from "./components/image-containers/UserProfileIcon";

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
  const [input, setInput] = useState<null | number>(null);

  return (
    <PlayGround>
      {/* <UploadImage setImageFile={() => {}} placeholder="Sube una imágen aquí" /> */}
      {/* <UploadImage
        onChange={() => {}}
        initialImgUrl="https://cdn.idbi.pe/0e797c6e-4f23-4995-ac18-3d38fa287387/helado-de-chocolate-6-1.jpg1645809470044.jpeg"
      /> */}

      {/* <UserProfileIcon
        // img={{
        //   src: "https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?cs=srgb&dl=pexels-masha-raymers-2726111.jpg&fm=jpg",
        // }}
        initials="A"
        // size={80}
      /> */}

      {/* <EditQuantityInput
        onSetQuantity={(val) => {
          console.log("running", val);
          setInput(val > 0 ? val : null);
        }}
        value={input}
        minimumQuantity={0}
        hasError={input === null}
        measureUnit="u."
        onDelete={() => {
          console.log("delete");
        }}
      /> */}
      {/* <ClientCard
        name="Andrea"
        lastName="Perez Vasquez"
        // img={{
        //   src: "https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?cs=srgb&dl=pexels-masha-raymers-2726111.jpg&fm=jpg",
        // }}
        idNumber="77867856"
        otherSections={["Test: asd", "Other: aaa"]}
      /> */}
      {/* <SectionCard
        title="Datos de la cotización"
        icon={<PictureIcon />}
        headerAside={
          <span style={{ color: theme.color.SECONDARY[900] }}>Cambiar</span>
        }
      >
        <input type="text" />
      </SectionCard> */}
      {/* <IconV2 size={50}><IconClose /></IconV2> */}
      {/* <ConfirmationCardV3
        title="Crear cotización"
        content="Elige como deseas crear la cotizacion"
        options={[
          {
            content: (
              <span>
                Crear <b>borrador</b>
              </span>
            ),
            onClick: () => alert("Crear y finalizar"),
          },
          {
            content: (
              <span>
                Crear y <b>finalizar</b>
              </span>
            ),
            onClick: () => alert("Crear y finalizar"),
          },
          {
            content: "Crear",
            type: "primary",
            onClick: () => alert("Crear"),
          },
        ]}
        cancelOptions={[
          {
            content: "Cancelar",
            onClick: () => alert("Cancelar"),
          },
        ]}
      /> */}

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
