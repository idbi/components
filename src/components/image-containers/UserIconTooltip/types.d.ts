import { ITextTooltipContainer } from "../../tooltip-containers/TextTooltipContainer/types";
import { IImgData } from "../../../types/globalTypes";

export interface IUserIconTooltip {
  name: string;
  lastname?: string;
  img?: IImgData;
  size?: number;
  tooltipProps?: Pick<ITextTooltipContainer, "offset" | "middlewares" | "placement" | "tooltipStyles">;
}
