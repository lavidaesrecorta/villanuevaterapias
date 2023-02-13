import { ComponentStory, ComponentMeta } from "@storybook/react";
import EmphasisBlock, { IEmphasisBlock } from "./EmphasisBlock";
import { mockEmphasisBlockProps } from "./EmphasisBlock.mocks";

export default {
  title: "blocks/EmphasisBlock",
  component: EmphasisBlock,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof EmphasisBlock>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof EmphasisBlock> = (args) => (
  <EmphasisBlock {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockEmphasisBlockProps.base,
} as IEmphasisBlock;
