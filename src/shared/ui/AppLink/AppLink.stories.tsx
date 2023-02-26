import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react/';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';

export default {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  args: {
    to: '/'
  }
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Test',
  theme: AppLinkTheme.PRIMARY
};

export const Inverted = Template.bind({});
Inverted.args = {
  children: 'Test',
  theme: AppLinkTheme.INVERTED
};

export const Blue = Template.bind({});
Blue.args = {
  children: 'Test',
  theme: AppLinkTheme.BLUE
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: 'Test',
  theme: AppLinkTheme.PRIMARY
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const InvertedDark = Template.bind({});
InvertedDark.args = {
  children: 'Test',
  theme: AppLinkTheme.INVERTED
};
InvertedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BlueDark = Template.bind({});
BlueDark.args = {
  children: 'Test',
  theme: AppLinkTheme.BLUE
};
BlueDark.decorators = [ThemeDecorator(Theme.DARK)];
