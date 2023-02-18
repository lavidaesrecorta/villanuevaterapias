import { ComponentStory, ComponentMeta } from "@storybook/react";
import StepsBlock, { IStepsBlock } from "./StepsBlock";
import { mockStepsBlockProps } from "./StepsBlock.mocks";

export default {
  title: "blocks/StepsBlock",
  component: StepsBlock,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof StepsBlock>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof StepsBlock> = (args) => (
  <StepsBlock {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockStepsBlockProps.base,
} as IStepsBlock;
