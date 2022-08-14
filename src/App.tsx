import { useState } from "react";
import { Heading, Text } from "./components/Typography";
import styled from "styled-components";
import { TextField } from "./components/TextField";
import { Button } from "./components/Button";
import { SelectField } from "./components/SelectField";
import GoogleIcon from "./icons/GoogleIcon";
import { CodeInput } from "./components/CodeInput";
import IconResume from "./icons/Flags/USA";
import CheckIcon from "./icons/CheckIcon";
import WarningIcon from "./icons/WarningIcon";

export const Flex = styled.div<IFlexProps>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "flex-start"};
  align-content: ${(props) => props.content || "flex-start"};
  flex-grow: ${(props) => props.grow || "0"};
  flex-shrink: ${(props) => props.shrink || "1"};
  order: ${(props) => props.order || "0"};
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  gap: ${(props) => props.gap || "0px"};
`;

export interface IFlexProps {
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  wrap?: "wrap" | "nowrap" | "wrap-reverse";
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around";
  align?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  content?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "stretch";
  grow?: number;
  shrink?: number;
  order?: number;
  width?:
    | string
    | "auto"
    | "min-content"
    | "max-content"
    | "fit-content"
    | "fill-available";
  height?:
    | string
    | "auto"
    | "min-content"
    | "max-content"
    | "fit-content"
    | "fill-available";
  gap?: string;
}

const Layout = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 0 25px;
  gap: 13px;
`;

function App() {
  const [code, setCode] = useState("");

  return (
    <Layout>
      <Heading.H1 size="lg">Inicia Sesión</Heading.H1>
      <Text size="xs" color="NEUTRAL/900" weight="regular">
        Bienvenido de nuevo, ingresa con tu cuenta
      </Text>

      <TextField
        label="Correo electrónico"
        name="email"
        placeholder="Ingresa tu correo electrónico"
        errorMessage="Ingresa un correo electrónico válido"
        fullWidth
      />

      <TextField
        label="Crea tu contraseña"
        name="password"
        type="password"
        placeholder="Contraseña de al menos 6 caracteres"
        infoMessage="Crea una contraseña con más de 6 caracteres"
        fullWidth
      />

      <TextField
        label="Confirmar contraseña"
        name="passwordConfirmation"
        type="password"
        placeholder="Repite tu contraseña nueva"
        success
        fullWidth
      />

      <SelectField
        label="Prefijo"
        onChange={() => {}}
        options={[
          { label: "+51", value: "PE" },
          { label: "+52", value: "MX" },
          { label: "+53", value: "CU" },
          { label: "+54", value: "AR" },
          { label: "+55", value: "BR" },
          { label: "+56", value: "CL" },
          { label: "+57", value: "CO" },
          { label: "+58", value: "VE" },
          { label: "+591", value: "BO" },
        ]}
        placeholder="+51"
        formatOptionLabel={(option) => (
          <Flex gap="8px">
            <GoogleIcon size={20} />
            {option.label}
          </Flex>
        )}
      />

      {/* <CodeInput id="code" errorMessage="Ingresa un código válido" /> */}

      <Button shape="circular" size="sm" fullWidth>
        Registrarme
      </Button>

      <Button design="outline" shape="circular" size="sm">
        <GoogleIcon size={20} />
      </Button>
      <Button color="SUCCESS/900" design="outline" shape="circular" size="sm">
        <CheckIcon />
      </Button>
      <Button color="ALERT/900" design="outline" shape="circular" size="sm">
        <WarningIcon />
      </Button>
    </Layout>
  );
}

export default App;
