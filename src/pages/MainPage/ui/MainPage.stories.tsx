import { ComponentStory, ComponentMeta } from '@storybook/react/';
import MainPage from './MainPage';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator';

export default {
  title: 'pages/MainPage',
  component: MainPage,
  decorators: [StoreDecorator({}), RouterDecorator()]
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = () => <MainPage />;

export const Primary = Template.bind({});
Primary.args = {};
