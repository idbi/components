import { theme } from "@/theme";
import styled from "styled-components";

export const Wrapper = styled.div<{
  fullWidth?: boolean;
}>`
  position: relative;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  ::selection {
    color: #fff;
    background: #4285f4;
  }
  .select-btn,
  li {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .select-btn {
    padding: 0 20px;
    width: 100%;
    padding: 10px 12px;
    min-height: 45px;
    background: #fff;
    border: 1px solid ${() => theme.color.NEUTRAL[300]};
    border-radius: 0.5rem;
    justify-content: space-between;
  }

  .wrapper.active .select-btn i {
    transform: rotate(-180deg);
  }

  .content .options {
    margin-top: 10px;
    max-height: 250px;
    overflow-y: auto;
    padding-right: 7px;
  }

  li.selected {
    border-radius: 0.5rem;
    background-color: ${() => theme.color.QUATERNARY[200]};
  }

  .options li:hover {
    border-radius: 0.5rem;
    background-color: ${() => theme.color.QUATERNARY[100]};
  }
`;

export const OptionsManager = styled.ul<{
  maxOptionsHeight?: number;
  fullWidthOptions?: boolean;
}>`
  width: ${({ fullWidthOptions }) => (fullWidthOptions ? "100%" : "15rem")};
  max-height: ${({ maxOptionsHeight }) =>
    maxOptionsHeight ? `${maxOptionsHeight}px` : "auto"};
  display: flex;
  flex-direction: column;
  background-color: #fff;
  gap: 0.5rem;
  position: absolute;
  z-index: 1;
  border-radius: 0.5rem;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
  padding: 0;
  padding: 0.438rem 0.313rem;
  .options {
    margin: 0;
    padding: 2px 0;
    overflow-y: auto;
    li {
      padding: 0.875rem 0.5rem;
      margin: 0.5rem 0.313rem;
      &:focus {
        border-radius: 0.5rem;
        outline: 2px solid ${() => theme.color.SECONDARY[900]};
      }
    }
  }
`;
