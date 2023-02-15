import { IBaseInput } from "@/components/forms/BaseInput/types";
export type IAddressInput = Omit<IBaseInput, "onChange" | "value">;
