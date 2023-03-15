import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react/';
import { <FTName | pascalcase> } from './[FTName % pascalcase]';

export default {
  title: '[type]/[FTName % pascalcase]',
  component: <FTName | pascalcase>,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof <FTName | pascalcase>>;

const Template: ComponentStory<typeof <FTName | pascalcase>> = (args) => <<FTName | pascalcase> {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [];
