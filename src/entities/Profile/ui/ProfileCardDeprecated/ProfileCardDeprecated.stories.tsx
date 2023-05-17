import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react/';
import { ProfileCardDeprecated } from './ProfileCardDeprecated';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import avatar from '@/shared/assets/tests/storybook.jpg';

export default {
  title: 'entities/ProfileCardDeprecated',
  component: ProfileCardDeprecated,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ProfileCardDeprecated>;

const Template: ComponentStory<typeof ProfileCardDeprecated> = (args) => (
  <ProfileCardDeprecated {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  data: {
    age: 25,
    city: 'Moscow',
    country: Country.Russia,
    currency: Currency.RUB,
    first: 'Станислав',
    lastname: 'Мелещик',
    username: 'X44',
    avatar
  }
};

export const WithError = Template.bind({});
WithError.args = {
  error: 'error'
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true
};