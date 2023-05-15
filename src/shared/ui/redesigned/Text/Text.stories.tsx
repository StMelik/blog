import { ComponentMeta, ComponentStory } from '@storybook/react/';

import { Text } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  args: {
    title: 'Заголовок текста',
    text: 'Текст Текст Текст Текст'
  }
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const SizeL = Template.bind({});
SizeL.args = {
  size: 'l'
};

export const Error = Template.bind({});
Error.args = {
  variant: 'error'
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  text: undefined
};

export const OnlyText = Template.bind({});
OnlyText.args = {
  title: undefined
};
