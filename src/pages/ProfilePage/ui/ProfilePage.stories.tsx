import { ComponentStory, ComponentMeta } from '@storybook/react/';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import ProfilePage from './ProfilePage';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
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

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
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
})];
