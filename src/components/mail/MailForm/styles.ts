import styled from "styled-components";
import { CKEditor } from "@ckeditor/ckeditor5-react";

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 900px;
  background: #fff;
  padding: 24px;
  border-radius: 15px;
  overflow: auto;

  @media (max-width: 768px) {
    padding-bottom: 100px;
    border-radius: 0;
    max-height: 100vh;
  }

  > h1 {
    font: bold 16px Poppins;
    color: ${({ theme }) => theme.color.PRIMARY[900]};
    margin-bottom: 10px;
  }

  span {
    font-size: 10px;
    color: ${({ theme }) => theme.color.NEUTRAL[600]};
  }

  font-size: initial;
  &.ck-editor {
    min-height: 207px !important;
  }

  & .ck-content {
    min-height: 207px !important;
  }
`;

export const CloseSendMail = styled.div`
  position: absolute;
  top: 18px;
  right: 23px;
`;

export const ContainerLabels = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;

  > label {
    font: normal 14px Poppins;
  }
  @media (min-width: 768px) {
    > label {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;

export const Label = styled.label`
  width: 100%;
  max-width: 150px;
`;
export const FormGroup = styled.div`
  position: relative;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

export const ContainerInput = styled.div`
  margin-top: 4px;
  min-height: 40px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.color.NEUTRAL[300]};
  display: flex;
  align-items: center;
  position: relative;
  padding: 7.5px 12px;
  flex-grow: 1;
  gap: 5px;
  flex-wrap: wrap;
  overflow: auto;

  @media (min-width: 768px) {
    margin-top: 0;
  }

  > input {
    width: 100%;
    max-width: 335px;
    min-height: 36px;
    display: inline;
    border: none;
    background: transparent;
    outline: none;
    font: normal 14px Poppins;
    transition: 0.3s;
    &::placeholder {
      font: normal 14px Poppins;
      color: ${({ theme }) => theme.color.NEUTRAL[500]};
    }
  }

  @media (max-width: 768px) {
    input {
      padding-right: 40px;
    }
    input:not(:focus) {
      min-height: 13px;
      height: 13px;
    }
  }

  > span {
    display: flex;
    background: ${({ theme }) => theme.color.NEUTRAL[50]};
    border-radius: 10px;
    padding: 6px 16px;
    white-space: nowrap;
    color: ${({ theme }) => theme.color.NEUTRAL[900]};
    > svg {
      margin-left: 5px;
      cursor: pointer;
    }
  }
`;

export const ButtonsCCAndCCO = styled.div`
  position: absolute;
  bottom: 1px;
  right: 1px;
  padding: 5px;
  background: ${({ theme }) => theme.color.light};
  border-radius: 0 0 10px 0;
  @media (min-width: 768px) {
    padding: 0;
    top: 14px;
    right: 5px;
  }

  button {
    background: transparent;
    font: normal 14px Poppins;
    border: none;
    cursor: pointer;
    transition: all 0.2s;
    color: ${({ theme }) => theme.color.NEUTRAL[500]};
    &:hover {
      opacity: 1;
    }
  }
`;

export const HideTextOnMobile = styled.span`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const CKEditorStyle = styled(CKEditor)``;

export const FooterMail = styled.footer`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;

  margin-top: 20px;

  > div:last-child {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

export const Buttons = styled.div`
  @media (max-width: 768px) {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    padding: 14px 19.5px;
    background: ${({ theme }) => theme.color.light};
    box-shadow: 0px -2px 6px rgba(196, 196, 196, 0.14);
    button:nth-child(1) {
      width: 40%;
    }
    button:nth-child(2) {
      width: 60%;
    }
  }
`;

export const MailSentContainer = styled.div`
  width: 100%;
  margin-bottom: 24px;

  span {
    display: inline-block;
    font-size: 0.8em;
  }
`;
