import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react/';
import { ListBox } from './ListBox';

export default {
  title: 'shared/ListBox',
  component: ListBox,
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  args: {
    value: 'ListBox',
    items: [
      {
        content: 'Content1Content1',
        value: '1'
      },
      {
        content: 'Content2Content2',
        value: '2'
      },
      {
        content: 'Content3Content3',
        value: '3'
      }
    ]
  },
  decorators: [
    (Story) => <div style={{ padding: 150 }}><Story /></div>
  ]
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const BottomLeft = Template.bind({});
BottomLeft.args = {
  direction: 'bottom left'
};

export const BottomRight = Template.bind({});
BottomRight.args = {
  direction: 'bottom right'
};

export const TopLeft = Template.bind({});
TopLeft.args = {
  direction: 'top left'
};

export const TopRight = Template.bind({});
TopRight.args = {
  direction: 'top right'
};
