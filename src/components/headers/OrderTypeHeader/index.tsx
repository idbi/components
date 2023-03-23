import React from "react";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { BiBed, BiWalk } from "react-icons/bi";

import { IdiShopTable } from "@/icons/IdiShopTable";
import type { IOrderTypeHeader } from "./types";
import * as s from "./styles";

const orderTypes = {
  delivery: {
    icon: <MdOutlineDeliveryDining />,
    name: "Envío",
  },
  "pick-up": {
    icon: <BiWalk />,
    name: "Recojo",
  },
  "on-room": {
    icon: <BiBed />,
    name: "Habitación",
  },
  "on-table": {
    icon: <IdiShopTable />,
    name: "Mesa",
  },
};

export const OrderTypeHeader: React.FC<IOrderTypeHeader> = ({
  types,
  onClick,
  activeTypeUuid,
}) => {
  if (!Array.isArray(types) || types.length < 1) return null;
  return (
    <s.Container>
      {types.map((type) => (
        <s.BtnType
          isActive={type.uuid === activeTypeUuid}
          key={type.uuid}
          onClick={() => onClick && onClick(type.uuid)}
        >
          {orderTypes[type.slug].icon}
          <p>{orderTypes[type.slug].name}</p>
        </s.BtnType>
      ))}
    </s.Container>
  );
};
