import styled, { css } from "styled-components";
import { DropdownMenu } from "./components/dropdowns";
import { MultipleOptionsModal } from "./components/modals/MultipleOptionsModal";
import PlayGround from "./components/Playground";

export const Btn = styled.button<{ model: "primary" | "secondary" | "alert" }>`
  background-color: white;
  border: 1px solid ${({ theme }) => theme.color.SECONDARY[900]};
  border-radius: 8px;
  color: ${({ theme }) => theme.color.SECONDARY[900]};
  width: 42px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;

  :not(:disabled) {
    cursor: pointer;
  }
  :disabled {
    opacity: 0.5;
  }

  ${({ model, theme }) => {
    if (model === "secondary")
      return css`
        border: 1px solid ${theme.color.SECONDARY[200]};
      `;
    if (model === "alert")
      return css`
        border: 1px solid ${theme.color.ALERT[900]};
        color: ${theme.color.ALERT[900]};
      `;
  }}
`;

function App() {
  return (
    <PlayGround>
      <Btn model="secondary">
        <DropdownMenu
          activator={
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="18"
              width="18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M10 3v2H5v14h14v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6zm7.586 2H13V3h8v8h-2V6.414l-7 7L10.586 12l7-7z" />
              </g>
            </svg>
          }
          header="Compartir archivo por"
          options={[
            {
              icon: <>Hello</>,
              // loading: false,
              text: "Enviar por correo electrónico",
              onClick: () => alert("Enviar por correo electrónico"),
            },
            {
              // alert: true,
              icon: <>World</>,
              text: "Enviar por whatsapp",
              onClick: () => alert("Enviar por whatsapp"),
            },
          ]}
        />
      </Btn>
      <MultipleOptionsModal
        contentLocation="bottom"
        contentLocationInDesktop="bottom"
        defaultDescription=""
        defaultTitle="Acciones"
        onClose={() => alert("onClose")}
        options={[
          {
            onClick: function Ul() {},
            text: "Whatsapp",
            icon: (
              <svg
                width="55"
                height="55"
                viewBox="0 0 55 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_16031_21523)">
                  <circle cx="27.03" cy="25.03" r="23.03" fill="#25D366" />
                  <path
                    d="M34.6091 17.4473C32.6161 15.4514 29.9037 14.3324 27.0746 14.3389C21.2058 14.3389 16.4291 19.0918 16.4259 24.9347C16.4226 26.7952 16.9152 28.6203 17.8485 30.2326L16.3384 35.7239L21.9836 34.2503C23.5456 35.0951 25.2923 35.5401 27.0714 35.5401H27.0746C32.9434 35.5401 37.7201 30.7872 37.7234 24.9443C37.7331 22.1326 36.6118 19.4336 34.6091 17.4473ZM27.0779 33.7505H27.0746C25.4899 33.7505 23.9344 33.3281 22.5701 32.522L22.2461 32.3317L18.8952 33.2056L19.7897 29.9552L19.579 29.6231C18.6911 28.2205 18.2244 26.5953 18.2244 24.9347C18.2277 20.0785 22.1975 16.1285 27.0779 16.1285C31.968 16.1317 35.928 20.0785 35.9248 24.9411C35.9248 29.8005 31.955 33.7505 27.0779 33.7505Z"
                    fill="white"
                  />
                  <path
                    d="M32.0047 27.593C31.7328 27.4565 30.3935 26.7936 30.1449 26.7037C29.8962 26.6137 29.7139 26.5671 29.5316 26.8402C29.3492 27.1134 28.8288 27.7296 28.6696 27.9128C28.5105 28.096 28.3514 28.1193 28.0796 27.9794C27.8077 27.8395 26.9292 27.5531 25.8916 26.6204C25.0827 25.8942 24.5357 24.9982 24.3766 24.7251C24.2174 24.4519 24.36 24.302 24.4959 24.1655C24.6186 24.0422 24.7677 23.8457 24.9037 23.6858C25.0396 23.5259 25.086 23.4127 25.1755 23.2295C25.265 23.0463 25.2219 22.8864 25.1523 22.7498C25.0827 22.6133 24.539 21.2675 24.3136 20.7179C24.0915 20.185 23.8693 20.2583 23.7003 20.2483C23.5411 20.2416 23.3588 20.2383 23.1798 20.2383C23.0008 20.2383 22.7024 20.3049 22.4538 20.5814C22.2051 20.8578 21.499 21.5174 21.499 22.8664C21.499 24.2154 22.4737 25.5145 22.6096 25.6944C22.7455 25.8776 24.529 28.6389 27.2607 29.8248C27.7679 30.0446 28.2851 30.2378 28.8122 30.401C29.4653 30.6075 30.0587 30.5809 30.5261 30.5109C31.0499 30.431 32.1373 29.8481 32.3627 29.2119C32.5881 28.5757 32.5881 28.026 32.5218 27.9128C32.4555 27.7995 32.2765 27.7329 32.0047 27.593Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_16031_21523"
                    x="0"
                    y="0"
                    width="54.0601"
                    height="54.0605"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="2" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.420833 0 0 0 0 0.420833 0 0 0 0 0.420833 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_16031_21523"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_16031_21523"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            ),
          },
          {
            disabled: true,
            onClick: function Ul() {},
            text: "Esta semana",
          },
        ]}
        optionsInCenter
        direction="column"
        iconOrientation="vertical"
      />
    </PlayGround>
  );
}

export default App;
