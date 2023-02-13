import { ComponentStory, ComponentMeta } from '@storybook/react';
import AtIconButton, { IAtIconButton } from './AtIconButton';
import { mockAtIconButtonProps } from './AtIconButton.mocks';

export default {
    title: 'atoms/AtIconButton',
    component: AtIconButton,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof AtIconButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AtIconButton> = (args) => (
    <AtIconButton {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
    ...mockAtIconButtonProps.base,
} as IAtIconButton;