import CheckboxIcon from "@/icons/CheckboxIcon";
import { Text } from "../Typography";
import {
  CollapsibleContentSC,
  CollapsibleSC,
  CollapsibleTriggerSC,
} from "./styles";
import { ICollapsibleProps } from "./types";

export const Collapsible: React.FC<ICollapsibleProps> = ({
  open,
  setOpen,
  label,
  content,
}) => {
  return (
    <CollapsibleSC open={open} onOpenChange={setOpen}>
      <CollapsibleTriggerSC>
        <Text>{label}</Text>
        <CheckboxIcon ischecked={open} />
      </CollapsibleTriggerSC>
      <CollapsibleContentSC>{content}</CollapsibleContentSC>
    </CollapsibleSC>
  );
};
