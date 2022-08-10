import React, { useState, useEffect, KeyboardEvent } from "react";
import { toast } from "react-toastify";
import { v4 as uuidV4 } from "uuid";
import * as yup from "yup";
import { FiX } from "react-icons/fi";
import { RiCloseLine } from "react-icons/ri";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {
  Container,
  CloseSendMail,
  ContainerLabels,
  FormGroup,
  Label,
  ContainerInput,
  ButtonsCCAndCCO,
  FooterMail,
  HideTextOnMobile,
  CKEditorStyle,
  Buttons,
  MailSentContainer,
} from "./styles";
import {
  getErrorFromError,
  getValueConfiguration,
  shouldSendEmailAutomatically,
} from "@/utils/global_functions";
import { useTypedSelector } from "@/redux/store-type";
import { Button, IconButton } from "@/components/button";

interface Mail {
  id: string;
  mail: string;
}

export interface PayloadMessageProps {
  bcc: Array<string>;
  cc?: Array<string>;
  content: string;
  recipients: Array<string>;
  reply_to: string;
  subject: string;
}

type MailFormProps = {
  sendMail: (payload: PayloadMessageProps) => any;
  onClose: (status: boolean) => void;
  initialMailsReplyTo?: string;
  initialMailsTo?: Array<string>;
  initialMailsCCO?: Array<string>;
  initialSubject?: string;
  initialContentMessage?: string;
  type?: "voucher" | "order";
};

export const MailForm: React.FC<MailFormProps> = ({
  sendMail,
  onClose,
  initialMailsReplyTo,
  initialMailsTo = [],
  initialMailsCCO = [],
  initialSubject = "",
  initialContentMessage = "",
  type,
}) => {
  const { configurations } = useTypedSelector((state) => state.configurations);
  const [mailsReplyTo, setMailsReplyTo] = useState<Mail[]>([]);
  const [mails, setMails] = useState<Mail[]>([]);
  const [mailsCC, setMailsCC] = useState<Mail[]>([]);
  const [mailsCCO, setMailsCCO] = useState<Mail[]>([]);
  const [isCCActive, setIsCCActive] = useState(false);

  const [isCCOActive, setIsCCOActive] = useState(true);
  const [isLoadingSend, setIsLoadingSend] = useState(false);

  const [replyTo, setReplyTo] = useState("");
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [CC, setCC] = useState("");
  const [CCO, setCCO] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (initialMailsReplyTo && initialMailsReplyTo.length > 0) {
      setMailsReplyTo([{ mail: initialMailsReplyTo, id: uuidV4() }]);
    }
    setSubject(initialSubject);
    setContent(initialContentMessage);
    const initial_MailsTo: Mail[] = [];
    const initial_MailsCCO: Mail[] = [];
    initialMailsTo.forEach((mail) =>
      initial_MailsTo.push({ mail, id: uuidV4() })
    );
    initialMailsCCO.forEach((mail) =>
      initial_MailsCCO.push({ mail, id: uuidV4() })
    );
    setMails(initial_MailsTo);
    setMailsCCO(initial_MailsCCO);
  }, []);

  function handleDeleteMail(id: string, action: string) {
    switch (action) {
      case "to":
        setMails((state) => state.filter((s) => s.id !== id));
        break;
      case "replyTo":
        setMailsReplyTo((state) => state.filter((s) => s.id !== id));
        break;
      case "cc":
        setMailsCC((state) => state.filter((s) => s.id !== id));
        break;
      case "cco":
        setMailsCCO((state) => state.filter((s) => s.id !== id));
        break;
      default:
        break;
    }
  }

  function onGetMail(action: string) {
    let mail = "";

    switch (action) {
      case "to":
        mail = to.trim();
        break;
      case "replyTo":
        mail = replyTo.trim();
        break;
      case "cc":
        mail = CC.trim();
        break;
      case "cco":
        mail = CCO.trim();
        break;
      default:
        mail = "";
        break;
    }
    if (mail) {
      const schema = yup.object().shape({
        mail: yup.string().email(),
      });
      schema
        .isValid({
          mail: `${mail}`,
        })
        .then(function (valid) {
          if (valid) {
            switch (action) {
              case "to":
                setMails((state) => [...state, { mail, id: uuidV4() }]);
                setTo("");
                break;
              case "replyTo":
                setMailsReplyTo((state) => [...state, { mail, id: uuidV4() }]);
                setReplyTo("");
                break;
              case "cc":
                setMailsCC((state) => [...state, { mail, id: uuidV4() }]);
                setCC("");
                break;
              case "cco":
                setMailsCCO((state) => [...state, { mail, id: uuidV4() }]);
                setCCO("");
                break;

              default:
                break;
            }
          }
        });
    }
  }

  const onChangeContent = (event: any, editor: any) => {
    const data = editor.getData();
    setContent(data);
  };

  function handleKeyUp(e: KeyboardEvent<HTMLInputElement>, action: string) {
    if (e.keyCode === 32) {
      onGetMail(action);
    }
  }

  async function handleSendMail() {
    try {
      setIsLoadingSend(true);
      const payload = {
        bcc: mailsCCO.map((mail) => mail.mail),
        cc: mailsCC.map((mail) => mail.mail),
        recipients: mails.map((mail) => mail.mail),
        reply_to: mailsReplyTo[0].mail,
        subject,
        content: `${content}
        <p></p>
        <a href="https://www.negocios.idbi.pe/" target="_blank" rel="noopener noreferrer">Powered by ID</a>  
        <p>&nbsp;</p> <p>&nbsp;</p><p style="font-size: 10px;">La información contenida en este e-mail y sus anexos es confidencial, privilegiada y está dirigida
        exclusivamente a su destinatario, en consecuencia, solo puede ser utilizada por aquel. Si usted no es el
        destinatario original, no deberá examinar, usar, copiar o distribuir este mensaje o la información que contiene.
        Si lo recibe por error, por favor reenvíelo a la persona que se lo envió y elimínelo. Cualquier retención o uso
        total o parcial no autorizada de este mensaje está estrictamente prohibida y sancionada por ley.</p>`,
      };
      sendMail && (await sendMail(payload));
      toast.success("Correo enviado correctamente!");
      onClose(false);
    } catch (error) {
      const err: any = getErrorFromError(error);
      toast.error(`${err.message}`);
    } finally {
      setIsLoadingSend(false);
    }
  }

  return (
    <Container>
      <h1>Enviar correo electrónico</h1>
      {shouldSendEmailAutomatically(initialMailsTo, type, configurations) && (
        <MailSentContainer>
          <span>
            Se ha enviado un correo automático previo. Si deseas cambiar esta
            opción, ir a <b>configuración</b>.
          </span>
        </MailSentContainer>
      )}
      <CloseSendMail>
        <IconButton variant="secondary" onClick={() => onClose(false)}>
          <FiX size={18} />
        </IconButton>
      </CloseSendMail>
      <ContainerLabels>
        <FormGroup>
          <Label htmlFor="replyTo">Responder a:</Label>
          <ContainerInput>
            {mailsReplyTo.map((mail) => (
              <span key={mail.id}>
                {mail.mail}{" "}
                <RiCloseLine
                  onClick={() => handleDeleteMail(mail.id, "replyTo")}
                />
              </span>
            ))}
            <input
              id="replyTo"
              name="replyTo"
              value={replyTo}
              onBlur={() => onGetMail("replyTo")}
              onKeyUp={(e) => handleKeyUp(e, "replyTo")}
              onChange={(e) => setReplyTo(e.target.value)}
              placeholder={
                mailsReplyTo.length === 1 ? "" : "Añadir contactos a responder"
              }
              readOnly={mailsReplyTo.length === 1}
              style={
                mailsReplyTo.length > 0
                  ? { display: "none" }
                  : { display: "block" }
              }
            />
          </ContainerInput>
          {!isCCActive && !isCCOActive && (
            <ButtonsCCAndCCO>
              <button type="button" onClick={() => setIsCCActive(true)}>
                CC
              </button>
              <button type="button" onClick={() => setIsCCOActive(true)}>
                CCO
              </button>
            </ButtonsCCAndCCO>
          )}
        </FormGroup>
        <FormGroup>
          <Label htmlFor="to">Para:</Label>
          <ContainerInput>
            {mails.map((mail) => (
              <span key={mail.id}>
                {mail.mail}{" "}
                <RiCloseLine onClick={() => handleDeleteMail(mail.id, "to")} />
              </span>
            ))}
            <input
              id="to"
              name="to"
              value={to}
              onBlur={() => onGetMail("to")}
              onKeyUp={(e) => handleKeyUp(e, "to")}
              onChange={(e) => setTo(e.target.value)}
              placeholder={
                mails && mails.length > 0 ? "" : "Añadir contactos a comunicar"
              }
            />
          </ContainerInput>
        </FormGroup>
        {isCCActive && (
          <>
            <FormGroup>
              <Label htmlFor="cc">CC:</Label>
              <ContainerInput>
                {mailsCC.map((mail) => (
                  <span key={mail.id}>
                    {mail.mail}{" "}
                    <RiCloseLine
                      onClick={() => handleDeleteMail(mail.id, "cc")}
                    />
                  </span>
                ))}
                <input
                  id="cc"
                  name="cc"
                  value={CC}
                  onBlur={() => onGetMail("cc")}
                  onKeyUp={(e) => handleKeyUp(e, "cc")}
                  onChange={(e) => setCC(e.target.value)}
                />
              </ContainerInput>
              {!isCCOActive && (
                <ButtonsCCAndCCO>
                  <button type="button" onClick={() => setIsCCOActive(true)}>
                    CCO
                  </button>
                </ButtonsCCAndCCO>
              )}
            </FormGroup>
          </>
        )}

        {isCCOActive && (
          <FormGroup>
            <Label htmlFor="cco">CCO:</Label>
            <ContainerInput>
              {mailsCCO.map((mail) => (
                <span key={mail.id}>
                  {mail.mail}{" "}
                  <RiCloseLine
                    onClick={() => handleDeleteMail(mail.id, "cco")}
                  />
                </span>
              ))}
              <input
                id="cco"
                name="cco"
                value={CCO}
                onBlur={() => onGetMail("cco")}
                onKeyUp={(e) => handleKeyUp(e, "cco")}
                onChange={(e) => setCCO(e.target.value)}
              />
            </ContainerInput>
            {!isCCActive && (
              <ButtonsCCAndCCO>
                <button type="button" onClick={() => setIsCCActive(true)}>
                  CC
                </button>
              </ButtonsCCAndCCO>
            )}
          </FormGroup>
        )}
        <FormGroup>
          <Label htmlFor="subject">
            <HideTextOnMobile>Asunto:</HideTextOnMobile>
          </Label>
          <ContainerInput>
            <input
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Agregar un asunto"
              style={{ maxWidth: "100%" }}
            />
          </ContainerInput>
        </FormGroup>
      </ContainerLabels>
      <CKEditorStyle
        editor={ClassicEditor}
        config={{
          fontSize: {
            options: ["tiny", "default", "big"],
          },
          toolbar: [
            "heading",
            "|",
            "bold",
            "italic",
            "link",
            "bulletedList",
            "numberedList",
            "blockQuote",
            "|",
          ],
        }}
        data={content}
        onChange={(event: any, editor: any) => onChangeContent(event, editor)}
      />
      <p style={{ fontSize: 10, marginTop: 5 }}>
        La información contenida en este e-mail y sus anexos es confidencial,
        privilegiada y está dirigida exclusivamente a su destinatario, en
        consecuencia, solo puede ser utilizada por aquel. Si usted no es el
        destinatario original, no deberá examinar, usar, copiar o distribuir
        este mensaje o la información que contiene. Si lo recibe por error, por
        favor reenvíelo a la persona que se lo envió y elimínelo. Cualquier
        retención o uso total o parcial no autorizada de este mensaje está
        estrictamente prohibida y sancionada por ley.
      </p>
      <FooterMail>
        <Buttons>
          <Button
            model="secondary-empty"
            size="small"
            onClick={() => onClose(false)}
            disabled={isLoadingSend}
          >
            Cancelar
          </Button>
          <Button
            model="primary"
            size="small"
            disabled={
              !(mails.length > 0) ||
              !(mailsReplyTo.length > 0) ||
              !subject.trim() ||
              !content.trim() ||
              isLoadingSend
            }
            onClick={handleSendMail}
          >
            {isLoadingSend ? "Enviando..." : "Enviar correo"}
          </Button>
        </Buttons>
      </FooterMail>
    </Container>
  );
};
