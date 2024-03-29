import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react/';
import { ProfileCard } from './ProfileCard';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import avatar from '@/shared/assets/tests/storybook.jpg';
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
  <ProfileCard {...args} />
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

export const PrimaryRedesign = Template.bind({});
PrimaryRedesign.args = {
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
PrimaryRedesign.decorators = [FeatureFlagsDecorator({ isAppRedesigned: true })];

export const WithError = Template.bind({});
WithError.args = {
  error: 'error'
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true
};
