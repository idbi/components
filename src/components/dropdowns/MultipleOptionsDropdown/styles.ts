import styled, { css } from "styled-components";

export const Menu = styled.ul`
  color: ${({ theme }) => theme.color.OTHER.color1};
  background-color: white;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid ${({ theme }) => theme.color.QUATERNARY[300]};
  border-radius: 10px;
  width: 300px;
  margin: 5px 0;
  padding: 0;
  z-index: 99;
  font: 400 14px Poppins;
  list-style-type: none;

  & > li:last-child {
    border-radius: 0 0 10px 10px;
  }

  & > li:first-child {
    border-radius: 10px 10px 0 0;
  }
`;

export const Header = styled.div`
  padding: 5px 10px 5px 15px;
  min-height: 55px;
  display: flex;
  align-items: center;
  font-weight: 700;
  position: relative;

  ::after {
    content: "";
    border-top: 1px solid ${({ theme }) => theme.color.QUATERNARY[300]};
    width: calc(100% - 12px);
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%);
  }
`;

export const Option = styled.li<{
  disabled?: boolean;
  active?: boolean;
  alert?: boolean;
  loading?: boolean;
}>`
  background-color: ${({ active }) => (active ? "#ebedff" : "white")};
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px 5px 15px;
  gap: 7px;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  position: relative;
  @media (hover: hover) {
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  }

  &:hover {
    background-color: #ebedff;
  }

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

  ${({ alert }) => {
    if (alert)
      return css`
        background-color: ${({ theme }) => theme.color.ALERT[100]};
        color: ${({ theme }) => theme.color.ALERT[900]};
        &:hover {
          background-color: ${({ theme }) => theme.color.ALERT[200]};
        }
      `;
  }}
`;

export const SubMenuContainer = styled.div`
  position: absolute;
  top: 0;
  right: calc(100% + 8px);
`;
