import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react/';
import { DetailsContainer } from './DetailsContainer';

export default {
  title: 'pages/DetailsContainer',
  component: DetailsContainer,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof DetailsContainer>;

const Template: ComponentStory<typeof DetailsContainer> = (args) => (
  <DetailsContainer {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [];
