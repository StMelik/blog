import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator';
import { ComponentMeta, ComponentStory } from '@storybook/react/';
import { Code } from './Code';

const content = `
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react/';
import { Code } from './Code';

export default {
  title: 'shared/Code',
  component: Code,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Code>;
`;

export default {
  title: 'shared/Code',
  component: Code,
  args: {
    text: content
  }
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Primary = Template.bind({});

export const PrimaryRedesigned = Template.bind({});
PrimaryRedesigned.decorators = [
  FeatureFlagsDecorator({ isAppRedesigned: true })
];
