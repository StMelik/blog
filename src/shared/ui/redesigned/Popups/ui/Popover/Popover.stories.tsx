import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react/';
import { Popover } from './Popover';
import { Button } from '../../../Button';

export default {
  title: 'shared/Popover',
  component: Popover,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => (
  <Popover {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  trigger: <Button>Open</Button>
};
