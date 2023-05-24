import { ComponentStory, ComponentMeta } from '@storybook/react/';
import MainPage from './MainPage';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

export default {
  title: 'pages/MainPage',
  component: MainPage,
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  decorators: [StoreDecorator({})]
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = () => <MainPage />;

export const Primary = Template.bind({});
Primary.args = {};
