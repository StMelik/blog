import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react/';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';

export default {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  args: {
    to: '/',
    children: 'Test'
  }
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  theme: AppLinkTheme.PRIMARY
};

export const Inverted = Template.bind({});
Inverted.args = {
  theme: AppLinkTheme.INVERTED
};

export const Blue = Template.bind({});
Blue.args = {
  theme: AppLinkTheme.BLUE
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  theme: AppLinkTheme.PRIMARY
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const InvertedDark = Template.bind({});
InvertedDark.args = {
  theme: AppLinkTheme.INVERTED
};
InvertedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BlueDark = Template.bind({});
BlueDark.args = {
  theme: AppLinkTheme.BLUE
};
BlueDark.decorators = [ThemeDecorator(Theme.DARK)];
