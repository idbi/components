import { IBaseInput } from "@/components/forms/BaseInput/types";

export interface ISearch {
  inputProps?: IBaseInput;
  onError?: (errMessage?: string, nameSearch?: string) => void;
}
