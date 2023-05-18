import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react/';
import { AdditionalInfoContainer } from './AdditionalInfoContainer';

export default {
  title: 'pages/AdditionalInfoContainer',
  component: AdditionalInfoContainer,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof AdditionalInfoContainer>;

const Template: ComponentStory<typeof AdditionalInfoContainer> = (args) => (
  <AdditionalInfoContainer {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [];
