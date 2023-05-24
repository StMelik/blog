import { ComponentMeta, ComponentStory } from '@storybook/react/';
import { Avatar } from './Avatar';

import AvatarImg from '@/shared/assets/tests/storybook.jpg';

export default {
  title: 'shared/Avatar',
  component: Avatar,
  args: {
    src: AvatarImg
  }
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});

export const Small = Template.bind({});
Small.args = {
  size: 50
};

export const Error = Template.bind({});
Error.args = {
  src: ''
};

export const ErrorWithUsername = Template.bind({});
ErrorWithUsername.args = {
  src: '',
  size: 50,
  username: 'Admin'
};

export const WithUsername = Template.bind({});
WithUsername.args = {
  size: 50,
  username: 'Admin'
};
