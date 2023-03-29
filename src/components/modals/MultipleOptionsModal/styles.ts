import styled, { css } from "styled-components";

export const Container = styled.div`
  @media (max-width: 600px) {
    padding-bottom: 15px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Header = styled.div`
  padding: 0 20px;
  & > :nth-child(2) {
    margin-top: 5px;
  }

  svg,
  img {
    cursor: pointer;
  }
`;

export const OptionsContainer = styled.ul<{
  direction?: "row" | "column";
}>`
  color: ${({ theme }) => theme.color.NEUTRAL[700]};
  padding: 0;
  margin: 10px 0;
  list-style-type: none;
  font-size: 14px;
  ${({ direction }) =>
    direction === "column" &&
    css`
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
    `}
`;

export const Option = styled.li<{
  disabled?: boolean;
  alert?: boolean;
  optionsInCenter?: boolean;
  iconOrientation?: "vertical" | "horizontal";
}>`
  background-color: ${({ theme, alert }) =>
    alert ? theme.color.ALERT[100] : "white"};
  color: ${({ theme, alert }) => (alert ? theme.color.ALERT[900] : "inherit")};
  min-height: 50px;
  padding: 0 20px;
  display: flex;
  flex-direction: ${({ iconOrientation }) =>
    iconOrientation === "vertical" ? "column-reverse" : "row"};
  justify-content: ${({ optionsInCenter }) =>
    optionsInCenter ? "center" : "space-between"};
  align-items: center;
  gap: ${({ optionsInCenter }) => (optionsInCenter ? "10px" : "5px")};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  & > svg,
  & > img {
    flex-shrink: 0;
  }
  & > img {
    width: 18px;
    height: 18px;
    object-fit: contain;
  }
  & > svg {
    font-size: 20px;
  }
`;
