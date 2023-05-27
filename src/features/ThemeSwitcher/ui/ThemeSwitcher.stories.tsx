import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ComponentMeta, ComponentStory } from '@storybook/react/';
import { ThemeSwitcher } from './ThemeSwitcher';

export default {
  title: 'features/ThemeSwitcher',
  component: ThemeSwitcher,
  decorators: [StoreDecorator({})]
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => (
  <ThemeSwitcher {...args} />
);

export const Primary = Template.bind({});

export const PrimaryRedesigned = Template.bind({});
PrimaryRedesigned.decorators = [
  FeatureFlagsDecorator({ isAppRedesigned: true })
];
