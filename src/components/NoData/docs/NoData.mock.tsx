import { INoData } from "../types";

const base: INoData = {
  text: "Aún no cuentas con recetas agregadas a la orden",
  marginTop: "",
  marginBottom: "",
};
const variant: INoData = {
  text: (
    <>
      Aún no cuentas con <b>recetas</b> agregadas a la orden
    </>
  ),
  marginTop: "10vh",
  marginBottom: "10vh",
};

export const mockNoDataProps = {
  base,
  variant,
};
