import { OrderStatusBadge } from "@/components/badges/OrderStatusBadge";
import { UserProfileIcon } from "@/components/image-containers/UserProfileIcon";
import { IGridTable } from "../types";

const base: IGridTable = {
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  maxWidth: "1000px",
  minWidth: "800px",
  header: (
    <>
      <span className="th item-center">Column 1</span>
      <span className="th item-center">Column 2</span>
      <span className="th item-center">Column 3</span>
      <span className="th item-center">Column 4</span>
    </>
  ),
  body: (
    <>
      <div className="tr">
        <span className="td item-center separator">data 1</span>
        <span className="td item-center">data 2</span>
        <span className="td item-center">data 3</span>
        <span className="td item-center">data 4</span>
      </div>
      <div className="tr">
        <span className="td item-center separator">data 1</span>
        <span className="td item-center">data 2</span>
        <span className="td item-center">data 3</span>
        <span className="td item-center">data 4</span>
      </div>
    </>
  ),
};

const variant1: IGridTable = {
  gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
  maxWidth: "1000px",
  header: (
    <>
      <div className="th item-center">Column 1</div>
      <div className="th item-center">Column 2</div>
      <div className="th item-center">Column 3</div>
      <div className="th item-center">Column 4</div>
      <div className="th item-center">Column 5</div>
    </>
  ),
  body: (
    <>
      <div
        className="td item-center"
        style={{
          gridColumn: "1/2",
        }}
      >
        Data 1
      </div>
      <div
        className="tr"
        style={{
          gridColumn: "2/6",
          gridTemplateColumns: "1fr 1fr 1fr 1fr"
        }}
      >
        <div className="td item-center separator">data 2</div>
        <div className="td item-center separator">data 3</div>
        <div className="td item-center separator">data 4</div>
        <div className="td item-center ">data 5</div>
      </div>
    </>
  ),
};

const variant2: IGridTable = {
  gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
  maxWidth: "1000px",
  minWidth: "800px",
  header: (
    <>
      <div />
      <div className="th item-center">Column 1</div>
      <div className="th item-center">Column 2</div>
      <div className="th item-center">Column 3</div>
      <div className="th item-center">Column 4</div>
    </>
  ),
  body: (
    <>
      <div
        className="td item-center item-flex"
        style={{
          gridColumn: "1/2",
        }}
      >
        <span>14:00</span>
        <UserProfileIcon initials="FC" size={28} img={{ src: "" }} />
      </div>
      <div
        className="tr"
        style={{
          gridColumn: "2/6",
          gridTemplateColumns: "1fr 1fr 1fr 1fr"
        }}
      >
        <div className="td item-center">data 1</div>
        <div className="td item-center">data 2</div>
        <div className="td item-center">
          <OrderStatusBadge text="estado" statusName="accepted"/>
        </div>
        <div className="td item-center">data 4</div>
      </div>
    </>
  ),
};

export const mockGridTableProps = {
  base,
  variant1,
  variant2,
};
