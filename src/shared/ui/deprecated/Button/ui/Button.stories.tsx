import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react/';

import { Button, ButtonSize, ButtonTheme } from './Button';

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
  theme: ButtonTheme.CLEAR
};

export const ClearInverted = Template.bind({});
ClearInverted.args = {
  children: 'Текст',
  theme: ButtonTheme.CLEAR_INVERTED
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Текст',
  theme: ButtonTheme.OUTLINE
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
  children: 'Текст',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.L
};

export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
  children: 'Текст',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.XL
};

export const Background = Template.bind({});
Background.args = {
  children: 'Текст',
  theme: ButtonTheme.BACKGROUND
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
  children: 'Текст',
  theme: ButtonTheme.BACKGROUND_INVERTED
};

export const Square = Template.bind({});
Square.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.L
};

export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.XL
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: '>',
  theme: ButtonTheme.OUTLINE,
  disabled: true
};