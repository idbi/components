import styled from "styled-components";

interface IContainer {
  background?: string;
  padding?: string;
}

export const Container = styled.div<IContainer>`
  padding: ${({padding}) => padding ? padding : "20px"};;
  border-radius: 10px;
  background: ${({background}) => background ? background : "#fff"};
  box-shadow: ${({background}) => background === "transparent" ? "none" : "0px 10px 30px rgba(0, 0, 0, 0.08)"};
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.25rem;
  letter-spacing: -0.04em;
  color: #383838;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`

export const Title = styled.p`
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: -0.04em;
  color: #181B20;
`

export const Action = styled.div`
  outline: none;
  border: none;
  background: none;
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 1.125rem;
  letter-spacing: -0.04em;
  color: #4318FF;
  cursor: pointer;
`

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

interface Remark {
  remark: boolean;
}

export const Item = styled.li<Remark>`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
  color: ${({remark}) => remark ? "#6192EB": ""};
`

export const ItemInfo = styled.div`
  display: flex;
  gap: 15px;
  align-items: flex-start;
`

export const Quantity = styled.span`
  line-height: 1.25rem;
  padding: 1px 9px;
  background: #DFDFDF;
  border-radius: 4px;
  font-size: 0.75rem;
  color: #383838;
`

export const Amount = styled.span<Remark>`
  font-weight: 500;
  font-size: 0.75rem;
  color: ${({remark}) => remark ? "#6192EB": "#151E5A"};
`

export const Notes = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.125rem;
  color: #383838;
`

export const Img = styled.img`
  width: 56px;
  height: 56px;
  border: 1px solid #BFBFBF;
  background: #BFBFBF;
  border-radius: 8px;
  font-size: 9px;
  object-fit: cover;
`