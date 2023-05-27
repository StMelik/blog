import { ComponentStory, ComponentMeta } from '@storybook/react/';
import ProfilePage from './ProfilePage';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import withMock from 'storybook-addon-mock';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  decorators: [withMock]
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [
  RouterDecorator([':id', '1']),
  StoreDecorator({
    profile: {
      form: {
        age: 25,
        city: 'Moscow',
        country: Country.Russia,
        currency: Currency.RUB,
        first: 'Станислав',
        lastname: 'Мелещик',
        username: 'X44'
      }
    }
  })
];
Primary.parameters = {
  mockData: [
    {
      url: `${__API__}/profile-ratings?userId=&profileId=1`,
      method: 'GET',
      status: 200,
      response: [
        {
          rate: 4
        }
      ]
    }
  ]
};
