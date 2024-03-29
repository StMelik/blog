import { ComponentMeta, ComponentStory } from '@storybook/react/';
import { Input } from './Input';

export default {
  title: 'shared/deprecated/Input',
  component: Input
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'Введите текст',
  value: 'Какой-то текст'
};
