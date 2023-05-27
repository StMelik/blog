import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import AdminPanelPage from './AdminPanelPage';

export default {
  title: 'pages/AdminPanelPage',
  component: AdminPanelPage,
  decorators: [StoreDecorator({}), RouterDecorator()]
} as ComponentMeta<typeof AdminPanelPage>;

const Template: ComponentStory<typeof AdminPanelPage> = (args) => (
  <AdminPanelPage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
