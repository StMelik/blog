import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react/';
import { CommentList } from './CommentList';

import Avatar from '@/shared/assets/tests/storybook.jpg';

export default {
  title: 'entities/Comment/CommentList',
  component: CommentList,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => (
  <CommentList {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  comments: [
    {
      id: '1',
      text: '1 comment',
      user: {
        id: '1',
        username: 'AUG',
        avatar: Avatar
      }
    },
    {
      id: '2',
      text: '2 comment',
      user: {
        id: '1',
        username: 'AUG',
        avatar: Avatar
      }
    },
    {
      id: '3',
      text: '3 comment',
      user: {
        id: '2',
        username: 'NanO'
      }
    }
  ]
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true
};

export const NoComments = Template.bind({});
NoComments.args = {
  comments: []
};
