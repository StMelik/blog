import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react/';

import { Modal } from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  args: {
    isOpen: true
  }
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio quasi fuga quam, consectetur quidem.'
};
