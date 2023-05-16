import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react/';
import { ProfileCardRedesigned } from './ProfileCardRedesigned';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import avatar from '@/shared/assets/tests/storybook.jpg';

export default {
  title: 'entities/ProfileCardRedesigned',
  component: ProfileCardRedesigned,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ProfileCardRedesigned>;

const Template: ComponentStory<typeof ProfileCardRedesigned> = (args) => (
  <ProfileCardRedesigned {...args} />
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
