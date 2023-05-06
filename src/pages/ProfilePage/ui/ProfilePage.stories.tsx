import { ComponentStory, ComponentMeta } from '@storybook/react/';
import ProfilePage from './ProfilePage';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [
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
