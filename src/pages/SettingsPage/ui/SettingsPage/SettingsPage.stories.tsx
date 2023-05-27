import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import SettingsPage from './SettingsPage';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator';

export default {
  title: 'pages/SettingsPage',
  component: SettingsPage,
  decorators: [StoreDecorator({}), RouterDecorator()]
} as ComponentMeta<typeof SettingsPage>;

const Template: ComponentStory<typeof SettingsPage> = (args) => (
  <SettingsPage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
