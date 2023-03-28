import { Button } from "@/components/Button/index";
import { IOrderCard } from "../types";
import { IdiUser } from "@/icons/IdiUser";

const base: IOrderCard = {
  title: "Mesa 01 - terraza 1",
  spot: "Principal",
  status: "accepted",
  numClients: 1,
  total: { symbol: "S/", amount: "10.103" },
  isCourtesy: false,
  time: "Hace 3 meses",
  seller: "team experiencia ID",
  hideNumClients: false,
  onClick: () => alert("click"),
  noHover: false,
};

const withChildren: IOrderCard = {
  title: "Mesa 02 - terraza 1",
  spot: "Principal",
  status: "accepted",
  numClients: 1,
  total: { symbol: "S/", amount: "10.103" },
  isCourtesy: false,
  time: "Hace 3 meses",
  seller: "team experiencia ID",
  hideNumClients: false,
  onClick: () => alert("click"),
  noHover: false,
  children: (
    <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
      <Button size="xs" design="outline">
        Rechazar
      </Button>
      <Button size="xs">Aceptar</Button>
      <Button
        size="xs"
        style={{
          position: "absolute",
          top: "5px",
          right: "5px",
          padding: "7px",
          minHeight: "auto",
        }}
      >
        <IdiUser size={14} color="#fff" />
      </Button>
    </div>
  ),
};

export const mockOrderCardProps = {
  base,
  withChildren,
};
