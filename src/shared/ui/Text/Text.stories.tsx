import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react/';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Заголовок текста',
  text: 'Текст Текст Текст Текст'
};

export const Error = Template.bind({});
Error.args = {
  title: 'Заголовок текста',
  text: 'Текст Текст Текст Текст',
  theme: TextTheme.ERROR
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: 'Заголовок текста'
};

export const OnlyText = Template.bind({});
OnlyText.args = {
  text: 'Текст Текст Текст Текст'
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: 'Заголовок текста',
  text: 'Текст Текст Текст Текст'
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ErrorDark = Template.bind({});
ErrorDark.args = {
  title: 'Заголовок текста',
  text: 'Текст Текст Текст Текст',
  theme: TextTheme.ERROR
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
  title: 'Заголовок текста'
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
  text: 'Текст Текст Текст Текст'
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
