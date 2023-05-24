import { ComponentMeta, ComponentStory } from '@storybook/react/';
import { Button } from '../../../Button';
import { Dropdown } from './Dropdown';

export default {
  title: 'shared/deprecated/Dropdown',
  component: Dropdown
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  trigger: <Button>Open</Button>,
  items: [
    {
      content: 'first'
    },
    {
      content: 'second'
    },
    {
      content: 'third'
    }
  ]
};
