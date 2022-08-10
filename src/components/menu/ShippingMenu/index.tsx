import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import CloseIcon from "@/components/CloseIcon";
import IconEmailID from "@/components/IconEmailID";
import IconWhatsapp from "@/components/IconWhatsapp";
import LoadingCss from "@/components/LoadingCss";

import {
  getErrorFromError,
  getValueConfiguration,
  shouldSendEmailAutomatically,
} from "@/utils/global_functions";
import { validateIsCellNumber } from "@/utils/validators";

import { MailForm, PayloadMessageProps } from "@/components/mail";
import { ModalContainer } from "@/components/modal";
import { useTypedSelector } from "@/redux/store-type";
import { ShippingMenuContainer, Options, Icon } from "./styles";

type ShippingMenuProps = {
  description: string;
  handleSendMail: (payload: PayloadMessageProps) => any;
  initialMailsReplyTo?: string;
  initialMailsTo?: Array<string>;
  initialMailsCCO?: Array<string>;
  initialMailSubject?: string;
  initialMailContentMessage?: string;
  phone?: string;
  whatsappMessage?: string;
  disabled?: boolean;
  changeStateDisabled?: () => void;
  loadingChangeStateDisabled?: boolean;
  type?: "voucher" | "order";
};

export const ShippingMenu: React.FC<ShippingMenuProps> = ({
  description,
  handleSendMail,
  initialMailsReplyTo,
  initialMailsTo,
  initialMailsCCO,
  initialMailSubject,
  initialMailContentMessage,
  phone,
  whatsappMessage,
  disabled,
  changeStateDisabled,
  loadingChangeStateDisabled = false,
  type,
}) => {
  const [showMailForm, setShowMailForm] = useState(false);
  const { configurations } = useTypedSelector((state) => state.configurations);

  async function handleSendMailFunction() {
    try {
      const toastId = toast("Enviando correo...", {
        autoClose: false,
      });
      const payload = {
        bcc: initialMailsCCO,
        recipients: initialMailsTo,
        reply_to: initialMailsReplyTo,
        subject: initialMailSubject,
        content: `${initialMailContentMessage}
        <p></p>
        <a href="https://www.negocios.idbi.pe/" target="_blank" rel="noopener noreferrer">Powered by ID</a>  
        <p>&nbsp;</p> <p>&nbsp;</p><p style="font-size: 10px;">La información contenida en este e-mail y sus anexos es confidencial, privilegiada y está dirigida
        exclusivamente a su destinatario, en consecuencia, solo puede ser utilizada por aquel. Si usted no es el
        destinatario original, no deberá examinar, usar, copiar o distribuir este mensaje o la información que contiene.
        Si lo recibe por error, por favor reenvíelo a la persona que se lo envió y elimínelo. Cualquier retención o uso
        total o parcial no autorizada de este mensaje está estrictamente prohibida y sancionada por ley.</p>`,
      };
      handleSendMail && (await handleSendMail(payload));
      toast.update(toastId, {
        render: "Correo enviado automáticamente!",
        type: "success",
        autoClose: 3000,
      });
    } catch (error) {
      const err: any = getErrorFromError(error);
      toast.error(`${err.message}`);
    }
  }

  useEffect(() => {
    if (shouldSendEmailAutomatically(initialMailsTo, type, configurations)) {
      handleSendMailFunction();
    }
  }, []);

  return (
    <ShippingMenuContainer>
      <p
        onClick={() => {
          changeStateDisabled &&
            disabled &&
            !loadingChangeStateDisabled &&
            changeStateDisabled();
        }}
        style={
          changeStateDisabled && disabled && !loadingChangeStateDisabled
            ? { cursor: "pointer" }
            : {}
        }
      >
        {loadingChangeStateDisabled ? (
          <LoadingCss />
        ) : (
          disabled && <CloseIcon color="#ff0000" />
        )}{" "}
        {description}
      </p>
      {disabled ? (
        <Options>
          <Icon style={{ filter: "grayscale(100%)" }}>
            {validateIsCellNumber(phone) && <IconWhatsapp />}
          </Icon>
          <Icon style={{ filter: "grayscale(100%)" }}>
            <IconEmailID />
          </Icon>
        </Options>
      ) : (
        <Options>
          <Icon>
            {validateIsCellNumber(phone) && (
              <a
                href={`https://wa.me/+51${phone}?text=${encodeURIComponent(
                  whatsappMessage
                )}`}
                target="_blank"
                style={{
                  width: "43px",
                  height: "43px",
                  cursor: "pointer",
                  marginRight: "8px",
                }}
                rel="noreferrer"
              >
                <IconWhatsapp />
              </a>
            )}
          </Icon>
          <Icon onClick={() => setShowMailForm(!showMailForm)}>
            <IconEmailID />
          </Icon>
        </Options>
      )}
      {showMailForm && (
        <ModalContainer
          active={showMailForm}
          setActive={setShowMailForm}
          inTheCenterForDesktop
        >
          <MailForm
            type={type}
            sendMail={handleSendMail}
            onClose={setShowMailForm}
            initialContentMessage={initialMailContentMessage}
            initialSubject={initialMailSubject}
            initialMailsReplyTo={initialMailsReplyTo}
            initialMailsTo={initialMailsTo}
            initialMailsCCO={initialMailsCCO}
          />
        </ModalContainer>
      )}
    </ShippingMenuContainer>
  );
};
