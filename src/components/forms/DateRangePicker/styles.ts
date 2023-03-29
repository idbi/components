import styled from "styled-components";

export const Container = styled.div`
  background: none;
  position: relative !important;

  .rdrDefinedRangesWrapper {
    width: 100%;
  }

  .rdrInputRanges {
    display: none;
  }

  .rdrDateRangePickerWrapper {
    border-radius: 10px;
  }

  @media (max-width: 500px) {
    width: 100%;

    .rdrCalendarWrapper,
    .rdrDateRangeWrapper,
    .rdrDateDisplayWrapper {
      width: 100% !important;
    }

    .rdrMonthAndYearWrapper {
      width: 100% !important;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
    }

    .rdrDateDisplay {
      display: flex;
      flex-direction: column;

      span {
        width: 100%;
        max-width: 327px !important;

        & + span {
          margin-left: 0px;
          margin-top: 14px;
        }
        input {
          width: 100% !important;
        }
      }
    }

    .rdrDefinedRangesWrapper {
      display: none;
    }
  }

  label {
    position: relative;
    width: fit-content;
    font: 500 14px "Poppins" !important;
    display: flex;
    margin-left: 2px;
    margin-bottom: 7px;

    align-items: center;

    p {
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        cursor: pointer;
        margin-left: 13px;
        color: #151e5a;
        position: relative;
        right: unset;
        top: unset;
        fill: none;
      }

      small {
        opacity: 0.8;
        display: none;
        visibility: hidden;

        position: absolute;
        font: normal 9px Poppins;
        background: #151e5a;
        width: 200px;
        color: #f5f5f5;
        padding: 5px 10px;
        border-radius: 5px;

        top: 0;
        left: 105%;

        z-index: 5;
      }
    }

    p:hover {
      small {
        display: block;
        visibility: visible;
      }
    }
  }
`;

export const FooterDatePicker = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: -10px;
`;

export const ContainerDatePicker = styled.div<{
  hasOptions?: boolean;
  isMobile?: boolean;
}>`
  position: absolute;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  top: calc(100% + 5px);
  left: ${({ hasOptions, isMobile }) => {
    if (!hasOptions || isMobile) return "0";
    return "210px";
  }};

  z-index: 5;
  padding: 12px;
  transition: all 0.2s ease-in-out;

  @media (max-width: 600px) {
    padding: 12px;
  }
  @media (max-width: 450px) {
    left: 50%;
    transform: translateX(-50%);
  }
`;

interface ContainerDateProps {
  branchesDashboard?: boolean;
  withNewFormat?: boolean;
  hasOptions?: boolean;
  isMobile?: boolean;
}

export const ContainerDate = styled.div<ContainerDateProps>`
  width: 100%;
  min-height: 45px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: #fff;
  border: 1px solid ${({ theme }) => theme.color.NEUTRAL[300]};
  outline: none;
  color: ${({ theme }) => theme.color.PRIMARY[900]};
  cursor: pointer;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 18px;
  letter-spacing: -0.04em;

  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
`;

export const TimeInputsContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-grow: 1;
  color: ${({ theme }) => theme.color.NEUTRAL[900]};

  input {
    font-size: 14px;
  }

  label {
    font-weight: normal !important;
    font-size: 12px !important;
    margin-bottom: 0;
  }
`;
