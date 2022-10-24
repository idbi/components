import React from "react";
import {
  Action,
  Amount,
  Container,
  Header,
  Img,
  Item,
  ItemInfo,
  List,
  Notes,
  Quantity,
  Title,
} from "./styles";
import { ITotalsCard } from "./types";

export const TotalsCard: React.FC<ITotalsCard> = ({
  items,
  title = "",
  onAction = () => {},
  actionName = "",
  hideQuantity = false,
  children,
  gap = 10,
  background,
  padding,
}) => {
  return (
    <Container background={background} padding={padding}>
      {(title || actionName) && (
        <Header>
          <Title>{title}</Title>
          <Action onClick={() => onAction()}>{actionName}</Action>
        </Header>
      )}
      <List style={{ gap }}>
        {items.map((item) => (
          <Item remark={Boolean(item.remark)} key={crypto.randomUUID()}>
            {!hideQuantity ? (
              <ItemInfo>
                {item.img && <Img src={item.img} alt={item.description} />}
                <Quantity>{item.quantity}</Quantity>
                <div>
                  <span>{item.description}</span>
                  {item.notes && (
                    <Notes>
                      {item.notes.map((note) => (
                        <li key={crypto.randomUUID()}>{note}</li>
                      ))}
                    </Notes>
                  )}
                </div>
                {item?.decorators}
              </ItemInfo>
            ) : (
              <ItemInfo>
                <div>
                  <span>{item.description}</span>
                  {item.notes && (
                    <Notes>
                      {item.notes.map((note) => (
                        <li key={crypto.randomUUID()}>{note}</li>
                      ))}
                    </Notes>
                  )}
                </div>
                {item?.decorators}
              </ItemInfo>
            )}
            <Amount remark={Boolean(item.remark)}>
              {item.currency} {item.amount.toFixed(2)}
            </Amount>
          </Item>
        ))}
      </List>
      {children}
    </Container>
  );
};
