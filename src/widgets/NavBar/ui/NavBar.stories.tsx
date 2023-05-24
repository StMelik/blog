import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react/';

import { NavBar } from './NavBar';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

export default {
  title: 'widgets/NavBar',
  component: NavBar,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({})];
