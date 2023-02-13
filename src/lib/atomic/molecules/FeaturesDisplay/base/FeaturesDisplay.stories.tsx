import { ComponentStory, ComponentMeta } from "@storybook/react";
import FeaturesDisplay, { IFeaturesBase } from "./FeaturesDisplay";
import { mockFeaturesDisplayProps } from "./FeauresDisplay.mocks";

export default {
  title: "molecules/FeaturesDisplay",
  component: FeaturesDisplay,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof FeaturesDisplay>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FeaturesDisplay> = (args) => (
  <FeaturesDisplay {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockFeaturesDisplayProps.base,
} as IFeaturesBase;

export const Cards = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Cards.args = {
  ...mockFeaturesDisplayProps.cards,
} as IFeaturesBase;


export const DataGraphs = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

DataGraphs.args = {
  ...mockFeaturesDisplayProps.dataGraphs,
} as IFeaturesBase;
