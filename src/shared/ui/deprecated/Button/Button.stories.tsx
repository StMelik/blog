import { ComponentMeta, ComponentStory } from '@storybook/react/';
import { Button, ButtonSize, ButtonTheme } from './Button';

export default {
  title: 'shared/deprecated/Button',
  component: Button,
  args: {
    children: 'Текст'
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

export const Clear = Template.bind({});
Clear.args = {
  theme: ButtonTheme.CLEAR
};

export const ClearInverted = Template.bind({});
ClearInverted.args = {
  theme: ButtonTheme.CLEAR_INVERTED
};

export const Outline = Template.bind({});
Outline.args = {
  theme: ButtonTheme.OUTLINE
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.L
};

export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.XL
};

export const Background = Template.bind({});
Background.args = {
  theme: ButtonTheme.BACKGROUND
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
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
