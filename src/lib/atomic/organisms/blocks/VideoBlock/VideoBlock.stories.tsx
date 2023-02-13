import { ComponentStory, ComponentMeta } from "@storybook/react";
import VideoBlock, { IVideoBlock } from "./VideoBlock";
import { mockVideoBlockProps } from "./VideoBlock.mocks";

export default {
  title: "blocks/VideoBlock",
  component: VideoBlock,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof VideoBlock>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof VideoBlock> = (args) => (
  <VideoBlock {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockVideoBlockProps.base,
} as IVideoBlock;
