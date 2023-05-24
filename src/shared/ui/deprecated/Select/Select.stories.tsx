import { ComponentMeta, ComponentStory } from '@storybook/react/';
import { Select } from './Select';

export default {
  title: 'shared/deprecated/Select',
  component: Select,
  args: {
    to: '/'
  }
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'label',
  options: [
    { value: '111', content: 'Первый пункт' },
    { value: '222', content: 'Второй пункт' }
  ]
};
