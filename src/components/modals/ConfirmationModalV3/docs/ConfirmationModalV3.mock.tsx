/* eslint-disable no-alert */
import { IConfirmationModalV3 } from "../types";

const multipleOptions: IConfirmationModalV3 = {
  title: "Crear cotización",
  content: "Elige como deseas crear la cotizacion",
  options: [
    {
      content: (
        <span>
          Crear <b>borrador</b>
        </span>
      ),
      onClick: () => alert("Crear borrador"),
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
  ],
  cancelOptions: [
    {
      content: "Cancelar",
      onClick: () => alert("Cancelar"),
    },
  ],
};

const singleConfirmation: IConfirmationModalV3 = {
  title: "Crear cotización",
  content: "Elige como deseas crear la cotizacion",
  options: [
    {
      content: "Crear",
      type: "primary",
      onClick: () => alert("Crear"),
    },
  ],
  cancelOptions: [
    {
      content: "Cancelar",
      onClick: () => alert("Cancelar"),
    },
  ],
};

const multipleCancelOptions: IConfirmationModalV3 = {
  title: "Crear cotización",
  content: "Elige como deseas crear la cotizacion",
  options: [
    {
      content: "Crear",
      type: "primary",
      onClick: () => alert("Crear"),
    },
  ],
  cancelOptions: [
    {
      content: "Cancelar",
      onClick: () => alert("Cancelar"),
    },
    {
      content: "Close",
      onClick: () => alert("Close"),
    },
  ],
};

const noCancelOptions: IConfirmationModalV3 = {
  title: "Crear cotización",
  content: "Elige como deseas crear la cotizacion",
  options: [
    {
      content: (
        <span>
          Crear <b>borrador</b>
        </span>
      ),
      onClick: () => alert("Crear borrador"),
    },
    {
      content: (
        <span>
          Crear y <b>finalizar</b>
        </span>
      ),
      type: "primary",
      onClick: () => alert("Crear y finalizar"),
    },
    {
      content: "Crear",
      onClick: () => alert("Crear"),
    },
  ],
  cancelOptions: [],
};

const customContent: IConfirmationModalV3 = {
  content: (
    <div style={{ border: "1px solid #ccc", padding: "10px 5px", boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)" }}>
      Este contenido es personalizable <button>button</button>
      <p style={{ color: "black", marginTop: 5 }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem impedit facilis eum eius nesciunt? Impedit,
        praesentium adipisci dolore tempora aut a tempore ea eos. Est et neque minima molestiae nulla.
      </p>
    </div>
  ),
  options: [
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
  ],
  cancelOptions: [
    {
      content: "Cancelar",
      onClick: () => alert("Cancelar"),
    },
  ],
};

const withDisabledOptions: IConfirmationModalV3 = {
  title: "Crear cotización",
  content: "Elige como deseas crear la cotizacion",
  options: [
    {
      content: (
        <span>
          Crear <b>borrador</b>
        </span>
      ),
      onClick: () => alert("Crear borrador"),
    },
    {
      content: (
        <span>
          Crear y <b>finalizar</b>
        </span>
      ),
      onClick: () => alert("Crear y finalizar"),
      disabled: true,
    },
    {
      content: "Crear",
      type: "primary",
      onClick: () => alert("Crear"),
      disabled: true,
    },
  ],
  cancelOptions: [
    {
      content: "Cancelar",
      onClick: () => alert("Cancelar"),
      disabled: true,
    },
  ],
};

export const mockConfirmationModalV3Props = {
  multipleOptions,
  singleConfirmation,
  multipleCancelOptions,
  noCancelOptions,
  customContent,
  withDisabledOptions,
};
