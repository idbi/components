import React from "react";
import { useState } from "react";
import PlayGround from "./components/Playground";
import { Heading, Text } from "./components/Typography";
import { Button } from "./components/Button";
import styled from "styled-components";
import GoogleIcon from "./icons/GoogleIcon";
import { SelectInput } from "./components/SelectInput";
import { TextInput } from "./components/TextInput";

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
      <Button
        size="sm"
        design="outline"
        leftIcon={<GoogleIcon size={20} />}
        fullWidth
      >
        Continuar con Google
      </Button>

      <Button
        size="sm"
        design="outline"
        leftIcon={<GoogleIcon size={20} />}
        fullWidth
      >
        Continuar con Facebook
      </Button>
      <Button size="sm" design="outline" fullWidth>
        Continuar con correo electrónico
      </Button>
      <Flex wrap="wrap" gap="10px" width="100%">
        <Flex grow={1}>
          <SelectInput
            options={[{ label: "+51", value: "PE" }]}
            onChange={() => {}}
            value={{
              label: "+51",
              value: "PE",
            }}
            placeholder="+51"
            formatOptionLabel={(option) => (
              <Flex gap="8px">
                <GoogleIcon size={20} />
                {option.label}
              </Flex>
            )}
          />
        </Flex>
        <Flex grow={10}>
          <TextInput
            error
            leftAddon={<GoogleIcon size={20} />}
            rightAddon={<GoogleIcon size={20} />}
            placeholder="Escribe tu número"
            size="sm"
            fullWidth
          />
        </Flex>
      </Flex>
      <Button
        size="sm"
        shape="rounded"
        leftIcon={<GoogleIcon size={20} />}
        disabled
        fullWidth
      >
        Enviar sms
      </Button>
      <Text size="xs" color="NEUTRAL/900" weight="regular">
        ¿Aún no te has registrado?{" "}
        <Button as="a" design="link">
          Regístrate aquí
        </Button>
      </Text>
      <Button
        size="sm"
        design="flat"
        rightIcon={<GoogleIcon />}
        color="TERTIARY/900"
      >
        Continuar como invitado
      </Button>
      <Text size="xs" color="NEUTRAL/900" weight="light">
        Al continuar, aceptas los{" "}
        <Button color="NEUTRAL/900" as="a" design="link">
          términos y condiciones
        </Button>
      </Text>
    </Layout>
  );
}

export default App;
