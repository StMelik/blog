import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react/';
import { ArticlesPageFilter } from './ArticlesPageFilter';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

export default {
  title: 'pages/ArticlesPage/ArticlesPageFilter',
  component: ArticlesPageFilter,
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  decorators: [StoreDecorator({})]
} as ComponentMeta<typeof ArticlesPageFilter>;

const Template: ComponentStory<typeof ArticlesPageFilter> = (args) => (
  <ArticlesPageFilter {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [];
