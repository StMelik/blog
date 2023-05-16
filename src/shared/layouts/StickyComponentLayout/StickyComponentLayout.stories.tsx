import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react/';
import { StickyComponentLayout } from './StickyComponentLayout';

export default {
  title: 'shared/StickyComponentLayout',
  component: StickyComponentLayout,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof StickyComponentLayout>;

const Template: ComponentStory<typeof StickyComponentLayout> = (args) => (
  <StickyComponentLayout {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [];
