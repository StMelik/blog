import { ComponentMeta, ComponentStory } from '@storybook/react/';
import { Button } from '../../../Button';
import { Text } from '../../../Text';
import { Popover } from './Popover';

export default {
  title: 'shared/deprecated/Popover',
  component: Popover
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => (
  <Popover {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  trigger: <Button>Open</Button>,
  children: <Text text='Поповер' />
};
