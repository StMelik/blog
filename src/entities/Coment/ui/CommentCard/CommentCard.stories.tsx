import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react/';
import { CommentCard } from './CommentCard';

import Avatar from '@/shared/assets/tests/storybook.jpg';
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator';

export default {
  title: 'entities/Comment/CommentCard',
  component: CommentCard,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => (
  <CommentCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  comment: {
    id: '1',
    text: '1 comment',
    user: {
      id: '1',
      username: 'AUG',
      avatar: Avatar
    }
  }
};

export const PrimaryRedesign = Template.bind({});
PrimaryRedesign.args = {
  comment: {
    id: '1',
    text: '1 comment',
    user: {
      id: '1',
      username: 'AUG',
      avatar: Avatar
    }
  }
};

PrimaryRedesign.decorators = [FeatureFlagsDecorator({ isAppRedesigned: true })];

export const NoAvatar = Template.bind({});
NoAvatar.args = {
  comment: {
    id: '1',
    text: '1 comment',
    user: {
      id: '1',
      username: 'AUG'
    }
  }
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true
};
