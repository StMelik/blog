import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NotificationButton } from './NotificationButton';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import withMock from 'storybook-addon-mock';

export default {
  title: 'features/NotificationButton',
  component: NotificationButton,
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  decorators: [withMock]
} as ComponentMeta<typeof NotificationButton>;

const Template: ComponentStory<typeof NotificationButton> = (args) => (
  <NotificationButton {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];

Normal.parameters = {
  mockData: [
    {
      url: `${__API__}/notifications`,
      method: 'GET',
      status: 200,
      response: [
        {
          id: '1',
          title: 'Уведомление',
          description: 'Новое уведомление'
        },
        {
          id: '2',
          title: 'Уведомление 2',
          description: 'Новое уведомление 2'
        },
        {
          id: '3',
          title: 'Уведомление 3',
          description: 'Новое уведомление 3'
        }
      ]
    }
  ]
};
