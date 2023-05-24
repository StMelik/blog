import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator';
import { ComponentMeta, ComponentStory } from '@storybook/react/';
import { StarRating } from './StarRating';

export default {
  title: 'shared/StarRating',
  component: StarRating
} as ComponentMeta<typeof StarRating>;

const Template: ComponentStory<typeof StarRating> = (args) => (
  <StarRating {...args} />
);

export const Primary = Template.bind({});

export const PrimarySelected = Template.bind({});
PrimarySelected.args = {
  selectedStars: 4
};

export const PrimaryRedesigned = Template.bind({});
PrimaryRedesigned.decorators = [
  FeatureFlagsDecorator({ isAppRedesigned: true })
];

export const PrimarySelectedRedesigned = Template.bind({});
PrimarySelectedRedesigned.args = {
  selectedStars: 4
};
PrimarySelectedRedesigned.decorators = [
  FeatureFlagsDecorator({ isAppRedesigned: true })
];
