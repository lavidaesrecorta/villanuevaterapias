import { ComponentStory, ComponentMeta } from "@storybook/react";
import CallToAction, { ICallToAction } from "./CallToAction";
import { mockCallToActionProps } from "./CallToAction.mocks";

export default {
  title: "templates/CallToAction",
  component: CallToAction,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof CallToAction>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CallToAction> = (args) => (
  <CallToAction {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockCallToActionProps.base,
} as ICallToAction;
