import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react/';
import { FiltersContainer } from './FiltersContainer';

export default {
  title: 'pages/FiltersContainer',
  component: FiltersContainer,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof FiltersContainer>;

const Template: ComponentStory<typeof FiltersContainer> = (args) => (
  <FiltersContainer {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [];