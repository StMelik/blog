import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProfileRating from './ProfileRating';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import withMock from 'storybook-addon-mock';

export default {
  title: 'features/ProfileRating',
  component: ProfileRating,
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  decorators: [withMock]
} as ComponentMeta<typeof ProfileRating>;

const Template: ComponentStory<typeof ProfileRating> = (args) => (
  <ProfileRating {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  profileId: '1'
};
Normal.decorators = [
  StoreDecorator({
    user: {
      authData: {
        id: '2'
      }
    }
  })
];

Normal.parameters = {
  mockData: [
    {
      url: `${__API__}/profile-ratings?userId=2&profileId=1`,
      method: 'GET',
      status: 200,
      response: [{ rate: 4 }]
    }
  ]
};

export const WithoutRate = Template.bind({});
WithoutRate.args = {
  profileId: '1'
};
WithoutRate.decorators = [
  StoreDecorator({
    user: {
      authData: {
        id: '2'
      }
    }
  })
];

WithoutRate.parameters = {
  mockData: [
    {
      url: `${__API__}/profile-ratings?userId=2&profileId=1`,
      method: 'GET',
      status: 200,
      response: []
    }
  ]
};
