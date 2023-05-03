import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react/';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from './Modal';
import { Theme } from '@/shared/constants/theme';

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

export const Light = Template.bind({});
Light.args = {
  children: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio quasi fuga quam, consectetur quidem.'
};

export const Dark = Template.bind({});
Dark.args = {
  children: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio quasi fuga quam, consectetur quidem.'
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
