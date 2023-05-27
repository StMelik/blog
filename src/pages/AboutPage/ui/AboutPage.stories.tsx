import { ComponentStory, ComponentMeta } from '@storybook/react/';
import AboutPage from './AboutPage';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator';

export default {
  title: 'pages/AboutPage',
  component: AboutPage,
  decorators: [StoreDecorator({}), RouterDecorator()]
} as ComponentMeta<typeof AboutPage>;

const Template: ComponentStory<typeof AboutPage> = () => <AboutPage />;

export const Primary = Template.bind({});
Primary.args = {};
