import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ComponentMeta, ComponentStory } from '@storybook/react/';
import withMock from 'storybook-addon-mock';
import { NotificationList } from './NotificationList';

export default {
  title: 'entities/Notification/NotificationList',
  component: NotificationList,
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  decorators: [withMock]
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => (
  <NotificationList {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({})];

Primary.parameters = {
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
