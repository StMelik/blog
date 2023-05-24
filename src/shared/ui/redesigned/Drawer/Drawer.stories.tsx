import { ComponentMeta, ComponentStory } from '@storybook/react/';
import { Text } from '../Text';
import { Drawer } from './Drawer';

export default {
  title: 'shared/Drawer',
  component: Drawer,
  args: {
    isOpen: true,
    children: <Text text='Содержимое' />
  }
} as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = (args) => <Drawer {...args} />;

export const Primary = Template.bind({});
