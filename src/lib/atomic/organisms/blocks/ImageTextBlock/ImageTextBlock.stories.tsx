import { ComponentStory, ComponentMeta } from "@storybook/react";
import ImageTextBlock, { IImageTextBlock } from "./ImageTextBlock";
import { mockImageTextBlockProps } from "./ImageTextBlock.mocks";

export default {
  title: "blocks/ImageTextBlock",
  component: ImageTextBlock,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ImageTextBlock>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ImageTextBlock> = (args) => (
  <ImageTextBlock {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockImageTextBlockProps.base,
} as IImageTextBlock;
