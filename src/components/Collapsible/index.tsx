import CheckboxIcon from "@/icons/CheckboxIcon";
import { Text } from "../Typography";
import {
  CollapsibleContentSC,
  CollapsibleSC,
  CollapsibleTriggerSC,
} from "./styles";
import { ICollapsible } from "./types";

export const Collapsible: React.FC<ICollapsible> = ({
  open,
  setOpen,
  label,
  content,
}) => {
  return (
    <CollapsibleSC open={open} onOpenChange={setOpen}>
      <CollapsibleTriggerSC>
        <Text>{label}</Text>
        <CheckboxIcon ischecked={open || false} />
      </CollapsibleTriggerSC>
      <CollapsibleContentSC>{content}</CollapsibleContentSC>
    </CollapsibleSC>
  );
};
