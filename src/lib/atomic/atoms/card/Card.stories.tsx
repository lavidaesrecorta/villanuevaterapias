import { ComponentStory, ComponentMeta } from "@storybook/react";
import AtCard, { IAtCard } from "./Card";
import { mockAtCardProps } from "./Card.mocks";

export default {
  title: "atoms/card",
  component: AtCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof AtCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AtCard> = (args) => <AtCard {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockAtCardProps.base,
} as IAtCard;
