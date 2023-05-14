import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react/';

import { Button } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Текст'
};

export const Clear = Template.bind({});
Clear.args = {
  children: 'Текст',
  variant: 'clear'
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Текст',
  variant: 'outline'
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
  children: 'Текст',
  variant: 'outline',
  size: 'l'
};

export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
  children: 'Текст',
  variant: 'outline',
  size: 'xl'
};

export const Square = Template.bind({});
Square.args = {
  children: '>',
  variant: 'outline',
  square: true
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
  children: '>',
  variant: 'outline',
  square: true,
  size: 'l'
};

export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
  children: '>',
  variant: 'outline',
  square: true,
  size: 'xl'
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: '>',
  variant: 'outline',
  disabled: true
};
