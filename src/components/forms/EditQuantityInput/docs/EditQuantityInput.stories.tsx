import { ComponentStory, ComponentMeta } from "@storybook/react";
import { EditQuantityInput } from "./Container";
import { IEditQuantityInputContainer } from "./Container";
import { mockConfirmationCardV2Props } from "./EditQuantityInput.mock";

export default {
  title: "forms/EditQuantityInput",
  component: EditQuantityInput,
  argTypes: {},
} as ComponentMeta<typeof EditQuantityInput>;

const Template: ComponentStory<typeof EditQuantityInput> = (args) => <EditQuantityInput {...args} />;

export const Base = Template.bind({});
Base.args = {
  ...mockConfirmationCardV2Props.base,
} as IEditQuantityInputContainer;

export const OnlyIntegers = Template.bind({});
OnlyIntegers.args = {
  ...mockConfirmationCardV2Props.onlyIntegers,
} as IEditQuantityInputContainer;

export const Disabled = Template.bind({});
Disabled.args = {
  ...mockConfirmationCardV2Props.disabled,
} as IEditQuantityInputContainer;

export const WithUnit = Template.bind({});
WithUnit.args = {
  ...mockConfirmationCardV2Props.withUnit,
} as IEditQuantityInputContainer;

export const NoModal = Template.bind({});
NoModal.args = {
  ...mockConfirmationCardV2Props.noModal,
} as IEditQuantityInputContainer;

export const WithDelete = Template.bind({});
WithDelete.args = {
  ...mockConfirmationCardV2Props.withDelete,
} as IEditQuantityInputContainer;

export const WithError = Template.bind({});
WithError.args = {
  ...mockConfirmationCardV2Props.withError,
} as IEditQuantityInputContainer;

export const NoDecrement = Template.bind({});
NoDecrement.args = {
  ...mockConfirmationCardV2Props.noDecrement,
} as IEditQuantityInputContainer;

export const CardVariant = Template.bind({});
CardVariant.args = {
  ...mockConfirmationCardV2Props.cardVariant,
} as IEditQuantityInputContainer;
