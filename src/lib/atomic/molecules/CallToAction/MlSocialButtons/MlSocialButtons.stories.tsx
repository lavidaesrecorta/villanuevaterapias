import { ComponentStory, ComponentMeta } from "@storybook/react";
import MlSocialButtons, { IMlSocialButtons } from "./MlSocialButtons";
import { mockMlSocialButtonsProps } from "./MlSocialButtons.mocks";

export default {
  title: "templates/MlSocialButtons",
  component: MlSocialButtons,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof MlSocialButtons>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MlSocialButtons> = (args) => (
  <MlSocialButtons {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockMlSocialButtonsProps.base,
} as IMlSocialButtons;
