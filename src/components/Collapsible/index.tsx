import CheckboxIcon from "@/icons/CheckboxIcon";
import { CollapsibleContent } from "@radix-ui/react-collapsible";
import { Text } from "../Typography";
import { CollapsibleSC, CollapsibleTriggerSC } from "./styles";
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
        <CheckboxIcon isChecked={open} />
      </CollapsibleTriggerSC>
      <CollapsibleContent>{content}</CollapsibleContent>
    </CollapsibleSC>
  );
};
